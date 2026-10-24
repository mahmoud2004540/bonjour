import { l10n as t, type CourseUnit } from "../types";

export const A1_U08: CourseUnit = {
  id: "fr-a1-u08-transports",
  level: "A1",
  order: 8,
  title: t("Getting around", "Se déplacer", "التنقّل"),
  theme: t(
    "Transport, buying a train ticket, timetables",
    "Les transports, acheter un billet de train, les horaires",
    "وسائل النقل، وشراء تذكرة قطار، والمواعيد"
  ),
  canDo: [
    t("I can buy a train or bus ticket.", "Je peux acheter un billet de train ou de bus.", "أستطيع أن أشتري تذكرة قطار أو حافلة."),
    t("I can ask and understand departure and arrival times.", "Je peux demander et comprendre les heures de départ et d'arrivée.", "أستطيع أن أسأل عن مواعيد المغادرة والوصول وأفهمها."),
    t("I can say where I go and how (by train, on foot…).", "Je peux dire où je vais et comment (en train, à pied…).", "أستطيع أن أقول إلى أين أذهب وكيف (بالقطار، سيرًا…)."),
    t("I can ask questions with où, quand, comment, combien.", "Je peux poser des questions avec où, quand, comment, combien.", "أستطيع أن أطرح أسئلة بـoù وquand وcomment وcombien."),
  ],
  context: t(
    "Meriem lives in Lyon. She wants to spend the weekend in Marseille with her cousin. She goes to the ticket office at Lyon Part-Dieu station.",
    "Meriem habite à Lyon. Elle veut passer le week-end à Marseille chez sa cousine. Elle va au guichet de la gare de Lyon Part-Dieu.",
    "تسكن مريم في ليون، وتريد أن تقضي عطلة نهاية الأسبوع في مرسيليا عند ابنة عمّها. فتذهب إلى شبّاك التذاكر في محطة ليون بار-ديو."
  ),
  dialogue: {
    title: t("At the ticket office", "Au guichet", "عند شبّاك التذاكر"),
    setting: t("Lyon Part-Dieu train station", "La gare de Lyon Part-Dieu", "محطة ليون بار-ديو"),
    lines: [
      { speaker: "Meriem", fr: "Bonjour, monsieur. Je voudrais un billet pour Marseille, s'il vous plaît." },
      { speaker: "Agent", fr: "Bonjour. Pour quand ?" },
      { speaker: "Meriem", fr: "Pour samedi matin." },
      { speaker: "Agent", fr: "Un aller simple ou un aller-retour ?" },
      { speaker: "Meriem", fr: "Un aller-retour. Je reviens dimanche soir." },
      { speaker: "Agent", fr: "Alors, samedi, il y a un TGV à 7 h 12 et un autre à 9 h 46." },
      { speaker: "Meriem", fr: "Le train de 9 h 46 arrive à quelle heure à Marseille ?" },
      { speaker: "Agent", fr: "Il arrive à 11 h 31. C'est un train direct." },
      { speaker: "Meriem", fr: "Parfait. Et pour le retour, dimanche ?" },
      { speaker: "Agent", fr: "Vous avez un train à 18 h 20. Il arrive à Lyon à 20 h 05." },
      { speaker: "Meriem", fr: "Très bien. Ça coûte combien ?" },
      { speaker: "Agent", fr: "En seconde classe, quatre-vingt-six euros l'aller-retour. Vous avez une carte de réduction ?" },
      { speaker: "Meriem", fr: "Non, je n'ai pas de carte. Le train part de quelle voie ?" },
      { speaker: "Agent", fr: "La voie est affichée vingt minutes avant le départ. Bon voyage !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u08-c1", prompt: t("Where is Meriem going?", "Où va Meriem ?", "إلى أين تذهب مريم؟"), options: ["À Lyon", "À Marseille", "À Paris"], correctIndex: 1 },
    { kind: "choice", id: "u08-c2", prompt: t("What kind of ticket does she buy?", "Quel billet achète-t-elle ?", "أي تذكرة تشتري؟"), optionsL10n: { en: ["One way", "Return", "First class"], fr: ["Un aller simple", "Un aller-retour", "Un billet de première classe"], ar: ["ذهاب فقط", "ذهاب وإياب", "تذكرة درجة أولى"] }, correctIndex: 1 },
    { kind: "choice", id: "u08-c3", prompt: t("When does the 9:46 train arrive?", "À quelle heure arrive le train de 9 h 46 ?", "متى يصل قطار 9:46؟"), options: ["11 h 31", "13 h 05", "20 h 05"], correctIndex: 0 },
    { kind: "choice", id: "u08-c4", prompt: t("How much is the ticket?", "Combien coûte le billet ?", "كم ثمن التذكرة؟"), options: ["68 €", "86 €", "96 €"], correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("Transport", "Les transports", "وسائل النقل"),
      items: [
        { fr: "le train / le TGV", gender: "m", meaning: t("train / high-speed train", "train ; train à grande vitesse", "القطار / القطار فائق السرعة") },
        { fr: "le bus", gender: "m", meaning: t("bus", "transport en ville", "الحافلة") },
        { fr: "le métro", gender: "m", meaning: t("underground, metro", "train souterrain", "المترو") },
        { fr: "le tramway", gender: "m", meaning: t("tram", "train léger en ville", "الترام") },
        { fr: "la voiture", gender: "f", meaning: t("car", "véhicule personnel", "السيارة") },
        { fr: "le vélo", gender: "m", meaning: t("bike", "bicyclette", "الدرّاجة") },
        { fr: "l'avion", gender: "m", meaning: t("plane", "transport aérien", "الطائرة") },
        { fr: "le taxi", gender: "m", meaning: t("taxi", "voiture avec chauffeur", "سيارة الأجرة") },
      ],
    },
    {
      title: t("At the station", "À la gare", "في المحطة"),
      items: [
        { fr: "le billet", gender: "m", meaning: t("ticket", "titre de transport", "التذكرة") },
        { fr: "un aller simple", gender: "m", meaning: t("a one-way ticket", "billet pour un trajet", "تذكرة ذهاب فقط") },
        { fr: "un aller-retour", gender: "m", meaning: t("a return ticket", "billet aller et retour", "تذكرة ذهاب وإياب") },
        { fr: "le départ / l'arrivée", meaning: t("departure / arrival", "moment où on part / arrive", "المغادرة / الوصول") },
        { fr: "la voie / le quai", gender: "f", meaning: t("track / platform", "où le train s'arrête", "السكة / الرصيف") },
        { fr: "le guichet", gender: "m", meaning: t("ticket office", "où on achète un billet", "شبّاك التذاكر") },
        { fr: "en retard / à l'heure", meaning: t("late / on time", "après l'horaire / à l'horaire", "متأخر / في الموعد") },
        { fr: "changer (de train)", meaning: t("to change (trains)", "prendre un autre train", "يغيّر القطار") },
      ],
    },
  ],
  grammar: [
    {
      id: "u08-g1",
      title: t("Aller, venir, prendre", "Aller, venir, prendre", "الأفعال aller (يذهب) وvenir (يأتي) وprendre (يأخذ)"),
      explanation: t(
        "Three essential irregular verbs. Aller (to go) is followed by à: « Je vais à Marseille ». Venir (to come) is followed by de: « Je viens de Lyon ». Revenir (to come back) works like venir. Prendre (to take) is used for transport: « Je prends le train ».",
        "Trois verbes irréguliers essentiels. Aller est suivi de à : « Je vais à Marseille ». Venir est suivi de de : « Je viens de Lyon ». Revenir se conjugue comme venir. Prendre s'utilise pour les transports : « Je prends le train ».",
        "ثلاثة أفعال شاذة أساسية. الفعل aller (يذهب) يتبعه à: «Je vais à Marseille». والفعل venir (يأتي) يتبعه de: «Je viens de Lyon». والفعل revenir (يعود) يُصرَّف مثل venir. أما prendre (يأخذ) فيُستخدم مع وسائل النقل: «Je prends le train»."
      ),
      table: {
        head: ["", "aller", "venir", "prendre"],
        rows: [
          ["je", "je vais", "je viens", "je prends"],
          ["tu", "tu vas", "tu viens", "tu prends"],
          ["il / elle / on", "il va", "elle vient", "il prend"],
          ["nous", "nous allons", "nous venons", "nous prenons"],
          ["vous", "vous allez", "vous venez", "vous prenez"],
          ["ils / elles", "ils vont", "elles viennent", "ils prennent"],
        ],
      },
      examples: [
        { fr: "Nous allons à Nice en train.", gloss: t("We are going to Nice by train.", "aller à + ville.", "نذهب إلى نيس بالقطار.") },
        { fr: "Ils viennent de Montréal.", gloss: t("They come from Montreal.", "venir de + ville.", "هم من مونتريال.") },
        { fr: "Vous prenez le bus ou le métro ?", gloss: t("Do you take the bus or the metro?", "prendre + transport.", "هل تأخذ الحافلة أم المترو؟") },
      ],
    },
    {
      id: "u08-g2",
      title: t("Prepositions with places and transport", "Les prépositions de lieu et de transport", "حروف الجر مع الأماكن ووسائل النقل"),
      explanation: t(
        "Cities: à Paris / de Paris. Feminine countries (most end in -e): en France / de France. Masculine countries: au Maroc / du Maroc. Plural countries: aux États-Unis / des États-Unis. Transport: « en » when you are inside (en train, en bus, en voiture, en avion, en métro) and « à » when you are on it or walking (à pied, à vélo, à moto).",
        "Villes : à Paris / de Paris. Pays féminins (la plupart finissent par -e) : en France / de France. Pays masculins : au Maroc / du Maroc. Pays au pluriel : aux États-Unis / des États-Unis. Transports : « en » quand on est à l'intérieur (en train, en bus, en voiture, en avion, en métro) et « à » quand on est dessus ou à pied (à pied, à vélo, à moto).",
        "مع المدن: à Paris / de Paris. ومع البلدان المؤنّثة (ومعظمها ينتهي بـ-e): en France / de France. ومع البلدان المذكّرة: au Maroc / du Maroc. ومع البلدان بصيغة الجمع: aux États-Unis / des États-Unis. أما وسائل النقل فنستخدم «en» عندما نكون بداخلها (en train، en bus، en voiture، en avion، en métro)، و«à» عندما نكون فوقها أو نمشي (à pied، à vélo، à moto)."
      ),
      table: {
        head: ["", "aller (où ?)", "venir (d'où ?)"],
        rows: [
          ["ville", "à Lyon", "de Lyon"],
          ["pays féminin", "en Tunisie", "de Tunisie"],
          ["pays masculin", "au Liban", "du Liban"],
          ["pays pluriel", "aux Pays-Bas", "des Pays-Bas"],
        ],
      },
      examples: [
        { fr: "Elle habite en Égypte, mais elle vient du Maroc.", gloss: t("She lives in Egypt but comes from Morocco.", "en + féminin ; du + masculin.", "تسكن في مصر لكنها من المغرب.") },
        { fr: "Je vais au travail à vélo.", gloss: t("I go to work by bike.", "à vélo.", "أذهب إلى العمل بالدرّاجة.") },
      ],
      watchOut: t(
        "Some countries ending in -e are masculine: le Mexique, le Cambodge → au Mexique. Countries starting with a vowel use « en »: en Irak, en Iran.",
        "Quelques pays en -e sont masculins : le Mexique, le Cambodge → au Mexique. Devant un pays qui commence par une voyelle, on dit « en » : en Irak, en Iran.",
        "بعض البلدان المنتهية بـ-e مذكّرة: le Mexique وle Cambodge ← au Mexique. ومع البلدان التي تبدأ بحرف متحرّك نقول «en»: en Irak، en Iran."
      ),
    },
    {
      id: "u08-g3",
      title: t("Question words", "Les mots interrogatifs", "أدوات الاستفهام"),
      explanation: t(
        "Où ? (where), Quand ? (when), À quelle heure ? (at what time), Comment ? (how), Combien ? (how much), Pourquoi ? (why) — and the answer « Parce que… » (because). In everyday speech, the question word often goes at the end: « Tu pars quand ? ». In a more formal style: « Quand partez-vous ? ».",
        "Où ?, Quand ?, À quelle heure ?, Comment ?, Combien ?, Pourquoi ? — et la réponse « Parce que… ». À l'oral, le mot interrogatif se place souvent à la fin : « Tu pars quand ? ». Dans un style plus soutenu : « Quand partez-vous ? ».",
        "Où ? (أين)، Quand ? (متى)، À quelle heure ? (في أي ساعة)، Comment ? (كيف)، Combien ? (كم)، Pourquoi ? (لماذا) — والجواب «Parce que…» (لأن). وفي الكلام اليومي تأتي أداة الاستفهام غالبًا في آخر الجملة: «Tu pars quand ?». أما في الأسلوب الأكثر رسمية: «Quand partez-vous ?»."
      ),
      examples: [
        { fr: "Le train arrive à quelle heure ?", gloss: t("What time does the train arrive?", "Question à l'oral.", "متى يصل القطار؟") },
        { fr: "Comment est-ce que tu vas à l'université ?", gloss: t("How do you get to university?", "comment + est-ce que.", "كيف تذهب إلى الجامعة؟") },
        { fr: "Pourquoi tu prends le bus ? — Parce que c'est moins cher.", gloss: t("Why do you take the bus? — Because it's cheaper.", "pourquoi / parce que.", "لماذا تأخذ الحافلة؟ — لأنها أرخص.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Liaison", "La liaison", "الوصل (liaison)"),
    explanation: t(
      "A silent final consonant is pronounced when the next word starts with a vowel or silent h. After vous, nous, ils, elles, les, des, en, the s or n links with a [z] or [n] sound: vous allez [vuzale], ils arrivent [ilzaʁiv], en avion [ɑ̃navjɔ̃], deux heures [døzœʁ]. Never make a liaison after « et »: « Lyon et | Annecy ».",
      "Une consonne finale muette se prononce quand le mot suivant commence par une voyelle ou un h muet. Après vous, nous, ils, elles, les, des, en, on entend [z] ou [n] : vous allez [vuzale], ils arrivent [ilzaʁiv], en avion [ɑ̃navjɔ̃], deux heures [døzœʁ]. Jamais de liaison après « et » : « Lyon et | Annecy ».",
      "يُنطق الحرف الساكن الأخير الصامت عندما تبدأ الكلمة التالية بحرف متحرّك أو h صامتة. فبعد vous وnous وils وelles وles وdes وen نسمع [z] أو [n]: vous allez [vuzale]، ils arrivent [ilzaʁiv]، en avion [ɑ̃navjɔ̃]، deux heures [døzœʁ]. ولا وصل أبدًا بعد «et»: «Lyon et | Annecy»."
    ),
    examples: ["vous allez", "nous arrivons", "ils arrivent à huit heures", "en avion", "les enfants", "deux heures"],
  },
  culture: {
    title: t("Travelling by train in France", "Voyager en train en France", "السفر بالقطار في فرنسا"),
    body: t(
      "France has a large rail network run mainly by the SNCF. High-speed trains (TGV, branded « TGV INOUI » and the low-cost « Ouigo ») link the big cities: Lyon–Marseille takes under two hours. Prices change with the date and time, so it is cheaper to book early, online or in the app. Discount cards exist for young people, seniors and frequent travellers. In big stations, the platform number appears on the departure board about 20 minutes before the train leaves.",
      "La France a un grand réseau ferroviaire, géré surtout par la SNCF. Les trains à grande vitesse (TGV INOUI et Ouigo, à bas prix) relient les grandes villes : Lyon–Marseille prend moins de deux heures. Les prix varient selon la date et l'heure : il est moins cher de réserver tôt, en ligne ou sur l'application. Il existe des cartes de réduction pour les jeunes, les seniors et les voyageurs fréquents. Dans les grandes gares, la voie s'affiche sur le tableau des départs environ 20 minutes avant le départ.",
      "تمتلك فرنسا شبكة سكك حديدية كبيرة تديرها أساسًا شركة SNCF. وتربط القطارات فائقة السرعة (TGV INOUI وقطارات Ouigo منخفضة التكلفة) بين المدن الكبرى: فالرحلة بين ليون ومرسيليا تستغرق أقل من ساعتين. وتتغيّر الأسعار حسب التاريخ والساعة، لذا يكون الحجز المبكر عبر الإنترنت أو التطبيق أرخص. وتوجد بطاقات تخفيض للشباب وكبار السن والمسافرين الدائمين. وفي المحطات الكبيرة يظهر رقم السكة على لوحة المغادرة قبل نحو 20 دقيقة من انطلاق القطار."
    ),
  },
  practice: [
    { kind: "fill", id: "u08-p1", prompt: t("Conjugate aller.", "Conjuguez aller.", "صرّف الفعل aller."), sentence: "Nous ___ à Bordeaux ce week-end.", answers: ["allons"] },
    { kind: "fill", id: "u08-p2", prompt: t("Conjugate venir.", "Conjuguez venir.", "صرّف الفعل venir."), sentence: "Ils ___ de Tunis.", answers: ["viennent"] },
    { kind: "fill", id: "u08-p3", prompt: t("Conjugate prendre.", "Conjuguez prendre.", "صرّف الفعل prendre."), sentence: "Vous ___ le métro ?", answers: ["prenez"] },
    { kind: "fill", id: "u08-p4", prompt: t("Preposition (country).", "Préposition (pays).", "حرف الجر (بلد)."), sentence: "Elle travaille ___ Canada.", answers: ["au"] },
    { kind: "fill", id: "u08-p5", prompt: t("Preposition (country).", "Préposition (pays).", "حرف الجر (بلد)."), sentence: "Je vais ___ Italie.", answers: ["en"] },
    { kind: "fill", id: "u08-p6", prompt: t("Preposition (from a masculine country).", "Préposition (venir d'un pays masculin).", "حرف الجر (القدوم من بلد مذكّر)."), sentence: "Il vient ___ Liban.", answers: ["du"] },
    { kind: "fill", id: "u08-p7", prompt: t("Preposition (transport).", "Préposition (transport).", "حرف الجر (وسيلة نقل)."), sentence: "Je vais à l'école ___ pied.", answers: ["à"] },
    { kind: "choice", id: "u08-p8", prompt: t("Which question asks for the time?", "Quelle question demande l'heure ?", "أي سؤال يسأل عن الساعة؟"), options: ["Le train part quand ?", "Le train part à quelle heure ?", "Le train part d'où ?"], correctIndex: 1 },
    { kind: "choice", id: "u08-p9", prompt: t("You go and come back. You ask for:", "Vous partez et vous revenez. Vous demandez :", "ستذهب وتعود. تطلب:"), options: ["un aller simple", "un aller-retour", "un retour simple"], correctIndex: 1 },
    { kind: "order", id: "u08-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je voudrais un billet pour Marseille." },
    { kind: "order", id: "u08-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Le train arrive à quelle heure ?" },
  ],
  production: {
    prompt: t(
      "Write a message to a friend about a trip you are planning: where you go, when, how (transport), the departure and arrival times, when you come back.",
      "Écrivez un message à un ami sur un voyage que vous préparez : où vous allez, quand, comment (transport), les heures de départ et d'arrivée, quand vous revenez.",
      "اكتب رسالة إلى صديق عن رحلة تخطّط لها: إلى أين تذهب، ومتى، وكيف (وسيلة النقل)، ومواعيد المغادرة والوصول، ومتى تعود."
    ),
    model: "Salut Léa ! Samedi, je vais à Bruxelles en train. Je prends l'Eurostar à 8 h 25 à Paris et j'arrive à Bruxelles à 9 h 47. Ensuite, je vais chez mon cousin en tramway. Je reviens dimanche soir. Tu viens avec moi ?",
    checklist: [
      t("I use aller, venir or revenir correctly.", "J'utilise correctement aller, venir ou revenir.", "استخدمت aller أو venir أو revenir بشكل صحيح."),
      t("I use the right preposition with the city or country.", "J'utilise la bonne préposition avec la ville ou le pays.", "استخدمت حرف الجر المناسب مع المدينة أو البلد."),
      t("I use « en » or « à » with the transport.", "J'utilise « en » ou « à » avec le transport.", "استخدمت «en» أو «à» مع وسيلة النقل."),
      t("I give at least two times.", "Je donne au moins deux horaires.", "ذكرت موعدين على الأقل."),
    ],
  },
  task: {
    title: t("Plan a real journey", "Préparer un vrai trajet", "خطّط لرحلة حقيقية"),
    brief: t(
      "On a French transport website or app (SNCF Connect, a city bus network…), find a real journey between two French-speaking cities. Note departure, arrival, price and changes, then present the journey aloud in French in 30 seconds.",
      "Sur un site ou une application de transport français (SNCF Connect, réseau de bus d'une ville…), trouvez un vrai trajet entre deux villes francophones. Notez le départ, l'arrivée, le prix et les correspondances, puis présentez le trajet à voix haute en français en 30 secondes.",
      "على موقع أو تطبيق نقل فرنسي (SNCF Connect أو شبكة حافلات مدينة ما…) ابحث عن رحلة حقيقية بين مدينتين ناطقتين بالفرنسية. دوّن موعد المغادرة والوصول والسعر والتغييرات، ثم قدّم الرحلة بصوت عالٍ بالفرنسية في 30 ثانية."
    ),
    checklist: [
      t("I found a real timetable.", "J'ai trouvé un vrai horaire.", "وجدت جدول مواعيد حقيقيًا."),
      t("I said the times using the 24-hour clock.", "J'ai dit les horaires sur 24 heures.", "ذكرت المواعيد بنظام 24 ساعة."),
      t("I said the price in euros.", "J'ai dit le prix en euros.", "ذكرت السعر باليورو."),
    ],
  },
  test: [
    { kind: "choice", id: "u08-t1", prompt: t("« Tu ___ au cinéma ce soir ? »", "« Tu ___ au cinéma ce soir ? »", "«Tu ___ au cinéma ce soir ?»"), options: ["va", "vas", "allez"], correctIndex: 1 },
    { kind: "choice", id: "u08-t2", prompt: t("« Elles ___ de Belgique. »", "« Elles ___ de Belgique. »", "«Elles ___ de Belgique.»"), options: ["viennent", "venent", "vient"], correctIndex: 0 },
    { kind: "choice", id: "u08-t3", prompt: t("« Nous ___ l'avion. »", "« Nous ___ l'avion. »", "«Nous ___ l'avion.»"), options: ["prendons", "prenons", "prennons"], correctIndex: 1 },
    { kind: "choice", id: "u08-t4", prompt: t("« Il habite ___ États-Unis. »", "« Il habite ___ États-Unis. »", "«Il habite ___ États-Unis.»"), options: ["en", "au", "aux"], correctIndex: 2 },
    { kind: "choice", id: "u08-t5", prompt: t("« Je viens ___ France. »", "« Je viens ___ France. »", "«Je viens ___ France.»"), options: ["de", "du", "en"], correctIndex: 0 },
    { kind: "choice", id: "u08-t6", prompt: t("« Elle va au travail ___ vélo. »", "« Elle va au travail ___ vélo. »", "«Elle va au travail ___ vélo.»"), options: ["en", "à", "au"], correctIndex: 1 },
    { kind: "choice", id: "u08-t7", prompt: t("« ___ tu prends le bus ? — Parce que c'est rapide. »", "« ___ tu prends le bus ? — Parce que c'est rapide. »", "«___ tu prends le bus ? — Parce que c'est rapide.»"), options: ["Où", "Pourquoi", "Combien"], correctIndex: 1 },
    { kind: "choice", id: "u08-t8", prompt: t("A one-way ticket is:", "Un billet pour un seul trajet :", "تذكرة الذهاب فقط هي:"), options: ["un aller-retour", "un aller simple", "un départ"], correctIndex: 1 },
    { kind: "choice", id: "u08-t9", prompt: t("In which phrase do you hear a [z] liaison?", "Dans quelle expression entend-on une liaison en [z] ?", "في أي عبارة نسمع وصلًا بصوت [z]؟"), options: ["vous allez", "Lyon et Annecy", "le train"], correctIndex: 0 },
    { kind: "choice", id: "u08-t10", prompt: t("Train prices in France are usually lower when you…", "En France, les billets de train sont souvent moins chers si on…", "تكون أسعار القطارات في فرنسا عادةً أقل عندما…"), optionsL10n: { en: ["book early", "buy just before departure", "pay in cash"], fr: ["réserve tôt", "achète juste avant le départ", "paie en espèces"], ar: ["تحجز مبكرًا", "تشتري قبل الانطلاق مباشرة", "تدفع نقدًا"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-buy-ticket"],
  replaces: ["fr-a1-transport-unit", "fr-a1-more-transport"],
};
