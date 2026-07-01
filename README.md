# Kaani · Anti-gaspillage Premium · Niamey

**Application web (PWA) installable** qui met en relation les hôtels, restaurants et
pâtisseries de Niamey avec des clients pour **valoriser les invendus du jour** à prix
cassés (jusqu'à -80 %). Concept signature : l'**« Hôtel Mystère »** — des buffets 5★
préparés le jour même, dont l'établissement n'est dévoilé qu'à la livraison.

> Une seule base de code qui tourne **sur PC et sur iPhone**, installable depuis le
> navigateur (« Ajouter à l'écran d'accueil »), avec fonctionnement hors-ligne.

## 🌍 En ligne

**https://abdou-salou.github.io/kaani-Niamey/**

Déployé automatiquement sur **GitHub Pages** à chaque `git push` sur `main`
(workflow `.github/workflows/deploy.yml`). Ouvrez le lien dans Safari sur iPhone →
Partager → « Sur l'écran d'accueil » pour l'installer.

---

## Lancer en local (développement)

Prérequis : **Node.js 18+** (testé avec Node 25).

```bash
npm install        # une seule fois
npm run dev        # http://localhost:5173
```

Le serveur affiche aussi l'app en plein écran sur grand écran ? Non : sur **PC**
l'app est centrée dans une colonne largeur téléphone ; sur **iPhone** elle occupe
tout l'écran. C'est voulu (app mobile-first).

### Tester sur VOTRE iPhone (même Wi-Fi)

```bash
npm run dev -- --host      # affiche une URL réseau, ex. http://192.168.1.20:5173
```

Ouvrez cette URL dans **Safari** sur l'iPhone. (L'installation « écran d'accueil »
et le hors-ligne ne s'activent qu'en **HTTPS** → voir « Déployer » ci-dessous pour
l'expérience PWA complète sur iPhone.)

---

## Construire pour la production

```bash
npm run build      # génère dist/ (HTML, JS, CSS, service worker, manifeste)
npm run preview    # sert dist/ en local pour vérifier
```

---

## Déployer (gratuit) + installer sur iPhone

L'app est 100 % statique : n'importe quel hébergement de fichiers convient.

### Option A — Netlify Drop (le plus rapide, sans compte Git)

1. `npm run build`
2. Allez sur **app.netlify.com/drop** et **glissez-déposez le dossier `dist/`**.
3. Netlify donne une URL **https://…netlify.app**.

### Option B — Netlify ou Vercel via Git

Poussez le projet sur GitHub puis « New site / project ». La config est déjà prête
(`netlify.toml`, `vercel.json`) : build `npm run build`, dossier `dist`.

### Installer sur iPhone (PWA)

1. Ouvrez l'URL **https://** dans **Safari**.
2. Bouton **Partager** → **« Sur l'écran d'accueil »**.
3. Une icône **Kaani** apparaît ; l'app s'ouvre en plein écran, hors-ligne inclus.

> Sur **Android/Chrome**, une invite « Installer l'application » apparaît directement.

---

## Structure du projet

| Chemin                     | Rôle                                                          |
| -------------------------- | ------------------------------------------------------------ |
| `index.html`               | Point d'entrée Vite (métadonnées PWA / iOS, polices)         |
| `src/main.jsx`             | Montage React + enregistrement du service worker             |
| `src/App.jsx`              | Coquille responsive, navigation du bas, routage des écrans   |
| `src/ds.jsx`               | Design system : couleurs, typographies, icônes, composants   |
| `src/data.js`              | Données de démonstration (offres, paiements, commandes)      |
| `src/store.jsx`            | État global persistant (favoris, commandes, impact) via `localStorage` |
| `src/screens.jsx`          | Tous les écrans (accueil, recherche, détail, paiement…)      |
| `src/styles.css`           | Styles globaux + cadre responsive (plein écran / centré)     |
| `public/`                  | Icônes PWA, favicon, robots.txt                              |
| `scripts/make-icons.mjs`   | Régénère les icônes PNG depuis le logo (`npm run icons`)     |
| `vite.config.js`           | Config Vite + plugin PWA (manifeste, service worker, cache)  |
| `netlify.toml`, `vercel.json` | Configs de déploiement prêtes à l'emploi                  |
| `prototype/`               | Maquette d'origine (référence, non utilisée par l'app)       |

## Écrans

Accueil (Hôtel Mystère, Badge Diamant, Pâtisseries) · Recherche · Détail d'offre ·
Paiement (Espèces, Wave, Airtel/Moov Money, Nita, Amana, Zamani) · Confirmation avec
dévoilement de l'hôtel mystère · Commandes (suivi + historique) · Favoris · Profil
(impact écologique) · Espace Partenaire B2B.

## Fonctionnalités interactives (persistées)

L'app n'est plus une simple maquette : l'état est **réel et conservé** entre les
sessions via `localStorage` (voir `src/store.jsx`, un `Context` React).

- **Favoris ❤️** — touchez le cœur sur n'importe quelle offre pour la sauvegarder.
  Compteur/badge dans l'en-tête, écran **Favoris** dédié, état conservé au rechargement.
- **Commandes réelles** — une commande confirmée est enregistrée puis alimente
  automatiquement l'onglet **Commandes** (suivi de la plus récente + historique) et le
  **Profil**. « Recommander » rouvre l'offre.
- **Impact écologique calculé** — repas sauvés, FCFA économisés et CO₂ évité sont
  **dérivés des commandes** (plus de chiffres codés en dur).
- **Recherche** — tri par pertinence / prix / distance / réduction, compteur de
  résultats, et « Près de moi » trié par distance.
- **Accessibilité** — `aria-label` / `aria-pressed` sur les boutons-icônes (favoris,
  navigation, tri…).

> Les données de démonstration (offres, historique initial) restent illustratives ;
> seul l'état utilisateur (favoris, commandes passées dans l'app) est persisté.

## Stack technique

- **Vite 6** + **React 18** (vrais modules ES, build optimisé)
- **vite-plugin-pwa** (Workbox) : manifeste, service worker, polices en cache
- Styles : design system maison (inline styles + variables) — aucun framework CSS
- Responsive mobile-first + gestion des **safe-areas iPhone** (encoche, barre d'accueil)

## Personnaliser les icônes

Modifiez le logo dans `scripts/make-icons.mjs` (ou `public/favicon.svg`), puis :

```bash
npm run icons
```

> Les icônes sont rastérisées via le Chrome installé sur la machine — aucune
> dépendance native d'image à installer.

## Données & images

- Les **établissements sont réels** (Niamey) : hôtels 5★ **Radisson Blu, Noom, Bravia,
  Soluxe, Grand Hôtel du Niger** ; restaurants **Le Pilier, Côté Jardin, L'Assiette
  Dakar** ; pâtisserie **Amandine**. Les moyens de paiement (Wave, Airtel/Moov Money,
  Nita, Amana, Zamani) sont ceux réellement utilisés au Niger.
- Les **détails d'offres** (prix anti-gaspi, portions, créneaux) restent **illustratifs**.
- Les **photos** proviennent de **[Pexels](https://www.pexels.com)** (licence gratuite,
  usage commercial, sans attribution requise). Elles sont téléchargées dans
  `public/img/` → stables, rapides et disponibles **hors-ligne**. Remplacez-les par les
  vraies photos des établissements (avec leur accord) en gardant les mêmes noms de fichiers.

## Notes

- C'est une **démo fonctionnelle** : aucun paiement réel n'est effectué et il n'y a pas
  encore de backend. L'état utilisateur (favoris, commandes, impact) est conservé
  **localement** (`localStorage`). Étape suivante possible : comptes, base de données,
  offres en temps réel, synchronisation multi-appareils.
