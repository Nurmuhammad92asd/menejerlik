import type { Question } from '../quiz-data'

export const M1T4_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  easy: [
    {
      id: 'm1t4e01',
      text: 'Korrupsiyaning ta’lim tizimiga asosiy xavfi nimada?',
      options: [
        'Ta’lim sifati va jamoatchilik ishonchiga zarar yetkazishida',
        'Faqat dars vaqtini o‘zgartirishida',
        'Faqat sinflar sonini kamaytirishida',
        'Faqat o‘quv dasturini qisqartirishida',
      ],
      answer: 0,
      explanation:
        'Korrupsiya resurslardan noto‘g‘ri foydalanish, adolatsizlik va jamoatchilik ishonchining pasayishiga olib kelishi mumkin.',
    },
    {
      id: 'm1t4e02',
      text: 'Korrupsiyaga qarshi boshqaruvning asosiy maqsadi qaysi?',
      options: [
        'Faqat jazolashni kuchaytirish',
        'Korrupsiyaviy xavflarning oldini olish va kamaytirish',
        'Hujjatlar sonini oshirish',
        'Nazoratni butunlay bekor qilish',
      ],
      answer: 1,
      explanation:
        'Samarali tizim korrupsiya sodir bo‘lgandan keyingi jazodan tashqari, uning oldini olishga ham qaratiladi.',
    },
    {
      id: 'm1t4e03',
      text: 'Manfaatlar to‘qnashuvi nimani anglatadi?',
      options: [
        'Ikki xodimning fikri turlicha bo‘lishini',
        'Xodimning ta’tilga chiqishini',
        'Shaxsiy manfaat xizmat vazifasiga ta’sir qilishi mumkin bo‘lgan vaziyatni',
        'Jamoada vazifalar taqsimlanishini',
      ],
      answer: 2,
      explanation:
        'Manfaatlar to‘qnashuvi shaxsiy manfaat xizmat vazifalarini xolis bajarishga ta’sir qilishi mumkin bo‘lgan vaziyatdir.',
    },
    {
      id: 'm1t4e04',
      text: 'ISO 37001:2016 qaysi yo‘nalish bilan bog‘liq?',
      options: [
        'Korrupsiyaga qarshi boshqaruv tizimi',
        'O‘quvchilar davomatini yuritish',
        'Dars jadvalini shakllantirish',
        'Mehnat ta’tilini rejalashtirish',
      ],
      answer: 0,
      explanation:
        'ISO 37001 korrupsiyaga qarshi boshqaruv tizimlariga oid xalqaro standartdir.',
    },
    {
      id: 'm1t4e05',
      text: 'Raqamlashtirish korrupsiyaviy xavflarni kamaytirishda qanday imkoniyat beradi?',
      options: [
        'Barcha xodimlarni nazoratdan chiqaradi',
        'Jarayonlarning kuzatilishi va shaffofligini oshiradi',
        'Faqat qog‘oz hujjatlarni ko‘paytiradi',
        'Qarorlarni inson ishtirokisiz qabul qiladi',
      ],
      answer: 1,
      explanation:
        'Raqamli tizimlar jarayonlarning izini saqlash va qarorlarni kuzatish imkonini berishi mumkin.',
    },
    {
      id: 'm1t4e06',
      text: 'Elektron qabul tizimining korrupsiyaga qarshi foydasi nimada?',
      options: [
        'Qabul jarayonini bekor qilishida',
        'Ota-onalarni jarayondan chiqarishida',
        'Arizalar va navbatni kuzatishni osonlashtirishida',
        'Faqat qog‘oz hujjatlarni almashtirishida',
      ],
      answer: 2,
      explanation:
        'Elektron ro‘yxatga olish ariza va navbat jarayonlarini kuzatish hamda manipulyatsiya xavfini kamaytirishga yordam beradi.',
    },
    {
      id: 'm1t4e07',
      text: 'O‘qituvchini ishga qabul qilishda ochiq mezonlar nima uchun kerak?',
      options: [
        'Nomzodlar uchun teng va tushunarli shart yaratish uchun',
        'Tanlovni yashirish uchun',
        'Faqat suhbatni qisqartirish uchun',
        'Komissiya ishini bekor qilish uchun',
      ],
      answer: 0,
      explanation:
        'Ochiq mezonlar tanlov ishtirokchilari uchun tushunarli va taqqoslanadigan talablarni belgilaydi.',
    },
    {
      id: 'm1t4e08',
      text: 'Moliyaviy nazoratning asosiy vazifasi nima?',
      options: [
        'Xaridlarni cheklash',
        'Mablag‘lardan qonuniy va maqsadli foydalanishni nazorat qilish',
        'Hisobotlarni kamaytirish',
        'Xarajatlarni yashirish',
      ],
      answer: 1,
      explanation:
        'Moliyaviy nazorat mablag‘larning maqsadli va qonuniy ishlatilishini kuzatishga xizmat qiladi.',
    },
    {
      id: 'm1t4e09',
      text: 'Jamoatchilik nazorati korrupsiyaga qarshi tizimda nimani kuchaytiradi?',
      options: [
        'Yopiq boshqaruvni',
        'Norasmiy kelishuvlarni',
        'Shaffoflik va hisobdorlikni',
        'Faqat ichki hujjatlarni',
      ],
      answer: 2,
      explanation:
        'Jamoatchilik ishtiroki tashkilot faoliyati haqida ochiqlik va hisobdorlikni kuchaytirishi mumkin.',
    },
    {
      id: 'm1t4e10',
      text: 'Proaktiv yondashuvning asosiy belgisi qaysi?',
      options: [
        'Xavfni sodir bo‘lishidan oldin aniqlash',
        'Faqat jazolash',
        'Muammoni yashirish',
        'Shikoyat kelishini kutish',
      ],
      answer: 0,
      explanation:
        'Proaktiv boshqaruv muammoni sodir bo‘lishidan oldin aniqlash va oldini olishga intiladi.',
    },
    {
      id: 'm1t4e11',
      text: '“Halollik vaksinasi” tushunchasi nimaga qaratilgan?',
      options: [
        'Faqat intizomiy jazoga',
        'Halollik va axloqiy mas’uliyatni shakllantirishga',
        'Faqat baholarni oshirishga',
        'Faqat huquqiy hujjatlarni yodlashga',
      ],
      answer: 1,
      explanation:
        'Halollik vaksinasi halollik, adolat va mas’uliyat kabi qadriyatlarni tizimli shakllantirishga yo‘naltiriladi.',
    },
    {
      id: 'm1t4e12',
      text: '“Halollik daqiqasi”ning asosiy mazmuni nimaga yaqin?',
      options: [
        'Faqat nazorat ishini o‘tkazish',
        'Faqat intizomiy ogohlantirish berish',
        'Halollik va axloqiy masalalarni muhokama qilish',
        'Faqat baholarni tekshirish',
      ],
      answer: 2,
      explanation:
        '“Halollik daqiqasi” o‘quvchilarda axloqiy qarash va mas’uliyatni rivojlantirishga xizmat qilishi mumkin.',
    },
    {
      id: 'm1t4e13',
      text: 'Halollik ta’limida qaysi uchlik muhim?',
      options: [
        'Tezlik, tartib, nazorat',
        'Halollik, adolat, mas’uliyat',
        'Baholash, davomat, jadval',
        'Moliya, xarid, hisobot',
      ],
      answer: 1,
      explanation:
        'Halollik, adolat va mas’uliyat korrupsiyaga qarshi axloqiy madaniyatning muhim tarkibiy qismlaridir.',
    },
    {
      id: 'm1t4e14',
      text: 'Rahbarning shaxsiy namunasi nima uchun muhim?',
      options: [
        'Xodimlar uning amaliy xatti-harakatidan boshqaruv me’yorlarini ko‘radi',
        'Faqat hujjatlar sonini kamaytiradi',
        'Faqat yig‘ilish vaqtini qisqartiradi',
        'Nazoratni to‘liq almashtiradi',
      ],
      answer: 0,
      explanation:
        'Rahbarning o‘zi halollik va xolislikka amal qilishi tashkilotdagi axloqiy muhitga ta’sir qiladi.',
    },
    {
      id: 'm1t4e15',
      text: 'Korrupsiyaviy xavfni aniqlashda avvalo nima o‘rganiladi?',
      options: [
        'Faqat xodimlarning shaxsiy hayoti',
        'Faqat o‘quvchilar soni',
        'Xavf yuzaga kelishi mumkin bo‘lgan jarayonlar',
        'Faqat dars jadvali',
      ],
      answer: 2,
      explanation:
        'Xavfni baholashda korrupsiya yuzaga kelishi mumkin bo‘lgan vazifa, funksiya va jarayonlar o‘rganiladi.',
    },
    {
      id: 'm1t4e16',
      text: 'Tanish-bilish asosida ishga qabul qilish qanday xavfga misol?',
      options: [
        'Kadrlar tanlovidagi korrupsiyaviy xavf',
        'Pedagogik innovatsiya',
        'Raqamli transformatsiya',
        'Ta’lim sifatini oshirish',
      ],
      answer: 0,
      explanation:
        'Nomzodni malakasiga emas, shaxsiy aloqasiga ko‘ra qo‘llab-quvvatlash adolatli tanlov tamoyiliga zid xavf tug‘diradi.',
    },
    {
      id: 'm1t4e17',
      text: 'Baholashda o‘quvchiga shaxsiy manfaat asosida ustunlik berish nimani buzadi?',
      options: [
        'Dars jadvalini',
        'Adolat va xolislik tamoyilini',
        'Sinf xonasining joylashuvini',
        'O‘quv dasturi hajmini',
      ],
      answer: 1,
      explanation:
        'Baholashda shaxsiy manfaat asosida ustunlik berish xolislik va adolat tamoyillarini buzadi.',
    },
    {
      id: 'm1t4e18',
      text: 'Korrupsiyani “oddiy holat” deb qabul qilish qaysi xavfga yaqin?',
      options: [
        'Texnik xavf',
        'Axloqiy va ijtimoiy xavf',
        'Tabiiy xavf',
        'Faqat moliyaviy xavf',
      ],
      answer: 1,
      explanation:
        'Korrupsiyani odatiy deb qabul qilish axloqiy me’yorlarning zaiflashishiga olib kelishi mumkin.',
    },
    {
      id: 'm1t4e19',
      text: 'Ichki nazorat mexanizmlarining amalda ishlamasligi qanday omil?',
      options: [
        'Tashkiliy omil',
        'Biologik omil',
        'Tabiiy omil',
        'Iqlimiy omil',
      ],
      answer: 0,
      explanation:
        'Ichki nazorat va reglamentlarning samarali ishlamasligi tashkilotning tashkiliy tizimiga bog‘liq xavfdir.',
    },
    {
      id: 'm1t4e20',
      text: 'Shaxsiy manfaatni xizmat manfaatidan ustun qo‘yish qaysi xavf bilan bog‘liq?',
      options: [
        'Psixologik xavf',
        'Texnik xavf',
        'Tabiiy xavf',
        'Logistik xavf',
      ],
      answer: 0,
      explanation:
        'Shaxsiy manfaatning ustun qo‘yilishi shaxsning qaror qabul qilish xatti-harakatiga bog‘liq psixologik xavfni bildiradi.',
    },
    {
      id: 'm1t4e21',
      text: 'Korrupsiyaga qarshi o‘qitishning vazifalaridan biri nima?',
      options: [
        'Faqat hujjatlarni ko‘paytirish',
        'Xodimlarning huquqiy va axloqiy xabardorligini oshirish',
        'Faqat nazoratni bekor qilish',
        'Faqat ish vaqtini uzaytirish',
      ],
      answer: 1,
      explanation:
        'O‘qitish xodimlarga korrupsiyaviy xavflarni tanish, oldini olish va tegishli tartibda harakat qilishga yordam beradi.',
    },
    {
      id: 'm1t4e22',
      text: 'Korrupsiyaga moyil munosabatlar reyestri nima uchun yuritiladi?',
      options: [
        'Xavfli munosabatlarni kuzatish va tahlil qilish uchun',
        'Davomatni hisoblash uchun',
        'Dars jadvalini tuzish uchun',
        'Ish haqini avtomatik hisoblash uchun',
      ],
      answer: 0,
      explanation:
        'Reyestr korrupsiyaga moyil munosabatlarni tizimli ravishda kuzatish va monitoring qilishga xizmat qiladi.',
    },
    {
      id: 'm1t4e23',
      text: 'Korrupsiya holati aniqlanganda rahbarning vazifasi qaysi?',
      options: [
        'Holatni yashirish',
        'Uni keyingi yilga qoldirish',
        'Tegishli tartibda choralar ko‘rish',
        'Faqat og‘zaki gaplashish',
      ],
      answer: 2,
      explanation:
        'Aniqlangan holat tegishli tartibda ko‘rib chiqilishi va qonuniy hamda profilaktik choralar ko‘rilishi kerak.',
    },
    {
      id: 'm1t4e24',
      text: 'Moliyaviy korrupsiyaga qaysi holat misol bo‘lishi mumkin?',
      options: [
        'Majburiy norasmiy to‘lov talab qilish',
        'Ochiq hisobot berish',
        'Elektron xarid qilish',
        'Bepul maslahat berish',
      ],
      answer: 0,
      explanation:
        'Majburiy norasmiy to‘lov talab qilish moliyaviy manfaat bilan bog‘liq korrupsiyaviy xavf tug‘diradi.',
    },
    {
      id: 'm1t4e25',
      text: 'Ochiq xarid jarayonining asosiy afzalligi nimada?',
      options: [
        'Xaridni yashirishda',
        'Shaffoflik va kuzatuvchanlikni oshirishda',
        'Nazoratni kamaytirishda',
        'Hujjatlarni yo‘q qilishda',
      ],
      answer: 1,
      explanation:
        'Ochiq xarid jarayoni qarorlar va mablag‘lardan foydalanish ustidan kuzatuv imkonini oshiradi.',
    },
    {
      id: 'm1t4e26',
      text: 'Auditning korrupsiyaga qarshi ahamiyati nimada?',
      options: [
        'Moliyaviy operatsiyalar va hujjatlarni tekshirish imkonini beradi',
        'Barcha qarorlarni bekor qiladi',
        'Xodimlarni avtomatik almashtiradi',
        'Darslarni qisqartiradi',
      ],
      answer: 0,
      explanation:
        'Audit moliyaviy operatsiyalar, hujjatlar va nazorat mexanizmlarining holatini tekshirishga yordam beradi.',
    },
    {
      id: 'm1t4e27',
      text: 'Shaffoflikning asosiy mazmuni nimaga yaqin?',
      options: [
        'Muhim jarayon va qarorlar haqida tegishli ma’lumotlarning ochiqligi',
        'Barcha ma’lumotlarni yashirish',
        'Faqat rahbarga ma’lumot berish',
        'Hujjatlarni kamaytirish',
      ],
      answer: 0,
      explanation:
        'Shaffoflik tegishli jarayonlar va qarorlar haqida ma’lumotlarning tushunarli va kuzatiladigan bo‘lishini anglatadi.',
    },
    {
      id: 'm1t4e28',
      text: 'Hisobdorlik tushunchasi nimani anglatadi?',
      options: [
        'Qaror va faoliyat natijalari uchun javob berish',
        'Faqat hujjatlarni saqlash',
        'Faqat topshiriq berish',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Hisobdorlik rahbar va xodimlarning o‘z faoliyati, qarorlari va natijalari yuzasidan javob berishini nazarda tutadi.',
    },
    {
      id: 'm1t4e29',
      text: 'Korrupsiyaning oldini olishda eng to‘g‘ri umumiy yondashuv qaysi?',
      options: [
        'Faqat jazolash',
        'Faqat shikoyatlarni kutish',
        'Oldini olish, nazorat va monitoringni birlashtirish',
        'Nazoratni butunlay bekor qilish',
      ],
      answer: 2,
      explanation:
        'Barqaror tizim profilaktika, nazorat, monitoring va zarur hollarda javob choralarini birlashtiradi.',
    },
    {
      id: 'm1t4e30',
      text: 'Korrupsiyaviy xavfni kamaytirish jarayonining mantiqiy boshlang‘ich nuqtasi qaysi?',
      options: [
        'Xavfni aniqlash',
        'Jazo tayinlash',
        'Hisobotni yopish',
        'Muammoni yashirish',
      ],
      answer: 0,
      explanation:
        'Xavfni boshqarish uchun avvalo uning qayerda va qanday yuzaga kelishi mumkinligini aniqlash zarur.',
    },
  ],

  medium: [
    {
      id: 'm1t4m01',
      text: 'Elektron qabul tizimi joriy etildi, ammo navbatdagi o‘zgarishlar qayd etilmaydi. Qaysi xavf saqlanadi?',
      options: [
        'Ma’lumotlarni manipulyatsiya qilish imkoniyati',
        'Elektron tizimning tez ishlashi',
        'Ota-onalar xabardorligining ortishi',
        'Jarayonning avtomatik shaffofligi',
      ],
      answer: 0,
      explanation:
        'Elektron shaklning o‘zi yetarli emas; o‘zgarishlar qayd etilmasa, jarayonni keyinchalik tekshirish qiyinlashadi.',
    },
    {
      id: 'm1t4m02',
      text: 'Ishga qabul qilishda test elektron, lekin baholash mezonlari oldindan e’lon qilinmagan. Eng muhim kamchilik nima?',
      options: [
        'Testning elektronligi',
        'Mezonlarning yetarlicha shaffof emasligi',
        'Nomzodlar sonining ko‘pligi',
        'Kompyuterdan foydalanish',
      ],
      answer: 1,
      explanation:
        'Elektron test jarayonni raqamlashtiradi, lekin adolat uchun baholash mezonlari ham tushunarli bo‘lishi kerak.',
    },
    {
      id: 'm1t4m03',
      text: 'Xaridlar elektron platformada o‘tkaziladi, ammo xarajatning yakuniy hujjatlari tekshirilmaydi. Qaysi bosqich zaif?',
      options: [
        'Xaridni boshlash',
        'Moliyaviy nazorat va yakuniy hisobdorlik',
        'E’lon berish',
        'Nomzodlarni saralash',
      ],
      answer: 1,
      explanation:
        'Xarid jarayonining ochiqligi bilan birga mablag‘ sarfining hujjatli tasdig‘i ham nazorat qilinishi kerak.',
    },
    {
      id: 'm1t4m04',
      text: 'Rahbar faqat korrupsiya sodir bo‘lgandan keyin tekshiruv o‘tkazadi. Qaysi boshqaruv elementi yetishmaydi?',
      options: [
        'Proaktiv xavf tahlili',
        'Jazo chorasi',
        'Yakuniy hisobot',
        'Ichki buyruq',
      ],
      answer: 0,
      explanation:
        'Faqat sodir bo‘lgan holatni tekshirish reaktiv yondashuvdir; oldindan xavfni baholash ham zarur.',
    },
    {
      id: 'm1t4m05',
      text: 'Kadrlar tanlovida barcha nomzodlar bir xil mezon asosida baholandi, lekin komissiya qarorlari qayd etilmadi. Nima kuchsiz?',
      options: [
        'Nomzodlarning huquqi',
        'Qarorlarning kuzatiluvchanligi',
        'Test mazmuni',
        'Ish o‘rinlari soni',
      ],
      answer: 1,
      explanation:
        'Qarorlarning qayd etilishi keyinchalik tanlov jarayonini tekshirish va hisobdorlikni ta’minlashga yordam beradi.',
    },
    {
      id: 'm1t4m06',
      text: 'Maktabda korrupsiyaga qarshi qoidalar bor, ammo xodimlar ularni bilmaydi. Birinchi amaliy qadam qaysi?',
      options: [
        'Qoidalarni bekor qilish',
        'Muntazam tushuntirish va o‘qitishni tashkil etish',
        'Faqat jazoni kuchaytirish',
        'Hujjatlarni yashirish',
      ],
      answer: 1,
      explanation:
        'Qoidaning mavjudligi uning mazmuni xodimlarga yetkazilmasa yetarli samara bermaydi.',
    },
    {
      id: 'm1t4m07',
      text: 'Ota-onalar xaridlar haqida ma’lumot so‘rashmoqda. Rahbarning shaffoflik nuqtayi nazaridan yondashuvi qanday bo‘lishi kerak?',
      options: [
        'Tegishli va ochiq ma’lumotlarni belgilangan tartibda taqdim etish',
        'Barcha ma’lumotlarni yashirish',
        'Faqat norasmiy tushuntirish berish',
        'Savolni javobsiz qoldirish',
      ],
      answer: 0,
      explanation:
        'Tegishli ma’lumotlarni belgilangan tartibda ochiqlash hisobdorlik va jamoatchilik nazoratini kuchaytiradi.',
    },
    {
      id: 'm1t4m08',
      text: 'Bir jarayonda uchta nazorat mavjud, ammo ularning hech biri mas’ul shaxsga biriktirilmagan. Asosiy muammo nimada?',
      options: [
        'Nazoratning ko‘pligida',
        'Mas’uliyat va javobgarlikning noaniqligida',
        'Elektron tizimning mavjudligida',
        'Hisobotlarning kamligida',
      ],
      answer: 1,
      explanation:
        'Nazorat mexanizmi aniq mas’uliyat bilan bog‘lanmasa, uning natijasini talab qilish qiyinlashadi.',
    },
    {
      id: 'm1t4m09',
      text: 'Korrupsiyaviy xavfni baholashda qaysi ketma-ketlik mantiqan to‘g‘ri?',
      options: [
        'Jazo → unutish → monitoring',
        'Aniqlash → baholash → chora belgilash → monitoring',
        'Hisobot → yashirish → tekshirish',
        'Monitoring → muammoni aniqlash → unutish',
      ],
      answer: 1,
      explanation:
        'Xavfni boshqarish avval aniqlash, keyin baholash, javob choralarini belgilash va natijani monitoring qilishni talab qiladi.',
    },
    {
      id: 'm1t4m10',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Moliyaviy xavf; 2. Tashkiliy xavf; 3. Psixologik xavf; 4. Axloqiy-ijtimoiy xavf. A. Shaxsiy manfaatni ustun qo‘yish; B. Nazoratning zaifligi; C. Korrupsiyani normal deb bilish; D. Mablag‘ nazoratining sustligi.',
      options: [
        '1-D, 2-B, 3-A, 4-C',
        '1-B, 2-D, 3-C, 4-A',
        '1-A, 2-C, 3-D, 4-B',
        '1-C, 2-A, 3-B, 4-D',
      ],
      answer: 0,
      explanation:
        'Moliyaviy xavf — mablag‘ nazoratining sustligi; tashkiliy — nazorat mexanizmi zaifligi; psixologik — shaxsiy manfaat; axloqiy-ijtimoiy — korrupsiyani normal deb bilish.',
    },
    {
      id: 'm1t4m11',
      text: '“Halollik daqiqasi” faqat ma’ruza shaklida o‘tkazilmoqda. Uni amaliyroq qilish uchun qaysi usul mos?',
      options: [
        'Faqat mavzuni tezroq tugatish',
        'Real vaziyat va qaror variantlarini muhokama qilish',
        'Faqat matn yodlatish',
        'Faqat baho qo‘yish',
      ],
      answer: 1,
      explanation:
        'Real vaziyatlar o‘quvchiga axloqiy tamoyilni konkret qarorda qo‘llash imkonini beradi.',
    },
    {
      id: 'm1t4m12',
      text: 'Rahbar korrupsiyaviy xavfni aniqladi. Xodimlar esa xavf sabablarini tushunmaydi. Qaysi chora ikki muammoni birgalikda hal qiladi?',
      options: [
        'Xavfni yashirish',
        'O‘qitish va jarayonni qayta tashkil etish',
        'Faqat jazolash',
        'Faqat hisobot talab qilish',
      ],
      answer: 1,
      explanation:
        'Bilimdagi bo‘shliqni o‘qitish, tizimdagi sababni esa jarayonni takomillashtirish orqali kamaytirish mumkin.',
    },
    {
      id: 'm1t4m13',
      text: 'Xodim qarindoshi ishtirok etayotgan tanlovda baholovchi sifatida qatnashmoqda. Eng avvalo qaysi masala ko‘rilishi kerak?',
      options: [
        'Dars jadvali',
        'Manfaatlar to‘qnashuvi',
        'Sinf xonasi',
        'O‘quv dasturi',
      ],
      answer: 1,
      explanation:
        'Qarindoshlik aloqasi xolislikka ta’sir qilishi mumkinligi sababli manfaatlar to‘qnashuvi masalasi ko‘riladi.',
    },
    {
      id: 'm1t4m14',
      text: 'Maktabda xaridlar ochiq, lekin bir xil yetkazib beruvchi doimiy ravishda tanlanadi. Qaysi tahlil muhim?',
      options: [
        'Faqat hujjatlar sonini hisoblash',
        'Tanlov mezonlari va manfaatlar to‘qnashuvi xavfini tahlil qilish',
        'Faqat o‘qituvchilar sonini tekshirish',
        'Dars jadvalini o‘zgartirish',
      ],
      answer: 1,
      explanation:
        'Takroriy tanlovda obyektiv mezonlar va ehtimoliy manfaatlar to‘qnashuvi alohida tahlil qilinishi kerak.',
    },
    {
      id: 'm1t4m15',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Shaffoflik; 2. Hisobdorlik; 3. Monitoring; 4. Profilaktika. A. Xavfni oldindan kamaytirish; B. Jarayonni kuzatish; C. Ma’lumotlarning ochiqligi; D. Natija uchun javob berish.',
      options: [
        '1-C, 2-D, 3-B, 4-A',
        '1-D, 2-C, 3-A, 4-B',
        '1-B, 2-A, 3-D, 4-C',
        '1-A, 2-B, 3-C, 4-D',
      ],
      answer: 0,
      explanation:
        'Shaffoflik — ochiqlik; hisobdorlik — javob berish; monitoring — kuzatish; profilaktika — oldindan xavfni kamaytirish.',
    },
    {
      id: 'm1t4m16',
      text: 'Maktabda korrupsiya xavfi bo‘yicha ko‘rsatkichlar ishlab chiqildi. Ularning asosiy foydasi nimada?',
      options: [
        'Xavf o‘zgarishini muntazam kuzatish imkonini berishida',
        'Barcha qarorlarni bekor qilishida',
        'Faqat hujjat sonini oshirishida',
        'Jamoatchilikni chiqarib tashlashida',
      ],
      answer: 0,
      explanation:
        'Ko‘rsatkichlar xavf darajasini vaqt davomida taqqoslash va choralarning natijasini baholashga yordam beradi.',
    },
    {
      id: 'm1t4m17',
      text: 'Korrupsiyaga qarshi tizim faqat direktor nazoratiga bog‘langan. Direktor bo‘lmaganda jarayon to‘xtaydi. Bu nimani ko‘rsatadi?',
      options: [
        'Tizimning institutsional emas, shaxsga haddan tashqari bog‘langanini',
        'Nazoratning mukammalligini',
        'Raqamlashtirishning yuqori darajasini',
        'Jamoatchilik nazoratining kuchliligini',
      ],
      answer: 0,
      explanation:
        'Barqaror korrupsiyaga qarshi tizim alohida shaxsga emas, aniq tartib va institutsional mexanizmlarga tayanishi kerak.',
    },
    {
      id: 'm1t4m18',
      text: 'Xodimlar xavfli vaziyat haqida xabar berishdan qo‘rqadi. Qaysi yo‘nalish ustuvor?',
      options: [
        'Faqat hisobot sonini oshirish',
        'Xabar berish va murojaat qilish mexanizmlarini ishonchli qilish',
        'Faqat tanbeh berish',
        'Nazoratni kamaytirish',
      ],
      answer: 1,
      explanation:
        'Xodimlar xavf haqida tegishli tartibda xabar bera olishi profilaktik tizimning muhim qismidir.',
    },
    {
      id: 'm1t4m19',
      text: 'Maktabda korrupsiyaga qarshi tadbirlar ko‘p, ammo ularning natijasi o‘lchanmaydi. Qaysi element yetishmaydi?',
      options: [
        'Monitoring va baholash',
        'Tadbirlar soni',
        'Yig‘ilishlar soni',
        'Reklama',
      ],
      answer: 0,
      explanation:
        'Tadbirlarning mavjudligi emas, ularning xavfni kamaytirishga ta’siri ham monitoring qilinishi kerak.',
    },
    {
      id: 'm1t4m20',
      text: 'Baholash mezonlari aniq, lekin o‘qituvchi yakuniy natijani qo‘lda istalgancha o‘zgartira oladi. Qaysi xavf ustun?',
      options: [
        'Natijalarni manipulyatsiya qilish xavfi',
        'Dars davomiyligi xavfi',
        'Sinf jihozlari xavfi',
        'O‘quv dasturi hajmi xavfi',
      ],
      answer: 0,
      explanation:
        'Natijani nazoratsiz o‘zgartirish imkoniyati baholashning xolisligiga bevosita xavf tug‘diradi.',
    },
    {
      id: 'm1t4m21',
      text: 'Qaysi holat proaktiv boshqaruvga ko‘proq mos?',
      options: [
        'Shikoyat kelgachgina tekshirish',
        'Xavfli jarayonlarni oldindan xaritalash va nazorat nuqtalarini belgilash',
        'Faqat aybdorni jazolash',
        'Muammoni ommadan yashirish',
      ],
      answer: 1,
      explanation:
        'Xavfli jarayonlarni oldindan aniqlash va nazorat nuqtalarini belgilash proaktiv yondashuvdir.',
    },
    {
      id: 'm1t4m22',
      text: 'Rahbar korrupsiyaviy xavfni kamaytirish chorasi sifatida faqat yangi buyruq chiqardi. Nima uchun bu yetarli bo‘lmasligi mumkin?',
      options: [
        'Buyruqni amaliy mexanizm, mas’uliyat va monitoring bilan bog‘lash zarur',
        'Buyruq hech qachon kerak emas',
        'Faqat yig‘ilish o‘tkazish yetarli',
        'Hujjatlar umuman kerak emas',
      ],
      answer: 0,
      explanation:
        'Qoidaning samarasi uni kim, qanday va qachon bajarishi hamda natijasi qanday kuzatilishi bilan bog‘liq.',
    },
    {
      id: 'm1t4m23',
      text: 'Korrupsiyaga qarshi treningdan keyin xodimlarning amaliy qarorlari o‘rganilmoqda. Bu qanday yondashuv?',
      options: [
        'Faqat nazariy nazorat',
        'Bilimni amaliy xatti-harakat bilan bog‘lash',
        'Nazoratni bekor qilish',
        'Faqat moliyaviy audit',
      ],
      answer: 1,
      explanation:
        'Trening samarasi faqat qatnashish bilan emas, bilimning amaliy vaziyatlarda qo‘llanishi bilan ham baholanishi mumkin.',
    },
    {
      id: 'm1t4m24',
      text: 'Maktabda manfaatlar to‘qnashuvi aniqlanadi, ammo qaror qabul qiluvchi shaxs jarayondan chetlashtirilmaydi. Qaysi xavf saqlanadi?',
      options: [
        'Xolis qaror qabul qilinishiga ta’sir qilish xavfi',
        'Dars jadvali buzilishi',
        'O‘quvchilar soni oshishi',
        'Elektron tizim tezlashishi',
      ],
      answer: 0,
      explanation:
        'Manfaatdor shaxs qaror jarayonida qolsa, xolislikka ta’sir qilish ehtimoli saqlanib qoladi.',
    },
    {
      id: 'm1t4m25',
      text: 'Quyidagi ketma-ketliklardan qaysi biri korrupsiyaviy xavfni boshqarishga mos?',
      options: [
        'Xavfni aniqlash → baholash → nazorat chorasi → monitoring',
        'Jazo → yashirish → qayta takrorlash',
        'Hisobot → unutish → kutish',
        'Shikoyat → bekor qilish → yashirish',
      ],
      answer: 0,
      explanation:
        'Bu ketma-ketlik xavfni aniqlashdan natijani kuzatishgacha bo‘lgan boshqaruv siklini ifodalaydi.',
    },
    {
      id: 'm1t4m26',
      text: '“Halollik vaksinasi” samaradorligini oshirish uchun qaysi kombinatsiya mantiqan kuchliroq?',
      options: [
        'Faqat ma’ruza va test',
        'Real vaziyat, rol o‘yini, shaxsiy namuna va monitoring',
        'Faqat jazolash',
        'Faqat plakatlar',
      ],
      answer: 1,
      explanation:
        'Axloqiy ko‘nikma turli amaliy usullar, namuna va muntazam monitoring orqali mustahkamlanadi.',
    },
    {
      id: 'm1t4m27',
      text: 'Maktabda xaridlar shaffof, lekin jamoatchilikka tushuntirish mexanizmi mavjud emas. Qaysi jihat kuchaytirilishi kerak?',
      options: [
        'Jamoatchilik bilan hisobdorlik va kommunikatsiya',
        'Faqat xaridlar soni',
        'Faqat xodimlar soni',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Ochiq jarayonni tushuntirish va tegishli ma’lumot berish jamoatchilik ishonchi va hisobdorlikni kuchaytiradi.',
    },
    {
      id: 'm1t4m28',
      text: 'Korrupsiya holati sodir bo‘ldi. Rahbar aybdorni jazoladi, ammo jarayonni o‘zgartirmadi. Keyingi boshqaruv vazifasi nima?',
      options: [
        'Sababni tahlil qilib, tizimdagi nazorat nuqtasini takomillashtirish',
        'Holatni unutish',
        'Faqat boshqa xodimni jazolash',
        'Hisobotni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Jazo individual holatga javob beradi; tizimli profilaktika esa hodisaga sabab bo‘lgan jarayonni ham yaxshilaydi.',
    },
    {
      id: 'm1t4m29',
      text: 'Korrupsiyaga qarshi siyosatda qaysi juftlik bir-birini to‘ldiradi?',
      options: [
        'Profilaktika va monitoring',
        'Yashirish va kutish',
        'Nazoratni bekor qilish va hisobot',
        'Norasmiy kelishuv va shaxsiy manfaat',
      ],
      answer: 0,
      explanation:
        'Profilaktika xavfni oldindan kamaytiradi, monitoring esa vaziyat va choralar natijasini kuzatadi.',
    },
    {
      id: 'm1t4m30',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Raqamlashtirish; 2. Audit; 3. Jamoatchilik nazorati; 4. Halollik ta’limi. A. Axloqiy immunitet; B. Moliyaviy tekshiruv; C. Jarayon izini saqlash; D. Tashqi kuzatuv va hisobdorlik.',
      options: [
        '1-C, 2-B, 3-D, 4-A',
        '1-B, 2-C, 3-A, 4-D',
        '1-D, 2-A, 3-C, 4-B',
        '1-A, 2-D, 3-B, 4-C',
      ],
      answer: 0,
      explanation:
        'Raqamlashtirish jarayon izini saqlaydi, audit tekshiradi, jamoatchilik nazorat qiladi, halollik ta’limi axloqiy ko‘nikmani shakllantiradi.',
    },
  ],

  hard: [
    {
      id: 'm1t4h01',
      text: 'Elektron qabul tizimi mavjud, ammo tizimga kirish huquqi bir necha xodimda cheklanmagan. Qaysi xavf birinchi navbatda baholanishi kerak?',
      options: [
        'Ma’lumot yoki navbatni ruxsatsiz o‘zgartirish xavfi',
        'Qog‘oz hujjatlar sonining kamayishi',
        'Ota-onalar sonining ortishi',
        'Elektron tizimning tez ishlashi',
      ],
      answer: 0,
      explanation:
        'Ruxsatsiz o‘zgartirish imkoniyati raqamlashtirilgan jarayonning yaxlitligi va kuzatuvchanligiga bevosita xavf tug‘diradi.',
    },
    {
      id: 'm1t4h02',
      text: 'Kadrlar tanlovida mezonlar ochiq, test natijalari elektron, ammo yakuniy suhbat bahosi qayd etilmaydi. Eng zaif nuqta qaysi?',
      options: [
        'Testning elektron shakli',
        'Yakuniy qarorning kuzatuvchanligi',
        'Nomzodlarga mezon berilishi',
        'Tanlovning mavjudligi',
      ],
      answer: 1,
      explanation:
        'Jarayonning bir qismi raqamlashtirilgan bo‘lsa ham, yakuniy qaror qayd etilmasa, butun jarayonning hisobdorligi to‘liq ta’minlanmaydi.',
    },
    {
      id: 'm1t4h03',
      text: 'Maktab xaridlarida eng arzon taklif tanlandi, lekin texnik talablar oldindan aniq belgilanmagan. Qaysi muammo yuzaga kelishi mumkin?',
      options: [
        'Narxning o‘zi sifat va maqsadga muvofiqlikni kafolatlamasligi',
        'Elektron tizimning avtomatik buzilishi',
        'Jamoatchilik nazoratining ortishi',
        'Hisobotlarning ko‘payishi',
      ],
      answer: 0,
      explanation:
        'Faqat narxga tayanish xaridning sifat, ehtiyoj va texnik talablarga mosligini baholashni cheklashi mumkin.',
    },
    {
      id: 'm1t4h04',
      text: 'Rahbar korrupsiyaviy xavflar reyestrini yuritadi, lekin xavflarning darajasi va ehtimolini baholamaydi. Keyingi rivojlantiriladigan mexanizm qaysi?',
      options: [
        'Xavflarni ustuvorlashtirish mezonlari',
        'Faqat hujjat sonini oshirish',
        'Faqat yig‘ilishlar sonini ko‘paytirish',
        'Reyestrni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Reyestr xavflarni sanab beradi; ehtimol va ta’sirni baholash esa qaysi xavfga avval resurs ajratishni belgilashga yordam beradi.',
    },
    {
      id: 'm1t4h05',
      text: 'Bir xil korrupsiyaviy holat uch marta takrorlandi. Har safar aybdor jazolangan, ammo jarayon o‘zgarmagan. Qaysi xulosa eng asosli?',
      options: [
        'Faqat xodimlar aybdor',
        'Tizimli sabab va nazoratdagi zaiflik yetarli bartaraf etilmagan',
        'Nazorat ortiqcha',
        'Jazo umuman kerak emas',
      ],
      answer: 1,
      explanation:
        'Takrorlanish individual javob chorasi bilan birga jarayonning ildiz sababini tahlil qilish zarurligini ko‘rsatadi.',
    },
    {
      id: 'm1t4h06',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Profilaktika; 2. Monitoring; 3. Audit; 4. Shaffoflik. A. Xavfni oldindan kamaytirish; B. Jarayonni muntazam kuzatish; C. Hujjat va moliyaviy operatsiyani tekshirish; D. Tegishli ma’lumotlarning ochiqligi.',
      options: [
        '1-A, 2-B, 3-C, 4-D',
        '1-B, 2-A, 3-D, 4-C',
        '1-C, 2-D, 3-A, 4-B',
        '1-D, 2-C, 3-B, 4-A',
      ],
      answer: 0,
      explanation:
        'Har bir tushuncha o‘z funksiyasiga mos: profilaktika — oldini olish, monitoring — kuzatish, audit — tekshirish, shaffoflik — ochiqlik.',
    },
    {
      id: 'm1t4h07',
      text: 'Direktorning qarindoshi ishga qabul qilinayotgan tanlovda direktor komissiya raisi. Hali hech qanday ustunlik berilmagan. Eng to‘g‘ri boshqaruv chorasi nima?',
      options: [
        'Vaziyatni manfaatlar to‘qnashuvi nuqtayi nazaridan ko‘rib, xolislikni ta’minlash',
        'Hech narsa qilmaslik, chunki qoidabuzarlik hali isbotlanmagan',
        'Tanlovni yashirin o‘tkazish',
        'Barcha mezonlarni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Manfaatlar to‘qnashuvi xavfi qoidabuzarlik sodir bo‘lishini kutmasdan boshqarilishi kerak.',
    },
    {
      id: 'm1t4h08',
      text: 'Maktabda barcha moliyaviy operatsiyalar elektron, ammo tizimdagi o‘zgarishlarning kim tomonidan kiritilgani ko‘rinmaydi. Qaysi tamoyil muammoli?',
      options: [
        'Kuzatuvchanlik va hisobdorlik',
        'Dars sifati',
        'O‘quvchilar soni',
        'Pedagogik metodika',
      ],
      answer: 0,
      explanation:
        'Harakatlar muallifi aniqlanmasa, raqamli tizimning audit izi va javobgarlik mexanizmi zaiflashadi.',
    },
    {
      id: 'm1t4h09',
      text: 'Rahbar korrupsiyaviy xavfni kamaytirish uchun qo‘shimcha nazorat joriy qildi. Natijada jarayon haddan tashqari sekinlashdi. Qaysi boshqaruv yondashuvi zarur?',
      options: [
        'Nazorat va jarayon samaradorligi o‘rtasida mutanosiblikni ta’minlash',
        'Barcha nazoratni bekor qilish',
        'Jarayonni butunlay to‘xtatish',
        'Faqat hujjatlar sonini oshirish',
      ],
      answer: 0,
      explanation:
        'Korrupsiyaga qarshi nazorat xavfni kamaytirishi bilan birga jarayonning oqilona va samarali ishlashini ham ta’minlashi kerak.',
    },
    {
      id: 'm1t4h10',
      text: '“Halollik vaksinasi” bo‘yicha tadbirlar ko‘paydi, lekin o‘quvchilarning real vaziyatlardagi qarorlari o‘zgarmadi. Qaysi savol birinchi navbatda berilishi kerak?',
      options: [
        'Tadbirlar soni yetarlimi?',
        'Ta’lim usullari amaliy axloqiy ko‘nikmaga olib kelyaptimi?',
        'Plakatlar soni nechta?',
        'Yig‘ilishlar qancha davom etdi?',
      ],
      answer: 1,
      explanation:
        'Tadbirlar soni emas, ularning amaliy axloqiy qaror qabul qilish ko‘nikmasiga ta’siri muhim natija ko‘rsatkichidir.',
    },
    {
      id: 'm1t4h11',
      text: 'Maktabda shikoyatlar uchun elektron kanal mavjud, lekin murojaatchiga javob muddati belgilanmagan. Qaysi xavf paydo bo‘ladi?',
      options: [
        'Murojaatlarni kuzatish va hisobdorlikning sustlashishi',
        'Elektron kanalning tezlashishi',
        'Jamoatchilik ishonchining avtomatik oshishi',
        'Nazoratning kuchayishi',
      ],
      answer: 0,
      explanation:
        'Muddat va mas’uliyat belgilanmasa, murojaatning qaysi bosqichdaligi va natijasi bo‘yicha hisobdorlik zaiflashadi.',
    },
    {
      id: 'm1t4h12',
      text: 'Korrupsiyaga qarshi trening o‘tkazildi. Trening samaradorligini aniqlash uchun qaysi ko‘rsatkich kuchliroq?',
      options: [
        'Qatnashganlar soni',
        'Xodimlarning real vaziyatlarda xavfni aniqlash va to‘g‘ri harakat qilish qobiliyati',
        'Trening davomiyligi',
        'Slaydlar soni',
      ],
      answer: 1,
      explanation:
        'Samaradorlikni baholashda ishtirok etishdan tashqari, olingan bilimning amaliy qo‘llanishi muhim.',
    },
    {
      id: 'm1t4h13',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Kadrlar xavfi; 2. Moliyaviy xavf; 3. Baholash xavfi; 4. Manfaatlar to‘qnashuvi. A. Natijani asossiz o‘zgartirish; B. Qaror xolisligiga shaxsiy manfaat ta’siri; C. Tanish-bilish asosida tanlash; D. Mablag‘lardan maqsadsiz foydalanish.',
      options: [
        '1-C, 2-D, 3-A, 4-B',
        '1-D, 2-C, 3-B, 4-A',
        '1-A, 2-B, 3-D, 4-C',
        '1-B, 2-A, 3-C, 4-D',
      ],
      answer: 0,
      explanation:
        'Kadrlar xavfi — tanlov; moliyaviy xavf — mablag‘; baholash xavfi — natija; manfaatlar to‘qnashuvi — shaxsiy manfaat ta’siri.',
    },
    {
      id: 'm1t4h14',
      text: 'Rahbar korrupsiyaviy xavfni “yuqori” deb baholadi, ammo resurslarni barcha xavflarga teng taqsimlamoqchi. Qaysi yondashuv maqsadga muvofiqroq?',
      options: [
        'Xavflarni ehtimol va ta’siriga ko‘ra ustuvorlashtirish',
        'Barcha xavflarni bir xil deb qabul qilish',
        'Faqat eng oson xavfni tanlash',
        'Xavflarni ro‘yxatdan chiqarish',
      ],
      answer: 0,
      explanation:
        'Risklarni ustuvorlashtirish cheklangan resurslarni eng muhim va xavfli nuqtalarga yo‘naltirish imkonini beradi.',
    },
    {
      id: 'm1t4h15',
      text: 'Maktabda tanlov natijasi bo‘yicha norozilik bildirildi. Hujjatlarda mezonlar bor, ammo individual ballar saqlanmagan. Eng katta boshqaruv muammosi nima?',
      options: [
        'Qaror asoslarini keyinchalik tekshirish qiyinlashadi',
        'Mezonlarning mavjudligi ortiqcha',
        'Tanlov o‘tkazilmasligi kerak edi',
        'Elektron tizimdan foydalanish shart emas',
      ],
      answer: 0,
      explanation:
        'Mezonlar mavjud bo‘lsa ham, individual baholash izi saqlanmasa, yakuniy qarorning asoslanganligini tekshirish qiyinlashadi.',
    },
    {
      id: 'm1t4h16',
      text: 'Korrupsiyaga qarshi siyosatda faqat “qilmang” degan taqiq bor. Xodimga xavfli vaziyatda nima qilish kerakligi ko‘rsatilmagan. Nima yetishmaydi?',
      options: [
        'Amaliy protsedura va xatti-harakat algoritmi',
        'Faqat jazo',
        'Faqat plakat',
        'Faqat yig‘ilish',
      ],
      answer: 0,
      explanation:
        'Xodim taqiq bilan birga shubhali vaziyatni aniqlash, xabar berish va tegishli tartibda harakat qilishni ham bilishi kerak.',
    },
    {
      id: 'm1t4h17',
      text: 'Maktabda korrupsiya xavfi past deb baholangan jarayon yil davomida o‘zgardi. Oldingi bahoni o‘zgartirmaslik qanday xavf tug‘diradi?',
      options: [
        'Risk profilining eskirib qolishi',
        'Nazoratning avtomatik kuchayishi',
        'Shaffoflikning ortishi',
        'Hisobdorlikning yaxshilanishi',
      ],
      answer: 0,
      explanation:
        'Jarayon o‘zgarsa, avvalgi risk bahosi ham qayta ko‘rib chiqilishi kerak.',
    },
    {
      id: 'm1t4h18',
      text: 'Rahbar korrupsiyaga qarshi tizimni baholaganda faqat qoidabuzarliklar soniga qaraydi. Nima yetishmaydi?',
      options: [
        'Oldini olish ko‘rsatkichlari va xavf indikatorlari',
        'Faqat jarimalar',
        'Faqat yig‘ilishlar',
        'Faqat buyruqlar',
      ],
      answer: 0,
      explanation:
        'Qoidabuzarlik soni reaktiv ko‘rsatkich; xavf indikatorlari va profilaktika natijalari tizimni kengroq baholash imkonini beradi.',
    },
    {
      id: 'm1t4h19',
      text: 'Xodim o‘z qarindoshining hujjatini ko‘rib chiqayotganini ma’lum qildi. Hali qaror qabul qilinmagan. Qaysi tamoyil ustuvor?',
      options: [
        'Xolislikni saqlash va manfaatlar to‘qnashuvini boshqarish',
        'Hujjatni yashirish',
        'Jarayonni tezlashtirish',
        'Qarindoshga qo‘shimcha imkon berish',
      ],
      answer: 0,
      explanation:
        'Manfaatlar to‘qnashuvi ehtimoli paydo bo‘lganda xolislikni ta’minlash chorasi oldindan ko‘riladi.',
    },
    {
      id: 'm1t4h20',
      text: 'Quyidagi ketma-ketliklardan qaysi biri xavfni ildiz sababigacha tahlil qilishga yaqin?',
      options: [
        'Hodisa → dalil → sabab → tizimli zaiflik → tuzatish chorasi',
        'Hodisa → jazo → ishni yopish',
        'Shikoyat → inkor → unutish',
        'Hisobot → e’lon → nazoratsizlik',
      ],
      answer: 0,
      explanation:
        'Ildiz sabab tahlili hodisaning ortidagi jarayon va tizim zaifligini aniqlab, tuzatish choralarini belgilashga qaratiladi.',
    },
    {
      id: 'm1t4h21',
      text: 'Maktabda raqamlashtirish korrupsiya xavfini kamaytirdi, ammo xodimlar yangi tizimdan foydalanishni bilmaydi. Qaysi xulosa to‘g‘ri?',
      options: [
        'Texnologik yechimni xodim kompetensiyasi bilan qo‘llab-quvvatlash kerak',
        'Raqamlashtirishni bekor qilish kerak',
        'Nazoratni butunlay olib tashlash kerak',
        'Faqat qog‘ozga qaytish kerak',
      ],
      answer: 0,
      explanation:
        'Raqamli vosita samarasi undan to‘g‘ri foydalanish kompetensiyasiga ham bog‘liq.',
    },
    {
      id: 'm1t4h22',
      text: 'Korrupsiyaga qarshi nazorat kuchaytirildi, ammo xodimlar har bir qarorni ortiqcha tasdiqlatmoqda. Qaysi muvozanat muhim?',
      options: [
        'Nazorat darajasi bilan vakolat va jarayon tezligi o‘rtasidagi mutanosiblik',
        'Barcha vakolatlarni bekor qilish',
        'Nazoratni butunlay olib tashlash',
        'Har bir ishni faqat direktor bajarishi',
      ],
      answer: 0,
      explanation:
        'Nazorat zarur, lekin ortiqcha markazlashuv va keraksiz tasdiqlar ham samaradorlikni pasaytirishi mumkin.',
    },
    {
      id: 'm1t4h23',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Xavfni aniqlash; 2. Xavfni baholash; 3. Javob chorasi; 4. Monitoring. A. Ehtimol va ta’sirni aniqlash; B. Natijani kuzatish; C. Xavf manbasini aniqlash; D. Xavfni kamaytiruvchi mexanizmni joriy etish.',
      options: [
        '1-C, 2-A, 3-D, 4-B',
        '1-A, 2-C, 3-B, 4-D',
        '1-D, 2-B, 3-C, 4-A',
        '1-B, 2-D, 3-A, 4-C',
      ],
      answer: 0,
      explanation:
        'Risk siklida avval manba aniqlanadi, keyin baholanadi, javob chorasi joriy etiladi va natija monitoring qilinadi.',
    },
    {
      id: 'm1t4h24',
      text: 'Rahbar korrupsiya xavfini kamaytirish uchun faqat yangi xodimlarni o‘qitmoqda. Nima yetishmaydi?',
      options: [
        'Amaldagi xodimlar uchun muntazam yangilash va qayta o‘qitish',
        'Faqat yangi buyruq',
        'Nazoratni bekor qilish',
        'Faqat plakatlar',
      ],
      answer: 0,
      explanation:
        'Qoidalar va xavflar o‘zgarishi mumkin; shu sababli xodimlar bilimini muntazam yangilash muhim.',
    },
    {
      id: 'm1t4h25',
      text: 'Maktabda korrupsiyaga qarshi choralar natijasida murojaatlar soni oshdi. Buni darhol tizim yomonlashdi deb baholash to‘g‘rimi?',
      options: [
        'Yo‘q; murojaat kanali ishonchining ortishi ham sabab bo‘lishi mumkin, qo‘shimcha tahlil zarur',
        'Ha, har qanday murojaat tizim yomonligini bildiradi',
        'Ha, murojaatlar doim kamayishi kerak',
        'Faqat direktorning fikri yetarli',
      ],
      answer: 0,
      explanation:
        'Murojaatlar sonini kontekst bilan tahlil qilish kerak; ochiq kanal paydo bo‘lishi xabar berish faolligini oshirishi mumkin.',
    },
    {
      id: 'm1t4h26',
      text: 'Maktabda shaffoflikni oshirish uchun barcha ma’lumotlarni cheklovsiz e’lon qilish taklif qilindi. Qaysi yondashuv to‘g‘riroq?',
      options: [
        'Tegishli ma’lumotlarni qonuniy talablar va maxfiylik chegaralari bilan muvozanatlash',
        'Barcha ma’lumotlarni istisnosiz e’lon qilish',
        'Hech qanday ma’lumot bermaslik',
        'Faqat og‘zaki ma’lumot berish',
      ],
      answer: 0,
      explanation:
        'Shaffoflik muhim, biroq uni qonuniy talablar va himoyalanishi lozim bo‘lgan ma’lumotlar bilan muvozanatlash kerak.',
    },
    {
      id: 'm1t4h27',
      text: 'Rahbar xavflarni baholadi, choralarni belgiladi va olti oy davomida natijani tekshirmadi. Qaysi bosqich bajarilmagan?',
      options: [
        'Monitoring va qayta baholash',
        'Xavfni aniqlash',
        'Dastlabki baholash',
        'Xodimlarni tanlash',
      ],
      answer: 0,
      explanation:
        'Chora joriy etilgach, uning natijasi monitoring qilinishi va zarur bo‘lsa risk qayta baholanishi kerak.',
    },
    {
      id: 'm1t4h28',
      text: 'Korrupsiyaga qarshi tizimda eng barqaror natija qaysi kombinatsiya orqali yuzaga keladi?',
      options: [
        'Profilaktika + aniq protsedura + shaffoflik + monitoring + javobgarlik',
        'Faqat jazo',
        'Faqat raqamlashtirish',
        'Faqat direktor nazorati',
      ],
      answer: 0,
      explanation:
        'Barqaror tizim bir nechta o‘zaro bog‘liq mexanizmlarga tayanadi; bitta vosita barcha xavflarni mustaqil hal qilmaydi.',
    },
    {
      id: 'm1t4h29',
      text: 'Rahbarning korrupsiyaga qarshi eng kuchli boshqaruv signali qaysi holatda ko‘rinadi?',
      options: [
        'Qoidalarni o‘zi ham bir xil qo‘llashi va manfaatlar to‘qnashuvini yashirmasligi',
        'Faqat xodimlardan qoidaga amal qilishni talab qilishi',
        'Faqat yig‘ilishlarda gapirishi',
        'Faqat jazolarni e’lon qilishi',
      ],
      answer: 0,
      explanation:
        'Rahbarning shaxsiy namunasi va qoidalarga teng amal qilishi tashkilotdagi halollik madaniyatiga kuchli ta’sir qiladi.',
    },
    {
      id: 'm1t4h30',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri? 1. Muammoni aniqlash; 2. Ildiz sabab; 3. Nazorat chorasi; 4. Natijani baholash. A. Hodisa yoki signal; B. Tizimli zaiflik; C. Xavfni kamaytiruvchi mexanizm; D. Chora samarasi.',
      options: [
        '1-A, 2-B, 3-C, 4-D',
        '1-B, 2-A, 3-D, 4-C',
        '1-C, 2-D, 3-A, 4-B',
        '1-D, 2-C, 3-B, 4-A',
      ],
      answer: 0,
      explanation:
        'Muammo signal orqali aniqlanadi, ildiz sabab topiladi, nazorat chorasi joriy qilinadi va uning samarasi baholanadi.',
    },
  ],

  case: [
    {
      id: 'm1t4c01',
      text: 'Maktabda qo‘shimcha mashg‘ulot uchun ota-onalardan majburiy norasmiy to‘lov yig‘ilayotgani aniqlandi. Rahbarning birinchi boshqaruv vazifasi qaysi?',
      options: [
        'Holatni yashirish',
        'Xavfni aniqlashtirish, hujjatlashtirish va belgilangan tartibda choralar ko‘rish',
        'Faqat ota-onalarga ogohlantirish berish',
        'To‘lovni boshqa nom bilan davom ettirish',
      ],
      answer: 1,
      explanation:
        'Majburiy norasmiy to‘lov korrupsiyaviy xavf sifatida ko‘rib chiqilib, holat belgilangan tartibda o‘rganilishi kerak.',
    },
    {
      id: 'm1t4c02',
      text: 'Direktorning qarindoshi bo‘sh lavozimga nomzod. Direktor tanlov komissiyasida qatnashmoqda. Hali hech qanday qaror chiqarilmagan. Nima muhim?',
      options: [
        'Vaziyatni manfaatlar to‘qnashuvi sifatida baholab, xolislikni ta’minlash',
        'Qarindoshni avtomatik ishga olish',
        'Tanlov mezonlarini unga moslashtirish',
        'Hech qanday choraga ehtiyoj yo‘q deb hisoblash',
      ],
      answer: 0,
      explanation:
        'Hali qoidabuzarlik sodir bo‘lmagan bo‘lsa ham, manfaatlar to‘qnashuvi ehtimoli xolislikni oldindan ta’minlashni talab qiladi.',
    },
    {
      id: 'm1t4c03',
      text: 'Maktab xaridlari elektron platformada o‘tkaziladi, ammo yakuniy xarajat hujjatlari saqlanmaydi. Rahbar nimani tekshirishi kerak?',
      options: [
        'Faqat platformaning dizaynini',
        'Mablag‘ sarfi, tasdiqlovchi hujjatlar va audit izini',
        'Faqat xarid e’lonini',
        'Faqat yetkazib beruvchining nomini',
      ],
      answer: 1,
      explanation:
        'Elektron tenderning o‘zi yetarli emas; mablag‘larning amalda qanday sarflangani ham hujjatlar bilan kuzatilishi kerak.',
    },
    {
      id: 'm1t4c04',
      text: 'O‘quvchilar “Halollik daqiqasi”da o‘qituvchi bergan vaziyat bo‘yicha turli qarorlarni muhokama qilishdi. Ushbu faoliyatning eng muhim natijasi nima?',
      options: [
        'Faqat dars vaqtini to‘ldirish',
        'Axloqiy qaror qabul qilish ko‘nikmasini rivojlantirish',
        'Faqat baho qo‘yish',
        'Faqat intizomni nazorat qilish',
      ],
      answer: 1,
      explanation:
        'Real vaziyatlar o‘quvchilarga halollik va adolat tamoyillarini qarorlar orqali amalda qo‘llash imkonini beradi.',
    },
    {
      id: 'm1t4c05',
      text: 'Maktab jamoasida “korrupsiya baribir hamma joyda bor” degan qarash kuchaydi. Qaysi kompleks chora mantiqan kuchli?',
      options: [
        'Faqat jazolarni ko‘paytirish',
        'Halollik ta’limi, rahbar namunasi, xavf monitoringi va ochiq muloqotni birlashtirish',
        'Muammoni muhokama qilmaslik',
        'Faqat elektron tizim o‘rnatish',
      ],
      answer: 1,
      explanation:
        'Muammo axloqiy va ijtimoiy xarakterga ega bo‘lgani uchun faqat texnik yoki jazoviy choradan ko‘ra kompleks yondashuv zarur.',
    },
    {
      id: 'm1t4c06',
      text: 'Ishga qabul qilish elektron test orqali o‘tkazildi. Test natijalari bor, ammo yakuniy suhbat ballari qayd qilinmagan. Nomzod shikoyat qildi. Qaysi muammo asosiy?',
      options: [
        'Elektron testning mavjudligi',
        'Yakuniy qarorning yetarlicha kuzatilmasligi',
        'Nomzodlar sonining ko‘pligi',
        'Suhbatning o‘tkazilgani',
      ],
      answer: 1,
      explanation:
        'Yakuniy suhbat baholari qayd qilinmasa, tanlovning barcha bosqichlari bo‘yicha qaror izini tiklash qiyinlashadi.',
    },
    {
      id: 'm1t4c07',
      text: 'Rahbar korrupsiyaga moyil uchta jarayonni aniqladi. Keyingi bosqichni qanday tashkil etish mantiqan to‘g‘ri?',
      options: [
        'Ularni yashirish',
        'Ehtimol va ta’sirini baholab, ustuvor choralarni belgilash',
        'Faqat eng oson jarayonni tanlash',
        'Barcha jarayonni to‘xtatish',
      ],
      answer: 1,
      explanation:
        'Aniqlangan xavflarni ustuvorlashtirish resurslarni eng muhim xavflarga yo‘naltirish imkonini beradi.',
    },
    {
      id: 'm1t4c08',
      text: 'O‘qituvchi manfaatlar to‘qnashuvi qoidalarini bilmaydi. Hozircha qoidabuzarlik sodir bo‘lmagan. Rahbar qanday yo‘l tutishi maqsadga muvofiq?',
      options: [
        'Faqat jazolash',
        'Qoidalar bo‘yicha tushuntirish va amaliy o‘qitish tashkil etish',
        'Muammoni yashirish',
        'Xodimni darhol ishdan bo‘shatish',
      ],
      answer: 1,
      explanation:
        'Qoidani bilmaslik xavfini profilaktik o‘qitish orqali kamaytirish mumkin.',
    },
    {
      id: 'm1t4c09',
      text: 'Ota-onalar maktab xaridlari haqida tegishli ma’lumot so‘rashdi. Rahbarning qaysi harakati hisobdorlikka mos?',
      options: [
        'Tegishli ma’lumotlarni belgilangan tartibda ochiqlash',
        'Barcha savollarni rad etish',
        'Ma’lumotlarni faqat og‘zaki aytish',
        'Murojaatni ro‘yxatga olmaslik',
      ],
      answer: 0,
      explanation:
        'Tegishli ma’lumotlarning qonuniy va belgilangan tartibda taqdim etilishi shaffoflik va hisobdorlikni mustahkamlaydi.',
    },
    {
      id: 'm1t4c10',
      text: 'Korrupsiya holati sodir bo‘ldi. Aybdor jazolandi, ammo aynan shu jarayonda nazoratning zaifligi saqlanib qoldi. Rahbarning keyingi qadami nima bo‘lishi kerak?',
      options: [
        'Ishni yopish',
        'Faqat boshqa xodimlarni ogohlantirish',
        'Jarayon sababini tahlil qilib, nazorat mexanizmini takomillashtirish',
        'Muammoni jamoatchilikdan yashirish',
      ],
      answer: 2,
      explanation:
        'Individual javob chorasi bilan birga korrupsiyani yuzaga keltirgan tizimli sababni bartaraf etish kelgusidagi xavfni kamaytiradi.',
    },
  ],
}
