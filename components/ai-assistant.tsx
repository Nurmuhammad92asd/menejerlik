'use client'

import { useState } from 'react'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function AIAssistant({
  onBack,
}: {
  onBack: () => void
}) {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)

  async function askAI() {
    const text = question.trim()

    if (!text || loading) {
      return
    }

    const userMessage: Message = {
      role: 'user',
      content: text,
    }

    setMessages((previous) => [
      ...previous,
      userMessage,
    ])

    setQuestion('')
    setLoading(true)

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
            'AI bilan bog‘lanishda xatolik yuz berdi.',
        )
      }

      setMessages((previous) => [
        ...previous,
        {
          role: 'assistant',
          content:
            data.answer ||
            'Javob topilmadi.',
        },
      ])
    } catch (error) {
      console.error('AI error:', error)

      setMessages((previous) => [
        ...previous,
        {
          role: 'assistant',
          content:
            'Kechirasiz, AI bilan bog‘lanishda xatolik yuz berdi. Birozdan keyin qayta urinib ko‘ring.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) {
    if (
      event.key === 'Enter' &&
      !event.shiftKey
    ) {
      event.preventDefault()
      void askAI()
    }
  }

  return (
    <section className="flex min-h-[85vh] flex-col gap-4">
      <header className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex size-10 shrink-0 items-center justify-center rounded-2xl border bg-card text-lg shadow-sm"
        >
          ←
        </button>

        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-2xl shadow-lg">
          🤖
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            MENEJERLIK AI
          </p>

          <h1 className="text-xl font-bold">
            AI Rahbar yordamchisi
          </h1>
        </div>
      </header>

      <div className="rounded-3xl border bg-card p-4 shadow-sm">
        <p className="text-sm leading-6 text-muted-foreground">
          Men ta’lim rahbarlari uchun
          boshqaruv, ta’lim sifati,
          jamoani boshqarish, monitoring,
          rejalashtirish va maktabni
          rivojlantirish bo‘yicha yordam
          beraman.
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto">
        {messages.length === 0 && (
          <div className="rounded-3xl border border-dashed p-6 text-center">
            <div className="text-4xl">
              🎯
            </div>

            <h2 className="mt-3 font-bold">
              Savolingizni yozing
            </h2>

            <p className="mt-2 text-sm leading-5 text-muted-foreground">
              Masalan: “Maktabda ta’lim sifatini
              oshirish uchun rahbar sifatida
              qanday choralar ko‘rishim kerak?”
            </p>
          </div>
        )}

        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={
                message.role === 'user'
                  ? 'ml-8 rounded-3xl bg-primary p-4 text-sm text-primary-foreground'
                  : 'mr-4 rounded-3xl border bg-card p-4 text-sm leading-6 shadow-sm'
              }
            >
              {message.content}
            </div>
          ),
        )}

        {loading && (
          <div className="mr-16 rounded-3xl border bg-card p-4 text-sm text-muted-foreground">
            🤖 AI javob tayyorlamoqda...
          </div>
        )}
      </div>

      <div className="rounded-3xl border bg-card p-3 shadow-lg">
        <textarea
          value={question}
          onChange={(event) =>
            setQuestion(event.target.value)
          }
          onKeyDown={handleKeyDown}
          disabled={loading}
          placeholder="Rahbarlik bo‘yicha savolingizni yozing..."
          rows={3}
          className="w-full resize-none bg-transparent p-2 text-sm outline-none placeholder:text-muted-foreground"
        />

        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="text-[10px] text-muted-foreground">
            Enter — yuborish
          </span>

          <button
            type="button"
            onClick={() => void askAI()}
            disabled={
              loading ||
              !question.trim()
            }
            className="rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? 'Yuborilmoqda...'
              : '🤖 So‘rash'}
          </button>
        </div>
      </div>
    </section>
  )
}
