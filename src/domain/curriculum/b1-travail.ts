/** B1 — At work: simple professional exchange */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_TRAVAIL: Scenario = {
  id: "b1-travail",
  title: {
    en: "At work",
    fr: "Au travail",
    ar: "في العمل",
  },
  description: {
    en: "Handle a simple professional email and a short meeting request.",
    fr: "Gérer un e-mail professionnel simple et une demande de réunion.",
    ar: "تعامل مع بريد مهني بسيط وطلب اجتماع قصير.",
  },
  level: "B1",
  goals: ["goal-work-email", "goal-work-meeting"],
  status: "published",
};

export const TRAVAIL_GOALS: LearningGoal[] = [
  {
    id: "goal-work-email",
    scenarioId: "b1-travail",
    title: {
      en: "Write a short work email",
      fr: "Écrire un court e-mail pro",
      ar: "كتابة بريد عمل قصير",
    },
    description: {
      en: "Write a polite professional message with greeting, purpose, and closing.",
      fr: "Rédiger un message poli avec formule, objet et conclusion.",
      ar: "اكتب رسالة مهذبة مع تحية وهدف وختام.",
    },
    canDoStatement: {
      en: "I can write a short professional email in French.",
      fr: "Je peux écrire un court e-mail professionnel en français.",
      ar: "أستطيع كتابة بريد مهني قصير بالفرنسية.",
    },
    level: "B1",
    prerequisites: ["goal-rdv-confirm"],
  },
  {
    id: "goal-work-meeting",
    scenarioId: "b1-travail",
    title: {
      en: "Propose a meeting",
      fr: "Proposer une réunion",
      ar: "اقتراح اجتماع",
    },
    description: {
      en: "Suggest a day and time for a short work meeting.",
      fr: "Proposer un jour et une heure pour une réunion courte.",
      ar: "اقترح يومًا ووقتًا لاجتماع عمل قصير.",
    },
    canDoStatement: {
      en: "I can propose a work meeting in French.",
      fr: "Je peux proposer une réunion de travail en français.",
      ar: "أستطيع اقتراح اجتماع عمل بالفرنسية.",
    },
    level: "B1",
    prerequisites: ["goal-work-email"],
  },
];

export const TRAVAIL_TASKS: Task[] = [
  {
    id: "task-email-ctx",
    goalId: "goal-work-email",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You need to write to a colleague about a document.",
      fr: "Vous devez écrire à un collègue à propos d'un document.",
      ar: "تحتاج الكتابة لزميل عن مستند.",
    },
    content: {
      en: "Useful structure:\n• Bonjour Madame / Monsieur…\n• Je vous écris concernant…\n• Pourriez-vous… ?\n• Cordialement,",
      fr: "Structure utile :\n• Bonjour Madame / Monsieur…\n• Je vous écris concernant…\n• Pourriez-vous… ?\n• Cordialement,",
      ar: "هيكل مفيد:\n• Bonjour Madame / Monsieur…\n• Je vous écris concernant…\n• Pourriez-vous… ?\n• Cordialement,",
    },
  },
  {
    id: "task-email-prod",
    goalId: "goal-work-email",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a short polite email asking for a document.",
      fr: "Écrivez un court e-mail poli pour demander un document.",
      ar: "اكتب بريدًا مهذبًا قصيرًا تطلب فيه مستندًا.",
    },
  },
  {
    id: "task-email-ev",
    goalId: "goal-work-email",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you write a short work email in French now?",
      fr: "Pouvez-vous écrire un court e-mail pro maintenant ?",
      ar: "هل تستطيع كتابة بريد عمل قصير الآن؟",
    },
  },
  {
    id: "task-meet-ctx",
    goalId: "goal-work-meeting",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You want a short meeting next week.",
      fr: "Vous voulez une courte réunion la semaine prochaine.",
      ar: "تريد اجتماعًا قصيرًا الأسبوع القادم.",
    },
    content: {
      en: "Useful:\n• Seriez-vous disponible mardi après-midi ?\n• On pourrait se voir jeudi à 14 heures.\n• Merci de me confirmer.",
      fr: "Utile :\n• Seriez-vous disponible mardi après-midi ?\n• On pourrait se voir jeudi à 14 heures.\n• Merci de me confirmer.",
      ar: "مفيد:\n• Seriez-vous disponible mardi après-midi ?\n• On pourrait se voir jeudi à 14 heures.\n• Merci de me confirmer.",
    },
  },
  {
    id: "task-meet-prod",
    goalId: "goal-work-meeting",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Propose a day and time for a meeting.",
      fr: "Proposez un jour et une heure de réunion.",
      ar: "اقترح يومًا ووقتًا للاجتماع.",
    },
  },
  {
    id: "task-meet-ev",
    goalId: "goal-work-meeting",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you propose a work meeting in French now?",
      fr: "Pouvez-vous proposer une réunion maintenant ?",
      ar: "هل تستطيع اقتراح اجتماع الآن؟",
    },
  },
];
