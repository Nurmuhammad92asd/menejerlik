// components/president/president-academy.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import type {
  Section,
  SectionId,
  Screen,
  Topic,
  Question,
  Progress,
} from './president-types'
import { MATH_TOPICS, MATH_QUESTIONS } from './president-data-math'
import { ENGLISH_TOPICS, ENGLISH_QUESTIONS } from './president-data-english'
import { LOGIC_TOPICS, LOGIC_QUESTIONS } from './president-data-logic'
import { NATIVE_TOPICS, NATIVE_QUESTIONS } from './president-data-native'
import PresidentHub from './president-hub'
import PresidentSection from './president-section'
import PresidentQuiz from './president-quiz'
import PresidentResult from './president-result'

const STORAGE_KEY = 'menejerlik-president-progress-v1'
const PASS_PERCENT = 70

const DEFAULT_PROGRESS: Progress = {
  completedTopics: [],
  correctByTopic: {},
  totalByTopic: {},
  totalXp: 0,
}

const SECTIONS: Section[] = [
  {
    id: 'math',
    title: 'Matematika',
    description: "Algebra, geometriya, kasrlar, foiz, tenglamalar va mantiqiy masalalar",
    icon: '📐',
    gradient: 'from-blue-600 to-cyan-500',
    topics: MATH_TOPICS,
  },
  {
    id: 'english',
    title: 'Ingliz tili',
    description: 'Grammar, vocabulary, reading, writing, listening, speaking',
    icon: '🇬🇧',
    gradient: 'from-violet-600 to-fuchsia-500',
    topics: ENGLISH_TOPICS,
  },
  {
    id: 'logic',
    title: 'Mantiq',
    description: "Pattern, sequence, analogies, odd one out, spatial, critical thinking",
    icon: '🧠',
    gradient: 'from-orange-600 to-amber-500',
    topics: LOGIC_TOPICS,
  },
  {
    id: 'native',
    title: 'Ona tili',
    description: "Imlo, grammatika, lug'at, matn tahlili va ijod",
    icon: '📖',
    gradient: 'from-emerald-600 to-teal-500',
    topics: NATIVE_TOPICS,
  },
]

const ALL_QUESTIONS: Question[] = [
  ...MATH_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...LOGIC_QUESTIONS,
  ...NATIVE_QUESTIONS,
]

export default function PresidentAcademy({ onBack }: { onBack: () => void }) {
  const [screen, setScreen] = useState<Screen>('hub')
  const [activeSection, setActiveSection] = useState<Section | null>(null)
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null)
  const [progress, setProgress] = useState<Progress>(DEFAULT_PROGRESS)
  const [result, setResult] = useState<{
    correct: number
    total: number
    passed: boolean
    xp: number
  } | null>(null)

  // Load progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const data = JSON.parse(raw)
      setProgress({
        completedTopics: Array.isArray(data.completedTopics) ? data.completedTopics : [],
        correctByTopic: data.correctByTopic || {},
        totalByTopic: data.totalByTopic || {},
        totalXp: Number(data.totalXp) || 0,
      })
    } catch {}
  }, [])

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {}
  }, [progress])

  const topicQuestions = useMemo(() => {
    if (!activeTopic) return []
    return ALL_QUESTIONS.filter(q => q.topicId === activeTopic.id)
  }, [activeTopic])

  const openSection = (id: SectionId) => {
    const section = SECTIONS.find(s => s.id === id)
    if (!section) return
    setActiveSection(section)
    setScreen('section')
  }

  const openTopic = (topic: Topic) => {
    setActiveTopic(topic)
    setScreen('quiz')
  }

  const finishQuiz = (correct: number, total: number) => {
    if (!activeTopic) return
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0
    const passed = percent >= PASS_PERCENT
    const xp = correct * 10

    setProgress(p => ({
      ...p,
      completedTopics: passed
        ? p.completedTopics.includes(activeTopic.id)
          ? p.completedTopics
          : [...p.completedTopics, activeTopic.id]
        : p.completedTopics,
      correctByTopic: {
        ...p.correctByTopic,
        [activeTopic.id]: Math.max(p.correctByTopic[activeTopic.id] || 0, correct),
      },
      totalByTopic: { ...p.totalByTopic, [activeTopic.id]: total },
      totalXp: p.totalXp + xp,
    }))

    setResult({ correct, total, passed, xp })
    setScreen('result')
  }

  if (screen === 'hub') {
    return (
      <PresidentHub
        sections={SECTIONS}
        progress={progress}
        onSectionClick={openSection}
        onBack={onBack}
      />
    )
  }

  if (screen === 'section' && activeSection) {
    return (
      <PresidentSection
        section={activeSection}
        progress={progress}
        onTopicClick={openTopic}
        onBack={() => setScreen('hub')}
      />
    )
  }

  if (screen === 'quiz' && activeTopic) {
    return (
      <PresidentQuiz
        topic={activeTopic}
        questions={topicQuestions}
        onFinish={finishQuiz}
        onExit={() => setScreen('section')}
      />
    )
  }

  if (screen === 'result' && activeTopic && result) {
    return (
      <PresidentResult
        topicTitle={activeTopic.title}
        correct={result.correct}
        total={result.total}
        passed={result.passed}
        xp={result.xp}
        onRetry={() => {
          setResult(null)
          setScreen('quiz')
        }}
        onBack={() => {
          setResult(null)
          setScreen('section')
        }}
      />
    )
  }

  return null
}
