import type { Question } from '../quiz-data'

export const M1T6_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  easy: [
    {
      id: 'm1t6e01',
      text: 'Maktab imiji nima?',
      options: [
        'Faqat maktab binosining tashqi ko‘rinishi',
        'Maktab haqida jamiyat va manfaatdor tomonlar ongida shakllangan umumiy tasavvur, obro‘ va nufuz',
        'Faqat maktab direktorining obro‘si',
        'Faqat ijtimoiy tarmoqlardagi sahifa'
      ],
      answer: 1,
      explanation: 'Maktab imiji — maktab haqida jamiyat, ota-onalar, o‘quvchilar, pedagoglar va hamkor tashkilotlar ongida shakllangan umumiy tasavvur, obro‘-e’tibor va nufuzdir.'
    },
    {
      id: 'm1t6e02',
      text: 'Maktab imiji asosan nimalar asosida shakllanadi?',
      options: [
        'Faqat reklama asosida',
        'Ta’lim sifati, muhit, xulq-atvor, tashqi ko‘rinish va muloqot madaniyati asosida',
        'Faqat maktab binosi asosida',
        'Faqat direktorning nutqi asosida'
      ],
      answer: 1,
      explanation: 'Maktab imiji maktab faoliyati, ta’lim sifati, muhit, xulq-atvor, tashqi ko‘rinish va muloqot madaniyati bilan bog‘liq.'
    },
    {
      id: 'm1t6e03',
      text: 'Maktab imiji qanday faoliyat natijasida shakllanadi?',
      options: [
        'Tasodifiy faoliyat natijasida',
        'Faqat bir martalik tadbir natijasida',
        'Maqsadli, tizimli va doimiy faoliyat natijasida',
        'Faqat reklama natijasida'
      ],
      answer: 2,
      explanation: 'Materialga ko‘ra, imij o‘z-o‘zidan emas, balki maqsadli, tizimli va doimiy faoliyat natijasida shakllanadi.'
    },
    {
      id: 'm1t6e04',
      text: 'Maktabning ijobiy imiji ota-onalar bilan munosabatga qanday ta’sir qiladi?',
      options: [
        'Ishonch va hamkorlikni mustahkamlaydi',
        'Aloqalarni kamaytiradi',
        'Ota-onalar ishtirokini cheklaydi',
        'Hech qanday ta’sir qilmaydi'
      ],
      answer: 0,
      explanation: 'Ijobiy imij ota-onalar ishonchi va hamkorligini mustahkamlashga xizmat qiladi.'
    },
    {
      id: 'm1t6e05',
      text: 'Maktab imijining asosiy turlaridan biri qaysi?',
      options: [
        'Ichki imij',
        'Moliyaviy imij',
        'Huquqiy imij',
        'Texnik imij'
      ],
      answer: 0,
      explanation: 'Maktab imiji ichki va tashqi imijga bo‘linadi.'
    },
    {
      id: 'm1t6e06',
      text: 'Ichki imij nimani anglatadi?',
      options: [
        'OAVdagi maktab haqidagi ma’lumotlarni',
        'Maktab jamoasi orasida shakllangan ichki muhit va munosabatlar tizimini',
        'Maktab binosining tashqi ko‘rinishini',
        'Homiylarning maktab haqidagi fikrini'
      ],
      answer: 1,
      explanation: 'Ichki imij pedagoglar, xodimlar va o‘quvchilar orasidagi ichki muhit va munosabatlar bilan bog‘liq.'
    },
    {
      id: 'm1t6e07',
      text: 'Tashqi imij kimlar orasida shakllanadi?',
      options: [
        'Faqat direktorlar orasida',
        'Faqat pedagoglar orasida',
        'Ota-onalar, mahalla, jamiyat va OAV kabi tashqi muhitda',
        'Faqat o‘quvchilar orasida'
      ],
      answer: 2,
      explanation: 'Tashqi imij maktabdan tashqaridagi manfaatdor tomonlar — ota-onalar, mahalla, jamiyat va OAV orasida shakllanadi.'
    },
    {
      id: 'm1t6e08',
      text: 'Ichki imijning tarkibiy qismiga qaysi biri kiradi?',
      options: [
        'Pedagoglarning kasbiy mahorati va obro‘si',
        'Faqat maktab darvozasi',
        'Faqat reklama bannerlari',
        'Faqat maktab logotipi'
      ],
      answer: 0,
      explanation: 'Pedagoglarning kasbiy mahorati va obro‘si ichki imijning muhim tarkibiy qismidir.'
    },
    {
      id: 'm1t6e09',
      text: 'Ichki imij mustahkam bo‘lmasa, nima yuz berishi mumkin?',
      options: [
        'Tashqi imij avtomatik ravishda kuchayadi',
        'Tashqi imij barqaror bo‘la olmaydi',
        'Maktab reytingi avtomatik oshadi',
        'PRga ehtiyoj qolmaydi'
      ],
      answer: 1,
      explanation: 'Materialda ichki imij mustahkam bo‘lmasa, tashqi imij ham barqaror bo‘la olmasligi ta’kidlangan.'
    },
    {
      id: 'm1t6e10',
      text: 'Maktab tashqi imijini shakllantiruvchi omillardan biri qaysi?',
      options: [
        'O‘quvchilar yutuqlari',
        'Faqat xodimlarning shaxsiy hayoti',
        'Faqat direktor xonasi',
        'Faqat ichki hujjatlar'
      ],
      answer: 0,
      explanation: 'Olimpiada va tanlovlardagi o‘quvchilar yutuqlari tashqi imijni shakllantiruvchi omillardan biridir.'
    },
    {
      id: 'm1t6e11',
      text: 'PR atamasi nimani anglatadi?',
      options: [
        'Public Relations',
        'Personal Result',
        'Professional Ranking',
        'Public Regulation'
      ],
      answer: 0,
      explanation: 'PR — Public Relations, ya’ni jamoatchilik bilan aloqalar.'
    },
    {
      id: 'm1t6e12',
      text: 'Maktab PR faoliyatining asosiy maqsadi nima?',
      options: [
        'Faqat reklama qilish',
        'Maktab va jamoatchilik o‘rtasida ishonch, ochiqlik va ijobiy munosabatlarni shakllantirish',
        'Faqat tadbirlar sonini ko‘paytirish',
        'Faqat ijtimoiy tarmoqdagi obunachilarni oshirish'
      ],
      answer: 1,
      explanation: 'Maktab PRi maktab va jamoatchilik o‘rtasida o‘zaro ishonch, ochiqlik va ijobiy munosabatlarni shakllantirishga qaratilgan.'
    },
    {
      id: 'm1t6e13',
      text: 'Quyidagilardan qaysi biri an’anaviy PR vositasi?',
      options: [
        'Ochiq eshiklar kuni',
        'Sun’iy intellekt chatbotlari',
        'Elektron xabarnoma',
        'Jonli efir'
      ],
      answer: 0,
      explanation: 'Ochiq eshiklar kuni an’anaviy PR vositalaridan biridir.'
    },
    {
      id: 'm1t6e14',
      text: 'Quyidagilardan qaysi biri zamonaviy PR vositasidir?',
      options: [
        'Axborot stendi',
        'Press-reliz',
        'Ijtimoiy tarmoq',
        'Marosim'
      ],
      answer: 2,
      explanation: 'Telegram, Instagram va Facebook kabi ijtimoiy tarmoqlar zamonaviy PR vositalariga kiradi.'
    },
    {
      id: 'm1t6e15',
      text: 'Maktab PR faoliyatining birinchi bosqichi qaysi?',
      options: [
        'Monitoring',
        'Tahlil',
        'Takomillashtirish',
        'Amalga oshirish'
      ],
      answer: 1,
      explanation: 'PR faoliyati tahlildan boshlanadi: avvalo maktabning hozirgi imiji va jamoatchilik fikri o‘rganiladi.'
    },
    {
      id: 'm1t6e16',
      text: 'PR faoliyatida monitoring bosqichining vazifasi nima?',
      options: [
        'PR samaradorligini baholash',
        'Faqat reja tuzish',
        'Faqat tadbir o‘tkazish',
        'Faqat xodim tayinlash'
      ],
      answer: 0,
      explanation: 'Monitoring bosqichida PR faoliyatining samaradorligi baholanadi.'
    },
    {
      id: 'm1t6e17',
      text: 'Maktab imijini shakllantirish tamoyillaridan biri qaysi?',
      options: [
        'Haqiqiylik',
        'Yashirinlik',
        'Tasodifiylik',
        'Kechikish'
      ],
      answer: 0,
      explanation: 'Haqiqiylik maktab imijini shakllantirishning asosiy tamoyillaridan biridir.'
    },
    {
      id: 'm1t6e18',
      text: 'Haqiqiylik tamoyili nimani anglatadi?',
      options: [
        'Imij faqat real faoliyatga tayanishi kerak',
        'Har qanday ma’lumotni tarqatish mumkin',
        'Faqat reklama qilish kerak',
        'Salbiy ma’lumotlarni yashirish kerak'
      ],
      answer: 0,
      explanation: 'Haqiqiylik imijning real faoliyat va real natijalarga asoslanishini anglatadi.'
    },
    {
      id: 'm1t6e19',
      text: 'Shaffoflik tamoyili nimani kuchaytiradi?',
      options: [
        'Ishonchni',
        'Mish-mishlarni',
        'Yopiq boshqaruvni',
        'Axborot kechikishini'
      ],
      answer: 0,
      explanation: 'Qarorlar, qoidalar va baholash mezonlari tushunarli bo‘lsa, ishonch ortadi.'
    },
    {
      id: 'm1t6e20',
      text: 'Maktab imijining “yuragi” sifatida qaysi tamoyil ko‘rsatilgan?',
      options: [
        'Insonparvarlik',
        'Raqobat',
        'Nazorat',
        'Reklama'
      ],
      answer: 0,
      explanation: 'O‘quvchi va ota-onaga hurmat, pedagogga e’tibor insonparvarlik tamoyilini tashkil etadi.'
    },
    {
      id: 'm1t6e21',
      text: 'Maktab imijida hamkorlik tamoyili kimlar bilan aloqani nazarda tutadi?',
      options: [
        'Faqat maktab xodimlari bilan',
        'Mahalla, OTM, korxona, OAV va NNT bilan',
        'Faqat o‘quvchilar bilan',
        'Faqat direktorlar bilan'
      ],
      answer: 1,
      explanation: 'Hamkorlik maktabning mahalla, OTM, korxona, OAV va NNT bilan aloqalarini qamrab oladi.'
    },
    {
      id: 'm1t6e22',
      text: 'Tezkorlik tamoyili nima uchun muhim?',
      options: [
        'Kechikkan izoh salbiy ta’sir qilishi mumkin',
        'Rejani bekor qilish uchun',
        'Faqat reklama xarajatlarini oshirish uchun',
        'Hujjatlarni ko‘paytirish uchun'
      ],
      answer: 0,
      explanation: 'Axborot muhitida kechikkan izoh salbiy ta’sir ko‘rsatishi mumkin, shuning uchun tezkorlik muhim.'
    },
    {
      id: 'm1t6e23',
      text: 'Maktabning raqamli imiji qayerlarda shakllanadi?',
      options: [
        'Faqat maktab binosida',
        'Internet va raqamli platformalarda',
        'Faqat sinf xonalarida',
        'Faqat pedagogik kengashda'
      ],
      answer: 1,
      explanation: 'Raqamli imij veb-sayt, ijtimoiy tarmoqlar va boshqa raqamli platformalarda shakllanadi.'
    },
    {
      id: 'm1t6e24',
      text: 'Raqamli imij nimalarni aks ettiradi?',
      options: [
        'Ochiqlik, tezkorlik, ishonchlilik va professional boshqaruvni',
        'Faqat reklama darajasini',
        'Faqat bino holatini',
        'Faqat direktorning shaxsiy fikrini'
      ],
      answer: 0,
      explanation: 'Raqamli imij ochiqlik, tezkorlik, ishonchlilik va professional boshqaruvni aks ettiradi.'
    },
    {
      id: 'm1t6e25',
      text: 'Maktab imiji faqat tashqi ko‘rinishdan iboratmi?',
      options: [
        'Ha, faqat tashqi ko‘rinishdan iborat',
        'Yo‘q, u sifat, qadriyat, xavfsizlik, adolat va ochiqlikning aksidir',
        'Faqat logotipdan iborat',
        'Faqat reklama bilan belgilanadi'
      ],
      answer: 1,
      explanation: 'Materialda imij tashqi ko‘rinish emas, balki sifat, qadriyat, xavfsizlik, adolat va ochiqlikning jamiyatdagi aks-sadosi ekani ta’kidlangan.'
    },
    {
      id: 'm1t6e26',
      text: 'Maktab imijini shakllantirishda rahbarning vazifalaridan biri qaysi?',
      options: [
        'Kommunikatsiyani boshqarish',
        'Barcha axborotni yashirish',
        'Jamoa fikrini inkor etish',
        'Faqat moliyaviy ish bilan shug‘ullanish'
      ],
      answer: 0,
      explanation: 'Rahbar strategik yo‘l belgilaydi, sifatni tizimlashtiradi, jamoa madaniyatini yaratadi va kommunikatsiyani boshqaradi.'
    },
    {
      id: 'm1t6e27',
      text: 'Maktab imijining rivojlanish strategiyasiga ta’siri qanday?',
      options: [
        'Rivojlanish strategiyasiga xizmat qiladi',
        'Strategiyaga umuman aloqasi yo‘q',
        'Faqat moliyaviy rejani bekor qiladi',
        'Faqat reklama xarajatlarini oshiradi'
      ],
      answer: 0,
      explanation: 'Ijobiy imij maktabning uzoq muddatli rivojlanish strategiyasiga xizmat qiladi.'
    },
    {
      id: 'm1t6e28',
      text: 'Maktabning ijtimoiy tarmoqlardagi faoliyati qaysi imijga ko‘proq ta’sir qiladi?',
      options: [
        'Tashqi va raqamli imijga',
        'Faqat ichki imijga',
        'Faqat moliyaviy imijga',
        'Hech qanday imijga emas'
      ],
      answer: 0,
      explanation: 'Ijtimoiy tarmoqlardagi faoliyat tashqi hamda raqamli imijni shakllantirishda muhim vosita hisoblanadi.'
    },
    {
      id: 'm1t6e29',
      text: 'Inqirozli vaziyatda maktabning kuchli imiji qanday yordam beradi?',
      options: [
        'Maktabning “himoya reputatsiyasi”ni kuchaytiradi',
        'Muammoni avtomatik yo‘q qiladi',
        'Barcha tanqidlarni taqiqlaydi',
        'Axborot berishga ehtiyoj qoldirmaydi'
      ],
      answer: 0,
      explanation: 'Kuchli reputatsiya mojaro, feyk xabar yoki bahsli vaziyatlarda maktabning himoya reputatsiyasini kuchaytiradi.'
    },
    {
      id: 'm1t6e30',
      text: '“Imij — natija” degan fikr nimani anglatadi?',
      options: [
        'Yaxshi imij avvalo maktabning real faoliyati va natijalariga asoslanadi',
        'Imij faqat reklama orqali yaratiladi',
        'Natija muhim emas',
        'Faqat ijtimoiy tarmoq yetarli'
      ],
      answer: 0,
      explanation: 'Barqaror yaxshi imij avvalo maktabning ichki ishlari to‘g‘ri yo‘lga qo‘yilishi va keyin to‘g‘ri axborot siyosati bilan mustahkamlanishi orqali yuzaga keladi.'
    }
  ],

  medium: [
    {
      id: 'm1t6m01',
      text: 'Quyidagilardan qaysi biri ichki imijni shakllantiruvchi omillar majmuasiga eng to‘g‘ri mos keladi?',
      options: [
        'Pedagogik mahorat, psixologik muhit, ta’lim sifati, o‘quvchi intizomi',
        'Faqat bino va hudud ko‘rinishi',
        'Faqat OAVdagi chiqishlar',
        'Faqat homiylik mablag‘lari'
      ],
      answer: 0,
      explanation: 'Ichki imij maktab jamoasining kasbiy, psixologik va pedagogik muhitiga bog‘liq.'
    },
    {
      id: 'm1t6m02',
      text: 'Tashqi imijni shakllantirishda qaysi omillar to‘plami muhim?',
      options: [
        'Bino ko‘rinishi, OAV va ijtimoiy tarmoqlar, o‘quvchilar yutuqlari, ota-onalar bilan hamkorlik',
        'Faqat o‘qituvchilar yig‘ilishi',
        'Faqat ichki buyruqlar',
        'Faqat dars jadvali'
      ],
      answer: 0,
      explanation: 'Tashqi imijga maktabning tashqi ko‘rinishi, axborot faoliyati, yutuqlari va jamoatchilik bilan aloqalari ta’sir qiladi.'
    },
    {
      id: 'm1t6m03',
      text: 'Maktab PR faoliyatining “tahlil” bosqichida nima o‘rganiladi?',
      options: [
        'Maktabning hozirgi imiji va jamoatchilik fikri',
        'Faqat tadbirlar soni',
        'Faqat budjet xarajatlari',
        'Faqat o‘qituvchilar ish haqi'
      ],
      answer: 0,
      explanation: 'Tahlil bosqichida mavjud imij va jamoatchilikning maktab haqidagi fikri o‘rganiladi.'
    },
    {
      id: 'm1t6m04',
      text: 'PR faoliyatining rejalashtirish bosqichida nima ishlab chiqiladi?',
      options: [
        'PR strategiya va yillik reja',
        'Faqat press-reliz',
        'Faqat ichki buyruq',
        'Faqat moliyaviy hisobot'
      ],
      answer: 0,
      explanation: 'Rejalashtirish bosqichida PR strategiyasi va yillik reja ishlab chiqiladi.'
    },
    {
      id: 'm1t6m05',
      text: 'PR faoliyatining amalga oshirish bosqichi nimani bildiradi?',
      options: [
        'Belgilangan tadbirlarni izchil bajarishni',
        'Faqat muammoni aniqlashni',
        'Faqat natijani baholashni',
        'Faqat monitoringni'
      ],
      answer: 0,
      explanation: 'Amalga oshirish bosqichida rejalashtirilgan PR tadbirlari izchil bajariladi.'
    },
    {
      id: 'm1t6m06',
      text: 'PR jarayonining yakuniy takomillashtirish bosqichi nima uchun kerak?',
      options: [
        'Aniqlangan kamchiliklar ustida ishlash uchun',
        'Barcha PR ishlarini to‘xtatish uchun',
        'Faqat yangi reklama yaratish uchun',
        'Faqat axborotni yashirish uchun'
      ],
      answer: 0,
      explanation: 'Takomillashtirish bosqichi aniqlangan kamchiliklarni bartaraf etish va faoliyatni yaxshilashga xizmat qiladi.'
    },
    {
      id: 'm1t6m07',
      text: 'Maktab imijida barqarorlik tamoyili nimani talab qiladi?',
      options: [
        'Bir martalik tadbir emas, tizimli sifat va tizimli muloqotni',
        'Faqat yiliga bir marta reklama qilishni',
        'Faqat ijtimoiy tarmoqda post berishni',
        'Faqat tadbirlar sonini oshirishni'
      ],
      answer: 0,
      explanation: 'Barqaror imij bir martalik tadbirlar emas, doimiy sifat va tizimli muloqot orqali shakllanadi.'
    },
    {
      id: 'm1t6m08',
      text: 'Maktab rahbari uchun insonparvarlik tamoyili qanday amaliy harakatda namoyon bo‘ladi?',
      options: [
        'O‘quvchi va ota-onaga hurmat, pedagogga e’tibor',
        'Faqat nazoratni kuchaytirish',
        'Faqat intizomiy choralarni oshirish',
        'Faqat reklama tadbirlarini ko‘paytirish'
      ],
      answer: 0,
      explanation: 'Insonparvarlik tamoyili hurmat, e’tibor va inson manfaatlarini hisobga olish orqali namoyon bo‘ladi.'
    },
    {
      id: 'm1t6m09',
      text: 'Nima sababdan soxta PR uzoq muddatli imijni ta’minlay olmaydi?',
      options: [
        'Chunki u real faoliyatga tayanmaydi va tez fosh bo‘lishi mumkin',
        'Chunki PR umuman kerak emas',
        'Chunki ota-onalar axborotga qiziqmaydi',
        'Chunki ijtimoiy tarmoqlar ishlamaydi'
      ],
      answer: 0,
      explanation: 'Haqiqiylik tamoyiliga ko‘ra, imij real faoliyatga asoslanishi kerak.'
    },
    {
      id: 'm1t6m10',
      text: 'Maktabning rasmiy veb-sayti qaysi yo‘nalishda muhim PR vositasidir?',
      options: [
        'Zamonaviy PR',
        'Faqat an’anaviy PR',
        'Faqat ichki nazorat',
        'Faqat moliyaviy boshqaruv'
      ],
      answer: 0,
      explanation: 'Rasmiy veb-sayt zamonaviy PR vositalaridan biri sifatida ko‘rsatilgan.'
    },
    {
      id: 'm1t6m11',
      text: 'Ochiq eshiklar kuni maktab imijiga qanday xizmat qilishi mumkin?',
      options: [
        'Maktab faoliyati bilan jamoatchilikni bevosita tanishtirishga',
        'Faqat xodimlar ishini nazorat qilishga',
        'Faqat moliyaviy hisobot tuzishga',
        'Faqat ichki hujjatlarni rasmiylashtirishga'
      ],
      answer: 0,
      explanation: 'Ochiq eshiklar kuni jamoatchilikka maktab faoliyatini bevosita ko‘rsatish imkonini beruvchi PR vositasidir.'
    },
    {
      id: 'm1t6m12',
      text: 'Ota-onalar bilan samarali hamkorlik maktab imijining qaysi jihatini mustahkamlaydi?',
      options: [
        'Ishonch va tashqi reputatsiyani',
        'Faqat texnik jihozlarni',
        'Faqat ichki hujjatlarni',
        'Faqat dars jadvalini'
      ],
      answer: 0,
      explanation: 'Ota-onalar bilan hamkorlik ishonchni mustahkamlaydi va tashqi imijga ijobiy ta’sir qiladi.'
    },
    {
      id: 'm1t6m13',
      text: 'O‘quvchilarning olimpiada va tanlovlardagi yutuqlari qaysi imijga bevosita ta’sir qiladi?',
      options: [
        'Tashqi imijga',
        'Faqat moliyaviy imijga',
        'Faqat texnik imijga',
        'Faqat ichki hujjatlar imijiga'
      ],
      answer: 0,
      explanation: 'O‘quvchilar yutuqlari jamoatchilik orasida maktabning ta’limiy natijalarini namoyon qiladi.'
    },
    {
      id: 'm1t6m14',
      text: 'Maktab rahbari salbiy xabar tarqalganini aniqladi. Birinchi navbatda qaysi yondashuv muhim?',
      options: [
        'Tezkor va aniq axborot berish',
        'Muammoni butunlay inkor qilish',
        'Axborot berishni kechiktirish',
        'Mish-mishni boshqa mavzu bilan yopish'
      ],
      answer: 0,
      explanation: 'Muammoli vaziyatlarda tezkor va aniq axborot berish muhim yondashuvlardan biridir.'
    },
    {
      id: 'm1t6m15',
      text: 'Feyk xabarlar tarqalishining oldini olishda qaysi harakat muhim?',
      options: [
        'Rasmiy pozitsiyani ochiq bayon etish va aniq axborot berish',
        'Barcha savollarga javob bermaslik',
        'Ijtimoiy tarmoqlarni yopish',
        'Har qanday xabarni o‘chirib tashlash'
      ],
      answer: 0,
      explanation: 'Rasmiy pozitsiyani ochiq bayon qilish va aniq axborot berish mish-mishlarning oldini olishga yordam beradi.'
    },
    {
      id: 'm1t6m16',
      text: 'Maktab PR faoliyatining samaradorligini aniqlashda qaysi bosqich asosiy?',
      options: [
        'Monitoring',
        'Faqat reklama',
        'Faqat tadbir',
        'Faqat rejalashtirish'
      ],
      answer: 0,
      explanation: 'Monitoring orqali amalga oshirilgan PR faoliyatining natijasi va samaradorligi baholanadi.'
    },
    {
      id: 'm1t6m17',
      text: 'Maktabning raqamli imijini mustahkamlash uchun eng muhim talablardan biri qaysi?',
      options: [
        'Axborotning ishonchli va tezkor bo‘lishi',
        'Faqat ko‘p post joylashtirish',
        'Faqat chiroyli rasmlar qo‘yish',
        'Faqat obunachilar sonini oshirish'
      ],
      answer: 0,
      explanation: 'Raqamli imijda ochiqlik, tezkorlik, ishonchlilik va professional boshqaruv muhim.'
    },
    {
      id: 'm1t6m18',
      text: 'Maktabning raqamli imiji ota-onalar bilan aloqada qanday imkoniyat yaratadi?',
      options: [
        'Axborot almashuvini tezlashtiradi',
        'Aloqalarni kamaytiradi',
        'Faqat reklama xarajatlarini oshiradi',
        'Faqat ichki nazoratni kuchaytiradi'
      ],
      answer: 0,
      explanation: 'Raqamli platformalar ota-onalar va jamoatchilik bilan tezkor axborot almashish imkonini beradi.'
    },
    {
      id: 'm1t6m19',
      text: 'Maktab imijining raqobatbardoshlikka ta’siri qanday?',
      options: [
        'Ijobiy imij maktabning raqobatbardoshligini kuchaytiradi',
        'Imij raqobatga ta’sir qilmaydi',
        'Faqat reklama xarajatini oshiradi',
        'Faqat bino qiymatini oshiradi'
      ],
      answer: 0,
      explanation: 'Maktab imijining ahamiyatli natijalaridan biri raqobatbardoshlikni kuchaytirishdir.'
    },
    {
      id: 'm1t6m20',
      text: 'Maktabning hamkor tashkilotlar bilan aloqalari imijga qanday ta’sir qiladi?',
      options: [
        'Ijtimoiy hamkorlik va qo‘llab-quvvatlash imkoniyatlarini kengaytiradi',
        'Faqat ichki muhitga ta’sir qiladi',
        'Imijga umuman ta’sir qilmaydi',
        'Faqat hujjatlar sonini oshiradi'
      ],
      answer: 0,
      explanation: 'Hamkorlik maktabning ijtimoiy sheriklik va homiylik imkoniyatlarini kengaytirishi mumkin.'
    },
    {
      id: 'm1t6m21',
      text: 'Maktab rahbari imijni boshqarishda avvalo nimaga e’tibor qaratishi kerak?',
      options: [
        'Real ta’lim sifati, jamoa madaniyati va kommunikatsiyaga',
        'Faqat reklama dizayniga',
        'Faqat logotipga',
        'Faqat tashqi ko‘rinishga'
      ],
      answer: 0,
      explanation: 'Barqaror imij ichki faoliyat, sifat, qadriyat va to‘g‘ri kommunikatsiyaga asoslanadi.'
    },
    {
      id: 'm1t6m22',
      text: 'Maktab imijini shakllantirishda jamoa madaniyatining ahamiyati nimada?',
      options: [
        'Ichki muhit va tashqi munosabatlarning sifatiga ta’sir qiladi',
        'Faqat tadbirlarni ko‘paytiradi',
        'Faqat hujjatlarni kamaytiradi',
        'Faqat moddiy bazani yaxshilaydi'
      ],
      answer: 0,
      explanation: 'Jamoa madaniyati ichki imijning asosiy tarkibiy qismlaridan bo‘lib, umumiy reputatsiyaga ta’sir qiladi.'
    },
    {
      id: 'm1t6m23',
      text: 'Maktab imijining shakllanishida muloqot madaniyati nima uchun muhim?',
      options: [
        'Chunki u maktab haqida manfaatdor tomonlarning tasavvuriga ta’sir qiladi',
        'Chunki u faqat hujjatlarni tartibga soladi',
        'Chunki u faqat reklama beradi',
        'Chunki u faqat o‘quv jadvalini tuzadi'
      ],
      answer: 0,
      explanation: 'Muloqot madaniyati maktab jamoasi va tashqi manfaatdor tomonlar bilan munosabatlarga bevosita ta’sir qiladi.'
    },
    {
      id: 'm1t6m24',
      text: 'Maktab imijini baholashda jamoatchilik fikrini o‘rganish qaysi bosqichga tegishli?',
      options: [
        'Tahlil',
        'Amalga oshirish',
        'Takomillashtirish',
        'Faqat monitoring'
      ],
      answer: 0,
      explanation: 'Jamoatchilik fikrini o‘rganish PR faoliyatining tahlil bosqichida amalga oshiriladi.'
    },
    {
      id: 'm1t6m25',
      text: 'Maktab axborot siyosatining asosiy vazifalaridan biri nima?',
      options: [
        'Ochiq, tezkor va ishonchli axborot almashinuvini ta’minlash',
        'Axborotni imkon qadar yashirish',
        'Faqat reklama qilish',
        'Faqat rahbariyatga ma’lumot berish'
      ],
      answer: 0,
      explanation: 'Raqamli imij va axborot siyosati ochiqlik, shaffoflik, tezkorlik va ishonchlilikni kuchaytiradi.'
    },
    {
      id: 'm1t6m26',
      text: 'Maktabning salbiy imijini yaxshilashda eng to‘g‘ri yondashuv qaysi?',
      options: [
        'Muammoning sababini aniqlash, real faoliyatni yaxshilash va to‘g‘ri kommunikatsiya qilish',
        'Faqat reklama hajmini oshirish',
        'Salbiy fikr bildiruvchilarni bloklash',
        'Muammoni inkor qilish'
      ],
      answer: 0,
      explanation: 'Barqaror imij real muammolarni hal qilish va ochiq, madaniyatli kommunikatsiya orqali shakllanadi.'
    },
    {
      id: 'm1t6m27',
      text: 'Maktab PR faoliyatida OAV bilan hamkorlik qanday maqsadga xizmat qiladi?',
      options: [
        'Maktab faoliyati haqida to‘g‘ri va ishonchli axborot yetkazishga',
        'Faqat reklama xarajatini oshirishga',
        'Faqat ichki hujjatlarni yuritishga',
        'Faqat tadbirlar sonini ko‘paytirishga'
      ],
      answer: 0,
      explanation: 'OAV bilan to‘g‘ri hamkorlik maktab haqidagi ishonchli axborotni jamoatchilikka yetkazishda muhim.'
    },
    {
      id: 'm1t6m28',
      text: 'Maktab imijini shakllantirishda ota-onalar fikrini o‘rganishning foydasi nimada?',
      options: [
        'Maktab faoliyatining jamoatchilik tomonidan qanday qabul qilinayotganini aniqlashga yordam beradi',
        'Faqat tadbirlarni ko‘paytiradi',
        'Faqat baholarni o‘zgartiradi',
        'Faqat reklama yaratadi'
      ],
      answer: 0,
      explanation: 'Ota-onalar fikri tashqi imij va jamoatchilik munosabatini tahlil qilish uchun muhim manbadir.'
    },
    {
      id: 'm1t6m29',
      text: '“Tezkorlik” va “haqiqiylik” tamoyillari birgalikda nimani ta’minlashga yordam beradi?',
      options: [
        'O‘z vaqtida berilgan ishonchli axborotni',
        'Faqat reklama samaradorligini',
        'Faqat tadbirlar sonini',
        'Faqat ichki nazoratni'
      ],
      answer: 0,
      explanation: 'Tezkor va real faktlarga asoslangan axborot ishonchni mustahkamlashga xizmat qiladi.'
    },
    {
      id: 'm1t6m30',
      text: 'Maktab imijining uzoq muddatli barqarorligi nimaga ko‘proq bog‘liq?',
      options: [
        'Real sifat, qadriyatlar, xavfsizlik, adolat, ochiqlik va tizimli kommunikatsiyaga',
        'Faqat reklama soniga',
        'Faqat logotipga',
        'Faqat ijtimoiy tarmoqdagi obunachilar soniga'
      ],
      answer: 0,
      explanation: 'Barqaror imij maktabning real faoliyati va tizimli kommunikatsiyasi uyg‘unligida shakllanadi.'
    }
  ],

  hard: [
    {
      id: 'm1t6h01',
      text: 'Maktab imijini boshqarishda “imij — natija” tamoyilining strategik mazmuni nimada?',
      options: [
        'Avvalo ichki faoliyat va ta’lim sifati yaxshilanib, keyin kommunikatsiya orqali reputatsiya mustahkamlanadi',
        'Imijni faqat reklama orqali yaratish mumkin',
        'Tashqi ko‘rinish ichki sifatdan muhimroq',
        'Natijalar bo‘lmasa ham PR yetarli'
      ],
      answer: 0,
      explanation: 'Barqaror imijning asosi real natija va sifatdir; PR esa ushbu natijalarni to‘g‘ri va madaniyatli tarzda yetkazadi.'
    },
    {
      id: 'm1t6h02',
      text: 'Ichki imij va tashqi imij o‘rtasidagi eng to‘g‘ri bog‘liqlik qaysi?',
      options: [
        'Ichki imij mustahkamligi tashqi imijning barqarorligiga asos yaratadi',
        'Ular bir-biridan butunlay mustaqil',
        'Faqat tashqi imij muhim',
        'Ichki imij tashqi imijga salbiy ta’sir qiladi'
      ],
      answer: 0,
      explanation: 'Ichki muhitdagi sifat, munosabat va boshqaruv tashqi manfaatdor tomonlarning maktab haqidagi tasavvuriga ta’sir qiladi.'
    },
    {
      id: 'm1t6h03',
      text: 'Maktab rahbari ijtimoiy tarmoqlarda juda faol, ammo ta’lim sifati bilan bog‘liq muammolar mavjud. Qaysi xulosa eng asosli?',
      options: [
        'Faqat faol PR barqaror ijobiy imijni kafolatlamaydi',
        'Ko‘p post muammolarni avtomatik hal qiladi',
        'Ijtimoiy tarmoq ta’lim sifatidan muhimroq',
        'Muammolarni yashirish imijni mustahkamlaydi'
      ],
      answer: 0,
      explanation: 'Materialga ko‘ra, imij real sifat va natijaga tayanishi kerak.'
    },
    {
      id: 'm1t6h04',
      text: 'Maktab PR strategiyasini ishlab chiqishda eng maqbul ketma-ketlik qaysi?',
      options: [
        'Tahlil → rejalashtirish → amalga oshirish → monitoring → takomillashtirish',
        'Rejalashtirish → monitoring → tahlil → amalga oshirish',
        'Amalga oshirish → reklama → tahlil → monitoring',
        'Monitoring → tadbir → reklama → reja'
      ],
      answer: 0,
      explanation: 'Materialda PR faoliyatining besh bosqichli tizimi aynan shu ketma-ketlikda berilgan.'
    },
    {
      id: 'm1t6h05',
      text: 'Maktabda feyk xabar tarqaldi. Rahbarning qaysi yondashuvi PR nuqtayi nazaridan eng tizimli?',
      options: [
        'Faktlarni aniqlash, rasmiy pozitsiyani shakllantirish va tezkor aniq axborot berish',
        'Xabarni izohsiz qoldirish',
        'Mish-mishni boshqa mish-mish bilan rad etish',
        'Barcha ijtimoiy tarmoqlarni yopish'
      ],
      answer: 0,
      explanation: 'Inqirozli vaziyatlarda faktga asoslangan, tezkor va rasmiy kommunikatsiya muhim.'
    },
    {
      id: 'm1t6h06',
      text: 'Shaffoflik tamoyili maktab imijiga qaysi mexanizm orqali ta’sir qiladi?',
      options: [
        'Qarorlar, qoidalar va baholash mezonlarining tushunarliligi orqali ishonchni oshiradi',
        'Barcha ma’lumotlarni cheklash orqali',
        'Faqat reklama orqali',
        'Faqat tadbirlar orqali'
      ],
      answer: 0,
      explanation: 'Shaffof boshqaruv manfaatdor tomonlarda ishonchni kuchaytiradi.'
    },
    {
      id: 'm1t6h07',
      text: 'Maktab raqamli imijining ishonchliligini baholashda qaysi mezonlar majmuasi muhimroq?',
      options: [
        'Axborotning aniqligi, tezkorligi, muntazamligi va professional taqdimoti',
        'Faqat postlar soni',
        'Faqat obunachilar soni',
        'Faqat dizayn sifati'
      ],
      answer: 0,
      explanation: 'Raqamli imij faqat faollik emas, balki ishonchli, tezkor va professional axborotga tayanadi.'
    },
    {
      id: 'm1t6h08',
      text: 'Maktabda yaxshi natijalar bor, lekin ular jamoatchilikka yetkazilmaydi. Qaysi muammo yuzaga kelishi mumkin?',
      options: [
        'Real yutuqlar bilan jamoatchilik tasavvuri o‘rtasida tafovut paydo bo‘lishi',
        'Ta’lim sifati avtomatik pasayishi',
        'O‘quvchilar soni avtomatik kamayishi',
        'Ichki imij darhol yo‘qolishi'
      ],
      answer: 0,
      explanation: 'Axborot yetarli bo‘lmasa, jamoatchilik maktabning real natijalaridan bexabar qolishi mumkin.'
    },
    {
      id: 'm1t6h09',
      text: 'Maktab imijini kuchaytirishda hamkorlik tamoyilining strategik ahamiyati nimada?',
      options: [
        'Maktabning ijtimoiy kapitali va hamkorlik imkoniyatlarini kengaytiradi',
        'Faqat tadbirlar sonini oshiradi',
        'Faqat moliyaviy xarajatlarni ko‘paytiradi',
        'Faqat ichki intizomni nazorat qiladi'
      ],
      answer: 0,
      explanation: 'Mahalla, OTM, korxona, OAV va NNT bilan hamkorlik maktabning ijtimoiy sheriklik imkoniyatlarini kengaytiradi.'
    },
    {
      id: 'm1t6h10',
      text: 'Maktab imijini boshqarishda insonparvarlik tamoyili buzilsa, qanday xavf yuzaga kelishi mumkin?',
      options: [
        'Ishonch va ijobiy munosabatlar zaiflashishi mumkin',
        'Reklama samaradorligi avtomatik oshadi',
        'Raqamli imij kuchayadi',
        'Maktabning yutuqlari ko‘payadi'
      ],
      answer: 0,
      explanation: 'Hurmat va e’tiborning yetishmasligi maktab jamoasi va ota-onalar ishonchiga salbiy ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t6h11',
      text: 'PR strategiyasining monitoring bosqichida qaysi savol eng muhim?',
      options: [
        'Amalga oshirilgan kommunikatsiya va tadbirlar qanday natija berdi?',
        'Yana qancha banner chiqarish kerak?',
        'Qaysi xodimni boshqa ishga o‘tkazish kerak?',
        'Faqat nechta tadbir o‘tkazildi?'
      ],
      answer: 0,
      explanation: 'Monitoringning asosiy maqsadi PR faoliyatining natijasi va samaradorligini aniqlashdir.'
    },
    {
      id: 'm1t6h12',
      text: 'Maktab imijini shakllantirishda “barqarorlik” va “tezkorlik” o‘rtasidagi munosabat qanday?',
      options: [
        'Barqaror tizim doimiy kommunikatsiyani, tezkorlik esa muhim axborotga o‘z vaqtida javob berishni ta’minlaydi',
        'Ular bir-biriga zid va bir vaqtda qo‘llanmaydi',
        'Faqat tezkorlik yetarli',
        'Faqat barqarorlik yetarli'
      ],
      answer: 0,
      explanation: 'Barqarorlik tizimlilikni, tezkorlik esa axborot muhitidagi o‘z vaqtida javobni ta’minlaydi.'
    },
    {
      id: 'm1t6h13',
      text: 'Maktab rahbari jamoatchilik fikrini o‘rganmasdan PR reja tuzdi. Qaysi bosqich e’tibordan chetda qolgan?',
      options: [
        'Tahlil',
        'Amalga oshirish',
        'Monitoring',
        'Takomillashtirish'
      ],
      answer: 0,
      explanation: 'PR strategiyasidan oldin maktabning hozirgi imiji va jamoatchilik fikri tahlil qilinishi kerak.'
    },
    {
      id: 'm1t6h14',
      text: 'Maktabning tashqi imijini yaxshilash uchun faqat binoni ta’mirlash yetarlimi?',
      options: [
        'Yo‘q, ta’lim sifati, yutuqlar, ota-onalar bilan hamkorlik va kommunikatsiya ham muhim',
        'Ha, bino imijning yagona omili',
        'Ha, boshqa omillar kerak emas',
        'Faqat reklama bilan almashtirish kerak'
      ],
      answer: 0,
      explanation: 'Tashqi imij ko‘plab omillarning yig‘indisi: bino, ta’lim natijalari, hamkorlik va axborot faoliyati.'
    },
    {
      id: 'm1t6h15',
      text: 'Maktabning ichki imijini kuchaytirishning eng tizimli yo‘li qaysi?',
      options: [
        'Kasbiy rivojlanish, sog‘lom psixologik muhit, sifatli ta’lim va hurmatga asoslangan muloqotni rivojlantirish',
        'Faqat tashqi reklama',
        'Faqat bino dizaynini o‘zgartirish',
        'Faqat ijtimoiy tarmoqda post berish'
      ],
      answer: 0,
      explanation: 'Ichki imij jamoa va ta’lim jarayonining real sifatiga tayanadi.'
    },
    {
      id: 'm1t6h16',
      text: 'Maktab rahbari uchun raqamli imijni boshqarishning eng muhim jihatlaridan biri qaysi?',
      options: [
        'Axborot siyosatini aniq va tizimli tashkil etish',
        'Faqat ko‘proq reklama joylashtirish',
        'Faqat video sonini oshirish',
        'Faqat obunachilarni ko‘paytirish'
      ],
      answer: 0,
      explanation: 'Raqamli imij axborot siyosatining ochiqligi, tezkorligi, ishonchliligi va xavfsizligiga bog‘liq.'
    },
    {
      id: 'm1t6h17',
      text: 'Maktabdagi salbiy fikrlar ko‘paydi, ammo rahbariyat muammoni tan olmayapti. Qaysi tamoyil eng avvalo buzilgan?',
      options: [
        'Haqiqiylik va shaffoflik',
        'Faqat hamkorlik',
        'Faqat barqarorlik',
        'Faqat dizayn'
      ],
      answer: 0,
      explanation: 'Muammoni inkor qilish real vaziyatni tan olish va ochiq kommunikatsiya tamoyillariga zid.'
    },
    {
      id: 'm1t6h18',
      text: 'Maktab yutuqlarini ijtimoiy tarmoqlarda yoritishning eng to‘g‘ri usuli qaysi?',
      options: [
        'Tasdiqlangan natijalarni aniq, muntazam va professional tarzda yoritish',
        'Har qanday natijani bo‘rttirish',
        'Faqat reklama shiorlaridan foydalanish',
        'Tasdiqlanmagan ma’lumotlarni tezroq chiqarish'
      ],
      answer: 0,
      explanation: 'PRda haqiqiylik va ishonchlilik muhim. Yutuqlar tasdiqlangan faktlar asosida yoritilishi kerak.'
    },
    {
      id: 'm1t6h19',
      text: 'Maktab imijining “himoya reputatsiyasi” qaysi vaziyatda ayniqsa muhim?',
      options: [
        'Mojaro, feyk xabar yoki bahsli vaziyatlarda',
        'Faqat sport musobaqalarida',
        'Faqat dars jadvalini tuzishda',
        'Faqat moliyaviy hisobotda'
      ],
      answer: 0,
      explanation: 'Kuchli reputatsiya inqirozli va bahsli vaziyatlarda manfaatdor tomonlarning ishonchini saqlashga yordam beradi.'
    },
    {
      id: 'm1t6h20',
      text: 'Maktabning imijini boshqarish jarayonida rahbarning kommunikativ roli nimadan iborat?',
      options: [
        'Ichki va tashqi manfaatdor tomonlar bilan izchil, ochiq va madaniyatli muloqotni tashkil etish',
        'Faqat buyruq berish',
        'Faqat ijtimoiy tarmoqni yuritish',
        'Faqat OAVga intervyu berish'
      ],
      answer: 0,
      explanation: 'Rahbar kommunikatsiyani tizimli boshqarib, maktabning ichki va tashqi aloqalarini uyg‘unlashtiradi.'
    },
    {
      id: 'm1t6h21',
      text: 'Maktab PR faoliyatida “monitoring” va “takomillashtirish” o‘rtasidagi bog‘liqlik nimada?',
      options: [
        'Monitoring kamchilik va natijalarni aniqlaydi, takomillashtirish esa shu ma’lumotlar asosida choralar belgilaydi',
        'Ikkalasi bir xil jarayon',
        'Takomillashtirish monitoringdan oldin bo‘ladi',
        'Monitoring faqat reklama uchun kerak'
      ],
      answer: 0,
      explanation: 'Monitoring natijalari keyingi takomillashtirish choralarini belgilash uchun asos bo‘ladi.'
    },
    {
      id: 'm1t6h22',
      text: 'Maktabning tashqi imijini kuchaytirishda o‘quvchi yutuqlari nima uchun muhim?',
      options: [
        'Ular ta’lim natijalarining jamoatchilik uchun ko‘rinadigan dalillaridan biridir',
        'Faqat reklama uchun kerak',
        'Ichki imijga hech qanday aloqasi yo‘q',
        'Faqat moliyaviy natijani ko‘rsatadi'
      ],
      answer: 0,
      explanation: 'O‘quvchi yutuqlari maktabning ta’limiy salohiyati haqida jamoatchilikka real signal beradi.'
    },
    {
      id: 'm1t6h23',
      text: 'Maktab imijida “raqamli” va “an’anaviy” PR vositalarini birlashtirishning afzalligi nimada?',
      options: [
        'Turli auditoriyalarga turli kanallar orqali izchil axborot yetkazish imkonini beradi',
        'Faqat xarajatlarni oshiradi',
        'An’anaviy vositalarni butunlay yo‘q qiladi',
        'Faqat ijtimoiy tarmoqqa bog‘lab qo‘yadi'
      ],
      answer: 0,
      explanation: 'An’anaviy va zamonaviy PR vositalarini uyg‘unlashtirish kommunikatsiya qamrovini kengaytiradi.'
    },
    {
      id: 'm1t6h24',
      text: 'Maktabning imijiy materiali qanday xususiyatga ega bo‘lishi kerak?',
      options: [
        'Aniq, ishonchli, maktab faoliyatini real aks ettiruvchi va tushunarli',
        'Bo‘rttirilgan va tekshirilmagan',
        'Faqat reklama shiorlaridan iborat',
        'Faqat rasmiy atamalardan iborat'
      ],
      answer: 0,
      explanation: 'Imijiy materiallar maktabning real faoliyatini ishonchli va tushunarli tarzda aks ettirishi kerak.'
    },
    {
      id: 'm1t6h25',
      text: 'Maktab imijining jamiyatdagi nufuzga ta’sirini qanday tushuntirish mumkin?',
      options: [
        'Maktab haqidagi ijobiy va ishonchli tasavvur uning ijtimoiy nufuzini mustahkamlaydi',
        'Imij nufuzga ta’sir qilmaydi',
        'Faqat bino nufuzni belgilaydi',
        'Faqat reklama nufuzni belgilaydi'
      ],
      answer: 0,
      explanation: 'Imij maktab haqida jamiyatda shakllangan tasavvur bo‘lib, u nufuz bilan bevosita bog‘liq.'
    },
    {
      id: 'm1t6h26',
      text: 'Maktab rahbari jamoatchilikka faqat ijobiy xabarlarni berib, muammolar haqida hech qachon axborot bermasa, qaysi xavf paydo bo‘lishi mumkin?',
      options: [
        'Ishonch pasayishi va axborotga nisbatan shubha paydo bo‘lishi',
        'Shaffoflik kuchayishi',
        'Haqiqiylik ortishi',
        'Jamoatchilik ishonchi avtomatik oshishi'
      ],
      answer: 0,
      explanation: 'Faqat ijobiy axborotni berish va muammolarni yashirish shaffoflik va ishonchlilikka salbiy ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t6h27',
      text: 'Maktab PR strategiyasida jamoatchilik fikri salbiy ekanligi aniqlansa, keyingi eng maqbul qadam qaysi?',
      options: [
        'Salbiy fikrlarning sabablarini tahlil qilib, real muammolar bo‘yicha yechim ishlab chiqish',
        'Jamoatchilik fikrini inkor qilish',
        'Faqat reklama hajmini oshirish',
        'Tanqidlarni o‘chirish'
      ],
      answer: 0,
      explanation: 'PR strategiyasi real muammolarni aniqlash va ularni bartaraf etishga yo‘naltirilishi kerak.'
    },
    {
      id: 'm1t6h28',
      text: 'Maktab imijini boshqarishda “hamkorlik” tamoyilining amaliy ko‘rsatkichi qaysi?',
      options: [
        'Mahalla, OTM, korxona, OAV va NNT bilan tizimli loyihalar va aloqalar',
        'Faqat maktab ichidagi yig‘ilishlar',
        'Faqat direktorning qarorlari',
        'Faqat reklama postlari'
      ],
      answer: 0,
      explanation: 'Hamkorlik tamoyili tashqi manfaatdor tomonlar bilan tizimli aloqalarni nazarda tutadi.'
    },
    {
      id: 'm1t6h29',
      text: 'Maktab imijini boshqarishda eng xavfli yondashuvlardan biri qaysi?',
      options: [
        'Real muammolarni hal qilmasdan, faqat tashqi ko‘rinishni yaxshilashga urinish',
        'Ta’lim sifatini oshirish',
        'Jamoa bilan ishlash',
        'Jamoatchilik fikrini o‘rganish'
      ],
      answer: 0,
      explanation: 'Faqat tashqi PRga tayanish real muammolarni bartaraf etmasa, imij uzoq muddatli barqaror bo‘lmaydi.'
    },
    {
      id: 'm1t6h30',
      text: 'Zamonaviy maktab menejeri uchun imij boshqaruvining eng kompleks modeli qaysi?',
      options: [
        'Sifat + qadriyat + xavfsizlik + adolat + ochiqlik + kommunikatsiya + monitoring',
        'Reklama + banner + logo',
        'Faqat ijtimoiy tarmoq + video',
        'Faqat bino + tadbir'
      ],
      answer: 0,
      explanation: 'Materialda imij maktabning sifat, qadriyat, xavfsizlik, adolat va ochiqligi bilan bog‘langan kompleks natija sifatida ko‘rsatilgan.'
    }
  ],

  case: [
    {
      id: 'm1t6c01',
      text: 'Maktabda o‘quvchilar yutuqlari ko‘p, ammo Telegram sahifasi oylar davomida yangilanmagan. Ota-onalar maktabdagi natijalardan bexabar. Rahbarning birinchi strategik harakati qaysi?',
      options: [
        'Maktabning hozirgi axborot holatini tahlil qilib, muntazam PR rejasini ishlab chiqish',
        'Faqat bitta katta reklama tadbiri o‘tkazish',
        'Barcha eski postlarni o‘chirish',
        'Ota-onalarga axborot bermaslik'
      ],
      answer: 0,
      explanation: 'Avval mavjud holat va muammo tahlil qilinadi, keyin tizimli PR reja ishlab chiqiladi.'
    },
    {
      id: 'm1t6c02',
      text: 'Ijtimoiy tarmoqda maktab haqida tasdiqlanmagan salbiy xabar tarqaldi. Rahbar qanday yo‘l tutishi maqsadga muvofiq?',
      options: [
        'Faktlarni tekshirib, rasmiy pozitsiyani shakllantirib, tezkor va aniq axborot berish',
        'Xabarni darhol boshqa xabar bilan yopish',
        'Muammoni butunlay inkor qilish',
        'Hech qanday izoh bermaslik'
      ],
      answer: 0,
      explanation: 'Inqirozli vaziyatda tezkor, aniq va faktlarga asoslangan rasmiy kommunikatsiya zarur.'
    },
    {
      id: 'm1t6c03',
      text: 'Maktabning tashqi ko‘rinishi juda yaxshi, lekin jamoada pedagoglar o‘rtasida nizolar va noroziliklar mavjud. Imijni barqarorlashtirish uchun nimadan boshlash kerak?',
      options: [
        'Ichki imij va jamoa psixologik muhitini yaxshilashdan',
        'Yangi reklama bannerlarini tayyorlashdan',
        'Faqat ijtimoiy tarmoqdagi postlarni ko‘paytirishdan',
        'Faqat maktab logotipini yangilashdan'
      ],
      answer: 0,
      explanation: 'Ichki imij mustahkam bo‘lmasa, tashqi imij barqaror bo‘la olmaydi.'
    },
    {
      id: 'm1t6c04',
      text: 'Maktab rahbari barcha qarorlarni ochiq e’lon qilmaydi, ota-onalar baholash mezonlarini tushunmaydi. Ishonch pasaymoqda. Qaysi tamoyilni kuchaytirish kerak?',
      options: [
        'Shaffoflik',
        'Faqat reklama',
        'Faqat tezkorlik',
        'Faqat dizayn'
      ],
      answer: 0,
      explanation: 'Qarorlar va baholash mezonlarining tushunarli bo‘lishi shaffoflik va ishonchni ta’minlaydi.'
    },
    {
      id: 'm1t6c05',
      text: 'Maktab rahbari PR rejasini tuzmoqchi. Jamoatchilik fikri o‘rganilmagan. Qaysi ketma-ketlik to‘g‘ri?',
      options: [
        'Avval tahlil, keyin rejalashtirish',
        'Avval reklama, keyin tahlil',
        'Avval monitoring, keyin muammo',
        'Avval takomillashtirish, keyin tahlil'
      ],
      answer: 0,
      explanation: 'PR faoliyatida avval mavjud imij va jamoatchilik fikri tahlil qilinadi, keyin strategiya va reja ishlab chiqiladi.'
    },
    {
      id: 'm1t6c06',
      text: 'Maktabning ta’lim sifati yaxshi, lekin ota-onalar bilan aloqa sust. Qaysi chora tashqi imijni mustahkamlashga ko‘proq xizmat qiladi?',
      options: [
        'Ota-onalar bilan muntazam, ochiq va ikki tomonlama kommunikatsiya tizimini yo‘lga qo‘yish',
        'Faqat reklama bannerlarini ko‘paytirish',
        'Faqat maktab binosini bezash',
        'Faqat o‘quvchilar rasmlarini joylashtirish'
      ],
      answer: 0,
      explanation: 'Ota-onalar bilan hamkorlik va ochiq muloqot tashqi imij hamda ishonchni mustahkamlaydi.'
    },
    {
      id: 'm1t6c07',
      text: 'Maktabda yaxshi yutuqlar mavjud, ammo ijtimoiy tarmoqda natijalar bo‘rttirib ko‘rsatilmoqda. Rahbar nima qilishi kerak?',
      options: [
        'Faqat tasdiqlangan va real natijalarni professional tarzda yoritish',
        'Bo‘rttirishni davom ettirish',
        'Yana ko‘proq reklama qilish',
        'Natijalarni umuman e’lon qilmaslik'
      ],
      answer: 0,
      explanation: 'Haqiqiylik tamoyiliga ko‘ra, imij real faoliyat va tasdiqlangan natijalarga tayanishi kerak.'
    },
    {
      id: 'm1t6c08',
      text: 'Maktab PR faoliyati bir yil davomida olib borildi. Rahbar uning samaradorligini aniqlamoqchi. Nima qilishi kerak?',
      options: [
        'Monitoring o‘tkazib, natijalarni baholashi va keyingi takomillashtirish choralarini belgilashi kerak',
        'Faqat postlar sonini sanashi kerak',
        'Faqat tadbirlar sonini ko‘rishi kerak',
        'PR faoliyatini to‘xtatishi kerak'
      ],
      answer: 0,
      explanation: 'Monitoring natijalarni baholash, keyingi takomillashtirish esa aniqlangan kamchiliklar asosida chora ko‘rishni anglatadi.'
    },
    {
      id: 'm1t6c09',
      text: 'Maktab rahbari mahalla, OTM va korxonalar bilan hamkorlikni yo‘lga qo‘ydi. Bu qaysi imij tamoyilini kuchaytiradi?',
      options: [
        'Hamkorlik',
        'Faqat tezkorlik',
        'Faqat barqarorlik',
        'Faqat nazorat'
      ],
      answer: 0,
      explanation: 'Mahalla, OTM va korxonalar bilan hamkorlik maktab imijini shakllantirishdagi hamkorlik tamoyilining amaliy ko‘rinishidir.'
    },
    {
      id: 'm1t6c10',
      text: 'Maktabda salbiy imij shakllangan. Rahbar muammoni faqat reklama orqali bartaraf etmoqchi. Qaysi yondashuv to‘g‘riroq?',
      options: [
        'Avval salbiy imijning real sabablarini aniqlash va ichki muammolarni hal qilish, keyin kommunikatsiyani kuchaytirish',
        'Faqat reklama budjetini oshirish',
        'Salbiy fikrlarni o‘chirish',
        'Jamoatchilik bilan aloqani to‘xtatish'
      ],
      answer: 0,
      explanation: 'Barqaror ijobiy imij real muammolarni hal qilishdan boshlanadi. PR esa bu natijalarni to‘g‘ri yetkazish bilan uni mustahkamlaydi.'
    }
  ]
}
