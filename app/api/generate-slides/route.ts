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
            { role: "system", content: "Siz O'zbekiston Respublikasi qonunchiligini juda yaxshi biladigan ekspertsiz. Faqat toza JSON formatida javob qaytaring." },
            { role: "user", content: prompt }
          ],
          temperature: 0.5,
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

    // 🚨 ANIQ QONUNLAR UCHUN QAT'IY PROMPT
    const prompt1 = `
      Mavzu: "${topic}".
      1-dan 6-gacha slaydlarni FAQAT JSON formatida qaytaring.
      
      MUHIM QOIDA: 3-slaydda (Me'yoriy hujjatlar) albatta O'zbekiston Respublikasining ushbu mavzuga tegishli ANIQ Qonunlari, Prezident Farmonlari va Vazirlar Mahkamasi qarorlarini sanasi va raqami bilan yozing. Umumiy gaplar yozmang!
      4-slaydda 2 ta mahalliy va 2 ta xorijiy ANIQ adabiyotlarni (muallif, kitob nomi, yili) yozing.
      
      Format:
      {
        "designOptions": [
          { "name": "Klassik ko'k", "primary": "#1e3a8a", "secondary": "#eff6ff", "accent": "#3b82f6", "textColor": "#1e293b" },
          { "name": "Zamonaviy yashil", "primary": "#065f46", "secondary": "#f0fdf4", "accent": "#22c55e", "textColor": "#064e3b" },
          { "name": "Tarixiy jigarrang", "primary": "#78350f", "secondary": "#fef3c7", "accent": "#d97706", "textColor": "#451a03" }
        ],
        "slides": [
          { "type": "title", "title": "${topic}", "content": "" },
          { "type": "relevance", "title": "Mavzuning dolzarbligi", "content": "4-5 ta gapdan iborat juda batafsil va ilmiy asoslangan matn..." },
          { 
            "type": "legal", 
            "title": "Me'yoriy-huquqiy hujjatlar", 
            "bullets": [
              "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi Qonuni (2020-yil 23-sentabr, O'RQ-637-son).",
              "O'zbekiston Respublikasi Prezidentining 2022-yil 11-maydagi '2022-2026-yillarda xalq ta'limini rivojlantirish bo'yicha milliy dasturni tasdiqlash to'g'risida'gi PF-134-son Farmoni.",
              "Vazirlar Mahkamasining 2021-yil 2-fevraldagi 'Umumiy o'rta ta'lim muassasalari faoliyatini yanada takomillashtirish chora-tadbirlari to'g'risida'gi 42-son Qarori.",
              "Vazirlar Mahkamasining 2025-yil 21-oktabrdagi 662-son qarori (Rahbarlarni KPI bo'yicha baholash tartibi)."
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
          { "type": "goal", "title": "Mavzuning maqsadi", "content": "Batafsil maqsad matni..." },
          { "type": "tasks", "title": "Vazifalar", "bullets": ["Vazifa 1", "Vazifa 2", "Vazifa 3", "Vazifa 4", "Vazifa 5"] }
        ]
      }
    `

    const prompt2 = `
      Mavzu: "${topic}".
      7-dan 12-gacha slaydlarni FAQAT JSON formatida qaytaring.
      
      Format:
      {
        "slides": [
          { "type": "foreign", "title": "Xorijiy tajribalar", "foreignData": [{"country": "Finlandiya", "flag": "🇫🇮", "text": "Batafsil matn..."}, {"country": "Singapur", "flag": "🇸🇬", "text": "Batafsil matn..."}, {"country": "Yaponiya", "flag": "🇯🇵", "text": "Batafsil matn..."}] },
          { "type": "comparison", "title": "Qiyosiy tahlil", "tableData": { "headers": ["O'zbekiston", "Xorij", "Taklif"], "rows": [["Bizda 1", "Ularda 1", "Taklif 1"], ["Bizda 2", "Ularda 2", "Taklif 2"], ["Bizda 3", "Ularda 3", "Taklif 3"]] } },
          { "type": "conclusion", "title": "Xulosa", "content": "Batafsil xulosa matni..." },
          { "type": "proposal", "title": "Takliflar", "bullets": ["Taklif 1", "Taklif 2", "Taklif 3", "Taklif 4"] },
          { "type": "action_plan", "title": "Chora-tadbirlar rejasi", "tableData": { "headers": ["№", "Muammo", "Mexanizm", "Mas'ullar", "Muddati", "Natija"], "rows": [["1", "Muammo 1", "Yechim 1", "Direktor", "2026-yil", "Natija 1"], ["2", "Muammo 2", "Yechim 2", "Buxgalter", "2026-yil", "Natija 2"]] } },
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
      designOptions: parsed1.designOptions,
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
