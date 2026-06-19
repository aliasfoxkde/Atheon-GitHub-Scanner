// Cloudflare Worker for handling code scanning requests
// This worker integrates with the Go scanner backend

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    // Parse request body
    const data = await request.json();
    const { type, url, repo, files } = data;

    // Validate input
    if (!type || !['github', 'upload', 'url'].includes(type)) {
      return new Response(JSON.stringify({ error: 'Invalid submission type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Generate analysis ID
    const analysisId = crypto.randomUUID();

    // Store analysis request in queue
    await env.ANALYSIS_QUEUE.send({
      id: analysisId,
      type,
      url,
      repo,
      files,
      timestamp: Date.now(),
      status: 'queued'
    });

    // Return initial response
    return new Response(JSON.stringify({
      analysisId,
      status: 'queued',
      message: 'Analysis queued successfully'
    }), {
      status: 202,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error in scan worker:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const analysisId = url.pathname.split('/').pop();

  try {
    // Check analysis status
    const analysis = await env.ANALYSES.get(analysisId);

    if (!analysis) {
      return new Response(JSON.stringify({ error: 'Analysis not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const analysisData = JSON.parse(analysis);

    return new Response(JSON.stringify({
      id: analysisId,
      status: analysisData.status,
      progress: analysisData.progress || 0,
      results: analysisData.results || null,
      error: analysisData.error || null
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error fetching analysis status:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}