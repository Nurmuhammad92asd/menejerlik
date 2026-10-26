// components/slides/slide-generator.ts

// ... (oldingi kodlar)

// Jadval uchun mas'ullarni mavzuga qarab tanlash funksiyasi
function getResponsiblePeople(topic: string): string {
  const t = topic.toLowerCase()
  const people = ['Maktab direktori'] // Direktor doim bo'ladi

  // 1. O'quv va ta'lim masalalari
  if (t.includes('o\'quv') || t.includes('ta\'lim') || t.includes('dars') || t.includes('sifat')) {
    people.push('O\'quv ishlari bo\'yicha direktor o\'rinbosari')
  }

  // 2. Ma'naviyat va tarbiya masalalari
  if (t.includes('tarbiya') || t.includes('ma\'naviy') || t.includes('yosh') || t.includes('tadbir')) {
    people.push('Ma\'naviy-ma\'rifiy ishlar bo\'yicha o\'rinbosar')
  }

  // 3. Moliya va resurslar
  if (t.includes('moliya') || t.includes('budjet') || t.includes('resurs') || t.includes('xarajat')) {
    people.push('Buxgalter', 'Xo\'jalik ishlari bo\'yicha o\'rinbosar')
  }

  // 4. Raqamli texnologiyalar
  if (t.includes('texnologiya') || t.includes('raqamli') || t.includes('kompyuter') || t.includes('axborot')) {
    people.push('Informatika o\'qituvchisi')
  }

  // 5. Maktabgacha ta'lim (Bog'cha) uchun
  if (t.includes('bog\'cha') || t.includes('mtt') || t.includes('maktabgacha')) {
    // Agar bog'cha bo'lsa, "Maktab direktori" ni olib tashlab, o'rniga bog'cha mas'ullarini qo'shamiz
    return 'MTT mudirasi, Katta tarbiyachi, Metodist, Psixolog'
  }

  // Takrorlanuvchilarni olib tashlab, vergul bilan birlashtiramiz
  return [...new Set(people)].join(', ')
}

// ... (12 ta slaydni generatsiya qilish funksiyasi ichida)

    // 11. Chora-tadbirlar jadvali
    {
      id: '11', 
      type: 'action_plan', 
      title: 'Chora-tadbirlar dasturi',
      tableData: {
        headers: ["№", "Muammo", "Amalga oshirish mexanizmi", "Mas'ullar", "Muddati", "Natija"],
        rows: [
          [
            "1", 
            "Resurslardan to'liq foydalanilmagan.", 
            "Resurslarni tahlil qilish, mentor biriktirish.", 
            getResponsiblePeople(topic), // 👈 BU YERDA AVTOMATIK TANLAYDI
            "2026-yil noyabr", 
            "Ustuvor yo'nalishlar belgilanadi."
          ],
          [
            "2", 
            "Moliyaviy resurslar yetarli emas.", 
            "Grant va homiylik jalb qilish.", 
            "Direktor, Buxgalter, Homiy tashkilotlar", // Bu qatorni ham o'zgartirish mumkin
            "2026-yil noyabrdan", 
            "Samarasiz xarajatlar qisqaradi."
          ],
          [
            "3", 
            "Raqamli texnologiyalar sust.", 
            "Elektron monitoring tizimini yo'lga qo'yish.", 
            "Direktor, Informatika o'qituvchisi", 
            "Har chorakda", 
            "Boshqaruv qarorlari tezlashadi."
          ]
        ]
      }
    },
