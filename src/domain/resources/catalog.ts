/**
 * Curated external educational & audio resources.
 * Only real, reputable FLE sources. No invented links or hosted fake audio.
 * Bonjour does not claim ownership of external content.
 */

import type { CefrLevel } from "../types";

export type ResourceKind = "platform" | "audio" | "video" | "exercises" | "reference";

export interface LearningResource {
  id: string;
  title: { en: string; fr: string; ar: string };
  description: { en: string; fr: string; ar: string };
  levels: CefrLevel[];
  kind: ResourceKind;
  /** Real public URL — verified institutional sources only */
  url: string;
  provider: string;
  /** True when the destination includes spoken French / audio-video */
  hasAudio: boolean;
  free: boolean;
}

export const RESOURCES: LearningResource[] = [
  // ── Platforms ──────────────────────────────────────────
  {
    id: "tv5-apprendre",
    title: {
      en: "TV5MONDE — Learn French",
      fr: "TV5MONDE — Apprendre le français",
      ar: "TV5MONDE — تعلّم الفرنسية",
    },
    description: {
      en: "Thousands of free video-based exercises from authentic TV content. Levels A1–B2+.",
      fr: "Des milliers d'exercices gratuits à partir de vidéos authentiques. Niveaux A1–B2+.",
      ar: "آلاف التمارين المجانية من محتوى تلفزيوني حقيقي. مستويات A1–B2+.",
    },
    levels: ["A1", "A2", "B1", "B2", "C1"],
    kind: "platform",
    url: "https://apprendre.tv5monde.com/",
    provider: "TV5MONDE",
    hasAudio: true,
    free: true,
  },
  {
    id: "tv5-premiere-classe",
    title: {
      en: "TV5MONDE — Première classe (beginners)",
      fr: "TV5MONDE — Première classe (débutants)",
      ar: "TV5MONDE — المستوى الأول للمبتدئين",
    },
    description: {
      en: "~500 free exercises for absolute beginners: greetings, housing, shopping, work.",
      fr: "Environ 500 exercices gratuits pour grands débutants : salutations, logement, courses…",
      ar: "حوالي 500 تمرين مجاني للمبتدئين تمامًا: تحية، سكن، تسوّق…",
    },
    levels: ["A1"],
    kind: "exercises",
    url: "https://apprendre.tv5monde.com/fr/exercices/premiere-classe",
    provider: "TV5MONDE",
    hasAudio: true,
    free: true,
  },
  {
    id: "tv5-a1",
    title: {
      en: "TV5MONDE exercises — A1",
      fr: "Exercices TV5MONDE — A1",
      ar: "تمارين TV5MONDE — A1",
    },
    description: {
      en: "Graded video exercises at A1 (vocabulary, grammar, pronunciation, culture).",
      fr: "Exercices vidéo progressifs niveau A1 (vocabulaire, grammaire, prononciation).",
      ar: "تمارين فيديو متدرجة مستوى A1 (مفردات، قواعد، نطق).",
    },
    levels: ["A1"],
    kind: "exercises",
    url: "https://apprendre.tv5monde.com/fr/exercices/a1-debutant",
    provider: "TV5MONDE",
    hasAudio: true,
    free: true,
  },
  {
    id: "tv5-enseigner",
    title: {
      en: "TV5MONDE — Teaching French (fiches)",
      fr: "TV5MONDE — Enseigner le français",
      ar: "TV5MONDE — تعليم الفرنسية",
    },
    description: {
      en: "Free pedagogical sheets with video for all levels including C1–C2 (adults).",
      fr: "Fiches pédagogiques gratuites avec vidéo, tous niveaux y compris C1–C2.",
      ar: "بطاقات تعليمية مجانية مع فيديو لكل المستويات بما فيها C1–C2.",
    },
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    kind: "platform",
    url: "https://enseigner.tv5monde.com/",
    provider: "TV5MONDE",
    hasAudio: true,
    free: true,
  },
  {
    id: "rfi-francais-facile",
    title: {
      en: "RFI — Le français facile",
      fr: "RFI — Le français facile",
      ar: "RFI — الفرنسية الميسّرة",
    },
    description: {
      en: "Official RFI site: slow news, podcasts, exercises and transcripts for learners.",
      fr: "Site officiel RFI : actualité ralentie, podcasts, exercices et transcriptions.",
      ar: "موقع RFI الرسمي: أخبار بطيئة، بودكاست، تمارين ونصوص.",
    },
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    kind: "platform",
    url: "https://francaisfacile.rfi.fr/",
    provider: "RFI",
    hasAudio: true,
    free: true,
  },
  {
    id: "rfi-journal",
    title: {
      en: "RFI — Journal en français facile",
      fr: "RFI — Journal en français facile",
      ar: "RFI — نشرة بالفرنسية الميسّرة",
    },
    description: {
      en: "Daily ~10 min international news in clearer French, with transcript and exercises.",
      fr: "Journal quotidien ~10 min en français accessible, avec transcription et exercices.",
      ar: "نشرة يومية ~10 دقائق بفرنسية أوضح، مع نص وتمارين.",
    },
    levels: ["A2", "B1", "B2"],
    kind: "audio",
    url: "https://francaisfacile.rfi.fr/",
    provider: "RFI",
    hasAudio: true,
    free: true,
  },
  {
    id: "rfi-savoirs",
    title: {
      en: "RFI Savoirs",
      fr: "RFI Savoirs",
      ar: "RFI Savoirs",
    },
    description: {
      en: "Learning resources and pedagogical materials from Radio France Internationale.",
      fr: "Ressources d'apprentissage et supports pédagogiques de RFI.",
      ar: "موارد تعلّم ومواد تعليمية من إذاعة فرنسا الدولية.",
    },
    levels: ["A1", "A2", "B1", "B2", "C1"],
    kind: "platform",
    url: "https://savoirs.rfi.fr/",
    provider: "RFI",
    hasAudio: true,
    free: true,
  },
  // ── Level-oriented audio / listening ───────────────────
  {
    id: "coffee-break-french",
    title: {
      en: "Coffee Break French",
      fr: "Coffee Break French",
      ar: "Coffee Break French",
    },
    description: {
      en: "Structured audio lessons for beginners and elementary learners (podcast).",
      fr: "Leçons audio structurées pour débutants et élémentaires (podcast).",
      ar: "دروس صوتية منظمة للمبتدئين والمستوى الابتدائي (بودكاست).",
    },
    levels: ["A1", "A2"],
    kind: "audio",
    url: "https://coffeebreaklanguages.com/coffeebreakfrench/",
    provider: "Coffee Break Languages",
    hasAudio: true,
    free: true,
  },
  {
    id: "innerfrench",
    title: {
      en: "InnerFrench",
      fr: "InnerFrench",
      ar: "InnerFrench",
    },
    description: {
      en: "Intermediate podcast on culture and society — clear, natural spoken French.",
      fr: "Podcast intermédiaire sur la culture et la société — français oral clair et naturel.",
      ar: "بودكاست للمستوى المتوسط عن الثقافة والمجتمع — فرنسية محكية واضحة.",
    },
    levels: ["B1", "B2"],
    kind: "audio",
    url: "https://innerfrench.com/",
    provider: "InnerFrench",
    hasAudio: true,
    free: true,
  },
  {
    id: "francais-authentique",
    title: {
      en: "Français Authentique",
      fr: "Français Authentique",
      ar: "Français Authentique",
    },
    description: {
      en: "Natural spoken French for intermediate learners (podcast + community).",
      fr: "Français oral naturel pour intermédiaires (podcast + communauté).",
      ar: "فرنسية محكية طبيعية للمستوى المتوسط (بودكاست).",
    },
    levels: ["B1", "B2"],
    kind: "audio",
    url: "https://www.francaisauthentique.com/",
    provider: "Français Authentique",
    hasAudio: true,
    free: true,
  },
  {
    id: "easy-french",
    title: {
      en: "Easy French (YouTube)",
      fr: "Easy French (YouTube)",
      ar: "Easy French (يوتيوب)",
    },
    description: {
      en: "Street interviews with subtitles — real conversational French.",
      fr: "Interviews de rue sous-titrées — français conversationnel réel.",
      ar: "مقابلات في الشارع مع ترجمة — فرنسية حوارية حقيقية.",
    },
    levels: ["A2", "B1", "B2"],
    kind: "video",
    url: "https://www.youtube.com/@EasyFrench",
    provider: "Easy Languages",
    hasAudio: true,
    free: true,
  },
  // ── Reference & grammar ────────────────────────────────
  {
    id: "point-du-fle",
    title: {
      en: "Le Point du FLE",
      fr: "Le Point du FLE",
      ar: "Le Point du FLE",
    },
    description: {
      en: "Large directory of free FLE links: grammar, listening, writing, vocabulary.",
      fr: "Grand répertoire de liens FLE gratuits : grammaire, oral, écrit, vocabulaire.",
      ar: "دليل كبير لروابط FLE مجانية: قواعد، استماع، كتابة، مفردات.",
    },
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    kind: "reference",
    url: "https://www.lepointdufle.net/",
    provider: "Le Point du FLE",
    hasAudio: false,
    free: true,
  },
  {
    id: "francais-facile-com",
    title: {
      en: "Français Facile (exercises)",
      fr: "Français Facile (exercices)",
      ar: "Français Facile (تمارين)",
    },
    description: {
      en: "Free grammar, conjugation and vocabulary practice.",
      fr: "Grammaire, conjugaison et vocabulaire en exercices gratuits.",
      ar: "تمارين مجانية في القواعد والتصريف والمفردات.",
    },
    levels: ["A1", "A2", "B1", "B2"],
    kind: "exercises",
    url: "https://www.francaisfacile.com/",
    provider: "Français Facile",
    hasAudio: false,
    free: true,
  },
  {
    id: "mauril",
    title: {
      en: "Mauril (Radio-Canada)",
      fr: "Mauril (Radio-Canada)",
      ar: "Mauril (راديو كندا)",
    },
    description: {
      en: "Free app/platform using Radio-Canada audio & video to build confidence in French.",
      fr: "Plateforme gratuite basée sur les contenus audio et vidéo de Radio-Canada.",
      ar: "منصة مجانية تعتمد على محتوى راديو كندا الصوتي والمرئي.",
    },
    levels: ["A1", "A2", "B1", "B2"],
    kind: "platform",
    url: "https://mauril.ca/",
    provider: "CBC / Radio-Canada",
    hasAudio: true,
    free: true,
  },
  {
    id: "bonjour-tcf-tv5",
    title: {
      en: "TV5MONDE — TCF practice",
      fr: "TV5MONDE — Entraînement TCF",
      ar: "TV5MONDE — تدريب TCF",
    },
    description: {
      en: "Free TCF-style practice tools on TV5MONDE (when available on site).",
      fr: "Outils d'entraînement type TCF sur TV5MONDE (selon disponibilité du site).",
      ar: "أدوات تدريب بنمط TCF على TV5MONDE.",
    },
    levels: ["A2", "B1", "B2", "C1"],
    kind: "exercises",
    url: "https://apprendre.tv5monde.com/fr/tcf",
    provider: "TV5MONDE",
    hasAudio: true,
    free: true,
  },
];

export function getResourcesForLevel(level: CefrLevel): LearningResource[] {
  return RESOURCES.filter((r) => r.levels.includes(level));
}

export function getAudioResources(): LearningResource[] {
  return RESOURCES.filter((r) => r.hasAudio);
}

export const CEFR_LEVELS: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
