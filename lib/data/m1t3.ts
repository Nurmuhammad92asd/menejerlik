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
      text: 'Boshqaruv psixologiyasi asosan qaysi jarayonni o‘rganadi?',
      options: [
        'Rahbar va xodimlar o‘rtasidagi psixologik munosabatlarni',
        'Faqat moliyaviy hujjatlarni',
        'Faqat dars jadvalini',
        'Faqat statistik hisobotlarni',
      ],
      answer: 0,
      explanation:
        'Boshqaruv psixologiyasi rahbar, xodim, jamoa, motivatsiya, muloqot va nizolar bilan bog‘liq psixologik jarayonlarni o‘rganadi.',
    },
    {
      id: 'm1t3e02',
      text: 'Rahbar tanqid eshitganda birinchi navbatda nimani boshqarishi kerak?',
      options: [
        'Boshqalarning fikrini',
        'O‘zining hissiy reaksiyasini',
        'Xodimning qarorini',
        'Suhbatning mavzusini',
      ],
      answer: 1,
      explanation:
        'Rahbar keskin vaziyatda avvalo o‘z hissiy reaksiyasini nazorat qilsa, keyingi qarorni xolisroq qabul qiladi.',
    },
    {
      id: 'm1t3e03',
      text: 'Empatiyaning boshqaruvdagi asosiy mazmuni qaysi?',
      options: [
        'Xodim bilan har doim rozi bo‘lish',
        'Xodimning holati va hissiyotini tushunishga harakat qilish',
        'Xodimning barcha xatosini kechirish',
        'Rahbarning o‘z fikridan voz kechishi',
      ],
      answer: 1,
      explanation:
        'Empatiya boshqa insonning holati va hissiyotlarini tushunishga intilishdir. Bu har doim uning fikriga qo‘shilish degani emas.',
    },
    {
      id: 'm1t3e04',
      text: 'Konstruktiv tanqidning asosiy belgisi qaysi?',
      options: [
        'Shaxsiyatni baholash',
        'Xodimni boshqalar oldida uyaltirish',
        'Aniq xatti-harakatni ko‘rsatish va tuzatish yo‘lini berish',
        'Faqat salbiy jihatlarni sanash',
      ],
      answer: 2,
      explanation:
        'Konstruktiv tanqid shaxsga emas, aniq harakat yoki natijaga qaratiladi va yaxshilash yo‘lini ko‘rsatadi.',
    },
    {
      id: 'm1t3e05',
      text: 'Emotsional intellektning tarkibiy jihatlaridan biri qaysi?',
      options: [
        'O‘z hissiyotlarini anglash',
        'Barcha vaziyatlarda jim turish',
        'Tanqidni rad etish',
        'Xodimlardan qo‘rqish',
      ],
      answer: 0,
      explanation:
        'Emotsional intellektning muhim jihatlaridan biri o‘z hissiyotlarini anglash va boshqarishdir.',
    },
    {
      id: 'm1t3e06',
      text: 'Rahbarning “Men xato qildim” deyishi nimani ko‘rsatishi mumkin?',
      options: [
        'Mas’uliyat va ochiqlikni',
        'Vakolatsizlikni',
        'Nazorat yo‘qligini',
        'Jamoaga befarqlikni',
      ],
      answer: 0,
      explanation:
        'Rahbar xatosini tan olishi mas’uliyatni o‘z zimmasiga olish va ochiq boshqaruvga tayyorligini ko‘rsatadi.',
    },
    {
      id: 'm1t3e07',
      text: 'Delegatsiyaning mazmuni qaysi javobda to‘g‘ri berilgan?',
      options: [
        'Barcha ishni rahbarning o‘zi bajarishi',
        'Vazifa va zarur vakolatni xodimga topshirish',
        'Nazoratni butunlay bekor qilish',
        'Mas’uliyatdan voz kechish',
      ],
      answer: 1,
      explanation:
        'Delegatsiya vazifani tegishli vakolat bilan xodimga topshirish jarayonidir. Yakuniy nazorat mexanizmi esa saqlanadi.',
    },
    {
      id: 'm1t3e08',
      text: 'Rahbar qaror qabul qilishda qaysi manbaga ko‘proq tayanishi kerak?',
      options: [
        'Mish-mishlarga',
        'Shaxsiy taxminga',
        'Fakt va dalillarga',
        'Faqat bitta xodimning fikriga',
      ],
      answer: 2,
      explanation:
        'Boshqaruv qarorining asoslanganligi uchun mavjud faktlar, dalillar va vaziyat haqidagi ishonchli ma’lumotlar muhim.',
    },
    {
      id: 'm1t3e09',
      text: 'Rahbar xodimning xatosini tanqid qilganda nimadan qochishi kerak?',
      options: [
        'Aniq misoldan',
        'Yechim taklifidan',
        'Shaxsiyatga tegishdan',
        'Natijani muhokama qilishdan',
      ],
      answer: 2,
      explanation:
        'Rahbar “siz yomon xodimsiz” kabi shaxsiyatga qaratilgan bahodan ko‘ra konkret harakatni muhokama qilishi kerak.',
    },
    {
      id: 'm1t3e10',
      text: '“Biz bu muammoni birgalikda hal qilamiz” jumlasi qaysi yondashuvni ifodalaydi?',
      options: [
        'Jamoaviy yondashuvni',
        'Avtoritar yondashuvni',
        'Izolyatsiyani',
        'Passiv boshqaruvni',
      ],
      answer: 0,
      explanation:
        '“Biz” tilidan foydalanish jamoaviy mas’uliyat va hamkorlikni kuchaytirishga xizmat qiladi.',
    },
    {
      id: 'm1t3e11',
      text: 'Rahbar hamma ishni o‘zi qilishga intilsa, eng avvalo qaysi imkoniyat kamayadi?',
      options: [
        'Delegatsiya',
        'Hujjat yuritish',
        'Hisobot olish',
        'Vazifalarni aniqlash',
      ],
      answer: 0,
      explanation:
        'Hamma ishni o‘zi bajarish xodimlarga vakolat berish va ularni rivojlantirish imkoniyatini kamaytiradi.',
    },
    {
      id: 'm1t3e12',
      text: 'Jamoada sog‘lom psixologik muhitning muhim belgisi qaysi?',
      options: [
        'Xodimlar fikrini bildirishdan qo‘rqishi',
        'Faqat rahbar fikrining qabul qilinishi',
        'O‘zaro hurmat va ochiq muloqot',
        'Xatolarni yashirish',
      ],
      answer: 2,
      explanation:
        'Sog‘lom psixologik muhitda o‘zaro hurmat, ishonch va fikr almashish imkoniyati mavjud bo‘ladi.',
    },
    {
      id: 'm1t3e13',
      text: 'M. Woodcock va D. Francis konsepsiyasida rahbar samaradorligiga to‘sqinlik qiluvchi ichki to‘siqlar soni nechta deb berilgan?',
      options: [
        '7 ta',
        '9 ta',
        '11 ta',
        '15 ta',
      ],
      answer: 2,
      explanation:
        'Mazkur manbada rahbar samaradorligiga to‘sqinlik qiluvchi 11 ta ichki to‘siq ko‘rsatiladi.',
    },
    {
      id: 'm1t3e14',
      text: 'Quyidagilardan qaysi biri rahbarning ichki to‘siqlaridan biri sifatida qaraladi?',
      options: [
        'O‘zini rivojlantirishning yetishmasligi',
        'Jamoani qo‘llab-quvvatlash',
        'Ochiq muloqot',
        'Adolatli baholash',
      ],
      answer: 0,
      explanation:
        'Rahbarning o‘z ustida ishlamasligi boshqaruv samaradorligini cheklovchi ichki to‘siqlardan biridir.',
    },
    {
      id: 'm1t3e15',
      text: 'Ijtimoiy-psixologik tuzilmaning asosiy qismlari qaysi qatorda to‘g‘ri berilgan?',
      options: [
        'Missiya, e’tiqod, qadriyat, ustanovka, xulq-atvor',
        'Buyruq, ariza, bayonnoma, hisobot, dalolatnoma',
        'Reja, jadval, ish haqi, ta’til, mukofot',
        'Maqsad, byudjet, xarajat, daromad, audit',
      ],
      answer: 0,
      explanation:
        'Mazkur ijtimoiy-psixologik yondashuvda missiya, e’tiqod, qadriyat, ustanovka va xulq-atvor o‘zaro bog‘liq qismlar sifatida qaraladi.',
    },
    {
      id: 'm1t3e16',
      text: '3 soniya qoidasining asosiy vazifasi nima?',
      options: [
        'Suhbatni tez tugatish',
        'Hissiy reaksiyani qisqa muddatga to‘xtatish',
        'Xodimni jazolash',
        'Muammoni yashirish',
      ],
      answer: 1,
      explanation:
        'Qisqa pauza rahbarga avtomatik hissiy javob o‘rniga vaziyatni anglab, keyin javob berish imkonini beradi.',
    },
    {
      id: 'm1t3e17',
      text: '3 soniya pauzasidan keyingi eng maqbul harakat qaysi?',
      options: [
        'Aybdorni darhol e’lon qilish',
        'Baqirish',
        'Faktlarni aniqlash',
        'Suhbatni tugatish',
      ],
      answer: 2,
      explanation:
        'Pauzadan so‘ng rahbar vaziyatni faktlar asosida aniqlashi va shundan keyin qaror qilishi kerak.',
    },
    {
      id: 'm1t3e18',
      text: 'Rahbar nutqining samarali bo‘lishi uchun qaysi sifat muhim?',
      options: [
        'Noaniqlik',
        'Qisqalik va aniqlik',
        'Haddan tashqari murakkablik',
        'Faqat buyruq shakli',
      ],
      answer: 1,
      explanation:
        'Rahbar nutqi mazmunan aniq, tushunarli va vazifaga mos bo‘lishi kerak.',
    },
    {
      id: 'm1t3e19',
      text: 'Sangvinik temperamentiga xosroq xususiyat qaysi?',
      options: [
        'Faollik va tez moslashish',
        'Doimiy xavotir',
        'Juda sust reaksiya',
        'Keskin hissiy portlash',
      ],
      answer: 0,
      explanation:
        'Sangvinik odatda faol, muloqotchan va vaziyatga nisbatan tez moslashuvchan sifatida tavsiflanadi.',
    },
    {
      id: 'm1t3e20',
      text: 'Xolerik temperamentiga xos jihat qaysi?',
      options: [
        'Yuqori energiya va tezkorlik',
        'Doimiy sustlik',
        'Juda yuqori ehtiyotkorlik',
        'Passivlik',
      ],
      answer: 0,
      explanation:
        'Xolerik temperamentida energiya, tezkorlik va kuchli reaksiyalar ko‘proq namoyon bo‘lishi mumkin.',
    },
    {
      id: 'm1t3e21',
      text: 'Flegmatik temperamentiga xos belgi qaysi?',
      options: [
        'Sokinlik va barqarorlik',
        'Tez-tez hissiy portlash',
        'Doimiy xavotir',
        'Keskin shoshqaloqlik',
      ],
      answer: 0,
      explanation:
        'Flegmatik odatda sokin, barqaror va ehtiyotkor xulq bilan tavsiflanadi.',
    },
    {
      id: 'm1t3e22',
      text: 'Melanxolik temperamentida qaysi xususiyat ko‘proq uchrashi mumkin?',
      options: [
        'Ta’sirchanlik',
        'Doimiy yuqori energiya',
        'Keskin buyruqbozlik',
        'Tezkorlik',
      ],
      answer: 0,
      explanation:
        'Melanxolik tipida ta’sirchanlik, sezgirlik va ichki kechinmalar kuchliroq namoyon bo‘lishi mumkin.',
    },
    {
      id: 'm1t3e23',
      text: '“Kompensatsiya” tushunchasi boshqaruv psixologiyasida nimani bildiradi?',
      options: [
        'Kuchli jihatlar ayrim zaif jihatlarni qoplashi mumkinligini',
        'Barcha xodimlar bir xil ekanini',
        'Faqat kamchiliklarni hisobga olishni',
        'Xodimlarni doimiy nazorat qilishni',
      ],
      answer: 0,
      explanation:
        'Kompensatsiya insondagi bir kuchli sifat yoki qobiliyat boshqa zaif jihatning ta’sirini qisman qoplashi mumkinligini anglatadi.',
    },
    {
      id: 'm1t3e24',
      text: 'Rahbar xodimning xatosini ko‘rsatishda qaysi variantdan foydalanishi ma’qul?',
      options: [
        '“Siz umuman ishlamaysiz”',
        '“Siz mas’uliyatsiz odamsiz”',
        '“Hisobotning shu qismi belgilangan muddatda topshirilmadi”',
        '“Sizdan hech narsa chiqmaydi”',
      ],
      answer: 2,
      explanation:
        'Uchinchi variant shaxsiyatga emas, aniq natijaga qaratilganligi uchun konstruktivroqdir.',
    },
    {
      id: 'm1t3e25',
      text: 'Rahbar xodimni baholashda faqat tashqi xatti-harakatga qarab xulosa qilmasligi uchun qaysi tushuncha muhim?',
      options: [
        'Insonning ichki jihatlari ham mavjudligi',
        'Lavozim hamma narsani belgilashi',
        'Faqat temperament muhimligi',
        'Faqat yosh muhimligi',
      ],
      answer: 0,
      explanation:
        'Insonning motivlari, qadriyatlari, kechinmalari va boshqa ichki omillari tashqi xatti-harakat ortida bo‘lishi mumkin.',
    },
    {
      id: 'm1t3e26',
      text: 'Rahbarning xodimlarga nisbatan adolatli bo‘lishi nimani talab qiladi?',
      options: [
        'Tanishlarga alohida imtiyoz berishni',
        'Bir xil mezonlarni izchil qo‘llashni',
        'Har bir xodimni bir xil baholashni',
        'Faqat kuchli xodimlarni qo‘llashni',
      ],
      answer: 1,
      explanation:
        'Adolatli boshqaruv izchil va oldindan tushunarli mezonlardan foydalanishni talab qiladi.',
    },
    {
      id: 'm1t3e27',
      text: 'Rahbar jamoa muvaffaqiyatini o‘zining shaxsiy muvaffaqiyati deb bilsa, qaysi yondashuv kuchayadi?',
      options: [
        'Jamoaviy yondashuv',
        'Izolyatsiya',
        'Buyruqbozlik',
        'Passivlik',
      ],
      answer: 0,
      explanation:
        'Jamoa natijasini umumiy natija sifatida ko‘rish hamkorlik va jamoaviy boshqaruvni kuchaytiradi.',
    },
    {
      id: 'm1t3e28',
      text: 'Rahbar xodimning fikri bilan rozi bo‘lmasa, eng maqbul yo‘l qaysi?',
      options: [
        'Fikr bildirgan xodimni masxara qilish',
        'Fikrni hurmat bilan muhokama qilish',
        'Suhbatni to‘xtatish',
        'Xodimni jazolash',
      ],
      answer: 1,
      explanation:
        'Fikrning noto‘g‘riligi shaxsga nisbatan hurmatsizlik qilish uchun asos emas. Mazmunni dalillar bilan muhokama qilish ma’qul.',
    },
    {
      id: 'm1t3e29',
      text: 'Rahbarning stressga chidamliligi eng avvalo nimaga yordam beradi?',
      options: [
        'Keskin vaziyatda hissiyotni boshqarishga',
        'Barcha vazifani o‘zi bajarishga',
        'Xodimlarni qo‘rqitishga',
        'Tanqidni rad etishga',
      ],
      answer: 0,
      explanation:
        'Stressga chidamlilik rahbarga keskin vaziyatlarda hissiy reaksiyani nazorat qilib, vaziyatni oqilona baholashga yordam beradi.',
    },
    {
      id: 'm1t3e30',
      text: 'Quyidagi ketma-ketliklardan qaysi biri konstruktiv tanqidga eng mos?',
      options: [
        'Shaxsni baholash → tanbeh → jazo → suhbatni tugatish',
        'Fakt → aniq xatti-harakat → ta’sir → tuzatish yo‘li',
        'Aybdor → tanqid → bosim → jazo',
        'Xato → umumlashtirish → kamsitish → ogohlantirish',
      ],
      answer: 1,
      explanation:
        'Konstruktiv tanqid aniq fakt va xatti-harakatdan boshlanib, uning ta’siri hamda tuzatish yo‘liga olib boriladi.',
    },
  ],

  medium: [
    {
      id: 'm1t3m01',
      text: 'Direktor bir xodim haqida salbiy shikoyat oldi. Qaror qabul qilishdan oldingi eng to‘g‘ri ketma-ketlik qaysi?',
      options: [
        'Jazo → faktlarni tekshirish → suhbat → xulosa',
        'Shikoyat → faktlarni tekshirish → tomonlarni tinglash → qaror',
        'Shikoyat → jamoa fikri → jazo → hisobot',
        'Shikoyat → xodimni ogohlantirish → keyin dalil izlash',
      ],
      answer: 1,
      explanation:
        'Boshqaruv psixologiyasi nuqtayi nazaridan avval ma’lumot tekshiriladi, tomonlar tinglanadi, keyin asoslangan qaror qabul qilinadi.',
    },
    {
      id: 'm1t3m02',
      text: 'Quyidagi holatlardan qaysi birida situatsion yondashuv zarurati kuchliroq?',
      options: [
        'Barcha xodimlar bir xil tajribaga ega bo‘lganda',
        'Bir xil vazifa barcha uchun bir xil bajarilganda',
        'Yangi va tajribali xodimning ehtiyojlari farq qilganda',
        'Vazifa juda oddiy bo‘lganda',
      ],
      answer: 2,
      explanation:
        'Xodimlarning tajribasi, tayyorgarligi va mustaqilligi farqlansa, rahbar yondashuvni vaziyatga moslashtirishi kerak.',
    },
    {
      id: 'm1t3m03',
      text: 'Rahbar xodimga topshiriq berdi, ammo natija kutilganidan past bo‘ldi. Birinchi savol qaysi bo‘lishi maqsadga muvofiq?',
      options: [
        '“Kim aybdor?”',
        '“Nega siz buni bilmaysiz?”',
        '“Vazifa va kutilgan natija aniq tushuntirilganmidi?”',
        '“Kimni jazolaymiz?”',
      ],
      answer: 2,
      explanation:
        'Natijani baholashdan oldin topshiriqning o‘zi aniq berilganmi, resurs va vakolat yetarlimi, shuni aniqlash kerak.',
    },
    {
      id: 'm1t3m04',
      text: 'Rahbar xodimga “Men sizga ishonaman, lekin natijani juma kuni ko‘rib chiqamiz” dedi. Bu qaysi ikki yondashuvni birlashtiradi?',
      options: [
        'Ishonch va nazorat',
        'Jazo va bosim',
        'Izolyatsiya va delegatsiya',
        'Tanqid va kamsitish',
      ],
      answer: 0,
      explanation:
        'Delegatsiya nazoratni yo‘qotish emas. Ishonch bilan birga natijani belgilangan nuqtalarda kuzatish mumkin.',
    },
    {
      id: 'm1t3m05',
      text: 'Rahbar xodimning xatosini ko‘rdi. Qaysi variant konstruktiv muloqotga eng yaqin?',
      options: [
        '“Siz doim xato qilasiz.”',
        '“Bu natija sizning imkoniyatingizga mos emas.”',
        '“Hisobotning 3-bandida ma’lumot yetishmayapti. Uni qanday to‘ldirishimizni ko‘rib chiqaylik.”',
        '“Boshqalar sizdan yaxshiroq ishlayapti.”',
      ],
      answer: 2,
      explanation:
        'Uchinchi variant konkret muammoni ko‘rsatadi va yechimga yo‘naltiradi.',
    },
    {
      id: 'm1t3m06',
      text: 'Rahbar tanqidni eshitib, darhol javob bermoqchi bo‘ldi. Qaysi harakat emotsional intellektni ko‘proq namoyon qiladi?',
      options: [
        'Javobni balandroq ovozda qaytarish',
        'Pauza qilib, aytilgan fikrni aniqlashtirish',
        'Suhbatni keskin tugatish',
        'Tanqidchini ogohlantirish',
      ],
      answer: 1,
      explanation:
        'Pauza va aniqlashtiruvchi savol avtomatik himoyalanish o‘rniga ongli javob berishga imkon yaratadi.',
    },
    {
      id: 'm1t3m07',
      text: 'Rahbar jamoada doim “men” shaklida gapiradi. Buning ehtimoliy oqibati qaysi?',
      options: [
        'Jamoaviy mas’uliyat hissining susayishi',
        'Xodimlar mustaqilligining avtomatik oshishi',
        'Ochiq muloqotning kuchayishi',
        'Delegatsiyaning avtomatik kengayishi',
      ],
      answer: 0,
      explanation:
        'Doimiy “men” markazidagi kommunikatsiya jamoaning umumiy mas’uliyat va hamkorlik hissini susaytirishi mumkin.',
    },
    {
      id: 'm1t3m08',
      text: 'Bir xil topshiriq ikki xodim tomonidan turlicha bajarildi. Rahbar bundan qanday xulosa chiqarishi kerak?',
      options: [
        'Biri albatta mas’uliyatsiz',
        'Xodimlarning individual xususiyatlari natijaga ta’sir qilishi mumkin',
        'Topshiriq har doim noto‘g‘ri bo‘lgan',
        'Faqat temperament natijani belgilaydi',
      ],
      answer: 1,
      explanation:
        'Bir xil vazifa turli tajriba, motivatsiya, temperament va ko‘nikmalar sababli turlicha natija berishi mumkin.',
    },
    {
      id: 'm1t3m09',
      text: 'Quyidagi moslashtirishlardan qaysi biri to‘g‘ri?',
      options: [
        '1-Sangvinik, 2-Xolerik, 3-Flegmatik, 4-Melanxolik → 1-faol moslashuvchan, 2-energetik, 3-barqaror, 4-ta’sirchan',
        '1-Sangvinik, 2-Xolerik, 3-Flegmatik, 4-Melanxolik → 1-ta’sirchan, 2-barqaror, 3-energetik, 4-faol',
        '1-Sangvinik, 2-Xolerik, 3-Flegmatik, 4-Melanxolik → 1-barqaror, 2-ta’sirchan, 3-faol, 4-energetik',
        '1-Sangvinik, 2-Xolerik, 3-Flegmatik, 4-Melanxolik → 1-energetik, 2-ta’sirchan, 3-faol, 4-barqaror',
      ],
      answer: 0,
      explanation:
        'Sangvinik faol va moslashuvchan, xolerik energetik, flegmatik barqaror, melanxolik esa ta’sirchanlik bilan tavsiflanadi.',
    },
    {
      id: 'm1t3m10',
      text: 'Rahbarning o‘zini baholashi va real natijalari keskin farq qilsa, qaysi xavf yuzaga kelishi mumkin?',
      options: [
        'O‘zini baholashning nomuvofiqligi',
        'Delegatsiyaning avtomatik kuchayishi',
        'Empatiyaning ortishi',
        'Jamoaviylikning kuchayishi',
      ],
      answer: 0,
      explanation:
        'O‘ziga berilgan baho real natijalar bilan mos kelmasa, rahbar o‘z faoliyatidagi muammolarni to‘g‘ri anglamasligi mumkin.',
    },
    {
      id: 'm1t3m11',
      text: 'Quyidagi ketma-ketliklardan qaysi biri rahbarning stressli vaziyatdagi oqilona harakatiga mos?',
      options: [
        'Hissiy reaksiya → aybdor izlash → jazo → faktlarni tekshirish',
        'Pauza → hissiyotni nazorat qilish → faktlarni aniqlash → qaror',
        'Jazo → tushuntirish → faktlarni izlash → xulosa',
        'Baqirish → suhbat → xulosa → tekshiruv',
      ],
      answer: 1,
      explanation:
        'Avval hissiy reaksiya nazorat qilinadi, keyin vaziyat faktlari aniqlanib, qaror qabul qilinadi.',
    },
    {
      id: 'm1t3m12',
      text: 'Rahbar xodimni faqat tashqi xatti-harakatiga qarab “motivatsiyasi yo‘q” deb baholadi. Qaysi xato yuzaga kelgan?',
      options: [
        'Ichki sabablarni tekshirmasdan xulosa chiqarish',
        'Delegatsiyani haddan tashqari kuchaytirish',
        'Jamoaviy qaror qabul qilish',
        'Ortiqcha empatiya',
      ],
      answer: 0,
      explanation:
        'Tashqi xatti-harakat ortida motiv, sharoit, tushunmovchilik yoki boshqa psixologik omillar bo‘lishi mumkin.',
    },
    {
      id: 'm1t3m13',
      text: 'Rahbar xodimga vazifa topshirdi, lekin qaror qabul qilish vakolatini bermadi. Bu qanday muammoga olib kelishi mumkin?',
      options: [
        'Xodim mas’uliyati va vakolati o‘rtasida nomutanosiblikka',
        'Jamoa mustaqilligining avtomatik oshishiga',
        'Nazoratning butunlay yo‘qolishiga',
        'Motivatsiyaning doimiy oshishiga',
      ],
      answer: 0,
      explanation:
        'Vazifa uchun javobgarlik berilib, zarur vakolat berilmasa, xodim natijaga ta’sir qilish imkoniyatiga ega bo‘lmay qoladi.',
    },
    {
      id: 'm1t3m14',
      text: 'Qaysi vaziyatda rahbarning empatiyasi noto‘g‘ri tushunilishi mumkin?',
      options: [
        'Xodimning holatini tushunish qarorni dalilsiz kechirishga aylansa',
        'Rahbar xodimni tinglasa',
        'Rahbar savol bersa',
        'Rahbar xodim fikrini hurmat qilsa',
      ],
      answer: 0,
      explanation:
        'Empatiya xodimni tushunishdir, lekin har bir vaziyatda qoida va mezonlardan voz kechish degani emas.',
    },
    {
      id: 'm1t3m15',
      text: 'Rahbar tanqidni boshlashdan oldin xodimning avvalgi ijobiy ishini qayd etdi. Buning psixologik foydasi nimada?',
      options: [
        'Himoyalanish reaksiyasini kamaytirishi mumkin',
        'Xatoni avtomatik yo‘q qiladi',
        'Jazoni kuchaytiradi',
        'Muammoni yashiradi',
      ],
      answer: 0,
      explanation:
        'Ijobiy jihatni tan olish muloqotni muvozanatlashtirishi va xodimning faqat hujum qilinyapti degan hissini kamaytirishi mumkin.',
    },
    {
      id: 'm1t3m16',
      text: 'Rahbar “Siz mas’uliyatsizsiz” o‘rniga “Topshiriq belgilangan muddatda bajarilmadi” desa, asosiy o‘zgarish nimada?',
      options: [
        'Shaxsiyatdan xatti-harakatga o‘tildi',
        'Tanqid butunlay bekor qilindi',
        'Mas’uliyat olib tashlandi',
        'Muammo yashirildi',
      ],
      answer: 0,
      explanation:
        'Birinchi jumla shaxsiyatni baholaydi, ikkinchisi esa tekshirilishi mumkin bo‘lgan konkret natijani ko‘rsatadi.',
    },
    {
      id: 'm1t3m17',
      text: 'Boshqaruv axboroti rahbardan xodimgacha o‘tishda mazmunini o‘zgartirsa, qaysi muammo yuzaga keladi?',
      options: [
        'Axborot mazmunining yo‘qolishi yoki buzilishi',
        'Kompensatsiya',
        'Temperamentlar almashinuvi',
        'Empatiyaning kuchayishi',
      ],
      answer: 0,
      explanation:
        'Axborot boshqaruv pog‘onalari orqali o‘tganda noto‘g‘ri talqin qilinishi yoki ayrim mazmuniy qismlari yo‘qolishi mumkin.',
    },
    {
      id: 'm1t3m18',
      text: 'Rahbarning “hamma narsani o‘zim nazorat qilishim kerak” qarashi qaysi xavfni kuchaytiradi?',
      options: [
        'Mikroboshqaruv va delegatsiyaning susayishini',
        'Xodimlar mustaqilligining oshishini',
        'Ishonchning kuchayishini',
        'Jamoaviy qarorlarning ko‘payishini',
      ],
      answer: 0,
      explanation:
        'Hamma jarayonni shaxsan nazorat qilishga urinish rahbarni mayda ishlarga bog‘lab, xodimlar mustaqilligini cheklashi mumkin.',
    },
    {
      id: 'm1t3m19',
      text: 'Rahbar jamoada nizoni bartaraf etish uchun avval ikkala tomon bilan alohida suhbatlashdi. Keyingi eng muhim qadam qaysi?',
      options: [
        'Darhol bir tomon foydasiga qaror qilish',
        'Umumiy fakt va kelishmovchilik nuqtalarini aniqlash',
        'Nizoni boshqa xodimlarga tarqatish',
        'Tomonlardan birini jazolash',
      ],
      answer: 1,
      explanation:
        'Alohida pozitsiyalar tinglangach, umumiy faktlar va nizoning real manbaini aniqlash keyingi muhim bosqichdir.',
    },
    {
      id: 'm1t3m20',
      text: 'Rahbar xodimning temperamentini baholashda qaysi xatodan qochishi kerak?',
      options: [
        'Temperamentni insonning barcha qobiliyatlarini belgilovchi yagona omil deb qabul qilishdan',
        'Xodimning individual farqlarini hisobga olishdan',
        'Muloqot uslubini kuzatishdan',
        'Stressdagi reaksiyalarni tahlil qilishdan',
      ],
      answer: 0,
      explanation:
        'Temperament muhim psixologik xususiyatlardan biri, ammo insonning kasbiy natijasini yakka o‘zi belgilamaydi.',
    },
    {
      id: 'm1t3m21',
      text: 'Quyidagi moslashtirishlardan qaysi biri boshqaruv usuli va vaziyatga mos?',
      options: [
        '1-Yangi xodim; 2-Tajribali xodim → 1-ko‘proq yo‘l-yo‘riq; 2-ko‘proq mustaqillik',
        '1-Yangi xodim; 2-Tajribali xodim → 1-to‘liq mustaqillik; 2-doimiy mikro nazorat',
        '1-Yangi xodim; 2-Tajribali xodim → ikkalasiga ham bir xil nazorat',
        '1-Yangi xodim; 2-Tajribali xodim → 1-jazosiz; 2-jazoli boshqaruv',
      ],
      answer: 0,
      explanation:
        'Yangi xodimga boshlang‘ich yo‘l-yo‘riq ko‘proq kerak bo‘lishi mumkin, tajribali xodim esa ko‘proq mustaqillikka tayyor bo‘ladi.',
    },
    {
      id: 'm1t3m22',
      text: 'Rahbar xodimga tanqid berdi, ammo xodim “Menga nima qilish kerakligini tushunmadim” dedi. Eng ehtimoliy kommunikativ muammo qaysi?',
      options: [
        'Tanqid muammoni ko‘rsatgan, ammo kutilgan natija yoki yechimni aniqlashtirmagan',
        'Xodim albatta tanqidni qabul qilmayapti',
        'Rahbar ortiqcha empatiya qilgan',
        'Temperament masalasi hal qiluvchi bo‘lgan',
      ],
      answer: 0,
      explanation:
        'Konstruktiv muloqotda muammo bilan birga kutilgan natija va tuzatish yo‘li ham aniq bo‘lishi kerak.',
    },
    {
      id: 'm1t3m23',
      text: 'Rahbarning stressli vaziyatda qaror qabul qilishida qaysi ketma-ketlik eng maqbul?',
      options: [
        'Hissiyot → taxmin → qaror → fakt',
        'Fakt → baholash → qaror → tekshiruv',
        'Pauza → faktlarni aniqlash → variantlarni baholash → qaror',
        'Jazo → tushuntirish → fakt → qaror',
      ],
      answer: 2,
      explanation:
        'Stressli vaziyatda pauza hissiy reaksiyani pasaytiradi, keyin faktlar aniqlanadi, variantlar baholanadi va qaror qilinadi.',
    },
    {
      id: 'm1t3m24',
      text: 'Rahbar o‘z xodimlaridan birini doimiy ravishda boshqa xodimlarga nisbatan yumshoqroq baholaydi. Bu holatning asosiy xavfi nima?',
      options: [
        'Adolat mezonining buzilishi va jamoa ishonchining pasayishi',
        'Xodimlar o‘rtasidagi hamkorlikning avtomatik oshishi',
        'Delegatsiyaning kuchayishi',
        'Motivatsiyaning barcha xodimlarda oshishi',
      ],
      answer: 0,
      explanation:
        'Turlicha mezonlar jamoada adolatsizlik hissini yuzaga keltirib, rahbarga bo‘lgan ishonchni pasaytirishi mumkin.',
    },
    {
      id: 'm1t3m25',
      text: 'Rahbar xodimning past natijasini ko‘rib, darhol uning temperamentini sabab deb belgiladi. Bu xulosadagi muammo nima?',
      options: [
        'Bitta omilga asoslanib, boshqa sabablarni tekshirmagan',
        'Temperamentni umuman hisobga olmagan',
        'Juda ko‘p fakt to‘plagan',
        'Ortiqcha delegatsiya qilgan',
      ],
      answer: 0,
      explanation:
        'Past natijaga bilim, resurs, topshiriqning aniqligi, motivatsiya, tajriba va boshqa omillar ham ta’sir qilishi mumkin.',
    },
    {
      id: 'm1t3m26',
      text: 'Quyidagi ketma-ketliklardan qaysi biri samarali feedback berishga yaqin?',
      options: [
        'Shaxsiyat → umumiy tanqid → jazo',
        'Kuzatuv → konkret holat → ta’sir → keyingi harakat',
        'Aybdor → bosim → ogohlantirish',
        'Taqqoslash → tanqid → kamsitish',
      ],
      answer: 1,
      explanation:
        'Samarali feedback kuzatilgan konkret holat, uning ta’siri va kelgusidagi harakatga yo‘naltiriladi.',
    },
    {
      id: 'm1t3m27',
      text: 'Rahbar jamoada xodimlar fikrini tinglaydi, lekin yakuniy qarorni o‘zi qabul qiladi. Bu holat qanday baholanadi?',
      options: [
        'Fikrlarni tinglash va rahbarlik mas’uliyatini saqlash bir vaqtda mavjud bo‘lishi mumkin',
        'Bu har doim avtoritar boshqaruvdir',
        'Rahbar hech qachon qaror qabul qilmasligi kerak',
        'Bu delegatsiyaning yo‘qligini anglatadi',
      ],
      answer: 0,
      explanation:
        'Konsultativ boshqaruvda rahbar fikrlarni yig‘adi, lekin vakolat doirasida yakuniy qarorni o‘zi qabul qilishi mumkin.',
    },
    {
      id: 'm1t3m28',
      text: 'Rahbar xodimga juda ko‘p mustaqillik berdi, ammo vazifa va kutilgan natijani aniq belgilamadi. Eng katta xavf qaysi?',
      options: [
        'Mustaqillikning noaniq maqsadga aylanib qolishi',
        'Xodimning albatta muvaffaqiyat qozonishi',
        'Nazoratning avtomatik kuchayishi',
        'Jamoaning avtomatik birlashishi',
      ],
      answer: 0,
      explanation:
        'Mustaqillik samarali bo‘lishi uchun vazifa, kutilgan natija va javobgarlik chegaralari aniq bo‘lishi kerak.',
    },
    {
      id: 'm1t3m29',
      text: 'Rahbar xodimning yaxshi natijasini e’tirof etib, keyingi rivojlanish nuqtasini ham ko‘rsatdi. Bu qanday yondashuv?',
      options: [
        'Faqat tanqid',
        'Rivojlantiruvchi feedback',
        'Intizomiy jazo',
        'Passiv nazorat',
      ],
      answer: 1,
      explanation:
        'Yaxshi natijani e’tirof etish bilan birga keyingi rivojlanish nuqtasini ko‘rsatish xodimning o‘sishiga xizmat qiladi.',
    },
    {
      id: 'm1t3m30',
      text: 'Boshqaruv psixologiyasining amaliy vazifalarini quyidagi ketma-ketliklardan qaysi biri to‘liqroq ifodalaydi?',
      options: [
        'Xodimni nazorat qilish → xato topish → jazo',
        'Insonni tushunish → muloqot → motivatsiya → nizoni boshqarish → rivojlantirish',
        'Hujjat → buyruq → hisobot → arxiv',
        'Topshiriq → nazorat → tanbeh → hisobot',
      ],
      answer: 1,
      explanation:
        'Boshqaruv psixologiyasi inson xulqini tushunishdan boshlab muloqot, motivatsiya, nizolar va rivojlanishgacha bo‘lgan jarayonlarni qamrab oladi.',
    },
  ],

  hard: [
    {
      id: 'm1t3h01',
      text: 'Direktor ikki xodim o‘rtasidagi nizoda birinchi eshitgan xodimning talqiniga asoslanib qaror qildi. Keyinchalik ikkinchi tomon boshqa dalillarni ko‘rsatdi. Rahbarning asosiy xatosi nimada?',
      options: [
        'Nizoni juda tez hal qilganida',
        'Qarordan oldin axborot manbalarini yetarlicha tekshirmaganida',
        'Xodimlarga haddan tashqari ishonch bildirganida',
        'Empatiyani ortiqcha qo‘llaganida',
      ],
      answer: 1,
      explanation:
        'Bir tomonning talqini vaziyatning to‘liq manzarasi bo‘lmasligi mumkin. Qarordan oldin ikkala tomon va dalillar tekshirilishi zarur.',
    },
    {
      id: 'm1t3h02',
      text: 'Rahbar xodimning past natijasini “u dangasa” deb izohladi. Biroq topshiriq noaniq berilgani va resurs yetishmagani aniqlandi. Qaysi psixologik xato sodir bo‘lgan?',
      options: [
        'Shaxsiy xususiyatga ortiqcha bog‘lash',
        'Delegatsiyani kuchaytirish',
        'Kompensatsiyadan foydalanish',
        'Empatiyani haddan tashqari qo‘llash',
      ],
      answer: 0,
      explanation:
        'Rahbar natijani shaxsiy xususiyat bilan izohlashga shoshilgan, holbuki vaziyatga oid tashqi omillar ham mavjud bo‘lgan.',
    },
    {
      id: 'm1t3h03',
      text: 'Rahbarning o‘zi stressda bo‘lsa ham, xodimning keskin gapiga darhol javob bermay, savol berdi: “Sizningcha, muammoning asosiy sababi nimada?” Bu qaysi kompetensiyalar kombinatsiyasini ko‘rsatadi?',
      options: [
        'Emotsional o‘zini boshqarish va faol tinglash',
        'Qattiq nazorat va jazo',
        'Delegatsiya va moliyaviy boshqaruv',
        'Avtoritar boshqaruv va bosim',
      ],
      answer: 0,
      explanation:
        'Rahbar hissiy reaksiyani ushlab turdi va xodimni muammoni tushuntirishga undadi. Bu o‘zini boshqarish va tinglashni birlashtiradi.',
    },
    {
      id: 'm1t3h04',
      text: 'Quyidagi ketma-ketliklardan qaysi biri murakkab nizoni boshqarishning eng asoslangan modeli?',
      options: [
        'Aybdorni topish → jazo → izoh',
        'Tomonlarni tinglash → faktlarni ajratish → manfaatlarni aniqlash → yechim variantlarini ishlab chiqish',
        'Rahbar fikri → buyruq → nazorat',
        'Shikoyat → jamoa bosimi → qaror',
      ],
      answer: 1,
      explanation:
        'Murakkab nizoda pozitsiyalardan tashqari faktlar va tomonlarning real manfaatlarini aniqlash yechim sifatini oshiradi.',
    },
    {
      id: 'm1t3h05',
      text: 'Rahbar tajribali xodimga yangi xodim bilan bir xil darajadagi yo‘l-yo‘riqni doimiy ravishda beraveradi. Qaysi boshqaruv muammosi yuzaga kelishi mumkin?',
      options: [
        'Individual ehtiyoj va tayyorgarlik darajasini hisobga olmaslik',
        'Nazoratning butunlay yo‘qolishi',
        'Jamoaning haddan tashqari mustaqilligi',
        'Empatiyaning ortib ketishi',
      ],
      answer: 0,
      explanation:
        'Situatsion yondashuv xodimning tayyorgarligi va vazifaga nisbatan mustaqilligini hisobga oladi.',
    },
    {
      id: 'm1t3h06',
      text: 'Rahbar xodimga yuqori mas’uliyatli vazifa berdi. Xodimda ko‘nikma bor, lekin qaror qabul qilish vakolati yo‘q. Natija sustlashdi. Qaysi sabab eng mantiqiy?',
      options: [
        'Mas’uliyat va vakolat o‘rtasidagi nomutanosiblik',
        'Xodimning temperamentidagi farq',
        'Rahbarning empatiyasi',
        'Jamoaning haddan tashqari birlashishi',
      ],
      answer: 0,
      explanation:
        'Xodimdan natija talab qilinib, zarur vakolat berilmasa, u mustaqil harakat qila olmaydi.',
    },
    {
      id: 'm1t3h07',
      text: 'Rahbar jamoada xatolar haqida gapirishni jazolash bilan bog‘ladi. Bir necha oy o‘tib xatolar kamaymadi, lekin xatolar haqida xabar berish keskin kamaydi. Eng asosli xulosa qaysi?',
      options: [
        'Muammo to‘liq hal bo‘lgan',
        'Xodimlar xatoni yashirishni boshlagan bo‘lishi mumkin',
        'Jazo motivatsiyani doimiy oshirgan',
        'Jamoa xatosiz ishlay boshlagan',
      ],
      answer: 1,
      explanation:
        'Xatolar haqidagi axborot kamayishi xatolarning o‘zi kamayganini anglatmaydi; xodimlar salbiy oqibatdan qo‘rqib, xabar bermayotgan bo‘lishi mumkin.',
    },
    {
      id: 'm1t3h08',
      text: 'Rahbar “ochiq muloqot”ni e’lon qilgan, ammo tanqidiy fikr bildirgan xodimni keyinchalik doimiy tanqid qilgan. Bu holatda qaysi nomuvofiqlik kuchliroq?',
      options: [
        'Rasmiy qadriyat va amaliy xatti-harakat o‘rtasidagi nomuvofiqlik',
        'Temperament va motivatsiya o‘rtasidagi farq',
        'Delegatsiya va nazorat o‘rtasidagi muvozanat',
        'Vakolat va javobgarlik o‘rtasidagi farq',
      ],
      answer: 0,
      explanation:
        'Rahbar ochiq muloqotni qadriyat sifatida e’lon qilgan, ammo amaliy xatti-harakati teskari signal bergan.',
    },
    {
      id: 'm1t3h09',
      text: 'Rahbar bir xodimning kuchli kommunikativ qobiliyatini hisobga olib, uning ayrim tashkiliy kamchiliklarini rivojlantirish rejasiga kiritdi. Qaysi prinsipga eng yaqin?',
      options: [
        'Kompensatsiya va rivojlantirish yondashuvini birlashtirish',
        'Kamchilikni butunlay e’tiborsiz qoldirish',
        'Faqat kuchli tomonlarni baholash',
        'Faqat jazolash',
      ],
      answer: 0,
      explanation:
        'Kuchli tomonlardan foydalanish zaif jihatlarni inkor etmaydi; aksincha, ular rivojlanish uchun tayanch sifatida ishlatilishi mumkin.',
    },
    {
      id: 'm1t3h10',
      text: 'Rahbar o‘zini juda yuqori baholaydi. Jamoa esa uning qarorlarida takroriy xatolarni ko‘rsatmoqda. Eng to‘g‘ri boshqaruv chorasi qaysi?',
      options: [
        'Faqat o‘z fikrini himoya qilish',
        'Tashqi feedback va real natijalarni tizimli taqqoslash',
        'Tanqidchilarni chetlashtirish',
        'O‘zini baholashni umuman to‘xtatish',
      ],
      answer: 1,
      explanation:
        'O‘zini baholashni real natijalar va tashqi feedback bilan solishtirish nomuvofiqliklarni ko‘rishga yordam beradi.',
    },
    {
      id: 'm1t3h11',
      text: 'Rahbarning topshirig‘i uch bosqichdan o‘tgach mazmunan o‘zgardi. Xodimlar turli vazifalarni bajara boshladi. Birinchi navbatdagi yechim qaysi?',
      options: [
        'Xodimlarni jazolash',
        'Axborot uzatish nuqtalarida ma’no va kutilgan natijani qayta aniqlashtirish',
        'Barcha vakolatni rahbarda saqlash',
        'Yangi xodimlarni ishga olish',
      ],
      answer: 1,
      explanation:
        'Muammo axborotning uzatilishida yuzaga kelgan bo‘lsa, topshiriq mazmuni va kutilgan natija har bir bosqichda aniqlashtirilishi kerak.',
    },
    {
      id: 'm1t3h12',
      text: 'Rahbar barcha qarorlarni markazlashtirdi. Dastlab nazorat kuchaydi, keyinchalik xodimlar tashabbusi pasaydi. Bu natija nimani ko‘rsatadi?',
      options: [
        'Nazoratning kuchayishi har doim motivatsiyani oshirishini',
        'Haddan tashqari markazlashuv mustaqillikni cheklashi mumkinligini',
        'Delegatsiya zararli ekanini',
        'Xodimlarning barchasi motivatsiyasiz ekanini',
      ],
      answer: 1,
      explanation:
        'Qisqa muddatli nazorat kuchayishi mumkin, ammo ortiqcha markazlashuv xodimlarning tashabbus va javobgarlik hissini pasaytirishi ehtimoli bor.',
    },
    {
      id: 'm1t3h13',
      text: 'Rahbar “hamma ishni men yaxshi bilaman” deb xodimlarning takliflarini muntazam rad etadi. Bu holatda qaysi xavf birinchi o‘rinda?',
      options: [
        'Jamoaviy intellekt va feedback manbalarining qisqarishi',
        'Hujjatlar sonining kamayishi',
        'Nazoratning yo‘qolishi',
        'Xodimlarning mustaqilligi ortishi',
      ],
      answer: 0,
      explanation:
        'Turli nuqtayi nazarlarni rad etish rahbarning qarorlar uchun foydalanadigan axborot bazasini toraytiradi.',
    },
    {
      id: 'm1t3h14',
      text: 'Quyidagi moslashtirishlardan qaysi biri “muammo → psixologik yechim”ni to‘g‘ri beradi?',
      options: [
        '1-Tanqidni shaxsga qaratish; 2-Nizoda bir tomonning gapini eshitish → 1-konkret xatti-harakat; 2-ikkala tomon va faktlarni tekshirish',
        '1-Delegatsiya; 2-Empatiya → 1-jazo; 2-nazorat',
        '1-Stress; 2-Feedback → 1-aybdor izlash; 2-taqqoslash',
        '1-Jamoaviylik; 2-Ishonch → 1-mikroboshqaruv; 2-jazo',
      ],
      answer: 0,
      explanation:
        'Birinchi variant konstruktiv tanqid va xolis nizoni boshqarishning asosiy tamoyillarini to‘g‘ri moslashtiradi.',
    },
    {
      id: 'm1t3h15',
      text: 'Xodim tanqidga juda hissiy javob berdi. Rahbar “temperamenti shunaqa” deb suhbatni tugatdi. Qaysi xato mavjud?',
      options: [
        'Temperamentni vaziyatni tushuntirish uchun yagona sababga aylantirish',
        'Empatiyani haddan tashqari ishlatish',
        'Delegatsiyani noto‘g‘ri qo‘llash',
        'Nazoratni kuchaytirish',
      ],
      answer: 0,
      explanation:
        'Temperament reaksiyaga ta’sir qilishi mumkin, ammo xodimning hissiy reaksiyasining barcha sabablarini avtomatik tushuntirmaydi.',
    },
    {
      id: 'm1t3h16',
      text: 'Rahbar xodimga “Siz yomon o‘qituvchisiz” dedi. Xodim esa aniq qaysi ish noto‘g‘ri bo‘lganini so‘radi. Rahbarning gapidagi asosiy muammo nima?',
      options: [
        'Baholash mezoni va kuzatilgan xatti-harakat aniq ko‘rsatilmagan',
        'Rahbar juda ko‘p dalil keltirgan',
        'Rahbar ortiqcha empatiya qilgan',
        'Rahbar xodimga yetarli bosim qilmagan',
      ],
      answer: 0,
      explanation:
        'Umumiy shaxsiy baho xodimga aynan nimani o‘zgartirish kerakligini ko‘rsatmaydi.',
    },
    {
      id: 'm1t3h17',
      text: 'Rahbarning qarori to‘g‘ri bo‘lishi mumkin, ammo uni tushuntirish usuli jamoada qarshilikni kuchaytirdi. Bu nimani ko‘rsatadi?',
      options: [
        'Qarorning mazmuni va kommunikatsiya usuli alohida boshqarilishi kerakligini',
        'To‘g‘ri qaror hech qachon qarshilik tug‘dirmasligini',
        'Jamoa fikri ahamiyatsizligini',
        'Rahbar faqat buyruq bilan ishlashi kerakligini',
      ],
      answer: 0,
      explanation:
        'Qaror mazmunan asosli bo‘lishi mumkin, lekin uni qanday tushuntirish va jamoaga yetkazish ham qabul qilinishiga ta’sir qiladi.',
    },
    {
      id: 'm1t3h18',
      text: 'Rahbar jamoada “xato qilish mumkin emas” muhitini yaratdi. Natijada xodimlar yangi g‘oya taklif qilmay qo‘ydi. Eng mantiqiy sabab qaysi?',
      options: [
        'Psixologik xavfsizlik pasaygan bo‘lishi mumkin',
        'Xodimlarning barcha ko‘nikmalari oshgan',
        'Delegatsiya haddan tashqari kuchaygan',
        'Jamoada empatiya ortgan',
      ],
      answer: 0,
      explanation:
        'Xato uchun haddan tashqari jazodan qo‘rqish xodimlarni tashabbus va yangi g‘oyalarni bildirishdan tiyishi mumkin.',
    },
    {
      id: 'm1t3h19',
      text: 'Rahbar xodimni rag‘batlantirdi, ammo vazifa mezonlarini aniq bermadi. Keyin natijani “kutilgan darajada emas” deb baholadi. Bu yerda qaysi boshqaruv xatosi bor?',
      options: [
        'Baholash mezonlari oldindan aniqlashtirilmagan',
        'Rag‘batlantirish ortiqcha bo‘lgan',
        'Xodimga ishonch bildirilgan',
        'Empatiya yetishmagan',
      ],
      answer: 0,
      explanation:
        'Kutilgan natija o‘lchovi aniq bo‘lmasa, keyingi baholash subyektiv bo‘lib qolishi mumkin.',
    },
    {
      id: 'm1t3h20',
      text: 'Rahbar jamoa ichidagi nizoni hal qilish uchun tomonlarni birlashtirdi, ammo ular bir-birini ayblashda davom etdi. Keyingi qadam sifatida nima muhimroq?',
      options: [
        'Aybdorni tanlash',
        'Muammoning faktlari va umumiy manfaatlarini alohida aniqlash',
        'Suhbatni darhol tugatish',
        'Bir tomonning fikrini qabul qilish',
      ],
      answer: 1,
      explanation:
        'Tomonlar pozitsiyalaridan tashqari, nizoning faktlari va ikkala tomon uchun umumiy manfaatlarni ajratish yechimga yordam beradi.',
    },
    {
      id: 'm1t3h21',
      text: 'Xodim juda faol va tezkor, ammo topshiriqlarni ba’zan yuzaki bajaradi. Rahbar uchun qaysi yondashuv eng mantiqiy?',
      options: [
        'Faollikni cheklash',
        'Faollikni saqlagan holda sifat mezonlari va tekshiruv nuqtalarini aniqlash',
        'Uni barcha vazifalardan chetlashtirish',
        'Faqat xatolarini tanqid qilish',
      ],
      answer: 1,
      explanation:
        'Kuchli jihatni yo‘qotmasdan, zaif nuqtani aniq mezon va feedback orqali boshqarish rivojlantiruvchi yondashuvdir.',
    },
    {
      id: 'm1t3h22',
      text: 'Sokin va ehtiyotkor xodim yangi topshiriqni bajarishga ko‘proq vaqt so‘radi. Rahbar qaysi ma’lumotni aniqlashi kerak?',
      options: [
        'Faqat xodimning tezligini',
        'Vazifaning murakkabligi, resurslar va xodimning tayyorgarligini',
        'Faqat temperamentini',
        'Faqat boshqa xodimlarning fikrini',
      ],
      answer: 1,
      explanation:
        'Vazifani bajarish vaqti temperamentdan tashqari topshiriq murakkabligi, resurs va kompetensiyaga ham bog‘liq.',
    },
    {
      id: 'm1t3h23',
      text: 'Rahbar tanqidni yumshatish uchun muammoni umuman aytmadi. Xodim esa xatosini bilmagan holda davom etdi. Bu holat nimani ko‘rsatadi?',
      options: [
        'Empatiya har doim muammoni yashirish degani emasligini',
        'Tanqidni butunlay bekor qilish kerakligini',
        'Xodimni jazolash zarurligini',
        'Temperament asosiy omil ekanini',
      ],
      answer: 0,
      explanation:
        'Empatiya hurmatli muloqotni talab qiladi, ammo real muammoni yashirish rivojlanishga yordam bermaydi.',
    },
    {
      id: 'm1t3h24',
      text: 'Rahbar “biz” tilidan foydalanadi, lekin barcha qarorlarni yashirincha o‘zi qabul qiladi. Bu yerda asosiy muammo nima?',
      options: [
        'Kommunikatsiya tili va real boshqaruv amaliyoti o‘rtasidagi nomuvofiqlik',
        'Temperamentning noto‘g‘ri aniqlanishi',
        'Delegatsiyaning haddan tashqari kuchayishi',
        'Empatiyaning ortib ketishi',
      ],
      answer: 0,
      explanation:
        '“Biz” so‘zidan foydalanishning o‘zi jamoaviy boshqaruvni ta’minlamaydi; real vakolat va ishtirok mexanizmlari ham muhim.',
    },
    {
      id: 'm1t3h25',
      text: 'Rahbar bir xodimning xatosini kechirdi, boshqasining xuddi shunday xatosini jazoladi. Ikkala vaziyat o‘rtasida obyektiv farq yo‘q. Eng katta xavf qaysi?',
      options: [
        'Jamoada adolat va ishonchning buzilishi',
        'Delegatsiyaning kuchayishi',
        'Xodimlar motivatsiyasining bir xil oshishi',
        'Rahbarning empatiyasi kuchayishi',
      ],
      answer: 0,
      explanation:
        'Bir xil vaziyatga turlicha mezon qo‘llash adolatsizlik hissini va rahbarga bo‘lgan ishonchsizlikni kuchaytirishi mumkin.',
    },
    {
      id: 'm1t3h26',
      text: 'Rahbar xodimning kuchli tomonlarini yaxshi biladi, ammo uning rivojlanishi kerak bo‘lgan jihatlarini muhokama qilmaydi. U qanday xavfni kuchaytiradi?',
      options: [
        'Kuchli jihatlarga ortiqcha tayanib, rivojlanish ehtiyojlarini e’tiborsiz qoldirishni',
        'Xodimning haddan tashqari nazorat qilinishini',
        'Delegatsiyaning butunlay yo‘qolishini',
        'Jamoada nizolarning avtomatik kamayishini',
      ],
      answer: 0,
      explanation:
        'Kuchli jihatlarni tan olish muhim, lekin rivojlanish nuqtalarini aniqlamaslik xodimning keyingi o‘sishini cheklashi mumkin.',
    },
    {
      id: 'm1t3h27',
      text: 'Quyidagi ketma-ketliklardan qaysi biri rahbarning konstruktiv feedback jarayonini eng to‘liq ifodalaydi?',
      options: [
        'Shaxsiyat → tanqid → taqqoslash → jazo',
        'Kuzatuv → konkret fakt → ta’sir → kutilgan o‘zgarish → qo‘llab-quvvatlash',
        'Xato → aybdor → tanbeh → hisobot',
        'Muammo → jamoa oldida e’lon → jazo → nazorat',
      ],
      answer: 1,
      explanation:
        'Konstruktiv feedback faktga, ta’sirga va kelgusidagi aniq o‘zgarishga yo‘naltiriladi hamda xodimni rivojlantirishni ko‘zlaydi.',
    },
    {
      id: 'm1t3h28',
      text: 'Rahbar jamoada qarorlar bo‘yicha barcha ma’lumotlarni faqat o‘zida saqlaydi. Xodimlar esa qaror sababini tushunmaydi. Psixologik jihatdan qaysi xavf ortadi?',
      options: [
        'Noaniqlik va norasmiy talqinlar',
        'Jamoaviy ishonchning avtomatik oshishi',
        'Mustaqil qarorlarning sifati oshishi',
        'Empatiyaning kuchayishi',
      ],
      answer: 0,
      explanation:
        'Muhim ma’lumot yetishmaganda xodimlar bo‘sh joylarni taxminlar va norasmiy axborot bilan to‘ldirishi mumkin.',
    },
    {
      id: 'm1t3h29',
      text: 'Rahbar o‘z xatosini tan olgach, jamoada xodimlar ham muammolar haqida ochiqroq gapira boshladi. Buning ehtimoliy sababi qaysi?',
      options: [
        'Rahbar xatti-harakati psixologik namuna yaratgan',
        'Xodimlar jazodan qo‘rqishni boshlagan',
        'Delegatsiya kamaygan',
        'Nazorat kuchaygan',
      ],
      answer: 0,
      explanation:
        'Rahbarning o‘z xatosini ochiq tan olishi xatolarni yashirmasdan muhokama qilish uchun ijtimoiy namuna bo‘lishi mumkin.',
    },
    {
      id: 'm1t3h30',
      text: 'Boshqaruv psixologiyasi nuqtayi nazaridan eng yetuk rahbarlik qarorini qaysi variant ifodalaydi?',
      options: [
        'Tez qaror + qat’iy jazo + doimiy nazorat',
        'Fakt + inson omili + vaziyat + oqibat + rivojlantirish imkoniyatini birgalikda hisobga olish',
        'Faqat xodim fikri + rahbarning shaxsiy tajribasi',
        'Faqat natija + temperament + jazolash',
      ],
      answer: 1,
      explanation:
        'Yetuk boshqaruv qarori faktlarni, inson omilini, vaziyatni, ehtimoliy oqibatlarni va kelgusidagi rivojlanish imkoniyatini birgalikda ko‘rib chiqadi.',
    },
  ],

  case: [
    {
      id: 'm1t3c01',
      text: 'Direktor o‘qituvchining hisobotni kech topshirganini ko‘rdi. U jahli chiqib, uni jamoa oldida “mas’uliyatsiz” deb atamoqchi. Eng maqbul harakat qaysi?',
      options: [
        'Jamoa oldida tanqid qilish',
        'Aniq holatni alohida muhokama qilib, sabab va tuzatish yo‘lini aniqlash',
        'Darhol jazolash',
        'Boshqa xodimlarga ham uni tanqid qildirish',
      ],
      answer: 1,
      explanation:
        'Tanqid shaxsiyatga emas, konkret harakatga qaratilishi va xodimning qadr-qimmati saqlanishi kerak.',
    },
    {
      id: 'm1t3c02',
      text: 'Ikki o‘qituvchi o‘rtasida mojaro chiqdi. Birinchi o‘qituvchi direktor huzurida o‘z versiyasini aytdi. Direktor darhol qaror qilmoqchi. Eng to‘g‘ri keyingi qadam qaysi?',
      options: [
        'Birinchi tomon foydasiga qaror qilish',
        'Ikkinchi tomon va mavjud dalillarni ham tinglash',
        'Nizoni jamoa yig‘ilishida muhokama qilish',
        'Darhol ikkala xodimni jazolash',
      ],
      answer: 1,
      explanation:
        'Bir tomonning talqini yetarli emas. Xolis qaror uchun ikkinchi tomon va obyektiv dalillar ham tekshiriladi.',
    },
    {
      id: 'm1t3c03',
      text: 'Yangi o‘qituvchi metodik yordamga muhtoj, tajribali o‘qituvchi esa mustaqil ishlay oladi. Direktor ikkalasiga bir xil boshqaruv usulini qo‘llamoqda. Nima qilish kerak?',
      options: [
        'Ikkalasini ham bir xil nazorat qilish',
        'Yangi xodimga ko‘proq yo‘l-yo‘riq, tajribali xodimga mos darajada mustaqillik berish',
        'Tajribali xodimni ham doimiy nazorat qilish',
        'Yangi xodimni butunlay mustaqil qoldirish',
      ],
      answer: 1,
      explanation:
        'Situatsion yondashuv xodimlarning tayyorgarligi va ehtiyojiga qarab boshqaruv usulini moslashtiradi.',
    },
    {
      id: 'm1t3c04',
      text: 'Direktor majlisda keskin tanqid eshitdi va darhol javob bermoqchi bo‘ldi. 3 soniya qoidasi asosida nima qilishi kerak?',
      options: [
        'Darhol qarshi hujum qilish',
        'Qisqa pauza qilib, tanqid mazmunini aniqlashtirish',
        'Tanqidchini majlisdan chiqarish',
        'Suhbatni tugatish',
      ],
      answer: 1,
      explanation:
        'Pauza rahbarga avtomatik hissiy javobdan voz kechib, mazmunni aniqlash imkonini beradi.',
    },
    {
      id: 'm1t3c05',
      text: 'Direktor barcha ishni o‘zi bajaradi. Xodimlar esa “baribir direktor qiladi” deb tashabbus ko‘rsatmay qo‘ydi. Asosiy muammo qaysi?',
      options: [
        'Delegatsiya va ishonchning yetishmasligi',
        'Xodimlarning temperamentlari',
        'Hujjatlar ko‘pligi',
        'Jamoaning haddan tashqari mustaqilligi',
      ],
      answer: 0,
      explanation:
        'Rahbar barcha ishni o‘zi bajarishi xodimlarda mas’uliyat va tashabbusni rivojlantirish imkoniyatini cheklaydi.',
    },
    {
      id: 'm1t3c06',
      text: 'O‘qituvchi juda faol, muloqotchan va yangi vaziyatga tez moslashadi, lekin ba’zan ortiqcha optimistik baho beradi. Rahbar qanday yondashishi ma’qul?',
      options: [
        'Faolligidan foydalanib, qarorlarida real tekshiruv mezonlarini ham joriy qilish',
        'Uni barcha mas’uliyatli vazifalardan chetlashtirish',
        'Faqat kamchiliklarini ta’kidlash',
        'Uning barcha qarorlarini rad etish',
      ],
      answer: 0,
      explanation:
        'Sangvinikning faolligi kuchli jihat bo‘lishi mumkin, ammo ortiqcha optimizmni fakt va tekshiruv bilan muvozanatlashtirish kerak.',
    },
    {
      id: 'm1t3c07',
      text: 'Xodim energiyali va maqsadga intiluvchan, lekin tanqid paytida tez jahli chiqadi. Rahbar uchun eng maqbul strategiya qaysi?',
      options: [
        'U bilan faqat qattiq ohangda gaplashish',
        'Energiya va tashabbusini saqlagan holda hissiy reaksiyalarni boshqarish bo‘yicha aniq qoidalarni belgilash',
        'Uni barcha jamoaviy ishlardan chiqarish',
        'Har bir xatosi uchun jazo berish',
      ],
      answer: 1,
      explanation:
        'Xolerik xususiyatlar kuchli energiya bilan birga hissiy reaksiya tezligini ham o‘z ichiga olishi mumkin. Kuchli tomon va rivojlanish nuqtasi birgalikda boshqariladi.',
    },
    {
      id: 'm1t3c08',
      text: 'Sokin va ehtiyotkor xodim qaror qabul qilish uchun ko‘proq vaqt so‘radi. Direktor uni “sust” deb baholamoqchi. Eng to‘g‘ri yondashuv qaysi?',
      options: [
        'Faqat tezlikka qarab baholash',
        'Vazifa sifati, murakkabligi va xodimning ehtiyotkorlik xususiyatini birgalikda baholash',
        'Darhol jazolash',
        'Uni tezroq xodim bilan almashtirish',
      ],
      answer: 1,
      explanation:
        'Flegmatik xususiyatlar ehtiyotkorlik bilan namoyon bo‘lishi mumkin. Tezlikning o‘zi kasbiy samaradorlikning yagona mezoni emas.',
    },
    {
      id: 'm1t3c09',
      text: 'Xodim tanqidni juda ta’sirchan qabul qildi va keyingi kunlarda xavotirda yurdi. Rahbar keyingi suhbatda qaysi usulni tanlashi ma’qul?',
      options: [
        'Tanqidni yanada kuchaytirish',
        'Konkret xatti-harakatni, kutilgan o‘zgarishni va xodimga bo‘lgan ishonchni tushuntirish',
        'Muammoni umuman tilga olmaslik',
        'Jamoa oldida yana tanqid qilish',
      ],
      answer: 1,
      explanation:
        'Ta’sirchan xodim bilan muloqotda konkretlik, hurmat va rivojlanish yo‘lini ko‘rsatish muhim.',
    },
    {
      id: 'm1t3c10',
      text: 'Direktor noto‘g‘ri qaror qilganini tan oldi va jamoaga tuzatish rejasini taqdim etdi. Bu holatda qaysi boshqaruv xususiyati eng aniq ko‘rinadi?',
      options: [
        'Mas’uliyatni o‘z zimmasiga olish va ochiqlik',
        'Nazoratning yo‘qligi',
        'Lavozim zaifligi',
        'Jamoaga qaramlik',
      ],
      answer: 0,
      explanation:
        'Xatoni tan olishning o‘zi emas, uni tuzatish rejasini ko‘rsatish ham mas’uliyatli boshqaruvning muhim belgisi hisoblanadi.',
    },
  ],
}
