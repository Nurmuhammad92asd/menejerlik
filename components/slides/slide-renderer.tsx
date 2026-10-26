// components/slides/slide-renderer.tsx
'use client'

import type { PresentationData, SlideData } from './slide-types'

export function TitleSlide({ data }: { data: PresentationData }) {
  const d = data.design
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-white p-10" style={{ color: d.textColor }}>
      <div className="absolute inset-0">
        <img src={data.slides[0].imageUrl} alt="bg" className="h-full w-full object-cover opacity-20" />
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
  return (
    <div className="flex h-full w-full flex-col bg-white p-12" style={{ color: design.textColor }}>
      <div className="pb-4 mb-6 border-b-4" style={{ borderColor: design.primary }}>
        <h2 className="text-2xl font-black uppercase" style={{ color: design.primary }}>
          {slide.title}
        </h2>
      </div>

      <div className="flex-1 flex gap-8">
        <div className="flex-1">
          {slide.content && (
            <p className="text-[16px] leading-relaxed text-justify mb-6">{slide.content}</p>
          )}
          {slide.bullets && (
            <ul className="space-y-4 text-[15px]">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-black text-white mt-0.5" style={{ backgroundColor: design.primary }}>
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {slide.imageUrl && (
          <div className="w-1/3 shrink-0">
            <img src={slide.imageUrl} alt="slide-img" className="w-full h-48 object-cover rounded-xl shadow-lg border" />
          </div>
        )}
      </div>

      {slide.tableData && (
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-[12px]">
            <thead style={{ backgroundColor: design.secondary, color: design.primary }}>
              <tr>
                {slide.tableData.headers.map((h, i) => (
                  <th key={i} className="p-3 font-bold border-b">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.tableData.rows.map((row, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50">
                  {row.map((cell, j) => (
                    <td key={j} className="p-3">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
