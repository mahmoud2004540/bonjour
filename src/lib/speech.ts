/** Browser TTS for French — on-site pronunciation aid */

export function speakFrench(text: string): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "fr-FR";
  u.rate = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const fr = voices.find(
    (v) => v.lang.startsWith("fr") && (v.localService || true)
  );
  if (fr) u.voice = fr;
  window.speechSynthesis.speak(u);
}

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/** Read several French lines one after another (browser TTS queue). */
export function speakFrenchSequence(texts: string[]): void {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const voices = window.speechSynthesis.getVoices();
  const fr = voices.find((v) => v.lang.startsWith("fr"));
  for (const text of texts) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "fr-FR";
    u.rate = 0.9;
    if (fr) u.voice = fr;
    window.speechSynthesis.speak(u);
  }
}

export function stopSpeaking(): void {
  if (typeof window !== "undefined" && window.speechSynthesis) window.speechSynthesis.cancel();
}
