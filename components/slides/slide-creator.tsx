// components/slides/slide-creator.tsx
'use client'

import { useState } from 'react'
import { generatePresentation } from './slide-generator'
import type { PresentationData } from './slide-types'

export default function SlideCreator({
  onGenerate,
  onBack,
}: {
  onGenerate: (data: PresentationData) => void
  onBack: () => void
}) {
  const [topic, setTopic] = useState('')
  const [author, setAuthor] = useState('')
  const [group, setGroup] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    if (!topic || !author || !group) return
    if (!isPaid) {
      alert("Iltimos, avval 200 000 so'm to'lovni amalga oshiring!")
      return
    }
    
    setIsGenerating(true)
    setTimeout(() => {
      const data = generatePresentation(topic, author, group)
      onGenerate(data)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section className="mx-auto max-w-2xl p-6">
      <button onClick={onBack} className="mb-6 text-sm font-bold text-blue-600">← Orqaga</button>

      <div className="rounded-3xl border bg-card p-8 shadow-xl">
        <h1 className="text-2xl font-black mb-2">🎨 Professional Slayd Yaratish</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Maktab direktorlari va bog'cha mudiralari uchun. Barcha 12 ta slayd avtomatik tayyorlanadi.
        </p>

        <div className="space-y-5">
          <div>
            <label className="text-sm font-bold mb-2 block">Mavzu nomi</label>
            <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Masalan: Maktabni rivojlanishida ichki imkoniyatlardan foydalanish" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Muallif (Ism-familiya)</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Masalan: AMINJONOVA MADINAXON" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Guruh / Kurs</label>
            <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} placeholder="Masalan: Menejerlik 2-kurs" className="w-full rounded-xl border p-3 outline-none focus:border-blue-500" />
          </div>

          <div className={`rounded-xl border-2 p-4 ${isPaid ? 'border-green-500 bg-green-50' : 'border-amber-500 bg-amber-50'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">Tizimdan foydalanish narxi</p>
                <p className="text-xs text-muted-foreground">12 ta slaydni yuklab olish uchun</p>
              </div>
              <p className="text-xl font-black">200 000 so'm</p>
            </div>
            
            {!isPaid ? (
              <button onClick={() => setIsPaid(true)} className="mt-3 w-full rounded-lg bg-amber-500 py-2 text-sm font-bold text-white hover:bg-amber-600">
                💳 To'lov qilish (Payme / Click)
              </button>
            ) : (
              <p className="mt-3 text-center text-sm font-bold text-green-600">✅ To'lov muvaffaqiyatli amalga oshirildi!</p>
            )}
          </div>

          <button
            onClick={handleGenerate}
            disabled={!topic || !author || !group || !isPaid || isGenerating}
            className="w-full rounded-xl bg-blue-600 py-4 text-sm font-black text-white disabled:opacity-50 mt-4"
          >
            {isGenerating ? '⏳ Slaydlar yozilmoqda...' : '✨ Slaydni yaratish'}
          </button>
        </div>
      </div>
    </section>
  )
}
