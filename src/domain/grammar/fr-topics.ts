/** French grammar reference — concise, level-tagged */

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
      {
        fr: "le café",
        gloss: { en: "the coffee", fr: "le café", ar: "القهوة" },
      },
      {
        fr: "la gare",
        gloss: { en: "the station", fr: "la gare", ar: "المحطة" },
      },
      {
        fr: "l'eau",
        gloss: { en: "the water", fr: "l'eau", ar: "الماء" },
      },
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
      {
        fr: "Je suis de Paris.",
        gloss: { en: "I am from Paris.", fr: "Je suis de Paris.", ar: "أنا من باريس." },
      },
      {
        fr: "J'ai un rendez-vous.",
        gloss: { en: "I have an appointment.", fr: "J'ai un rendez-vous.", ar: "لدي موعد." },
      },
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
      {
        fr: "Je ne comprends pas.",
        gloss: { en: "I do not understand.", fr: "Je ne comprends pas.", ar: "لا أفهم." },
      },
    ],
    commonMistakes: {
      en: "Forgetting ne in writing: « Je parle pas » is informal speech, not standard written French.",
      fr: "Oublier ne à l'écrit.",
      ar: "نسيان ne في الكتابة الرسمية.",
    },
  },
];
