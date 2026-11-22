const STORAGE_KEY = 'app_plante:onboarding_completed'

export function isOnboardingCompleted(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  } catch {
    return false
  }
}

export function markOnboardingCompleted() {
  try {
    localStorage.setItem(STORAGE_KEY, 'true')
  } catch {
    // Pas de persistance possible : l'onboarding pourra se relancer, sans impact bloquant.
  }
}
