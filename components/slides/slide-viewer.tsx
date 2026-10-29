// components/slides/slide-viewer.tsx
'use client'
import { useState } from 'react'
import { Download } from 'lucide-react' // 🎨 Yuklab olish ikonkasi
import type { PresentationData } from './slide-types'
import { PALETTES } from './slide-types' // 🎨 50 ta palitra
import { TitleSlide, ContentSlide } from './slide-renderer'

export default function SlideViewer({ data, onBack }: { data: PresentationData, onBack: () => void }) {
  const [current, setCurrent] = useState(0)
  // Standart dizayn - birinchi palitra
  const [activeDesign, setActiveDesign] = useState(PALETTES[0])
  // 🎨 Yuklab olish holati
  const [isDownloading, setIsDownloading] = useState(false)
  
  const slide = data.slides[current]

  // 🎨 PPTX YUKLAB OLISH FUNKSIYASI
  const handleDownloadPPTX = async () => {
    setIsDownloading(true)
    try {
      const res = await fetch('/api/download-pptx', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slides: data.slides, topic: data.topic })
      })
      
      if (!res.ok) throw new Error("Yuklab olishda xatolik")
      
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${data.topic || 'Taqdimot'}.pptx`
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (error) {
      alert("Faylni yuklab olishda xatolik yuz berdi")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="flex flex-col gap-4 h-[90vh] p-4 bg-slate-100">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
        <button onClick={onBack} className="text-sm font-bold text-blue-600">← Yangi yaratish</button>
        
        <p className="text-sm font-bold">{data.topic}</p>
        
        {/* 🎨 O'NG TOMON: Hisoblagich va Yuklab olish tugmasi */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-200 px-3 py-1 rounded-full text-xs font-bold">{current + 1} / {data.slides.length}</div>
          
          <button 
            onClick={handleDownloadPPTX} 
            disabled={isDownloading}
            className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            <Download size={14} />
            {isDownloading ? "Yuklanmoqda..." : "PPTX yuklash"}
          </button>
        </div>
      </div>

      {/* 🎨 DIZAYN TANLASH QISMI (50 ta rang) */}
      <div className="bg-white p-2 rounded-xl shadow-sm">
        <p className="text-[10px] font-black text-slate-400 mb-2 px-2 uppercase tracking-wider">Dizaynni tanlang:</p>
        <div className="flex gap-2 overflow-x-auto pb-2 px-2 custom-scrollbar">
          {PALETTES.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDesign(opt)}
              className={`shrink-0 w-10 h-10 rounded-full border-4 transition-all flex items-center justify-center ${
                activeDesign.name === opt.name ? 'border-blue-600 scale-110 shadow-md' : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: opt.primary }}
              title={opt.name}
            >
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: opt.accent }} />
            </button>
          ))}
        </div>
      </div>

      {/* Slayd ekrani */}
      <div className="flex-1 overflow-hidden rounded-2xl shadow-2xl bg-white aspect-video mx-auto w-full max-w-5xl">
        {slide.type === 'title' ? (
          <TitleSlide data={{ ...data, design: activeDesign }} />
        ) : (
          <ContentSlide slide={slide} design={activeDesign} />
        )}
      </div>

      {/* Navigatsiya */}
      <div className="flex justify-center gap-4">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} className="rounded-xl border bg-white px-6 py-2 font-bold disabled:opacity-50">← Oldingi</button>
        <button onClick={() => setCurrent(c => Math.min(data.slides.length - 1, c + 1))} disabled={current === data.slides.length - 1} className="rounded-xl bg-blue-600 px-6 py-2 font-bold text-white disabled:opacity-50">Keyingi →</button>
      </div>
    </section>
  )
}
