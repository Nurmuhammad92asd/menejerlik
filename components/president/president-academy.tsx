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
import PresidentLesson from './president-lesson'
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

/* =========================================================
   LESSON CONTENTS — 23 mavzu uchun vizual dars
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

const LESSON_CONTENTS: Record<string, LessonContent> = {
  // ═══════════════ MATEMATIKA ═══════════════
  'math-algebra': {
    intro:
      "Algebra — o'zgaruvchilar (x, y) bilan ishlash. Tenglamalarni yechish uchun ikkala tomonni bir xil o'zgartirish kerak. Asosiy qoida: noma'lumni bir tomonga, sonlarni boshqa tomonga o'tkazish.",
    formulas: [
      { formula: 'ax + b = c → x = (c - b) / a', label: 'Chiziqli tenglama', color: 'blue' },
      { formula: '(x + a)(x + b) = x² + (a+b)x + ab', label: "Ko'paytirish formulasi", color: 'green' },
    ],
    diagrams: [{ kind: 'numberline', props: { from: 0, to: 10, mark: 7 } }],
    steps: [
      { number: 1, text: "Noma'lumni bir tomonga, sonlarni boshqa tomonga o'tkazing" },
      { number: 2, text: "Har bir hadni soddalashtiring" },
      { number: 3, text: "Noma'lumning koeffitsientiga bo'ling" },
      { number: 4, text: "Javobni tenglamaga qo'yib tekshiring" },
    ],
    examples: [
      {
        question: "x + 5 = 12. x = ?",
        solution: 'x = 7',
        steps: ['x = 12 - 5', 'x = 7'],
      },
      {
        question: '3x - 6 = 9. x = ?',
        solution: 'x = 5',
        steps: ['3x = 15', 'x = 5'],
      },
    ],
    tips: [
      'Har bir qadamni yozib boring',
      "Javobni tenglamaga qo'yib tekshiring",
    ],
  },
  'math-geometry': {
    intro:
      "Geometriya — shakllar, o'lchamlar va ularning xossalari. Yuza va perimetrni hisoblash uchun formulalarni bilish kerak. Har bir shaklning o'z formulasi bor.",
    formulas: [
      { formula: "To'g'ri to'rtburchak: Y = a × b", label: 'Yuza', color: 'blue' },
      { formula: 'Uchburchak: Y = (a × h) ÷ 2', label: 'Yuza', color: 'green' },
      { formula: 'Aylana: Y = π × r²', label: 'Yuza', color: 'purple' },
      { formula: 'Kub: V = a³', label: 'Hajm', color: 'amber' },
    ],
    diagrams: [
      { kind: 'rectangle', props: { w: '8', h: '5' } },
      { kind: 'triangle', props: { a: '6', b: '8', c: '10' } },
      { kind: 'circle', props: { r: '5' } },
    ],
    tips: [
      'Har bir formulani yodlang',
      "Birliklarni to'g'ri yozing (sm, m, km)",
      "Shaklni chizib ko'ring — yordam beradi",
    ],
  },
  'math-fractions': {
    intro:
      "Kasrlar — butunning bir qismi. Oddiy kasr (1/2), o'nlik kasr (0.5) — bir xil ma'no. Kasrlarni qo'shish, ayirish, ko'paytirish va bo'lish uchun maxrajlarni bilish muhim.",
    formulas: [
      { formula: 'a/b + c/d = (ad + bc) / bd', label: "Qo'shish", color: 'blue' },
      { formula: 'a/b × c/d = (ac) / (bd)', label: "Ko'paytirish", color: 'green' },
      { formula: 'a/b ÷ c/d = (a×d) / (b×c)', label: "Bo'lish", color: 'purple' },
    ],
    diagrams: [
      {
        kind: 'pie',
        props: {
          data: [
            { label: '1/2', value: 50, color: '#3b82f6' },
            { label: '1/4', value: 25, color: '#10b981' },
            { label: '1/4', value: 25, color: '#f59e0b' },
          ],
        },
      },
    ],
    examples: [
      {
        question: '1/2 + 1/4 = ?',
        solution: '3/4',
        steps: ['2/4 + 1/4', '3/4'],
      },
    ],
    tips: [
      "Maxrajlarni bir xil qiling",
      "Natijani soddalashtiring",
    ],
  },
  'math-percent': {
    intro:
      "Foiz — 100 ga nisbatan olingan qism. 50% — yarmi, 25% — choragi, 10% — o'ndan biri. Do'konda chegirma, bankda kredit — hammasi foiz bilan.",
    formulas: [
      { formula: 'X% = X / 100', label: 'Kasrga aylantirish', color: 'blue' },
      { formula: 'N ning X% = N × X / 100', label: 'Foiz hisoblash', color: 'green' },
      { formula: '(Yangi - Eski) / Eski × 100%', label: "O'zgarish foizi", color: 'purple' },
    ],
    diagrams: [
      {
        kind: 'pie',
        props: {
          data: [
            { label: '50%', value: 50, color: '#3b82f6' },
            { label: '25%', value: 25, color: '#10b981' },
            { label: '25%', value: 25, color: '#f59e0b' },
          ],
        },
      },
      {
        kind: 'bar',
        props: {
          data: [
            { label: '10%', value: 10 },
            { label: '25%', value: 25 },
            { label: '50%', value: 50 },
            { label: '75%', value: 75 },
            { label: '100%', value: 100 },
          ],
        },
      },
    ],
    examples: [
      {
        question: "200 ning 70% ini toping.",
        solution: '140',
        steps: ['200 × 0.70', '140'],
      },
      {
        question: "Telefon 2 000 000 so'm. 15% chegirma. Yangi narx?",
        solution: "1 700 000 so'm",
        steps: ['2 000 000 × 0.15 = 300 000', '2 000 000 - 300 000 = 1 700 000'],
      },
    ],
  },
  'math-equation': {
    intro:
      "Tenglama — ikki ifodaning tengligi. Yechish — noma'lumni topish. Chiziqli (ax + b = 0) va kvadrat (ax² + bx + c = 0) tenglamalar eng ko'p uchraydi.",
    formulas: [
      { formula: 'ax² + bx + c = 0', label: 'Kvadrat tenglama', color: 'blue' },
      { formula: 'D = b² - 4ac', label: 'Diskriminant', color: 'green' },
      { formula: 'x = (-b ± √D) / 2a', label: 'Ildizlar', color: 'purple' },
    ],
    examples: [
      {
        question: 'x² - 5x + 6 = 0',
        solution: 'x = 2 yoki x = 3',
        steps: ["Ko'paytuvchilarga ajratamiz: (x-2)(x-3) = 0", 'x = 2 yoki x = 3'],
      },
      {
        question: 'x² = 16',
        solution: 'x = ±4',
        steps: ['x² - 16 = 0', '(x-4)(x+4) = 0', 'x = 4 yoki x = -4'],
      },
    ],
    tips: [
      'Diskriminantni hisoblang',
      "Ildizlarni tekshiring",
    ],
  },
  'math-logic-problems': {
    intro:
      "Mantiqiy masalalar — real hayotdagi vaziyatlar. Avval ma'lumot yig'ish, keyin strategiya tanlash kerak. Ko'pincha bir nechta qadamda yechiladi.",
    steps: [
      { number: 1, text: "Masalani diqqat bilan o'qing — nima so'ralgan?" },
      { number: 2, text: "Ma'lumotlarni ajratib oling — nima berilgan?" },
      { number: 3, text: 'Strategiyani tanlang — qanday yechish mumkin?' },
      { number: 4, text: 'Hisoblang va tekshiring' },
    ],
    examples: [
      {
        question: "3 ta ishchi 6 soatda bajaradi. 2 ta ishchi?",
        solution: '9 soat',
        steps: ['3 × 6 = 18 ish-soat', '18 ÷ 2 = 9 soat'],
      },
    ],
    tips: [
      "Har doim birliklarni tekshiring",
      "Javobni real hayotga moslang",
    ],
  },

  // ═══════════════ INGLIZ TILI ═══════════════
  'eng-grammar': {
    intro:
      "Grammar — ingliz tilining asosi. Tenses (zamonlar), articles (artikllar), prepositions (predloglar) — hammasi muhim. Har bir qoidani misollar bilan o'rganing.",
    formulas: [
      { formula: 'Present Simple: Subject + V(s/es)', label: 'Hozirgi oddiy', color: 'blue' },
      { formula: 'Past Simple: Subject + V2', label: "O'tgan oddiy", color: 'green' },
      { formula: 'Present Perfect: Subject + have/has + V3', label: 'Hozirgi tugallangan', color: 'purple' },
    ],
    examples: [
      {
        question: 'Choose: "She ___ to school every day."',
        solution: 'goes',
        steps: ['3rd person singular', 'Present Simple: +es'],
      },
      {
        question: 'Choose: "They ___ football when it started to rain."',
        solution: 'were playing',
        steps: ['Past action in progress', 'Past Continuous'],
      },
    ],
    tips: [
      'Har kuni 10 daqiqa grammar mashq qiling',
      'Xatolaringizni yozib boring',
    ],
  },
  'eng-vocabulary': {
    intro:
      "Vocabulary — so'z boyligi. Har kuni 5 ta yangi so'z o'rganing. So'zni kontekstda o'rganing — yodlashdan ko'ra samaraliroq.",
    steps: [
      { number: 1, text: "Yangi so'zni yozing" },
      { number: 2, text: "Ma'nosini o'rganing" },
      { number: 3, text: 'Misol gap tuzing' },
      { number: 4, text: "Har kuni takrorlang" },
    ],
    tips: [
      'Kartochkalar ishlating',
      "So'zni ovoz chiqarib ayting",
    ],
  },
  'eng-reading': {
    intro:
      "Reading — matnni tushunish. Avval savolni o'qing, keyin matnni. Bu vaqtni tejaydi va to'g'ri javobni topishga yordam beradi.",
    steps: [
      { number: 1, text: "Savolni o'qing — nima so'ralgan?" },
      { number: 2, text: 'Matnni skanerlang — kalit so\'zlarni toping' },
      { number: 3, text: "Javobni toping va tekshiring" },
    ],
    tips: [
      'Har bir so\'zni tushunish shart emas',
      'Kontekstdan ma\'noni toping',
    ],
  },
  'eng-writing': {
    intro:
      "Writing — yozish ko'nikmasi. Avval reja tuzing, keyin yozing. Har bir gap aniq va qisqa bo'lishi kerak.",
    steps: [
      { number: 1, text: 'Reja tuzing' },
      { number: 2, text: 'Kirish yozing' },
      { number: 3, text: 'Asosiy qismni yozing' },
      { number: 4, text: 'Xulosa yozing' },
      { number: 5, text: 'Tekshiring' },
    ],
  },
  'eng-listening': {
    intro:
      "Listening — tinglash ko'nikmasi. Har kuni ingliz tilidagi audio tinglang. Avval sekin, keyin tezroq.",
    tips: [
      'Har kuni 10 daqiqa tinglang',
      'Subtitrlar bilan boshlang',
    ],
  },
  'eng-speaking': {
    intro:
      "Speaking — gapirish ko'nikmasi. Har kuni ovoz chiqarib gapiring. Xatolardan qo'rqmang — asosiysi gapirish.",
    tips: [
      'Har kuni 5 daqiqa gapiring',
      'O\'zingiz bilan gaplashing',
    ],
  },

  // ═══════════════ MANTIQ ═══════════════
  'logic-pattern': {
    intro:
      "Pattern — naqsh. Sonlar yoki shakllar orasidagi qonuniyatni toping. Har bir qadamda +2, ×3 yoki boshqa qoida bo'lishi mumkin.",
    examples: [
      {
        question: '2, 4, 6, 8, __?',
        solution: '10',
        steps: ['+2 har safar', '8 + 2 = 10'],
      },
      {
        question: '1, 4, 9, 16, __?',
        solution: '25',
        steps: ['Kvadratlar: 1², 2², 3², 4²', '5² = 25'],
      },
    ],
    tips: [
      "Farqni hisoblang (+2, -3, ×2)",
      "Kvadrat/kub bo'lishi mumkin",
    ],
  },
  'logic-sequence': {
    intro:
      "Sequence — ketma-ketlik. Har bir son oldingisidan qanday farq qiladi? Ayirish, qo'shish, ko'paytirish — hammasi bo'lishi mumkin.",
    examples: [
      {
        question: '2, 6, 18, 54, __?',
        solution: '162',
        steps: ['×3 har safar', '54 × 3 = 162'],
      },
    ],
  },
  'logic-analogies': {
    intro:
      "Analogies — o'xshashlik. A : B = C : D. Munosabatni toping: qush : osmon = baliq : ? (suv).",
    examples: [
      {
        question: 'Bird : Sky :: Fish : __?',
        solution: 'Water',
        steps: ['Bird lives in sky', 'Fish lives in water'],
      },
    ],
  },
  'logic-odd-one': {
    intro:
      "Odd one out — ortiqchani toping. Guruhga mos kelmaydigan elementni aniqlang. Rang, o'lcham, tur — farq har xil bo'lishi mumkin.",
    examples: [
      {
        question: 'Olma, Nok, Sabzi, Uzum',
        solution: 'Sabzi',
        steps: ['Olma, Nok, Uzum — meva', 'Sabzi — sabzavot'],
      },
    ],
  },
  'logic-spatial': {
    intro:
      "Spatial — fazoviy fikrlash. Shakllar, yo'nalishlar, o'lchamlar. Ko'pincha 3D shakllar haqida savollar.",
    diagrams: [
      { kind: 'triangle', props: { a: '3', b: '4', c: '5' } },
      { kind: 'rectangle', props: { w: '6', h: '4' } },
    ],
  },
  'logic-critical': {
    intro:
      "Critical thinking — tanqidiy fikrlash. Har bir da'voni tekshiring. Mantiqiy zanjirni kuzating: A → B, B → C, demak A → C.",
    examples: [
      {
        question: "Agar barcha odamlar o'ladi va Ali odam bo'lsa, Ali __?",
        solution: "O'ladi",
        steps: ['Barcha odamlar → o\'ladi', 'Ali — odam', "Demak Ali o'ladi"],
      },
    ],
    tips: [
      'Premiselarni aniqlang',
      'Xulosani tekshiring',
    ],
  },

  // ═══════════════ ONA TILI ═══════════════
  'nat-orthography': {
    intro:
      "Imlo — to'g'ri yozish qoidalari. Har bir so'zni to'g'ri yozing. Lug'atdan foydalaning, ko'p o'qing.",
    tips: [
      "Lug'atdan foydalaning",
      "Ko'p o'qing — imlo yaxshilanadi",
    ],
  },
  'nat-grammar': {
    intro:
      "Grammatika — so'z turkumlari va gap tuzilishi. Ot, fe'l, sifat, son, olmosh, ravish — asosiy turkumlar.",
    examples: [
      {
        question: '「Men kitob o\'qidim」 gapida ega qaysi?',
        solution: 'Men',
        steps: ["Ega — kim? savoliga javob", "Men — ega"],
      },
    ],
    tips: [
      'Har bir gapda ega va kesimni toping',
    ],
  },
  'nat-vocabulary': {
    intro:
      "Lug'at — so'z boyligi. Sinonim (o'xshash) va antonim (qarama-qarshi) so'zlarni o'rganing.",
    examples: [
      {
        question: '「Katta」 so\'zining antonimi?',
        solution: 'Kichik',
        steps: ['Katta ↔ kichik'],
      },
    ],
  },
  'nat-reading': {
    intro:
      "Matn tahlili — matnni tushunish. Asosiy fikr, dalillar va xulosani ajratib oling.",
    steps: [
      { number: 1, text: 'Matnni o\'qing' },
      { number: 2, text: 'Asosiy fikrni toping' },
      { number: 3, text: 'Dalillarni ajratib oling' },
      { number: 4, text: 'Xulosa chiqaring' },
    ],
  },
  'nat-creative': {
    intro:
      "Ijod — ijodiy yozish. Tasviriy so'zlar, metafora, taqqoslash — chiroyli yozishga yordam beradi.",
    tips: [
      "Tasviriy so'zlardan foydalaning",
      "Metafora va taqqoslash qo'shing",
    ],
  },
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PresidentAcademy({ onBack }: { onBack: () => void }) {
  const [screen, setScreen] = useState<Screen | 'lesson'>('hub')
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
    // Agar dars bo'lsa — dars ekraniga, aks holda testga
    if (LESSON_CONTENTS[topic.id]) {
      setScreen('lesson')
    } else {
      setScreen('quiz')
    }
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

  // ═══════════════════════════════════════════
  // HUB
  // ═══════════════════════════════════════════

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

  // ═══════════════════════════════════════════
  // SECTION (mavzular ro'yxati)
  // ═══════════════════════════════════════════

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

  // ═══════════════════════════════════════════
  // LESSON (dars)
  // ═══════════════════════════════════════════

  if (screen === 'lesson' && activeTopic) {
    return (
      <PresidentLesson
        title={activeTopic.title}
        content={LESSON_CONTENTS[activeTopic.id] || {}}
        onStartQuiz={() => setScreen('quiz')}
        onBack={() => setScreen('section')}
      />
    )
  }

  // ═══════════════════════════════════════════
  // QUIZ
  // ═══════════════════════════════════════════

  if (screen === 'quiz' && activeTopic) {
    return (
      <PresidentQuiz
        topic={activeTopic}
        questions={topicQuestions}
        onFinish={finishQuiz}
        onExit={() => setScreen('lesson')}
      />
    )
  }

  // ═══════════════════════════════════════════
  // RESULT
  // ═══════════════════════════════════════════

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
