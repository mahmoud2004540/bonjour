import type { LessonUnit } from "./types";

export const A1_UNITS: LessonUnit[] = [
  {
    id: "fr-a1-intro-unit",
    level: "A1",
    order: 1,
    title: { en: "Introducing yourself", fr: "Se présenter", ar: "تقديم النفس" },
    completesGoals: ["goal-introduce-self", "goal-ask-name"],
    lesson: {
      intro: {
        en: "Greet and say your name in French.",
        fr: "Saluer et dire son nom.",
        ar: "حيِّ وقل اسمك بالفرنسية.",
      },
      dialogue: [
        "— Bonjour !",
        "— Bonjour ! Je m'appelle Sara.",
        "— Enchanté. Moi, je m'appelle Karim.",
        "— Comment vous appellez-vous ?",
        "— Je m'appelle Nour.",
      ],
      tip: {
        en: "Je m'appelle… (not Je appelle).",
        fr: "Je m'appelle… (pas Je appelle).",
        ar: "Je m'appelle… (مش Je appelle).",
      },
    },
    vocab: [
      { term: "bonjour", meaning: { en: "hello", fr: "salutation", ar: "مرحبًا" }, example: "Bonjour !" },
      { term: "je m'appelle", meaning: { en: "my name is", fr: "mon nom est", ar: "اسمي" }, example: "Je m'appelle Sara." },
      { term: "comment vous appellez-vous ?", meaning: { en: "what's your name? (formal)", fr: "quel est votre nom ?", ar: "ما اسمك؟ (رسمي)" }, example: "Comment vous appellez-vous ?" },
      { term: "enchanté", meaning: { en: "nice to meet you", fr: "heureux de faire connaissance", ar: "تشرفنا" }, example: "Enchanté !" },
    ],
    exercises: [
      {
        id: "a1i-e1",
        prompt: { en: "Complete: Je …… Sara.", fr: "Complétez : Je …… Sara.", ar: "أكمل: Je …… Sara." },
        answers: ["m'appelle", "mappelle"],
        hint: { en: "m'appelle", fr: "m'appelle", ar: "m'appelle" },
      },
      {
        id: "a1i-e2",
        prompt: { en: "Write a greeting (one word).", fr: "Écrivez une salutation.", ar: "اكتب تحية (كلمة)." },
        answers: ["bonjour", "salut", "bonsoir"],
      },
      {
        id: "a1i-e3",
        prompt: { en: "Formal question for someone's name.", fr: "Question formelle pour le nom.", ar: "سؤال رسمي عن الاسم." },
        answers: ["comment vous appellez-vous", "comment vous appellez-vous ?", "comment vous appelez-vous", "comment vous appelez-vous ?"],
      },
    ],
    review: {
      summary: { en: "Quick review.", fr: "Révision rapide.", ar: "مراجعة سريعة." },
      checklist: {
        en: ["Bonjour", "Je m'appelle…", "Comment vous appellez-vous ?", "Enchanté"],
        fr: ["Bonjour", "Je m'appelle…", "Comment vous appellez-vous ?", "Enchanté"],
        ar: ["Bonjour", "Je m'appelle…", "Comment vous appellez-vous ?", "Enchanté"],
      },
    },
    quiz: [
      {
        id: "a1i-q1",
        prompt: { en: "Meaning of Bonjour?", fr: "Sens de Bonjour ?", ar: "معنى Bonjour؟" },
        options: {
          en: ["Goodbye", "Hello", "Thanks", "Please"],
          fr: ["Au revoir", "Salutation", "Merci", "S'il vous plaît"],
          ar: ["وداعًا", "مرحبًا", "شكرًا", "من فضلك"],
        },
        correctIndex: 1,
      },
      {
        id: "a1i-q2",
        prompt: { en: "Correct form:", fr: "Bonne forme :", ar: "الصيغة الصحيحة:" },
        options: {
          en: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
          fr: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
          ar: ["Je appelle Marie", "Je m'appelle Marie", "Je suis appelle Marie", "Moi appelle Marie"],
        },
        correctIndex: 1,
      },
      {
        id: "a1i-q3",
        prompt: { en: "Ask for a name (formal):", fr: "Demander le nom (formel) :", ar: "السؤال عن الاسم (رسمي):" },
        options: {
          en: ["Comment allez-vous ?", "Comment vous appellez-vous ?", "Où habitez-vous ?", "Quel âge avez-vous ?"],
          fr: ["Comment allez-vous ?", "Comment vous appellez-vous ?", "Où habitez-vous ?", "Quel âge avez-vous ?"],
          ar: ["Comment allez-vous ?", "Comment vous appellez-vous ?", "Où habitez-vous ?", "Quel âge avez-vous ?"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.66,
  },
  {
    id: "fr-a1-cafe-unit",
    level: "A1",
    order: 2,
    title: { en: "At the café", fr: "Au café", ar: "في المقهى" },
    completesGoals: ["goal-order-drink", "goal-pay-cafe"],
    lesson: {
      intro: {
        en: "Order a drink and pay politely.",
        fr: "Commander une boisson et payer poliment.",
        ar: "اطلب مشروبًا وادفع بأدب.",
      },
      dialogue: [
        "— Bonjour ! Vous désirez ?",
        "— Un café, s'il vous plaît.",
        "— Avec plaisir. Ce sera tout ?",
        "— Oui. L'addition, s'il vous plaît.",
        "— Voilà. Merci !",
      ],
      tip: {
        en: "s'il vous plaît = please (formal).",
        fr: "s'il vous plaît = formule de politesse.",
        ar: "s'il vous plaît = من فضلك (رسمي).",
      },
    },
    vocab: [
      { term: "un café", meaning: { en: "a coffee", fr: "un café", ar: "قهوة" }, example: "Un café, s'il vous plaît." },
      { term: "s'il vous plaît", meaning: { en: "please", fr: "formule polie", ar: "من فضلك" }, example: "L'addition, s'il vous plaît." },
      { term: "l'addition", meaning: { en: "the bill", fr: "la note", ar: "الفاتورة" }, example: "L'addition, s'il vous plaît." },
      { term: "vous désirez ?", meaning: { en: "what would you like?", fr: "que voulez-vous ?", ar: "ماذا تريد؟" }, example: "Vous désirez ?" },
    ],
    exercises: [
      {
        id: "a1c-e1",
        prompt: { en: "Order a coffee (write the phrase).", fr: "Commandez un café.", ar: "اطلب قهوة." },
        answers: ["un cafe, s'il vous plait", "un café, s'il vous plaît", "un cafe s'il vous plait", "un café s'il vous plaît"],
      },
      {
        id: "a1c-e2",
        prompt: { en: "Ask for the bill.", fr: "Demandez l'addition.", ar: "اطلب الفاتورة." },
        answers: ["l'addition, s'il vous plait", "l'addition, s'il vous plaît", "l'addition s'il vous plait", "l addition s'il vous plait"],
      },
    ],
    review: {
      summary: { en: "Café essentials.", fr: "Essentiels du café.", ar: "أساسيات المقهى." },
      checklist: {
        en: ["Un café, s'il vous plaît", "L'addition", "Vous désirez ?"],
        fr: ["Un café, s'il vous plaît", "L'addition", "Vous désirez ?"],
        ar: ["Un café, s'il vous plaît", "L'addition", "Vous désirez ?"],
      },
    },
    quiz: [
      {
        id: "a1c-q1",
        prompt: { en: "How do you say please (formal)?", fr: "Comment dire please (formel) ?", ar: "كيف تقول من فضلك (رسمي)؟" },
        options: {
          en: ["merci", "s'il vous plaît", "bonjour", "au revoir"],
          fr: ["merci", "s'il vous plaît", "bonjour", "au revoir"],
          ar: ["merci", "s'il vous plaît", "bonjour", "au revoir"],
        },
        correctIndex: 1,
      },
      {
        id: "a1c-q2",
        prompt: { en: "L'addition means…", fr: "L'addition signifie…", ar: "L'addition تعني…" },
        options: {
          en: ["menu", "bill", "waiter", "table"],
          fr: ["menu", "note / facture", "serveur", "table"],
          ar: ["قائمة", "فاتورة", "نادل", "طاولة"],
        },
        correctIndex: 1,
      },
      {
        id: "a1c-q3",
        prompt: { en: "Order coffee:", fr: "Commander un café :", ar: "طلب قهوة:" },
        options: {
          en: ["Un café, s'il vous plaît", "Je suis café", "Café moi", "Donne café"],
          fr: ["Un café, s'il vous plaît", "Je suis café", "Café moi", "Donne café"],
          ar: ["Un café, s'il vous plaît", "Je suis café", "Café moi", "Donne café"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.66,
  },
  {
    id: "fr-a1-courses-unit",
    level: "A1",
    order: 3,
    title: { en: "Shopping", fr: "Les courses", ar: "التسوق" },
    completesGoals: ["goal-ask-price", "goal-buy-item"],
    lesson: {
      intro: {
        en: "Ask a price and buy something simple.",
        fr: "Demander un prix et acheter simplement.",
        ar: "اسأل عن السعر واشترِ شيئًا بسيطًا.",
      },
      dialogue: [
        "— Bonjour. C'est combien, s'il vous plaît ?",
        "— Trois euros.",
        "— Je prends ça.",
        "— Très bien. Merci !",
      ],
      tip: {
        en: "C'est combien ? = How much is it?",
        fr: "C'est combien ? = Quel est le prix ?",
        ar: "C'est combien ? = بكم هذا؟",
      },
    },
    vocab: [
      { term: "c'est combien ?", meaning: { en: "how much?", fr: "quel prix ?", ar: "بكم؟" }, example: "C'est combien ?" },
      { term: "je prends ça", meaning: { en: "I'll take this", fr: "j'achète ceci", ar: "سآخذ هذا" }, example: "Je prends ça." },
      { term: "euros", meaning: { en: "euros", fr: "euros", ar: "يورو" }, example: "Trois euros." },
    ],
    exercises: [
      {
        id: "a1s-e1",
        prompt: { en: "Ask the price.", fr: "Demandez le prix.", ar: "اسأل عن السعر." },
        answers: ["c'est combien", "c'est combien ?", "cest combien", "combien ca coute", "combien ça coûte"],
      },
      {
        id: "a1s-e2",
        prompt: { en: "Say you'll take it.", fr: "Dites que vous prenez.", ar: "قل إنك ستأخذه." },
        answers: ["je prends ca", "je prends ça", "je prends cela"],
      },
    ],
    review: {
      summary: { en: "Shopping lines.", fr: "Phrases shopping.", ar: "جمل التسوق." },
      checklist: {
        en: ["C'est combien ?", "Je prends ça", "euros"],
        fr: ["C'est combien ?", "Je prends ça", "euros"],
        ar: ["C'est combien ?", "Je prends ça", "euros"],
      },
    },
    quiz: [
      {
        id: "a1s-q1",
        prompt: { en: "C'est combien ? means…", fr: "C'est combien ? signifie…", ar: "C'est combien ؟ تعني…" },
        options: {
          en: ["Where is it?", "How much is it?", "Who is it?", "When is it?"],
          fr: ["Où est-ce ?", "Quel prix ?", "Qui est-ce ?", "Quand ?"],
          ar: ["أين؟", "بكم؟", "من؟", "متى؟"],
        },
        correctIndex: 1,
      },
      {
        id: "a1s-q2",
        prompt: { en: "I'll take this:", fr: "Je prends ceci :", ar: "سآخذ هذا:" },
        options: {
          en: ["Je suis ça", "Je prends ça", "Je veux euros", "Combien moi"],
          fr: ["Je suis ça", "Je prends ça", "Je veux euros", "Combien moi"],
          ar: ["Je suis ça", "Je prends ça", "Je veux euros", "Combien moi"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-transport-unit",
    level: "A1",
    order: 4,
    title: { en: "Transport", fr: "Transports", ar: "المواصلات" },
    completesGoals: ["goal-ask-direction", "goal-buy-ticket"],
    lesson: {
      intro: {
        en: "Ask for directions and a ticket.",
        fr: "Demander son chemin et un billet.",
        ar: "اسأل عن الاتجاه والتذكرة.",
      },
      dialogue: [
        "— Excusez-moi. Où est la gare ?",
        "— Tout droit, puis à gauche.",
        "— Un billet pour Lyon, s'il vous plaît.",
        "— Voilà. Bon voyage !",
      ],
      tip: {
        en: "Où est… ? = Where is… ?",
        fr: "Où est… ? = localisation.",
        ar: "Où est… ؟ = أين…؟",
      },
    },
    vocab: [
      { term: "où est… ?", meaning: { en: "where is…?", fr: "localisation", ar: "أين…؟" }, example: "Où est la gare ?" },
      { term: "tout droit", meaning: { en: "straight ahead", fr: "en ligne droite", ar: "على طول" }, example: "Tout droit." },
      { term: "un billet", meaning: { en: "a ticket", fr: "un ticket", ar: "تذكرة" }, example: "Un billet pour Lyon." },
    ],
    exercises: [
      {
        id: "a1t-e1",
        prompt: { en: "Ask where the station is.", fr: "Demandez la gare.", ar: "اسأل أين المحطة." },
        answers: ["ou est la gare", "où est la gare", "où est la gare ?", "ou est la gare ?"],
      },
      {
        id: "a1t-e2",
        prompt: { en: "Ask for a ticket to Lyon.", fr: "Un billet pour Lyon.", ar: "تذكرة إلى ليون." },
        answers: ["un billet pour lyon", "un billet pour lyon, s'il vous plait", "un billet pour lyon s'il vous plaît"],
      },
    ],
    review: {
      summary: { en: "Getting around.", fr: "Se déplacer.", ar: "التنقل." },
      checklist: {
        en: ["Où est la gare ?", "Tout droit", "Un billet pour…"],
        fr: ["Où est la gare ?", "Tout droit", "Un billet pour…"],
        ar: ["Où est la gare ?", "Tout droit", "Un billet pour…"],
      },
    },
    quiz: [
      {
        id: "a1t-q1",
        prompt: { en: "Où est la gare ?", fr: "Où est la gare ?", ar: "Où est la gare ؟" },
        options: {
          en: ["How much is the station?", "Where is the station?", "When is the train?", "Who is at the station?"],
          fr: ["Quel prix ?", "Où se trouve la gare ?", "Quand ?", "Qui ?"],
          ar: ["بكم المحطة؟", "أين المحطة؟", "متى القطار؟", "من في المحطة؟"],
        },
        correctIndex: 1,
      },
      {
        id: "a1t-q2",
        prompt: { en: "Tout droit means…", fr: "Tout droit signifie…", ar: "Tout droit تعني…" },
        options: {
          en: ["turn left", "straight ahead", "stop", "ticket"],
          fr: ["à gauche", "en ligne droite", "arrêtez", "billet"],
          ar: ["يسار", "على طول", "قف", "تذكرة"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
  {
    id: "fr-a1-sante-unit",
    level: "A1",
    order: 5,
    title: { en: "Health", fr: "Santé", ar: "الصحة" },
    completesGoals: ["goal-say-symptom", "goal-pharmacy"],
    lesson: {
      intro: {
        en: "Say how you feel and ask at a pharmacy.",
        fr: "Dire comment on se sent et demander à la pharmacie.",
        ar: "قل بماذا تشعر واسأل في الصيدلية.",
      },
      dialogue: [
        "— Je ne me sens pas bien.",
        "— J'ai mal à la tête.",
        "— Avez-vous quelque chose pour la douleur ?",
        "— Oui, voilà.",
      ],
      tip: {
        en: "J'ai mal à… = I have pain in…",
        fr: "J'ai mal à… = douleur.",
        ar: "J'ai mal à… = يؤلمني…",
      },
    },
    vocab: [
      { term: "je ne me sens pas bien", meaning: { en: "I don't feel well", fr: "je suis malade", ar: "لست بخير" }, example: "Je ne me sens pas bien." },
      { term: "j'ai mal à la tête", meaning: { en: "I have a headache", fr: "céphalée", ar: "صداع" }, example: "J'ai mal à la tête." },
      { term: "la pharmacie", meaning: { en: "pharmacy", fr: "pharmacie", ar: "صيدلية" }, example: "Où est la pharmacie ?" },
    ],
    exercises: [
      {
        id: "a1h-e1",
        prompt: { en: "Say you have a headache.", fr: "Dites que vous avez mal à la tête.", ar: "قل إن لديك صداعًا." },
        answers: ["j'ai mal a la tete", "j'ai mal à la tête", "jai mal a la tete"],
      },
      {
        id: "a1h-e2",
        prompt: { en: "Say you don't feel well.", fr: "Dites que vous ne vous sentez pas bien.", ar: "قل إنك لست بخير." },
        answers: ["je ne me sens pas bien", "je me sens mal"],
      },
    ],
    review: {
      summary: { en: "Health basics.", fr: "Bases santé.", ar: "أساسيات الصحة." },
      checklist: {
        en: ["Je ne me sens pas bien", "J'ai mal à la tête", "pharmacie"],
        fr: ["Je ne me sens pas bien", "J'ai mal à la tête", "pharmacie"],
        ar: ["Je ne me sens pas bien", "J'ai mal à la tête", "pharmacie"],
      },
    },
    quiz: [
      {
        id: "a1h-q1",
        prompt: { en: "J'ai mal à la tête means…", fr: "J'ai mal à la tête signifie…", ar: "J'ai mal à la tête تعني…" },
        options: {
          en: ["I'm hungry", "I have a headache", "I'm late", "I'm happy"],
          fr: ["J'ai faim", "J'ai mal à la tête", "Je suis en retard", "Je suis content"],
          ar: ["أنا جائع", "لدي صداع", "متأخر", "سعيد"],
        },
        correctIndex: 1,
      },
      {
        id: "a1h-q2",
        prompt: { en: "Place for medicine:", fr: "Lieu pour les médicaments :", ar: "مكان الدواء:" },
        options: {
          en: ["gare", "pharmacie", "café", "hôtel"],
          fr: ["gare", "pharmacie", "café", "hôtel"],
          ar: ["gare", "pharmacie", "café", "hôtel"],
        },
        correctIndex: 1,
      },
    ],
    passRatio: 0.5,
  },
];
