import { useId } from 'react'
import { getLeafVariant, type LeafVariantId } from '../data/leafVariants'

interface LeafIllustrationProps {
  variant: LeafVariantId
  size?: number
  hero?: boolean
  className?: string
}

// Illustration de feuille au dégradé iridescent (`iris-hero` du DA
// Spécimen vivant) — remplace la photo pour chaque plante ajoutée.
export function LeafIllustration({ variant, size = 40, hero = false, className }: LeafIllustrationProps) {
  const leaf = getLeafVariant(variant)
  const gradId = useId()
  const glowId = useId()

  return (
    <svg
      viewBox="0 0 40 46"
      width={size}
      height={size * 1.15}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78CE0" />
          <stop offset="50%" stopColor="#5FD1C6" />
          <stop offset="100%" stopColor="#E39FC4" />
        </linearGradient>
        {hero && (
          <filter id={glowId} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        )}
      </defs>

      {hero && (
        <path d={leaf.outline} fill="none" stroke={`url(#${gradId})`} strokeWidth={3} opacity={0.5} filter={`url(#${glowId})`} />
      )}

      <path d={leaf.outline} fill="none" stroke={`url(#${gradId})`} strokeWidth={hero ? 1.6 : 1.3} />

      {leaf.holes?.map((hole, i) => (
        <ellipse
          key={i}
          cx={hole.cx}
          cy={hole.cy}
          rx={hole.rx}
          ry={hole.ry}
          transform={`rotate(${hole.rotate} ${hole.cx} ${hole.cy})`}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={hero ? 0.9 : 0.7}
          opacity={0.75}
        />
      ))}

      {leaf.veins.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={`url(#${gradId})`} strokeWidth={hero ? 0.7 : 0.55} opacity={0.5} />
      ))}
    </svg>
  )
}
