// components/president/president-hub.tsx
'use client'

import type { Section, SectionId, Progress } from './president-types'

export default function PresidentHub({
  sections,
  progress,
  onSectionClick,
  onBack,
}: {
  sections: Section[]
  progress: Progress
  onSectionClick: (id: SectionId) => void
  onBack: () => void
}) {
  const completedCount = progress.completedTopics.length
  const totalTopics = sections.reduce((sum, s) => sum + s.topics.length, 0)
  const progressPercent =
    totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0

  return (
    <section className="flex flex-col gap-5">
      <button
        onClick={onBack}
        className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        O'quvchi Akademiyasi
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-6 text-white shadow-2xl">
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-yellow-300/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-red-300/20 blur-2xl" />
        <div className="relative">
          <div className="text-4xl">🏫</div>
          <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-yellow-200">
            PRESIDENT SCHOOL PREP
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">
            Prezident Maktabi
          </h1>
          <p className="mt-2 max-w-md text-[12px] leading-6 text-white/85">
            Har bir bo'lim va mavzu bo'yicha tayyorgarlik. Haqiqiy imtihon
            formatida mashq qiling.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <StatBox value={`${progress.totalXp}`} label="Jami XP" />
            <StatBox value={`${completedCount}/${totalTopics}`} label="Mavzular" />
            <StatBox value={`${progressPercent}%`} label="Progress" />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid gap-3">
        {sections.map(section => {
          const sectionCompleted = section.topics.filter(t =>
            progress.completedTopics.includes(t.id),
          ).length
          const sectionTotal = section.topics.length
          const sectionPercent =
            sectionTotal > 0
              ? Math.round((sectionCompleted / sectionTotal) * 100)
              : 0

          return (
            <button
              key={section.id}
              onClick={() => onSectionClick(section.id)}
              className="group relative overflow-hidden rounded-[25px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
            >
              <div
                className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${section.gradient}`}
              />
              <div className="flex items-center gap-4">
                <div
                  className={`flex size-14 shrink-0 items-center justify-center rounded-[19px] bg-gradient-to-br ${section.gradient} text-2xl text-white shadow-lg`}
                >
                  {section.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-black">{section.title}</h3>
                    <span className="text-[10px] font-black text-muted-foreground">
                      {sectionCompleted}/{sectionTotal}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                    {section.description}
                  </p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${section.gradient} transition-all duration-700`}
                      style={{ width: `${sectionPercent}%` }}
                    />
                  </div>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:translate-x-1 group-hover:bg-blue-50 group-hover:text-blue-700">
                  →
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Info */}
      <div className="rounded-[25px] border border-amber-100 bg-amber-50/70 p-5 dark:border-amber-900/20 dark:bg-amber-950/10">
        <div className="flex gap-3">
          <div className="text-xl">🎯</div>
          <div>
            <p className="text-sm font-black">Prezident Maktabi tayyorlov</p>
            <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
              Har bir mavzuda 10 ta savol. 70% dan yuqori natija keyingi
              mavzuni ochadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
      <p className="text-base font-black">{value}</p>
      <p className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-white/60">
        {label}
      </p>
    </div>
  )
}
