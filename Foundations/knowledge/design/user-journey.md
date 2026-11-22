# User journey — Camille (persona prioritaire)

> Statut : DRAFT
> Date : 2026-11-22
> Source : brief.md, feature-breakdown.md, user-stories.md
> Persona : Camille, le candidat novice qui craint l'épreuve de pédagogie

## Vue d'ensemble

Ce parcours retrace l'expérience émotionnelle de Camille à travers six étapes, de la découverte de l'app jusqu'à la veille de l'examen, avec un carnet de 10 séances qu'elle sait justifier. Il complète le [user-flow.md](./user-flow.md), qui décrit le parcours écran par écran. Aucun entretien n'a encore été mené : les émotions et frictions ci-dessous sont des hypothèses déduites du persona et de la base de connaissances IE, à confirmer sur le terrain.

## Étapes du parcours

### 1. Découverte

- **Actions** : cherche comment préparer son carnet de 10 séances et l'épreuve de pédagogie pratique.
- **Émotions** : appréhension, peur d'oublier un point de sécurité.
- **Friction** : informations dispersées entre MFA, supports de stage et conseils du tuteur ; ne sait pas par où commencer (hypothèse).
- **Opportunité** : promesse d'un simulateur qui explique le « pourquoi » et signale la sécurité.

### 2. Premier lancement

- **Actions** : ouvre l'app, lit le disclaimer, découvre la mention sur les données enregistrées sur l'appareil.
- **Émotions** : curiosité, légère méfiance (outil théorique, responsabilité).
- **Friction** : crainte d'une inscription ou d'un compte à créer (hypothèse).
- **Opportunité** : aucun compte, un message court et honnête, accès immédiat à « Mes séances ».

### 3. Première séance

- **Actions** : choisit niveau, saison, milieu et philosophie, parcourt le catalogue, assemble sa séance par phases.
- **Émotions** : concentration, petite appréhension (« vais-je bien faire ? »), satisfaction de voir une séance structurée.
- **Friction** : ne sait pas justifier le choix d'un exercice ni doser les récupérations (hypothèse).
- **Opportunité** : fiche d'exercice avec « pourquoi on le fait », variantes pour simplifier, badges d'origine et de validation des règles.

### 4. Moment de doute sur la sécurité

- **Actions** : reçoit une alerte sur un exercice hypoxique, ouvre la fiche accident, ajuste sa séance.
- **Émotions** : inquiétude, besoin d'être rassurée.
- **Friction** : peur de proposer un exercice dangereux sans s'en rendre compte (hypothèse).
- **Opportunité** : alertes explicatives et non culpabilisantes, source citée, action suggérée, lien vers la fiche accident.

### 5. Construction du carnet de 10 séances

- **Actions** : crée son Carnet IE, place ses séances dans l'ordre, consulte l'enchaînement et la vue de cohérence, ajuste sa progression.
- **Émotions** : projection, fierté de voir une progression, doute sur la logique d'ensemble.
- **Friction** : difficulté à vérifier que le carnet est cohérent (du foncier au spécifique, hypercapnie avant hypoxie) et à le justifier (hypothèse).
- **Opportunité** : frise des 10 séances, points de vigilance non bloquants, synthèse « pourquoi cet ordre ».

### 6. Veille de l'examen

- **Actions** : passe la checklist d'auto-évaluation, exporte son carnet en PDF, partage une séance par lien à son tuteur.
- **Émotions** : confiance, soulagement, un reste de stress.
- **Friction** : crainte de perdre ses séances si le navigateur est vidé (hypothèse) ; lien trop long pour une séance volumineuse.
- **Opportunité** : export de secours, fichier importable, repli automatique du lien vers le fichier, score /20 et points à corriger.

## Tableau récapitulatif

| Étape | Actions | Émotions | Friction | Opportunité |
|-------|---------|----------|----------|--------------|
| Découverte | Cherche comment préparer le carnet et l'épreuve | Appréhension, peur d'oublier la sécurité | Informations dispersées (hypothèse) | Simulateur qui explique le « pourquoi » |
| Premier lancement | Lit le disclaimer, découvre les données locales | Curiosité, légère méfiance | Crainte d'un compte à créer (hypothèse) | Aucun compte, message court et honnête |
| Première séance | Paramètre, parcourt le catalogue, construit par phases | Concentration, petite appréhension | Justifier ses choix, doser les récupérations | Fiches explicatives, variantes, badges de fiabilité |
| Doute sécurité | Reçoit une alerte, ouvre la fiche accident | Inquiétude, besoin d'être rassurée | Peur de proposer un exercice dangereux | Alertes explicatives, source, action suggérée |
| Carnet de 10 séances | Ordonne les séances, consulte la vue de cohérence | Projection, fierté, doute sur la logique | Vérifier et justifier la cohérence globale | Frise, points de vigilance, synthèse « pourquoi cet ordre » |
| Veille de l'examen | Passe la checklist, exporte, partage | Confiance, soulagement, stress résiduel | Crainte de perdre ses séances ; lien trop long | Export de secours, repli vers le fichier, score /20 |

## Points d'attention transversaux

- Le ton bienveillant et non-jugeant doit accompagner chaque étape, en particulier les moments de doute (étape 4) où l'anxiété de Camille est la plus forte.
- L'absence de compte et le fonctionnement hors connexion sont des facteurs de différenciation à préserver tout au long du parcours (étapes 2, 3 et 6).
- La progression visible du carnet, et la capacité à la justifier, est l'indicateur de succès émotionnel du parcours (JTBD-E1, JTBD-F5).
- Le disclaimer et les badges d'origine et de validation des règles doivent rester visibles sans alourdir l'expérience.
