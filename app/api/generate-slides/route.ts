// app/api/generate-slides/route.ts
import { NextResponse } from 'next/server'

async function callGroq(apiKey: string, prompt: string) {
  const maxRetries = 3;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            { role: "system", content: "Siz O'zbekiston ta'lim tizimi va qonunchiligini juda yaxshi biladigan mutaxassissiz. Faqat toza JSON formatida javob qaytaring. Hech qachon 'Batafsil matn' deb yozmang, har doim o'zingizdan mazmunli gaplar yozing." },
            { role: "user", content: prompt }
          ],
          temperature: 0.6,
          response_format: { type: "json_object" }
        })
      })
      const data = await response.json()
      if (!response.ok) {
        if (data.error?.code === 'json_validate_failed' || response.status === 400) continue;
        throw new Error(data.error?.message || "AI xatolik berdi")
      }
      return data.choices[0].message.content
    } catch (error: any) {
      if (i === maxRetries - 1) throw error;
    }
  }
  throw new Error("AI javob qaytarishda muvaffaqiyatsiz bo'ldi")
}

export async function POST(req: Request) {
  try {
    const { topic, author, group } = await req.json()
    if (!topic) return NextResponse.json({ error: "Mavzu kiritilmadi" }, { status: 400 })

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) return NextResponse.json({ error: "API kalit topilmadi" }, { status: 500 })

    // 🚨 1-QISM: 1-6 slaydlar (Barcha matnlar tayyor qilib yozilgan)
    const prompt1 = `
      Mavzu: "${topic}".
      1-dan 6-gacha slaydlarni FAQAT JSON formatida qaytaring.
      
      JUDA MUHIM: Shablonga qarab qolmang, mavzuga oid o'zingizdan haqiqiy va batafsil ma'lumot yozing! 
      
      Format:
      {
        "slides": [
          { "type": "title", "title": "${topic}", "content": "" },
          { "type": "relevance", "title": "Mavzuning dolzarbligi", "content": "Hozirgi kunda ushbu mavzu davlat siyosatining ustuvor yo'nalishlaridan biridir. Jamiyat taraqqiyoti va kelajak avlod tarbiyasi bevosita ushbu sohaning qay darajada to'g'ri yo'lga qo'yilganligiga bog'liq." },
          { 
            "type": "legal", 
            "title": "Me'yoriy-huquqiy hujjatlar", 
            "bullets": [
              "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi Qonuni (2020-yil 23-sentabr, O'RQ-637-son).",
              "O'zbekiston Respublikasi Prezidentining 2022-yil 11-maydagi PF-134-son Farmoni.",
              "Vazirlar Mahkamasining 2021-yil 2-fevraldagi 42-son Qarori.",
              "Vazirlar Mahkamasining 2025-yil 21-oktabrdagi 662-son qarori."
            ] 
          },
          { 
            "type": "literature", 
            "title": "Foydalanilgan adabiyotlar", 
            "bullets": [
              "Mahalliy: Qurbonov Sh., Seytaliev O. 'Ta'lim sifatini boshqarish'. Toshkent: Turon-Iqbol, 2006.",
              "Mahalliy: Turg'unov S.T. 'Ta'lim menejmenti asoslari'. Toshkent, 2006.",
              "Xorijiy: Pont B., Nusche D., Moorman H. 'Improving School Leadership'. OECD Publishing, 2008.",
              "Xorijiy: OECD. 'New School Management Approaches'. OECD Publishing, 2001."
            ] 
          },
          { "type": "goal", "title": "Mavzuning maqsadi", "content": "Ushbu taqdimotning asosiy maqsadi - mavzuga oid mavjud muammolarni tahlil qilish va uni yechish bo'yicha amaliy takliflar ishlab chiqishdir." },
          { "type": "tasks", "title": "Vazifalar", "bullets": ["Mavzuga oid nazariy manbalarni o'rganish", "Sohadagi mavjud muammolarni aniqlash", "Xorijiy tajribalarni tahlil qilish", "Amaliy yechimlarni taklif qilish", "Chora-tadbirlar rejasini tuzish"] }
        ]
      }
    `

    // 🚨 2-QISM: 7-12 slaydlar (Qiyosiy tahlil va xorijiy tajribalar to'liq yozilgan)
    const prompt2 = `
      Mavzu: "${topic}".
      7-dan 12-gacha slaydlarni FAQAT JSON formatida qaytaring.
      
      JUDA MUHIM: 7-slaydda va 8-slaydda shunchaki "Batafsil matn" deb yozmang! Har bir katakka haqiqiy, mazmunli va uzun gaplar yozing.
      
      Format:
      {
        "slides": [
          { 
            "type": "foreign", 
            "title": "Xorijiy tajribalar", 
            "foreignData": [
              {"country": "Finlandiya", "flag": "🇫🇮", "text": "Finlandiya ta'lim tizimida boshqaruvning markazlashmaganligi va o'qituvchilarning mustaqilligi muhim o'rin tutadi. Maktab direktorlari o'z resurslarini boshqarishda katta erkinlikka ega."}, 
              {"country": "Singapur", "flag": "🇸🇬", "text": "Singapurda maktablarni boshqarishda moliyaviy rejalashtirish va resurslarni taqsimlash vakolatlari rahbarlarga berilgan. Bu tizim samaradorlikni oshiradi."},
              {"country": "Yaponiya", "flag": "🇯🇵", "text": "Yaponiyada raqamli texnologiyalarni joriy etish va monitoring qilish tizimi juda rivojlangan. Har bir xodimning mas'uliyati aniq belgilangan."}
            ] 
          },
          { 
            "type": "comparison", 
            "title": "Qiyosiy tahlil", 
            "tableData": { 
              "headers": ["Amaldagi holat (O'zbekistonda)", "Amaldagi holat (Xorijiy davlatlarda)", "Taklif"], 
              "rows": [
                [
                  "Rahbarlar malaka oshirish kurslarida bilim oladilar, lekin amaliyotga tatbiq etish sust.", 
                  "Finlandiyada rahbarlar individual rivojlanish rejasiga ega va doimiy amaliyotda bo'ladi.", 
                  "Rahbarlar uchun individual rivojlanish rejasini (IDP) ishlab chiqish va amaliyotga yo'naltirish."
                ], 
                [
                  "Budjet mablag'lari qat'iy taqsimlanadi, lekin moliyaviy mustaqillik yetarli emas.", 
                  "Singapurda maktab rahbarlariga moliyaviy resurslarni boshqarishda keng vakolat berilgan.", 
                  "Xarajatlarni ustuvor yo'nalishlar asosida rejalashtirish va moliyaviy vakolatlarni kengaytirish."
                ], 
                [
                  "Elektron platformalar joriy etilmoqda, lekin yagona tizimga birlashtirilmagan.", 
                  "Yaponiyada barcha maktablar yagona raqamli monitoring tizimiga ulangan.", 
                  "Yagona elektron monitoring tizimini yo'lga qo'yish va xodimlar raqamli savodxonligini oshirish."
                ]
              ] 
            } 
          },
          { "type": "conclusion", "title": "Xulosa", "content": "O'tkazilgan tahlillar asosida shuni xulosa qilish mumkinki, mavjud muammolarni hal qilish uchun tizimli yondashuv talab etiladi. Inson kapitalini rivojlantirish va raqamli texnologiyalarni joriy etish zarur." },
          { "type": "proposal", "title": "Takliflar", "bullets": ["Resurslarni xatlovdan o'tkazish va strategiya ishlab chiqish", "Xodimlar malakasini oshirish tizimini joriy etish", "Ortiqcha xarajatlarni qisqartirish va grantlarni jalb qilish", "Raqamli texnologiyalarni keng joriy etish"] },
          { "type": "action_plan", "title": "Chora-tadbirlar rejasi", "tableData": { "headers": ["№", "Muammo", "Mexanizm", "Mas'ullar", "Muddati", "Natija"], "rows": [["1", "Resurslardan to'liq foydalanilmagan", "Resurslarni tahlil qilish, mentor biriktirish", "Direktor, O'quv bo'yicha o'rinbosar", "2026-yil noyabr", "Ustuvor yo'nalishlar belgilanadi"], ["2", "Moliyaviy resurslar yetarli emas", "Xarajatlarni optimallashtirish, grant jalb qilish", "Direktor, Buxgalter", "2026-yil noyabrdan", "Samarasiz xarajatlar qisqaradi"], ["3", "Raqamli texnologiyalar sust", "Elektron hujjat aylanishi va monitoring tizimini yo'lga qo'yish", "Direktor, IT mutaxassisi", "Har chorakda", "Boshqaruv qarorlari tezlashadi"]] } },
          { "type": "final", "title": "E'tiboringiz uchun rahmat!", "content": "" }
        ]
      }
    `

    const text1 = await callGroq(apiKey, prompt1)
    const text2 = await callGroq(apiKey, prompt2)

    const parsed1 = JSON.parse(text1.replace(/```json/g, '').replace(/```/g, '').trim())
    const parsed2 = JSON.parse(text2.replace(/```json/g, '').replace(/```/g, '').trim())

    const allSlides = [...(parsed1.slides || []), ...(parsed2.slides || [])]

    return NextResponse.json({
      id: crypto.randomUUID(),
      topic, author, group, year: '2026', city: 'TOSHKENT',
      slides: allSlides.map((s: any, i: number) => ({
        id: String(i + 1), ...s,
        imageUrl: s.type === 'title' ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' 
                 : s.type === 'final' ? 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop' : undefined
      }))
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
