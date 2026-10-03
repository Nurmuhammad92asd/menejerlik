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
        'Strategik menejment tashkilotning uzoq muddatli maqsadlarini belgilash, ularga erishish strategiyasini ishlab chiqish va amalga oshirishni anglatadi.',
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
        'Yaxshi strategik maqsad aniq, o‘lchanadigan va tashkilot rivojlanishiga yo‘naltirilgan bo‘ladi.',
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
        'Missiya tashkilot nima uchun mavjudligini va kimga qanday qiymat yaratishini ifodalaydi.',
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
        'Vizyon tashkilot kelajakda qanday holatga erishishni ko‘zlashini ifodalaydi.',
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
        'Strategik maqsad jamoaning asosiy rivojlanish yo‘nalishini belgilaydi.',
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
        'SWOT kuchli va zaif tomonlar, imkoniyatlar va tahdidlarni aniqlashga yordam beradi.',
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
      explanation:
        'Strengths — tashkilotning kuchli tomonlari.',
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
      explanation:
        'Weaknesses — tashkilotning zaif tomonlari.',
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
      explanation:
        'Opportunities — mavjud imkoniyatlar.',
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
      explanation:
        'Threats — tashqi tahdidlar.',
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
        'Strategik rejalashtirish odatda o‘rta va uzoq muddatli rivojlanishga qaratiladi.',
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
        'Strategiyani amalga oshirish uchun resurs, mas’ul shaxslar va monitoring tizimi zarur.',
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
        'Monitoring belgilangan maqsadlar sari harakat va natijalarni muntazam kuzatishdir.',
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
        'KPI — Key Performance Indicator, ya’ni asosiy samaradorlik ko‘rsatkichi.',
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
        'Resurslarga moliya, inson, vaqt, texnologiya va boshqa imkoniyatlar kiradi.',
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
        'Strategik qarorlar tashkilotning kelajakdagi rivojlanishiga sezilarli ta’sir ko‘rsatadi.',
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
        'Strategik menejment aniq maqsadlarga yo‘naltirilgan boshqaruvni talab qiladi.',
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
        'Strategik reja rahbariyat, xodimlar, o‘quvchilar, ota-onalar va boshqa manfaatdor tomonlar faoliyatini yo‘naltirishi mumkin.',
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
        'Maktab strategiyasining asosiy mazmuni ta’lim sifati va o‘quvchi rivojiga qaratilishi kerak.',
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
        'Tahlil mavjud vaziyatni tushunish va asoslangan strategik qarorlar qabul qilishga yordam beradi.',
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
        'Ustuvor yo‘nalish tashkilot uchun eng muhim natijaga ta’sir qiladigan yo‘nalishdir.',
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
        'Strategik reja kelajak yo‘nalishini, kundalik reja esa joriy vazifalarni belgilaydi.',
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
        'Jamoa ishtiroki strategiyani tushunish, qabul qilish va amalga oshirishni kuchaytiradi.',
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
        'Risk — maqsadga erishishga ta’sir qilishi mumkin bo‘lgan noaniqlik yoki xavf.',
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
        'Tashqi va ichki sharoitlar o‘zgarganda strategik rejani moslashtirish zarur bo‘lishi mumkin.',
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
        'Strategik menejer tashkilotning rivojlanish yo‘nalishi va natijalarini boshqarishga e’tibor qaratadi.',
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
        'Strategik menejmentning asosiy maqsadi tashkilotning barqaror rivojlanishi va natijadorligini ta’minlashdir.',
    },
  ],

  /*
   * =======================================================
   * O‘RTA — 30 TA
   * =======================================================
   */

  medium: [
    {
      id: 'm1t2m01',
      text: 'Maktab strategiyasini ishlab chiqishda birinchi navbatda nima tahlil qilinadi?',
      options: [
        'Maktabning ichki va tashqi muhiti',
        'Faqat direktorning fikri',
        'Faqat o‘qituvchilar soni',
        'Faqat bino holati',
      ],
      answer: 0,
      explanation:
        'Strategiya mavjud vaziyatni to‘liq tushunish uchun ichki va tashqi muhit tahlilidan boshlanadi.',
    },

    {
      id: 'm1t2m02',
      text: 'PEST tahlilining asosiy vazifasi nima?',
      options: [
        'Tashqi muhitdagi siyosiy, iqtisodiy, ijtimoiy va texnologik omillarni tahlil qilish',
        'Faqat xodimlarni baholash',
        'Faqat moliyaviy hisobotni tekshirish',
        'Faqat dars jadvalini tuzish',
      ],
      answer: 0,
      explanation:
        'PEST tashqi muhitning siyosiy, iqtisodiy, ijtimoiy va texnologik omillarini o‘rganadi.',
    },

    {
      id: 'm1t2m03',
      text: 'SWOT tahlilida kuchli tomonlar qaysi turdagi omil?',
      options: [
        'Ichki omil',
        'Tashqi omil',
        'Tasodifiy omil',
        'Faqat moliyaviy omil',
      ],
      answer: 0,
      explanation:
        'Kuchli va zaif tomonlar tashkilotning ichki imkoniyatlariga tegishli.',
    },

    {
      id: 'm1t2m04',
      text: 'SWOT tahlilida imkoniyatlar qaysi turdagi omil?',
      options: [
        'Tashqi omil',
        'Ichki omil',
        'Faqat shaxsiy omil',
        'Faqat moliyaviy omil',
      ],
      answer: 0,
      explanation:
        'Imkoniyatlar va tahdidlar asosan tashqi muhit omillarini ifodalaydi.',
    },

    {
      id: 'm1t2m05',
      text: 'Strategik maqsadni SMART tamoyili asosida belgilashning afzalligi nima?',
      options: [
        'Maqsadni aniq va o‘lchanadigan qilish',
        'Maqsadni noaniq qoldirish',
        'Faqat vaqtni qisqartirish',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'SMART maqsadning aniq, o‘lchanadigan, erishiladigan, relevant va muddatli bo‘lishiga yordam beradi.',
    },

    {
      id: 'm1t2m06',
      text: 'Strategik reja bilan operativ reja qanday bog‘langan?',
      options: [
        'Operativ vazifalar strategik maqsadlarga xizmat qiladi',
        'Ular bir-biriga bog‘liq emas',
        'Faqat strategik reja bajariladi',
        'Operativ reja strategiyani bekor qiladi',
      ],
      answer: 0,
      explanation:
        'Kundalik va qisqa muddatli ishlar umumiy strategik maqsadlarga yo‘naltirilishi kerak.',
    },

    {
      id: 'm1t2m07',
      text: 'Strategik maqsadga KPI belgilashdan asosiy maqsad nima?',
      options: [
        'Natijani o‘lchash imkonini yaratish',
        'Xodimlarni jazolash',
        'Hujjatlar sonini oshirish',
        'Majlislarni ko‘paytirish',
      ],
      answer: 0,
      explanation:
        'KPI strategik maqsadning qay darajada bajarilganini obyektivroq baholashga yordam beradi.',
    },

    {
      id: 'm1t2m08',
      text: 'Strategik rejaning ijrosini monitoring qilishda qaysi usul samaraliroq?',
      options: [
        'Reja va amaldagi natijalarni muntazam taqqoslash',
        'Faqat yil oxirida tekshirish',
        'Faqat og‘zaki ma’lumot olish',
        'Faqat direktor fikriga tayanish',
      ],
      answer: 0,
      explanation:
        'Reja va real natijalarni muntazam taqqoslash muammolarni erta aniqlash imkonini beradi.',
    },

    {
      id: 'm1t2m09',
      text: 'Strategik rejaning amalga oshirilishida mas’ul shaxslarni belgilash nima uchun zarur?',
      options: [
        'Javobgarlik va ijro intizomini aniqlash uchun',
        'Faqat nazoratni kuchaytirish uchun',
        'Xodimlarni kamaytirish uchun',
        'Majlislarni ko‘paytirish uchun',
      ],
      answer: 0,
      explanation:
        'Mas’uliyatning aniq taqsimlanishi vazifalar ijrosini boshqarishni osonlashtiradi.',
    },

    {
      id: 'm1t2m10',
      text: 'Strategik boshqaruvda manfaatdor tomonlar kimlar?',
      options: [
        'Tashkilot faoliyatidan manfaatdor yoki unga ta’sir qiluvchi tomonlar',
        'Faqat direktor',
        'Faqat o‘qituvchilar',
        'Faqat ota-onalar',
      ],
      answer: 0,
      explanation:
        'Maktabda manfaatdor tomonlarga o‘quvchilar, ota-onalar, pedagoglar, rahbariyat va hamkorlar kirishi mumkin.',
    },

    {
      id: 'm1t2m11',
      text: 'Strategik rejalashtirishda ma’lumotlarga asoslanishning foydasi nima?',
      options: [
        'Qarorlarning dalillarga asoslanishini kuchaytiradi',
        'Qarorni sekinlashtirish uchun',
        'Faqat hisobotni ko‘paytirish uchun',
        'Faqat statistika yig‘ish uchun',
      ],
      answer: 0,
      explanation:
        'Ishonchli ma’lumotlar muammoni to‘g‘ri aniqlash va asoslangan qaror qabul qilishga yordam beradi.',
    },

    {
      id: 'm1t2m12',
      text: 'Maktab strategiyasida ta’lim sifati pasaygan bo‘lsa, rahbar birinchi navbatda nima qilishi kerak?',
      options: [
        'Muammoning sabablarini ma’lumotlar asosida aniqlashi',
        'Darhol xodimlarni jazolashi',
        'Faqat yangi buyruq chiqarishi',
        'Muammoni e’tiborsiz qoldirishi',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda muammoni hal qilishdan oldin uning sabablarini aniqlash muhim.',
    },

    {
      id: 'm1t2m13',
      text: 'Strategik boshqaruvda benchmarking nima?',
      options: [
        'Ilg‘or tajribalarni o‘rganish va taqqoslash',
        'Faqat nazorat',
        'Faqat moliyaviy hisob',
        'Faqat xodimlarni almashtirish',
      ],
      answer: 0,
      explanation:
        'Benchmarking samarali amaliyotlarni o‘rganish va o‘z faoliyati bilan taqqoslashga xizmat qiladi.',
    },

    {
      id: 'm1t2m14',
      text: 'Strategik ustuvorliklarni tanlashda qaysi mezon muhim?',
      options: [
        'Maqsadga ta’siri va resurs imkoniyati',
        'Faqat topshiriqning baland ovozda aytilishi',
        'Faqat hujjat hajmi',
        'Faqat xodimning xohishi',
      ],
      answer: 0,
      explanation:
        'Ustuvorlik tanlashda kutilayotgan ta’sir va mavjud resurslar hisobga olinadi.',
    },

    {
      id: 'm1t2m15',
      text: 'Strategik reja uchun risklar reyestri nima beradi?',
      options: [
        'Asosiy xavflarni aniqlash va boshqarishga yordam beradi',
        'Faqat hisobotni ko‘paytiradi',
        'Xodimlarni baholaydi',
        'O‘quvchilarni saralaydi',
      ],
      answer: 0,
      explanation:
        'Risklar reyestri muhim xavflarni qayd etish va ularga qarshi choralarni rejalashtirishga yordam beradi.',
    },

    {
      id: 'm1t2m16',
      text: 'Strategik maqsad va vazifa o‘rtasidagi farq nimada?',
      options: [
        'Maqsad kutilayotgan natijani, vazifa esa bajariladigan ishni ifodalaydi',
        'Ular mutlaqo bir xil',
        'Vazifa doim uzoq muddatli bo‘ladi',
        'Maqsad faqat kundalik ishni bildiradi',
      ],
      answer: 0,
      explanation:
        'Maqsad natijani bildiradi, vazifa esa shu natijaga erishish uchun bajariladigan harakatdir.',
    },

    {
      id: 'm1t2m17',
      text: 'Strategik rejaning indikatorlari qanday bo‘lishi maqsadga muvofiq?',
      options: [
        'O‘lchanadigan va natijani aks ettiradigan',
        'Noaniq',
        'Faqat og‘zaki',
        'Faqat umumiy',
      ],
      answer: 0,
      explanation:
        'Indikatorlar imkon qadar o‘lchanadigan va aniq natijani ko‘rsatadigan bo‘lishi kerak.',
    },

    {
      id: 'm1t2m18',
      text: 'Strategik rejalashtirishda resurs cheklangan bo‘lsa nima qilish kerak?',
      options: [
        'Ustuvor vazifalarni tanlab, resurslarni yo‘naltirish',
        'Barcha vazifani bir vaqtda bajarish',
        'Strategiyani bekor qilish',
        'Nazoratni to‘xtatish',
      ],
      answer: 0,
      explanation:
        'Cheklangan resurs sharoitida eng katta ta’sir beradigan ustuvor yo‘nalishlarga e’tibor beriladi.',
    },

    {
      id: 'm1t2m19',
      text: 'Strategik menejmentda kommunikatsiya nima uchun muhim?',
      options: [
        'Strategik maqsad va vazifalarni jamoaga tushuntirish uchun',
        'Faqat reklama uchun',
        'Faqat hisobot uchun',
        'Faqat majlis uchun',
      ],
      answer: 0,
      explanation:
        'Strategiyaning muvaffaqiyatli amalga oshishi uchun jamoa maqsad va vazifalarni tushunishi kerak.',
    },

    {
      id: 'm1t2m20',
      text: 'Strategik o‘zgarishlarni boshqarishda xodimlarning qarshiligini kamaytirishning muhim usuli qaysi?',
      options: [
        'O‘zgarish sabablarini tushuntirish va xodimlarni jalb qilish',
        'Faqat buyruq berish',
        'Ma’lumot bermaslik',
        'Xodimlarni chetlashtirish',
      ],
      answer: 0,
      explanation:
        'O‘zgarishlarning sababi va kutilayotgan foydasini tushuntirish ishtirokni oshiradi.',
    },

    {
      id: 'm1t2m21',
      text: 'Strategik reja natijasi kutilganidan past bo‘lsa, eng to‘g‘ri yondashuv qaysi?',
      options: [
        'Sabablarni tahlil qilib, zarur tuzatishlarni kiritish',
        'Faqat xodimlarni ayblash',
        'Strategiyani darhol bekor qilish',
        'Natijani yashirish',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda monitoring natijasiga ko‘ra tuzatish choralarini ishlab chiqish muhim.',
    },

    {
      id: 'm1t2m22',
      text: 'Strategik reja qaysi holatda moslashtirilishi mumkin?',
      options: [
        'Tashqi yoki ichki sharoitlar sezilarli o‘zgarganda',
        'Hech qachon',
        'Faqat direktor almashganda',
        'Faqat yil oxirida',
      ],
      answer: 0,
      explanation:
        'Strategiya dinamik muhitga moslashishi kerak.',
    },

    {
      id: 'm1t2m23',
      text: 'Strategik menejmentda innovatsiyaning o‘rni qanday?',
      options: [
        'Rivojlanish va yangi samarali yechimlarni yaratishga xizmat qiladi',
        'Strategiyani keraksiz qiladi',
        'Faqat xarajatni oshiradi',
        'Faqat reklama uchun kerak',
      ],
      answer: 0,
      explanation:
        'Innovatsiya yangi usullar va yechimlar orqali tashkilot rivojiga yordam beradi.',
    },

    {
      id: 'm1t2m24',
      text: 'Maktabning strategik rivojlanishida ota-onalar bilan hamkorlik nima beradi?',
      options: [
        'Ta’lim jarayoniga qo‘shimcha qo‘llab-quvvatlash va fikrlarni olish imkonini beradi',
        'Strategik rejalashtirishni to‘xtatadi',
        'Faqat moliyaviy yordam beradi',
        'Faqat tadbir o‘tkazish uchun kerak',
      ],
      answer: 0,
      explanation:
        'Ota-onalar bilan hamkorlik maktab rivoji va ta’lim sifati uchun muhim ijtimoiy resursdir.',
    },

    {
      id: 'm1t2m25',
      text: 'Strategik boshqaruvda “strategik tafovut” nimani anglatishi mumkin?',
      options: [
        'Mavjud holat bilan istalgan kelajak holati o‘rtasidagi farq',
        'Xodimlar o‘rtasidagi shaxsiy farq',
        'Darslar orasidagi tanaffus',
        'Byudjetdagi oddiy xarajat',
      ],
      answer: 0,
      explanation:
        'Strategik tafovut tashkilotning hozirgi holati va erishmoqchi bo‘lgan holati o‘rtasidagi farqni anglatadi.',
    },

    {
      id: 'm1t2m26',
      text: 'Strategik rejalashtirishda “muammo daraxti” usulidan nima uchun foydalaniladi?',
      options: [
        'Muammo sabablari va oqibatlarini tizimli ko‘rish uchun',
        'Faqat hujjat tuzish uchun',
        'Faqat xodimlarni baholash uchun',
        'Faqat moliyaviy hisob uchun',
      ],
      answer: 0,
      explanation:
        'Muammo daraxti asosiy muammo, sabablar va oqibatlarni tizimli tasvirlashga yordam beradi.',
    },

    {
      id: 'm1t2m27',
      text: 'Strategik boshqaruvda “yo‘l xaritasi” nima?',
      options: [
        'Maqsadga erishish bosqichlari va muddatlarini ko‘rsatuvchi reja',
        'Faqat geografik xarita',
        'Faqat dars jadvali',
        'Faqat xodimlar ro‘yxati',
      ],
      answer: 0,
      explanation:
        'Yo‘l xaritasi strategik maqsadga olib boruvchi asosiy bosqichlarni ko‘rsatadi.',
    },

    {
      id: 'm1t2m28',
      text: 'Strategik boshqaruvda delegatsiyaning foydasi nima?',
      options: [
        'Vazifalarni tegishli mas’ullarga taqsimlash va jamoa salohiyatidan foydalanish',
        'Rahbarning barcha ishni o‘zi bajarishi',
        'Nazoratni bekor qilish',
        'Mas’uliyatni yashirish',
      ],
      answer: 0,
      explanation:
        'Delegatsiya jamoa imkoniyatlaridan foydalanish va mas’uliyatni oqilona taqsimlashga yordam beradi.',
    },

    {
      id: 'm1t2m29',
      text: 'Strategik boshqaruvda qayta aloqa nima uchun kerak?',
      options: [
        'Natijalar va muammolar haqida ma’lumot olish uchun',
        'Faqat tanqid qilish uchun',
        'Faqat hisobotni ko‘paytirish uchun',
        'Faqat majlis o‘tkazish uchun',
      ],
      answer: 0,
      explanation:
        'Qayta aloqa strategiyaning amaldagi natijalarini tushunish va tuzatishlar kiritishga yordam beradi.',
    },

    {
      id: 'm1t2m30',
      text: 'Strategik boshqaruvning samaradorligi eng avvalo nima bilan baholanadi?',
      options: [
        'Belgilangan natijalarga erishish darajasi bilan',
        'Buyruqlar soni bilan',
        'Majlislar soni bilan',
        'Hujjatlar hajmi bilan',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruv natijadorligi belgilangan maqsadlarga erishish darajasi bilan baholanadi.',
    },
  ],

  /*
   * =======================================================
   * QIYIN — 30 TA
   * =======================================================
   */

  hard: [
    {
      id: 'm1t2h01',
      text: 'Maktabda o‘quvchilarning fanlardan o‘zlashtirish ko‘rsatkichi pasaydi. Strategik yondashuvda eng to‘g‘ri birinchi qadam qaysi?',
      options: [
        'Ma’lumotlarni tahlil qilib, pasayishning asosiy sabablarini aniqlash',
        'Barcha o‘qituvchilarga tanbeh berish',
        'Darhol yangi dars jadvali tuzish',
        'Faqat nazorat ishlarini ko‘paytirish',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda qaror sabablar tahliliga asoslanishi kerak.',
    },

    {
      id: 'm1t2h02',
      text: 'SWOT tahlilida maktabning kuchli pedagogik jamoasi aniqlansa, strategik jihatdan qanday foydalanish mumkin?',
      options: [
        'Kuchli jamoani yangi loyihalar va mentorlik tizimiga jalb qilish',
        'Faqat ularning hisobotlarini ko‘paytirish',
        'Ularni boshqa vazifalardan ozod qilish',
        'Kuchli tomon sifatida faqat hujjatda qayd etish',
      ],
      answer: 0,
      explanation:
        'Strategiya kuchli tomonlarni rivojlanish imkoniyatiga aylantirishi kerak.',
    },

    {
      id: 'm1t2h03',
      text: 'Maktabda raqamli texnologiyalar uchun imkoniyat mavjud, ammo pedagoglarning raqamli kompetensiyasi past. SWOT nuqtayi nazaridan qaysi yondashuv maqsadga muvofiq?',
      options: [
        'Imkoniyatdan foydalanish uchun pedagoglarning raqamli kompetensiyasini rivojlantirish',
        'Texnologiyani umuman joriy qilmaslik',
        'Faqat texnika sotib olish',
        'Faqat o‘qituvchilarni baholash',
      ],
      answer: 0,
      explanation:
        'Strategiya tashqi imkoniyatni ichki zaiflikni rivojlantirish orqali samaraga aylantiradi.',
    },

    {
      id: 'm1t2h04',
      text: 'Strategik maqsad juda ko‘p yo‘nalishlarni qamrab olgan bo‘lsa, qanday xavf paydo bo‘ladi?',
      options: [
        'Resurslarning tarqalib ketishi va ustuvorliklarning yo‘qolishi',
        'Natija avtomatik oshishi',
        'Nazorat osonlashishi',
        'Xodimlar soni ortishi',
      ],
      answer: 0,
      explanation:
        'Haddan tashqari ko‘p ustuvorlik resurslarni bo‘lib yuboradi.',
    },

    {
      id: 'm1t2h05',
      text: 'KPI noto‘g‘ri tanlangan bo‘lsa, qanday oqibat yuz berishi mumkin?',
      options: [
        'Jamoa haqiqiy natija o‘rniga ko‘rsatkichni bajarishga yo‘naltirilishi mumkin',
        'Barcha natijalar avtomatik yaxshilanadi',
        'Strategiya kuchayadi',
        'Risklar yo‘qoladi',
      ],
      answer: 0,
      explanation:
        'Noto‘g‘ri indikator xodimlarning e’tiborini haqiqiy strategik natijadan chalg‘itishi mumkin.',
    },

    {
      id: 'm1t2h06',
      text: 'Strategik reja bajarilmoqda, ammo kutilgan ta’sir yuzaga kelmayapti. Bu holatda rahbar nimani tekshirishi kerak?',
      options: [
        'Vazifalar bilan yakuniy natija o‘rtasidagi sabab-oqibat bog‘liqligini',
        'Faqat bajarilgan ishlar sonini',
        'Faqat xodimlarning davomatini',
        'Faqat hujjatlar sonini',
      ],
      answer: 0,
      explanation:
        'Ko‘p ish bajarilishi hali strategik natija ta’minlanganini anglatmaydi.',
    },

    {
      id: 'm1t2h07',
      text: 'Strategik qaror qabul qilishda “dalillarga asoslangan boshqaruv” nimani anglatadi?',
      options: [
        'Qarorni ishonchli ma’lumot, tahlil va dalillarga tayangan holda qabul qilish',
        'Faqat rahbar tajribasiga tayanish',
        'Faqat xodim fikriga tayanish',
        'Faqat yuqori tashkilot topshirig‘ini kutish',
      ],
      answer: 0,
      explanation:
        'Dalillarga asoslangan boshqaruv qarorlarni ishonchli ma’lumot va tahlil bilan mustahkamlaydi.',
    },

    {
      id: 'm1t2h08',
      text: 'Strategik rejaning bir maqsadi boshqa maqsadga zid bo‘lsa, rahbar nima qilishi kerak?',
      options: [
        'Maqsadlar o‘rtasidagi bog‘liqlikni tahlil qilib, ustuvorliklarni qayta belgilashi',
        'Ikkalasini ham nazoratsiz qoldirishi',
        'Barcha maqsadlarni bekor qilishi',
        'Faqat birinchi yozilgan maqsadni tanlashi',
      ],
      answer: 0,
      explanation:
        'Strategik maqsadlar o‘zaro uyg‘un bo‘lishi va umumiy natijaga xizmat qilishi kerak.',
    },

    {
      id: 'm1t2h09',
      text: 'Maktab strategiyasida “o‘quvchi natijasini yaxshilash” maqsadi belgilandi. Qaysi indikator maqsadga yaqinroq?',
      options: [
        'O‘quvchilarning o‘zlashtirish va kompetensiya ko‘rsatkichlarining o‘sishi',
        'O‘tkazilgan majlislar soni',
        'Chiqarilgan buyruqlar soni',
        'Xodimlar yig‘ilishi davomiyligi',
      ],
      answer: 0,
      explanation:
        'Indikator strategik natijaning o‘zini imkon qadar aks ettirishi kerak.',
    },

    {
      id: 'm1t2h10',
      text: 'Strategik rejalashtirishda “baseline” ko‘rsatkichi nima uchun kerak?',
      options: [
        'Boshlang‘ich holatni aniqlash va keyingi o‘zgarishni taqqoslash uchun',
        'Faqat hisobot yozish uchun',
        'Faqat xodimlarni baholash uchun',
        'Faqat moliyaviy nazorat uchun',
      ],
      answer: 0,
      explanation:
        'Boshlang‘ich ko‘rsatkich natijadagi o‘zgarishni o‘lchash uchun asos bo‘ladi.',
    },

    {
      id: 'm1t2h11',
      text: 'Strategik rejaning maqsadi bor, lekin boshlang‘ich ko‘rsatkich mavjud emas. Qanday muammo yuzaga keladi?',
      options: [
        'Rivojlanish darajasini obyektiv taqqoslash qiyinlashadi',
        'Maqsad avtomatik bajariladi',
        'KPI kerak bo‘lmaydi',
        'Strategiya kuchayadi',
      ],
      answer: 0,
      explanation:
        'Boshlang‘ich holat bo‘lmasa, keyingi o‘sish yoki pasayishni aniq baholash qiyin.',
    },

    {
      id: 'm1t2h12',
      text: 'Strategik rejalashtirishda ssenariy yondashuvining asosiy afzalligi nima?',
      options: [
        'Turli ehtimoliy kelajak holatlariga tayyorgarlik ko‘rish',
        'Bitta variantga qat’iy bog‘lanish',
        'Risklarni yashirish',
        'Faqat xarajatlarni hisoblash',
      ],
      answer: 0,
      explanation:
        'Ssenariy yondashuvi turli sharoitlarda qanday harakat qilishni oldindan o‘ylashga yordam beradi.',
    },

    {
      id: 'm1t2h13',
      text: 'Strategik boshqaruvda “adaptiv strategiya” nimani anglatadi?',
      options: [
        'O‘zgarayotgan sharoitga qarab strategiyani moslashtirish',
        'Strategiyani hech qachon o‘zgartirmaslik',
        'Faqat qisqa muddatli reja tuzish',
        'Barcha maqsadlarni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Adaptiv yondashuv o‘zgaruvchan muhitda strategik moslashuvni nazarda tutadi.',
    },

    {
      id: 'm1t2h14',
      text: 'Strategik maqsadga erishishda eng muhim resurslardan biri nima?',
      options: [
        'Inson kapitali',
        'Faqat bino',
        'Faqat hujjatlar',
        'Faqat reklama',
      ],
      answer: 0,
      explanation:
        'Ta’lim tashkilotida pedagoglar va boshqa xodimlarning kompetensiyasi muhim strategik resurs hisoblanadi.',
    },

    {
      id: 'm1t2h15',
      text: 'Strategik reja “faoliyatga yo‘naltirilgan”, lekin “natijaga yo‘naltirilmagan” bo‘lsa, asosiy kamchilik nimada?',
      options: [
        'Bajarilgan ishlar ko‘p bo‘lishi mumkin, ammo real ta’sir o‘lchanmaydi',
        'Barcha vazifalar bekor bo‘ladi',
        'KPI avtomatik ishlaydi',
        'Strategiya tezroq bajariladi',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda faoliyat emas, uning natijasi va ta’siri muhim.',
    },

    {
      id: 'm1t2h16',
      text: 'Maktabning ta’lim sifati bo‘yicha strategiyasida faqat o‘rtacha ball ko‘rsatkichi ishlatilsa, qanday xavf bor?',
      options: [
        'Ayrim guruhlar yoki fanlardagi muammolar yashirin qolishi mumkin',
        'Barcha muammolar avtomatik aniqlanadi',
        'O‘quvchilar soni oshadi',
        'Strategik reja keraksiz bo‘ladi',
      ],
      answer: 0,
      explanation:
        'Yagona umumiy ko‘rsatkich ichki farqlarni yashirishi mumkin. Segmentlangan ma’lumotlar ham zarur.',
    },

    {
      id: 'm1t2h17',
      text: 'Strategik boshqaruvda stakeholder mapping nima uchun ishlatiladi?',
      options: [
        'Manfaatdor tomonlarning ta’siri va manfaatlarini aniqlash uchun',
        'Faqat xodimlarni ishdan bo‘shatish uchun',
        'Faqat xarajatlarni hisoblash uchun',
        'Faqat dars jadvalini tuzish uchun',
      ],
      answer: 0,
      explanation:
        'Stakeholder mapping manfaatdor tomonlarning roli, ta’siri va manfaatlarini tizimli ko‘rishga yordam beradi.',
    },

    {
      id: 'm1t2h18',
      text: 'Strategik maqsadni bajarishda manfaatdor tomonlar qarama-qarshi talab qo‘ysa, rahbar qanday yondashishi kerak?',
      options: [
        'Manfaatlarni tahlil qilib, tashkilotning asosiy maqsadlariga mos muvozanatli yechim ishlab chiqish',
        'Eng baland ovozdagi tomon talabini bajarish',
        'Barcha talablarni rad etish',
        'Qarorni tasodifan qabul qilish',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruv turli manfaatlarni tahlil qilib, tashkilot maqsadlariga mos qaror qabul qilishni talab qiladi.',
    },

    {
      id: 'm1t2h19',
      text: 'Strategik reja bajarilishida “erta ogohlantiruvchi indikatorlar”ning vazifasi nima?',
      options: [
        'Muammo kuchayishidan oldin signal berish',
        'Faqat yil yakunini ko‘rsatish',
        'Faqat xodimlar sonini hisoblash',
        'Faqat moliyaviy hisobot tuzish',
      ],
      answer: 0,
      explanation:
        'Erta indikatorlar salbiy tendensiyani oldindan ko‘rsatib, choralar ko‘rish imkonini beradi.',
    },

    {
      id: 'm1t2h20',
      text: 'Strategik boshqaruvda portfel yondashuvi nima uchun kerak bo‘lishi mumkin?',
      options: [
        'Bir nechta loyiha va tashabbuslarni umumiy strategiya bilan muvofiqlashtirish uchun',
        'Faqat bitta loyihani tanlash uchun',
        'Faqat moliyaviy hisobot uchun',
        'Faqat xodimlarni baholash uchun',
      ],
      answer: 0,
      explanation:
        'Portfel yondashuvi turli tashabbuslarni strategik ustuvorliklar bilan uyg‘unlashtirishga yordam beradi.',
    },

    {
      id: 'm1t2h21',
      text: 'Strategik boshqaruvda “cause-effect” zanjiri nima uchun muhim?',
      options: [
        'Faoliyatlar qanday natijaga olib kelishini tushuntirish uchun',
        'Faqat hujjatlarni tartiblash uchun',
        'Faqat xodimlarni nazorat qilish uchun',
        'Faqat moliyaviy hisob uchun',
      ],
      answer: 0,
      explanation:
        'Sabab-oqibat bog‘liqligi qaysi harakat qanday natija berishini tushunishga yordam beradi.',
    },

    {
      id: 'm1t2h22',
      text: 'Agar strategik maqsad juda umumiy bo‘lsa, eng asosiy muammo nima?',
      options: [
        'Uni o‘lchash va ijrochilar uchun aniq harakatlarni belgilash qiyinlashadi',
        'Strategiya avtomatik kuchayadi',
        'KPI ko‘payadi',
        'Resurslar ortadi',
      ],
      answer: 0,
      explanation:
        'Noaniq maqsad natijani o‘lchash va amaliy vazifalarni belgilashni qiyinlashtiradi.',
    },

    {
      id: 'm1t2h23',
      text: 'Strategik boshqaruvda resurslarni qayta taqsimlash qachon asosli bo‘lishi mumkin?',
      options: [
        'Monitoring natijalari ayrim ustuvor yo‘nalishlarda qo‘shimcha resurs zarurligini ko‘rsatsa',
        'Faqat xodim talab qilsa',
        'Faqat oy boshida',
        'Hech qachon',
      ],
      answer: 0,
      explanation:
        'Ma’lumotlar asosida resurslarni qayta yo‘naltirish strategik moslashuvning bir qismi bo‘lishi mumkin.',
    },

    {
      id: 'm1t2h24',
      text: 'Strategik rejalashtirishda “quick win” tashabbuslarining vazifasi nima?',
      options: [
        'Nisbatan qisqa muddatda sezilarli natija beradigan choralarni amalga oshirish',
        'Faqat uzoq muddatli loyihalarni bekor qilish',
        'Faqat moliyaviy xarajatlarni oshirish',
        'Strategiyani almashtirish',
      ],
      answer: 0,
      explanation:
        'Quick win tashabbuslar tezroq ijobiy natija berib, strategiyani amalga oshirishga ishonchni kuchaytirishi mumkin.',
    },

    {
      id: 'm1t2h25',
      text: 'Strategik boshqaruvda “barqarorlik” tushunchasi nimani anglatadi?',
      options: [
        'Natijalarni uzoq muddat davomida saqlash va rivojlantirish qobiliyati',
        'Faqat bir martalik yuqori natija',
        'Faqat xarajatlarni kamaytirish',
        'Faqat xodimlar sonini oshirish',
      ],
      answer: 0,
      explanation:
        'Barqaror rivojlanish natijaning bir martalik emas, uzoq muddat davomida saqlanishini nazarda tutadi.',
    },

    {
      id: 'm1t2h26',
      text: 'Strategik reja ijrosi bo‘yicha monitoringda “qizil” holat nimani bildirishi mumkin?',
      options: [
        'Muhim og‘ish yoki jiddiy xavf mavjudligini',
        'Vazifa to‘liq bajarilganini',
        'Muammo yo‘qligini',
        'Faqat yangi vazifa berilganini',
      ],
      answer: 0,
      explanation:
        'Monitoring tizimida ranglar belgilangan bo‘lsa, qizil odatda jiddiy og‘ish yoki xavfni bildiradi.',
    },

    {
      id: 'm1t2h27',
      text: 'Strategik menejmentda rahbarning mikroboshqaruvi qanday xavf tug‘dirishi mumkin?',
      options: [
        'Strategik masalalarga e’tibor kamayib, xodimlar mustaqilligi pasayishi mumkin',
        'Strategiya avtomatik yaxshilanadi',
        'Barcha xodimlar samaradorligi oshadi',
        'Innovatsiya doim kuchayadi',
      ],
      answer: 0,
      explanation:
        'Rahbar barcha mayda jarayonlarga haddan tashqari aralashsa, strategik vazifalarga vaqt kamayishi mumkin.',
    },

    {
      id: 'm1t2h28',
      text: 'Strategik boshqaruvda “learning organization” g‘oyasi nimani anglatadi?',
      options: [
        'Tashkilot doimiy o‘rganish va tajribadan foydalanish orqali rivojlanadi',
        'Faqat o‘quvchilar o‘qiydi',
        'Faqat rahbar ta’lim oladi',
        'Faqat kurslar soni oshiriladi',
      ],
      answer: 0,
      explanation:
        'O‘rganuvchi tashkilot tajriba, ma’lumot va qayta aloqa asosida o‘z faoliyatini doimiy takomillashtiradi.',
    },

    {
      id: 'm1t2h29',
      text: 'Strategik boshqaruvda “strategik moslik” nima?',
      options: [
        'Maqsadlar, resurslar, tashqi muhit va faoliyatlarning o‘zaro uyg‘unligi',
        'Faqat rejaning uzunligi',
        'Faqat moliyaviy imkoniyat',
        'Faqat xodimlar soni',
      ],
      answer: 0,
      explanation:
        'Strategik moslik tashkilotning ichki imkoniyatlari va tashqi muhitini strategik maqsadlar bilan uyg‘unlashtirishni anglatadi.',
    },

    {
      id: 'm1t2h30',
      text: 'Strategik boshqaruvning “PDCA” yondashuvida Check bosqichi nima uchun kerak?',
      options: [
        'Natijalarni tekshirish va reja bilan taqqoslash uchun',
        'Rejani birinchi marta tuzish uchun',
        'Vazifani bajarish uchun',
        'Maqsadni bekor qilish uchun',
      ],
      answer: 0,
      explanation:
        'PDCA siklida Check bosqichi bajarilgan ish va natijalarni tekshirishga xizmat qiladi.',
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
