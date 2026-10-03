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
      text: 'Maktab imiji tushunchasiga eng to‘g‘ri ta’rif qaysi?',
      options: [
        'Maktab binosining tashqi ko‘rinishi',
        'Maktabning ijtimoiy tarmoqlardagi sahifasi',
        'Maktab haqida manfaatdor tomonlarda shakllangan umumiy tasavvur',
        'Direktorning shaxsiy obro‘si'
      ],
      answer: 2,
      explanation:
        'Imij bitta obyekt yoki shaxs bilan cheklanmaydi; u maktab faoliyati haqida turli manfaatdor tomonlarda shakllangan umumiy tasavvurni bildiradi.'
    },
    {
      id: 'm1t6e02',
      text: 'Maktab imiji eng avvalo nimaga tayanishi kerak?',
      options: [
        'Real faoliyat va natijalarga',
        'Ko‘p sonli reklama materiallariga',
        'Tashqi bezaklarga',
        'Ijtimoiy tarmoqdagi faollikka'
      ],
      answer: 0,
      explanation:
        'Barqaror imijning asosi real faoliyat, sifat va natijalardir. Kommunikatsiya esa shu asosni jamoatchilikka yetkazadi.'
    },
    {
      id: 'm1t6e03',
      text: 'Ichki imij asosan qaysi muhit bilan bog‘liq?',
      options: [
        'Faqat OAV bilan',
        'Maktab jamoasi ichidagi munosabat va muhit bilan',
        'Faqat mahalla bilan',
        'Faqat internetdagi auditoriya bilan'
      ],
      answer: 1,
      explanation:
        'Ichki imij maktabdagi pedagoglar, xodimlar va o‘quvchilar o‘rtasidagi munosabatlar, madaniyat va muhit bilan chambarchas bog‘liq.'
    },
    {
      id: 'm1t6e04',
      text: 'Tashqi imij ko‘proq qaysi guruhlarning maktab haqidagi tasavvurida namoyon bo‘ladi?',
      options: [
        'Faqat direktorlar',
        'Faqat o‘qituvchilar',
        'Faqat o‘quvchilar',
        'Ota-onalar va boshqa tashqi manfaatdor tomonlar'
      ],
      answer: 3,
      explanation:
        'Tashqi imij maktabdan tashqaridagi manfaatdor tomonlarning maktab haqidagi tasavvurida namoyon bo‘ladi.'
    },
    {
      id: 'm1t6e05',
      text: 'Maktabning ichki imijiga qaysi omil bevosita ta’sir qiladi?',
      options: [
        'Pedagoglar o‘rtasidagi hamkorlik',
        'Faqat reklama banneri',
        'Faqat maktab logotipi',
        'Faqat OAVdagi maqola'
      ],
      answer: 0,
      explanation:
        'Jamoa ichidagi hamkorlik va munosabatlar ichki muhitni belgilaydi va shu sababli ichki imijga bevosita ta’sir ko‘rsatadi.'
    },
    {
      id: 'm1t6e06',
      text: 'PR qisqartmasi nimani anglatadi?',
      options: [
        'Professional Ranking',
        'Public Relations',
        'Personal Result',
        'Public Regulation'
      ],
      answer: 1,
      explanation:
        'PR — Public Relations, ya’ni jamoatchilik bilan aloqalarni tashkil etish va boshqarish faoliyatidir.'
    },
    {
      id: 'm1t6e07',
      text: 'Maktab PR faoliyatining asosiy vazifalaridan biri qaysi?',
      options: [
        'Faqat reklama xarajatlarini oshirish',
        'Faqat tadbirlar sonini ko‘paytirish',
        'Maktab va jamoatchilik o‘rtasidagi ishonchli aloqani rivojlantirish',
        'Faqat ijtimoiy tarmoqdagi obunachilarni ko‘paytirish'
      ],
      answer: 2,
      explanation:
        'PRning mazmuni faqat reklama emas; uning muhim vazifasi maktab va jamoatchilik o‘rtasidagi munosabatlarni mustahkamlashdir.'
    },
    {
      id: 'm1t6e08',
      text: 'Qaysi biri zamonaviy PR vositasiga misol bo‘la oladi?',
      options: [
        'Ijtimoiy tarmoq',
        'Faqat maktab eshigi',
        'Faqat sinf jurnali',
        'Faqat ichki buyruq'
      ],
      answer: 0,
      explanation:
        'Ijtimoiy tarmoqlar keng auditoriya bilan tezkor aloqa qilish imkonini beradigan zamonaviy kommunikatsiya vositalaridan biridir.'
    },
    {
      id: 'm1t6e09',
      text: 'Ochiq eshiklar kuni maktab uchun qanday imkoniyat yaratadi?',
      options: [
        'Faqat ichki nazoratni kuchaytiradi',
        'Jamoatchilikni maktab faoliyati bilan bevosita tanishtiradi',
        'Faqat hujjatlar sonini oshiradi',
        'Faqat o‘qituvchilar yig‘ilishini tashkil qiladi'
      ],
      answer: 1,
      explanation:
        'Ochiq eshiklar kuni tashqi manfaatdor tomonlarga maktab faoliyati va muhitini bevosita ko‘rish imkonini beradi.'
    },
    {
      id: 'm1t6e10',
      text: 'Maktab imijini shakllantirishda qaysi tamoyil real ma’lumotlarga tayanishni anglatadi?',
      options: [
        'Tezkorlik',
        'Barqarorlik',
        'Haqiqiylik',
        'Hamkorlik'
      ],
      answer: 2,
      explanation:
        'Haqiqiylik tamoyili maktab haqidagi axborot real faoliyat va tasdiqlangan natijalarga mos bo‘lishini talab qiladi.'
    },
    {
      id: 'm1t6e11',
      text: 'Shaffoflik tamoyilining asosiy natijalaridan biri qaysi?',
      options: [
        'Ishonchning kuchayishi',
        'Axborotning kamayishi',
        'Muloqotning yopilishi',
        'Faqat reklama hajmining ortishi'
      ],
      answer: 0,
      explanation:
        'Jarayon va mezonlar tushunarli bo‘lsa, manfaatdor tomonlar maktab faoliyatiga nisbatan ko‘proq ishonch hosil qilishi mumkin.'
    },
    {
      id: 'm1t6e12',
      text: 'Insonparvarlik tamoyili maktab imijida nimani anglatadi?',
      options: [
        'Faqat intizomni kuchaytirish',
        'O‘quvchi, ota-ona va xodimga hurmat bilan munosabatda bo‘lish',
        'Faqat reklama qilish',
        'Faqat rahbar fikrini ustun qo‘yish'
      ],
      answer: 1,
      explanation:
        'Insonparvarlik maktabdagi insoniy munosabatlar, hurmat va manfaatlarni hisobga olish orqali namoyon bo‘ladi.'
    },
    {
      id: 'm1t6e13',
      text: 'Hamkorlik tamoyiliga mos faoliyatni toping.',
      options: [
        'Mahalla va boshqa hamkor tashkilotlar bilan aloqalarni rivojlantirish',
        'Tashqi tashkilotlardan barcha aloqalarni uzish',
        'Faqat ichki yig‘ilishlar o‘tkazish',
        'Faqat reklama joylashtirish'
      ],
      answer: 0,
      explanation:
        'Hamkorlik tamoyili maktabning tashqi manfaatdor tomonlar bilan tizimli munosabatlarini nazarda tutadi.'
    },
    {
      id: 'm1t6e14',
      text: 'Tezkorlik tamoyili ayniqsa qaysi holatda muhim?',
      options: [
        'Maktab logotipini tanlashda',
        'Sinf mebellarini joylashtirishda',
        'Muhim va bahsli axborotga javob berishda',
        'Yillik ta’tilni belgilashda'
      ],
      answer: 2,
      explanation:
        'Muhim axborotga kechikib javob berish noto‘g‘ri talqinlar va mish-mishlar kuchayishiga sabab bo‘lishi mumkin.'
    },
    {
      id: 'm1t6e15',
      text: 'Maktab imiji faqat tashqi ko‘rinishdan iborat emasligini qaysi javob yaxshiroq ifodalaydi?',
      options: [
        'Imij faqat logotipga bog‘liq',
        'Imij sifat, qadriyat, munosabat va natijalar bilan ham bog‘liq',
        'Imij faqat direktor faoliyatidir',
        'Imij faqat reklama mahsulotidir'
      ],
      answer: 1,
      explanation:
        'Maktab imiji ko‘rinishdan tashqari ta’lim sifati, qadriyatlar, xavfsizlik, adolat, munosabat va natijalar bilan shakllanadi.'
    },
    {
      id: 'm1t6e16',
      text: 'PR jarayonining dastlabki bosqichida odatda nima aniqlanadi?',
      options: [
        'Mavjud holat va jamoatchilik fikri',
        'Faqat reklama dizayni',
        'Faqat tadbirlar soni',
        'Faqat moliyaviy xarajat'
      ],
      answer: 0,
      explanation:
        'Samarali rejalashtirishdan oldin maktabning mavjud imiji va manfaatdor tomonlar fikri o‘rganiladi.'
    },
    {
      id: 'm1t6e17',
      text: 'Monitoringning asosiy maqsadi nima?',
      options: [
        'Yangi logo tanlash',
        'PR faoliyati natijalarini kuzatish va baholash',
        'Faqat tadbir tashkil qilish',
        'Faqat xodimlarni almashtirish'
      ],
      answer: 1,
      explanation:
        'Monitoring amalga oshirilgan ishlarning natijasi va samaradorligini kuzatish uchun xizmat qiladi.'
    },
    {
      id: 'm1t6e18',
      text: 'Maktabning raqamli imiji asosan qayerlarda namoyon bo‘ladi?',
      options: [
        'Faqat maktab hovlisida',
        'Faqat sinf xonasida',
        'Veb-sayt va ijtimoiy platformalarda',
        'Faqat direktor xonasida'
      ],
      answer: 2,
      explanation:
        'Raqamli imij internetdagi rasmiy sahifalar, ijtimoiy tarmoqlar va boshqa raqamli kanallardagi maktab haqidagi tasavvur bilan bog‘liq.'
    },
    {
      id: 'm1t6e19',
      text: 'O‘quvchilar yutuqlarini yoritish maktab imijiga qanday ta’sir qilishi mumkin?',
      options: [
        'Maktabning real natijalarini jamoatchilikka ko‘rsatadi',
        'Faqat ichki hujjatlar sonini oshiradi',
        'Faqat bino ko‘rinishini o‘zgartiradi',
        'Ta’lim jarayoniga aloqasi yo‘q'
      ],
      answer: 0,
      explanation:
        'Tasdiqlangan o‘quvchi yutuqlari maktabdagi ta’lim natijalarining tashqi auditoriyaga ko‘rinadigan dalillaridan biridir.'
    },
    {
      id: 'm1t6e20',
      text: 'Maktab rahbarining imijni boshqarishdagi muhim vazifalaridan biri qaysi?',
      options: [
        'Faqat tadbirlarda qatnashish',
        'Faqat ijtimoiy tarmoqda post yozish',
        'Sifat va kommunikatsiyani tizimli boshqarish',
        'Faqat reklama materiallarini tasdiqlash'
      ],
      answer: 2,
      explanation:
        'Rahbar imijni alohida reklama vazifasi sifatida emas, sifat, jamoa madaniyati va kommunikatsiya bilan bog‘liq tizim sifatida boshqaradi.'
    },
    {
      id: 'm1t6e21',
      text: 'Maktab imijining barqarorligi nimani talab qiladi?',
      options: [
        'Faqat bir martalik yirik tadbirni',
        'Doimiy sifat va izchil kommunikatsiyani',
        'Faqat ko‘p sonli reklamani',
        'Faqat tashqi bezakni'
      ],
      answer: 1,
      explanation:
        'Barqaror imij bir martalik kampaniyadan emas, muntazam sifat va izchil munosabatlardan shakllanadi.'
    },
    {
      id: 'm1t6e22',
      text: 'Maktab haqida salbiy xabar paydo bo‘lganda qaysi harakat asosliroq?',
      options: [
        'Faktlarni aniqlash va tegishli axborotni berish',
        'Xabarni tekshirmasdan rad etish',
        'Muammoni yashirish',
        'Barcha kanallarni yopish'
      ],
      answer: 0,
      explanation:
        'Avval vaziyatning faktik asosini aniqlash, keyin ishonchli va o‘z vaqtida axborot berish zarur.'
    },
    {
      id: 'm1t6e23',
      text: 'Maktabning ota-onalar bilan muloqoti qaysi imijga eng bevosita ta’sir qiladi?',
      options: [
        'Faqat texnik imijga',
        'Faqat moliyaviy imijga',
        'Maktab haqidagi ishonch va tashqi tasavvurga',
        'Faqat bino imijiga'
      ],
      answer: 2,
      explanation:
        'Ota-onalar maktabning muhim manfaatdor tomoni bo‘lib, ularning tajribasi va fikri tashqi reputatsiyaga ta’sir qiladi.'
    },
    {
      id: 'm1t6e24',
      text: 'Qaysi holat “soxta PR”ga yaqin?',
      options: [
        'Tasdiqlangan natijani yoritish',
        'Mavjud muammoni hal qilib, natijani ko‘rsatish',
        'Real natijani bo‘rttirib yoki asossiz ko‘rsatish',
        'Ota-onalar fikrini o‘rganish'
      ],
      answer: 2,
      explanation:
        'Real natijani bo‘rttirish yoki mavjud bo‘lmagan yutuqni ko‘rsatish haqiqiylik tamoyiliga zid.'
    },
    {
      id: 'm1t6e25',
      text: 'Maktabning rasmiy sahifasida noto‘g‘ri ma’lumot berilishi qaysi omilga zarar yetkazishi mumkin?',
      options: [
        'Ishonchlilikka',
        'Faqat bino holatiga',
        'Faqat dars jadvaliga',
        'Faqat ichki hujjatlarga'
      ],
      answer: 0,
      explanation:
        'Rasmiy manbadagi xato axborot auditoriyaning maktab haqidagi ishonchiga salbiy ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t6e26',
      text: 'Maktabning tashqi imijiga qaysi kombinatsiya ko‘proq ta’sir qiladi?',
      options: [
        'Faqat logo va banner',
        'Natijalar, muloqot, tashqi ko‘rinish va hamkorlik',
        'Faqat direktorning nutqi',
        'Faqat ijtimoiy tarmoqdagi postlar'
      ],
      answer: 1,
      explanation:
        'Tashqi imij bir nechta omilning yig‘indisidir; faqat bitta kommunikatsiya vositasi uni to‘liq belgilamaydi.'
    },
    {
      id: 'm1t6e27',
      text: 'Maktab imijining rivojlanishga ta’siri qaysi javobda to‘g‘ri ifodalangan?',
      options: [
        'Ijobiy imij hamkorlik va ishonch uchun qulay sharoit yaratishi mumkin',
        'Imij rivojlanishga hech qachon ta’sir qilmaydi',
        'Imij faqat reklama xarajatini belgilaydi',
        'Imij faqat bino ta’miriga ta’sir qiladi'
      ],
      answer: 0,
      explanation:
        'Ishonchli reputatsiya ota-onalar, hamkorlar va jamoatchilik bilan munosabatlarda qo‘shimcha imkoniyatlar yaratishi mumkin.'
    },
    {
      id: 'm1t6e28',
      text: 'Maktab imijini shakllantirishda jamoa madaniyati nima uchun muhim?',
      options: [
        'U faqat tadbirlar sonini belgilaydi',
        'U faqat reklama mazmunini belgilaydi',
        'U ichki munosabatlar va xizmat ko‘rsatish tajribasiga ta’sir qiladi',
        'U faqat maktab logotipini belgilaydi'
      ],
      answer: 2,
      explanation:
        'Jamoa madaniyati kundalik munosabatlarda namoyon bo‘ladi va xodimlar hamda o‘quvchilarning maktab haqidagi tajribasiga ta’sir qiladi.'
    },
    {
      id: 'm1t6e29',
      text: '“Imij — natija” fikrining asosiy mazmuni qaysi?',
      options: [
        'Yaxshi ko‘rinishning o‘zi yetarli',
        'Imij real faoliyat va natijalarning jamoatchilikdagi aksidir',
        'Reklama natijadan ustun',
        'Natija bo‘lmasa ham imij barqaror bo‘ladi'
      ],
      answer: 1,
      explanation:
        'Barqaror reputatsiya maktabning amaliy faoliyati va natijalari bilan bog‘liq bo‘ladi.'
    },
    {
      id: 'm1t6e30',
      text: 'Qaysi yondashuv maktab imijini tizimli boshqarishga eng yaqin?',
      options: [
        'Faqat ko‘proq post joylashtirish',
        'Faqat maktabni bezash',
        'Faqat yutuqlarni reklama qilish',
        'Sifat, muhit, natija, muloqot va muntazam tahlilni birgalikda boshqarish'
      ],
      answer: 3,
      explanation:
        'Imij ko‘p omilli hodisa bo‘lgani uchun uni faqat reklama bilan emas, maktab faoliyatining asosiy yo‘nalishlari bilan birgalikda boshqarish kerak.'
    }
  ],

  medium: [
    {
      id: 'm1t6m01',
      text: 'Maktabning ta’lim natijalari yaxshi, biroq ota-onalar maktab faoliyati haqida yetarli ma’lumotga ega emas. Muammoning ehtimoliy manbai qaysi?',
      options: [
        'Kommunikatsiya kanallarining yetarli ishlamasligi',
        'Faqat o‘quvchilar sonining ko‘pligi',
        'Faqat maktab binosining kattaligi',
        'Faqat dars jadvalining murakkabligi'
      ],
      answer: 0,
      explanation:
        'Real natijalar mavjud bo‘lsa-da, ular manfaatdor tomonlarga yetib bormasa, axborot va kommunikatsiya tizimida uzilish mavjud bo‘lishi mumkin.'
    },
    {
      id: 'm1t6m02',
      text: 'Rahbar PR rejasini tuzishdan oldin ota-onalar fikrini o‘rgandi. Bu harakatning asosiy qiymati nimada?',
      options: [
        'Reklama dizaynini tezroq tayyorlashda',
        'Rejani mavjud tasavvur va ehtiyojlarga moslashtirishda',
        'Faqat postlar sonini ko‘paytirishda',
        'Faqat tadbirlar jadvalini tuzishda'
      ],
      answer: 1,
      explanation:
        'Manfaatdor tomonlar fikri PR rejasini taxminlarga emas, mavjud holat haqidagi ma’lumotlarga asoslash imkonini beradi.'
    },
    {
      id: 'm1t6m03',
      text: 'Qaysi ketma-ketlik PR boshqaruvining mantiqiy sikliga mos keladi?',
      options: [
        'Reklama → tadbir → tahlil → monitoring',
        'Monitoring → reklama → tahlil → reja',
        'Tahlil → rejalashtirish → amalga oshirish → monitoring → takomillashtirish',
        'Tadbir → reklama → takomillashtirish → tahlil'
      ],
      answer: 2,
      explanation:
        'Avval mavjud vaziyat aniqlanadi, keyin reja tuziladi, amalga oshiriladi, natija kuzatiladi va keyingi yaxshilashlar belgilanadi.'
    },
    {
      id: 'm1t6m04',
      text: 'Maktabning ijtimoiy tarmog‘ida postlar ko‘p, ammo ularda aniq faktlar va natijalar kam. Qaysi ko‘rsatkichni birinchi navbatda yaxshilash kerak?',
      options: [
        'Postlarning sonini yanada oshirish',
        'Tasdiqlangan va mazmunli axborot ulushini oshirish',
        'Faqat dizayn ranglarini o‘zgartirish',
        'Faqat obunachilarni ko‘paytirish'
      ],
      answer: 1,
      explanation:
        'Raqamli faollikning o‘zi yetarli emas. Ishonchli va mazmunli axborot imijning sifatini belgilovchi muhim omildir.'
    },
    {
      id: 'm1t6m05',
      text: 'Maktabda tashqi imij yaxshi, ammo pedagoglar orasidagi ichki muhit zaif. Uzoq muddatda qanday xavf bor?',
      options: [
        'Tashqi imijning barqarorligi zaiflashishi mumkin',
        'Bino avtomatik buziladi',
        'O‘quvchilar soni albatta ortadi',
        'PRga ehtiyoj butunlay yo‘qoladi'
      ],
      answer: 0,
      explanation:
        'Ichki muhitdagi muammolar vaqt o‘tishi bilan xodimlar, o‘quvchilar va ota-onalar tajribasiga ta’sir qilib, tashqi reputatsiyada aks etishi mumkin.'
    },
    {
      id: 'm1t6m06',
      text: 'Rahbar salbiy fikrlarni faqat o‘chirib tashlash orqali imijni yaxshilamoqchi. Asosiy muammo nimada?',
      options: [
        'Bu harakat fikrlarning sababini bartaraf etmaydi',
        'Bu harakat barcha muammolarni hal qiladi',
        'Bu usul avtomatik ravishda ishonchni oshiradi',
        'Bu usul ta’lim sifatini yaxshilaydi'
      ],
      answer: 0,
      explanation:
        'Salbiy fikrning o‘zini yo‘qotish sababni yo‘qotmaydi. Barqaror natija uchun fikrlarning manbasi va real muammolar o‘rganilishi kerak.'
    },
    {
      id: 'm1t6m07',
      text: 'Qaysi holatda “haqiqiylik” va “tezkorlik” birgalikda qo‘llanmoqda?',
      options: [
        'Tekshirilmagan xabarni darhol tarqatishda',
        'Faktlarni tekshirib, o‘z vaqtida aniq izoh berishda',
        'Muammoni yashirib, keyin izoh berishda',
        'Faqat reklama joylashtirishda'
      ],
      answer: 1,
      explanation:
        'Tezkorlik axborotni o‘z vaqtida berishni, haqiqiylik esa uning faktlarga mos bo‘lishini talab qiladi.'
    },
    {
      id: 'm1t6m08',
      text: 'Maktabning rasmiy sahifasida bir oy davomida faqat tadbir fotosuratlari joylashtirildi. Imijni tahlil qilishda qaysi savol muhimroq?',
      options: [
        'Fotosuratlar soni yetarlimi?',
        'Auditoriya maktabning real faoliyati haqida yetarli va ishonchli tasavvur olmoqdami?',
        'Rasmlar bir xil rangdami?',
        'Postlar soni boshqa maktablarnikidan ko‘pmi?'
      ],
      answer: 1,
      explanation:
        'PR samaradorligi faqat kontent miqdori bilan emas, auditoriyada qanday tushuncha shakllanayotgani bilan baholanadi.'
    },
    {
      id: 'm1t6m09',
      text: 'Maktabda kuchli o‘quvchi yutuqlari mavjud. Ularni PRda ishlatishda qaysi shart muhim?',
      options: [
        'Yutuqlarni imkon qadar bo‘rttirish',
        'Faqat eng chiroyli fotosuratlarni tanlash',
        'Natijalarni tasdiqlangan ma’lumotlar asosida yoritish',
        'Boshqa maktablarni taqqoslab tanqid qilish'
      ],
      answer: 2,
      explanation:
        'Yutuqlar PR uchun kuchli dalil bo‘lishi mumkin, ammo ularning ishonchliligi haqiqiylik tamoyiliga bog‘liq.'
    },
    {
      id: 'm1t6m10',
      text: 'Maktab imijini baholash uchun faqat obunachilar sonidan foydalanishning kamchiligi nimada?',
      options: [
        'Obunachilar soni imijning barcha jihatlarini aks ettirmaydi',
        'Obunachilar soni hech qanday ma’lumot bermaydi',
        'Obunachilar soni ta’lim sifatini to‘liq ko‘rsatadi',
        'Obunachilar soni ichki muhitni to‘liq o‘lchaydi'
      ],
      answer: 0,
      explanation:
        'Auditoriya hajmi foydali ko‘rsatkich bo‘lishi mumkin, ammo ishonch, qoniqish, natija va munosabatlarni o‘zi bilan to‘liq o‘lchab bo‘lmaydi.'
    },
    {
      id: 'm1t6m11',
      text: 'Ota-onalar maktab qarorlarining sabablarini tushunmayapti. Qaysi tamoyilni kuchaytirish maqsadga muvofiq?',
      options: [
        'Faqat reklama',
        'Shaffoflik',
        'Faqat dizayn',
        'Faqat tezkorlik'
      ],
      answer: 1,
      explanation:
        'Qarorlarning mazmuni va asoslarini tushunarli qilish shaffoflikni kuchaytiradi va ishonch uchun asos yaratadi.'
    },
    {
      id: 'm1t6m12',
      text: 'Maktab rahbari salbiy xabarni tekshirmasdan rad etdi. Bu qarorning asosiy zaif tomoni qaysi?',
      options: [
        'Faktga asoslanganlik yetishmasligi',
        'Reklama yetishmasligi',
        'Tashqi ko‘rinishning zaifligi',
        'Tadbirlar sonining kamligi'
      ],
      answer: 0,
      explanation:
        'Inqirozli kommunikatsiyada avval vaziyatni aniqlash zarur. Tekshirilmagan rad javobi keyingi ishonch muammolarini kuchaytirishi mumkin.'
    },
    {
      id: 'm1t6m13',
      text: 'Ichki imijni yaxshilash uchun qaysi kombinatsiya eng maqsadga muvofiq?',
      options: [
        'Bannerlar + reklama + ko‘proq post',
        'Kasbiy rivojlanish + jamoa madaniyati + ochiq muloqot',
        'Logo + bino bezagi + fotosurat',
        'Faqat tadbirlar + sovg‘alar'
      ],
      answer: 1,
      explanation:
        'Ichki imij kundalik ish va munosabatlardan shakllangani uchun xodimlarning rivojlanishi, jamoa madaniyati va muloqoti muhim.'
    },
    {
      id: 'm1t6m14',
      text: 'Tashqi imijni kuchaytirishda hamkor tashkilotlar bilan ishlashning asosiy foydasi nimada?',
      options: [
        'Faqat hujjatlar sonini ko‘paytiradi',
        'Maktabning ijtimoiy aloqalari va ishonch kapitalini kengaytirishi mumkin',
        'Faqat reklama xarajatini oshiradi',
        'Faqat ichki nazoratni kuchaytiradi'
      ],
      answer: 1,
      explanation:
        'Hamkorlik maktabning ijtimoiy tarmog‘ini kengaytiradi va turli manfaatdor tomonlar bilan ishonchli munosabatlar yaratishi mumkin.'
    },
    {
      id: 'm1t6m15',
      text: 'Maktab imijini yaxshilash uchun rahbar avval tashqi reklama, keyin ichki muammolar bilan shug‘ullanishni rejalashtirdi. Qaysi jihat qayta ko‘rib chiqilishi kerak?',
      options: [
        'Real faoliyatni yaxshilash imij boshqaruvining asosiy qismi ekanligi',
        'Reklama har doim zararli ekanligi',
        'Ichki muhitning imijga aloqasi yo‘qligi',
        'Tashqi auditoriyaning ahamiyatsizligi'
      ],
      answer: 0,
      explanation:
        'Reklama real faoliyatni almashtirmaydi. U mavjud sifat va natijalarni kommunikatsiya qilish vositasi sifatida ishlashi kerak.'
    },
    {
      id: 'm1t6m16',
      text: 'PR monitoringida qaysi ikki ko‘rsatkichni birga ko‘rish mantiqan kuchliroq?',
      options: [
        'Postlar soni va bannerlar soni',
        'Tadbirlar soni va fotosuratlar soni',
        'Axborot qamrovi va auditoriyaning munosabati',
        'Logo variantlari va dizaynlar soni'
      ],
      answer: 2,
      explanation:
        'Faoliyat hajmi bilan birga auditoriyada yuzaga kelgan munosabatni ko‘rish PRning amaliy ta’sirini yaxshiroq tushuntiradi.'
    },
    {
      id: 'm1t6m17',
      text: 'Maktabning raqamli imijida muntazamlik nima uchun kerak?',
      options: [
        'Auditoriyada maktab faoliyati haqida izchil tasavvur shakllanishi uchun',
        'Faqat postlar sonini oshirish uchun',
        'Faqat reklama daromadini oshirish uchun',
        'Faqat sahifani band qilish uchun'
      ],
      answer: 0,
      explanation:
        'Muntazam kommunikatsiya maktab faoliyati haqida uzluksiz va izchil tasavvur shakllanishiga yordam beradi.'
    },
    {
      id: 'm1t6m18',
      text: 'Qaysi vaziyatda raqamli imijning mazmuni va real faoliyat o‘rtasida tafovut paydo bo‘ladi?',
      options: [
        'Maktabda real natijalar bo‘lib, ular aniq yoritilsa',
        'Sahifada maktab imkoniyatlari mavjud holatdan ancha yuqori ko‘rsatilsa',
        'Ota-onalar bilan ochiq muloqot qilinsa',
        'Natijalar tasdiqlangan holda berilsa'
      ],
      answer: 1,
      explanation:
        'Raqamli kommunikatsiya real holatdan uzoqlashsa, auditoriyada noto‘g‘ri kutilmalar shakllanishi mumkin.'
    },
    {
      id: 'm1t6m19',
      text: 'Maktab imijini boshqarishda “monitoring → takomillashtirish” bog‘liqligi nimani bildiradi?',
      options: [
        'Monitoring natijalari keyingi boshqaruv choralariga asos bo‘ladi',
        'Monitoring faqat hisobot uchun kerak',
        'Takomillashtirish monitoringdan mustaqil amalga oshiriladi',
        'Monitoring faqat reklama materiallarini sanaydi'
      ],
      answer: 0,
      explanation:
        'Monitoring ma’lumotlari qaysi jihatni o‘zgartirish yoki kuchaytirish kerakligini aniqlashga yordam beradi.'
    },
    {
      id: 'm1t6m20',
      text: 'Maktabning salbiy imijini o‘zgartirish uchun qaysi strategiya mantiqan to‘g‘riroq?',
      options: [
        'Tanqidchilarni cheklash va reklama hajmini oshirish',
        'Muammolar sababini aniqlash, real yaxshilanish va izchil kommunikatsiya',
        'Faqat yangi logo yaratish',
        'Faqat ko‘proq tadbir o‘tkazish'
      ],
      answer: 1,
      explanation:
        'Salbiy reputatsiyani faqat tashqi ko‘rinish bilan o‘zgartirish qiyin; real muammo va uning kommunikatsiyasi birgalikda boshqarilishi kerak.'
    },
    {
      id: 'm1t6m21',
      text: 'Maktab jamoasida xodimlar rahbariyat qarorlaridan norozi, lekin tashqi reklama juda faol. Qaysi xulosa ehtiyotkorlik bilan chiqariladi?',
      options: [
        'Tashqi kommunikatsiya ichki muammolarni avtomatik hal qilmaydi',
        'Reklama ichki muhitni har doim yaxshilaydi',
        'Ichki imij tashqi imijga ta’sir qilmaydi',
        'Xodimlar fikri imij uchun ahamiyatsiz'
      ],
      answer: 0,
      explanation:
        'Tashqi PR ichki boshqaruvdagi muammolarning o‘rnini bosa olmaydi. Ichki tajriba ham umumiy reputatsiyaga ta’sir qiladi.'
    },
    {
      id: 'm1t6m22',
      text: 'Maktabning OAV bilan ishlashida qaysi yondashuv ishonchlilikni kuchaytiradi?',
      options: [
        'Faqat ijobiy xabarlarni berish',
        'Tasdiqlangan ma’lumotlarni aniq va tushunarli yetkazish',
        'Har qanday xabarni tezroq tarqatish',
        'Muammoli mavzulardan butunlay qochish'
      ],
      answer: 1,
      explanation:
        'OAV bilan ishlashda aniqlik va faktlarga tayangan axborot maktabning ishonchliligini saqlashga yordam beradi.'
    },
    {
      id: 'm1t6m23',
      text: 'Maktab imijini baholashda ota-onalar so‘rovi qanday ma’lumot beradi?',
      options: [
        'Faqat maktab binosining texnik holatini',
        'Manfaatdor tomonning maktab faoliyatini qanday qabul qilayotganini',
        'Faqat o‘quvchilar baholarini',
        'Faqat direktor faoliyatini'
      ],
      answer: 1,
      explanation:
        'Ota-onalar fikri maktab xizmatlari va kommunikatsiyasi qanday qabul qilinayotganini tushunishga yordam beradi.'
    },
    {
      id: 'm1t6m24',
      text: 'Qaysi holat shaffoflikni ko‘proq ifodalaydi?',
      options: [
        'Qarorlar mezonlarini manfaatdor tomonlarga tushunarli tarzda izohlash',
        'Savollarni javobsiz qoldirish',
        'Faqat natijani e’lon qilish',
        'Barcha ma’lumotni faqat rahbariyatda saqlash'
      ],
      answer: 0,
      explanation:
        'Shaffoflik qaror va jarayonlarning tushunarli bo‘lishini, manfaatdor tomonlar zarur axborotni olish imkoniga ega bo‘lishini anglatadi.'
    },
    {
      id: 'm1t6m25',
      text: 'Maktab imijida “hamkorlik” va “ochiqlik” birga ishlatilganda qanday natija kutiladi?',
      options: [
        'Tashqi aloqalar va ishonch uchun qulayroq muhit',
        'Faqat tadbirlar sonining ortishi',
        'Faqat reklama xarajatlarining ko‘payishi',
        'Faqat ichki nazoratning kuchayishi'
      ],
      answer: 0,
      explanation:
        'Ochiq muloqot va faol hamkorlik tashqi manfaatdor tomonlar bilan ishonchli munosabatlarni rivojlantirishga xizmat qilishi mumkin.'
    },
    {
      id: 'm1t6m26',
      text: 'Maktabning yaxshi natijalari bor, lekin kommunikatsiyada faqat umumiy shiorlar ishlatilmoqda. Qaysi o‘zgarish foydaliroq?',
      options: [
        'Shiorlarni ko‘paytirish',
        'Natijalarni aniq dalillar va tushunarli ma’lumotlar bilan yoritish',
        'Postlarni butunlay to‘xtatish',
        'Faqat dizaynni almashtirish'
      ],
      answer: 1,
      explanation:
        'Aniq faktlar auditoriyaga maktabning real faoliyatini baholash uchun ko‘proq asos beradi.'
    },
    {
      id: 'm1t6m27',
      text: 'Rahbar “imijni yaxshilash”ni faqat bino ta’miri bilan bog‘ladi. Qaysi omil uning yondashuvida yetishmayapti?',
      options: [
        'Imijning ko‘p omilli ekanligi',
        'Faqat reklama',
        'Faqat logo',
        'Faqat tadbirlar'
      ],
      answer: 0,
      explanation:
        'Bino ko‘rinishi muhim bo‘lishi mumkin, ammo imij ta’lim sifati, muhit, munosabat, natija va kommunikatsiyani ham qamrab oladi.'
    },
    {
      id: 'm1t6m28',
      text: 'Maktabning tashqi imijini baholashda qaysi manbalarni birgalikda ko‘rish foydaliroq?',
      options: [
        'Faqat ijtimoiy tarmoq statistikasi',
        'Ota-onalar fikri, hamkorlar fikri va kommunikatsiya natijalari',
        'Faqat tadbirlar ro‘yxati',
        'Faqat direktor hisoboti'
      ],
      answer: 1,
      explanation:
        'Bir nechta manfaatdor tomonning fikri va kommunikatsiya natijalari imij haqida bir tomonlama statistikaga qaraganda kengroq tasavvur beradi.'
    },
    {
      id: 'm1t6m29',
      text: 'Qaysi javob “raqamli imij”ni eng aniq ifodalaydi?',
      options: [
        'Maktabning faqat kompyuterlar bilan ta’minlanganlik darajasi',
        'Maktab haqidagi internetdagi axborot va auditoriyada shakllangan raqamli tasavvur',
        'Faqat Telegram obunachilari soni',
        'Faqat veb-sayt dizayni'
      ],
      answer: 1,
      explanation:
        'Raqamli imij texnik jihoz emas; internetdagi axborot, kommunikatsiya sifati va auditoriya tasavvurining yig‘indisi sifatida qaraladi.'
    },
    {
      id: 'm1t6m30',
      text: 'Maktab PR faoliyatining natijasi yaxshi ko‘rinsa-da, ota-onalar ishonchi oshmagan. Eng to‘g‘ri tahliliy savol qaysi?',
      options: [
        'Yana nechta post joylashtirish kerak?',
        'Nega kommunikatsiya faoliyati auditoriya tajribasi va ehtiyojlari bilan moslashmagan?',
        'Qaysi rangdagi banner chiroyliroq?',
        'Obunachilar sonini qanday ikki baravar oshirish mumkin?'
      ],
      answer: 1,
      explanation:
        'Kommunikatsiya faolligi va ishonch bir xil tushuncha emas. Auditoriyaning real tajribasi va ehtiyojlarini tahlil qilish muhim.'
    }
  ],

  hard: [
    {
      id: 'm1t6h01',
      text: 'Maktab rahbari reklama kampaniyasini kuchaytirdi, ammo ota-onalar shikoyatlari kamaymadi. Qaysi tahlil eng asosli?',
      options: [
        'Reklama yetarlicha chiroyli bo‘lmagan',
        'Shikoyatlarning real sababi PRdan tashqarida qolayotgan bo‘lishi mumkin',
        'Postlar sonini ikki baravar oshirish kerak',
        'Logo yangilansa muammo hal bo‘ladi'
      ],
      answer: 1,
      explanation:
        'Agar auditoriyaning muammosi real xizmat yoki boshqaruv tajribasi bilan bog‘liq bo‘lsa, kommunikatsiyani kuchaytirishning o‘zi sababni bartaraf etmaydi.'
    },
    {
      id: 'm1t6h02',
      text: 'Maktab sahifasida juda ijobiy kontent beriladi, lekin ota-onalar kundalik tajribani boshqacha baholaydi. Eng katta xavf nima?',
      options: [
        'Kontent hajmining kamayishi',
        'Imij va real tajriba o‘rtasida ishonch tafovuti paydo bo‘lishi',
        'Obunachilar sonining avtomatik ortishi',
        'Tadbirlar sonining ko‘payishi'
      ],
      answer: 1,
      explanation:
        'Kommunikatsiya va real tajriba o‘rtasidagi katta farq auditoriyada ishonchsizlik paydo qilishi mumkin.'
    },
    {
      id: 'm1t6h03',
      text: 'Rahbar imijni boshqarish uchun faqat tashqi auditoriya fikrini o‘rgandi, xodimlar fikrini esa hisobga olmadi. Qaysi jihat zaif qoladi?',
      options: [
        'Ichki imij va jamoa tajribasi',
        'Faqat tashqi reklama',
        'Faqat logo dizayni',
        'Faqat tadbirlar soni'
      ],
      answer: 0,
      explanation:
        'Xodimlarning tajribasi ichki imijning muhim qismidir va u tashqi kommunikatsiyaga ham ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t6h04',
      text: 'PR strategiyasida monitoring natijalari yaxshi, ammo keyingi rejalarda ular hisobga olinmayapti. Qaysi boshqaruv elementi yetishmayapti?',
      options: [
        'Takomillashtirish va qayta rejalashtirish',
        'Faqat reklama',
        'Faqat tashqi bezak',
        'Faqat tadbirlar'
      ],
      answer: 0,
      explanation:
        'Monitoring ma’lumotlari qarorlar va keyingi rejalarga ta’sir qilmasa, boshqaruv siklining qayta aloqa qismi ishlamaydi.'
    },
    {
      id: 'm1t6h05',
      text: 'Maktabda jiddiy muammo yuzaga kelgan. Rahbar avval rasmiy axborot bermay, ko‘p sonli ijobiy postlar chiqarishni buyurdi. Bu qaysi xatoni ko‘rsatadi?',
      options: [
        'Muammoni kommunikatsion shovqin bilan almashtirishga urinish',
        'Monitoringni kuchaytirish',
        'Shaffoflikni oshirish',
        'Haqiqiylikni ta’minlash'
      ],
      answer: 0,
      explanation:
        'Ko‘p ijobiy post muhim savolga javob bermasa, auditoriya asosiy muammoni yanada keskin qabul qilishi mumkin.'
    },
    {
      id: 'm1t6h06',
      text: 'Maktab imijini o‘lchashda qaysi yondashuv bir tomonlama baholash xavfini kamaytiradi?',
      options: [
        'Faqat obunachilar sonini olish',
        'Bir nechta manfaatdor tomon fikri va faoliyat natijalarini birga tahlil qilish',
        'Faqat direktor fikrini olish',
        'Faqat tadbirlar sonini sanash'
      ],
      answer: 1,
      explanation:
        'Turli manbalardan ma’lumot olish imijning faqat bitta ko‘rsatkichga bog‘lanib qolishining oldini oladi.'
    },
    {
      id: 'm1t6h07',
      text: 'Maktabda ta’lim sifati yaxshilandi, ammo raqamli kanallarda eski salbiy tasavvur saqlanib qolgan. Qaysi yondashuv mantiqan to‘g‘ri?',
      options: [
        'Eski salbiy fikrlarni yashirish',
        'Yangi real natijalarni izchil va dalillarga tayangan holda kommunikatsiya qilish',
        'Faqat yangi logo yaratish',
        'Raqamli kanallardan foydalanishni to‘xtatish'
      ],
      answer: 1,
      explanation:
        'Reputatsiya darhol o‘zgarmasligi mumkin. Real yaxshilanishlarni muntazam va ishonchli tarzda yetkazish vaqt o‘tishi bilan yangi tasavvur shakllanishiga yordam beradi.'
    },
    {
      id: 'm1t6h08',
      text: 'Maktabning kuchli ichki madaniyati bor, ammo u tashqi kommunikatsiyada umuman aks etmaydi. Qanday imkoniyat yo‘qolmoqda?',
      options: [
        'Real kuchli jihatlarni manfaatdor tomonlarga ko‘rsatish imkoniyati',
        'Ichki muhitni avtomatik ravishda yo‘qotish',
        'Ta’lim sifatini avtomatik pasaytirish',
        'Jamoa sonini kamaytirish'
      ],
      answer: 0,
      explanation:
        'Ichki kuchli tomonlar kommunikatsiya orqali manfaatdor tomonlarga yetkazilmasa, tashqi auditoriya ularni to‘liq bilmasligi mumkin.'
    },
    {
      id: 'm1t6h09',
      text: '“Imij — natija” tamoyili bilan “PR — kommunikatsiya” tamoyilini birlashtirganda qanday model kelib chiqadi?',
      options: [
        'Avval real sifat va natija, keyin uni ishonchli kommunikatsiya qilish',
        'Avval reklama, keyin natija yaratish',
        'Natijani kommunikatsiya bilan almashtirish',
        'Faqat tashqi ko‘rinishga tayanish'
      ],
      answer: 0,
      explanation:
        'Barqaror model real faoliyatni yaxshilash va uning natijalarini ishonchli, izchil kommunikatsiya qilishni birlashtiradi.'
    },
    {
      id: 'm1t6h10',
      text: 'Rahbar “salbiy fikrlarning barchasi asossiz” deb hisoblaydi. Menejer sifatida birinchi qadam qaysi bo‘lishi kerak?',
      options: [
        'Fikrlarni darhol o‘chirish',
        'Fikrlarning manbasi va faktik asosini tahlil qilish',
        'Reklama hajmini oshirish',
        'Tanqidchilarni bloklash'
      ],
      answer: 1,
      explanation:
        'Har qanday salbiy fikr avtomatik ravishda to‘g‘ri yoki noto‘g‘ri deb qabul qilinmasligi kerak; avval dalil va sabablar o‘rganiladi.'
    },
    {
      id: 'm1t6h11',
      text: 'Maktab imijining barqarorligi uchun qaysi uchlik eng muhim boshqaruv mantiqini beradi?',
      options: [
        'Logo + banner + reklama',
        'Natija + ishonchli kommunikatsiya + qayta aloqa',
        'Tadbir + fotosurat + video',
        'Obunachi + post + ko‘rishlar'
      ],
      answer: 1,
      explanation:
        'Real natija imijning mazmunini beradi, kommunikatsiya uni yetkazadi, qayta aloqa esa auditoriya reaksiyasini tushunishga yordam beradi.'
    },
    {
      id: 'm1t6h12',
      text: 'Maktab rahbari tashqi imijni yaxshilash uchun juda ko‘p tadbir rejalashtirdi. Boshqaruv nuqtayi nazaridan qaysi savol muhimroq?',
      options: [
        'Tadbirlar soni qancha bo‘ladi?',
        'Har bir tadbir qaysi aniq imij muammosi yoki maqsadiga xizmat qiladi?',
        'Qaysi tadbirda ko‘proq fotosurat olinadi?',
        'Qaysi tadbir eng ko‘p post beradi?'
      ],
      answer: 1,
      explanation:
        'Faoliyat hajmi emas, uning strategik maqsad bilan bog‘liqligi muhim. Har bir tadbir aniq kommunikatsion yoki boshqaruv vazifasiga ega bo‘lishi kerak.'
    },
    {
      id: 'm1t6h13',
      text: 'Maktabdagi real muammo hal qilindi, lekin bu o‘zgarish manfaatdor tomonlarga tushuntirilmadi. Qaysi natija ehtimoliy?',
      options: [
        'Real yaxshilanish mavjud bo‘lsa-da, uning tashqi imijdagi aks-sadosi kechikishi',
        'Imij darhol maksimal darajaga chiqishi',
        'Muammo avtomatik qaytishi',
        'Kommunikatsiyaga ehtiyoj qolmasligi'
      ],
      answer: 0,
      explanation:
        'Reputatsiya faqat ichki natija bilan emas, auditoriyaning bu natijadan xabardorligi va uni qanday qabul qilishi bilan ham bog‘liq.'
    },
    {
      id: 'm1t6h14',
      text: 'Maktab rahbari ijtimoiy tarmoqda faqat o‘ziga qulay savollarga javob beradi. Bu holat qaysi tamoyilga ko‘proq xavf tug‘diradi?',
      options: [
        'Shaffoflik',
        'Faqat barqarorlik',
        'Faqat tashqi ko‘rinish',
        'Faqat hamkorlik'
      ],
      answer: 0,
      explanation:
        'Savollarni tizimli ravishda chetlab o‘tish auditoriyada ochiqlik va javobgarlik bo‘yicha shubha uyg‘otishi mumkin.'
    },
    {
      id: 'm1t6h15',
      text: 'Qaysi holatda raqamli faollik yuqori bo‘lsa ham imij boshqaruvi zaif bo‘lishi mumkin?',
      options: [
        'Postlar muntazam, ammo ma’lumotlar ishonchsiz va real faoliyatga mos emas',
        'Postlar kam, ammo tasdiqlangan',
        'Natijalar aniq berilgan',
        'Savollarga muntazam javob berilgan'
      ],
      answer: 0,
      explanation:
        'Faollik hajmi sifat va ishonchlilik o‘rnini bosa olmaydi. Raqamli kommunikatsiya real faoliyatga mos bo‘lishi kerak.'
    },
    {
      id: 'm1t6h16',
      text: 'Maktab imijining kuchli va zaif tomonlarini aniqlash uchun qaysi usul tahliliy jihatdan kuchliroq?',
      options: [
        'Faqat rahbarning shaxsiy fikri',
        'Bir nechta manfaatdor tomon fikri, natijalar va kommunikatsiya ko‘rsatkichlarini taqqoslash',
        'Faqat postlar sonini sanash',
        'Faqat tadbirlar sonini aniqlash'
      ],
      answer: 1,
      explanation:
        'Turli manbalarni solishtirish imij haqida muvozanatliroq tasavvur beradi va bitta subyektiv fikrga bog‘lanishni kamaytiradi.'
    },
    {
      id: 'm1t6h17',
      text: 'Maktabning ichki muhitida ishonch past, tashqi reklama esa kuchli. Qaysi strategik xavf mavjud?',
      options: [
        'Tashqi va ichki tasavvur o‘rtasidagi tafovut kengayishi',
        'Reklamaning avtomatik kuchayishi',
        'Obunachilar sonining kamayishi shartligi',
        'Bino holatining yomonlashishi'
      ],
      answer: 0,
      explanation:
        'Ichki tajriba va tashqi va’dalar o‘rtasidagi farq uzoq muddatda reputatsiya barqarorligiga zarar yetkazishi mumkin.'
    },
    {
      id: 'm1t6h18',
      text: 'Maktabda salbiy fikrlar ko‘paygan. Rahbar muammoni faqat PR xodimining vazifasi deb hisoblaydi. Qaysi yondashuv to‘g‘riroq?',
      options: [
        'Imij butun maktab faoliyatining natijasi bo‘lgani uchun muammoni tizimli ko‘rib chiqish',
        'Faqat yangi banner tayyorlash',
        'Faqat postlar sonini oshirish',
        'Faqat PR xodimini almashtirish'
      ],
      answer: 0,
      explanation:
        'Imij ta’lim sifati, xizmat, muhit, boshqaruv va kommunikatsiyaning umumiy natijasi bo‘lgani uchun muammoni faqat bitta xodimga yuklash yetarli emas.'
    },
    {
      id: 'm1t6h19',
      text: 'Maktab rahbari “bizda muammo yo‘q” degan umumiy xabar berdi, lekin faktlar boshqacha. Qaysi tamoyil eng jiddiy zarar ko‘rishi mumkin?',
      options: [
        'Haqiqiylik',
        'Hamkorlik',
        'Barqarorlik',
        'Dizayn'
      ],
      answer: 0,
      explanation:
        'Axborot real vaziyatga mos kelmasa, auditoriya rasmiy kommunikatsiyaning ishonchliligini shubha ostiga qo‘yishi mumkin.'
    },
    {
      id: 'm1t6h20',
      text: 'PR strategiyasida “auditoriya” tushunchasini hisobga olmaslik qanday muammoga olib kelishi mumkin?',
      options: [
        'Xabar mazmuni va kanali manfaatdor tomon ehtiyojiga mos kelmasligi',
        'Logo avtomatik o‘zgarishi',
        'Tadbirlar soni kamayishi shartligi',
        'Maktab binosi yomonlashishi'
      ],
      answer: 0,
      explanation:
        'Turli auditoriyalarning ehtiyoji va axborot qabul qilish usuli farq qiladi. Buni hisobga olmaslik kommunikatsiya samaradorligini pasaytirishi mumkin.'
    },
    {
      id: 'm1t6h21',
      text: 'Maktab imijini boshqarishda “hamkorlik”ni faqat homiylik olish bilan cheklashning kamchiligi nimada?',
      options: [
        'Hamkorlikning ta’limiy va ijtimoiy imkoniyatlari torayib qoladi',
        'Homiylik har doim imijni buzadi',
        'Hamkorlar bilan aloqa qilish shart emas',
        'PR faoliyati to‘liq to‘xtaydi'
      ],
      answer: 0,
      explanation:
        'Hamkorlik faqat mablag‘ emas; tajriba, loyiha, kasbiy yo‘naltirish, axborot va ijtimoiy sheriklik kabi imkoniyatlarni ham qamrab olishi mumkin.'
    },
    {
      id: 'm1t6h22',
      text: 'Maktab imijini shakllantirishda qaysi qaror “simptom” emas, “sabab”ga yo‘naltirilgan?',
      options: [
        'Shikoyatlar ko‘payganda postlarni ko‘paytirish',
        'Ota-onalar noroziligining sabablarini o‘rganib, xizmat sifatini yaxshilash',
        'Salbiy izohlarni o‘chirish',
        'Yangi banner tayyorlash'
      ],
      answer: 1,
      explanation:
        'Norozilik sababini aniqlash va real faoliyatni yaxshilash muammoning ildiziga ta’sir qiladi; faqat kommunikatsiya hajmini oshirish esa simptomni yashirishi mumkin.'
    },
    {
      id: 'm1t6h23',
      text: 'Maktabning ijobiy imiji inqiroz paytida nima uchun foydali bo‘lishi mumkin?',
      options: [
        'U barcha muammolarni avtomatik yo‘q qiladi',
        'Oldindan shakllangan ishonch axborotni qabul qilishga ta’sir qilishi mumkin',
        'U tanqidni taqiqlaydi',
        'U rahbarni javob berishdan ozod qiladi'
      ],
      answer: 1,
      explanation:
        'Oldindan mavjud bo‘lgan ishonch inqirozli vaziyatda auditoriyaning maktab axborotini qanday qabul qilishiga ta’sir qilishi mumkin, ammo muammoni o‘zi hal qilmaydi.'
    },
    {
      id: 'm1t6h24',
      text: 'Maktab imijini boshqarishda eng kuchli qayta aloqa manbalaridan biri qaysi?',
      options: [
        'Faqat bannerlar soni',
        'Manfaatdor tomonlarning muntazam fikri va real tajribasi',
        'Faqat post ko‘rishlari',
        'Faqat tadbir fotosuratlari'
      ],
      answer: 1,
      explanation:
        'Manfaatdor tomonlarning real tajribasi imijning amalda qanday qabul qilinayotganini tushunishga yordam beradi.'
    },
    {
      id: 'm1t6h25',
      text: 'Maktabning yaxshi imijini “saqlab qolish” bilan “rivojlantirish” o‘rtasidagi farq nimada?',
      options: [
        'Saqlash mavjud ishonchni barqarorlashtiradi, rivojlantirish esa yangi ehtiyoj va imkoniyatlarga moslashishni ham talab qiladi',
        'Ular mutlaqo bir xil',
        'Rivojlantirish faqat reklama qilishdir',
        'Saqlash faqat logo bilan bog‘liq'
      ],
      answer: 0,
      explanation:
        'Imij doimiy jarayon bo‘lgani uchun mavjud ishonchni saqlash bilan birga o‘zgarayotgan muhitga moslashish ham zarur.'
    },
    {
      id: 'm1t6h26',
      text: 'Maktabning ijtimoiy tarmog‘ida yutuqlar juda ko‘p, ammo muammoli savollarga javob berilmaydi. Bu nimani ko‘rsatishi mumkin?',
      options: [
        'Kommunikatsiya selektiv bo‘lib, shaffoflik yetarli emasligi ehtimolini',
        'Ta’lim sifati albatta yuqori ekanini',
        'Raqamli imij avtomatik mukammal ekanini',
        'Ota-onalar fikri ahamiyatsizligini'
      ],
      answer: 0,
      explanation:
        'Faqat qulay axborotni berish va muhim savollardan qochish auditoriyada kommunikatsiyaning bir tomonlama ekanligi haqidagi tasavvurni kuchaytirishi mumkin.'
    },
    {
      id: 'm1t6h27',
      text: 'Rahbar PR samaradorligini faqat “qancha tadbir o‘tkazildi?” savoli bilan baholamoqda. Qaysi yondashuv yetishmayapti?',
      options: [
        'Natija va auditoriya reaksiyasini baholash',
        'Tadbirlarni ko‘paytirish',
        'Bannerlarni almashtirish',
        'Fotosuratlar sonini oshirish'
      ],
      answer: 0,
      explanation:
        'Faoliyat soni jarayon ko‘rsatkichidir. Samaradorlikni tushunish uchun uning auditoriyaga ta’siri va maqsadga erishish darajasi ham ko‘rilishi kerak.'
    },
    {
      id: 'm1t6h28',
      text: 'Maktab imiji bo‘yicha qaror qabul qilishda qaysi ma’lumot kombinatsiyasi kuchliroq dalil beradi?',
      options: [
        'Faqat direktor fikri + reklama soni',
        'Ota-onalar fikri + xodimlar fikri + real natijalar + kommunikatsiya ko‘rsatkichlari',
        'Faqat obunachilar soni + postlar soni',
        'Faqat tadbirlar soni + fotosuratlar'
      ],
      answer: 1,
      explanation:
        'Turli manfaatdor tomonlar fikri, real natijalar va kommunikatsiya ma’lumotlari birgalikda qaror uchun kengroq daliliy baza yaratadi.'
    },
    {
      id: 'm1t6h29',
      text: 'Maktab rahbari salbiy reputatsiyani tezda o‘zgartirish uchun bo‘rttirilgan yutuqlarni e’lon qilmoqchi. Menejerlik nuqtayi nazaridan asosiy xavf qaysi?',
      options: [
        'Qisqa muddatli e’tibor ortishi mumkin, ammo ishonchga uzoq muddatli zarar yetishi ehtimoli bor',
        'Obunachilar albatta kamayadi',
        'Barcha reklama vositalari ishlamay qoladi',
        'Tadbirlar o‘tkazish imkoni yo‘qoladi'
      ],
      answer: 0,
      explanation:
        'Bo‘rttirilgan axborot keyinchalik aniqlansa, auditoriya faqat bitta xabarga emas, maktabning umumiy kommunikatsiyasiga ham shubha bilan qarashi mumkin.'
    },
    {
      id: 'm1t6h30',
      text: 'Quyidagi model qaysi biri maktab imijini strategik boshqarishga eng yaqin?',
      options: [
        'Reklama → post → tadbir → banner',
        'Natijani yaxshilash → manfaatdor tomon fikrini o‘rganish → kommunikatsiya → monitoring → takomillashtirish',
        'Logo → video → fotosurat → reklama',
        'Tadbir → fotosurat → post → obunachi'
      ],
      answer: 1,
      explanation:
        'Strategik model real faoliyatni yaxshilashdan boshlanib, manfaatdor tomon fikri, kommunikatsiya, monitoring va takomillashtirish orqali davom etadi.'
    }
  ],

  case: [
    {
      id: 'm1t6c01',
      text: 'Maktabda ta’lim natijalari yaxshilandi, ammo ota-onalar buni sezmayapti. Rahbarning eng maqbul birinchi qarori qaysi?',
      options: [
        'Faqat reklama bannerlarini ko‘paytirish',
        'Natijalar qanday qabul qilinayotganini aniqlab, kommunikatsiya bo‘shlig‘ini tahlil qilish',
        'Ota-onalar bilan aloqani kamaytirish',
        'Faqat yangi logo ishlab chiqish'
      ],
      answer: 1,
      explanation:
        'Muammo avval kommunikatsiyadami yoki auditoriya tajribasidami — aniqlanishi kerak. Shundan keyin mos chora tanlanadi.'
    },
    {
      id: 'm1t6c02',
      text: 'Telegram kanalida maktab haqida tasdiqlanmagan salbiy xabar tarqaldi. Rahbar nima qilishi kerak?',
      options: [
        'Darhol xabarni o‘chirib tashlashni talab qilish',
        'Tekshirmasdan xabarni yolg‘on deb e’lon qilish',
        'Faktlarni tekshirib, zarur bo‘lsa rasmiy va aniq izoh berish',
        'Ko‘proq ijobiy fotosuratlar joylashtirish'
      ],
      answer: 2,
      explanation:
        'Inqirozli kommunikatsiyada hissiy javobdan ko‘ra faktlarni aniqlash va asoslangan axborot berish ishonchliroq yondashuvdir.'
    },
    {
      id: 'm1t6c03',
      text: 'Maktab tashqi tomondan juda chiroyli, lekin pedagoglar o‘rtasida doimiy nizolar mavjud. Imijni barqarorlashtirishda ustuvor yo‘nalish qaysi?',
      options: [
        'Yana reklama kampaniyasi boshlash',
        'Ichki muhit va jamoa munosabatlarini yaxshilash',
        'Faqat ijtimoiy tarmoq postlarini ko‘paytirish',
        'Logotipni yangilash'
      ],
      answer: 1,
      explanation:
        'Ichki muhitdagi muammolar uzoq muddatda xodimlar va o‘quvchilar tajribasiga ta’sir qiladi. Shu sababli ichki sababni bartaraf etish muhim.'
    },
    {
      id: 'm1t6c04',
      text: 'Ota-onalar maktabdagi ayrim qarorlarning nima sababdan qabul qilinganini tushunmayapti. Ishonch ham pasaygan. Qaysi chora mos?',
      options: [
        'Qarorlarning mezon va sabablarini tushunarli tarzda izohlash',
        'Savollarni cheklash',
        'Faqat ijobiy postlarni chiqarish',
        'Ota-onalar bilan muloqotni vaqtincha to‘xtatish'
      ],
      answer: 0,
      explanation:
        'Muammo axborotning tushunarliligi bilan bog‘liq bo‘lsa, shaffof va izohli kommunikatsiya ishonchni tiklash uchun asos yaratadi.'
    },
    {
      id: 'm1t6c05',
      text: 'Rahbar PR rejasini tuzmoqchi, ammo maktabning hozirgi imiji bo‘yicha hech qanday ma’lumot yig‘ilmagan. Qaysi ketma-ketlik to‘g‘ri?',
      options: [
        'Avval reklama → keyin tahlil',
        'Avval tadbir → keyin reja',
        'Avval tahlil → keyin maqsad va reja',
        'Avval monitoring → keyin mavjud holat'
      ],
      answer: 2,
      explanation:
        'Reja muammo va mavjud holatga mos bo‘lishi uchun avval boshlang‘ich vaziyatni tahlil qilish kerak.'
    },
    {
      id: 'm1t6c06',
      text: 'Maktab sahifasida bir oyda 50 ta post joylashtirildi, ammo ota-onalar ishonchi o‘zgarmadi. Rahbar qaysi savolni berishi kerak?',
      options: [
        'Keyingi oy 100 ta post qilish kerakmi?',
        'Postlar auditoriya ehtiyoji va real muammolarga javob berdimi?',
        'Qaysi rang ko‘proq ishlatilgan?',
        'Qaysi postga ko‘proq emoji qo‘shish kerak?'
      ],
      answer: 1,
      explanation:
        'Kontent miqdori natijani kafolatlamaydi. Uning auditoriya ehtiyoji va real muammolarga mosligi muhim.'
    },
    {
      id: 'm1t6c07',
      text: 'Maktabda o‘quvchi yutuqlari bor, ammo sahifada ular bo‘rttirib ko‘rsatilmoqda. Rahbar qanday qaror qabul qilishi kerak?',
      options: [
        'Bo‘rttirishni yanada kuchaytirish',
        'Faqat reklama shiorlarini qoldirish',
        'Yutuqlarni tekshirilgan ma’lumotlar asosida qayta yoritish',
        'Yutuqlarni umuman e’lon qilmaslik'
      ],
      answer: 2,
      explanation:
        'Yutuqlar PR uchun foydali dalil, lekin ular ishonchni saqlash uchun tasdiqlangan va aniq bo‘lishi kerak.'
    },
    {
      id: 'm1t6c08',
      text: 'Bir yil davomida PR faoliyati olib borildi. Rahbar keyingi yil rejasini tuzmoqda. Eng foydali yondashuv qaysi?',
      options: [
        'Eski rejani o‘zgartirmasdan takrorlash',
        'Faqat tadbirlar sonini oshirish',
        'Monitoring natijalarini tahlil qilib, keyingi rejani shu asosda yangilash',
        'Faqat reklama budjetini oshirish'
      ],
      answer: 2,
      explanation:
        'Oldingi faoliyat natijalari keyingi rejalashtirishga qayta aloqa sifatida xizmat qilishi kerak.'
    },
    {
      id: 'm1t6c09',
      text: 'Mahalla, OTM va korxonalar bilan muntazam loyihalar tashkil etildi. Bu faoliyatni imij nuqtayi nazaridan qanday baholash mumkin?',
      options: [
        'Hamkorlik tamoyilining amaliy ko‘rinishi sifatida',
        'Faqat reklama sifatida',
        'Faqat ichki nazorat sifatida',
        'Faqat moliyaviy faoliyat sifatida'
      ],
      answer: 0,
      explanation:
        'Turli tashqi manfaatdor tomonlar bilan tizimli aloqalar hamkorlik tamoyilini amalda namoyon qiladi.'
    },
    {
      id: 'm1t6c10',
      text: 'Maktab haqida salbiy tasavvur shakllangan. Rahbar faqat reklama hajmini oshirmoqchi. Qaysi qaror strategik jihatdan asosliroq?',
      options: [
        'Avval salbiy tasavvurning sabablarini o‘rganish, real muammolarni bartaraf etish va keyin kommunikatsiyani kuchaytirish',
        'Faqat reklama budjetini oshirish',
        'Salbiy fikrlarni imkon qadar yashirish',
        'Tanqidiy savollarga javob bermaslik'
      ],
      answer: 0,
      explanation:
        'Barqaror reputatsiya sabablarni bartaraf etishdan boshlanadi. Kommunikatsiya esa real o‘zgarishlarni tushuntirish va ishonchni tiklashga xizmat qiladi.'
    }
  ]
}
