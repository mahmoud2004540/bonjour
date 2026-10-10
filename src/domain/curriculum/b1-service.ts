/** B1 — Service / complaint */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_SERVICE: Scenario = {
  id: "b1-service",
  title: {
    en: "A problem with a service",
    fr: "Un problème de service",
    ar: "مشكلة في خدمة",
  },
  description: {
    en: "Explain a simple problem and ask for a solution politely.",
    fr: "Expliquer un problème simple et demander une solution poliment.",
    ar: "اشرح مشكلة بسيطة واطلب حلًا بأدب.",
  },
  level: "B1",
  goals: ["goal-service-explain", "goal-service-request"],
  status: "published",
};

export const SERVICE_GOALS: LearningGoal[] = [
  {
    id: "goal-service-explain",
    scenarioId: "b1-service",
    title: {
      en: "Explain the problem",
      fr: "Expliquer le problème",
      ar: "شرح المشكلة",
    },
    description: {
      en: "Describe what went wrong in clear French.",
      fr: "Décrire ce qui ne va pas en français clair.",
      ar: "صف ما حدث بفرنسية واضحة.",
    },
    canDoStatement: {
      en: "I can explain a simple service problem in French.",
      fr: "Je peux expliquer un problème de service simple.",
      ar: "أستطيع شرح مشكلة خدمة بسيطة بالفرنسية.",
    },
    level: "B1",
    prerequisites: ["goal-work-email"],
  },
  {
    id: "goal-service-request",
    scenarioId: "b1-service",
    title: {
      en: "Ask for a solution",
      fr: "Demander une solution",
      ar: "طلب حل",
    },
    description: {
      en: "Politely ask for a refund, exchange, or help.",
      fr: "Demander poliment un remboursement, un échange ou de l'aide.",
      ar: "اطلب بأدب استردادًا أو استبدالًا أو مساعدة.",
    },
    canDoStatement: {
      en: "I can ask for a solution to a service problem in French.",
      fr: "Je peux demander une solution à un problème de service.",
      ar: "أستطيع طلب حل لمشكلة خدمة بالفرنسية.",
    },
    level: "B1",
    prerequisites: ["goal-service-explain"],
  },
];

export const SERVICE_TASKS: Task[] = [
  {
    id: "task-svc-ctx",
    goalId: "goal-service-explain",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "Something is wrong with an order or a booking.",
      fr: "Il y a un problème avec une commande ou une réservation.",
      ar: "هناك مشكلة في طلب أو حجز.",
    },
    content: {
      en: "Useful:\n• Bonjour, j'ai un problème avec…\n• La commande n'est pas correcte.\n• Ce n'est pas ce que j'avais demandé.",
      fr: "Utile :\n• Bonjour, j'ai un problème avec…\n• La commande n'est pas correcte.\n• Ce n'est pas ce que j'avais demandé.",
      ar: "مفيد:\n• Bonjour, j'ai un problème avec…\n• La commande n'est pas correcte.\n• Ce n'est pas ce que j'avais demandé.",
    },
  },
  {
    id: "task-svc-prod",
    goalId: "goal-service-explain",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you explain the problem.",
      fr: "Écrivez comment vous expliquez le problème.",
      ar: "اكتب كيف تشرح المشكلة.",
    },
  },
  {
    id: "task-svc-ev",
    goalId: "goal-service-explain",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you explain a simple service problem in French now?",
      fr: "Pouvez-vous expliquer un problème de service maintenant ?",
      ar: "هل تستطيع شرح مشكلة خدمة الآن؟",
    },
  },
  {
    id: "task-req-ctx",
    goalId: "goal-service-request",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You want a clear solution.",
      fr: "Vous voulez une solution claire.",
      ar: "تريد حلًا واضحًا.",
    },
    content: {
      en: "Useful:\n• Est-ce que je peux être remboursé(e) ?\n• Pouvez-vous corriger cela, s'il vous plaît ?\n• Merci de votre aide.",
      fr: "Utile :\n• Est-ce que je peux être remboursé(e) ?\n• Pouvez-vous corriger cela, s'il vous plaît ?\n• Merci de votre aide.",
      ar: "مفيد:\n• Est-ce que je peux être remboursé(e) ?\n• Pouvez-vous corriger cela, s'il vous plaît ?\n• Merci de votre aide.",
    },
  },
  {
    id: "task-req-prod",
    goalId: "goal-service-request",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a polite request for a solution.",
      fr: "Écrivez une demande polie de solution.",
      ar: "اكتب طلب حل بأدب.",
    },
  },
  {
    id: "task-req-ev",
    goalId: "goal-service-request",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask for a solution in French now?",
      fr: "Pouvez-vous demander une solution maintenant ?",
      ar: "هل تستطيع طلب حل الآن؟",
    },
  },
];
