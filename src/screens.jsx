// ── Kaani · Screens — Home, Search, Detail, Payment, Confirm, Profile, Partner, Orders ──
import React from 'react';
import {
  K, fcfa, FONT_DISPLAY, FONT_BODY, FONT_MONO,
  Icon, FoodImg, Chip, Btn, Portions, Price, SectionHead, Wordmark,
} from './ds.jsx';
import {
  MYSTERY, DIAMOND, PASTRY, ALL, DELIVERY_FEE, PAYMENTS, PAST_ORDERS,
} from './data.js';

// iPhone home-indicator clearance for sticky bottom bars.
const SAFE_BOTTOM = (base) => `12px 16px calc(${base}px + env(safe-area-inset-bottom, 0px))`;

// ── Mystery visual treatment ──────────────────────────────────
function MysteryVisual({ variant = 'flou', height = 186, big = false }) {
  const qSize = big ? 64 : 46;
  if (variant === 'scelle') {
    return (
      <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden',
        background: `linear-gradient(160deg, ${K.forest2}, ${K.forestDeep})` }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12px)' }} />
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 0, borderTop: '2px dashed rgba(226,193,115,0.4)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: qSize + 36, height: qSize + 36, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, ${K.goldSoft}, ${K.gold} 55%, ${K.goldDeep})`,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 18px rgba(0,0,0,0.3), inset 0 0 0 3px rgba(255,255,255,0.25)', color: '#3A2A06' }}>
          <Icon name="diamond" size={qSize * 0.5} stroke={1.8} />
          <span style={{ fontFamily: FONT_MONO, fontSize: 8.5, fontWeight: 600, letterSpacing: 1, marginTop: 1 }}>SCELLÉ</span>
        </div>
        <span style={{ position: 'absolute', bottom: 10, width: '100%', textAlign: 'center', fontFamily: FONT_MONO,
          fontSize: 9, letterSpacing: 1, color: 'rgba(226,193,115,0.75)', textTransform: 'uppercase' }}>Dévoilé à la livraison</span>
      </div>
    );
  }
  if (variant === 'voile') {
    return (
      <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
        <FoodImg preset="buffet" blur={7} height="100%" />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(150deg, rgba(199,154,62,0.55), rgba(12,52,38,0.62))`, backdropFilter: 'blur(2px)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <div style={{ width: qSize, height: qSize, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <Icon name="diamond" size={qSize * 0.5} stroke={1.6} />
          </div>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: big ? 18 : 15, color: '#fff', letterSpacing: 0.2 }}>Hôtel Mystère</span>
        </div>
      </div>
    );
  }
  // 'flou' — blurred premium + big question mark
  return (
    <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      <FoodImg preset="buffet2" blur={13} height="100%" />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 70% at 50% 42%, rgba(12,52,38,0.35), rgba(6,35,26,0.78))' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <div style={{ width: qSize + 18, height: qSize + 18, borderRadius: '50%',
          border: `2px solid ${K.goldSoft}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: K.goldSoft, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: qSize, lineHeight: 1,
          boxShadow: '0 0 0 6px rgba(226,193,115,0.12)' }}>?</div>
        <span style={{ fontFamily: FONT_MONO, fontSize: 9.5, letterSpacing: 1.5, color: 'rgba(226,193,115,0.85)', textTransform: 'uppercase' }}>Hôtel 5★ masqué</span>
      </div>
    </div>
  );
}

function MysteryCard({ offer, variant, onOpen, big = false }) {
  // `big` = rendered in the 2-column search grid (narrow). There the wide
  // "Commander" button doesn't fit, so we use the compact circular "+" like the
  // other grid cards. `false` = wide home rail card (286px) with full button.
  return (
    <div onClick={() => onOpen(offer)} style={{ width: big ? '100%' : 286, flexShrink: 0, cursor: 'pointer',
      background: K.paper, borderRadius: big ? 18 : 22, overflow: 'hidden', border: `1px solid ${K.hair}`,
      boxShadow: big ? '0 6px 16px rgba(20,40,30,0.06)' : '0 10px 26px rgba(20,40,30,0.08)',
      display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <MysteryVisual variant={variant} height={big ? 124 : 178} />
        <div style={{ position: 'absolute', top: big ? 9 : 11, left: big ? 9 : 11 }}>
          <Chip tone="gold" icon="star" style={big ? { height: 21, fontSize: 10.5 } : {}}>5★ Mystère</Chip>
        </div>
        {!big && (
          <div style={{ position: 'absolute', top: 11, right: 11 }}>
            <Chip tone="eco" icon="leaf">Anti-gaspi</Chip>
          </div>
        )}
      </div>
      <div style={{ padding: big ? '11px 12px 13px' : 15, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: big ? '0 0 9px' : '0 0 5px', fontFamily: FONT_DISPLAY, fontWeight: 700,
          fontSize: big ? 14 : 17, lineHeight: big ? 1.15 : 1.2, letterSpacing: -0.2, color: K.ink,
          ...(big ? { display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 33 } : {}) }}>{offer.teaser}</h3>
        {!big && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 11, fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap' }}><Icon name="clock" size={13} stroke={2} />{offer.window}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, whiteSpace: 'nowrap' }}><Icon name="pin" size={13} stroke={2} />{offer.dist} km</span>
          </div>
        )}
        <div style={{ marginBottom: big ? 10 : 12, marginTop: big ? 'auto' : 0 }}><Portions left={offer.portions} total={offer.total} /></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
          <Price from={offer.from} original={offer.original} size={big ? 'sm' : 'md'} />
          {big ? (
            <button onClick={(e) => { e.stopPropagation(); onOpen(offer); }} style={{ width: 34, height: 34, borderRadius: '50%', border: 'none',
              background: K.forest, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
              <Icon name="plus" size={18} stroke={2.4} />
            </button>
          ) : (
            <Btn kind="primary" size="sm" iconR="arrowR">Commander</Btn>
          )}
        </div>
      </div>
    </div>
  );
}

// compact card for diamond rail + pastry grid
function OfferCard({ offer, onOpen, grid = false }) {
  return (
    <div onClick={() => onOpen(offer)} style={{ width: grid ? '100%' : 200, flexShrink: 0, cursor: 'pointer',
      background: K.paper, borderRadius: 18, overflow: 'hidden', border: `1px solid ${K.hair}`,
      boxShadow: '0 6px 16px rgba(20,40,30,0.06)' }}>
      <div style={{ position: 'relative' }}>
        <FoodImg preset={offer.preset} img={offer.img} height={grid ? 116 : 124} />
        <div style={{ position: 'absolute', top: 9, left: 9 }}>
          <Chip tone="dark" style={{ height: 21, fontSize: 10.5 }}>-{Math.round((1 - offer.from / offer.original) * 100)}%</Chip>
        </div>
        {offer.kind === 'diamond' && (
          <div style={{ position: 'absolute', top: 9, right: 9, width: 24, height: 24, borderRadius: '50%',
            background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: K.diamond }}>
            <Icon name="diamond" size={14} stroke={2} />
          </div>
        )}
      </div>
      <div style={{ padding: '11px 12px 13px' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 9, letterSpacing: 0.6, color: K.gold, textTransform: 'uppercase', marginBottom: 3 }}>{offer.source}</div>
        <h3 style={{ margin: '0 0 9px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, lineHeight: 1.15, letterSpacing: -0.2, color: K.ink,
          minHeight: grid ? 33 : 'auto', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{offer.teaser}</h3>
        <div style={{ marginBottom: 10 }}><Portions left={offer.portions} total={offer.total} /></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Price from={offer.from} original={offer.original} size="sm" />
          <button onClick={(e) => { e.stopPropagation(); onOpen(offer); }} style={{ width: 34, height: 34, borderRadius: '50%', border: 'none',
            background: K.forest, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <Icon name="plus" size={18} stroke={2.4} />
          </button>
        </div>
      </div>
    </div>
  );
}

const iconBtnGlass = { width: 40, height: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.25)',
  background: 'rgba(255,255,255,0.12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

function HomeHeader({ onSearch }) {
  return (
    <div style={{ padding: 'max(env(safe-area-inset-top, 0px), 52px) 18px 16px', background: `linear-gradient(180deg, ${K.forest} 0%, ${K.forest} 62%, ${K.forest})`,
      borderRadius: '0 0 26px 26px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(226,193,115,0.12)' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <Wordmark size={23} light />
        <div style={{ display: 'flex', gap: 9 }}>
          <button style={iconBtnGlass}><Icon name="heart" size={19} stroke={2} /></button>
          <button style={iconBtnGlass}><Icon name="bell" size={19} stroke={2} /></button>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 14 }}>
        <Icon name="pin" size={15} stroke={2} style={{ color: K.goldSoft }} />
        <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: 'rgba(255,255,255,0.78)' }}>Livré à</span>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: '#fff' }}>Niamey · Francophonie</span>
        <Icon name="chevD" size={15} stroke={2.2} style={{ color: 'rgba(255,255,255,0.7)' }} />
      </div>
      <button onClick={onSearch} style={{ width: '100%', height: 50, borderRadius: 15, border: 'none', cursor: 'pointer',
        background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', textAlign: 'left' }}>
        <Icon name="search" size={20} stroke={2} style={{ color: K.muted }} />
        <span style={{ fontFamily: FONT_BODY, fontSize: 14.5, color: K.muted, flex: 1 }}>Buffet, pâtisserie, hôtel…</span>
        <span style={{ width: 34, height: 34, borderRadius: 10, background: K.goldWash, display: 'flex', alignItems: 'center', justifyContent: 'center', color: K.goldDeep }}>
          <Icon name="tag" size={17} stroke={2} />
        </span>
      </button>
    </div>
  );
}

// the 3-E value strip
function ThreeE() {
  const items = [
    { icon: 'leaf', t: 'Écologie', s: 'Zéro gaspi' },
    { icon: 'tag', t: 'Économies', s: 'Jusqu’à -80%' },
    { icon: 'sparkle', t: 'Plaisir', s: 'Saveurs 5★' },
  ];
  return (
    <div style={{ display: 'flex', gap: 8, margin: '16px 18px 4px' }}>
      {items.map((it) => (
        <div key={it.t} style={{ flex: 1, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 15, padding: '11px 8px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, textAlign: 'center' }}>
          <div style={{ width: 32, height: 32, borderRadius: 10, background: K.freshWash, color: K.fresh, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={it.icon} size={18} stroke={2.1} />
          </div>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 12.5, color: K.ink }}>{it.t}</span>
          <span style={{ fontFamily: FONT_BODY, fontSize: 10, color: K.muted }}>{it.s}</span>
        </div>
      ))}
    </div>
  );
}

export function HomeScreen({ onOpen, onSearch, onPartner, mysteryVariant }) {
  return (
    <div style={{ paddingBottom: 24 }}>
      <HomeHeader onSearch={onSearch} />
      <ThreeE />

      {/* Hôtel Mystère */}
      <div style={{ marginTop: 22 }}>
        <div style={{ padding: '0 18px' }}>
          <SectionHead kicker="Concept signature" title="Hôtel Mystère" icon="star" accent={K.gold} />
        </div>
        <div style={{ display: 'flex', gap: 13, overflowX: 'auto', padding: '0 18px 4px', scrollbarWidth: 'none' }} className="hscroll">
          {MYSTERY.map((o) => <MysteryCard key={o.id} offer={o} variant={mysteryVariant} onOpen={onOpen} />)}
        </div>
      </div>

      {/* Badge Diamant — exclusive framed block */}
      <div style={{ margin: '26px 18px 0', borderRadius: 24, padding: 18, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(155deg, ${K.forest} 0%, ${K.forestDeep} 100%)`, border: `1px solid ${K.forest2}` }}>
        <div style={{ position: 'absolute', top: -30, right: -20, opacity: 0.12, color: K.diamondLt }}><Icon name="diamond" size={150} stroke={1} /></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(199,208,214,0.16)', color: K.diamondLt, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="diamond" size={16} stroke={2} />
          </span>
          <span style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.6, color: K.diamondLt, textTransform: 'uppercase' }}>Accès exclusif</span>
        </div>
        <h2 style={{ margin: '0 0 4px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 23, color: '#fff', letterSpacing: -0.4 }}>Badge Diamant</h2>
        <p style={{ margin: '0 0 15px', fontFamily: FONT_BODY, fontSize: 12.5, lineHeight: 1.4, color: 'rgba(255,255,255,0.7)', maxWidth: 260 }}>
          Les meilleurs buffets 5★ préparés aujourd’hui, en direct des cuisines partenaires.
        </p>
        <div style={{ display: 'flex', gap: 13, overflowX: 'auto', margin: '0 -18px', padding: '0 18px 2px' }} className="hscroll">
          {DIAMOND.map((o) => <OfferCard key={o.id} offer={o} onOpen={onOpen} />)}
        </div>
      </div>

      {/* Pâtisseries de Chefs */}
      <div style={{ padding: '26px 18px 0' }}>
        <SectionHead kicker="Sucré · prix cassés" title="Pâtisseries de Chefs" action="Tout voir" onAction={onSearch} icon="sparkle" accent={K.amber} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13 }}>
          {PASTRY.map((o) => <OfferCard key={o.id} offer={o} onOpen={onOpen} grid />)}
        </div>
      </div>

      {/* B2B teaser strip */}
      <div onClick={onPartner} style={{ margin: '24px 18px 0', cursor: 'pointer', borderRadius: 20, padding: '16px 18px',
        background: K.goldWash, border: `1px solid ${K.goldSoft}`, display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 13, background: K.gold, color: '#3A2A06', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name="store" size={24} stroke={2} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 15, color: K.ink }}>Vous êtes hôtelier ou pâtissier ?</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: K.ink2 }}>Ne jetez plus vos invendus, valorisez-les.</div>
        </div>
        <Icon name="chevR" size={20} stroke={2.2} style={{ color: K.goldDeep }} />
      </div>
    </div>
  );
}

// ── Search screen ─────────────────────────────────────────────
export function SearchScreen({ onOpen, mysteryVariant }) {
  const [q, setQ] = React.useState('');
  const cats = ['Tout', 'Hôtel Mystère', 'Buffets 5★', 'Pâtisseries', 'Près de moi'];
  const [cat, setCat] = React.useState('Tout');
  let results = ALL;
  if (cat === 'Hôtel Mystère') results = MYSTERY;
  else if (cat === 'Buffets 5★') results = DIAMOND;
  else if (cat === 'Pâtisseries') results = PASTRY;
  if (q) results = results.filter((o) => (o.teaser + (o.source || '')).toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 56px)' }}>
      <div style={{ padding: '0 18px 8px' }}>
        <h1 style={{ margin: '0 0 14px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, letterSpacing: -0.8, color: K.ink }}>Rechercher</h1>
        <div style={{ height: 50, borderRadius: 15, background: K.paper, border: `1px solid ${K.hair}`, display: 'flex', alignItems: 'center', gap: 10, padding: '0 15px' }}>
          <Icon name="search" size={20} stroke={2} style={{ color: K.muted }} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buffet, pâtisserie, hôtel…"
            style={{ border: 'none', outline: 'none', background: 'none', flex: 1, fontFamily: FONT_BODY, fontSize: 15, color: K.ink }} />
          {q && <button onClick={() => setQ('')} style={{ border: 'none', background: 'none', color: K.muted, cursor: 'pointer' }}><Icon name="x" size={18} /></button>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '12px 18px 14px' }} className="hscroll">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} style={{ flexShrink: 0, height: 36, padding: '0 16px', borderRadius: 99, cursor: 'pointer',
            border: `1px solid ${cat === c ? K.forest : K.hair}`, background: cat === c ? K.forest : K.paper,
            color: cat === c ? '#fff' : K.ink2, fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 13 }}>{c}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 13, padding: '0 18px 20px' }}>
        {results.map((o) => o.kind === 'mystery'
          ? <MysteryCard key={o.id} offer={o} variant={mysteryVariant} onOpen={onOpen} big />
          : <OfferCard key={o.id} offer={o} onOpen={onOpen} grid />)}
        {results.length === 0 && <div style={{ gridColumn: '1/3', textAlign: 'center', padding: 40, color: K.muted, fontFamily: FONT_BODY }}>Aucun résultat pour « {q} »</div>}
      </div>
    </div>
  );
}

// ── Offer detail ──────────────────────────────────────────────
function TopBar({ onBack, light = false, title, onShare }) {
  const c = light ? '#fff' : K.ink;
  const bg = light ? 'rgba(255,255,255,0.16)' : K.paper;
  const bd = light ? 'rgba(255,255,255,0.3)' : K.hair;
  const btn = { width: 40, height: 40, borderRadius: 12, border: `1px solid ${bd}`, background: bg, color: c,
    display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)' };
  return (
    <div style={{ position: 'absolute', top: 'max(env(safe-area-inset-top, 0px), 52px)', left: 0, right: 0, zIndex: 30, display: 'flex', alignItems: 'center',
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

const stepBtn = { width: 34, height: 34, borderRadius: '50%', border: 'none', background: K.cream, color: K.forest,
  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

export function DetailScreen({ offer, mysteryVariant, onBack, onOrder }) {
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
          : <FoodImg preset={offer.preset} img={offer.img} height={320} />}
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
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: SAFE_BOTTOM(14),
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

function Recap({ label, val }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontFamily: FONT_BODY, fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{label}</span>
      <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13.5, color: '#fff' }}>{val}</span>
    </div>
  );
}

export function PaymentScreen({ cart, onBack, onConfirm }) {
  const [pay, setPay] = React.useState('cash');
  const { offer, qty } = cart;
  const meals = offer.from * qty;
  const total = meals + DELIVERY_FEE;
  return (
    <div style={{ position: 'relative', paddingTop: 'max(env(safe-area-inset-top, 0px), 92px)', paddingBottom: 116, minHeight: '100%' }}>
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
          <InfoRow icon="pin" title="Francophonie, Niamey" sub="Près du grand rond-point" />
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
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: SAFE_BOTTOM(14),
        background: 'rgba(245,239,227,0.92)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${K.hair}` }}>
        <Btn kind="gold" size="lg" full icon="lock" onClick={() => onConfirm(cart, pay, total)}>
          Confirmer · {fcfa(total)}
        </Btn>
      </div>
    </div>
  );
}

// ── Confirmation ──────────────────────────────────────────────
function MiniStat({ icon, big, sub, tone, wash }) {
  return (
    <div style={{ flex: 1, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 16, padding: '13px 15px', display: 'flex', alignItems: 'center', gap: 11 }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: wash, color: tone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={19} stroke={2.2} />
      </div>
      <div>
        <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, color: K.ink, lineHeight: 1 }}>{big}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 10.5, color: K.muted }}>{sub}</div>
      </div>
    </div>
  );
}

export function ConfirmScreen({ cart, pay, total, onTrack, onHome }) {
  const { offer } = cart;
  const isMystery = offer.kind === 'mystery';
  const [revealed, setRevealed] = React.useState(!isMystery);
  const payLabel = (PAYMENTS.find((p) => p.id === pay) || {}).label || 'Espèces';
  const [orderNo] = React.useState(() => 'KN-' + Math.floor(2000 + Math.random() * 7999));
  return (
    <div style={{ minHeight: '100%', background: `linear-gradient(180deg, ${K.forest} 0%, ${K.forestDeep} 46%, ${K.cream} 46%, ${K.cream} 100%)`,
      paddingTop: 'max(env(safe-area-inset-top, 0px), 76px)', paddingBottom: 120, position: 'relative' }}>
      {/* success head */}
      <div style={{ textAlign: 'center', padding: '0 24px', color: '#fff' }}>
        <div className="kpop" style={{ width: 78, height: 78, borderRadius: '50%', margin: '0 auto 16px',
          background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: K.goldSoft, color: K.forest, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="check" size={32} stroke={3} />
          </div>
        </div>
        <h1 style={{ margin: '0 0 6px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 27, letterSpacing: -0.6 }}>Commande confirmée !</h1>
        <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>N° {orderNo} · {payLabel} · {fcfa(total)}</p>
      </div>

      {/* reveal / order card */}
      <div style={{ margin: '24px 18px 0' }}>
        <div style={{ background: K.paper, borderRadius: 24, overflow: 'hidden', border: `1px solid ${K.hair}`, boxShadow: '0 20px 40px rgba(12,52,38,0.18)' }}>
          {isMystery && (
            <div style={{ position: 'relative', height: 188, overflow: 'hidden' }}>
              {!revealed ? (
                <MysteryVisual variant="flou" height={188} big />
              ) : (
                <div className="kfade" style={{ position: 'absolute', inset: 0 }}>
                  <FoodImg preset="buffet" img={offer.revealImg} height={188} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(12,52,38,0.85))' }} />
                  <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 6 }}>
                      <Chip tone="gold" icon="star">5★ dévoilé</Chip>
                    </div>
                    <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 21, color: '#fff', letterSpacing: -0.4, lineHeight: 1.1 }}>{offer.reveal}</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: 'rgba(255,255,255,0.78)', marginTop: 2 }}>{offer.revealHint}</div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div style={{ padding: 18 }}>
            {isMystery && !revealed ? (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 4px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, color: K.ink }}>Votre hôtel mystère</h3>
                <p style={{ margin: '0 0 14px', fontFamily: FONT_BODY, fontSize: 12.5, color: K.muted }}>L’établissement 5★ qui a préparé votre commande.</p>
                <Btn kind="gold" size="md" full icon="sparkle" onClick={() => setRevealed(true)}>Dévoiler l’hôtel</Btn>
              </div>
            ) : (
              <div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 0.8, color: K.gold, textTransform: 'uppercase', marginBottom: 4 }}>{isMystery ? 'Préparé par' : offer.source}</div>
                <h3 style={{ margin: '0 0 12px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 18, color: K.ink }}>{offer.teaser}</h3>
                {/* tracking mini */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: K.cream, borderRadius: 14, padding: '12px 14px' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: K.forest, color: K.goldSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name="moto" size={24} stroke={2} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13.5, color: K.ink }}>Le livreur arrive</div>
                    <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>Estimation 25–35 min · suivi en direct</div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 12, color: K.fresh }}>
                    <span className="kdot" style={{ width: 7, height: 7, borderRadius: 9, background: K.fresh }} />En route
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* eco gain */}
        <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
          <MiniStat icon="leaf" big="1" sub="repas sauvé" tone={K.fresh} wash={K.freshWash} />
          <MiniStat icon="tag" big={`${Math.round((1 - offer.from / offer.original) * 100)}%`} sub="économisé" tone={K.amber} wash="#FBEDE2" />
        </div>
      </div>

      {/* actions */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: SAFE_BOTTOM(14),
        background: 'rgba(245,239,227,0.92)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${K.hair}`, display: 'flex', gap: 10 }}>
        <Btn kind="soft" size="lg" onClick={onHome} style={{ flexShrink: 0 }} icon="home"> </Btn>
        <Btn kind="primary" size="lg" full iconR="arrowR" onClick={onTrack}>Suivre la commande</Btn>
      </div>
    </div>
  );
}

// ── Profile ───────────────────────────────────────────────────
export function ProfileScreen({ onOpenOrder, onPartner }) {
  const menu = [
    { icon: 'pin', label: 'Mes adresses', sub: 'Francophonie · Bureau' },
    { icon: 'wallet', label: 'Moyens de paiement', sub: 'Wave, Airtel, Espèces' },
    { icon: 'diamond', label: 'Badge Diamant', sub: 'Accès premium activé', accent: K.gold },
    { icon: 'bell', label: 'Notifications', sub: 'Offres près de vous' },
    { icon: 'info', label: 'Aide & contact', sub: 'WhatsApp · 24/7' },
  ];
  return (
    <div style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 56px)', paddingBottom: 24 }}>
      {/* header */}
      <div style={{ padding: '0 18px 18px' }}>
        <h1 style={{ margin: '0 0 16px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, letterSpacing: -0.8, color: K.ink }}>Profil</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <div style={{ width: 58, height: 58, borderRadius: 18, background: `linear-gradient(140deg, ${K.forest}, ${K.forest2})`, color: K.goldSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24 }}>OC</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 19, color: K.ink }}>Omar Cherif</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 3, background: K.goldWash, padding: '3px 9px', borderRadius: 99 }}>
              <Icon name="diamond" size={13} stroke={2} style={{ color: K.goldDeep }} />
              <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11, color: K.goldDeep }}>Membre Diamant</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3E impact */}
      <div style={{ margin: '0 18px 22px', background: K.forest, borderRadius: 20, padding: '16px 18px', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
        {[['12', 'repas sauvés', 'leaf'], ['38 000', 'FCFA économisés', 'tag'], ['9 kg', 'CO₂ évité', 'sparkle']].map(([n, l, ic], i) => (
          <div key={l} style={{ flex: 1, textAlign: 'center', borderLeft: i ? '1px solid rgba(255,255,255,0.14)' : 'none' }}>
            <Icon name={ic} size={17} stroke={2} style={{ color: K.goldSoft, margin: '0 auto 5px' }} />
            <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 17, letterSpacing: -0.3 }}>{n}</div>
            <div style={{ fontFamily: FONT_BODY, fontSize: 9.5, color: 'rgba(255,255,255,0.65)' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* orders */}
      <div style={{ padding: '0 18px' }}>
        <SectionHead kicker="Historique" title="Mes commandes" accent={K.forest} icon="receipt" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
          {PAST_ORDERS.map((o) => (
            <div key={o.id} onClick={() => onOpenOrder(o)} style={{ display: 'flex', alignItems: 'center', gap: 13, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 16, padding: 11, cursor: 'pointer' }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><FoodImg preset={o.preset} img={o.img} height={52} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: K.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.title}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>{o.source} · {o.date}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 13, color: K.ink }}>{fcfa(o.total)}</div>
                <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 10, color: K.fresh }}>{o.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* menu */}
      <div style={{ padding: '0 18px' }}>
        <div style={{ background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 18, overflow: 'hidden' }}>
          {menu.map((m, i) => (
            <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '13px 15px', borderTop: i ? `1px solid ${K.hair}` : 'none', cursor: 'pointer' }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: K.cream, color: m.accent || K.forest, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={m.icon} size={19} stroke={2} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: 14, color: K.ink }}>{m.label}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: K.muted }}>{m.sub}</div>
              </div>
              <Icon name="chevR" size={18} stroke={2} style={{ color: K.muted }} />
            </div>
          ))}
        </div>
        <button onClick={onPartner} style={{ width: '100%', marginTop: 14, background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13, color: K.gold, padding: 8 }}>Devenir partenaire Kaani →</button>
      </div>
    </div>
  );
}

// ── B2B "Devenir Partenaire" ──────────────────────────────────
function Field({ label, placeholder, value, onChange, icon }) {
  return (
    <div>
      <label style={{ display: 'block', fontFamily: FONT_BODY, fontWeight: 600, fontSize: 11.5, color: K.ink2, marginBottom: 5 }}>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, height: 48, background: K.cream, border: `1px solid ${K.hair}`, borderRadius: 13, padding: '0 14px' }}>
        {icon && <Icon name={icon} size={18} stroke={2} style={{ color: K.muted }} />}
        <input value={value} onChange={onChange} placeholder={placeholder}
          style={{ border: 'none', outline: 'none', background: 'none', flex: 1, fontFamily: FONT_BODY, fontSize: 14.5, color: K.ink }} />
      </div>
    </div>
  );
}

export function PartnerScreen({ onBack, embedded = false }) {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', place: '', phone: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const ready = form.name && form.place && form.phone;

  const E = [
    { icon: 'leaf', t: 'Écologie', s: 'Réduisez vos déchets alimentaires', tone: K.fresh, wash: K.freshWash },
    { icon: 'tag', t: 'Économies', s: 'Transformez vos pertes en revenus', tone: K.amber, wash: '#FBEDE2' },
    { icon: 'sparkle', t: 'Plaisir', s: 'Faites rayonner votre cuisine', tone: K.gold, wash: K.goldWash },
  ];
  const steps = [
    ['Inscrivez votre établissement', 'Hôtel, restaurant ou pâtisserie — en 2 minutes.'],
    ['Publiez vos invendus du jour', 'Photo, quantité, créneau de retrait.'],
    ['On s’occupe de la livraison', 'Nos livreurs moto récupèrent et livrent.'],
  ];

  return (
    <div style={{ position: 'relative', paddingBottom: 30 }}>
      {!embedded && <TopBar onBack={onBack} light />}
      {/* hero */}
      <div style={{ position: 'relative',
        padding: `max(env(safe-area-inset-top, 0px), ${embedded ? 76 : 104}px) 22px 26px`, overflow: 'hidden',
        background: `linear-gradient(160deg, ${K.forest} 0%, ${K.forestDeep} 100%)` }}>
        <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(226,193,115,0.1)' }} />
        <span style={{ fontFamily: FONT_MONO, fontSize: 10.5, letterSpacing: 1.6, color: K.goldSoft, textTransform: 'uppercase' }}>Espace Partenaire · B2B</span>
        <h1 style={{ margin: '10px 0 12px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.8, color: '#fff' }}>
          Ne jetez plus vos invendus,<br /><span style={{ color: K.goldSoft }}>valorisez-les.</span>
        </h1>
        <p style={{ margin: '0 0 4px', fontFamily: FONT_BODY, fontSize: 13.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.74)', maxWidth: 300 }}>
          Rejoignez les hôtels, restaurants et pâtisseries de Niamey qui transforment leurs surplus en valeur.
        </p>
        <div style={{ display: 'flex', gap: 20, marginTop: 18 }}>
          {[['+40', 'partenaires'], ['12 000', 'repas sauvés'], ['4.9★', 'satisfaction']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: -0.4 }}>{n}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10.5, color: 'rgba(255,255,255,0.6)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3E */}
      <div style={{ padding: '22px 18px 0' }}>
        <SectionHead kicker="La règle des 3 E" title="Pourquoi Kaani ?" accent={K.gold} icon="sparkle" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {E.map((e) => (
            <div key={e.t} style={{ display: 'flex', alignItems: 'center', gap: 14, background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 18, padding: '14px 16px' }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: e.wash, color: e.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name={e.icon} size={24} stroke={2} />
              </div>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 16, color: K.ink }}>{e.t}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: K.ink2 }}>{e.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* how it works */}
      <div style={{ padding: '24px 18px 0' }}>
        <SectionHead kicker="Simple & rapide" title="Comment ça marche" accent={K.forest} icon="moto" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map(([t, s], i) => (
            <div key={t} style={{ display: 'flex', gap: 14, paddingBottom: i < 2 ? 18 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: K.forest, color: K.goldSoft, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 15, flexShrink: 0 }}>{i + 1}</div>
                {i < 2 && <div style={{ width: 2, flex: 1, background: K.hair, marginTop: 4 }} />}
              </div>
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 15, color: K.ink }}>{t}</div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: K.ink2, marginTop: 2 }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* form */}
      <div style={{ margin: '26px 18px 0', background: K.paper, border: `1px solid ${K.hair}`, borderRadius: 22, padding: 20 }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div className="kpop" style={{ width: 58, height: 58, borderRadius: '50%', margin: '0 auto 14px', background: K.freshWash, color: K.fresh, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="check" size={30} stroke={3} />
            </div>
            <h3 style={{ margin: '0 0 6px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 19, color: K.ink }}>Demande envoyée !</h3>
            <p style={{ margin: 0, fontFamily: FONT_BODY, fontSize: 13, color: K.muted }}>Notre équipe vous rappelle sous 24h, {form.name.split(' ')[0] || ''}.</p>
          </div>
        ) : (
          <>
            <h3 style={{ margin: '0 0 4px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 19, color: K.ink }}>Rejoindre Kaani</h3>
            <p style={{ margin: '0 0 16px', fontFamily: FONT_BODY, fontSize: 12.5, color: K.muted }}>Laissez vos coordonnées, on vous rappelle.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              <Field label="Votre nom" placeholder="Ex. Ibrahim Maïga" value={form.name} onChange={set('name')} />
              <Field label="Établissement" placeholder="Hôtel, restaurant, pâtisserie…" value={form.place} onChange={set('place')} />
              <Field label="Téléphone" placeholder="+227 90 00 00 00" value={form.phone} onChange={set('phone')} icon="phone" />
            </div>
            <div style={{ marginTop: 16 }}>
              <Btn kind="gold" size="lg" full icon="store" onClick={() => ready && setSent(true)} style={{ opacity: ready ? 1 : 0.55 }}>Devenir partenaire</Btn>
            </div>
            <button style={{ width: '100%', marginTop: 12, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13, color: K.forest }}>
              <Icon name="phone" size={16} stroke={2.2} />Ou appelez-nous directement
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Orders tab ────────────────────────────────────────────────
export function OrdersScreen() {
  return (
    <div style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 56px)', paddingBottom: 24 }}>
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
              <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><FoodImg preset={o.preset} img={o.img} height={52} /></div>
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
