import { l10n as t, type CourseUnit } from "../types";

export const A2_U10: CourseUnit = {
  id: "fr-a2-u10-culture-medias",
  level: "A2",
  order: 10,
  title: t("Films, books and screens", "Films, livres et écrans", "أفلام وكتب وشاشات"),
  theme: t(
    "Talking about leisure, telling the story of a film, recommending",
    "Parler de ses loisirs, raconter un film, recommander",
    "الحديث عن الهوايات، ورواية قصة فيلم، والتوصية"
  ),
  canDo: [
    t("I can talk about my cultural tastes and habits.", "Je peux parler de mes goûts et de mes habitudes culturelles.", "أستطيع أن أتحدث عن أذواقي وعاداتي الثقافية."),
    t("I can summarise the story of a film or a book.", "Je peux résumer l'histoire d'un film ou d'un livre.", "أستطيع أن ألخّص قصة فيلم أو كتاب."),
    t("I can say how something is done with adverbs in -ment.", "Je peux dire comment on fait quelque chose avec des adverbes en -ment.", "أستطيع أن أصف كيفية فعل الشيء بظروف تنتهي بـ-ment."),
    t("I can recommend or advise against a work.", "Je peux recommander ou déconseiller une œuvre.", "أستطيع أن أوصي بعمل فني أو أنصح بعدم مشاهدته."),
  ],
  context: t(
    "Léa and Youssef leave a cinema in Marseille. They didn't have the same opinion about the film.",
    "Léa et Youssef sortent d'un cinéma à Marseille. Ils n'ont pas eu le même avis sur le film.",
    "تخرج ليا ويوسف من سينما في مرسيليا. ولم يتّفقا في رأيهما حول الفيلم."
  ),
  dialogue: {
    title: t("After the film", "Après la séance", "بعد العرض"),
    setting: t("Outside a cinema in Marseille", "Devant un cinéma à Marseille", "أمام سينما في مرسيليا"),
    lines: [
      { speaker: "Léa", fr: "Alors, ça t'a plu ?" },
      { speaker: "Youssef", fr: "Franchement, pas trop. L'histoire avance lentement et la fin est prévisible." },
      { speaker: "Léa", fr: "Ah bon ? Moi, j'ai adoré ! L'actrice principale joue vraiment bien." },
      { speaker: "Youssef", fr: "C'est vrai, elle est excellente. Mais le scénario est un peu faible." },
      { speaker: "Léa", fr: "Pour moi, c'est un très beau film sur la famille. Une femme revient dans son village après vingt ans et elle découvre un secret." },
      { speaker: "Youssef", fr: "Oui, et finalement, on comprend que son père n'était pas celui qu'elle croyait. On le devine au bout de dix minutes !" },
      { speaker: "Léa", fr: "Tu es difficile ! Qu'est-ce que tu regardes, toi, d'habitude ?" },
      { speaker: "Youssef", fr: "Surtout des séries policières, sur une plateforme. Et je lis beaucoup de bandes dessinées." },
      { speaker: "Léa", fr: "Moi, je ne regarde presque pas la télé. Je préfère lire des romans ou écouter des podcasts." },
      { speaker: "Youssef", fr: "Tu connais « Astérix » ? Je te le conseille, c'est drôle et intelligent." },
      { speaker: "Léa", fr: "Bien sûr ! Je l'ai lu quand j'étais petite. Et toi, je te recommande le dernier roman de Leïla Slimani." },
      { speaker: "Youssef", fr: "D'accord, on échange : tu me prêtes ton roman et je te prête mes BD." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u10-c1", prompt: t("What does Youssef think of the film?", "Que pense Youssef du film ?", "ما رأي يوسف في الفيلم؟"), optionsL10n: { en: ["He didn't really like it.", "He loved it.", "He didn't see the end."], fr: ["Il ne l'a pas vraiment aimé.", "Il l'a adoré.", "Il n'a pas vu la fin."], ar: ["لم يعجبه كثيرًا.", "أحبّه كثيرًا.", "لم يشاهد النهاية."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u10-c2", prompt: t("On what do they agree?", "Sur quoi sont-ils d'accord ?", "على ماذا يتفقان؟"), optionsL10n: { en: ["The lead actress is excellent.", "The story is fast.", "The ending is surprising."], fr: ["L'actrice principale est excellente.", "L'histoire est rapide.", "La fin est surprenante."], ar: ["الممثلة الرئيسية ممتازة.", "القصة سريعة.", "النهاية مفاجئة."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u10-c3", prompt: t("What is the film about?", "De quoi parle le film ?", "عمّ يتحدث الفيلم؟"), optionsL10n: { en: ["A woman who discovers a family secret", "A police investigation in Marseille", "A trip abroad"], fr: ["Une femme qui découvre un secret de famille", "Une enquête policière à Marseille", "Un voyage à l'étranger"], ar: ["امرأة تكتشف سرًّا عائليًا", "تحقيق بوليسي في مرسيليا", "رحلة إلى الخارج"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u10-c4", prompt: t("What does Léa prefer to do?", "Que préfère faire Léa ?", "ماذا تفضّل ليا أن تفعل؟"), optionsL10n: { en: ["Read novels and listen to podcasts", "Watch TV series", "Read comics"], fr: ["Lire des romans et écouter des podcasts", "Regarder des séries", "Lire des BD"], ar: ["قراءة الروايات والاستماع إلى البودكاست", "مشاهدة المسلسلات", "قراءة القصص المصوّرة"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Cinema, books, media", "Cinéma, livres, médias", "السينما والكتب والإعلام"),
      items: [
        { fr: "le film / la série", meaning: t("film / series", "œuvres à l'écran", "الفيلم / المسلسل") },
        { fr: "le roman", gender: "m", meaning: t("novel", "long récit en prose", "الرواية") },
        { fr: "la bande dessinée (BD)", gender: "f", meaning: t("comic book", "histoire en images", "القصة المصوّرة") },
        { fr: "l'acteur / l'actrice", meaning: t("actor / actress", "personne qui joue", "الممثل / الممثلة") },
        { fr: "le scénario", gender: "m", meaning: t("script, plot", "l'histoire écrite du film", "السيناريو") },
        { fr: "la fin", gender: "f", meaning: t("ending", "dernière partie", "النهاية") },
        { fr: "la plateforme (de streaming)", gender: "f", meaning: t("streaming platform", "service de vidéos en ligne", "منصّة البث") },
        { fr: "le podcast", gender: "m", meaning: t("podcast", "émission audio", "البودكاست") },
        { fr: "la séance", gender: "f", meaning: t("screening", "projection d'un film", "العرض السينمائي") },
      ],
    },
    {
      title: t("Judging and recommending", "Juger et recommander", "الحكم والتوصية"),
      items: [
        { fr: "Ça m'a plu. / Ça ne m'a pas plu.", meaning: t("I liked it. / I didn't like it.", "passé composé de plaire", "أعجبني. / لم يعجبني.") },
        { fr: "drôle / émouvant / ennuyeux", meaning: t("funny / moving / boring", "qualités d'une œuvre", "مضحك / مؤثّر / مملّ") },
        { fr: "prévisible / surprenant", meaning: t("predictable / surprising", "pour une histoire", "متوقَّع / مفاجئ") },
        { fr: "je te le conseille", meaning: t("I recommend it to you", "conseiller quelque chose à quelqu'un", "أنصحك به") },
        { fr: "je te le déconseille", meaning: t("I advise you against it", "le contraire", "لا أنصحك به") },
        { fr: "prêter", meaning: t("to lend", "donner pour un temps", "يُعير") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u10-g1",
      title: t("Adverbs in -ment", "Les adverbes en -ment", "الظروف المنتهية بـ-ment"),
      explanation: t(
        "Most adverbs of manner are formed from the feminine adjective + -ment: lent → lente → lentement; franc → franche → franchement; heureux → heureuse → heureusement. If the masculine ends in a vowel, use the masculine: vrai → vraiment, poli → poliment. Adjectives in -ant / -ent give -amment / -emment, both pronounced [amɑ̃]: courant → couramment, évident → évidemment. Irregular: bon → bien, mauvais → mal.",
        "La plupart des adverbes de manière se forment avec l'adjectif au féminin + -ment : lent → lente → lentement ; franc → franche → franchement ; heureux → heureuse → heureusement. Si le masculin se termine par une voyelle, on utilise le masculin : vrai → vraiment, poli → poliment. Les adjectifs en -ant / -ent donnent -amment / -emment, prononcés tous les deux [amɑ̃] : courant → couramment, évident → évidemment. Irréguliers : bon → bien, mauvais → mal.",
        "تُصاغ معظم ظروف الحال من الصفة المؤنثة + ‎-ment: lent ← lente ← lentement، وfranc ← franche ← franchement، وheureux ← heureuse ← heureusement. وإذا انتهت الصفة المذكّرة بحرف متحرّك نستخدم المذكّر: vrai ← vraiment وpoli ← poliment. والصفات المنتهية بـ-ant / -ent تصبح -amment / -emment، وتُنطقان كلتاهما [amɑ̃]: courant ← couramment وévident ← évidemment. والشاذّ: bon ← bien وmauvais ← mal."
      ),
      table: {
        head: ["adjectif", "féminin", "adverbe"],
        rows: [
          ["lent", "lente", "lentement"],
          ["sérieux", "sérieuse", "sérieusement"],
          ["vrai", "—", "vraiment"],
          ["courant", "—", "couramment"],
          ["évident", "—", "évidemment"],
        ],
      },
      examples: [
        { fr: "L'histoire avance lentement.", gloss: t("The story moves slowly.", "lente + ment.", "تتقدم القصة ببطء.") },
        { fr: "Elle parle couramment trois langues.", gloss: t("She speaks three languages fluently.", "courant → couramment.", "تتكلم ثلاث لغات بطلاقة.") },
      ],
      watchOut: t(
        "The adverb usually goes right after the conjugated verb: « Elle joue vraiment bien », « J'ai beaucoup aimé ».",
        "L'adverbe se place en général juste après le verbe conjugué : « Elle joue vraiment bien », « J'ai beaucoup aimé ».",
        "يأتي الظرف عادةً مباشرة بعد الفعل المصرَّف: «Elle joue vraiment bien» و«J'ai beaucoup aimé»."
      ),
    },
    {
      id: "a2u10-g2",
      title: t("Telling a story: present and past", "Raconter une histoire : présent et passé", "رواية قصة: المضارع والماضي"),
      explanation: t(
        "To summarise a film or a book, French usually uses the present: « Une femme revient dans son village et elle découvre un secret. » To tell what happened to you, use the passé composé for events and the imparfait for the background: « Je l'ai lu quand j'étais petite. » Useful words to structure: « au début », « puis », « tout à coup », « finalement », « à la fin ».",
        "Pour résumer un film ou un livre, on utilise en général le présent : « Une femme revient dans son village et elle découvre un secret. » Pour raconter ce qui vous est arrivé, on emploie le passé composé pour les événements et l'imparfait pour le décor : « Je l'ai lu quand j'étais petite. » Des mots pour structurer : « au début », « puis », « tout à coup », « finalement », « à la fin ».",
        "لتلخيص فيلم أو كتاب يُستخدم المضارع عادةً: «Une femme revient dans son village et elle découvre un secret.» أما لرواية ما حدث لك فنستخدم الماضي المركّب للأحداث والـimparfait للخلفية: «Je l'ai lu quand j'étais petite.» وكلمات للتنظيم: «au début» و«puis» و«tout à coup» و«finalement» و«à la fin»."
      ),
      examples: [
        { fr: "Au début, le héros vit seul. Puis il rencontre une jeune femme.", gloss: t("At the beginning, the hero lives alone. Then he meets a young woman.", "Résumé au présent.", "في البداية يعيش البطل وحيدًا. ثم يلتقي بشابّة.") },
        { fr: "J'ai vu ce film quand j'habitais à Lyon.", gloss: t("I saw this film when I lived in Lyon.", "Passé composé + imparfait.", "شاهدت هذا الفيلم عندما كنت أسكن في ليون.") },
      ],
    },
    {
      id: "a2u10-g3",
      title: t("Double pronouns: je te le conseille", "Les doubles pronoms : je te le conseille", "الضمائر المزدوجة: je te le conseille"),
      explanation: t(
        "When a verb has two pronouns (an indirect one like me, te, nous, vous and a direct one like le, la, les), the indirect pronoun comes first: « Je te le conseille », « Tu me la prêtes ? ». With lui / leur, the order changes: le, la, les come first: « Je le lui recommande ». At A2, focus on « me / te / nous / vous + le / la / les ».",
        "Quand un verbe a deux pronoms (un indirect comme me, te, nous, vous et un direct comme le, la, les), le pronom indirect vient en premier : « Je te le conseille », « Tu me la prêtes ? ». Avec lui / leur, l'ordre change : le, la, les viennent d'abord : « Je le lui recommande ». Au niveau A2, concentrez-vous sur « me / te / nous / vous + le / la / les ».",
        "عندما يكون للفعل ضميران (ضمير غير مباشر مثل me وte وnous وvous، وضمير مباشر مثل le وla وles) يأتي الضمير غير المباشر أولًا: «Je te le conseille» و«Tu me la prêtes ?». أما مع lui / leur فيتغير الترتيب ويأتي le وla وles أولًا: «Je le lui recommande». في المستوى A2 ركّز على «me / te / nous / vous + le / la / les»."
      ),
      examples: [
        { fr: "Ce roman ? Je vous le recommande.", gloss: t("This novel? I recommend it to you.", "vous + le.", "هذه الرواية؟ أوصيكم بها.") },
        { fr: "Ta BD, tu me la prêtes ?", gloss: t("Your comic, will you lend it to me?", "me + la.", "قصتك المصوّرة، هل تعيرني إياها؟") },
      ],
    },
  ],
  pronunciation: {
    title: t("-amment and -emment: the same sound", "-amment et -emment : le même son", "‎-amment و‎-emment: الصوت نفسه"),
    explanation: t(
      "Adverbs in -amment and -emment are both pronounced [amɑ̃]: « couramment » [kuʁamɑ̃], « évidemment » [evidamɑ̃], « récemment » [ʁesamɑ̃]. Don't pronounce « évidemment » with an [e] or an [ɑ̃] in the middle. The spelling depends on the adjective: -ant → -amment, -ent → -emment.",
      "Les adverbes en -amment et -emment se prononcent tous les deux [amɑ̃] : « couramment » [kuʁamɑ̃], « évidemment » [evidamɑ̃], « récemment » [ʁesamɑ̃]. Ne prononcez pas « évidemment » avec un [e] ou un [ɑ̃] au milieu. L'orthographe dépend de l'adjectif : -ant → -amment, -ent → -emment.",
      "تُنطق الظروف المنتهية بـ‎-amment و‎-emment كلتاهما [amɑ̃]: «couramment» [kuʁamɑ̃] و«évidemment» [evidamɑ̃] و«récemment» [ʁesamɑ̃]. لا تنطق «évidemment» بصوت [e] أو [ɑ̃] في وسطها. ويتوقف الإملاء على الصفة: ‎-ant ← ‎-amment و‎-ent ← ‎-emment."
    ),
    examples: ["couramment", "évidemment", "récemment", "patiemment", "Elle parle couramment."],
  },
  culture: {
    title: t("French cinema and the « neuvième art »", "Le cinéma français et le « neuvième art »", "السينما الفرنسية و«الفن التاسع»"),
    body: t(
      "France is one of the countries where people go to the cinema the most in Europe, and French films are supported by public funding. The César awards and the Cannes Festival are major events. Comics (« la BD ») are called the « ninth art »: series like Astérix, Tintin (Belgian) or more recent graphic novels are read by all ages, and the Angoulême festival celebrates them every January. Many French-speaking writers, like Leïla Slimani (born in Morocco), are widely read.",
      "La France est l'un des pays d'Europe où l'on va le plus au cinéma, et les films français sont soutenus par des aides publiques. Les César et le Festival de Cannes sont de grands événements. La bande dessinée est appelée le « neuvième art » : des séries comme Astérix, Tintin (belge) ou des romans graphiques plus récents sont lus à tout âge, et le festival d'Angoulême les célèbre chaque janvier. Beaucoup d'écrivains francophones, comme Leïla Slimani (née au Maroc), sont très lus.",
      "فرنسا من أكثر بلدان أوروبا ارتيادًا للسينما، وتحظى الأفلام الفرنسية بدعم عام. وجوائز سيزار ومهرجان كان من الأحداث الكبرى. وتُسمّى القصص المصوّرة «الفن التاسع»: فسلاسل مثل «أستريكس» و«تان تان» (البلجيكية) والروايات المصوّرة الأحدث يقرؤها الناس من كل الأعمار، ويحتفي بها مهرجان أنغوليم كل يناير. كما يُقرأ كثيرًا عدد من الكتّاب الفرنكوفونيين مثل ليلى سليماني (المولودة في المغرب)."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u10-p1", prompt: t("Make the adverb: lent →", "Formez l'adverbe : lent →", "كوّن الظرف: lent ←"), sentence: "Il parle ___ pour être compris.", answers: ["lentement"] },
    { kind: "fill", id: "a2u10-p2", prompt: t("Make the adverb: vrai →", "Formez l'adverbe : vrai →", "كوّن الظرف: vrai ←"), sentence: "Ce film est ___ émouvant.", answers: ["vraiment"] },
    { kind: "fill", id: "a2u10-p3", prompt: t("Make the adverb: évident →", "Formez l'adverbe : évident →", "كوّن الظرف: évident ←"), sentence: "___, je te prête le livre !", answers: ["évidemment"] },
    { kind: "fill", id: "a2u10-p4", prompt: t("Make the adverb: courant →", "Formez l'adverbe : courant →", "كوّن الظرف: courant ←"), sentence: "Elle lit ___ l'anglais.", answers: ["couramment"] },
    { kind: "fill", id: "a2u10-p5", prompt: t("Make the adverb: heureux →", "Formez l'adverbe : heureux →", "كوّن الظرف: heureux ←"), sentence: "___, la fin est surprenante.", answers: ["heureusement"] },
    { kind: "fill", id: "a2u10-p6", prompt: t("Past of « plaire »: « Ça m'a ___ ».", "Passé de « plaire » : « Ça m'a ___ ».", "ماضي «plaire»: «Ça m'a ___»."), sentence: "Le film ? Oui, ça m'a beaucoup ___.", answers: ["plu"] },
    { kind: "choice", id: "a2u10-p7", prompt: t("Replace « ce roman » and « à toi »: « Je conseille ce roman à toi. »", "Remplacez « ce roman » et « à toi » : « Je conseille ce roman à toi. »", "عوّض «ce roman» و«à toi»: «Je conseille ce roman à toi.»"), options: ["Je te le conseille.", "Je le te conseille.", "Je te conseille le."], correctIndex: 0 },
    { kind: "choice", id: "a2u10-p8", prompt: t("To summarise a film's story, we usually use…", "Pour résumer l'histoire d'un film, on utilise en général…", "لتلخيص قصة فيلم نستخدم عادةً…"), optionsL10n: { en: ["the present", "the future", "the conditional"], fr: ["le présent", "le futur", "le conditionnel"], ar: ["المضارع", "المستقبل", "الشرط"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u10-p9", prompt: t("A story where you guess everything is…", "Une histoire où on devine tout est…", "القصة التي تخمّن فيها كل شيء تكون…"), options: ["prévisible", "surprenante", "émouvante"], correctIndex: 0 },
    { kind: "order", id: "a2u10-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "L'actrice principale joue vraiment bien." },
    { kind: "order", id: "a2u10-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je vous le recommande." },
  ],
  production: {
    prompt: t(
      "Write a short review (80–100 words) of a film, series or book you know: summarise the story in the present, give your opinion with adverbs in -ment, and say who you recommend it to.",
      "Écrivez une courte critique (80 à 100 mots) d'un film, d'une série ou d'un livre que vous connaissez : résumez l'histoire au présent, donnez votre avis avec des adverbes en -ment et dites à qui vous le recommandez.",
      "اكتب نقدًا قصيرًا (80 إلى 100 كلمة) لفيلم أو مسلسل أو كتاب تعرفه: لخّص القصة بالمضارع، وأبدِ رأيك باستخدام ظروف تنتهي بـ-ment، وقل لمن توصي به."
    ),
    model: "J'ai récemment vu « Intouchables », un film français de 2011. Philippe, un homme riche, ne peut plus marcher après un accident. Il cherche un assistant et il choisit Driss, un jeune homme de banlieue qui n'a pas d'expérience. Au début, ils sont très différents, puis ils deviennent amis. Les acteurs jouent vraiment bien et l'histoire est à la fois drôle et émouvante. Franchement, la fin est un peu prévisible, mais ce n'est pas grave. Je vous le recommande, surtout si vous aimez les comédies.",
    checklist: [
      t("I summarise the story in the present with structure words (au début, puis…).", "Je résume l'histoire au présent avec des mots pour structurer (au début, puis…).", "لخّصت القصة بالمضارع مع كلمات تنظيم (au début, puis…)."),
      t("I use at least two adverbs in -ment.", "J'utilise au moins deux adverbes en -ment.", "استخدمت ظرفين على الأقل ينتهيان بـ-ment."),
      t("I give a positive and a negative point.", "Je donne un point positif et un point négatif.", "ذكرت نقطة إيجابية وأخرى سلبية."),
      t("I recommend it (or not) with a pronoun: je vous le conseille.", "Je recommande (ou non) avec un pronom : je vous le conseille.", "أوصيت به (أو لا) باستخدام ضمير: je vous le conseille."),
    ],
  },
  task: {
    title: t("Recommend a work in two minutes", "Recommander une œuvre en deux minutes", "أوصِ بعمل فني في دقيقتين"),
    brief: t(
      "Record a two-minute audio « coup de cœur » (favourite pick) for a cultural podcast: present a film, series, book or comic, tell the beginning of the story without the end, explain why you liked it and who it's for.",
      "Enregistrez un « coup de cœur » audio de deux minutes pour un podcast culturel : présentez un film, une série, un livre ou une BD, racontez le début de l'histoire sans la fin, expliquez pourquoi vous l'avez aimé et pour qui c'est.",
      "سجّل مقطعًا صوتيًا لمدة دقيقتين بعنوان «coup de cœur» (اختياري المفضّل) لبودكاست ثقافي: قدّم فيلمًا أو مسلسلًا أو كتابًا أو قصة مصوّرة، واروِ بداية القصة من دون نهايتها، واشرح لماذا أعجبك ولمن يناسب."
    ),
    checklist: [
      t("I presented the work (title, type, author or director).", "J'ai présenté l'œuvre (titre, genre, auteur ou réalisateur).", "قدّمت العمل (العنوان والنوع والمؤلف أو المخرج)."),
      t("I told the beginning in the present without the ending.", "J'ai raconté le début au présent sans la fin.", "رويت البداية بالمضارع من دون النهاية."),
      t("I justified my opinion and said who it's for.", "J'ai justifié mon avis et dit pour qui c'est.", "برّرت رأيي وقلت لمن يناسب."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u10-t1", prompt: t("Adverb of « sérieux »:", "Adverbe de « sérieux » :", "ظرف «sérieux»:"), options: ["sérieusement", "sérieuxment", "sérieusment"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t2", prompt: t("Adverb of « poli »:", "Adverbe de « poli » :", "ظرف «poli»:"), options: ["poliment", "polement", "poliement"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t3", prompt: t("Adverb of « récent »:", "Adverbe de « récent » :", "ظرف «récent»:"), options: ["récemment", "récentement", "récamment"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t4", prompt: t("Adverb of « bon »:", "Adverbe de « bon » :", "ظرف «bon»:"), options: ["bien", "bonnement", "bon"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t5", prompt: t("Choose the correct order.", "Choisissez le bon ordre.", "اختر الترتيب الصحيح."), options: ["Tu me le prêtes ?", "Tu le me prêtes ?", "Tu prêtes me le ?"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t6", prompt: t("« Le film ? Ça ne m'a pas ___. »", "« Le film ? Ça ne m'a pas ___. »", "«Le film ? Ça ne m'a pas ___.»"), options: ["plu", "plaît", "plaisé"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t7", prompt: t("Which word structures a story?", "Quel mot structure un récit ?", "أي كلمة تنظّم الرواية؟"), options: ["tout à coup", "pourtant", "parce que"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t8", prompt: t("A comic book in French is…", "Une histoire en images, c'est…", "القصة المصوّرة بالفرنسية هي…"), options: ["une bande dessinée", "un roman", "un scénario"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t9", prompt: t("How is « évidemment » pronounced in the middle?", "Comment se prononce le milieu de « évidemment » ?", "كيف يُنطق وسط «évidemment»؟"), options: ["[a]", "[e]", "[ɑ̃]"], correctIndex: 0 },
    { kind: "choice", id: "a2u10-t10", prompt: t("Comics in France are called…", "En France, on appelle la BD…", "تُسمّى القصص المصوّرة في فرنسا…"), optionsL10n: { en: ["the ninth art", "the seventh art", "the popular art"], fr: ["le neuvième art", "le septième art", "l'art populaire"], ar: ["الفن التاسع", "الفن السابع", "الفن الشعبي"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-day-hobbies"],
};
