/**
 * Placement assessment questions (version 1).
 * Collects evidence across dimensions — no invented scores.
 */

import type { SkillDimension } from "../types";

export interface PlacementQuestion {
  id: string;
  dimension: SkillDimension;
  type: "multiple_choice" | "open";
  prompt: {
    en: string;
    fr: string;
    ar: string;
  };
  options?: {
    en: string[];
    fr: string[];
    ar: string[];
  };
  correctIndex?: number; // for multiple choice only
}

export const PLACEMENT_VERSION = "v1.0";

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
      fr: "Comment dit-on « Je m'appelle… » en français ?",
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
    id: "pq-grammar-1",
    dimension: "grammar",
    type: "multiple_choice",
    prompt: {
      en: "Which is correct?",
      fr: "Quelle est la forme correcte ?",
      ar: "أيها صحيح؟",
    },
    options: {
      en: ["Je appeler Marie", "Je m'appelle Marie", "Je appelle Marie", "Moi appeler Marie"],
      fr: ["Je appeler Marie", "Je m'appelle Marie", "Je appelle Marie", "Moi appeler Marie"],
      ar: ["Je appeler Marie", "Je m'appelle Marie", "Je appelle Marie", "Moi appeler Marie"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-reading-1",
    dimension: "reading",
    type: "multiple_choice",
    prompt: {
      en: "Read: « Je suis de Paris. » What does this mean?",
      fr: "Lisez : « Je suis de Paris. » Que signifie cette phrase ?",
      ar: "اقرأ: « Je suis de Paris. » ماذا تعني؟",
    },
    options: {
      en: ["I live in Paris", "I am from Paris", "I like Paris", "I work in Paris"],
      fr: ["J'habite à Paris", "Je suis de Paris", "J'aime Paris", "Je travaille à Paris"],
      ar: ["أسكن في باريس", "أنا من باريس", "أحب باريس", "أعمل في باريس"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-listening-1",
    dimension: "listening",
    type: "multiple_choice",
    prompt: {
      en: "(Text simulation of audio) You hear: « Comment vous appelez-vous ? » What is the person asking?",
      fr: "(Simulation texte d'audio) Vous entendez : « Comment vous appelez-vous ? » Que demande la personne ?",
      ar: "(محاكاة نصية لصوت) تسمع: « Comment vous appelez-vous ? » ماذا يسأل الشخص؟",
    },
    options: {
      en: ["Where are you from?", "What is your name?", "How are you?", "Where do you live?"],
      fr: ["D'où venez-vous ?", "Comment vous appelez-vous ?", "Comment allez-vous ?", "Où habitez-vous ?"],
      ar: ["من أين أنت؟", "ما اسمك؟", "كيف حالك؟", "أين تسكن؟"],
    },
    correctIndex: 1,
  },
  {
    id: "pq-open-1",
    dimension: "speaking",
    type: "open",
    prompt: {
      en: "Write (or type) how you would introduce yourself in French.",
      fr: "Écrivez comment vous vous présenteriez en français.",
      ar: "اكتب كيف ستقدّم نفسك بالفرنسية.",
    },
  },
];
