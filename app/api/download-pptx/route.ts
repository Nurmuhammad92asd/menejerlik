import { NextResponse } from 'next/server'
import PptxGenJS from 'pptxgenjs'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { slides, topic, author, group } = data

    if (!slides || !Array.isArray(slides)) {
      return NextResponse.json({ error: "Slaydlar topilmadi" }, { status: 400 })
    }

    const pptx = new PptxGenJS()
    pptx.layout = 'LAYOUT_16x9'

    slides.forEach((slide: any) => {
      const pptSlide = pptx.addSlide()
      pptSlide.background = { color: "FFFFFF" }

      // Sarlavha
      if (slide.title) {
        pptSlide.addText(slide.title, { x: 0.5, y: 0.5, w: '90%', h: 1, fontSize: 32, bold: true, color: "1A365D" })
      }

      // Matn (content)
      if (slide.content) {
        pptSlide.addText(slide.content, { x: 0.5, y: 1.5, w: '90%', h: 2, fontSize: 18, color: "333333" })
      }

      // Ro'yxatlar (bullets)
      if (slide.bullets && Array.isArray(slide.bullets)) {
        const bulletText = slide.bullets.map((b: string) => ({ text: b, options: { bullet: true, fontSize: 18 } }))
        pptSlide.addText(bulletText, { x: 0.5, y: 1.5, w: '90%', h: 4 })
      }

      // Xorijiy ma'lumotlar
      if (slide.foreignData && Array.isArray(slide.foreignData)) {
        const foreignText = slide.foreignData.map((f: any) => ({ text: `${f.flag} ${f.country}: ${f.text}`, options: { fontSize: 14, breakLine: true } }))
        pptSlide.addText(foreignText, { x: 0.5, y: 1.5, w: '90%', h: 4 })
      }

      // Jadvallar
      if (slide.tableData && slide.tableData.rows) {
        const tableRows = [
          slide.tableData.headers.map((h: string) => ({ text: h, options: { bold: true, fill: "E2E8F0" } })),
          ...slide.tableData.rows.map((row: string[]) => row.map(cell => ({ text: cell })))
        ]
        pptSlide.addTable(tableRows, { x: 0.5, y: 1.5, w: '90%', fontSize: 12 })
      }
    })

    const buffer = await pptx.write({ outputType: 'nodebuffer' })
    
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'Content-Disposition': `attachment; filename="${topic || 'Taqdimot'}.pptx"`
      }
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
