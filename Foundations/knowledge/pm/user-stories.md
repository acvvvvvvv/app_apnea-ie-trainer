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
| US-021 | Design | F02 — Revue du contenu par le porteur | Backlog | Porteur du projet | JTBD-F2 |
| US-022 | Tech | F02 — Statut de validation du contenu | Backlog | Porteur du projet, Camille | JTBD-F2 |
| US-005 | Design | F03 — Constructeur de séance structuré | Backlog | Camille, Anaïs | JTBD-F1, F6 |
| US-006 | Tech | F03 — Modèle de séance et sauvegarde | Backlog | Camille, Anaïs | JTBD-F1, F6 |
| US-007 | Design | F04 — Alertes de sécurité | Backlog | Camille, Anaïs | JTBD-F2, F4 |
| US-008 | Tech | F04 — Moteur de règles de sécurité | Backlog | Camille, Anaïs | JTBD-F2 |
| US-009 | Tech | F04 — Contrôle des prérogatives et de la profondeur | Backlog | Camille, Anaïs | JTBD-F2, F4 |
| US-016 | Design | F09 — Compte, connexion et rôles | Backlog | Camille, Anaïs, Porteur du projet | Transverse |
| US-017 | Tech | F09 — Authentification et rôles | Backlog | Camille, Anaïs, Porteur du projet | Transverse |
| US-018 | Tech | F09 — Sauvegarde des séances dans le compte | Backlog | Camille, Anaïs | Transverse |
| US-010 | Design | F06 — Fiches accidents | Backlog | Camille, Anaïs | JTBD-F3, F2 |
| US-011 | Tech | F06 — Base de fiches accidents | Backlog | Camille, Anaïs | JTBD-F3, F2 |
| US-012 | Design | F07 — Checklist d'auto-évaluation | Backlog | Camille | JTBD-E1, F6 |
| US-013 | Tech | F07 — Calcul du score et du diagnostic sécurité | Backlog | Camille | JTBD-E1, F6 |
| US-019 | Design | F05 — Export et partage d'une séance | Backlog | Camille, Anaïs | JTBD-S1, F6 |
| US-020 | Tech | F05 — Génération de l'export | Backlog | Camille, Anaïs | JTBD-S1, F6 |
| US-014 | Tech | F10 — Stockage local, service worker et synchronisation | Backlog | Camille, Anaïs | Transverse |
| US-015 | Design | F10 — États dégradés hors connexion | Backlog | Camille, Anaïs | Transverse |

**Total** : 23 User Stories (1 Scaffolding + 14 Must + 8 Should)
- **Design** : 10 US
- **Tech** : 13 US

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

Scénario : Backend — Service d'authentification et de données
  Given le produit impose un compte par utilisateur
  When je configure le backend
  Then un service d'authentification, une base de données des utilisateurs et des séances et un déploiement de dev sont en place
  And les rôles « porteur » et « testeur » sont définis dans le schéma
  And les secrets sont gérés hors du dépôt

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
  And les paramètres sont sauvegardés en local et rattachés au compte de l'utilisateur

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

**Dépend de :** US-000, US-014, US-017

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

**Dépend de :** US-000, US-014

---

### US-021 [Design] — Concevoir la revue du contenu par le porteur du projet

**Feature source :** F02 — Revue du contenu par le porteur
**Status :** Backlog
**Type :** Design
**Persona :** Porteur du projet — relit et valide lui-même le contenu hors documents sources avant sa mise à disposition des testeurs
**JTBD :** JTBD-F2 (Garantir la sécurité de chaque exercice)

En tant que designer
Je veux concevoir un écran de revue qui liste le contenu hors documents sources et permet de le valider ou de l'amender
Afin que le porteur relise méthodiquement chaque règle, exercice ou paramètre avant que les testeurs ne le voient

**Critères d'acceptation**

Scénario : Happy path — Liste de revue
  Given le porteur ouvre l'écran de revue
  When la liste se charge
  Then les entrées sont regroupées par origine (suggestion, hors corpus) et par statut (à valider, validé)
  And chaque entrée affiche son texte, sa source éventuelle et ses boutons « Valider » et « Modifier »
  And un compteur indique le nombre d'entrées restant à valider
  And l'écran est utilisable sur mobile (une entrée par écran, lecture à une main)

Scénario : Validation d'une entrée
  Given le porteur lit une entrée
  When il appuie sur « Valider »
  Then l'entrée passe au statut « validé » avec la date
  And le compteur diminue
  And une annulation est possible pendant 5 secondes

Scénario : Accès réservé
  Given un testeur ouvre l'application
  When il cherche l'écran de revue
  Then l'écran n'est pas accessible
  And les entrées non validées lui apparaissent avec la mention « À valider »

**Edge cases à couvrir**
- Entrée modifiée après validation : retour au statut « à valider »
- Liste longue : filtres par discipline et par origine
- Commentaire libre pour noter une source consultée ou un doute
- Reprise de la revue là où le porteur s'était arrêté
- Accessibilité : le statut n'est pas porté uniquement par la couleur

**Dépend de :** US-003, US-016

---

### US-022 [Tech] — Implémenter le statut de validation du contenu

**Feature source :** F02 — Statut de validation du contenu
**Status :** Backlog
**Type :** Tech
**Persona :** Porteur du projet, Camille
**JTBD :** JTBD-F2

En tant que développeur
Je veux implémenter un statut de validation (à valider, validé) et un historique pour chaque entrée de contenu, modifiable uniquement par le rôle porteur
Afin que les testeurs voient l'état de validation de chaque règle et que seul le porteur puisse le modifier

**Critères d'acceptation**

Scénario : Happy path — Validation par le porteur
  Given le porteur est connecté avec le rôle « porteur »
  When il valide une entrée hors documents sources
  Then le statut passe à « validé » avec l'identifiant du porteur et la date
  And l'historique conserve les changements de statut

Scénario : Accès refusé à un testeur
  Given un testeur est connecté
  When il tente de modifier un statut de validation
  Then la requête est refusée côté serveur
  And l'app affiche un message neutre sans exposer de détail technique

Scénario : Affichage dans le catalogue
  Given une entrée a le statut « à valider »
  When un testeur ouvre la fiche
  Then la mention « À valider » est affichée à côté de l'entrée
  And l'entrée reste utilisable dans les séances avec un rappel `[A DECIDER]`

**Edge cases à couvrir**
- Entrée du corpus (documents sources) : statut « corpus » sans validation requise
- Modification du texte d'une entrée validée : statut remis à « à valider »
- Mise à jour du contenu embarqué : conservation des statuts existants par identifiant
- Cohérence entre statut local et serveur après synchronisation
- Journalisation des changements pour traçabilité

**Dépend de :** US-000, US-004, US-017

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
  Then la séance est sauvegardée en local puis dans le compte avec : id (UUID), titre, paramètres, objectif, phases, sécurité, date de création, date de modification
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

**Dépend de :** US-000, US-002, US-004, US-014, US-018

---

## F04 — Alertes de sécurité en temps réel (Must)

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

## F09 — Comptes et sauvegarde des séances (Must)

### US-016 [Design] — Concevoir la création de compte, la connexion et les rôles

**Feature source :** F09 — Compte, connexion et rôles
**Status :** Backlog
**Type :** Design
**Persona :** Camille et Anaïs (testeuses et utilisatrices), Porteur du projet — veulent retrouver leurs séances sur leur téléphone
**JTBD :** Transverse

En tant que designer
Je veux concevoir un parcours de création de compte et de connexion très court, adapté au mobile, avec deux rôles (porteur, testeur)
Afin que chaque utilisateur sauvegarde ses séances sans que le compte ne soit un frein

**Critères d'acceptation**

Scénario : Happy path — Création de compte
  Given l'utilisateur ouvre l'app pour la première fois
  When il choisit de créer un compte
  Then l'écran demande le minimum (adresse e-mail et mot de passe, ou lien de connexion `[A DECIDER]`)
  And une phrase explique pourquoi un compte est utile (« Pour retrouver tes séances sur tous tes appareils »)
  And l'écran est conçu pour le téléphone (champ unique visible avec le clavier ouvert)
  And aucune information inutile n'est demandée

Scénario : Connexion et retour
  Given l'utilisateur a déjà un compte
  When il ouvre l'app
  Then il est reconnecté automatiquement s'il l'était déjà
  And un lien « Mot de passe oublié » est visible

Scénario : Erreur — Identifiants incorrects
  Given l'utilisateur saisit de mauvais identifiants
  When il valide
  Then un message bienveillant s'affiche : « On ne retrouve pas ton compte. Vérifie ton adresse et réessaie. »
  And le message n'utilise jamais les mots « erreur », « invalide »

**Edge cases à couvrir**
- Invitation de testeur : arrivée par lien ou code, inscription préremplie `[A DECIDER]`
- Rôle porteur : accès à l'écran de revue du contenu (US-021) uniquement pour ce rôle
- Accessibilité : champs étiquetés, contrastes, navigation au lecteur d'écran
- Déconnexion : confirmation douce, séances non synchronisées signalées
- Suppression du compte : parcours expliqué, avec rappel de l'export des séances (US-019)

**Dépend de :** Aucune

---

### US-017 [Tech] — Implémenter l'authentification et les rôles

**Feature source :** F09 — Authentification et rôles
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs, Porteur du projet
**JTBD :** Transverse

En tant que développeur
Je veux implémenter l'authentification et la gestion de deux rôles (porteur, testeur) avec contrôle d'accès côté serveur
Afin que chaque utilisateur accède uniquement à ses séances et que seul le porteur accède à la revue du contenu

**Critères d'acceptation**

Scénario : Happy path — Inscription et connexion
  Given un utilisateur crée un compte avec une adresse e-mail valide
  When il valide
  Then le compte est créé avec le rôle « testeur » par défaut
  And une session sécurisée est ouverte
  And aucun mot de passe n'est stocké en clair

Scénario : Rôle porteur
  Given le compte du porteur du projet est désigné
  When il se connecte
  Then il dispose du rôle « porteur »
  And il accède à l'écran de revue du contenu (US-021) en plus des fonctions de testeur

Scénario : Erreur — Accès à la séance d'un autre utilisateur
  Given un utilisateur tente d'accéder à la séance d'un autre utilisateur
  When la requête est reçue
  Then elle est refusée côté serveur
  And aucune donnée de la séance n'est révélée

**Edge cases à couvrir**
- Nombre limité de tentatives de connexion : blocage temporaire
- Réinitialisation du mot de passe par e-mail
- Adresse e-mail déjà utilisée : message neutre
- Expiration de session hors connexion : l'utilisateur garde accès à ses données locales
- Attribution du rôle porteur : opération manuelle réservée, jamais auto-attribuée
- Mode d'inscription des testeurs (invitation, code, ouverture libre) `[A DECIDER]`

**Dépend de :** US-000

---

### US-018 [Tech] — Implémenter la sauvegarde des séances dans le compte

**Feature source :** F09 — Sauvegarde des séances dans le compte
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** Transverse

En tant que développeur
Je veux implémenter l'enregistrement des séances sur le serveur, rattachées au compte, avec récupération sur tout appareil
Afin que l'utilisateur retrouve ses séances après changement de téléphone ou réinstallation

**Critères d'acceptation**

Scénario : Happy path — Sauvegarde et récupération
  Given l'utilisateur enregistre une séance
  When la connexion est disponible
  Then la séance est envoyée au serveur et rattachée à son compte
  And elle est retrouvée à la connexion sur un autre appareil

Scénario : Séance créée hors connexion
  Given l'utilisateur crée une séance sans réseau
  When la connexion revient
  Then la séance est synchronisée automatiquement en arrière-plan
  And un indicateur discret confirme « Séances à jour »

Scénario : Erreur — Échec d'enregistrement serveur
  Given le serveur ne répond pas
  When l'app tente d'enregistrer
  Then la séance reste en local avec le statut « en attente de synchronisation »
  And l'app réessaie avec un délai croissant
  And un message rassurant informe que la séance est en sécurité sur l'appareil

**Edge cases à couvrir**
- Même séance modifiée sur deux appareils : la version la plus récente est conservée, l'ancienne est archivée
- Suppression d'une séance : confirmation, mise en corbeille de 30 jours `[A DECIDER]`
- Séance volumineuse : compression avant envoi
- Quotas de stockage par compte
- Suppression du compte : suppression des séances avec confirmation

**Dépend de :** US-000, US-006, US-014, US-017

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

**Dépend de :** US-000, US-014

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

### US-019 [Design] — Concevoir l'export et le partage d'une séance

**Feature source :** F05 — Export et partage d'une séance
**Status :** Backlog
**Type :** Design
**Persona :** Camille, qui veut montrer sa séance à son tuteur ; Anaïs, qui veut la partager avec d'autres candidats
**JTBD :** JTBD-S1 (Être jugé crédible par mon tuteur), JTBD-F6 (Justifier mes choix)

En tant que designer
Je veux concevoir un parcours d'export et de partage d'une séance depuis son écran, adapté au mobile
Afin que l'utilisateur envoie une séance lisible à son tuteur ou à un autre candidat en quelques gestes

**Critères d'acceptation**

Scénario : Happy path — Export depuis une séance
  Given l'utilisateur consulte une séance
  When il appuie sur « Partager »
  Then un choix simple propose les formats disponibles (fichier lisible, lien, fichier de données `[A DECIDER]`)
  And le partage utilise le menu de partage du téléphone
  And un aperçu montre ce qui sera envoyé

Scénario : Contenu de l'export
  Given l'utilisateur prévisualise l'export
  When il lit l'aperçu
  Then l'export contient : titre, paramètres, objectif et critère d'évaluation, phases (durée, contenu, consignes, position de l'encadrant, critères de réussite), éléments de sécurité et alertes en cours
  And chaque règle conserve son origine (corpus, suggestion, hors corpus) et son statut de validation
  And la mention « Outil d'entraînement, ne remplace pas le tuteur ni le MFA » figure en pied

Scénario : Séance non sauvegardée
  Given la séance n'est pas encore enregistrée
  When l'utilisateur appuie sur « Partager »
  Then un message invite à l'enregistrer d'abord : « Enregistre ta séance pour pouvoir la partager. »

**Edge cases à couvrir**
- Séance très longue : mise en page lisible sur plusieurs pages
- Séance avec une alerte bloquante : mention visible dans l'export
- Destinataire sans compte : le fichier se lit sans compte
- Lien de partage : possibilité de le désactiver
- Accessibilité : fichier exporté avec une structure de titres lisible

**Dépend de :** US-005, US-016

---

### US-020 [Tech] — Implémenter la génération de l'export

**Feature source :** F05 — Génération de l'export
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs
**JTBD :** JTBD-S1, JTBD-F6

En tant que développeur
Je veux implémenter la génération de l'export d'une séance et son envoi via le partage du système
Afin que la séance soit transmise sous une forme fidèle et lisible

**Critères d'acceptation**

Scénario : Happy path — Génération du fichier
  Given l'utilisateur demande l'export d'une séance enregistrée
  When le fichier est généré
  Then il contient tous les champs du modèle de séance et ses alertes en cours
  And la génération prend moins de 3 secondes pour une séance de 20 phases
  And le menu de partage du système s'ouvre avec le fichier

Scénario : Statuts et mentions conservés
  Given la séance contient des entrées hors documents sources
  When l'export est généré
  Then chaque entrée garde son origine et son statut de validation
  And la mention de non-remplacement du tuteur figure dans l'export

Scénario : Erreur — Génération impossible
  Given la génération échoue
  When l'utilisateur réessaie
  Then un message explique : « On n'a pas pu préparer ton export. Réessaie dans un instant. »
  And la séance n'est pas altérée

**Edge cases à couvrir**
- Hors connexion : l'export fichier fonctionne sans réseau ; le lien de partage nécessite une connexion
- Navigateur sans partage système : téléchargement du fichier
- Caractères spéciaux et accents correctement rendus
- Lien de partage : expiration et révocation `[A DECIDER]`
- Taille du fichier : limite et compression

**Dépend de :** US-000, US-006, US-018

---

## F10 — Fonctionnement hors connexion et synchronisation (Should)

### US-014 [Tech] — Implémenter le stockage local, le service worker et la synchronisation

**Feature source :** F10 — Stockage local, service worker et synchronisation
**Status :** Backlog
**Type :** Tech
**Persona :** Camille, Anaïs — candidats dont le bassin ou le vestiaire n'a pas toujours de réseau
**JTBD :** Transverse

En tant que développeur
Je veux implémenter le stockage local (IndexedDB) et un service worker qui met en cache l'app et le contenu
Afin que l'app fonctionne sans connexion pour toutes les opérations de la v1

**Critères d'acceptation**

Scénario : Happy path — App utilisable hors connexion
  Given l'utilisateur a déjà ouvert l'app en ligne au moins une fois
  When il perd la connexion
  Then l'app reste fonctionnelle : paramétrage, catalogue, constructeur, alertes, fiches accidents, checklist
  And les séances sont sauvegardées en local
  And un indicateur discret montre « Mode hors ligne »

Scénario : Première ouverture sans connexion
  Given l'utilisateur ouvre l'app pour la première fois sans réseau
  When le service worker n'a pas encore mis en cache le contenu
  Then un message explique qu'une première connexion est nécessaire
  And l'app ne plante pas

Scénario : Erreur — Stockage plein
  Given le stockage local est plein
  When l'utilisateur enregistre une séance
  Then l'app affiche : « L'espace de stockage est plein. Libère de l'espace pour continuer. »
  And les séances existantes ne sont pas corrompues

**Edge cases à couvrir**
- Navigateur sans service worker : fonctionnement en ligne avec avertissement
- Mise à jour du contenu : activation silencieuse au prochain lancement
- Données locales effacées par le navigateur : restauration des séances depuis le compte à la prochaine connexion
- Synchronisation avec le compte : traitée dans US-018 ; ce stockage local sert de file d'attente des modifications
- Schéma de stockage versionné avec migrations

**Dépend de :** US-000

---

### US-015 [Design] — Concevoir les états dégradés hors connexion

**Feature source :** F10 — États dégradés hors connexion
**Status :** Backlog
**Type :** Design
**Persona :** Camille, Anaïs
**JTBD :** Transverse

En tant que designer
Je veux concevoir les états de l'app quand la connexion est absente ou que le stockage local est limité
Afin que l'utilisateur comprenne ce qui fonctionne sans être inquiété pour ses séances

**Critères d'acceptation**

Scénario : Happy path — Indicateur hors connexion discret
  Given l'utilisateur perd la connexion
  When l'app passe en mode hors ligne
  Then une barre fine apparaît en haut (pas de popup bloquant)
  And le message est rassurant : « Mode hors ligne — tes séances sont enregistrées sur cet appareil et seront synchronisées au retour de la connexion »
  And toutes les fonctionnalités de la v1 restent accessibles

Scénario : Modifications en attente de synchronisation
  Given l'utilisateur a modifié des séances hors connexion
  When il consulte la liste de ses séances
  Then un indicateur discret précise « Modifications en attente de synchronisation »
  And les séances restent entièrement consultables et modifiables
  And une aide explique qu'elles seront enregistrées dans le compte au retour de la connexion

Scénario : Retour de connexion
  Given l'utilisateur retrouve la connexion
  When l'app détecte le retour
  Then l'indicateur disparaît avec une animation douce
  And un message éphémère confirme « Connexion retrouvée »

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
| Camille | US-000 à US-020 (toutes sauf US-021 et US-022) |
| Anaïs | US-000, US-003 à US-009, US-010, US-011, US-014 à US-020 |
| Porteur du projet | US-016, US-017, US-021, US-022 |

## Points d'attention pour le design
- Ton bienveillant et non-jugeant sur TOUS les écrans (principe transversal JTBD-E4)
- Sécurité d'abord : une alerte explique toujours le « pourquoi » et cite sa source
- Statut de fiabilité (corpus, suggestion, hors corpus) visible sur chaque règle et chaque exercice
- Mobile-first (décision validée) : bottom nav, gestes swipe, zones tactiles d'au moins 44 px, lecture à une main
- Statut d'origine et de validation du contenu visible partout, y compris dans les exports
- États vides accueillants (jamais de « Aucun résultat » sec)
- Messages sans les mots « erreur », « invalide », « obligatoire »
- Accessibilité : contrastes, lecteur d'écran, navigation clavier, information jamais portée par la couleur seule

## Points d'attention pour le dev
- Architecture avec backend : comptes, séances sauvegardées dans le compte, rôles porteur et testeur, contrôle d'accès côté serveur
- Stockage local prioritaire pour la consultation et file d'attente de synchronisation
- Setup technique (US-000) est prérequis à toutes les US Tech
- Dépendances : US-017 (authentification) est prérequis pour US-002, US-018, US-021, US-022 ; US-014 (stockage local) pour US-002, US-004, US-006, US-011 ; US-018 (sauvegarde) pour US-020
- Contenu pédagogique en JSON versionné et validé par schéma ; modèle de données défini dans 05_modele_donnees_app.md
- Moteur de règles testé règle par règle (ALR-001 à ALR-020)
- Contenu hors corpus : jamais présenté comme règle FFESSM ; relu et validé par le porteur du projet avant mise à disposition des testeurs (US-021, US-022)
- Export : conserve origine, statut de validation et mention de non-remplacement du tuteur
- Mode d'inscription des testeurs et format d'export préféré `[A DECIDER]`
