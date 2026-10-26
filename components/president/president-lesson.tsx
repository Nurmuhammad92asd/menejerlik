// components/president/president-lesson.tsx
'use client'

import {
  BarChart,
  CircleDiagram,
  LineChart,
  PieChart,
  RectangleDiagram,
  TriangleDiagram,
  NumberLine,
  FormulaBlock,
  StepsVisual,
} from './president-visual'

/* =========================================================
   LESSON CONTENT
========================================================= */

type LessonContent = {
  intro?: string
  formulas?: { formula: string; label?: string; color?: 'blue' | 'green' | 'purple' | 'amber' }[]
  diagrams?: Array<{ kind: string; props: any }>
  steps?: { number: number; text: string }[]
  examples?: Array<{
    question: string
    solution: string
    steps?: string[]
  }>
  tips?: string[]
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PresidentLesson({
  title,
  content,
  onStartQuiz,
  onBack,
}: {
  title: string
  content: LessonContent
  onStartQuiz: () => void
  onBack: () => void
}) {
  return (
    <section className="flex flex-col gap-5">
      <button
        onClick={onBack}
        className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Mavzular
      </button>

      {/* Hero */}
      <div className="rounded-[28px] bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-6 text-white shadow-2xl">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-200">
          📚 DARS
        </p>
        <h1 className="mt-1 text-2xl font-black">{title}</h1>
        <p className="mt-2 text-[12px] text-white/80">
          Tushuncha → Misol → Diagramma → Mashq
        </p>
      </div>

      {/* Intro */}
      {content.intro && (
        <div className="rounded-[22px] border bg-card p-5 shadow-sm">
          <p className="text-[13px] leading-7">{content.intro}</p>
        </div>
      )}

      {/* Formulas */}
      {content.formulas && content.formulas.length > 0 && (
        <div>
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
            FORMULALAR
          </p>
          {content.formulas.map((f, i) => (
            <FormulaBlock key={i} formula={f.formula} label={f.label} color={f.color} />
          ))}
        </div>
      )}

      {/* Diagrams */}
      {content.diagrams && content.diagrams.length > 0 && (
        <div>
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
            DIAGRAMMALAR
          </p>
          {content.diagrams.map((d, i) => {
            if (d.kind === 'triangle') return <TriangleDiagram key={i} {...d.props} />
            if (d.kind === 'rectangle') return <RectangleDiagram key={i} {...d.props} />
            if (d.kind === 'circle') return <CircleDiagram key={i} {...d.props} />
            if (d.kind === 'bar') return <BarChart key={i} {...d.props} />
            if (d.kind === 'line') return <LineChart key={i} {...d.props} />
            if (d.kind === 'pie') return <PieChart key={i} {...d.props} />
            if (d.kind === 'numberline') return <NumberLine key={i} {...d.props} />
            return null
          })}
        </div>
      )}

      {/* Steps */}
      {content.steps && content.steps.length > 0 && (
        <div>
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
            QADAMLAR
          </p>
          <StepsVisual steps={content.steps} />
        </div>
      )}

      {/* Examples */}
      {content.examples && content.examples.length > 0 && (
        <div>
          <p className="mb-2 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
            MISOL
          </p>
          {content.examples.map((ex, i) => (
            <div key={i} className="mb-3 rounded-[20px] border bg-card p-5 shadow-sm">
              <p className="text-[12px] font-bold">{ex.question}</p>
              <div className="mt-3 rounded-[14px] border-l-4 border-emerald-500 bg-emerald-50 p-3 dark:bg-emerald-950/20">
                <p className="text-[11px] font-black text-emerald-700 dark:text-emerald-400">
                  ✓ Javob: {ex.solution}
                </p>
                {ex.steps && (
                  <ol className="mt-2 space-y-1">
                    {ex.steps.map((s, j) => (
                      <li key={j} className="text-[10px] leading-5 text-emerald-600 dark:text-emerald-400">
                        {j + 1}. {s}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      {content.tips && content.tips.length > 0 && (
        <div className="rounded-[22px] border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/30 dark:bg-amber-950/20">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-700">
            💡 MASLAHATLAR
          </p>
          <ul className="mt-2 space-y-1">
            {content.tips.map((tip, i) => (
              <li key={i} className="text-[11px] leading-5 text-amber-700 dark:text-amber-300">
                • {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <button
        onClick={onStartQuiz}
        className="rounded-[20px] bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
      >
        🎯 Testni boshlash →
      </button>
    </section>
  )
}
