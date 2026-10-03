'use client'

import { useEffect, useState } from 'react'

import { AIAssistant } from '@/components/ai-assistant'
import { HomeScreen } from '@/components/home-screen'
import { QuizScreen } from '@/components/quiz-screen'
import { ResultScreen } from '@/components/result-screen'

import {
  createTopicSession,
  type AnswerRecord,
  type QuizLevel,
  type QuizResult,
  type QuizSession,
} from '@/lib/quiz'

import {
  CATEGORIES,
  PRESCHOOL_CATEGORIES,
  getModuleById,
  getTopicById,
  type Category,
} from '@/lib/quiz-data'

import { useHistory } from '@/hooks/use-history'

import {
  useBackButton,
  useTelegram,
} from '@/hooks/use-telegram'

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
  | 'ai'

type NavigationState = {
  educationType: EducationType | null
  moduleId: string | null
  topicId: string | null
}

const INITIAL_NAVIGATION: NavigationState = {
  educationType: null,
  moduleId: null,
  topicId: null,
}

export function MenejerlikApp() {
  /*
   * =====================================================
   * TELEGRAM
   * =====================================================
   */

  const { user, isTelegram } = useTelegram()

  /*
   * =====================================================
   * HISTORY / STATISTICS
   * =====================================================
   */

  const {
    history,
    stats,
    bestByCategory,
    addAttempt,
  } = useHistory()

  /*
   * =====================================================
   * APP STATE
   * =====================================================
   */

  const [screen, setScreen] =
    useState<Screen>('home')

  const [navigation, setNavigation] =
    useState<NavigationState>(
      INITIAL_NAVIGATION,
    )

  const [session, setSession] =
    useState<QuizSession | null>(null)

  const [result, setResult] =
    useState<QuizResult | null>(null)

  const [isFullscreen, setIsFullscreen] =
    useState(false)

  /*
   * =====================================================
   * TELEGRAM FULLSCREEN
   * =====================================================
   */

  useEffect(() => {
    if (!isTelegram) {
      return
    }

    const tg =
      (window as any).Telegram?.WebApp

    if (!tg) {
      return
    }

    try {
      if (typeof tg.ready === 'function') {
        tg.ready()
      }

      if (typeof tg.expand === 'function') {
        tg.expand()
      }

      if (
        typeof tg.requestFullscreen ===
        'function'
      ) {
        tg.requestFullscreen()
        setIsFullscreen(true)
      }
    } catch (error) {
      console.log(
        'Fullscreen error:',
        error,
      )
    }
  }, [isTelegram])

  /*
   * =====================================================
   * FULLSCREEN TOGGLE
   * =====================================================
   */

  function toggleFullscreen() {
    const tg =
      (window as any).Telegram?.WebApp

    if (!tg) {
      return
    }

    try {
      if (isFullscreen) {
        if (
          typeof tg.exitFullscreen ===
          'function'
        ) {
          tg.exitFullscreen()
        }

        setIsFullscreen(false)

        return
      }

      if (
        typeof tg.requestFullscreen ===
        'function'
      ) {
        tg.requestFullscreen()
        setIsFullscreen(true)

        return
      }

      if (
        typeof tg.expand ===
        'function'
      ) {
        tg.expand()
        setIsFullscreen(true)
      }
    } catch (error) {
      console.log(
        'Fullscreen toggle error:',
        error,
      )
    }
  }

  /*
   * =====================================================
   * FULLSCREEN EVENT
   * =====================================================
   */

  useEffect(() => {
    const tg =
      (window as any).Telegram?.WebApp

    if (!tg) {
      return
    }

    const handleFullscreenChanged = () => {
      setIsFullscreen(
        Boolean(tg.isFullscreen),
      )
    }

    tg.onEvent?.(
      'fullscreenChanged',
      handleFullscreenChanged,
    )

    return () => {
      tg.offEvent?.(
        'fullscreenChanged',
        handleFullscreenChanged,
      )
    }
  }, [])

  /*
   * =====================================================
   * SCROLL
   * =====================================================
   */

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  /*
   * =====================================================
   * GO HOME
   * =====================================================
   */

  function goHome() {
    setClosingConfirmation(false)

    setScreen('home')

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setSession(null)

    setResult(null)

    scrollToTop()
  }

  /*
   * =====================================================
   * AI
   * =====================================================
   */

  function openAI() {
    setClosingConfirmation(false)

    setScreen('ai')

    scrollToTop()
  }

  /*
   * =====================================================
   * EDUCATION
   * =====================================================
   */

  function openEducationSelection() {
    setClosingConfirmation(false)

    setScreen('education')

    setNavigation(
      INITIAL_NAVIGATION,
    )

    setSession(null)

    setResult(null)

    scrollToTop()
  }

  function selectEducation(
    type: EducationType,
  ) {
    setNavigation({
      educationType: type,
      moduleId: null,
      topicId: null,
    })

    setScreen('modules')

    scrollToTop()
  }

  /*
   * =====================================================
   * MODULE
   * =====================================================
   */

  function selectModule(
    moduleId: string,
  ) {
    setNavigation(
      (previous) => ({
        ...previous,
        moduleId,
        topicId: null,
      }),
    )

    setScreen('topics')

    scrollToTop()
  }

  /*
   * =====================================================
   * TOPIC
   * =====================================================
   */

  function selectTopic(
    topicId: string,
  ) {
    setNavigation(
      (previous) => ({
        ...previous,
        topicId,
      }),
    )

    setScreen('levels')

    scrollToTop()
  }

  /*
   * =====================================================
   * LEVEL
   * =====================================================
   */

  function selectLevel(
    level: QuizLevel,
  ) {
    if (!navigation.topicId) {
      return
    }

    startQuiz(
      navigation.topicId,
      level,
    )
  }

  /*
   * =====================================================
   * START QUIZ
   * =====================================================
   */

  function startQuiz(
    topicId: string,
    level: QuizLevel,
  ) {
    const newSession =
      createTopicSession(
        topicId,
        level,
      )

    setSession(newSession)

    setResult(null)

    setScreen('quiz')

    /*
     * Telegramdan chiqishda confirmation
     */
    setClosingConfirmation(true)

    scrollToTop()
  }

  /*
   * =====================================================
   * FINISH QUIZ
   * =====================================================
   */

  function finish(
    answers: AnswerRecord[],
  ) {
    if (!session) {
      return
    }

    /*
     * Testni qayta yakunlashning oldini olish
     */
    if (screen !== 'quiz') {
      return
    }

    const correct =
      answers.filter(
        (answer) =>
          answer.selected ===
          answer.question.answer,
      ).length

    const durationSec =
      Math.round(
        (Date.now() -
          session.startedAt) /
          1000,
      )

    const quizResult: QuizResult = {
      categoryId:
        session.categoryId,

      topicId:
        session.topicId,

      level:
        session.level,

      title:
        session.title,

      answers,

      correct,

      total:
        answers.length,

      durationSec,
    }

    /*
     * Natijani saqlaymiz
     */
    setResult(quizResult)

    /*
     * Testdan natijaga o'tamiz
     */
    setScreen('result')

    /*
     * Telegram close confirmationni o'chiramiz
     */
    setClosingConfirmation(false)

    scrollToTop()

    /*
     * Statistikaga qo'shamiz
     */
    void addAttempt({
      id: `${Date.now()}`,

      categoryId:
        session.categoryId,

      correct,

      total:
        answers.length,

      durationSec,

      at: Date.now(),
    })
  }

  /*
   * =====================================================
   * RETRY
   * =====================================================
   */

  function retryQuiz() {
    if (!result) {
      return
    }

    startQuiz(
      result.topicId,
      result.level,
    )
  }

  /*
   * =====================================================
   * BACK NAVIGATION
   *
   * ENG MUHIM QISM
   * =====================================================
   */

  function goBack() {
    /*
     * AI
     */
    if (screen === 'ai') {
      goHome()
      return
    }

    /*
     * EDUCATION
     */
    if (screen === 'education') {
      goHome()
      return
    }

    /*
     * MODULES
     */
    if (screen === 'modules') {
      setNavigation(
        (previous) => ({
          ...previous,
          moduleId: null,
          topicId: null,
        }),
      )

      setScreen('education')

      scrollToTop()

      return
    }

    /*
     * TOPICS
     */
    if (screen === 'topics') {
      setNavigation(
        (previous) => ({
          ...previous,
          moduleId: null,
          topicId: null,
        }),
      )

      setScreen('modules')

      scrollToTop()

      return
    }

    /*
     * LEVELS
     */
    if (screen === 'levels') {
      setNavigation(
        (previous) => ({
          ...previous,
          topicId: null,
        }),
      )

      setScreen('topics')

      scrollToTop()

      return
    }

    /*
     * QUIZ
     *
     * Testdan chiqsa bosh sahifaga.
     */
    if (screen === 'quiz') {
      setClosingConfirmation(false)

      setSession(null)

      setResult(null)

      setScreen('home')

      setNavigation(
        INITIAL_NAVIGATION,
      )

      scrollToTop()

      return
    }

    /*
     * RESULT
     */
    if (screen === 'result') {
      setResult(null)

      setSession(null)

      setScreen('home')

      setNavigation(
        INITIAL_NAVIGATION,
      )

      scrollToTop()

      return
    }

    /*
     * HOME yoki noma'lum holat
     */
    goHome()
  }

  /*
   * =====================================================
   * TELEGRAM BACK BUTTON
   *
   * MUHIM:
   *
   * OLD:
   * useBackButton(screen !== 'home', goBack)
   *
   * YANGI:
   * useBackButton(goBack, screen !== 'home')
   * =====================================================
   */

  useBackButton(
    goBack,
    screen !== 'home',
  )

  /*
   * =====================================================
   * CLOSE CONFIRMATION
   * =====================================================
   */

  useEffect(() => {
    if (screen !== 'quiz') {
      setClosingConfirmation(false)
    }
  }, [screen])

  /*
   * =====================================================
   * ACTIVE CATEGORIES
   * =====================================================
   */

  const activeCategories: Category[] =
    navigation.educationType ===
    'preschool'
      ? PRESCHOOL_CATEGORIES
      : CATEGORIES

  /*
   * =====================================================
   * ACTIVE MODULE
   * =====================================================
   */

  const activeModule =
    navigation.moduleId
      ? getModuleById(
          navigation.moduleId,
        )
      : undefined

  /*
   * =====================================================
   * ACTIVE TOPIC
   * =====================================================
   */

  const activeTopic =
    navigation.topicId
      ? getTopicById(
          navigation.topicId,
        )
      : undefined

  /*
   * =====================================================
   * RENDER
   * =====================================================
   */

  return (
    <main
      className="
        relative
        mx-auto
        min-h-dvh
        w-full
        max-w-md
        px-4
        pb-8
        pt-5
      "
    >

      {/* =================================================
          FULLSCREEN BUTTON
      ================================================= */}

      {isTelegram && (
        <button
          type="button"
          onClick={
            toggleFullscreen
          }
          aria-label={
            isFullscreen
              ? 'Kichik ekran'
              : 'To‘liq ekran'
          }
          title={
            isFullscreen
              ? 'Kichik ekran'
              : 'To‘liq ekran'
          }
          className="
            fixed
            right-4
            top-4
            z-[100]
            flex
            size-11
            items-center
            justify-center
            rounded-2xl
            border
            border-border/60
            bg-background/90
            text-lg
            shadow-lg
            backdrop-blur-xl
            transition-all
            hover:scale-105
            active:scale-95
          "
        >
          {isFullscreen
            ? '↙️'
            : '⛶'}
        </button>
      )}

      {/* =================================================
          AI
      ================================================= */}

      {screen === 'ai' && (
        <AIAssistant
          onBack={goBack}
        />
      )}

      {/* =================================================
          HOME
      ================================================= */}

      {screen === 'home' && (
        <div className="flex flex-col gap-5">

          <HomeScreen
            user={user}
            history={history}
            stats={stats}
            bestByCategory={
              bestByCategory
            }
            onStart={
              openEducationSelection
            }
          />

          {/* AI BUTTON */}

          <button
            type="button"
            onClick={openAI}
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              bg-card
              p-5
              text-left
              shadow-sm
              transition-all
              hover:-translate-y-1
              hover:shadow-xl
              active:scale-[0.99]
            "
          >

            <div
              className="
                absolute
                -right-8
                -top-8
                size-32
                rounded-full
                bg-primary/5
              "
            />

            <div className="relative flex items-center gap-4">

              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-3xl
                "
              >
                🤖
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  MENEJERLIK AI
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  AI Rahbar yordamchisi
                </h2>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  Ta’lim boshqaruvi va rahbarlik
                  bo‘yicha savol bering.
                </p>

              </div>

              <span
                className="
                  text-2xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </div>
          </button>
        </div>
      )}

      {/* =================================================
          EDUCATION
      ================================================= */}

      {screen === 'education' && (
        <EducationScreen
          onBack={goBack}
          onSelect={
            selectEducation
          }
        />
      )}

      {/* =================================================
          MODULES
      ================================================= */}

      {screen === 'modules' && (
        <ModuleScreen
          educationType={
            navigation.educationType
          }
          categories={
            activeCategories
          }
          onBack={goBack}
          onSelect={
            selectModule
          }
        />
      )}

      {/* =================================================
          TOPICS
      ================================================= */}

      {screen === 'topics' && (
        <TopicScreen
          module={
            activeModule
          }
          onBack={goBack}
          onSelect={
            selectTopic
          }
        />
      )}

      {/* =================================================
          LEVELS
      ================================================= */}

      {screen === 'levels' && (
        <LevelScreen
          topic={
            activeTopic
          }
          onBack={goBack}
          onSelect={
            selectLevel
          }
        />
      )}

      {/* =================================================
          QUIZ
      ================================================= */}

      {screen === 'quiz' &&
        session && (
          <QuizScreen
            key={
              session.startedAt
            }
            session={
              session
            }
            showCloseButton={
              !isTelegram
            }
            onExit={
              goBack
            }
            onFinish={
              finish
            }
          />
        )}

      {/* =================================================
          RESULT
      ================================================= */}

      {screen === 'result' &&
        result && (
          <ResultScreen
            result={
              result
            }
            onRetry={
              retryQuiz
            }
            onHome={
              goHome
            }
          />
        )}
    </main>
  )
}

/*
 * =========================================================
 * EDUCATION SCREEN
 * =========================================================
 */

function EducationScreen({
  onBack,
  onSelect,
}: {
  onBack: () => void
  onSelect: (
    type: EducationType,
  ) => void
}) {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center gap-6">

      <header className="text-center">

        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl bg-primary text-3xl shadow-lg">
          🎓
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          MENEJERLIK
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Ta’lim yo‘nalishini tanlang
        </h1>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
          O‘zingizga mos ta’lim yo‘nalishini
          tanlang va boshqaruv bilimlarini
          bosqichma-bosqich sinab ko‘ring.
        </p>

      </header>

      <div className="grid gap-4">

        {/* BOG'CHA */}

        <button
          type="button"
          onClick={() =>
            onSelect(
              'preschool',
            )
          }
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            bg-card
            p-6
            text-left
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-xl
            active:scale-[0.99]
          "
        >

          <div
            className="
              absolute
              -right-8
              -top-8
              size-32
              rounded-full
              bg-primary/5
            "
          />

          <div className="relative flex items-center gap-5">

            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
              🧸
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                01
              </p>

              <h2 className="mt-1 text-xl font-bold">
                BOG‘CHA
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Maktabgacha ta’lim menejmenti
              </p>

            </div>

            <span className="text-2xl text-muted-foreground transition-transform group-hover:translate-x-1">
              →
            </span>

          </div>
        </button>

        {/* MAKTAB */}

        <button
          type="button"
          onClick={() =>
            onSelect(
              'school',
            )
          }
          className="
            group
            relative
            overflow-hidden
            rounded-[2rem]
            border
            bg-card
            p-6
            text-left
            shadow-sm
            transition-all
            hover:-translate-y-1
            hover:shadow-xl
            active:scale-[0.99]
          "
        >

          <div
            className="
              absolute
              -right-8
              -top-8
              size-32
              rounded-full
              bg-primary/5
            "
          />

          <div className="relative flex items-center gap-5">

            <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-secondary text-4xl">
              🏫
            </div>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                02
              </p>

              <h2 className="mt-1 text-xl font-bold">
                MAKTAB
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Umumiy o‘rta ta’lim menejmenti
              </p>

            </div>

            <span className="text-2xl text-muted-foreground transition-transform group-hover:translate-x-1">
              →
            </span>

          </div>
        </button>

      </div>

      <button
        type="button"
        onClick={onBack}
        className="rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors hover:bg-muted"
      >
        ← Bosh sahifaga
      </button>

    </section>
  )
}

/*
 * =========================================================
 * MODULE SCREEN
 * =========================================================
 */

function ModuleScreen({
  educationType,
  categories,
  onBack,
  onSelect,
}: {
  educationType:
    | EducationType
    | null

  categories: Category[]

  onBack: () => void

  onSelect: (
    moduleId: string,
  ) => void
}) {
  const isSchool =
    educationType === 'school'

  return (
    <section className="flex flex-col gap-5">

      <header>

        <button
          type="button"
          onClick={onBack}
          className="mb-5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Yo‘nalishlarga
        </button>

        <div className="flex items-end justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {isSchool
                ? 'MAKTAB'
                : 'BOG‘CHA'}
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              O‘quv modullari
            </h1>

            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              Kerakli modulni tanlang.
            </p>

          </div>

          <div className="rounded-2xl bg-secondary px-3 py-2 text-center">

            <p className="text-lg font-bold">
              {categories.length}
            </p>

            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Modul
            </p>

          </div>

        </div>

      </header>

      {categories.length === 0 ? (
        <EmptyState
          icon="🧸"
          title="Tez orada"
          text="Bu yo‘nalish uchun o‘quv modullari tayyorlanmoqda."
        />
      ) : (
        <div className="flex flex-col gap-3">

          {categories.map(
            (
              category,
              index,
            ) => (
              <button
                key={
                  category.id
                }
                type="button"
                onClick={() =>
                  onSelect(
                    category.id,
                  )
                }
                className="group flex items-center gap-4 rounded-3xl border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >

                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-primary-foreground">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    '0',
                  )}
                </div>

                <div className="min-w-0 flex-1">

                  <h2 className="font-semibold leading-5">
                    {category.title}
                  </h2>

                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
                    {
                      category.description
                    }
                  </p>

                  <p className="mt-2 text-xs font-medium text-primary">
                    {
                      category.topics
                        .length
                    }{' '}
                    ta mavzu
                  </p>

                </div>

                <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>

              </button>
            ),
          )}

        </div>
      )}

    </section>
  )
}

/*
 * =========================================================
 * TOPIC SCREEN
 * =========================================================
 */

function TopicScreen({
  module,
  onBack,
  onSelect,
}: {
  module:
    | Category
    | undefined

  onBack: () => void

  onSelect: (
    topicId: string,
  ) => void
}) {
  return (
    <section className="flex flex-col gap-5">

      <header>

        <button
          type="button"
          onClick={onBack}
          className="mb-5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Modullarga
        </button>

        {module && (
          <>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              MODUL
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight">
              {module.title}
            </h1>

            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              Mavzulardan birini tanlang.
            </p>
          </>
        )}

      </header>

      {!module ? (
        <EmptyState
          icon="⚠️"
          title="Modul topilmadi"
          text="Tanlangan modul ma’lumotlar bazasida mavjud emas."
        />
      ) : (
        <div className="flex flex-col gap-3">

          {module.topics.map(
            (
              topic,
              index,
            ) => (
              <button
                key={
                  topic.id
                }
                type="button"
                onClick={() =>
                  onSelect(
                    topic.id,
                  )
                }
                className="group flex gap-4 rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >

                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-xs font-bold">
                  {String(
                    index + 1,
                  ).padStart(
                    2,
                    '0',
                  )}
                </div>

                <div className="min-w-0 flex-1">

                  <h2 className="font-semibold leading-5">
                    {topic.title}
                  </h2>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    {
                      topic.description
                    }
                  </p>

                  <div className="mt-3 flex gap-1.5">

                    <Badge>
                      🟢 {topic.levels.easy.length}
                    </Badge>

                    <Badge>
                      🟡 {topic.levels.medium.length}
                    </Badge>

                    <Badge>
                      🔴 {topic.levels.hard.length}
                    </Badge>

                    <Badge>
                      🔵 {topic.levels.case.length}
                    </Badge>

                  </div>

                </div>

                <span className="self-center text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>

              </button>
            ),
          )}

        </div>
      )}

    </section>
  )
}

/*
 * =========================================================
 * LEVEL SCREEN
 * =========================================================
 */

function LevelScreen({
  topic,
  onBack,
  onSelect,
}: {
  topic:
    | ReturnType<
        typeof getTopicById
      >

  onBack: () => void

  onSelect: (
    level: QuizLevel,
  ) => void
}) {
  if (!topic) {
    return (
      <section className="flex flex-col gap-5">

        <button
          type="button"
          onClick={onBack}
          className="text-left text-sm font-semibold text-muted-foreground"
        >
          ← Mavzularga
        </button>

        <EmptyState
          icon="⚠️"
          title="Mavzu topilmadi"
          text="Tanlangan mavzu mavjud emas."
        />

      </section>
    )
  }

  const levels: Array<{
    id: QuizLevel
    icon: string
    title: string
    description: string
    questions: number
  }> = [
    {
      id: 'easy',
      icon: '🟢',
      title: 'Oson',
      description:
        'Asosiy tushunchalar va bilimlar',
      questions:
        topic.levels.easy.length,
    },
    {
      id: 'medium',
      icon: '🟡',
      title: 'O‘rta',
      description:
        'Amaliy qo‘llash va vaziyatlar',
      questions:
        topic.levels.medium.length,
    },
    {
      id: 'hard',
      icon: '🔴',
      title: 'Qiyin',
      description:
        'Tahliliy va murakkab savollar',
      questions:
        topic.levels.hard.length,
    },
    {
      id: 'case',
      icon: '🔵',
      title: 'Keys',
      description:
        'Real boshqaruv vaziyatlari',
      questions:
        topic.levels.case.length,
    },
  ]

  return (
    <section className="flex flex-col gap-5">

      <header>

        <button
          type="button"
          onClick={onBack}
          className="mb-5 text-sm font-semibold text-muted-foreground"
        >
          ← Mavzularga
        </button>

        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          TEST
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight">
          {topic.title}
        </h1>

        <p className="mt-2 text-sm leading-5 text-muted-foreground">
          Test darajasini tanlang.
        </p>

      </header>

      <div className="flex flex-col gap-3">

        {levels.map(
          (level) => (
            <button
              key={
                level.id
              }
              type="button"
              onClick={() =>
                onSelect(
                  level.id,
                )
              }
              className="group flex items-center gap-4 rounded-3xl border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >

              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-2xl">
                {level.icon}
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center gap-2">

                  <h2 className="font-bold">
                    {level.title}
                  </h2>

                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold">
                    {level.questions}
                  </span>

                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {
                    level.description
                  }
                </p>

              </div>

              <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                →
              </span>

            </button>
          ),
        )}

      </div>

      <div className="rounded-2xl bg-muted/50 p-4 text-center">

        <p className="text-xs leading-5 text-muted-foreground">
          Savollar soni tanlangan
          darajadagi mavjud testlar
          asosida belgilanadi.
        </p>

      </div>

    </section>
  )
}

/*
 * =========================================================
 * SMALL UI COMPONENTS
 * =========================================================
 */

function Badge({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="rounded-lg bg-muted px-1.5 py-1 text-[10px] font-semibold">
      {children}
    </span>
  )
}

function EmptyState({
  icon,
  title,
  text,
}: {
  icon: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-3xl border border-dashed p-8 text-center">

      <div className="text-4xl">
        {icon}
      </div>

      <h2 className="mt-3 font-bold">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-xs text-sm leading-5 text-muted-foreground">
        {text}
      </p>

    </div>
  )
}
