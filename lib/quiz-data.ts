export type Question = {
  id: string
  text: string
  options: string[]
  answer: number
  explanation: string
}

export type Topic = {
  id: string
  title: string
  description: string

  /*
   * Har bir mavzu 4 darajaga bo‘linadi:
   *
   * easy   → Oson
   * medium → O‘rta
   * hard   → Qiyin
   * case   → Keys
   */

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
 * MAKTAB — 10 TA MODUL
 * =========================================================
 */

export const CATEGORIES: Category[] = [
  {
    id: 'm1',
    title: '1-MODUL. Umumiy ta’lim muassasasini boshqarish',
    description:
      'Ta’lim muassasasini samarali boshqarish, strategik menejment va rahbarlik qarorlarini qabul qilish.',
    topics: [
{
  id: 'm1t1',

  title:
    'Umumiy ta’lim muassasasini boshqarish',

  description:
    'Ta’lim tashkilotlarini akkreditatsiyadan o‘tkazish, TALIS tadqiqoti va zamonaviy ta’lim boshqaruvining asosiy yo‘nalishlari.',

  levels: {
    /*
     * =====================================================
     * 🟢 OSON — 10 TA
     * =====================================================
     */

    easy: [
      {
        id: 'm1t1-e01',
        text:
          'Ta’lim tashkilotlarini akkreditatsiyadan o‘tkazishning asosiy mazmuni nimaga qaratilgan?',
        options: [
          'Ta’lim tashkiloti faoliyatining belgilangan talab va standartlarga muvofiqligini baholashga',
          'Faqat o‘qituvchilarning ish haqini belgilashga',
          'Faqat o‘quvchilar sonini aniqlashga',
          'Maktab binosining tashqi ko‘rinishini baholashga',
        ],
        answer: 0,
        explanation:
          'Akkreditatsiya ta’lim tashkiloti faoliyatining belgilangan davlat ta’lim standartlari va talablariga muvofiqligini baholashga xizmat qiladi.',
      },

      {
        id: 'm1t1-e02',
        text:
          'TALIS tadqiqotining asosiy xususiyati qaysi javobda to‘g‘ri ko‘rsatilgan?',
        options: [
          'U barcha o‘qituvchilar uchun majburiy attestatsiya imtihonidir.',
          'U o‘qituvchilar va maktab rahbarlari ishtirokidagi anonim xalqaro so‘rov tadqiqotidir.',
          'U faqat o‘quvchilar bilimini tekshiruvchi imtihondir.',
          'U maktablarning moliyaviy auditidir.',
        ],
        answer: 1,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlarining qarashlari hamda tajribalarini o‘rganishga qaratilgan anonim xalqaro so‘rov tadqiqotidir.',
      },

      {
        id: 'm1t1-e03',
        text:
          'TALIS tadqiqoti asosan kimlar haqidagi ma’lumotlarni o‘rganadi?',
        options: [
          'Faqat ota-onalar',
          'Faqat o‘quvchilar',
          'O‘qituvchilar va maktab rahbarlari',
          'Faqat davlat organlari xodimlari',
        ],
        answer: 2,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlarining faoliyati, qarashlari va ish sharoitlari haqida xalqaro taqqoslanadigan ma’lumot beradi.',
      },

      {
        id: 'm1t1-e04',
        text:
          'TALIS tadqiqotida ma’lumotlar qanday asosiy vosita orqali yig‘iladi?',
        options: [
          'Standartlashtirilgan so‘rovnomalar orqali',
          'Faqat og‘zaki suhbatlar orqali',
          'Faqat direktor buyruqlari orqali',
          'Faqat o‘quvchilar kundaliklari orqali',
        ],
        answer: 0,
        explanation:
          'TALIS xalqaro miqyosda taqqoslanadigan ma’lumot olish uchun standartlashtirilgan so‘rovnomalardan foydalanadi.',
      },

      {
        id: 'm1t1-e05',
        text:
          'Yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti necha yil muddatga akkreditatsiyadan o‘tgan deb hisoblanadi?',
        options: [
          '3 yil',
          '5 yil',
          '10 yil',
          '11 yil',
        ],
        answer: 3,
        explanation:
          'Berilgan o‘quv materialiga ko‘ra, yangi tashkil etilgan davlat umumiy o‘rta ta’lim tashkiloti tashkil etilgan kundan boshlab 11 yil davomida akkreditatsiyadan o‘tgan deb hisoblanadi.',
      },

      {
        id: 'm1t1-e06',
        text:
          'Akkreditatsiya jarayonining dastlabki bosqichi qaysi?',
        options: [
          'Kamchiliklarni bartaraf etish',
          'Attestatsiyaga tayyorgarlik',
          'Monitoring o‘tkazish',
          'Yakuniy qaror chiqarish',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya jarayoni attestatsiyaga tayyorgarlik bosqichidan boshlanadi.',
      },

      {
        id: 'm1t1-e07',
        text:
          'TALIS nimani anglatadi?',
        options: [
          'Xalqaro o‘qitish va maktab boshqaruvi bo‘yicha so‘rov tadqiqotini',
          'Maktablar uchun moliyaviy nazorat tizimini',
          'O‘quvchilar uchun xalqaro imtihonni',
          'Ta’lim tashkilotlarini litsenziyalash tizimini',
        ],
        answer: 0,
        explanation:
          'TALIS o‘qituvchilar va maktab rahbarlari haqidagi xalqaro taqqoslanadigan ma’lumotlarni shakllantiruvchi so‘rov tadqiqotidir.',
      },

      {
        id: 'm1t1-e08',
        text:
          'Akkreditatsiya jarayonida attestatsiyadan keyin qanday ish amalga oshiriladi?',
        options: [
          'Faqat yangi o‘quvchilar qabul qilinadi.',
          'Attestatsiya natijalari tahlil qilinadi.',
          'Maktab faoliyati to‘xtatiladi.',
          'Faqat moliyaviy hisobot tuziladi.',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya bosqichlaridan biri attestatsiya va uning natijalarini tahlil qilishdan iborat.',
      },

      {
        id: 'm1t1-e09',
        text:
          'TALIS tadqiqotining muhim maqsadlaridan biri nima?',
        options: [
          'Maktablarni reyting bo‘yicha jazolash',
          'O‘qituvchilarga individual jarima belgilash',
          'Samarali ta’limni qo‘llab-quvvatlovchi mexanizmlarni aniqlash',
          'Maktablarning daromadini hisoblash',
        ],
        answer: 2,
        explanation:
          'TALIS samarali o‘qitish va ta’limni qo‘llab-quvvatlovchi omillar va mexanizmlarni aniqlashga yordam beradi.',
      },

      {
        id: 'm1t1-e10',
        text:
          'TALIS ma’lumotlarining muhim afzalligi nimada?',
        options: [
          'Ular xalqaro miqyosda taqqoslanadigan ma’lumot beradi.',
          'Ular faqat bitta maktab uchun ishlatiladi.',
          'Ular faqat moliyaviy ma’lumotlarni beradi.',
          'Ular faqat o‘quvchilar baholarini aks ettiradi.',
        ],
        answer: 0,
        explanation:
          'Standartlashtirilgan metodologiya TALIS ma’lumotlarini turli mamlakatlar kesimida taqqoslash imkonini beradi.',
      },
    ],

    /*
     * =====================================================
     * 🟡 O‘RTA — 10 TA
     * =====================================================
     */

    medium: [
      {
        id: 'm1t1-m01',
        text:
          'Maktab rahbari TALIS natijalaridan foydalanib, o‘qituvchilarning kasbiy rivojlanish ehtiyojlarini aniqlamoqchi. Qaysi yondashuv eng mantiqiy?',
        options: [
          'Faqat bitta o‘qituvchining fikriga asoslanish',
          'TALIS ma’lumotlarini boshqa ichki monitoring ma’lumotlari bilan tahlil qilish',
          'Faqat o‘quvchilar sonini hisoblash',
          'TALIS natijalarini umuman hisobga olmaslik',
        ],
        answer: 1,
        explanation:
          'TALIS ma’lumotlari boshqaruv qarorlarini dalillarga asoslash uchun boshqa maktab ma’lumotlari bilan birgalikda tahlil qilinishi mumkin.',
      },

      {
        id: 'm1t1-m02',
        text:
          'Akkreditatsiya jarayonida aniqlangan kamchiliklarni bartaraf etish bosqichining asosiy vazifasi nima?',
        options: [
          'Aniqlangan muammolarni bartaraf etish bo‘yicha choralarni amalga oshirish',
          'Yangi maktab binosini qurish',
          'Faqat o‘qituvchilar sonini kamaytirish',
          'TALIS so‘rovnomasini bekor qilish',
        ],
        answer: 0,
        explanation:
          'Kamchiliklarni bartaraf etish bosqichida attestatsiya va baholash natijalarida aniqlangan muammolarni tuzatishga qaratilgan choralar amalga oshiriladi.',
      },

      {
        id: 'm1t1-m03',
        text:
          'Maktab rahbari boshqaruv qarorini faqat shaxsiy fikriga asoslab qabul qilmoqda. Zamonaviy boshqaruv nuqtayi nazaridan qanday yondashuv maqsadga muvofiq?',
        options: [
          'Qarorni tezroq qabul qilish uchun ma’lumotlardan voz kechish',
          'Qarorni faqat bir xodim bilan muhokama qilish',
          'Mavjud dalillar va ma’lumotlarni tahlil qilish',
          'Har qanday qarorni tasodifiy qabul qilish',
        ],
        answer: 2,
        explanation:
          'Zamonaviy boshqaruvda qarorlarni dalillar va mavjud ma’lumotlar asosida qabul qilish samaradorlikni oshiradi.',
      },

      {
        id: 'm1t1-m04',
        text:
          'TALIS ma’lumotlari turli mamlakatlarda ta’lim boshqaruvini o‘rganishda nima uchun foydali?',
        options: [
          'Chunki barcha mamlakatlarda ta’lim tizimi bir xil.',
          'Chunki standartlashtirilgan ma’lumotlar xalqaro taqqoslash imkonini beradi.',
          'Chunki TALIS faqat bitta mamlakatni o‘rganadi.',
          'Chunki TALIS barcha maktablarni bir xil boshqaradi.',
        ],
        answer: 1,
        explanation:
          'TALISning standartlashtirilgan yondashuvi turli mamlakatlar tajribasini taqqoslash imkonini beradi.',
      },

      {
        id: 'm1t1-m05',
        text:
          'Ta’lim boshqaruvini transformatsiya qilishda “avtonomiya va hisobdorlik muvozanati” nimani anglatadi?',
        options: [
          'Rahbarga cheksiz vakolat berishni',
          'Barcha qarorlarni yuqori tashkilot qabul qilishini',
          'Mustaqil qaror qabul qilish imkoniyati bilan natijalar uchun mas’uliyatni uyg‘unlashtirishni',
          'Hisobdorlikni butunlay bekor qilishni',
        ],
        answer: 2,
        explanation:
          'Muvozanat rahbarga muayyan mustaqillik berish bilan birga natijalar va qarorlar uchun javobgarlikni ham ta’minlaydi.',
      },

      {
        id: 'm1t1-m06',
        text:
          'Pedagogik liderlikning boshqaruvdagi asosiy yo‘nalishi nimaga qaratiladi?',
        options: [
          'Ta’lim va o‘qitish jarayonini rivojlantirishga',
          'Faqat binoni boshqarishga',
          'Faqat moliyaviy masalalarga',
          'Faqat hujjatlarni ko‘paytirishga',
        ],
        answer: 0,
        explanation:
          'Pedagogik liderlik markazida ta’lim sifati, o‘qitish jarayoni va pedagoglarning rivojlanishi turadi.',
      },

      {
        id: 'm1t1-m07',
        text:
          'Akkreditatsiya natijasida kamchiliklar aniqlansa, boshqaruv nuqtayi nazaridan keyingi muhim qadam qaysi?',
        options: [
          'Muammoni yashirish',
          'Kamchiliklarni bartaraf etish choralarini belgilash va amalga oshirish',
          'Barcha faoliyatni to‘xtatish',
          'Faqat yangi hisobot yaratish',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya natijalari boshqaruvni yaxshilashga xizmat qilishi uchun aniqlangan kamchiliklarni bartaraf etish bo‘yicha amaliy choralar ko‘riladi.',
      },

      {
        id: 'm1t1-m08',
        text:
          'TALIS ma’lumotlari asosida o‘qituvchilarning kasbiy rivojlanishiga oid ehtiyojlar aniqlansa, rahbarning keyingi qadami qanday bo‘lishi mumkin?',
        options: [
          'Ehtiyojlarni inkor etish',
          'Kasbiy rivojlanish tadbirlarini rejalashtirish',
          'Barcha o‘qituvchilarni bir xil usulda baholash',
          'Monitoringni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Aniqlangan ehtiyojlar asosida malaka oshirish, mentorlik va boshqa kasbiy rivojlanish tadbirlarini rejalashtirish mumkin.',
      },

      {
        id: 'm1t1-m09',
        text:
          '“Dalillarga asoslangan boshqaruv”ning asosiy belgisi qaysi?',
        options: [
          'Qarorni faqat odat asosida qabul qilish',
          'Qarorni faqat rahbarning shaxsiy tajribasiga asoslash',
          'Qarorlarni ishonchli ma’lumot va tahlil asosida qabul qilish',
          'Ma’lumotlarni boshqaruvdan chiqarib tashlash',
        ],
        answer: 2,
        explanation:
          'Dalillarga asoslangan boshqaruvda ma’lumotlar tahlil qilinadi va ular asosida qarorlar ishlab chiqiladi.',
      },

      {
        id: 'm1t1-m10',
        text:
          'TALIS natijalaridan maktab rivojlanish rejasida foydalanishning asosiy maqsadi nima?',
        options: [
          'Muammolarni aniqlash va rivojlanish choralarini asoslash',
          'Faqat hisobot hajmini oshirish',
          'O‘qituvchilarni jazolash',
          'Maktab faoliyatini to‘xtatish',
        ],
        answer: 0,
        explanation:
          'TALIS ma’lumotlari ta’lim muhiti va pedagogik faoliyat bilan bog‘liq masalalarni aniqlash va rivojlanish choralarini asoslashda yordam beradi.',
      },
    ],

    /*
     * =====================================================
     * 🔴 QIYIN — 10 TA
     * =====================================================
     */

    hard: [
      {
        id: 'm1t1-h01',
        text:
          'Maktabda ta’lim sifati bo‘yicha muammolar mavjud. Rahbar xalqaro tajribadan foydalanmoqchi. Qaysi yondashuv boshqaruv nuqtayi nazaridan asosliroq?',
        options: [
          'Boshqa mamlakat tajribasini hech qanday moslashtirishsiz ko‘chirish',
          'Xalqaro ma’lumotlarni maktabning mahalliy sharoiti va ichki ma’lumotlari bilan taqqoslab tahlil qilish',
          'Faqat bitta xalqaro ko‘rsatkich asosida qaror qabul qilish',
          'Xalqaro tajribani umuman o‘rganmaslik',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribadan samarali foydalanish uchun uni mahalliy sharoit, mavjud resurslar va maktabning ichki ma’lumotlari bilan uyg‘un holda tahlil qilish zarur.',
      },

      {
        id: 'm1t1-h02',
        text:
          'TALIS natijalari o‘qituvchilarning kasbiy rivojlanish ehtiyojlari borligini ko‘rsatdi. Rahbar faqat seminarlar sonini ko‘paytirsa, bu natijaga erishish uchun yetarlimi?',
        options: [
          'Ha, seminarlar soni har doim asosiy mezon hisoblanadi.',
          'Yo‘q, ehtiyoj, mazmun, ishtirok va natijani baholash tizimi ham ko‘rib chiqilishi kerak.',
          'Ha, chunki kasbiy rivojlanish faqat seminar bilan belgilanadi.',
          'Yo‘q, chunki TALIS ma’lumotlaridan foydalanib bo‘lmaydi.',
        ],
        answer: 1,
        explanation:
          'Kasbiy rivojlanishning samaradorligi faqat tadbirlar soni bilan emas, balki aniqlangan ehtiyoj, mazmun, amaliy qo‘llash va natijalar bilan ham baholanadi.',
      },

      {
        id: 'm1t1-h03',
        text:
          'Akkreditatsiya jarayonida aniqlangan kamchiliklar bartaraf etildi. Boshqaruv siklining keyingi mantiqiy elementi nima bo‘lishi mumkin?',
        options: [
          'Natijalarni nazorat va monitoring qilish',
          'Barcha hujjatlarni yo‘q qilish',
          'Muammolar qayta ko‘tarilmasligini taxmin qilish',
          'Ta’lim sifatini baholashni to‘xtatish',
        ],
        answer: 0,
        explanation:
          'Kamchiliklarni bartaraf etishdan keyin choralar ijrosini monitoring qilish muhim boshqaruv bosqichi hisoblanadi.',
      },

      {
        id: 'm1t1-h04',
        text:
          'Maktab rahbariyati TALIS ma’lumotlari bilan ichki monitoring natijalari o‘rtasida farq aniqladi. Eng maqbul boshqaruv yondashuvi qaysi?',
        options: [
          'Darhol bir manbani noto‘g‘ri deb e’lon qilish',
          'Farq sabablarini aniqlash uchun metodologiya va ma’lumotlarni tahlil qilish',
          'Ichki monitoringni bekor qilish',
          'TALIS natijalarini yashirish',
        ],
        answer: 1,
        explanation:
          'Turli ma’lumotlar o‘rtasidagi farqni ko‘r-ko‘rona rad etish emas, balki ularning manbasi, metodologiyasi va mazmunini tahlil qilish boshqaruv jihatdan asosliroqdir.',
      },

      {
        id: 'm1t1-h05',
        text:
          '“Avtonomiya va hisobdorlik muvozanati” buzilganda qaysi xavf yuzaga kelishi mumkin?',
        options: [
          'Mustaqil qarorlar va natijalar o‘rtasidagi bog‘liqlik susayishi',
          'Har doim ta’lim sifati avtomatik oshishi',
          'Barcha xodimlarning motivatsiyasi avtomatik ortishi',
          'Monitoringga ehtiyoj qolmasligi',
        ],
        answer: 0,
        explanation:
          'Avtonomiya mas’uliyat va hisobdorlik bilan muvozanatlanmasa, mustaqil qarorlarning natijalari ustidan nazorat susayishi mumkin.',
      },

      {
        id: 'm1t1-h06',
        text:
          'Rahbar xalqaro tajribani o‘z maktabiga joriy qilmoqchi. Birinchi navbatda nimani aniqlashi muhim?',
        options: [
          'Faqat boshqa davlatdagi maktab nomini',
          'Tajribaning maqsadi, sharti, resurslari va mahalliy sharoitga mosligini',
          'Faqat taqdimot dizaynini',
          'Faqat tajriba muallifining lavozimini',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribani ko‘chirishdan oldin uning maqsadi, ishlash shartlari, resurslari va mahalliy kontekstga mosligi baholanadi.',
      },

      {
        id: 'm1t1-h07',
        text:
          'TALIS ma’lumotlari asosida muammo aniqlandi, ammo uni bartaraf etish bo‘yicha hech qanday chora rejalashtirilmadi. Bunda boshqaruvning qaysi elementi yetishmayapti?',
        options: [
          'Faqat ma’lumot yig‘ish',
          'Natijalarni amaliy boshqaruv qarorlariga aylantirish',
          'Faqat xalqaro taqqoslash',
          'Faqat so‘rovnomani takrorlash',
        ],
        answer: 1,
        explanation:
          'Ma’lumotning boshqaruvdagi qiymati undan amaliy qarorlar va rivojlanish choralarini ishlab chiqishda foydalanilganda yuzaga chiqadi.',
      },

      {
        id: 'm1t1-h08',
        text:
          'Akkreditatsiya va TALISning boshqaruvdagi vazifalarini qiyoslaganda qaysi fikr to‘g‘ri?',
        options: [
          'Ikkalasi ham aynan bir xil jarayon.',
          'Akkreditatsiya muvofiqlikni baholash jarayoniga, TALIS esa o‘qituvchi va rahbarlar tajribasi haqidagi xalqaro so‘rov ma’lumotlariga yo‘naltirilgan.',
          'TALIS litsenziya berish jarayonidir.',
          'Akkreditatsiya faqat anonim so‘rovdan iborat.',
        ],
        answer: 1,
        explanation:
          'Akkreditatsiya va TALISning maqsadi hamda metodologiyasi turlicha: biri ta’lim tashkilotining belgilangan talablarga muvofiqligini baholashga, ikkinchisi esa xalqaro so‘rov orqali ma’lumot yig‘ishga xizmat qiladi.',
      },

      {
        id: 'm1t1-h09',
        text:
          'Maktab rahbari rivojlanish qarorini qabul qilishdan oldin bir nechta manbadan ma’lumot yig‘di. Keyingi eng muhim bosqich nima?',
        options: [
          'Barcha ma’lumotlarni o‘zgartirish',
          'Ma’lumotlarni tahlil qilib, muammo va sabablar o‘rtasidagi bog‘liqlikni aniqlash',
          'Faqat eng ijobiy ko‘rsatkichni tanlash',
          'Qarorni oldindan belgilab qo‘yish',
        ],
        answer: 1,
        explanation:
          'Ma’lumot yig‘ishning o‘zi yetarli emas. Qaror uchun ma’lumotlar tahlil qilinib, muammo va sabablar aniqlanishi kerak.',
      },

      {
        id: 'm1t1-h10',
        text:
          'Ta’lim boshqaruvini transformatsiya qilishda jamoatchilik ishtirokining ahamiyati nimada?',
        options: [
          'Barcha qarorlarni faqat jamoatchilik qabul qiladi.',
          'Qarorlar muhokamasida manfaatdor tomonlarning fikrini hisobga olish imkonini beradi.',
          'Rahbarning barcha vakolatlarini bekor qiladi.',
          'Monitoringni keraksiz qiladi.',
        ],
        answer: 1,
        explanation:
          'Demokratik boshqaruv va jamoatchilik ishtiroki manfaatdor tomonlarning fikrlarini hisobga olish hamda boshqaruv jarayonining ochiqligini kuchaytirishga xizmat qiladi.',
      },
    ],

    /*
     * =====================================================
     * 🔵 KEYS — 10 TA
     * =====================================================
     */

    case: [
      {
        id: 'm1t1-c01',
        text:
          'Maktabda o‘qituvchilarning kasbiy rivojlanishiga ehtiyoj borligi aniqlandi. Direktor darhol barcha o‘qituvchilarni bir xil seminarga yubormoqchi. Siz rahbar maslahatchisi sifatida qanday yondashuvni taklif qilasiz?',
        options: [
          'Barcha o‘qituvchilarni bir xil seminarga yuborish',
          'Ehtiyojlarni guruhlar bo‘yicha aniqlab, maqsadli kasbiy rivojlanish rejasini tuzish',
          'Kasbiy rivojlanishni vaqtincha to‘xtatish',
          'Faqat tajribali o‘qituvchilarni rivojlantirish',
        ],
        answer: 1,
        explanation:
          'Kasbiy rivojlanish ehtiyojlari turlicha bo‘lishi mumkin. Shuning uchun ehtiyojlarni aniqlash va maqsadli reja tuzish samaraliroq yondashuvdir.',
      },

      {
        id: 'm1t1-c02',
        text:
          'Akkreditatsiya jarayonida maktabda bir nechta kamchilik aniqlandi. Direktor ularni faqat hisobotda qayd etib qo‘ydi. Keyingi boshqaruv chorasi qanday bo‘lishi kerak?',
        options: [
          'Kamchiliklarni unutish',
          'Har bir kamchilik bo‘yicha aniq chora, mas’ul va muddat belgilash',
          'Faqat yangi hisobot yozish',
          'Muammoni boshqa maktabga yuklash',
        ],
        answer: 1,
        explanation:
          'Kamchiliklarni qayd etishning o‘zi yetarli emas. Ularni bartaraf etish uchun aniq choralar, mas’ullar va muddatlar belgilanadi.',
      },

      {
        id: 'm1t1-c03',
        text:
          'Maktabning ichki monitoringi o‘quvchilarning natijalari pasayganini ko‘rsatdi. Rahbar faqat o‘qituvchilarni tanqid qilish bilan cheklanmoqda. Zamonaviy boshqaruv nuqtayi nazaridan nima qilish kerak?',
        options: [
          'Faqat tanqidni kuchaytirish',
          'Muammoning sabablarini ma’lumotlar asosida aniqlab, rivojlanish choralarini ishlab chiqish',
          'Monitoringni bekor qilish',
          'O‘quvchilar sonini kamaytirish',
        ],
        answer: 1,
        explanation:
          'Samarali boshqaruv muammoni aniqlash, sabablarini tahlil qilish va amaliy rivojlanish choralarini ishlab chiqishni talab qiladi.',
      },

      {
        id: 'm1t1-c04',
        text:
          'TALIS natijalari maktab rahbariyatiga o‘qituvchilarning ish sharoitlari haqida yangi ma’lumot berdi. Rahbar undan qanday foydalanishi mumkin?',
        options: [
          'Ma’lumotlarni e’tiborsiz qoldirishi mumkin.',
          'Maktabning rivojlanish rejasida tegishli muammolarni hisobga olishi mumkin.',
          'Faqat o‘qituvchilarni jazolashi mumkin.',
          'Maktab faoliyatini to‘xtatishi mumkin.',
        ],
        answer: 1,
        explanation:
          'TALIS ma’lumotlari maktabdagi o‘qituvchilar va rahbarlar faoliyati bilan bog‘liq masalalarni rivojlanish rejasini ishlab chiqishda hisobga olishga yordam beradi.',
      },

      {
        id: 'm1t1-c05',
        text:
          'Rahbar xalqaro tajribani o‘rganib, uni maktabga to‘liq ko‘chirishga qaror qildi. Ammo maktab sharoiti boshqa. Qaysi qaror boshqaruv nuqtayi nazaridan asosli?',
        options: [
          'Tajribani aynanligicha ko‘chirish',
          'Tajribani mahalliy sharoitga moslashtirish',
          'Xalqaro tajribadan butunlay voz kechish',
          'Faqat tajriba nomini o‘zgartirish',
        ],
        answer: 1,
        explanation:
          'Xalqaro tajribadan foydalanishda mahalliy sharoit, resurslar va ehtiyojlarni hisobga olish muhim.',
      },

      {
        id: 'm1t1-c06',
        text:
          'Maktab rahbariyatida qarorlar faqat direktor tomonidan qabul qilinmoqda. Jamoa fikri deyarli inobatga olinmaydi. Demokratik boshqaruvni kuchaytirish uchun nima qilish mumkin?',
        options: [
          'Barcha qarorlarni faqat direktor qabul qilishda davom etishi',
          'Muhim masalalarda manfaatdor tomonlar fikrini o‘rganish va muhokama qilish',
          'Jamoa bilan aloqani kamaytirish',
          'Hisobotlarni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Demokratik boshqaruv jamoa va manfaatdor tomonlarning fikrini muhim qarorlar jarayonida hisobga olishni nazarda tutadi.',
      },

      {
        id: 'm1t1-c07',
        text:
          'Akkreditatsiya natijasida maktab faoliyatida kamchiliklar borligi aniqlandi. Bir oy o‘tib direktor “hammasi tuzatildi” deb hisobot berdi, lekin dalillar mavjud emas. Qaysi yondashuv to‘g‘ri?',
        options: [
          'Hisobotni dalilsiz qabul qilish',
          'Amalga oshirilgan choralar natijasini monitoring orqali tekshirish',
          'Muammoni yopilgan deb hisoblash',
          'Monitoringni bekor qilish',
        ],
        answer: 1,
        explanation:
          'Kamchiliklarni bartaraf etish bo‘yicha choralar ijrosi monitoring qilinishi va natijalar dalillar bilan tasdiqlanishi muhim.',
      },

      {
        id: 'm1t1-c08',
        text:
          'Maktabda o‘qituvchilar o‘rtasida jamoaviy hamkorlik sust. Rahbar pedagogik liderlikni kuchaytirmoqchi. Qaysi chora mantiqan mos?',
        options: [
          'O‘qituvchilar o‘rtasidagi hamkorlikni cheklash',
          'Kasbiy hamkorlik, tajriba almashish va birgalikda muammolarni hal qilish imkoniyatlarini kengaytirish',
          'Faqat nazoratni kuchaytirish',
          'Jamoaviy yig‘ilishlarni butunlay bekor qilish',
        ],
        answer: 1,
        explanation:
          'Pedagogik liderlik jamoaviy kasbiy rivojlanish, hamkorlik va ta’lim jarayonini takomillashtirishga yo‘naltiriladi.',
      },

      {
        id: 'm1t1-c09',
        text:
          'Rahbar maktabning rivojlanish rejasini tuzmoqda. Unda faqat umumiy maqsadlar yozilgan, lekin natijani o‘lchash mezonlari yo‘q. Qanday takomillashtirish zarur?',
        options: [
          'Maqsadlarni butunlay olib tashlash',
          'Maqsadlar bilan birga o‘lchab bo‘ladigan natija ko‘rsatkichlarini belgilash',
          'Faqat hisobot sonini ko‘paytirish',
          'Rejani faqat direktor fikriga asoslash',
        ],
        answer: 1,
        explanation:
          'Rivojlanish rejasida maqsadlar bilan birga natijani kuzatish imkonini beruvchi aniq ko‘rsatkichlar bo‘lishi boshqaruvni samaraliroq qiladi.',
      },

      {
        id: 'm1t1-c10',
        text:
          'Maktab rahbari TALIS, ichki monitoring va o‘qituvchilar fikrlarini o‘rgandi. Uchala manbada ham bir xil muammo ko‘rindi. Eng maqbul keyingi qadam nima?',
        options: [
          'Muammoni e’tiborsiz qoldirish',
          'Muammo bo‘yicha ustuvor chora-tadbirlar rejasini ishlab chiqish',
          'Faqat yana ma’lumot yig‘ish bilan cheklanish',
          'Barcha xodimlarni jazolash',
        ],
        answer: 1,
        explanation:
          'Bir nechta mustaqil manbada bir xil muammo aniqlanishi boshqaruv qarorini asoslash uchun muhim signal bo‘lib, keyingi bosqich amaliy choralarni rejalashtirishdir.',
      },
    ],
  },
      {
        id: 'm1t2',
        title: 'Strategik menejment',
        description:
          'Maktab rivojlanishini strategik rejalashtirish va uzoq muddatli maqsadlarni belgilash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t3',
        title: 'Boshqaruv psixologiyasi',
        description:
          'Rahbar, jamoa, motivatsiya va samarali boshqaruvning psixologik asoslari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t4',
        title: 'Korrupsiyaviy xavf-xatarlarni oldini olish',
        description:
          'Ta’lim muassasasida korrupsiyaviy xavflarni aniqlash va oldini olish mexanizmlari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t5',
        title: 'Boshqaruv qarorlari',
        description:
          'Ma’lumotlarga asoslangan boshqaruv qarorlarini ishlab chiqish va amalga oshirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm1t6',
        title: 'Maktab imijini shakllantirish',
        description:
          'Maktabning ijobiy imiji, kommunikatsiya va jamoatchilik bilan aloqalarni rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t2',
        title: 'O‘quvchilarning ta’lim dasturlarini o‘zlashtirishi',
        description:
          'O‘quvchilarning bilim va ko‘nikmalarini tahlil qilish hamda natijalarni yaxshilash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t3',
        title: 'O‘quvchilarni kasbga yo‘naltirish va kasb tanlash',
        description:
          'O‘quvchilarning qiziqish va qobiliyatlarini hisobga olgan holda kasbga yo‘naltirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t4',
        title: 'Ta’lim sifatini baholash',
        description:
          'Ta’lim natijalarini baholash va baholash ma’lumotlaridan boshqaruvda foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm2t5',
        title: 'Bola xavfsizligi va farovonligini ta’minlash',
        description:
          'Maktab muhitida o‘quvchilarning xavfsizligi, himoyasi va farovonligini ta’minlash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm3t2',
        title:
          'Rahbarning boshqaruv va shaxsiy samaradorligini rivojlantirish',
        description:
          'Vaqt, resurs, jamoa va shaxsiy samaradorlikni boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm3t3',
        title:
          'Pedagog xodimlarni kasbiy rivojlantirish va ish samaradorligini oshirish',
        description:
          'Pedagoglarning kasbiy rivojlanishi va faoliyat samaradorligini qo‘llab-quvvatlash.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t2',
        title:
          'Ta’lim muassasalarida mehnat munosabatlari va mehnat qonunchiligi',
        description:
          'Mehnat munosabatlari va xodimlar bilan ishlashning huquqiy asoslari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t3',
        title:
          'Umumiy o‘rta ta’lim tizimida kadrlarga oid hujjatlarning yuritilishi',
        description:
          'Kadrlar bo‘yicha hujjatlarni to‘g‘ri yuritish va hisobini tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm4t4',
        title: 'Inson resurslari faoliyatini baholash',
        description:
          'Xodimlar faoliyatini mezonlar asosida baholash va rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm5t2',
        title:
          'Maktablarda ish yuritish hujjatlari bilan ishlash va hisobdorlik',
        description:
          'Maktab hujjatlarini yuritish, nazorat va hisobotlarni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
    id: 'm6',
    title: '6-MODUL. Jamoatchilik va ota-onalar bilan ishlash',
    description:
      'Ota-onalar, jamoatchilik, davlat va jamoat tashkilotlari bilan samarali hamkorlik.',
    topics: [
      {
        id: 'm6t1',
        title:
          'Maktabning ota-onalar va jamoatchilik bilan hamkorligi',
        description:
          'Ota-onalar va jamoatchilikni ta’lim jarayoniga samarali jalb qilish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm6t2',
        title:
          'Maktabning davlat va jamoat tashkilotlari bilan hamkorligi',
        description:
          'Tashqi hamkorlar bilan tizimli va natijador hamkorlikni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm6t3',
        title: 'Boshqaruv va media savodxonlik',
        description:
          'Axborot bilan ishlash, media muhit va kommunikatsiya kompetensiyalarini rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm7t2',
        title:
          'Sun’iy intellekt tizimlaridan foydalanish',
        description:
          'Sun’iy intellekt imkoniyatlaridan ta’lim va boshqaruv jarayonlarida foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm8t2',
        title:
          'Jamoada sog‘lom muhitni tashkil etish va ahil jamoani shakllantirish',
        description:
          'Sog‘lom psixologik muhit, jamoaviy hamkorlik va ishonchni rivojlantirish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm8t3',
        title:
          'Ta’lim muassasasida risk va xavf-xatarlarni boshqarish',
        description:
          'Risklarni aniqlash, baholash va ularning oldini olish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm9t2',
        title:
          'Inklyuziv ta’limni tashkil etish mexanizmi',
        description:
          'Inklyuziv ta’limni tashkil etish va boshqarish mexanizmlari.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm9t3',
        title: 'Gospital ta’lim',
        description:
          'Davolanish jarayonidagi bolalar uchun ta’limni tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },

  {
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
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t2',
        title:
          'Xodimlar mehnatiga haq to‘lash va tarifikatsiyalarini me’yor asosida tuzish amaliyoti',
        description:
          'Mehnatga haq to‘lash va tarifikatsiya jarayonlarini me’yor asosida tashkil etish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t3',
        title:
          'Budjetdan tashqari mablag‘larni topish va samarali tasarruf etish',
        description:
          'Qo‘shimcha mablag‘larni jalb qilish va ulardan maqsadli foydalanish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
      {
        id: 'm10t4',
        title:
          'Umumiy o‘rta ta’lim maktablarida ta’lim xizmatlari',
        description:
          'Ta’lim xizmatlarini tashkil etish va ularni boshqarish.',
        levels: {
          easy: [],
          medium: [],
          hard: [],
          case: [],
        },
      },
    ],
  },
]

/*
 * =========================================================
 * BOG‘CHA
 * =========================================================
 *
 * Hozircha bo‘sh.
 *
 * Bog‘cha uchun mavzular va savollarni siz bergan
 * materiallar asosida keyingi bosqichda qo‘shamiz.
 */

export const PRESCHOOL_CATEGORIES: Category[] = []

/*
 * =========================================================
 * STATISTICS
 * =========================================================
 */

export const TOTAL_MODULES = CATEGORIES.length

export const TOTAL_TOPICS = CATEGORIES.reduce(
  (total, module) => total + module.topics.length,
  0,
)

export const TOTAL_QUESTIONS = CATEGORIES.reduce(
  (total, module) =>
    total +
    module.topics.reduce(
      (topicTotal, topic) =>
        topicTotal +
        topic.levels.easy.length +
        topic.levels.medium.length +
        topic.levels.hard.length +
        topic.levels.case.length,
      0,
    ),
  0,
)

/*
 * =========================================================
 * HELPERS
 * =========================================================
 */

export function getModuleById(
  moduleId: string,
): Category | undefined {
  return CATEGORIES.find(
    (module) => module.id === moduleId,
  )
}

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

export function getTopicQuestions(
  topicId: string,
): Question[] {
  const topic = getTopicById(topicId)

  if (!topic) {
    return []
  }

  return [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ]
}

export function getLevelQuestions(
  topicId: string,
  level: 'easy' | 'medium' | 'hard' | 'case',
): Question[] {
  const topic = getTopicById(topicId)

  if (!topic) {
    return []
  }

  return topic.levels[level]
}

export function getModuleQuestions(
  moduleId: string,
): Question[] {
  const module = getModuleById(moduleId)

  if (!module) {
    return []
  }

  return module.topics.flatMap((topic) => [
    ...topic.levels.easy,
    ...topic.levels.medium,
    ...topic.levels.hard,
    ...topic.levels.case,
  ])
}

/*
 * =========================================================
 * MIXED TEST
 * =========================================================
 *
 * Keyinchalik barcha modullardan avtomatik
 * tasodifiy savollar olinadi.
 */

export const MIXED_ID = 'aralash'

export const MIXED_COUNT = 30

export const MIXED_QUESTIONS: Question[] = []
