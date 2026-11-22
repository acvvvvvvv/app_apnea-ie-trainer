# 05 — Modèle de données de l'application

> Ce fichier traduit la base de connaissances (fichiers 01-04) en **schémas exploitables** par l'app : paramètres d'entrée, enums, tags d'alerte, moteur de règles, formats d'entités.
> Tous les identifiants (`id`) sont **stables** et réutilisés dans le catalogue (fichier 03).
> **Fiabilité** : chaque règle porte un champ `statut` ∈ `corpus` (doctrine des documents) · `suggestion` (adaptation cohérente, non officielle) · `hors_corpus` (à saisir/valider). L'UI doit afficher ce statut.

---

## 1. Les 5 paramètres d'entrée (saisis par l'utilisateur)

```jsonc
{
  "niveau_eleves":          "AEL | ACEL",
  "moment_saison":          "REPRISE | DEVELOPPEMENT | PRE_COMPETITION_EXAMEN",
  "milieu":                 "PISCINE | FOSSE",
  "philosophie_instructeur":"FOCUS_TECHNIQUE | FOCUS_VOLUME | FOCUS_LUDIQUE_DETENTE",
  "profil_encadrant":       "IE1_MAJEUR | IE1_MINEUR | IE2"   // voir § 7 (ajout recommandé)
}
```

> 🔑 **Ajout par rapport au brief** : un 5ᵉ paramètre, `profil_encadrant`, est nécessaire car la **profondeur maximale d'encadrement dépend du brevet** (IE1 = 6 m ; IE2 = 20 m sous conditions). Sans lui, l'app ne peut pas bloquer une séance fosse au-delà des prérogatives. À défaut, **défaut = `IE1_MAJEUR`** (ce que tu prépares).

---

## 2. Enums détaillés

### 2.1 `niveau_eleves`

```jsonc
{
  "AEL": {
    "label": "Apnéiste Eau Libre",
    "profondeur_autonomie_relative_m": 6,
    "statut_profondeur": "corpus",           // MFA p.32
    "charge_hypoxique_max": "faible",         // suggestion cohérente avec Sport p.42-43
    "statut_charge": "suggestion",
    "objectif_mfa_dominant": "Evoluer en autonomie",
    "competences": ["materiel","ventilation_relachement","deplacement","compensation","assistance_binome","theorie"],
    "criteres_detailles": null,               // hors_corpus : fiches MFA AEL à saisir
    "prerequis_acces": ["Apnéiste Piscine", "RIFAA (autonomie relative)"],
    "sources": ["MFA p.32","Rég p.33","Champ p.3"]
  },
  "ACEL": {
    "label": "Apnéiste Confirmé Eau Libre",
    "profondeur_autonomie_relative_m": 20,
    "statut_profondeur": "corpus",
    "charge_hypoxique_max": "moderee_a_elevee_fin_de_saison",
    "statut_charge": "suggestion",
    "objectif_mfa_dominant": "Evoluer en autonomie + economie d'effort (verticalite, hydrodynamisme, flottabilite)",
    "competence_se_deplacer": "Savoir évoluer en verticalité, profiter de son hydrodynamisme, adapter son palmage selon les niveaux de flottabilité pour minimiser ses efforts",
    "criteres_detailles": null,
    "prerequis_acces": ["AEL"],
    "sources": ["MFA p.32","MFA p.52"]
  }
}
```
> Niveaux **hors périmètre du brief** mais présents dans le corpus (à prévoir en enum extensible) : `AP`, `ACP`, `AEEL` (40 m, performance, verticalité + horizontale [MFA p.52]), `PASS_APNEISTE`.

### 2.2 `moment_saison`

```jsonc
{
  "REPRISE": {
    "periode": "mi-novembre → fin décembre",
    "phase_corpus": "Préparation physique générale (T4 année N)",
    "repartition_natation_apnee": "80/20",       // Programmer p.6
    "dominantes": {"hypercapnie":3,"aerobie":3,"gainage_musculation":3,"hydrodynamisme":1,"palmage":1,"hypoxie":1,"lactique":1,"mental":1,"relachement":2,"securite":2,"souplesse":3},
    "objectifs_types": ["evaluer_niveau","remediation_technique","fonciers","hypercapnie_legere"],
    "statut": "corpus"  // phase ; mapping dates = suggestion
  },
  "DEVELOPPEMENT": {
    "periode": "janvier → mi-mars",
    "phase_corpus": "Préparation physique spécifique (T1 N+1) : hypercapnique → introduction hypoxie",
    "repartition_natation_apnee": "20/80 (janv-fév)  puis 50/50 (mars-avril)",   // Programmer p.6
    "dominantes": {"hypercapnie":2,"hypoxie":2,"lactique":3,"aerobie":2,"hydrodynamisme":3,"palmage":3,"coordination":3,"gainage_musculation":2,"mental":1,"relachement":2,"securite":2,"souplesse":3},
    "objectifs_types": ["technique","hypercapnie","introduire_hypoxie","lactique","epreuves_physiques"],
    "statut": "corpus"
  },
  "PRE_COMPETITION_EXAMEN": {
    "periode": "mi-mars → 24-25 avril 2027",
    "phase_corpus": "Préparation ciblée + affûtage (T2 N+1)",
    "repartition_natation_apnee": "20/80 hypoxique (corpus : mai-juin) — comprimer pour l'exam d'avril",
    "dominantes": {"hypoxie":3,"mental":3,"hypercapnie":1,"lactique":1,"aerobie":1,"palmage":1,"coordination":1,"hydrodynamisme":3,"relachement":2,"securite":2,"souplesse":3,"gainage_musculation":1},
    "objectifs_types": ["mental","gestion_stress","protocole_passage","affutage","revalidation_epreuves"],
    "affutage": {
      "dernieres_seances": "intensité forte (≈ perf max), répétitions faibles, récupération longue",
      "repos_strict_jours_avant": "2 à 3",
      "revue_protocole": ["echauffement","regles_penalites","protocole_sortie"]
    },
    "statut": "corpus (+ suggestion pour le calage dates)"
  }
}
```

### 2.3 `milieu`

```jsonc
{
  "PISCINE": {
    "profondeur_typique_m": [0, 6],
    "usages_corpus": ["travail_foncier","hypoxie_hypercapnie_lactates","technique","recherche_performance"],
    "materiel_secours_obligatoire": ["POSS","moyen_communication","fiches_evacuation"],     // 0-6 m
    "materiel_secours_obligatoire_plus_6m": ["eau_douce","BAVU","masque_haute_concentration","oxygenotherapie","couverture_isotherme"],
    "directeur_bassin_requis": true,
    "sources": ["Programmer p.19","Rég p.37-39"]
  },
  "FOSSE": {
    "profondeur_typique_m": [6, 20],
    "usages_corpus": ["technique_en_profondeur","adaptation_profondeur","surveillance","sauvetage","compensation"],
    "materiel_secours_obligatoire": "idem PISCINE + matériel > 6 m (O₂, BAVU…)",
    "prerogative_ie1_m": 6,               // IE1 = limite 6 m  → alerte si > 6
    "prerogative_ie2_m": 20,              // IE2 sous conditions (DP/DB)
    "caci_mineurs": "annuel obligatoire (> 6 m)",
    "protocoles_chiffres": null,          // hors_corpus
    "sources": ["Programmer p.19","Champ p.3-4","Rég p.18, p.31"]
  }
}
```
> Le **milieu naturel** (lac/mer/carrière) est présent dans le corpus (8 apnéistes max, VHF, pavillon alpha…) mais **hors périmètre du brief**. Prévoir l'enum `MILIEU_NATUREL` pour évolution.

### 2.4 `philosophie_instructeur`

```jsonc
{
  "FOCUS_TECHNIQUE": {
    "ponderation": {"technique":0.5,"volume":0.2,"ludique":0.1,"mental":0.2},
    "effets": ["plus_de_demonstrations","remediation_privilegiee","criteres_de_reussite_techniques","series_courtes"],
    "ancrage_corpus": "Programmer p.19, p.26-27 ; Pratique p.5-6",
    "statut": "suggestion"
  },
  "FOCUS_VOLUME": {
    "ponderation": {"technique":0.2,"volume":0.5,"ludique":0.1,"mental":0.2},
    "effets": ["plus_de_repetitions","echauffement_plus_intense","vigilance_surentrainement"],
    "ancrage_corpus": "Sport p.55, p.27",
    "statut": "suggestion"
  },
  "FOCUS_LUDIQUE_DETENTE": {
    "ponderation": {"technique":0.2,"volume":0.1,"ludique":0.5,"mental":0.2},
    "effets": ["intensite_reduite","pedagogie_par_la_reussite","relais_jeux","securite_inchangee"],
    "ancrage_corpus": "Pratique p.19-21, Sport p.22",
    "statut": "suggestion"
  }
}
```
> ⚠️ Le corpus **ne nomme pas** ces trois « philosophies ». Les pondérations ci-dessus sont des **hypothèses de configuration** à ajuster.

---

## 3. Entité `Exercice`

```jsonc
{
  "id": "DYN-02",
  "nom": "Série hypercapnique DYN",
  "discipline": "DYN",                    // STA | DYN | DNF | FOSSE | SAUVETAGE | MENTAL | ECHAUFFEMENT | PALMAGE
  "milieux": ["PISCINE"],
  "niveaux_eleves": ["AEL","ACEL"],
  "moments_saison": ["REPRISE","DEVELOPPEMENT"],
  "objectif_physio": ["hypercapnie","aerobie"],     // hypercapnie | hypoxie | lactique | aerobie | technique | mental | securite
  "parametres": {
    "distance_pct_max": 50,
    "recup_pct_temps_apnee": 50,
    "repetitions": 10,
    "source": "Sport p.41",
    "statut": "corpus"
  },
  "justification_pedagogique": "…",
  "points_securite": ["…"],
  "tags_securite": ["CARBONARCOSE","BINOME_OBLIGATOIRE","RECUP_LONGUE_SURFACE_A_EVITER"],
  "variantes": {
    "simplifier":  [{"texte": "40 % de la distance max, récup 60-70 %", "statut": "suggestion"}],
    "complexifier":[{"texte": "50 % ✅ + série de 10 ✅", "statut": "corpus"}],
    "selon_philosophie": {"FOCUS_TECHNIQUE":"…","FOCUS_VOLUME":"…","FOCUS_LUDIQUE_DETENTE":"…"}
  },
  "niveau_risque": 2,                     // 1 faible, 2 modéré, 3 élevé, 4 très élevé
  "profondeur_max_m": 6,
  "ordre_dans_seance": "COEUR",           // ACCUEIL | A_SEC | ECHAUFFEMENT | PREREQUIS | COEUR | APPLICATION | RETOUR_CALME | DEBRIEF
  "duree_min": 30,
  "surveillance_requise": "RAPPROCHEE",   // STANDARD | RAPPROCHEE | DEDIEE_1_POUR_1
  "sources": ["Sport p.41","Théo p.9"]
}
```

**Table de risque (valeur `niveau_risque`)**

| Niveau | Exemples d'exercices | Basé sur |
|---|---|---|
| 1 | STA-01, PRO-01, MEN-01 (visu à sec), PAL-01 | exercices d'initiation |
| 2 | DYN-01, DYN-02, DYN-04, STA-02, DYN-05 | hypercapnie / lactique |
| 3 | STA-04, SAU-01, SAU-02, DYN-06 | hypoxie modérée / effort + apnée |
| 4 | STA-03, DYN-03, DYN-07 | **hypoxique — les plus accidentogènes** [Sport p.43] |

---

## 4. Entité `Seance`

```jsonc
{
  "id": "…",
  "titre": "…",
  "params": {
    "niveau_eleves": "AEL",
    "moment_saison": "REPRISE",
    "milieu": "PISCINE",
    "philosophie_instructeur": "FOCUS_TECHNIQUE",
    "profil_encadrant": "IE1_MAJEUR",
    "effectif": 6,
    "duree_totale_min": 90,
    "profondeur_max_m": 4
  },
  "objectif": {
    "final": "…",
    "intermediaires": ["…"],
    "smart": {"specifique":"…","mesurable":"…","atteignable":"…","realiste":"…","temporel":"…"},
    "critere_evaluation": "…"
  },
  "prerequis": [{"texte":"…","critere":"…"}],
  "place_dans_cursus": {"seance_precedente":"…","seance_suivante":"…"},
  "phases": [
    {
      "ordre": 1,
      "type": "ACCUEIL",                    // enum des phases (voir fichier 04 § 1.2)
      "duree_min": 8,
      "lieu": "A_SEC",
      "exercice_id": null,
      "contenu": "…",
      "consignes": ["…"],
      "position_encadrant": "Face au groupe",
      "criteres_reussite": ["…"]
    }
  ],
  "securite": {
    "administrative": ["licence","CACI"],
    "reglementaire": ["POSS","moyen_communication","fiches_evacuation","directeur_bassin"],
    "pratique": {"binomes": true, "surveillants": 2, "protocole_sortie": true, "oxygene_disponible": true}
  },
  "evaluation_remediation": {"criteres": ["…"], "remediation_prevue": ["…"]},
  "prochaine_seance": "…",
  "alertes_calculees": [],                  // rempli par le moteur de règles (§ 5)
  "score_auto_evaluation": {"A":0,"B":0,"C":0,"D":0,"E":0,"total":0,"F_securite":0}
}
```

---

## 5. `alertes_securite` — moteur de règles

### 5.1 Entité `Alerte` (règle déclenchable)

```jsonc
{
  "id": "ALR-001",
  "niveau": "BLOQUANT",                   // INFO | AVERTISSEMENT | BLOQUANT
  "tag_declencheur": "HYPOXIE_SYNCOPE",
  "condition": "exercice.tags includes HYPOXIE_SYNCOPE AND seance.params.moment_saison == 'REPRISE'",
  "message_court": "Hypoxie en début de saison",
  "message_pedagogique": "Les exercices hypoxiques sont les plus accidentogènes : on les réserve à la fin de saison, après le travail hypercapnique.",
  "ce_que_dit_lexaminateur": "Justifier la place de l'exercice dans la saison (« Quand ? »).",
  "action_suggeree": "Remplacer par une série hypercapnique (DYN-02).",
  "source": "Sport p.43 ; Programmer p.6",
  "statut": "corpus"
}
```

### 5.2 Catalogue complet des alertes

| ID | Niveau | Condition de déclenchement | Message (court) | Source | Statut |
|---|---|---|---|---|---|
| ALR-001 | ⛔ BLOQUANT | `#HYPOXIE_SYNCOPE` ∧ moment = REPRISE | Hypoxie en début de saison | Sport p.43 | corpus |
| ALR-002 | ⛔ BLOQUANT | exercice `profondeur_max_m > prerogative(profil_encadrant)` | Profondeur > prérogative (IE1 = 6 m) | Champ p.3-4 ; Rég p.31 | corpus |
| ALR-003 | ⛔ BLOQUANT | `#HYPOXIE_SYNCOPE` ∧ `surveillance != RAPPROCHEE/DEDIEE` | Surveillance rapprochée jusqu'à 1' | Théo p.9 | corpus |
| ALR-004 | ⚠️ AVERT. | ≥ 2 exercices `#HYPOXIE_SYNCOPE` dans la séance | Séances longues et répétées = PCM | Théo p.9 | corpus |
| ALR-005 | ⚠️ AVERT. | séance sans phase `ECHAUFFEMENT` | Échauffement négligé | Pratique p.10 | corpus |
| ALR-006 | ⚠️ AVERT. | séance sans `protocole_sortie` | Protocole de sortie non maîtrisé | Pratique p.10 | corpus |
| ALR-007 | ⚠️ AVERT. | niveau = AEL ∧ exercice `niveau_risque ≥ 4` | Exercice trop engageant pour AEL | Sport p.43 | suggestion |
| ALR-008 | ⚠️ AVERT. | `#CARBONARCOSE` | Surveiller les maux de tête | Sport p.41 | corpus |
| ALR-009 | ⚠️ AVERT. | `#RECUP_LONGUE_SURFACE_A_EVITER` ∧ récupération > 100 % du temps d'apnée | Garder une légère hypercapnie | Théo p.9 | corpus |
| ALR-010 | ⚠️ AVERT. | `#PAS_STATIQUE_AU_FOND` ∧ statique après DYN profond | Pas de statique au fond | Théo p.9 | corpus |
| ALR-011 | ⚠️ AVERT. | séance sans `critere_evaluation` | Critère d'évaluation manquant | Pratique p.23 | corpus |
| ALR-012 | ⚠️ AVERT. | `milieu == FOSSE` ∧ pas d'exercice `COMPENSATION` / `FOS-01` préalable | Compensation non acquise → inutile de travailler la profondeur | Programmer p.20 | corpus |
| ALR-013 | ⚠️ AVERT. | `#MATERIEL_SECOURS_6M` ∧ POSS/O₂ non cochés | Matériel de secours > 6 m | Rég p.37, p.39 | corpus |
| ALR-014 | ⚠️ AVERT. | durée totale > 120 min | Séance > 2 h | Pratique p.2 | suggestion |
| ALR-015 | ⚠️ AVERT. | `philosophie == FOCUS_VOLUME` ∧ ≥ 3 séances volume consécutives | Risque de surentraînement | Sport p.27 | corpus |
| ALR-016 | ℹ️ INFO | exercice `#MAX_ENCADRE` | Max = dernière apnée, dispositif de sécurité à présenter | Pratique p.15, p.23 | corpus |
| ALR-017 | ℹ️ INFO | pas de `debrief` en fin de séance | Débrief positif + annonce de la prochaine séance | Pratique p.11, p.23 | corpus |
| ALR-018 | ℹ️ INFO | moment = PRE_COMPETITION_EXAMEN ∧ dernière semaine | Repos 2-3 jours avant la perf | Sport p.58 | corpus |
| ALR-019 | ℹ️ INFO | `effectif > 8` ∧ milieu naturel | Max. 8 apnéistes en milieu naturel | Champ p.3 | corpus |
| ALR-020 | ℹ️ INFO | `statut == hors_corpus` | Information à valider dans le MFA | — | — |

### 5.3 Dictionnaire des **tags de sécurité**

| Tag | Libellé UI | Pictogramme suggéré | Niveau par défaut | Règles liées |
|---|---|---|---|---|
| `HYPOXIE_SYNCOPE` | Risque hypoxique / syncope | ⛔ | BLOQUANT | ALR-001, 003, 004, 007 |
| `PCM_SAMBA` | Risque de PCM (samba) | ⚠️ | AVERT. | ALR-003 |
| `HYPERVENTILATION_INTERDITE` | Aucune hyperventilation | 🚫 | INFO (rappel) | — |
| `BINOME_OBLIGATOIRE` | Binôme / surveillance 1 pour 1 | 👥 | INFO (rappel) | — |
| `SURVEILLANCE_RAPPROCHEE` | Surveillance rapprochée (1' après) | 👁️ | AVERT. | ALR-003 |
| `SURVEILLANCE_ACTIVE` | Encadrant proche / mi-bassin | 👁️ | INFO | — |
| `POINT_APPUI` | Point d'appui entre/après apnées | ⚓ | INFO | — |
| `PROTOCOLE_SORTIE` | Protocole de sortie complet | ✅ | AVERT. | ALR-006 |
| `SIGNAL_CONSCIENCE` | Signal de conscience | 🆗 | INFO | — |
| `CARBONARCOSE` | Maux de tête / intoxication CO₂ | 🧠 | AVERT. | ALR-008 |
| `RECUP_LONGUE_SURFACE_A_EVITER` | Ne pas trop récupérer en surface | ⏱️ | AVERT. | ALR-009 |
| `PAS_STATIQUE_AU_FOND` | Pas de statique au fond | ⛔ | AVERT. | ALR-010 |
| `COMPENSATION` | Compensation maîtrisée/non forcée | 👂 | AVERT. | ALR-012 |
| `LESTAGE_LARGABLE` | Lestage largable (pas de baudrier) | ⚖️ | INFO | — |
| `PROFONDEUR_LIMITE` | Profondeur limitée par brevet/niveau | 📏 | BLOQUANT | ALR-002 |
| `MATERIEL_SECOURS_6M` | O₂, BAVU, POSS… au-delà de 6 m | 🧰 | AVERT. | ALR-013 |
| `SAUVETAGE_RIFAA` | Protocole RIFAA / O₂ | 🚑 | INFO | — |
| `MAX_ENCADRE` | Max : dispositif de sécurité renforcé | 🎯 | INFO | ALR-016 |
| `NIVEAU_MINIMUM_ACEL` | Réservé ACEL et + | 🔒 | AVERT. | ALR-007 |
| `SURENTRAINEMENT` | Risque de surcharge | 📉 | AVERT. | ALR-015 |
| `FATIGUE_MUSCULAIRE` | Effort musculaire important | 💪 | INFO | — |
| `MATERIEL_ADAPTE` | Palmes/lestage adaptés | 🛠️ | INFO | — |
| `LONGE` | Longe de sécurité | 🪢 | INFO | — |

### 5.4 Pseudo-code du moteur de règles

```ts
type Niveau = 'INFO' | 'AVERTISSEMENT' | 'BLOQUANT';

function evaluer(seance: Seance, exercices: Map<string, Exercice>): Alerte[] {
  const alertes: Alerte[] = [];
  const exs = seance.phases.filter(p => p.exercice_id).map(p => exercices.get(p.exercice_id!)!);

  const hypox = exs.filter(e => e.tags_securite.includes('HYPOXIE_SYNCOPE'));
  if (hypox.length && seance.params.moment_saison === 'REPRISE') push('ALR-001');
  if (hypox.length >= 2) push('ALR-004');
  if (hypox.some(e => !['RAPPROCHEE','DEDIEE_1_POUR_1'].includes(e.surveillance_requise))) push('ALR-003');

  const maxProf = Math.max(0, ...exs.map(e => e.profondeur_max_m ?? 0), seance.params.profondeur_max_m);
  if (maxProf > prerogative(seance.params.profil_encadrant)) push('ALR-002');   // IE1 → 6

  if (!seance.phases.some(p => p.type === 'ECHAUFFEMENT')) push('ALR-005');
  if (!seance.securite.pratique.protocole_sortie) push('ALR-006');
  if (!seance.objectif.critere_evaluation) push('ALR-011');
  // … etc.
  return alertes;
}

const prerogative = (p) => ({ IE1_MAJEUR: 6, IE1_MINEUR: 6, IE2: 20 }[p]); // corpus : Rég p.31
```

---

## 6. Entité `Examen` (mode entraînement)

### 6.1 Sujets tirables [Pratique p.15, Théo p.21]

```jsonc
{
  "sujets_pratique": [
    {"id":"P01","enonce":"Séance sans palme pour apnéistes non débutants","niveau":"AEL"},
    {"id":"P02","enonce":"Séance de statique","niveau":"AEL"},
    {"id":"P03","enonce":"Séance hypoxique pour apnéistes en fin d'année","niveau":"ACEL"},
    {"id":"P04","enonce":"Séance d'introduction à l'hypercapnie pour débutants","niveau":"AEL"},
    {"id":"P05","enonce":"Séance d'entraînement pour diplômés avec un max en fin de séance","niveau":"ACEL"},
    {"id":"P06","enonce":"Séance de sauvetage","niveau":"AEL"},
    {"id":"P07","enonce":"Séance sur le virage pour apnéistes maîtrisant la zone 30-40 m","niveau":"ACEL"},
    {"id":"P08","enonce":"Mise en place sécurité sur 50 m (idée d'un max)","niveau":"ACEL"},
    {"id":"P09","enonce":"Mise en place sécurité séance de statique","niveau":"AEL"},
    {"id":"P10","enonce":"Première séance de sans palme","niveau":"AEL"},
    {"id":"P11","enonce":"Séance de 50 m répétés pour apnéistes ayant déjà atteint cette distance","niveau":"ACEL"},
    {"id":"P12","enonce":"Séance de préparation et mise en place pour un max","niveau":"ACEL"},
    {"id":"P13","enonce":"Cours pour apnéistes avant fosse prévue dans les prochains jours","niveau":"AEL"},
    {"id":"P14","enonce":"Préparation au 50 m pour apnéistes","niveau":"AEL"},
    {"id":"P15","enonce":"Séance pour confirmés cherchant à travailler le 75 m (bassin de 25 m)","niveau":"ACEL"},
    {"id":"P16","enonce":"1ère séance Pass Apnéiste","niveau":"AEL"}
  ],
  "sujets_theorie": [
    {"id":"T01","enonce":"Hypoxie / hypercapnie : éléments théoriques"},
    {"id":"T02","enonce":"FFESSM : organisation, licence, niveaux d'apnée et d'encadrement"},
    {"id":"T03","enonce":"Syncope et PCM pour apnéistes préparant le RIFAA"},
    {"id":"T04","enonce":"Organisation de la sécurité (milieu artificiel et naturel) pour futurs apnéistes"},
    {"id":"T05","enonce":"Présenter l'apnée à des étudiants sport-études"},
    {"id":"T06","enonce":"Organisation de votre club et conditions de pratique pour tout nouvel arrivant"},
    {"id":"T07","enonce":"Préparer une sortie randonnée subaquatique (organisation et briefing)"},
    {"id":"T08","enonce":"Accidents en apnée liés à la profondeur"},
    {"id":"T09","enonce":"Protection de l'environnement (écogestes)"},
    {"id":"T10","enonce":"Le matériel"},
    {"id":"T11","enonce":"Les techniques de compensation"},
    {"id":"T12","enonce":"Le lestage"},
    {"id":"T13","enonce":"Les risques liés à l'hyperventilation"},
    {"id":"T14","enonce":"Les techniques de descente en profondeur"}
  ]
}
```
> Le champ `niveau` des sujets de pratique est **déduit** (🧩 suggestion) : le corpus ne précise pas le niveau des apnéistes pour chaque sujet, sauf quand il l'indique (« non débutants », « diplômés », « confirmés »).

### 6.2 Grilles de notation (data-driven)

```jsonc
{
  "grille_pratique": {
    "total": 20,
    "blocs": [
      {"id":"jury","label":"Présentation au jury","points":3},
      {"id":"eleves","label":"Présentation aux élèves","points":2},
      {"id":"forme","label":"Déroulement — forme","points":5},
      {"id":"fond","label":"Déroulement — fond","points":8},
      {"id":"fin","label":"Fin de séance","points":2}
    ],
    "source": "Pratique p.23"
  },
  "grille_theorie": {
    "total": 20,
    "blocs": [
      {"id":"jury","label":"Présentation au jury","points":3},
      {"id":"eleves","label":"Présentation aux élèves","points":2},
      {"id":"forme","label":"Déroulement — forme","points":6},
      {"id":"fond","label":"Déroulement — fond","points":6},
      {"id":"fin","label":"Fin de séance","points":3}
    ],
    "source": "Théo p.20"
  },
  "seuils": {"note_min_par_epreuve": 5, "moyenne_min_par_groupe": 10}
}
```

---

## 7. Entité `FicheAccident` (module « accidents » — 2/3 de l'écrit)

```jsonc
{
  "id": "ACC-PCM",
  "nom": "Perte de Contrôle Moteur (PCM / samba)",
  "mecanisme": "Atteinte du seuil hypoxique → altération des fonctions neurologiques → dysfonctionnements moteurs",
  "causes": ["hyperventilation","différence de pression partielle (ppO2, ppCO2)","temps d'apnée majoré par la profondeur"],
  "facteurs_favorisants": ["mauvaise position de la tête","séances longues et répétées","temps passé au fond","efforts","mauvaise reprise ventilatoire","froid","mauvaise évaluation de ses capacités"],
  "symptomes_apneiste": ["mouvements saccadés","réponse motrice altérée","champ visuel rétréci","peau/muqueuses violacées","pâleur","regard altéré","tremblements","absence de réponse aux stimuli"],
  "signes_visibles_encadrant": ["lâcher de bulles","baisse du tonus","aucune réponse à un signe convenu","accélération en fin d'apnée","changement de trajectoire"],
  "conduite_a_tenir": {
    "apneiste": "Se laisser secourir",
    "ie": ["intervenir immédiatement","tête hors de l'eau","retirer le masque","surveiller la reprise (sur-accident : noyade)","arrêter l'atelier"]
  },
  "prevention": {
    "apneiste": ["ne pas hyperventiler","ne pas forcer","pas de statique au fond","soigner la reprise","point d'appui dès la sortie","connaître ses limites"],
    "ie": ["rappeler les consignes en surface","jamais d'hyperventilation","sécurité par binôme","surveillance rapprochée 1' après la sortie","connaître l'élève","exercices limitant les récupérations trop longues en surface"]
  },
  "tags_exercices_lies": ["PCM_SAMBA","HYPOXIE_SYNCOPE"],
  "sources": ["Théo p.9"],
  "statut_completude": "complet"
}
```

**Fiches à créer** (statut de complétude) :

| ID | Accident | Complétude du corpus |
|---|---|---|
| ACC-PCM | PCM / samba | ✅ complet |
| ACC-SYNCOPE | Syncope | ✅ complet (conduite à tenir) |
| ACC-HYPERCAPNIE | Carbonarcose / maux de tête | 🟡 partiel [Sport p.41] |
| ACC-BAROTRAUMA | Barotraumatismes (oreilles, poumons, masque, sinus, dents, intestins) | 🟡 partiel [Théo p.11] — symptômes/CAT **à saisir** |
| ACC-NOYADE | Sur-accident | 🟡 partiel [Théo p.9] |
| ACC-DEFAUT-ASSISTANCE | Non-assistance | ⚠️ non fourni [Rég p.57] |
| ACC-AUTRES | OPI, narcose, froid… | ⚠️ non fournis |

> ⚠️ Pour les fiches non complètes : `statut_completude` ≠ `complet` → l'UI affiche « À compléter avec le MFA / la CRA ».

---

## 8. Entité `Prerogative` (table de référence)

```jsonc
[
  {"brevet":"IE1_MINEUR","profondeur_max_m":6,"conditions":["sous responsabilité d'un encadrant majeur présent sur site","au moins IE1 avec ≥ 2 ans d'expérience"],"source":"Rég p.31 ; Champ p.3"},
  {"brevet":"IE1_MAJEUR","profondeur_max_m":6,"conditions":["Pass'Apnéiste, Pass'Plongeur Libre, Apnéiste Piscine"],"source":"Champ p.3"},
  {"brevet":"IE2_ARTIFICIEL","profondeur_max_m":20,"conditions":["présence DP/DB IE2 + AEEL minimum (accord du DB)"],"source":"Rég p.31 ; Champ p.4"},
  {"brevet":"IE2_NATUREL","profondeur_max_m":20,"conditions":["présence DP MEF1 minimum sur site"],"source":"Rég p.31"},
  {"brevet":"MEF1","profondeur_max_m":30,"source":"Rég p.31"},
  {"brevet":"MEF2","profondeur_max_m":null,"note":"pas de limite","source":"Rég p.31"}
]
```

---

## 9. Écrans et fonctions de l'app qui consomment ce modèle (suggestion)

| Écran | Données consommées | Valeur pour l'utilisateur |
|---|---|---|
| **Constructeur de séance** | `params` → filtre `Exercice` par niveau/milieu/saison ; moteur d'alertes en temps réel | Explication « pourquoi » + alertes sécurité |
| **Fiche exercice** | `justification_pedagogique`, `points_securite`, `variantes` | Réponse « ce que l'examinateur veut entendre » |
| **Mode examen blanc** | `sujets_pratique` + `grille_pratique` + chrono 30' | Entraînement à la présentation |
| **Module accidents** | `FicheAccident` + quiz (nom → mécanisme → causes → CAT → prévention) | 2/3 de l'écrit |
| **Calendrier saison** | `moment_saison` + planning exam 24-25 avril 2027 | Orientation des objectifs mensuels |
| **Checklist finale** | Grille A-F (fichier 04 § 4) | Auto-évaluation avant le jour J |
| **Badges de fiabilité** | `statut` (corpus / suggestion / hors_corpus) | Transparence sur l'origine de chaque règle |

---

## 10. Points ouverts à compléter (hors corpus)

1. **Fiches de compétences AEL / ACEL** du MFA (critères chiffrés) → `criteres_detailles`.
2. **Protocoles de fosse** (descente, remontée, paliers, ratios de surveillance).
3. **Contenu détaillé des accidents** autres que PCM/syncope.
4. **Délais de récupération** entre séances à risque ; durée maximale d'une séance.
5. **Ratios élèves/encadrant** en piscine.
6. **Règles « avant/après fosse »** (aucune dans le corpus).
7. **Réponse à la question d'examen** sur le défaut d'assistance à personne en danger.

> Sources officielles où chercher : https://apnee.ffessm.fr/les-niveaux-en-apnee · https://ffessm-idf.fr/les-commissions/apnee/ (bibliothèque CRA IdF) · préconisations fédérales pour la pratique en milieu naturel et artificiel (lien dans [Rég p.32]).
