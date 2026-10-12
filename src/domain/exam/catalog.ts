/**
 * Official exam alignment (DELF / DALF style).
 * Bonjour prepares the learner; the accredited certificate is issued
 * by an authorized exam center or school — not by this website alone.
 */

export type ExamLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type ExamSkill = "listening" | "reading" | "writing" | "speaking";

export type MockItem = {
  id: string;
  skill: ExamSkill;
  prompt: { en: string; fr: string; ar: string };
  /** Optional French passage or audio script */
  stimulus?: string;
  options?: { en: string[]; fr: string[]; ar: string[] };
  correctIndex?: number;
  /** Writing / speaking guidance */
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

export const EXAM_BLUEPRINTS: ExamBlueprint[] = [
  {
    level: "A1",
    officialName: "DELF A1",
    durationMinutes: 80,
    passNote: {
      en: "Official pass is decided by the exam center (usually 50/100 with minima per skill).",
      fr: "La réussite officielle est décidée par le centre d'examen.",
      ar: "النجاح الرسمي يقرّره مركز الامتحان (غالبًا 50/100 مع حد أدنى لكل مهارة).",
    },
    skills: [
      {
        skill: "listening",
        title: { en: "Listening", fr: "Compréhension de l'oral", ar: "استماع" },
        whatYouDo: {
          en: "Short recordings: answer simple questions.",
          fr: "Courts enregistrements : questions simples.",
          ar: "تسجيلات قصيرة وأسئلة بسيطة.",
        },
      },
      {
        skill: "reading",
        title: { en: "Reading", fr: "Compréhension des écrits", ar: "قراءة" },
        whatYouDo: {
          en: "Signs, messages, short texts.",
          fr: "Panneaux, messages, textes courts.",
          ar: "لافتات ورسائل ونصوص قصيرة.",
        },
      },
      {
        skill: "writing",
        title: { en: "Writing", fr: "Production écrite", ar: "كتابة" },
        whatYouDo: {
          en: "Fill a form / write a short postcard.",
          fr: "Formulaire / carte postale courte.",
          ar: "ملء استمارة أو بطاقة قصيرة.",
        },
      },
      {
        skill: "speaking",
        title: { en: "Speaking", fr: "Production orale", ar: "تحدث" },
        whatYouDo: {
          en: "Introduce yourself and answer simple questions.",
          fr: "Se présenter et répondre.",
          ar: "قدّم نفسك وأجب عن أسئلة بسيطة.",
        },
      },
    ],
    readinessChecklist: {
      en: [
        "Greet, introduce yourself, say where you live",
        "Understand prices, times, simple directions",
        "Write 3–5 simple sentences",
        "Ask for something in a shop or café",
      ],
      fr: [
        "Saluer, se présenter, dire où l'on habite",
        "Comprendre prix, horaires, indications simples",
        "Écrire 3 à 5 phrases simples",
        "Demander quelque chose au café",
      ],
      ar: [
        "تحية وتقديم النفس ومكان السكن",
        "فهم الأسعار والوقت والاتجاهات البسيطة",
        "كتابة 3–5 جمل بسيطة",
        "طلب شيء في محل أو مقهى",
      ],
    },
    mock: [
      {
        id: "a1-r1",
        skill: "reading",
        stimulus:
          "Café du Parc — Ouvert de 8h à 19h. Un café : 2 €. Un thé : 2,50 €. Wi-Fi gratuit.",
        prompt: {
          en: "Until what time is the café open?",
          fr: "Jusqu'à quelle heure le café est-il ouvert ?",
          ar: "المقهى مفتوح حتى أي ساعة؟",
        },
        options: {
          en: ["8h", "12h", "19h", "22h"],
          fr: ["8h", "12h", "19h", "22h"],
          ar: ["8",\