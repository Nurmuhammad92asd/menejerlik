/* =========================================================
 * PISA MATHEMATICS — EASY BANK
 * Menejerlik by Nurmuhammad
 *
 * PISA-inspired original assessment items
 * Til: O'zbekcha
 *
 * IMPORTANT:
 * Bu savollar rasmiy OECD/PISA savollarining nusxasi emas.
 * Ular PISA matematik savodxonligi tamoyillaridan
 * ilhomlangan holda original tarzda yaratilgan.
 * ========================================================= */

import type { PISAQuestion } from "../pisa-types"

/* =========================================================
   30 TA BOSHLANG'ICH DARAJADAGI SAVOL
========================================================= */

export const PISA_MATH_EASY: PISAQuestion[] = [
  /* =======================================================
     01 — FOIZ
  ======================================================= */

  {
    id: "pisa-math-easy-001",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Foiz va xarid",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sport sumkasi",
      text:
        "Dilshod 120 000 so'mlik sport sumkasini sotib olmoqchi. " +
        "Do'kon ushbu mahsulotga 10% chegirma bermoqda.",
    },

    question:
      "Chegirmadan keyin Dilshod sumka uchun qancha pul to'laydi?",

    options: [
      {
        id: "a",
        text: "108 000 so'm",
      },
      {
        id: "b",
        text: "110 000 so'm",
      },
      {
        id: "c",
        text: "112 000 so'm",
      },
      {
        id: "d",
        text: "118 000 so'm",
      },
    ],

    correctAnswer: "108 000 so'm",

    explanation:
      "120 000 so'mning 10 foizi 12 000 so'm. " +
      "120 000 − 12 000 = 108 000 so'm.",

    learningObjective:
      "Foizni kundalik xarid vaziyatida qo'llash.",

    skill: "Foizni hisoblash",

    secondarySkills: [
      "Pul bilan ishlash",
      "Natijani talqin qilish",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: [
      "foiz",
      "xarid",
      "moliyaviy-savodxonlik",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     02 — VAQT
  ======================================================= */

  {
    id: "pisa-math-easy-002",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Vaqt",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktabga borish",
      text:
        "Aziza uyidan soat 07:25 da chiqdi. " +
        "U maktabga 35 daqiqada yetib bordi.",
    },

    question:
      "Aziza maktabga soat nechada yetib borgan?",

    options: [
      {
        id: "a",
        text: "07:50",
      },
      {
        id: "b",
        text: "08:00",
      },
      {
        id: "c",
        text: "08:10",
      },
      {
        id: "d",
        text: "08:20",
      },
    ],

    correctAnswer: "08:00",

    explanation:
      "07:25 ga 35 daqiqa qo'shilsa, 08:00 bo'ladi.",

    learningObjective:
      "Vaqt oralig'ini aniqlash.",

    skill: "Vaqt birliklari bilan ishlash",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: [
      "vaqt",
      "jadval",
      "kundalik-hayot",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     03 — JADVAL
  ======================================================= */

  {
    id: "pisa-math-easy-003",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Jadvalni o'qish",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Bir haftada o'qilgan sahifalar",
      text:
        "O'quvchining bir hafta davomida o'qigan sahifalari quyidagi jadvalda berilgan.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "pages",
            label: "Sahifalar",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", 12],
          },
          {
            id: "tue",
            values: ["Seshanba", 18],
          },
          {
            id: "wed",
            values: ["Chorshanba", 15],
          },
          {
            id: "thu",
            values: ["Payshanba", 20],
          },
          {
            id: "fri",
            values: ["Juma", 15],
          },
        ],
      },
    },

    question:
      "Qaysi kuni eng ko'p sahifa o'qilgan?",

    options: [
      {
        id: "a",
        text: "Dushanba",
      },
      {
        id: "b",
        text: "Seshanba",
      },
      {
        id: "c",
        text: "Payshanba",
      },
      {
        id: "d",
        text: "Juma",
      },
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Jadvaldagi eng katta qiymat 20 sahifa. Bu Payshanba kuniga tegishli.",

    learningObjective:
      "Jadvaldagi ma'lumotlarni o'qish va taqqoslash.",

    skill: "Ma'lumotni taqqoslash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "interpret",
    },

    estimatedTimeSeconds: 35,
    xp: 10,
    tags: [
      "jadval",
      "ma'lumot",
      "taqqoslash",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     04 — MASOFA
  ======================================================= */

  {
    id: "pisa-math-easy-004",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Masofa",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Velosiped safari",
      text:
        "Kamol ertalab 4 km, tushdan keyin esa 6 km velosiped haydadi.",
    },

    question:
      "Kamol bir kunda jami qancha masofa bosib o'tgan?",

    options: [
      {
        id: "a",
        text: "8 km",
      },
      {
        id: "b",
        text: "9 km",
      },
      {
        id: "c",
        text: "10 km",
      },
      {
        id: "d",
        text: "12 km",
      },
    ],

    correctAnswer: "10 km",

    explanation:
      "4 km + 6 km = 10 km.",

    learningObjective:
      "Masofalarni birlashtirish.",

    skill: "Miqdorlarni qo'shish",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 30,
    xp: 10,
    tags: [
      "masofa",
      "qo'shish",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     05 — O'RTACHA
  ======================================================= */

  {
    id: "pisa-math-easy-005",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O'rtacha qiymat",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Suv iste'moli",
      text:
        "Bir o'quvchi besh kun davomida 5, 6, 4, 5 va 5 stakan suv ichdi.",
    },

    question:
      "O'quvchining bir kundagi o'rtacha suv iste'moli necha stakan?",

    options: [
      {
        id: "a",
        text: "4 stakan",
      },
      {
        id: "b",
        text: "5 stakan",
      },
      {
        id: "c",
        text: "6 stakan",
      },
      {
        id: "d",
        text: "7 stakan",
      },
    ],

    correctAnswer: "5 stakan",

    explanation:
      "Jami 25 stakan. 25 ÷ 5 = 5 stakan.",

    learningObjective:
      "O'rtacha arifmetik qiymatni hisoblash.",

    skill: "O'rtacha qiymat",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "o'rtacha",
      "statistika",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     06 — NISBAT
  ======================================================= */

  {
    id: "pisa-math-easy-006",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Nisbat",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Mevali ichimlik",
      text:
        "Ichimlik tayyorlash uchun 2 stakan sharbatga 3 stakan suv qo'shiladi.",
    },

    question:
      "Agar 4 stakan sharbat ishlatilsa, xuddi shu nisbatni saqlash uchun qancha suv kerak?",

    options: [
      {
        id: "a",
        text: "4 stakan",
      },
      {
        id: "b",
        text: "5 stakan",
      },
      {
        id: "c",
        text: "6 stakan",
      },
      {
        id: "d",
        text: "8 stakan",
      },
    ],

    correctAnswer: "6 stakan",

    explanation:
      "Sharbat miqdori 2 baravar oshgan. Suv ham 2 baravar oshadi: 3 × 2 = 6 stakan.",

    learningObjective:
      "Nisbatni real vaziyatda qo'llash.",

    skill: "Proporsional fikrlash",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "nisbat",
      "proporsiya",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     07 — YUZA
  ======================================================= */

  {
    id: "pisa-math-easy-007",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Yuza",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Xona",
      text:
        "Xonaning uzunligi 5 metr, eni 4 metr. Xona to'g'ri to'rtburchak shaklida.",
    },

    question:
      "Xonaning yuzi qancha?",

    options: [
      {
        id: "a",
        text: "9 m²",
      },
      {
        id: "b",
        text: "18 m²",
      },
      {
        id: "c",
        text: "20 m²",
      },
      {
        id: "d",
        text: "25 m²",
      },
    ],

    correctAnswer: "20 m²",

    explanation:
      "Yuza = uzunlik × eni. 5 × 4 = 20 m².",

    learningObjective:
      "Yuzani real vaziyatda hisoblash.",

    skill: "To'g'ri to'rtburchak yuzasi",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: [
      "yuza",
      "geometriya",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     08 — HARORAT
  ======================================================= */

  {
    id: "pisa-math-easy-008",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O'zgarish",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Haftalik harorat",
      text:
        "To'rt kun davomida qayd etilgan havo harorati.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "temperature",
            label: "Harorat",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", "18°C"],
          },
          {
            id: "tue",
            values: ["Seshanba", "21°C"],
          },
          {
            id: "wed",
            values: ["Chorshanba", "17°C"],
          },
          {
            id: "thu",
            values: ["Payshanba", "23°C"],
          },
        ],
      },
    },

    question:
      "Dushanbaga nisbatan harorat eng katta miqdorga qaysi kuni oshgan?",

    options: [
      {
        id: "a",
        text: "Seshanba",
      },
      {
        id: "b",
        text: "Chorshanba",
      },
      {
        id: "c",
        text: "Payshanba",
      },
      {
        id: "d",
        text: "Hech qaysi kuni",
      },
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Dushanba 18°C. Payshanba 23°C. Farq 23 − 18 = 5°C.",

    learningObjective:
      "Ikki qiymat orasidagi o'zgarishni aniqlash.",

    skill: "Qiymatlar farqini tahlil qilish",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "interpret",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "harorat",
      "o'zgarish",
      "jadval",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     09 — ENERGIYA
  ======================================================= */

  {
    id: "pisa-math-easy-009",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Energiya sarfi",
    context: "environmental",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Elektr energiyasi sarfi",
      text:
        "Bir haftaning ayrim kunlaridagi elektr energiyasi sarfi.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "energy",
            label: "Sarflangan energiya",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", 8],
          },
          {
            id: "tue",
            values: ["Seshanba", 10],
          },
          {
            id: "wed",
            values: ["Chorshanba", 7],
          },
          {
            id: "thu",
            values: ["Payshanba", 9],
          },
        ],
      },
    },

    question:
      "Chorshanbadagi sarfdan 3 kVt·soat ko'p energiya qaysi kuni sarflangan?",

    options: [
      {
        id: "a",
        text: "Dushanba",
      },
      {
        id: "b",
        text: "Seshanba",
      },
      {
        id: "c",
        text: "Payshanba",
      },
      {
        id: "d",
        text: "Juma",
      },
    ],

    correctAnswer: "Seshanba",

    explanation:
      "Chorshanba kuni 7 kVt·soat sarflangan. 7 + 3 = 10. Jadvalda 10 kVt·soat Seshanba kuni qayd etilgan.",

    learningObjective:
      "Jadvaldagi qiymatlar o'rtasidagi bog'lanishni aniqlash.",

    skill: "Ma'lumotlar orasidagi munosabatni aniqlash",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "interpret",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "energiya",
      "jadval",
      "o'zgarish",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     10 — EHTIMOLLIK
  ======================================================= */

  {
    id: "pisa-math-easy-010",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ehtimollik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Rangli sharlar",
      text:
        "Qutida 3 ta qizil va 2 ta ko'k shar bor. Ko'z yumib bitta shar olinadi.",
    },

    question:
      "Olingan sharning qizil bo'lish ehtimoli qanday?",

    options: [
      {
        id: "a",
        text: "1/5",
      },
      {
        id: "b",
        text: "2/5",
      },
      {
        id: "c",
        text: "3/5",
      },
      {
        id: "d",
        text: "4/5",
      },
    ],

    correctAnswer: "3/5",

    explanation:
      "Jami 5 ta shar bor. Ulardan 3 tasi qizil. Shuning uchun ehtimol 3/5.",

    learningObjective:
      "Oddiy ehtimollikni aniqlash.",

    skill: "Ehtimollikni hisoblash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "ehtimollik",
      "tasodif",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     11 — TEZLIK
  ======================================================= */

  {
    id: "pisa-math-easy-011",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Tezlik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Avtobus safari",
      text:
        "Avtobus 2 soatda 120 km masofa bosib o'tdi. " +
        "Harakat davomida tezlik o'zgarmagan deb hisoblang.",
    },

    question:
      "Avtobusning o'rtacha tezligi qancha bo'lgan?",

    options: [
      {
        id: "a",
        text: "40 km/soat",
      },
      {
        id: "b",
        text: "50 km/soat",
      },
      {
        id: "c",
        text: "60 km/soat",
      },
      {
        id: "d",
        text: "80 km/soat",
      },
    ],

    correctAnswer: "60 km/soat",

    explanation:
      "Tezlik = masofa ÷ vaqt. 120 ÷ 2 = 60 km/soat.",

    learningObjective:
      "Masofa va vaqt orqali tezlikni aniqlash.",

    skill: "Tezlikni hisoblash",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "tezlik",
      "masofa",
      "vaqt",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     12 — MASSHTAB
  ======================================================= */

  {
    id: "pisa-math-easy-012",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Masshtab",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Xarita",
      text:
        "Xaritada 1 sm masofa haqiqiy hayotdagi 2 km masofaga teng.",
    },

    question:
      "Xaritada 5 sm bo'lgan yo'lning haqiqiy uzunligi qancha?",

    options: [
      {
        id: "a",
        text: "5 km",
      },
      {
        id: "b",
        text: "7 km",
      },
      {
        id: "c",
        text: "10 km",
      },
      {
        id: "d",
        text: "12 km",
      },
    ],

    correctAnswer: "10 km",

    explanation:
      "1 sm = 2 km bo'lsa, 5 sm = 5 × 2 = 10 km.",

    learningObjective:
      "Masshtab yordamida haqiqiy masofani aniqlash.",

    skill: "Masshtab bilan ishlash",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "masshtab",
      "xarita",
      "masofa",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     13 — PUL
  ======================================================= */

  {
    id: "pisa-math-easy-013",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Moliyaviy hisob",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Nonushta",
      text:
        "O'quvchida 25 000 so'm bor. U 12 000 so'mlik sendvich " +
        "va 8 000 so'mlik sharbat sotib oldi.",
    },

    question:
      "O'quvchida qancha pul qoladi?",

    options: [
      {
        id: "a",
        text: "3 000 so'm",
      },
      {
        id: "b",
        text: "5 000 so'm",
      },
      {
        id: "c",
        text: "7 000 so'm",
      },
      {
        id: "d",
        text: "9 000 so'm",
      },
    ],

    correctAnswer: "5 000 so'm",

    explanation:
      "Jami xarajat 20 000 so'm. 25 000 − 20 000 = 5 000 so'm.",

    learningObjective:
      "Bir nechta xarajatni hisobga olib qolgan pulni aniqlash.",

    skill: "Moliyaviy hisob-kitob",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: [
      "pul",
      "xarid",
      "moliyaviy-savodxonlik",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     14 — QONUNIYAT
  ======================================================= */

  {
    id: "pisa-math-easy-014",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ketma-ketlik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Qadamlar",
      text:
        "Bir o'quvchi har kuni avvalgi kundagidan 1 000 qadam ko'proq yurmoqda. " +
        "Birinchi kuni u 4 000 qadam yurgan.",
    },

    question:
      "Uchinchi kuni nechta qadam yuradi?",

    options: [
      {
        id: "a",
        text: "5 000",
      },
      {
        id: "b",
        text: "6 000",
      },
      {
        id: "c",
        text: "7 000",
      },
      {
        id: "d",
        text: "8 000",
      },
    ],

    correctAnswer: "6 000",

    explanation:
      "Birinchi kun 4 000, ikkinchi kun 5 000, uchinchi kun 6 000 qadam.",

    learningObjective:
      "Oddiy o'suvchi qonuniyatni aniqlash.",

    skill: "Qonuniyatni aniqlash",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "reason",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "ketma-ketlik",
      "qonuniyat",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     15 — PERIMETR
  ======================================================= */

  {
    id: "pisa-math-easy-015",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Perimetr",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bog'",
      text:
        "To'g'ri to'rtburchak shaklidagi bog'ning uzunligi 8 metr, eni 5 metr.",
    },

    question:
      "Bog'ni bir marta aylanib chiqish uchun qancha masofa yurish kerak?",

    options: [
      {
        id: "a",
        text: "13 metr",
      },
      {
        id: "b",
        text: "20 metr",
      },
      {
        id: "c",
        text: "26 metr",
      },
      {
        id: "d",
        text: "40 metr",
      },
    ],

    correctAnswer: "26 metr",

    explanation:
      "Perimetr = 2 × (8 + 5) = 26 metr.",

    learningObjective:
      "Perimetrni real hayotdagi masofa sifatida talqin qilish.",

    skill: "Perimetrni hisoblash",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 45,
    xp: 10,
    tags: [
      "perimetr",
      "geometriya",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     16 — MA'LUMOT TAQQOSLASH
  ======================================================= */

  {
    id: "pisa-math-easy-016",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ma'lumotlar tahlili",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Kutubxonaga tashrif",
      text:
        "Maktab kutubxonasiga to'rt kun davomida tashrif buyurganlar soni.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "visitors",
            label: "Tashrif buyuruvchilar",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", 30],
          },
          {
            id: "tue",
            values: ["Seshanba", 45],
          },
          {
            id: "wed",
            values: ["Chorshanba", 40],
          },
          {
            id: "thu",
            values: ["Payshanba", 55],
          },
        ],
      },
    },

    question:
      "Qaysi kuni tashrif buyuruvchilar soni Seshanbaga nisbatan 10 nafarga ko'p bo'lgan?",

    options: [
      {
        id: "a",
        text: "Dushanba",
      },
      {
        id: "b",
        text: "Chorshanba",
      },
      {
        id: "c",
        text: "Payshanba",
      },
      {
        id: "d",
        text: "Hech qaysi kuni",
      },
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Seshanba kuni 45 kishi kelgan. 45 + 10 = 55. 55 kishi Payshanba kuni kelgan.",

    learningObjective:
      "Jadvaldagi o'zgarishlarni taqqoslash.",

    skill: "Ma'lumotlar orasidagi farqni aniqlash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "interpret",
    },

    estimatedTimeSeconds: 50,
    xp: 10,
    tags: [
      "jadval",
      "ma'lumot",
      "taqqoslash",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     17 — KASR
  ======================================================= */

  {
    id: "pisa-math-easy-017",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Kasr va ulush",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kitob o'qish",
      text:
        "120 betlik kitobning 1/4 qismi o'qildi.",
    },

    question:
      "Necha bet o'qilgan?",

    options: [
      {
        id: "a",
        text: "20 bet",
      },
      {
        id: "b",
        text: "25 bet",
      },
      {
        id: "c",
        text: "30 bet",
      },
      {
        id: "d",
        text: "40 bet",
      },
    ],

    correctAnswer: "30 bet",

    explanation:
      "120 ÷ 4 = 30. Demak, 30 bet o'qilgan.",

    learningObjective:
      "Kasrni miqdorning ulushi sifatida qo'llash.",

    skill: "Kasr bilan ishlash",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: [
      "kasr",
      "ulush",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     18 — QAROR
  ======================================================= */

  {
    id: "pisa-math-easy-018",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Tanlov va shart",
    context: "digital",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Internet tariflari",
      text:
        "A tarif oyiga 70 000 so'm va 100 GB internet beradi. " +
        "B tarif oyiga 90 000 so'm va 150 GB internet beradi. " +
        "Foydalanuvchiga oyiga kamida 120 GB kerak.",
    },

    question:
      "Qaysi tarif berilgan talabni qanoatlantiradi?",

    options: [
      {
        id: "a",
        text: "Faqat A tarif",
      },
      {
        id: "b",
        text: "Faqat B tarif",
      },
      {
        id: "c",
        text: "Ikkala tarif ham",
      },
      {
        id: "d",
        text: "Hech qaysisi",
      },
    ],

    correctAnswer: "Faqat B tarif",

    explanation:
      "A tarifda 100 GB bor va bu 120 GB talabdan kam. B tarifda 150 GB bor.",

    learningObjective:
      "Berilgan shart asosida mos variantni tanlash.",

    skill: "Shartli qaror qabul qilish",

    mathematics: {
      contentArea: "quantity",
      process: "evaluate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "qaror",
      "shart",
      "raqamli-savodxonlik",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     19 — YAXLITLASH
  ======================================================= */

  {
    id: "pisa-math-easy-019",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Yaxlitlash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sayohat xarajati",
      text:
        "Sayohat uchun 48 700 so'm yo'l xarajati va " +
        "31 600 so'm ovqat xarajati rejalashtirilgan.",
    },

    question:
      "Har bir xarajatni eng yaqin ming so'mgacha yaxlitlasak, jami taxminan qancha bo'ladi?",

    options: [
      {
        id: "a",
        text: "79 000 so'm",
      },
      {
        id: "b",
        text: "80 000 so'm",
      },
      {
        id: "c",
        text: "81 000 so'm",
      },
      {
        id: "d",
        text: "82 000 so'm",
      },
    ],

    correctAnswer: "81 000 so'm",

    explanation:
      "48 700 ≈ 49 000 va 31 600 ≈ 32 000. " +
      "49 000 + 32 000 = 81 000 so'm.",

    learningObjective:
      "Yaxlitlash orqali taxminiy natijani aniqlash.",

    skill: "Taxminiy hisoblash",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "yaxlitlash",
      "taxmin",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     20 — STATISTIK XULOSA
  ======================================================= */

  {
    id: "pisa-math-easy-020",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Ulush va xulosa",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sport to'garagi",
      text:
        "Bir maktabda 40 nafar o'quvchining 30 nafari sport to'garagiga qatnashadi.",
    },

    question:
      "O'quvchilarning qaysi qismi sport to'garagiga qatnashadi?",

    options: [
      {
        id: "a",
        text: "1/2 qismi",
      },
      {
        id: "b",
        text: "3/4 qismi",
      },
      {
        id: "c",
        text: "1/4 qismi",
      },
      {
        id: "d",
        text: "2/3 qismi",
      },
    ],

    correctAnswer: "3/4 qismi",

    explanation:
      "30 ÷ 40 = 3/4. Demak, o'quvchilarning 3/4 qismi sport to'garagiga qatnashadi.",

    learningObjective:
      "Sonli ma'lumotdan ulush chiqarish.",

    skill: "Ma'lumotdan xulosa chiqarish",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "interpret",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "ulush",
      "ma'lumot",
      "statistika",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     21 — CHIZIQLI BOG'LANISH
  ======================================================= */

  {
    id: "pisa-math-easy-021",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Chiziqli bog'lanish",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Velosiped ijarasi",
      text:
        "Velosiped ijarasi uchun boshlang'ich to'lov 10 000 so'm. " +
        "Har bir soat uchun yana 5 000 so'm to'lanadi.",
    },

    question:
      "3 soatlik ijara qancha turadi?",

    options: [
      {
        id: "a",
        text: "15 000 so'm",
      },
      {
        id: "b",
        text: "20 000 so'm",
      },
      {
        id: "c",
        text: "25 000 so'm",
      },
      {
        id: "d",
        text: "30 000 so'm",
      },
    ],

    correctAnswer: "25 000 so'm",

    explanation:
      "3 × 5 000 = 15 000 so'm. Boshlang'ich 10 000 so'm bilan jami 25 000 so'm.",

    learningObjective:
      "Boshlang'ich va o'zgaruvchan xarajatlarni birlashtirish.",

    skill: "Chiziqli bog'lanishni tushunish",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "formulate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "bog'lanish",
      "xarajat",
      "model",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     22 — YUZANI TAQQOSLASH
  ======================================================= */

  {
    id: "pisa-math-easy-022",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Yuzalarni taqqoslash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki gilam",
      text:
        "A gilamning o'lchami 3 m × 4 m. " +
        "B gilamning o'lchami 2 m × 5 m.",
    },

    question:
      "Qaysi gilamning yuzi kattaroq?",

    options: [
      {
        id: "a",
        text: "A gilam",
      },
      {
        id: "b",
        text: "B gilam",
      },
      {
        id: "c",
        text: "Ikkalasining yuzi teng",
      },
      {
        id: "d",
        text: "Aniqlash uchun ma'lumot yetarli emas",
      },
    ],

    correctAnswer: "A gilam",

    explanation:
      "A gilam yuzi 3 × 4 = 12 m². B gilam yuzi 2 × 5 = 10 m². Shuning uchun A gilamning yuzi kattaroq.",

    learningObjective:
      "Ikki geometrik obyektning yuzalarini hisoblab taqqoslash.",

    skill: "Yuzalarni taqqoslash",

    mathematics: {
      contentArea: "space-and-shape",
      process: "evaluate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "yuza",
      "taqqoslash",
      "geometriya",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     23 — TANLANMA
  ======================================================= */

  {
    id: "pisa-math-easy-023",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Tanlanma va xulosa",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktab so'rovi",
      text:
        "Maktabdagi 800 o'quvchidan 20 nafari so'rovda qatnashdi. " +
        "Ularning 18 nafari yangi sport maydonchasi kerakligini aytdi.",
    },

    question:
      "Qaysi xulosa berilgan ma'lumotga eng ehtiyotkorona mos keladi?",

    options: [
      {
        id: "a",
        text: "Barcha 800 o'quvchi sport maydonchasini xohlaydi.",
      },
      {
        id: "b",
        text: "So'rov qatnashchilarining ko'pchiligi sport maydonchasini xohlaydi.",
      },
      {
        id: "c",
        text: "800 o'quvchining faqat 18 nafari sport maydonchasini xohlaydi.",
      },
      {
        id: "d",
        text: "So'rov natijasi butun maktab uchun mutlaq haqiqatdir.",
      },
    ],

    correctAnswer:
      "So'rov qatnashchilarining ko'pchiligi sport maydonchasini xohlaydi.",

    explanation:
      "20 qatnashchidan 18 nafari ijobiy javob bergan. " +
      "Ammo atigi 20 kishi so'ralgani uchun natijani barcha 800 o'quvchiga avtomatik tatbiq etib bo'lmaydi.",

    learningObjective:
      "Tanlanma asosida xulosa chiqarish chegaralarini tushunish.",

    skill: "Statistik xulosani baholash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "evaluate",
    },

    estimatedTimeSeconds: 70,
    xp: 10,
    tags: [
      "tanlanma",
      "so'rov",
      "statistika",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     24 — SHARTLI TANLOV
  ======================================================= */

  {
    id: "pisa-math-easy-024",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Shartli tanlov",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Muzqaymoq",
      text:
        "Do'konda 4 xil muzqaymoq bor: vanilli, shokoladli, " +
        "qulupnayli va limonli. Aziza shokoladli muzqaymoqni yoqtirmaydi.",
    },

    question:
      "Aziza uchun nechta variant qoladi?",

    options: [
      {
        id: "a",
        text: "1 ta",
      },
      {
        id: "b",
        text: "2 ta",
      },
      {
        id: "c",
        text: "3 ta",
      },
      {
        id: "d",
        text: "4 ta",
      },
    ],

    correctAnswer: "3 ta",

    explanation:
      "4 ta variantdan shokoladli variant chiqarib tashlansa, 3 ta variant qoladi.",

    learningObjective:
      "Shart asosida imkoniyatlar sonini aniqlash.",

    skill: "Shartli mantiqiy fikrlash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "reason",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: [
      "tanlov",
      "shart",
      "mantiq",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     25 — O'SISH
  ======================================================= */

  {
    id: "pisa-math-easy-025",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O'sish qonuniyati",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "O'simlik",
      text:
        "O'simlik birinchi haftada 8 sm, ikkinchi haftada 11 sm, " +
        "uchinchi haftada 14 sm bo'ldi.",
    },

    question:
      "Agar shu o'sish tartibi davom etsa, to'rtinchi haftada uning bo'yi qancha bo'lishi kutiladi?",

    options: [
      {
        id: "a",
        text: "15 sm",
      },
      {
        id: "b",
        text: "16 sm",
      },
      {
        id: "c",
        text: "17 sm",
      },
      {
        id: "d",
        text: "18 sm",
      },
    ],

    correctAnswer: "17 sm",

    explanation:
      "Bo'y har hafta 3 sm ga oshmoqda: 8 → 11 → 14. " +
      "Demak, keyingi qiymat 14 + 3 = 17 sm.",

    learningObjective:
      "O'sish qonuniyatini aniqlash.",

    skill: "Qonuniyat va model",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "reason",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "o'sish",
      "qonuniyat",
      "model",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     26 — BIRLIKLAR
  ======================================================= */

  {
    id: "pisa-math-easy-026",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O'lchov birliklari",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Masofa",
      text:
        "Tadqiqotchi 2,5 kilometr masofani o'lchadi.",
    },

    question:
      "Bu masofa necha metrga teng?",

    options: [
      {
        id: "a",
        text: "25 metr",
      },
      {
        id: "b",
        text: "250 metr",
      },
      {
        id: "c",
        text: "2 500 metr",
      },
      {
        id: "d",
        text: "25 000 metr",
      },
    ],

    correctAnswer: "2 500 metr",

    explanation:
      "1 kilometr = 1 000 metr. 2,5 × 1 000 = 2 500 metr.",

    learningObjective:
      "O'lchov birliklarini almashtirish.",

    skill: "Birliklar bilan ishlash",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 40,
    xp: 10,
    tags: [
      "metr",
      "kilometr",
      "o'lchov",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     27 — SAVDO MA'LUMOTLARI
  ======================================================= */

  {
    id: "pisa-math-easy-027",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Savdo ma'lumotlari",
    context: "work",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Kichik kafe savdosi",
      text:
        "Kafeda uch kun davomida sotilgan ichimliklar soni.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "sales",
            label: "Sotilgan ichimliklar",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", 40],
          },
          {
            id: "tue",
            values: ["Seshanba", 55],
          },
          {
            id: "wed",
            values: ["Chorshanba", 50],
          },
        ],
      },
    },

    question:
      "Qaysi kuni sotuv Dushanbaga nisbatan eng ko'p oshgan?",

    options: [
      {
        id: "a",
        text: "Dushanba",
      },
      {
        id: "b",
        text: "Seshanba",
      },
      {
        id: "c",
        text: "Chorshanba",
      },
      {
        id: "d",
        text: "Ikki kun ham bir xil",
      },
    ],

    correctAnswer: "Seshanba",

    explanation:
      "Seshanba kuni o'sish 55 − 40 = 15 ta. " +
      "Chorshanba kuni o'sish 50 − 40 = 10 ta. Demak, eng katta o'sish Seshanbada.",

    learningObjective:
      "Vaqt bo'yicha ma'lumotlar o'zgarishini taqqoslash.",

    skill: "Ma'lumot asosida qaror qilish",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "evaluate",
    },

    estimatedTimeSeconds: 55,
    xp: 10,
    tags: [
      "savdo",
      "ma'lumot",
      "qaror",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     28 — TAXMIN
  ======================================================= */

  {
    id: "pisa-math-easy-028",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Taxminiy hisob",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Savatdagi mahsulotlar",
      text:
        "Do'konda uchta mahsulot narxi 19 800 so'm, " +
        "29 700 so'm va 49 900 so'm.",
    },

    question:
      "Narxlarni eng yaqin ming so'mgacha yaxlitlasak, jami taxminan qancha bo'ladi?",

    options: [
      {
        id: "a",
        text: "90 000 so'm",
      },
      {
        id: "b",
        text: "98 000 so'm",
      },
      {
        id: "c",
        text: "100 000 so'm",
      },
      {
        id: "d",
        text: "110 000 so'm",
      },
    ],

    correctAnswer: "100 000 so'm",

    explanation:
      "19 800 ≈ 20 000, 29 700 ≈ 30 000, 49 900 ≈ 50 000. " +
      "20 000 + 30 000 + 50 000 = 100 000 so'm.",

    learningObjective:
      "Yaxlitlash orqali taxminiy natijani aniqlash.",

    skill: "Taxminiy hisoblash",

    mathematics: {
      contentArea: "quantity",
      process: "evaluate",
    },

    estimatedTimeSeconds: 60,
    xp: 10,
    tags: [
      "taxmin",
      "yaxlitlash",
      "hisoblash",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     29 — O'RTACHA VA DALIL
  ======================================================= */

  {
    id: "pisa-math-easy-029",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "O'rtacha va statistik xulosa",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Suv ichish bo'yicha kuzatuv",
      text:
        "Bir guruh o'quvchining suv ichishi kuzatildi. " +
        "Birinchi guruh kuniga o'rtacha 5 stakan, " +
        "ikkinchi guruh esa o'rtacha 7 stakan suv ichgan.",
    },

    question:
      "Qaysi xulosa berilgan ma'lumotga eng bevosita mos?",

    options: [
      {
        id: "a",
        text: "Ikkinchi guruhning o'rtacha ko'rsatkichi yuqori.",
      },
      {
        id: "b",
        text: "Ikkinchi guruhdagi har bir o'quvchi ko'proq suv ichgan.",
      },
      {
        id: "c",
        text: "Birinchi guruhdagi hech kim 7 stakan suv ichmagan.",
      },
      {
        id: "d",
        text: "Ikki guruhdagi barcha o'quvchilar bir xil miqdorda suv ichgan.",
      },
    ],

    correctAnswer:
      "Ikkinchi guruhning o'rtacha ko'rsatkichi yuqori.",

    explanation:
      "Berilgan ma'lumot faqat guruhlarning o'rtacha qiymatlarini taqqoslashga imkon beradi. " +
      "Har bir o'quvchi haqida alohida xulosa chiqarish mumkin emas.",

    learningObjective:
      "O'rtacha qiymat asosida ehtiyotkor xulosa chiqarish.",

    skill: "Statistik xulosani talqin qilish",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "evaluate",
    },

    estimatedTimeSeconds: 70,
    xp: 10,
    tags: [
      "o'rtacha",
      "statistika",
      "dalil",
    ],
    adaptiveEligible: true,
  },

  /* =======================================================
     30 — KOMPLEKS QAROR
  ======================================================= */

  {
    id: "pisa-math-easy-030",
    version: 1,
    domain: "mathematics",
    difficulty: 1,
    topic: "Moliyaviy qaror",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bir kunlik reja",
      text:
        "Sardorning 50 000 so'mi bor. U tushlikka 18 000 so'm, " +
        "transportga 12 000 so'm sarflaydi. " +
        "U qolgan pulining kamida 15 000 so'mini jamg'armoqchi.",
    },

    question:
      "Sardor 15 000 so'mni jamg'argandan keyin yana qancha pulni erkin ishlatishi mumkin?",

    options: [
      {
        id: "a",
        text: "3 000 so'm",
      },
      {
        id: "b",
        text: "5 000 so'm",
      },
      {
        id: "c",
        text: "7 000 so'm",
      },
      {
        id: "d",
        text: "10 000 so'm",
      },
    ],

    correctAnswer: "5 000 so'm",

    explanation:
      "Avval 50 000 − 18 000 − 12 000 = 20 000 so'm qoladi. " +
      "20 000 − 15 000 = 5 000 so'm.",

    learningObjective:
      "Bir nechta shartni hisobga olib matematik qaror qabul qilish.",

    skill: "Bosqichma-bosqich matematik fikrlash",

    secondarySkills: [
      "Moliyaviy savodxonlik",
      "Shartlarni tekshirish",
      "Qaror qabul qilish",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "reason",
    },

    estimatedTimeSeconds: 75,
    xp: 10,
    tags: [
      "moliyaviy-savodxonlik",
      "qaror",
      "mantiq",
      "hisoblash",
    ],
    adaptiveEligible: true,
  },
]

/* =========================================================
   VALIDATSIYA
========================================================= */

export function validatePISAMathEasyBank(): boolean {
  if (PISA_MATH_EASY.length !== 30) {
    return false
  }

  const ids = new Set<string>()

  for (const question of PISA_MATH_EASY) {
    /* ID takrorlanmasligi kerak */
    if (!question.id || ids.has(question.id)) {
      return false
    }

    ids.add(question.id)

    /* Asosiy maydonlar */
    if (!question.question) {
      return false
    }

    if (!question.explanation) {
      return false
    }

    if (!question.learningObjective) {
      return false
    }

    if (!question.skill) {
      return false
    }

    if (!question.tags?.length) {
      return false
    }

    /* Variantlar */
    if (
      question.type === "single-choice" &&
      (!question.options ||
        question.options.length !== 4)
    ) {
      return false
    }

    /* To'g'ri javob variantlarda mavjudligini tekshirish */
    if (
      question.type === "single-choice" &&
      question.options
    ) {
      const correctAnswer =
        String(question.correctAnswer)

      const exists = question.options.some(
        (option) =>
          option.text === correctAnswer
      )

      if (!exists) {
        return false
      }
    }

    /* Matematika metama'lumotlari */
    if (
      question.domain === "mathematics" &&
      !question.mathematics
    ) {
      return false
    }

    /* Vaqt */
    if (
      question.estimatedTimeSeconds <= 0
    ) {
      return false
    }

    /* XP */
    if (question.xp <= 0) {
      return false
    }
  }

  return true
}

/* =========================================================
   STATISTIKA
========================================================= */

export const PISA_MATH_EASY_STATS = {
  total: PISA_MATH_EASY.length,

  quantity:
    PISA_MATH_EASY.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "quantity"
    ).length,

  changeAndRelationships:
    PISA_MATH_EASY.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "change-and-relationships"
    ).length,

  spaceAndShape:
    PISA_MATH_EASY.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "space-and-shape"
    ).length,

  uncertaintyAndData:
    PISA_MATH_EASY.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "uncertainty-and-data"
    ).length,

  adaptive:
    PISA_MATH_EASY.filter(
      (q) => q.adaptiveEligible
    ).length,
}

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default PISA_MATH_EASY
