/**
 * On-site university-style French curriculum outline.
 * All content is hosted in the app — no external course required for the structured path.
 */

export type UniModule = {
  id: string;
  track: "grammar" | "phonetics" | "civilization" | "writing" | "oral" | "lexique";
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  order: number;
  title: { en: string; fr: string; ar: string };
  summary: { en: string; fr: string; ar: string };
  outcomes: { en: string[]; fr: string[]; ar: string[] };
  /** Links to in-app lesson unit ids when available */
  relatedUnitIds: string[];
  /** In-app study blocks (text only, on site) */
  blocks: {
    heading: { en: string; fr: string; ar: string };
    body: { en: string; fr: string; ar: string };
  }[];
};

export const UNIVERSITY_MODULES: UniModule[] = [
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
    relatedUnitIds: ["fr-a1-intro-unit"],
    blocks: [
      {
        heading: { en: "Oral vowels", fr: "Voyelles orales", ar: "حروف متحركة" },
        body: {
          en: "Practice: a (patte), é (été), è (mère), i (si), o (eau), ou (vous), u (tu).",
          fr: "Travaillez : a, é, è, i, o, ou, u.",
          ar: "تمرّن: a, é, è, i, o, ou, u.",
        },
      },
      {
        heading: { en: "Nasals", fr: "Nasales", ar: "أصوات أنفية" },
        body: {
          en: "an/en, on, in/ain — un (varies by region).",
          fr: "an/en, on, in/ain — un (selon la région).",
          ar: "an/en, on, in/ain.",
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
      en: "Articles, être/avoir, present of regular -er, negation, questions.",
      fr: "Articles, être/avoir, présent en -er, négation, questions.",
      ar: "أدوات التعريف، être/avoir، المضارع، النفي، الأسئلة.",
    },
    outcomes: {
      en: ["Build simple present sentences", "Use ne…pas", "Ask où / combien / comment"],
      fr: ["Phrases au présent", "ne…pas", "où / combien / comment"],
      ar: ["جمل مضارع بسيطة", "النفي", "أسئلة أساسية"],
    },
    relatedUnitIds: ["fr-a1-intro-unit", "fr-a1-cafe-unit"],
    blocks: [
      {
        heading: { en: "Present -er", fr: "Présent des verbes en -er", ar: "مضارع أفعال -er" },
        body: {
          en: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
          fr: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
          ar: "je parle, tu parles, il parle, nous parlons, vous parlez, ils parlent.",
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
      en: "Home, food, transport, health — aligned with lesson units.",
      fr: "Maison, nourriture, transports, santé — aligné sur les unités.",
      ar: "سكن، طعام، مواصلات، صحة — مع وحدات الدروس.",
    },
    outcomes: {
      en: ["Name everyday objects", "Use café and shop phrases"],
      fr: ["Nommer le quotidien", "Phrases café et magasin"],
      ar: ["مفردات يومية", "جمل المقهى والتسوق"],
    },
    relatedUnitIds: [
      "fr-a1-cafe-unit",
      "fr-a1-courses-unit",
      "fr-day-food-home",
      "fr-a1-transport-unit",
    ],
    blocks: [
      {
        heading: { en: "Study tip", fr: "Conseil", ar: "نصيحة" },
        body: {
          en: "Learn phrases in full units (lesson → quiz), not isolated word lists only.",
          fr: "Apprenez par unités complètes, pas seulement des listes isolées.",
          ar: "تعلّم عبر الوحدات الكاملة، مش قوائم كلمات فقط.",
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
      en: "avoir/être + past participle; agreement basics.",
      fr: "avoir/être + participe passé ; accords de base.",
      ar: "avoir/être + التصريف الماضي.",
    },
    outcomes: {
      en: ["Narrate yesterday simply", "Choose avoir vs être for common verbs"],
      fr: ["Raconter hier simplement", "avoir / être"],
      ar: ["احكِ عن الأمس", "اختيار avoir أو être"],
    },
    relatedUnitIds: ["fr-a2-past-unit"],
    blocks: [
      {
        heading: { en: "Pattern", fr: "Schéma", ar: "النمط" },
        body: {
          en: "J'ai mangé. Je suis allé(e). Elle est partie.",
          fr: "J'ai mangé. Je suis allé(e). Elle est partie.",
          ar: "J'ai mangé. Je suis allé(e). Elle est partie.",
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
      en: "aller + infinitive for plans.",
      fr: "aller + infinitif pour les projets.",
      ar: "aller + المصدر للخطط.",
    },
    outcomes: {
      en: ["Talk about tomorrow and the weekend"],
      fr: ["Parler de demain et du week-end"],
      ar: ["تحدّث عن الغد وعطلة نهاية الأسبوع"],
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
      en: "Connectors: d'abord, ensuite, cependant, donc.",
      fr: "Connecteurs : d'abord, ensuite, cependant, donc.",
      ar: "روابط: d'abord, ensuite, cependant, donc.",
    },
    outcomes: {
      en: ["Write a short paragraph with clear structure"],
      fr: ["Écrire un court paragraphe structuré"],
      ar: ["اكتب فقرة قصيرة منظّمة"],
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
    id: "uni-b2-formal",
    track: "writing",
    level: "B2",
    order: 30,
    title: {
      en: "Formal register",
      fr: "Registre formel",
      ar: "السجل الرسمي",
    },
    summary: {
      en: "Email and letter formulas on site.",
      fr: "Formules d'e-mail et de lettre sur le site.",
      ar: "صيغ البريد والرسائل داخل الموقع.",
    },
    outcomes: {
      en: ["Open and close a formal message"],
      fr: ["Ouvrir et clôturer un message formel"],
      ar: ["افتتاح وختام رسالة رسمية"],
    },
    relatedUnitIds: ["fr-b2-formal-unit"],
    blocks: [
      {
        heading: { en: "Formulas", fr: "Formules", ar: "صيغ" },
        body: {
          en: "Je me permets de… / Dans l'attente de votre retour…",
          fr: "Je me permets de… / Dans l'attente de votre retour…",
          ar: "Je me permets de… / Dans l'attente de votre retour…",
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
      ar: "الفرض والفروق",
    },
    summary: {
      en: "Conditionnel, à supposer que, register shifts.",
      fr: "Conditionnel, à supposer que, registres.",
      ar: "الشرط، الافتراض، تغيّر السجل.",
    },
    outcomes: {
      en: ["Express conditions and careful opinions"],
      fr: ["Exprimer conditions et opinions mesurées"],
      ar: ["عبّر عن الشرط والرأي بحذر"],
    },
    relatedUnitIds: ["fr-c1-hypothesis-unit"],
    blocks: [
      {
        heading: { en: "Patterns", fr: "Schémas", ar: "أنماط" },
        body: {
          en: "Si nous avions… / Cela dépendrait de…",
          fr: "Si nous avions… / Cela dépendrait de…",
          ar: "Si nous avions… / Cela dépendrait de…",
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
      en: "Life in French-speaking contexts",
      fr: "Vivre en contexte francophone",
      ar: "الحياة في سياق ناطق بالفرنسية",
    },
    summary: {
      en: "Politeness, admin basics, everyday culture notes — on site text.",
      fr: "Politesse, bases admin, notes culturelles — texte sur le site.",
      ar: "أدب، إدارة بسيطة، ملاحظات ثقافية — نص داخل الموقع.",
    },
    outcomes: {
      en: ["Choose tu/vous appropriately", "Recognize common admin situations"],
      fr: ["Choisir tu/vous", "Situations admin courantes"],
      ar: ["اختيار tu/vous", "مواقف إدارية شائعة"],
    },
    relatedUnitIds: ["fr-day-bank", "fr-a1-logement-unit"],
    blocks: [
      {
        heading: { en: "Politeness", fr: "Politesse", ar: "الأدب" },
        body: {
          en: "With strangers and staff, prefer vous, bonjour, s'il vous plaît, merci.",
          fr: "Avec inconnus et personnel : vous, bonjour, s'il vous plaît, merci.",
          ar: "مع الغرباء والموظفين: vous، bonjour، من فضلك، شكرًا.",
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
      en: "Buy time, repair, ask for repetition — phrases on site.",
      fr: "Gagner du temps, se corriger, demander de répéter.",
      ar: "كسب وقت، تصحيح، طلب إعادة.",
    },
    outcomes: {
      en: ["Use: Vous pouvez répéter ? / Comment on dit… ?"],
      fr: ["Vous pouvez répéter ? / Comment on dit… ?"],
      ar: ["Vous pouvez répéter ؟ / Comment on dit… ؟"],
    },
    relatedUnitIds: ["fr-day-phone-unit", "fr-a2-phone-unit"],
    blocks: [
      {
        heading: { en: "Useful lines", fr: "Phrases utiles", ar: "جمل مفيدة" },
        body: {
          en: "Pardon ? / Plus lentement, s'il vous plaît. / Je ne comprends pas bien.",
          fr: "Pardon ? / Plus lentement, s'il vous plaît. / Je ne comprends pas bien.",
          ar: "Pardon ؟ / أبطأ من فضلك. / لا أفهم جيدًا.",
        },
      },
    ],
  },
];

export function getModulesByLevel(level: string): UniModule[] {
  return UNIVERSITY_MODULES.filter((m) => m.level === level).sort(
    (a, b) => a.order - b.order
  );
}

export function getAllModules(): UniModule[] {
  return [...UNIVERSITY_MODULES].sort((a, b) => a.order - b.order);
}
