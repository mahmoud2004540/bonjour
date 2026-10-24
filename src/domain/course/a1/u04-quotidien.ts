import { l10n as t, type CourseUnit } from "../types";

export const A1_U04: CourseUnit = {
  id: "fr-a1-u04-quotidien",
  level: "A1",
  order: 4,
  title: t("An ordinary day", "Une journée ordinaire", "يوم عادي"),
  theme: t(
    "Daily routine, telling the time, days of the week",
    "Les activités quotidiennes, l'heure, les jours de la semaine",
    "الأنشطة اليومية، والوقت، وأيام الأسبوع"
  ),
  canDo: [
    t("I can describe my daily routine.", "Je peux décrire ma journée habituelle.", "أستطيع أن أصف روتيني اليومي."),
    t("I can ask and tell the time.", "Je peux demander et dire l'heure.", "أستطيع أن أسأل عن الوقت وأخبر به."),
    t("I can say when I do things (days, times, parts of the day).", "Je peux dire quand je fais quelque chose (jours, heures, moments).", "أستطيع أن أقول متى أفعل الأشياء (الأيام، والساعات، وأوقات اليوم)."),
    t("I can compare my schedule with someone else's.", "Je peux comparer mon emploi du temps avec celui d'une autre personne.", "أستطيع أن أقارن جدولي بجدول شخص آخر."),
  ],
  context: t(
    "Théo, a student, and Amina, who works in a bakery, are neighbours. On the stairs, they talk about their very different days.",
    "Théo, étudiant, et Amina, qui travaille dans une boulangerie, sont voisins. Dans l'escalier, ils parlent de leurs journées très différentes.",
    "ثيو طالب، وأمينة تعمل في مخبز، وهما جاران. على الدرج يتحدثان عن يومَيهما المختلفين جدًا."
  ),
  dialogue: {
    title: t("Early bird, night owl", "Lève-tôt et couche-tard", "من ينام مبكرًا ومن يسهر"),
    setting: t("In the stairwell of their building", "Dans l'escalier de l'immeuble", "على درج العمارة"),
    lines: [
      { speaker: "Théo", fr: "Tu te lèves à quelle heure, le matin ?" },
      { speaker: "Amina", fr: "Très tôt ! Je me lève à cinq heures. Je travaille dans une boulangerie." },
      { speaker: "Théo", fr: "À cinq heures ? C'est dur !" },
      { speaker: "Amina", fr: "Oui, mais je commence à six heures et je termine à treize heures. Et toi ?" },
      { speaker: "Théo", fr: "Moi, je me lève à sept heures et demie. Je me douche, je prends un café et je vais à l'université." },
      { speaker: "Amina", fr: "Tu as cours tous les jours ?" },
      { speaker: "Théo", fr: "Du lundi au vendredi. Le mardi, je termine tard, à dix-huit heures." },
      { speaker: "Amina", fr: "Et le soir, qu'est-ce que tu fais ?" },
      { speaker: "Théo", fr: "Je dîne avec mes colocataires, on regarde une série et je me couche vers minuit." },
      { speaker: "Amina", fr: "Moi, je me couche à vingt et une heures !" },
      { speaker: "Théo", fr: "Et le week-end ?" },
      { speaker: "Amina", fr: "Le samedi, je travaille. Mais le dimanche, je me repose !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u04-c1", prompt: t("What time does Amina get up?", "À quelle heure Amina se lève-t-elle ?", "متى تستيقظ أمينة؟"), options: ["5 h", "6 h", "7 h 30"], correctIndex: 0 },
    { kind: "choice", id: "u04-c2", prompt: t("When does Théo finish late?", "Quand Théo termine-t-il tard ?", "متى ينتهي ثيو متأخرًا؟"), optionsL10n: { en: ["Monday", "Tuesday", "Friday"], fr: ["Le lundi", "Le mardi", "Le vendredi"], ar: ["يوم الاثنين", "يوم الثلاثاء", "يوم الجمعة"] }, correctIndex: 1 },
    { kind: "choice", id: "u04-c3", prompt: t("What does Théo do in the evening?", "Que fait Théo le soir ?", "ماذا يفعل ثيو في المساء؟"), optionsL10n: { en: ["He works in a bakery.", "He has dinner and watches a series.", "He goes to bed at 9 p.m."], fr: ["Il travaille à la boulangerie.", "Il dîne et regarde une série.", "Il se couche à 21 heures."], ar: ["يعمل في المخبز.", "يتعشّى ويشاهد مسلسلًا.", "ينام في التاسعة مساءً."] }, correctIndex: 1 },
    { kind: "choice", id: "u04-c4", prompt: t("When does Amina rest?", "Quand Amina se repose-t-elle ?", "متى ترتاح أمينة؟"), optionsL10n: { en: ["On Saturday", "On Sunday", "Every evening"], fr: ["Le samedi", "Le dimanche", "Tous les soirs"], ar: ["يوم السبت", "يوم الأحد", "كل مساء"] }, correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("Daily actions", "Les actions quotidiennes", "الأفعال اليومية"),
      items: [
        { fr: "se réveiller", meaning: t("to wake up", "sortir du sommeil", "يستيقظ"), example: "Je me réveille à sept heures." },
        { fr: "se lever", meaning: t("to get up", "sortir du lit", "ينهض من السرير"), example: "Tu te lèves tôt ?" },
        { fr: "se doucher", meaning: t("to take a shower", "prendre une douche", "يستحمّ"), example: "Je me douche le matin." },
        { fr: "prendre le petit-déjeuner", meaning: t("to have breakfast", "manger le matin", "يتناول الفطور"), example: "Je prends le petit-déjeuner à huit heures." },
        { fr: "travailler", meaning: t("to work", "exercer son métier", "يعمل"), example: "Elle travaille dans une boulangerie." },
        { fr: "déjeuner", meaning: t("to have lunch", "manger à midi", "يتناول الغداء"), example: "On déjeune à midi et demi." },
        { fr: "dîner", meaning: t("to have dinner", "manger le soir", "يتناول العشاء"), example: "Nous dînons à vingt heures." },
        { fr: "se coucher", meaning: t("to go to bed", "aller au lit", "يذهب إلى النوم"), example: "Je me couche vers minuit." },
        { fr: "se reposer", meaning: t("to rest", "ne pas travailler, se détendre", "يرتاح"), example: "Le dimanche, je me repose." },
      ],
    },
    {
      title: t("Days and moments", "Les jours et les moments", "الأيام وأوقات اليوم"),
      items: [
        { fr: "lundi, mardi, mercredi, jeudi", meaning: t("Monday, Tuesday, Wednesday, Thursday", "les jours de la semaine", "الاثنين، الثلاثاء، الأربعاء، الخميس") },
        { fr: "vendredi, samedi, dimanche", meaning: t("Friday, Saturday, Sunday", "les jours de la semaine", "الجمعة، السبت، الأحد") },
        { fr: "le week-end", gender: "m", meaning: t("the weekend", "samedi et dimanche", "عطلة نهاية الأسبوع") },
        { fr: "le matin", gender: "m", meaning: t("the morning", "début de la journée", "الصباح") },
        { fr: "l'après-midi", gender: "m", meaning: t("the afternoon", "entre midi et le soir", "بعد الظهر") },
        { fr: "le soir", gender: "m", meaning: t("the evening", "fin de la journée", "المساء") },
        { fr: "tôt / tard", meaning: t("early / late", "avant / après l'heure habituelle", "مبكرًا / متأخرًا") },
        { fr: "tous les jours", meaning: t("every day", "chaque jour", "كل يوم") },
      ],
    },
  ],
  grammar: [
    {
      id: "u04-g1",
      title: t("Present tense of -er verbs", "Le présent des verbes en -er", "المضارع للأفعال المنتهية بـ -er"),
      explanation: t(
        "Most French verbs end in -er (parler, travailler, regarder). Remove -er and add the endings -e, -es, -e, -ons, -ez, -ent. Good news: je, tu, il and ils sound exactly the same — the endings -e, -es and -ent are silent.",
        "La plupart des verbes se terminent en -er (parler, travailler, regarder). On enlève -er et on ajoute les terminaisons -e, -es, -e, -ons, -ez, -ent. Bonne nouvelle : je, tu, il et ils se prononcent de la même façon — les terminaisons -e, -es et -ent sont muettes.",
        "معظم الأفعال الفرنسية تنتهي بـ -er (parler وtravailler وregarder). نحذف -er ونضيف النهايات -e و-es و-e و-ons و-ez و-ent. والخبر الجيد: صيغ je وtu وil وils تُنطق بالطريقة نفسها تمامًا، لأن النهايات -e و-es و-ent لا تُنطق."
      ),
      table: {
        head: ["", "travailler", "regarder"],
        rows: [
          ["je", "je travaille", "je regarde"],
          ["tu", "tu travailles", "tu regardes"],
          ["il / elle / on", "il travaille", "elle regarde"],
          ["nous", "nous travaillons", "nous regardons"],
          ["vous", "vous travaillez", "vous regardez"],
          ["ils / elles", "ils travaillent", "elles regardent"],
        ],
      },
      examples: [
        { fr: "Nous dînons à vingt heures.", gloss: t("We have dinner at 8 p.m.", "nous + -ons.", "نتعشّى في الثامنة مساءً.") },
        { fr: "On regarde une série.", gloss: t("We watch a series. (on = nous, informal)", "on = nous à l'oral.", "نشاهد مسلسلًا. (on بمعنى nous في الكلام)") },
      ],
      watchOut: t(
        "« On » takes the il/elle form: « on regarde », not « on regardons ». With commencer: « nous commençons » (ç keeps the [s] sound).",
        "« On » se conjugue comme il/elle : « on regarde », pas « on regardons ». Avec commencer : « nous commençons » (le ç garde le son [s]).",
        "«on» يُصرَّف مثل il/elle: «on regarde» وليس «on regardons». ومع الفعل commencer نكتب «nous commençons» (حرف ç يحافظ على صوت [s])."
      ),
    },
    {
      id: "u04-g2",
      title: t("Reflexive verbs: se lever, se coucher…", "Les verbes pronominaux : se lever, se coucher…", "الأفعال الانعكاسية: se lever وse coucher…"),
      explanation: t(
        "Many routine verbs are reflexive: the action « returns » to the subject. Add a pronoun before the verb: me, te, se, nous, vous, se (m', t', s' before a vowel). Se lever also changes its spelling: je me lève (è) but nous nous levons.",
        "Beaucoup de verbes du quotidien sont pronominaux : l'action revient sur le sujet. On ajoute un pronom avant le verbe : me, te, se, nous, vous, se (m', t', s' devant une voyelle). Se lever change aussi d'accent : je me lève (è) mais nous nous levons.",
        "كثير من أفعال الروتين اليومي أفعال انعكاسية: يعود الفعل على الفاعل نفسه. نضيف ضميرًا قبل الفعل: me وte وse وnous وvous وse (وتصبح m' وt' وs' قبل حرف متحرّك). ويتغيّر أيضًا رسم الفعل se lever: je me lève (بحرف è) لكن nous nous levons."
      ),
      table: {
        head: ["", "se coucher", "se lever"],
        rows: [
          ["je", "je me couche", "je me lève"],
          ["tu", "tu te couches", "tu te lèves"],
          ["il / elle / on", "il se couche", "elle se lève"],
          ["nous", "nous nous couchons", "nous nous levons"],
          ["vous", "vous vous couchez", "vous vous levez"],
          ["ils / elles", "ils se couchent", "elles se lèvent"],
        ],
      },
      examples: [
        { fr: "Je me réveille à six heures et je me lève tout de suite.", gloss: t("I wake up at six and get up immediately.", "Deux verbes pronominaux.", "أستيقظ في السادسة وأنهض فورًا.") },
        { fr: "Le dimanche, ils se reposent.", gloss: t("On Sundays they rest.", "ils se + verbe.", "يرتاحون يوم الأحد.") },
      ],
    },
    {
      id: "u04-g3",
      title: t("Telling the time", "Dire l'heure", "قول الوقت"),
      explanation: t(
        "Ask « Quelle heure est-il ? » (or, informally, « Il est quelle heure ? »). Answer with « Il est… heure(s) ». In everyday speech: et quart (:15), et demie (:30), moins le quart (:45), midi (12:00), minuit (00:00). Timetables, shops and the media use the 24-hour clock: 18 h 30 = dix-huit heures trente.",
        "On demande « Quelle heure est-il ? » (à l'oral : « Il est quelle heure ? »). On répond « Il est… heure(s) ». Dans la conversation : et quart, et demie, moins le quart, midi, minuit. Les horaires, les magasins et les médias utilisent le système sur 24 heures : 18 h 30 = dix-huit heures trente.",
        "نسأل «Quelle heure est-il ?» (وفي الكلام اليومي «Il est quelle heure ?»)، ونجيب بـ«Il est… heure(s)». وفي المحادثة نقول: et quart (والربع)، et demie (والنصف)، moins le quart (إلا ربعًا)، midi (الظهر)، minuit (منتصف الليل). أما الجداول والمتاجر ووسائل الإعلام فتستخدم نظام 24 ساعة: 18 h 30 = dix-huit heures trente."
      ),
      table: {
        head: ["", "conversation", "horaire officiel"],
        rows: [
          ["7:15", "sept heures et quart", "sept heures quinze"],
          ["12:30", "midi et demi", "douze heures trente"],
          ["17:45", "six heures moins le quart", "dix-sept heures quarante-cinq"],
          ["21:00", "neuf heures du soir", "vingt et une heures"],
        ],
      },
      examples: [
        { fr: "Il est huit heures et demie.", gloss: t("It's half past eight.", "8 h 30.", "الساعة الثامنة والنصف.") },
        { fr: "Le cours commence à quatorze heures.", gloss: t("The class starts at 2 p.m.", "Horaire sur 24 h.", "يبدأ الدرس في الساعة الثانية بعد الظهر.") },
      ],
      watchOut: t(
        "« À » introduces a time: « à sept heures ». Days with « le » mean a habit: « le mardi » = every Tuesday; « mardi » alone = this Tuesday.",
        "« À » introduit l'heure : « à sept heures ». « Le mardi » = tous les mardis ; « mardi » seul = ce mardi.",
        "حرف «à» يسبق الساعة: «à sept heures». و«le mardi» تعني كل يوم ثلاثاء (عادة)، أما «mardi» وحدها فتعني يوم الثلاثاء هذا."
      ),
    },
  ],
  pronunciation: {
    title: t("Silent verb endings", "Les terminaisons muettes", "النهايات التي لا تُنطق"),
    explanation: t(
      "In « je travaille, tu travailles, il travaille, ils travaillent », you hear the same word: [tʁavaj]. Only « nous travaillons » [-ɔ̃] and « vous travaillez » [-e] sound different. Don't pronounce -ent in verbs!",
      "Dans « je travaille, tu travailles, il travaille, ils travaillent », on entend le même mot : [tʁavaj]. Seuls « nous travaillons » [-ɔ̃] et « vous travaillez » [-e] sont différents. On ne prononce pas -ent dans les verbes !",
      "في «je travaille وtu travailles وil travaille وils travaillent» نسمع الكلمة نفسها: [tʁavaj]. فقط «nous travaillons» [-ɔ̃] و«vous travaillez» [-e] مختلفتان في النطق. لا تنطق -ent في الأفعال!"
    ),
    examples: ["je regarde — ils regardent", "tu parles — elles parlent", "nous regardons", "vous regardez", "Ils se couchent tard."],
  },
  culture: {
    title: t("The French daily rhythm", "Le rythme de la journée en France", "إيقاع اليوم في فرنسا"),
    body: t(
      "The legal working week in France is 35 hours. Lunch (« le déjeuner ») is usually between 12:00 and 14:00, and many people take a real break to eat. Dinner is often around 19:30–20:30. Many shops close on Sundays, and small shops may close at lunchtime. Wednesday afternoon is traditionally a time for children's activities, as many primary schools have no class then.",
      "En France, la durée légale du travail est de 35 heures par semaine. Le déjeuner a lieu en général entre 12 heures et 14 heures, et beaucoup de gens prennent une vraie pause pour manger. On dîne souvent vers 19 h 30 – 20 h 30. Beaucoup de magasins sont fermés le dimanche, et les petits commerces ferment parfois à midi. Le mercredi après-midi est traditionnellement consacré aux activités des enfants, car beaucoup d'écoles primaires n'ont pas cours.",
      "مدة العمل القانونية في فرنسا 35 ساعة أسبوعيًا. يكون الغداء عادةً بين الثانية عشرة ظهرًا والثانية بعد الظهر، ويأخذ كثيرون استراحة حقيقية لتناول الطعام. ويكون العشاء غالبًا نحو 19:30 – 20:30. تُغلق متاجر كثيرة يوم الأحد، وقد تُغلق المحلات الصغيرة وقت الظهر. أما بعد ظهر الأربعاء فهو تقليديًا وقت لأنشطة الأطفال، لأن كثيرًا من المدارس الابتدائية لا دراسة فيها."
    ),
  },
  practice: [
    { kind: "fill", id: "u04-p1", prompt: t("Conjugate travailler.", "Conjuguez travailler.", "صرّف الفعل travailler."), sentence: "Nous ___ le samedi.", answers: ["travaillons"] },
    { kind: "fill", id: "u04-p2", prompt: t("Conjugate regarder.", "Conjuguez regarder.", "صرّف الفعل regarder."), sentence: "Ils ___ la télévision.", answers: ["regardent"] },
    { kind: "fill", id: "u04-p3", prompt: t("Conjugate dîner.", "Conjuguez dîner.", "صرّف الفعل dîner."), sentence: "Vous ___ à quelle heure ?", answers: ["dînez"] },
    { kind: "fill", id: "u04-p4", prompt: t("Complete with the reflexive pronoun.", "Complétez avec le pronom.", "أكمل بالضمير الانعكاسي."), sentence: "Tu ___ lèves à sept heures ?", answers: ["te"] },
    { kind: "fill", id: "u04-p5", prompt: t("Conjugate se coucher.", "Conjuguez se coucher.", "صرّف الفعل se coucher."), sentence: "Je ___ vers minuit.", answers: ["me couche"] },
    { kind: "fill", id: "u04-p6", prompt: t("Conjugate se lever (accent!).", "Conjuguez se lever (attention à l'accent).", "صرّف الفعل se lever (انتبه للعلامة)."), sentence: "Elle ___ tôt.", answers: ["se lève"] },
    { kind: "choice", id: "u04-p7", prompt: t("7:45 in everyday speech:", "7 h 45 dans la conversation :", "الساعة 7:45 في الكلام اليومي:"), options: ["sept heures moins le quart", "huit heures moins le quart", "sept heures et demie"], correctIndex: 1 },
    { kind: "choice", id: "u04-p8", prompt: t("« Le samedi, je travaille » means:", "« Le samedi, je travaille » signifie :", "«Le samedi, je travaille» تعني:"), optionsL10n: { en: ["I work this Saturday only.", "I work every Saturday.", "I never work on Saturday."], fr: ["Je travaille seulement ce samedi.", "Je travaille tous les samedis.", "Je ne travaille jamais le samedi."], ar: ["أعمل هذا السبت فقط.", "أعمل كل يوم سبت.", "لا أعمل أبدًا يوم السبت."] }, correctIndex: 1 },
    { kind: "fill", id: "u04-p9", prompt: t("Write 18:30 in the 24-hour style.", "Écrivez 18 h 30 (horaire officiel).", "اكتب 18:30 بنظام 24 ساعة."), answers: ["dix-huit heures trente"] },
    { kind: "order", id: "u04-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quelle heure est-il ?" },
    { kind: "order", id: "u04-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Le dimanche, je me repose." },
  ],
  production: {
    prompt: t(
      "Describe your typical weekday in 6–8 sentences, with times: when you get up, work or study, eat, rest and go to bed.",
      "Décrivez votre journée habituelle en semaine en 6 à 8 phrases, avec les heures : lever, travail ou études, repas, repos, coucher.",
      "صِف يومك المعتاد في أيام الأسبوع في 6 إلى 8 جمل مع ذكر الأوقات: متى تستيقظ، وتعمل أو تدرس، وتأكل، وترتاح، وتنام."
    ),
    model: "Du lundi au vendredi, je me lève à six heures et demie. Je me douche et je prends le petit-déjeuner. Je commence le travail à huit heures. Je déjeune à midi avec mes collègues. Je termine à dix-sept heures. Le soir, je dîne en famille et je regarde un film. Je me couche à vingt-trois heures.",
    checklist: [
      t("I use at least three reflexive verbs (me lève, me douche…).", "J'utilise au moins trois verbes pronominaux.", "استخدمت ثلاثة أفعال انعكاسية على الأقل."),
      t("I give at least four times with « à ».", "Je donne au moins quatre heures avec « à ».", "ذكرت أربعة أوقات على الأقل مع «à»."),
      t("My -er verbs have the right endings.", "Les terminaisons de mes verbes en -er sont correctes.", "نهايات أفعال -er عندي صحيحة."),
      t("I use connectors: et, puis, le soir…", "J'utilise des connecteurs : et, puis, le soir…", "استخدمت أدوات ربط: et، puis، le soir…"),
    ],
  },
  task: {
    title: t("Find a time to meet", "Trouver un moment pour se voir", "إيجاد موعد مناسب للقاء"),
    brief: t(
      "With a partner (or by writing both roles), compare your weekly schedules and agree on a day and time to meet for a coffee: « Tu es libre mardi à 18 heures ? — Non, je travaille. Et jeudi ? »",
      "Avec un partenaire (ou en écrivant les deux rôles), comparez vos emplois du temps et choisissez un jour et une heure pour prendre un café : « Tu es libre mardi à 18 heures ? — Non, je travaille. Et jeudi ? »",
      "مع شريك (أو بكتابة الدورين بنفسك)، قارنا جدولَي أسبوعكما واتفقا على يوم وساعة لشرب القهوة معًا: «Tu es libre mardi à 18 heures ? — Non, je travaille. Et jeudi ?»"
    ),
    checklist: [
      t("I proposed at least two days and times.", "J'ai proposé au moins deux jours et heures.", "اقترحت يومين وموعدين على الأقل."),
      t("I explained why I'm not free.", "J'ai expliqué pourquoi je ne suis pas libre.", "شرحت لماذا لست متفرّغًا."),
      t("We agreed on a time.", "Nous avons choisi une heure.", "اتفقنا على موعد."),
    ],
  },
  test: [
    { kind: "choice", id: "u04-t1", prompt: t("Complete: Ils ___ français.", "Complétez : Ils ___ français.", "أكمل: Ils ___ français."), options: ["parle", "parlent", "parlons"], correctIndex: 1 },
    { kind: "choice", id: "u04-t2", prompt: t("Complete: On ___ à midi.", "Complétez : On ___ à midi.", "أكمل: On ___ à midi."), options: ["déjeune", "déjeunons", "déjeunent"], correctIndex: 0 },
    { kind: "choice", id: "u04-t3", prompt: t("Complete: Nous ___ levons tôt.", "Complétez : Nous ___ levons tôt.", "أكمل: Nous ___ levons tôt."), options: ["se", "nous", "vous"], correctIndex: 1 },
    { kind: "choice", id: "u04-t4", prompt: t("Choose the correct form.", "Choisissez la bonne forme.", "اختر الصيغة الصحيحة."), options: ["je me leve", "je me lève", "je lève me"], correctIndex: 1 },
    { kind: "choice", id: "u04-t5", prompt: t("« Il est midi » means it is:", "« Il est midi », c'est :", "«Il est midi» يعني أن الساعة:"), options: ["12:00", "00:00", "10:00"], correctIndex: 0 },
    { kind: "choice", id: "u04-t6", prompt: t("« Dix heures et quart » is:", "« Dix heures et quart », c'est :", "«Dix heures et quart» هي:"), options: ["10:15", "10:30", "9:45"], correctIndex: 0 },
    { kind: "choice", id: "u04-t7", prompt: t("The day after « mercredi » is:", "Le jour après « mercredi » :", "اليوم الذي يلي «mercredi»:"), options: ["mardi", "jeudi", "vendredi"], correctIndex: 1 },
    { kind: "choice", id: "u04-t8", prompt: t("Which ending is NOT pronounced?", "Quelle terminaison ne se prononce PAS ?", "أي نهاية لا تُنطق؟"), options: ["nous parlons", "vous parlez", "ils parlent"], correctIndex: 2 },
    { kind: "choice", id: "u04-t9", prompt: t("Question to ask the time:", "Question pour demander l'heure :", "سؤال للاستفسار عن الوقت:"), options: ["Quel âge avez-vous ?", "Quelle heure est-il ?", "Quel jour sommes-nous ?"], correctIndex: 1 },
    { kind: "choice", id: "u04-t10", prompt: t("The legal working week in France is:", "La durée légale du travail en France :", "مدة العمل القانونية في فرنسا:"), optionsL10n: { en: ["35 hours", "40 hours", "48 hours"], fr: ["35 heures", "40 heures", "48 heures"], ar: ["35 ساعة", "40 ساعة", "48 ساعة"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-a1-deep-time"],
};
