import { l10n as t, type CourseUnit } from "../types";

export const A2_U07: CourseUnit = {
  id: "fr-a2-u07-telephone",
  level: "A2",
  order: 7,
  title: t("On the phone", "Au téléphone", "عبر الهاتف"),
  theme: t(
    "Making, moving and cancelling appointments; polite requests",
    "Prendre, déplacer et annuler un rendez-vous ; les demandes polies",
    "حجز موعد وتغييره وإلغاؤه، والطلبات المهذّبة"
  ),
  canDo: [
    t("I can make an appointment by phone.", "Je peux prendre un rendez-vous par téléphone.", "أستطيع أن أحجز موعدًا عبر الهاتف."),
    t("I can accept, refuse or suggest another time.", "Je peux accepter, refuser ou proposer un autre moment.", "أستطيع أن أقبل أو أرفض أو أقترح وقتًا آخر."),
    t("I can make polite requests with the conditional.", "Je peux faire des demandes polies au conditionnel.", "أستطيع أن أقدّم طلبات مهذّبة بصيغة الشرط."),
    t("I can understand standard phone phrases and leave a message.", "Je peux comprendre les formules du téléphone et laisser un message.", "أستطيع أن أفهم العبارات الهاتفية المعتادة وأترك رسالة."),
  ],
  context: t(
    "Yanis has a slight toothache. He calls his dentist's practice in Nantes to make an appointment that fits his working hours.",
    "Yanis a un peu mal à une dent. Il appelle le cabinet de son dentiste, à Nantes, pour prendre un rendez-vous compatible avec ses horaires de travail.",
    "يشعر يانيس بألم خفيف في أحد أسنانه. فيتصل بعيادة طبيب أسنانه في نانت ليحجز موعدًا يناسب ساعات عمله."
  ),
  dialogue: {
    title: t("Booking the dentist", "Rendez-vous chez le dentiste", "موعد عند طبيب الأسنان"),
    setting: t("A phone call to a dental practice", "Un appel au cabinet dentaire", "مكالمة إلى عيادة أسنان"),
    lines: [
      { speaker: "Secrétaire", fr: "Cabinet du docteur Roussel, bonjour." },
      { speaker: "Yanis", fr: "Bonjour, madame. Je voudrais prendre rendez-vous avec le docteur Roussel, s'il vous plaît." },
      { speaker: "Secrétaire", fr: "C'est pour une urgence ?" },
      { speaker: "Yanis", fr: "Non, pour un contrôle. J'ai un peu mal à une dent, mais ce n'est pas urgent." },
      { speaker: "Secrétaire", fr: "D'accord. Vous êtes déjà patient au cabinet ?" },
      { speaker: "Yanis", fr: "Oui, je m'appelle Yanis Belkacem." },
      { speaker: "Secrétaire", fr: "Belkacem… Voilà. Je peux vous proposer mardi 14, à 9 h 30." },
      { speaker: "Yanis", fr: "Mardi matin, ce serait difficile : je travaille. Vous n'auriez pas quelque chose en fin de journée ?" },
      { speaker: "Secrétaire", fr: "Jeudi 16 à 18 h 15, ça vous irait ?" },
      { speaker: "Yanis", fr: "Oui, ça me va parfaitement." },
      { speaker: "Secrétaire", fr: "C'est noté : jeudi 16 à 18 h 15. Pourriez-vous me donner un numéro de téléphone ?" },
      { speaker: "Yanis", fr: "Bien sûr : le 06 18 52 77 40." },
      { speaker: "Secrétaire", fr: "Merci. En cas d'empêchement, pourriez-vous nous prévenir vingt-quatre heures à l'avance ?" },
      { speaker: "Yanis", fr: "Pas de problème. La prochaine fois, est-ce que je pourrais prendre rendez-vous en ligne ?" },
      { speaker: "Secrétaire", fr: "Oui, sur notre site ou sur Doctolib. Bonne journée, monsieur." },
      { speaker: "Yanis", fr: "Merci, à vous aussi. Au revoir." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u07-c1", prompt: t("Why does Yanis call?", "Pourquoi Yanis appelle-t-il ?", "لماذا يتصل يانيس؟"), optionsL10n: { en: ["For a check-up (slight toothache)", "For an emergency", "To cancel an appointment"], fr: ["Pour un contrôle (un peu mal à une dent)", "Pour une urgence", "Pour annuler un rendez-vous"], ar: ["لفحص (ألم خفيف في سنّ)", "لحالة طارئة", "لإلغاء موعد"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u07-c2", prompt: t("Why doesn't Tuesday work?", "Pourquoi mardi ne convient-il pas ?", "لماذا لا يناسبه يوم الثلاثاء؟"), optionsL10n: { en: ["He works in the morning.", "He is on holiday.", "The dentist is absent."], fr: ["Il travaille le matin.", "Il est en vacances.", "Le dentiste est absent."], ar: ["لأنه يعمل صباحًا.", "لأنه في إجازة.", "لأن الطبيب غائب."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u07-c3", prompt: t("When is the appointment?", "Quand est le rendez-vous ?", "متى الموعد؟"), optionsL10n: { en: ["Tuesday 14 at 9:30", "Thursday 16 at 6:15 p.m.", "Thursday 16 at 9:30"], fr: ["Mardi 14 à 9 h 30", "Jeudi 16 à 18 h 15", "Jeudi 16 à 9 h 30"], ar: ["الثلاثاء 14 الساعة 9:30", "الخميس 16 الساعة 18:15", "الخميس 16 الساعة 9:30"] }, correctIndex: 1 },
    { kind: "choice", id: "a2u07-c4", prompt: t("What must he do if he can't come?", "Que doit-il faire s'il ne peut pas venir ?", "ماذا يجب أن يفعل إن لم يستطع الحضور؟"), optionsL10n: { en: ["Warn them 24 hours before", "Pay a fine", "Come the next day"], fr: ["Prévenir 24 heures avant", "Payer une amende", "Venir le lendemain"], ar: ["أن يُبلغهم قبل 24 ساعة", "أن يدفع غرامة", "أن يأتي في اليوم التالي"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Appointments", "Les rendez-vous", "المواعيد"),
      items: [
        { fr: "prendre rendez-vous", meaning: t("to make an appointment", "fixer un moment", "يحجز موعدًا") },
        { fr: "déplacer / reporter un rendez-vous", meaning: t("to move / postpone an appointment", "changer la date", "يغيّر / يؤجّل موعدًا") },
        { fr: "annuler", meaning: t("to cancel", "supprimer un rendez-vous", "يلغي") },
        { fr: "confirmer", meaning: t("to confirm", "dire que c'est d'accord", "يؤكّد") },
        { fr: "être disponible / libre", meaning: t("to be available / free", "ne pas être occupé", "يكون متاحًا / متفرّغًا") },
        { fr: "un empêchement", gender: "m", meaning: t("something that prevents you from coming", "problème imprévu", "مانع طارئ") },
        { fr: "prévenir", meaning: t("to warn, to let someone know", "informer à l'avance", "يُبلغ مسبقًا") },
        { fr: "à l'avance", meaning: t("in advance", "avant le moment prévu", "مسبقًا") },
        { fr: "en fin de journée", meaning: t("at the end of the day", "vers la fin de l'après-midi", "في آخر النهار") },
      ],
    },
    {
      title: t("Phone phrases", "Les formules du téléphone", "العبارات الهاتفية"),
      items: [
        { fr: "Allô ?", meaning: t("Hello? (only on the phone)", "pour répondre au téléphone", "ألو؟ (على الهاتف فقط)") },
        { fr: "C'est de la part de qui ?", meaning: t("Who's calling?", "demander le nom de la personne qui appelle", "من المتّصل؟") },
        { fr: "Ne quittez pas.", meaning: t("Hold the line.", "attendez au téléphone", "ابقَ على الخط.") },
        { fr: "Je vous le / la passe.", meaning: t("I'll put you through to him / her.", "je vous mets en communication", "سأحوّلك إليه / إليها.") },
        { fr: "Il / Elle est en ligne.", meaning: t("He / She is on another call.", "occupé au téléphone", "هو / هي على خط آخر.") },
        { fr: "laisser un message", meaning: t("to leave a message", "enregistrer un message", "يترك رسالة") },
        { fr: "rappeler", meaning: t("to call back", "téléphoner de nouveau", "يعاود الاتصال") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u07-g1",
      title: t("The conditional for politeness", "Le conditionnel de politesse", "صيغة الشرط للتأدّب"),
      explanation: t(
        "The present conditional makes requests softer and more polite. It is formed with the future stem + the imparfait endings (-ais, -ais, -ait, -ions, -iez, -aient): vouloir → je voudrais, pouvoir → pourriez-vous, être → ce serait, avoir → vous auriez, aimer → j'aimerais. Compare: « Je veux un rendez-vous » (direct) and « Je voudrais un rendez-vous » (polite).",
        "Le conditionnel présent adoucit les demandes et les rend plus polies. On le forme avec le radical du futur + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient) : vouloir → je voudrais, pouvoir → pourriez-vous, être → ce serait, avoir → vous auriez, aimer → j'aimerais. Comparez : « Je veux un rendez-vous » (direct) et « Je voudrais un rendez-vous » (poli).",
        "تُليّن صيغة الشرط في الحاضر الطلبات وتجعلها أكثر تهذيبًا. وتُكوَّن من جذر المستقبل + نهايات الماضي الناقص (-ais و-ais و-ait و-ions و-iez و-aient): vouloir ← je voudrais، وpouvoir ← pourriez-vous، وêtre ← ce serait، وavoir ← vous auriez، وaimer ← j'aimerais. قارن: «Je veux un rendez-vous» (مباشر) و«Je voudrais un rendez-vous» (مهذّب)."
      ),
      table: {
        head: ["", "pouvoir", "vouloir", "être"],
        rows: [
          ["je", "pourrais", "voudrais", "serais"],
          ["tu", "pourrais", "voudrais", "serais"],
          ["il / elle / on", "pourrait", "voudrait", "serait"],
          ["nous", "pourrions", "voudrions", "serions"],
          ["vous", "pourriez", "voudriez", "seriez"],
          ["ils / elles", "pourraient", "voudraient", "seraient"],
        ],
      },
      examples: [
        { fr: "Pourriez-vous répéter la date, s'il vous plaît ?", gloss: t("Could you repeat the date, please?", "Demande polie.", "هل يمكنك أن تعيد التاريخ من فضلك؟") },
        { fr: "Est-ce que ce serait possible jeudi ?", gloss: t("Would Thursday be possible?", "ce serait.", "هل سيكون ذلك ممكنًا يوم الخميس؟") },
        { fr: "J'aimerais parler à Mme Roussel.", gloss: t("I would like to speak to Mrs Roussel.", "aimer → aimerais.", "أودّ أن أتحدث إلى السيدة روسيل.") },
      ],
    },
    {
      id: "a2u07-g2",
      title: t("Suggesting, accepting, refusing", "Proposer, accepter, refuser", "الاقتراح والقبول والرفض"),
      explanation: t(
        "To suggest: « Je peux vous proposer… », « Ça vous irait ? », « Vous seriez disponible… ? ». To accept: « Ça me va », « C'est parfait », « Volontiers ». To refuse politely, give a reason and a new suggestion: « Désolé, ce serait difficile : je travaille. Vous n'auriez pas quelque chose… ? ». « Aller à quelqu'un » means « to suit someone »: « Jeudi, ça vous va ? ».",
        "Pour proposer : « Je peux vous proposer… », « Ça vous irait ? », « Vous seriez disponible… ? ». Pour accepter : « Ça me va », « C'est parfait », « Volontiers ». Pour refuser poliment, on donne une raison et une autre proposition : « Désolé, ce serait difficile : je travaille. Vous n'auriez pas quelque chose… ? ». « Aller à quelqu'un » veut dire « convenir » : « Jeudi, ça vous va ? ».",
        "للاقتراح: «Je peux vous proposer…» و«Ça vous irait ?» و«Vous seriez disponible… ?». وللقبول: «Ça me va» و«C'est parfait» و«Volontiers». وللرفض بأدب نذكر سببًا ونقترح بديلًا: «Désolé, ce serait difficile : je travaille. Vous n'auriez pas quelque chose… ?». أما «aller à quelqu'un» فتعني «يناسب شخصًا»: «Jeudi, ça vous va ?»."
      ),
      examples: [
        { fr: "Samedi soir, ça te dirait de venir dîner ? — Volontiers !", gloss: t("Would you like to come for dinner on Saturday evening? — Gladly!", "Invitation acceptée.", "ما رأيك أن تأتي للعشاء مساء السبت؟ — بكل سرور!") },
        { fr: "Je suis désolée, je ne suis pas libre lundi. Mardi, ce serait possible ?", gloss: t("I'm sorry, I'm not free on Monday. Would Tuesday be possible?", "Refus + proposition.", "آسفة، لست متفرّغة يوم الاثنين. هل يمكن يوم الثلاثاء؟") },
      ],
    },
    {
      id: "a2u07-g3",
      title: t("Phone numbers, dates and times", "Numéros, dates et heures au téléphone", "الأرقام والتواريخ والأوقات عبر الهاتف"),
      explanation: t(
        "On the phone, dates are given with the day name and number: « jeudi 16 » (no « le » needed), « le jeudi 16 mai ». Times use the 24-hour clock: « 18 h 15 » = dix-huit heures quinze. Repeat the key information to confirm: « C'est noté : jeudi 16 à 18 h 15. » Phone numbers are read in pairs: 06 18 52 77 40 = zéro six, dix-huit, cinquante-deux, soixante-dix-sept, quarante.",
        "Au téléphone, on donne la date avec le jour et le numéro : « jeudi 16 », « le jeudi 16 mai ». Les heures suivent le système sur 24 heures : « 18 h 15 » = dix-huit heures quinze. On répète l'information clé pour confirmer : « C'est noté : jeudi 16 à 18 h 15. » Les numéros se lisent par deux : 06 18 52 77 40 = zéro six, dix-huit, cinquante-deux, soixante-dix-sept, quarante.",
        "عبر الهاتف يُذكر التاريخ باسم اليوم ورقمه: «jeudi 16» و«le jeudi 16 mai». وتُستخدم الساعة بنظام 24 ساعة: «18 h 15» = dix-huit heures quinze. ونكرّر المعلومة الأساسية للتأكيد: «C'est noté : jeudi 16 à 18 h 15.» وتُقرأ الأرقام رقمين رقمين: 06 18 52 77 40 = zéro six، dix-huit، cinquante-deux، soixante-dix-sept، quarante."
      ),
      examples: [
        { fr: "Je vous confirme votre rendez-vous le lundi 3 juin à 14 h 30.", gloss: t("I confirm your appointment on Monday 3 June at 2:30 p.m.", "Confirmation.", "أؤكّد لك موعدك يوم الاثنين 3 يونيو الساعة 14:30.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Future « je voudrai » or conditional « je voudrais »?", "Futur « je voudrai » ou conditionnel « je voudrais » ?", "المستقبل «je voudrai» أم الشرط «je voudrais»؟"),
    explanation: t(
      "In careful speech, the future ending -ai is closed [e] and the conditional -ais is open [ɛ]: « je pourrai » [puʁe] / « je pourrais » [puʁɛ]. Many speakers no longer make this difference, so context is your best guide: a request (« Je voudrais… ») is almost always conditional. With vous, the difference is clear: « vous pourrez » (future) / « vous pourriez » (conditional).",
      "Dans une prononciation soignée, la terminaison du futur -ai est fermée [e] et celle du conditionnel -ais est ouverte [ɛ] : « je pourrai » [puʁe] / « je pourrais » [puʁɛ]. Beaucoup de locuteurs ne font plus cette différence : le contexte vous guide. Une demande (« Je voudrais… ») est presque toujours au conditionnel. Avec vous, la différence est nette : « vous pourrez » (futur) / « vous pourriez » (conditionnel).",
      "في النطق المتأنّي تكون نهاية المستقبل -ai مغلقة [e]، ونهاية الشرط -ais مفتوحة [ɛ]: «je pourrai» [puʁe] / «je pourrais» [puʁɛ]. ولم يعد كثير من المتحدثين يميّزون بينهما، لذا فالسياق هو دليلك: فالطلب («Je voudrais…») يكون دائمًا تقريبًا بصيغة الشرط. ومع vous يكون الفرق واضحًا: «vous pourrez» (مستقبل) / «vous pourriez» (شرط)."
    ),
    examples: ["je pourrai — je pourrais", "vous pourrez — vous pourriez", "Je voudrais prendre rendez-vous.", "Pourriez-vous me rappeler ?"],
  },
  culture: {
    title: t("Booking appointments in France", "Prendre rendez-vous en France", "حجز المواعيد في فرنسا"),
    body: t(
      "Doctors, dentists, hairdressers and many administrations work by appointment. Many people now book online, often through platforms such as Doctolib, but calling is still common. If you can't come, it is expected that you cancel in advance — late cancellations and no-shows are a real problem for practices. On the phone, always start with « Bonjour » and your name, use « vous », and finish with « Bonne journée ».",
      "Les médecins, les dentistes, les coiffeurs et beaucoup d'administrations reçoivent sur rendez-vous. Beaucoup de gens réservent maintenant en ligne, souvent sur des plateformes comme Doctolib, mais on téléphone encore souvent. Si on ne peut pas venir, on doit annuler à l'avance : les annulations tardives et les rendez-vous non honorés posent un vrai problème aux cabinets. Au téléphone, on commence toujours par « Bonjour » et son nom, on vouvoie, et on termine par « Bonne journée ».",
      "يستقبل الأطباء وأطباء الأسنان والحلّاقون وكثير من الإدارات زوّارهم بمواعيد مسبقة. وأصبح كثير من الناس يحجزون عبر الإنترنت، غالبًا من خلال منصّات مثل Doctolib، لكن الاتصال الهاتفي ما زال شائعًا. وإذا لم تستطع الحضور فالمتوقّع أن تُلغي مسبقًا، لأن الإلغاء المتأخر والتغيّب عن المواعيد يمثّلان مشكلة حقيقية للعيادات. وعبر الهاتف ابدأ دائمًا بـ«Bonjour» واسمك، واستخدم «vous»، واختم بـ«Bonne journée»."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u07-p1", prompt: t("Polite form of vouloir.", "Forme polie de vouloir.", "الصيغة المهذّبة من vouloir."), sentence: "Je ___ annuler mon rendez-vous.", answers: ["voudrais"] },
    { kind: "fill", id: "a2u07-p2", prompt: t("Conditional of pouvoir (vous).", "Conditionnel de pouvoir (vous).", "الشرط من pouvoir (vous)."), sentence: "___-vous me rappeler demain ?", answers: ["pourriez"] },
    { kind: "fill", id: "a2u07-p3", prompt: t("Conditional of être.", "Conditionnel d'être.", "الشرط من être."), sentence: "Est-ce que ce ___ possible vendredi ?", answers: ["serait"] },
    { kind: "fill", id: "a2u07-p4", prompt: t("Conditional of aimer.", "Conditionnel d'aimer.", "الشرط من aimer."), sentence: "J'___ parler au directeur.", answers: ["aimerais"] },
    { kind: "fill", id: "a2u07-p5", prompt: t("Conditional of avoir (vous).", "Conditionnel d'avoir (vous).", "الشرط من avoir (vous)."), sentence: "Vous n'___ pas un créneau plus tôt ?", answers: ["auriez"] },
    { kind: "choice", id: "a2u07-p6", prompt: t("The person calling asks for Mr Roux. You answer:", "On demande M. Roux. Vous répondez :", "يطلب المتصل السيد رو. تجيب:"), options: ["Ne quittez pas, je vous le passe.", "Allô, c'est moi.", "Laissez-le, s'il vous plaît."], correctIndex: 0 },
    { kind: "choice", id: "a2u07-p7", prompt: t("To ask the name of the caller:", "Pour demander le nom de la personne qui appelle :", "للسؤال عن اسم المتصل:"), options: ["C'est de la part de qui ?", "Qui êtes-vous, vous ?", "Vous êtes où ?"], correctIndex: 0 },
    { kind: "choice", id: "a2u07-p8", prompt: t("Refuse politely:", "Refusez poliment :", "ارفض بأدب:"), options: ["Non.", "Désolé, ce serait difficile. Vous n'auriez pas un autre jour ?", "Je ne veux pas."], correctIndex: 1 },
    { kind: "choice", id: "a2u07-p9", prompt: t("« Ça vous irait ? » means:", "« Ça vous irait ? » signifie :", "معنى «Ça vous irait ?»:"), optionsL10n: { en: ["Would that suit you?", "Will you go there?", "Are you leaving?"], fr: ["Cela vous conviendrait ?", "Vous irez là-bas ?", "Vous partez ?"], ar: ["هل يناسبك ذلك؟", "هل ستذهب إلى هناك؟", "هل ستغادر؟"] }, correctIndex: 0 },
    { kind: "order", id: "a2u07-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je voudrais prendre rendez-vous." },
    { kind: "order", id: "a2u07-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Pourriez-vous me rappeler demain ?" },
  ],
  production: {
    prompt: t(
      "You can't go to an appointment. Write a polite message or email (60–80 words): apologise, explain briefly why, cancel or move the appointment, and suggest two other times.",
      "Vous ne pouvez pas aller à un rendez-vous. Écrivez un message ou un courriel poli (60 à 80 mots) : excusez-vous, expliquez brièvement pourquoi, annulez ou déplacez le rendez-vous et proposez deux autres moments.",
      "لا تستطيع الذهاب إلى موعد. اكتب رسالة أو بريدًا إلكترونيًا مهذّبًا (60 إلى 80 كلمة): اعتذر، واشرح السبب باختصار، وألغِ الموعد أو غيّره، واقترح موعدين آخرين."
    ),
    model: "Madame,\nJ'ai rendez-vous avec le docteur Roussel le jeudi 16 à 18 h 15. Malheureusement, j'ai un empêchement professionnel ce jour-là. Je suis désolé de vous prévenir si tard. Est-ce que ce serait possible de déplacer le rendez-vous au lundi 20 ou au mardi 21, en fin de journée ? Pourriez-vous me confirmer la nouvelle date ?\nMerci d'avance,\nYanis Belkacem",
    checklist: [
      t("I apologise and give a short reason.", "Je m'excuse et je donne une courte raison.", "اعتذرت وذكرت سببًا قصيرًا."),
      t("I use the conditional at least twice (serait, pourriez…).", "J'utilise le conditionnel au moins deux fois (serait, pourriez…).", "استخدمت صيغة الشرط مرتين على الأقل (serait، pourriez…)."),
      t("I give the date and time of the original appointment.", "Je donne la date et l'heure du rendez-vous initial.", "ذكرت تاريخ الموعد الأصلي وساعته."),
      t("I suggest two other times.", "Je propose deux autres moments.", "اقترحت موعدين آخرين."),
    ],
  },
  task: {
    title: t("Real phone call", "Un vrai appel", "مكالمة حقيقية"),
    brief: t(
      "Role-play two phone calls with a partner (or record both roles): 1) book an appointment (doctor, hairdresser, bank), refusing the first slot and accepting the second; 2) call a friend to invite them out — they refuse politely and suggest another day.",
      "Jouez deux appels avec un partenaire (ou enregistrez les deux rôles) : 1) prenez un rendez-vous (médecin, coiffeur, banque) en refusant le premier créneau et en acceptant le deuxième ; 2) appelez un ami pour l'inviter à sortir — il refuse poliment et propose un autre jour.",
      "مثّل مكالمتين هاتفيتين مع شريك (أو سجّل الدورين): 1) احجز موعدًا (عند طبيب أو حلّاق أو في بنك)، وارفض الموعد الأول واقبل الثاني؛ 2) اتصل بصديق لتدعوه إلى الخروج — فيرفض بأدب ويقترح يومًا آخر."
    ),
    checklist: [
      t("I used phone phrases (Allô, c'est de la part de qui…).", "J'ai utilisé les formules du téléphone (Allô, c'est de la part de qui…).", "استخدمت العبارات الهاتفية (Allô، c'est de la part de qui…)."),
      t("I refused politely with a reason and accepted another slot.", "J'ai refusé poliment avec une raison et accepté un autre créneau.", "رفضت بأدب مع ذكر السبب وقبلت موعدًا آخر."),
      t("I repeated the final date and time to confirm.", "J'ai répété la date et l'heure finales pour confirmer.", "كرّرت التاريخ والساعة النهائيين للتأكيد."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u07-t1", prompt: t("Most polite request:", "La demande la plus polie :", "أكثر طلب تهذيبًا:"), options: ["Je veux parler à Mme Morin.", "Je voudrais parler à Mme Morin, s'il vous plaît.", "Passez-moi Mme Morin."], correctIndex: 1 },
    { kind: "choice", id: "a2u07-t2", prompt: t("Conditional of « pouvoir » (tu):", "Conditionnel de « pouvoir » (tu) :", "الشرط من «pouvoir» (tu):"), options: ["tu pourrais", "tu pouvais", "tu pourras"], correctIndex: 0 },
    { kind: "choice", id: "a2u07-t3", prompt: t("Which form is conditional?", "Quelle forme est au conditionnel ?", "أي صيغة بصيغة الشرط؟"), options: ["vous pourrez", "vous pourriez", "vous pouvez"], correctIndex: 1 },
    { kind: "choice", id: "a2u07-t4", prompt: t("« Ça me va » means:", "« Ça me va » signifie :", "معنى «Ça me va»:"), optionsL10n: { en: ["That suits me.", "I'm going.", "It's mine."], fr: ["Cela me convient.", "Je pars.", "C'est à moi."], ar: ["هذا يناسبني.", "أنا ذاهب.", "إنه لي."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u07-t5", prompt: t("« Ne quittez pas » means:", "« Ne quittez pas » signifie :", "معنى «Ne quittez pas»:"), optionsL10n: { en: ["Hold the line.", "Don't leave the building.", "Don't cancel."], fr: ["Attendez au téléphone.", "Ne sortez pas du bâtiment.", "N'annulez pas."], ar: ["ابقَ على الخط.", "لا تغادر المبنى.", "لا تُلغِ."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u07-t6", prompt: t("To move an appointment to a later date:", "Mettre un rendez-vous à une date plus tard :", "لتأجيل موعد إلى تاريخ لاحق:"), options: ["reporter", "confirmer", "prévenir"], correctIndex: 0 },
    { kind: "choice", id: "a2u07-t7", prompt: t("« 06 18 52 77 40 » — « 77 » is read:", "« 06 18 52 77 40 » — on lit « 77 » :", "«06 18 52 77 40» — يُقرأ «77»:"), options: ["sept sept", "soixante-dix-sept", "septante-sept"], correctIndex: 1 },
    { kind: "choice", id: "a2u07-t8", prompt: t("Conditional of « avoir » (vous):", "Conditionnel d'« avoir » (vous) :", "الشرط من «avoir» (vous):"), options: ["vous aurez", "vous auriez", "vous avriez"], correctIndex: 1 },
    { kind: "choice", id: "a2u07-t9", prompt: t("« Un empêchement » is…", "Un empêchement, c'est…", "«un empêchement» هو…"), optionsL10n: { en: ["something that prevents you from coming", "an appointment", "a phone number"], fr: ["un problème qui empêche de venir", "un rendez-vous", "un numéro de téléphone"], ar: ["مانع يحول دون الحضور", "موعد", "رقم هاتف"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u07-t10", prompt: t("If you can't come to an appointment in France, you should…", "Si on ne peut pas venir à un rendez-vous, on doit…", "إذا لم تستطع الحضور إلى موعد في فرنسا، يجب أن…"), optionsL10n: { en: ["cancel in advance", "just not come", "send a letter a week later"], fr: ["annuler à l'avance", "ne pas venir, simplement", "envoyer une lettre une semaine après"], ar: ["تُلغي مسبقًا", "لا تحضر ببساطة", "ترسل رسالة بعد أسبوع"] }, correctIndex: 0 },
  ],
  passRatio: 0.7,
  alsoDemonstrates: ["goal-make-appointment", "goal-confirm-time"],
  replaces: ["fr-a2-phone-unit", "fr-a2-rdv-unit", "fr-day-invite"],
};
