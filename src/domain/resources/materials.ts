/**
 * In-platform learning materials (A1–C2).
 * Content lives on Bonjour — no external site required.
 * Audio: browser TTS only when available; clearly not native recordings.
 */

import type { CefrLevel } from "../types";

export type MaterialKind = "text" | "vocabulary" | "exercise" | "dialogue";

export interface MaterialItem {
  id: string;
  level: CefrLevel;
  kind: MaterialKind;
  title: { en: string; fr: string; ar: string };
  /** Main learning content (French where appropriate) */
  bodyFr: string;
  /** Support / translation / instruction */
  bodyEn: string;
  bodyAr: string;
  /** Optional vocabulary pairs FR → meaning */
  vocabulary?: { fr: string; en: string; ar: string }[];
  /** Optional exercise */
  exercise?: {
    promptEn: string;
    promptFr: string;
    promptAr: string;
    /** Acceptable answers (lowercase normalized match) */
    answers: string[];
  };
}

export const MATERIALS: MaterialItem[] = [
  // ═══════════════ A1 ═══════════════
  {
    id: "a1-greetings",
    level: "A1",
    kind: "dialogue",
    title: {
      en: "Greetings",
      fr: "Les salutations",
      ar: "التحيات",
    },
    bodyFr:
      "— Bonjour !\n— Bonjour ! Comment allez-vous ?\n— Bien, merci. Et vous ?\n— Très bien, merci.\n— Au revoir !\n— Au revoir ! À bientôt !",
    bodyEn:
      "A simple formal greeting exchange. Use « Bonjour » during the day, « Bonsoir » in the evening.",
    bodyAr:
      "حوار تحية رسمي بسيط. استخدم « Bonjour » في النهار و« Bonsoir » مساءً.",
    vocabulary: [
      { fr: "Bonjour", en: "Hello / Good morning", ar: "مرحبًا / صباح الخير" },
      { fr: "Bonsoir", en: "Good evening", ar: "مساء الخير" },
      { fr: "Au revoir", en: "Goodbye", ar: "إلى اللقاء" },
      { fr: "Merci", en: "Thank you", ar: "شكرًا" },
      { fr: "À bientôt", en: "See you soon", ar: "إلى اللقاء قريبًا" },
    ],
  },
  {
    id: "a1-introduce",
    level: "A1",
    kind: "text",
    title: {
      en: "Introduce yourself",
      fr: "Se présenter",
      ar: "تقديم النفس",
    },
    bodyFr:
      "Je m'appelle Samir.\nJ'habite à Lyon.\nJe suis étudiant.\nJe parle arabe et un peu français.",
    bodyEn: "Model text for a basic self-introduction.",
    bodyAr: "نص نموذجي لتقديم النفس بشكل أساسي.",
    vocabulary: [
      { fr: "Je m'appelle…", en: "My name is…", ar: "اسمي…" },
      { fr: "J'habite à…", en: "I live in…", ar: "أسكن في…" },
      { fr: "Je suis…", en: "I am…", ar: "أنا…" },
      { fr: "Je parle…", en: "I speak…", ar: "أتحدث…" },
    ],
    exercise: {
      promptEn: "Write in French: My name is… (use Je m'appelle)",
      promptFr: "Écrivez : Je m'appelle…",
      promptAr: "اكتب بالفرنسية: اسمي… (استخدم Je m'appelle)",
      answers: ["je m'appelle", "je mappelle"],
    },
  },
  {
    id: "a1-cafe",
    level: "A1",
    kind: "dialogue",
    title: {
      en: "At the café",
      fr: "Au café",
      ar: "في المقهى",
    },
    bodyFr:
      "— Bonjour, vous désirez ?\n— Un café, s'il vous plaît.\n— Avec du sucre ?\n— Non, merci.\n— C'est combien ?\n— Deux euros.\n— Merci !",
    bodyEn: "Ordering a coffee politely.",
    bodyAr: "طلب قهوة بأدب.",
    vocabulary: [
      { fr: "Un café", en: "A coffee", ar: "قهوة" },
      { fr: "S'il vous plaît", en: "Please (formal)", ar: "من فضلك" },
      { fr: "C'est combien ?", en: "How much is it?", ar: "بكم؟" },
    ],
  },
  {
    id: "a1-numbers",
    level: "A1",
    kind: "vocabulary",
    title: {
      en: "Numbers 1–10",
      fr: "Les nombres 1–10",
      ar: "الأرقام 1–10",
    },
    bodyFr: "un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix",
    bodyEn: "Essential numbers for prices and quantities.",
    bodyAr: "أرقام أساسية للأسعار والكميات.",
    vocabulary: [
      { fr: "un / une", en: "one", ar: "واحد" },
      { fr: "deux", en: "two", ar: "اثنان" },
      { fr: "trois", en: "three", ar: "ثلاثة" },
      { fr: "quatre", en: "four", ar: "أربعة" },
      { fr: "cinq", en: "five", ar: "خمسة" },
      { fr: "dix", en: "ten", ar: "عشرة" },
    ],
  },

  // ═══════════════ A2 ═══════════════
  {
    id: "a2-daily",
    level: "A2",
    kind: "text",
    title: {
      en: "A simple day",
      fr: "Une journée simple",
      ar: "يوم بسيط",
    },
    bodyFr:
      "Le matin, je me lève à sept heures. Je prends le petit-déjeuner, puis je vais au travail en métro. Le soir, je rentre à la maison, je dîne et je regarde un film.",
    bodyEn: "Describe a routine day with common verbs.",
    bodyAr: "وصف يوم روتيني بأفعال شائعة.",
    vocabulary: [
      { fr: "se lever", en: "to get up", ar: "يستيقظ" },
      { fr: "le petit-déjeuner", en: "breakfast", ar: "الإفطار" },
      { fr: "le métro", en: "the metro", ar: "المترو" },
      { fr: "rentrer", en: "to go home / return", ar: "يعود" },
    ],
  },
  {
    id: "a2-directions",
    level: "A2",
    kind: "dialogue",
    title: {
      en: "Asking the way",
      fr: "Demander son chemin",
      ar: "السؤال عن الطريق",
    },
    bodyFr:
      "— Excusez-moi, où est la gare ?\n— La gare ? Tout droit, puis à gauche.\n— C'est loin ?\n— Non, cinq minutes à pied.\n— Merci beaucoup !",
    bodyEn: "Ask for and understand simple directions.",
    bodyAr: "اسأل وافهم اتجاهات بسيطة.",
    vocabulary: [
      { fr: "tout droit", en: "straight ahead", ar: "على طول" },
      { fr: "à gauche", en: "to the left", ar: "يسارًا" },
      { fr: "à droite", en: "to the right", ar: "يمينًا" },
      { fr: "à pied", en: "on foot", ar: "مشيًا" },
    ],
  },
  {
    id: "a2-past",
    level: "A2",
    kind: "exercise",
    title: {
      en: "Yesterday (passé composé)",
      fr: "Hier (passé composé)",
      ar: "أمس (الماضي المركب)",
    },
    bodyFr: "Hier, j'ai mangé au restaurant. J'ai vu un film. Je suis allé(e) au parc.",
    bodyEn: "Simple past actions with avoir / être.",
    bodyAr: "أحداث ماضية بسيطة مع avoir / être.",
    exercise: {
      promptEn: "Complete: Hier, j'___ mangé une pizza. (ai / suis)",
      promptFr: "Complétez : Hier, j'___ mangé une pizza.",
      promptAr: "أكمل: Hier, j'___ mangé une pizza.",
      answers: ["ai"],
    },
  },

  // ═══════════════ B1 ═══════════════
  {
    id: "b1-opinion",
    level: "B1",
    kind: "text",
    title: {
      en: "Giving an opinion",
      fr: "Donner son avis",
      ar: "إبداء الرأي",
    },
    bodyFr:
      "À mon avis, apprendre une langue demande de la régularité. Je trouve que pratiquer un peu chaque jour est plus efficace que de longues sessions rares. En revanche, il ne faut pas avoir peur de faire des erreurs.",
    bodyEn: "Express and justify a simple opinion.",
    bodyAr: "عبّر عن رأي بسيط وبرّره.",
    vocabulary: [
      { fr: "À mon avis", en: "In my opinion", ar: "في رأيي" },
      { fr: "Je trouve que", en: "I think that", ar: "أعتقد أن" },
      { fr: "En revanche", en: "On the other hand", ar: "في المقابل" },
    ],
  },
  {
    id: "b1-story",
    level: "B1",
    kind: "text",
    title: {
      en: "Tell a short story",
      fr: "Raconter une histoire courte",
      ar: "سرد قصة قصيرة",
    },
    bodyFr:
      "La semaine dernière, j'ai manqué mon train. J'étais en retard parce que le métro était bloqué. Finalement, j'ai pris un taxi et je suis arrivé juste à temps pour la réunion.",
    bodyEn: "Narrate a past event with sequence markers.",
    bodyAr: "اسرد حدثًا ماضيًا مع أدوات التسلسل.",
    vocabulary: [
      { fr: "La semaine dernière", en: "Last week", ar: "الأسبوع الماضي" },
      { fr: "parce que", en: "because", ar: "لأن" },
      { fr: "Finalement", en: "Finally / In the end", ar: "في النهاية" },
    ],
  },
  {
    id: "b1-hypothesis",
    level: "B1",
    kind: "exercise",
    title: {
      en: "If… (condition)",
      fr: "Si… (condition)",
      ar: "إذا… (شرط)",
    },
    bodyFr: "Si j'ai le temps, je vais au cinéma. Si tu viens, on pourra dîner ensemble.",
    bodyEn: "Basic conditional structures.",
    bodyAr: "تراكيب شرطية أساسية.",
    exercise: {
      promptEn: "Type the French word for « if » used in conditions:",
      promptFr: "Le mot pour introduire une condition :",
      promptAr: "اكتب كلمة « إذا » بالفرنسية:",
      answers: ["si"],
    },
  },

  // ═══════════════ B2 ═══════════════
  {
    id: "b2-argument",
    level: "B2",
    kind: "text",
    title: {
      en: "Structured argument",
      fr: "Argument structuré",
      ar: "حجة منظمة",
    },
    bodyFr:
      "D'une part, le télétravail offre plus de flexibilité. D'autre part, il peut réduire les échanges informels au sein des équipes. Ainsi, il convient de trouver un équilibre entre présence au bureau et travail à distance.",
    bodyEn: "Connectors for balanced argumentation.",
    bodyAr: "روابط للحجاج المتوازن.",
    vocabulary: [
      { fr: "D'une part", en: "On the one hand", ar: "من جهة" },
      { fr: "D'autre part", en: "On the other hand", ar: "من جهة أخرى" },
      { fr: "Ainsi", en: "Thus / Therefore", ar: "وهكذا" },
      { fr: "il convient de", en: "it is appropriate to", ar: "ينبغي" },
    ],
  },
  {
    id: "b2-news",
    level: "B2",
    kind: "text",
    title: {
      en: "Reading a short news-style text",
      fr: "Lire un texte de type actualité",
      ar: "قراءة نص بأسلوب إخباري",
    },
    bodyFr:
      "Selon les derniers chiffres, la fréquentation des bibliothèques municipales a augmenté de quinze pour cent. Les responsables soulignent le rôle des ateliers gratuits et des horaires élargis dans cette progression.",
    bodyEn: "Understand reported information and cause.",
    bodyAr: "افهم معلومات منقولة والسبب.",
    vocabulary: [
      { fr: "Selon", en: "According to", ar: "وفقًا لـ" },
      { fr: "souligner", en: "to emphasize", ar: "يؤكد / يبرز" },
      { fr: "progression", en: "increase / progress", ar: "تقدّم / زيادة" },
    ],
  },

  // ═══════════════ C1 ═══════════════
  {
    id: "c1-nuance",
    level: "C1",
    kind: "text",
    title: {
      en: "Nuance and hedging",
      fr: "Nuance et prudence",
      ar: "التلطيف والتحفظ",
    },
    bodyFr:
      "Il semblerait que les habitudes de consommation évoluent plus rapidement qu'on ne le pensait. Cela dit, il serait hasardeux d'en tirer des conclusions définitives sans données longitudinales.",
    bodyEn: "Academic / formal hedging language.",
    bodyAr: "لغة التحفظ الرسمية والأكاديمية.",
    vocabulary: [
      { fr: "Il semblerait que", en: "It would seem that", ar: "يبدو أن" },
      { fr: "Cela dit", en: "That said",
        ar: "ومع ذلك" },
      { fr: "hasardeux", en: "risky / hazardous", ar: "محفوف بالمخاطر" },
    ],
  },
  {
    id: "c1-synthesis",
    level: "C1",
    kind: "text",
    title: {
      en: "Synthesis paragraph",
      fr: "Paragraphe de synthèse",
      ar: "فقرة تلخيص",
    },
    bodyFr:
      "En somme, si les outils numériques facilitent l'accès aux ressources, ils ne dispensent pas l'apprenant d'un engagement actif. La régularité, le feedback et l'exposition à des documents authentiques demeurent des leviers essentiels.",
    bodyEn: "Concluding synthesis with formal register.",
    bodyAr: "تلخيص ختامي بسجل لغوي رسمي.",
    vocabulary: [
      { fr: "En somme", en: "In short / To sum up", ar: "باختصار" },
      { fr: "dispenser de", en: "to exempt from", ar: "يغني عن" },
      { fr: "leviers", en: "levers / drivers", ar: "عوامل / روافع" },
    ],
  },

  // ═══════════════ C2 ═══════════════
  {
    id: "c2-style",
    level: "C2",
    kind: "text",
    title: {
      en: "Stylistic precision",
      fr: "Précision stylistique",
      ar: "دقة أسلوبية",
    },
    bodyFr:
      "Loin de se réduire à un simple véhicule d'information, la langue configure en partie la manière dont nous structurons l'expérience. Cette perspective, sans verser dans un déterminisme absolu, invite à une attention renouvelée aux choix lexicaux et syntaxiques.",
    bodyEn: "Near-native formal prose for advanced reading.",
    bodyAr: "نثر رسمي متقدم قريب من مستوى الناطق.",
    vocabulary: [
      { fr: "Loin de…", en: "Far from…", ar: "بعيدًا عن…" },
      { fr: "versant dans", en: "slipping into", ar: "الانزلاق إلى" },
      { fr: "déterminisme", en: "determinism", ar: "الحتمية" },
    ],
  },
  {
    id: "c2-register",
    level: "C2",
    kind: "exercise",
    title: {
      en: "Register awareness",
      fr: "Conscience des registres",
      ar: "الوعي بمستويات اللغة",
    },
    bodyFr:
      "Familier : « C'est cool. »\nCourant : « C'est bien. »\nSoutenu : « Cela me paraît judicieux. »",
    bodyEn: "Match formality to context.",
    bodyAr: "طابق مستوى الرسمية مع السياق.",
    exercise: {
      promptEn: "Which register is « Cela me paraît judicieux »? (familier / courant / soutenu)",
      promptFr: « Cela me paraît judicieux » est : familier / courant / soutenu ?",
      promptAr: « Cela me paraît judicieux » أي مستوى؟ (familier / courant / soutenu)",
      answers: ["soutenu"],
    },
  },
];

export function getMaterialsByLevel(level: CefrLevel): MaterialItem[] {
  return MATERIALS.filter((m) => m.level === level);
}

export function getMaterialById(id: string): MaterialItem | undefined {
  return MATERIALS.find((m) => m.id === id);
}

export const MATERIAL_LEVELS: CefrLevel[] = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
];
