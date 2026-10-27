import { l10n as t, type CourseUnit } from "../types";

export const A2_U09: CourseUnit = {
  id: "fr-a2-u09-ville-campagne",
  level: "A2",
  order: 9,
  title: t("City or countryside?", "Ville ou campagne ?", "المدينة أم الريف؟"),
  theme: t(
    "Describing where you live, giving and justifying an opinion",
    "Décrire son lieu de vie, donner et justifier son opinion",
    "وصف مكان السكن، وإبداء الرأي وتبريره"
  ),
  canDo: [
    t("I can describe a town, a neighbourhood or a village.", "Je peux décrire une ville, un quartier ou un village.", "أستطيع أن أصف مدينة أو حيًّا أو قرية."),
    t("I can give my opinion and justify it.", "Je peux donner mon opinion et la justifier.", "أستطيع أن أبدي رأيي وأبرّره."),
    t("I can agree or disagree politely.", "Je peux exprimer mon accord ou mon désaccord poliment.", "أستطيع أن أوافق أو أعارض بأدب."),
    t("I can list advantages and drawbacks with connectors.", "Je peux présenter des avantages et des inconvénients avec des connecteurs.", "أستطيع أن أعرض المزايا والعيوب باستخدام أدوات الربط."),
  ],
  context: t(
    "Nadia lives in Lyon. Her brother Karim has just moved to a village in the Drôme. On the phone, they compare their lives.",
    "Nadia habite à Lyon. Son frère Karim vient de s'installer dans un village de la Drôme. Au téléphone, ils comparent leurs vies.",
    "تسكن نادية في مدينة ليون. وقد انتقل أخوها كريم للتوّ إلى قرية في منطقة دروم. يقارنان حياتيهما عبر الهاتف."
  ),
  dialogue: {
    title: t("Two lives, two opinions", "Deux vies, deux avis", "حياتان ورأيان"),
    setting: t("A phone call between Lyon and the Drôme", "Un appel entre Lyon et la Drôme", "مكالمة بين ليون ودروم"),
    lines: [
      { speaker: "Nadia", fr: "Alors, Karim, la vie à la campagne, ça te plaît ?" },
      { speaker: "Karim", fr: "Oui, beaucoup ! À mon avis, c'est plus calme et l'air est meilleur." },
      { speaker: "Nadia", fr: "D'accord, mais il n'y a rien à faire, non ?" },
      { speaker: "Karim", fr: "Je ne suis pas d'accord. Il y a un marché le samedi, des randonnées et une association de musique." },
      { speaker: "Nadia", fr: "Et pour aller au travail ?" },
      { speaker: "Karim", fr: "C'est vrai, c'est l'inconvénient : il faut une voiture, parce qu'il n'y a qu'un bus par jour." },
      { speaker: "Nadia", fr: "Moi, je trouve que la ville est plus pratique. Tout est près : le métro, les cinémas, les magasins." },
      { speaker: "Karim", fr: "Oui, mais c'est bruyant, c'est pollué et les loyers sont très chers." },
      { speaker: "Nadia", fr: "Tu as raison pour les loyers. D'ailleurs, mon appartement est deux fois plus petit que ta maison !" },
      { speaker: "Karim", fr: "Tu vois ! Et les gens se connaissent, ici. Mes voisins m'ont déjà invité à dîner." },
      { speaker: "Nadia", fr: "C'est sympa. Pourtant, je pense que je m'ennuierais un peu." },
      { speaker: "Karim", fr: "Viens passer un week-end, et après, tu me donneras ton avis !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u09-c1", prompt: t("Where does Karim live now?", "Où habite Karim maintenant ?", "أين يسكن كريم الآن؟"), optionsL10n: { en: ["In a village", "In Lyon", "In Paris"], fr: ["Dans un village", "À Lyon", "À Paris"], ar: ["في قرية", "في ليون", "في باريس"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-c2", prompt: t("What is the main drawback for Karim?", "Quel est le principal inconvénient pour Karim ?", "ما العيب الرئيسي بالنسبة إلى كريم؟"), optionsL10n: { en: ["Transport: he needs a car", "The noise", "The rent"], fr: ["Les transports : il faut une voiture", "Le bruit", "Le loyer"], ar: ["المواصلات: يحتاج إلى سيارة", "الضجيج", "الإيجار"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-c3", prompt: t("What does Nadia like about the city?", "Qu'est-ce que Nadia aime en ville ?", "ماذا تحب نادية في المدينة؟"), optionsL10n: { en: ["Everything is close", "It's quiet", "The air"], fr: ["Tout est près", "C'est calme", "L'air"], ar: ["كل شيء قريب", "الهدوء", "الهواء"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-c4", prompt: t("On what point does Nadia agree with Karim?", "Sur quel point Nadia est-elle d'accord avec Karim ?", "في أي نقطة توافق نادية كريمًا؟"), optionsL10n: { en: ["Rents are expensive in the city", "There is nothing to do in the country", "The bus is practical"], fr: ["Les loyers sont chers en ville", "Il n'y a rien à faire à la campagne", "Le bus est pratique"], ar: ["الإيجارات غالية في المدينة", "لا يوجد ما يُفعل في الريف", "الحافلة عملية"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Places and living environment", "Lieux et cadre de vie", "الأماكن وبيئة العيش"),
      items: [
        { fr: "le quartier", gender: "m", meaning: t("neighbourhood", "partie d'une ville", "الحيّ") },
        { fr: "la banlieue", gender: "f", meaning: t("suburbs", "autour d'une grande ville", "الضواحي") },
        { fr: "le village", gender: "m", meaning: t("village", "petite commune à la campagne", "القرية") },
        { fr: "le loyer", gender: "m", meaning: t("rent", "argent payé chaque mois pour un logement", "الإيجار") },
        { fr: "les transports en commun", gender: "m", meaning: t("public transport", "bus, métro, tram", "المواصلات العامة") },
        { fr: "les espaces verts", gender: "m", meaning: t("green spaces", "parcs et jardins", "المساحات الخضراء") },
        { fr: "bruyant / calme", meaning: t("noisy / quiet", "beaucoup ou peu de bruit", "صاخب / هادئ") },
        { fr: "pollué / pratique", meaning: t("polluted / convenient", "qualités d'un lieu", "ملوَّث / عملي") },
        { fr: "s'ennuyer", meaning: t("to be bored", "ne pas savoir quoi faire", "يشعر بالملل") },
      ],
    },
    {
      title: t("Opinion and debate", "Opinion et débat", "الرأي والنقاش"),
      items: [
        { fr: "à mon avis", meaning: t("in my opinion", "pour donner son opinion", "في رأيي") },
        { fr: "je trouve que / je pense que", meaning: t("I find that / I think that", "+ indicatif", "أجد أنّ / أعتقد أنّ") },
        { fr: "je suis d'accord / pas d'accord", meaning: t("I agree / disagree", "accord ou désaccord", "أوافق / لا أوافق") },
        { fr: "tu as raison / tort", meaning: t("you're right / wrong", "juger l'avis de l'autre", "أنت محقّ / مخطئ") },
        { fr: "l'avantage / l'inconvénient", gender: "m", meaning: t("advantage / drawback", "points positifs et négatifs", "الميزة / العيب") },
        { fr: "pourtant", meaning: t("yet, however", "opposition", "ومع ذلك") },
        { fr: "d'ailleurs", meaning: t("besides, actually", "ajoute un argument", "وبالمناسبة / علاوة على ذلك") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u09-g1",
      title: t("Giving an opinion", "Exprimer son opinion", "التعبير عن الرأي"),
      explanation: t(
        "To give your opinion: « À mon avis, … », « Pour moi, … », « Je pense que… », « Je trouve que… », « Je crois que… » followed by the indicative. To react: « Je suis d'accord (avec toi) », « Je ne suis pas d'accord », « Tu as raison », « Ce n'est pas faux, mais… ». Always justify with « parce que » or « car ».",
        "Pour donner son opinion : « À mon avis, … », « Pour moi, … », « Je pense que… », « Je trouve que… », « Je crois que… » + indicatif. Pour réagir : « Je suis d'accord (avec toi) », « Je ne suis pas d'accord », « Tu as raison », « Ce n'est pas faux, mais… ». On justifie toujours avec « parce que » ou « car ».",
        "لإبداء الرأي: «À mon avis, …» و«Pour moi, …» و«Je pense que…» و«Je trouve que…» و«Je crois que…» ويليها فعل في صيغة الإخبار (indicatif). وللتفاعل: «Je suis d'accord (avec toi)» و«Je ne suis pas d'accord» و«Tu as raison» و«Ce n'est pas faux, mais…». وبرّر دائمًا بـ«parce que» أو «car»."
      ),
      examples: [
        { fr: "Je trouve que la ville est plus pratique parce que tout est près.", gloss: t("I find the city more convenient because everything is close.", "Opinion + justification.", "أجد أن المدينة أكثر عملية لأن كل شيء قريب.") },
        { fr: "Je ne suis pas d'accord : il y a beaucoup d'activités ici.", gloss: t("I disagree: there are lots of activities here.", "Désaccord justifié.", "لا أوافق: هناك أنشطة كثيرة هنا.") },
      ],
      watchOut: t(
        "Say « je suis d'accord », never « j'ai d'accord ». And « avoir raison / tort » uses avoir: « tu as raison ».",
        "On dit « je suis d'accord », jamais « j'ai d'accord ». Et « avoir raison / tort » se construit avec avoir : « tu as raison ».",
        "نقول «je suis d'accord» وليس «j'ai d'accord» أبدًا. أما «avoir raison / tort» فتُستخدم مع avoir: «tu as raison»."
      ),
    },
    {
      id: "a2u09-g2",
      title: t("Restriction: ne… que", "La restriction : ne… que", "الحصر: ne… que"),
      explanation: t(
        "« Ne… que » means « only » (= seulement). It is not a negation: « Il n'y a qu'un bus par jour » = there is only one bus a day. « Ne » goes before the verb and « que » before the word you restrict. In the passé composé: « Je n'ai vu que deux magasins ».",
        "« Ne… que » signifie « seulement ». Ce n'est pas une négation : « Il n'y a qu'un bus par jour » = il y a seulement un bus par jour. « Ne » se place avant le verbe et « que » devant le mot qu'on limite. Au passé composé : « Je n'ai vu que deux magasins ».",
        "«ne… que» تعني «فقط» (= seulement)، وليست نفيًا: «Il n'y a qu'un bus par jour» = لا توجد إلا حافلة واحدة في اليوم. تأتي «ne» قبل الفعل و«que» قبل الكلمة المحصورة. وفي الماضي المركّب: «Je n'ai vu que deux magasins»."
      ),
      examples: [
        { fr: "Le village n'a qu'une boulangerie.", gloss: t("The village has only one bakery.", "ne… que = seulement.", "ليس في القرية إلا مخبز واحد.") },
        { fr: "Elle ne travaille que le matin.", gloss: t("She only works in the morning.", "que devant « le matin ».", "لا تعمل إلا في الصباح.") },
      ],
    },
    {
      id: "a2u09-g3",
      title: t("Linking arguments", "Articuler ses arguments", "ربط الحجج"),
      explanation: t(
        "To organise a short argument: « d'abord » (first), « ensuite » (then), « de plus / d'ailleurs » (moreover), « enfin » (finally). To oppose: « mais », « pourtant » (yet), « par contre » (on the other hand). To conclude: « donc » (so). Comparisons from unit 4 help a lot: « deux fois plus petit que ».",
        "Pour organiser un petit argumentaire : « d'abord », « ensuite », « de plus / d'ailleurs », « enfin ». Pour opposer : « mais », « pourtant », « par contre ». Pour conclure : « donc ». Les comparaisons de l'unité 4 aident beaucoup : « deux fois plus petit que ».",
        "لتنظيم حجّة قصيرة: «d'abord» (أولًا)، «ensuite» (ثم)، «de plus / d'ailleurs» (علاوة على ذلك)، «enfin» (أخيرًا). وللمعارضة: «mais» و«pourtant» (ومع ذلك) و«par contre» (في المقابل). وللاستنتاج: «donc» (إذن). وتساعد كثيرًا المقارنات من الوحدة 4: «deux fois plus petit que»."
      ),
      examples: [
        { fr: "D'abord, c'est calme. Ensuite, les loyers sont moins chers. Par contre, il faut une voiture.", gloss: t("First, it's quiet. Then, rents are cheaper. On the other hand, you need a car.", "Argumentaire organisé.", "أولًا، المكان هادئ. ثم إن الإيجارات أرخص. في المقابل، تحتاج إلى سيارة.") },
        { fr: "Il pleut souvent ; pourtant, j'adore cette ville.", gloss: t("It often rains; yet I love this city.", "pourtant = opposition.", "تمطر كثيرًا؛ ومع ذلك أحب هذه المدينة.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Intonation of opinion and contrast", "L'intonation de l'opinion et de l'opposition", "التنغيم في الرأي والمعارضة"),
    explanation: t(
      "When you oppose two ideas, the voice rises on the first part and falls at the end: « C'est calme ↗, mais il faut une voiture ↘. » Stress the connector slightly: « POURtant », « par CONtre ». A strong opinion ends with a clear fall.",
      "Quand on oppose deux idées, la voix monte sur la première partie et descend à la fin : « C'est calme ↗, mais il faut une voiture ↘. » On insiste un peu sur le connecteur : « pourtant », « par contre ». Une opinion ferme se termine par une descente nette.",
      "عند المقابلة بين فكرتين يرتفع الصوت في الجزء الأول وينخفض في النهاية: «C'est calme ↗, mais il faut une voiture ↘.» ونشدّد قليلًا على أداة الربط: «pourtant» و«par contre». والرأي الحاسم ينتهي بانخفاض واضح."
    ),
    examples: ["C'est calme, mais il faut une voiture.", "À mon avis, la ville est plus pratique.", "Pourtant, je m'ennuierais.", "Par contre, les loyers sont chers."],
  },
  culture: {
    title: t("Leaving the big cities", "Quitter les grandes villes", "مغادرة المدن الكبرى"),
    body: t(
      "France is very centralised around Paris and a few big cities, but many people dream of a quieter life. Since the 2020s, more and more city dwellers have moved to medium-sized towns or villages, sometimes thanks to remote work. Rural areas offer space and lower prices, but public services (doctors, shops, transport) can be far away: this is a frequent topic of debate on TV and in exams like the DELF.",
      "La France est très centralisée autour de Paris et de quelques grandes villes, mais beaucoup de gens rêvent d'une vie plus calme. Depuis les années 2020, de plus en plus de citadins s'installent dans des villes moyennes ou des villages, parfois grâce au télétravail. La campagne offre de l'espace et des prix plus bas, mais les services publics (médecins, commerces, transports) peuvent être loin : c'est un sujet de débat fréquent à la télévision et dans les examens comme le DELF.",
      "فرنسا شديدة المركزية حول باريس وبعض المدن الكبرى، لكن كثيرين يحلمون بحياة أهدأ. ومنذ عشرينيات هذا القرن ينتقل عدد متزايد من سكان المدن إلى مدن متوسطة أو قرى، أحيانًا بفضل العمل عن بُعد. ويوفّر الريف مساحة وأسعارًا أقل، لكن الخدمات العامة (الأطباء والمتاجر والمواصلات) قد تكون بعيدة، وهذا موضوع نقاش متكرر في التلفزيون وفي امتحانات مثل DELF."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u09-p1", prompt: t("Complete: « in my opinion ».", "Complétez : « à mon… ».", "أكمل: «في رأيي»."), sentence: "À mon ___, la campagne est plus agréable.", answers: ["avis"] },
    { kind: "fill", id: "a2u09-p2", prompt: t("être or avoir?", "être ou avoir ?", "être أم avoir؟"), sentence: "Je ne ___ pas d'accord avec toi.", answers: ["suis"] },
    { kind: "fill", id: "a2u09-p3", prompt: t("être or avoir?", "être ou avoir ?", "être أم avoir؟"), sentence: "Tu ___ raison, c'est trop cher.", answers: ["as"] },
    { kind: "fill", id: "a2u09-p4", prompt: t("Complete with « qu' » (ne… que).", "Complétez avec « qu' » (ne… que).", "أكمل بـ«qu'» (ne… que)."), sentence: "Il n'y a ___un bus par jour.", answers: ["qu'"] },
    { kind: "fill", id: "a2u09-p5", prompt: t("Opposition connector (yet).", "Connecteur d'opposition.", "أداة معارضة (ومع ذلك)."), sentence: "C'est loin ; ___, j'adore ce village.", answers: ["pourtant"] },
    { kind: "choice", id: "a2u09-p6", prompt: t("« Elle ne mange que des légumes » means…", "« Elle ne mange que des légumes » signifie…", "«Elle ne mange que des légumes» تعني…"), optionsL10n: { en: ["She only eats vegetables.", "She doesn't eat vegetables.", "She eats a lot of vegetables."], fr: ["Elle mange seulement des légumes.", "Elle ne mange pas de légumes.", "Elle mange beaucoup de légumes."], ar: ["لا تأكل إلا الخضروات.", "لا تأكل الخضروات.", "تأكل الكثير من الخضروات."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-p7", prompt: t("Which word adds an argument?", "Quel mot ajoute un argument ?", "أي كلمة تضيف حجّة؟"), options: ["de plus", "par contre", "pourtant"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-p8", prompt: t("The opposite of « bruyant »:", "Le contraire de « bruyant » :", "عكس «bruyant»:"), options: ["calme", "pollué", "pratique"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-p9", prompt: t("Polite disagreement:", "Désaccord poli :", "معارضة مهذّبة:"), options: ["Ce n'est pas faux, mais je pense que…", "Tu dis n'importe quoi.", "Non. Point."], correctIndex: 0 },
    { kind: "order", id: "a2u09-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je trouve que la ville est plus pratique." },
    { kind: "order", id: "a2u09-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Le village n'a qu'une boulangerie." },
  ],
  production: {
    prompt: t(
      "Forum post (80–100 words): « Ville ou campagne : où est-ce qu'on vit le mieux ? » Give your opinion, two advantages and one drawback, use connectors and conclude.",
      "Message de forum (80 à 100 mots) : « Ville ou campagne : où est-ce qu'on vit le mieux ? » Donnez votre opinion, deux avantages et un inconvénient, utilisez des connecteurs et concluez.",
      "منشور في منتدى (80 إلى 100 كلمة): «المدينة أم الريف: أين نعيش بشكل أفضل؟» أبدِ رأيك، واذكر ميزتين وعيبًا واحدًا، واستخدم أدوات الربط ثم اختم."
    ),
    model: "À mon avis, on vit mieux dans une ville moyenne. D'abord, c'est plus calme qu'une grande ville et les loyers sont moins chers. Ensuite, il y a quand même des transports en commun, des cinémas et des espaces verts. Par contre, il n'y a pas beaucoup de travail dans certains domaines et on doit parfois aller loin pour voir un spécialiste. Pourtant, je pense que c'est le meilleur compromis : on a la tranquillité de la campagne et les avantages de la ville. Donc, je ne voudrais pas habiter à Paris !",
    checklist: [
      t("I clearly state my opinion (à mon avis, je pense que…).", "Je donne clairement mon opinion (à mon avis, je pense que…).", "عبّرت عن رأيي بوضوح (à mon avis, je pense que…)."),
      t("I give at least two advantages and one drawback.", "Je donne au moins deux avantages et un inconvénient.", "ذكرت ميزتين على الأقل وعيبًا واحدًا."),
      t("I use at least four connectors (d'abord, ensuite, par contre, donc…).", "J'utilise au moins quatre connecteurs (d'abord, ensuite, par contre, donc…).", "استخدمت أربع أدوات ربط على الأقل (d'abord, ensuite, par contre, donc…)."),
      t("I use a comparison or « ne… que ».", "J'utilise une comparaison ou « ne… que ».", "استخدمت مقارنة أو «ne… que»."),
    ],
  },
  task: {
    title: t("Mini debate", "Mini-débat", "نقاش مصغّر"),
    brief: t(
      "With a partner (or recording yourself in two voices), debate for two minutes: one defends the city, the other the countryside. Each person gives two arguments, reacts to the other's arguments and concedes one point.",
      "Avec un partenaire (ou en vous enregistrant à deux voix), débattez pendant deux minutes : l'un défend la ville, l'autre la campagne. Chacun donne deux arguments, réagit aux arguments de l'autre et reconnaît un point.",
      "مع شريك (أو بتسجيل نفسك بصوتين)، تناقشا لمدة دقيقتين: أحدكما يدافع عن المدينة والآخر عن الريف. يقدّم كلٌّ منكما حجّتين، ويردّ على حجج الآخر، ويعترف له بنقطة واحدة."
    ),
    checklist: [
      t("I gave two justified arguments.", "J'ai donné deux arguments justifiés.", "قدّمت حجّتين مبرّرتين."),
      t("I agreed or disagreed politely.", "J'ai exprimé mon accord ou mon désaccord poliment.", "وافقت أو عارضت بأدب."),
      t("I conceded a point (« tu as raison pour… »).", "J'ai reconnu un point (« tu as raison pour… »).", "اعترفت بنقطة («tu as raison pour…»)."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u09-t1", prompt: t("Complete: « Je ___ d'accord. »", "Complétez : « Je ___ d'accord. »", "أكمل: «Je ___ d'accord.»"), options: ["suis", "ai", "fais"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t2", prompt: t("Complete: « Vous ___ tort. »", "Complétez : « Vous ___ tort. »", "أكمل: «Vous ___ tort.»"), options: ["êtes", "avez", "faites"], correctIndex: 1 },
    { kind: "choice", id: "a2u09-t3", prompt: t("« Il n'a que vingt euros » means…", "« Il n'a que vingt euros » signifie…", "«Il n'a que vingt euros» تعني…"), optionsL10n: { en: ["He only has twenty euros.", "He doesn't have twenty euros.", "He has more than twenty euros."], fr: ["Il a seulement vingt euros.", "Il n'a pas vingt euros.", "Il a plus de vingt euros."], ar: ["ليس معه إلا عشرون يورو.", "ليس معه عشرون يورو.", "معه أكثر من عشرين يورو."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-t4", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Je ne travaille que le lundi.", "Je travaille ne que le lundi.", "Je ne que travaille le lundi."], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t5", prompt: t("Which connector expresses opposition?", "Quel connecteur exprime l'opposition ?", "أي أداة ربط تعبّر عن المعارضة؟"), options: ["par contre", "ensuite", "donc"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t6", prompt: t("Which connector concludes?", "Quel connecteur sert à conclure ?", "أي أداة ربط تُستخدم للاستنتاج؟"), options: ["donc", "d'abord", "pourtant"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t7", prompt: t("The money you pay each month for a flat:", "L'argent qu'on paie chaque mois pour un appartement :", "المال الذي يُدفع شهريًا مقابل شقة:"), options: ["le loyer", "le quartier", "la banlieue"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t8", prompt: t("« Je pense que la ville ___ plus pratique. »", "« Je pense que la ville ___ plus pratique. »", "«Je pense que la ville ___ plus pratique.»"), options: ["est", "être", "étant"], correctIndex: 0 },
    { kind: "choice", id: "a2u09-t9", prompt: t("In « C'est calme, mais il faut une voiture », the voice…", "Dans « C'est calme, mais il faut une voiture », la voix…", "في «C'est calme, mais il faut une voiture» الصوت…"), optionsL10n: { en: ["rises on « calme », falls at the end", "falls on « calme », rises at the end", "stays flat"], fr: ["monte sur « calme », descend à la fin", "descend sur « calme », monte à la fin", "reste plate"], ar: ["يرتفع عند «calme» وينخفض في النهاية", "ينخفض عند «calme» ويرتفع في النهاية", "يبقى ثابتًا"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u09-t10", prompt: t("Many French city dwellers moved to the countryside partly thanks to…", "Beaucoup de citadins se sont installés à la campagne en partie grâce…", "انتقل كثير من سكان المدن الفرنسيين إلى الريف جزئيًا بفضل…"), optionsL10n: { en: ["remote work", "cheaper petrol", "new motorways"], fr: ["au télétravail", "à l'essence moins chère", "aux nouvelles autoroutes"], ar: ["العمل عن بُعد", "البنزين الأرخص", "الطرق السريعة الجديدة"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
};
