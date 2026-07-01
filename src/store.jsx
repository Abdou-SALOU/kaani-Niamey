// ── Kaani · App store ─────────────────────────────────────────
// Favoris + commandes + impact écologique, persistés dans localStorage.
// Une seule source de vérité : les écrans lisent/écrivent via useStore().
import React from 'react';
import { PAST_ORDERS } from './data.js';

const CO2_PER_MEAL = 0.75; // kg de CO₂ évité par repas sauvé (estimation)

// Historique de démonstration : l'app paraît vivante dès la première ouverture.
// Enrichi avec meals/saved/offerId pour que l'impact et « Recommander » marchent
// de façon uniforme entre commandes de démo et commandes réelles.
const SEED_META = {
  o1: { meals: 4, saved: 13000, offerId: 'm1' },
  o2: { meals: 3, saved: 7000, offerId: 'p1' },
  o3: { meals: 5, saved: 18000, offerId: 'd1' },
};
const SEED_ORDERS = PAST_ORDERS.map((o) => ({ ...o, ...SEED_META[o.id], seed: true, status: 'Livré' }));

const KEY_FAV = 'kaani.favorites.v1';
const KEY_ORD = 'kaani.orders.v1';

function load(key, fallback) {
  try {
    const raw = typeof localStorage !== 'undefined' && localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}
function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* stockage indisponible (mode privé) — on ignore */
  }
}

const StoreCtx = React.createContext(null);

export function StoreProvider({ children }) {
  const [favorites, setFavorites] = React.useState(() => load(KEY_FAV, []));
  const [orders, setOrders] = React.useState(() => load(KEY_ORD, SEED_ORDERS));

  React.useEffect(() => save(KEY_FAV, favorites), [favorites]);
  React.useEffect(() => save(KEY_ORD, orders), [orders]);

  const toggleFav = React.useCallback((id) => {
    setFavorites((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  }, []);

  const addOrder = React.useCallback((order) => {
    setOrders((o) => [order, ...o.filter((x) => x.id !== order.id)]);
  }, []);

  const impact = React.useMemo(() => {
    const meals = orders.reduce((s, o) => s + (o.meals || 0), 0);
    const saved = orders.reduce((s, o) => s + (o.saved || 0), 0);
    return { meals, saved, co2: Math.round(meals * CO2_PER_MEAL) };
  }, [orders]);

  const value = React.useMemo(
    () => ({
      favorites,
      favCount: favorites.length,
      isFav: (id) => favorites.includes(id),
      toggleFav,
      orders,
      addOrder,
      impact,
    }),
    [favorites, toggleFav, orders, addOrder, impact],
  );

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const ctx = React.useContext(StoreCtx);
  if (!ctx) throw new Error('useStore doit être utilisé dans <StoreProvider>');
  return ctx;
}
