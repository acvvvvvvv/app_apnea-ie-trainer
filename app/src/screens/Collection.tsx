import { useNavigate } from 'react-router-dom'
import { usePlants } from '../store/plantsStore'
import { LeafIllustration } from '../components/LeafIllustration'
import '../styles/specimen-vivant.css'
import './CollectionSpecimen.css'

const NAME_TRUNCATE_LENGTH = 50

function formatDateAdded(iso: string): string {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24))
  if (days <= 0) return 'Ajoutée aujourd’hui'
  if (days === 1) return 'Ajoutée hier'
  return `Ajoutée il y a ${days} jours`
}

export function Collection() {
  const { plants } = usePlants()
  const navigate = useNavigate()

  return (
    <div className="specimen-shell">
      <h1 className="sv-title">Ma jungle</h1>

      {plants.length === 0 ? (
        <div className="sv-empty">
          <LeafIllustration variant="monstera" size={56} hero className="sv-empty-icon" />
          <p className="sv-empty-text">
            Tu n'as pas encore ajouté de plante. Prêt·e à accueillir la première ?
          </p>
          <button className="sv-ghost-btn" onClick={() => navigate('/add')}>
            Ajouter ma première plante
          </button>
        </div>
      ) : (
        <>
          <ul className="sv-list">
            {plants.map((plant) => {
              const displayName =
                plant.name.length > NAME_TRUNCATE_LENGTH
                  ? `${plant.name.slice(0, NAME_TRUNCATE_LENGTH)}…`
                  : plant.name
              return (
                <li key={plant.id}>
                  <button className="sv-row" onClick={() => navigate(`/plant/${plant.id}`)}>
                    <LeafIllustration variant={plant.illustration} size={26} className="sv-row-icon" />
                    <span className="sv-row-info">
                      <span className="sv-row-name">{displayName}</span>
                      <span className="sv-row-meta">{formatDateAdded(plant.dateAdded)}</span>
                    </span>
                    <span className="sv-row-chevron" aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
          <button className="sv-ghost-btn" onClick={() => navigate('/add')}>
            Ajouter une plante
          </button>
        </>
      )}
    </div>
  )
}
