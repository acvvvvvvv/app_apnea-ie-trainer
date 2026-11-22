# Découpage fonctionnel — Simulateur de séances d'apnée (préparation IE)

> Statut : PRIORISATION MOSCOW — A VALIDER
> Source : knowledge/pm/brief.md
> Date : 2026-11-22
> Personas cibles : Camille (prioritaire), Anaïs (secondaire)
> JTBD couverts : F1, F2, F6, E1 (+ F3 en Should, S1 en partie via l'export)

## Couverture JTBD

| JTBD | Features associées | Priorité hypothétique |
|------|-------------------|-----------------------|
| **JTBD-F1** : Construire une séance cohérente avec un objectif mesurable | F01, F02, F03 | Critique |
| **JTBD-F2** : Garantir la sécurité de chaque exercice | F04 | Critique |
| **JTBD-F6** : Justifier mes choix devant le jury | F02, F08 | Critique |
| **JTBD-E1** : Me sentir prêt et confiant avant le jour J | F07, F08 | Critique |
| **JTBD-F3** : Maîtriser les accidents pour l'écrit et le terrain | F06 | Critique |
| **JTBD-S1** : Être jugé crédible par mon tuteur et par le jury | F05 | Importante |
| *Transverse* | F09, F10 | — |

## Features proposées

### Bloc 1 : Construction de séance (JTBD-F1)

| # | Feature | Description | JTBD | Persona | Testable |
|---|---------|-------------|------|---------|----------|
| **F01** | Paramétrage de séance | Saisir 5 paramètres : niveau des élèves (AEL, ACEL), moment de la saison (Reprise, Développement, Pré-compétition/Examen), milieu (piscine, fosse), philosophie de l'instructeur (technique, volume, ludique/détente), profil d'encadrant (IE1 par défaut). Valeurs par défaut proposées, aucun champ superflu. | JTBD-F1, F4 | Camille, Anaïs | Oui : le candidat paramètre sa séance en moins de 60 secondes sur mobile |
| **F02** | Catalogue d'exercices explicatif | Liste d'exercices (STA, DYN, DNF, fosse, sauvetage, mental) filtrée par les paramètres. Chaque fiche affiche : justification pédagogique (« pourquoi on fait ça »), points de sécurité critiques, variantes pour simplifier ou complexifier, niveau de risque. Chaque règle porte un statut d'origine (corpus, suggestion, hors corpus) et un statut de validation par le porteur du projet (à valider, validé). | JTBD-F1, F6, F2 | Camille, Anaïs | Oui : le candidat ouvre une fiche et lit la justification, la sécurité et le statut en un tap |
| **F03** | Constructeur de séance structuré | Assembler une séance par phases (accueil et briefing, exercices à sec, échauffement, prérequis, cœur de séance, application, retour au calme, débriefing). Pour chaque phase : durée, contenu, consignes, position de l'encadrant, critères de réussite. Objectif SMART et critère d'évaluation saisis en tête. Enregistrement dans le compte de l'utilisateur. | JTBD-F1, F6 | Camille, Anaïs | Oui : le candidat obtient une séance complète avec objectif, phases et critères |

**Challenge F01-F03** : Ces 3 features répondent au pain point supposé majeur (savoir par où commencer et enchaîner des exercices logiques, hypothèse personas.md). Elles reprennent la structure obligatoire d'une séance FFESSM et le gabarit de préparation écrite du support de stage. Aucune donnée terrain ne confirme encore leur poids relatif.

**Tension à valider** : Pas de séance générée automatiquement. L'app guide la construction et explique ; elle ne propose pas une séance clé en main que le candidat réciterait sans la comprendre. Cela est cohérent avec JTBD-F6 (justifier devant le jury) mais à confirmer auprès des candidats.

---

### Bloc 2 : Sécurité et accidents (JTBD-F2, F3)

| # | Feature | Description | JTBD | Persona | Testable |
|---|---------|-------------|------|---------|----------|
| **F04** | Alertes de sécurité en temps réel | Moteur de règles qui évalue la séance à chaque modification : hypoxie en début de saison, deux exercices hypoxiques dans la même séance, surveillance rapprochée absente, profondeur au-delà des prérogatives (IE1 = 6 m), échauffement ou protocole de sortie manquant, matériel de secours au-delà de 6 m. Trois niveaux : information, avertissement, bloquant. Chaque alerte cite sa source et explique le « pourquoi ». | JTBD-F2, F4 | Camille, Anaïs | Oui : placer un exercice hypoxique en Reprise déclenche l'alerte attendue |
| **F06** | Fiches accidents | Fiches au format imposé par l'examen : nom, mécanisme, causes, facteurs favorisants, symptômes, conduite à tenir, prévention. Contenu complet pour la perte de contrôle moteur (PCM, samba) et la syncope ; autres accidents marqués « à compléter ». Lien avec les tags de sécurité des exercices. | JTBD-F3, F2 | Camille, Anaïs | Oui : le candidat consulte la fiche PCM et retrouve les 7 champs |

**Challenge F04, F06** : La sécurité est évaluée dans 4 blocs sur 5 de la grille pratique et les accidents pèsent 2/3 des coefficients de l'écrit (01_referentiel_exam_ie.md). Les accidents autres que PCM et syncope sont absents des documents sources.

**Risque identifié** : La fiabilité de la doctrine est critique. Une alerte erronée ou un contenu inventé détruirait la confiance, voire exposerait des élèves. Mitigation décidée : chaque règle affiche son origine (corpus, suggestion, hors corpus) et un statut de validation ; le porteur du projet relit et valide le contenu hors documents sources avant sa mise à disposition des testeurs. Seule la dernière version du MFA fait foi.

---

### Bloc 3 : Préparation au jury (JTBD-F6, E1)

| # | Feature | Description | JTBD | Persona | Testable |
|---|---------|-------------|------|---------|----------|
| **F07** | Checklist d'auto-évaluation | Grille calquée sur la notation officielle /20 (présentation au jury 3 pts, présentation aux élèves 2 pts, déroulement forme 5 pts, fond 8 pts, fin de séance 2 pts) et auto-diagnostic sécurité en 12 questions. Affiche un score et des points à corriger, calculés à partir de la séance construite. | JTBD-E1, F6 | Camille | Oui : le candidat obtient un score /20 et une liste de manques sur sa séance |
| **F08** | Mode examen blanc | Tirage d'un sujet réaliste parmi les 16 sujets de pédagogie pratique, chronomètre de 30 minutes, trame de présentation au jury (qui, quoi, où, quand, comment, pourquoi) à remplir, puis checklist F07. Entraînement sans enjeu. | JTBD-E1, E4, F6 | Camille | Oui : le candidat déroule un examen blanc de bout en bout |

**Challenge F07, F08** : L'angoisse de l'épreuve de pédagogie est l'hypothèse centrale du persona prioritaire. F08 est une hypothèse de valeur forte mais non validée : à tester avant d'investir.

---

### Principes de conception transversaux

**Décision validée** : Certains éléments ne sont pas des features isolées mais des principes de conception qui s'appliquent à toute l'app.

#### 1. Sécurité d'abord et transparence sur l'origine des règles

**Ancrage UXR** : JTBD-F2 et JTBD-E2 (hypothèses). La sécurité traverse la séance entière ; chaque règle affiche son origine (corpus, suggestion, hors corpus), sa source et son statut de validation.

**Application** :
- Copie : « Cette série est la plus exposée au risque de syncope. Prévois une surveillance rapprochée jusqu'à 1 minute après la sortie. » (pas de « Danger ! »)
- Une suggestion n'est jamais présentée comme règle FFESSM
- Les informations hors documents sources affichent « À valider » tant que le porteur du projet ne les a pas validées
- Rappel permanent : l'app ne remplace ni le tuteur ni le MFA

#### 2. Ton bienveillant et non-jugeant

**Ancrage UXR** : JTBD-E4 (s'entraîner sans jugement) et peur d'être jugé sur le moindre écart (personas.md, hypothèse).

**Application** :
- Alertes : explicatives, jamais culpabilisantes (« Les exercices hypoxiques sont réservés à la fin de saison : voici une alternative »)
- Messages d'erreur sans mots comme « erreur », « invalide »
- États vides : « Tu n'as pas encore construit de séance. Prêt·e à commencer ? »

#### 3. Design mobile-first

**Ancrage** : décision de l'utilisateur (webapp mobile-first). Usage au bord du bassin et entre deux séances (hypothèse personas.md).

**Application** :
- Bottom nav, gestes swipe, zones tactiles larges
- Phases de séance repliables, lecture à une main
- Phrases courtes, hiérarchie claire, pas de jargon non expliqué
- Optimisé pour une consultation rapide au bord du bassin

---

### Bloc 4 : Comptes, sauvegarde et partage (Transverse, JTBD-S1)

| # | Feature | Description | JTBD | Persona | Testable |
|---|---------|-------------|------|---------|----------|
| **F09** | Comptes et sauvegarde des séances | Création de compte et connexion. Deux rôles au minimum : **porteur** (sauvegarde ses séances, relit et valide le contenu hors documents sources) et **testeur** (utilise l'app et sauvegarde ses propres séances). Les séances sont enregistrées dans le compte et retrouvées sur tout appareil. | Transverse | Camille, Anaïs | Oui : l'utilisateur crée un compte, sauvegarde une séance, se reconnecte sur un autre appareil et la retrouve |
| **F05** | Export et partage des séances | Exporter une séance (fichier lisible type PDF, lien de partage ou fichier de données) pour la montrer à son tuteur ou la partager avec d'autres candidats. L'export reprend objectif, phases, sécurité et alertes en cours. | JTBD-S1, F6 | Camille, Anaïs | Oui : l'utilisateur exporte une séance et la reçoit sous une forme lisible sur un autre appareil |

**Challenge F09** : Décision de l'utilisateur : le porteur doit pouvoir sauvegarder ses séances et des comptes testeurs sont nécessaires. Risque : un compte obligatoire peut freiner un testeur occasionnel ; hypothèse à tester (inscription la plus courte possible, par exemple par lien ou code d'invitation `[A DECIDER]`).

**Challenge F05** : L'export est jugé important par l'utilisateur pour partager ses séances. Format préféré (PDF, lien, fichier) à déterminer. Point de vigilance : une séance exportée circule hors de l'app ; elle doit conserver le statut d'origine et de validation de son contenu et la mention de non-remplacement du tuteur.

---

### Bloc 5 : Infra et transverse (contraintes techniques)

| # | Feature | Description | JTBD | Persona | Testable |
|---|---------|-------------|------|---------|----------|
| **F10** | Fonctionnement hors connexion et synchronisation | Le catalogue, les alertes, les fiches accidents et les séances sont consultables et modifiables sans réseau (bassin ou vestiaire sans connexion). Les modifications sont synchronisées avec le compte au retour de la connexion. | Transverse | Camille, Anaïs | Oui : l'utilisateur modifie une séance sans internet et la retrouve à jour sur son compte ensuite |

**Challenge F10** : Le compte impose une synchronisation ; le hors connexion devient un confort lié au compte. Le catalogue étant statique et embarqué, la consultation hors connexion est peu coûteuse ; la modification hors connexion avec synchronisation l'est davantage. `[A DECIDER]` : lancer d'abord en ligne seulement pour les modifications.

---

## JTBD non couverts en v1

| JTBD | Priorité hypothétique | Raison hors scope |
|------|-----------------------|-------------------|
| **JTBD-F5** : Faire évoluer les objectifs au fil de la saison | Importante | Pris en compte via le paramètre « moment de la saison » de F01 ; planning de saison détaillé reporté en v2. |
| **JTBD-F8** : Intégrer les épreuves physiques à mon entraînement | De niche | Hors périmètre du simulateur de séances. Peut être adressé en v2. |
| **JTBD-F7** : Adapter un exercice au niveau réel du groupe | Importante | Couvert partiellement par les variantes des fiches F02, sans module dédié. |
| **JTBD-S1** : Être jugé crédible par mon tuteur et par le jury | Importante | Couvert partiellement par l'export (F05) ; pas de validation par un tiers dans l'app. |
| **JTBD-S2** : Transmettre mon expérience à d'autres candidats | De niche | Partage possible par export uniquement ; pas de dimension communautaire en v1. |
| **JTBD-S3** : Appartenir à la communauté des encadrants | De niche | Hors scope v1. |

---

## Récapitulatif

**10 features proposées**, réparties en 5 blocs :
- **3 features construction** (JTBD-F1) — cœur de l'app
- **2 features sécurité et accidents** (JTBD-F2, F3) — garde-fous différenciants
- **2 features préparation au jury** (JTBD-F6, E1) — réduction de l'angoisse
- **2 features comptes, sauvegarde et partage** (transverse, JTBD-S1) — décisions de l'utilisateur
- **1 feature hors connexion et synchronisation** — contrainte technique

**Principes de conception transversaux** :
- **Sécurité d'abord et transparence sur l'origine des règles** — s'applique à tout le contenu
- **Ton bienveillant et non-jugeant** (JTBD-E4) — copie, alertes, états vides
- **Design mobile-first** — bottom nav, zones tactiles larges, lecture à une main

**Couverture JTBD** : 4 JTBD critiques couverts (F1, F2, F6, E1) plus F3 en Should et S1 en partie. 5 JTBD hors scope v1 (F5, F8, F7 en partie, S2, S3) avec justifications explicites.

**Alignement personas** : 10/10 features répondent aux besoins de Camille (prioritaire) à des degrés divers. 8/10 répondent aussi à Anaïs (secondaire). Thomas (apnéiste performant) non couvert, conformément au brief.

**Alignement différenciation** :
- Axe 1 (explication du « pourquoi ») : F02, F08
- Axe 2 (garde-fous de sécurité) : F04, F06
- Axe 3 (transparence sur l'origine des règles) : F02, F04, principe transversal
- Axe 4 (checklist calquée sur la grille officielle) : F07, F08
- Axe 5 (ton bienveillant) : principe de conception transversal
- **Nouveau** : Axe 6 (séances sauvegardées et partageables) : F09, F05 — décision de l'utilisateur

---

## Points de vigilance avant validation

### 1. Fiabilité de la doctrine et contenu hors corpus — DECISION VALIDEE, REVUE A FAIRE

**Constat** : Les documents sources ne contiennent ni les critères détaillés des niveaux AEL et ACEL, ni les protocoles de fosse chiffrés, ni les règles « avant ou après fosse », ni les ratios de surveillance en piscine, ni les accidents autres que PCM et syncope.

**Décision utilisateur** : le porteur du projet relit et valide lui-même le contenu hors documents sources avant sa mise à disposition.

**Compromis retenu** : Afficher sur chaque règle et chaque exercice son origine (corpus, suggestion, hors corpus) et son statut de validation (à valider, validé). Le contenu non validé n'est visible que du porteur, ou signalé « À valider » aux testeurs `[A DECIDER]`.

**A valider** : Une seconde relecture par un tuteur ou un MEF est-elle souhaitable avant les tests ? Quelles sources officielles complètent le catalogue ?

### 2. Responsabilité et usage en situation réelle — `[A DECIDER]`

**Tension** : Le produit prépare à un examen mais ses séances peuvent être appliquées à de vrais élèves, et l'export les fait circuler hors de l'app. Une séance jugée « conforme » par l'app ne garantit pas la sécurité sur le terrain.

**Stratégie** : `[A DECIDER]` — mention explicite que l'app est un outil d'entraînement, alertes qui n'ont jamais valeur de validation, rappel de la responsabilité du directeur de bassin, mention reprise dans chaque export.

**Impact sur priorisation** : Si cette question n'est pas tranchée, F04 reste en Must mais la formulation des alertes, la mention légale et le contenu des exports doivent être validés avant la mise en ligne.

### 3. Features manquantes ? — `[A DECIDER]`

**10 features max = principe de PM.** Mais peut-être qu'une feature critique manque ?

**Questions à challenger** :
- Faut-il une feature « Quiz accidents » pour réviser l'écrit, au-delà des fiches F06 ?
- Faut-il un suivi de l'avancement du carnet (10 séances pratiques, 2 séances théoriques) ?
- Faut-il un accès en lecture seule à une séance partagée, sans compte, pour un tuteur ?

**Décision** : `[A DECIDER]` — Pas de réponse reçue. On garde le scope actuel (10 features) sauf si l'utilisateur signale une feature critique manquante.

### 4. Scope technique, comptes et contrainte hors connexion — DECISION VALIDEE

**Décision utilisateur** : OUI à un compte par utilisateur (porteur et testeurs au minimum) pour sauvegarder les séances ; webapp mobile-first.

**Contrainte technique identifiée** : Un backend est nécessaire (authentification, stockage des séances, rôles). L'app reste utilisable hors connexion pour la consultation.

**Impact sur le scope fonctionnel** :
- **F02 (Catalogue)** : contenu statique et statuts de validation, disponible hors connexion
- **F03 (Constructeur)** : séances enregistrées dans le compte, copie locale
- **F04 (Alertes)** : moteur de règles exécuté côté client
- **F06 (Fiches accidents)** : contenu embarqué
- **F09 (Comptes)** : prérequis de F03, F05 et F10

**Implications pour le dev** : Backend et authentification dès la v1, gestion des rôles (porteur, testeur), synchronisation et gestion des conflits. `[A DECIDER]` : mode d'inscription des testeurs (invitation, code, ouverture libre).

**Proposition** : Ajouter une note transversale « Contrainte comptes et synchronisation » dans le bloc 5 (Infra et transverse).

---

## Validation post-intégration des réponses

**Décisions validées par l'utilisateur** :
- Plateforme : webapp mobile-first
- Comptes : OUI, un compte par utilisateur pour sauvegarder ses séances, avec au minimum un compte porteur et des comptes testeurs (F09)
- Export des séances : OUI, important pour les partager (F05)
- Contenu hors documents sources : relu et validé par le porteur du projet avant mise à disposition
- Produit : simulateur pédagogique de séances d'apnée pour futurs IE FFESSM (piscine et fosse), 5 paramètres d'entrée, alertes de sécurité par tags d'exercices

**Points `[A DECIDER]` restants (pour le dev et le PM)** :
- Mode d'inscription des testeurs (invitation, code, ouverture libre)
- Format d'export préféré (PDF, lien, fichier)
- Formulation légale et responsabilité d'usage
- Seconde relecture du contenu par un tuteur ou un MEF

**Statut** : Décisions structurantes validées. Prêt pour priorisation MoSCoW.

---

## Priorisation MoSCoW

> Filtre appliqué : "Si on enlève ça, le produit résout-il quand même le problème central du brief ?"
> Problème central : **Permettre à un candidat IE (Camille) de construire une séance cohérente, de vérifier sa sécurité selon la doctrine FFESSM, de savoir la justifier devant le jury et de la retrouver dans son compte.**

| # | Feature | Priorité | Justification |
|---|---------|----------|---------------|
| **F01** | Paramétrage de séance | **Must** | Sans les paramètres, ni le catalogue ni les alertes ne peuvent s'adapter. Point d'entrée de l'app. |
| **F02** | Catalogue d'exercices explicatif | **Must** | Sans ça, le « pourquoi » n'est pas expliqué : c'est le cœur de la proposition de valeur (JTBD-F6, F1). Porte aussi les statuts de validation du contenu. |
| **F03** | Constructeur de séance structuré | **Must** | Sans ça, il n'y a pas de séance à vérifier ni à présenter. Cœur du JTBD-F1. |
| **F04** | Alertes de sécurité en temps réel | **Must** | La sécurité est évaluée dans 4 blocs sur 5 de la grille ; sans garde-fous, l'app ne se distingue pas d'un catalogue. Cœur du JTBD-F2. |
| **F09** | Comptes et sauvegarde des séances | **Must** | Décision de l'utilisateur : le porteur doit sauvegarder ses séances et des comptes testeurs sont requis. Sans compte, les testeurs ne peuvent pas tester dans la durée. |
| **F05** | Export et partage des séances | **Should** | Jugé important par l'utilisateur pour partager ses séances, mais le produit résout le problème central sans export. Dépend de F03 et F09. |
| **F06** | Fiches accidents | **Should** | Pèse 2/3 de l'écrit (JTBD-F3) mais contenu complet seulement pour PCM et syncope ; le simulateur fonctionne sans. |
| **F07** | Checklist d'auto-évaluation | **Should** | Forte valeur pour JTBD-E1, mais le produit résout le problème central sans score. |
| **F08** | Mode examen blanc | **Could** | Hypothèse de valeur forte non validée ; à tester avant d'investir. |
| **F10** | Fonctionnement hors connexion et synchronisation | **Should** | Utile au bord du bassin, mais le lancement en ligne est possible ; la consultation hors connexion est peu coûteuse, la modification hors connexion plus coûteuse. |

---

## Résumé de priorisation

| Priorité | Nombre | % du total | Features |
|----------|--------|-----------|----------|
| **Must** | 5 | 50% | F01, F02, F03, F04, F09 |
| **Should** | 4 | 40% | F05, F06, F07, F10 |
| **Could** | 1 | 10% | F08 |
| **Won't v1** | 0 | 0% | — |

**Total** : 10 features

---

## Challenge de la priorisation

### Must : 5 features (50%) — AU-DESSUS DE LA RÈGLE, ASSUMÉ

**Règle** : Must < 40%. On est à 50%, au-dessus de la règle.

**Cause** : F09 (comptes et sauvegarde) a été ajoutée à la demande explicite de l'utilisateur. Sans elle, on serait à 4 sur 10 (40%), dans les clous.

**Test de cohérence** : Si on enlève un seul Must, le produit résout-il encore le problème central ?

- **Sans F01 (Paramétrage)** : Non. Catalogue et alertes ne peuvent plus s'adapter au niveau, à la saison ni au milieu.
- **Sans F02 (Catalogue explicatif)** : Non. Le candidat n'a plus d'exercices ni de « pourquoi » pour justifier ses choix devant le jury.
- **Sans F03 (Constructeur)** : Non. Pas de séance à construire, à vérifier ni à présenter.
- **Sans F04 (Alertes)** : Non. Le produit devient un catalogue sans garde-fous, sans différenciation sur la sécurité.
- **Sans F09 (Comptes)** : Non au regard de la décision de l'utilisateur : sans compte, ni le porteur ni les testeurs ne peuvent sauvegarder leurs séances.

**Verdict** : Les 5 Must sont justifiés, mais le dépassement du seuil de 40% est une conséquence directe d'une décision de l'utilisateur. Pour revenir à 40%, il faudrait fusionner F01 dans F03 (paramètres comme première étape du constructeur) ; à challenger.

---

## Points de tension à valider

---

### 1. F09 (Comptes) en Must — impact sur la vélocité ?

**Tension** : Un compte impose un backend, de l'authentification et des rôles dès la v1, ce qui alourdit le lancement.

**Justification** :
1. Décision explicite de l'utilisateur : porteur et testeurs ont chacun un compte.
2. Les rôles (porteur, testeur) servent aussi à la revue du contenu hors documents sources.
3. F03, F05 et F10 en dépendent.

**Décision** : Must maintenu. `[A DECIDER]` : mode d'inscription des testeurs le plus léger possible (invitation ou code).

---

### 2. F05 (Export) en Should — acceptable ?

**Tension** : L'utilisateur juge l'export important. Pourquoi pas Must ?

**Justification** :
1. Le problème central du brief est la construction, la sécurité et la justification de la séance ; l'export les prolonge sans les conditionner.
2. L'export dépend de F03 et F09 : il peut être livré dès qu'ils sont stables.
3. Un export simple (fichier lisible) peut être livré avant le lien de partage.

**Proposition** : Garder F05 en Should, en tête des Should prioritaires. À monter en Must si les testeurs ont besoin de partager leurs séances dès les premiers tests.

---

### 3. F06 (Fiches accidents) en Should — acceptable ?

**Tension** : Les accidents pèsent 2/3 des coefficients de l'écrit. Pourquoi pas Must ?

**Justification** :
1. Le problème central du brief est la construction et la justification d'une séance, pas la révision de l'écrit.
2. Le contenu disponible est incomplet : seules PCM et syncope sont détaillées dans les documents.
3. Le produit fonctionne sans F06 : les alertes de F04 couvrent le lien accident-exercice.

**Décision** : Should est cohérent. Si le contenu manquant est fourni et validé, F06 peut monter en Must.

---

### 4. F07 (Checklist) en Should — pourquoi pas Must ?

**Tension** : JTBD-E1 (confiance avant le jour J) est un job critique. Pourquoi pas Must ?

**Justification** :
1. Le problème central est de construire et vérifier la séance ; la checklist est une couche d'évaluation sur la séance construite.
2. F04 couvre déjà la sécurité, qui pèse 4 blocs sur 5.
3. La checklist peut être livrée dès que F03 est stable.

**Proposition** : Garder F07 en Should prioritaire.

---

## Scope v1 recommandé (Must + Should prioritaires)

**Must (5 features)** :
- F01 : Paramétrage de séance
- F02 : Catalogue d'exercices explicatif
- F03 : Constructeur de séance structuré
- F04 : Alertes de sécurité en temps réel
- F09 : Comptes et sauvegarde des séances

**Should prioritaires (à livrer si vélocité permet)** :
- F05 : Export et partage des séances
- F07 : Checklist d'auto-évaluation
- F06 : Fiches accidents (PCM et syncope complètes)

**Should secondaires** :
- F10 : Fonctionnement hors connexion et synchronisation (reporter en v1.1 si complexité trop forte)

**Could (nice-to-have v1, ou v2)** :
- F08 : Mode examen blanc

---

## Couverture JTBD par priorité

| JTBD | Must | Should | Could | Couverture |
|------|------|--------|-------|------------|
| **JTBD-F1** : Construire une séance cohérente | F01, F02, F03 | — | — | ✅ Core couvert |
| **JTBD-F2** : Garantir la sécurité de chaque exercice | F04 | F06 | — | ✅ Core couvert, renforcé par les fiches accidents |
| **JTBD-F6** : Justifier mes choix devant le jury | F02 | F05, F07 | F08 | ✅ Core couvert, entraînement en Could |
| **JTBD-E1** : Me sentir prêt et confiant avant le jour J | — | F07 | F08 | ⚠️ Couverture en Should et Could uniquement |
| **JTBD-F3** : Maîtriser les accidents | — | F06 | — | ⚠️ Couverture partielle (contenu limité à PCM et syncope) |
| **JTBD-S1** : Être jugé crédible par mon tuteur et par le jury | — | F05 | — | ⚠️ Couverture partielle (export, pas de validation par un tiers) |

**Verdict** : Les 3 JTBD fondateurs (F1, F2, F6) sont couverts par des Must. JTBD-E1 repose sur un Should (F07), ce qui est cohérent avec la hiérarchie de priorité (F1 > F2 > F6 > E1) mais à surveiller : si l'angoisse de l'épreuve est confirmée comme moteur d'usage, F07 doit monter en Must.

---

## Validation avant passage aux User Stories

**Points à valider avec l'utilisateur** :

1. **Must = 5 features (50%)** : Es-tu d'accord de dépasser le seuil de 40% à cause de F09, ou veux-tu fusionner F01 dans F03 pour revenir à 4 Must ?
2. **F05 (Export) en Should** : Es-tu d'accord de livrer l'export après le noyau, ou veux-tu le forcer en Must pour les premiers tests ?
3. **F06 (Fiches accidents) en Should** : Es-tu d'accord d'avancer avec PCM et syncope seulement ?
4. **F10 (Hors connexion) en Should** : Es-tu d'accord de lancer d'abord avec la consultation hors connexion, et la modification hors connexion avec synchronisation en v1.1 ?
5. **Scope v1 recommandé** : Must (5) + Should prioritaires (F05, F06, F07) = 8 features. C'est ambitieux. Es-tu d'accord avec ce scope ?

**Une fois ces 5 points validés, on passe aux User Stories (Must + Should uniquement).**
