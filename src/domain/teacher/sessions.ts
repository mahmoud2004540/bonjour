/**
 * Teacher-style skill sessions — reading, writing, listening, vocab.
 * All content hosted on-site.
 */

import { EXTRA_VOCAB_SESSIONS } from "./vocab-sessions";

export type TeacherTrack = "reading" | "writing" | "listening" | "vocab";

export type TeacherSession = {
  id: string;
  track: TeacherTrack;
  level: "A1" | "A2" | "B1" | "B2";
  order: number;
  title: { en: string; fr: string; ar: string };
  coach: { en: string; fr: string; ar: string };
  passage?: string;
  questions?: {
    id: string;
    prompt: { en: string; fr: string; ar: string };
    options: { en: string[]; fr: string[]; ar: string[] };
    correctIndex: number;
  }[];
  writingPrompt?: { en: string; fr: string; ar: string };
  writingHints?: { en: string[]; fr: string[]; ar: string[] };
  words?: { term: string; meaning: { en: string; fr: string; ar: string } }[];
};

/** Core skill sessions (reading / writing / listening + small legacy vocab) */
const CORE_SESSIONS: TeacherSession[] = [
  {
    id: "teach-a1-read-cafe",
    track: "reading",
    level: "A1",
    order: 1,
    title: {
      en: "Reading: At the café",
      fr: "Lecture : Au café",
      ar: "قراءة: في المقهى",
    },
    coach: {
      en: "Read the short text carefully, then answer.",
      fr: "Lisez le texte, puis répondez.",
      ar: "اقرأ النص بهدوء، بعدين جاوب.",
    },
    passage:
      "Bonjour ! Je m'appelle Léa. Tous les matins, je prends un café au café du coin. Le serveur s'appelle Marc. Un café coûte deux euros. Aujourd'hui, je prends aussi un croissant. Merci !",
    questions: [
      {
        id: "q1",
        prompt: {
          en: "What is the woman's name?",
          fr: "Comment s'appelle la femme ?",
          ar: "ما اسم المرأة؟",
        },
        options: {
          en: ["Marc", "Léa", "Sara", "Nour"],
          fr: ["Marc", "Léa", "Sara", "Nour"],
          ar: ["Marc", "Léa", "Sara", "Nour"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: {
          en: "How much is a coffee?",
          fr: "Combien coûte un café ?",
          ar: "بكم القهوة؟",
        },
        options: {
          en: ["1 euro", "2 euros", "3 euros", "5 euros"],
          fr: ["1 euro", "2 euros", "3 euros", "5 euros"],
          ar: ["1 يورو", "2 يورو", "3 يورو", "5 يورو"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: {
          en: "What else does she take today?",
          fr: "Que prend-elle aussi ?",
          ar: "بتاخد إيه كمان النهاردة؟",
        },
        options: {
          en: ["Tea", "A croissant", "Water only", "Nothing"],
          fr: ["Thé", "Un croissant", "Eau seulement", "Rien"],
          ar: ["شاي", "كرواسون", "ميه بس", "ولا حاجة"],
        },
        correctIndex: 1,
      },
    ],
  },
  {
    id: "teach-a1-listen-greet",
    track: "listening",
    level: "A1",
    order: 2,
    title: {
      en: "Listening: Greetings",
      fr: "Écoute : Salutations",
      ar: "استماع: التحيات",
    },
    coach: {
      en: "Use the play button, then answer.",
      fr: "Écoutez, puis répondez.",
      ar: "اسمع، بعدين جاوب.",
    },
    passage:
      "Bonjour ! Je m'appelle Ahmed. Enchanté. Comment ça va ? Ça va bien, merci. Et vous ?",
    questions: [
      {
        id: "lq1",
        prompt: {
          en: "His name is…",
          fr: "Il s'appelle…",
          ar: "اسمه…",
        },
        options: {
          en: ["Marc", "Ahmed", "Léa", "Paul"],
          fr: ["Marc", "Ahmed", "Léa", "Paul"],
          ar: ["Marc", "Ahmed", "Léa", "Paul"],
        },
        correctIndex: 1,
      },
      {
        id: "lq2",
        prompt: {
          en: "How is he?",
          fr: "Comment va-t-il ?",
          ar: "هو عامل إيه؟",
        },
        options: {
          en: ["Bad", "Fine", "Angry", "Sick"],
          fr: ["Mal", "Bien", "En colère", "Malade"],
          ar: ["وحش", "كويس", "زعلان", "تعبان"],
        },
        correctIndex: 1,
      },
    ],
  },
  {
    id: "teach-a1-write-intro",
    track: "writing",
    level: "A1",
    order: 3,
    title: {
      en: "Writing: Introduce yourself",
      fr: "Écriture : Se présenter",
      ar: "كتابة: قدّم نفسك",
    },
    coach: {
      en: "Write 3–4 short sentences about yourself.",
      fr: "Écrivez 3 ou 4 phrases.",
      ar: "اكتب 3–4 جمل عن نفسك.",
    },
    writingPrompt: {
      en: "Write your name, where you live, and one thing you like.",
      fr: "Nom, ville, une chose que vous aimez.",
      ar: "اسمك، سكنك، وحاجة بتحبها.",
    },
    writingHints: {
      en: ["Je m'appelle…", "J'habite…", "J'aime…"],
      fr: ["Je m'appelle…", "J'habite…", "J'aime…"],
      ar: ["Je m'appelle…", "J'habite…", "J'aime…"],
    },
  },
  {
    id: "teach-a2-read-weekend",
    track: "reading",
    level: "A2",
    order: 10,
    title: {
      en: "Reading: Weekend",
      fr: "Lecture : Week-end",
      ar: "قراءة: نهاية الأسبوع",
    },
    coach: {
      en: "Read, then answer about the past weekend.",
      fr: "Lisez le récit au passé.",
      ar: "اقرأ عن نهاية الأسبوع الماضية.",
    },
    passage:
      "Samedi, j'ai visité un musée avec des amis. Nous sommes restés trois heures. Dimanche, j'ai regardé un film et j'ai dormi tôt. C'était calme et agréable.",
    questions: [
      {
        id: "a2r1",
        prompt: {
          en: "What did they visit?",
          fr: "Qu'ont-ils visité ?",
          ar: "زاروا إيه؟",
        },
        options: {
          en: ["A museum", "A cinema only", "A hospital", "A station"],
          fr: ["Un musée", "Un cinéma seulement", "Un hôpital", "Une gare"],
          ar: ["متحف", "سينما بس", "مستشفى", "محطة"],
        },
        correctIndex: 0,
      },
      {
        id: "a2r2",
        prompt: {
          en: "Sunday was…",
          fr: "Dimanche était…",
          ar: "الأحد كان…",
        },
        options: {
          en: ["Calm", "Very noisy", "At work only", "Cancelled"],
          fr: ["Calme", "Très bruyant", "Au travail seulement", "Annulé"],
          ar: ["هادي", "دوشة أوي", "شغل بس", "متلغي"],
        },
        correctIndex: 0,
      },
    ],
  },
  {
    id: "teach-b1-write-opinion",
    track: "writing",
    level: "B1",
    order: 21,
    title: {
      en: "Writing: Your opinion",
      fr: "Écriture : Votre avis",
      ar: "كتابة: رأيك",
    },
    coach: {
      en: "Write a short structured opinion (3–5 sentences).",
      fr: "Écrivez un avis court et structuré.",
      ar: "اكتب رأيًا قصيرًا منظمًا.",
    },
    writingPrompt: {
      en: "Do you prefer studying alone or with a group? Why?",
      fr: "Préférez-vous étudier seul ou en groupe ? Pourquoi ?",
      ar: "تفضل الدراسة وحدك أم في مجموعة؟ لماذا؟",
    },
    writingHints: {
      en: ["À mon avis", "Parce que", "Cependant", "En conclusion"],
      fr: ["À mon avis", "Parce que", "Cependant", "En conclusion"],
      ar: ["À mon avis", "Parce que", "Cependant", "En conclusion"],
    },
  },
];

export const TEACHER_SESSIONS: TeacherSession[] = [
  ...CORE_SESSIONS,
  ...EXTRA_VOCAB_SESSIONS,
];

export function getAllTeacherSessions(): TeacherSession[] {
  return [...TEACHER_SESSIONS].sort((a, b) => a.order - b.order);
}

export function getTeacherSession(id: string): TeacherSession | undefined {
  return TEACHER_SESSIONS.find((s) => s.id === id);
}

export function getSessionsByTrack(track: TeacherTrack): TeacherSession[] {
  return TEACHER_SESSIONS.filter((s) => s.track === track).sort(
    (a, b) => a.order - b.order
  );
}
