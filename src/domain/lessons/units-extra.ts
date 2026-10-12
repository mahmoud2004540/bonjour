import type { LessonUnit } from "./types";

/** Additional units to complete a fuller French path */
export const EXTRA_UNITS: LessonUnit[] = [
  {
    id: "fr-a1-origin-unit",
    level: "A1",
    order: 1.5,
    title: { en: "Where are you from?", fr: "D'où venez-vous ?", ar: "من أين أنت؟" },
    completesGoals: ["goal-say-origin", "goal-ask-origin"],
    lesson: {
      intro: {
        en: "Say and ask about origin.",
        fr: "Dire et demander l'origine.",
        ar: "قل واسأل عن الأصل.",
      },
      dialogue: [
        "— Vous êtes d'où ?",
        "— Je suis d'Égypte. Et vous ?",
        "— Je viens de France. J'habite à Lyon.",
      ],
      tip: {
        en: "Je suis de… / Je viens de… / J'habite à…",
        fr: "Je suis de… / Je viens de… / J'habite à…",
        ar: "Je suis de… / Je viens de… / J'habite à…",
      },
    },
    vocab: [
      { term: "je suis de…", meaning: { en: "I am from…", fr: "origine", ar: "أنا من…" }, example: "Je suis d'Égypte." },
      { term: "je viens de…", meaning: { en: "I come from…", fr: "provenance", ar: "أتيت من…" }, example: "Je viens de France." },
      { term: "j'habite à…", meaning: { en: "I live in…", fr: "résidence", ar: "أسكن في…" }, example: "J'habite à Lyon." },
      { term: "vous êtes d'où ?", meaning: { en: "where are you from?", fr: "origine ?", ar: "من أين أنت؟" }, example: "Vous êtes d'où ?" },
    ],
    exercises: [
      {
        id: "ex-or1",
        prompt: { en: "Say you are from Egypt.", fr: "Dites que vous êtes d'Égypte.", ar: "قل إنك من مصر." },
        answers: ["je suis d'egypte", "je suis d'égypte", "je viens d'egypte", "je viens d'égypte"],
      },
      {
        id: "ex-or2",
        prompt: { en: "Ask where someone is from (formal).", fr: "Demandez l'origine.", ar: "اسأل عن الأصل." },
        answers: ["vous etes d'ou", "vous êtes d'où", "vous êtes d'où ?", "d'ou venez-vous", "d'où venez-vous"],
      },
    ],
    review: {
      summary: { en: "Origin phrases.", fr: "Origine.", ar: "الأصل." },
      checklist: {
        en: ["Je suis de…", "Je viens de…", "J'habite à…", "Vous êtes d'où ?"],
        fr: ["Je suis de…", "Je viens de…", "J'habite à…", "Vous êtes d'où ?"],
        ar: ["Je suis de…", "Je viens de…", "J'habite à…", "Vous êtes d'où ?"],
      },
    },
    quiz: [
      {
        id: "q-or1",
        prompt: { en: "I live in Paris:", fr: "J'habite à Paris :", ar: "أسكن في باريس:" },
        options: {
          en: ["Je suis Paris", "J'habite à Paris", "Je prends Paris", "Où est Paris"],
          fr: ["Je suis Paris", "J'habite à Paris", "Je prends Paris", "Où est Paris"],
          ar: ["Je suis Paris", "J'habite à Paris", "Je prends Paris", "Où est Paris"],
        },
        correctIndex: 1,
      },
      {
        id: "q-or2",
        prompt: { en: "Where are you from?", fr: "D'où êtes-vous ?", ar: "من أين أنت؟" },
        options: {
          en: ["Vous êtes d'où ?", "C'est combien ?", "L'addition", "Un café"],
          fr: ["Vous êtes d'où ?", "C'est combien ?", "L'addition", "Un café"],
          ar: ["Vous êtes d'où ?", "C'est combien ?", "L'addition", "Un café"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-numbers-unit",
    level: "A1",
    order: 2.5,
    title: { en: "Numbers & prices", fr: "Nombres et prix", ar: "الأرقام والأسعار" },
    completesGoals: ["unit-a1-numbers"],
    lesson: {
      intro: {
        en: "Count and understand simple prices.",
        fr: "Compter et comprendre des prix simples.",
        ar: "عدّ وافهم أسعارًا بسيطة.",
      },
      dialogue: [
        "— C'est combien ?",
        "— Deux euros cinquante.",
        "— Et ça ?",
        "— Dix euros.",
      ],
      tip: {
        en: "un, deux, trois… dix · euro(s)",
        fr: "un, deux, trois… dix · euro(s)",
        ar: "un, deux, trois… dix · euro(s)",
      },
    },
    vocab: [
      { term: "un / une", meaning: { en: "one", fr: "1", ar: "واحد" }, example: "Un euro." },
      { term: "deux", meaning: { en: "two", fr: "2", ar: "اثنان" }, example: "Deux euros." },
      { term: "trois", meaning: { en: "three", fr: "3", ar: "ثلاثة" }, example: "Trois euros." },
      { term: "cinq", meaning: { en: "five", fr: "5", ar: "خمسة" }, example: "Cinq euros." },
      { term: "dix", meaning: { en: "ten", fr: "10", ar: "عشرة" }, example: "Dix euros." },
    ],
    exercises: [
      {
        id: "ex-num1",
        prompt: { en: "Write the number 3 in French.", fr: "Écrivez 3.", ar: "اكتب 3 بالفرنسية." },
        answers: ["trois"],
      },
      {
        id: "ex-num2",
        prompt: { en: "Write 10 in French.", fr: "Écrivez 10.", ar: "اكتب 10." },
        answers: ["dix"],
      },
    ],
    review: {
      summary: { en: "Numbers 1–10 basics.", fr: "Nombres de base.", ar: "أرقام أساسية." },
      checklist: {
        en: ["un, deux, trois, cinq, dix", "euros"],
        fr: ["un, deux, trois, cinq, dix", "euros"],
        ar: ["un, deux, trois, cinq, dix", "euros"],
      },
    },
    quiz: [
      {
        id: "q-num1",
        prompt: { en: "deux =", fr: "deux =", ar: "deux =" },
        options: {
          en: ["1", "2", "3", "10"],
          fr: ["1", "2", "3", "10"],
          ar: ["1", "2", "3", "10"],
        },
        correctIndex: 1,
      },
      {
        id: "q-num2",
        prompt: { en: "dix =", fr: "dix =", ar: "dix =" },
        options: {
          en: ["2", "5", "10", "12"],
          fr: ["2", "5", "10", "12"],
          ar: ["2", "5", "10", "12"],
        },
        correctIndex: 2,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-time-unit",
    level: "A1",
    order: 3.5,
    title: { en: "Time of day", fr: "L'heure", ar: "الوقت" },
    completesGoals: ["unit-a1-time"],
    lesson: {
      intro: {
        en: "Tell simple time.",
        fr: "Dire l'heure simplement.",
        ar: "قل الوقت ببساطة.",
      },
      dialogue: [
        "— Quelle heure est-il ?",
        "— Il est trois heures.",
        "— Et le rendez-vous ?",
        "— À dix heures.",
      ],
      tip: {
        en: "Il est… heures · À… heures",
        fr: "Il est… heures · À… heures",
        ar: "Il est… heures · À… heures",
      },
    },
    vocab: [
      { term: "quelle heure est-il ?", meaning: { en: "what time is it?", fr: "heure ?", ar: "كم الساعة؟" }, example: "Quelle heure est-il ?" },
      { term: "il est trois heures", meaning: { en: "it is three o'clock", fr: "15h00 forme simple", ar: "الساعة الثالثة" }, example: "Il est trois heures." },
      { term: "à dix heures", meaning: { en: "at ten o'clock", fr: "rendez-vous", ar: "الساعة العاشرة" }, example: "À dix heures." },
      { term: "matin / soir", meaning: { en: "morning / evening", fr: "moments", ar: "صباح / مساء" }, example: "demain matin" },
    ],
    exercises: [
      {
        id: "ex-t1",
        prompt: { en: "Ask the time.", fr: "Demandez l'heure.", ar: "اسأل عن الساعة." },
        answers: ["quelle heure est-il", "quelle heure est-il ?"],
      },
      {
        id: "ex-t2",
        prompt: { en: "Say: at 10 o'clock.", fr: "Dites : à 10 heures.", ar: "قل: الساعة 10." },
        answers: ["a dix heures", "à dix heures"],
      },
    ],
    review: {
      summary: { en: "Time basics.", fr: "L'heure.", ar: "الوقت." },
      checklist: {
        en: ["Quelle heure est-il ?", "Il est… heures", "À… heures"],
        fr: ["Quelle heure est-il ?", "Il est… heures", "À… heures"],
        ar: ["Quelle heure est-il ?", "Il est… heures", "À… heures"],
      },
    },
    quiz: [
      {
        id: "q-t1",
        prompt: { en: "What time is it?", fr: "Quelle heure ?", ar: "كم الساعة؟" },
        options: {
          en: ["Quelle heure est-il ?", "C'est combien ?", "Bonjour", "Merci"],
          fr: ["Quelle heure est-il ?", "C'est combien ?", "Bonjour", "Merci"],
          ar: ["Quelle heure est-il ?", "C'est combien ?", "Bonjour", "Merci"],
        },
        correctIndex: 0,
      },
      {
        id: "q-t2",
        prompt: { en: "At ten:", fr: "À dix heures :", ar: "الساعة 10:" },
        options: {
          en: ["À dix heures", "Dix café", "Je suis dix", "Où dix"],
          fr: ["À dix heures", "Dix café", "Je suis dix", "Où dix"],
          ar: ["À dix heures", "Dix café", "Je suis dix", "Où dix"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-logement-unit",
    level: "A1",
    order: 5.5,
    title: { en: "Housing", fr: "Le logement", ar: "السكن" },
    completesGoals: ["goal-say-address-type", "goal-describe-home-basic"],
    lesson: {
      intro: {
        en: "Say where you live and describe home simply.",
        fr: "Dire où l'on habite et décrire le logement.",
        ar: "قل أين تسكن وصف السكن.",
      },
      dialogue: [
        "— Où habitez-vous ?",
        "— J'habite à Paris, dans un appartement.",
        "— C'est grand ?",
        "— Non, c'est un petit appartement.",
      ],
      tip: {
        en: "appartement / maison · J'habite à…",
        fr: "appartement / maison · J'habite à…",
        ar: "appartement / maison · J'habite à…",
      },
    },
    vocab: [
      { term: "j'habite à…", meaning: { en: "I live in…", fr: "résidence", ar: "أسكن في" }, example: "J'habite à Paris." },
      { term: "un appartement", meaning: { en: "an apartment", fr: "appart.", ar: "شقة" }, example: "dans un appartement" },
      { term: "une maison", meaning: { en: "a house", fr: "maison", ar: "منزل" }, example: "dans une maison" },
      { term: "petit / grand", meaning: { en: "small / big", fr: "taille", ar: "صغير / كبير" }, example: "un petit appartement" },
    ],
    exercises: [
      {
        id: "ex-lg1",
        prompt: { en: "Say you live in an apartment.", fr: "Dites que vous habitez dans un appartement.", ar: "قل إنك تسكن في شقة." },
        answers: ["j'habite dans un appartement", "jhabite dans un appartement"],
      },
      {
        id: "ex-lg2",
        prompt: { en: "Say: a small apartment.", fr: "Un petit appartement.", ar: "شقة صغيرة." },
        answers: ["un petit appartement", "c'est un petit appartement"],
      },
    ],
    review: {
      summary: { en: "Housing.", fr: "Logement.", ar: "سكن." },
      checklist: {
        en: ["J'habite à…", "appartement", "maison", "petit / grand"],
        fr: ["J'habite à…", "appartement", "maison", "petit / grand"],
        ar: ["J'habite à…", "appartement", "maison", "petit / grand"],
      },
    },
    quiz: [
      {
        id: "q-lg1",
        prompt: { en: "apartment:", fr: "appartement :", ar: "شقة:" },
        options: {
          en: ["une maison", "un appartement", "une gare", "un café"],
          fr: ["une maison", "un appartement", "une gare", "un café"],
          ar: ["une maison", "un appartement", "une gare", "un café"],
        },
        correctIndex: 1,
      },
      {
        id: "q-lg2",
        prompt: { en: "I live in…", fr: "J'habite…", ar: "أسكن…" },
        options: {
          en: ["Je prends à Paris", "J'habite à Paris", "Je suis appartement", "Où Paris"],
          fr: ["Je prends à Paris", "J'habite à Paris", "Je suis appartement", "Où Paris"],
          ar: ["Je prends à Paris", "J'habite à Paris", "Je suis appartement", "Où Paris"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-family-unit",
    level: "A1",
    order: 5.7,
    title: { en: "Family", fr: "La famille", ar: "العائلة" },
    completesGoals: ["unit-a1-family"],
    lesson: {
      intro: {
        en: "Talk about close family simply.",
        fr: "Parler de la famille proche.",
        ar: "تحدّث عن العائلة القريبة.",
      },
      dialogue: [
        "— Tu as des frères et sœurs ?",
        "— Oui, j'ai un frère et une sœur.",
        "— Et tes parents ?",
        "— Ils habitent au Caire.",
      ],
      tip: {
        en: "frère, sœur, père, mère, parents",
        fr: "frère, sœur, père, mère, parents",
        ar: "frère, sœur, père, mère, parents",
      },
    },
    vocab: [
      { term: "un frère", meaning: { en: "brother", fr: "frère", ar: "أخ" }, example: "j'ai un frère" },
      { term: "une sœur", meaning: { en: "sister", fr: "sœur", ar: "أخت" }, example: "une sœur" },
      { term: "les parents", meaning: { en: "parents", fr: "parents", ar: "الوالدان" }, example: "mes parents" },
      { term: "j'ai…", meaning: { en: "I have…", fr: "possession", ar: "لدي…" }, example: "J'ai un frère." },
    ],
    exercises: [
      {
        id: "ex-fam1",
        prompt: { en: "Say: I have a brother.", fr: "J'ai un frère.", ar: "لدي أخ." },
        answers: ["j'ai un frere", "j'ai un frère", "jai un frere"],
      },
      {
        id: "ex-fam2",
        prompt: { en: "Write: sister (French).", fr: "Écrivez « sœur ».", ar: "اكتب sœur." },
        answers: ["soeur", "sœur", "une soeur", "une sœur"],
      },
    ],
    review: {
      summary: { en: "Family words.", fr: "Famille.", ar: "عائلة." },
      checklist: {
        en: ["frère", "sœur", "parents", "j'ai…"],
        fr: ["frère", "sœur", "parents", "j'ai…"],
        ar: ["frère", "sœur", "parents", "j'ai…"],
      },
    },
    quiz: [
      {
        id: "q-fam1",
        prompt: { en: "brother:", fr: "frère :", ar: "أخ:" },
        options: {
          en: ["sœur", "frère", "mère", "père"],
          fr: ["sœur", "frère", "mère", "père"],
          ar: ["sœur", "frère", "mère", "père"],
        },
        correctIndex: 1,
      },
      {
        id: "q-fam2",
        prompt: { en: "I have a sister:", fr: "J'ai une sœur :", ar: "لدي أخت:" },
        options: {
          en: ["Je suis sœur", "J'ai une sœur", "Tu as frère", "Parents café"],
          fr: ["Je suis sœur", "J'ai une sœur", "Tu as frère", "Parents café"],
          ar: ["Je suis sœur", "J'ai une sœur", "Tu as frère", "Parents café"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a2-phone-unit",
    level: "A2",
    order: 8.5,
    title: { en: "On the phone", fr: "Au téléphone", ar: "على الهاتف" },
    completesGoals: ["unit-a2-phone"],
    lesson: {
      intro: {
        en: "Answer and leave a simple message.",
        fr: "Répondre et laisser un message simple.",
        ar: "رُد واترك رسالة بسيطة.",
      },
      dialogue: [
        "— Allô ?",
        "— Bonjour, je voudrais parler à Monsieur Dupont.",
        "— Il n'est pas là. Vous voulez laisser un message ?",
        "— Oui. Pouvez-vous lui dire de me rappeler ?",
      ],
      tip: {
        en: "Allô ? · laisser un message · rappeler",
        fr: "Allô ? · laisser un message · rappeler",
        ar: "Allô ؟ · laisser un message · rappeler",
      },
    },
    vocab: [
      { term: "allô ?", meaning: { en: "hello? (phone)", fr: "téléphone", ar: "ألو؟" }, example: "Allô ?" },
      { term: "laisser un message", meaning: { en: "leave a message", fr: "message", ar: "اترك رسالة" }, example: "laisser un message" },
      { term: "rappeler", meaning: { en: "call back", fr: "rappeler", ar: "يُعاود الاتصال" }, example: "me rappeler" },
      { term: "il n'est pas là", meaning: { en: "he is not here", fr: "absent", ar: "ليس موجودًا" }, example: "Il n'est pas là." },
    ],
    exercises: [
      {
        id: "ex-ph1",
        prompt: { en: "Phone hello:", fr: "Salutation téléphone :", ar: "تحية هاتف:" },
        answers: ["allo", "allô", "allô ?"],
      },
      {
        id: "ex-ph2",
        prompt: { en: "Ask them to call you back.", fr: "Demandez un rappel.", ar: "اطلب معاودة الاتصال." },
        answers: ["pouvez-vous lui dire de me rappeler", "pouvez vous lui dire de me rappeler", "me rappeler"],
      },
    ],
    review: {
      summary: { en: "Phone A2.", fr: "Téléphone.", ar: "هاتف." },
      checklist: {
        en: ["Allô ?", "laisser un message", "rappeler"],
        fr: ["Allô ?", "laisser un message", "rappeler"],
        ar: ["Allô ؟", "laisser un message", "rappeler"],
      },
    },
    quiz: [
      {
        id: "q-ph1",
        prompt: { en: "Phone greeting:", fr: "Au téléphone :", ar: "على الهاتف:" },
        options: {
          en: ["Allô ?", "L'addition", "Tout droit", "Enchanté"],
          fr: ["Allô ?", "L'addition", "Tout droit", "Enchanté"],
          ar: ["Allô ؟", "L'addition", "Tout droit", "Enchanté"],
        },
        correctIndex: 0,
      },
      {
        id: "q-ph2",
        prompt: { en: "call back:", fr: "rappeler :", ar: "معاودة الاتصال:" },
        options: {
          en: ["rappeler", "addition", "gare", "frère"],
          fr: ["rappeler", "addition", "gare", "frère"],
          ar: ["rappeler", "addition", "gare", "frère"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a2-past-unit",
    level: "A2",
    order: 8.7,
    title: { en: "Talking about yesterday", fr: "Parler d'hier", ar: "الحديث عن الأمس" },
    completesGoals: ["unit-a2-past"],
    lesson: {
      intro: {
        en: "Simple past with passé composé (avoir).",
        fr: "Passé composé simple avec avoir.",
        ar: "الماضي المركب البسيط مع avoir.",
      },
      dialogue: [
        "— Qu'est-ce que tu as fait hier ?",
        "— J'ai travaillé. Et toi ?",
        "— J'ai visité un musée.",
        "— C'était bien ?",
        "— Oui, j'ai beaucoup aimé.",
      ],
      tip: {
        en: "j'ai + past participle: j'ai travaillé, j'ai visité",
        fr: "j'ai + participe passé",
        ar: "j'ai + التصريف الماضي",
      },
    },
    vocab: [
      { term: "hier", meaning: { en: "yesterday", fr: "hier", ar: "أمس" }, example: "hier" },
      { term: "j'ai travaillé", meaning: { en: "I worked", fr: "passé", ar: "عملت" }, example: "J'ai travaillé." },
      { term: "j'ai visité", meaning: { en: "I visited", fr: "passé", ar: "زرت" }, example: "J'ai visité un musée." },
      { term: "c'était bien", meaning: { en: "it was good", fr: "appréciation", ar: "كان جيدًا" }, example: "C'était bien." },
    ],
    exercises: [
      {
        id: "ex-pa1",
        prompt: { en: "Write: I worked (j'ai…).", fr: "J'ai travaillé.", ar: "عملت." },
        answers: ["j'ai travaille", "j'ai travaillé", "jai travaille"],
      },
      {
        id: "ex-pa2",
        prompt: { en: "Write: yesterday.", fr: "hier", ar: "أمس" },
        answers: ["hier"],
      },
    ],
    review: {
      summary: { en: "Simple past.", fr: "Passé simple d'usage.", ar: "ماضي بسيط." },
      checklist: {
        en: ["hier", "j'ai travaillé", "j'ai visité", "c'était bien"],
        fr: ["hier", "j'ai travaillé", "j'ai visité", "c'était bien"],
        ar: ["hier", "j'ai travaillé", "j'ai visité", "c'était bien"],
      },
    },
    quiz: [
      {
        id: "q-pa1",
        prompt: { en: "yesterday:", fr: "hier :", ar: "أمس:" },
        options: {
          en: ["demain", "hier", "aujourd'hui", "matin"],
          fr: ["demain", "hier", "aujourd'hui", "matin"],
          ar: ["demain", "hier", "aujourd'hui", "matin"],
        },
        correctIndex: 1,
      },
      {
        id: "q-pa2",
        prompt: { en: "I worked:", fr: "J'ai travaillé :", ar: "عملت:" },
        options: {
          en: ["Je travaille", "J'ai travaillé", "Je suis travailler", "Travail moi"],
          fr: ["Je travaille", "J'ai travaillé", "Je suis travailler", "Travail moi"],
          ar: ["Je travaille", "J'ai travaillé", "Je suis travailler", "Travail moi"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-b1-service-unit",
    level: "B1",
    order: 9.5,
    title: { en: "Customer service", fr: "Service client", ar: "خدمة العملاء" },
    completesGoals: ["unit-b1-service"],
    lesson: {
      intro: {
        en: "Explain a problem and ask for a solution.",
        fr: "Expliquer un problème et demander une solution.",
        ar: "اشرح مشكلة واطلب حلًا.",
      },
      dialogue: [
        "— Bonjour, j'ai un problème avec ma commande.",
        "— Je vous écoute.",
        "— Le colis est arrivé endommagé.",
        "— Je suis désolé. On peut vous envoyer un remplacement.",
      ],
      tip: {
        en: "j'ai un problème avec… · remplacement",
        fr: "j'ai un problème avec… · remplacement",
        ar: "j'ai un problème avec… · remplacement",
      },
    },
    vocab: [
      { term: "un problème", meaning: { en: "a problem", fr: "problème", ar: "مشكلة" }, example: "j'ai un problème" },
      { term: "la commande", meaning: { en: "the order", fr: "commande", ar: "الطلبية" }, example: "ma commande" },
      { term: "endommagé", meaning: { en: "damaged", fr: "abîmé", ar: "تالف" }, example: "arrivé endommagé" },
      { term: "un remplacement", meaning: { en: "a replacement", fr: "échange", ar: "بديل" }, example: "envoyer un remplacement" },
    ],
    exercises: [
      {
        id: "ex-sv1",
        prompt: { en: "Say you have a problem with the order.", fr: "Problème de commande.", ar: "مشكلة في الطلبية." },
        answers: ["j'ai un probleme avec ma commande", "j'ai un problème avec ma commande"],
      },
      {
        id: "ex-sv2",
        prompt: { en: "Write: replacement.", fr: "remplacement", ar: "بديل" },
        answers: ["remplacement", "un remplacement"],
      },
    ],
    review: {
      summary: { en: "Service B1.", fr: "Service.", ar: "خدمة." },
      checklist: {
        en: ["problème", "commande", "endommagé", "remplacement"],
        fr: ["problème", "commande", "endommagé", "remplacement"],
        ar: ["problème", "commande", "endommagé", "remplacement"],
      },
    },
    quiz: [
      {
        id: "q-sv1",
        prompt: { en: "damaged:", fr: "endommagé :", ar: "تالف:" },
        options: {
          en: ["endommagé", "bonjour", "frère", "gare"],
          fr: ["endommagé", "bonjour", "frère", "gare"],
          ar: ["endommagé", "bonjour", "frère", "gare"],
        },
        correctIndex: 0,
      },
      {
        id: "q-sv2",
        prompt: { en: "I have a problem:", fr: "J'ai un problème :", ar: "لدي مشكلة:" },
        options: {
          en: ["J'ai un problème", "Je suis problème", "Problème toi", "Allô problème"],
          fr: ["J'ai un problème", "Je suis problème", "Problème toi", "Allô problème"],
          ar: ["J'ai un problème", "Je suis problème", "Problème toi", "Allô problème"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-b1-advice-unit",
    level: "B1",
    order: 9.7,
    title: { en: "Giving advice", fr: "Donner un conseil", ar: "تقديم نصيحة" },
    completesGoals: ["unit-b1-advice"],
    lesson: {
      intro: {
        en: "Suggest and advise politely.",
        fr: "Suggérer et conseiller poliment.",
        ar: "اقترح وانصح بأدب.",
      },
      dialogue: [
        "— Je suis stressé avant l'examen.",
        "— Tu devrais te reposer un peu.",
        "— Et réviser ?",
        "— Oui, mais il vaut mieux ne pas trop forcer.",
      ],
      tip: {
        en: "Tu devrais… · Il vaut mieux…",
        fr: "Tu devrais… · Il vaut mieux…",
        ar: "Tu devrais… · Il vaut mieux…",
      },
    },
    vocab: [
      { term: "tu devrais…", meaning: { en: "you should…", fr: "conseil", ar: "ينبغي أن…" }, example: "Tu devrais te reposer." },
      { term: "il vaut mieux…", meaning: { en: "it is better to…", fr: "préférence", ar: "الأفضل أن…" }, example: "Il vaut mieux dormir." },
      { term: "un conseil", meaning: { en: "a piece of advice", fr: "conseil", ar: "نصيحة" }, example: "un bon conseil" },
    ],
    exercises: [
      {
        id: "ex-ad1",
        prompt: { en: "Start advice: Tu devrais…", fr: "Tu devrais…", ar: "Tu devrais…" },
        answers: ["tu devrais", "tu devrais te reposer"],
      },
      {
        id: "ex-ad2",
        prompt: { en: "Write: il vaut mieux", fr: "il vaut mieux", ar: "il vaut mieux" },
        answers: ["il vaut mieux"],
      },
    ],
    review: {
      summary: { en: "Advice.", fr: "Conseil.", ar: "نصيحة." },
      checklist: {
        en: ["Tu devrais…", "Il vaut mieux…", "conseil"],
        fr: ["Tu devrais…", "Il vaut mieux…", "conseil"],
        ar: ["Tu devrais…", "Il vaut mieux…", "conseil"],
      },
    },
    quiz: [
      {
        id: "q-ad1",
        prompt: { en: "You should:", fr: "Tu devrais :", ar: "ينبغي:" },
        options: {
          en: ["Tu devrais", "Tu es", "Je m'appelle", "Allô"],
          fr: ["Tu devrais", "Tu es", "Je m'appelle", "Allô"],
          ar: ["Tu devrais", "Tu es", "Je m'appelle", "Allô"],
        },
        correctIndex: 0,
      },
      {
        id: "q-ad2",
        prompt: { en: "It is better to:", fr: "Il vaut mieux :", ar: "الأفضل:" },
        options: {
          en: ["Il vaut mieux", "C'est combien", "Bonjour", "Gare"],
          fr: ["Il vaut mieux", "C'est combien", "Bonjour", "Gare"],
          ar: ["Il vaut mieux", "C'est combien", "Bonjour", "Gare"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-b2-formal-unit",
    level: "B2",
    order: 10.5,
    title: { en: "Formal register", fr: "Registre formel", ar: "السجل الرسمي" },
    completesGoals: ["unit-b2-formal"],
    lesson: {
      intro: {
        en: "Write and speak more formally.",
        fr: "Écrire et parler de façon plus formelle.",
        ar: "اكتب وتحدّث بشكل أكثر رسمية.",
      },
      dialogue: [
        "— Je me permets de vous contacter concernant…",
        "— Je vous serais reconnaissant de bien vouloir…",
        "— Dans l'attente de votre retour, je vous prie d'agréer…",
      ],
      tip: {
        en: "Formal openers and closers for email/letter.",
        fr: "Formules d'ouverture et de clôture.",
        ar: "صيغ افتتاح وختام رسمية.",
      },
    },
    vocab: [
      { term: "je me permets de…", meaning: { en: "I take the liberty of…", fr: "formule", ar: "أسمح لنفسي…" }, example: "Je me permets de vous écrire." },
      { term: "concernant", meaning: { en: "regarding", fr: "au sujet de", ar: "بخصوص" }, example: "concernant votre offre" },
      { term: "dans l'attente de votre retour", meaning: { en: "looking forward to your reply", fr: "clôture", ar: "بانتظار ردكم" }, example: "Dans l'attente de votre retour" },
    ],
    exercises: [
      {
        id: "ex-fo1",
        prompt: { en: "Write: concernant", fr: "concernant", ar: "concernant" },
        answers: ["concernant"],
      },
      {
        id: "ex-fo2",
        prompt: { en: "Formal contact start: Je me permets…", fr: "Je me permets…", ar: "Je me permets…" },
        answers: ["je me permets", "je me permets de"],
      },
    ],
    review: {
      summary: { en: "Formal B2.", fr: "Formel.", ar: "رسمي." },
      checklist: {
        en: ["Je me permets de…", "concernant", "Dans l'attente de votre retour"],
        fr: ["Je me permets de…", "concernant", "Dans l'attente de votre retour"],
        ar: ["Je me permets de…", "concernant", "Dans l'attente de votre retour"],
      },
    },
    quiz: [
      {
        id: "q-fo1",
        prompt: { en: "regarding:", fr: "concernant :", ar: "بخصوص:" },
        options: {
          en: ["concernant", "bonjour", "café", "frère"],
          fr: ["concernant", "bonjour", "café", "frère"],
          ar: ["concernant", "bonjour", "café", "frère"],
        },
        correctIndex: 0,
      },
      {
        id: "q-fo2",
        prompt: { en: "Formal opener:", fr: "Ouverture formelle :", ar: "افتتاح رسمي:" },
        options: {
          en: ["Je me permets de…", "Salut ça va", "Allô", "C'est combien"],
          fr: ["Je me permets de…", "Salut ça va", "Allô", "C'est combien"],
          ar: ["Je me permets de…", "Salut ça va", "Allô", "C'est combien"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-c1-hypothesis-unit",
    level: "C1",
    order: 11.5,
    title: { en: "Hypothesis", fr: "L'hypothèse", ar: "الفرضيات" },
    completesGoals: ["unit-c1-hypothesis"],
    lesson: {
      intro: {
        en: "Express hypothesis and conditions.",
        fr: "Exprimer l'hypothèse et la condition.",
        ar: "عبّر عن الفرض والشرط.",
      },
      dialogue: [
        "— Si nous avions plus de temps, nous pourrions approfondir.",
        "— À supposer que le budget soit approuvé…",
        "— Cela dépendrait des priorités de l'équipe.",
      ],
      tip: {
        en: "Si + imparfait · à supposer que… · dépendrait",
        fr: "Conditionnel et hypothèse.",
        ar: "الشرط والافتراض.",
      },
    },
    vocab: [
      { term: "si nous avions…", meaning: { en: "if we had…", fr: "hypothèse", ar: "لو كان لدينا…" }, example: "Si nous avions plus de temps…" },
      { term: "à supposer que…", meaning: { en: "supposing that…", fr: "hypothèse", ar: "بافتراض أن…" }, example: "À supposer que…" },
      { term: "cela dépendrait de…", meaning: { en: "that would depend on…", fr: "conditionnel", ar: "ذلك سيعتمد على…" }, example: "Cela dépendrait des priorités." },
    ],
    exercises: [
      {
        id: "ex-hy1",
        prompt: { en: "Write: à supposer que", fr: "à supposer que", ar: "à supposer que" },
        answers: ["a supposer que", "à supposer que"],
      },
      {
        id: "ex-hy2",
        prompt: { en: "Write: cela dépendrait", fr: "cela dépendrait", ar: "cela dépendrait" },
        answers: ["cela dependrait", "cela dépendrait"],
      },
    ],
    review: {
      summary: { en: "Hypothesis C1.", fr: "Hypothèse.", ar: "فرضية." },
      checklist: {
        en: ["Si nous avions…", "à supposer que…", "cela dépendrait de…"],
        fr: ["Si nous avions…", "à supposer que…", "cela dépendrait de…"],
        ar: ["Si nous avions…", "à supposer que…", "cela dépendrait de…"],
      },
    },
    quiz: [
      {
        id: "q-hy1",
        prompt: { en: "supposing that:", fr: "à supposer que :", ar: "بافتراض:" },
        options: {
          en: ["à supposer que", "bonjour", "un café", "frère"],
          fr: ["à supposer que", "bonjour", "un café", "frère"],
          ar: ["à supposer que", "bonjour", "un café", "frère"],
        },
        correctIndex: 0,
      },
      {
        id: "q-hy2",
        prompt: { en: "would depend:", fr: "dépendrait :", ar: "سيعتمد:" },
        options: {
          en: ["dépendrait", "addition", "gare", "sœur"],
          fr: ["dépendrait", "addition", "gare", "sœur"],
          ar: ["dépendrait", "addition", "gare", "sœur"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
];
