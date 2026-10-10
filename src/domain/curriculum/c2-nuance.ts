/** C2 — Register, nuance, and precise reformulation */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_NUANCE: Scenario = {
  id: "c2-nuance",
  title: {
    en: "Nuance and register",
    fr: "Nuance et registre",
    ar: "الفروق والمستوى اللغوي",
  },
  description: {
    en: "Choose an appropriate register and rephrase with precision.",
    fr: "Choisir un registre adapté et reformuler avec précision.",
    ar: "اختر مستوى لغويًا مناسبًا وأعد الصياغة بدقة.",
  },
  level: "C2",
  goals: ["goal-register-choose", "goal-reformulate"],
  status: "published",
};

export const NUANCE_GOALS: LearningGoal[] = [
  {
    id: "goal-register-choose",
    scenarioId: "c2-nuance",
    title: {
      en: "Choose the right register",
      fr: "Choisir le bon registre",
      ar: "اختيار المستوى المناسب",
    },
    description: {
      en: "Distinguish formal, neutral, and informal wording in context.",
      fr: "Distinguer le soutenu, le neutre et le familier en contexte.",
      ar: "ميّز بين الرسمي والمحايد والعامي حسب السياق.",
    },
    canDoStatement: {
      en: "I can choose an appropriate register in French.",
      fr: "Je peux choisir un registre adapté en français.",
      ar: "أستطيع اختيار مستوى لغوي مناسب بالفرنسية.",
    },
    level: "C2",
    prerequisites: ["goal-arg-conclude"],
  },
  {
    id: "goal-reformulate",
    scenarioId: "c2-nuance",
    title: {
      en: "Reformulate with precision",
      fr: "Reformuler avec précision",
      ar: "إعادة صياغة دقيقة",
    },
    description: {
      en: "Say the same idea more formally or more softly.",
      fr: "Dire la même idée de façon plus formelle ou plus nuancée.",
      ar: "قل الفكرة نفسها بأسلوب أكثر رسمية أو لطفًا.",
    },
    canDoStatement: {
      en: "I can reformulate an idea with nuance in French.",
      fr: "Je peux reformuler une idée avec nuance en français.",
      ar: "أستطيع إعادة صياغة فكرة بدقة بالفرنسية.",
    },
    level: "C2",
    prerequisites: ["goal-register-choose"],
  },
];

export const NUANCE_TASKS: Task[] = [
  {
    id: "task-reg-ctx",
    goalId: "goal-register-choose",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You write to a public administration vs a close friend.",
      fr: "Vous écrivez à une administration vs un ami proche.",
      ar: "تكتب لإدارة رسمية مقابل صديق مقرب.",
    },
    content: {
      en: "Compare:\n• Formal: Je vous serais reconnaissant de…\n• Neutral: Pourriez-vous… ?\n• Informal: Tu peux… ?",
      fr: "Comparer :\n• Soutenu : Je vous serais reconnaissant de…\n• Neutre : Pourriez-vous… ?\n• Familier : Tu peux… ?",
      ar: "قارن:\n• رسمي: Je vous serais reconnaissant de…\n• محايد: Pourriez-vous… ?\n• عامي: Tu peux… ؟",
    },
  },
  {
    id: "task-reg-und",
    goalId: "goal-register-choose",
    type: "understanding",
    title: { en: "Understanding", fr: "Compréhension", ar: "الفهم" },
    prompt: {
      en: "« Je vous prie de bien vouloir… » is mainly…",
      fr: "« Je vous prie de bien vouloir… » est surtout…",
      ar: "« Je vous prie de bien vouloir… » في الأساس…",
    },
    content: {
      en: "Very formal / administrative register.",
      fr: "Registre très formel / administratif.",
      ar: "مستوى رسمي جدًا / إداري.",
    },
  },
  {
    id: "task-reg-prod",
    goalId: "goal-register-choose",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write one formal request to an office (2 sentences max).",
      fr: "Écrivez une demande formelle à un service (2 phrases max).",
      ar: "اكتب طلبًا رسميًا لمصلحة (جملتان كحد أقصى).",
    },
  },
  {
    id: "task-reg-ev",
    goalId: "goal-register-choose",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you choose an appropriate register in French now?",
      fr: "Pouvez-vous choisir un registre adapté maintenant ?",
      ar: "هل تستطيع اختيار مستوى لغوي مناسب الآن؟",
    },
  },
  {
    id: "task-ref-ctx",
    goalId: "goal-reformulate",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Soften a direct statement without changing the meaning.",
      fr: "Adoucir une affirmation directe sans changer le sens.",
      ar: "لطّف جملة مباشرة دون تغيير المعنى.",
    },
    content: {
      en: "Examples:\n• Direct: C'est faux.\n• Softer: Il me semble que ce n'est pas exact.\n• Direct: Vous devez venir.\n• Softer: Il serait préférable que vous veniez.",
      fr: "Exemples :\n• Direct : C'est faux.\n• Plus doux : Il me semble que ce n'est pas exact.\n• Direct : Vous devez venir.\n• Plus doux : Il serait préférable que vous veniez.",
      ar: "أمثلة:\n• مباشر: C'est faux.\n• ألطف: Il me semble que ce n'est pas exact.\n• مباشر: Vous devez venir.\n• ألطف: Il serait préférable que vous veniez.",
    },
  },
  {
    id: "task-ref-prod",
    goalId: "goal-reformulate",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Reformulate more softly: « Vous devez envoyer le dossier demain. »",
      fr: "Reformulez plus doucement : « Vous devez envoyer le dossier demain. »",
      ar: "أعد صياغة ألطف: « Vous devez envoyer le dossier demain. »",
    },
  },
  {
    id: "task-ref-ev",
    goalId: "goal-reformulate",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you reformulate with nuance in French now?",
      fr: "Pouvez-vous reformuler avec nuance maintenant ?",
      ar: "هل تستطيع إعادة الصياغة بدقة الآن؟",
    },
  },
];
