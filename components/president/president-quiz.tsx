// components/president/president-quiz.tsx
'use client'

import { useState } from 'react'
import type { Question, Topic } from './president-types'

export default function PresidentQuiz({
  topic,
  questions,
  onFinish,
  onExit,
}: {
  topic: Topic
  questions: Question[]
  onFinish: (correct: number, total: number) => void
  onExit: () => void
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const current = questions[currentIndex]
  const isLast = currentIndex === questions.length - 1
  const progress = Math.round(((currentIndex + 1) / questions.length) * 100)

  const handleCheck = () => {
    if (selected === null) return
    setChecked(true)
    if (selected === current.correct) {
      setCorrectCount(c => c + 1)
    }
  }

  const handleNext = () => {
    if (isLast) {
      const totalCorrect =
        correctCount + (selected === current.correct ? 1 : 0)
      onFinish(totalCorrect, questions.length)
    } else {
      setCurrentIndex(i => i + 1)
      setSelected(null)
      setChecked(false)
    }
  }

  return (
    <section className="flex flex-col gap-5">
      <button
        onClick={onExit}
        className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-blue-700"
      >
        <span className="transition-transform group-hover:-translate-x-1">←</span>
        Chiqish
      </button>

      {/* Progress */}
      <div className="rounded-[23px] border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-700">
              {topic.title.toUpperCase()}
            </p>
            <p className="mt-1 text-xs font-black">
              Savol {currentIndex + 1} / {questions.length}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-bold uppercase text-muted-foreground">
              TO'G'RI
            </p>
            <p className="text-lg font-black">
              ✓ {correctCount}
            </p>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-[28px] border bg-card p-5 shadow-sm">
        <h2 className="text-base font-black leading-6">{current.question}</h2>

        <div className="mt-5 space-y-2">
          {current.options.map((option, index) => {
            const isCorrect = checked && index === current.correct
            const isWrong = checked && index === selected && index !== current.correct
            const isSelected = selected === index

            return (
              <button
                key={index}
                onClick={() => !checked && setSelected(index)}
                disabled={checked}
                className={`w-full rounded-xl border p-4 text-left text-[12px] font-semibold transition ${
                  isCorrect
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                    : isWrong
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                      : isSelected
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                        : 'hover:bg-muted/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-[10px] font-black ${
                      isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isWrong
                          ? 'bg-red-600 text-white'
                          : isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {isCorrect ? '✓' : isWrong ? '×' : String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </div>
              </button>
            )
          })}
        </div>

        {checked && (
          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-[11px] leading-5 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300">
            💡 {current.explanation}
          </div>
        )}

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white shadow-lg disabled:opacity-40"
          >
            Tekshirish →
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-sm font-black text-white shadow-lg"
          >
            {isLast ? '🎉 Yakunlash' : 'Keyingi savol →'}
          </button>
        )}
      </div>
    </section>
  )
}
