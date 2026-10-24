import { l10n as t, type CourseUnit } from "../types";

export const A1_U11: CourseUnit = {
  id: "fr-a1-u11-loisirs",
  level: "A1",
  order: 11,
  title: t("Free time and weather", "Loisirs et météo", "أوقات الفراغ والطقس"),
  theme: t(
    "Likes and dislikes, sports and hobbies, the weather and seasons",
    "Les goûts, les sports et les loisirs, le temps qu'il fait et les saisons",
    "ما نحبّه وما نكرهه، والرياضة والهوايات، والطقس والفصول"
  ),
  canDo: [
    t("I can say what I like, love, prefer or hate.", "Je peux dire ce que j'aime, j'adore, je préfère ou je déteste.", "أستطيع أن أقول ما أحبّه وما أعشقه وما أفضّله وما أكرهه."),
    t("I can talk about my sports and hobbies.", "Je peux parler de mes sports et de mes loisirs.", "أستطيع أن أتحدث عن رياضاتي وهواياتي."),
    t("I can describe the weather and understand a simple forecast.", "Je peux décrire le temps et comprendre une météo simple.", "أستطيع أن أصف الطقس وأفهم نشرة جوية بسيطة."),
    t("I can suggest an activity and accept or refuse.", "Je peux proposer une activité, accepter ou refuser.", "أستطيع أن أقترح نشاطًا وأقبل أو أرفض."),
  ],
  context: t(
    "Clara and Mehdi are friends. On Thursday evening, they plan their weekend according to the weather forecast.",
    "Clara et Mehdi sont amis. Le jeudi soir, ils organisent leur week-end en fonction de la météo.",
    "كلارا ومهدي صديقان. في مساء يوم الخميس يخطّطان لعطلة نهاية الأسبوع بحسب النشرة الجوية."
  ),
  dialogue: {
    title: t("What shall we do this weekend?", "On fait quoi ce week-end ?", "ماذا نفعل في عطلة نهاية الأسبوع؟"),
    setting: t("On the phone, Thursday evening", "Au téléphone, le jeudi soir", "عبر الهاتف، مساء الخميس"),
    lines: [
      { speaker: "Clara", fr: "Tu fais quoi ce week-end ?" },
      { speaker: "Mehdi", fr: "Je ne sais pas encore. Tu as une idée ?" },
      { speaker: "Clara", fr: "Tu aimes la randonnée ?" },
      { speaker: "Mehdi", fr: "Oui, j'adore la nature ! Mais quel temps il fait samedi ?" },
      { speaker: "Clara", fr: "D'après la météo, il fait beau samedi : il y a du soleil et il fait vingt-deux degrés." },
      { speaker: "Mehdi", fr: "Super ! Et dimanche ?" },
      { speaker: "Clara", fr: "Dimanche, il pleut toute la journée." },
      { speaker: "Mehdi", fr: "Alors, samedi, on fait une randonnée et dimanche, on va au cinéma ?" },
      { speaker: "Clara", fr: "Bonne idée ! Tu préfères les comédies ou les films d'action ?" },
      { speaker: "Mehdi", fr: "Je déteste les films d'action. Je préfère les comédies." },
      { speaker: "Clara", fr: "Moi aussi ! Et tu joues toujours de la guitare avec ton groupe ?" },
      { speaker: "Mehdi", fr: "Oui, le vendredi soir. Et toi, tu fais toujours du yoga ?" },
      { speaker: "Clara", fr: "Non, maintenant je fais de la natation, deux fois par semaine." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u11-c1", prompt: t("What's the weather like on Saturday?", "Quel temps fait-il samedi ?", "كيف الطقس يوم السبت؟"), optionsL10n: { en: ["Sunny, 22 °C", "Rainy all day", "Cold and windy"], fr: ["Il fait beau, 22 degrés", "Il pleut toute la journée", "Il fait froid et il y a du vent"], ar: ["مشمس، 22 درجة", "ممطر طوال اليوم", "بارد وعاصف"] }, correctIndex: 0 },
    { kind: "choice", id: "u11-c2", prompt: t("What will they do on Sunday?", "Que vont-ils faire dimanche ?", "ماذا سيفعلان يوم الأحد؟"), optionsL10n: { en: ["Go hiking", "Go to the cinema", "Go swimming"], fr: ["Une randonnée", "Aller au cinéma", "Aller à la piscine"], ar: ["المشي في الطبيعة", "الذهاب إلى السينما", "السباحة"] }, correctIndex: 1 },
    { kind: "choice", id: "u11-c3", prompt: t("What kind of films does Mehdi hate?", "Quels films Mehdi déteste-t-il ?", "أي أفلام يكرهها مهدي؟"), optionsL10n: { en: ["Comedies", "Action films", "Documentaries"], fr: ["Les comédies", "Les films d'action", "Les documentaires"], ar: ["الكوميدية", "أفلام الحركة", "الوثائقية"] }, correctIndex: 1 },
    { kind: "choice", id: "u11-c4", prompt: t("What sport does Clara do now?", "Quel sport Clara fait-elle maintenant ?", "ما الرياضة التي تمارسها كلارا الآن؟"), optionsL10n: { en: ["Yoga", "Swimming", "Guitar"], fr: ["Du yoga", "De la natation", "De la guitare"], ar: ["اليوغا", "السباحة", "الغيتار"] }, correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("Hobbies and sports", "Loisirs et sports", "الهوايات والرياضة"),
      items: [
        { fr: "la randonnée", gender: "f", meaning: t("hiking", "longue marche dans la nature", "المشي في الطبيعة") },
        { fr: "la natation", gender: "f", meaning: t("swimming", "sport dans l'eau", "السباحة") },
        { fr: "le football", gender: "m", meaning: t("football", "sport d'équipe avec un ballon", "كرة القدم") },
        { fr: "le vélo", gender: "m", meaning: t("cycling", "sport à bicyclette", "ركوب الدرّاجة") },
        { fr: "la lecture", gender: "f", meaning: t("reading", "lire des livres", "القراءة") },
        { fr: "la musique", gender: "f", meaning: t("music", "chanter, jouer d'un instrument", "الموسيقى") },
        { fr: "la cuisine", gender: "f", meaning: t("cooking", "préparer des repas", "الطبخ") },
        { fr: "le cinéma", gender: "m", meaning: t("cinema, films", "salle et films", "السينما") },
        { fr: "les jeux vidéo", gender: "pl", meaning: t("video games", "jeux sur écran", "ألعاب الفيديو") },
        { fr: "sortir avec des amis", meaning: t("to go out with friends", "passer du temps dehors avec des amis", "الخروج مع الأصدقاء") },
      ],
    },
    {
      title: t("Weather and seasons", "Météo et saisons", "الطقس والفصول"),
      items: [
        { fr: "il fait beau / mauvais", meaning: t("the weather is nice / bad", "temps agréable / désagréable", "الطقس جميل / سيّئ") },
        { fr: "il fait chaud / froid", meaning: t("it's hot / cold", "température haute / basse", "الجو حار / بارد") },
        { fr: "il pleut", meaning: t("it's raining", "la pluie tombe", "إنها تمطر") },
        { fr: "il neige", meaning: t("it's snowing", "la neige tombe", "إنها تثلج") },
        { fr: "il y a du soleil / du vent / des nuages", meaning: t("it's sunny / windy / cloudy", "soleil, vent, nuages", "الجو مشمس / عاصف / غائم") },
        { fr: "il fait 22 degrés", meaning: t("it's 22 °C", "température", "درجة الحرارة 22") },
        { fr: "le printemps / l'été", gender: "m", meaning: t("spring / summer", "saisons", "الربيع / الصيف") },
        { fr: "l'automne / l'hiver", gender: "m", meaning: t("autumn / winter", "saisons", "الخريف / الشتاء") },
        { fr: "janvier, février, mars…", meaning: t("January, February, March…", "les mois (sans majuscule)", "يناير، فبراير، مارس…") },
      ],
    },
  ],
  grammar: [
    {
      id: "u11-g1",
      title: t("Expressing likes: aimer, adorer, préférer, détester", "Exprimer ses goûts : aimer, adorer, préférer, détester", "التعبير عن الذوق: aimer وadorer وpréférer وdétester"),
      explanation: t(
        "From strongest to weakest: adorer > aimer beaucoup > aimer > aimer bien > ne pas aimer > détester. These verbs are followed by a noun with the definite article (« J'adore la musique », « Je déteste le froid ») or by an infinitive (« J'aime nager »). Préférer: je préfère, nous préférons (accent change like acheter). To agree: « moi aussi » (after a positive) / « moi non plus » (after a negative).",
        "Du plus fort au plus faible : adorer > aimer beaucoup > aimer > aimer bien > ne pas aimer > détester. Ces verbes sont suivis d'un nom avec l'article défini (« J'adore la musique », « Je déteste le froid ») ou d'un infinitif (« J'aime nager »). Préférer : je préfère, nous préférons. Pour être d'accord : « moi aussi » (après une phrase positive) / « moi non plus » (après une phrase négative).",
        "من الأقوى إلى الأضعف: adorer > aimer beaucoup > aimer > aimer bien > ne pas aimer > détester. ويأتي بعد هذه الأفعال اسم مع أداة التعريف («J'adore la musique» و«Je déteste le froid») أو مصدر («J'aime nager»). والفعل préférer: je préfère، nous préférons. وللموافقة نقول: «moi aussi» (بعد جملة مثبتة) و«moi non plus» (بعد جملة منفية)."
      ),
      examples: [
        { fr: "J'aime bien le football, mais je préfère le tennis.", gloss: t("I quite like football, but I prefer tennis.", "aimer bien / préférer.", "أحب كرة القدم نوعًا ما، لكني أفضّل التنس.") },
        { fr: "Je n'aime pas danser. — Moi non plus.", gloss: t("I don't like dancing. — Me neither.", "moi non plus.", "لا أحب الرقص. — ولا أنا.") },
      ],
      watchOut: t(
        "After aimer, use « le / la / les », not « du / de la »: « J'aime le café » (but « Je bois du café »).",
        "Après aimer, on utilise « le / la / les », pas « du / de la » : « J'aime le café » (mais « Je bois du café »).",
        "بعد aimer نستخدم «le / la / les» لا «du / de la»: «J'aime le café» (لكن «Je bois du café»)."
      ),
    },
    {
      id: "u11-g2",
      title: t("Faire de, jouer à, jouer de", "Faire de, jouer à, jouer de", "faire de وjouer à وjouer de"),
      explanation: t(
        "« Faire + du / de la / de l' » for most sports and activities: faire du vélo, faire de la natation, faire de l'escalade. « Jouer + au / à la / aux » for games and team sports: jouer au football, jouer aux cartes. « Jouer + du / de la » for musical instruments: jouer du piano, jouer de la guitare. In the negative, « du / de la » become « de »: « Je ne fais pas de sport ».",
        "« Faire + du / de la / de l' » pour la plupart des sports et des activités : faire du vélo, faire de la natation, faire de l'escalade. « Jouer + au / à la / aux » pour les jeux et les sports d'équipe : jouer au football, jouer aux cartes. « Jouer + du / de la » pour les instruments : jouer du piano, jouer de la guitare. À la forme négative, « du / de la » deviennent « de » : « Je ne fais pas de sport ».",
        "نستخدم «faire + du / de la / de l'» لمعظم الرياضات والأنشطة: faire du vélo، faire de la natation، faire de l'escalade. و«jouer + au / à la / aux» للألعاب والرياضات الجماعية: jouer au football، jouer aux cartes. و«jouer + du / de la» للآلات الموسيقية: jouer du piano، jouer de la guitare. وفي النفي تتحوّل «du / de la» إلى «de»: «Je ne fais pas de sport»."
      ),
      table: {
        head: ["faire de", "jouer à", "jouer de"],
        rows: [
          ["du yoga", "au tennis", "du violon"],
          ["de la danse", "à la pétanque", "de la batterie"],
          ["de l'équitation", "aux échecs", "de l'oud"],
        ],
      },
      examples: [
        { fr: "Le week-end, nous faisons du vélo.", gloss: t("At the weekend we go cycling.", "faire du.", "في عطلة نهاية الأسبوع نركب الدرّاجة.") },
        { fr: "Mon fils joue au basket et il joue du piano.", gloss: t("My son plays basketball and the piano.", "jouer au / jouer du.", "ابني يلعب كرة السلة ويعزف على البيانو.") },
      ],
    },
    {
      id: "u11-g3",
      title: t("Weather, seasons and months", "La météo, les saisons et les mois", "الطقس والفصول والأشهر"),
      explanation: t(
        "Weather uses impersonal « il »: « il fait + adjective » (il fait beau, chaud, froid, mauvais), « il pleut », « il neige », « il y a + du / des » (il y a du vent, des nuages). Ask « Quel temps fait-il ? » (spoken: « Il fait quel temps ? »). Seasons: au printemps, en été, en automne, en hiver. Months take « en »: en mai, en décembre. Days, months and seasons have no capital letter.",
        "La météo utilise le « il » impersonnel : « il fait + adjectif » (il fait beau, chaud, froid, mauvais), « il pleut », « il neige », « il y a + du / des » (il y a du vent, des nuages). On demande « Quel temps fait-il ? » (à l'oral : « Il fait quel temps ? »). Saisons : au printemps, en été, en automne, en hiver. Mois : en mai, en décembre. Les jours, les mois et les saisons s'écrivent sans majuscule.",
        "يُعبَّر عن الطقس بالضمير «il» غير الشخصي: «il fait + صفة» (il fait beau، chaud، froid، mauvais)، و«il pleut»، و«il neige»، و«il y a + du / des» (il y a du vent، des nuages). ونسأل: «Quel temps fait-il ?» (وفي الكلام: «Il fait quel temps ?»). والفصول: au printemps، en été، en automne، en hiver. والأشهر تأتي مع «en»: en mai، en décembre. وتُكتب الأيام والأشهر والفصول بلا حرف كبير."
      ),
      examples: [
        { fr: "En hiver, il fait froid et il neige à la montagne.", gloss: t("In winter it's cold and it snows in the mountains.", "Saison + météo.", "في الشتاء يكون الجو باردًا ويتساقط الثلج في الجبال.") },
        { fr: "Au printemps, il y a souvent du vent.", gloss: t("In spring it's often windy.", "au printemps.", "في الربيع تكثر الرياح غالبًا.") },
        { fr: "Mon anniversaire est en juillet.", gloss: t("My birthday is in July.", "en + mois.", "عيد ميلادي في يوليو.") },
      ],
    },
  ],
  pronunciation: {
    title: t("[ø] in « deux » and [œ] in « heure »", "[ø] (deux) et [œ] (heure)", "الصوت [ø] في «deux» والصوت [œ] في «heure»"),
    explanation: t(
      "Both are written « eu » (or « œu »). Round your lips as for [o] and say [e]: you get [ø] — deux, il pleut, bleu, les cheveux. When a consonant is pronounced after it, the vowel opens to [œ]: heure, fleur, ils peuvent, sœur. Practise: « Il pleut à deux heures. »",
      "Les deux s'écrivent « eu » (ou « œu »). Arrondissez les lèvres comme pour [o] et dites [e] : on obtient [ø] — deux, il pleut, bleu, les cheveux. Quand une consonne prononcée suit, la voyelle s'ouvre en [œ] : heure, fleur, ils peuvent, sœur. Entraînez-vous : « Il pleut à deux heures. »",
      "يُكتب الصوتان على شكل «eu» (أو «œu»). استدر بشفتيك كما في [o] وانطق [e]: فتحصل على [ø] — deux، il pleut، bleu، les cheveux. وعندما يتبعه حرف ساكن منطوق ينفتح الصوت إلى [œ]: heure، fleur، ils peuvent، sœur. تدرّب: «Il pleut à deux heures.»"
    ),
    examples: ["deux — heure", "il pleut", "bleu — fleur", "ma sœur", "Il pleut à deux heures."],
  },
  culture: {
    title: t("Leisure and climate in France", "Loisirs et climat en France", "أوقات الفراغ والمناخ في فرنسا"),
    body: t(
      "Employees in France have five weeks of paid holiday a year, and many leave in July or August. Hiking, cycling and swimming are very popular, and millions of people belong to a local « association » (sports club, choir, theatre group…). Pétanque, a ball game from Provence, is played in village squares in summer. The climate varies: mild and rainy in the west (oceanic), hot and dry summers in the south (Mediterranean), cold winters in the east and in the mountains.",
      "En France, les salariés ont cinq semaines de congés payés par an, et beaucoup partent en juillet ou en août. La randonnée, le vélo et la natation sont très populaires, et des millions de personnes font partie d'une association (club de sport, chorale, théâtre…). La pétanque, jeu de boules venu de Provence, se joue sur les places de village en été. Le climat varie : doux et pluvieux à l'ouest (océanique), étés chauds et secs dans le sud (méditerranéen), hivers froids à l'est et à la montagne.",
      "يحصل الموظفون في فرنسا على خمسة أسابيع إجازة مدفوعة الأجر في السنة، ويسافر كثيرون منهم في يوليو أو أغسطس. وتحظى رياضات المشي في الطبيعة وركوب الدرّاجات والسباحة بشعبية كبيرة، وينتمي ملايين الأشخاص إلى «association» محلية (نادٍ رياضي، أو جوقة، أو فرقة مسرحية…). أما «pétanque»، وهي لعبة كرات معدنية من منطقة بروفانس، فتُلعب في ساحات القرى صيفًا. ويتنوّع المناخ: معتدل وممطر في الغرب (محيطي)، وصيف حار وجاف في الجنوب (متوسطي)، وشتاء بارد في الشرق وفي الجبال."
    ),
  },
  practice: [
    { kind: "fill", id: "u11-p1", prompt: t("Article after aimer.", "Article après aimer.", "الأداة بعد aimer."), sentence: "J'adore ___ musique.", answers: ["la"] },
    { kind: "fill", id: "u11-p2", prompt: t("Conjugate préférer (accent!).", "Conjuguez préférer (accent).", "صرّف الفعل préférer (انتبه للعلامة)."), sentence: "Elle ___ le thé.", answers: ["préfère"] },
    { kind: "fill", id: "u11-p3", prompt: t("faire + du / de la / de l'", "faire + du / de la / de l'", "faire + du / de la / de l'"), sentence: "Nous faisons ___ natation.", answers: ["de la"] },
    { kind: "fill", id: "u11-p4", prompt: t("jouer à + article", "jouer à + article", "jouer à + الأداة"), sentence: "Ils jouent ___ football.", answers: ["au"] },
    { kind: "fill", id: "u11-p5", prompt: t("jouer de + article (instrument)", "jouer de + article (instrument)", "jouer de + الأداة (آلة موسيقية)"), sentence: "Tu joues ___ guitare ?", answers: ["de la"] },
    { kind: "fill", id: "u11-p6", prompt: t("Negative.", "Négation.", "النفي."), sentence: "Je ne fais pas ___ sport.", answers: ["de"] },
    { kind: "fill", id: "u11-p7", prompt: t("Season.", "Saison.", "الفصل."), sentence: "___ été, il fait chaud.", answers: ["en"] },
    { kind: "choice", id: "u11-p8", prompt: t("« Je n'aime pas le froid. » You agree:", "« Je n'aime pas le froid. » Vous êtes d'accord :", "«Je n'aime pas le froid.» توافق:"), options: ["Moi aussi.", "Moi non plus.", "Moi oui."], correctIndex: 1 },
    { kind: "choice", id: "u11-p9", prompt: t("It's raining:", "La pluie tombe :", "إنها تمطر:"), options: ["Il fait pluie.", "Il pleut.", "Il est pluie."], correctIndex: 1 },
    { kind: "order", id: "u11-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quel temps fait-il aujourd'hui ?" },
    { kind: "order", id: "u11-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Le samedi, je fais du vélo." },
  ],
  production: {
    prompt: t(
      "Write a short post for a language-exchange website: introduce your hobbies, what you love and hate, your favourite season and why.",
      "Écrivez un court message pour un site d'échange linguistique : présentez vos loisirs, ce que vous adorez et détestez, votre saison préférée et pourquoi.",
      "اكتب منشورًا قصيرًا لموقع تبادل لغوي: عرّف بهواياتك، وما تعشقه وما تكرهه، وفصلك المفضّل ولماذا."
    ),
    model: "Salut ! Je m'appelle Ali. Pendant mon temps libre, je fais du vélo et je joue au football avec mes amis le dimanche. J'adore la musique et je joue un peu de l'oud. Je déteste le froid, alors je préfère l'été : il fait chaud et il y a du soleil. Et vous, qu'est-ce que vous aimez faire ?",
    checklist: [
      t("I use at least three verbs of taste (adorer, aimer, préférer, détester).", "J'utilise au moins trois verbes de goût.", "استخدمت ثلاثة أفعال ذوق على الأقل."),
      t("I use faire de or jouer à / de correctly.", "J'utilise faire de ou jouer à / de correctement.", "استخدمت faire de أو jouer à / de بشكل صحيح."),
      t("I describe the weather of my favourite season.", "Je décris le temps de ma saison préférée.", "وصفت طقس فصلي المفضّل."),
      t("I end with a question to the reader.", "Je termine par une question au lecteur.", "أنهيت بسؤال للقارئ."),
    ],
  },
  task: {
    title: t("Weather report and plan", "Météo et programme", "النشرة الجوية والبرنامج"),
    brief: t(
      "Check a real French weather forecast (Météo-France or a news site) for a French-speaking city this weekend. Present the forecast aloud in French, then suggest an activity for each day to a friend, who can accept or refuse.",
      "Consultez une vraie météo en français (Météo-France ou un site d'informations) pour une ville francophone ce week-end. Présentez la météo à voix haute en français, puis proposez une activité pour chaque jour à un ami, qui peut accepter ou refuser.",
      "اطّلع على نشرة جوية حقيقية بالفرنسية (Météo-France أو موقع إخباري) لمدينة ناطقة بالفرنسية في عطلة نهاية هذا الأسبوع. قدّم النشرة بصوت عالٍ بالفرنسية، ثم اقترح على صديق نشاطًا لكل يوم، ويمكنه أن يقبل أو يرفض."
    ),
    checklist: [
      t("I gave the weather and the temperature for two days.", "J'ai donné le temps et la température pour deux jours.", "ذكرت الطقس ودرجة الحرارة ليومين."),
      t("I suggested activities (« On va… ? », « Tu veux… ? »).", "J'ai proposé des activités (« On va… ? », « Tu veux… ? »).", "اقترحت أنشطة («On va… ?»، «Tu veux… ?»)."),
      t("I accepted or refused politely (« Bonne idée ! », « Désolé, je ne peux pas »).", "J'ai accepté ou refusé poliment (« Bonne idée ! », « Désolé, je ne peux pas »).", "قبلت أو رفضت بأدب («Bonne idée !»، «Désolé, je ne peux pas»)."),
    ],
  },
  test: [
    { kind: "choice", id: "u11-t1", prompt: t("« J'aime ___ cinéma. »", "« J'aime ___ cinéma. »", "«J'aime ___ cinéma.»"), options: ["du", "le", "au"], correctIndex: 1 },
    { kind: "choice", id: "u11-t2", prompt: t("« Nous ___ les films français. » (préférer)", "« Nous ___ les films français. » (préférer)", "«Nous ___ les films français.» (préférer)"), options: ["préférons", "préfèrons", "préferez"], correctIndex: 0 },
    { kind: "choice", id: "u11-t3", prompt: t("« Elle fait ___ yoga. »", "« Elle fait ___ yoga. »", "«Elle fait ___ yoga.»"), options: ["le", "du", "au"], correctIndex: 1 },
    { kind: "choice", id: "u11-t4", prompt: t("« Il joue ___ tennis. »", "« Il joue ___ tennis. »", "«Il joue ___ tennis.»"), options: ["du", "au", "le"], correctIndex: 1 },
    { kind: "choice", id: "u11-t5", prompt: t("« Elle joue ___ piano. »", "« Elle joue ___ piano. »", "«Elle joue ___ piano.»"), options: ["du", "au", "le"], correctIndex: 0 },
    { kind: "choice", id: "u11-t6", prompt: t("« J'aime le chocolat. — ___ ! » (I agree)", "« J'aime le chocolat. — ___ ! » (d'accord)", "«J'aime le chocolat. — ___ !» (موافقة)"), options: ["Moi aussi", "Moi non plus", "Moi pas"], correctIndex: 0 },
    { kind: "choice", id: "u11-t7", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Il fait du soleil.", "Il y a du soleil.", "Il est soleil."], correctIndex: 1 },
    { kind: "choice", id: "u11-t8", prompt: t("« ___ hiver » (season)", "« ___ hiver » (saison)", "«___ hiver» (فصل)"), options: ["au", "en", "à"], correctIndex: 1 },
    { kind: "choice", id: "u11-t9", prompt: t("Which word has the open sound [œ]?", "Quel mot contient le son ouvert [œ] ?", "أي كلمة فيها الصوت المفتوح [œ]؟"), options: ["deux", "bleu", "heure"], correctIndex: 2 },
    { kind: "choice", id: "u11-t10", prompt: t("How many weeks of paid holiday do employees have in France?", "Combien de semaines de congés payés ont les salariés en France ?", "كم أسبوعًا من الإجازة المدفوعة يحصل عليها الموظفون في فرنسا؟"), options: ["2", "5", "8"], correctIndex: 1 },
  ],
  passRatio: 0.7,
  replaces: ["fr-a1-more-weather"],
};
