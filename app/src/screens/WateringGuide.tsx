import { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePlants } from '../store/plantsStore'
import { WATERING_ZONES, type WateringZone } from '../data/wateringGuide'
import '../styles/specimen-vivant.css'
import './WateringGuideSpecimen.css'

const INTRO_SEEN_KEY = 'app_plante:guide_intro_seen'

const ZONE_ICONS: Record<WateringZone['id'], React.ReactNode> = {
  terre: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3v12" />
      <path d="M8 11l4 4 4-4" />
      <path d="M4 21h16" />
    </svg>
  ),
  feuilles: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  pot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0z" />
      <path d="M19 7l-3 6a3 3 0 0 0 6 0z" />
    </svg>
  ),
}

export function WateringGuide() {
  const { id } = useParams<{ id: string }>()
  const { getPlant } = usePlants()
  const navigate = useNavigate()
  const plant = id ? getPlant(id) : undefined

  const [selectedZone, setSelectedZone] = useState<WateringZone | null>(null)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !localStorage.getItem(INTRO_SEEN_KEY)
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (!showIntro) return
    const timer = setTimeout(() => dismissIntro(), 5000)
    return () => clearTimeout(timer)
  }, [])

  function dismissIntro() {
    setShowIntro(false)
    try {
      localStorage.setItem(INTRO_SEEN_KEY, 'true')
    } catch {
      // Ignoré : au pire l'overlay réapparaîtra à la prochaine visite.
    }
  }

  if (!plant) {
    return <Navigate to="/collection" replace />
  }

  return (
    <div className="specimen-shell">
      <div className="sv-top-row">
        <button type="button" className="sv-back" aria-label="Retour" onClick={() => navigate(`/plant/${plant.id}`)}>
          ←
        </button>
        <h1 className="sv-title">Guide d'observation</h1>
      </div>

      <p className="sv-guide-intro">
        Avant d'arroser {plant.name}, observe. Pas de fréquence fixe à suivre — juste ces trois gestes.
      </p>

      <div className="sv-guide-zones">
        {WATERING_ZONES.map((zone, index) => (
          <div key={zone.id} className="sv-guide-zone-wrapper">
            <button
              className="sv-row"
              onClick={() => {
                dismissIntro()
                setSelectedZone(zone)
              }}
            >
              <span className="sv-guide-zone-icon">{ZONE_ICONS[zone.id]}</span>
              <span className="sv-detail-row-info">
                <span className="sv-detail-row-title">{zone.label}</span>
                <span className="sv-detail-row-subtitle">{zone.short}</span>
              </span>
              <span className="sv-row-chevron" aria-hidden="true">
                →
              </span>
            </button>
            {showIntro && index === 0 && <div className="sv-guide-tip">Commence par toucher la terre</div>}
          </div>
        ))}
      </div>

      {selectedZone && (
        <div className="sv-overlay" role="dialog" aria-label={selectedZone.label}>
          <div className="sv-overlay-card">
            <span className="sv-guide-zone-icon sv-overlay-icon">{ZONE_ICONS[selectedZone.id]}</span>
            <h2 className="sv-overlay-title">{selectedZone.label}</h2>
            <p className="sv-overlay-text">{selectedZone.detail}</p>
            <button className="sv-ghost-btn sv-ghost-btn-block" onClick={() => setSelectedZone(null)}>
              Compris !
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
