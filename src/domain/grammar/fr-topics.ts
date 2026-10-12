/** French grammar reference — expanded A1–A2 sample */

import type { GrammarTopic } from "../types";

export const FR_GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: "fr-articles",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Definite articles (le, la, l', les)",
      fr: "Articles définis (le, la, l', les)",
      ar: "أدوات التعريف (le, la, l', les)",
    },
    summary: {
      en: "le = masculine singular, la = feminine singular, l' before vowel, les = plural.",
      fr: "le = masculin singulier, la = féminin singulier, l' devant voyelle, les = pluriel.",
      ar: "le للمذكر، la للمؤنث، l' قبل حرف علة، les للجمع.",
    },
    examples: [
      { fr: "le café", gloss: { en: "the coffee", fr: "le café", ar: "القهوة" } },
      { fr: "la gare", gloss: { en: "the station", fr: "la gare", ar: "المحطة" } },
      { fr: "l'eau", gloss: { en: "the water", fr: "l'eau", ar: "الماء" } },
    ],
    commonMistakes: {
      en: "Saying « la café » — café is masculine → le café.",
      fr: "Dire « la café » — café est masculin → le café.",
      ar: "قول « la café » — café مذكر → le café.",
    },
  },
  {
    id: "fr-etre-avoir",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "être and avoir (present)",
      fr: "être et avoir (présent)",
      ar: "être و avoir في المضارع",
    },
    summary: {
      en: "Core verbs: je suis / j'ai, tu es / tu as, il est / il a…",
      fr: "Verbes de base : je suis / j'ai, tu es / tu as…",
      ar: "أفعال أساسية: je suis / j'ai…",
    },
    examples: [
      { fr: "Je suis de Paris.", gloss: { en: "I am from Paris.", fr: "Je suis de Paris.", ar: "أنا من باريس." } },
      { fr: "J'ai un rendez-vous.", gloss: { en: "I have an appointment.", fr: "J'ai un rendez-vous.", ar: "لدي موعد." } },
    ],
    commonMistakes: {
      en: "Confusing « je suis » (I am) with « j'ai » (I have).",
      fr: "Confondre « je suis » et « j'ai ».",
      ar: "الخلط بين je suis و j'ai.",
    },
  },
  {
    id: "fr-negation",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Negation with ne… pas",
      fr: "Négation ne… pas",
      ar: "النفي بـ ne… pas",
    },
    summary: {
      en: "Place ne before the verb and pas after: Je ne parle pas.",
      fr: "ne avant le verbe, pas après : Je ne parle pas.",
      ar: "ne قبل الفعل و pas بعده.",
    },
    examples: [
      { fr: "Je ne comprends pas.", gloss: { en: "I do not understand.", fr: "Je ne comprends pas.", ar: "لا أفهم." } },
    ],
    commonMistakes: {
      en: "Forgetting ne in writing: « Je parle pas » is informal speech.",
      fr: "Oublier ne à l'écrit.",
      ar: "نسيان ne في الكتابة الرسمية.",
    },
  },
  {
    id: "fr-questions",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Simple questions",
      fr: "Questions simples",
      ar: "أسئلة بسيطة",
    },
    summary: {
      en: "Est-ce que… ? / Intonation / Question words: où, combien, comment.",
      fr: "Est-ce que… ? / Intonation / Mots interrogatifs : où, combien, comment.",
      ar: "Est-ce que… ؟ / أين، كم، كيف.",
    },
    examples: [
      { fr: "Où est la gare ?", gloss: { en: "Where is the station?", fr: "Où est la gare ?", ar: "أين المحطة؟" } },
      { fr: "C'est combien ?", gloss: { en: "How much is it?", fr: "C'est combien ?", ar: "بكم هذا؟" } },
    ],
    commonMistakes: {
      en: "Translating word-for-word from English without French question patterns.",
      fr: "Traduire mot à mot depuis une autre langue.",
      ar: "الترجمة الحرفية من لغة أخرى.",
    },
  },
  {
    id: "fr-politesse",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Politeness: vous / tu",
      fr: "Politesse : vous / tu",
      ar: "الأدب: vous / tu",
    },
    summary: {
      en: "vous = formal or plural; tu = informal singular. Prefer vous with strangers.",
      fr: "vous = formel ou pluriel ; tu = familier. Préférez vous avec les inconnus.",
      ar: "vous رسمي أو جمع؛ tu غير رسمي. فضّل vous مع الغرباء.",
    },
    examples: [
      { fr: "Pouvez-vous m'aider ?", gloss: { en: "Could you help me?", fr: "Pouvez-vous m'aider ?", ar: "هل يمكنكم مساعدتي؟" } },
      { fr: "Tu peux m'aider ?", gloss: { en: "Can you help me? (informal)", fr: "Tu peux m'aider ?", ar: "تقدر تساعدني؟ (غير رسمي)" } },
    ],
    commonMistakes: {
      en: "Using tu with shop staff or officials too quickly.",
      fr: "Utiliser tu trop vite avec le personnel.",
      ar: "استخدام tu بسرعة مع الموظفين.",
    },
  },
  {
    id: "fr-partitif",
    targetLanguage: "fr",
    level: "A2",
    title: {
      en: "Partitive articles (du, de la, de l', des)",
      fr: "Articles partitifs (du, de la, de l', des)",
      ar: "أدوات الكمية (du, de la…)",
    },
    summary: {
      en: "Used for unspecified quantities: Je voudrais du pain.",
      fr: "Pour une quantité non précisée : Je voudrais du pain.",
      ar: "لكمية غير محددة: Je voudrais du pain.",
    },
    examples: [
      { fr: "Je voudrais de l'eau.", gloss: { en: "I would like some water.", fr: "Je voudrais de l'eau.", ar: "أريد بعض الماء." } },
    ],
    commonMistakes: {
      en: "Using le/la when you mean « some ».",
      fr: "Utiliser le/la au lieu du partitif.",
      ar: "استخدام le/la بدل الكمية.",
    },
  },
];
