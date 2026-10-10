import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_LOGEMENT: Scenario = {
  id: "a1-logement",
  title: {
    en: "Housing",
    fr: "Le logement",
    ar: "السكن",
  },
  description: {
    en: "Talk about where you live in simple terms.",
    fr: "Parler de son logement de façon simple.",
    ar: "تحدّث عن سكنك بعبارات بسيطة.",
  },
  level: "A1",
  goals: ["goal-say-address-type", "goal-describe-home-basic"],
  status: "published",
};

export const LOGEMENT_GOALS: LearningGoal[] = [
  {
    id: "goal-say-address-type",
    scenarioId: "a1-logement",
    title: {
      en: "Say where you live",
      fr: "Dire où l'on habite",
      ar: "قول أين تسكن",
    },
    description: {
      en: "Say you live in a city or neighbourhood.",
      fr: "Dire que l'on habite dans une ville ou un quartier.",
      ar: "قل إنك تسكن في مدينة أو حي.",
    },
    canDoStatement: {
      en: "I can say where I live in French.",
      fr: "Je peux dire où j'habite en français.",
      ar: "أستطيع أن أقول أين أسكن بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-say-origin"],
  },
  {
    id: "goal-describe-home-basic",
    scenarioId: "a1-logement",
    title: {
      en: "Describe your home simply",
      fr: "Décrire son logement simplement",
      ar: "وصف السكن باختصار",
    },
    description: {
      en: "Say apartment or house, and a simple detail.",
      fr: "Dire appartement ou maison, avec un détail simple.",
      ar: "قل شقة أو منزل مع تفصيلة بسيطة.",
    },
    canDoStatement: {
      en: "I can describe my home in simple French.",
      fr: "Je peux décrire mon logement simplement en français.",
      ar: "أستطيع وصف سكني بعربية فرنسية بسيطة.",
    },
    level: "A1",
    prerequisites: ["goal-say-address-type"],
  },
];

export const LOGEMENT_TASKS: Task[] = [
  {
    id: "task-live-input",
    goalId: "goal-say-address-type",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Someone asks where you live.",
      fr: "Quelqu'un vous demande où vous habitez.",
      ar: "شخص يسألك أين تسكن.",
    },
    content: {
      en: "Useful phrases:\n\n• J'habite à Paris.\n• J'habite près de la gare.\n• J'habite dans le centre.",
      fr: "Phrases utiles :\n\n• J'habite à Paris.\n• J'habite près de la gare.\n• J'habite dans le centre.",
      ar: "عبارات مفيدة:\n\n• J'habite à Paris.\n• J'habite près de la gare.\n• J'habite dans le centre.",
    },
  },
  {
    id: "task-live-production",
    goalId: "goal-say-address-type",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write where you live in French.",
      fr: "Écrivez où vous habitez en français.",
      ar: "اكتب أين تسكن بالفرنسية.",
    },
  },
  {
    id: "task-home-input",
    goalId: "goal-describe-home-basic",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Describe your home in one simple sentence.",
      fr: "Décrivez votre logement en une phrase simple.",
      ar: "صف سكنك بجملة بسيطة.",
    },
    content: {
      en: "Useful phrases:\n\n• J'habite dans un appartement.\n• J'habite dans une maison.\n• C'est un petit appartement.",
      fr: "Phrases utiles :\n\n• J'habite dans un appartement.\n• J'habite dans une maison.\n• C'est un petit appartement.",
      ar: "عبارات مفيدة:\n\n• J'habite dans un appartement.\n• J'habite dans une maison.\n• C'est un petit appartement.",
    },
  },
  {
    id: "task-home-production",
    goalId: "goal-describe-home-basic",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write one sentence about your home.",
      fr: "Écrivez une phrase sur votre logement.",
      ar: "اكتب جملة واحدة عن سكنك.",
    },
  },
];
