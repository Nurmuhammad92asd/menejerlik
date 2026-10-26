// app/api/generate-slides/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { topic, author, group } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Mavzu kiritilmadi" }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY

    // 🧠 1-QISM: 1-dan 6-gacha slaydlar
    const prompt1 = `
      Siz professional taqdimot yaratuvchisiz. Mavzu: "${topic}".
      Menga 1-dan 6-gacha bo'lgan slaydlarni FAQAT JSON formatida qaytaring.
      Matnlarni juda batafsil, 4-5 ta gapdan iborat qilib yozing.
      
      Format:
      {
        "designOptions": [
          { "name": "Klassik ko'k", "primary": "#1e3a8a", "secondary": "#eff6ff", "accent": "#3b82f6", "textColor": "#1e293b" },
          { "name": "Zamonaviy yashil", "primary": "#065f46", "secondary": "#f0fdf4", "accent": "#22c55e", "textColor": "#064e3b" },
          { "name": "Tarixiy jigarrang", "primary": "#78350f", "secondary": "#fef3c7", "accent": "#d97706", "textColor": "#451a03" }
        ],
        "slides": [
          { "type": "title", "title": "${topic}", "content": "" },
          { "type": "relevance", "title": "Mavzuning dolzarbligi", "content": "Batafsil matn (kamida 4 gap)..." },
          { "type": "legal", "title": "Me'yoriy-huquqiy hujjatlar", "bullets": ["Qonun 1", "Farmon 2", "Qaror 3", "Xalqaro standartlar"] },
          { "type": "literature", "title": "Foydalanilgan adabiyotlar", "bullets": ["Mahalliy adabiyot 1", "Mahalliy adabiyot 2", "Xorijiy adabiyot 1", "Xorijiy adabiyot 2"] },
          { "type": "goal", "title": "Mavzuning maqsadi", "content": "Batafsil maqsad matni..." },
          { "type": "tasks", "title": "Vazifalar", "bullets": ["Vazifa 1", "Vazifa 2", "Vazifa 3", "Vazifa 4", "Vazifa 5"] }
        ]
      }
    `

    // 🧠 2-QISM: 7-dan 12-gacha slaydlar
    const prompt2 = `
      Siz professional taqdimot yaratuvchisiz. Mavzu: "${topic}".
      Menga 7-dan 12-gacha bo'lgan slaydlarni FAQAT JSON formatida qaytaring.
      Matnlarni juda batafsil, 4-5 ta gapdan iborat qilib yozing.
      
      Format:
      {
        "slides": [
          { "type": "foreign", "title": "Xorijiy tajribalar", "foreignData": [{"country": "Finlandiya", "flag": "🇫🇮", "text": "Batafsil matn..."}, {"country": "Singapur", "flag": "🇸🇬", "text": "Batafsil matn..."}, {"country": "Yaponiya", "flag": "🇯🇵", "text": "Batafsil matn..."}] },
          { "type": "comparison", "title": "Qiyosiy tahlil", "tableData": { "headers": ["O'zbekiston", "Xorij", "Taklif"], "rows": [["Bizda 1", "Ularda 1", "Taklif 1"], ["Bizda 2", "Ularda 2", "Taklif 2"], ["Bizda 3", "Ularda 3", "Taklif 3"]] } },
          { "type": "conclusion", "title": "Xulosa", "content": "Batafsil xulosa matni..." },
          { "type": "proposal", "title": "Takliflar", "bullets": ["Taklif 1", "Taklif 2", "Taklif 3", "Taklif 4"] },
          { "type": "action_plan", "title": "Chora-tadbirlar rejasi", "tableData": { "headers": ["№", "Muammo", "Mexanizm", "Mas'ullar", "Muddati", "Natija"], "rows": [["1", "Muammo 1", "Yechim 1", "Direktor", "2026-yil", "Natija 1"], ["2", "Muammo 2", "Yechim 2", "Buxgalter", "2026-yil", "Natija 2"], ["3", "Muammo 3", "Yechim 3", "IT mutaxassisi", "2026-yil", "Natija 3"]] } },
          { "type": "final", "title": "E'tiboringiz uchun rahmat!", "content": "" }
        ]
      }
    `

    // 1-so'rovni yuborish
    const res1 = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "system", content: "Faqat toza JSON qaytar." }, { role: "user", content: prompt1 }],
        temperature: 0.6,
        response_format: { type: "json_object" }
      })
    })
    const data1 = await res1.json()
    if (!res1.ok) throw new Error(data1.error?.message || "1-qismda xato")
    const parsed1 = JSON.parse(data1.choices[0].message.content.replace(/```json/g, '').replace(/```/g, '').trim())

    // 2-so'rovni yuborish
    const res2 = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "system", content: "Faqat toza JSON qaytar." }, { role: "user", content: prompt2 }],
        temperature: 0.6,
        response_format: { type: "json_object" }
      })
    })
    const data2 = await res2.json()
    if (!res2.ok) throw new Error(data2.error?.message || "2-qismda xato")
    const parsed2 = JSON.parse(data2.choices[0].message.content.replace(/```json/g, '').replace(/```/g, '').trim())

    // Ikkala qismni birlashtirish
    const allSlides = [...(parsed1.slides || []), ...(parsed2.slides || [])]
    const designOptions = parsed1.designOptions || [
      { name: "Klassik ko'k", primary: "#1e3a8a", secondary: "#eff6ff", accent: "#3b82f6", textColor: "#1e293b" }
    ]

    const finalPresentation = {
      id: crypto.randomUUID(),
      topic,
      author,
      group,
      year: '2026',
      city: 'TOSHKENT',
      designOptions: designOptions,
      slides: allSlides.map((s: any, i: number) => ({
        id: String(i + 1),
        ...s,
        imageUrl: s.type === 'title' ? 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop' 
                 : s.type === 'final' ? 'https://images.unsplash.com/photo-1519832986547-1f5d4bc3ba4c?q=80&w=1000&auto=format&fit=crop' 
                 : undefined
      }))
    }

    return NextResponse.json(finalPresentation)

  } catch (error: any) {
    console.error("AI Error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
