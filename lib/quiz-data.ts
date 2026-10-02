// ============================================================
// MENEJERLIK BY NURMUHAMMAD
// Professional educational data structure
// 10 MODULES / 34 TOPICS / TEST SYSTEM
// ============================================================

// ============================================================
// QUESTION
// ============================================================

export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}

// ============================================================
// TOPIC
// ============================================================

export type Topic = {
  id: string
  title: string
  description: string
  questions: Question[]
}

// ============================================================
// MODULE
// ============================================================

export type Category = {
  id: string
  title: string
  description: string
  topics: Topic[]
  questions: Question[]
}

// ============================================================
// MODULE 1
// UMUMIY TA'LIM MUASSASASINI BOSHQARISH
// ============================================================

const MODUL_1_TOPICS: Topic[] = [
  {
    id: 'm1t1',
    title: "Umumiy ta'lim muassasasini boshqarish",
    description:
      "Umumiy ta'lim muassasasini boshqarishning mazmuni, tamoyillari va asosiy funksiyalari.",
    questions: [],
  },

  {
    id: 'm1t2',
    title: 'Strategik menejment',
    description:
      "Strategik rejalashtirish, maqsad belgilash, rivojlanish strategiyasi va natijalarni boshqarish.",
    questions: [],
  },

  {
    id: 'm1t3',
    title: 'Boshqaruv psixologiyasi',
    description:
      "Rahbar psixologiyasi, jamoa bilan munosabat, motivatsiya va kommunikatsiya.",
    questions: [],
  },

  {
    id: 'm1t4',
    title: 'Korrupsiyaviy xavf-xatarlarni oldini olish',
    description:
      "Korrupsiyaviy xavflarni aniqlash, baholash, oldini olish va boshqarish.",
    questions: [],
  },

  {
    id: 'm1t5',
    title: 'Boshqaruv qarorlari',
    description:
      "Muammoni aniqlash, muqobil variantlarni baholash va samarali boshqaruv qarorlarini qabul qilish.",
    questions: [],
  },

  {
    id: 'm1t6',
    title: 'Maktab imijini shakllantirish',
    description:
      "Maktabning ijobiy imiji, kommunikatsiya, PR va jamoatchilik bilan aloqalarni rivojlantirish.",
    questions: [],
  },
]

// ============================================================
// MODULE 2
// TA'LIM MUASSASASINI RIVOJLANTIRISH
// ============================================================

const MODUL_2_TOPICS: Topic[] = [
  {
    id: 'm2t1',
    title: "Ta'lim sifatini boshqarish",
    description:
      "Ta'lim sifatini monitoring qilish, tahlil qilish va takomillashtirish.",
    questions: [],
  },

  {
    id: 'm2t2',
    title: "O'quvchilarning ta'lim dasturlarini o'zlashtirishi",
    description:
      "O'quvchilarning bilim, ko'nikma va kompetensiyalarini rivojlantirish hamda o'zlashtirishini monitoring qilish.",
    questions: [],
  },

  {
    id: 'm2t3',
    title: "O'quvchilarni kasbga yo'naltirish va kasb tanlash",
    description:
      "O'quvchilarning qiziqishlari, qobiliyatlari va kelajak kasbini tanlashiga ko'maklashish.",
    questions: [],
  },

  {
    id: 'm2t4',
    title: "Ta'lim sifatini baholash",
    description:
      "Ta'lim natijalarini baholash mezonlari, indikatorlar va tahlil usullari.",
    questions: [],
  },

  {
    id: 'm2t5',
    title: "Bola xavfsizligi va farovonligini ta'minlash",
    description:
      "Ta'lim muhitida bolalar xavfsizligi, huquqlari va farovonligini ta'minlash.",
    questions: [],
  },
]

// ============================================================
// MODULE 3
// ZAMONAVIY RAHBAR XUSUSIYATLARI VA BOSHQARUV KOMPETENTLIGI
// ============================================================

const MODUL_3_TOPICS: Topic[] = [
  {
    id: 'm3t1',
    title: 'Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',
    description:
      "Zamonaviy rahbarning kasbiy, boshqaruv va shaxsiy kompetensiyalari.",
    questions: [],
  },

  {
    id: 'm3t2',
    title: "Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish",
    description:
      "Vaqtni boshqarish, ustuvorliklarni belgilash, delegatsiya va shaxsiy samaradorlik.",
    questions: [],
  },

  {
    id: 'm3t3',
    title: "Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish",
    description:
      "Pedagoglarning kasbiy rivojlanishi, motivatsiyasi va faoliyat samaradorligini oshirish.",
    questions: [],
  },
]

// ============================================================
// MODULE 4
// INSON RESURSLARINI BOSHQARISH
// ============================================================

const MODUL_4_TOPICS: Topic[] = [
  {
    id: 'm4t1',
    title: 'Inson resurslarini boshqarish strategiyasi',
    description:
      "Inson resurslarini rejalashtirish, rivojlantirish va boshqarish strategiyasi.",
    questions: [],
  },

  {
    id: 'm4t2',
    title: "Ta'lim muassasalarida mehnat munosabatlari va mehnat qonunchiligi",
    description:
      "Mehnat munosabatlari, xodim va ish beruvchi huquq hamda majburiyatlari.",
    questions: [],
  },

  {
    id: 'm4t3',
    title: "Umumiy o'rta ta'lim tizimida kadrlarga oid hujjatlarning yuritilishi",
    description:
      "Kadrlar bilan bog'liq hujjatlarni to'g'ri va tizimli yuritish.",
    questions: [],
  },

  {
    id: 'm4t4',
    title: "Inson resurslari faoliyatini baholash",
    description:
      "Xodimlar faoliyatini baholash mezonlari, indikatorlar va natijadorlik.",
    questions: [],
  },
]

// ============================================================
// MODULE 5
// ISH YURITISH VA HISOBOT
// ============================================================

const MODUL_5_TOPICS: Topic[] = [
  {
    id: 'm5t1',
    title: 'Boshqaruv normativ-huquqiy hujjatlar bilan ishlash',
    description:
      "Normativ-huquqiy hujjatlarni izlash, o'rganish, tahlil qilish va amaliyotga tatbiq etish.",
    questions: [],
  },

  {
    id: 'm5t2',
    title: "Maktablarda ish yuritish hujjatlari bilan ishlash va hisobdorlik",
    description:
      "Maktab hujjatlarini yuritish, saqlash, hisobdorlik va nazorat jarayonlari.",
    questions: [],
  },
]

// ============================================================
// MODULE 6
// JAMOATCHILIK VA OTA-ONALAR BILAN ISHLASH
// ============================================================

const MODUL_6_TOPICS: Topic[] = [
  {
    id: 'm6t1',
    title: "Maktabning ota-onalar va jamoatchilik bilan hamkorligi",
    description:
      "Ota-onalar, mahalla va jamoatchilik bilan samarali hamkorlik tizimini tashkil etish.",
    questions: [],
  },

  {
    id: 'm6t2',
    title: "Maktabning davlat va jamoat tashkilotlari bilan hamkorligi",
    description:
      "Davlat va jamoat tashkilotlari bilan hamkorlikning samarali mexanizmlari.",
    questions: [],
  },

  {
    id: 'm6t3',
    title: 'Boshqaruv va media savodxonlik',
    description:
      "Axborotni tahlil qilish, media xavfsizligi va rahbarning kommunikatsion savodxonligi.",
    questions: [],
  },
]

// ============================================================
// MODULE 7
// BOSHQARUVDA RAQAMLI KOMPETENTLIK
// ============================================================

const MODUL_7_TOPICS: Topic[] = [
  {
    id: 'm7t1',
    title: 'Boshqaruvda raqamli kompetentlik',
    description:
      "Raqamli texnologiyalardan boshqaruv, monitoring va tahlilda foydalanish.",
    questions: [],
  },

  {
    id: "m7t2",
    title: "Sun'iy intellekt tizimlaridan foydalanish",
    description:
      "Sun'iy intellekt vositalaridan ta'lim va boshqaruv jarayonlarida samarali va mas'uliyatli foydalanish.",
    questions: [],
  },
]

// ============================================================
// MODULE 8
// TA'LIMDA LIDERLIK VA O'ZGARISHLARNI BOSHQARISH
// ============================================================

const MODUL_8_TOPICS: Topic[] = [
  {
    id: 'm8t1',
    title: "O'zgarish sharoitida qiyinchiliklarni boshqarish",
    description:
      "O'zgarishlar jarayonida yuzaga keladigan qarshilik, muammo va qiyinchiliklarni boshqarish.",
    questions: [],
  },

  {
    id: 'm8t2',
    title: "Jamoada sog'lom muhitni tashkil etish va ahil jamoani shakllantirish",
    description:
      "Jamoada sog'lom psixologik muhit, ishonch, hamkorlik va ahillikni rivojlantirish.",
    questions: [],
  },

  {
    id: 'm8t3',
    title: "Ta'lim muassasasida risk va xavf-xatarlarni boshqarish",
    description:
      "Ta'lim muassasasidagi xavflarni aniqlash, baholash, oldini olish va boshqarish.",
    questions: [],
  },
]

// ============================================================
// MODULE 9
// INKLYUZIV TA'LIMNI TASHKIL ETISH
// ============================================================

const MODUL_9_TOPICS: Topic[] = [
  {
    id: 'm9t1',
    title: "Inklyuziv ta'limning mazmun-mohiyati va ahamiyati",
    description:
      "Inklyuziv ta'limning mazmuni, asosiy tamoyillari va ta'limdagi ahamiyati.",
    questions: [],
  },

  {
    id: 'm9t2',
    title: "Inklyuziv ta'limni tashkil etish mexanizmi",
    description:
      "Inklyuziv ta'limni tashkil etish, qo'llab-quvvatlash va individual yondashuv mexanizmlari.",
    questions: [],
  },

  {
    id: 'm9t3',
    title: 'Gospital ta’lim',
    description:
      "Davolanish jarayonidagi bolalarning ta'lim olish imkoniyatlarini tashkil etish.",
    questions: [],
  },
]

// ============================================================
// MODULE 10
// MOLIYAVIY MUNOSABATLAR
// ============================================================

const MODUL_10_TOPICS: Topic[] = [
  {
    id: 'm10t1',
    title: "Ta'lim muassasasining moliyaviy faoliyatini tashkil etish",
    description:
      "Maktab moliyaviy faoliyatini rejalashtirish, tashkil etish va nazorat qilish.",
    questions: [],
  },

  {
    id: 'm10t2',
    title: "Xodimlar mehnatiga haq to'lash va tarifikatsiyalarini me'yor asosida tuzish amaliyoti",
    description:
      "Xodimlar mehnatiga haq to'lash va tarifikatsiya jarayonlarini me'yoriy asosda tashkil etish.",
    questions: [],
  },

  {
    id: 'm10t3',
    title: "Budjetdan tashqari mablag'larni topish va samarali tasarruf etish",
    description:
      "Budjetdan tashqari mablag'larni jalb qilish, rejalashtirish va samarali foydalanish.",
    questions: [],
  },

  {
    id: 'm10t4',
    title: "Umumiy o'rta ta'lim maktablarida ta'lim xizmatlari",
    description:
      "Umumiy o'rta ta'lim maktablarida ta'lim xizmatlarini tashkil etish va rivojlantirish.",
    questions: [],
  },
]

// ============================================================
// ALL MODULES
// ============================================================

export const CATEGORIES: Category[] = [
  {
    id: 'modul1',
    title: '1-MODUL. Umumiy ta’lim muassasasini boshqarish',
    description:
      'Maktab boshqaruvi, strategik menejment, boshqaruv psixologiyasi va qarorlar.',
    topics: MODUL_1_TOPICS,
    questions: MODUL_1_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul2',
    title: '2-MODUL. Ta’lim muassasasini rivojlantirish',
    description:
      'Ta’lim sifati, o‘quvchilar rivoji, kasbga yo‘naltirish va bola xavfsizligi.',
    topics: MODUL_2_TOPICS,
    questions: MODUL_2_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul3',
    title:
      '3-MODUL. Zamonaviy rahbar xususiyatlari va boshqaruv kompetentligi',
    description:
      'Zamonaviy rahbar kompetensiyalari, shaxsiy samaradorlik va pedagoglarni rivojlantirish.',
    topics: MODUL_3_TOPICS,
    questions: MODUL_3_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul4',
    title: '4-MODUL. Inson resurslarini boshqarish',
    description:
      'Inson resurslari, mehnat munosabatlari, kadrlar hujjatlari va xodimlar faoliyatini baholash.',
    topics: MODUL_4_TOPICS,
    questions: MODUL_4_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul5',
    title: '5-MODUL. Ish yuritish va hisobot',
    description:
      'Normativ-huquqiy hujjatlar, ish yuritish va hisobdorlik.',
    topics: MODUL_5_TOPICS,
    questions: MODUL_5_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul6',
    title: '6-MODUL. Jamoatchilik va ota-onalar bilan ishlash',
    description:
      'Ota-onalar, jamoatchilik, davlat tashkilotlari va media bilan hamkorlik.',
    topics: MODUL_6_TOPICS,
    questions: MODUL_6_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul7',
    title: '7-MODUL. Boshqaruvda raqamli kompetentlik',
    description:
      'Raqamli kompetentlik va sun’iy intellekt tizimlaridan foydalanish.',
    topics: MODUL_7_TOPICS,
    questions: MODUL_7_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul8',
    title:
      '8-MODUL. Ta’limda liderlik va o‘zgarishlarni boshqarish',
    description:
      'O‘zgarishlarni boshqarish, jamoa muhiti va xavf-xatarlarni boshqarish.',
    topics: MODUL_8_TOPICS,
    questions: MODUL_8_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul9',
    title: '9-MODUL. Inklyuziv ta’limni tashkil etish',
    description:
      'Inklyuziv va gospital ta’limni tashkil etish.',
    topics: MODUL_9_TOPICS,
    questions: MODUL_9_TOPICS.flatMap((topic) => topic.questions),
  },

  {
    id: 'modul10',
    title: '10-MODUL. Moliyaviy munosabatlar',
    description:
      'Ta’lim muassasasining moliyaviy faoliyati va ta’lim xizmatlari.',
    topics: MODUL_10_TOPICS,
    questions: MODUL_10_TOPICS.flatMap((topic) => topic.questions),
  },
]

// ============================================================
// MIXED / ATTESTATION QUESTIONS
// ============================================================

export const MIXED_QUESTIONS: Question[] = [
  {
    id: 'mix1',
    text: 'Jamoada sog‘lom madaniy-ma’naviy muhitni mustahkamlovchi rahbarlik omillarini aniqlang.',
    options: [
      'A, B, D',
      'B, C, D',
      'A, B, E',
      'Faqat qat’iy buyruqbozlik',
    ],
    answer: 0,
    explanation:
      'Rahbarning shaxsiy namunasi, adolatli qarorlar va sog‘lom munosabatlar jamoa muhitini mustahkamlaydi.',
  },

  {
    id: 'mix2',
    text: 'Maktabda yangi yondashuv joriy etildi, lekin u bir martalik tadbir sifatida ko‘rildi va natija barqarorlashmadi. Qaysi tahlil aniqroq?',
    options: [
      'O‘zgarish innovatsiya sifatida olinib, resurs tabiati yetarli ushlanmagan',
      'O‘zgarish tashabbus sifatida olinib, motivatsiya tabiati yetarli ushlanmagan',
      'O‘zgarish munosabat sifatida olinib, boshqaruv tabiati yetarli ushlanmagan',
      'O‘zgarish hodisa sifatida olinib, jarayon tabiati yetarli ushlanmagan',
    ],
    answer: 3,
    explanation:
      'Barqaror natija uchun o‘zgarish bir martalik hodisa emas, balki uzluksiz jarayon sifatida boshqarilishi kerak.',
  },

  {
    id: 'mix3',
    text: 'Kadrlar hujjatlari tizimliligini ta’minlash uchun qaysi harakatlar eng to‘g‘ri?',
    options: [
      'Mehnat va shaxsiy tarkib hujjatlarini tizimli qayd etish',
      'Faqat og‘zaki kelishuvlardan foydalanish',
      'Hujjatlarni tartibsiz saqlash',
      'Faqat rahbar xotirasiga tayanish',
    ],
    answer: 0,
    explanation:
      'Kadrlar hujjatlarini tizimli yuritish va saqlash boshqaruvning muhim qismidir.',
  },

  {
    id: 'mix4',
    text: 'Rahbar turli variantlarni ko‘rib chiqib bittasini tanladi va uni amalga oshirish harakatlar ketma-ketligini belgiladi. Bu nima?',
    options: [
      'Boshqaruv jarayoni',
      'Tashkiliy faoliyat',
      'Boshqaruv qarori',
      'Strategik rejalash',
    ],
    answer: 2,
    explanation:
      'Muqobil variantlardan birini tanlash va uni amalga oshirish yo‘lini belgilash boshqaruv qaroridir.',
  },

  {
    id: 'mix5',
    text: 'Maktabda nizolar deyarli barcha bo‘limlarda ishonchsizlik, qo‘pollik va mas’uliyatni boshqalarga yuklash ko‘rinishida namoyon bo‘lmoqda. Qaysi xulosa aniqroq?',
    options: [
      'Salbiy muhit kengayganda, u keyinchalik shaxsga qaratilgan bosimga ulanib ketishi mumkin',
      'Bu faqat kasbiy intizom pasayganini bildiradi',
      'Bu faqat kommunikativ faollik susayganini bildiradi',
      'Bu faqat tashkiliy nazorat sustligini bildiradi',
    ],
    answer: 0,
    explanation:
      'Keng tarqalgan salbiy muhit keyinchalik ayrim shaxslarga qaratilgan bosim va nosog‘lom munosabatlarga olib kelishi mumkin.',
  },

  {
    id: 'mix6',
    text: 'Sun’iy intellekt vositalaridan boshqaruvda foydalanishda qaysi yondashuvlar maqbul?',
    options: [
      'Natijani tekshirmasdan qabul qilish',
      'Aniq topshiriq berish, faktlarni tekshirish va maxfiylikni ta’minlash',
      'Barcha qarorlarni SIga topshirish',
      'Maxfiy ma’lumotlarni ochiq tizimlarga kiritish',
    ],
    answer: 1,
    explanation:
      'SI vositalaridan foydalanishda natijani tekshirish, aniq topshiriq berish va maxfiy ma’lumotlarni himoya qilish muhim.',
  },

  {
    id: 'mix7',
    text: 'Voyaga yetmagan xodimlarning mehnat huquqlarida qanday kafolatlar mavjud?',
    options: [
      'Faqat ish haqi bo‘yicha kafolat',
      'Mehnat sharoitlari va ta’til bo‘yicha alohida kafolatlar',
      'Hech qanday alohida kafolat mavjud emas',
      'Faqat ishga qabul qilish bo‘yicha kafolat',
    ],
    answer: 1,
    explanation:
      'Voyaga yetmagan xodimlar uchun mehnat qonunchiligida alohida kafolatlar nazarda tutiladi.',
  },

  {
    id: 'mix8',
    text: 'Maktabda indikatorlar mavjud, lekin ular faqat hisobot uchun ishlatiladi va qarorlar indikatorlarga tayanmaydi. Muammo nimada?',
    options: [
      'Indikatorlar noto‘g‘ri tuzilgan',
      'Resurslar yetarli emas',
      'Monitoring tizimining formalligi',
      'Dars sifati past',
    ],
    answer: 2,
    explanation:
      'Indikatorlar qaror qabul qilishga xizmat qilmasa, monitoring formallashib qoladi.',
  },

  {
    id: 'mix9',
    text: 'Sog‘lom ish muhiti va ahil jamoa uchun direktorning qaysi choralari mos?',
    options: [
      'Ochiq muloqot, adolatli munosabat va yangi xodimlarni moslashtirish',
      'Faqat jazolash',
      'Faqat qattiq nazorat',
      'Muammolarni yashirish',
    ],
    answer: 0,
    explanation:
      'Ochiq muloqot, adolatli munosabat va moslashtirish sog‘lom jamoa muhitini qo‘llab-quvvatlaydi.',
  },

  {
    id: 'mix10',
    text: '“Tizimlilik” tamoyilining amaliy mazmuni nimada?',
    options: [
      'Muammoni faqat shaxsiy xato sifatida ko‘rish',
      'Muammoni jarayon va boshqaruv mexanizmlari bilan birgalikda tahlil qilish',
      'Har qanday vaziyatda favqulodda rejimga o‘tish',
      'Faqat tezkor yechimlarni qo‘llash',
    ],
    answer: 1,
    explanation:
      'Tizimli yondashuv muammoning sabablarini jarayon va boshqaruv mexanizmlari darajasida ko‘rib chiqadi.',
  },
]

// ============================================================
// STATISTICS
// ============================================================

export const TOTAL_MODULES = CATEGORIES.length

export const TOTAL_TOPICS = CATEGORIES.reduce(
  (sum, category) => sum + category.topics.length,
  0
)

export const TOTAL_QUESTIONS = CATEGORIES.reduce(
  (sum, category) => sum + category.questions.length,
  0
)

export const TOTAL_MIXED_QUESTIONS = MIXED_QUESTIONS.length

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getModuleById(moduleId: string): Category | undefined {
  return CATEGORIES.find((module) => module.id === moduleId)
}

export function getTopicById(topicId: string): Topic | undefined {
  for (const module of CATEGORIES) {
    const topic = module.topics.find((item) => item.id === topicId)

    if (topic) {
      return topic
    }
  }

  return undefined
}

export function getModuleQuestions(moduleId: string): Question[] {
  const module = getModuleById(moduleId)

  if (!module) {
    return []
  }

  return module.topics.flatMap((topic) => topic.questions)
}

export function getTopicQuestions(topicId: string): Question[] {
  const topic = getTopicById(topicId)

  if (!topic) {
    return []
  }

  return topic.questions
}
