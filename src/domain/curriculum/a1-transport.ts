import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_TRANSPORT: Scenario = {
  id: "a1-transport",
  title: {
    en: "Getting around",
    fr: "Se déplacer",
    ar: "التنقّل",
  },
  description: {
    en: "Ask for directions and talk about simple transport.",
    fr: "Demander son chemin et parler de transports simples.",
    ar: "اسأل عن الطريق وتحدّث عن مواصلات بسيطة.",
  },
  level: "A1",
  goals: ["goal-ask-direction", "goal-say-destination"],
  status: "published",
};

export const TRANSPORT_GOALS: LearningGoal[] = [
  {
    id: "goal-ask-direction",
    scenarioId: "a1-transport",
    title: {
      en: "Ask for directions",
      fr: "Demander son chemin",
      ar: "السؤال عن الاتجاه",
    },
    description: {
      en: "Ask where a place is.",
      fr: "Demander où se trouve un lieu.",
      ar: "اسأل أين يقع مكان ما.",
    },
    canDoStatement: {
      en: "I can ask where a place is in French.",
      fr: "Je peux demander où se trouve un lieu en français.",
      ar: "أستطيع السؤال عن موقع مكان بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-say-destination",
    scenarioId: "a1-transport",
    title: {
      en: "Say where you are going",
      fr: "Dire où l'on va",
      ar: "قول إلى أين تذهب",
    },
    description: {
      en: "State a simple destination.",
      fr: "Indiquer une destination simple.",
      ar: "اذكر وجهة بسيطة.",
    },
    canDoStatement: {
      en: "I can say where I am going in French.",
      fr: "Je peux dire où je vais en français.",
      ar: "أستطيع أن أقول إلى أين أذهب بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-ask-direction"],
  },
];

export const TRANSPORT_TASKS: Task[] = [
  {
    id: "task-dir-input",
    goalId: "goal-ask-direction",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You are looking for the station.",
      fr: "Vous cherchez la gare.",
      ar: "تبحث عن المحطة.",
    },
    content: {
      en: "Useful phrases:\n\n• Où est la gare ?\n• Excusez-moi, où est le métro ?\n• C'est où, la pharmacie ?",
      fr: "Phrases utiles :\n\n• Où est la gare ?\n• Excusez-moi, où est le métro ?\n• C'est où, la pharmacie ?",
      ar: "عبارات مفيدة:\n\n• Où est la gare ؟\n• Excusez-moi, où est le métro ؟\n• C'est où, la pharmacie ؟",
    },
  },
  {
    id: "task-dir-production",
    goalId: "goal-ask-direction",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask where the station is.",
      fr: "Écrivez comment vous demandez où est la gare.",
      ar: "اكتب كيف تسأل أين المحطة.",
    },
  },
  {
    id: "task-dir-evidence",
    goalId: "goal-ask-direction",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask where a place is in French?",
      fr: "Pouvez-vous demander où se trouve un lieu en français ?",
      ar: "هل تستطيع السؤال عن موقع مكان بالفرنسية؟",
    },
  },
  {
    id: "task-dest-input",
    goalId: "goal-say-destination",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Someone asks where you are going.",
      fr: "Quelqu'un vous demande où vous allez.",
      ar: "شخص يسألك إلى أين تذهب.",
    },
    content: {
      en: "Useful phrases:\n\n• Je vais à la gare.\n• Je vais au travail.\n• Je rentre à la maison.",
      fr: "Phrases utiles :\n\n• Je vais à la gare.\n• Je vais au travail.\n• Je rentre à la maison.",
      ar: "عبارات مفيدة:\n\n• Je vais à la gare.\n• Je vais au travail.\n• Je rentre à la maison.",
    },
  },
  {
    id: "task-dest-production",
    goalId: "goal-say-destination",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write that you are going home.",
      fr: "Écrivez que vous rentrez à la maison.",
      ar: "اكتب أنك عائد إلى المنزل.",
    },
  },
];
