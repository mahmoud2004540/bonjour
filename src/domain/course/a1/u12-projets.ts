import { l10n as t, type CourseUnit } from "../types";

export const A1_U12: CourseUnit = {
  id: "fr-a1-u12-projets",
  level: "A1",
  order: 12,
  title: t("Weekend and plans", "Week-end et projets", "عطلة نهاية الأسبوع والمشاريع"),
  theme: t(
    "Telling what you did, talking about plans",
    "Raconter ce qu'on a fait, parler de ses projets",
    "رواية ما فعلناه، والحديث عن المشاريع القادمة"
  ),
  canDo: [
    t("I can tell what I did last weekend in simple sentences.", "Je peux raconter mon dernier week-end en phrases simples.", "أستطيع أن أروي ما فعلته في عطلة نهاية الأسبوع الماضية بجمل بسيطة."),
    t("I can talk about my plans (next weekend, holidays).", "Je peux parler de mes projets (le week-end prochain, les vacances).", "أستطيع أن أتحدث عن مشاريعي (عطلة نهاية الأسبوع القادمة، والإجازة)."),
    t("I can place events in time (hier, demain, la semaine dernière…).", "Je peux situer des événements dans le temps (hier, demain, la semaine dernière…).", "أستطيع أن أحدّد زمن الأحداث (hier، demain، la semaine dernière…)."),
    t("I can ask someone about their weekend and react.", "Je peux interroger quelqu'un sur son week-end et réagir.", "أستطيع أن أسأل شخصًا عن عطلته وأتفاعل مع جوابه."),
  ],
  context: t(
    "It's Monday morning at the office in Paris. Sarah and Malik talk about their weekend and their next plans.",
    "C'est lundi matin, au bureau, à Paris. Sarah et Malik parlent de leur week-end et de leurs prochains projets.",
    "إنه صباح يوم الاثنين في مكتب بباريس. تتحدث سارة ومالك عن عطلتهما ومشاريعهما القادمة."
  ),
  dialogue: {
    title: t("Monday morning", "Lundi matin", "صباح الاثنين"),
    setting: t("At the coffee machine", "Devant la machine à café", "أمام آلة القهوة"),
    lines: [
      { speaker: "Sarah", fr: "Salut Malik ! Tu as passé un bon week-end ?" },
      { speaker: "Malik", fr: "Excellent ! Samedi, j'ai visité le Mont-Saint-Michel avec ma femme." },
      { speaker: "Sarah", fr: "Super ! Vous avez pris la voiture ?" },
      { speaker: "Malik", fr: "Non, nous avons pris le train jusqu'à Rennes, puis le bus. On a beaucoup marché et on a mangé des crêpes." },
      { speaker: "Sarah", fr: "Il a fait beau ?" },
      { speaker: "Malik", fr: "Oui, le matin. L'après-midi, il a plu un peu. Et toi, qu'est-ce que tu as fait ?" },
      { speaker: "Sarah", fr: "Moi, je suis restée à la maison. J'ai lu un livre et j'ai regardé un film. Dimanche, je suis allée à la piscine." },
      { speaker: "Malik", fr: "C'est bien aussi ! Et le week-end prochain ?" },
      { speaker: "Sarah", fr: "Je vais aller à Lyon. Ma sœur va fêter ses trente ans !" },
      { speaker: "Malik", fr: "Génial ! Vous allez faire une grande fête ?" },
      { speaker: "Sarah", fr: "Oui, nous allons dîner au restaurant avec toute la famille." },
      { speaker: "Malik", fr: "Et cet été, tu vas voyager ?" },
      { speaker: "Sarah", fr: "Oui, je vais partir deux semaines au Sénégal. Je vais voir des amis à Dakar." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u12-c1", prompt: t("What did Malik visit?", "Qu'est-ce que Malik a visité ?", "ماذا زار مالك؟"), options: ["Le Mont-Saint-Michel", "Lyon", "Dakar"], correctIndex: 0 },
    { kind: "choice", id: "u12-c2", prompt: t("How did Malik and his wife travel?", "Comment Malik et sa femme ont-ils voyagé ?", "كيف سافر مالك وزوجته؟"), optionsL10n: { en: ["By car", "By train, then bus", "By plane"], fr: ["En voiture", "En train, puis en bus", "En avion"], ar: ["بالسيارة", "بالقطار ثم بالحافلة", "بالطائرة"] }, correctIndex: 1 },
    { kind: "choice", id: "u12-c3", prompt: t("What did Sarah do on Sunday?", "Qu'est-ce que Sarah a fait dimanche ?", "ماذا فعلت سارة يوم الأحد؟"), optionsL10n: { en: ["She read a book.", "She went to the swimming pool.", "She went to Lyon."], fr: ["Elle a lu un livre.", "Elle est allée à la piscine.", "Elle est allée à Lyon."], ar: ["قرأت كتابًا.", "ذهبت إلى المسبح.", "ذهبت إلى ليون."] }, correctIndex: 1 },
    { kind: "choice", id: "u12-c4", prompt: t("What is Sarah going to do this summer?", "Qu'est-ce que Sarah va faire cet été ?", "ماذا ستفعل سارة هذا الصيف؟"), optionsL10n: { en: ["Celebrate her 30th birthday", "Go to Senegal for two weeks", "Visit Mont-Saint-Michel"], fr: ["Fêter ses trente ans", "Partir deux semaines au Sénégal", "Visiter le Mont-Saint-Michel"], ar: ["الاحتفال بعيد ميلادها الثلاثين", "السفر إلى السنغال لمدة أسبوعين", "زيارة جبل سان ميشيل"] }, correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("Time markers", "Les indicateurs de temps", "ظروف الزمان"),
      items: [
        { fr: "hier", meaning: t("yesterday", "le jour avant aujourd'hui", "أمس") },
        { fr: "avant-hier", meaning: t("the day before yesterday", "deux jours avant", "أول أمس") },
        { fr: "la semaine dernière", meaning: t("last week", "la semaine avant celle-ci", "الأسبوع الماضي") },
        { fr: "l'année dernière", meaning: t("last year", "l'année avant celle-ci", "العام الماضي") },
        { fr: "aujourd'hui", meaning: t("today", "ce jour", "اليوم") },
        { fr: "demain", meaning: t("tomorrow", "le jour après aujourd'hui", "غدًا") },
        { fr: "le week-end prochain", meaning: t("next weekend", "le week-end qui vient", "عطلة نهاية الأسبوع القادمة") },
        { fr: "cet été / ce soir", meaning: t("this summer / tonight", "l'été qui vient / le soir d'aujourd'hui", "هذا الصيف / هذا المساء") },
        { fr: "il y a deux jours", meaning: t("two days ago", "deux jours avant aujourd'hui", "منذ يومين") },
      ],
    },
    {
      title: t("Activities and reactions", "Activités et réactions", "الأنشطة وردود الفعل"),
      items: [
        { fr: "visiter (un lieu)", meaning: t("to visit (a place)", "découvrir un lieu", "يزور (مكانًا)") },
        { fr: "rendre visite à (quelqu'un)", meaning: t("to visit (someone)", "aller voir une personne", "يزور (شخصًا)") },
        { fr: "fêter un anniversaire", meaning: t("to celebrate a birthday", "faire une fête", "يحتفل بعيد ميلاد") },
        { fr: "voyager", meaning: t("to travel", "partir en voyage", "يسافر") },
        { fr: "les vacances", gender: "pl", meaning: t("holidays", "période sans travail ni école", "الإجازة / العطلة") },
        { fr: "Super ! / Génial !", meaning: t("Great!", "réaction positive", "رائع!") },
        { fr: "C'est dommage !", meaning: t("What a pity!", "réaction de regret", "يا للأسف!") },
        { fr: "Tu as passé un bon week-end ?", meaning: t("Did you have a good weekend?", "question du lundi", "هل قضيت عطلة جيدة؟") },
      ],
    },
  ],
  grammar: [
    {
      id: "u12-g1",
      title: t("The near future: aller + infinitive", "Le futur proche : aller + infinitif", "المستقبل القريب: aller + مصدر"),
      explanation: t(
        "To talk about plans and the near future, use « aller » in the present + an infinitive: « Je vais partir », « Nous allons dîner ». In the negative, « ne… pas » goes around « aller »: « Je ne vais pas travailler ».",
        "Pour parler de projets et d'un futur proche, on utilise « aller » au présent + un infinitif : « Je vais partir », « Nous allons dîner ». À la forme négative, « ne… pas » entoure « aller » : « Je ne vais pas travailler ».",
        "للحديث عن المشاريع والمستقبل القريب نستخدم «aller» في المضارع + مصدرًا: «Je vais partir» (سأغادر)، «Nous allons dîner» (سنتعشّى). وفي النفي تحيط «ne… pas» بالفعل «aller»: «Je ne vais pas travailler»."
      ),
      table: {
        head: ["", "futur proche"],
        rows: [
          ["je", "je vais voyager"],
          ["tu", "tu vas voyager"],
          ["il / elle / on", "il va voyager"],
          ["nous", "nous allons voyager"],
          ["vous", "vous allez voyager"],
          ["ils / elles", "ils vont voyager"],
        ],
      },
      examples: [
        { fr: "Ce soir, on va regarder le match.", gloss: t("Tonight we're going to watch the match.", "Projet.", "هذا المساء سنشاهد المباراة.") },
        { fr: "Demain, il ne va pas pleuvoir.", gloss: t("It isn't going to rain tomorrow.", "Négation.", "غدًا لن تمطر.") },
      ],
    },
    {
      id: "u12-g2",
      title: t("The passé composé with avoir", "Le passé composé avec avoir", "الماضي المركّب مع avoir"),
      explanation: t(
        "The passé composé tells finished actions in the past. Most verbs use « avoir » in the present + past participle. Regular -er verbs: -er → -é (visiter → visité, manger → mangé). Common irregular participles: faire → fait, prendre → pris, lire → lu, voir → vu, boire → bu, avoir → eu, être → été, pleuvoir → plu. Negative: « ne… pas » goes around avoir: « Je n'ai pas mangé ».",
        "Le passé composé raconte des actions terminées. La plupart des verbes utilisent « avoir » au présent + le participe passé. Verbes en -er : -er → -é (visiter → visité, manger → mangé). Participes irréguliers fréquents : faire → fait, prendre → pris, lire → lu, voir → vu, boire → bu, avoir → eu, être → été, pleuvoir → plu. Négation : « ne… pas » entoure avoir : « Je n'ai pas mangé ».",
        "يُستخدم الماضي المركّب (passé composé) لرواية أحداث انتهت في الماضي. ومعظم الأفعال تُصاغ بـ«avoir» في المضارع + اسم المفعول. أفعال -er المنتظمة: -er ← -é (visiter ← visité، manger ← mangé). وأسماء مفعول شاذة شائعة: faire ← fait، prendre ← pris، lire ← lu، voir ← vu، boire ← bu، avoir ← eu، être ← été، pleuvoir ← plu. وفي النفي تحيط «ne… pas» بالفعل avoir: «Je n'ai pas mangé»."
      ),
      table: {
        head: ["", "visiter", "faire"],
        rows: [
          ["je / j'", "j'ai visité", "j'ai fait"],
          ["tu", "tu as visité", "tu as fait"],
          ["il / elle / on", "il a visité", "elle a fait"],
          ["nous", "nous avons visité", "nous avons fait"],
          ["vous", "vous avez visité", "vous avez fait"],
          ["ils / elles", "ils ont visité", "elles ont fait"],
        ],
      },
      examples: [
        { fr: "Hier, j'ai regardé un film et j'ai lu un livre.", gloss: t("Yesterday I watched a film and read a book.", "-é et participe irrégulier.", "أمس شاهدت فيلمًا وقرأت كتابًا.") },
        { fr: "Qu'est-ce que vous avez fait samedi ?", gloss: t("What did you do on Saturday?", "Question.", "ماذا فعلتم يوم السبت؟") },
        { fr: "Nous n'avons pas pris la voiture.", gloss: t("We didn't take the car.", "Négation.", "لم نأخذ السيارة.") },
      ],
    },
    {
      id: "u12-g3",
      title: t("The passé composé with être", "Le passé composé avec être", "الماضي المركّب مع être"),
      explanation: t(
        "A small group of verbs, mostly about movement or change of state, use « être »: aller (allé), venir (venu), partir (parti), arriver (arrivé), rester (resté), rentrer (rentré), sortir (sorti), naître (né)… and all reflexive verbs (se lever → je me suis levé). With être, the participle agrees with the subject: Sarah est restée, ils sont partis, elles sont allées.",
        "Un petit groupe de verbes, surtout de mouvement ou de changement d'état, utilise « être » : aller (allé), venir (venu), partir (parti), arriver (arrivé), rester (resté), rentrer (rentré), sortir (sorti), naître (né)… et tous les verbes pronominaux (se lever → je me suis levé). Avec être, le participe s'accorde avec le sujet : Sarah est restée, ils sont partis, elles sont allées.",
        "مجموعة صغيرة من الأفعال، ومعظمها يدل على الحركة أو تغيّر الحال، تُصاغ بـ«être»: aller (allé)، venir (venu)، partir (parti)، arriver (arrivé)، rester (resté)، rentrer (rentré)، sortir (sorti)، naître (né)… إضافةً إلى جميع الأفعال الانعكاسية (se lever ← je me suis levé). ومع être يتوافق اسم المفعول مع الفاعل: Sarah est restée، ils sont partis، elles sont allées."
      ),
      table: {
        head: ["", "aller"],
        rows: [
          ["je", "je suis allé(e)"],
          ["tu", "tu es allé(e)"],
          ["il / elle", "il est allé / elle est allée"],
          ["nous", "nous sommes allé(e)s"],
          ["vous", "vous êtes allé(e)(s)"],
          ["ils / elles", "ils sont allés / elles sont allées"],
        ],
      },
      examples: [
        { fr: "Dimanche, je suis allée à la piscine. (Sarah)", gloss: t("On Sunday I went to the pool. (a woman)", "Accord au féminin.", "يوم الأحد ذهبتُ إلى المسبح. (امرأة)") },
        { fr: "Mes parents sont arrivés à midi.", gloss: t("My parents arrived at noon.", "Accord au pluriel.", "وصل والداي عند الظهر.") },
      ],
      watchOut: t(
        "Don't say « j'ai allé » — aller always uses être: « je suis allé(e) ».",
        "On ne dit pas « j'ai allé » : aller se conjugue toujours avec être : « je suis allé(e) ».",
        "لا نقول «j'ai allé»؛ فالفعل aller يُصاغ دائمًا مع être: «je suis allé(e)»."
      ),
    },
  ],
  pronunciation: {
    title: t("Hearing the past: « je » or « j'ai »?", "Entendre le passé : « je » ou « j'ai » ?", "سماع الماضي: «je» أم «j'ai»؟"),
    explanation: t(
      "The difference between present and passé composé is often one small vowel. « Je regarde » [ʒə] (present) vs « J'ai regardé » [ʒe] (past). Listen for the [e] of « j'ai » and the [e] at the end of « regardé ». Same with « je fais » / « j'ai fait ».",
      "La différence entre le présent et le passé composé tient souvent à une petite voyelle. « Je regarde » [ʒə] (présent) / « J'ai regardé » [ʒe] (passé). Écoutez le [e] de « j'ai » et le [e] final de « regardé ». C'est pareil pour « je fais » / « j'ai fait ».",
      "كثيرًا ما يكون الفرق بين المضارع والماضي المركّب حرفًا متحرّكًا صغيرًا واحدًا. «Je regarde» [ʒə] (مضارع) و«J'ai regardé» [ʒe] (ماضٍ). استمع إلى [e] في «j'ai» و[e] في آخر «regardé». والأمر نفسه في «je fais» / «j'ai fait»."
    ),
    examples: ["je regarde — j'ai regardé", "je mange — j'ai mangé", "je fais — j'ai fait", "Je visite Paris. — J'ai visité Paris."],
  },
  culture: {
    title: t("Holidays and heritage", "Vacances et patrimoine", "الإجازات والتراث"),
    body: t(
      "France is one of the most visited countries in the world, with around 100 million international visitors a year. Besides Paris, the Mont-Saint-Michel, the châteaux of the Loire, Provence and the Alps attract many visitors. School summer holidays (« les grandes vacances ») last about two months, in July and August. On Monday morning, « Tu as passé un bon week-end ? » is a classic question between colleagues — a short answer and a question back is the polite thing to do.",
      "La France est l'un des pays les plus visités du monde, avec environ 100 millions de visiteurs internationaux par an. En plus de Paris, le Mont-Saint-Michel, les châteaux de la Loire, la Provence et les Alpes attirent beaucoup de visiteurs. Les grandes vacances scolaires durent environ deux mois, en juillet et en août. Le lundi matin, « Tu as passé un bon week-end ? » est une question classique entre collègues : on répond brièvement et on pose la question en retour.",
      "تُعدّ فرنسا من أكثر بلدان العالم استقبالًا للزوّار، إذ يزورها نحو 100 مليون زائر دولي كل عام. وإلى جانب باريس، يجذب جبل سان ميشيل وقصور وادي اللوار ومنطقة بروفانس وجبال الألب كثيرًا من الزوّار. وتستمر العطلة المدرسية الصيفية («les grandes vacances») نحو شهرين في يوليو وأغسطس. وصباح الاثنين يُعدّ سؤال «Tu as passé un bon week-end ?» سؤالًا تقليديًا بين الزملاء، ومن اللباقة أن تجيب باختصار ثم تعيد السؤال."
    ),
  },
  practice: [
    { kind: "fill", id: "u12-p1", prompt: t("Near future of partir.", "Futur proche de partir.", "المستقبل القريب من partir."), sentence: "Demain, nous ___ partir à huit heures.", answers: ["allons"] },
    { kind: "fill", id: "u12-p2", prompt: t("Near future.", "Futur proche.", "المستقبل القريب."), sentence: "Ce soir, je ___ dîner chez mes parents.", answers: ["vais"] },
    { kind: "fill", id: "u12-p3", prompt: t("Passé composé of manger.", "Passé composé de manger.", "الماضي المركّب من manger."), sentence: "Hier, j'___ une pizza.", answers: ["ai mangé"] },
    { kind: "fill", id: "u12-p4", prompt: t("Passé composé of faire.", "Passé composé de faire.", "الماضي المركّب من faire."), sentence: "Qu'est-ce que tu as ___ samedi ?", answers: ["fait"] },
    { kind: "fill", id: "u12-p5", prompt: t("Passé composé of prendre.", "Passé composé de prendre.", "الماضي المركّب من prendre."), sentence: "Nous avons ___ le train.", answers: ["pris"] },
    { kind: "fill", id: "u12-p6", prompt: t("Passé composé of aller (Sarah).", "Passé composé d'aller (Sarah).", "الماضي المركّب من aller (سارة)."), sentence: "Sarah ___ à la piscine.", answers: ["est allée"] },
    { kind: "fill", id: "u12-p7", prompt: t("Passé composé of arriver (ils).", "Passé composé d'arriver (ils).", "الماضي المركّب من arriver (هم)."), sentence: "Ils ___ en retard.", answers: ["sont arrivés"] },
    { kind: "choice", id: "u12-p8", prompt: t("Which sentence is in the past?", "Quelle phrase est au passé ?", "أي جملة في الماضي؟"), options: ["Je vais visiter Lyon.", "J'ai visité Lyon.", "Je visite Lyon."], correctIndex: 1 },
    { kind: "choice", id: "u12-p9", prompt: t("Negative: « J'ai vu ce film. »", "Négation : « J'ai vu ce film. »", "النفي: «J'ai vu ce film.»"), options: ["Je n'ai pas vu ce film.", "Je ai pas vu ce film.", "Je n'ai vu pas ce film."], correctIndex: 0 },
    { kind: "order", id: "u12-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Tu as passé un bon week-end ?" },
    { kind: "order", id: "u12-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je vais partir au Sénégal." },
  ],
  production: {
    prompt: t(
      "Write a message to a French-speaking friend: tell three things you did last weekend, then three things you are going to do next weekend or during your holidays.",
      "Écrivez un message à un ami francophone : racontez trois choses que vous avez faites le week-end dernier, puis trois choses que vous allez faire le week-end prochain ou pendant vos vacances.",
      "اكتب رسالة إلى صديق ناطق بالفرنسية: احكِ ثلاثة أشياء فعلتها في عطلة نهاية الأسبوع الماضية، ثم ثلاثة أشياء ستفعلها في العطلة القادمة أو في إجازتك."
    ),
    model: "Salut Chloé ! Le week-end dernier, je suis allé à Marseille avec mon frère. Nous avons visité le Vieux-Port et nous avons mangé du poisson. Dimanche, je suis resté à l'hôtel parce qu'il a plu. Le week-end prochain, je vais rester à Paris : je vais voir une exposition et je vais faire du vélo. Et toi, tu vas faire quoi ? Bises, Adam",
    checklist: [
      t("I use the passé composé with avoir and with être.", "J'utilise le passé composé avec avoir et avec être.", "استخدمت الماضي المركّب مع avoir ومع être."),
      t("My participles agree with être (allée, partis…).", "Mes participes s'accordent avec être (allée, partis…).", "اسم المفعول عندي متوافق مع être (allée، partis…)."),
      t("I use the near future for my plans.", "J'utilise le futur proche pour mes projets.", "استخدمت المستقبل القريب لمشاريعي."),
      t("I use time markers (le week-end dernier, dimanche, le week-end prochain).", "J'utilise des indicateurs de temps.", "استخدمت ظروف زمان (le week-end dernier، dimanche، le week-end prochain)."),
    ],
  },
  task: {
    title: t("The Monday conversation", "La conversation du lundi", "حديث صباح الاثنين"),
    brief: t(
      "With a partner (or recording both roles), have the « Monday morning » conversation: ask about the weekend, tell yours, react (« Super ! », « C'est dommage ! »), then talk about your plans for the next weekend. Two minutes, without reading.",
      "Avec un partenaire (ou en enregistrant les deux rôles), jouez la conversation du lundi matin : demandez comment s'est passé le week-end, racontez le vôtre, réagissez (« Super ! », « C'est dommage ! »), puis parlez de vos projets pour le week-end prochain. Deux minutes, sans lire.",
      "مع شريك (أو بتسجيل الدورين)، أدِّ حديث «صباح الاثنين»: اسأل عن عطلته، واحكِ عن عطلتك، وتفاعل («Super !»، «C'est dommage !»)، ثم تحدّث عن مشاريعك لعطلة نهاية الأسبوع القادمة. دقيقتان من دون قراءة."
    ),
    checklist: [
      t("I told at least three past actions.", "J'ai raconté au moins trois actions passées.", "رويت ثلاثة أحداث ماضية على الأقل."),
      t("I reacted to what my partner said.", "J'ai réagi à ce que mon partenaire a dit.", "تفاعلت مع ما قاله شريكي."),
      t("I talked about two plans with « aller + infinitif ».", "J'ai parlé de deux projets avec « aller + infinitif ».", "تحدّثت عن مشروعين باستخدام «aller + مصدر»."),
    ],
  },
  test: [
    { kind: "choice", id: "u12-t1", prompt: t("« Demain, ils ___ jouer au tennis. »", "« Demain, ils ___ jouer au tennis. »", "«Demain, ils ___ jouer au tennis.»"), options: ["vont", "allent", "ont"], correctIndex: 0 },
    { kind: "choice", id: "u12-t2", prompt: t("Negative near future:", "Futur proche négatif :", "المستقبل القريب المنفي:"), options: ["Je ne vais pas sortir.", "Je vais ne pas sortir.", "Je ne vais sortir pas."], correctIndex: 0 },
    { kind: "choice", id: "u12-t3", prompt: t("Past participle of « lire »:", "Participe passé de « lire » :", "اسم المفعول من «lire»:"), options: ["lisé", "lu", "lit"], correctIndex: 1 },
    { kind: "choice", id: "u12-t4", prompt: t("Past participle of « voir »:", "Participe passé de « voir » :", "اسم المفعول من «voir»:"), options: ["voiré", "vu", "vi"], correctIndex: 1 },
    { kind: "choice", id: "u12-t5", prompt: t("« Hier, nous ___ un musée. »", "« Hier, nous ___ un musée. »", "«Hier, nous ___ un musée.»"), options: ["avons visité", "sommes visités", "allons visiter"], correctIndex: 0 },
    { kind: "choice", id: "u12-t6", prompt: t("« Elle ___ à Lyon. » (partir, past)", "« Elle ___ à Lyon. » (partir, passé)", "«Elle ___ à Lyon.» (partir، ماضٍ)"), options: ["a parti", "est partie", "est parti"], correctIndex: 1 },
    { kind: "choice", id: "u12-t7", prompt: t("Which is correct?", "Quelle forme est correcte ?", "أي صيغة صحيحة؟"), options: ["J'ai allé au cinéma.", "Je suis allé au cinéma.", "Je suis allé à le cinéma."], correctIndex: 1 },
    { kind: "choice", id: "u12-t8", prompt: t("« La semaine dernière » refers to…", "« La semaine dernière », c'est…", "«La semaine dernière» تشير إلى…"), optionsL10n: { en: ["the past", "the future", "now"], fr: ["le passé", "le futur", "maintenant"], ar: ["الماضي", "المستقبل", "الآن"] }, correctIndex: 0 },
    { kind: "choice", id: "u12-t9", prompt: t("Which sentence is in the past?", "Quelle phrase est au passé ?", "أي جملة في الماضي؟"), options: ["Je fais du sport.", "J'ai fait du sport.", "Je vais faire du sport."], correctIndex: 1 },
    { kind: "choice", id: "u12-t10", prompt: t("« Les grandes vacances » in France are…", "En France, les grandes vacances sont…", "«Les grandes vacances» في فرنسا هي…"), optionsL10n: { en: ["the summer school holidays (July–August)", "the Christmas holidays", "a public holiday in May"], fr: ["les vacances scolaires d'été (juillet-août)", "les vacances de Noël", "un jour férié en mai"], ar: ["العطلة المدرسية الصيفية (يوليو–أغسطس)", "عطلة عيد الميلاد", "عطلة رسمية في مايو"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
};
