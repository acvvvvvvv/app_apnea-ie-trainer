# Jobs To Be Done — Préparation à l'examen IE et construction de séances d'apnée

Date : 2026-11-22
Corpus : aucun entretien réalisé — jobs déduits de la base de connaissances IE/FFESSM (référentiel d'examen, publics, catalogue, architecture de séance)
Méthode : repérage des tâches et exigences de l'épreuve dans le référentiel, reformulation en job statements (situation → motivation → résultat), traçage aux fichiers sources. Aucune citation ni statistique d'usage : les priorités sont des hypothèses à valider en entretien.

## Jobs fonctionnels

### JTBD-F1 : Construire une séance cohérente avec un objectif mesurable — Priorité hypothétique : critique

> Quand je dois préparer une séance pour un public donné, je veux partir d'un objectif SMART lié au niveau des élèves et enchaîner des exercices logiques, afin de présenter une séance cohérente que le jury peut évaluer.

**Ancrage dans la base de connaissances :**
- Le bloc « fond » de la pédagogie pratique pèse 8 points sur 20 : réalisme des objectifs, chronologie logique, pertinence des exercices — 01_referentiel_exam_ie.md
- Structure obligatoire briefing, échauffement, corps de séance, retour au calme, débriefing — 04_architecture_seance_ffessm.md
- Erreur fréquente listée : mal cibler ses objectifs (trop dur ou pas assez) — 01_referentiel_exam_ie.md

**Personas liés :** Camille (candidat novice), Thomas (apnéiste performant), Anaïs (encadrant bénévole)

---

### JTBD-F2 : Garantir la sécurité de chaque exercice — Priorité hypothétique : critique

> Quand je place un exercice dans ma séance, je veux savoir quels risques il porte (hypoxie, syncope, perte de contrôle moteur) et quelle surveillance prévoir, afin de ne mettre aucun élève en danger.

**Ancrage dans la base de connaissances :**
- La sécurité est évaluée dans 4 blocs sur 5 de la grille pratique — 01_referentiel_exam_ie.md
- Les exercices hypoxiques sont les plus accidentogènes ; surveillance rapprochée jusqu'à 1 minute après la sortie — 03_catalogue_exercices_adaptables.md
- Tags d'alerte associés aux exercices — 05_modele_donnees_app.md

**Personas liés :** Camille (candidat novice), Thomas (apnéiste performant), Anaïs (encadrant bénévole)

---

### JTBD-F3 : Maîtriser les accidents pour l'écrit et pour le terrain — Priorité hypothétique : critique

> Quand je révise la partie sécurité de l'examen, je veux disposer pour chaque accident du mécanisme, des causes, des symptômes, de la conduite à tenir et de la prévention, afin d'être capable de les présenter à l'écrit et de réagir en situation réelle.

**Ancrage dans la base de connaissances :**
- Le groupe sécurité et prévention des accidents pèse un coefficient 2 sur 3 à l'écrit — 01_referentiel_exam_ie.md
- Format imposé nom, mécanisme, causes, facteurs favorisants, symptômes, conduite à tenir, prévention — 01_referentiel_exam_ie.md
- Seuls la perte de contrôle moteur et la syncope sont détaillées dans les documents ; les autres accidents sont à compléter — 05_modele_donnees_app.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

### JTBD-F4 : Rester dans mes prérogatives et la réglementation — Priorité hypothétique : importante

> Quand je prévois un exercice en profondeur ou un effectif, je veux connaître les limites de mon brevet (6 m pour un IE1) et les obligations réglementaires associées, afin de ne pas sortir du cadre FFESSM.

**Ancrage dans la base de connaissances :**
- Prérogatives d'encadrement par brevet et par profondeur ; matériel de secours obligatoire au-delà de 6 m — 01_referentiel_exam_ie.md
- Alerte bloquante si la profondeur dépasse la prérogative — 05_modele_donnees_app.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

### JTBD-F5 : Faire évoluer les objectifs au fil de la saison — Priorité hypothétique : importante

> Quand je planifie mes séances entre novembre et l'examen, je veux savoir quelle dominante travailler à chaque période (foncier, technique, hypercapnie, hypoxie), afin de proposer des séances adaptées au moment de la saison.

**Ancrage dans la base de connaissances :**
- Trois phases : préparation physique générale, spécifique, ciblée et affûtage — 02_publics_et_saisonnalite.md
- La place de la séance dans la saison fait partie de la présentation au jury (« Quand ? ») — 01_referentiel_exam_ie.md

**Personas liés :** Thomas (apnéiste performant), Anaïs (encadrant bénévole)

---

### JTBD-F6 : Justifier mes choix devant le jury — Priorité hypothétique : critique

> Quand j'explique ma séance au jury, je veux pouvoir dire pourquoi je propose chaque exercice et ce qu'il développe, afin de montrer que mes choix sont réfléchis et pas copiés.

**Ancrage dans la base de connaissances :**
- Présentation au jury : objectif, critère d'évaluation, prérequis, place dans le cursus, sécurité — 01_referentiel_exam_ie.md
- Chaque exercice du catalogue porte une justification pédagogique — 03_catalogue_exercices_adaptables.md

**Personas liés :** Camille (candidat novice), Thomas (apnéiste performant)

---

### JTBD-F7 : Adapter un exercice au niveau réel du groupe — Priorité hypothétique : importante

> Quand un élève est en difficulté ou au contraire trop à l'aise, je veux simplifier ou complexifier l'exercice sans perdre l'objectif ni la sécurité, afin de garder tout le groupe en progression.

**Ancrage dans la base de connaissances :**
- Variables d'adaptation pour AEL (simplifier) et ACEL (complexifier) — 03_catalogue_exercices_adaptables.md
- Remédiation : décomposer en tâches élémentaires, changer de méthode — 04_architecture_seance_ffessm.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

### JTBD-F8 : Intégrer les épreuves physiques dans mon propre entraînement — Priorité hypothétique : de niche

> Quand je prépare les épreuves physiques de l'IE (400 m, 3×50 m, statique-dynamique, sauvetage), je veux les intégrer à mon entraînement sans me mettre en danger, afin d'arriver au jour J avec les épreuves validées.

**Ancrage dans la base de connaissances :**
- Standards et intégration des tests physiques — 01_referentiel_exam_ie.md
- Le 400 m peut être validé en amont par le tuteur sur le carnet — 01_referentiel_exam_ie.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

## Jobs émotionnels

### JTBD-E1 : Me sentir prêt et confiant avant le jour J — Priorité hypothétique : critique

> Quand l'examen approche, je veux vérifier objectivement si ma séance passerait, afin de réduire mon stress et d'arriver serein devant le jury.

**Ancrage dans la base de connaissances :**
- Épreuve de 30 minutes avec 2-3 jurés qui jouent des apnéistes ; toute note inférieure à 5/20 invalide le groupe — 01_referentiel_exam_ie.md
- Checklist d'auto-évaluation calquée sur la grille officielle — 04_architecture_seance_ffessm.md

**Personas liés :** Camille (candidat novice), Thomas (apnéiste performant)

---

### JTBD-E2 : Ne pas craindre de mettre un élève en danger — Priorité hypothétique : critique

> Quand j'encadre des apnées, je veux ressentir que ma séance est sous contrôle, afin de pouvoir animer sans peur permanente de l'accident.

**Ancrage dans la base de connaissances :**
- Devoirs de l'encadrant : information, surveillance, compétence, sécurité ; responsabilité pénale en cas de mise en danger — 01_referentiel_exam_ie.md
- Syncope possible jusqu'à 1 minute après la remontée — 01_referentiel_exam_ie.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

### JTBD-E3 : Ressentir la fierté de voir mes élèves progresser — Priorité hypothétique : importante

> Quand un élève réussit un exercice que je lui ai fait préparer, je veux ressentir la satisfaction d'avoir bien enseigné, afin de valider mon choix de devenir encadrant.

**Ancrage dans la base de connaissances :**
- Pédagogie par la réussite et débriefing positif valorisés par la grille — 01_referentiel_exam_ie.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole), Thomas (apnéiste performant)

---

### JTBD-E4 : Pouvoir m'entraîner sans jugement ni enjeu — Priorité hypothétique : importante

> Quand je m'essaie à construire des séances, je veux pouvoir me tromper et comprendre pourquoi, afin de progresser sans la pression d'un vrai groupe ni du jury.

**Ancrage dans la base de connaissances :**
- Conception de l'application comme simulateur pédagogique qui explique le pourquoi — 05_modele_donnees_app.md
- Évaluation formative : corriger et chercher des remèdes en cours de formation — 04_architecture_seance_ffessm.md

**Personas liés :** Camille (candidat novice), Thomas (apnéiste performant)

---

## Jobs sociaux

### JTBD-S1 : Être jugé crédible par mon tuteur et par le jury — Priorité hypothétique : importante

> Quand je présente une séance à mon tuteur ou au jury, je veux être perçu comme un encadrant fiable et compétent, afin d'obtenir sa confiance et mon brevet.

**Ancrage dans la base de connaissances :**
- Jury composé de MEF2, MEF1 et IE2 ; carnet validé sous la supervision du tuteur — 01_referentiel_exam_ie.md

**Personas liés :** Camille (candidat novice), Anaïs (encadrant bénévole)

---

### JTBD-S2 : Transmettre mon expérience à d'autres candidats — Priorité hypothétique : de niche

> Quand j'ai déjà vécu la préparation, je veux partager mes séances et mes retours avec les autres candidats, afin de les aider et de consolider mes acquis.

**Ancrage dans la base de connaissances :**
- Séances de pédagogie avec le tuteur et la commission régionale — 01_referentiel_exam_ie.md

**Personas liés :** Anaïs (encadrant bénévole), Thomas (apnéiste performant)

---

### JTBD-S3 : Appartenir à la communauté des encadrants du club et de la commission — Priorité hypothétique : de niche

> Quand je prépare l'IE, je veux me sentir membre du collectif d'encadrants de mon club, afin d'être intégré au planning d'encadrement et reconnu par mes pairs.

**Ancrage dans la base de connaissances :**
- Planning d'encadrement du club et rôle de l'IE dans l'organisation des séances — 01_referentiel_exam_ie.md

**Personas liés :** Anaïs (encadrant bénévole)

---

## Synthèse : priorisation des jobs

### Jobs critiques (hypothèse : poids élevé dans la grille d'examen)
1. **JTBD-F1** : Construire une séance cohérente avec un objectif mesurable
2. **JTBD-F2** : Garantir la sécurité de chaque exercice
3. **JTBD-F3** : Maîtriser les accidents pour l'écrit et pour le terrain
4. **JTBD-F6** : Justifier mes choix devant le jury
5. **JTBD-E1** : Me sentir prêt et confiant avant le jour J
6. **JTBD-E2** : Ne pas craindre de mettre un élève en danger

### Jobs importants (hypothèse : utiles à l'examen mais non éliminatoires)
- **JTBD-F4** : Rester dans mes prérogatives et la réglementation
- **JTBD-F5** : Faire évoluer les objectifs au fil de la saison
- **JTBD-F7** : Adapter un exercice au niveau réel du groupe
- **JTBD-E3** : Ressentir la fierté de voir mes élèves progresser
- **JTBD-E4** : Pouvoir m'entraîner sans jugement ni enjeu
- **JTBD-S1** : Être jugé crédible par mon tuteur et par le jury

### Jobs de niche (hypothèse : périphériques au cœur du produit)
- **JTBD-F8** : Intégrer les épreuves physiques dans mon propre entraînement
- **JTBD-S2** : Transmettre mon expérience à d'autres candidats
- **JTBD-S3** : Appartenir à la communauté des encadrants

---

## Conclusion

Les **jobs fonctionnels critiques** (F1, F2, F3, F6) forment le socle de valeur attendu par tous les segments. Les **jobs émotionnels** (E1, E2) sont essentiels pour réduire le stress de l'épreuve et créer de l'engagement. Les **jobs sociaux** (S1) sont secondaires pour un premier produit centré sur l'entraînement individuel.

Un outil qui échoue sur les jobs critiques (cohérence de séance, sécurité, accidents, justification) échouera quels que soient ses autres atouts. Un outil qui réussit sur ces jobs ET rassure avant l'examen créera de la fidélité. Toutes ces priorités restent des hypothèses : elles doivent être confrontées à des entretiens avant de figer la roadmap.
