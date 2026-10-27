import { l10n as t, type CourseUnit } from "../types";

export const A2_U05: CourseUnit = {
  id: "fr-a2-u05-cuisine",
  level: "A2",
  order: 5,
  title: t("In the kitchen", "En cuisine", "في المطبخ"),
  theme: t(
    "Following and giving a recipe, talking about quantities",
    "Suivre et donner une recette, parler des quantités",
    "اتّباع وصفة طبخ وشرحها، والحديث عن الكميات"
  ),
  canDo: [
    t("I can understand and follow a simple recipe.", "Je peux comprendre et suivre une recette simple.", "أستطيع أن أفهم وصفة بسيطة وأتّبعها."),
    t("I can explain how to prepare a dish, step by step.", "Je peux expliquer étape par étape comment préparer un plat.", "أستطيع أن أشرح خطوة بخطوة طريقة تحضير طبق."),
    t("I can talk about quantities without repeating the noun (en).", "Je peux parler de quantités sans répéter le nom (en).", "أستطيع أن أتحدث عن الكميات من دون تكرار الاسم (en)."),
    t("I can give instructions with pronouns (casse-les, mets-en).", "Je peux donner des consignes avec des pronoms (casse-les, mets-en).", "أستطيع أن أعطي تعليمات مع الضمائر (casse-les، mets-en)."),
  ],
  context: t(
    "It's 2 February, « la Chandeleur ». Léo teaches his flatmate Aïcha how to make French crêpes.",
    "C'est le 2 février, la Chandeleur. Léo apprend à sa colocataire Aïcha à faire des crêpes.",
    "إنه الثاني من فبراير، يوم «la Chandeleur». يعلّم ليو زميلته في السكن عائشة كيف تحضّر الكريب الفرنسي."
  ),
  dialogue: {
    title: t("Crêpes for la Chandeleur", "Des crêpes pour la Chandeleur", "كريب لعيد «Chandeleur»"),
    setting: t("In the kitchen of a shared flat", "Dans la cuisine d'une colocation", "في مطبخ شقة مشتركة"),
    lines: [
      { speaker: "Aïcha", fr: "Tu fais des crêpes ? C'est une fête aujourd'hui ?" },
      { speaker: "Léo", fr: "Oui, c'est la Chandeleur ! En France, on mange des crêpes le 2 février. Tu veux m'aider ?" },
      { speaker: "Aïcha", fr: "Avec plaisir ! Qu'est-ce qu'il faut ?" },
      { speaker: "Léo", fr: "De la farine, des œufs, du lait, du beurre et une pincée de sel. Tu peux sortir les œufs ?" },
      { speaker: "Aïcha", fr: "On en met combien ?" },
      { speaker: "Léo", fr: "Il en faut quatre. Casse-les dans le saladier." },
      { speaker: "Aïcha", fr: "Voilà. Et la farine ?" },
      { speaker: "Léo", fr: "Deux cent cinquante grammes. Verse-la petit à petit et mélange bien." },
      { speaker: "Aïcha", fr: "Oh, il y a des grumeaux !" },
      { speaker: "Léo", fr: "Ce n'est pas grave. Ajoute le lait doucement et continue à mélanger. Il en faut un demi-litre." },
      { speaker: "Aïcha", fr: "Et le beurre ?" },
      { speaker: "Léo", fr: "Fais-le fondre, puis mets-en un peu dans la pâte. Ensuite, on laisse reposer la pâte une heure." },
      { speaker: "Aïcha", fr: "Une heure ? Mais j'ai faim maintenant !" },
      { speaker: "Léo", fr: "Patience ! Tu préfères les crêpes au sucre, à la confiture ou au chocolat ?" },
      { speaker: "Aïcha", fr: "Au chocolat ! Il en reste ?" },
      { speaker: "Léo", fr: "Oui, il en reste une tablette. Mais n'en mange pas avant les crêpes !" },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u05-c1", prompt: t("Why do they make crêpes today?", "Pourquoi font-ils des crêpes aujourd'hui ?", "لماذا يحضّران الكريب اليوم؟"), optionsL10n: { en: ["It's la Chandeleur.", "It's Aïcha's birthday.", "It's Sunday."], fr: ["C'est la Chandeleur.", "C'est l'anniversaire d'Aïcha.", "C'est dimanche."], ar: ["لأنه يوم «Chandeleur».", "لأنه عيد ميلاد عائشة.", "لأنه يوم الأحد."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u05-c2", prompt: t("How many eggs do they need?", "Combien d'œufs faut-il ?", "كم بيضة يحتاجان؟"), options: ["2", "4", "250"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-c3", prompt: t("How long does the batter rest?", "Combien de temps la pâte repose-t-elle ?", "كم من الوقت ترتاح العجينة؟"), optionsL10n: { en: ["Ten minutes", "One hour", "All night"], fr: ["Dix minutes", "Une heure", "Toute la nuit"], ar: ["عشر دقائق", "ساعة واحدة", "طوال الليل"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u05-c4", prompt: t("What does Aïcha want on her crêpes?", "Qu'est-ce qu'Aïcha veut sur ses crêpes ?", "ماذا تريد عائشة على الكريب؟"), optionsL10n: { en: ["Sugar", "Jam", "Chocolate"], fr: ["Du sucre", "De la confiture", "Du chocolat"], ar: ["السكر", "المربّى", "الشوكولاتة"] }, correctIndex: 2 },
  ],
  vocabulary: [
    {
      title: t("Ingredients and utensils", "Ingrédients et ustensiles", "المكوّنات وأدوات المطبخ"),
      items: [
        { fr: "la farine", gender: "f", meaning: t("flour", "poudre de céréales", "الدقيق") },
        { fr: "un œuf (des œufs)", gender: "m", meaning: t("an egg (eggs)", "produit de la poule", "بيضة (بيض)") },
        { fr: "le beurre", gender: "m", meaning: t("butter", "matière grasse du lait", "الزبدة") },
        { fr: "le sucre / le sel", gender: "m", meaning: t("sugar / salt", "pour sucrer / saler", "السكر / الملح") },
        { fr: "une pincée de", meaning: t("a pinch of", "très petite quantité", "رشّة من") },
        { fr: "un demi-litre de", meaning: t("half a litre of", "50 centilitres", "نصف لتر من") },
        { fr: "le saladier", gender: "m", meaning: t("mixing bowl", "grand bol", "وعاء الخلط") },
        { fr: "la poêle", gender: "f", meaning: t("frying pan", "pour faire cuire", "المقلاة") },
        { fr: "le four", gender: "m", meaning: t("oven", "pour cuire au chaud", "الفرن") },
        { fr: "la pâte", gender: "f", meaning: t("batter, dough", "mélange de farine et de liquide", "العجينة") },
      ],
    },
    {
      title: t("Cooking verbs", "Les verbes de la cuisine", "أفعال الطبخ"),
      items: [
        { fr: "couper", meaning: t("to cut", "diviser avec un couteau", "يقطّع") },
        { fr: "éplucher", meaning: t("to peel", "enlever la peau", "يقشّر") },
        { fr: "mélanger", meaning: t("to mix", "remuer ensemble", "يخلط") },
        { fr: "verser", meaning: t("to pour", "faire couler un liquide", "يسكب") },
        { fr: "ajouter", meaning: t("to add", "mettre en plus", "يضيف") },
        { fr: "faire cuire / faire fondre", meaning: t("to cook / to melt", "chauffer un aliment / rendre liquide", "يطهو / يذيب") },
        { fr: "laisser reposer", meaning: t("to leave to rest", "attendre sans toucher", "يترك ليرتاح") },
        { fr: "il reste…", meaning: t("there is … left", "il y a encore", "تبقّى…") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u05-g1",
      title: t("The pronoun « en »", "Le pronom « en »", "الضمير «en»"),
      explanation: t(
        "« En » replaces a noun introduced by du, de la, de l', des, de, or by a number or quantity. With a number or quantity, keep it at the end: « Il faut quatre œufs » → « Il en faut quatre »; « Je veux un peu de sucre » → « J'en veux un peu ». « En » goes before the verb (or the auxiliary): « Il en reste », « J'en ai acheté deux », « Je n'en mange pas ».",
        "« En » remplace un nom introduit par du, de la, de l', des, de, ou par un nombre ou une quantité. Avec un nombre ou une quantité, on garde ce mot à la fin : « Il faut quatre œufs » → « Il en faut quatre » ; « Je veux un peu de sucre » → « J'en veux un peu ». « En » se place avant le verbe (ou l'auxiliaire) : « Il en reste », « J'en ai acheté deux », « Je n'en mange pas ».",
        "يحلّ الضمير «en» محلّ اسم تسبقه du أو de la أو de l' أو des أو de، أو يسبقه عدد أو كمية. ومع العدد أو الكمية نُبقي هذه الكلمة في آخر الجملة: «Il faut quatre œufs» ← «Il en faut quatre»، و«Je veux un peu de sucre» ← «J'en veux un peu». ويوضع «en» قبل الفعل (أو الفعل المساعد): «Il en reste» و«J'en ai acheté deux» و«Je n'en mange pas»."
      ),
      examples: [
        { fr: "Tu as du lait ? — Oui, j'en ai.", gloss: t("Do you have milk? — Yes, I have some.", "en = du lait.", "هل عندك حليب؟ — نعم، عندي.") },
        { fr: "Combien de crêpes tu veux ? — J'en veux trois.", gloss: t("How many crêpes do you want? — I want three.", "en + nombre.", "كم كريب تريد؟ — أريد ثلاثًا.") },
        { fr: "Il n'y a plus de beurre ? — Non, il n'en reste pas.", gloss: t("Is there no more butter? — No, there's none left.", "Négation.", "ألم يعد هناك زبدة؟ — لا، لم يتبقَّ منها شيء.") },
      ],
      watchOut: t(
        "Don't use « en » for a specific thing with le / la / les: « Je prends le gâteau » → « Je le prends » (not « j'en prends »).",
        "N'utilisez pas « en » pour une chose précise avec le / la / les : « Je prends le gâteau » → « Je le prends » (pas « j'en prends »).",
        "لا تستخدم «en» لشيء محدّد تسبقه le / la / les: «Je prends le gâteau» ← «Je le prends» (وليس «j'en prends»)."
      ),
    },
    {
      id: "a2u05-g2",
      title: t("The imperative with pronouns", "L'impératif avec des pronoms", "صيغة الأمر مع الضمائر"),
      explanation: t(
        "In a positive command, the pronoun goes after the verb, with a hyphen: « Casse les œufs » → « Casse-les », « Verse la farine » → « Verse-la », « Mets du beurre » → « Mets-en ». Me and te become moi and toi: « Aide-moi ! ». In a negative command, the pronoun goes back before the verb: « Ne les casse pas », « N'en mange pas », « Ne me parle pas ». With -er verbs, the tu form takes an -s again before en: « Manges-en ».",
        "À l'impératif affirmatif, le pronom se place après le verbe, avec un trait d'union : « Casse les œufs » → « Casse-les », « Verse la farine » → « Verse-la », « Mets du beurre » → « Mets-en ». Me et te deviennent moi et toi : « Aide-moi ! ». À l'impératif négatif, le pronom revient avant le verbe : « Ne les casse pas », « N'en mange pas », « Ne me parle pas ». Pour les verbes en -er, la forme tu reprend un -s devant en : « Manges-en ».",
        "في الأمر المثبت يوضع الضمير بعد الفعل مع شَرطة: «Casse les œufs» ← «Casse-les»، و«Verse la farine» ← «Verse-la»، و«Mets du beurre» ← «Mets-en». وتصبح me وte على شكل moi وtoi: «Aide-moi !». أما في الأمر المنفي فيعود الضمير قبل الفعل: «Ne les casse pas» و«N'en mange pas» و«Ne me parle pas». ومع أفعال -er تستعيد صيغة tu حرف -s قبل en: «Manges-en»."
      ),
      table: {
        head: ["", "affirmatif", "négatif"],
        rows: [
          ["les œufs", "casse-les", "ne les casse pas"],
          ["la farine", "verse-la", "ne la verse pas"],
          ["du chocolat", "manges-en", "n'en mange pas"],
          ["(à) moi", "aide-moi", "ne m'aide pas"],
        ],
      },
      examples: [
        { fr: "Le four ? Allume-le à 180 degrés.", gloss: t("The oven? Turn it on at 180 degrees.", "le après le verbe.", "الفرن؟ شغّله على 180 درجة.") },
        { fr: "Les oignons, coupez-les en petits morceaux.", gloss: t("The onions — cut them into small pieces.", "Avec vous.", "البصل، قطّعوه قطعًا صغيرة.") },
      ],
    },
    {
      id: "a2u05-g3",
      title: t("How recipes are written", "La langue des recettes", "لغة وصفات الطبخ"),
      explanation: t(
        "Written recipes usually use the infinitive or the « vous » imperative: « Éplucher et couper les légumes » or « Épluchez et coupez les légumes ». Quantities use « de » after the measure (250 g de farine, 50 cl de lait). Steps are linked with d'abord, ensuite, puis, pendant ce temps, enfin.",
        "Les recettes écrites utilisent en général l'infinitif ou l'impératif avec « vous » : « Éplucher et couper les légumes » ou « Épluchez et coupez les légumes ». Les quantités utilisent « de » après la mesure (250 g de farine, 50 cl de lait). Les étapes s'enchaînent avec d'abord, ensuite, puis, pendant ce temps, enfin.",
        "تُكتب الوصفات عادةً بالمصدر أو بصيغة الأمر مع «vous»: «Éplucher et couper les légumes» أو «Épluchez et coupez les légumes». وتأتي «de» بعد وحدة القياس في الكميات (250 g de farine، 50 cl de lait). وتُربط الخطوات بـd'abord وensuite وpuis وpendant ce temps وenfin."
      ),
      examples: [
        { fr: "D'abord, préchauffer le four. Ensuite, mélanger la farine et les œufs.", gloss: t("First, preheat the oven. Then mix the flour and eggs.", "Infinitif dans une recette.", "أولًا، يُسخَّن الفرن مسبقًا. ثم يُخلط الدقيق والبيض.") },
        { fr: "Pendant ce temps, faites fondre le beurre.", gloss: t("Meanwhile, melt the butter.", "Impératif avec vous.", "في هذه الأثناء، أذيبوا الزبدة.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Linking with « en »", "La liaison avec « en »", "الوصل مع «en»"),
    explanation: t(
      "« En » starts with a vowel, so the consonant before it links: « mets-en » [mɛzɑ̃], « manges-en » [mɑ̃ʒzɑ̃], « vous en voulez » [vuzɑ̃vule], « ils en ont » [ilzɑ̃nɔ̃]. After « n' », say it in one go: « je n'en veux pas » [ʒənɑ̃vøpa].",
      "« En » commence par une voyelle : la consonne qui précède se lie. « Mets-en » [mɛzɑ̃], « manges-en » [mɑ̃ʒzɑ̃], « vous en voulez » [vuzɑ̃vule], « ils en ont » [ilzɑ̃nɔ̃]. Après « n' », dites tout d'un seul souffle : « je n'en veux pas » [ʒənɑ̃vøpa].",
      "يبدأ «en» بحرف متحرّك، فيتّصل به الحرف الساكن الذي قبله: «mets-en» [mɛzɑ̃]، و«manges-en» [mɑ̃ʒzɑ̃]، و«vous en voulez» [vuzɑ̃vule]، و«ils en ont» [ilzɑ̃nɔ̃]. وبعد «n'» انطق العبارة دفعة واحدة: «je n'en veux pas» [ʒənɑ̃vøpa]."
    ),
    examples: ["mets-en", "manges-en", "vous en voulez ?", "ils en ont", "je n'en veux pas"],
  },
  culture: {
    title: t("French food traditions", "Les traditions culinaires françaises", "تقاليد الطعام الفرنسية"),
    body: t(
      "Food marks the French calendar: crêpes on « la Chandeleur » (2 February), « la galette des rois » in January, chocolate at Easter. A traditional meal has an « entrée », a « plat » and a cheese or dessert, and people take time to eat together. Children often have a « goûter » (snack) around 4 p.m. after school. In 2010, UNESCO added « le repas gastronomique des Français » to its list of intangible cultural heritage.",
      "La nourriture rythme le calendrier français : des crêpes à la Chandeleur (2 février), la galette des rois en janvier, du chocolat à Pâques. Un repas traditionnel comprend une entrée, un plat et du fromage ou un dessert, et on prend le temps de manger ensemble. Les enfants prennent souvent un goûter vers 16 heures, après l'école. En 2010, l'UNESCO a inscrit « le repas gastronomique des Français » au patrimoine culturel immatériel de l'humanité.",
      "يرتبط الطعام بالتقويم الفرنسي: الكريب في «la Chandeleur» (الثاني من فبراير)، و«la galette des rois» (كعكة الملوك) في يناير، والشوكولاتة في عيد الفصح. ويتضمن الطعام التقليدي «entrée» (مقبّلات) و«plat» (طبقًا رئيسيًا) ثم الجبن أو الحلوى، ويأخذ الناس وقتهم في الأكل معًا. وكثيرًا ما يتناول الأطفال «goûter» (وجبة خفيفة) نحو الرابعة عصرًا بعد المدرسة. وفي عام 2010 أدرجت اليونسكو «الوجبة الفرنسية الذوّاقة» في قائمة التراث الثقافي غير المادي للبشرية."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u05-p1", prompt: t("Replace with « en ».", "Remplacez avec « en ».", "استبدل بـ«en»."), sentence: "Je veux du café. → J'___ veux.", answers: ["en"] },
    { kind: "fill", id: "a2u05-p2", prompt: t("Replace with « en » and keep the number.", "Remplacez avec « en » et gardez le nombre.", "استبدل بـ«en» واحتفظ بالعدد."), sentence: "Il faut trois tomates. → Il en faut ___.", answers: ["trois"] },
    { kind: "fill", id: "a2u05-p3", prompt: t("Negative with « en ».", "Négation avec « en ».", "النفي مع «en»."), sentence: "Il ne reste pas de lait. → Il n'___ reste pas.", answers: ["en"] },
    { kind: "fill", id: "a2u05-p4", prompt: t("Imperative + pronoun (tu): cut the onions.", "Impératif + pronom (tu) : les oignons.", "الأمر + الضمير (tu): البصل."), sentence: "Les oignons ? Coupe-___ !", answers: ["les"] },
    { kind: "fill", id: "a2u05-p5", prompt: t("Imperative + en (tu): put some.", "Impératif + en (tu) : mettre du sel.", "الأمر + en (tu): ضع بعضًا منه."), sentence: "Du sel ? ___ un peu.", answers: ["mets-en"] },
    { kind: "fill", id: "a2u05-p6", prompt: t("Help me! (tu)", "Aidez-moi ! (forme tu)", "ساعدني! (tu)"), sentence: "___, s'il te plaît !", answers: ["aide-moi"] },
    { kind: "choice", id: "a2u05-p7", prompt: t("Negative imperative: « Mange le chocolat ! »", "Impératif négatif : « Mange le chocolat ! »", "الأمر المنفي: «Mange le chocolat !»"), options: ["Ne mange-le pas !", "Ne le mange pas !", "Mange-le pas !"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-p8", prompt: t("« Tu prends le gâteau ? — Oui, je ___ prends. »", "« Tu prends le gâteau ? — Oui, je ___ prends. »", "«Tu prends le gâteau ? — Oui, je ___ prends.»"), options: ["en", "le", "lui"], correctIndex: 1, explanation: t("A specific cake → le.", "Un gâteau précis → le.", "كعكة محدّدة ← le.") },
    { kind: "choice", id: "a2u05-p9", prompt: t("In a written recipe, you often read:", "Dans une recette écrite, on lit souvent :", "في الوصفة المكتوبة نقرأ غالبًا:"), options: ["Tu mélanges la farine.", "Mélanger la farine.", "Je mélange la farine."], correctIndex: 1 },
    { kind: "order", id: "a2u05-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Il en faut quatre." },
    { kind: "order", id: "a2u05-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Verse-la petit à petit." },
  ],
  production: {
    prompt: t(
      "Write the recipe of a simple dish from your country (80–100 words): ingredients with quantities, then the steps with d'abord, ensuite, puis, enfin. Use « en » at least once.",
      "Écrivez la recette d'un plat simple de votre pays (80 à 100 mots) : les ingrédients avec les quantités, puis les étapes avec d'abord, ensuite, puis, enfin. Utilisez « en » au moins une fois.",
      "اكتب وصفة طبق بسيط من بلدك (80 إلى 100 كلمة): المكوّنات مع الكميات، ثم الخطوات باستخدام d'abord وensuite وpuis وenfin. واستخدم «en» مرة واحدة على الأقل."
    ),
    model: "Shakshuka (pour 2 personnes)\nIngrédients : 4 œufs, 3 tomates, 1 poivron, 1 oignon, de l'huile d'olive, du sel, du cumin.\nD'abord, coupez l'oignon et le poivron en petits morceaux et faites-les cuire dans une poêle avec un peu d'huile. Ensuite, ajoutez les tomates coupées et le cumin. Laissez cuire dix minutes. Puis cassez les œufs sur les légumes : il en faut deux par personne. Enfin, couvrez et attendez cinq minutes. Servez avec du pain !",
    checklist: [
      t("Each quantity is followed by « de ».", "Chaque quantité est suivie de « de ».", "كل كمية يتبعها «de»."),
      t("I use the imperative (vous) or the infinitive consistently.", "J'utilise l'impératif (vous) ou l'infinitif sans mélanger.", "استخدمت صيغة الأمر (vous) أو المصدر من دون خلط."),
      t("I use « en » or a pronoun after an imperative (faites-les…).", "J'utilise « en » ou un pronom après un impératif (faites-les…).", "استخدمت «en» أو ضميرًا بعد صيغة الأمر (faites-les…)."),
      t("I link steps with d'abord, ensuite, puis, enfin.", "J'enchaîne les étapes avec d'abord, ensuite, puis, enfin.", "ربطت الخطوات بـd'abord وensuite وpuis وenfin."),
    ],
  },
  task: {
    title: t("Cook in French", "Cuisiner en français", "اطبخ بالفرنسية"),
    brief: t(
      "Follow a real recipe in French (Marmiton, 750g or a cookbook) and cook it. While you cook, say each step aloud in French. Afterwards, explain the recipe to someone in two minutes, without reading.",
      "Suivez une vraie recette en français (Marmiton, 750g ou un livre de cuisine) et réalisez-la. Pendant que vous cuisinez, dites chaque étape à voix haute en français. Ensuite, expliquez la recette à quelqu'un en deux minutes, sans lire.",
      "اتّبع وصفة حقيقية بالفرنسية (من موقع Marmiton أو 750g أو كتاب طبخ) وحضّرها. وأثناء الطبخ قل كل خطوة بصوت عالٍ بالفرنسية. ثم اشرح الوصفة لشخص ما في دقيقتين من دون قراءة."
    ),
    checklist: [
      t("I understood the ingredients and quantities.", "J'ai compris les ingrédients et les quantités.", "فهمت المكوّنات والكميات."),
      t("I said the steps aloud with cooking verbs.", "J'ai dit les étapes à voix haute avec les verbes de cuisine.", "قلت الخطوات بصوت عالٍ مستخدمًا أفعال الطبخ."),
      t("I explained the recipe without reading.", "J'ai expliqué la recette sans lire.", "شرحت الوصفة من دون قراءة."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u05-t1", prompt: t("« Tu veux de l'eau ? — Oui, j'___ veux bien. »", "« Tu veux de l'eau ? — Oui, j'___ veux bien. »", "«Tu veux de l'eau ? — Oui, j'___ veux bien.»"), options: ["la", "en", "le"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t2", prompt: t("« Il y a combien d'œufs ? — Il y ___ a six. »", "« Il y a combien d'œufs ? — Il y ___ a six. »", "«Il y a combien d'œufs ? — Il y ___ a six.»"), options: ["les", "en", "y"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t3", prompt: t("« Elle ne mange pas de viande. » →", "« Elle ne mange pas de viande. » →", "«Elle ne mange pas de viande.» ←"), options: ["Elle n'en mange pas.", "Elle ne la mange pas.", "Elle ne mange pas en."], correctIndex: 0 },
    { kind: "choice", id: "a2u05-t4", prompt: t("« Prends les clés ! » →", "« Prends les clés ! » →", "«Prends les clés !» ←"), options: ["Les prends !", "Prends-les !", "Prends-leur !"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t5", prompt: t("« Ne touche pas le four ! » →", "« Ne touche pas le four ! » →", "«Ne touche pas le four !» ←"), options: ["Ne le touche pas !", "Ne touche-le pas !", "Touche-le pas !"], correctIndex: 0 },
    { kind: "choice", id: "a2u05-t6", prompt: t("« Donne-___ le sel, s'il te plaît. » (to me)", "« Donne-___ le sel, s'il te plaît. » (à moi)", "«Donne-___ le sel, s'il te plaît.» (لي)"), options: ["me", "moi", "je"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t7", prompt: t("« Mange du chocolat ! » with en:", "« Mange du chocolat ! » avec en :", "«Mange du chocolat !» مع en:"), options: ["Mange-en !", "Manges-en !", "En mange !"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t8", prompt: t("« Faire fondre le beurre » means:", "« Faire fondre le beurre », c'est :", "«Faire fondre le beurre» تعني:"), optionsL10n: { en: ["to melt the butter", "to cut the butter", "to freeze the butter"], fr: ["rendre le beurre liquide", "couper le beurre", "congeler le beurre"], ar: ["إذابة الزبدة", "تقطيع الزبدة", "تجميد الزبدة"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u05-t9", prompt: t("In « mets-en », you hear:", "Dans « mets-en », on entend :", "في «mets-en» نسمع:"), options: ["[mɛtɑ̃]", "[mɛzɑ̃]", "[mɛɑ̃]"], correctIndex: 1 },
    { kind: "choice", id: "a2u05-t10", prompt: t("La Chandeleur is on…", "La Chandeleur, c'est le…", "يوم «Chandeleur» هو…"), optionsL10n: { en: ["2 February", "14 July", "25 December"], fr: ["2 février", "14 juillet", "25 décembre"], ar: ["2 فبراير", "14 يوليو", "25 ديسمبر"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
};
