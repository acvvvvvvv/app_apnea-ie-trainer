# User flow — App Plante

> Statut : DRAFT
> Date : 2026-07-24
> Source : brief.md, feature-breakdown.md, user-stories.md, arborescence.md
> Scope : features Must (F01, F02, F06, F09) + Should prioritaires (F03, F04)

## Vue d'ensemble

Le parcours part de l'ouverture de l'application, passe par un onboarding minimal, l'ajout d'une première plante, puis la collection. Depuis la fiche d'une plante, l'utilisateur accède à trois actions clés : le guide d'observation pour l'arrosage, le journal d'arrosage (avec rappels bienveillants opt-in), et le scan diagnostic. Le mode hors ligne est une contrainte transversale qui s'applique à l'ensemble du parcours.

## Étapes du parcours

1. **Première ouverture** — nouvel utilisateur, aucune donnée existante.
2. **Onboarding (< 60s)** — 3 écrans, aucune création de compte requise. L'utilisateur peut à tout moment cliquer sur "Passer", ce qui l'envoie directement à la collection (état vide), en sautant l'ajout de plante.
3. **Ajouter une plante** — formulaire minimal : nom + photo optionnelle. Complétable en moins de 30 secondes.
4. **Collection de plantes** — vue liste de toutes les plantes ajoutées, avec état vide accueillant si aucune plante.
5. **Fiche d'une plante** — écran central qui donne accès aux trois actions suivantes.
6. **Guide arrosage** (F02) — carte interactive à 3 zones (terre, feuilles, pot) pour apprendre à observer avant d'arroser, sans fréquence fixe imposée.
7. **J'ai arrosé** (F03) — enregistrement d'un arrosage en un tap, historique visuel, rappels bienveillants opt-in (max 1/semaine/plante).
8. **Scan diagnostic** (F04) — prise de photo d'une feuille suspecte, envoi pour analyse.
9. **Résultat + protocole** — diagnostic (problème identifié, niveau de confiance) et protocole de traitement en étapes numérotées.

## Contrainte transversale : mode hors ligne (F10)

L'app reste utilisable sans connexion : consultation de la collection, ajout de plante, guide d'observation, journal d'arrosage. Seul le diagnostic (F04) nécessite une connexion — en son absence, la photo est sauvegardée et l'analyse est différée jusqu'au retour de la connexion.

## Légende

- **Cœur du parcours (Must)** : ouverture, onboarding, ajout de plante, collection, fiche plante, guide arrosage, journal d'arrosage.
- **Diagnostic (Should)** : scan diagnostic, résultat + protocole — différenciateur premium, dépend de la fiabilité technique de l'API.

## Points d'attention

- Ton bienveillant et non-jugeant sur tous les écrans, y compris les messages d'erreur et les états vides.
- Aucun champ taxonomique ni configuration complexe à l'ajout d'une plante.
- Les rappels d'arrosage sont opt-in, jamais activés par défaut, et plafonnés à 1 par semaine et par plante.
- Le scan diagnostic doit toujours proposer un état dégradé clair en cas d'absence de connexion ou de faible confiance du résultat.
