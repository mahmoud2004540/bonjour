import type { LessonUnit } from "./types";

export const A2_C2_UNITS: LessonUnit[] = [
  {
    id: "fr-a2-restaurant-unit",
    level: "A2",
    order: 6,
    title: { en: "At the restaurant", fr: "Au restaurant", ar: "في المطعم" },
    completesGoals: ["goal-order-meal", "goal-restaurant-problem"],
    lesson: {
      intro: {
        en: "Order a meal and handle a simple problem.",
        fr: "Commander un plat et gérer un petit problème.",
        ar: "اطلب وجبة وتعامل مع مشكلة بسيطة.",
      },
      dialogue: [
        "— Une table pour deux, s'il vous plaît.",
        "— Voici le menu.",
        "— Je voudrais le poulet, s'il vous plaît.",
        "— Excusez-moi, ce n'est pas ce que j'ai commandé.",
      ],
      tip: {
        en: "Je voudrais… is more polite than Je veux…",
        fr: "Je voudrais… est plus poli que Je veux…",
        ar: "Je voudrais… أكثر أدبًا من Je veux…",
      },
    },
    vocab: [
      { term: "je voudrais", meaning: { en: "I would like", fr: "souhait poli", ar: "أودّ" }, example: "Je voudrais le poulet." },
      { term: "le menu", meaning: { en: "the menu", fr: "carte", ar: "القائمة" }, example: "Voici le menu." },
      { term: "ce n'est pas ce que j'ai commandé", meaning: { en: "this is not what I ordered", fr: "erreur de commande", ar: "هذا ليس ما طلبته" }, example: "Ce n'est pas ce que j'ai commandé." },
    ],
    exercises: [
      {
        id: "a2r-e1",
        prompt: { en: "Polite order: I would like the chicken.", fr: "Commande polie : le poulet.", ar: "طلب مهذب: الدجاج." },
        answers: ["je voudrais le poulet", "je voudrais le poulet, s'il vous plait"],
      },
      {
        id: "a2r-e2",
        prompt: { en: "Say it's not what you ordered.", fr: "Ce n'est pas votre commande.", ar: "قل إن هذا ليس طلبك." },
        answers: ["ce n'est pas ce que j'ai commande", "ce n'est pas ce que j'ai commandé"],
      },
    ],
    review: {
      summary: { en: "Restaurant A2.", fr: "Restaurant A2.", ar: "مطعم A2." },
      checklist: {
        en: ["Je voudrais…", "le menu", "Ce n'est pas ce que j'ai commandé"],
        fr: ["Je voudrais…", "le menu", "Ce n'est pas ce que j'ai commandé"],
        ar: ["Je voudrais…", "le menu", "Ce n'est pas ce que j'ai commandé"],
      },
    },
    quiz: [
      {
        id: "a2r-q1",
        prompt: { en: "More polite:", fr: "Plus poli :", ar: "أكثر أدبًا:" },
        options: {
          en: ["Je veux le poulet", "Je voudrais le poulet", "Donne poulet", "Poulet maintenant"],
          fr: ["Je veux le poulet", "Je voudrais le poulet", "Donne poulet", "Poulet maintenant"],
          ar: ["Je veux le poulet", "Je voudrais le poulet", "Donne poulet", "Poulet maintenant"],
        },
        correctIndex: 1,
      },
      {
        id: "a2r-q2",
        prompt: { en: "Wrong dish phrase:", fr: "Mauvais plat :", ar: "طبق خطأ:" },
        options: {
          en: ["Merci beaucoup", "Ce n'est pas ce que j'ai commandé", "Bon appétit", "À bientôt"],
          fr: ["Merci beaucoup", "Ce n'est pas ce que j'ai commandé", "Bon appétit", "À bientôt"],
          ar: ["Merci beaucoup", "Ce n'est pas ce que j'ai commandé", "Bon appétit", "À bientôt"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a2-hotel-unit",
    level: "A2",
    order: 7,
    title: { en: "At the hotel", fr: "À l'hôtel", ar: "في الفندق" },
    completesGoals: ["goal-check-in", "goal-hotel-request"],
    lesson: {
      intro: {
        en: "Check in and make a simple request.",
        fr: "S'enregistrer et faire une demande simple.",
        ar: "سجّل الوصول واطلب طلبًا بسيطًا.",
      },
      dialogue: [
        "— Bonsoir. J'ai une réservation au nom de Benali.",
        "— Voici votre clé. Chambre 12.",
        "— Est-ce qu'il y a le Wi-Fi ?",
        "— Oui, le code est sur la carte.",
      ],
      tip: {
        en: "J'ai une réservation au nom de…",
        fr: "Annoncer son nom pour la réservation.",
        ar: "لدي حجز باسم…",
      },
    },
    vocab: [
      { term: "une réservation", meaning: { en: "a reservation", fr: "réservation", ar: "حجز" }, example: "J'ai une réservation." },
      { term: "la clé", meaning: { en: "the key", fr: "clé", ar: "المفتاح" }, example: "Voici votre clé." },
      { term: "le Wi-Fi", meaning: { en: "Wi-Fi", fr: "internet sans fil", ar: "واي فاي" }, example: "Est-ce qu'il y a le Wi-Fi ?" },
    ],
    exercises: [
      {
        id: "a2h-e1",
        prompt: { en: "Say you have a reservation.", fr: "Dites que vous avez une réservation.", ar: "قل إن لديك حجزًا." },
        answers: ["j'ai une reservation", "j'ai une réservation", "jai une reservation"],
      },
      {
        id: "a2h-e2",
        prompt: { en: "Ask if there is Wi-Fi.", fr: "Demandez le Wi-Fi.", ar: "اسأل عن الواي فاي." },
        answers: ["est-ce qu'il y a le wi-fi", "est-ce qu'il y a le wifi", "y a-t-il le wi-fi"],
      },
    ],
    review: {
      summary: { en: "Hotel A2.", fr: "Hôtel A2.", ar: "فندق A2." },
      checklist: {
        en: ["réservation", "clé", "Wi-Fi"],
        fr: ["réservation", "clé", "Wi-Fi"],
        ar: ["réservation", "clé", "Wi-Fi"],
      },
    },
    quiz: [
      {
        id: "a2h-q1",
        prompt: { en: "Reservation:", fr: "Réservation :", ar: "حجز:" },
        options: {
          en: ["J'ai une réservation", "Je suis clé", "Où est le poulet", "Bonjour café"],
          fr: ["J'ai une réservation", "Je suis clé", "Où est le poulet", "Bonjour café"],
          ar: ["J'ai une réservation", "Je suis clé", "Où est le poulet", "Bonjour café"],
        },
        correctIndex: 0,
      },
      {
        id: "a2h-q2",
        prompt: { en: "clé means…", fr: "clé signifie…", ar: "clé تعني…" },
        options: {
          en: ["room", "key", "bill", "menu"],
          fr: ["chambre", "clé", "addition", "menu"],
          ar: ["غرفة", "مفتاح", "فاتورة", "قائمة"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a2-rdv-unit",
    level: "A2",
    order: 8,
    title: { en: "Making an appointment", fr: "Prendre rendez-vous", ar: "حجز موعد" },
    completesGoals: ["goal-make-appointment", "goal-confirm-time"],
    lesson: {
      intro: {
        en: "Book and confirm an appointment.",
        fr: "Prendre et confirmer un rendez-vous.",
        ar: "احجز موعدًا وأكّده.",
      },
      dialogue: [
        "— Bonjour. Je voudrais prendre rendez-vous.",
        "— Vous préférez mardi ou mercredi ?",
        "— Mardi matin, s'il vous plaît.",
        "— D'accord. À mardi à 10 heures.",
      ],
      tip: {
        en: "prendre rendez-vous = to make an appointment",
        fr: "prendre rendez-vous = fixer un créneau",
        ar: "prendre rendez-vous = حجز موعد",
      },
    },
    vocab: [
      { term: "prendre rendez-vous", meaning: { en: "make an appointment", fr: "fixer un RDV", ar: "حجز موعد" }, example: "Je voudrais prendre rendez-vous." },
      { term: "mardi matin", meaning: { en: "Tuesday morning", fr: "mardi matin", ar: "الثلاثاء صباحًا" }, example: "Mardi matin, s'il vous plaît." },
      { term: "à 10 heures", meaning: { en: "at 10 o'clock", fr: "à dix heures", ar: "الساعة 10" }, example: "À mardi à 10 heures." },
    ],
    exercises: [
      {
        id: "a2d-e1",
        prompt: { en: "Say you want an appointment.", fr: "Demandez un rendez-vous.", ar: "اطلب موعدًا." },
        answers: ["je voudrais prendre rendez-vous", "je veux prendre rendez-vous"],
      },
      {
        id: "a2d-e2",
        prompt: { en: "Say Tuesday morning please.", fr: "Mardi matin.", ar: "الثلاثاء صباحًا." },
        answers: ["mardi matin", "mardi matin, s'il vous plait", "mardi matin s'il vous plaît"],
      },
    ],
    review: {
      summary: { en: "Appointments.", fr: "Rendez-vous.", ar: "المواعيد." },
      checklist: {
        en: ["prendre rendez-vous", "mardi matin", "à 10 heures"],
        fr: ["prendre rendez-vous", "mardi matin", "à 10 heures"],
        ar: ["prendre rendez-vous", "mardi matin", "à 10 heures"],
      },
    },
    quiz: [
      {
        id: "a2d-q1",
        prompt: { en: "Book an appointment:", fr: "Prendre RDV :", ar: "حجز موعد:" },
        options: {
          en: ["Je voudrais prendre rendez-vous", "Je suis mardi", "Où est le café", "L'addition"],
          fr: ["Je voudrais prendre rendez-vous", "Je suis mardi", "Où est le café", "L'addition"],
          ar: ["Je voudrais prendre rendez-vous", "Je suis mardi", "Où est le café", "L'addition"],
        },
        correctIndex: 0,
      },
      {
        id: "a2d-q2",
        prompt: { en: "à 10 heures means…", fr: "à 10 heures signifie…", ar: "à 10 heures تعني…" },
        options: {
          en: ["on the 10th", "at 10 o'clock", "10 euros", "room 10"],
          fr: ["le 10", "à dix heures", "10 euros", "chambre 10"],
          ar: ["يوم 10", "الساعة 10", "10 يورو", "غرفة 10"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-b1-travail-unit",
    level: "B1",
    order: 9,
    title: { en: "At work", fr: "Au travail", ar: "في العمل" },
    completesGoals: ["goal-describe-job", "goal-workplace-request"],
    lesson: {
      intro: {
        en: "Talk about your job and make a workplace request.",
        fr: "Parler de son travail et faire une demande professionnelle.",
        ar: "تحدّث عن عملك واطلب طلبًا مهنيًا.",
      },
      dialogue: [
        "— Je travaille dans une entreprise de marketing.",
        "— Je suis responsable de communication.",
        "— Est-ce que je peux avoir un jour de télétravail ?",
        "— On peut en discuter lundi.",
      ],
      tip: {
        en: "Est-ce que je peux… ? softens a request.",
        fr: "Est-ce que je peux… ? adoucit une demande.",
        ar: "Est-ce que je peux… ؟ تلطّف الطلب.",
      },
    },
    vocab: [
      { term: "je travaille dans…", meaning: { en: "I work in…", fr: "mon secteur", ar: "أعمل في…" }, example: "Je travaille dans le marketing." },
      { term: "responsable de…", meaning: { en: "in charge of…", fr: "en charge de…", ar: "مسؤول عن…" }, example: "Responsable de communication." },
      { term: "télétravail", meaning: { en: "remote work", fr: "travail à distance", ar: "عمل عن بُعد" }, example: "un jour de télétravail" },
    ],
    exercises: [
      {
        id: "b1t-e1",
        prompt: { en: "Say you work in marketing.", fr: "Dites que vous travaillez dans le marketing.", ar: "قل إنك تعمل في التسويق." },
        answers: ["je travaille dans le marketing", "je travaille dans une entreprise de marketing"],
      },
      {
        id: "b1t-e2",
        prompt: { en: "Ask for a remote-work day.", fr: "Demandez un jour de télétravail.", ar: "اطلب يوم عمل عن بُعد." },
        answers: ["est-ce que je peux avoir un jour de teletravail", "est-ce que je peux avoir un jour de télétravail"],
      },
    ],
    review: {
      summary: { en: "Work B1.", fr: "Travail B1.", ar: "عمل B1." },
      checklist: {
        en: ["Je travaille dans…", "responsable de…", "télétravail"],
        fr: ["Je travaille dans…", "responsable de…", "télétravail"],
        ar: ["Je travaille dans…", "responsable de…", "télétravail"],
      },
    },
    quiz: [
      {
        id: "b1t-q1",
        prompt: { en: "Remote work:", fr: "Travail à distance :", ar: "عمل عن بُعد:" },
        options: {
          en: ["télétravail", "réservation", "addition", "gare"],
          fr: ["télétravail", "réservation", "addition", "gare"],
          ar: ["télétravail", "réservation", "addition", "gare"],
        },
        correctIndex: 0,
      },
      {
        id: "b1t-q2",
        prompt: { en: "Polite request start:", fr: "Début de demande polie :", ar: "بداية طلب مهذب:" },
        options: {
          en: ["Donne-moi", "Est-ce que je peux…", "Je veux maintenant", "Tu dois"],
          fr: ["Donne-moi", "Est-ce que je peux…", "Je veux maintenant", "Tu dois"],
          ar: ["Donne-moi", "Est-ce que je peux…", "Je veux maintenant", "Tu dois"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-b2-opinion-unit",
    level: "B2",
    order: 10,
    title: { en: "Giving an opinion", fr: "Donner son opinion", ar: "إبداء الرأي" },
    completesGoals: ["goal-express-opinion", "goal-agree-disagree"],
    lesson: {
      intro: {
        en: "Express and nuance an opinion.",
        fr: "Exprimer et nuancer une opinion.",
        ar: "عبّر عن رأيك وناقِش بلطف.",
      },
      dialogue: [
        "— À mon avis, ce projet est intéressant.",
        "— Je suis d'accord, mais il manque de clarté.",
        "— Je ne suis pas tout à fait d'accord.",
        "— On pourrait améliorer le plan.",
      ],
      tip: {
        en: "À mon avis… introduces opinion without sounding absolute.",
        fr: "À mon avis… introduit une opinion.",
        ar: "À mon avis… تقدّم الرأي بدون قطعية.",
      },
    },
    vocab: [
      { term: "à mon avis", meaning: { en: "in my opinion", fr: "selon moi", ar: "في رأيي" }, example: "À mon avis, c'est intéressant." },
      { term: "je suis d'accord", meaning: { en: "I agree", fr: "accord", ar: "أوافق" }, example: "Je suis d'accord." },
      { term: "je ne suis pas tout à fait d'accord", meaning: { en: "I don't quite agree", fr: "désaccord nuancé", ar: "لا أوافق تمامًا" }, example: "Je ne suis pas tout à fait d'accord." },
    ],
    exercises: [
      {
        id: "b2o-e1",
        prompt: { en: "Start an opinion (À mon…).", fr: "Commencez par À mon…", ar: "ابدأ الرأي بـ À mon…" },
        answers: ["a mon avis", "à mon avis"],
      },
      {
        id: "b2o-e2",
        prompt: { en: "Say you agree.", fr: "Dites que vous êtes d'accord.", ar: "قل إنك توافق." },
        answers: ["je suis d'accord", "je suis daccord"],
      },
    ],
    review: {
      summary: { en: "Opinion B2.", fr: "Opinion B2.", ar: "رأي B2." },
      checklist: {
        en: ["À mon avis", "Je suis d'accord", "Je ne suis pas tout à fait d'accord"],
        fr: ["À mon avis", "Je suis d'accord", "Je ne suis pas tout à fait d'accord"],
        ar: ["À mon avis", "Je suis d'accord", "Je ne suis pas tout à fait d'accord"],
      },
    },
    quiz: [
      {
        id: "b2o-q1",
        prompt: { en: "In my opinion:", fr: "Selon moi :", ar: "في رأيي:" },
        options: {
          en: ["À mon avis", "Je m'appelle", "L'addition", "Tout droit"],
          fr: ["À mon avis", "Je m'appelle", "L'addition", "Tout droit"],
          ar: ["À mon avis", "Je m'appelle", "L'addition", "Tout droit"],
        },
        correctIndex: 0,
      },
      {
        id: "b2o-q2",
        prompt: { en: "Soft disagreement:", fr: "Désaccord nuancé :", ar: "اختلاف لطيف:" },
        options: {
          en: ["Tu as tort", "Je ne suis pas tout à fait d'accord", "C'est faux", "Non"],
          fr: ["Tu as tort", "Je ne suis pas tout à fait d'accord", "C'est faux", "Non"],
          ar: ["Tu as tort", "Je ne suis pas tout à fait d'accord", "C'est faux", "Non"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-c1-argument-unit",
    level: "C1",
    order: 11,
    title: { en: "Building an argument", fr: "Construire un argument", ar: "بناء حجة" },
    completesGoals: ["goal-structure-argument", "goal-concede-point"],
    lesson: {
      intro: {
        en: "Structure an argument and concede a point.",
        fr: "Structurer un argument et concéder un point.",
        ar: "ابنِ حجة واعترف بنقطة.",
      },
      dialogue: [
        "— Premièrement, les données montrent une hausse.",
        "— En outre, les usagers le confirment.",
        "— Il est vrai que le coût est élevé.",
        "— Néanmoins, le bénéfice reste clair.",
      ],
      tip: {
        en: "Premièrement / En outre / Néanmoins structure formal speech.",
        fr: "Connecteurs de structuration.",
        ar: "روابط التنظيم: Premièrement، En outre، Néanmoins.",
      },
    },
    vocab: [
      { term: "premièrement", meaning: { en: "firstly", fr: "d'abord", ar: "أولًا" }, example: "Premièrement, les données…" },
      { term: "en outre", meaning: { en: "furthermore", fr: "de plus", ar: "علاوة على ذلك" }, example: "En outre, les usagers…" },
      { term: "néanmoins", meaning: { en: "nevertheless", fr: "cependant", ar: "ومع ذلك" }, example: "Néanmoins, le bénéfice…" },
      { term: "il est vrai que", meaning: { en: "it is true that", fr: "concession", ar: "صحيح أن" }, example: "Il est vrai que le coût est élevé." },
    ],
    exercises: [
      {
        id: "c1a-e1",
        prompt: { en: "Write 'firstly' in French.", fr: "Écrivez « premièrement ».", ar: "اكتب « premièrement »." },
        answers: ["premierement", "premièrement"],
      },
      {
        id: "c1a-e2",
        prompt: { en: "Write a concession: Il est vrai que…", fr: "Concession : Il est vrai que…", ar: "تنازل: Il est vrai que…" },
        answers: ["il est vrai que", "il est vrai que le cout est eleve", "il est vrai que le coût est élevé"],
      },
    ],
    review: {
      summary: { en: "Argument C1.", fr: "Argument C1.", ar: "حجة C1." },
      checklist: {
        en: ["Premièrement", "En outre", "Il est vrai que", "Néanmoins"],
        fr: ["Premièrement", "En outre", "Il est vrai que", "Néanmoins"],
        ar: ["Premièrement", "En outre", "Il est vrai que", "Néanmoins"],
      },
    },
    quiz: [
      {
        id: "c1a-q1",
        prompt: { en: "Furthermore:", fr: "De plus :", ar: "علاوة:" },
        options: {
          en: ["En outre", "Bonjour", "L'addition", "Tout droit"],
          fr: ["En outre", "Bonjour", "L'addition", "Tout droit"],
          ar: ["En outre", "Bonjour", "L'addition", "Tout droit"],
        },
        correctIndex: 0,
      },
      {
        id: "c1a-q2",
        prompt: { en: "Nevertheless:", fr: "Cependant :", ar: "ومع ذلك:" },
        options: {
          en: ["Néanmoins", "Enchanté", "Un café", "Mardi"],
          fr: ["Néanmoins", "Enchanté", "Un café", "Mardi"],
          ar: ["Néanmoins", "Enchanté", "Un café", "Mardi"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-c2-nuance-unit",
    level: "C2",
    order: 12,
    title: { en: "Nuance and precision", fr: "Nuance et précision", ar: "الفروق الدقيقة" },
    completesGoals: ["goal-nuance-register", "goal-precise-claim"],
    lesson: {
      intro: {
        en: "Choose register carefully and qualify claims.",
        fr: "Choisir le registre et nuancer une affirmation.",
        ar: "اختر السجل المناسب وقيّد الادعاء.",
      },
      dialogue: [
        "— Il serait excessif d'affirmer que…",
        "— Dans une certaine mesure, on peut dire que…",
        "— Strictement parlant, les chiffres suggèrent plutôt…",
        "— Cela me paraît judicieux, sous réserve de…",
      ],
      tip: {
        en: "C2 speech avoids absolute claims: dans une certaine mesure, sous réserve de…",
        fr: "Éviter les affirmations absolues.",
        ar: "تجنّب الادعاءات المطلقة.",
      },
    },
    vocab: [
      { term: "dans une certaine mesure", meaning: { en: "to some extent", fr: "partiellement", ar: "إلى حد ما" }, example: "Dans une certaine mesure…" },
      { term: "strictement parlant", meaning: { en: "strictly speaking", fr: "au sens strict", ar: "بصرامة" }, example: "Strictement parlant…" },
      { term: "sous réserve de", meaning: { en: "subject to / provided that", fr: "condition", ar: "بشرط" }, example: "sous réserve de vérification" },
      { term: "il serait excessif d'affirmer que", meaning: { en: "it would be excessive to claim that", fr: "atténuation", ar: "من المبالغة القول إن" }, example: "Il serait excessif d'affirmer que…" },
    ],
    exercises: [
      {
        id: "c2n-e1",
        prompt: { en: "Write: dans une certaine mesure", fr: "Écrivez : dans une certaine mesure", ar: "اكتب: dans une certaine mesure" },
        answers: ["dans une certaine mesure"],
      },
      {
        id: "c2n-e2",
        prompt: { en: "Write: sous réserve de", fr: "Écrivez : sous réserve de", ar: "اكتب: sous réserve de" },
        answers: ["sous reserve de", "sous réserve de"],
      },
    ],
    review: {
      summary: { en: "Nuance C2.", fr: "Nuance C2.", ar: "فروق C2." },
      checklist: {
        en: ["dans une certaine mesure", "strictement parlant", "sous réserve de", "il serait excessif…"],
        fr: ["dans une certaine mesure", "strictement parlant", "sous réserve de", "il serait excessif…"],
        ar: ["dans une certaine mesure", "strictement parlant", "sous réserve de", "il serait excessif…"],
      },
    },
    quiz: [
      {
        id: "c2n-q1",
        prompt: { en: "To some extent:", fr: "Dans une certaine mesure :", ar: "إلى حد ما:" },
        options: {
          en: ["dans une certaine mesure", "bonjour", "un café", "tout droit"],
          fr: ["dans une certaine mesure", "bonjour", "un café", "tout droit"],
          ar: ["dans une certaine mesure", "bonjour", "un café", "tout droit"],
        },
        correctIndex: 0,
      },
      {
        id: "c2n-q2",
        prompt: { en: "Qualify a strong claim with:", fr: "Nuancer une affirmation forte :", ar: "تخفيف ادعاء قوي:" },
        options: {
          en: ["Il serait excessif d'affirmer que…", "Je m'appelle…", "L'addition…", "C'est combien ?"],
          fr: ["Il serait excessif d'affirmer que…", "Je m'appelle…", "L'addition…", "C'est combien ?"],
          ar: ["Il serait excessif d'affirmer que…", "Je m'appelle…", "L'addition…", "C'est combien ?"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.5,
  },
];
