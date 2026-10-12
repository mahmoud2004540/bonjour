import type { LessonUnit } from "./types";

/**
 * Daily-life French: situations across a full day and common life domains
 * so learners can function in everyday spoken French.
 */
export const DAILY_LIFE_UNITS: LessonUnit[] = [
  {
    id: "fr-day-morning",
    level: "A1",
    order: 0.5,
    title: { en: "Morning routine", fr: "Le matin", ar: "روتين الصباح" },
    completesGoals: ["unit-day-morning"],
    lesson: {
      intro: {
        en: "Talk about what you do in the morning.",
        fr: "Parler de sa routine du matin.",
        ar: "تحدّث عما تفعله صباحًا.",
      },
      dialogue: [
        "— Tu te lèves à quelle heure ?",
        "— Je me lève à sept heures.",
        "— Ensuite ?",
        "— Je prends mon petit-déjeuner, puis je vais au travail.",
      ],
      tip: {
        en: "se lever · prendre le petit-déjeuner · aller au…",
        fr: "se lever · petit-déjeuner · aller au…",
        ar: "se lever · petit-déjeuner · aller au…",
      },
    },
    vocab: [
      { term: "je me lève", meaning: { en: "I get up", fr: "se lever", ar: "أستيقظ" }, example: "Je me lève à 7 heures." },
      { term: "le petit-déjeuner", meaning: { en: "breakfast", fr: "matin", ar: "الإفطار" }, example: "Je prends mon petit-déjeuner." },
      { term: "ensuite", meaning: { en: "then / next", fr: "après", ar: "ثم" }, example: "Ensuite, je pars." },
      { term: "je vais au travail", meaning: { en: "I go to work", fr: "travail", ar: "أذهب للعمل" }, example: "Je vais au travail." },
    ],
    exercises: [
      {
        id: "ex-m1",
        prompt: { en: "Say: I get up at 7.", fr: "Je me lève à 7 heures.", ar: "أستيقظ الساعة 7." },
        answers: ["je me leve a 7 heures", "je me lève à 7 heures", "je me leve a sept heures", "je me lève à sept heures"],
      },
      {
        id: "ex-m2",
        prompt: { en: "Write: breakfast (French).", fr: "petit-déjeuner", ar: "إفطار" },
        answers: ["petit-dejeuner", "petit-déjeuner", "le petit-dejeuner", "le petit-déjeuner"],
      },
    ],
    review: {
      summary: { en: "Morning.", fr: "Matin.", ar: "صباح." },
      checklist: {
        en: ["Je me lève", "petit-déjeuner", "ensuite", "Je vais au travail"],
        fr: ["Je me lève", "petit-déjeuner", "ensuite", "Je vais au travail"],
        ar: ["Je me lève", "petit-déjeuner", "ensuite", "Je vais au travail"],
      },
    },
    quiz: [
      {
        id: "q-m1",
        prompt: { en: "I get up:", fr: "Je me lève :", ar: "أستيقظ:" },
        options: {
          en: ["Je me lève", "Je suis café", "L'addition", "Allô"],
          fr: ["Je me lève", "Je suis café", "L'addition", "Allô"],
          ar: ["Je me lève", "Je suis café", "L'addition", "Allô"],
        },
        correctIndex: 0,
      },
      {
        id: "q-m2",
        prompt: { en: "breakfast:", fr: "petit-déjeuner :", ar: "إفطار:" },
        options: {
          en: ["dîner", "petit-déjeuner", "gare", "frère"],
          fr: ["dîner", "petit-déjeuner", "gare", "frère"],
          ar: ["dîner", "petit-déjeuner", "gare", "frère"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-weather",
    level: "A1",
    order: 0.6,
    title: { en: "Weather", fr: "La météo", ar: "الطقس" },
    completesGoals: ["unit-day-weather"],
    lesson: {
      intro: {
        en: "Describe the weather simply.",
        fr: "Décrire le temps qu'il fait.",
        ar: "صف الطقس ببساطة.",
      },
      dialogue: [
        "— Quel temps fait-il ?",
        "— Il fait beau.",
        "— Et demain ?",
        "— Il va pleuvoir, je pense.",
      ],
      tip: {
        en: "Il fait beau / chaud / froid · Il pleut",
        fr: "Il fait… · Il pleut",
        ar: "Il fait… · Il pleut",
      },
    },
    vocab: [
      { term: "il fait beau", meaning: { en: "the weather is nice", fr: "soleil", ar: "الجو جميل" }, example: "Il fait beau." },
      { term: "il fait chaud", meaning: { en: "it's hot", fr: "chaleur", ar: "الجو حار" }, example: "Il fait chaud." },
      { term: "il fait froid", meaning: { en: "it's cold", fr: "froid", ar: "الجو بارد" }, example: "Il fait froid." },
      { term: "il pleut", meaning: { en: "it's raining", fr: "pluie", ar: "تمطر" }, example: "Il pleut." },
    ],
    exercises: [
      {
        id: "ex-w1",
        prompt: { en: "Say the weather is nice.", fr: "Il fait beau.", ar: "الجو جميل." },
        answers: ["il fait beau"],
      },
      {
        id: "ex-w2",
        prompt: { en: "Say it's raining.", fr: "Il pleut.", ar: "تمطر." },
        answers: ["il pleut"],
      },
    ],
    review: {
      summary: { en: "Weather.", fr: "Météo.", ar: "طقس." },
      checklist: {
        en: ["Il fait beau", "chaud", "froid", "Il pleut"],
        fr: ["Il fait beau", "chaud", "froid", "Il pleut"],
        ar: ["Il fait beau", "chaud", "froid", "Il pleut"],
      },
    },
    quiz: [
      {
        id: "q-w1",
        prompt: { en: "It's raining:", fr: "Il pleut :", ar: "تمطر:" },
        options: {
          en: ["Il pleut", "Il café", "Je m'appelle", "Allô"],
          fr: ["Il pleut", "Il café", "Je m'appelle", "Allô"],
          ar: ["Il pleut", "Il café", "Je m'appelle", "Allô"],
        },
        correctIndex: 0,
      },
      {
        id: "q-w2",
        prompt: { en: "It's cold:", fr: "Il fait froid :", ar: "بارد:" },
        options: {
          en: ["Il fait froid", "Il fait frère", "C'est combien", "Gare"],
          fr: ["Il fait froid", "Il fait frère", "C'est combien", "Gare"],
          ar: ["Il fait froid", "Il fait frère", "C'est combien", "Gare"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-likes",
    level: "A1",
    order: 0.7,
    title: { en: "Likes & dislikes", fr: "J'aime / Je n'aime pas", ar: "أحب / لا أحب" },
    completesGoals: ["unit-day-likes"],
    lesson: {
      intro: {
        en: "Say what you like and don't like.",
        fr: "Dire ce qu'on aime et n'aime pas.",
        ar: "قل ما تحب وما لا تحب.",
      },
      dialogue: [
        "— Tu aimes le café ?",
        "— Oui, j'adore le café.",
        "— Et le thé ?",
        "— Non, je n'aime pas le thé.",
      ],
      tip: {
        en: "j'aime · j'adore · je n'aime pas",
        fr: "j'aime · j'adore · je n'aime pas",
        ar: "j'aime · j'adore · je n'aime pas",
      },
    },
    vocab: [
      { term: "j'aime", meaning: { en: "I like", fr: "aimer", ar: "أحب" }, example: "J'aime le café." },
      { term: "j'adore", meaning: { en: "I love", fr: "adorer", ar: "أعشق" }, example: "J'adore le cinéma." },
      { term: "je n'aime pas", meaning: { en: "I don't like", fr: "négation", ar: "لا أحب" }, example: "Je n'aime pas le thé." },
      { term: "tu aimes… ?", meaning: { en: "do you like…?", fr: "question", ar: "هل تحب…؟" }, example: "Tu aimes le sport ?" },
    ],
    exercises: [
      {
        id: "ex-lk1",
        prompt: { en: "Say you like coffee.", fr: "J'aime le café.", ar: "أحب القهوة." },
        answers: ["j'aime le cafe", "j'aime le café", "jaime le cafe"],
      },
      {
        id: "ex-lk2",
        prompt: { en: "Say you don't like tea.", fr: "Je n'aime pas le thé.", ar: "لا أحب الشاي." },
        answers: ["je n'aime pas le the", "je n'aime pas le thé", "je naime pas le the"],
      },
    ],
    review: {
      summary: { en: "Preferences.", fr: "Goûts.", ar: "تفضيلات." },
      checklist: {
        en: ["j'aime", "j'adore", "je n'aime pas"],
        fr: ["j'aime", "j'adore", "je n'aime pas"],
        ar: ["j'aime", "j'adore", "je n'aime pas"],
      },
    },
    quiz: [
      {
        id: "q-lk1",
        prompt: { en: "I love:", fr: "J'adore :", ar: "أعشق:" },
        options: {
          en: ["J'adore", "Allô", "Gare", "Dix"],
          fr: ["J'adore", "Allô", "Gare", "Dix"],
          ar: ["J'adore", "Allô", "Gare", "Dix"],
        },
        correctIndex: 0,
      },
      {
        id: "q-lk2",
        prompt: { en: "I don't like:", fr: "Je n'aime pas :", ar: "لا أحب:" },
        options: {
          en: ["Je n'aime pas", "Je suis pas", "Café moi", "Bonjour"],
          fr: ["Je n'aime pas", "Je suis pas", "Café moi", "Bonjour"],
          ar: ["Je n'aime pas", "Je suis pas", "Café moi", "Bonjour"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-food-home",
    level: "A1",
    order: 2.2,
    title: { en: "Food at home", fr: "Manger à la maison", ar: "الأكل في البيت" },
    completesGoals: ["unit-day-food"],
    lesson: {
      intro: {
        en: "Talk about meals and simple food.",
        fr: "Parler des repas et aliments simples.",
        ar: "تحدّث عن الوجبات والطعام البسيط.",
      },
      dialogue: [
        "— Qu'est-ce que tu manges ce soir ?",
        "— Du riz et du poulet.",
        "— Tu as faim ?",
        "— Oui, j'ai très faim !",
      ],
      tip: {
        en: "du / de la · j'ai faim · j'ai soif",
        fr: "partitif · faim · soif",
        ar: "du/de la · جوع · عطش",
      },
    },
    vocab: [
      { term: "j'ai faim", meaning: { en: "I'm hungry", fr: "faim", ar: "أنا جائع" }, example: "J'ai faim." },
      { term: "j'ai soif", meaning: { en: "I'm thirsty", fr: "soif", ar: "أنا عطشان" }, example: "J'ai soif." },
      { term: "le pain", meaning: { en: "bread", fr: "pain", ar: "خبز" }, example: "du pain" },
      { term: "le poulet", meaning: { en: "chicken", fr: "poulet", ar: "دجاج" }, example: "du poulet" },
      { term: "le riz", meaning: { en: "rice", fr: "riz", ar: "أرز" }, example: "du riz" },
    ],
    exercises: [
      {
        id: "ex-fd1",
        prompt: { en: "Say you're hungry.", fr: "J'ai faim.", ar: "أنا جائع." },
        answers: ["j'ai faim", "jai faim"],
      },
      {
        id: "ex-fd2",
        prompt: { en: "Write: chicken.", fr: "poulet", ar: "دجاج" },
        answers: ["poulet", "le poulet", "du poulet"],
      },
    ],
    review: {
      summary: { en: "Food.", fr: "Nourriture.", ar: "طعام." },
      checklist: {
        en: ["j'ai faim", "j'ai soif", "pain", "poulet", "riz"],
        fr: ["j'ai faim", "j'ai soif", "pain", "poulet", "riz"],
        ar: ["j'ai faim", "j'ai soif", "pain", "poulet", "riz"],
      },
    },
    quiz: [
      {
        id: "q-fd1",
        prompt: { en: "I'm hungry:", fr: "J'ai faim :", ar: "جائع:" },
        options: {
          en: ["J'ai faim", "J'ai frère", "Allô", "Gare"],
          fr: ["J'ai faim", "J'ai frère", "Allô", "Gare"],
          ar: ["J'ai faim", "J'ai frère", "Allô", "Gare"],
        },
        correctIndex: 0,
      },
      {
        id: "q-fd2",
        prompt: { en: "bread:", fr: "pain :", ar: "خبز:" },
        options: {
          en: ["riz", "pain", "café", "clé"],
          fr: ["riz", "pain", "café", "clé"],
          ar: ["riz", "pain", "café", "clé"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-clothes",
    level: "A1",
    order: 3.2,
    title: { en: "Clothes", fr: "Les vêtements", ar: "الملابس" },
    completesGoals: ["unit-day-clothes"],
    lesson: {
      intro: {
        en: "Name clothes and say what you wear.",
        fr: "Nommer les vêtements et dire ce qu'on porte.",
        ar: "سمِّ الملابس وقل ماذا ترتدي.",
      },
      dialogue: [
        "— Tu portes quoi aujourd'hui ?",
        "— Un jean et un t-shirt.",
        "— Il fait froid. Prends un manteau.",
        "— D'accord, merci.",
      ],
      tip: {
        en: "porter · un jean · un manteau",
        fr: "porter · jean · manteau",
        ar: "porter · jean · manteau",
      },
    },
    vocab: [
      { term: "un t-shirt", meaning: { en: "a T-shirt", fr: "t-shirt", ar: "تيشيرت" }, example: "un t-shirt" },
      { term: "un jean", meaning: { en: "jeans", fr: "jean", ar: "جينز" }, example: "un jean" },
      { term: "un manteau", meaning: { en: "a coat", fr: "manteau", ar: "معطف" }, example: "un manteau" },
      { term: "je porte", meaning: { en: "I wear / I'm wearing", fr: "porter", ar: "أرتدي" }, example: "Je porte un jean." },
    ],
    exercises: [
      {
        id: "ex-cl1",
        prompt: { en: "Say: I wear jeans.", fr: "Je porte un jean.", ar: "أرتدي جينز." },
        answers: ["je porte un jean"],
      },
      {
        id: "ex-cl2",
        prompt: { en: "Write: coat.", fr: "manteau", ar: "معطف" },
        answers: ["manteau", "un manteau"],
      },
    ],
    review: {
      summary: { en: "Clothes.", fr: "Vêtements.", ar: "ملابس." },
      checklist: {
        en: ["je porte", "jean", "t-shirt", "manteau"],
        fr: ["je porte", "jean", "t-shirt", "manteau"],
        ar: ["je porte", "jean", "t-shirt", "manteau"],
      },
    },
    quiz: [
      {
        id: "q-cl1",
        prompt: { en: "coat:", fr: "manteau :", ar: "معطف:" },
        options: {
          en: ["manteau", "pain", "frère", "gare"],
          fr: ["manteau", "pain", "frère", "gare"],
          ar: ["manteau", "pain", "frère", "gare"],
        },
        correctIndex: 0,
      },
      {
        id: "q-cl2",
        prompt: { en: "I wear:", fr: "Je porte :", ar: "أرتدي:" },
        options: {
          en: ["Je porte", "Je café", "Allô", "Dix"],
          fr: ["Je porte", "Je café", "Allô", "Dix"],
          ar: ["Je porte", "Je café", "Allô", "Dix"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-emotions",
    level: "A2",
    order: 6.2,
    title: { en: "Feelings", fr: "Les émotions", ar: "المشاعر" },
    completesGoals: ["unit-day-emotions"],
    lesson: {
      intro: {
        en: "Say how you feel.",
        fr: "Dire comment on se sent.",
        ar: "قل كيف تشعر.",
      },
      dialogue: [
        "— Ça va ?",
        "— Je suis fatigué aujourd'hui.",
        "— Pourquoi ?",
        "— Je suis un peu stressé à cause du travail.",
      ],
      tip: {
        en: "Je suis + adjective · content, fatigué, stressé",
        fr: "Je suis + adjectif",
        ar: "Je suis + صفة",
      },
    },
    vocab: [
      { term: "je suis content(e)", meaning: { en: "I'm happy", fr: "joie", ar: "أنا سعيد" }, example: "Je suis content." },
      { term: "je suis fatigué(e)", meaning: { en: "I'm tired", fr: "fatigue", ar: "أنا متعب" }, example: "Je suis fatigué." },
      { term: "je suis stressé(e)", meaning: { en: "I'm stressed", fr: "stress", ar: "أنا متوتر" }, example: "Je suis stressé." },
      { term: "ça va ?", meaning: { en: "how are you?", fr: "salut", ar: "عامل إيه؟" }, example: "Ça va ?" },
    ],
    exercises: [
      {
        id: "ex-em1",
        prompt: { en: "Say you're tired.", fr: "Je suis fatigué.", ar: "أنا متعب." },
        answers: ["je suis fatigue", "je suis fatigué", "je suis fatiguee", "je suis fatiguée"],
      },
      {
        id: "ex-em2",
        prompt: { en: "Ask: how are you? (ça…)", fr: "Ça va ?", ar: "عامل إيه؟" },
        answers: ["ca va", "ça va", "ca va ?", "ça va ?"],
      },
    ],
    review: {
      summary: { en: "Feelings.", fr: "Émotions.", ar: "مشاعر." },
      checklist: {
        en: ["content", "fatigué", "stressé", "Ça va ?"],
        fr: ["content", "fatigué", "stressé", "Ça va ?"],
        ar: ["content", "fatigué", "stressé", "Ça va ؟"],
      },
    },
    quiz: [
      {
        id: "q-em1",
        prompt: { en: "tired:", fr: "fatigué :", ar: "متعب:" },
        options: {
          en: ["fatigué", "pain", "gare", "dix"],
          fr: ["fatigué", "pain", "gare", "dix"],
          ar: ["fatigué", "pain", "gare", "dix"],
        },
        correctIndex: 0,
      },
      {
        id: "q-em2",
        prompt: { en: "How are you?", fr: "Ça va ?", ar: "عامل إيه؟" },
        options: {
          en: ["Ça va ?", "C'est combien ?", "L'addition", "Allô billet"],
          fr: ["Ça va ?", "C'est combien ?", "L'addition", "Allô billet"],
          ar: ["Ça va ؟", "C'est combien ؟", "L'addition", "Allô billet"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-invite",
    level: "A2",
    order: 6.4,
    title: { en: "Invitations", fr: "Les invitations", ar: "الدعوات" },
    completesGoals: ["unit-day-invite"],
    lesson: {
      intro: {
        en: "Invite someone and accept or refuse politely.",
        fr: "Inviter, accepter ou refuser poliment.",
        ar: "ادعُ وقبل أو ارفض بأدب.",
      },
      dialogue: [
        "— Tu es libre samedi soir ?",
        "— Oui, pourquoi ?",
        "— On va au cinéma ?",
        "— Avec plaisir !",
      ],
      tip: {
        en: "Tu es libre… ? · Avec plaisir · Je ne peux pas",
        fr: "libre · Avec plaisir · Je ne peux pas",
        ar: "libre · Avec plaisir · Je ne peux pas",
      },
    },
    vocab: [
      { term: "tu es libre… ?", meaning: { en: "are you free…?", fr: "disponibilité", ar: "هل أنت متاح؟" }, example: "Tu es libre samedi ?" },
      { term: "avec plaisir", meaning: { en: "with pleasure", fr: "oui poli", ar: "بكل سرور" }, example: "Avec plaisir !" },
      { term: "je ne peux pas", meaning: { en: "I can't", fr: "refus", ar: "لا أستطيع" }, example: "Désolé, je ne peux pas." },
      { term: "samedi soir", meaning: { en: "Saturday evening", fr: "soir", ar: "السبت مساءً" }, example: "samedi soir" },
    ],
    exercises: [
      {
        id: "ex-inv1",
        prompt: { en: "Say: with pleasure.", fr: "Avec plaisir.", ar: "بكل سرور." },
        answers: ["avec plaisir"],
      },
      {
        id: "ex-inv2",
        prompt: { en: "Say you can't.", fr: "Je ne peux pas.", ar: "لا أستطيع." },
        answers: ["je ne peux pas", "je ne peux pas."],
      },
    ],
    review: {
      summary: { en: "Invites.", fr: "Invitations.", ar: "دعوات." },
      checklist: {
        en: ["Tu es libre… ?", "Avec plaisir", "Je ne peux pas"],
        fr: ["Tu es libre… ?", "Avec plaisir", "Je ne peux pas"],
        ar: ["Tu es libre… ؟", "Avec plaisir", "Je ne peux pas"],
      },
    },
    quiz: [
      {
        id: "q-inv1",
        prompt: { en: "With pleasure:", fr: "Avec plaisir :", ar: "بكل سرور:" },
        options: {
          en: ["Avec plaisir", "L'addition", "Gare", "Dix"],
          fr: ["Avec plaisir", "L'addition", "Gare", "Dix"],
          ar: ["Avec plaisir", "L'addition", "Gare", "Dix"],
        },
        correctIndex: 0,
      },
      {
        id: "q-inv2",
        prompt: { en: "I can't:", fr: "Je ne peux pas :", ar: "لا أقدر:" },
        options: {
          en: ["Je ne peux pas", "Je suis café", "Bonjour", "Frère"],
          fr: ["Je ne peux pas", "Je suis café", "Bonjour", "Frère"],
          ar: ["Je ne peux pas", "Je suis café", "Bonjour", "Frère"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-bank",
    level: "A2",
    order: 7.2,
    title: { en: "Bank & money", fr: "Banque et argent", ar: "البنك والمال" },
    completesGoals: ["unit-day-bank"],
    lesson: {
      intro: {
        en: "Simple bank and payment phrases.",
        fr: "Phrases simples banque et paiement.",
        ar: "جمل بسيطة للبنك والدفع.",
      },
      dialogue: [
        "— Je voudrais ouvrir un compte.",
        "— Vous avez une pièce d'identité ?",
        "— Oui, voici mon passeport.",
        "— Je peux payer par carte ?",
        "— Oui, bien sûr.",
      ],
      tip: {
        en: "compte · carte · pièce d'identité",
        fr: "compte · carte · pièce d'identité",
        ar: "compte · carte · pièce d'identité",
      },
    },
    vocab: [
      { term: "un compte", meaning: { en: "an account", fr: "compte bancaire", ar: "حساب" }, example: "ouvrir un compte" },
      { term: "payer par carte", meaning: { en: "pay by card", fr: "carte bancaire", ar: "الدفع بالبطاقة" }, example: "Je peux payer par carte ?" },
      { term: "espèces", meaning: { en: "cash", fr: "liquide", ar: "نقدًا" }, example: "en espèces" },
      { term: "une pièce d'identité", meaning: { en: "ID document", fr: "identité", ar: "وثيقة هوية" }, example: "pièce d'identité" },
    ],
    exercises: [
      {
        id: "ex-bk1",
        prompt: { en: "Ask to pay by card.", fr: "Payer par carte.", ar: "ادفع بالبطاقة." },
        answers: ["je peux payer par carte", "je peux payer par carte ?", "payer par carte"],
      },
      {
        id: "ex-bk2",
        prompt: { en: "Write: account.", fr: "compte", ar: "حساب" },
        answers: ["compte", "un compte"],
      },
    ],
    review: {
      summary: { en: "Bank.", fr: "Banque.", ar: "بنك." },
      checklist: {
        en: ["compte", "payer par carte", "espèces", "pièce d'identité"],
        fr: ["compte", "payer par carte", "espèces", "pièce d'identité"],
        ar: ["compte", "payer par carte", "espèces", "pièce d'identité"],
      },
    },
    quiz: [
      {
        id: "q-bk1",
        prompt: { en: "pay by card:", fr: "par carte :", ar: "بالبطاقة:" },
        options: {
          en: ["payer par carte", "manger pain", "Allô", "Frère"],
          fr: ["payer par carte", "manger pain", "Allô", "Frère"],
          ar: ["payer par carte", "manger pain", "Allô", "Frère"],
        },
        correctIndex: 0,
      },
      {
        id: "q-bk2",
        prompt: { en: "cash:", fr: "espèces :", ar: "نقدًا:" },
        options: {
          en: ["espèces", "manteau", "riz", "dix"],
          fr: ["espèces", "manteau", "riz", "dix"],
          ar: ["espèces", "manteau", "riz", "dix"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-airport",
    level: "A2",
    order: 7.4,
    title: { en: "At the airport", fr: "À l'aéroport", ar: "في المطار" },
    completesGoals: ["unit-day-airport"],
    lesson: {
      intro: {
        en: "Check-in and basic airport needs.",
        fr: "Enregistrement et besoins de base.",
        ar: "تسجيل الوصول واحتياجات المطار.",
      },
      dialogue: [
        "— Bonjour, je voudrais m'enregistrer.",
        "— Votre passeport, s'il vous plaît.",
        "— Où est la porte d'embarquement ?",
        "— Porte 12, à gauche.",
      ],
      tip: {
        en: "s'enregistrer · passeport · porte d'embarquement",
        fr: "s'enregistrer · passeport · porte",
        ar: "s'enregistrer · passeport · porte",
      },
    },
    vocab: [
      { term: "s'enregistrer", meaning: { en: "to check in", fr: "check-in", ar: "تسجيل الوصول" }, example: "Je voudrais m'enregistrer." },
      { term: "le passeport", meaning: { en: "passport", fr: "passeport", ar: "جواز سفر" }, example: "mon passeport" },
      { term: "la porte d'embarquement", meaning: { en: "boarding gate", fr: "porte", ar: "بوابة الصعود" }, example: "porte d'embarquement 12" },
      { term: "les bagages", meaning: { en: "luggage", fr: "bagages", ar: "الأمتعة" }, example: "mes bagages" },
    ],
    exercises: [
      {
        id: "ex-ap1",
        prompt: { en: "Say you want to check in.", fr: "M'enregistrer.", ar: "تسجيل الوصول." },
        answers: ["je voudrais m'enregistrer", "je voudrais m enregistrer", "m'enregistrer"],
      },
      {
        id: "ex-ap2",
        prompt: { en: "Write: passport.", fr: "passeport", ar: "جواز" },
        answers: ["passeport", "le passeport", "mon passeport"],
      },
    ],
    review: {
      summary: { en: "Airport.", fr: "Aéroport.", ar: "مطار." },
      checklist: {
        en: ["s'enregistrer", "passeport", "porte d'embarquement", "bagages"],
        fr: ["s'enregistrer", "passeport", "porte d'embarquement", "bagages"],
        ar: ["s'enregistrer", "passeport", "porte d'embarquement", "bagages"],
      },
    },
    quiz: [
      {
        id: "q-ap1",
        prompt: { en: "passport:", fr: "passeport :", ar: "جواز:" },
        options: {
          en: ["passeport", "pain", "frère", "café"],
          fr: ["passeport", "pain", "frère", "café"],
          ar: ["passeport", "pain", "frère", "café"],
        },
        correctIndex: 0,
      },
      {
        id: "q-ap2",
        prompt: { en: "check in:", fr: "s'enregistrer :", ar: "تسجيل:" },
        options: {
          en: ["s'enregistrer", "manger", "dormir", "courir"],
          fr: ["s'enregistrer", "manger", "dormir", "courir"],
          ar: ["s'enregistrer", "manger", "dormir", "courir"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-hobbies",
    level: "A2",
    order: 6.6,
    title: { en: "Hobbies", fr: "Les loisirs", ar: "الهوايات" },
    completesGoals: ["unit-day-hobbies"],
    lesson: {
      intro: {
        en: "Talk about free time.",
        fr: "Parler de son temps libre.",
        ar: "تحدّث عن وقت الفراغ.",
      },
      dialogue: [
        "— Tu fais quoi le week-end ?",
        "— Je joue au football et je lis.",
        "— Moi, je regarde des séries.",
        "— Super !",
      ],
      tip: {
        en: "jouer à · lire · regarder",
        fr: "jouer à · lire · regarder",
        ar: "jouer à · lire · regarder",
      },
    },
    vocab: [
      { term: "le week-end", meaning: { en: "the weekend", fr: "week-end", ar: "عطلة نهاية الأسبوع" }, example: "le week-end" },
      { term: "je joue au…", meaning: { en: "I play…", fr: "sport", ar: "ألعب…" }, example: "Je joue au football." },
      { term: "je lis", meaning: { en: "I read", fr: "lire", ar: "أقرأ" }, example: "Je lis un livre." },
      { term: "je regarde", meaning: { en: "I watch", fr: "regarder", ar: "أشاهد" }, example: "Je regarde une série." },
    ],
    exercises: [
      {
        id: "ex-hb1",
        prompt: { en: "Say you play football.", fr: "Je joue au football.", ar: "ألعب كرة قدم." },
        answers: ["je joue au football", "je joue au foot"],
      },
      {
        id: "ex-hb2",
        prompt: { en: "Write: I read.", fr: "Je lis.", ar: "أقرأ." },
        answers: ["je lis"],
      },
    ],
    review: {
      summary: { en: "Hobbies.", fr: "Loisirs.", ar: "هوايات." },
      checklist: {
        en: ["week-end", "jouer au…", "lire", "regarder"],
        fr: ["week-end", "jouer au…", "lire", "regarder"],
        ar: ["week-end", "jouer au…", "lire", "regarder"],
      },
    },
    quiz: [
      {
        id: "q-hb1",
        prompt: { en: "I watch:", fr: "Je regarde :", ar: "أشاهد:" },
        options: {
          en: ["Je regarde", "Je gare", "Allô", "Dix"],
          fr: ["Je regarde", "Je gare", "Allô", "Dix"],
          ar: ["Je regarde", "Je gare", "Allô", "Dix"],
        },
        correctIndex: 0,
      },
      {
        id: "q-hb2",
        prompt: { en: "weekend:", fr: "week-end :", ar: "ويكند:" },
        options: {
          en: ["week-end", "manteau", "passeport", "riz"],
          fr: ["week-end", "manteau", "passeport", "riz"],
          ar: ["week-end", "manteau", "passeport", "riz"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-emergency",
    level: "A2",
    order: 7.6,
    title: { en: "Emergency help", fr: "Urgences", ar: "الطوارئ" },
    completesGoals: ["unit-day-emergency"],
    lesson: {
      intro: {
        en: "Call for help in an emergency.",
        fr: "Demander de l'aide en urgence.",
        ar: "اطلب مساعدة في حالة طوارئ.",
      },
      dialogue: [
        "— Au secours !",
        "— Qu'est-ce qui se passe ?",
        "— J'ai besoin d'un médecin.",
        "— J'appelle les secours.",
      ],
      tip: {
        en: "Au secours ! · J'ai besoin de… · les secours",
        fr: "Au secours · besoin · secours",
        ar: "النجدة · besoin · secours",
      },
    },
    vocab: [
      { term: "au secours !", meaning: { en: "help!", fr: "cri", ar: "النجدة!" }, example: "Au secours !" },
      { term: "j'ai besoin de…", meaning: { en: "I need…", fr: "besoin", ar: "أحتاج…" }, example: "J'ai besoin d'aide." },
      { term: "un médecin", meaning: { en: "a doctor", fr: "médecin", ar: "طبيب" }, example: "un médecin" },
      { term: "les secours", meaning: { en: "emergency services", fr: "secours", ar: "خدمات الإنقاذ" }, example: "appeler les secours" },
    ],
    exercises: [
      {
        id: "ex-eg1",
        prompt: { en: "Shout for help.", fr: "Au secours !", ar: "النجدة!" },
        answers: ["au secours", "au secours !"],
      },
      {
        id: "ex-eg2",
        prompt: { en: "Say you need a doctor.", fr: "J'ai besoin d'un médecin.", ar: "أحتاج طبيبًا." },
        answers: ["j'ai besoin d'un medecin", "j'ai besoin d'un médecin", "jai besoin d'un medecin"],
      },
    ],
    review: {
      summary: { en: "Emergency.", fr: "Urgence.", ar: "طوارئ." },
      checklist: {
        en: ["Au secours !", "J'ai besoin de…", "médecin", "secours"],
        fr: ["Au secours !", "J'ai besoin de…", "médecin", "secours"],
        ar: ["Au secours !", "J'ai besoin de…", "médecin", "secours"],
      },
    },
    quiz: [
      {
        id: "q-eg1",
        prompt: { en: "Help!:", fr: "Au secours :", ar: "النجدة:" },
        options: {
          en: ["Au secours !", "Bonjour", "Merci", "Café"],
          fr: ["Au secours !", "Bonjour", "Merci", "Café"],
          ar: ["Au secours !", "Bonjour", "Merci", "Café"],
        },
        correctIndex: 0,
      },
      {
        id: "q-eg2",
        prompt: { en: "I need:", fr: "J'ai besoin de :", ar: "أحتاج:" },
        options: {
          en: ["J'ai besoin de", "Je suis de", "Allô de", "Dix de"],
          fr: ["J'ai besoin de", "Je suis de", "Allô de", "Dix de"],
          ar: ["J'ai besoin de", "Je suis de", "Allô de", "Dix de"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-day-future",
    level: "A2",
    order: 8.2,
    title: { en: "Future plans", fr: "Projets futurs", ar: "خطط المستقبل" },
    completesGoals: ["unit-day-future"],
    lesson: {
      intro: {
        en: "Talk about near future plans.",
        fr: "Parler de projets proches.",
        ar: "تحدّث عن خطط قريبة.",
      },
      dialogue: [
        "— Qu'est-ce que tu vas faire demain ?",
        "— Je vais étudier, puis je vais voir un ami.",
        "— Et ce week-end ?",
        "— On va peut-être voyager.",
      ],
      tip: {
        en: "aller + infinitive: je vais…",
        fr: "futur proche : je vais + infinitif",
        ar: "المستقبل القريب: je vais + مصدر",
      },
    },
    vocab: [
      { term: "je vais…", meaning: { en: "I'm going to…", fr: "futur proche", ar: "سـ…" }, example: "Je vais étudier." },
      { term: "demain", meaning: { en: "tomorrow", fr: "demain", ar: "غدًا" }, example: "demain" },
      { term: "peut-être", meaning: { en: "maybe", fr: "possibilité", ar: "ربما" }, example: "peut-être" },
      { term: "voyager", meaning: { en: "to travel", fr: "voyage", ar: "يسافر" }, example: "Je vais voyager." },
    ],
    exercises: [
      {
        id: "ex-fu1",
        prompt: { en: "Say: I'm going to study.", fr: "Je vais étudier.", ar: "سأدرس." },
        answers: ["je vais etudier", "je vais étudier"],
      },
      {
        id: "ex-fu2",
        prompt: { en: "Write: tomorrow.", fr: "demain", ar: "غدًا" },
        answers: ["demain"],
      },
    ],
    review: {
      summary: { en: "Plans.", fr: "Projets.", ar: "خطط." },
      checklist: {
        en: ["je vais…", "demain", "peut-être", "voyager"],
        fr: ["je vais…", "demain", "peut-être", "voyager"],
        ar: ["je vais…", "demain", "peut-être", "voyager"],
      },
    },
    quiz: [
      {
        id: "q-fu1",
        prompt: { en: "tomorrow:", fr: "demain :", ar: "غدًا:" },
        options: {
          en: ["hier", "demain", "aujourd'hui", "soir"],
          fr: ["hier", "demain", "aujourd'hui", "soir"],
          ar: ["hier", "demain", "aujourd'hui", "soir"],
        },
        correctIndex: 1,
      },
      {
        id: "q-fu2",
        prompt: { en: "I'm going to…:", fr: "Je vais… :", ar: "سـ:" },
        options: {
          en: ["Je vais", "Je suis", "Allô", "Dix"],
          fr: ["Je vais", "Je suis", "Allô", "Dix"],
          ar: ["Je vais", "Je suis", "Allô", "Dix"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
];
