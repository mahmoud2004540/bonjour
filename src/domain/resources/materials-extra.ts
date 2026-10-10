/** Additional on-platform materials — merged into MATERIALS. */
import type { MaterialItem } from "./materials";

export const MATERIALS_EXTRA: MaterialItem[] = [
  // A1 extra
  {
    id: "a1-family",
    level: "A1",
    kind: "vocabulary",
    title: { en: "Family", fr: "La famille", ar: "العائلة" },
    bodyFr:
      "le père · la mère · le frère · la sœur · le fils · la fille · les parents · les enfants · le mari · la femme",
    bodyEn: "Core family words.",
    bodyAr: "كلمات العائلة الأساسية.",
    vocabulary: [
      { fr: "le père", en: "father", ar: "الأب" },
      { fr: "la mère", en: "mother", ar: "الأم" },
      { fr: "le frère", en: "brother", ar: "الأخ" },
      { fr: "la sœur", en: "sister", ar: "الأخت" },
      { fr: "les enfants", en: "children", ar: "الأطفال" },
    ],
  },
  {
    id: "a1-food",
    level: "A1",
    kind: "vocabulary",
    title: { en: "Food basics", fr: "Les aliments de base", ar: "أساسيات الطعام" },
    bodyFr:
      "le pain · l'eau · le café · le thé · le fromage · la pomme · la tomate · le riz · le poisson · la viande",
    bodyEn: "Everyday food nouns.",
    bodyAr: "أسماء أطعمة يومية.",
    vocabulary: [
      { fr: "l'eau", en: "water", ar: "ماء" },
      { fr: "le fromage", en: "cheese", ar: "جبن" },
      { fr: "le poisson", en: "fish", ar: "سمك" },
    ],
  },
  {
    id: "a1-transport",
    level: "A1",
    kind: "dialogue",
    title: { en: "At the station", fr: "À la gare", ar: "في المحطة" },
    bodyFr:
      "— Un billet pour Lyon, s'il vous plaît.\n— Aller simple ou aller-retour ?\n— Aller simple.\n— Voilà. Quai numéro trois.\n— Merci !",
    bodyEn: "Buy a simple train ticket.",
    bodyAr: "اشترِ تذكرة قطار بسيطة.",
    vocabulary: [
      { fr: "un billet", en: "a ticket", ar: "تذكرة" },
      { fr: "aller simple", en: "one way", ar: "ذهاب فقط" },
      { fr: "aller-retour", en: "return ticket", ar: "ذهاب وعودة" },
      { fr: "le quai", en: "the platform", ar: "الرصيف" },
    ],
  },
  {
    id: "a1-colors",
    level: "A1",
    kind: "vocabulary",
    title: { en: "Colours", fr: "Les couleurs", ar: "الألوان" },
    bodyFr: "rouge · bleu · vert · jaune · noir · blanc · orange · rose · gris · marron",
    bodyEn: "Basic colours.",
    bodyAr: "ألوان أساسية.",
  },
  {
    id: "a1-days",
    level: "A1",
    kind: "vocabulary",
    title: { en: "Days of the week", fr: "Les jours de la semaine", ar: "أيام الأسبوع" },
    bodyFr:
      "lundi · mardi · mercredi · jeudi · vendredi · samedi · dimanche",
    bodyEn: "Weekdays and weekend.",
    bodyAr: "أيام الأسبوع.",
    exercise: {
      promptEn: "What is the French for Monday?",
      promptFr: "Le premier jour de la semaine ouvrable :",
      promptAr: "ما هو الاثنين بالفرنسية؟",
      answers: ["lundi"],
    },
  },
  {
    id: "a1-hotel",
    level: "A1",
    kind: "dialogue",
    title: { en: "At the hotel", fr: "À l'hôtel", ar: "في الفندق" },
    bodyFr:
      "— Bonjour, j'ai une réservation au nom de Karim.\n— Une chambre pour deux nuits ?\n— Oui.\n— Voici votre clé. Chambre 12.\n— Le petit-déjeuner est inclus ?\n— Oui, de 7 heures à 10 heures.",
    bodyEn: "Check in and ask about breakfast.",
    bodyAr: "سجّل الوصول واسأل عن الإفطار.",
  },
  {
    id: "a1-negation",
    level: "A1",
    kind: "exercise",
    title: { en: "Negation ne… pas", fr: "La négation ne… pas", ar: "النفي ne… pas" },
    bodyFr: "Je parle français. → Je ne parle pas français.\nJ'aime le café. → Je n'aime pas le café.",
    bodyEn: "Place ne before the verb and pas after.",
    bodyAr: "ne قبل الفعل و pas بعده.",
    exercise: {
      promptEn: "Negate: Je comprends. → Je … comprends …",
      promptFr: "Niez : Je comprends.",
      promptAr: "انفِ: Je comprends.",
      answers: ["ne pas", "je ne comprends pas"],
    },
  },

  // A2 extra
  {
    id: "a2-weather",
    level: "A2",
    kind: "vocabulary",
    title: { en: "Weather", fr: "La météo", ar: "الطقس" },
    bodyFr:
      "Il fait beau. Il fait chaud. Il fait froid. Il pleut. Il neige. Il y a du vent.",
    bodyEn: "Describe the weather.",
    bodyAr: "صف الطقس.",
    vocabulary: [
      { fr: "Il fait beau", en: "The weather is nice", ar: "الجو جميل" },
      { fr: "Il pleut", en: "It is raining", ar: "تمطر" },
      { fr: "Il neige", en: "It is snowing", ar: "تثلج" },
    ],
  },
  {
    id: "a2-clothes",
    level: "A2",
    kind: "dialogue",
    title: { en: "Buying clothes", fr: "Acheter des vêtements", ar: "شراء ملابس" },
    bodyFr:
      "— Je cherche un pull.\n— Quelle taille ?\n— Medium.\n— Voici. Vous pouvez essayer.\n— Il est trop grand. Vous avez plus petit ?\n— Oui, en voici un.",
    bodyEn: "Size, try on, too big / smaller.",
    bodyAr: "المقاس، التجربة، أكبر/أصغر.",
    vocabulary: [
      { fr: "la taille", en: "size", ar: "المقاس" },
      { fr: "essayer", en: "to try on", ar: "يجرّب" },
      { fr: "trop grand", en: "too big", ar: "كبير جدًا" },
    ],
  },
  {
    id: "a2-imparfait",
    level: "A2",
    kind: "text",
    title: { en: "Used to… (imparfait)", fr: "L'imparfait", ar: "الماضي الناقص" },
    bodyFr:
      "Quand j'étais enfant, j'habitais à la campagne. Tous les étés, nous allions à la mer. Il faisait toujours beau.",
    bodyEn: "Habits and descriptions in the past.",
    bodyAr: "عادات ووصف في الماضي.",
  },
  {
    id: "a2-phone",
    level: "A2",
    kind: "dialogue",
    title: { en: "On the phone", fr: "Au téléphone", ar: "على الهاتف" },
    bodyFr:
      "— Allô, bonjour, je voudrais parler à Madame Benali.\n— Qui est à l'appareil ?\n— C'est Marc Dupont.\n— Un instant, je vous la passe.\n— Merci.",
    bodyEn: "Formal phone contact.",
    bodyAr: "اتصال هاتفي رسمي.",
  },
  {
    id: "a2-comparatif",
    level: "A2",
    kind: "exercise",
    title: { en: "Comparatives", fr: "Le comparatif", ar: "المقارنة" },
    bodyFr:
      "plus grand que · moins cher que · aussi intéressant que\nParis est plus grand que Lyon.",
    bodyEn: "plus / moins / aussi + adjective + que.",
    bodyAr: "plus / moins / aussi + صفة + que.",
    exercise: {
      promptEn: "Complete: Ce livre est … intéressant que l'autre. (aussi)",
      promptFr: "Ce livre est … intéressant que l'autre.",
      promptAr: "Ce livre est … intéressant que l'autre.",
      answers: ["aussi"],
    },
  },
  {
    id: "a2-work",
    level: "A2",
    kind: "text",
    title: { en: "Talking about work", fr: "Parler du travail", ar: "الحديث عن العمل" },
    bodyFr:
      "Je travaille dans une entreprise de commerce. Je commence à 9 heures et je finis vers 18 heures. Le mercredi, je travaille à domicile.",
    bodyEn: "Job, hours, remote day.",
    bodyAr: "العمل، الساعات، يوم عن بُعد.",
  },

  // B1 extra
  {
    id: "b1-travel",
    level: "B1",
    kind: "text",
    title: { en: "Travel problems", fr: "Problèmes de voyage", ar: "مشاكل السفر" },
    bodyFr:
      "Mon vol a été annulé à la dernière minute. J'ai dû patienter trois heures à l'aéroport avant d'obtenir un autre billet. Heureusement, la compagnie a pris en charge l'hôtel.",
    bodyEn: "Narrate travel disruption and resolution.",
    bodyAr: "اسرد اضطراب السفر والحل.",
    vocabulary: [
      { fr: "annulé", en: "cancelled", ar: "ملغى" },
      { fr: "patienter", en: "to wait patiently", ar: "انتظر بصبر" },
      { fr: "prendre en charge", en: "to cover / take care of", ar: "يتكفل بـ" },
    ],
  },
  {
    id: "b1-advice",
    level: "B1",
    kind: "dialogue",
    title: { en: "Giving advice", fr: "Donner des conseils", ar: "تقديم نصيحة" },
    bodyFr:
      "— Je stresse avant l'examen.\n— Tu devrais dormir davantage et réviser un peu chaque jour.\n— Tu penses que ça suffit ?\n— À mon avis, oui. Évite de tout faire la veille.",
    bodyEn: "Advice with devoir / éviter de.",
    bodyAr: "نصيحة مع devoir / éviter de.",
  },
  {
    id: "b1-future",
    level: "B1",
    kind: "exercise",
    title: { en: "Simple future", fr: "Le futur simple", ar: "المستقبل البسيط" },
    bodyFr:
      "Demain, j'irai au marché. Nous parlerons du projet. Ils finiront avant vendredi.",
    bodyEn: "Regular and common irregular futures.",
    bodyAr: "مستقبل منتظم وشائع غير منتظم.",
    exercise: {
      promptEn: "Future of aller (je) : j'…",
      promptFr: "Futur de aller (je) :",
      promptAr: "مستقبل aller (je):",
      answers: ["irai", "j'irai"],
    },
  },
  {
    id: "b1-complaint",
    level: "B1",
    kind: "dialogue",
    title: { en: "A polite complaint", fr: "Une réclamation polie", ar: "شكوى مهذبة" },
    bodyFr:
      "— Bonjour, je souhaite faire une réclamation.\n— Je vous écoute.\n— La commande est arrivée incomplète.\n— Je suis désolé. Nous allons vous renvoyer l'article manquant.\n— Merci de votre aide.",
    bodyEn: "Complain and request a solution politely.",
    bodyAr: "اشتكِ واطلب حلًا بأدب.",
  },
  {
    id: "b1-relative",
    level: "B1",
    kind: "text",
    title: { en: "Relative qui / que", fr: "Les relatifs qui / que", ar: "الأسماء الموصولة qui / que" },
    bodyFr:
      "La personne qui a appelé est mon collègue.\nLe livre que j'ai lu est excellent.",
    bodyEn: "qui = subject, que = object.",
    bodyAr: "qui فاعل، que مفعول.",
  },

  // B2 extra
  {
    id: "b2-environment",
    level: "B2",
    kind: "text",
    title: { en: "Environment debate", fr: "Débat environnemental", ar: "نقاش بيئي" },
    bodyFr:
      "Réduire les emballages plastiques est nécessaire. Toutefois, les alternatives doivent rester accessibles à tous. Sans mesures d'accompagnement, le changement risque de rester symbol.",
    bodyEn: "Thesis, reservation, risk.",
    bodyAr: "أطروحة، تحفظ، مخاطرة.",
    vocabulary: [
      { fr: "Toutefois", en: "However", ar: "غير أن" },
      { fr: "accessibles", en: "affordable / accessible", ar: "في المتناول" },
    ],
  },
  {
    id: "b2-subjunctive",
    level: "B2",
    kind: "exercise",
    title: { en: "Subjunctive triggers", fr: "Déclencheurs du subjonctif", ar: "محفزات الشرط" },
    bodyFr:
      "Il faut que tu viennes.\nJe veux que vous réussissiez.\nBien qu'il soit tard, on continue.",
    bodyEn: "Necessity, will, concession → subjunctive.",
    bodyAr: "ضرورة، إرادة، استدراك → subjonctif.",
    exercise: {
      promptEn: "Il faut que tu … (venir, subjunctive)",
      promptFr: "Il faut que tu …",
      promptAr: "Il faut que tu …",
      answers: ["viennes"],
    },
  },
  {
    id: "b2-formal-email",
    level: "B2",
    kind: "text",
    title: { en: "Formal email frame", fr: "Cadre d'e-mail formel", ar: "إطار بريد رسمي" },
    bodyFr:
      "Madame, Monsieur,\n\nJe me permets de vous contacter au sujet de…\nJe vous serais reconnaissant(e) de bien vouloir…\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
    bodyEn: "Standard formal email openings and closings.",
    bodyAr: "بدايات ونهايات بريد رسمي قياسية.",
  },
  {
    id: "b2-passive",
    level: "B2",
    kind: "text",
    title: { en: "Passive voice", fr: "La voix passive", ar: "المبني للمجهول" },
    bodyFr:
      "Active : On a publié le rapport.\nPassive : Le rapport a été publié.\nActive : Ils construiront l'école.\nPassive : L'école sera construite.",
    bodyEn: "être + past participle; agree gender/number.",
    bodyAr: "être + اسم المفعول مع المطابقة.",
  },

  // C1 extra
  {
    id: "c1-connectors",
    level: "C1",
    kind: "vocabulary",
    title: { en: "Advanced connectors", fr: "Connecteurs avancés", ar: "روابط متقدمة" },
    bodyFr:
      "néanmoins · or · en outre · par conséquent · dans la mesure où · quiconque · en dépit de",
    bodyEn: "Connectors for formal written argumentation.",
    bodyAr: "روابط للحجاج الكتابي الرسمي.",
    vocabulary: [
      { fr: "néanmoins", en: "nevertheless", ar: "مع ذلك" },
      { fr: "par conséquent", en: "therefore", ar: "وبالتالي" },
      { fr: "en dépit de", en: "despite", ar: "رغم" },
    ],
  },
  {
    id: "c1-critique",
    level: "C1",
    kind: "text",
    title: { en: "Critical paragraph", fr: "Paragraphe critique", ar: "فقرة نقدية" },
    bodyFr:
      "Si l'initiative mérite d'être saluée, elle souffre encore d'un manque de clarté quant aux indicateurs de réussite. Sans critères partagés, l'évaluation risque de reposer sur des impressions plutôt que sur des faits.",
    bodyEn: "Praise + limitation + consequence.",
    bodyAr: "إشادة + قيد + نتيجة.",
  },
  {
    id: "c1-hypothesis",
    level: "C1",
    kind: "exercise",
    title: { en: "Past conditional", fr: "Conditionnel passé", ar: "الشرط الماضي" },
    bodyFr:
      "Si j'avais su, je serais venu plus tôt.\nNous aurions évité l'erreur si nous avions vérifié les chiffres.",
    bodyEn: "Counterfactual past.",
    bodyAr: "ماضي افتراضي مخالف للواقع.",
    exercise: {
      promptEn: "Si j'avais su, je … venu. (être)",
      promptFr: "Si j'avais su, je … venu.",
      promptAr: "Si j'avais su, je … venu.",
      answers: ["serais", "je serais venu"],
    },
  },

  // C2 extra
  {
    id: "c2-rhetoric",
    level: "C2",
    kind: "text",
    title: { en: "Rhetorical control", fr: "Maîtrise rhétorique", ar: "سيطرة بلاغية" },
    bodyFr:
      "À force de simplifier le débat, on finit par en effacer les enjeux. Mieux vaut assumer la complexité que de s'en remettre à des formules rassurantes mais creuses.",
    bodyEn: "Dense evaluative prose.",
    bodyAr: "نثر تقييمي كثيف.",
  },
  {
    id: "c2-intertextual",
    level: "C2",
    kind: "text",
    title: { en: "Abstract discussion", fr: "Discussion abstraite", ar: "نقاش مجرد" },
    bodyFr:
      "La notion de progrès, trop souvent confondue avec celle d'innovation technique, gagne à être resituée dans une perspective éthique. Toute accélération n'est pas, par elle-même, une avancée.",
    bodyEn: "Conceptual distinction at near-native level.",
    bodyAr: "تمييز مفاهيمي بمستوى شبه أصلي.",
  },
  {
    id: "c2-precision",
    level: "C2",
    kind: "exercise",
    title: { en: "Lexical precision", fr: "Précision lexicale", ar: "دقة معجمية" },
    bodyFr:
      "Dire « problème » pour tout affaiblit le propos.\nPréférez : obstacle · enjeu · contradiction · limite · biais.",
    bodyEn: "Prefer precise nouns over vague ones.",
    bodyAr: "فضّل أسماء دقيقة على الفضفاضة.",
    exercise: {
      promptEn: "A better word than vague « problème » for a statistical distortion: b…",
      promptFr: "Mot précis pour une distorsion statistique :",
      promptAr: "كلمة أدق من « problème » للتحيز الإحصائي:",
      answers: ["biais"],
    },
  },
];
