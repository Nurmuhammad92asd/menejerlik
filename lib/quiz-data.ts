import { M1T1_LEVELS } from './data/m1t1'
import { M1T2_LEVELS } from './data/m1t2'
import { M1T3_LEVELS } from './data/m1t3'
import { M1T4_LEVELS } from './data/m1t4'
import { M1T5_LEVELS } from './data/m1t5'
import { M1T6_LEVELS } from './data/m1t6'

/*
 * =========================================================
 * TYPES
 * =========================================================
 */

export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}

export type TopicMaterials = {
  text?: string
  audioUrl?: string
  pdfUrl?: string
}

export type Topic = {
  id: string
  title: string
  description: string
  materials?: TopicMaterials
  levels: {
    easy: Question[]
    medium: Question[]
    hard: Question[]
    case: Question[]
  }
}

export type Category = {
  id: string
  title: string
  description: string
  topics: Topic[]
}

/*
 * =========================================================
 * EMPTY LEVELS
 * =========================================================
 */

const EMPTY_LEVELS: Topic['levels'] = {
  easy: [],
  medium: [],
  hard: [],
  case: [],
}

/*
 * =========================================================
 * 1-MODUL
 * =========================================================
 */

const MODULE_1: Category = {
  id: 'm1',

  title: '1-MODUL. Umumiy ta’lim muassasasini boshqarish',

  description:
    'Ta’lim muassasasini samarali boshqarish, strategik menejment, boshqaruv psixologiyasi, korrupsiyaviy xavflar, boshqaruv qarorlari va maktab imijini boshqarish.',

  topics: [
    {
      id: 'm1t1',

      title: 'Umumiy ta’lim muassasasini boshqarish',

      description:
        'Umumiy o‘rta ta’lim muassasasini boshqarish, boshqaruv tamoyillari, attestatsiya, akkreditatsiya va TALIS.',

      levels: M1T1_LEVELS,
    },

    {
      id: 'm1t2',

      title: '🔥 TEST — STRATEGIK MENEJMENT 🔥',

      description:
        'Strategik menejment, strategik rejalashtirish, maqsadlar va ta’lim muassasasini rivojlantirish.',

      levels: M1T2_LEVELS,
    },

    {
      id: 'm1t3',

      title: 'Boshqaruv psixologiyasi',

      description:
        'Rahbarning emotsional intellekti, muloqot madaniyati, temperament, stressni boshqarish, nizolarni hal qilish va jamoani samarali boshqarish psixologiyasi.',

      levels: M1T3_LEVELS,
    },

    {
      id: 'm1t4',

      title: 'Korrupsiyaviy xavf-xatarlarni oldini olish',

      description:
        'Ta’lim muassasasida korrupsiyaviy xavflarni aniqlash va oldini olish mexanizmlari.',

      levels: M1T4_LEVELS,
    },

    {
      id: 'm1t5',

      title: 'Boshqaruv qarorlari',

      description:
        'Boshqaruv qarorlarini qabul qilish, amalga oshirish, nazorat qilish, baholash va tuzatishlar kiritish.',

      levels: M1T5_LEVELS,
    },

    {
      id: 'm1t6',

      title: 'Maktab imijini shakllantirish',

      description:
        'Maktab imiji, ichki va tashqi imij, PR faoliyati, raqamli imij, axborot siyosati va jamoatchilik bilan aloqalarni samarali boshqarish.',

      levels: M1T6_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 2-MODUL
 * =========================================================
 */

const MODULE_2: Category = {
  id: 'm2',

  title: '2-MODUL. Ta’lim muassasasini rivojlantirish',

  description:
    'Ta’lim sifati, o‘quvchi natijalari, kasbga yo‘naltirish va bola farovonligini boshqarish.',

  topics: [
    {
      id: 'm2t1',

      title: 'Ta’lim sifatini boshqarish',

      description:
        'Ta’lim sifatini monitoring qilish, tahlil qilish va rivojlantirish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm2t2',

      title: 'O‘quvchilarning ta’lim dasturlarini o‘zlashtirishi',

      description:
        'O‘quvchilarning bilim va ko‘nikmalarini tahlil qilish hamda natijalarni yaxshilash.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm2t3',

      title: 'O‘quvchilarni kasbga yo‘naltirish va kasb tanlash',

      description:
        'O‘quvchilarning qiziqish va qobiliyatlarini hisobga olgan holda kasbga yo‘naltirish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm2t4',

      title: 'Ta’lim sifatini baholash',

      description:
        'Ta’lim natijalarini baholash va baholash ma’lumotlaridan boshqaruvda foydalanish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm2t5',

      title: 'Bola xavfsizligi va farovonligini ta’minlash',

      description:
        'Maktab muhitida o‘quvchilarning xavfsizligi, himoyasi va farovonligini ta’minlash.',

      levels: EMPTY_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 3-MODUL
 * =========================================================
 */

const MODULE_3: Category = {
  id: 'm3',

  title:
    '3-MODUL. Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',

  description:
    'Zamonaviy rahbarning kasbiy, shaxsiy va boshqaruv kompetensiyalarini rivojlantirish.',

  topics: [
    {
      id: 'm3t1',

      title:
        'Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',

      description:
        'Zamonaviy rahbar uchun zarur bo‘lgan boshqaruv kompetensiyalari.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm3t2',

      title:
        'Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish',

      description:
        'Vaqt, resurs, jamoa va shaxsiy samaradorlikni boshqarish.',

      levels: EMPTY_LEVELS,
    },

    {
      id: 'm3t3',

      title:
        'Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish',

      description:
        'Pedagoglarning kasbiy rivojlanishi va faoliyat samaradorligini qo‘llab-quvvatlash.',

      levels: EMPTY_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 4-MODUL
 * =========================================================
 */

const MODULE_4: Category = {
  id: 'm4',

  title: '4-MODUL. Inson resurslarini boshqarish',

  description:
    'Maktabda inson resurslarini samarali boshqarish va mehnat munosabatlarini tashkil etish.',

  topics: [
    {
      id: 'm4t1',

      title: 'Inson resurslarini boshqarish strategiyasi',

      description:
        'Kadrlarni rejalashtirish, rivojlantirish va samarali boshqarish.',

      levels: EMPTY_LEVELS,
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

      title: 'Inson resurslari faoliyatini baholash',

      description:
        'Xodimlar faoliyatini mezonlar asosida baholash va rivojlantirish.',

      levels: EMPTY_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 5-MODUL
 * =========================================================
 */

const MODULE_5: Category = {
  id: 'm5',

  title: '5-MODUL. Ish yuritish va hisobot',

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

/*
 * =========================================================
 * 6-MODUL
 * =========================================================
 */

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

      title: 'Boshqaruv va media savodxonlik',

      description:
        'Axborot bilan ishlash, media muhit va kommunikatsiya kompetensiyalarini rivojlantirish.',

      levels: EMPTY_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 7-MODUL
 * =========================================================
 */

const MODULE_7: Category = {
  id: 'm7',

  title: '7-MODUL. Boshqaruvda raqamli kompetentlik',

  description:
    'Raqamli vositalar va sun’iy intellektdan boshqaruvda samarali foydalanish.',

  topics: [
    {
      id: 'm7t1',

      title: 'Boshqaruvda raqamli kompetentlik',

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

/*
 * =========================================================
 * 8-MODUL
 * =========================================================
 */

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

/*
 * =========================================================
 * 9-MODUL
 * =========================================================
 */

const MODULE_9: Category = {
  id: 'm9',

  title: '9-MODUL. Inklyuziv ta’limni tashkil etish',

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

      title: 'Gospital ta’lim',

      description:
        'Davolanish jarayonidagi bolalar uchun ta’limni tashkil etish.',

      levels: EMPTY_LEVELS,
    },
  ],
}

/*
 * =========================================================
 * 10-MODUL
 * =========================================================
 */

const MODULE_10: Category = {
  id: 'm10',

  title: '10-MODUL. Moliyaviy munosabatlar',

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

/*
 * =========================================================
 * BARCHA MODULLAR
 * =========================================================
 */

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
]

/*
 * =========================================================
 * BOG‘CHA
 * =========================================================
 */

export const PRESCHOOL_CATEGORIES: Category[] = []

/*
 * =========================================================
 * HELPERS
 * =========================================================
 */

type LevelKey =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'case'

const LEVEL_KEYS: LevelKey[] = [
  'easy',
  'medium',
  'hard',
  'case',
]

function allTopicQuestions(
  topic: Topic,
): Question[] {
  return LEVEL_KEYS.flatMap(
    (level) => topic.levels[level],
  )
}

/*
 * =========================================================
 * GET MODULE
 * =========================================================
 */

export function getModuleById(
  moduleId: string,
): Category | undefined {
  return CATEGORIES.find(
    (module) => module.id === moduleId,
  )
}

/*
 * =========================================================
 * GET TOPIC
 * =========================================================
 */

export function getTopicById(
  topicId: string,
): Topic | undefined {
  for (const module of CATEGORIES) {
    const topic = module.topics.find(
      (item) => item.id === topicId,
    )

    if (topic) {
      return topic
    }
  }

  return undefined
}

/*
 * =========================================================
 * GET TOPIC QUESTIONS
 * =========================================================
 */

export function getTopicQuestions(
  topicId: string,
): Question[] {
  const topic = getTopicById(topicId)

  return topic
    ? allTopicQuestions(topic)
    : []
}

/*
 * =========================================================
 * GET LEVEL QUESTIONS
 * =========================================================
 */

export function getLevelQuestions(
  topicId: string,
  level: LevelKey,
): Question[] {
  const topic = getTopicById(topicId)

  return topic
    ? topic.levels[level]
    : []
}

/*
 * =========================================================
 * GET MODULE QUESTIONS
 * =========================================================
 */

export function getModuleQuestions(
  moduleId: string,
): Question[] {
  const module = getModuleById(moduleId)

  return module
    ? module.topics.flatMap(
        allTopicQuestions,
      )
    : []
}

/*
 * =========================================================
 * STATISTICS
 * =========================================================
 */

export const TOTAL_MODULES =
  CATEGORIES.length

export const TOTAL_TOPICS =
  CATEGORIES.reduce(
    (total, module) =>
      total + module.topics.length,
    0,
  )

export const TOTAL_QUESTIONS =
  CATEGORIES.reduce(
    (total, module) =>
      total +
      module.topics.reduce(
        (topicTotal, topic) =>
          topicTotal +
          allTopicQuestions(topic).length,
        0,
      ),
    0,
  )

/*
 * =========================================================
 * MIXED TEST
 * =========================================================
 */

export const MIXED_ID = 'aralash'

export const MIXED_COUNT = 30

export const MIXED_QUESTIONS: Question[] =
  CATEGORIES.flatMap((module) =>
    module.topics.flatMap(
      allTopicQuestions,
    ),
  )
