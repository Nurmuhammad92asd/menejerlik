```tsx
'use client'

type ResultScreenProps = {
  result: {
    percentage?: number
    correct?: number
    total?: number
  }
  onRetry: () => void
  onHome: () => void
}

export function ResultScreen({
  result,
  onRetry,
  onHome,
}: ResultScreenProps) {
  const percentage = result?.percentage ?? 0
  const correct = result?.correct ?? 0
  const total = result?.total ?? 0

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-3xl font-black">
          Test natijasi
        </h1>

        <div className="mt-6 text-6xl font-black text-blue-600">
          {percentage}%
        </div>

        <p className="mt-4 text-lg">
          {correct} / {total} ta savol to‘g‘ri
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            onClick={onRetry}
            className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
          >
            Qayta ishlash
          </button>

          <button
            type="button"
            onClick={onHome}
            className="rounded-xl border px-5 py-3 font-bold"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    </div>
  )
}
```
