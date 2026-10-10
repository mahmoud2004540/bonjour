/** C1 — Structured short argument */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_ARGUMENT: Scenario = {
  id: "c1-argument",
  title: {
    en: "A short structured argument",
    fr: "Un court argument structuré",
    ar: "حجة قصيرة منظمة",
  },
  description: {
    en: "Present a position, one argument, and a brief conclusion.",
    fr: "Présenter une position, un argument et une brève conclusion.",
    ar: "قدّم موقفًا وحجة وخاتمة قصيرة.",
  },
  level: "C1",
  goals: ["goal-arg-structure", "goal-arg-conclude"],
  status: "published",
};

export const ARGUMENT_GOALS: LearningGoal[] = [
  {
    id: "goal-arg-structure",
    scenarioId: "c1-argument",
    title: {
      en: "Structure the argument",
      fr: "Structurer l'argument",
      ar: "تنظيم الحجة",
    },
    description: {
      en: "Use connectors: d'abord, ensuite, cependant.",
      fr: "Utiliser : d'abord, ensuite, cependant.",
      ar: "استخدم: d'abord, ensuite, cependant.",
    },
    canDoStatement: {
      en: "I can structure a short argument in French.",
      fr: "Je peux structurer un court argument en français.",
      ar: "أستطيع تنظيم حجة قصيرة بالفرنسية.",
    },
    level: "C1",
    prerequisites: ["goal-opinion-justify"],
  },
  {
    id: "goal-arg-conclude",
    scenarioId: "c1-argument",
    title: {
      en: "Conclude clearly",
      fr: "Conclure clairement",
      ar: "خاتمة واضحة",
    },
    description: {
      en: "Close with « En conclusion… » or « Pour conclure… ».",
      fr: "Terminer par « En conclusion… » ou « Pour conclure… ».",
      ar: "اختم بـ « En conclusion… » أو « Pour conclure… ».",
    },
    canDoStatement: {
      en: "I can conclude a short argument in French.",
      fr: "Je peux conclure un court argument en français.",
      ar: "أستطيع ختم حجة قصيرة بالفرنسية.",
    },
    level: "C1",
    prerequisites: ["goal-arg-structure"],
  },
];

export const ARGUMENT_TASKS: Task[] = [
  {
    id: "task-arg-ctx",
    goalId: "goal-arg-structure",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Write a short structured view on learning languages online.",
      fr: "Présentez un point de vue structuré sur l'apprentissage en ligne.",
      ar: "قدّم وجهة نظر منظمة عن التعلّم عبر الإنترنت.",
    },
    content: {
      en: "Useful connectors:\n• D'abord…\n• Ensuite…\n• Cependant…\n• De plus…",
      fr: "Connecteurs :\n• D'abord…\n• Ensuite…\n• Cependant…\n• De plus…",
      ar: "روابط:\n• D'abord…\n• Ensuite…\n• Cependant…\n• De plus…",
    },
  },
  {
    id: "task-arg-prod",
    goalId: "goal-arg-structure",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write 3–4 sentences with d'abord / ensuite / cependant.",
      fr: "Écrivez 3–4 phrases avec d'abord / ensuite / cependant.",
      ar: "اكتب 3–4 جمل باستخدام d'abord / ensuite / cependant.",
    },
  },
  {
    id: "task-arg-ev",
    goalId: "goal-arg-structure",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you structure a short argument in French now?",
      fr: "Pouvez-vous structurer un court argument maintenant ?",
      ar: "هل تستطيع تنظيم حجة قصيرة الآن؟",
    },
  },
  {
    id: "task-conc-ctx",
    goalId: "goal-arg-conclude",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Close your text with a clear conclusion.",
      fr: "Terminez par une conclusion claire.",
      ar: "اختم بخاتمة واضحة.",
    },
    content: {
      en: "Useful:\n• En conclusion,…\n• Pour conclure,…\n• Ainsi,…",
      fr: "Utile :\n• En conclusion,…\n• Pour conclure,…\n• Ainsi,…",
      ar: "مفيد:\n• En conclusion,…\n• Pour conclure,…\n• Ainsi,…",
    },
  },
  {
    id: "task-conc-prod",
    goalId: "goal-arg-conclude",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write one concluding sentence.",
      fr: "Écrivez une phrase de conclusion.",
      ar: "اكتب جملة خاتمة.",
    },
  },
  {
    id: "task-conc-ev",
    goalId: "goal-arg-conclude",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you conclude a short argument in French now?",
      fr: "Pouvez-vous conclure un court argument maintenant ?",
      ar: "هل تستطيع ختم حجة قصيرة الآن؟",
    },
  },
];
