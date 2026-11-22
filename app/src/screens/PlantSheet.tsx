import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePlants } from '../store/plantsStore'
import { getPlantSheet } from '../data/plantSheets'
import '../styles/specimen-vivant.css'
import './PlantSheetSpecimen.css'

const SECTION_ICONS = {
  origine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
    </svg>
  ),
  lumiere: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),
  arrosage: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 2c4 6 7 9.5 7 13a7 7 0 1 1-14 0c0-3.5 3-7 7-13z" />
    </svg>
  ),
  signes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5 6 5c2 0 3.5 1.2 4 2.5C10.5 6.2 12 5 14 5c3.5 0 5 4 3.5 7.5C19 16.65 12 21 12 21z" />
    </svg>
  ),
}

export function PlantSheet() {
  const { id } = useParams<{ id: string }>()
  const { getPlant } = usePlants()
  const navigate = useNavigate()
  const plant = id ? getPlant(id) : undefined

  if (!plant) {
    return <Navigate to="/collection" replace />
  }

  const { sheet, matched } = getPlantSheet(plant.name)

  return (
    <div className="specimen-shell">
      <div className="sv-top-row">
        <button type="button" className="sv-back" aria-label="Retour" onClick={() => navigate(`/plant/${plant.id}`)}>
          ←
        </button>
        <h1 className="sv-title">{plant.name}</h1>
      </div>

      {!matched && (
        <p className="sv-sheet-unknown">
          On ne connaît pas encore cette plante précisément. Voici des conseils généraux d'observation en attendant.
        </p>
      )}

      <section className="sv-sheet-section">
        <div className="sv-section-header">
          <span>Origine</span>
          <div className="sv-rule" />
        </div>
        <div className="sv-sheet-body">
          <span className="sv-sheet-icon">{SECTION_ICONS.origine}</span>
          <p>{sheet.origine}</p>
        </div>
      </section>

      <section className="sv-sheet-section">
        <div className="sv-section-header">
          <span>Lumière</span>
          <div className="sv-rule" />
        </div>
        <div className="sv-sheet-body">
          <span className="sv-sheet-icon">{SECTION_ICONS.lumiere}</span>
          <p>{sheet.lumiere}</p>
        </div>
      </section>

      <section className="sv-sheet-section">
        <div className="sv-section-header">
          <span>Arrosage</span>
          <div className="sv-rule" />
        </div>
        <div className="sv-sheet-body">
          <span className="sv-sheet-icon">{SECTION_ICONS.arrosage}</span>
          <p>{sheet.arrosage}</p>
        </div>
      </section>

      <section className="sv-sheet-section">
        <div className="sv-section-header">
          <span>Signes de bonne santé</span>
          <div className="sv-rule" />
        </div>
        <div className="sv-sheet-body">
          <span className="sv-sheet-icon">{SECTION_ICONS.signes}</span>
          <p>{sheet.signes}</p>
        </div>
      </section>
    </div>
  )
}
