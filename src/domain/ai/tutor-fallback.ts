/**
 * Offline / no-API tutor responses.
 * Honest: not a cloud LLM. Pattern-based help.
 */

export type TutorMode = "learn" | "conversation" | "correction";

export interface TutorMessage {
  role: "user" | "tutor";
  text: string;
  at: string;
}

const TIPS: { match: RegExp; reply: string }[] = [
  {
    match: /bonjour|salut/i,
    reply:
      "Bonjour ! Pour vous présenter : « Bonjour, je m'appelle … ». Essayez d'écrire une phrase complète.",
  },
  {
    match: /café|boisson|commander/i,
    reply:
      "Au café, une phrase simple : « Un café, s'il vous plaît. » ou « Je voudrais un thé. »",
  },
  {
    match: /merci|s'?il vous plaît|politesse/i,
    reply:
      "Politesse utile : s'il vous plaît, merci, merci beaucoup, de rien. Combinez-les dans une commande.",
  },
  {
    match: /grammaire|article|le la/i,
    reply:
      "Articles : le (masculin), la (féminin), l' (devant une voyelle), les (pluriel). Exemple : le café, la gare, l'eau.",
  },
  {
    match: /hello|my name|english/i,
    reply:
      "In English: « Hi, my name is… » / « What's your name? » / « Nice to meet you. »",
  },
  {
    match: /corrige|correct|erreur/i,
    reply:
      "Mode correction local : envoyez une phrase. Je signale des formes fréquentes seulement. Sans API cloud, l'analyse reste limitée et honnête.",
  },
];

export function isCloudAiConfigured(): boolean {
  return false;
}

export function localTutorReply(userText: string, mode: TutorMode): string {
  const trimmed = userText.trim();
  if (!trimmed) {
    return "Écrivez une question ou une phrase (français ou anglais selon votre parcours).";
  }

  if (mode === "correction") {
    const lower = trimmed.toLowerCase();
    const notes: string[] = [];
    if (/\bje appelle\b/.test(lower) && !/\bje m'appelle\b/.test(lower)) {
      notes.push("Préférez « je m'appelle » (pas « je appelle »).");
    }
    if (/\bje vouloir\b/.test(lower)) {
      notes.push("Conjugaison : « je veux » ou plus poli « je voudrais ».");
    }
    if (/\bi is\b/.test(lower)) {
      notes.push("English: use « I am » not « I is ».");
    }
    if (notes.length === 0) {
      return (
        "Phrase reçue. Sans modèle cloud, analyse limitée. " +
        "Vérifiez les formes de base. Texte : « " +
        trimmed +
        " »"
      );
    }
    return notes.join(" ") + " Texte : « " + trimmed + " »";
  }

  if (mode === "conversation") {
    return (
      "Continuons (mode local). Répondez si possible dans la langue que vous apprenez. " +
      "Message reçu : « " +
      trimmed +
      " »"
    );
  }

  for (const tip of TIPS) {
    if (tip.match.test(trimmed)) return tip.reply;
  }

  return (
    "Mode tuteur local (sans clé API). Posez une question sur se présenter, le café, la politesse, ou l'anglais de base. " +
    "Un tuteur LLM cloud nécessite un backend sécurisé — rien n'est inventé ici."
  );
}
