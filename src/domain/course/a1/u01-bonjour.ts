import { l10n as t, type CourseUnit } from "../types";

export const A1_U01: CourseUnit = {
  id: "fr-a1-u01-bonjour",
  level: "A1",
  order: 1,
  title: t("Hello!", "Bonjour !", "مرحبًا!"),
  theme: t(
    "Greeting people and introducing yourself",
    "Saluer et se présenter",
    "التحية وتقديم النفس"
  ),
  canDo: [
    t(
      "I can greet someone and say goodbye, formally and informally.",
      "Je peux saluer et prendre congé, de façon formelle et informelle.",
      "أستطيع أن أحيّي وأودّع بأسلوب رسمي وغير رسمي."
    ),
    t(
      "I can say my name and ask someone's name.",
      "Je peux dire mon nom et demander le nom de quelqu'un.",
      "أستطيع أن أقول اسمي وأسأل عن اسم شخص آخر."
    ),
    t(
      "I can spell my name.",
      "Je peux épeler mon nom.",
      "أستطيع أن أتهجّى اسمي."
    ),
    t(
      "I can choose between « tu » and « vous ».",
      "Je peux choisir entre « tu » et « vous ».",
      "أستطيع أن أختار بين « tu » و« vous »."
    ),
  ],
  context: t(
    "It is the first day of a French course in Lyon. The teacher welcomes the students, and two classmates meet during the break.",
    "C'est le premier jour d'un cours de français à Lyon. La professeure accueille les étudiants, puis deux camarades font connaissance à la pause.",
    "إنه اليوم الأول في دورة لتعلّم الفرنسية في مدينة ليون. تستقبل المعلّمة الطلاب، ثم يتعرّف زميلان على بعضهما في الاستراحة."
  ),
  dialogue: {
    title: t("First day of class", "Premier jour de cours", "اليوم الأول في الدرس"),
    setting: t(
      "In the classroom, then during the break",
      "En classe, puis à la pause",
      "في الفصل، ثم أثناء الاستراحة"
    ),
    lines: [
      { speaker: "Claire", fr: "Bonjour à tous ! Je m'appelle Claire Martin. Je suis votre professeure." },
      { speaker: "Karim", fr: "Bonjour, madame." },
      { speaker: "Claire", fr: "Bonjour ! Comment vous appelez-vous ?" },
      { speaker: "Karim", fr: "Je m'appelle Karim Haddad." },
      { speaker: "Claire", fr: "Haddad… Comment ça s'écrit ?" },
      { speaker: "Karim", fr: "H-A-D-D-A-D." },
      { speaker: "Claire", fr: "Merci. Et vous, madame ?" },
      { speaker: "Lucía", fr: "Moi, c'est Lucía Gómez." },
      { speaker: "Claire", fr: "Enchantée, Lucía." },
      { speaker: "Karim", fr: "Salut ! Tu t'appelles Lucía, c'est ça ?" },
      { speaker: "Lucía", fr: "Oui. Et toi, tu t'appelles comment ?" },
      { speaker: "Karim", fr: "Karim. Ça va ?" },
      { speaker: "Lucía", fr: "Ça va bien, merci. Et toi ?" },
      { speaker: "Karim", fr: "Très bien ! Allez, à demain !" },
      { speaker: "Lucía", fr: "Salut, à demain !" },
    ],
  },
  comprehension: [
    {
      kind: "choice",
      id: "u01-c1",
      prompt: t("Who is Claire Martin?", "Qui est Claire Martin ?", "من هي كلير مارتان؟"),
      optionsL10n: {
        en: ["A student", "The teacher", "A secretary"],
        fr: ["Une étudiante", "La professeure", "Une secrétaire"],
        ar: ["طالبة", "المعلّمة", "سكرتيرة"],
      },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-c2",
      prompt: t("How does Karim spell his surname?", "Comment Karim épelle-t-il son nom ?", "كيف يتهجّى كريم اسم عائلته؟"),
      options: ["H-A-D-A-D", "H-A-D-D-A-D", "A-D-D-A-D"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-c3",
      prompt: t(
        "Karim says « vous » to Claire but « tu » to Lucía. Why?",
        "Karim dit « vous » à Claire mais « tu » à Lucía. Pourquoi ?",
        "يقول كريم « vous » لكلير لكنه يقول « tu » للوسيا. لماذا؟"
      ),
      optionsL10n: {
        en: [
          "Claire is the teacher; Lucía is a classmate.",
          "Claire is his friend; Lucía is older.",
          "There is no difference.",
        ],
        fr: [
          "Claire est la professeure ; Lucía est une camarade.",
          "Claire est son amie ; Lucía est plus âgée.",
          "Il n'y a pas de différence.",
        ],
        ar: [
          "كلير هي المعلّمة، ولوسيا زميلة.",
          "كلير صديقته، ولوسيا أكبر سنًا.",
          "لا يوجد فرق.",
        ],
      },
      correctIndex: 0,
    },
    {
      kind: "choice",
      id: "u01-c4",
      prompt: t(
        "When will Karim and Lucía see each other again?",
        "Quand Karim et Lucía vont-ils se revoir ?",
        "متى سيلتقي كريم ولوسيا مرة أخرى؟"
      ),
      optionsL10n: {
        en: ["Tonight", "Tomorrow", "Next week"],
        fr: ["Ce soir", "Demain", "La semaine prochaine"],
        ar: ["الليلة", "غدًا", "الأسبوع القادم"],
      },
      correctIndex: 1,
    },
  ],
  vocabulary: [
    {
      title: t("Greeting and leaving", "Saluer et prendre congé", "التحية والوداع"),
      items: [
        { fr: "bonjour", meaning: t("hello / good morning", "salutation de la journée", "مرحبًا / صباح الخير"), example: "Bonjour, madame." },
        { fr: "bonsoir", meaning: t("good evening", "salutation du soir", "مساء الخير"), example: "Bonsoir, monsieur." },
        { fr: "salut", meaning: t("hi / bye (informal)", "bonjour ou au revoir, entre amis", "أهلًا / مع السلامة (غير رسمي)"), example: "Salut, Karim !" },
        { fr: "au revoir", meaning: t("goodbye", "formule pour se quitter", "إلى اللقاء"), example: "Au revoir, madame." },
        { fr: "à demain", meaning: t("see you tomorrow", "on se revoit demain", "إلى الغد"), example: "À demain !" },
        { fr: "à bientôt", meaning: t("see you soon", "on se revoit bientôt", "أراك قريبًا"), example: "Merci, à bientôt !" },
        { fr: "bonne journée", meaning: t("have a nice day", "souhait pour la journée", "يومًا سعيدًا"), example: "Au revoir, bonne journée !" },
      ],
    },
    {
      title: t("Introducing yourself", "Se présenter", "تقديم النفس"),
      items: [
        { fr: "je m'appelle…", meaning: t("my name is…", "pour dire son nom", "اسمي…"), example: "Je m'appelle Lucía." },
        { fr: "moi, c'est…", meaning: t("I'm… (informal)", "pour dire son nom, à l'oral", "أنا… (في الكلام)"), example: "Moi, c'est Karim." },
        { fr: "comment vous appelez-vous ?", meaning: t("what is your name? (formal)", "question polie sur le nom", "ما اسمك؟ (رسمي)"), example: "Bonjour ! Comment vous appelez-vous ?" },
        { fr: "tu t'appelles comment ?", meaning: t("what's your name? (informal)", "question familière sur le nom", "ما اسمك؟ (غير رسمي)"), example: "Et toi, tu t'appelles comment ?" },
        { fr: "comment ça s'écrit ?", meaning: t("how do you spell that?", "pour demander l'orthographe", "كيف يُكتب ذلك؟"), example: "Haddad… Comment ça s'écrit ?" },
        { fr: "enchanté / enchantée", meaning: t("nice to meet you", "heureux de vous rencontrer", "تشرّفنا"), example: "Enchantée, Lucía." },
      ],
    },
    {
      title: t("Politeness and how you are", "Politesse et nouvelles", "المجاملة والسؤال عن الحال"),
      items: [
        { fr: "ça va ?", meaning: t("how are you? (informal)", "question familière sur la forme", "كيف حالك؟ (غير رسمي)"), example: "Salut ! Ça va ?" },
        { fr: "ça va bien", meaning: t("I'm fine", "je vais bien", "أنا بخير"), example: "Ça va bien, merci." },
        { fr: "très bien", meaning: t("very well", "très bien", "بخير جدًا"), example: "Très bien, et toi ?" },
        { fr: "merci", meaning: t("thank you", "pour remercier", "شكرًا"), example: "Merci beaucoup !" },
        { fr: "s'il vous plaît", meaning: t("please (formal)", "formule polie pour demander", "من فضلك (رسمي)"), example: "Votre nom, s'il vous plaît ?" },
        { fr: "madame", gender: "f", meaning: t("madam / Mrs", "titre de politesse pour une femme", "سيدتي"), example: "Bonjour, madame." },
        { fr: "monsieur", gender: "m", meaning: t("sir / Mr", "titre de politesse pour un homme", "سيدي"), example: "Au revoir, monsieur." },
      ],
    },
  ],
  grammar: [
    {
      id: "u01-g1",
      title: t(
        "Subject pronouns and the verb s'appeler",
        "Les pronoms sujets et le verbe s'appeler",
        "ضمائر الفاعل والفعل s'appeler"
      ),
      explanation: t(
        "To say your name, French uses the reflexive verb s'appeler (literally « to call oneself »). The small pronoun (me, te, se…) changes with the person. Before a vowel, je, me, te and se lose their « e » and take an apostrophe: je m'appelle.",
        "Pour dire son nom, on utilise le verbe pronominal s'appeler. Le petit pronom (me, te, se…) change avec la personne. Devant une voyelle, je, me, te et se perdent leur « e » et prennent une apostrophe : je m'appelle.",
        "لقول الاسم نستخدم الفعل الانعكاسي s'appeler (حرفيًا: «يُسمّي نفسه»). يتغيّر الضمير الصغير (me, te, se…) حسب الشخص. وقبل حرف متحرّك تُحذف «e» من je وme وte وse وتُكتب فاصلة عليا: je m'appelle."
      ),
      table: {
        head: ["", "s'appeler"],
        rows: [
          ["je", "je m'appelle"],
          ["tu", "tu t'appelles"],
          ["il / elle / on", "il s'appelle"],
          ["nous", "nous nous appelons"],
          ["vous", "vous vous appelez"],
          ["ils / elles", "ils s'appellent"],
        ],
      },
      examples: [
        { fr: "Je m'appelle Karim.", gloss: t("My name is Karim.", "Mon nom est Karim.", "اسمي كريم.") },
        { fr: "Elle s'appelle Claire.", gloss: t("Her name is Claire.", "Son nom est Claire.", "اسمها كلير.") },
        { fr: "Comment vous appelez-vous ?", gloss: t("What is your name?", "Quel est votre nom ?", "ما اسمك؟") },
      ],
      watchOut: t(
        "Spelling: double « ll » with je, tu, il, ils (je m'appelle), but a single « l » with nous and vous (vous vous appelez). « Vous vous appellez » is a common mistake.",
        "Orthographe : « ll » avec je, tu, il, ils (je m'appelle), mais un seul « l » avec nous et vous (vous vous appelez). « Vous vous appellez » est une erreur fréquente.",
        "انتبه للإملاء: «ll» مع je وtu وil وils (je m'appelle)، لكن «l» واحدة مع nous وvous (vous vous appelez). كتابة «vous vous appellez» خطأ شائع."
      ),
    },
    {
      id: "u01-g2",
      title: t("« Tu » or « vous »?", "« Tu » ou « vous » ?", "« tu » أم « vous »؟"),
      explanation: t(
        "« Tu » is informal and singular: for family, friends, children and classmates. « Vous » is the polite form for one person you don't know well (a teacher, a shop assistant, an official), and it is also the normal plural for everyone. When in doubt, use « vous » and wait for the other person to suggest « tu ».",
        "« Tu » est familier et singulier : pour la famille, les amis, les enfants, les camarades. « Vous » est la forme de politesse pour une personne qu'on connaît peu (professeur, vendeur, administration) ; c'est aussi le pluriel normal. En cas de doute, dites « vous » et attendez qu'on vous propose le « tu ».",
        "« tu » غير رسمي ومفرد: للعائلة والأصدقاء والأطفال وزملاء الدراسة. أما « vous » فهي صيغة الاحترام لشخص لا تعرفه جيدًا (معلّم، بائع، موظف)، وهي أيضًا صيغة الجمع العادية للجميع. إذا ترددت فاستخدم « vous » وانتظر أن يقترح عليك الطرف الآخر استخدام « tu »."
      ),
      examples: [
        { fr: "Bonjour, madame. Comment allez-vous ?", gloss: t("Hello, madam. How are you? (polite)", "Forme polie.", "مرحبًا يا سيدتي. كيف حالك؟ (رسمي)") },
        { fr: "Salut, Lucía ! Tu vas bien ?", gloss: t("Hi, Lucía! Are you well? (informal)", "Forme familière.", "أهلًا يا لوسيا! هل أنتِ بخير؟ (غير رسمي)") },
        { fr: "Karim et Lucía, vous êtes prêts ?", gloss: t("Karim and Lucía, are you ready? (plural)", "Pluriel.", "كريم ولوسيا، هل أنتما مستعدّان؟ (جمع)") },
      ],
    },
  ],
  pronunciation: {
    title: t("The alphabet and the final stress", "L'alphabet et l'accent final", "الحروف الأبجدية والنبر في آخر الكلمة"),
    explanation: t(
      "To spell your name you need the French alphabet. Watch the letters that sound different from English: E [ə], I [i], U [y], G [ʒe], J [ʒi], H (« ache », silent in words), W (« double vé »), Y (« i grec »). In French, the stress falls on the last syllable of a word or group: bon-JOUR, en-chan-TÉ.",
      "Pour épeler, il faut l'alphabet. Attention aux lettres : E [ə], I [i], U [y], G [ʒe], J [ʒi], H (« ache », muet dans les mots), W (« double vé »), Y (« i grec »). En français, l'accent tombe sur la dernière syllabe du mot ou du groupe : bon-JOUR, en-chan-TÉ.",
      "لتتهجّى اسمك تحتاج إلى الأبجدية الفرنسية. انتبه للحروف التي تُنطق بطريقة مختلفة: E [ə]، I [i]، U [y]، G [ʒe]، J [ʒi]، H («آش»، ولا يُنطق داخل الكلمات)، W («دوبل في»)، Y («إي غريك»). وفي الفرنسية يقع النبر على المقطع الأخير من الكلمة أو المجموعة: bon-JOUR، en-chan-TÉ."
    ),
    examples: ["A, B, C, D, E, F, G", "H, I, J, K, L, M, N", "Bonjour", "Enchantée", "H-A-D-D-A-D"],
  },
  culture: {
    title: t("Bonjour first!", "D'abord, « Bonjour » !", "«Bonjour» أولًا!"),
    body: t(
      "In France, you say « Bonjour » (or « Bonsoir » in the evening) before anything else: when you enter a shop, a bakery, a doctor's waiting room or when you speak to a bus driver. Starting directly with a question can seem rude. Use « madame » or « monsieur » without the surname. Friends often greet each other with « la bise » (cheek kisses); at work, people usually shake hands.",
      "En France, on dit « Bonjour » (ou « Bonsoir ») avant tout : en entrant dans un magasin, une boulangerie, une salle d'attente, ou en parlant au chauffeur de bus. Commencer directement par une question peut sembler impoli. On dit « madame » ou « monsieur » sans le nom de famille. Entre amis, on se fait souvent la bise ; au travail, on se serre plutôt la main.",
      "في فرنسا تُقال «Bonjour» (أو «Bonsoir» مساءً) قبل أي شيء: عند دخول متجر أو مخبز أو غرفة انتظار، أو عند الحديث مع سائق الحافلة. البدء بسؤال مباشرة قد يُعدّ قلة أدب. وتُستخدم «madame» أو «monsieur» من دون اسم العائلة. بين الأصدقاء تنتشر «la bise» (القبلات على الخدّين)، أما في العمل فالمصافحة هي الأكثر شيوعًا."
    ),
  },
  practice: [
    {
      kind: "fill",
      id: "u01-p1",
      prompt: t("Complete with s'appeler.", "Complétez avec s'appeler.", "أكمل بالفعل s'appeler."),
      sentence: "Je ___ Karim.",
      answers: ["m'appelle"],
    },
    {
      kind: "fill",
      id: "u01-p2",
      prompt: t("Complete the polite question.", "Complétez la question polie.", "أكمل السؤال الرسمي."),
      sentence: "Comment vous ___-vous ?",
      answers: ["appelez"],
      explanation: t("vous vous appelez — one « l ».", "vous vous appelez — un seul « l ».", "vous vous appelez — بحرف «l» واحد."),
    },
    {
      kind: "fill",
      id: "u01-p3",
      prompt: t("Complete the informal question.", "Complétez la question familière.", "أكمل السؤال غير الرسمي."),
      sentence: "Et toi, tu ___ comment ?",
      answers: ["t'appelles"],
    },
    {
      kind: "fill",
      id: "u01-p4",
      prompt: t("Complete with s'appeler (they).", "Complétez avec s'appeler (ils).", "أكمل بالفعل s'appeler (هم)."),
      sentence: "Ils ___ Paul et Marc.",
      answers: ["s'appellent"],
    },
    {
      kind: "choice",
      id: "u01-p5",
      prompt: t(
        "It is 8 p.m. You meet your elderly neighbour, Mrs Dubois. You say:",
        "Il est 20 heures. Vous croisez votre voisine âgée, Mme Dubois. Vous dites :",
        "الساعة الثامنة مساءً. تقابل جارتك المسنّة السيدة دوبوا. تقول:"
      ),
      options: ["Salut !", "Bonsoir, madame.", "Bonne nuit, Dubois."],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-p6",
      prompt: t("Which form is correct?", "Quelle forme est correcte ?", "أي صيغة صحيحة؟"),
      options: ["Nous nous appellons", "Nous nous appelons", "Nous appelons-nous"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-p7",
      prompt: t(
        "Lucía meets someone for the first time. She says:",
        "Lucía rencontre quelqu'un pour la première fois. Elle dit :",
        "تقابل لوسيا شخصًا لأول مرة. تقول:"
      ),
      options: ["Enchanté.", "Enchantée.", "Enchantés."],
      correctIndex: 1,
      explanation: t("A woman writes « enchantée ».", "Une femme écrit « enchantée ».", "المرأة تكتب «enchantée»."),
    },
    {
      kind: "fill",
      id: "u01-p8",
      prompt: t("Reply to « Ça va ? »", "Répondez à « Ça va ? »", "أجب عن «Ça va ?»"),
      answers: ["ça va", "ça va bien", "ça va bien, merci", "ça va, merci", "très bien", "très bien, merci", "bien, merci", "oui, ça va"],
    },
    {
      kind: "order",
      id: "u01-p9",
      prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."),
      answer: "Comment vous appelez-vous ?",
    },
    {
      kind: "order",
      id: "u01-p10",
      prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."),
      answer: "Bonjour, je m'appelle Lucía.",
    },
  ],
  production: {
    prompt: t(
      "Write a short message to introduce yourself to your new French class: greet everyone, give your name, spell your surname and say goodbye.",
      "Écrivez un court message pour vous présenter à votre nouvelle classe : saluez, donnez votre nom, épelez votre nom de famille et prenez congé.",
      "اكتب رسالة قصيرة تقدّم فيها نفسك لزملائك الجدد في درس الفرنسية: حيِّ الجميع، واذكر اسمك، وتهجَّ اسم عائلتك، ثم ودّعهم."
    ),
    model: "Bonjour à tous ! Je m'appelle Nour Saleh. Saleh, ça s'écrit S-A-L-E-H. Enchantée ! À demain !",
    checklist: [
      t("I greet the group.", "Je salue le groupe.", "حيّيت المجموعة."),
      t("I give my name with « je m'appelle » or « moi, c'est ».", "Je donne mon nom avec « je m'appelle » ou « moi, c'est ».", "ذكرت اسمي باستخدام «je m'appelle» أو «moi, c'est»."),
      t("I spell my surname.", "J'épelle mon nom de famille.", "تهجّيت اسم عائلتي."),
      t("I end with a polite goodbye.", "Je termine par une formule pour prendre congé.", "أنهيت بعبارة وداع مهذّبة."),
    ],
  },
  task: {
    title: t("Introduce yourself for real", "Présentez-vous pour de vrai", "قدّم نفسك في موقف حقيقي"),
    brief: t(
      "Say it aloud to a French speaker, a classmate, or record yourself on your phone: greet formally, say your name, spell it, ask the other person's name, and say goodbye.",
      "À voix haute, avec un francophone, un camarade, ou en vous enregistrant sur votre téléphone : saluez de façon formelle, dites votre nom, épelez-le, demandez le nom de l'autre personne et prenez congé.",
      "قلها بصوت عالٍ لشخص يتحدث الفرنسية أو لزميل، أو سجّل صوتك على هاتفك: حيِّ بأسلوب رسمي، واذكر اسمك، وتهجَّه، واسأل عن اسم الشخص الآخر، ثم ودّعه."
    ),
    checklist: [
      t("I used « Bonjour » or « Bonsoir » with madame / monsieur.", "J'ai utilisé « Bonjour » ou « Bonsoir » avec madame / monsieur.", "استخدمت «Bonjour» أو «Bonsoir» مع madame / monsieur."),
      t("I said and spelled my name clearly.", "J'ai dit et épelé mon nom clairement.", "قلت اسمي وتهجّيته بوضوح."),
      t("I asked « Comment vous appelez-vous ? »", "J'ai demandé « Comment vous appelez-vous ? »", "سألت «Comment vous appelez-vous ?»"),
      t("I said goodbye politely.", "J'ai pris congé poliment.", "ودّعت بأدب."),
    ],
  },
  test: [
    {
      kind: "choice",
      id: "u01-t1",
      prompt: t("« Comment vous appelez-vous ? » means:", "« Comment vous appelez-vous ? » signifie :", "معنى «Comment vous appelez-vous ?»:"),
      optionsL10n: {
        en: ["What is your name?", "How are you?", "Where do you live?"],
        fr: ["Quel est votre nom ?", "Comment allez-vous ?", "Où habitez-vous ?"],
        ar: ["ما اسمك؟", "كيف حالك؟", "أين تسكن؟"],
      },
      correctIndex: 0,
    },
    {
      kind: "choice",
      id: "u01-t2",
      prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."),
      options: ["Je appelle Sara.", "Je m'appelle Sara.", "Moi appelle Sara."],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t3",
      prompt: t("Which greeting is used in the evening?", "Quelle salutation utilise-t-on le soir ?", "أي تحية تُستخدم في المساء؟"),
      options: ["Bonjour", "Bonsoir", "Bonne journée"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t4",
      prompt: t("Complete: Ils ___ Paul et Marc.", "Complétez : Ils ___ Paul et Marc.", "أكمل: Ils ___ Paul et Marc."),
      options: ["s'appelle", "s'appellent", "s'appelons"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t5",
      prompt: t("Which is correctly spelled?", "Quelle forme est bien écrite ?", "أي صيغة مكتوبة بشكل صحيح؟"),
      options: ["Vous vous appellez", "Vous vous appelez", "Vous vous apelez"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t6",
      prompt: t("Someone asks « Ça va ? ». The best answer is:", "On vous demande « Ça va ? ». La meilleure réponse :", "سألك أحدهم «Ça va ?». أفضل إجابة:"),
      options: ["Ça va bien, merci. Et toi ?", "Je m'appelle Paul.", "À demain !"],
      correctIndex: 0,
    },
    {
      kind: "choice",
      id: "u01-t7",
      prompt: t("You speak to a shop assistant you don't know. You use:", "Vous parlez à un vendeur inconnu. Vous utilisez :", "تتحدث مع بائع لا تعرفه. تستخدم:"),
      options: ["tu", "vous", "ils"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t8",
      prompt: t("A man meets you for the first time. He writes:", "Un homme vous rencontre pour la première fois. Il écrit :", "رجل يقابلك لأول مرة. يكتب:"),
      options: ["Enchanté.", "Enchantée.", "Enchantées."],
      correctIndex: 0,
    },
    {
      kind: "choice",
      id: "u01-t9",
      prompt: t("In French, the stress usually falls on:", "En français, l'accent tombe en général sur :", "في الفرنسية يقع النبر عادةً على:"),
      optionsL10n: {
        en: ["the first syllable", "the last syllable", "no syllable"],
        fr: ["la première syllabe", "la dernière syllabe", "aucune syllabe"],
        ar: ["المقطع الأول", "المقطع الأخير", "لا يوجد نبر"],
      },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u01-t10",
      prompt: t("You walk into a bakery in France. First, you say:", "Vous entrez dans une boulangerie en France. D'abord, vous dites :", "تدخل مخبزًا في فرنسا. أول ما تقوله:"),
      options: ["Une baguette !", "Bonjour, madame.", "Salut !"],
      correctIndex: 1,
    },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-introduce-self", "goal-ask-name"],
  replaces: ["fr-a1-intro-unit"],
};
