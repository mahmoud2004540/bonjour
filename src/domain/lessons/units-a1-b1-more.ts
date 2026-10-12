import type { LessonUnit, ExerciseItem, QuizItem, VocabCard } from "./types";

/** Extra A1–B1 depth — more practice hours on the levels learners use most. */

function L(en: string, fr: string, ar: string) {
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
  answers: string[]
): ExerciseItem {
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
  level: "A1" | "A2" | "B1";
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

export const A1_B1_MORE_UNITS: LessonUnit[] = [
  // —— A1 more ——
  U({
    id: "fr-a1-more-shopping",
    level: "A1",
    order: 28,
    title: L("Shopping numbers", "Courses et nombres", "التسوق والأرقام"),
    goal: "goal-a1-more-shop",
    intro: L(
      "Buy simple items and understand prices.",
      "Acheter des articles simples et comprendre les prix.",
      "اشترِ أشياء بسيطة وافهم الأسعار."
    ),
    dialogue: [
      "— Bonjour, je voudrais une baguette, s'il vous plaît.",
      "— Oui. Avec ceci ?",
      "— Oui, deux pommes aussi.",
      "— Ça fait trois euros cinquante.",
      "— Voilà. Merci !",
      "— Au revoir, bonne journée !",
    ],
    tip: L(
      "Ça fait… = that comes to (the total).",
      "Ça fait… = total à payer.",
      "Ça fait… = المجموع."
    ),
    vocab: [
      vocab("une baguette", "a baguette", "pain", "باغيت", "Une baguette, s'il vous plaît."),
      vocab("avec ceci ?", "anything else?", "magasin", "حاجة كمان؟", "Avec ceci ?"),
      vocab("ça fait…", "that comes to…", "prix", "المجموع…", "Ça fait trois euros."),
      vocab("deux pommes", "two apples", "fruit", "تفاحتان", "Deux pommes."),
      vocab("voilà", "here you go", "échange", "اتفضل", "Voilà."),
    ],
    exercises: [
      ex("a1ms-e1", "I would like a baguette", "Je voudrais une baguette", "عايز باغيت", ["je voudrais une baguette"]),
      ex("a1ms-e2", "Two apples", "Deux pommes", "تفاحتين", ["deux pommes"]),
      ex("a1ms-e3", "That comes to three euros", "Ça fait trois euros", "المجموع 3 يورو", ["ca fait trois euros", "ça fait trois euros"]),
      ex("a1ms-e4", "Anything else?", "Avec ceci ?", "حاجة كمان؟", ["avec ceci", "avec ceci ?"]),
      ex("a1ms-e5", "Here you go", "Voilà", "اتفضل", ["voila", "voilà"]),
      ex("a1ms-e6", "Please (polite)", "S'il vous plaît", "من فضلك", ["s'il vous plait", "s'il vous plaît", "sil vous plait"]),
    ],
    review: "A1 shopping: items, quantity, total.",
    checklist: ["Je voudrais…", "Deux + noun", "Ça fait…", "Avec ceci ?", "Voilà"],
    quiz: [
      q("a1ms-q1", "Baguette:", "Pain :", "خبز:", ["une baguette", "un baguette", "le baguette", "des baguette"], 0),
      q("a1ms-q2", "Total phrase:", "Total :", "مجموع:", ["Ça fait…", "Ça gare…", "Ça fièvre…", "Ça silence…"], 0),
      q("a1ms-q3", "Anything else:", "Autre chose :", "كمان:", ["Avec ceci ?", "Où est la gare ?", "Fermé ?", "Qui ?"], 0),
      q("a1ms-q4", "Two apples:", "Pommes :", "تفاح:", ["deux pommes", "deux pomme", "deux le pommes", "pommes deux"], 0),
      q("a1ms-q5", "Here you go:", "Voilà :", "اتفضل:", ["Voilà", "Fermé", "Interdit", "Demain"], 0),
    ],
  }),
  U({
    id: "fr-a1-more-transport",
    level: "A1",
    order: 30,
    title: L("Bus & metro", "Bus et métro", "الباص والمترو"),
    goal: "goal-a1-more-transport",
    intro: L(
      "Ask for a ticket and a simple line.",
      "Demander un ticket et une ligne simple.",
      "اطلب تذكرة وخط بسيط."
    ),
    dialogue: [
      "— Un ticket, s'il vous plaît.",
      "— Aller simple ou aller-retour ?",
      "— Aller simple.",
      "— C'est deux euros.",
      "— Le métro va jusqu'à la gare ?",
      "— Oui, ligne 4, direction nord.",
    ],
    tip: L(
      "Aller simple = one way. Aller-retour = return.",
      "Aller simple / aller-retour.",
      "Aller simple = ذهاب. Aller-retour = ذهاب وعودة."
    ),
    vocab: [
      vocab("un ticket", "a ticket", "transport", "تذكرة", "Un ticket, s'il vous plaît."),
      vocab("aller simple", "one-way", "trajet", "ذهاب فقط", "Aller simple."),
      vocab("aller-retour", "return ticket", "trajet", "ذهاب وعودة", "Aller-retour."),
      vocab("la ligne", "the line", "réseau", "الخط", "Ligne 4."),
      vocab("jusqu'à", "until / as far as", "limite", "حتى", "Jusqu'à la gare."),
    ],
    exercises: [
      ex("a1mt-e1", "A ticket please", "Un ticket, s'il vous plaît", "تذكرة من فضلك", ["un ticket, s'il vous plait", "un ticket s'il vous plait", "un ticket, s'il vous plaît"]),
      ex("a1mt-e2", "One way", "Aller simple", "ذهاب", ["aller simple"]),
      ex("a1mt-e3", "Return ticket", "Aller-retour", "ذهاب وعودة", ["aller-retour", "aller retour"]),
      ex("a1mt-e4", "As far as the station", "Jusqu'à la gare", "حتى المحطة", ["jusqu'a la gare", "jusqu'à la gare"]),
      ex("a1mt-e5", "Line 4", "Ligne 4", "خط 4", ["ligne 4", "ligne quatre"]),
      ex("a1mt-e6", "It's two euros", "C'est deux euros", "بـ 2 يورو", ["c'est deux euros", "c est deux euros"]),
    ],
    review: "A1 transport basics for daily life.",
    checklist: ["Un ticket", "Aller simple", "Aller-retour", "Ligne", "Jusqu'à"],
    quiz: [
      q("a1mt-q1", "Ticket:", "Ticket :", "تذكرة:", ["un ticket", "une ticket", "le ticketment", "tickets le"], 0),
      q("a1mt-q2", "One way:", "Simple :", "ذهاب:", ["aller simple", "aller difficile", "aller fermé", "aller silence"], 0),
      q("a1mt-q3", "Return:", "Retour :", "عودة:", ["aller-retour", "aller-seul", "aller-pain", "aller-fièvre"], 0),
      q("a1mt-q4", "Until:", "Jusqu'à :", "حتى:", ["jusqu'à", "depuis only", "pendant never", "sans"], 0),
      q("a1mt-q5", "Line:", "Ligne :", "خط:", ["la ligne", "le ligne", "une ligner", "lignes ma"], 0),
    ],
  }),
  U({
    id: "fr-a1-more-home",
    level: "A1",
    order: 32,
    title: L("Home & rooms", "La maison", "البيت والغرف"),
    goal: "goal-a1-more-home",
    intro: L(
      "Describe a home with rooms and simple location.",
      "Décrire un logement : pièces et lieu simple.",
      "صف بيتًا: الغرف ومكان بسيط."
    ),
    dialogue: [
      "— Tu habites dans un appartement ou une maison ?",
      "— Dans un appartement.",
      "— Il y a combien de pièces ?",
      "— Il y a un salon, une cuisine et deux chambres.",
      "— La salle de bain est petite mais pratique.",
      "— J'aime beaucoup mon balcon.",
    ],
    tip: L(
      "Il y a + noun = there is/are.",
      "Il y a + nom.",
      "Il y a = يوجد."
    ),
    vocab: [
      vocab("un appartement", "an apartment", "logement", "شقة", "J'habite dans un appartement."),
      vocab("une maison", "a house", "logement", "بيت", "Une maison."),
      vocab("le salon", "the living room", "pièce", "الصالة", "Le salon."),
      vocab("une chambre", "a bedroom", "pièce", "غرفة نوم", "Deux chambres."),
      vocab("la salle de bain", "the bathroom", "pièce", "الحمام", "La salle de bain."),
    ],
    exercises: [
      ex("a1mh-e1", "I live in an apartment", "J'habite dans un appartement", "أسكن في شقة", ["j'habite dans un appartement", "j habite dans un appartement"]),
      ex("a1mh-e2", "There is a living room", "Il y a un salon", "في صالة", ["il y a un salon"]),
      ex("a1mh-e3", "Two bedrooms", "Deux chambres", "غرفتين", ["deux chambres"]),
      ex("a1mh-e4", "The bathroom", "La salle de bain", "الحمام", ["la salle de bain"]),
      ex("a1mh-e5", "A house", "Une maison", "بيت", ["une maison"]),
      ex("a1mh-e6", "How many rooms?", "Combien de pièces ?", "كام غرفة؟", ["combien de pieces", "combien de pièces", "combien de pieces ?"]),
    ],
    review: "A1 home vocabulary for daily description.",
    checklist: ["Appartement / maison", "Il y a…", "Salon", "Chambre", "Salle de bain"],
    quiz: [
      q("a1mh-q1", "Apartment:", "Appart :", "شقة:", ["un appartement", "une appartement", "le appartements", "appartement un"], 0),
      q("a1mh-q2", "There is:", "Il y a :", "يوجد:", ["Il y a", "Il est a", "Il y es", "Y il a"], 0),
      q("a1mh-q3", "Bedroom:", "Chambre :", "نوم:", ["une chambre", "un chambre", "le chambre", "chambres une"], 0),
      q("a1mh-q4", "Bathroom:", "Bain :", "حمام:", ["la salle de bain", "le salle de bain", "un salle", "bain salle"], 0),
      q("a1mh-q5", "Living room:", "Salon :", "صالة:", ["le salon", "la salon", "un saloner", "salons le"], 0),
    ],
  }),
  U({
    id: "fr-a1-more-weather",
    level: "A1",
    order: 34,
    title: L("Weather", "La météo", "الطقس"),
    goal: "goal-a1-more-weather",
    intro: L(
      "Talk about simple weather and clothes.",
      "Parler du temps et des vêtements simples.",
      "تكلم عن الطقس وملابس بسيطة."
    ),
    dialogue: [
      "— Quel temps fait-il aujourd'hui ?",
      "— Il fait beau. Il y a du soleil.",
      "— Et demain ?",
      "— Demain, il va pleuvoir.",
      "— Alors j'ai besoin d'un parapluie.",
      "— Oui, et d'un manteau si tu as froid.",
    ],
    tip: L(
      "Il fait beau / froid / chaud. Il pleut.",
      "Il fait… / Il pleut.",
      "Il fait… للطقس. Il pleut = تمطر."
    ),
    vocab: [
      vocab("quel temps fait-il ?", "what's the weather like?", "météo", "إيه الطقس؟", "Quel temps fait-il ?"),
      vocab("il fait beau", "the weather is nice", "météo", "الجو حلو", "Il fait beau."),
      vocab("il pleut", "it is raining", "météo", "بتمطر", "Il pleut."),
      vocab("un parapluie", "an umbrella", "objet", "شمسية", "Un parapluie."),
      vocab("j'ai froid", "I am cold", "sensation", "أنا بردان", "J'ai froid."),
    ],
    exercises: [
      ex("a1mw-e1", "What's the weather like?", "Quel temps fait-il ?", "إيه الطقس؟", ["quel temps fait-il", "quel temps fait-il ?"]),
      ex("a1mw-e2", "The weather is nice", "Il fait beau", "الجو حلو", ["il fait beau"]),
      ex("a1mw-e3", "It is raining", "Il pleut", "بتمطر", ["il pleut"]),
      ex("a1mw-e4", "An umbrella", "Un parapluie", "شمسية", ["un parapluie"]),
      ex("a1mw-e5", "I am cold", "J'ai froid", "بردان", ["j'ai froid", "j ai froid"]),
      ex("a1mw-e6", "There is sun", "Il y a du soleil", "في شمس", ["il y a du soleil"]),
    ],
    review: "A1 weather phrases for small talk.",
    checklist: ["Quel temps…", "Il fait beau", "Il pleut", "Parapluie", "J'ai froid"],
    quiz: [
      q("a1mw-q1", "Ask weather:", "Météo :", "طقس:", ["Quel temps fait-il ?", "Quel âge as-tu ?", "Où habites-tu ?", "Combien ?"], 0),
      q("a1mw-q2", "Nice weather:", "Beau :", "حلو:", ["Il fait beau", "Il est beau pain", "Il gare beau", "Beau il"], 0),
      q("a1mw-q3", "Rain:", "Pluie :", "مطر:", ["Il pleut", "Il pleure always", "Il plait", "Pleut il non"], 0),
      q("a1mw-q4", "Umbrella:", "Parapluie :", "شمسية:", ["un parapluie", "une parapluie", "le parapluies", "parapluie un"], 0),
      q("a1mw-q5", "I am cold:", "Froid :", "برد:", ["J'ai froid", "Je suis froid always", "J'ai chaud only", "Froid j'ai non"], 0),
    ],
  }),

  // —— B1 more ——
  U({
    id: "fr-b1-more-work",
    level: "B1",
    order: 34,
    title: L("Work & routine", "Travail et routine", "العمل والروتين"),
    goal: "goal-b1-more-work",
    intro: L(
      "Describe a workday and preferences with reasons.",
      "Décrire une journée de travail avec des raisons.",
      "صف يوم عمل مع أسباب."
    ),
    dialogue: [
      "— Tu travailles à distance ou au bureau ?",
      "— Trois jours au bureau, deux jours à la maison.",
      "— Qu'est-ce que tu préfères ?",
      "— Je préfère le bureau parce que je vois mes collègues.",
      "— En revanche, à la maison je gagne du temps.",
      "— Au final, le rythme hybride me convient.",
    ],
    tip: L(
      "Je préfère X parce que… / En revanche…",
      "Préférence + cause + contraste.",
      "تفضيل + سبب + مقابلة."
    ),
    vocab: [
      vocab("à distance", "remotely", "travail", "عن بُعد", "Travailler à distance."),
      vocab("au bureau", "at the office", "lieu", "في المكتب", "Au bureau."),
      vocab("je préfère", "I prefer", "choix", "أفضّل", "Je préfère le bureau."),
      vocab("gagner du temps", "to save time", "avantage", "توفير وقت", "Je gagne du temps."),
      vocab("me convient", "suits me", "accord", "يناسبني", "Ça me convient."),
    ],
    exercises: [
      ex("b1mw-e1", "I work remotely", "Je travaille à distance", "أشتغل عن بعد", ["je travaille a distance", "je travaille à distance"]),
      ex("b1mw-e2", "I prefer the office", "Je préfère le bureau", "أفضّل المكتب", ["je prefere le bureau", "je préfère le bureau"]),
      ex("b1mw-e3", "Because I see my colleagues", "Parce que je vois mes collègues", "لأني بشوف زمايلي", ["parce que je vois mes collegues", "parce que je vois mes collègues"]),
      ex("b1mw-e4", "On the other hand", "En revanche", "في المقابل", ["en revanche"]),
      ex("b1mw-e5", "I save time", "Je gagne du temps", "بوفر وقت", ["je gagne du temps"]),
      ex("b1mw-e6", "It suits me", "Ça me convient", "يناسبني", ["ca me convient", "ça me convient"]),
    ],
    review: "B1 work talk with preference and contrast.",
    checklist: ["À distance / bureau", "Je préfère… parce que", "En revanche", "Gagner du temps", "Convenir"],
    quiz: [
      q("b1mw-q1", "Remotely:", "Distance :", "عن بعد:", ["à distance", "à gare", "à fièvre", "à silence"], 0),
      q("b1mw-q2", "I prefer:", "Préférer :", "أفضل:", ["Je préfère", "Je prépare only", "Je pars", "Préfère je"], 0),
      q("b1mw-q3", "Contrast:", "Contraste :", "مقابلة:", ["En revanche", "Bonjour", "Merci", "Salut"], 0),
      q("b1mw-q4", "Save time:", "Temps :", "وقت:", ["gagner du temps", "perdre always", "manger du temps", "fermer du temps"], 0),
      q("b1mw-q5", "Suits me:", "Convenir :", "يناسب:", ["me convient", "me gare", "me pain", "me ticket"], 0),
    ],
  }),
  U({
    id: "fr-b1-more-travel",
    level: "B1",
    order: 36,
    title: L("Travel problems", "Problèmes de voyage", "مشاكل السفر"),
    goal: "goal-b1-more-travel",
    intro: L(
      "Handle a delay or lost item with calm formal phrases.",
      "Gérer un retard ou un objet perdu.",
      "تعامل مع تأخير أو شيء مفقود بهدوء."
    ),
    dialogue: [
      "— Excusez-moi, mon train a du retard.",
      "— Oui, il y a vingt minutes de retard.",
      "— Pouvez-vous me dire l'heure de départ prévue ?",
      "— Vers quinze heures dix.",
      "— J'ai aussi perdu mon téléphone dans le train d'hier.",
      "— Je vais vous indiquer le service des objets trouvés.",
    ],
    tip: L(
      "Pouvez-vous + infinitive for polite requests.",
      "Pouvez-vous + infinitif.",
      "Pouvez-vous + المصدر للطلب المهذب."
    ),
    vocab: [
      vocab("du retard", "a delay", "transport", "تأخير", "Le train a du retard."),
      vocab("prévu / prévue", "scheduled", "horaire", "مقرّر", "L'heure prévue."),
      vocab("objets trouvés", "lost and found", "service", "المفقودات", "Service des objets trouvés."),
      vocab("pouvez-vous…", "can you… (formal)", "requête", "هل يمكنكم…", "Pouvez-vous me dire…"),
      vocab("indiquer", "to point out / show", "aide", "يشير", "Indiquer le service."),
    ],
    exercises: [
      ex("b1mt-e1", "My train is delayed", "Mon train a du retard", "قطاري متأخر", ["mon train a du retard"]),
      ex("b1mt-e2", "Twenty minutes delay", "Vingt minutes de retard", "تأخير 20 دقيقة", ["vingt minutes de retard"]),
      ex("b1mt-e3", "Can you tell me…", "Pouvez-vous me dire", "تقدروا تقولولي", ["pouvez-vous me dire", "pouvez vous me dire"]),
      ex("b1mt-e4", "Scheduled departure time", "L'heure de départ prévue", "ميعاد القيام المقرر", ["l'heure de depart prevue", "l'heure de départ prévue"]),
      ex("b1mt-e5", "Lost and found", "Objets trouvés", "المفقودات", ["objets trouves", "objets trouvés"]),
      ex("b1mt-e6", "I lost my phone", "J'ai perdu mon téléphone", "ضيّعت موبايلي", ["j'ai perdu mon telephone", "j'ai perdu mon téléphone"]),
    ],
    review: "B1 travel problems with formal requests.",
    checklist: ["Du retard", "Pouvez-vous…", "Prévu", "Objets trouvés", "J'ai perdu…"],
    quiz: [
      q("b1mt-q1", "Delay:", "Retard :", "تأخير:", ["du retard", "du pain", "du silence", "du ticket"], 0),
      q("b1mt-q2", "Polite can you:", "Pouvez-vous :", "هل يمكنكم:", ["Pouvez-vous…", "Tu dois…", "Donne…", "Non…"], 0),
      q("b1mt-q3", "Scheduled:", "Prévu :", "مقرر:", ["prévue", "perdue only", "pleut", "parapluie"], 0),
      q("b1mt-q4", "Lost & found:", "Objets :", "مفقودات:", ["objets trouvés", "objets fermés", "objets gares", "objets fièvres"], 0),
      q("b1mt-q5", "I lost:", "Perdu :", "ضاعت:", ["J'ai perdu", "Je suis perdu always as only form", "J'ai gagné only", "Perdu j'ai non"], 0),
    ],
  }),
  U({
    id: "fr-b1-more-story",
    level: "B1",
    order: 38,
    title: L("Telling a story", "Raconter une histoire", "حكي قصة"),
    goal: "goal-b1-more-story",
    intro: L(
      "Link past events with time markers — essential for B1 oral.",
      "Relier des événements passés avec des marqueurs.",
      "اربط أحداثًا ماضية بعلامات زمن — أساسي لشفهي B1."
    ),
    dialogue: [
      "— L'année dernière, j'ai déménagé dans une nouvelle ville.",
      "— Au début, c'était difficile parce que je ne connaissais personne.",
      "— Ensuite, j'ai rencontré des collègues très sympas.",
      "— Un jour, nous avons organisé un dîner ensemble.",
      "— Depuis, je me sens beaucoup mieux.",
      "— Finalement, ce changement m'a appris à être patient.",
    ],
    tip: L(
      "Au début → ensuite → un jour → depuis → finalement.",
      "Chaîne narrative claire.",
      "سلسلة سرد واضحة."
    ),
    vocab: [
      vocab("l'année dernière", "last year", "temps", "العام الماضي", "L'année dernière…"),
      vocab("au début", "at the beginning", "ordre", "في البداية", "Au début…"),
      vocab("ensuite", "then / next", "ordre", "بعدين", "Ensuite…"),
      vocab("depuis", "since then", "temps", "من وقتها", "Depuis, je…"),
      vocab("finalement", "finally", "clôture", "في الآخر", "Finalement…"),
    ],
    exercises: [
      ex("b1ms-e1", "Last year", "L'année dernière", "السنة اللي فاتت", ["l'annee derniere", "l'année dernière", "l annee derniere"]),
      ex("b1ms-e2", "At the beginning", "Au début", "في الأول", ["au debut", "au début"]),
      ex("b1ms-e3", "Then", "Ensuite", "بعدين", ["ensuite"]),
      ex("b1ms-e4", "Since then", "Depuis", "من وقتها", ["depuis"]),
      ex("b1ms-e5", "Finally", "Finalement", "في الآخر", ["finalement"]),
      ex("b1ms-e6", "I moved (house)", "J'ai déménagé", "نقلت سكن", ["j'ai demenage", "j'ai déménagé", "j ai demenage"]),
    ],
    review: "B1 narrative markers for coherent stories.",
    checklist: ["L'année dernière", "Au début", "Ensuite", "Depuis", "Finalement"],
    quiz: [
      q("b1ms-q1", "Last year:", "Année :", "عام:", ["L'année dernière", "L'année prochaine only", "Hier matin non", "Demain"], 0),
      q("b1ms-q2", "At first:", "Début :", "بداية:", ["Au début", "À la fin only", "Jamais", "Interdit"], 0),
      q("b1ms-q3", "Next:", "Ensuite :", "ثم:", ["Ensuite", "Avant always", "Sans", "Contre"], 0),
      q("b1ms-q4", "Since then:", "Depuis :", "منذ:", ["Depuis", "Pendant never alone here", "Pour", "Dans"], 0),
      q("b1ms-q5", "Finally:", "Finalement :", "أخيرًا:", ["Finalement", "Premièrement only", "Silence", "Ticket"], 0),
    ],
  }),
  U({
    id: "fr-b1-more-news",
    level: "B1",
    order: 40,
    title: L("Simple news talk", "Parler de l'actualité", "كلام عن الأخبار"),
    goal: "goal-b1-more-news",
    intro: L(
      "React to a simple news topic without complex jargon.",
      "Réagir à une actu simple.",
      "علّق على خبر بسيط بدون مصطلحات معقدة."
    ),
    dialogue: [
      "— Tu as vu la nouvelle sur le nouveau parc en centre-ville ?",
      "— Oui. À mon avis, c'est une bonne idée.",
      "— Pourquoi ?",
      "— Parce que les familles ont besoin d'espaces verts.",
      "— Certains disent que cela coûtera trop cher.",
      "— Peut-être, mais le bénéfice à long terme est important.",
    ],
    tip: L(
      "Certains disent que… / Peut-être, mais…",
      "Rapport d'opinion + reserve.",
      "نقل رأي + تحفّظ."
    ),
    vocab: [
      vocab("la nouvelle", "the news item", "média", "الخبر", "Tu as vu la nouvelle ?"),
      vocab("espaces verts", "green spaces", "ville", "مساحات خضراء", "Besoin d'espaces verts."),
      vocab("certains disent que", "some people say that", "rapport", "البعض يقول إن", "Certains disent que…"),
      vocab("à long terme", "in the long term", "temps", "على المدى الطويل", "À long terme."),
      vocab("le bénéfice", "the benefit", "avantage", "الفائدة", "Le bénéfice est important."),
    ],
    exercises: [
      ex("b1mn-e1", "Did you see the news?", "Tu as vu la nouvelle ?", "شوفت الخبر؟", ["tu as vu la nouvelle", "tu as vu la nouvelle ?"]),
      ex("b1mn-e2", "In my opinion it's a good idea", "À mon avis, c'est une bonne idée", "رأيي فكرة كويسة", ["a mon avis c'est une bonne idee", "à mon avis, c'est une bonne idée"]),
      ex("b1mn-e3", "Some people say that…", "Certains disent que", "ناس بتقول إن", ["certains disent que"]),
      ex("b1mn-e4", "In the long term", "À long terme", "على المدى الطويل", ["a long terme", "à long terme"]),
      ex("b1mn-e5", "Green spaces", "Espaces verts", "مساحات خضراء", ["espaces verts"]),
      ex("b1mn-e6", "Perhaps, but…", "Peut-être, mais", "ممكن بس", ["peut-etre mais", "peut-être, mais", "peut etre mais"]),
    ],
    review: "B1 light current-affairs conversation.",
    checklist: ["La nouvelle", "À mon avis", "Certains disent que", "À long terme", "Peut-être mais"],
    quiz: [
      q("b1mn-q1", "News item:", "Nouvelle :", "خبر:", ["la nouvelle", "le nouvelle", "une nouvellement", "nouvelles la"], 0),
      q("b1mn-q2", "Some say:", "Certains :", "البعض:", ["Certains disent que", "Personne mange que", "Rien gare que", "Tout silence que"], 0),
      q("b1mn-q3", "Long term:", "Terme :", "طويل:", ["à long terme", "à court pain", "à gare terme", "à fièvre"], 0),
      q("b1mn-q4", "Green spaces:", "Verts :", "خضراء:", ["espaces verts", "espaces rouges only", "espaces tickets", "espaces retards"], 0),
      q("b1mn-q5", "Benefit:", "Bénéfice :", "فائدة:", ["le bénéfice", "la gare", "le retard", "le parapluie"], 0),
    ],
  }),
];
