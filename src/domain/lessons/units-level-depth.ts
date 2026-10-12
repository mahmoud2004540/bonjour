import type { LessonUnit, ExerciseItem, QuizItem, VocabCard } from "./types";

/** Deeper institute-style units per CEFR level — richer dialogue, vocab, drills, quiz. */

function L(
  en: string,
  fr: string,
  ar: string
): { en: string; fr: string; ar: string } {
  return { en, fr, ar };
}

function vocab(
  term: string,
  en: string,
  fr: string,
  ar: string,
  example: string
): VocabCard {
  return { term, meaning: L(en, fr, ar), example };
}

function ex(
  id: string,
  en: string,
  fr: string,
  ar: string,
  answers: string[],
  hint?: string
): ExerciseItem {
  return {
    id,
    prompt: L(en, fr, ar),
    answers,
    hint: hint ? L(hint, hint, hint) : undefined,
  };
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

function makeUnit(p: {
  id: string;
  level: string;
  order: number;
  title: { en: string; fr: string; ar: string };
  goal: string;
  intro: { en: string; fr: string; ar: string };
  dialogue: string[];
  tip: { en: string; fr: string; ar: string };
  vocab: VocabCard[];
  exercises: ExerciseItem[];
  reviewEn: string;
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
      summary: L(p.reviewEn, p.reviewEn, p.reviewEn),
      checklist: {
        en: p.checklist,
        fr: p.checklist,
        ar: p.checklist,
      },
    },
    quiz: p.quiz,
    passRatio: 0.7,
  };
}

export const LEVEL_DEPTH_UNITS: LessonUnit[] = [
  // ——— A1 depth ———
  makeUnit({
    id: "fr-a1-deep-family",
    level: "A1",
    order: 22,
    title: L("Family & people", "Famille et personnes", "العائلة والأشخاص"),
    goal: "goal-a1-deep-family",
    intro: L(
      "Talk about family members with age and simple description.",
      "Parler de la famille : âge et description simple.",
      "تكلم عن أفراد العائلة مع العمر ووصف بسيط."
    ),
    dialogue: [
      "— Tu as des frères et sœurs ?",
      "— Oui, j'ai une sœur. Elle s'appelle Maya.",
      "— Elle a quel âge ?",
      "— Elle a quinze ans. Elle est lycéenne.",
      "— Et tes parents ?",
      "— Mon père est médecin. Ma mère est enseignante.",
    ],
    tip: L(
      "Mon / ma / mes change with gender and number.",
      "Mon / ma / mes changent avec le genre.",
      "Mon / ma / mes تتغير حسب الجنس والعدد."
    ),
    vocab: [
      vocab("une sœur", "a sister", "sœur", "أخت", "J'ai une sœur."),
      vocab("un frère", "a brother", "frère", "أخ", "J'ai un frère."),
      vocab("mes parents", "my parents", "parents", "والداي", "Mes parents habitent ici."),
      vocab("lycéenne", "high-school student (f)", "lycée", "طالبة ثانوي", "Elle est lycéenne."),
      vocab("enseignant / enseignante", "teacher", "métier", "معلّم/معلّمة", "Ma mère est enseignante."),
    ],
    exercises: [
      ex("a1df-e1", "I have a sister", "J'ai une sœur", "عندي أخت", ["j'ai une soeur", "j'ai une sœur", "j ai une soeur"]),
      ex("a1df-e2", "She is fifteen years old", "Elle a quinze ans", "عمرها 15", ["elle a quinze ans"]),
      ex("a1df-e3", "My father is a doctor", "Mon père est médecin", "أبي طبيب", ["mon pere est medecin", "mon père est médecin"]),
      ex("a1df-e4", "My parents live here", "Mes parents habitent ici", "والداي يسكنان هنا", ["mes parents habitent ici"]),
      ex("a1df-e5", "She is a high-school student (f)", "Elle est lycéenne", "هي طالبة ثانوي", ["elle est lyceenne", "elle est lycéenne"]),
      ex("a1df-e6", "I have a brother", "J'ai un frère", "عندي أخ", ["j'ai un frere", "j'ai un frère", "j ai un frere"]),
    ],
    reviewEn: "A1 family: members, age, simple jobs.",
    checklist: ["J'ai un/une…", "Elle a … ans", "Mon père / ma mère", "Mes parents"],
    quiz: [
      q("a1df-q1", "Sister:", "Sœur :", "أخت:", ["une sœur", "un sœur", "le sœur", "des sœur"], 0),
      q("a1df-q2", "Age 15:", "15 ans :", "15 سنة:", ["Elle a quinze ans", "Elle est quinze", "Elle quinze ans", "Quinze elle"], 0),
      q("a1df-q3", "My mother (job teacher f):", "Mère enseignante :", "أمي معلمة:", ["Ma mère est enseignante", "Mon mère est…", "Mère je", "Est mère"], 0),
      q("a1df-q4", "Parents:", "Parents :", "والدان:", ["mes parents", "mon parents", "ma parents", "le parents"], 0),
      q("a1df-q5", "Brother:", "Frère :", "أخ:", ["un frère", "une frère", "la frère", "des frère"], 0),
    ],
  }),
  makeUnit({
    id: "fr-a1-deep-time",
    level: "A1",
    order: 24,
    title: L("Time & daily schedule", "L'heure et la journée", "الوقت وجدول اليوم"),
    goal: "goal-a1-deep-time",
    intro: L(
      "Tell the time and describe a simple daily schedule.",
      "Dire l'heure et une journée simple.",
      "قل الساعة وصف يومًا بسيطًا."
    ),
    dialogue: [
      "— Quelle heure est-il ?",
      "— Il est huit heures et demie.",
      "— Je me lève à sept heures.",
      "— Je commence le travail à neuf heures.",
      "— Le soir, je dîne à vingt heures.",
      "— Je me couche vers vingt-trois heures.",
    ],
    tip: L(
      "Il est + hour. Demie = half past.",
      "Il est + heure. Demie = :30.",
      "Il est + الساعة. Demie = والنصف."
    ),
    vocab: [
      vocab("quelle heure est-il ?", "what time is it?", "heure", "كم الساعة؟", "Quelle heure est-il ?"),
      vocab("et demie", "half past", ":30", "والنصف", "Il est huit heures et demie."),
      vocab("je me lève", "I get up", "routine", "أنهض", "Je me lève à sept heures."),
      vocab("je me couche", "I go to bed", "routine", "أنام", "Je me couche à vingt-trois heures."),
      vocab("le soir", "in the evening", "moment", "مساءً", "Le soir, je dîne."),
    ],
    exercises: [
      ex("a1dt-e1", "What time is it?", "Quelle heure est-il ?", "كم الساعة؟", ["quelle heure est-il", "quelle heure est-il ?"]),
      ex("a1dt-e2", "It is 8:30", "Il est huit heures et demie", "الساعة 8:30", ["il est huit heures et demie"]),
      ex("a1dt-e3", "I get up at 7", "Je me lève à sept heures", "أنهض الساعة 7", ["je me leve a sept heures", "je me lève à sept heures"]),
      ex("a1dt-e4", "I go to bed at 11 p.m.", "Je me couche à vingt-trois heures", "أنام 23", ["je me couche a vingt-trois heures", "je me couche à vingt-trois heures"]),
      ex("a1dt-e5", "In the evening I have dinner", "Le soir, je dîne", "مساءً أتعشى", ["le soir, je dine", "le soir je dine", "le soir, je dîne"]),
      ex("a1dt-e6", "I start work at 9", "Je commence le travail à neuf heures", "أبدأ العمل 9", ["je commence le travail a neuf heures", "je commence le travail à neuf heures"]),
    ],
    reviewEn: "A1 time: clock + simple routine verbs.",
    checklist: ["Quelle heure…", "Il est … et demie", "Je me lève", "Je me couche", "Le soir"],
    quiz: [
      q("a1dt-q1", "Ask the time:", "Demander l'heure :", "اسأل عن الساعة:", ["Quelle heure est-il ?", "Quel âge as-tu ?", "Où habites-tu ?", "Comment ça va ?"], 0),
      q("a1dt-q2", "8:30:", "8h30 :", "8:30:", ["Il est huit heures et demie", "Il est huit heures", "Il est demi huit", "Huit demi"], 0),
      q("a1dt-q3", "Get up:", "Se lever :", "الاستيقاظ:", ["Je me lève", "Je lève me", "Je suis lève", "Lève je"], 0),
      q("a1dt-q4", "Go to bed:", "Se coucher :", "النوم:", ["Je me couche", "Je couche me", "Je suis couche", "Couche"], 0),
      q("a1dt-q5", "Evening:", "Soir :", "مساء:", ["le soir", "le matin seulement", "jamais", "interdit"], 0),
    ],
  }),
  makeUnit({
    id: "fr-a1-deep-city",
    level: "A1",
    order: 26,
    title: L("In the city", "En ville", "في المدينة"),
    goal: "goal-a1-deep-city",
    intro: L(
      "Ask for places and understand simple directions.",
      "Demander un lieu et comprendre une indication simple.",
      "اسأل عن مكان وافهم اتجاهًا بسيطًا."
    ),
    dialogue: [
      "— Excusez-moi, où est la gare ?",
      "— La gare est tout droit, puis à gauche.",
      "— Il y a un supermarché près d'ici ?",
      "— Oui, à deux cents mètres.",
      "— Merci beaucoup !",
      "— De rien. Bonne journée !",
    ],
    tip: L(
      "Tout droit = straight. À gauche / à droite = left / right.",
      "Tout droit ; à gauche ; à droite.",
      "Tout droit = على طول. À gauche / à droite."
    ),
    vocab: [
      vocab("la gare", "the train station", "transport", "المحطة", "Où est la gare ?"),
      vocab("tout droit", "straight ahead", "direction", "على طول", "Allez tout droit."),
      vocab("à gauche", "to the left", "direction", "يسار", "Puis à gauche."),
      vocab("à droite", "to the right", "direction", "يمين", "Tournez à droite."),
      vocab("près d'ici", "nearby", "lieu", "قريب من هنا", "Il y a un café près d'ici."),
    ],
    exercises: [
      ex("a1dc-e1", "Where is the station?", "Où est la gare ?", "فين المحطة؟", ["ou est la gare", "où est la gare", "ou est la gare ?"]),
      ex("a1dc-e2", "Straight ahead", "Tout droit", "على طول", ["tout droit"]),
      ex("a1dc-e3", "Then left", "Puis à gauche", "ثم يسار", ["puis a gauche", "puis à gauche"]),
      ex("a1dc-e4", "Is there a supermarket nearby?", "Il y a un supermarché près d'ici ?", "في سوبرماركت قريب؟", ["il y a un supermarche pres d'ici", "il y a un supermarché près d'ici"]),
      ex("a1dc-e5", "Thank you very much", "Merci beaucoup", "شكرًا جزيلًا", ["merci beaucoup"]),
      ex("a1dc-e6", "You're welcome", "De rien", "العفو", ["de rien"]),
    ],
    reviewEn: "A1 city: places + basic directions + politeness.",
    checklist: ["Où est… ?", "Tout droit", "À gauche / droite", "Près d'ici", "Merci / De rien"],
    quiz: [
      q("a1dc-q1", "Station:", "Gare :", "محطة:", ["la gare", "le gare", "une garement", "gare le"], 0),
      q("a1dc-q2", "Straight:", "Droit :", "على طول:", ["tout droit", "tout gauche", "tout café", "tout merci"], 0),
      q("a1dc-q3", "Left:", "Gauche :", "يسار:", ["à gauche", "à droite seulement", "tout café", "de rien"], 0),
      q("a1dc-q4", "Nearby:", "Proche :", "قريب:", ["près d'ici", "loin jamais", "fermé", "interdit"], 0),
      q("a1dc-q5", "You're welcome:", "Réponse à merci :", "رد الشكر:", ["De rien", "Bonjour", "Fermé", "Deux euros"], 0),
    ],
  }),

  // ——— A2 depth ———
  makeUnit({
    id: "fr-a2-deep-past",
    level: "A2",
    order: 22,
    title: L("Past weekend", "Le week-end dernier", "نهاية الأسبوع الماضية"),
    goal: "goal-a2-deep-past",
    intro: L(
      "Narrate last weekend with passé composé.",
      "Raconter le week-end au passé composé.",
      "احكِ عن نهاية الأسبوع بالماضي المركب."
    ),
    dialogue: [
      "— Qu'est-ce que tu as fait ce week-end ?",
      "— J'ai visité un musée avec des amis.",
      "— Vous êtes restés longtemps ?",
      "— Oui, nous sommes restés trois heures.",
      "— Et dimanche ?",
      "— Dimanche, j'ai regardé un film et j'ai dormi tôt.",
    ],
    tip: L(
      "Passé composé: avoir/être + past participle.",
      "Passé composé : avoir/être + participe.",
      "الماضي المركب: avoir/être + التصريف."
    ),
    vocab: [
      vocab("j'ai visité", "I visited", "passé", "زرت", "J'ai visité un musée."),
      vocab("nous sommes restés", "we stayed", "passé être", "بقينا", "Nous sommes restés trois heures."),
      vocab("j'ai regardé", "I watched", "passé", "شاهدت", "J'ai regardé un film."),
      vocab("j'ai dormi", "I slept", "passé", "نمت", "J'ai dormi tôt."),
      vocab("le week-end dernier", "last weekend", "temps", "نهاية الأسبوع الماضية", "Le week-end dernier…"),
    ],
    exercises: [
      ex("a2dp-e1", "What did you do this weekend?", "Qu'est-ce que tu as fait…", "عملت إيه؟", ["qu'est-ce que tu as fait ce week-end", "qu est-ce que tu as fait ce week-end"]),
      ex("a2dp-e2", "I visited a museum", "J'ai visité un musée", "زرت متحفًا", ["j'ai visite un musee", "j'ai visité un musée", "j ai visite un musee"]),
      ex("a2dp-e3", "We stayed three hours", "Nous sommes restés trois heures", "بقينا 3 ساعات", ["nous sommes restes trois heures", "nous sommes restés trois heures"]),
      ex("a2dp-e4", "I watched a film", "J'ai regardé un film", "اتفرجت فيلم", ["j'ai regarde un film", "j'ai regardé un film"]),
      ex("a2dp-e5", "I slept early", "J'ai dormi tôt", "نمت بدري", ["j'ai dormi tot", "j'ai dormi tôt"]),
      ex("a2dp-e6", "Last weekend", "Le week-end dernier", "نهاية الأسبوع الماضية", ["le week-end dernier", "le weekend dernier"]),
    ],
    reviewEn: "A2 past narrative with common verbs.",
    checklist: ["Qu'est-ce que tu as fait…", "J'ai + participe", "Nous sommes restés", "Dimanche…"],
    quiz: [
      q("a2dp-q1", "I visited:", "Visiter passé :", "زرت:", ["J'ai visité", "Je visite hier", "Je suis visité", "Visité je"], 0),
      q("a2dp-q2", "We stayed (être):", "Rester :", "بقينا:", ["Nous sommes restés", "Nous avons restés", "Nous restons hier", "Resté nous"], 0),
      q("a2dp-q3", "I watched:", "Regarder :", "شاهدت:", ["J'ai regardé", "Je suis regardé", "Regarde j'ai", "J'ai regarde pas"], 0),
      q("a2dp-q4", "Last weekend:", "Week-end :", "آخر أسبوع:", ["Le week-end dernier", "Le week-end prochain seulement", "Hier matin non", "Demain"], 0),
      q("a2dp-q5", "I slept:", "Dormir :", "نمت:", ["J'ai dormi", "Je suis dormi", "Dormi j'ai", "Je dors hier"], 0),
    ],
  }),
  makeUnit({
    id: "fr-a2-deep-health",
    level: "A2",
    order: 28,
    title: L("At the doctor", "Chez le médecin", "عند الطبيب"),
    goal: "goal-a2-deep-health",
    intro: L(
      "Explain simple symptoms and understand basic advice.",
      "Expliquer des symptômes simples.",
      "اشرح أعراضًا بسيطة وافهم نصيحة أساسية."
    ),
    dialogue: [
      "— Bonjour docteur, je ne me sens pas bien.",
      "— Qu'est-ce qui ne va pas ?",
      "— J'ai mal à la tête et un peu de fièvre.",
      "— Depuis quand ?",
      "— Depuis hier soir.",
      "— Reposez-vous et buvez beaucoup d'eau.",
    ],
    tip: L(
      "J'ai mal à + body part.",
      "J'ai mal à + partie du corps.",
      "J'ai mal à + جزء من الجسم."
    ),
    vocab: [
      vocab("je ne me sens pas bien", "I don't feel well", "santé", "مش كويس", "Je ne me sens pas bien."),
      vocab("j'ai mal à la tête", "I have a headache", "douleur", "صداع", "J'ai mal à la tête."),
      vocab("de la fièvre", "fever", "symptôme", "حرارة", "J'ai un peu de fièvre."),
      vocab("depuis quand ?", "since when?", "temps", "من امتى؟", "Depuis quand ?"),
      vocab("reposez-vous", "rest (formal)", "conseil", "ارتَح", "Reposez-vous."),
    ],
    exercises: [
      ex("a2dh-e1", "I don't feel well", "Je ne me sens pas bien", "مش كويس", ["je ne me sens pas bien"]),
      ex("a2dh-e2", "I have a headache", "J'ai mal à la tête", "صداع", ["j'ai mal a la tete", "j'ai mal à la tête"]),
      ex("a2dh-e3", "A bit of fever", "Un peu de fièvre", "شوية حرارة", ["un peu de fievre", "un peu de fièvre"]),
      ex("a2dh-e4", "Since when?", "Depuis quand ?", "من امتى؟", ["depuis quand", "depuis quand ?"]),
      ex("a2dh-e5", "Rest (formal)", "Reposez-vous", "ارتاحوا", ["reposez-vous", "reposez vous"]),
      ex("a2dh-e6", "Drink a lot of water", "Buvez beaucoup d'eau", "اشرب مياه كتير", ["buvez beaucoup d'eau", "buvez beaucoup d eau"]),
    ],
    reviewEn: "A2 health: symptoms + polite advice.",
    checklist: ["Je ne me sens pas bien", "J'ai mal à…", "Fièvre", "Depuis quand", "Reposez-vous"],
    quiz: [
      q("a2dh-q1", "Not well:", "Pas bien :", "تعبان:", ["Je ne me sens pas bien", "Je suis gare", "Je mange mardi", "Fermé"], 0),
      q("a2dh-q2", "Headache:", "Tête :", "صداع:", ["J'ai mal à la tête", "J'ai mal le tête", "Mal tête j'ai", "Tête mal"], 0),
      q("a2dh-q3", "Fever:", "Fièvre :", "حرارة:", ["de la fièvre", "du pain", "la gare", "tout droit"], 0),
      q("a2dh-q4", "Since when:", "Depuis :", "من متى:", ["Depuis quand ?", "Où est la gare ?", "Combien ?", "Qui ?"], 0),
      q("a2dh-q5", "Rest:", "Repos :", "راحة:", ["Reposez-vous", "Courez", "Fermez", "Interdit"], 0),
    ],
  }),

  // ——— B1 depth ———
  makeUnit({
    id: "fr-b1-deep-opinion",
    level: "B1",
    order: 22,
    title: L("Giving opinions", "Donner son avis", "إبداء الرأي"),
    goal: "goal-b1-deep-opinion",
    intro: L(
      "Build a short opinion with reasons — core B1 exam skill.",
      "Construire une opinion courte avec des raisons.",
      "ابنِ رأيًا قصيرًا مع أسباب — مهارة أساسية في B1."
    ),
    dialogue: [
      "— Tu penses que les réseaux sociaux aident à apprendre ?",
      "— À mon avis, oui, si on les utilise bien.",
      "— Par exemple ?",
      "— On peut écouter des podcasts et écrire chaque jour.",
      "— Je ne suis pas totalement d'accord : ça distrait aussi.",
      "— C'est vrai. Il faut trouver un équilibre.",
    ],
    tip: L(
      "Opinion → example → concession.",
      "Opinion → exemple → concession.",
      "رأي ← مثال ← تنازل."
    ),
    vocab: [
      vocab("à mon avis", "in my opinion", "opinion", "في رأيي", "À mon avis, oui."),
      vocab("par exemple", "for example", "illustration", "مثلًا", "Par exemple, on peut…"),
      vocab("je ne suis pas d'accord", "I disagree", "désaccord", "لا أوافق", "Je ne suis pas d'accord."),
      vocab("un équilibre", "a balance", "nuance", "توازن", "Trouver un équilibre."),
      vocab("distraire", "to distract", "effet", "يلهي", "Ça distrait aussi."),
    ],
    exercises: [
      ex("b1do-e1", "In my opinion", "À mon avis", "في رأيي", ["a mon avis", "à mon avis"]),
      ex("b1do-e2", "For example", "Par exemple", "مثلًا", ["par exemple"]),
      ex("b1do-e3", "I disagree", "Je ne suis pas d'accord", "لا أوافق", ["je ne suis pas d'accord"]),
      ex("b1do-e4", "Find a balance", "Trouver un équilibre", "نلاقي توازن", ["trouver un equilibre", "trouver un équilibre"]),
      ex("b1do-e5", "It also distracts", "Ça distrait aussi", "كمان بيلهي", ["ca distrait aussi", "ça distrait aussi"]),
      ex("b1do-e6", "If we use them well", "Si on les utilise bien", "لو استخدمناهم كويس", ["si on les utilise bien"]),
    ],
    reviewEn: "B1 opinion structure for oral and written exam.",
    checklist: ["À mon avis", "Par exemple", "Je ne suis pas d'accord", "Équilibre", "Concession"],
    quiz: [
      q("b1do-q1", "Opinion:", "Avis :", "رأي:", ["À mon avis", "Tout droit", "Deux euros", "Fermé"], 0),
      q("b1do-q2", "Example:", "Exemple :", "مثال:", ["Par exemple", "Interdit", "Gare", "Fièvre"], 0),
      q("b1do-q3", "Disagree:", "Désaccord :", "رفض:", ["Je ne suis pas d'accord", "Bonjour", "Merci", "Salut"], 0),
      q("b1do-q4", "Balance:", "Équilibre :", "توازن:", ["un équilibre", "une gare", "un café seulement", "un silence"], 0),
      q("b1do-q5", "Distract:", "Distraire :", "إلهاء:", ["distraire", "habiter", "dormir only", "fermer"], 0),
    ],
  }),
  makeUnit({
    id: "fr-b1-deep-formal",
    level: "B1",
    order: 30,
    title: L("Formal messages", "Messages formels", "رسائل رسمية"),
    goal: "goal-b1-deep-formal",
    intro: L(
      "Write a short formal request (email style) for work or school.",
      "Écrire une demande formelle courte.",
      "اكتب طلبًا رسميًا قصيرًا للعمل أو الدراسة."
    ),
    dialogue: [
      "— Madame, Monsieur,",
      "— Je vous écris pour demander des informations sur le cours de français.",
      "— Serait-il possible d'obtenir le programme ?",
      "— Je vous remercie par avance.",
      "— Cordialement,",
      "— Nour Hassan",
    ],
    tip: L(
      "Open with Madame, Monsieur — close with Cordialement.",
      "Ouverture et formule de politesse finales.",
      "ابدأ بـ Madame, Monsieur واختتم بـ Cordialement."
    ),
    vocab: [
      vocab("je vous écris pour…", "I am writing to…", "but", "أكتب إليكم من أجل", "Je vous écris pour demander…"),
      vocab("serait-il possible de…", "would it be possible to…", "requête", "هل يمكن…", "Serait-il possible d'obtenir…"),
      vocab("par avance", "in advance", "politesse", "مقدمًا", "Je vous remercie par avance."),
      vocab("cordialement", "kind regards", "clôture", "مع التحية", "Cordialement,"),
      vocab("obtenir", "to obtain", "verbe", "يحصل على", "Obtenir le programme."),
    ],
    exercises: [
      ex("b1df-e1", "I am writing to ask…", "Je vous écris pour demander", "أكتب لأطلب", ["je vous ecris pour demander", "je vous écris pour demander"]),
      ex("b1df-e2", "Would it be possible to…", "Serait-il possible de", "هل يمكن", ["serait-il possible de", "serait il possible de"]),
      ex("b1df-e3", "Thank you in advance", "Je vous remercie par avance", "شكرًا مقدمًا", ["je vous remercie par avance"]),
      ex("b1df-e4", "Kind regards", "Cordialement", "مع التحية", ["cordialement"]),
      ex("b1df-e5", "Madame, Monsieur", "Madame, Monsieur", "السيدة، السيد", ["madame, monsieur", "madame monsieur"]),
      ex("b1df-e6", "Obtain the program", "Obtenir le programme", "الحصول على البرنامج", ["obtenir le programme"]),
    ],
    reviewEn: "B1 formal email skeleton for real life and exam.",
    checklist: ["Madame, Monsieur", "Je vous écris pour…", "Serait-il possible…", "Par avance", "Cordialement"],
    quiz: [
      q("b1df-q1", "Formal opening:", "Ouverture :", "افتتاح:", ["Madame, Monsieur", "Salut !", "Hey", "Yo"], 0),
      q("b1df-q2", "Purpose line:", "But :", "الغرض:", ["Je vous écris pour…", "Je mange pour…", "Je dors pour…", "Fermé pour"], 0),
      q("b1df-q3", "Polite request:", "Requête :", "طلب:", ["Serait-il possible de…", "Donne maintenant", "Je veux !", "Non"], 0),
      q("b1df-q4", "Closing:", "Fin :", "خاتمة:", ["Cordialement", "Bisous only", "Ciao", "Bye"], 0),
      q("b1df-q5", "In advance:", "Par avance :", "مقدمًا:", ["par avance", "par gare", "par fièvre", "par droite"], 0),
    ],
  }),

  // ——— B2 depth ———
  makeUnit({
    id: "fr-b2-deep-media",
    level: "B2",
    order: 22,
    title: L("Media & critical reading", "Médias et lecture critique", "الإعلام والقراءة النقدية"),
    goal: "goal-b2-deep-media",
    intro: L(
      "Identify a writer's stance and contrast arguments — B2 reading/writing core.",
      "Repérer la position de l'auteur et contraster les arguments.",
      "حدد موقف الكاتب وقابل بين الحجج — أساس B2."
    ),
    dialogue: [
      "— L'article affirme que le télétravail augmente la productivité.",
      "— Pourtant, d'autres études soulignent le risque d'isolement.",
      "— D'une part les gains de temps, d'autre part la cohésion d'équipe.",
      "— L'auteur invite donc à un modèle hybride.",
      "— En définitive, la question n'est pas tout ou rien.",
    ],
    tip: L(
      "Mark stance verbs: affirmer, souligner, inviter à.",
      "Verbes de position : affirmer, souligner…",
      "أفعال الموقف: affirmer, souligner, inviter à."
    ),
    vocab: [
      vocab("affirmer que", "to claim that", "position", "يؤكد أن", "L'article affirme que…"),
      vocab("souligner", "to highlight", "mise en avant", "يبرز", "Soulignent le risque…"),
      vocab("isolement", "isolation", "risque", "عزلة", "Risque d'isolement."),
      vocab("modèle hybride", "hybrid model", "solution", "نموذج هجين", "Un modèle hybride."),
      vocab("en définitive", "ultimately", "conclusion", "في النهاية", "En définitive…"),
    ],
    exercises: [
      ex("b2dm-e1", "The article claims that…", "L'article affirme que", "المقال يؤكد أن", ["l'article affirme que", "l article affirme que"]),
      ex("b2dm-e2", "Highlight the risk", "Souligner le risque", "إبراز الخطر", ["souligner le risque"]),
      ex("b2dm-e3", "Risk of isolation", "Risque d'isolement", "خطر العزلة", ["risque d'isolement", "risque d isolement"]),
      ex("b2dm-e4", "Hybrid model", "Modèle hybride", "نموذج هجين", ["modele hybride", "modèle hybride"]),
      ex("b2dm-e5", "Ultimately", "En définitive", "في النهاية", ["en definitive", "en définitive"]),
      ex("b2dm-e6", "On one hand… on the other…", "D'une part… d'autre part", "من جهة… من جهة", ["d'une part d'autre part", "d une part d autre part"]),
    ],
    reviewEn: "B2 media language for synthesis and essay.",
    checklist: ["Affirmer que", "Souligner", "D'une part / d'autre part", "Hybride", "En définitive"],
    quiz: [
      q("b2dm-q1", "Claim:", "Affirmer :", "زعم:", ["affirmer que", "habiter que", "dormir que", "fermer que"], 0),
      q("b2dm-q2", "Highlight:", "Souligner :", "إبراز:", ["souligner", "supermarché", "fièvre", "gare"], 0),
      q("b2dm-q3", "Isolation:", "Isolement :", "عزلة:", ["isolement", "ouverture", "café", "menu"], 0),
      q("b2dm-q4", "Conclusion marker:", "Clôture :", "خاتمة:", ["en définitive", "bonjour", "merci non", "salut"], 0),
      q("b2dm-q5", "Hybrid:", "Hybride :", "هجين:", ["modèle hybride", "modèle fermé only", "modèle silence", "modèle pain"], 0),
    ],
  }),

  // ——— C1 depth ———
  makeUnit({
    id: "fr-c1-deep-synth",
    level: "C1",
    order: 22,
    title: L("Academic synthesis", "Synthèse académique", "تلخيص أكاديمي"),
    goal: "goal-c1-deep-synth",
    intro: L(
      "Neutral synthesis language before personal evaluation — DALF C1 style.",
      "Langue de synthèse neutre avant l'évaluation personnelle.",
      "لغة تلخيص محايدة قبل التقييم الشخصي — أسلوب DALF C1."
    ),
    dialogue: [
      "— Les deux documents convergent sur la nécessité de former les enseignants.",
      "— En revanche, ils divergent quant aux moyens à mobiliser.",
      "— On peut en déduire une tension entre ambition et ressources.",
      "— Il convient de nuancer : le contexte local reste déterminant.",
      "— Ainsi, toute généralisation rapide serait hasardeuse.",
    ],
    tip: L(
      "First report, then evaluate.",
      "D'abord rapporter, ensuite évaluer.",
      "أولًا انقل، ثم قيّم."
    ),
    vocab: [
      vocab("converger sur", "to converge on", "accord", "يتفق على", "Convergent sur…"),
      vocab("diverger quant à", "to diverge regarding", "désaccord", "يختلف حول", "Divergent quant aux moyens…"),
      vocab("il convient de", "it is appropriate to", "recommandation", "ينبغي", "Il convient de nuancer."),
      vocab("hasardeux", "risky / hazardous", "jugement", "محفوف بالمخاطر", "Hasardeuse."),
      vocab("déterminant", "decisive", "importance", "حاسم", "Reste déterminant."),
    ],
    exercises: [
      ex("c1ds-e1", "Converge on", "Converger sur", "يتفق على", ["converger sur"]),
      ex("c1ds-e2", "Diverge regarding", "Diverger quant à", "يختلف حول", ["diverger quant a", "diverger quant à"]),
      ex("c1ds-e3", "It is appropriate to nuance", "Il convient de nuancer", "ينبغي التدقيق", ["il convient de nuancer"]),
      ex("c1ds-e4", "One can deduce", "On peut en déduire", "يمكن استنتاج", ["on peut en deduire", "on peut en déduire"]),
      ex("c1ds-e5", "Risky generalization", "Généralisation hasardeuse", "تعميم خطر", ["generalisation hasardeuse", "généralisation hasardeuse"]),
      ex("c1ds-e6", "Local context is decisive", "Le contexte local reste déterminant", "السياق المحلي حاسم", ["le contexte local reste determinant", "le contexte local reste déterminant"]),
    ],
    reviewEn: "C1 synthesis connectors and cautious evaluation.",
    checklist: ["Converger / diverger", "On peut en déduire", "Il convient de", "Nuancer", "Hasardeux"],
    quiz: [
      q("c1ds-q1", "Shared point:", "Point commun :", "مشترك:", ["converger sur", "manger sur", "dormir sur", "fermer sur"], 0),
      q("c1ds-q2", "Difference:", "Écart :", "اختلاف:", ["diverger quant à", "habiter quant à", "café quant à", "gare quant à"], 0),
      q("c1ds-q3", "Appropriate to:", "Il convient :", "ينبغي:", ["il convient de", "il gare de", "il pain de", "il silence de"], 0),
      q("c1ds-q4", "Deduce:", "Déduire :", "استنتاج:", ["on peut en déduire", "on peut en danser", "on peut en fumer", "on peut en fermer"], 0),
      q("c1ds-q5", "Risky:", "Hasardeux :", "خطر:", ["hasardeux", "heureux only", "horaire", "hôpital always"], 0),
    ],
  }),

  // ——— C2 depth ———
  makeUnit({
    id: "fr-c2-deep-debate",
    level: "C2",
    order: 22,
    title: L("High-level debate", "Débat de haut niveau", "نقاش عالي المستوى"),
    goal: "goal-c2-deep-debate",
    intro: L(
      "Hold a precise stance on a complex issue with concessions — DALF C2 oral/written.",
      "Tenir une position précise avec concessions.",
      "موقف دقيق مع تنازلات — شفهي/كتابي DALF C2."
    ),
    dialogue: [
      "— Force est de constater que l'IA transforme déjà les pratiques pédagogiques.",
      "— Encore faut-il préciser qu'elle ne remplace pas la relation enseignant-apprenant.",
      "— Loin de résoudre toutes les inégalités, elle peut même les accentuer.",
      "— Cela étant, refuser tout outil numérique serait tout aussi dogmatique.",
      "— Pour conclure avec nuance, l'enjeu est une intégration critique et équitable.",
    ],
    tip: L(
      "Stack: observation → precision → risk → balanced close.",
      "Constat → précision → risque → clôture équilibrée.",
      "ملاحظة ← تدقيق ← خطر ← خاتمة متوازنة."
    ),
    vocab: [
      vocab("force est de constater que", "it must be noted that", "constat", "لا بد من ملاحظة أن", "Force est de constater que…"),
      vocab("encore faut-il préciser que", "still one must specify that", "réserve", "مع ضرورة التوضيح أن", "Encore faut-il préciser que…"),
      vocab("loin de…", "far from…", "opposition", "بعيدًا عن", "Loin de résoudre…"),
      vocab("dogmatique", "dogmatic", "critique", "متزمت", "Dogmatique."),
      vocab("intégration critique", "critical integration", "enjeu", "إدماج نقدي", "Intégration critique et équitable."),
    ],
    exercises: [
      ex("c2dd-e1", "It must be noted that…", "Force est de constater que", "لا بد من ملاحظة", ["force est de constater que"]),
      ex("c2dd-e2", "One must still specify that…", "Encore faut-il préciser que", "مع التوضيح أن", ["encore faut-il preciser que", "encore faut-il préciser que"]),
      ex("c2dd-e3", "Far from solving…", "Loin de résoudre", "بعيدًا عن حل", ["loin de resoudre", "loin de résoudre"]),
      ex("c2dd-e4", "Dogmatic", "Dogmatique", "متزمت", ["dogmatique"]),
      ex("c2dd-e5", "Critical integration", "Intégration critique", "إدماج نقدي", ["integration critique", "intégration critique"]),
      ex("c2dd-e6", "To conclude with nuance", "Pour conclure avec nuance", "للخاتمة بدقة", ["pour conclure avec nuance"]),
    ],
    reviewEn: "C2 debate moves for near-native control.",
    checklist: ["Force est de constater", "Encore faut-il", "Loin de…", "Dogmatique", "Clôture nuancée"],
    quiz: [
      q("c2dd-q1", "Formal observation:", "Constat :", "ملاحظة:", ["force est de constater que", "bonjour que", "merci que", "salut que"], 0),
      q("c2dd-q2", "Precision:", "Précision :", "تدقيق:", ["encore faut-il préciser que", "encore faut-il dormir que", "encore café que", "encore gare que"], 0),
      q("c2dd-q3", "Far from:", "Loin de :", "بعيدًا:", ["loin de", "près de seulement", "dans de", "sous de"], 0),
      q("c2dd-q4", "Dogmatic:", "Dogmatique :", "تزمت:", ["dogmatique", "magique only", "pratique never", "horaire"], 0),
      q("c2dd-q5", "Nuanced close:", "Fin :", "خاتمة:", ["pour conclure avec nuance", "pour conclure avec pain", "pour conclure avec gare", "pour conclure avec fièvre"], 0),
    ],
  }),
];
