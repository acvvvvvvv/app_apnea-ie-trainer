# Brief produit — Simulateur de séances d'apnée pour futurs Initiateurs-Entraîneurs (IE) FFESSM

> Statut : A VALIDER (hypothèses UXR non confirmées par entretiens)
> Date : 2026-11-22
> Source UXR : knowledge/uxr/outputs/ + knowledge/uxr/base-connaissances-IE/

## Le probleme

Le brief de départ identifie trois problèmes centraux : construire une séance d'apnée (piscine et fosse) cohérente avec le niveau du public et le moment de la saison, vérifier qu'elle respecte la doctrine de sécurité FFESSM, et savoir la justifier devant le jury de l'examen IE. Aucun entretien n'a encore été mené : ces trois problèmes sont déduits de la base de connaissances IE/FFESSM (grilles de notation, erreurs fréquentes, accidents) et restent à confirmer sur le terrain.

- **Cohérence de la séance** : le bloc « fond » de la pédagogie pratique pèse 8 points sur 20 (réalisme des objectifs, chronologie logique, récupérations adaptées). Erreur fréquente listée par le référentiel : mal cibler ses objectifs, trop dur ou pas assez (01_referentiel_exam_ie.md).
- **Sécurité d'une série** : la sécurité est évaluée dans 4 blocs sur 5 de la grille pratique ; les exercices hypoxiques sont les plus accidentogènes ; la syncope peut survenir jusqu'à 1 minute après la sortie (01_referentiel_exam_ie.md, 03_catalogue_exercices_adaptables.md).
- **Justification devant le jury** : le candidat doit présenter objectif, critère d'évaluation, prérequis, place dans la saison et dispositif de sécurité, puis dire « pourquoi » chaque exercice (01_referentiel_exam_ie.md).

Ces trois problèmes mappent directement sur les JTBD critiques F1, F2 et F6 (jobs-to-be-done.md), complétés par le job émotionnel E1 (arriver confiant au jour J) et, en Should, par F3 (maîtriser les accidents).

## Pour qui

### Personas prioritaires pour v1

**Persona prioritaire : Camille (candidat novice)**

Justification :
- C'est le profil le plus exposé à l'angoisse de l'épreuve de pédagogie : ne sait pas par où commencer, craint d'oublier un point de sécurité (personas.md, hypothèse)
- Les JTBD critiques (F1, F2, F6, E1, E2) sont tous critiques pour ce segment
- Besoin d'un entraînement sans enjeu (JTBD-E4) avant de s'exposer au jury
- Fort potentiel de différenciation sur le « pourquoi » expliqué et les garde-fous de sécurité

**Persona secondaire : Anaïs (encadrant bénévole)**

Justification :
- Manque de temps, information dispersée entre MFA, supports de stage et conseils du tuteur (personas.md, hypothèse)
- Besoin de repères rapides sur prérogatives, réglementation et saison (JTBD-F4, F5)
- Valorise la rigueur : checklist et sauvegarde des séances pour le carnet

**NON COUVERT EN V1 : Thomas (apnéiste performant)**

Raison : besoins centrés sur sa propre performance et les épreuves physiques (JTBD-F8, de niche), hors périmètre d'un simulateur de séances. Son besoin d'adapter un exercice à un groupe plus faible est couvert indirectement par les variantes « simplifier / complexifier » des fiches d'exercices.

**NON COUVERT EN V1 : Tuteurs et formateurs (IE2, MEF1, MEF2)** — besoins d'évaluation et de suivi de plusieurs candidats (personas.md).

## JTBD couverts

| JTBD | Couvert par le brief | Commentaire |
|------|---------------------|-------------|
| **JTBD-F1** : Construire une séance cohérente avec un objectif mesurable | Oui | Brief mentionne « construire une séance » |
| **JTBD-F2** : Garantir la sécurité de chaque exercice | Oui | Brief mentionne « vérifier la sécurité d'une série » |
| **JTBD-F6** : Justifier mes choix devant le jury | Oui | Brief mentionne « m'expliquer pourquoi » |
| **JTBD-E1** : Me sentir prêt et confiant avant le jour J | Oui | Via checklist calquée sur la grille officielle |
| **JTBD-F3** : Maîtriser les accidents pour l'écrit et le terrain | Partiel | Fiches PCM et syncope uniquement — autres accidents hors corpus |
| **JTBD-F4** : Rester dans mes prérogatives et la réglementation | Partiel | Couvert par les alertes (profondeur IE1 = 6 m), pas de module réglementaire complet |
| **JTBD-F5** : Faire évoluer les objectifs au fil de la saison | **NON** | Pris en compte via le paramètre « moment de la saison » ; planning détaillé hors scope v1 |
| **JTBD-S1** : Être jugé crédible par mon tuteur et par le jury | Partiel | Export des séances pour les partager avec le tuteur ; pas de validation par un tiers dans l'app |
| **JTBD-F7** : Adapter un exercice au niveau réel du groupe | Partiel | Variantes dans les fiches d'exercices |
| **JTBD-F8** : Intégrer les épreuves physiques à mon entraînement | **NON** | De niche, hors scope v1 |
| **JTBD-S2/S3** : Transmettre à d'autres candidats, appartenir à la communauté | **NON** | Hors scope v1 (produit centré sur l'entraînement individuel) |

Le brief couvre volontairement 4 JTBD critiques sur 6 pour v1 (F1, F2, F6, E1), plus F3 en Should. JTBD-F3 (accidents), bien qu'il pèse 2/3 des coefficients de l'écrit, reste partiel faute de contenu complet dans les documents sources.

## Cible plateforme

**Webapp mobile-first** (confirmé par l'utilisateur)

Justification :
- Décision de l'utilisateur : le produit est conçu d'abord pour le téléphone
- L'usage au bord du bassin (consulter une séance, vérifier une alerte) et la préparation entre deux séances plaident pour une interface lisible sur mobile (hypothèse personas.md)
- Dépôt existant en Vite/TypeScript (dossier app/) : une webapp reste la cible la plus directe

## Ce que le produit fait

Une webapp, simulateur pédagogique, qui aide les futurs IE à :

1. **Construire une séance structurée** (briefing, échauffement, corps de séance, retour au calme, débriefing) à partir de 5 paramètres : niveau des élèves (AEL, ACEL), moment de la saison, milieu (piscine, fosse), philosophie de l'instructeur et profil d'encadrant (IE1, IE2).
2. **Vérifier la sécurité** de chaque exercice et de l'enchaînement selon la doctrine FFESSM : alertes calculées par un moteur de règles (hypoxie en début de saison, profondeur au-delà des prérogatives, absence d'échauffement ou de protocole de sortie, etc.).
3. **Expliquer le « pourquoi »** de chaque exercice (justification pédagogique, points de sécurité, variantes) pour préparer la présentation au jury.
4. **Se tester** avec une checklist d'auto-évaluation calquée sur la grille officielle /20, et réviser les fiches accidents.
5. **Retrouver et partager ses séances** : chaque utilisateur a un compte qui sauvegarde ses séances, et peut les exporter pour les montrer à son tuteur ou à d'autres candidats. Deux types de comptes au minimum : le compte du porteur du projet (sauvegarde de ses séances, relecture et validation du contenu) et des comptes testeurs.

Le produit **explique** plutôt que de remplacer le jugement de l'encadrant. Il **accompagne le développement de compétence** plutôt que de générer une séance clé en main sans compréhension.

## Ce que le produit ne fait PAS (hors scope v1)

- **Pas de séance générée automatiquement sans explication** (principe pédagogique : le « pourquoi » prime)
- **Pas de remplacement du tuteur ni du MFA** : seule la dernière version du MFA fait foi (01_referentiel_exam_ie.md)
- **Pas de contenu présenté comme doctrine FFESSM quand il est absent des documents** : chaque règle porte un statut (corpus, suggestion, hors corpus)
- **Pas de contenu hors documents sources mis en ligne sans relecture** : le porteur du projet relit et valide ce contenu (statut de validation visible sur chaque entrée)
- **Pas de protocoles de fosse chiffrés tant qu'ils ne sont pas fournis et validés** (hors corpus)
- **Pas de planning de saison détaillé** (le paramètre « moment de la saison » suffit en v1)
- **Pas de suivi des épreuves physiques** [A DECIDER — voir JTBD-F8]
- **Pas de fonctionnalité communautaire (commentaires, fil, diagnostic collaboratif) ni de suivi multi-candidats pour tuteurs** : le partage se fait uniquement par export [A DECIDER — voir JTBD-S1]
- **Pas de milieu naturel** (lac, mer, carrière) en v1
- **Pas d'app mobile native** (webapp responsive)

## Hypotheses non verifiees

| Hypothèse | Source | Validée par UXR ? | Commentaire |
|-----------|--------|-------------------|-------------|
| Les candidats veulent un simulateur plutôt qu'un simple catalogue d'exercices | Brief utilisateur | **NON** | À tester en entretien (axes 10 et 13 de la grille) |
| La peur de rater l'épreuve de pédagogie est le moteur d'usage principal | Déduction personas.md | **NON** | Persona Camille, hypothèse à confirmer |
| Les candidats veulent des alertes de sécurité bloquantes | Brief utilisateur | **NON** | Risque de rejet si perçues comme infantilisantes |
| Les candidats veulent comprendre le « pourquoi » de chaque exercice | Brief utilisateur | **NON** | JTBD-F6 : hypothèse déduite de la grille jury |
| Les 4 JTBD choisis suffisent pour une v1 viable | Brief utilisateur | **NON** | F3 (accidents) et F5 (saison) peuvent s'avérer critiques |
| Le contenu du corpus est suffisant pour alimenter un catalogue crédible | Base de connaissances | **PARTIEL** | Critères AEL/ACEL, protocoles fosse et accidents hors PCM/syncope absents |
| Les candidats utilisent aujourd'hui carnet, tableur et supports PDF | Déduction personas.md | **NON** | À vérifier (axes 4 et 10) |
| Le produit doit être pensé mobile-first | Décision utilisateur | **NON** | Décision prise ; à vérifier sur l'usage réel (bord de bassin ou domicile) |
| Un compte est nécessaire pour sauvegarder ses séances | Décision utilisateur | **NON** | Décision prise ; à tester : le compte peut freiner un testeur occasionnel |
| L'export des séances est important pour les partager | Décision utilisateur | **NON** | Décision prise ; format préféré (PDF, lien, fichier) à déterminer en entretien |
| Le contenu hors documents sources est correct après relecture par le porteur | Décision utilisateur | **PARTIEL** | Le porteur relit et valide ; une relecture par un tuteur ou un encadrant reste souhaitable |

## Différenciation vs apps existantes

Aucune analyse concurrentielle n'a été menée. Les alternatives hypothétiques sont les supports de stage PDF, le MFA, le carnet pédagogique papier et les tableurs.

Axes de différenciation à valider (vs carnet, tableur, supports PDF, MFA) :

1. **Explication du « pourquoi »** de chaque exercice (« ce que veut entendre l'examinateur »)
2. **Garde-fous de sécurité issus de la doctrine** : alertes liées aux exercices, aux prérogatives et à la saison
3. **Transparence sur l'origine des règles** : corpus, suggestion ou hors corpus
4. **Checklist calquée sur la grille officielle /20** pour s'auto-évaluer avant le jour J
5. **Ton bienveillant et non-jugeant** : entraînement sans enjeu (JTBD-E4)

## Criteres de reussite

Les seuils ci-dessous sont des cibles de conception à valider, pas des mesures observées.

**Critères fonctionnels :**
- Le candidat construit une séance complète (5 phases) en moins de 15 minutes
- Chaque exercice placé affiche sa justification et ses points de sécurité en un tap
- Une séance hors prérogatives (profondeur > 6 m pour un IE1) est signalée avant l'enregistrement
- La checklist donne un score /20 et un diagnostic sécurité en moins de 2 minutes

**Critères de rétention :**
- Le candidat revient avant l'examen (24-25 avril 2027) pour affiner ses séances
- Le candidat enregistre au moins 3 séances dans son compte
- Le candidat exporte au moins une séance pour la partager

**Critères émotionnels :**
- Le candidat se sent plus prêt qu'avant d'utiliser l'app (JTBD-E1)
- Le candidat ne se sent pas jugé quand il se trompe (JTBD-E4)

## Prochaines etapes

1. **Relire et valider le contenu hors documents sources** (porteur du projet) avant toute mise à disposition des testeurs
2. **Mener 5 à 8 entretiens** auprès de candidats IE pour confirmer ou infirmer les hypothèses (grille-analyse.md)
3. **Lancer le feature-breakdown** — découper en 10 features max basées sur les JTBD F1, F2, F6, E1 (et F3 en Should)
