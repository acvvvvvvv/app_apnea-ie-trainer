# User flow — App Apnée

> Statut : DRAFT
> Date : 2026-11-22
> Source : brief.md, feature-breakdown.md, user-stories.md, arborescence.md
> Scope : features Must (F02, F03, F09, F10) + Should prioritaires (F04, F05, F07) + Should secondaire (F06)

## Vue d'ensemble

Le parcours part de l'ouverture de l'application, sans création de compte, passe par un disclaimer et une mention sur les données enregistrées sur l'appareil, puis arrive sur « Mes séances ». De là, l'utilisateur emprunte deux chemins qui se rejoignent : créer une séance unitaire (paramétrage, choix des exercices, construction par phases) ou ouvrir son Carnet IE de 10 séances, dont chaque emplacement mène au même constructeur. Depuis une séance, il accède aux alertes de sécurité, à la checklist d'auto-évaluation et aux fiches accidents. Depuis le carnet, il accède à la vue de cohérence. L'export (lien, PDF ou fichier) et l'import permettent de partager sans base de données. Le mode hors ligne est une contrainte transversale qui s'applique à l'ensemble du parcours.

## Étapes du parcours

1. **Première ouverture** — nouvel utilisateur, aucune donnée existante, aucune création de compte.
2. **Disclaimer** — message court avant l'usage : l'outil est théorique et le créateur décline toute responsabilité. Bouton « J'ai compris » ; le texte reste accessible depuis le menu « À propos ». Un bandeau discret explique ensuite que les séances sont enregistrées sur cet appareil et qu'un export sert de sauvegarde.
3. **Mes séances (état vide)** — écran d'accueil avec deux entrées : « Créer une séance » et « Ouvrir mon Carnet IE ». L'état vide est accueillant. Après la première séance, la liste affiche titre, niveau, saison, milieu et date de modification.
4. **Paramétrage de la séance** (F03, étape 1) — 5 choix guidés : niveau des élèves (AEL, ACEL), moment de la saison, milieu (piscine, fosse), philosophie de l'instructeur, profil d'encadrant (IE1 par défaut). Valeurs par défaut présélectionnées. Pour une séance du carnet, le moment de la saison est pré-rempli d'après la phase de l'emplacement.
5. **Catalogue d'exercices** (F02) — liste filtrée par les paramètres, puis fiche d'exercice en 4 blocs : pourquoi on le fait, points de sécurité, variantes, paramètres. Chaque information porte un badge d'origine (corpus, suggestion, hors corpus) et de validation (à valider, validé). Bouton « Ajouter à ma séance ».
6. **Constructeur de séance** (F03, étape 2) — objectif mesurable et critère d'évaluation en tête, puis 8 phases (accueil, exercices à sec, échauffement, prérequis, cœur de séance, application, retour au calme, débriefing). Une phase manquante est signalée par une invitation douce. L'enregistrement est automatique, sur l'appareil.
7. **Alertes de sécurité** (F04) — panneau qui se met à jour à chaque modification, avec trois niveaux (information, avertissement, bloquant). Chaque alerte explique le « pourquoi », cite sa source et propose une action. Un lien mène à la fiche accident concernée.
8. **Fiche accident** (F06) — fiche au format de l'examen (7 champs), accessible depuis une alerte, une fiche d'exercice ou le menu. Les accidents absents des documents sources affichent « À compléter ».
9. **Checklist d'auto-évaluation** (F07) — grille en 5 blocs calquée sur la notation /20, cases pré-cochées d'après la séance, score et trois points prioritaires à corriger, puis auto-diagnostic sécurité en 12 questions.
10. **Carnet IE** (F10) — création du carnet (titre, date d'examen, 10 emplacements numérotés dans l'ordre chronologique), compteur « n séances sur 10 ». Chaque emplacement mène au constructeur (« Construire cette séance ») ou lie une séance existante. Réorganisation par glisser-déposer.
11. **Séance dans le carnet** — bloc « Dans ton carnet » : rang n sur 10, séance précédente et suivante, ce que la séance suppose acquis, ce qu'elle prépare, évolution en mots simples (plus de travail hypercapnique, même dominante).
12. **Vue de cohérence** — frise des 10 séances (dominante, niveau de risque), courbe de volume, bande des phases de saison avec la date de l'examen, points de vigilance non bloquants, synthèse « pourquoi cet ordre » modifiable.
13. **Partager** (F05) — choix du format depuis une séance : lien de partage, fichier lisible (PDF), fichier de séance importable. Le lien est limité à 2000 caractères ; si la séance est trop longue, l'option est désactivée et le fichier est proposé. Le carnet complet se partage par fichier (PDF et fichier importable). Le disclaimer figure dans chaque export.
14. **Importer** — l'utilisateur ouvre un fichier ou un lien reçu, voit un aperçu de la séance ou du carnet, puis choisit « Ajouter à mes séances ». Un fichier illisible affiche un message bienveillant.

## Contrainte transversale : mode hors ligne (F09)

L'app reste utilisable sans connexion une fois chargée : paramétrage, catalogue, constructeur, alertes, fiches accidents, checklist, carnet, vue de cohérence, génération et lecture des fichiers d'export. Aucune étape ne dépend d'un serveur ni d'une authentification. Une barre fine indique « Mode hors ligne » sans bloquer l'usage. À la toute première ouverture sans réseau, un message explique qu'une première connexion est nécessaire pour mettre l'app en cache. Les données sont liées à l'appareil et au navigateur : si le stockage est plein ou effacé, l'utilisateur est invité à exporter ou à importer une sauvegarde.

## Légende

- **Cœur du parcours (Must)** : ouverture, disclaimer, Mes séances, paramétrage, catalogue, constructeur, carnet IE, séance dans le carnet, vue de cohérence, usage hors ligne.
- **Garde-fous et partage (Should)** : alertes de sécurité, checklist d'auto-évaluation, export et import, fiches accidents — la sécurité reste portée en Must par les fiches d'exercices du catalogue.
- **Hors scope du parcours** : mode examen blanc (Could), onboarding dédié, compte et synchronisation.

## Points d'attention

- Aucun compte, aucune connexion demandée à aucune étape ; le disclaimer et la mention sur les données locales s'affichent dès le premier lancement.
- Ton bienveillant et non-jugeant sur tous les écrans, y compris les alertes, les messages d'erreur et les états vides.
- Le carnet compte exactement 10 emplacements ; les points de vigilance de cohérence ne sont jamais bloquants.
- Le lien de partage ne dépasse jamais 2000 caractères : un indicateur prévient avant génération et le fichier prend le relais.
- Chaque règle ou exercice affiche son origine et son statut de validation, y compris dans les exports.
- Les actions critiques (supprimer une séance, réorganiser le carnet) restent annulables pendant quelques secondes.
