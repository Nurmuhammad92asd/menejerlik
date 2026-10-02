'use client'

import { useEffect, useState } from 'react'
import { HomeScreen } from '@/components/home-screen'
import { QuizScreen } from '@/components/quiz-screen'
import { ResultScreen } from '@/components/result-screen'
import { useHistory } from '@/hooks/use-history'
import { useBackButton, useTelegram } from '@/hooks/use-telegram'
import {
  createSession,
  type AnswerRecord,
  type QuizResult,
  type QuizSession,
} from '@/lib/quiz'
import { setClosingConfirmation } from '@/lib/telegram'

type EducationType = 'preschool' | 'school'

type Screen =
  | 'home'
  | 'education'
  | 'modules'
  | 'topics'
  | 'levels'
  | 'quiz'
  | 'result'

type NavigationState = {
  educationType: EducationType | null
  moduleId: string | null
  topicId: string | null
  level: 'easy' | 'medium' | 'hard' | 'case' | null
}

const INITIAL_NAVIGATION: NavigationState = {
  educationType: null,
  moduleId: null,
  topicId: null,
  level: null,
}

export function MenejerlikApp() {
  const { user, isTelegram } = useTelegram()

  const {
    history,
    stats,
    bestByCategory,
    addAttempt,
  } = useHistory()

  const [screen, setScreen] = useState<Screen>('home')

  const [navigation, setNavigation] =
    useState<NavigationState>(INITIAL_NAVIGATION)

  const [session, setSession] =
    useState<QuizSession | null>(null)

  const [result, setResult] =
    useState<QuizResult | null>(null)

  /*
   * ----------------------------------------
   * NAVIGATION HELPERS
   * ----------------------------------------
   */

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function goHome() {
    setClosingConfirmation(false)

    setScreen('home')

    setNavigation(INITIAL_NAVIGATION)

    setSession(null)

    setResult(null)

    scrollToTop()
  }

  function openEducationSelection() {
    setClosingConfirmation(false)

    setScreen('education')

    setNavigation(INITIAL_NAVIGATION)

    setSession(null)

    setResult(null)

    scrollToTop()
  }

  function openEducation(type: EducationType) {
    setNavigation({
      educationType: type,
      moduleId: null,
      topicId: null,
      level: null,
    })

    setScreen('modules')

    scrollToTop()
  }

  function openModule(moduleId: string) {
    setNavigation((previous) => ({
      ...previous,
      moduleId,
      topicId: null,
      level: null,
    }))

    setScreen('topics')

    scrollToTop()
  }

  function openTopic(topicId: string) {
    setNavigation((previous) => ({
      ...previous,
      topicId,
      level: null,
    }))

    setScreen('levels')

    scrollToTop()
  }

  function openLevel(
    level: 'easy' | 'medium' | 'hard' | 'case',
  ) {
    setNavigation((previous) => ({
      ...previous,
      level,
    }))

    /*
     * Hozircha testni mavjud quiz tizimi
     * orqali ishga tushiramiz.
     *
     * Topic/level bo‘yicha filtr keyingi
     * data layer bilan ulanadi.
     */

    if (navigation.topicId) {
      start(navigation.topicId)
    }
  }

  /*
   * ----------------------------------------
   * QUIZ
   * ----------------------------------------
   */

  function start(categoryId: string) {
    const newSession = createSession(categoryId)

    setSession(newSession)

    setResult(null)

    setScreen('quiz')

    setClosingConfirmation(true)

    scrollToTop()
  }

  function finish(answers: AnswerRecord[]) {
    if (!session) return

    const correct = answers.filter(
      (answer) =>
        answer.selected === answer.question.answer,
    ).length

    const durationSec = Math.round(
      (Date.now() - session.startedAt) / 1000,
    )

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

    scrollToTop()

    void addAttempt({
      id: `${Date.now()}`,
      categoryId: session.categoryId,
      correct,
      total: answers.length,
      durationSec,
      at: Date.now(),
    })
  }

  function retryQuiz() {
    if (!result) return

    start(result.categoryId)
  }

  /*
   * ----------------------------------------
   * BACK NAVIGATION
   * ----------------------------------------
   */

  function goBack() {
    if (screen === 'quiz') {
      goHome()
      return
    }

    if (screen === 'result') {
      goHome()
      return
    }

    if (screen === 'levels') {
      setNavigation((previous) => ({
        ...previous,
        topicId: null,
        level: null,
      }))

      setScreen('topics')

      scrollToTop()

      return
    }

    if (screen === 'topics') {
      setNavigation((previous) => ({
        ...previous,
        moduleId: null,
        topicId: null,
        level: null,
      }))

      setScreen('modules')

      scrollToTop()

      return
    }

    if (screen === 'modules') {
      setNavigation(INITIAL_NAVIGATION)

      setScreen('education')

      scrollToTop()

      return
    }

    if (screen === 'education') {
      goHome()
    }
  }

  /*
   * Telegram Back Button
   */

  useBackButton(screen !== 'home', goBack)

  /*
   * Prevent accidental page close
   * while a test is running.
   */

  useEffect(() => {
    if (screen !== 'quiz') {
      setClosingConfirmation(false)
    }
  }, [screen])

  /*
   * ----------------------------------------
   * RENDER
   * ----------------------------------------
   */

  return (
    <main className="mx-auto min-h-dvh w-full max-w-md px-4 pb-8 pt-5">
      {screen === 'home' && (
        <HomeScreen
          user={user}
          history={history}
          stats={stats}
          bestByCategory={bestByCategory}
          onStart={openEducationSelection}
        />
      )}

      {/*
       * EDUCATION SELECTION
       *
       * Bu qism keyingi komponentda:
       * 🧸 BOG‘CHA
       * 🏫 MAKTAB
       * oynalarini chiqaradi.
       */}

      {screen === 'education' && (
        <EducationSelectionPlaceholder
          onSelect={openEducation}
          onBack={goHome}
        />
      )}

      {/*
       * MODULES
       *
       * Tanlangan ta'lim yo‘nalishining
       * modullari shu yerda chiqadi.
       */}

      {screen === 'modules' && (
        <ModulesPlaceholder
          educationType={navigation.educationType}
          onSelect={openModule}
          onBack={goBack}
        />
      )}

      {/*
       * TOPICS
       */}

      {screen === 'topics' && (
        <TopicsPlaceholder
          moduleId={navigation.moduleId}
          onSelect={openTopic}
          onBack={goBack}
        />
      )}

      {/*
       * LEVELS
       */}

      {screen === 'levels' && (
        <LevelSelectionPlaceholder
          topicId={navigation.topicId}
          onSelect={openLevel}
          onBack={goBack}
        />
      )}

      {/*
       * QUIZ
       */}

      {screen === 'quiz' && session && (
        <QuizScreen
          key={session.startedAt}
          session={session}
          showCloseButton={!isTelegram}
          onExit={goHome}
          onFinish={finish}
        />
      )}

      {/*
       * RESULT
       */}

      {screen === 'result' && result && (
        <ResultScreen
          result={result}
          onRetry={retryQuiz}
          onHome={goHome}
        />
      )}
    </main>
  )
}

/*
 * =====================================================
 * TEMPORARY NAVIGATION COMPONENTS
 * =====================================================
 *
 * Bular vaqtinchalik "placeholder".
 *
 * Keyingi bosqichlarda ularning o‘rniga
 * professional UI komponentlarini qo‘yamiz.
 *
 * Hozircha app arxitekturasi to‘g‘ri ishlashi
 * uchun qoldirilmoqda.
 */

/* -----------------------------------------------------
 * EDUCATION SELECTION
 * --------------------------------------------------- */

function EducationSelectionPlaceholder({
  onSelect,
  onBack,
}: {
  onSelect: (type: EducationType) => void
  onBack: () => void
}) {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center gap-5">
      <header className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          MENEJERLIK
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Ta’lim yo‘nalishini tanlang
        </h1>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Bilim va boshqaruv kompetensiyalaringizni
          bosqichma-bosqich rivojlantiring.
        </p>
      </header>

      <div className="grid gap-4">
        <button
          type="button"
          onClick={() => onSelect('preschool')}
          className="group rounded-3xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl">🧸</div>

          <h2 className="mt-4 text-xl font-bold">
            BOG‘CHA
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Maktabgacha ta’lim menejmenti
          </p>

          <div className="mt-5 text-sm font-semibold text-primary">
            Yo‘nalishni ochish →
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelect('school')}
          className="group rounded-3xl border bg-card p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl">🏫</div>

          <h2 className="mt-4 text-xl font-bold">
            MAKTAB
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Umumiy o‘rta ta’lim menejmenti
          </p>

          <div className="mt-5 text-sm font-semibold text-primary">
            Yo‘nalishni ochish →
          </div>
        </button>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="mt-2 rounded-2xl border px-4 py-3 text-sm font-medium"
      >
        ← Bosh sahifaga
      </button>
    </section>
  )
}

/* -----------------------------------------------------
 * MODULES
 * --------------------------------------------------- */

function ModulesPlaceholder({
  educationType,
  onSelect,
  onBack,
}: {
  educationType: EducationType | null
  onSelect: (moduleId: string) => void
  onBack: () => void
}) {
  return (
    <section className="flex flex-col gap-5">
      <header>
        <button
          type="button"
          onClick={onBack}
          className="mb-4 text-sm font-medium text-muted-foreground"
        >
          ← Orqaga
        </button>

        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {educationType === 'school'
            ? 'MAKTAB'
            : 'BOG‘CHA'}
        </p>

        <h1 className="mt-1 text-2xl font-bold">
          Modullar
        </h1>
      </header>

      <div className="rounded-2xl border border-dashed p-5 text-center">
        <p className="text-sm text-muted-foreground">
          Modullar tizimi keyingi bosqichda
          ma’lumotlar bazasiga ulanadi.
        </p>

        <button
          type="button"
          onClick={() => onSelect('m1')}
          className="mt-4 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          1-modulni ochish
        </button>
      </div>
    </section>
  )
}

/* -----------------------------------------------------
 * TOPICS
 * --------------------------------------------------- */

function TopicsPlaceholder({
  moduleId,
  onSelect,
  onBack,
}: {
  moduleId: string | null
  onSelect: (topicId: string) => void
  onBack: () => void
}) {
  return (
    <section className="flex flex-col gap-5">
      <header>
        <button
          type="button"
          onClick={onBack}
          className="mb-4 text-sm font-medium text-muted-foreground"
        >
          ← Modullarga
        </button>

        <p className="text-sm text-muted-foreground">
          {moduleId}
        </p>

        <h1 className="mt-1 text-2xl font-bold">
          Mavzular
        </h1>
      </header>

      <button
        type="button"
        onClick={() => onSelect('m1t1')}
        className="rounded-2xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md"
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-primary">
          01-MAVZU
        </span>

        <h2 className="mt-2 font-semibold">
          Umumiy ta’lim muassasasini boshqarish
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Mavzu bo‘yicha bilimlarni tekshirish.
        </p>
      </button>
    </section>
  )
}

/* -----------------------------------------------------
 * LEVELS
 * --------------------------------------------------- */

function LevelSelectionPlaceholder({
  topicId,
  onSelect,
  onBack,
}: {
  topicId: string | null
  onSelect: (
    level: 'easy' | 'medium' | 'hard' | 'case',
  ) => void
  onBack: () => void
}) {
  const levels = [
    {
      id: 'easy' as const,
      icon: '🟢',
      title: 'Oson',
      description: 'Asosiy tushunchalar va bilimlar',
    },
    {
      id: 'medium' as const,
      icon: '🟡',
      title: 'O‘rta',
      description: 'Amaliy qo‘llash va vaziyatlar',
    },
    {
      id: 'hard' as const,
      icon: '🔴',
      title: 'Qiyin',
      description: 'Tahliliy va murakkab savollar',
    },
    {
      id: 'case' as const,
      icon: '🔵',
      title: 'Keys',
      description: 'Real boshqaruv vaziyatlari',
    },
  ]

  return (
    <section className="flex flex-col gap-5">
      <header>
        <button
          type="button"
          onClick={onBack}
          className="mb-4 text-sm font-medium text-muted-foreground"
        >
          ← Mavzularga
        </button>

        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {topicId}
        </p>

        <h1 className="mt-1 text-2xl font-bold">
          Test darajasini tanlang
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          O‘zingizga mos darajani tanlab,
          bilimlaringizni sinab ko‘ring.
        </p>
      </header>

      <div className="grid gap-3">
        {levels.map((level) => (
          <button
            key={level.id}
            type="button"
            onClick={() => onSelect(level.id)}
            className="flex items-center gap-4 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-2xl">
              {level.icon}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block font-semibold">
                {level.title}
              </span>

              <span className="mt-0.5 block text-sm text-muted-foreground">
                {level.description}
              </span>
            </span>

            <span className="text-lg text-muted-foreground">
              →
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
