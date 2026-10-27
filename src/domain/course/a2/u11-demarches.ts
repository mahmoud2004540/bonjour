import { l10n as t, type CourseUnit } from "../types";

export const A2_U11: CourseUnit = {
  id: "fr-a2-u11-demarches",
  level: "A2",
  order: 11,
  title: t("Paperwork and setbacks", "Démarches et imprévus", "الإجراءات والطوارئ"),
  theme: t(
    "Dealing with a bank, a pharmacy or an emergency; writing a formal email",
    "Gérer une banque, une pharmacie ou une urgence ; écrire un courriel formel",
    "التعامل مع البنك أو الصيدلية أو حالة طارئة، وكتابة بريد إلكتروني رسمي"
  ),
  canDo: [
    t("I can explain a problem that has just happened.", "Je peux expliquer un problème qui vient d'arriver.", "أستطيع أن أشرح مشكلة حدثت للتوّ."),
    t("I can describe symptoms and understand simple advice.", "Je peux décrire des symptômes et comprendre des conseils simples.", "أستطيع أن أصف الأعراض وأفهم نصائح بسيطة."),
    t("I can ask for help in an emergency.", "Je peux demander de l'aide en cas d'urgence.", "أستطيع أن أطلب المساعدة في حالة طارئة."),
    t("I can write a short formal email to request something.", "Je peux écrire un court courriel formel pour faire une demande.", "أستطيع أن أكتب بريدًا إلكترونيًا رسميًا قصيرًا لتقديم طلب."),
  ],
  context: t(
    "Inès, a student in Bordeaux, has had a bad morning: she has just lost her bank card and she has a terrible headache.",
    "Inès, étudiante à Bordeaux, a passé une mauvaise matinée : elle vient de perdre sa carte bancaire et elle a très mal à la tête.",
    "إيناس طالبة في بوردو، قضت صباحًا سيئًا: فقد أضاعت للتوّ بطاقتها البنكية وتعاني صداعًا شديدًا."
  ),
  dialogue: {
    title: t("A morning of problems", "Une matinée à problèmes", "صباح مليء بالمشكلات"),
    setting: t("At the bank, then at the pharmacy", "À la banque, puis à la pharmacie", "في البنك ثم في الصيدلية"),
    lines: [
      { speaker: "Inès", fr: "Bonjour, madame. Je viens de perdre ma carte bancaire. Qu'est-ce que je dois faire ?" },
      { speaker: "Conseillère", fr: "D'abord, il faut faire opposition tout de suite. Vous avez votre pièce d'identité ?" },
      { speaker: "Inès", fr: "Oui, voilà ma carte de séjour." },
      { speaker: "Conseillère", fr: "Merci. Je suis en train de bloquer votre carte… Voilà, c'est fait. Vous allez recevoir une nouvelle carte dans une semaine." },
      { speaker: "Inès", fr: "Et en attendant, comment est-ce que je peux retirer de l'argent ?" },
      { speaker: "Conseillère", fr: "Vous pouvez faire un retrait au guichet avec votre pièce d'identité." },
      { speaker: "Pharmacien", fr: "Bonjour, mademoiselle. Qu'est-ce qui ne va pas ?" },
      { speaker: "Inès", fr: "J'ai mal à la tête depuis ce matin et j'ai un peu de fièvre." },
      { speaker: "Pharmacien", fr: "Vous êtes allergique à certains médicaments ?" },
      { speaker: "Inès", fr: "Non, pas du tout." },
      { speaker: "Pharmacien", fr: "Alors, prenez ce paracétamol, un comprimé trois fois par jour maximum. Buvez beaucoup d'eau et reposez-vous." },
      { speaker: "Pharmacien", fr: "Si la fièvre continue après trois jours, il faut consulter un médecin. En cas d'urgence, appelez le 15 ou le 112." },
      { speaker: "Inès", fr: "Merci beaucoup. Je vais rentrer me coucher." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u11-c1", prompt: t("What has just happened to Inès?", "Qu'est-ce qui vient d'arriver à Inès ?", "ماذا حدث لإيناس للتوّ؟"), optionsL10n: { en: ["She lost her bank card.", "Someone stole her phone.", "She missed her train."], fr: ["Elle a perdu sa carte bancaire.", "On lui a volé son téléphone.", "Elle a raté son train."], ar: ["أضاعت بطاقتها البنكية.", "سُرق هاتفها.", "فاتها القطار."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u11-c2", prompt: t("What does the bank adviser do first?", "Que fait d'abord la conseillère ?", "ماذا تفعل الموظفة أولًا؟"), optionsL10n: { en: ["She blocks the card.", "She gives her cash.", "She calls the police."], fr: ["Elle bloque la carte.", "Elle lui donne de l'argent liquide.", "Elle appelle la police."], ar: ["توقف البطاقة.", "تعطيها نقودًا.", "تتصل بالشرطة."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u11-c3", prompt: t("What are Inès's symptoms?", "Quels sont les symptômes d'Inès ?", "ما أعراض إيناس؟"), optionsL10n: { en: ["A headache and a slight fever", "A sore throat and a cough", "Stomach ache"], fr: ["Mal à la tête et un peu de fièvre", "Mal à la gorge et de la toux", "Mal au ventre"], ar: ["صداع وحمّى خفيفة", "التهاب حلق وسعال", "ألم في البطن"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u11-c4", prompt: t("When should she see a doctor?", "Quand doit-elle consulter un médecin ?", "متى يجب أن تراجع الطبيب؟"), optionsL10n: { en: ["If the fever lasts more than three days", "Tomorrow morning", "Only if she loses her card again"], fr: ["Si la fièvre dure plus de trois jours", "Demain matin", "Seulement si elle perd encore sa carte"], ar: ["إذا استمرت الحمّى أكثر من ثلاثة أيام", "صباح الغد", "فقط إذا أضاعت بطاقتها مرة أخرى"] }, correctIndex: 0 },
  ],
  vocabulary: [
    {
      title: t("Bank and administration", "Banque et administration", "البنك والإدارة"),
      items: [
        { fr: "la carte bancaire", gender: "f", meaning: t("bank card", "pour payer et retirer", "البطاقة البنكية") },
        { fr: "faire opposition", meaning: t("to cancel / block a card", "bloquer une carte perdue ou volée", "إيقاف البطاقة") },
        { fr: "retirer de l'argent", meaning: t("to withdraw money", "prendre de l'argent sur son compte", "سحب المال") },
        { fr: "le guichet", gender: "m", meaning: t("counter", "endroit où on est servi", "الشبّاك") },
        { fr: "la pièce d'identité", gender: "f", meaning: t("ID document", "passeport, carte d'identité…", "وثيقة الهوية") },
        { fr: "le formulaire", gender: "m", meaning: t("form", "document à remplir", "الاستمارة") },
        { fr: "le rendez-vous", gender: "m", meaning: t("appointment", "rencontre à une heure fixée", "الموعد") },
      ],
    },
    {
      title: t("Health and emergencies", "Santé et urgences", "الصحة والطوارئ"),
      items: [
        { fr: "avoir mal à la tête / au ventre / à la gorge", meaning: t("to have a headache / stomach ache / sore throat", "douleurs", "يعاني صداعًا / ألمًا في البطن / التهاب الحلق") },
        { fr: "la fièvre", gender: "f", meaning: t("fever", "température élevée", "الحمّى") },
        { fr: "le comprimé", gender: "m", meaning: t("tablet", "médicament à avaler", "القرص") },
        { fr: "l'ordonnance", gender: "f", meaning: t("prescription", "papier du médecin", "الوصفة الطبية") },
        { fr: "se reposer", meaning: t("to rest", "ne pas faire d'effort", "يرتاح") },
        { fr: "Au secours !", meaning: t("Help!", "appel à l'aide", "النجدة!") },
        { fr: "le 15 / le 112", meaning: t("medical emergency / European emergency number", "numéros d'urgence", "رقم الإسعاف / رقم الطوارئ الأوروبي") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u11-g1",
      title: t("Recent past: venir de + infinitive", "Le passé récent : venir de + infinitif", "الماضي القريب: venir de + مصدر"),
      explanation: t(
        "To say that something has just happened, use « venir » in the present + « de » + infinitive: « Je viens de perdre ma carte » (I have just lost my card). « De » becomes « d' » before a vowel: « Il vient d'arriver ». Present of venir: je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
        "Pour dire qu'une action vient juste de se passer, on utilise « venir » au présent + « de » + infinitif : « Je viens de perdre ma carte ». « De » devient « d' » devant une voyelle : « Il vient d'arriver ». Présent de venir : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
        "للتعبير عن أن شيئًا حدث للتوّ نستخدم «venir» في المضارع + «de» + المصدر: «Je viens de perdre ma carte» (أضعت بطاقتي للتوّ). وتصبح «de» ‏«d'» قبل حرف متحرّك: «Il vient d'arriver». وتصريف venir في المضارع: je viens وtu viens وil vient وnous venons وvous venez وils viennent."
      ),
      table: {
        head: ["temps", "structure", "exemple"],
        rows: [
          ["passé récent", "venir de + infinitif", "je viens de manger"],
          ["présent en cours", "être en train de + infinitif", "je suis en train de manger"],
          ["futur proche", "aller + infinitif", "je vais manger"],
        ],
      },
      examples: [
        { fr: "Nous venons de recevoir votre courriel.", gloss: t("We have just received your email.", "Passé récent.", "تلقّينا بريدك الإلكتروني للتوّ.") },
        { fr: "Le train vient d'arriver.", gloss: t("The train has just arrived.", "d' devant une voyelle.", "وصل القطار للتوّ.") },
      ],
      watchOut: t(
        "Don't confuse « je viens de Paris » (I come from Paris) and « je viens de partir » (I have just left): the infinitive makes the difference.",
        "Ne confondez pas « je viens de Paris » (origine) et « je viens de partir » (passé récent) : c'est l'infinitif qui fait la différence.",
        "لا تخلط بين «je viens de Paris» (أنا من باريس) و«je viens de partir» (غادرت للتوّ): المصدر هو ما يصنع الفرق."
      ),
    },
    {
      id: "a2u11-g2",
      title: t("Action in progress: être en train de", "L'action en cours : être en train de", "الفعل الجاري: être en train de"),
      explanation: t(
        "To insist that an action is happening right now, use « être » + « en train de » + infinitive: « Je suis en train de bloquer votre carte ». In the past, use the imparfait: « J'étais en train de dormir quand le téléphone a sonné ». It's very common with the passé composé to tell an interruption.",
        "Pour insister sur le fait qu'une action se déroule en ce moment, on utilise « être » + « en train de » + infinitif : « Je suis en train de bloquer votre carte ». Au passé, on met être à l'imparfait : « J'étais en train de dormir quand le téléphone a sonné ». C'est très fréquent avec le passé composé pour raconter une interruption.",
        "للتأكيد على أن الفعل يجري الآن نستخدم «être» + «en train de» + المصدر: «Je suis en train de bloquer votre carte». وفي الماضي نضع être في الـimparfait: «J'étais en train de dormir quand le téléphone a sonné». وهذا شائع جدًا مع الماضي المركّب لرواية حدث قاطع."
      ),
      examples: [
        { fr: "Ne le dérange pas, il est en train de travailler.", gloss: t("Don't disturb him, he's working.", "Action en cours.", "لا تزعجه، إنه يعمل الآن.") },
        { fr: "J'étais en train de payer quand j'ai vu que ma carte n'était plus là.", gloss: t("I was paying when I saw my card was gone.", "Imparfait + passé composé.", "كنت أدفع حين رأيت أن بطاقتي لم تعد موجودة.") },
      ],
    },
    {
      id: "a2u11-g3",
      title: t("Formal email: openings and closings", "Le courriel formel : formules", "البريد الإلكتروني الرسمي: الصيغ"),
      explanation: t(
        "A formal email follows a fixed pattern. Opening: « Madame, Monsieur, » (unknown person) or « Madame Martin, ». First sentence: the reason (« Je vous écris car… », « Je me permets de vous contacter pour… »). Request with the conditional: « Pourriez-vous… ? », « Je voudrais savoir si… ». Closing: « Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. » or, shorter, « Cordialement, ». Use « vous » throughout.",
        "Un courriel formel suit un modèle fixe. Ouverture : « Madame, Monsieur, » (personne inconnue) ou « Madame Martin, ». Première phrase : la raison (« Je vous écris car… », « Je me permets de vous contacter pour… »). Demande au conditionnel : « Pourriez-vous… ? », « Je voudrais savoir si… ». Formule finale : « Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. » ou, plus court, « Cordialement, ». On vouvoie du début à la fin.",
        "يتبع البريد الرسمي نموذجًا ثابتًا. الافتتاح: «Madame, Monsieur,» (لشخص غير معروف) أو «Madame Martin,». الجملة الأولى: السبب («Je vous écris car…» و«Je me permets de vous contacter pour…»). الطلب بصيغة الشرط: «Pourriez-vous… ?» و«Je voudrais savoir si…». الختام: «Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.» أو بشكل أقصر «Cordialement,». ونستخدم «vous» من البداية إلى النهاية."
      ),
      examples: [
        { fr: "Madame, Monsieur, je vous écris car je viens de perdre ma carte d'étudiant.", gloss: t("Dear Sir or Madam, I am writing because I have just lost my student card.", "Ouverture + raison.", "سيدتي، سيدي، أكتب إليكم لأنني أضعت بطاقتي الطلابية للتوّ.") },
        { fr: "Pourriez-vous m'indiquer la marche à suivre ?", gloss: t("Could you tell me the procedure?", "Demande polie.", "هل يمكنكم أن تبيّنوا لي الإجراءات المتّبعة؟") },
      ],
    },
  ],
  pronunciation: {
    title: t("[j] in « viens », « travail », « fille »", "Le son [j] : « viens », « travail », « fille »", "صوت [j] في «viens» و«travail» و«fille»"),
    explanation: t(
      "The sound [j] (like the English « y » in « yes ») is written i + vowel (« viens », « bien »), -il / -ill after a vowel (« travail », « conseillère », « réveil ») and -ille after a consonant (« fille », « famille »). Exceptions: « ville », « mille », « tranquille » are pronounced with [l].",
      "Le son [j] (comme le « y » anglais de « yes ») s'écrit i + voyelle (« viens », « bien »), -il / -ill après une voyelle (« travail », « conseillère », « réveil ») et -ille après une consonne (« fille », « famille »). Exceptions : « ville », « mille », « tranquille » se prononcent avec [l].",
      "يُكتب صوت [j] (مثل الياء في «يد») بـi + حرف متحرّك («viens» و«bien»)، وبـ-il / -ill بعد حرف متحرّك («travail» و«conseillère» و«réveil»)، وبـ-ille بعد حرف ساكن («fille» و«famille»). والاستثناءات: «ville» و«mille» و«tranquille» تُنطق بصوت [l]."
    ),
    examples: ["Je viens de perdre ma carte.", "la conseillère", "mon travail", "la famille", "la ville tranquille"],
  },
  culture: {
    title: t("Emergency numbers and the pharmacy", "Numéros d'urgence et pharmacie", "أرقام الطوارئ والصيدلية"),
    body: t(
      "In France, the main emergency numbers are 15 (SAMU, medical emergency), 17 (police), 18 (firefighters) and 112 (European number, from any phone). For small problems, people go first to the pharmacy, recognisable by its green cross: pharmacists give advice and sell many medicines without a prescription. At night and on Sundays, a « pharmacie de garde » stays open. To block a bank card, there is a national number available 24 hours a day.",
      "En France, les principaux numéros d'urgence sont le 15 (SAMU, urgence médicale), le 17 (police), le 18 (pompiers) et le 112 (numéro européen, depuis n'importe quel téléphone). Pour les petits problèmes, on va d'abord à la pharmacie, reconnaissable à sa croix verte : les pharmaciens donnent des conseils et vendent beaucoup de médicaments sans ordonnance. La nuit et le dimanche, une pharmacie de garde reste ouverte. Pour faire opposition sur une carte bancaire, il existe un numéro national disponible 24 heures sur 24.",
      "في فرنسا أرقام الطوارئ الرئيسية هي 15 (SAMU للطوارئ الطبية) و17 (الشرطة) و18 (الإطفاء) و112 (الرقم الأوروبي، من أي هاتف). وللمشكلات البسيطة يتوجّه الناس أولًا إلى الصيدلية التي تُعرف بصليبها الأخضر: فالصيادلة يقدّمون النصائح ويبيعون كثيرًا من الأدوية من دون وصفة. وفي الليل وأيام الأحد تبقى «pharmacie de garde» (صيدلية مناوبة) مفتوحة. ولإيقاف بطاقة بنكية يوجد رقم وطني متاح على مدار 24 ساعة."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u11-p1", prompt: t("Recent past of « perdre » (je).", "Passé récent de « perdre » (je).", "الماضي القريب لـ«perdre» (je)."), sentence: "Je ___ de perdre mes clés.", answers: ["viens"] },
    { kind: "fill", id: "a2u11-p2", prompt: t("Recent past (nous).", "Passé récent (nous).", "الماضي القريب (nous)."), sentence: "Nous ___ de recevoir votre lettre.", answers: ["venons"] },
    { kind: "fill", id: "a2u11-p3", prompt: t("de or d'?", "de ou d' ?", "de أم d'؟"), sentence: "Elle vient ___arriver à la gare.", answers: ["d'"] },
    { kind: "fill", id: "a2u11-p4", prompt: t("Action in progress (ils).", "Action en cours (ils).", "فعل جارٍ (ils)."), sentence: "Ils sont en ___ de remplir le formulaire.", answers: ["train"] },
    { kind: "fill", id: "a2u11-p5", prompt: t("Imparfait of être (je).", "Imparfait de être (je).", "الـimparfait لـêtre (je)."), sentence: "J'___ en train de dormir quand on a sonné.", answers: ["étais"] },
    { kind: "fill", id: "a2u11-p6", prompt: t("Where does it hurt? (à + la)", "Où avez-vous mal ? (à + la)", "أين يؤلمك؟ (à + la)"), sentence: "J'ai mal ___ gorge.", answers: ["à la"] },
    { kind: "choice", id: "a2u11-p7", prompt: t("Opening of a formal email to someone you don't know:", "Début d'un courriel formel à une personne inconnue :", "افتتاح بريد رسمي لشخص لا تعرفه:"), options: ["Salut,", "Madame, Monsieur,", "Coucou,"], correctIndex: 1 },
    { kind: "choice", id: "a2u11-p8", prompt: t("Short formal closing:", "Formule finale courte et formelle :", "ختام رسمي قصير:"), options: ["Bisous,", "À plus,", "Cordialement,"], correctIndex: 2 },
    { kind: "choice", id: "a2u11-p9", prompt: t("Number for a medical emergency in France:", "Numéro pour une urgence médicale en France :", "رقم الطوارئ الطبية في فرنسا:"), options: ["le 15", "le 17", "le 18"], correctIndex: 0 },
    { kind: "order", id: "a2u11-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je viens de perdre ma carte bancaire." },
    { kind: "order", id: "a2u11-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Pourriez-vous m'envoyer le formulaire ?" },
  ],
  production: {
    prompt: t(
      "Write a formal email (80–100 words) to your language school: you have just been ill and you missed an exam. Explain what happened, ask if you can take the exam another day and what documents you need to send.",
      "Écrivez un courriel formel (80 à 100 mots) à votre école de langues : vous venez d'être malade et vous avez manqué un examen. Expliquez ce qui s'est passé, demandez si vous pouvez passer l'examen un autre jour et quels documents vous devez envoyer.",
      "اكتب بريدًا إلكترونيًا رسميًا (80 إلى 100 كلمة) إلى مدرسة اللغات التي تدرس فيها: كنت مريضًا للتوّ وفاتك امتحان. اشرح ما حدث، واسأل إن كان بإمكانك أداء الامتحان في يوم آخر وما الوثائق التي يجب أن ترسلها."
    ),
    model: "Madame, Monsieur,\nJe suis étudiante en niveau A2 dans votre école. Je vous écris car je n'ai pas pu passer l'examen de lundi dernier. Dimanche soir, j'avais beaucoup de fièvre et je suis allée aux urgences. Le médecin m'a demandé de rester chez moi pendant trois jours. Je viens de recevoir le certificat médical. Pourriez-vous me dire si je peux passer l'examen un autre jour ? Je voudrais aussi savoir si je dois vous envoyer le certificat par courriel ou l'apporter au secrétariat.\nDans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.\nInès Benali",
    checklist: [
      t("I use a formal opening and closing.", "J'utilise une formule d'ouverture et une formule finale formelles.", "استخدمت صيغة افتتاح وصيغة ختام رسميتين."),
      t("I explain the reason in the first lines.", "J'explique la raison dès les premières lignes.", "شرحت السبب من الأسطر الأولى."),
      t("I tell the events in the past (passé composé, imparfait, venir de).", "Je raconte les faits au passé (passé composé, imparfait, venir de).", "رويت الأحداث بالماضي (passé composé وimparfait وvenir de)."),
      t("I make my requests with the conditional and « vous ».", "Je fais mes demandes au conditionnel et avec « vous ».", "قدّمت طلباتي بصيغة الشرط وباستخدام «vous»."),
    ],
  },
  task: {
    title: t("Problem solved", "Problème réglé", "المشكلة حُلّت"),
    brief: t(
      "Choose one situation: you have just lost your passport, you feel ill on holiday, or your card was refused in a shop. Role-play the conversation with the right person (police, pharmacist, bank adviser): explain what just happened, answer their questions and understand the next steps.",
      "Choisissez une situation : vous venez de perdre votre passeport, vous êtes malade en vacances, ou votre carte a été refusée dans un magasin. Jouez la conversation avec la bonne personne (police, pharmacien, conseiller bancaire) : expliquez ce qui vient d'arriver, répondez à ses questions et comprenez les prochaines étapes.",
      "اختر موقفًا: أضعت جواز سفرك للتوّ، أو مرضت في العطلة، أو رُفضت بطاقتك في متجر. مثّل المحادثة مع الشخص المناسب (الشرطة أو الصيدلي أو موظف البنك): اشرح ما حدث للتوّ، وأجب عن أسئلته، وافهم الخطوات التالية."
    ),
    checklist: [
      t("I explained the problem with « venir de ».", "J'ai expliqué le problème avec « venir de ».", "شرحت المشكلة باستخدام «venir de»."),
      t("I gave the necessary details (time, place, symptoms…).", "J'ai donné les détails nécessaires (heure, lieu, symptômes…).", "قدّمت التفاصيل اللازمة (الوقت والمكان والأعراض…)."),
      t("I repeated the next steps to check I understood.", "J'ai répété les prochaines étapes pour vérifier que j'avais compris.", "كرّرت الخطوات التالية للتأكد من أنني فهمت."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u11-t1", prompt: t("« I have just eaten » =", "« I have just eaten » =", "«تناولت الطعام للتوّ» ="), options: ["Je vais manger.", "Je viens de manger.", "Je suis en train de manger."], correctIndex: 1 },
    { kind: "choice", id: "a2u11-t2", prompt: t("« Ils ___ de partir. »", "« Ils ___ de partir. »", "«Ils ___ de partir.»"), options: ["viennent", "venent", "viens"], correctIndex: 0 },
    { kind: "choice", id: "a2u11-t3", prompt: t("Which sentence expresses an action in progress?", "Quelle phrase exprime une action en cours ?", "أي جملة تعبّر عن فعل جارٍ؟"), options: ["Elle vient de lire.", "Elle va lire.", "Elle est en train de lire."], correctIndex: 2 },
    { kind: "choice", id: "a2u11-t4", prompt: t("« J'étais en train de cuisiner quand le téléphone ___. »", "« J'étais en train de cuisiner quand le téléphone ___. »", "«J'étais en train de cuisiner quand le téléphone ___.»"), options: ["sonnait", "a sonné", "sonnera"], correctIndex: 1 },
    { kind: "choice", id: "a2u11-t5", prompt: t("« Je viens de Tunis » means…", "« Je viens de Tunis » signifie…", "«Je viens de Tunis» تعني…"), optionsL10n: { en: ["I come from Tunis.", "I have just left Tunis.", "I'm going to Tunis."], fr: ["Je suis originaire de Tunis.", "J'ai quitté Tunis il y a une minute.", "Je vais à Tunis."], ar: ["أنا من تونس.", "غادرت تونس للتوّ.", "أنا ذاهب إلى تونس."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u11-t6", prompt: t("« J'ai mal ___ ventre. »", "« J'ai mal ___ ventre. »", "«J'ai mal ___ ventre.»"), options: ["au", "à la", "aux"], correctIndex: 0 },
    { kind: "choice", id: "a2u11-t7", prompt: t("The doctor's paper for medicines:", "Le papier du médecin pour les médicaments :", "ورقة الطبيب الخاصة بالأدوية:"), options: ["le formulaire", "l'ordonnance", "le guichet"], correctIndex: 1 },
    { kind: "choice", id: "a2u11-t8", prompt: t("In a formal email, the request is usually in…", "Dans un courriel formel, la demande est souvent…", "في البريد الرسمي يكون الطلب عادةً…"), optionsL10n: { en: ["the conditional", "the imperative", "the future"], fr: ["au conditionnel", "à l'impératif", "au futur"], ar: ["بصيغة الشرط", "بصيغة الأمر", "بصيغة المستقبل"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u11-t9", prompt: t("In which word is « ill » pronounced [l]?", "Dans quel mot « ill » se prononce-t-il [l] ?", "في أي كلمة تُنطق «ill» بصوت [l]؟"), options: ["la fille", "la ville", "la famille"], correctIndex: 1 },
    { kind: "choice", id: "a2u11-t10", prompt: t("A pharmacy open at night or on Sunday is…", "Une pharmacie ouverte la nuit ou le dimanche, c'est…", "الصيدلية المفتوحة ليلًا أو يوم الأحد هي…"), options: ["une pharmacie de garde", "une pharmacie de nuit fermée", "une parapharmacie"], correctIndex: 0 },
  ],
  passRatio: 0.7,
  replaces: ["fr-day-bank", "fr-day-emergency", "fr-a2-deep-health"],
};
