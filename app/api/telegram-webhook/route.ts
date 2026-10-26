// app/api/telegram-webhook/route.ts
import { NextResponse } from 'next/server'

// Foydalanuvchilar holatini saqlash uchun (Vercel KV yoki oddiy xotira)
// Hozircha oddiy Map ishlatamiz (Server qayta ishga tushsa o'chib ketadi, lekin test uchun yetarli)
const approvedUsers = new Map<string, boolean>()

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body.callback_query) {
      const { data, message, id } = body.callback_query
      const chatId = message.chat.id
      const messageId = message.message_id
      const botToken = process.env.TELEGRAM_BOT_TOKEN

      if (data.startsWith('approve_')) {
        const userId = data.replace('approve_', '')
        
        // Foydalanuvchini tasdiqlanganlar ro'yxatiga qo'shamiz
        approvedUsers.set(userId, true)

        // Adminga javob qaytaramiz (Tasdiqlandi)
        await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            callback_query_id: id,
            text: "✅ To'lov tasdiqlandi! Foydalanuvchi slayd yaratishi mumkin."
          })
        })

        // Rasm tagidagi yozuvni o'zgartiramiz
        await fetch(`https://api.telegram.org/bot${botToken}/editMessageCaption`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            message_id: messageId,
            caption: message.caption + "\n\n✅ **TASDIQLANDI**"
          })
        })
      }

      if (data.startsWith('reject_')) {
        const userId = data.replace('reject_', '')
        approvedUsers.set(userId, false)
        
        await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            callback_query_id: id,
            text: "❌ To'lov rad etildi."
          })
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false })
  }
}

// Foydalanuvchi tasdiqlanganini tekshirish uchun alohida funksiya
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')
  if (!userId) return NextResponse.json({ isApproved: false })
  
  const isApproved = approvedUsers.get(userId) === true
  return NextResponse.json({ isApproved })
}
