import type { LessonUnit } from "./types";

/**
 * Exam-aligned units woven into the main sequential path.
 * Completing these on-site trains the four DELF/DALF skills for that CEFR level.
 * Official certificate still comes from an authorized center/school.
 */

function unit(partial: LessonUnit): LessonUnit {
  return partial;
}

export const EXAM_TRACK_UNITS: LessonUnit[] = [
  // ——— A1 (orders 90+) ———
  unit({
    id: "fr-a1-exam-listen",
    level: "A1",
    order: 90,
    title: {
      en: "Exam skill: Listening A1",
      fr: "Examen : compréhension orale A1",
      ar: "مهارة الامتحان: الاستماع A1",
    },
    completesGoals: ["goal-exam-a1-listen"],
    lesson: {
      intro: {
        en: "Train for DELF A1 listening: short everyday messages.",
        fr: "S'entraîner à l'écoute DELF A1.",
        ar: "تدريب على استماع DELF A1: رسائل يومية قصيرة.",
      },
      dialogue: [
        "— Le train part à neuf heures dix.",
        "— Le musée est fermé le mardi.",
        "— Un café coûte deux euros.",
        "— Je m'appelle Adam. J'habite à Marseille.",
      ],
      tip: {
        en: "Listen for numbers, days, and places.",
        fr: "Écoutez les nombres, jours et lieux.",
        ar: "ركز على الأرقام والأيام والأماكن.",
      },
    },
    vocab: [
      { term: "à neuf heures dix", meaning: { en: "at 9:10", fr: "horaire", ar: "الساعة 9:10" }, example: "Le train part à neuf heures dix." },
      { term: "fermé le mardi", meaning: { en: "closed on Tuesday", fr: "jour de fermeture", ar: "مغلق الثلاثاء" }, example: "Le musée est fermé le mardi." },
      { term: "coûte", meaning: { en: "costs", fr: "prix", ar: "يكلف" }, example: "Un café coûte deux euros." },
    ],
    exercises: [
      {
        id: "a1el-e1",
        prompt: { en: "The train leaves at…", fr: "Le train part à…", ar: "القطار يغادر الساعة…" },
        answers: ["neuf heures dix", "a neuf heures dix", "9h10"],
      },
      {
        id: "a1el-e2",
        prompt: { en: "Museum closed on…", fr: "Musée fermé le…", ar: "المتحف مغلق يوم…" },
        answers: ["mardi", "le mardi"],
      },
      {
        id: "a1el-e3",
        prompt: { en: "How much is a coffee? (words)", fr: "Prix du café", ar: "سعر القهوة بالكلمات" },
        answers: ["deux euros", "2 euros"],
      },
      {
        id: "a1el-e4",
        prompt: { en: "Where does Adam live?", fr: "Adam habite où ?", ar: "آدم يسكن فين؟" },
        answers: ["marseille", "a marseille"],
      },
    ],
    review: {
      summary: {
        en: "A1 listening focuses on times, places, prices.",
        fr: "Écoute A1 : horaires, lieux, prix.",
        ar: "استماع A1: وقت وأماكن وأسعار.",
      },
      checklist: {
        en: ["Times", "Closed days", "Prices", "City names"],
        fr: ["Horaires", "Jours de fermeture", "Prix", "Villes"],
        ar: ["الوقت", "أيام الإغلاق", "الأسعار", "المدن"],
      },
    },
    quiz: [
      {
        id: "a1el-q1",
        prompt: { en: "Train at 9:10 →", fr: "Train 9h10 →", ar: "قطار 9:10 →" },
        options: {
          en: ["Le train part à neuf heures dix", "Le train part demain", "Le bus est plein", "C'est fermé"],
          fr: ["Le train part à neuf heures dix", "Le train part demain", "Le bus est plein", "C'est fermé"],
          ar: ["Le train part à neuf heures dix", "Le train part demain", "Le bus est plein", "C'est fermé"],
        },
        correctIndex: 0,
      },
      {
        id: "a1el-q2",
        prompt: { en: "Closed Tuesday →", fr: "Fermé mardi →", ar: "مغلق الثلاثاء →" },
        options: {
          en: ["Ouvert le mardi", "Fermé le mardi", "Gratuit le mardi", "Loin le mardi"],
          fr: ["Ouvert le mardi", "Fermé le mardi", "Gratuit le mardi", "Loin le mardi"],
          ar: ["Ouvert le mardi", "Fermé le mardi", "Gratuit le mardi", "Loin le mardi"],
        },
        correctIndex: 1,
      },
      {
        id: "a1el-q3",
        prompt: { en: "Coffee is 2€ →", fr: "Café 2€ →", ar: "قهوة 2€ →" },
        options: {
          en: ["Un café coûte deux euros", "Un café est loin", "Un café est fermé", "Un café part à neuf heures"],
          fr: ["Un café coûte deux euros", "Un café est loin", "Un café est fermé", "Un café part à neuf heures"],
          ar: ["Un café coûte deux euros", "Un café est loin", "Un café est fermé", "Un café part à neuf heures"],
        },
        correctIndex: 0,
      },
      {
        id: "a1el-q4",
        prompt: { en: "Adam lives in…", fr: "Adam habite à…", ar: "آدم يسكن في…" },
        options: {
          en: ["Paris", "Lyon", "Marseille", "Nice"],
          fr: ["Paris", "Lyon", "Marseille", "Nice"],
          ar: ["باريس", "ليون", "مرسيليا", "نيس"],
        },
        correctIndex: 2,
      },
    ],
    passRatio: 0.7,
  }),
  unit({
    id: "fr-a1-exam-read",
    level: "A1",
    order: 91,
    title: {
      en: "Exam skill: Reading A1",
      fr: "Examen : compréhension écrite A1",
      ar: "مهارة الامتحان: القراءة A1",
    },
    completesGoals: ["goal-exam-a1-read"],
    lesson: {
      intro: {
        en: "Read signs, menus, and short notes like on the DELF A1 paper.",
        fr: "Lire panneaux et notes comme au DELF A1.",
        ar: "اقرأ لافتات وقوائم وملاحظات قصيرة كما في ورقة DELF A1.",
      },
      dialogue: [
        "— Entrée libre jusqu'à 18h.",
        "— Silence, s'il vous plaît.",
        "— Interdit de fumer.",
        "— Ouvert du lundi au vendredi.",
      ],
      tip: {
        en: "Scan for key words: ouvert, fermé, interdit, gratuit.",
        fr: "Repérez : ouvert, fermé, interdit, gratuit.",
        ar: "ابحث عن: ouvert, fermé, interdit, gratuit.",
      },
    },
    vocab: [
      { term: "entrée libre", meaning: { en: "free entry", fr: "accès gratuit", ar: "دخول مجاني" }, example: "Entrée libre jusqu'à 18h." },
      { term: "interdit de fumer", meaning: { en: "no smoking", fr: "défense de fumer", ar: "ممنوع التدخين" }, example: "Interdit de fumer." },
      { term: "du lundi au vendredi", meaning: { en: "Monday to Friday", fr: "jours ouvrés", ar: "من الإثنين للجمعة" }, example: "Ouvert du lundi au vendredi." },
    ],
    exercises: [
      {
        id: "a1er-e1",
        prompt: { en: "Free entry until…", fr: "Entrée libre jusqu'à…", ar: "دخول مجاني حتى…" },
        answers: ["18h", "18 heures", "dix-huit heures"],
      },
      {
        id: "a1er-e2",
        prompt: { en: "No smoking (French phrase)", fr: "Phrase interdiction", ar: "عبارة ممنوع التدخين" },
        answers: ["interdit de fumer"],
      },
      {
        id: "a1er-e3",
        prompt: { en: "Open Mon–Fri → start word", fr: "Ouvert…", ar: "مفتوح…" },
        answers: ["ouvert du lundi au vendredi", "du lundi au vendredi"],
      },
      {
        id: "a1er-e4",
        prompt: { en: "Write: Silence please", fr: "Silence…", ar: "صمت من فضلك" },
        answers: ["silence, s'il vous plait", "silence s'il vous plait", "silence, s'il vous plaît"],
      },
    ],
    review: {
      summary: {
        en: "A1 reading = public signs and short info.",
        fr: "Lecture A1 = panneaux et infos courtes.",
        ar: "قراءة A1 = لافتات ومعلومات قصيرة.",
      },
      checklist: {
        en: ["Opening hours", "Prohibitions", "Free / paid", "Days of week"],
        fr: ["Horaires", "Interdictions", "Gratuit / payant", "Jours"],
        ar: ["مواعيد", "ممنوعات", "مجاني/مدفوع", "أيام"],
      },
    },
    quiz: [
      {
        id: "a1er-q1",
        prompt: { en: "Entrée libre means…", fr: "Entrée libre =", ar: "Entrée libre تعني…" },
        options: {
          en: ["Paid entry", "Free entry", "Closed", "Exit only"],
          fr: ["Payant", "Gratuit", "Fermé", "Sortie seulement"],
          ar: ["دخول مدفوع", "دخول مجاني", "مغلق", "خروج فقط"],
        },
        correctIndex: 1,
      },
      {
        id: "a1er-q2",
        prompt: { en: "Interdit de fumer…", fr: "Interdit de fumer…", ar: "Interdit de fumer…" },
        options: {
          en: ["You may smoke", "No smoking", "Buy cigarettes", "Ask for a light"],
          fr: ["On peut fumer", "Défense de fumer", "Acheter des cigarettes", "Demander du feu"],
          ar: ["مسموح التدخين", "ممنوع التدخين", "اشتر سجائر", "اطلب ولاعة"],
        },
        correctIndex: 1,
      },
      {
        id: "a1er-q3",
        prompt: { en: "Du lundi au vendredi…", fr: "Du lundi au vendredi…", ar: "Du lundi au vendredi…" },
        options: {
          en: ["Weekend only", "Weekdays", "Night only", "Summer only"],
          fr: ["Week-end seulement", "Jours de semaine", "Nuit seulement", "Été seulement"],
          ar: ["نهاية الأسبوع فقط", "أيام الأسبوع", "ليل فقط", "الصيف فقط"],
        },
        correctIndex: 1,
      },
      {
        id: "a1er-q4",
        prompt: { en: "Silence, s'il vous plaît is…", fr: "Silence…", ar: "Silence…" },
        options: {
          en: ["A request for quiet", "A price", "A train time", "A menu"],
          fr: ["Une demande de calme", "Un prix", "Un horaire", "Un menu"],
          ar: ["طلب هدوء", "سعر", "موعد قطار", "قائمة طعام"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),
  unit({
    id: "fr-a1-exam-write",
    level: "A1",
    order: 92,
    title: {
      en: "Exam skill: Writing A1",
      fr: "Examen : production écrite A1",
      ar: "مهارة الامتحان: الكتابة A1",
    },
    completesGoals: ["goal-exam-a1-write"],
    lesson: {
      intro: {
        en: "Write a short form-style message: name, city, contact.",
        fr: "Écrire un message type formulaire.",
        ar: "اكتب رسالة قصيرة كالاستمارة: الاسم، المدينة، التواصل.",
      },
      dialogue: [
        "— Nom : Hassan.",
        "— Je m'appelle Hassan.",
        "— J'habite au Caire.",
        "— Mon numéro est le 01 23 45 67 89.",
      ],
      tip: {
        en: "Keep sentences short and correct.",
        fr: "Phrases courtes et correctes.",
        ar: "جمل قصيرة وصحيحة.",
      },
    },
    vocab: [
      { term: "je m'appelle", meaning: { en: "my name is", fr: "identité", ar: "اسمي" }, example: "Je m'appelle Hassan." },
      { term: "j'habite à", meaning: { en: "I live in", fr: "lieu de vie", ar: "أسكن في" }, example: "J'habite au Caire." },
      { term: "mon numéro", meaning: { en: "my number", fr: "téléphone", ar: "رقمي" }, example: "Mon numéro est le…" },
    ],
    exercises: [
      {
        id: "a1ew-e1",
        prompt: { en: "Write: My name is Nora", fr: "Je m'appelle Nora", ar: "اسمي نورا" },
        answers: ["je m'appelle nora", "je m appelle nora"],
      },
      {
        id: "a1ew-e2",
        prompt: { en: "Write: I live in Lyon", fr: "J'habite à Lyon", ar: "أسكن في ليون" },
        answers: ["j'habite a lyon", "j habite a lyon", "j'habite à lyon"],
      },
      {
        id: "a1ew-e3",
        prompt: { en: "Write: I am twenty years old", fr: "J'ai vingt ans", ar: "عمري عشرون سنة" },
        answers: ["j'ai vingt ans", "j ai vingt ans"],
      },
      {
        id: "a1ew-e4",
        prompt: { en: "Start a message: Hello", fr: "Bonjour", ar: "مرحبا" },
        answers: ["bonjour"],
      },
    ],
    review: {
      summary: {
        en: "A1 writing = identity + place + simple contact.",
        fr: "Écrit A1 = identité + lieu.",
        ar: "كتابة A1 = هوية + مكان.",
      },
      checklist: {
        en: ["Je m'appelle…", "J'habite…", "J'ai … ans", "Bonjour"],
        fr: ["Je m'appelle…", "J'habite…", "J'ai … ans", "Bonjour"],
        ar: ["Je m'appelle…", "J'habite…", "J'ai … ans", "Bonjour"],
      },
    },
    quiz: [
      {
        id: "a1ew-q1",
        prompt: { en: "Correct identity line:", fr: "Identité correcte :", ar: "سطر هوية صحيح:" },
        options: {
          en: ["Je m'appelle Sara", "Je suis appelle Sara", "Moi Sara", "Sara je"],
          fr: ["Je m'appelle Sara", "Je suis appelle Sara", "Moi Sara", "Sara je"],
          ar: ["Je m'appelle Sara", "Je suis appelle Sara", "Moi Sara", "Sara je"],
        },
        correctIndex: 0,
      },
      {
        id: "a1ew-q2",
        prompt: { en: "I live in Paris:", fr: "J'habite…", ar: "أسكن في باريس:" },
        options: {
          en: ["J'habite à Paris", "Je habite Paris", "J'habite de Paris", "Paris j'habite"],
          fr: ["J'habite à Paris", "Je habite Paris", "J'habite de Paris", "Paris j'habite"],
          ar: ["J'habite à Paris", "Je habite Paris", "J'habite de Paris", "Paris j'habite"],
        },
        correctIndex: 0,
      },
      {
        id: "a1ew-q3",
        prompt: { en: "Age 20:", fr: "20 ans :", ar: "20 سنة:" },
        options: {
          en: ["J'ai vingt ans", "Je suis vingt", "J'ai ans vingt", "Vingt je"],
          fr: ["J'ai vingt ans", "Je suis vingt", "J'ai ans vingt", "Vingt je"],
          ar: ["J'ai vingt ans", "Je suis vingt", "J'ai ans vingt", "Vingt je"],
        },
        correctIndex: 0,
      },
      {
        id: "a1ew-q4",
        prompt: { en: "Greeting:", fr: "Salutation :", ar: "تحية:" },
        options: {
          en: ["Bonjour", "Au revoir d'abord", "Merci non", "Fermé"],
          fr: ["Bonjour", "Au revoir d'abord", "Merci non", "Fermé"],
          ar: ["Bonjour", "Au revoir d'abord", "Merci non", "Fermé"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),
  unit({
    id: "fr-a1-exam-speak",
    level: "A1",
    order: 93,
    title: {
      en: "Exam skill: Speaking A1",
      fr: "Examen : production orale A1",
      ar: "مهارة الامتحان: التحدث A1",
    },
    completesGoals: ["goal-exam-a1-speak"],
    lesson: {
      intro: {
        en: "Oral exam A1: introduce yourself and answer simple questions — practice aloud on the site.",
        fr: "Oral A1 : se présenter à voix haute.",
        ar: "شفهي A1: قدّم نفسك وأجب — تمرّن بصوت عالٍ على الموقع.",
      },
      dialogue: [
        "— Bonjour, je m'appelle Lina.",
        "— J'ai dix-neuf ans.",
        "— J'habite à Alexandrie.",
        "— Je suis étudiante.",
        "— Et vous ?",
      ],
      tip: {
        en: "Speak slowly; use the listen button, then repeat.",
        fr: "Parlez lentement ; écoutez puis répétez.",
        ar: "اتكلم بهدوء؛ اسمع الزر ثم كرّر.",
      },
    },
    vocab: [
      { term: "je suis étudiant / étudiante", meaning: { en: "I am a student", fr: "statut", ar: "أنا طالب/طالبة" }, example: "Je suis étudiante." },
      { term: "et vous ?", meaning: { en: "and you? (formal)", fr: "relance polie", ar: "وأنتَ/أنتم؟" }, example: "Et vous ?" },
      { term: "enchanté / enchantée", meaning: { en: "nice to meet you", fr: "politesse", ar: "تشرفت" }, example: "Enchanté !" },
    ],
    exercises: [
      {
        id: "a1es-e1",
        prompt: { en: "Say: I am a student (masculine form OK)", fr: "Je suis étudiant", ar: "أنا طالب" },
        answers: ["je suis etudiant", "je suis étudiant", "je suis etudiante", "je suis étudiante"],
      },
      {
        id: "a1es-e2",
        prompt: { en: "Ask formally: and you?", fr: "Et vous ?", ar: "وأنتم؟" },
        answers: ["et vous", "et vous ?"],
      },
      {
        id: "a1es-e3",
        prompt: { en: "Nice to meet you (m.)", fr: "Enchanté", ar: "تشرفت (مذكر)" },
        answers: ["enchante", "enchanté"],
      },
      {
        id: "a1es-e4",
        prompt: { en: "Full line: Hello, my name is Omar", fr: "Bonjour, je m'appelle Omar", ar: "مرحبا، اسمي عمر" },
        answers: ["bonjour, je m'appelle omar", "bonjour je m'appelle omar"],
      },
    ],
    review: {
      summary: {
        en: "A1 speaking = identity + one question back.",
        fr: "Oral A1 = identité + question retour.",
        ar: "تحدث A1 = هوية + سؤال عائد.",
      },
      checklist: {
        en: ["Name", "Age", "City", "Job/studies", "Et vous ?"],
        fr: ["Nom", "Âge", "Ville", "Études", "Et vous ?"],
        ar: ["الاسم", "العمر", "المدينة", "الدراسة", "Et vous ?"],
      },
    },
    quiz: [
      {
        id: "a1es-q1",
        prompt: { en: "Best self-intro start:", fr: "Meilleur début :", ar: "أفضل بداية:" },
        options: {
          en: ["Bonjour, je m'appelle…", "Donne ton nom", "Quoi", "Fermé"],
          fr: ["Bonjour, je m'appelle…", "Donne ton nom", "Quoi", "Fermé"],
          ar: ["Bonjour, je m'appelle…", "Donne ton nom", "Quoi", "Fermé"],
        },
        correctIndex: 0,
      },
      {
        id: "a1es-q2",
        prompt: { en: "Polite return question:", fr: "Question retour :", ar: "سؤال عائد مهذب:" },
        options: {
          en: ["Et vous ?", "Toi !", "Parle !", "Non"],
          fr: ["Et vous ?", "Toi !", "Parle !", "Non"],
          ar: ["Et vous ?", "Toi !", "Parle !", "Non"],
        },
        correctIndex: 0,
      },
      {
        id: "a1es-q3",
        prompt: { en: "Student line:", fr: "Études :", ar: "سطر الدراسة:" },
        options: {
          en: ["Je suis étudiant", "Je étudiant suis", "Étudiant je non", "J'ai étudiant"],
          fr: ["Je suis étudiant", "Je étudiant suis", "Étudiant je non", "J'ai étudiant"],
          ar: ["Je suis étudiant", "Je étudiant suis", "Étudiant je non", "J'ai étudiant"],
        },
        correctIndex: 0,
      },
      {
        id: "a1es-q4",
        prompt: { en: "After intro, you can say:", fr: "Après se présenter :", ar: "بعد التقديم:" },
        options: {
          en: ["Enchanté", "Interdit", "Fermé mardi", "Deux euros"],
          fr: ["Enchanté", "Interdit", "Fermé mardi", "Deux euros"],
          ar: ["Enchanté", "Interdit", "Fermé mardi", "Deux euros"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),

  // ——— A2 ———
  unit({
    id: "fr-a2-exam-core",
    level: "A2",
    order: 190,
    title: {
      en: "Exam prep A2: four skills",
      fr: "Préparation examen A2",
      ar: "تجهيز امتحان A2: المهارات الأربع",
    },
    completesGoals: ["goal-exam-a2-core"],
    lesson: {
      intro: {
        en: "DELF A2 needs short past stories, appointments, and simple messages — all practiced here.",
        fr: "Le DELF A2 demande récit simple, rendez-vous, messages.",
        ar: "DELF A2 يحتاج سردًا بسيطًا ومواعيد ورسائل — كلها هنا على الموقع.",
      },
      dialogue: [
        "— Hier, je suis allé au marché.",
        "— Je voudrais un rendez-vous mardi matin.",
        "— Est-ce que tu es libre samedi ?",
        "— J'ai acheté du pain et des fruits.",
      ],
      tip: {
        en: "Link past (passé composé) with a time marker: hier, samedi…",
        fr: "Reliez le passé à un marqueur : hier…",
        ar: "اربط الماضي بعلامة زمن: hier…",
      },
    },
    vocab: [
      { term: "hier", meaning: { en: "yesterday", fr: "temps passé", ar: "أمس" }, example: "Hier, je suis allé au marché." },
      { term: "rendez-vous", meaning: { en: "appointment", fr: "RDV", ar: "موعد" }, example: "Je voudrais un rendez-vous." },
      { term: "est-ce que tu es libre", meaning: { en: "are you free", fr: "disponibilité", ar: "هل أنت متفرغ" }, example: "Est-ce que tu es libre samedi ?" },
    ],
    exercises: [
      {
        id: "a2ec-e1",
        prompt: { en: "Yesterday I went to the market", fr: "Hier… marché", ar: "أمس ذهبت للسوق" },
        answers: ["hier, je suis alle au marche", "hier je suis alle au marche", "hier, je suis allé au marché"],
      },
      {
        id: "a2ec-e2",
        prompt: { en: "I would like an appointment", fr: "Je voudrais un rendez-vous", ar: "أود موعدًا" },
        answers: ["je voudrais un rendez-vous"],
      },
      {
        id: "a2ec-e3",
        prompt: { en: "Are you free Saturday?", fr: "Libre samedi ?", ar: "متفرغ السبت؟" },
        answers: ["est-ce que tu es libre samedi", "est-ce que tu es libre samedi ?"],
      },
      {
        id: "a2ec-e4",
        prompt: { en: "I bought bread", fr: "J'ai acheté du pain", ar: "اشتريت خبزًا" },
        answers: ["j'ai achete du pain", "j ai achete du pain", "j'ai acheté du pain"],
      },
    ],
    review: {
      summary: {
        en: "A2 exam = past + plans + short interaction.",
        fr: "Examen A2 = passé + projets + échange.",
        ar: "امتحان A2 = ماضٍ + خطط + تفاعل قصير.",
      },
      checklist: {
        en: ["Passé composé", "Rendez-vous", "Invitation", "Shopping past"],
        fr: ["Passé composé", "Rendez-vous", "Invitation", "Courses au passé"],
        ar: ["الماضي المركب", "موعد", "دعوة", "تسوق بالماضي"],
      },
    },
    quiz: [
      {
        id: "a2ec-q1",
        prompt: { en: "Yesterday marker:", fr: "Marqueur :", ar: "علامة أمس:" },
        options: {
          en: ["Hier", "Demain", "Maintenant", "Jamais"],
          fr: ["Hier", "Demain", "Maintenant", "Jamais"],
          ar: ["Hier", "Demain", "Maintenant", "Jamais"],
        },
        correctIndex: 0,
      },
      {
        id: "a2ec-q2",
        prompt: { en: "Appointment:", fr: "RDV :", ar: "موعد:" },
        options: {
          en: ["Rendez-vous", "Restaurant menu only", "Silence", "Interdit"],
          fr: ["Rendez-vous", "Menu seulement", "Silence", "Interdit"],
          ar: ["Rendez-vous", "Menu seulement", "Silence", "Interdit"],
        },
        correctIndex: 0,
      },
      {
        id: "a2ec-q3",
        prompt: { en: "Polite request form:", fr: "Requête polie :", ar: "طلب مهذب:" },
        options: {
          en: ["Je voudrais…", "Je veux maintenant !", "Donne !", "Non"],
          fr: ["Je voudrais…", "Je veux maintenant !", "Donne !", "Non"],
          ar: ["Je voudrais…", "Je veux maintenant !", "Donne !", "Non"],
        },
        correctIndex: 0,
      },
      {
        id: "a2ec-q4",
        prompt: { en: "Past purchase:", fr: "Achat passé :", ar: "شراء ماضٍ:" },
        options: {
          en: ["J'ai acheté du pain", "J'achète demain pain", "Pain je", "Acheter non"],
          fr: ["J'ai acheté du pain", "J'achète demain pain", "Pain je", "Acheter non"],
          ar: ["J'ai acheté du pain", "J'achète demain pain", "Pain je", "Acheter non"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),

  // ——— B1 ———
  unit({
    id: "fr-b1-exam-core",
    level: "B1",
    order: 290,
    title: {
      en: "Exam prep B1: opinion & narrative",
      fr: "Préparation examen B1",
      ar: "تجهيز امتحان B1: الرأي والسرد",
    },
    completesGoals: ["goal-exam-b1-core"],
    lesson: {
      intro: {
        en: "DELF B1 writing/speaking needs clear opinion and past narrative — trained on-site.",
        fr: "Le B1 demande opinion claire et récit.",
        ar: "DELF B1 يحتاج رأيًا واضحًا وسردًا — التدريب على الموقع.",
      },
      dialogue: [
        "— À mon avis, il faut pratiquer chaque jour.",
        "— D'abord… ensuite… enfin…",
        "— Je ne suis pas d'accord parce que…",
        "— L'année dernière, j'ai commencé le français.",
      ],
      tip: {
        en: "Structure: opinion → reason → example.",
        fr: "Structure : opinion → raison → exemple.",
        ar: "بنية: رأي ← سبب ← مثال.",
      },
    },
    vocab: [
      { term: "à mon avis", meaning: { en: "in my opinion", fr: "opinion", ar: "في رأيي" }, example: "À mon avis, il faut pratiquer." },
      { term: "je ne suis pas d'accord", meaning: { en: "I disagree", fr: "désaccord", ar: "لا أوافق" }, example: "Je ne suis pas d'accord parce que…" },
      { term: "parce que", meaning: { en: "because", fr: "cause", ar: "لأن" }, example: "…parce que c'est important." },
    ],
    exercises: [
      {
        id: "b1ec-e1",
        prompt: { en: "In my opinion (phrase)", fr: "À mon avis", ar: "في رأيي" },
        answers: ["a mon avis", "à mon avis"],
      },
      {
        id: "b1ec-e2",
        prompt: { en: "I disagree", fr: "Je ne suis pas d'accord", ar: "لا أوافق" },
        answers: ["je ne suis pas d'accord", "je ne suis pas d accord"],
      },
      {
        id: "b1ec-e3",
        prompt: { en: "Because it is important", fr: "Parce que c'est important", ar: "لأنه مهم" },
        answers: ["parce que c'est important", "parce que c est important"],
      },
      {
        id: "b1ec-e4",
        prompt: { en: "Last year I started French", fr: "L'année dernière…", ar: "العام الماضي بدأت الفرنسية" },
        answers: [
          "l'annee derniere, j'ai commence le francais",
          "l annee derniere j'ai commence le francais",
          "l'année dernière, j'ai commencé le français",
        ],
      },
    ],
    review: {
      summary: {
        en: "B1 exam = justified opinion + coherent story.",
        fr: "Examen B1 = opinion justifiée + récit.",
        ar: "امتحان B1 = رأي معلل + قصة مترابطة.",
      },
      checklist: {
        en: ["À mon avis", "Parce que", "D'abord / ensuite", "Passé narratif"],
        fr: ["À mon avis", "Parce que", "D'abord / ensuite", "Passé narratif"],
        ar: ["À mon avis", "Parce que", "D'abord / ensuite", "سرد ماضٍ"],
      },
    },
    quiz: [
      {
        id: "b1ec-q1",
        prompt: { en: "Opinion phrase:", fr: "Opinion :", ar: "عبارة رأي:" },
        options: {
          en: ["À mon avis", "Interdit de fumer", "Deux euros", "Fermé le mardi"],
          fr: ["À mon avis", "Interdit de fumer", "Deux euros", "Fermé le mardi"],
          ar: ["À mon avis", "Interdit de fumer", "Deux euros", "Fermé le mardi"],
        },
        correctIndex: 0,
      },
      {
        id: "b1ec-q2",
        prompt: { en: "Disagree:", fr: "Désaccord :", ar: "عدم موافقة:" },
        options: {
          en: ["Je ne suis pas d'accord", "Je m'appelle…", "Bonjour seulement", "Entrée libre"],
          fr: ["Je ne suis pas d'accord", "Je m'appelle…", "Bonjour seulement", "Entrée libre"],
          ar: ["Je ne suis pas d'accord", "Je m'appelle…", "Bonjour seulement", "Entrée libre"],
        },
        correctIndex: 0,
      },
      {
        id: "b1ec-q3",
        prompt: { en: "Reason connector:", fr: "Cause :", ar: "رابط السبب:" },
        options: {
          en: ["Parce que", "Bonjour", "Merci", "Salut"],
          fr: ["Parce que", "Bonjour", "Merci", "Salut"],
          ar: ["Parce que", "Bonjour", "Merci", "Salut"],
        },
        correctIndex: 0,
      },
      {
        id: "b1ec-q4",
        prompt: { en: "Order markers:", fr: "Ordre :", ar: "ترتيب:" },
        options: {
          en: ["D'abord, ensuite, enfin", "Only bonjour", "Only numbers", "Only prices"],
          fr: ["D'abord, ensuite, enfin", "Seulement bonjour", "Seulement nombres", "Seulement prix"],
          ar: ["D'abord, ensuite, enfin", "تحية فقط", "أرقام فقط", "أسعار فقط"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),

  // ——— B2 ———
  unit({
    id: "fr-b2-exam-core",
    level: "B2",
    order: 390,
    title: {
      en: "Exam prep B2: argument & synthesis",
      fr: "Préparation examen B2",
      ar: "تجهيز امتحان B2: الحجاج والتلخيص",
    },
    completesGoals: ["goal-exam-b2-core"],
    lesson: {
      intro: {
        en: "DELF B2 needs balanced arguments and clear structure — practiced entirely on the site.",
        fr: "Le B2 demande argumentation équilibrée.",
        ar: "DELF B2 يحتاج حججًا متوازنة وبنية واضحة — كله على الموقع.",
      },
      dialogue: [
        "— D'une part… d'autre part…",
        "— Néanmoins, il faut reconnaître que…",
        "— En définitive, je pense que…",
        "— Cet article souligne que…",
      ],
      tip: {
        en: "Show both sides before your conclusion.",
        fr: "Présentez les deux côtés avant la conclusion.",
        ar: "اعرض الوجهين قبل الخاتمة.",
      },
    },
    vocab: [
      { term: "d'une part / d'autre part", meaning: { en: "on one hand / on the other", fr: "opposition", ar: "من جهة / من جهة أخرى" }, example: "D'une part… d'autre part…" },
      { term: "néanmoins", meaning: { en: "nevertheless", fr: "concession", ar: "ومع ذلك" }, example: "Néanmoins, il faut…" },
      { term: "en définitive", meaning: { en: "in conclusion", fr: "clôture", ar: "في النهاية" }, example: "En définitive, je pense que…" },
    ],
    exercises: [
      {
        id: "b2ec-e1",
        prompt: { en: "On one hand (phrase)", fr: "D'une part", ar: "من جهة" },
        answers: ["d'une part", "d une part"],
      },
      {
        id: "b2ec-e2",
        prompt: { en: "Nevertheless", fr: "Néanmoins", ar: "ومع ذلك" },
        answers: ["neanmoins", "néanmoins"],
      },
      {
        id: "b2ec-e3",
        prompt: { en: "In conclusion", fr: "En définitive", ar: "في النهاية" },
        answers: ["en definitive", "en définitive"],
      },
      {
        id: "b2ec-e4",
        prompt: { en: "This article stresses that…", fr: "Cet article souligne que", ar: "المقال يبرز أن" },
        answers: ["cet article souligne que"],
      },
    ],
    review: {
      summary: {
        en: "B2 exam = structured debate language.",
        fr: "Examen B2 = langue du débat structuré.",
        ar: "امتحان B2 = لغة نقاش منظّم.",
      },
      checklist: {
        en: ["Both sides", "Concession", "Firm conclusion", "Reference to a text"],
        fr: ["Deux côtés", "Concession", "Conclusion", "Référence au texte"],
        ar: ["وجهان", "تنازل", "خاتمة", "إشارة لنص"],
      },
    },
    quiz: [
      {
        id: "b2ec-q1",
        prompt: { en: "Two-sided marker:", fr: "Deux côtés :", ar: "وجهان:" },
        options: {
          en: ["D'une part… d'autre part", "Seulement bonjour", "Un café", "Fermé"],
          fr: ["D'une part… d'autre part", "Seulement bonjour", "Un café", "Fermé"],
          ar: ["D'une part… d'autre part", "تحية فقط", "قهوة", "مغلق"],
        },
        correctIndex: 0,
      },
      {
        id: "b2ec-q2",
        prompt: { en: "Concession:", fr: "Concession :", ar: "تنازل:" },
        options: {
          en: ["Néanmoins", "Bonjour", "Merci", "Salut"],
          fr: ["Néanmoins", "Bonjour", "Merci", "Salut"],
          ar: ["Néanmoins", "Bonjour", "Merci", "Salut"],
        },
        correctIndex: 0,
      },
      {
        id: "b2ec-q3",
        prompt: { en: "Closing:", fr: "Clôture :", ar: "خاتمة:" },
        options: {
          en: ["En définitive", "Interdit de fumer", "Deux euros", "Ouvert"],
          fr: ["En définitive", "Interdit de fumer", "Deux euros", "Ouvert"],
          ar: ["En définitive", "Interdit de fumer", "Deux euros", "Ouvert"],
        },
        correctIndex: 0,
      },
      {
        id: "b2ec-q4",
        prompt: { en: "Citing a text:", fr: "Citer un texte :", ar: "الاقتباس من نص:" },
        options: {
          en: ["Cet article souligne que…", "Je m'appelle…", "Un thé s'il vous plaît", "Silence"],
          fr: ["Cet article souligne que…", "Je m'appelle…", "Un thé s'il vous plaît", "Silence"],
          ar: ["Cet article souligne que…", "Je m'appelle…", "Un thé s'il vous plaît", "Silence"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),

  // ——— C1 ———
  unit({
    id: "fr-c1-exam-core",
    level: "C1",
    order: 490,
    title: {
      en: "Exam prep C1: academic synthesis",
      fr: "Préparation examen C1",
      ar: "تجهيز امتحان C1: تلخيص أكاديمي",
    },
    completesGoals: ["goal-exam-c1-core"],
    lesson: {
      intro: {
        en: "DALF C1 values neutral synthesis then nuanced stance — train both here.",
        fr: "Le C1 valorise synthèse neutre puis position nuancée.",
        ar: "DALF C1 يقدّر تلخيصًا محايدًا ثم موقفًا متوازنًا — درّب الاتنين هنا.",
      },
      dialogue: [
        "— Les deux documents convergent sur…",
        "— En revanche, le second texte insiste sur…",
        "— On peut en déduire que…",
        "— Il convient de nuancer ce point de vue.",
      ],
      tip: {
        en: "Synthesize without copying; then evaluate.",
        fr: "Synthétisez sans copier ; puis évaluez.",
        ar: "لخّص بدون نسخ؛ ثم قيّم.",
      },
    },
    vocab: [
      { term: "converger sur", meaning: { en: "converge on", fr: "point commun", ar: "يتفقان على" }, example: "Les documents convergent sur…" },
      { term: "en revanche", meaning: { en: "on the other hand", fr: "opposition", ar: "في المقابل" }, example: "En revanche, le second texte…" },
      { term: "nuancer", meaning: { en: "to qualify / nuance", fr: "modérer", ar: "يخفف/يدقق" }, example: "Il convient de nuancer…" },
    ],
    exercises: [
      {
        id: "c1ec-e1",
        prompt: { en: "On the other hand", fr: "En revanche", ar: "في المقابل" },
        answers: ["en revanche"],
      },
      {
        id: "c1ec-e2",
        prompt: { en: "One can deduce that…", fr: "On peut en déduire que", ar: "يمكن استنتاج أن" },
        answers: ["on peut en deduire que", "on peut en déduire que"],
      },
      {
        id: "c1ec-e3",
        prompt: { en: "It is appropriate to nuance…", fr: "Il convient de nuancer", ar: "ينبغي تدقيق…" },
        answers: ["il convient de nuancer"],
      },
      {
        id: "c1ec-e4",
        prompt: { en: "The documents converge on…", fr: "Les documents convergent sur", ar: "الوثائق تتفق على" },
        answers: ["les documents convergent sur"],
      },
    ],
    review: {
      summary: {
        en: "C1 exam language = synthesis + nuance.",
        fr: "Langue C1 = synthèse + nuance.",
        ar: "لغة C1 = تلخيص + تدقيق.",
      },
      checklist: {
        en: ["Compare sources", "Contrast", "Deduce", "Nuance"],
        fr: ["Comparer", "Contraster", "Déduire", "Nuancer"],
        ar: ["مقارنة مصادر", "مقابلة", "استنتاج", "تدقيق"],
      },
    },
    quiz: [
      {
        id: "c1ec-q1",
        prompt: { en: "Contrast linker:", fr: "Opposition :", ar: "رابط مقابلة:" },
        options: {
          en: ["En revanche", "Bonjour", "Deux euros", "Silence"],
          fr: ["En revanche", "Bonjour", "Deux euros", "Silence"],
          ar: ["En revanche", "Bonjour", "Deux euros", "Silence"],
        },
        correctIndex: 0,
      },
      {
        id: "c1ec-q2",
        prompt: { en: "Deduction:", fr: "Déduction :", ar: "استنتاج:" },
        options: {
          en: ["On peut en déduire que…", "Je m'appelle…", "Un café", "Fermé"],
          fr: ["On peut en déduire que…", "Je m'appelle…", "Un café", "Fermé"],
          ar: ["On peut en déduire que…", "Je m'appelle…", "Un café", "Fermé"],
        },
        correctIndex: 0,
      },
      {
        id: "c1ec-q3",
        prompt: { en: "Nuance verb:", fr: "Nuancer :", ar: "فعل التدقيق:" },
        options: {
          en: ["Nuancer", "Fumer", "Fermer", "Coûter"],
          fr: ["Nuancer", "Fumer", "Fermer", "Coûter"],
          ar: ["Nuancer", "Fumer", "Fermer", "Coûter"],
        },
        correctIndex: 0,
      },
      {
        id: "c1ec-q4",
        prompt: { en: "Shared point:", fr: "Point commun :", ar: "نقطة مشتركة:" },
        options: {
          en: ["Converger sur", "Interdit de", "Entrée libre seulement", "Numéro de téléphone"],
          fr: ["Converger sur", "Interdit de", "Entrée libre seulement", "Numéro"],
          ar: ["Converger sur", "Interdit de", "Entrée libre seulement", "Numéro"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),

  // ——— C2 ———
  unit({
    id: "fr-c2-exam-core",
    level: "C2",
    order: 590,
    title: {
      en: "Exam prep C2: mastery interaction",
      fr: "Préparation examen C2",
      ar: "تجهيز امتحان C2: تفاعل بإتقان",
    },
    completesGoals: ["goal-exam-c2-core"],
    lesson: {
      intro: {
        en: "DALF C2 expects flexible, precise language on complex topics — final on-site readiness unit.",
        fr: "Le C2 exige une langue précise et souple.",
        ar: "DALF C2 يتوقع لغة دقيقة ومرنة في مواضيع معقدة — آخر وحدة استعداد على الموقع.",
      },
      dialogue: [
        "— Force est de constater que…",
        "— Encore faut-il préciser que…",
        "— Loin de résoudre le problème, cette mesure risque de…",
        "— Pour conclure avec nuance…",
      ],
      tip: {
        en: "Prefer precise verbs over vague ones; acknowledge complexity.",
        fr: "Préférez des verbes précis ; reconnaissez la complexité.",
        ar: "فضّل أفعالًا دقيقة؛ واعترف بتعقيد الموضوع.",
      },
    },
    vocab: [
      { term: "force est de constater que", meaning: { en: "it must be noted that", fr: "constat formel", ar: "لا بد من ملاحظة أن" }, example: "Force est de constater que…" },
      { term: "encore faut-il préciser que", meaning: { en: "it should still be specified that", fr: "précision", ar: "مع ضرورة التوضيح أن" }, example: "Encore faut-il préciser que…" },
      { term: "loin de…", meaning: { en: "far from…", fr: "opposition forte", ar: "بعيدًا عن…" }, example: "Loin de résoudre le problème…" },
    ],
    exercises: [
      {
        id: "c2ec-e1",
        prompt: { en: "It must be noted that…", fr: "Force est de constater que", ar: "لا بد من ملاحظة أن" },
        answers: ["force est de constater que"],
      },
      {
        id: "c2ec-e2",
        prompt: { en: "It should still be specified that…", fr: "Encore faut-il préciser que", ar: "مع ضرورة التوضيح" },
        answers: ["encore faut-il preciser que", "encore faut-il préciser que"],
      },
      {
        id: "c2ec-e3",
        prompt: { en: "Far from solving the problem…", fr: "Loin de résoudre le problème", ar: "بعيدًا عن حل المشكلة" },
        answers: ["loin de resoudre le probleme", "loin de résoudre le problème"],
      },
      {
        id: "c2ec-e4",
        prompt: { en: "To conclude with nuance…", fr: "Pour conclure avec nuance", ar: "للخاتمة بدقة" },
        answers: ["pour conclure avec nuance"],
      },
    ],
    review: {
      summary: {
        en: "C2 = precise stance on complex issues.",
        fr: "C2 = position précise sur des sujets complexes.",
        ar: "C2 = موقف دقيق في قضايا معقدة.",
      },
      checklist: {
        en: ["Formal observation", "Precision", "Strong contrast", "Nuanced close"],
        fr: ["Constat formel", "Précision", "Contraste fort", "Clôture nuancée"],
        ar: ["ملاحظة رسمية", "تدقيق", "مقابلة قوية", "خاتمة متقنة"],
      },
    },
    quiz: [
      {
        id: "c2ec-q1",
        prompt: { en: "Formal observation:", fr: "Constat :", ar: "ملاحظة رسمية:" },
        options: {
          en: ["Force est de constater que…", "Bonjour", "Deux euros", "Silence"],
          fr: ["Force est de constater que…", "Bonjour", "Deux euros", "Silence"],
          ar: ["Force est de constater que…", "Bonjour", "Deux euros", "Silence"],
        },
        correctIndex: 0,
      },
      {
        id: "c2ec-q2",
        prompt: { en: "Precision:", fr: "Précision :", ar: "تدقيق:" },
        options: {
          en: ["Encore faut-il préciser que…", "Je m'appelle…", "Un thé", "Fermé mardi"],
          fr: ["Encore faut-il préciser que…", "Je m'appelle…", "Un thé", "Fermé mardi"],
          ar: ["Encore faut-il préciser que…", "Je m'appelle…", "Un thé", "Fermé mardi"],
        },
        correctIndex: 0,
      },
      {
        id: "c2ec-q3",
        prompt: { en: "Strong contrast start:", fr: "Contraste :", ar: "بداية مقابلة:" },
        options: {
          en: ["Loin de…", "Merci", "Salut", "Café"],
          fr: ["Loin de…", "Merci", "Salut", "Café"],
          ar: ["Loin de…", "Merci", "Salut", "Café"],
        },
        correctIndex: 0,
      },
      {
        id: "c2ec-q4",
        prompt: { en: "Nuanced ending:", fr: "Fin nuancée :", ar: "نهاية متقنة:" },
        options: {
          en: ["Pour conclure avec nuance…", "Interdit de fumer", "Entrée libre", "Numéro"],
          fr: ["Pour conclure avec nuance…", "Interdit de fumer", "Entrée libre", "Numéro"],
          ar: ["Pour conclure avec nuance…", "Interdit de fumer", "Entrée libre", "Numéro"],
        },
        correctIndex: 0,
      },
    ],
    passRatio: 0.7,
  }),
];
