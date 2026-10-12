/**
 * DELF / DALF–aligned exam readiness (on-site practice).
 * Accredited certificates are issued by authorized centers/schools — not by this site alone.
 */

export type ExamLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
export type ExamSkill = "listening" | "reading" | "writing" | "speaking";

export type MockItem = {
  id: string;
  skill: ExamSkill;
  prompt: { en: string; fr: string; ar: string };
  stimulus?: string;
  options?: { en: string[]; fr: string[]; ar: string[] };
  correctIndex?: number;
  modelHint?: { en: string; fr: string; ar: string };
};

export type ExamBlueprint = {
  level: ExamLevel;
  officialName: string;
  durationMinutes: number;
  passNote: { en: string; fr: string; ar: string };
  skills: {
    skill: ExamSkill;
    title: { en: string; fr: string; ar: string };
    whatYouDo: { en: string; fr: string; ar: string };
  }[];
  readinessChecklist: { en: string[]; fr: string[]; ar: string[] };
  mock: MockItem[];
};

export const EXAM_LEVELS: ExamLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function skillBlock(
  skill: ExamSkill,
  en: string,
  fr: string,
  ar: string,
  doEn: string,
  doFr: string,
  doAr: string
) {
  return {
    skill,
    title: { en, fr, ar },
    whatYouDo: { en: doEn, fr: doFr, ar: doAr },
  };
}

export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  {
    level: "A1",
    officialName: "DELF A1",
    durationMinutes: 80,
    passNote: {
      en: "Official pass is decided by the exam center (typically 50/100 with skill minima).",
      fr: "La reussite officielle est decidee par le centre d'examen.",
      ar: "النجاح الرسمي يقرره مركز الامتحان (غالبًا 50/100 مع حد ادنى لكل مهارة).",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Short audio, simple questions", "Courts enregistrements", "تسجيلات قصيرة"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Signs and short texts", "Panneaux et textes courts", "لافتات ونصوص قصيرة"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Form or short message", "Formulaire ou message court", "استمارة او رسالة قصيرة"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "Introduce yourself", "Se presenter", "تقديم النفس"),
    ],
    readinessChecklist: {
      en: ["Greet and introduce yourself", "Understand prices and times", "Write 3-5 simple sentences", "Order at a cafe"],
      fr: ["Saluer et se presenter", "Comprendre prix et horaires", "Ecrire 3 a 5 phrases", "Commander au cafe"],
      ar: ["تحية وتقديم النفس", "فهم الاسعار والوقت", "كتابة 3-5 جمل", "الطلب في مقهى"],
    },
    mock: [
      {
        id: "a1-r1",
        skill: "reading",
        stimulus: "Cafe du Parc — Ouvert de 8h a 19h. Un cafe : 2 euros. Wi-Fi gratuit.",
        prompt: {
          en: "Until what time is the cafe open?",
          fr: "Jusqu'a quelle heure le cafe est-il ouvert ?",
          ar: "المقهى مفتوح حتى اي ساعة؟",
        },
        options: {
          en: ["8h", "12h", "19h", "22h"],
          fr: ["8h", "12h", "19h", "22h"],
          ar: ["8", "12", "19", "22"],
        },
        correctIndex: 2,
      },
      {
        id: "a1-l1",
        skill: "listening",
        stimulus: "Bonjour, je m'appelle Nora. J'habite a Lyon. J'ai vingt ans.",
        prompt: {
          en: "Where does she live?",
          fr: "Ou habite-t-elle ?",
          ar: "اين تسكن؟",
        },
        options: {
          en: ["Paris", "Lyon", "Nice", "Lille"],
          fr: ["Paris", "Lyon", "Nice", "Lille"],
          ar: ["باريس", "ليون", "نيس", "ليل"],
        },
        correctIndex: 1,
      },
      {
        id: "a1-w1",
        skill: "writing",
        prompt: {
          en: "Write a short postcard: name, city, one activity.",
          fr: "Ecrivez une courte carte : nom, ville, une activite.",
          ar: "اكتب بطاقة قصيرة: الاسم، المدينة، نشاط واحد.",
        },
        modelHint: {
          en: "Example: Bonjour ! Je m'appelle Sara. J'habite au Caire. Aujourd'hui je visite un musee. A bientot !",
          fr: "Exemple : Bonjour ! Je m'appelle Sara...",
          ar: "مثال: Bonjour ! Je m'appelle Sara. J'habite au Caire...",
        },
      },
      {
        id: "a1-s1",
        skill: "speaking",
        prompt: {
          en: "Practice aloud: introduce yourself (name, age, city).",
          fr: "A voix haute : presente-toi.",
          ar: "تمرن بصوت عال: قدم نفسك.",
        },
        modelHint: {
          en: "Bonjour, je m'appelle... J'ai ... ans. J'habite a...",
          fr: "Bonjour, je m'appelle...",
          ar: "Bonjour, je m'appelle... J'ai ... ans. J'habite a...",
        },
      },
    ],
  },
  {
    level: "A2",
    officialName: "DELF A2",
    durationMinutes: 100,
    passNote: {
      en: "Official score is set by the center; practice here builds exam habits.",
      fr: "Le score officiel vient du centre d'examen.",
      ar: "الدرجة الرسمية من مركز الامتحان؛ هنا تبني عادة الامتحان.",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Daily situations", "Situations du quotidien", "مواقف يومية"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Emails and ads", "Mails et annonces", "رسائل واعلانات"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Short letter or message", "Lettre ou message court", "رسالة قصيرة"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "Describe and interact", "Decrire et interagir", "وصف وتفاعل"),
    ],
    readinessChecklist: {
      en: ["Talk about past weekend", "Book an appointment", "Write a short formal message", "Understand announcements"],
      fr: ["Parler du week-end", "Prendre rendez-vous", "Ecrire un message simple", "Comprendre une annonce"],
      ar: ["الحديث عن نهاية الاسبوع", "حجز موعد", "كتابة رسالة بسيطة", "فهم اعلان"],
    },
    mock: [
      {
        id: "a2-r1",
        skill: "reading",
        stimulus:
          "Madame, Monsieur, Je souhaiterais reserver une chambre pour le 12 mars. Cordialement, Karim.",
        prompt: {
          en: "What does Karim want?",
          fr: "Que souhaite Karim ?",
          ar: "ماذا يريد كريم؟",
        },
        options: {
          en: ["A job", "A room", "A ticket", "A visa"],
          fr: ["Un travail", "Une chambre", "Un billet", "Un visa"],
          ar: ["وظيفة", "غرفة", "تذكرة", "تاشيرة"],
        },
        correctIndex: 1,
      },
      {
        id: "a2-l1",
        skill: "listening",
        stimulus:
          "Allô ? Oui, bonjour. Je voudrais un rendez-vous mardi matin a dix heures, s'il vous plait.",
        prompt: {
          en: "When is the appointment?",
          fr: "Quand est le rendez-vous ?",
          ar: "متى الموعد؟",
        },
        options: {
          en: ["Monday evening", "Tuesday morning", "Friday night", "Sunday"],
          fr: ["Lundi soir", "Mardi matin", "Vendredi soir", "Dimanche"],
          ar: ["الاثنين مساء", "الثلاثاء صباحًا", "الجمعة ليلًا", "الاحد"],
        },
        correctIndex: 1,
      },
      {
        id: "a2-w1",
        skill: "writing",
        prompt: {
          en: "Write 40-60 words: invite a friend to the cinema.",
          fr: "Ecrivez 40 a 60 mots : invitation au cinema.",
          ar: "اكتب 40-60 كلمة: دعوة لصديق للسينما.",
        },
        modelHint: {
          en: "Use: Salut, est-ce que tu es libre..., on se retrouve a...",
          fr: "Utilisez : Salut, est-ce que tu es libre...",
          ar: "استخدم: Salut, est-ce que tu es libre...",
        },
      },
      {
        id: "a2-s1",
        skill: "speaking",
        prompt: {
          en: "Describe your daily routine in 1 minute.",
          fr: "Decris ta journee en une minute.",
          ar: "صف يومك في دقيقة.",
        },
        modelHint: {
          en: "Le matin je..., ensuite..., le soir...",
          fr: "Le matin je...",
          ar: "Le matin je..., ensuite..., le soir...",
        },
      },
    ],
  },
  {
    level: "B1",
    officialName: "DELF B1",
    durationMinutes: 120,
    passNote: {
      en: "B1 is often required for residency or some school paths — take it at an official center.",
      fr: "Le B1 est souvent exige pour certaines demarches — passez-le en centre officiel.",
      ar: "B1 مطلوب كثيرًا للاقامة او مسارات دراسية — الامتحان في مركز رسمي.",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Interviews and radio", "Interviews et radio", "مقابلات واذاعة"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Articles and opinions", "Articles et opinions", "مقالات واراء"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Essay expressing opinion", "Essai d'opinion", "مقال راي"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "Defend a point of view", "Defendre un point de vue", "الدفاع عن راي"),
    ],
    readinessChecklist: {
      en: ["Argue a simple opinion", "Narrate past events", "Understand news-like texts", "Handle unexpected questions"],
      fr: ["Argumenter simplement", "Raconter au passe", "Comprendre un texte d'actu", "Gerer des questions"],
      ar: ["التعبير عن راي بالحجج", "سرد احداث ماضية", "فهم نص اخباري", "التعامل مع اسئلة مفاجئة"],
    },
    mock: [
      {
        id: "b1-r1",
        skill: "reading",
        stimulus:
          "A mon avis, apprendre une langue demande de la regularite. Il ne suffit pas de memoriser des listes. Il faut aussi parler et ecrire chaque jour.",
        prompt: {
          en: "Main idea?",
          fr: "Idee principale ?",
          ar: "الفكرة الرئيسية؟",
        },
        options: {
          en: ["Only lists matter", "Regular multi-skill practice", "Never speak", "Exams are useless"],
          fr: ["Seules les listes", "Pratique reguliere", "Ne jamais parler", "Examens inutiles"],
          ar: ["القوائم فقط", "ممارسة منتظمة لمهارات متعددة", "لا تتكلم ابدًا", "الامتحانات بلا فائدة"],
        },
        correctIndex: 1,
      },
      {
        id: "b1-w1",
        skill: "writing",
        prompt: {
          en: "160-180 words: Is it better to study alone or in a group? Why?",
          fr: "160-180 mots : seul ou en groupe ?",
          ar: "160-180 كلمة: الدراسة وحدك ام في مجموعة؟",
        },
        modelHint: {
          en: "Structure: intro, two arguments, conclusion with 'a mon avis'.",
          fr: "Structure : intro, deux arguments, conclusion.",
          ar: "مقدمة، حجيتان، خاتمة مع a mon avis.",
        },
      },
      {
        id: "b1-s1",
        skill: "speaking",
        prompt: {
          en: "Defend: 'Social media helps language learning.' 2 minutes.",
          fr: "Defendez : les reseaux aident a apprendre. 2 minutes.",
          ar: "دافع عن: وسائل التواصل تساعد على تعلم اللغة. دقيقتان.",
        },
        modelHint: {
          en: "First..., however..., in conclusion...",
          fr: "D'abord..., cependant..., en conclusion...",
          ar: "D'abord..., cependant..., en conclusion...",
        },
      },
    ],
  },
  {
    level: "B2",
    officialName: "DELF B2",
    durationMinutes: 150,
    passNote: {
      en: "B2 is a common university entry level in French-speaking contexts.",
      fr: "Le B2 est un niveau frequent pour l'universite.",
      ar: "B2 شائع لدخول الجامعات الناطقة بالفرنسية.",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Longer documents", "Documents longs", "مقاطع اطول"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Complex argumentation", "Argumentation complexe", "حجاج معقد"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Structured essay", "Essai structure", "مقال منظم"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "Present and debate", "Expose et debat", "عرض ونقاش"),
    ],
    readinessChecklist: {
      en: ["Synthesize two documents", "Clear oral presentation", "Nuanced opinion writing", "Follow fast speech"],
      fr: ["Synthetiser deux documents", "Expose clair", "Opinion nuancee", "Suivre un debit rapide"],
      ar: ["تلخيص وثيقتين", "عرض شفهي واضح", "كتابة راي متوازن", "متابعة كلام سريع"],
    },
    mock: [
      {
        id: "b2-r1",
        skill: "reading",
        stimulus:
          "Si le teletravail offre de la flexibilite, il peut aussi isoler les salaries. Les entreprises doivent donc trouver un equilibre entre liberte et cohesion d'equipe.",
        prompt: {
          en: "The author mainly stresses...",
          fr: "L'auteur insiste surtout sur...",
          ar: "الكاتب يشدد اساسًا على...",
        },
        options: {
          en: ["Only benefits", "Only risks", "Need for balance", "Banning remote work"],
          fr: ["Seuls les avantages", "Seuls les risques", "Un equilibre", "Interdire le teletravail"],
          ar: ["المزايا فقط", "المخاطر فقط", "الحاجة للتوازن", "منع العمل عن بعد"],
        },
        correctIndex: 2,
      },
      {
        id: "b2-w1",
        skill: "writing",
        prompt: {
          en: "250 words: Should cities ban cars from centers? Argue both sides then conclude.",
          fr: "250 mots : interdire les voitures au centre ?",
          ar: "250 كلمة: هل تُمنع السيارات من وسط المدن؟",
        },
        modelHint: {
          en: "Use connectors: d'une part, d'autre part, neanmoins, en definitive.",
          fr: "Connecteurs : d'une part, d'autre part...",
          ar: "استخدم: d'une part, d'autre part, neanmoins...",
        },
      },
    ],
  },
  {
    level: "C1",
    officialName: "DALF C1",
    durationMinutes: 240,
    passNote: {
      en: "C1 is advanced academic/professional French — official exam only at authorized centers.",
      fr: "Le C1 est avance — examen officiel en centre agree.",
      ar: "C1 مستوى متقدم — الامتحان الرسمي في مركز معتمد فقط.",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Long conferences", "Conferences longues", "محاضرات طويلة"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Abstract texts", "Textes abstraits", "نصوص مجردة"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Synthesis + essay", "Synthese + essai", "تلخيص + مقال"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "Academic presentation", "Expose academique", "عرض اكاديمي"),
    ],
    readinessChecklist: {
      en: ["Synthesize multiple sources", "Precise formal register", "Spontaneous nuanced speech", "Follow specialized topics"],
      fr: ["Synthese multi-sources", "Registre soutenu", "Oral nuance", "Sujets specialises"],
      ar: ["تلخيص مصادر متعددة", "اسلوب رسمي دقيق", "كلام عفوي متقن", "مواضيع متخصصة"],
    },
    mock: [
      {
        id: "c1-w1",
        skill: "writing",
        prompt: {
          en: "Synthesize (in French) the idea: education must balance skills and critical thinking.",
          fr: "Synthetisez : equilibre competences / esprit critique.",
          ar: "لخّص بالفرنسية: التعليم يوازن بين المهارات والتفكير النقدي.",
        },
        modelHint: {
          en: "Aim for neutral synthesis without personal opinion first.",
          fr: "Synthese neutre d'abord.",
          ar: "تلخيص محايد اولًا ثم الراي.",
        },
      },
    ],
  },
  {
    level: "C2",
    officialName: "DALF C2",
    durationMinutes: 210,
    passNote: {
      en: "C2 is near-native mastery for official purposes — center exam required.",
      fr: "Le C2 est une maitrise proche du natif — centre officiel.",
      ar: "C2 قريب من المتحدث الاصلي — يلزم مركز رسمي.",
    },
    skills: [
      skillBlock("listening", "Listening", "Comprehension orale", "استماع", "Any authentic document", "Tout document authentique", "اي وثيقة اصلية"),
      skillBlock("reading", "Reading", "Comprehension ecrite", "قراءة", "Literary and abstract", "Litteraire et abstrait", "ادبي ومجرد"),
      skillBlock("writing", "Writing", "Production ecrite", "كتابة", "Sophisticated essay", "Essai elabore", "مقال راق"),
      skillBlock("speaking", "Speaking", "Production orale", "تحدث", "High-level interaction", "Interaction de haut niveau", "تفاعل عالي المستوى"),
    ],
    readinessChecklist: {
      en: ["Effortless comprehension", "Stylistic control", "Cultural nuance", "Professional/academic fluency"],
      fr: ["Comprehension aisee", "Maitrise stylistique", "Nuance culturelle", "Aisance pro/academique"],
      ar: ["فهم سلس", "تحكم اسلوبي", "حس ثقافي", "طلاقة مهنية/اكاديمية"],
    },
    mock: [
      {
        id: "c2-s1",
        skill: "speaking",
        prompt: {
          en: "Discuss: Can AI replace human teachers in language learning?",
          fr: "Debattez : l'IA peut-elle remplacer les enseignants ?",
          ar: "ناقش: هل يقدر الذكاء الاصطناعي يستبدل المدرس؟",
        },
        modelHint: {
          en: "Show concessions, precise vocabulary, and a firm conclusion.",
          fr: "Concessions, lexique precis, conclusion ferme.",
          ar: "تنازلات، مفردات دقيقة، خاتمة واضحة.",
        },
      },
    ],
  },
];

export function getExamBlueprint(level: string): ExamBlueprint | undefined {
  return EXAM_BLUEPRINTS.find((b) => b.level === level);
}

export function getAllExamBlueprints(): ExamBlueprint[] {
  return EXAM_BLUEPRINTS;
}
