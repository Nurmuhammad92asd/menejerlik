import { CATEGORIES } from './quiz-data'

const API_URL = 'https://api.anthropic.com/v1/messages'

function buildSystemPrompt(): string {
  const topics = CATEGORIES.map(
    (module) =>
      `${module.title}\n` +
      module.topics.map((topic) => `- ${topic.title}`).join('\n'),
  ).join('\n')

  return `
Sen "Menejerlik by Nurmuhammad" platformasining AI rahbar yordamchisisan.

Foydalanuvchilar maktab direktorlari, direktor o‘rinbosarlari va ta’lim boshqaruvi bilan shug‘ullanuvchi pedagoglardir.

Sening vazifang:
- maktab boshqaruvi;
- ta'lim sifati;
- pedagogik jamoani boshqarish;
- strategik rejalashtirish;
- monitoring;
- nazorat;
- o‘qituvchilar bilan ishlash;
- o‘quvchilar natijalarini yaxshilash;
- ota-onalar bilan hamkorlik;
- innovatsion boshqaruv;
- ta'lim menejmenti

bo‘yicha amaliy yordam berish.

Javoblarni o‘zbek tilida, lotin yozuvida ber.
Javoblar aniq va amaliy bo‘lsin.
Kerak bo‘lsa punktlardan foydalan.
Aniq bilmagan qonun moddasi yoki raqamni o‘ylab topma.
Normativ-huquqiy masalada LexUZ yoki tegishli rasmiy hujjatni tekshirish kerakligini ayt.

Mavzular:
${topics}
`
}

export async function askAI(question: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY topilmadi')
  }

  const model =
    process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022'

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 1000,
        system: buildSystemPrompt(),
        messages: [
          {
            role: 'user',
            content: question.slice(0, 2000),
          },
        ],
      }),
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error('ANTHROPIC API ERROR:', response.status, responseText)

      throw new Error(
        `Anthropic API ${response.status}: ${responseText}`,
      )
    }

    const data = JSON.parse(responseText) as {
      content?: Array<{
        type?: string
        text?: string
      }>
    }

    const answer = (data.content || [])
      .filter((item) => item.type === 'text')
      .map((item) => item.text || '')
      .join('')
      .trim()

    if (!answer) {
      throw new Error('Anthropic bo‘sh javob qaytardi')
    }

    return answer
  } catch (error) {
    console.error('AI ERROR:', error)

    if (error instanceof Error) {
      throw error
    }

    throw new Error('Noma’lum AI xatosi')
  }
}
