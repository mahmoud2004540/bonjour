import type { LessonUnit, ExerciseItem, QuizItem, VocabCard } from "./types";

function L(en: string, fr: string, ar: string) {
  return { en, fr, ar };
}
function vocab(term: string, en: string, fr: string, ar: string, example: string): VocabCard {
  return { term, meaning: L(en, fr, ar), example };
}
function ex(id: string, en: string, fr: string, ar: string, answers: string[]): ExerciseItem {
  return { id, prompt: L(en, fr, ar), answers };
}
function q(
  id: string,
  en: string,
  fr: string,
  ar: string,
  options: [string, string, string, string],
  correctIndex: number
): QuizItem {
  return {
    id,
    prompt: L(en, fr, ar),
    options: { en: options, fr: options, ar: options },
    correctIndex,
  };
}
function U(p: {
  id: string;
  level: "B2" | "C1" | "C2";
  order: number;
  title: ReturnType<typeof L>;
  goal: string;
  intro: ReturnType<typeof L>;
  dialogue: string[];
  tip: ReturnType<typeof L>;
  vocab: VocabCard[];
  exercises: ExerciseItem[];
  review: string;
  checklist: string[];
  quiz: QuizItem[];
}): LessonUnit {
  return {
    id: p.id,
    level: p.level,
    order: p.order,
    title: p.title,
    completesGoals: [p.goal],
    lesson: { intro: p.intro, dialogue: p.dialogue, tip: p.tip },
    vocab: p.vocab,
    exercises: p.exercises,
    review: {
      summary: L(p.review, p.review, p.review),
      checklist: { en: p.checklist, fr: p.checklist, ar: p.checklist },
    },
    quiz: p.quiz,
    passRatio: 0.7,
  };
}

export const B2_C2_MORE_UNITS: LessonUnit[] = [
  U({
    id: "fr-b2-more-environment",
    level: "B2",
    order: 28,
    title: L("Environment debate", "Débat environnement", "نقاش البيئة"),
    goal: "goal-b2-more-env",
    intro: L(
      "Argue for and against a green city measure with structured points.",
      "Argumenter pour et contre une mesure écologique.",
      "حاجج مع وضد إجراء بيئي منظم."
    ),
    dialogue: [
      "— La ville propose d'interdire les voitures le dimanche en centre-ville.",
      "— D'un côté, cela réduirait la pollution et encouragerait la marche.",
      "— De l'autre, les commerçants craignent une baisse de fréquentation.",
      "— On pourrait prévoir des navettes gratuites pour compenser.",
      "— Il faudrait aussi consulter les habitants avant de trancher.",
      "— En somme, la mesure mérite un essai limité dans le temps.",
      "— Si les résultats sont positifs, on pourra l'étendre progressivement.",
      "— Sinon, il faudra revoir le dispositif avec les acteurs locaux.",
    ],
    tip: L(
      "D'un côté / de l'autre + proposal + condition.",
      "Structure dialectique claire.",
      "من جهة / من جهة أخرى + اقتراح + شرط."
    ),
    vocab: [
      vocab("interdire", "to ban", "mesure", "يمنع", "Interdire les voitures."),
      vocab("fréquentation", "footfall / attendance", "commerce", "إقبال", "Baisse de fréquentation."),
      vocab("navettes", "shuttle buses", "transport", "حافلات تنقل", "Navettes gratuites."),
      vocab("trancher", "to decide / settle", "décision", "يحسم", "Avant de trancher."),
      vocab("dispositif", "scheme / setup", "politique", "منظومة", "Revoir le dispositif."),
    ],
    exercises: [
      ex("b2me-e1", "On one hand…", "D'un côté", "من جهة", ["d'un cote", "d'un côté"]),
      ex("b2me-e2", "On the other…", "De l'autre", "من جهة أخرى", ["de l'autre", "de l autre"]),
      ex("b2me-e3", "Ban cars", "Interdire les voitures", "منع السيارات", ["interdire les voitures"]),
      ex("b2me-e4", "Consult residents", "Consulter les habitants", "استشارة السكان", ["consulter les habitants"]),
      ex("b2me-e5", "Limited trial", "Un essai limité", "تجربة محدودة", ["un essai limite", "un essai limité"]),
      ex("b2me-e6", "In short", "En somme", "باختصار", ["en somme"]),
    ],
    review: "B2 structured environmental argument.",
    checklist: ["D'un côté / de l'autre", "Interdire", "Navettes", "Trancher", "En somme"],
    quiz: [
      q("b2me-q1", "On one hand:", "Côté :", "جهة:", ["D'un côté", "Au milieu only", "Sans côté", "Contre côté"], 0),
      q("b2me-q2", "Ban:", "Interdire :", "منع:", ["interdire", "inviter only", "ignorer", "imiter"], 0),
      q("b2me-q3", "Decide:", "Trancher :", "حسم:", ["trancher", "danser", "manger", "fermer only"], 0),
      q("b2me-q4", "In short:", "Somme :", "خلاصة:", ["En somme", "En gare", "En fièvre", "En silence"], 0),
      q("b2me-q5", "Scheme:", "Dispositif :", "منظومة:", ["dispositif", "parapluie", "baguette", "ticket"], 0),
    ],
  }),
  U({
    id: "fr-b2-more-education",
    level: "B2",
    order: 32,
    title: L("Education & equality", "Éducation et égalité", "التعليم والمساواة"),
    goal: "goal-b2-more-edu",
    intro: L(
      "Discuss access to education with cause, effect, and proposal.",
      "Discuter de l'accès à l'éducation.",
      "ناقش الوصول للتعليم: سبب، أثر، اقتراح."
    ),
    dialogue: [
      "— L'accès aux études supérieures reste inégal selon les territoires.",
      "— Cela s'explique en partie par le coût du logement étudiant.",
      "— Les bourses aident, mais elles ne couvrent pas toujours les besoins réels.",
      "— Une piste serait de développer davantage de résidences sociales.",
      "— Il faut aussi renforcer l'orientation dès le lycée.",
      "— Sinon, le talent se perd faute d'information claire.",
      "— Pour ma part, je privilégierais un accompagnement personnalisé.",
      "— C'est plus exigeant, mais plus juste à long terme.",
    ],
    tip: L(
      "Cause → limit of current tools → proposal → personal stance.",
      "Cause → limite → proposition → position.",
      "سبب ← حد ← اقتراح ← موقف."
    ),
    vocab: [
      vocab("accès", "access", "droit", "الوصول", "L'accès aux études."),
      vocab("inégal", "unequal", "justice", "غير متكافئ", "Reste inégal."),
      vocab("bourses", "scholarships", "aide", "منح", "Les bourses aident."),
      vocab("orientation", "guidance / career advice", "lycée", "توجيه", "Renforcer l'orientation."),
      vocab("accompagnément", "support / mentoring", "suivi", "مرافقة", "Accompagnement personnalisé."),
    ],
    exercises: [
      ex("b2med-e1", "Unequal access", "Accès inégal", "وصول غير متكافئ", ["acces inegal", "accès inégal"]),
      ex("b2med-e2", "Scholarships help", "Les bourses aident", "المنح بتساعد", ["les bourses aident"]),
      ex("b2med-e3", "A possible approach would be…", "Une piste serait de", "مسار ممكن يكون", ["une piste serait de"]),
      ex("b2med-e4", "Career guidance", "L'orientation", "التوجيه", ["l'orientation", "l orientation"]),
      ex("b2med-e5", "For my part", "Pour ma part", "من ناحيتي", ["pour ma part"]),
      ex("b2med-e6", "Personalized support", "Accompagnement personnalisé", "مرافقة شخصية", ["accompagnement personnalise", "accompagnement personnalisé"]),
    ],
    review: "B2 education argument chain for writing/oral.",
    checklist: ["Accès inégal", "Cela s'explique", "Une piste serait", "Pour ma part", "À long terme"],
    quiz: [
      q("b2med-q1", "Access:", "Accès :", "وصول:", ["accès", "arrêt", "appel", "avis only"], 0),
      q("b2med-q2", "Scholarships:", "Bourses :", "منح:", ["bourses", "bureaux", "baguettes", "bus"], 0),
      q("b2med-q3", "Guidance:", "Orientation :", "توجيه:", ["orientation", "opération", "opinion only", "orage"], 0),
      q("b2med-q4", "For my part:", "Part :", "ناحية:", ["Pour ma part", "Pour ta gare", "Pour le pain", "Pour silence"], 0),
      q("b2med-q5", "Proposal opener:", "Piste :", "اقتراح:", ["Une piste serait de", "Une pizza serait de", "Une porte serait de", "Une peur serait de"], 0),
    ],
  }),
  U({
    id: "fr-c1-more-policy",
    level: "C1",
    order: 28,
    title: L("Public policy reading", "Lecture de politiques publiques", "قراءة السياسات العامة"),
    goal: "goal-c1-more-policy",
    intro: L(
      "Extract measures, conditions, and residual risks from a dense policy text.",
      "Extraire mesures, conditions et risques résiduels.",
      "استخرج الإجراءات والشروط والمخاطر المتبقية من نص كثيف."
    ),
    dialogue: [
      "— Le rapport préconise un investissement ciblé sur les transports du quotidien.",
      "— Cette orientation suppose toutefois une coordination entre collectivités.",
      "— À défaut d'un calendrier réaliste, les retards s'accumuleront.",
      "— Les auteurs insistent sur l'évaluation indépendante des résultats.",
      "— Ils admettent que certaines zones rurales resteront difficiles à desservir.",
      "— Aussi recommandent-ils des solutions flexibles plutôt qu'un modèle unique.",
      "— En dernière analyse, le succès dépend moins du budget que de la gouvernance.",
      "— Cette nuance est essentielle pour éviter les effets d'annonce.",
    ],
    tip: L(
      "Préconiser / suppose / à défaut de / en dernière analyse.",
      "Lexique de rapport officiel.",
      "معجم التقارير الرسمية."
    ),
    vocab: [
      vocab("préconiser", "to recommend (formal)", "rapport", "يوصي", "Le rapport préconise…"),
      vocab("à défaut de", "failing / without", "condition", "في غياب", "À défaut d'un calendrier…"),
      vocab("évaluation indépendante", "independent evaluation", "contrôle", "تقييم مستقل", "Évaluation indépendante."),
      vocab("gouvernance", "governance", "organisation", "حوكمة", "La gouvernance."),
      vocab("effets d'annonce", "announcement effects (empty PR)", "critique", "إعلان بلا أثر", "Éviter les effets d'annonce."),
    ],
    exercises: [
      ex("c1mp-e1", "The report recommends…", "Le rapport préconise", "التقرير يوصي", ["le rapport preconise", "le rapport préconise"]),
      ex("c1mp-e2", "Failing a realistic schedule", "À défaut d'un calendrier réaliste", "في غياب جدول واقعي", ["a defaut d'un calendrier realiste", "à défaut d'un calendrier réaliste"]),
      ex("c1mp-e3", "Independent evaluation", "Évaluation indépendante", "تقييم مستقل", ["evaluation independante", "évaluation indépendante"]),
      ex("c1mp-e4", "In the final analysis", "En dernière analyse", "في التحليل الأخير", ["en derniere analyse", "en dernière analyse"]),
      ex("c1mp-e5", "Announcement effects", "Effets d'annonce", "إعلانات فارغة", ["effets d'annonce", "effets d annonce"]),
      ex("c1mp-e6", "Governance", "Gouvernance", "حوكمة", ["gouvernance"]),
    ],
    review: "C1 policy-document language for DALF-style reading.",
    checklist: ["Préconiser", "À défaut de", "Évaluation", "Gouvernance", "En dernière analyse"],
    quiz: [
      q("c1mp-q1", "Recommend (formal):", "Préconiser :", "يوصي:", ["préconiser", "préparer only", "prévoir never", "présenter alone"], 0),
      q("c1mp-q2", "Without / failing:", "Défaut :", "غياب:", ["à défaut de", "à cause de only", "grâce à only", "pendant de"], 0),
      q("c1mp-q3", "Governance:", "Gouvernance :", "حوكمة:", ["gouvernance", "gourmandise", "garage", "gare"], 0),
      q("c1mp-q4", "Empty PR:", "Annonce :", "إعلان:", ["effets d'annonce", "effets d'orage", "effets de pain", "effets de bus"], 0),
      q("c1mp-q5", "Final analysis:", "Analyse :", "تحليل:", ["en dernière analyse", "en première gare", "en moyenne silence", "en simple ticket"], 0),
    ],
  }),
  U({
    id: "fr-c1-more-culture",
    level: "C1",
    order: 32,
    title: L("Culture & identity", "Culture et identité", "الثقافة والهوية"),
    goal: "goal-c1-more-culture",
    intro: L(
      "Nuance identity claims without cliché or overgeneralization.",
      "Nuancer l'identité sans cliché.",
      "دقّق في الهوية بدون كليشيه أو تعميم."
    ),
    dialogue: [
      "— On entend souvent que la culture nationale serait un bloc homogène.",
      "— Or l'histoire montre une stratification de langues, de rites et de migrations.",
      "— Réduire cette richesse à un slogan revient à l'appauvrir.",
      "— Cela n'empêche pas de reconnaître des repères communs utiles au vivre-ensemble.",
      "— La difficulté consiste à distinguer patrimoine vivant et folklore figé.",
      "— Une approche ouverte privilégie la transmission critique plutôt que la nostalgie.",
      "— Ainsi peut-on valoriser l'héritage sans en faire une arme d'exclusion.",
      "— C'est précisément l'exigence d'un débat démocratique mature.",
    ],
    tip: L(
      "Or / cela n'empêche pas / ainsi peut-on…",
      "Connecteurs de nuance.",
      "روابط التدقيق."
    ),
    vocab: [
      vocab("homogène", "homogeneous", "critique", "متجانس", "Bloc homogène."),
      vocab("stratification", "layering", "histoire", "تراكم طبقات", "Stratification de langues."),
      vocab("appauvrir", "to impoverish", "effet", "يفقّر", "Appauvrir la richesse."),
      vocab("vivre-ensemble", "living together", "société", "العيش المشترك", "Repères du vivre-ensemble."),
      vocab("transmission critique", "critical transmission", "éducation", "نقل نقدي", "Transmission critique."),
    ],
    exercises: [
      ex("c1mc-e1", "Homogeneous block", "Bloc homogène", "كتلة متجانسة", ["bloc homogene", "bloc homogène"]),
      ex("c1mc-e2", "This does not prevent…", "Cela n'empêche pas", "ده مش بيمنع", ["cela n'empeche pas", "cela n'empêche pas"]),
      ex("c1mc-e3", "Living together", "Vivre-ensemble", "العيش المشترك", ["vivre-ensemble", "vivre ensemble"]),
      ex("c1mc-e4", "Critical transmission", "Transmission critique", "نقل نقدي", ["transmission critique"]),
      ex("c1mc-e5", "Impoverish", "Appauvrir", "يفقر", ["appauvrir"]),
      ex("c1mc-e6", "Thus one can…", "Ainsi peut-on", "هكذا يمكن", ["ainsi peut-on", "ainsi peut on"]),
    ],
    review: "C1 cultural debate without caricature.",
    checklist: ["Homogène", "Or…", "Cela n'empêche pas", "Vivre-ensemble", "Transmission critique"],
    quiz: [
      q("c1mc-q1", "Homogeneous:", "Homogène :", "متجانس:", ["homogène", "hostile", "horaire", "hôpital"], 0),
      q("c1mc-q2", "Does not prevent:", "Empêche :", "يمنع:", ["Cela n'empêche pas", "Cela force", "Cela ferme", "Cela gare"], 0),
      q("c1mc-q3", "Living together:", "Ensemble :", "مشترك:", ["vivre-ensemble", "vivre-seul only", "vivre-pain", "vivre-ticket"], 0),
      q("c1mc-q4", "Impoverish:", "Appauvrir :", "إفقار:", ["appauvrir", "enrichir only", "ouvrir", "couvrir"], 0),
      q("c1mc-q5", "Thus one can:", "Ainsi :", "هكذا:", ["Ainsi peut-on", "Ainsi doit dormir", "Ainsi mange-t-on pain", "Ainsi gare-t-on"], 0),
    ],
  }),
  U({
    id: "fr-c2-more-ethics",
    level: "C2",
    order: 28,
    title: L("Ethics of technology", "Éthique de la technique", "أخلاقيات التقنية"),
    goal: "goal-c2-more-ethics",
    intro: L(
      "Frame a C2-level ethical dilemma with precise concessions.",
      "Cadre un dilemme éthique de niveau C2.",
      "اطرح معضلة أخلاقية بمستوى C2 مع تنازلات دقيقة."
    ),
    dialogue: [
      "— L'automatisation des décisions publiques promet efficacité et impartialité apparente.",
      "— Encore faut-il que les critères encodés ne reproduisent pas des biais historiques.",
      "— L'opacité des systèmes, loin d'être un détail technique, pose un problème démocratique.",
      "— On objectera que la transparence totale peut freiner l'innovation.",
      "— L'objection n'est pas négligeable ; elle ne dispense pas d'un contrôle citoyen.",
      "— Faute de garde-fous, la promesse d'impartialité se retourne contre les plus vulnérables.",
      "— Il s'agit moins d'interdire l'outil que d'en conditionner l'usage.",
      "— Telle est, me semble-t-il, la seule posture compatible avec une éthique exigeante.",
    ],
    tip: L(
      "On objectera que… / l'objection n'est pas négligeable / il s'agit de…",
      "Mouvements de débat expert.",
      "حركات نقاش خبير."
    ),
    vocab: [
      vocab("biais", "bias", "éthique", "تحيّز", "Biais historiques."),
      vocab("opacité", "opacity", "système", "غموض", "L'opacité des systèmes."),
      vocab("garde-fous", "safeguards", "protection", "ضوابط", "Des garde-fous."),
      vocab("on objectera que", "one will object that", "débat", "سيُعترض بأن", "On objectera que…"),
      vocab("conditionner l'usage", "to condition usage", "régulation", "تقييد الاستخدام بشروط", "Conditionner l'usage."),
    ],
    exercises: [
      ex("c2me-e1", "One will object that…", "On objectera que", "سيُعترض بأن", ["on objectera que"]),
      ex("c2me-e2", "The objection is not negligible", "L'objection n'est pas négligeable", "الاعتراض مش تافه", ["l'objection n'est pas negligeable", "l'objection n'est pas négligeable"]),
      ex("c2me-e3", "Safeguards", "Garde-fous", "ضوابط", ["garde-fous", "garde fous"]),
      ex("c2me-e4", "Opacity of systems", "Opacité des systèmes", "غموض الأنظمة", ["opacite des systemes", "opacité des systèmes"]),
      ex("c2me-e5", "Condition usage", "Conditionner l'usage", "تقييد الاستخدام", ["conditionner l'usage", "conditionner l usage"]),
      ex("c2me-e6", "It is less about banning than…", "Il s'agit moins d'interdire que", "الموضوع مش المنع قد ما…", ["il s'agit moins d'interdire que", "il s agit moins d interdire que"]),
    ],
    review: "C2 ethical argumentation moves.",
    checklist: ["On objectera que", "Objection non négligeable", "Garde-fous", "Opacité", "Conditionner l'usage"],
    quiz: [
      q("c2me-q1", "Object that:", "Objectera :", "اعتراض:", ["On objectera que", "On mangera que", "On dormira que", "On fermera que"], 0),
      q("c2me-q2", "Safeguards:", "Garde-fous :", "ضوابط:", ["garde-fous", "garde-manger only", "garde-bus", "garde-ticket"], 0),
      q("c2me-q3", "Opacity:", "Opacité :", "غموض:", ["opacité", "opéra", "option", "orange"], 0),
      q("c2me-q4", "Bias:", "Biais :", "تحيز:", ["biais", "bras", "banc", "bol"], 0),
      q("c2me-q5", "It is a matter of:", "Il s'agit :", "يتعلق:", ["Il s'agit de", "Il s'agit pain", "Il s'agit gare", "Il s'agit fièvre"], 0),
    ],
  }),
  U({
    id: "fr-c2-more-rhetoric",
    level: "C2",
    order: 32,
    title: L("Rhetorical control", "Maîtrise rhétorique", "السيطرة البلاغية"),
    goal: "goal-c2-more-rhetoric",
    intro: L(
      "Vary register and rhetorical devices while staying precise — near-native control.",
      "Varier registre et figures sans perdre la précision.",
      "نوّع السجل والصور البلاغية مع الدقة — سيطرة شبه أصلية."
    ),
    dialogue: [
      "— À y regarder de près, le slogan rassurant dissimule une simplification abusive.",
      "— Non que l'intention soit condamnable ; c'est la méthode qui interroge.",
      "— Qui trop embrasse mal étreint : vouloir tout régler d'un trait produit l'inverse.",
      "— Mieux vaut, me semble-t-il, avancer par cercles concentriques.",
      "— D'aucuns y verront de la lenteur ; j'y vois de la responsabilité.",
      "— Car la précipitation, fût-elle généreuse, laisse des zones d'ombre.",
      "— Aussi refuserai-je les bilans triomphants tant que les preuves manquent.",
      "— Telle est la discipline d'une parole qui se veut à la hauteur de son objet.",
    ],
    tip: L(
      "Non que… / qui trop… / d'aucuns / aussi + inversion.",
      "Figures et inversions soignées.",
      "صور وقلب ترتيب مهذّب."
    ),
    vocab: [
      vocab("à y regarder de près", "looking closely", "analyse", "لو بصّينا بدقة", "À y regarder de près…"),
      vocab("non que…", "not that…", "concession", "ليس أن…", "Non que l'intention…"),
      vocab("d'aucuns", "some people (literary)", "registre", "بعض القوم", "D'aucuns y verront…"),
      vocab("fût-elle", "even if it were", "concession", "حتى لو كانت", "Fût-elle généreuse…"),
      vocab("zones d'ombre", "grey areas", "limite", "مناطق ظل", "Zones d'ombre."),
    ],
    exercises: [
      ex("c2mr-e1", "Looking closely", "À y regarder de près", "بالتفصيل", ["a y regarder de pres", "à y regarder de près"]),
      ex("c2mr-e2", "Not that…", "Non que", "ليس أن", ["non que"]),
      ex("c2mr-e3", "Some people (literary)", "D'aucuns", "بعضهم", ["d'aucuns", "d aucuns"]),
      ex("c2mr-e4", "Even if it were…", "Fût-elle", "حتى لو كانت", ["fut-elle", "fût-elle"]),
      ex("c2mr-e5", "Grey areas", "Zones d'ombre", "مناطق ظل", ["zones d'ombre", "zones d ombre"]),
      ex("c2mr-e6", "Thus I will refuse…", "Aussi refuserai-je", "لذلك سأرفض", ["aussi refuserai-je", "aussi refuserai je"]),
    ],
    review: "C2 rhetorical precision for near-native writing/speaking.",
    checklist: ["À y regarder de près", "Non que", "D'aucuns", "Fût-elle", "Aussi + inversion"],
    quiz: [
      q("c2mr-q1", "Looking closely:", "Regarder :", "دقة:", ["À y regarder de près", "À y manger de près", "À y dormir de près", "À y gare de près"], 0),
      q("c2mr-q2", "Not that:", "Non que :", "ليس:", ["Non que", "Oui que", "Si que", "Car que"], 0),
      q("c2mr-q3", "Some (literary):", "D'aucuns :", "بعض:", ["D'aucuns", "Des tickets", "Des pains", "Des bus"], 0),
      q("c2mr-q4", "Even if it were:", "Fût-elle :", "حتى لو:", ["Fût-elle", "Fut-il pain", "Sera-t-elle only", "Est-elle gare"], 0),
      q("c2mr-q5", "Grey areas:", "Ombre :", "ظل:", ["zones d'ombre", "zones de soleil only", "zones de ticket", "zones de baguette"], 0),
    ],
  }),
];
