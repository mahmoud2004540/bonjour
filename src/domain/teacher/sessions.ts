/**
 * Teacher-style skill sessions — reading, writing, listening, vocab.
 * All content hosted on-site.
 */

export type TeacherTrack = "reading" | "writing" | "listening" | "vocab";

export type TeacherSession = {
  id: string;
  track: TeacherTrack;
  level: "A1" | "A2" | "B1" | "B2";
  order: number;
  title: { en: string; fr: string; ar: string };
  /** Teacher intro line */
  coach: { en: string; fr: string; ar: string };
  /** Main French text to read / listen */
  passage?: string;
  /** Comprehension MCQ */
  questions?: {
    id: string;
    prompt: { en: string; fr: string; ar: string };
    options: { en: string[]; fr: string[]; ar: string[] };
    correctIndex: number;
  }[];
  /** Writing prompt */
  writingPrompt?: { en: string; fr: string; ar: string };
  writingHints?: { en: string[]; fr: string[]; ar: string[] };
  /** Vocab list to memorize */
  words?: { term: string; meaning: { en: string; fr: string; ar: string } }[];
};

export const TEACHER_SESSIONS: TeacherSession[] = [
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
          ar: "ماذا تأخذ أيضًا اليوم؟",
        },
        options: {
          en: ["Tea", "A croissant", "Bread only", "Nothing"],
          fr: ["Un thé", "Un croissant", "Du pain seulement", "Rien"],
          ar: ["شاي", "كرواسون", "خبز فقط", "لا شيء"],
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
      en: "Listen several times, then answer.",
      fr: "Écoutez plusieurs fois, puis répondez.",
      ar: "اسمع أكتر من مرة، بعدين جاوب.",
    },
    passage:
      "Bonjour ! Je m'appelle Karim. Enchanté. Comment vous appellez-vous ? Je suis de Lyon. Au revoir et bonne journée !",
    questions: [
      {
        id: "q1",
        prompt: {
          en: "His name is…",
          fr: "Il s'appelle…",
          ar: "اسمه…",
        },
        options: {
          en: ["Léa", "Karim", "Marc", "Paul"],
          fr: ["Léa", "Karim", "Marc", "Paul"],
          ar: ["Léa", "Karim", "Marc", "Paul"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: {
          en: "He is from…",
          fr: "Il est de…",
          ar: "هو من…",
        },
        options: {
          en: ["Paris", "Lyon", "Marseille", "Nice"],
          fr: ["Paris", "Lyon", "Marseille", "Nice"],
          ar: ["باريس", "ليون", "مارسيليا", "نيس"],
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
      en: "Write 2–4 short French sentences. I will check basic patterns.",
      fr: "Écrivez 2 à 4 phrases simples.",
      ar: "اكتب من جملتين لأربع جمل بسيطة بالفرنسية.",
    },
    writingPrompt: {
      en: "Say hello, your name, where you are from, and goodbye.",
      fr: "Dites bonjour, votre nom, d'où vous êtes, et au revoir.",
      ar: "قل مرحبًا، اسمك، من أين أنت، وإلى اللقاء.",
    },
    writingHints: {
      en: ["Bonjour", "Je m'appelle…", "Je suis de…", "Au revoir"],
      fr: ["Bonjour", "Je m'appelle…", "Je suis de…", "Au revoir"],
      ar: ["Bonjour", "Je m'appelle…", "Je suis de…", "Au revoir"],
    },
  },
  {
    id: "teach-a1-vocab-daily",
    track: "vocab",
    level: "A1",
    order: 4,
    title: {
      en: "Memorize: Daily words",
      fr: "Mémoriser : Mots du quotidien",
      ar: "حفظ: كلمات يومية",
    },
    coach: {
      en: "Look, listen, then recall the meaning.",
      fr: "Regardez, écoutez, puis retrouvez le sens.",
      ar: "شوف، اسمع، بعدين افتكر المعنى.",
    },
    words: [
      { term: "bonjour", meaning: { en: "hello", fr: "salutation", ar: "مرحبًا" } },
      { term: "merci", meaning: { en: "thank you", fr: "remerciement", ar: "شكرًا" } },
      { term: "s'il vous plaît", meaning: { en: "please", fr: "politesse", ar: "من فضلك" } },
      { term: "au revoir", meaning: { en: "goodbye", fr: "salutation de fin", ar: "إلى اللقاء" } },
      { term: "oui", meaning: { en: "yes", fr: "oui", ar: "نعم" } },
      { term: "non", meaning: { en: "no", fr: "non", ar: "لا" } },
      { term: "un café", meaning: { en: "a coffee", fr: "un café", ar: "قهوة" } },
      { term: "l'eau", meaning: { en: "water", fr: "l'eau", ar: "ماء" } },
    ],
  },
  {
    id: "teach-a2-read-weekend",
    track: "reading",
    level: "A2",
    order: 10,
    title: {
      en: "Reading: Last weekend",
      fr: "Lecture : Le week-end dernier",
      ar: "قراءة: عطلة نهاية الأسبوع",
    },
    coach: {
      en: "Read about the past, then answer.",
      fr: "Lisez au passé, puis répondez.",
      ar: "اقرأ عن الماضي، بعدين جاوب.",
    },
    passage:
      "Hier, j'ai visité un musée avec mon ami. Nous avons mangé au restaurant le soir. Le repas était très bon. Après, nous sommes rentrés en métro. J'ai dormi tôt parce que j'étais fatigué.",
    questions: [
      {
        id: "q1",
        prompt: {
          en: "Where did he go?",
          fr: "Où est-il allé ?",
          ar: "أين ذهب؟",
        },
        options: {
          en: ["Beach", "Museum", "School", "Airport"],
          fr: ["Plage", "Musée", "École", "Aéroport"],
          ar: ["شاطئ", "متحف", "مدرسة", "مطار"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: {
          en: "How did they go home?",
          fr: "Comment sont-ils rentrés ?",
          ar: "كيف رجعوا؟",
        },
        options: {
          en: ["By car", "By metro", "On foot", "By plane"],
          fr: ["En voiture", "En métro", "À pied", "En avion"],
          ar: ["بالسيارة", "بالمترو", "مشيًا", "بالطائرة"],
        },
        correctIndex: 1,
      },
    ],
  },
  {
    id: "teach-a2-listen-phone",
    track: "listening",
    level: "A2",
    order: 11,
    title: {
      en: "Listening: On the phone",
      fr: "Écoute : Au téléphone",
      ar: "استماع: على الهاتف",
    },
    coach: {
      en: "Listen to the call, then choose.",
      fr: "Écoutez l'appel, puis choisissez.",
      ar: "اسمع المكالمة، بعدين اختار.",
    },
    passage:
      "Allô ? Oui, bonjour. Je voudrais prendre rendez-vous pour mardi matin, s'il vous plaît. À dix heures ? Parfait. Merci beaucoup. Au revoir !",
    questions: [
      {
        id: "q1",
        prompt: {
          en: "The appointment is for…",
          fr: "Le rendez-vous est pour…",
          ar: "الموعد…",
        },
        options: {
          en: ["Monday evening", "Tuesday morning", "Friday night", "Sunday"],
          fr: ["Lundi soir", "Mardi matin", "Vendredi soir", "Dimanche"],
          ar: ["الاثنين مساءً", "الثلاثاء صباحًا", "الجمعة ليلًا", "الأحد"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: {
          en: "At what time?",
          fr: "À quelle heure ?",
          ar: "في أي ساعة؟",
        },
        options: {
          en: ["8", "9", "10", "11"],
          fr: ["8 heures", "9 heures", "10 heures", "11 heures"],
          ar: ["8", "9", "10", "11"],
        },
        correctIndex: 2,
      },
    ],
  },
  {
    id: "teach-a2-write-past",
    track: "writing",
    level: "A2",
    order: 12,
    title: {
      en: "Writing: Yesterday",
      fr: "Écriture : Hier",
      ar: "كتابة: أمس",
    },
    coach: {
      en: "Write what you did yesterday in simple passé composé.",
      fr: "Écrivez ce que vous avez fait hier.",
      ar: "اكتب ماذا فعلت أمس بجمل بسيطة.",
    },
    writingPrompt: {
      en: "Use: hier, j'ai…, je suis allé(e)…",
      fr: "Utilisez : hier, j'ai…, je suis allé(e)…",
      ar: "استخدم: hier، j'ai…، je suis allé(e)…",
    },
    writingHints: {
      en: ["Hier", "J'ai mangé", "Je suis allé(e)", "Ensuite"],
      fr: ["Hier", "J'ai mangé", "Je suis allé(e)", "Ensuite"],
      ar: ["Hier", "J'ai mangé", "Je suis allé(e)", "Ensuite"],
    },
  },
  {
    id: "teach-a2-vocab-travel",
    track: "vocab",
    level: "A2",
    order: 13,
    title: {
      en: "Memorize: Travel",
      fr: "Mémoriser : Voyage",
      ar: "حفظ: السفر",
    },
    coach: {
      en: "Learn these travel words with your ear and eye.",
      fr: "Apprenez ces mots de voyage.",
      ar: "احفظ كلمات السفر سمعًا ونظرًا.",
    },
    words: [
      { term: "la gare", meaning: { en: "train station", fr: "gare", ar: "محطة القطار" } },
      { term: "un billet", meaning: { en: "a ticket", fr: "billet", ar: "تذكرة" } },
      { term: "le train", meaning: { en: "the train", fr: "train", ar: "قطار" } },
      { term: "l'hôtel", meaning: { en: "the hotel", fr: "hôtel", ar: "الفندق" } },
      { term: "une réservation", meaning: { en: "a booking", fr: "réservation", ar: "حجز" } },
      { term: "tout droit", meaning: { en: "straight ahead", fr: "tout droit", ar: "على طول" } },
    ],
  },
  {
    id: "teach-b1-read-opinion",
    track: "reading",
    level: "B1",
    order: 20,
    title: {
      en: "Reading: An opinion",
      fr: "Lecture : Une opinion",
      ar: "قراءة: رأي",
    },
    coach: {
      en: "Read the opinion text and identify the main idea.",
      fr: "Repérez l'idée principale.",
      ar: "حدد الفكرة الرئيسية.",
    },
    passage:
      "À mon avis, apprendre une langue demande de la régularité. Il ne suffit pas de connaître des listes de mots. Il faut aussi parler, écouter et écrire un peu chaque jour. Cependant, il ne faut pas avoir peur de faire des erreurs. Les erreurs font partie de l'apprentissage.",
    questions: [
      {
        id: "q1",
        prompt: {
          en: "Main idea:",
          fr: "Idée principale :",
          ar: "الفكرة الرئيسية:",
        },
        options: {
          en: [
            "Only vocabulary lists matter",
            "Regular practice of several skills matters",
            "Never write",
            "Errors are forbidden",
          ],
          fr: [
            "Seules les listes comptent",
            "La régularité et plusieurs compétences",
            "Ne jamais écrire",
            "Interdiction d'erreurs",
          ],
          ar: [
            "قوائم الكلمات فقط",
            "الانتظام ومهارات متعددة",
            "لا تكتب أبدًا",
            "الأخطاء ممنوعة",
          ],
        },
        correctIndex: 1,
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
