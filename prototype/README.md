# Kaani · Anti-gaspillage Premium · Niamey

Application web (prototype mobile) qui met en relation les **hôtels, restaurants et
pâtisseries** de Niamey avec des clients, pour **valoriser les invendus du jour**
plutôt que de les jeter — à prix cassés (jusqu'à -80 %).

Le concept signature est l'**« Hôtel Mystère »** : des buffets 5★ préparés le jour
même, vendus à prix réduit, dont l'établissement n'est dévoilé qu'à la livraison.

---

## Démarrer (le plus simple)

**Double-cliquez sur `index.html`** — l'application s'ouvre dans votre navigateur.

> Une connexion internet est requise au premier chargement : React et Babel sont
> chargés depuis un CDN (unpkg).

### Pourquoi `index.html` et pas `Kaani.html` ?

`Kaani.html` charge ses modules via `<script src="app/…jsx">`. Babel doit alors
les télécharger en XHR, ce que Chrome et Edge **bloquent en `file://`** — d'où une
page blanche si on ouvre `Kaani.html` directement.

`index.html` est la **version auto-suffisante** : tous les modules y sont intégrés
en ligne, donc elle fonctionne par simple double-clic, sans serveur.

### Alternative : lancer un petit serveur

Pour travailler avec la version modulaire `Kaani.html` (ou servir le dossier) :

```bash
# Python (déjà installé)
python -m http.server 8000
# puis ouvrir http://localhost:8000/Kaani.html

# ou Node
npx serve .
```

---

## Reconstruire `index.html`

`index.html` est généré à partir de `Kaani.html` et des modules. Si vous modifiez
un fichier dans `app/` ou `frames/`, régénérez-le :

```bash
node build.mjs
```

---

## Structure

| Fichier / dossier        | Rôle                                                              |
| ------------------------ | ---------------------------------------------------------------- |
| `index.html`             | **Application prête à l'emploi** (modules intégrés en ligne)     |
| `Kaani.html`             | Version source modulaire (charge les `.jsx` séparément)          |
| `build.mjs`              | Génère `index.html` en intégrant les modules dans `Kaani.html`   |
| `app/ds.jsx`             | Design system : couleurs, typographies, icônes, composants atomiques |
| `app/data.jsx`           | Données de démonstration (offres, paiements, commandes)          |
| `app/screens1.jsx`       | Accueil (découverte) + Recherche                                 |
| `app/screens2.jsx`       | Détail d'une offre + Tunnel de paiement                          |
| `app/screens3.jsx`       | Confirmation (dévoilement de l'hôtel) + Profil                   |
| `app/screens4.jsx`       | Espace Partenaire (B2B « Devenir partenaire »)                   |
| `app/app.jsx`            | Coquille de l'app : navigation, barre du bas, routage            |
| `frames/ios-frame.jsx`   | Cadre d'appareil iOS (status bar, dynamic island…)               |
| `tweaks-panel.jsx`       | Panneau d'édition de l'outil de design (masqué hors éditeur)     |

## Écrans

- **Accueil** — Hôtel Mystère, Badge Diamant (buffets 5★), Pâtisseries de Chefs, teaser B2B
- **Recherche** — filtres par catégorie + recherche texte
- **Détail** — formule, portions restantes, livraison, commande avec quantité
- **Paiement** — Espèces, Wave, Airtel/Moov Money, Nita, Amana, Zamani + récapitulatif
- **Confirmation** — succès, dévoilement de l'« hôtel mystère », suivi livreur, gains éco
- **Commandes** — suivi en direct + historique
- **Profil** — impact (repas sauvés, FCFA économisés, CO₂ évité) + réglages
- **Partenaire (B2B)** — la règle des 3 E, fonctionnement, formulaire d'inscription

## Stack technique

React 18 + Babel standalone (transpilation JSX dans le navigateur). Aucune
installation de dépendances, aucune étape de build obligatoire pour exécuter l'app.
