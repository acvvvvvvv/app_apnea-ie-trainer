import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeafIllustration } from '../components/LeafIllustration'
import { AddPlantFields } from '../components/AddPlantFields'
import { useAddPlantForm } from '../components/useAddPlantForm'
import { markOnboardingCompleted } from '../store/onboarding'
import '../styles/specimen-vivant.css'
import './OnboardingSpecimen.css'

export function Onboarding() {
  const [step, setStep] = useState(1)
  const [addedPlantName, setAddedPlantName] = useState<string | null>(null)
  const navigate = useNavigate()

  const { name, illustration, setIllustration, error, canSubmit, handleSubmit, handleNameChange } =
    useAddPlantForm((plant) => {
      setAddedPlantName(plant.name)
      setStep(3)
    })

  function skip() {
    markOnboardingCompleted()
    navigate('/collection', { replace: true })
  }

  function finish() {
    markOnboardingCompleted()
    navigate('/collection', { replace: true })
  }

  return (
    <div className="specimen-shell sv-onboarding">
      <button type="button" className="sv-skip" onClick={skip}>
        Passer
      </button>

      {step === 1 && (
        <div className="sv-onboarding-step">
          <LeafIllustration variant="monstera" size={72} hero className="sv-onboarding-illustration" />
          <h1 className="sv-onboarding-title">Apprends à observer tes plantes pour ne plus les tuer</h1>
          <p className="sv-onboarding-text">
            Pas de configuration, pas de jargon. Juste ce qu'il faut pour bien t'occuper de tes plantes.
          </p>
          <button className="sv-ghost-btn sv-ghost-btn-block" onClick={() => setStep(2)}>
            Suivant
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="sv-onboarding-step">
          <h1 className="sv-onboarding-title">Ajoute ta première plante</h1>
          <p className="sv-onboarding-text">Un petit nom suffit. L'illustration se choisit en un tap.</p>
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
      )}

      {step === 3 && (
        <div className="sv-onboarding-step">
          <LeafIllustration variant={illustration} size={72} hero className="sv-onboarding-illustration" />
          <h1 className="sv-onboarding-title">Bienvenue dans ta jungle !</h1>
          <p className="sv-onboarding-text">
            {addedPlantName
              ? `${addedPlantName} t'attend dans ta collection.`
              : 'Ta collection est prête à accueillir tes plantes.'}
          </p>
          <button className="sv-ghost-btn sv-ghost-btn-block" onClick={finish}>
            Découvrir ma jungle
          </button>
        </div>
      )}
    </div>
  )
}
