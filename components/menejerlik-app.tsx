'use client'

import type { ReactNode } from 'react'
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
  const { user, isTelegram } = useTelegram()

  const {
    history,
    stats,
    bestByCategory,
    addAttempt,
  } = useHistory()

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
    if (!isTelegram) return

    const tg =
      (window as any).Telegram?.WebApp

    if (!tg) return

    try {
      tg.ready?.()
      tg.expand?.()

      if (
        typeof tg.requestFullscreen ===
        'function'
      ) {
        tg.requestFullscreen()
        setIsFullscreen(true)
      }
    } catch (error) {
      console.log(
        'Telegram fullscreen error:',
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

    if (!tg) return

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

    if (!tg) return

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
   * SCROLL TOP
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
   * HOME
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
   * CLOSE MINI APP
   *
   * X tugmasi shu funksiyani ishlatadi.
   * =====================================================
   */

  function closeMiniApp() {
    setClosingConfirmation(false)

    const tg =
      (window as any).Telegram?.WebApp

    if (
      tg &&
      typeof tg.close === 'function'
    ) {
      try {
        tg.close()
        return
      } catch (error) {
        console.log(
          'Telegram close error:',
          error,
        )
      }
    }

    /*
     * Agar Telegram tashqarisida ochilgan
     * bo‘lsa, Home sahifaga qaytadi.
     */
    goHome()
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
     * Test vaqtida chiqishga
     * confirmation yoqiladi.
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
    if (!session) return

    if (screen !== 'quiz') return

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

    setResult(quizResult)
    setScreen('result')
    setClosingConfirmation(false)

    scrollToTop()

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
    if (!result) return

    startQuiz(
      result.topicId,
      result.level,
    )
  }

  /*
   * =====================================================
   * BACK NAVIGATION
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
     * HOME
     */
    if (screen === 'home') {
      return
    }

    goHome()
  }

  /*
   * =====================================================
   * TELEGRAM NATIVE BACK BUTTON
   *
   * Telegram ichidagi native BackButton
   * screen home bo'lmaganda ishlaydi.
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
        pt-3
      "
    >

      {/* =================================================
          MINI APP HEADER
      ================================================= */}

      <div
        className="
          sticky
          top-0
          z-[90]
          mb-4
          flex
          h-12
          items-center
          justify-between
          rounded-2xl
          border
          border-border/60
          bg-background/95
          px-1.5
          shadow-sm
          backdrop-blur-xl
        "
      >

        {/* ===============================================
            ORQAGA
        =============================================== */}

        <button
          type="button"
          onClick={goBack}
          disabled={
            screen === 'home'
          }
          aria-label="Orqaga"
          title="Orqaga"
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-2xl
            font-medium
            transition-all
            hover:bg-muted
            active:scale-90
            disabled:pointer-events-none
            disabled:opacity-25
          "
        >
          ←
        </button>

        {/* ===============================================
            TITLE
        =============================================== */}

        <div
          className="
            min-w-0
            flex-1
            px-2
            text-center
          "
        >
          <p
            className="
              truncate
              text-sm
              font-bold
            "
          >
            Menejerlik
          </p>

          {screen !== 'home' && (
            <p
              className="
                truncate
                text-[9px]
                font-medium
                uppercase
                tracking-wider
                text-muted-foreground
              "
            >
              Nurmuhammad
            </p>
          )}
        </div>

        {/* ===============================================
            FULLSCREEN
        =============================================== */}

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
              flex
              size-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-lg
              transition-all
              hover:bg-muted
              active:scale-90
            "
          >
            {isFullscreen
              ? '↙️'
              : '⛶'}
          </button>
        )}

        {/* ===============================================
            X — MINI APPNI YOPISH
        =============================================== */}

        <button
          type="button"
          onClick={
            closeMiniApp
          }
          aria-label="Mini ilovani yopish"
          title="Mini ilovani yopish"
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            text-2xl
            font-bold
            text-muted-foreground
            transition-all
            hover:bg-destructive/10
            hover:text-destructive
            active:scale-90
          "
        >
          ×
        </button>

      </div>

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
        <div
          className="
            flex
            flex-col
            gap-5
          "
        >

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

            <div
              className="
                relative
                flex
                items-center
                gap-4
              "
            >

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

              <div
                className="
                  min-w-0
                  flex-1
                "
              >

                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-primary
                  "
                >
                  MENEJERLIK AI
                </p>

                <h2
                  className="
                    mt-1
                    text-lg
                    font-bold
                  "
                >
                  AI Rahbar yordamchisi
                </h2>

                <p
                  className="
                    mt-1
                    text-sm
                    leading-5
                    text-muted-foreground
                  "
                >
                  Ta’lim boshqaruvi va
                  rahbarlik bo‘yicha
                  savol bering.
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
      <section
        className="
          flex
          flex-col
          gap-5
        "
      >

        <button
          type="button"
          onClick={onBack}
          className="
            text-left
            text-sm
            font-semibold
            text-muted-foreground
          "
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

    {
      id: 'mixed',
      icon: '🟣',
      title: 'Aralash test',
      description:
        '100 ta savoldan tasodifiy 30 ta',
      questions: 30,
    },
  ]

  return (
    <section
      className="
        flex
        flex-col
        gap-5
      "
    >

      <header>

        <button
          type="button"
          onClick={onBack}
          className="
            mb-5
            text-sm
            font-semibold
            text-muted-foreground
            transition-colors
            hover:text-foreground
          "
        >
          ← Mavzularga
        </button>

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          TEST
        </p>

        <h1
          className="
            mt-1
            text-2xl
            font-bold
            tracking-tight
          "
        >
          {topic.title}
        </h1>

        <p
          className="
            mt-2
            text-sm
            leading-5
            text-muted-foreground
          "
        >
          Test turini tanlang.
        </p>

      </header>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

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
              className="
                group
                flex
                items-center
                gap-4
                rounded-3xl
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
                active:scale-[0.99]
              "
            >

              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-secondary
                  text-2xl
                "
              >
                {level.icon}
              </div>

              <div
                className="
                  min-w-0
                  flex-1
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <h2
                    className="
                      font-bold
                    "
                  >
                    {level.title}
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-muted
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                    "
                  >
                    {level.questions}
                  </span>

                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-muted-foreground
                  "
                >
                  {
                    level.description
                  }
                </p>

              </div>

              <span
                className="
                  text-xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </button>
          ),
        )}

      </div>

      <div
        className="
          rounded-2xl
          border
          border-purple-200
          bg-purple-50
          p-4
        "
      >

        <div
          className="
            flex
            items-start
            gap-3
          "
        >

          <div
            className="
              text-2xl
            "
          >
            🟣
          </div>

          <div>

            <p
              className="
                text-sm
                font-bold
              "
            >
              Aralash test qanday ishlaydi?
            </p>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-muted-foreground
              "
            >
              Ushbu mavzudagi 100 ta savol
              ichidan har safar tasodifiy
              30 ta savol tanlanadi.
              Har bir yangi testda savollar
              qayta aralashtiriladi.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}
                  </div>

                </div>

                <span
                  className="
                    self-center
                    text-xl
                    text-muted-foreground
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
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
      <section
        className="
          flex
          flex-col
          gap-5
        "
      >

        <button
          type="button"
          onClick={onBack}
          className="
            text-left
            text-sm
            font-semibold
            text-muted-foreground
          "
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
    <section
      className="
        flex
        flex-col
        gap-5
      "
    >

      <header>

        <button
          type="button"
          onClick={onBack}
          className="
            mb-5
            text-sm
            font-semibold
            text-muted-foreground
          "
        >
          ← Mavzularga
        </button>

        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
          "
        >
          TEST
        </p>

        <h1
          className="
            mt-1
            text-2xl
            font-bold
            tracking-tight
          "
        >
          {topic.title}
        </h1>

        <p
          className="
            mt-2
            text-sm
            leading-5
            text-muted-foreground
          "
        >
          Test darajasini tanlang.
        </p>

      </header>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

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
              className="
                group
                flex
                items-center
                gap-4
                rounded-3xl
                border
                bg-card
                p-5
                text-left
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >

              <div
                className="
                  flex
                  size-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-secondary
                  text-2xl
                "
              >
                {level.icon}
              </div>

              <div
                className="
                  min-w-0
                  flex-1
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <h2 className="font-bold">
                    {level.title}
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-muted
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                    "
                  >
                    {level.questions}
                  </span>

                </div>

                <p
                  className="
                    mt-1
                    text-sm
                    text-muted-foreground
                  "
                >
                  {
                    level.description
                  }
                </p>

              </div>

              <span
                className="
                  text-xl
                  text-muted-foreground
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </button>
          ),
        )}

      </div>

      <div
        className="
          rounded-2xl
          bg-muted/50
          p-4
          text-center
        "
      >

        <p
          className="
            text-xs
            leading-5
            text-muted-foreground
          "
        >
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
 * BADGE
 * =========================================================
 */

function Badge({
  children,
}: {
  children: ReactNode
}) {
  return (
    <span
      className="
        rounded-lg
        bg-muted
        px-1.5
        py-1
        text-[10px]
        font-semibold
      "
    >
      {children}
    </span>
  )
}

/*
 * =========================================================
 * EMPTY STATE
 * =========================================================
 */

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
    <div
      className="
        rounded-3xl
        border
        border-dashed
        p-8
        text-center
      "
    >

      <div className="text-4xl">
        {icon}
      </div>

      <h2 className="mt-3 font-bold">
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-2
          max-w-xs
          text-sm
          leading-5
          text-muted-foreground
        "
      >
        {text}
      </p>

    </div>
  )
}
