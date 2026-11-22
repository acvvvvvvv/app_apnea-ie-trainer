export interface WateringZone {
  id: 'terre' | 'feuilles' | 'pot'
  icon: string
  label: string
  short: string
  detail: string
}

// Contenu du guide d'observation (F02, US-003/US-004) — statique et embarqué,
// disponible offline, pas de fréquence fixe imposée.
export const WATERING_ZONES: WateringZone[] = [
  {
    id: 'terre',
    icon: '✋',
    label: 'Toucher la terre',
    short: 'Le geste le plus fiable pour savoir si ta plante a soif.',
    detail:
      "Enfonce ton doigt à 3-4 cm de profondeur. Si c'est sec, ta plante a probablement soif. Si c'est humide, attends encore.",
  },
  {
    id: 'feuilles',
    icon: '👁️',
    label: 'Observer les feuilles',
    short: 'Les feuilles parlent avant que ce soit trop tard.',
    detail:
      "Regarde si les feuilles s'affaissent ou tombent un peu : c'est souvent un signal de soif. Des feuilles jaunes, elles, indiquent plutôt un excès d'eau — pas besoin d'arroser dans ce cas.",
  },
  {
    id: 'pot',
    icon: '⚖️',
    label: 'Soupeser le pot',
    short: 'Un pot léger en dit long sur l’état de la terre en profondeur.',
    detail:
      "Soulève délicatement le pot. S'il te semble léger, la terre est sèche en profondeur et ta plante a sans doute besoin d'eau. S'il est lourd, elle a encore de la réserve.",
  },
]
