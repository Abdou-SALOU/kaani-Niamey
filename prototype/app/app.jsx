// ── Kaani · App shell — routing, bottom nav, orders, tweaks ────

// Orders tab
function OrdersScreen({ onHome }) {
  return (
    <div style={{ paddingTop: 56, paddingBottom: 24 }}>
      <div style={{ padding: '0 18px' }}>
        <h1 style={{ margin: '0 0 16px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, letterSpacing: -0.8, color: K.ink }}>Commandes</h1>
      </div>

      {/* active order tracking */}
      <div style={{ padding: '0 18px' }}>
        <div style={{ background: K.forest, borderRadius: 22, overflow: 'hidden', color: '#fff', marginBottom: 22 }}>
          <div style={{ position: 'relative', height: 132, overflow: 'hidden' }}>
            {/* faux map */}
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, #16533D, ${K.forestDeep})` }} />
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 26px), repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 26px)' }} />
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 360 132" preserveAspectRatio="none">
              <path d="M40 104 C 120 104, 130 40, 220 40 S 320 56, 330 30" fill="none" stroke={K.goldSoft} strokeWidth="2.5" strokeDasharray="6 6" />
            </svg>
            <div style={{ position: 'absolute', left: 32, bottom: 92, width: 14, height: 14, borderRadius: '50%', background: '#fff', border: `3px solid ${K.forest}` }} />
            <div className="kfloat" style={{ position: 'absolute', left: 196, top: 26, width: 34, height: 34, borderRadius: 11, background: K.goldSoft, color: K.forest, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="moto" size={20} stroke={2.2} />
            </div>
          </div>
          <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><FoodImg preset="mystery" height={46} /></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
                <span className="kdot" style={{ width: 7, height: 7, borderRadius: 9, background: K.goldSoft }} />
                <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11, color: K.goldSoft }}>En livraison · 12 min</span>
              </div>
              <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 15, color: '#fff' }}>Buffet Mystère du Soir</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: 'rgba(255,255,255,0.6)' }}>Moussa · Yamaha · +227 90 ••</div>
            </div>
            <button style={{ width: 40, height: 40, borderRadius: 12, border: 'none', background: K.goldSoft, color: K.forest, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Icon name="phone" size={20} stroke={2.2} />
            </button>
          </div>
        </div>
      </div>

      {/* history */}
      <div style={{ padding: '0 18px' }}>
        <SectionHead kicker="Historique" title="Commandes passées" accent={K.forest} icon="receipt" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PAST_ORDERS.map((o) => (
            <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 13, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 16, padding: 11 }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><FoodImg preset={o.preset} height={52} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: K.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.title}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>{o.source} · {o.date}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13, color: K.ink }}>{fcfa(o.total)}</div>
                <button style={{ border: 'none', background: 'none', padding: 0, marginTop: 2, cursor: 'pointer', fontFamily: FONT_BODY, fontWeight: 700, fontSize: 10.5, color: K.forest }}>Recommander</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      paddingBottom: 26, paddingTop: 8, background: 'linear-gradient(180deg, rgba(245,239,227,0), rgba(245,239,227,0.96) 38%)' }}>
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

// ── Palettes for the Tweaks "Direction visuelle" ──────────────
const PALETTES = {
  // [forestDeep, forest, forest2, gold, goldSoft, goldDeep]
  'Forêt & Or':     ['#0C3426', '#0E3B2C', '#16533D', '#C79A3E', '#E2C173', '#9A7320'],
  'Émeraude':       ['#073A29', '#0A4D36', '#127A56', '#C79A3E', '#E6C97E', '#8C6A1A'],
  'Nuit & Cuivre':  ['#0E2620', '#13322B', '#1E4A40', '#BC7338', '#E2A56B', '#8A4E20'],
};
function applyPalette(arr) {
  const [fd, f, f2, g, gs, gd] = arr;
  Object.assign(K, { forestDeep: fd, forest: f, forest2: f2, gold: g, goldSoft: gs, goldDeep: gd });
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mystery": "Flouté",
  "palette": ['#0C3426', '#0E3B2C', '#16533D', '#C79A3E', '#E2C173', '#9A7320']
}/*EDITMODE-END*/;

const MYSTERY_MAP = { 'Flouté': 'flou', 'Voile or': 'voile', 'Scellé': 'scelle' };

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [, force] = React.useState(0);
  React.useEffect(() => { applyPalette(t.palette); force((n) => n + 1); }, [JSON.stringify(t.palette)]);

  const mysteryVariant = MYSTERY_MAP[t.mystery] || 'flou';

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
  else if (tab === 'orders') tabScreen = <OrdersScreen onHome={() => goTab('home')} />;
  else if (tab === 'partner') tabScreen = <PartnerScreen embedded />;
  else if (tab === 'profile') tabScreen = <ProfileScreen onOpenOrder={() => goTab('orders')} onPartner={() => goTab('partner')} />;

  // overlay content
  let overlay = null;
  if (route?.name === 'detail') overlay = <DetailScreen offer={route.offer} mysteryVariant={mysteryVariant} onBack={() => setRoute(null)} onOrder={order} />;
  else if (route?.name === 'payment') overlay = <PaymentScreen cart={route.cart} onBack={() => go({ name: 'detail', offer: route.cart.offer })} onConfirm={confirm} />;
  else if (route?.name === 'confirm') overlay = <ConfirmScreen cart={route.cart} pay={route.pay} total={route.total} onTrack={() => goTab('orders')} onHome={() => goTab('home')} />;

  // status-bar text color: white over dark headers, black over light screens
  const darkTops = { detail: true, payment: false, confirm: true };
  const statusDark = route ? !!darkTops[route.name] : (tab === 'home' || tab === 'partner');

  return (
    <IOSDevice dark={statusDark}>
      <div style={{ width: '100%', height: '100%', position: 'relative', background: K.cream, fontFamily: FONT_BODY, color: K.ink }}>
        {/* scroll region */}
        <div ref={scrollRef} className="kscroll" style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', background: K.cream }}>
          {overlay
            ? <div key={route.name} className="kover" style={{ minHeight: '100%' }}>{overlay}</div>
            : <div key={tab} className="kfade" style={{ minHeight: '100%', paddingBottom: 96 }}>{tabScreen}</div>}
        </div>

        {/* bottom nav only on tabs */}
        {!overlay && <BottomNav tab={tab} onTab={goTab} />}
      </div>

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label="Carte « Hôtel Mystère »" />
        <TweakRadio label="Traitement" value={t.mystery} options={['Flouté', 'Voile or', 'Scellé']} onChange={(v) => setTweak('mystery', v)} />
        <TweakSection label="Direction visuelle" />
        <TweakColor label="Palette" value={t.palette}
          options={Object.values(PALETTES)}
          onChange={(v) => setTweak('palette', v)} />
      </TweaksPanel>
    </IOSDevice>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
