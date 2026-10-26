// components/president/president-result.tsx
'use client'

export default function PresidentResult({
  topicTitle,
  correct,
  total,
  passed,
  xp,
  onRetry,
  onBack,
}: {
  topicTitle: string
  correct: number
  total: number
  passed: boolean
  xp: number
  onRetry: () => void
  onBack: () => void
}) {
  const percent = total > 0 ? Math.round((correct / total) * 100) : 0

  return (
    <section className="flex flex-col gap-5">
      <button
        onClick={onBack}
        className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Mavzular
      </button>

      <div
        className={`relative overflow-hidden rounded-[32px] p-7 text-center text-white shadow-2xl ${
          passed
            ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600'
            : 'bg-gradient-to-br from-amber-600 via-orange-600 to-red-600'
        }`}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <div className="text-6xl">{passed ? '🎉' : '💪'}</div>
          <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
            {passed ? "MAVZU TUGALLANDI" : "DAVOM ETING"}
          </p>
          <h1 className="mt-2 text-5xl font-black tracking-tight">
            {percent}%
          </h1>
          <p className="mt-2 text-sm font-black">{topicTitle}</p>
          <p className="mt-1 text-[11px] text-white/80">
            {correct} / {total} ta to'g'ri javob
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ResultBox icon="✓" value={`${correct}`} label="To'g'ri" />
        <ResultBox icon="⭐" value={`+${xp}`} label="XP" />
      </div>

      {passed ? (
        <button
          onClick={onBack}
          className="rounded-[20px] bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-sm font-black text-white shadow-lg"
        >
          ✓ Keyingi mavzuga o'tish
        </button>
      ) : (
        <button
          onClick={onRetry}
          className="rounded-[20px] bg-gradient-to-r from-amber-600 to-orange-600 py-4 text-sm font-black text-white shadow-lg"
        >
          🔄 Yana urinish
        </button>
      )}

      <button
        onClick={onBack}
        className="rounded-[20px] border bg-card py-4 text-sm font-black transition hover:bg-muted"
      >
        ← Mavzularga qaytish
      </button>
    </section>
  )
}

function ResultBox({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-[22px] border bg-card p-4 text-center shadow-sm">
      <div className="flex justify-center text-lg">{icon}</div>
      <div className="mt-2 text-lg font-black">{value}</div>
      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
