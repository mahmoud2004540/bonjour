import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_SANTE: Scenario = {
  id: "a1-sante",
  title: {
    en: "At the pharmacy / doctor",
    fr: "Santé — pharmacie et médecin",
    ar: "الصحة — الصيدلية والطبيب",
  },
  description: {
    en: "Say how you feel and ask for simple help.",
    fr: "Dire comment on se sent et demander une aide simple.",
    ar: "قل كيف تشعر واطلب مساعدة بسيطة.",
  },
  level: "A1",
  goals: ["goal-say-symptom", "goal-ask-help-health"],
  status: "published",
};

export const SANTE_GOALS: LearningGoal[] = [
  {
    id: "goal-say-symptom",
    scenarioId: "a1-sante",
    title: {
      en: "Say how you feel",
      fr: "Dire comment on se sent",
      ar: "قول كيف تشعر",
    },
    description: {
      en: "Express a simple symptom (headache, tired, sick).",
      fr: "Exprimer un symptôme simple (mal à la tête, fatigué, malade).",
      ar: "عبّر عن عرض بسيط (صداع، تعب، مرض).",
    },
    canDoStatement: {
      en: "I can say how I feel in simple French.",
      fr: "Je peux dire comment je me sens en français simple.",
      ar: "أستطيع قول كيف أشعر بفرنسية بسيطة.",
    },
    level: "A1",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-ask-help-health",
    scenarioId: "a1-sante",
    title: {
      en: "Ask for help (health)",
      fr: "Demander de l'aide (santé)",
      ar: "طلب مساعدة (صحة)",
    },
    description: {
      en: "Ask for a pharmacy or a doctor.",
      fr: "Demander une pharmacie ou un médecin.",
      ar: "اطلب صيدلية أو طبيبًا.",
    },
    canDoStatement: {
      en: "I can ask for a pharmacy or doctor in French.",
      fr: "Je peux demander une pharmacie ou un médecin en français.",
      ar: "أستطيع طلب صيدلية أو طبيب بالفرنسية.",
    },
    level: "A1",
    prerequisites: ["goal-say-symptom"],
  },
];

export const SANTE_TASKS: Task[] = [
  {
    id: "task-symptom-input",
    goalId: "goal-say-symptom",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You do not feel well. You need to explain simply.",
      fr: "Vous ne vous sentez pas bien. Vous devez l'expliquer simplement.",
      ar: "لا تشعر أنك بخير. تحتاج أن تشرح ذلك ببساطة.",
    },
    content: {
      en: "Useful phrases:\n\n• J'ai mal à la tête.\n• Je suis fatigué(e).\n• Je suis malade.\n• Je ne me sens pas bien.",
      fr: "Phrases utiles :\n\n• J'ai mal à la tête.\n• Je suis fatigué(e).\n• Je suis malade.\n• Je ne me sens pas bien.",
      ar: "عبارات مفيدة:\n\n• J'ai mal à la tête.\n• Je suis fatigué(e).\n• Je suis malade.\n• Je ne me sens pas bien.",
    },
  },
  {
    id: "task-symptom-production",
    goalId: "goal-say-symptom",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write that you have a headache.",
      fr: "Écrivez que vous avez mal à la tête.",
      ar: "اكتب أن لديك صداعًا.",
    },
  },
  {
    id: "task-help-health-input",
    goalId: "goal-ask-help-health",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You need a pharmacy.",
      fr: "Vous avez besoin d'une pharmacie.",
      ar: "تحتاج إلى صيدلية.",
    },
    content: {
      en: "Useful phrases:\n\n• Où est la pharmacie ?\n• Je cherche un médecin.\n• J'ai besoin d'aide, s'il vous plaît.",
      fr: "Phrases utiles :\n\n• Où est la pharmacie ?\n• Je cherche un médecin.\n• J'ai besoin d'aide, s'il vous plaît.",
      ar: "عبارات مفيدة:\n\n• Où est la pharmacie ؟\n• Je cherche un médecin.\n• J'ai besoin d'aide, s'il vous plaît.",
    },
  },
  {
    id: "task-help-health-production",
    goalId: "goal-ask-help-health",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask where the pharmacy is.",
      fr: "Écrivez comment vous demandez où est la pharmacie.",
      ar: "اكتب كيف تسأل أين الصيدلية.",
    },
  },
];
