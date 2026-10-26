// components/president/president-section.tsx
'use client'

import type { Section, Topic, Progress } from './president-types'

export default function PresidentSection({
  section,
  progress,
  onTopicClick,
  onBack,
}: {
  section: Section
  progress: Progress
  onTopicClick: (topic: Topic) => void
  onBack: () => void
}) {
  return (
    <section className="flex flex-col gap-5">
      <button
        onClick={onBack}
        className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Prezident Maktabi
      </button>

      {/* Hero */}
      <div
        className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${section.gradient} p-6 text-white shadow-2xl`}
      >
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <div className="text-4xl">{section.icon}</div>
          <p className="mt-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/70">
            {section.topics.length} TA MAVZU
          </p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">
            {section.title}
          </h1>
          <p className="mt-2 max-w-md text-[12px] leading-6 text-white/85">
            {section.description}
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="grid gap-3">
        {section.topics.map(topic => {
          const isCompleted = progress.completedTopics.includes(topic.id)
          const correct = progress.correctByTopic[topic.id] || 0
          const total = progress.totalByTopic[topic.id] || 0
          const percent = total > 0 ? Math.round((correct / total) * 100) : 0

          return (
            <button
              key={topic.id}
              onClick={() => onTopicClick(topic)}
              className="group relative overflow-hidden rounded-[24px] border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-50 to-indigo-100 text-2xl dark:from-blue-950/30 dark:to-indigo-950/20">
                  {topic.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black">{topic.title}</h3>
                    {isCompleted && (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-black text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                        ✓ {percent}%
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                    {topic.description}
                  </p>
                  <p className="mt-1 text-[9px] font-bold text-muted-foreground">
                    {topic.questionCount} ta savol
                  </p>
                </div>
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all group-hover:translate-x-1 group-hover:bg-blue-50 group-hover:text-blue-700">
                  →
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
