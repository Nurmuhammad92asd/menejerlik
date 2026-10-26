// app/api/generate-slides/route.ts
import { NextResponse } from 'next/server'

// Yordamchi funksiya: Groq API'ga so'rov yuborish va xato bo'lsa qayta urinish
async function callGroq(apiKey: string, prompt: string) {
  const maxRetries = 3;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            // Groq qoidasi: JSON so'zi albatta promptda bo'lishi shart
            { role: "system", content: "Siz faqat toza JSON formatida javob qaytaradigan yordamchisiz. Javobingizda hech qanday qo'shimcha matn bo'lmasligi kerak." },
            { role: "user", content: prompt }
          ],
          temperature: 0.5, // Har xillikni kamaytirish uchun
          response_format: { type: "json_object" }
        })
      })

      const data = await response.json()
      
      if (!response.ok) {
        console.warn(`Groq xatosi (urinish ${i + 1}/${maxRetries}):`, data.error?.message)
        // Agar xato JSON bilan bog'liq bo'lsa yoki 400 bo'lsa, qayta urinamiz
        if (data.error?.code === 'json_validate_failed' || response.status === 400) {
          continue; // Keyingi urinishga o'tish
        }
        throw new Error(data.error?.message || "AI xatolik berdi")
      }

      return data.choices[0].message.content
    } catch (error: any) {
      if (i === maxRetries - 1) throw error; // Oxirgi urinishda xato bo'lsa, tashlaymiz
      console.log(`Qayta urinilmoqda... (${i + 1})`)
    }
  }
  throw new Error("AI javob qaytarishda muvaffaqiyatsiz bo'ldi")
}

export async function POST(req: Request) {
  try {
    const { topic, author, group } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Mavzu kiritilmadi" }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: "API kalit topilmadi" }, { status: 500 })
    }

    // 1-QISM: 1-6 slaydlar
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

    // 2-QISM: 7-12 slaydlar
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

    // Ikkala qismni ham yuborish (xato bo'lsa qayta urinadi)
    const text1 = await callGroq(apiKey, prompt1)
    const text2 = await callGroq(apiKey, prompt2)

    // JSONni tozalash va o'qish
    const clean1 = text1.replace(/```json/g, '').replace(/```/g, '').trim()
    const clean2 = text2.replace(/```json/g, '').replace(/```/g, '').trim()
    
    const parsed1 = JSON.parse(clean1)
    const parsed2 = JSON.parse(clean2)

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
