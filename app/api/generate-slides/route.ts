// app/api/generate-slides/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { topic, author, group } = await req.json()

    if (!topic) {
      return NextResponse.json({ error: "Mavzu kiritilmadi" }, { status: 400 })
    }

    // 🧠 BUYRUQ (PROMPT) TO'LIQ YANGILANDI - Batafsil yozish uchun
    const prompt = `
      Siz professional taqdimot (slayd) yaratuvchi tizimsiz.
      Foydalanuvchi quyidagi mavzuni kiritdi: "${topic}".
      
      Menga aynan 12 ta slayd uchun ma'lumotlarni FAQAT JSON formatida qaytaring.
      Javobingizda "slides" degan massiv (array) bo'lishi shart.
      
      MUHIM QOIDA: Matnlarni juda batafsil yozing! Hech bo'lmaganda har bir slaydga 3-4 tadan to'liq gaplar kiriting. Ro'yxatlar (bullets) kamida 4-5 ta banddan iborat bo'lsin.
      
      JSON formati:
      {
        "designOptions": [
          { "name": "Klassik ko'k", "primary": "#1e3a8a", "secondary": "#eff6ff", "accent": "#3b82f6", "textColor": "#1e293b" },
          { "name": "Zamonaviy yashil", "primary": "#065f46", "secondary": "#f0fdf4", "accent": "#22c55e", "textColor": "#064e3b" },
          { "name": "Tarixiy jigarrang", "primary": "#78350f", "secondary": "#fef3c7", "accent": "#d97706", "textColor": "#451a03" }
        ],
        "slides": [
          { 
            "type": "title", 
            "title": "${topic}", 
            "content": "" 
          },
          { 
            "type": "relevance", 
            "title": "Mavzuning dolzarbligi", 
            "content": "Bu yerga mavzuning nega muhimligi haqida 4-5 ta gapdan iborat juda batafsil va ilmiy asoslangan matn yozing. Jamiyat, ta'lim tizimi va davlat siyosati uchun ahamiyatini yoritib bering." 
          },
          { 
            "type": "legal", 
            "title": "Me'yoriy-huquqiy hujjatlar", 
            "bullets": [
              "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi Qonuni (2020-yil).",
              "Prezidentning ta'lim sohasidagi Farmonlari va Qarorlari.",
              "Vazirlar Mahkamasining tegishli qarorlari.",
              "Xalqaro standartlar va tavsiyalar (UNESCO, OECD).",
              "Sohaga oid ichki nizom va yo'riqnomalar."
            ] 
          },
          { 
            "type": "literature", 
            "title": "Foydalanilgan adabiyotlar", 
            "bullets": [
              "Mahalliy mualliflarning ilmiy maqolalari va darsliklari.",
              "Davlat statistika qo'mitasining hisobotlari.",
              "Xorijiy mualliflarning monografiyalari.",
              "Xalqaro konferensiyalar to'plamlari.",
              "Internet manbalari va elektron qo'llanmalar."
            ] 
          },
          { 
            "type": "goal", 
            "title": "Mavzuning maqsadi", 
            "content": "Ushbu taqdimotning asosiy maqsadi - mavzuga oid mavjud muammolarni har tomonlama tahlil qilish, ilg'or xorijiy tajribalarni o'rganish asosida amaldagi holatni yaxshilash bo'yicha aniq va samarali takliflar ishlab chiqishdan iborat." 
          },
          { 
            "type": "tasks", 
            "title": "Vazifalar", 
            "bullets": [
              "Mavzuga oid nazariy manbalar va ilmiy adabiyotlarni chuqur o'rganish.",
              "Sohadagi mavjud muammolarni aniqlash va ularni tizimlashtirish.",
              "Rivojlangan xorijiy davlatlarning ilg'or tajribalarini tahlil qilish.",
              "O'zbekiston sharoitiga mos keladigan amaliy yechimlarni taklif qilish.",
              "Takliflarni amalga oshirishning aniq chora-tadbirlar rejasini tuzish."
            ] 
          },
          { 
            "type": "foreign", 
            "title": "Xorijiy tajribalar", 
            "foreignData": [
              {"country": "Finlandiya", "flag": "🇫🇮", "text": "Ta'lim tizimida pedagoglarning kasbiy salohiyatini oshirishga va mustaqil qaror qabul qilishiga katta e'tibor qaratiladi. Resurslardan oqilona foydalanish orqali yuqori natijalarga erishilgan."}, 
              {"country": "Singapur", "flag": "🇸🇬", "text": "Boshqaruvda moliyaviy rejalashtirish va resurslarni to'g'ri taqsimlash vakolatlari rahbarlarga berilgan. Raqamli texnologiyalar jarayonlarga chuqur integratsiya qilingan."},
              {"country": "Yaponiya", "flag": "🇯🇵", "text": "Raqamli texnologiyalarni joriy etish hamda uzluksiz monitoring qilish tizimi yo'lga qo'yilgan. Har bir xodimning mas'uliyati aniq belgilangan."}
            ] 
          },
          { 
            "type": "comparison", 
            "title": "Qiyosiy tahlil", 
            "tableData": { 
              "headers": ["Amaldagi holat (O'zbekistonda)", "Amaldagi holat (Xorijda)", "Taklif"], 
              "rows": [
                ["Tizimli yondashuv yetarli emas.", "Finlandiyada tizimli va amaliy yondashuv kuchli.", "Individual rivojlanish rejasini ishlab chiqish."],
                ["Moliyaviy resurslar cheklangan.", "Singapurda moliyaviy rejalashtirish erkin.", "Xarajatlarni ustuvor yo'nalishlar asosida rejalashtirish."],
                ["Raqamli integratsiya to'liq emas.", "Yaponiyada yagona raqamli monitoring tizimi bor.", "Yagona elektron monitoring tizimini yo'lga qo'yish."]
              ] 
            } 
          },
          { 
            "type": "conclusion", 
            "title": "Xulosa", 
            "content": "O'tkazilgan tahlillar va o'rganilgan xorijiy tajribalar asosida shuni xulosa qilish mumkinki, mavjud muammolarni hal qilish uchun tizimli yondashuv talab etiladi. Buning uchun inson kapitalini rivojlantirish, moddiy-texnik bazani yangilash va raqamli texnologiyalarni keng joriy etish zarur." 
          },
          { 
            "type": "proposal", 
            "title": "Takliflar", 
            "bullets": [
              "Sohadagi mavjud resurslarni xatlovdan o'tkazish va yillik rivojlanish strategiyasini ishlab chiqish.",
              "Xodimlar malakasini oshirishning yangicha, amaliyotga yo'naltirilgan tizimini joriy etish.",
              "Ortiqcha va samarasiz xarajatlarni qisqartirish, qo'shimcha grantlarni jalb qilish.",
              "Boshqaruv va ta'lim jarayoniga zamonaviy raqamli texnologiyalarni keng joriy etish."
            ] 
          },
          { 
            "type": "action_plan", 
            "title": "Chora-tadbirlar dasturi", 
            "tableData": { 
              "headers": ["№", "Muammo", "Amalga oshirish mexanizmi", "Mas'ullar", "Muddati", "Natija"], 
              "rows": [
                ["1", "Resurslardan to'liq foydalanilmagan.", "Resurslarni tahlil qilish, mentor biriktirish, monitoring qilish.", "Direktor, O'quv bo'yicha o'rinbosar", "2026-yil noyabr", "Ustuvor yo'nalishlar belgilanadi."],
                ["2", "Moliyaviy resurslar yetarli emas.", "Xarajatlarni optimallashtirish, grant va homiylik jalb qilish.", "Direktor, Buxgalter", "2026-yil noyabrdan", "Samarasiz xarajatlar qisqaradi."],
                ["3", "Raqamli texnologiyalar sust.", "Elektron hujjat aylanishi va monitoring tizimini yo'lga qo'yish.", "Direktor, IT mutaxassisi", "Har chorakda", "Boshqaruv qarorlari tezlashadi."]
              ] 
            } 
          },
          { 
            "type": "final", 
            "title": "E'tiboringiz uchun rahmat!", 
            "content": "" 
          }
        ]
      }
    `

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b", 
        messages: [
          { role: "system", content: "Siz faqat toza JSON qaytaradigan yordamchisiz. Berilgan shablon bo'yicha to'liq va batafsil ma'lumot yozishingiz shart." },
          { role: "user", content: prompt }
        ],
        temperature: 0.6,
        response_format: { type: "json_object" }
      })
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error("GROQ XATOSI:", data)
      throw new Error(data.error?.message || "AI xatolik berdi")
    }

    const generatedText = data.choices[0].message.content
    const cleanJson = generatedText.replace(/```json/g, '').replace(/```/g, '').trim()
    const parsedData = JSON.parse(cleanJson)

    const slidesArray = (parsedData.slides && Array.isArray(parsedData.slides)) ? parsedData.slides : []
    const designOptions = parsedData.designOptions || [
      { name: "Klassik ko'k", primary: "#1e3a8a", secondary: "#eff6ff", accent: "#3b82f6", textColor: "#1e293b" }
    ]

    const finalPresentation = {
      id: crypto.randomUUID(),
      topic,
      author,
      group,
      year: '2026',
      city: 'TOSHKENT',
      designOptions: designOptions, // 🎨 Dizayn variantlari
      slides: slidesArray.map((s: any, i: number) => ({
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
