import { l10n as t, type CourseUnit } from "../types";

export const A1_U03: CourseUnit = {
  id: "fr-a1-u03-famille",
  level: "A1",
  order: 3,
  title: t("My family", "Ma famille", "عائلتي"),
  theme: t(
    "Talking about your family and describing people",
    "Parler de sa famille et décrire une personne",
    "الحديث عن العائلة ووصف الأشخاص"
  ),
  canDo: [
    t("I can present the members of my family.", "Je peux présenter les membres de ma famille.", "أستطيع أن أعرّف بأفراد عائلتي."),
    t("I can describe someone simply (age, appearance, character).", "Je peux décrire simplement une personne (âge, physique, caractère).", "أستطيع أن أصف شخصًا ببساطة (العمر، والمظهر، والطباع)."),
    t("I can ask someone about their family.", "Je peux interroger quelqu'un sur sa famille.", "أستطيع أن أسأل شخصًا عن عائلته."),
    t("I can say what I don't have (« je n'ai pas de… »).", "Je peux dire ce que je n'ai pas (« je n'ai pas de… »).", "أستطيع أن أقول ما ليس لديّ («je n'ai pas de…»)."),
  ],
  context: t(
    "During a coffee break at work, Lina shows a family photo on her phone to her colleague Hugo.",
    "Pendant une pause au travail, Lina montre une photo de famille sur son téléphone à son collègue Hugo.",
    "خلال استراحة في العمل، تُري لينا زميلها هوغو صورة عائلية على هاتفها."
  ),
  dialogue: {
    title: t("The family photo", "La photo de famille", "صورة العائلة"),
    setting: t("At the office, during the break", "Au bureau, à la pause", "في المكتب، أثناء الاستراحة"),
    lines: [
      { speaker: "Hugo", fr: "C'est qui, sur la photo ?" },
      { speaker: "Lina", fr: "C'est ma famille. Là, ce sont mes parents." },
      { speaker: "Hugo", fr: "Ton père a l'air sympa ! Il s'appelle comment ?" },
      { speaker: "Lina", fr: "Il s'appelle Samir. Il a cinquante-huit ans. Ma mère, c'est Nadia. Elle est professeure." },
      { speaker: "Hugo", fr: "Et le garçon, c'est ton frère ?" },
      { speaker: "Lina", fr: "Oui, c'est mon frère Yanis. Il est grand et brun. Il a dix-neuf ans." },
      { speaker: "Hugo", fr: "Tu as aussi une sœur ?" },
      { speaker: "Lina", fr: "Oui, j'ai une sœur, Inès. Elle est mariée et elle a deux enfants." },
      { speaker: "Hugo", fr: "Alors, tu es tante !" },
      { speaker: "Lina", fr: "Oui ! Mon neveu s'appelle Adam et ma nièce s'appelle Sofia. Et toi, tu as des frères et sœurs ?" },
      { speaker: "Hugo", fr: "Non, je n'ai pas de frère et je n'ai pas de sœur. Je suis fils unique." },
      { speaker: "Lina", fr: "Et tes parents habitent où ?" },
      { speaker: "Hugo", fr: "À Bordeaux, avec notre chien, Max !" },
    ],
  },
  comprehension: [
    {
      kind: "choice",
      id: "u03-c1",
      prompt: t("What is Lina's mother's job?", "Quelle est la profession de la mère de Lina ?", "ما مهنة والدة لينا؟"),
      optionsL10n: { en: ["Doctor", "Teacher", "Engineer"], fr: ["Médecin", "Professeure", "Ingénieure"], ar: ["طبيبة", "معلّمة", "مهندسة"] },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u03-c2",
      prompt: t("How old is Yanis?", "Quel âge a Yanis ?", "كم عمر يانيس؟"),
      options: ["9 ans", "19 ans", "58 ans"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u03-c3",
      prompt: t("Who are Adam and Sofia?", "Qui sont Adam et Sofia ?", "من هما آدم وصوفيا؟"),
      optionsL10n: {
        en: ["Lina's children", "Inès's children", "Hugo's parents"],
        fr: ["Les enfants de Lina", "Les enfants d'Inès", "Les parents de Hugo"],
        ar: ["أطفال لينا", "أطفال إيناس", "والدا هوغو"],
      },
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u03-c4",
      prompt: t("« Je suis fils unique » means Hugo…", "« Je suis fils unique » : Hugo…", "«Je suis fils unique» تعني أن هوغو…"),
      optionsL10n: {
        en: ["has no brothers or sisters", "has one son", "is married"],
        fr: ["n'a pas de frères et sœurs", "a un fils", "est marié"],
        ar: ["ليس له إخوة ولا أخوات", "لديه ابن واحد", "متزوّج"],
      },
      correctIndex: 0,
    },
  ],
  vocabulary: [
    {
      title: t("The family", "La famille", "العائلة"),
      items: [
        { fr: "les parents", gender: "pl", meaning: t("parents", "le père et la mère", "الوالدان"), example: "Mes parents habitent à Lyon." },
        { fr: "le père", gender: "m", meaning: t("father", "parent masculin", "الأب"), example: "Mon père s'appelle Samir." },
        { fr: "la mère", gender: "f", meaning: t("mother", "parent féminin", "الأم"), example: "Ma mère est professeure." },
        { fr: "le frère", gender: "m", meaning: t("brother", "fils des mêmes parents", "الأخ"), example: "J'ai un frère." },
        { fr: "la sœur", gender: "f", meaning: t("sister", "fille des mêmes parents", "الأخت"), example: "Ma sœur est mariée." },
        { fr: "le fils", gender: "m", meaning: t("son", "enfant garçon", "الابن"), example: "Leur fils a six ans." },
        { fr: "la fille", gender: "f", meaning: t("daughter / girl", "enfant fille", "البنت / الابنة"), example: "Elle a une fille." },
        { fr: "les grands-parents", gender: "pl", meaning: t("grandparents", "parents des parents", "الأجداد"), example: "Mes grands-parents sont à Tunis." },
        { fr: "l'oncle / la tante", meaning: t("uncle / aunt", "frère ou sœur d'un parent", "العم أو الخال / العمة أو الخالة") },
        { fr: "le neveu / la nièce", meaning: t("nephew / niece", "enfant d'un frère ou d'une sœur", "ابن الأخ أو الأخت / بنت الأخ أو الأخت") },
        { fr: "le mari / la femme", meaning: t("husband / wife", "époux / épouse", "الزوج / الزوجة") },
      ],
    },
    {
      title: t("Describing someone", "Décrire une personne", "وصف شخص"),
      items: [
        { fr: "grand / grande", meaning: t("tall", "de grande taille", "طويل / طويلة") },
        { fr: "petit / petite", meaning: t("short, small", "de petite taille", "قصير / قصيرة") },
        { fr: "brun / brune", meaning: t("dark-haired", "aux cheveux foncés", "داكن الشعر") },
        { fr: "blond / blonde", meaning: t("blond", "aux cheveux clairs", "أشقر / شقراء") },
        { fr: "jeune", meaning: t("young", "qui n'est pas âgé", "شاب / شابة") },
        { fr: "sympa", meaning: t("nice, friendly", "agréable, gentil", "لطيف / لطيفة") },
        { fr: "marié / mariée", meaning: t("married", "qui a un mari ou une femme", "متزوّج / متزوّجة") },
        { fr: "célibataire", meaning: t("single", "qui n'est pas marié", "أعزب / عزباء") },
      ],
    },
  ],
  grammar: [
    {
      id: "u03-g1",
      title: t("Possessive adjectives", "Les adjectifs possessifs", "صفات الملكية"),
      explanation: t(
        "The possessive agrees with the thing or person owned, not with the owner: « mon père », « ma mère », « mes parents ». Before a feminine word starting with a vowel, use « mon », « ton », « son » for easier pronunciation: « mon amie », « son école ».",
        "Le possessif s'accorde avec ce qu'on possède, pas avec le possesseur : « mon père », « ma mère », « mes parents ». Devant un mot féminin qui commence par une voyelle, on utilise « mon », « ton », « son » : « mon amie », « son école ».",
        "تتوافق صفة الملكية مع الشيء أو الشخص المملوك، لا مع المالك: «mon père»، «ma mère»، «mes parents». وقبل كلمة مؤنّثة تبدأ بحرف متحرّك نستخدم «mon» و«ton» و«son» لتسهيل النطق: «mon amie»، «son école»."
      ),
      table: {
        head: ["", "masculin", "féminin", "pluriel"],
        rows: [
          ["je", "mon", "ma", "mes"],
          ["tu", "ton", "ta", "tes"],
          ["il / elle", "son", "sa", "ses"],
          ["nous", "notre", "notre", "nos"],
          ["vous", "votre", "votre", "vos"],
          ["ils / elles", "leur", "leur", "leurs"],
        ],
      },
      examples: [
        { fr: "Ma sœur et mon frère habitent à Paris.", gloss: t("My sister and my brother live in Paris.", "ma + féminin, mon + masculin.", "أختي وأخي يسكنان في باريس.") },
        { fr: "Karim et son père.", gloss: t("Karim and his father.", "son = de lui.", "كريم ووالده.") },
        { fr: "Lina et son père.", gloss: t("Lina and her father.", "son = d'elle aussi !", "لينا ووالدها.") },
      ],
      watchOut: t(
        "« Son père » can mean his father or her father: French agrees with « père » (masculine), not with the owner.",
        "« Son père » peut être le père de Karim ou de Lina : on accorde avec « père », pas avec le possesseur.",
        "«son père» قد تعني «أبوه» أو «أبوها»: فالفرنسية تطابق كلمة «père» المذكّرة، لا المالك."
      ),
    },
    {
      id: "u03-g2",
      title: t("Articles: un / une / des and le / la / les", "Les articles : un / une / des et le / la / les", "أدوات التعريف والتنكير: un / une / des وle / la / les"),
      explanation: t(
        "Every French noun is masculine or feminine. Indefinite articles (un, une, des) introduce something new or not specific: « J'ai un frère ». Definite articles (le, la, les) refer to something known or specific: « Le frère de Lina s'appelle Yanis ». Le and la become l' before a vowel or a silent h: l'oncle, l'histoire.",
        "Chaque nom est masculin ou féminin. Les articles indéfinis (un, une, des) présentent quelque chose de nouveau ou de non précis : « J'ai un frère ». Les articles définis (le, la, les) désignent quelque chose de connu ou de précis : « Le frère de Lina s'appelle Yanis ». Le et la deviennent l' devant une voyelle ou un h muet : l'oncle, l'histoire.",
        "كل اسم فرنسي إمّا مذكّر أو مؤنّث. أدوات التنكير (un وune وdes) تقدّم شيئًا جديدًا أو غير محدّد: «J'ai un frère». وأدوات التعريف (le وla وles) تشير إلى شيء معروف أو محدّد: «Le frère de Lina s'appelle Yanis». وتصبح le وla على شكل l' قبل حرف متحرّك أو h صامتة: l'oncle، l'histoire."
      ),
      table: {
        head: ["", "masculin", "féminin", "pluriel"],
        rows: [
          ["indéfini", "un frère", "une sœur", "des enfants"],
          ["défini", "le frère", "la sœur", "les enfants"],
        ],
      },
      examples: [
        { fr: "Elle a une fille et un fils.", gloss: t("She has a daughter and a son.", "Nouveaux éléments.", "لديها بنت وابن.") },
        { fr: "La fille s'appelle Sofia.", gloss: t("The daughter is called Sofia.", "Élément connu.", "البنت اسمها صوفيا.") },
      ],
    },
    {
      id: "u03-g3",
      title: t("Negation: ne… pas, and pas de", "La négation : ne… pas, et pas de", "النفي: ne… pas وpas de"),
      explanation: t(
        "To make a sentence negative, put « ne » before the verb and « pas » after it: « Je ne suis pas marié ». Ne becomes n' before a vowel: « Je n'habite pas à Paris ». After a negative verb, un / une / des become « de » (d' before a vowel): « J'ai un frère » → « Je n'ai pas de frère » ; « Il a des enfants » → « Il n'a pas d'enfants ».",
        "Pour la négation, on place « ne » avant le verbe et « pas » après : « Je ne suis pas marié ». Ne devient n' devant une voyelle : « Je n'habite pas à Paris ». Après une négation, un / une / des deviennent « de » (d' devant une voyelle) : « J'ai un frère » → « Je n'ai pas de frère » ; « Il a des enfants » → « Il n'a pas d'enfants ».",
        "للنفي نضع «ne» قبل الفعل و«pas» بعده: «Je ne suis pas marié». وتصبح ne على شكل n' قبل حرف متحرّك: «Je n'habite pas à Paris». وبعد النفي تتحوّل un وune وdes إلى «de» (أو d' قبل حرف متحرّك): «J'ai un frère» ← «Je n'ai pas de frère»، و«Il a des enfants» ← «Il n'a pas d'enfants»."
      ),
      examples: [
        { fr: "Je ne parle pas allemand.", gloss: t("I don't speak German.", "Négation simple.", "لا أتحدث الألمانية.") },
        { fr: "Nous n'avons pas de voiture.", gloss: t("We don't have a car.", "une → de.", "ليست لدينا سيارة.") },
      ],
      watchOut: t(
        "With être, the article does not change: « C'est un frère » → « Ce n'est pas un frère ».",
        "Avec être, l'article ne change pas : « C'est un frère » → « Ce n'est pas un frère ».",
        "مع الفعل être لا تتغيّر الأداة: «C'est un frère» ← «Ce n'est pas un frère»."
      ),
    },
  ],
  pronunciation: {
    title: t("The sounds [ɛ] in « mère » and [e] in « marié »", "Les sons [ɛ] (mère) et [e] (marié)", "الصوتان [ɛ] في «mère» و[e] في «marié»"),
    explanation: t(
      "[ɛ] is open, mouth a little wider: mère, père, frère, sœur… (è, ê, ai). [e] is closed, lips more stretched: marié, enchanté, les, mes, ses (é, -er, -ez). Contrast « mes » [me] and « mère » [mɛʁ].",
      "[ɛ] est ouvert, la bouche un peu plus ouverte : mère, père, frère (è, ê, ai). [e] est fermé, les lèvres plus tirées : marié, enchanté, les, mes, ses (é, -er, -ez). Comparez « mes » [me] et « mère » [mɛʁ].",
      "[ɛ] صوت مفتوح، والفم أكثر انفتاحًا قليلًا: mère، père، frère (è وê وai). أما [e] فصوت مغلق، والشفتان مشدودتان أكثر: marié، enchanté، les، mes، ses (é و-er و-ez). قارن بين «mes» [me] و«mère» [mɛʁ]."
    ),
    examples: ["mère — mes", "père — parlez", "frère — marié", "Ma mère est mariée.", "Mes frères sont célibataires."],
  },
  culture: {
    title: t("Family life in France", "La famille en France", "الحياة العائلية في فرنسا"),
    body: t(
      "Families in France are diverse: married couples, couples in a PACS (a civil partnership) or living together without being married, single-parent and blended families (« familles recomposées »). On average a woman has fewer than two children. Sunday lunch with the family remains a strong tradition, and grandparents often help with childcare during school holidays.",
      "Les familles françaises sont variées : couples mariés, couples pacsés (le PACS est une union civile) ou en union libre, familles monoparentales et familles recomposées. En moyenne, une femme a moins de deux enfants. Le déjeuner du dimanche en famille reste une tradition forte, et les grands-parents gardent souvent les petits-enfants pendant les vacances scolaires.",
      "العائلات في فرنسا متنوّعة: أزواج متزوّجون، أو مرتبطون بعقد PACS (شراكة مدنية)، أو يعيشون معًا دون زواج، إضافةً إلى الأسر ذات العائل الواحد والأسر «المعاد تكوينها». وفي المتوسط تنجب المرأة أقل من طفلين. ويبقى غداء يوم الأحد مع العائلة تقليدًا راسخًا، وكثيرًا ما يعتني الأجداد بالأحفاد خلال العطل المدرسية."
    ),
  },
  practice: [
    { kind: "fill", id: "u03-p1", prompt: t("Complete with a possessive (my).", "Complétez avec un possessif (je).", "أكمل بصفة ملكية (لي)."), sentence: "___ mère s'appelle Nadia.", answers: ["ma"] },
    { kind: "fill", id: "u03-p2", prompt: t("Complete with a possessive (my).", "Complétez avec un possessif (je).", "أكمل بصفة ملكية (لي)."), sentence: "___ parents habitent à Lyon.", answers: ["mes"] },
    {
      kind: "fill",
      id: "u03-p3",
      prompt: t("Complete with a possessive (your, informal).", "Complétez avec un possessif (tu).", "أكمل بصفة ملكية (لك، غير رسمي)."),
      sentence: "C'est ___ amie Julie ?",
      answers: ["ton"],
      explanation: t("Feminine word starting with a vowel → ton.", "Mot féminin devant voyelle → ton.", "كلمة مؤنّثة تبدأ بحرف متحرّك ← ton."),
    },
    { kind: "fill", id: "u03-p4", prompt: t("Complete with a possessive (our).", "Complétez avec un possessif (nous).", "أكمل بصفة ملكية (لنا)."), sentence: "___ enfants ont six et neuf ans.", answers: ["nos"] },
    { kind: "fill", id: "u03-p5", prompt: t("Make it negative.", "Mettez à la forme négative.", "حوّل إلى النفي."), sentence: "J'ai un frère. → Je n'ai pas ___ frère.", answers: ["de"] },
    { kind: "fill", id: "u03-p6", prompt: t("Make it negative.", "Mettez à la forme négative.", "حوّل إلى النفي."), sentence: "Il est marié. → Il ___ marié.", answers: ["n'est pas"] },
    { kind: "choice", id: "u03-p7", prompt: t("Choose the article.", "Choisissez l'article.", "اختر الأداة."), options: ["un oncle", "une oncle", "des oncle"], correctIndex: 0 },
    { kind: "choice", id: "u03-p8", prompt: t("Lina speaks about her brother: « ___ frère est grand. »", "Lina parle de son frère : « ___ frère est grand. »", "تتحدث لينا عن أخيها: «___ frère est grand.»"), options: ["Ma", "Mon", "Mes"], correctIndex: 1 },
    { kind: "choice", id: "u03-p9", prompt: t("Feminine of « brun »:", "Féminin de « brun » :", "مؤنّث «brun»:"), options: ["brunne", "brune", "brun"], correctIndex: 1 },
    { kind: "order", id: "u03-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je n'ai pas d'enfants." },
    { kind: "order", id: "u03-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Tu as des frères et sœurs ?" },
  ],
  production: {
    prompt: t(
      "Describe a photo of your family (real or imagined) in 5–6 sentences: who is who, their age, job, a short description.",
      "Décrivez une photo de votre famille (réelle ou imaginaire) en 5 ou 6 phrases : qui est qui, l'âge, la profession, une courte description.",
      "صِف صورة لعائلتك (حقيقية أو متخيّلة) في 5 أو 6 جمل: من هو كل شخص، وعمره، ومهنته، مع وصف قصير."
    ),
    model: "Sur la photo, ce sont mes parents et mes deux frères. Mon père s'appelle Ali, il a soixante ans. Ma mère est infirmière. Mon grand frère est grand et brun, il est marié. Mon petit frère a quinze ans. Je n'ai pas de sœur.",
    checklist: [
      t("I use mon / ma / mes correctly.", "J'utilise correctement mon / ma / mes.", "استخدمت mon / ma / mes بشكل صحيح."),
      t("I give ages with avoir.", "Je donne l'âge avec avoir.", "ذكرت الأعمار باستخدام avoir."),
      t("Adjectives agree (grand / grande).", "Les adjectifs s'accordent (grand / grande).", "الصفات متوافقة (grand / grande)."),
      t("I use at least one negative sentence.", "J'utilise au moins une phrase négative.", "استخدمت جملة منفية واحدة على الأقل."),
    ],
  },
  task: {
    title: t("Family tree", "L'arbre généalogique", "شجرة العائلة"),
    brief: t(
      "Draw a simple family tree, then present it aloud in French in about one minute, as if to a new friend. Then ask a partner three questions about their family.",
      "Dessinez un arbre généalogique simple, puis présentez-le à voix haute en français pendant environ une minute, comme à un nouvel ami. Posez ensuite trois questions à un partenaire sur sa famille.",
      "ارسم شجرة عائلة بسيطة، ثم قدّمها بصوت عالٍ بالفرنسية في نحو دقيقة واحدة كأنك تتحدث إلى صديق جديد. ثم اطرح على شريك ثلاثة أسئلة عن عائلته."
    ),
    checklist: [
      t("I presented at least five family members.", "J'ai présenté au moins cinq membres de la famille.", "قدّمت خمسة أفراد من العائلة على الأقل."),
      t("I described two people (appearance or character).", "J'ai décrit deux personnes (physique ou caractère).", "وصفت شخصين (المظهر أو الطباع)."),
      t("I asked three questions, e.g. « Tu as des frères et sœurs ? »", "J'ai posé trois questions, par exemple « Tu as des frères et sœurs ? »", "طرحت ثلاثة أسئلة، مثل «Tu as des frères et sœurs ?»"),
    ],
  },
  test: [
    { kind: "choice", id: "u03-t1", prompt: t("« ___ sœur est médecin. » (my)", "« ___ sœur est médecin. » (je)", "«___ sœur est médecin.» (لي)"), options: ["Mon", "Ma", "Mes"], correctIndex: 1 },
    { kind: "choice", id: "u03-t2", prompt: t("« ___ école est grande. » (her)", "« ___ école est grande. » (elle)", "«___ école est grande.» (لها)"), options: ["Sa", "Son", "Ses"], correctIndex: 1 },
    { kind: "choice", id: "u03-t3", prompt: t("« Vous avez ___ enfants ? »", "« Vous avez ___ enfants ? »", "«Vous avez ___ enfants ?»"), options: ["un", "des", "la"], correctIndex: 1 },
    { kind: "choice", id: "u03-t4", prompt: t("Negative of « J'ai une voiture »:", "Négation de « J'ai une voiture » :", "نفي «J'ai une voiture»:"), options: ["Je n'ai pas une voiture.", "Je n'ai pas de voiture.", "Je ai pas voiture."], correctIndex: 1 },
    { kind: "choice", id: "u03-t5", prompt: t("Negative of « Elle habite à Lyon »:", "Négation de « Elle habite à Lyon » :", "نفي «Elle habite à Lyon»:"), options: ["Elle n'habite pas à Lyon.", "Elle ne habite pas à Lyon.", "Elle habite pas ne à Lyon."], correctIndex: 0 },
    {
      kind: "choice",
      id: "u03-t6",
      prompt: t("The son of my sister is my…", "Le fils de ma sœur est mon…", "ابن أختي هو…"),
      options: ["oncle", "neveu", "cousin"],
      correctIndex: 1,
    },
    { kind: "choice", id: "u03-t7", prompt: t("Feminine of « grand »:", "Féminin de « grand » :", "مؤنّث «grand»:"), options: ["grand", "grande", "grane"], correctIndex: 1 },
    { kind: "choice", id: "u03-t8", prompt: t("« Leur » is used for…", "On utilise « leur » pour…", "نستخدم «leur» لـ…"), optionsL10n: { en: ["ils / elles", "nous", "tu"], fr: ["ils / elles", "nous", "tu"], ar: ["ils / elles (هم / هنّ)", "nous (نحن)", "tu (أنت)"] }, correctIndex: 0 },
    {
      kind: "choice",
      id: "u03-t9",
      prompt: t("Which word has the open sound [ɛ]?", "Quel mot contient le son ouvert [ɛ] ?", "أي كلمة فيها الصوت المفتوح [ɛ]؟"),
      options: ["mes", "mère", "marié"],
      correctIndex: 1,
    },
    {
      kind: "choice",
      id: "u03-t10",
      prompt: t("« Une famille recomposée » is…", "« Une famille recomposée », c'est…", "«une famille recomposée» هي…"),
      optionsL10n: {
        en: ["a blended family (new partner, children from previous unions)", "a very large family", "a family without children"],
        fr: ["une famille avec un nouveau couple et des enfants d'unions précédentes", "une très grande famille", "une famille sans enfants"],
        ar: ["أسرة بشريك جديد وأطفال من علاقات سابقة", "عائلة كبيرة جدًا", "عائلة بلا أطفال"],
      },
      correctIndex: 0,
    },
  ],
  passRatio: 0.7,
  replaces: ["fr-a1-deep-family"],
};
