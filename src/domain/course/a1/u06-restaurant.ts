import { l10n as t, type CourseUnit } from "../types";

export const A1_U06: CourseUnit = {
  id: "fr-a1-u06-restaurant",
  level: "A1",
  order: 6,
  title: t("At the café and the restaurant", "Au café et au restaurant", "في المقهى والمطعم"),
  theme: t(
    "Ordering food and drinks, asking questions, paying",
    "Commander à manger et à boire, poser des questions, payer",
    "طلب الطعام والشراب، وطرح الأسئلة، والدفع"
  ),
  canDo: [
    t("I can order food and drinks politely.", "Je peux commander à manger et à boire poliment.", "أستطيع أن أطلب الطعام والشراب بأدب."),
    t("I can ask simple questions about the menu.", "Je peux poser des questions simples sur la carte.", "أستطيع أن أطرح أسئلة بسيطة عن قائمة الطعام."),
    t("I can understand a price and ask for the bill.", "Je peux comprendre un prix et demander l'addition.", "أستطيع أن أفهم السعر وأطلب الحساب."),
    t("I can use numbers up to 100.", "Je peux utiliser les nombres jusqu'à 100.", "أستطيع أن أستخدم الأعداد حتى 100."),
  ],
  context: t(
    "Nadia and her colleague Paul have lunch in a brasserie near their office in Nantes.",
    "Nadia et son collègue Paul déjeunent dans une brasserie près de leur bureau, à Nantes.",
    "تتناول نادية وزميلها بول الغداء في مطعم «براسري» قريب من مكتبهما في مدينة نانت."
  ),
  dialogue: {
    title: t("Lunch at the brasserie", "Le déjeuner à la brasserie", "الغداء في البراسري"),
    setting: t("A brasserie at lunchtime", "Une brasserie à midi", "براسري وقت الظهر"),
    lines: [
      { speaker: "Serveur", fr: "Bonjour, messieurs-dames. Vous êtes combien ?" },
      { speaker: "Nadia", fr: "Nous sommes deux." },
      { speaker: "Serveur", fr: "Installez-vous ici. Voici la carte." },
      { speaker: "Serveur", fr: "Vous avez choisi ?" },
      { speaker: "Nadia", fr: "Oui. Je voudrais le menu du jour, s'il vous plaît. Qu'est-ce que c'est, le plat du jour ?" },
      { speaker: "Serveur", fr: "Aujourd'hui, c'est du poulet avec des légumes et du riz." },
      { speaker: "Nadia", fr: "Parfait. Et une carafe d'eau, s'il vous plaît." },
      { speaker: "Serveur", fr: "Et pour monsieur ?" },
      { speaker: "Paul", fr: "Pour moi, une salade niçoise et un jus d'orange." },
      { speaker: "Serveur", fr: "Très bien. Vous prenez un dessert ?" },
      { speaker: "Paul", fr: "Est-ce qu'il y a une tarte aux pommes ?" },
      { speaker: "Serveur", fr: "Oui, bien sûr." },
      { speaker: "Paul", fr: "Alors, une tarte aux pommes et deux cafés, s'il vous plaît." },
      { speaker: "Nadia", fr: "L'addition, s'il vous plaît !" },
      { speaker: "Serveur", fr: "Voilà. Ça fait trente-quatre euros quatre-vingts." },
      { speaker: "Nadia", fr: "Je peux payer par carte ?" },
      { speaker: "Serveur", fr: "Oui, bien sûr. Merci et bonne fin de journée !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u06-c1", prompt: t("What is today's dish?", "Quel est le plat du jour ?", "ما طبق اليوم؟"), optionsL10n: { en: ["Fish and rice", "Chicken with vegetables and rice", "A niçoise salad"], fr: ["Du poisson et du riz", "Du poulet avec des légumes et du riz", "Une salade niçoise"], ar: ["سمك وأرز", "دجاج مع خضار وأرز", "سلطة نيسواز"] }, correctIndex: 1 },
    { kind: "choice", id: "u06-c2", prompt: t("What does Nadia drink?", "Que boit Nadia ?", "ماذا تشرب نادية؟"), optionsL10n: { en: ["Orange juice", "A jug of water", "Coffee only"], fr: ["Un jus d'orange", "Une carafe d'eau", "Seulement un café"], ar: ["عصير برتقال", "إبريق ماء", "قهوة فقط"] }, correctIndex: 1 },
    { kind: "choice", id: "u06-c3", prompt: t("How much is the bill?", "Combien coûte le repas ?", "كم الحساب؟"), options: ["24,80 €", "34,80 €", "34,20 €"], correctIndex: 1 },
    { kind: "choice", id: "u06-c4", prompt: t("How does Nadia pay?", "Comment Nadia paie-t-elle ?", "كيف تدفع نادية؟"), optionsL10n: { en: ["In cash", "By card", "Paul pays"], fr: ["En espèces", "Par carte", "C'est Paul qui paie"], ar: ["نقدًا", "بالبطاقة", "بول هو من يدفع"] }, correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("At the restaurant", "Au restaurant", "في المطعم"),
      items: [
        { fr: "la carte", gender: "f", meaning: t("the menu (list of dishes)", "liste des plats", "قائمة الطعام") },
        { fr: "le menu", gender: "m", meaning: t("set menu (fixed price)", "formule à prix fixe", "وجبة بسعر ثابت") },
        { fr: "le plat du jour", gender: "m", meaning: t("today's special", "plat proposé aujourd'hui", "طبق اليوم") },
        { fr: "l'entrée", gender: "f", meaning: t("starter", "premier plat", "المقبّلات") },
        { fr: "le plat (principal)", gender: "m", meaning: t("main course", "plat principal", "الطبق الرئيسي") },
        { fr: "le dessert", gender: "m", meaning: t("dessert", "fin du repas, sucré", "الحلوى") },
        { fr: "l'addition", gender: "f", meaning: t("the bill", "somme à payer", "الحساب (الفاتورة)"), example: "L'addition, s'il vous plaît !" },
        { fr: "le serveur / la serveuse", meaning: t("waiter / waitress", "personne qui sert", "النادل / النادلة") },
        { fr: "payer par carte / en espèces", meaning: t("to pay by card / in cash", "moyens de paiement", "الدفع بالبطاقة / نقدًا") },
      ],
    },
    {
      title: t("Food and drinks", "Aliments et boissons", "الأطعمة والمشروبات"),
      items: [
        { fr: "le poulet", gender: "m", meaning: t("chicken", "viande de volaille", "الدجاج") },
        { fr: "le poisson", gender: "m", meaning: t("fish", "animal de l'eau", "السمك") },
        { fr: "la viande", gender: "f", meaning: t("meat", "chair d'animal", "اللحم") },
        { fr: "les légumes", gender: "pl", meaning: t("vegetables", "carottes, haricots…", "الخضروات") },
        { fr: "le riz", gender: "m", meaning: t("rice", "céréale", "الأرز") },
        { fr: "le fromage", gender: "m", meaning: t("cheese", "fait avec du lait", "الجبن") },
        { fr: "l'eau (une carafe d'eau)", gender: "f", meaning: t("water (a jug of tap water)", "boisson ; carafe gratuite", "الماء (إبريق ماء)") },
        { fr: "le jus d'orange", gender: "m", meaning: t("orange juice", "boisson de fruits", "عصير البرتقال") },
        { fr: "le thé / le café", gender: "m", meaning: t("tea / coffee", "boissons chaudes", "الشاي / القهوة") },
      ],
    },
  ],
  grammar: [
    {
      id: "u06-g1",
      title: t("Ordering politely and asking questions", "Commander poliment et poser une question", "الطلب بأدب وطرح الأسئلة"),
      explanation: t(
        "To order, say « Je voudrais… » (I would like), « Je vais prendre… » or « Pour moi, … ». « Je veux » (I want) sounds too direct. To ask a yes/no question, raise your voice at the end (« Vous avez du thé ? ») or start with « Est-ce que… ? » (« Est-ce que vous avez du thé ? »). « Qu'est-ce que… ? » asks « what? »: « Qu'est-ce que vous prenez ? ».",
        "Pour commander, on dit « Je voudrais… », « Je vais prendre… » ou « Pour moi, … ». « Je veux » est trop direct. Pour une question fermée, on monte la voix à la fin (« Vous avez du thé ? ») ou on commence par « Est-ce que… ? » (« Est-ce que vous avez du thé ? »). « Qu'est-ce que… ? » demande « quoi ? » : « Qu'est-ce que vous prenez ? ».",
        "للطلب نقول «Je voudrais…» (أودّ) أو «Je vais prendre…» أو «Pour moi, …». أما «Je veux» (أريد) فمباشرة أكثر من اللازم. ولطرح سؤال جوابه نعم أو لا نرفع الصوت في آخر الجملة («Vous avez du thé ?») أو نبدأ بـ«Est-ce que… ?» («Est-ce que vous avez du thé ?»). أما «Qu'est-ce que… ?» فتعني «ماذا؟»: «Qu'est-ce que vous prenez ?»."
      ),
      examples: [
        { fr: "Je voudrais un thé à la menthe, s'il vous plaît.", gloss: t("I would like a mint tea, please.", "Commande polie.", "أودّ شايًا بالنعناع من فضلك.") },
        { fr: "Est-ce que le dessert est compris ?", gloss: t("Is dessert included?", "Question avec est-ce que.", "هل الحلوى مشمولة؟") },
        { fr: "Qu'est-ce que vous recommandez ?", gloss: t("What do you recommend?", "Question avec qu'est-ce que.", "ماذا تنصح؟") },
      ],
    },
    {
      id: "u06-g2",
      title: t("Partitive articles: du, de la, de l', des", "Les articles partitifs : du, de la, de l', des", "أدوات التبعيض: du وde la وde l' وdes"),
      explanation: t(
        "For an unspecified quantity of something you can't count (bread, water, rice), French uses a partitive article: du (m), de la (f), de l' (before a vowel), des (plural). « Je prends du riz », « Vous voulez de l'eau ? ». After verbs of taste (aimer, adorer, détester, préférer), use the definite article: « J'aime le poulet » (in general). After a negative, the partitive becomes « de »: « Je ne mange pas de viande ».",
        "Pour une quantité non précise d'une chose qu'on ne compte pas (pain, eau, riz), on utilise l'article partitif : du (m), de la (f), de l' (devant une voyelle), des (pluriel). « Je prends du riz », « Vous voulez de l'eau ? ». Après les verbes de goût (aimer, adorer, détester, préférer), on utilise l'article défini : « J'aime le poulet » (en général). Après une négation, le partitif devient « de » : « Je ne mange pas de viande ».",
        "للتعبير عن كمية غير محدّدة من شيء لا يُعدّ (الخبز، الماء، الأرز) تستخدم الفرنسية أداة التبعيض: du (للمذكّر)، de la (للمؤنّث)، de l' (قبل حرف متحرّك)، des (للجمع). «Je prends du riz» و«Vous voulez de l'eau ?». وبعد أفعال الذوق (aimer وadorer وdétester وpréférer) نستخدم أداة التعريف: «J'aime le poulet» (بشكل عام). وبعد النفي تتحوّل أداة التبعيض إلى «de»: «Je ne mange pas de viande»."
      ),
      table: {
        head: ["", "partitif", "après une négation", "goût (en général)"],
        rows: [
          ["le pain", "du pain", "pas de pain", "j'aime le pain"],
          ["la viande", "de la viande", "pas de viande", "j'aime la viande"],
          ["l'eau", "de l'eau", "pas d'eau", "j'aime l'eau"],
          ["les légumes", "des légumes", "pas de légumes", "j'aime les légumes"],
        ],
      },
      examples: [
        { fr: "Le matin, je bois du café et je mange du pain.", gloss: t("In the morning I drink coffee and eat bread.", "Quantité non précise.", "في الصباح أشرب القهوة وآكل الخبز.") },
        { fr: "Je n'aime pas le fromage, alors je ne prends pas de fromage.", gloss: t("I don't like cheese, so I don't take any cheese.", "Goût / négation.", "لا أحب الجبن، لذا لا آخذ جبنًا.") },
      ],
    },
    {
      id: "u06-g3",
      title: t("Numbers 70 to 100 and prices", "Les nombres de 70 à 100 et les prix", "الأعداد من 70 إلى 100 والأسعار"),
      explanation: t(
        "In France, 70 = soixante-dix (60 + 10), 71 = soixante et onze, 75 = soixante-quinze, 80 = quatre-vingts (4 × 20), 81 = quatre-vingt-un (no s, no « et »), 90 = quatre-vingt-dix, 99 = quatre-vingt-dix-neuf, 100 = cent. Belgium and Switzerland say septante and nonante (and huitante in some Swiss cantons). Prices: 34,80 € = « trente-quatre euros quatre-vingts ». French uses a comma for decimals.",
        "En France, 70 = soixante-dix (60 + 10), 71 = soixante et onze, 75 = soixante-quinze, 80 = quatre-vingts (4 × 20), 81 = quatre-vingt-un (sans s ni « et »), 90 = quatre-vingt-dix, 99 = quatre-vingt-dix-neuf, 100 = cent. En Belgique et en Suisse, on dit septante et nonante (et huitante dans certains cantons suisses). Les prix : 34,80 € = « trente-quatre euros quatre-vingts ». On écrit une virgule pour les décimales.",
        "في فرنسا: 70 = soixante-dix (60 + 10)، و71 = soixante et onze، و75 = soixante-quinze، و80 = quatre-vingts (4 × 20)، و81 = quatre-vingt-un (بلا s وبلا «et»)، و90 = quatre-vingt-dix، و99 = quatre-vingt-dix-neuf، و100 = cent. وفي بلجيكا وسويسرا يقال septante وnonante (وhuitante في بعض الكانتونات السويسرية). والأسعار: 34,80 € تُقرأ «trente-quatre euros quatre-vingts». وتُستخدم الفاصلة للكسور العشرية."
      ),
      table: {
        head: ["", ""],
        rows: [
          ["70", "soixante-dix"],
          ["72", "soixante-douze"],
          ["80", "quatre-vingts"],
          ["85", "quatre-vingt-cinq"],
          ["90", "quatre-vingt-dix"],
          ["96", "quatre-vingt-seize"],
          ["100", "cent"],
        ],
      },
      examples: [
        { fr: "Ça fait soixante-dix-huit euros.", gloss: t("That's 78 euros.", "60 + 18.", "المبلغ 78 يورو.") },
        { fr: "Le menu coûte quatorze euros quatre-vingt-dix.", gloss: t("The set menu costs €14.90.", "Prix avec centimes.", "سعر الوجبة 14,90 يورو.") },
      ],
      watchOut: t(
        "« Quatre-vingts » takes an s only when nothing follows: quatre-vingts, but quatre-vingt-trois.",
        "« Quatre-vingts » prend un s seulement à la fin : quatre-vingts, mais quatre-vingt-trois.",
        "«quatre-vingts» تأخذ حرف s فقط إذا لم يتبعها عدد: quatre-vingts، لكن quatre-vingt-trois."
      ),
    },
  ],
  pronunciation: {
    title: t("[y] in « du » and [u] in « doux »", "[y] (du) et [u] (doux)", "الصوت [y] في «du» والصوت [u] في «doux»"),
    explanation: t(
      "[u] (ou) is like the vowel in « food »: rounded lips, tongue at the back. For [y] (u), keep the same rounded lips but say [i] — the tongue moves forward. This contrast changes the meaning: du / doux, tu / tout, jus / joue. Practise: « Vous voulez du jus ? »",
      "[u] (ou) : lèvres arrondies, langue en arrière. Pour [y] (u), gardez les lèvres arrondies mais dites [i] : la langue avance. Cette différence change le sens : du / doux, tu / tout, jus / joue. Entraînez-vous : « Vous voulez du jus ? »",
      "الصوت [u] (ou) يشبه الواو الممدودة: الشفتان مستديرتان واللسان إلى الخلف. ولنطق [y] (u) أبقِ الشفتين مستديرتين لكن انطق [i] — فيتقدّم اللسان إلى الأمام. وهذا الفرق يغيّر المعنى: du / doux، tu / tout، jus / joue. تدرّب: «Vous voulez du jus ?»"
    ),
    examples: ["du — doux", "tu — tout", "le jus — la joue", "Vous voulez du jus ?", "Une tarte aux pommes, s'il vous plaît."],
  },
  culture: {
    title: t("Café and restaurant habits", "Les habitudes au café et au restaurant", "عادات المقاهي والمطاعم"),
    body: t(
      "In France, service is included in the price (« service compris »); a tip is welcome but optional, usually a few coins. You can ask for « une carafe d'eau »: tap water is free. « Un café » means an espresso; ask for « un café crème » if you want milk. Lunch menus (« formules ») often offer entrée + plat or plat + dessert at a fixed price. The waiter does not bring the bill until you ask for it — taking your time is normal.",
      "En France, le service est compris dans le prix ; le pourboire est apprécié mais facultatif, souvent quelques pièces. On peut demander une carafe d'eau : l'eau du robinet est gratuite. « Un café », c'est un expresso ; demandez « un café crème » pour avoir du lait. Le midi, les formules proposent souvent entrée + plat ou plat + dessert à prix fixe. Le serveur n'apporte l'addition que si on la demande : prendre son temps est normal.",
      "في فرنسا تكون الخدمة مشمولة في السعر («service compris»)، والبقشيش مستحسن لكنه اختياري، وغالبًا ما يكون بعض القطع النقدية. ويمكنك أن تطلب «une carafe d'eau»: فماء الصنبور مجاني. و«un café» تعني إسبريسو، فاطلب «un café crème» إن أردت حليبًا. وفي الظهر تقدّم «formules» غالبًا مقبّلات + طبقًا رئيسيًا أو طبقًا رئيسيًا + حلوى بسعر ثابت. ولا يُحضر النادل الحساب إلا إذا طلبته: فأخذ الوقت الكافي أمر طبيعي."
    ),
  },
  practice: [
    { kind: "fill", id: "u06-p1", prompt: t("Partitive article.", "Article partitif.", "أداة التبعيض."), sentence: "Je prends ___ riz.", answers: ["du"] },
    { kind: "fill", id: "u06-p2", prompt: t("Partitive article.", "Article partitif.", "أداة التبعيض."), sentence: "Vous voulez ___ eau ?", answers: ["de l'"] },
    { kind: "fill", id: "u06-p3", prompt: t("Partitive article.", "Article partitif.", "أداة التبعيض."), sentence: "Il mange ___ viande.", answers: ["de la"] },
    { kind: "fill", id: "u06-p4", prompt: t("Negative.", "Négation.", "النفي."), sentence: "Je ne bois pas ___ café.", answers: ["de"] },
    { kind: "choice", id: "u06-p5", prompt: t("« J'aime ___ poisson. »", "« J'aime ___ poisson. »", "«J'aime ___ poisson.»"), options: ["du", "le", "de"], correctIndex: 1, explanation: t("Taste in general → le.", "Goût en général → le.", "الذوق بشكل عام ← le.") },
    { kind: "choice", id: "u06-p6", prompt: t("The most polite way to order:", "La façon la plus polie de commander :", "أكثر طريقة مهذّبة للطلب:"), options: ["Je veux un café.", "Je voudrais un café, s'il vous plaît.", "Un café !"], correctIndex: 1 },
    { kind: "fill", id: "u06-p7", prompt: t("Write 80 in letters.", "Écrivez 80 en lettres.", "اكتب 80 بالحروف."), answers: ["quatre-vingts"] },
    { kind: "fill", id: "u06-p8", prompt: t("Write 75 in letters.", "Écrivez 75 en lettres.", "اكتب 75 بالحروف."), answers: ["soixante-quinze"] },
    { kind: "fill", id: "u06-p9", prompt: t("Write 92 in letters.", "Écrivez 92 en lettres.", "اكتب 92 بالحروف."), answers: ["quatre-vingt-douze"] },
    { kind: "order", id: "u06-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "L'addition, s'il vous plaît !" },
    { kind: "order", id: "u06-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Est-ce qu'il y a une tarte aux pommes ?" },
  ],
  production: {
    prompt: t(
      "Write a short dialogue (6–8 lines) between you and a waiter: you order a starter or a main course, a drink and a dessert, ask one question, then ask for the bill.",
      "Écrivez un court dialogue (6 à 8 répliques) entre vous et un serveur : vous commandez une entrée ou un plat, une boisson et un dessert, vous posez une question, puis vous demandez l'addition.",
      "اكتب حوارًا قصيرًا (6 إلى 8 أسطر) بينك وبين نادل: تطلب مقبّلات أو طبقًا رئيسيًا، ومشروبًا، وحلوى، وتطرح سؤالًا واحدًا، ثم تطلب الحساب."
    ),
    model: "— Bonjour, vous avez choisi ?\n— Oui, je voudrais le plat du jour, s'il vous plaît. Est-ce qu'il y a de la viande ?\n— Oui, c'est du bœuf avec des pommes de terre.\n— Parfait. Et une carafe d'eau, s'il vous plaît.\n— Vous prenez un dessert ?\n— Oui, une mousse au chocolat. Et l'addition, s'il vous plaît.",
    checklist: [
      t("I use « je voudrais » or « pour moi ».", "J'utilise « je voudrais » ou « pour moi ».", "استخدمت «je voudrais» أو «pour moi»."),
      t("I use du / de la / des correctly.", "J'utilise correctement du / de la / des.", "استخدمت du / de la / des بشكل صحيح."),
      t("I ask one question (est-ce que or intonation).", "Je pose une question (est-ce que ou intonation).", "طرحت سؤالًا (بـest-ce que أو بالنغمة)."),
      t("I say « s'il vous plaît » and ask for the bill.", "Je dis « s'il vous plaît » et je demande l'addition.", "قلت «s'il vous plaît» وطلبت الحساب."),
    ],
  },
  task: {
    title: t("Order in French", "Commander en français", "اطلب بالفرنسية"),
    brief: t(
      "Next time you are in a café (or using a French restaurant's online menu), order in French: greet, order, ask one question, ask for the bill, pay. If you can't do it for real, role-play it aloud with a partner using a real French menu.",
      "La prochaine fois que vous êtes dans un café (ou devant la carte en ligne d'un restaurant français), commandez en français : saluez, commandez, posez une question, demandez l'addition, payez. Si ce n'est pas possible, jouez la scène à voix haute avec un partenaire et une vraie carte française.",
      "في المرة القادمة التي تكون فيها في مقهى (أو أمام قائمة طعام إلكترونية لمطعم فرنسي)، اطلب بالفرنسية: حيِّ، واطلب، واطرح سؤالًا، واطلب الحساب، وادفع. وإن لم يكن ذلك ممكنًا فمثّل الموقف بصوت عالٍ مع شريك باستخدام قائمة طعام فرنسية حقيقية."
    ),
    checklist: [
      t("I greeted with « Bonjour ».", "J'ai salué avec « Bonjour ».", "حيّيت بـ«Bonjour»."),
      t("I ordered politely.", "J'ai commandé poliment.", "طلبت بأدب."),
      t("I understood the price.", "J'ai compris le prix.", "فهمت السعر."),
      t("I said thank you and goodbye.", "J'ai dit merci et au revoir.", "قلت شكرًا وإلى اللقاء."),
    ],
  },
  test: [
    { kind: "choice", id: "u06-t1", prompt: t("« Je voudrais ___ pain. »", "« Je voudrais ___ pain. »", "«Je voudrais ___ pain.»"), options: ["du", "de la", "le"], correctIndex: 0 },
    { kind: "choice", id: "u06-t2", prompt: t("« Elle ne mange pas ___ viande. »", "« Elle ne mange pas ___ viande. »", "«Elle ne mange pas ___ viande.»"), options: ["de la", "de", "la"], correctIndex: 1 },
    { kind: "choice", id: "u06-t3", prompt: t("« Nous adorons ___ fromage. »", "« Nous adorons ___ fromage. »", "«Nous adorons ___ fromage.»"), options: ["du", "le", "de"], correctIndex: 1 },
    { kind: "choice", id: "u06-t4", prompt: t("« Quatre-vingt-dix-sept » is:", "« Quatre-vingt-dix-sept », c'est :", "«Quatre-vingt-dix-sept» هو:"), options: ["87", "97", "77"], correctIndex: 1 },
    { kind: "choice", id: "u06-t5", prompt: t("71 is written:", "71 s'écrit :", "يُكتب 71:"), options: ["soixante-onze", "soixante et onze", "septante-un"], correctIndex: 1 },
    { kind: "choice", id: "u06-t6", prompt: t("To ask for the bill, you say:", "Pour demander la note, on dit :", "لطلب الحساب نقول:"), options: ["La carte, s'il vous plaît.", "L'addition, s'il vous plaît.", "Le menu, s'il vous plaît."], correctIndex: 1 },
    { kind: "choice", id: "u06-t7", prompt: t("Which is a correct question?", "Quelle question est correcte ?", "أي سؤال صحيح؟"), options: ["Est-ce que vous avez du thé ?", "Est-ce vous avez du thé ?", "Qu'est-ce vous avez du thé ?"], correctIndex: 0 },
    { kind: "choice", id: "u06-t8", prompt: t("« Qu'est-ce que vous prenez ? » means:", "« Qu'est-ce que vous prenez ? » signifie :", "معنى «Qu'est-ce que vous prenez ?»:"), optionsL10n: { en: ["What will you have?", "Where are you going?", "How much is it?"], fr: ["Que voulez-vous commander ?", "Où allez-vous ?", "Combien ça coûte ?"], ar: ["ماذا ستطلب؟", "إلى أين تذهب؟", "كم الثمن؟"] }, correctIndex: 0 },
    { kind: "choice", id: "u06-t9", prompt: t("Which pair is [y] / [u]?", "Quelle paire oppose [y] et [u] ?", "أي زوج يقابل بين [y] و[u]؟"), options: ["du / doux", "deux / doux", "dit / du"], correctIndex: 0 },
    { kind: "choice", id: "u06-t10", prompt: t("In a French restaurant, tap water (« une carafe d'eau ») is:", "Au restaurant, la carafe d'eau est :", "في المطعم الفرنسي، إبريق ماء الصنبور:"), optionsL10n: { en: ["free", "very expensive", "not allowed"], fr: ["gratuite", "très chère", "interdite"], ar: ["مجاني", "غالٍ جدًا", "غير مسموح به"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-order-drink", "goal-pay-cafe"],
  replaces: ["fr-a1-cafe-unit"],
};
