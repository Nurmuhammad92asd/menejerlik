// components/logic/logic-games.ts
import type {
  FallacyGame,
  RealFakeGame,
  LogicLockGame,
  ArgumentChainGame,
} from './logic-types'

// ═══════════════════════════════════════════════════════
// FALLACY HUNTER — 10 ta
// ═══════════════════════════════════════════════════════

export const FALLACY_GAMES: FallacyGame[] = [
  {
    type: 'fallacy',
    id: 'fal-01',
    fallacyType: 'authority',
    text: {
      uz: "Mashhur aktyor bu telefonni ishlatadi, demak u eng yaxshi telefon!",
      en: 'A famous actor uses this phone, so it must be the best phone!',
    },
    options: {
      uz: ["Obro'ga murojaat", "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Authority', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "Mashhur odam mutaxassis bo'lishi shart emas. Uning fikri dalil emas.",
      en: "A celebrity isn't necessarily an expert. Their opinion isn't evidence.",
    },
    xp: 25,
  },
  {
    type: 'fallacy',
    id: 'fal-02',
    fallacyType: 'bandwagon',
    text: {
      uz: "Hamma bu dietani qilyapti, demak u sog'lom.",
      en: 'Everyone is doing this diet, so it must be healthy.',
    },
    options: {
      uz: ["Obro'ga murojaat", "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Authority', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 1,
    explanation: {
      uz: "Ko'pchilik qilishi uni to'g'ri qilmaydi. Ilmiy dalil kerak.",
      en: "Popularity doesn't make it correct. You need scientific evidence.",
    },
    xp: 25,
  },
  {
    type: 'fallacy',
    id: 'fal-03',
    fallacyType: 'false-dilemma',
    text: {
      uz: 'Agar sen biz bilan emassan, demak dushmansan.',
      en: "If you're not with us, you're against us.",
    },
    options: {
      uz: ["Obro'ga murojaat", "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Authority', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 2,
    explanation: {
      uz: "Hayotda 2 tadan ko'p variant bor. \"Yo'q\" deyish \"dushman\" degani emas.",
      en: 'There are more than 2 options. "No" doesn\'t mean "enemy".',
    },
    xp: 30,
  },
  {
    type: 'fallacy',
    id: 'fal-04',
    fallacyType: 'ad-hominem',
    text: {
      uz: "Uning iqlim haqidagi fikrini eshitmang — u yosh.",
      en: "Don't listen to his climate opinion — he's young.",
    },
    options: {
      uz: ["Obro'ga murojaat", "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Authority', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 3,
    explanation: {
      uz: "Fikrning to'g'riligi muallifning yoshiga bog'liq emas.",
      en: "An idea's validity doesn't depend on the author's age.",
    },
    xp: 30,
  },
  {
    type: 'fallacy',
    id: 'fal-05',
    fallacyType: 'straw-man',
    text: {
      uz: "U go'sht iste'molini kamaytirishni taklif qildi — ya'ni u barcha fermerlarni ishsiz qoldirmoqchi!",
      en: 'He suggested reducing meat consumption — meaning he wants to fire all farmers!',
    },
    options: {
      uz: ["Obro'ga murojaat", "Qo'g'irchoq argument", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Authority', 'Straw Man', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 1,
    explanation: {
      uz: "Asl fikr buzib ko'rsatilgan. Bu \"qo'g'irchoq argument\" — o'zi yaratgan da'voga hujum.",
      en: 'The original idea is distorted. This is a "straw man" — attacking a made-up claim.',
    },
    xp: 35,
  },
  {
    type: 'fallacy',
    id: 'fal-06',
    fallacyType: 'slippery-slope',
    text: {
      uz: 'Agar bugun uy vazifasini qilmasang, ertaga maktabni tashlaysan, keyin ishsiz qolasan.',
      en: "If you skip homework today, tomorrow you'll drop out, then you'll be jobless.",
    },
    options: {
      uz: ["Sirg'anchiq nishab", "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Slippery Slope', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "Har bir qadam keyingi qadamga olib keladi degan isbot yo'q.",
      en: 'No proof that each step necessarily leads to the next.',
    },
    xp: 35,
  },
  {
    type: 'fallacy',
    id: 'fal-07',
    fallacyType: 'circular',
    text: {
      uz: "Bu kitob to'g'ri, chunki unda \"bu kitob to'g'ri\" deb yozilgan.",
      en: 'This book is true because it says "this book is true".',
    },
    options: {
      uz: ['Aylanma mantiq', "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Circular Reasoning', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "O'zini o'zi isbotlash — mantiqiy xato. Tashqi dalil kerak.",
      en: 'Proving itself is a logical fallacy. External evidence is needed.',
    },
    xp: 35,
  },
  {
    type: 'fallacy',
    id: 'fal-08',
    fallacyType: 'appeal-emotion',
    text: {
      uz: 'Bu bolalar och qoladi! Iltimos, bu mahsulotni sotib oling!',
      en: 'These children will starve! Please buy this product!',
    },
    options: {
      uz: ['Hissiyotga murojaat', "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Appeal to Emotion', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "Hissiyot dalil emas. Mahsulot va bolalar o'rtasida bog'liqlik yo'q.",
      en: 'Emotion is not evidence. There is no link between the product and the children.',
    },
    xp: 35,
  },
  {
    type: 'fallacy',
    id: 'fal-09',
    fallacyType: 'hasty-generalization',
    text: {
      uz: "Men ikki fransuzni uchratdim va ikkisi ham qo'pol edi. Fransuzlar qo'pol.",
      en: 'I met two French people and both were rude. French people are rude.',
    },
    options: {
      uz: ['Shoshilinch umumlashtirish', "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['Hasty Generalization', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "2 kishi butun xalqni ifodalamaydi. Katta namuna kerak.",
      en: '2 people do not represent an entire nation. You need a large sample.',
    },
    xp: 40,
  },
  {
    type: 'fallacy',
    id: 'fal-10',
    fallacyType: 'false-cause',
    text: {
      uz: "Men bu dori ichdim va ertaga tuzaldim. Demak bu dori tuzatdi.",
      en: 'I took this medicine and got better the next day. So the medicine cured me.',
    },
    options: {
      uz: ['Soxta sabab', "Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum'],
      en: ['False Cause', 'Bandwagon', 'False Dilemma', 'Ad Hominem'],
    },
    correct: 0,
    explanation: {
      uz: "Ketma-ketlik sababni isbotlamaydi. Boshqa omillar ham bo'lishi mumkin.",
      en: 'Sequence does not prove causation. Other factors may be involved.',
    },
    xp: 40,
  },
]

// ═══════════════════════════════════════════════════════
// REAL OR FAKE — 8 ta
// ═══════════════════════════════════════════════════════

export const REAL_FAKE_GAMES: RealFakeGame[] = [
  {
    type: 'real-fake',
    id: 'rf-01',
    headline: {
      uz: "Yangi tadqiqot: shokolad vazn yo'qotishga yordam beradi",
      en: 'New study: chocolate helps you lose weight',
    },
    source: {
      uz: 'Reklama, 10 kishi ishtirok etgan',
      en: 'Advertisement, only 10 participants',
    },
    isReal: false,
    reason: {
      uz: "Kichik namuna, reklama manbasi. Ishonchsiz.",
      en: 'Small sample, advertising source. Unreliable.',
    },
    xp: 20,
  },
  {
    type: 'real-fake',
    id: 'rf-02',
    headline: {
      uz: "JSST: jismoniy mashq sog'liq uchun foydali",
      en: 'WHO: physical exercise is good for health',
    },
    source: {
      uz: 'JSST rasmiy hisoboti',
      en: 'WHO official report',
    },
    isReal: true,
    reason: {
      uz: "Rasmiy xalqaro tashkilot, ko'p yillik tadqiqot.",
      en: 'Official international organization, years of research.',
    },
    xp: 20,
  },
  {
    type: 'real-fake',
    id: 'rf-03',
    headline: {
      uz: 'Blog: "Bu dori barcha kasalliklarni davolaydi"',
      en: 'Blog: "This medicine cures all diseases"',
    },
    source: {
      uz: 'Anonim blog',
      en: 'Anonymous blog',
    },
    isReal: false,
    reason: {
      uz: "\"Barcha\" — haddan tashqari da'vo. Manba yo'q.",
      en: '"All" is an extreme claim. No source.',
    },
    xp: 20,
  },
  {
    type: 'real-fake',
    id: 'rf-04',
    headline: {
      uz: "Ilmiy jurnal: A vitamini ko'rishga ta'sir qilmaydi (1000 kishi)",
      en: 'Scientific journal: Vitamin A does not affect vision (1000 people)',
    },
    source: {
      uz: 'Ilmiy jurnal, platsebo nazorati',
      en: 'Scientific journal, placebo-controlled',
    },
    isReal: true,
    reason: {
      uz: 'Katta namuna, platsebo nazorati, ilmiy jurnal.',
      en: 'Large sample, placebo control, scientific journal.',
    },
    xp: 25,
  },
  {
    type: 'real-fake',
    id: 'rf-05',
    headline: {
      uz: "Statistika: kofe ichuvchilar uzoq yashaydi",
      en: 'Statistics: coffee drinkers live longer',
    },
    source: {
      uz: "Kuzatuv tadqiqoti (boshqa omillar nazorat qilinmagan)",
      en: 'Observational study (other factors not controlled)',
    },
    isReal: false,
    reason: {
      uz: "Kofe ichuvchilar boyroq bo'lishi mumkin. Boshqa omillar ta'sir qiladi.",
      en: 'Coffee drinkers may be wealthier. Other factors matter.',
    },
    xp: 25,
  },
  {
    type: 'real-fake',
    id: 'rf-06',
    headline: {
      uz: 'NASA: Marsda suv izlari topildi',
      en: 'NASA: traces of water found on Mars',
    },
    source: {
      uz: 'NASA rasmiy press-relizi, ilmiy maqola',
      en: 'NASA official press release, scientific paper',
    },
    isReal: true,
    reason: {
      uz: "Rasmiy kosmik agentlik, ilmiy jurnalda chop etilgan.",
      en: 'Official space agency, published in scientific journal.',
    },
    xp: 25,
  },
  {
    type: 'real-fake',
    id: 'rf-07',
    headline: {
      uz: '"Falon mahsulot 10 daqiqada davolaydi" — reklama',
      en: '"Product X cures in 10 minutes" — advertisement',
    },
    source: {
      uz: 'Reklama, sotuvchi',
      en: 'Advertisement, seller',
    },
    isReal: false,
    reason: {
      uz: "Reklama manbasi — manfaatdor tomon. Ishonchsiz.",
      en: 'Advertising source — interested party. Unreliable.',
    },
    xp: 20,
  },
  {
    type: 'real-fake',
    id: 'rf-08',
    headline: {
      uz: "Tadqiqot: 5000 kishi, 10 yil, shakar semizlikka sabab",
      en: 'Study: 5000 people, 10 years, sugar causes obesity',
    },
    source: {
      uz: 'Ilmiy jurnal, uzoq muddatli tadqiqot',
      en: 'Scientific journal, long-term study',
    },
    isReal: true,
    reason: {
      uz: "Katta namuna, uzoq vaqt, ilmiy jurnal.",
      en: 'Large sample, long-term, scientific journal.',
    },
    xp: 25,
  },
]

// ═══════════════════════════════════════════════════════
// LOGIC LOCK — 4 ta o'yin (har birida 3 ta qulf)
// ═══════════════════════════════════════════════════════

export const LOGIC_LOCK_GAMES: LogicLockGame[] = [
  {
    type: 'logic-lock',
    id: 'lock-01',
    title: {
      uz: 'Dalilni top',
      en: 'Find the Evidence',
    },
    xp: 50,
    locks: [
      {
        id: 'l1',
        question: {
          uz: 'Qaysi dalil eng kuchli?',
          en: 'Which evidence is strongest?',
        },
        options: {
          uz: ['Anonim blog', "Ilmiy tadqiqot (1000 kishi)", "Do'stning fikri", 'Reklama'],
          en: ['Anonymous blog', 'Scientific study (1000 people)', "Friend's opinion", 'Advertisement'],
        },
        correct: 1,
        explanation: {
          uz: 'Katta namuna + ilmiy usul = ishonchli dalil.',
          en: 'Large sample + scientific method = reliable evidence.',
        },
      },
      {
        id: 'l2',
        question: {
          uz: 'Kichik namuna nima uchun ishonchsiz?',
          en: 'Why is a small sample unreliable?',
        },
        options: {
          uz: ["Ko'p vaqt oladi", 'Tasodifiy natija bo\'lishi mumkin', 'Qimmat', 'Murakkab'],
          en: ['Takes too long', 'Result may be random', 'Expensive', 'Complicated'],
        },
        correct: 1,
        explanation: {
          uz: 'Kichik namunada tasodifiy natijalar ehtimoli yuqori.',
          en: 'Small samples are more likely to produce random results.',
        },
      },
      {
        id: 'l3',
        question: {
          uz: 'Qaysi manba mustaqil?',
          en: 'Which source is independent?',
        },
        options: {
          uz: ['Reklama', 'Kompaniya hisoboti', 'Ilmiy jurnal', 'Sotuvchi'],
          en: ['Advertisement', 'Company report', 'Scientific journal', 'Seller'],
        },
        correct: 2,
        explanation: {
          uz: "Ilmiy jurnal — ekspert tekshiruvidan o'tgan, mustaqil.",
          en: 'Scientific journal — peer-reviewed, independent.',
        },
      },
    ],
  },
  {
    type: 'logic-lock',
    id: 'lock-02',
    title: {
      uz: 'Mantiqiy xatoni top',
      en: 'Spot the Fallacy',
    },
    xp: 50,
    locks: [
      {
        id: 'l1',
        question: {
          uz: "\"Hamma qilyapti\" — qanday xato?",
          en: '"Everyone is doing it" — what fallacy?',
        },
        options: {
          uz: ["Ko'pchilikka murojaat", 'Soxta dilemma', 'Shaxsiyatga hujum', 'Aylanma mantiq'],
          en: ['Bandwagon', 'False Dilemma', 'Ad Hominem', 'Circular Reasoning'],
        },
        correct: 0,
        explanation: {
          uz: "Ko'pchilik qilishi uni to'g'ri qilmaydi.",
          en: "Popularity doesn't make it correct.",
        },
      },
      {
        id: 'l2',
        question: {
          uz: "\"Sen yoshsan, fikring noto'g'ri\" — qanday xato?",
          en: '"You\'re young, your opinion is wrong" — what fallacy?',
        },
        options: {
          uz: ["Obro'ga murojaat", 'Shaxsiyatga hujum', 'Soxta dilemma', 'Hissiyotga murojaat'],
          en: ['Appeal to Authority', 'Ad Hominem', 'False Dilemma', 'Appeal to Emotion'],
        },
        correct: 1,
        explanation: {
          uz: 'Shaxsiyatga hujum — fikrning to\'g\'riligi muallifga bog\'liq emas.',
          en: "Ad Hominem — an idea's validity doesn't depend on the author.",
        },
      },
      {
        id: 'l3',
        question: {
          uz: "\"Yo biz bilan, yo dushman\" — qanday xato?",
          en: '"Either with us or against us" — what fallacy?',
        },
        options: {
          uz: ["Ko'pchilikka murojaat", 'Soxta dilemma', 'Aylanma mantiq', "Sirg'anchiq nishab"],
          en: ['Bandwagon', 'False Dilemma', 'Circular Reasoning', 'Slippery Slope'],
        },
        correct: 1,
        explanation: {
          uz: "Hayotda 2 tadan ko'p variant bor.",
          en: 'There are more than 2 options in life.',
        },
      },
    ],
  },
  {
    type: 'logic-lock',
    id: 'lock-03',
    title: {
      uz: 'Manbani baholash',
      en: 'Evaluate the Source',
    },
    xp: 50,
    locks: [
      {
        id: 'l1',
        question: {
          uz: 'Reklama manbasi qanchalik ishonchli?',
          en: 'How reliable is an advertising source?',
        },
        options: {
          uz: ["To'liq ishonchli", 'Ishonchsiz', "Ba'zan ishonchli", 'Bilmadim'],
          en: ['Fully reliable', 'Unreliable', 'Sometimes reliable', 'Unknown'],
        },
        correct: 1,
        explanation: {
          uz: 'Reklama — manfaatdor tomon, ishonchsiz.',
          en: 'Advertising — interested party, unreliable.',
        },
      },
      {
        id: 'l2',
        question: {
          uz: "Ilmiy maqola va reklama bir xil da'vo qilsa, qaysi ishonchli?",
          en: 'If a scientific paper and an ad claim the same, which is reliable?',
        },
        options: {
          uz: ['Reklama', 'Ilmiy maqola', 'Ikkisi teng', 'Hech biri'],
          en: ['Advertisement', 'Scientific paper', 'Both equal', 'Neither'],
        },
        correct: 1,
        explanation: {
          uz: "Ilmiy maqola — ekspert tekshiruvi.",
          en: 'Scientific paper — peer-reviewed.',
        },
      },
      {
        id: 'l3',
        question: {
          uz: 'Manfaatlar to\'qnashuvi nima?',
          en: 'What is a conflict of interest?',
        },
        options: {
          uz: [
            "Muallif manfaatdor bo'lsa",
            'Muallif yosh bo\'lsa',
            "Muallif chet elda bo'lsa",
            "Muallif boy bo'lsa",
          ],
          en: [
            'When the author benefits',
            'When the author is young',
            'When the author is abroad',
            'When the author is rich',
          ],
        },
        correct: 0,
        explanation: {
          uz: "Manfaatlar to'qnashuvi — xolislikka shubha.",
          en: 'Conflict of interest — raises doubt about objectivity.',
        },
      },
    ],
  },
  {
    type: 'logic-lock',
    id: 'lock-04',
    title: {
      uz: 'Statistikani tushunish',
      en: 'Understand Statistics',
    },
    xp: 55,
    locks: [
      {
        id: 'l1',
        question: {
          uz: 'Korrelyatsiya nimani anglatadi?',
          en: 'What does correlation mean?',
        },
        options: {
          uz: [
            'Ikki narsa birga o\'zgaradi',
            'Bir narsa boshqasiga sabab',
            'Ikkisi bir xil',
            'Hech qanday aloqa yo\'q',
          ],
          en: [
            'Two things change together',
            'One causes the other',
            'Both are the same',
            'No relationship at all',
          ],
        },
        correct: 0,
        explanation: {
          uz: "Korrelyatsiya — birga o'zgarish, lekin sabab emas.",
          en: 'Correlation — change together, but not causation.',
        },
      },
      {
        id: 'l2',
        question: {
          uz: 'P-hajm 0.05 dan kichik bo\'lsa?',
          en: 'If p-value is less than 0.05?',
        },
        options: {
          uz: [
            "Natija statistik ahamiyatli",
            'Natija noto\'g\'ri',
            'Natija tasodifiy',
            'Natija katta',
          ],
          en: [
            'Result is statistically significant',
            'Result is wrong',
            'Result is random',
            'Result is large',
          ],
        },
        correct: 0,
        explanation: {
          uz: 'p < 0.05 — statistik ahamiyatli.',
          en: 'p < 0.05 — statistically significant.',
        },
      },
      {
        id: 'l3',
        question: {
          uz: 'Namuna hajmi qancha bo\'lishi kerak?',
          en: 'How large should a sample be?',
        },
        options: {
          uz: ['1 kishi', '10 kishi', "Ko'p kishi (odatda 100+)", 'Bilmadim'],
          en: ['1 person', '10 people', 'Many people (usually 100+)', 'Unknown'],
        },
        correct: 2,
        explanation: {
          uz: "Katta namuna ishonchliroq. 100+ odatda yaxshi.",
          en: 'Larger sample = more reliable. 100+ is usually good.',
        },
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════
// ARGUMENT CHAIN — 4 ta
// ═══════════════════════════════════════════════════════

export const ARGUMENT_CHAIN_GAMES: ArgumentChainGame[] = [
  {
    type: 'argument-chain',
    id: 'chain-01',
    title: {
      uz: 'Qayta ishlatish zanjiri',
      en: 'Recycling Chain',
    },
    items: [
      { id: 'a', text: { uz: 'Qayta ishlatiladigan idishlar ishlatildi', en: 'Reusable containers were used' } },
      { id: 'b', text: { uz: 'Plastik butilkalar soni kamaydi', en: 'Number of plastic bottles decreased' } },
      { id: 'c', text: { uz: 'Chiqindi miqdori kamaydi', en: 'Waste amount decreased' } },
      { id: 'd', text: { uz: 'Atrof-muhit tozalandi', en: 'Environment became cleaner' } },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation: {
      uz: "Sabab → natija → natijaning natijasi → yakuniy xulosa.",
      en: 'Cause → effect → effect of effect → final conclusion.',
    },
    xp: 40,
  },
  {
    type: 'argument-chain',
    id: 'chain-02',
    title: {
      uz: 'Ilmiy xulosa zanjiri',
      en: 'Scientific Conclusion Chain',
    },
    items: [
      { id: 'a', text: { uz: 'Ikki guruh o\'simlik olindi', en: 'Two groups of plants were taken' } },
      { id: 'b', text: { uz: "Biri yorug'likda, biri soyada saqlandi", en: 'One in light, one in shade' } },
      { id: 'c', text: { uz: "Yorug'likdagisi tezroq o'sdi", en: 'The one in light grew faster' } },
      { id: 'd', text: { uz: "Yorug'lik o'sishni tezlashtiradi", en: 'Light speeds up growth' } },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation: {
      uz: 'Tajriba dizayni → sharoit → natija → xulosa.',
      en: 'Experimental design → condition → result → conclusion.',
    },
    xp: 40,
  },
  {
    type: 'argument-chain',
    id: 'chain-03',
    title: {
      uz: 'Qaror zanjiri',
      en: 'Decision Chain',
    },
    items: [
      { id: 'a', text: { uz: 'Muammo aniqlandi', en: 'Problem identified' } },
      { id: 'b', text: { uz: 'Variantlar sanaldi', en: 'Options listed' } },
      { id: 'c', text: { uz: 'Har biri baholandi', en: 'Each was evaluated' } },
      { id: 'd', text: { uz: 'Eng yaxshisi tanlandi', en: 'Best one chosen' } },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation: {
      uz: "Muammo → variantlar → baholash → tanlov.",
      en: 'Problem → options → evaluation → choice.',
    },
    xp: 40,
  },
  {
    type: 'argument-chain',
    id: 'chain-04',
    title: {
      uz: 'Tanqidiy fikrlash zanjiri',
      en: 'Critical Thinking Chain',
    },
    items: [
      { id: 'a', text: { uz: "Da'vo o'qildi", en: 'Claim was read' } },
      { id: 'b', text: { uz: 'Manba tekshirildi', en: 'Source was checked' } },
      { id: 'c', text: { uz: "Dalil baholandi", en: 'Evidence was evaluated' } },
      { id: 'd', text: { uz: 'Xulosa chiqarildi', en: 'Conclusion was drawn' } },
    ],
    correctOrder: ['a', 'b', 'c', 'd'],
    explanation: {
      uz: "Da'vo → manba → dalil → xulosa.",
      en: 'Claim → source → evidence → conclusion.',
    },
    xp: 40,
  },
]
