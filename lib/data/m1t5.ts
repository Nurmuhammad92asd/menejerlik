import type { Question } from '../quiz-data'

export const M1T5_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  easy: [
    {
      id: 'm1t5e01',
      text: 'Maktab boshqaruvida qaror qabul qilishning eng muhim mazmuni qaysi?',
      options: [
        'Muammoni hal qilish uchun maqbul harakat yo‘lini tanlash',
        'Har qanday vaziyatda buyruq chiqarish',
        'Faqat xodimlar faoliyatini tekshirish',
        'Faqat hujjatlarni rasmiylashtirish',
      ],
      answer: 0,
      explanation:
        'Boshqaruv qarori muayyan maqsadga erishish yoki muammoni hal qilish uchun mavjud variantlar ichidan maqbul harakat yo‘lini tanlashni anglatadi.',
    },
    {
      id: 'm1t5e02',
      text: 'Qaror qabul qilishdan oldin rahbar eng avvalo nimani aniqlashi kerak?',
      options: [
        'Muammoning mazmuni va uning sabablarini',
        'Qaysi xodimni jazolashni',
        'Hisobot hajmini',
        'Qarorni qachon arxivlashni',
      ],
      answer: 0,
      explanation:
        'Muammo to‘g‘ri aniqlanmasa, keyingi yechim ham noto‘g‘ri yo‘nalishga tushishi mumkin.',
    },
    {
      id: 'm1t5e03',
      text: 'Muqobil variant deganda nima tushuniladi?',
      options: [
        'Bir muammoni hal qilishning turli mumkin bo‘lgan yo‘llari',
        'Qabul qilingan qarorning nusxasi',
        'Faqat rahbarning shaxsiy fikri',
        'Nazorat natijasidagi yakuniy hisobot',
      ],
      answer: 0,
      explanation:
        'Muqobil variantlar bitta muammoni hal qilish uchun ko‘rib chiqiladigan turli yechim yo‘llaridir.',
    },
    {
      id: 'm1t5e04',
      text: 'Qaror ijrosi deganda qaysi jarayon tushuniladi?',
      options: [
        'Qabul qilingan qarorni amaliy harakatlarga aylantirish',
        'Muammoni qayta nomlash',
        'Qarorni muhokamasiz bekor qilish',
        'Faqat qaror matnini saqlash',
      ],
      answer: 0,
      explanation:
        'Qaror faqat qog‘ozda qolmasdan, belgilangan vazifalar orqali amaliyotga joriy etilganda ijro etilgan hisoblanadi.',
    },
    {
      id: 'm1t5e05',
      text: 'Qaror ijrosini nazorat qilishning asosiy vazifasi nima?',
      options: [
        'Rejalashtirilgan natija bilan amaldagi holatni solishtirish',
        'Har bir xodimga yangi vazifa berish',
        'Qarorni avtomatik ravishda bekor qilish',
        'Faqat hisobotlar sonini oshirish',
      ],
      answer: 0,
      explanation:
        'Nazorat reja va amaliy natija o‘rtasidagi farqni aniqlash hamda zarur choralarni belgilash imkonini beradi.',
    },
    {
      id: 'm1t5e06',
      text: 'Qaror qabul qilishda “mezon” nima uchun kerak?',
      options: [
        'Variantlarni bir xil talablar asosida taqqoslash uchun',
        'Qarorni yashirish uchun',
        'Ijrochilar sonini kamaytirish uchun',
        'Nazoratni bekor qilish uchun',
      ],
      answer: 0,
      explanation:
        'Mezonlar turli variantlarning samaradorligi, xarajati, xavfi yoki boshqa muhim jihatlarini taqqoslash imkonini beradi.',
    },
    {
      id: 'm1t5e07',
      text: 'Qaysi holatda qaror “strategik” hisoblanadi?',
      options: [
        'Maktabning uzoq muddatli rivojlanish yo‘nalishini belgilaganda',
        'Bir kunlik navbatchilikni taqsimlaganda',
        'Bitta darsdagi muammoni hal qilganda',
        'Bir martalik texnik nosozlikni bartaraf etganda',
      ],
      answer: 0,
      explanation:
        'Strategik qarorlar maktabning kelajakdagi rivojlanish yo‘nalishi va uzoq muddatli maqsadlariga taalluqlidir.',
    },
    {
      id: 'm1t5e08',
      text: 'Taktik qarorning asosiy vazifasi nimadan iborat?',
      options: [
        'Strategik maqsadlarni amaliy tadbirlarga aylantirish',
        'Faqat favqulodda vaziyatga javob berish',
        'Maktab tarixini hujjatlashtirish',
        'Faqat moliyaviy hisobot tuzish',
      ],
      answer: 0,
      explanation:
        'Taktik qarorlar strategik yo‘nalishlarni amalga oshirish uchun o‘rta muddatli vazifalar va tadbirlarni belgilaydi.',
    },
    {
      id: 'm1t5e09',
      text: 'Tezkor qaror qaysi vaziyatga ko‘proq mos keladi?',
      options: [
        'Kechiktirib bo‘lmaydigan vaziyatda darhol chora ko‘rishga',
        'Besh yillik rivojlanish strategiyasini tuzishga',
        'Yillik hisobotni arxivlashga',
        'Uzoq muddatli investitsiyani rejalashtirishga',
      ],
      answer: 0,
      explanation:
        'Tezkor qaror vaqt jihatidan shoshilinch bo‘lgan va kechiktirish salbiy oqibatga olib kelishi mumkin bo‘lgan vaziyatlarda qabul qilinadi.',
    },
    {
      id: 'm1t5e10',
      text: 'Jamoaviy qaror qabul qilishning asosiy afzalligi nimada?',
      options: [
        'Turli nuqtayi nazar va tajribalarni hisobga olish imkonida',
        'Rahbar mas’uliyatining butunlay yo‘qolishida',
        'Qaror qabul qilish jarayonining doimo qisqarishida',
        'Nazoratga ehtiyoj qolmasligida',
      ],
      answer: 0,
      explanation:
        'Jamoaviy muhokama turli tajriba va nuqtayi nazarlarni birlashtirib, qarorning asoslanganligini oshirishi mumkin.',
    },
    {
      id: 'm1t5e11',
      text: 'Qaror matnida mas’ul shaxsni ko‘rsatishning asosiy sababi nima?',
      options: [
        'Ijro uchun javobgarlikni aniq belgilash',
        'Qarorni uzunroq qilish',
        'Hujjatlar sonini oshirish',
        'Barcha vazifalarni bir kishiga yuklash',
      ],
      answer: 0,
      explanation:
        'Mas’ul shaxs aniqligi ijro jarayonida kim nima uchun javob berishini belgilaydi.',
    },
    {
      id: 'm1t5e12',
      text: 'Qaror ijrosida muddatning aniq ko‘rsatilishi nimani ta’minlaydi?',
      options: [
        'Ijroni vaqt bo‘yicha kuzatish imkonini',
        'Qarorning maxfiyligini',
        'Muammoning avtomatik hal bo‘lishini',
        'Jamoaviy muhokamaning bekor qilinishini',
      ],
      answer: 0,
      explanation:
        'Aniq muddat ijroni monitoring qilish va kechikishlarni vaqtida aniqlash uchun zarur.',
    },
    {
      id: 'm1t5e13',
      text: 'Qaysi tamoyil qarorlar haqida manfaatdor tomonlarga tegishli axborot berishni nazarda tutadi?',
      options: [
        'Ochiqlilik',
        'Yakkaboshchilik',
        'Tasodifiylik',
        'Maxfiylik',
      ],
      answer: 0,
      explanation:
        'Ochiqlilik manfaatdor tomonlarning maktab faoliyati va muhim qarorlar haqida tegishli axborotga ega bo‘lishini nazarda tutadi.',
    },
    {
      id: 'm1t5e14',
      text: 'Shaffoflik va hisobdorlik o‘rtasidagi eng yaqin bog‘liqlik qaysi?',
      options: [
        'Qaror va resurslardan foydalanish bo‘yicha tushunarli axborot berish',
        'Barcha qarorlarni yashirish',
        'Faqat rahbarning fikrini ustun qo‘yish',
        'Nazoratni faqat yil oxirida o‘tkazish',
      ],
      answer: 0,
      explanation:
        'Shaffoflik ma’lumotning ochiqligini, hisobdorlik esa amalga oshirilgan ishlar uchun javob berishni kuchaytiradi.',
    },
    {
      id: 'm1t5e15',
      text: 'Pedagogik qarorning asosiy yo‘nalishi qaysi?',
      options: [
        'Ta’lim-tarbiya sifati va o‘quvchi rivojlanishiga ta’sir ko‘rsatish',
        'Faqat hujjatlar hajmini ko‘paytirish',
        'Faqat rahbar qulayligini ta’minlash',
        'Faqat xo‘jalik xarajatlarini kamaytirish',
      ],
      answer: 0,
      explanation:
        'Pedagogik qarorlarning markazida ta’lim-tarbiya jarayoni va o‘quvchi manfaatlari turadi.',
    },
    {
      id: 'm1t5e16',
      text: 'Qaror qabul qilishda “qayta aloqa” nima beradi?',
      options: [
        'Qaror natijasi va muammolar haqida yangi ma’lumot beradi',
        'Qarorni avtomatik ravishda bekor qiladi',
        'Mas’uliyatni yo‘qotadi',
        'Faqat hujjatlarni ko‘paytiradi',
      ],
      answer: 0,
      explanation:
        'Qayta aloqa qarorning amaliy natijasi haqida ma’lumot berib, boshqaruvga tuzatish kiritish imkonini yaratadi.',
    },
    {
      id: 'm1t5e17',
      text: 'Qaysi ketma-ketlik qaror qabul qilish mantiqiga eng mos?',
      options: [
        'Muammoni aniqlash → variantlar → baholash → tanlash',
        'Nazorat → buyruq → muammo → variantlar',
        'Ijro → variantlar → muammo → nazorat',
        'Hisobot → jazolash → variantlar → maqsad',
      ],
      answer: 0,
      explanation:
        'Avval muammo aniqlanadi, keyin yechim variantlari ishlab chiqilib, mezonlar asosida tanlanadi.',
    },
    {
      id: 'm1t5e18',
      text: 'Qaror natijasini baholashda asosiy savol qaysi?',
      options: [
        'Belgilangan maqsadga qay darajada erishildi?',
        'Qaror matni necha betdan iborat?',
        'Uni kim birinchi bo‘lib o‘qidi?',
        'Qancha yig‘ilish o‘tkazildi?',
      ],
      answer: 0,
      explanation:
        'Natijaviy baholash qarorning belgilangan maqsadga erishish darajasini aniqlashga qaratiladi.',
    },
    {
      id: 'm1t5e19',
      text: 'Nazoratda reja va natija o‘rtasida farq aniqlansa, bu qanday holat?',
      options: [
        'Og‘ish',
        'Strategiya',
        'Vakolat',
        'Muqobil variant',
      ],
      answer: 0,
      explanation:
        'Rejalashtirilgan ko‘rsatkich bilan amaldagi natija o‘rtasidagi farq boshqaruvdagi og‘ish sifatida qaraladi.',
    },
    {
      id: 'm1t5e20',
      text: 'Og‘ish aniqlangandan keyingi mantiqiy harakat qaysi?',
      options: [
        'Og‘ish sababini aniqlab, zarur tuzatish choralarini belgilash',
        'Nazorat natijasini bekor qilish',
        'Muammoni yashirish',
        'Qarorni hech qanday tahlilsiz davom ettirish',
      ],
      answer: 0,
      explanation:
        'Nazoratning maqsadi faqat kamchilikni topish emas, balki uning sababini aniqlash va boshqaruv choralarini ko‘rishdir.',
    },
    {
      id: 'm1t5e21',
      text: 'Qaysi holat qarorning “aniqlik sharoitida” qabul qilinishiga yaqin?',
      options: [
        'Natijalar va zarur axborot yetarlicha ma’lum bo‘lgan holat',
        'Natijalar umuman taxmin qilib bo‘lmaydigan holat',
        'Muammo haqida hech qanday ma’lumot bo‘lmagan holat',
        'Bir nechta noma’lum xavf bir vaqtda mavjud holat',
      ],
      answer: 0,
      explanation:
        'Aniqlik sharoitida rahbar muhim omillar va ehtimoliy natijalar haqida yetarli ma’lumotga ega bo‘ladi.',
    },
    {
      id: 'm1t5e22',
      text: 'Qaror qabul qilishda resurslarni hisobga olish nima uchun muhim?',
      options: [
        'Tanlangan yechimning amalda bajarilish imkonini baholash uchun',
        'Faqat hujjatni bezash uchun',
        'Muammoni murakkablashtirish uchun',
        'Jamoa fikrini chetga surish uchun',
      ],
      answer: 0,
      explanation:
        'Resurslar mavjud bo‘lmasa, nazariy jihatdan yaxshi variant ham amalda bajarilmasligi mumkin.',
    },
    {
      id: 'm1t5e23',
      text: 'Qaysi qaror turi odatiy, takrorlanuvchi vaziyatlarda qo‘llanadi?',
      options: [
        'Standart yoki an’anaviy qaror',
        'Faqat strategik qaror',
        'Faqat innovatsion qaror',
        'Faqat noaniq qaror',
      ],
      answer: 0,
      explanation:
        'Oldindan tanish va takrorlanuvchi vaziyatlarda standartlashtirilgan yoki an’anaviy qarorlar qo‘llanishi mumkin.',
    },
    {
      id: 'm1t5e24',
      text: 'Qaysi holat qarorning sifatini oshiradi?',
      options: [
        'Dalillar, mezonlar va kutiladigan natijalarni birgalikda hisobga olish',
        'Faqat rahbarning sezgisiga tayanish',
        'Faqat eng tez variantni tanlash',
        'Muammoni aniqlamasdan yechimni tanlash',
      ],
      answer: 0,
      explanation:
        'Asoslangan qaror dalillar, aniq mezonlar, resurslar, xavflar va kutilayotgan natijalarni hisobga oladi.',
    },
    {
      id: 'm1t5e25',
      text: 'Vakolat va javobgarlikning uyg‘unligi nimani anglatadi?',
      options: [
        'Vazifani bajaruvchi shaxsga tegishli vakolat ham berilishini',
        'Barcha vakolat faqat bitta xodimda bo‘lishini',
        'Javobgarlik bo‘lmasligini',
        'Har bir vazifani barcha xodimlar bajarishini',
      ],
      answer: 0,
      explanation:
        'Xodimdan natija talab qilinayotgan bo‘lsa, vazifani bajarish uchun zarur vakolat va resurslar ham berilishi kerak.',
    },
    {
      id: 'm1t5e26',
      text: 'Qarorning bajarilishi uchun zarur sharoit yaratish nimani o‘z ichiga oladi?',
      options: [
        'Vazifa, muddat, mas’ul va zarur resurslarni aniqlashni',
        'Faqat buyruqni e’lon qilishni',
        'Faqat imzo qo‘yishni',
        'Faqat yakuniy hisobotni kutishni',
      ],
      answer: 0,
      explanation:
        'Ijroni tashkil etish aniq vazifalar, muddatlar, mas’ullar va zarur resurslarni belgilashni talab qiladi.',
    },
    {
      id: 'm1t5e27',
      text: 'Maktab qarorlarida o‘quvchi manfaatini hisobga olishning amaliy ko‘rinishi qaysi?',
      options: [
        'Qaror oqibatining o‘quvchi ta’limi va farovonligiga ta’sirini baholash',
        'Faqat rahbar uchun qulay variantni tanlash',
        'Hujjatlarni ko‘paytirishni asosiy maqsad qilish',
        'Qarorni o‘quvchilardan butunlay yashirish',
      ],
      answer: 0,
      explanation:
        'Ta’lim muassasasidagi qarorlar o‘quvchilarning ta’lim olishi, rivojlanishi va farovonligiga ta’sirini hisobga olishi kerak.',
    },
    {
      id: 'm1t5e28',
      text: 'Qaysi holatda qarorga tuzatish kiritish asosli bo‘ladi?',
      options: [
        'Nazorat yangi sharoit yoki muhim og‘ish mavjudligini ko‘rsatganda',
        'Rahbar qaroridan zerikkanda',
        'Xodimlardan biri taklif qilgani uchungina',
        'Qaror hali ijroga tushmasdan turib',
      ],
      answer: 0,
      explanation:
        'Tuzatish dalilga asoslangan bo‘lishi kerak: nazorat natijasi, yangi sharoit yoki aniqlangan muhim og‘ish bunga asos bo‘lishi mumkin.',
    },
    {
      id: 'm1t5e29',
      text: 'Qarorning ijrosi tugagach, nima uchun yakuniy baholash o‘tkaziladi?',
      options: [
        'Natijani maqsad bilan solishtirish va kelgusi qarorlar uchun xulosa chiqarish uchun',
        'Faqat xodimlarni jazolash uchun',
        'Qarorni qayta-qayta chiqarish uchun',
        'Hujjatlar sonini oshirish uchun',
      ],
      answer: 0,
      explanation:
        'Yakuniy baholash natijadorlikni aniqlaydi va keyingi boshqaruv qarorlarini takomillashtirish uchun tajriba beradi.',
    },
    {
      id: 'm1t5e30',
      text: 'Quyidagi mosliklardan qaysi biri to‘liq va to‘g‘ri berilgan?',
      options: [
        '1–Strategik; 2–Taktik; 3–Tezkor; 4–Yakuniy baholash',
        '1–Tezkor; 2–Strategik; 3–Yakuniy baholash; 4–Taktik',
        '1–Taktik; 2–Tezkor; 3–Strategik; 4–Muammoni aniqlash',
        '1–Yakuniy baholash; 2–Tezkor; 3–Taktik; 4–Strategik',
      ],
      answer: 0,
      explanation:
        'Mosliklar boshqaruv qarorlarining strategik, taktik, tezkor va yakuniy baholash bosqichlarini mazmunan to‘g‘ri ajratadi.',
    },
  ],

  medium: [
    {
      id: 'm1t5m01',
      text: 'Direktor muammoni aniqladi, ammo uning sabablarini tekshirmasdan yechim tanladi. Qaror sifatidagi asosiy xavf nima?',
      options: [
        'Asosiy sabab emas, faqat tashqi belgiga ta’sir qiluvchi yechim tanlanishi',
        'Qarorning albatta tezroq bajarilishi',
        'Jamoaviylikning avtomatik kuchayishi',
        'Nazoratning ortiqcha samarali bo‘lishi',
      ],
      answer: 0,
      explanation:
        'Sabablar tahlil qilinmasa, tanlangan chora muammoning ildiziga emas, uning ko‘rinib turgan oqibatiga qaratilishi mumkin.',
    },
    {
      id: 'm1t5m02',
      text: 'Uchta variantdan birini tanlashda direktor faqat xarajatni mezon qildi. Qaysi muhim jihat yetishmayapti?',
      options: [
        'Natija sifati va xavflarni ham baholash',
        'Variantlarni umuman ko‘rib chiqmaslik',
        'Qarorni yozma shakldan chiqarish',
        'Mas’ul shaxsni oldindan olib tashlash',
      ],
      answer: 0,
      explanation:
        'Faqat xarajatga qarab tanlash bir tomonlama yondashuvdir. Sifat, natija, vaqt, resurs va xavf ham baholanishi lozim.',
    },
    {
      id: 'm1t5m03',
      text: 'Strategik maqsad belgilangan, ammo unga erishish uchun yillik tadbirlar ishlab chiqilmagan. Qaysi bog‘lanish uzilgan?',
      options: [
        'Strategik maqsad bilan taktik amalga oshirish o‘rtasidagi bog‘lanish',
        'Nazorat bilan hisobot o‘rtasidagi bog‘lanish',
        'Jamoatchilik bilan moliya o‘rtasidagi bog‘lanish',
        'Muammo bilan arxiv o‘rtasidagi bog‘lanish',
      ],
      answer: 0,
      explanation:
        'Strategiya yo‘nalishni belgilaydi, taktik qarorlar esa shu yo‘nalishni aniq tadbirlar orqali amalga oshirishga xizmat qiladi.',
    },
    {
      id: 'm1t5m04',
      text: 'Qaror qabul qilindi, lekin ijrochilarga vazifa turlicha tushuntirildi. Birinchi navbatda nima qilish kerak?',
      options: [
        'Qaror mazmuni, vazifa, muddat va kutilayotgan natijani yagona talqinda tushuntirish',
        'Nazoratni butunlay bekor qilish',
        'Barcha ijrochilarni almashtirish',
        'Qarorni hech qanday izohsiz davom ettirish',
      ],
      answer: 0,
      explanation:
        'Ijro sifati uchun qarorning mazmuni va kutilayotgan natijasi ijrochilar tomonidan bir xil tushunilishi zarur.',
    },
    {
      id: 'm1t5m05',
      text: 'Rahbar qaror variantlarini baholashda “ta’lim natijasiga ta’sir” mezonini qo‘shdi. Bu nimani kuchaytiradi?',
      options: [
        'Qarorning maqsadga yo‘naltirilganligini',
        'Qarorning tasodifiyligini',
        'Nazoratdan voz kechishni',
        'Faqat moliyaviy yondashuvni',
      ],
      answer: 0,
      explanation:
        'Mezonning ta’lim natijasiga bog‘lanishi qarorni maktabning asosiy faoliyat natijalariga yo‘naltiradi.',
    },
    {
      id: 'm1t5m06',
      text: 'Qaysi holat “qaror” bilan “buyruq” o‘rtasidagi farqni yaxshiroq ko‘rsatadi?',
      options: [
        'Qaror muammoni hal qilish yo‘lini belgilaydi, buyruq esa uni rasmiy ijroga yo‘naltirishi mumkin',
        'Qaror faqat og‘zaki bo‘ladi, buyruq esa faqat jamoaviy bo‘ladi',
        'Qaror faqat moliyaviy masala, buyruq faqat pedagogik masala',
        'Ular har doim mazmunan mutlaqo bir xil',
      ],
      answer: 0,
      explanation:
        'Boshqaruv qarori mazmuniy tanlovni ifodalashi mumkin, buyruq esa rahbarning rasmiy tashkiliy-huquqiy topshirig‘i shakli bo‘lishi mumkin.',
    },
    {
      id: 'm1t5m07',
      text: 'Qaror ijrosi bo‘yicha hisobotlar vaqtida kelmoqda, ammo ko‘rsatkichlar maqsadga yetmayapti. Rahbar nimani aniqlashi kerak?',
      options: [
        'Og‘ishning sabablarini va amaldagi choralar nega yetarli emasligini',
        'Faqat hisobotlar sonini',
        'Faqat hisobot yozgan xodimni',
        'Nazoratni to‘xtatish sababini',
      ],
      answer: 0,
      explanation:
        'Hisobotning o‘z vaqtida kelishi natijaning yaxshi ekanini anglatmaydi. Asosiy masala natijadagi og‘ish sababini aniqlashdir.',
    },
    {
      id: 'm1t5m08',
      text: 'Bir qaror barcha bo‘limlarga bir xil qo‘llanmoqda, lekin ayrim bo‘limlarning sharoiti keskin farq qiladi. Rahbar nimani ko‘rib chiqishi kerak?',
      options: [
        'Umumiy qarorni saqlagan holda, ijro sharoitiga moslashtirish zaruratini',
        'Barcha bo‘limlarga bir xil natija talabini bekor qilishni',
        'Nazoratni butunlay to‘xtatishni',
        'Qarorni avtomatik ravishda bekor qilishni',
      ],
      answer: 0,
      explanation:
        'Umumiy qaror mavjud bo‘lishi mumkin, biroq ijro mexanizmi real sharoitlar va resurslarga moslashtirilishi kerak.',
    },
    {
      id: 'm1t5m09',
      text: 'Yangi metodni joriy etish bo‘yicha qaror qabul qilinmoqda. Axborot cheklangan. Qaysi yondashuv xavfni kamaytiradi?',
      options: [
        'Kichik ko‘lamli sinov, monitoring va natija asosida kengaytirish',
        'Hech qanday sinovsiz barcha sinflarga joriy etish',
        'Faqat rahbarning shaxsiy fikriga tayanish',
        'Natijani o‘lchamasdan qarorni yakunlangan deb hisoblash',
      ],
      answer: 0,
      explanation:
        'Cheklangan axborot sharoitida bosqichma-bosqich sinov va qayta aloqa qaror xavfini kamaytirishga yordam beradi.',
    },
    {
      id: 'm1t5m10',
      text: 'Qaysi juftlik boshqaruv qarori siklining “nazorat → tuzatish” mantiqini to‘g‘ri ifodalaydi?',
      options: [
        'Og‘ish aniqlanadi → sabab tahlil qilinadi → chora belgilanadi',
        'Og‘ish aniqlanadi → hisobot yashiriladi → qaror o‘zgarmaydi',
        'Natija tekshiriladi → muammo inkor qilinadi → nazorat to‘xtaydi',
        'Nazorat qilinadi → javobgar aniqlanmaydi → natija baholanmaydi',
      ],
      answer: 0,
      explanation:
        'Samarali nazorat og‘ishni aniqlash bilan tugamaydi; uning sababi tahlil qilinib, tegishli boshqaruv chorasi belgilanadi.',
    },
    {
      id: 'm1t5m11',
      text: 'Pedagoglar yangi qarorni qo‘llab-quvvatlamoqda, ammo zarur resurslar mavjud emas. Qaysi xulosa eng asosli?',
      options: [
        'Qarorning maqsadi maqbul bo‘lsa ham, ijro shartlari qayta ko‘rib chiqilishi kerak',
        'Jamoa qo‘llagani uchun resurs zarur emas',
        'Qaror avtomatik ravishda samarali hisoblanadi',
        'Resurs yetishmasligi nazorat masalasi emas',
      ],
      answer: 0,
      explanation:
        'Qarorni qo‘llab-quvvatlash uning amaliy bajarilishi uchun zarur resurslar mavjudligini anglatmaydi.',
    },
    {
      id: 'm1t5m12',
      text: 'Qaror ijrosiga mas’ul shaxs belgilangan, ammo unga tegishli vakolat berilmagan. Asosiy muammo nima?',
      options: [
        'Javobgarlik va vakolat o‘rtasidagi nomutanosiblik',
        'Qarorning haddan tashqari shaffofligi',
        'Muqobil variantlarning ko‘pligi',
        'Strategik maqsadning mavjudligi',
      ],
      answer: 0,
      explanation:
        'Natija uchun javobgar shaxs vazifani bajarish uchun zarur vakolatlarga ham ega bo‘lishi kerak.',
    },
    {
      id: 'm1t5m13',
      text: 'Ota-onalar takliflari o‘rganildi, lekin barcha takliflar avtomatik ravishda qarorga kiritildi. Qaysi yondashuv to‘g‘riroq?',
      options: [
        'Takliflarni dalil, maqsad va imkoniyatlar asosida tahlil qilish',
        'Har bir taklifni istisnosiz qabul qilish',
        'Ota-onalar fikrini umuman hisobga olmaslik',
        'Takliflarni faqat ovozlar soni bo‘yicha tanlash',
      ],
      answer: 0,
      explanation:
        'Ishtirokchilik barcha takliflarni avtomatik qabul qilish degani emas; takliflar maqsad, dalil, imkoniyat va oqibatlar asosida baholanadi.',
    },
    {
      id: 'm1t5m14',
      text: 'Rahbar qarorni jamoa bilan muhokama qildi. Biroq muhokamada faqat ko‘pchilik fikri hisobga olindi. Qaysi xavf mavjud?',
      options: [
        'Muhim, ammo kamchilikda qolgan dalil yoki ehtiyoj e’tibordan chetda qolishi',
        'Qarorning shaffofligi ortib ketishi',
        'Nazoratning avtomatik kuchayishi',
        'Barcha xavflarning yo‘qolishi',
      ],
      answer: 0,
      explanation:
        'Jamoaviy qarorda faqat ovoz soni emas, dalillar, ehtiyojlar va mumkin bo‘lgan oqibatlar ham hisobga olinishi kerak.',
    },
    {
      id: 'm1t5m15',
      text: 'Qaror natijasi yaxshi chiqdi. Rahbar esa qaysi omil bunga sabab bo‘lganini aniqlashni istaydi. Qaysi bosqich zarur?',
      options: [
        'Yakuniy tahlil va natijaga ta’sir qilgan omillarni aniqlash',
        'Qarorni darhol bekor qilish',
        'Nazoratni qisqartirish',
        'Yangi muammo yaratish',
      ],
      answer: 0,
      explanation:
        'Yaxshi natijani ham tahlil qilish kerak. Bu muvaffaqiyatli omillarni keyingi qarorlarda takrorlash imkonini beradi.',
    },
    {
      id: 'm1t5m16',
      text: 'Maktabda qarorlar faqat muammo chiqqandan keyin qabul qilinadi. Bu nimadan dalolat berishi mumkin?',
      options: [
        'Proaktiv rejalashtirish va oldindan xavflarni baholash yetarli emasligidan',
        'Nazorat juda kuchli ekanidan',
        'Jamoaviylik ortiqcha ekanidan',
        'Qarorlar juda shaffof ekanidan',
      ],
      answer: 0,
      explanation:
        'Faqat muammo yuzaga kelgandan keyin harakat qilish reaktiv boshqaruvni bildiradi; proaktiv boshqaruv esa ehtimoliy muammolarni oldindan ko‘rishga intiladi.',
    },
    {
      id: 'm1t5m17',
      text: 'Qaysi holat qaror qabul qilishda “qayta aloqa”ning real ishlayotganini ko‘rsatadi?',
      options: [
        'Monitoring natijasiga ko‘ra qaror ijrosiga asoslangan o‘zgartirish kiritilishi',
        'Hisobotning faqat arxivga topshirilishi',
        'Qaror chiqarilgach hech qanday ma’lumot olinmasligi',
        'Faqat yig‘ilish bayonnomasi tuzilishi',
      ],
      answer: 0,
      explanation:
        'Qayta aloqa qaror natijasidagi ma’lumot boshqaruv harakatiga ta’sir qilganda amaliy qiymatga ega bo‘ladi.',
    },
    {
      id: 'm1t5m18',
      text: 'Direktor tezkorlikni ta’minlash uchun muhokamani qisqartirdi. Qaysi shart saqlanishi eng muhim?',
      options: [
        'Qarorning zarur dalil va xavflar bo‘yicha minimal asoslanganligi',
        'Barcha fikrlarni butunlay rad etish',
        'Nazoratni keyinga qoldirish',
        'Qarorni hujjatlashtirmaslik',
      ],
      answer: 0,
      explanation:
        'Tezkorlik qarorni asossiz qilishga olib kelmasligi kerak. Shoshilinch vaziyatda ham muhim dalillar va xavflar baholanishi zarur.',
    },
    {
      id: 'm1t5m19',
      text: 'Qaror variantlaridan biri eng arzon, ikkinchisi esa biroz qimmatroq, lekin ta’lim natijasiga ta’siri yuqori. Tanlovda nima muhim?',
      options: [
        'Faqat narx emas, maqsadga erishish qiymati va kutilayotgan natijani ham baholash',
        'Har doim eng arzon variantni tanlash',
        'Har doim eng qimmat variantni tanlash',
        'Narxni umuman hisobga olmaslik',
      ],
      answer: 0,
      explanation:
        'Eng arzon variant har doim eng samarali variant emas. Qaror qiymat va kutilayotgan natija nisbatida baholanishi kerak.',
    },
    {
      id: 'm1t5m20',
      text: 'Qaror qabul qilishda “manfaatdor tomon” tushunchasiga eng mos misol qaysi?',
      options: [
        'Qaror natijasidan ta’sirlanadigan yoki unga hissa qo‘shadigan guruh',
        'Faqat qarorni imzolagan shaxs',
        'Faqat maktab direktori',
        'Faqat nazorat qiluvchi xodim',
      ],
      answer: 0,
      explanation:
        'Manfaatdor tomon qaror natijasiga ta’sir qilishi yoki undan bevosita yoki bilvosita ta’sirlanishi mumkin bo‘lgan tomon hisoblanadi.',
    },
    {
      id: 'm1t5m21',
      text: 'Qaror quyidagi to‘rt bosqich bilan bog‘langan: 1) muammo; 2) variant; 3) tanlov; 4) ijro. Qaysi bosqich tanlovdan oldin kelishi kerak?',
      options: [
        'Variantlarni mezonlar asosida baholash',
        'Yakuniy hisobotni arxivlash',
        'Ijroni yakunlash',
        'Xodimlarni almashtirish',
      ],
      answer: 0,
      explanation:
        'Variantlar avval belgilangan mezonlar asosida baholanadi, shundan keyin eng maqbul variant tanlanadi.',
    },
    {
      id: 'm1t5m22',
      text: 'Quyidagi mosliklardan qaysi biri to‘liq to‘g‘ri?',
      options: [
        '1–Strategik: uzoq muddatli yo‘nalish; 2–Taktik: amalga oshirish rejasi; 3–Tezkor: shoshilinch harakat; 4–Nazorat: natijani kuzatish',
        '1–Strategik: kunlik topshiriq; 2–Taktik: arxiv; 3–Tezkor: 5 yillik reja; 4–Nazorat: qaror tanlash',
        '1–Strategik: faqat moliya; 2–Taktik: faqat jazo; 3–Tezkor: faqat hisobot; 4–Nazorat: faqat buyruq',
        '1–Strategik: nazorat; 2–Taktik: muammo; 3–Tezkor: strategiya; 4–Nazorat: muqobil variant',
      ],
      answer: 0,
      explanation:
        'Birinchi variant qarorlarning vaqt va funksional mazmunini to‘liq va izchil ajratib beradi.',
    },
    {
      id: 'm1t5m23',
      text: 'Qaysi vaziyatda rahbar qarorni qayta ko‘rib chiqishi uchun eng kuchli asos mavjud?',
      options: [
        'Yangi ma’lumot dastlabki taxminlarni jiddiy o‘zgartirganida',
        'Rahbar qarorni yoqtirmay qolganida',
        'Xodimlardan biri shunchaki taklif berganida',
        'Qaror allaqachon bajarilganida',
      ],
      answer: 0,
      explanation:
        'Yangi va muhim dalillar dastlabki qaror asoslarini o‘zgartirsa, qarorni qayta ko‘rib chiqish asosli bo‘ladi.',
    },
    {
      id: 'm1t5m24',
      text: 'Qaror samaradorligi faqat “bajarildi/bajarilmadi” bilan baholansa, nima yetishmaydi?',
      options: [
        'Natijaning sifat va maqsadga erishish darajasi',
        'Qarorning nomi',
        'Ijrochining lavozimi',
        'Hujjatning hajmi',
      ],
      answer: 0,
      explanation:
        'Vazifaning bajarilgani uning maqsadga erishilganini anglatmaydi. Natijaning sifati va ta’siri ham baholanishi kerak.',
    },
    {
      id: 'm1t5m25',
      text: 'Qaror ijrosi yaxshi, ammo kutilmagan salbiy oqibat yuzaga keldi. Rahbar nimani tahlil qilishi kerak?',
      options: [
        'Qarorning bevosita natijasi bilan birga ikkilamchi oqibatlarini ham',
        'Faqat ijrochining ish vaqtini',
        'Faqat hujjat sonini',
        'Faqat qaror sanasini',
      ],
      answer: 0,
      explanation:
        'Sifatli boshqaruv qarorning bevosita natijasi bilan birga kutilmagan oqibatlarini ham tahlil qiladi.',
    },
    {
      id: 'm1t5m26',
      text: 'Qaror ijrosida ikki bo‘lim bir-birining vazifasini kutmoqda. Muammo nimada bo‘lishi ehtimoli yuqori?',
      options: [
        'Vazifa va javobgarliklar chegarasi aniq belgilanmagan',
        'Strategik qarorlar juda ko‘p',
        'Ochiqlilik ortiqcha',
        'Qaror juda qisqa bo‘lgan',
      ],
      answer: 0,
      explanation:
        'Bir-birini kutish ko‘pincha vazifalar chegarasi, mas’uliyat yoki topshirish mexanizmi noaniqligidan kelib chiqadi.',
    },
    {
      id: 'm1t5m27',
      text: 'Qaysi yondashuv qaror sifatini va ijro intizomini birgalikda kuchaytiradi?',
      options: [
        'Aniq maqsad + mas’ul + muddat + resurs + monitoring',
        'Faqat buyruq + jazo',
        'Faqat muhokama + nazoratsizlik',
        'Faqat hisobot + arxiv',
      ],
      answer: 0,
      explanation:
        'Qaror sifatli bo‘lishi bilan birga, uni amalga oshirish mexanizmi ham aniq bo‘lishi kerak.',
    },
    {
      id: 'm1t5m28',
      text: 'Rahbar qarorni barcha uchun bir xil shaklda qo‘llamoqda, ammo ayrim holatlar individual yondashuvni talab qiladi. Eng oqilona yechim qaysi?',
      options: [
        'Umumiy maqsadni saqlab, zarur holatlarda asoslangan moslashtirish kiritish',
        'Barcha qoidalarni bekor qilish',
        'Har bir xodimga butunlay boshqa maqsad qo‘yish',
        'Nazoratdan voz kechish',
      ],
      answer: 0,
      explanation:
        'Tizimlilik umumiy mezonlarni saqlashni, moslashuvchanlik esa real sharoitga zarur darajada javob berishni talab qiladi.',
    },
    {
      id: 'm1t5m29',
      text: 'Qaysi holat qaror qabul qilishda “dalilga asoslangan yondashuv”ga mos?',
      options: [
        'Muammo bo‘yicha ma’lumot yig‘ib, tahlil natijasiga ko‘ra variant tanlash',
        'Eng baland lavozimli shaxs fikrini avtomatik qabul qilish',
        'Birinchi taklifni tanlash',
        'Muammoni faqat shikoyat asosida baholash',
      ],
      answer: 0,
      explanation:
        'Dalilga asoslangan qaror mavjud ma’lumotlar va tahlil natijasiga tayangan holda shakllanadi.',
    },
    {
      id: 'm1t5m30',
      text: 'Qarorlar tizimida eng muhim mantiqiy bog‘lanish qaysi?',
      options: [
        'Maqsad → qaror → ijro → monitoring → natija → qayta aloqa',
        'Buyruq → jazo → hisobot → arxiv → natija',
        'Muammo → buyruq → arxiv → natija → nazorat',
        'Hisobot → qaror → muammo → ijro → maqsad',
      ],
      answer: 0,
      explanation:
        'Boshqaruv qarori maqsadga xizmat qiladi, ijro orqali amalga oshadi, monitoring bilan kuzatiladi va natija asosida qayta aloqa hosil qiladi.',
    },
  ],

  hard: [
    {
      id: 'm1t5h01',
      text: 'Maktabda o‘quvchilar natijasi pasaydi. Rahbar natijani ko‘rib, darhol o‘qituvchilarga qo‘shimcha hisobot topshirig‘i berdi. Muammoni hal qilishdagi asosiy mantiqiy xato nima?',
      options: [
        'Natijaning sabablarini aniqlamasdan chorani tanlagan',
        'Hisobot talab qilgani',
        'Nazoratni kuchaytirgani',
        'Natijani qayd etgani',
      ],
      answer: 0,
      explanation:
        'Natija pasayishining sababi aniqlanmasdan berilgan hisobot topshirig‘i asosiy muammoni bartaraf etmasligi mumkin.',
    },
    {
      id: 'm1t5h02',
      text: 'Rahbar uchta variantdan birini tanladi. Keyinchalik ma’lum bo‘ldiki, tanlov paytida mavjud muhim ma’lumotlardan foydalanilmagan. Qarorning zaif tomoni qaysi?',
      options: [
        'Axborot bazasining yetarli darajada shakllantirilmaganligi',
        'Ijro muddatining aniq belgilanganligi',
        'Mas’ul shaxs mavjudligi',
        'Nazoratning tashkil etilgani',
      ],
      answer: 0,
      explanation:
        'Mavjud muhim ma’lumotlardan foydalanilmasligi qaror asoslanganligini zaiflashtiradi.',
    },
    {
      id: 'm1t5h03',
      text: 'Ikki variantdan biri tez natija beradi, ikkinchisi esa sekinroq, ammo barqaror natija beradi. Rahbar nimani aniqlamasdan tanlov qilmasligi kerak?',
      options: [
        'Maktabning strategik maqsadi va kutilayotgan natijaning ustuvorligini',
        'Faqat variant nomini',
        'Faqat qaror sanasini',
        'Faqat muhokamada qatnashuvchilar sonini',
      ],
      answer: 0,
      explanation:
        'Variant tanlovi maktab maqsadlari bilan bog‘lanmasa, qisqa muddatli foyda uzoq muddatli natijaga zid kelishi mumkin.',
    },
    {
      id: 'm1t5h04',
      text: 'Qaror jamoa tomonidan ma’qullandi va ijro etildi, ammo natija kutilganidan past bo‘ldi. Qaysi xulosa eng to‘g‘ri?',
      options: [
        'Jamoaviy kelishuv qarorning avtomatik ravishda samarali ekanini anglatmaydi',
        'Jamoaviy qarorlar doimo noto‘g‘ri',
        'Natija past bo‘lsa, nazorat kerak emas',
        'Rahbar har qanday holatda ham to‘g‘ri qaror qilgan',
      ],
      answer: 0,
      explanation:
        'Jamoaviylik qaror sifatini oshirishi mumkin, ammo natijadorlik dalillar, mezonlar, ijro va monitoringga ham bog‘liq.',
    },
    {
      id: 'm1t5h05',
      text: 'Qaror bajarildi, lekin uning natijasini o‘lchash ko‘rsatkichi belgilanmagan. Qaysi muammo yuzaga keladi?',
      options: [
        'Qarorning samaradorligini obyektiv baholash qiyinlashadi',
        'Qaror avtomatik ravishda strategik bo‘ladi',
        'Ijrochilar soni ortadi',
        'Jamoaviylik kuchayadi',
      ],
      answer: 0,
      explanation:
        'O‘lchov mezoni bo‘lmasa, qarorning maqsadga qay darajada erishgani haqida ishonchli xulosa qilish qiyin.',
    },
    {
      id: 'm1t5h06',
      text: 'Rahbar “ta’lim sifatini oshirish” degan umumiy maqsadni qo‘ydi. Qarorni boshqaruv nuqtayi nazaridan kuchaytirish uchun nima zarur?',
      options: [
        'Aniq natija ko‘rsatkichlari, muddat, mas’ullar va amalga oshirish mexanizmini belgilash',
        'Faqat maqsadni yana bir marta e’lon qilish',
        'Faqat yig‘ilish o‘tkazish',
        'Faqat xodimlarga ogohlantirish berish',
      ],
      answer: 0,
      explanation:
        'Umumiy maqsad ijro qilinadigan boshqaruv qaroriga aylanishi uchun o‘lchanadigan natijalar va ijro mexanizmi zarur.',
    },
    {
      id: 'm1t5h07',
      text: 'Qaror variantlaridan biri ko‘pchilikka yoqdi, ammo ma’lumotlar uning natijadorligi past bo‘lishini ko‘rsatmoqda. Rahbar nima qilishi kerak?',
      options: [
        'Ommaviy qo‘llab-quvvatlashni dalillar bilan birga tahlil qilib, mezon asosida tanlov qilish',
        'Faqat ko‘pchilik fikrini qabul qilish',
        'Ma’lumotlarni e’tiborsiz qoldirish',
        'Qarorni muhokamasiz bekor qilish',
      ],
      answer: 0,
      explanation:
        'Jamoa fikri muhim, ammo boshqaruv qarori dalillar va maqsadga muvofiqlik mezonlari bilan ham asoslanishi kerak.',
    },
    {
      id: 'm1t5h08',
      text: 'Bir qarorning qisqa muddatli foydasi yuqori, ammo uzoq muddatda xarajat va xavfi katta. Qaysi xato ehtimoli mavjud?',
      options: [
        'Qarorning faqat qisqa muddatli natijasi baholanmoqda',
        'Strategik maqsad haddan tashqari aniq belgilangan',
        'Nazorat juda erta boshlangan',
        'Jamoaviylik ortiqcha qo‘llangan',
      ],
      answer: 0,
      explanation:
        'Strategik boshqaruvda qarorning bevosita foydasi bilan birga uzoq muddatli xarajat, xavf va oqibatlar ham hisobga olinadi.',
    },
    {
      id: 'm1t5h09',
      text: 'Qaror ijrosi sust. Rahbar barcha aybni ijrochilarga yuklamoqda. Biroq qarorda resurs va vakolatlar ko‘rsatilmagan. Qaysi tahlil zarur?',
      options: [
        'Ijro muammosi bilan birga qarorning o‘zi va ijro shartlarini ham tekshirish',
        'Ijrochilarni darhol jazolash',
        'Nazoratni bekor qilish',
        'Qarorni mukammal deb qabul qilish',
      ],
      answer: 0,
      explanation:
        'Ijrodagi muammo har doim ijrochining aybi bo‘lavermaydi. Qarorning aniqligi, resurs, vakolat va sharoitlar ham tekshirilishi kerak.',
    },
    {
      id: 'm1t5h10',
      text: 'Rahbar yangi tizimni barcha sinflarga birdan joriy qildi. Keyinchalik tizim ayrim sinflarda ishlamasligi aniqlandi. Qaysi qaror mexanizmi oldindan qo‘llanishi foydali bo‘lardi?',
      options: [
        'Pilot sinov va bosqichma-bosqich kengaytirish',
        'Nazoratni faqat yil oxirida o‘tkazish',
        'Barcha muammolarni ijrochilarga yuklash',
        'Natijalarni umuman o‘lchamaslik',
      ],
      answer: 0,
      explanation:
        'Noaniqlik yuqori bo‘lgan innovatsion qarorlarda pilot sinov xatolarni kichik ko‘lamda aniqlash imkonini beradi.',
    },
    {
      id: 'm1t5h11',
      text: 'Quyidagi ketma-ketliklardan qaysi biri qaror sifatini boshqarish uchun eng mantiqli?',
      options: [
        'Muammo → sabab → maqsad → variant → mezon → tanlov → ijro → monitoring',
        'Muammo → buyruq → jazo → hisobot → arxiv',
        'Maqsad → ijro → muammo → variant → nazorat',
        'Variant → arxiv → muammo → maqsad → ijro',
      ],
      answer: 0,
      explanation:
        'Sifatli qaror muammo va sababni tushunishdan boshlanib, maqsad, variantlar va mezonlar orqali ijroga, so‘ng monitoringga o‘tadi.',
    },
    {
      id: 'm1t5h12',
      text: 'Strategik qaror mavjud, ammo unga mos budjet va xodimlar resursi ajratilmagan. Qaysi boshqaruv muammosi yuzaga keladi?',
      options: [
        'Strategiya bilan resurs rejalashtirish o‘rtasidagi uzilish',
        'Qarorning haddan tashqari shaffofligi',
        'Jamoaviylikning ortiqchaligi',
        'Nazoratning mavjudligi',
      ],
      answer: 0,
      explanation:
        'Strategik maqsadlar resurslar bilan ta’minlanmasa, ularni amaliyotga joriy etish qiyinlashadi.',
    },
    {
      id: 'm1t5h13',
      text: 'Qaror ijrosi davomida yangi tashqi sharoit paydo bo‘ldi va dastlabki taxmin o‘zgardi. Rahbar qarorni aynan o‘sha holatda davom ettirsa, qaysi xususiyat yetishmaydi?',
      options: [
        'Moslashuvchanlik',
        'Muntazamlik',
        'Standartlashuv',
        'Rasmiylik',
      ],
      answer: 0,
      explanation:
        'Yangi sharoit muhim ta’sir ko‘rsatsa, qaror mexanizmini qayta ko‘rib chiqish boshqaruv moslashuvchanligini talab qiladi.',
    },
    {
      id: 'm1t5h14',
      text: 'Qaror natijasi maqsadga yetdi, ammo unga sarflangan resurs kutilganidan ikki baravar ko‘p bo‘ldi. Qaysi tahlil zarur?',
      options: [
        'Natijadorlik bilan birga resurs samaradorligini ham baholash',
        'Natija yaxshi bo‘lgani uchun barcha xarajatni oqlash',
        'Resurslarni keyingi safar umuman hisobga olmaslik',
        'Nazoratni bekor qilish',
      ],
      answer: 0,
      explanation:
        'Maqsadga erishish muhim, ammo boshqaruv qarorining samaradorligi resurslardan oqilona foydalanish bilan ham baholanadi.',
    },
    {
      id: 'm1t5h15',
      text: 'Rahbar qarorni o‘zgartirdi, ammo o‘zgarish sabablarini hujjatlashtirmadi. Buning asosiy xavfi nima?',
      options: [
        'Qarorlar izchilligi va keyingi tahlil uchun asos kamayadi',
        'Qaror avtomatik ravishda samarali bo‘ladi',
        'Jamoaviylik kuchayadi',
        'Resurslar ko‘payadi',
      ],
      answer: 0,
      explanation:
        'Qarordagi muhim o‘zgarishlarning sabablari qayd etilmasa, keyinchalik nima uchun bunday yo‘l tanlangani va natijani tahlil qilish qiyinlashadi.',
    },
    {
      id: 'm1t5h16',
      text: 'Qaror uchun 4 mezon belgilandi: ta’sir, xarajat, vaqt, xavf. Variant A ta’sirda yuqori, B xarajatda past. Rahbar faqat bitta mezon bilan tanlasa, nima sodir bo‘ladi?',
      options: [
        'Ko‘p mezonli qaror bir tomonlama baholangan bo‘ladi',
        'Qaror avtomatik ravishda strategik bo‘ladi',
        'Barcha xavflar yo‘qoladi',
        'Variantlar o‘rtasidagi farq yo‘qoladi',
      ],
      answer: 0,
      explanation:
        'Bir nechta mezon belgilangan bo‘lsa, ularning barchasi tanlovga tegishli darajada kiritilishi kerak.',
    },
    {
      id: 'm1t5h17',
      text: 'Jamoa qaror variantlarini muhokama qildi. Bir xodim muhim xavfni ko‘rsatdi, ammo ko‘pchilik bunga qo‘shilmadi. Rahbar nima qilishi kerak?',
      options: [
        'Xavf haqidagi dalilni tekshirib, natijaga ta’sirini baholashi',
        'Ko‘pchilik fikri sabab xavfni darhol rad etishi',
        'Xodimni muhokamadan chiqarishi',
        'Qarorni nazoratsiz qoldirishi',
      ],
      answer: 0,
      explanation:
        'Muhim xavf ko‘pchilik fikridan qat’i nazar dalil asosida tekshirilishi kerak.',
    },
    {
      id: 'm1t5h18',
      text: 'Qaror ijrosi bo‘yicha ko‘rsatkichlar har oy o‘lchanadi, ammo ular qarorning asosiy maqsadini aks ettirmaydi. Muammo nimada?',
      options: [
        'Monitoring ko‘rsatkichlari maqsad bilan to‘g‘ri bog‘lanmagan',
        'Monitoring juda tez-tez o‘tkazilmoqda',
        'Qaror haddan tashqari shaffof',
        'Ijrochilar soni kam',
      ],
      answer: 0,
      explanation:
        'Ko‘rsatkichlar faqat o‘lchanishi emas, balki qarorning asosiy maqsadini ifodalashi ham muhim.',
    },
    {
      id: 'm1t5h19',
      text: 'Qaror bo‘yicha barcha vazifalar bajarildi, lekin o‘quvchi natijasi o‘zgarmadi. Eng asosli xulosa qaysi?',
      options: [
        'Ijro bajarilgan bo‘lsa ham, tanlangan choralar maqsadga yetarli ta’sir ko‘rsatmagan bo‘lishi mumkin',
        'Qaror albatta muvaffaqiyatli',
        'Nazorat noto‘g‘ri bo‘lgani aniq',
        'Ijrochilarni jazolash yetarli',
      ],
      answer: 0,
      explanation:
        'Vazifalar bajarilishi jarayon natijasidir; boshqaruv qarorining haqiqiy samarasi yakuniy maqsadga ta’sir orqali baholanadi.',
    },
    {
      id: 'm1t5h20',
      text: 'Rahbar faqat salbiy natijalarni tahlil qiladi, ijobiy natijalarni esa o‘rganmaydi. Qaysi imkoniyat boy beriladi?',
      options: [
        'Samarali amaliyotlarni aniqlash va kelgusi qarorlarga ko‘chirish',
        'Nazoratni butunlay to‘xtatish',
        'Qarorlarni yashirish',
        'Mas’uliyatni kamaytirish',
      ],
      answer: 0,
      explanation:
        'Ijobiy natijalarning sabablarini ham o‘rganish samarali amaliyotlarni tizimlashtirishga yordam beradi.',
    },
    {
      id: 'm1t5h21',
      text: 'Qaysi moslik boshqaruv qarorining sifatli siklini eng to‘liq ifodalaydi?',
      options: [
        'Tahlil → maqsad → variantlar → mezon → tanlov → resurs → ijro → monitoring → tuzatish',
        'Buyruq → ijro → jazo → hisobot → arxiv',
        'Variant → ijro → muammo → maqsad → nazorat',
        'Nazorat → buyruq → variant → arxiv → tahlil',
      ],
      answer: 0,
      explanation:
        'Birinchi ketma-ketlik qarorni tayyorlashdan boshlab ijro, monitoring va zarur tuzatishlargacha bo‘lgan uzluksiz boshqaruv siklini beradi.',
    },
    {
      id: 'm1t5h22',
      text: 'Maktab strategiyasi “o‘quvchilar natijasini oshirish”ni belgiladi. Uchta taklifdan qaysi biri qaror sifatida eng kuchli shakllangan?',
      options: [
        'O‘qish savodxonligini oshirish bo‘yicha diagnostika, maqsadli guruhlar, mas’ullar, muddat va monitoringni belgilash',
        'O‘qituvchilarni ko‘proq ishlashga chaqirish',
        'Natijalarni yaxshilash bo‘yicha umumiy topshiriq berish',
        'Yangi hisobot shaklini joriy qilish',
      ],
      answer: 0,
      explanation:
        'Kuchli qaror maqsadni amaliy mexanizmga aylantiradi: muammo, maqsad, aniq chora, mas’ul, muddat va monitoringni belgilaydi.',
    },
    {
      id: 'm1t5h23',
      text: 'Rahbar muammoni “o‘qituvchilar mas’uliyatsizligi” deb belgiladi, ammo dalil sifatida faqat uchta shikoyat mavjud. Qaysi yondashuv to‘g‘ri?',
      options: [
        'Xulosani kengaytirishdan oldin muammoni qo‘shimcha ma’lumotlar bilan tekshirish',
        'Shikoyatlar yetarli deb barcha xodimlarni ayblash',
        'Darhol intizomiy choraga o‘tish',
        'Muammoni boshqa nom bilan atash',
      ],
      answer: 0,
      explanation:
        'Cheklangan dalildan umumiy xulosa chiqarish noto‘g‘ri bo‘lishi mumkin. Qaror oldidan ma’lumotlar kengaytirilishi va tekshirilishi zarur.',
    },
    {
      id: 'm1t5h24',
      text: 'Qaror tanlashda ikki variant teng natija beradi. Birining ijrosi uchun mavjud resurs yetarli, ikkinchisi esa qo‘shimcha resurs talab qiladi. Qaysi omil ustunlashadi?',
      options: [
        'Mavjud resurs bilan barqaror amalga oshirish imkoniyati',
        'Variantning nomi',
        'Uni taklif qilgan shaxsning lavozimi',
        'Muhokama davomiyligi',
      ],
      answer: 0,
      explanation:
        'Natija teng bo‘lsa, amalga oshirish imkoniyati va resurslardan foydalanish samaradorligi muhim tanlov mezoniga aylanadi.',
    },
    {
      id: 'm1t5h25',
      text: 'Qaror qabul qilindi, biroq xodimlar qarorning maqsadini tushunmayapti. Eng katta boshqaruv xavfi nima?',
      options: [
        'Ijro mexanik tus olib, kutilgan natijaga olib kelmasligi',
        'Nazoratning avtomatik kuchayishi',
        'Resurslarning o‘z-o‘zidan ko‘payishi',
        'Qarorning strategikligi ortishi',
      ],
      answer: 0,
      explanation:
        'Ijrochi vazifaning maqsadini tushunmasa, harakatlar formal bajarilib, asosiy natija e’tibordan chetda qolishi mumkin.',
    },
    {
      id: 'm1t5h26',
      text: 'Rahbar qarorni o‘zgartirishga asos sifatida faqat “menimcha” degan fikrni keltirdi. Qaysi tamoyilni kuchaytirish zarur?',
      options: [
        'Dalil va ma’lumotlarga asoslangan boshqaruv',
        'Yakkaboshchilik',
        'Tasodifiylik',
        'Formalizm',
      ],
      answer: 0,
      explanation:
        'Rahbar fikri muhim bo‘lishi mumkin, ammo boshqaruvdagi muhim o‘zgarishlar imkon qadar dalil va ma’lumotlar bilan asoslanishi kerak.',
    },
    {
      id: 'm1t5h27',
      text: 'Qaror bajarilmoqda, ammo monitoring faqat yakunida o‘tkaziladi. Qaysi xavf eng katta?',
      options: [
        'Og‘ishlar kech aniqlanib, tuzatish uchun vaqt kamayishi',
        'Qaror haddan tashqari tez o‘zgarishi',
        'Jamoaviylik ortishi',
        'Resurslar avtomatik tejilishi',
      ],
      answer: 0,
      explanation:
        'Faqat yakuniy monitoring oraliq og‘ishlarni vaqtida aniqlash va tuzatish imkonini kamaytiradi.',
    },
    {
      id: 'm1t5h28',
      text: 'Rahbar qaror samaradorligini faqat bir oy ichidagi natija bilan baholadi, lekin qaror uzoq muddatli ta’sirga ega. Qaysi xato mavjud?',
      options: [
        'Baholash gorizonti qarorning ta’sir muddatiga moslashtirilmagan',
        'Nazorat umuman o‘tkazilmagan',
        'Jamoa fikri ortiqcha hisobga olingan',
        'Qaror juda shaffof bo‘lgan',
      ],
      answer: 0,
      explanation:
        'Uzoq muddatli qarorlar faqat qisqa muddatli natija bilan emas, tegishli vaqt oralig‘idagi barqaror ta’sir bilan ham baholanadi.',
    },
    {
      id: 'm1t5h29',
      text: 'Qaysi vaziyat qaror qabul qilishdagi eng katta “ijro bo‘shlig‘i”ni ko‘rsatadi?',
      options: [
        'Maqsad aniq, ammo mas’ul, muddat va resurslar belgilanmagan',
        'Maqsad, mas’ul va muddat aniq',
        'Monitoring ko‘rsatkichlari mavjud',
        'Ijro natijalari muntazam tahlil qilinadi',
      ],
      answer: 0,
      explanation:
        'Maqsadning o‘zi yetarli emas. Uni amalga oshirish uchun mas’uliyat, muddat, resurs va monitoring mexanizmi zarur.',
    },
    {
      id: 'm1t5h30',
      text: 'Quyidagi to‘rtta elementdan qaysi kombinatsiya qarorni eng yaxshi “boshqaruv sikli”ga aylantiradi?',
      options: [
        'Dalil → tanlov → aniq ijro → o‘lchash → qayta aloqa',
        'Fikr → buyruq → kutish → jazolash',
        'Muammo → buyruq → arxiv → yakun',
        'Muhokama → imzo → hujjat → unutish',
      ],
      answer: 0,
      explanation:
        'Sifatli boshqaruv qarori dalilga tayanadi, aniq tanlov qiladi, ijroni tashkil etadi, natijani o‘lchaydi va qayta aloqa orqali takomillashadi.',
    },
  ],

  case: [
    {
      id: 'm1t5c01',
      text: 'Maktabda matematika natijalari ketma-ket ikki chorak pasaydi. Direktor darhol qo‘shimcha darslar joriy qilmoqchi. Avval nima qilishi eng asosli?',
      options: [
        'Natijalar qaysi sinf, mavzu va guruhlarda pasayganini tahlil qilib, sabablarni aniqlash',
        'Barcha sinflarga bir xil qo‘shimcha dars belgilash',
        'Darhol o‘qituvchilarni jazolash',
        'Faqat ota-onalardan shikoyat yig‘ish',
      ],
      answer: 0,
      explanation:
        'Muammo umumiy ko‘rinishda bo‘lsa ham, uning manbai turlicha bo‘lishi mumkin. Qarordan oldin ma’lumotlar kesimida sabab tahlili zarur.',
    },
    {
      id: 'm1t5c02',
      text: 'Tahlil natijasida muammo faqat 5-sinflarda va ayrim mavzularda ekanligi aniqlandi. Direktor barcha sinflarga bir xil chora qo‘llashi kerakmi?',
      options: [
        'Yo‘q; chora aniqlangan muammo va ehtiyojga moslashtirilishi kerak',
        'Ha; barcha muammo uchun bitta qaror samaraliroq',
        'Ha; individual yondashuv boshqaruvni zaiflashtiradi',
        'Faqat ota-onalar talab qilsa, farqlash mumkin',
      ],
      answer: 0,
      explanation:
        'Muammo aniq guruh va mavzularda bo‘lsa, resursni barcha joyga bir xil sarflashdan ko‘ra maqsadli chora samaraliroq bo‘lishi mumkin.',
    },
    {
      id: 'm1t5c03',
      text: 'Direktor uchta yechim ishlab chiqdi: qo‘shimcha dars, mentorlik va diagnostik guruhlar. Qaysi yo‘l tanlovni asoslashga yordam beradi?',
      options: [
        'Har bir variantni natija, xarajat, vaqt va xavf mezonlari bo‘yicha taqqoslash',
        'Eng arzon variantni avtomatik tanlash',
        'Eng ko‘p ovoz olgan variantni dalilsiz qabul qilish',
        'Birinchi ishlab chiqilgan variantni tanlash',
      ],
      answer: 0,
      explanation:
        'Bir nechta variant mavjud bo‘lganda tanlov aniq mezonlar asosida amalga oshirilsa, qaror asoslangan bo‘ladi.',
    },
    {
      id: 'm1t5c04',
      text: 'Tanlangan variant uchun mas’ul o‘qituvchilar belgilandi, ammo ular uchun qo‘shimcha vaqt va resurs ajratilmadi. Qaysi muammo mavjud?',
      options: [
        'Javobgarlik belgilangan, lekin ijro shartlari yetarli ta’minlanmagan',
        'Strategik qaror qabul qilinmagan',
        'Ochiqlilik ortiqcha bo‘lgan',
        'Monitoring juda kuchli bo‘lgan',
      ],
      answer: 0,
      explanation:
        'Mas’uliyatni belgilashning o‘zi yetarli emas. Ijrochilarga vazifani bajarish uchun zarur vaqt, vosita va sharoit ham yaratilishi kerak.',
    },
    {
      id: 'm1t5c05',
      text: 'Bir oy monitoringidan so‘ng natija yaxshilandi, ammo faqat bitta sinfda. Rahbarning keyingi qadami qaysi bo‘lishi ma’qul?',
      options: [
        'Qaysi omillar shu sinfda natija berganini tahlil qilib, boshqa sinflarga moslashtirish imkonini baholash',
        'Darhol barcha sinflarga aynan bir xil usulni joriy qilish',
        'Yaxshi natija chiqqani uchun monitoringni to‘xtatish',
        'Boshqa sinflardagi muammoni e’tiborsiz qoldirish',
      ],
      answer: 0,
      explanation:
        'Bitta joydagi muvaffaqiyatning sababi aniqlanib, uning boshqa sharoitlarda ishlash imkoniyati tekshirilishi kerak.',
    },
    {
      id: 'm1t5c06',
      text: 'Maktabda yangi dars jadvali ishlab chiqildi. Jadval o‘qituvchilar uchun qulay, ammo ayrim sinflarning ta’lim yuklamasi nomutanosib bo‘lib qoldi. Qaysi mezon qayta ko‘rib chiqilishi kerak?',
      options: [
        'Qarorning barcha manfaatdor tomonlar va ta’lim natijasiga ta’siri',
        'Faqat o‘qituvchilarning qulayligi',
        'Faqat jadvalni tez tayyorlash',
        'Faqat rahbariyatning xohishi',
      ],
      answer: 0,
      explanation:
        'Maktab qarori faqat bitta guruh qulayligi bilan emas, o‘quvchi, pedagog va ta’lim jarayonining umumiy natijasi bilan baholanadi.',
    },
    {
      id: 'm1t5c07',
      text: 'Direktor yangi qarorni e’lon qildi. Uch bo‘lim uni turlicha talqin qildi. Natijada vazifalar takrorlandi va ayrimlari bajarilmay qoldi. Asosiy sabab nima?',
      options: [
        'Qarorning vazifa, vakolat va javobgarliklari yetarlicha aniqlashtirilmagan',
        'Qaror juda shaffof bo‘lgan',
        'Monitoring ortiqcha o‘tkazilgan',
        'Jamoa juda ko‘p fikr bildirgan',
      ],
      answer: 0,
      explanation:
        'Turlicha talqin odatda vazifalar, vakolatlar, muddatlar va javobgarliklar aniq belgilanmaganida yuzaga keladi.',
    },
    {
      id: 'm1t5c08',
      text: 'Maktab rahbariyati ota-onalardan kelgan takliflarning barchasini o‘rganib chiqdi. Ayrimlari strategiyaga mos, ayrimlari esa mos emas. Qanday yo‘l to‘g‘ri?',
      options: [
        'Takliflarni maqsad, dalil, resurs va kutilayotgan ta’sir asosida saralash',
        'Barcha takliflarni ovoz berishsiz qabul qilish',
        'Barcha takliflarni rad etish',
        'Faqat eng ko‘p takrorlangan taklifni qabul qilish',
      ],
      answer: 0,
      explanation:
        'Ishtirokchilik takliflarni eshitishni anglatadi; ularni qarorga kiritish esa boshqaruv mezonlari asosida amalga oshiriladi.',
    },
    {
      id: 'm1t5c09',
      text: 'Qaror ijrosi davomida tashqi sharoit keskin o‘zgardi. Dastlabki reja endi resurs jihatidan og‘irlik qilmoqda. Rahbar nima qilishi kerak?',
      options: [
        'Yangi sharoitni baholab, maqsadni saqlagan holda ijro mexanizmini qayta ko‘rib chiqish',
        'Eski rejani har qanday holatda davom ettirish',
        'Nazoratni to‘xtatish',
        'Qarorni sababini tushuntirmasdan bekor qilish',
      ],
      answer: 0,
      explanation:
        'Moslashuvchan boshqaruv maqsadni saqlagan holda yangi sharoitga mos vosita va muddatlarni qayta ko‘rib chiqishni talab qilishi mumkin.',
    },
    {
      id: 'm1t5c10',
      text: 'Maktabda yangi strategik maqsad belgilandi. Uni samarali boshqaruv qaroriga aylantirish uchun qaysi to‘plam eng to‘liq?',
      options: [
        'Aniq natija + mezon + tadbir + mas’ul + muddat + resurs + monitoring',
        'Faqat maqsad + yig‘ilish',
        'Faqat buyruq + imzo',
        'Faqat nazorat + hisobot',
      ],
      answer: 0,
      explanation:
        'Strategik maqsad real boshqaruv mexanizmiga aylanishi uchun uni amalga oshirish vositalari, javobgarlik, muddat, resurs va monitoring bir tizimga bog‘lanadi.',
    },
  ],
}
