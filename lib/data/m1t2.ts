import type { Question } from '../quiz-data'

/*
 * =========================================================
 * 1-MODUL — 2-MAVZU
 * STRATEGIK MENEJMENT
 *
 * 30 OSON
 * 30 O'RTA
 * 30 QIYIN
 * 10 KEYS
 *
 * JAMI: 100 TA SAVOL
 * =========================================================
 */

export const M1T2_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  /*
   * =======================================================
   * OSON — 30 TA
   * =======================================================
   */

  easy: [
    {
      id: 'm1t2e01',
      text: 'Strategik menejment nima?',
      options: [
        'Tashkilotning uzoq muddatli rivojlanishini boshqarish jarayoni',
        'Faqat hujjatlarni rasmiylashtirish',
        'Faqat kundalik ishlarni nazorat qilish',
        'Faqat xodimlarga topshiriq berish',
      ],
      answer: 0,
      explanation:
        'Strategik menejment uzoq muddatli maqsadlarni belgilash, amalga oshirish va nazorat qilish jarayonidir.',
    },

    {
      id: 'm1t2e02',
      text: 'Strategik rejaning asosiy maqsadi nima?',
      options: [
        'Tashkilotning kelajakdagi rivojlanish yo‘nalishini belgilash',
        'Faqat davomatni hisoblash',
        'Faqat ish jadvalini tuzish',
        'Faqat hisobot yozish',
      ],
      answer: 0,
      explanation:
        'Strategik reja tashkilotning kelajakdagi holati va unga erishish yo‘llarini belgilaydi.',
    },

    {
      id: 'm1t2e03',
      text: 'Strategik maqsad qanday bo‘lishi kerak?',
      options: [
        'Aniq va erishish yo‘nalishi belgilangan',
        'Noaniq',
        'Faqat og‘zaki',
        'Muddat va mezonsiz',
      ],
      answer: 0,
      explanation:
        'Yaxshi strategik maqsad aniq, o‘lchanadigan va tashkilot rivojiga yo‘naltirilgan bo‘ladi.',
    },

    {
      id: 'm1t2e04',
      text: 'Strategik rejalashtirish nimadan boshlanadi?',
      options: [
        'Mavjud holatni tahlil qilishdan',
        'Darhol buyruq chiqarishdan',
        'Xodimlarni jazolashdan',
        'Hisobot topshirishdan',
      ],
      answer: 0,
      explanation:
        'Strategiya ishlab chiqishdan oldin tashkilotning mavjud holati va muhitini tahlil qilish zarur.',
    },

    {
      id: 'm1t2e05',
      text: 'Missiya nima?',
      options: [
        'Tashkilotning asosiy mavjudlik maqsadi',
        'Bir kunlik vazifa',
        'Xodimning shaxsiy rejasi',
        'Moliyaviy hisobot',
      ],
      answer: 0,
      explanation:
        'Missiya tashkilot nima uchun mavjudligini ifodalaydi.',
    },

    {
      id: 'm1t2e06',
      text: 'Vizyon tushunchasi nimani bildiradi?',
      options: [
        'Tashkilotning kelajakdagi istalgan holati',
        'Bugungi ish jadvali',
        'Xodimlar ro‘yxati',
        'Moliyaviy xarajatlar',
      ],
      answer: 0,
      explanation:
        'Vizyon tashkilot kelajakda qanday holatga erishishni ko‘zlashini bildiradi.',
    },

    {
      id: 'm1t2e07',
      text: 'Strategik maqsad nima uchun kerak?',
      options: [
        'Rivojlanish yo‘nalishini belgilash uchun',
        'Faqat nazorat uchun',
        'Faqat jazolash uchun',
        'Faqat hisobot uchun',
      ],
      answer: 0,
      explanation:
        'Strategik maqsad tashkilotning asosiy rivojlanish yo‘nalishini belgilaydi.',
    },

    {
      id: 'm1t2e08',
      text: 'Strategik menejmentda SWOT tahlil nimaga xizmat qiladi?',
      options: [
        'Ichki va tashqi omillarni tahlil qilishga',
        'Faqat ish haqini hisoblashga',
        'Faqat davomatni tekshirishga',
        'Faqat hujjatlarni saqlashga',
      ],
      answer: 0,
      explanation:
        'SWOT kuchli va zaif tomonlar, imkoniyatlar va tahdidlarni aniqlaydi.',
    },

    {
      id: 'm1t2e09',
      text: 'SWOTdagi S harfi nimani anglatadi?',
      options: [
        'Strengths',
        'Strategy',
        'System',
        'Success',
      ],
      answer: 0,
      explanation: 'Strengths — kuchli tomonlar.',
    },

    {
      id: 'm1t2e10',
      text: 'SWOTdagi W harfi nimani anglatadi?',
      options: [
        'Weaknesses',
        'Work',
        'Wisdom',
        'Way',
      ],
      answer: 0,
      explanation: 'Weaknesses — zaif tomonlar.',
    },

    {
      id: 'm1t2e11',
      text: 'SWOTdagi O harfi nimani anglatadi?',
      options: [
        'Opportunities',
        'Objectives',
        'Organization',
        'Operations',
      ],
      answer: 0,
      explanation: 'Opportunities — imkoniyatlar.',
    },

    {
      id: 'm1t2e12',
      text: 'SWOTdagi T harfi nimani anglatadi?',
      options: [
        'Threats',
        'Targets',
        'Tasks',
        'Team',
      ],
      answer: 0,
      explanation: 'Threats — tahdidlar.',
    },

    {
      id: 'm1t2e13',
      text: 'Strategik reja odatda qanday davrni qamrab oladi?',
      options: [
        'Uzoqroq muddatni',
        'Faqat bir kunni',
        'Faqat bir soatni',
        'Faqat bir darsni',
      ],
      answer: 0,
      explanation:
        'Strategik rejalashtirish o‘rta va uzoq muddatli rivojlanishga qaratiladi.',
    },

    {
      id: 'm1t2e14',
      text: 'Strategiyaning amalga oshirilishi nimani talab qiladi?',
      options: [
        'Resurslar, mas’uliyat va nazoratni',
        'Faqat buyruqni',
        'Faqat hisobotni',
        'Faqat yig‘ilishni',
      ],
      answer: 0,
      explanation:
        'Strategiyani amalga oshirish uchun resurs, mas’ullar va monitoring zarur.',
    },

    {
      id: 'm1t2e15',
      text: 'Strategik boshqaruvda monitoring nima?',
      options: [
        'Jarayon va natijalarni muntazam kuzatish',
        'Faqat hujjatlarni yig‘ish',
        'Faqat xodimlarni tanqid qilish',
        'Faqat majlis o‘tkazish',
      ],
      answer: 0,
      explanation:
        'Monitoring jarayon va natijalarni muntazam kuzatishdir.',
    },

    {
      id: 'm1t2e16',
      text: 'KPI nima?',
      options: [
        'Asosiy faoliyat samaradorligi ko‘rsatkichi',
        'Xodimlar ro‘yxati',
        'Buyruq turi',
        'Moliyaviy hujjat',
      ],
      answer: 0,
      explanation:
        'KPI — Key Performance Indicator, asosiy samaradorlik ko‘rsatkichi.',
    },

    {
      id: 'm1t2e17',
      text: 'Strategik boshqaruvda resurs nima?',
      options: [
        'Maqsadga erishish uchun foydalaniladigan imkoniyat va vositalar',
        'Faqat pul',
        'Faqat bino',
        'Faqat kompyuter',
      ],
      answer: 0,
      explanation:
        'Resurslarga inson, vaqt, moliya, texnologiya va boshqa imkoniyatlar kiradi.',
    },

    {
      id: 'm1t2e18',
      text: 'Strategik qarorlar qanday bo‘ladi?',
      options: [
        'Uzoq muddatli ta’sirga ega bo‘lishi mumkin',
        'Faqat bir kunlik',
        'Faqat texnik',
        'Faqat yozma',
      ],
      answer: 0,
      explanation:
        'Strategik qarorlar tashkilotning kelajakdagi rivojiga ta’sir qiladi.',
    },

    {
      id: 'm1t2e19',
      text: 'Strategik menejmentning muhim tamoyillaridan biri qaysi?',
      options: [
        'Maqsadga yo‘naltirilganlik',
        'Tasodifiylik',
        'Noaniqlik',
        'Rejasizlik',
      ],
      answer: 0,
      explanation:
        'Strategik menejment aniq maqsadlarga yo‘naltirilgan bo‘ladi.',
    },

    {
      id: 'm1t2e20',
      text: 'Strategik reja kim uchun muhim?',
      options: [
        'Tashkilotning barcha asosiy manfaatdor tomonlari uchun',
        'Faqat direktor uchun',
        'Faqat kotib uchun',
        'Faqat buxgalter uchun',
      ],
      answer: 0,
      explanation:
        'Strategik reja rahbariyat, xodimlar va boshqa manfaatdor tomonlar faoliyatini yo‘naltiradi.',
    },

    {
      id: 'm1t2e21',
      text: 'Maktab strategiyasining asosiy markazida nima turishi kerak?',
      options: [
        'Ta’lim sifati va o‘quvchi rivoji',
        'Faqat hujjatlar',
        'Faqat bino',
        'Faqat majlislar',
      ],
      answer: 0,
      explanation:
        'Maktab strategiyasining asosiy mazmuni ta’lim sifati va o‘quvchi rivojiga qaratiladi.',
    },

    {
      id: 'm1t2e22',
      text: 'Strategik reja bajarilishini qanday aniqlash mumkin?',
      options: [
        'Aniq ko‘rsatkichlar orqali',
        'Faqat taxmin bilan',
        'Faqat suhbat orqali',
        'Faqat hisobot soni bilan',
      ],
      answer: 0,
      explanation:
        'Natijalarni o‘lchash uchun aniq indikatorlar va mezonlar belgilanadi.',
    },

    {
      id: 'm1t2e23',
      text: 'Strategik menejmentda tahlil nima uchun kerak?',
      options: [
        'To‘g‘ri qaror va ustuvor yo‘nalishlarni aniqlash uchun',
        'Faqat hisobotni ko‘paytirish uchun',
        'Faqat majlis uchun',
        'Faqat nazorat uchun',
      ],
      answer: 0,
      explanation:
        'Tahlil vaziyatni tushunish va asoslangan qaror qabul qilishga yordam beradi.',
    },

    {
      id: 'm1t2e24',
      text: 'Ustuvor yo‘nalish nima?',
      options: [
        'Eng muhim va birinchi navbatda amalga oshiriladigan yo‘nalish',
        'Istalgan topshiriq',
        'Faqat moliyaviy ish',
        'Faqat bir martalik vazifa',
      ],
      answer: 0,
      explanation:
        'Ustuvor yo‘nalish tashkilot uchun eng katta ahamiyatga ega yo‘nalishdir.',
    },

    {
      id: 'm1t2e25',
      text: 'Strategik reja va kundalik rejaning asosiy farqi nima?',
      options: [
        'Strategik reja uzoq muddatli yo‘nalishni belgilaydi',
        'Strategik reja faqat bir kunlik bo‘ladi',
        'Kundalik reja har doim strategikdan muhim',
        'Ular o‘rtasida farq yo‘q',
      ],
      answer: 0,
      explanation:
        'Strategik reja kelajak yo‘nalishini, kundalik reja joriy vazifalarni belgilaydi.',
    },

    {
      id: 'm1t2e26',
      text: 'Strategik boshqaruvda jamoaning ishtiroki nima beradi?',
      options: [
        'Maqsadlarni yaxshiroq tushunish va ijroni kuchaytiradi',
        'Faqat vaqtni oladi',
        'Strategiyani keraksiz qiladi',
        'Nazoratni bekor qiladi',
      ],
      answer: 0,
      explanation:
        'Jamoa ishtiroki strategiyani tushunish va amalga oshirishni kuchaytiradi.',
    },

    {
      id: 'm1t2e27',
      text: 'Strategik menejmentda risk nima?',
      options: [
        'Maqsadga erishishga salbiy ta’sir qilishi mumkin bo‘lgan noaniqlik',
        'Faqat moliyaviy daromad',
        'Xodimlar soni',
        'Ish jadvali',
      ],
      answer: 0,
      explanation:
        'Risk maqsadga erishishga ta’sir qilishi mumkin bo‘lgan noaniqlik yoki xavfdir.',
    },

    {
      id: 'm1t2e28',
      text: 'Strategik rejani muntazam qayta ko‘rib chiqish nima uchun kerak?',
      options: [
        'O‘zgaruvchan sharoitlarga moslashish uchun',
        'Faqat hujjatni ko‘paytirish uchun',
        'Faqat direktor talab qilgani uchun',
        'Strategiyani bekor qilish uchun',
      ],
      answer: 0,
      explanation:
        'Ichki va tashqi sharoitlar o‘zgarganda strategiyani moslashtirish zarur bo‘lishi mumkin.',
    },

    {
      id: 'm1t2e29',
      text: 'Strategik menejerning asosiy vazifalaridan biri qaysi?',
      options: [
        'Rivojlanish yo‘nalishini belgilash va natijalarni boshqarish',
        'Faqat hujjat nusxalash',
        'Faqat davomat olish',
        'Faqat xo‘jalik ishlarini bajarish',
      ],
      answer: 0,
      explanation:
        'Strategik menejer rivojlanish yo‘nalishi va natijalarni boshqarishga e’tibor beradi.',
    },

    {
      id: 'm1t2e30',
      text: 'Strategik menejmentning yakuniy yo‘nalishi nimaga qaratiladi?',
      options: [
        'Barqaror rivojlanish va natijadorlikka',
        'Faqat nazoratga',
        'Faqat hujjatga',
        'Faqat yig‘ilishga',
      ],
      answer: 0,
      explanation:
        'Strategik menejment barqaror rivojlanish va natijadorlikni ta’minlashga qaratiladi.',
    },
  ],

  /*
   * =======================================================
   * O‘RTA — 30 TA
   * ANALITIK VA MANTIQIY
   * =======================================================
   */

  medium: [
    {
      id: 'm1t2m01',
      text: 'Maktabda o‘zlashtirish 82% dan 74% ga tushdi. Biroq o‘qituvchilar darslar sonini oshirgan. Rahbar uchun qaysi xulosa eng asosli?',
      options: [
        'Faoliyat hajmi oshgani natija yaxshilanganini anglatmaydi',
        'Qo‘shimcha darslar noto‘g‘ri ekanini darhol xulosa qilish',
        'O‘qituvchilar yetarlicha ishlamayapti deb hisoblash',
        'Strategik reja umuman kerak emas deb qarash',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda faoliyat hajmi bilan yakuniy natijani farqlash muhim.',
    },

    {
      id: 'm1t2m02',
      text: 'Maktabda 5 ta muammo aniqlandi. Resurs esa faqat 2 ta yo‘nalishga yetadi. Ustuvorlikni tanlashda qaysi kombinatsiya mantiqan kuchliroq?',
      options: [
        'Ta’sir darajasi va amalga oshirish imkoniyatini birga baholash',
        'Eng ko‘p shikoyat qilingan muammoni avtomatik tanlash',
        'Eng oson bajariladigan ikkita vazifani tanlash',
        'Direktor uchun eng qulay bo‘lgan vazifalarni tanlash',
      ],
      answer: 0,
      explanation:
        'Ustuvorlashtirishda muammoning ta’siri va mavjud resurs bilan bajarish imkoniyati birga ko‘riladi.',
    },

    {
      id: 'm1t2m03',
      text: 'SWOT tahlilida “tajribali pedagoglar mavjud” va “malaka oshirish imkoniyati kengaydi” degan ikki xulosa olindi. Ular qanday bog‘lanadi?',
      options: [
        'Ichki kuch tashqi imkoniyatdan foydalanish uchun tayanch bo‘la oladi',
        'Ikkalasi ham faqat tashqi tahdid hisoblanadi',
        'Ikkalasi bir-biriga bog‘liq emas',
        'Imkoniyat mavjud bo‘lsa, ichki salohiyatning ahamiyati kamayadi',
      ],
      answer: 0,
      explanation:
        'SWOT strategiya uchun ichki kuchlardan tashqi imkoniyatlarni egallashda foydalanishni ko‘rsatishi mumkin.',
    },

    {
      id: 'm1t2m04',
      text: 'Strategik maqsad: “Maktabni rivojlantirish”. Bu maqsadning asosiy kamchiligi nimada?',
      options: [
        'Kutilayotgan natija va o‘lchash mezoni aniq emas',
        'Maqsad juda qisqa muddatli',
        'Maqsadda faqat moliyaviy ko‘rsatkich bor',
        'Maqsadda ortiqcha KPI mavjud',
      ],
      answer: 0,
      explanation:
        'Umumiy ifoda natijani o‘lchash va ijrochilar harakatini yo‘naltirishni qiyinlashtiradi.',
    },

    {
      id: 'm1t2m05',
      text: 'Maktab strategiyasida “o‘quvchilar natijasini oshirish” maqsadi bor. Qaysi ko‘rsatkich unga eng yaqin natijani ifodalaydi?',
      options: [
        'O‘quvchilarning belgilangan kompetensiyalar bo‘yicha o‘sish darajasi',
        'O‘tkazilgan yig‘ilishlar soni',
        'O‘qituvchilar yozgan hisobotlar soni',
        'Direktor bergan topshiriqlar soni',
      ],
      answer: 0,
      explanation:
        'Natija ko‘rsatkichi bevosita o‘quvchi rivoji bilan bog‘liq bo‘lishi kerak.',
    },

    {
      id: 'm1t2m06',
      text: 'Strategik reja yaxshi yozilgan, ammo har bir vazifaning mas’uli ko‘rsatilmagan. Eng ehtimoliy boshqaruv muammosi qaysi?',
      options: [
        'Ijro uchun javobgarlikning noaniqligi',
        'Strategik maqsadlarning avtomatik ko‘payishi',
        'Tashqi muhit ta’sirining yo‘qolishi',
        'KPIlarning o‘z-o‘zidan noto‘g‘ri bo‘lishi',
      ],
      answer: 0,
      explanation:
        'Mas’uliyat belgilanmasa, vazifa ijrosi va javobgarlikni kuzatish qiyinlashadi.',
    },

    {
      id: 'm1t2m07',
      text: 'Bir ko‘rsatkich 90% bo‘ldi, ammo o‘quvchilarning zaif guruhi natijasi 55% bo‘lib qoldi. Qaysi xulosa ehtiyotkorroq?',
      options: [
        'Umumiy ko‘rsatkich ichki tafovutlarni yashirishi mumkin',
        'Maktabdagi barcha guruhlar bir xil natija ko‘rsatmoqda',
        '55% natija strategik jihatdan ahamiyatsiz',
        '90% natija barcha muammolar hal bo‘lganini bildiradi',
      ],
      answer: 0,
      explanation:
        'Agregat ko‘rsatkichlar ayrim guruhlar yoki fanlardagi muammolarni yashirishi mumkin.',
    },

    {
      id: 'm1t2m08',
      text: 'Strategik maqsad bajarilmadi. Monitoringda muammo uchinchi oyda paydo bo‘lgani ko‘rindi, lekin rahbar uni yil oxirida bildi. Qaysi tizimiy kamchilik ko‘rinadi?',
      options: [
        'Erta ogohlantirish va oraliq monitoring yetarli bo‘lmagan',
        'Strategik maqsad noto‘g‘ri yozilgan',
        'Barcha xodimlar mas’uliyatsiz',
        'SWOT tahlili umuman kerak emas',
      ],
      answer: 0,
      explanation:
        'Muammo erta paydo bo‘lgan bo‘lsa, muntazam monitoring va signal tizimi uni oldinroq ko‘rsatishi kerak edi.',
    },

    {
      id: 'm1t2m09',
      text: 'Maktabda yangi platforma joriy qilindi. Texnika mavjud, ammo foydalanish darajasi past. Eng to‘g‘ri diagnostik savol qaysi?',
      options: [
        'Xodimlar foydalanmasligining asosiy to‘sig‘i nima?',
        'Nega barcha xodimlar jazolanmayapti?',
        'Nega yana boshqa platforma sotib olinmayapti?',
        'Nega platforma haqida ko‘proq buyruq chiqarilmayapti?',
      ],
      answer: 0,
      explanation:
        'Muammoni hal qilishdan oldin foydalanmaslikning real sababini aniqlash kerak.',
    },

    {
      id: 'm1t2m10',
      text: 'Strategik reja tuzildi, lekin kundalik ishlar unga bog‘lanmagan. Natijada nima yuz berishi mumkin?',
      options: [
        'Strategiya hujjat darajasida qolib, operativ faoliyat boshqa yo‘nalishga ketishi mumkin',
        'Strategik maqsadlar avtomatik bajariladi',
        'Monitoringga ehtiyoj qolmaydi',
        'Resurslar o‘z-o‘zidan ko‘payadi',
      ],
      answer: 0,
      explanation:
        'Strategik va operativ boshqaruv o‘rtasidagi uzilish strategiyaning ijrosini zaiflashtiradi.',
    },

    {
      id: 'm1t2m11',
      text: 'Ikki loyiha bir xil resurs talab qilmoqda. Birinchisi 200 o‘quvchiga, ikkinchisi 40 o‘quvchiga ta’sir qiladi. Faqat shu ma’lumotga qarab nima deyish mumkin?',
      options: [
        'Ta’sir ko‘lami ustuvorlikni belgilashda muhim mezon bo‘lishi mumkin',
        '200 o‘quvchilik loyiha har doim avtomatik tanlanadi',
        '40 o‘quvchilik loyiha har doim foydaliroq',
        'Loyihalar o‘rtasida hech qanday farq yo‘q',
      ],
      answer: 0,
      explanation:
        'Ta’sir ko‘lami muhim mezon, biroq yakuniy tanlovda boshqa omillar ham hisobga olinadi.',
    },

    {
      id: 'm1t2m12',
      text: 'Rahbar “natijani oshirish” uchun faqat nazorat sonini ko‘paytirdi. Bir oy o‘tib nazoratlar 2 baravar oshdi, natija esa o‘zgarmadi. Bu nimani ko‘rsatadi?',
      options: [
        'Nazorat faoliyatining ko‘payishi natija sababini hal qilmagan',
        'Nazorat har doim noto‘g‘ri usul',
        'Natija o‘lchashning iloji yo‘q',
        'Strategik boshqaruvda monitoring kerak emas',
      ],
      answer: 0,
      explanation:
        'Faoliyatni ko‘paytirish avtomatik ravishda muammoning ildiz sababini bartaraf etmaydi.',
    },

    {
      id: 'm1t2m13',
      text: 'Strategik qaror uchun uch xil ma’lumot mavjud: eskirgan statistika, yangi lekin to‘liq bo‘lmagan ma’lumot, ishonchli yangi ma’lumot. Qaysi asos ustuvor?',
      options: [
        'Ishonchli va dolzarb ma’lumot',
        'Eng katta hajmdagi ma’lumot',
        'Eng eski ma’lumot',
        'Rahbarga qulay bo‘lgan ma’lumot',
      ],
      answer: 0,
      explanation:
        'Strategik qarorda ma’lumotning dolzarbligi va ishonchliligi muhim.',
    },

    {
      id: 'm1t2m14',
      text: '“O‘qituvchilarni rivojlantirish” strategik maqsadiga qaysi ketma-ketlik mantiqan yaqinroq?',
      options: [
        'Ehtiyojni aniqlash → rivojlantirish → amaliy qo‘llash → natijani baholash',
        'Hisobot → mukofot → trening → ehtiyojni aniqlash',
        'Trening → hisobot → muammo → maqsad',
        'Nazorat → jazolash → trening → maqsad',
      ],
      answer: 0,
      explanation:
        'Strategik rivojlanishda avval ehtiyoj aniqlanib, keyin rivojlantirish va natija baholanadi.',
    },

    {
      id: 'm1t2m15',
      text: 'Strategik reja bo‘yicha 10 ta vazifaning 9 tasi bajarildi, ammo asosiy natija olinmadi. Eng muhim tahlil nimaga qaratiladi?',
      options: [
        'Bajarilgan vazifalar haqiqatan strategik natijaga olib kelgan-kelmaganiga',
        'Nega 10-vazifa bajarilmaganiga',
        'Hisobot necha bet bo‘lganiga',
        'Yig‘ilishlar soniga',
      ],
      answer: 0,
      explanation:
        'Vazifalar bajarilishi emas, ularning strategik natijaga ta’siri muhim.',
    },

    {
      id: 'm1t2m16',
      text: 'Strategik maqsadga erishish uchun 100 birlik resurs bor. Rahbar uni 10 ta kichik vazifaga teng bo‘lib berdi. Qaysi xavf yuzaga keladi?',
      options: [
        'Resurs yuqori ta’sirli yo‘nalishlarga yetarli darajada jamlanmasligi mumkin',
        'Barcha vazifalar avtomatik muvaffaqiyatli bo‘ladi',
        'Strategik risklar yo‘qoladi',
        'Monitoringga ehtiyoj qolmaydi',
      ],
      answer: 0,
      explanation:
        'Resursni haddan tashqari mayda bo‘lish strategik ta’sirni pasaytirishi mumkin.',
    },

    {
      id: 'm1t2m17',
      text: 'Quyidagi juftliklardan qaysi biri to‘g‘ri moslashtirilgan?',
      options: [
        '1-SWOT; 2-KPI; 3-PEST; 4-PDCA',
        '1-KPI; 2-SWOT; 3-PDCA; 4-PEST',
        '1-PEST; 2-PDCA; 3-KPI; 4-SWOT',
        '1-PDCA; 2-PEST; 3-SWOT; 4-KPI',
      ],
      answer: 0,
      explanation:
        '1-SWOT — muhit tahlili; 2-KPI — samaradorlik ko‘rsatkichi; 3-PEST — tashqi muhit; 4-PDCA — takomillashtirish sikli.',
    },

    {
      id: 'm1t2m18',
      text: '1. SWOT — ?; 2. KPI — ?; 3. PEST — ?; 4. Benchmarking — ?. Qaysi moslashtirish to‘g‘ri?',
      options: [
        'A) Ichki-tashqi tahlil; B) samaradorlik ko‘rsatkichi; C) tashqi muhit; D) ilg‘or tajriba taqqoslash',
        'A) Tashqi muhit; B) ichki tahlil; C) KPI; D) moliyaviy nazorat',
        'A) KPI; B) PEST; C) SWOT; D) hujjat yuritish',
        'A) Ilg‘or tajriba; B) SWOT; C) KPI; D) PEST',
      ],
      answer: 0,
      explanation:
        'Tushunchalar o‘z vazifalari bilan to‘g‘ri moslashtirilgan javob A variantda berilgan.',
    },

    {
      id: 'm1t2m19',
      text: 'Strategik maqsad: “O‘quvchilarning mustaqil fikrlashini rivojlantirish”. Qaysi chora maqsadga eng bevosita xizmat qiladi?',
      options: [
        'Muammoli va ochiq topshiriqlar ulushini oshirish',
        'Faqat nazorat ishlarini ko‘paytirish',
        'Faqat davomatni tekshirish',
        'Faqat hisobotlar sonini oshirish',
      ],
      answer: 0,
      explanation:
        'Mustaqil fikrlashni rivojlantirish uchun o‘quvchidan tahlil va mustaqil xulosa talab qiladigan faoliyat zarur.',
    },

    {
      id: 'm1t2m20',
      text: 'Strategik maqsadga erishishda qarshilik kuchaydi. Rahbarning birinchi vazifasi nimani aniqlash bo‘lishi kerak?',
      options: [
        'Qarshilikning sababi va qaysi manfaatlar ta’sir qilayotganini',
        'Qarshilik qilayotganlarni darhol almashtirishni',
        'Barcha o‘zgarishlarni to‘xtatishni',
        'Qarshilikni statistikadan chiqarib tashlashni',
      ],
      answer: 0,
      explanation:
        'Qarshilikning sababini tushunmasdan qabul qilingan qaror muammoni kuchaytirishi mumkin.',
    },

    {
      id: 'm1t2m21',
      text: 'Strategik reja bo‘yicha indikator 70% bajarildi. Ammo bu ko‘rsatkich nimani anglatishi noaniq. Asosiy muammo nima?',
      options: [
        'Indikatorning o‘lchash mantig‘i va natija bilan bog‘liqligi yetarli aniqlanmagan',
        '70% har doim yaxshi natija',
        '70% har doim yomon natija',
        'Monitoringni bekor qilish kerak',
      ],
      answer: 0,
      explanation:
        'Foizning o‘zi yetarli emas; indikator nimani o‘lchashi va natijaga qanday bog‘lanishi aniq bo‘lishi kerak.',
    },

    {
      id: 'm1t2m22',
      text: 'Strategik rejaning bir vazifasi kutilganidan ko‘ra ko‘proq resurs talab qildi. Qaysi qaror eng mantiqiy?',
      options: [
        'Vazifaning strategik ahamiyati va qolgan resurslarga ta’sirini qayta baholash',
        'Darhol barcha boshqa vazifalarni bekor qilish',
        'Qo‘shimcha resursni sababsiz ajratish',
        'Vazifani har qanday holatda davom ettirish',
      ],
      answer: 0,
      explanation:
        'Resurs o‘zgarishida strategik ustuvorlik va umumiy portfelga ta’sir qayta baholanadi.',
    },

    {
      id: 'm1t2m23',
      text: 'Maktabda bitta muvaffaqiyatli loyiha bor, ammo uni boshqa sinflarga ko‘chirish natija bermadi. Eng to‘g‘ri savol qaysi?',
      options: [
        'Qaysi shartlar loyiha muvaffaqiyatiga sabab bo‘lgan va ular yangi sharoitda mavjudmi?',
        'Nega boshqa sinflar loyiha bilan ishlashni xohlamadi?',
        'Loyihani barcha sinflarga majburiy joriy qilish kerakmi?',
        'Muvaffaqiyatli loyiha har doim hamma joyda ishlaydi, shundaymi?',
      ],
      answer: 0,
      explanation:
        'Ilg‘or tajribani ko‘chirishda uning muvaffaqiyat shartlarini ham ko‘chirish zarur.',
    },

    {
      id: 'm1t2m24',
      text: 'Strategik boshqaruvda benchmarkingdan foydalanishda eng katta xatolardan biri qaysi?',
      options: [
        'Boshqa tashkilot tajribasini o‘z sharoitini hisobga olmasdan ko‘chirish',
        'Boshqa tashkilot natijalarini o‘rganish',
        'Tajriba sabablarini tahlil qilish',
        'O‘z natijasini taqqoslash',
      ],
      answer: 0,
      explanation:
        'Benchmarking ko‘r-ko‘rona nusxa olish emas, mos tajribani sharoitga moslashtirishdir.',
    },

    {
      id: 'm1t2m25',
      text: 'Strategik qaror uchun rahbarning shaxsiy tajribasi va statistik ma’lumotlar bir-biriga zid chiqdi. Eng maqbul yondashuv qaysi?',
      options: [
        'Ma’lumotlarning sifatini tekshirib, qarama-qarshilik sababini aniqlash',
        'Har doim faqat shaxsiy tajribaga ishonish',
        'Har doim faqat statistikaga ishonish',
        'Qarorni tasodifan tanlash',
      ],
      answer: 0,
      explanation:
        'Qarama-qarshi dalillar bo‘lsa, ularning sifati, manbasi va konteksti tekshiriladi.',
    },

    {
      id: 'm1t2m26',
      text: 'Strategik reja bajarilmoqda, lekin xodimlar asosiy maqsadni turlicha tushunmoqda. Eng ehtimoliy zaif bo‘g‘in qaysi?',
      options: [
        'Strategik kommunikatsiya',
        'Moliyaviy audit',
        'Bino infratuzilmasi',
        'Davomat nazorati',
      ],
      answer: 0,
      explanation:
        'Maqsadning turlicha talqin qilinishi strategik kommunikatsiya yetarli emasligini ko‘rsatishi mumkin.',
    },

    {
      id: 'm1t2m27',
      text: 'Rahbar strategik rejani har oy o‘zgartiradi. Bu holat qachon asosli bo‘lishi mumkin?',
      options: [
        'Muhit yoki ma’lumotlar keskin o‘zgarganda va o‘zgarish dalil bilan asoslanganda',
        'Rahbar fikri har kuni o‘zgarganda',
        'Xodimlardan biri taklif qilganda',
        'Rejani yangilashning o‘zi maqsad bo‘lganda',
      ],
      answer: 0,
      explanation:
        'Strategik moslashuv o‘zgarish dalil bilan asoslangan taqdirdagina boshqaruv vositasiga aylanadi.',
    },

    {
      id: 'm1t2m28',
      text: 'Strategik maqsadlar ko‘p, ammo jamoa vaqtining katta qismi mayda topshiriqlarga sarflanmoqda. Rahbar nimani tekshirishi kerak?',
      options: [
        'Operativ ishlar strategik ustuvorliklarga qanchalik xizmat qilayotganini',
        'Xodimlarga yana ko‘proq topshiriq berishni',
        'Strategik maqsadlarni ko‘paytirishni',
        'Hisobotlar sonini oshirishni',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda kundalik faoliyat strategik ustuvorliklarga xizmat qilishi kerak.',
    },

    {
      id: 'm1t2m29',
      text: '1. Maqsad; 2. Vazifa; 3. KPI; 4. Monitoring. Qaysi moslashtirish to‘g‘ri?',
      options: [
        '1-kutilayotgan natija; 2-bajariladigan ish; 3-o‘lchov; 4-kuzatish va tahlil',
        '1-kuzatish; 2-o‘lchov; 3-natija; 4-vazifa',
        '1-vazifa; 2-natija; 3-kuzatish; 4-o‘lchov',
        '1-o‘lchov; 2-monitoring; 3-vazifa; 4-natija',
      ],
      answer: 0,
      explanation:
        'Maqsad natijani, vazifa harakatni, KPI o‘lchovni, monitoring esa kuzatish va tahlilni anglatadi.',
    },

    {
      id: 'm1t2m30',
      text: 'Strategik boshqaruvda yaxshi reja va yaxshi ijro o‘rtasidagi asosiy bog‘lovchi nima?',
      options: [
        'Aniq mas’uliyat, resurs, muddat va monitoringning bir tizimga bog‘lanishi',
        'Faqat direktorning nazorati',
        'Faqat katta hajmdagi hujjatlar',
        'Faqat tez-tez o‘tkaziladigan yig‘ilishlar',
      ],
      answer: 0,
      explanation:
        'Strategiya ijroga aylanishi uchun vazifalar, resurslar, muddat va nazorat mexanizmi uyg‘un bo‘lishi kerak.',
    },
  ],

  /*
   * =======================================================
   * QIYIN — 30 TA
   * MANTIQIY, STRATEGIK VA VAZIYATLI
   * =======================================================
   */

  hard: [
    {
      id: 'm1t2h01',
      text: 'Maktabning umumiy o‘zlashtirish ko‘rsatkichi 8% oshdi. Shu davrda past natijali o‘quvchilar guruhi 3% ga kamaydi. Rahbar faqat umumiy ko‘rsatkichga tayansa, qanday xatoga yo‘l qo‘yishi mumkin?',
      options: [
        'O‘sish ortida ayrim guruhlarning muammosi yashirin qolishini e’tibordan chetda qoldirishi mumkin',
        'Umumiy ko‘rsatkich har doim barcha guruhlarni to‘liq ifodalaydi',
        'Past natijali guruhning kamayishi strategik jihatdan ahamiyatsiz',
        'Umumiy ko‘rsatkich oshganligi sababli qo‘shimcha tahlil kerak emas',
      ],
      answer: 0,
      explanation:
        'Agregat natija ichki tafovutlarni yashirishi mumkin. Strategik tahlilda segmentlar ham ko‘riladi.',
    },

    {
      id: 'm1t2h02',
      text: 'Strategik rejaning 12 ta vazifasidan 11 tasi bajarildi, ammo asosiy natija o‘zgarmadi. Qaysi xulosa eng kuchli?',
      options: [
        'Vazifalar bilan kutilgan natija o‘rtasidagi sabab-oqibat bog‘lanishi qayta tekshirilishi kerak',
        'Demak, xodimlar 11 ta vazifani noto‘g‘ri bajargan',
        '12-vazifa bajarilsa natija avtomatik paydo bo‘ladi',
        'Strategik reja muvaffaqiyatli bajarilgan hisoblanadi',
      ],
      answer: 0,
      explanation:
        'Faoliyat bajarilishi natija mavjudligini kafolatlamaydi. Strategik mantiq qayta tekshiriladi.',
    },

    {
      id: 'm1t2h03',
      text: 'Maktabda raqamli texnologiya uchun imkoniyat yuqori, ammo pedagoglarning tayyorgarligi past. Strategik jihatdan qaysi yo‘l kuchliroq?',
      options: [
        'Texnologiyani joriy etish bilan birga kompetensiya bo‘shlig‘ini bosqichma-bosqich yopish',
        'Pedagoglar tayyor bo‘lmagani uchun texnologiyadan butunlay voz kechish',
        'Faqat texnika xaridini ko‘paytirish',
        'Texnologiyani majburiy qilish va natijani kutish',
      ],
      answer: 0,
      explanation:
        'Strategik yechim tashqi imkoniyatni ichki zaiflikni rivojlantirish bilan bog‘laydi.',
    },

    {
      id: 'm1t2h04',
      text: 'Bir loyiha 3 oyda 80% natija beradi, ikkinchisi 2 yilda 150% natija berishi kutilmoqda. Resurs faqat bittasiga yetadi. Qaysi qaror eng professional?',
      options: [
        'Faqat vaqt yoki foizga emas, strategik ta’sir, risk, barqarorlik va maqsadga moslikka qarab tanlash',
        'Har doim tezroq natija beradigan loyihani tanlash',
        'Har doim katta foiz va uzoq muddatli loyihani tanlash',
        'Tasodifiy ravishda bittasini tanlash',
      ],
      answer: 0,
      explanation:
        'Strategik tanlov birgina mezon bilan emas, umumiy qiymat, risk va strategik moslik bilan baholanadi.',
    },

    {
      id: 'm1t2h05',
      text: 'KPI bo‘yicha natija 98% ga yetdi, ammo asosiy foydalanuvchilar qoniqishi pasaydi. Bu nimani anglatishi mumkin?',
      options: [
        'KPI haqiqiy strategik natijani to‘liq aks ettirmayotgan bo‘lishi mumkin',
        'KPI 98% bo‘lgani uchun boshqa ma’lumotlar noto‘g‘ri',
        'Qoniqish strategik natijaga aloqador emas',
        'KPI avtomatik ravishda mukammal tanlangan',
      ],
      answer: 0,
      explanation:
        'Ko‘rsatkich yuqori bo‘lishi mumkin, lekin noto‘g‘ri tanlangan indikator real qiymatni aks ettirmasligi mumkin.',
    },

    {
      id: 'm1t2h06',
      text: 'Rahbar muammoni hal qilish uchun uchta chorani belgiladi. Birinchi chora tez natija beradi, ikkinchisi ildiz sababga ta’sir qiladi, uchinchisi faqat alomatni kamaytiradi. Qaysi yondashuv eng asosli?',
      options: [
        'Qisqa muddatli chorani zarur bo‘lsa qo‘llab, asosiy e’tiborni ildiz sababga qaratish',
        'Faqat eng tez natija beradigan chorani tanlash',
        'Faqat alomatni kamaytiradigan chorani tanlash',
        'Uchalasini ham tahlilsiz bir xil darajada bajarish',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda tezkor choralar va tizimli sabablarni bartaraf etish o‘rtasida muvozanat kerak.',
    },

    {
      id: 'm1t2h07',
      text: 'Strategik maqsadga erishish uchun asosiy resurs kamaydi. Rahbar rejaning barcha vazifalarini o‘zgartirmasdan qoldirdi. Eng katta xavf nimada?',
      options: [
        'Resurs yetishmasligi sababli ustuvor vazifalar ham sustlashib, umumiy natija xavf ostida qolishi',
        'Barcha vazifalar baribir bir xil tezlikda bajarilishi',
        'Resurs kamayishi strategiyaga ta’sir qilmasligi',
        'Monitoring avtomatik ravishda kuchayishi',
      ],
      answer: 0,
      explanation:
        'Resurs o‘zgarishi strategik ustuvorliklarni qayta ko‘rib chiqishni talab qilishi mumkin.',
    },

    {
      id: 'm1t2h08',
      text: 'Ikki strategik maqsad bir xil resursni talab qiladi va biri ikkinchisining natijasini pasaytiradi. Rahbar nimadan boshlashi kerak?',
      options: [
        'Maqsadlar o‘rtasidagi bog‘liqlik va umumiy strategik qiymatni tahlil qilishdan',
        'Avval yozilgan maqsadni avtomatik tanlashdan',
        'Ikkalasiga teng resurs ajratishdan',
        'Har ikkala maqsadni bekor qilishdan',
      ],
      answer: 0,
      explanation:
        'Strategik qarorda maqsadlar o‘rtasidagi trade-off va umumiy natija tahlil qilinadi.',
    },

    {
      id: 'm1t2h09',
      text: 'Maktabning asosiy strategik muammosi o‘qitish sifati bo‘lsa, quyidagilardan qaysi biri sabab emas, balki faqat faoliyat ko‘rsatkichi bo‘lishi mumkin?',
      options: [
        'O‘tkazilgan metodik yig‘ilishlar soni',
        'O‘qituvchilarning pedagogik kompetensiyasi',
        'Dars kuzatuvlaridagi aniqlangan muammolar',
        'O‘quvchilar topshiriqlarining o‘zlashtirilish darajasi',
      ],
      answer: 0,
      explanation:
        'Yig‘ilishlar soni faoliyatni bildiradi, lekin o‘qitish sifati sababini bevosita anglatmaydi.',
    },

    {
      id: 'm1t2h10',
      text: 'Strategik maqsad uchun baseline 62% edi. Bir yil o‘tib natija 70% bo‘ldi. Rahbar faqat 8 foiz punkt o‘sishni ko‘rib xulosa qilsa, nimani yana tekshirishi kerak?',
      options: [
        'O‘sish qaysi guruhlar hisobiga yuz bergani va natija qanchalik barqarorligini',
        'Faqat yana yangi maqsad yozishni',
        'Faqat hisobot hajmini',
        'Baseline endi umuman kerak emasligini',
      ],
      answer: 0,
      explanation:
        'O‘sishning tarkibi, manbasi va barqarorligi strategik baholashda muhim.',
    },

    {
      id: 'm1t2h11',
      text: 'Bir ko‘rsatkich yaxshilandi, lekin boshqa ikki muhim ko‘rsatkich yomonlashdi. Rahbar faqat yaxshilangan ko‘rsatkich asosida “strategiya ishladi” desa, qanday muammo yuzaga keladi?',
      options: [
        'Strategiyaning umumiy ta’siri o‘rniga bitta indikator asosida xulosa qilinadi',
        'Strategik tahlil avtomatik ravishda chuqurlashadi',
        'Boshqa indikatorlarning ahamiyati oshadi',
        'Strategik risklar yo‘qoladi',
      ],
      answer: 0,
      explanation:
        'Bir indikator butun tizim natijasini ifodalamasligi mumkin.',
    },

    {
      id: 'm1t2h12',
      text: 'Strategik loyiha muvaffaqiyatli bo‘ldi, lekin faqat bitta kuchli rahbar ishtirokida ishladi. Rahbar ketgach loyiha to‘xtadi. Bu nimani ko‘rsatadi?',
      options: [
        'Natija tizimga emas, shaxsga haddan tashqari bog‘langan va institutsionallashtirish zarur',
        'Loyiha aslida strategik emas edi',
        'Kuchli rahbar bo‘lsa barcha tizimlar avtomatik ishlaydi',
        'Loyihani kengaytirishning hojati yo‘q',
      ],
      answer: 0,
      explanation:
        'Barqaror strategik natija shaxsga emas, tizim, jarayon va kompetensiyalarga tayanishi kerak.',
    },

    {
      id: 'm1t2h13',
      text: 'Strategik reja uchun 4 ta ssenariy ishlab chiqildi. Rahbar faqat eng ijobiy ssenariyga tayyorlandi. Asosiy strategik kamchilik nimada?',
      options: [
        'Noqulay ssenariylardagi risk va javob choralariga tayyorgarlik yetishmaydi',
        'Ko‘p ssenariy ishlab chiqishning o‘zi xato',
        'Ijobiy ssenariy har doim eng real bo‘ladi',
        'Strategik rejalashtirishda risklar kerak emas',
      ],
      answer: 0,
      explanation:
        'Ssenariy yondashuvi turli ehtimoliy holatlarga tayyor turishni ko‘zlaydi.',
    },

    {
      id: 'm1t2h14',
      text: 'Rahbar barcha strategik qarorlarni o‘zi qabul qilmoqda. Qarorlar tez, ammo ijrochilarning tashabbusi pasaymoqda. Eng asosiy strategik xavf qaysi?',
      options: [
        'Boshqaruv markazlashuvi jamoaning salohiyati va strategiyani qabul qilishini susaytirishi mumkin',
        'Tez qarorlar har doim strategik jihatdan noto‘g‘ri',
        'Rahbar barcha qarorlarni o‘zi qabul qilishi strategiyani avtomatik kuchaytiradi',
        'Jamoaning tashabbusi strategik boshqaruvga aloqador emas',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda tezlik bilan birga vakolat, ishtirok va jamoa salohiyati ham muhim.',
    },

    {
      id: 'm1t2h15',
      text: 'Strategik maqsadga erishishda “ko‘proq ish qilish” va “to‘g‘ri ish qilish” o‘rtasida farq paydo bo‘ldi. Qaysi savol eng muhim?',
      options: [
        'Bajarilayotgan ishlarning qaysi biri kutilayotgan strategik natijaga eng katta ta’sir qilmoqda?',
        'Qaysi xodim ko‘proq topshiriq bajarmoqda?',
        'Qaysi bo‘lim ko‘proq hisobot yozmoqda?',
        'Qaysi vazifa eng oson bajarilmoqda?',
      ],
      answer: 0,
      explanation:
        'Strategik fikrlash faoliyat hajmidan ko‘ra natijaga ta’sirni ustun qo‘yadi.',
    },

    {
      id: 'm1t2h16',
      text: 'Maktabda ota-onalar yangi strategik loyiha bo‘yicha ikki guruhga bo‘lindi. Bir guruh natijani qo‘llaydi, ikkinchisi xavf ko‘radi. Rahbarning eng kuchli strategik yondashuvi qaysi?',
      options: [
        'Manfaatlar, xavflar va dalillarni tahlil qilib, qarorni shaffof mezonlar asosida tushuntirish',
        'Ko‘pchilik fikrini avtomatik ravishda yagona mezon qilish',
        'Qarshilik bildirgan guruhni jarayondan chiqarish',
        'Loyihani izohsiz davom ettirish',
      ],
      answer: 0,
      explanation:
        'Manfaatdor tomonlar bilan ishlashda dalil, manfaat va risklarni birgalikda tahlil qilish zarur.',
    },

    {
      id: 'm1t2h17',
      text: '1. SWOT; 2. PEST; 3. KPI; 4. PDCA. Qaysi moslashtirish to‘liq to‘g‘ri?',
      options: [
        '1-ichki/tashqi holat; 2-tashqi muhit; 3-natija ko‘rsatkichi; 4-takomillashtirish sikli',
        '1-tashqi muhit; 2-KPI; 3-ichki tahlil; 4-moliyaviy audit',
        '1-KPI; 2-SWOT; 3-PDCA; 4-PEST',
        '1-PDCA; 2-moliyaviy tahlil; 3-PEST; 4-SWOT',
      ],
      answer: 0,
      explanation:
        'To‘rtta boshqaruv vositasining vazifalari to‘g‘ri moslashtirilgan.',
    },

    {
      id: 'm1t2h18',
      text: 'Strategik maqsadlar bo‘yicha monitoring “yashil” holatni ko‘rsatmoqda, ammo foydalanuvchilar noroziligi ortmoqda. Rahbar uchun eng mantiqiy keyingi qadam qaysi?',
      options: [
        'Monitoring indikatorlari strategik qiymatni to‘liq aks ettiryaptimi, tekshirish',
        'Norozilikni strategik jihatdan ahamiyatsiz deb hisoblash',
        '“Yashil” holat sabab barcha monitoringni to‘xtatish',
        'Faqat indikatorlarni yanada ko‘paytirish',
      ],
      answer: 0,
      explanation:
        'Indikatorlar real natijani aks ettirmayotgan bo‘lsa, monitoring tizimining o‘zi qayta ko‘rib chiqiladi.',
    },

    {
      id: 'm1t2h19',
      text: 'Strategik loyiha bo‘yicha dastlabki natija yaxshi, ammo xarajat kutilganidan 40% yuqori. Qaysi savol birinchi navbatda berilishi kerak?',
      options: [
        'Qo‘shimcha xarajat strategik natijaning qiymati bilan oqlanadimi?',
        'Xarajatni darhol ikki baravar oshirish kerakmi?',
        'Loyihani natijasidan qat’i nazar to‘xtatish kerakmi?',
        'Xarajatlar haqida hisobot yozilmasa bo‘ladimi?',
      ],
      answer: 0,
      explanation:
        'Strategik resurs qarorida xarajat va kutilayotgan qiymat o‘rtasidagi nisbat baholanadi.',
    },

    {
      id: 'm1t2h20',
      text: 'Bir strategik tashabbus boshqa uchta tashabbusga resurs bermay qo‘yish hisobiga tez rivojlanmoqda. Bu holat nimani talab qiladi?',
      options: [
        'Tashabbuslar portfelini umumiy strategik ustuvorlik nuqtayi nazaridan qayta ko‘rib chiqishni',
        'Eng tez rivojlanayotgan tashabbusga barcha resursni berishni',
        'Qolgan tashabbuslarni avtomatik bekor qilishni',
        'Resurs cheklovini e’tiborsiz qoldirishni',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda alohida loyiha emas, umumiy portfel muvozanati ham baholanadi.',
    },

    {
      id: 'm1t2h21',
      text: 'Maktab strategiyasida “o‘qituvchilar malakasini oshirish” vazifasi bor. Treninglar soni oshdi, ammo dars sifati o‘zgarmadi. Qaysi sabab ehtimoliyroq?',
      options: [
        'Trening faoliyati bilan amaliyotdagi o‘zgarish o‘rtasida uzilish mavjud',
        'Treninglar soni hali yetarli emasligi aniq',
        'O‘qituvchilar treningga muhtoj emas',
        'Dars sifatini o‘lchashning umuman imkoni yo‘q',
      ],
      answer: 0,
      explanation:
        'Kasbiy rivojlanishning haqiqiy qiymati o‘rganilgan bilimning amaliyotga ko‘chishida ko‘rinadi.',
    },

    {
      id: 'm1t2h22',
      text: 'Strategik reja yil boshida tuzildi. Yil o‘rtasida tashqi sharoit keskin o‘zgardi. Rahbar rejani o‘zgartirmadi, chunki “strategiya o‘zgarmas bo‘lishi kerak”. Qaysi tamoyil buzilmoqda?',
      options: [
        'Strategiyaning moslashuvchanligi',
        'Maqsadlarning aniqligi',
        'Hisobot yuritish',
        'Vakolatlarni delegatsiya qilish',
      ],
      answer: 0,
      explanation:
        'Strategik yo‘nalish barqaror bo‘lishi mumkin, ammo sharoit o‘zgarganda vosita va rejalar moslashtiriladi.',
    },

    {
      id: 'm1t2h23',
      text: 'Strategik rejaning barcha ko‘rsatkichlari yaxshi, lekin xodimlarning charchashi keskin oshdi. Qaysi xavf e’tibordan chetda qolgan bo‘lishi mumkin?',
      options: [
        'Natijaga erishishning barqarorligi va inson resurslariga ta’siri',
        'KPIlar yetarlicha ko‘p emasligi',
        'Strategik maqsadlar juda kamligi',
        'Tashqi muhitning umuman ahamiyatsizligi',
      ],
      answer: 0,
      explanation:
        'Qisqa muddatli yuqori natija inson resurslariga zarar yetkazsa, uning barqarorligi xavf ostida qoladi.',
    },

    {
      id: 'm1t2h24',
      text: 'Strategik qaror uchun bir manbada 80%, ikkinchisida 62% natija ko‘rsatilgan. Rahbar qaysi ko‘rsatkichni olishni tanlashdan oldin nimani tekshirishi kerak?',
      options: [
        'Ta’rif, metodika, davr va ma’lumot manbasining farqini',
        'Faqat yuqoriroq ko‘rsatkichni',
        'Faqat yangi ko‘rsatkichni',
        'Rahbarga qulay bo‘lgan raqamni',
      ],
      answer: 0,
      explanation:
        'Turli raqamlar turli metodika yoki davr sababli paydo bo‘lishi mumkin.',
    },

    {
      id: 'm1t2h25',
      text: 'Strategik maqsadning natijasi 75%, lekin 25% ga yetmagan qism aynan eng muhim o‘quvchilar guruhiga tegishli. Qanday baholash mantiqan to‘g‘riroq?',
      options: [
        'Umumiy 75% bilan cheklanmay, strategik jihatdan muhim guruhning natijasini alohida tahlil qilish',
        '75% yetarli deb, qolgan 25% ni e’tiborsiz qoldirish',
        '25% ni statistikadan chiqarish',
        'Faqat umumiy o‘rtachani oshirishga harakat qilish',
      ],
      answer: 0,
      explanation:
        'Strategik baholashda o‘rtacha natijadan tashqari muhim guruhlar kesimidagi natija ham muhim.',
    },

    {
      id: 'm1t2h26',
      text: 'Rahbar strategik muammoning 6 ta sababini aniqladi. Ulardan ikkitasi qolgan to‘rttasiga sabab bo‘layotgani aniqlandi. Qaysi yondashuv mantiqan kuchli?',
      options: [
        'Tizimdagi yuqori darajadagi sabablarni bartaraf etishga ustuvor e’tibor berish',
        'Barcha sabablarni bir xil darajada hal qilish',
        'Faqat eng oson sababni tanlash',
        'Oqibatlarni qayta-qayta nazorat qilish',
      ],
      answer: 0,
      explanation:
        'Ildiz sabablar boshqa muammolarni ham keltirib chiqarsa, ularga ta’sir qilish tizimliroq natija beradi.',
    },

    {
      id: 'm1t2h27',
      text: 'Strategik reja bo‘yicha “quick win” amalga oshirildi va natija tez ko‘rindi. Rahbar uni strategiyaning asosiy muvaffaqiyati deb e’lon qildi. Qaysi xavf mavjud?',
      options: [
        'Qisqa muddatli natija uzoq muddatli strategik ta’sir bilan adashtirilishi mumkin',
        'Quick win hech qachon strategik bo‘la olmaydi',
        'Tez natija doimo noto‘g‘ri natija',
        'Quick win monitoringga ehtiyojni bekor qiladi',
      ],
      answer: 0,
      explanation:
        'Tez natija foydali bo‘lishi mumkin, ammo uning barqaror strategik ta’siri alohida baholanadi.',
    },

    {
      id: 'm1t2h28',
      text: 'Maktabda bir muammo bo‘yicha uchta bo‘lim uch xil sababni ko‘rsatmoqda. Rahbar darhol bittasini tanlashi kerakmi?',
      options: [
        'Yo‘q; dalillarni taqqoslab, sabablar o‘rtasidagi bog‘liqlikni aniqlashi kerak',
        'Ha; eng yuqori lavozimli xodim fikrini tanlashi kerak',
        'Ha; eng ko‘p takrorlangan fikr avtomatik to‘g‘ri',
        'Ha; eng tez hal qilinadigan sababni tanlash yetarli',
      ],
      answer: 0,
      explanation:
        'Qarama-qarshi tashxislar bo‘lsa, dalillar va sabab-oqibat aloqasi tekshiriladi.',
    },

    {
      id: 'm1t2h29',
      text: '1. Baseline; 2. Target; 3. KPI; 4. Monitoring. Qaysi ketma-ketlik strategik boshqaruv mantig‘iga eng yaqin?',
      options: [
        'Boshlang‘ich holat → kutilgan natija → o‘lchov → muntazam kuzatish',
        'Kuzatish → boshlang‘ich holat → maqsad → o‘lchov',
        'Maqsad → kuzatish → baseline → KPI',
        'KPI → target → monitoring → baseline',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda avval boshlang‘ich holat aniqlanib, target va indikator belgilanadi, so‘ng monitoring qilinadi.',
    },

    {
      id: 'm1t2h30',
      text: 'Strategik boshqaruvda eng murakkab vaziyatlardan biri: barcha variantlarning foydasi ham, zarari ham bor. Bunday vaziyatda professional qaror qanday shakllanadi?',
      options: [
        'Variantlarning ta’siri, risklari, resurs talabi va uzoq muddatli oqibatlarini solishtirish orqali',
        'Faqat eng tez natija beradigan variantni tanlash orqali',
        'Rahbarning shaxsiy xohishiga asoslanish orqali',
        'Eng kam qarshilik tug‘diradigan variantni avtomatik tanlash orqali',
      ],
      answer: 0,
      explanation:
        'Murakkab strategik qarorlarda trade-offlar ochiq baholanib, uzoq muddatli oqibatlar hisobga olinadi.',
    },
  ],

  /*
   * =======================================================
   * KEYS — 10 TA
   * =======================================================
   */

  case: [
    {
      id: 'm1t2c01',
      text: 'Maktabda matematika fanidan o‘quvchilar natijasi ikki yil davomida pasaymoqda. Direktor darhol o‘qituvchilarga tanbeh berish o‘rniga nima qilishi kerak?',
      options: [
        'Ma’lumotlarni tahlil qilib, muammoning sabablarini aniqlashi',
        'Barcha o‘qituvchilarni almashtirishi',
        'Faqat qo‘shimcha nazorat ishlarini ko‘paytirishi',
        'Muammoni e’tiborsiz qoldirishi',
      ],
      answer: 0,
      explanation:
        'Strategik yondashuv muammoning ildiz sabablarini ma’lumotlar asosida aniqlashdan boshlanadi.',
    },

    {
      id: 'm1t2c02',
      text: 'Maktab strategiyasida “ta’lim sifatini oshirish” maqsadi belgilangan, ammo aniq ko‘rsatkich yo‘q. Rahbar qanday chorani ko‘rishi kerak?',
      options: [
        'Maqsad uchun aniq va o‘lchanadigan indikatorlarni belgilashi',
        'Maqsadni bekor qilishi',
        'Faqat ko‘proq yig‘ilish o‘tkazishi',
        'Faqat yangi buyruq chiqarishi',
      ],
      answer: 0,
      explanation:
        'Strategik maqsadning bajarilishini baholash uchun o‘lchanadigan indikatorlar zarur.',
    },

    {
      id: 'm1t2c03',
      text: 'Maktabda kuchli ingliz tili o‘qituvchilari mavjud, lekin ularning tajribasi boshqa pedagoglarga uzatilmayapti. Strategik yechim qaysi?',
      options: [
        'Mentorlik va tajriba almashish tizimini yo‘lga qo‘yish',
        'Kuchli o‘qituvchilarni faqat o‘z sinflarida qoldirish',
        'Ularni qo‘shimcha hisobotga jalb qilish',
        'Tajriba almashishni to‘xtatish',
      ],
      answer: 0,
      explanation:
        'Kuchli ichki resursni mentorlik orqali butun jamoa rivojiga yo‘naltirish strategik yechimdir.',
    },

    {
      id: 'm1t2c04',
      text: 'Maktabga yangi raqamli platforma joriy qilindi, ammo pedagoglar undan foydalanmayapti. Rahbar qanday yo‘l tutishi maqsadga muvofiq?',
      options: [
        'Pedagoglarning ehtiyojini aniqlab, amaliy trening va qo‘llab-quvvatlash tashkil etishi',
        'Darhol barcha pedagoglarni jazolashi',
        'Platformani bekor qilishi',
        'Faqat foydalanish bo‘yicha buyruq chiqarishi',
      ],
      answer: 0,
      explanation:
        'O‘zgarishlarni boshqarishda kompetensiya va qo‘llab-quvvatlash muhim.',
    },

    {
      id: 'm1t2c05',
      text: 'Strategik rejaning birinchi choragida ko‘rsatkichlar rejalashtirilganidan past bo‘ldi. Rahbar qanday qaror qabul qilishi kerak?',
      options: [
        'Sabablarni tahlil qilib, tuzatish choralarini ishlab chiqishi',
        'Strategiyani darhol bekor qilishi',
        'Faqat mas’ullarni ayblashi',
        'Natijalarni yashirishi',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruv monitoring natijalaridan foydalanib, zarur tuzatishlarni kiritishni nazarda tutadi.',
    },

    {
      id: 'm1t2c06',
      text: 'Maktabda uchta katta loyiha bir vaqtning o‘zida boshlanmoqda, ammo resurs yetarli emas. Rahbar nima qilishi kerak?',
      options: [
        'Loyihalarni strategik ustuvorlik va ta’siriga ko‘ra saralashi',
        'Uchalasini ham bir xil darajada moliyalashtirishi',
        'Barcha loyihalarni bekor qilishi',
        'Faqat eng oson loyihani tanlashi',
      ],
      answer: 0,
      explanation:
        'Cheklangan resursda strategik ustuvorlik va kutilayotgan ta’sir asosida tanlov qilish kerak.',
    },

    {
      id: 'm1t2c07',
      text: 'Ota-onalar maktabdagi yangi strategik loyiha haqida turlicha fikr bildirmoqda. Rahbarning eng maqbul yondashuvi qaysi?',
      options: [
        'Manfaatdor tomonlarning fikrlarini o‘rganib, asoslangan kommunikatsiya va yechim ishlab chiqish',
        'Barcha fikrlarni rad etish',
        'Faqat bitta ota-onaning fikrini olish',
        'Loyihani yashirin amalga oshirish',
      ],
      answer: 0,
      explanation:
        'Manfaatdor tomonlarni jalb qilish strategik o‘zgarishlarning qabul qilinishini yaxshilaydi.',
    },

    {
      id: 'm1t2c08',
      text: 'Maktabning strategik rejasida 20 ta vazifa bor, ammo eng muhim 3 ta natija aniq ajratilmagan. Bu holatda nima qilish kerak?',
      options: [
        'Asosiy strategik ustuvorliklarni ajratib, vazifalarni ularga bog‘lash',
        'Yana vazifalar qo‘shish',
        'Barcha vazifalarni teng deb qabul qilish',
        'Strategik rejani bekor qilish',
      ],
      answer: 0,
      explanation:
        'Strategiya ustuvor natijalarni aniq belgilashi va vazifalarni shu natijalarga bog‘lashi kerak.',
    },

    {
      id: 'm1t2c09',
      text: 'Strategik loyiha yaxshi natija bermadi. Jamoa a’zolari xatoni yashirishga urinmoqda. Rahbar qanday yondashishi kerak?',
      options: [
        'Sabablarni ochiq tahlil qilib, tajribadan o‘rganish va tuzatish choralarini belgilash',
        'Aybdorni darhol jazolash',
        'Natijalarni yashirish',
        'Loyihani hujjatlardan chiqarib tashlash',
      ],
      answer: 0,
      explanation:
        'O‘rganuvchi tashkilot xatolardan saboq olib, keyingi qarorlarni yaxshilaydi.',
    },

    {
      id: 'm1t2c10',
      text: 'Maktabning strategik maqsadi bajarilgan, ammo natija faqat bir yil saqlanib qoldi. Rahbar keyingi strategiyada nimaga e’tibor berishi kerak?',
      options: [
        'Natijani barqarorlashtirish va uzoq muddat saqlash mexanizmlariga',
        'Faqat yangi maqsad qo‘yishga',
        'Barcha eski ishlarni bekor qilishga',
        'Faqat hisobotlar sonini oshirishga',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda bir martalik natijadan tashqari uning barqarorligini ta’minlash ham muhim.',
    },
  ],
}
