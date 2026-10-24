/**
 * On-site university-style French curriculum outline.
 */

import { A1_EXTRA_MODULES } from "./modules-a1-extra";

export type UniModule = {
  id: string;
  track: "grammar" | "phonetics" | "civilization" | "writing" | "oral" | "lexique";
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  order: number;
  title: { en: string; fr: string; ar: string };
  summary: { en: string; fr: string; ar: string };
  outcomes: { en: string[]; fr: string[]; ar: string[] };
  relatedUnitIds: string[];
  blocks: {
    heading: { en: string; fr: string; ar: string };
    body: { en: string; fr: string; ar: string };
  }[];
};

const BASE_MODULES: UniModule[] = [
  {
    id: "uni-a1-phonetics",
    track: "phonetics",
    level: "A1",
    order: 1,
    title: {
      en: "French sounds & rhythm",
      fr: "Sons et rythme du français",
      ar: "أصوات وإيقاع الفرنسية",
    },
    summary: {
      en: "Vowels, nasal sounds, liaison basics — on site.",
      fr: "Voyelles, nasales, liaisons de base — sur le site.",
      ar: "الحروف المتحركة، الأنفية، الربط — داخل الموقع.",
    },
    outcomes: {
      en: ["Hear and repeat key vowels", "Notice liaison in short phrases"],
      fr: ["Entendre et répéter les voyelles clés", "Repérer la liaison"],
      ar: ["سماع وتكرار الحروف الأساسية", "ملاحظة الربط"],
    },
    relatedUnitIds: ["fr-a1-u01-bonjour"],
    blocks: [
      {
        heading: { en: "Oral vowels", fr: "Voyelles orales", ar: "حروف متحركة" },
        body: {
          en: "a (patte), é (été), è (mère), i (si), o (eau), ou (vous), u (tu).",
          fr: "a, é, è, i, o, ou, u.",
          ar: "a, é, è, i, o, ou, u.",
        },
      },
      {
        heading: { en: "Nasals", fr: "Nasales", ar: "أصوات أنفية" },
        body: {
          en: "an/en, on, in/ain — un (varies by region).",
          fr: "an/en, on, in/ain.",
          ar: "an/en, on, in/ain.",
        },
      },
      {
        heading: { en: "Liaison", fr: "Liaison", ar: "ربط" },
        body: {
          en: "les‿amis · vous‿êtes — final consonant links before a vowel sound.",
          fr: "les‿amis · vous‿êtes",
          ar: "les‿amis · vous‿êtes",
        },
      },
    ],
  },
  {
    id: "uni-a1-grammar-core",
    track: "grammar",
    level: "A1",
    order: 2,
    title: {
      en: "A1 grammar core",
      fr: "Grammaire A1 — socle",
      ar: "قواعد A1 — الأساس",
    },
    summary: {
      en: "Articles, être/avoir, present -er, negation, questions.",
      fr: "Articles, être/avoir, présent -er, négation, questions.",
      ar: "أدوات، être/avoir، مضارع، نفي، أسئلة.",
    },
    outcomes: {
      en: ["Simple present sentences", "ne…pas", "où / combien / comment"],
      fr: ["Phrases au présent", "ne…pas", "où / combien / comment"],
      ar: ["جمل مضارع", "نفي", "أسئلة أساسية"],
    },
    relatedUnitIds: [
      "fr-a1-u01-bonjour",
      "fr-a1-u02-identite",
      "fr-a1-u03-famille",
      "fr-a1-u06-restaurant",
    ],
    blocks: [
      {
        heading: { en: "Present -er", fr: "Présent -er", ar: "مضارع -er" },
        body: {
          en: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
          fr: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
          ar: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
        },
      },
      {
        heading: { en: "être / avoir", fr: "être / avoir", ar: "être / avoir" },
        body: {
          en: "je suis / j'ai · tu es / tu as · il est / il a · nous sommes / nous avons…",
          fr: "je suis / j'ai · tu es / tu as…",
          ar: "je suis / j'ai · tu es / tu as…",
        },
      },
    ],
  },
  {
    id: "uni-a1-lexique-daily",
    track: "lexique",
    level: "A1",
    order: 3,
    title: {
      en: "Daily life lexicon",
      fr: "Lexique de la vie quotidienne",
      ar: "معجم الحياة اليومية",
    },
    summary: {
      en: "Home, food, transport, health — with lesson units.",
      fr: "Maison, nourriture, transports, santé.",
      ar: "سكن، طعام، مواصلات، صحة.",
    },
    outcomes: {
      en: ["Everyday phrases in full units"],
      fr: ["Phrases du quotidien en unités"],
      ar: ["جمل يومية عبر الوحدات"],
    },
    relatedUnitIds: [
      "fr-a1-u06-restaurant",
      "fr-a1-u07-courses",
      "fr-a1-u08-transports",
      "fr-a1-u10-sante",
    ],
    blocks: [
      {
        heading: { en: "Study tip", fr: "Conseil", ar: "نصيحة" },
        body: {
          en: "Finish each unit: lesson → words → exercises → review → quiz.",
          fr: "Terminez chaque unité complète.",
          ar: "أكمل كل وحدة بالشكل الكامل.",
        },
      },
    ],
  },
  {
    id: "uni-a2-passe",
    track: "grammar",
    level: "A2",
    order: 10,
    title: {
      en: "Past: passé composé",
      fr: "Passé composé",
      ar: "الماضي المركب",
    },
    summary: {
      en: "avoir/être + past participle.",
      fr: "avoir/être + participe passé.",
      ar: "avoir/être + التصريف الماضي.",
    },
    outcomes: {
      en: ["Narrate yesterday simply"],
      fr: ["Raconter hier"],
      ar: ["احكِ عن الأمس"],
    },
    relatedUnitIds: ["fr-a2-past-unit"],
    blocks: [
      {
        heading: { en: "Pattern", fr: "Schéma", ar: "النمط" },
        body: {
          en: "J'ai mangé. Je suis allé(e).",
          fr: "J'ai mangé. Je suis allé(e).",
          ar: "J'ai mangé. Je suis allé(e).",
        },
      },
    ],
  },
  {
    id: "uni-a2-futur",
    track: "grammar",
    level: "A2",
    order: 11,
    title: {
      en: "Near future",
      fr: "Futur proche",
      ar: "المستقبل القريب",
    },
    summary: {
      en: "aller + infinitive.",
      fr: "aller + infinitif.",
      ar: "aller + مصدر.",
    },
    outcomes: {
      en: ["Talk about tomorrow"],
      fr: ["Parler de demain"],
      ar: ["تحدّث عن الغد"],
    },
    relatedUnitIds: ["fr-day-future"],
    blocks: [
      {
        heading: { en: "Pattern", fr: "Schéma", ar: "النمط" },
        body: {
          en: "Je vais étudier. Nous allons voyager.",
          fr: "Je vais étudier. Nous allons voyager.",
          ar: "Je vais étudier. Nous allons voyager.",
        },
      },
    ],
  },
  {
    id: "uni-oral-strategies",
    track: "oral",
    level: "A2",
    order: 12,
    title: {
      en: "Speaking strategies",
      fr: "Stratégies orales",
      ar: "استراتيجيات الكلام",
    },
    summary: {
      en: "Ask to repeat, slow down, clarify.",
      fr: "Répéter, ralentir, clarifier.",
      ar: "إعادة، تهدئة، توضيح.",
    },
    outcomes: {
      en: ["Vous pouvez répéter ?"],
      fr: ["Vous pouvez répéter ?"],
      ar: ["Vous pouvez répéter ؟"],
    },
    relatedUnitIds: ["fr-a2-phone-unit"],
    blocks: [
      {
        heading: { en: "Lines", fr: "Phrases", ar: "جمل" },
        body: {
          en: "Pardon ? / Plus lentement, s'il vous plaît. / Je ne comprends pas bien.",
          fr: "Pardon ? / Plus lentement… / Je ne comprends pas bien.",
          ar: "Pardon ؟ / أبطأ… / لا أفهم جيدًا.",
        },
      },
    ],
  },
  {
    id: "uni-b1-argument",
    track: "writing",
    level: "B1",
    order: 20,
    title: {
      en: "Structured opinion",
      fr: "Opinion structurée",
      ar: "رأي منظّم",
    },
    summary: {
      en: "d'abord, ensuite, cependant, donc.",
      fr: "Connecteurs de base.",
      ar: "روابط أساسية.",
    },
    outcomes: {
      en: ["Short structured paragraph"],
      fr: ["Court paragraphe structuré"],
      ar: ["فقرة قصيرة منظّمة"],
    },
    relatedUnitIds: ["fr-b1-advice-unit"],
    blocks: [
      {
        heading: { en: "Frame", fr: "Cadre", ar: "إطار" },
        body: {
          en: "Je pense que… / À mon avis… / En conclusion…",
          fr: "Je pense que… / À mon avis… / En conclusion…",
          ar: "Je pense que… / À mon avis… / En conclusion…",
        },
      },
    ],
  },
  {
    id: "uni-civ-france",
    track: "civilization",
    level: "B1",
    order: 25,
    title: {
      en: "Francophone daily culture",
      fr: "Culture quotidienne francophone",
      ar: "ثقافة يومية ناطقة بالفرنسية",
    },
    summary: {
      en: "Politeness and common situations.",
      fr: "Politesse et situations courantes.",
      ar: "أدب ومواقف شائعة.",
    },
    outcomes: {
      en: ["vous with strangers"],
      fr: ["vous avec inconnus"],
      ar: ["vous مع الغرباء"],
    },
    relatedUnitIds: ["fr-day-bank", "fr-a1-u09-logement"],
    blocks: [
      {
        heading: { en: "Politeness", fr: "Politesse", ar: "أدب" },
        body: {
          en: "bonjour, s'il vous plaît, merci, vous.",
          fr: "bonjour, s'il vous plaît, merci, vous.",
          ar: "bonjour, s'il vous plaît, merci, vous.",
        },
      },
    ],
  },
  {
    id: "uni-b2-formal",
    track: "writing",
    level: "B2",
    order: 30,
    title: {
      en: "Formal register",
      fr: "Registre formel",
      ar: "سجل رسمي",
    },
    summary: {
      en: "Email formulas on site.",
      fr: "Formules d'e-mail.",
      ar: "صيغ البريد.",
    },
    outcomes: {
      en: ["Open and close formally"],
      fr: ["Ouvrir et clôturer"],
      ar: ["افتتاح وختام"],
    },
    relatedUnitIds: ["fr-b2-formal-unit"],
    blocks: [
      {
        heading: { en: "Formulas", fr: "Formules", ar: "صيغ" },
        body: {
          en: "Je me permets de… / Dans l'attente de votre retour…",
          fr: "Je me permets de… / Dans l'attente…",
          ar: "Je me permets de… / Dans l'attente…",
        },
      },
    ],
  },
  {
    id: "uni-c1-hypothesis",
    track: "grammar",
    level: "C1",
    order: 40,
    title: {
      en: "Hypothesis & nuance",
      fr: "Hypothèse et nuance",
      ar: "فرض وفروق",
    },
    summary: {
      en: "Conditionnel and careful opinion.",
      fr: "Conditionnel et opinion mesurée.",
      ar: "شرط ورأي حذر.",
    },
    outcomes: {
      en: ["Si nous avions… / Cela dépendrait…"],
      fr: ["Si nous avions… / Cela dépendrait…"],
      ar: ["Si nous avions… / Cela dépendrait…"],
    },
    relatedUnitIds: ["fr-c1-hypothesis-unit"],
    blocks: [
      {
        heading: { en: "Patterns", fr: "Schémas", ar: "أنماط" },
        body: {
          en: "Si nous avions… / À supposer que… / Cela dépendrait de…",
          fr: "Si nous avions… / À supposer que…",
          ar: "Si nous avions… / À supposer que…",
        },
      },
    ],
  },
];

export const UNIVERSITY_MODULES: UniModule[] = [
  ...BASE_MODULES,
  ...A1_EXTRA_MODULES,
];

export function getModulesByLevel(level: string): UniModule[] {
  return UNIVERSITY_MODULES.filter((m) => m.level === level).sort(
    (a, b) => a.order - b.order
  );
}

export function getAllModules(): UniModule[] {
  return [...UNIVERSITY_MODULES].sort((a, b) => a.order - b.order);
}
