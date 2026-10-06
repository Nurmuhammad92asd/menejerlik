/* =========================================================
 * M4T4 — INSON RESURSLARI FAOLIYATINI BAHOLASH
 * MENEJERLIK BY NURMUHAMMAD
 * =========================================================
 *
 * 20 ta asosiy savol
 * 10 ta vaziyatli savol
 * 5 ta kompleks case
 *
 * SAVOL VA JAVOB MATNLARI O'ZGARTIRILMAGAN
 * =========================================================
 */

export const m4t4 = {
  id: "m4t4",
  title: "Inson resurslari faoliyatini baholash",
  description:
    "Inson resurslari, pedagoglar faoliyatini baholash, KPI, SWOT, portfolio, monitoring, attestatsiya va rivojlantiruvchi feedback.",
  easy: [
    {
      id: "m4t4-e1",
      question: `Quyidagi dars kuzatuvi bosqichlarini ularning asosiy baholash vazifalari bilan moslashtiring.

**1-4 bosqichlar:**
1.Kuzatuvdan oldingi tahlil
2.Dars jarayonini kuzatish
3.Baholash va qayta aloqa
4.Kuzatuvdan keyingi suhbat

**A-D tavsiflar:**
A) Dars maqsadlarining DTS talablariga mosligini aniqlash
B) O‘quvchi faolligi, metodlar va motivatsiyani real jarayonda tahlil qilish
C) O‘quvchilar bilimini xolis baholash va darhol tahlil qilish
D) Kamchiliklarni tanqid qilish emas, balki rivojlantirish yo‘llarini birgalikda muhokama qilish`,
      options: [
        "1–A, 2–B, 3–C, 4–D",
        "1–B, 2–A, 3–D, 4–C",
        "1–D, 2–C, 3–B, 4–A",
        "1–C, 2–D, 3–A, 4–B",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-e2",
      question: `Matnga ko‘ra, mehnat faoliyatini baholash natijalarini rag‘batlantirish va jazo choralariga bog‘lashning asosiy boshqaruv samarasi nimada namoyon bo‘ladi?`,
      options: [
        "Xodimlar ustidan nazorat mexanizmlarini kuchaytirishda",
        "Jamoada adolat va shaffoflik mezonlarini mustahkamlashda",
        "Faoliyatni faqat iqtisodiy natijalar bilan baholash imkonini berishda",
        "Intizomiy jazolarni tezkor qo‘llash imkoniyatini yaratishda",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-e3",
      question: `Inson resurslari faoliyatini baholashning boshqaruv tizimidagi asosiy o‘rni matnda qaysi mantiqiy yondashuv orqali izohlangan?

A) Baholash jarayoni intizomiy nazoratni kuchaytiruvchi vosita sifatida qaralishi orqali
B) Baholash jarayoni xodimlar faoliyatini standartlashtirishga qaratilgan texnik usul sifatida tushuntirilishi orqali
C) Baholash faqat yakuniy natijalarni qayd etishga xizmat qiluvchi jarayon sifatida talqin qilinishi orqali
D) Baholash boshqaruv qarorlarini axborot bilan ta’minlovchi tizimli mexanizm sifatida ko‘rilishi orqali`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e4",
      question: `KPI tizimining ta’lim menejmentidagi asosiy akademik ustunligi matnda qaysi yondashuv orqali ochib berilgan?

A) O‘qituvchilar faoliyatini standartlashtirish va bir xil mezonlarga bo‘ysundirish bilan
B) Pedagog faoliyatini umumiy tavsiflar asosida baholash imkoniyat rejasi bilan integratsiya qilish bilan
C) Maktab strategik maqsadlarini pedagogning individual ish rejasi bilan integratsiya qilish bilan
D) Baholashni faqat miqdoriy natijalarga tayanib olib borish rejasi bilan integratsiya qilish bilan`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 2,
    },

    {
      id: "m4t4-e5",
      question: `Quyidagi baholash turlarini ularning asosiy boshqaruv vazifasi bilan moslashtiring.

**1-4 baholash turlari:**
1.Muntazam (davriy) baholash
2.Vaziyatli (operativ) baholash
3.360 darajali baholash
4.O‘z-o‘zini baholash

**A-D tavsiflar:**
A) Xodimning ijtimoiy va kommunikativ ko‘nikmalarini ko‘p tomonlama aniqlash
B) Muayyan loyiha yoki topshiriq natijasini tezkor tahlil qilish
C) Ichki motivatsiyani kuchaytirish va refleksiyani rivojlantirish
D) Belgilangan davr oralig‘ida faoliyatni tizimli ravishda tahlil qilish`,
      options: [
        "1–D, 2–B, 3–A, 4–C",
        "1–C, 2–A, 3–B, 4–D",
        "1–A, 2–C, 3–D, 4–B",
        "1–B, 2–D, 3–C, 4–A",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-e6",
      question: `Quyidagilardan qaysilari dars kuzatuvi jarayonida metodik muvofiqlik va o‘quvchi markazlashuvini baholashga oid mezonlar sifatida matnda bevosita keltirilgan?
A) O‘qituvchi tomonidan interaktiv va muammoli metodlardan foydalanilishi
B) O‘qituvchi nutqining dars vaqtining ma’lum qismi bilan cheklanishi
C) Dars jarayonida o‘quvchi faolligining ta’minlanganligi
D) Baholashning faqat yakuniy natijalar asosida olib borilishi
E) O‘qituvchi nutqining dars davomida ustuvor bo‘lishi`,
      options: [
        "A, C, D",
        "B, C, D",
        "C, D, E",
        "A, B, C",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e7",
      question: `Matnga ko‘ra, inson resurslarini baholashning strategik ahamiyati qaysi asosiy natija orqali ifodalanadi?`,
      options: [
        "Xodimlar faoliyatini faqat statistik nazorat qilish imkoniyati bilan",
        "Baholash jarayonini to‘liq avtomatlashtirish orqali",
        "Ta’lim muassasasining barqaror rivojlanishini ta’minlovchi mexanizm sifatida",
        "Ta’lim muassasasining qisqa muddatli reyting ko‘rsatkichlarini oshirish bilan",
      ],
      correctAnswer: 2,
    },

    {
      id: "m4t4-e8",
      question: `Quyidagi holatlardan qaysi biri SWOT tahlilida ‘Threats’ (xavf-hatarlar) kategoriyasiga to‘g‘ri keladi?`,
      options: [
        "Metodik mahoratning yuqori darajada shakllanganligi",
        "Texnologik yangiliklardan ortda qolish xavfi",
        "O‘qituvchining AKTdan samarali foydalanish ko‘nikmasi",
        "Grant loyihalarida ishtirok etish imkoniyatining mavjudligi",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-e9",
      question: `Pedagoglar faoliyatini baholash tizimining murakkabligi matnda qaysi konseptual yondashuv orqali asoslangan?`,
      options: [
        "Baholash jarayoni pedagog shaxsiy xususiyatlarini aniqlashga yo‘naltirilgani bilan",
        "Baholash pedagogning hujjat yuritish malakasini ustuvor qo‘yishi bilan",
        "Baholash faqat yakuniy o‘quv natijalariga tayanishi bilan",
        "Baholash natija bilan bir qatorda ta’lim jarayonining sifatini ham qamrab olishi bilan",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e10",
      question: `Quyidagilardan qaysilari inson resurslari faoliyatini baholashning funksional maqsadlari sifatida matnda bevosita ko‘rsatilgan?
A) Xodimni lavozimga tayinlash yoki boshqa ishga o‘tkazish uchun asos yaratish
B) Baholash natijalarini faqat statistik hisobotlar shaklida jamlash
C) Xodimga faoliyati bo‘yicha ob’yektiv teskari aloqa berish
D) Tashkilot ichki intizomini kuchaytirish uchun jazolash mexanizmini ishlab chiqish
E) Yuqori natija ko‘rsatgan xodimlar orqali sog‘lom raqobat muhitini shakllantirish`,
      options: [
        "A, C, D",
        "B, C, E",
        "A, B, C",
        "A, C, E",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e11",
      question: `Quyidagi SWOT tahlil elementlarini ularning mos tavsiflari bilan to‘g‘ri moslashtiring.

**1-4 tushunchalar:**
1.Strengths
2.Weaknesses
3.Opportunities
4.Threats

**A-D tavsiflar:**
A) Pedagogning rivojlanishi uchun tashqi muhit yaratadigan ijobiy sharoitlar
B) Kasbiy faoliyat samaradorligini pasaytirishi mumkin bo‘lgan ichki kamchiliklar
C) Pedagog faoliyatiga tashqi salbiy ta’sir ko‘rsatishi mumkin bo‘lgan omillar
D) Pedagogning mavjud kasbiy ustunliklari va salohiyati`,
      options: [
        "1–B, 2–D, 3–C, 4–A",
        "1–A, 2–C, 3–D, 4–B",
        "1–D, 2–B, 3–A, 4–C",
        "1–C, 2–A, 3–B, 4–D",
      ],
      correctAnswer: 2,
    },

    {
      id: "m4t4-e12",
      question: `Matnga ko‘ra, baholash jarayonida “jazolash emas, davolash” tamoyili quyidagi qaysi psixologik yondashuvlarni nazarda tutadi?
A) Baholash natijalarini pedagog shaxsiga qaratish
B) Xodimda rivojlanishga bo‘lgan ichki motivatsiyani shakllantirish
C) Xatolarni tan olish uchun psixologik xavfsiz muhit yaratish
D) Baholashni intizomiy jazo mexanizmi sifatida qo‘llash
E) Baholashni pedagogik diagnostika vositasi sifatida ko‘rish`,
      options: [
        "B, C, E",
        "A, B, C",
        "A, D, E",
        "C, D, E",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-e13",
      question: `Quyidagi choralar ichidan qaysi biri rag‘batlantirishning tuzatuvchi (korreksiyalovchi) funksiyasini ifodalaydi?`,
      options: [
        "Yuqori natija ko‘rsatgan pedagoglarni attestatsiyadan ozod qilish",
        "Past natija ko‘rsatgan xodimlar uchun malaka oshirish va metodik kouching joriy etish",
        "KPI ko‘rsatkichlari asosida pul mukofotlarini belgilash va metodik kouching joriy etish",
        "Faxriy yorliqlar va jamoatchilik e’tirofini berish va metodik kouching joriy etish",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-e14",
      question: `Quyidagilardan qaysilari pedagoglar uchun KPI tizimining tarkibiy qismlari sifatida matnda bevosita ko‘rsatilgan?
A) O‘quvchilarning DTS talablariga muvofiq bilim darajasi
B) O‘qituvchining shaxsiy fazilatlari va xarakter xususiyatlari
C) Ilmiy-metodik mahsulotlar va sertifikatlarga egalik
D) Malaka oshirishdan o‘tgan bilimlarni amaliyotda qo‘llash darajasi
E) Pedagogning ma’muriy topshiriqlarga bo‘ysunish darajasi`,
      options: [
        "C, D, E",
        "A, B, C",
        "B, C, E",
        "A, C, D",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e15",
      question: `Quyidagi variantlardan qaysi biri ijtimoiy-pedagogik faollik mezonining boshqaruv mazmunini eng to‘liq ochib beradi?

A) Pedagogning jamoa, ota-onalar va tarbiyaviy jarayondagi tizimli ishtirokini baholash
B) O‘quvchilar o‘zlashtirish ko‘rsatkichlarini monitoring qilish va tarbiyaviy jarayondagi tizimli ishtirokini baholash
C) Pedagogning dars hujjatlarini rasmiylashtirish sifatini tekshirish
D) Pedagogning fan bo‘yicha bilim darajasini aniqlash va tarbiyaviy jarayondagi tizimli ishtirokini baholash`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 0,
    },

    {
      id: "m4t4-e16",
      question: `Matnga ko‘ra, SWOT tahlilining pedagog faoliyatini baholashdagi asosiy metodologik ustunligi nimada namoyon bo‘ladi?

A) Baholashni asosan tashqi nazorat mexanizmlarini strategik kesimda o‘rganishida
B) Ichki salohiyat va tashqi muhit omillarini kompleks strategik kesimda o‘rganishida
C) Faoliyatni faqat kamchiliklar orqali diagnostika qilishida
D) Pedagog faoliyatini faqat ichki resurslar doirasida tahlil qilish imkonini  strategik kesimda o‘rganishida`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 1,
    },

    {
      id: "m4t4-e17",
      question: `Quyidagi variantlardan qaysi biri inson resurslari faoliyatini baholashning rivojlantiruvchi maqsadini eng to‘liq ifodalaydi?`,
      options: [
        "Xodimning mehnat samaradorligini moliyaviy ko‘rsatkichlar orqali baholash",
        "Xodim faoliyatini tashkiliy standartlar bilan solishtirish",
        "Xodimning amaldagi lavozimiga muvofiqligini aniqlash",
        "Xodim uchun individual kasbiy rivojlanish yo‘nalishini belgilash",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-e18",
      question: `Matnga muvofiq, pedagog kadrlarni attestatsiyadan o‘tkazish jarayonining huquqiy-professional mazmunini to‘g‘ri ifodalovchi jihatlarni aniqlang.
A) Pedagogning kasbiy darajasini rasmiy va huquqiy tasdiqlash
B) Faqat pedagogning ish stajini hisobga olish
C) Portfoliodagi yutuqlarni tahlil qilish
D) Fan bo‘yicha bilim darajasini sinovdan o‘tkazish
E) Pedagogik mahoratni ekspertlar tomonidan baholash`,
      options: [
        "A, C, D, E",
        "B, C, D, E",
        "A, B, C, E",
        "A, B, C, D",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-e19",
      question: `Quyidagi baholash natijalari asosidagi boshqaruv mexanizmlarini ularning mazmuniy tavsiflari bilan to‘g‘ri moslashtiring.

**1-4 mexanizmlar:**
1.Moddiy rag‘bat
2.Ma’naviy rag‘bat
3.Korreksiyalovchi choralar
4.Attestatsiya jarayoni

**A-D tavsiflar:**
A) Pedagogning kasbiy darajasini huquqiy jihatdan tasdiqlashga qaratilgan baholash bosqichlari
B) Yuqori natijalarni iqtisodiy manfaat orqali mustahkamlash vositasi
C) Past natijalarni bartaraf etishga qaratilgan rivojlantiruvchi aralashuv
D) Kasbiy obro‘ va ijtimoiy e’tirofni oshirishga xizmat qiluvchi rag‘bat`,
      options: [
        "1–A, 2–C, 3–B, 4–D",
        "1–C, 2–A, 3–D, 4–B",
        "1–B, 2–D, 3–C, 4–A",
        "1–D, 2–B, 3–A, 4–C",
      ],
      correctAnswer: 2,
    },

    {
      id: "m4t4-e20",
      question: `Quyidagi baholash va monitoring vositalarini ularning asosiy funksional vazifalari bilan moslashtiring.

1-4 tushunchalar:
1.KPI tizimi
2.O‘qituvchi portfoliosi
3.Ichki monitoring
4.Refleksiv blok

A-D tavsiflar:

A) Kasbiy yutuqlar va rivojlanishning tizimli dalillarini jamlash
B) Strategik maqsadlarni individual faoliyat ko‘rsatkichlariga bog‘lash
C) Muammolarni erta aniqlash va ularni oldini olish
D) O‘z faoliyatini mustaqil tahlil qilish va xulosalar chiqarish`,
      options: [
        "1–C, 2–B, 3–D, 4–A",
        "1–D, 2–C, 3–A, 4–B",
        "1–B, 2–A, 3–C, 4–D",
        "1–A, 2–D, 3–B, 4–C",
      ],
      correctAnswer: 2,
    },
  ],

  medium: [
    {
      id: "m4t4-m1",
      question: `Direktor KPI tizimi asosida o‘qituvchilar faoliyatini baholashda portfoliolarni joriy qildi. Biroq dastlab baholash natijalari subyektiv chiqdi, ayrim o‘qituvchilar esa jarayonni faqat hujjat yig‘ish sifatida qabul qila boshladi. Shundan so‘ng direktor portfolioni raqamli shaklga o‘tkazib, uni har chorak yakunida tahlil qilish va yil oxirida taqdimot shaklida himoya qilish tizimini yo‘lga qo‘ydi.

**Savol:**
Ushbu o‘zgarishlar qaysi boshqaruv muammosini eng samarali bartaraf etadi?`,
      options: [
        "Baholashda subyektivlikni kamaytirish va jarayonni tizimlashtirish",
        "Baholashda tezkorlikni oshirish va hujjatlarni soddalashtirish",
        "Baholashda formal yondashuvni saqlab, tartibni mustahkamlash",
        "Baholashda nazoratni kuchaytirish va hisobotlarni ko‘paytirish",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-m2",
      question: `Maktabda bir o‘qituvchi darsni yaxshi tashkil etadi, zamonaviy metodlardan foydalanadi va AKT vositalarini faol qo‘llaydi. Biroq uning o‘quvchilari natijalari o‘rtacha darajada qolmoqda.

**Savol:**
Quyidagi mezonlardan qaysi biri ushbu holatda yetarli darajada namoyon bo‘lmagan?`,
      options: [
        "Pedagogik texnologiyalarni qo‘llash darajasi",
        "Dars jarayonida metodik yondashuv sifati",
        "O‘quv natijalari barqaror o‘sish darajasi",
        "Kasbiy bilim va metodik mahorat darajasi",
      ],
      correctAnswer: 2,
    },

    {
      id: "m4t4-m3",
      question: `Maktabda yangi loyiha yakunlandi. Rahbar aynan shu loyiha doirasida o‘qituvchilarning faoliyatini alohida tahlil qilib, natijalarini baholamoqchi.

**Savol:**
Ushbu vaziyat qaysi baholash turiga mos keladi?`,
      options: [
        "Ko‘p tomonlama fikrlar asosidagi baholash",
        "Belgilangan davr asosida o‘tkazilgan baholash",
        "Muayyan vazifa yakuni asosidagi baholash",
        "Shaxsiy faoliyatni mustaqil tahlil qilish",
      ],
      correctAnswer: 2,
    },

    {
      id: "m4t4-m4",
      question: `Direktor attestatsiya natijalarini tahlil qilib, ayrim o‘qituvchilarda yuqori test natijalari bo‘lsa-da, umumiy ball past chiqayotganini aniqladi. Tahlil davomida bu holat testdan tashqari boshqa komponentlar bilan bog‘liqligi ma’lum bo‘ldi.

**Savol:**
Quyidagilardan qaysi omil ushbu natijaga eng ko‘p ta’sir ko‘rsatgan bo‘lishi mumkin?`,
      options: [
        "Hujjatlar to‘plami va rasmiylashtirish",
        "Test natijasi va bilim darajasi",
        "Ariza topshirish va ro‘yxatdan o‘tish",
        "Metodik faoliyat va dars sifati",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-m5",
      question: `Rahbar o‘qituvchi portfoliosini ko‘rib chiqayotganda mukofotlar va ishlanmalar bilan birga, uning o‘z xatolarini tahlil qilishi, samarasiz bo‘lgan metodlarini anglab yetishi va keyingi rivojlanish yo‘lini belgilashiga alohida e’tibor qaratdi.

**Savol:**
Portfolioning qaysi qismi bu maqsadga eng ko‘p xizmat qiladi?`,
      options: [
        "Metodik tajribani ko‘rsatuvchi bo‘lim",
        "Refleksiv tahlilni ko‘rsatuvchi bo‘lim",
        "Kasbiy qarashlarni ifodalovchi bo‘lim",
        "Yutuqlarni aks ettiruvchi bo‘lim",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-m6",
      question: `Maktabda bir o‘qituvchi yuqori natija ko‘rsatgan. Rahbar uni boshqa lavozimga o‘tkazish va ish haqini oshirish masalasini ko‘rib chiqmoqda. Shu jarayonda baholash natijalaridan asos sifatida foydalanilmoqda.

**Savol:**
Bu holatda baholashning qaysi maqsadi ustuvor hisoblanadi?`,
      options: [
        "Faoliyat haqida ma’lumot yetkazib berish",
        "Rivojlanish yo‘nalishlarini aniqlab berish",
        "Xodimni ichki jihatdan rag‘batlantirish",
        "Ma’muriy qarorlar uchun asos yaratish",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-m7",
      question: `Maktabda ichki monitoring natijalari asosida ayrim o‘qituvchilarda natijalar pasaygani aniqlandi. Direktor bu holatni intizomiy masala sifatida ko‘rmay, SWOT tahlil o‘tkazdi va keyin individual rivojlanish choralari, coaching hamda metodik yordamni joriy qildi. Shu bilan birga, natijalarga qarab rag‘batlantirish tizimini ham qayta ko‘rib chiqdi.

**Savol:**
Direktorning bu yondashuvi qaysi integratsiyalashgan boshqaruv modeliga eng mos keladi?`,
      options: [
        "Monitoring asosida nazoratni kuchaytirish va intizomni oshirish",
        "Diagnostika asosida rivojlantirish va rag‘batni uyg‘unlashtirish",
        "Natija asosida tanlovni kuchaytirish va raqobatni oshirish",
        "Baholash asosida jazolashni kuchaytirish va tartibni mustahkamlash",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-m8",
      question: `Dars kuzatuvi jarayonida rahbar o‘qituvchining darsini tahlil qildi. Kuzatuvdan keyin suhbat davomida u avval darsning ijobiy jihatlarini aytib, keyin kamchiliklarni ko‘rsatib, so‘ngra rivojlanish bo‘yicha tavsiyalar berdi.

**Savol:**
Ushbu yondashuv qaysi metodga eng mos keladi?`,
      options: [
        "Konstruktiv fikr bildirishning bosqichli usuli",
        "Darsni baholashning standart mezonli usuli",
        "Faoliyatni tahlil qilishning umumiy yondashuvi",
        "Kuzatuv natijasini muhokama qilishning oddiy usuli",
      ],
      correctAnswer: 0,
    },

    {
      id: "m4t4-m9",
      question: `Maktab rahbari o‘qituvchi faoliyatini baholashda o‘quvchilar natijalari, metodik ishlari, kasbiy rivojlanishi va darsdagi amaliy ta’sirini bir tizimda ko‘rmoqchi. Shu maqsadda u maktabning strategik maqsadlarini pedagogning shaxsiy ish rejasi bilan bog‘laydigan vositani tanladi.

**Savol:**
Bu vaziyatda qaysi yondashuv eng mos keladi?`,
      options: [
        "Yutuqlarni jamlab tahlil qilishga bog‘lash tizimi",
        "Faoliyatni umumiy baholashga bog‘lash tizimi",
        "Natijalarni mezonli kuzatishga bog‘lash tizimi",
        "Ko‘rsatkichlarni maqsadga bog‘lash tizimi",
      ],
      correctAnswer: 3,
    },

    {
      id: "m4t4-m10",
      question: `O‘qituvchi navbatdan tashqari attestatsiyada ishtirok etdi, biroq natija kutilgan darajada bo‘lmadi. Shundan so‘ng u yana o‘z lavozimida ishlashda davom etdi va avvalgi toifasi o‘zgarishsiz qoldi. Direktor bu holatni boshqa pedagoglarga ham tushuntirib bermoqchi.

**Savol:**
Mazkur vaziyat attestatsiya tizimining qaysi xususiyatini ifodalaydi?`,
      options: [
        "Majburiy baholashda natija yangilanishi",
        "Ixtiyoriy baholashda natija saqlanishi",
        "Ixtiyoriy sinovda toifa o‘zgarishi",
        "Majburiy sinovda toifa pasaytirilishi",
      ],
      correctAnswer: 1,
    },
  ],

  hard: [],

  case: [
    {
      id: "m4t4-c1",
      question: `**Vaziyat:**
389-sonli umumiy o‘rta ta’lim maktabida pedagog xodimlar faoliyatini baholash bo‘yicha ichki muhokama o‘tkazildi. Muhokamada ayrim o‘qituvchilar o‘quvchilar natijalari bo‘yicha yuqori ko‘rsatkichlarga ega bo‘lsa-da, dars kuzatuvlarida metodik uyg‘unlik, baholashning aniqligi va o‘quvchi faolligini ta’minlash bilan bog‘liq kamchiliklar uchrayotgani ta’kidlandi. Boshqa bir guruh pedagoglarda esa portfolio materiallari, dars ishlanmalari va refleksiv yozuvlar mazmunli shakllangan bo‘lib, ichki monitoring natijalari ham ularning kasbiy izlanishini ko‘rsatmoqda, biroq bu ko‘rsatkichlar o‘quvchilar natijalaridagi o‘sish bilan har doim ham bir xil darajada mos kelmayotgani ma’lum bo‘ldi. Direktor baholash tizimini faqat ma’muriy qarorlar chiqarish vositasi sifatida emas, balki kasbiy rivojlanish, motivatsiya va individual o‘sish trayektoriyasini belgilash bilan bog‘liq tizim sifatida ko‘rish zarurligini ilgari surdi. Shu bilan birga, ishchi guruhda baholash jarayonida KPI, ichki monitoring, portfolio, SWOT tahlil va feedbackning qaysi maqsadga ko‘proq xizmat qilishi bo‘yicha turli yondashuvlar bildirildi.

**Savol:** Quyidagi mulohazalarning **to‘g‘ri** yoki **noto‘g‘ri** ekanligini aniqlang.

**1.** Inson resurslari faoliyatini baholash pedagogning kasbiy kompetensiyalari, mehnat samaradorligi va maktab strategik maqsadlariga mosligini aniqlashga xizmat qiluvchi tizimli jarayon bo‘lib, u nazorat bilan birga rivojlantiruvchi va motivatsion funksiyalarni ham bajaradi.
**To‘g‘ri / Noto‘g‘ri**

**2.** Dars kuzatuvi konsultativ-metodik yordam va refleksiv suhbat bilan bog‘langan taqdirda samaraliroq bo‘lishi mumkin, biroq baholash tizimining boshqaruv aniqligi nuqtai nazaridan uning markaziy vazifasi, avvalo, pedagog faoliyatidagi og‘ishlarni qayd etish va ular bo‘yicha ma’muriy xulosa chiqarishga xizmat qilishdir.
**To‘g‘ri / Noto‘g‘ri**

**3.** Portfolio, KPI, ichki monitoring va SWOT tahlil natijalari pedagogning kuchli hamda rivojlantirilishi lozim bo‘lgan jihatlarini aniqlashda foydali bo‘lishi mumkin, biroq ularning asosiy amaliy qiymati ko‘proq attestatsiya va yakuniy reytinglash uchun dalillarni jamlash bilan belgilanadi, individual rivojlanish trayektoriyasini tuzish esa ikkilamchi vazifa hisoblanadi.
**To‘g‘ri / Noto‘g‘ri**`,
      options: [
        "1-Noto‘g‘ri, 2-Noto‘g‘ri, 3-To‘g‘ri",
        "1-To‘g‘ri, 2-Noto‘g‘ri, 3-Noto‘g‘ri",
        "1-To‘g‘ri, 2-To‘g‘ri, 3-Noto‘g‘ri",
        "1-To‘g‘ri, 2-Noto‘g‘ri, 3-To‘g‘ri",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-c2",
      question: `**Vaziyat:**
374-sonli umumiy o‘rta ta’lim maktabida pedagog xodimlar faoliyatini baholash tizimi bo‘yicha ichki tahlil o‘tkazildi. Tahlil natijasida ayrim o‘qituvchilar o‘quvchilar natijalari bo‘yicha yuqori ko‘rsatkichlarga ega bo‘lsa-da, dars kuzatuvlarida metodik uyg‘unlik, baholashning xolisligi va konstruktiv qayta aloqaning yetarli emasligi kuzatildi. Boshqa bir guruh pedagoglarda esa dars jarayoni puxta tashkil etilgan, portfolio materiallari tartibli, refleksiv tahlillar mazmunli bo‘lsa-da, bu yondashuv o‘quvchilar natijalaridagi o‘sish bilan barcha hollarda bir xil darajada aks etmayotgani ma’lum bo‘ldi. Shu sabab direktor baholash tizimini faqat yakuniy natija yoki alohida hujjatlar asosida emas, balki bir nechta manbalarni o‘zaro bog‘lagan holda ko‘rish zarurligini muhokamaga olib chiqdi. Ishchi guruh a’zolari orasida ayrimlar KPIni markaziy mezon deb bilsa, boshqalar portfolio, ichki monitoring, SWOT tahlil va rivojlantiruvchi feedbackni birgalikda qo‘llash lozimligini ta’kidladi. Direktor endi qaysi yondashuvlar pedagog xodimlar faoliyatini baholashning strategik va rivojlantiruvchi modeliga ko‘proq mos kelishini aniqlamoqchi.

**Savol:**
Ushbu vaziyatdan kelib chiqib, pedagog xodimlar faoliyatini baholashda **qaysi yondashuvlar eng maqbul** hisoblanadi? (**4 ta javob to‘g‘ri**)

1.Baholash tizimida ko‘p manbali dalillardan foydalanish muhim bo‘lsa-da, yakuniy xulosani shakllantirishda asosiy og‘irlikni o‘quvchilar natijalari va umumiy reyting ko‘rsatkichlariga qaratish boshqaruv jihatidan aniqroq natija beradi.
2.Baholashni pedagogning kasbiy kompetensiyasi, mehnat samaradorligi va maktab strategik maqsadlariga mosligini aniqlovchi tizimli boshqaruv vositasi sifatida tashkil etish.
3.Portfolio, ichki monitoring va dars kuzatuvi o‘zaro bog‘liq manbalar bo‘lishi mumkin, biroq ularning roli ko‘proq attestatsiya va ma’muriy xulosalarni asoslash doirasida aniqroq namoyon bo‘ladi.
4.Dars kuzatuvini konsultativ-metodik yordam vositasi sifatida yo‘lga qo‘yib, kuzatuvdan keyingi suhbatni konstruktiv feedback va refleksiv tahlil bilan bog‘lash.
5.KPI tizimidan o‘qituvchining strategik maqsadlarga qo‘shayotgan hissasini ko‘rsatish, rag‘batlantirish va rivojlanish yo‘nalishlarini aniqlash vositasi sifatida foydalanish.
6.Portfolio, ichki monitoring va SWOT tahlil natijalaridan pedagogning kuchli va kuchsiz tomonlarini aniqlash, keyingi individual rivojlanish trayektoriyasini belgilash uchun foydalanish.`,
      options: [
        "2, 3, 4",
        "2, 4, 5, 6",
        "1, 3, 5",
        "1, 2, 4, 5",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-c3",
      question: `**Vaziyat:**
352-sonli umumiy o‘rta ta’lim maktabida direktor pedagog xodimlar faoliyatini baholash tizimini qayta ko‘rib chiqish bo‘yicha ishchi guruh tuzdi. Ichki monitoring natijalari shuni ko‘rsatdiki, ayrim o‘qituvchilar o‘quvchilar o‘zlashtirishida ijobiy dinamikani namoyon qilayotgan bo‘lsa-da, dars kuzatuvlarida metodik muvofiqlik, baholashning xolisligi va o‘quvchi markazlashuvi bo‘yicha ayrim kamchiliklar mavjud. Boshqa bir guruh pedagoglarda esa dars jarayoni metodik jihatdan kuchli tashkil etilgan, portfoliolarida ilmiy-metodik ishlari, dars ishlanmalari va refleksiv xulosalari yetarli darajada shakllangan, ammo bu ko‘rsatkichlar o‘quvchilar natijalaridagi barqaror o‘sish bilan hamma vaqt ham to‘liq mos kelmayapti. Shu sabab rahbariyat baholash tizimida qaysi komponent ustuvor bo‘lishi kerakligi borasida ikkilanib qoldi: ayrimlar KPI ko‘rsatkichlarini markaziy mezon deb bilsa, boshqalar dars kuzatuvi va portfolio tahlilini hal qiluvchi omil sifatida ilgari surdi. Direktor esa baholashni bir tomonlama nazorat yoki formal reyting emas, balki boshqaruv qarorlari, individual rivojlanish trayektoriyasi va jamoadagi motivatsion muhit bilan bog‘liq tizim sifatida tashkil etish lozimligini tushunib yetmoqda.

**Savol:**
Ushbu vaziyatdan kelib chiqib, pedagog xodimlar faoliyatini baholashning **eng to‘g‘ri** yondashuvi qaysi variantda ifodalangan?

A) Pedagog faoliyatini baholashda turli manbalardan foydalanish xolislikni oshiradi, ayniqsa dars kuzatuvi va portfolio bilan KPI ko‘rsatkichlarini bog‘lash foydali, biroq baholashning real samarasi ko‘proq yuqori natija ko‘rsatayotgan xodimlarni rag‘batlantirish va past ko‘rsatkichli xodimlarga nisbatan differensial boshqaruv qarorlarini belgilashda namoyon bo‘ladi.
B) Pedagog faoliyatini baholashda o‘quvchilar natijalari, dars sifati, portfoliodagi dalillar va ichki monitoring ma’lumotlarini uyg‘un ko‘rib chiqish muhim, biroq amaliy boshqaruv nuqtai nazaridan baholash tizimining markaziy vazifasi xodimlar faoliyatidagi farqlarni aniq reytinglash va ularga nisbatan ma’muriy choralarni asoslash bilan belgilanadi.
C) Pedagog faoliyatini baholashda o‘quvchilar natijalari, dars kuzatuvi, portfolio, KPI ko‘rsatkichlari va refleksiv tahlillar bir-birini to‘ldiruvchi dalillar sifatida ko‘rilishi kerak; baholash esa xodimning strategik maqsadlarga mosligini aniqlash, rivojlanish ehtiyojlarini belgilash va konstruktiv teskari aloqa berishga xizmat qiluvchi tizimli jarayon bo‘lishi lozim.
D) Pedagog faoliyatini baholash ko‘p mezonli yondashuv asosida qurilishi, o‘quvchilar natijalari, dars sifati va metodik faollik bilan bog‘lanishi zarur, shuningdek u rivojlantirish vazifasini ham bajarishi mumkin, ammo boshqaruv amaliyotida uning asosiy yuklamasi mehnat samaradorligi bo‘yicha ishonchli xulosa chiqarish va attestatsiya hamda rag‘batlantirish uchun dalil bazasini shakllantirishga qaratiladi.`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 2,
    },

    {
      id: "m4t4-c4",
      question: `**Vaziyat:**
366-sonli umumiy o‘rta ta’lim maktabida pedagog xodimlar faoliyatini baholash tizimi bo‘yicha ichki muhokama o‘tkazildi. Muhokama davomida ayrim o‘qituvchilar o‘quvchilar natijalari bo‘yicha ijobiy ko‘rsatkichlarga ega ekani, biroq dars kuzatuvlarida metodik muvofiqlik, baholashning aniqligi va o‘quvchi faolligini ta’minlash bilan bog‘liq kamchiliklar uchrayotgani ma’lum bo‘ldi. Boshqa bir guruh pedagoglarda esa aksincha, dars jarayoni puxta tashkil etilgan, portfolio materiallari mazmunli va refleksiv tahlillar yetarli darajada shakllangan, lekin bu holat hamma vaqt ham o‘quvchilar natijalaridagi sezilarli o‘sish bilan bir xil darajada namoyon bo‘lmayapti. Direktor ilgari baholashni ko‘proq ma’muriy va intizomiy qarorlar uchun asos deb bilgan bo‘lsa, endi uni rivojlantiruvchi, motivatsion va axborot beruvchi funksiyalar bilan uyg‘unlashtirish zarurligini tushunib yetmoqda. Shu bilan birga, ishchi guruh baholash jarayonida qaysi mexanizmlar strategik jihatdan ko‘proq to‘g‘ri ekanini aniqlamoqchi.

**Savol:**
Ushbu vaziyatdan kelib chiqib, pedagog xodimlar faoliyatini baholashda **qaysi yondashuvlar eng maqbul** hisoblanadi? (**3 ta javob to‘g‘ri**)

1.Baholash tizimida o‘quvchilar natijalari va dars sifati birgalikda ko‘rilishi mumkin, biroq boshqaruv aniqligi uchun umumiy xulosani, asosan, miqdoriy ko‘rsatkichlar markazida shakllantirish maqsadga muvofiq.
2.Baholashni xodimning kasbiy kompetensiyalari, mehnat samaradorligi va maktab strategik maqsadlariga mosligi bilan bog‘langan tizimli boshqaruv vositasi sifatida tashkil etish.
3.Portfolio, dars kuzatuvi va KPI ko‘rsatkichlarini birlashtirish foydali bo‘lsa-da, xolislikni saqlash uchun yakuniy bahoda o‘qituvchining refleksiv tahlillaridan ko‘ra tashqi kuzatuv ma’lumotlariga ko‘proq tayangan ma’qul.
4.Dars kuzatuvini nazorat vositasi emas, konsultativ-metodik yordamga yo‘naltirilgan jarayon sifatida tashkil etish va kuzatuvdan keyingi suhbatni konstruktiv teskari aloqa bilan bog‘lash.
5.Baholash natijalaridan individual rivojlanish trayektoriyasini belgilash, metodik yordamni yo‘naltirish va rag‘batlantirish mexanizmlarini asoslash uchun foydalanish.
6.360 darajali baholash va o‘z-o‘zini baholash usullari foydali bo‘lishi mumkin, biroq ularni asosiy baholash tizimidan ko‘ra qo‘shimcha motivatsion vosita darajasida cheklanganroq qo‘llash maqsadga muvofiq.`,
      options: [
        "2, 4, 5, 6",
        "2, 4, 5",
        "1, 2, 3, 5",
        "1, 3, 6",
      ],
      correctAnswer: 1,
    },

    {
      id: "m4t4-c5",
      question: `**Vaziyat:**
341-sonli umumiy o‘rta ta’lim maktabida direktor pedagog xodimlar faoliyatini baholash tizimini qayta ko‘rib chiqishga kirishdi. So‘nggi chorak yakunida ayrim o‘qituvchilar o‘quvchilar natijalari bo‘yicha ijobiy ko‘rsatkichlarga ega bo‘lgan bo‘lsa-da, dars kuzatuvlarida metodik yondashuv, baholash va o‘quvchi faolligini ta’minlash bilan bog‘liq muammolar kuzatildi. Boshqa bir guruh pedagoglarda esa aksincha, dars jarayoni metodik jihatdan puxta tashkil etilgan bo‘lsa-da, o‘quvchilar natijalarida barqaror yuqori o‘sish qayd etilmadi. Direktor ilgari baholashni ko‘proq nazorat va intizomiy xulosa chiqarish vositasi sifatida ko‘rib kelgan edi. Biroq ichki monitoring, portfolio tahlili va darsdan keyingi suhbatlar natijasida baholash jarayoni xodimning shaxsiga emas, uning kasbiy faoliyati, rivojlanish ehtiyojlari va maktabning strategik maqsadlari bilan uyg‘un holda olib borilishi zarurligi ayon bo‘ldi. Shu bilan birga, jamoada baholashning ma’muriy, motivatsion, axborot beruvchi va rivojlantiruvchi funksiyalari o‘rtasidagi nisbat haqida turli qarashlar mavjud edi. Direktor endi inson resurslari faoliyatini baholashda qaysi yondashuv eng to‘g‘ri ekanini aniqlamoqchi.

**Savol:**
Ushbu vaziyatdan kelib chiqib, inson resurslari faoliyatini baholashning **eng to‘g‘ri** yondashuvi qaysi variantda berilgan?

A) Baholash xodim faoliyatining ma’muriy va tashkiliy natijalarini aniqlash bilan birga, uning kasbiy ehtiyojlari va rivojlanish yo‘nalishlarini ko‘rsatishi mumkin, biroq maktab boshqaruvida baholashning asosiy vazifasi, avvalo, nazorat, intizom va mehnat natijasini qayd etish bilan belgilanadi.
B) Baholash xodimning kasbiy faoliyatini ko‘p mezonli asosda tahlil qilishga imkon beradi, ayniqsa dars kuzatuvi, portfolio va monitoring natijalari muhim ahamiyat kasb etadi, biroq bu jarayonning asosiy samarasi ko‘proq yuqori va past natijali xodimlarni bir-biridan aniq ajratish hamda ularga nisbatan mos boshqaruv choralarini belgilashda namoyon bo‘ladi.
C) Baholash xodimning kasbiy kompetensiyalari, mehnat samaradorligi va shaxsiy sifatlarini belgilangan mezonlar hamda maktab strategik maqsadlari bilan bog‘liq holda aniqlashga xizmat qiladi; u nazoratdan tashqari axborot berish, motivatsiya va rivojlantirish vazifalarini ham birlashtiruvchi tizimli boshqaruv vositasi hisoblanadi.
D) Baholash xodim faoliyatini strategik maqsadlar bilan uyg‘un holda ko‘rishga yordam beradi, bunda kasbiy natijalar, dars sifati va portfoliodagi dalillar muhimdir, shuningdek u rivojlanishga xizmat qilishi mumkin, ammo amaliy jihatdan uning markazida mehnat samaradorligi bo‘yicha aniq xulosa chiqarish va boshqaruv qarorlarini asoslash turadi.`,
      options: ["A", "B", "C", "D"],
      correctAnswer: 2,
    },
  ],
};

export default m4t4;
