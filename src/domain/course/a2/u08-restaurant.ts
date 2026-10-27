import { l10n as t, type CourseUnit } from "../types";

export const A2_U08: CourseUnit = {
  id: "fr-a2-u08-restaurant",
  level: "A2",
  order: 8,
  title: t("Dinner out", "Un dîner au restaurant", "عشاء في المطعم"),
  theme: t(
    "Asking about dishes, complaining politely, giving your opinion",
    "Se renseigner sur les plats, faire une réclamation polie, donner son avis",
    "الاستفسار عن الأطباق، وتقديم شكوى مهذّبة، وإبداء الرأي"
  ),
  canDo: [
    t("I can ask what a dish is and understand the explanation.", "Je peux demander ce qu'est un plat et comprendre l'explication.", "أستطيع أن أسأل عن طبق ما وأفهم الشرح."),
    t("I can explain a dietary preference.", "Je peux expliquer une préférence alimentaire.", "أستطيع أن أشرح تفضيلًا غذائيًا."),
    t("I can complain politely and react to an apology.", "Je peux faire une réclamation polie et réagir à des excuses.", "أستطيع أن أقدّم شكوى بأدب وأتفاعل مع الاعتذار."),
    t("I can describe things precisely with qui, que, où.", "Je peux décrire précisément avec qui, que, où.", "أستطيع أن أصف بدقة باستخدام qui وque وoù."),
  ],
  context: t(
    "Clémence and Bilal are having dinner in a restaurant in Toulouse to celebrate Bilal's new job. Not everything goes as planned.",
    "Clémence et Bilal dînent dans un restaurant de Toulouse pour fêter le nouveau travail de Bilal. Tout ne se passe pas comme prévu.",
    "تتعشّى كليمانس وبلال في مطعم بمدينة تولوز احتفالًا بعمل بلال الجديد. لكن الأمور لا تجري كلها كما خُطّط لها."
  ),
  dialogue: {
    title: t("A small problem", "Un petit problème", "مشكلة صغيرة"),
    setting: t("A restaurant in Toulouse", "Un restaurant à Toulouse", "مطعم في تولوز"),
    lines: [
      { speaker: "Serveur", fr: "Bonsoir, vous avez réservé ?" },
      { speaker: "Bilal", fr: "Oui, une table pour deux au nom de Haddad." },
      { speaker: "Serveur", fr: "Suivez-moi… Voici la carte. Le plat que je vous recommande ce soir, c'est le magret de canard." },
      { speaker: "Clémence", fr: "Qu'est-ce que c'est, le magret ?" },
      { speaker: "Serveur", fr: "C'est le filet du canard, qu'on sert avec des pommes de terre sautées. C'est une spécialité du Sud-Ouest." },
      { speaker: "Clémence", fr: "Je ne mange pas de viande. Vous avez un plat qui est végétarien ?" },
      { speaker: "Serveur", fr: "Oui, le risotto aux champignons. C'est un plat que nos clients adorent." },
      { speaker: "Clémence", fr: "Alors, un risotto pour moi." },
      { speaker: "Bilal", fr: "Et pour moi, le magret, bien cuit, s'il vous plaît." },
      { speaker: "Bilal", fr: "Excusez-moi, monsieur, il y a un problème : j'ai demandé le magret bien cuit, mais il est presque cru." },
      { speaker: "Serveur", fr: "Oh, je suis vraiment désolé. Je le rapporte en cuisine tout de suite." },
      { speaker: "Clémence", fr: "Et mon risotto est un peu froid…" },
      { speaker: "Serveur", fr: "Toutes mes excuses, madame. Je vous apporte un autre risotto. Et le restaurant vous offre le dessert." },
      { speaker: "Serveur", fr: "Tout s'est bien passé, finalement ?" },
      { speaker: "Bilal", fr: "Oui, merci. Le magret était délicieux. C'est vraiment le restaurant où on mange le mieux du quartier !" },
      { speaker: "Serveur", fr: "Merci beaucoup. J'espère vous revoir bientôt." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u08-c1", prompt: t("What does the waiter recommend?", "Que recommande le serveur ?", "بماذا ينصح النادل؟"), optionsL10n: { en: ["Duck breast", "Mushroom risotto", "Fish of the day"], fr: ["Le magret de canard", "Le risotto aux champignons", "Le poisson du jour"], ar: ["صدر البطّ", "ريزوتو الفطر", "سمك اليوم"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u08-c2", prompt: t("Why doesn't Clémence take it?", "Pourquoi Clémence ne le prend-elle pas ?", "لماذا لا تطلبه كليمانس؟"), optionsL10n: { en: ["She doesn't eat meat.", "It's too expensive.", "She doesn't like potatoes."], fr: ["Elle ne mange pas de viande.", "C'est trop cher.", "Elle n'aime pas les pommes de terre."], ar: ["لأنها لا تأكل اللحم.", "لأنه غالٍ جدًا.", "لأنها لا تحب البطاطس."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u08-c3", prompt: t("What is wrong with Bilal's dish?", "Quel est le problème avec le plat de Bilal ?", "ما مشكلة طبق بلال؟"), optionsL10n: { en: ["It's almost raw.", "It's cold.", "It's not what he ordered."], fr: ["Il est presque cru.", "Il est froid.", "Ce n'est pas ce qu'il a commandé."], ar: ["شبه نيّء.", "بارد.", "ليس ما طلبه."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u08-c4", prompt: t("What does the restaurant offer?", "Qu'est-ce que le restaurant offre ?", "ماذا يقدّم المطعم مجانًا؟"), optionsL10n: { en: ["The dessert", "The whole meal", "A bottle of water"], fr: ["Le dessert", "Tout le repas", "Une bouteille d'eau"], ar: ["الحلوى", "الوجبة كاملة", "زجاجة ماء"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Dishes and diets", "Plats et régimes", "الأطباق والأنظمة الغذائية"),
      items: [
        { fr: "la spécialité", gender: "f", meaning: t("speciality", "plat typique d'une région", "الطبق المميّز") },
        { fr: "végétarien / végétarienne", meaning: t("vegetarian", "sans viande ni poisson", "نباتي / نباتية") },
        { fr: "végan / végane", meaning: t("vegan", "sans aucun produit animal", "نباتي صِرف") },
        { fr: "sans gluten", meaning: t("gluten-free", "sans blé", "خالٍ من الغلوتين") },
        { fr: "être allergique à", meaning: t("to be allergic to", "réagir mal à un aliment", "لديه حساسية من") },
        { fr: "saignant / à point / bien cuit", meaning: t("rare / medium / well done", "degrés de cuisson de la viande", "قليل النضج / متوسط / ناضج جيدًا") },
        { fr: "cru / crue", meaning: t("raw", "pas cuit", "نيّء / نيّئة") },
        { fr: "salé / sucré / épicé", meaning: t("salty / sweet / spicy", "goûts", "مالح / حلو / حارّ") },
      ],
    },
    {
      title: t("Complaining and apologising", "Réclamer et s'excuser", "الشكوى والاعتذار"),
      items: [
        { fr: "Il y a un problème.", meaning: t("There's a problem.", "pour commencer une réclamation", "هناك مشكلة.") },
        { fr: "Ce n'est pas ce que j'ai commandé.", meaning: t("This isn't what I ordered.", "erreur de commande", "هذا ليس ما طلبته.") },
        { fr: "trop / pas assez", meaning: t("too (much) / not enough", "« trop salé », « pas assez cuit »", "أكثر من اللازم / ليس بما يكفي") },
        { fr: "Je suis vraiment désolé(e).", meaning: t("I'm really sorry.", "excuse", "أنا آسف حقًا.") },
        { fr: "Toutes mes excuses.", meaning: t("My apologies.", "excuse formelle", "أعتذر بشدّة.") },
        { fr: "rapporter en cuisine", meaning: t("to take back to the kitchen", "renvoyer le plat", "يعيده إلى المطبخ") },
        { fr: "le restaurant vous offre…", meaning: t("… is on the house", "c'est gratuit", "على حساب المطعم…") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u08-g1",
      title: t("Relative pronouns: qui, que, où", "Les pronoms relatifs : qui, que, où", "أسماء الموصول: qui وque وoù"),
      explanation: t(
        "Relative pronouns link two sentences and avoid repetition. « Qui » is the subject of the next verb: « un plat qui est végétarien » (the dish is vegetarian). « Que » (qu' before a vowel) is the object: « le plat que je vous recommande » (I recommend the dish). « Où » refers to a place or a time: « le restaurant où on mange le mieux », « le jour où je suis arrivé ».",
        "Les pronoms relatifs relient deux phrases et évitent les répétitions. « Qui » est le sujet du verbe qui suit : « un plat qui est végétarien ». « Que » (qu' devant une voyelle) est le complément d'objet : « le plat que je vous recommande ». « Où » renvoie à un lieu ou à un moment : « le restaurant où on mange le mieux », « le jour où je suis arrivé ».",
        "تربط أسماء الموصول بين جملتين وتمنع التكرار. «qui» تكون فاعلًا للفعل الذي يليها: «un plat qui est végétarien» (طبق نباتي). و«que» (أو qu' قبل حرف متحرّك) تكون مفعولًا به: «le plat que je vous recommande» (الطبق الذي أنصحكم به). أما «où» فتشير إلى مكان أو زمان: «le restaurant où on mange le mieux» و«le jour où je suis arrivé»."
      ),
      table: {
        head: ["", "rôle", "exemple"],
        rows: [
          ["qui", "sujet", "le serveur qui nous sert"],
          ["que / qu'", "complément d'objet", "le dessert que j'ai choisi"],
          ["où", "lieu / temps", "la ville où j'habite"],
        ],
      },
      examples: [
        { fr: "C'est un restaurant qui ouvre le dimanche.", gloss: t("It's a restaurant that opens on Sundays.", "qui + verbe.", "إنه مطعم يفتح يوم الأحد.") },
        { fr: "Le gâteau qu'elle a préparé était délicieux.", gloss: t("The cake she made was delicious.", "qu' + sujet + verbe.", "الكعكة التي حضّرتها كانت لذيذة.") },
        { fr: "Je connais un café où on peut travailler.", gloss: t("I know a café where you can work.", "où = lieu.", "أعرف مقهى يمكن العمل فيه.") },
      ],
      watchOut: t(
        "« Qui » never drops its i: « l'ami qui arrive » (not « qu'arrive »). Only « que » becomes « qu' ».",
        "« Qui » ne perd jamais son i : « l'ami qui arrive » (pas « qu'arrive »). Seul « que » devient « qu' ».",
        "لا تُحذف i من «qui» أبدًا: «l'ami qui arrive» (وليس «qu'arrive»). وحدها «que» تصبح «qu'»."
      ),
    },
    {
      id: "a2u08-g2",
      title: t("Complaining politely", "Faire une réclamation polie", "تقديم شكوى بأدب"),
      explanation: t(
        "A polite complaint has three steps: attract attention politely (« Excusez-moi, monsieur »), state the problem precisely with the passé composé and « mais » (« J'ai demandé le magret bien cuit, mais il est presque cru »), then ask for a solution with the conditional (« Pourriez-vous le rapporter en cuisine ? »). To react to apologies: « Ce n'est pas grave », « Merci, c'est gentil ».",
        "Une réclamation polie a trois étapes : attirer l'attention poliment (« Excusez-moi, monsieur »), décrire le problème précisément avec le passé composé et « mais » (« J'ai demandé le magret bien cuit, mais il est presque cru »), puis demander une solution au conditionnel (« Pourriez-vous le rapporter en cuisine ? »). Pour réagir à des excuses : « Ce n'est pas grave », « Merci, c'est gentil ».",
        "للشكوى المهذّبة ثلاث خطوات: لفت الانتباه بأدب («Excusez-moi, monsieur»)، ثم وصف المشكلة بدقة باستخدام الماضي المركّب و«mais» («J'ai demandé le magret bien cuit, mais il est presque cru»)، ثم طلب الحل بصيغة الشرط («Pourriez-vous le rapporter en cuisine ?»). وللتفاعل مع الاعتذار: «Ce n'est pas grave» و«Merci, c'est gentil»."
      ),
      examples: [
        { fr: "Excusez-moi, j'ai commandé une salade sans fromage, mais il y a du fromage.", gloss: t("Excuse me, I ordered a salad without cheese, but there's cheese in it.", "Problème précis.", "عفوًا، طلبت سلطة من دون جبن، لكن فيها جبن.") },
        { fr: "Pourriez-vous m'apporter une autre fourchette ?", gloss: t("Could you bring me another fork?", "Solution au conditionnel.", "هل يمكنك أن تحضر لي شوكة أخرى؟") },
      ],
    },
    {
      id: "a2u08-g3",
      title: t("Trop, assez, pas assez", "Trop, assez, pas assez", "trop وassez وpas assez"),
      explanation: t(
        "To judge food and service: « trop » + adjective (too): « trop salé », « trop cher »; « assez » (enough, fairly): « assez chaud »; « pas assez » (not enough): « pas assez cuit ». With a noun, add « de »: « trop de sel », « pas assez de sauce ». To describe the past experience, use « c'était » + adjective: « C'était délicieux », « C'était un peu long ».",
        "Pour juger la nourriture et le service : « trop » + adjectif : « trop salé », « trop cher » ; « assez » : « assez chaud » ; « pas assez » : « pas assez cuit ». Avec un nom, on ajoute « de » : « trop de sel », « pas assez de sauce ». Pour décrire l'expérience passée, on utilise « c'était » + adjectif : « C'était délicieux », « C'était un peu long ».",
        "للحكم على الطعام والخدمة: «trop» + صفة (أكثر من اللازم): «trop salé» و«trop cher»، و«assez» (بما يكفي، إلى حدّ ما): «assez chaud»، و«pas assez» (ليس بما يكفي): «pas assez cuit». ومع الاسم نضيف «de»: «trop de sel» و«pas assez de sauce». ولوصف تجربة ماضية نستخدم «c'était» + صفة: «C'était délicieux» و«C'était un peu long»."
      ),
      examples: [
        { fr: "La soupe est trop chaude, je vais attendre un peu.", gloss: t("The soup is too hot, I'll wait a bit.", "trop + adjectif.", "الحساء ساخن جدًا، سأنتظر قليلًا.") },
        { fr: "Il n'y a pas assez de pain sur la table.", gloss: t("There isn't enough bread on the table.", "pas assez de + nom.", "لا يوجد خبز كافٍ على الطاولة.") },
      ],
    },
  ],
  pronunciation: {
    title: t("« qui » [ki] or « qu'il » [kil]?", "« qui » [ki] ou « qu'il » [kil] ?", "«qui» [ki] أم «qu'il» [kil]؟"),
    explanation: t(
      "These two sound very close but change the meaning: « l'homme qui part » (the man who is leaving) [ki] / « l'homme qu'il voit » (the man he sees) [kil]. Listen for the [l]. Same with « que » [kə] and « qu'elle » [kɛl]: « le plat que je prends » / « le plat qu'elle prend ».",
      "Ces deux formes se ressemblent beaucoup mais changent le sens : « l'homme qui part » [ki] / « l'homme qu'il voit » [kil]. Écoutez le [l]. De même pour « que » [kə] et « qu'elle » [kɛl] : « le plat que je prends » / « le plat qu'elle prend ».",
      "تتشابه هاتان الصيغتان كثيرًا لكنهما تغيّران المعنى: «l'homme qui part» (الرجل الذي يغادر) [ki] و«l'homme qu'il voit» (الرجل الذي يراه) [kil]. استمع إلى صوت [l]. والأمر نفسه مع «que» [kə] و«qu'elle» [kɛl]: «le plat que je prends» و«le plat qu'elle prend»."
    ),
    examples: ["l'homme qui part", "l'homme qu'il voit", "le plat que je prends", "le plat qu'elle prend", "C'est le restaurant où on mange le mieux."],
  },
  culture: {
    title: t("Eating out in France", "Aller au restaurant en France", "تناول الطعام في المطاعم الفرنسية"),
    body: t(
      "For dinner, it is common to book a table, especially at weekends. The waiter will ask how you want your meat cooked (« Quelle cuisson ? »): « saignant », « à point » or « bien cuit ». Duck « magret » is a speciality of the South-West and is normally served pink. If something is wrong, complaining calmly is normal and usually leads to a solution, sometimes a « geste commercial » (a free coffee or dessert). Vegetarian dishes are increasingly common, but it's worth asking.",
      "Pour le dîner, on réserve souvent une table, surtout le week-end. Le serveur demande comment vous voulez la viande (« Quelle cuisson ? ») : saignante, à point ou bien cuite. Le magret de canard est une spécialité du Sud-Ouest, servi normalement rosé. Si quelque chose ne va pas, une réclamation calme est normale et mène en général à une solution, parfois à un geste commercial (un café ou un dessert offert). Les plats végétariens sont de plus en plus fréquents, mais il vaut mieux demander.",
      "يُحجز عادةً مسبقًا لتناول العشاء، خصوصًا في عطلة نهاية الأسبوع. ويسألك النادل عن درجة نضج اللحم («Quelle cuisson ?»): «saignant» أو «à point» أو «bien cuit». و«magret» البطّ طبق مميّز في الجنوب الغربي، ويُقدَّم عادةً ورديّ اللون. وإذا كان هناك خلل فالشكوى بهدوء أمر طبيعي وتؤدي غالبًا إلى حلّ، وأحيانًا إلى «geste commercial» (قهوة أو حلوى مجانية). وأصبحت الأطباق النباتية أكثر انتشارًا، لكن من الأفضل السؤال."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u08-p1", prompt: t("qui, que or où?", "qui, que ou où ?", "qui أم que أم où؟"), sentence: "C'est le serveur ___ nous a conseillés.", answers: ["qui"] },
    { kind: "fill", id: "a2u08-p2", prompt: t("qui, que or où?", "qui, que ou où ?", "qui أم que أم où؟"), sentence: "Le plat ___ j'ai choisi est excellent.", answers: ["que"] },
    { kind: "fill", id: "a2u08-p3", prompt: t("qui, que or où?", "qui, que ou où ?", "qui أم que أم où؟"), sentence: "C'est le quartier ___ j'ai grandi.", answers: ["où"] },
    { kind: "fill", id: "a2u08-p4", prompt: t("qui or qu'?", "qui ou qu' ?", "qui أم qu'؟"), sentence: "La recette ___elle préfère est simple.", answers: ["qu'"] },
    { kind: "fill", id: "a2u08-p5", prompt: t("trop, assez or pas assez?", "trop, assez ou pas assez ?", "trop أم assez أم pas assez؟"), sentence: "Ma viande est presque crue : elle n'est ___ cuite.", answers: ["pas assez"] },
    { kind: "fill", id: "a2u08-p6", prompt: t("Add « de » or « d' ».", "Ajoutez « de » ou « d' ».", "أضف «de» أو «d'»."), sentence: "Il y a trop ___ sel dans la soupe.", answers: ["de"] },
    { kind: "choice", id: "a2u08-p7", prompt: t("Start a complaint politely:", "Commencez poliment une réclamation :", "ابدأ الشكوى بأدب:"), options: ["Hé ! C'est froid !", "Excusez-moi, monsieur, il y a un problème.", "Je ne paie pas."], correctIndex: 1 },
    { kind: "choice", id: "a2u08-p8", prompt: t("React politely to an apology:", "Réagissez poliment à des excuses :", "تفاعل بأدب مع الاعتذار:"), options: ["Ce n'est pas grave, merci.", "C'est nul.", "Enfin !"], correctIndex: 0 },
    { kind: "choice", id: "a2u08-p9", prompt: t("Meat cooked very little is…", "Une viande très peu cuite est…", "اللحم المطهوّ قليلًا جدًا يكون…"), options: ["saignante", "bien cuite", "épicée"], correctIndex: 0 },
    { kind: "order", id: "a2u08-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Ce n'est pas ce que j'ai commandé." },
    { kind: "order", id: "a2u08-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Vous avez un plat qui est végétarien ?" },
  ],
  production: {
    prompt: t(
      "Write an online review (80–100 words) of a restaurant you went to (real or imagined): describe the place, the dishes you chose, a problem if there was one and how it was solved, and your recommendation. Use qui, que and où.",
      "Écrivez un avis en ligne (80 à 100 mots) sur un restaurant où vous êtes allé (réel ou imaginaire) : décrivez le lieu, les plats que vous avez choisis, un problème s'il y en a eu et la solution, et votre recommandation. Utilisez qui, que et où.",
      "اكتب تقييمًا على الإنترنت (80 إلى 100 كلمة) لمطعم ذهبت إليه (حقيقي أو متخيّل): صِف المكان والأطباق التي اخترتها، ومشكلة إن وُجدت وكيف حُلّت، وتوصيتك. واستخدم qui وque وoù."
    ),
    model: "Samedi dernier, nous avons dîné au Petit Jardin, un restaurant qui se trouve près de la place du Capitole. La salle est petite mais très agréable. J'ai pris le plat du jour, un poisson grillé que le serveur nous a recommandé : c'était délicieux. Mon ami a commandé une pizza, mais elle était trop salée. Le serveur s'est excusé et il lui a apporté une autre pizza très rapidement. C'est un endroit où on se sent bien et je le recommande !",
    checklist: [
      t("I use qui, que and où at least once each.", "J'utilise qui, que et où au moins une fois chacun.", "استخدمت qui وque وoù مرة واحدة على الأقل لكلٍّ منها."),
      t("I tell the visit in the past (passé composé + imparfait / c'était).", "Je raconte la visite au passé (passé composé + imparfait / c'était).", "رويت الزيارة بصيغة الماضي (passé composé + imparfait / c'était)."),
      t("I judge the food with trop / assez / pas assez or c'était + adjective.", "Je juge la nourriture avec trop / assez / pas assez ou c'était + adjectif.", "حكمت على الطعام بـtrop / assez / pas assez أو c'était + صفة."),
      t("I give a clear recommendation.", "Je donne une recommandation claire.", "قدّمت توصية واضحة."),
    ],
  },
  task: {
    title: t("Order and complain", "Commander et réclamer", "اطلب واشتكِ"),
    brief: t(
      "Role-play with a partner (or record both roles): order in a restaurant explaining a dietary need, then a problem arrives (wrong dish, cold dish, mistake on the bill). Complain politely in three steps and react to the waiter's apology.",
      "Jouez la scène avec un partenaire (ou enregistrez les deux rôles) : commandez au restaurant en expliquant un besoin alimentaire, puis un problème arrive (mauvais plat, plat froid, erreur sur l'addition). Faites une réclamation polie en trois étapes et réagissez aux excuses du serveur.",
      "مثّل الموقف مع شريك (أو سجّل الدورين): اطلب في مطعم مع شرح حاجة غذائية، ثم تظهر مشكلة (طبق خاطئ، أو طبق بارد، أو خطأ في الفاتورة). قدّم شكوى بأدب في ثلاث خطوات، وتفاعل مع اعتذار النادل."
    ),
    checklist: [
      t("I explained what I can or can't eat.", "J'ai expliqué ce que je peux ou ne peux pas manger.", "شرحت ما أستطيع أكله وما لا أستطيع."),
      t("I described the problem with the passé composé and « mais ».", "J'ai décrit le problème avec le passé composé et « mais ».", "وصفت المشكلة بالماضي المركّب و«mais»."),
      t("I asked for a solution with the conditional and reacted politely.", "J'ai demandé une solution au conditionnel et réagi poliment.", "طلبت حلًا بصيغة الشرط وتفاعلت بأدب."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u08-t1", prompt: t("« Le livre ___ tu lis est intéressant. »", "« Le livre ___ tu lis est intéressant. »", "«Le livre ___ tu lis est intéressant.»"), options: ["qui", "que", "où"], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t2", prompt: t("« La femme ___ parle est ma tante. »", "« La femme ___ parle est ma tante. »", "«La femme ___ parle est ma tante.»"), options: ["qui", "que", "qu'"], correctIndex: 0 },
    { kind: "choice", id: "a2u08-t3", prompt: t("« Paris est la ville ___ je suis né. »", "« Paris est la ville ___ je suis né. »", "«Paris est la ville ___ je suis né.»"), options: ["que", "où", "qui"], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t4", prompt: t("« Le film ___ il a vu. »", "« Le film ___ il a vu. »", "«Le film ___ il a vu.»"), options: ["qui", "qu'", "que"], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t5", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["C'est l'ami qu'arrive demain.", "C'est l'ami qui arrive demain.", "C'est l'ami que arrive demain."], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t6", prompt: t("« Le café est ___ sucré : je n'aime pas ça. »", "« Le café est ___ sucré : je n'aime pas ça. »", "«Le café est ___ sucré : je n'aime pas ça.»"), options: ["trop", "trop de", "assez de"], correctIndex: 0 },
    { kind: "choice", id: "a2u08-t7", prompt: t("« Il n'y a pas assez ___ chaises. »", "« Il n'y a pas assez ___ chaises. »", "«Il n'y a pas assez ___ chaises.»"), options: ["des", "de", "les"], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t8", prompt: t("Polite request for a solution:", "Demande polie de solution :", "طلب مهذّب لحلّ:"), options: ["Changez ça !", "Pourriez-vous m'apporter un autre plat ?", "Vous devez changer."], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t9", prompt: t("Which phrase has the sound [kil]?", "Quelle expression contient le son [kil] ?", "أي عبارة فيها الصوت [kil]؟"), options: ["l'homme qui part", "l'homme qu'il voit", "le plat que je prends"], correctIndex: 1 },
    { kind: "choice", id: "a2u08-t10", prompt: t("A « geste commercial » in a restaurant is…", "Un « geste commercial » au restaurant, c'est…", "«geste commercial» في المطعم هو…"), optionsL10n: { en: ["something offered to make up for a problem", "the tip", "the set menu"], fr: ["quelque chose d'offert pour compenser un problème", "le pourboire", "le menu du jour"], ar: ["شيء يُقدَّم مجانًا تعويضًا عن مشكلة", "البقشيش", "قائمة اليوم"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-order-meal", "goal-restaurant-problem"],
  replaces: ["fr-a2-restaurant-unit"],
};
