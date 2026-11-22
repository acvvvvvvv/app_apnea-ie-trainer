import type { LeafVariantId } from './data/leafVariants'

export interface Plant {
  id: string
  name: string
  illustration: LeafVariantId
  dateAdded: string
}
