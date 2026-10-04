/* =========================================================
 * PISA MATHEMATICS — MEDIUM BANK
 * Menejerlik by Nurmuhammad
 *
 * PISA-inspired original assessment items
 * Til: O'zbekcha
 *
 * Daraja:
 * 2–4
 *
 * Fokus:
 * - real hayotiy vaziyatlar
 * - jadval va grafik tahlili
 * - ko'p bosqichli hisob
 * - foiz va nisbat
 * - matematik modellashtirish
 * - dalil asosida qaror
 * - statistik fikrlash
 * ========================================================= */

import type { PISAQuestion } from "../pisa-types"

export const PISA_MATH_MEDIUM: PISAQuestion[] = [

  /* =======================================================
     01 — FOIZLI CHEGIRMA
  ======================================================= */

  {
    id: "pisa-math-medium-001",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Foizli chegirma",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Noutbuk xaridi",
      text:
        "Do'konda noutbukning narxi 4 000 000 so'm. " +
        "Aksiya vaqtida narx 15% ga kamaytirildi.",
    },

    question:
      "Chegirmadan keyingi narx qancha bo'ladi?",

    options: [
      {
        id: "a",
        text: "3 200 000 so'm",
      },
      {
        id: "b",
        text: "3 400 000 so'm",
      },
      {
        id: "c",
        text: "3 600 000 so'm",
      },
      {
        id: "d",
        text: "3 850 000 so'm",
      },
    ],

    correctAnswer: "3 400 000 so'm",

    explanation:
      "4 000 000 ning 15 foizi 600 000 so'm. " +
      "4 000 000 − 600 000 = 3 400 000 so'm.",

    learningObjective:
      "Foizli chegirmani real xarid vaziyatida qo'llash.",

    skill: "Foizli hisoblash",

    secondarySkills: [
      "Moliyaviy savodxonlik",
      "Natijani talqin qilish",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 60,
    xp: 15,
    tags: [
      "foiz",
      "chegirma",
      "xarid",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     02 — IKKI BOSQICHLI CHEGIRMA
  ======================================================= */

  {
    id: "pisa-math-medium-002",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Ketma-ket foizlar",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki bosqichli aksiya",
      text:
        "Telefonning dastlabki narxi 5 000 000 so'm. " +
        "Avval 10% chegirma berildi. Keyin chegirmadagi narxga " +
        "yana 5% chegirma berildi.",
    },

    question:
      "Ikki chegirmadan keyin telefonning narxi qancha bo'ladi?",

    options: [
      {
        id: "a",
        text: "4 250 000 so'm",
      },
      {
        id: "b",
        text: "4 275 000 so'm",
      },
      {
        id: "c",
        text: "4 300 000 so'm",
      },
      {
        id: "d",
        text: "4 500 000 so'm",
      },
    ],

    correctAnswer: "4 275 000 so'm",

    explanation:
      "Birinchi chegirmadan keyin 5 000 000 × 0,90 = 4 500 000. " +
      "Ikkinchi chegirma: 4 500 000 × 0,95 = 4 275 000 so'm. " +
      "Chegirmalar oddiygina 15% sifatida emas, ketma-ket qo'llanadi.",

    learningObjective:
      "Ketma-ket foizli o'zgarishlarni farqlash.",

    skill: "Foizli o'zgarishlar",

    secondarySkills: [
      "Ketma-ket hisoblash",
      "Moliyaviy fikrlash",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "reason",
    },

    estimatedTimeSeconds: 80,
    xp: 20,
    tags: [
      "foiz",
      "ketma-ket-chegirma",
      "moliyaviy-savodxonlik",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     03 — JADVALDAN O'RTACHA
  ======================================================= */

  {
    id: "pisa-math-medium-003",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "O'rtacha qiymat",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "O'quvchining kunlik o'qish vaqti",
      text:
        "Bir o'quvchi besh kun davomida kitob o'qishga sarflagan vaqt.",
      data: {
        columns: [
          {
            id: "day",
            label: "Kun",
          },
          {
            id: "minutes",
            label: "Daqiqa",
          },
        ],
        rows: [
          {
            id: "mon",
            values: ["Dushanba", 25],
          },
          {
            id: "tue",
            values: ["Seshanba", 35],
          },
          {
            id: "wed",
            values: ["Chorshanba", 30],
          },
          {
            id: "thu",
            values: ["Payshanba", 40],
          },
          {
            id: "fri",
            values: ["Juma", 50],
          },
        ],
      },
    },

    question:
      "O'quvchi bir kunda o'rtacha necha daqiqa kitob o'qigan?",

    options: [
      {
        id: "a",
        text: "34 daqiqa",
      },
      {
        id: "b",
        text: "36 daqiqa",
      },
      {
        id: "c",
        text: "38 daqiqa",
      },
      {
        id: "d",
        text: "40 daqiqa",
      },
    ],

    correctAnswer: "36 daqiqa",

    explanation:
      "Jami vaqt 25 + 35 + 30 + 40 + 50 = 180 daqiqa. " +
      "180 ÷ 5 = 36 daqiqa.",

    learningObjective:
      "Jadvaldagi ma'lumotlardan o'rtacha qiymatni hisoblash.",

    skill: "O'rtacha qiymat",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 15,
    tags: [
      "jadval",
      "o'rtacha",
      "statistika",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     04 — MEDIANAGA KIRISH
  ======================================================= */

  {
    id: "pisa-math-medium-004",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Median",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Test natijalari",
      text:
        "7 nafar o'quvchining ballari quyidagicha: " +
        "12, 15, 16, 18, 19, 22, 30.",
    },

    question:
      "Ushbu natijalarning medianasi nechaga teng?",

    options: [
      {
        id: "a",
        text: "16",
      },
      {
        id: "b",
        text: "18",
      },
      {
        id: "c",
        text: "19",
      },
      {
        id: "d",
        text: "22",
      },
    ],

    correctAnswer: "18",

    explanation:
      "7 ta qiymat bor. Tartiblangan ro'yxatdagi o'rtadagi, ya'ni 4-qiymat medianadir. U 18 ga teng.",

    learningObjective:
      "Medianani ma'lumotlar qatoridan aniqlash.",

    skill: "Medianani aniqlash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "interpret",
    },

    estimatedTimeSeconds: 60,
    xp: 20,
    tags: [
      "mediana",
      "statistika",
      "test-natijalari",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     05 — NISBAT
  ======================================================= */

  {
    id: "pisa-math-medium-005",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Nisbat",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sinf tarkibi",
      text:
        "Sinfda o'g'il bolalar va qizlar sonining nisbati 3:2. " +
        "Sinfda jami 25 nafar o'quvchi bor.",
    },

    question:
      "Sinfda nechta o'g'il bola bor?",

    options: [
      {
        id: "a",
        text: "10",
      },
      {
        id: "b",
        text: "12",
      },
      {
        id: "c",
        text: "15",
      },
      {
        id: "d",
        text: "18",
      },
    ],

    correctAnswer: "15",

    explanation:
      "Nisbatdagi jami ulushlar 3 + 2 = 5. " +
      "25 ÷ 5 = 5. O'g'il bolalar 3 ulush: 3 × 5 = 15.",

    learningObjective:
      "Nisbatni real vaziyatda qo'llash.",

    skill: "Nisbat orqali noma'lum miqdorni topish",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 15,
    tags: [
      "nisbat",
      "sinf",
      "proporsiya",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     06 — TEZLIK VA VAQT
  ======================================================= */

  {
    id: "pisa-math-medium-006",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Tezlik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Poyezd safari",
      text:
        "Poyezd 180 km masofani 2 soat 15 daqiqada bosib o'tdi.",
    },

    question:
      "Poyezdning o'rtacha tezligi taxminan qancha?",

    options: [
      {
        id: "a",
        text: "70 km/soat",
      },
      {
        id: "b",
        text: "80 km/soat",
      },
      {
        id: "c",
        text: "90 km/soat",
      },
      {
        id: "d",
        text: "100 km/soat",
      },
    ],

    correctAnswer: "80 km/soat",

    explanation:
      "2 soat 15 daqiqa = 2,25 soat. " +
      "180 ÷ 2,25 = 80 km/soat.",

    learningObjective:
      "Aralash vaqt birliklari bilan tezlikni hisoblash.",

    skill: "Tezlik va vaqt munosabati",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "employ",
    },

    estimatedTimeSeconds: 75,
    xp: 20,
    tags: [
      "tezlik",
      "vaqt",
      "masofa",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     07 — GRAFIK MA'NOSI
  ======================================================= */

  {
    id: "pisa-math-medium-007",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "Grafikni talqin qilish",
    context: "environmental",
    type: "single-choice",

    stimulus: {
      type: "chart",
      title: "Bir haftalik suv sarfi",
      data: {
        type: "bar",
        title: "Suv sarfi",
        xLabel: "Kun",
        yLabel: "Litr",
        points: [
          {
            label: "Du",
            value: 120,
          },
          {
            label: "Se",
            value: 150,
          },
          {
            label: "Cho",
            value: 130,
          },
          {
            label: "Pa",
            value: 170,
          },
          {
            label: "Ju",
            value: 160,
          },
        ],
      },
    },

    question:
      "Qaysi kuni suv sarfi eng yuqori bo'lgan?",

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
        text: "Juma",
      },
    ],

    correctAnswer: "Payshanba",

    explanation:
      "Grafikdagi eng katta qiymat 170 litr bo'lib, u Payshanba kuniga tegishli.",

    learningObjective:
      "Ustunli grafikdagi eng katta qiymatni aniqlash.",

    skill: "Grafikni o'qish",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "interpret",
    },

    estimatedTimeSeconds: 45,
    xp: 15,
    tags: [
      "grafik",
      "suv",
      "ekologiya",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     08 — GRAFIKDAN FARQ
  ======================================================= */

  {
    id: "pisa-math-medium-008",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Grafikdan o'zgarishni aniqlash",
    context: "environmental",
    type: "single-choice",

    stimulus: {
      type: "chart",
      title: "Elektr energiyasi sarfi",
      data: {
        type: "line",
        title: "Haftalik sarf",
        xLabel: "Kun",
        yLabel: "kVt·soat",
        points: [
          {
            label: "Du",
            value: 20,
          },
          {
            label: "Se",
            value: 24,
          },
          {
            label: "Cho",
            value: 22,
          },
          {
            label: "Pa",
            value: 28,
          },
          {
            label: "Ju",
            value: 25,
          },
        ],
      },
    },

    question:
      "Dushanbadan Payshanbagacha elektr energiyasi sarfi necha foizga oshgan?",

    options: [
      {
        id: "a",
        text: "20%",
      },
      {
        id: "b",
        text: "30%",
      },
      {
        id: "c",
        text: "40%",
      },
      {
        id: "d",
        text: "50%",
      },
    ],

    correctAnswer: "40%",

    explanation:
      "O'sish 28 − 20 = 8 kVt·soat. " +
      "8 ÷ 20 × 100% = 40%.",

    learningObjective:
      "Grafikdagi o'zgarishni foiz sifatida ifodalash.",

    skill: "Foizli o'sishni aniqlash",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "interpret",
    },

    estimatedTimeSeconds: 75,
    xp: 20,
    tags: [
      "grafik",
      "foiz",
      "o'zgarish",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     09 — YUZA VA PLITKA
  ======================================================= */

  {
    id: "pisa-math-medium-009",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Yuza",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Polni ta'mirlash",
      text:
        "Xonaning uzunligi 6 m, eni 4 m. " +
        "Polga 1 m × 1 m o'lchamdagi kvadrat plitkalar yotqiziladi. " +
        "Plitkalarni kesish talab qilinmaydi.",
    },

    question:
      "Polni to'liq qoplash uchun nechta plitka kerak?",

    options: [
      {
        id: "a",
        text: "10 ta",
      },
      {
        id: "b",
        text: "20 ta",
      },
      {
        id: "c",
        text: "24 ta",
      },
      {
        id: "d",
        text: "30 ta",
      },
    ],

    correctAnswer: "24 ta",

    explanation:
      "Xona yuzi 6 × 4 = 24 m². Har bir plitka 1 m². Demak, 24 ta plitka kerak.",

    learningObjective:
      "Yuza tushunchasini real qurilish vaziyatida qo'llash.",

    skill: "Yuza va birlik",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 20,
    tags: [
      "yuza",
      "plitka",
      "geometriya",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     10 — PERIMETR VA NOMA'LUM TOMON
  ======================================================= */

  {
    id: "pisa-math-medium-010",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Perimetr",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bog' chegarasi",
      text:
        "To'g'ri to'rtburchak bog'ning perimetri 54 metr. " +
        "Uning uzunligi 16 metr.",
    },

    question:
      "Bog'ning eni necha metr?",

    options: [
      {
        id: "a",
        text: "9 metr",
      },
      {
        id: "b",
        text: "10 metr",
      },
      {
        id: "c",
        text: "11 metr",
      },
      {
        id: "d",
        text: "12 metr",
      },
    ],

    correctAnswer: "11 metr",

    explanation:
      "54 = 2 × (16 + eni). Demak, 27 = 16 + eni. " +
      "Eni = 11 metr.",

    learningObjective:
      "Perimetr va noma'lum tomon orasidagi bog'lanishni aniqlash.",

    skill: "Geometrik model tuzish",

    mathematics: {
      contentArea: "space-and-shape",
      process: "formulate",
    },

    estimatedTimeSeconds: 70,
    xp: 20,
    tags: [
      "perimetr",
      "noma'lum",
      "geometriya",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     11 — PROPORSIYA
  ======================================================= */

  {
    id: "pisa-math-medium-011",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Proporsiya",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Retsept",
      text:
        "4 kishilik taom uchun 300 gramm guruch kerak. " +
        "Retseptdagi nisbat o'zgarmaydi.",
    },

    question:
      "10 kishilik taom uchun qancha guruch kerak?",

    options: [
      {
        id: "a",
        text: "600 gramm",
      },
      {
        id: "b",
        text: "650 gramm",
      },
      {
        id: "c",
        text: "750 gramm",
      },
      {
        id: "d",
        text: "900 gramm",
      },
    ],

    correctAnswer: "750 gramm",

    explanation:
      "Bir kishiga 300 ÷ 4 = 75 gramm. " +
      "10 kishi uchun 75 × 10 = 750 gramm.",

    learningObjective:
      "Proporsional bog'lanishni kundalik vaziyatda qo'llash.",

    skill: "Proporsiya",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 70,
    xp: 20,
    tags: [
      "proporsiya",
      "retsept",
      "nisbat",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     12 — VALYUTA EMAS, BIRLIK
  ======================================================= */

  {
    id: "pisa-math-medium-012",
    version: 1,
    domain: "mathematics",
    difficulty: 2,
    topic: "O'lchov birliklari",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Laboratoriya",
      text:
        "Laboratoriyada 2,4 litr suyuqlik bor. " +
        "Undan 650 millilitr tajriba uchun ishlatildi.",
    },

    question:
      "Idishda qancha suyuqlik qoldi?",

    options: [
      {
        id: "a",
        text: "1,65 litr",
      },
      {
        id: "b",
        text: "1,75 litr",
      },
      {
        id: "c",
        text: "1,85 litr",
      },
      {
        id: "d",
        text: "2,05 litr",
      },
    ],

    correctAnswer: "1,75 litr",

    explanation:
      "2,4 litr = 2400 ml. 2400 − 650 = 1750 ml = 1,75 litr.",

    learningObjective:
      "Turli hajm birliklarini birlashtirib hisoblash.",

    skill: "Birliklarni almashtirish",

    mathematics: {
      contentArea: "quantity",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 15,
    tags: [
      "litr",
      "millilitr",
      "o'lchov",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     13 — EHTIMOLLIK
  ======================================================= */

  {
    id: "pisa-math-medium-013",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Ehtimollik",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Rangli kartochkalar",
      text:
        "Qutida 5 ta qizil, 3 ta ko'k va 2 ta yashil kartochka bor. " +
        "Tasodifiy ravishda bitta kartochka olinadi.",
    },

    question:
      "Ko'k yoki yashil kartochka chiqish ehtimoli qanday?",

    options: [
      {
        id: "a",
        text: "1/5",
      },
      {
        id: "b",
        text: "1/2",
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

    correctAnswer: "1/2",

    explanation:
      "Jami 10 ta kartochka bor. Ko'k yoki yashil kartochkalar 3 + 2 = 5 ta. " +
      "5/10 = 1/2.",

    learningObjective:
      "Bir nechta qulay natijani birlashtirib ehtimollikni aniqlash.",

    skill: "Ehtimollik",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 20,
    tags: [
      "ehtimollik",
      "kartochka",
      "tasodif",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     14 — O'RTACHA VA YANGI QIYMAT
  ======================================================= */

  {
    id: "pisa-math-medium-014",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "O'rtacha qiymat",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Yangi test natijasi",
      text:
        "4 ta test natijasining o'rtachasi 72 ball edi. " +
        "Beshinchi test natijasi qo'shilgach, beshta testning o'rtachasi 76 ball bo'ldi.",
    },

    question:
      "Beshinchi testda nechta ball olingan?",

    options: [
      {
        id: "a",
        text: "88 ball",
      },
      {
        id: "b",
        text: "90 ball",
      },
      {
        id: "c",
        text: "92 ball",
      },
      {
        id: "d",
        text: "96 ball",
      },
    ],

    correctAnswer: "92 ball",

    explanation:
      "Dastlabki 4 test jami 4 × 72 = 288 ball. " +
      "5 testning jami 5 × 76 = 380 ball. " +
      "Beshinchi test = 380 − 288 = 92 ball.",

    learningObjective:
      "O'rtacha qiymatdan noma'lum natijani aniqlash.",

    skill: "O'rtacha qiymat bilan teskari hisob",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "reason",
    },

    estimatedTimeSeconds: 85,
    xp: 25,
    tags: [
      "o'rtacha",
      "noma'lum",
      "test",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     15 — TANLANMA ISHONCHLILIGI
  ======================================================= */

  {
    id: "pisa-math-medium-015",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Tanlanma",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktab so'rovi",
      text:
        "Maktabda 1 000 nafar o'quvchi bor. " +
        "Direktor yangi oshxona menyusi haqida fikr bilish uchun " +
        "faqat maktab futbol jamoasidagi 20 o'quvchini so'rovdan o'tkazdi.",
    },

    question:
      "Nima sababdan bu so'rov natijasini barcha o'quvchilarga umumlashtirish ehtiyotkorlikni talab qiladi?",

    options: [
      {
        id: "a",
        text: "Tanlanma juda kichik va faqat bitta guruhdan olingan.",
      },
      {
        id: "b",
        text: "Futbol jamoasida o'quvchilar bo'lmaydi.",
      },
      {
        id: "c",
        text: "1 000 soni 20 dan kichik.",
      },
      {
        id: "d",
        text: "Oshxona menyusini o'quvchilar baholay olmaydi.",
      },
    ],

    correctAnswer:
      "Tanlanma juda kichik va faqat bitta guruhdan olingan.",

    explanation:
      "Futbol jamoasi barcha o'quvchilarni ifodalamasligi mumkin. " +
      "Shuning uchun tanlanma vakilliligi muhim.",

    learningObjective:
      "Tanlanmaning vakilliligi haqida statistik fikrlash.",

    skill: "Tanlanmani baholash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "evaluate",
    },

    estimatedTimeSeconds: 75,
    xp: 20,
    tags: [
      "tanlanma",
      "statistika",
      "so'rov",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     16 — CHIZIQLI MODEL
  ======================================================= */

  {
    id: "pisa-math-medium-016",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Matematik model",
    context: "work",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Yetkazib berish xizmati",
      text:
        "Yetkazib berish xizmati buyurtma uchun 15 000 so'm " +
        "boshlang'ich to'lov oladi. Har bir kilometr uchun 4 000 so'm qo'shiladi.",
    },

    question:
      "7 km masofaga buyurtma yetkazish qancha turadi?",

    options: [
      {
        id: "a",
        text: "28 000 so'm",
      },
      {
        id: "b",
        text: "39 000 so'm",
      },
      {
        id: "c",
        text: "43 000 so'm",
      },
      {
        id: "d",
        text: "49 000 so'm",
      },
    ],

    correctAnswer: "43 000 so'm",

    explanation:
      "7 km × 4 000 = 28 000 so'm. " +
      "Boshlang'ich 15 000 so'm bilan jami 43 000 so'm.",

    learningObjective:
      "Boshlang'ich qiymat va birlik narxidan model tuzish.",

    skill: "Chiziqli matematik model",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "formulate",
    },

    estimatedTimeSeconds: 70,
    xp: 20,
    tags: [
      "model",
      "yetkazib-berish",
      "xarajat",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     17 — QAYSI TARIF MAQBUL?
  ======================================================= */

  {
    id: "pisa-math-medium-017",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Tariflarni taqqoslash",
    context: "digital",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki internet tarifi",
      text:
        "A tarif: oyiga 50 000 so'm + har bir qo'shimcha GB uchun 5 000 so'm.\n" +
        "B tarif: oyiga 80 000 so'm va 10 GB bepul.\n" +
        "Foydalanuvchi bir oyda 16 GB internet ishlatadi.",
    },

    question:
      "16 GB ishlatadigan foydalanuvchi uchun qaysi tarif arzonroq?",

    options: [
      {
        id: "a",
        text: "A tarif, chunki u 80 000 so'mdan arzon.",
      },
      {
        id: "b",
        text: "B tarif, chunki uning jami narxi 80 000 so'm.",
      },
      {
        id: "c",
        text: "Ikkalasi bir xil, chunki 16 GB bir xil.",
      },
      {
        id: "d",
        text: "Aniqlab bo'lmaydi.",
      },
    ],

    correctAnswer:
      "B tarif, chunki uning jami narxi 80 000 so'm.",

    explanation:
      "A tarifda 10 GB dan keyingi 6 GB uchun 30 000 so'm qo'shiladi: " +
      "50 000 + 30 000 = 80 000. B tarif ham 80 000 so'm. " +
      "Demak, berilgan foydalanish hajmida ular teng narxda.",

    learningObjective:
      "Tariflarni foydalanish hajmiga qarab taqqoslash.",

    skill: "Model va qaror",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "evaluate",
    },

    estimatedTimeSeconds: 90,
    xp: 25,
    tags: [
      "internet",
      "tarif",
      "model",
      "qaror",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     18 — MASSHTAB
  ======================================================= */

  {
    id: "pisa-math-medium-018",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Masshtab",
    context: "societal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Shahar xaritasi",
      text:
        "Xaritaning masshtabi 1 : 50 000. " +
        "Xaritada ikki nuqta orasidagi masofa 6 sm.",
    },

    question:
      "Haqiqiy masofa qancha?",

    options: [
      {
        id: "a",
        text: "300 m",
      },
      {
        id: "b",
        text: "3 km",
      },
      {
        id: "c",
        text: "30 km",
      },
      {
        id: "d",
        text: "300 km",
      },
    ],

    correctAnswer: "3 km",

    explanation:
      "1 sm xaritada 50 000 sm haqiqiy masofaga teng. " +
      "6 × 50 000 = 300 000 sm = 3 km.",

    learningObjective:
      "Masshtab orqali haqiqiy masofani hisoblash.",

    skill: "Masshtab va birliklar",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 80,
    xp: 25,
    tags: [
      "masshtab",
      "xarita",
      "masofa",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     19 — AYLANA
  ======================================================= */

  {
    id: "pisa-math-medium-019",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Aylana",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Dumaloq stol",
      text:
        "Dumaloq stolning radiusi 0,5 metr. " +
        "π ni 3,14 deb oling.",
    },

    question:
      "Stol yuzasi taxminan qancha?",

    options: [
      {
        id: "a",
        text: "0,785 m²",
      },
      {
        id: "b",
        text: "1,57 m²",
      },
      {
        id: "c",
        text: "3,14 m²",
      },
      {
        id: "d",
        text: "6,28 m²",
      },
    ],

    correctAnswer: "0,785 m²",

    explanation:
      "Aylana yuzi πr². 3,14 × 0,5² = 3,14 × 0,25 = 0,785 m².",

    learningObjective:
      "Aylana yuzasi formulasini real vaziyatda qo'llash.",

    skill: "Aylana yuzasi",

    mathematics: {
      contentArea: "space-and-shape",
      process: "employ",
    },

    estimatedTimeSeconds: 70,
    xp: 20,
    tags: [
      "aylana",
      "yuza",
      "radius",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     20 — GEOMETRIK QOPLAMA
  ======================================================= */

  {
    id: "pisa-math-medium-020",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Geometrik rejalashtirish",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktab hovlisi",
      text:
        "To'g'ri to'rtburchak hovlining uzunligi 12 m, eni 8 m. " +
        "Hovlining o'rtasida 4 m × 3 m o'lchamdagi gulzor bor. " +
        "Faqat gulzordan tashqari qismga qoplama yotqiziladi.",
    },

    question:
      "Qancha kvadrat metr maydonga qoplama kerak?",

    options: [
      {
        id: "a",
        text: "72 m²",
      },
      {
        id: "b",
        text: "84 m²",
      },
      {
        id: "c",
        text: "96 m²",
      },
      {
        id: "d",
        text: "108 m²",
      },
    ],

    correctAnswer: "84 m²",

    explanation:
      "Hovli yuzi 12 × 8 = 96 m². Gulzor yuzi 4 × 3 = 12 m². " +
      "Qoplama maydoni 96 − 12 = 84 m².",

    learningObjective:
      "Murakkabroq yuza masalasida qismlarni ajratish.",

    skill: "Yuzalarni birlashtirish va ayirish",

    mathematics: {
      contentArea: "space-and-shape",
      process: "reason",
    },

    estimatedTimeSeconds: 85,
    xp: 25,
    tags: [
      "yuza",
      "hovli",
      "rejalashtirish",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     21 — O'RTACHA O'ZGARISH
  ======================================================= */

  {
    id: "pisa-math-medium-021",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "O'zgarish tezligi",
    context: "scientific",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "O'simlik balandligi",
      text:
        "Tajriba davomida o'simlikning balandligi o'lchandi.",
      data: {
        columns: [
          {
            id: "week",
            label: "Hafta",
          },
          {
            id: "height",
            label: "Balandlik",
          },
        ],
        rows: [
          {
            id: "w1",
            values: ["1-hafta", "8 sm"],
          },
          {
            id: "w2",
            values: ["2-hafta", "11 sm"],
          },
          {
            id: "w3",
            values: ["3-hafta", "15 sm"],
          },
          {
            id: "w4",
            values: ["4-hafta", "20 sm"],
          },
        ],
      },
    },

    question:
      "1-haftadan 4-haftagacha o'simlik o'rtacha haftasiga necha santimetrga o'sgan?",

    options: [
      {
        id: "a",
        text: "3 sm",
      },
      {
        id: "b",
        text: "4 sm",
      },
      {
        id: "c",
        text: "5 sm",
      },
      {
        id: "d",
        text: "6 sm",
      },
    ],

    correctAnswer: "4 sm",

    explanation:
      "Umumiy o'sish 20 − 8 = 12 sm. " +
      "1-haftadan 4-haftagacha 3 ta vaqt oralig'i bor. " +
      "12 ÷ 3 = 4 sm.",

    learningObjective:
      "Vaqt oralig'idagi o'rtacha o'zgarishni hisoblash.",

    skill: "O'rtacha o'zgarish",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "interpret",
    },

    estimatedTimeSeconds: 80,
    xp: 25,
    tags: [
      "o'sish",
      "jadval",
      "o'rtacha-o'zgarish",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     22 — EHTIMOLLIKNI TAQQOSLASH
  ======================================================= */

  {
    id: "pisa-math-medium-022",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Ehtimollikni taqqoslash",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Ikki quti",
      text:
        "A qutida 4 ta qizil va 6 ta ko'k shar bor.\n" +
        "B qutida 3 ta qizil va 2 ta ko'k shar bor.\n" +
        "Har bir qutidan bittadan shar tanlanadi.",
    },

    question:
      "Qaysi qutidan qizil shar olish ehtimoli yuqoriroq?",

    options: [
      {
        id: "a",
        text: "A qutidan",
      },
      {
        id: "b",
        text: "B qutidan",
      },
      {
        id: "c",
        text: "Ikkalasida teng",
      },
      {
        id: "d",
        text: "Aniqlab bo'lmaydi",
      },
    ],

    correctAnswer: "B qutidan",

    explanation:
      "A qutida qizil shar ehtimoli 4/10 = 40%. " +
      "B qutida 3/5 = 60%. Shuning uchun B qutida ehtimol yuqori.",

    learningObjective:
      "Turli tarkibli to'plamlardagi ehtimolliklarni taqqoslash.",

    skill: "Ehtimolliklarni taqqoslash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "evaluate",
    },

    estimatedTimeSeconds: 75,
    xp: 25,
    tags: [
      "ehtimollik",
      "taqqoslash",
      "nisbat",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     23 — FOIZLI O'SISH
  ======================================================= */

  {
    id: "pisa-math-medium-023",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Foizli o'sish",
    context: "work",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Kichik biznes",
      text:
        "Kichik do'kon bir oyda 800 ta mahsulot sotdi. " +
        "Keyingi oy sotuv 12,5% ga oshdi.",
    },

    question:
      "Keyingi oy taxminan nechta mahsulot sotilgan?",

    options: [
      {
        id: "a",
        text: "880 ta",
      },
      {
        id: "b",
        text: "900 ta",
      },
      {
        id: "c",
        text: "920 ta",
      },
      {
        id: "d",
        text: "950 ta",
      },
    ],

    correctAnswer: "900 ta",

    explanation:
      "800 ning 12,5 foizi 100 ga teng. " +
      "800 + 100 = 900 ta.",

    learningObjective:
      "Foizli o'sishni miqdoriy natijaga aylantirish.",

    skill: "Foizli o'zgarish",

    mathematics: {
      contentArea: "change-and-relationships",
      process: "employ",
    },

    estimatedTimeSeconds: 65,
    xp: 20,
    tags: [
      "foiz",
      "sotuv",
      "o'sish",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     24 — NARX O'ZGARISHI
  ======================================================= */

  {
    id: "pisa-math-medium-024",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Teskari foiz",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Chegirmadan oldingi narx",
      text:
        "Bir mahsulot 20% chegirmadan keyin 240 000 so'm bo'ldi.",
    },

    question:
      "Mahsulotning chegirmadan oldingi narxi qancha edi?",

    options: [
      {
        id: "a",
        text: "280 000 so'm",
      },
      {
        id: "b",
        text: "300 000 so'm",
      },
      {
        id: "c",
        text: "320 000 so'm",
      },
      {
        id: "d",
        text: "360 000 so'm",
      },
    ],

    correctAnswer: "300 000 so'm",

    explanation:
      "20% chegirmadan keyin mahsulot asl narxining 80 foiziga teng. " +
      "240 000 ÷ 0,8 = 300 000 so'm.",

    learningObjective:
      "Berilgan yakuniy narxdan dastlabki narxni aniqlash.",

    skill: "Teskari foiz",

    mathematics: {
      contentArea: "quantity",
      process: "reason",
    },

    estimatedTimeSeconds: 85,
    xp: 25,
    tags: [
      "foiz",
      "teskari-hisob",
      "narx",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     25 — GRAFIKDAN XULOSA
  ======================================================= */

  {
    id: "pisa-math-medium-025",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Grafik va xulosa",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "chart",
      title: "Imtihon natijalari",
      data: {
        type: "bar",
        title: "Sinf bo'yicha o'rtacha ball",
        xLabel: "Sinf",
        yLabel: "Ball",
        points: [
          {
            label: "A",
            value: 68,
          },
          {
            label: "B",
            value: 74,
          },
          {
            label: "C",
            value: 71,
          },
          {
            label: "D",
            value: 80,
          },
        ],
      },
    },

    question:
      "D sinfning o'rtacha natijasi A sinfga nisbatan necha foizga yuqori? " +
      "Natijani eng yaqin butun foizgacha yaxlitlang.",

    options: [
      {
        id: "a",
        text: "12%",
      },
      {
        id: "b",
        text: "15%",
      },
      {
        id: "c",
        text: "18%",
      },
      {
        id: "d",
        text: "20%",
      },
    ],

    correctAnswer: "18%",

    explanation:
      "Farq 80 − 68 = 12. " +
      "12 ÷ 68 × 100 ≈ 17,65%. Eng yaqin butun foiz 18%.",

    learningObjective:
      "Grafikdagi ikki qiymatni foiz orqali taqqoslash.",

    skill: "Grafik va foizli taqqoslash",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "evaluate",
    },

    estimatedTimeSeconds: 85,
    xp: 25,
    tags: [
      "grafik",
      "foiz",
      "taqqoslash",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     26 — ARALASH GEOMETRIYA
  ======================================================= */

  {
    id: "pisa-math-medium-026",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Geometrik shakllar",
    context: "personal",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Bog' dizayni",
      text:
        "To'g'ri to'rtburchak bog'ning uzunligi 10 m, eni 6 m. " +
        "Bog'ning bir burchagidan 3 m × 2 m o'lchamdagi to'rtburchak qism ajratib olindi.",
    },

    question:
      "Qolgan bog' maydoni qancha?",

    options: [
      {
        id: "a",
        text: "48 m²",
      },
      {
        id: "b",
        text: "52 m²",
      },
      {
        id: "c",
        text: "54 m²",
      },
      {
        id: "d",
        text: "60 m²",
      },
    ],

    correctAnswer: "54 m²",

    explanation:
      "Asosiy bog' yuzi 10 × 6 = 60 m². " +
      "Ajratilgan qism 3 × 2 = 6 m². " +
      "Qolgan yuza 60 − 6 = 54 m².",

    learningObjective:
      "Murakkab shakl yuzasini qismlarga ajratib hisoblash.",

    skill: "Geometrik modellashtirish",

    mathematics: {
      contentArea: "space-and-shape",
      process: "reason",
    },

    estimatedTimeSeconds: 75,
    xp: 25,
    tags: [
      "yuza",
      "geometriya",
      "model",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     27 — MA'LUMOTLAR VA NISBAT
  ======================================================= */

  {
    id: "pisa-math-medium-027",
    version: 1,
    domain: "mathematics",
    difficulty: 3,
    topic: "Jadval va nisbat",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "table",
      title: "Kutubxona kitoblari",
      text:
        "Maktab kutubxonasidagi kitoblarning ayrim turlari.",
      data: {
        columns: [
          {
            id: "type",
            label: "Kitob turi",
          },
          {
            id: "count",
            label: "Soni",
          },
        ],
        rows: [
          {
            id: "fiction",
            values: ["Badiiy", 240],
          },
          {
            id: "science",
            values: ["Ilmiy", 120],
          },
          {
            id: "history",
            values: ["Tarixiy", 80],
          },
          {
            id: "other",
            values: ["Boshqa", 60],
          },
        ],
      },
    },

    question:
      "Badiiy kitoblar sonining ilmiy kitoblar soniga nisbati qanday?",

    options: [
      {
        id: "a",
        text: "1 : 2",
      },
      {
        id: "b",
        text: "2 : 1",
      },
      {
        id: "c",
        text: "2 : 3",
      },
      {
        id: "d",
        text: "3 : 2",
      },
    ],

    correctAnswer: "2 : 1",

    explanation:
      "240 : 120 = 2 : 1. Demak, badiiy kitoblar soni ilmiy kitoblar sonidan ikki baravar ko'p.",

    learningObjective:
      "Jadvaldagi ma'lumotlardan nisbat tuzish.",

    skill: "Nisbatni soddalashtirish",

    mathematics: {
      contentArea: "uncertainty-and-data",
      process: "employ",
    },

    estimatedTimeSeconds: 60,
    xp: 20,
    tags: [
      "jadval",
      "nisbat",
      "kutubxona",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     28 — QAROR VA CHEGARAVIY SHART
  ======================================================= */

  {
    id: "pisa-math-medium-028",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Chegaraviy shart",
    context: "work",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Yuk tashish",
      text:
        "Yuk mashinasi eng ko'pi bilan 1 200 kg yuk ko'tara oladi. " +
        "Omborda 350 kg, 420 kg va 390 kg og'irlikdagi uchta quti bor.",
    },

    question:
      "Uchala qutini bir safarda olib ketish mumkinmi?",

    options: [
      {
        id: "a",
        text: "Ha, jami 1 160 kg bo'lgani uchun.",
      },
      {
        id: "b",
        text: "Ha, jami 1 200 kg bo'lgani uchun.",
      },
      {
        id: "c",
        text: "Yo'q, jami 1 260 kg bo'lgani uchun.",
      },
      {
        id: "d",
        text: "Yo'q, chunki har qanday uchta quti ortiqcha yuk hisoblanadi.",
      },
    ],

    correctAnswer:
      "Ha, jami 1 160 kg bo'lgani uchun.",

    explanation:
      "350 + 420 + 390 = 1 160 kg. Bu 1 200 kg chegaradan 40 kg kam. " +
      "Shuning uchun uchala qutini bir safarda olib ketish mumkin.",

    learningObjective:
      "Bir nechta qiymatni yig'ib, chegaraviy shartni tekshirish.",

    skill: "Cheklov asosida qaror",

    mathematics: {
      contentArea: "quantity",
      process: "evaluate",
    },

    estimatedTimeSeconds: 70,
    xp: 25,
    tags: [
      "og'irlik",
      "cheklov",
      "qaror",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     29 — REJA VA BYUDJET
  ======================================================= */

  {
    id: "pisa-math-medium-029",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Byudjet",
    context: "school",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Sinf tadbiri",
      text:
        "Sinf tadbiri uchun 1 500 000 so'm byudjet ajratildi.\n\n" +
        "Oziq-ovqat: 650 000 so'm.\n" +
        "Bezash: 280 000 so'm.\n" +
        "Transport: 320 000 so'm.\n" +
        "Qolgan mablag' sovg'alar uchun ishlatiladi.",
    },

    question:
      "Sovg'alar uchun qancha mablag' qoladi?",

    options: [
      {
        id: "a",
        text: "150 000 so'm",
      },
      {
        id: "b",
        text: "200 000 so'm",
      },
      {
        id: "c",
        text: "250 000 so'm",
      },
      {
        id: "d",
        text: "300 000 so'm",
      },
    ],

    correctAnswer: "250 000 so'm",

    explanation:
      "Xarajatlar jami 650 000 + 280 000 + 320 000 = 1 250 000 so'm. " +
      "1 500 000 − 1 250 000 = 250 000 so'm.",

    learningObjective:
      "Byudjetni bir nechta xarajatlar asosida rejalashtirish.",

    skill: "Byudjetni boshqarish",

    secondarySkills: [
      "Qo'shish",
      "Ayirish",
      "Moliyaviy qaror",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "reason",
    },

    estimatedTimeSeconds: 75,
    xp: 25,
    tags: [
      "byudjet",
      "rejalashtirish",
      "moliyaviy-savodxonlik",
    ],

    adaptiveEligible: true,
  },

  /* =======================================================
     30 — YAKUNIY KOMPLEKS SAVOL
  ======================================================= */

  {
    id: "pisa-math-medium-030",
    version: 1,
    domain: "mathematics",
    difficulty: 4,
    topic: "Kompleks muammo",
    context: "environmental",
    type: "single-choice",

    stimulus: {
      type: "text",
      title: "Maktabning suvni tejash rejasi",
      text:
        "Maktab bir oyda 20 000 litr suv ishlatadi. " +
        "Yangi tejash tizimi suv sarfini 15% ga kamaytirishi kutilmoqda. " +
        "Bir litr suvning narxi 30 so'm.",
    },

    question:
      "Yangi tizim bir oyda qancha pulni tejashi mumkin?",

    options: [
      {
        id: "a",
        text: "60 000 so'm",
      },
      {
        id: "b",
        text: "75 000 so'm",
      },
      {
        id: "c",
        text: "90 000 so'm",
      },
      {
        id: "d",
        text: "100 000 so'm",
      },
    ],

    correctAnswer: "90 000 so'm",

    explanation:
      "20 000 litrning 15 foizi = 3 000 litr. " +
      "3 000 × 30 so'm = 90 000 so'm. " +
      "Demak, bir oyda taxminan 90 000 so'm tejash mumkin.",

    learningObjective:
      "Foiz, miqdor va narxni birlashtirib real muammoni yechish.",

    skill: "Kompleks matematik modellashtirish",

    secondarySkills: [
      "Foiz",
      "Moliyaviy hisob",
      "Ekologik fikrlash",
      "Qaror qabul qilish",
    ],

    mathematics: {
      contentArea: "quantity",
      process: "reason",
    },

    estimatedTimeSeconds: 90,
    xp: 30,
    tags: [
      "ekologiya",
      "suv",
      "foiz",
      "byudjet",
      "kompleks",
    ],

    adaptiveEligible: true,
  },
]

/* =========================================================
   VALIDATSIYA
========================================================= */

export function validatePISAMathMediumBank(): boolean {
  if (PISA_MATH_MEDIUM.length !== 30) {
    return false
  }

  const ids = new Set<string>()

  for (const question of PISA_MATH_MEDIUM) {
    /* ID tekshirish */
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

    /* Single-choice savollar */
    if (
      question.type === "single-choice"
    ) {
      if (
        !question.options ||
        question.options.length !== 4
      ) {
        return false
      }

      const answer =
        String(question.correctAnswer)

      const exists =
        question.options.some(
          (option) =>
            option.text === answer
        )

      if (!exists) {
        return false
      }
    }

    /* Matematika metadata */
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

export const PISA_MATH_MEDIUM_STATS = {
  total: PISA_MATH_MEDIUM.length,

  quantity:
    PISA_MATH_MEDIUM.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "quantity"
    ).length,

  changeAndRelationships:
    PISA_MATH_MEDIUM.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "change-and-relationships"
    ).length,

  spaceAndShape:
    PISA_MATH_MEDIUM.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "space-and-shape"
    ).length,

  uncertaintyAndData:
    PISA_MATH_MEDIUM.filter(
      (q) =>
        q.mathematics?.contentArea ===
        "uncertainty-and-data"
    ).length,

  adaptive:
    PISA_MATH_MEDIUM.filter(
      (q) => q.adaptiveEligible
    ).length,
}

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default PISA_MATH_MEDIUM
