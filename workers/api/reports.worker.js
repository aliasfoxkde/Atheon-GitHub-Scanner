// Cloudflare Worker for handling report browsing and filtering

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  try {
    // Parse query parameters
    const category = url.searchParams.get('category');
    const tier = url.searchParams.get('tier');
    const language = url.searchParams.get('language');
    const minScore = url.searchParams.get('minScore');
    const search = url.searchParams.get('search');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');

    // Build query
    let query = 'SELECT * FROM public_reports WHERE 1=1';
    const params = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (tier) {
      query += ' AND tier = ?';
      params.push(tier);
    }

    if (language) {
      query += ' AND language = ?';
      params.push(language);
    }

    if (minScore) {
      query += ' AND quality_score >= ?';
      params.push(parseInt(minScore));
    }

    if (search) {
      query += ' AND (repo_name LIKE ? OR description LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm);
    }

    // Add pagination
    const offset = (page - 1) * limit;
    query += ' ORDER BY last_scanned DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);

    // Execute query
    const result = await env.DB.prepare(query).bind(...params).all();

    // Get total count
    const countQuery = query.replace('SELECT *', 'SELECT COUNT(*)').split('ORDER BY')[0];
    const countResult = await env.DB.prepare(countQuery).bind(...params.slice(0, -2)).first();
    const total = countResult['COUNT(*)'];

    // Return paginated results
    return new Response(JSON.stringify({
      reports: result.results,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error in reports worker:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Handler for individual report retrieval
export async function onRequestGetById(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const reportId = url.pathname.split('/').pop();

  try {
    // Get specific report
    const report = await env.DB.prepare(
      'SELECT * FROM public_reports WHERE id = ?'
    ).bind(reportId).first();

    if (!report) {
      return new Response(JSON.stringify({ error: 'Report not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get detailed findings for this report
    const findings = await env.DB.prepare(
      'SELECT * FROM findings WHERE report_id = ? ORDER BY severity DESC, category ASC'
    ).bind(reportId).all();

    // Combine report and findings
    const reportData = {
      ...report,
      findings: findings.results || []
    };

    return new Response(JSON.stringify(reportData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error fetching report:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}