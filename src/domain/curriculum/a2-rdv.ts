/** A2 — Make an appointment */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_RDV: Scenario = {
  id: "a2-rdv",
  title: {
    en: "Making an appointment",
    fr: "Prendre rendez-vous",
    ar: "حجز موعد",
  },
  description: {
    en: "Book a simple appointment by phone or in person.",
    fr: "Prendre un rendez-vous simple par téléphone ou en personne.",
    ar: "احجز موعدًا بسيطًا هاتفيًا أو حضوريًا.",
  },
  level: "A2",
  goals: ["goal-rdv-book", "goal-rdv-confirm"],
  status: "published",
};

export const RDV_GOALS: LearningGoal[] = [
  {
    id: "goal-rdv-book",
    scenarioId: "a2-rdv",
    title: {
      en: "Book an appointment",
      fr: "Prendre un rendez-vous",
      ar: "حجز موعد",
    },
    description: {
      en: "Ask for an available day and time.",
      fr: "Demander un jour et une heure disponibles.",
      ar: "اسأل عن يوم ووقت متاحين.",
    },
    canDoStatement: {
      en: "I can book a simple appointment in French.",
      fr: "Je peux prendre un rendez-vous simple en français.",
      ar: "أستطيع حجز موعد بسيط بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-phone-answer"],
  },
  {
    id: "goal-rdv-confirm",
    scenarioId: "a2-rdv",
    title: {
      en: "Confirm the time",
      fr: "Confirmer l'horaire",
      ar: "تأكيد الموعد",
    },
    description: {
      en: "Repeat and confirm the day and time.",
      fr: "Répéter et confirmer le jour et l'heure.",
      ar: "أعد و أكّد اليوم والوقت.",
    },
    canDoStatement: {
      en: "I can confirm an appointment time in French.",
      fr: "Je peux confirmer un horaire de rendez-vous.",
      ar: "أستطيع تأكيد موعد بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-rdv-book"],
  },
];

export const RDV_TASKS: Task[] = [
  {
    id: "task-rdv-ctx",
    goalId: "goal-rdv-book",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You call a clinic or an office to book a time.",
      fr: "Vous téléphonez pour prendre un rendez-vous.",
      ar: "تتصل لحجز موعد.",
    },
    content: {
      en: "Useful:\n• Bonjour, je voudrais prendre rendez-vous.\n• Vous avez un créneau cette semaine ?\n• Mardi à 10 heures, c'est possible ?",
      fr: "Utile :\n• Bonjour, je voudrais prendre rendez-vous.\n• Vous avez un créneau cette semaine ?\n• Mardi à 10 heures, c'est possible ?",
      ar: "مفيد:\n• Bonjour, je voudrais prendre rendez-vous.\n• Vous avez un créneau cette semaine ?\n• Mardi à 10 heures, c'est possible ?",
    },
  },
  {
    id: "task-rdv-prod",
    goalId: "goal-rdv-book",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you ask for an appointment.",
      fr: "Écrivez comment vous demandez un rendez-vous.",
      ar: "اكتب كيف تطلب موعدًا.",
    },
  },
  {
    id: "task-rdv-ev",
    goalId: "goal-rdv-book",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you book a simple appointment in French now?",
      fr: "Pouvez-vous prendre un rendez-vous maintenant ?",
      ar: "هل تستطيع حجز موعد الآن؟",
    },
  },
  {
    id: "task-conf-ctx",
    goalId: "goal-rdv-confirm",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "They propose a time. You confirm.",
      fr: "On vous propose un horaire. Vous confirmez.",
      ar: "يقترحون وقتًا. تؤكد.",
    },
    content: {
      en: "Useful:\n• D'accord, mardi à 10 heures.\n• C'est noté, merci.\n• À mardi alors.",
      fr: "Utile :\n• D'accord, mardi à 10 heures.\n• C'est noté, merci.\n• À mardi alors.",
      ar: "مفيد:\n• D'accord, mardi à 10 heures.\n• C'est noté, merci.\n• À mardi alors.",
    },
  },
  {
    id: "task-conf-prod",
    goalId: "goal-rdv-confirm",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write how you confirm Tuesday at 10.",
      fr: "Écrivez comment vous confirmez mardi à 10 heures.",
      ar: "اكتب كيف تؤكد الثلاثاء الساعة 10.",
    },
  },
  {
    id: "task-conf-ev",
    goalId: "goal-rdv-confirm",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you confirm an appointment time in French now?",
      fr: "Pouvez-vous confirmer un horaire maintenant ?",
      ar: "هل تستطيع تأكيد موعد الآن؟",
    },
  },
];
