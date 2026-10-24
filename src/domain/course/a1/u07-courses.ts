import { l10n as t, type CourseUnit } from "../types";

export const A1_U07: CourseUnit = {
  id: "fr-a1-u07-courses",
  level: "A1",
  order: 7,
  title: t("Going shopping", "Faire les courses", "التسوّق"),
  theme: t(
    "Buying food at the market, quantities and prices",
    "Acheter des produits au marché, les quantités et les prix",
    "شراء المنتجات من السوق، والكميات والأسعار"
  ),
  canDo: [
    t("I can buy food and ask for a quantity.", "Je peux acheter des produits et demander une quantité.", "أستطيع أن أشتري منتجات وأطلب كمية معيّنة."),
    t("I can ask the price and understand the total.", "Je peux demander un prix et comprendre le total.", "أستطيع أن أسأل عن السعر وأفهم المجموع."),
    t("I can point to products (ce, cette, ces).", "Je peux désigner des produits (ce, cette, ces).", "أستطيع أن أشير إلى المنتجات (ce وcette وces)."),
    t("I can write a shopping list.", "Je peux écrire une liste de courses.", "أستطيع أن أكتب قائمة مشتريات."),
  ],
  context: t(
    "On Saturday morning, Rania goes to the open-air market in her neighbourhood in Toulouse to buy fruit and vegetables.",
    "Le samedi matin, Rania va au marché de son quartier, à Toulouse, pour acheter des fruits et des légumes.",
    "صباح يوم السبت، تذهب رانيا إلى السوق المفتوح في حيّها بمدينة تولوز لتشتري فواكه وخضروات."
  ),
  dialogue: {
    title: t("At the market stall", "Au stand du marchand", "عند بسطة البائع"),
    setting: t("The Saturday market in Toulouse", "Le marché du samedi, à Toulouse", "سوق يوم السبت في تولوز"),
    lines: [
      { speaker: "Marchand", fr: "Bonjour, madame ! Qu'est-ce que je vous sers ?" },
      { speaker: "Rania", fr: "Bonjour. Je voudrais un kilo de tomates, s'il vous plaît." },
      { speaker: "Marchand", fr: "Voilà. Et avec ceci ?" },
      { speaker: "Rania", fr: "Elles coûtent combien, ces pêches ?" },
      { speaker: "Marchand", fr: "Trois euros cinquante le kilo. Elles sont très bonnes !" },
      { speaker: "Rania", fr: "Alors, cinq cents grammes de pêches. Et vous avez des courgettes ?" },
      { speaker: "Marchand", fr: "Ah non, désolé, je n'ai pas de courgettes aujourd'hui. Mais j'ai de belles aubergines." },
      { speaker: "Rania", fr: "D'accord, deux aubergines. Et une botte de persil." },
      { speaker: "Marchand", fr: "Très bien. Ce sera tout ?" },
      { speaker: "Rania", fr: "Oui, c'est tout. Ça fait combien ?" },
      { speaker: "Marchand", fr: "Alors… Ça fait sept euros quatre-vingt-quinze." },
      { speaker: "Rania", fr: "Voilà dix euros." },
      { speaker: "Marchand", fr: "Et voici votre monnaie : deux euros cinq. Merci, bonne journée !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u07-c1", prompt: t("How many tomatoes does Rania buy?", "Combien de tomates Rania achète-t-elle ?", "كم من الطماطم تشتري رانيا؟"), optionsL10n: { en: ["500 g", "1 kg", "2 kg"], fr: ["500 grammes", "Un kilo", "Deux kilos"], ar: ["500 غرام", "كيلوغرام واحد", "كيلوغرامان"] }, correctIndex: 1 },
    { kind: "choice", id: "u07-c2", prompt: t("How much are the peaches per kilo?", "Combien coûtent les pêches au kilo ?", "كم سعر كيلو الخوخ؟"), options: ["3,50 €", "1,75 €", "2,80 €"], correctIndex: 0 },
    { kind: "choice", id: "u07-c3", prompt: t("Why doesn't she buy courgettes?", "Pourquoi n'achète-t-elle pas de courgettes ?", "لماذا لا تشتري الكوسا؟"), optionsL10n: { en: ["They are too expensive.", "There are none today.", "She doesn't like them."], fr: ["Elles sont trop chères.", "Il n'y en a pas aujourd'hui.", "Elle ne les aime pas."], ar: ["لأنها غالية جدًا.", "لأنها غير موجودة اليوم.", "لأنها لا تحبها."] }, correctIndex: 1 },
    { kind: "choice", id: "u07-c4", prompt: t("How much change does she get?", "Combien de monnaie reçoit-elle ?", "كم الباقي الذي تستلمه؟"), options: ["2,05 €", "2,50 €", "7,95 €"], correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Fruit and vegetables", "Fruits et légumes", "الفواكه والخضروات"),
      items: [
        { fr: "la pomme", gender: "f", meaning: t("apple", "fruit", "التفاحة") },
        { fr: "la banane", gender: "f", meaning: t("banana", "fruit", "الموزة") },
        { fr: "la pêche", gender: "f", meaning: t("peach", "fruit d'été", "الخوخة") },
        { fr: "la fraise", gender: "f", meaning: t("strawberry", "petit fruit rouge", "الفراولة") },
        { fr: "la tomate", gender: "f", meaning: t("tomato", "légume rouge", "الطماطم") },
        { fr: "la pomme de terre", gender: "f", meaning: t("potato", "légume", "البطاطس") },
        { fr: "la carotte", gender: "f", meaning: t("carrot", "légume orange", "الجزرة") },
        { fr: "l'oignon", gender: "m", meaning: t("onion", "légume", "البصل") },
        { fr: "la courgette / l'aubergine", gender: "f", meaning: t("courgette / aubergine", "légumes", "الكوسا / الباذنجان") },
        { fr: "le persil", gender: "m", meaning: t("parsley", "herbe aromatique", "البقدونس") },
      ],
    },
    {
      title: t("Quantities and shopping", "Quantités et achats", "الكميات والشراء"),
      items: [
        { fr: "un kilo de", meaning: t("a kilo of", "1 000 grammes de", "كيلوغرام من") },
        { fr: "cinq cents grammes de", meaning: t("500 grams of", "un demi-kilo de", "500 غرام من") },
        { fr: "une bouteille de", meaning: t("a bottle of", "contenant en verre ou plastique", "زجاجة من") },
        { fr: "un paquet de", meaning: t("a packet of", "emballage", "علبة / كيس من") },
        { fr: "une boîte de", meaning: t("a tin / box of", "emballage en métal ou carton", "علبة من") },
        { fr: "une douzaine de", meaning: t("a dozen", "douze", "دزينة (اثنا عشر)"), example: "une douzaine d'œufs" },
        { fr: "une botte de", meaning: t("a bunch of (herbs, radishes)", "plantes attachées ensemble", "حزمة من") },
        { fr: "ça coûte combien ?", meaning: t("how much is it?", "demander le prix", "كم الثمن؟") },
        { fr: "ça fait combien ?", meaning: t("how much is that altogether?", "demander le total", "كم المجموع؟") },
        { fr: "la monnaie", gender: "f", meaning: t("change (money given back)", "argent rendu", "الباقي (الفكّة)") },
        { fr: "cher / chère — pas cher", meaning: t("expensive — cheap", "prix élevé — prix bas", "غالٍ — رخيص") },
      ],
    },
  ],
  grammar: [
    {
      id: "u07-g1",
      title: t("Quantities + de", "Les quantités + de", "الكميات + de"),
      explanation: t(
        "After an expression of quantity, use only « de » (d' before a vowel), whatever the gender or number: « un kilo de tomates », « une bouteille d'eau », « beaucoup de fruits », « un peu de sucre ». « Combien de… ? » asks how many / how much: « Combien de pommes ? »",
        "Après une expression de quantité, on utilise seulement « de » (d' devant une voyelle), quel que soit le genre ou le nombre : « un kilo de tomates », « une bouteille d'eau », « beaucoup de fruits », « un peu de sucre ». « Combien de… ? » demande la quantité : « Combien de pommes ? »",
        "بعد عبارة تدل على الكمية نستخدم «de» فقط (أو d' قبل حرف متحرّك) مهما كان الجنس أو العدد: «un kilo de tomates» و«une bouteille d'eau» و«beaucoup de fruits» و«un peu de sucre». و«Combien de… ?» تسأل عن الكمية أو العدد: «Combien de pommes ?»"
      ),
      examples: [
        { fr: "Je voudrais deux kilos de pommes de terre.", gloss: t("I'd like two kilos of potatoes.", "Quantité + de.", "أودّ كيلوغرامين من البطاطس.") },
        { fr: "Il y a beaucoup de monde au marché.", gloss: t("There are a lot of people at the market.", "beaucoup de.", "يوجد كثير من الناس في السوق.") },
        { fr: "Une douzaine d'œufs, s'il vous plaît.", gloss: t("A dozen eggs, please.", "d' devant voyelle.", "دزينة بيض من فضلك.") },
      ],
      watchOut: t(
        "Not « un kilo des tomates » but « un kilo de tomates ».",
        "On ne dit pas « un kilo des tomates » mais « un kilo de tomates ».",
        "لا نقول «un kilo des tomates» بل «un kilo de tomates»."
      ),
    },
    {
      id: "u07-g2",
      title: t("Demonstratives: ce, cet, cette, ces", "Les démonstratifs : ce, cet, cette, ces", "أسماء الإشارة: ce وcet وcette وces"),
      explanation: t(
        "To point at something (this / that / these), use: ce + masculine (ce melon), cet + masculine starting with a vowel or silent h (cet oignon), cette + feminine (cette pêche), ces + plural (ces fraises).",
        "Pour montrer quelque chose, on utilise : ce + masculin (ce melon), cet + masculin qui commence par une voyelle ou un h muet (cet oignon), cette + féminin (cette pêche), ces + pluriel (ces fraises).",
        "للإشارة إلى شيء (هذا / هذه / هؤلاء) نستخدم: ce + مذكّر (ce melon)، وcet + مذكّر يبدأ بحرف متحرّك أو h صامتة (cet oignon)، وcette + مؤنّث (cette pêche)، وces + جمع (ces fraises)."
      ),
      table: {
        head: ["masculin", "masc. + voyelle", "féminin", "pluriel"],
        rows: [["ce fromage", "cet oignon", "cette pomme", "ces fraises"]],
      },
      examples: [
        { fr: "Ce fromage est délicieux.", gloss: t("This cheese is delicious.", "ce + masculin.", "هذا الجبن لذيذ.") },
        { fr: "Ces pêches coûtent combien ?", gloss: t("How much are these peaches?", "ces + pluriel.", "بكم هذا الخوخ؟") },
      ],
    },
    {
      id: "u07-g3",
      title: t("The verbs vouloir and acheter", "Les verbes vouloir et acheter", "الفعلان vouloir (يريد) وacheter (يشتري)"),
      explanation: t(
        "Vouloir (to want) is irregular. « Je voudrais » (I would like) is its polite form. Acheter (to buy) is an -er verb, but it takes a grave accent when the ending is silent: j'achète, tu achètes, il achète, ils achètent — but nous achetons, vous achetez. Préférer works the same way: je préfère, nous préférons.",
        "Vouloir est irrégulier. « Je voudrais » est sa forme polie. Acheter est un verbe en -er, mais il prend un accent grave quand la terminaison est muette : j'achète, tu achètes, il achète, ils achètent — mais nous achetons, vous achetez. Préférer fonctionne de la même façon : je préfère, nous préférons.",
        "الفعل vouloir (يريد) شاذ، و«Je voudrais» (أودّ) هي صيغته المهذّبة. أما acheter (يشتري) فهو فعل من مجموعة -er، لكنه يأخذ علامة grave عندما تكون النهاية غير منطوقة: j'achète وtu achètes وil achète وils achètent — لكن nous achetons وvous achetez. والفعل préférer يعمل بالطريقة نفسها: je préfère، nous préférons."
      ),
      table: {
        head: ["", "vouloir", "acheter"],
        rows: [
          ["je / j'", "je veux", "j'achète"],
          ["tu", "tu veux", "tu achètes"],
          ["il / elle / on", "il veut", "elle achète"],
          ["nous", "nous voulons", "nous achetons"],
          ["vous", "vous voulez", "vous achetez"],
          ["ils / elles", "ils veulent", "elles achètent"],
        ],
      },
      examples: [
        { fr: "Tu veux des fraises ?", gloss: t("Do you want some strawberries?", "vouloir.", "هل تريد فراولة؟") },
        { fr: "Nous achetons le pain à la boulangerie.", gloss: t("We buy bread at the bakery.", "nous achetons — sans accent.", "نشتري الخبز من المخبز.") },
      ],
    },
  ],
  pronunciation: {
    title: t("The French R [ʁ]", "Le R français [ʁ]", "حرف R الفرنسي [ʁ]"),
    explanation: t(
      "The French R is made at the back of the throat, close to the Arabic « غ » but softer. Keep the tip of your tongue down, behind your lower teeth. Practise at the end of words first (bonjour, beurre), then between vowels (carotte), then after consonants (trois, fraise, prix).",
      "Le R français se prononce au fond de la gorge, assez proche du « غ » arabe, mais plus doux. Gardez la pointe de la langue en bas, derrière les dents du bas. Entraînez-vous d'abord en fin de mot (bonjour, beurre), puis entre deux voyelles (carotte), puis après une consonne (trois, fraise, prix).",
      "يُنطق حرف R الفرنسي من أقصى الحلق، وهو قريب من حرف «غ» العربي لكنه أخفّ. أبقِ طرف لسانك منخفضًا خلف الأسنان السفلية. تدرّب أولًا عليه في آخر الكلمة (bonjour، beurre)، ثم بين حرفين متحرّكين (carotte)، ثم بعد حرف ساكن (trois، fraise، prix)."
    ),
    examples: ["bonjour", "le beurre", "une carotte", "trois fraises", "le prix", "Un kilo de pommes de terre, s'il vous plaît."],
  },
  culture: {
    title: t("Markets and small shops", "Les marchés et les petits commerces", "الأسواق والمحلات الصغيرة"),
    body: t(
      "Almost every French town has an open-air market at least once a week. People also shop at specialised small shops: la boulangerie (bread), la boucherie (meat), la fromagerie (cheese), le primeur (fruit and vegetables). At the stall, the seller often asks « Et avec ceci ? » (anything else?) and « Ce sera tout ? » (will that be all?). Prices are usually given per kilo, and you can often taste before buying.",
      "Presque toutes les villes françaises ont un marché en plein air au moins une fois par semaine. On fait aussi ses courses chez les petits commerçants : la boulangerie, la boucherie, la fromagerie, le primeur (fruits et légumes). Au stand, le marchand demande souvent « Et avec ceci ? » et « Ce sera tout ? ». Les prix sont en général indiqués au kilo, et on peut souvent goûter avant d'acheter.",
      "في كل مدينة فرنسية تقريبًا سوق في الهواء الطلق مرة في الأسبوع على الأقل. ويتسوّق الناس أيضًا من المحلات الصغيرة المتخصّصة: la boulangerie (الخبز)، وla boucherie (اللحم)، وla fromagerie (الجبن)، وle primeur (الفواكه والخضروات). وعند البسطة يسأل البائع غالبًا «Et avec ceci ?» (شيء آخر؟) و«Ce sera tout ?» (هل هذا كل شيء؟). وتُذكر الأسعار عادةً للكيلو، ويمكن في كثير من الأحيان التذوّق قبل الشراء."
    ),
  },
  practice: [
    { kind: "fill", id: "u07-p1", prompt: t("Complete with « de » or « d' ».", "Complétez avec « de » ou « d' ».", "أكمل بـ«de» أو «d'»."), sentence: "Un kilo ___ carottes, s'il vous plaît.", answers: ["de"] },
    { kind: "fill", id: "u07-p2", prompt: t("Complete with « de » or « d' ».", "Complétez avec « de » ou « d' ».", "أكمل بـ«de» أو «d'»."), sentence: "Une bouteille ___ eau minérale.", answers: ["d'"] },
    { kind: "fill", id: "u07-p3", prompt: t("Demonstrative.", "Démonstratif.", "اسم الإشارة."), sentence: "___ fraises sont délicieuses.", answers: ["ces"] },
    { kind: "fill", id: "u07-p4", prompt: t("Demonstrative.", "Démonstratif.", "اسم الإشارة."), sentence: "Je prends ___ melon.", answers: ["ce"] },
    { kind: "fill", id: "u07-p5", prompt: t("Demonstrative (masculine + vowel).", "Démonstratif (masculin + voyelle).", "اسم الإشارة (مذكّر + حرف متحرّك)."), sentence: "Combien coûte ___ ananas ?", answers: ["cet"] },
    { kind: "fill", id: "u07-p6", prompt: t("Conjugate vouloir.", "Conjuguez vouloir.", "صرّف الفعل vouloir."), sentence: "Vous ___ autre chose ?", answers: ["voulez"] },
    { kind: "fill", id: "u07-p7", prompt: t("Conjugate acheter (accent!).", "Conjuguez acheter (accent).", "صرّف الفعل acheter (انتبه للعلامة)."), sentence: "Ils ___ des fruits au marché.", answers: ["achètent"] },
    { kind: "choice", id: "u07-p8", prompt: t("The seller asks « Ce sera tout ? ». He means:", "Le marchand demande « Ce sera tout ? ». Il veut dire :", "يسأل البائع «Ce sera tout ?». يقصد:"), optionsL10n: { en: ["Is that all?", "How much is it?", "Do you want a bag?"], fr: ["Vous voulez autre chose ?", "Combien ça coûte ?", "Vous voulez un sac ?"], ar: ["هل هذا كل شيء؟", "كم الثمن؟", "هل تريد كيسًا؟"] }, correctIndex: 0 },
    { kind: "choice", id: "u07-p9", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Un paquet des biscuits.", "Un paquet de biscuits.", "Un paquet les biscuits."], correctIndex: 1 },
    { kind: "order", id: "u07-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Elles coûtent combien, ces pêches ?" },
    { kind: "order", id: "u07-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je voudrais un kilo de tomates." },
  ],
  production: {
    prompt: t(
      "You are organising a dinner for six people. Write your shopping list with quantities, then write what you will say at the market (3–4 sentences).",
      "Vous organisez un dîner pour six personnes. Écrivez votre liste de courses avec les quantités, puis ce que vous allez dire au marché (3 ou 4 phrases).",
      "تنظّم عشاءً لستة أشخاص. اكتب قائمة مشترياتك مع الكميات، ثم اكتب ما ستقوله في السوق (3 أو 4 جمل)."
    ),
    model: "Liste : deux kilos de pommes de terre, un kilo de tomates, six yaourts, une botte de persil, une bouteille d'huile d'olive.\nAu marché : « Bonjour ! Je voudrais deux kilos de pommes de terre, s'il vous plaît. Ces tomates coûtent combien ? Alors, un kilo. Ça fait combien ? »",
    checklist: [
      t("Each quantity is followed by « de ».", "Chaque quantité est suivie de « de ».", "كل كمية يتبعها «de»."),
      t("I use a demonstrative (ce / cette / ces).", "J'utilise un démonstratif (ce / cette / ces).", "استخدمت اسم إشارة (ce / cette / ces)."),
      t("I ask for a price or the total.", "Je demande un prix ou le total.", "سألت عن سعر أو عن المجموع."),
      t("I use « je voudrais » and « s'il vous plaît ».", "J'utilise « je voudrais » et « s'il vous plaît ».", "استخدمت «je voudrais» و«s'il vous plaît»."),
    ],
  },
  task: {
    title: t("Shopping in French", "Faire ses courses en français", "التسوّق بالفرنسية"),
    brief: t(
      "Prepare a real shopping list in French and use it this week. If you can, visit a French market, bakery or a French supermarket website and find the price per kilo of three products. Say the prices aloud.",
      "Préparez une vraie liste de courses en français et utilisez-la cette semaine. Si possible, allez dans un marché, une boulangerie ou sur le site d'un supermarché français et trouvez le prix au kilo de trois produits. Dites les prix à voix haute.",
      "حضّر قائمة مشتريات حقيقية بالفرنسية واستخدمها هذا الأسبوع. وإن أمكن فزُر سوقًا أو مخبزًا فرنسيًا، أو موقع سوبرماركت فرنسي، وابحث عن سعر الكيلو لثلاثة منتجات. ثم اقرأ الأسعار بصوت عالٍ."
    ),
    checklist: [
      t("My list has at least six items with quantities.", "Ma liste contient au moins six produits avec les quantités.", "قائمتي فيها ستة منتجات على الأقل مع الكميات."),
      t("I read three prices aloud correctly.", "J'ai lu trois prix à voix haute correctement.", "قرأت ثلاثة أسعار بصوت عالٍ بشكل صحيح."),
      t("I practised « Ça coûte combien ? » and « Ça fait combien ? ».", "J'ai pratiqué « Ça coûte combien ? » et « Ça fait combien ? ».", "تدرّبت على «Ça coûte combien ?» و«Ça fait combien ?»."),
    ],
  },
  test: [
    { kind: "choice", id: "u07-t1", prompt: t("« Un kilo ___ pommes. »", "« Un kilo ___ pommes. »", "«Un kilo ___ pommes.»"), options: ["des", "de", "les"], correctIndex: 1 },
    { kind: "choice", id: "u07-t2", prompt: t("« Beaucoup ___ oranges. »", "« Beaucoup ___ oranges. »", "«Beaucoup ___ oranges.»"), options: ["d'", "des", "de les"], correctIndex: 0 },
    { kind: "choice", id: "u07-t3", prompt: t("« ___ tarte est délicieuse. »", "« ___ tarte est délicieuse. »", "«___ tarte est délicieuse.»"), options: ["Ce", "Cette", "Cet"], correctIndex: 1 },
    { kind: "choice", id: "u07-t4", prompt: t("« ___ œuf est frais. »", "« ___ œuf est frais. »", "«___ œuf est frais.»"), options: ["Ce", "Cet", "Cette"], correctIndex: 1 },
    { kind: "choice", id: "u07-t5", prompt: t("« Nous ___ du pain. » (vouloir)", "« Nous ___ du pain. » (vouloir)", "«Nous ___ du pain.» (vouloir)"), options: ["voulons", "veulons", "voulez"], correctIndex: 0 },
    { kind: "choice", id: "u07-t6", prompt: t("« Elle ___ des légumes. » (acheter)", "« Elle ___ des légumes. » (acheter)", "«Elle ___ des légumes.» (acheter)"), options: ["achete", "achète", "achètent"], correctIndex: 1 },
    { kind: "choice", id: "u07-t7", prompt: t("To ask the total price, you say:", "Pour demander le total, on dit :", "للسؤال عن المجموع نقول:"), options: ["Ça fait combien ?", "Combien de pommes ?", "C'est cher ?"], correctIndex: 0 },
    { kind: "choice", id: "u07-t8", prompt: t("Where do you buy meat?", "Où achète-t-on de la viande ?", "أين نشتري اللحم؟"), options: ["à la boucherie", "à la fromagerie", "à la boulangerie"], correctIndex: 0 },
    { kind: "choice", id: "u07-t9", prompt: t("« Une douzaine » is:", "« Une douzaine », c'est :", "«une douzaine» تعني:"), options: ["10", "12", "20"], correctIndex: 1 },
    { kind: "choice", id: "u07-t10", prompt: t("The French R is pronounced…", "Le R français se prononce…", "يُنطق حرف R الفرنسي…"), optionsL10n: { en: ["at the back of the throat", "with the tip of the tongue rolled", "it is silent"], fr: ["au fond de la gorge", "en roulant la pointe de la langue", "il est muet"], ar: ["من أقصى الحلق", "بلفّ طرف اللسان", "لا يُنطق"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-ask-price", "goal-buy-item"],
  replaces: ["fr-a1-courses-unit", "fr-a1-more-shopping"],
};
