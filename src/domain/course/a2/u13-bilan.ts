import { l10n as t, type CourseUnit } from "../types";

/** End-of-level review in the format of the DELF A2 (four skills). */
export const A2_U13: CourseUnit = {
  id: "fr-a2-exam-bilan",
  level: "A2",
  order: 13,
  title: t("A2 review — DELF A2 preparation", "Bilan A2 — préparation au DELF A2", "مراجعة المستوى A2 — التحضير لامتحان DELF A2"),
  theme: t(
    "Reviewing the level and training for the four parts of the DELF A2",
    "Réviser le niveau et s'entraîner aux quatre épreuves du DELF A2",
    "مراجعة المستوى والتدرّب على أقسام امتحان DELF A2 الأربعة"
  ),
  canDo: [
    t("I can understand announcements and short conversations about familiar topics.", "Je peux comprendre des annonces et de courtes conversations sur des sujets familiers.", "أستطيع أن أفهم الإعلانات والمحادثات القصيرة حول مواضيع مألوفة."),
    t("I can find information in everyday texts (emails, adverts, articles).", "Je peux trouver des informations dans des textes de la vie quotidienne (courriels, annonces, articles).", "أستطيع أن أجد المعلومات في نصوص الحياة اليومية (رسائل إلكترونية، وإعلانات، ومقالات)."),
    t("I can write a short story about an experience and a friendly letter (60–80 words each).", "Je peux écrire le récit d'une expérience et une lettre amicale (60 à 80 mots chacun).", "أستطيع أن أكتب رواية عن تجربة ورسالة ودّية (60 إلى 80 كلمة لكلٍّ منهما)."),
    t("I can talk about myself, present a topic and interact in an everyday situation.", "Je peux parler de moi, présenter un sujet et interagir dans une situation de la vie quotidienne.", "أستطيع أن أتحدث عن نفسي، وأعرض موضوعًا، وأتفاعل في موقف من الحياة اليومية."),
  ],
  context: t(
    "You have finished the twelve A2 units. This review brings together the grammar of the level (past tenses, pronouns, future, conditional, relative pronouns) and trains you in the format of the DELF A2. The site prepares you; the diploma itself is taken in an approved exam centre.",
    "Vous avez terminé les douze unités A2. Ce bilan rassemble la grammaire du niveau (temps du passé, pronoms, futur, conditionnel, pronoms relatifs) et vous entraîne au format du DELF A2. Le site vous prépare ; le diplôme se passe dans un centre d'examen agréé.",
    "لقد أنهيت وحدات المستوى A2 الاثنتي عشرة. تجمع هذه المراجعة قواعد المستوى (أزمنة الماضي، والضمائر، والمستقبل، وصيغة الشرط، وأسماء الموصول) وتدرّبك على صيغة امتحان DELF A2. الموقع يُعدّك للامتحان، أما الشهادة نفسها فتُجرى في مركز امتحان معتمد."
  ),
  dialogue: {
    title: t("Listening document: a radio programme", "Document sonore : une émission de radio", "وثيقة سمعية: برنامج إذاعي"),
    setting: t(
      "As in the DELF A2 listening paper: read the questions, listen twice, then answer.",
      "Comme à l'épreuve de compréhension de l'oral du DELF A2 : lisez les questions, écoutez deux fois, puis répondez.",
      "كما في قسم الفهم السمعي في امتحان DELF A2: اقرأ الأسئلة، واستمع مرتين، ثم أجب."
    ),
    lines: [
      { speaker: "Animatrice", fr: "Bonjour à tous et bienvenue dans « Nouvelle vie ». Aujourd'hui, nous recevons Malik, qui a quitté Paris il y a deux ans." },
      { speaker: "Malik", fr: "Bonjour ! Oui, avant, je travaillais dans une banque à Paris. Je prenais le métro tous les jours et j'étais toujours stressé." },
      { speaker: "Animatrice", fr: "Et qu'est-ce qui a changé ?" },
      { speaker: "Malik", fr: "Un jour, j'ai visité un village en Bretagne et j'ai eu un coup de cœur. Trois mois plus tard, je me suis installé là-bas." },
      { speaker: "Animatrice", fr: "Qu'est-ce que vous faites maintenant ?" },
      { speaker: "Malik", fr: "J'ai ouvert une petite librairie-café, où on peut lire, boire un thé et rencontrer des gens. Le week-end, j'organise des ateliers d'écriture pour les enfants." },
      { speaker: "Animatrice", fr: "Il n'y a pas d'inconvénients ?" },
      { speaker: "Malik", fr: "Si, l'hiver est long et je gagne moins d'argent qu'avant. Mais je ne regrette rien." },
      { speaker: "Animatrice", fr: "Et quels sont vos projets ?" },
      { speaker: "Malik", fr: "L'année prochaine, j'ouvrirai une deuxième librairie dans la ville voisine. Et si tout va bien, j'aimerais écrire un livre sur cette aventure." },
      { speaker: "Animatrice", fr: "Merci, Malik. La semaine prochaine, nous parlerons d'une famille qui fait le tour du monde à vélo." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u13-c1", prompt: t("What was Malik's job before?", "Quel était le métier de Malik avant ?", "ماذا كانت مهنة مالك سابقًا؟"), optionsL10n: { en: ["He worked in a bank.", "He was a bookseller.", "He was a teacher."], fr: ["Il travaillait dans une banque.", "Il était libraire.", "Il était professeur."], ar: ["كان يعمل في بنك.", "كان بائع كتب.", "كان أستاذًا."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u13-c2", prompt: t("When did he leave Paris?", "Quand a-t-il quitté Paris ?", "متى غادر باريس؟"), optionsL10n: { en: ["Two years ago", "Three months ago", "Last year"], fr: ["Il y a deux ans", "Il y a trois mois", "L'année dernière"], ar: ["منذ سنتين", "منذ ثلاثة أشهر", "في السنة الماضية"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u13-c3", prompt: t("What does he do at weekends?", "Que fait-il le week-end ?", "ماذا يفعل في عطلة نهاية الأسبوع؟"), optionsL10n: { en: ["He runs writing workshops for children.", "He goes back to Paris.", "He works in a bank."], fr: ["Il organise des ateliers d'écriture pour les enfants.", "Il retourne à Paris.", "Il travaille dans une banque."], ar: ["ينظّم ورش كتابة للأطفال.", "يعود إلى باريس.", "يعمل في بنك."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u13-c4", prompt: t("What drawback does he mention?", "Quel inconvénient mentionne-t-il ?", "ما العيب الذي يذكره؟"), optionsL10n: { en: ["He earns less money.", "He has no friends.", "The village is noisy."], fr: ["Il gagne moins d'argent.", "Il n'a pas d'amis.", "Le village est bruyant."], ar: ["يكسب مالًا أقل.", "ليس لديه أصدقاء.", "القرية صاخبة."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u13-c5", prompt: t("What would he like to do if everything goes well?", "Qu'aimerait-il faire si tout va bien ?", "ماذا يودّ أن يفعل إذا سار كل شيء على ما يرام؟"), optionsL10n: { en: ["Write a book about his adventure", "Go round the world by bike", "Go back to his old job"], fr: ["Écrire un livre sur son aventure", "Faire le tour du monde à vélo", "Reprendre son ancien travail"], ar: ["أن يكتب كتابًا عن مغامرته", "أن يجوب العالم بالدرّاجة", "أن يعود إلى عمله القديم"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("DELF A2 instructions", "Les consignes du DELF A2", "تعليمات امتحان DELF A2"),
      items: [
        { fr: "Lisez les questions, puis écoutez le document.", meaning: t("Read the questions, then listen.", "consigne d'écoute", "اقرأ الأسئلة ثم استمع إلى الوثيقة.") },
        { fr: "Justifiez votre réponse.", meaning: t("Justify your answer.", "citer le texte", "برّر إجابتك.") },
        { fr: "Associez chaque annonce à une image.", meaning: t("Match each announcement with a picture.", "exercice d'association", "اربط كل إعلان بصورة.") },
        { fr: "Racontez une expérience.", meaning: t("Tell about an experience.", "production écrite, partie 1", "اروِ تجربة.") },
        { fr: "Répondez à la lettre de votre ami.", meaning: t("Answer your friend's letter.", "production écrite, partie 2", "أجب عن رسالة صديقك.") },
        { fr: "Le monologue suivi", gender: "m", meaning: t("the short talk", "parler seul d'un sujet", "العرض المتواصل") },
        { fr: "L'exercice en interaction", gender: "m", meaning: t("the role-play", "jeu de rôle avec l'examinateur", "تمرين التفاعل") },
        { fr: "au moins / au maximum", meaning: t("at least / at most", "nombre de mots", "على الأقل / على الأكثر") },
      ],
    },
    {
      title: t("Gaining time and repairing", "Gagner du temps et se corriger", "كسب الوقت وتصحيح النفس"),
      items: [
        { fr: "Alors, voyons…", meaning: t("So, let's see…", "pour réfléchir", "حسنًا، لنرَ…") },
        { fr: "Comment dire…", meaning: t("How can I put it…", "chercher un mot", "كيف أقولها…") },
        { fr: "Je veux dire que…", meaning: t("I mean that…", "reformuler", "أقصد أنّ…") },
        { fr: "Pardon, je reprends.", meaning: t("Sorry, let me start again.", "se corriger", "عفوًا، أعيد من جديد.") },
        { fr: "Qu'est-ce que vous entendez par… ?", meaning: t("What do you mean by…?", "demander une précision", "ماذا تقصد بـ…؟") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u13-g1",
      title: t("Review: the past tenses", "Bilan : les temps du passé", "مراجعة: أزمنة الماضي"),
      explanation: t(
        "In a DELF A2 story, mix three forms. Passé composé for events (« j'ai visité », « je me suis installé »), imparfait for background, descriptions and habits (« je travaillais », « j'étais stressé »), and venir de for something very recent (« je viens d'arriver »). Remember: être + agreement for movement verbs and pronominal verbs; avoir for the others.",
        "Dans un récit du DELF A2, on mélange trois formes. Le passé composé pour les événements (« j'ai visité », « je me suis installé »), l'imparfait pour le décor, les descriptions et les habitudes (« je travaillais », « j'étais stressé »), et venir de pour un passé très récent (« je viens d'arriver »). Rappel : être + accord pour les verbes de mouvement et les verbes pronominaux ; avoir pour les autres.",
        "في رواية امتحان DELF A2 نمزج ثلاث صيغ: الماضي المركّب للأحداث («j'ai visité» و«je me suis installé»)، والـimparfait للخلفية والأوصاف والعادات («je travaillais» و«j'étais stressé»)، وvenir de لما حدث للتوّ («je viens d'arriver»). تذكّر: être مع التوافق لأفعال الحركة والأفعال الضميرية، وavoir لبقية الأفعال."
      ),
      table: {
        head: ["forme", "emploi", "exemple"],
        rows: [
          ["passé composé", "événement", "un jour, j'ai visité un village"],
          ["imparfait", "décor, habitude", "avant, je prenais le métro"],
          ["venir de", "passé récent", "je viens de finir"],
        ],
      },
      examples: [
        { fr: "Il faisait beau, alors nous sommes allés à la plage.", gloss: t("The weather was nice, so we went to the beach.", "Imparfait (décor) + passé composé (événement).", "كان الجو جميلًا، فذهبنا إلى الشاطئ.") },
        { fr: "Quand j'étais enfant, je passais mes vacances chez ma grand-mère.", gloss: t("When I was a child, I spent my holidays at my grandmother's.", "Habitude passée.", "عندما كنت طفلًا كنت أقضي عطلاتي عند جدّتي.") },
      ],
    },
    {
      id: "a2u13-g2",
      title: t("Review: pronouns", "Bilan : les pronoms", "مراجعة: الضمائر"),
      explanation: t(
        "Pronouns avoid repetition and make your French sound natural. Direct object (COD): le, la, l', les. Indirect object with à + person (COI): lui, leur. « En » replaces de + noun or a quantity. « Y » replaces à + place or thing. Relative pronouns: qui (subject), que (object), où (place / time). All object pronouns go before the conjugated verb, or before the infinitive: « Je vais le voir ».",
        "Les pronoms évitent les répétitions et rendent votre français naturel. Complément d'objet direct : le, la, l', les. Complément d'objet indirect (à + personne) : lui, leur. « En » remplace de + nom ou une quantité. « Y » remplace à + lieu ou chose. Pronoms relatifs : qui (sujet), que (objet), où (lieu / temps). Tous les pronoms compléments se placent devant le verbe conjugué, ou devant l'infinitif : « Je vais le voir ».",
        "تمنع الضمائر التكرار وتجعل فرنسيتك طبيعية. المفعول به المباشر (COD): le وla وl' وles. والمفعول غير المباشر مع à + شخص (COI): lui وleur. و«en» تحلّ محل de + اسم أو محل كمية. و«y» تحلّ محل à + مكان أو شيء. وأسماء الموصول: qui (فاعل) وque (مفعول) وoù (مكان / زمان). وتأتي جميع ضمائر المفعول قبل الفعل المصرَّف أو قبل المصدر: «Je vais le voir»."
      ),
      table: {
        head: ["pronom", "remplace", "exemple"],
        rows: [
          ["le / la / les", "COD", "ce livre → je le lis"],
          ["lui / leur", "à + personne", "à Marie → je lui écris"],
          ["en", "de + nom, quantité", "du pain → j'en achète"],
          ["y", "à + lieu", "à Lyon → j'y vais"],
          ["qui / que / où", "relatif", "le café où je travaille"],
        ],
      },
      examples: [
        { fr: "Des livres ? J'en ai acheté trois et je les ai déjà lus.", gloss: t("Books? I bought three and I've already read them.", "en (quantité) + les (COD, accord).", "كتب؟ اشتريت ثلاثة منها وقرأتها بالفعل.") },
        { fr: "La Bretagne ? J'y suis allé l'été dernier.", gloss: t("Brittany? I went there last summer.", "y = en Bretagne.", "بريتاني؟ ذهبت إليها الصيف الماضي.") },
      ],
      watchOut: t(
        "With avoir, the past participle agrees with a COD placed before it: « Ces photos, je les ai prises. » It does not agree with « en ».",
        "Avec avoir, le participe passé s'accorde avec le COD placé avant : « Ces photos, je les ai prises. » Il ne s'accorde pas avec « en ».",
        "مع avoir يتوافق اسم المفعول مع المفعول المباشر إذا جاء قبله: «Ces photos, je les ai prises.» ولا يتوافق مع «en»."
      ),
    },
    {
      id: "a2u13-g3",
      title: t("Review: future, conditional, si", "Bilan : futur, conditionnel, si", "مراجعة: المستقبل والشرط وsi"),
      explanation: t(
        "For plans, use the near future (« je vais partir ») or the simple future (« je partirai »). For wishes and politeness, the conditional (« j'aimerais », « pourriez-vous… ? »). For a real condition: si + present → future (« Si tout va bien, j'ouvrirai une librairie »). Both tenses share the same irregular stems: ser-, aur-, fer-, ir-, pourr-, voudr-, viendr-, verr-.",
        "Pour les projets, on utilise le futur proche (« je vais partir ») ou le futur simple (« je partirai »). Pour les souhaits et la politesse, le conditionnel (« j'aimerais », « pourriez-vous… ? »). Pour une condition réelle : si + présent → futur (« Si tout va bien, j'ouvrirai une librairie »). Les deux temps ont les mêmes radicaux irréguliers : ser-, aur-, fer-, ir-, pourr-, voudr-, viendr-, verr-.",
        "للمشاريع نستخدم المستقبل القريب («je vais partir») أو المستقبل البسيط («je partirai»). وللأمنيات والتأدّب صيغة الشرط («j'aimerais» و«pourriez-vous… ?»). وللشرط الواقعي: si + مضارع ← مستقبل («Si tout va bien, j'ouvrirai une librairie»). وللزمنين الجذور الشاذّة نفسها: ser- وaur- وfer- وir- وpourr- وvoudr- وviendr- وverr-."
      ),
      examples: [
        { fr: "Si tu viens samedi, on ira au marché ensemble.", gloss: t("If you come on Saturday, we'll go to the market together.", "si + présent → futur.", "إذا جئت يوم السبت فسنذهب إلى السوق معًا.") },
        { fr: "Je voudrais savoir si vous avez encore des places.", gloss: t("I would like to know if you still have seats.", "Conditionnel de politesse.", "أودّ أن أعرف إن كانت لديكم أماكن شاغرة.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Speaking test strategies", "Stratégies pour l'épreuve orale", "استراتيجيات للامتحان الشفهي"),
    explanation: t(
      "In the DELF A2 speaking test, examiners assess whether you communicate effectively, not whether you sound native. Use the 10 minutes of preparation to note key words (not full sentences) for the talk and the role-play. Structure your talk with connectors (d'abord, ensuite, par contre, enfin), keep a clear rhythm with pauses between groups of words, and if you make a mistake, correct yourself calmly: self-correction is a good sign.",
      "À l'oral du DELF A2, les examinateurs évaluent si vous communiquez efficacement, pas si vous avez l'accent d'un natif. Utilisez les 10 minutes de préparation pour noter des mots-clés (pas des phrases complètes) pour le monologue et l'interaction. Structurez votre monologue avec des connecteurs (d'abord, ensuite, par contre, enfin), gardez un rythme clair avec des pauses entre les groupes de mots et, si vous faites une erreur, corrigez-vous calmement : l'autocorrection est un bon signe.",
      "في الامتحان الشفهي لـDELF A2 يقيّم الممتحنون مدى فاعلية تواصلك، لا مدى قرب نطقك من نطق أهل اللغة. استغلّ دقائق التحضير العشر لتدوين كلمات مفتاحية (لا جمل كاملة) للعرض والتفاعل. ونظّم عرضك بأدوات الربط (d'abord وensuite وpar contre وenfin)، وحافظ على إيقاع واضح مع وقفات بين مجموعات الكلمات، وإذا أخطأت فصحّح نفسك بهدوء: فتصحيح النفس علامة جيدة."
    ),
    examples: [
      "D'abord, je vais vous parler de ma ville.",
      "Ensuite, je vous expliquerai pourquoi je l'aime.",
      "Pardon, je reprends : nous sommes allés au musée.",
      "Pourriez-vous répéter la question, s'il vous plaît ?",
      "Enfin, si j'en ai l'occasion, j'aimerais y retourner.",
    ],
  },
  culture: {
    title: t("The DELF A2 in practice", "Le DELF A2 en pratique", "امتحان DELF A2 عمليًا"),
    body: t(
      "The DELF A2 is issued by France Éducation international for the French Ministry of Education and is valid for life. The exam has four parts, each marked out of 25. Listening (about 25 minutes), reading (30 minutes) and writing (45 minutes, two texts of 60–80 words) are taken together, about 1 h 40 in total. The speaking test is individual: 6–8 minutes after 10 minutes of preparation, in three parts (guided interview, short talk, role-play). To pass, you need at least 50 out of 100, with a minimum of 5 out of 25 in each part. The A2 is often requested for some residence procedures in France.",
      "Le DELF A2 est délivré par France Éducation international pour le ministère de l'Éducation nationale ; il est valable à vie. L'examen comporte quatre épreuves notées chacune sur 25. La compréhension de l'oral (environ 25 minutes), la compréhension des écrits (30 minutes) et la production écrite (45 minutes, deux textes de 60 à 80 mots) se passent ensemble, soit environ 1 h 40. La production orale est individuelle : 6 à 8 minutes après 10 minutes de préparation, en trois parties (entretien dirigé, monologue suivi, exercice en interaction). Pour réussir, il faut au moins 50 sur 100, avec un minimum de 5 sur 25 à chaque épreuve. L'A2 est souvent demandé pour certaines démarches de séjour en France.",
      "تمنح مؤسسة France Éducation international شهادة DELF A2 نيابةً عن وزارة التربية الوطنية الفرنسية، وهي صالحة مدى الحياة. ويتكوّن الامتحان من أربعة أقسام، لكل منها 25 درجة: الفهم السمعي (نحو 25 دقيقة)، والفهم القرائي (30 دقيقة)، والإنتاج الكتابي (45 دقيقة، نصّان من 60 إلى 80 كلمة)، وتُجرى معًا في نحو ساعة و40 دقيقة. أما الإنتاج الشفهي ففردي: من 6 إلى 8 دقائق بعد 10 دقائق تحضير، في ثلاثة أجزاء (مقابلة موجّهة، وعرض متواصل، وتمرين تفاعل). وللنجاح تحتاج إلى 50 من 100 على الأقل، مع ألا تقل درجتك عن 5 من 25 في كل قسم. وكثيرًا ما يُطلب مستوى A2 في بعض إجراءات الإقامة في فرنسا."
    ),
  },
  practice: [
    {
      kind: "choice",
      id: "a2u13-p1",
      prompt: t(
        "Reading. Advert: « Cherche colocataire pour appartement de 3 pièces près de la gare. Loyer : 420 € par mois, charges comprises. Non-fumeur. Disponible à partir du 1er mars. » Which statement is true?",
        "Compréhension des écrits. Annonce : « Cherche colocataire pour appartement de 3 pièces près de la gare. Loyer : 420 € par mois, charges comprises. Non-fumeur. Disponible à partir du 1er mars. » Quelle affirmation est vraie ?",
        "فهم المقروء. إعلان: «Cherche colocataire pour appartement de 3 pièces près de la gare. Loyer : 420 € par mois, charges comprises. Non-fumeur. Disponible à partir du 1er mars.» أي عبارة صحيحة؟"
      ),
      optionsL10n: {
        en: ["The charges are included in the rent.", "You can smoke in the flat.", "The room is free from February."],
        fr: ["Les charges sont comprises dans le loyer.", "On peut fumer dans l'appartement.", "La chambre est libre dès février."],
        ar: ["التكاليف الإضافية مشمولة في الإيجار.", "يمكن التدخين في الشقة.", "الغرفة متاحة من فبراير."],
      },
      correctIndex: 0,
    },
    {
      kind: "choice",
      id: "a2u13-p2",
      prompt: t(
        "Reading. Email: « Bonjour Camille, désolée, je ne pourrai pas venir à ta fête samedi : ma sœur vient d'avoir un bébé et je pars à Lille pour la voir. On pourrait déjeuner ensemble la semaine prochaine ? Bises, Julie » Why can't Julie come?",
        "Compréhension des écrits. Courriel : « Bonjour Camille, désolée, je ne pourrai pas venir à ta fête samedi : ma sœur vient d'avoir un bébé et je pars à Lille pour la voir. On pourrait déjeuner ensemble la semaine prochaine ? Bises, Julie » Pourquoi Julie ne peut-elle pas venir ?",
        "فهم المقروء. بريد إلكتروني: «Bonjour Camille, désolée, je ne pourrai pas venir à ta fête samedi : ma sœur vient d'avoir un bébé et je pars à Lille pour la voir. On pourrait déjeuner ensemble la semaine prochaine ? Bises, Julie» لماذا لا تستطيع جولي الحضور؟"
      ),
      optionsL10n: {
        en: ["She is visiting her sister, who has just had a baby.", "She is ill.", "She has to work on Saturday."],
        fr: ["Elle va voir sa sœur, qui vient d'avoir un bébé.", "Elle est malade.", "Elle doit travailler samedi."],
        ar: ["ستزور أختها التي أنجبت طفلًا للتوّ.", "لأنها مريضة.", "لأنها مضطرة إلى العمل يوم السبت."],
      },
      correctIndex: 0,
    },
    { kind: "fill", id: "a2u13-p3", prompt: t("Passé composé with être (elle, partir).", "Passé composé avec être (elle, partir).", "الماضي المركّب مع être (elle، partir)."), sentence: "Hier, elle est ___ à huit heures.", answers: ["partie"] },
    { kind: "fill", id: "a2u13-p4", prompt: t("Imparfait (nous, habiter).", "Imparfait (nous, habiter).", "الـimparfait (nous، habiter)."), sentence: "Avant, nous ___ à Marseille.", answers: ["habitions"] },
    { kind: "fill", id: "a2u13-p5", prompt: t("Pronoun: « à mes parents ».", "Pronom : « à mes parents ».", "ضمير: «à mes parents»."), sentence: "Je ___ téléphone tous les dimanches.", answers: ["leur"] },
    { kind: "fill", id: "a2u13-p6", prompt: t("Pronoun: « du fromage ».", "Pronom : « du fromage ».", "ضمير: «du fromage»."), sentence: "Du fromage ? Oui, j'___ veux bien.", answers: ["en"] },
    { kind: "fill", id: "a2u13-p7", prompt: t("Relative pronoun.", "Pronom relatif.", "اسم موصول."), sentence: "C'est la ville ___ j'ai rencontré ma femme.", answers: ["où"] },
    { kind: "fill", id: "a2u13-p8", prompt: t("Future (je, avoir).", "Futur (je, avoir).", "المستقبل (je، avoir)."), sentence: "Si je travaille bien, j'___ mon diplôme.", answers: ["aurai"] },
    { kind: "fill", id: "a2u13-p9", prompt: t("Polite conditional (vous, pouvoir).", "Conditionnel de politesse (vous, pouvoir).", "صيغة الشرط للتأدّب (vous، pouvoir)."), sentence: "___-vous m'aider, s'il vous plaît ?", answers: ["pourriez"] },
    { kind: "order", id: "a2u13-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quand j'étais petit, je passais l'été à la mer." },
    { kind: "order", id: "a2u13-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Ces photos, je les ai prises en Bretagne." },
  ],
  production: {
    prompt: t(
      "DELF A2 writing, part 1 (60–80 words). You spent a weekend in a French-speaking city. On your blog, tell what you did, describe the place and the people, and say what you liked most.",
      "Production écrite DELF A2, partie 1 (60 à 80 mots). Vous avez passé un week-end dans une ville francophone. Sur votre blog, racontez ce que vous avez fait, décrivez le lieu et les gens, et dites ce que vous avez le plus aimé.",
      "الإنتاج الكتابي في DELF A2، الجزء الأول (60 إلى 80 كلمة). قضيت عطلة نهاية أسبوع في مدينة ناطقة بالفرنسية. اروِ في مدوّنتك ما فعلته، وصِف المكان والناس، وقل ما الذي أعجبك أكثر."
    ),
    model: "Le week-end dernier, je suis allée à Bruxelles avec deux amies. Il faisait froid, mais la ville était magnifique. Samedi matin, nous avons visité la Grand-Place, puis nous avons mangé des gaufres dans un petit café où les serveurs étaient très sympathiques. L'après-midi, nous sommes allées au musée de la BD. Ce que j'ai le plus aimé, c'est l'ambiance des marchés. Si j'ai l'occasion, j'y retournerai l'année prochaine !",
    checklist: [
      t("My text has 60 to 80 words.", "Mon texte fait entre 60 et 80 mots.", "نصّي بين 60 و80 كلمة."),
      t("I use the passé composé for events and the imparfait for descriptions.", "J'utilise le passé composé pour les événements et l'imparfait pour les descriptions.", "استخدمت الماضي المركّب للأحداث والـimparfait للأوصاف."),
      t("I describe the place and the people.", "Je décris le lieu et les gens.", "وصفت المكان والناس."),
      t("I give my opinion and use at least one pronoun (y, en, le…) or relative (qui, que, où).", "Je donne mon avis et j'utilise au moins un pronom (y, en, le…) ou un relatif (qui, que, où).", "أبديت رأيي واستخدمت ضميرًا واحدًا على الأقل (y وen وle…) أو اسم موصول (qui وque وoù)."),
      t("I check agreements with être and with a COD placed before avoir.", "Je vérifie les accords avec être et avec un COD placé avant avoir.", "راجعت التوافق مع être ومع المفعول المباشر الواقع قبل avoir."),
    ],
  },
  task: {
    title: t("Mock speaking test (DELF A2 format)", "Oral blanc (format DELF A2)", "امتحان شفهي تجريبي (بصيغة DELF A2)"),
    brief: t(
      "Prepare for 10 minutes (key words only), then do the three parts aloud, ideally with a partner playing the examiner, and time yourself. 1) Guided interview (about 1.5 min): introduce yourself — family, studies or job, tastes, a habit from your childhood. 2) Short talk (about 2 min): « Parlez d'une fête ou d'une tradition importante dans votre pays. » 3) Role-play (3–4 min): you want to sign up for a sports club; ask about timetables, prices and equipment, then decide.",
      "Préparez-vous pendant 10 minutes (seulement des mots-clés), puis faites les trois parties à voix haute, si possible avec un partenaire dans le rôle de l'examinateur, et chronométrez-vous. 1) Entretien dirigé (environ 1 min 30) : présentez-vous — famille, études ou travail, goûts, une habitude de votre enfance. 2) Monologue suivi (environ 2 min) : « Parlez d'une fête ou d'une tradition importante dans votre pays. » 3) Exercice en interaction (3 à 4 min) : vous voulez vous inscrire dans un club de sport ; renseignez-vous sur les horaires, les prix et le matériel, puis décidez.",
      "حضّر لمدة 10 دقائق (كلمات مفتاحية فقط)، ثم أدِّ الأجزاء الثلاثة بصوت عالٍ، ويُفضَّل مع شريك يؤدي دور الممتحن، واحسب الوقت. 1) مقابلة موجّهة (نحو دقيقة ونصف): قدّم نفسك — العائلة، والدراسة أو العمل، والأذواق، وعادة من طفولتك. 2) عرض متواصل (نحو دقيقتين): «Parlez d'une fête ou d'une tradition importante dans votre pays.» (تحدّث عن عيد أو تقليد مهم في بلدك). 3) تمرين تفاعل (من 3 إلى 4 دقائق): تريد التسجيل في نادٍ رياضي؛ استفسر عن المواعيد والأسعار والمعدّات، ثم قرّر."
    ),
    checklist: [
      t("In the interview, I used the present and the imparfait (childhood habit).", "Dans l'entretien, j'ai utilisé le présent et l'imparfait (habitude d'enfance).", "استخدمت في المقابلة المضارع والـimparfait (عادة من الطفولة)."),
      t("My short talk had an introduction, two or three ideas with connectors, and a conclusion.", "Mon monologue avait une introduction, deux ou trois idées avec des connecteurs et une conclusion.", "كان لعرضي مقدّمة، وفكرتان أو ثلاث بأدوات ربط، وخاتمة."),
      t("In the role-play, I asked polite questions (conditional) and reacted to the answers.", "Dans l'interaction, j'ai posé des questions polies (conditionnel) et réagi aux réponses.", "طرحت في التفاعل أسئلة مهذّبة (بصيغة الشرط) وتفاعلت مع الإجابات."),
      t("When I made a mistake, I corrected myself calmly.", "Quand j'ai fait une erreur, je me suis corrigé calmement.", "عندما أخطأت صحّحت نفسي بهدوء."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u13-t1", prompt: t("« Hier, nous ___ au cinéma. »", "« Hier, nous ___ au cinéma. »", "«Hier, nous ___ au cinéma.»"), options: ["avons allé", "sommes allés", "allons"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t2", prompt: t("« Quand j'étais petit, je ___ souvent chez mes grands-parents. »", "« Quand j'étais petit, je ___ souvent chez mes grands-parents. »", "«Quand j'étais petit, je ___ souvent chez mes grands-parents.»"), options: ["suis allé", "allais", "irai"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t3", prompt: t("« Elle ___ levée à sept heures. »", "« Elle ___ levée à sept heures. »", "«Elle ___ levée à sept heures.»"), options: ["s'est", "a", "s'a"], correctIndex: 0 },
    { kind: "choice", id: "a2u13-t4", prompt: t("« Tu as vu Paul ? — Oui, je ___ ai vu hier. »", "« Tu as vu Paul ? — Oui, je ___ ai vu hier. »", "«Tu as vu Paul ? — Oui, je ___ ai vu hier.»"), options: ["lui", "l'", "le"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t5", prompt: t("« Tu écris à ta mère ? — Oui, je ___ écris chaque semaine. »", "« Tu écris à ta mère ? — Oui, je ___ écris chaque semaine. »", "«Tu écris à ta mère ? — Oui, je ___ écris chaque semaine.»"), options: ["la", "lui", "leur"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t6", prompt: t("« Tu vas à Nice cet été ? — Oui, j'___ vais en juillet. »", "« Tu vas à Nice cet été ? — Oui, j'___ vais en juillet. »", "«Tu vas à Nice cet été ? — Oui, j'___ vais en juillet.»"), options: ["en", "y", "le"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t7", prompt: t("« Le film ___ j'ai vu hier était génial. »", "« Le film ___ j'ai vu hier était génial. »", "«Le film ___ j'ai vu hier était génial.»"), options: ["qui", "que", "où"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t8", prompt: t("« Ce restaurant est ___ que l'autre. » (better)", "« Ce restaurant est ___ que l'autre. » (bon +)", "«Ce restaurant est ___ que l'autre.» (أفضل)"), options: ["plus bon", "meilleur", "mieux"], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t9", prompt: t("« L'année prochaine, je ___ en Belgique. »", "« L'année prochaine, je ___ en Belgique. »", "«L'année prochaine, je ___ en Belgique.»"), options: ["vivrai", "vivais", "ai vécu"], correctIndex: 0 },
    { kind: "choice", id: "a2u13-t10", prompt: t("« Si tu ___ le temps, viens me voir. »", "« Si tu ___ le temps, viens me voir. »", "«Si tu ___ le temps, viens me voir.»"), options: ["auras", "aurais", "as"], correctIndex: 2 },
    { kind: "choice", id: "a2u13-t11", prompt: t("Polite request:", "Demande polie :", "طلب مهذّب:"), options: ["Je veux une chambre.", "Je voudrais une chambre, s'il vous plaît.", "Donnez une chambre."], correctIndex: 1 },
    { kind: "choice", id: "a2u13-t12", prompt: t("« Nous ___ de rentrer : nous sommes fatigués. »", "« Nous ___ de rentrer : nous sommes fatigués. »", "«Nous ___ de rentrer : nous sommes fatigués.»"), options: ["venons", "allons", "sommes"], correctIndex: 0 },
    { kind: "choice", id: "a2u13-t13", prompt: t("« Des pommes ? J'___ ai acheté un kilo. »", "« Des pommes ? J'___ ai acheté un kilo. »", "«Des pommes ? J'___ ai acheté un kilo.»"), options: ["les", "y", "en"], correctIndex: 2 },
    { kind: "choice", id: "a2u13-t14", prompt: t("« Il parle ___ trois langues. » (fluently)", "« Il parle ___ trois langues. » (courant)", "«Il parle ___ trois langues.» (بطلاقة)"), options: ["couramment", "courantement", "courrament"], correctIndex: 0 },
    { kind: "choice", id: "a2u13-t15", prompt: t("To pass the DELF A2, you need…", "Pour réussir le DELF A2, il faut…", "للنجاح في DELF A2 تحتاج إلى…"), optionsL10n: { en: ["50/100, with at least 5/25 in each part", "70/100 in total", "at least 15/25 in writing"], fr: ["50/100, avec au moins 5/25 à chaque épreuve", "70/100 au total", "au moins 15/25 à l'écrit"], ar: ["50/100، مع 5/25 على الأقل في كل قسم", "70/100 في المجموع", "15/25 على الأقل في الكتابي"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-exam-a2-core"],
  replaces: ["fr-a2-exam-core"],
};
