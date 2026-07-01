// ── Kaani · App shell — routing, bottom nav, responsive frame ──
import React from 'react';
import { K, Icon, FONT_BODY, Wordmark } from './ds.jsx';
import {
  HomeScreen, SearchScreen, OrdersScreen, ProfileScreen, PartnerScreen,
  DetailScreen, PaymentScreen, ConfirmScreen, FavoritesScreen,
} from './screens.jsx';

// Navigation items shared by the mobile bottom bar and the desktop sidebar.
const NAV_ITEMS = [
  { id: 'home', icon: 'home', label: 'Accueil' },
  { id: 'search', icon: 'search', label: 'Recherche' },
  { id: 'orders', icon: 'receipt', label: 'Commandes' },
  { id: 'partner', icon: 'store', label: 'Partenaire' },
  { id: 'profile', icon: 'user', label: 'Profil' },
];

// True when the viewport is wide enough for the desktop sidebar layout.
// Kept in sync with the `@media (min-width: 1024px)` rules in styles.css.
function useIsDesktop() {
  const query = '(min-width: 1024px)';
  const [isDesktop, setIsDesktop] = React.useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  );
  React.useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isDesktop;
}

// Desktop sidebar navigation (replaces the bottom bar on wide screens).
function SideNav({ tab, onTab }) {
  return (
    <aside style={{ width: 248, flexShrink: 0, height: '100%', background: K.paper,
      borderRight: `1px solid ${K.hair}`, display: 'flex', flexDirection: 'column', padding: '26px 16px' }}>
      <div style={{ padding: '0 10px 24px' }}><Wordmark size={26} /></div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV_ITEMS.map((it) => {
          const on = tab === it.id;
          return (
            <button key={it.id} onClick={() => onTab(it.id)} style={{ display: 'flex', alignItems: 'center', gap: 13,
              padding: '12px 14px', borderRadius: 14, border: 'none', cursor: 'pointer', textAlign: 'left',
              background: on ? K.freshWash : 'transparent', color: on ? K.forest : K.ink2,
              fontFamily: FONT_BODY, fontWeight: on ? 700 : 600, fontSize: 14.5 }}>
              <Icon name={it.icon} size={21} stroke={on ? 2.3 : 2} />
              {it.label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', background: K.cream, border: `1px solid ${K.hair}`, borderRadius: 16, padding: '14px 15px' }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 12.5, color: K.ink, marginBottom: 3 }}>Kaani sur mobile</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, lineHeight: 1.45, color: K.muted }}>Installez l’app pour commander en 1 geste, même hors-ligne.</div>
      </div>
    </aside>
  );
}

// Bottom navigation (mobile)
function BottomNav({ tab, onTab }) {
  const items = NAV_ITEMS;
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40,
      paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 14px)', paddingTop: 8,
      background: 'linear-gradient(180deg, rgba(245,239,227,0), rgba(245,239,227,0.96) 38%)' }}>
      <div style={{ margin: '0 14px', height: 60, background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(16px)',
        border: `1px solid ${K.hair}`, borderRadius: 22, boxShadow: '0 10px 30px rgba(12,52,38,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 6px' }}>
        {items.map((it) => {
          const on = tab === it.id;
          return (
            <button key={it.id} onClick={() => onTab(it.id)} style={{ flex: 1, height: 48, border: 'none', background: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
              color: on ? K.forest : K.muted, position: 'relative' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {on && <span style={{ position: 'absolute', width: 36, height: 30, borderRadius: 10, background: K.freshWash }} />}
                <Icon name={it.icon} size={21} stroke={on ? 2.3 : 2} style={{ position: 'relative' }} />
              </div>
              <span style={{ fontFamily: FONT_BODY, fontWeight: on ? 700 : 600, fontSize: 9.5, letterSpacing: 0.1 }}>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const mysteryVariant = 'flou'; // signature "Hôtel Mystère" treatment
  const isDesktop = useIsDesktop();

  const [tab, setTab] = React.useState('home');
  const [route, setRoute] = React.useState(null); // overlay flow
  const scrollRef = React.useRef(null);

  const go = (r) => { setRoute(r); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const goTab = (id) => { setRoute(null); setTab(id); if (scrollRef.current) scrollRef.current.scrollTop = 0; };

  const openOffer = (offer) => go({ name: 'detail', offer });
  const order = (offer, qty) => go({ name: 'payment', cart: { offer, qty } });
  const confirm = (cart, pay, total) => go({ name: 'confirm', cart, pay, total });
  const openFavorites = () => go({ name: 'favorites' });

  // tab content
  let tabScreen;
  if (tab === 'home') tabScreen = <HomeScreen onOpen={openOffer} onSearch={() => goTab('search')} onPartner={() => goTab('partner')} onFavorites={openFavorites} mysteryVariant={mysteryVariant} />;
  else if (tab === 'search') tabScreen = <SearchScreen onOpen={openOffer} mysteryVariant={mysteryVariant} />;
  else if (tab === 'orders') tabScreen = <OrdersScreen onOpen={openOffer} />;
  else if (tab === 'partner') tabScreen = <PartnerScreen embedded />;
  else if (tab === 'profile') tabScreen = <ProfileScreen onOpenOrder={() => goTab('orders')} onPartner={() => goTab('partner')} onFavorites={openFavorites} />;

  // overlay content
  let overlay = null;
  if (route?.name === 'detail') overlay = <DetailScreen offer={route.offer} mysteryVariant={mysteryVariant} onBack={() => setRoute(null)} onOrder={order} />;
  else if (route?.name === 'payment') overlay = <PaymentScreen cart={route.cart} onBack={() => go({ name: 'detail', offer: route.cart.offer })} onConfirm={confirm} />;
  else if (route?.name === 'confirm') overlay = <ConfirmScreen cart={route.cart} pay={route.pay} total={route.total} onTrack={() => goTab('orders')} onHome={() => goTab('home')} />;
  else if (route?.name === 'favorites') overlay = <FavoritesScreen onBack={() => setRoute(null)} onOpen={openOffer} mysteryVariant={mysteryVariant} />;

  // Tab content clears the bottom bar on mobile; on desktop the sidebar
  // frees that space, so a normal bottom padding is enough.
  const tabPadBottom = isDesktop ? 28 : 'calc(96px + env(safe-area-inset-bottom, 0px))';

  return (
    <div className={`kaani-shell${isDesktop ? ' is-desktop' : ''}`}>
      {isDesktop && <SideNav tab={tab} onTab={goTab} />}
      <div className="kmain" style={{ position: 'relative', flex: 1, minWidth: 0, height: '100%', background: K.cream, fontFamily: FONT_BODY, color: K.ink }}>
        {/* scroll region */}
        <div ref={scrollRef} className="kscroll" style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: K.cream }}>
          {overlay
            ? <div key={route.name} className="kover kpage" style={{ minHeight: '100%' }}>{overlay}</div>
            : <div key={tab} className="kfade kpage" style={{ minHeight: '100%', paddingBottom: tabPadBottom }}>{tabScreen}</div>}
        </div>

        {/* bottom nav only on tabs (mobile/tablet) */}
        {!isDesktop && !overlay && <BottomNav tab={tab} onTab={goTab} />}
      </div>
    </div>
  );
}
