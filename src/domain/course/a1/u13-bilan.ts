import { l10n as t, type CourseUnit } from "../types";

/** End-of-level review in the format of the DELF A1 (four skills). */
export const A1_U13: CourseUnit = {
  id: "fr-a1-exam-bilan",
  level: "A1",
  order: 13,
  title: t("A1 review — DELF A1 preparation", "Bilan A1 — préparation au DELF A1", "مراجعة المستوى A1 — التحضير لامتحان DELF A1"),
  theme: t(
    "Reviewing the level and training for the four parts of the DELF A1",
    "Réviser le niveau et s'entraîner aux quatre épreuves du DELF A1",
    "مراجعة المستوى والتدرّب على أقسام امتحان DELF A1 الأربعة"
  ),
  canDo: [
    t("I can understand a short phone message about everyday life.", "Je peux comprendre un court message téléphonique sur la vie quotidienne.", "أستطيع أن أفهم رسالة هاتفية قصيرة عن الحياة اليومية."),
    t("I can read simple notices, messages and forms.", "Je peux lire des annonces, des messages et des formulaires simples.", "أستطيع أن أقرأ إعلانات ورسائل واستمارات بسيطة."),
    t("I can fill in a form and write a short message (40–50 words).", "Je peux remplir un formulaire et écrire un court message (40 à 50 mots).", "أستطيع أن أملأ استمارة وأكتب رسالة قصيرة (40 إلى 50 كلمة)."),
    t("I can introduce myself, ask questions and handle a simple transaction orally.", "Je peux me présenter, poser des questions et réaliser un achat simple à l'oral.", "أستطيع أن أقدّم نفسي، وأطرح أسئلة، وأُنجز عملية شراء بسيطة شفهيًا."),
  ],
  context: t(
    "You have finished the twelve A1 units. This review brings together everything you have learnt and trains you in the format of the DELF A1, the official diploma awarded by the French Ministry of Education. The site prepares you; the diploma itself is taken in an approved exam centre.",
    "Vous avez terminé les douze unités A1. Ce bilan rassemble ce que vous avez appris et vous entraîne au format du DELF A1, le diplôme officiel délivré par le ministère français de l'Éducation nationale. Le site vous prépare ; le diplôme se passe dans un centre d'examen agréé.",
    "لقد أنهيت وحدات المستوى A1 الاثنتي عشرة. تجمع هذه المراجعة كل ما تعلّمته وتدرّبك على صيغة امتحان DELF A1، وهو الشهادة الرسمية التي تمنحها وزارة التربية الوطنية الفرنسية. الموقع يُعدّك للامتحان، أما الشهادة نفسها فتُجرى في مركز امتحان معتمد."
  ),
  dialogue: {
    title: t("Listening document: a voicemail", "Document sonore : un message sur répondeur", "وثيقة سمعية: رسالة على المجيب الآلي"),
    setting: t(
      "As in the DELF A1 listening paper: listen twice, then answer.",
      "Comme à l'épreuve de compréhension de l'oral du DELF A1 : écoutez deux fois, puis répondez.",
      "كما في قسم الفهم السمعي في امتحان DELF A1: استمع مرتين ثم أجب."
    ),
    lines: [
      { speaker: "Antoine", fr: "Allô Julie ? C'est Antoine." },
      { speaker: "Antoine", fr: "Samedi prochain, c'est l'anniversaire de Marc. Il va avoir vingt-cinq ans !" },
      { speaker: "Antoine", fr: "On fait une petite fête chez moi, à vingt heures." },
      { speaker: "Antoine", fr: "Mon adresse, c'est le 15, rue des Lilas, au deuxième étage. Le code de la porte, c'est le 4 8 1 2." },
      { speaker: "Antoine", fr: "Tu peux apporter un dessert ? Une tarte, par exemple." },
      { speaker: "Antoine", fr: "Attention, c'est une surprise : ne dis rien à Marc !" },
      { speaker: "Antoine", fr: "Rappelle-moi au 06 72 14 38 90. Bisous, à samedi !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u13-c1", prompt: t("Why does Antoine call?", "Pourquoi Antoine téléphone-t-il ?", "لماذا يتصل أنطوان؟"), optionsL10n: { en: ["To invite Julie to a party", "To cancel a dinner", "To ask for an address"], fr: ["Pour inviter Julie à une fête", "Pour annuler un dîner", "Pour demander une adresse"], ar: ["لدعوة جولي إلى حفلة", "لإلغاء عشاء", "للسؤال عن عنوان"] }, correctIndex: 0 },
    { kind: "choice", id: "u13-c2", prompt: t("What time is the party?", "À quelle heure est la fête ?", "في أي ساعة الحفلة؟"), options: ["18 h", "20 h", "21 h"], correctIndex: 1 },
    { kind: "choice", id: "u13-c3", prompt: t("What is the address?", "Quelle est l'adresse ?", "ما العنوان؟"), options: ["5, rue des Lilas", "15, rue des Lilas", "50, rue des Lilas"], correctIndex: 1 },
    { kind: "choice", id: "u13-c4", prompt: t("What must Julie bring?", "Qu'est-ce que Julie doit apporter ?", "ماذا يجب أن تُحضر جولي؟"), optionsL10n: { en: ["Drinks", "A dessert", "A present"], fr: ["Des boissons", "Un dessert", "Un cadeau"], ar: ["مشروبات", "حلوى", "هدية"] }, correctIndex: 1 },
    { kind: "choice", id: "u13-c5", prompt: t("What is Antoine's phone number?", "Quel est le numéro d'Antoine ?", "ما رقم هاتف أنطوان؟"), options: ["06 72 14 38 90", "06 62 14 48 90", "06 72 40 38 19"], correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Exam instructions", "Les consignes de l'examen", "تعليمات الامتحان"),
      items: [
        { fr: "Écoutez le document.", meaning: t("Listen to the recording.", "consigne d'écoute", "استمع إلى الوثيقة.") },
        { fr: "Lisez le texte.", meaning: t("Read the text.", "consigne de lecture", "اقرأ النص.") },
        { fr: "Répondez aux questions.", meaning: t("Answer the questions.", "donner des réponses", "أجب عن الأسئلة.") },
        { fr: "Cochez la bonne réponse.", meaning: t("Tick the right answer.", "mettre une croix ☒", "ضع علامة على الإجابة الصحيحة.") },
        { fr: "Vrai ou faux ?", meaning: t("True or false?", "dire si c'est exact", "صح أم خطأ؟") },
        { fr: "Complétez le formulaire.", meaning: t("Fill in the form.", "écrire les informations demandées", "املأ الاستمارة.") },
        { fr: "Écrivez un message de 40 à 50 mots.", meaning: t("Write a message of 40–50 words.", "production écrite", "اكتب رسالة من 40 إلى 50 كلمة.") },
        { fr: "Présentez-vous.", meaning: t("Introduce yourself.", "première partie de l'oral", "قدّم نفسك.") },
      ],
    },
    {
      title: t("Useful phrases for the speaking test", "Phrases utiles pour l'oral", "عبارات مفيدة للامتحان الشفهي"),
      items: [
        { fr: "Pouvez-vous répéter, s'il vous plaît ?", meaning: t("Could you repeat, please?", "demander de répéter", "هل يمكنك أن تعيد من فضلك؟") },
        { fr: "Pouvez-vous parler plus lentement ?", meaning: t("Could you speak more slowly?", "demander de ralentir", "هل يمكنك أن تتحدث ببطء أكثر؟") },
        { fr: "Je ne comprends pas.", meaning: t("I don't understand.", "dire qu'on ne comprend pas", "لا أفهم.") },
        { fr: "Comment dit-on… en français ?", meaning: t("How do you say… in French?", "demander un mot", "كيف نقول… بالفرنسية؟") },
        { fr: "Je ne sais pas.", meaning: t("I don't know.", "ne pas savoir", "لا أعرف.") },
      ],
    },
  ],
  grammar: [
    {
      id: "u13-g1",
      title: t("Review: key verbs in the present", "Bilan : les verbes essentiels au présent", "مراجعة: الأفعال الأساسية في المضارع"),
      explanation: t(
        "These five verbs appear in almost every A1 task. Check that you know them without looking: être (identity, nationality, job), avoir (age, possession, mal à), aller (direction, near future), faire (activities, weather), and -er verbs such as parler.",
        "Ces cinq verbes reviennent dans presque toutes les tâches du niveau A1. Vérifiez que vous les connaissez sans regarder : être (identité, nationalité, profession), avoir (âge, possession, mal à), aller (direction, futur proche), faire (activités, météo), et les verbes en -er comme parler.",
        "تتكرّر هذه الأفعال الخمسة في كل مهام المستوى A1 تقريبًا. تأكّد أنك تعرفها من دون النظر: être (الهوية والجنسية والمهنة)، وavoir (العمر والملكية وavoir mal à)، وaller (الاتجاه والمستقبل القريب)، وfaire (الأنشطة والطقس)، وأفعال -er مثل parler."
      ),
      table: {
        head: ["", "être", "avoir", "aller", "faire", "parler"],
        rows: [
          ["je / j'", "suis", "ai", "vais", "fais", "parle"],
          ["tu", "es", "as", "vas", "fais", "parles"],
          ["il / elle / on", "est", "a", "va", "fait", "parle"],
          ["nous", "sommes", "avons", "allons", "faisons", "parlons"],
          ["vous", "êtes", "avez", "allez", "faites", "parlez"],
          ["ils / elles", "sont", "ont", "vont", "font", "parlent"],
        ],
      },
      examples: [
        { fr: "Vous faites quoi le week-end ?", gloss: t("What do you do at weekends?", "faire : vous faites (pas « vous faisez »).", "ماذا تفعلون في عطلة نهاية الأسبوع؟") },
        { fr: "Il fait froid et nous sommes fatigués.", gloss: t("It's cold and we're tired.", "faire (météo) + être.", "الجو بارد ونحن متعبون.") },
      ],
    },
    {
      id: "u13-g2",
      title: t("Review: articles", "Bilan : les articles", "مراجعة: الأدوات"),
      explanation: t(
        "One table for all A1 articles. Indefinite (something new): un, une, des. Definite (known, or after aimer): le, la, l', les. Partitive (unspecified quantity): du, de la, de l', des. After a negative or a quantity: de / d'. Contracted with à and de: au, aux, du, des.",
        "Un tableau pour tous les articles du niveau A1. Indéfini (élément nouveau) : un, une, des. Défini (connu, ou après aimer) : le, la, l', les. Partitif (quantité non précise) : du, de la, de l', des. Après une négation ou une quantité : de / d'. Contractés avec à et de : au, aux, du, des.",
        "جدول واحد لكل أدوات المستوى A1. النكرة (شيء جديد): un وune وdes. والمعرفة (شيء معروف، أو بعد aimer): le وla وl' وles. والتبعيض (كمية غير محدّدة): du وde la وde l' وdes. وبعد النفي أو الكمية: de / d'. والمندمجة مع à وde: au وaux وdu وdes."
      ),
      table: {
        head: ["", "masculin", "féminin", "pluriel"],
        rows: [
          ["indéfini", "un café", "une tarte", "des fruits"],
          ["défini", "le café", "la tarte", "les fruits"],
          ["partitif", "du café", "de la tarte", "des fruits"],
          ["négation / quantité", "pas de café", "un peu de tarte", "beaucoup de fruits"],
          ["à + article", "au cinéma", "à la gare", "aux magasins"],
        ],
      },
      examples: [
        { fr: "J'aime le thé, alors je prends du thé, mais je ne prends pas de sucre.", gloss: t("I like tea, so I'm having tea, but no sugar.", "défini / partitif / négation.", "أحب الشاي، لذا آخذ شايًا، لكن من دون سكر.") },
      ],
    },
    {
      id: "u13-g3",
      title: t("Review: present, near future, passé composé", "Bilan : présent, futur proche, passé composé", "مراجعة: المضارع والمستقبل القريب والماضي المركّب"),
      explanation: t(
        "At A1 you can talk about three moments. Now / habits: present (« je travaille »). Plans: aller + infinitive (« je vais travailler »). Finished actions: passé composé with avoir or être (« j'ai travaillé », « je suis parti »). Time markers help you choose: d'habitude → present; demain, la semaine prochaine → near future; hier, la semaine dernière → passé composé.",
        "Au niveau A1, vous pouvez parler de trois moments. Maintenant ou habitudes : le présent (« je travaille »). Projets : aller + infinitif (« je vais travailler »). Actions terminées : le passé composé avec avoir ou être (« j'ai travaillé », « je suis parti »). Les indicateurs de temps aident à choisir : d'habitude → présent ; demain, la semaine prochaine → futur proche ; hier, la semaine dernière → passé composé.",
        "في المستوى A1 تستطيع أن تتحدث عن ثلاثة أزمنة. الآن أو العادات: المضارع («je travaille»). والمشاريع: aller + مصدر («je vais travailler»). والأحداث المنتهية: الماضي المركّب مع avoir أو être («j'ai travaillé»، «je suis parti»). وتساعدك ظروف الزمان على الاختيار: d'habitude ← المضارع؛ وdemain وla semaine prochaine ← المستقبل القريب؛ وhier وla semaine dernière ← الماضي المركّب."
      ),
      examples: [
        { fr: "D'habitude, je prends le bus. Hier, j'ai pris un taxi. Demain, je vais prendre mon vélo.", gloss: t("Usually I take the bus. Yesterday I took a taxi. Tomorrow I'm going to take my bike.", "Trois moments.", "عادةً آخذ الحافلة. أمس أخذت سيارة أجرة. غدًا سآخذ درّاجتي.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Speaking test strategies", "Stratégies pour l'épreuve orale", "استراتيجيات للامتحان الشفهي"),
    explanation: t(
      "In the oral test, examiners value clear communication over speed. Speak calmly, make the obligatory liaisons (vous_avez, les_enfants), use rising intonation for questions, and don't be afraid to ask the examiner to repeat: it is part of real communication. Practise these sentences until they come easily.",
      "À l'oral, les examinateurs apprécient une communication claire plus que la vitesse. Parlez calmement, faites les liaisons obligatoires (vous_avez, les_enfants), montez la voix pour les questions et n'ayez pas peur de demander de répéter : cela fait partie de la vraie communication. Entraînez-vous sur ces phrases jusqu'à ce qu'elles viennent facilement.",
      "في الامتحان الشفهي يقدّر الممتحنون التواصل الواضح أكثر من السرعة. تحدّث بهدوء، وطبّق الوصل الإجباري (vous_avez، les_enfants)، وارفع صوتك في الأسئلة، ولا تخف من أن تطلب من الممتحن الإعادة: فهذا جزء من التواصل الحقيقي. تدرّب على هذه الجمل حتى تخرج منك بسهولة."
    ),
    examples: [
      "Bonjour, je m'appelle… J'ai… ans. J'habite à…",
      "Pouvez-vous répéter, s'il vous plaît ?",
      "Vous avez des enfants ?",
      "Je voudrais un billet pour Lyon, s'il vous plaît.",
      "Ça fait combien ?",
    ],
  },
  culture: {
    title: t("The DELF A1 in practice", "Le DELF A1 en pratique", "امتحان DELF A1 عمليًا"),
    body: t(
      "The DELF (Diplôme d'études en langue française) is issued by France Éducation international for the French Ministry of Education and is valid for life. The A1 exam has four parts, each marked out of 25: listening (about 20 minutes), reading (30 minutes) and writing (30 minutes) are taken together; the speaking test (5–7 minutes, after 10 minutes of preparation) is individual. To pass, you need at least 50 out of 100, with a minimum of 5 out of 25 in each part. You register at an approved centre such as an Alliance Française or an Institut français.",
      "Le DELF (Diplôme d'études en langue française) est délivré par France Éducation international pour le ministère de l'Éducation nationale ; il est valable à vie. L'examen A1 comporte quatre épreuves notées chacune sur 25 : la compréhension de l'oral (environ 20 minutes), la compréhension des écrits (30 minutes) et la production écrite (30 minutes) se passent ensemble ; la production orale (5 à 7 minutes, après 10 minutes de préparation) est individuelle. Pour réussir, il faut au moins 50 sur 100, avec un minimum de 5 sur 25 à chaque épreuve. On s'inscrit dans un centre agréé, par exemple une Alliance française ou un Institut français.",
      "تمنح مؤسسة France Éducation international شهادة DELF (دبلوم دراسات اللغة الفرنسية) نيابةً عن وزارة التربية الوطنية الفرنسية، وهي صالحة مدى الحياة. ويتكوّن امتحان A1 من أربعة أقسام، لكل منها 25 درجة: الفهم السمعي (نحو 20 دقيقة)، والفهم القرائي (30 دقيقة)، والإنتاج الكتابي (30 دقيقة)، وتُجرى هذه الثلاثة معًا؛ أما الإنتاج الشفهي (من 5 إلى 7 دقائق بعد 10 دقائق تحضير) ففردي. وللنجاح تحتاج إلى 50 من 100 على الأقل، مع ألا تقل درجتك عن 5 من 25 في كل قسم. ويكون التسجيل في مركز معتمد مثل الأليانس فرانسيز أو المعهد الفرنسي."
    ),
  },
  practice: [
    {
      kind: "choice",
      id: "u13-p1",
      prompt: t(
        "Reading. Notice: « Boulangerie Martin — ouverte du mardi au dimanche, de 7 h à 19 h. Fermée le lundi. » Can you buy bread on Monday at 10 a.m.?",
        "Compréhension des écrits. Affiche : « Boulangerie Martin — ouverte du mardi au dimanche, de 7 h à 19 h. Fermée le lundi. » Peut-on acheter du pain le lundi à 10 h ?",
        "فهم المقروء. لافتة: «Boulangerie Martin — ouverte du mardi au dimanche, de 7 h à 19 h. Fermée le lundi.» هل يمكن شراء الخبز يوم الاثنين في العاشرة صباحًا؟"
      ),
      optionsL10n: { en: ["Yes", "No", "Only in the afternoon"], fr: ["Oui", "Non", "Seulement l'après-midi"], ar: ["نعم", "لا", "بعد الظهر فقط"] },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u13-p2",
      prompt: t(
        "Reading. Message: « Salut ! Je suis au café en face de la gare. Je t'attends jusqu'à 18 h. Léo » Where is Léo?",
        "Compréhension des écrits. Message : « Salut ! Je suis au café en face de la gare. Je t'attends jusqu'à 18 h. Léo » Où est Léo ?",
        "فهم المقروء. رسالة: «Salut ! Je suis au café en face de la gare. Je t'attends jusqu'à 18 h. Léo» أين ليو؟"
      ),
      optionsL10n: { en: ["At the station", "In a café opposite the station", "At home"], fr: ["À la gare", "Dans un café en face de la gare", "Chez lui"], ar: ["في المحطة", "في مقهى مقابل المحطة", "في بيته"] },
      correctIndex: 1,
    },
    { kind: "fill", id: "u13-p3", prompt: t("Form: write your nationality (feminine of « marocain »).", "Formulaire : nationalité (féminin de « marocain »).", "استمارة: الجنسية (مؤنّث «marocain»)."), sentence: "Nationalité : ___", answers: ["marocaine"] },
    { kind: "fill", id: "u13-p4", prompt: t("Conjugate faire.", "Conjuguez faire.", "صرّف الفعل faire."), sentence: "Vous ___ du sport ?", answers: ["faites"] },
    { kind: "fill", id: "u13-p5", prompt: t("Article.", "Article.", "الأداة."), sentence: "Je vais ___ cinéma ce soir.", answers: ["au"] },
    { kind: "fill", id: "u13-p6", prompt: t("Negative + article.", "Négation + article.", "النفي + الأداة."), sentence: "Je n'ai pas ___ voiture.", answers: ["de"] },
    { kind: "fill", id: "u13-p7", prompt: t("Passé composé.", "Passé composé.", "الماضي المركّب."), sentence: "Hier, nous ___ au restaurant. (aller)", answers: ["sommes allés", "sommes allées"] },
    { kind: "fill", id: "u13-p8", prompt: t("Near future.", "Futur proche.", "المستقبل القريب."), sentence: "Demain, il ___ pleuvoir.", answers: ["va"] },
    { kind: "order", id: "u13-p9", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Pouvez-vous répéter, s'il vous plaît ?" },
    { kind: "order", id: "u13-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "J'habite à Lyon depuis deux ans." },
  ],
  production: {
    prompt: t(
      "DELF A1 writing task. You have moved to a new town. Write a message (40–50 words) to a French-speaking friend: describe your new home and neighbourhood, say what you do there, and invite your friend for a weekend.",
      "Production écrite DELF A1. Vous habitez dans une nouvelle ville. Écrivez un message (40 à 50 mots) à un ami francophone : décrivez votre nouveau logement et votre quartier, dites ce que vous y faites et invitez votre ami pour un week-end.",
      "الإنتاج الكتابي في DELF A1. انتقلت إلى مدينة جديدة. اكتب رسالة (من 40 إلى 50 كلمة) إلى صديق ناطق بالفرنسية: صِف مسكنك الجديد وحيّك، واذكر ما تفعله هناك، وادعُ صديقك لقضاء عطلة نهاية أسبوع."
    ),
    model: "Salut Tom ! J'habite maintenant à Nantes. Mon appartement est petit mais très clair, au troisième étage. Le quartier est calme, avec un parc et beaucoup de cafés. Le samedi, je fais du vélo au bord de la Loire. Tu viens le week-end prochain ? Bises, Nour",
    checklist: [
      t("My message has 40 to 50 words.", "Mon message fait entre 40 et 50 mots.", "رسالتي بين 40 و50 كلمة."),
      t("I greet my friend and sign the message.", "Je salue mon ami et je signe le message.", "حيّيت صديقي ووقّعت الرسالة."),
      t("I describe my home and neighbourhood.", "Je décris mon logement et mon quartier.", "وصفت مسكني وحيّي."),
      t("I say what I do and I invite my friend (question).", "Je dis ce que je fais et j'invite mon ami (question).", "ذكرت ما أفعله ودعوت صديقي (بسؤال)."),
      t("I check verbs, agreement and articles.", "Je vérifie les verbes, les accords et les articles.", "راجعت الأفعال والتوافق والأدوات."),
    ],
  },
  task: {
    title: t("Mock speaking test (DELF A1 format)", "Oral blanc (format DELF A1)", "امتحان شفهي تجريبي (بصيغة DELF A1)"),
    brief: t(
      "Do the three parts aloud, ideally with a partner playing the examiner, and time yourself. 1) Guided interview (1 min): introduce yourself — name, age, nationality, city, job or studies, family, hobbies. 2) Exchange of information (2 min): ask at least six questions using these words: profession ? / week-end ? / sport ? / famille ? / vacances ? / cinéma ? 3) Simulated dialogue (2 min): at a bakery, buy two items, ask the price and pay.",
      "Faites les trois parties à voix haute, si possible avec un partenaire dans le rôle de l'examinateur, et chronométrez-vous. 1) Entretien dirigé (1 min) : présentez-vous — nom, âge, nationalité, ville, profession ou études, famille, loisirs. 2) Échange d'informations (2 min) : posez au moins six questions avec ces mots : profession ? / week-end ? / sport ? / famille ? / vacances ? / cinéma ? 3) Dialogue simulé (2 min) : dans une boulangerie, achetez deux produits, demandez le prix et payez.",
      "أدِّ الأقسام الثلاثة بصوت عالٍ، ويُفضَّل مع شريك يؤدي دور الممتحن، واحسب الوقت. 1) مقابلة موجّهة (دقيقة واحدة): قدّم نفسك — الاسم، والعمر، والجنسية، والمدينة، والمهنة أو الدراسة، والعائلة، والهوايات. 2) تبادل المعلومات (دقيقتان): اطرح ستة أسئلة على الأقل باستخدام هذه الكلمات: profession ? / week-end ? / sport ? / famille ? / vacances ? / cinéma ? 3) حوار تمثيلي (دقيقتان): في مخبز، اشترِ منتجين، واسأل عن السعر، وادفع."
    ),
    checklist: [
      t("I spoke for about one minute about myself without reading.", "J'ai parlé de moi environ une minute sans lire.", "تحدّثت عن نفسي نحو دقيقة من دون قراءة."),
      t("I asked six correct questions with vous.", "J'ai posé six questions correctes avec vous.", "طرحت ستة أسئلة صحيحة باستخدام vous."),
      t("In the bakery, I greeted, ordered politely, asked the price and said goodbye.", "À la boulangerie, j'ai salué, commandé poliment, demandé le prix et pris congé.", "في المخبز حيّيت، وطلبت بأدب، وسألت عن السعر، وودّعت."),
      t("When I didn't understand, I asked the examiner to repeat.", "Quand je n'ai pas compris, j'ai demandé de répéter.", "عندما لم أفهم طلبت من الممتحن الإعادة."),
    ],
  },
  test: [
    { kind: "choice", id: "u13-t1", prompt: t("« Comment vous appelez-vous ? » — best answer:", "« Comment vous appelez-vous ? » — meilleure réponse :", "«Comment vous appelez-vous ?» — أفضل إجابة:"), options: ["J'ai trente ans.", "Je m'appelle Nour Saleh.", "J'habite à Lille."], correctIndex: 1 },
    { kind: "choice", id: "u13-t2", prompt: t("« Elle ___ vingt-huit ans. »", "« Elle ___ vingt-huit ans. »", "«Elle ___ vingt-huit ans.»"), options: ["est", "a", "fait"], correctIndex: 1 },
    { kind: "choice", id: "u13-t3", prompt: t("« ___ parents habitent à Tunis. » (my)", "« ___ parents habitent à Tunis. » (je)", "«___ parents habitent à Tunis.» (لي)"), options: ["Mon", "Ma", "Mes"], correctIndex: 2 },
    { kind: "choice", id: "u13-t4", prompt: t("« Nous ___ à huit heures. » (se lever)", "« Nous ___ à huit heures. » (se lever)", "«Nous ___ à huit heures.» (se lever)"), options: ["nous levons", "se levons", "nous lèvons"], correctIndex: 0 },
    { kind: "choice", id: "u13-t5", prompt: t("« La pharmacie est à côté ___ hôpital. »", "« La pharmacie est à côté ___ hôpital. »", "«La pharmacie est à côté ___ hôpital.»"), options: ["du", "de l'", "de la"], correctIndex: 1 },
    { kind: "choice", id: "u13-t6", prompt: t("« Je voudrais ___ eau, s'il vous plaît. »", "« Je voudrais ___ eau, s'il vous plaît. »", "«Je voudrais ___ eau, s'il vous plaît.»"), options: ["du", "de l'", "de la"], correctIndex: 1 },
    { kind: "choice", id: "u13-t7", prompt: t("« Un kilo ___ oranges. »", "« Un kilo ___ oranges. »", "«Un kilo ___ oranges.»"), options: ["d'", "des", "les"], correctIndex: 0 },
    { kind: "choice", id: "u13-t8", prompt: t("« Il vient ___ Maroc. »", "« Il vient ___ Maroc. »", "«Il vient ___ Maroc.»"), options: ["de", "du", "au"], correctIndex: 1 },
    { kind: "choice", id: "u13-t9", prompt: t("« C'est un ___ appartement. »", "« C'est un ___ appartement. »", "«C'est un ___ appartement.»"), options: ["beau", "bel", "belle"], correctIndex: 1 },
    { kind: "choice", id: "u13-t10", prompt: t("« J'ai mal ___ pieds. »", "« J'ai mal ___ pieds. »", "«J'ai mal ___ pieds.»"), options: ["au", "aux", "à les"], correctIndex: 1 },
    { kind: "choice", id: "u13-t11", prompt: t("« Il ___ beau aujourd'hui. »", "« Il ___ beau aujourd'hui. »", "«Il ___ beau aujourd'hui.»"), options: ["est", "fait", "a"], correctIndex: 1 },
    { kind: "choice", id: "u13-t12", prompt: t("« Elle joue ___ violon. »", "« Elle joue ___ violon. »", "«Elle joue ___ violon.»"), options: ["au", "du", "le"], correctIndex: 1 },
    { kind: "choice", id: "u13-t13", prompt: t("« Hier, ils ___ un film. »", "« Hier, ils ___ un film. »", "«Hier, ils ___ un film.»"), options: ["ont vu", "sont vus", "vont voir"], correctIndex: 0 },
    { kind: "choice", id: "u13-t14", prompt: t("« Samedi dernier, Léa ___ au marché. »", "« Samedi dernier, Léa ___ au marché. »", "«Samedi dernier, Léa ___ au marché.»"), options: ["a allé", "est allée", "va aller"], correctIndex: 1 },
    { kind: "choice", id: "u13-t15", prompt: t("To pass the DELF A1, you need…", "Pour réussir le DELF A1, il faut…", "للنجاح في DELF A1 تحتاج إلى…"), optionsL10n: { en: ["50/100, with at least 5/25 in each part", "60/100 in total", "25/25 in speaking"], fr: ["50/100, avec au moins 5/25 à chaque épreuve", "60/100 au total", "25/25 à l'oral"], ar: ["50/100، مع 5/25 على الأقل في كل قسم", "60/100 في المجموع", "25/25 في الشفهي"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-a1-exam-listen", "fr-a1-exam-read", "fr-a1-exam-write", "fr-a1-exam-speak"],
};
