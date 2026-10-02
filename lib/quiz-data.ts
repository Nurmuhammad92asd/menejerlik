export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}

export type Category = {
  id: string
  title: string
  description: string
  questions: Question[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'asoslar',
    title: 'Menejment asoslari',
    description: 'Boshqaruv funksiyalari va maktablari',
    questions: [
      {
        id: 'a1',
        text: 'Menejmentning asosiy funksiyalari qaysilar?',
        options: [
          'Rejalashtirish, tashkil etish, motivatsiya, nazorat',
          'Ishlab chiqarish, sotish, xarid qilish',
          'Reklama, savdo, logistika',
          'Hisob, audit, soliq',
        ],
        answer: 0,
        explanation:
          "Klassik yondashuvga ko'ra, boshqaruv jarayoni rejalashtirish, tashkil etish, motivatsiya va nazoratdan iborat.",
      },
      {
        id: 'a2',
        text: '“Ilmiy boshqaruv” maktabining asoschisi kim?',
        options: ['Frederik Teylor', 'Anri Fayol', 'Elton Meyo', 'Piter Druker'],
        answer: 0,
        explanation:
          "Frederik Teylor mehnatni ilmiy tashkil etish va ish jarayonlarini o'lchash g'oyalarini ilgari surgan.",
      },
      {
        id: 'a3',
        text: "Ma'muriy (klassik) boshqaruv maktabining asoschisi kim?",
        options: ['Anri Fayol', 'Frederik Teylor', 'Abraham Maslou', 'Maks Veber'],
        answer: 0,
        explanation: "Anri Fayol boshqaruvning 14 tamoyilini ishlab chiqqan va ma'muriy maktabga asos solgan.",
      },
      {
        id: 'a4',
        text: 'SWOT tahlilida “O” harfi nimani anglatadi?',
        options: ['Imkoniyatlar', 'Tashkilot', 'Majburiyatlar', 'Natijalar'],
        answer: 0,
        explanation: 'SWOT: Strengths (kuchli tomonlar), Weaknesses (zaif tomonlar), Opportunities (imkoniyatlar), Threats (tahdidlar).',
      },
      {
        id: 'a5',
        text: 'SMART maqsad mezonlarida “M” nimani bildiradi?',
        options: ["O'lchanadigan", 'Motivatsion', 'Minimal', 'Moslashuvchan'],
        answer: 0,
        explanation: "M — Measurable, ya'ni maqsad natijasini aniq o'lchash mumkin bo'lishi kerak.",
      },
      {
        id: 'a6',
        text: 'Boshqaruv ko‘lami (span of control) nima?',
        options: [
          "Bitta rahbarga bevosita bo'ysunuvchi xodimlar soni",
          'Kompaniya filiallari soni',
          'Boshqaruv darajalari soni',
          'Tashkilot budjetining hajmi',
        ],
        answer: 0,
        explanation: "Boshqaruv ko'lami bir rahbar samarali boshqara oladigan bevosita bo'ysunuvchilar sonini bildiradi.",
      },
      {
        id: 'a7',
        text: 'Xotorn (Hawthorne) tajribalari qaysi maktab rivojiga asos bo‘lgan?',
        options: ['Insoniy munosabatlar maktabi', 'Ilmiy boshqaruv maktabi', 'Miqdoriy maktab', "Ma'muriy maktab"],
        answer: 0,
        explanation:
          "Elton Meyo boshchiligidagi tajribalar ijtimoiy omillar va e'tiborning mehnat unumdorligiga ta'sirini ko'rsatgan.",
      },
      {
        id: 'a8',
        text: 'Strategik rejalashtirish odatda qaysi muddatni qamrab oladi?',
        options: ["Uzoq muddat (3–5 yil va undan ko'p)", 'Bir hafta', 'Bir oy', 'Bir kun'],
        answer: 0,
        explanation: "Strategik reja tashkilotning uzoq muddatli yo'nalishi va maqsadlarini belgilaydi.",
      },
    ],
  },
  {
    id: 'liderlik',
    title: 'Liderlik va motivatsiya',
    description: 'Rahbarlik uslublari va nazariyalari',
    questions: [
      {
        id: 'l1',
        text: 'Maslou ehtiyojlar piramidasining eng yuqori pog‘onasi qaysi?',
        options: ["O'zini namoyon qilish", 'Xavfsizlik', 'Fiziologik ehtiyojlar', 'Ijtimoiy ehtiyojlar'],
        answer: 0,
        explanation: "Piramida cho'qqisida o'z salohiyatini to'liq ro'yobga chiqarish (self-actualization) turadi.",
      },
      {
        id: 'l2',
        text: 'Gersbergning ikki omilli nazariyasida “gigiyena omillari”ga nima kiradi?',
        options: ['Ish haqi va ish sharoitlari', "Yutuq va e'tirof", "Mas'uliyat", "O'sish imkoniyati"],
        answer: 0,
        explanation:
          "Gigiyena omillari norozilikning oldini oladi, ammo o'zi kuchli motivatsiya bermaydi. Yutuq va e'tirof — motivatorlar.",
      },
      {
        id: 'l3',
        text: 'MakGregorning “X nazariyasi”ga ko‘ra xodimlar qanday?',
        options: [
          'Ishni yoqtirmaydi va qattiq nazoratga muhtoj',
          "Tashabbuskor va mas'uliyatni yoqtiradi",
          "O'zini o'zi boshqaradi",
          'Faqat ijodiy ishga intiladi',
        ],
        answer: 0,
        explanation: "X nazariyasi passiv xodim modelini, Y nazariyasi esa faol va mas'uliyatli xodim modelini tavsiflaydi.",
      },
      {
        id: 'l4',
        text: 'Qarorlarni jamoa bilan birgalikda qabul qiluvchi rahbar uslubi qanday ataladi?',
        options: ['Demokratik', 'Avtoritar', 'Liberal', 'Byurokratik'],
        answer: 0,
        explanation: "Demokratik uslubda rahbar xodimlarni qaror qabul qilish jarayoniga jalb qiladi.",
      },
      {
        id: 'l5',
        text: '“Laissez-faire” liderlik uslubi nimani anglatadi?',
        options: [
          'Xodimlarga maksimal erkinlik berish',
          "Barcha qarorlarni yakka o'zi qabul qilish",
          'Qat’iy qoidalar asosida boshqarish',
          'Faqat jazo orqali boshqarish',
        ],
        answer: 0,
        explanation: "Liberal (laissez-faire) uslubda rahbar jarayonga kam aralashadi va jamoaga erkinlik beradi.",
      },
      {
        id: 'l6',
        text: 'Transformatsion liderning asosiy xususiyati nima?',
        options: [
          "Jamoani ilhomlantirib, o'zgarishlarga yetaklash",
          'Faqat mukofot va jazo almashinuvi',
          'Vazifalarni nazoratsiz qoldirish',
          'Faqat qoidalarga amal qilish',
        ],
        answer: 0,
        explanation: "Transformatsion lider umumiy g'oya (vizyon) orqali xodimlarni rivojlanish va o'zgarishga ruhlantiradi.",
      },
      {
        id: 'l7',
        text: 'Vrumning kutish nazariyasiga ko‘ra motivatsiya nimaga bog‘liq?',
        options: [
          "Harakat natija va qadrli mukofotga olib kelishiga bo'lgan ishonchga",
          'Faqat ish haqi miqdoriga',
          'Ish joyining joylashuviga',
          "Xodimning yoshiga",
        ],
        answer: 0,
        explanation: "Kutish nazariyasi: kutilma, vositachilik va mukofot qadri (valentlik) motivatsiyani belgilaydi.",
      },
      {
        id: 'l8',
        text: 'Delegatsiya nima?',
        options: [
          "Vakolat va vazifalarni bo'ysunuvchilarga topshirish",
          'Xodimni ishdan bo‘shatish',
          "Yig'ilish o'tkazish",
          'Budjetni qisqartirish',
        ],
        answer: 0,
        explanation: "Delegatsiya rahbarga strategik ishlarga vaqt ajratish va xodimlarni rivojlantirish imkonini beradi.",
      },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Bozor, brend va mijozlar',
    questions: [
      {
        id: 'm1',
        text: 'Marketing miksi “4P” qaysi elementlardan iborat?',
        options: [
          "Mahsulot, narx, joy (taqsimot), rag'batlantirish",
          'Reja, jarayon, odamlar, foyda',
          'Narx, foyda, sheriklik, mahsulot',
          "Brend, reklama, sotuv, xizmat",
        ],
        answer: 0,
        explanation: '4P: Product, Price, Place, Promotion.',
      },
      {
        id: 'm2',
        text: 'Bozor segmentatsiyasi nima?',
        options: [
          "Iste'molchilarni o'xshash xususiyatlari bo'yicha guruhlarga bo'lish",
          "Narxni bir necha bor pasaytirish",
          "Raqobatchilarni bozordan siqib chiqarish",
          "Mahsulotni bir nechta qismga bo'lish",
        ],
        answer: 0,
        explanation: "Segmentatsiya maqsadli auditoriyani aniqlash va unga mos taklif tayyorlashga yordam beradi.",
      },
      {
        id: 'm3',
        text: 'Mahsulot hayotiy siklining to‘g‘ri bosqichlari ketma-ketligi qaysi?',
        options: [
          "Joriy etish, o'sish, yetuklik, pasayish",
          "O'sish, joriy etish, pasayish, yetuklik",
          "Yetuklik, o'sish, joriy etish, pasayish",
          "Pasayish, yetuklik, o'sish, joriy etish",
        ],
        answer: 0,
        explanation: "Har bir bosqichda marketing strategiyasi va xarajatlar farq qiladi.",
      },
      {
        id: 'm4',
        text: 'Brend deganda nima tushuniladi?',
        options: [
          'Mahsulotni raqobatchilardan ajratib turuvchi nom, belgi va obraz',
          'Faqat mahsulot qadog‘i',
          "Kompaniyaning yillik hisoboti",
          'Ombor manzili',
        ],
        answer: 0,
        explanation: "Brend — iste'molchi ongidagi mahsulot yoki kompaniya haqidagi yaxlit tasavvur.",
      },
      {
        id: 'm5',
        text: 'B2B modeli nimani anglatadi?',
        options: [
          "Kompaniyalar o'rtasidagi savdo",
          "Kompaniya va oddiy iste'molchi o'rtasidagi savdo",
          "Iste'molchilar o'rtasidagi savdo",
          "Davlat va fuqaro o'rtasidagi munosabat",
        ],
        answer: 0,
        explanation: 'B2B — Business to Business. Oddiy xaridorga sotish B2C deb ataladi.',
      },
      {
        id: 'm6',
        text: 'CRM tizimi nima uchun ishlatiladi?',
        options: [
          'Mijozlar bilan munosabatlarni boshqarish uchun',
          'Faqat buxgalteriya hisobi uchun',
          'Ishlab chiqarish uskunalarini boshqarish uchun',
          "Ofis jihozlarini hisobga olish uchun",
        ],
        answer: 0,
        explanation: 'CRM — Customer Relationship Management: mijozlar, savdo va aloqalar tarixini bir joyda yuritish.',
      },
      {
        id: 'm7',
        text: 'BCG matritsasida “Yulduzlar” qanday mahsulotlar?',
        options: [
          "Yuqori o'sish sur'ati va yuqori bozor ulushiga ega",
          "Past o'sish va past ulushga ega",
          "Past o'sish va yuqori ulushga ega",
          "Yuqori o'sish va past ulushga ega",
        ],
        answer: 0,
        explanation: "Past o'sish + yuqori ulush — “Sog'in sigirlar”, yuqori o'sish + past ulush — “So'roq belgilari”.",
      },
      {
        id: 'm8',
        text: 'Marketingda “konversiya” nimani bildiradi?',
        options: [
          'Maqsadli harakatni bajargan foydalanuvchilar ulushi',
          'Valyuta kursining o‘zgarishi',
          'Mahsulot qadog‘ini almashtirish',
          'Xodimlar sonining ortishi',
        ],
        answer: 0,
        explanation: "Masalan, saytga kirgan 1000 kishidan 50 tasi xarid qilsa, konversiya 5% bo'ladi.",
      },
    ],
  },
  {
    id: 'moliya',
    title: 'Moliyaviy menejment',
    description: 'Daromad, xarajat va investitsiya',
    questions: [
      {
        id: 'f1',
        text: 'Likvidlik nima?',
        options: [
          'Aktivlarni tez va kam yo‘qotish bilan pulga aylantirish qobiliyati',
          'Kompaniyaning yillik foydasi',
          'Xodimlar soni',
          'Soliq stavkasi',
        ],
        answer: 0,
        explanation: "Yuqori likvidlik kompaniya joriy majburiyatlarini o'z vaqtida to'lay olishini ko'rsatadi.",
      },
      {
        id: 'f2',
        text: 'ROI (investitsiya rentabelligi) qanday hisoblanadi?',
        options: [
          '(Foyda − Investitsiya) / Investitsiya × 100%',
          'Investitsiya × Foyda',
          'Daromad − Soliq',
          'Aktivlar / Majburiyatlar',
        ],
        answer: 0,
        explanation: "ROI qo'yilgan mablag' qanchalik samarali ishlaganini foizda ko'rsatadi.",
      },
      {
        id: 'f3',
        text: 'Zararsizlik nuqtasi (break-even) nima?',
        options: [
          'Daromad umumiy xarajatlarga teng bo‘lgan nuqta',
          'Foyda eng yuqori bo‘lgan nuqta',
          'Sotuvlar nolga tushgan nuqta',
          'Narx eng past bo‘lgan nuqta',
        ],
        answer: 0,
        explanation: "Bu nuqtada kompaniya na foyda, na zarar ko'radi. Undan keyingi har bir sotuv foyda keltiradi.",
      },
      {
        id: 'f4',
        text: 'Sof aylanma kapital qanday hisoblanadi?',
        options: [
          'Joriy aktivlar − Joriy majburiyatlar',
          'Asosiy vositalar + Joriy aktivlar',
          'Daromad − Xarajat',
          'Kapital − Kreditlar',
        ],
        answer: 0,
        explanation: "Ijobiy sof aylanma kapital qisqa muddatli moliyaviy barqarorlikni bildiradi.",
      },
      {
        id: 'f5',
        text: 'Quyidagilardan qaysi biri doimiy xarajatga misol bo‘ladi?',
        options: ['Ofis ijarasi', 'Xomashyo', 'Ishbay ish haqi', 'Qadoqlash materiallari'],
        answer: 0,
        explanation: "Doimiy xarajatlar ishlab chiqarish hajmiga bog'liq emas. Xomashyo va qadoqlash — o'zgaruvchan xarajatlar.",
      },
      {
        id: 'f6',
        text: 'Pulning vaqt qiymati tamoyili nimani anglatadi?',
        options: [
          'Bugungi pul kelajakdagi xuddi shu summadan qimmatroq',
          'Pul qiymati hech qachon o‘zgarmaydi',
          'Kelajakdagi pul har doim qimmatroq',
          'Pul faqat inflyatsiya tufayli o‘sadi',
        ],
        answer: 0,
        explanation: "Bugungi pulni investitsiya qilib, foiz yoki daromad olish mumkin — shuning uchun u qimmatroq.",
      },
      {
        id: 'f7',
        text: 'Budjet nima?',
        options: [
          'Ma’lum davr uchun daromad va xarajatlar rejasi',
          "Kompaniyaning bank hisob raqami",
          "O'tgan yilgi foyda",
          "Xodimlar ro'yxati",
        ],
        answer: 0,
        explanation: "Budjet resurslarni rejalashtirish va xarajatlarni nazorat qilish vositasi hisoblanadi.",
      },
      {
        id: 'f8',
        text: 'Investitsiyada diversifikatsiya nima uchun qo‘llaniladi?',
        options: [
          'Xavfni kamaytirish uchun mablag‘ni turli aktivlarga taqsimlash',
          "Barcha mablag'ni bitta aktivga joylash",
          "Soliqlardan butunlay qochish",
          'Daromadni kafolatlash',
        ],
        answer: 0,
        explanation: "“Barcha tuxumlarni bitta savatga qo'ymaslik” — bir aktivdagi yo'qotish boshqalari bilan qoplanadi.",
      },
    ],
  },
  {
    id: 'kadrlar',
    title: 'Kadrlar boshqaruvi',
    description: 'HR, jamoa va baholash',
    questions: [
      {
        id: 'h1',
        text: 'Onboarding nima?',
        options: [
          'Yangi xodimni tashkilotga moslashtirish jarayoni',
          'Xodimni ishdan bo‘shatish',
          'Yillik bonus berish',
          'Ofisni ta’mirlash',
        ],
        answer: 0,
        explanation: "Sifatli onboarding yangi xodimning tezroq samarali ishlashiga va kompaniyada qolishiga yordam beradi.",
      },
      {
        id: 'h2',
        text: 'KPI nimani anglatadi?',
        options: [
          'Asosiy samaradorlik ko‘rsatkichlari',
          'Kompaniyaning ichki pasporti',
          "Kadrlar bo'limi instruktsiyasi",
          'Kredit foiz indeksi',
        ],
        answer: 0,
        explanation: "KPI — Key Performance Indicators: maqsadlarga erishish darajasini o'lchaydigan ko'rsatkichlar.",
      },
      {
        id: 'h3',
        text: 'Kadrlar qo‘nimsizligi (turnover) nima?',
        options: [
          "Ma'lum davrda ishdan ketgan xodimlar ulushi",
          "Yangi filiallar ochilishi",
          "Xodimlarning lavozimda ko'tarilishi",
          'Ish vaqtining uzayishi',
        ],
        answer: 0,
        explanation: "Yuqori qo'nimsizlik yollash va o'qitish xarajatlarini oshiradi.",
      },
      {
        id: 'h4',
        text: '“360 daraja” baholash usuli nima?',
        options: [
          "Xodimni rahbar, hamkasblar, bo'ysunuvchilar va o'zi baholashi",
          'Faqat rahbar tomonidan baholash',
          'Faqat mijozlar tomonidan baholash',
          'Yiliga 360 marta baholash',
        ],
        answer: 0,
        explanation: "Turli tomonlardan olingan fikr xodim faoliyati haqida to'liqroq tasavvur beradi.",
      },
      {
        id: 'h5',
        text: 'Takman modeli bo‘yicha jamoa rivojlanish bosqichlari qaysi?',
        options: [
          "Shakllanish, to'qnashuv, me'yorlashish, samarali ishlash",
          "Rejalashtirish, nazorat, baholash, mukofot",
          "Yollash, o'qitish, baholash, bo'shatish",
          "G'oya, loyiha, sinov, ishga tushirish",
        ],
        answer: 0,
        explanation: 'Forming, Storming, Norming, Performing — Bryus Takman modeli.',
      },
      {
        id: 'h6',
        text: 'Konflikt boshqaruvida “hamkorlik” strategiyasi nimani anglatadi?',
        options: [
          "Ikkala tomon manfaatlarini to'liq qondiruvchi yechim izlash",
          "Bir tomonning to'liq yon berishi",
          'Muammodan qochish',
          "Kuch bilan o'z fikrini o'tkazish",
        ],
        answer: 0,
        explanation: "Tomas–Kilmen modelida hamkorlik “g'olib–g'olib” natijaga yo'naltirilgan strategiya hisoblanadi.",
      },
      {
        id: 'h7',
        text: 'Lavozim tavsifnomasi (job description) nimani o‘z ichiga oladi?',
        options: [
          "Lavozim vazifalari, mas'uliyati va talablari",
          'Xodimning shaxsiy hayoti',
          "Kompaniyaning moliyaviy hisoboti",
          "Ofis ichki jihozlari ro'yxati",
        ],
        answer: 0,
        explanation: "Aniq tavsifnoma yollash, baholash va vazifalarni taqsimlashni osonlashtiradi.",
      },
      {
        id: 'h8',
        text: 'Mentorlik nima?',
        options: [
          'Tajribali xodimning bilim va tajribasini yangi xodimga berishi',
          'Xodimlarni jarimaga tortish',
          'Ish vaqtini nazorat qilish',
          'Tashqi auditni o‘tkazish',
        ],
        answer: 0,
        explanation: "Mentorlik xodimning kasbiy o'sishini tezlashtiradi va bilimni tashkilot ichida saqlaydi.",
      },
    ],
  },
]

export const TOTAL_QUESTIONS = CATEGORIES.reduce((sum, c) => sum + c.questions.length, 0)
