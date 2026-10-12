/** French grammar reference — A1 through C1 core (on site) */

import type { GrammarTopic } from "../types";

export const FR_GRAMMAR_TOPICS: GrammarTopic[] = [
  {
    id: "fr-articles",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Definite articles (le, la, l', les)",
      fr: "Articles définis (le, la, l', les)",
      ar: "أدوات التعريف (le, la, l', les)",
    },
    summary: {
      en: "le = masculine singular, la = feminine singular, l' before vowel sound, les = plural.",
      fr: "le = masculin singulier, la = féminin singulier, l' devant voyelle, les = pluriel.",
      ar: "le للمذكر، la للمؤنث، l' قبل صوت علة، les للجمع.",
    },
    examples: [
      { fr: "le café", gloss: { en: "the coffee", fr: "le café", ar: "القهوة" } },
      { fr: "la gare", gloss: { en: "the station", fr: "la gare", ar: "المحطة" } },
      { fr: "l'eau", gloss: { en: "the water", fr: "l'eau", ar: "الماء" } },
      { fr: "les enfants", gloss: { en: "the children", fr: "les enfants", ar: "الأطفال" } },
    ],
    commonMistakes: {
      en: "Saying « la café » — café is masculine → le café.",
      fr: "Dire « la café » — café est masculin → le café.",
      ar: "قول « la café » — café مذكر → le café.",
    },
  },
  {
    id: "fr-indef-articles",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Indefinite articles (un, une, des)",
      fr: "Articles indéfinis (un, une, des)",
      ar: "أدوات التنكير (un, une, des)",
    },
    summary: {
      en: "un (masc.), une (fem.), des (plural) = a / some.",
      fr: "un (masc.), une (fém.), des (pluriel).",
      ar: "un مذكر، une مؤنث، des جمع.",
    },
    examples: [
      { fr: "un livre", gloss: { en: "a book", fr: "un livre", ar: "كتاب" } },
      { fr: "une table", gloss: { en: "a table", fr: "une table", ar: "طاولة" } },
      { fr: "des amis", gloss: { en: "friends / some friends", fr: "des amis", ar: "أصدقاء" } },
    ],
    commonMistakes: {
      en: "Using des when you need les (specific).",
      fr: "Utiliser des au lieu de les (défini).",
      ar: "استخدام des بدل les للمعرّف.",
    },
  },
  {
    id: "fr-etre-avoir",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "être and avoir (present)",
      fr: "être et avoir (présent)",
      ar: "être و avoir في المضارع",
    },
    summary: {
      en: "je suis / j'ai, tu es / tu as, il est / il a, nous sommes / nous avons, vous êtes / vous avez, ils sont / ils ont.",
      fr: "Conjugaisons de base au présent.",
      ar: "تصريفات أساسية في المضارع.",
    },
    examples: [
      { fr: "Je suis de Paris.", gloss: { en: "I am from Paris.", fr: "Je suis de Paris.", ar: "أنا من باريس." } },
      { fr: "J'ai un rendez-vous.", gloss: { en: "I have an appointment.", fr: "J'ai un rendez-vous.", ar: "لدي موعد." } },
    ],
    commonMistakes: {
      en: "Confusing « je suis » (I am) with « j'ai » (I have).",
      fr: "Confondre « je suis » et « j'ai ».",
      ar: "الخلط بين je suis و j'ai.",
    },
  },
  {
    id: "fr-present-er",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Present tense of -er verbs",
      fr: "Présent des verbes en -er",
      ar: "مضارع الأفعال المنتهية بـ -er",
    },
    summary: {
      en: "Remove -er, add: -e, -es, -e, -ons, -ez, -ent.",
      fr: "Radical + e, es, e, ons, ez, ent.",
      ar: "الجذر + النهايات القياسية.",
    },
    examples: [
      { fr: "Je parle français.", gloss: { en: "I speak French.", fr: "Je parle français.", ar: "أتكلم الفرنسية." } },
      { fr: "Nous habitons ici.", gloss: { en: "We live here.", fr: "Nous habitons ici.", ar: "نسكن هنا." } },
    ],
    commonMistakes: {
      en: "Pronouncing the final -ent of ils parlent (it is silent).",
      fr: "Prononcer le -ent final (il est muet).",
      ar: "نطق -ent في ils parlent (صامت).",
    },
  },
  {
    id: "fr-negation",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Negation with ne… pas",
      fr: "Négation ne… pas",
      ar: "النفي بـ ne… pas",
    },
    summary: {
      en: "ne before the verb, pas after: Je ne parle pas.",
      fr: "ne avant le verbe, pas après.",
      ar: "ne قبل الفعل و pas بعده.",
    },
    examples: [
      { fr: "Je ne comprends pas.", gloss: { en: "I do not understand.", fr: "Je ne comprends pas.", ar: "لا أفهم." } },
      { fr: "Il n'est pas là.", gloss: { en: "He is not here.", fr: "Il n'est pas là.", ar: "هو ليس هنا." } },
    ],
    commonMistakes: {
      en: "Dropping ne in formal writing.",
      fr: "Oublier ne à l'écrit soigné.",
      ar: "نسيان ne في الكتابة الرسمية.",
    },
  },
  {
    id: "fr-questions",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Simple questions",
      fr: "Questions simples",
      ar: "أسئلة بسيطة",
    },
    summary: {
      en: "Est-ce que… ? / rising intonation / où, combien, comment, quand, pourquoi.",
      fr: "Est-ce que… ? / intonation / mots interrogatifs.",
      ar: "Est-ce que… ؟ / أين، كم، كيف، متى، لماذا.",
    },
    examples: [
      { fr: "Où est la gare ?", gloss: { en: "Where is the station?", fr: "Où est la gare ?", ar: "أين المحطة؟" } },
      { fr: "C'est combien ?", gloss: { en: "How much is it?", fr: "C'est combien ?", ar: "بكم هذا؟" } },
    ],
    commonMistakes: {
      en: "Word-for-word translation of question order.",
      fr: "Traduire l'ordre des mots d'une autre langue.",
      ar: "الترجمة الحرفية لترتيب السؤال.",
    },
  },
  {
    id: "fr-politesse",
    targetLanguage: "fr",
    level: "A1",
    title: {
      en: "Politeness: vous / tu",
      fr: "Politesse : vous / tu",
      ar: "الأدب: vous / tu",
    },
    summary: {
      en: "vous = formal or plural; tu = informal singular.",
      fr: "vous = formel ou pluriel ; tu = familier.",
      ar: "vous رسمي أو جمع؛ tu غير رسمي.",
    },
    examples: [
      { fr: "Pouvez-vous m'aider ?", gloss: { en: "Could you help me?", fr: "Pouvez-vous m'aider ?", ar: "هل يمكنكم مساعدتي؟" } },
      { fr: "Tu peux m'aider ?", gloss: { en: "Can you help me? (informal)", fr: "Tu peux m'aider ?", ar: "تقدر تساعدني؟" } },
    ],
    commonMistakes: {
      en: "Using tu too quickly with staff or officials.",
      fr: "Utiliser tu trop vite avec le personnel.",
      ar: "استخدام tu بسرعة مع الموظفين.",
    },
  },
  {
    id: "fr-partitif",
    targetLanguage: "fr",
    level: "A2",
    title: {
      en: "Partitive articles (du, de la, de l', des)",
      fr: "Articles partitifs",
      ar: "أدوات الكمية",
    },
    summary: {
      en: "Unspecified quantity: Je voudrais du pain.",
      fr: "Quantité non précisée : du / de la / de l' / des.",
      ar: "كمية غير محددة.",
    },
    examples: [
      { fr: "Je voudrais de l'eau.", gloss: { en: "I would like some water.", fr: "Je voudrais de l'eau.", ar: "أريد بعض الماء." } },
      { fr: "Il mange du fromage.", gloss: { en: "He eats (some) cheese.", fr: "Il mange du fromage.", ar: "يأكل جبنًا." } },
    ],
    commonMistakes: {
      en: "Using le/la when you mean « some ».",
      fr: "Utiliser le/la au lieu du partitif.",
      ar: "استخدام le/la بدل الكمية.",
    },
  },
  {
    id: "fr-passe-compose",
    targetLanguage: "fr",
    level: "A2",
    title: {
      en: "Passé composé",
      fr: "Passé composé",
      ar: "الماضي المركب",
    },
    summary: {
      en: "avoir or être + past participle. Movement/reflexive often être.",
      fr: "avoir ou être + participe passé.",
      ar: "avoir أو être + التصريف الماضي.",
    },
    examples: [
      { fr: "J'ai travaillé hier.", gloss: { en: "I worked yesterday.", fr: "J'ai travaillé hier.", ar: "عملت أمس." } },
      { fr: "Elle est allée à Lyon.", gloss: { en: "She went to Lyon.", fr: "Elle est allée à Lyon.", ar: "ذهبت إلى ليون." } },
    ],
    commonMistakes: {
      en: "Forgetting agreement with être: elle est allé → allée.",
      fr: "Oublier l'accord avec être.",
      ar: "نسيان المطابقة مع être.",
    },
  },
  {
    id: "fr-futur-proche",
    targetLanguage: "fr",
    level: "A2",
    title: {
      en: "Futur proche (aller + infinitive)",
      fr: "Futur proche",
      ar: "المستقبل القريب",
    },
    summary: {
      en: "Je vais + infinitive for near plans.",
      fr: "Je vais + infinitif.",
      ar: "Je vais + مصدر.",
    },
    examples: [
      { fr: "Je vais étudier.", gloss: { en: "I'm going to study.", fr: "Je vais étudier.", ar: "سأدرس." } },
      { fr: "Nous allons partir demain.", gloss: { en: "We are going to leave tomorrow.", fr: "Nous allons partir demain.", ar: "سنغادر غدًا." } },
    ],
    commonMistakes: {
      en: "Using present when you mean a planned future.",
      fr: "Utiliser le présent pour un projet annoncé.",
      ar: "استخدام المضارع بدل المستقبل القريب.",
    },
  },
  {
    id: "fr-pronoms-cod",
    targetLanguage: "fr",
    level: "B1",
    title: {
      en: "Object pronouns (me, te, le, la, nous, vous, les)",
      fr: "Pronoms COD",
      ar: "ضمائر المفعول",
    },
    summary: {
      en: "Usually before the verb: Je le vois. Je l'aime.",
      fr: "Souvent avant le verbe : Je le vois.",
      ar: "غالبًا قبل الفعل.",
    },
    examples: [
      { fr: "Je le connais.", gloss: { en: "I know him/it.", fr: "Je le connais.", ar: "أعرفه." } },
      { fr: "Tu me comprends.", gloss: { en: "You understand me.", fr: "Tu me comprends.", ar: "تفهمني." } },
    ],
    commonMistakes: {
      en: "Putting the pronoun after the verb like in English.",
      fr: "Placer le pronom après le verbe comme en anglais.",
      ar: "وضع الضمير بعد الفعل مثل الإنجليزية.",
    },
  },
  {
    id: "fr-conditionnel",
    targetLanguage: "fr",
    level: "B1",
    title: {
      en: "Conditionnel présent (politeness & advice)",
      fr: "Conditionnel présent",
      ar: "الشرط الحاضر",
    },
    summary: {
      en: "Je voudrais… / Tu devrais… for soft requests and advice.",
      fr: "Je voudrais… / Tu devrais…",
      ar: "Je voudrais… / Tu devrais…",
    },
    examples: [
      { fr: "Je voudrais un café.", gloss: { en: "I would like a coffee.", fr: "Je voudrais un café.", ar: "أود قهوة." } },
      { fr: "Tu devrais te reposer.", gloss: { en: "You should rest.", fr: "Tu devrais te reposer.", ar: "ينبغي أن ترتاح." } },
    ],
    commonMistakes: {
      en: "Using harsh imperative when a soft conditionnel is better.",
      fr: "Utiliser l'impératif trop direct.",
      ar: "الأمر المباشر بدل الشرط المهذب.",
    },
  },
  {
    id: "fr-subjonctif-intro",
    targetLanguage: "fr",
    level: "B2",
    title: {
      en: "Subjunctive intro (il faut que…)",
      fr: "Subjonctif — introduction",
      ar: "صيغة التمنّي — مقدمة",
    },
    summary: {
      en: "After il faut que, vouloir que, emotion: que + subjunctive stem.",
      fr: "Après il faut que, vouloir que…",
      ar: "بعد il faut que وغيرها.",
    },
    examples: [
      { fr: "Il faut que tu viennes.", gloss: { en: "You need to come.", fr: "Il faut que tu viennes.", ar: "يجب أن تأتي." } },
      { fr: "Je veux que vous soyez prêts.", gloss: { en: "I want you to be ready.", fr: "Je veux que vous soyez prêts.", ar: "أريدكم أن تكونوا مستعدين." } },
    ],
    commonMistakes: {
      en: "Using indicative after il faut que.",
      fr: "Mettre l'indicatif après il faut que.",
      ar: "استخدام المضارع العادي بعد il faut que.",
    },
  },
  {
    id: "fr-plus-que-parfait",
    targetLanguage: "fr",
    level: "B2",
    title: {
      en: "Plus-que-parfait (earlier past)",
      fr: "Plus-que-parfait",
      ar: "الماضي الأسبق",
    },
    summary: {
      en: "avais/étais + past participle for « had done ».",
      fr: "avais / étais + participe passé.",
      ar: "avais/étais + التصريف الماضي.",
    },
    examples: [
      { fr: "J'avais déjà mangé.", gloss: { en: "I had already eaten.", fr: "J'avais déjà mangé.", ar: "كنت قد أكلت." } },
    ],
    commonMistakes: {
      en: "Using passé composé for a clearly earlier past.",
      fr: "Utiliser le passé composé pour un passé antérieur clair.",
      ar: "استخدام الماضي المركب بدل الأسبق.",
    },
  },
  {
    id: "fr-nominalisation",
    targetLanguage: "fr",
    level: "C1",
    title: {
      en: "Nominal style (academic)",
      fr: "Style nominal (académique)",
      ar: "أسلوب اسمي (أكاديمي)",
    },
    summary: {
      en: "Prefer noun phrases in formal analysis: la mise en œuvre de…",
      fr: "Privilégier les noms en analyse formelle.",
      ar: "تفضيل التراكيب الاسمية في التحليل الرسمي.",
    },
    examples: [
      {
        fr: "La mise en œuvre de cette politique…",
        gloss: {
          en: "The implementation of this policy…",
          fr: "La mise en œuvre de cette politique…",
          ar: "تنفيذ هذه السياسة…",
        },
      },
    ],
    commonMistakes: {
      en: "Overly spoken style in academic writing.",
      fr: "Style trop oral dans un texte académique.",
      ar: "أسلوب كلامي زائد في نص أكاديمي.",
    },
  },
];
