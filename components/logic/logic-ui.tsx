// components/logic/logic-ui.tsx
'use client'

import { useEffect, useState } from 'react'
import type {
  Lang,
  FallacyGame,
  RealFakeGame,
  LogicLockGame,
  ArgumentChainGame,
} from './logic-types'
import { t, tt, tl } from './logic-i18n'

/* =========================================================
   BACK BUTTON
========================================================= */

function BackButton({ onClick, text }: { onClick: () => void; text: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-fit items-center gap-2 text-[12px] font-bold text-muted-foreground transition hover:text-fuchsia-700"
    >
      <span className="transition-transform group-hover:-translate-x-1">←</span>
      {text}
    </button>
  )
}

/* =========================================================
   1. FALLACY HUNTER
========================================================= */

export function FallacyHunter({
  game,
  lang,
  onComplete,
  onBack,
  index,
  total,
}: {
  game: FallacyGame
  lang: Lang
  onComplete: (correct: boolean, xp: number) => void
  onBack: () => void
  index: number
  total: number
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)

  const options = tl(lang, game.options)
  const fallName = t(lang, `fallacy.${game.fallacyType}` as any)

  const handleCheck = () => {
    if (selected === null) return
    setChecked(true)
    const correct = selected === game.correct
    onComplete(correct, correct ? game.xp : 0)
  }

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={onBack} text={t(lang, 'backToHome')} />

      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-red-600">
          🔍 {t(lang, 'fallacyTitle')}
        </p>
        <p className="text-[11px] font-black text-muted-foreground">
          {index + 1} / {total}
        </p>
      </div>

      {/* Card */}
      <div className="rounded-[28px] border bg-card p-6 shadow-sm">
        <div className="rounded-[22px] border-2 border-dashed border-slate-300 bg-slate-50 p-5 dark:bg-white/5">
          <p className="text-[13px] leading-7 text-slate-700 dark:text-slate-300">
            "{tt(lang, game.text)}"
          </p>
        </div>

        <p className="mt-5 text-[11px] font-black uppercase tracking-wider text-muted-foreground">
          {t(lang, 'fallacies')}
        </p>

        <div className="mt-3 space-y-2">
          {options.map((opt, i) => {
            const isCorrect = checked && i === game.correct
            const isWrong = checked && i === selected && i !== game.correct
            const isSelected = selected === i

            return (
              <button
                key={i}
                onClick={() => !checked && setSelected(i)}
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
                    {isCorrect ? '✓' : isWrong ? '×' : String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </div>
              </button>
            )
          })}
        </div>

        {checked && (
          <div className="mt-5 rounded-[20px] border border-blue-200 bg-blue-50 p-4 dark:border-blue-900/30 dark:bg-blue-950/20">
            <p className="text-sm font-black text-blue-700 dark:text-blue-400">
              💡 {fallName}
            </p>
            <p className="mt-1 text-[11px] leading-5 text-blue-600 dark:text-blue-300">
              {tt(lang, game.explanation)}
            </p>
          </div>
        )}

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-red-600 to-orange-600 py-4 text-sm font-black text-white shadow-lg disabled:opacity-40"
          >
            {t(lang, 'check')} →
          </button>
        ) : (
          <button
            onClick={onBack}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white shadow-lg"
          >
            {t(lang, 'next')} →
          </button>
        )}
      </div>
    </section>
  )
}

/* =========================================================
   2. REAL OR FAKE
========================================================= */

export function RealOrFake({
  game,
  lang,
  onComplete,
  onBack,
  index,
  total,
}: {
  game: RealFakeGame
  lang: Lang
  onComplete: (correct: boolean, xp: number) => void
  onBack: () => void
  index: number
  total: number
}) {
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [checked, setChecked] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    if (checked) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer)
          setTimedOut(true)
          setChecked(true)
          onComplete(false, 0)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [checked, onComplete])

  const handleAnswer = (val: boolean) => {
    if (checked) return
    setAnswer(val)
    setChecked(true)
    const correct = val === game.isReal
    onComplete(correct, correct ? game.xp : 0)
  }

  const progress = ((30 - timeLeft) / 30) * 100
  const correct = answer === game.isReal

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={onBack} text={t(lang, 'backToHome')} />

      <div className="flex items-center justify-between">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-600">
          📱 {t(lang, 'realFakeTitle')}
        </p>
        <p className="text-[11px] font-black text-muted-foreground">
          {index + 1} / {total}
        </p>
      </div>

      {/* Timer */}
      <div className="rounded-[23px] border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black uppercase tracking-wider text-amber-600">
            ⏱ {timeLeft} {t(lang, 'seconds')}
          </p>
          {timedOut && (
            <p className="text-[10px] font-black text-red-600">{t(lang, 'timeUp')}</p>
          )}
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div
            className={`h-full rounded-full transition-all ${
              timeLeft <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-amber-500 to-yellow-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="rounded-[28px] border bg-card p-6 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
          {t(lang, 'real')} / {t(lang, 'fake')}?
        </p>
        <h2 className="mt-3 text-lg font-black leading-7">{tt(lang, game.headline)}</h2>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => handleAnswer(true)}
            disabled={checked}
            className={`rounded-[20px] border-2 p-5 text-center transition ${
              checked && game.isReal
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                : checked && answer === true
                  ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                  : 'hover:border-emerald-500 hover:bg-emerald-50/50'
            }`}
          >
            <div className="text-3xl">✅</div>
            <p className="mt-2 text-sm font-black">{t(lang, 'real')}</p>
          </button>
          <button
            onClick={() => handleAnswer(false)}
            disabled={checked}
            className={`rounded-[20px] border-2 p-5 text-center transition ${
              checked && !game.isReal
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                : checked && answer === false
                  ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                  : 'hover:border-red-500 hover:bg-red-50/50'
            }`}
          >
            <div className="text-3xl">❌</div>
            <p className="mt-2 text-sm font-black">{t(lang, 'fake')}</p>
          </button>
        </div>

        {checked && (
          <div
            className={`mt-5 rounded-[20px] border p-4 ${
              correct
                ? 'border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20'
                : 'border-red-200 bg-red-50 dark:bg-red-950/20'
            }`}
          >
            <p className="text-sm font-black">
              {timedOut ? '⏱ ' + t(lang, 'timeUp') : correct ? '🎉 ' + t(lang, 'correct') : '💡 ' + t(lang, 'wrong')}
            </p>
            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">
              <strong>{t(lang, 'source')}:</strong> {tt(lang, game.source)}
            </p>
            <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
              {tt(lang, game.reason)}
            </p>
          </div>
        )}

        {checked && (
          <button
            onClick={onBack}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-amber-600 to-orange-600 py-4 text-sm font-black text-white shadow-lg"
          >
            {t(lang, 'next')} →
          </button>
        )}
      </div>
    </section>
  )
}

/* =========================================================
   3. LOGIC LOCK
========================================================= */

export function LogicLock({
  game,
  lang,
  onComplete,
  onBack,
}: {
  game: LogicLockGame
  lang: Lang
  onComplete: (correctCount: number, total: number, xp: number) => void
  onBack: () => void
}) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const lock = game.locks[currentIdx]
  const isLast = currentIdx === game.locks.length - 1

  const handleCheck = () => {
    if (selected === null) return
    setChecked(true)
    if (selected === lock.correct) {
      setCorrectCount(c => c + 1)
    }
  }

  const handleNext = () => {
    if (isLast) {
      const totalCorrect = correctCount + (selected === lock.correct && !checked ? 1 : 0)
      const xp = Math.round(game.xp * (correctCount / game.locks.length))
      onComplete(correctCount, game.locks.length, xp)
    } else {
      setCurrentIdx(i => i + 1)
      setSelected(null)
      setChecked(false)
    }
  }

  const options = tl(lang, lock.options)

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={onBack} text={t(lang, 'backToHome')} />

      {/* Hero */}
      <div className="rounded-[28px] bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-600 p-6 text-white shadow-2xl">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-200">
          🔒 {t(lang, 'logicLockTitle')}
        </p>
        <h1 className="mt-1 text-2xl font-black">{tt(lang, game.title)}</h1>
        <div className="mt-4 flex gap-2">
          {game.locks.map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full ${
                i < currentIdx
                  ? 'bg-emerald-400'
                  : i === currentIdx
                    ? 'bg-white'
                    : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-white/70">
          {t(lang, 'lock')} {currentIdx + 1} / {game.locks.length}
        </p>
      </div>

      {/* Question */}
      <div className="rounded-[28px] border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 text-2xl text-white">
            🔒
          </div>
          <h2 className="flex-1 text-base font-black leading-6">{tt(lang, lock.question)}</h2>
        </div>

        <div className="mt-5 space-y-2">
          {options.map((opt, i) => {
            const isCorrect = checked && i === lock.correct
            const isWrong = checked && i === selected && i !== lock.correct
            const isSelected = selected === i

            return (
              <button
                key={i}
                onClick={() => !checked && setSelected(i)}
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
                {opt}
              </button>
            )
          })}
        </div>

        {checked && (
          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-[11px] leading-5 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300">
            💡 {tt(lang, lock.explanation)}
          </div>
        )}

        {!checked ? (
          <button
            onClick={handleCheck}
            disabled={selected === null}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-indigo-600 to-blue-600 py-4 text-sm font-black text-white disabled:opacity-40"
          >
            {t(lang, 'check')}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="mt-5 w-full rounded-[20px] bg-gradient-to-r from-emerald-600 to-teal-600 py-4 text-sm font-black text-white"
          >
            {isLast ? '🎉 ' + t(lang, 'finish') : t(lang, 'next') + ' →'}
          </button>
        )}
      </div>
    </section>
  )
}

/* =========================================================
   4. ARGUMENT CHAIN
========================================================= */

export function ArgumentChain({
  game,
  lang,
  onComplete,
  onBack,
}: {
  game: ArgumentChainGame
  lang: Lang
  onComplete: (correct: boolean, xp: number) => void
  onBack: () => void
}) {
  const [userOrder, setUserOrder] = useState<string[]>([])
  const [checked, setChecked] = useState(false)

  // Shuffle items initially
  const [shuffled] = useState(() => {
    const arr = [...game.items]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  })

  const handleTap = (id: string) => {
    if (checked) return
    if (userOrder.includes(id)) return
    setUserOrder(o => [...o, id])
  }

  const handleUndo = () => {
    if (checked) return
    setUserOrder(o => o.slice(0, -1))
  }

  const handleCheck = () => {
    if (userOrder.length !== game.items.length) return
    setChecked(true)
    const correct = userOrder.every((id, i) => id === game.correctOrder[i])
    onComplete(correct, correct ? game.xp : 0)
  }

  const getItemText = (id: string) => {
    const item = game.items.find(i => i.id === id)
    return item ? tt(lang, item.text) : ''
  }

  return (
    <section className="flex flex-col gap-5">
      <BackButton onClick={onBack} text={t(lang, 'backToHome')} />

      <div className="rounded-[28px] bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-700 p-6 text-white shadow-2xl">
        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-fuchsia-200">
          🔗 {t(lang, 'argumentChainTitle')}
        </p>
        <h1 className="mt-1 text-2xl font-black">{tt(lang, game.title)}</h1>
        <p className="mt-2 text-[11px] text-white/80">{t(lang, 'tapInOrder')}</p>
      </div>

      {/* Your order */}
      <div className="rounded-[28px] border bg-card p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
            {t(lang, 'yourOrder')}
          </p>
          <p className="text-[10px] font-black">
            {userOrder.length} / {game.items.length}
          </p>
        </div>

        <div className="mt-3 min-h-[80px] space-y-2">
          {userOrder.length === 0 && (
            <p className="rounded-xl border border-dashed p-4 text-center text-[11px] text-muted-foreground">
              {t(lang, 'tapInOrder')}
            </p>
          )}
          {userOrder.map((id, i) => {
            const isCorrect = checked && id === game.correctOrder[i]
            return (
              <div
                key={id}
                className={`flex items-center gap-3 rounded-xl border p-3 ${
                  checked
                    ? isCorrect
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                    : 'bg-blue-50 dark:bg-blue-950/20'
                }`}
              >
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-[10px] font-black text-white">
                  {i + 1}
                </span>
                <span className="flex-1 text-[11px] font-semibold">{getItemText(id)}</span>
              </div>
            )
          })}
        </div>

        {checked && (
          <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3 text-[11px] leading-5 text-blue-700 dark:border-blue-900/30 dark:bg-blue-950/20 dark:text-blue-300">
            💡 {tt(lang, game.explanation)}
          </div>
        )}
      </div>

      {/* Available items */}
      {!checked && (
        <div className="rounded-[28px] border bg-card p-5 shadow-sm">
          <p className="text-[9px] font-black uppercase tracking-wider text-muted-foreground">
            {t(lang, 'start')}
          </p>
          <div className="mt-3 space-y-2">
            {shuffled.map(item => {
              const used = userOrder.includes(item.id)
              return (
                <button
                  key={item.id}
                  onClick={() => handleTap(item.id)}
                  disabled={used}
                  className={`w-full rounded-xl border p-3 text-left text-[11px] font-semibold transition ${
                    used
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-muted/40 active:scale-[0.99]'
                  }`}
                >
                  {tt(lang, item.text)}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Actions */}
      {!checked && (
        <div className="flex gap-2">
          <button
            onClick={handleUndo}
            disabled={userOrder.length === 0}
            className="flex-1 rounded-[20px] border py-3 text-sm font-black disabled:opacity-40"
          >
            ↶ {t(lang, 'back')}
          </button>
          <button
            onClick={handleCheck}
            disabled={userOrder.length !== game.items.length}
            className="flex-[2] rounded-[20px] bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-sm font-black text-white disabled:opacity-40"
          >
            {t(lang, 'check')} →
          </button>
        </div>
      )}

      {checked && (
        <button
          onClick={onBack}
          className="w-full rounded-[20px] bg-gradient-to-r from-blue-700 to-cyan-600 py-4 text-sm font-black text-white"
        >
          {t(lang, 'next')} →
        </button>
      )}
    </section>
  )
}
