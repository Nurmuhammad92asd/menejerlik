import type { Question } from '../quiz-data'

export const M2T1_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  /* =========================================================
     🟢 30 TA OSON
  ========================================================= */
  easy: [
    {
      id: 'm2t1-e01',
      text: 'Ta’lim sifatini boshqarishning asosiy maqsadi qaysi?',
      options: [
        'Faqat o‘qituvchilar faoliyatini nazorat qilish',
        'Ta’lim natijalari va jarayonlarini tizimli ravishda yaxshilash',
        'Faqat hujjatlarni tartibga solish',
        'Faqat yakuniy baholarni oshirish',
      ],
      answer: 1,
      explanation:
        'Ta’lim sifati natija, jarayon, muhit va resurslarni birgalikda boshqarish orqali doimiy yaxshilanadi.',
    },

    {
      id: 'm2t1-e02',
      text: 'DTSning asosiy vazifalaridan biri qaysi?',
      options: [
        'Ta’lim natijalari va sifatiga qo‘yiladigan talablarni belgilash',
        'O‘qituvchilarning ish vaqtini belgilash',
        'Maktab binosini ta’mirlash',
        'Ota-onalar yig‘ilishini tashkil etish',
      ],
      answer: 0,
      explanation:
        'DTS ta’lim mazmuni va kutiladigan natijalar hamda ularning sifatiga qo‘yiladigan talablarni belgilaydi.',
    },

    {
      id: 'm2t1-e03',
      text: 'DTT asosan nimani belgilaydi?',
      options: [
        'Faqat yakuniy baholarni',
        'Faqat o‘quvchilar reytingini',
        'Ta’limni amalga oshirish uchun majburiy talab va shartlarni',
        'Faqat o‘qituvchi ish haqini',
      ],
      answer: 2,
      explanation:
        'DTT ta’limni tashkil etishning majburiy tuzilma, mazmun va shartlariga oid talablarni belgilaydi.',
    },

    {
      id: 'm2t1-e04',
      text: '“Jarayon yondashuvi” nimani anglatadi?',
      options: [
        'Faqat yakuniy natijani tekshirishni',
        'Ta’lim natijasini unga olib keluvchi jarayonlar bilan bog‘lab boshqarishni',
        'Faqat tashqi nazoratga tayanishni',
        'Faqat rahbar tajribasiga ishonishni',
      ],
      answer: 1,
      explanation:
        'Jarayon yondashuvi natijani dars, baholash, muhit va boshqa o‘zaro bog‘liq jarayonlar bilan birgalikda ko‘radi.',
    },

    {
      id: 'm2t1-e05',
      text: 'Dalilga asoslangan boshqaruvda qarorlar nimaga tayanadi?',
      options: [
        'Shaxsiy taxminlarga',
        'Tasodifiy fikrlarga',
        'Faqat tajribaga',
        'Monitoring, diagnostika va ma’lumotlarga',
      ],
      answer: 3,
      explanation:
        'Dalilga asoslangan boshqaruv qarorlarni ishonchli ma’lumot va ko‘rsatkichlar asosida qabul qilishni nazarda tutadi.',
    },

    {
      id: 'm2t1-e06',
      text: 'Doimiy takomillashtirish tamoyili nimani talab qiladi?',
      options: [
        'Muammolarni aniqlab, tuzatish va qayta o‘lchashni',
        'Faqat yil oxirida nazorat o‘tkazishni',
        'Har yili bir xil rejani takrorlashni',
        'Faqat tashqi baholashni kutishni',
      ],
      answer: 0,
      explanation:
        'Doimiy takomillashtirish muammo, sabab, yechim va qayta o‘lchash sikliga asoslanadi.',
    },

    {
      id: 'm2t1-e07',
      text: 'Ichki monitoringning asosiy maqsadi nima?',
      options: [
        'O‘qituvchini jazolash',
        'Faqat hisobot tayyorlash',
        'Maktab ichidagi sifat holatini aniqlash va yaxshilash',
        'Tashqi baholashni bekor qilish',
      ],
      answer: 2,
      explanation:
        'Ichki monitoring muammolarni erta aniqlash va ularni bartaraf etish uchun xizmat qiladi.',
    },

    {
      id: 'm2t1-e08',
      text: 'Qaysi biri ichki monitoring vositasiga kiradi?',
      options: [
        'Dars kuzatuvi',
        'Faqat bayram tadbiri',
        'Faqat reklama',
        'Faqat mukofotlash',
      ],
      answer: 0,
      explanation:
        'Dars kuzatuvi ichki monitoringning asosiy vositalaridan biridir.',
    },

    {
      id: 'm2t1-e09',
      text: 'Qisqa diagnostika nima uchun qo‘llanadi?',
      options: [
        'O‘qituvchining ish haqini hisoblash uchun',
        'O‘quvchilarning bilim dinamikasini tezkor aniqlash uchun',
        'Faqat davomatni tekshirish uchun',
        'Maktab binosini baholash uchun',
      ],
      answer: 1,
      explanation:
        'Qisqa diagnostika o‘quvchilarning bilim va ko‘nikmalaridagi o‘sish yoki bo‘shliqlarni aniqlashga yordam beradi.',
    },

    {
      id: 'm2t1-e10',
      text: 'Baholash mezonlari auditi nimaga xizmat qiladi?',
      options: [
        'Dars jadvalini tuzishga',
        'O‘qituvchi almashishiga',
        'Baholashning shaffofligi va adolatliligini tekshirishga',
        'Faqat davomatni nazorat qilishga',
      ],
      answer: 2,
      explanation:
        'Audit baholash mezonlarining aniq, adolatli va standartlarga mosligini tekshiradi.',
    },

    {
      id: 'm2t1-e11',
      text: 'Ta’lim sifatining natija indikatori nimani aks ettiradi?',
      options: [
        'O‘quvchilarning erishgan natijalarini',
        'Faqat maktab binosini',
        'Faqat o‘qituvchilar sonini',
        'Faqat dars jadvalini',
      ],
      answer: 0,
      explanation:
        'Natija indikatorlari o‘quvchi yutuqlari va yakuniy natijalar dinamikasini ko‘rsatadi.',
    },

    {
      id: 'm2t1-e12',
      text: 'Jarayon indikatori nimaga misol bo‘ladi?',
      options: [
        'Maktab hududi',
        'Dars sifati va dastur ijrosi',
        'O‘quvchi bo‘yi',
        'Maktab binosining rangi',
      ],
      answer: 1,
      explanation:
        'Jarayon indikatorlari dars sifati, dastur ijrosi va baholash jarayonlarini aks ettiradi.',
    },

    {
      id: 'm2t1-e13',
      text: 'Muhit va resurs indikatorlariga qaysi biri kiradi?',
      options: [
        'Faqat yakuniy baho',
        'Faqat imtihon natijasi',
        'Faqat olimpiada natijasi',
        'Psixologik iqlim, xavfsizlik va metodik ta’minot',
      ],
      answer: 3,
      explanation:
        'Muhit va resurs indikatorlari ta’lim sharoitlari, xavfsizlik, iqlim va resurslarni qamrab oladi.',
    },

    {
      id: 'm2t1-e14',
      text: 'Zamonaviy maktab direktorining asosiy rollaridan biri qaysi?',
      options: [
        'Faqat nazoratchi',
        'Pedagogik lider va o‘zgarishlarni boshqaruvchi',
        'Faqat hujjatchi',
        'Faqat xo‘jalik rahbari',
      ],
      answer: 1,
      explanation:
        'Zamonaviy direktor pedagogik lider, analitik rahbar va o‘zgarishlar menejeri sifatida faoliyat yuritadi.',
    },

    {
      id: 'm2t1-e15',
      text: 'Ta’lim sifatiga ta’sir qiluvchi omillardan biri qaysi?',
      options: [
        'O‘qituvchi salohiyati',
        'Faqat maktab nomi',
        'Faqat binoning tashqi ko‘rinishi',
        'Faqat direktorning ish staji',
      ],
      answer: 0,
      explanation:
        'O‘qituvchi salohiyati ta’lim sifatiga bevosita ta’sir qiluvchi muhim omildir.',
    },

    {
      id: 'm2t1-e16',
      text: 'Formativ baholashning asosiy xususiyati nima?',
      options: [
        'Faqat yakuniy natijani qayd etish',
        'O‘quv jarayonida o‘quvchining rivojlanishini kuzatish va feedback berish',
        'Faqat reyting tuzish',
        'Faqat sertifikat berish',
      ],
      answer: 1,
      explanation:
        'Formativ baholash o‘quv jarayonida rivojlanishni kuzatish va keyingi ta’limni yaxshilashga xizmat qiladi.',
    },

    {
      id: 'm2t1-e17',
      text: 'Raqamli va aralash ta’limning asosiy imkoniyati qaysi?',
      options: [
        'Ta’limni faqat kompyuterga o‘tkazish',
        'An’anaviy darsni butunlay bekor qilish',
        'Elektron va masofaviy imkoniyatlarni ta’limga integratsiya qilish',
        'Faqat nazorat ishlarini elektron qilish',
      ],
      answer: 2,
      explanation:
        'Aralash ta’lim an’anaviy va raqamli ta’lim imkoniyatlarini uyg‘unlashtiradi.',
    },

    {
      id: 'm2t1-e18',
      text: 'Kompetensiyaviy yondashuv nimaga urg‘u beradi?',
      options: [
        'Faqat bilimni yodlashga',
        'Bilimni amaliy ko‘nikma va kompetensiyaga aylantirishga',
        'Faqat darslikni tugatishga',
        'Faqat yozma nazoratga',
      ],
      answer: 1,
      explanation:
        'Kompetensiyaviy yondashuv bilimni amaliy faoliyatda qo‘llash qobiliyatini rivojlantiradi.',
    },

    {
      id: 'm2t1-e19',
      text: 'Tashqi baholash nimani anglatadi?',
      options: [
        'Maktabning o‘z-o‘zini baholashi',
        'Faqat ota-onalar fikri',
        'Davlat talablari va standartlarga muvofiqlikni tashqi baholash',
        'Faqat direktorning xulosasi',
      ],
      answer: 2,
      explanation:
        'Tashqi baholash tashkilot faoliyatiga mustaqil yoki vakolatli tashqi baho berishni anglatadi.',
    },

    {
      id: 'm2t1-e20',
      text: 'Jamoatchilik ishonchini shakllantirishda nima muhim?',
      options: [
        'Ochiqlik, shaffoflik va teskari aloqa',
        'Faqat ichki buyruqlar',
        'Faqat nazorat',
        'Faqat reyting',
      ],
      answer: 0,
      explanation:
        'Ota-ona va hamkorlar bilan ochiq muloqot jamoatchilik ishonchini mustahkamlaydi.',
    },

    {
      id: 'm2t1-e21',
      text: '“Muammo-sabab-yechim-qayta o‘lchash” nimani ifodalaydi?',
      options: [
        'Sifatni yaxshilash siklini',
        'Faqat hisobot tizimini',
        'Faqat tashqi nazoratni',
        'Faqat hujjat yuritishni',
      ],
      answer: 0,
      explanation:
        'Bu sikl muammoni aniqlashdan keyin sababni tahlil qilish, yechim va qayta o‘lchashni nazarda tutadi.',
    },

    {
      id: 'm2t1-e22',
      text: 'Innovatsiyani joriy etishning birinchi bosqichi qaysi?',
      options: [
        'Kengaytirish',
        'Monitoring',
        'Ehtiyojni aniqlash',
        'Mukofotlash',
      ],
      answer: 2,
      explanation:
        'Innovatsiya avvalo mavjud muammo va rivojlanish ehtiyojini aniqlashdan boshlanadi.',
    },

    {
      id: 'm2t1-e23',
      text: 'Pilot sinov nima?',
      options: [
        'Innovatsiyani barcha sinflarda birdan joriy etish',
        'Innovatsiyani cheklangan miqyosda sinab ko‘rish',
        'Faqat nazorat ishini o‘tkazish',
        'Innovatsiyani bekor qilish',
      ],
      answer: 1,
      explanation:
        'Pilot sinov innovatsiyaning samaradorligini cheklangan miqyosda tekshirish imkonini beradi.',
    },

    {
      id: 'm2t1-e24',
      text: 'Innovatsiyadan keyingi muhim bosqich qaysi?',
      options: [
        'Metodik qo‘llab-quvvatlash',
        'Hujjatlarni yopish',
        'Nazoratni bekor qilish',
        'Barcha darslarni bir xil qilish',
      ],
      answer: 0,
      explanation:
        'Pilot jarayonida pedagoglarga metodik yordam, yo‘riqnoma va coaching zarur.',
    },

    {
      id: 'm2t1-e25',
      text: 'Ichki monitoringda ota-onalar fikridan foydalanishning maqsadi nima?',
      options: [
        'Faqat reyting tuzish',
        'Ta’lim sifati haqida qo‘shimcha teskari aloqa olish',
        'O‘qituvchini jazolash',
        'Faqat tadbirlarni baholash',
      ],
      answer: 1,
      explanation:
        'Ota-onalar fikri ta’lim sifati va muhitini baholashda qo‘shimcha dalil beradi.',
    },

    {
      id: 'm2t1-e26',
      text: 'Xavf guruh kartasi nimani erta aniqlashga yordam beradi?',
      options: [
        'Davomat va o‘zlashtirishdagi xavf belgilarini',
        'Faqat iqtidorli o‘quvchilarni',
        'Faqat o‘qituvchi reytingini',
        'Faqat moddiy muammolarni',
      ],
      answer: 0,
      explanation:
        'Xavf guruh kartasi muammoga moyil o‘quvchilarni erta aniqlash va profilaktik choralar ko‘rishga xizmat qiladi.',
    },

    {
      id: 'm2t1-e27',
      text: 'Ta’lim sifatini boshqarishda kimning mas’uliyati muhim?',
      options: [
        'Faqat fan o‘qituvchisining',
        'Faqat psixologning',
        'Maktab rahbariyati va jamoasining tizimli mas’uliyati',
        'Faqat ota-onalarning',
      ],
      answer: 2,
      explanation:
        'Sifatni boshqarish butun maktab jamoasi va rahbariyatning tizimli vazifasidir.',
    },

    {
      id: 'm2t1-e28',
      text: 'Tashqi baholashga tayyorgarlik nimadan boshlanishi maqsadga muvofiq?',
      options: [
        'Talablar xaritasini tuzishdan',
        'Mukofotlashdan',
        'Yangi reklama tayyorlashdan',
        'Faqat yig‘ilish o‘tkazishdan',
      ],
      answer: 0,
      explanation:
        'Avvalo talablar va risk nuqtalari aniqlanadi, keyin dalillar va kamchiliklar reyestri shakllantiriladi.',
    },

    {
      id: 'm2t1-e29',
      text: 'Ta’lim sifati uchun qaysi uch halqa bir-biri bilan bog‘liq?',
      options: [
        'Ichki monitoring, tashqi baholash, jamoatchilik ishonchi',
        'Dars, tanaffus, yig‘ilish',
        'O‘qituvchi, direktor, kotib',
        'Reja, buyruq, hisobot',
      ],
      answer: 0,
      explanation:
        'Sifat boshqaruvining uch halqasi ichki monitoring, tashqi baholash va jamoatchilik ishonchidan iborat.',
    },

    {
      id: 'm2t1-e30',
      text: 'Ta’lim sifatini boshqarishda indikator nima uchun kerak?',
      options: [
        'Faqat hisobotni ko‘paytirish uchun',
        'Holatni o‘lchash va boshqaruv qarorlarini asoslash uchun',
        'Faqat reyting yaratish uchun',
        'Faqat tashqi nazorat uchun',
      ],
      answer: 1,
      explanation:
        'Indikatorlar aniq holatni o‘lchash va natijani boshqaruv qarorlariga bog‘lash imkonini beradi.',
    },
  ],

  /* =========================================================
     🟡 30 TA O‘RTA
  ========================================================= */
  medium: [
    {
      id: 'm2t1-m01',
      text: 'Direktor ta’lim natijalari pasayganini faqat yakuniy baholar orqali emas, dars sifati va baholash jarayoni bilan birga tahlil qilmoqda. Bu qaysi yondashuvga mos?',
      options: [
        'Jarayon yondashuviga',
        'Faqat ma’muriy nazoratga',
        'Faqat tashqi baholashga',
        'Faqat statistik hisobotga',
      ],
      answer: 0,
      explanation:
        'Jarayon yondashuvi natijani unga ta’sir qiluvchi o‘zaro bog‘liq jarayonlar bilan birga ko‘rib chiqadi.',
    },

    {
      id: 'm2t1-m02',
      text: 'DTS va DTTni direktor amaliy jihatdan farqlamoqchi. Qaysi juftlik to‘g‘ri?',
      options: [
        'DTS — sharoitlar, DTT — yakuniy natijalar',
        'DTS — natijalar va mezonlar, DTT — majburiy sharoit va talablar',
        'DTS — faqat resurslar, DTT — faqat baholash',
        'DTS — monitoring, DTT — hisobot',
      ],
      answer: 1,
      explanation:
        'DTS ko‘proq kutiladigan natijalar va sifat mezonlarini, DTT esa ta’limni amalga oshirish talablarini belgilaydi.',
    },

    {
      id: 'm2t1-m03',
      text: 'Innovatsiyani samarali joriy etishning to‘g‘ri ketma-ketligi qaysi?',
      options: [
        'Pilot → ehtiyoj → monitoring → metodik yordam',
        'Ehtiyoj → pilot → metodik yordam → monitoring va kengaytirish',
        'Monitoring → ehtiyoj → kengaytirish → pilot',
        'Metodik yordam → kengaytirish → ehtiyoj → pilot',
      ],
      answer: 1,
      explanation:
        'Avval ehtiyoj aniqlanadi, keyin pilot qilinadi, metodik yordam beriladi va natijaga qarab kengaytiriladi.',
    },

    {
      id: 'm2t1-m04',
      text: 'Qaysi to‘plam innovatsiyani joriy etishning 4 bosqichini to‘liq ifodalaydi?',
      options: [
        'Nazorat, jazolash, hisobot, mukofot',
        'Ehtiyoj, pilot, metodik qo‘llab-quvvatlash, monitoring va kengaytirish',
        'Reja, buyruq, yig‘ilish, hisobot',
        'Baholash, attestatsiya, reyting, mukofot',
      ],
      answer: 1,
      explanation:
        'Innovatsiya bosqichma-bosqich joriy etilishi kerak: ehtiyoj, pilot, qo‘llab-quvvatlash, monitoring va kengaytirish.',
    },

    {
      id: 'm2t1-m05',
      text: 'Quyidagi mosliklardan qaysi biri to‘g‘ri?',
      options: [
        'Dalilga asoslangan boshqaruv — statistik va monitoring ma’lumotlariga tayangan qaror',
        'Kompetensiyaviy yondashuv — faqat bilimni yodlash',
        'Raqamli ta’lim — an’anaviy darsni to‘liq bekor qilish',
        'Doimiy takomillashtirish — faqat yil oxirida tekshiruv',
      ],
      answer: 0,
      explanation:
        'Dalilga asoslangan boshqaruv qarorlarni ishonchli ma’lumotlar asosida qabul qiladi.',
    },

    {
      id: 'm2t1-m06',
      text: 'Ta’lim sifatini boshqarish usullarining to‘g‘ri mosligi qaysi?',
      options: [
        'Analitik — mentoring va coaching',
        'Rivojlantiruvchi — o‘quv natijalarini statistik tahlil qilish',
        'Me’yoriy-uslubiy — DTS/DTTga moslikni ta’minlash',
        'Tashkiliy-boshqaruv — faqat diagnostika',
      ],
      answer: 2,
      explanation:
        'Me’yoriy-uslubiy usul DTS/DTT va metodik talablarning bajarilishini ta’minlaydi.',
    },

    {
      id: 'm2t1-m07',
      text: 'Indikatorlarni shakllantirishda qaysi to‘plam eng to‘liq hisoblanadi?',
      options: [
        'Natija, jarayon, muhit va resurs',
        'Faqat natija va baho',
        'Faqat dars va davomat',
        'Faqat resurs va hujjatlar',
      ],
      answer: 0,
      explanation:
        'Sifatni kompleks boshqarishda natija, jarayon, muhit va resurs indikatorlari birgalikda ishlatiladi.',
    },

    {
      id: 'm2t1-m08',
      text: 'Ichki monitoring natijasida muammo aniqlandi. Eng to‘g‘ri keyingi qadam qaysi?',
      options: [
        'Muammoni faqat hisobotda qayd etish',
        'Sababni aniqlab, chora belgilash va qayta o‘lchash',
        'Darhol o‘qituvchini jazolash',
        'Tashqi baholashni kutish',
      ],
      answer: 1,
      explanation:
        'Monitoring natijasi boshqaruv chorasi va keyingi qayta o‘lchash bilan yakunlanishi kerak.',
    },

    {
      id: 'm2t1-m09',
      text: 'Dars kuzatuvi, qisqa diagnostika va ota-ona so‘rovi birgalikda nima beradi?',
      options: [
        'Faqat o‘qituvchi reytingini',
        'Ta’lim sifati haqida turli manbalardan dalil',
        'Faqat yakuniy baholarni',
        'Faqat tashqi baholash natijasini',
      ],
      answer: 1,
      explanation:
        'Turli manbalardan ma’lumot olish muammoni bir tomonlama emas, kompleks tahlil qilishga yordam beradi.',
    },

    {
      id: 'm2t1-m10',
      text: 'Ichki monitoringning uch halqadagi o‘rni qaysi javobda to‘g‘ri ko‘rsatilgan?',
      options: [
        'Dars va natijalarni muntazam kuzatish va ichki tuzatishlarni amalga oshirish',
        'Faqat mustaqil ekspertiza o‘tkazish',
        'Faqat jamoatchilik fikrini yig‘ish',
        'Faqat davlat standartlarini ishlab chiqish',
      ],
      answer: 0,
      explanation:
        'Ichki monitoring maktab ichidagi jarayonlar va natijalarni muntazam kuzatib, tuzatish choralarini belgilaydi.',
    },

    {
      id: 'm2t1-m11',
      text: 'Tashqi baholashga tayyorgarlikning to‘g‘ri ketma-ketligi qaysi?',
      options: [
        'Dalillar → talablar → reyestr → qayta o‘lchash',
        'Talablar xaritasi → kamchiliklar reyestri → dalillar papkasi → qayta o‘lchash',
        'Kamchiliklar → dalillar → talablar → qayta o‘lchash',
        'Qayta o‘lchash → talablar → dalillar → reyestr',
      ],
      answer: 1,
      explanation:
        'Avval talablar va risklar aniqlanadi, keyin kamchiliklar reyestri, dalillar va qayta o‘lchash amalga oshiriladi.',
    },

    {
      id: 'm2t1-m12',
      text: 'Qaysi holat dalilga asoslangan boshqaruvga zid?',
      options: [
        'Diagnostika natijasiga qarab chora belgilash',
        'Indikatorlar dinamikasini tahlil qilish',
        'Rahbarning shaxsiy taassurotiga asoslanib yakuniy xulosa chiqarish',
        'Bir nechta ma’lumot manbasini solishtirish',
      ],
      answer: 2,
      explanation:
        'Subyektiv taassurot dalilga asoslangan boshqaruvning o‘rnini bosa olmaydi.',
    },

    {
      id: 'm2t1-m13',
      text: 'Baholash mezonlari turli o‘qituvchilarda keskin farq qilsa, direktorning birinchi vazifasi nima?',
      options: [
        'Barcha baholarni oshirish',
        'Mezonlar auditi orqali baholashdagi tafovut sababini aniqlash',
        'Faqat yakuniy baholarni o‘zgartirish',
        'Tashqi ekspertni kutish',
      ],
      answer: 1,
      explanation:
        'Baholash mezonlari auditi subyektivlik va mezonlar nomuvofiqligini aniqlashga yordam beradi.',
    },

    {
      id: 'm2t1-m14',
      text: 'Qaysi indikator turi dars sifati va dastur ijrosini aks ettiradi?',
      options: [
        'Natija',
        'Jarayon',
        'Muhit',
        'Resurs',
      ],
      answer: 1,
      explanation:
        'Dars sifati va dastur ijrosi ta’lim jarayonining qanday kechayotganini ko‘rsatadi.',
    },

    {
      id: 'm2t1-m15',
      text: 'Qaysi moslik noto‘g‘ri?',
      options: [
        'Natija indikatori — o‘quvchi yutuqlari',
        'Jarayon indikatori — dars sifati',
        'Muhit indikatori — psixologik iqlim',
        'Natija indikatori — metodik ta’minot',
      ],
      answer: 3,
      explanation:
        'Metodik ta’minot muhit va resurs indikatorlariga yaqin bo‘ladi, natija indikatori emas.',
    },

    {
      id: 'm2t1-m16',
      text: 'Formativ baholashning sifat boshqaruvidagi asosiy foydasi nimada?',
      options: [
        'O‘quvchi rivojlanishini jarayon davomida ko‘rish va feedback berish',
        'Faqat chorak bahosini chiqarish',
        'Faqat reytingni aniqlash',
        'Faqat yakuniy nazoratni kuchaytirish',
      ],
      answer: 0,
      explanation:
        'Formativ baholash joriy ma’lumot asosida o‘quv jarayonini o‘z vaqtida tuzatishga yordam beradi.',
    },

    {
      id: 'm2t1-m17',
      text: 'Kompetensiyaviy yondashuvni direktor qanday qo‘llab-quvvatlashi mumkin?',
      options: [
        'Faqat mavzular sonini ko‘paytirish orqali',
        'Amaliy va kompetensiyaga yo‘naltirilgan topshiriqlarni rag‘batlantirish orqali',
        'Faqat yakuniy testlarni ko‘paytirish orqali',
        'Faqat nazorat ishlarini standartlashtirish orqali',
      ],
      answer: 1,
      explanation:
        'Kompetensiyaviy yondashuv o‘quvchining bilimni real vaziyatda qo‘llashiga e’tibor beradi.',
    },

    {
      id: 'm2t1-m18',
      text: '“Uch halqa” tizimida jamoatchilik ishonchi qaysi faoliyat bilan ko‘proq bog‘liq?',
      options: [
        'Ichki diagnostika',
        'Tashqi attestatsiya',
        'Ochiq kommunikatsiya va teskari aloqa',
        'Dars kuzatuvi',
      ],
      answer: 2,
      explanation:
        'Jamoatchilik ishonchi shaffoflik, ota-onalar va hamkorlar bilan muloqot orqali mustahkamlanadi.',
    },

    {
      id: 'm2t1-m19',
      text: 'Ta’lim sifatini boshqarishda direktor uchun “manba-muddat-mas’ul” uchligi nima beradi?',
      options: [
        'Indikator bo‘yicha monitoringning aniq tashkil etilishini',
        'Faqat hujjatlar sonini',
        'Faqat o‘qituvchi reytingini',
        'Faqat tashqi baholashga tayyorgarlikni',
      ],
      answer: 0,
      explanation:
        'Har bir indikator uchun manba, muddat va mas’ul belgilanib, monitoring boshqariladigan jarayonga aylanadi.',
    },

    {
      id: 'm2t1-m20',
      text: 'Direktor natijalar pasayganini ko‘rdi. Qaysi qaror jarayon yondashuviga mos?',
      options: [
        'Faqat past baho olgan o‘quvchilarni aniqlash',
        'Dars, baholash, dastur ijrosi va muhitni birgalikda tahlil qilish',
        'Faqat o‘qituvchi reytingini tekshirish',
        'Faqat ota-onalardan shikoyat so‘rash',
      ],
      answer: 1,
      explanation:
        'Jarayon yondashuvi natijaning sabablarini tizimdagi bog‘liq jarayonlar orqali izlaydi.',
    },

    {
      id: 'm2t1-m21',
      text: 'Quyidagi mosliklardan qaysi biri to‘g‘ri?',
      options: [
        '1.DTS — A.sharoitlar; 2.DTT — B.natijalar',
        '1.DTS — A.natijalar va mezonlar; 2.DTT — B.sharoitlar',
        '1.DTS — A.monitoring; 2.DTT — B.diagnostika',
        '1.DTS — A.resurslar; 2.DTT — B.reyting',
      ],
      answer: 1,
      explanation:
        'DTS natija va sifat mezonlariga, DTT esa majburiy shart-sharoitlarga yo‘naltiriladi.',
    },

    {
      id: 'm2t1-m22',
      text: 'Qaysi holat doimiy takomillashtirishga eng mos?',
      options: [
        'Muammo aniqlanib, sabab tahlil qilinadi, chora ko‘riladi va natija qayta o‘lchanadi',
        'Muammo aniqlanadi va hujjatda qayd etiladi',
        'Muammo aniqlanadi va tashqi baholash kutiladi',
        'Muammo aniqlanadi va javobgar jazolanadi',
      ],
      answer: 0,
      explanation:
        'Doimiy takomillashtirishning mohiyati qayta o‘lchash orqali choraning samaradorligini tekshirishdir.',
    },

    {
      id: 'm2t1-m23',
      text: 'Innovatsiyani barcha sinflarga birdan joriy etishdan ko‘ra pilot sinovning afzalligi nimada?',
      options: [
        'Riskni kamaytirib, samaradorlikni oldindan tekshirishda',
        'Nazoratni bekor qilishda',
        'Hujjatlarni kamaytirishda',
        'Barcha o‘qituvchilarni bir xil ishlashga majburlashda',
      ],
      answer: 0,
      explanation:
        'Pilot sinov innovatsiyaning kuchli va zaif tomonlarini kengaytirishdan oldin ko‘rishga imkon beradi.',
    },

    {
      id: 'm2t1-m24',
      text: 'Ichki monitoringda bir xil muammo uch oy davomida takrorlansa, nima qilish kerak?',
      options: [
        'Faqat yana kuzatish',
        'Muammo sababini chuqurroq tahlil qilib, aniq chora va muddat belgilash',
        'Monitoringni to‘xtatish',
        'Faqat hisobotni yangilash',
      ],
      answer: 1,
      explanation:
        'Takroriy muammo monitoring natijasi boshqaruv chorasi bilan bog‘lanmaganini ko‘rsatishi mumkin.',
    },

    {
      id: 'm2t1-m25',
      text: 'Ta’lim sifati boshqaruvida “natija” va “jarayon”ni birga ko‘rishning afzalligi nima?',
      options: [
        'Faqat natijani qayd etish',
        'Natijaning yuzaga kelish sabablarini aniqlash',
        'Faqat jarayonni nazorat qilish',
        'Faqat o‘qituvchini baholash',
      ],
      answer: 1,
      explanation:
        'Natija bilan birga jarayonni tahlil qilish muammoning ildiz sabablarini aniqlashga yordam beradi.',
    },

    {
      id: 'm2t1-m26',
      text: 'Tashqi baholashni ichki sifat tizimining davomi sifatida ko‘rish nimani anglatadi?',
      options: [
        'Ichki monitoringni bekor qilishni',
        'Tashqi baholashni sifat sikliga oldindan integratsiya qilishni',
        'Faqat hujjatlarni tayyorlashni',
        'Tashqi ekspertga barcha mas’uliyatni berishni',
      ],
      answer: 1,
      explanation:
        'Tashqi baholash ichki monitoring va dalillar tizimining mantiqiy davomi bo‘lishi kerak.',
    },

    {
      id: 'm2t1-m27',
      text: 'Qaysi javob ichki monitoring vositalarining eng to‘liq to‘plamini beradi?',
      options: [
        'Dars kuzatuvi, qisqa diagnostika, mezonlar auditi, teskari aloqa, xavf guruhi kartasi',
        'Faqat dars kuzatuvi va reyting',
        'Faqat chorak bahosi va davomat',
        'Faqat ota-onalar yig‘ilishi',
      ],
      answer: 0,
      explanation:
        'Ichki monitoring bir nechta manba va vositalardan foydalanilganda ishonchliroq bo‘ladi.',
    },

    {
      id: 'm2t1-m28',
      text: 'Ta’lim sifatini boshqarishda ota-onalar fikri qaysi turdagi ma’lumotni kuchaytiradi?',
      options: [
        'Faqat akademik bahoni',
        'Teskari aloqa va ta’lim muhitiga oid ma’lumotni',
        'Faqat huquqiy ma’lumotni',
        'Faqat moliyaviy ma’lumotni',
      ],
      answer: 1,
      explanation:
        'Ota-onalar fikri ta’lim jarayoni va muhitining qabul qilinishi haqida qo‘shimcha dalil beradi.',
    },

    {
      id: 'm2t1-m29',
      text: 'Qaysi boshqaruv qarori dalilga asoslangan hisoblanadi?',
      options: [
        '“Menga shunday tuyuldi” asosida qaror qilish',
        'Birgina shikoyat asosida choralar ko‘rish',
        'Diagnostika, kuzatuv va boshqa manbalarni solishtirib qaror qilish',
        'Faqat o‘tgan yilgi tajribaga tayanish',
      ],
      answer: 2,
      explanation:
        'Dalilga asoslangan qaror bir nechta ishonchli ma’lumot manbasini tahlil qilishga tayanadi.',
    },

    {
      id: 'm2t1-m30',
      text: 'Ta’lim sifatini boshqarishda eng maqbul mantiq qaysi?',
      options: [
        'Muammo → aybdor → jazo',
        'Natija → hisobot → yakun',
        'Muammo → sabab → yechim → qayta o‘lchash',
        'Nazorat → hisobot → nazorat',
      ],
      answer: 2,
      explanation:
        'Tizimli sifat boshqaruvi muammoning sababini aniqlab, yechimni sinash va natijani qayta o‘lchashga asoslanadi.',
    },
  ],

  /* =========================================================
     🔴 30 TA QIYIN
  ========================================================= */
  hard: [
    {
      id: 'm2t1-h01',
      text: 'Direktor yakuniy natijalar pasayganini aniqladi. Dars kuzatuvida metodika yaxshi, biroq formativ baholash va mustaqil topshiriqlar sust. Qaysi qaror eng asosli?',
      options: [
        'O‘qituvchilarni umumiy tarzda intizomiy nazoratga olish',
        'Faqat yakuniy baholarni qayta tekshirish',
        'Formativ baholash va topshiriqlarni natija dinamikasi bilan bog‘lab pilot chorani sinash',
        'Tashqi baholash natijasini kutish',
      ],
      answer: 2,
      explanation:
        'Muammo jarayon bilan bog‘langanligi sababli aniq jarayon omili bo‘yicha chora va qayta o‘lchash kerak.',
    },

    {
      id: 'm2t1-h02',
      text: 'Bir sinfda diagnostika natijalari yuqori, lekin tashqi baholashda mustaqil topshiriqlar natijasi past. Direktor nimani tekshirishi kerak?',
      options: [
        'Faqat davomatni',
        'Ichki baholash topshiriqlarining kompetensiyaga mosligi va mezonlarini',
        'Faqat o‘qituvchi ish stajini',
        'Faqat ota-onalar fikrini',
      ],
      answer: 1,
      explanation:
        'Ichki natija va tashqi natija tafovuti baholash mazmuni va mezonlarining mosligini tekshirishni talab qiladi.',
    },

    {
      id: 'm2t1-h03',
      text: 'DTS mazmuni bajarilgan, ammo ayrim sinflarda zarur ta’lim sharoitlari yetarli emas. Direktor qaysi xulosani chiqarishi kerak?',
      options: [
        'DTS bajarilgani uchun muammo yo‘q',
        'Natija va ta’limni amalga oshirish shartlarini alohida baholash kerak',
        'Faqat o‘qituvchini baholash kerak',
        'Faqat yakuniy baholarni oshirish kerak',
      ],
      answer: 1,
      explanation:
        'DTS natija va sifat talablarini, DTT esa zarur shart-sharoitlarni boshqarish nuqtayi nazaridan ajratishni talab qiladi.',
    },

    {
      id: 'm2t1-h04',
      text: 'Bir xil innovatsiya ikki sinfda turlicha natija berdi. Eng asosli boshqaruv qarori qaysi?',
      options: [
        'Innovatsiyani butunlay bekor qilish',
        'Faqat yaxshi natija bergan sinfni ko‘paytirish',
        'Qo‘llash sharoiti, metodik yordam va o‘qituvchi amaliyotidagi farqlarni tahlil qilish',
        'Barcha o‘qituvchilarga bir xil natija talabini qo‘yish',
      ],
      answer: 2,
      explanation:
        'Turlicha natija innovatsiyaning qo‘llanish sharoiti va metodik amalga oshirilishini tahlil qilishni talab qiladi.',
    },

    {
      id: 'm2t1-h05',
      text: 'Monitoringda bir xil muammo uch marta qayd etilgan, ammo ko‘rsatkich o‘zgarmagan. Qaysi xulosa kuchliroq?',
      options: [
        'Monitoring samarasiz',
        'Muammo qayd etilgan, lekin sababga yo‘naltirilgan boshqaruv choralari yetarli emas',
        'O‘qituvchilar ma’lumotni yashirmoqda',
        'Tashqi baholashni kutish kerak',
      ],
      answer: 1,
      explanation:
        'Qayta-qayta aniqlanayotgan muammo monitoringdan boshqaruv chorasiga o‘tish sustligini ko‘rsatadi.',
    },

    {
      id: 'm2t1-h06',
      text: 'Tashqi baholashga tayyorgarlikda hujjatlar to‘liq, lekin mezonlar amalda bir xil qo‘llanmayapti. Qaysi yondashuv to‘g‘ri?',
      options: [
        'Hujjatlarni yana ko‘paytirish',
        'Faqat direktor buyrug‘ini kuchaytirish',
        'Amaliy baholash jarayonini audit qilib, mezonlar bo‘yicha metodik yordam berish',
        'Tashqi ekspertni kutish',
      ],
      answer: 2,
      explanation:
        'Hujjat mavjudligi amaliyot sifati kafolati emas; mezonlarning real qo‘llanishi tekshirilishi kerak.',
    },

    {
      id: 'm2t1-h07',
      text: 'Ota-onalar qoniqishi yuqori, lekin o‘quvchilar mustaqil fikrlashda past natija ko‘rsatmoqda. Direktor qanday xulosa qilishi kerak?',
      options: [
        'Ota-onalar fikri noto‘g‘ri',
        'Diagnostika va feedback ma’lumotlarini birgalikda tahlil qilish kerak',
        'Faqat ota-onalar fikriga tayanish kerak',
        'Faqat o‘quvchilar fikriga tayanish kerak',
      ],
      answer: 1,
      explanation:
        'Turli manbalardagi ma’lumotlar bir-birini to‘ldiradi va muammoni chuqurroq ko‘rsatadi.',
    },

    {
      id: 'm2t1-h08',
      text: 'Resurslar cheklangan maktabda bir vaqtning o‘zida ko‘plab muammolar aniqlandi. Qaysi boshqaruv qarori maqbul?',
      options: [
        'Barcha muammolarni bir xil tezlikda hal qilish',
        'Faqat eng oson muammoni tanlash',
        'Ta’sir va xavf darajasi yuqori bo‘lgan muammolarni ustuvorlashtirish',
        'Faqat tashqi baholash talab qilgan muammolarni tanlash',
      ],
      answer: 2,
      explanation:
        'Cheklangan resurs sharoitida ta’sir va xavfga asoslangan ustuvorlashtirish boshqaruv samaradorligini oshiradi.',
    },

    {
      id: 'm2t1-h09',
      text: '9-sinfda yakuniy baholar yuqori, standartlashtirilgan diagnostika o‘rtacha, darslar esa asosan reproduktiv. Qaysi chora eng asosli?',
      options: [
        'Baholarni yanada oshirish',
        'Kompetensiyaviy topshiriqlarni pilot qilish va qayta o‘lchash',
        'Faqat darslik mavzularini tezroq tugatish',
        'Faqat davomatni nazorat qilish',
      ],
      answer: 1,
      explanation:
        'Natijalar va dars metodikasi o‘rtasidagi tafovut kompetensiyaviy topshiriqlarni sinab ko‘rishni asoslaydi.',
    },

    {
      id: 'm2t1-h10',
      text: 'Direktor natija indikatorlarini belgiladi, lekin ularga manba, muddat va mas’ul biriktirmadi. Asosiy boshqaruv kamchiligi nima?',
      options: [
        'Indikatorlar soni kam',
        'Monitoring ko‘rsatkichlari ijro mexanizmiga bog‘lanmagan',
        'Natija indikatorlaridan foydalanish noto‘g‘ri',
        'Tashqi baholash hisobga olinmagan',
      ],
      answer: 1,
      explanation:
        'Indikator o‘lchov vositasi bo‘lishi uchun uni kim, qachon va qaysi manbadan kuzatishi aniq bo‘lishi kerak.',
    },

    {
      id: 'm2t1-h11',
      text: 'Bir fan bo‘yicha baholar yuqori, lekin mustaqil topshiriqlarda natija past. Bu holat nimani ko‘rsatishi mumkin?',
      options: [
        'Davomat muammosini',
        'Baholash mazmuni va real kompetensiya natijasi o‘rtasidagi tafovutni',
        'Faqat psixologik iqlimni',
        'Faqat resurs yetishmasligini',
      ],
      answer: 1,
      explanation:
        'Yuqori baho va past mustaqil natija baholashning real kompetensiyani qay darajada o‘lchayotganini tekshirishni talab qiladi.',
    },

    {
      id: 'm2t1-h12',
      text: 'Direktor barcha sinflarda yangi metodni birdan joriy etdi va natijalar pasaydi. Qaysi boshqaruv xatosi ehtimoli yuqori?',
      options: [
        'Pilot va ehtiyoj tahlili bosqichlarining o‘tkazib yuborilishi',
        'Monitoringning haddan tashqari ko‘pligi',
        'DTSdan foydalanilgani',
        'Teskari aloqa olingani',
      ],
      answer: 0,
      explanation:
        'Innovatsiyani keng miqyosda pilot va metodik tayyorgarliksiz joriy qilish riskni oshiradi.',
    },

    {
      id: 'm2t1-h13',
      text: 'Qaysi vaziyat “jarayon yondashuvi”ni eng to‘liq ifodalaydi?',
      options: [
        'Natijani faqat yakuniy baho orqali baholash',
        'Natijani dars, baholash, dastur, muhit va resurslar bilan bog‘lab tahlil qilish',
        'Faqat tashqi ekspert xulosasiga tayanish',
        'Faqat o‘qituvchi faoliyatini tekshirish',
      ],
      answer: 1,
      explanation:
        'Jarayon yondashuvi ta’lim natijasini uni shakllantiruvchi o‘zaro bog‘liq jarayonlar tizimida ko‘radi.',
    },

    {
      id: 'm2t1-h14',
      text: 'Direktor o‘quv natijalarini yaxshilash uchun faqat qo‘shimcha nazorat ishlarini ko‘paytirdi. Nima yetishmayapti?',
      options: [
        'Natijalarni ko‘paytirish',
        'Muammoning sabablarini jarayon va muhit indikatorlari orqali aniqlash',
        'Baholarni kamaytirish',
        'Tashqi baholashni bekor qilish',
      ],
      answer: 1,
      explanation:
        'Faqat nazoratni ko‘paytirish muammoning sababini aniqlamasligi mumkin.',
    },

    {
      id: 'm2t1-h15',
      text: 'Dars kuzatuvida maqsad aniq, lekin o‘quvchi faolligi va feedback sust. Qaysi indikator turi ustuvor?',
      options: [
        'Natija',
        'Jarayon',
        'Muhit',
        'Moliyaviy',
      ],
      answer: 1,
      explanation:
        'O‘quvchi faolligi va feedback dars jarayonining sifatini ifodalaydi.',
    },

    {
      id: 'm2t1-h16',
      text: 'Xavf guruhidagi o‘quvchilar bo‘yicha ma’lumot mavjud, ammo mas’ul shaxs va kuzatuv muddati ko‘rsatilmagan. Muammo nimada?',
      options: [
        'Ma’lumotning mavjudligida',
        'Monitoring ma’lumotining boshqaruv mexanizmiga ulanmaganida',
        'Xavf guruhlarini aniqlashning o‘zida',
        'Indikatorlardan foydalanishda',
      ],
      answer: 1,
      explanation:
        'Ma’lumot qaror va mas’uliyat bilan bog‘lanmasa, u boshqaruv vositasiga to‘liq aylanmaydi.',
    },

    {
      id: 'm2t1-h17',
      text: 'DTT talablarining amaliy boshqaruvdagi ahamiyati nimada?',
      options: [
        'Faqat yakuniy bahoni belgilashda',
        'Ta’limni amalga oshirish uchun zarur shart va talablarni boshqarishda',
        'Faqat o‘qituvchi malakasini baholashda',
        'Faqat o‘quvchi reytingini tuzishda',
      ],
      answer: 1,
      explanation:
        'DTT ta’limni tashkil etishning majburiy shartlari va talablarini belgilash orqali jarayonni boshqarishga xizmat qiladi.',
    },

    {
      id: 'm2t1-h18',
      text: 'DTS va DTTni farqlash direktor qarorlariga qanday ta’sir qiladi?',
      options: [
        'Natija va uni ta’minlovchi shartlarni alohida boshqarish imkonini beradi',
        'Faqat hujjatlarni ko‘paytiradi',
        'Faqat baholarni standartlashtiradi',
        'Faqat o‘qituvchi yuklamasini belgilaydi',
      ],
      answer: 0,
      explanation:
        'DTS natijaviy talablarni, DTT esa ularni ta’minlash shartlarini boshqarishda yo‘nalish beradi.',
    },

    {
      id: 'm2t1-h19',
      text: 'Qaysi vaziyat dalilga asoslangan boshqaruvning kuchli namunasidir?',
      options: [
        'Direktor bir darsni ko‘rib, umumiy xulosa chiqaradi',
        'Diagnostika, dars kuzatuvi, mezonlar auditi va ota-ona fikri solishtiriladi',
        'Faqat o‘qituvchi fikri olinadi',
        'Faqat yakuniy baholar tahlil qilinadi',
      ],
      answer: 1,
      explanation:
        'Bir nechta mustaqil manbalarni triangulyatsiya qilish xulosaning ishonchliligini oshiradi.',
    },

    {
      id: 'm2t1-h20',
      text: 'Ichki monitoringda o‘quvchi va ota-ona fikri yuqori, lekin diagnostika past natija ko‘rsatdi. Eng maqbul xulosa?',
      options: [
        'Fikrlarni butunlay rad etish',
        'Diagnostikani ham, teskari aloqani ham qo‘shimcha kontekst sifatida tahlil qilish',
        'Faqat ota-ona fikriga tayanish',
        'Faqat diagnostikaga tayanish',
      ],
      answer: 1,
      explanation:
        'Turli manbalar turli jihatlarni ko‘rsatadi; ularni birgalikda tahlil qilish kerak.',
    },

    {
      id: 'm2t1-h21',
      text: 'Tashqi baholashda talablar bajarilgan, ammo ichki monitoring natijalari tizimli ravishda qayd etilmagan. Qaysi xavf mavjud?',
      options: [
        'Amaliyotning daliliy izlari yetarli bo‘lmasligi',
        'DTS bekor bo‘lishi',
        'O‘quv dasturi o‘zgarishi',
        'Baholash mezonlari yo‘qolishi',
      ],
      answer: 0,
      explanation:
        'Sifat tizimida bajarilgan ishlarning daliliy bazasi ham muhim boshqaruv komponentidir.',
    },

    {
      id: 'm2t1-h22',
      text: 'Qaysi holatda “doimiy takomillashtirish” tamoyili to‘liq ishlamayapti?',
      options: [
        'Muammo aniqlanib, chora ko‘rilib, qayta o‘lchanadi',
        'Muammo aniqlanadi, chora belgilanadi, lekin natija qayta o‘lchanmaydi',
        'Indikatorlar belgilanadi',
        'Monitoring muntazam olib boriladi',
      ],
      answer: 1,
      explanation:
        'Qayta o‘lchash bo‘lmasa, ko‘rilgan choraning samaradorligi aniqlanmaydi.',
    },

    {
      id: 'm2t1-h23',
      text: 'Direktor metodik yordamni umumiy seminar bilan chekladi, lekin muammo ayrim o‘qituvchilarda aniq ko‘rinmoqda. Qaysi yondashuv samaraliroq?',
      options: [
        'Faqat umumiy seminarlarni ko‘paytirish',
        'Aniq ehtiyoj asosida mentoring, coaching va ustoz-shogird yordamidan foydalanish',
        'Monitoringni to‘xtatish',
        'Faqat hisobot talab qilish',
      ],
      answer: 1,
      explanation:
        'Rivojlantiruvchi boshqaruv individual yoki guruh ehtiyojiga mos metodik yordamni talab qiladi.',
    },

    {
      id: 'm2t1-h24',
      text: 'Bir maktabda davomat pasaydi, lekin o‘quv natijalari o‘zgarmadi. Direktor qanday yo‘l tutishi kerak?',
      options: [
        'Davomatni natijaga ta’sir qilmaydi deb hisoblash',
        'Davomat va boshqa indikatorlar o‘rtasidagi bog‘liqlikni vaqt davomida kuzatish',
        'Darhol barcha o‘quvchilarni jazolash',
        'Faqat yakuniy baholarni tekshirish',
      ],
      answer: 1,
      explanation:
        'Indikatorlar o‘rtasidagi dinamik bog‘liqlikni vaqt davomida kuzatish aniqroq xulosa beradi.',
    },

    {
      id: 'm2t1-h25',
      text: 'Qaysi variant “uch halqa”ni boshqaruv sikliga eng to‘g‘ri joylashtiradi?',
      options: [
        'Ichki monitoring → tashqi baholash → jamoatchilik ishonchi',
        'Tashqi baholash → ichki monitoring → hujjatlar',
        'Jamoatchilik ishonchi → buyruq → monitoring',
        'Ichki monitoring → faqat hisobot → tashqi baholash',
      ],
      answer: 0,
      explanation:
        'Uch halqa o‘zaro bog‘liq: ichki sifat nazorati, tashqi baho va jamoatchilik ishonchi.',
    },

    {
      id: 'm2t1-h26',
      text: 'Qaysi indikator kombinatsiyasi o‘quvchi natijasi pasayishining sababini aniqlashga ko‘proq yordam beradi?',
      options: [
        'Faqat yakuniy baholar',
        'Natija + jarayon + muhit/resurs',
        'Faqat davomat',
        'Faqat ota-ona fikri',
      ],
      answer: 1,
      explanation:
        'Natijani jarayon va muhit bilan bog‘lash sabablarni kompleks tahlil qilish imkonini beradi.',
    },

    {
      id: 'm2t1-h27',
      text: 'Direktor “o‘qituvchi metodik jihatdan sust” degan xulosani faqat bir kuzatuv asosida chiqardi. Qaysi tamoyil buzilgan?',
      options: [
        'Dalilga asoslangan boshqaruv',
        'Doimiy takomillashtirish',
        'Kompetensiyaviy yondashuv',
        'Raqamli ta’lim',
      ],
      answer: 0,
      explanation:
        'Birgina kuzatuv keng xulosa uchun yetarli dalil bo‘lmasligi mumkin.',
    },

    {
      id: 'm2t1-h28',
      text: 'Ta’lim sifati yuqori bo‘lishiga qaramay, psixologik iqlim yomonlashmoqda. Direktor qanday qarashi kerak?',
      options: [
        'Natijalar yaxshi ekan, muhitni e’tiborsiz qoldirish',
        'Muhit indikatorini alohida monitoring qilib, kelajakdagi natijalarga ta’sirini baholash',
        'Faqat o‘qituvchilarni almashtirish',
        'Faqat ota-onalar yig‘ilishini ko‘paytirish',
      ],
      answer: 1,
      explanation:
        'Psixologik iqlim ta’lim sifatining muhim muhit omili bo‘lib, uni oldindan boshqarish zarur.',
    },

    {
      id: 'm2t1-h29',
      text: 'Qaysi boshqaruv qarori “natijaga yo‘naltirilgan” va “jarayonga yo‘naltirilgan” boshqaruvni uyg‘unlashtiradi?',
      options: [
        'Faqat yakuniy natijani tekshirish',
        'Natijani o‘lchab, unga ta’sir qiluvchi jarayonlarni tuzatish',
        'Faqat dars kuzatuvini ko‘paytirish',
        'Faqat tashqi baholashga tayyorlanish',
      ],
      answer: 1,
      explanation:
        'Sifat boshqaruvi natijani o‘lchash va natijaga olib keluvchi jarayonlarni yaxshilashni birlashtiradi.',
    },

    {
      id: 'm2t1-h30',
      text: 'Direktor sifat boshqaruvini kuchaytirish uchun bitta asosiy mexanizm tanlashi kerak. Qaysi variant eng tizimli?',
      options: [
        'Faqat nazorat jadvalini ko‘paytirish',
        'Indikatorlar asosidagi monitoringni muammo-sabab-yechim-qayta o‘lchash sikli bilan bog‘lash',
        'Faqat yakuniy baholarni tahlil qilish',
        'Faqat tashqi baholashga tayyorlanish',
      ],
      answer: 1,
      explanation:
        'Indikatorlar va takomillashtirish sikli monitoringni real boshqaruv mexanizmiga aylantiradi.',
    },
  ],

  /* =========================================================
     🔵 10 TA KEYS
  ========================================================= */
  case: [
    {
      id: 'm2t1-c01',
      text: `96-sonli maktabda chorak yakunida ayrim fanlarda natijalar pasaydi, davomat tushdi va baholash mezonlari turlicha qo‘llanayotgani aniqlandi. Ichki monitoring muammo faqat dars sifati emasligini, psixologik iqlim, formativ baholash, dastur ijrosi va xavf guruhidagi o‘quvchilar monitoringi ham muhimligini ko‘rsatdi. Direktor qaysi harakatlar to‘plamini tanlashi eng maqbul?`,
      options: [
        'Faqat yakuniy baholarni tekshirish va past natijali o‘qituvchilarni ogohlantirish',
        'Natija, jarayon va muhit indikatorlarini belgilab, diagnostika, dars kuzatuvi, mezonlar auditi va teskari aloqani muammo-sabab-yechim-qayta o‘lchash sikliga kiritish',
        'Faqat tashqi baholashga tayyorlanish va hujjatlarni tartibga keltirish',
        'Faqat davomatni tiklashga qaratilgan choralarni kuchaytirish',
      ],
      answer: 1,
      explanation:
        'Vaziyat ko‘p omilli. Shuning uchun indikatorlar va turli monitoring vositalarini yagona boshqaruv sikliga birlashtirish kerak.',
    },

    {
      id: 'm2t1-c02',
      text: `87-sonli maktabda natijalar pasaydi. Dastlab direktor ayrim o‘qituvchilarni sabab deb hisoblagan. Keyingi tahlil dastur ijrosi, baholash mezonlari, psixologik muhit, ota-onalar bilan hamkorlik va ichki monitoringda ham muammolar borligini ko‘rsatdi. Eng to‘g‘ri boshqaruv yondashuvini aniqlang.`,
      options: [
        'Natijani faqat o‘qituvchi faoliyati bilan bog‘lash',
        'Natijani dars, dastur, baholash, muhit, davomat va hamkorlik bilan bog‘liq yagona tizim sifatida boshqarish',
        'Faqat DTS va DTT hujjatlarini tekshirish',
        'Faqat pasaygan fanlarda tezkor nazoratni kuchaytirish',
      ],
      answer: 1,
      explanation:
        'Muammo tizimli bo‘lgani uchun natija va unga ta’sir qiluvchi omillar birgalikda boshqarilishi kerak.',
    },

    {
      id: 'm2t1-c03',
      text: `118-sonli maktabda ayrim sinflarda natijalar va davomat pasaydi. Formativ baholash yetarli emas, dastur ijrosida tafovut bor, xavf guruhidagi o‘quvchilar kuzatuvi va ota-onalar bilan aloqa sust. Direktor tizimli boshqaruvni boshlamoqchi. Qaysi variant eng to‘g‘ri?`,
      options: [
        'Faqat past natijali sinflarni qo‘shimcha nazoratga olish',
        'Natijalar bilan birga dastur ijrosi, formativ baholash, xavf guruhi va teskari aloqani indikatorlar orqali kuzatish',
        'Faqat ota-onalar yig‘ilishini ko‘paytirish',
        'Faqat o‘qituvchilar malakasini oshirish',
      ],
      answer: 1,
      explanation:
        'Vaziyatda bir nechta sabab mavjud. Shuning uchun tizimli indikatorlar asosidagi monitoring zarur.',
    },

    {
      id: 'm2t1-c04',
      text: `124-sonli maktabda natijalar pasaydi, diagnostika muntazam olinmaydi, xavf guruhi ma’lumotlari tizimlashtirilmagan va metodik yordam umumiy tavsiyalar bilan cheklangan. Direktor sifat boshqaruvini kuchaytirmoqchi. Qaysi harakatlar to‘plami eng maqbul?`,
      options: [
        '1) natija indikatorlari; 2) jarayon va muhit indikatorlari; 3) manba-muddat-mas’ul; 4) qayta o‘lchash',
        '1) faqat yakuniy baholar; 2) faqat davomat; 3) umumiy yig‘ilish; 4) hisobot',
        '1) faqat dars kuzatuvi; 2) ogohlantirish; 3) tashqi baholash; 4) mukofot',
        '1) hujjatlarni ko‘paytirish; 2) barcha o‘qituvchilarga bir xil metod; 3) nazorat; 4) hisobot',
      ],
      answer: 0,
      explanation:
        'Sifat tizimi indikatorlar, aniq mas’uliyat, muddat va qayta o‘lchash orqali boshqariladigan jarayonga aylanadi.',
    },

    {
      id: 'm2t1-c05',
      text: `101-sonli maktabda natijalar pasayishi sabablarini aniqlash uchun direktor diagnostika, dars kuzatuvi, baholash mezonlari auditi va teskari aloqa ma’lumotlarini yig‘di. Keyingi qadam sifatida nima qilishi kerak?`,
      options: [
        'Ma’lumotlarni faqat hisobot sifatida saqlash',
        'Muammo va sabablarni aniqlab, aniq chora, mas’ul va muddat belgilash hamda qayta o‘lchash',
        'Faqat eng past natijali o‘qituvchilarni ogohlantirish',
        'Tashqi baholashni kutish',
      ],
      answer: 1,
      explanation:
        'Monitoring ma’lumotlari boshqaruv chorasi va qayta o‘lchash bilan yakunlanishi kerak.',
    },

    {
      id: 'm2t1-c06',
      text: `Maktabda yangi kompetensiyaviy metodni joriy qilish rejalashtirildi. Direktor uni birdan barcha sinflarda qo‘llash o‘rniga avval ikki sinfda sinab ko‘rishni rejalashtirdi. Keyin metodik coaching, indikatorlar va qayta o‘lchashni nazarda tutdi. Bu qarorning asosiy afzalligi nimada?`,
      options: [
        'Innovatsiyani tezroq majburiylashtirishda',
        'Pilot orqali riskni kamaytirib, natijani tekshirish va samarali modelni kengaytirishda',
        'Monitoringni kamaytirishda',
        'O‘qituvchilarni bir xil usulga majburlashda',
      ],
      answer: 1,
      explanation:
        'Pilot, metodik yordam va qayta o‘lchash innovatsiyani dalil asosida kengaytirish imkonini beradi.',
    },

    {
      id: 'm2t1-c07',
      text: `Maktabda tashqi baholash yaqinlashmoqda. Hujjatlar tartibli, lekin ayrim baholash mezonlari amaliyotda turlicha qo‘llanadi. Direktor nima qilishi kerak?`,
      options: [
        'Faqat hujjatlarni qayta bezash',
        'Baholash mezonlari auditi, dars kuzatuvi va qisqa diagnostika orqali amaliyotdagi tafovutlarni aniqlash',
        'Faqat direktor buyrug‘i bilan barcha baholarni tenglashtirish',
        'Tashqi ekspertlarning kelishini kutish',
      ],
      answer: 1,
      explanation:
        'Tashqi baholashga tayyorgarlik hujjat bilan birga real amaliyotning standartlarga mosligini ham qamrab oladi.',
    },

    {
      id: 'm2t1-c08',
      text: `Maktabda ota-onalar qoniqishi 87 foiz, biroq o‘quvchilarning mustaqil fikrlash bo‘yicha diagnostika natijalari past. Direktor qaysi qarorni qabul qilishi kerak?`,
      options: [
        'Ota-onalar fikrini asosiy va yagona ko‘rsatkich deb olish',
        'Diagnostika natijasini ham, ota-onalar fikrini ham turli indikator sifatida tahlil qilish',
        'Faqat diagnostikani rad etish',
        'Faqat ota-onalar bilan ishlashni kuchaytirish',
      ],
      answer: 1,
      explanation:
        'Turli ma’lumot manbalari ta’lim sifatining turli jihatlarini ko‘rsatadi va birgalikda tahlil qilinadi.',
    },

    {
      id: 'm2t1-c09',
      text: `Maktabda o‘quv natijalari yuqori, lekin psixologik iqlim bo‘yicha o‘quvchilar fikri salbiylashgan. Davomat ham ayrim sinflarda pasaya boshlagan. Direktor qanday qaror qilishi eng maqbul?`,
      options: [
        'Natijalar yuqori bo‘lgani uchun muhit muammosini e’tiborsiz qoldirish',
        'Muhit va davomat indikatorlarini kuzatib, sabablarni aniqlash va profilaktik chora ko‘rish',
        'Faqat baholarni oshirish',
        'Faqat ota-onalar yig‘ilishini o‘tkazish',
      ],
      answer: 1,
      explanation:
        'Muhitdagi salbiy o‘zgarishlar kelajakdagi natijalarga ta’sir qilishi mumkin, shuning uchun ularni erta boshqarish zarur.',
    },

    {
      id: 'm2t1-c10',
      text: `Maktabda ichki monitoring uch oy davomida bir xil muammoni qayd etdi: baholash mezonlari ayrim fanlarda turlicha qo‘llanmoqda. Direktor avvalgi yig‘ilishlarda bu masalani muhokama qilgan, ammo natija o‘zgarmagan. Endi qaysi harakat eng to‘g‘ri?`,
      options: [
        'Yana umumiy yig‘ilish o‘tkazish',
        'Muammoning aniq sabablarini mezonlar auditi orqali aniqlab, mas’ul, muddat va qayta o‘lchash mezonlarini belgilash',
        'Faqat o‘qituvchilarga ogohlantirish berish',
        'Monitoringni vaqtincha to‘xtatish',
      ],
      answer: 1,
      explanation:
        'Takroriy muammo aniq boshqaruv chorasi va nazorat mexanizmini talab qiladi.',
    },
  ],
}
