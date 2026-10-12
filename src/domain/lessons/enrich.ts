import type { ExerciseItem, LessonUnit, QuizItem, VocabCard } from "./types";

/** Extra practice + quiz items merged into every unit so each topic is complete. */
const EXTRA_EX: Record<string, ExerciseItem[]> = {
  "fr-a1-intro-unit": [
    {
      id: "a1i-e4",
      prompt: {
        en: "Write: Nice to meet you.",
        fr: "Écrivez : Enchanté.",
        ar: "اكتب: تشرفنا.",
      },
      answers: ["enchante", "enchanté", "enchantee", "enchantée"],
    },
    {
      id: "a1i-e5",
      prompt: {
        en: "Write a full intro: Bonjour, je m'appelle + a name.",
        fr: "Présentation complète.",
        ar: "تقديم كامل.",
      },
      answers: [
        "bonjour, je m'appelle sara",
        "bonjour je m'appelle sara",
        "bonjour, je m'appelle ahmed",
        "bonjour je m'appelle ahmed",
        "bonjour, je m'appelle nour",
        "bonjour je m'appelle marie",
      ],
      hint: {
        en: "Bonjour, je m'appelle…",
        fr: "Bonjour, je m'appelle…",
        ar: "Bonjour, je m'appelle…",
      },
    },
  ],
  "fr-a1-cafe-unit": [
    {
      id: "a1c-e3",
      prompt: {
        en: "Order a tea politely.",
        fr: "Un thé, s'il vous plaît.",
        ar: "اطلب شايًا بأدب.",
      },
      answers: [
        "un the, s'il vous plait",
        "un thé, s'il vous plaît",
        "un the s'il vous plait",
        "un thé s'il vous plaît",
      ],
    },
    {
      id: "a1c-e4",
      prompt: {
        en: "Say thank you.",
        fr: "Merci.",
        ar: "شكرًا.",
      },
      answers: ["merci", "merci beaucoup"],
    },
  ],
  "fr-a1-courses-unit": [
    {
      id: "a1s-e3",
      prompt: {
        en: "Say: three euros.",
        fr: "Trois euros.",
        ar: "ثلاثة يورو.",
      },
      answers: ["trois euros", "3 euros"],
    },
    {
      id: "a1s-e4",
      prompt: {
        en: "Say hello in the shop.",
        fr: "Bonjour (magasin).",
        ar: "مرحبًا في المحل.",
      },
      answers: ["bonjour"],
    },
  ],
  "fr-a1-transport-unit": [
    {
      id: "a1t-e3",
      prompt: {
        en: "Say: turn left (à gauche).",
        fr: "À gauche.",
        ar: "يسار.",
      },
      answers: ["a gauche", "à gauche"],
    },
    {
      id: "a1t-e4",
      prompt: {
        en: "Say: excuse me.",
        fr: "Excusez-moi.",
        ar: "المعذرة.",
      },
      answers: ["excusez-moi", "excusez moi"],
    },
  ],
  "fr-a1-sante-unit": [
    {
      id: "a1h-e3",
      prompt: {
        en: "Ask for something for the pain.",
        fr: "Pour la douleur.",
        ar: "لشيء للألم.",
      },
      answers: [
        "avez-vous quelque chose pour la douleur",
        "avez vous quelque chose pour la douleur",
      ],
      hint: {
        en: "Avez-vous quelque chose pour…",
        fr: "Avez-vous quelque chose pour…",
        ar: "Avez-vous quelque chose pour…",
      },
    },
  ],
};

const EXTRA_QUIZ: Record<string, QuizItem[]> = {
  "fr-a1-intro-unit": [
    {
      id: "a1i-q4",
      prompt: {
        en: "Enchanté means…",
        fr: "Enchanté signifie…",
        ar: "Enchanté تعني…",
      },
      options: {
        en: ["Goodbye", "Nice to meet you", "Thank you", "Sorry"],
        fr: ["Au revoir", "Ravi de faire connaissance", "Merci", "Pardon"],
        ar: ["وداعًا", "تشرفنا", "شكرًا", "آسف"],
      },
      correctIndex: 1,
    },
  ],
  "fr-a1-cafe-unit": [
    {
      id: "a1c-q4",
      prompt: {
        en: "Merci means…",
        fr: "Merci signifie…",
        ar: "Merci تعني…",
      },
      options: {
        en: ["Please", "Thank you", "Hello", "Bill"],
        fr: ["S'il vous plaît", "Remerciement", "Bonjour", "Addition"],
        ar: ["من فضلك", "شكرًا", "مرحبًا", "فاتورة"],
      },
      correctIndex: 1,
    },
  ],
  "fr-a1-courses-unit": [
    {
      id: "a1s-q3",
      prompt: {
        en: "euros are…",
        fr: "les euros sont…",
        ar: "اليورو هو…",
      },
      options: {
        en: ["a food", "money / currency", "a station", "a coat"],
        fr: ["un aliment", "une monnaie", "une gare", "un manteau"],
        ar: ["طعام", "عملة", "محطة", "معطف"],
      },
      correctIndex: 1,
    },
  ],
  "fr-a1-transport-unit": [
    {
      id: "a1t-q3",
      prompt: {
        en: "un billet is…",
        fr: "un billet est…",
        ar: "un billet هو…",
      },
      options: {
        en: ["a drink", "a ticket", "a house", "a brother"],
        fr: ["une boisson", "un ticket", "une maison", "un frère"],
        ar: ["مشروب", "تذكرة", "منزل", "أخ"],
      },
      correctIndex: 1,
    },
  ],
  "fr-a1-sante-unit": [
    {
      id: "a1h-q3",
      prompt: {
        en: "Je ne me sens pas bien means…",
        fr: "Je ne me sens pas bien signifie…",
        ar: "Je ne me sens pas bien تعني…",
      },
      options: {
        en: ["I'm fine", "I don't feel well", "I'm hungry", "I'm late"],
        fr: ["Je vais bien", "Je me sens mal", "J'ai faim", "Je suis en retard"],
        ar: ["بخير", "لست بخير", "جائع", "متأخر"],
      },
      correctIndex: 1,
    },
  ],
};

/** Generic filler so thinner units still get 4 exercises + 4 quiz items minimum */
function padExercises(unit: LessonUnit): ExerciseItem[] {
  const base = [...unit.exercises, ...(EXTRA_EX[unit.id] ?? [])];
  let i = 0;
  while (base.length < 4) {
    i += 1;
    const term = unit.vocab[i % unit.vocab.length]?.term ?? unit.title.fr;
    base.push({
      id: `${unit.id}-pad-ex-${i}`,
      prompt: {
        en: `Write this French word/phrase: ${term}`,
        fr: `Écrivez : ${term}`,
        ar: `اكتب بالفرنسية: ${term}`,
      },
      answers: [term.toLowerCase(), term],
    });
  }
  return base;
}

function padQuiz(unit: LessonUnit): QuizItem[] {
  const base = [...unit.quiz, ...(EXTRA_QUIZ[unit.id] ?? [])];
  let i = 0;
  while (base.length < 4) {
    i += 1;
    const v = unit.vocab[i % unit.vocab.length];
    if (!v) break;
    base.push({
      id: `${unit.id}-pad-q-${i}`,
      prompt: {
        en: `What is « ${v.term} » closest to?`,
        fr: `« ${v.term} » correspond à…`,
        ar: `« ${v.term} » أقرب إلى…`,
      },
      options: {
        en: [v.meaning.en, "a train station", "a random number", "nothing"],
        fr: [v.meaning.fr, "une gare", "un nombre", "rien"],
        ar: [v.meaning.ar, "محطة قطار", "رقم عشوائي", "لا شيء"],
      },
      correctIndex: 0,
    });
  }
  return base;
}

function padVocab(unit: LessonUnit): VocabCard[] {
  if (unit.vocab.length >= 4) return unit.vocab;
  return unit.vocab;
}

/** Return a full lesson package: lesson + vocab + ≥4 exercises + review + ≥4 quiz */
export function enrichUnit(unit: LessonUnit): LessonUnit {
  return {
    ...unit,
    vocab: padVocab(unit),
    exercises: padExercises(unit),
    quiz: padQuiz(unit),
    passRatio: unit.passRatio >= 0.5 ? unit.passRatio : 0.5,
    lesson: {
      ...unit.lesson,
      intro: {
        en: unit.lesson.intro.en,
        fr: unit.lesson.intro.fr,
        ar: unit.lesson.intro.ar,
      },
    },
  };
}
