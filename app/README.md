# App Plante

Webapp mobile-first de suivi de plantes d'intérieur — implémente le scope **Must** validé dans
[`../Foundations/knowledge/pm/feature-breakdown.md`](../Foundations/knowledge/pm/feature-breakdown.md) :

- **F01** — Ajout de plante minimal
- **F02** — Guide d'observation pour l'arrosage
- **F06** — Fiches plantes éducatives
- **F09** — Onboarding (< 60 secondes)

Hors scope de cette version : F03 (journal d'arrosage), F04 (diagnostic visuel), F10 (offline) —
Should/Could dans le MoSCoW, non codés.

## Lancer le projet

```bash
npm install
npm run dev
```

## Stack

React + TypeScript + Vite, React Router pour la navigation, données persistées en `localStorage`
(pas de backend pour cette v1). Design tokens repris de
[`../Foundations/knowledge/design/DESIGN-wise.md`](../Foundations/knowledge/design/DESIGN-wise.md).

## Structure

```
src/
  components/   composants réutilisables (Screen, Button, formulaires…)
  data/         contenu statique embarqué (fiches plantes, guide d'arrosage)
  screens/      un écran par route
  store/        état applicatif (plantes, onboarding) persisté en localStorage
```
