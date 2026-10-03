import { CATEGORIES } from './quiz-data'

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

function buildSystemPrompt(): string {
  const topics = CATEGORIES.map(
    (module) =>
      `${module.title}\n` +
      module.topics.map((topic) => `- ${topic.title}`).join('\n'),
  ).join('\n')

  return `
Sen "Menejerlik by Nurmuhammad" platformasining AI rahbar yordamchisisan.

Foydalanuvchilar maktab direktorlari, direktor o‘rinbosarlari va ta’lim boshqaruvi bilan shug‘ullanuvchi pedagoglardir.

Asosiy vazifang:
- maktab boshqaruvi;
- ta’lim sifatini oshirish;
- pedagogik jamoani boshqarish;
- strategik rejalashtirish;
- monitoring va nazorat;
- o‘qituvchilar bilan ishlash;
- o‘quvchilar natijalarini yaxshilash;
- ota-onalar bilan hamkorlik;
- innovatsion loyihalar;
- ta’lim menejmenti

bo‘yicha amaliy yordam berish.

Qoidalar:
1. Javobni o‘zbek tilida, lotin yozuvida ber.
2. Javob aniq, tushunarli va amaliy bo‘lsin.
3. Zarur bo‘lsa punktlar va bosqichlardan foydalan.
4. Maktab rahbariga amalda qo‘llash mumkin bo‘lgan tavsiyalar ber.
5. Aniq bilmagan qonun moddasi, raqam yoki normani o‘ylab topma.
6. Huquqiy masalalarda rasmiy manbani, xususan LexUZni tekshirish kerakligini bildir.
7. Mavzudan butunlay tashqari savollarga qisqa javob berib, suhbatni ta’lim boshqaruvi mavzusiga qaytar.
8. Foydalanuvchiga hurmat bilan murojaat qil.

Platformadagi asosiy mavzular:

${topics}
`
}

export async function askAI(question: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY topilmadi')
  }

  try {
    const response = await fetch(
      `${GEMINI_API_URL}?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: buildSystemPrompt(),
              },
            ],
          },
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: question.slice(0, 2000),
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        }),
      },
    )

    const responseText = await response.text()

    if (!response.ok) {
      console.error(
        'GEMINI API ERROR:',
        response.status,
        responseText,
      )

      throw new Error(
        `Gemini API ${response.status}: ${responseText}`,
      )
    }

    const data = JSON.parse(responseText) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{
            text?: string
          }>
        }
      }>
    }

    const answer =
      data.candidates?.[0]?.content?.parts
        ?.map((part) => part.text || '')
        .join('')
        .trim() || ''

    if (!answer) {
      throw new Error('Gemini bo‘sh javob qaytardi')
    }

    return answer
  } catch (error) {
    console.error('GEMINI ERROR:', error)

    if (error instanceof Error) {
      throw error
    }

    throw new Error('Noma’lum Gemini xatosi')
  }
}
