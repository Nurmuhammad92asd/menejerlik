// app/api/telegram-webhook/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Telegramdan kelgan xabar (Tugma bosilganda)
    if (body.callback_query) {
      const { data, message } = body.callback_query
      const chatId = message.chat.id
      const messageId = message.message_id
      const botToken = process.env.TELEGRAM_BOT_TOKEN

      if (data.startsWith('approve_')) {
        const userId = data.replace('approve_', '')
        
        // TODO: Bazaga yozish (Hozircha localStorage ishlatamiz, lekin bu xavfli)
        // Foydalanuvchiga ruxsat berilganini bildirish uchun javob qaytaramiz.
        
        // Adminga javob
        await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            callback_query_id: body.callback_query.id,
            text: "✅ To'lov tasdiqlandi! Foydalanuvchi slayd yaratishi mumkin."
          })
        })

        // Xabarni tahrirlash (Tasdiqlandi deb)
        await fetch(`https://api.telegram.org/bot${botToken}/editMessageCaption`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            message_id: messageId,
            caption: message.caption + "\n\n✅ **TASDIQLANDI**"
          })
        })

        // Bu yerda biz userId ni ma'lumotlar bazasiga "isPaid: true" qilib yozishimiz kerak.
        // Hozircha buni localStorage yoki boshqa usulda qilamiz.
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false })
  }
}
