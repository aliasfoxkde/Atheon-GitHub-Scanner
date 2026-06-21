import { useState } from 'react'
import {
  BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie,
} from 'recharts'

// ─── Bar Chart ──────────────────────────────────────────────────────────────────
export function BarChart({ data = {}, title = '' }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const entries = Object.entries(data).filter(([, v]) => v > 0)
  const maxValue = Math.max(...Object.values(data), 1)

  const TIER_COLORS = { A: '#22c55e', B: '#3b82f6', C: '#f59e0b', D: '#f97316', F: '#ef4444' }
  const FALLBACK_COLORS = ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f43f5e']

  const chartData = entries.map(([k, v]) => ({ name: k, value: v }))

  if (!entries.length) return (
    <div className="w-full">
      {title && <h3 className="text-sm font-medium text-gray-400 mb-4">{title}</h3>}
      <div className="flex items-center justify-center h-32 text-gray-500 text-sm">No data available</div>
    </div>
  )

  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-medium text-gray-400 mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={180}>
        <ReBarChart data={chartData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          onMouseLeave={() => setActiveIndex(null)}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} width={40}
            tickFormatter={(v) => v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v} />
          <Tooltip
            contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 8, color: '#f9fafb' }}
            formatter={(val) => [val.toLocaleString(), 'Packages']}
            cursor={{ fill: 'rgba(99,102,241,0.1)' }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]} onMouseEnter={(_, idx) => setActiveIndex(idx)}>
            {chartData.map((entry, i) => (
              <Cell key={entry.name} fill={TIER_COLORS[entry.name] || FALLBACK_COLORS[i % FALLBACK_COLORS.length]}
                opacity={activeIndex === null || activeIndex === i ? 1 : 0.5} />
            ))}
          </Bar>
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  )
}

// ─── Donut / Pie Chart ──────────────────────────────────────────────────────────
const SEVERITY_COLORS = { Critical: '#ef4444', High: '#f97316', Medium: '#f59e0b', Low: '#22c55e', Info: '#3b82f6' }
const SEG_PALETTE = ['#ef4444', '#f97316', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6']

export function DonutChart({ data = {}, title = '', size = 200 }) {
  const [activeIdx, setActiveIdx] = useState(null)
  const entries = Object.entries(data).filter(([, v]) => v > 0)
  const total = entries.reduce((s, [, v]) => s + v, 0)

  const chartData = entries.map(([name, value]) => ({ name, value }))

  if (!entries.length) return (
    <div className="w-full">
      {title && <h3 className="text-sm font-medium text-gray-400 mb-4">{title}</h3>}
      <div className="flex items-center justify-center h-40 text-gray-500 text-sm">No data</div>
    </div>
  )

  return (
    <div className="w-full">
      {title && <h3 className="text-sm font-medium text-gray-400 mb-4">{title}</h3>}
      <div className="flex items-center gap-4">
        <div className="relative">
          <ResponsiveContainer width={size} height={size}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={size * 0.32}
                outerRadius={size * 0.48}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={(_, idx) => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {chartData.map((entry, i) => (
                  <Cell
                    key={entry.name}
                    fill={SEVERITY_COLORS[entry.name] || SEG_PALETTE[i % SEG_PALETTE.length]}
                    opacity={activeIdx === null || activeIdx === i ? 1 : 0.45}
                    stroke="none"
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#1f2937', border: '1px solid #374151', borderRadius: 8, color: '#f9fafb' }}
                formatter={(val, name) => [`${val.toLocaleString()} (${((val / total) * 100).toFixed(1)}%)`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold text-white">{total.toLocaleString()}</span>
            <span className="text-xs text-gray-400">total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {chartData.map((entry, i) => {
            const color = SEVERITY_COLORS[entry.name] || SEG_PALETTE[i % SEG_PALETTE.length]
            const pct = ((entry.value / total) * 100).toFixed(1)
            return (
              <div key={entry.name} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-xs text-gray-300 truncate">{entry.name}</span>
                </div>
                <span className="text-xs font-medium text-white flex-shrink-0">{pct}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Charts() { return null }
