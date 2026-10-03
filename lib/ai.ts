import { CATEGORIES } from './quiz-data'

/*
 * =========================================================
 * AI YORDAMCHI (Claude API)
 * ---------------------------------------------------------
 * Vercel → Settings → Environment Variables ga qo‘shing:
 *
 *   ANTHROPIC_API_KEY   (console.anthropic.com dan olinadi)
 *   ANTHROPIC_MODEL     (ixtiyoriy; boshqa model tanlash uchun)
 * =========================================================
 */

const API_URL = 'https://api.anthropic.com/v1/messages'

const DEFAULT_MODEL = 'claude-sonnet-5-5'

/*
 * Bot faqat o‘z mavzularida javob bersin deb, modul va
 * mavzular ro‘yxatini tizim ko‘rsatmasiga qo‘shamiz.
 */
function buildSystemPrompt(): string {
  const topics = CATEGORIES.map(
    (module) =>
      `${module.title}\n` +
      module.topics.map((topic) => `  - ${topic.title}`).join('\n'),
  ).join('\n')

  return `Sen "Menejerlik" botining o‘qituvchi yordamchisisan. Foydalanuvchilar — maktab direktorlari va direktor o‘rinbosarlari, ular ta’lim muassasasini boshqarish bo‘yicha o‘qiydi va test topshiradi.

Qoidalar:
- Faqat o‘zbek tilida (lotin yozuvida) javob ber. Foydalanuvchi boshqa tilda yozsa, o‘sha tilda javob ber.
- Javoblar qisqa, aniq va amaliy bo‘lsin (odatda 4-8 gap). Murakkab mavzuni sodda tushuntir, kerak bo‘lsa bitta misol keltir.
- Quyidagi modul va mavzular doirasida yordam ber. Mavzudan tashqari savol bo‘lsa, muloyim rad etib, mavzularga qaytar.
- Aniq bilmagan raqam, modda yoki me’yoriy hujjat tafsilotini o‘ylab topma. Ishonching komil bo‘lmasa, rasmiy hujjatni (lex.uz) tekshirishni tavsiya qil.
- Markdown belgilaridan (yulduzcha, panjara) foydalanma, oddiy matn yoz.

Mavzular:
${topics}`
}

export async function askAI(question: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return 'AI hozircha ulanmagan (ANTHROPIC_API_KEY kiritilmagan).'
  }

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
      max_tokens: 800,
      system: buildSystemPrompt(),
      messages: [{ role: 'user', content: question.slice(0, 2000) }],
    }),
  })

  if (!response.ok) {
    console.error('AI xatosi:', response.status, await response.text())
    return 'Kechirasiz, hozir javob bera olmadim. Birozdan keyin qayta urinib ko‘ring.'
  }

  const data = (await response.json()) as {
    content?: Array<{ type: string; text?: string }>
  }

  const text = (data.content ?? [])
    .filter((block) => block.type === 'text')
    .map((block) => block.text ?? '')
    .join('')
    .trim()

  return text || 'Javob topilmadi, savolni boshqacha yozib ko‘ring.'
}
