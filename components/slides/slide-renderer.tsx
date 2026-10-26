// components/slides/slide-renderer.tsx

import type { PresentationData, SlideData } from './slide-types'
import type { SlideDesign } from './slide-designer'

// Slayd foni uchun maxsus komponent
function SlideBackground({ design, children }: { design: SlideDesign, children: React.ReactNode }) {
  const bgStyle = {
    fontFamily: design.fontFamily,
    backgroundColor: design.bgStyle === 'clean' ? '#ffffff' : design.secondary,
    backgroundImage: design.bgStyle === 'gradient' 
      ? `linear-gradient(135deg, #ffffff 0%, ${design.secondary} 100%)`
      : design.bgStyle === 'pattern'
        ? `radial-gradient(${design.primary}15 1px, transparent 1px)` // Nuqtali naqsh
        : 'none',
    backgroundSize: design.bgStyle === 'pattern' ? '20px 20px' : 'auto',
  }

  return (
    <div className="h-full w-full p-12 relative overflow-hidden" style={bgStyle}>
      {/* Agar naqsh bo'lsa, tepada yengil qatlam */}
      {design.bgStyle === 'pattern' && <div className="absolute inset-0 bg-white/60" />}
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

export function TitleSlide({ data }: { data: PresentationData & { designObj?: SlideDesign } }) {
  const d = data.design || { primary: '#1e3a8a', secondary: '#eff6ff', accent: '#3b82f6', textColor: '#1e293b', fontFamily: 'sans-serif', bgStyle: 'clean', borderRadius: 'sharp', hasShadow: true } as any

  return (
    <SlideBackground design={d}>
      {/* ... Titul varaq ichidagi dizayn (rasm, logotip, matn) ... */}
    </SlideBackground>
  )
}

export function ContentSlide({ slide, design }: { slide: SlideData; design: SlideDesign }) {
  return (
    <SlideBackground design={design}>
      {/* Sarlavha */}
      <div 
        className="pb-4 mb-6 border-b-4" 
        style={{ borderColor: design.primary, borderRadius: design.borderRadius === 'rounded' ? '8px 8px 0 0' : '0' }}
      >
        <h2 className="text-2xl font-black uppercase" style={{ color: design.primary }}>
          {slide.title}
        </h2>
      </div>

      {/* ... Qolgan kontent (matn, jadval, rasmlar) ... */}
    </SlideBackground>
  )
}
