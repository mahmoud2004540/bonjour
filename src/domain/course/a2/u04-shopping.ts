import { l10n as t, type CourseUnit } from "../types";

export const A2_U04: CourseUnit = {
  id: "fr-a2-u04-shopping",
  level: "A2",
  order: 4,
  title: t("Shopping and fashion", "Shopping et mode", "التسوّق والموضة"),
  theme: t(
    "Comparing products, choosing a present, exchanging an item",
    "Comparer des produits, choisir un cadeau, échanger un article",
    "مقارنة المنتجات، واختيار هدية، واستبدال سلعة"
  ),
  canDo: [
    t("I can compare two products (price, quality, style).", "Je peux comparer deux produits (prix, qualité, style).", "أستطيع أن أقارن بين منتجين (السعر، والجودة، والأسلوب)."),
    t("I can say which product is the best or the cheapest.", "Je peux dire quel produit est le meilleur ou le moins cher.", "أستطيع أن أقول أي منتج هو الأفضل أو الأرخص."),
    t("I can ask for advice and talk about a present for someone.", "Je peux demander conseil et parler d'un cadeau pour quelqu'un.", "أستطيع أن أطلب النصيحة وأتحدث عن هدية لشخص ما."),
    t("I can ask to exchange or return an item.", "Je peux demander à échanger ou à rendre un article.", "أستطيع أن أطلب استبدال سلعة أو إرجاعها."),
  ],
  context: t(
    "Malak and her brother Rayan are looking for a birthday present for their mother in a shop in Lille.",
    "Malak et son frère Rayan cherchent un cadeau d'anniversaire pour leur mère dans une boutique de Lille.",
    "تبحث ملاك وأخوها ريان عن هدية عيد ميلاد لأمّهما في متجر بمدينة ليل."
  ),
  dialogue: {
    title: t("A present for Mum", "Un cadeau pour maman", "هدية لأمّي"),
    setting: t("A clothes and accessories shop", "Une boutique de vêtements et d'accessoires", "متجر ملابس وإكسسوارات"),
    lines: [
      { speaker: "Vendeuse", fr: "Bonjour ! Je peux vous aider ?" },
      { speaker: "Malak", fr: "Oui, nous cherchons un cadeau pour notre mère. C'est son anniversaire samedi." },
      { speaker: "Vendeuse", fr: "Qu'est-ce qu'elle aime ?" },
      { speaker: "Rayan", fr: "Elle adore les foulards." },
      { speaker: "Vendeuse", fr: "Regardez : ce foulard bleu est en soie, et le vert est en coton." },
      { speaker: "Malak", fr: "Le bleu est plus élégant que le vert, mais il est sûrement plus cher. Il coûte combien ?" },
      { speaker: "Vendeuse", fr: "Le bleu coûte soixante-dix euros, le vert trente-cinq." },
      { speaker: "Rayan", fr: "Soixante-dix euros ! C'est le plus cher du magasin ?" },
      { speaker: "Vendeuse", fr: "Non, mais c'est la meilleure qualité. La soie est plus douce et plus légère que le coton." },
      { speaker: "Malak", fr: "Rayan, à ton avis, il va lui plaire ?" },
      { speaker: "Rayan", fr: "Oui, le bleu, c'est sa couleur préférée. On lui offre le bleu." },
      { speaker: "Malak", fr: "D'accord. Est-ce qu'on peut l'échanger s'il ne lui plaît pas ?" },
      { speaker: "Vendeuse", fr: "Bien sûr, vous avez trente jours pour l'échanger, avec le ticket de caisse." },
      { speaker: "Rayan", fr: "Vous pouvez faire un paquet cadeau ?" },
      { speaker: "Vendeuse", fr: "Avec plaisir. Vous payez comment ?" },
      { speaker: "Malak", fr: "Par carte. Et toi, Rayan, tu me donnes trente-cinq euros ce soir !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u04-c1", prompt: t("Who is the present for?", "Pour qui est le cadeau ?", "لمن الهدية؟"), optionsL10n: { en: ["Their mother", "Their sister", "A friend"], fr: ["Leur mère", "Leur sœur", "Une amie"], ar: ["لأمّهما", "لأختهما", "لصديقة"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u04-c2", prompt: t("Why is the blue scarf more expensive?", "Pourquoi le foulard bleu est-il plus cher ?", "لماذا الوشاح الأزرق أغلى؟"), optionsL10n: { en: ["It's silk, the best quality.", "It's bigger.", "It's a famous brand."], fr: ["Il est en soie, la meilleure qualité.", "Il est plus grand.", "C'est une marque célèbre."], ar: ["لأنه من الحرير، وهو أفضل جودة.", "لأنه أكبر.", "لأنه من ماركة مشهورة."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u04-c3", prompt: t("How long do they have to exchange it?", "Combien de temps ont-ils pour l'échanger ?", "كم لديهما من الوقت لاستبداله؟"), optionsL10n: { en: ["14 days", "30 days", "No exchange possible"], fr: ["14 jours", "30 jours", "Pas d'échange possible"], ar: ["14 يومًا", "30 يومًا", "لا يمكن الاستبدال"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u04-c4", prompt: t("How much will Rayan give Malak?", "Combien Rayan va-t-il donner à Malak ?", "كم سيعطي ريان لملاك؟"), options: ["35 €", "70 €", "30 €"], correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Clothes and accessories", "Vêtements et accessoires", "الملابس والإكسسوارات"),
      items: [
        { fr: "le foulard", gender: "m", meaning: t("scarf (light)", "carré de tissu porté au cou", "الوشاح") },
        { fr: "la veste / le manteau", meaning: t("jacket / coat", "vêtements d'extérieur", "السترة / المعطف") },
        { fr: "la robe / la jupe", meaning: t("dress / skirt", "vêtements", "الفستان / التنورة") },
        { fr: "le pantalon / la chemise", meaning: t("trousers / shirt", "vêtements", "البنطال / القميص") },
        { fr: "les chaussures", gender: "pl", meaning: t("shoes", "pour les pieds", "الأحذية") },
        { fr: "le sac (à main)", gender: "m", meaning: t("(hand)bag", "pour porter ses affaires", "حقيبة اليد") },
        { fr: "en soie / en coton / en cuir / en laine", meaning: t("made of silk / cotton / leather / wool", "matières", "من الحرير / القطن / الجلد / الصوف") },
        { fr: "la taille / la pointure", gender: "f", meaning: t("size (clothes) / size (shoes)", "mesure du vêtement / de la chaussure", "مقاس الملابس / مقاس الحذاء") },
      ],
    },
    {
      title: t("In the shop", "Dans le magasin", "داخل المتجر"),
      items: [
        { fr: "essayer", meaning: t("to try on", "mettre pour voir si ça va", "يجرّب (لباسًا)") },
        { fr: "la cabine d'essayage", gender: "f", meaning: t("fitting room", "petite pièce pour essayer", "غرفة القياس") },
        { fr: "Ça vous va bien.", meaning: t("It suits you.", "C'est joli sur vous.", "يليق بك.") },
        { fr: "échanger / rembourser", meaning: t("to exchange / to refund", "changer un article / rendre l'argent", "يستبدل / يردّ المال") },
        { fr: "le ticket de caisse", gender: "m", meaning: t("receipt", "preuve d'achat", "إيصال الشراء") },
        { fr: "les soldes", gender: "pl", meaning: t("the sales", "période de prix réduits", "التخفيضات الموسمية") },
        { fr: "un paquet cadeau", gender: "m", meaning: t("gift wrapping", "emballage pour offrir", "تغليف الهدية") },
        { fr: "plaire à quelqu'un", meaning: t("to please someone (« ça me plaît » = I like it)", "être aimé par quelqu'un", "يعجب شخصًا («ça me plaît» = يعجبني)") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u04-g1",
      title: t("Comparing: plus, moins, aussi… que", "Comparer : plus, moins, aussi… que", "المقارنة: plus وmoins وaussi… que"),
      explanation: t(
        "With an adjective or adverb: plus / moins / aussi + adjective + que. « Le bleu est plus élégant que le vert », « Le coton est moins cher que la soie », « Ce sac est aussi grand que l'autre ». With a noun: plus de / moins de / autant de + noun + que: « Il y a plus de choix ici ». With a verb: verb + plus / moins / autant + que: « Elle dépense moins que moi ». Irregular: bon → meilleur (« La soie est meilleure »), bien → mieux (« Ça te va mieux »).",
        "Avec un adjectif ou un adverbe : plus / moins / aussi + adjectif + que. « Le bleu est plus élégant que le vert », « Le coton est moins cher que la soie », « Ce sac est aussi grand que l'autre ». Avec un nom : plus de / moins de / autant de + nom + que : « Il y a plus de choix ici ». Avec un verbe : verbe + plus / moins / autant + que : « Elle dépense moins que moi ». Irréguliers : bon → meilleur (« La soie est meilleure »), bien → mieux (« Ça te va mieux »).",
        "مع الصفة أو الظرف: plus / moins / aussi + صفة + que. «Le bleu est plus élégant que le vert» و«Le coton est moins cher que la soie» و«Ce sac est aussi grand que l'autre». ومع الاسم: plus de / moins de / autant de + اسم + que: «Il y a plus de choix ici». ومع الفعل: فعل + plus / moins / autant + que: «Elle dépense moins que moi». والشاذ: bon ← meilleur («La soie est meilleure»)، وbien ← mieux («Ça te va mieux»)."
      ),
      examples: [
        { fr: "Cette veste est plus chaude que ton manteau.", gloss: t("This jacket is warmer than your coat.", "plus + adjectif + que.", "هذه السترة أدفأ من معطفك.") },
        { fr: "En ligne, il y a autant de choix qu'en magasin.", gloss: t("Online there is as much choice as in the shop.", "autant de + nom.", "على الإنترنت يوجد خيارات بقدر ما في المتجر.") },
      ],
      watchOut: t(
        "Never « plus bon »: say « meilleur ». And « plus bien » → « mieux ».",
        "On ne dit jamais « plus bon » mais « meilleur ». Et « plus bien » → « mieux ».",
        "لا نقول أبدًا «plus bon» بل «meilleur»، و«plus bien» ← «mieux»."
      ),
    },
    {
      id: "a2u04-g2",
      title: t("The superlative: le plus, le moins, le meilleur", "Le superlatif : le plus, le moins, le meilleur", "صيغة التفضيل العليا: le plus وle moins وle meilleur"),
      explanation: t(
        "Le / la / les + plus / moins + adjective (+ de + group): « C'est le foulard le plus cher du magasin », « la robe la moins chère ». If the adjective normally comes before the noun, so does the superlative: « le plus beau sac ». Irregular: le meilleur / la meilleure (best, adjective), le mieux (best, adverb).",
        "Le / la / les + plus / moins + adjectif (+ de + groupe) : « C'est le foulard le plus cher du magasin », « la robe la moins chère ». Si l'adjectif se place avant le nom, le superlatif aussi : « le plus beau sac ». Irréguliers : le meilleur / la meilleure (adjectif), le mieux (adverbe).",
        "نستخدم le / la / les + plus / moins + صفة (+ de + مجموعة): «C'est le foulard le plus cher du magasin» (أغلى وشاح في المتجر)، و«la robe la moins chère» (أرخص فستان). وإذا كانت الصفة تأتي عادةً قبل الاسم فكذلك صيغة التفضيل: «le plus beau sac». والشاذ: le meilleur / la meilleure (صفة، الأفضل)، وle mieux (ظرف)."
      ),
      examples: [
        { fr: "C'est la boutique la plus élégante de la rue.", gloss: t("It's the most elegant shop in the street.", "Superlatif + de.", "إنه أكثر متاجر الشارع أناقة.") },
        { fr: "Ce sont les meilleures chaussures pour marcher.", gloss: t("These are the best shoes for walking.", "les meilleures.", "هذه أفضل الأحذية للمشي.") },
      ],
    },
    {
      id: "a2u04-g3",
      title: t("Indirect object pronouns: lui, leur", "Les pronoms COI : lui, leur", "ضمائر المفعول به غير المباشر: lui وleur"),
      explanation: t(
        "Verbs used with « à + person » take an indirect object pronoun: me, te, lui (him or her), nous, vous, leur (them). Common verbs: donner à, offrir à, parler à, téléphoner à, répondre à, demander à, plaire à. « On offre le foulard à maman » → « On lui offre le foulard ». The pronoun goes before the verb, like le / la / les: « Je ne leur ai pas répondu ».",
        "Les verbes construits avec « à + personne » prennent un pronom COI : me, te, lui (lui ou elle), nous, vous, leur. Verbes fréquents : donner à, offrir à, parler à, téléphoner à, répondre à, demander à, plaire à. « On offre le foulard à maman » → « On lui offre le foulard ». Le pronom se place avant le verbe, comme le / la / les : « Je ne leur ai pas répondu ».",
        "الأفعال التي تأتي مع «à + شخص» تأخذ ضمير مفعول به غير مباشر: me وte وlui (له أو لها) وnous وvous وleur (لهم). ومن الأفعال الشائعة: donner à وoffrir à وparler à وtéléphoner à وrépondre à وdemander à وplaire à. «On offre le foulard à maman» ← «On lui offre le foulard». ويوضع الضمير قبل الفعل مثل le / la / les: «Je ne leur ai pas répondu»."
      ),
      table: {
        head: ["COD (sans à)", "COI (avec à)"],
        rows: [
          ["le, la, l'", "lui"],
          ["les", "leur"],
          ["me, te, nous, vous", "me, te, nous, vous"],
        ],
      },
      examples: [
        { fr: "Tu téléphones à tes parents ? — Oui, je leur téléphone ce soir.", gloss: t("Are you calling your parents? — Yes, I'm calling them tonight.", "téléphoner à → leur.", "هل تتصل بوالديك؟ — نعم، سأتصل بهما الليلة.") },
        { fr: "Cette robe me plaît beaucoup.", gloss: t("I really like this dress.", "plaire à → me.", "يعجبني هذا الفستان كثيرًا.") },
      ],
      watchOut: t(
        "« Lui » is for both a man and a woman: « J'offre un livre à Malak » → « Je lui offre un livre ».",
        "« Lui » s'emploie pour un homme comme pour une femme : « J'offre un livre à Malak » → « Je lui offre un livre ».",
        "«lui» تُستخدم للرجل والمرأة على حدّ سواء: «J'offre un livre à Malak» ← «Je lui offre un livre»."
      ),
    },
  ],
  pronunciation: {
    title: t("The disappearing « e » in everyday speech", "Le « e » qui disparaît à l'oral", "حرف «e» الذي يختفي في الكلام اليومي"),
    explanation: t(
      "In fast, everyday French, many unstressed « e » [ə] are not pronounced: « je te donne » sounds like [ʒtədɔn], « un petit cadeau » like [œ̃ptikado], « je ne sais pas » like [ʒənsɛpa] or even [ʃɛpa]. You don't have to speak this way, but recognising it helps you understand people in shops and on the street.",
      "À l'oral courant et rapide, beaucoup de « e » [ə] non accentués ne se prononcent pas : « je te donne » se dit [ʒtədɔn], « un petit cadeau » [œ̃ptikado], « je ne sais pas » [ʒənsɛpa] ou même [ʃɛpa]. Vous n'êtes pas obligé de parler ainsi, mais le reconnaître vous aide à comprendre les gens dans les magasins et dans la rue.",
      "في الفرنسية اليومية السريعة لا تُنطق كثير من حروف «e» [ə] غير المنبورة: «je te donne» تُسمع [ʒtədɔn]، و«un petit cadeau» تُسمع [œ̃ptikado]، و«je ne sais pas» تُسمع [ʒənsɛpa] أو حتى [ʃɛpa]. لستَ مضطرًا إلى الكلام بهذه الطريقة، لكن التعرّف عليها يساعدك على فهم الناس في المتاجر والشوارع."
    ),
    examples: ["je te donne", "un petit cadeau", "je ne sais pas", "Ça te plaît ?", "Tu me donnes trente-cinq euros ?"],
  },
  culture: {
    title: t("Sales, exchanges and refunds", "Soldes, échanges et remboursements", "التخفيضات والاستبدال واسترداد المال"),
    body: t(
      "In France, the official sales (« les soldes ») take place twice a year: in winter from January and in summer from late June, for four weeks each. In a physical shop, exchanging or refunding an item is a commercial gesture, not a legal right: each shop sets its own rules (often 14 or 30 days with the receipt), so ask before paying. For online purchases, the law gives you 14 days to change your mind (« droit de rétractation »).",
      "En France, les soldes officiels ont lieu deux fois par an : en hiver à partir de janvier et en été à partir de fin juin, pendant quatre semaines chacun. Dans un magasin physique, l'échange ou le remboursement est un geste commercial, pas un droit légal : chaque magasin fixe ses règles (souvent 14 ou 30 jours avec le ticket de caisse), alors demandez avant de payer. Pour un achat en ligne, la loi vous donne 14 jours pour changer d'avis (droit de rétractation).",
      "تُقام التخفيضات الرسمية («les soldes») في فرنسا مرتين في السنة: في الشتاء ابتداءً من يناير، وفي الصيف ابتداءً من أواخر يونيو، ولمدة أربعة أسابيع في كل مرة. وفي المتاجر الفعلية يكون استبدال السلعة أو استرداد ثمنها مبادرة تجارية لا حقًا قانونيًا: فكل متجر يحدّد قواعده (غالبًا 14 أو 30 يومًا مع إيصال الشراء)، لذا اسأل قبل الدفع. أما في الشراء عبر الإنترنت فيمنحك القانون 14 يومًا لتغيير رأيك («droit de rétractation»)."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u04-p1", prompt: t("Comparative: leather costs more than cotton.", "Comparatif : le cuir coûte plus que le coton.", "المقارنة: الجلد أغلى من القطن."), sentence: "Le cuir est ___ cher que le coton.", answers: ["plus"] },
    { kind: "fill", id: "a2u04-p2", prompt: t("Comparative of bon.", "Comparatif de bon.", "صيغة المقارنة من bon."), sentence: "Ce restaurant est ___ que l'autre.", answers: ["meilleur"] },
    { kind: "fill", id: "a2u04-p3", prompt: t("Comparative of bien.", "Comparatif de bien.", "صيغة المقارنة من bien."), sentence: "Cette robe te va ___ que la jupe.", answers: ["mieux"] },
    { kind: "fill", id: "a2u04-p4", prompt: t("Superlative: the cheapest jacket in the shop.", "Superlatif : la veste la moins chère du magasin.", "صيغة التفضيل العليا: أرخص سترة في المتجر."), sentence: "C'est la veste la ___ chère du magasin.", answers: ["moins"] },
    { kind: "fill", id: "a2u04-p5", prompt: t("Replace « à ma sœur ».", "Remplacez « à ma sœur ».", "استبدل «à ma sœur»."), sentence: "J'offre un sac à ma sœur. → Je ___ offre un sac.", answers: ["lui"] },
    { kind: "fill", id: "a2u04-p6", prompt: t("Replace « à mes amis ».", "Remplacez « à mes amis ».", "استبدل «à mes amis»."), sentence: "Je téléphone à mes amis. → Je ___ téléphone.", answers: ["leur"] },
    { kind: "choice", id: "a2u04-p7", prompt: t("COD or COI? « Tu vois Malak ? — Oui, je ___ vois. »", "COD ou COI ? « Tu vois Malak ? — Oui, je ___ vois. »", "مفعول مباشر أم غير مباشر؟ «Tu vois Malak ? — Oui, je ___ vois.»"), options: ["la", "lui", "leur"], correctIndex: 0, explanation: t("voir quelqu'un (no « à ») → la.", "voir quelqu'un (sans « à ») → la.", "voir quelqu'un (بلا «à») ← la.") },
    { kind: "choice", id: "a2u04-p8", prompt: t("« Ces chaussures ___ plaisent ? » (to you, informal)", "« Ces chaussures ___ plaisent ? » (tu)", "«Ces chaussures ___ plaisent ?» (لك)"), options: ["te", "toi", "ton"], correctIndex: 0 },
    { kind: "choice", id: "a2u04-p9", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["C'est le plus bon gâteau.", "C'est le meilleur gâteau.", "C'est le mieux gâteau."], correctIndex: 1 },
    { kind: "order", id: "a2u04-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Est-ce que je peux l'essayer ?" },
    { kind: "order", id: "a2u04-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "On lui offre le foulard bleu." },
  ],
  production: {
    prompt: t(
      "You bought something online and it doesn't suit you. Write a message (60–80 words) to the shop's customer service: say what you bought, compare it with what you expected, and ask to exchange it or get a refund.",
      "Vous avez acheté un article en ligne et il ne vous convient pas. Écrivez un message (60 à 80 mots) au service client : dites ce que vous avez acheté, comparez avec ce que vous attendiez, et demandez un échange ou un remboursement.",
      "اشتريت سلعة عبر الإنترنت ولم تناسبك. اكتب رسالة (60 إلى 80 كلمة) إلى خدمة العملاء: اذكر ما اشتريته، وقارنه بما كنت تتوقّعه، واطلب استبداله أو استرداد ثمنه."
    ),
    model: "Bonjour,\nLe 3 mars, j'ai commandé une veste en laine bleue, taille M (commande n° 45821). Je l'ai reçue hier, mais elle est plus petite que les autres vestes en taille M et la couleur est moins claire que sur la photo. Est-ce que je peux l'échanger contre une taille L ? Sinon, je voudrais être remboursée.\nMerci d'avance,\nSara Haddad",
    checklist: [
      t("I say what I bought and when (passé composé).", "Je dis ce que j'ai acheté et quand (passé composé).", "ذكرت ما اشتريته ومتى (الماضي المركّب)."),
      t("I use at least two comparisons.", "J'utilise au moins deux comparaisons.", "استخدمت مقارنتين على الأقل."),
      t("I use a pronoun to avoid repeating the item (je l'ai reçue…).", "J'utilise un pronom pour ne pas répéter l'article (je l'ai reçue…).", "استخدمت ضميرًا لتجنّب تكرار اسم السلعة (je l'ai reçue…)."),
      t("I make a clear, polite request.", "Je fais une demande claire et polie.", "قدّمت طلبًا واضحًا ومهذّبًا."),
    ],
  },
  task: {
    title: t("Compare and choose", "Comparer et choisir", "قارن واختر"),
    brief: t(
      "On a French shopping website, choose two versions of the same product (two phones, two jackets…). Compare them aloud in French (price, quality, size, style), say which is the best for you and why, and say who you could offer it to.",
      "Sur un site marchand français, choisissez deux versions d'un même produit (deux téléphones, deux vestes…). Comparez-les à voix haute en français (prix, qualité, taille, style), dites lequel est le meilleur pour vous et pourquoi, et à qui vous pourriez l'offrir.",
      "على موقع تسوّق فرنسي، اختر نسختين من المنتج نفسه (هاتفين، أو سترتين…). قارن بينهما بصوت عالٍ بالفرنسية (السعر، والجودة، والمقاس، والأسلوب)، وقل أيهما الأفضل بالنسبة لك ولماذا، ولمن يمكن أن تهديه."
    ),
    checklist: [
      t("I made at least four comparisons.", "J'ai fait au moins quatre comparaisons.", "أجريت أربع مقارنات على الأقل."),
      t("I used one superlative.", "J'ai utilisé un superlatif.", "استخدمت صيغة تفضيل عليا واحدة."),
      t("I used « lui » or « leur ».", "J'ai utilisé « lui » ou « leur ».", "استخدمت «lui» أو «leur»."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u04-t1", prompt: t("« Paris est ___ grand que Lyon. »", "« Paris est ___ grand que Lyon. »", "«Paris est ___ grand que Lyon.»"), options: ["plus", "plus de", "le plus"], correctIndex: 0 },
    { kind: "choice", id: "a2u04-t2", prompt: t("« Il y a ___ monde aujourd'hui qu'hier. » (less)", "« Il y a ___ monde aujourd'hui qu'hier. » (moins)", "«Il y a ___ monde aujourd'hui qu'hier.» (أقل)"), options: ["moins", "moins de", "aussi"], correctIndex: 1 },
    { kind: "choice", id: "a2u04-t3", prompt: t("« Cette tarte est ___ que l'autre. » (better)", "« Cette tarte est ___ que l'autre. » (bon)", "«Cette tarte est ___ que l'autre.» (أفضل)"), options: ["plus bonne", "meilleure", "mieux"], correctIndex: 1 },
    { kind: "choice", id: "a2u04-t4", prompt: t("« Tu chantes ___ que moi. » (better)", "« Tu chantes ___ que moi. » (bien)", "«Tu chantes ___ que moi.» (أفضل)"), options: ["meilleur", "mieux", "plus bien"], correctIndex: 1 },
    { kind: "choice", id: "a2u04-t5", prompt: t("« C'est le magasin le ___ cher de la ville. »", "« C'est le magasin le ___ cher de la ville. »", "«C'est le magasin le ___ cher de la ville.»"), options: ["plus", "plus de", "meilleur"], correctIndex: 0 },
    { kind: "choice", id: "a2u04-t6", prompt: t("« Je parle à mon père. » →", "« Je parle à mon père. » →", "«Je parle à mon père.» ←"), options: ["Je le parle.", "Je lui parle.", "Je leur parle."], correctIndex: 1 },
    { kind: "choice", id: "a2u04-t7", prompt: t("« Elle répond à ses clients. » →", "« Elle répond à ses clients. » →", "«Elle répond à ses clients.» ←"), options: ["Elle les répond.", "Elle leur répond.", "Elle lui répond."], correctIndex: 1 },
    { kind: "choice", id: "a2u04-t8", prompt: t("« Ça me plaît » means:", "« Ça me plaît » signifie :", "معنى «Ça me plaît»:"), optionsL10n: { en: ["I like it.", "I please it.", "It's mine."], fr: ["J'aime ça.", "Je fais plaisir.", "C'est à moi."], ar: ["يعجبني.", "أنا أُرضيه.", "إنه لي."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u04-t9", prompt: t("Shoe size in French:", "La taille des chaussures :", "مقاس الحذاء بالفرنسية:"), options: ["la pointure", "la taille", "la mesure"], correctIndex: 0 },
    { kind: "choice", id: "a2u04-t10", prompt: t("In a French shop (not online), exchanging an item is…", "Dans un magasin physique, l'échange d'un article est…", "في متجر فعلي (لا عبر الإنترنت)، يكون استبدال السلعة…"), optionsL10n: { en: ["a shop's choice, not a legal right", "always legally guaranteed for 14 days", "forbidden"], fr: ["un choix du magasin, pas un droit légal", "toujours garanti 14 jours par la loi", "interdit"], ar: ["قرارًا من المتجر لا حقًا قانونيًا", "مضمونًا قانونيًا دائمًا لمدة 14 يومًا", "ممنوعًا"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
};
