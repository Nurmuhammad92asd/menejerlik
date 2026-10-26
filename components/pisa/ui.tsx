// components/pisa/ui.tsx
'use client'

export function BackButton({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
    >
      <span className="transition-transform group-hover:-translate-x-1">←</span>
      {text}
    </button>
  )
}

export function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
      <p className="text-base font-black">{value}</p>
      <p className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-white/50">
        {label}
      </p>
    </div>
  )
}

export function SkillBar({
  icon,
  title,
  value,
  gradient,
}: {
  icon: string
  title: string
  value: number
  gradient: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="text-base">{icon}</span>
        <span className="flex-1 text-[11px] font-bold">{title}</span>
        <span className="text-[10px] font-black">{value}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-muted/60 px-2.5 py-1.5 text-[8px] font-bold text-muted-foreground">
      {children}
    </span>
  )
}

export function LiveStatInline({
  icon,
  value,
  label,
}: {
  icon: string
  value: string
  label: string
}) {
  return (
    <div className="rounded-[19px] border bg-card p-3 text-center shadow-sm">
      <div className="text-sm">{icon}</div>
      <div className="mt-1 text-sm font-black">{value}</div>
      <div className="text-[7px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  )
}
