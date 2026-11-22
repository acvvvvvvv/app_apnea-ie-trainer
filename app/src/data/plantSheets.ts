export interface PlantSheet {
  matchers: string[]
  origine: string
  lumiere: string
  arrosage: string
  signes: string
}

// Base embarquée des plantes les plus courantes (US-006) — pas d'appel réseau,
// disponible offline. Le nom saisi par l'utilisateur est comparé à ces alias.
export const PLANT_SHEETS: PlantSheet[] = [
  {
    matchers: ['monstera'],
    origine: "Ta Monstera vient des forêts tropicales d'Amérique centrale, où elle grimpe à l'ombre des grands arbres.",
    lumiere: "Elle aime la lumière indirecte et vive. Évite le soleil direct qui brûle ses feuilles.",
    arrosage: "Laisse sécher les 3-4 premiers centimètres de terre entre deux arrosages.",
    signes: "Bonne santé : nouvelles feuilles qui se déploient, découpes bien marquées. Vigilance : feuilles jaunes (souvent trop d'eau).",
  },
  {
    matchers: ['pothos', 'photos'],
    origine: "Le Pothos vient des îles du Pacifique. C'est une liane increvable, parfaite pour débuter.",
    lumiere: "Il tolère presque toutes les lumières, même les coins un peu sombres.",
    arrosage: "Arrose quand la terre est sèche au toucher. Il pardonne facilement un oubli.",
    signes: "Bonne santé : tiges qui s'allongent, feuilles bien vertes. Vigilance : feuilles molles et jaunes (trop d'eau).",
  },
  {
    matchers: ['ficus'],
    origine: "Le Ficus vient des forêts tropicales d'Asie. Il aime la stabilité et n'apprécie pas les changements brusques.",
    lumiere: "Lumière vive mais indirecte. Évite de le déplacer souvent.",
    arrosage: "Arrose quand les 2-3 premiers centimètres de terre sont secs.",
    signes: "Bonne santé : feuillage brillant et dense. Vigilance : chute de feuilles (souvent un changement d'environnement).",
  },
  {
    matchers: ['sansevieria', 'langue de belle-mere', "langue de belle-mère"],
    origine: "Originaire d'Afrique de l'Ouest, elle est habituée aux sols secs et pauvres.",
    lumiere: "S'adapte à presque toutes les lumières, du plein soleil à l'ombre.",
    arrosage: "Arrose très peu : laisse sécher complètement la terre entre deux arrosages, surtout en hiver.",
    signes: "Bonne santé : feuilles bien droites et fermes. Vigilance : base molle ou noircie (signe de sur-arrosage, souvent fatal).",
  },
  {
    matchers: ['cactus'],
    origine: "Les cactus viennent de régions arides, habitués à de longues périodes sans eau.",
    lumiere: "Le plus de lumière directe possible, idéalement un rebord de fenêtre ensoleillé.",
    arrosage: "Arrose rarement : laisse sécher complètement la terre, encore plus en hiver.",
    signes: "Bonne santé : couleur ferme et uniforme. Vigilance : taches molles ou brunes (excès d'eau).",
  },
  {
    matchers: ['orchidee', 'orchidée'],
    origine: "La plupart des orchidées d'intérieur viennent des forêts tropicales, où elles poussent sur d'autres arbres.",
    lumiere: "Lumière vive et indirecte, jamais de soleil direct sur les feuilles.",
    arrosage: "Trempe les racines 10 minutes une fois par semaine, puis laisse bien s'égoutter.",
    signes: "Bonne santé : racines vert clair ou argenté. Vigilance : racines molles et brunes (trop d'eau stagnante).",
  },
  {
    matchers: ['aloe', 'aloe vera'],
    origine: "L'Aloe vera vient de la péninsule arabique, une plante grasse taillée pour la sécheresse.",
    lumiere: "Beaucoup de lumière, idéalement avec un peu de soleil direct chaque jour.",
    arrosage: "Laisse sécher complètement la terre entre deux arrosages, comme un cactus.",
    signes: "Bonne santé : feuilles épaisses et dressées. Vigilance : feuilles fines et repliées (manque d'eau prolongé) ou molles (excès).",
  },
  {
    matchers: ['pilea'],
    origine: "Originaire de Chine, la Pilea est surnommée « plante à monnaie chinoise » pour ses feuilles rondes.",
    lumiere: "Lumière vive et indirecte. Tourne-la régulièrement pour qu'elle pousse bien droite.",
    arrosage: "Arrose quand la terre est sèche en surface, sans laisser d'eau stagner en dessous.",
    signes: "Bonne santé : feuilles rondes et bien à plat. Vigilance : feuilles qui s'enroulent vers le bas (trop d'eau).",
  },
  {
    matchers: ['calathea'],
    origine: "La Calathea vient des sous-bois tropicaux d'Amérique du Sud, habituée à l'humidité et à l'ombre.",
    lumiere: "Lumière indirecte, plutôt tamisée. Elle n'aime pas le soleil direct.",
    arrosage: "Garde la terre légèrement humide, sans excès, avec de l'eau non calcaire si possible.",
    signes: "Bonne santé : feuilles qui se referment le soir et se rouvrent le matin. Vigilance : bords de feuilles secs et craquants (air trop sec).",
  },
  {
    matchers: ['basilic'],
    origine: "Le basilic vient du bassin méditerranéen et d'Asie, une plante aromatique qui aime la chaleur.",
    lumiere: "Beaucoup de lumière, idéalement quelques heures de soleil direct par jour.",
    arrosage: "Garde la terre toujours légèrement humide, il n'aime pas sécher complètement.",
    signes: "Bonne santé : feuilles bien vertes et parfumées. Vigilance : feuilles qui pendent (soif) ou qui jaunissent (excès d'eau).",
  },
]

const GENERIC_SHEET: PlantSheet = {
  matchers: [],
  origine: "On ne connaît pas encore cette plante précisément — mais chaque plante a une origine qui explique ses besoins.",
  lumiere: "Observe où elle pousse le mieux chez toi : rapproche-la d'une fenêtre si les nouvelles feuilles sont petites ou pâles.",
  arrosage: "Touche la terre avant d'arroser : si elle est sèche en profondeur, c'est probablement le moment.",
  signes: "Bonne santé : nouvelles feuilles qui apparaissent régulièrement. Vigilance : feuilles jaunes, tachées ou qui tombent.",
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

export function getPlantSheet(plantName: string): { sheet: PlantSheet; matched: boolean } {
  const normalized = normalize(plantName)
  const match = PLANT_SHEETS.find((sheet) => sheet.matchers.some((m) => normalized.includes(normalize(m))))
  return match ? { sheet: match, matched: true } : { sheet: GENERIC_SHEET, matched: false }
}
