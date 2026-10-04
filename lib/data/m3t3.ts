import type { Question } from "@/types/question";

/* =========================================================
   MENEJERLIK BY NURMUHAMMAD
   MODUL 3 — MAVZU
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
    options: [
      "A, D",
      "C, D",
      "B, C",
      "A, C"
    ],
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
    options: [
      "A, C",
      "C, D",
      "B, C",
      "A, D"
    ],
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
    options: [
      "B, C",
      "A, B",
      "A, D",
      "A, C"
    ],
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
    options: [
      "B, C",
      "A, D",
      "A, B",
      "C, D"
    ],
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
    options: [
      "C, D",
      "B, D",
      "A, D",
      "A, C"
    ],
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
    options: [
      "A, C",
      "A, D",
      "C, D",
      "B, C"
    ],
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
    options: [
      "Strategik reja",
      "Operatsion reja",
      "Ishchi reja",
      "Taktik reja"
    ],
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
    options: [
      "Mikromenejment",
      "Natijaviy delegatsiya",
      "Markazlashgan nazorat",
      "Operatsion boshqaruv"
    ],
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
    options: [
      "SWOT",
      "Self-assessment",
      "360 darajali qayta aloqa",
      "Kompetensiyalar auditi"
    ],
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
    options: [
      "Oddiy self-assessment",
      "Kompetensiyalar auditi",
      "Kundalik monitoring",
      "Operatsion nazorat"
    ],
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

  {
    id: "m3t3-medium-010",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbar barcha mayda xabarlarni kelishi bilan tekshirib turadi. Bu qaysi xavfni kuchaytiradi?",
    options: [
      "Delegatsiya sifatini",
      "Chuqur ishlash va diqqatni jamlash imkoniyatini",
      "Strategik fikrlashni",
      "Vaqt bloklarini"
    ],
    correctAnswer: 1,
    explanation: "Doimiy xabar tekshirish kontekst almashinuvi va diqqat parchalanishini kuchaytiradi.",
    points: 2
  },

  {
    id: "m3t3-medium-011",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Ochiq eshiklar siyosatining samarali modeli qaysi?",
    options: [
      "Rahbar kun bo‘yi istalgan vaqtda murojaat qilish uchun ochiq bo‘ladi",
      "Murojaatlarni butunlay to‘xtatadi",
      "Qabul vaqtlarini belgilab, shu bilan birga murojaat kanallarini saqlab qoladi",
      "Faqat rahbar ruxsati bilan muloqot qiladi"
    ],
    correctAnswer: 2,
    explanation: "Ochiqlik va vaqtni himoyalash o‘rtasida muvozanat zarur.",
    points: 2
  },

  {
    id: "m3t3-medium-012",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "80/20 tamoyilini noto‘g‘ri qo‘llash qaysi holatda namoyon bo‘ladi?",
    options: [
      "Eng katta natija beruvchi faoliyatlarni aniqlashda",
      "Strategik vazifalarni ustuvorlashtirishda",
      "Qolgan barcha vazifalarni avtomatik ravishda keraksiz deb hisoblashda",
      "Resursni yuqori ta’sirli ishga yo‘naltirishda"
    ],
    correctAnswer: 2,
    explanation: "80/20 ustuvorlik vositasi, barcha qolgan ishlarni mutlaqo keraksiz deb e’lon qilish qoidasi emas.",
    points: 2
  },

  {
    id: "m3t3-medium-013",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Refleksiya va self-assessment o‘rtasidagi eng yaqin bog‘liqlik qaysi?",
    options: [
      "Ikkalasi ham faqat tashqi baholashga tayanadi",
      "Ikkalasi ham rahbarning o‘z faoliyatini anglash va yaxshilashiga xizmat qiladi",
      "Ikkalasi ham faqat hujjatlarni tekshiradi",
      "Ikkalasi ham faqat xodimlar fikrini o‘rganadi"
    ],
    correctAnswer: 1,
    explanation: "Ikkala yondashuv ham o‘z faoliyatini tahlil qilish va rivojlanishga qaratilgan.",
    points: 2
  },

  {
    id: "m3t3-medium-014",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Quyidagi juftliklardan qaysi biri to‘g‘ri moslashtirilgan?",
    options: [
      "III kvadrant — strategik rejalashtirish",
      "II kvadrant — murabbiylik va rivojlanish",
      "IV kvadrant — inqirozni boshqarish",
      "I kvadrant — uzoq muddatli kompetensiya rivoji"
    ],
    correctAnswer: 1,
    explanation: "Murabbiylik, strategik rejalashtirish va rivojlanish II kvadrantga kiradi.",
    points: 2
  },

  {
    id: "m3t3-medium-015",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Delegatsiyada rahbarning asosiy nazorat nuqtasi nimaga ko‘proq qaratilishi kerak?",
    options: [
      "Har bir qadamga",
      "Xodimning ish joyida qancha vaqt bo‘lishiga",
      "Kelishilgan natija va sifat mezonlariga",
      "Har bir qarorni rahbar bilan kelishishga"
    ],
    correctAnswer: 2,
    explanation: "Natijaviy delegatsiya jarayonni mikro nazorat qilishdan ko‘ra natijani baholaydi.",
    points: 2
  },

  {
    id: "m3t3-medium-016",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbarning ish kunini bloklarga ajratishi qaysi ikki muammoni kamaytiradi?",
    options: [
      "Kadrlar almashinuvi va ish haqi muammosini",
      "Diqqat almashinuvi va rejasiz uzilishlarni",
      "Ta’lim sifati va monitoringni",
      "Hisobot va hujjatlarning mavjudligini"
    ],
    correctAnswer: 1,
    explanation: "Vaqt bloklari ishni oldindan tartibga solib, kontekst almashinuvi va rejasiz aralashuvlarni kamaytiradi.",
    points: 2
  },

  {
    id: "m3t3-medium-017",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "“Chuqur ishlash” uchun eng maqbul vazifa qaysi?",
    options: [
      "Ketma-ket telefon qo‘ng‘iroqlariga javob berish",
      "Maktab rivojlanish konsepsiyasini tahlil qilish",
      "Kelgan xatlarni o‘qish",
      "Oddiy ma’lumotnomalarni imzolash"
    ],
    correctAnswer: 1,
    explanation: "Chuqur ishlash murakkab, yuqori kognitiv e’tibor talab qiluvchi vazifalar uchun mo‘ljallangan.",
    points: 2
  },

  {
    id: "m3t3-medium-018",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbarning “namuna bo‘lishi” o‘zgarishlarni boshqarishda nima beradi?",
    options: [
      "Faqat jazoni kuchaytiradi",
      "Rahbarning talabini shaxsiy amaliyot bilan ishonchli qiladi",
      "Barcha vakolatni rahbarda qoldiradi",
      "Xodimlar tashabbusini cheklaydi"
    ],
    correctAnswer: 1,
    explanation: "Rahbar o‘zi talab qilgan xatti-harakatni amalda ko‘rsatsa, o‘zgarishning legitimligi va ishonchliligi oshadi.",
    points: 2
  },

  {
    id: "m3t3-medium-019",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Qotib qolgan tafakkurning asosiy belgisi qaysi?",
    options: [
      "Xatodan o‘rganish",
      "Muammoni imkoniyat deb ko‘rish",
      "Xatoni shaxsiy qobiliyatsizlik belgisi sifatida ko‘rib, yangilikdan qochish",
      "Yangi kompetensiyalarni izlash"
    ],
    correctAnswer: 2,
    explanation: "Fixed mindset mavjud qobiliyatlarni o‘zgarmas deb qabul qilishga moyil.",
    points: 2
  },

  {
    id: "m3t3-medium-020",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Yumshoq kuchning rahbarlikdagi asosiy mexanizmi qaysi?",
    options: [
      "Majburlash",
      "Lavozim vakolatidan foydalanish",
      "O‘zgarish foydasini tushuntirish va ixtiyoriy qabul qilinishiga ta’sir ko‘rsatish",
      "Nazoratni kuchaytirish"
    ],
    correctAnswer: 2,
    explanation: "Soft power ishontirish, ma’no va manfaatni ko‘rsatish orqali ta’sir qiladi.",
    points: 2
  },

  {
    id: "m3t3-medium-021",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Strategik vaqtni boshqarishda qaysi ketma-ketlik mantiqan to‘g‘ri?",
    options: [
      "Barcha murojaatlarni bajarish → bo‘sh vaqt → strategik ish",
      "Strategik ustuvorlikni aniqlash → vaqtni himoyalash → qolgan ishlarni taqsimlash",
      "Majlislarni ko‘paytirish → delegatsiyani kamaytirish → nazoratni oshirish",
      "Barcha ishlarni rahbarning o‘zida saqlash → nazorat → strategiya"
    ],
    correctAnswer: 1,
    explanation: "Avval ustuvor strategik vazifalar himoyalanadi, keyin qolgan ishlar boshqariladi.",
    points: 2
  },

  {
    id: "m3t3-medium-022",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Qaysi holat mikromenejmentning eng aniq belgisi?",
    options: [
      "Natija mezonlarini oldindan belgilash",
      "Xodimga vakolat berish",
      "Xodimning har bir harakatini rahbar tomonidan doimiy tekshirish",
      "Yakuniy natijani baholash"
    ],
    correctAnswer: 2,
    explanation: "Mikromenejment rahbarning ijro jarayoniga haddan tashqari aralashishi bilan tavsiflanadi.",
    points: 2
  },

  {
    id: "m3t3-medium-023",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Professional rivojlanish resurslarini diversifikatsiya qilishga qaysi variant mos?",
    options: [
      "Faqat majburiy kurslar",
      "Faqat rahbarlar yig‘ilishi",
      "Kitob, webinar, mentorlik, self-assessment va amaliy tajriba",
      "Faqat attestatsiya"
    ],
    correctAnswer: 2,
    explanation: "Turli manbalar rahbar kompetensiyalarining kengroq rivojlanishini ta’minlaydi.",
    points: 2
  },

  {
    id: "m3t3-medium-024",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbar kun oxirida “Bugun qaysi vazifada vaqtim keragidan ortiq ketdi?” deb so‘radi. Bu qaysi jarayon?",
    options: [
      "Delegatsiya",
      "Refleksiya",
      "Strategik rejalashtirish",
      "Taktik monitoring"
    ],
    correctAnswer: 1,
    explanation: "Savol rahbarning o‘z faoliyatini tahlil qilishiga qaratilgan.",
    points: 2
  },

  {
    id: "m3t3-medium-025",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Quyidagilardan qaysi biri ikkinchi kvadrantning uzoq muddatli foydasini eng yaxshi ifodalaydi?",
    options: [
      "Bugungi inqirozni tez bartaraf etish",
      "Kelajakdagi inqirozlar ehtimolini kamaytirish va salohiyatni oshirish",
      "Rahbarning barcha ishini kamaytirish",
      "Barcha vazifalarni boshqa xodimga berish"
    ],
    correctAnswer: 1,
    explanation: "II kvadrant profilaktika, rivojlanish va strategik tayyorgarlik orqali kelajak natijasini yaxshilaydi.",
    points: 2
  },

  {
    id: "m3t3-medium-026",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "To‘g‘ri delegatsiyada xodimga qaysi uchlik berilishi eng maqbul?",
    options: [
      "Vazifa, tanbeh, hisobot",
      "Vazifa, vakolat, zarur resurs",
      "Vazifa, doimiy nazorat, cheklov",
      "Vazifa, qo‘shimcha hujjat, jarima"
    ],
    correctAnswer: 1,
    explanation: "Natijani bajarish uchun xodimda vazifa bilan birga vakolat va resurs ham bo‘lishi kerak.",
    points: 2
  },

  {
    id: "m3t3-medium-027",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbarning shaxsiy samaradorligi eng to‘g‘ri qaysi formula orqali ifodalanadi?",
    options: [
      "Ko‘proq ish = ko‘proq samaradorlik",
      "Ko‘proq nazorat = ko‘proq natija",
      "To‘g‘ri ustuvorlik + vaqtni himoyalash + delegatsiya + rivojlanish",
      "Ko‘proq yig‘ilish = yaxshi boshqaruv"
    ],
    correctAnswer: 2,
    explanation: "Samaradorlik ish hajmiga emas, yuqori ta’sirli ishlarni to‘g‘ri boshqarishga bog‘liq.",
    points: 2
  },

  {
    id: "m3t3-medium-028",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "“Tartibsizlikni tizimga aylantirish” tamoyili nimani anglatadi?",
    options: [
      "Barcha ishlarni qat’iy nazorat qilishni",
      "Ish jarayonini ongli ravishda tashkil etish va ustuvorlashtirishni",
      "Vazifalarni faqat rahbarga topshirishni",
      "Har bir murojaatni darhol bajarishni"
    ],
    correctAnswer: 1,
    explanation: "Tizimlashtirish ish, vaqt, axborot va vazifalarni ongli tashkil qilishni bildiradi.",
    points: 2
  },

  {
    id: "m3t3-medium-029",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "AI vositalarini taqiqlashdan ko‘ra ulardan foydalanishni o‘rganish qaysi kompetensiyani ko‘rsatadi?",
    options: [
      "Faqat ehtiyotkorlik",
      "O‘zgaruvchan muhitga moslashuvchanlik",
      "Mikromenejment",
      "Operatsion nazorat"
    ],
    correctAnswer: 1,
    explanation: "Texnologik o‘zgarishga moslashish zamonaviy rahbarning rivojlanish kompetensiyasidir.",
    points: 2
  },

  {
    id: "m3t3-medium-030",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "medium",
    text: "Rahbar samaradorligini baholashda qaysi mezon eng to‘g‘ri?",
    options: [
      "Kun davomida bajarilgan topshiriqlar soni",
      "Rahbarning ish joyida bo‘lgan soatlari",
      "Sarflangan vaqt va kuchga nisbatan ta’limiy hamda ijtimoiy natija",
      "O‘tkazilgan yig‘ilishlar soni"
    ],
    correctAnswer: 2,
    explanation: "Samaradorlik faoliyat hajmi emas, resurslardan foydalanish va natija nisbati bilan baholanadi.",
    points: 2
  }
];

/* =========================================================
   HARD — 30 TA
========================================================= */

export const HARD_QUESTIONS: Question[] = [

  {
    id: "m3t3-hard-001",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Direktor ish kunining eng samarali qismini strategik rejalashtirishga ajratdi, III kvadrantdagi ishlarni delegatsiya qildi va xabarlarni kun davomida bloklab tekshira boshladi. Ushbu kombinatsiyaning asosiy strategik mantiqi nima?",
    options: [
      "Rahbarning barcha operativ masalalardan butunlay voz kechishi",
      "Diqqatni yuqori ta’sirli vazifalarga jamlab, kognitiv resurslarning parchalanishini kamaytirish",
      "Nazoratni xodimlarga to‘liq topshirib, javobgarlikni kamaytirish",
      "Maktabdagi barcha kommunikatsiyani cheklash"
    ],
    correctAnswer: 1,
    explanation: "Uchala vosita ham rahbarning cheklangan vaqt va diqqat resurslarini yuqori qiymatli ishga yo‘naltiradi.",
    points: 3
  },

  {
    id: "m3t3-hard-002",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning strategik vazifalari muntazam kechikmoqda. Tahlilda uning ish vaqtining ko‘pi III kvadrantga ketayotgani aniqlandi. Eng mantiqiy birinchi chorani belgilang.",
    options: [
      "II kvadrantdagi vazifalarni ham vaqtincha to‘xtatish",
      "III kvadrantdagi vazifalarni aniqlab, delegatsiya qilinadigan qismini ajratish",
      "I kvadrantdagi vazifalarni rejalashtirishdan chiqarish",
      "IV kvadrantdagi barcha ishlarni rahbar zimmasiga olish"
    ],
    correctAnswer: 1,
    explanation: "III kvadrant ishlar shoshilinch ko‘rinsa-da, ko‘pincha rahbarning shaxsan bajarishini talab qilmaydi.",
    points: 3
  },

  {
    id: "m3t3-hard-003",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
   difficulty: "hard",
text: `Quyidagi bayonotlardan qaysilari samarali delegatsiya mantiqiga mos?
1. Natija mezoni aniq bo‘lishi kerak.
2. Ijrochi barcha qarorlarni rahbar bilan kelishishi kerak.
3. Zarur vakolat va resurs berilishi kerak.
4. Rahbar har bir bosqichni tekshirishi kerak.
5. Yakuniy natija bo‘yicha qayta aloqa berilishi kerak.`,
    options: [
      "1, 2, 3",
      "1, 3, 5",
      "2, 4, 5",
      "1, 2, 4, 5"
    ],
    correctAnswer: 1,
    explanation: "Delegatsiya aniq natija, vakolat-resurs va qayta aloqani talab qiladi; doimiy mikro nazorat esa uning mohiyatiga zid.",
    points: 3
  },

  {
    id: "m3t3-hard-004",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbar “ochiq eshik” siyosatini saqlamoqchi, lekin strategik vaqtini ham himoya qilmoqchi. Qaysi yechim ikki maqsadni muvozanatlashtiradi?",
    options: [
      "Qabulni butunlay bekor qilish",
      "Har qanday murojaatni kelishi bilan qabul qilish",
      "Qabul vaqtlarini belgilash va strategik ish uchun himoyalangan bloklar yaratish",
      "Murojaatlarni faqat yozma shaklga o‘tkazish"
    ],
    correctAnswer: 2,
    explanation: "Boshqariladigan ochiqlik muloqotni saqlaydi, lekin rahbarning strategik vaqtini ham himoya qiladi.",
    points: 3
  },

  {
    id: "m3t3-hard-005",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "80/20 tamoyili rahbarning vaqtini boshqarishda qaysi fikrni kuchaytiradi?",
    options: [
      "Har bir vazifaga bir xil vaqt ajratish adolatli",
      "Eng ko‘p vaqt oladigan ish eng muhim hisoblanadi",
      "Natijaning katta qismini shakllantiruvchi faoliyatlarni aniqlash zarur",
      "Ko‘p vazifalilik samaradorlikni avtomatik oshiradi"
    ],
    correctAnswer: 2,
    explanation: "Pareto mantig‘i vaqt hajmini emas, natijaga ta’sirni markazga qo‘yadi.",
    points: 3
  },

  {
    id: "m3t3-hard-006",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning kun oxiridagi refleksiyasi quyidagilardan qaysi biri bilan strategik ahamiyat kasb etadi?",
    options: [
      "Faqat bajarilgan ishlar ro‘yxatini tekshirish bilan",
      "Vaqt va qarorlar sifatidagi takrorlanuvchi naqshlarni aniqlab, keyingi rejalashtirishni o‘zgartirish bilan",
      "Faqat xodimlarning kamchiliklarini yozish bilan",
      "Rahbarning ish hajmini oshirish bilan"
    ],
    correctAnswer: 1,
    explanation: "Refleksiya bir martalik baho emas, takrorlanuvchi boshqaruv naqshlarini aniqlash vositasidir.",
    points: 3
  },

  {
    id: "m3t3-hard-007",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Kompetensiyalar auditi bilan self-assessment o‘rtasidagi eng muhim farq qaysi?",
    options: [
      "Self-assessment tashqi fikrga, audit esa faqat ichki fikrga tayanadi",
      "Kompetensiyalar auditi mavjud ko‘nikmalarni tizimli va xolisroq baholashga, self-assessment esa shaxsiy refleksiyaga ko‘proq tayanadi",
      "Ular o‘rtasida amaliy farq yo‘q",
      "Audit faqat strategik rejalashtirish uchun ishlatiladi"
    ],
    correctAnswer: 1,
    explanation: "Audit kompetensiyalarni tizimli baholashga yo‘naltiriladi; self-assessment esa shaxsning o‘z faoliyatiga bergan bahosidir.",
    points: 3
  },

  {
    id: "m3t3-hard-008",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Direktor yangi tizimni joriy etishda buyruq bermasdan uning foydasini tushuntirdi va o‘zi birinchi bo‘lib qo‘lladi. Agar xodimlar baribir qarshilik qilsa, qaysi keyingi qadam mantiqan kuchliroq?",
    options: [
      "Nazoratni keskin kuchaytirish",
      "Qarshilik sabablarini tinglash va tizimning foydasini jamoa ehtiyojlari bilan bog‘lash",
      "Tizimdan foydalanmaganlarni darhol jazolash",
      "Xodimlarni muhokamasiz almashtirish"
    ],
    correctAnswer: 1,
    explanation: "Yumshoq kuch va namuna bo‘lish dialog bilan to‘ldirilganda o‘zgarishga nisbatan ichki qabul kuchayadi.",
    points: 3
  },

  {
    id: "m3t3-hard-009",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "“Kecha–bugun–ertaga” tamoyilini faqat o‘tmish xatolarini tahlil qilishga tenglashtirish nima sababdan metodik jihatdan noto‘g‘ri?",
    options: [
      "Chunki tamoyil faqat kelajakni ko‘radi",
      "Chunki tamoyil tarixiy tahlil bilan birga bugungi holat va kelajakdagi yo‘nalishni bog‘laydi",
      "Chunki o‘tmish tahlili boshqaruvda kerak emas",
      "Chunki tamoyil faqat operatsion reja bilan bog‘liq"
    ],
    correctAnswer: 1,
    explanation: "Tamoyilning kuchi uch vaqt gorizontini yagona boshqaruv fikriga birlashtirishidadir.",
    points: 3
  },

  {
    id: "m3t3-hard-010",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning II kvadrantdagi ishlarni doimiy ravishda I kvadrantga aylantirib yuborishi qanday tizimli xavf tug‘diradi?",
    options: [
      "Strategik vazifalar doimiy kechiktirilib, muammolar inqirozga aylanishi mumkin",
      "Delegatsiya avtomatik ravishda ortadi",
      "Xodimlar kompetensiyasi avtomatik oshadi",
      "Rahbarning ish yuklamasi kamayadi"
    ],
    correctAnswer: 0,
    explanation: "Profilaktika va rivojlanish ishlari bajarilmasa, ular keyinchalik shoshilinch muammoga aylanishi mumkin.",
    points: 3
  },

  {
    id: "m3t3-hard-011",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Quyidagi juftliklardan qaysi biri noto‘g‘ri bog‘langan?",
    options: [
      "II kvadrant — murabbiylik",
      "III kvadrant — delegatsiya",
      "IV kvadrant — cheklash",
      "I kvadrant — uzoq muddatli rivojlanish"
    ],
    correctAnswer: 3,
    explanation: "I kvadrant muhim va shoshilinch vazifalardan iborat; uzoq muddatli rivojlanish II kvadrantga xos.",
    points: 3
  },

  {
    id: "m3t3-hard-012",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning professional rivojlanish strategiyasida qaysi kombinatsiya eng barqaror modelni beradi?",
    options: [
      "Majburiy kurs + attestatsiya",
      "Kitob + kurs + webinar + mentorlik + refleksiya + amaliy tajriba",
      "Faqat tajribali rahbarni kuzatish",
      "Faqat internetdagi qisqa videolar"
    ],
    correctAnswer: 1,
    explanation: "Diversifikatsiya turli o‘rganish manbalarini birlashtiradi.",
    points: 3
  },

  {
    id: "m3t3-hard-013",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning “ko‘proq ishlash”ni “samaraliroq ishlash” deb qabul qilishi qaysi xatoga olib keladi?",
    options: [
      "Natija va resurs nisbatini e’tibordan chetda qoldirishga",
      "Strategik fikrlashning ortishiga",
      "Delegatsiyaning kuchayishiga",
      "II kvadrantning rivojlanishiga"
    ],
    correctAnswer: 0,
    explanation: "Samaradorlik ish soati soni emas, sarflangan resursga nisbatan olingan natijadir.",
    points: 3
  },

  {
    id: "m3t3-hard-014",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbar kun davomida ko‘plab kichik vazifalarni bajarib, “juda band” bo‘ldi, lekin maktab rivojlanish strategiyasiga siljish bo‘lmadi. Eng ehtimoliy sabab?",
    options: [
      "Vaqtni faqat operatsion vazifalar egallagan",
      "Xodimlar juda ko‘p bo‘lgan",
      "Strategik maqsadlar keraksiz bo‘lgan",
      "Monitoring haddan tashqari kam bo‘lgan"
    ],
    correctAnswer: 0,
    explanation: "Bandlik har doim samaradorlikni anglatmaydi; yuqori ta’sirli II kvadrant vazifalari himoyalanmagan bo‘lishi mumkin.",
    points: 3
  },

  {
    id: "m3t3-hard-015",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Delegatsiya muvaffaqiyatli bo‘lishi uchun qaysi uchta shart eng muhim?",
    options: [
      "Ko‘rsatma, doimiy nazorat, hisobot",
      "Natija mezoni, vakolat-resurs, qayta aloqa",
      "Majlis, nazorat, ogohlantirish",
      "Vazifa, jarima, muddat"
    ],
    correctAnswer: 1,
    explanation: "Bu uchlik ijrochiga mustaqil harakat qilish va natija uchun javob berish imkonini beradi.",
    points: 3
  },

  {
    id: "m3t3-hard-016",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Qaysi holatda “chuqur ishlash” noto‘g‘ri tashkil etilgan hisoblanadi?",
    options: [
      "Strategik reja ustida chalg‘ituvchisiz ishlash",
      "Murakkab tahlil uchun himoyalangan vaqt ajratish",
      "Har besh daqiqada messenjerlarni tekshirish",
      "Eng yuqori kognitiv quvvat vaqtini murakkab vazifaga sarflash"
    ],
    correctAnswer: 2,
    explanation: "Doimiy raqamli chalg‘itish chuqur ishning asosiy shartini buzadi.",
    points: 3
  },

  {
    id: "m3t3-hard-017",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Axborot gigiyenasi va batchingning umumiy boshqaruv mantig‘i nimada?",
    options: [
      "Ko‘proq xabar va vazifani bir vaqtning o‘zida bajarishda",
      "Diqqat va vaqtni kontekst almashinuvidan himoyalashda",
      "Muloqotni butunlay cheklashda",
      "Rahbarni barcha ishni o‘zi bajarishga undashda"
    ],
    correctAnswer: 1,
    explanation: "Ikkalasi ham rahbarning kognitiv resurslarini tartibsiz almashinishdan himoya qiladi.",
    points: 3
  },

  {
    id: "m3t3-hard-018",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
 text: `Quyidagi bayonotlardan qaysilari o‘sish tafakkuriga mos?

1. Xato — ma’lumot manbai.
2. Muvaffaqiyatsizlik — o‘rganish imkoniyati.
3. Qobiliyat o‘zgarmaydi.
4. Muammo yangi strategiyani sinashga sabab bo‘lishi mumkin.
5. Xatodan qochish eng xavfsiz rivojlanish yo‘lidir.`,
    options: [
      "1, 2, 4",
      "1, 3, 5",
      "2, 3, 4",
      "1, 2, 3, 4"
    ],
    correctAnswer: 0,
    explanation: "Growth mindset xato va muammolarni rivojlanish uchun ma’lumot sifatida ko‘radi.",
    points: 3
  },

  {
    id: "m3t3-hard-019",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Strategik rejalashtirish va operatsion rejalashtirish o‘rtasidagi eng muhim bog‘lanish qaysi?",
    options: [
      "Operatsion reja strategiyani bekor qiladi",
      "Strategik maqsad operatsion harakatlarga tarjima qilinadi",
      "Operatsion vazifalar strategik maqsadga bog‘liq emas",
      "Ikkalasi bir xil mazmunga ega"
    ],
    correctAnswer: 1,
    explanation: "Strategiya yo‘nalishni beradi, operatsion reja uni kundalik ijroga aylantiradi.",
    points: 3
  },

  {
    id: "m3t3-hard-020",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbar 80/20 asosida eng ta’sirli vazifalarni aniqladi, ammo ularning barchasini o‘zi bajarishga qaror qildi. Qaysi prinsip e’tibordan chetda qoldi?",
    options: [
      "Delegatsiya",
      "Strategik rejalashtirish",
      "Self-assessment",
      "Axborot gigiyenasi"
    ],
    correctAnswer: 0,
    explanation: "Yuqori ta’sirli vazifalarning hammasi rahbarning shaxsan bajarishi shart emas; vakolatga mos ravishda taqsimlash zarur.",
    points: 3
  },

  {
    id: "m3t3-hard-021",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbar o‘zining kuchli va zaif tomonlarini SWOT orqali aniqladi, keyin 360 darajali feedback oldi va kompetensiyalar auditini o‘tkazdi. Ushbu ketma-ketlikning eng kuchli jihati nima?",
    options: [
      "Bir xil ma’lumotni uch marta takrorlash",
      "Ichki, tashqi va kompetensiyaviy nuqtai nazarlarni birlashtirish",
      "Faqat rahbarning o‘z fikriga tayanish",
      "Faqat xodimlar fikrini hisobga olish"
    ],
    correctAnswer: 1,
    explanation: "Turli vositalar rahbar rivojlanishining turli o‘lchamlarini ochib beradi.",
    points: 3
  },

  {
    id: "m3t3-hard-022",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning kun boshidagi 90 daqiqani strategik vazifaga ajratishi qaysi sabab bilan eng asosli?",
    options: [
      "Ertalab barcha muammolar tugagan bo‘ladi",
      "Kognitiv resurslar va diqqatni yuqori qiymatli vazifaga yo‘naltirish imkoniyati yuqori",
      "Xodimlar hali ishga kelmagan bo‘ladi",
      "Telefonlar ishlamaydi"
    ],
    correctAnswer: 1,
    explanation: "Bu universal vaqt emas, balki rahbarning eng yuqori aqliy quvvat davrini himoyalash g‘oyasidir.",
    points: 3
  },

  {
    id: "m3t3-hard-023",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
 text: `Quyidagi besh fikrdan qaysilari strategik vaqt boshqaruviga mos?

1. Muhim ishni oldindan kalendarga qo‘yish.
2. Strategik ishni bo‘sh vaqtga qoldirish.
3. III kvadrantni delegatsiya qilish.
4. Raqamli chalg‘ituvchilarni bloklash.
5. Barcha murojaatga darhol javob berish.",
    options: [
      "1, 2, 3",
      "1, 3, 4",
      "2, 4, 5",
      "1, 2, 4, 5"
    ],
    correctAnswer: 1,
    explanation: "Strategik vaqt oldindan himoyalanadi, III kvadrant delegatsiya qilinadi, chalg‘ituvchilar kamaytiriladi.",
    points: 3
  },

  {
    id: "m3t3-hard-024",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "“Rahbarning barcha ishni o‘zi bajarishi — samaradorlik belgisi” degan fikr nima sababdan noto‘g‘ri?",
    options: [
      "Rahbar hech qanday vazifani bajarmasligi kerak",
      "Rahbarning asosiy vazifasi faqat nazorat",
      "Bu fikr vakolat taqsimoti, jamoa salohiyati va strategik vaqtni e’tibordan chetda qoldiradi",
      "Barcha vazifalarni xodimlar bajarishi kerak"
    ],
    correctAnswer: 2,
    explanation: "Rahbarning qiymati hamma ishni o‘zi bajarishida emas, tizim va jamoa salohiyatini boshqarishidadir.",
    points: 3
  },

  {
    id: "m3t3-hard-025",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Quyidagi qaysi vaziyatda rahbar “strategik vaqtni himoyalash”ni noto‘g‘ri tushungan?",
    options: [
      "Qabul vaqtlarini belgilaganida",
      "Chuqur ish blokini oldindan kalendarga qo‘yganida",
      "Strategik vaqt bahonasida jamoa bilan barcha muloqotni to‘xtatganida",
      "Mayda ishlarni guruhlab bajarganida"
    ],
    correctAnswer: 2,
    explanation: "Vaqtni himoyalash muloqotni yo‘q qilish emas, uni boshqariladigan shaklga keltirishdir.",
    points: 3
  },

  {
    id: "m3t3-hard-026",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbar bir turdagi hujjatlarni kunning ma’lum vaqtida birgalikda ko‘rib chiqadi. Bu batchingning qaysi afzalligini ko‘rsatadi?",
    options: [
      "Har bir hujjatni alohida ustuvor qilish",
      "Kontekst almashinuvi xarajatini kamaytirish",
      "Delegatsiyani bekor qilish",
      "Strategik ishlarni qisqartirish"
    ],
    correctAnswer: 1,
    explanation: "Bir xil turdagi ishlarni guruhlash diqqatni qayta-qayta boshqa kontekstga o‘tkazish ehtiyojini kamaytiradi.",
    points: 3
  },

  {
    id: "m3t3-hard-027",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "AI vositalaridan foydalanishni o‘rganish bilan “o‘sish tafakkuri” o‘rtasidagi bog‘lanish qaysi?",
    options: [
      "Ikkalasi ham o‘zgarishdan qochishni talab qiladi",
      "Ikkalasi ham yangi vosita va muammolarni o‘rganish imkoniyati sifatida ko‘rishga undaydi",
      "AI faqat qotib qolgan tafakkurga mos",
      "Growth mindset texnologiyaga qarshi"
    ],
    correctAnswer: 1,
    explanation: "Yangi texnologiyani o‘rganishga tayyorlik rivojlanishga ochiq tafakkurning amaliy ko‘rinishidir.",
    points: 3
  },

  {
    id: "m3t3-hard-028",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Quyidagi ketma-ketliklardan qaysi biri rahbarning rivojlanish siklini mantiqan to‘g‘ri ifodalaydi?",
    options: [
      "Nazorat → jazo → hisobot → takrorlash",
      "O‘zini baholash → ehtiyojni aniqlash → rivojlanish harakati → qayta aloqa → qayta baholash",
      "Majlis → topshiriq → nazorat → majlis",
      "Kurs → sertifikat → lavozim → yakun"
    ],
    correctAnswer: 1,
    explanation: "Rivojlanish sikli doimiy baholash, harakat, feedback va qayta baholashni talab qiladi.",
    points: 3
  },

  {
    id: "m3t3-hard-029",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "hard",
    text: "Rahbarning shaxsiy samaradorligini oshirishda “natija” va “faoliyat” o‘rtasidagi farq qaysi variantda to‘g‘ri ifodalangan?",
    options: [
      "Ko‘p majlis — natija",
      "Ko‘p hujjat — natija",
      "Faoliyat bajarilishi natijani kafolatlamaydi; ta’sir va maqsadga erishish ham baholanishi kerak",
      "Ish soati qancha ko‘p bo‘lsa, natija shuncha yuqori"
    ],
    correctAnswer: 2,
    explanation: "Menejmentda bandlik bilan natijadorlikni farqlash muhim.",
    points: 3
  },

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
    explanation: "1, 2 va 4 strategik vaqt va delegatsiya mantig‘iga mos; 3 va 5 noto‘g‘ri.",
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

  {
    id: "m3t3-case-002",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `154-sonli maktab direktorining kunini xabarlar, uchrashuvlar va ota-onalar murojaatlari egallab olmoqda. U strategik vazifalarni keyinga suradi. Ayrim vazifalarni topshirgan bo‘lsa-da, ijro jarayoniga qayta-qayta aralashadi.

Quyidagi harakatlardan qaysi uchlik eng maqbul?`,
    options: [
      "1, 2, 5",
      "1, 3, 6",
      "2, 3, 4",
      "3, 4, 6"
    ],
    correctAnswer: 1,
    explanation: "Strategik vaqt bloklari, natijaviy delegatsiya va batching/axborot gigiyenasi birgalikda muammoni hal qiladi.",
    points: 3
  },

  {
    id: "m3t3-case-003",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `167-sonli maktab direktorining strategik ishlari muntazam kechikmoqda. Ustuvor vazifalarni ajratish, tezkor oqimni moslashuvchan boshqarish, delegatsiyani kuchaytirish va professional rivojlanishni diversifikatsiya qilish zarur.

Qaysi variant eng to‘liq yechimni beradi?`,
    options: [
      "2, 3, 5",
      "1, 3, 4, 6",
      "1, 2, 5",
      "1, 2, 4, 5"
    ],
    correctAnswer: 3,
    explanation: "1, 2, 4, 5 strategik ustuvorlik, moslashuvchan rejalashtirish, samarali delegatsiya va rivojlanishni qamrab oladi.",
    points: 3
  },

  {
    id: "m3t3-case-004",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `146-sonli maktab direktorining kuni uchrashuvlar, xabarlar va tezkor murojaatlar bilan to‘lib ketmoqda. U strategik vazifalarni kechiktirmoqda.

Quyidagi yondashuvlardan qaysi biri eng tizimli?`,
    options: [
      "Faqat strategik vazifalarni bajarish",
      "Uchrashuvlarni butunlay bekor qilish",
      "Kunlik ishlarni teng taqsimlash va barcha murojaatga darhol javob berish",
      "Strategik bloklar, tartiblangan qabul va batchingni birlashtirish"
    ],
    correctAnswer: 3,
    explanation: "D varianti vaqtni himoyalash, ochiqlikni boshqarish va kontekst almashuvini kamaytirishni birlashtiradi.",
    points: 3
  },

  {
    id: "m3t3-case-005",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `173-sonli maktab direktorining fikricha, barcha vazifalarni shaxsan bajarish samaradorlikni oshiradi. O‘rinbosarlar esa buni mikromenejment deb baholamoqda.

Quyidagi uch fikrni baholang:

1. Rahbarning eng samarali vaqtini II kvadrantga ajratish samaradorlikni oshiradi.
2. Delegatsiyada vakolat va resurs berish shart emas.
3. Professional rivojlanish faqat majburiy kurslar bilan cheklanmaydi.

To‘g‘ri javob qaysi?`,
    options: [
      "1 — Noto‘g‘ri, 2 — To‘g‘ri, 3 — To‘g‘ri",
      "1 — To‘g‘ri, 2 — Noto‘g‘ri, 3 — To‘g‘ri",
      "1 — Noto‘g‘ri, 2 — Noto‘g‘ri, 3 — To‘g‘ri",
      "1 — To‘g‘ri, 2 — To‘g‘ri, 3 — Noto‘g‘ri"
    ],
    correctAnswer: 1,
    explanation: "1 va 3 to‘g‘ri; 2 noto‘g‘ri, chunki vakolatsiz delegatsiya samarali ishlamaydi.",
    points: 3
  },

  {
    id: "m3t3-case-006",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `Direktor ish kunining eng unumli vaqtida strategik reja ustida ishlamoqchi. Shu paytda doimiy telefon qo‘ng‘iroqlari va messenjer xabarlari kelmoqda.

Qaysi qaror eng to‘g‘ri?`,
    options: [
      "Strategik ishni kechiktirish",
      "Barcha xabarlarga darhol javob berish",
      "Chuqur ish blokini himoyalash, xabarlarni belgilangan vaqt blokida ko‘rib chiqish",
      "Telefonni butun ish kuni o‘chirib qo‘yish"
    ],
    correctAnswer: 2,
    explanation: "Axborot gigiyenasi va chuqur ishlash muvozanatini saqlash kerak.",
    points: 3
  },

  {
    id: "m3t3-case-007",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `Direktor metodik seminar tashkil etishni o‘rinbosariga topshirdi. Seminar maqsadi va kutilayotgan natijani belgiladi, zarur resurslarni berdi. Keyin har bir ish bosqichini tekshirmadi, faqat yakuniy natijani baholadi.

Bu holat nimani ko‘rsatadi?`,
    options: [
      "Mikromenejment",
      "Natijaviy delegatsiya",
      "Nazoratning yo‘qligi",
      "Rahbarning mas’uliyatdan voz kechishi"
    ],
    correctAnswer: 1,
    explanation: "Vazifa, natija, vakolat va resurs berilib, ijro usuli xodimga qoldirilgan.",
    points: 3
  },

  {
    id: "m3t3-case-008",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `Direktor maktab reytingi pasayganini ko‘rib, aybdor qidirish o‘rniga sabablarni jamoa bilan tahlil qildi. Ayrim xatolarni yangi usullarni sinash uchun ma’lumot sifatida ko‘rdi.

Qaysi tafakkur modeli ustun?`,
    options: [
      "Qotib qolgan tafakkur",
      "O‘sish tafakkuri",
      "Faqat operatsion tafakkur",
      "Nazorat tafakkuri"
    ],
    correctAnswer: 1,
    explanation: "Muammoni o‘rganish va rivojlanish imkoniyati sifatida ko‘rish growth mindsetga xos.",
    points: 3
  },

  {
    id: "m3t3-case-009",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `Direktor yangi elektron tizimni joriy qilmoqchi. O‘qituvchilar ayrim xavotirlarni bildirdi. Direktor tizimni majburan joriy etish o‘rniga uning foydasini tushuntirdi, o‘qituvchilar fikrini tingladi va tizimdan birinchi bo‘lib o‘zi foydalandi.

Bu holatda qaysi uchta yondashuv uyg‘unlashgan?`,
    options: [
      "Mikromenejment, nazorat, qattiq kuch",
      "Yumshoq kuch, muloqot va shaxsiy namuna",
      "Operatsion reja, hisobot va monitoring",
      "Delegatsiya, jazo va monitoring"
    ],
    correctAnswer: 1,
    explanation: "Foydani tushuntirish — yumshoq kuch; tinglash — muloqot; o‘zi foydalanish — namuna.",
    points: 3
  },

  {
    id: "m3t3-case-010",
    moduleId: MODULE_ID,
    topicId: TOPIC_ID,
    difficulty: "case",
    text: `Direktor o‘z faoliyatini tahlil qilib, quyidagilarni aniqladi: strategik ishlar kechikmoqda, III kvadrantdagi mayda ishlar ko‘p, xabarlar diqqatni bo‘lmoqda, o‘rinbosarlar esa yetarli vakolatga ega emas.

Uchta chorani birinchi navbatda belgilashi kerak:

1. Strategik ishlar uchun himoyalangan vaqt bloklari yaratish.
2. III kvadrant ishlarini delegatsiya qilish.
3. Barcha qarorlarni yana direktorning o‘zida jamlash.
4. Axborot gigiyenasini joriy etish.
5. O‘rinbosarlar vakolatini kamaytirish.

Qaysi kombinatsiya eng maqbul?`,
    options: [
      "1, 2, 4",
      "1, 3, 5",
      "2, 3, 4",
      "1, 4, 5"
    ],
    correctAnswer: 0,
    explanation: "Strategik vaqt, delegatsiya va axborot gigiyenasi muammoning asosiy sabablariga bevosita ta’sir qiladi.",
    points: 3
  }
];

/* =========================================================
   BARCHA SAVOLLAR
========================================================= */

export const M3T3_QUESTIONS: Question[] = [
  ...EASY_QUESTIONS,
  ...MEDIUM_QUESTIONS,
  ...HARD_QUESTIONS,
  ...CASE_QUESTIONS
];

/* =========================================================
   STATISTIKA
========================================================= */

export const M3T3_QUESTION_COUNT = M3T3_QUESTIONS.length;

export default M3T3_QUESTIONS;
