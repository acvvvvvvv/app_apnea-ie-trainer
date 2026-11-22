import { useState } from 'react'
import { usePlants } from '../store/plantsStore'
import { LEAF_VARIANTS, type LeafVariantId } from '../data/leafVariants'
import type { Plant } from '../types'

export function useAddPlantForm(onAdded: (plant: Plant) => void) {
  const { addPlant } = usePlants()
  const [name, setName] = useState('')
  const [illustration, setIllustration] = useState<LeafVariantId>(LEAF_VARIANTS[0].id)
  const [error, setError] = useState(false)

  const canSubmit = name.trim().length > 0

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!canSubmit) {
      setError(true)
      return
    }
    const plant = addPlant(name, illustration)
    onAdded(plant)
  }

  function handleNameChange(value: string) {
    setName(value)
    if (error) setError(false)
  }

  return {
    name,
    illustration,
    setIllustration,
    error,
    canSubmit,
    handleSubmit,
    handleNameChange,
  }
}
