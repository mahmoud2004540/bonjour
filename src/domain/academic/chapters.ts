/**
 * Academic French chapters — fully on-site.
 * Structure: theory → examples → drills → quiz
 */

export type AcademicChapter = {
  id: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  order: number;
  title: { en: string; fr: string; ar: string };
  theory: { en: string; fr: string; ar: string };
  examples: { fr: string; gloss: { en: string; fr: string; ar: string } }[];
  drills: {
    id: string;
    prompt: { en: string; fr: string; ar: string };
    answers: string[];
    hint?: { en: string; fr: string; ar: string };
  }[];
  quiz: {
    id: string;
    prompt: { en: string; fr: string; ar: string };
    options: { en: string[]; fr: string[]; ar: string[] };
    correctIndex: number;
  }[];
  passRatio: number;
};

export const ACADEMIC_CHAPTERS: AcademicChapter[] = [
  {
    id: "acad-a1-articles",
    level: "A1",
    order: 1,
    title: {
      en: "Articles: le, la, l', les / un, une, des",
      fr: "Les articles",
      ar: "أدوات التعريف والتنكير",
    },
    theory: {
      en: "Definite articles point to something specific: le (masc.), la (fem.), l' (before vowel sound), les (plural). Indefinite articles introduce something new: un, une, des. Gender is part of the noun — learn le café, la gare together.",
      fr: "Articles définis : le, la, l', les. Articles indéfinis : un, une, des. Le genre fait partie du nom : apprenez le café, la gare ensemble.",
      ar: "أدوات التعريف: le (مذكر)، la (مؤنث)، l' (قبل صوت علة)، les (جمع). أدوات التنكير: un, une, des. الجنس جزء من الاسم — احفظ le café و la gare معًا.",
    },
    examples: [
      { fr: "le café", gloss: { en: "the coffee", fr: "le café", ar: "القهوة" } },
      { fr: "la gare", gloss: { en: "the station", fr: "la gare", ar: "المحطة" } },
      { fr: "l'eau", gloss: { en: "the water", fr: "l'eau", ar: "الماء" } },
      { fr: "les enfants", gloss: { en: "the children", fr: "les enfants", ar: "الأطفال" } },
      { fr: "un livre", gloss: { en: "a book", fr: "un livre", ar: "كتاب" } },
      { fr: "une table", gloss: { en: "a table", fr: "une table", ar: "طاولة" } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "the coffee → ?", fr: "the coffee → ?", ar: "القهوة → ؟" },
        answers: ["le cafe", "le café"],
        hint: { en: "le…", fr: "le…", ar: "le…" },
      },
      {
        id: "d2",
        prompt: { en: "the station → ?", fr: "la gare", ar: "المحطة → ؟" },
        answers: ["la gare"],
      },
      {
        id: "d3",
        prompt: { en: "a book → ?", fr: "un livre", ar: "كتاب → ؟" },
        answers: ["un livre"],
      },
      {
        id: "d4",
        prompt: { en: "the water (with article)", fr: "l'eau", ar: "الماء" },
        answers: ["l'eau", "leau"],
      },
      {
        id: "d5",
        prompt: { en: "the children", fr: "les enfants", ar: "الأطفال" },
        answers: ["les enfants"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "Masculine singular definite:", fr: "Défini masculin :", ar: "تعريف مذكر مفرد:" },
        options: {
          en: ["la", "le", "les", "une"],
          fr: ["la", "le", "les", "une"],
          ar: ["la", "le", "les", "une"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "Before vowel sound:", fr: "Devant voyelle :", ar: "قبل صوت علة:" },
        options: {
          en: ["le", "la", "l'", "des"],
          fr: ["le", "la", "l'", "des"],
          ar: ["le", "la", "l'", "des"],
        },
        correctIndex: 2,
      },
      {
        id: "q3",
        prompt: { en: "a table:", fr: "une table :", ar: "طاولة:" },
        options: {
          en: ["un table", "une table", "le table", "des table"],
          fr: ["un table", "une table", "le table", "des table"],
          ar: ["un table", "une table", "le table", "des table"],
        },
        correctIndex: 1,
      },
      {
        id: "q4",
        prompt: { en: "Plural definite:", fr: "Défini pluriel :", ar: "تعريف جمع:" },
        options: {
          en: ["le", "la", "les", "un"],
          fr: ["le", "la", "les", "un"],
          ar: ["le", "la", "les", "un"],
        },
        correctIndex: 2,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a1-etre-avoir",
    level: "A1",
    order: 2,
    title: {
      en: "être and avoir (present)",
      fr: "être et avoir au présent",
      ar: "être و avoir في المضارع",
    },
    theory: {
      en: "être = to be. avoir = to have. They are irregular and essential. Use être for identity, origin, profession. Use avoir for possession and many expressions (j'ai faim, j'ai mal…).",
      fr: "être = identité, origine, profession. avoir = possession et expressions (j'ai faim…).",
      ar: "être للهوية والأصل والمهنة. avoir للملكية وتعبيرات مثل j'ai faim.",
    },
    examples: [
      { fr: "Je suis étudiant.", gloss: { en: "I am a student.", fr: "Je suis étudiant.", ar: "أنا طالب." } },
      { fr: "J'ai un livre.", gloss: { en: "I have a book.", fr: "J'ai un livre.", ar: "لدي كتاب." } },
      { fr: "Tu es de Lyon ?", gloss: { en: "Are you from Lyon?", fr: "Tu es de Lyon ?", ar: "هل أنت من ليون؟" } },
      { fr: "Nous avons un cours.", gloss: { en: "We have a class.", fr: "Nous avons un cours.", ar: "لدينا حصة." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I am →", fr: "Je …", ar: "أنا → je …" },
        answers: ["je suis", "suis"],
      },
      {
        id: "d2",
        prompt: { en: "I have →", fr: "J'…", ar: "لدي →" },
        answers: ["j'ai", "jai", "ai"],
      },
      {
        id: "d3",
        prompt: { en: "you are (tu) →", fr: "Tu …", ar: "أنت →" },
        answers: ["tu es"],
      },
      {
        id: "d4",
        prompt: { en: "we have →", fr: "Nous …", ar: "لدينا →" },
        answers: ["nous avons"],
      },
      {
        id: "d5",
        prompt: { en: "Complete: Je …… de Paris.", fr: "Je …… de Paris.", ar: "Je …… de Paris." },
        answers: ["suis"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "I am:", fr: "Je suis :", ar: "أنا:" },
        options: {
          en: ["Je suis", "J'ai", "Je parle", "Je vais"],
          fr: ["Je suis", "J'ai", "Je parle", "Je vais"],
          ar: ["Je suis", "J'ai", "Je parle", "Je vais"],
        },
        correctIndex: 0,
      },
      {
        id: "q2",
        prompt: { en: "I have:", fr: "J'ai :", ar: "لدي:" },
        options: {
          en: ["Je suis", "J'ai", "Tu es", "Il est"],
          fr: ["Je suis", "J'ai", "Tu es", "Il est"],
          ar: ["Je suis", "J'ai", "Tu es", "Il est"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: { en: "We have:", fr: "Nous avons :", ar: "لدينا:" },
        options: {
          en: ["Nous sommes", "Nous avons", "Nous est", "Nous suis"],
          fr: ["Nous sommes", "Nous avons", "Nous est", "Nous suis"],
          ar: ["Nous sommes", "Nous avons", "Nous est", "Nous suis"],
        },
        correctIndex: 1,
      },
      {
        id: "q4",
        prompt: { en: "Je suis de Paris means…", fr: "Sens :", ar: "المعنى:" },
        options: {
          en: ["I have Paris", "I am from Paris", "I buy Paris", "I see Paris"],
          fr: ["J'ai Paris", "Je viens / suis de Paris", "J'achète", "Je vois"],
          ar: ["لدي باريس", "أنا من باريس", "أشتري", "أرى"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a1-present-er",
    level: "A1",
    order: 3,
    title: {
      en: "Present tense of -er verbs",
      fr: "Présent des verbes en -er",
      ar: "مضارع الأفعال المنتهية بـ -er",
    },
    theory: {
      en: "Most French verbs end in -er. Remove -er, then add: -e, -es, -e, -ons, -ez, -ent. The final -ent of ils/elles is silent. Common verbs: parler, habiter, travailler, aimer, regarder.",
      fr: "Radical + e, es, e, ons, ez, ent. Le -ent final est muet. Ex. : parler, habiter, travailler.",
      ar: "احذف -er ثم أضف النهايات. -ent في ils صامت. أمثلة: parler, habiter, travailler.",
    },
    examples: [
      { fr: "Je parle français.", gloss: { en: "I speak French.", fr: "Je parle français.", ar: "أتكلم الفرنسية." } },
      { fr: "Nous habitons ici.", gloss: { en: "We live here.", fr: "Nous habitons ici.", ar: "نسكن هنا." } },
      { fr: "Ils travaillent demain.", gloss: { en: "They work tomorrow.", fr: "Ils travaillent demain.", ar: "يعملون غدًا." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I speak → je …", fr: "je (parler)", ar: "أتكلم → je …" },
        answers: ["je parle", "parle"],
      },
      {
        id: "d2",
        prompt: { en: "we live → nous …", fr: "nous (habiter)", ar: "نسكن →" },
        answers: ["nous habitons", "habitons"],
      },
      {
        id: "d3",
        prompt: { en: "you (vous) speak →", fr: "vous parlez", ar: "أنتم تتكلمون" },
        answers: ["vous parlez", "parlez"],
      },
      {
        id: "d4",
        prompt: { en: "they work → ils …", fr: "ils travaillent", ar: "يعملون" },
        answers: ["ils travaillent", "travaillent"],
      },
      {
        id: "d5",
        prompt: { en: "tu (aimer) →", fr: "tu aimes", ar: "أنت تحب" },
        answers: ["tu aimes", "aimes"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "je (parler):", fr: "je (parler) :", ar: "je (parler):" },
        options: {
          en: ["je parles", "je parle", "je parlons", "je parlez"],
          fr: ["je parles", "je parle", "je parlons", "je parlez"],
          ar: ["je parles", "je parle", "je parlons", "je parlez"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "nous (habiter):", fr: "nous (habiter) :", ar: "nous (habiter):" },
        options: {
          en: ["nous habite", "nous habitons", "nous habitez", "nous habitent"],
          fr: ["nous habite", "nous habitons", "nous habitez", "nous habitent"],
          ar: ["nous habite", "nous habitons", "nous habitez", "nous habitent"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: { en: "ils (travailler):", fr: "ils (travailler) :", ar: "ils (travailler):" },
        options: {
          en: ["ils travaille", "ils travaillons", "ils travaillent", "ils travaillez"],
          fr: ["ils travaille", "ils travaillons", "ils travaillent", "ils travaillez"],
          ar: ["ils travaille", "ils travaillons", "ils travaillent", "ils travaillez"],
        },
        correctIndex: 2,
      },
      {
        id: "q4",
        prompt: { en: "Ending for vous:", fr: "Terminaison vous :", ar: "نهاية vous:" },
        options: {
          en: ["-e", "-ons", "-ez", "-ent"],
          fr: ["-e", "-ons", "-ez", "-ent"],
          ar: ["-e", "-ons", "-ez", "-ent"],
        },
        correctIndex: 2,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a1-negation",
    level: "A1",
    order: 4,
    title: {
      en: "Negation: ne… pas",
      fr: "La négation ne… pas",
      ar: "النفي: ne… pas",
    },
    theory: {
      en: "Place ne before the conjugated verb and pas after it: Je ne parle pas. Before a vowel, ne becomes n': Il n'est pas là. In careful writing, keep both parts.",
      fr: "ne (n') + verbe + pas. À l'écrit soigné, gardez les deux parties.",
      ar: "ne (أو n') قبل الفعل و pas بعده. في الكتابة الصحيحة احتفظ بالجزأين.",
    },
    examples: [
      { fr: "Je ne comprends pas.", gloss: { en: "I don't understand.", fr: "Je ne comprends pas.", ar: "لا أفهم." } },
      { fr: "Il n'est pas là.", gloss: { en: "He is not here.", fr: "Il n'est pas là.", ar: "هو ليس هنا." } },
      { fr: "Je ne parle pas anglais.", gloss: { en: "I don't speak English.", fr: "Je ne parle pas anglais.", ar: "لا أتكلم الإنجليزية." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I don't understand", fr: "Je ne comprends pas", ar: "لا أفهم" },
        answers: ["je ne comprends pas"],
      },
      {
        id: "d2",
        prompt: { en: "I don't speak English", fr: "Je ne parle pas anglais", ar: "لا أتكلم الإنجليزية" },
        answers: ["je ne parle pas anglais"],
      },
      {
        id: "d3",
        prompt: { en: "He is not here", fr: "Il n'est pas là", ar: "ليس هنا" },
        answers: ["il n'est pas la", "il n'est pas là", "il nest pas la"],
      },
      {
        id: "d4",
        prompt: { en: "I don't know", fr: "Je ne sais pas", ar: "لا أعرف" },
        answers: ["je ne sais pas"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "Correct negation:", fr: "Négation correcte :", ar: "النفي الصحيح:" },
        options: {
          en: ["Je comprends pas ne", "Je ne comprends pas", "Ne je comprends", "Pas comprends je"],
          fr: ["Je comprends pas ne", "Je ne comprends pas", "Ne je comprends", "Pas comprends je"],
          ar: ["Je comprends pas ne", "Je ne comprends pas", "Ne je comprends", "Pas comprends je"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "Before vowel, ne becomes:", fr: "Devant voyelle :", ar: "قبل علة:" },
        options: {
          en: ["nes", "n'", "non", "pas"],
          fr: ["nes", "n'", "non", "pas"],
          ar: ["nes", "n'", "non", "pas"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: { en: "Je ne parle pas anglais means…", fr: "Sens :", ar: "المعنى:" },
        options: {
          en: ["I speak English", "I don't speak English", "I am English", "I like English"],
          fr: ["Je parle anglais", "Je ne parle pas anglais", "Je suis anglais", "J'aime l'anglais"],
          ar: ["أتكلم الإنجليزية", "لا أتكلم الإنجليزية", "أنا إنجليزي", "أحب الإنجليزية"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a1-questions",
    level: "A1",
    order: 5,
    title: {
      en: "Asking questions",
      fr: "L'interrogation",
      ar: "طرح الأسئلة",
    },
    theory: {
      en: "Use question words: où (where), quand (when), comment (how), combien (how much), qui (who), pourquoi (why). You can also use Est-ce que + statement, or rising intonation in speech.",
      fr: "où, quand, comment, combien, qui, pourquoi. Est-ce que + phrase. Intonation montante à l'oral.",
      ar: "où أين، quand متى، comment كيف، combien كم، qui من، pourquoi لماذا. أو Est-ce que.",
    },
    examples: [
      { fr: "Où est la gare ?", gloss: { en: "Where is the station?", fr: "Où est la gare ?", ar: "أين المحطة؟" } },
      { fr: "C'est combien ?", gloss: { en: "How much is it?", fr: "C'est combien ?", ar: "بكم؟" } },
      { fr: "Est-ce que vous parlez français ?", gloss: { en: "Do you speak French?", fr: "Est-ce que vous parlez français ?", ar: "هل تتكلم الفرنسية؟" } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "Where is the station?", fr: "Où est la gare ?", ar: "أين المحطة؟" },
        answers: ["ou est la gare", "où est la gare", "où est la gare ?"],
      },
      {
        id: "d2",
        prompt: { en: "How much?", fr: "C'est combien ?", ar: "بكم؟" },
        answers: ["c'est combien", "c'est combien ?", "combien"],
      },
      {
        id: "d3",
        prompt: { en: "Write: comment", fr: "comment", ar: "كيف" },
        answers: ["comment"],
      },
      {
        id: "d4",
        prompt: { en: "Est-ce que you speak French? (start)", fr: "Est-ce que…", ar: "Est-ce que…" },
        answers: ["est-ce que vous parlez francais", "est-ce que vous parlez français", "est-ce que vous parlez français ?"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "où means…", fr: "où :", ar: "où:" },
        options: {
          en: ["when", "where", "how", "who"],
          fr: ["quand", "où", "comment", "qui"],
          ar: ["متى", "أين", "كيف", "من"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "How much?", fr: "Prix :", ar: "السعر:" },
        options: {
          en: ["Où est ?", "C'est combien ?", "Qui est ?", "Pourquoi ?"],
          fr: ["Où est ?", "C'est combien ?", "Qui est ?", "Pourquoi ?"],
          ar: ["Où est ؟", "C'est combien ؟", "Qui est ؟", "Pourquoi ؟"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: { en: "comment means…", fr: "comment :", ar: "comment:" },
        options: {
          en: ["where", "how", "who", "why"],
          fr: ["où", "comment", "qui", "pourquoi"],
          ar: ["أين", "كيف", "من", "لماذا"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a2-passe-compose",
    level: "A2",
    order: 10,
    title: {
      en: "Passé composé",
      fr: "Le passé composé",
      ar: "الماضي المركب",
    },
    theory: {
      en: "Past events: auxiliary (avoir or être) + past participle. Most verbs use avoir. Movement and reflexive verbs often use être. With être, the participle agrees in gender and number: elle est allée.",
      fr: "avoir/être + participe passé. Verbes de mouvement et pronominaux : souvent être. Accord avec être.",
      ar: "avoir أو être + التصريف الماضي. أفعال الحركة غالبًا être مع مطابقة.",
    },
    examples: [
      { fr: "J'ai mangé.", gloss: { en: "I ate.", fr: "J'ai mangé.", ar: "أكلت." } },
      { fr: "Elle est allée à Lyon.", gloss: { en: "She went to Lyon.", fr: "Elle est allée à Lyon.", ar: "ذهبت إلى ليون." } },
      { fr: "Nous avons travaillé hier.", gloss: { en: "We worked yesterday.", fr: "Nous avons travaillé hier.", ar: "عملنا أمس." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I ate (j'ai …)", fr: "J'ai mangé", ar: "أكلت" },
        answers: ["j'ai mange", "j'ai mangé", "jai mange"],
      },
      {
        id: "d2",
        prompt: { en: "I worked yesterday", fr: "J'ai travaillé hier", ar: "عملت أمس" },
        answers: ["j'ai travaille hier", "j'ai travaillé hier"],
      },
      {
        id: "d3",
        prompt: { en: "She went (elle est …)", fr: "Elle est allée", ar: "ذهبت" },
        answers: ["elle est allee", "elle est allée"],
      },
      {
        id: "d4",
        prompt: { en: "Write: hier", fr: "hier", ar: "أمس" },
        answers: ["hier"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "J'ai mangé uses auxiliary…", fr: "Auxiliaire :", ar: "الفعل المساعد:" },
        options: {
          en: ["être", "avoir", "aller", "faire"],
          fr: ["être", "avoir", "aller", "faire"],
          ar: ["être", "avoir", "aller", "faire"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "elle est allée — agreement because…", fr: "Accord :", ar: "المطابقة:" },
        options: {
          en: ["random", "être + feminine subject", "always -é", "only plural"],
          fr: ["au hasard", "être + sujet féminin", "toujours -é", "pluriel seulement"],
          ar: ["عشوائي", "être + فاعل مؤنث", "دائمًا -é", "جمع فقط"],
        },
        correctIndex: 1,
      },
      {
        id: "q3",
        prompt: { en: "yesterday:", fr: "hier :", ar: "أمس:" },
        options: {
          en: ["demain", "hier", "aujourd'hui", "soir"],
          fr: ["demain", "hier", "aujourd'hui", "soir"],
          ar: ["غدًا", "أمس", "اليوم", "مساء"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-a2-futur-proche",
    level: "A2",
    order: 11,
    title: {
      en: "Futur proche",
      fr: "Le futur proche",
      ar: "المستقبل القريب",
    },
    theory: {
      en: "Near future plans: conjugate aller in the present + infinitive. Je vais étudier. Nous allons partir demain.",
      fr: "aller au présent + infinitif. Je vais étudier.",
      ar: "صرّف aller في المضارع + المصدر.",
    },
    examples: [
      { fr: "Je vais étudier.", gloss: { en: "I'm going to study.", fr: "Je vais étudier.", ar: "سأدرس." } },
      { fr: "Nous allons voyager.", gloss: { en: "We are going to travel.", fr: "Nous allons voyager.", ar: "سنسافر." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I'm going to study", fr: "Je vais étudier", ar: "سأدرس" },
        answers: ["je vais etudier", "je vais étudier"],
      },
      {
        id: "d2",
        prompt: { en: "We are going to travel", fr: "Nous allons voyager", ar: "سنسافر" },
        answers: ["nous allons voyager"],
      },
      {
        id: "d3",
        prompt: { en: "Write: demain", fr: "demain", ar: "غدًا" },
        answers: ["demain"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "Structure of futur proche:", fr: "Structure :", ar: "التركيب:" },
        options: {
          en: ["infinitive only", "aller + infinitive", "avoir + infinitive", "être only"],
          fr: ["infinitif seul", "aller + infinitif", "avoir + infinitif", "être seul"],
          ar: ["مصدر فقط", "aller + مصدر", "avoir + مصدر", "être فقط"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "Je vais étudier means…", fr: "Sens :", ar: "المعنى:" },
        options: {
          en: ["I studied", "I'm going to study", "I must study", "I hate study"],
          fr: ["J'ai étudié", "Je vais étudier", "Je dois", "Je déteste"],
          ar: ["درست", "سأدرس", "يجب أن أدرس", "أكره"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "acad-b1-cod",
    level: "B1",
    order: 20,
    title: {
      en: "Object pronouns (COD)",
      fr: "Pronoms COD",
      ar: "ضمائر المفعول به",
    },
    theory: {
      en: "Replace a direct object: me, te, le, la, nous, vous, les. Usually before the verb: Je le vois. Before a vowel: Je l'aime.",
      fr: "me, te, le, la, nous, vous, les — souvent avant le verbe.",
      ar: "me, te, le, la… غالبًا قبل الفعل.",
    },
    examples: [
      { fr: "Je le connais.", gloss: { en: "I know him/it.", fr: "Je le connais.", ar: "أعرفه." } },
      { fr: "Tu me comprends.", gloss: { en: "You understand me.", fr: "Tu me comprends.", ar: "تفهمني." } },
    ],
    drills: [
      {
        id: "d1",
        prompt: { en: "I know him → Je … connais", fr: "Je le connais", ar: "أعرفه" },
        answers: ["je le connais", "le"],
      },
      {
        id: "d2",
        prompt: { en: "You understand me → Tu … comprends", fr: "Tu me comprends", ar: "تفهمني" },
        answers: ["tu me comprends", "me"],
      },
    ],
    quiz: [
      {
        id: "q1",
        prompt: { en: "Pronoun position (present):", fr: "Place du pronom :", ar: "موضع الضمير:" },
        options: {
          en: ["always after verb", "usually before verb", "end of sentence only", "never used"],
          fr: ["toujours après", "souvent avant le verbe", "fin de phrase seulement", "jamais"],
          ar: ["دائمًا بعد الفعل", "غالبًا قبل الفعل", "نهاية الجملة فقط", "أبدًا"],
        },
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: { en: "Je le vois — le replaces…", fr: "le remplace :", ar: "le يحل محل:" },
        options: {
          en: ["a place", "a direct object (masc.)", "a subject only", "an adjective"],
          fr: ["un lieu", "un COD masculin", "un sujet", "un adjectif"],
          ar: ["مكان", "مفعول مذكر", "فاعل فقط", "صفة"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
];

export function getChapterById(id: string): AcademicChapter | undefined {
  return ACADEMIC_CHAPTERS.find((c) => c.id === id);
}

export function getAllChapters(): AcademicChapter[] {
  return [...ACADEMIC_CHAPTERS].sort((a, b) => a.order - b.order);
}

export function getChaptersByLevel(level: string): AcademicChapter[] {
  return ACADEMIC_CHAPTERS.filter((c) => c.level === level).sort(
    (a, b) => a.order - b.order
  );
}
