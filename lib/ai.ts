import { CATEGORIES } from './quiz-data'

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent'

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
- ta’lim menejmenti;
- maktab rivojlanish strategiyasi;
- pedagoglarning kasbiy rivojlanishi;
- rahbarlik va boshqaruv

bo‘yicha amaliy yordam berish.

Qoidalar:

1. Javobni o‘zbek tilida, lotin yozuvida ber.

2. Javob aniq, tushunarli va amaliy bo‘lsin.

3. Kerak bo‘lsa javobni punktlar va bosqichlarga ajrat.

4. Maktab rahbari amalda foydalanishi mumkin bo‘lgan tavsiyalar ber.

5. Misollar kerak bo‘lsa, maktab hayotidan sodda va real misollar keltir.

6. Aniq bilmagan qonun moddasi, raqam, sana yoki normativ hujjatni o‘ylab topma.

7. Huquqiy masalalarda rasmiy manbalarni, xususan LexUZni tekshirish kerakligini bildir.

8. Foydalanuvchi maktab boshqaruvi yoki ta’lim menejmentiga oid savol bersa, imkon qadar amaliy javob ber.

9. Mavzudan butunlay tashqari savol berilsa, muloyim tarzda platformaning asosiy yo‘nalishi ta’lim boshqaruvi ekanini ayt va shu yo‘nalishga qaytar.

10. Javoblar haddan tashqari uzun bo‘lmasin. Odatda 5-10 ta mazmunli punkt yoki gap yetarli.

11. Foydalanuvchiga hurmat bilan murojaat qil.

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
    const response = await fetch(GEMINI_API_URL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
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
          maxOutputTokens: 1000,

          thinkingConfig: {
            thinkingLevel: 'low',
          },
        },
      }),
    })

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
