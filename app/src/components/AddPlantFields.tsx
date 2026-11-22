import { LeafIllustration } from './LeafIllustration'
import { LEAF_VARIANTS, type LeafVariantId } from '../data/leafVariants'
import './AddPlantFields.css'

interface AddPlantFieldsProps {
  name: string
  onNameChange: (value: string) => void
  illustration: LeafVariantId
  onIllustrationChange: (value: LeafVariantId) => void
  error: boolean
}

// Champs partagés entre l'écran "Nouvelle plante" et l'étape 2 de
// l'onboarding — cadre à coins de viseur + choix d'illustration + nom.
export function AddPlantFields({
  name,
  onNameChange,
  illustration,
  onIllustrationChange,
  error,
}: AddPlantFieldsProps) {
  return (
    <>
      <div className="sv-frame-block">
        <div className="sv-specimen-frame sv-hero-frame">
          <span className="sv-bracket tl" />
          <span className="sv-bracket tr" />
          <span className="sv-bracket bl" />
          <span className="sv-bracket br" />
          <LeafIllustration variant={illustration} size={64} hero />
        </div>
        <span className="sv-frame-caption">Choisis son illustration</span>

        <div className="sv-variant-row" role="radiogroup" aria-label="Illustration de la plante">
          {LEAF_VARIANTS.map((variant) => (
            <button
              key={variant.id}
              type="button"
              role="radio"
              aria-checked={illustration === variant.id}
              aria-label={variant.label}
              className={`sv-variant-btn${illustration === variant.id ? ' sv-variant-btn-active' : ''}`}
              onClick={() => onIllustrationChange(variant.id)}
            >
              <LeafIllustration variant={variant.id} size={26} />
            </button>
          ))}
        </div>
      </div>

      <div className="sv-field">
        <label className="sv-label" htmlFor="plant-name">
          Donne-lui un petit nom
        </label>
        <input
          id="plant-name"
          className="sv-input"
          type="text"
          autoFocus
          value={name}
          maxLength={80}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Mon monstera"
        />
        {error && <p className="sv-error">Donne-lui un petit nom pour la retrouver facilement.</p>}
      </div>
    </>
  )
}
