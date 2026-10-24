import { l10n as t, type CourseUnit } from "../types";

export const A1_U02: CourseUnit = {
  id: "fr-a1-u02-identite",
  level: "A1",
  order: 2,
  title: t("Who are you?", "Qui êtes-vous ?", "من أنت؟"),
  theme: t(
    "Nationality, languages, age and personal details",
    "Nationalité, langues, âge et informations personnelles",
    "الجنسية واللغات والعمر والمعلومات الشخصية"
  ),
  canDo: [
    t("I can say my nationality and where I live.", "Je peux dire ma nationalité et où j'habite.", "أستطيع أن أذكر جنسيتي وأين أسكن."),
    t("I can say which languages I speak.", "Je peux dire quelles langues je parle.", "أستطيع أن أذكر اللغات التي أتحدثها."),
    t("I can give my age and a phone number.", "Je peux donner mon âge et un numéro de téléphone.", "أستطيع أن أذكر عمري ورقم هاتف."),
    t("I can fill in a simple registration form.", "Je peux remplir une fiche d'inscription simple.", "أستطيع أن أملأ استمارة تسجيل بسيطة."),
  ],
  context: t(
    "Omar wants to join the French course. At the school reception, the secretary asks him questions to fill in his registration form.",
    "Omar veut s'inscrire au cours de français. À l'accueil de l'école, la secrétaire lui pose des questions pour remplir sa fiche d'inscription.",
    "يريد عمر أن يسجّل في دورة اللغة الفرنسية. في مكتب الاستقبال تطرح عليه السكرتيرة أسئلة لتملأ استمارة تسجيله."
  ),
  dialogue: {
    title: t("At the reception desk", "À l'accueil", "في مكتب الاستقبال"),
    setting: t("A language school in Lyon", "Une école de langues à Lyon", "مدرسة لغات في ليون"),
    lines: [
      { speaker: "Secrétaire", fr: "Bonjour, monsieur. C'est pour une inscription ?" },
      { speaker: "Omar", fr: "Oui, bonjour." },
      { speaker: "Secrétaire", fr: "Votre nom, s'il vous plaît ?" },
      { speaker: "Omar", fr: "Benali. Omar Benali." },
      { speaker: "Secrétaire", fr: "Vous êtes de quelle nationalité ?" },
      { speaker: "Omar", fr: "Je suis marocain." },
      { speaker: "Secrétaire", fr: "Vous habitez où ?" },
      { speaker: "Omar", fr: "J'habite à Lyon, mais je suis de Casablanca." },
      { speaker: "Secrétaire", fr: "Quel âge avez-vous ?" },
      { speaker: "Omar", fr: "J'ai trente-quatre ans." },
      { speaker: "Secrétaire", fr: "Vous êtes étudiant ?" },
      { speaker: "Omar", fr: "Non, je suis ingénieur." },
      { speaker: "Secrétaire", fr: "Vous parlez quelles langues ?" },
      { speaker: "Omar", fr: "Je parle arabe, français et un peu anglais." },
      { speaker: "Secrétaire", fr: "Très bien. Et votre numéro de téléphone ?" },
      { speaker: "Omar", fr: "C'est le 06 45 12 38 57." },
      { speaker: "Secrétaire", fr: "Merci, monsieur Benali. Bienvenue à l'école !" },
    ],
  },
  comprehension: [
    {
      kind: "choice",
      id: "u02-c1",
      prompt: t("What is Omar's nationality?", "Quelle est la nationalité d'Omar ?", "ما جنسية عمر؟"),
      optionsL10n: {
        en: ["French", "Moroccan", "Algerian"],
        fr: ["Française", "Marocaine", "Algérienne"],
        ar: ["فرنسي", "مغربي", "جزائري"],
      },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u02-c2",
      prompt: t("Where does Omar live?", "Où habite Omar ?", "أين يسكن عمر؟"),
      options: ["À Casablanca", "À Lyon", "À Paris"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u02-c3",
      prompt: t("How old is he?", "Quel âge a-t-il ?", "كم عمره؟"),
      options: ["24 ans", "34 ans", "43 ans"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u02-c4",
      prompt: t("What is his job?", "Quelle est sa profession ?", "ما مهنته؟"),
      optionsL10n: {
        en: ["Student", "Engineer", "Teacher"],
        fr: ["Étudiant", "Ingénieur", "Professeur"],
        ar: ["طالب", "مهندس", "معلّم"],
      },
      correctIndex: 1,
    },
  ],
  vocabulary: [
    {
      title: t("Countries and nationalities", "Pays et nationalités", "البلدان والجنسيات"),
      items: [
        { fr: "la France — français / française", meaning: t("France — French", "pays et nationalité", "فرنسا — فرنسي / فرنسية") },
        { fr: "le Maroc — marocain / marocaine", meaning: t("Morocco — Moroccan", "pays et nationalité", "المغرب — مغربي / مغربية") },
        { fr: "l'Algérie — algérien / algérienne", meaning: t("Algeria — Algerian", "pays et nationalité", "الجزائر — جزائري / جزائرية") },
        { fr: "la Tunisie — tunisien / tunisienne", meaning: t("Tunisia — Tunisian", "pays et nationalité", "تونس — تونسي / تونسية") },
        { fr: "l'Égypte — égyptien / égyptienne", meaning: t("Egypt — Egyptian", "pays et nationalité", "مصر — مصري / مصرية") },
        { fr: "le Liban — libanais / libanaise", meaning: t("Lebanon — Lebanese", "pays et nationalité", "لبنان — لبناني / لبنانية") },
        { fr: "l'Espagne — espagnol / espagnole", meaning: t("Spain — Spanish", "pays et nationalité", "إسبانيا — إسباني / إسبانية") },
        { fr: "les États-Unis — américain / américaine", meaning: t("the United States — American", "pays et nationalité", "الولايات المتحدة — أمريكي / أمريكية") },
      ],
    },
    {
      title: t("Personal details", "Informations personnelles", "المعلومات الشخصية"),
      items: [
        { fr: "le nom", gender: "m", meaning: t("surname", "nom de famille", "اسم العائلة"), example: "Mon nom, c'est Benali." },
        { fr: "le prénom", gender: "m", meaning: t("first name", "nom personnel", "الاسم الأول"), example: "Mon prénom, c'est Omar." },
        { fr: "l'âge", gender: "m", meaning: t("age", "nombre d'années", "العمر"), example: "Quel âge avez-vous ?" },
        { fr: "l'adresse", gender: "f", meaning: t("address", "lieu où l'on habite", "العنوان"), example: "Votre adresse, s'il vous plaît ?" },
        { fr: "le numéro de téléphone", gender: "m", meaning: t("phone number", "numéro pour appeler", "رقم الهاتف"), example: "C'est le 06 45 12 38 57." },
        { fr: "la profession", gender: "f", meaning: t("job, occupation", "métier", "المهنة"), example: "Quelle est votre profession ?" },
        { fr: "habiter à…", meaning: t("to live in… (a city)", "avoir son domicile dans une ville", "يسكن في… (مدينة)"), example: "J'habite à Lyon." },
        { fr: "parler", meaning: t("to speak", "utiliser une langue", "يتحدث"), example: "Je parle arabe et français." },
      ],
    },
    {
      title: t("Jobs", "Professions", "المهن"),
      items: [
        { fr: "étudiant / étudiante", meaning: t("student", "personne qui étudie", "طالب / طالبة") },
        { fr: "ingénieur / ingénieure", meaning: t("engineer", "professionnel technique", "مهندس / مهندسة") },
        { fr: "médecin", meaning: t("doctor", "personne qui soigne", "طبيب / طبيبة") },
        { fr: "professeur / professeure", meaning: t("teacher", "personne qui enseigne", "معلّم / معلّمة") },
        { fr: "infirmier / infirmière", meaning: t("nurse", "soigne à l'hôpital", "ممرّض / ممرّضة") },
        { fr: "vendeur / vendeuse", meaning: t("shop assistant", "travaille dans un magasin", "بائع / بائعة") },
      ],
    },
  ],
  grammar: [
    {
      id: "u02-g1",
      title: t("The verbs être and avoir", "Les verbes être et avoir", "الفعلان être (يكون) وavoir (يملك)"),
      explanation: t(
        "Être (to be) gives nationality and profession: « Je suis marocain », « Elle est médecin ». Note: no article before a profession after être. Avoir (to have) is used for age: in French you « have » years — « J'ai 34 ans », never « Je suis 34 ».",
        "Être sert à donner la nationalité et la profession : « Je suis marocain », « Elle est médecin » (sans article devant la profession). Avoir sert pour l'âge : « J'ai 34 ans », jamais « Je suis 34 ».",
        "يُستخدم être لذكر الجنسية والمهنة: «Je suis marocain» و«Elle est médecin» (من دون أداة قبل المهنة). ويُستخدم avoir للعمر: فالفرنسي «يملك» السنوات — «J'ai 34 ans»، ولا يُقال أبدًا «Je suis 34»."
      ),
      table: {
        head: ["", "être", "avoir"],
        rows: [
          ["je / j'", "je suis", "j'ai"],
          ["tu", "tu es", "tu as"],
          ["il / elle / on", "il est", "il a"],
          ["nous", "nous sommes", "nous avons"],
          ["vous", "vous êtes", "vous avez"],
          ["ils / elles", "ils sont", "ils ont"],
        ],
      },
      examples: [
        { fr: "Je suis ingénieur.", gloss: t("I am an engineer.", "Ma profession : ingénieur.", "أنا مهندس.") },
        { fr: "Nous sommes égyptiens.", gloss: t("We are Egyptian.", "Notre nationalité.", "نحن مصريون.") },
        { fr: "Elle a vingt-deux ans.", gloss: t("She is twenty-two.", "Son âge.", "عمرها اثنان وعشرون عامًا.") },
      ],
      watchOut: t(
        "Je + ai becomes « j'ai ». Say « Je suis médecin », not « Je suis un médecin ».",
        "Je + ai devient « j'ai ». On dit « Je suis médecin », pas « Je suis un médecin ».",
        "je + ai تصبح «j'ai». ونقول «Je suis médecin» وليس «Je suis un médecin»."
      ),
    },
    {
      id: "u02-g2",
      title: t("Masculine and feminine nationalities", "Le masculin et le féminin des nationalités", "المذكّر والمؤنّث في الجنسيات"),
      explanation: t(
        "Most nationalities add « -e » in the feminine: français → française, espagnol → espagnole. Words in « -ien » double the n: algérien → algérienne. Words already ending in « -e » don't change: belge, russe. Nationalities are written with a small letter (« il est français »), but a person used as a noun takes a capital: « un Français ».",
        "Au féminin, on ajoute en général un « -e » : français → française, espagnol → espagnole. Les mots en « -ien » doublent le n : algérien → algérienne. Les mots déjà en « -e » ne changent pas : belge, russe. L'adjectif s'écrit avec une minuscule (« il est français »), le nom avec une majuscule (« un Français »).",
        "في المؤنّث نضيف عادةً «-e»: français → française، espagnol → espagnole. والكلمات المنتهية بـ«-ien» يتضاعف فيها حرف n: algérien → algérienne. أما الكلمات المنتهية أصلًا بـ«-e» فلا تتغيّر: belge، russe. وتُكتب الصفة بحرف صغير («il est français»)، أما الاسم فبحرف كبير («un Français»)."
      ),
      table: {
        head: ["masculin", "féminin"],
        rows: [
          ["français", "française"],
          ["marocain", "marocaine"],
          ["espagnol", "espagnole"],
          ["tunisien", "tunisienne"],
          ["libanais", "libanaise"],
          ["belge", "belge"],
        ],
      },
      examples: [
        { fr: "Karim est algérien. Sa sœur est algérienne.", gloss: t("Karim is Algerian. His sister is Algerian.", "Masculin, puis féminin.", "كريم جزائري. أخته جزائرية.") },
        { fr: "Je suis de Beyrouth, je suis libanaise.", gloss: t("I'm from Beirut, I'm Lebanese (woman).", "Une femme parle.", "أنا من بيروت، أنا لبنانية.") },
      ],
      watchOut: t(
        "The feminine « -e » is often heard: français [fʁɑ̃sɛ] → française [fʁɑ̃sɛz]. The final consonant is pronounced only in the feminine.",
        "Le « -e » du féminin s'entend souvent : français [fʁɑ̃sɛ] → française [fʁɑ̃sɛz]. La consonne finale se prononce seulement au féminin.",
        "غالبًا ما تُسمع «-e» المؤنّث: français [fʁɑ̃sɛ] → française [fʁɑ̃sɛz]. الحرف الساكن الأخير يُنطق في المؤنّث فقط."
      ),
    },
    {
      id: "u02-g3",
      title: t("Numbers 0 to 69", "Les nombres de 0 à 69", "الأعداد من 0 إلى 69"),
      explanation: t(
        "0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix, 11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt, 30 trente, 40 quarante, 50 cinquante, 60 soixante. With 1 we say « et un » (vingt et un, trente et un); otherwise a hyphen (vingt-deux, trente-quatre). French phone numbers are read in pairs: 06 45 12 38 57 = zéro six, quarante-cinq, douze, trente-huit, cinquante-sept.",
        "0 zéro, 1 un, 2 deux, 3 trois, 4 quatre, 5 cinq, 6 six, 7 sept, 8 huit, 9 neuf, 10 dix, 11 onze, 12 douze, 13 treize, 14 quatorze, 15 quinze, 16 seize, 17 dix-sept, 18 dix-huit, 19 dix-neuf, 20 vingt, 30 trente, 40 quarante, 50 cinquante, 60 soixante. Avec 1, on dit « et un » (vingt et un, trente et un) ; sinon un trait d'union (vingt-deux, trente-quatre). Les numéros de téléphone se lisent par deux : 06 45 12 38 57 = zéro six, quarante-cinq, douze, trente-huit, cinquante-sept.",
        "0 zéro، 1 un، 2 deux، 3 trois، 4 quatre، 5 cinq، 6 six، 7 sept، 8 huit، 9 neuf، 10 dix، 11 onze، 12 douze، 13 treize، 14 quatorze، 15 quinze، 16 seize، 17 dix-sept، 18 dix-huit، 19 dix-neuf، 20 vingt، 30 trente، 40 quarante، 50 cinquante، 60 soixante. مع الرقم 1 نقول «et un» (vingt et un، trente et un)، وفي غير ذلك نستخدم الشَّرطة (vingt-deux، trente-quatre). وتُقرأ أرقام الهاتف الفرنسية رقمين رقمين: 06 45 12 38 57 = zéro six، quarante-cinq، douze، trente-huit، cinquante-sept."
      ),
      examples: [
        { fr: "J'ai vingt et un ans.", gloss: t("I am 21.", "21 ans.", "عمري 21 عامًا.") },
        { fr: "Il a quarante-six ans.", gloss: t("He is 46.", "46 ans.", "عمره 46 عامًا.") },
        { fr: "Mon numéro, c'est le 07 18 63 50 29.", gloss: t("My number is 07 18 63 50 29.", "Numéro de portable.", "رقمي هو 07 18 63 50 29.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Linking numbers with « ans »", "La liaison avec « ans »", "الوصل بين الأعداد وكلمة «ans»"),
    explanation: t(
      "Before « ans », the last consonant of the number joins the vowel: deux ans [døzɑ̃], trois ans [tʁwazɑ̃], six ans [sizɑ̃], dix ans [dizɑ̃] — the s/x sounds like [z]. Neuf becomes [nœv]: neuf ans [nœvɑ̃]. Huit ans and vingt ans: you hear the [t].",
      "Devant « ans », la consonne finale du nombre se lie à la voyelle : deux ans [døzɑ̃], trois ans [tʁwazɑ̃], six ans [sizɑ̃], dix ans [dizɑ̃] — le s/x se prononce [z]. Neuf devient [nœv] : neuf ans [nœvɑ̃]. Dans huit ans et vingt ans, on entend le [t].",
      "قبل كلمة «ans» يتّصل الحرف الساكن الأخير من العدد بالحرف المتحرك: deux ans [døzɑ̃]، trois ans [tʁwazɑ̃]، six ans [sizɑ̃]، dix ans [dizɑ̃] — وحرفا s وx يُنطقان [z]. وneuf تصبح [nœv]: neuf ans [nœvɑ̃]. وفي huit ans وvingt ans يُسمع حرف [t]."
    ),
    examples: ["deux ans", "trois ans", "six ans", "neuf ans", "dix ans", "vingt ans", "trente et un ans"],
  },
  culture: {
    title: t("La francophonie", "La francophonie", "الفرنكوفونية"),
    body: t(
      "More than 300 million people speak French on five continents. French is an official language in around thirty countries, from Belgium, Switzerland and Canada (Quebec) to Senegal, Côte d'Ivoire and Madagascar. In Morocco, Algeria, Tunisia and Lebanon, French is widely used in education, business and the media. French is also an official language of the UN, the European Union and the International Olympic Committee.",
      "Plus de 300 millions de personnes parlent français sur les cinq continents. Le français est langue officielle dans une trentaine de pays, de la Belgique, de la Suisse et du Canada (Québec) au Sénégal, à la Côte d'Ivoire et à Madagascar. Au Maroc, en Algérie, en Tunisie et au Liban, le français est très présent dans l'enseignement, les affaires et les médias. C'est aussi une langue officielle de l'ONU, de l'Union européenne et du Comité international olympique.",
      "يتحدث الفرنسية أكثر من 300 مليون شخص في القارات الخمس. والفرنسية لغة رسمية في نحو ثلاثين بلدًا، من بلجيكا وسويسرا وكندا (كيبيك) إلى السنغال وساحل العاج ومدغشقر. وفي المغرب والجزائر وتونس ولبنان تحضر الفرنسية بقوة في التعليم والأعمال والإعلام. وهي أيضًا لغة رسمية في الأمم المتحدة والاتحاد الأوروبي واللجنة الأولمبية الدولية."
    ),
  },
  practice: [
    { kind: "fill", id: "u02-p1", prompt: t("Complete with être.", "Complétez avec être.", "أكمل بالفعل être."), sentence: "Vous ___ de quelle nationalité ?", answers: ["êtes"] },
    { kind: "fill", id: "u02-p2", prompt: t("Complete with avoir.", "Complétez avec avoir.", "أكمل بالفعل avoir."), sentence: "J'___ trente-quatre ans.", answers: ["ai"] },
    { kind: "fill", id: "u02-p3", prompt: t("Complete with être.", "Complétez avec être.", "أكمل بالفعل être."), sentence: "Nous ___ étudiants.", answers: ["sommes"] },
    { kind: "fill", id: "u02-p4", prompt: t("Complete with avoir.", "Complétez avec avoir.", "أكمل بالفعل avoir."), sentence: "Ils ___ vingt ans.", answers: ["ont"] },
    {
      kind: "fill",
      id: "u02-p5",
      prompt: t("Write the feminine.", "Écrivez le féminin.", "اكتب صيغة المؤنّث."),
      sentence: "Il est tunisien. Elle est ___.",
      answers: ["tunisienne"],
      explanation: t("-ien → -ienne", "-ien → -ienne", "-ien → -ienne"),
    },
    { kind: "fill", id: "u02-p6", prompt: t("Write the feminine.", "Écrivez le féminin.", "اكتب صيغة المؤنّث."), sentence: "Il est français. Elle est ___.", answers: ["française"] },
    {
      kind: "choice",
      id: "u02-p7",
      prompt: t("How do you say « I am 25 »?", "Comment dit-on « 25 ans » ?", "كيف تقول «عمري 25 عامًا»؟"),
      options: ["Je suis vingt-cinq ans.", "J'ai vingt-cinq ans.", "J'ai vingt et cinq ans."],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u02-p8",
      prompt: t("Which is correct?", "Quelle phrase est correcte ?", "أي جملة صحيحة؟"),
      options: ["Elle est une médecin.", "Elle est médecin.", "Elle a médecin."],
      correctIndex: 1,
    },
    { kind: "fill", id: "u02-p9", prompt: t("Write 31 in letters.", "Écrivez 31 en lettres.", "اكتب العدد 31 بالحروف."), answers: ["trente et un"] },
    { kind: "fill", id: "u02-p10", prompt: t("Write 47 in letters.", "Écrivez 47 en lettres.", "اكتب العدد 47 بالحروف."), answers: ["quarante-sept"] },
    { kind: "order", id: "u02-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je parle arabe et français." },
    { kind: "order", id: "u02-p12", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quel âge avez-vous ?" },
  ],
  production: {
    prompt: t(
      "Fill in your « fiche d'inscription » in full sentences: name, first name, nationality, city, age, profession, languages.",
      "Complétez votre fiche d'inscription en phrases complètes : nom, prénom, nationalité, ville, âge, profession, langues.",
      "املأ «استمارة التسجيل» الخاصة بك بجمل كاملة: اسم العائلة، والاسم الأول، والجنسية، والمدينة، والعمر، والمهنة، واللغات."
    ),
    model: "Je m'appelle Salma Idrissi. Je suis égyptienne et j'habite à Marseille. J'ai vingt-huit ans. Je suis infirmière. Je parle arabe, anglais et un peu français.",
    checklist: [
      t("I use « je suis » for nationality and profession.", "J'utilise « je suis » pour la nationalité et la profession.", "استخدمت «je suis» للجنسية والمهنة."),
      t("I use « j'ai … ans » for my age.", "J'utilise « j'ai … ans » pour mon âge.", "استخدمت «j'ai … ans» لعمري."),
      t("The nationality agrees with me (masculine or feminine).", "La nationalité s'accorde avec moi (masculin ou féminin).", "الجنسية تتوافق معي (مذكّر أو مؤنّث)."),
      t("I say where I live with « j'habite à ».", "Je dis où j'habite avec « j'habite à ».", "ذكرت مكان سكني باستخدام «j'habite à»."),
    ],
  },
  task: {
    title: t("Spell, count, introduce", "Épeler, compter, se présenter", "تهجَّ، وعُدّ، وقدّم نفسك"),
    brief: t(
      "Ask a partner the questions from the dialogue (or answer them aloud yourself, recording on your phone): name, nationality, city, age, job, languages and phone number read in pairs.",
      "Posez les questions du dialogue à un partenaire (ou répondez-y vous-même à voix haute en vous enregistrant) : nom, nationalité, ville, âge, profession, langues et numéro de téléphone lu par deux.",
      "اطرح أسئلة الحوار على شريك (أو أجب عنها بصوت عالٍ مع تسجيل صوتك): الاسم، والجنسية، والمدينة، والعمر، والمهنة، واللغات، ورقم الهاتف مقروءًا رقمين رقمين."
    ),
    checklist: [
      t("I asked at least four questions with « vous ».", "J'ai posé au moins quatre questions avec « vous ».", "طرحت أربعة أسئلة على الأقل باستخدام «vous»."),
      t("I gave my age with avoir.", "J'ai donné mon âge avec avoir.", "ذكرت عمري باستخدام avoir."),
      t("I read a phone number in pairs.", "J'ai lu un numéro de téléphone par deux.", "قرأت رقم هاتف رقمين رقمين."),
    ],
  },
  test: [
    { kind: "choice", id: "u02-t1", prompt: t("Complete: Vous ___ étudiant ?", "Complétez : Vous ___ étudiant ?", "أكمل: Vous ___ étudiant ?"), options: ["es", "êtes", "avez"], correctIndex: 1 },
    { kind: "choice", id: "u02-t2", prompt: t("Complete: Elle ___ dix-neuf ans.", "Complétez : Elle ___ dix-neuf ans.", "أكمل: Elle ___ dix-neuf ans."), options: ["est", "a", "as"], correctIndex: 1 },
    { kind: "choice", id: "u02-t3", prompt: t("Feminine of « espagnol »:", "Féminin de « espagnol » :", "مؤنّث «espagnol»:"), options: ["espagnolle", "espagnole", "espagnol"], correctIndex: 1 },
    { kind: "choice", id: "u02-t4", prompt: t("Feminine of « algérien »:", "Féminin de « algérien » :", "مؤنّث «algérien»:"), options: ["algériene", "algérienne", "algérien"], correctIndex: 1 },
    { kind: "choice", id: "u02-t5", prompt: t("« Soixante-deux » is:", "« Soixante-deux », c'est :", "«Soixante-deux» هو:"), options: ["52", "62", "72"], correctIndex: 1 },
    { kind: "choice", id: "u02-t6", prompt: t("How do you write 21?", "Comment écrit-on 21 ?", "كيف يُكتب 21؟"), options: ["vingt-un", "vingt et un", "vingt-et-une"], correctIndex: 1 },
    { kind: "choice", id: "u02-t7", prompt: t("Which question asks for age?", "Quelle question demande l'âge ?", "أي سؤال يسأل عن العمر؟"), options: ["Quel âge avez-vous ?", "Vous habitez où ?", "Quelle est votre profession ?"], correctIndex: 0 },
    { kind: "choice", id: "u02-t8", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["Je suis un professeur.", "Je suis professeur.", "J'ai professeur."], correctIndex: 1 },
    {
      kind: "choice",
      id: "u02-t9",
      prompt: t("In « six ans », the « x » sounds like:", "Dans « six ans », le « x » se prononce :", "في «six ans» يُنطق حرف «x» مثل:"),
      options: ["[s]", "[z]", "—"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u02-t10",
      prompt: t("French is an official language in:", "Le français est langue officielle :", "الفرنسية لغة رسمية:"),
      optionsL10n: {
        en: ["only France", "about thirty countries", "two countries"],
        fr: ["seulement en France", "dans une trentaine de pays", "dans deux pays"],
        ar: ["في فرنسا فقط", "في نحو ثلاثين بلدًا", "في بلدين"],
      },
      correctIndex: 1,
    },
  ],
  passRatio: 0.7,
};
