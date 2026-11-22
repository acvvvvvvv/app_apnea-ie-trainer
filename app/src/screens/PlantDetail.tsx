import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { LeafIllustration } from '../components/LeafIllustration'
import { usePlants } from '../store/plantsStore'
import '../styles/specimen-vivant.css'
import './PlantDetailSpecimen.css'

export function PlantDetail() {
  const { id } = useParams<{ id: string }>()
  const { getPlant } = usePlants()
  const navigate = useNavigate()
  const plant = id ? getPlant(id) : undefined

  if (!plant) {
    return <Navigate to="/collection" replace />
  }

  return (
    <div className="specimen-shell">
      <div className="sv-top-row">
        <button type="button" className="sv-back" aria-label="Retour" onClick={() => navigate('/collection')}>
          ←
        </button>
      </div>

      <div className="sv-detail-header">
        <div className="sv-specimen-frame sv-hero-frame">
          <span className="sv-bracket tl" />
          <span className="sv-bracket tr" />
          <span className="sv-bracket bl" />
          <span className="sv-bracket br" />
          <LeafIllustration variant={plant.illustration} size={72} hero />
        </div>
        <h1 className="sv-detail-name">{plant.name}</h1>
      </div>

      <div className="sv-detail-rows">
        <button className="sv-row" onClick={() => navigate(`/plant/${plant.id}/guide`)}>
          <span className="sv-detail-row-info">
            <span className="sv-detail-row-title">Guide d'observation pour arroser</span>
            <span className="sv-detail-row-subtitle">Touche la terre, observe les feuilles, soupèse le pot</span>
          </span>
          <span className="sv-row-chevron" aria-hidden="true">
            →
          </span>
        </button>

        <button className="sv-row" onClick={() => navigate(`/plant/${plant.id}/sheet`)}>
          <span className="sv-detail-row-info">
            <span className="sv-detail-row-title">Sa fiche éducative</span>
            <span className="sv-detail-row-subtitle">Origine, lumière, arrosage, signes de bonne santé</span>
          </span>
          <span className="sv-row-chevron" aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </div>
  )
}
