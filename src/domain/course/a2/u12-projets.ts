import { l10n as t, type CourseUnit } from "../types";

export const A2_U12: CourseUnit = {
  id: "fr-a2-u12-projets",
  level: "A2",
  order: 12,
  title: t("Plans and dreams", "Projets et rêves", "مشاريع وأحلام"),
  theme: t(
    "Talking about the future, wishes and conditions",
    "Parler de l'avenir, de ses souhaits et des conditions",
    "الحديث عن المستقبل والأمنيات والشروط"
  ),
  canDo: [
    t("I can talk about my plans for the coming years.", "Je peux parler de mes projets pour les années à venir.", "أستطيع أن أتحدث عن مشاريعي للسنوات القادمة."),
    t("I can express a wish or a dream with the conditional.", "Je peux exprimer un souhait ou un rêve au conditionnel.", "أستطيع أن أعبّر عن أمنية أو حلم بصيغة الشرط."),
    t("I can state a real condition with « si + présent ».", "Je peux exprimer une condition réelle avec « si + présent ».", "أستطيع أن أعبّر عن شرط واقعي بـ«si + présent»."),
    t("I can talk about a goal with « pour + infinitive ».", "Je peux parler d'un but avec « pour + infinitif ».", "أستطيع أن أتحدث عن هدف بـ«pour + مصدر»."),
  ],
  context: t(
    "At the end of their French course in Nantes, the students talk about their plans with their teacher, Madame Roussel.",
    "À la fin de leur cours de français à Nantes, les étudiants parlent de leurs projets avec leur professeure, Madame Roussel.",
    "في نهاية دورة اللغة الفرنسية في نانت، يتحدث الطلاب عن مشاريعهم مع أستاذتهم السيدة روسيل."
  ),
  dialogue: {
    title: t("And after the course?", "Et après le cours ?", "وماذا بعد الدورة؟"),
    setting: t("A classroom in Nantes, last day of the course", "Une salle de classe à Nantes, dernier jour du cours", "قاعة دراسة في نانت، اليوم الأخير من الدورة"),
    lines: [
      { speaker: "Mme Roussel", fr: "C'est notre dernier cours ! Quels sont vos projets pour l'année prochaine ?" },
      { speaker: "Omar", fr: "Je vais passer le DELF A2 en juin. Si je réussis, je m'inscrirai à l'université en septembre." },
      { speaker: "Mme Roussel", fr: "Très bien ! Qu'est-ce que tu voudrais étudier ?" },
      { speaker: "Omar", fr: "L'informatique. J'aimerais travailler pour une entreprise française." },
      { speaker: "Sofia", fr: "Moi, j'ai l'intention de chercher un stage dans un hôtel, pour pratiquer mon français tous les jours." },
      { speaker: "Mme Roussel", fr: "Et dans dix ans, comment est-ce que vous vous imaginez ?" },
      { speaker: "Sofia", fr: "Mon rêve, ce serait d'ouvrir ma propre maison d'hôtes au bord de la mer." },
      { speaker: "Omar", fr: "Moi, je voudrais vivre au Canada, à Montréal. On dit que la ville est très ouverte." },
      { speaker: "Sofia", fr: "Et vous, madame ? Si vous pouviez changer de vie, qu'est-ce que vous feriez ?" },
      { speaker: "Mme Roussel", fr: "Oh, je serais toujours professeure, mais j'aimerais enseigner dans plusieurs pays !" },
      { speaker: "Mme Roussel", fr: "En tout cas, si vous continuez à pratiquer, vous ferez de grands progrès. Bonne chance à tous !" },
      { speaker: "Omar", fr: "Merci, madame. On vous enverra des nouvelles !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u12-c1", prompt: t("What will Omar do if he passes the DELF?", "Que fera Omar s'il réussit le DELF ?", "ماذا سيفعل عمر إن نجح في DELF؟"), optionsL10n: { en: ["Enrol at university", "Move to Montréal at once", "Look for an internship in a hotel"], fr: ["Il s'inscrira à l'université.", "Il partira tout de suite à Montréal.", "Il cherchera un stage dans un hôtel."], ar: ["سيسجّل في الجامعة.", "سيسافر فورًا إلى مونتريال.", "سيبحث عن تدريب في فندق."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u12-c2", prompt: t("Why does Sofia want an internship in a hotel?", "Pourquoi Sofia veut-elle un stage dans un hôtel ?", "لماذا تريد صوفيا تدريبًا في فندق؟"), optionsL10n: { en: ["To practise French every day", "To earn a lot of money", "To travel for free"], fr: ["Pour pratiquer le français tous les jours", "Pour gagner beaucoup d'argent", "Pour voyager gratuitement"], ar: ["لتمارس الفرنسية يوميًا", "لتكسب الكثير من المال", "لتسافر مجانًا"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u12-c3", prompt: t("What is Sofia's dream?", "Quel est le rêve de Sofia ?", "ما حلم صوفيا؟"), optionsL10n: { en: ["To open a guest house by the sea", "To live in Montréal", "To become a teacher"], fr: ["Ouvrir une maison d'hôtes au bord de la mer", "Vivre à Montréal", "Devenir professeure"], ar: ["أن تفتح بيت ضيافة على شاطئ البحر", "أن تعيش في مونتريال", "أن تصبح أستاذة"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u12-c4", prompt: t("What would Madame Roussel like?", "Qu'est-ce que Madame Roussel aimerait ?", "ماذا تودّ السيدة روسيل؟"), optionsL10n: { en: ["To teach in several countries", "To stop teaching", "To open a hotel"], fr: ["Enseigner dans plusieurs pays", "Arrêter d'enseigner", "Ouvrir un hôtel"], ar: ["أن تدرّس في عدّة بلدان", "أن تتوقف عن التدريس", "أن تفتح فندقًا"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Studies and work plans", "Projets d'études et de travail", "مشاريع الدراسة والعمل"),
      items: [
        { fr: "le projet", gender: "m", meaning: t("plan, project", "ce qu'on veut faire", "المشروع") },
        { fr: "s'inscrire à", meaning: t("to enrol in, sign up for", "devenir membre / étudiant", "يسجّل في") },
        { fr: "réussir un examen", meaning: t("to pass an exam", "avoir un bon résultat", "ينجح في امتحان") },
        { fr: "rater / échouer à un examen", meaning: t("to fail an exam", "ne pas réussir", "يرسب في امتحان") },
        { fr: "le stage", gender: "m", meaning: t("internship", "période de travail pour apprendre", "التدريب العملي") },
        { fr: "le diplôme", gender: "m", meaning: t("degree, diploma", "document officiel après des études", "الشهادة") },
        { fr: "l'entreprise", gender: "f", meaning: t("company", "société", "الشركة") },
        { fr: "faire des progrès", meaning: t("to make progress", "s'améliorer", "يحرز تقدّمًا") },
      ],
    },
    {
      title: t("Wishes and intentions", "Souhaits et intentions", "الأمنيات والنوايا"),
      items: [
        { fr: "avoir l'intention de", meaning: t("to intend to", "projet décidé", "ينوي") },
        { fr: "compter + infinitif", meaning: t("to plan to", "« je compte partir »", "يعتزم") },
        { fr: "rêver de", meaning: t("to dream of", "« je rêve de voyager »", "يحلم بـ") },
        { fr: "j'aimerais / je voudrais", meaning: t("I would like", "souhait poli", "أودّ / أرغب") },
        { fr: "mon rêve, ce serait de…", meaning: t("my dream would be to…", "rêve au conditionnel", "حلمي سيكون أن…") },
        { fr: "à l'avenir / dans dix ans", meaning: t("in the future / in ten years", "expressions de temps", "في المستقبل / بعد عشر سنوات") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u12-g1",
      title: t("The conditional for wishes and dreams", "Le conditionnel pour les souhaits et les rêves", "صيغة الشرط للأمنيات والأحلام"),
      explanation: t(
        "You met the polite conditional in unit 7. It also expresses wishes and dreams. Formation: the future stem + imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient): j'aimerais, tu voudrais, il serait, nous aurions, vous feriez, ils pourraient. Irregular stems are the same as in the future: être → ser-, avoir → aur-, faire → fer-, aller → ir-, pouvoir → pourr-, vouloir → voudr-.",
        "Vous avez vu le conditionnel de politesse dans l'unité 7. Il exprime aussi les souhaits et les rêves. Formation : radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient) : j'aimerais, tu voudrais, il serait, nous aurions, vous feriez, ils pourraient. Les radicaux irréguliers sont les mêmes qu'au futur : être → ser-, avoir → aur-, faire → fer-, aller → ir-, pouvoir → pourr-, vouloir → voudr-.",
        "رأيت صيغة الشرط للتأدّب في الوحدة 7، وهي تعبّر أيضًا عن الأمنيات والأحلام. تكوينها: جذر المستقبل + نهايات الـimparfait ‏(-ais, -ais, -ait, -ions, -iez, -aient): j'aimerais وtu voudrais وil serait وnous aurions وvous feriez وils pourraient. والجذور الشاذة هي نفسها في المستقبل: être ← ser- وavoir ← aur- وfaire ← fer- وaller ← ir- وpouvoir ← pourr- وvouloir ← voudr-."
      ),
      table: {
        head: ["verbe", "futur", "conditionnel"],
        rows: [
          ["aimer", "j'aimerai", "j'aimerais"],
          ["être", "je serai", "je serais"],
          ["faire", "je ferai", "je ferais"],
          ["aller", "j'irai", "j'irais"],
          ["vouloir", "je voudrai", "je voudrais"],
        ],
      },
      examples: [
        { fr: "J'aimerais travailler pour une entreprise française.", gloss: t("I would like to work for a French company.", "Souhait.", "أودّ أن أعمل في شركة فرنسية.") },
        { fr: "Mon rêve, ce serait d'ouvrir une maison d'hôtes.", gloss: t("My dream would be to open a guest house.", "Rêve.", "حلمي سيكون أن أفتح بيت ضيافة.") },
      ],
      watchOut: t(
        "« J'aimerai » (future, I will like) and « j'aimerais » (conditional, I would like) sound almost the same but are written differently. For a wish, it's always -ais.",
        "« J'aimerai » (futur) et « j'aimerais » (conditionnel) se prononcent presque pareil mais ne s'écrivent pas de la même façon. Pour un souhait, c'est toujours -ais.",
        "«J'aimerai» (مستقبل: سأحبّ) و«j'aimerais» (شرط: أودّ) تُنطقان تقريبًا بالطريقة نفسها لكنهما تُكتبان بشكل مختلف. وللأمنية تكون النهاية دائمًا -ais."
      ),
    },
    {
      id: "a2u12-g2",
      title: t("Real condition: si + présent, futur", "La condition réelle : si + présent, futur", "الشرط الواقعي: si + مضارع، مستقبل"),
      explanation: t(
        "For a possible, real condition, French uses « si » + present, then the future (or the imperative, or the present) in the result: « Si je réussis, je m'inscrirai à l'université. » Never put the future or the conditional right after « si ». « Si » becomes « s' » only before « il » / « ils »: « S'il pleut, on restera à la maison. » For an imaginary situation, you'll see « si + imparfait, conditionnel » (« Si vous pouviez changer de vie, qu'est-ce que vous feriez ? »): just recognise it for now.",
        "Pour une condition possible et réelle, on utilise « si » + présent, puis le futur (ou l'impératif, ou le présent) dans la conséquence : « Si je réussis, je m'inscrirai à l'université. » On ne met jamais le futur ni le conditionnel juste après « si ». « Si » devient « s' » seulement devant « il » / « ils » : « S'il pleut, on restera à la maison. » Pour une situation imaginaire, vous verrez « si + imparfait, conditionnel » (« Si vous pouviez changer de vie, qu'est-ce que vous feriez ? ») : pour l'instant, sachez simplement le reconnaître.",
        "للشرط الممكن والواقعي نستخدم «si» + المضارع، ثم المستقبل (أو الأمر أو المضارع) في جواب الشرط: «Si je réussis, je m'inscrirai à l'université.» ولا نضع أبدًا المستقبل أو صيغة الشرط مباشرة بعد «si». وتصبح «si» ‏«s'» فقط قبل «il» / «ils»: «S'il pleut, on restera à la maison.» وللموقف المتخيَّل سترى «si + imparfait، conditionnel» («Si vous pouviez changer de vie, qu'est-ce que vous feriez ?»): يكفي الآن أن تتعرّف عليه."
      ),
      examples: [
        { fr: "Si tu continues à pratiquer, tu feras de grands progrès.", gloss: t("If you keep practising, you'll make great progress.", "si + présent → futur.", "إذا واصلت التمرّن فستحرز تقدّمًا كبيرًا.") },
        { fr: "Si vous avez des questions, écrivez-moi.", gloss: t("If you have questions, write to me.", "si + présent → impératif.", "إذا كانت لديكم أسئلة فاكتبوا لي.") },
      ],
    },
    {
      id: "a2u12-g3",
      title: t("Expressing a goal: pour + infinitive", "Exprimer le but : pour + infinitif", "التعبير عن الهدف: pour + مصدر"),
      explanation: t(
        "To say why you do something (your goal), use « pour » + infinitive: « Je cherche un stage pour pratiquer mon français. » In a negative goal, both parts of the negation go before the infinitive: « pour ne pas oublier ». « Afin de » is a more formal synonym: « afin de trouver un emploi ».",
        "Pour dire pourquoi on fait quelque chose (son but), on utilise « pour » + infinitif : « Je cherche un stage pour pratiquer mon français. » À la forme négative, les deux mots de la négation se placent avant l'infinitif : « pour ne pas oublier ». « Afin de » est un synonyme plus formel : « afin de trouver un emploi ».",
        "للتعبير عن سبب فعل شيء ما (الهدف) نستخدم «pour» + المصدر: «Je cherche un stage pour pratiquer mon français.» وفي النفي تأتي كلمتا النفي معًا قبل المصدر: «pour ne pas oublier». و«afin de» مرادف أكثر رسمية: «afin de trouver un emploi»."
      ),
      examples: [
        { fr: "J'écoute des podcasts pour améliorer mon accent.", gloss: t("I listen to podcasts to improve my accent.", "pour + infinitif.", "أستمع إلى البودكاست لأحسّن نطقي.") },
        { fr: "Je note les mots nouveaux pour ne pas les oublier.", gloss: t("I write down new words so as not to forget them.", "pour ne pas + infinitif.", "أدوّن الكلمات الجديدة كي لا أنساها.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Future [e] or conditional [ɛ]?", "Futur [e] ou conditionnel [ɛ] ?", "المستقبل [e] أم الشرط [ɛ]؟"),
    explanation: t(
      "In careful speech, « je parlerai » (future) ends in a closed [e], and « je parlerais » (conditional) in an open [ɛ]. Many French speakers make almost no difference, so the context (si, a wish, politeness) is often what tells you. With other persons, the difference is clear: « nous parlerons » / « nous parlerions », « vous ferez » / « vous feriez ».",
      "Dans une prononciation soignée, « je parlerai » (futur) se termine par un [e] fermé et « je parlerais » (conditionnel) par un [ɛ] ouvert. Beaucoup de francophones ne font presque pas la différence : c'est souvent le contexte (si, souhait, politesse) qui vous aide. Avec les autres personnes, la différence est claire : « nous parlerons » / « nous parlerions », « vous ferez » / « vous feriez ».",
      "في النطق المتأنّي تنتهي «je parlerai» (المستقبل) بصوت [e] المغلق، و«je parlerais» (الشرط) بصوت [ɛ] المفتوح. ولا يكاد كثير من الناطقين بالفرنسية يفرّقون بينهما، لذا فالسياق (si أو الأمنية أو التأدّب) هو ما يساعدك غالبًا. أما مع الضمائر الأخرى فالفرق واضح: «nous parlerons» / «nous parlerions» و«vous ferez» / «vous feriez»."
    ),
    examples: ["je parlerai", "je parlerais", "nous parlerons", "nous parlerions", "Qu'est-ce que vous feriez ?"],
  },
  culture: {
    title: t("Studying in French: France, Canada and beyond", "Étudier en français : France, Canada et ailleurs", "الدراسة بالفرنسية: فرنسا وكندا وغيرهما"),
    body: t(
      "French is spoken on five continents and around 320 million people use it. Many universities in France, Belgium, Switzerland, Quebec or Senegal welcome international students. To enrol, a language diploma is often required: the DELF B2 is the usual level for French universities, while A2 is useful for daily life, some jobs and certain residence procedures. Quebec (Montréal, Québec City) also attracts many French speakers with its immigration programmes.",
      "Le français est parlé sur les cinq continents et environ 320 millions de personnes l'utilisent. Beaucoup d'universités en France, en Belgique, en Suisse, au Québec ou au Sénégal accueillent des étudiants internationaux. Pour s'inscrire, on demande souvent un diplôme de langue : le DELF B2 est le niveau habituel pour les universités françaises, alors que l'A2 est utile pour la vie quotidienne, certains emplois et certaines démarches de séjour. Le Québec (Montréal, Québec) attire aussi beaucoup de francophones grâce à ses programmes d'immigration.",
      "تُتحدَّث الفرنسية في القارات الخمس ويستخدمها نحو 320 مليون شخص. وتستقبل جامعات كثيرة في فرنسا وبلجيكا وسويسرا وكيبيك والسنغال طلابًا دوليين. وللتسجيل يُطلب غالبًا دبلوم لغة: فمستوى DELF B2 هو المعتاد للجامعات الفرنسية، أما A2 فمفيد للحياة اليومية وبعض الوظائف وبعض إجراءات الإقامة. كما تجذب كيبيك (مونتريال وكيبيك) كثيرًا من الناطقين بالفرنسية ببرامج الهجرة لديها."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u12-p1", prompt: t("Conditional of « aimer » (je).", "Conditionnel de « aimer » (je).", "صيغة الشرط لـ«aimer» (je)."), sentence: "J'___ vivre au bord de la mer.", answers: ["aimerais"] },
    { kind: "fill", id: "a2u12-p2", prompt: t("Conditional of « être » (ce).", "Conditionnel de « être » (ce).", "صيغة الشرط لـ«être» (ce)."), sentence: "Mon rêve, ce ___ de voyager en Afrique.", answers: ["serait"] },
    { kind: "fill", id: "a2u12-p3", prompt: t("Conditional of « faire » (vous).", "Conditionnel de « faire » (vous).", "صيغة الشرط لـ«faire» (vous)."), sentence: "Qu'est-ce que vous ___ avec un million d'euros ?", answers: ["feriez"] },
    { kind: "fill", id: "a2u12-p4", prompt: t("si + present: « réussir » (tu).", "si + présent : « réussir » (tu).", "si + مضارع: «réussir» (tu)."), sentence: "Si tu ___ ton examen, on fera la fête.", answers: ["réussis"] },
    { kind: "fill", id: "a2u12-p5", prompt: t("Result in the future: « aller » (nous).", "Conséquence au futur : « aller » (nous).", "الجواب بالمستقبل: «aller» (nous)."), sentence: "S'il fait beau, nous ___ à la plage.", answers: ["irons"] },
    { kind: "fill", id: "a2u12-p6", prompt: t("Goal: « pour » + negative infinitive.", "But : « pour » + infinitif négatif.", "الهدف: «pour» + مصدر منفي."), sentence: "Je pars tôt pour ne ___ rater le train.", answers: ["pas"] },
    { kind: "choice", id: "a2u12-p7", prompt: t("Which sentence is correct?", "Quelle phrase est correcte ?", "أي جملة صحيحة؟"), options: ["Si je serai riche, je voyagerai.", "Si j'ai le temps, je t'appellerai.", "Si j'aurais le temps, je t'appelle."], correctIndex: 1 },
    { kind: "choice", id: "a2u12-p8", prompt: t("« Si » + « il » becomes…", "« Si » + « il » devient…", "«Si» + «il» تصبح…"), options: ["si il", "s'il", "sil"], correctIndex: 1 },
    { kind: "choice", id: "a2u12-p9", prompt: t("Which is a wish (conditional)?", "Lequel est un souhait (conditionnel) ?", "أيّها أمنية (صيغة الشرط)؟"), options: ["je voudrai", "je voudrais", "je veux bien"], correctIndex: 1 },
    { kind: "order", id: "a2u12-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Si je réussis, je m'inscrirai à l'université." },
    { kind: "order", id: "a2u12-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "J'aimerais travailler dans une entreprise française." },
  ],
  production: {
    prompt: t(
      "Write a letter to yourself in ten years (80–100 words): describe your plans for next year (future, si + présent), your dreams (conditional) and why you are learning French (pour + infinitive).",
      "Écrivez une lettre à vous-même dans dix ans (80 à 100 mots) : décrivez vos projets pour l'année prochaine (futur, si + présent), vos rêves (conditionnel) et pourquoi vous apprenez le français (pour + infinitif).",
      "اكتب رسالة إلى نفسك بعد عشر سنوات (80 إلى 100 كلمة): صِف مشاريعك للسنة القادمة (المستقبل، si + مضارع)، وأحلامك (صيغة الشرط)، ولماذا تتعلم الفرنسية (pour + مصدر)."
    ),
    model: "Chère moi,\nAujourd'hui, j'apprends le français pour travailler un jour dans le tourisme. L'année prochaine, je passerai le DELF A2. Si je réussis, je chercherai un stage dans un hôtel à Nice pour pratiquer tous les jours. J'ai aussi l'intention de lire un roman en français chaque mois. Dans dix ans, j'aimerais parler couramment et mon rêve, ce serait d'ouvrir une petite maison d'hôtes au bord de la mer. Est-ce que tu l'as fait ? Si ce n'est pas encore le cas, n'abandonne pas !\nÀ bientôt,\nSofia",
    checklist: [
      t("I use the future and at least one « si + présent ».", "J'utilise le futur et au moins un « si + présent ».", "استخدمت المستقبل وجملة واحدة على الأقل بـ«si + présent»."),
      t("I express at least two wishes with the conditional.", "J'exprime au moins deux souhaits au conditionnel.", "عبّرت عن أمنيتين على الأقل بصيغة الشرط."),
      t("I explain a goal with « pour + infinitif ».", "J'explique un but avec « pour + infinitif ».", "شرحت هدفًا بـ«pour + infinitif»."),
      t("I don't put the future or the conditional after « si ».", "Je ne mets pas de futur ni de conditionnel après « si ».", "لم أضع المستقبل ولا صيغة الشرط بعد «si»."),
    ],
  },
  task: {
    title: t("My French plan", "Mon plan pour le français", "خطّتي للفرنسية"),
    brief: t(
      "Prepare and record a two-minute presentation: « Mes projets avec le français ». Explain why you learn French, what you will do in the next six months (with at least one condition), and what you would like to do one day.",
      "Préparez et enregistrez une présentation de deux minutes : « Mes projets avec le français ». Expliquez pourquoi vous apprenez le français, ce que vous ferez dans les six prochains mois (avec au moins une condition) et ce que vous aimeriez faire un jour.",
      "حضّر وسجّل عرضًا مدته دقيقتان بعنوان «Mes projets avec le français» (مشاريعي مع الفرنسية). اشرح لماذا تتعلم الفرنسية، وماذا ستفعل في الأشهر الستة القادمة (مع شرط واحد على الأقل)، وماذا تودّ أن تفعل يومًا ما."
    ),
    checklist: [
      t("I explained my goals with « pour ».", "J'ai expliqué mes objectifs avec « pour ».", "شرحت أهدافي باستخدام «pour»."),
      t("I gave concrete plans with dates and the future.", "J'ai donné des projets concrets avec des dates et le futur.", "قدّمت مشاريع ملموسة بتواريخ وبصيغة المستقبل."),
      t("I ended with a dream in the conditional.", "J'ai terminé par un rêve au conditionnel.", "ختمت بحلم بصيغة الشرط."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u12-t1", prompt: t("Conditional of « pouvoir » (nous):", "Conditionnel de « pouvoir » (nous) :", "صيغة الشرط لـ«pouvoir» (nous):"), options: ["nous pourrons", "nous pourrions", "nous pouvions"], correctIndex: 1 },
    { kind: "choice", id: "a2u12-t2", prompt: t("Conditional of « aller » (ils):", "Conditionnel de « aller » (ils) :", "صيغة الشرط لـ«aller» (ils):"), options: ["ils iraient", "ils alleraient", "ils iront"], correctIndex: 0 },
    { kind: "choice", id: "a2u12-t3", prompt: t("« Si tu ___ fatigué, repose-toi. »", "« Si tu ___ fatigué, repose-toi. »", "«Si tu ___ fatigué, repose-toi.»"), options: ["seras", "serais", "es"], correctIndex: 2 },
    { kind: "choice", id: "a2u12-t4", prompt: t("« S'il neige demain, nous ___ du ski. »", "« S'il neige demain, nous ___ du ski. »", "«S'il neige demain, nous ___ du ski.»"), options: ["ferons", "ferions", "faisions"], correctIndex: 0 },
    { kind: "choice", id: "a2u12-t5", prompt: t("Which expresses a goal?", "Laquelle exprime un but ?", "أيّها تعبّر عن هدف؟"), options: ["Je travaille parce que j'aime ça.", "Je travaille pour payer mes études.", "Je travaille depuis un an."], correctIndex: 1 },
    { kind: "choice", id: "a2u12-t6", prompt: t("« Je note tout pour ___ oublier. »", "« Je note tout pour ___ oublier. »", "«Je note tout pour ___ oublier.»"), options: ["ne pas", "pas ne", "ne"], correctIndex: 0 },
    { kind: "choice", id: "a2u12-t7", prompt: t("« J'ai l'intention de… » expresses…", "« J'ai l'intention de… » exprime…", "«J'ai l'intention de…» تعبّر عن…"), optionsL10n: { en: ["a plan", "a regret", "an obligation"], fr: ["un projet", "un regret", "une obligation"], ar: ["مشروع / نيّة", "ندم", "إلزام"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u12-t8", prompt: t("A period of work in a company to learn is…", "Une période de travail en entreprise pour apprendre, c'est…", "فترة عمل في شركة بهدف التعلّم هي…"), options: ["un diplôme", "un stage", "un projet"], correctIndex: 1 },
    { kind: "choice", id: "a2u12-t9", prompt: t("Which pair sounds clearly different?", "Quelle paire se prononce clairement différemment ?", "أي زوج يُنطق بشكل مختلف بوضوح؟"), options: ["je parlerai / je parlerais", "nous parlerons / nous parlerions", "tu parlerais / il parlerait"], correctIndex: 1 },
    { kind: "choice", id: "a2u12-t10", prompt: t("The usual DELF level to enter a French university:", "Le niveau de DELF habituel pour entrer à l'université en France :", "مستوى DELF المعتاد للالتحاق بجامعة فرنسية:"), options: ["A2", "B1", "B2"], correctIndex: 2 },
  ],
  passRatio: 0.7,
  replaces: ["fr-day-future"],
};
