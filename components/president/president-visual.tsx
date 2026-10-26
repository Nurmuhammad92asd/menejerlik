// components/president/president-visual.tsx
'use client'

/* =========================================================
   VISUAL COMPONENTS — SVG diagrammalar
========================================================= */

// Triangle
export function TriangleDiagram({
  a = '3',
  b = '4',
  c = '5',
  label = 'Uchburchak',
}: {
  a?: string
  b?: string
  c?: string
  label?: string
}) {
  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox="0 0 200 160" className="w-full max-w-[280px]">
        <polygon
          points="30,130 170,130 100,20"
          fill="rgba(59,130,246,0.15)"
          stroke="#3b82f6"
          strokeWidth="3"
        />
        <text x="100" y="150" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">
          {a}
        </text>
        <text x="50" y="80" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">
          {b}
        </text>
        <text x="150" y="80" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">
          {c}
        </text>
      </svg>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Rectangle
export function RectangleDiagram({
  w = '8',
  h = '5',
  label = "To'g'ri to'rtburchak",
}: {
  w?: string
  h?: string
  label?: string
}) {
  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox="0 0 200 150" className="w-full max-w-[280px]">
        <rect x="30" y="30" width="140" height="90" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="3" />
        <text x="100" y="80" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">
          Y = {w} × {h}
        </text>
        <text x="100" y="140" textAnchor="middle" fill="#10b981" fontSize="12">
          eni = {w}
        </text>
        <text x="180" y="80" textAnchor="middle" fill="#10b981" fontSize="12" transform="rotate(90, 180, 80)">
          bo'yi = {h}
        </text>
      </svg>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Circle
export function CircleDiagram({
  r = '5',
  label = 'Aylana',
}: {
  r?: string
  label?: string
}) {
  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox="0 0 200 150" className="w-full max-w-[280px]">
        <circle cx="100" cy="75" r="60" fill="rgba(139,92,246,0.15)" stroke="#8b5cf6" strokeWidth="3" />
        <line x1="100" y1="75" x2="160" y2="75" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
        <text x="130" y="70" textAnchor="middle" fill="#8b5cf6" fontSize="12" fontWeight="bold">
          r = {r}
        </text>
        <text x="100" y="80" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">
          S = π·r²
        </text>
      </svg>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Bar Chart
export function BarChart({
  data,
  label = 'Jadval',
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
}: {
  data: { label: string; value: number }[]
  label?: string
  colors?: string[]
}) {
  const max = Math.max(...data.map(d => d.value), 1)
  const width = 60
  const gap = 20
  const startX = 30
  const height = 100

  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox={`0 0 ${startX * 2 + data.length * (width + gap)} 180`} className="w-full max-w-[400px]">
        {/* Y axis */}
        <line x1={startX} y1={20} x2={startX} y2={20 + height} stroke="#94a3b8" strokeWidth="2" />
        {/* X axis */}
        <line x1={startX} y1={20 + height} x2={startX + data.length * (width + gap)} y2={20 + height} stroke="#94a3b8" strokeWidth="2" />

        {data.map((d, i) => {
          const barHeight = (d.value / max) * height
          const x = startX + i * (width + gap) + gap / 2
          const y = 20 + height - barHeight

          return (
            <g key={i}>
              <rect
                x={x}
                y={y}
                width={width}
                height={barHeight}
                fill={colors[i % colors.length]}
                rx="4"
              />
              <text
                x={x + width / 2}
                y={y - 5}
                textAnchor="middle"
                fill={colors[i % colors.length]}
                fontSize="12"
                fontWeight="bold"
              >
                {d.value}
              </text>
              <text
                x={x + width / 2}
                y={20 + height + 15}
                textAnchor="middle"
                fill="#64748b"
                fontSize="10"
              >
                {d.label}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Line Chart
export function LineChart({
  data,
  label = 'Grafik',
}: {
  data: { x: string; y: number }[]
  label?: string
}) {
  const max = Math.max(...data.map(d => d.y), 1)
  const width = 280
  const height = 120
  const padding = 30
  const points = data
    .map((d, i) => {
      const x = padding + (i / (data.length - 1)) * (width - padding * 2)
      const y = padding + (1 - d.y / max) * (height - padding * 2)
      return `${x},${y}`
    })
    .join(' ')

  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full max-w-[320px]">
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" strokeWidth="2" />
        <polyline points={points} fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((d, i) => {
          const x = padding + (i / (data.length - 1)) * (width - padding * 2)
          const y = padding + (1 - d.y / max) * (height - padding * 2)
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="#3b82f6" />
              <text x={x} y={y - 8} textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">
                {d.y}
              </text>
              <text x={x} y={height - padding + 12} textAnchor="middle" fill="#64748b" fontSize="9">
                {d.x}
              </text>
            </g>
          )
        })}
      </svg>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Pie Chart (SVG)
export function PieChart({
  data,
  label = 'Diagramma',
}: {
  data: { label: string; value: number; color: string }[]
  label?: string
}) {
  const total = data.reduce((s, d) => s + d.value, 0)
  let cumulative = 0

  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox="0 0 200 150" className="w-full max-w-[280px]">
        <g transform="translate(100, 75)">
          {data.map((d, i) => {
            const angle = (d.value / total) * 360
            const startAngle = cumulative
            cumulative += angle
            const endAngle = cumulative

            const startRad = ((startAngle - 90) * Math.PI) / 180
            const endRad = ((endAngle - 90) * Math.PI) / 180

            const x1 = 60 * Math.cos(startRad)
            const y1 = 60 * Math.sin(startRad)
            const x2 = 60 * Math.cos(endRad)
            const y2 = 60 * Math.sin(endRad)

            const largeArc = angle > 180 ? 1 : 0

            return (
              <path
                key={i}
                d={`M 0 0 L ${x1} ${y1} A 60 60 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={d.color}
                stroke="white"
                strokeWidth="2"
              />
            )
          })}
        </g>
      </svg>
      <div className="flex flex-wrap justify-center gap-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="size-3 rounded" style={{ backgroundColor: d.color }} />
            <span className="text-[9px] font-bold">{d.label}: {d.value}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] font-bold text-muted-foreground">{label}</p>
    </div>
  )
}

// Number line
export function NumberLine({
  from = 0,
  to = 10,
  mark = 5,
}: {
  from?: number
  to?: number
  mark?: number
}) {
  const width = 300
  const padding = 20
  const steps = to - from

  return (
    <div className="my-4 flex flex-col items-center gap-2 rounded-[20px] border bg-slate-50 p-4 dark:bg-white/5">
      <svg viewBox={`0 0 ${width} 60`} className="w-full max-w-[320px]">
        <line x1={padding} y1="40" x2={width - padding} y2="40" stroke="#3b82f6" strokeWidth="2" />
        {Array.from({ length: steps + 1 }).map((_, i) => {
          const x = padding + (i / steps) * (width - padding * 2)
          const value = from + i
          const isMarked = value === mark
          return (
            <g key={i}>
              <line x1={x} y1="35" x2={x} y2="45" stroke="#3b82f6" strokeWidth="2" />
              <text x={x} y="58" textAnchor="middle" fill={isMarked ? '#ef4444' : '#64748b'} fontSize="10" fontWeight={isMarked ? 'bold' : 'normal'}>
                {value}
              </text>
              {isMarked && <circle cx={x} cy="40" r="5" fill="#ef4444" />}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Formula block
export function FormulaBlock({
  formula,
  label,
  color = 'blue',
}: {
  formula: string
  label?: string
  color?: 'blue' | 'green' | 'purple' | 'amber'
}) {
  const colors = {
    blue: 'border-blue-300 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900/30',
    green: 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-900/30',
    purple: 'border-violet-300 bg-violet-50 dark:bg-violet-950/20 dark:border-violet-900/30',
    amber: 'border-amber-300 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900/30',
  }

  return (
    <div className={`my-3 rounded-[16px] border-2 p-4 ${colors[color]}`}>
      <p className="text-center text-base font-mono font-black">{formula}</p>
      {label && <p className="mt-2 text-center text-[10px] font-bold text-muted-foreground">{label}</p>}
    </div>
  )
}

// Steps visual
export function StepsVisual({
  steps,
}: {
  steps: { number: number; text: string }[]
}) {
  return (
    <div className="my-4 flex flex-col gap-2">
      {steps.map(step => (
        <div key={step.number} className="flex items-start gap-3 rounded-[14px] border bg-card p-3">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
            {step.number}
          </div>
          <p className="flex-1 pt-1 text-[11px] font-semibold leading-5">{step.text}</p>
        </div>
      ))}
    </div>
  )
}
