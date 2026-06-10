// ── Kaani · Screens 2 — Offer detail + Payment ────────────────

function TopBar({ onBack, light = false, title, onShare }) {
  const c = light ? '#fff' : K.ink;
  const bg = light ? 'rgba(255,255,255,0.16)' : K.paper;
  const bd = light ? 'rgba(255,255,255,0.3)' : K.hair;
  const btn = { width: 40, height: 40, borderRadius: 12, border: `1px solid ${bd}`, background: bg, color: c,
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)' };
  return (
    <div style={{ position: 'absolute', top: 52, left: 0, right: 0, zIndex: 30, display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 16px' }}>
      <button onClick={onBack} style={btn}><Icon name="chevL" size={20} stroke={2.3} /></button>
      {title && <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: c }}>{title}</span>}
      <button style={btn} onClick={onShare}><Icon name="heart" size={19} stroke={2} /></button>
    </div>
  );
}

function InfoRow({ icon, title, sub, accent = K.forest }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 38, height: 38, borderRadius: 12, background: K.cream, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name={icon} size={20} stroke={2} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13.5, color: K.ink }}>{title}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>{sub}</div>
      </div>
    </div>
  );
}

function DetailScreen({ offer, mysteryVariant, onBack, onOrder }) {
  const [qty, setQty] = React.useState(1);
  const isMystery = offer.kind === 'mystery';
  const formula = isMystery
    ? ['Sélection de plats chauds du jour', 'Accompagnements & garnitures 5★', 'Portion généreuse 1–2 pers.']
    : offer.kind === 'pastry'
      ? ['Pièce préparée le jour même', 'Recette de chef pâtissier', 'Idéale à partager']
      : ['Buffet complet du jour', 'Entrées · plats · desserts', 'Quantité généreuse'];
  return (
    <div style={{ position: 'relative', paddingBottom: 110 }}>
      <TopBar onBack={onBack} light />
      {/* hero */}
      <div style={{ position: 'relative' }}>
        {isMystery
          ? <MysteryVisual variant={mysteryVariant} height={320} big />
          : <FoodImg preset={offer.preset} height={320} label={offer.kind === 'pastry' ? 'photo · dessert de chef' : 'photo · buffet 5★'} />}
        <div style={{ position: 'absolute', bottom: 30, left: 16, right: 16, display: 'flex', gap: 7 }}>
          <Chip tone="eco" icon="leaf">Anti-gaspi</Chip>
          {isMystery
            ? <Chip tone="gold" icon="star">Hôtel 5★ mystère</Chip>
            : <Chip tone="dark" icon="diamond">{offer.kind === 'diamond' ? 'Badge Diamant' : 'Chef'}</Chip>}
          <Chip tone="glass">-{Math.round((1 - offer.from / offer.original) * 100)}%</Chip>
        </div>
      </div>

      {/* body card overlapping */}
      <div style={{ position: 'relative', marginTop: -20, background: K.cream, borderRadius: '24px 24px 0 0', padding: '22px 18px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 0.8, color: K.gold, textTransform: 'uppercase', marginBottom: 4 }}>
              {isMystery ? 'Identité dévoilée à la livraison' : offer.source}
            </div>
            <h1 style={{ margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 25, lineHeight: 1.08, letterSpacing: -0.6, color: K.ink }}>{offer.teaser}</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 99, padding: '5px 10px', flexShrink: 0 }}>
            <Icon name="star" size={14} stroke={2} style={{ color: K.gold }} fill={K.gold} />
            <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13, color: K.ink }}>{offer.stars || 5}.0</span>
          </div>
        </div>

        <p style={{ margin: '12px 0 16px', fontFamily: FONT_BODY, fontSize: 13.5, lineHeight: 1.55, color: K.ink2 }}>{offer.desc}</p>

        {/* portions banner */}
        <div style={{ background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 16, padding: '13px 15px', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13, color: K.amber }}>
              <Icon name="flame" size={16} stroke={2} />Vite, ça part !
            </span>
            <span style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>{offer.window || 'Retrait du jour'}</span>
          </div>
          <Portions left={offer.portions} total={offer.total} />
        </div>

        {/* formula */}
        <h3 style={{ margin: '4px 0 10px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: K.ink }}>La formule</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
          {formula.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: K.freshWash, color: K.fresh, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="check" size={14} stroke={2.6} />
              </span>
              <span style={{ fontFamily: FONT_BODY, fontSize: 13.5, color: K.ink2 }}>{f}</span>
            </div>
          ))}
        </div>

        {/* delivery */}
        <h3 style={{ margin: '4px 0 12px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: K.ink }}>Livraison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 8 }}>
          <InfoRow icon="moto" title="Livraison à moto" sub="Zone urbaine de Niamey · suivi en direct" />
          <InfoRow icon="tag" title={`${fcfa(DELIVERY_FEE)} fixe`} sub="Tarif unique partout en ville" accent={K.amber} />
          <InfoRow icon="shield" title="Mystère protégé" sub="L’hôtel est dévoilé à la réception" accent={K.gold} />
        </div>
      </div>

      {/* sticky order bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px 14px',
        background: 'rgba(245,239,227,0.92)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${K.hair}`,
        display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 99, padding: 4 }}>
          <button onClick={() => setQty(Math.max(1, qty - 1))} style={stepBtn}><Icon name="minus" size={17} stroke={2.4} /></button>
          <span style={{ width: 22, textAlign: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: K.ink }}>{qty}</span>
          <button onClick={() => setQty(qty + 1)} style={stepBtn}><Icon name="plus" size={17} stroke={2.4} /></button>
        </div>
        <Btn kind="primary" size="lg" full onClick={() => onOrder(offer, qty)} style={{ flex: 1 }}>
          Commander · {fcfa(offer.from * qty)}
        </Btn>
      </div>
    </div>
  );
}
const stepBtn = { width: 34, height: 34, borderRadius: '50%', border: 'none', background: K.cream, color: K.forest,
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

// ── Payment tunnel ────────────────────────────────────────────
function PayMethod({ m, active, onPick }) {
  return (
    <button onClick={() => onPick(m.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
      background: active ? K.paper : K.paperWarm, border: `1.5px solid ${active ? K.forest : K.hair}`, borderRadius: 16, padding: '13px 14px',
      textAlign: 'left' }}>
      <div style={{ width: 40, height: 40, borderRadius: 11, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: m.kind === 'cash' ? K.freshWash : '#fff', border: `1px solid ${K.hair}`, color: m.tone }}>
        <Icon name={m.kind === 'cash' ? 'cash' : 'wallet'} size={21} stroke={2} />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: K.ink }}>{m.label}</span>
          {m.badge && <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 9.5, color: K.fresh, background: K.freshWash, padding: '2px 6px', borderRadius: 6 }}>{m.badge}</span>}
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>{m.sub}</div>
      </div>
      <span style={{ width: 22, height: 22, borderRadius: '50%', border: `2px solid ${active ? K.forest : K.hair}`, background: active ? K.forest : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
        {active && <Icon name="check" size={13} stroke={3} />}
      </span>
    </button>
  );
}

function PaymentScreen({ cart, onBack, onConfirm }) {
  const [pay, setPay] = React.useState('cash');
  const { offer, qty } = cart;
  const meals = offer.from * qty;
  const total = meals + DELIVERY_FEE;
  return (
    <div style={{ position: 'relative', paddingTop: 92, paddingBottom: 116, minHeight: '100%' }}>
      <TopBar onBack={onBack} title="Paiement" />

      {/* delivery to */}
      <div style={{ padding: '0 18px' }}>
        <div style={{ background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 18, padding: 16, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <span style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1, color: K.gold, textTransform: 'uppercase' }}>Livraison moto</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11.5, color: K.fresh }}>
              <Icon name="clock" size={13} stroke={2.2} />25–35 min
            </span>
          </div>
          <InfoRow icon="pin" title="Plateau, Niamey" sub="Rue PL-12 · près du rond-point" />
          <div style={{ height: 1, background: K.hair, margin: '13px 0' }} />
          <InfoRow icon="moto" title="Suivi en direct" sub="Position du livreur partagée in-app" accent={K.amber} />
        </div>
      </div>

      {/* payment methods */}
      <div style={{ padding: '0 18px' }}>
        <h3 style={{ margin: '0 0 12px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 17, color: K.ink }}>Moyen de paiement</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {PAYMENTS.map((m) => <PayMethod key={m.id} m={m} active={pay === m.id} onPick={setPay} />)}
        </div>
      </div>

      {/* recap */}
      <div style={{ padding: '18px 18px 0' }}>
        <div style={{ background: K.forest, borderRadius: 20, padding: '16px 18px', color: '#fff' }}>
          <span style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.2, color: K.goldSoft, textTransform: 'uppercase' }}>Récapitulatif</span>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 9 }}>
            <Recap label={`${offer.teaser} × ${qty}`} val={fcfa(meals)} />
            <Recap label="Livraison à moto" val={fcfa(DELIVERY_FEE)} />
            <div style={{ height: 1, background: 'rgba(255,255,255,0.15)', margin: '3px 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: '#fff' }}>Total</span>
              <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22, color: K.goldSoft, letterSpacing: -0.4 }}>{fcfa(total)}</span>
            </div>
          </div>
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.08)', borderRadius: 11, padding: '9px 11px' }}>
            <Icon name="leaf" size={16} stroke={2} style={{ color: K.goldSoft }} />
            <span style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: 'rgba(255,255,255,0.82)' }}>1 repas sauvé du gaspillage avec cette commande 🌱</span>
          </div>
        </div>
      </div>

      {/* confirm */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px 14px',
        background: 'rgba(245,239,227,0.92)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${K.hair}` }}>
        <Btn kind="gold" size="lg" full icon="lock" onClick={() => onConfirm(cart, pay, total)}>
          Confirmer · {fcfa(total)}
        </Btn>
      </div>
    </div>
  );
}
function Recap({ label, val }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{label}</span>
      <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13.5, color: '#fff' }}>{val}</span>
    </div>
  );
}

Object.assign(window, { TopBar, InfoRow, DetailScreen, PaymentScreen, PayMethod });
