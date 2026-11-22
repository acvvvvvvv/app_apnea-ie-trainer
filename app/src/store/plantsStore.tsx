import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { Plant } from '../types'
import type { LeafVariantId } from '../data/leafVariants'

const STORAGE_KEY = 'app_plante:plants'

function loadPlants(): Plant[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Plant[]) : []
  } catch {
    return []
  }
}

function persistPlants(plants: Plant[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants))
  } catch {
    // Stockage plein ou indisponible : l'app continue de fonctionner en mémoire pour la session.
  }
}

interface PlantsContextValue {
  plants: Plant[]
  addPlant: (name: string, illustration: LeafVariantId) => Plant
  getPlant: (id: string) => Plant | undefined
}

const PlantsContext = createContext<PlantsContextValue | null>(null)

export function PlantsProvider({ children }: { children: ReactNode }) {
  const [plants, setPlants] = useState<Plant[]>(loadPlants)

  const addPlant = useCallback((name: string, illustration: LeafVariantId) => {
    const plant: Plant = {
      id: crypto.randomUUID(),
      name: name.trim(),
      illustration,
      dateAdded: new Date().toISOString(),
    }
    setPlants((prev) => {
      const next = [...prev, plant]
      persistPlants(next)
      return next
    })
    return plant
  }, [])

  const getPlant = useCallback((id: string) => plants.find((p) => p.id === id), [plants])

  const value = useMemo(() => ({ plants, addPlant, getPlant }), [plants, addPlant, getPlant])

  return <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
}

export function usePlants() {
  const ctx = useContext(PlantsContext)
  if (!ctx) throw new Error('usePlants must be used within a PlantsProvider')
  return ctx
}
