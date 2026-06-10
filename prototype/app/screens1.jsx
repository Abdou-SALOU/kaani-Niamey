// ── Kaani · Screens 1 — Home / Discovery + Search ─────────────

// Mystery visual treatment (3 variants for the Tweaks exploration)
function MysteryVisual({ variant = 'flou', height = 186, big = false }) {
  const qSize = big ? 64 : 46;
  // shared corner marks
  if (variant === 'scelle') {
    return (
      <div style={{ position: 'relative', width: '100%', height, overflow: 'hidden',
        background: `linear-gradient(160deg, ${K.forest2}, ${K.forestDeep})` }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 12px)' }} />
        {/* perforation line */}
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 0, borderTop: '2px dashed rgba(226,193,115,0.4)' }} />
        {/* wax seal medallion */}
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
        {/* gold veil */}
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
  return (
    <div onClick={() => onOpen(offer)} style={{ width: big ? '100%' : 286, flexShrink: 0, cursor: 'pointer',
      background: K.paper, borderRadius: 22, overflow: 'hidden', border: `1px solid ${K.hair}`,
      boxShadow: '0 10px 26px rgba(20,40,30,0.08)' }}>
      <div style={{ position: 'relative' }}>
        <MysteryVisual variant={variant} height={big ? 210 : 178} big={big} />
        <div style={{ position: 'absolute', top: 11, left: 11 }}>
          <Chip tone="gold" icon="star">5★ Mystère</Chip>
        </div>
        <div style={{ position: 'absolute', top: 11, right: 11 }}>
          <Chip tone="eco" icon="leaf">Anti-gaspi</Chip>
        </div>
      </div>
      <div style={{ padding: 15 }}>
        <h3 style={{ margin: '0 0 5px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 17, letterSpacing: -0.3, color: K.ink }}>{offer.teaser}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 11, fontFamily: FONT_BODY, fontSize: 11.5, color: K.muted }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}><Icon name="clock" size={13} stroke={2} />{offer.window}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}><Icon name="pin" size={13} stroke={2} />{offer.dist} km</span>
        </div>
        <div style={{ marginBottom: 12 }}><Portions left={offer.portions} total={offer.total} /></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Price from={offer.from} original={offer.original} />
          <Btn kind="primary" size="sm" iconR="arrowR">Commander</Btn>
        </div>
      </div>
    </div>
  );
}

// compact card for diamond rail + pastry grid
function OfferCard({ offer, onOpen, grid = false }) {
  const isPastry = offer.kind === 'pastry';
  return (
    <div onClick={() => onOpen(offer)} style={{ width: grid ? '100%' : 200, flexShrink: 0, cursor: 'pointer',
      background: K.paper, borderRadius: 18, overflow: 'hidden', border: `1px solid ${K.hair}`,
      boxShadow: '0 6px 16px rgba(20,40,30,0.06)' }}>
      <div style={{ position: 'relative' }}>
        <FoodImg preset={offer.preset} height={grid ? 116 : 124} label={isPastry ? 'photo · dessert' : 'photo · buffet 5★'} />
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

function HomeHeader({ onSearch }) {
  return (
    <div style={{ padding: '52px 18px 16px', background: `linear-gradient(180deg, ${K.forest} 0%, ${K.forest} 62%, ${K.forest})`,
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
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 14, color: '#fff' }}>Niamey · Plateau</span>
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
const iconBtnGlass = { width: 40, height: 40, borderRadius: 12, border: '1px solid rgba(255,255,255,0.25)',
  background: 'rgba(255,255,255,0.12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

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

function HomeScreen({ onOpen, onSearch, onPartner, mysteryVariant }) {
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
function SearchScreen({ onOpen, mysteryVariant }) {
  const [q, setQ] = React.useState('');
  const cats = ['Tout', 'Hôtel Mystère', 'Buffets 5★', 'Pâtisseries', 'Près de moi'];
  const [cat, setCat] = React.useState('Tout');
  let results = ALL;
  if (cat === 'Hôtel Mystère') results = MYSTERY;
  else if (cat === 'Buffets 5★') results = DIAMOND;
  else if (cat === 'Pâtisseries') results = PASTRY;
  if (q) results = results.filter((o) => (o.teaser + (o.source || '')).toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ paddingTop: 56 }}>
      <div style={{ padding: '0 18px 8px' }}>
        <h1 style={{ margin: '0 0 14px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, letterSpacing: -0.8, color: K.ink }}>Rechercher</h1>
        <div style={{ height: 50, borderRadius: 15, background: K.paper, border: `1px solid ${K.hair}`, display: 'flex', alignItems: 'center', gap: 10, padding: '0 15px' }}>
          <Icon name="search" size={20} stroke={2} style={{ color: K.muted }} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buffet, pâtisserie, hôtel…"
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

Object.assign(window, { MysteryVisual, MysteryCard, OfferCard, HomeScreen, SearchScreen });
