/** B2 — Express and support an opinion */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_OPINION: Scenario = {
  id: "b2-opinion",
  title: {
    en: "Sharing an opinion",
    fr: "Donner son avis",
    ar: "إبداء رأي",
  },
  description: {
    en: "State a clear opinion and give one reason, in a formal or neutral register.",
    fr: "Exprimer un avis clair et donner une raison, en registre neutre ou formel.",
    ar: "عبّر عن رأي واضح مع سبب، بأسلوب محايد أو رسمي.",
  },
  level: "B2",
  goals: ["goal-opinion-state", "goal-opinion-justify"],
  status: "published",
};

export const OPINION_GOALS: LearningGoal[] = [
  {
    id: "goal-opinion-state",
    scenarioId: "b2-opinion",
    title: {
      en: "State an opinion",
      fr: "Exprimer un avis",
      ar: "التعبير عن رأي",
    },
    description: {
      en: "Use phrases like « Je pense que… » or « À mon avis… ».",
      fr: "Utiliser « Je pense que… » ou « À mon avis… ».",
      ar: "استخدم « Je pense que… » أو « À mon avis… ».",
    },
    canDoStatement: {
      en: "I can state a clear opinion in French.",
      fr: "Je peux exprimer un avis clair en français.",
      ar: "أستطيع التعبير عن رأي واضح بالفرنسية.",
    },
    level: "B2",
    prerequisites: ["goal-service-request"],
  },
  {
    id: "goal-opinion-justify",
    scenarioId: "b2-opinion",
    title: {
      en: "Justify with a reason",
      fr: "Justifier avec une raison",
      ar: "التبرير بسبب",
    },
    description: {
      en: "Add because / car / parce que + a concrete reason.",
      fr: "Ajouter car / parce que + une raison concrète.",
      ar: "أضف car / parce que + سبب واضح.",
    },
    canDoStatement: {
      en: "I can justify an opinion with one clear reason in French.",
      fr: "Je peux justifier un avis avec une raison claire.",
      ar: "أستطيع تبرير رأي بسبب واضح بالفرنسية.",
    },
    level: "B2",
    prerequisites: ["goal-opinion-state"],
  },
];

export const OPINION_TASKS: Task[] = [
  {
    id: "task-op-ctx",
    goalId: "goal-opinion-state",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Someone asks what you think about working from home.",
      fr: "On vous demande ce que vous pensez du télétravail.",
      ar: "يسألك أحدهم رأيك في العمل عن بُعد.",
    },
    content: {
      en: "Useful:\n• À mon avis,…\n• Je pense que…\n• Je trouve que…\n• Selon moi,…",
      fr: "Utile :\n• À mon avis,…\n• Je pense que…\n• Je trouve que…\n• Selon moi,…",
      ar: "مفيد:\n• À mon avis,…\n• Je pense que…\n• Je trouve que…\n• Selon moi,…",
    },
  },
  {
    id: "task-op-und",
    goalId: "goal-opinion-state",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "« À mon avis, c'est une bonne idée. » expresses…",
      fr: "« À mon avis, c'est une bonne idée. » exprime…",
      ar: "« À mon avis, c'est une bonne idée. » تعبّر عن…",
    },
    content: {
      en: "A personal opinion (not a proven fact).",
      fr: "Un avis personnel (pas un fait prouvé).",
      ar: "رأي شخصي (وليس حقيقة مثبتة).",
    },
  },
  {
    id: "task-op-prod",
    goalId: "goal-opinion-state",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write one sentence stating your opinion on remote work.",
      fr: "Écrivez une phrase pour donner votre avis sur le télétravail.",
      ar: "اكتب جملة تعبّر عن رأيك في العمل عن بُعد.",
    },
  },
  {
    id: "task-op-ev",
    goalId: "goal-opinion-state",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you state a clear opinion in French now?",
      fr: "Pouvez-vous exprimer un avis clair maintenant ?",
      ar: "هل تستطيع التعبير عن رأي واضح الآن؟",
    },
  },
  {
    id: "task-ju-ctx",
    goalId: "goal-opinion-justify",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Add a reason after your opinion.",
      fr: "Ajoutez une raison après votre avis.",
      ar: "أضف سببًا بعد رأيك.",
    },
    content: {
      en: "Useful:\n• … parce que…\n• … car…\n• … en effet…",
      fr: "Utile :\n• … parce que…\n• … car…\n• … en effet…",
      ar: "مفيد:\n• … parce que…\n• … car…\n• … en effet…",
    },
  },
  {
    id: "task-ju-prod",
    goalId: "goal-opinion-justify",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write opinion + one reason (parce que / car).",
      fr: "Écrivez avis + une raison (parce que / car).",
      ar: "اكتب رأيًا + سببًا (parce que / car).",
    },
  },
  {
    id: "task-ju-ev",
    goalId: "goal-opinion-justify",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you justify an opinion with one reason in French now?",
      fr: "Pouvez-vous justifier un avis avec une raison maintenant ?",
      ar: "هل تستطيع تبرير رأي بسبب الآن؟",
    },
  },
];
