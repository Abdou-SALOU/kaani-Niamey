// ── Kaani · Data ──────────────────────────────────────────────
// Établissements RÉELS de Niamey (hôtels 5★, restaurants, pâtisserie).
// Les détails d'offres (prix anti-gaspi, portions, créneaux) sont illustratifs.
// Photos : banque libre Pexels (licence gratuite, usage commercial), servies
// localement depuis /public/img — voir le README pour les crédits.

export const MYSTERY = [
  {
    id: 'm1', kind: 'mystery', preset: 'mystery',
    teaser: 'Buffet Mystère du Soir',
    desc: "Sélection chaude du dîner d'un palace de Niamey — entrées, plats signature et accompagnements du jour.",
    from: 1000, original: 7500, portions: 6, total: 14, dist: 2.1, window: '19h30 – 21h00',
    stars: 5, reveal: 'Radisson Blu Hôtel & Conference Center', revealHint: 'Hôtel 5★ · Rive droite',
    revealImg: 'img/buffet2.jpg',
    tags: ['Buffet chaud', '8–10 pièces'],
  },
  {
    id: 'm2', kind: 'mystery', preset: 'mystery',
    teaser: 'Panier Chef Mystère',
    desc: 'Assortiment gastronomique préparé le jour même par la brigade d’un grand hôtel partenaire.',
    from: 1500, original: 9000, portions: 3, total: 12, dist: 3.4, window: '20h00 – 21h30',
    stars: 5, reveal: 'Noom Hôtel Niamey', revealHint: 'Hôtel 5★ · Plateau',
    revealImg: 'img/buffet.jpg',
    tags: ['Gastronomique', 'Portion généreuse'],
  },
  {
    id: 'm3', kind: 'mystery', preset: 'mystery',
    teaser: 'Surprise Déjeuner 5★',
    desc: 'Formule complète du déjeuner d’exception, dévoilée à la réception de votre commande.',
    from: 1000, original: 6500, portions: 9, total: 16, dist: 1.4, window: '13h00 – 14h30',
    stars: 5, reveal: 'Grand Hôtel du Niger', revealHint: 'Hôtel 5★ · Bord du fleuve',
    revealImg: 'img/dinner.jpg',
    tags: ['Déjeuner', 'Plat + dessert'],
  },
];

export const DIAMOND = [
  {
    id: 'd1', kind: 'diamond', preset: 'buffet', img: 'img/buffet.jpg',
    teaser: 'Grand Buffet International', source: 'Soluxe Hôtel',
    desc: 'Buffet international du soir préparé aujourd’hui : grillades, mafé revisité, poissons du fleuve.',
    from: 2000, original: 12000, portions: 5, total: 18, dist: 4.0, window: '20h00 – 22h00',
    stars: 5, tags: ['Préparé aujourd’hui', 'Buffet entier'],
  },
  {
    id: 'd2', kind: 'diamond', preset: 'buffet2', img: 'img/dinner.jpg',
    teaser: 'Brunch Dominical Signature', source: 'Noom Hôtel',
    desc: 'Le meilleur du brunch dominical : viennoiseries, plats chauds et fruits frais de saison.',
    from: 1500, original: 9500, portions: 4, total: 14, dist: 2.8, window: '11h00 – 13h00',
    stars: 5, tags: ['Brunch', 'Sucré + salé'],
  },
  {
    id: 'd3', kind: 'diamond', preset: 'buffet', img: 'img/targui.jpg',
    teaser: 'Mouton Targui & Couscous', source: 'Le Pilier',
    desc: 'La spécialité touarègue de la maison : mouton grillé fondant, couscous parfumé et légumes du jour.',
    from: 2500, original: 11000, portions: 4, total: 12, dist: 1.6, window: '20h00 – 22h30',
    stars: 5, tags: ['Spécialité touarègue', 'Grillade'],
  },
  {
    id: 'd4', kind: 'diamond', preset: 'buffet2', img: 'img/grill.jpg',
    teaser: 'Grillades du Jardin', source: 'Côté Jardin',
    desc: 'Assortiment de grillades servi dans l’oasis de verdure du restaurant : brochettes, volaille, accompagnements.',
    from: 2000, original: 9000, portions: 6, total: 16, dist: 3.2, window: '19h30 – 22h00',
    stars: 5, tags: ['Grillades', 'Du jardin'],
  },
  {
    id: 'd5', kind: 'diamond', preset: 'buffet', img: 'img/rizgras.jpg',
    teaser: 'Riz Gras & Poulet du Jour', source: 'L’Assiette Dakar',
    desc: 'Le classique ouest-africain : riz au gras mijoté, poulet doré et sauce maison généreuse.',
    from: 1000, original: 4500, portions: 8, total: 20, dist: 2.4, window: '13h00 – 15h00',
    stars: 5, tags: ['Riz au gras', 'Généreux'],
  },
];

export const PASTRY = [
  { id: 'p1', kind: 'pastry', preset: 'pastry', img: 'img/choco.jpg', teaser: 'Entremets Chocolat-Noisette', source: 'Amandine',
    from: 1000, original: 4500, portions: 7, total: 20, dist: 1.1, tags: ['Pièce entière'] },
  { id: 'p2', kind: 'pastry', preset: 'pastry2', img: 'img/macaron.jpg', teaser: 'Boîte de Macarons (12)', source: 'Amandine',
    from: 1500, original: 6000, portions: 5, total: 18, dist: 1.1, tags: ['12 pièces'] },
  { id: 'p3', kind: 'pastry', preset: 'pastry', img: 'img/brunch.jpg', teaser: 'Corbeille de Viennoiseries', source: 'Amandine',
    from: 1000, original: 4000, portions: 6, total: 16, dist: 1.1, tags: ['Du matin', 'Assortiment'] },
  { id: 'p4', kind: 'pastry', preset: 'pastry2', img: 'img/fondant.jpg', teaser: 'Fondant au Chocolat Coulant', source: 'Amandine',
    from: 1000, original: 4500, portions: 4, total: 12, dist: 1.1, tags: ['Coulant', 'À partager'] },
];

export const ALL = [...MYSTERY, ...DIAMOND, ...PASTRY];
export const findOffer = (id) => ALL.find((o) => o.id === id);

export const DELIVERY_FEE = 1000;

// Moyens de paiement réellement utilisés au Niger.
export const PAYMENTS = [
  { id: 'cash',   label: 'Espèces à la livraison', sub: 'Payez le livreur à la réception', kind: 'cash', tone: '#0E3B2C', badge: 'Populaire' },
  { id: 'wave',   label: 'Wave',           sub: 'Sans frais · QR / numéro', kind: 'wallet', tone: '#1DA1F2' },
  { id: 'airtel', label: 'Airtel Money',   sub: 'Mobile Money', kind: 'wallet', tone: '#E2231A' },
  { id: 'moov',   label: 'Moov Money',     sub: 'Mobile Money', kind: 'wallet', tone: '#F58220' },
  { id: 'nita',   label: 'Nita Transfert', sub: 'Transfert mobile', kind: 'wallet', tone: '#0E7C66' },
  { id: 'amana',  label: 'Amana Transfert',sub: 'Transfert mobile', kind: 'wallet', tone: '#7A4FBF' },
  { id: 'zamani', label: 'Zamani Cash',    sub: 'Portefeuille mobile', kind: 'wallet', tone: '#C79A3E' },
];

export const PAST_ORDERS = [
  { id: 'o1', title: 'Buffet Mystère du Soir', source: 'Radisson Blu Hôtel', preset: 'mystery', img: 'img/buffet2.jpg', total: 2000, date: 'Hier · 20h12', status: 'Livré' },
  { id: 'o2', title: 'Entremets Chocolat-Noisette', source: 'Amandine', preset: 'pastry', img: 'img/choco.jpg', total: 2000, date: '7 juin · 13h40', status: 'Livré' },
  { id: 'o3', title: 'Grand Buffet International', source: 'Soluxe Hôtel', preset: 'buffet', img: 'img/buffet.jpg', total: 3000, date: '3 juin · 21h05', status: 'Livré' },
];
