# User Stories — Simulateur de séances d'apnée (préparation IE)

> Statut : A VALIDER
> Source : knowledge/pm/feature-breakdown.md
> Date : 2026-11-22
> Scope : Must + Should uniquement (9 features sur 10)
> Découpage : granulaire avec séparation Design / Tech — une US par comportement distinct

## Vue d'ensemble

| US | Type | Feature | Status | Persona | JTBD |
|----|------|---------|--------|---------|------|
| US-000 | Tech | Scaffolding — Setup technique | Backlog | Camille, Anaïs | Transverse |
| US-001 | Design | F01 — Paramétrage de séance | Backlog | Camille | JTBD-F1, F4 |
| US-002 | Tech | F01 — Paramétrage de séance | Backlog | Camille | JTBD-F1, F4 |
| US-003 | Design | F02 — Catalogue d'exercices explicatif | Backlog | Camille, Anaïs | JTBD-F1, F6, F2 |
| US-004 | Tech | F02 — Base d'exercices embarquée | Backlog | Camille, Anaïs | JTBD-F1, F6, F2 |
| US-021 | Design | F02 — Statut de validation et page « Contenu à relire » | Backlog | Porteur du projet, Camille | JTBD-F2 |
| US-022 | Tech | F02 — Statut de validation dans les fichiers de contenu | Backlog | Porteur du projet, Camille | JTBD-F2 |
| US-005 | Design | F03 — Constructeur de séance structuré | Backlog | Camille, Anaïs | JTBD-F1, F6 |
| US-006 | Tech | F03 — Modèle de séance et sauvegarde | Backlog | Camille, Anaïs | JTBD-F1, F6 |
| US-007 | Design | F04 — Alertes de sécurité | Backlog | Camille, Anaïs | JTBD-F2, F4 |
| US-008 | Tech | F04 — Moteur de règles de sécurité | Backlog | Camille, Anaïs | JTBD-F2 |
| US-009 | Tech | F04 — Contrôle des prérogatives et de la profondeur | Backlog | Camille, Anaïs | JTBD-F2, F4 |
| US-016 | Design | F09 — « Mes séances » et sauvegarde sur l'appareil | Backlog | Camille, Anaïs | Transverse |
| US-017 | Tech | F09 — Sauvegarde dans le localStorage | Backlog | Camille, Anaïs | Transverse |
| US-029 | Design | F09 — Disclaimer | Backlog | Camille, Anaïs | JTBD-E2, Transverse |
| US-030 | Tech | F09 — Affichage et mémorisation du disclaimer | Backlog | Camille, Anaïs | Transverse |
| US-023 | Design | F10 — Dossier Carnet IE et organisation des 10 séances | Backlog | Camille, Anaïs | JTBD-F5, F1, F6 |
| US-024 | Tech | F10 — Modèle Carnet et stockage local | Backlog | Camille, Anaïs | JTBD-F5 |
| US-025 | Design | F10 — Suivi d'une séance à l'autre | Backlog | Camille, Anaïs | JTBD-F5, F6 |
| US-026 | Tech | F10 — Indicateurs de progression par séance | Backlog | Camille, Anaïs | JTBD-F5 |
| US-027 | Design | F10 — Vue de cohérence globale du carnet | Backlog | Camille, Anaïs | JTBD-F6, F5, E1 |
| US-028 | Tech | F10 — Contrôles de cohérence du carnet | Backlog | Camille, Anaïs | JTBD-F5, F6 |
| US-010 | Design | F06 — Fiches accidents | Backlog | Camille, Anaïs | JTBD-F3, F2 |
| US-011 | Tech | F06 — Base de fiches accidents | Backlog | Camille, Anaïs | JTBD-F3, F2 |
| US-012 | Design | F07 — Checklist d'auto-évaluation | Backlog | Camille | JTBD-E1, F6 |
| US-013 | Tech | F07 — Calcul du score et du diagnostic sécurité | Backlog | Camille | JTBD-E1, F6 |
| US-019 | Design | F05 — Export, import et partage d'une séance | Backlog | Camille, Anaïs | JTBD-S1, F6 |
| US-020 | Tech | F05 — Export et import côté navigateur | Backlog | Camille, Anaïs | JTBD-S1, F6 |
| US-014 | Tech | F09 — Mise en cache pour l'usage hors connexion | Backlog | Camille, Anaïs | Transverse |
| US-015 | Design | F09 — États hors connexion et données locales | Backlog | Camille, Anaïs | Transverse |

**Total** : 30 User Stories (1 Scaffolding + 20 Must + 9 Should)
- **Design** : 14 US
- **Tech** : 16 US

Note : US-018 est retirée (comptes supprimés en v1) ; la numérotation n'a pas été décalée pour garder les références stables.

---

## Stories détaillées

---

## Scaffolding

### US-000 [Tech] — Setup technique du projet

**Feature source :** Scaffolding — Setup technique
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs — candidats qui préparent leurs séances à la maison ou au bord du bassin
**JTBD :** Transverse (prérequis à toutes les US Tech)

En tant que développeur
Je veux initialiser le projet technique (repo, stack, CI, structure de dossiers, linting, tests)
Afin que toutes les US Tech puissent être implémentées sur une base solide et cohérente

**Critères d'acceptation**

Scénario : Happy path — Projet initialisé et déployable
  Given je crée le projet technique
  When le setup est terminé
  Then le repo est initialisé avec la structure de dossiers (src/, public/, tests/, data/)
  And la stack est configurée : framework front, bundler, TypeScript
  And le linting et le formatage sont configurés
  And un pipeline CI basique est en place (lint + tests + build)
  And le projet se déploie en environnement de dev
  And un README.md explique comment lancer le projet en local

Scénario : Données de référence — Dossier de contenu versionné
  Given le contenu pédagogique est statique (exercices, règles, fiches accidents)
  When je configure le dossier data/
  Then les fichiers de contenu sont au format JSON, versionnés avec le code
  And chaque fichier porte un numéro de version et une date de dernière mise à jour
  And un schéma de validation vérifie la structure au build

Scénario : Déploiement statique — Vercel et GitHub Pages
  Given le produit est 100 % front-end, sans backend ni base de données externe
  When je configure le déploiement
  Then l'app se construit en fichiers statiques déployables sur Vercel et sur GitHub Pages
  And le chemin de base est configurable (GitHub Pages sert l'app dans un sous-dossier)
  And aucune variable secrète ni service externe n'est nécessaire au fonctionnement

Scénario : Tests — Cadre en place
  Given je configure le framework de tests
  When je lance la suite de tests
  Then au moins 1 test passe (ex : validation du schéma d'un exercice)

**Edge cases à couvrir**
- Navigateur sans support du stockage local : message explicatif et mode sans sauvegarde
- Environnement de dev vs. production : variables d'environnement séparées
- Contenu JSON invalide : le build échoue avec un message explicite
- Hot reload en dev : le service worker ne bloque pas le rechargement

**Dépend de :** Aucune (US fondatrice)

---

## F01 — Paramétrage de séance (Must)

### US-001 [Design] — Concevoir l'écran de paramétrage de séance

**Feature source :** F01 — Paramétrage de séance
**Status :** Backlog
**Type :** Design
**Persona :** Camille, le candidat novice qui craint l'épreuve de pédagogie — ne sait pas par où commencer pour construire une séance
**JTBD :** JTBD-F1 (Construire une séance cohérente), JTBD-F4 (Rester dans mes prérogatives)

En tant que designer
Je veux concevoir un écran de paramétrage avec 5 choix guidés (niveau, saison, milieu, philosophie, profil d'encadrant)
Afin que Camille démarre sa séance en moins de 60 secondes sans se sentir perdue ni jugée

**Critères d'acceptation**

Scénario : Happy path — Écran de paramétrage
  Given je conçois l'écran de paramétrage
  When je structure les éléments visuels
  Then l'écran contient 5 sélecteurs : niveau des élèves (AEL, ACEL), moment de la saison (Reprise, Développement, Pré-compétition/Examen), milieu (Piscine, Fosse), philosophie (Focus technique, Focus volume, Focus ludique/détente), profil d'encadrant (IE1 par défaut, IE2)
  And chaque option affiche une phrase d'aide de moins de 15 mots (ex : « AEL : jusqu'à 6 m en autonomie relative »)
  And des valeurs par défaut cohérentes sont présélectionnées
  And le ton de tous les microcopy est bienveillant et explicatif
  And l'écran est conçu d'abord pour un téléphone (largeur de 360 px) avec des zones tactiles d'au moins 44 px

Scénario : Lien avec la saison — Aide contextuelle
  Given l'utilisateur sélectionne un moment de la saison
  When l'option est choisie
  Then un court texte rappelle la dominante de la période (ex : « Reprise : foncier, technique, hypercapnie légère »)
  And la date de l'examen (24-25 avril 2027) est visible en rappel

Scénario : Erreur — Combinaison incohérente
  Given l'utilisateur choisit un milieu Fosse avec un profil IE1
  When il valide les paramètres
  Then un message explicatif apparaît : « En tant qu'IE1, tu encadres jusqu'à 6 m. On adaptera les exercices de fosse à cette limite. »
  And l'utilisateur peut continuer ou changer de profil
  And le message n'utilise jamais les mots « erreur », « invalide », « interdit »

**Edge cases à couvrir**
- Première ouverture : valeurs par défaut sélectionnées pour ne jamais bloquer l'utilisateur
- Retour arrière : les choix sont conservés
- Profil IE1 mineur : mention des conditions (encadrant majeur présent sur site)
- Écran petit (< 320 px) : sélecteurs empilés sans chevauchement
- Accessibilité : ne pas s'appuyer uniquement sur la couleur pour distinguer les options

**Dépend de :** Aucune

---

### US-002 [Tech] — Implémenter les paramètres de séance et leur persistance

**Feature source :** F01 — Paramétrage de séance
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F1, JTBD-F4

En tant que développeur
Je veux implémenter le modèle de paramètres de séance avec validation et persistance locale
Afin que le catalogue, les alertes et la checklist s'adaptent aux choix de l'utilisateur

**Critères d'acceptation**

Scénario : Happy path — Enregistrement des paramètres
  Given l'utilisateur a choisi ses 5 paramètres
  When il valide
  Then un objet de paramètres est créé avec les champs : niveau_eleves, moment_saison, milieu, philosophie_instructeur, profil_encadrant
  And les valeurs sont validées contre les enums définis (05_modele_donnees_app.md)
  And les paramètres sont sauvegardés dans le localStorage de l'appareil

Scénario : Valeur par défaut — Profil d'encadrant absent
  Given l'utilisateur ne choisit pas de profil d'encadrant
  When il valide
  Then le profil IE1_MAJEUR est appliqué par défaut

Scénario : Erreur — Valeur hors enum
  Given une valeur inconnue est lue depuis le stockage local
  When l'app charge les paramètres
  Then la valeur est remplacée par la valeur par défaut
  And un message discret informe que les paramètres ont été réinitialisés

**Edge cases à couvrir**
- Stockage local plein : message clair, aucune perte des séances existantes
- Version d'enum différente après mise à jour : migration vers les nouvelles valeurs
- Changement de paramètres sur une séance en cours : réévaluation des alertes
- Données corrompues : réinitialisation des paramètres uniquement

**Dépend de :** US-000, US-017

---

## F02 — Catalogue d'exercices explicatif (Must)

### US-003 [Design] — Concevoir la fiche d'exercice et le catalogue filtré

**Feature source :** F02 — Catalogue d'exercices explicatif
**Status :** Backlog
**Type :** Design
**Persona :** Camille, le candidat novice — difficulté à justifier pourquoi un exercice est choisi ; Anaïs, qui cherche des repères rapides
**JTBD :** JTBD-F1 (Construire une séance), JTBD-F6 (Justifier mes choix), JTBD-F2 (Garantir la sécurité)

En tant que designer
Je veux concevoir une liste d'exercices filtrée par les paramètres et une fiche d'exercice en 4 blocs (pourquoi, sécurité, variantes, paramètres)
Afin que Camille comprenne ce que l'examinateur veut entendre et sache comment adapter l'exercice

**Critères d'acceptation**

Scénario : Happy path — Fiche d'exercice complète
  Given je conçois la fiche d'un exercice (ex : série hypercapnique DYN)
  When je structure le contenu
  Then la fiche contient 4 blocs : justification pédagogique (« Pourquoi on fait ça ? »), points de sécurité critiques, variantes (simplifier, complexifier, selon la philosophie), paramètres chiffrés
  And un badge de niveau de risque (1 à 4) est visible en en-tête
  And chaque information porte un badge de statut : corpus, suggestion ou hors corpus
  And la fiche est lisible en 90 secondes

Scénario : Catalogue filtré
  Given l'utilisateur a paramétré sa séance
  When il ouvre le catalogue
  Then seuls les exercices compatibles avec le niveau, le milieu et le moment de la saison sont affichés en premier
  And les exercices non recommandés restent accessibles avec une mention explicative (ex : « Réservé à la fin de saison »)
  And un bouton « Ajouter à ma séance » est visible sur chaque fiche

Scénario : Information hors corpus
  Given un exercice dont les paramètres chiffrés ne figurent pas dans les documents sources
  When la fiche s'affiche
  Then un message neutre : « À valider avec le MFA ou ton tuteur »
  And la valeur proposée est présentée comme suggestion, jamais comme règle

**Edge cases à couvrir**
- Aucun exercice compatible avec le filtre : message explicatif et bouton « Voir tous les exercices »
- Exercice fosse pour un profil IE1 : mention de la limite de 6 m sur la fiche
- Mode sombre : contraste suffisant pour les badges de risque et de statut
- Accessibilité : le niveau de risque n'est pas porté uniquement par la couleur
- Retour au catalogue depuis la fiche : conserve les filtres

**Dépend de :** US-001

---

### US-004 [Tech] — Implémenter la base d'exercices embarquée et le filtrage

**Feature source :** F02 — Base d'exercices embarquée
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F1, JTBD-F6, JTBD-F2

En tant que développeur
Je veux implémenter une base d'exercices embarquée (JSON) conforme au modèle de données, avec filtrage par paramètres
Afin que l'utilisateur consulte le catalogue même sans connexion et reçoive des exercices pertinents

**Critères d'acceptation**

Scénario : Happy path — Consultation du catalogue
  Given l'utilisateur a paramétré sa séance
  When il ouvre le catalogue
  Then la liste est chargée depuis le stockage local
  And les exercices sont filtrés par niveau_eleves, milieu et moment_saison
  And le temps de chargement est inférieur à 300 ms

Scénario : Statut de fiabilité
  Given un exercice contient des paramètres issus du corpus et des variantes issues de suggestions
  When la fiche est chargée
  Then chaque champ expose son statut (corpus, suggestion, hors_corpus)
  And les sources (ex : « Sport p.41 ») sont disponibles pour affichage

Scénario : Erreur — Contenu invalide
  Given le fichier d'exercices est corrompu ou ne respecte pas le schéma
  When l'app charge le catalogue
  Then l'app charge la version embarquée dans le bundle
  And un message discret informe que le contenu a été restauré

**Edge cases à couvrir**
- Exercice sans variantes : la fiche s'affiche sans bloc vide
- Identifiants d'exercice dupliqués : détection au build
- Mise à jour du contenu : migration des séances qui référencent un exercice modifié ou supprimé
- Recherche par nom ou par discipline : correspondance floue (STA, DYN, DNF)

**Dépend de :** US-000

---

### US-021 [Design] — Concevoir l'affichage du statut de validation et la page « Contenu à relire »

**Feature source :** F02 — Statut de validation et page de relecture
**Status :** Backlog
**Type :** Design
**Persona :** Porteur du projet — relit et valide lui-même le contenu hors documents sources ; Camille, qui doit savoir ce qui est validé
**JTBD :** JTBD-F2 (Garantir la sécurité de chaque exercice)

En tant que designer
Je veux concevoir un badge de statut de validation sur chaque entrée et une page en lecture seule qui liste le contenu restant à relire
Afin que le porteur relise méthodiquement ce qui est hors documents sources et que les utilisateurs voient ce qui est validé

**Critères d'acceptation**

Scénario : Happy path — Badge de statut
  Given une entrée de contenu (règle, exercice, paramètre)
  When elle s'affiche
  Then un badge indique son origine (corpus, suggestion, hors corpus) et son statut (à valider, validé)
  And le badge est lisible sur mobile et ne repose pas uniquement sur la couleur

Scénario : Page « Contenu à relire »
  Given le porteur ouvre la page « Contenu à relire »
  When la liste se charge
  Then les entrées sont regroupées par origine (suggestion, hors corpus) et par statut
  And chaque entrée affiche son texte, sa source éventuelle et son identifiant
  And un compteur indique le nombre d'entrées restant à valider
  And une aide explique comment valider une entrée (modification du fichier de contenu, voir US-022)

Scénario : Aucune entrée à relire
  Given toutes les entrées sont validées
  When la page s'affiche
  Then un message positif : « Tout le contenu hors documents sources est relu et validé. »

**Edge cases à couvrir**
- Liste longue : filtres par discipline et par origine
- Page accessible à tous (aucune authentification) ; elle est en lecture seule
- Entrée dont le texte a changé depuis la validation : retour au statut « à valider »
- Écran petit : une entrée par bloc, lecture à une main
- Accessibilité : statut annoncé au lecteur d'écran

**Dépend de :** US-003

---

### US-022 [Tech] — Implémenter le statut de validation dans les fichiers de contenu

**Feature source :** F02 — Statut de validation du contenu
**Status :** Backlog
**Type :** Tech
**Persona :** Porteur du projet, Camille
**JTBD :** JTBD-F2

En tant que développeur
Je veux implémenter un statut de validation (à valider, validé, date) pour chaque entrée dans les fichiers de contenu, avec un contrôle au build
Afin que le porteur valide le contenu en modifiant un fichier versionné, sans backend ni compte

**Critères d'acceptation**

Scénario : Happy path — Validation d'une entrée
  Given une entrée au statut « à valider » dans un fichier de contenu
  When le porteur passe son statut à « validé » avec une date et republie l'app
  Then le badge « validé » s'affiche pour tous les utilisateurs
  And l'historique des validations reste lisible dans le dépôt

Scénario : Contrôle au build
  Given des fichiers de contenu contenant des entrées hors documents sources
  When le build s'exécute
  Then un rapport liste les entrées restant à valider
  And le build échoue si une entrée n'a pas de statut ou d'origine

Scénario : Affichage dans le catalogue
  Given une entrée a le statut « à valider »
  When un utilisateur ouvre la fiche
  Then la mention « À valider » est affichée à côté de l'entrée
  And l'entrée reste utilisable dans les séances

**Edge cases à couvrir**
- Entrée du corpus (documents sources) : statut « corpus », sans validation requise
- Modification du texte d'une entrée validée : le contrôle au build impose de repasser le statut à « à valider »
- Statut inconnu dans un fichier : le build échoue avec un message explicite
- Exportée dans une séance : l'entrée conserve son statut au moment de l'export
- Tests unitaires : validation du schéma des statuts

**Dépend de :** US-000, US-004

---

## F03 — Constructeur de séance structuré (Must)

### US-005 [Design] — Concevoir le constructeur de séance par phases

**Feature source :** F03 — Constructeur de séance structuré
**Status :** Backlog
**Type :** Design
**Persona :** Camille, le candidat novice — ne sait pas par où commencer ; Anaïs, qui manque de temps
**JTBD :** JTBD-F1 (Construire une séance cohérente), JTBD-F6 (Justifier mes choix)

En tant que designer
Je veux concevoir un écran de construction en phases (accueil, exercices à sec, échauffement, prérequis, cœur de séance, application, retour au calme, débriefing)
Afin que Camille assemble une séance structurée comme l'attend le jury, sans oublier de phase

**Critères d'acceptation**

Scénario : Happy path — Séance structurée
  Given je conçois l'écran de construction
  When je structure les éléments
  Then l'objectif SMART (spécifique, mesurable, atteignable, réaliste, temporel) et le critère d'évaluation sont saisis en tête
  And les 8 phases sont affichées dans l'ordre avec un emplacement par phase
  And chaque phase propose : durée, contenu ou exercice du catalogue, consignes, position de l'encadrant, critères de réussite
  And la durée totale et la répartition sont visibles en permanence

Scénario : Phase manquante
  Given l'utilisateur laisse une phase obligatoire vide (ex : échauffement)
  When il consulte sa séance
  Then la phase est signalée par une invitation douce : « Il manque un échauffement. Veux-tu en ajouter un ? »
  And le message n'utilise jamais les mots « erreur » ou « obligatoire »

Scénario : Aide à l'objectif
  Given l'utilisateur remplit l'objectif
  When il touche le champ
  Then une aide affiche les 5 critères SMART avec un exemple adapté au niveau choisi
  And l'aide se ferme sans bloquer la saisie

**Edge cases à couvrir**
- Séance de plus de 120 minutes : message d'information sur la durée usuelle (1 h à 2 h, examen 1 h 30)
- Phase avec plusieurs exercices : réorganisation par glisser-déposer
- Suppression d'une phase : confirmation douce
- Écran petit : phases repliables
- Séance de démonstration pré-remplie pour comprendre le format

**Dépend de :** US-001, US-003

---

### US-006 [Tech] — Implémenter le modèle de séance et la sauvegarde locale

**Feature source :** F03 — Modèle de séance et sauvegarde
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F1, JTBD-F6

En tant que développeur
Je veux implémenter le modèle Séance (paramètres, objectif, phases, sécurité, évaluation) avec sauvegarde et liste locale
Afin que l'utilisateur retrouve ses séances et les affine avant l'examen

**Critères d'acceptation**

Scénario : Happy path — Création et sauvegarde
  Given l'utilisateur a saisi un objectif et placé des exercices dans des phases
  When il enregistre sa séance
  Then la séance est sauvegardée dans le localStorage avec : id (UUID), titre, paramètres, objectif, phases, sécurité, date de création, date de modification
  And la séance apparaît immédiatement dans la liste « Mes séances »

Scénario : Modification d'une séance
  Given une séance existe
  When l'utilisateur modifie une phase
  Then la date de modification est mise à jour
  And les alertes sont recalculées (US-008)
  And les modifications sont enregistrées sans action supplémentaire (sauvegarde automatique)

Scénario : Erreur — Séance corrompue
  Given une séance enregistrée est illisible
  When l'app la charge
  Then un message explique que la séance n'a pas pu être ouverte
  And les autres séances restent disponibles

**Edge cases à couvrir**
- Brouillon : sauvegarde automatique à chaque modification
- Exercice du catalogue supprimé après mise à jour du contenu : la phase conserve son contenu et signale le changement
- Duplication d'une séance : copie avec nouveau titre
- Grand nombre de séances (> 100) : pagination
- Export pour partage : traité dans US-019 et US-020

**Dépend de :** US-000, US-002, US-004, US-017

---

## F04 — Alertes de sécurité en temps réel (Should)

### US-007 [Design] — Concevoir l'affichage des alertes de sécurité

**Feature source :** F04 — Alertes de sécurité
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui craint de proposer un exercice dangereux sans s'en rendre compte ; Anaïs, qui craint d'oublier un élément réglementaire
**JTBD :** JTBD-F2 (Garantir la sécurité de chaque exercice), JTBD-F4 (Rester dans mes prérogatives)

En tant que designer
Je veux concevoir un système d'alertes à trois niveaux (information, avertissement, bloquant) avec explication pédagogique
Afin que Camille comprenne pourquoi une série est à risque et sache comment la corriger

**Critères d'acceptation**

Scénario : Happy path — Alerte avertissement
  Given l'utilisateur place deux exercices hypoxiques dans la même séance
  When l'alerte se déclenche
  Then un bandeau affiche : titre court, explication en 2 phrases, source et action suggérée
  And l'alerte est repérable sans reposer uniquement sur la couleur (icône et texte)
  And un bouton « Pourquoi ? » ouvre le détail pédagogique

Scénario : Alerte bloquante
  Given l'utilisateur place un exercice dont la profondeur dépasse les prérogatives de son profil
  When l'alerte se déclenche
  Then un message clair empêche l'enregistrement tant qu'il n'est pas corrigé
  And une action suggérée est proposée (ex : « Limiter à 6 m »)
  And le ton reste explicatif, sans culpabilisation

Scénario : Aucune alerte
  Given la séance ne déclenche aucune alerte
  When l'utilisateur consulte le panneau de sécurité
  Then un message positif et prudent : « Aucun point de vigilance détecté par l'app. Pense à vérifier avec ton tuteur. »
  And la mention que l'app ne remplace pas le directeur de bassin est visible

**Edge cases à couvrir**
- Plusieurs alertes simultanées : tri par niveau, 3 maximum affichées avant « Voir tout »
- Alerte corrigée : disparition avec une confirmation douce
- Alerte fondée sur une suggestion : badge « suggestion » pour la distinguer des règles du corpus
- Alerte que l'utilisateur souhaite ignorer (niveau avertissement) : possibilité de la masquer avec justification
- Accessibilité : lecteur d'écran annonce le niveau et le titre

**Dépend de :** US-003, US-005

---

### US-008 [Tech] — Implémenter le moteur de règles de sécurité

**Feature source :** F04 — Moteur de règles de sécurité
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F2

En tant que développeur
Je veux implémenter un moteur de règles qui évalue une séance à partir des tags de sécurité des exercices et des paramètres
Afin que les alertes se déclenchent immédiatement à chaque modification

**Critères d'acceptation**

Scénario : Happy path — Hypoxie en début de saison
  Given une séance de moment REPRISE contient un exercice taggé HYPOXIE_SYNCOPE
  When le moteur évalue la séance
  Then l'alerte ALR-001 (niveau bloquant) est retournée avec son message, sa source et son statut

Scénario : Règles sur la structure
  Given une séance sans phase d'échauffement et sans protocole de sortie
  When le moteur évalue la séance
  Then les alertes ALR-005 et ALR-006 (avertissement) sont retournées

Scénario : Erreur — Règle mal formée
  Given une règle du fichier de règles est invalide
  When le moteur charge les règles
  Then la règle invalide est ignorée et journalisée
  And les autres règles continuent de s'appliquer
  And l'app ne plante pas

**Edge cases à couvrir**
- Séance vide : aucune alerte déclenchée
- Performance : évaluation en moins de 100 ms pour une séance de 20 phases
- Règle fondée sur un statut « suggestion » : le niveau maximal est « avertissement »
- Mise à jour du fichier de règles : réévaluation des séances ouvertes
- Règle en conflit avec une autre : priorité au niveau le plus élevé, une seule alerte par cause
- Tests unitaires : un test par règle du catalogue (ALR-001 à ALR-020)

**Dépend de :** US-000, US-004, US-006

---

### US-009 [Tech] — Implémenter le contrôle des prérogatives et de la profondeur

**Feature source :** F04 — Contrôle des prérogatives et de la profondeur
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F2, JTBD-F4

En tant que développeur
Je veux implémenter la table des prérogatives d'encadrement (IE1, IE2) et le contrôle de la profondeur d'une séance
Afin que l'app signale toute séance qui dépasse les limites du brevet de l'utilisateur

**Critères d'acceptation**

Scénario : Happy path — Profondeur dans les limites
  Given un profil IE1_MAJEUR et une séance dont la profondeur maximale est de 5 m
  When le contrôle est exécuté
  Then aucune alerte de profondeur n'est retournée

Scénario : Dépassement de prérogative
  Given un profil IE1_MAJEUR et un exercice de fosse à 15 m
  When le contrôle est exécuté
  Then l'alerte ALR-002 (bloquant) est retournée avec la limite de 6 m
  And la source (prérogatives d'encadrement) est incluse

Scénario : Profil IE2 avec conditions
  Given un profil IE2 et une séance à 20 m
  When le contrôle est exécuté
  Then l'app affiche les conditions (DP MEF1 présent en milieu naturel, DB IE2 et AEEL minimum en milieu artificiel)
  And le statut de ces conditions indique « à vérifier sur site »

**Edge cases à couvrir**
- Profil IE1 mineur : mention du prérequis d'un encadrant majeur présent sur site
- Profondeur inconnue pour un exercice : alerte d'information plutôt que blocage
- Prérogatives modifiées par une mise à jour du MFA : table de référence versionnée
- Public enfant : limites par âge signalées en information `[A DECIDER]`
- Matériel de secours au-delà de 6 m : alerte ALR-013 associée

**Dépend de :** US-000, US-002, US-008

---

## F09 — Sauvegarde locale et fonctionnement hors connexion (Must)

### US-016 [Design] — Concevoir « Mes séances » et la sauvegarde sur l'appareil

**Feature source :** F09 — Sauvegarde locale et fonctionnement hors connexion
**Status :** Backlog
**Type :** Design
**Persona :** Camille et Anaïs — veulent retrouver leurs séances sur leur téléphone, sans créer de compte
**JTBD :** Transverse

En tant que designer
Je veux concevoir la liste « Mes séances » et les messages qui expliquent que les séances sont enregistrées sur l'appareil
Afin que l'utilisateur retrouve ses séances sans compte et comprenne comment ne pas les perdre

**Critères d'acceptation**

Scénario : Happy path — Liste « Mes séances »
  Given l'utilisateur a enregistré des séances
  When il ouvre « Mes séances »
  Then la liste affiche titre, paramètres clés (niveau, saison, milieu) et date de modification
  And chaque séance propose ouvrir, dupliquer, supprimer et partager
  And l'écran est conçu d'abord pour le téléphone (zones tactiles d'au moins 44 px, actions au pouce)

Scénario : Mention de sauvegarde sur l'appareil
  Given l'utilisateur enregistre sa première séance
  When la confirmation s'affiche
  Then un message explique : « Ta séance est enregistrée sur cet appareil. Exporte-la pour la garder en sécurité ou la partager. »
  And la mention est répétée de façon discrète dans « Mes séances »
  And aucun compte n'est demandé à aucun moment

Scénario : État vide
  Given l'utilisateur n'a enregistré aucune séance
  When il ouvre « Mes séances »
  Then un message accueillant : « Tu n'as pas encore enregistré de séance. Prêt·e à commencer ? »
  And un bouton principal mène au paramétrage de séance

**Edge cases à couvrir**
- Suppression : confirmation douce et annulation possible pendant 5 secondes
- Beaucoup de séances : tri par date et recherche par titre
- Espace de stockage presque plein : message de prévention avec invitation à exporter et à supprimer
- Données effacées par le navigateur : message neutre et invitation à importer une sauvegarde
- Accessibilité : actions annoncées au lecteur d'écran, contrastes suffisants

**Dépend de :** US-005

---

### US-017 [Tech] — Implémenter la sauvegarde des séances dans le localStorage

**Feature source :** F09 — Sauvegarde locale (localStorage)
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** Transverse

En tant que développeur
Je veux implémenter l'enregistrement, la lecture, la duplication et la suppression des séances dans le localStorage, avec un schéma versionné
Afin que les séances soient conservées sur l'appareil sans backend, sans compte et sans connexion

**Critères d'acceptation**

Scénario : Happy path — Enregistrement et relecture
  Given l'utilisateur enregistre une séance
  When la page est rechargée, y compris sans connexion
  Then la séance est retrouvée avec tous ses champs
  And aucune requête réseau n'est émise pour la sauvegarde

Scénario : Schéma versionné et migration
  Given des séances ont été enregistrées avec une version précédente du schéma
  When l'app est mise à jour
  Then les séances sont migrées vers le nouveau schéma sans perte
  And la version du schéma est stockée avec les données

Scénario : Erreur — Stockage plein ou indisponible
  Given le localStorage est plein ou bloqué par le navigateur
  When l'utilisateur enregistre une séance
  Then l'app affiche : « On n'a pas pu enregistrer sur cet appareil. Exporte ta séance pour ne pas la perdre. »
  And la séance en cours reste en mémoire et exportable
  And aucune donnée existante n'est corrompue

**Edge cases à couvrir**
- Mode de navigation privée : stockage non persistant, message d'avertissement
- Données corrompues : isolation de la séance fautive, les autres restent disponibles
- Plusieurs onglets ouverts : mise à jour de la liste via l'événement de stockage
- Taille : mesure de l'espace utilisé et alerte avant la limite (de l'ordre de 5 Mo)
- Accès au localStorage protégé par un try/catch et repli en mémoire
- Tests unitaires : enregistrement, migration, quota dépassé

**Dépend de :** US-000

---

### US-029 [Design] — Concevoir le disclaimer

**Feature source :** F09 — Disclaimer
**Status :** Backlog
**Type :** Design
**Persona :** Camille, Anaïs — doivent savoir que l'outil est théorique avant d'appliquer une séance à de vrais élèves
**JTBD :** JTBD-E2 (Ne pas craindre de mettre un élève en danger), transverse

En tant que designer
Je veux concevoir un disclaimer simple, visible au premier lancement et accessible à tout moment
Afin que chaque utilisateur sache que l'outil est théorique et que le créateur décline toute responsabilité

**Critères d'acceptation**

Scénario : Happy path — Premier lancement
  Given l'utilisateur ouvre l'app pour la première fois
  When l'écran d'accueil se charge
  Then un message court est affiché avant l'usage : « Cet outil est théorique et destiné à l'entraînement. Il ne remplace ni le MFA, ni ton tuteur, ni le directeur de bassin. Son créateur décline toute responsabilité quant à l'usage des séances et des informations proposées. »
  And un bouton « J'ai compris » ferme le message
  And le texte est en langage simple, lisible sur un petit écran sans défilement excessif

Scénario : Accès permanent
  Given l'utilisateur a déjà fermé le message
  When il ouvre le menu ou la page « À propos »
  Then le texte complet du disclaimer est accessible
  And un rappel discret figure en pied des écrans de séance, de carnet et d'export

Scénario : Présence dans les exports
  Given l'utilisateur exporte une séance ou un carnet
  When il prévisualise l'export
  Then le disclaimer figure sur l'aperçu et dans le fichier

**Edge cases à couvrir**
- Texte modifié : le message se réaffiche une fois au prochain lancement
- Ton neutre, sans alarmisme ni jargon juridique
- Accessibilité : texte annoncé au lecteur d'écran, contraste suffisant, bouton atteignable au pouce
- Formulation simple décidée par l'utilisateur ; relecture juridique `[A DECIDER]` si l'app sort du cercle des testeurs

**Dépend de :** Aucune

---

### US-030 [Tech] — Implémenter l'affichage et la mémorisation du disclaimer

**Feature source :** F09 — Disclaimer
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** Transverse

En tant que développeur
Je veux implémenter l'affichage du disclaimer au premier lancement, sa mémorisation locale et son insertion dans les exports
Afin que le message soit toujours présent sans backend ni compte

**Critères d'acceptation**

Scénario : Happy path — Acceptation mémorisée
  Given l'utilisateur ferme le disclaimer avec « J'ai compris »
  When il rouvre l'app
  Then le disclaimer n'est plus affiché automatiquement
  And la version du texte acceptée est stockée dans le localStorage avec la date

Scénario : Nouvelle version du texte
  Given le texte du disclaimer a changé dans l'app
  When l'utilisateur ouvre l'app
  Then le disclaimer s'affiche à nouveau une fois
  And la nouvelle version est mémorisée après acceptation

Scénario : Erreur — Stockage indisponible
  Given le localStorage est bloqué ou en navigation privée
  When l'utilisateur ouvre l'app
  Then le disclaimer s'affiche à chaque lancement
  And l'app reste utilisable

**Edge cases à couvrir**
- Texte du disclaimer dans un fichier de contenu unique, réutilisé à l'écran et dans les exports
- Hors connexion : affichage identique
- Export : le texte et sa version sont inclus dans le fichier lisible et dans le fichier de séance
- Tests unitaires : première ouverture, texte modifié, stockage indisponible

**Dépend de :** US-000, US-017, US-029

---

## F10 — Carnet IE de 10 séances / macro-cycle (Must)

### US-023 [Design] — Concevoir le dossier « Carnet IE » et l'organisation des 10 séances

**Feature source :** F10 — Dossier Carnet IE
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui doit préparer un carnet exact de 10 séances encadrées avec une progression logique ; Anaïs, qui doit planifier ses séances jusqu'à l'examen
**JTBD :** JTBD-F5 (Faire évoluer les objectifs au fil de la saison), JTBD-F1, JTBD-F6

En tant que designer
Je veux concevoir un dossier « Carnet IE » qui présente 10 emplacements ordonnés chronologiquement, chacun lié à une séance
Afin que Camille voie en un coup d'œil où elle en est de son carnet et construise ses séances dans l'ordre

**Critères d'acceptation**

Scénario : Happy path — Création du carnet
  Given l'utilisateur n'a pas encore de carnet
  When il crée son carnet
  Then l'écran propose un titre et la date de l'examen (24-25 avril 2027 proposée par défaut)
  And 10 emplacements numérotés de 1 à 10 sont affichés dans l'ordre chronologique
  And chaque emplacement indique : titre, date prévue, phase de saison, séance liée ou « à construire »
  And un compteur affiche « 0 séance sur 10 »

Scénario : Création d'une séance depuis un emplacement
  Given un emplacement « à construire »
  When l'utilisateur appuie sur « Construire cette séance »
  Then le paramétrage s'ouvre avec le moment de la saison pré-rempli d'après la phase de l'emplacement
  And à l'enregistrement la séance est liée à l'emplacement

Scénario : Réorganisation
  Given plusieurs emplacements sont remplis
  When l'utilisateur déplace une séance par glisser-déposer
  Then les numéros d'ordre sont mis à jour
  And un message doux signale si l'ordre des dates devient incohérent (ex : « La séance 5 est datée avant la séance 4. »)

**Edge cases à couvrir**
- Exactement 10 emplacements : ni plus ni moins, conformément au carnet de l'examen
- Un seul carnet en v1 `[A DECIDER]`
- Lier une séance existante à un emplacement : liste de choix avec aperçu
- Retirer une séance d'un emplacement sans la supprimer
- Les 2 séances théoriques du carnet sont hors scope v1 `[A DECIDER]`
- Mobile-first : emplacements empilés, actions au pouce
- Accessibilité : ordre et numéros annoncés au lecteur d'écran

**Dépend de :** US-005, US-016

---

### US-024 [Tech] — Implémenter le modèle Carnet et son stockage local

**Feature source :** F10 — Modèle Carnet
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F5

En tant que développeur
Je veux implémenter le modèle Carnet (titre, date d'examen, 10 emplacements ordonnés liés aux séances) avec un schéma versionné dans le localStorage
Afin que le carnet soit conservé sur l'appareil, hors connexion, sans backend

**Critères d'acceptation**

Scénario : Happy path — Création et lecture
  Given l'utilisateur crée un carnet
  When il le valide
  Then un carnet est enregistré avec : id (UUID), titre, date d'examen, version du schéma, 10 emplacements (rang, séance liée ou vide, date prévue, phase de saison)
  And le carnet est retrouvé après rechargement, y compris sans connexion

Scénario : Intégrité des liens
  Given une séance liée à un emplacement est supprimée
  When l'app met à jour le carnet
  Then l'emplacement repasse à « à construire »
  And un message informe l'utilisateur avant la suppression

Scénario : Erreur — Carnet corrompu
  Given les données du carnet sont illisibles
  When l'app les charge
  Then un message neutre propose d'importer une sauvegarde
  And les séances individuelles restent disponibles

**Edge cases à couvrir**
- Séance liée à un seul emplacement à la fois
- Migration du schéma sans perte
- Espace de stockage : le carnet référence les séances par identifiant pour limiter la taille
- Export du carnet complet : traité dans US-019 et US-020
- Tests unitaires : création, réordonnancement, suppression d'une séance liée

**Dépend de :** US-000, US-006, US-017

---

### US-025 [Design] — Concevoir le suivi d'une séance à l'autre

**Feature source :** F10 — Enchaînement des séances
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui doit expliquer au jury la place de chaque séance dans sa progression ; Anaïs
**JTBD :** JTBD-F5, JTBD-F6 (Justifier mes choix devant le jury)

En tant que designer
Je veux concevoir, sur chaque séance du carnet, un bloc de liaison avec la séance précédente et la suivante
Afin que Camille construise une progression logique et puisse dire « séance avant / séance après » comme l'attend le jury

**Critères d'acceptation**

Scénario : Happy path — Bloc « Dans ton carnet »
  Given l'utilisateur consulte la séance 4 sur 10 de son carnet
  When le bloc s'affiche
  Then le rang (4/10), la séance précédente et la séance suivante sont visibles avec titre et dominante
  And une ligne « Ce que cette séance suppose acquis » reprend les objectifs de la séance précédente
  And une ligne « Ce qu'elle prépare » reprend l'objectif de la séance suivante

Scénario : Évolution d'une séance à l'autre
  Given les indicateurs de la séance précédente et de la séance courante sont disponibles
  When l'utilisateur compare
  Then l'évolution est dite en mots simples (ex : « Plus de travail hypercapnique que la séance 3 », « Même dominante que la séance 3 »)
  And une flèche accompagne chaque évolution, sans reposer uniquement sur la couleur

Scénario : Première et dernière séances
  Given la séance est la première ou la dernière du carnet
  When le bloc s'affiche
  Then l'absence de séance précédente ou suivante est présentée positivement (ex : « Première séance : point de départ de ta progression »)

**Edge cases à couvrir**
- Séance voisine non encore construite : invitation à la construire
- Indicateurs incomplets (exercice hors documents sources) : mention « données partielles »
- Note de justification libre par séance, réutilisée dans la synthèse (US-027)
- Navigation d'une séance à la suivante par swipe
- Accessibilité : évolutions annoncées au lecteur d'écran

**Dépend de :** US-005, US-023

---

### US-026 [Tech] — Implémenter les indicateurs de progression par séance

**Feature source :** F10 — Suivi de progression
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F5

En tant que développeur
Je veux calculer pour chaque séance des indicateurs de progression à partir de ses exercices et de ses paramètres
Afin de comparer les séances entre elles et d'alimenter la vue de cohérence

**Critères d'acceptation**

Scénario : Happy path — Calcul des indicateurs
  Given une séance contient des exercices du catalogue avec leurs paramètres
  When les indicateurs sont calculés
  Then la séance reçoit : dominante (technique, foncier, hypercapnie, hypoxie, lactique, mental), volume d'apnée (nombre d'apnées, distance ou temps cumulé), volume de travail hypercapnique, rapport récupération sur apnée, niveau de risque maximal, moment de la saison
  And le calcul est exécuté côté client en moins de 100 ms

Scénario : Mise à jour
  Given une séance du carnet est modifiée
  When elle est enregistrée
  Then ses indicateurs sont recalculés
  And la vue de cohérence reflète le changement

Scénario : Données partielles
  Given un exercice n'a pas de paramètres chiffrés (hors documents sources)
  When les indicateurs sont calculés
  Then l'indicateur concerné est marqué « partiel »
  And aucune valeur n'est inventée

**Edge cases à couvrir**
- Formule du volume hypercapnique : statut « suggestion », à valider par le porteur, documentée dans un fichier de contenu
- Séance sans exercice : indicateurs vides
- Plusieurs dominantes : la dominante principale est celle du plus grand volume, les autres sont conservées
- Unités mixtes (distance et durée) : normalisation expliquée
- Tests unitaires : une séance par dominante, séance mixte, données partielles

**Dépend de :** US-000, US-004, US-006

---

### US-027 [Design] — Concevoir la vue de cohérence globale du carnet

**Feature source :** F10 — Vue de cohérence
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui doit justifier ses choix pédagogiques devant le jury ; Anaïs
**JTBD :** JTBD-F6 (Justifier mes choix), JTBD-F5, JTBD-E1

En tant que designer
Je veux concevoir une vue d'ensemble des 10 séances qui montre la progression, les repères de saison et les points de vigilance
Afin que Camille vérifie en quelques secondes la cohérence de son carnet et sache l'expliquer au jury

**Critères d'acceptation**

Scénario : Happy path — Frise des 10 séances
  Given l'utilisateur ouvre la vue de cohérence
  When la vue s'affiche
  Then une frise présente les 10 séances dans l'ordre avec leur dominante (icône et texte) et leur niveau de risque
  And une courbe montre l'évolution du volume hypercapnique et de la charge d'une séance à l'autre
  And une bande indique les phases de saison (Reprise, Développement, Pré-compétition/Examen) et la date de l'examen
  And la vue tient sur un écran de téléphone, avec défilement horizontal doux si nécessaire

Scénario : Points de vigilance
  Given des contrôles de cohérence sont déclenchés
  When la vue s'affiche
  Then chaque point est repéré sur la frise avec une explication courte et sa source (corpus ou suggestion)
  And un point de vigilance n'est jamais bloquant ni culpabilisant

Scénario : Synthèse « pourquoi cet ordre »
  Given les notes de justification des séances sont renseignées
  When l'utilisateur ouvre la synthèse
  Then un texte structuré résume la progression (foncier vers spécifique, évolution du volume, adaptation à la saison)
  And le texte est modifiable et exportable avec le carnet

**Edge cases à couvrir**
- Carnet incomplet : emplacements vides visibles, vue utilisable dès 2 séances
- Aucune séance de dominante hypoxique : message neutre
- Impression ou capture de la vue pour la présenter au jury
- Accessibilité : la courbe a une alternative textuelle (tableau des valeurs) ; aucune information portée par la couleur seule
- Lecture rapide : la progression se perçoit en moins de 10 secondes

**Dépend de :** US-023, US-026

---

### US-028 [Tech] — Implémenter les contrôles de cohérence du carnet

**Feature source :** F10 — Contrôles de cohérence
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F5, JTBD-F6

En tant que développeur
Je veux implémenter des contrôles de cohérence entre les séances du carnet, définis dans un fichier de contenu
Afin que l'app signale une progression illogique et aide à la justifier

**Critères d'acceptation**

Scénario : Happy path — Hypoxie avant hypercapnie
  Given une séance hypoxique lourde précède toute séance de travail hypercapnique
  When les contrôles sont exécutés
  Then un point de vigilance est retourné avec l'explication (l'hypercapnie se travaille avant l'hypoxie dans la logique de saison) et sa source
  And le niveau est « avertissement »

Scénario : Saut de charge
  Given le volume d'apnée augmente d'une séance à l'autre au-delà du seuil configuré
  When les contrôles sont exécutés
  Then un point de vigilance « progression trop brusque » est retourné
  And le seuil est lu dans un fichier de contenu, avec statut « suggestion » et mention « à valider »

Scénario : Répétition et ordre de saison
  Given trois séances consécutives ont la même dominante, ou une séance d'une phase tardive précède une séance d'une phase précoce
  When les contrôles sont exécutés
  Then les points de vigilance correspondants sont retournés avec une explication

**Edge cases à couvrir**
- Les contrôles du carnet ne sont jamais bloquants : la progression relève du jugement pédagogique
- Chaque contrôle porte son origine (corpus, suggestion, hors corpus) et son statut de validation
- Seuils paramétrables, jamais codés en dur
- Carnet de moins de 3 séances : contrôles limités à ce qui est calculable
- Délais entre séances et récupération : aucun chiffre dans les documents sources, donc pas de règle chiffrée en v1
- Tests unitaires : un test par contrôle

**Dépend de :** US-000, US-024, US-026

---

## F06 — Fiches accidents (Should)

### US-010 [Design] — Concevoir les fiches accidents

**Feature source :** F06 — Fiches accidents
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui craint de se noyer dans le détail à l'écrit ; Anaïs, qui cherche des repères rapides
**JTBD :** JTBD-F3 (Maîtriser les accidents), JTBD-F2

En tant que designer
Je veux concevoir des fiches accidents au format imposé par l'examen (nom, mécanisme, causes, facteurs favorisants, symptômes, conduite à tenir, prévention)
Afin que Camille révise chaque accident dans un format qu'elle pourra reproduire au tableau

**Critères d'acceptation**

Scénario : Happy path — Fiche complète (PCM)
  Given je conçois la fiche perte de contrôle moteur (samba)
  When je structure le contenu
  Then la fiche contient les 7 champs dans l'ordre imposé
  And conduite à tenir et prévention distinguent le rôle de l'apnéiste et celui de l'IE
  And les signes visibles par l'encadrant sont mis en évidence (lâcher de bulles, accélération en fin d'apnée, changement de trajectoire)
  And un lien affiche les exercices qui portent le risque

Scénario : Fiche incomplète
  Given un accident dont le contenu n'est pas fourni par les documents sources
  When la fiche s'affiche
  Then les champs manquants affichent « À compléter avec le MFA ou la CRA »
  And la fiche ne présente jamais de contenu inventé

Scénario : Navigation de révision
  Given l'utilisateur consulte une fiche
  When il fait défiler les champs
  Then une barre de progression montre les 7 champs
  And un bouton « Revoir plus tard » enregistre la fiche dans une liste de révision

**Edge cases à couvrir**
- Mode mémorisation : masquer un champ pour se tester
- Impression ou capture : mise en page lisible d'une fiche sur une page
- Accessibilité : hiérarchie de titres claire pour lecteur d'écran
- Contenu long : sections repliables sur petit écran

**Dépend de :** Aucune

---

### US-011 [Tech] — Implémenter la base de fiches accidents

**Feature source :** F06 — Base de fiches accidents
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-F3, JTBD-F2

En tant que développeur
Je veux implémenter une base de fiches accidents embarquée avec un indicateur de complétude et les liens vers les tags d'exercices
Afin que l'utilisateur consulte les fiches hors connexion et voie le lien accident-exercice

**Critères d'acceptation**

Scénario : Happy path — Consultation d'une fiche complète
  Given l'utilisateur ouvre la fiche PCM
  When la fiche se charge
  Then les 7 champs sont affichés depuis le stockage local
  And le temps de chargement est inférieur à 300 ms
  And le statut de complétude est « complet »

Scénario : Fiches partielles
  Given une fiche dont le statut de complétude est « partiel » ou « non fourni »
  When elle se charge
  Then l'indicateur de complétude est affiché
  And les champs manquants sont vides avec un message d'invitation à compléter

Scénario : Lien accident-exercice
  Given un exercice porte le tag PCM_SAMBA
  When l'utilisateur ouvre sa fiche
  Then un lien mène à la fiche accident correspondante

**Edge cases à couvrir**
- Contenu corrompu : restauration de la version embarquée
- Mise à jour du contenu : conserver la liste « Revoir plus tard »
- Fiche absente pour un tag : lien masqué
- Recherche par nom d'accident et par synonyme (PCM, samba)

**Dépend de :** US-000

---

## F07 — Checklist d'auto-évaluation (Should)

### US-012 [Design] — Concevoir la checklist d'auto-évaluation

**Feature source :** F07 — Checklist d'auto-évaluation
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui veut savoir si sa séance passerait l'examen
**JTBD :** JTBD-E1 (Me sentir prêt et confiant), JTBD-F6 (Justifier mes choix)

En tant que designer
Je veux concevoir une checklist calquée sur la grille officielle /20 et un auto-diagnostic sécurité en 12 questions
Afin que Camille sache où elle en est avant le jour J sans se sentir jugée

**Critères d'acceptation**

Scénario : Happy path — Checklist par bloc
  Given je conçois l'écran de checklist
  When je structure les éléments
  Then 5 blocs sont affichés avec leur pondération : présentation au jury (3), présentation aux élèves (2), déroulement forme (5), déroulement fond (8), fin de séance (2)
  And chaque critère est une case à cocher avec une aide courte
  And les cases pouvant être déduites de la séance sont pré-cochées avec une mention « détecté dans ta séance »

Scénario : Résultat — Score et pistes
  Given l'utilisateur a terminé la checklist
  When il consulte le résultat
  Then un score /20 est affiché avec une interprétation bienveillante (ex : « Solide », « À renforcer »)
  And les 3 points prioritaires à corriger sont listés avec un lien vers la séance
  And le diagnostic sécurité en 12 questions est présenté séparément

Scénario : Mise en garde
  Given le score est affiché
  When l'utilisateur le lit
  Then une mention précise : « Auto-évaluation indicative. Elle ne remplace pas l'avis de ton tuteur. »

**Edge cases à couvrir**
- Séance incomplète : checklist consultable avec les cases non cochées expliquées
- Score faible : message encourageant sans ton alarmiste
- Nouvelle évaluation après correction : comparer avec le score précédent
- Accessibilité : cases à cocher accessibles au clavier et au lecteur d'écran

**Dépend de :** US-005

---

### US-013 [Tech] — Implémenter le calcul du score et du diagnostic sécurité

**Feature source :** F07 — Calcul du score et du diagnostic sécurité
**Status :** Backlog
**Type :** Tech
**Persona :** Camille
**JTBD :** JTBD-E1, JTBD-F6

En tant que développeur
Je veux implémenter le calcul du score /20 par bloc, la détection automatique de critères satisfaits et le diagnostic sécurité
Afin que la checklist reflète fidèlement la séance construite

**Critères d'acceptation**

Scénario : Happy path — Calcul du score
  Given l'utilisateur a coché 12 critères répartis sur les 5 blocs
  When le score est calculé
  Then chaque bloc est noté au prorata des critères cochés et de sa pondération
  And le total est arrondi à 0,5 près
  And le score est sauvegardé avec la séance et la date

Scénario : Détection automatique
  Given une séance qui contient un échauffement, un protocole de sortie et un critère d'évaluation
  When la checklist s'ouvre
  Then les critères correspondants sont pré-cochés
  And l'utilisateur peut les décocher

Scénario : Erreur — Barème absent
  Given le fichier de barème est indisponible
  When l'app calcule le score
  Then l'app charge le barème embarqué par défaut
  And aucun score erroné n'est affiché

**Edge cases à couvrir**
- Séance modifiée après l'évaluation : le score précédent est marqué comme obsolète
- Barème versionné pour suivre les évolutions de la grille officielle
- Diagnostic sécurité : 12 réponses oui/non, résultat en trois niveaux
- Tests unitaires : score minimum, maximum et cas intermédiaires

**Dépend de :** US-000, US-006, US-008

---

## F05 — Export et partage des séances (Should)

### US-019 [Design] — Concevoir l'export, l'import et le partage d'une séance

**Feature source :** F05 — Export et partage d'une séance
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui veut montrer sa séance à son tuteur ; Anaïs, qui veut la partager et la transférer vers un autre téléphone
**JTBD :** JTBD-S1 (Être jugé crédible par mon tuteur), JTBD-F6 (Justifier mes choix)

En tant que designer
Je veux concevoir le parcours d'export, de partage et d'import d'une séance, adapté au mobile
Afin que l'utilisateur envoie une séance lisible à son tuteur, la sauvegarde hors de l'appareil ou la transfère vers un autre appareil

**Critères d'acceptation**

Scénario : Happy path — Export depuis une séance
  Given l'utilisateur consulte une séance enregistrée
  When il appuie sur « Partager »
  Then un choix simple propose : fichier lisible (PDF), fichier de séance importable et lien de partage
  And le partage utilise le menu de partage du téléphone
  And un aperçu montre ce qui sera envoyé

Scénario : Contenu de l'export
  Given l'utilisateur prévisualise l'export
  When il lit l'aperçu
  Then l'export contient : titre, paramètres, objectif et critère d'évaluation, phases (durée, contenu, consignes, position de l'encadrant, critères de réussite), éléments de sécurité et alertes en cours
  And chaque règle conserve son origine (corpus, suggestion, hors corpus) et son statut de validation
  And la mention « Outil d'entraînement, ne remplace pas le tuteur ni le MFA » figure en pied

Scénario : Lien trop long
  Given la séance est trop longue pour tenir dans un lien de 2000 caractères
  When l'utilisateur choisit « Lien de partage »
  Then l'option est désactivée avec une explication douce : « Cette séance est trop longue pour un lien. Partage-la par fichier. »
  And le fichier de séance est proposé à la place
  And un indicateur discret montre si le lien tiendra avant de le générer

Scénario : Export du carnet complet
  Given l'utilisateur consulte son Carnet IE
  When il appuie sur « Partager le carnet »
  Then le fichier lisible reprend les 10 séances dans l'ordre, la vue de cohérence et la synthèse « pourquoi cet ordre »
  And le fichier de données importable contient le carnet et ses séances
  And le lien n'est pas proposé pour le carnet complet (trop long pour 2000 caractères)

Scénario : Import d'une séance reçue
  Given l'utilisateur reçoit un fichier ou un lien de séance
  When il l'ouvre dans l'app
  Then un aperçu de la séance s'affiche avec le bouton « Ajouter à mes séances »
  And une séance déjà présente propose de la dupliquer ou de l'ignorer

**Edge cases à couvrir**
- Séance non enregistrée : invitation à l'enregistrer avant de la partager
- Séance très longue : mise en page lisible sur plusieurs pages
- Séance avec une alerte bloquante : mention visible dans l'export
- Destinataire sans l'app : le fichier lisible s'ouvre sans l'app
- Fichier importé invalide : message bienveillant sans mot « erreur »
- Accessibilité : fichier exporté avec une structure de titres lisible

**Dépend de :** US-005, US-016, US-023

---

### US-020 [Tech] — Implémenter l'export et l'import côté navigateur

**Feature source :** F05 — Export et import
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-S1, JTBD-F6

En tant que développeur
Je veux implémenter la génération du fichier lisible, du fichier de séance et du lien de partage, ainsi que l'import, entièrement dans le navigateur
Afin que la séance soit transmise ou sauvegardée sans serveur

**Critères d'acceptation**

Scénario : Happy path — Génération de l'export
  Given l'utilisateur demande l'export d'une séance enregistrée
  When le fichier est généré dans le navigateur
  Then il contient tous les champs du modèle de séance et ses alertes en cours
  And la génération prend moins de 3 secondes pour une séance de 20 phases
  And le menu de partage du système s'ouvre avec le fichier, ou le fichier est téléchargé

Scénario : Fichier de séance et lien
  Given l'utilisateur choisit le fichier de séance ou le lien
  When l'export est généré
  Then le fichier est au format JSON versionné et portant une signature de format
  And le lien contient la séance encodée dans son adresse, sans serveur
  And l'adresse complète du lien, domaine compris, ne dépasse jamais 2000 caractères
  And l'import relit la séance à l'identique

Scénario : Encodage compact et repli
  Given une séance standard de 8 phases
  When le lien est généré
  Then la séance est encodée de façon compacte (clés courtes, identifiants d'exercices du catalogue au lieu de textes, compression, encodage adapté aux adresses)
  And la longueur du lien est mesurée avant de l'afficher
  And si elle dépasse 2000 caractères, aucun lien n'est généré et le fichier est proposé
  And aucun texte n'est tronqué silencieusement

Scénario : Export du carnet
  Given l'utilisateur exporte son Carnet IE
  When l'export est généré dans le navigateur
  Then le fichier lisible contient les 10 séances, la vue de cohérence, la synthèse et le disclaimer
  And le fichier de données contient le carnet, ses séances et la version du schéma
  And l'import du fichier restaure le carnet et ses liens

Scénario : Erreur — Import invalide ou trop volumineux
  Given le fichier ou le lien est corrompu, d'une version inconnue ou trop volumineux
  When l'utilisateur l'importe
  Then l'app affiche : « On n'a pas pu lire cette séance. Demande à la personne de te la renvoyer. »
  And aucune donnée existante n'est modifiée

**Edge cases à couvrir**
- Hors connexion : toutes les formes d'export et l'import fonctionnent sans réseau
- Texte libre très long (notes, consignes) : repli vers le fichier plutôt que troncature
- Tests unitaires : liens de séances de 4, 8 et 12 phases mesurés par rapport à la limite de 2000 caractères
- Statuts d'origine et de validation conservés dans l'export
- Entrées malveillantes dans un fichier importé : validation stricte du schéma, aucun contenu exécuté
- Caractères spéciaux et accents correctement rendus
- Tests unitaires : aller-retour export puis import

**Dépend de :** US-000, US-006, US-017, US-024

---

## F09 — Fonctionnement hors connexion (Must)

### US-014 [Tech] — Implémenter la mise en cache de l'app pour l'usage hors connexion

**Feature source :** F09 — Fonctionnement hors connexion (service worker)
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs — candidats dont le bassin ou le vestiaire n'a pas toujours de réseau
**JTBD :** Transverse

En tant que développeur
Je veux implémenter un service worker qui met en cache l'app et tout son contenu (exercices, règles, fiches accidents, sujets)
Afin que l'app fonctionne totalement hors connexion, sans backend et sans authentification

**Critères d'acceptation**

Scénario : Happy path — App utilisable hors connexion
  Given l'utilisateur a ouvert l'app en ligne au moins une fois
  When il perd la connexion
  Then l'app reste fonctionnelle : paramétrage, catalogue, constructeur, alertes, fiches accidents, checklist, export et import
  And les séances sont sauvegardées dans le localStorage
  And un indicateur discret montre « Mode hors ligne »

Scénario : Installation sur l'écran d'accueil
  Given l'app est servie en HTTPS (Vercel ou GitHub Pages)
  When l'utilisateur l'ajoute à l'écran d'accueil
  Then l'app s'ouvre en plein écran avec son icône et son nom
  And le manifeste de l'application est valide

Scénario : Première ouverture sans connexion
  Given l'utilisateur ouvre l'app pour la première fois sans réseau
  When le service worker n'a pas encore mis le contenu en cache
  Then un message explique qu'une première connexion est nécessaire
  And l'app ne plante pas

**Edge cases à couvrir**
- Navigateur sans service worker : fonctionnement en ligne avec avertissement
- Mise à jour de l'app et du contenu : activation silencieuse au prochain lancement, proposition discrète de recharger
- Hébergement sur GitHub Pages : chemin de base de l'app correctement configuré
- Cache plein ou purgé par le navigateur : rechargement du contenu à la prochaine connexion, séances intactes
- Aucun appel à un service externe nécessaire au fonctionnement

**Dépend de :** US-000

---

### US-015 [Design] — Concevoir les états hors connexion et les messages de données locales

**Feature source :** F09 — États hors connexion et données locales
**Status :** Backlog
**Type :** Design
**Persona :** Camille, Anaïs
**JTBD :** Transverse

En tant que designer
Je veux concevoir les états de l'app sans connexion et les messages qui rappellent que les données sont sur l'appareil
Afin que l'utilisateur comprenne que tout fonctionne au bord de la piscine et sache comment protéger ses séances

**Critères d'acceptation**

Scénario : Happy path — Indicateur hors connexion discret
  Given l'utilisateur perd la connexion
  When l'app passe en mode hors ligne
  Then une barre fine apparaît en haut (pas de popup bloquant)
  And le message est rassurant : « Mode hors ligne — tout fonctionne, tes séances sont enregistrées sur cet appareil »
  And toutes les fonctionnalités restent accessibles

Scénario : Premier lancement — Mention des données locales
  Given l'utilisateur ouvre l'app pour la première fois
  When il atteint l'écran de paramétrage
  Then un bandeau discret explique que les séances restent sur cet appareil et qu'un export sert de sauvegarde
  And le bandeau se ferme en un geste et ne revient pas

Scénario : Retour de connexion
  Given l'utilisateur retrouve la connexion
  When l'app détecte le retour
  Then l'indicateur disparaît avec une animation douce
  And aucun message technique n'apparaît, car rien ne dépend du réseau

**Edge cases à couvrir**
- Hors ligne prolongé (> 24 h) : aucun message alarmiste
- Transition rapide entre en ligne et hors ligne : pas de clignotement (debounce de 3 s)
- Mise à jour du contenu disponible : proposition discrète de recharger
- Accessibilité : l'indicateur est annoncé au lecteur d'écran

**Dépend de :** US-014

---

## Matrice de couverture

| Persona | US associées |
|---------|-------------|
| Camille | US-000 à US-017, US-019 à US-021, US-023 à US-030 (toutes sauf US-018 et US-022) |
| Anaïs | US-000, US-003 à US-011, US-014 à US-017, US-019, US-020, US-023 à US-030 |
| Porteur du projet | US-021, US-022 |

## Points d'attention pour le design
- Ton bienveillant et non-jugeant sur TOUS les écrans (principe transversal JTBD-E4)
- Sécurité d'abord : une alerte explique toujours le « pourquoi » et cite sa source
- Statut de fiabilité (corpus, suggestion, hors corpus) visible sur chaque règle et chaque exercice
- Mobile-first (décision validée) : bottom nav, gestes swipe, zones tactiles d'au moins 44 px, lecture à une main
- Statut d'origine et de validation du contenu visible partout, y compris dans les exports
- Disclaimer simple : visible au premier lancement, accessible à tout moment, repris dans les exports
- Carnet IE : la progression des 10 séances doit se lire en moins de 10 secondes ; aucun contrôle de cohérence n'est bloquant ni culpabilisant
- États vides accueillants (jamais de « Aucun résultat » sec)
- Messages sans les mots « erreur », « invalide », « obligatoire »
- Accessibilité : contrastes, lecteur d'écran, navigation clavier, information jamais portée par la couleur seule

## Points d'attention pour le dev
- Architecture 100 % front-end (décision validée) : aucun backend, compte ni base de données externe ; déploiement statique sur Vercel ou GitHub Pages
- Séances dans le localStorage (schéma versionné, gestion du quota) ; contenu embarqué dans l'app ; service worker pour l'usage hors connexion
- Setup technique (US-000) est prérequis à toutes les US Tech
- Dépendances : US-017 (localStorage) est prérequis pour US-002 et US-020 ; US-006 (modèle de séance) pour US-020 ; US-004 (base d'exercices) pour US-022
- Contenu pédagogique en JSON versionné et validé par schéma ; modèle de données défini dans 05_modele_donnees_app.md
- Moteur de règles testé règle par règle (ALR-001 à ALR-020)
- Contenu hors corpus : jamais présenté comme règle FFESSM ; relu et validé par le porteur du projet avant mise à disposition des testeurs (US-021, US-022)
- Export : conserve origine, statut de validation et disclaimer ; lien limité à 2000 caractères, mesuré avant affichage, avec repli vers le fichier ; le carnet complet se partage par fichier
- Carnet IE : modèle versionné qui référence les séances par identifiant ; indicateurs et contrôles de cohérence calculés côté client, seuils lus dans les fichiers de contenu (statut « suggestion », à valider)
- Priorités : F04 (alertes) est en Should ; ses stories (US-007 à US-009) sont livrées après le noyau Must, F02 portant en attendant les points de sécurité
- Forme du lien de partage et limites de taille `[A DECIDER]`
- Sécurité de l'import : valider strictement le schéma, n'exécuter aucun contenu importé
