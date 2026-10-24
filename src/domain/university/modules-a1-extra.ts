import type { UniModule } from "./modules";

/** Additional deep A1 academic modules (on site) */
export const A1_EXTRA_MODULES: UniModule[] = [
  {
    id: "uni-a1-articles-full",
    track: "grammar",
    level: "A1",
    order: 2.1,
    title: {
      en: "Articles in full (A1)",
      fr: "Les articles (A1 complet)",
      ar: "أدوات التعريف والتنكير — A1",
    },
    summary: {
      en: "le la l' les · un une des · contraction au/aux/du/des basics.",
      fr: "Définis, indéfinis, bases de au / du.",
      ar: "معرّف، نكرة، أساسيات au / du.",
    },
    outcomes: {
      en: ["Choose le/la/les", "Use un/une/des", "Recognize au café, du pain"],
      fr: ["Choisir le/la/les", "un/une/des", "au / du"],
      ar: ["اختيار le/la/les", "un/une/des", "au / du"],
    },
    relatedUnitIds: ["fr-a1-u06-restaurant", "fr-a1-u07-courses"],
    blocks: [
      {
        heading: { en: "Definite", fr: "Définis", ar: "تعريف" },
        body: {
          en: "le livre, la table, l'ami, les livres.",
          fr: "le livre, la table, l'ami, les livres.",
          ar: "le livre, la table, l'ami, les livres.",
        },
      },
      {
        heading: { en: "Indefinite", fr: "Indéfinis", ar: "تنكير" },
        body: {
          en: "un livre, une table, des livres.",
          fr: "un livre, une table, des livres.",
          ar: "un livre, une table, des livres.",
        },
      },
      {
        heading: { en: "Contractions", fr: "Contractions", ar: "اختصارات" },
        body: {
          en: "à + le → au · de + le → du · à + les → aux · de + les → des.",
          fr: "au, du, aux, des.",
          ar: "au, du, aux, des.",
        },
      },
    ],
  },
  {
    id: "uni-a1-questions-full",
    track: "grammar",
    level: "A1",
    order: 2.2,
    title: {
      en: "Asking questions (A1)",
      fr: "Interrogation (A1)",
      ar: "طرح الأسئلة — A1",
    },
    summary: {
      en: "où, quand, comment, combien, qui, pourquoi, est-ce que.",
      fr: "Mots interrogatifs et est-ce que.",
      ar: "أدوات الاستفهام و est-ce que.",
    },
    outcomes: {
      en: ["Ask where/when/how/how much", "Use est-ce que… ?"],
      fr: ["où / quand / comment / combien", "est-ce que"],
      ar: ["أين متى كيف كم", "est-ce que"],
    },
    relatedUnitIds: ["fr-a1-u08-transports", "fr-a1-u07-courses"],
    blocks: [
      {
        heading: { en: "Key words", fr: "Mots clés", ar: "كلمات" },
        body: {
          en: "Où ? Quand ? Comment ? Combien ? Qui ? Pourquoi ?",
          fr: "Où ? Quand ? Comment ? Combien ? Qui ? Pourquoi ?",
          ar: "Où ؟ Quand ؟ Comment ؟ Combien ؟ Qui ؟ Pourquoi ؟",
        },
      },
      {
        heading: { en: "Est-ce que", fr: "Est-ce que", ar: "Est-ce que" },
        body: {
          en: "Est-ce que vous parlez français ?",
          fr: "Est-ce que vous parlez français ?",
          ar: "Est-ce que vous parlez français ؟",
        },
      },
    ],
  },
  {
    id: "uni-a1-present-er-full",
    track: "grammar",
    level: "A1",
    order: 2.3,
    title: {
      en: "Present -er verbs (full table)",
      fr: "Présent des verbes en -er",
      ar: "مضارع أفعال -er كامل",
    },
    summary: {
      en: "Full person table + common verbs: parler, habiter, travailler, aimer.",
      fr: "Tableau complet + parler, habiter, travailler, aimer.",
      ar: "جدول كامل + أفعال شائعة.",
    },
    outcomes: {
      en: ["Conjugate a regular -er verb in all persons"],
      fr: ["Conjuguer un verbe en -er à toutes les personnes"],
      ar: ["صرّف فعل -er لكل الضمائر"],
    },
    relatedUnitIds: ["fr-a1-u02-identite", "fr-a1-u04-quotidien"],
    blocks: [
      {
        heading: { en: "parler", fr: "parler", ar: "parler" },
        body: {
          en: "je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent",
          fr: "je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent",
          ar: "je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent",
        },
      },
      {
        heading: { en: "habiter", fr: "habiter", ar: "habiter" },
        body: {
          en: "J'habite à Paris. Nous habitons ici.",
          fr: "J'habite à Paris. Nous habitons ici.",
          ar: "J'habite à Paris. Nous habitons ici.",
        },
      },
    ],
  },
  {
    id: "uni-a1-politesse-full",
    track: "civilization",
    level: "A1",
    order: 3.1,
    title: {
      en: "Politeness toolkit (A1)",
      fr: "Boîte à politesse (A1)",
      ar: "حقيبة الأدب — A1",
    },
    summary: {
      en: "bonjour, s'il vous plaît, merci, excusez-moi, vous vs tu.",
      fr: "Formules de base et vous/tu.",
      ar: "صيغ أساسية و vous/tu.",
    },
    outcomes: {
      en: ["Use formal please/thanks", "Prefer vous with strangers"],
      fr: ["s'il vous plaît / merci", "vous avec inconnus"],
      ar: ["من فضلك / شكرًا", "vous مع الغرباء"],
    },
    relatedUnitIds: ["fr-a1-u01-bonjour", "fr-a1-u06-restaurant"],
    blocks: [
      {
        heading: { en: "Core lines", fr: "Phrases clés", ar: "جمل" },
        body: {
          en: "Bonjour · S'il vous plaît · Merci · Excusez-moi · Au revoir",
          fr: "Bonjour · S'il vous plaît · Merci · Excusez-moi · Au revoir",
          ar: "Bonjour · S'il vous plaît · Merci · Excusez-moi · Au revoir",
        },
      },
    ],
  },
];
