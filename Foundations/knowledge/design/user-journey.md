# User journey — Léa (persona prioritaire)

> Statut : DRAFT
> Date : 2026-07-24
> Source : brief.md, feature-breakdown.md, user-stories.md
> Persona : Léa, la débutante qui ne veut pas tuer ses plantes

## Vue d'ensemble

Ce parcours retrace l'expérience émotionnelle de Léa à travers six étapes, de la découverte de l'app jusqu'à l'installation d'une habitude d'observation autonome. Il complète le [user-flow.md](./user-flow.md), qui décrit le parcours écran par écran.

## Étapes du parcours

### 1. Découverte

- **Actions** : cherche une solution après avoir perdu une plante par excès d'arrosage.
- **Émotions** : culpabilité, envie de bien faire.
- **Friction** : les apps existantes sont jugées trop complexes.
- **Opportunité** : promesse de simplicité radicale, sans jargon.

### 2. Onboarding

- **Actions** : ouvre l'app, découvre les 3 écrans de l'onboarding.
- **Émotions** : curiosité, peur d'un long paramétrage.
- **Friction** : onboardings trop longs ailleurs — 10/16 interviewés ont abandonné pour cette raison.
- **Opportunité** : complétable en moins de 60 secondes, aucun compte requis.

### 3. Ajout des premières plantes

- **Actions** : ajoute un nom et une photo, explore sa collection.
- **Émotions** : fierté, petite appréhension ("vais-je bien faire ?").
- **Friction** : champs taxonomiques exigés par d'autres apps.
- **Opportunité** : 3 champs maximum, message chaleureux à la clé ("Bienvenue dans ta jungle !").

### 4. Usage quotidien

- **Actions** : touche la terre, consulte le guide d'observation, enregistre un arrosage.
- **Émotions** : apprentissage, sécurité progressive.
- **Friction** : peur de sur-arroser, incertitude sur la fréquence.
- **Opportunité** : pas de fréquence fixe imposée, rappels bienveillants opt-in (max 1/semaine/plante).

### 5. Moment de doute

- **Actions** : photographie une feuille suspecte, lance le scan diagnostic.
- **Émotions** : inquiétude, besoin d'être rassurée.
- **Friction** : peur de mal interpréter le symptôme seule.
- **Opportunité** : diagnostic en moins de 2 minutes, protocole clair en étapes numérotées, ton bienveillant.

### 6. Habitude installée

- **Actions** : revient chaque semaine, observe sans dépendre des notifications.
- **Émotions** : confiance, compétence, fierté.
- **Friction** : risque de dépendance si trop de notifications (pain point observé chez les concurrents).
- **Opportunité** : engagement sans dépendance à la notification, sentiment de progression de compétence (JTBD-E2).

## Tableau récapitulatif

| Étape | Actions | Émotions | Friction | Opportunité |
|-------|---------|----------|----------|--------------|
| Découverte | Cherche une solution après avoir perdu une plante | Culpabilité, envie de bien faire | Apps existantes trop complexes | Simplicité radicale, sans jargon |
| Onboarding | Ouvre l'app, découvre les 3 écrans | Curiosité, peur d'un long paramétrage | Onboardings trop longs ailleurs (10/16 abandons) | Complétable en < 60s, sans compte |
| Ajout de plantes | Ajoute nom + photo, explore sa collection | Fierté, petite appréhension | Champs taxonomiques exigés ailleurs | 3 champs max, message chaleureux |
| Usage quotidien | Touche la terre, consulte le guide, enregistre un arrosage | Apprentissage, sécurité progressive | Peur de sur-arroser, fréquence incertaine | Pas de fréquence fixe, rappels opt-in max 1/semaine |
| Moment de doute | Photographie une feuille suspecte, lance le scan | Inquiétude, besoin d'être rassurée | Peur de mal interpréter seule | Diagnostic < 2 min, protocole clair |
| Habitude installée | Revient chaque semaine, observe sans dépendre de l'app | Confiance, compétence, fierté | Risque de dépendance aux notifications | Engagement sans dépendance, progression |

## Points d'attention transversaux

- Le ton bienveillant et non-jugeant doit accompagner chaque étape, en particulier les moments de doute (étape 5) où l'anxiété de Léa est la plus forte.
- L'absence de notifications intrusives est un facteur de différenciation clé, à préserver tout au long du parcours (étapes 2, 4 et 6).
- La progression de compétence (de la dépendance à l'observation autonome) est l'indicateur de succès émotionnel du parcours (JTBD-E2).
