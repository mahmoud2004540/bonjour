/** A2 — At the hotel */
import type { Scenario, LearningGoal, Task } from "../types";

export const SCENARIO_HOTEL: Scenario = {
  id: "a2-hotel",
  title: { en: "At the hotel", fr: "À l'hôtel", ar: "في الفندق" },
  description: {
    en: "Check in and ask about breakfast.",
    fr: "S'enregistrer et demander le petit-déjeuner.",
    ar: "سجّل الوصول واسأل عن الإفطار.",
  },
  level: "A2",
  goals: ["goal-hotel-checkin", "goal-hotel-breakfast"],
  status: "published",
};

export const HOTEL_GOALS: LearningGoal[] = [
  {
    id: "goal-hotel-checkin",
    scenarioId: "a2-hotel",
    title: { en: "Check in", fr: "S'enregistrer", ar: "تسجيل الوصول" },
    description: {
      en: "Give your name and reservation at reception.",
      fr: "Donner son nom et sa réservation à la réception.",
      ar: "أبلغ عن اسمك والحجز في الاستقبال.",
    },
    canDoStatement: {
      en: "I can check in at a hotel in French.",
      fr: "Je peux m'enregistrer à l'hôtel en français.",
      ar: "أستطيع تسجيل الوصول في فندق بالفرنسية.",
    },
    level: "A2",
    prerequisites: ["goal-introduce-self"],
  },
  {
    id: "goal-hotel-breakfast",
    scenarioId: "a2-hotel",
    title: { en: "Ask about breakfast", fr: "Demander le petit-déjeuner", ar: "السؤال عن الإفطار" },
    description: {
      en: "Ask if breakfast is included and the times.",
      fr: "Demander si le petit-déjeuner est inclus et les horaires.",
      ar: "اسأل إن كان الإفطار مشمولًا ومواعيده.",
    },
    canDoStatement: {
      en: "I can ask about breakfast at a hotel.",
      fr: "Je peux demander le petit-déjeuner à l'hôtel.",
      ar: "أستطيع السؤال عن الإفطار في الفندق.",
    },
    level: "A2",
    prerequisites: ["goal-hotel-checkin"],
  },
];

export const HOTEL_TASKS: Task[] = [
  {
    id: "task-hotel-ctx",
    goalId: "goal-hotel-checkin",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You arrive at the hotel reception.",
      fr: "Vous arrivez à la réception de l'hôtel.",
      ar: "وصلت إلى استقبال الفندق.",
    },
    content: {
      en: "Useful:\n• Bonjour, j'ai une réservation au nom de…\n• Une chambre pour deux nuits.\n• Voici mon passeport.",
      fr: "Utile :\n• Bonjour, j'ai une réservation au nom de…\n• Une chambre pour deux nuits.\n• Voici mon passeport.",
      ar: "مفيد:\n• Bonjour, j'ai une réservation au nom de…\n• Une chambre pour deux nuits.\n• Voici mon passeport.",
    },
  },
  {
    id: "task-hotel-prod",
    goalId: "goal-hotel-checkin",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write what you say to check in.",
      fr: "Écrivez ce que vous dites pour vous enregistrer.",
      ar: "اكتب ما تقوله لتسجيل الوصول.",
    },
  },
  {
    id: "task-hotel-ev",
    goalId: "goal-hotel-checkin",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you check in at a hotel in French now?",
      fr: "Pouvez-vous vous enregistrer maintenant ?",
      ar: "هل تستطيع تسجيل الوصول الآن؟",
    },
  },
  {
    id: "task-bf-ctx",
    goalId: "goal-hotel-breakfast",
    type: "input",
    title: { en: "Context", fr: "Contexte", ar: "السياق" },
    prompt: {
      en: "You want to know about breakfast.",
      fr: "Vous voulez des informations sur le petit-déjeuner.",
      ar: "تريد معرفة معلومات عن الإفطار.",
    },
    content: {
      en: "Useful:\n• Le petit-déjeuner est inclus ?\n• À quelle heure ?\n• De 7 heures à 10 heures.",
      fr: "Utile :\n• Le petit-déjeuner est inclus ?\n• À quelle heure ?",
      ar: "مفيد:\n• Le petit-déjeuner est inclus ?\n• À quelle heure ?",
    },
  },
  {
    id: "task-bf-prod",
    goalId: "goal-hotel-breakfast",
    type: "supported",
    title: { en: "Your turn", fr: "À vous", ar: "دورك" },
    prompt: {
      en: "Write a question about breakfast.",
      fr: "Écrivez une question sur le petit-déjeuner.",
      ar: "اكتب سؤالًا عن الإفطار.",
    },
  },
  {
    id: "task-bf-ev",
    goalId: "goal-hotel-breakfast",
    type: "evidence",
    title: { en: "Evidence", fr: "Preuve", ar: "الدليل" },
    prompt: {
      en: "Can you ask about breakfast in French now?",
      fr: "Pouvez-vous demander le petit-déjeuner maintenant ?",
      ar: "هل تستطيع السؤال عن الإفطار الآن؟",
    },
  },
];
