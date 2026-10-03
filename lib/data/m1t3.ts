import type { Question } from '../quiz-data'

export const M1T3_LEVELS: {
  easy: Question[]
  medium: Question[]
  hard: Question[]
  case: Question[]
} = {
  easy: [
    {
      id: 'm1t3e01',
      text: 'Boshqaruv psixologiyasi asosan nimani o‘rganadi?',
      options: [
        'Rahbarning shaxsiy sifatlari, muloqoti va jamoani boshqarishini',
        'Faqat moliyaviy hisobotlarni',
        'Faqat dars jadvalini',
        'Faqat hujjatlarni arxivlashni',
      ],
      answer: 0,
      explanation:
        'Boshqaruv psixologiyasi rahbarning shaxsiy sifatlari, muloqot uslubi, jamoani boshqarish, motivatsiya va nizolarni hal qilish kabi jihatlarni o‘rganadi.',
    },
    {
      id: 'm1t3e02',
      text: 'Maktabni boshqarish faqat buyruq va hujjatlardan iboratmi?',
      options: [
        'Ha, faqat hujjatlardan iborat',
        'Yo‘q, bu odamlar bilan ishlash san’atini ham talab qiladi',
        'Faqat moliyaviy boshqaruvdan iborat',
        'Faqat nazoratdan iborat',
      ],
      answer: 1,
      explanation:
        'Maktab boshqaruvi buyruq va hujjatlar bilan cheklanmaydi. U odamlar bilan samarali ishlash san’atini ham talab qiladi.',
    },
    {
      id: 'm1t3e03',
      text: 'Emotsional intellekt nima?',
      options: [
        'Faqat o‘z his-tuyg‘ularini yashirish',
        'O‘z va boshqalarning his-tuyg‘ularini tushunish va boshqarish',
        'Faqat ko‘p gapirish qobiliyati',
        'Faqat tanqid qilish qobiliyati',
      ],
      answer: 1,
      explanation:
        'Emotsional intellekt o‘z his-tuyg‘ularini anglash va boshqarish hamda boshqalarning his-tuyg‘ularini tushunishni anglatadi.',
    },
    {
      id: 'm1t3e04',
      text: 'Rahbar tanqid eshitganda qanday yo‘l tutishi kerak?',
      options: [
        'Darhol jahli chiqishi',
        'Suhbatni to‘xtatishi',
        'O‘zini nazorat qilib, vaziyatni xolis tinglashi',
        'Tanqid qilgan xodimni jazolashi',
      ],
      answer: 2,
      explanation:
        'Emotsional intellektli rahbar tanqid vaqtida o‘zini nazorat qiladi va vaziyatni xolis tinglaydi.',
    },
    {
      id: 'm1t3e05',
      text: 'Empatiya nima?',
      options: [
        'Boshqalarning holati va his-tuyg‘ularini tushunish',
        'Faqat o‘z fikrini himoya qilish',
        'Xodimni jazolash',
        'Muammoni yashirish',
      ],
      answer: 0,
      explanation:
        'Empatiya boshqa insonning holati, his-tuyg‘ulari va kechinmalarini tushunishga yordam beradi.',
    },
    {
      id: 'm1t3e06',
      text: 'Samarali rahbar xodim xatosini qanday ko‘rsatishi kerak?',
      options: [
        'Uni hammaga oldida kamsitib',
        'Shaxsiyatiga tegib',
        'Xatosini ko‘rsatib, uni to‘g‘rilash yo‘lini tushuntirib',
        'Umuman izoh bermasdan',
      ],
      answer: 2,
      explanation:
        'Rahbar xatoni shaxsiyatga tegmasdan ko‘rsatishi va uni tuzatish yo‘lini tushuntirishi kerak.',
    },
    {
      id: 'm1t3e07',
      text: 'O‘zini boshqarishning muhim jihatlaridan biri qaysi?',
      options: [
        'Vaqt va ustuvor vazifalarni boshqarish',
        'Barcha ishni boshqalarga yuklash',
        'Tanqidni qabul qilmaslik',
        'Hamma qarorni hissiyot bilan qabul qilish',
      ],
      answer: 0,
      explanation:
        'Self-management, ya’ni o‘zini boshqarish vaqtni to‘g‘ri taqsimlash va ustuvor vazifalarni belgilashni ham o‘z ichiga oladi.',
    },
    {
      id: 'm1t3e08',
      text: 'Rahbar qarorlarni nimaga asoslab qabul qilishi kerak?',
      options: [
        'Taxminlarga',
        'Shaxsiy kayfiyatga',
        'Dalil va faktlarga',
        'Mish-mishlarga',
      ],
      answer: 2,
      explanation:
        'Samarali rahbar qarorlarini dalil va faktlarga asoslaydi.',
    },
    {
      id: 'm1t3e09',
      text: 'Rahbar uchun adolat nimani anglatadi?',
      options: [
        'Har kimga turlicha mezon qo‘llash',
        'Tanishlarga imtiyoz berish',
        'Bir xil va adolatli mezonlardan foydalanish',
        'Faqat kuchli xodimlarni qo‘llab-quvvatlash',
      ],
      answer: 2,
      explanation:
        'Rahbar xodimlarni baholashda teng va adolatli mezonlardan foydalanishi kerak.',
    },
    {
      id: 'm1t3e10',
      text: 'Kuchli rahbar delegatsiyaga qanday qaraydi?',
      options: [
        'Vakolatlarni hech kimga bermaydi',
        'Vazifalarni ishonch asosida taqsimlaydi',
        'Barcha ishni o‘zi bajaradi',
        'Xodimlarga ishonmaydi',
      ],
      answer: 1,
      explanation:
        'Kuchli rahbar vakolat va vazifalarni jamoa a’zolariga ishonch asosida taqsimlaydi.',
    },
    {
      id: 'm1t3e11',
      text: '“Men hamma narsani nazorat qilishim kerak” pozitsiyasi nimaga olib kelishi mumkin?',
      options: [
        'Delegatsiya va ishonchning kamayishiga',
        'Jamoaning mustaqilligi oshishiga',
        'Xodimlarning motivatsiyasi oshishiga',
        'Barcha muammolarning yo‘qolishiga',
      ],
      answer: 0,
      explanation:
        'Hamma narsani o‘zi nazorat qilish istagi delegatsiya va xodimlarga ishonchni kamaytirishi mumkin.',
    },
    {
      id: 'm1t3e12',
      text: 'Jamoa muvaffaqiyatini o‘z muvaffaqiyati deb biladigan rahbar qanday yondashuvga ega?',
      options: [
        'Jamoaviy yondashuvga',
        'Faqat individual yondashuvga',
        'Buyruqbozlikka',
        'Beparvolikka',
      ],
      answer: 0,
      explanation:
        'Samarali rahbar jamoaning umumiy natijasini o‘z muvaffaqiyatining bir qismi deb biladi.',
    },
    {
      id: 'm1t3e13',
      text: 'M. Woodcock va D. Francis rahbar samaradorligiga to‘sqinlik qiluvchi nechta ichki to‘siqni ko‘rsatgan?',
      options: ['7 ta', '9 ta', '11 ta', '15 ta'],
      answer: 2,
      explanation:
        'Manbada rahbar samaradorligini pasaytiruvchi 11 ta ichki to‘siq ko‘rsatilgan.',
    },
    {
      id: 'm1t3e14',
      text: 'Quyidagilardan qaysi biri rahbarning ichki to‘siqlaridan biridir?',
      options: [
        'O‘zini rivojlantirishning yetishmasligi',
        'Jamoani qo‘llab-quvvatlash',
        'Adolatli qaror qabul qilish',
        'Xodimni rag‘batlantirish',
      ],
      answer: 0,
      explanation:
        'O‘zini rivojlantirishning yetishmasligi rahbar samaradorligiga to‘sqinlik qiluvchi ichki omillardan biridir.',
    },
    {
      id: 'm1t3e15',
      text: 'Ijtimoiy-psixologik tuzilmaning tarkibiy qismlari qaysilar?',
      options: [
        'Missiya, e’tiqod, qadriyat, ustanovka, xulq-atvor',
        'Buyruq, hisobot, dalolatnoma, bayonnoma, ariza',
        'Reja, jadval, ta’til, ish haqi, mukofot',
        'Faqat missiya va maqsad',
      ],
      answer: 0,
      explanation:
        'Ijtimoiy-psixologik tuzilma Missiya, E’tiqod, Qadriyat, Ustanovka va Xulq-atvor qismlaridan iborat.',
    },
    {
      id: 'm1t3e16',
      text: 'Tanqid qilishda nimaga e’tibor qaratish kerak?',
      options: [
        'Shaxsiyatga',
        'Xulq-atvor va aniq harakatga',
        'Oila a’zolariga',
        'Shaxsiy hayotga',
      ],
      answer: 1,
      explanation:
        'Tanqid shaxsga emas, konkret xatti-harakat va vaziyatga qaratilishi kerak.',
    },
    {
      id: 'm1t3e17',
      text: '“3 soniya qoidasi”ning asosiy maqsadi nima?',
      options: [
        'Suhbatni tez tugatish',
        'Keskin vaziyatda hissiy javobni kechiktirish',
        'Xodimni jazolash',
        'Muammoni yashirish',
      ],
      answer: 1,
      explanation:
        '3 soniya qoidasi keskin vaziyatda darhol hissiy javob bermasdan, o‘zini nazorat qilishga yordam beradi.',
    },
    {
      id: 'm1t3e18',
      text: '3 soniya qoidasi asosida rahbar avvalo nima qilishi kerak?',
      options: [
        'Baqirishi',
        'Jazo belgilashi',
        'Pauza qilib, vaziyat faktlarini aniqlashi',
        'Xodimni ishdan bo‘shatishi',
      ],
      answer: 2,
      explanation:
        'Rahbar qisqa pauza qilib, “nima bo‘ldi, qachon, kim ko‘rdi, qanday dalil bor?” kabi savollarni aniqlashi kerak.',
    },
    {
      id: 'm1t3e19',
      text: 'Rahbar nutqining birinchi talabi nima?',
      options: [
        'Uzoq bo‘lishi',
        'Qisqa va aniq bo‘lishi',
        'Juda murakkab bo‘lishi',
        'Faqat buyruqlardan iborat bo‘lishi',
      ],
      answer: 1,
      explanation:
        'Rahbar nutqi qisqa, aniq va tushunarli bo‘lishi kerak.',
    },
    {
      id: 'm1t3e20',
      text: 'Rahbar nutqida “biz” tilidan foydalanish nimani kuchaytiradi?',
      options: [
        'Jamoaviylikni',
        'Qo‘rquvni',
        'Rasmiyatchilikni',
        'Masofani',
      ],
      answer: 0,
      explanation:
        '“Biz” tilidan foydalanish jamoaviylik va hamkorlik ruhini kuchaytiradi.',
    },
    {
      id: 'm1t3e21',
      text: 'Sangvinik temperamentiga xos belgi qaysi?',
      options: [
        'Faol va tez moslashuvchan',
        'Juda sust va passiv',
        'Doimiy xavotirli',
        'Faqat yolg‘iz ishlashni xohlovchi',
      ],
      answer: 0,
      explanation:
        'Sangvinik faol, tezkor, ijobiy, muloqotchan va vaziyatga tez moslashuvchan bo‘ladi.',
    },
    {
      id: 'm1t3e22',
      text: 'Xolerik temperamentiga xos jihat qaysi?',
      options: [
        'Energetik va maqsadga intiluvchan',
        'Juda sekin va ehtiyotkor',
        'Doimiy xavotirda bo‘lish',
        'Passivlik',
      ],
      answer: 0,
      explanation:
        'Xolerik energiyaga boy, irodali, tezkor va maqsadga yo‘naltirilgan bo‘ladi.',
    },
    {
      id: 'm1t3e23',
      text: 'Flegmatikning asosiy xususiyati qaysi?',
      options: [
        'Sokin va barqarorlik',
        'Keskin hissiy portlash',
        'Doimiy xavotir',
        'Juda tez qaror qilish',
      ],
      answer: 0,
      explanation:
        'Flegmatik sokin, barqaror, ehtiyotkor va stressga nisbatan chidamli bo‘lishi mumkin.',
    },
    {
      id: 'm1t3e24',
      text: 'Melanxolik temperamentiga xos xususiyat qaysi?',
      options: [
        'Ta’sirchanlik va o‘zini ko‘p tanqid qilish',
        'Doimiy yuqori energiya',
        'Keskin buyruqbozlik',
        'Juda tez moslashish',
      ],
      answer: 0,
      explanation:
        'Melanxolik ta’sirchan, hissiy, o‘zini tanqid qilishga moyil va ehtiyotkor bo‘ladi.',
    },
    {
      id: 'm1t3e25',
      text: 'Sangvinikning ehtimoliy zaif jihati qaysi?',
      options: [
        'Haddan tashqari optimizm',
        'Doimiy passivlik',
        'Juda kuchli xavotir',
        'Sekin qaror qilish',
      ],
      answer: 0,
      explanation:
        'Sangvinikning ayrim holatlarda haddan tashqari optimistik bo‘lishi zaif jihat sifatida ko‘rsatiladi.',
    },
    {
      id: 'm1t3e26',
      text: 'Xolerik uchun qaysi muammo kuzatilishi mumkin?',
      options: [
        'Hissiyot va g‘azabni nazorat qilishda qiyinchilik',
        'Har doim passiv bo‘lish',
        'Doimiy ikkilanish',
        'Ishga qiziqmaslik',
      ],
      answer: 0,
      explanation:
        'Xolerik tezkor va energetik bo‘lsa-da, ayrim hollarda hissiyot va g‘azabni boshqarishda qiynalishi mumkin.',
    },
    {
      id: 'm1t3e27',
      text: 'Qaysi temperament stressga nisbatan chidamliroq deb tavsiflangan?',
      options: [
        'Flegmatik',
        'Melanxolik',
        'Faqat xolerik',
        'Hech biri',
      ],
      answer: 0,
      explanation:
        'Manbada flegmatik stressga nisbatan chidamliroq temperament sifatida ko‘rsatilgan.',
    },
    {
      id: 'm1t3e28',
      text: '“Bumerang” qonunlaridan biri — kompensatsiya nimani anglatadi?',
      options: [
        'Hech kim mukammal emas, kuchli tomonlar zaif tomonlarni qoplaydi',
        'Hamma bir xil qobiliyatga ega',
        'Faqat kamchiliklarni ko‘rish',
        'Xodimni doimiy jazolash',
      ],
      answer: 0,
      explanation:
        'Kompensatsiya qonuniga ko‘ra, hech kim mukammal emas; insonning kuchli tomonlari ayrim zaif tomonlarini qoplashi mumkin.',
    },
    {
      id: 'm1t3e29',
      text: 'Rahbar xodimning xatosini ko‘rsatishda qaysi usuldan qochishi kerak?',
      options: [
        'Aniq misol keltirishdan',
        'Tuzatish yo‘lini ko‘rsatishdan',
        'Shaxsiyatini kamsitishdan',
        'Ishonch bildirishdan',
      ],
      answer: 2,
      explanation:
        'Tanqid xodimning shaxsiyatini kamsitmasligi, balki aniq xatti-harakatga qaratilishi kerak.',
    },
    {
      id: 'm1t3e30',
      text: 'Samarali tanqid qanday yakunlanishi maqsadga muvofiq?',
      options: [
        'Qo‘rqitish bilan',
        'Ishonch va tuzatish imkoniyatiga urg‘u berish bilan',
        'Haqorat bilan',
        'Suhbatni keskin tugatish bilan',
      ],
      answer: 1,
      explanation:
        'Tanqid yakunida xodimga ishonch bildirish va tuzatish imkoniyatini ko‘rsatish samarali hisoblanadi.',
    },
  ],

  medium: [
    {
      id: 'm1t3m01',
      text: 'Rahbarning emotsional intellekti nizolarni boshqarishda qanday yordam beradi?',
      options: [
        'Hissiyotlarni kuchaytiradi',
        'Muammoni shaxsga aylantiradi',
        'Hissiyotlarni boshqarib, muammoni mazmunan hal qilishga yordam beradi',
        'Nizoni yashiradi',
      ],
      answer: 2,
      explanation:
        'Emotsional intellekt rahbarga o‘z hissiyotlarini boshqarish va nizoni shaxsiy qarama-qarshilikka aylantirmasdan hal qilish imkonini beradi.',
    },
    {
      id: 'm1t3m02',
      text: 'Rahbarning qarorlarni faktlarga asoslab qabul qilishi nimani ta’minlaydi?',
      options: [
        'Subyektivlikni kuchaytiradi',
        'Qarorlarning asoslanganligini oshiradi',
        'Hissiy bosimni kuchaytiradi',
        'Xodimlar bilan masofani oshiradi',
      ],
      answer: 1,
      explanation:
        'Fakt va dalillarga asoslangan qarorlar boshqaruv jarayonining asoslanganligini oshiradi.',
    },
    {
      id: 'm1t3m03',
      text: 'Tajribali va yangi o‘qituvchiga bir xil boshqaruv usulini qo‘llash nega samarasiz bo‘lishi mumkin?',
      options: [
        'Barcha xodimlar bir xil emasligi sababli',
        'Chunki tajribali xodimlar ishlamaydi',
        'Chunki yangi xodimlar har doim xato qiladi',
        'Chunki rahbar nazorat qilmasligi kerak',
      ],
      answer: 0,
      explanation:
        'Situatsion liderlik turli xodimlarning tajribasi, ehtiyoji va vaziyatiga mos yondashuvni talab qiladi.',
    },
    {
      id: 'm1t3m04',
      text: 'Situatsion liderlikning asosiy mazmuni nima?',
      options: [
        'Har doim bitta usuldan foydalanish',
        'Vaziyat va xodim xususiyatiga mos boshqaruv usulini tanlash',
        'Faqat qattiq nazorat qilish',
        'Barcha vakolatni rahbarda saqlash',
      ],
      answer: 1,
      explanation:
        'Situatsion liderlikda rahbar boshqaruv usulini vaziyat va xodimning xususiyatlariga moslashtiradi.',
    },
    {
      id: 'm1t3m05',
      text: 'Rahbar tasodifiy xato uchun xodimni keskin tanqid qilsa, qaysi kommunikativ tamoyil buziladi?',
      options: [
        'Tasodifiy xatolar uchun keskin tanqid qilmaslik',
        'Faktlardan foydalanish',
        'Rag‘batlantirish',
        'Delegatsiya',
      ],
      answer: 0,
      explanation:
        'Kommunikatsiya madaniyatida tasodifiy xato yoki kamchilik uchun keskin tanbeh berish tavsiya etilmaydi.',
    },
    {
      id: 'm1t3m06',
      text: 'Xodimning fikri noto‘g‘ri bo‘lsa, rahbar qanday yo‘l tutishi kerak?',
      options: [
        'Uni boshqalar oldida masxara qilish',
        'Qo‘pol tarzda xatosini aytish',
        'Hurmat bilan fikrni muhokama qilish',
        'Suhbatni darhol tugatish',
      ],
      answer: 2,
      explanation:
        'Rahbar boshqalarning fikriga hurmat bilan munosabatda bo‘lishi va noto‘g‘ri fikrni qo‘polliksiz tushuntirishi kerak.',
    },
    {
      id: 'm1t3m07',
      text: 'Tanqid oldidan xodimning yaxshi tomonlarini e’tirof etish qanday natija berishi mumkin?',
      options: [
        'Tanqidni qabul qilishni osonlashtiradi',
        'Xodimni qo‘rqitadi',
        'Nizoni kuchaytiradi',
        'Muammoni yashiradi',
      ],
      answer: 0,
      explanation:
        'Oldingi yaxshi ishlar va ijobiy jihatlarni e’tirof etish konstruktiv tanqidni qabul qilishni osonlashtiradi.',
    },
    {
      id: 'm1t3m08',
      text: 'Rahbarning o‘zi xato qilganini tez va qat’iy tan olishi nimani ko‘rsatadi?',
      options: [
        'Zaiflikni',
        'Mas’uliyat va ochiqlikni',
        'Beparvolikni',
        'Nazorat yo‘qligini',
      ],
      answer: 1,
      explanation:
        'O‘z xatosini tan olish rahbarning mas’uliyatli va ochiq munosabatini ko‘rsatadi.',
    },
    {
      id: 'm1t3m09',
      text: 'Rahbarning nutqi faqat buyruqlardan iborat bo‘lsa, qaysi tamoyil yetishmaydi?',
      options: [
        'Hamkorlik va yechimga yo‘naltirilganlik',
        'Nazorat',
        'Rasmiyatchilik',
        'Mas’uliyat',
      ],
      answer: 0,
      explanation:
        'Rahbar nutqi yechimga yo‘naltirilgan, jamoaviy va konstruktiv bo‘lishi kerak.',
    },
    {
      id: 'm1t3m10',
      text: '“Biz bu masalani birgalikda hal qilamiz” jumlasi qaysi kommunikatsiya tamoyiliga mos?',
      options: [
        '“Men” tiliga',
        '“Biz” tiliga',
        'Buyruqbozlikka',
        'Tanqidga',
      ],
      answer: 1,
      explanation:
        '“Biz” tilidan foydalanish jamoaviy mas’uliyat va hamkorlikni kuchaytiradi.',
    },
    {
      id: 'm1t3m11',
      text: 'Rahbar keskin vaziyatda darhol javob bermasdan 3 soniya kutsa, asosiy maqsad nima?',
      options: [
        'Vaziyatni cho‘zish',
        'Hissiy reaksiyani nazorat qilish',
        'Xodimni jazolash',
        'Muammoni unutish',
      ],
      answer: 1,
      explanation:
        '3 soniya pauza rahbarga hissiy reaksiyani nazorat qilib, keyin faktlarga asoslangan javob berishga yordam beradi.',
    },
    {
      id: 'm1t3m12',
      text: '3 soniya qoidasidan keyin qaysi savol eng maqbul?',
      options: [
        '“Kim aybdor?”',
        '“Siz nega doim shunday qilasiz?”',
        '“Nima bo‘ldi va bunga qanday dalil bor?”',
        '“Kimni jazolaymiz?”',
      ],
      answer: 2,
      explanation:
        '3 soniya qoidasi faktlarni aniqlashni nazarda tutadi: nima bo‘ldi, qachon, kim ko‘rdi va qanday dalil bor.',
    },
    {
      id: 'm1t3m13',
      text: 'Xodimning professional mahorati past, lekin insoniy fazilatlari yaxshi bo‘lsa, rahbar qaysi “Bumerang” qonunini hisobga olishi mumkin?',
      options: [
        'Kompensatsiya',
        'Noaniq natija',
        'O‘zini saqlash',
        'Axborotning yo‘qolishi',
      ],
      answer: 0,
      explanation:
        'Kompensatsiya qonuni insonning ayrim kuchli tomonlari boshqa zaif tomonlarini qoplashi mumkinligini bildiradi.',
    },
    {
      id: 'm1t3m14',
      text: 'Bir xil topshiriqni ikki xodim turlicha bajarsa, bu qaysi “Bumerang” qonuniga mos?',
      options: [
        'Natijaning noaniqligi',
        'Kompensatsiya',
        'O‘zini saqlash',
        'Axborotning yo‘qolishi',
      ],
      answer: 0,
      explanation:
        'Har bir xodim individual bo‘lgani sababli bir xil topshiriq turlicha bajarilishi mumkin.',
    },
    {
      id: 'm1t3m15',
      text: 'Rahbar xodim o‘zini juda yuqori baholayotganini aniqlasa, qaysi qonun muhim?',
      options: [
        'O‘z-o‘zini baholashning nomuvofiqligi',
        'Kompensatsiya',
        'O‘zini saqlash',
        'Natijaning noaniqligi',
      ],
      answer: 0,
      explanation:
        'Odamning o‘zini baholashi real imkoniyatidan yuqori yoki past bo‘lishi mumkin. Bu o‘z-o‘zini baholashning nomuvofiqligi bilan bog‘liq.',
    },
    {
      id: 'm1t3m16',
      text: '“Aysberg” o‘xshatishi boshqaruv psixologiyasida nimani ifodalash uchun ishlatiladi?',
      options: [
        'Insonning barcha jihatlari bir qarashda ko‘rinmasligini',
        'Faqat kasbiy bilimni',
        'Faqat tashqi ko‘rinishni',
        'Faqat lavozimni',
      ],
      answer: 0,
      explanation:
        'Aysberg o‘xshatishi insonning ko‘rinadigan va yashirin jihatlari mavjudligini, uni to‘liq baholash qiyinligini anglatadi.',
    },
    {
      id: 'm1t3m17',
      text: 'Boshqaruv axboroti ierarxiya bo‘ylab o‘tganda mazmuni o‘zgarishi qaysi qonun bilan bog‘liq?',
      options: [
        'Boshqaruv axboroti mazmunining yo‘qolishi',
        'Kompensatsiya',
        'O‘zini saqlash',
        'Natijaning noaniqligi',
      ],
      answer: 0,
      explanation:
        'Axborot bir boshqaruv pog‘onasidan boshqasiga o‘tganda uning mazmuni yoki talqini o‘zgarishi mumkin.',
    },
    {
      id: 'm1t3m18',
      text: 'Rahbarning o‘z lavozimini saqlashi bilan bog‘liq qonun qaysi?',
      options: [
        'O‘zini saqlash',
        'Kompensatsiya',
        'Noaniqlik',
        'O‘z-o‘zini baholash',
      ],
      answer: 0,
      explanation:
        '“O‘zini saqlash” qonuni rahbarning o‘z mavqeini saqlash va rahbarlik etikasi bilan bog‘liq.',
    },
    {
      id: 'm1t3m19',
      text: 'Rahbarning jamoa muvaffaqiyatini o‘z muvaffaqiyati deb bilishi qaysi yondashuvni ifodalaydi?',
      options: [
        'Jamoaviy boshqaruv',
        'Avtoritar yondashuv',
        'Izolyatsiya',
        'Passiv boshqaruv',
      ],
      answer: 0,
      explanation:
        'Jamoaning umumiy natijasini o‘z natijasi sifatida ko‘rish jamoaviy boshqaruvga mos keladi.',
    },
    {
      id: 'm1t3m20',
      text: 'Rahbarning ichki maqsadlari noaniq bo‘lsa, qanday muammo yuzaga kelishi mumkin?',
      options: [
        'Boshqaruv yo‘nalishining noaniqligi',
        'Jamoa avtomatik rivojlanadi',
        'Nazorat kamayib, samaradorlik oshadi',
        'Barcha qarorlar tezlashadi',
      ],
      answer: 0,
      explanation:
        'Shaxsiy maqsadlarning noaniqligi rahbarning boshqaruvdagi ustuvor yo‘nalishlarini belgilashni qiyinlashtiradi.',
    },
    {
      id: 'm1t3m21',
      text: 'Rahbarning ijodiy yondashuvi yetishmasa, qanday muammo yuzaga kelishi mumkin?',
      options: [
        'Muammolarga yangi yechim topish qiyinlashadi',
        'Jamoa avtomatik kuchayadi',
        'Nizolar yo‘qoladi',
        'Motivatsiya doimiy oshadi',
      ],
      answer: 0,
      explanation:
        'Ijodiy yondashuvning yetishmasligi murakkab muammolarga yangi va samarali yechimlar topishni qiyinlashtiradi.',
    },
    {
      id: 'm1t3m22',
      text: 'Rahbar xodimlarga ta’sir o‘tkaza olmasa, qaysi ichki to‘siq mavjud bo‘ladi?',
      options: [
        'Xodimlarga ta’sir ko‘rsatish qobiliyatining yetishmasligi',
        'Vaqtni boshqarishning yaxshi yo‘lga qo‘yilgani',
        'Adolatli boshqaruv',
        'Rag‘batlantirish',
      ],
      answer: 0,
      explanation:
        'Xodimlarga samarali ta’sir ko‘rsatish qobiliyatining yetishmasligi rahbar samaradorligiga to‘sqinlik qiladi.',
    },
    {
      id: 'm1t3m23',
      text: 'Flegmatik xodim muammoga nisbatan qanday munosabat bildirishi mumkin?',
      options: [
        'Sokin va ehtiyotkor yondashishi',
        'Darhol hissiy portlashi',
        'Doimiy xavotirga tushishi',
        'Juda tez va o‘ylamasdan qaror qilishi',
      ],
      answer: 0,
      explanation:
        'Flegmatik odatda sokin, barqaror va ehtiyotkor bo‘ladi hamda qaror chiqarishga ko‘proq vaqt sarflashi mumkin.',
    },
    {
      id: 'm1t3m24',
      text: 'Melanxolik xodimga rahbar qanday yondashuvni hisobga olishi kerak?',
      options: [
        'Uning ta’sirchanligi va o‘zini tanqid qilishga moyilligini',
        'Faqat qattiq bosimni',
        'Doimiy jazoni',
        'Uni jamoada e’tiborsiz qoldirishni',
      ],
      answer: 0,
      explanation:
        'Melanxolik ta’sirchan va o‘zini tanqid qilishga moyil bo‘lishi mumkin. Rahbar buni hisobga olishi kerak.',
    },
    {
      id: 'm1t3m25',
      text: 'Xolerik xodim bilan ishlashda rahbar nimaga e’tibor berishi mumkin?',
      options: [
        'Energiya va maqsadga intilishini to‘g‘ri yo‘naltirishga',
        'Uni doimiy cheklashga',
        'Fikrini tinglamaslikka',
        'Har doim jazolashga',
      ],
      answer: 0,
      explanation:
        'Xolerikning kuchli energiyasi va maqsadga intilishini to‘g‘ri yo‘naltirish boshqaruv uchun muhim.',
    },
    {
      id: 'm1t3m26',
      text: 'Sangvinik xodim bilan ishlashda qaysi jihatni hisobga olish kerak?',
      options: [
        'Faolligi va tez moslashuvchanligini',
        'Doimiy passivligini',
        'Juda sekin qaror qilishini',
        'Doimiy xavotirini',
      ],
      answer: 0,
      explanation:
        'Sangvinik faol, muloqotchan va tez moslashuvchan bo‘lishi mumkin.',
    },
    {
      id: 'm1t3m27',
      text: 'Rahbar tanqidni aniq misol bilan tushuntirsa, bu qanday yondashuv?',
      options: [
        'Konstruktiv tanqid',
        'Shaxsiy hujum',
        'Norasmiy jazo',
        'Manipulyatsiya',
      ],
      answer: 0,
      explanation:
        'Aniq misol, xulq-atvorga e’tibor va tuzatish yo‘lini ko‘rsatish konstruktiv tanqidga xos.',
    },
    {
      id: 'm1t3m28',
      text: 'Rahbarning nutqini yechimga yo‘naltirish nimani anglatadi?',
      options: [
        'Muammo bilan birga uni hal qilish yo‘lini ham muhokama qilish',
        'Faqat aybdorni izlash',
        'Faqat kamchilikni sanash',
        'Muammoni yashirish',
      ],
      answer: 0,
      explanation:
        'Yechimga yo‘naltirilgan nutq muammoni aniqlash bilan birga uni qanday hal qilishni ham ko‘rib chiqadi.',
    },
    {
      id: 'm1t3m29',
      text: 'Rahbarning stressga chidamliligi nima uchun muhim?',
      options: [
        'Keskin vaziyatlarda oqilona qaror qilish uchun',
        'Xodimlarni qo‘rqitish uchun',
        'Tanqidni butunlay rad etish uchun',
        'Barcha vazifani o‘zi bajarish uchun',
      ],
      answer: 0,
      explanation:
        'Stressga chidamlilik rahbarga keskin vaziyatlarda hissiyotlarni boshqarib, oqilona qaror qilishga yordam beradi.',
    },
    {
      id: 'm1t3m30',
      text: 'Temperament va stress o‘rtasidagi munosabat qanday?',
      options: [
        'Temperament stressga munosabatga ta’sir qilishi mumkin',
        'Ular o‘rtasida hech qanday bog‘liqlik yo‘q',
        'Barcha temperamentlar stressga bir xil javob beradi',
        'Faqat lavozim ta’sir qiladi',
      ],
      answer: 0,
      explanation:
        'Turli temperament egalari stressli vaziyatlarga turlicha reaksiya qilishi mumkin.',
    },
  ],

  hard: [
    {
      id: 'm1t3h01',
      text: 'Rahbar tanqid eshitganda darhol o‘zini oqlashga o‘tadi. Bu holatda qaysi kompetensiya yetishmasligi ehtimoli yuqori?',
      options: [
        'Emotsional o‘zini boshqarish',
        'Hujjat yuritish',
        'Moliyaviy rejalashtirish',
        'Texnik nazorat',
      ],
      answer: 0,
      explanation:
        'Tanqid vaqtida hissiy reaksiyani nazorat qila olmaslik emotsional o‘zini boshqarish bilan bog‘liq.',
    },
    {
      id: 'm1t3h02',
      text: 'Rahbar barcha vazifalarni o‘zi bajaradi va xodimlarga vakolat bermaydi. Bu qaysi boshqaruv muammosini ko‘rsatadi?',
      options: [
        'Delegatsiya va ishonchning yetishmasligini',
        'Jamoaviylikning yuqoriligini',
        'Situatsion liderlikni',
        'Kompensatsiyani',
      ],
      answer: 0,
      explanation:
        'Vakolat bermaslik rahbarning xodimlarga ishonchi va delegatsiya qilish qobiliyati yetarli emasligini ko‘rsatishi mumkin.',
    },
    {
      id: 'm1t3h03',
      text: 'Rahbar bir xil muammo uchun turli xodimlarga turlicha mezon qo‘llaydi. Qaysi tamoyil buzilgan?',
      options: [
        'Adolat va teng mezon',
        'Ijodkorlik',
        'Empatiya',
        'Delegatsiya',
      ],
      answer: 0,
      explanation:
        'Rahbar qaror va baholashda teng hamda adolatli mezonlardan foydalanishi kerak.',
    },
    {
      id: 'm1t3h04',
      text: 'Rahbar xodimni jamoa oldida “siz mas’uliyatsiz odamsiz” deb tanqid qildi. Bu tanqidning qaysi jihati noto‘g‘ri?',
      options: [
        'Shaxsiyatga hujum qilingan',
        'Aniq dalil keltirilgan',
        'Yechim ko‘rsatilgan',
        'Ishonch bildirilgan',
      ],
      answer: 0,
      explanation:
        'Tanqid shaxsga emas, konkret xatti-harakatga qaratilishi kerak. Bundan tashqari, boshqalar oldida kamsitish kommunikatsiya madaniyatiga zid.',
    },
    {
      id: 'm1t3h05',
      text: 'Rahbar xodimning xatosini aniqladi, ammo vaziyatni tekshirmasdan jazoladi. Qaysi tamoyil buzildi?',
      options: [
        'Fakt va dalillar asosida qaror qilish',
        'Rag‘batlantirish',
        'Delegatsiya',
        'Temperamentni hisobga olish',
      ],
      answer: 0,
      explanation:
        'Rahbar qaror chiqarishdan oldin vaziyat faktlarini aniqlashi va dalillarni tekshirishi kerak.',
    },
    {
      id: 'm1t3h06',
      text: 'Rahbar yangi ishga kelgan o‘qituvchiga tajribali o‘qituvchiga beradigan topshiriq va mustaqillikni aynan takrorladi. Qaysi yondashuv yetishmayapti?',
      options: [
        'Situatsion liderlik',
        'Kompensatsiya',
        'O‘zini saqlash',
        'Axborot nazariyasi',
      ],
      answer: 0,
      explanation:
        'Turli tajriba va ehtiyojdagi xodimlarga bir xil yondashuv qo‘llash situatsion liderlik tamoyiliga mos kelmaydi.',
    },
    {
      id: 'm1t3h07',
      text: 'Rahbar muammo haqida “Kim aybdor?” savolini berishdan oldin qaysi savollarni aniqlashi kerak?',
      options: [
        'Nima bo‘ldi, qachon, kim ko‘rdi va qanday dalil bor?',
        'Kimni jazolash kerak?',
        'Kim eng ko‘p xato qiladi?',
        'Kimning obro‘si past?',
      ],
      answer: 0,
      explanation:
        '3 soniya qoidasi vaziyatni hissiy baholashdan oldin faktlarni aniqlashni talab qiladi.',
    },
    {
      id: 'm1t3h08',
      text: 'Rahbar xodimni tanqid qilishdan oldin uning oldingi yaxshi ishini e’tirof etdi. Bu qanday psixologik yondashuv?',
      options: [
        'Konstruktiv va qabul qilinishi osonroq tanqid',
        'Manipulyativ jazo',
        'Qattiq nazorat',
        'Rasmiy ogohlantirish',
      ],
      answer: 0,
      explanation:
        'Oldingi yaxshi faoliyatni e’tirof etish xodimning himoyalanish reaksiyasini kamaytirib, konstruktiv muloqotga yordam beradi.',
    },
    {
      id: 'm1t3h09',
      text: 'Rahbar xodimning kasbiy bilimlari yetarli emasligini ko‘rdi, lekin uning jamoa bilan ishlash qobiliyati kuchli. Qaysi “Bumerang” qonuni asosida yondashish mumkin?',
      options: [
        'Kompensatsiya',
        'Axborot mazmunining yo‘qolishi',
        'O‘zini saqlash',
        'Natijaning noaniqligi',
      ],
      answer: 0,
      explanation:
        'Kompensatsiya qonuni kuchli jihatlar ayrim zaif jihatlarni qoplashini nazarda tutadi.',
    },
    {
      id: 'm1t3h10',
      text: 'Rahbar o‘z xodimlarini faqat tashqi xatti-harakatiga qarab baholaydi. Qaysi tamoyilni hisobga olish zarur?',
      options: [
        'Insonni to‘liq anglash qiyinligi',
        'Faqat lavozim muhimligi',
        'Faqat temperament muhimligi',
        'Faqat natija muhimligi',
      ],
      answer: 0,
      explanation:
        'Insonning barcha ichki va tashqi jihatlarini to‘liq anglash qiyin. Tashqi xatti-harakatning o‘zi to‘liq tasavvur bermasligi mumkin.',
    },
    {
      id: 'm1t3h11',
      text: 'Rahbar o‘zini juda yuqori baholaydi, ammo amaliy natijalari bunga mos emas. Bu holat nimani ifodalaydi?',
      options: [
        'O‘z-o‘zini baholashning nomuvofiqligini',
        'Kompensatsiyani',
        'Situatsion liderlikni',
        'Empatiyani',
      ],
      answer: 0,
      explanation:
        'Shaxsning o‘ziga bergan bahosi real natijalar bilan mos kelmasa, o‘z-o‘zini baholash nomuvofiq bo‘lishi mumkin.',
    },
    {
      id: 'm1t3h12',
      text: 'Maktabdagi topshiriq rahbardan bo‘lim boshlig‘iga, undan o‘qituvchiga o‘tganda mazmuni o‘zgarib ketdi. Qaysi “Bumerang” qonuni namoyon bo‘lmoqda?',
      options: [
        'Boshqaruv axboroti mazmunining yo‘qolishi',
        'Kompensatsiya',
        'O‘zini saqlash',
        'Noaniq natija',
      ],
      answer: 0,
      explanation:
        'Boshqaruv axboroti ierarxiya bo‘ylab o‘tganda uning mazmuni o‘zgarishi yoki buzilishi mumkin.',
    },
    {
      id: 'm1t3h13',
      text: 'Rahbar jamoaning barcha qarorlarini o‘zi qabul qilib, xodimlarning tashabbusini cheklaydi. Qaysi ichki pozitsiya xavfli?',
      options: [
        '“Men hamma narsani nazorat qilishim kerak”',
        '“Biz birgalikda ishlaymiz”',
        '“Xodimga ishonaman”',
        '“Vazifani delegatsiya qilaman”',
      ],
      answer: 0,
      explanation:
        'Hamma narsani nazorat qilishga intilish rahbarning delegatsiya va ishonch imkoniyatlarini cheklaydi.',
    },
    {
      id: 'm1t3h14',
      text: 'Rahbarning shaxsiy maqsadlari aniq bo‘lmasa, qaysi muammo yuzaga kelishi mumkin?',
      options: [
        'Ustuvorliklarni belgilash qiyinlashadi',
        'Jamoa avtomatik ravishda kuchayadi',
        'Xodimlar motivatsiyasi avtomatik oshadi',
        'Nizolar yo‘qoladi',
      ],
      answer: 0,
      explanation:
        'Aniq shaxsiy maqsadlarning yo‘qligi ustuvorlik va boshqaruv yo‘nalishlarini belgilashni qiyinlashtiradi.',
    },
    {
      id: 'm1t3h15',
      text: 'Rahbar doimiy ravishda yangi bilimlarni o‘rganmaydi. Bu qaysi ichki to‘siqqa mos?',
      options: [
        'O‘zini rivojlantirishning yetishmasligi',
        'Kompensatsiya',
        'Empatiya',
        'O‘zini saqlash',
      ],
      answer: 0,
      explanation:
        'Doimiy kasbiy rivojlanmaslik rahbar samaradorligini pasaytiruvchi ichki to‘siqlardan biridir.',
    },
    {
      id: 'm1t3h16',
      text: 'Rahbar murakkab muammolarda faqat eski usullarni takrorlaydi. Qaysi ichki to‘siq namoyon bo‘ladi?',
      options: [
        'Ijodiy yondashuvning yetishmasligi',
        'Empatiyaning ortiqligi',
        'Delegatsiya',
        'Kompensatsiya',
      ],
      answer: 0,
      explanation:
        'Yangi vaziyatlarda yangi yechim qidirish qobiliyatining yetishmasligi ijodiy yondashuvning sustligini ko‘rsatadi.',
    },
    {
      id: 'm1t3h17',
      text: 'Rahbar xodimlarni birlashtira olmaydi va jamoa ichida hamkorlik sust. Qaysi ko‘nikma yetishmasligi mumkin?',
      options: [
        'Jamoa tuzish qobiliyati',
        'Moliyaviy hisob',
        'Hujjat arxivlash',
        'Dars jadvali tuzish',
      ],
      answer: 0,
      explanation:
        'Jamoani shakllantirish va birlashtirish qobiliyatining zaifligi jamoa samaradorligiga salbiy ta’sir qiladi.',
    },
    {
      id: 'm1t3h18',
      text: 'Rahbar xodimlar uchun aniq ish ko‘nikmalarini shakllantirishga yordam bermaydi. Bu qaysi ichki to‘siqqa mos?',
      options: [
        'Xodimlarda ish ko‘nikmalarini shakllantira olmaslik',
        'O‘zini saqlash',
        'Empatiya',
        'Kompensatsiya',
      ],
      answer: 0,
      explanation:
        'Rahbarning xodimlarda ish ko‘nikmalarini shakllantirish qobiliyati ham boshqaruv samaradorligi uchun muhim.',
    },
    {
      id: 'm1t3h19',
      text: 'Rahbar stress vaqtida xodimga baqirib yuboradi. Keyinchalik vaziyatni tushuntirish uchun qaysi usul maqsadga muvofiq?',
      options: [
        'Hissiy reaksiyani nazorat qilib, faktlarni aniqlash',
        'Yana balandroq gapirish',
        'Darhol jazolash',
        'Muammoni yashirish',
      ],
      answer: 0,
      explanation:
        'Stressli vaziyatda rahbar hissiy reaksiyani nazorat qilishi va vaziyat faktlarini aniqlashi kerak.',
    },
    {
      id: 'm1t3h20',
      text: 'Melanxolik xodim tanqiddan keyin uzoq vaqt xavotirda yuradi. Rahbar uchun qaysi yondashuv ma’qul?',
      options: [
        'Konkret xatti-harakatni ko‘rsatib, tuzatish yo‘lini va ishonchni bildirish',
        'Uni jamoa oldida yana tanqid qilish',
        'Doimiy bosim o‘tkazish',
        'Xatosini eslatib turish',
      ],
      answer: 0,
      explanation:
        'Melanxolikning ta’sirchanligi hisobga olinib, tanqid konkret, hurmatli va yechimga yo‘naltirilgan bo‘lishi kerak.',
    },
    {
      id: 'm1t3h21',
      text: 'Xolerik xodim tez va kuchli reaksiya bildiradi. Rahbarning eng muhim vazifalaridan biri nima?',
      options: [
        'Uning energiyasini maqsadli faoliyatga yo‘naltirish',
        'Uni har doim cheklash',
        'U bilan umuman muloqot qilmaslik',
        'Har bir xatosi uchun jazo berish',
      ],
      answer: 0,
      explanation:
        'Xolerikning yuqori energiyasi va maqsadga intilishini samarali faoliyatga yo‘naltirish muhim.',
    },
    {
      id: 'm1t3h22',
      text: 'Flegmatik xodim qarorni tez qabul qilmaydi. Rahbar buni qanday tushunishi kerak?',
      options: [
        'Ehtiyotkorlik va sekin xulosa chiqarish xususiyati sifatida',
        'Darhol mas’uliyatsizlik sifatida',
        'Doimiy dangasalik sifatida',
        'Har doim motivatsiya yo‘qligi sifatida',
      ],
      answer: 0,
      explanation:
        'Flegmatik ehtiyotkor va sekin xulosa chiqarishi mumkin. Bu avtomatik ravishda mas’uliyatsizlik degani emas.',
    },
    {
      id: 'm1t3h23',
      text: 'Sangvinik xodim yangi vaziyatga tez moslashadi, ammo ba’zan ortiqcha optimistik qaror qiladi. Rahbar nimani hisobga olishi kerak?',
      options: [
        'Faollik bilan birga ehtimoliy ortiqcha optimizmni',
        'Faqat kamchiliklarini',
        'Uni jamoada cheklashni',
        'Uning barcha qarorini rad etishni',
      ],
      answer: 0,
      explanation:
        'Sangvinikning tez moslashuvi kuchli jihat, ortiqcha optimizm esa nazorat qilinishi kerak bo‘lgan jihat bo‘lishi mumkin.',
    },
    {
      id: 'm1t3h24',
      text: 'Rahbar tanqidni shaxsga emas, xatti-harakatga qaratdi va aniq misol keltirdi. Bu qaysi tamoyilga mos?',
      options: [
        'Konstruktiv tanqid',
        'Shaxsiy hujum',
        'Buyruqbozlik',
        'Manipulyatsiya',
      ],
      answer: 0,
      explanation:
        'Xatti-harakatga yo‘naltirilgan, aniq misolli va tuzatish yo‘lini ko‘rsatadigan tanqid konstruktiv hisoblanadi.',
    },
    {
      id: 'm1t3h25',
      text: 'Rahbar xodimga “Siz yomon o‘qituvchisiz” dedi. Ushbu fikrni qanday qayta shakllantirish ma’qul?',
      options: [
        '“Hisobotdagi ushbu band belgilangan muddatda topshirilmadi”',
        '“Siz hech qachon ishlamaysiz”',
        '“Siz mas’uliyatsiz odamsiz”',
        '“Sizdan hech narsa chiqmaydi”',
      ],
      answer: 0,
      explanation:
        'Konstruktiv tanqid shaxsiyatga emas, aniq harakat yoki natijaga qaratiladi.',
    },
    {
      id: 'm1t3h26',
      text: 'Rahbar “Bu ishni men qilaman, sizlar uddalay olmaysizlar” desa, qaysi muammo kuchayadi?',
      options: [
        'Xodimlarga ishonchsizlik va delegatsiyaning kamayishi',
        'Jamoaviylik',
        'Motivatsiya',
        'Vakolatlarni rivojlantirish',
      ],
      answer: 0,
      explanation:
        'Bunday pozitsiya xodimlarga ishonchni kamaytirib, delegatsiya imkoniyatlarini cheklaydi.',
    },
    {
      id: 'm1t3h27',
      text: 'Rahbar muammoli vaziyatda faqat aybdorni izlaydi, lekin yechim taklif qilmaydi. Qaysi nutq tamoyili buzilgan?',
      options: [
        'Yechimga yo‘naltirilganlik',
        'Qisqalik',
        'Dalillilik',
        '“Biz” tili',
      ],
      answer: 0,
      explanation:
        'Rahbar nutqi faqat muammoni ko‘rsatish bilan cheklanmay, yechimga yo‘naltirilishi kerak.',
    },
    {
      id: 'm1t3h28',
      text: 'Rahbar xodimlar oldida o‘z xatosini tan oldi. Bu jamoaga qanday signal beradi?',
      options: [
        'Ochiqlik va mas’uliyat',
        'Nazorat yo‘qligi',
        'Beparvolik',
        'Lavozimdan voz kechish',
      ],
      answer: 0,
      explanation:
        'O‘z xatosini tan olish rahbarning ochiqligi va mas’uliyatini namoyon etadi.',
    },
    {
      id: 'm1t3h29',
      text: 'Rahbarning barcha xodimlarga bir xil yondashuvi qachon samarasiz bo‘lishi mumkin?',
      options: [
        'Xodimlarning tajribasi, temperamenti va ehtiyojlari turlicha bo‘lganda',
        'Jamoa juda kichik bo‘lganda',
        'Hamma xodim bir xil bo‘lganda',
        'Vazifa oddiy bo‘lganda',
      ],
      answer: 0,
      explanation:
        'Situatsion liderlik xodimlarning individual xususiyatlari va vaziyatga mos yondashuvni talab qiladi.',
    },
    {
      id: 'm1t3h30',
      text: 'Boshqaruv psixologiyasining maktab rahbari uchun amaliy ahamiyati nimada?',
      options: [
        'Jamoa, motivatsiya, nizolar, stress va sog‘lom psixologik muhitni boshqarishda',
        'Faqat hujjatlarni ko‘paytirishda',
        'Faqat intizomiy jazo berishda',
        'Faqat dars jadvalini tuzishda',
      ],
      answer: 0,
      explanation:
        'Boshqaruv psixologiyasi maktab rahbariga jamoa bilan ishlash, motivatsiya, nizolarni boshqarish, stressni nazorat qilish va sog‘lom muhit yaratishda yordam beradi.',
    },
  ],

  case: [
    {
      id: 'm1t3c01',
      text: 'O‘qituvchi dars hujjatini belgilangan vaqtda topshirmadi. Direktor jahli chiqib, uni barcha o‘qituvchilar oldida “mas’uliyatsiz” deb atamoqchi. Boshqaruv psixologiyasi nuqtayi nazaridan eng maqbul yondashuv qaysi?',
      options: [
        'Hammaga oldida keskin tanqid qilish',
        'Aniq holatni alohida muhokama qilib, tuzatish yo‘lini ko‘rsatish',
        'Darhol jazolash',
        'Boshqa xodimlarga ham uni tanqid qildirish',
      ],
      answer: 1,
      explanation:
        'Tanqid shaxsga emas, konkret harakatga qaratilishi va boshqalar oldida kamsitilmasligi kerak.',
    },
    {
      id: 'm1t3c02',
      text: 'Ikki o‘qituvchi o‘rtasida nizoli vaziyat yuzaga keldi. Direktor ulardan birining gapini eshitib, ikkinchisini tinglamasdan qaror chiqarmoqchi. Qaysi yondashuv to‘g‘ri?',
      options: [
        'Bir tomonning gapiga asoslanish',
        'Faktlar va ikkala tomon fikrini aniqlash',
        'Darhol jazolash',
        'Nizoni yashirish',
      ],
      answer: 1,
      explanation:
        'Rahbar nizoli vaziyatda faktlarni va tomonlarning pozitsiyalarini tinglab, dalillarga asoslangan qaror qabul qilishi kerak.',
    },
    {
      id: 'm1t3c03',
      text: 'Yangi o‘qituvchi tajribali o‘qituvchiga qaraganda ko‘proq metodik yordamga muhtoj. Direktor ikkalasiga ham bir xil yondashuvni qo‘llamoqda. Qaysi tamoyilga amal qilish kerak?',
      options: [
        'Situatsion liderlik',
        'Faqat nazorat',
        'Faqat buyruq',
        'O‘zini saqlash',
      ],
      answer: 0,
      explanation:
        'Turli tajribadagi xodimlarning ehtiyojlari turlicha bo‘ladi. Shu sababli vaziyatga mos yondashuv kerak.',
    },
    {
      id: 'm1t3c04',
      text: 'Direktor keskin tanqid eshitib, darhol javob qaytarmoqchi bo‘ldi. 3 soniya qoidasi bo‘yicha nima qilishi kerak?',
      options: [
        'Darhol baqirishi',
        'Qisqa pauza qilib, vaziyat faktlarini aniqlashi',
        'Suhbatni tugatishi',
        'Tanqidchini jazolashi',
      ],
      answer: 1,
      explanation:
        '3 soniya qoidasi hissiy reaksiyani kechiktirish, pauza qilish va faktlarni aniqlashni tavsiya etadi.',
    },
    {
      id: 'm1t3c05',
      text: 'Rahbar jamoada hamma vazifani o‘zi bajarib, o‘qituvchilarga ishonmaydi. Natijada xodimlar tashabbus ko‘rsatmay qo‘ydi. Asosiy muammo nimada?',
      options: [
        'Delegatsiya va ishonch yetishmasligida',
        'Xodimlar juda ko‘p ishlayotganida',
        'Temperamentda',
        'Hujjatlarda',
      ],
      answer: 0,
      explanation:
        'Rahbarning hamma ishni o‘zi bajarishi vakolatlarni delegatsiya qilmaslik va xodimlarga ishonmaslik bilan bog‘liq.',
    },
    {
      id: 'm1t3c06',
      text: 'Bir xodim juda faol, tezkor va muloqotchan, lekin ba’zan ortiqcha optimistik qarorlar qiladi. Uning temperamentiga qaysi tavsif mos?',
      options: [
        'Sangvinik',
        'Flegmatik',
        'Melanxolik',
        'Faqat xolerik',
      ],
      answer: 0,
      explanation:
        'Faollik, tez moslashuvchanlik va muloqotchanlik sangvinikka xos; ortiqcha optimizm ham kuzatilishi mumkin.',
    },
    {
      id: 'm1t3c07',
      text: 'Xodim juda energiyali, maqsadga intiluvchan, lekin tanqid vaqtida tez jahli chiqadi. Rahbar nimani hisobga olishi kerak?',
      options: [
        'Xolerik temperamentining hissiy nazoratdagi qiyinchiligini',
        'Flegmatikning sustligini',
        'Melanxolikning xavotirini',
        'Sangvinikning ortiqcha optimizmini',
      ],
      answer: 0,
      explanation:
        'Energiya, tezkorlik va maqsadga intiluvchanlik xolerikka xos, hissiy nazoratdagi qiyinchilik ham bo‘lishi mumkin.',
    },
    {
      id: 'm1t3c08',
      text: 'Xodim juda ehtiyotkor, sokin va qaror chiqarishda shoshilmaydi. Direktor uni darhol “sust” deb baholadi. Qaysi yondashuv to‘g‘riroq?',
      options: [
        'Temperament xususiyatini hisobga olib, uning kuchli jihatlarini ham baholash',
        'Darhol jazolash',
        'Uni boshqa xodimlar oldida tanqid qilish',
        'Faqat tezlikni baholash',
      ],
      answer: 0,
      explanation:
        'Flegmatik xodim sokin, ehtiyotkor va sekin xulosa chiqarishi mumkin. Bu uning boshqa kuchli jihatlarini inkor etmaydi.',
    },
    {
      id: 'm1t3c09',
      text: 'Xodim tanqidni juda ta’sirchan qabul qildi va uzoq vaqt xavotirda yurdi. Rahbar keyingi suhbatda qanday yo‘l tutishi ma’qul?',
      options: [
        'Konkret xatti-harakatni muhokama qilib, tuzatish yo‘lini va ishonchni bildirish',
        'Tanqidni yanada kuchaytirish',
        'Uni jamoa oldida yana tanqid qilish',
        'Muammoni butunlay e’tiborsiz qoldirish',
      ],
      answer: 0,
      explanation:
        'Melanxolik xususiyatlari kuchli bo‘lgan xodimga nisbatan hurmatli, konkret va ishonchga asoslangan muloqot maqsadga muvofiq.',
    },
    {
      id: 'm1t3c10',
      text: 'Direktor jamoa oldida o‘zining noto‘g‘ri qarorini tan oldi va tuzatish rejasini taklif qildi. Bu qaysi boshqaruv tamoyiliga mos?',
      options: [
        'Xatoni tez va qat’iy tan olish',
        'O‘zini oqlash',
        'Muammoni yashirish',
        'Xodimlarni ayblash',
      ],
      answer: 0,
      explanation:
        'Rahbar o‘z xatosini tan olishi va tuzatish yo‘lini ko‘rsatishi ochiq va mas’uliyatli boshqaruvga mos keladi.',
    },
  ],
}
