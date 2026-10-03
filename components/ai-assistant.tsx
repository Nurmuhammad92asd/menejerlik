'use client'

import { FormEvent, useState } from 'react'

type AIAssistantProps = {
  onBack: () => void
}

export function AIAssistant({ onBack }: AIAssistantProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const text = question.trim()

    if (!text) {
      setError('Avval savolingizni yozing.')
      return
    }

    setLoading(true)
    setError('')
    setAnswer('')

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: text,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data?.error ||
            `Server xatosi: ${response.status}`,
        )
      }

      if (!data?.answer) {
        throw new Error('AI javob qaytarmadi.')
      }

      setAnswer(data.answer)
    } catch (err) {
      console.error('AI CLIENT ERROR:', err)

      setError(
        err instanceof Error
          ? err.message
          : 'AI bilan bog‘lanishda noma’lum xatolik yuz berdi.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-5">
      <div className="mx-auto max-w-2xl">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
        >
          ← Orqaga
        </button>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white shadow-lg">
          <div className="mb-2 text-4xl">🤖</div>

          <h1 className="text-2xl font-bold">
            MENEJERLIK AI
          </h1>

          <p className="mt-2 text-sm text-blue-100">
            Ta’lim boshqaruvi va maktab rahbarligi bo‘yicha
            savollaringizni bering.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 rounded-3xl bg-white p-4 shadow-sm"
        >
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Savolingiz
          </label>

          <textarea
            value={question}
            onChange={(event) =>
              setQuestion(event.target.value)
            }
            placeholder="Masalan: Maktab direktorining ta’lim sifatini oshirishdagi asosiy vazifalari nimalardan iborat?"
            rows={5}
            className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 outline-none focus:border-blue-500"
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-3 w-full rounded-2xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? '⏳ AI javob tayyorlamoqda...' : '🤖 Savol berish'}
          </button>
        </form>

        {loading && (
          <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-sm text-blue-700">
            AI bilan bog‘lanilmoqda...
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-700">
              ❌ Xatolik
            </p>

            <p className="mt-2 break-words text-sm text-red-600">
              {error}
            </p>
          </div>
        )}

        {answer && (
          <div className="mt-4 rounded-3xl bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">🤖</span>

              <h2 className="font-bold text-slate-800">
                AI javobi
              </h2>
            </div>

            <div className="whitespace-pre-wrap text-sm leading-7 text-slate-700">
              {answer}
            </div>
          </div>
        )}

        {!answer && !error && !loading && (
          <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-700">
              💡 Masalan:
            </p>

            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <p>
                • Maktabda ta’lim sifatini qanday oshirish mumkin?
              </p>

              <p>
                • O‘qituvchilar motivatsiyasini qanday kuchaytirish mumkin?
              </p>

              <p>
                • Maktab rivojlanish rejasini qanday tuzish kerak?
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
