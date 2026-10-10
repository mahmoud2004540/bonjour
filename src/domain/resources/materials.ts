/**
 * On-platform FLE materials (A1–C2).
 * Hosted entirely on Bonjour — no external redirects.
 * Pedagogy: CEFR + action-oriented FLE (institutional quality).
 * Original educational text — not copied from third-party sites.
 */

import type { CefrLevel } from "../types";
import { MATERIALS_EXTRA } from "./materials-extra";

export type MaterialKind =
  | "text"
  | "vocabulary"
  | "exercise"
  | "dialogue"
  | "listening";

export interface MaterialItem {
  id: string;
  level: CefrLevel;
  kind: MaterialKind;
  title: { en: string; fr: string; ar: string };
  bodyFr: string;
  bodyEn: string;
  bodyAr: string;
  vocabulary?: { fr: string; en: string; ar: string }[];
  exercise?: {
    promptEn: string;
    promptFr: string;
    promptAr: string;
    answers: string[];
  };
}

const MATERIALS_CORE: MaterialItem[] = [
  {
    id: "a1-greetings",
    level: "A1",
    kind: "dialogue",
    title: { en: "Greetings", fr: "Les salutations", ar: "التحيات" },
    bodyFr:
      "— Bonjour, madame !\n— Bonjour ! Comment allez-vous ?\n— Bien, merci. Et vous ?\n— Très bien, merci.\n— Au revoir !\n— Au revoir, à bientôt !",
    bodyEn: "Formal daytime greetings. Use Bonsoir in the evening.",
    bodyAr: "تحيات رسمية في النهار. استخدم Bonsoir مساءً.",
    vocabulary: [
      { fr: "Bonjour", en: "Hello / Good day", ar: "مرحبًا" },
      { fr: "Bonsoir", en: "Good evening", ar: "مساء الخير" },
      { fr: "Comment allez-vous ?", en: "How are you? (formal)", ar: "كيف حالك؟ (رسمي)" },
      { fr: "Au revoir", en: "Goodbye", ar: "إلى اللقاء" },
      { fr: "À bientôt", en: "See you soon", ar: "إلى اللقاء قريبًا" },
    ],
  },
  {
    id: "a1-identity",
    level: "A1",
    kind: "text",
    title: { en: "Identity", fr: "L'identité", ar: "الهوية" },
    bodyFr:
      "Je m'appelle Leila.\nJ'ai vingt-huit ans.\nJ'habite à Marseille.\nJe suis professeure.\nJe parle arabe et français.",
    bodyEn: "Name, age, city, job, languages — core A1 can-do.",
    bodyAr: "الاسم، العمر، المدينة، العمل، اللغات — أساس A1.",
    vocabulary: [
      { fr: "Je m'appelle…", en: "My name is…", ar: "اسمي…" },
      { fr: "J'ai … ans", en: "I am … years old", ar: "عمري … سنة" },
      { fr: "J'habite à…", en: "I live in…", ar: "أسكن في…" },
      { fr: "Je suis…", en: "I am… (job/identity)", ar: "أنا…" },
    ],
    exercise: {
      promptEn: "Write the start of: My name is… → Je …",
      promptFr: "Complétez : Je … Leila.",
      promptAr: "أكمل: Je … Leila.",
      answers: ["m'appelle", "mappelle"],
    },
  },
  {
    id: "a1-cafe",
    level: "A1",
    kind: "dialogue",
    title: { en: "At the café", fr: "Au café", ar: "في المقهى" },
    bodyFr:
      "— Bonjour, vous désirez ?\n— Un thé, s'il vous plaît.\n— Avec du sucre ?\n— Oui, un peu.\n— Ça fait deux euros.\n— Voici. Merci !\n— Je vous en prie.",
    bodyEn: "Order a drink and pay politely.",
    bodyAr: "اطلب مشروبًا وادفع بأدب.",
    vocabulary: [
      { fr: "Vous désirez ?", en: "What would you like?", ar: "ماذا ترغب؟" },
      { fr: "S'il vous plaît", en: "Please", ar: "من فضلك" },
      { fr: "Ça fait…", en: "That comes to…", ar: "المبلغ…" },
      { fr: "Je vous en prie", en: "You're welcome", ar: "العفو" },
    ],
  },
  {
    id: "a1-shop",
    level: "A1",
    kind: "dialogue",
    title: { en: "At the shop", fr: "Au magasin", ar: "في المتجر" },
    bodyFr:
      "— Bonjour, je voudrais du pain, s'il vous plaît.\n— Une baguette ?\n— Oui. Et trois pommes.\n— Ça fait quatre euros cinquante.\n— Merci. Au revoir !",
    bodyEn: "Ask for food items and quantities.",
    bodyAr: "اطلب أصنافًا وكميات.",
    vocabulary: [
      { fr: "Je voudrais…", en: "I would like…", ar: "أريد…" },
      { fr: "du pain", en: "some bread", ar: "خبز" },
      { fr: "une baguette", en: "a baguette", ar: "باغيت" },
    ],
  },
  {
    id: "a1-numbers",
    level: "A1",
    kind: "vocabulary",
    title: { en: "Numbers 1–20", fr: "Nombres 1–20", ar: "الأرقام 1–20" },
    bodyFr:
      "1 un · 2 deux · 3 trois · 4 quatre · 5 cinq · 6 six · 7 sept · 8 huit · 9 neuf · 10 dix\n11 onze · 12 douze · 13 treize · 14 quatorze · 15 quinze · 16 seize · 17 dix-sept · 18 dix-huit · 19 dix-neuf · 20 vingt",
    bodyEn: "Numbers for prices, time and quantities.",
    bodyAr: "أرقام للأسعار والوقت والكميات.",
  },
  {
    id: "a1-time",
    level: "A1",
    kind: "exercise",
    title: { en: "Telling the time", fr: "L'heure", ar: "الوقت" },
    bodyFr:
      "Il est huit heures. Il est midi. Il est trois heures et demie. Il est dix heures moins le quart.",
    bodyEn: "Basic clock expressions.",
    bodyAr: "تعبيرات الساعة الأساسية.",
    exercise: {
      promptEn: "How do you say « It is noon » in French?",
      promptFr: « Midi » : Il est …",
      promptAr: "كيف تقول الظهر؟ Il est …",
      answers: ["midi", "il est midi"],
    },
  },
  {
    id: "a2-routine",
    level: "A2",
    kind: "text",
    title: { en: "Daily routine", fr: "La routine quotidienne", ar: "الروتين اليومي" },
    bodyFr:
      "D'habitude, je me lève à 7 heures. Je prends une douche, puis je bois un café. Je vais au travail en bus. Le soir, je prépare le dîner et je regarde les informations.",
    bodyEn: "Describe habits with present tense and sequence.",
    bodyAr: "صف عاداتك بالحاضر والتسلسل.",
    vocabulary: [
      { fr: "D'habitude", en: "Usually", ar: "عادةً" },
      { fr: "se lever", en: "to get up", ar: "يستيقظ" },
      { fr: "puis", en: "then", ar: "ثم" },
    ],
  },
  {
    id: "a2-directions",
    level: "A2",
    kind: "dialogue",
    title: { en: "Directions", fr: "Les directions", ar: "الاتجاهات" },
    bodyFr:
      "— Excusez-moi, pour aller à la pharmacie ?\n— C'est tout droit, après le feu rouge, à droite.\n— C'est loin ?\n— Non, environ cinq minutes à pied.\n— Merci beaucoup !",
    bodyEn: "Ask for and follow simple street directions.",
    bodyAr: "اسأل واتبع اتجاهات بسيطة.",
    vocabulary: [
      { fr: "tout droit", en: "straight on", ar: "على طول" },
      { fr: "à droite", en: "right", ar: "يمين" },
      { fr: "à gauche", en: "left", ar: "يسار" },
      { fr: "le feu rouge", en: "the traffic light", ar: "إشارة المرور" },
    ],
  },
  {
    id: "a2-passe",
    level: "A2",
    kind: "exercise",
    title: { en: "Past events", fr: "Le passé composé", ar: "الماضي المركب" },
    bodyFr:
      "Hier, j'ai travaillé jusqu'à 18 heures. Ensuite, j'ai dîné avec des amis. Nous sommes allés au cinéma.",
    bodyEn: "Passé composé with avoir and être.",
    bodyAr: "الماضي المركب مع avoir و être.",
    exercise: {
      promptEn: "Hier, j'___ mangé une salade. (ai / suis)",
      promptFr: "Hier, j'___ mangé une salade.",
      promptAr: "Hier, j'___ mangé une salade.",
      answers: ["ai"],
    },
  },
  {
    id: "a2-invitation",
    level: "A2",
    kind: "dialogue",
    title: { en: "Invitation", fr: "L'invitation", ar: "الدعوة" },
    bodyFr:
      "— Tu es libre samedi soir ?\n— Oui, pourquoi ?\n— On organise un dîner chez moi. Tu veux venir ?\n— Avec plaisir ! À quelle heure ?\n— Vers 20 heures.\n— Parfait, à samedi !",
    bodyEn: "Invite someone and set a time (informal tu).",
    bodyAr: "ادعُ شخصًا وحدد وقتًا (صيغة tu).",
  },
  {
    id: "a2-health",
    level: "A2",
    kind: "vocabulary",
    title: { en: "Feeling unwell", fr: "Ne pas se sentir bien", ar: "الشعور بالمرض" },
    bodyFr:
      "J'ai mal à la tête. J'ai mal au dos. Je suis fatigué(e). Je suis enrhumé(e). Je dois aller chez le médecin.",
    bodyEn: "Basic health complaints.",
    bodyAr: "شكاوى صحية بسيطة.",
    vocabulary: [
      { fr: "J'ai mal à…", en: "My … hurts", ar: "يؤلمني…" },
      { fr: "fatigué(e)", en: "tired", ar: "متعب" },
      { fr: "le médecin", en: "the doctor", ar: "الطبيب" },
    ],
  },
  {
    id: "b1-opinion",
    level: "B1",
    kind: "text",
    title: { en: "Giving opinions", fr: "Donner son avis", ar: "إبداء الرأي" },
    bodyFr:
      "À mon avis, apprendre une langue demande de la régularité. Je trouve que quinze minutes par jour valent mieux qu'une longue session une fois par semaine. En revanche, il ne faut pas négliger la pratique orale.",
    bodyEn: "State and justify an opinion with connectors.",
    bodyAr: "عبّر عن رأي وبرّره بروابط.",
    vocabulary: [
      { fr: "À mon avis", en: "In my opinion", ar: "في رأيي" },
      { fr: "Je trouve que", en: "I find that", ar: "أرى أن" },
      { fr: "En revanche", en: "However", ar: "في المقابل" },
    ],
  },
  {
    id: "b1-story",
    level: "B1",
    kind: "text",
    title: { en: "Narrating an incident", fr: "Raconter un incident", ar: "سرد حادثة" },
    bodyFr:
      "La semaine dernière, j'ai manqué mon train. Le métro était en retard à cause d'un incident technique. J'ai finalement pris un taxi pour ne pas arriver en retard à mon rendez-vous.",
    bodyEn: "Tell a past story with cause and result.",
    bodyAr: "اسرد قصة ماضية مع السبب والنتيجة.",
    vocabulary: [
      { fr: "à cause de", en: "because of", ar: "بسبب" },
      { fr: "finalement", en: "in the end", ar: "في النهاية" },
      { fr: "un rendez-vous", en: "an appointment", ar: "موعد" },
    ],
  },
  {
    id: "b1-housing",
    level: "B1",
    kind: "dialogue",
    title: { en: "Looking for a flat", fr: "Chercher un appartement", ar: "البحث عن شقة" },
    bodyFr:
      "— Bonjour, je téléphone pour l'annonce de l'appartement.\n— Oui, il est toujours disponible.\n— Il fait quelle surface ?\n— Quarante-cinq mètres carrés, avec un balcon.\n— Est-ce que je peux le visiter demain ?\n— Bien sûr, vers 17 heures.",
    bodyEn: "Phone enquiry about a rental.",
    bodyAr: "استفسار هاتفي عن إيجار.",
  },
  {
    id: "b1-si",
    level: "B1",
    kind: "exercise",
    title: { en: "Conditions with si", fr: "La condition avec si", ar: "الشرط مع si" },
    bodyFr:
      "Si j'ai le temps, je viendrai. Si tu veux, on peut se voir ce week-end.",
    bodyEn: "Real conditions in the present / future.",
    bodyAr: "شروط حقيقية في الحاضر/المستقبل.",
    exercise: {
      promptEn: "The French word for « if » is:",
      promptFr: "Le mot de condition :",
      promptAr: "كلمة الشرط بالفرنسية:",
      answers: ["si"],
    },
  },
  {
    id: "b2-argument",
    level: "B2",
    kind: "text",
    title: { en: "Balanced argument", fr: "Argument équilibré", ar: "حجة متوازنة" },
    bodyFr:
      "D'une part, le télétravail augmente la flexibilité. D'autre part, il peut affaiblir la cohésion d'équipe. Il convient donc de combiner jours sur site et jours à distance selon les besoins du projet.",
    bodyEn: "Two-sided argument with a measured conclusion.",
    bodyAr: "حجة من وجهتين مع خاتمة متزنة.",
    vocabulary: [
      { fr: "D'une part", en: "On the one hand", ar: "من جهة" },
      { fr: "D'autre part", en: "On the other hand", ar: "من جهة أخرى" },
      { fr: "Il convient de", en: "It is appropriate to", ar: "ينبغي" },
    ],
  },
  {
    id: "b2-media",
    level: "B2",
    kind: "text",
    title: { en: "Media-style paragraph", fr: "Paragraphe de type presse", ar: "فقرة بأسلوب صحفي" },
    bodyFr:
      "Selon une enquête récente, la fréquentation des bibliothèques a progressé de près de quinze pour cent. Les responsables attribuent cette hausse aux ateliers gratuits et à l'extension des horaires d'ouverture.",
    bodyEn: "Report figures and explanations in a neutral tone.",
    bodyAr: "اعرض أرقامًا وتفسيرات بنبرة محايدة.",
    vocabulary: [
      { fr: "Selon", en: "According to", ar: "وفقًا لـ" },
      { fr: "attribuer à", en: "to attribute to", ar: "يعزو إلى" },
      { fr: "la hausse", en: "the increase", ar: "الارتفاع" },
    ],
  },
  {
    id: "b2-concession",
    level: "B2",
    kind: "exercise",
    title: { en: "Concession", fr: "La concession", ar: "الاستدراك" },
    bodyFr:
      "Bien que le projet soit ambitieux, le calendrier reste réaliste. Même si les moyens sont limités, l'équipe progresse.",
    bodyEn: "Bien que / Même si for nuanced positions.",
    bodyAr: "Bien que / Même si للمواقف الدقيقة.",
    exercise: {
      promptEn: "Complete: ___ que ce soit difficile, on continue. (Bien)",
      promptFr: "___ que ce soit difficile, on continue.",
      promptAr: "___ que ce soit difficile, on continue.",
      answers: ["bien"],
    },
  },
  {
    id: "c1-hedging",
    level: "C1",
    kind: "text",
    title: { en: "Academic caution", fr: "Prudence académique", ar: "الحذر الأكاديمي" },
    bodyFr:
      "Il semblerait que les pratiques numériques évoluent plus vite qu'on ne l'anticipait. Cela dit, il serait prématuré d'en tirer des conclusions définitives sans données longitudinales.",
    bodyEn: "Hedge claims; avoid overstatement.",
    bodyAr: "لطّف الادعاءات؛ تجنب المبالغة.",
    vocabulary: [
      { fr: "Il semblerait que", en: "It would seem that", ar: "يبدو أن" },
      { fr: "Cela dit", en: "That said", ar: "ومع ذلك" },
      { fr: "prématuré", en: "premature", ar: "مبكر جدًا" },
    ],
  },
  {
    id: "c1-synthesis",
    level: "C1",
    kind: "text",
    title: { en: "Synthesis", fr: "Synthèse", ar: "تلخيص تحليلي" },
    bodyFr:
      "En somme, si l'accès aux ressources en ligne s'est démocratisé, la progression linguistique dépend encore d'un engagement actif : régularité, rétroaction et confrontation à des documents authentiques.",
    bodyEn: "Synthesize causes without listing them flatly.",
    bodyAr: "لخّص الأسباب دون سرد سطحي.",
  },
  {
    id: "c1-nominal",
    level: "C1",
    kind: "exercise",
    title: { en: "Nominal style", fr: "Style nominal", ar: "الأسلوب الاسمي" },
    bodyFr:
      "Verbal : On a décidé de reporter la réunion.\nNominal : La décision de report de la réunion a été prise.",
    bodyEn: "Shift from verbal to nominal phrasing (formal written French).",
    bodyAr: "الانتقال من صيغة فعلية إلى اسمية (كتابة رسمية).",
    exercise: {
      promptEn: "In formal writing, prefer often a more … style. (nominal / verbal)",
      promptFr: "En écrit soutenu, on privilégie souvent le style …",
      promptAr: "في الكتابة الرسمية يُفضَّل الأسلوب …",
      answers: ["nominal"],
    },
  },
  {
    id: "c2-style",
    level: "C2",
    kind: "text",
    title: { en: "Stylistic density", fr: "Densité stylistique", ar: "كثافة أسلوبية" },
    bodyFr:
      "Loin de se réduire à un simple canal d'information, la langue participe à la configuration de l'expérience. Sans céder à un déterminisme absolu, cette perspective invite à scruter les choix lexicaux et syntaxiques avec une attention accrue.",
    bodyEn: "Near-native formal prose; complex subordination.",
    bodyAr: "نثر رسمي قريب من الناطق؛ تراكيب معقدة.",
  },
  {
    id: "c2-registers",
    level: "C2",
    kind: "exercise",
    title: { en: "Registers", fr: "Les registres", ar: "مستويات اللغة" },
    bodyFr:
      "Familier : C'est cool.\nCourant : C'est bien.\nSoutenu : Cela me paraît judicieux.",
    bodyEn: "Match register to situation.",
    bodyAr: "طابق مستوى اللغة مع الموقف.",
    exercise: {
      promptEn: "« Cela me paraît judicieux » is which register?",
      promptFr: « Cela me paraît judicieux » : quel registre ?",
      promptAr: « Cela me paraît judicieux » أي مستوى؟",
      answers: ["soutenu"],
    },
  },
  {
    id: "c2-irony",
    level: "C2",
    kind: "text",
    title: { en: "Tone and implication", fr: "Ton et implicite", ar: "النبرة والضمني" },
    bodyFr:
      "On ne saurait trop recommander la prudence face aux annonces trop enthousiastes. L'expérience suggère que les promesses les plus séduisantes méritent souvent un examen critique.",
    bodyEn: "Read implication and restrained irony in formal French.",
    bodyAr: "افهم الضمني والسخرية المتحفظة في الفرنسية الرسمية.",
  },
];

export const MATERIALS: MaterialItem[] = [
  ...MATERIALS_CORE,
  ...MATERIALS_EXTRA,
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
