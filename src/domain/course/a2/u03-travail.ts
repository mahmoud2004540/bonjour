import { l10n as t, type CourseUnit } from "../types";

export const A2_U03: CourseUnit = {
  id: "fr-a2-u03-travail",
  level: "A2",
  order: 3,
  title: t("The world of work", "Le monde du travail", "عالم العمل"),
  theme: t(
    "Job offers, CVs and job interviews",
    "Offres d'emploi, CV et entretien d'embauche",
    "عروض العمل والسيرة الذاتية ومقابلة التوظيف"
  ),
  canDo: [
    t("I can understand a simple job advert.", "Je peux comprendre une offre d'emploi simple.", "أستطيع أن أفهم عرض عمل بسيطًا."),
    t("I can talk about my experience, skills and qualities.", "Je peux parler de mon expérience, de mes compétences et de mes qualités.", "أستطيع أن أتحدث عن خبرتي ومهاراتي وصفاتي."),
    t("I can answer and ask questions in a job interview.", "Je peux répondre à des questions et en poser pendant un entretien.", "أستطيع أن أجيب عن الأسئلة وأطرحها في مقابلة عمل."),
    t("I can avoid repetition with object pronouns (le, la, les).", "Je peux éviter les répétitions avec les pronoms COD (le, la, les).", "أستطيع أن أتجنّب التكرار بضمائر المفعول به (le وla وles)."),
  ],
  context: t(
    "Samira Ouali has applied for a job as a travel adviser in an agency in Lyon. Today she has an interview with the manager, Mr Lambert.",
    "Samira Ouali a posé sa candidature pour un poste de conseillère dans une agence de voyages, à Lyon. Aujourd'hui, elle a un entretien avec le directeur, M. Lambert.",
    "تقدّمت سميرة والي لوظيفة مستشارة في وكالة سفر بمدينة ليون. واليوم لديها مقابلة مع المدير السيد لامبير."
  ),
  dialogue: {
    title: t("The job interview", "L'entretien d'embauche", "مقابلة التوظيف"),
    setting: t("A travel agency office", "Le bureau d'une agence de voyages", "مكتب وكالة سفر"),
    lines: [
      { speaker: "M. Lambert", fr: "Bonjour, madame Ouali. Asseyez-vous, je vous en prie." },
      { speaker: "Samira", fr: "Bonjour, monsieur. Merci." },
      { speaker: "M. Lambert", fr: "J'ai lu votre CV avec attention. Pourquoi voulez-vous travailler chez nous ?" },
      { speaker: "Samira", fr: "Votre agence organise des voyages au Maghreb et en Europe. Je connais bien ces pays et j'adore conseiller les clients." },
      { speaker: "M. Lambert", fr: "Parlez-moi de votre expérience." },
      { speaker: "Samira", fr: "J'ai travaillé deux ans dans une agence à Marseille. Je préparais les dossiers des clients et je les conseillais au téléphone." },
      { speaker: "M. Lambert", fr: "Quelles langues parlez-vous ?" },
      { speaker: "Samira", fr: "L'arabe, le français et l'anglais. J'apprends aussi l'espagnol : je le comprends bien, mais je le parle encore un peu." },
      { speaker: "M. Lambert", fr: "Très bien. Selon vous, quelles sont vos qualités ?" },
      { speaker: "Samira", fr: "Je suis organisée et patiente, et je sais travailler en équipe." },
      { speaker: "M. Lambert", fr: "Et un défaut ?" },
      { speaker: "Samira", fr: "Je suis parfois un peu perfectionniste." },
      { speaker: "M. Lambert", fr: "Le poste est un CDI à temps plein, trente-cinq heures par semaine. Quand pouvez-vous commencer ?" },
      { speaker: "Samira", fr: "Le mois prochain. Est-ce que je peux vous poser une question ? Faut-il travailler le samedi ?" },
      { speaker: "M. Lambert", fr: "Un samedi sur deux. Nous vous appelons avant la fin de la semaine." },
      { speaker: "Samira", fr: "Merci beaucoup, monsieur. Au revoir." },
    ],
  },
  comprehension: [
    { kind: "choice", id: "a2u03-c1", prompt: t("What job does Samira apply for?", "Pour quel poste Samira est-elle candidate ?", "لأي وظيفة تتقدّم سميرة؟"), optionsL10n: { en: ["Travel adviser", "Secretary", "Tour guide"], fr: ["Conseillère en voyages", "Secrétaire", "Guide touristique"], ar: ["مستشارة سفر", "سكرتيرة", "مرشدة سياحية"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u03-c2", prompt: t("What did she do in Marseille?", "Que faisait-elle à Marseille ?", "ماذا كانت تفعل في مرسيليا؟"), optionsL10n: { en: ["She prepared files and advised clients.", "She organised trips abroad.", "She taught languages."], fr: ["Elle préparait les dossiers et conseillait les clients.", "Elle organisait des voyages à l'étranger.", "Elle enseignait les langues."], ar: ["كانت تُعدّ الملفات وتنصح العملاء.", "كانت تنظّم رحلات إلى الخارج.", "كانت تدرّس اللغات."] }, correctIndex: 0 },
    { kind: "choice", id: "a2u03-c3", prompt: t("What kind of contract is it?", "Quel type de contrat est proposé ?", "ما نوع العقد المعروض؟"), optionsL10n: { en: ["Permanent, full-time", "Temporary, part-time", "Internship"], fr: ["Un CDI à temps plein", "Un CDD à temps partiel", "Un stage"], ar: ["عقد دائم بدوام كامل", "عقد مؤقت بدوام جزئي", "تدريب"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u03-c4", prompt: t("Does she have to work on Saturdays?", "Doit-elle travailler le samedi ?", "هل يجب أن تعمل يوم السبت؟"), optionsL10n: { en: ["Never", "Every Saturday", "Every other Saturday"], fr: ["Jamais", "Tous les samedis", "Un samedi sur deux"], ar: ["أبدًا", "كل سبت", "سبت بعد سبت"] }, correctIndex: 2 },
  ],
  vocabulary: [
    {
      title: t("Looking for a job", "Chercher un emploi", "البحث عن عمل"),
      items: [
        { fr: "une offre d'emploi", gender: "f", meaning: t("job advert", "annonce pour un poste", "عرض عمل") },
        { fr: "poser sa candidature", meaning: t("to apply", "proposer sa candidature pour un poste", "يتقدّم بطلب توظيف") },
        { fr: "le CV", gender: "m", meaning: t("CV, résumé", "curriculum vitae", "السيرة الذاتية") },
        { fr: "la lettre de motivation", gender: "f", meaning: t("cover letter", "lettre qui explique pourquoi on postule", "رسالة التحفيز") },
        { fr: "l'entretien (d'embauche)", gender: "m", meaning: t("(job) interview", "rendez-vous avec le recruteur", "مقابلة التوظيف") },
        { fr: "le poste", gender: "m", meaning: t("position, job", "emploi précis", "الوظيفة / المنصب") },
        { fr: "un CDI / un CDD", gender: "m", meaning: t("permanent / fixed-term contract", "contrat à durée indéterminée / déterminée", "عقد دائم / عقد محدّد المدة") },
        { fr: "à temps plein / à temps partiel", meaning: t("full-time / part-time", "durée du travail", "بدوام كامل / بدوام جزئي") },
        { fr: "le salaire", gender: "m", meaning: t("salary", "argent reçu pour le travail", "الراتب") },
        { fr: "le stage", gender: "m", meaning: t("internship", "période de formation en entreprise", "التدريب العملي") },
      ],
    },
    {
      title: t("Qualities and skills", "Qualités et compétences", "الصفات والمهارات"),
      items: [
        { fr: "organisé / organisée", meaning: t("organised", "qui planifie bien", "منظّم / منظّمة") },
        { fr: "patient / patiente", meaning: t("patient", "qui sait attendre, calme", "صبور / صبورة") },
        { fr: "dynamique", meaning: t("energetic", "plein d'énergie", "نشيط / نشيطة") },
        { fr: "sérieux / sérieuse", meaning: t("reliable, serious", "fiable", "جادّ / جادّة") },
        { fr: "travailler en équipe", meaning: t("to work in a team", "collaborer avec d'autres", "يعمل ضمن فريق") },
        { fr: "une qualité / un défaut", meaning: t("a strength / a weakness", "point fort / point faible", "صفة إيجابية / عيب") },
        { fr: "l'expérience", gender: "f", meaning: t("experience", "ce qu'on a déjà fait", "الخبرة") },
      ],
    },
  ],
  grammar: [
    {
      id: "a2u03-g1",
      title: t("Direct object pronouns: me, te, le, la, nous, vous, les", "Les pronoms COD : me, te, le, la, nous, vous, les", "ضمائر المفعول به المباشر: me وte وle وla وnous وvous وles"),
      explanation: t(
        "A direct object pronoun replaces a noun that follows the verb without a preposition. It goes before the conjugated verb: « Je conseille les clients » → « Je les conseille ». Le and la become l' before a vowel: « Je l'appelle ». In the negative: « Je ne les connais pas ». With an infinitive, it goes before the infinitive: « Je vais le lire ». In the passé composé, it goes before the auxiliary: « Je l'ai lu ».",
        "Le pronom COD remplace un nom placé après le verbe sans préposition. Il se place avant le verbe conjugué : « Je conseille les clients » → « Je les conseille ». Le et la deviennent l' devant une voyelle : « Je l'appelle ». À la forme négative : « Je ne les connais pas ». Avec un infinitif, il se place devant l'infinitif : « Je vais le lire ». Au passé composé, devant l'auxiliaire : « Je l'ai lu ».",
        "يحلّ ضمير المفعول به المباشر محلّ اسم يأتي بعد الفعل من دون حرف جر، ويوضع قبل الفعل المصرّف: «Je conseille les clients» ← «Je les conseille». وتصبح le وla على شكل l' قبل حرف متحرّك: «Je l'appelle». وفي النفي: «Je ne les connais pas». ومع المصدر يوضع قبل المصدر: «Je vais le lire». وفي الماضي المركّب قبل الفعل المساعد: «Je l'ai lu»."
      ),
      table: {
        head: ["", "pronom", "exemple"],
        rows: [
          ["moi", "me (m')", "Il me rappelle demain."],
          ["toi", "te (t')", "Je t'attends."],
          ["le CV", "le (l')", "Je le relis."],
          ["la lettre", "la (l')", "Elle l'envoie."],
          ["nous", "nous", "Ils nous invitent."],
          ["vous", "vous", "Nous vous appelons."],
          ["les clients", "les", "Je les conseille."],
        ],
      },
      examples: [
        { fr: "Votre CV ? Je l'ai lu avec attention.", gloss: t("Your CV? I read it carefully.", "l' + passé composé.", "سيرتك الذاتية؟ قرأتها بعناية.") },
        { fr: "L'espagnol, je le comprends, mais je ne le parle pas bien.", gloss: t("Spanish — I understand it, but I don't speak it well.", "le + négation.", "الإسبانية؟ أفهمها لكني لا أتحدثها جيدًا.") },
      ],
      watchOut: t(
        "Don't put the pronoun after the verb as in English: « Je les appelle », not « J'appelle les ».",
        "Ne placez pas le pronom après le verbe : « Je les appelle », pas « J'appelle les ».",
        "لا تضع الضمير بعد الفعل: «Je les appelle» وليس «J'appelle les»."
      ),
    },
    {
      id: "a2u03-g2",
      title: t("Formal questions", "Les questions formelles", "الأسئلة الرسمية"),
      explanation: t(
        "In interviews and formal situations, French often uses inversion: verb – hyphen – pronoun. « Vous parlez anglais ? » → « Parlez-vous anglais ? ». With a question word: « Quand pouvez-vous commencer ? ». With il / elle, if the verb ends with a vowel, add -t-: « Parle-t-il espagnol ? », « Faut-il travailler le samedi ? ». « Quel / quelle / quels / quelles » agree with the noun: « Quelles sont vos qualités ? ».",
        "Pendant un entretien et dans les situations formelles, on utilise souvent l'inversion : verbe – trait d'union – pronom. « Vous parlez anglais ? » → « Parlez-vous anglais ? ». Avec un mot interrogatif : « Quand pouvez-vous commencer ? ». Avec il / elle, si le verbe finit par une voyelle, on ajoute -t- : « Parle-t-il espagnol ? », « Faut-il travailler le samedi ? ». « Quel / quelle / quels / quelles » s'accordent avec le nom : « Quelles sont vos qualités ? ».",
        "في المقابلات والمواقف الرسمية تستخدم الفرنسية غالبًا القلب: الفعل – شَرطة – الضمير. «Vous parlez anglais ?» ← «Parlez-vous anglais ?». ومع أداة استفهام: «Quand pouvez-vous commencer ?». ومع il / elle، إذا انتهى الفعل بحرف متحرّك نضيف -t-: «Parle-t-il espagnol ?» و«Faut-il travailler le samedi ?». وتتوافق «quel / quelle / quels / quelles» مع الاسم: «Quelles sont vos qualités ?»."
      ),
      examples: [
        { fr: "Pourquoi voulez-vous travailler chez nous ?", gloss: t("Why do you want to work for us?", "Inversion avec pourquoi.", "لماذا تريد أن تعمل لدينا؟") },
        { fr: "Quel est le salaire ?", gloss: t("What is the salary?", "quel + nom masculin.", "كم الراتب؟") },
        { fr: "A-t-elle de l'expérience ?", gloss: t("Does she have experience?", "-t- entre deux voyelles.", "هل لديها خبرة؟") },
      ],
    },
    {
      id: "a2u03-g3",
      title: t("Savoir or connaître?", "Savoir ou connaître ?", "savoir أم connaître؟"),
      explanation: t(
        "Both mean « to know ». Savoir: a fact, or a skill + infinitive — « Je sais travailler en équipe », « Je sais où est le bureau ». Connaître: people, places, things you are familiar with (+ noun) — « Je connais bien ces pays », « Vous connaissez M. Lambert ? ».",
        "Les deux veulent dire « avoir une connaissance ». Savoir : une information, ou une compétence + infinitif — « Je sais travailler en équipe », « Je sais où est le bureau ». Connaître : des personnes, des lieux, des choses familières (+ nom) — « Je connais bien ces pays », « Vous connaissez M. Lambert ? ».",
        "كلاهما يعني «يعرف». savoir: لمعلومة، أو لمهارة + مصدر — «Je sais travailler en équipe» (أعرف كيف أعمل ضمن فريق)، و«Je sais où est le bureau». أما connaître: فللأشخاص والأماكن والأشياء المألوفة (+ اسم) — «Je connais bien ces pays» و«Vous connaissez M. Lambert ?»."
      ),
      table: {
        head: ["", "savoir", "connaître"],
        rows: [
          ["je", "je sais", "je connais"],
          ["tu", "tu sais", "tu connais"],
          ["il / elle", "il sait", "elle connaît"],
          ["nous", "nous savons", "nous connaissons"],
          ["vous", "vous savez", "vous connaissez"],
          ["ils / elles", "ils savent", "elles connaissent"],
        ],
      },
      examples: [
        { fr: "Je sais utiliser ce logiciel.", gloss: t("I know how to use this software.", "savoir + infinitif.", "أعرف كيف أستخدم هذا البرنامج.") },
        { fr: "Elle connaît très bien Lyon.", gloss: t("She knows Lyon very well.", "connaître + lieu.", "هي تعرف ليون جيدًا جدًا.") },
      ],
    },
  ],
  pronunciation: {
    title: t("Inversion and the linking -t-", "L'inversion et le -t- de liaison", "القلب وحرف -t- الواصل"),
    explanation: t(
      "In inverted questions, the verb and pronoun form one sound group, and the voice rises at the end: « Parlez-vous anglais ? ». The added -t- (or the final t of the verb) is always pronounced: « Parle-t-il » [paʁl.til], « Faut-il » [fo.til], « Vient-elle » [vjɛ̃.tɛl].",
      "Dans les questions avec inversion, le verbe et le pronom forment un seul groupe et la voix monte à la fin : « Parlez-vous anglais ? ». Le -t- ajouté (ou le t final du verbe) se prononce toujours : « Parle-t-il » [paʁl.til], « Faut-il » [fo.til], « Vient-elle » [vjɛ̃.tɛl].",
      "في الأسئلة المقلوبة يكوّن الفعل والضمير مجموعة صوتية واحدة، ويرتفع الصوت في النهاية: «Parlez-vous anglais ?». أما حرف -t- المضاف (أو حرف t الأخير في الفعل) فيُنطق دائمًا: «Parle-t-il» [paʁl.til]، و«Faut-il» [fo.til]، و«Vient-elle» [vjɛ̃.tɛl]."
    ),
    examples: ["Parlez-vous anglais ?", "Quand pouvez-vous commencer ?", "Parle-t-il espagnol ?", "Faut-il travailler le samedi ?", "Vient-elle demain ?"],
  },
  culture: {
    title: t("Work in France: key words", "Le travail en France : les mots clés", "العمل في فرنسا: كلمات أساسية"),
    body: t(
      "A « CDI » (contrat à durée indéterminée) is a permanent contract; a « CDD » is fixed-term. New contracts often start with a « période d'essai » (trial period). The « SMIC » is the national minimum wage, revised regularly. Job seekers can register with « France Travail » (formerly Pôle emploi), the public employment service. A French CV is usually one page, and a short « lettre de motivation » is still often expected. In interviews, people use « vous » and wait to be invited to sit down.",
      "Un CDI (contrat à durée indéterminée) est un contrat permanent ; un CDD est à durée déterminée. Les nouveaux contrats commencent souvent par une période d'essai. Le SMIC est le salaire minimum national, revalorisé régulièrement. Les demandeurs d'emploi peuvent s'inscrire à France Travail (anciennement Pôle emploi), le service public de l'emploi. Un CV français fait en général une page, et une courte lettre de motivation est encore souvent demandée. En entretien, on vouvoie et on attend d'être invité à s'asseoir.",
      "عقد «CDI» عقد دائم، أما «CDD» فمحدّد المدة. وكثيرًا ما تبدأ العقود الجديدة بـ«période d'essai» (فترة تجربة). و«SMIC» هو الحدّ الأدنى الوطني للأجور، ويُراجَع بانتظام. ويمكن للباحثين عن عمل التسجيل في «France Travail» (المعروفة سابقًا باسم Pôle emploi)، وهي الهيئة العامة للتشغيل. وتكون السيرة الذاتية الفرنسية عادةً صفحة واحدة، وما زالت «lettre de motivation» قصيرة مطلوبة في الغالب. وفي المقابلات تُستخدم «vous»، وينتظر المرشّح أن يُدعى للجلوس."
    ),
  },
  practice: [
    { kind: "fill", id: "a2u03-p1", prompt: t("Replace « le CV » with a pronoun.", "Remplacez « le CV » par un pronom.", "استبدل «le CV» بضمير."), sentence: "Je relis le CV. → Je ___ relis.", answers: ["le"] },
    { kind: "fill", id: "a2u03-p2", prompt: t("Replace « les clients ».", "Remplacez « les clients ».", "استبدل «les clients»."), sentence: "Elle appelle les clients. → Elle ___ appelle.", answers: ["les"] },
    { kind: "fill", id: "a2u03-p3", prompt: t("Replace « la lettre » (vowel!).", "Remplacez « la lettre » (voyelle !).", "استبدل «la lettre» (حرف متحرّك!)."), sentence: "J'envoie la lettre. → Je ___envoie.", answers: ["l'"] },
    { kind: "fill", id: "a2u03-p4", prompt: t("Pronoun with an infinitive.", "Pronom avec un infinitif.", "الضمير مع المصدر."), sentence: "Je vais lire l'offre. → Je vais ___ lire.", answers: ["la"] },
    { kind: "fill", id: "a2u03-p5", prompt: t("Make the question formal.", "Posez la question avec inversion.", "صِغ السؤال بالقلب."), sentence: "Vous parlez anglais ? → ___ anglais ?", answers: ["parlez-vous"] },
    { kind: "fill", id: "a2u03-p6", prompt: t("Add the linking letter.", "Ajoutez la lettre de liaison.", "أضف حرف الوصل."), sentence: "Parle-___-il espagnol ?", answers: ["t"] },
    { kind: "fill", id: "a2u03-p7", prompt: t("Savoir or connaître?", "Savoir ou connaître ?", "savoir أم connaître؟"), sentence: "Je ___ bien cette ville.", answers: ["connais"] },
    { kind: "fill", id: "a2u03-p8", prompt: t("Savoir or connaître?", "Savoir ou connaître ?", "savoir أم connaître؟"), sentence: "Vous ___ conduire ?", answers: ["savez"] },
    { kind: "choice", id: "a2u03-p9", prompt: t("« ___ sont vos horaires ? »", "« ___ sont vos horaires ? »", "«___ sont vos horaires ?»"), options: ["Quel", "Quels", "Quelles"], correctIndex: 1, explanation: t("horaires is masculine plural.", "« horaires » est masculin pluriel.", "«horaires» مذكّر جمع.") },
    { kind: "order", id: "a2u03-p10", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Quand pouvez-vous commencer ?" },
    { kind: "order", id: "a2u03-p11", prompt: t("Put the words in order.", "Remettez les mots dans l'ordre.", "رتّب الكلمات."), answer: "Je ne les connais pas." },
  ],
  production: {
    prompt: t(
      "Write a short cover letter (80–100 words) for a job you would like: say which job, why you want it, your experience and two qualities, and ask for an interview.",
      "Écrivez une courte lettre de motivation (80 à 100 mots) pour un poste qui vous intéresse : dites quel poste, pourquoi vous le voulez, votre expérience et deux qualités, et demandez un entretien.",
      "اكتب رسالة تحفيز قصيرة (80 إلى 100 كلمة) لوظيفة تهمّك: اذكر الوظيفة، ولماذا تريدها، وخبرتك، وصفتين من صفاتك، واطلب مقابلة."
    ),
    model: "Madame, Monsieur,\nJe vous écris pour poser ma candidature au poste de vendeur dans votre librairie. J'adore les livres et je connais bien la littérature jeunesse. J'ai travaillé un an dans une librairie à Tunis : je conseillais les clients et je préparais les commandes. Je suis organisé et dynamique, et je sais travailler en équipe. Je suis disponible à partir du mois prochain. Je serais heureux de vous rencontrer pour un entretien.\nVeuillez agréer, Madame, Monsieur, mes salutations distinguées.\nAdam Trabelsi",
    checklist: [
      t("I use a formal opening and closing (Madame, Monsieur / salutations distinguées).", "J'utilise une formule d'appel et une formule finale formelles.", "استخدمت عبارة افتتاح وختام رسميتين."),
      t("I describe my experience in the past.", "Je décris mon expérience au passé.", "وصفت خبرتي بصيغة الماضي."),
      t("I give two qualities and one skill with « je sais… ».", "Je donne deux qualités et une compétence avec « je sais… ».", "ذكرت صفتين ومهارة واحدة بعبارة «je sais…»."),
      t("I use « vous » throughout.", "J'utilise « vous » du début à la fin.", "استخدمت «vous» من البداية إلى النهاية."),
    ],
  },
  task: {
    title: t("Mock job interview", "Entretien d'embauche simulé", "مقابلة توظيف تجريبية"),
    brief: t(
      "Find a real job advert in French (France Travail, Indeed, a company website). With a partner (or recording both roles), play a 3-minute interview: the recruiter asks five formal questions; the candidate answers with experience, qualities and one question about the job.",
      "Trouvez une vraie offre d'emploi en français (France Travail, Indeed, le site d'une entreprise). Avec un partenaire (ou en enregistrant les deux rôles), jouez un entretien de 3 minutes : le recruteur pose cinq questions formelles ; le candidat répond avec son expérience, ses qualités et une question sur le poste.",
      "ابحث عن عرض عمل حقيقي بالفرنسية (France Travail أو Indeed أو موقع شركة). ومع شريك (أو بتسجيل الدورين)، أدِّ مقابلة مدتها 3 دقائق: يطرح المسؤول عن التوظيف خمسة أسئلة رسمية، ويجيب المرشّح بذكر خبرته وصفاته وسؤال عن الوظيفة."
    ),
    checklist: [
      t("I used inversion in at least two questions.", "J'ai utilisé l'inversion dans au moins deux questions.", "استخدمت القلب في سؤالين على الأقل."),
      t("I talked about my past experience.", "J'ai parlé de mon expérience passée.", "تحدّثت عن خبرتي السابقة."),
      t("I asked a question about the job (hours, contract, start date).", "J'ai posé une question sur le poste (horaires, contrat, date de début).", "طرحت سؤالًا عن الوظيفة (الدوام، العقد، تاريخ البدء)."),
    ],
  },
  test: [
    { kind: "choice", id: "a2u03-t1", prompt: t("« Tu connais Paul ? — Oui, je ___ connais. »", "« Tu connais Paul ? — Oui, je ___ connais. »", "«Tu connais Paul ? — Oui, je ___ connais.»"), options: ["le", "la", "lui"], correctIndex: 0 },
    { kind: "choice", id: "a2u03-t2", prompt: t("« Tes lettres ? Je ___ ai envoyées. »", "« Tes lettres ? Je ___ ai envoyées. »", "«Tes lettres ? Je ___ ai envoyées.»"), options: ["les", "leur", "la"], correctIndex: 0 },
    { kind: "choice", id: "a2u03-t3", prompt: t("Choose the correct sentence.", "Choisissez la phrase correcte.", "اختر الجملة الصحيحة."), options: ["J'appelle les demain.", "Je les appelle demain.", "Je appelle les demain."], correctIndex: 1 },
    { kind: "choice", id: "a2u03-t4", prompt: t("Negative: « Je la vois. »", "Négation : « Je la vois. »", "النفي: «Je la vois.»"), options: ["Je ne la vois pas.", "Je la ne vois pas.", "Je ne vois pas la."], correctIndex: 0 },
    { kind: "choice", id: "a2u03-t5", prompt: t("Formal question:", "Question formelle :", "سؤال رسمي:"), options: ["Pourquoi vous voulez ce poste ?", "Pourquoi voulez-vous ce poste ?", "Pourquoi voulez vous-ce poste ?"], correctIndex: 1 },
    { kind: "choice", id: "a2u03-t6", prompt: t("« ___-il de l'expérience ? »", "« ___-il de l'expérience ? »", "«___-il de l'expérience ?»"), options: ["A", "A-t", "As"], correctIndex: 1 },
    { kind: "choice", id: "a2u03-t7", prompt: t("« Je ___ parler trois langues. »", "« Je ___ parler trois langues. »", "«Je ___ parler trois langues.»"), options: ["connais", "sais", "conais"], correctIndex: 1 },
    { kind: "choice", id: "a2u03-t8", prompt: t("« Vous ___ ce quartier ? »", "« Vous ___ ce quartier ? »", "«Vous ___ ce quartier ?»"), options: ["savez", "connaissez", "connaisez"], correctIndex: 1 },
    { kind: "choice", id: "a2u03-t9", prompt: t("A « CDD » is…", "Un CDD, c'est…", "عقد «CDD» هو…"), optionsL10n: { en: ["a fixed-term contract", "a permanent contract", "an internship"], fr: ["un contrat à durée déterminée", "un contrat permanent", "un stage"], ar: ["عقد محدّد المدة", "عقد دائم", "تدريب عملي"] }, correctIndex: 0 },
    { kind: "choice", id: "a2u03-t10", prompt: t("The French public employment service is called…", "Le service public de l'emploi s'appelle…", "اسم الهيئة العامة للتشغيل في فرنسا…"), options: ["France Travail", "la CAF", "la SNCF"], correctIndex: 0 },
  ],
  passRatio: 0.7,
};
