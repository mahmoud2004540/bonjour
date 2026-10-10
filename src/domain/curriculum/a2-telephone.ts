/** A2 — On the phone */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_PHONE: Scenario = {
  id: "a2-telephone",
  title: { en: "On the phone", fr: "Au téléphone", ar: "على الهاتف" },
  description: {
    en: "Answer and leave a simple message.",
    fr: "Répondre et laisser un message simple.",
    ar: "أجب واترك رسالة بسيطة.",
  },
  level: "A2",
  goals: ["goal-phone-answer", "goal-phone-message"],
  status: "published",
};

export const PHONE_GOALS: LearningGoal[] = [
  {
    id: "goal-phone-answer",
    scenarioId: "a2-telephone",
    title: { en: "Answer the phone", fr: "Répondre au téléphone", ar: "الرد على الهاتف" },
    description: {
      en: "Say hello and ask who is calling.",
      fr: "Dire allô et demander qui appelle.",
      ar: "قل أهلاً واسأل من المتصل.",
    },
    canDoStatement: {
      en: "I can answer a phone call in French.",
      fr: "Je peux répondre au téléphone en français.",
      ar: "أستطيع الرد على مكالمة بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-phone-message",
    scenarioId: "a2-telephone",
    title: { en: "Leave a message", fr: "Laisser un message", ar: "ترك رسالة" },
    description: {
      en: "Leave your name and a short reason for calling.",
      fr: "Laisser son nom et une courte raison d'appel.",
      ar: "اترك اسمك وسبب الاتصال باختصار.",
    },
    canDoStatement: {
      en: "I can leave a short phone message in French.",
      fr: "Je peux laisser un court message téléphonique.",
      ar: "أستطيع ترك رسالة هاتفية قصيرة بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-phone-answer"],
  },
];

export const PHONE_TASKS: Task[] = [
  {
    id: "task-phone-ctx",
    goalId: "goal-phone-answer",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "The phone rings.",
      fr: "Le téléphone sonne.",
      ar: "الهاتف يرن.",
    },
    content: {
      en: "Useful:\n• Allô, bonjour.\n• Qui est à l'appareil ?\n• Un instant, s'il vous plaît.",
      fr: "Utile :\n• Allô, bonjour.\n• Qui est à l'appareil ?\n• Un instant, s'il vous plaît.",
      ar: "مفيد:\n• Allô, bonjour.\n• Qui est à l'appareil ?\n• Un instant, s'il vous plaît.",
    },
  },
  {
    id: "task-phone-prod",
    goalId: "goal-phone-answer",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you answer the phone politely.",
      fr: "Écrivez comment vous répondez poliment.",
      ar: "اكتب كيف ترد بأدب.",
    },
  },
  {
    id: "task-phone-ev",
    goalId: "goal-phone-answer",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you answer the phone in French now?",
      fr: "Pouvez-vous répondre au téléphone maintenant ?",
      ar: "هل تستطيع الرد على الهاتف الآن؟",
    },
  },
  {
    id: "task-msg-ctx",
    goalId: "goal-phone-message",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "The person is not available. You leave a message.",
      fr: "La personne n'est pas disponible. Vous laissez un message.",
      ar: "الشخص غير متاح. تترك رسالة.",
    },
    content: {
      en: "Useful:\n• Je m'appelle…\n• Pouvez-vous lui dire que…\n• Je rappellerai plus tard.",
      fr: "Utile :\n• Je m'appelle…\n• Pouvez-vous lui dire que…\n• Je rappellerai plus tard.",
      ar: "مفيد:\n• Je m'appelle…\n• Pouvez-vous lui dire que…\n• Je rappellerai plus tard.",
    },
  },
  {
    id: "task-msg-prod",
    goalId: "goal-phone-message",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a short message you would leave.",
      fr: "Écrivez un court message.",
      ar: "اكتب رسالة قصيرة.",
    },
  },
  {
    id: "task-msg-ev",
    goalId: "goal-phone-message",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you leave a short phone message in French now?",
      fr: "Pouvez-vous laisser un message maintenant ?",
      ar: "هل تستطيع ترك رسالة الآن؟",
    },
  },
];
