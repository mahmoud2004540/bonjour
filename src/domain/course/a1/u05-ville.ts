import { l10n as t, type CourseUnit } from "../types";

export const A1_U05: CourseUnit = {
  id: "fr-a1-u05-ville",
  level: "A1",
  order: 5,
  title: t("In town", "En ville", "في المدينة"),
  theme: t(
    "Places in town, asking for and giving directions",
    "Les lieux de la ville, demander et indiquer le chemin",
    "أماكن المدينة، والسؤال عن الطريق ووصفه"
  ),
  canDo: [
    t("I can ask if a place is nearby and where it is.", "Je peux demander s'il y a un lieu près d'ici et où il se trouve.", "أستطيع أن أسأل هل يوجد مكان قريب وأين يقع."),
    t("I can understand simple directions.", "Je peux comprendre un itinéraire simple.", "أستطيع أن أفهم وصفًا بسيطًا للطريق."),
    t("I can give directions to someone.", "Je peux indiquer le chemin à quelqu'un.", "أستطيع أن أدلّ شخصًا على الطريق."),
    t("I can locate a place (next to, opposite, between…).", "Je peux situer un lieu (à côté de, en face de, entre…).", "أستطيع أن أحدّد موقع مكان (بجانب، مقابل، بين…)."),
  ],
  context: t(
    "Lucas has just arrived in Lille. He needs a pharmacy, then he wants to go to the train station. He stops a woman in the street.",
    "Lucas vient d'arriver à Lille. Il cherche une pharmacie, puis il veut aller à la gare. Il arrête une passante dans la rue.",
    "وصل لوكاس للتوّ إلى مدينة ليل. يبحث عن صيدلية، ثم يريد أن يذهب إلى محطة القطار. فيستوقف امرأة في الشارع."
  ),
  dialogue: {
    title: t("Excuse me, where is…?", "Pardon, où est… ?", "عفوًا، أين…؟"),
    setting: t("In a street in Lille", "Dans une rue de Lille", "في أحد شوارع ليل"),
    lines: [
      { speaker: "Lucas", fr: "Pardon, madame. Il y a une pharmacie près d'ici ?" },
      { speaker: "Passante", fr: "Oui, il y a une pharmacie rue Nationale." },
      { speaker: "Lucas", fr: "C'est loin ?" },
      { speaker: "Passante", fr: "Non, c'est à cinq minutes à pied. Allez tout droit jusqu'au feu, puis tournez à gauche." },
      { speaker: "Lucas", fr: "Au feu, à gauche… D'accord." },
      { speaker: "Passante", fr: "Ensuite, prenez la deuxième rue à droite. La pharmacie est en face de la poste, à côté d'une boulangerie." },
      { speaker: "Lucas", fr: "En face de la poste. Et pour aller à la gare, après ?" },
      { speaker: "Passante", fr: "La gare est au bout de la rue Nationale, après le musée. Continuez tout droit." },
      { speaker: "Lucas", fr: "Merci beaucoup, madame !" },
      { speaker: "Passante", fr: "Je vous en prie. Bonne journée !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u05-c1", prompt: t("What is Lucas looking for first?", "Que cherche Lucas d'abord ?", "عمّ يبحث لوكاس أولًا؟"), optionsL10n: { en: ["A pharmacy", "A bakery", "The post office"], fr: ["Une pharmacie", "Une boulangerie", "La poste"], ar: ["صيدلية", "مخبز", "مكتب البريد"] }, correctIndex: 0 },
    { kind: "choice", id: "u05-c2", prompt: t("How far is it?", "C'est à quelle distance ?", "كم تبعد؟"), optionsL10n: { en: ["5 minutes on foot", "15 minutes by bus", "Very far"], fr: ["5 minutes à pied", "15 minutes en bus", "Très loin"], ar: ["5 دقائق سيرًا", "15 دقيقة بالحافلة", "بعيدة جدًا"] }, correctIndex: 0 },
    { kind: "choice", id: "u05-c3", prompt: t("At the traffic light, Lucas turns…", "Au feu, Lucas tourne…", "عند إشارة المرور، ينعطف لوكاس…"), options: ["à droite", "à gauche", "tout droit"], correctIndex: 1 },
    { kind: "choice", id: "u05-c4", prompt: t("The pharmacy is…", "La pharmacie est…", "الصيدلية…"), optionsL10n: { en: ["opposite the post office", "next to the station", "behind the museum"], fr: ["en face de la poste", "à côté de la gare", "derrière le musée"], ar: ["مقابل مكتب البريد", "بجانب المحطة", "خلف المتحف"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Places in town", "Les lieux de la ville", "أماكن المدينة"),
      items: [
        { fr: "la rue", gender: "f", meaning: t("street", "voie dans une ville", "الشارع") },
        { fr: "la place", gender: "f", meaning: t("square", "grand espace ouvert", "الساحة") },
        { fr: "la gare", gender: "f", meaning: t("train station", "pour prendre le train", "محطة القطار") },
        { fr: "la poste", gender: "f", meaning: t("post office", "pour envoyer des lettres", "مكتب البريد") },
        { fr: "la pharmacie", gender: "f", meaning: t("pharmacy", "on y achète des médicaments", "الصيدلية") },
        { fr: "la boulangerie", gender: "f", meaning: t("bakery", "on y achète du pain", "المخبز") },
        { fr: "la banque", gender: "f", meaning: t("bank", "pour l'argent", "البنك") },
        { fr: "la mairie", gender: "f", meaning: t("town hall", "administration de la ville", "مبنى البلدية") },
        { fr: "le musée", gender: "m", meaning: t("museum", "lieu d'expositions", "المتحف") },
        { fr: "le supermarché", gender: "m", meaning: t("supermarket", "grand magasin d'alimentation", "السوبرماركت") },
        { fr: "l'hôpital", gender: "m", meaning: t("hospital", "lieu de soins", "المستشفى") },
        { fr: "l'arrêt de bus", gender: "m", meaning: t("bus stop", "où le bus s'arrête", "موقف الحافلات") },
      ],
    },
    {
      title: t("Directions and location", "Itinéraire et localisation", "الاتجاهات وتحديد المكان"),
      items: [
        { fr: "tout droit", meaning: t("straight on", "sans tourner", "إلى الأمام مباشرة") },
        { fr: "à droite / à gauche", meaning: t("on the right / on the left", "côté droit / côté gauche", "إلى اليمين / إلى اليسار") },
        { fr: "tourner", meaning: t("to turn", "changer de direction", "ينعطف") },
        { fr: "le feu", gender: "m", meaning: t("traffic light", "feu de circulation", "إشارة المرور") },
        { fr: "le carrefour", gender: "m", meaning: t("crossroads", "croisement de rues", "التقاطع") },
        { fr: "à côté de", meaning: t("next to", "tout près de", "بجانب") },
        { fr: "en face de", meaning: t("opposite", "de l'autre côté, face à", "مقابل") },
        { fr: "entre … et …", meaning: t("between … and …", "au milieu de deux lieux", "بين … و…") },
        { fr: "près de / loin de", meaning: t("near / far from", "à petite / grande distance", "قريب من / بعيد عن") },
        { fr: "à pied", meaning: t("on foot", "en marchant", "سيرًا على الأقدام") },
      ],
    },
  ],
  grammar: [
    {
      id: "u05-g1",
      title: t("« Il y a » and « où est… ? »", "« Il y a » et « Où est… ? »", "«Il y a» و«Où est… ؟»"),
      explanation: t(
        "« Il y a » (there is / there are) never changes: « Il y a une banque », « Il y a des cafés ». Use it with un / une / des to ask if something exists. To ask for the location of a known place, use « Où est… ? » / « Où sont… ? »: « Où est la gare ? ». Negative: « Il n'y a pas de banque ici. »",
        "« Il y a » ne change pas : « Il y a une banque », « Il y a des cafés ». On l'utilise avec un / une / des pour demander si un lieu existe. Pour demander où se trouve un lieu connu : « Où est… ? » / « Où sont… ? » : « Où est la gare ? ». Négation : « Il n'y a pas de banque ici. »",
        "عبارة «Il y a» (يوجد / توجد) لا تتغيّر: «Il y a une banque» و«Il y a des cafés». نستخدمها مع un وune وdes للسؤال عن وجود مكان ما. أما للسؤال عن موقع مكان معروف فنستخدم «Où est… ?» أو «Où sont… ?»: «Où est la gare ?». وفي النفي: «Il n'y a pas de banque ici.»"
      ),
      examples: [
        { fr: "Il y a un supermarché près d'ici ?", gloss: t("Is there a supermarket near here?", "Existence.", "هل يوجد سوبرماركت قريب من هنا؟") },
        { fr: "Où est la mairie, s'il vous plaît ?", gloss: t("Where is the town hall, please?", "Lieu connu.", "أين البلدية من فضلك؟") },
        { fr: "Il n'y a pas de métro dans cette ville.", gloss: t("There is no metro in this town.", "Négation : pas de.", "لا يوجد مترو في هذه المدينة.") },
      ],
    },
    {
      id: "u05-g2",
      title: t("à + le = au, de + le = du", "à + le = au, de + le = du", "à + le = au وde + le = du"),
      explanation: t(
        "The prepositions « à » and « de » merge with « le » and « les »: à + le = au, à + les = aux, de + le = du, de + les = des. With « la » and « l' » nothing changes: à la gare, à l'hôpital, en face de la poste, à côté de l'école.",
        "Les prépositions « à » et « de » se contractent avec « le » et « les » : à + le = au, à + les = aux, de + le = du, de + les = des. Avec « la » et « l' », rien ne change : à la gare, à l'hôpital, en face de la poste, à côté de l'école.",
        "يندمج حرفا الجر «à» و«de» مع «le» و«les»: à + le = au، وà + les = aux، وde + le = du، وde + les = des. أما مع «la» و«l'» فلا شيء يتغيّر: à la gare، à l'hôpital، en face de la poste، à côté de l'école."
      ),
      table: {
        head: ["", "à", "de"],
        rows: [
          ["le musée", "au musée", "du musée"],
          ["la gare", "à la gare", "de la gare"],
          ["l'hôpital", "à l'hôpital", "de l'hôpital"],
          ["les magasins", "aux magasins", "des magasins"],
        ],
      },
      examples: [
        { fr: "Je vais au supermarché.", gloss: t("I'm going to the supermarket.", "à + le.", "أذهب إلى السوبرماركت.") },
        { fr: "La banque est à côté du cinéma.", gloss: t("The bank is next to the cinema.", "de + le.", "البنك بجانب السينما.") },
      ],
      watchOut: t(
        "Never say « à le » or « de le »: « Allez jusqu'au feu » (not « jusqu'à le feu »).",
        "On ne dit jamais « à le » ni « de le » : « Allez jusqu'au feu » (pas « jusqu'à le feu »).",
        "لا نقول أبدًا «à le» ولا «de le»: «Allez jusqu'au feu» (وليس «jusqu'à le feu»)."
      ),
    },
    {
      id: "u05-g3",
      title: t("The imperative for directions", "L'impératif pour indiquer le chemin", "صيغة الأمر لوصف الطريق"),
      explanation: t(
        "To give directions, use the imperative: the verb without its subject. With « vous »: allez, tournez, prenez, continuez, traversez. With « tu »: va, tourne, prends, continue, traverse (-er verbs lose the -s: « tu tournes » → « tourne »). You can also use the present: « Vous allez tout droit, puis vous tournez à droite. »",
        "Pour indiquer le chemin, on utilise l'impératif : le verbe sans sujet. Avec « vous » : allez, tournez, prenez, continuez, traversez. Avec « tu » : va, tourne, prends, continue, traverse (les verbes en -er perdent le -s : « tu tournes » → « tourne »). On peut aussi utiliser le présent : « Vous allez tout droit, puis vous tournez à droite. »",
        "لوصف الطريق نستخدم صيغة الأمر: الفعل من دون فاعل. مع «vous»: allez وtournez وprenez وcontinuez وtraversez. ومع «tu»: va وtourne وprends وcontinue وtraverse (أفعال -er تفقد حرف -s: «tu tournes» ← «tourne»). ويمكن أيضًا استخدام المضارع: «Vous allez tout droit, puis vous tournez à droite.»"
      ),
      table: {
        head: ["infinitif", "tu", "vous"],
        rows: [
          ["aller", "va", "allez"],
          ["tourner", "tourne", "tournez"],
          ["prendre", "prends", "prenez"],
          ["continuer", "continue", "continuez"],
          ["traverser", "traverse", "traversez"],
        ],
      },
      examples: [
        { fr: "Traversez la place et prenez la rue à gauche.", gloss: t("Cross the square and take the street on the left.", "Impératif avec vous.", "اعبر الساحة وخذ الشارع على اليسار.") },
        { fr: "Va tout droit, c'est à côté de la banque.", gloss: t("Go straight on, it's next to the bank.", "Impératif avec tu.", "امشِ إلى الأمام مباشرة، إنه بجانب البنك.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Nasal vowels [ɑ̃], [ɔ̃], [ɛ̃]", "Les voyelles nasales [ɑ̃], [ɔ̃], [ɛ̃]", "الحروف المتحرّكة الأنفية [ɑ̃] و[ɔ̃] و[ɛ̃]"),
    explanation: t(
      "French has nasal vowels: the air goes through the nose, and you don't pronounce the n or m. [ɑ̃] « an, en »: en face, tournant, enfant. [ɔ̃] « on, om »: bonjour, pont, nom. [ɛ̃] « in, ain, ein »: loin, pain, train. Before a vowel or a double n/m, the vowel is not nasal: bon [bɔ̃] / bonne [bɔn].",
      "Le français a des voyelles nasales : l'air passe par le nez et on ne prononce pas le n ou le m. [ɑ̃] « an, en » : en face, enfant. [ɔ̃] « on, om » : bonjour, pont, nom. [ɛ̃] « in, ain, ein » : loin, pain, train. Devant une voyelle ou un n/m double, la voyelle n'est pas nasale : bon [bɔ̃] / bonne [bɔn].",
      "في الفرنسية حروف متحرّكة أنفية: يمرّ الهواء عبر الأنف، ولا يُنطق حرف n أو m. الصوت [ɑ̃] «an وen»: en face، enfant. والصوت [ɔ̃] «on وom»: bonjour، pont، nom. والصوت [ɛ̃] «in وain وein»: loin، pain، train. وقبل حرف متحرّك أو n/m مضاعفة لا يكون الصوت أنفيًا: bon [bɔ̃] / bonne [bɔn]."
    ),
    examples: ["en face", "le pont", "loin", "le pain — le train", "bon — bonne", "Continuez tout droit."],
  },
  culture: {
    title: t("Addresses and town centres", "Adresses et centres-villes", "العناوين ووسط المدن"),
    body: t(
      "In French addresses, the number comes before the street: « 12, rue Nationale, 59000 Lille ». The five-digit postcode comes before the town. Paris, Lyon and Marseille are divided into « arrondissements » (districts), and the last two digits of the Paris postcode show the arrondissement: 75011 = 11th. A traditional town centre has a « place » with the « mairie », a church, cafés and often a weekly market.",
      "Dans une adresse française, le numéro vient avant la rue : « 12, rue Nationale, 59000 Lille ». Le code postal à cinq chiffres précède la ville. Paris, Lyon et Marseille sont divisées en arrondissements ; à Paris, les deux derniers chiffres du code postal indiquent l'arrondissement : 75011 = le 11e. Un centre-ville traditionnel a une place avec la mairie, une église, des cafés et souvent un marché chaque semaine.",
      "في العنوان الفرنسي يأتي الرقم قبل اسم الشارع: «12, rue Nationale, 59000 Lille»، ويأتي الرمز البريدي المكوّن من خمسة أرقام قبل اسم المدينة. وتنقسم باريس وليون ومرسيليا إلى «arrondissements» (دوائر)، وفي باريس يدل آخر رقمين من الرمز البريدي على الدائرة: 75011 = الدائرة الحادية عشرة. ويضم وسط المدينة التقليدي ساحة فيها البلدية وكنيسة ومقاهٍ، وغالبًا سوقًا أسبوعيًا."
    ),
  },
  practice: [
    { kind: "fill", id: "u05-p1", prompt: t("à + article", "à + article", "à + الأداة"), sentence: "Je vais ___ musée.", answers: ["au"] },
    { kind: "fill", id: "u05-p2", prompt: t("à + article", "à + article", "à + الأداة"), sentence: "Elle travaille ___ hôpital.", answers: ["à l'"] },
    { kind: "fill", id: "u05-p3", prompt: t("de + article", "de + article", "de + الأداة"), sentence: "La banque est à côté ___ cinéma.", answers: ["du"] },
    { kind: "fill", id: "u05-p4", prompt: t("de + article", "de + article", "de + الأداة"), sentence: "Le café est en face ___ gare.", answers: ["de la"] },
    { kind: "fill", id: "u05-p5", prompt: t("Imperative (vous) of tourner.", "Impératif (vous) de tourner.", "صيغة الأمر (vous) من tourner."), sentence: "___ à droite.", answers: ["tournez"] },
    { kind: "fill", id: "u05-p6", prompt: t("Imperative (tu) of prendre.", "Impératif (tu) de prendre.", "صيغة الأمر (tu) من prendre."), sentence: "___ la première rue.", answers: ["prends"] },
    { kind: "fill", id: "u05-p7", prompt: t("Imperative (tu) of continuer — no -s!", "Impératif (tu) de continuer — sans -s !", "صيغة الأمر (tu) من continuer — بلا -s!"), sentence: "___ tout droit.", answers: ["continue"] },
    { kind: "choice", id: "u05-p8", prompt: t("Ask if a pharmacy exists nearby.", "Demandez s'il existe une pharmacie près d'ici.", "اسأل هل توجد صيدلية قريبة."), options: ["Où est une pharmacie ?", "Il y a une pharmacie près d'ici ?", "C'est la pharmacie ?"], correctIndex: 1 },
    { kind: "choice", id: "u05-p9", prompt: t("Negative: « Il y a un parc. »", "Négation : « Il y a un parc. »", "النفي: «Il y a un parc.»"), options: ["Il n'y a pas un parc.", "Il n'y a pas de parc.", "Il y a pas parc."], correctIndex: 1 },
    { kind: "order", id: "u05-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Où est la gare, s'il vous plaît ?" },
    { kind: "order", id: "u05-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Allez tout droit jusqu'au feu." },
  ],
  production: {
    prompt: t(
      "A friend is visiting you. Write a short message explaining how to go from the station (or bus stop) to your home or to a café you like.",
      "Un ami vient vous voir. Écrivez un court message pour expliquer comment aller de la gare (ou de l'arrêt de bus) jusqu'à chez vous ou jusqu'à un café que vous aimez.",
      "صديق قادم لزيارتك. اكتب رسالة قصيرة تشرح فيها كيف يصل من المحطة (أو موقف الحافلة) إلى بيتك أو إلى مقهى تحبّه."
    ),
    model: "Salut Sami ! À la sortie de la gare, traverse la place et prends la rue Victor-Hugo. Continue tout droit jusqu'au carrefour, puis tourne à gauche. Le café est à côté de la pharmacie, en face d'un petit parc. C'est à dix minutes à pied. À tout à l'heure !",
    checklist: [
      t("I use at least three imperatives (tu or vous, consistently).", "J'utilise au moins trois impératifs (tu ou vous, sans mélanger).", "استخدمت ثلاث صيغ أمر على الأقل (tu أو vous من دون خلط)."),
      t("I use au / du correctly.", "J'utilise au / du correctement.", "استخدمت au / du بشكل صحيح."),
      t("I locate the place with à côté de / en face de / entre.", "Je situe le lieu avec à côté de / en face de / entre.", "حدّدت المكان باستخدام à côté de / en face de / entre."),
      t("I give a distance or a time (à 10 minutes à pied).", "Je donne une distance ou un temps (à 10 minutes à pied).", "ذكرت مسافة أو مدة (à 10 minutes à pied)."),
    ],
  },
  task: {
    title: t("Map challenge", "Défi plan", "تحدّي الخريطة"),
    brief: t(
      "Open a map of a French city (or your own town). Choose two places and explain aloud the way from one to the other in French. Then ask a partner the way to a place and follow their directions on the map.",
      "Ouvrez le plan d'une ville française (ou de votre ville). Choisissez deux lieux et expliquez à voix haute, en français, le chemin de l'un à l'autre. Demandez ensuite le chemin à un partenaire et suivez ses indications sur le plan.",
      "افتح خريطة مدينة فرنسية (أو مدينتك). اختر مكانين واشرح بصوت عالٍ بالفرنسية الطريق من أحدهما إلى الآخر. ثم اسأل شريكًا عن الطريق إلى مكان ما واتّبع إرشاداته على الخريطة."
    ),
    checklist: [
      t("I started politely: « Pardon, madame / monsieur… ».", "J'ai commencé poliment : « Pardon, madame / monsieur… ».", "بدأت بأدب: «Pardon, madame / monsieur…»."),
      t("I gave at least four steps.", "J'ai donné au moins quatre étapes.", "ذكرت أربع خطوات على الأقل."),
      t("I thanked the person.", "J'ai remercié la personne.", "شكرت الشخص."),
    ],
  },
  test: [
    { kind: "choice", id: "u05-t1", prompt: t("« Je vais ___ banque. »", "« Je vais ___ banque. »", "«Je vais ___ banque.»"), options: ["au", "à la", "à le"], correctIndex: 1 },
    { kind: "choice", id: "u05-t2", prompt: t("« Il habite près ___ parc. »", "« Il habite près ___ parc. »", "«Il habite près ___ parc.»"), options: ["du", "de le", "de la"], correctIndex: 0 },
    { kind: "choice", id: "u05-t3", prompt: t("« Nous allons ___ magasins. »", "« Nous allons ___ magasins. »", "«Nous allons ___ magasins.»"), options: ["aux", "à les", "des"], correctIndex: 0 },
    { kind: "choice", id: "u05-t4", prompt: t("Imperative (vous) of prendre:", "Impératif (vous) de prendre :", "صيغة الأمر (vous) من prendre:"), options: ["prends", "prenez", "prendez"], correctIndex: 1 },
    { kind: "choice", id: "u05-t5", prompt: t("Imperative (tu) of tourner:", "Impératif (tu) de tourner :", "صيغة الأمر (tu) من tourner:"), options: ["tournes", "tourne", "tournez"], correctIndex: 1 },
    { kind: "choice", id: "u05-t6", prompt: t("« En face de » means:", "« En face de » signifie :", "معنى «en face de»:"), optionsL10n: { en: ["next to", "opposite", "behind"], fr: ["tout près de", "de l'autre côté, face à", "derrière"], ar: ["بجانب", "مقابل", "خلف"] }, correctIndex: 1 },
    { kind: "choice", id: "u05-t7", prompt: t("Where do you buy bread?", "Où achète-t-on du pain ?", "أين نشتري الخبز؟"), options: ["à la poste", "à la boulangerie", "à la mairie"], correctIndex: 1 },
    { kind: "choice", id: "u05-t8", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Il y a des cafés ici.", "Il y ont des cafés ici.", "Il sont des cafés ici."], correctIndex: 0 },
    { kind: "choice", id: "u05-t9", prompt: t("Which word has a nasal vowel?", "Quel mot contient une voyelle nasale ?", "أي كلمة فيها صوت أنفي؟"), options: ["bonne", "loin", "rue"], correctIndex: 1 },
    { kind: "choice", id: "u05-t10", prompt: t("In a French address, the number comes…", "Dans une adresse française, le numéro est…", "في العنوان الفرنسي يأتي الرقم…"), optionsL10n: { en: ["before the street", "after the town", "after the postcode"], fr: ["avant la rue", "après la ville", "après le code postal"], ar: ["قبل اسم الشارع", "بعد اسم المدينة", "بعد الرمز البريدي"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-ask-direction"],
  replaces: ["fr-a1-deep-city"],
};
