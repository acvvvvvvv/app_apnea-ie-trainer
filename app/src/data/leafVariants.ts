export type LeafVariantId = 'monstera' | 'ronde' | 'lance' | 'coeur' | 'palmee'

export interface LeafVariant {
  id: LeafVariantId
  label: string
  outline: string
  veins: string[]
  holes?: { cx: number; cy: number; rx: number; ry: number; rotate: number }[]
}

// Silhouettes stylisées (pas des espèces précises) — chaque plante ajoutée
// se voit attribuer une de ces illustrations plutôt qu'une photo.
export const LEAF_VARIANTS: LeafVariant[] = [
  {
    id: 'monstera',
    label: 'Feuille fenêtrée',
    outline:
      'M20,3 C28,3 34,11 34,19 C34,28 30,35 24,39 C22,41 20,43 20,45 C20,43 18,41 16,39 C10,35 6,28 6,19 C6,11 12,3 20,3 Z',
    veins: ['M20,7 L20,42'],
    holes: [
      { cx: 26, cy: 16, rx: 2.2, ry: 3.6, rotate: 20 },
      { cx: 14, cy: 17, rx: 2.2, ry: 3.6, rotate: -20 },
    ],
  },
  {
    id: 'ronde',
    label: 'Feuille ronde',
    outline:
      'M20,6 C29,6 36,14 36,23 C36,32 29,40 20,40 C11,40 4,32 4,23 C4,14 11,6 20,6 Z',
    veins: ['M20,23 L20,10', 'M20,23 L30,18', 'M20,23 L30,28', 'M20,23 L10,18', 'M20,23 L10,28', 'M20,40 L20,45'],
  },
  {
    id: 'lance',
    label: 'Feuille en lance',
    outline:
      'M20,2 C24,10 27,25 24,38 C23,42 21,44 20,45 C19,44 17,42 16,38 C13,25 16,10 20,2 Z',
    veins: ['M20,5 L20,43'],
  },
  {
    id: 'coeur',
    label: 'Feuille en cœur',
    outline:
      'M20,10 C14,2 4,4 4,14 C4,24 14,30 20,38 C26,30 36,24 36,14 C36,4 26,2 20,10 Z',
    veins: ['M20,14 L20,36'],
  },
  {
    id: 'palmee',
    label: 'Feuille palmée',
    outline:
      'M20,4 C22,10 24,16 22,22 C28,18 34,16 36,20 C32,26 26,28 22,26 C24,32 24,38 20,44 C16,38 16,32 18,26 C14,28 8,26 4,20 C6,16 12,18 18,22 C16,16 18,10 20,4 Z',
    veins: ['M20,8 L20,40', 'M20,20 L11,20', 'M20,20 L29,20'],
  },
]

export function getLeafVariant(id: LeafVariantId): LeafVariant {
  return LEAF_VARIANTS.find((v) => v.id === id) ?? LEAF_VARIANTS[0]
}
