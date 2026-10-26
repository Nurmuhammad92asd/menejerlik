// components/slides/slide-creator.tsx (soddalashtirilgan variant)
'use client'

import { useState } from 'react'
import type { PresentationData } from './slide-types'
// ...

export default function SlideCreator({ onBack }: { onBack: () => void }) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  const [screenshot, setScreenshot] = useState<File | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  
  // Foydalanuvchining vaqtinchalik ID'si (tasdiqlashni kutish uchun)
  const [userId] = useState(() => crypto.randomUUID())

  const handleSubmitPayment = async () => {
    if (!screenshot || !topic || !author) return alert("Barcha maydonlarni to'ldiring va skrinshot yuklang!")
    
    setIsSending(true)
    const formData = new FormData()
    formData.append('screenshot', screenshot)
    formData.append('topic', topic)
    formData.append('author', author)
    formData.append('userId', userId)

    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        body: formData
      })
      if (res.ok) {
        alert("Skrinshot adminga yuborildi. Iltimos, tasdiqlanishini kuting (1-2 daqiqa).")
        // Tasdiqlanishini tekshirish uchun interval qo'yamiz
        checkApproval()
      }
    } catch (error) {
      alert("Xatolik yuz berdi")
    } finally {
      setIsSending(false)
    }
  }

  // Har 3 soniyada admin tasdiqlaganini tekshirib turuvchi funksiya
  const checkApproval = () => {
    const interval = setInterval(async () => {
      const res = await fetch(`/api/check-approval?userId=${userId}`)
      const data = await res.json()
      if (data.isApproved) {
        clearInterval(interval)
        setIsApproved(true)
        alert("✅ Admin to'lovni tasdiqladi! Endi slaydni yaratishingiz mumkin.")
      }
    }, 3000)
  }

  // ... qolgan qism (slaydni yaratish va h.k.)
}
