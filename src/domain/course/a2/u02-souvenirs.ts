import { l10n as t, type CourseUnit } from "../types";

export const A2_U02: CourseUnit = {
  id: "fr-a2-u02-souvenirs",
  level: "A2",
  order: 2,
  title: t("Childhood memories", "Souvenirs d'enfance", "ذكريات الطفولة"),
  theme: t(
    "Describing the past, habits and feelings",
    "Décrire le passé, les habitudes et les sentiments",
    "وصف الماضي والعادات والمشاعر"
  ),
  canDo: [
    t("I can describe a place, a person or a situation in the past.", "Je peux décrire un lieu, une personne ou une situation dans le passé.", "أستطيع أن أصف مكانًا أو شخصًا أو موقفًا في الماضي."),
    t("I can talk about my childhood habits.", "Je peux parler de mes habitudes d'enfance.", "أستطيع أن أتحدث عن عاداتي في الطفولة."),
    t("I can combine background (imparfait) and events (passé composé).", "Je peux combiner le décor (imparfait) et les événements (passé composé).", "أستطيع أن أجمع بين وصف الخلفية (imparfait) والأحداث (passé composé)."),
    t("I can express simple feelings about the past.", "Je peux exprimer des sentiments simples sur le passé.", "أستطيع أن أعبّر عن مشاعر بسيطة تجاه الماضي."),
  ],
  context: t(
    "For a school project on « life in the past », Léa interviews her grandfather Ahmed about his childhood in Algeria and his arrival in France.",
    "Pour un exposé sur « la vie autrefois », Léa interroge son grand-père Ahmed sur son enfance en Algérie et son arrivée en France.",
    "لإعداد عرض مدرسي عن «الحياة في الماضي»، تحاور ليا جدّها أحمد عن طفولته في الجزائر ووصوله إلى فرنسا."
  ),
  dialogue: {
    title: t("When Grandpa was little", "Quand Papi était petit", "عندما كان جدّي صغيرًا"),
    setting: t("At the grandparents' home in Lyon", "Chez les grands-parents, à Lyon", "في بيت الجدّين بمدينة ليون"),
    lines: [
      { speaker: "Léa", fr: "Papi, pour mon exposé, je dois parler de la vie autrefois. Quand tu étais petit, tu habitais où ?" },
      { speaker: "Ahmed", fr: "J'habitais dans un petit village près de Constantine, en Algérie. Notre maison était simple, mais il y avait un grand jardin." },
      { speaker: "Léa", fr: "Et tu allais à l'école à pied ?" },
      { speaker: "Ahmed", fr: "Oui, tous les matins, je marchais trois kilomètres avec mes frères. Il n'y avait pas de bus !" },
      { speaker: "Léa", fr: "Trois kilomètres ! Et qu'est-ce que vous faisiez après l'école ?" },
      { speaker: "Ahmed", fr: "On aidait nos parents, puis on jouait au foot dans la rue jusqu'au soir. On n'avait pas de télévision." },
      { speaker: "Léa", fr: "Tu étais un bon élève ?" },
      { speaker: "Ahmed", fr: "Plutôt, oui. J'adorais les mathématiques, mais je détestais la poésie !" },
      { speaker: "Léa", fr: "Et quand est-ce que tu es arrivé en France ?" },
      { speaker: "Ahmed", fr: "En 1972. J'avais vingt ans. Un jour, mon cousin m'a écrit : il y avait du travail à Lyon. Alors, je suis parti." },
      { speaker: "Léa", fr: "Tu étais triste ?" },
      { speaker: "Ahmed", fr: "Un peu. Ma famille me manquait beaucoup. Mais j'étais aussi très curieux… et j'ai rencontré ta grand-mère l'année suivante !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u02-c1", prompt: t("Where did Ahmed live as a child?", "Où Ahmed habitait-il enfant ?", "أين كان يسكن أحمد في طفولته؟"), optionsL10n: { en: ["In Lyon", "In a village near Constantine", "In Algiers"], fr: ["À Lyon", "Dans un village près de Constantine", "À Alger"], ar: ["في ليون", "في قرية قرب قسنطينة", "في الجزائر العاصمة"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u02-c2", prompt: t("How did he go to school?", "Comment allait-il à l'école ?", "كيف كان يذهب إلى المدرسة؟"), optionsL10n: { en: ["By bus", "On foot", "By bike"], fr: ["En bus", "À pied", "À vélo"], ar: ["بالحافلة", "سيرًا على الأقدام", "بالدرّاجة"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u02-c3", prompt: t("Which subject did he hate?", "Quelle matière détestait-il ?", "أي مادة كان يكرهها؟"), optionsL10n: { en: ["Maths", "Poetry", "Sport"], fr: ["Les mathématiques", "La poésie", "Le sport"], ar: ["الرياضيات", "الشعر", "الرياضة البدنية"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u02-c4", prompt: t("Why did he go to Lyon?", "Pourquoi est-il parti à Lyon ?", "لماذا ذهب إلى ليون؟"), optionsL10n: { en: ["To study", "There was work there", "To meet his wife"], fr: ["Pour étudier", "Il y avait du travail", "Pour retrouver sa femme"], ar: ["للدراسة", "لأنه كان هناك عمل", "للقاء زوجته"] }, correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("Childhood and school", "L'enfance et l'école", "الطفولة والمدرسة"),
      items: [
        { fr: "l'enfance", gender: "f", meaning: t("childhood", "période où l'on est enfant", "الطفولة") },
        { fr: "autrefois / avant", meaning: t("in the past / before", "dans le passé", "في الماضي / من قبل") },
        { fr: "le village", gender: "m", meaning: t("village", "petite commune à la campagne", "القرية") },
        { fr: "l'élève", gender: "m/f", meaning: t("pupil", "enfant qui va à l'école", "التلميذ / التلميذة") },
        { fr: "la matière", gender: "f", meaning: t("school subject", "discipline enseignée", "المادة الدراسية") },
        { fr: "le jouet", gender: "m", meaning: t("toy", "objet pour jouer", "اللعبة") },
        { fr: "jouer dans la rue", meaning: t("to play in the street", "s'amuser dehors", "يلعب في الشارع") },
        { fr: "aider ses parents", meaning: t("to help one's parents", "rendre service à la famille", "يساعد والديه") },
      ],
    },
    {
      title: t("Feelings", "Les sentiments", "المشاعر"),
      items: [
        { fr: "content / contente", meaning: t("happy, pleased", "satisfait", "مسرور / مسرورة") },
        { fr: "triste", meaning: t("sad", "qui a du chagrin", "حزين / حزينة") },
        { fr: "fier / fière", meaning: t("proud", "satisfait de soi ou de quelqu'un", "فخور / فخورة") },
        { fr: "curieux / curieuse", meaning: t("curious", "qui veut découvrir", "فضولي / فضولية") },
        { fr: "avoir peur (de)", meaning: t("to be afraid (of)", "craindre", "يخاف (من)") },
        { fr: "manquer à quelqu'un", meaning: t("to be missed by someone", "« Ma famille me manque » = je regrette l'absence de ma famille", "يشتاق إليه أحد («Ma famille me manque» = أشتاق إلى عائلتي)") },
        { fr: "un souvenir", gender: "m", meaning: t("a memory", "image du passé gardée en mémoire", "ذكرى") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u02-g1",
      title: t("Forming the imparfait", "La formation de l'imparfait", "تكوين الماضي الناقص (imparfait)"),
      explanation: t(
        "Take the « nous » form of the present, remove -ons, and add -ais, -ais, -ait, -ions, -iez, -aient. Nous parlons → je parlais; nous faisons → je faisais; nous avons → j'avais. Only one exception: être → j'étais. Verbs in -ger and -cer keep the sound: je mangeais, je commençais.",
        "On prend la forme « nous » du présent, on enlève -ons et on ajoute -ais, -ais, -ait, -ions, -iez, -aient. Nous parlons → je parlais ; nous faisons → je faisais ; nous avons → j'avais. Une seule exception : être → j'étais. Les verbes en -ger et -cer gardent le son : je mangeais, je commençais.",
        "نأخذ صيغة «nous» في المضارع، ونحذف -ons، ونضيف -ais و-ais و-ait و-ions و-iez و-aient. nous parlons ← je parlais، وnous faisons ← je faisais، وnous avons ← j'avais. والاستثناء الوحيد: être ← j'étais. وتحافظ الأفعال المنتهية بـ-ger و-cer على النطق: je mangeais، je commençais."
      ),
      table: {
        head: ["", "habiter", "faire", "être"],
        rows: [
          ["je / j'", "habitais", "faisais", "étais"],
          ["tu", "habitais", "faisais", "étais"],
          ["il / elle / on", "habitait", "faisait", "était"],
          ["nous", "habitions", "faisions", "étions"],
          ["vous", "habitiez", "faisiez", "étiez"],
          ["ils / elles", "habitaient", "faisaient", "étaient"],
        ],
      },
      examples: [
        { fr: "Quand j'étais petite, j'avais un chat.", gloss: t("When I was little, I had a cat.", "être, avoir.", "عندما كنت صغيرة كان عندي قطّ.") },
        { fr: "Nous allions à la plage tous les étés.", gloss: t("We used to go to the beach every summer.", "aller → allions.", "كنا نذهب إلى الشاطئ كل صيف.") },
      ],
    },
    {
      id: "a2u02-g2",
      title: t("Imparfait or passé composé?", "Imparfait ou passé composé ?", "الماضي الناقص أم الماضي المركّب؟"),
      explanation: t(
        "The imparfait describes the background: places, people, weather, feelings (« La maison était simple »), and repeated habits (« Tous les matins, je marchais »). The passé composé tells the events, completed actions that move the story forward (« Un jour, mon cousin m'a écrit », « je suis parti »). Keywords: tous les jours, d'habitude, souvent → imparfait; un jour, soudain, en 1972 → passé composé.",
        "L'imparfait décrit le décor : lieux, personnes, météo, sentiments (« La maison était simple »), et les habitudes répétées (« Tous les matins, je marchais »). Le passé composé raconte les événements, les actions terminées qui font avancer l'histoire (« Un jour, mon cousin m'a écrit », « je suis parti »). Mots-clés : tous les jours, d'habitude, souvent → imparfait ; un jour, soudain, en 1972 → passé composé.",
        "يصف الماضي الناقص (imparfait) الخلفية: الأماكن والأشخاص والطقس والمشاعر («La maison était simple»)، والعادات المتكرّرة («Tous les matins, je marchais»). أما الماضي المركّب (passé composé) فيروي الأحداث، أي الأفعال المنتهية التي تدفع القصة إلى الأمام («Un jour, mon cousin m'a écrit»، «je suis parti»). كلمات دالّة: tous les jours وd'habitude وsouvent ← imparfait؛ وun jour وsoudain وen 1972 ← passé composé."
      ),
      examples: [
        { fr: "Il faisait beau et nous jouions dans le jardin quand mon père est arrivé.", gloss: t("The weather was nice and we were playing in the garden when my father arrived.", "Décor + événement.", "كان الجو جميلًا وكنا نلعب في الحديقة عندما وصل أبي.") },
        { fr: "D'habitude, je prenais le bus, mais ce jour-là, j'ai pris un taxi.", gloss: t("Usually I took the bus, but that day I took a taxi.", "Habitude / action unique.", "عادةً كنت آخذ الحافلة، لكن في ذلك اليوم أخذت سيارة أجرة.") },
      ],
      watchOut: t(
        "Don't translate word by word: « I was born » is « je suis né(e) » (an event), not « j'étais né ».",
        "Ne traduisez pas mot à mot : « I was born » se dit « je suis né(e) » (un événement), pas « j'étais né ».",
        "لا تترجم كلمة بكلمة: «وُلدت» تُقال «je suis né(e)» (حدث)، وليس «j'étais né»."
      ),
    },
    {
      id: "a2u02-g3",
      title: t("Avant / maintenant, and « manquer à »", "Avant / maintenant, et « manquer à »", "avant / maintenant، والفعل «manquer à»"),
      explanation: t(
        "To compare then and now: « Avant, il n'y avait pas de bus ; maintenant, il y en a un toutes les heures. » « Manquer à » works backwards compared with English « to miss »: the thing missed is the subject. « Ma famille me manque » = I miss my family; « Tu me manques » = I miss you; « Mes amis lui manquent » = he misses his friends.",
        "Pour comparer hier et aujourd'hui : « Avant, il n'y avait pas de bus ; maintenant, il y en a un toutes les heures. » « Manquer à » fonctionne à l'envers par rapport à l'anglais « to miss » : la chose qui manque est le sujet. « Ma famille me manque » ; « Tu me manques » ; « Mes amis lui manquent ».",
        "للمقارنة بين الماضي والحاضر: «Avant, il n'y avait pas de bus ; maintenant, il y en a un toutes les heures.» أما «manquer à» فتعمل بشكل معكوس: الشيء الذي نشتاق إليه هو الفاعل. «Ma famille me manque» = أشتاق إلى عائلتي، و«Tu me manques» = أشتاق إليك، و«Mes amis lui manquent» = يشتاق إلى أصدقائه."
      ),
      examples: [
        { fr: "Avant, j'habitais à la campagne. Maintenant, j'habite en ville.", gloss: t("Before, I lived in the countryside. Now I live in town.", "Avant / maintenant.", "في الماضي كنت أسكن في الريف، أما الآن فأسكن في المدينة.") },
        { fr: "Le soleil de Marrakech me manque.", gloss: t("I miss the sun of Marrakech.", "Sujet = le soleil.", "أشتاق إلى شمس مراكش.") },
      ],
    },
  ],
  pronunciation: {
    title: t("« Je parlais » [ɛ] or « j'ai parlé » [e]?", "« Je parlais » [ɛ] ou « j'ai parlé » [e] ?", "«je parlais» [ɛ] أم «j'ai parlé» [e]؟"),
    explanation: t(
      "The imparfait endings -ais, -ait, -aient all sound [ɛ] (open, like « mère »). The passé composé ends in [e] (closed, like « été »), and starts with « j'ai ». Compare: « je parlais » [ʒəpaʁlɛ] / « j'ai parlé » [ʒepaʁle]. In fast speech, the beginning — « je » or « j'ai » — is often the clearest clue.",
      "Les terminaisons de l'imparfait -ais, -ait, -aient se prononcent toutes [ɛ] (ouvert, comme « mère »). Le passé composé se termine par [e] (fermé, comme « été ») et commence par « j'ai ». Comparez : « je parlais » [ʒəpaʁlɛ] / « j'ai parlé » [ʒepaʁle]. À l'oral rapide, le début — « je » ou « j'ai » — est souvent l'indice le plus clair.",
      "نهايات الماضي الناقص -ais و-ait و-aient كلها تُنطق [ɛ] (مفتوح، كما في «mère»). أما الماضي المركّب فينتهي بـ[e] (مغلق، كما في «été») ويبدأ بـ«j'ai». قارن: «je parlais» [ʒəpaʁlɛ] و«j'ai parlé» [ʒepaʁle]. وفي الكلام السريع تكون البداية — «je» أو «j'ai» — غالبًا هي الدليل الأوضح."
    ),
    examples: ["je parlais — j'ai parlé", "je jouais — j'ai joué", "il habitait", "ils aimaient", "Quand j'étais petit, je jouais dehors."],
  },
  culture: {
    title: t("Families with roots elsewhere", "Des familles venues d'ailleurs", "عائلات ذات جذور في أماكن أخرى"),
    body: t(
      "During the « Trente Glorieuses » (about 1945–1975), the decades of strong economic growth after the Second World War, France recruited many workers from abroad — from Algeria, Morocco, Tunisia, Portugal, Italy, Spain and elsewhere. Today many French families have grandparents who arrived in those years, and their stories are part of French history. The Musée national de l'histoire de l'immigration in Paris tells these journeys.",
      "Pendant les « Trente Glorieuses » (environ 1945–1975), les décennies de forte croissance après la Seconde Guerre mondiale, la France a recruté de nombreux travailleurs étrangers — d'Algérie, du Maroc, de Tunisie, du Portugal, d'Italie, d'Espagne et d'ailleurs. Aujourd'hui, beaucoup de familles françaises ont des grands-parents arrivés à cette époque, et leurs histoires font partie de l'histoire de France. Le Musée national de l'histoire de l'immigration, à Paris, raconte ces parcours.",
      "خلال «الثلاثين المجيدة» («Trente Glorieuses»، نحو 1945–1975)، وهي عقود النمو الاقتصادي القوي بعد الحرب العالمية الثانية، استقدمت فرنسا كثيرًا من العمّال الأجانب — من الجزائر والمغرب وتونس والبرتغال وإيطاليا وإسبانيا وغيرها. واليوم لدى كثير من العائلات الفرنسية أجداد وصلوا في تلك السنوات، وقصصهم جزء من تاريخ فرنسا. ويروي المتحف الوطني لتاريخ الهجرة في باريس هذه المسارات."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u02-p1", prompt: t("Imparfait of habiter.", "Imparfait d'habiter.", "الماضي الناقص من habiter."), sentence: "Nous ___ à la campagne.", answers: ["habitions"] },
    { kind: "fill", id: "a2u02-p2", prompt: t("Imparfait of être.", "Imparfait d'être.", "الماضي الناقص من être."), sentence: "Tu ___ un bon élève ?", answers: ["étais"] },
    { kind: "fill", id: "a2u02-p3", prompt: t("Imparfait of faire.", "Imparfait de faire.", "الماضي الناقص من faire."), sentence: "Qu'est-ce que vous ___ le dimanche ?", answers: ["faisiez"] },
    { kind: "fill", id: "a2u02-p4", prompt: t("Imparfait of manger (watch the spelling).", "Imparfait de manger (attention à l'orthographe).", "الماضي الناقص من manger (انتبه للإملاء)."), sentence: "Je ___ chez ma grand-mère le mercredi.", answers: ["mangeais"] },
    { kind: "fill", id: "a2u02-p5", prompt: t("Imparfait of avoir.", "Imparfait d'avoir.", "الماضي الناقص من avoir."), sentence: "Ils ___ une grande maison.", answers: ["avaient"] },
    { kind: "choice", id: "a2u02-p6", prompt: t("Habit or event? « Tous les étés, nous ___ en Bretagne. »", "Habitude ou événement ? « Tous les étés, nous ___ en Bretagne. »", "عادة أم حدث؟ «Tous les étés, nous ___ en Bretagne.»"), options: ["sommes allés", "allions", "allons aller"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-p7", prompt: t("« Il pleuvait quand l'avion ___ . »", "« Il pleuvait quand l'avion ___ . »", "«Il pleuvait quand l'avion ___ .»"), options: ["atterrissait", "a atterri", "atterrit"], correctIndex: 1, explanation: t("The landing is the event.", "L'atterrissage est l'événement.", "الهبوط هو الحدث.") },
    { kind: "choice", id: "a2u02-p8", prompt: t("« I miss my friends » in French:", "« Mes amis sont loin et je suis triste » :", "«أشتاق إلى أصدقائي» بالفرنسية:"), options: ["Je manque mes amis.", "Mes amis me manquent.", "Mes amis manquent à moi."], correctIndex: 1 },
    { kind: "choice", id: "a2u02-p9", prompt: t("« I was born in 1990 »:", "Naissance en 1990 :", "«وُلدت عام 1990»:"), options: ["J'étais né en 1990.", "Je suis né en 1990.", "J'ai né en 1990."], correctIndex: 1 },
    { kind: "order", id: "a2u02-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quand j'étais petit, je jouais dans la rue." },
    { kind: "order", id: "a2u02-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Ma famille me manquait beaucoup." },
  ],
  production: {
    prompt: t(
      "Write a short text (80–100 words) about a childhood memory: describe the place, the people and your habits (imparfait), then tell one thing that happened one day (passé composé). Say how you felt.",
      "Écrivez un court texte (80 à 100 mots) sur un souvenir d'enfance : décrivez le lieu, les personnes et vos habitudes (imparfait), puis racontez un événement qui s'est passé un jour (passé composé). Dites ce que vous avez ressenti.",
      "اكتب نصًا قصيرًا (80 إلى 100 كلمة) عن ذكرى من طفولتك: صِف المكان والأشخاص وعاداتك (imparfait)، ثم احكِ حدثًا وقع في يوم ما (passé composé). وقل بماذا شعرت."
    ),
    model: "Quand j'étais petite, j'habitais à Alexandrie, près de la mer. Notre appartement était petit mais très lumineux. Le vendredi, toute la famille déjeunait chez ma grand-mère : elle préparait toujours du poisson et nous jouions sur le balcon. Un jour, mon frère a trouvé un chaton dans la rue et il l'a apporté à la maison. Ma mère n'était pas contente, mais finalement le chat est resté avec nous pendant quinze ans ! Aujourd'hui, ces vendredis me manquent beaucoup.",
    checklist: [
      t("The description and habits are in the imparfait.", "La description et les habitudes sont à l'imparfait.", "الوصف والعادات بصيغة الماضي الناقص."),
      t("The event of « un jour » is in the passé composé.", "L'événement d'« un jour » est au passé composé.", "حدث «un jour» بصيغة الماضي المركّب."),
      t("I express at least one feeling.", "J'exprime au moins un sentiment.", "عبّرت عن شعور واحد على الأقل."),
      t("My imparfait endings are correct (-ais, -ait, -ions, -aient).", "Mes terminaisons d'imparfait sont correctes (-ais, -ait, -ions, -aient).", "نهايات الماضي الناقص عندي صحيحة (-ais، -ait، -ions، -aient)."),
    ],
  },
  task: {
    title: t("Interview an older person", "Interviewer une personne âgée", "حاور شخصًا كبير السن"),
    brief: t(
      "Ask an older relative or friend (in French if possible, or in your language and then report in French) five questions about their childhood: where they lived, school, games, food, a special memory. Then tell the story aloud in French in the third person: « Quand il était petit, il… ».",
      "Posez à un proche ou à un ami plus âgé (en français si possible, ou dans votre langue puis racontez en français) cinq questions sur son enfance : lieu de vie, école, jeux, nourriture, un souvenir particulier. Racontez ensuite son histoire à voix haute en français, à la troisième personne : « Quand il était petit, il… ».",
      "اطرح على قريب أو صديق أكبر سنًا (بالفرنسية إن أمكن، أو بلغتك ثم احكِ بالفرنسية) خمسة أسئلة عن طفولته: أين كان يسكن، والمدرسة، والألعاب، والطعام، وذكرى مميّزة. ثم احكِ قصته بصوت عالٍ بالفرنسية بضمير الغائب: «Quand il était petit, il…»."
    ),
    checklist: [
      t("I asked five questions in the imparfait.", "J'ai posé cinq questions à l'imparfait.", "طرحت خمسة أسئلة بصيغة الماضي الناقص."),
      t("I retold the story in the third person.", "J'ai raconté l'histoire à la troisième personne.", "رويت القصة بضمير الغائب."),
      t("I used at least one event in the passé composé.", "J'ai utilisé au moins un événement au passé composé.", "استخدمت حدثًا واحدًا على الأقل بصيغة الماضي المركّب."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u02-t1", prompt: t("Imparfait of « finir » (nous):", "Imparfait de « finir » (nous) :", "الماضي الناقص من «finir» (nous):"), options: ["nous finions", "nous finissions", "nous finirons"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t2", prompt: t("Imparfait of « être » (ils):", "Imparfait d'« être » (ils) :", "الماضي الناقص من «être» (ils):"), options: ["ils étaient", "ils êtaient", "ils sontaient"], correctIndex: 0 },
    { kind: "choice", id: "a2u02-t3", prompt: t("« Avant, je ___ beaucoup de sport. »", "« Avant, je ___ beaucoup de sport. »", "«Avant, je ___ beaucoup de sport.»"), options: ["faisais", "ai fait", "fais"], correctIndex: 0 },
    { kind: "choice", id: "a2u02-t4", prompt: t("« Soudain, le téléphone ___ . »", "« Soudain, le téléphone ___ . »", "«Soudain, le téléphone ___ .»"), options: ["sonnait", "a sonné", "sonne"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t5", prompt: t("« Il ___ froid et il neigeait. »", "« Il ___ froid et il neigeait. »", "«Il ___ froid et il neigeait.»"), options: ["a fait", "faisait", "fait"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t6", prompt: t("« Tu me manques » means:", "« Tu me manques » signifie :", "معنى «Tu me manques»:"), optionsL10n: { en: ["I miss you.", "You miss me.", "You are missing."], fr: ["Je regrette ton absence.", "Tu regrettes mon absence.", "Tu es en retard."], ar: ["أشتاق إليك.", "تشتاق إليّ.", "أنت غائب."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u02-t7", prompt: t("Which word signals a habit?", "Quel mot indique une habitude ?", "أي كلمة تدل على عادة؟"), options: ["soudain", "d'habitude", "un jour"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t8", prompt: t("Imparfait of « commencer » (je):", "Imparfait de « commencer » (je) :", "الماضي الناقص من «commencer» (je):"), options: ["je commencais", "je commençais", "je commenceais"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t9", prompt: t("Which form ends with the sound [e] (like « été »)?", "Quelle forme se termine par le son [e] (comme « été ») ?", "أي صيغة تنتهي بالصوت [e] (كما في «été»)؟"), options: ["je jouais", "j'ai joué", "il jouait"], correctIndex: 1 },
    { kind: "choice", id: "a2u02-t10", prompt: t("The « Trente Glorieuses » were…", "Les « Trente Glorieuses », ce sont…", "«الثلاثين المجيدة» هي…"), optionsL10n: { en: ["about thirty years of strong growth after 1945", "thirty French kings", "a 1930s festival"], fr: ["environ trente ans de forte croissance après 1945", "trente rois de France", "un festival des années 1930"], ar: ["نحو ثلاثين عامًا من النمو القوي بعد 1945", "ثلاثون ملكًا فرنسيًا", "مهرجان في ثلاثينيات القرن العشرين"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-day-emotions"],
};
