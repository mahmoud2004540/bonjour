/**
 * Placement assessment questions (version 1.1).
 * Collects evidence across dimensions — no invented scores.
 * Blueprint §8: multi-dimension evidence, no pass/fail.
 */

import type { SkillDimension } from "../types";

export interface PlacementQuestion {
  id: string;
  dimension: SkillDimension;
  type: "multiple_choice" | "open";
  prompt: { en: string; fr: string; ar: string };
  options?: { en: string[]; fr: string[]; ar: string[] };
  correctIndex?: number;
}

export const PLACEMENT_VERSION = "v1.1";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  {
    id: "pq-vocab-1",
    dimension: "vocabulary",
    type: "multiple_choice",
    prompt: {
      en: "What does « Bonjour » mean?",
      fr: "Que signifie « Bonjour » ?",
      ar: "ماذا تعني « Bonjour »؟",
    },
    options: {
      en: ["Goodbye", "Hello / Good morning", "Thank you", "Please"],
      fr: ["Au revoir", "Bonjour / Salut", "Merci", "S'il vous plaît"],
      ar: ["وداعًا", "مرحبًا / صباح الخير", "شكرًا", "من فضلك"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-vocab-2",
    dimension: "vocabulary",
    type: "multiple_choice",
    prompt: {
      en: "How do you say « My name is… » in French?",
      fr: "Comment dit-on « Je m'appelle… » ?",
      ar: "كيف تقول « اسمي… » بالفرنسية؟",
    },
    options: {
      en: ["Je suis…", "Je m'appelle…", "J'habite…", "Je viens de…"],
      fr: ["Je suis…", "Je m'appelle…", "J'habite…", "Je viens de…"],
      ar: ["Je suis…", "Je m'appelle…", "J'habite…", "Je viens de…"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-vocab-3",
    dimension: "vocabulary",
    type: "multiple_choice",
    prompt: {
      en: "What does « Merci » mean?",
      fr: "Que signifie « Merci » ?",
      ar: "ماذا تعني « Merci »؟",
    },
    options: {
      en: ["Please", "Hello", "Thank you", "Sorry"],
      fr: ["S'il vous plaît", "Bonjour", "Merci", "Pardon"],
      ar: ["من فضلك", "مرحبًا", "شكرًا", "آسف"],
    },
    correctIndex: 2,
  },
  {
    id: "pq-grammar-1",
    dimension: "grammar",
    type: "multiple_choice",
    prompt: {
      en: "Which is correct?",
      fr: "Quelle est la forme correcte ?",
      ar: "أيها صحيح؟",
    },
    options: {
      en: [
        "Je appeler Marie",
        "Je m'appelle Marie",
        "Je appelle Marie",
        "Moi appeler Marie",
      ],
      fr: [
        "Je appeler Marie",
        "Je m'appelle Marie",
        "Je appelle Marie",
        "Moi appeler Marie",
      ],
      ar: [
        "Je appeler Marie",
        "Je m'appelle Marie",
        "Je appelle Marie",
        "Moi appeler Marie",
      ],
    },
    correctIndex: 1,
  },
  {
    id: "pq-grammar-2",
    dimension: "grammar",
    type: "multiple_choice",
    prompt: {
      en: "Choose the correct article: ___ café (masculine).",
      fr: "Choisissez l'article : ___ café (masculin).",
      ar: "اختر أداة التعريف: ___ café (مذكر).",
    },
    options: {
      en: ["la", "le", "les", "l'"],
      fr: ["la", "le", "les", "l'"],
      ar: ["la", "le", "les", "l'"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-reading-1",
    dimension: "reading",
    type: "multiple_choice",
    prompt: {
      en: "Read: « Je suis de Paris. » What does this mean?",
      fr: "Lisez : « Je suis de Paris. »",
      ar: "اقرأ: « Je suis de Paris. »",
    },
    options: {
      en: ["I live in Paris", "I am from Paris", "I like Paris", "I work in Paris"],
      fr: ["J'habite à Paris", "Je suis de Paris", "J'aime Paris", "Je travaille à Paris"],
      ar: ["أسكن في باريس", "أنا من باريس", "أحب باريس", "أعمل في باريس"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-reading-2",
    dimension: "reading",
    type: "multiple_choice",
    prompt: {
      en: "Read: « Un café, s'il vous plaît. » The speaker wants…",
      fr: "Lisez : « Un café, s'il vous plaît. » La personne veut…",
      ar: "اقرأ: « Un café, s'il vous plaît. » المتحدث يريد…",
    },
    options: {
      en: ["The bill", "A coffee", "Directions", "A table"],
      fr: ["L'addition", "Un café", "Le chemin", "Une table"],
      ar: ["الفاتورة", "قهوة", "الاتجاه", "طاولة"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-listening-1",
    dimension: "listening",
    type: "multiple_choice",
    prompt: {
      en: "(Text stand-in for audio) You hear: « Comment vous appelez-vous ? » What is asked?",
      fr: "(Texte à la place d'un audio) « Comment vous appelez-vous ? »",
      ar: "(نص بدل الصوت) « Comment vous appelez-vous ? »",
    },
    options: {
      en: ["Where are you from?", "What is your name?", "How are you?", "Where do you live?"],
      fr: ["D'où venez-vous ?", "Comment vous appelez-vous ?", "Comment allez-vous ?", "Où habitez-vous ?"],
      ar: ["من أين أنت؟", "ما اسمك؟", "كيف حالك؟", "أين تسكن؟"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-listening-2",
    dimension: "listening",
    type: "multiple_choice",
    prompt: {
      en: "(Text stand-in for audio) You hear: « C'est combien ? » What is asked?",
      fr: "(Texte à la place d'un audio) « C'est combien ? »",
      ar: "(نص بدل الصوت) « C'est combien ? »",
    },
    options: {
      en: ["The time", "The price", "The address", "The name"],
      fr: ["L'heure", "Le prix", "L'adresse", "Le nom"],
      ar: ["الوقت", "السعر", "العنوان", "الاسم"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-open-1",
    dimension: "speaking",
    type: "open",
    prompt: {
      en: "Write how you would introduce yourself in French (even a short sentence).",
      fr: "Écrivez comment vous vous présenteriez en français.",
      ar: "اكتب كيف تقدّم نفسك بالفرنسية (حتى جملة قصيرة).",
    },
  },
  {
    id: "pq-open-2",
    dimension: "speaking",
    type: "open",
    prompt: {
      en: "Write one sentence you could say at a café in French.",
      fr: "Écrivez une phrase que vous pourriez dire dans un café.",
      ar: "اكتب جملة يمكنك قولها في مقهى بالفرنسية.",
    },
  },
];
