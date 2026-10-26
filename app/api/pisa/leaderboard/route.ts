// app/api/pisa/leaderboard/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { getLeaderboard, submitScore } from '@/lib/pisa-leaderboard'

export const runtime = 'edge'

/**
 * GET /api/pisa/leaderboard?limit=50
 */
export async function GET(request: NextRequest) {
  try {
    const { env } = await getCloudflareContext({ async: true })
    const db = (env as any).DB as D1Database

    if (!db) {
      return NextResponse.json({ error: 'DB not configured' }, { status: 500 })
    }

    const { searchParams } = new URL(request.url)
    const limit = Math.min(Number(searchParams.get('limit') || 50), 100)

    const leaderboard = await getLeaderboard(db, limit)

    return NextResponse.json({ leaderboard })
  } catch (error) {
    console.error('Leaderboard GET error:', error)
    return NextResponse.json({ error: 'Failed to fetch leaderboard' }, { status: 500 })
  }
}

/**
 * POST /api/pisa/leaderboard
 * Body: { userId, username, totalXp, bestLevel, domainScores, correctAnswers, totalAnswers }
 */
export async function POST(request: NextRequest) {
  try {
    const { env } = await getCloudflareContext({ async: true })
    const db = (env as any).DB as D1Database

    if (!db) {
      return NextResponse.json({ error: 'DB not configured' }, { status: 500 })
    }

    const body = await request.json()

    if (!body.userId || typeof body.totalXp !== 'number') {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await submitScore(db, {
      userId: String(body.userId),
      username: body.username ? String(body.username) : null,
      totalXp: Number(body.totalXp),
      bestLevel: Number(body.bestLevel || 1),
      domainScores: body.domainScores || {},
      correctAnswers: Number(body.correctAnswers || 0),
      totalAnswers: Number(body.totalAnswers || 0),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Leaderboard POST error:', error)
    return NextResponse.json({ error: 'Failed to submit score' }, { status: 500 })
  }
}
