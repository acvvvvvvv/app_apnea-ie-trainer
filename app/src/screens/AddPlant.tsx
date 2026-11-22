import { useNavigate } from 'react-router-dom'
import { AddPlantFields } from '../components/AddPlantFields'
import { useAddPlantForm } from '../components/useAddPlantForm'
import '../styles/specimen-vivant.css'

export function AddPlant() {
  const navigate = useNavigate()
  const { name, illustration, setIllustration, error, canSubmit, handleSubmit, handleNameChange } =
    useAddPlantForm((plant) => navigate(`/plant/${plant.id}`, { replace: true }))

  return (
    <div className="specimen-shell">
      <div className="sv-top-row">
        <button type="button" className="sv-back" aria-label="Retour" onClick={() => navigate(-1)}>
          ←
        </button>
        <h1 className="sv-title">Nouvelle plante</h1>
      </div>

      <form onSubmit={handleSubmit} className="sv-form">
        <AddPlantFields
          name={name}
          onNameChange={handleNameChange}
          illustration={illustration}
          onIllustrationChange={setIllustration}
          error={error}
        />
        <button type="submit" className="sv-ghost-btn sv-ghost-btn-block" disabled={!canSubmit}>
          Ajouter ma plante
        </button>
      </form>
    </div>
  )
}
