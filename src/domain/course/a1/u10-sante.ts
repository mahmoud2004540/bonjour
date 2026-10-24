import { l10n as t, type CourseUnit } from "../types";

export const A1_U10: CourseUnit = {
  id: "fr-a1-u10-sante",
  level: "A1",
  order: 10,
  title: t("Health", "La santé", "الصحة"),
  theme: t(
    "The body, symptoms, at the doctor's and the pharmacy",
    "Le corps, les symptômes, chez le médecin et à la pharmacie",
    "الجسم، والأعراض، عند الطبيب وفي الصيدلية"
  ),
  canDo: [
    t("I can say where it hurts and describe simple symptoms.", "Je peux dire où j'ai mal et décrire des symptômes simples.", "أستطيع أن أقول أين أشعر بالألم وأصف أعراضًا بسيطة."),
    t("I can understand a doctor's simple instructions.", "Je peux comprendre les consignes simples d'un médecin.", "أستطيع أن أفهم تعليمات الطبيب البسيطة."),
    t("I can ask for a medicine at the pharmacy.", "Je peux demander un médicament à la pharmacie.", "أستطيع أن أطلب دواءً في الصيدلية."),
    t("I can give simple advice (il faut…, tu dois…).", "Je peux donner des conseils simples (il faut…, tu dois…).", "أستطيع أن أقدّم نصائح بسيطة (il faut…، tu dois…)."),
  ],
  context: t(
    "Hana has been ill for two days. She goes to see her general practitioner, Dr Morel, in Strasbourg.",
    "Hana est malade depuis deux jours. Elle va chez son médecin généraliste, le docteur Morel, à Strasbourg.",
    "هناء مريضة منذ يومين. فتذهب إلى طبيبها العام، الدكتور موريل، في مدينة ستراسبورغ."
  ),
  dialogue: {
    title: t("At the doctor's", "Chez le médecin", "عند الطبيب"),
    setting: t("A GP's surgery", "Le cabinet d'un médecin généraliste", "عيادة طبيب عام"),
    lines: [
      { speaker: "Dr Morel", fr: "Bonjour, madame. Asseyez-vous. Qu'est-ce qui ne va pas ?" },
      { speaker: "Hana", fr: "Bonjour, docteur. Je suis malade depuis deux jours. J'ai mal à la tête et à la gorge." },
      { speaker: "Dr Morel", fr: "Vous avez de la fièvre ?" },
      { speaker: "Hana", fr: "Oui, un peu : trente-huit cinq ce matin." },
      { speaker: "Dr Morel", fr: "Vous toussez ?" },
      { speaker: "Hana", fr: "Oui, je tousse beaucoup, surtout la nuit. Et je suis très fatiguée." },
      { speaker: "Dr Morel", fr: "Bon, je vais vous examiner. Ouvrez la bouche… Respirez fort… Merci." },
      { speaker: "Dr Morel", fr: "Ce n'est pas grave, c'est un gros rhume. Il faut vous reposer et boire beaucoup d'eau." },
      { speaker: "Dr Morel", fr: "Prenez du paracétamol trois fois par jour, pendant cinq jours maximum." },
      { speaker: "Hana", fr: "Je peux aller travailler ?" },
      { speaker: "Dr Morel", fr: "Non, vous devez rester à la maison deux jours. Je vous fais un arrêt de travail." },
      { speaker: "Hana", fr: "Merci, docteur. Je vous dois combien ?" },
      { speaker: "Dr Morel", fr: "Trente euros. Vous avez votre carte Vitale ?" },
      { speaker: "Hana", fr: "Oui, la voilà." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "u10-c1", prompt: t("Since when has Hana been ill?", "Depuis quand Hana est-elle malade ?", "منذ متى وهناء مريضة؟"), optionsL10n: { en: ["Since this morning", "For two days", "For a week"], fr: ["Depuis ce matin", "Depuis deux jours", "Depuis une semaine"], ar: ["منذ هذا الصباح", "منذ يومين", "منذ أسبوع"] }, correctIndex: 1 },
    { kind: "choice", id: "u10-c2", prompt: t("Where does it hurt?", "Où a-t-elle mal ?", "أين تشعر بالألم؟"), optionsL10n: { en: ["Head and throat", "Stomach and back", "Ears and eyes"], fr: ["À la tête et à la gorge", "Au ventre et au dos", "Aux oreilles et aux yeux"], ar: ["الرأس والحلق", "البطن والظهر", "الأذنان والعينان"] }, correctIndex: 0 },
    { kind: "choice", id: "u10-c3", prompt: t("What does the doctor say?", "Que dit le médecin ?", "ماذا يقول الطبيب؟"), optionsL10n: { en: ["It's serious: go to hospital.", "It's a bad cold: rest and drink water.", "She can go to work."], fr: ["C'est grave : allez à l'hôpital.", "C'est un gros rhume : reposez-vous et buvez de l'eau.", "Elle peut aller travailler."], ar: ["الأمر خطير: اذهبي إلى المستشفى.", "زكام شديد: استريحي واشربي الماء.", "يمكنها الذهاب إلى العمل."] }, correctIndex: 1 },
    { kind: "choice", id: "u10-c4", prompt: t("How much is the consultation?", "Combien coûte la consultation ?", "كم ثمن الاستشارة؟"), options: ["20 €", "30 €", "38,50 €"], correctIndex: 1 },
  ],
  vocabulary: [
    {
      title: t("The body", "Le corps", "الجسم"),
      items: [
        { fr: "la tête", gender: "f", meaning: t("head", "partie haute du corps", "الرأس") },
        { fr: "la gorge", gender: "f", meaning: t("throat", "intérieur du cou", "الحلق") },
        { fr: "le dos", gender: "m", meaning: t("back", "arrière du corps", "الظهر") },
        { fr: "le ventre", gender: "m", meaning: t("stomach, belly", "milieu du corps", "البطن") },
        { fr: "le bras / la main", meaning: t("arm / hand", "membres supérieurs", "الذراع / اليد") },
        { fr: "la jambe / le pied", meaning: t("leg / foot", "membres inférieurs", "الساق / القدم") },
        { fr: "les yeux (un œil)", gender: "pl", meaning: t("eyes (an eye)", "pour voir", "العينان (عين)") },
        { fr: "les oreilles", gender: "pl", meaning: t("ears", "pour entendre", "الأذنان") },
        { fr: "les dents", gender: "pl", meaning: t("teeth", "dans la bouche", "الأسنان") },
      ],
    },
    {
      title: t("Symptoms and care", "Symptômes et soins", "الأعراض والعلاج"),
      items: [
        { fr: "être malade", meaning: t("to be ill", "ne pas être en bonne santé", "يكون مريضًا") },
        { fr: "avoir de la fièvre", meaning: t("to have a temperature", "avoir une température élevée", "يعاني من الحمّى") },
        { fr: "tousser", meaning: t("to cough", "faire sortir l'air par la gorge", "يسعل") },
        { fr: "avoir un rhume", meaning: t("to have a cold", "nez qui coule, gorge irritée", "يصاب بالزكام") },
        { fr: "fatigué / fatiguée", meaning: t("tired", "sans énergie", "متعب / متعبة") },
        { fr: "le médicament", gender: "m", meaning: t("medicine", "produit pour soigner", "الدواء") },
        { fr: "l'ordonnance", gender: "f", meaning: t("prescription", "papier du médecin pour les médicaments", "الوصفة الطبية") },
        { fr: "prendre rendez-vous", meaning: t("to make an appointment", "fixer une heure de consultation", "يحجز موعدًا") },
        { fr: "les urgences", gender: "pl", meaning: t("A&E, emergency department", "service de l'hôpital pour les cas graves", "قسم الطوارئ") },
      ],
    },
  ],
  grammar: [
    {
      id: "u10-g1",
      title: t("Avoir mal à…", "Avoir mal à…", "التعبير عن الألم: avoir mal à…"),
      explanation: t(
        "To say where it hurts: « avoir mal + à + article + body part ». Remember the contractions: à + le = au, à + les = aux. « J'ai mal au dos », « J'ai mal à la tête », « J'ai mal à l'oreille », « J'ai mal aux dents ».",
        "Pour dire où on a mal : « avoir mal + à + article + partie du corps ». N'oubliez pas les contractions : à + le = au, à + les = aux. « J'ai mal au dos », « J'ai mal à la tête », « J'ai mal à l'oreille », « J'ai mal aux dents ».",
        "لقول مكان الألم نستخدم: «avoir mal + à + الأداة + عضو الجسم». وتذكّر الاندماج: à + le = au وà + les = aux. «J'ai mal au dos» (ظهري يؤلمني)، «J'ai mal à la tête»، «J'ai mal à l'oreille»، «J'ai mal aux dents»."
      ),
      table: {
        head: ["", ""],
        rows: [
          ["le ventre", "j'ai mal au ventre"],
          ["la gorge", "j'ai mal à la gorge"],
          ["l'œil", "j'ai mal à l'œil"],
          ["les pieds", "j'ai mal aux pieds"],
        ],
      },
      examples: [
        { fr: "Mon fils a mal aux oreilles.", gloss: t("My son has earache.", "à + les = aux.", "ابني يشعر بألم في أذنيه.") },
        { fr: "Tu as mal où ?", gloss: t("Where does it hurt?", "Question à l'oral.", "أين تشعر بالألم؟") },
      ],
      watchOut: t(
        "French uses the article, not the possessive: « J'ai mal à la tête », not « à ma tête ».",
        "On utilise l'article, pas le possessif : « J'ai mal à la tête », pas « à ma tête ».",
        "تستخدم الفرنسية أداة التعريف لا صفة الملكية: «J'ai mal à la tête» وليس «à ma tête»."
      ),
    },
    {
      id: "u10-g2",
      title: t("Giving advice: il faut, devoir, the imperative", "Conseiller : il faut, devoir, l'impératif", "تقديم النصائح: il faut وdevoir وصيغة الأمر"),
      explanation: t(
        "« Il faut + infinitive » is a general obligation and never changes: « Il faut boire de l'eau ». « Devoir + infinitive » is personal: « Vous devez rester à la maison ». The imperative gives direct advice: « Reposez-vous », « Prenez ce médicament ». The negative of il faut: « Il ne faut pas sortir ».",
        "« Il faut + infinitif » exprime une obligation générale et ne change pas : « Il faut boire de l'eau ». « Devoir + infinitif » est personnel : « Vous devez rester à la maison ». L'impératif donne un conseil direct : « Reposez-vous », « Prenez ce médicament ». Négation : « Il ne faut pas sortir ».",
        "تعبّر «Il faut + مصدر» عن ضرورة عامة ولا تتغيّر: «Il faut boire de l'eau» (يجب شرب الماء). أما «devoir + مصدر» فتخصّ شخصًا بعينه: «Vous devez rester à la maison». وصيغة الأمر تعطي نصيحة مباشرة: «Reposez-vous» و«Prenez ce médicament». والنفي: «Il ne faut pas sortir» (لا ينبغي الخروج)."
      ),
      table: {
        head: ["", "devoir"],
        rows: [
          ["je", "je dois"],
          ["tu", "tu dois"],
          ["il / elle / on", "il doit"],
          ["nous", "nous devons"],
          ["vous", "vous devez"],
          ["ils / elles", "ils doivent"],
        ],
      },
      examples: [
        { fr: "Il faut dormir huit heures.", gloss: t("You need to sleep eight hours.", "Conseil général.", "يجب النوم ثماني ساعات.") },
        { fr: "Tu dois prendre rendez-vous chez le dentiste.", gloss: t("You must book an appointment with the dentist.", "Conseil personnel.", "عليك أن تحجز موعدًا عند طبيب الأسنان.") },
        { fr: "Ne prenez pas d'antibiotiques sans ordonnance.", gloss: t("Don't take antibiotics without a prescription.", "Impératif négatif.", "لا تتناول مضادات حيوية من دون وصفة طبية.") },
      ],
    },
    {
      id: "u10-g3",
      title: t("Depuis, pendant and frequency", "Depuis, pendant et la fréquence", "depuis وpendant والتكرار"),
      explanation: t(
        "« Depuis » + duration, with the present tense, means something started in the past and is still true: « Je suis malade depuis deux jours » (I have been ill for two days). « Pendant » gives a limited duration: « pendant cinq jours ». Frequency: une fois / deux fois par jour, par semaine; le matin et le soir; tous les jours.",
        "« Depuis » + durée, avec le présent, indique qu'une situation a commencé dans le passé et continue : « Je suis malade depuis deux jours ». « Pendant » donne une durée limitée : « pendant cinq jours ». Fréquence : une fois / deux fois par jour, par semaine ; le matin et le soir ; tous les jours.",
        "«depuis» + مدة مع المضارع تعني أن الحالة بدأت في الماضي وما زالت مستمرة: «Je suis malade depuis deux jours» (أنا مريض منذ يومين). أما «pendant» فتدل على مدة محدّدة: «pendant cinq jours» (لمدة خمسة أيام). وللتكرار نقول: une fois / deux fois par jour, par semaine (مرة / مرتين في اليوم، في الأسبوع)، le matin et le soir، tous les jours."
      ),
      examples: [
        { fr: "J'ai mal au dos depuis une semaine.", gloss: t("My back has hurt for a week.", "depuis + présent.", "ظهري يؤلمني منذ أسبوع.") },
        { fr: "Prenez un comprimé deux fois par jour pendant une semaine.", gloss: t("Take one tablet twice a day for a week.", "fréquence + pendant.", "تناول قرصًا مرتين في اليوم لمدة أسبوع.") },
      ],
      watchOut: t(
        "Don't use the past with depuis for an ongoing situation: « J'habite ici depuis 2020 » (present!).",
        "Pour une situation qui continue, on utilise le présent avec depuis : « J'habite ici depuis 2020 ».",
        "مع depuis لحالة مستمرة نستخدم المضارع لا الماضي: «J'habite ici depuis 2020»."
      ),
    },
  ],
  pronunciation: {
    title: t("Intonation: question or statement?", "L'intonation : question ou affirmation ?", "النغمة: سؤال أم إخبار؟"),
    explanation: t(
      "The same words can be a question or a statement — only the melody changes. Statement: the voice goes down at the end (« Vous avez de la fièvre. ↘ »). Yes/no question: the voice goes up (« Vous avez de la fièvre ? ↗ »). Instructions (imperative) go down firmly: « Ouvrez la bouche. ↘ »",
      "Les mêmes mots peuvent être une question ou une affirmation : seule la mélodie change. Affirmation : la voix descend à la fin (« Vous avez de la fièvre. ↘ »). Question fermée : la voix monte (« Vous avez de la fièvre ? ↗ »). Consigne à l'impératif : la voix descend nettement (« Ouvrez la bouche. ↘ »).",
      "قد تكون الكلمات نفسها سؤالًا أو إخبارًا، والفرق في اللحن فقط. في الإخبار ينخفض الصوت في النهاية («Vous avez de la fièvre. ↘»)، وفي السؤال الذي جوابه نعم أو لا يرتفع الصوت («Vous avez de la fièvre ? ↗»)، أما التعليمات بصيغة الأمر فينخفض فيها الصوت بوضوح («Ouvrez la bouche. ↘»)."
    ),
    examples: ["Vous avez de la fièvre.", "Vous avez de la fièvre ?", "Tu as mal à la tête ?", "Ouvrez la bouche.", "Respirez fort."],
  },
  culture: {
    title: t("Health care in France", "Se soigner en France", "الرعاية الصحية في فرنسا"),
    body: t(
      "Everyone is asked to choose a « médecin traitant » (regular GP). The « carte Vitale » is the national health insurance card; most of the cost is reimbursed, and a « mutuelle » (complementary insurance) usually covers the rest. Pharmacies have a green cross; at night and on Sundays, a « pharmacie de garde » is open. Emergency numbers: 15 (SAMU, medical emergencies), 18 (fire brigade), 112 (European emergency number). For an employee, a doctor's « arrêt de travail » justifies sick leave.",
      "Chacun choisit un médecin traitant (généraliste habituel). La carte Vitale est la carte d'assurance maladie ; la plus grande partie des frais est remboursée, et une mutuelle (assurance complémentaire) paie souvent le reste. Les pharmacies ont une croix verte ; la nuit et le dimanche, une pharmacie de garde est ouverte. Numéros d'urgence : le 15 (SAMU, urgences médicales), le 18 (pompiers), le 112 (numéro d'urgence européen). Pour un salarié, l'arrêt de travail du médecin justifie l'absence.",
      "يُطلب من كل شخص أن يختار «médecin traitant» (طبيبًا عامًا معتادًا). و«carte Vitale» هي بطاقة التأمين الصحي الوطني؛ إذ يُستردّ معظم التكاليف، وتغطّي «mutuelle» (التأمين التكميلي) الباقي عادةً. وتحمل الصيدليات صليبًا أخضر، وفي الليل ويوم الأحد تكون «pharmacie de garde» (صيدلية مناوبة) مفتوحة. وأرقام الطوارئ هي: 15 (SAMU، الطوارئ الطبية)، و18 (الإطفاء)، و112 (رقم الطوارئ الأوروبي). وبالنسبة للموظف، فإن «arrêt de travail» (الإجازة المرضية) التي يصدرها الطبيب تبرّر غيابه عن العمل."
    ),
  },
  practice: [
    { kind: "fill", id: "u10-p1", prompt: t("avoir mal à + article", "avoir mal à + article", "avoir mal à + الأداة"), sentence: "J'ai mal ___ dos.", answers: ["au"] },
    { kind: "fill", id: "u10-p2", prompt: t("avoir mal à + article", "avoir mal à + article", "avoir mal à + الأداة"), sentence: "Elle a mal ___ dents.", answers: ["aux"] },
    { kind: "fill", id: "u10-p3", prompt: t("avoir mal à + article", "avoir mal à + article", "avoir mal à + الأداة"), sentence: "Tu as mal ___ gorge ?", answers: ["à la"] },
    { kind: "fill", id: "u10-p4", prompt: t("Conjugate devoir.", "Conjuguez devoir.", "صرّف الفعل devoir."), sentence: "Vous ___ prendre ce médicament.", answers: ["devez"] },
    { kind: "fill", id: "u10-p5", prompt: t("Conjugate devoir.", "Conjuguez devoir.", "صرّف الفعل devoir."), sentence: "Ils ___ se reposer.", answers: ["doivent"] },
    { kind: "fill", id: "u10-p6", prompt: t("Depuis or pendant?", "Depuis ou pendant ?", "depuis أم pendant؟"), sentence: "Je tousse ___ trois jours.", answers: ["depuis"] },
    { kind: "fill", id: "u10-p7", prompt: t("Depuis or pendant?", "Depuis ou pendant ?", "depuis أم pendant؟"), sentence: "Prenez ce sirop ___ une semaine.", answers: ["pendant"] },
    { kind: "choice", id: "u10-p8", prompt: t("Give advice to a friend with a cold.", "Conseillez un ami enrhumé.", "انصح صديقًا مصابًا بالزكام."), options: ["Il faut boire du thé chaud.", "Il faut boit du thé chaud.", "Il faut de boire du thé chaud."], correctIndex: 0 },
    { kind: "choice", id: "u10-p9", prompt: t("Medical emergency number in France:", "Numéro des urgences médicales en France :", "رقم الطوارئ الطبية في فرنسا:"), options: ["15", "17", "99"], correctIndex: 0 },
    { kind: "order", id: "u10-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "J'ai mal à la tête depuis hier." },
    { kind: "order", id: "u10-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Il faut vous reposer." },
  ],
  production: {
    prompt: t(
      "Write a message to your teacher or manager: you are ill, say what's wrong and since when, what the doctor said, and when you will come back.",
      "Écrivez un message à votre professeur ou à votre responsable : vous êtes malade, dites ce que vous avez et depuis quand, ce que le médecin a dit, et quand vous revenez.",
      "اكتب رسالة إلى معلّمك أو مديرك: أنت مريض، فاذكر ما تعاني منه ومنذ متى، وما قاله الطبيب، ومتى ستعود."
    ),
    model: "Bonjour madame Petit,\nJe suis malade depuis lundi : j'ai de la fièvre et j'ai mal à la gorge. Le médecin dit que c'est la grippe. Je dois rester à la maison jusqu'à vendredi. Je reviens lundi prochain.\nCordialement,\nHana Saïdi",
    checklist: [
      t("I use « avoir mal à » with the right article.", "J'utilise « avoir mal à » avec le bon article.", "استخدمت «avoir mal à» مع الأداة الصحيحة."),
      t("I use « depuis » with the present.", "J'utilise « depuis » avec le présent.", "استخدمت «depuis» مع المضارع."),
      t("I use « devoir » or « il faut ».", "J'utilise « devoir » ou « il faut ».", "استخدمت «devoir» أو «il faut»."),
      t("I start and end the message politely (Bonjour…, Cordialement).", "Je commence et je termine poliment (Bonjour…, Cordialement).", "بدأت الرسالة وأنهيتها بأدب (Bonjour…، Cordialement)."),
    ],
  },
  task: {
    title: t("At the pharmacy", "À la pharmacie", "في الصيدلية"),
    brief: t(
      "Role-play with a partner (or record both roles): you go to a pharmacy with a symptom (headache, sore throat, cough). Explain the problem and since when, answer the pharmacist's questions, and understand how to take the medicine.",
      "Jouez la scène avec un partenaire (ou enregistrez les deux rôles) : vous allez à la pharmacie avec un symptôme (mal de tête, mal de gorge, toux). Expliquez le problème et depuis quand, répondez aux questions du pharmacien et comprenez comment prendre le médicament.",
      "مثّل الموقف مع شريك (أو سجّل الدورين بنفسك): تذهب إلى الصيدلية وأنت تعاني من عَرَض (صداع، أو التهاب حلق، أو سعال). اشرح المشكلة ومنذ متى، وأجب عن أسئلة الصيدلي، وافهم طريقة تناول الدواء."
    ),
    checklist: [
      t("I described my symptom and since when.", "J'ai décrit mon symptôme et depuis quand.", "وصفت العَرَض ومنذ متى."),
      t("I understood the dosage (combien de fois par jour, pendant combien de jours).", "J'ai compris la posologie (combien de fois par jour, pendant combien de jours).", "فهمت الجرعة (كم مرة في اليوم، ولكم يومًا)."),
      t("I asked the price and paid.", "J'ai demandé le prix et j'ai payé.", "سألت عن السعر ودفعت."),
    ],
  },
  test: [
    { kind: "choice", id: "u10-t1", prompt: t("« J'ai mal ___ ventre. »", "« J'ai mal ___ ventre. »", "«J'ai mal ___ ventre.»"), options: ["à le", "au", "à la"], correctIndex: 1 },
    { kind: "choice", id: "u10-t2", prompt: t("« Il a mal ___ yeux. »", "« Il a mal ___ yeux. »", "«Il a mal ___ yeux.»"), options: ["aux", "à les", "des"], correctIndex: 0 },
    { kind: "choice", id: "u10-t3", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["J'ai mal à ma tête.", "J'ai mal à la tête.", "Je suis mal à la tête."], correctIndex: 1 },
    { kind: "choice", id: "u10-t4", prompt: t("« Nous ___ partir. » (devoir)", "« Nous ___ partir. » (devoir)", "«Nous ___ partir.» (devoir)"), options: ["devons", "doivons", "devez"], correctIndex: 0 },
    { kind: "choice", id: "u10-t5", prompt: t("« Il faut ___ beaucoup d'eau. »", "« Il faut ___ beaucoup d'eau. »", "«Il faut ___ beaucoup d'eau.»"), options: ["boire", "bois", "buvez"], correctIndex: 0 },
    { kind: "choice", id: "u10-t6", prompt: t("« J'habite à Lille ___ trois ans. » (and I still live there)", "« J'habite à Lille ___ trois ans. » (et j'y habite encore)", "«J'habite à Lille ___ trois ans.» (وما زلت أسكن فيها)"), options: ["pendant", "depuis", "dans"], correctIndex: 1 },
    { kind: "choice", id: "u10-t7", prompt: t("The paper with the medicines from the doctor is…", "Le papier du médecin avec les médicaments, c'est…", "الورقة التي يكتب فيها الطبيب الأدوية هي…"), options: ["l'ordonnance", "la carte Vitale", "le rendez-vous"], correctIndex: 0 },
    { kind: "choice", id: "u10-t8", prompt: t("« Qu'est-ce qui ne va pas ? » means:", "« Qu'est-ce qui ne va pas ? » signifie :", "معنى «Qu'est-ce qui ne va pas ?»:"), optionsL10n: { en: ["What's wrong?", "Where are you going?", "What do you want?"], fr: ["Quel est le problème ?", "Où allez-vous ?", "Que voulez-vous ?"], ar: ["ما المشكلة؟", "إلى أين تذهب؟", "ماذا تريد؟"] }, correctIndex: 0 },
    { kind: "choice", id: "u10-t9", prompt: t("In a yes/no question, the voice at the end…", "Dans une question fermée, la voix à la fin…", "في السؤال الذي جوابه نعم أو لا، يكون الصوت في النهاية…"), optionsL10n: { en: ["goes up", "goes down", "stops"], fr: ["monte", "descend", "s'arrête"], ar: ["مرتفعًا", "منخفضًا", "متوقفًا"] }, correctIndex: 0 },
    { kind: "choice", id: "u10-t10", prompt: t("At night or on Sunday, you can buy medicine at…", "La nuit ou le dimanche, on achète des médicaments à…", "في الليل أو يوم الأحد يمكن شراء الأدوية من…"), optionsL10n: { en: ["the « pharmacie de garde »", "the supermarket", "the town hall"], fr: ["la pharmacie de garde", "le supermarché", "la mairie"], ar: ["الصيدلية المناوبة", "السوبرماركت", "البلدية"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-say-symptom", "goal-pharmacy"],
  replaces: ["fr-a1-sante-unit"],
};
