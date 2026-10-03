import { NextResponse } from 'next/server'
import { askAI } from '@/lib/ai'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const question =
      typeof body?.question === 'string'
        ? body.question.trim()
        : ''

    if (!question) {
      return NextResponse.json(
        {
          error: 'Savol kiritilmagan.',
        },
        { status: 400 },
      )
    }

    if (question.length > 2000) {
      return NextResponse.json(
        {
          error: 'Savol juda uzun. 2000 belgidan oshirmang.',
        },
        { status: 400 },
      )
    }

    const answer = await askAI(question)

    return NextResponse.json({
      answer,
    })
  } catch (error) {
    console.error('API /api/ai ERROR:', error)

    const message =
      error instanceof Error
        ? error.message
        : 'Noma’lum server xatosi'

    return NextResponse.json(
      {
        error: message,
      },
      { status: 500 },
    )
  }
}
