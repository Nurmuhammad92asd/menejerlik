import type { Question } from "@/types/question";

/* =========================================================
   MENEJERLIK BY NURMUHAMMAD
   MODUL 3 — MAVZU 3
   RAHBARNING SHAXSIY SAMARADORLIGI,
   VAQTNI BOSHQARISH VA DELEGATSIYA
========================================================= */

export const MODULE_ID = "m3";
export const TOPIC_ID = "m3t3";

/* =========================================================
   EASY — 30 TA
========================================================= */

export const EASY_QUESTIONS: Question[] = [
  {
    id: "m3t3-easy-001",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "“Kecha – bugun – ertaga” tamoyilining rahbar psixologik holatiga ta’siri qaysi jihatda eng aniq namoyon bo‘ladi?",
    options: [
      "Xotirjamlik va mas’uliyatli rejalashtirish muvozanatini ta’minlashida",
      "Kundalik hisobotlarni tizimli yuritishga sharoit yaratishida",
      "Ish yuklamasini kelgusi haftalarga teng taqsimlashida",
      "O‘tmishdagi xatolarni tanqidiy tahlil qilish imkonini berishida"
    ],
    correctAnswer: 0,
    explanation: "Tamoyil o‘tmishdan xulosa, bugungi holatni anglash va kelajakni rejalashtirish orqali rahbarda xotirjamlik va mas’uliyat muvozanatini yaratadi.",
    points: 1
  },
  {
    id: "m3t3-easy-002",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Quyidagi rahbarlik yondashuvlari bilan ularning asosiy boshqaruv mazmunini moslashtiring.

1. Qotib qolgan tafakkur
2. O‘sish tafakkuri
3. Yumshoq kuch
4. Namuna bo‘lish

A. Xatoni fojia sifatida qabul qilish va yangilikdan qochish
B. Muvaffaqiyatsizlikni o‘rganish manbai sifatida talqin qilish
C. O‘zgarish foydasini shaxsiy manfaatlar bilan bog‘lab tushuntirish
D. O‘zgarishni birinchi bo‘lib shaxsiy amalda ko‘rsatish`,
    options: [
      "1 → C, 2 → A, 3 → B, 4 → D",
      "1 → A, 2 → B, 3 → C, 4 → D",
      "1 → B, 2 → A, 3 → D, 4 → C",
      "1 → D, 2 → C, 3 → B, 4 → A"
    ],
    correctAnswer: 1,
    explanation: "Qotib qolgan tafakkur xatodan qochadi; o‘sish tafakkuri xatoni o‘rganish imkoniyati deb ko‘radi; yumshoq kuch manfaatni tushuntiradi; namuna bo‘lish esa rahbarning o‘zi amalda ko‘rsatishidir.",
    points: 1
  },
  {
    id: "m3t3-easy-003",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Quyidagi holatlardan qaysilari taktik rejalashtirishga xos?",
    options: ["A, D", "C, D", "B, C", "A, C"],
    correctAnswer: 2,
    explanation: "Strategik maqsadlarni oylik/haftalik faoliyatga ajratish va metodik seminar-monitoringlarni rejalashtirish taktik darajaga xos.",
    points: 1
  },
  {
    id: "m3t3-easy-004",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Kompetensiyalar auditi tushunchasining mazmuni qaysi ikki jihat orqali to‘liq ochiladi?",
    options: ["A, C", "C, D", "B, C", "A, D"],
    correctAnswer: 1,
    explanation: "Kompetensiyalar auditi soft va hard ko‘nikmalarni xolis baholash hamda rivojlanish ehtiyojlarini aniqlashga xizmat qiladi.",
    points: 1
  },
  {
    id: "m3t3-easy-005",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Axborot gigiyenasi tamoyili direktor faoliyatida qaysi muammoni kamaytirishga qaratilgan?",
    options: [
      "Jamoa bilan muloqot chastotasining kamayib ketishini",
      "Qaror qabul qilishdagi kelishuv bosqichlarining cho‘zilishini",
      "Rasmiy va norasmiy yozishmalar oqimining ortishini",
      "Raqamli xabarnomalar tufayli diqqatning parokanda bo‘lishini"
    ],
    correctAnswer: 3,
    explanation: "Axborot gigiyenasi raqamli shovqin va keraksiz xabarlar sababli diqqatning bo‘linishini kamaytiradi.",
    points: 1
  },
  {
    id: "m3t3-easy-006",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Vazifalar kvadrantlarini boshqaruv qarori bilan moslashtiring.

1. Muhim va shoshilinch
2. Muhim, lekin shoshilinch emas
3. Shoshilinch, lekin muhim emas
4. Muhim emas va shoshilinch emas

A. Rejalashtirish va tizimli vaqt ajratish
B. Darhol bajarish va tezkor choralar
C. Delegatsiya va vakolat taqsimoti
D. Voz kechish va cheklash`,
    options: [
      "1–A, 2–B, 3–D, 4–C",
      "1–D, 2–C, 3–A, 4–B",
      "1–B, 2–A, 3–C, 4–D",
      "1–C, 2–D, 3–B, 4–A"
    ],
    correctAnswer: 2,
    explanation: "I kvadrant darhol bajariladi; II kvadrant rejalashtiriladi; III kvadrant delegatsiya qilinadi; IV kvadrant cheklanadi.",
    points: 1
  },
  {
    id: "m3t3-easy-007",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Rejalashtirish darajalarini moslashtiring.

1. Strategik reja
2. Taktik reja
3. Operatsion reja

A. Kundalik aniq vazifalar
B. Uzoq muddatli rivojlanish yo‘nalishlari
C. Strategik maqsadlarni o‘rta muddatli tadbirlarga ajratish`,
    options: [
      "1–C | 2–D | 3–A",
      "1–A | 2–C | 3–B",
      "1–D | 2–B | 3–C",
      "1–B | 2–C | 3–A"
    ],
    correctAnswer: 3,
    explanation: "Strategik — uzoq muddatli; taktik — o‘rta muddatli; operatsion — kundalik ijro.",
    points: 1
  },
  {
    id: "m3t3-easy-008",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Delegatsiyaning mikromenejmentga qarama-qarshi qo‘yilishi qaysi muammoni hal qilishga qaratilgan?",
    options: [
      "Nazorat mexanizmlarining markazlashgan holda saqlanishi",
      "Rahbarning ijro jarayonlariga chuqur aralashuvi tufayli jamoa tashabbusining susayishi",
      "Vazifalarni taqsimlashda tashkiliy intizomning zaiflashuvi",
      "Xodimlarning shaxsiy javobgarligining kamayishi"
    ],
    correctAnswer: 1,
    explanation: "Delegatsiya xodimga vakolat berib, rahbarning har bir jarayonga ortiqcha aralashishini kamaytiradi.",
    points: 1
  },
  {
    id: "m3t3-easy-009",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "“Ochiq eshiklar” siyosatini boshqariladigan mexanizmga aylantirish qaysi ikki natijaga xizmat qiladi?",
    options: ["B, C", "A, B", "A, D", "A, C"],
    correctAnswer: 3,
    explanation: "Qabul vaqtlarini tartibga solish rejasiz uzilishlarni kamaytiradi va strategik ish uchun vaqtni himoya qiladi.",
    points: 1
  },
  {
    id: "m3t3-easy-010",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Delegatsiyaning oltin qoidalarini moslashtiring.

1. Vazifani aniq shakllantirish
2. To‘g‘ri ijrochini tanlash
3. Natijani nazorat qilish
4. Qayta aloqa va rag‘bat

A. Xodim kompetensiyasiga mos mas’uliyat
B. Kutilayotgan natijani aniqlash
C. Ijro uslubida erkinlik
D. Motivatsiya va o‘sishni qo‘llab-quvvatlash`,
    options: [
      "1–A, 2–B, 3–D, 4–C",
      "1–C, 2–D, 3–A, 4–B",
      "1–B, 2–A, 3–C, 4–D",
      "1–D, 2–C, 3–B, 4–A"
    ],
    correctAnswer: 2,
    explanation: "Aniq vazifa — natijani belgilaydi; to‘g‘ri ijrochi — kompetensiyaga mos; nazorat — natijani tekshiradi; feedback — rivojlantiradi.",
    points: 1
  },
  {
    id: "m3t3-easy-011",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Resurslar diversifikatsiyasining rahbar rivojlanishidagi asosiy ustunligi nimada?",
    options: [
      "Rivojlanishni tashqi baholash bilan muvofiqlashtirishda",
      "Rahbar bilimini faqat jamoa ehtiyojlariga moslashtirishda",
      "Malaka oshirish jarayonini qisqartirishda",
      "Rivojlanishni faqat majburiy tizimlar bilan bog‘lab qo‘ymaslikda"
    ],
    correctAnswer: 3,
    explanation: "Rivojlanish faqat majburiy kurslar bilan cheklanmasligi, turli manbalar orqali boyitilishi kerak.",
    points: 1
  },
  {
    id: "m3t3-easy-012",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Ish kunining oxirida refleksiya o‘tkazishning asosiy foydasi nima?",
    options: [
      "Keyingi kunni oldindan rejalashtirish va yondashuvni takomillashtirish",
      "Faqat rasmiy hisobotlarni tekshirish",
      "Barcha operativ vazifalarni qayta taqsimlash",
      "Faqat bajarilgan ishlar sonini aniqlash"
    ],
    correctAnswer: 0,
    explanation: "Refleksiya rahbarga kunlik tajribadan xulosa chiqarib, keyingi boshqaruv faoliyatini yaxshilash imkonini beradi.",
    points: 1
  },
  {
    id: "m3t3-easy-013",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "80/20 tamoyilining maktab boshqaruvidagi asosiy mazmuni nimada?",
    options: [
      "Operativ vazifalarni strategik vazifalardan ajratishda",
      "Eng katta ta’sir beruvchi faoliyatlarni aniqlab, ularga ustuvorlik berishda",
      "Barcha jarayonlarni teng nazorat qilishda",
      "Ko‘p vazifani bir vaqtda bajarishda"
    ],
    correctAnswer: 1,
    explanation: "80/20 tamoyili katta natijaning asosiy qismini beruvchi oz sonli faoliyatlarni aniqlashga undaydi.",
    points: 1
  },
  {
    id: "m3t3-easy-014",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Hissiy intellekti yuqori rahbarning jamoaga ta’siri qaysi ikki natijada ko‘rinadi?",
    options: ["B, C", "A, D", "A, B", "C, D"],
    correctAnswer: 2,
    explanation: "Yuqori hissiy intellekt psixologik xavfsizlik va ijodiy tashabbuslarni qo‘llab-quvvatlaydi.",
    points: 1
  },
  {
    id: "m3t3-easy-015",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Qaysi savol strategik rejalashtirish darajasiga xos?",
    options: [
      "Ish kunidagi vazifalar qaysi ketma-ketlikda bajariladi?",
      "Maktabning uzoq muddatli rivojlanish yo‘nalishi va uning sabablari qanday?",
      "Qaysi hujjat birinchi rasmiylashtiriladi?",
      "Bugungi majlis qaysi vaqtda o‘tkaziladi?"
    ],
    correctAnswer: 1,
    explanation: "Strategik tafakkur uzoq muddatli yo‘nalish, maqsad va uning asoslarini ko‘radi.",
    points: 1
  },
  {
    id: "m3t3-easy-016",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Uchinchi kvadrantga xos faoliyatlar qaysilar?",
    options: ["C, D", "B, D", "A, D", "A, C"],
    correctAnswer: 1,
    explanation: "Uchinchi kvadrant shoshilinch, ammo strategik jihatdan muhim bo‘lmagan ishlarni anglatadi; ular imkon qadar delegatsiya qilinadi.",
    points: 1
  },
  {
    id: "m3t3-easy-017",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Rahbar ish kunining dastlabki 90 daqiqasini ikkinchi kvadrant vazifalariga ajratishi nimaga asoslanadi?",
    options: [
      "Kutilmagan holatlarni kamaytirishga",
      "Nazorat ishlarini ertalab tugatishga",
      "Eng samarali fikrlash davrini murakkab va uzoq muddatli vazifalarga yo‘naltirishga",
      "Kundalik tashkiliy ishlarni bir joyga yig‘ishga"
    ],
    correctAnswer: 2,
    explanation: "Ikkinchi kvadrant muhim, lekin shoshilinch bo‘lmagan rivojlantiruvchi vazifalarni o‘z ichiga oladi.",
    points: 1
  },
  {
    id: "m3t3-easy-018",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "“Kecha – bugun – ertaga” tamoyili rejalashtirishning qaysi darajasiga ko‘proq mos?",
    options: [
      "Operatsion rejalashtirish",
      "Taktik rejalashtirish",
      "Monitoring rejalashtirish",
      "Strategik rejalashtirish"
    ],
    correctAnswer: 3,
    explanation: "Tamoyil istiqbolni ko‘rish va bugungi qarorlarni kelajak bilan bog‘lashni talab qiladi.",
    points: 1
  },
  {
    id: "m3t3-easy-019",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Vaqtni boshqarishda “ish muhitini samaradorlik bilan bog‘lash” nimani anglatadi?",
    options: [
      "Faqat jadval tuzishni",
      "Faqat shaxsiy intizomni",
      "Vazifalar sonini kamaytirishni",
      "Ish joyi, tartib va chalg‘ituvchi omillarni qayta tashkil etishni"
    ],
    correctAnswer: 3,
    explanation: "Samaradorlik faqat vaqt taqsimotiga emas, ish muhitining qanday tashkil etilganiga ham bog‘liq.",
    points: 1
  },
  {
    id: "m3t3-easy-020",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Ikkinchi kvadrant vazifalari nima sababli rahbar uchun ustuvor?",
    options: [
      "Tashqi tashkilot talablarini tez bajaradi",
      "Tezkor muammolarni darhol bartaraf etadi",
      "Rahbarning strategik ta’sir doirasini shakllantiradi",
      "Barcha ishlarni delegatsiya qilishga imkon beradi"
    ],
    correctAnswer: 2,
    explanation: "Strategik rejalashtirish, murabbiylik va rivojlanish ishlari aynan ikkinchi kvadrantda bo‘ladi.",
    points: 1
  },
  {
    id: "m3t3-easy-021",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Delegatsiya “ishni birovga berish”dan nimasi bilan farq qiladi?",
    options: [
      "Batafsil ko‘rsatmalar berilishi bilan",
      "Rahbar yukining kamayishi bilan",
      "Qat’iy reglament bilan",
      "Mas’uliyat bilan birga qaror qabul qilish huquqining berilishi bilan"
    ],
    correctAnswer: 3,
    explanation: "Haqiqiy delegatsiyada vazifa bilan birga zarur vakolat va javobgarlik ham topshiriladi.",
    points: 1
  },
  {
    id: "m3t3-easy-022",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Delegatsiyaning samarali amalga oshirilganini ko‘rsatuvchi ikki holatni belgilang.",
    options: ["A, C", "A, D", "C, D", "B, C"],
    correctAnswer: 3,
    explanation: "Xodimga resurs va vakolat berish hamda natijani baholab, ijro uslubida erkinlik qoldirish samarali delegatsiyadir.",
    points: 1
  },
  {
    id: "m3t3-easy-023",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Direktor eng samarali vaqtini murakkab tahliliy vazifalarga ajratishi qaysi xavfni kamaytiradi?",
    options: [
      "Kundalik ishlarning cho‘zilishini",
      "Diqqat parchalanishi sabab qaror sifati pasayishini",
      "Jamoa bilan muloqotning kamayishini",
      "Hujjatlar sonining ortishini"
    ],
    correctAnswer: 1,
    explanation: "Chuqur ishlash vaqtini himoyalash diqqatni bo‘luvchi omillarni kamaytiradi.",
    points: 1
  },
  {
    id: "m3t3-easy-024",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Rejalashtirishning “missiya” va “vazifa” o‘rtasidagi ko‘prik sifatida talqin qilinishi nimani anglatadi?",
    options: [
      "Rejani faqat tadbirlar jadvaliga aylantirishni",
      "Qarorlarni faqat kundalik vaziyatlarga moslashtirishni",
      "Uzoq muddatli maqsadlarni amaliy harakatlar bilan bog‘lashni",
      "Rejalashtirishni faqat nazorat vositasiga aylantirishni"
    ],
    correctAnswer: 2,
    explanation: "Reja strategik maqsadni aniq bajariladigan faoliyatlarga aylantiradi.",
    points: 1
  },
  {
    id: "m3t3-easy-025",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Delegatsiya qoidalarini moslashtiring.

1. Vazifani aniq shakllantirish
2. Vakolat va resurs berish
3. To‘g‘ri ijrochini tanlash
4. Natijani nazorat qilish

A. Kompetensiyaga mos vazifa
B. E’tirof va konstruktiv feedback
C. Jarayonga ortiqcha aralashmasdan natijani tekshirish
D. O‘lchab bo‘ladigan natijani belgilash
E. Qaror huquqi va zarur sharoitlarni topshirish`,
    options: [
      "1–B | 2–C | 3–D | 4–E",
      "1–D | 2–E | 3–A | 4–C",
      "1–C | 2–A | 3–B | 4–E",
      "1–A | 2–D | 3–C | 4–B"
    ],
    correctAnswer: 1,
    explanation: "Vazifa natijasi aniq bo‘lishi, vakolat-resurs berilishi, ijrochi kompetensiyaga mos tanlanishi va yakuniy natija nazorat qilinishi kerak.",
    points: 1
  },
  {
    id: "m3t3-easy-026",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Direktorning “Etalon-rahbar” sifatida talqin qilinishi qaysi rolni anglatadi?",
    options: [
      "Qat’iy nazoratchi",
      "Ma’muriy ijrochi",
      "Shaxsiy namuna orqali jamoaga ta’sir qiluvchi yetakchi",
      "Faqat me’yoriy hujjatlar eksperti"
    ],
    correctAnswer: 2,
    explanation: "Etalon-rahbar o‘z xulqi va faoliyati bilan jamoa uchun namuna bo‘ladi.",
    points: 1
  },
  {
    id: "m3t3-easy-027",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "“Hayot davomida o‘rganish” rahbarlikning qaysi zamonaviy paradigmasini anglatadi?",
    options: [
      "Bilimni faqat amaliy resurs sifatida ko‘rish",
      "Lavozim barqarorligiga tayanish",
      "Faqat majburiy malaka oshirishga tayanish",
      "Kompetensiyalarni doimiy qayta ko‘rib chiqish va yangilash"
    ],
    correctAnswer: 3,
    explanation: "Zamonaviy rahbar doimiy ravishda yangi bilim va ko‘nikmalarni o‘zlashtirib boradi.",
    points: 1
  },
  {
    id: "m3t3-easy-028",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: `Vositalarni vazifalari bilan moslashtiring.

1. SWOT-tahlil
2. 360 darajali qayta aloqa
3. Self-assessment
4. Kompetensiyalar auditi

A. Yashirin kuchli va kuchsiz tomonlarni aniqlash
B. Imkoniyat va xavflarni tizimli ko‘rish
C. O‘z faoliyatini muntazam refleksiya qilish
D. Mavjud ko‘nikmalar darajasini xolis baholash`,
    options: [
      "1 → D, 2 → A, 3 → B, 4 → C",
      "1 → B, 2 → A, 3 → C, 4 → D",
      "1 → C, 2 → A, 3 → B, 4 → D",
      "1 → A, 2 → C, 3 → B, 4 → D"
    ],
    correctAnswer: 1,
    explanation: "SWOT — imkoniyat/xavf; 360 — boshqalarning fikri; self-assessment — o‘zini baholash; kompetensiya auditi — ko‘nikmalarni xolis baholash.",
    points: 1
  },
  {
    id: "m3t3-easy-029",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "O‘sish tafakkurining boshqaruvdagi ustunligi qaysi yondashuvda namoyon bo‘ladi?",
    options: [
      "Xatolarni qat’iy cheklashda",
      "An’anaviy usullarga qaytishda",
      "Muammolarni imkoniyat sifatida qayta talqin qilishda",
      "O‘zgarishlarni faqat tashqi talab sifatida qabul qilishda"
    ],
    correctAnswer: 2,
    explanation: "Growth mindset muammolar va xatolarni rivojlanish manbai sifatida ko‘radi.",
    points: 1
  },
  {
    id: "m3t3-easy-030",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "easy",
    text: "Ishlarni guruhlash (batching) qaysi muammoni kamaytiradi?",
    options: [
      "Mas’uliyat markazining tarqoqligini",
      "Nazoratning murakkabligini",
      "Bir xil mayda vazifalar o‘rtasidagi doimiy diqqat almashinuvi sababli resurs yo‘qotilishini",
      "Jadvalning haddan tashqari zichligini"
    ],
    correctAnswer: 2,
    explanation: "Batching bir xil ishlarni bir blokda bajarib, doimiy kontekst almashinuvi xarajatini kamaytiradi.",
    points: 1
  }
];

/* =========================================================
   MEDIUM — 30 TA
========================================================= */

export const MEDIUM_QUESTIONS: Question[] = [
  {
    id: "m3t3-medium-001",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Direktor strategik maqsadlarni oylik seminarlar, haftalik monitoring va kundalik vazifalarga ajratdi. Birinchi boshqaruv nuqtasi qaysi?",
    options: ["Strategik reja", "Operatsion reja", "Ishchi reja", "Taktik reja"],
    correctAnswer: 0,
    explanation: "Barcha keyingi darajalar strategik maqsadlardan kelib chiqmoqda.",
    points: 2
  },
  {
    id: "m3t3-medium-002",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Direktor ish vaqtining katta qismini strategik ishlarga ajratish uchun qo‘ng‘iroq va ma’lumotnomalarning bir qismini xodimlarga topshirdi. Bu qaysi kvadrant boshqaruviga mos?",
    options: [
      "Muhim, lekin shoshilinch emas",
      "Muhim emas va shoshilinch emas",
      "Muhim va shoshilinch",
      "Shoshilinch, lekin muhim emas"
    ],
    correctAnswer: 3,
    explanation: "Mayda tezkor ishlar ko‘pincha III kvadrantga tegishli bo‘lib, delegatsiya qilinadi.",
    points: 2
  },
  {
    id: "m3t3-medium-003",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbar ish kunining eng samarali vaqtini strategik vazifalarga ajratishi qaysi ikki tamoyilning uyg‘unlashuvi hisoblanadi?",
    options: [
      "Batching va ochiq eshik",
      "Chuqur ishlash va ikkinchi kvadrant",
      "Axborot gigiyenasi va hisobot",
      "Operativ reja va mikromenejment"
    ],
    correctAnswer: 1,
    explanation: "Muhim, lekin shoshilinch bo‘lmagan vazifalar chuqur fikrlashni talab qiladi.",
    points: 2
  },
  {
    id: "m3t3-medium-004",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbar vazifani topshirdi, natija mezonini aytdi, vakolat va resurs berdi, ammo bajarish usulini xodimga qoldirdi. Qaysi tamoyil ustun?",
    options: ["Mikromenejment", "Natijaviy delegatsiya", "Markazlashgan nazorat", "Operatsion boshqaruv"],
    correctAnswer: 1,
    explanation: "Delegatsiyaning mohiyati natijaga javobgarlik bilan birga zarur vakolat berishdir.",
    points: 2
  },
  {
    id: "m3t3-medium-005",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Direktor o‘zining muloqotdagi kamchiliklarini xodimlar va hamkasblarning anonim fikrlari orqali aniqladi. Bu qaysi metod?",
    options: ["SWOT", "Self-assessment", "360 darajali qayta aloqa", "Kompetensiyalar auditi"],
    correctAnswer: 2,
    explanation: "360 darajali qayta aloqa rahbar haqida turli tomonlarning fikrini yig‘adi.",
    points: 2
  },
  {
    id: "m3t3-medium-006",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Direktor soft va hard ko‘nikmalarini tahlil qilib, kelajakda qaysi kompetensiyalar kerak bo‘lishini aniqladi. Eng mos tushuncha?",
    options: ["Oddiy self-assessment", "Kompetensiyalar auditi", "Kundalik monitoring", "Operatsion nazorat"],
    correctAnswer: 1,
    explanation: "Kompetensiyalar auditi mavjud holat bilan birga rivojlanish ehtiyojlarini ham ko‘rsatadi.",
    points: 2
  },
  {
    id: "m3t3-medium-007",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Direktor yangi tizimni joriy etishdan oldin uning foydasini tushuntirdi va o‘zi birinchi bo‘lib foydalandi. Bu holatda qaysi ikki yondashuv uyg‘unlashgan?",
    options: [
      "Qattiq nazorat va operatsion boshqaruv",
      "Yumshoq kuch va namuna bo‘lish",
      "Mikromenejment va delegatsiya",
      "Monitoring va hisobot"
    ],
    correctAnswer: 1,
    explanation: "Foydani tushuntirish — yumshoq kuch; o‘zi birinchi qo‘llash — shaxsiy namuna.",
    points: 2
  },
  {
    id: "m3t3-medium-008",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "“Kecha–bugun–ertaga” tamoyilida “kecha” qaysi boshqaruv faoliyatiga ko‘proq xizmat qiladi?",
    options: [
      "Kelajakdagi maqsadlarni belgilashga",
      "O‘tmish tajribasi va xatolaridan xulosa chiqarishga",
      "Faqat kundalik topshiriqlarni taqsimlashga",
      "Xodimlar yuklamasini oshirishga"
    ],
    correctAnswer: 1,
    explanation: "O‘tmish tahlili bugungi va kelajakdagi qarorlar sifatini oshiradi.",
    points: 2
  },
  {
    id: "m3t3-medium-009",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Ikkinchi kvadrantning rahbar rivojlanishidagi asosiy xususiyati qaysi?",
    options: [
      "Faqat inqirozlarni bartaraf etadi",
      "Strategik natijaga xizmat qiluvchi oldindan rejalashtiriladigan ishlarni qamrab oladi",
      "Faqat boshqalarga topshiriladigan ishlarni bildiradi",
      "Faqat dam olish faoliyatidan iborat"
    ],
    correctAnswer: 1,
    explanation: "II kvadrant — strategik, profilaktik va rivojlantiruvchi faoliyatlar hududi.",
    points: 2
  },
  // ... qolgan medium savollarni xuddi shu formatda davom ettiring (jami 30 ta)
];

/* =========================================================
   HARD — 30 TA
========================================================= */

export const HARD_QUESTIONS: Question[] = [
  // Bu yerga 30 ta hard savolni joylashtiring
  // Oxirgi savol to‘g‘ri yozilgan versiyasi:
  {
    id: "m3t3-hard-030",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: `Quyidagi bayonotlarni baholang.

1. Muhim, lekin shoshilinch bo‘lmagan ishlar oldindan rejalashtirilishi kerak.
2. III kvadrant ishlarini imkon qadar delegatsiya qilish mumkin.
3. Rahbarning barcha vaqtini shoshilinch ishlar egallashi normal boshqaruv modelidir.
4. Chuqur ishlash uchun chalg‘ituvchilar kamaytirilishi kerak.
5. Delegatsiya faqat rahbarning ishini kamaytirishdan iborat.

To‘g‘ri bayonotlar qaysilar?`,
    options: [
      "1, 2, 4",
      "1, 3, 5",
      "2, 3, 4",
      "1, 2, 3, 4"
    ],
    correctAnswer: 0,
    explanation: "1, 2 va 4-bayonotlar samarali vaqt boshqaruvi tamoyillariga mos. 3 va 5 noto‘g‘ri.",
    points: 3
  }
];

/* =========================================================
   CASE — 10 TA
========================================================= */

export const CASE_QUESTIONS: Question[] = [
  {
    id: "m3t3-case-001",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `129-sonli maktab direktorining ish kuni asosan shoshilinch topshiriqlar, telefonlar, yuqori tashkilotlardan kelgan so‘rovlar va samarasiz majlislarga sarflanmoqda. Strategik rejalashtirish va murabbiylikka vaqt qolmayapti. Direktor deyarli barcha vazifalarni o‘zi nazorat qiladi.

Eng maqbul yechim qaysi?`,
    options: [
      "Barcha shoshilinch topshiriqlarni shaxsan bajarish",
      "Strategik ishlarni bo‘sh vaqtga qoldirish",
      "II kvadrant uchun vaqt bloklash, III kvadrant ishlarini delegatsiya qilish va nazoratni natijaga qaratish",
      "Barcha qarorlarni o‘rinbosarlarga topshirish"
    ],
    correctAnswer: 2,
    explanation: "Muammoning ildizi strategik vaqtning himoyalanmagani va mikromenejmentdir.",
    points: 3
  },
  // ... qolgan 9 ta case savollarini xuddi shu formatda qo‘shing
];

/* =========================================================
   BARCHA SAVOLLAR
========================================================= */

export const CASE_QUESTIONS: Question[] = [
  // 10 ta haqiqiy case savol
];

export const M3T3_QUESTIONS: Question[] = [
  ...EASY_QUESTIONS,
  ...MEDIUM_QUESTIONS,
  ...HARD_QUESTIONS,
  ...CASE_QUESTIONS
];

export const M3T3_QUESTION_COUNT = M3T3_QUESTIONS.length;

export const M3T3_LEVELS = {
  easy: EASY_QUESTIONS,
  medium: MEDIUM_QUESTIONS,
  hard: HARD_QUESTIONS,
  case: CASE_QUESTIONS,
};

export default M3T3_QUESTIONS;
