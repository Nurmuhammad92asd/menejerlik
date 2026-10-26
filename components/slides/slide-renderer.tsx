// components/slides/slide-renderer.tsx
'use client'

import type { PresentationData, SlideData } from './slide-types'

export function TitleSlide({ data }: { data: PresentationData }) {
  const d = data.design || { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' }
  
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-white p-10" style={{ color: d.textColor }}>
      {/* Orqa fon rasmi */}
      <div className="absolute inset-0">
        <img src={data.slides[0]?.imageUrl || 'https://images.unsplash.com/photo-1552664730-d307ca884978'} alt="bg" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col items-center bg-white p-2 rounded-full shadow-md">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 bg-white text-center text-[10px] font-bold leading-tight" style={{ borderColor: d.primary, color: d.primary }}>
            ABDULLA<br/>AVLONIY<br/>LOGOTIPI
          </div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center mt-10">
        <h1 className="text-4xl font-black uppercase leading-tight max-w-3xl" style={{ color: d.primary }}>
          {data.topic}
        </h1>
        <div className="mt-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: d.accent }}>
            MENEJERLIK KURSI TINGLOVCHISI:
          </p>
          <h2 className="text-2xl font-black uppercase" style={{ color: d.textColor }}>
            {data.author}
          </h2>
          <p className="text-sm font-bold mt-1 text-slate-500">{data.group}</p>
        </div>
      </div>

      <div className="relative z-10 mt-10">
        <p className="text-lg font-black tracking-widest" style={{ color: d.primary }}>
          {data.city} {data.year} YIL
        </p>
      </div>
    </div>
  )
}

export function ContentSlide({ slide, design }: { slide: SlideData; design: any }) {
  const d = design || { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b' }

  return (
    <div className="flex h-full w-full flex-col bg-white p-10" style={{ color: d.textColor }}>
      
      {/* Sarlavha */}
      <div className="pb-4 mb-6 border-b-4" style={{ borderColor: d.primary }}>
        <h2 className="text-2xl font-black uppercase" style={{ color: d.primary }}>
          {slide.title || "Ma'lumot"}
        </h2>
      </div>

      {/* Asosiy kontent qismi (aql bilan yozilgan) */}
      <div className="flex-1 overflow-y-auto pr-2">
        
        {/* 1. Matnli slaydlar uchun */}
        {slide.content && (
          <p className="text-[16px] leading-relaxed text-justify mb-4 whitespace-pre-wrap">{slide.content}</p>
        )}

        {/* 2. Ro'yxat (Bullets) uchun */}
        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="space-y-3 text-[15px]">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-black text-white mt-0.5" style={{ backgroundColor: d.primary }}>
                  {i + 1}
                </span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* 3. Xorijiy tajribalar (foreignData) uchun */}
        {slide.foreignData && slide.foreignData.length > 0 && (
          <div className="grid gap-4 mt-2">
            {slide.foreignData.map((item: any, idx: number) => (
              <div key={idx} className="flex items-start gap-4 rounded-xl border p-4 shadow-sm" style={{ borderColor: d.secondary, backgroundColor: d.secondary + '40' }}>
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                  {item.flag || "🏳️"}
                </div>
                <div>
                  <h3 className="font-black text-sm mb-1" style={{ color: d.primary }}>{item.country} tajribasi</h3>
                  <p className="text-[13px] leading-relaxed text-slate-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. Jadvallar (tableData) uchun */}
        {slide.tableData && (
          <div className="mt-4 overflow-x-auto rounded-xl border shadow-sm">
            <table className="w-full text-left text-[12px]">
              <thead style={{ backgroundColor: d.secondary, color: d.primary }}>
                <tr>
                  {slide.tableData.headers?.map((h: string, i: number) => (
                    <th key={i} className="p-3 font-bold border-b whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {slide.tableData.rows?.map((row: string[], i: number) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="p-3 align-top">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
