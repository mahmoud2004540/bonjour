/**
 * A1 Scenario: Faire connaissance (Getting to know someone)
 * Published curriculum content — versioned and deterministic.
 */

import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_FAIRE_CONNAISSANCE: Scenario = {
  id: "a1-faire-connaissance",
  title: {
    en: "Getting to know someone",
    fr: "Faire connaissance",
    ar: "التعارف",
  },
  description: {
    en: "Introduce yourself and exchange basic personal information in French.",
    fr: "Se présenter et échanger des informations personnelles de base en français.",
    ar: "قدّم نفسك وتبادل معلومات شخصية أساسية بالفرنسية.",
  },
  level: "A1",
  goals: [
    "goal-introduce-self",
    "goal-ask-name",
    "goal-say-origin",
    "goal-ask-origin",
  ],
  status: "published",
};

export const GOALS: LearningGoal[] = [
  {
    id: "goal-introduce-self",
    scenarioId: "a1-faire-connaissance",
    title: {
      en: "Introduce yourself",
      fr: "Se présenter",
      ar: "تقديم النفس",
    },
    description: {
      en: "Say your name and give basic personal information.",
      fr: "Dire son nom et donner des informations personnelles de base.",
      ar: "قل اسمك وأعطِ معلومات شخصية أساسية.",
    },
    canDoStatement: {
      en: "I can introduce myself in French.",
      fr: "Je peux me présenter en français.",
      ar: "أستطيع تقديم نفسي بالفرنسية.",
    },
    level: "A1",
    prerequisites: [],
  },
  {
    id: "goal-ask-name",
    scenarioId: "a1-faire-connaissance",
    title: {
      en: "Ask someone's name",
      fr: "Demander le nom de quelqu'un",
      ar: "السؤال عن الاسم",
    },
    description: {
      en: "Ask a person their name politely.",
      fr: "Demander poliment le nom d'une personne.",
      ar: "اسأل شخصًا عن اسمه بأدب.",
    },
    canDoStatement: {
      en: "I can ask someone their name in French.",
      fr: "Je peux demander le nom de quelqu'un en français.",
      ar: "أستطيع أن أسأل شخصًا عن اسمه بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-say-origin",
    scenarioId: "a1-faire-connaissance",
    title: {
      en: "Say where you are from",
      fr: "Dire d'où l'on vient",
      ar: "قول من أين أنت",
    },
    description: {
      en: "State your country or city of origin.",
      fr: "Indiquer son pays ou sa ville d'origine.",
      ar: "اذكر بلدك أو مدينتك الأصلية.",
    },
    canDoStatement: {
      en: "I can say where I am from in French.",
      fr: "Je peux dire d'où je viens en français.",
      ar: "أستطيع أن أقول من أين أنا بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-ask-origin",
    scenarioId: "a1-faire-connaissance",
    title: {
      en: "Ask where someone is from",
      fr: "Demander d'où vient quelqu'un",
      ar: "السؤال عن الأصل",
    },
    description: {
      en: "Ask a person about their origin.",
      fr: "Demander à une personne d'où elle vient.",
      ar: "اسأل شخصًا من أين هو.",
    },
    canDoStatement: {
      en: "I can ask where someone is from in French.",
      fr: "Je peux demander d'où vient quelqu'un en français.",
      ar: "أستطيع أن أسأل شخصًا من أين هو بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-say-origin", "goal-ask-name"],
  },
];

export const TASKS: Task[] = [
  // Goal: Introduce yourself
  {
    id: "task-intro-context",
    goalId: "goal-introduce-self",
    type: "input",
    title: {
      en: "Context",
      fr: "Contexte",
      ar: "السياق",
    },
    prompt: {
      en: "You meet someone for the first time. You want to introduce yourself.",
      fr: "Vous rencontrez quelqu'un pour la première fois. Vous voulez vous présenter.",
      ar: "تلتقي بشخص لأول مرة. تريد تقديم نفسك.",
    },
    content: {
      en: "In French, a simple and common way to introduce yourself is:\n\n• Bonjour, je m'appelle [your name].\n• Je suis [your name].",
      fr: "En français, une façon simple et courante de se présenter est :\n\n• Bonjour, je m'appelle [votre nom].\n• Je suis [votre nom].",
      ar: "بالفرنسية، طريقة بسيطة وشائعة لتقديم نفسك:\n\n• Bonjour, je m'appelle [اسمك].\n• Je suis [اسمك].",
    },
  },
  {
    id: "task-intro-understanding",
    goalId: "goal-introduce-self",
    type: "understanding",
    title: {
      en: "Understanding",
      fr: "Compréhension",
      ar: "الفهم",
    },
    prompt: {
      en: "What does « Je m'appelle Marie » mean?",
      fr: "Que signifie « Je m'appelle Marie » ?",
      ar: "ماذا تعني « Je m'appelle Marie »؟",
    },
    content: {
      en: "My name is Marie",
      fr: "Je m'appelle Marie",
      ar: "اسمي ماري",
    },
  },
  {
    id: "task-intro-controlled",
    goalId: "goal-introduce-self",
    type: "controlled",
    title: {
      en: "Practice",
      fr: "Entraînement",
      ar: "تدريب",
    },
    prompt: {
      en: "Complete: Bonjour, je m'_______ Ahmed.",
      fr: "Complétez : Bonjour, je m'_______ Ahmed.",
      ar: "أكمل: Bonjour, je m'_______ Ahmed.",
    },
  },
  {
    id: "task-intro-production",
    goalId: "goal-introduce-self",
    type: "supported",
    title: {
      en: "Your turn",
      fr: "À vous",
      ar: "دورك",
    },
    prompt: {
      en: "Write how you would introduce yourself in French.",
      fr: "Écrivez comment vous vous présenteriez en français.",
      ar: "اكتب كيف ستقدّم نفسك بالفرنسية.",
    },
    expectedEvidence: "Learner produces a self-introduction using je m'appelle or je suis.",
  },
  {
    id: "task-intro-evidence",
    goalId: "goal-introduce-self",
    type: "evidence",
    title: {
      en: "Evidence",
      fr: "Preuve",
      ar: "الدليل",
    },
    prompt: {
      en: "Can you introduce yourself in French right now?",
      fr: "Pouvez-vous vous présenter en français maintenant ?",
      ar: "هل تستطيع تقديم نفسك بالفرنسية الآن؟",
    },
  },

  // Goal: Ask name
  {
    id: "task-askname-input",
    goalId: "goal-ask-name",
    type: "input",
    title: {
      en: "Context",
      fr: "Contexte",
      ar: "السياق",
    },
    prompt: {
      en: "You want to know the other person's name.",
      fr: "Vous voulez connaître le nom de l'autre personne.",
      ar: "تريد معرفة اسم الشخص الآخر.",
    },
    content: {
      en: "Useful phrases:\n\n• Comment vous appelez-vous ? (formal)\n• Tu t'appelles comment ? (informal)\n• Et vous ? / Et toi ?",
      fr: "Phrases utiles :\n\n• Comment vous appelez-vous ? (soutenu)\n• Tu t'appelles comment ? (familier)\n• Et vous ? / Et toi ?",
      ar: "عبارات مفيدة:\n\n• Comment vous appelez-vous ؟ (رسمي)\n• Tu t'appelles comment ؟ (غير رسمي)\n• Et vous ؟ / Et toi ؟",
    },
  },
  {
    id: "task-askname-production",
    goalId: "goal-ask-name",
    type: "supported",
    title: {
      en: "Your turn",
      fr: "À vous",
      ar: "دورك",
    },
    prompt: {
      en: "Write a polite question to ask someone's name.",
      fr: "Écrivez une question polie pour demander le nom de quelqu'un.",
      ar: "اكتب سؤالاً مهذبًا لتسأل عن اسم شخص.",
    },
    expectedEvidence: "Learner produces Comment vous appelez-vous or similar.",
  },

  // Goal: Say origin
  {
    id: "task-origin-input",
    goalId: "goal-say-origin",
    type: "input",
    title: {
      en: "Context",
      fr: "Contexte",
      ar: "السياق",
    },
    prompt: {
      en: "Someone asks where you are from.",
      fr: "Quelqu'un vous demande d'où vous venez.",
      ar: "شخص يسألك من أين أنت.",
    },
    content: {
      en: "Useful phrases:\n\n• Je suis de [country/city].\n• Je viens de [country/city].\n• J'habite à [city].",
      fr: "Phrases utiles :\n\n• Je suis de [pays/ville].\n• Je viens de [pays/ville].\n• J'habite à [ville].",
      ar: "عبارات مفيدة:\n\n• Je suis de [البلد/المدينة].\n• Je viens de [البلد/المدينة].\n• J'habite à [المدينة].",
    },
  },
  {
    id: "task-origin-production",
    goalId: "goal-say-origin",
    type: "supported",
    title: {
      en: "Your turn",
      fr: "À vous",
      ar: "دورك",
    },
    prompt: {
      en: "Write where you are from in French.",
      fr: "Écrivez d'où vous venez en français.",
      ar: "اكتب من أين أنت بالفرنسية.",
    },
    expectedEvidence: "Learner produces Je suis de / Je viens de + place.",
  },

  // Goal: Ask origin
  {
    id: "task-askorigin-input",
    goalId: "goal-ask-origin",
    type: "input",
    title: {
      en: "Context",
      fr: "Contexte",
      ar: "السياق",
    },
    prompt: {
      en: "You want to know where the other person is from.",
      fr: "Vous voulez savoir d'où vient l'autre personne.",
      ar: "تريد معرفة من أين الشخص الآخر.",
    },
    content: {
      en: "Useful phrases:\n\n• Vous êtes d'où ?\n• Tu es d'où ?\n• D'où venez-vous ? / D'où viens-tu ?",
      fr: "Phrases utiles :\n\n• Vous êtes d'où ?\n• Tu es d'où ?\n• D'où venez-vous ? / D'où viens-tu ?",
      ar: "عبارات مفيدة:\n\n• Vous êtes d'où ؟\n• Tu es d'où ؟\n• D'où venez-vous ؟ / D'où viens-tu ؟",
    },
  },
  {
    id: "task-askorigin-production",
    goalId: "goal-ask-origin",
    type: "supported",
    title: {
      en: "Your turn",
      fr: "À vous",
      ar: "دورك",
    },
    prompt: {
      en: "Write a question to ask where someone is from.",
      fr: "Écrivez une question pour demander d'où vient quelqu'un.",
      ar: "اكتب سؤالاً لتسأل شخصًا من أين هو.",
    },
    expectedEvidence: "Learner produces Vous êtes d'où / D'où venez-vous or similar.",
  },
];

export function getGoalById(id: string): LearningGoal | undefined {
  return GOALS.find((g) => g.id === id);
}

export function getTasksForGoal(goalId: string): Task[] {
  return TASKS.filter((t) => t.goalId === goalId);
}

export function getAllPublishedScenarios(): Scenario[] {
  return [SCENARIO_FAIRE_CONNAISSANCE];
}
