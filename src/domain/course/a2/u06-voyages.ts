import { l10n as t, type CourseUnit } from "../types";

export const A2_U06: CourseUnit = {
  id: "fr-a2-u06-voyages",
  level: "A2",
  order: 6,
  title: t("Travelling", "En voyage", "في السفر"),
  theme: t(
    "Checking in at a hotel, planning visits, talking about the future",
    "S'enregistrer à l'hôtel, organiser des visites, parler de l'avenir",
    "تسجيل الوصول في الفندق، وتنظيم الزيارات، والحديث عن المستقبل"
  ),
  canDo: [
    t("I can check in at a hotel and ask about services.", "Je peux m'enregistrer à l'hôtel et me renseigner sur les services.", "أستطيع أن أسجّل وصولي في الفندق وأستفسر عن الخدمات."),
    t("I can talk about my plans with the simple future.", "Je peux parler de mes projets avec le futur simple.", "أستطيع أن أتحدث عن خططي بصيغة المستقبل البسيط."),
    t("I can understand a weather forecast and tourist advice.", "Je peux comprendre une météo et des conseils touristiques.", "أستطيع أن أفهم النشرة الجوية والنصائح السياحية."),
    t("I can refer to a place without repeating it (y).", "Je peux parler d'un lieu sans le répéter (y).", "أستطيع أن أشير إلى مكان من دون تكرار اسمه (y)."),
  ],
  context: t(
    "Hiba and Sami arrive in Marseille for a long weekend. They check in at their hotel near the Old Port, and the receptionist gives them some advice.",
    "Hiba et Sami arrivent à Marseille pour un long week-end. Ils s'enregistrent à leur hôtel près du Vieux-Port, et la réceptionniste leur donne des conseils.",
    "تصل هبة وسامي إلى مرسيليا لقضاء عطلة نهاية أسبوع طويلة. يسجّلان وصولهما في فندقهما قرب الميناء القديم، وتقدّم لهما موظفة الاستقبال بعض النصائح."
  ),
  dialogue: {
    title: t("At the hotel reception", "À la réception de l'hôtel", "في استقبال الفندق"),
    setting: t("A hotel near the Old Port, Marseille", "Un hôtel près du Vieux-Port, à Marseille", "فندق قرب الميناء القديم في مرسيليا"),
    lines: [
      { speaker: "Réceptionniste", fr: "Bonsoir, bienvenue à l'hôtel du Port ! Vous avez une réservation ?" },
      { speaker: "Hiba", fr: "Bonsoir. Oui, au nom de Mansour, pour trois nuits." },
      { speaker: "Réceptionniste", fr: "Mansour… Oui, une chambre double avec vue sur la mer, du 12 au 15 mai. Je peux voir une pièce d'identité ?" },
      { speaker: "Hiba", fr: "Voilà mon passeport." },
      { speaker: "Réceptionniste", fr: "Merci. Le petit-déjeuner est servi de 7 heures à 10 heures. Votre chambre est la 304, au troisième étage. Voici votre clé." },
      { speaker: "Sami", fr: "Merci. Il y a le wifi dans la chambre ?" },
      { speaker: "Réceptionniste", fr: "Oui, le code est sur la carte. Vous êtes ici pour le tourisme ?" },
      { speaker: "Sami", fr: "Oui, c'est la première fois que nous venons à Marseille." },
      { speaker: "Réceptionniste", fr: "Alors, je vous conseille les calanques. Vous y irez en bateau depuis le Vieux-Port : c'est magnifique." },
      { speaker: "Hiba", fr: "Super, merci ! Il fera beau demain ?" },
      { speaker: "Réceptionniste", fr: "Oui, la météo annonce du soleil. Il fera vingt-six degrés." },
      { speaker: "Sami", fr: "Parfait. Demain matin, nous visiterons Notre-Dame-de-la-Garde, et l'après-midi, nous prendrons le bateau." },
      { speaker: "Réceptionniste", fr: "Excellent programme ! Le jour du départ, vous devrez libérer la chambre avant 11 heures." },
      { speaker: "Hiba", fr: "Entendu. Est-ce qu'on pourra laisser nos valises ici jusqu'au soir ?" },
      { speaker: "Réceptionniste", fr: "Bien sûr, nous les garderons à la réception." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u06-c1", prompt: t("How many nights will they stay?", "Combien de nuits restent-ils ?", "كم ليلة سيقيمان؟"), options: ["2", "3", "4"], correctIndex: 1 },
    { kind: "choice", id: "a2u06-c2", prompt: t("What does the receptionist recommend?", "Que conseille la réceptionniste ?", "بماذا تنصح موظفة الاستقبال؟"), optionsL10n: { en: ["The calanques by boat", "A museum", "A restaurant"], fr: ["Les calanques en bateau", "Un musée", "Un restaurant"], ar: ["الخلجان الصخرية بالقارب", "متحفًا", "مطعمًا"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u06-c3", prompt: t("What will the weather be like tomorrow?", "Quel temps fera-t-il demain ?", "كيف سيكون الطقس غدًا؟"), optionsL10n: { en: ["Sunny, 26 °C", "Rainy", "Cold and windy"], fr: ["Du soleil, 26 degrés", "De la pluie", "Froid et du vent"], ar: ["مشمس، 26 درجة", "ممطر", "بارد وعاصف"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u06-c4", prompt: t("By what time must they leave the room?", "Avant quelle heure doivent-ils libérer la chambre ?", "قبل أي ساعة يجب أن يغادرا الغرفة؟"), options: ["10 h", "11 h", "12 h"], correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("At the hotel", "À l'hôtel", "في الفندق"),
      items: [
        { fr: "la réservation", gender: "f", meaning: t("booking", "chambre retenue à l'avance", "الحجز") },
        { fr: "une chambre simple / double", gender: "f", meaning: t("single / double room", "pour une / deux personnes", "غرفة مفردة / مزدوجة") },
        { fr: "une pièce d'identité", gender: "f", meaning: t("ID document", "passeport ou carte d'identité", "وثيقة هوية") },
        { fr: "la clé", gender: "f", meaning: t("key", "pour ouvrir la porte", "المفتاح") },
        { fr: "le petit-déjeuner compris", gender: "m", meaning: t("breakfast included", "inclus dans le prix", "الإفطار مشمول") },
        { fr: "libérer la chambre", meaning: t("to check out (leave the room)", "quitter la chambre", "يغادر الغرفة (يسلّمها)") },
        { fr: "la valise", gender: "f", meaning: t("suitcase", "bagage", "الحقيبة") },
        { fr: "la vue sur la mer", gender: "f", meaning: t("sea view", "on voit la mer depuis la chambre", "إطلالة على البحر") },
      ],
    },
    {
      title: t("Travel and sightseeing", "Voyage et visites", "السفر والزيارات"),
      items: [
        { fr: "le séjour", gender: "m", meaning: t("stay", "période passée dans un lieu", "الإقامة") },
        { fr: "visiter un monument", meaning: t("to visit a monument", "découvrir un lieu célèbre", "يزور معلمًا") },
        { fr: "faire une excursion", meaning: t("to go on an excursion", "petit voyage d'une journée", "يقوم برحلة قصيرة") },
        { fr: "l'office de tourisme", gender: "m", meaning: t("tourist office", "bureau d'information pour les visiteurs", "مكتب السياحة") },
        { fr: "conseiller", meaning: t("to advise, to recommend", "donner un avis utile", "ينصح") },
        { fr: "la météo annonce…", meaning: t("the forecast says…", "selon les prévisions…", "تتوقّع النشرة الجوية…") },
        { fr: "du … au …", meaning: t("from … to … (dates)", "pour une période", "من … إلى … (تواريخ)") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u06-g1",
      title: t("The simple future (futur simple)", "Le futur simple", "المستقبل البسيط"),
      explanation: t(
        "The futur simple talks about future actions, plans and forecasts. For most verbs: infinitive + -ai, -as, -a, -ons, -ez, -ont (verbs in -re drop the final e: prendre → je prendrai). Common irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, devoir → devr-, venir → viendr-, voir → verr-, vouloir → voudr-. The near future (aller + infinitive) is more common in speech for things that are planned or close.",
        "Le futur simple exprime des actions futures, des projets et des prévisions. Pour la plupart des verbes : infinitif + -ai, -as, -a, -ons, -ez, -ont (les verbes en -re perdent le e final : prendre → je prendrai). Radicaux irréguliers fréquents : être → ser-, avoir → aur-, aller → ir-, faire → fer-, pouvoir → pourr-, devoir → devr-, venir → viendr-, voir → verr-, vouloir → voudr-. À l'oral, le futur proche (aller + infinitif) est plus courant pour ce qui est prévu ou proche.",
        "يعبّر المستقبل البسيط عن الأفعال المستقبلية والمشاريع والتوقّعات. ولمعظم الأفعال: المصدر + -ai و-as و-a و-ons و-ez و-ont (وتحذف أفعال -re حرف e الأخير: prendre ← je prendrai). ومن الجذور الشاذة الشائعة: être ← ser-، وavoir ← aur-، وaller ← ir-، وfaire ← fer-، وpouvoir ← pourr-، وdevoir ← devr-، وvenir ← viendr-، وvoir ← verr-، وvouloir ← voudr-. وفي الكلام يكون المستقبل القريب (aller + مصدر) أكثر شيوعًا لما هو مخطّط له أو قريب."
      ),
      table: {
        head: ["", "visiter", "prendre", "aller", "faire"],
        rows: [
          ["je / j'", "visiterai", "prendrai", "irai", "ferai"],
          ["tu", "visiteras", "prendras", "iras", "feras"],
          ["il / elle / on", "visitera", "prendra", "ira", "fera"],
          ["nous", "visiterons", "prendrons", "irons", "ferons"],
          ["vous", "visiterez", "prendrez", "irez", "ferez"],
          ["ils / elles", "visiteront", "prendront", "iront", "feront"],
        ],
      },
      examples: [
        { fr: "Demain, il fera beau et nous irons à la plage.", gloss: t("Tomorrow the weather will be nice and we'll go to the beach.", "faire, aller.", "غدًا سيكون الجو جميلًا وسنذهب إلى الشاطئ.") },
        { fr: "Vous devrez libérer la chambre avant 11 heures.", gloss: t("You will have to leave the room before 11.", "devoir → devr-.", "سيكون عليكم مغادرة الغرفة قبل الحادية عشرة.") },
      ],
      watchOut: t(
        "« Il y a » in the future is « il y aura »; « c'est » becomes « ce sera ».",
        "Au futur, « il y a » devient « il y aura » et « c'est » devient « ce sera ».",
        "في المستقبل تصبح «il y a» على شكل «il y aura»، و«c'est» تصبح «ce sera»."
      ),
    },
    {
      id: "a2u06-g2",
      title: t("The pronoun « y »", "Le pronom « y »", "الضمير «y»"),
      explanation: t(
        "« Y » replaces a place introduced by à, en, dans, chez, sur…: « Vous irez aux calanques » → « Vous y irez »; « Je vais chez Paul » → « J'y vais ». It also replaces « à + thing » with verbs like penser à, réfléchir à: « Nous penserons à votre conseil » → « Nous y penserons ». It goes before the verb: « On n'y va pas », « J'y suis allé ».",
        "« Y » remplace un lieu introduit par à, en, dans, chez, sur… : « Vous irez aux calanques » → « Vous y irez » ; « Je vais chez Paul » → « J'y vais ». Il remplace aussi « à + chose » avec des verbes comme penser à, réfléchir à : « Nous penserons à votre conseil » → « Nous y penserons ». Il se place avant le verbe : « On n'y va pas », « J'y suis allé ».",
        "يحلّ «y» محلّ مكان تسبقه à أو en أو dans أو chez أو sur…: «Vous irez aux calanques» ← «Vous y irez»، و«Je vais chez Paul» ← «J'y vais». ويحلّ أيضًا محلّ «à + شيء» مع أفعال مثل penser à وréfléchir à: «Nous penserons à votre conseil» ← «Nous y penserons». ويوضع قبل الفعل: «On n'y va pas» و«J'y suis allé»."
      ),
      examples: [
        { fr: "Tu connais Nice ? — Oui, j'y ai passé mes vacances.", gloss: t("Do you know Nice? — Yes, I spent my holidays there.", "y = à Nice.", "هل تعرف نيس؟ — نعم، قضيت إجازتي هناك.") },
        { fr: "Le musée ? On y va demain.", gloss: t("The museum? We're going there tomorrow.", "y + présent.", "المتحف؟ سنذهب إليه غدًا.") },
        { fr: "Vas-y !", gloss: t("Go ahead! / Go there!", "Impératif : vas-y (avec un s).", "هيّا! / اذهب إلى هناك!") },
      ],
      watchOut: t(
        "For people, don't use « y »: « Je pense à ma mère » → « Je pense à elle ».",
        "Pour une personne, on n'utilise pas « y » : « Je pense à ma mère » → « Je pense à elle ».",
        "لا تُستخدم «y» للأشخاص: «Je pense à ma mère» ← «Je pense à elle»."
      ),
    },
    {
      id: "a2u06-g3",
      title: t("Time expressions for travel", "Exprimer le temps en voyage", "التعبير عن الزمن في السفر"),
      explanation: t(
        "Dates: « du 12 au 15 mai » (from… to…). Starting point: « à partir de lundi », « dès 7 heures » (from 7, as early as 7). Limit: « jusqu'à 10 heures », « jusqu'au soir » (until). Deadline: « avant 11 heures », « après le dîner ». Duration of a stay: « pour trois nuits », « pendant une semaine ».",
        "Dates : « du 12 au 15 mai ». Point de départ : « à partir de lundi », « dès 7 heures ». Limite : « jusqu'à 10 heures », « jusqu'au soir ». Échéance : « avant 11 heures », « après le dîner ». Durée d'un séjour : « pour trois nuits », « pendant une semaine ».",
        "للتواريخ: «du 12 au 15 mai» (من… إلى…). ولنقطة البداية: «à partir de lundi» و«dès 7 heures» (ابتداءً من، منذ الساعة 7). وللحدّ: «jusqu'à 10 heures» و«jusqu'au soir» (حتى). وللموعد النهائي: «avant 11 heures» و«après le dîner». ولمدة الإقامة: «pour trois nuits» و«pendant une semaine»."
      ),
      examples: [
        { fr: "La piscine est ouverte de 8 heures à 20 heures.", gloss: t("The pool is open from 8 a.m. to 8 p.m.", "de… à…", "المسبح مفتوح من الثامنة صباحًا حتى الثامنة مساءً.") },
        { fr: "Nous serons à Lyon à partir du 3 juin.", gloss: t("We will be in Lyon from 3 June.", "à partir de + futur.", "سنكون في ليون ابتداءً من 3 يونيو.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Hearing the future: the [ʁ] before the ending", "Entendre le futur : le [ʁ] avant la terminaison", "سماع المستقبل: الصوت [ʁ] قبل النهاية"),
    explanation: t(
      "The futur simple always has an [ʁ] sound just before the ending. Compare the present « je visite » with the future « je visiterai », « il part » with « il partira ». In speech, the « e » before r often disappears: « nous visiterons » sounds like [vizitʁɔ̃].",
      "Le futur simple a toujours un son [ʁ] juste avant la terminaison. Comparez le présent « je visite » et le futur « je visiterai », « il part » et « il partira ». À l'oral, le « e » avant le r disparaît souvent : « nous visiterons » se prononce [vizitʁɔ̃].",
      "في المستقبل البسيط يوجد دائمًا صوت [ʁ] قبل النهاية مباشرة. قارن المضارع «je visite» بالمستقبل «je visiterai»، و«il part» بـ«il partira». وفي الكلام يختفي غالبًا حرف «e» الذي يسبق r: «nous visiterons» تُنطق [vizitʁɔ̃]."
    ),
    examples: ["je visite — je visiterai", "il part — il partira", "nous visiterons", "ils iront", "Il fera vingt-six degrés."],
  },
  culture: {
    title: t("Holidays in France", "Les vacances en France", "العطلات في فرنسا"),
    body: t(
      "Besides hotels, many travellers stay in « gîtes » (holiday cottages), « chambres d'hôtes » (B&Bs) or campsites. Most accommodation adds a small « taxe de séjour » (tourist tax) per person and per night, set by the town. Check-out time is usually between 10 a.m. and noon. Around Marseille, the Calanques — limestone inlets between Marseille and Cassis — have been a national park since 2012: in summer, access to some areas can be limited because of fire risk.",
      "En plus des hôtels, beaucoup de voyageurs logent dans des gîtes, des chambres d'hôtes ou des campings. La plupart des hébergements ajoutent une petite taxe de séjour par personne et par nuit, fixée par la commune. On libère en général la chambre entre 10 heures et midi. Près de Marseille, les Calanques — des criques entre Marseille et Cassis — forment un parc national depuis 2012 : l'été, l'accès à certaines zones peut être limité à cause du risque d'incendie.",
      "إلى جانب الفنادق، يقيم كثير من المسافرين في «gîtes» (بيوت ريفية للعطلات) أو «chambres d'hôtes» (غرف ضيافة مع إفطار) أو في المخيّمات. وتضيف معظم أماكن الإقامة «taxe de séjour» (ضريبة إقامة سياحية) صغيرة عن كل شخص وكل ليلة تحدّدها البلدية. وتُسلَّم الغرفة عادةً بين العاشرة صباحًا والظهر. وقرب مرسيليا تُشكّل «Calanques» — وهي خلجان صخرية بين مرسيليا وكاسيس — حديقة وطنية منذ عام 2012، وفي الصيف قد يُقيَّد الوصول إلى بعض مناطقها بسبب خطر الحرائق."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u06-p1", prompt: t("Futur simple of visiter.", "Futur simple de visiter.", "المستقبل البسيط من visiter."), sentence: "Nous ___ le musée demain.", answers: ["visiterons"] },
    { kind: "fill", id: "a2u06-p2", prompt: t("Futur simple of être.", "Futur simple d'être.", "المستقبل البسيط من être."), sentence: "Je ___ à Paris lundi.", answers: ["serai"] },
    { kind: "fill", id: "a2u06-p3", prompt: t("Futur simple of faire (weather).", "Futur simple de faire (météo).", "المستقبل البسيط من faire (الطقس)."), sentence: "Il ___ chaud ce week-end.", answers: ["fera"] },
    { kind: "fill", id: "a2u06-p4", prompt: t("Futur simple of aller.", "Futur simple d'aller.", "المستقبل البسيط من aller."), sentence: "Ils ___ à Nice en train.", answers: ["iront"] },
    { kind: "fill", id: "a2u06-p5", prompt: t("Futur simple of pouvoir.", "Futur simple de pouvoir.", "المستقبل البسيط من pouvoir."), sentence: "Vous ___ laisser vos valises ici.", answers: ["pourrez"] },
    { kind: "fill", id: "a2u06-p6", prompt: t("Replace the place with « y ».", "Remplacez le lieu par « y ».", "استبدل المكان بـ«y»."), sentence: "Je vais à la plage. → J'___ vais.", answers: ["y"] },
    { kind: "fill", id: "a2u06-p7", prompt: t("Future of « il y a ».", "Futur de « il y a ».", "المستقبل من «il y a»."), sentence: "Demain, il y ___ du vent.", answers: ["aura"] },
    { kind: "choice", id: "a2u06-p8", prompt: t("« Tu penses à ton voyage ? — Oui, j'___ pense souvent. »", "« Tu penses à ton voyage ? — Oui, j'___ pense souvent. »", "«Tu penses à ton voyage ? — Oui, j'___ pense souvent.»"), options: ["y", "en", "le"], correctIndex: 0 },
    { kind: "choice", id: "a2u06-p9", prompt: t("« Le restaurant est ouvert ___ 19 h ___ 23 h. »", "« Le restaurant est ouvert ___ 19 h ___ 23 h. »", "«Le restaurant est ouvert ___ 19 h ___ 23 h.»"), options: ["de… à…", "du… au…", "depuis… jusque…"], correctIndex: 0 },
    { kind: "order", id: "a2u06-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Vous y irez en bateau." },
    { kind: "order", id: "a2u06-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Est-ce qu'on pourra laisser nos valises ici ?" },
  ],
  production: {
    prompt: t(
      "You are going to spend three days in a French-speaking city. Write your programme (80–100 words) in the futur simple: where you will stay, what you will visit, how you will travel. Add the weather forecast. Use « y » at least once.",
      "Vous allez passer trois jours dans une ville francophone. Écrivez votre programme (80 à 100 mots) au futur simple : où vous logerez, ce que vous visiterez, comment vous vous déplacerez. Ajoutez la météo. Utilisez « y » au moins une fois.",
      "ستقضي ثلاثة أيام في مدينة ناطقة بالفرنسية. اكتب برنامجك (80 إلى 100 كلمة) بصيغة المستقبل البسيط: أين ستقيم، وماذا ستزور، وكيف ستتنقّل. وأضف توقّعات الطقس. واستخدم «y» مرة واحدة على الأقل."
    ),
    model: "Du 3 au 5 août, je serai à Québec. Je logerai dans une chambre d'hôtes près du Vieux-Québec. Le premier jour, je visiterai le château Frontenac et je me promènerai sur la terrasse Dufferin. Le deuxième jour, je prendrai le traversier pour Lévis : on y voit toute la ville. Le dernier jour, j'irai aux chutes Montmorency en bus. La météo annonce du soleil et il fera environ vingt-cinq degrés. Je pense que ce sera un séjour magnifique !",
    checklist: [
      t("I use the futur simple, with at least two irregular verbs.", "J'utilise le futur simple, avec au moins deux verbes irréguliers.", "استخدمت المستقبل البسيط مع فعلين شاذّين على الأقل."),
      t("I use « y » to avoid repeating a place.", "J'utilise « y » pour ne pas répéter un lieu.", "استخدمت «y» لتجنّب تكرار مكان."),
      t("I give dates or times (du… au…, à partir de…).", "Je donne des dates ou des heures (du… au…, à partir de…).", "ذكرت تواريخ أو أوقاتًا (du… au…، à partir de…)."),
      t("I describe the weather in the future.", "Je décris la météo au futur.", "وصفت الطقس بصيغة المستقبل."),
    ],
  },
  task: {
    title: t("Plan a real trip", "Préparer un vrai séjour", "خطّط لرحلة حقيقية"),
    brief: t(
      "Choose a French-speaking destination. On the website of its tourist office, find three things to do and the opening hours of one place. Check the forecast. Then present your three-day programme aloud in French, in the futur simple, in two minutes.",
      "Choisissez une destination francophone. Sur le site de son office de tourisme, trouvez trois activités et les horaires d'ouverture d'un lieu. Consultez la météo. Présentez ensuite votre programme de trois jours à voix haute, en français, au futur simple, en deux minutes.",
      "اختر وجهة ناطقة بالفرنسية. وعلى موقع مكتب السياحة فيها ابحث عن ثلاثة أنشطة ومواعيد فتح مكان واحد. واطّلع على النشرة الجوية. ثم قدّم برنامجك لثلاثة أيام بصوت عالٍ بالفرنسية وبصيغة المستقبل البسيط في دقيقتين."
    ),
    checklist: [
      t("I used real information from a tourist office website.", "J'ai utilisé de vraies informations d'un office de tourisme.", "استخدمت معلومات حقيقية من موقع مكتب سياحة."),
      t("I spoke in the futur simple.", "J'ai parlé au futur simple.", "تحدّثت بصيغة المستقبل البسيط."),
      t("I gave opening hours with de… à… or jusqu'à…", "J'ai donné des horaires avec de… à… ou jusqu'à…", "ذكرت مواعيد الفتح بـde… à… أو jusqu'à…."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u06-t1", prompt: t("Futur simple of « avoir » (nous):", "Futur simple d'« avoir » (nous) :", "المستقبل البسيط من «avoir» (nous):"), options: ["nous avrons", "nous aurons", "nous avons"], correctIndex: 1 },
    { kind: "choice", id: "a2u06-t2", prompt: t("Futur simple of « venir » (tu):", "Futur simple de « venir » (tu) :", "المستقبل البسيط من «venir» (tu):"), options: ["tu viendras", "tu veniras", "tu viens"], correctIndex: 0 },
    { kind: "choice", id: "a2u06-t3", prompt: t("Futur simple of « prendre » (je):", "Futur simple de « prendre » (je) :", "المستقبل البسيط من «prendre» (je):"), options: ["je prenderai", "je prendrai", "je prendre"], correctIndex: 1 },
    { kind: "choice", id: "a2u06-t4", prompt: t("« Demain, ___ beau. »", "« Demain, ___ beau. »", "«Demain, ___ beau.»"), options: ["il fera", "il faira", "il sera"], correctIndex: 0 },
    { kind: "choice", id: "a2u06-t5", prompt: t("« Tu vas à Rome ? — Oui, j'___ vais en juin. »", "« Tu vas à Rome ? — Oui, j'___ vais en juin. »", "«Tu vas à Rome ? — Oui, j'___ vais en juin.»"), options: ["en", "y", "la"], correctIndex: 1 },
    { kind: "choice", id: "a2u06-t6", prompt: t("Negative: « Nous y allons. »", "Négation : « Nous y allons. »", "النفي: «Nous y allons.»"), options: ["Nous n'y allons pas.", "Nous y n'allons pas.", "Nous n'allons y pas."], correctIndex: 0 },
    { kind: "choice", id: "a2u06-t7", prompt: t("Future of « c'est »:", "Futur de « c'est » :", "المستقبل من «c'est»:"), options: ["ce sera", "ce aura", "c'était"], correctIndex: 0 },
    { kind: "choice", id: "a2u06-t8", prompt: t("« Libérer la chambre » means:", "« Libérer la chambre », c'est :", "«Libérer la chambre» تعني:"), optionsL10n: { en: ["to leave the room at check-out", "to book a room", "to clean the room"], fr: ["quitter la chambre au départ", "réserver une chambre", "nettoyer la chambre"], ar: ["مغادرة الغرفة عند انتهاء الإقامة", "حجز غرفة", "تنظيف الغرفة"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u06-t9", prompt: t("Which form is in the futur simple?", "Quelle forme est au futur simple ?", "أي صيغة في المستقبل البسيط؟"), options: ["il part", "il partira", "il partait"], correctIndex: 1 },
    { kind: "choice", id: "a2u06-t10", prompt: t("The « taxe de séjour » is…", "La taxe de séjour, c'est…", "«taxe de séjour» هي…"), optionsL10n: { en: ["a small tax per person and per night", "a visa fee", "the breakfast price"], fr: ["une petite taxe par personne et par nuit", "le prix d'un visa", "le prix du petit-déjeuner"], ar: ["ضريبة صغيرة عن كل شخص وكل ليلة", "رسوم تأشيرة", "سعر الإفطار"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-check-in", "goal-hotel-request"],
  replaces: ["fr-a2-hotel-unit", "fr-day-airport"],
};
