// app/api/payment/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const file = formData.get('screenshot') as File
    const topic = formData.get('topic') as string
    const author = formData.get('author') as string
    const userId = formData.get('userId') as string

    if (!file || !topic || !author) {
      return NextResponse.json({ error: "Ma'lumotlar to'liq emas" }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const adminId = process.env.TELEGRAM_ADMIN_ID

    if (!botToken || !adminId) {
      return NextResponse.json({ error: "Bot sozlanmagan" }, { status: 500 })
    }

    // RASMNI TELEGRAMGA YUBORISH UCHUN ENG SODDA VA ISHONCHLI USUL
    const tgFormData = new FormData()
    tgFormData.append('chat_id', adminId)
    tgFormData.append('photo', file) // Rasmni to'g'ridan-to'g'ri qo'shamiz
    tgFormData.append('caption', `💳 **YANGI TO'LOV (300 000 so'm)**\n\n👤 Muallif: ${author}\n📚 Mavzu: ${topic}\n🆔 User ID: ${userId}\n\nTo'lovni tasdiqlaysizmi?`)

    // Tugmalar
    const inlineKeyboard = {
      inline_keyboard: [
        [
          { text: "✅ Tasdiqlash", callback_data: `approve_${userId}` },
          { text: "❌ Rad etish", callback_data: `reject_${userId}` }
        ]
      ]
    }
    tgFormData.append('reply_markup', JSON.stringify(inlineKeyboard))

    // Telegram API'ga so'rov yuborish
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
      method: 'POST',
      body: tgFormData
    })

    // Agar Telegram xato qaytarsa, aniq xatoni Vercel logiga chiqaramiz
    if (!tgRes.ok) {
      const errorData = await tgRes.json()
      console.error("TELEGRAM API XATOSI:", errorData)
      throw new Error(errorData.description || "Telegramga yuborishda xatolik")
    }

    return NextResponse.json({ success: true, message: "Skrinshot adminga yuborildi." })
    
  } catch (error: any) {
    console.error("SERVER XATOSI:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
