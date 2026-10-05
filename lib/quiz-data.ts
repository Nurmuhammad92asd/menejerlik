/* =========================================================
 * MENEJERLIK BY NURMUHAMMAD
 * QUIZ DATA CORE
 * =========================================================
 *
 * MARKAZIY QUIZ REGISTRY
 *
 * ARXITEKTURA:
 *
 * Module
 *   └── Topic
 *         ├── easy
 *         ├── medium
 *         ├── hard
 *         └── case
 *
 * HAR BIR TO‘LIQ MAVZU:
 *
 *   30 easy
 *   30 medium
 *   30 hard
 *   10 case
 *   ----------------
 *   100 ta savol
 *
 * MAXSUS FANLAR:
 *
 *   📐 MATEMATIKA FANI
 *        └── 🎓 Attestatsiya — Abdurahmonova ustoz uchun maxsus
 *             └── 30 ta original attestatsiya-uslubidagi test
 *
 * =========================================================
 * PROJECT:
 * Menejerlik by Nurmuhammad
 *
 * VERSION:
 * Quiz Data Core v5.0
 * ========================================================= */


/* =========================================================
 * QUESTION DATA IMPORTS
 * ========================================================= */


/* =========================================================
 * MODULE 1
 * ========================================================= */

import { M1T1_LEVELS } from './data/m1t1'
import { M1T2_LEVELS } from './data/m1t2'
import { M1T3_LEVELS } from './data/m1t3'
import { M1T4_LEVELS } from './data/m1t4'
import { M1T5_LEVELS } from './data/m1t5'
import { M1T6_LEVELS } from './data/m1t6'


/* =========================================================
 * MODULE 2
 * ========================================================= */

import { M2T1_LEVELS } from './data/m2t1'
import { M2T2_LEVELS } from './data/m2t2'
import { M2T3_LEVELS } from './data/m2t3'
import { M2T4_LEVELS } from './data/m2t4'
import { M2T5_LEVELS } from './data/m2t5'


/* =========================================================
 * MODULE 3
 *
 * M3T1 → Ulangan
 * M3T2 → Ulangan
 * M3T3 → Ulangan
 * ========================================================= */

import { M3T1_LEVELS } from './data/m3t1'
import { M3T2_LEVELS } from './data/m3t2'
import { M3T3_LEVELS } from './data/m3t3'
import { M4T1 } from './data/m4t1'


/* =========================================================
 * MATEMATIKA
 *
 * Maxsus fan testi.
 *
 * Matematika alohida module sifatida registryga ulanadi.
 * Lekin testning o‘zi:
 *
 * 📐 MATEMATIKA FANI
 *      └── 🎓 Attestatsiya — Abdurahmonova ustoz uchun maxsus
 *
 * ko‘rinishida chiqadi.
 * ========================================================= */

import { MATH_ATTESTATION_LEVELS } from './data/math-attestation'


/* =========================================================
 * QUESTION TYPE
 * ========================================================= */

export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}


/* =========================================================
 * TOPIC MATERIALS
 * ========================================================= */

export type TopicMaterials = {
  text?: string
  audioUrl?: string
  pdfUrl?: string
}


/* =========================================================
 * LEVEL TYPE
 * ========================================================= */

export type LevelKey =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'case'


export const LEVEL_KEYS = [
  'easy',
  'medium',
  'hard',
  'case',
] as const


/* =========================================================
 * REQUIRED LEVEL COUNTS
 * ========================================================= */

export const REQUIRED_LEVEL_COUNTS: Record<
  LevelKey,
  number
> = {
  easy: 30,
  medium: 30,
  hard: 30,
  case: 10,
}


/* =========================================================
 * FULL TOPIC COUNT
 * ========================================================= */

export const FULL_TOPIC_QUESTION_COUNT = 100


/* =========================================================
 * TOPIC LEVELS
 * ========================================================= */

export type TopicLevels = {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
}


/* =========================================================
 * TOPIC TYPE
 * ========================================================= */

export type Topic = {
  id: string
  title: string
  description: string
  materials?: TopicMaterials
  levels: TopicLevels
}


/* =========================================================
 * CATEGORY / MODULE TYPE
 * ========================================================= */

export type Category = {
  id: string
  title: string
  description: string
  topics: Topic[]
}


/* =========================================================
 * EMPTY LEVELS
 * ========================================================= */

export const EMPTY_LEVELS: TopicLevels = {
  easy: [],
  medium: [],
  hard: [],
  case: [],
}


/* =========================================================
 * MODULE 1
 * ========================================================= */

const MODULE_1: Category = {
  id: 'm1',

  title:
    '1-MODUL. Umumiy ta’lim muassasasini boshqarish',

  description:
    'Ta’lim muassasasini samarali boshqarish, strategik menejment, boshqaruv psixologiyasi, korrupsiyaviy xavflar, boshqaruv qarorlari va maktab imijini boshqarish.',

  topics: [

    {
      id: 'm1t1',

      title:
        'Umumiy ta’lim muassasasini boshqarish',

      description:
        'Umumiy o‘rta ta’lim muassasasini boshqarish, boshqaruv tamoyillari, attestatsiya, akkreditatsiya va TALIS.',

      levels: M1T1_LEVELS,
    },

    {
      id: 'm1t2',

      title:
        'Strategik menejment',

      description:
        'Strategik menejment, strategik rejalashtirish, maqsadlar va ta’lim muassasasini rivojlantirish.',

      levels: M1T2_LEVELS,
    },

    {
      id: 'm1t3',

      title:
        'Boshqaruv psixologiyasi',

      description:
        'Rahbarning emotsional intellekti, muloqot madaniyati, temperament, stressni boshqarish, nizolarni hal qilish va jamoani samarali boshqarish psixologiyasi.',

      levels: M1T3_LEVELS,
    },

    {
      id: 'm1t4',

      title:
        'Korrupsiyaviy xavf-xatarlarni oldini olish',

      description:
        'Ta’lim muassasasida korrupsiyaviy xavflarni aniqlash, baholash va oldini olish mexanizmlari.',

      levels: M1T4_LEVELS,
    },

    {
      id: 'm1t5',

      title:
        'Boshqaruv qarorlari',

      description:
        'Boshqaruv qarorlarini qabul qilish, amalga oshirish, nazorat qilish, baholash va tuzatishlar kiritish.',

      levels: M1T5_LEVELS,
    },

    {
      id: 'm1t6',

      title:
        'Maktab imijini shakllantirish',

      description:
        'Maktab imiji, ichki va tashqi imij, PR faoliyati, raqamli imij, axborot siyosati va jamoatchilik bilan aloqalarni samarali boshqarish.',

      levels: M1T6_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 2
 * ========================================================= */

const MODULE_2: Category = {
  id: 'm2',

  title:
    '2-MODUL. Ta’lim muassasasini rivojlantirish',

  description:
    'Ta’lim sifatini boshqarish, o‘quvchi natijalarini rivojlantirish, kasbga yo‘naltirish, ta’lim sifatini baholash va bola xavfsizligi hamda farovonligini ta’minlash.',

  topics: [

    {
      id: 'm2t1',

      title:
        'Ta’lim sifatini boshqarish',

      description:
        'Ta’lim sifatini tizimli boshqarish, DTS va DTT, ichki monitoring, baholash va ta’lim sifatini uzluksiz takomillashtirish.',

      levels: M2T1_LEVELS,
    },

    {
      id: 'm2t2',

      title:
        'O‘quvchi natijalarini rivojlantirish',

      description:
        'O‘quvchilarning ta’limiy natijalarini tahlil qilish, individual yondashuv, rivojlanish dinamikasi va natijalarni yaxshilash.',

      levels: M2T2_LEVELS,
    },

    {
      id: 'm2t3',

      title:
        'Yoshlarni kasb-hunarga yo‘naltirish',

      description:
        'O‘quvchilarning qiziqishi, qobiliyati va mehnat bozori talablari asosida ongli kasbiy tanlovini shakllantirish.',

      levels: M2T3_LEVELS,
    },

    {
      id: 'm2t4',

      title:
        'Ta’lim sifatini baholash va monitoring',

      description:
        'Ta’lim natijalarini baholash, monitoring qilish va baholash ma’lumotlaridan boshqaruv qarorlarida foydalanish.',

      levels: M2T4_LEVELS,
    },

    {
      id: 'm2t5',

      title:
        'Bola xavfsizligi va farovonligini ta’minlash',

      description:
        'Maktab muhitida o‘quvchilarning xavfsizligi, himoyasi, psixologik farovonligi va rivojlanishi uchun qulay sharoit yaratish.',

      levels: M2T5_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 3
 * ========================================================= */

const MODULE_3: Category = {

  id: 'm3',

  title:
    '3-MODUL. Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',

  description:
    'Zamonaviy rahbarning shaxsiy, kasbiy va boshqaruv kompetensiyalarini rivojlantirish, shaxsiy samaradorlikni oshirish, pedagoglarning kasbiy rivojlanishini qo‘llab-quvvatlash va ta’lim muassasasida yuqori samaradorlikka erishish.',

  topics: [

    {
      id: 'm3t1',

      title:
        'Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',

      description:
        'Zamonaviy rahbar uchun zarur bo‘lgan boshqaruv kompetensiyalari, liderlik, strategik fikrlash, kommunikatsiya, qaror qabul qilish va kasbiy rivojlanish.',

      levels: M3T1_LEVELS,
    },

    {
      id: 'm3t2',

      title:
        'Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish',

      description:
        'Rahbarning shaxsiy samaradorligi, ma’naviy qiyofasi, axloqiy yetakchiligi, foresight, refleksiya, empatiya, vaqt va ustuvorliklarni boshqarish hamda o‘zini uzluksiz rivojlantirish.',

      levels: M3T2_LEVELS,
    },

    {
      id: 'm3t3',

      title:
        'Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish',

      description:
        'Pedagoglarning kasbiy rivojlanishi, kompetensiyalarini oshirish, faoliyat samaradorligini baholash, individual rivojlanish, mentorlik, metodik hamkorlik va maktabning pedagogik salohiyatini kuchaytirish.',

      levels: M3T3_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 4
 * ========================================================= */

const MODULE_4: Category = {

  id: 'm4',

  title:
    '4-MODUL. Inson resurslarini boshqarish',

  description:
    'Maktabda inson resurslarini samarali boshqarish va mehnat munosabatlarini tashkil etish.',

  topics: [

    {
      id: 'm4t1',

      title:
        'Inson resurslarini boshqarish strategiyasi',

      description:
        'Kadrlarni rejalashtirish, rivojlantirish va samarali boshqarish.',

      levels: M4T1,
    },

    {
      id: 'm4t2',

      title:
        'Ta’lim muassasalarida mehnat munosabatlari va mehnat qonunchiligi',

      description:
        'Mehnat munosabatlari va xodimlar bilan ishlashning huquqiy asoslari.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm4t3',

      title:
        'Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi',

      description:
        'Kadrlar bo‘yicha hujjatlarni to‘g‘ri yuritish va hisobini tashkil etish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm4t4',

      title:
        'Inson resurslari faoliyatini baholash',

      description:
        'Xodimlar faoliyatini mezonlar asosida baholash va rivojlantirish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 5
 * ========================================================= */

const MODULE_5: Category = {

  id: 'm5',

  title:
    '5-MODUL. Ish yuritish va hisobot',

  description:
    'Boshqaruv hujjatlari, normativ-huquqiy hujjatlar va hisobdorlik tizimi.',

  topics: [

    {
      id: 'm5t1',

      title:
        'Boshqaruv normativ-huquqiy hujjatlar bilan ishlash',

      description:
        'Normativ-huquqiy hujjatlarni o‘rganish, qo‘llash va boshqaruv qarorlarida foydalanish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm5t2',

      title:
        'Maktablarda ish yuritish hujjatlari bilan ishlash va hisobdorlik',

      description:
        'Maktab hujjatlarini yuritish, nazorat va hisobotlarni tashkil etish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 6
 * ========================================================= */

const MODULE_6: Category = {

  id: 'm6',

  title:
    '6-MODUL. Jamoatchilik va ota-onalar bilan ishlash',

  description:
    'Ota-onalar, jamoatchilik, davlat va jamoat tashkilotlari bilan samarali hamkorlik.',

  topics: [

    {
      id: 'm6t1',

      title:
        'Maktabning ota-onalar va jamoatchilik bilan hamkorligi',

      description:
        'Ota-onalar va jamoatchilikni ta’lim jarayoniga samarali jalb qilish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm6t2',

      title:
        'Maktabning davlat va jamoat tashkilotlari bilan hamkorligi',

      description:
        'Tashqi hamkorlar bilan tizimli va natijador hamkorlikni tashkil etish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm6t3',

      title:
        'Boshqaruv va media savodxonlik',

      description:
        'Axborot bilan ishlash, media muhit va kommunikatsiya kompetensiyalarini rivojlantirish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 7
 * ========================================================= */

const MODULE_7: Category = {

  id: 'm7',

  title:
    '7-MODUL. Boshqaruvda raqamli kompetentlik',

  description:
    'Raqamli vositalar va sun’iy intellektdan boshqaruvda samarali foydalanish.',

  topics: [

    {
      id: 'm7t1',

      title:
        'Boshqaruvda raqamli kompetentlik',

      description:
        'Raqamli texnologiyalar yordamida boshqaruv jarayonlarini takomillashtirish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm7t2',

      title:
        'Sun’iy intellekt tizimlaridan foydalanish',

      description:
        'Sun’iy intellekt imkoniyatlaridan ta’lim va boshqaruv jarayonlarida foydalanish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 8
 * ========================================================= */

const MODULE_8: Category = {

  id: 'm8',

  title:
    '8-MODUL. Ta’limda liderlik va o‘zgarishlarni boshqarish',

  description:
    'O‘zgarishlarni boshqarish, jamoa muhitini rivojlantirish va risklarni boshqarish.',

  topics: [

    {
      id: 'm8t1',

      title:
        'O‘zgarish sharoitida qiyinchiliklarni boshqarish',

      description:
        'Tashkilotdagi o‘zgarishlarga moslashish va qarshiliklarni boshqarish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm8t2',

      title:
        'Jamoada sog‘lom muhitni tashkil etish va ahil jamoani shakllantirish',

      description:
        'Sog‘lom psixologik muhit, jamoaviy hamkorlik va ishonchni rivojlantirish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm8t3',

      title:
        'Ta’lim muassasasida risk va xavf-xatarlarni boshqarish',

      description:
        'Risklarni aniqlash, baholash va ularning oldini olish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 9
 * ========================================================= */

const MODULE_9: Category = {

  id: 'm9',

  title:
    '9-MODUL. Inklyuziv ta’limni tashkil etish',

  description:
    'Inklyuziv ta’limning mazmuni, mexanizmlari va gospital ta’lim.',

  topics: [

    {
      id: 'm9t1',

      title:
        'Inklyuziv ta’limning mazmun-mohiyati va ahamiyati',

      description:
        'Inklyuziv ta’limning asosiy tamoyillari va ahamiyati.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm9t2',

      title:
        'Inklyuziv ta’limni tashkil etish mexanizmi',

      description:
        'Inklyuziv ta’limni tashkil etish va boshqarish mexanizmlari.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm9t3',

      title:
        'Gospital ta’lim',

      description:
        'Davolanish jarayonidagi bolalar uchun ta’limni tashkil etish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * MODULE 10
 * ========================================================= */

const MODULE_10: Category = {

  id: 'm10',

  title:
    '10-MODUL. Moliyaviy munosabatlar',

  description:
    'Ta’lim muassasasining moliyaviy faoliyati, ish haqi va budjetdan tashqari mablag‘lar.',

  topics: [

    {
      id: 'm10t1',

      title:
        'Ta’lim muassasasining moliyaviy faoliyatini tashkil etish',

      description:
        'Ta’lim muassasasida moliyaviy boshqaruv va mablag‘lardan foydalanish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm10t2',

      title:
        'Xodimlar mehnatiga haq to‘lash va tarifikatsiyalarini me’yor asosida tuzish amaliyoti',

      description:
        'Mehnatga haq to‘lash va tarifikatsiya jarayonlarini me’yor asosida tashkil etish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm10t3',

      title:
        'Budjetdan tashqari mablag‘larni topish va samarali tasarruf etish',

      description:
        'Qo‘shimcha mablag‘larni jalb qilish va ulardan maqsadli foydalanish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm10t4',

      title:
        'Umumiy o‘rta ta’lim maktablarida ta’lim xizmatlari',

      description:
        'Ta’lim xizmatlarini tashkil etish va ularni boshqarish.',

      levels: EMPTY_LEVELS,
    },

  ],
}


/* =========================================================
 * 📐 MATEMATIKA FANI
 *
 * MUHIM:
 *
 * Bu alohida "Abdurahmonova moduli" emas.
 *
 * Bu:
 *
 * 📐 MATEMATIKA FANI
 *      ↓
 * 🎓 Attestatsiya — Abdurahmonova ustoz uchun maxsus
 *
 * tarzida ishlaydi.
 *
 * Keyinchalik shu fan ichiga:
 *
 *   Algebra
 *   Geometriya
 *   Funksiyalar
 *   Matematik mantiq
 *   Attestatsiya
 *   Olimpiada
 *
 * kabi boshqa mavzularni ham qo‘shish mumkin.
 * ========================================================= */

const MODULE_MATEMATIKA: Category = {

  id: 'matematika',

  title:
    '📐 MATEMATIKA FANI',

  description:
    'Matematika fanidan algebra, geometriya, mantiq, matematik kompetensiyalar va attestatsiya-uslubidagi original testlar.',

  topics: [

    {
      id: 'math-attestation',

      title:
        '🎓 Attestatsiya — Abdurahmonova ustoz uchun maxsus',

      description:
        '😂 Maxsus matematika challenge. Ustoz, 30/30 qilsangiz — attestatsiya sizdan qo‘rqsin! Original attestatsiya-uslubidagi 30 ta savol.',

      levels:
        MATH_ATTESTATION_LEVELS,
    },

  ],
}


/* =========================================================
 * ALL MODULES / CATEGORIES
 * ========================================================= */

export const CATEGORIES: Category[] = [

  MODULE_1,

  MODULE_2,

  MODULE_3,

  MODULE_4,

  MODULE_5,

  MODULE_6,

  MODULE_7,

  MODULE_8,

  MODULE_9,

  MODULE_10,

  MODULE_MATEMATIKA,

]


/* =========================================================
 * PRESCHOOL
 * ========================================================= */

export const PRESCHOOL_CATEGORIES: Category[] = []


/* =========================================================
 * INTERNAL HELPERS
 * ========================================================= */

/**
 * Topic ichidagi barcha savollarni
 * quyidagi tartibda qaytaradi:
 *
 * easy → medium → hard → case
 */
function allTopicQuestions(
  topic: Topic,
): Question[] {

  return LEVEL_KEYS.flatMap(
    (level) =>
      topic.levels[level] ?? [],
  )
}


/**
 * Barcha modullardagi barcha savollar.
 */
function allQuestions(): Question[] {

  return CATEGORIES.flatMap(
    (module) =>
      module.topics.flatMap(
        (topic) =>
          allTopicQuestions(topic),
      ),
  )
}


/* =========================================================
 * GET MODULE BY ID
 * ========================================================= */

export function getModuleById(
  moduleId: string,
): Category | undefined {

  return CATEGORIES.find(
    (module) =>
      module.id === moduleId,
  )
}


/* =========================================================
 * GET TOPIC BY ID
 * ========================================================= */

export function getTopicById(
  topicId: string,
): Topic | undefined {

  for (const module of CATEGORIES) {

    const topic =
      module.topics.find(
        (item) =>
          item.id === topicId,
      )

    if (topic) {
      return topic
    }
  }

  return undefined
}


/* =========================================================
 * GET MODULE TOPICS
 * ========================================================= */

export function getModuleTopics(
  moduleId: string,
): Topic[] {

  return getModuleById(
    moduleId,
  )?.topics ?? []
}


/* =========================================================
 * GET TOPIC QUESTIONS
 * ========================================================= */

export function getTopicQuestions(
  topicId: string,
): Question[] {

  const topic =
    getTopicById(topicId)

  if (!topic) {
    return []
  }

  return allTopicQuestions(topic)
}


/* =========================================================
 * GET LEVEL QUESTIONS
 * ========================================================= */

export function getLevelQuestions(
  topicId: string,
  level: LevelKey,
): Question[] {

  const topic =
    getTopicById(topicId)

  if (!topic) {
    return []
  }

  return topic.levels[level] ?? []
}


/* =========================================================
 * GET MODULE QUESTIONS
 * ========================================================= */

export function getModuleQuestions(
  moduleId: string,
): Question[] {

  const module =
    getModuleById(moduleId)

  if (!module) {
    return []
  }

  return module.topics.flatMap(
    (topic) =>
      allTopicQuestions(topic),
  )
}


/* =========================================================
 * GET QUESTION BY ID
 * ========================================================= */

export function getQuestionById(
  questionId: string,
): Question | undefined {

  for (const module of CATEGORIES) {

    for (const topic of module.topics) {

      const question =
        allTopicQuestions(topic).find(
          (item) =>
            item.id === questionId,
        )

      if (question) {
        return question
      }
    }
  }

  return undefined
}


/* =========================================================
 * GET TOPIC LEVEL COUNTS
 * ========================================================= */

export function getTopicLevelCounts(
  topicId: string,
): Record<LevelKey, number> {

  const topic =
    getTopicById(topicId)

  if (!topic) {

    return {
      easy: 0,
      medium: 0,
      hard: 0,
      case: 0,
    }
  }

  return {
    easy:
      topic.levels.easy.length,

    medium:
      topic.levels.medium.length,

    hard:
      topic.levels.hard.length,

    case:
      topic.levels.case.length,
  }
}


/* =========================================================
 * GET TOPIC QUESTION COUNT
 * ========================================================= */

export function getTopicQuestionCount(
  topicId: string,
): number {

  return getTopicQuestions(
    topicId,
  ).length
}


/* =========================================================
 * GET MODULE TOPIC COUNT
 * ========================================================= */

export function getModuleTopicCount(
  moduleId: string,
): number {

  return getModuleTopics(
    moduleId,
  ).length
}


/* =========================================================
 * GET MODULE QUESTION COUNT
 * ========================================================= */

export function getModuleQuestionCount(
  moduleId: string,
): number {

  return getModuleQuestions(
    moduleId,
  ).length
}


/* =========================================================
 * CHECK TOPIC QUESTIONS
 * ========================================================= */

export function hasTopicQuestions(
  topicId: string,
): boolean {

  return (
    getTopicQuestionCount(
      topicId,
    ) > 0
  )
}


/* =========================================================
 * CHECK LEVEL QUESTIONS
 * ========================================================= */

export function hasLevelQuestions(
  topicId: string,
  level: LevelKey,
): boolean {

  return (
    getLevelQuestions(
      topicId,
      level,
    ).length > 0
  )
}


/* =========================================================
 * CHECK TOPIC COMPLETENESS
 * ========================================================= */

export function isTopicComplete(
  topicId: string,
): boolean {

  const counts =
    getTopicLevelCounts(
      topicId,
    )

  return (
    counts.easy >=
      REQUIRED_LEVEL_COUNTS.easy &&

    counts.medium >=
      REQUIRED_LEVEL_COUNTS.medium &&

    counts.hard >=
      REQUIRED_LEVEL_COUNTS.hard &&

    counts.case >=
      REQUIRED_LEVEL_COUNTS.case
  )
}


/* =========================================================
 * GET TOPIC COMPLETION PERCENTAGE
 * ========================================================= */

export function getTopicCompletionPercent(
  topicId: string,
): number {

  const counts =
    getTopicLevelCounts(
      topicId,
    )

  const current =
    counts.easy +
    counts.medium +
    counts.hard +
    counts.case

  const percentage =
    (
      current /
      FULL_TOPIC_QUESTION_COUNT
    ) * 100

  return Math.min(
    100,
    Math.round(
      percentage,
    ),
  )
}


/* =========================================================
 * MODULE IDS
 * ========================================================= */

export const MODULE_IDS: string[] =
  CATEGORIES.map(
    (module) =>
      module.id,
  )


/* =========================================================
 * TOPIC IDS
 * ========================================================= */

export const TOPIC_IDS: string[] =
  CATEGORIES.flatMap(
    (module) =>
      module.topics.map(
        (topic) =>
          topic.id,
      ),
  )


/* =========================================================
 * TOTAL MODULES
 * ========================================================= */

export const TOTAL_MODULES =
  CATEGORIES.length


/* =========================================================
 * TOTAL TOPICS
 * ========================================================= */

export const TOTAL_TOPICS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.length,
    0,
  )


/* =========================================================
 * TOTAL QUESTIONS
 * ========================================================= */

export const TOTAL_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          allTopicQuestions(
            topic,
          ).length,
        0,
      ),
    0,
  )


/* =========================================================
 * TOTAL EASY QUESTIONS
 * ========================================================= */

export const TOTAL_EASY_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          topic.levels.easy.length,
        0,
      ),
    0,
  )


/* =========================================================
 * TOTAL MEDIUM QUESTIONS
 * ========================================================= */

export const TOTAL_MEDIUM_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          topic.levels.medium.length,
        0,
      ),
    0,
  )


/* =========================================================
 * TOTAL HARD QUESTIONS
 * ========================================================= */

export const TOTAL_HARD_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          topic.levels.hard.length,
        0,
      ),
    0,
  )


/* =========================================================
 * TOTAL CASE QUESTIONS
 * ========================================================= */

export const TOTAL_CASE_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          topic.levels.case.length,
        0,
      ),
    0,
  )


/* =========================================================
 * MIXED TEST
 * ========================================================= */

export const MIXED_ID =
  'aralash'

export const MIXED_COUNT =
  30


/**
 * Barcha mavjud savollar.
 *
 * Matematika ham shu pool ichiga
 * avtomatik qo‘shiladi.
 */
export const MIXED_QUESTIONS: Question[] =
  allQuestions()


/* =========================================================
 * SHUFFLE
 * ========================================================= */

export function shuffleQuestions(
  questions: Question[],
): Question[] {

  const result =
    [...questions]

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1),
      )

    const temp =
      result[i]

    result[i] =
      result[j]

    result[j] =
      temp
  }

  return result
}


/* =========================================================
 * GET RANDOM QUESTIONS
 * ========================================================= */

export function getRandomQuestions(
  questions: Question[],
  count: number,
): Question[] {

  if (
    !Array.isArray(
      questions,
    ) ||
    questions.length === 0 ||
    count <= 0
  ) {
    return []
  }

  return shuffleQuestions(
    questions,
  ).slice(
    0,
    Math.min(
      count,
      questions.length,
    ),
  )
}


/* =========================================================
 * GET RANDOM LEVEL QUESTIONS
 * ========================================================= */

export function getRandomLevelQuestions(
  topicId: string,
  level: LevelKey,
  count: number,
): Question[] {

  return getRandomQuestions(
    getLevelQuestions(
      topicId,
      level,
    ),
    count,
  )
}


/* =========================================================
 * GET RANDOM TOPIC QUESTIONS
 * ========================================================= */

export function getRandomTopicQuestions(
  topicId: string,
  count: number,
): Question[] {

  return getRandomQuestions(
    getTopicQuestions(
      topicId,
    ),
    count,
  )
}


/* =========================================================
 * GET RANDOM MIXED QUESTIONS
 * ========================================================= */

export function getRandomMixedQuestions(
  count: number = MIXED_COUNT,
): Question[] {

  return getRandomQuestions(
    MIXED_QUESTIONS,
    count,
  )
}


/* =========================================================
 * GET BALANCED MIXED QUESTIONS
 *
 * 30 savol:
 *
 * easy   → 8
 * medium → 8
 * hard   → 8
 * case   → 6
 *
 * Jami → 30
 * ========================================================= */

export function getBalancedMixedQuestions(): Question[] {

  const easy =
    getRandomQuestions(
      CATEGORIES.flatMap(
        (module) =>
          module.topics.flatMap(
            (topic) =>
              topic.levels.easy,
          ),
      ),
      8,
    )

  const medium =
    getRandomQuestions(
      CATEGORIES.flatMap(
        (module) =>
          module.topics.flatMap(
            (topic) =>
              topic.levels.medium,
          ),
      ),
      8,
    )

  const hard =
    getRandomQuestions(
      CATEGORIES.flatMap(
        (module) =>
          module.topics.flatMap(
            (topic) =>
              topic.levels.hard,
          ),
      ),
      8,
    )

  const cases =
    getRandomQuestions(
      CATEGORIES.flatMap(
        (module) =>
          module.topics.flatMap(
            (topic) =>
              topic.levels.case,
          ),
      ),
      6,
    )

  return shuffleQuestions([
    ...easy,
    ...medium,
    ...hard,
    ...cases,
  ])
}


/* =========================================================
 * TOPIC HEALTH
 * ========================================================= */

export type TopicHealth = {

  id: string

  title: string

  easy: number

  medium: number

  hard: number

  case: number

  total: number

  completion: number

  ready: boolean

  complete: boolean
}


/* =========================================================
 * MODULE HEALTH
 * ========================================================= */

export type ModuleHealth = {

  id: string

  title: string

  topicCount: number

  questionCount: number

  completeTopics: number

  ready: boolean

  complete: boolean

  topics: TopicHealth[]
}


/* =========================================================
 * GET DATA HEALTH
 * ========================================================= */

export function getDataHealth() {

  const modules: ModuleHealth[] =
    CATEGORIES.map(
      (module) => {

        const topics: TopicHealth[] =
          module.topics.map(
            (topic) => {

              const easy =
                topic.levels.easy.length

              const medium =
                topic.levels.medium.length

              const hard =
                topic.levels.hard.length

              const caseCount =
                topic.levels.case.length

              const total =
                easy +
                medium +
                hard +
                caseCount

              const completion =
                Math.min(
                  100,
                  Math.round(
                    (
                      total /
                      FULL_TOPIC_QUESTION_COUNT
                    ) * 100,
                  ),
                )

              const ready =
                total > 0

              const complete =
                easy >=
                  REQUIRED_LEVEL_COUNTS.easy &&

                medium >=
                  REQUIRED_LEVEL_COUNTS.medium &&

                hard >=
                  REQUIRED_LEVEL_COUNTS.hard &&

                caseCount >=
                  REQUIRED_LEVEL_COUNTS.case

              return {

                id:
                  topic.id,

                title:
                  topic.title,

                easy,

                medium,

                hard,

                case:
                  caseCount,

                total,

                completion,

                ready,

                complete,
              }
            },
          )

        const questionCount =
          topics.reduce(
            (total, topic) =>
              total +
              topic.total,
            0,
          )

        const completeTopics =
          topics.filter(
            (topic) =>
              topic.complete,
          ).length

        const ready =
          questionCount > 0

        const complete =
          topics.length > 0 &&
          completeTopics ===
            topics.length

        return {

          id:
            module.id,

          title:
            module.title,

          topicCount:
            module.topics.length,

          questionCount,

          completeTopics,

          ready,

          complete,

          topics,
        }
      },
    )

  return {

    modules,

    totalModules:
      TOTAL_MODULES,

    totalTopics:
      TOTAL_TOPICS,

    totalQuestions:
      TOTAL_QUESTIONS,

    easy:
      TOTAL_EASY_QUESTIONS,

    medium:
      TOTAL_MEDIUM_QUESTIONS,

    hard:
      TOTAL_HARD_QUESTIONS,

    case:
      TOTAL_CASE_QUESTIONS,
  }
}


/* =========================================================
 * GET MODULE HEALTH
 * ========================================================= */

export function getModuleHealth(
  moduleId: string,
): ModuleHealth | undefined {

  return getDataHealth()
    .modules
    .find(
      (module) =>
        module.id === moduleId,
    )
}


/* =========================================================
 * GET TOPIC HEALTH
 * ========================================================= */

export function getTopicHealth(
  topicId: string,
): TopicHealth | undefined {

  const health =
    getDataHealth()

  for (
    const module
    of health.modules
  ) {

    const topic =
      module.topics.find(
        (item) =>
          item.id === topicId,
      )

    if (topic) {
      return topic
    }
  }

  return undefined
}


/* =========================================================
 * DUPLICATE QUESTION ID CHECK
 * ========================================================= */

export function getDuplicateQuestionIds(): string[] {

  const questions =
    allQuestions()

  const counter =
    new Map<string, number>()

  for (
    const question
    of questions
  ) {

    counter.set(
      question.id,
      (
        counter.get(
          question.id,
        ) ?? 0
      ) + 1,
    )
  }

  return [
    ...counter.entries(),
  ]
    .filter(
      ([, count]) =>
        count > 1,
    )
    .map(
      ([id]) =>
        id,
    )
}


/* =========================================================
 * QUESTION VALIDATION
 * ========================================================= */

export function validateQuestion(
  question: Question,
): boolean {

  if (
    !question ||
    typeof question.id !== 'string' ||
    typeof question.text !== 'string' ||
    typeof question.explanation !== 'string'
  ) {
    return false
  }

  if (
    question.id.trim().length === 0 ||
    question.text.trim().length === 0 ||
    question.explanation.trim().length === 0
  ) {
    return false
  }

  if (
    !Array.isArray(
      question.options,
    )
  ) {
    return false
  }

  if (
    question.options.length < 2
  ) {
    return false
  }

  if (
    question.options.some(
      (option) =>
        typeof option !== 'string' ||
        option.trim().length === 0,
    )
  ) {
    return false
  }

  if (
    !Number.isInteger(
      question.answer,
    )
  ) {
    return false
  }

  if (
    question.answer < 0 ||
    question.answer >=
      question.options.length
  ) {
    return false
  }

  return true
}


/* =========================================================
 * INVALID QUESTIONS
 * ========================================================= */

export function getInvalidQuestions(): Question[] {

  return allQuestions().filter(
    (question) =>
      !validateQuestion(
        question,
      ),
  )
}


/* =========================================================
 * GET TOPIC INVALID QUESTIONS
 * ========================================================= */

export function getTopicInvalidQuestions(
  topicId: string,
): Question[] {

  return getTopicQuestions(
    topicId,
  ).filter(
    (question) =>
      !validateQuestion(
        question,
      ),
  )
}


/* =========================================================
 * GET ALL QUESTION IDS
 * ========================================================= */

export function getAllQuestionIds(): string[] {

  return allQuestions().map(
    (question) =>
      question.id,
  )
}


/* =========================================================
 * GLOBAL DATA STATUS
 * ========================================================= */

export function getQuizSystemStatus() {

  const health =
    getDataHealth()

  const duplicateIds =
    getDuplicateQuestionIds()

  const invalidQuestions =
    getInvalidQuestions()

  const completeTopics =
    health.modules.reduce(
      (total, module) =>
        total +
        module.completeTopics,
      0,
    )

  const readyTopics =
    health.modules.reduce(
      (total, module) =>
        total +
        module.topics.filter(
          (topic) =>
            topic.ready,
        ).length,
      0,
    )

  const totalExpectedForCompleteTopics =
    completeTopics *
    FULL_TOPIC_QUESTION_COUNT

  const systemHealthy =
    duplicateIds.length === 0 &&
    invalidQuestions.length === 0

  return {

    totalModules:
      health.totalModules,

    totalTopics:
      health.totalTopics,

    totalQuestions:
      health.totalQuestions,

    easy:
      health.easy,

    medium:
      health.medium,

    hard:
      health.hard,

    case:
      health.case,

    readyTopics,

    completeTopics,

    totalExpectedForCompleteTopics,

    duplicateQuestionIds:
      duplicateIds,

    invalidQuestionCount:
      invalidQuestions.length,

    systemHealthy,

    module3Ready:
      getModuleQuestionCount(
        'm3',
      ) > 0,

    module3Complete:
      getModuleHealth(
        'm3',
      )?.complete ?? false,

    m3t1Complete:
      isTopicComplete(
        'm3t1',
      ),

    m3t2Complete:
      isTopicComplete(
        'm3t2',
      ),

    m3t3Complete:
      isTopicComplete(
        'm3t3',
      ),

    /* =====================================================
     * MATEMATIKA STATUS
     * ===================================================== */

    matematikaReady:
      getModuleQuestionCount(
        'matematika',
      ) > 0,

    matematikaQuestionCount:
      getModuleQuestionCount(
        'matematika',
      ),

    matematikaAttestationComplete:
      isTopicComplete(
        'math-attestation',
      ),

  }
}


/* =========================================================
 * GET MODULE 3 STATUS
 * ========================================================= */

export function getModule3Status() {

  return {

    moduleId:
      'm3',

    topics: {

      m3t1: {
        questionCount:
          getTopicQuestionCount(
            'm3t1',
          ),

        completion:
          getTopicCompletionPercent(
            'm3t1',
          ),

        complete:
          isTopicComplete(
            'm3t1',
          ),
      },

      m3t2: {
        questionCount:
          getTopicQuestionCount(
            'm3t2',
          ),

        completion:
          getTopicCompletionPercent(
            'm3t2',
          ),

        complete:
          isTopicComplete(
            'm3t2',
          ),
      },

      m3t3: {
        questionCount:
          getTopicQuestionCount(
            'm3t3',
          ),

        completion:
          getTopicCompletionPercent(
            'm3t3',
          ),

        complete:
          isTopicComplete(
            'm3t3',
          ),
      },

    },

    totalQuestions:
      getModuleQuestionCount(
        'm3',
      ),

    complete:
      (
        isTopicComplete(
          'm3t1',
        ) &&

        isTopicComplete(
          'm3t2',
        ) &&

        isTopicComplete(
          'm3t3',
        )
      ),
  }
}


/* =========================================================
 * GET MATEMATIKA STATUS
 * ========================================================= */

export function getMatematikaStatus() {

  return {

    moduleId:
      'matematika',

    title:
      '📐 MATEMATIKA FANI',

    topics: {

      'math-attestation': {

        questionCount:
          getTopicQuestionCount(
            'math-attestation',
          ),

        completion:
          getTopicCompletionPercent(
            'math-attestation',
          ),

        complete:
          isTopicComplete(
            'math-attestation',
          ),

      },

    },

    totalQuestions:
      getModuleQuestionCount(
        'matematika',
      ),

    ready:
      getModuleQuestionCount(
        'matematika',
      ) > 0,

    complete:
      isTopicComplete(
        'math-attestation',
      ),

  }
}


/* =========================================================
 * DEVELOPMENT ASSERTIONS
 * =========================================================
 *
 * Build vaqtida dasturni yiqitmaydi.
 *
 * Faqat ma’lumot holatini tekshirish uchun.
 * ========================================================= */

export function getQuizDataDiagnostics() {

  const health =
    getDataHealth()

  const duplicateIds =
    getDuplicateQuestionIds()

  const invalidQuestions =
    getInvalidQuestions()

  const incompleteTopics =
    health.modules.flatMap(
      (module) =>
        module.topics
          .filter(
            (topic) =>
              !topic.complete,
          )
          .map(
            (topic) => ({

              moduleId:
                module.id,

              topicId:
                topic.id,

              title:
                topic.title,

              easy:
                topic.easy,

              medium:
                topic.medium,

              hard:
                topic.hard,

              case:
                topic.case,

              total:
                topic.total,

              completion:
                topic.completion,

            }),
          ),
    )

  return {

    totalModules:
      TOTAL_MODULES,

    totalTopics:
      TOTAL_TOPICS,

    totalQuestions:
      TOTAL_QUESTIONS,

    completeTopics:
      health.modules.reduce(
        (total, module) =>
          total +
          module.completeTopics,
        0,
      ),

    incompleteTopics,

    duplicateQuestionIds:
      duplicateIds,

    invalidQuestions:
      invalidQuestions.map(
        (question) =>
          question.id,
      ),

    healthy:
      duplicateIds.length === 0 &&
      invalidQuestions.length === 0,
  }
}


/* =========================================================
 * DEFAULT EXPORT
 * =========================================================
 *
 * Qo‘shimcha qulaylik uchun.
 * Named exportlar asosiy hisoblanadi.
 * ========================================================= */

export default CATEGORIES
