// Mavzuga qarab Me'yoriy hujjatlarni tanlash
function getLegalDocuments(topic: string): string[] {
  const t = topic.toLowerCase()
  
  // Agar mavzu KPI, direktor yoki baholash haqida bo'lsa
  if (t.includes('kpi') || t.includes('direktor') || t.includes('baholash') || t.includes('samaradorlik')) {
    return [
      "O'zbekiston Respublikasining “Ta'lim to'g'risida”gi Qonuni (2020-yil 23-sentabr, O'RQ-637-son) [citation:2].",
      "O'zbekiston Respublikasi Prezidentining 2022-yil 11-maydagi “2022-2026-yillarda maktab ta'limini rivojlantirish bo'yicha milliy dasturni tasdiqlash to'g'risida”gi PF-134-son Farmoni [citation:10].",
      "Vazirlar Mahkamasining 2025-yil 21-oktabrdagi 662-son qarori (Maktab direktori va o'rinbosarlariga KPI bo'yicha ustama to'lash tartibi) [citation:4].",
      "Maktabgacha va maktab ta'limi vazirligining 2025-yil 30-dekabrdagi 478-son buyrug'i (KPI baholash metodikasi) [citation:8]."
    ]
  }
  
  // Boshqa mavzular uchun umumiy qonunlar
  return [
    "O'zbekiston Respublikasi Konstitutsiyasi.",
    "O'zbekiston Respublikasining “Ta'lim to'g'risida”gi Qonuni (2020-yil 23-sentabr, O'RQ-637-son) [citation:2].",
    "O'zbekiston Respublikasi Prezidentining ta'lim sohasidagi Farmonlari va Qarorlari."
  ]
}

// Mavzuga qarab Adabiyotlarni tanlash (2 ta mahalliy, 2 ta xorijiy)
function getLiterature(topic: string): string[] {
  const t = topic.toLowerCase()
  
  if (t.includes('kpi') || t.includes('direktor') || t.includes('baholash') || t.includes('samaradorlik')) {
    return [
      "Mahalliy: O'zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Ta'lim sifatini nazorat qilish davlat inspeksiyasi materiallari.",
      "Mahalliy: Maktabgacha va maktab ta'limi vazirligining KPI baholash bo'yicha metodik qo'llanmalari [citation:8].",
      "Xorijiy: OECD. “Improving School Leadership” (Maktab yetakchiligini yaxshilash). OECD Publishing, 2008.",
      "Xorijiy: Pont, B., Nusche, D., & Moorman, H. “School Leadership Development” (Maktab yetakchiligini rivojlantirish). OECD, 2008."
    ]
  }
  
  return [
    "Mahalliy: O'zbekiston Respublikasi “Ta'lim to'g'risida”gi Qonun sharhlari.",
    "Mahalliy: Ta'lim menejmenti bo'yicha o'quv qo'llanmalar.",
    "Xorijiy: OECD. “New School Management Approaches”. OECD Publishing, 2001.",
    "Xorijiy: Xalqaro ta'lim boshqaruvi jurnallari (International Journal of Educational Management)."
  ]
}
