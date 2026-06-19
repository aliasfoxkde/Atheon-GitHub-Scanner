import { useState } from 'react'

export default function Submit() {
  const [formData, setFormData] = useState({
    type: 'github',
    url: '',
    repo: '',
    files: null
  })
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setScanning(true)

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Scan error:', error)
      alert('Failed to submit scan')
    } finally {
      setScanning(false)
    }
  }

  const handleFileChange = (e) => {
    const files = e.target.files
    setFormData({ ...formData, files })
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Submit Code for Analysis</h1>
        <p className="text-gray-400">
          Submit your GitHub repository or upload code for comprehensive security and quality analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Submission Form */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Submission Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="github">GitHub Repository</option>
                <option value="url">Public URL</option>
                <option value="upload">Upload Files</option>
              </select>
            </div>

            {/* GitHub Repository */}
            {formData.type === 'github' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Repository (owner/name)
                </label>
                <input
                  type="text"
                  value={formData.repo}
                  onChange={(e) => setFormData({ ...formData, repo: e.target.value })}
                  placeholder="facebook/react"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* URL */}
            {formData.type === 'url' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Repository URL
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://github.com/facebook/react"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {/* File Upload */}
            {formData.type === 'upload' && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Files
                </label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white file:mr-4 file:mt-2 file:border-gray-600"
                />
                <p className="mt-2 text-sm text-gray-400">
                  Upload multiple files for comprehensive analysis
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={scanning}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {scanning ? 'Scanning...' : 'Submit for Analysis'}
            </button>
          </form>
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">How It Works</h3>
            <ol className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                Submit your GitHub repository or code for analysis
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                Scanner analyzes code using 10+ security and quality patterns
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                Receive comprehensive quality report with findings and recommendations
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                Review detailed analysis and identify areas for improvement
              </li>
            </ol>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">What We Analyze</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Security vulnerabilities (secrets, credentials, injection risks)
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Code quality (anti-patterns, technical debt, complexity)
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Test coverage and documentation analysis
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Maintainability and complexity assessment
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Quality Scoring</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tier A (90-100)</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tier B (75-89)</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Tier C (60-74)</span>
                <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="bg-yellow-500 h-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Scan Results</h3>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
