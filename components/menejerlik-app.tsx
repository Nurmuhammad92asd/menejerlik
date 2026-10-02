'use client'

import { useState } from 'react'
import { HomeScreen } from '@/components/home-screen'
import { QuizScreen } from '@/components/quiz-screen'
import { ResultScreen } from '@/components/result-screen'
import { useHistory } from '@/hooks/use-history'
import { useBackButton, useTelegram } from '@/hooks/use-telegram'
import { createSession, type AnswerRecord, type QuizResult, type QuizSession } from '@/lib/quiz'
import { setClosingConfirmation } from '@/lib/telegram'

type Screen = 'home' | 'quiz' | 'result'

export function MenejerlikApp() {
  const { user, isTelegram } = useTelegram()
  const { history, stats, bestByCategory, addAttempt } = useHistory()
  const [screen, setScreen] = useState<Screen>('home')
  const [session, setSession] = useState<QuizSession | null>(null)
  const [result, setResult] = useState<QuizResult | null>(null)

  function goHome() {
    setClosingConfirmation(false)
    setScreen('home')
    setSession(null)
    window.scrollTo({ top: 0 })
  }

  function start(categoryId: string) {
    setSession(createSession(categoryId))
    setResult(null)
    setScreen('quiz')
    setClosingConfirmation(true)
    window.scrollTo({ top: 0 })
  }

  function finish(answers: AnswerRecord[]) {
    if (!session) return
    const correct = answers.filter((a) => a.selected === a.question.answer).length
    const durationSec = Math.round((Date.now() - session.startedAt) / 1000)
    const quizResult: QuizResult = {
      categoryId: session.categoryId,
      title: session.title,
      answers,
      correct,
      total: answers.length,
      durationSec,
    }
    setResult(quizResult)
    setScreen('result')
    setClosingConfirmation(false)
    window.scrollTo({ top: 0 })
    void addAttempt({
      id: `${Date.now()}`,
      categoryId: session.categoryId,
      correct,
      total: answers.length,
      durationSec,
      at: Date.now(),
    })
  }

  useBackButton(screen !== 'home', goHome)

  return (
    <main className="mx-auto min-h-dvh w-full max-w-md px-4 pt-6 pb-6">
      {screen === 'home' && (
        <HomeScreen user={user} history={history} stats={stats} bestByCategory={bestByCategory} onStart={start} />
      )}
      {screen === 'quiz' && session && (
        <QuizScreen key={session.startedAt} session={session} showCloseButton={!isTelegram} onExit={goHome} onFinish={finish} />
      )}
      {screen === 'result' && result && (
        <ResultScreen result={result} onRetry={() => start(result.categoryId)} onHome={goHome} />
      )}
    </main>
  )
}
