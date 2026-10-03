'use client'

type ResultScreenProps = {
result: {
percentage?: number
correct?: number
total?: number
} | null
onRetry: () => void
onHome: () => void
}

export default function ResultScreen({
result,
onRetry,
onHome,
}: ResultScreenProps) {
const percentage = Math.max(
0,
Math.min(100, Number(result?.percentage ?? 0))
)

const correct = Number(result?.correct ?? 0)
const total = Number(result?.total ?? 0)
const wrong = Math.max(0, total - correct)

let message = 'Harakatni davom ettiring!'
let messageClass = 'text-orange-600'

if (percentage >= 90) {
message = 'Ajoyib natija! 🎉'
messageClass = 'text-green-600'
} else if (percentage >= 70) {
message = 'Juda yaxshi natija! 👏'
messageClass = 'text-blue-600'
} else if (percentage >= 50) {
message = 'Yaxshi, yana bir bor urinib ko‘ring!'
messageClass = 'text-yellow-600'
}

return ( <main className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6"> <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"> <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-8 text-center text-white sm:px-8"> <div className="text-sm font-bold uppercase tracking-widest text-blue-100">
TEST YAKUNLANDI </div>

```
      <h1 className="mt-2 text-3xl font-black sm:text-4xl">
        Test natijasi
      </h1>

      <div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-full border-8 border-white/30 bg-white/10">
        <div className="text-center">
          <div className="text-5xl font-black">
            {percentage}%
          </div>
          <div className="mt-1 text-sm font-semibold text-blue-100">
            natija
          </div>
        </div>
      </div>

      <p className="mt-5 text-lg font-bold">
        {message}
      </p>
    </div>

    <div className="p-5 sm:p-8">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-green-50 p-4 text-center">
          <div className="text-3xl font-black text-green-600">
            {correct}
          </div>
          <div className="mt-1 text-sm font-semibold text-slate-600">
            To‘g‘ri
          </div>
        </div>

        <div className="rounded-2xl bg-red-50 p-4 text-center">
          <div className="text-3xl font-black text-red-600">
            {wrong}
          </div>
          <div className="mt-1 text-sm font-semibold text-slate-600">
            Noto‘g‘ri
          </div>
        </div>

        <div className="rounded-2xl bg-blue-50 p-4 text-center">
          <div className="text-3xl font-black text-blue-600">
            {total}
          </div>
          <div className="mt-1 text-sm font-semibold text-slate-600">
            Jami
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5 text-center">
        <div className="text-sm font-semibold text-slate-500">
          Sizning natijangiz
        </div>

        <div className={`mt-2 text-2xl font-black ${messageClass}`}>
          {percentage}% — {correct} / {total}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <button
          type="button"
          onClick={onRetry}
          className="min-h-12 rounded-2xl bg-blue-600 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.99]"
        >
          🔄 Qayta ishlash
        </button>

        <button
          type="button"
          onClick={onHome}
          className="min-h-12 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-base font-bold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
        >
          🏠 Bosh sahifaga qaytish
        </button>
      </div>
    </div>
  </div>
</main>
```

)
}
