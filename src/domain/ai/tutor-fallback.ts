/**
 * Offline / no-API tutor responses.
 * Honest: not a cloud LLM. Pattern-based help for French beginners.
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
    match: /corrige|correct|erreur/i,
    reply:
      "Mode correction local : envoyez une phrase en français. Je signale les formes très fréquentes (je m'appelle, je voudrais…). Sans API cloud, l'analyse reste limitée et honnête.",
  },
];

export function isCloudAiConfigured(): boolean {
  // Client-safe: never embed secrets. Cloud AI requires a backend + env later.
  return false;
}

export function localTutorReply(
  userText: string,
  mode: TutorMode
): string {
  const trimmed = userText.trim();
  if (!trimmed) {
    return "Écrivez une question ou une phrase en français (ou dans votre langue d'interface).",
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
    if (notes.length === 0) {
      return (
        "Phrase reçue. Sans modèle cloud, je ne peux pas analyser toute la grammaire. " +
        "Vérifiez : accords de base, je m'appelle / je voudrais / s'il vous plaît. " +
        "Votre texte : « " +
        trimmed +
        " »"
      );
    }
    return notes.join(" ") + " Texte : « " + trimmed + " »";
  }

  if (mode === "conversation") {
    return (
      "Continuons (mode local) : répondez en français si possible. " +
      "Par exemple, présentez-vous ou commandez quelque chose au café. " +
      "Message reçu : « " +
      trimmed +
      " »"
    );
  }

  for (const tip of TIPS) {
    if (tip.match.test(trimmed)) return tip.reply;
  }

  return (
    "Mode tuteur local (sans clé API). Posez une question sur : se présenter, le café, la politesse, les articles. " +
    "Pour un tuteur LLM complet, configurez un fournisseur côté serveur plus tard — rien n'est inventé ici."
  );
}
