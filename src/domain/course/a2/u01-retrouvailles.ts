import { l10n as t, type CourseUnit } from "../types";

export const A2_U01: CourseUnit = {
  id: "fr-a2-u01-retrouvailles",
  level: "A2",
  order: 1,
  title: t("Catching up", "Retrouvailles", "لقاء بعد غياب"),
  theme: t(
    "Telling your life story and what has changed",
    "Raconter son parcours et ce qui a changé",
    "رواية مسيرة الحياة وما تغيّر فيها"
  ),
  canDo: [
    t("I can tell the main steps of my life in the past.", "Je peux raconter les grandes étapes de ma vie au passé.", "أستطيع أن أروي المراحل الكبرى في حياتي بصيغة الماضي."),
    t("I can say how long something has lasted or how long ago it happened.", "Je peux dire depuis combien de temps ou il y a combien de temps quelque chose s'est passé.", "أستطيع أن أقول منذ متى يحدث شيء ما أو منذ كم من الوقت حدث."),
    t("I can ask someone what has happened in their life.", "Je peux demander à quelqu'un ce qui s'est passé dans sa vie.", "أستطيع أن أسأل شخصًا عمّا حدث في حياته."),
    t("I can link events in time (d'abord, ensuite, enfin…).", "Je peux enchaîner des événements (d'abord, ensuite, enfin…).", "أستطيع أن أربط الأحداث زمنيًا (d'abord، ensuite، enfin…)."),
  ],
  context: t(
    "Yasmine and Thomas were in the same class at secondary school. Ten years later, they meet by chance in a café in Bordeaux.",
    "Yasmine et Thomas étaient dans la même classe au lycée. Dix ans plus tard, ils se retrouvent par hasard dans un café de Bordeaux.",
    "كانت ياسمين وتوما في الصف نفسه في المدرسة الثانوية. وبعد عشر سنوات يلتقيان مصادفةً في مقهى بمدينة بوردو."
  ),
  dialogue: {
    title: t("Ten years later", "Dix ans après", "بعد عشر سنوات"),
    setting: t("A café in Bordeaux", "Un café à Bordeaux", "مقهى في بوردو"),
    lines: [
      { speaker: "Thomas", fr: "Yasmine ? C'est toi ? Ça fait combien de temps !" },
      { speaker: "Yasmine", fr: "Thomas ! Au moins dix ans ! Qu'est-ce que tu deviens ?" },
      { speaker: "Thomas", fr: "Beaucoup de choses ! Après le lycée, je suis parti à Montréal pour mes études." },
      { speaker: "Yasmine", fr: "À Montréal ? Tu es resté combien de temps là-bas ?" },
      { speaker: "Thomas", fr: "Cinq ans. D'abord, j'ai fait un master en informatique, puis j'ai travaillé deux ans dans une start-up." },
      { speaker: "Yasmine", fr: "Et tu es rentré en France quand ?" },
      { speaker: "Thomas", fr: "Il y a deux ans. Maintenant, je travaille ici, à Bordeaux. Et toi ?" },
      { speaker: "Yasmine", fr: "Moi, je ne suis jamais partie à l'étranger ! J'ai étudié le droit à Toulouse, et ensuite j'ai trouvé un poste dans un cabinet d'avocats." },
      { speaker: "Thomas", fr: "Tu es avocate ? Bravo !" },
      { speaker: "Yasmine", fr: "Oui, depuis trois ans. Et l'année dernière, je me suis mariée !" },
      { speaker: "Thomas", fr: "Félicitations ! Vous avez déjà des enfants ?" },
      { speaker: "Yasmine", fr: "Pas encore. Et toi, tu t'es marié ?" },
      { speaker: "Thomas", fr: "Non, mais j'ai rencontré quelqu'un à Montréal. Elle s'appelle Chloé, elle est québécoise. Nous habitons ensemble depuis un an." },
      { speaker: "Yasmine", fr: "C'est génial ! Il faut absolument se revoir tous les quatre." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u01-c1", prompt: t("How long did Thomas live in Montreal?", "Combien de temps Thomas a-t-il vécu à Montréal ?", "كم من الوقت عاش توما في مونتريال؟"), optionsL10n: { en: ["Two years", "Five years", "Ten years"], fr: ["Deux ans", "Cinq ans", "Dix ans"], ar: ["سنتين", "خمس سنوات", "عشر سنوات"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u01-c2", prompt: t("When did he come back to France?", "Quand est-il rentré en France ?", "متى عاد إلى فرنسا؟"), optionsL10n: { en: ["Two years ago", "Last year", "Five years ago"], fr: ["Il y a deux ans", "L'année dernière", "Il y a cinq ans"], ar: ["منذ سنتين", "العام الماضي", "منذ خمس سنوات"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u01-c3", prompt: t("What is Yasmine's job?", "Quelle est la profession de Yasmine ?", "ما مهنة ياسمين؟"), optionsL10n: { en: ["Computer scientist", "Lawyer", "Teacher"], fr: ["Informaticienne", "Avocate", "Professeure"], ar: ["مهندسة برمجيات", "محامية", "معلّمة"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u01-c4", prompt: t("What happened to Yasmine last year?", "Que s'est-il passé pour Yasmine l'année dernière ?", "ماذا حدث لياسمين العام الماضي؟"), optionsL10n: { en: ["She got married.", "She moved abroad.", "She had a child."], fr: ["Elle s'est mariée.", "Elle est partie à l'étranger.", "Elle a eu un enfant."], ar: ["تزوّجت.", "سافرت إلى الخارج.", "أنجبت طفلًا."] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Life events", "Les étapes de la vie", "محطات الحياة"),
      items: [
        { fr: "naître (je suis né·e en…)", meaning: t("to be born (I was born in…)", "venir au monde", "يُولد (وُلدت في…)") },
        { fr: "faire des études", meaning: t("to study (at university)", "étudier dans le supérieur", "يتابع دراسته") },
        { fr: "obtenir un diplôme", meaning: t("to get a degree", "réussir ses études", "يحصل على شهادة") },
        { fr: "trouver un poste", meaning: t("to find a job", "obtenir un emploi", "يجد وظيفة") },
        { fr: "déménager", meaning: t("to move house", "changer de logement", "ينتقل إلى مسكن آخر") },
        { fr: "partir à l'étranger", meaning: t("to go abroad", "aller vivre dans un autre pays", "يسافر إلى الخارج") },
        { fr: "rentrer", meaning: t("to come back (home)", "revenir chez soi, dans son pays", "يعود (إلى بيته أو بلده)") },
        { fr: "rencontrer quelqu'un", meaning: t("to meet someone", "faire la connaissance de quelqu'un", "يتعرّف على شخص") },
        { fr: "se marier / se pacser", meaning: t("to get married / to enter a civil partnership", "s'unir officiellement", "يتزوّج / يرتبط بعقد شراكة مدنية") },
        { fr: "avoir un enfant", meaning: t("to have a child", "devenir parent", "يُنجب طفلًا") },
      ],
    },
    {
      title: t("Catching up", "Prendre des nouvelles", "السؤال عن الأخبار"),
      items: [
        { fr: "Qu'est-ce que tu deviens ?", meaning: t("What have you been up to?", "Quelles sont tes nouvelles ?", "ما أخبارك؟ ماذا تفعل هذه الأيام؟") },
        { fr: "Ça fait longtemps !", meaning: t("It's been a long time!", "On ne s'est pas vus depuis longtemps", "مرّ وقت طويل!") },
        { fr: "Félicitations !", meaning: t("Congratulations!", "pour un événement heureux", "تهانينا!") },
        { fr: "au moins", meaning: t("at least", "au minimum", "على الأقل") },
        { fr: "par hasard", meaning: t("by chance", "sans l'avoir prévu", "مصادفةً") },
        { fr: "là-bas", meaning: t("over there", "dans ce lieu éloigné", "هناك") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u01-g1",
      title: t("Passé composé: avoir or être, and agreement", "Le passé composé : avoir ou être, et l'accord", "الماضي المركّب: avoir أم être، والتوافق"),
      explanation: t(
        "Most verbs use avoir. Être is used with about fifteen verbs of movement or change (aller, venir, partir, arriver, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, rentrer, retourner, devenir…) and with all reflexive verbs. With être, the past participle agrees with the subject: « Yasmine est partie », « ils se sont mariés ». With avoir, it usually does not agree: « Elle a étudié ».",
        "La plupart des verbes utilisent avoir. Être s'utilise avec une quinzaine de verbes de mouvement ou de changement (aller, venir, partir, arriver, entrer, sortir, monter, descendre, rester, tomber, naître, mourir, rentrer, retourner, devenir…) et avec tous les verbes pronominaux. Avec être, le participe s'accorde avec le sujet : « Yasmine est partie », « ils se sont mariés ». Avec avoir, il ne s'accorde en général pas : « Elle a étudié ».",
        "معظم الأفعال تُصاغ مع avoir. أما être فتُستخدم مع نحو خمسة عشر فعلًا تدل على الحركة أو التغيّر (aller، venir، partir، arriver، entrer، sortir، monter، descendre، rester، tomber، naître، mourir، rentrer، retourner، devenir…) ومع جميع الأفعال الانعكاسية. ومع être يتوافق اسم المفعول مع الفاعل: «Yasmine est partie» و«ils se sont mariés». أما مع avoir فلا يتوافق عادةً: «Elle a étudié»."
      ),
      table: {
        head: ["", "avoir", "être"],
        rows: [
          ["je", "j'ai travaillé", "je suis parti(e)"],
          ["tu", "tu as étudié", "tu es rentré(e)"],
          ["il / elle", "il a trouvé", "elle est née"],
          ["nous", "nous avons déménagé", "nous sommes arrivé(e)s"],
          ["vous", "vous avez vécu", "vous vous êtes marié(e)s"],
          ["ils / elles", "ils ont eu", "elles sont restées"],
        ],
      },
      examples: [
        { fr: "Je suis née à Oran en 1995.", gloss: t("I was born in Oran in 1995. (a woman)", "Naître + être, accord.", "وُلدتُ في وهران عام 1995. (امرأة)") },
        { fr: "Ils ont vécu cinq ans au Canada.", gloss: t("They lived in Canada for five years.", "Vivre → vécu, avec avoir.", "عاشوا خمس سنوات في كندا.") },
      ],
      watchOut: t(
        "Some useful irregular participles: vivre → vécu, naître → né, devenir → devenu, obtenir → obtenu, avoir → eu, être → été.",
        "Participes irréguliers utiles : vivre → vécu, naître → né, devenir → devenu, obtenir → obtenu, avoir → eu, être → été.",
        "أسماء مفعول شاذة مفيدة: vivre ← vécu، naître ← né، devenir ← devenu، obtenir ← obtenu، avoir ← eu، être ← été."
      ),
    },
    {
      id: "a2u01-g2",
      title: t("Adverbs with the passé composé: déjà, jamais, pas encore", "Les adverbes au passé composé : déjà, jamais, pas encore", "الظروف مع الماضي المركّب: déjà وjamais وpas encore"),
      explanation: t(
        "Short adverbs go between the auxiliary and the participle: « J'ai déjà visité Rome », « Il a beaucoup travaillé », « Nous avons bien mangé ». In the negative, ne… jamais (never) and ne… pas encore (not yet) surround the auxiliary: « Je ne suis jamais partie », « Elle n'a pas encore fini ».",
        "Les adverbes courts se placent entre l'auxiliaire et le participe : « J'ai déjà visité Rome », « Il a beaucoup travaillé », « Nous avons bien mangé ». À la forme négative, ne… jamais et ne… pas encore entourent l'auxiliaire : « Je ne suis jamais partie », « Elle n'a pas encore fini ».",
        "تأتي الظروف القصيرة بين الفعل المساعد واسم المفعول: «J'ai déjà visité Rome» و«Il a beaucoup travaillé» و«Nous avons bien mangé». وفي النفي تحيط ne… jamais (أبدًا) وne… pas encore (ليس بعد) بالفعل المساعد: «Je ne suis jamais partie» و«Elle n'a pas encore fini»."
      ),
      examples: [
        { fr: "Tu as déjà habité à l'étranger ? — Non, jamais.", gloss: t("Have you ever lived abroad? — No, never.", "déjà / jamais.", "هل سبق أن سكنت في الخارج؟ — لا، أبدًا.") },
        { fr: "Nous n'avons pas encore choisi la date du mariage.", gloss: t("We haven't chosen the wedding date yet.", "ne… pas encore.", "لم نختر موعد الزفاف بعد.") },
      ],
    },
    {
      id: "a2u01-g3",
      title: t("Il y a, depuis, pendant, en", "Il y a, depuis, pendant, en", "il y a وdepuis وpendant وen"),
      explanation: t(
        "« Il y a » + time = how long ago, with a past tense: « Je suis rentré il y a deux ans ». « Depuis » + time = since / for, for a situation that continues, with the present: « Je suis avocate depuis trois ans ». « Pendant » + time = the duration of a finished action: « J'ai vécu à Montréal pendant cinq ans ». « En » + time = the time needed to do something: « J'ai fini mon master en deux ans ».",
        "« Il y a » + durée indique un moment dans le passé : « Je suis rentré il y a deux ans ». « Depuis » + durée indique une situation qui continue, avec le présent : « Je suis avocate depuis trois ans ». « Pendant » + durée donne la durée d'une action terminée : « J'ai vécu à Montréal pendant cinq ans ». « En » + durée indique le temps nécessaire : « J'ai fini mon master en deux ans ».",
        "«il y a» + مدة = منذ (لحدث في الماضي)، مع زمن ماضٍ: «Je suis rentré il y a deux ans». و«depuis» + مدة = منذ (لحالة مستمرة)، مع المضارع: «Je suis avocate depuis trois ans». و«pendant» + مدة = لمدة (لحدث انتهى): «J'ai vécu à Montréal pendant cinq ans». و«en» + مدة = الوقت اللازم لإنجاز شيء: «J'ai fini mon master en deux ans»."
      ),
      examples: [
        { fr: "On s'est rencontrés il y a dix ans.", gloss: t("We met ten years ago.", "il y a + passé.", "تعارفنا منذ عشر سنوات.") },
        { fr: "Ils habitent ensemble depuis un an.", gloss: t("They have lived together for a year.", "depuis + présent.", "يسكنان معًا منذ عام.") },
        { fr: "D'abord, j'ai étudié, ensuite j'ai travaillé, enfin je suis rentré.", gloss: t("First I studied, then I worked, finally I came back.", "Connecteurs.", "في البداية درست، ثم عملت، وأخيرًا عدت.") },
      ],
    },
  ],
  pronunciation: {
    title: t("« Ils ont » [z] or « ils sont » [s]?", "« Ils ont » [z] ou « ils sont » [s] ?", "«ils ont» [z] أم «ils sont» [s]؟"),
    explanation: t(
      "Avoir and être sound almost the same in the plural. The difference is one consonant: « ils ont » [ilzɔ̃] has a [z] (liaison), « ils sont » [ilsɔ̃] has an [s]. Listen carefully: it tells you which auxiliary — and often which verb — is used.",
      "Avoir et être se ressemblent beaucoup au pluriel. La différence tient à une consonne : « ils ont » [ilzɔ̃] avec un [z] (liaison), « ils sont » [ilsɔ̃] avec un [s]. Écoutez bien : cela indique l'auxiliaire — et souvent le verbe.",
      "يتشابه avoir وêtre كثيرًا في صيغة الجمع، والفرق في حرف ساكن واحد: «ils ont» [ilzɔ̃] فيها [z] (وصل)، و«ils sont» [ilsɔ̃] فيها [s]. استمع جيدًا، فهذا يدلّك على الفعل المساعد، وغالبًا على الفعل نفسه."
    ),
    examples: ["ils ont — ils sont", "elles ont étudié", "elles sont parties", "Ils ont vécu à Lyon.", "Ils sont restés à Lyon."],
  },
  culture: {
    title: t("Studying and working abroad", "Étudier et travailler à l'étranger", "الدراسة والعمل في الخارج"),
    body: t(
      "Many young French people spend part of their studies abroad, often through the European Erasmus+ programme. Quebec is a popular destination: French is the official language there, and France and Quebec have agreements that make it easier to study and work in both. In conversations, people often ask « Qu'est-ce que tu deviens ? » to catch up after a long time: the answer usually covers studies, work, where you live and family.",
      "Beaucoup de jeunes Français passent une partie de leurs études à l'étranger, souvent avec le programme européen Erasmus+. Le Québec est une destination populaire : le français y est la langue officielle, et des accords entre la France et le Québec facilitent les études et le travail des deux côtés. Pour prendre des nouvelles après longtemps, on demande souvent « Qu'est-ce que tu deviens ? » : la réponse parle en général des études, du travail, du lieu de vie et de la famille.",
      "يقضي كثير من الشباب الفرنسيين جزءًا من دراستهم في الخارج، غالبًا ضمن البرنامج الأوروبي Erasmus+. وتُعدّ كيبيك وجهة شائعة، إذ الفرنسية فيها هي اللغة الرسمية، وتوجد اتفاقيات بين فرنسا وكيبيك تسهّل الدراسة والعمل في البلدين. وللسؤال عن الأخبار بعد غياب طويل يُقال كثيرًا «Qu'est-ce que tu deviens ?»، ويتحدث الجواب عادةً عن الدراسة والعمل ومكان السكن والعائلة."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u01-p1", prompt: t("Passé composé of partir (Yasmine).", "Passé composé de partir (Yasmine).", "الماضي المركّب من partir (ياسمين)."), sentence: "Yasmine n'est jamais ___ à l'étranger.", answers: ["partie"] },
    { kind: "fill", id: "a2u01-p2", prompt: t("Passé composé of vivre.", "Passé composé de vivre.", "الماضي المركّب من vivre."), sentence: "Nous avons ___ trois ans à Lille.", answers: ["vécu"] },
    { kind: "fill", id: "a2u01-p3", prompt: t("Auxiliary: avoir or être?", "Auxiliaire : avoir ou être ?", "الفعل المساعد: avoir أم être؟"), sentence: "Ils ___ arrivés en France en 2019.", answers: ["sont"] },
    { kind: "fill", id: "a2u01-p4", prompt: t("Passé composé of se marier (they, masculine).", "Passé composé de se marier (ils).", "الماضي المركّب من se marier (هم)."), sentence: "Ils ___ en juin.", answers: ["se sont mariés"] },
    { kind: "fill", id: "a2u01-p5", prompt: t("Il y a, depuis or pendant?", "Il y a, depuis ou pendant ?", "il y a أم depuis أم pendant؟"), sentence: "J'habite ici ___ cinq ans.", answers: ["depuis"] },
    { kind: "fill", id: "a2u01-p6", prompt: t("Il y a, depuis or pendant?", "Il y a, depuis ou pendant ?", "il y a أم depuis أم pendant؟"), sentence: "Je l'ai rencontré ___ trois mois.", answers: ["il y a"] },
    { kind: "fill", id: "a2u01-p7", prompt: t("Il y a, depuis or pendant?", "Il y a, depuis ou pendant ?", "il y a أم depuis أم pendant؟"), sentence: "Elle a travaillé à Dakar ___ deux ans.", answers: ["pendant"] },
    { kind: "choice", id: "a2u01-p8", prompt: t("Choose the correct position of « déjà ».", "Choisissez la bonne place de « déjà ».", "اختر الموضع الصحيح لـ«déjà»."), options: ["J'ai visité déjà Rome.", "J'ai déjà visité Rome.", "Déjà j'ai visité Rome."], correctIndex: 1 },
    { kind: "choice", id: "a2u01-p9", prompt: t("Negative: « Elle a fini. » (not yet)", "Négation : « Elle a fini. » (pas encore)", "النفي: «Elle a fini.» (ليس بعد)"), options: ["Elle n'a pas encore fini.", "Elle a pas encore fini.", "Elle n'a fini pas encore."], correctIndex: 0 },
    { kind: "order", id: "a2u01-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Qu'est-ce que tu deviens ?" },
    { kind: "order", id: "a2u01-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je suis rentré en France il y a deux ans." },
  ],
  production: {
    prompt: t(
      "Write an email (80–100 words) to an old friend you haven't seen for years: tell the main things that have happened in your life (studies, work, moves, family) and ask for their news.",
      "Écrivez un courriel (80 à 100 mots) à un ancien ami que vous n'avez pas vu depuis des années : racontez les principaux événements de votre vie (études, travail, déménagements, famille) et demandez-lui de ses nouvelles.",
      "اكتب رسالة إلكترونية (80 إلى 100 كلمة) إلى صديق قديم لم تره منذ سنوات: احكِ أهم ما حدث في حياتك (الدراسة، والعمل، والتنقّل، والعائلة)، واسأله عن أخباره."
    ),
    model: "Salut Karim,\nÇa fait longtemps ! Je t'écris parce que j'ai retrouvé ton adresse par hasard. Après le lycée, j'ai fait des études de commerce à Lille pendant quatre ans. Ensuite, je suis partie un an en Espagne pour un stage. Je suis rentrée il y a trois ans et maintenant je travaille dans une banque à Paris. L'année dernière, j'ai déménagé et je me suis pacsée avec Julien. Nous n'avons pas encore d'enfants. Et toi, qu'est-ce que tu deviens ? Tu habites toujours à Marseille ?\nÀ bientôt,\nNadia",
    checklist: [
      t("I use the passé composé with avoir and être correctly (with agreement).", "J'utilise correctement le passé composé avec avoir et être (avec l'accord).", "استخدمت الماضي المركّب مع avoir وêtre بشكل صحيح (مع التوافق)."),
      t("I use il y a, depuis or pendant at least twice.", "J'utilise il y a, depuis ou pendant au moins deux fois.", "استخدمت il y a أو depuis أو pendant مرتين على الأقل."),
      t("I link events with connectors (d'abord, ensuite, puis…).", "J'enchaîne les événements avec des connecteurs (d'abord, ensuite, puis…).", "ربطت الأحداث بأدوات ربط (d'abord، ensuite، puis…)."),
      t("I ask at least one question about my friend's news.", "Je pose au moins une question sur les nouvelles de mon ami.", "طرحت سؤالًا واحدًا على الأقل عن أخبار صديقي."),
    ],
  },
  task: {
    title: t("My life in two minutes", "Ma vie en deux minutes", "حياتي في دقيقتين"),
    brief: t(
      "Prepare a simple timeline of your life (5–6 key dates), then tell it aloud in French in two minutes, as if to a new colleague. Then interview a partner with « Qu'est-ce que tu as fait après… ? », « Tu habites ici depuis quand ? ».",
      "Préparez une frise simple de votre vie (5 ou 6 dates clés), puis racontez-la à voix haute en français en deux minutes, comme à un nouveau collègue. Interrogez ensuite un partenaire : « Qu'est-ce que tu as fait après… ? », « Tu habites ici depuis quand ? ».",
      "حضّر خطًا زمنيًا بسيطًا لحياتك (5 أو 6 تواريخ مهمة)، ثم احكِه بصوت عالٍ بالفرنسية في دقيقتين، كأنك تتحدث إلى زميل جديد. ثم حاور شريكًا: «Qu'est-ce que tu as fait après… ?»، «Tu habites ici depuis quand ?»."
    ),
    checklist: [
      t("I told at least five events in the past.", "J'ai raconté au moins cinq événements au passé.", "رويت خمسة أحداث على الأقل بصيغة الماضي."),
      t("I said how long ago and since when.", "J'ai dit il y a combien de temps et depuis quand.", "ذكرت منذ كم من الوقت ومنذ متى."),
      t("I asked my partner at least three questions.", "J'ai posé au moins trois questions à mon partenaire.", "طرحت على شريكي ثلاثة أسئلة على الأقل."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u01-t1", prompt: t("« Elle ___ née à Tunis. »", "« Elle ___ née à Tunis. »", "«Elle ___ née à Tunis.»"), options: ["a", "est", "était"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t2", prompt: t("« Nous ___ beaucoup voyagé. »", "« Nous ___ beaucoup voyagé. »", "«Nous ___ beaucoup voyagé.»"), options: ["avons", "sommes", "allons"], correctIndex: 0 },
    { kind: "choice", id: "a2u01-t3", prompt: t("« Mes parents se sont ___ en 1990. »", "« Mes parents se sont ___ en 1990. »", "«Mes parents se sont ___ en 1990.»"), options: ["marié", "mariés", "mariées"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t4", prompt: t("Past participle of « vivre »:", "Participe passé de « vivre » :", "اسم المفعول من «vivre»:"), options: ["vivé", "vécu", "vivu"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t5", prompt: t("« Je travaille ici ___ 2021. »", "« Je travaille ici ___ 2021. »", "«Je travaille ici ___ 2021.»"), options: ["il y a", "depuis", "pendant"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t6", prompt: t("« Il est parti ___ une semaine. » (a week ago)", "« Il est parti ___ une semaine. » (il y a une semaine)", "«Il est parti ___ une semaine.» (منذ أسبوع)"), options: ["depuis", "il y a", "en"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t7", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Je n'ai jamais allé au Canada.", "Je ne suis jamais allé au Canada.", "Je suis jamais n'allé au Canada."], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t8", prompt: t("« Qu'est-ce que tu deviens ? » means:", "« Qu'est-ce que tu deviens ? » signifie :", "معنى «Qu'est-ce que tu deviens ?»:"), optionsL10n: { en: ["What's new with you?", "What do you want to become?", "Where are you going?"], fr: ["Quelles sont tes nouvelles ?", "Quel métier veux-tu faire ?", "Où vas-tu ?"], ar: ["ما أخبارك؟", "ماذا تريد أن تصبح؟", "إلى أين تذهب؟"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u01-t9", prompt: t("Which phrase has a [z] sound?", "Quelle expression contient le son [z] ?", "أي عبارة فيها الصوت [z]؟"), options: ["ils sont", "ils ont", "il sait"], correctIndex: 1 },
    { kind: "choice", id: "a2u01-t10", prompt: t("Erasmus+ is…", "Erasmus+, c'est…", "Erasmus+ هو…"), optionsL10n: { en: ["a European programme for studying abroad", "a French university", "a type of visa for Quebec"], fr: ["un programme européen pour étudier à l'étranger", "une université française", "un visa pour le Québec"], ar: ["برنامج أوروبي للدراسة في الخارج", "جامعة فرنسية", "نوع من التأشيرات إلى كيبيك"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-a2-past-unit", "fr-a2-deep-past"],
};
