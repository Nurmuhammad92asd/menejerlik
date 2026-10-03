import type { Question } from '../quiz-data'

export const M1T3_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  // =========================================================
  // 30 TA OSON
  // =========================================================
  easy: [
    {
      id: 'm1t3e01',
      text: 'Boshqaruv psixologiyasi nimani o‘rganadi?',
      options: [
        'Faqat hujjat yuritishni',
        'Rahbarlik, muloqot, motivatsiya va nizolarni boshqarish jarayonlarini',
        'Faqat iqtisodiy hisob-kitoblarni',
        'Faqat o‘quvchilar bilimini'
      ],
      answer: 1,
      explanation:
        'Boshqaruv psixologiyasi rahbarning shaxsiy fazilatlari, muloqoti, motivatsiya, nizolar va jamoani boshqarish jarayonlarini o‘rganadi.'
    },
    {
      id: 'm1t3e02',
      text: 'Maktabni boshqarish nimadan ko‘ra kengroq tushunchadir?',
      options: [
        'Insonlar bilan ishlash san’atidan',
        'Faqat buyruq berish va hujjat yuritishdan',
        'Faqat dars jadvalidan',
        'Faqat nazoratdan'
      ],
      answer: 1,
      explanation:
        'Maktabni boshqarish faqat buyruq berish yoki hujjat yuritish emas, balki insonlar bilan ishlash san’atidir.'
    },
    {
      id: 'm1t3e03',
      text: 'Emotsional intellekt nima?',
      options: [
        'Faqat yuqori IQ darajasi',
        'O‘z va boshqalarning hissiyotlarini anglash va boshqarish qobiliyati',
        'Faqat tez qaror qabul qilish',
        'Faqat nutq qobiliyati'
      ],
      answer: 1,
      explanation:
        'Emotsional intellekt o‘z hissiyotini anglash, boshqarish va boshqalarning hissiyotlarini tushunishni anglatadi.'
    },
    {
      id: 'm1t3e04',
      text: 'Empatiya nimani anglatadi?',
      options: [
        'Boshqalarni jazolashni',
        'Boshqa insonning holati va hissiyotini tushunishni',
        'Buyruq berishni',
        'Muammoni yashirishni'
      ],
      answer: 1,
      explanation:
        'Empatiya boshqa insonning holati, hissiyoti va kechinmalarini tushunish qobiliyatidir.'
    },
    {
      id: 'm1t3e05',
      text: 'Rahbar qarorlarni qanday qabul qilishi maqsadga muvofiq?',
      options: [
        'Faqat hissiyot bilan',
        'Dalil va faktlarga asoslanib',
        'Faqat taxmin asosida',
        'Faqat bir xodim fikriga asoslanib'
      ],
      answer: 1,
      explanation:
        'Professional rahbar qarorlarni hissiyotga emas, dalil va faktlarga asoslaydi.'
    },
    {
      id: 'm1t3e06',
      text: 'Kuchli rahbarning muhim xususiyatlaridan biri nima?',
      options: [
        'Barcha ishni o‘zi bajarish',
        'Vakolat berish',
        'Xodimlarga ishonmaslik',
        'Doimiy tanbeh berish'
      ],
      answer: 1,
      explanation:
        'Kuchli rahbar vakolat beradi va jamoani ishonch orqali harakatga keltiradi.'
    },
    {
      id: 'm1t3e07',
      text: '“Shaxsga emas, muammoga qarash” nimani anglatadi?',
      options: [
        'Xodimni sharmanda qilishni',
        'Muammoni insonning shaxsiyatidan ajratib tahlil qilishni',
        'Xodimni jazolashni',
        'Muammoni e’tiborsiz qoldirishni'
      ],
      answer: 1,
      explanation:
        'Nizoda shaxsni emas, muammo va xatti-harakatni tahlil qilish konstruktiv boshqaruvga xizmat qiladi.'
    },
    {
      id: 'm1t3e08',
      text: 'Samarali boshqaruvga to‘sqinlik qiluvchi omillardan biri qaysi?',
      options: [
        'O‘z-o‘zini boshqara olmaslik',
        'Empatiya',
        'Ishonch',
        'Ijodiy yondashuv'
      ],
      answer: 0,
      explanation:
        'O‘z-o‘zini boshqara olmaslik menejer faoliyati samaradorligini pasaytiruvchi ichki to‘siqlardan biridir.'
    },
    {
      id: 'm1t3e09',
      text: 'Tanqid berishda nimaga e’tibor qaratish kerak?',
      options: [
        'Shaxsning o‘ziga',
        'Xatti-harakatga',
        'Oilaviy holatiga',
        'Tashqi ko‘rinishiga'
      ],
      answer: 1,
      explanation:
        'Tanqid shaxsga emas, aniq xatti-harakatga qaratilishi kerak.'
    },
    {
      id: 'm1t3e10',
      text: 'Xodimni boshqalar oldida nohaqligi uchun tanqid qilish qanday yondashuvga zid?',
      options: [
        'Hurmat va konstruktiv muloqotga',
        'Nazoratga',
        'Rejalashtirishga',
        'Delegatsiyaga'
      ],
      answer: 0,
      explanation:
        'Xodimning xatosini boshqalar oldida aytish uning qadr-qimmatiga salbiy ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t3e11',
      text: 'Keskin vaziyatda “3 soniya qoidasi”ning birinchi qadami nima?',
      options: [
        'Darhol baqirish',
        'To‘xtash va hissiy javob bermaslik',
        'Xodimni jazolash',
        'Majlis chaqirish'
      ],
      answer: 1,
      explanation:
        '3 soniya qoidasi rahbarga keskin vaziyatda avval to‘xtab, hissiy javob bermaslikni tavsiya qiladi.'
    },
    {
      id: 'm1t3e12',
      text: '“3 soniya qoidasi”dan keyin rahbar nima qilishi kerak?',
      options: [
        'Faktlarni so‘rashi',
        'Darhol hukm chiqarishi',
        'Xodimni ishdan bo‘shatishi',
        'Muammoni yashirishi'
      ],
      answer: 0,
      explanation:
        'Rahbar “Nima bo‘ldi? Qachon? Kim ko‘rdi? Dalil bormi?” kabi faktlarga oid savollarni berishi kerak.'
    },
    {
      id: 'm1t3e13',
      text: 'Rahbar nutqining samarali shakli qanday bo‘lishi kerak?',
      options: [
        'Uzoq va mavhum',
        'Qisqa va aniq',
        'Faqat buyruqlardan iborat',
        'Faqat tanqiddan iborat'
      ],
      answer: 1,
      explanation:
        'Ta’sirchan rahbar nutqi qisqa, aniq va mazmunli bo‘lishi kerak.'
    },
    {
      id: 'm1t3e14',
      text: 'Rahbar nutqida “biz” tilidan foydalanish nimaga xizmat qiladi?',
      options: [
        'Jamoaviy ruhni kuchaytirishga',
        'Xodimlarni ajratishga',
        'Qo‘rquv yaratishga',
        'Nazoratni kuchaytirishga'
      ],
      answer: 0,
      explanation:
        '“Biz” tili jamoaviylik va umumiy maqsad ruhini kuchaytiradi.'
    },
    {
      id: 'm1t3e15',
      text: 'Temperament nima bilan bog‘liq?',
      options: [
        'Faqat kasb bilan',
        'Asab tizimi faoliyati bilan',
        'Faqat ta’lim darajasi bilan',
        'Faqat yosh bilan'
      ],
      answer: 1,
      explanation:
        'Temperament shaxsning tug‘ma psixologik xususiyatlari majmuasi bo‘lib, asab tizimi faoliyati bilan bog‘liq.'
    },
    {
      id: 'm1t3e16',
      text: 'Temperamentning asosiy turlari nechta?',
      options: ['2 ta', '3 ta', '4 ta', '5 ta'],
      answer: 2,
      explanation:
        'Materialda temperamentning 4 turi: sangvinik, xolerik, flegmatik va melanxolik keltirilgan.'
    },
    {
      id: 'm1t3e17',
      text: 'Sangvinik rahbarning asosiy xususiyati qaysi?',
      options: [
        'Faol va ijtimoiy bo‘lishi',
        'Doimo xavotirda bo‘lishi',
        'Juda sust bo‘lishi',
        'Odamlardan qochishi'
      ],
      answer: 0,
      explanation:
        'Sangvinik rahbar odatda ijtimoiy, optimistik, harakatchan va faol bo‘ladi.'
    },
    {
      id: 'm1t3e18',
      text: 'Xolerik rahbar qanday bo‘lishi mumkin?',
      options: [
        'Tezkor va maqsadga yo‘naltirilgan',
        'Doimo sust',
        'Juda tortinchoq',
        'Har qanday qarordan qochadigan'
      ],
      answer: 0,
      explanation:
        'Xolerik rahbar kuchli iroda, tezkorlik va maqsadga yo‘naltirilganlik bilan ajralib turadi.'
    },
    {
      id: 'm1t3e19',
      text: 'Flegmatik rahbarning asosiy xususiyati qaysi?',
      options: [
        'Tinch va sabrli',
        'Juda tez jahllanish',
        'Doimiy xavotir',
        'Haddan tashqari shoshqaloqlik'
      ],
      answer: 0,
      explanation:
        'Flegmatik rahbar odatda tinch, sabrli va hissiy jihatdan barqaror bo‘ladi.'
    },
    {
      id: 'm1t3e20',
      text: 'Melanxolik rahbarning xususiyatlaridan biri qaysi?',
      options: [
        'Sezgir va chuqur o‘ylovchi',
        'Doimo shoshqaloq',
        'Haddan tashqari ijtimoiy',
        'Hech narsani tahlil qilmaydi'
      ],
      answer: 0,
      explanation:
        'Melanxolik rahbar sezgir, ehtiyotkor va chuqur o‘ylovchi bo‘lishi mumkin.'
    },
    {
      id: 'm1t3e21',
      text: 'Rahbar xodimni tanqid qilganda nima qilishi maqsadga muvofiq?',
      options: [
        'Aniq misol keltirishi',
        'Umumiy koyishi',
        'Hamma oldida sharmanda qilishi',
        'Shaxsiyatini tanqid qilishi'
      ],
      answer: 0,
      explanation:
        'Tanqid aniq misolga asoslanishi va xatti-harakatga qaratilishi kerak.'
    },
    {
      id: 'm1t3e22',
      text: 'Konstruktiv tanqidning yakunida rahbar nima bildirishi kerak?',
      options: [
        'Ishonch',
        'Qo‘rquv',
        'Tahdid',
        'Beparvolik'
      ],
      answer: 0,
      explanation:
        'Tanqid yakunida xodimga ishonch bildirish rivojlanishga undaydi.'
    },
    {
      id: 'm1t3e23',
      text: 'Rahbar o‘zining nohaqligini anglab qolsa nima qilishi kerak?',
      options: [
        'Buni tez va qat’iy tan olishi',
        'Yashirishi',
        'Boshqani ayblashi',
        'Mavzuni o‘zgartirishi'
      ],
      answer: 0,
      explanation:
        'Materialda rahbar nohaq bo‘lsa, buni tez va qat’iy bo‘yniga olishi tavsiya etiladi.'
    },
    {
      id: 'm1t3e24',
      text: 'Samarali rahbar barcha vazifalarni o‘zi bajarishi kerakmi?',
      options: [
        'Ha, doimo',
        'Yo‘q, vakolatlarni berishi kerak',
        'Faqat hujjatlarni',
        'Faqat o‘qituvchilar ishini'
      ],
      answer: 1,
      explanation:
        'Kuchli rahbar vakolat beradi va jamoaga ishonadi.'
    },
    {
      id: 'm1t3e25',
      text: 'Rahbar uchun vaqtni boshqarish nimaning bir qismi?',
      options: [
        'Professional intizomning',
        'Temperamentning',
        'Nizoning',
        'Tanqidning'
      ],
      answer: 0,
      explanation:
        'Vaqtni boshqarish rahbarning o‘zini boshqarishi va professional intizomining tarkibiy qismidir.'
    },
    {
      id: 'm1t3e26',
      text: 'Rahbarning nutq va ohangini nazorat qilishi nima uchun muhim?',
      options: [
        'Muloqot samaradorligi uchun',
        'Hujjatlarni ko‘paytirish uchun',
        'Nazoratni bekor qilish uchun',
        'Faqat rasmiyatchilik uchun'
      ],
      answer: 0,
      explanation:
        'Nutq va ohang nazorati rahbarning muloqotdagi ta’sirchanligini oshiradi.'
    },
    {
      id: 'm1t3e27',
      text: 'Boshqaruvda “bir xil mezon” nimani anglatadi?',
      options: [
        'Adolat tamoyilini',
        'Faqat qat’iylikni',
        'Faqat jazoni',
        'Xodimlarni ajratishni'
      ],
      answer: 0,
      explanation:
        'Bir xil mezon barcha xodimlarga adolatli va izchil munosabatda bo‘lishni anglatadi.'
    },
    {
      id: 'm1t3e28',
      text: 'Rahbarning xodimlar fikrini hurmat qilishi nimaga xizmat qiladi?',
      options: [
        'Sog‘lom muloqotga',
        'Nizoni kuchaytirishga',
        'Ishonchsizlikka',
        'Qo‘rquvga'
      ],
      answer: 0,
      explanation:
        'Fikrni hurmat qilish ochiq va sog‘lom psixologik muhitni shakllantiradi.'
    },
    {
      id: 'm1t3e29',
      text: 'Sangvinik rahbarning ehtimoliy kamchiligi nima?',
      options: [
        'Haddan tashqari optimizm',
        'Doimiy ehtiyotkorlik',
        'Haddan tashqari sokinlik',
        'Doimiy xavotir'
      ],
      answer: 0,
      explanation:
        'Materialda sangvinikning kamchiligi sifatida ba’zan haddan tashqari optimistik bo‘lishi ko‘rsatilgan.'
    },
    {
      id: 'm1t3e30',
      text: 'Flegmatik rahbarning ehtimoliy kamchiligi nima?',
      options: [
        'Muammoni o‘z vaqtida hal qilmaslik',
        'Haddan tashqari tezkorlik',
        'Haddan tashqari hayajon',
        'Doimiy xavotir'
      ],
      answer: 0,
      explanation:
        'Flegmatik rahbar ba’zan haddan tashqari sokin bo‘lib, muammolarni kech hal qilishi mumkin.'
    }
  ],

  // =========================================================
  // 30 TA O‘RTA
  // =========================================================
  medium: [
    {
      id: 'm1t3m01',
      text: 'Rahbarning emotsional intellekti nizoli vaziyatda eng avvalo nimaga yordam beradi?',
      options: [
        'Hissiy reaksiyani nazorat qilishga',
        'Xodimni darhol jazolashga',
        'Nizoni yashirishga',
        'Masalani boshqa xodimga yuklashga'
      ],
      answer: 0,
      explanation:
        'EI rahbarga hissiyotini anglash va boshqarish orqali nizoda bosiq qolishga yordam beradi.'
    },
    {
      id: 'm1t3m02',
      text: 'Rahbar xodimning xatosini tuzatishda qaysi yondashuv psixologik jihatdan maqbul?',
      options: [
        'Shaxsini tanqid qilish',
        'Xatti-harakatni aniq ko‘rsatib, tuzatish yo‘lini aytish',
        'Hamma oldida koyish',
        'Xatoni e’tiborsiz qoldirish'
      ],
      answer: 1,
      explanation:
        'Tanqid xatti-harakatga qaratilib, aniq misol va tuzatish yo‘li bilan berilishi kerak.'
    },
    {
      id: 'm1t3m03',
      text: '“Men hammasini nazorat qilishim shart” fikrining xavfi nimada?',
      options: [
        'Delegatsiya va ishonchni cheklashida',
        'Jamoa mustaqilligini oshirishida',
        'Xodimlarni rivojlantirishida',
        'Motivatsiyani avtomatik oshirishida'
      ],
      answer: 0,
      explanation:
        'Bunday ichki pozitsiya vakolat berish va jamoaga ishonishni qiyinlashtiradi.'
    },
    {
      id: 'm1t3m04',
      text: 'Rahbarning shaxsiy fazilatlari jamoaga qanday ta’sir qiladi?',
      options: [
        'Jamoa kayfiyati va ish unumiga',
        'Faqat hujjat aylanishiga',
        'Faqat dars jadvaliga',
        'Faqat moddiy ta’minotga'
      ],
      answer: 0,
      explanation:
        'Rahbarning shaxsiy fazilatlari jamoaning kayfiyati va ish unumiga bevosita ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t3m05',
      text: 'Rahbarning muammoga emas, shaxsga qaratilgan tanqidi qanday oqibatga olib kelishi mumkin?',
      options: [
        'Himoyalanish va nizoni kuchaytirishga',
        'Ishonchning oshishiga',
        'Hamkorlikning kuchayishiga',
        'Refleksiyaning oshishiga'
      ],
      answer: 0,
      explanation:
        'Shaxsga qaratilgan tanqid xodimda himoyalanish hissini kuchaytirishi va nizoni chuqurlashtirishi mumkin.'
    },
    {
      id: 'm1t3m06',
      text: '“3 soniya qoidasi”ning boshqaruvdagi asosiy maqsadi nima?',
      options: [
        'Impulsiv hissiy javobni oldini olish',
        'Qarorni kechiktirish',
        'Xodimni kutdirish',
        'Majlis vaqtini uzaytirish'
      ],
      answer: 0,
      explanation:
        'Qoidaning maqsadi keskin vaziyatda hissiy reaksiya o‘rniga faktlarga asoslangan yondashuvni tanlashdir.'
    },
    {
      id: 'm1t3m07',
      text: 'Rahbar “Nima bo‘ldi? Qachon? Kim ko‘rdi? Dalil bormi?” deb so‘rasa, qaysi yondashuv namoyon bo‘ladi?',
      options: [
        'Dalilga asoslangan tahlil',
        'Hissiy bosim',
        'Avtoritar nazorat',
        'Taxminiy hukm'
      ],
      answer: 0,
      explanation:
        'Bu savollar vaziyatni faktlar asosida aniqlashga xizmat qiladi.'
    },
    {
      id: 'm1t3m08',
      text: 'Rahbar nutqining “fakt va dalilga tayanish” qoidasi nimani anglatadi?',
      options: [
        'Gapni tekshiriladigan ma’lumotlarga asoslashni',
        'Faqat o‘z fikrini aytishni',
        'Hissiyotlarni kuchaytirishni',
        'Ko‘proq gapirishni'
      ],
      answer: 0,
      explanation:
        'Fakt va dalil rahbar nutqining ishonchliligi va aniqligini oshiradi.'
    },
    {
      id: 'm1t3m09',
      text: 'Rahbar nutqining “yechimga yo‘naltirilganligi” nimani anglatadi?',
      options: [
        'Muammoni aytish bilan birga uni hal qilish yo‘lini ko‘rsatish',
        'Faqat xatoni ko‘rsatish',
        'Aybdorni izlash',
        'Muammoni yashirish'
      ],
      answer: 0,
      explanation:
        'Samarali nutq muammo bilan birga uni hal qilish yo‘liga ham e’tibor qaratadi.'
    },
    {
      id: 'm1t3m10',
      text: 'Xodimni tanqid qilishda avval uning yaxshi sifatlarini e’tirof etish qanday natija berishi mumkin?',
      options: [
        'Tanbehni yengilroq qabul qilishiga yordam beradi',
        'Xodimni jazolaydi',
        'Nizoni kuchaytiradi',
        'Muammoni yashiradi'
      ],
      answer: 0,
      explanation:
        'Materialga ko‘ra, avval yaxshi jihatlarni e’tirof etish tanbehni yengilroq qabul qilishga yordam beradi.'
    },
    {
      id: 'm1t3m11',
      text: 'Rahbar tanqidga uchraganda qanday munosabat maqsadga muvofiq?',
      options: [
        'Bosiq bo‘lib, tanqidni diqqat bilan tinglash',
        'Darhol qarshi hujum qilish',
        'Suhbatni to‘xtatish',
        'Tanqid qilgan xodimni jazolash'
      ],
      answer: 0,
      explanation:
        'Rahbar e’tiroz yoki tanqidni bosiqlik bilan tinglashi kerak.'
    },
    {
      id: 'm1t3m12',
      text: 'Natijaning noaniqligi qonuni nimani ta’kidlaydi?',
      options: [
        'Har bir xodim individual va takrorlanmasligini',
        'Barcha xodim bir xil ishlashini',
        'Topshiriqlar doim bir xil bajarilishini',
        'Rahbar hammani bir xil usulda boshqarishini'
      ],
      answer: 0,
      explanation:
        'Bu qonunga ko‘ra, har bir xodim individual bo‘lgani sababli topshiriqni bajarish usuli ham turlicha bo‘lishi mumkin.'
    },
    {
      id: 'm1t3m13',
      text: 'Inson inson tomonidan yetarli aks ettirilmasligi qonuni nimani bildiradi?',
      options: [
        'Insonning asl imkoniyat va xususiyatlarini to‘liq anglash qiyinligini',
        'Insonni umuman o‘rganib bo‘lmasligini',
        'Barcha xodimlar bir xil ekanini',
        'Rahbar xodimga ishonmasligi kerakligini'
      ],
      answer: 0,
      explanation:
        'Insonni tashqi kuzatuv asosida to‘liq anglash qiyin, chunki uning shaxsiy va kasbiy jihatlari turlicha namoyon bo‘ladi.'
    },
    {
      id: 'm1t3m14',
      text: 'O‘z-o‘zini baholashning noadekvatligi qonuni nimani anglatadi?',
      options: [
        'Shaxsning o‘ziga bergan bahosi real imkoniyatlariga mos kelmasligi mumkinligini',
        'Har kim o‘zini to‘g‘ri baholashini',
        'Faqat rahbar o‘zini baholashini',
        'O‘z-o‘zini baholashning ahamiyatsizligini'
      ],
      answer: 0,
      explanation:
        'Xodimning o‘ziga bergan bahosi ba’zan real kasbiy imkoniyatlari bilan mos kelmasligi mumkin.'
    },
    {
      id: 'm1t3m15',
      text: 'Boshqaruv ma’lumotlari mazmunining yo‘qolib borishi qonuni nimani ko‘rsatadi?',
      options: [
        'Ma’lumot iyerarxiya bo‘ylab uzatilganda mazmunan o‘zgarishi mumkinligini',
        'Ma’lumot hech qachon o‘zgarmasligini',
        'Faqat yozma ma’lumot muhimligini',
        'Barcha ma’lumotlar noto‘g‘ri ekanini'
      ],
      answer: 0,
      explanation:
        'Iyerarxik uzatish jarayonida ma’lumotning mazmuni o‘zgarishi mumkin.'
    },
    {
      id: 'm1t3m16',
      text: 'Kompensatsiya qonunining boshqaruvdagi mazmuni qaysi?',
      options: [
        'Insondagi bir kamchilik boshqa fazilat bilan qoplanishi mumkinligini hisobga olish',
        'Barcha xodimni bir xil baholash',
        'Kamchiliklarni jazolash',
        'Faqat zaif tomonlarni ko‘rish'
      ],
      answer: 0,
      explanation:
        'Kompensatsiya qonuni inson mukammal emasligini va ayrim kamchiliklar boshqa fazilatlar bilan qoplanishini hisobga oladi.'
    },
    {
      id: 'm1t3m17',
      text: 'Situatsion liderlik nima uchun maktab rahbariga zarur?',
      options: [
        'Turli xodim va vaziyatlarga mos boshqaruv usulini tanlash uchun',
        'Faqat tajribali o‘qituvchilarni boshqarish uchun',
        'Faqat yangi o‘qituvchilarni nazorat qilish uchun',
        'Bir xil uslubdan foydalanish uchun'
      ],
      answer: 0,
      explanation:
        'Turli xarakter, tajriba va vaziyatlar rahbardan moslashuvchan boshqaruvni talab qiladi.'
    },
    {
      id: 'm1t3m18',
      text: 'Sangvinik rahbarning stressga chidamliligiga nima yordam beradi?',
      options: [
        'Ijobiy fikrlash va tez moslashuvchanlik',
        'Doimiy xavotir',
        'Sustlik',
        'Noaniqlikdan qo‘rqish'
      ],
      answer: 0,
      explanation:
        'Sangvinikning optimistik va moslashuvchan tabiati stressni boshqarishga yordam berishi mumkin.'
    },
    {
      id: 'm1t3m19',
      text: 'Xolerik rahbarning kuchli tomoni bilan birga qanday xavf bo‘lishi mumkin?',
      options: [
        'Hissiy reaksiyalarini boshqarishda qiyinchilik',
        'Doimo qaror qabul qila olmaslik',
        'Jamoa bilan umuman muloqot qilmaslik',
        'Haddan tashqari sustlik'
      ],
      answer: 0,
      explanation:
        'Xolerik rahbar tezkor va maqsadga intiluvchan bo‘lishi bilan birga hissiy reaksiyalarini nazorat qilishda qiynalishi mumkin.'
    },
    {
      id: 'm1t3m20',
      text: 'Melanxolik rahbarning ehtiyotkorligi qaysi holatda foydali bo‘lishi mumkin?',
      options: [
        'Qarorni chuqur tahlil qilishda',
        'Har qanday qarorni shoshilib qabul qilishda',
        'Nizoni kuchaytirishda',
        'Xodimlarni bosim ostida qoldirishda'
      ],
      answer: 0,
      explanation:
        'Melanxolikning chuqur o‘ylashi va ehtiyotkorligi ayrim vaziyatlarda puxta tahlilga yordam beradi.'
    },
    {
      id: 'm1t3m21',
      text: 'Flegmatik rahbarning hissiy barqarorligi qanday ustunlik beradi?',
      options: [
        'Stressli vaziyatda o‘zini yaxshi nazorat qilish',
        'Tezda jahllanish',
        'Har doim xavotirlanish',
        'Keskin qarorlarni hissiyot bilan qabul qilish'
      ],
      answer: 0,
      explanation:
        'Flegmatik rahbarning tinchligi va sabri stressli vaziyatlarda o‘zini nazorat qilishga yordam beradi.'
    },
    {
      id: 'm1t3m22',
      text: 'Rahbarning professional intizomiga qaysi holat kiradi?',
      options: [
        'Vaqtni boshqarish va nutqni nazorat qilish',
        'Xodimni sharmanda qilish',
        'Faqat buyruq berish',
        'Muammoni yashirish'
      ],
      answer: 0,
      explanation:
        'Professional intizom vaqtni boshqarish, nutq va ohangni nazorat qilish hamda adolatli qaror qabul qilishni o‘z ichiga oladi.'
    },
    {
      id: 'm1t3m23',
      text: 'Rahbarning xodimga ishonch bildirishi qaysi boshqaruv tamoyilini kuchaytiradi?',
      options: [
        'Vakolat berish va jamoaviy mas’uliyatni',
        'Mikroboshqaruvni',
        'Qo‘rquvni',
        'Shaxsiy nazoratni'
      ],
      answer: 0,
      explanation:
        'Ishonch va vakolat berish jamoaning mustaqil faoliyatini kuchaytiradi.'
    },
    {
      id: 'm1t3m24',
      text: 'Rahbarning xodimning fikrini qo‘pollik bilan rad etishi nimaga salbiy ta’sir qiladi?',
      options: [
        'Muloqot va ishonchga',
        'Hujjat aylanishiga',
        'Dars jadvaliga',
        'Moliyaviy hisobga'
      ],
      answer: 0,
      explanation:
        'Qo‘pol muloqot xodimning ishonchi va ochiq fikr bildirish istagini pasaytirishi mumkin.'
    },
    {
      id: 'm1t3m25',
      text: 'Rahbar muammoni hal qilishda ijodiy yondashuvdan foydalansa, qaysi ichki to‘siq kamayadi?',
      options: [
        'Ijodiy yondashuvning yetishmasligi',
        'Empatiya',
        'Ishonch',
        'Vakolat berish'
      ],
      answer: 0,
      explanation:
        'Ijodiy yondashuvning rivojlanishi menejer faoliyatidagi ijodiy to‘siqni kamaytiradi.'
    },
    {
      id: 'm1t3m26',
      text: 'Rahbarning jamoa tashkil etishdagi sust qobiliyati qanday muammoga olib kelishi mumkin?',
      options: [
        'Jamoaviy ish samaradorligining pasayishiga',
        'Avtomatik motivatsiyaga',
        'Ishonchning oshishiga',
        'Hamkorlikning kuchayishiga'
      ],
      answer: 0,
      explanation:
        'Jamoani tashkil eta olmaslik umumiy ish samaradorligiga salbiy ta’sir qilishi mumkin.'
    },
    {
      id: 'm1t3m27',
      text: 'Rahbar xodimni faqat umumiy tarzda “yomon ishlaysan” deb tanqid qilsa, asosiy kamchilik nima?',
      options: [
        'Aniq xatti-harakat ko‘rsatilmagan',
        'Juda ko‘p dalil keltirilgan',
        'Yechim taklif qilingan',
        'Ijobiy jihat e’tirof etilgan'
      ],
      answer: 0,
      explanation:
        'Konstruktiv tanqid aniq xatti-harakat va dalilga tayanishi kerak.'
    },
    {
      id: 'm1t3m28',
      text: 'Rahbarning “biz” tilidan foydalanishi qaysi vaziyatda ayniqsa foydali?',
      options: [
        'Jamoani umumiy maqsadga birlashtirishda',
        'Xodimni ayblashda',
        'Nizoni kuchaytirishda',
        'Shaxsiy javobgarlikni yo‘qotishda'
      ],
      answer: 0,
      explanation:
        '“Biz” tili jamoaviy ruhni shakllantirish va umumiy maqsadni kuchaytirishga xizmat qiladi.'
    },
    {
      id: 'm1t3m29',
      text: 'Rahbarning o‘z xodimlari bilan muomala madaniyatining asosiy belgilaridan biri qaysi?',
      options: [
        'Hurmat va xushmuomalalik',
        'Qo‘pollik',
        'Doimiy tahdid',
        'Hamma oldida tanbeh'
      ],
      answer: 0,
      explanation:
        'Hurmat va xushmuomalalik rahbar-xodim munosabatlarining muhim psixologik asosidir.'
    },
    {
      id: 'm1t3m30',
      text: 'Rahbarning jamoa muvaffaqiyatini o‘z muvaffaqiyati deb bilishi nimani kuchaytiradi?',
      options: [
        'Jamoaviylikni',
        'Shaxsiy manfaatni',
        'Mikroboshqaruvni',
        'Raqobatni'
      ],
      answer: 0,
      explanation:
        'Jamoa muvaffaqiyatini qadrlash umumiy mas’uliyat va jamoaviy ruhni kuchaytiradi.'
    }
  ],

  // =========================================================
  // 30 TA QIYIN
  // =========================================================
  hard: [
    {
      id: 'm1t3h01',
      text: 'Rahbar xodimning xatosini aniqladi, biroq xodimning o‘zini emas, xatti-harakatini muhokama qildi. Bu qaysi psixologik tamoyilga mos?',
      options: [
        'Shaxsga emas, muammoga qarash',
        'Avtoritar boshqaruv',
        'Hissiy bosim',
        'Muammoni yashirish'
      ],
      answer: 0,
      explanation:
        'Boshqaruv psixologiyasida nizoda shaxsni emas, muammo va xatti-harakatni tahlil qilish konstruktiv yondashuv hisoblanadi.'
    },
    {
      id: 'm1t3h02',
      text: 'Rahbar bir xil topshiriqni ikki xodim turlicha bajarganini ko‘rdi. Qaysi qonuniyat buni izohlaydi?',
      options: [
        'Natijaning noaniqligi qonuni',
        'O‘z-o‘zini saqlash qonuni',
        'Kompensatsiya qonuni',
        'Ma’lumotlarning yo‘qolishi qonuni'
      ],
      answer: 0,
      explanation:
        'Har bir xodim individual bo‘lgani uchun bir topshiriq turlicha bajarilishi mumkin.'
    },
    {
      id: 'm1t3h03',
      text: 'Xodim o‘zining kasbiy darajasini juda yuqori deb baholaydi, ammo kuzatuv natijalari buni tasdiqlamaydi. Qaysi qonuniyat namoyon bo‘lmoqda?',
      options: [
        'O‘z-o‘zini baholashning noadekvatligi',
        'Natijaning noaniqligi',
        'Kompensatsiya',
        'O‘z-o‘zini saqlash'
      ],
      answer: 0,
      explanation:
        'Shaxsning o‘ziga bergan bahosi real kompetensiyasi bilan mos kelmasligi mumkin.'
    },
    {
      id: 'm1t3h04',
      text: 'Direktor topshiriqni o‘zi bergan shaklda aniq bajartirish uchun barcha jarayonni shaxsan nazorat qiladi. Bu holatda qaysi boshqaruv muammosi ko‘proq ko‘rinadi?',
      options: [
        'Vakolat berishning yetishmasligi',
        'Empatiyaning yuqoriligi',
        'Jamoaviylik',
        'Konstruktiv feedback'
      ],
      answer: 0,
      explanation:
        'Barcha jarayonni shaxsan nazorat qilish vakolat berish va ishonchni cheklashi mumkin.'
    },
    {
      id: 'm1t3h05',
      text: 'Bir xodim haqida rahbarga bir necha bosqich orqali ma’lumot yetib kelganda mazmuni o‘zgarib ketdi. Bu qaysi qonuniyat?',
      options: [
        'Boshqaruv ma’lumotlari mazmunining yo‘qolib borishi',
        'Kompensatsiya',
        'O‘z-o‘zini saqlash',
        'Natijaning noaniqligi'
      ],
      answer: 0,
      explanation:
        'Iyerarxik uzatish jarayonida ma’lumot mazmunining o‘zgarishi ushbu qonuniyat bilan izohlanadi.'
    },
    {
      id: 'm1t3h06',
      text: 'Rahbar o‘zining xodimlar oldidagi mavqeini saqlash bilan birga rahbarlik odobiga amal qilishi kerak. Bu qaysi qonuniyat bilan bog‘liq?',
      options: [
        'O‘z-o‘zini saqlash qonuni',
        'Kompensatsiya qonuni',
        'Natijaning noaniqligi',
        'Ma’lumotlarning yo‘qolishi'
      ],
      answer: 0,
      explanation:
        'O‘z-o‘zini saqlash qonuni rahbarning o‘z mavqei va rahbarlik odobini saqlashini nazarda tutadi.'
    },
    {
      id: 'm1t3h07',
      text: 'Xodimning bir sohadagi zaifligi boshqa kuchli qobiliyati bilan qoplanmoqda. Rahbar buni hisobga olib vazifa berdi. Qaysi qonuniyat?',
      options: [
        'Kompensatsiya qonuni',
        'Natijaning noaniqligi',
        'O‘z-o‘zini saqlash',
        'Ma’lumotlarning yo‘qolishi'
      ],
      answer: 0,
      explanation:
        'Kompensatsiya qonuni insonning bir jihatidagi kamchilik boshqa fazilat bilan qoplanishi mumkinligini hisobga oladi.'
    },
    {
      id: 'm1t3h08',
      text: 'Rahbar xodimning xatosidan jahli chiqdi. EI tamoyiliga ko‘ra eng maqbul harakat qaysi?',
      options: [
        'Hissiyotini boshqarib, vaziyatni faktlar asosida tahlil qilish',
        'Darhol tanbeh berish',
        'Hamma oldida koyish',
        'Xodimni aybdor deb e’lon qilish'
      ],
      answer: 0,
      explanation:
        'Emotsional intellekt rahbardan hissiyotini anglash va boshqarishni talab qiladi.'
    },
    {
      id: 'm1t3h09',
      text: 'Direktor tajribali pedagogga mustaqil ishlash imkonini, yangi pedagogga esa ko‘proq yo‘naltirish berdi. Bu qaysi yondashuv?',
      options: [
        'Situatsion liderlik',
        'Bir xil boshqaruv',
        'Avtoritar boshqaruv',
        'Tasodifiy boshqaruv'
      ],
      answer: 0,
      explanation:
        'Turli xodimlarga tajribasi va vaziyatiga qarab turlicha yondashish situatsion liderlikka mos.'
    },
    {
      id: 'm1t3h10',
      text: 'Rahbar “Siz mas’uliyatsizsiz” dedi. Keyin esa “Hisobotni belgilangan muddatda topshirmadingiz” dedi. Qaysi ikkinchi yondashuv konstruktivroq?',
      options: [
        'Aniq xatti-harakatga asoslangan yondashuv',
        'Shaxsiyatga qaratilgan tanqid',
        'Umumiy ayblov',
        'Hissiy bosim'
      ],
      answer: 0,
      explanation:
        'Ikkinchi jumla aniq xatti-harakatni ko‘rsatadi va shaxsiyatni baholamaydi.'
    },
    {
      id: 'm1t3h11',
      text: 'Rahbar xodimni tanqid qilishdan oldin uning avvalgi yaxshi ishlarini e’tirof etdi. Bu qanday psixologik samara beradi?',
      options: [
        'Tanqidni qabul qilishni yengillashtirishi mumkin',
        'Tanqidni bekor qiladi',
        'Xodimni jazolaydi',
        'Muammoni yashiradi'
      ],
      answer: 0,
      explanation:
        'Ijobiy jihatni e’tirof etish xodimning tanqidni konstruktivroq qabul qilishiga yordam berishi mumkin.'
    },
    {
      id: 'm1t3h12',
      text: 'Rahbar tanqidga javoban darhol o‘zini oqlay boshladi. Qaysi tavsiya buzildi?',
      options: [
        'Bosiq bo‘lib, tanqidni diqqat bilan tinglash',
        'Faktlarga tayanish',
        'Vakolat berish',
        'Jamoani tashkil etish'
      ],
      answer: 0,
      explanation:
        'Rahbar tanqid yoki e’tirozni avvalo bosiqlik bilan tinglashi kerak.'
    },
    {
      id: 'm1t3h13',
      text: 'Rahbar o‘z xatosini tez tan oldi. Bu jamoada qanday psixologik muhitni qo‘llab-quvvatlashi mumkin?',
      options: [
        'Ochiqlik va ishonchni',
        'Qo‘rquvni',
        'Yashirishni',
        'Hissiy bosimni'
      ],
      answer: 0,
      explanation:
        'Rahbarning o‘z xatosini tan olishi ochiqlik va ishonch madaniyatini mustahkamlashi mumkin.'
    },
    {
      id: 'm1t3h14',
      text: 'Rahbar jamoaga “Sizlar buni bajaringlar” o‘rniga “Biz bu maqsadga birgalikda erishamiz” dedi. Bu qaysi qoida?',
      options: [
        '“Biz” tilidan foydalanish',
        'Faqat buyruq berish',
        'Shaxsiy nazorat',
        'Hissiy bosim'
      ],
      answer: 0,
      explanation:
        '“Biz” tili jamoaviy ruh va umumiy mas’uliyatni kuchaytiradi.'
    },
    {
      id: 'm1t3h15',
      text: 'Rahbarning haddan tashqari optimizmi muammolarni jiddiy baholashga xalaqit bermoqda. Qaysi temperament haqida gap ketmoqda?',
      options: [
        'Sangvinik',
        'Melanxolik',
        'Flegmatik',
        'Xolerik'
      ],
      answer: 0,
      explanation:
        'Materialda sangvinikning ehtimoliy kamchiligi sifatida haddan tashqari optimizm ko‘rsatilgan.'
    },
    {
      id: 'm1t3h16',
      text: 'Rahbar tezkor qarorlar qabul qiladi, kuchli iroda namoyon etadi, ammo ba’zan hissiyotlarini nazorat qilishda qiynaladi. Bu qaysi temperamentga xos?',
      options: [
        'Xolerik',
        'Sangvinik',
        'Flegmatik',
        'Melanxolik'
      ],
      answer: 0,
      explanation:
        'Xolerik rahbar tezkor, maqsadga intiluvchan bo‘lishi mumkin, ammo hissiy reaksiyalarni boshqarishda qiynalishi ehtimoli bor.'
    },
    {
      id: 'm1t3h17',
      text: 'Rahbar qaror qabul qilishdan oldin vaziyatni chuqur tahlil qiladi, mayda jihatlarga ham e’tibor beradi. Bu qaysi temperament xususiyatiga yaqin?',
      options: [
        'Melanxolik',
        'Xolerik',
        'Sangvinik',
        'Flegmatik'
      ],
      answer: 0,
      explanation:
        'Melanxolik rahbar ehtiyotkor, sezgir va chuqur o‘ylovchi bo‘lishi mumkin.'
    },
    {
      id: 'm1t3h18',
      text: 'Rahbar stressli vaziyatda tinchligini saqlab, shoshilmasdan muammoni hal qiladi. Qaysi temperamentga mos?',
      options: [
        'Flegmatik',
        'Xolerik',
        'Melanxolik',
        'Sangvinik'
      ],
      answer: 0,
      explanation:
        'Flegmatik rahbar tinch, sabrli va hissiy jihatdan barqaror bo‘lishi bilan tavsiflanadi.'
    },
    {
      id: 'm1t3h19',
      text: 'Rahbar xodimning tashqi xulqiga qarab uning kasbiy mahoratini to‘liq baholadi. Qaysi qonuniyatni hisobga olmagan?',
      options: [
        'Inson inson tomonidan yetarli aks ettirilmasligi',
        'Kompensatsiya',
        'O‘z-o‘zini saqlash',
        'Natijaning noaniqligi'
      ],
      answer: 0,
      explanation:
        'Insonni tashqi kuzatuv orqali to‘liq anglash qiyin; shaxsiy va kasbiy jihatlar bir xil namoyon bo‘lmasligi mumkin.'
    },
    {
      id: 'm1t3h20',
      text: 'Rahbar barcha xodimlarni bir xil usulda boshqarishga urinmoqda. Qaysi psixologik yondashuv yetishmayapti?',
      options: [
        'Situatsion yondashuv',
        'Bir xil mezon',
        'Professional intizom',
        'O‘z-o‘zini boshqarish'
      ],
      answer: 0,
      explanation:
        'Turli xodim va vaziyatlarga mos yondashish situatsion liderlikning muhim jihatidir.'
    },
    {
      id: 'm1t3h21',
      text: 'Rahbar muammoni ko‘rdi, ammo faqat aybdorni izlash bilan cheklanmoqda. Qaysi boshqaruv yondashuvi yetishmayapti?',
      options: [
        'Yechimga yo‘naltirilgan yondashuv',
        'Hissiy reaksiya',
        'Shaxsiy nazorat',
        'Qattiqqo‘llik'
      ],
      answer: 0,
      explanation:
        'Samarali rahbar muammo bilan birga uni hal qilish yo‘lini ham izlaydi.'
    },
    {
      id: 'm1t3h22',
      text: 'Rahbar xodimning kamchiligini aytishdan oldin uni boshqalar oldida emas, yakka tartibda suhbatga chaqirdi. Bu nimani ta’minlaydi?',
      options: [
        'Xodimning qadr-qimmatini saqlashni',
        'Nazoratni yo‘qotishni',
        'Muammoni yashirishni',
        'Jamoaviy jazoni'
      ],
      answer: 0,
      explanation:
        'Nohaqlik yoki kamchilikni boshqalar oldida aytmaslik xodimning sha’ni va psixologik xavfsizligini saqlashga yordam beradi.'
    },
    {
      id: 'm1t3h23',
      text: 'Rahbarning shaxsiy maqsadi aniq emas. M.Vudkok va D.Frensis tasnifiga ko‘ra bu nima?',
      options: [
        'Samarali boshqaruvga to‘sqinlik qiluvchi ichki omil',
        'Kuchli liderlik belgisi',
        'Kompensatsiya qonuni',
        'Emotsional intellekt belgisi'
      ],
      answer: 0,
      explanation:
        'Shaxsiy maqsadning aniq ifodalanmaganligi samarali menejmentga to‘sqinlik qiluvchi omillardan biridir.'
    },
    {
      id: 'm1t3h24',
      text: 'Rahbar o‘z rivojlanishiga ehtiyoj sezmaydi. Bu qaysi ichki to‘siqqa mos?',
      options: [
        'Shaxsiy rivojlanishga intilishning yo‘qligi',
        'Empatiyaning yuqoriligi',
        'Ijodiy yondashuv',
        'Jamoaviylik'
      ],
      answer: 0,
      explanation:
        'Shaxsiy rivojlanishga intilishning yo‘qligi samarali boshqaruvga to‘sqinlik qiluvchi omillardan biridir.'
    },
    {
      id: 'm1t3h25',
      text: 'Rahbarning xodimlarga ta’sir eta olmasligi nimaga olib kelishi mumkin?',
      options: [
        'Jamoani maqsad sari yo‘naltirish qiyinlashishiga',
        'Avtomatik motivatsiyaga',
        'Ishonchning ortishiga',
        'Delegatsiyaning kuchayishiga'
      ],
      answer: 0,
      explanation:
        'Xodimlarga samarali ta’sir eta olmaslik jamoani umumiy maqsadga yo‘naltirishni qiyinlashtiradi.'
    },
    {
      id: 'm1t3h26',
      text: 'Rahbar xodimning xatosini tanqid qildi, lekin uni qanday tuzatishni ko‘rsatmadi. Qaysi qoida bajarilmagan?',
      options: [
        'Tuzatish yo‘lini aytish',
        'Faktga tayanish',
        '“Biz” tilidan foydalanish',
        'Vaqtni boshqarish'
      ],
      answer: 0,
      explanation:
        'Konstruktiv tanqid xatoni ko‘rsatish bilan birga uni tuzatish yo‘lini ham taklif qilishi kerak.'
    },
    {
      id: 'm1t3h27',
      text: 'Rahbar jamoaning muvaffaqiyatini faqat o‘zining shaxsiy yutug‘i deb hisoblaydi. Qaysi tamoyil buzilmoqda?',
      options: [
        'Jamoa muvaffaqiyatini umumiy muvaffaqiyat sifatida ko‘rish',
        'O‘z-o‘zini saqlash',
        'Vaqtni boshqarish',
        'Temperament'
      ],
      answer: 0,
      explanation:
        'Samarali rahbar jamoa muvaffaqiyatini o‘z muvaffaqiyati bilan bog‘laydi.'
    },
    {
      id: 'm1t3h28',
      text: 'Rahbar qaror qabul qilishda bir xodimning hissiy shikoyatini tekshirmasdan asos qilib oldi. Qaysi tamoyil buzildi?',
      options: [
        'Dalil va faktlarga asoslanish',
        'Empatiya',
        'Hurmat',
        'Vakolat berish'
      ],
      answer: 0,
      explanation:
        'Rahbar qarorni tekshirilgan fakt va dalillarga tayangan holda qabul qilishi kerak.'
    },
    {
      id: 'm1t3h29',
      text: 'Rahbar xodim bilan muloqotda avval uning fikrini tingladi, keyin o‘z nuqtai nazarini tushuntirdi. Bu qaysi kompetensiyani ko‘rsatadi?',
      options: [
        'Muloqot va empatiya',
        'Avtoritarizm',
        'Mikroboshqaruv',
        'Qattiqqo‘llik'
      ],
      answer: 0,
      explanation:
        'Tinglash va boshqa tomon nuqtai nazarini tushunishga harakat qilish empatik muloqotning belgisi.'
    },
    {
      id: 'm1t3h30',
      text: 'Rahbar bir vaziyatda tezkor qaror talab qilinsa tezkor, boshqa vaziyatda esa maslahatlashib qaror qabul qilmoqda. Bu qanday boshqaruv xususiyati?',
      options: [
        'Vaziyatga moslashuvchanlik',
        'Qat’iyatsizlik',
        'Bir xil boshqaruv',
        'Nazoratning yo‘qligi'
      ],
      answer: 0,
      explanation:
        'Vaziyatga qarab boshqaruv usulini o‘zgartirish situatsion va moslashuvchan rahbarlikka xos.'
    }
  ],

  // =========================================================
  // 10 TA CASE
  // =========================================================
  case: [
    {
      id: 'm1t3c01',
      text: 'O‘qituvchi topshiriqni o‘z vaqtida bajarmadi. Direktor jahli chiqib, uni barcha o‘qituvchilar oldida “mas’uliyatsiz” deb atamoqchi. Boshqaruv psixologiyasi nuqtai nazaridan eng maqbul harakat qaysi?',
      options: [
        'Hamma oldida qattiq tanbeh berish',
        'Shaxsni emas, aniq xatti-harakatni muhokama qilib, yakka tartibda konstruktiv suhbat o‘tkazish',
        'Darhol ishdan bo‘shatish',
        'Xatoni umuman muhokama qilmaslik'
      ],
      answer: 1,
      explanation:
        'Tanqid shaxsga emas, xatti-harakatga qaratilishi va xodimning qadr-qimmati saqlanishi kerak.'
    },
    {
      id: 'm1t3c02',
      text: 'Ikki o‘qituvchi o‘rtasida jiddiy nizo chiqdi. Direktor hissiyotga berilmasdan “Nima bo‘ldi? Qachon? Kim ko‘rdi? Dalil bormi?” deb so‘radi. Bu qaysi yondashuv?',
      options: [
        '3 soniya qoidasi va faktlarga asoslangan boshqaruv',
        'Avtoritar boshqaruv',
        'Muammoni yashirish',
        'Xodimni ayblash'
      ],
      answer: 0,
      explanation:
        'Rahbar avval hissiy javobni to‘xtatib, vaziyatni faktlar orqali aniqlamoqda.'
    },
    {
      id: 'm1t3c03',
      text: 'Yangi ish boshlagan o‘qituvchi ko‘p xatolarga yo‘l qo‘ymoqda. Tajribali o‘qituvchi esa mustaqil ishlay oladi. Direktor ikkalasiga ham aynan bir xil boshqaruv usulini qo‘llamoqda. Qaysi yondashuv maqsadga muvofiqroq?',
      options: [
        'Har ikkisini ham bir xil nazorat qilish',
        'Ularning tajribasi va ehtiyojiga mos situatsion yondashuvdan foydalanish',
        'Faqat yangi o‘qituvchini jazolash',
        'Faqat tajribali o‘qituvchini nazorat qilish'
      ],
      answer: 1,
      explanation:
        'Situatsion liderlik xodimning tajribasi va vaziyatiga qarab boshqaruv usulini moslashtirishni nazarda tutadi.'
    },
    {
      id: 'm1t3c04',
      text: 'Direktorning o‘zi xato qaror qabul qilgani ma’lum bo‘ldi. U buni yashirish o‘rniga jamoa oldida tan oldi va tuzatish choralarini belgiladi. Bu qanday psixologik ta’sir ko‘rsatishi mumkin?',
      options: [
        'Ishonch va ochiqlikni kuchaytirishi mumkin',
        'Jamoani albatta zaiflashtiradi',
        'Rahbar mavqeini avtomatik yo‘qotadi',
        'Xodimlarni jazolaydi'
      ],
      answer: 0,
      explanation:
        'Rahbarning xatosini tan olishi ochiqlik va ishonch madaniyatini mustahkamlashi mumkin.'
    },
    {
      id: 'm1t3c05',
      text: 'Sangvinik rahbar maktabda muammo paydo bo‘lsa, “hammasi yaxshi bo‘ladi” deb tezda xulosa qiladi va muammoni chuqur tahlil qilmaydi. Bu vaziyatda uning qaysi ehtimoliy zaif tomoni namoyon bo‘lmoqda?',
      options: [
        'Haddan tashqari optimizm',
        'Haddan tashqari xavotir',
        'Haddan tashqari sokinlik',
        'Qaror qabul qila olmaslik'
      ],
      answer: 0,
      explanation:
        'Materialda sangvinikning ehtimoliy kamchiligi haddan tashqari optimizm sifatida ko‘rsatilgan.'
    },
    {
      id: 'm1t3c06',
      text: 'Xolerik rahbar muammo yuzasidan tezkor qaror qildi, ammo hissiyot bilan baland ovozda gapirdi. Unga qaysi kompetensiyani rivojlantirish ayniqsa muhim?',
      options: [
        'O‘z hissiyotini boshqarish',
        'Tezkorlikni yanada oshirish',
        'Xodimlarni ko‘proq jazolash',
        'Muloqotni butunlay to‘xtatish'
      ],
      answer: 0,
      explanation:
        'Xolerik rahbarda tezkorlik kuchli bo‘lishi mumkin, ammo hissiy reaksiyalarni boshqarish muhim.'
    },
    {
      id: 'm1t3c07',
      text: 'Melanxolik temperamentli rahbar qaror oldidan barcha tafsilotlarni chuqur tahlil qilmoqda, ammo qarorni juda uzoq kechiktirmoqda. Rahbar nimani muvozanatlashtirishi kerak?',
      options: [
        'Ehtiyotkor tahlil va o‘z vaqtida qaror qabul qilishni',
        'Faqat tezlikni',
        'Faqat xavotirni',
        'Faqat boshqalarning fikrini'
      ],
      answer: 0,
      explanation:
        'Chuqur tahlil foydali, ammo rahbar qarorni zarur muddatda qabul qila olishi ham kerak.'
    },
    {
      id: 'm1t3c08',
      text: 'Direktor barcha vazifalarni o‘zi bajaradi, o‘qituvchilarga mustaqil qaror qilish imkonini bermaydi. Natijada jamoa tashabbus ko‘rsatmay qo‘ydi. Asosiy psixologik muammo nima?',
      options: [
        'Vakolat va ishonchning yetishmasligi',
        'Empatiyaning ortiqligi',
        'Jamoaning haddan tashqari mustaqilligi',
        'Konstruktiv feedbackning ko‘pligi'
      ],
      answer: 0,
      explanation:
        'Vakolat bermaslik va xodimlarga ishonmaslik jamoaning tashabbusini pasaytirishi mumkin.'
    },
    {
      id: 'm1t3c09',
      text: 'Direktor o‘qituvchiga: “Darsingiz yomon bo‘ldi”, dedi. Keyin: “Darsda o‘quchilar faolligi past bo‘ldi, guruhli ish qo‘llansa faollik oshishi mumkin edi”, deb fikrini aniqlashtirdi. Qaysi ikkinchi jumla afzal?',
      options: [
        'Chunki u aniq xatti-harakat va rivojlanish yo‘lini ko‘rsatadi',
        'Chunki u qattiqroq tanqid qiladi',
        'Chunki u xodimni sharmanda qiladi',
        'Chunki u muammoni yashiradi'
      ],
      answer: 0,
      explanation:
        'Ikkinchi fikr aniq dalilga va rivojlanish uchun tavsiyaga asoslangan konstruktiv feedbackdir.'
    },
    {
      id: 'm1t3c10',
      text: 'Direktor xodimning kasbiy qobiliyatini faqat uning o‘ziga bergan yuqori bahosiga asoslab belgiladi. Keyinchalik dars kuzatuvi bu bahoni tasdiqlamadi. Qaysi qonuniyatni hisobga olish kerak edi?',
      options: [
        'O‘z-o‘zini baholashning noadekvatligi qonunini',
        'O‘z-o‘zini saqlash qonunini',
        'Kompensatsiya qonunini',
        'Ma’lumotlarning yo‘qolishi qonunini'
      ],
      answer: 0,
      explanation:
        'Xodimning o‘ziga bergan bahosi real kompetensiyaga har doim ham mos kelavermaydi.'
    }
  ]
}
