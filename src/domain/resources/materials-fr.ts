/**
 * French-language support for on-site materials (for learners using the
 * French interface): a short note per material and a monolingual gloss
 * per vocabulary item. Keyed by material id / French term.
 */

import type { Locale } from "../types";
import type { MaterialItem } from "./materials";

export const NOTE_FR: Record<string, string> = {
  "a1-greetings": "Salutations formelles de la journée. Le soir, on dit « Bonsoir ».",
  "a1-identity": "Nom, âge, ville, métier, langues : l’essentiel du niveau A1.",
  "a1-cafe": "Commander une boisson et payer poliment.",
  "a1-shop": "Demander des aliments et des quantités.",
  "a1-numbers": "Les nombres pour les prix, l’heure et les quantités.",
  "a1-time": "Expressions simples pour dire l’heure.",
  "a2-routine": "Décrire ses habitudes au présent, dans l’ordre.",
  "a2-directions": "Demander et suivre un itinéraire simple dans la rue.",
  "a2-passe": "Le passé composé avec avoir et être.",
  "a2-invitation": "Inviter quelqu’un et fixer une heure (tutoiement).",
  "a2-health": "Exprimer des problèmes de santé simples.",
  "b1-opinion": "Donner et justifier son avis avec des connecteurs.",
  "b1-story": "Raconter une histoire passée avec causes et conséquences.",
  "b1-housing": "Se renseigner par téléphone sur une location.",
  "b1-si": "Conditions réelles au présent et au futur.",
  "b2-argument": "Argumentation en deux temps et conclusion nuancée.",
  "b2-media": "Rapporter des chiffres et des explications sur un ton neutre.",
  "b2-concession": "Bien que / même si pour nuancer une position.",
  "c1-hedging": "Atténuer ses affirmations ; éviter d’exagérer.",
  "c1-synthesis": "Faire la synthèse de causes sans simplement les énumérer.",
  "c1-nominal": "Passer d’une formulation verbale à une formulation nominale (écrit soutenu).",
  "c2-style": "Prose soutenue proche du natif ; subordination complexe.",
  "c2-registers": "Adapter le registre à la situation.",
  "c2-irony": "Percevoir l’implicite et l’ironie retenue dans un français soutenu.",
  "a1-family": "Les mots essentiels de la famille.",
  "a1-food": "Noms courants de la nourriture.",
  "a1-transport": "Acheter un billet de train simple.",
  "a1-colors": "Les couleurs de base.",
  "a1-days": "Les jours de la semaine et le week-end.",
  "a1-hotel": "S’enregistrer à l’hôtel et demander le petit-déjeuner.",
  "a1-negation": "On place « ne » avant le verbe et « pas » après.",
  "a2-weather": "Décrire le temps qu’il fait.",
  "a2-clothes": "La taille, essayer, trop grand / plus petit.",
  "a2-imparfait": "Habitudes et descriptions au passé.",
  "a2-phone": "Prendre contact par téléphone de façon formelle.",
  "a2-comparatif": "plus / moins / aussi + adjectif + que.",
  "a2-work": "Le métier, les horaires, le télétravail.",
  "b1-travel": "Raconter un imprévu de voyage et sa résolution.",
  "b1-advice": "Donner des conseils avec devoir / éviter de.",
  "b1-future": "Le futur des verbes réguliers et des irréguliers courants.",
  "b1-complaint": "Se plaindre et demander une solution poliment.",
  "b1-relative": "qui = sujet, que = complément d’objet.",
  "b2-environment": "Thèse, réserve, risque.",
  "b2-subjunctive": "Nécessité, volonté, concession → subjonctif.",
  "b2-formal-email": "Formules d’ouverture et de clôture d’un courriel formel.",
  "b2-passive": "être + participe passé, accordé en genre et en nombre.",
  "c1-connectors": "Connecteurs pour l’argumentation écrite formelle.",
  "c1-critique": "Éloge + limite + conséquence.",
  "c1-hypothesis": "L’hypothèse irréelle dans le passé.",
  "c2-rhetoric": "Prose évaluative dense.",
  "c2-intertextual": "Distinction conceptuelle à un niveau proche du natif.",
  "c2-precision": "Préférer des noms précis aux mots vagues.",
};

export const GLOSS_FR: Record<string, string> = {
  "Bonjour": "salutation de la journée",
  "Bonsoir": "salutation du soir",
  "Comment allez-vous ?": "question polie sur l’état de quelqu’un",
  "Au revoir": "formule pour se quitter",
  "À bientôt": "on se reverra prochainement",
  "Je m'appelle…": "pour dire son nom",
  "J'ai … ans": "pour dire son âge",
  "J'habite à…": "pour dire sa ville",
  "Je suis…": "pour dire son métier ou son identité",
  "Vous désirez ?": "question du serveur : que voulez-vous ?",
  "S'il vous plaît": "formule de politesse pour demander",
  "Ça fait…": "pour annoncer le prix total",
  "Je vous en prie": "réponse polie à « merci »",
  "Je voudrais…": "forme polie pour demander",
  "du pain": "une quantité de pain",
  "une baguette": "pain long et fin",
  "D'habitude": "en général, habituellement",
  "se lever": "sortir du lit",
  "puis": "ensuite",
  "tout droit": "sans tourner",
  "à droite": "du côté droit",
  "à gauche": "du côté gauche",
  "le feu rouge": "le feu de circulation",
  "J'ai mal à…": "pour dire où l’on a une douleur",
  "fatigué(e)": "qui manque d’énergie",
  "le médecin": "la personne qui soigne",
  "À mon avis": "selon moi",
  "Je trouve que": "je pense que",
  "En revanche": "au contraire, par contre",
  "à cause de": "en raison de (cause négative)",
  "finalement": "à la fin",
  "un rendez-vous": "une rencontre fixée à l’avance",
  "D'une part": "premier point d’une argumentation",
  "D'autre part": "second point d’une argumentation",
  "Il convient de": "il est approprié de",
  "Selon": "d’après",
  "attribuer à": "considérer comme la cause de",
  "la hausse": "l’augmentation",
  "Il semblerait que": "on dirait que (avec prudence)",
  "Cela dit": "néanmoins",
  "prématuré": "qui arrive trop tôt",
  "le père": "le parent masculin",
  "la mère": "le parent féminin",
  "le frère": "le fils des mêmes parents",
  "la sœur": "la fille des mêmes parents",
  "les enfants": "les fils et les filles",
  "l'eau": "la boisson de base",
  "le fromage": "produit fait avec du lait",
  "le poisson": "animal qui vit dans l’eau",
  "un billet": "le titre de transport",
  "aller simple": "billet pour un seul trajet",
  "aller-retour": "billet pour l’aller et le retour",
  "le quai": "l’endroit où l’on attend le train",
  "Il fait beau": "le temps est agréable",
  "Il pleut": "la pluie tombe",
  "Il neige": "la neige tombe",
  "la taille": "la mesure d’un vêtement",
  "essayer": "mettre un vêtement pour voir s’il va",
  "trop grand": "plus grand que nécessaire",
  "annulé": "qui n’aura pas lieu",
  "patienter": "attendre calmement",
  "prendre en charge": "s’occuper de, payer",
  "Toutefois": "cependant",
  "accessibles": "abordables, à portée de tous",
  "néanmoins": "pourtant",
  "par conséquent": "donc",
  "en dépit de": "malgré",
};

/** Short explanation shown under a material, in the interface language. */
export function getMaterialNote(item: MaterialItem, locale: Locale): string {
  if (locale === "ar") return item.bodyAr;
  if (locale === "fr") return NOTE_FR[item.id] ?? item.bodyEn;
  return item.bodyEn;
}

/** Gloss for a vocabulary item, in the interface language. */
export function getGloss(
  v: { fr: string; en: string; ar: string },
  locale: Locale
): string {
  if (locale === "ar") return v.ar;
  if (locale === "fr") return GLOSS_FR[v.fr] ?? v.en;
  return v.en;
}
