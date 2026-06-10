// ── Kaani · App shell — routing, bottom nav, responsive frame ──
import React from 'react';
import { K, Icon, FONT_BODY } from './ds.jsx';
import {
  HomeScreen, SearchScreen, OrdersScreen, ProfileScreen, PartnerScreen,
  DetailScreen, PaymentScreen, ConfirmScreen,
} from './screens.jsx';

// Bottom navigation
function BottomNav({ tab, onTab }) {
  const items = [
    { id: 'home', icon: 'home', label: 'Accueil' },
    { id: 'search', icon: 'search', label: 'Recherche' },
    { id: 'orders', icon: 'receipt', label: 'Commandes' },
    { id: 'partner', icon: 'store', label: 'Partenaire' },
    { id: 'profile', icon: 'user', label: 'Profil' },
  ];
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

  const [tab, setTab] = React.useState('home');
  const [route, setRoute] = React.useState(null); // overlay flow
  const scrollRef = React.useRef(null);

  const go = (r) => { setRoute(r); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
  const goTab = (id) => { setRoute(null); setTab(id); if (scrollRef.current) scrollRef.current.scrollTop = 0; };

  const openOffer = (offer) => go({ name: 'detail', offer });
  const order = (offer, qty) => go({ name: 'payment', cart: { offer, qty } });
  const confirm = (cart, pay, total) => go({ name: 'confirm', cart, pay, total });

  // tab content
  let tabScreen;
  if (tab === 'home') tabScreen = <HomeScreen onOpen={openOffer} onSearch={() => goTab('search')} onPartner={() => goTab('partner')} mysteryVariant={mysteryVariant} />;
  else if (tab === 'search') tabScreen = <SearchScreen onOpen={openOffer} mysteryVariant={mysteryVariant} />;
  else if (tab === 'orders') tabScreen = <OrdersScreen />;
  else if (tab === 'partner') tabScreen = <PartnerScreen embedded />;
  else if (tab === 'profile') tabScreen = <ProfileScreen onOpenOrder={() => goTab('orders')} onPartner={() => goTab('partner')} />;

  // overlay content
  let overlay = null;
  if (route?.name === 'detail') overlay = <DetailScreen offer={route.offer} mysteryVariant={mysteryVariant} onBack={() => setRoute(null)} onOrder={order} />;
  else if (route?.name === 'payment') overlay = <PaymentScreen cart={route.cart} onBack={() => go({ name: 'detail', offer: route.cart.offer })} onConfirm={confirm} />;
  else if (route?.name === 'confirm') overlay = <ConfirmScreen cart={route.cart} pay={route.pay} total={route.total} onTrack={() => goTab('orders')} onHome={() => goTab('home')} />;

  return (
    <div className="kaani-shell">
      <div style={{ width: '100%', height: '100%', position: 'relative', background: K.cream, fontFamily: FONT_BODY, color: K.ink }}>
        {/* scroll region */}
        <div ref={scrollRef} className="kscroll" style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: K.cream }}>
          {overlay
            ? <div key={route.name} className="kover" style={{ minHeight: '100%' }}>{overlay}</div>
            : <div key={tab} className="kfade" style={{ minHeight: '100%', paddingBottom: 'calc(96px + env(safe-area-inset-bottom, 0px))' }}>{tabScreen}</div>}
        </div>

        {/* bottom nav only on tabs */}
        {!overlay && <BottomNav tab={tab} onTab={goTab} />}
      </div>
    </div>
  );
}
