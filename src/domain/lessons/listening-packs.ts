/**
 * Longer on-site listening passages (played via TTS).
 * Used by teacher lab and practice — no external audio hosts.
 */

export type ListeningPack = {
  id: string;
  level: string;
  title: { en: string; fr: string; ar: string };
  /** Full passage to speak */
  passage: string;
  /** Comprehension focus lines */
  focus: string[];
};

export const LISTENING_PACKS: ListeningPack[] = [
  {
    id: "listen-a1-day",
    level: "A1",
    title: {
      en: "A simple day",
      fr: "Une journée simple",
      ar: "يوم بسيط",
    },
    passage:
      "Bonjour. Je m'appelle Léa. Je me lève à sept heures. Je prends un café et un croissant. Ensuite, je vais au travail en métro. Le soir, je dîne avec ma famille. Je me couche vers vingt-deux heures. Au revoir !",
    focus: [
      "Je me lève à sept heures.",
      "Je vais au travail en métro.",
      "Je dîne avec ma famille.",
    ],
  },
  {
    id: "listen-a1-shop",
    level: "A1",
    title: {
      en: "At the bakery",
      fr: "À la boulangerie",
      ar: "في المخبز",
    },
    passage:
      "Bonjour madame. Je voudrais une baguette et deux pains au chocolat, s'il vous plaît. Ça fait quatre euros vingt. Voilà. Merci beaucoup. Bonne journée !",
    focus: [
      "Je voudrais une baguette.",
      "Ça fait quatre euros vingt.",
      "Merci beaucoup.",
    ],
  },
  {
    id: "listen-a2-weekend",
    level: "A2",
    title: {
      en: "Last weekend",
      fr: "Le week-end dernier",
      ar: "نهاية الأسبوع الماضية",
    },
    passage:
      "Le week-end dernier, j'ai visité un musée avec des amis. Nous sommes restés trois heures. Ensuite, nous avons déjeuné dans un petit restaurant. Dimanche, j'ai regardé un film et j'ai dormi tôt. C'était calme et agréable.",
    focus: [
      "J'ai visité un musée.",
      "Nous sommes restés trois heures.",
      "J'ai regardé un film.",
    ],
  },
  {
    id: "listen-b1-opinion",
    level: "B1",
    title: {
      en: "An opinion on social media",
      fr: "Avis sur les réseaux",
      ar: "رأي في الشبكات",
    },
    passage:
      "À mon avis, les réseaux sociaux peuvent aider à apprendre une langue, si on les utilise bien. Par exemple, on peut écouter des podcasts courts chaque jour. Je ne suis pas totalement d'accord avec ceux qui disent que c'est seulement une distraction. Il faut trouver un équilibre.",
    focus: [
      "À mon avis…",
      "Par exemple…",
      "Il faut trouver un équilibre.",
    ],
  },
  {
    id: "listen-b2-city",
    level: "B2",
    title: {
      en: "City measure",
      fr: "Une mesure urbaine",
      ar: "إجراء حضري",
    },
    passage:
      "La ville propose d'interdire les voitures le dimanche en centre-ville. D'un côté, cela réduirait la pollution. De l'autre, les commerçants craignent une baisse de fréquentation. On pourrait prévoir des navettes gratuites. En somme, la mesure mérite un essai limité dans le temps.",
    focus: [
      "D'un côté… de l'autre…",
      "En somme…",
      "Un essai limité.",
    ],
  },
  {
    id: "listen-c1-report",
    level: "C1",
    title: {
      en: "Policy report excerpt",
      fr: "Extrait de rapport",
      ar: "مقتطف تقرير",
    },
    passage:
      "Le rapport préconise un investissement ciblé sur les transports du quotidien. Cette orientation suppose une coordination entre collectivités. À défaut d'un calendrier réaliste, les retards s'accumuleront. En dernière analyse, le succès dépend moins du budget que de la gouvernance.",
    focus: [
      "Le rapport préconise…",
      "À défaut de…",
      "En dernière analyse…",
    ],
  },
  {
    id: "listen-c2-ethics",
    level: "C2",
    title: {
      en: "Ethics of automation",
      fr: "Éthique de l'automatisation",
      ar: "أخلاقيات الأتمتة",
    },
    passage:
      "L'automatisation des décisions publiques promet efficacité et impartialité apparente. Encore faut-il que les critères encodés ne reproduisent pas des biais historiques. L'opacité des systèmes pose un problème démocratique. On objectera que la transparence totale peut freiner l'innovation. L'objection n'est pas négligeable ; elle ne dispense pas d'un contrôle citoyen.",
    focus: [
      "Encore faut-il que…",
      "On objectera que…",
      "Contrôle citoyen.",
    ],
  },
];

export function getListeningPacksByLevel(level: string): ListeningPack[] {
  return LISTENING_PACKS.filter((p) => p.level === level);
}

export function getAllListeningPacks(): ListeningPack[] {
  return LISTENING_PACKS;
}
