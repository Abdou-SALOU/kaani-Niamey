// ── Kaani · Design System ─────────────────────────────────────
// Tokens, icon set, and shared atoms (ES module exports).
import React from 'react';

// Palette: deep eco green + 5★ gold/amber, warm cream paper, diamond silver.
export const K = {
  // greens
  forestDeep: '#0C3426',
  forest:     '#0E3B2C',
  forest2:    '#16533D',
  sage:       '#5E7A6B',
  // warm paper / ink
  cream:      '#F5EFE3',   // app background
  paper:      '#FFFFFF',
  paperWarm:  '#FCF8F0',
  ink:        '#1E1C16',
  ink2:       '#4A463B',
  muted:      '#8B8676',
  hair:       '#E9E2D2',   // hairlines on cream
  hairWarm:   '#EDE6D6',
  // gold / amber (the "5 étoiles")
  gold:       '#C79A3E',
  goldSoft:   '#E2C173',
  goldDeep:   '#9A7320',
  goldWash:   '#F7EEDA',
  amber:      '#D8742E',   // appetizing warm
  amberSoft:  '#F0C9A4',
  // diamond
  diamond:    '#7C8B95',
  diamondLt:  '#C7D0D6',
  diamondWash:'#EEF2F4',
  // status
  fresh:      '#3F8F5B',
  freshWash:  '#E6F0E7',
};

// canonical money fmt
export const fcfa = (n) => n.toLocaleString('fr-FR').replace(/[\u00a0\u202f]/g, ' ') + ' FCFA';

export const FONT_DISPLAY = "'Bricolage Grotesque', system-ui, sans-serif";
export const FONT_BODY = "'Plus Jakarta Sans', system-ui, sans-serif";
export const FONT_MONO = "'IBM Plex Mono', ui-monospace, monospace";

// ── Icons (24×24, stroke = currentColor) ──────────────────────
// `filled` fills the glyph with currentColor (heart/star « on » states).
export function Icon({ name, size = 22, stroke = 1.8, fill = 'none', filled = false, style = {} }) {
  const p = { fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    pin: <><path {...p} d="M12 21c4-4.5 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.5 7 11Z"/><circle {...p} cx="12" cy="10" r="2.4"/></>,
    search: <><circle {...p} cx="11" cy="11" r="6.5"/><path {...p} d="M20 20l-3.5-3.5"/></>,
    leaf: <><path {...p} d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14a6 6 0 0 1-1-1Z"/><path {...p} d="M9 16c2.5-3 5-4.5 8-5.5"/></>,
    diamond: <><path {...p} d="M6 4h12l3 5-9 11L3 9l3-5Z"/><path {...p} d="M3 9h18M9 4l-3 5 6 11 6-11-3-5"/></>,
    moto: <><circle {...p} cx="5.5" cy="17" r="2.5"/><circle {...p} cx="18.5" cy="17" r="2.5"/><path {...p} d="M5.5 17h6l3-6h3M11 17l3-6M14 8h3l1 3M8 8h4l2 3"/></>,
    clock: <><circle {...p} cx="12" cy="12" r="8"/><path {...p} d="M12 8v4l3 2"/></>,
    star: <path {...p} d="M12 4l2.3 4.8 5.2.7-3.8 3.6.9 5.1L12 15.8 7.4 18.2l.9-5.1L4.5 9.5l5.2-.7L12 4Z"/>,
    sparkle: <path {...p} d="M12 4c.6 3.5 1.5 4.4 5 5-3.5.6-4.4 1.5-5 5-.6-3.5-1.5-4.4-5-5 3.5-.6 4.4-1.5 5-5Z"/>,
    plus: <path {...p} d="M12 6v12M6 12h12"/>,
    minus: <path {...p} d="M6 12h12"/>,
    check: <path {...p} d="M5 12.5l4.5 4.5L19 7"/>,
    chevR: <path {...p} d="M9 5l7 7-7 7"/>,
    chevL: <path {...p} d="M15 5l-7 7 7 7"/>,
    chevD: <path {...p} d="M5 9l7 7 7-7"/>,
    x: <path {...p} d="M6 6l12 12M18 6L6 18"/>,
    home: <><path {...p} d="M4 11l8-6 8 6"/><path {...p} d="M6 10v9h12v-9"/></>,
    grid: <><rect {...p} x="4" y="4" width="7" height="7" rx="1.5"/><rect {...p} x="13" y="4" width="7" height="7" rx="1.5"/><rect {...p} x="4" y="13" width="7" height="7" rx="1.5"/><rect {...p} x="13" y="13" width="7" height="7" rx="1.5"/></>,
    receipt: <><path {...p} d="M6 3h12v18l-2.2-1.4L13.6 21 12 19.6 10.4 21 8.2 19.6 6 21V3Z"/><path {...p} d="M9 8h6M9 12h6"/></>,
    store: <><path {...p} d="M4 9l1.2-4h13.6L20 9M4 9v10h16V9M4 9h16M9 19v-5h6v5"/></>,
    user: <><circle {...p} cx="12" cy="8.5" r="3.5"/><path {...p} d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5"/></>,
    heart: <path {...p} d="M12 20S4 14.5 4 9.2A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.2C20 14.5 12 20 12 20Z"/>,
    shield: <><path {...p} d="M12 3l7 3v5c0 5-3.4 8.3-7 10-3.6-1.7-7-5-7-10V6l7-3Z"/><path {...p} d="M9 12l2 2 4-4"/></>,
    phone: <path {...p} d="M6 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4 6a2 2 0 0 1 2-2Z"/>,
    cash: <><rect {...p} x="3" y="6" width="18" height="12" rx="2"/><circle {...p} cx="12" cy="12" r="2.5"/><path {...p} d="M6 9.5v5M18 9.5v5"/></>,
    wallet: <><path {...p} d="M4 7h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/><circle cx="16" cy="13" r="1.3" fill="currentColor" stroke="none"/></>,
    info: <><circle {...p} cx="12" cy="12" r="8.5"/><path {...p} d="M12 11v5M12 8h.01"/></>,
    lock: <><rect {...p} x="5" y="10" width="14" height="10" rx="2"/><path {...p} d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    bag: <><path {...p} d="M6 8h12l-1 12H7L6 8Z"/><path {...p} d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    bell: <><path {...p} d="M6 9a6 6 0 0 1 12 0c0 5 1.5 6 1.5 6H4.5S6 14 6 9Z"/><path {...p} d="M10 19a2 2 0 0 0 4 0"/></>,
    arrowR: <path {...p} d="M5 12h14M13 6l6 6-6 6"/>,
    tag: <><path {...p} d="M3 12l9-9 9 9-9 9-9-9Z"/><circle cx="9" cy="9" r="1.4" fill="currentColor" stroke="none"/></>,
    flame: <path {...p} d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1-3 .3 1 1 1.5 1.5 1.5C10 7 11 5 12 3Z"/>,
    qmark: <><circle {...p} cx="12" cy="12" r="9"/><path {...p} d="M9.5 9.5a2.5 2.5 0 0 1 4 2c0 1.5-2 1.8-2 3.2M12 18h.01"/></>,
    crown: <path {...p} d="M4 8l3 3 5-6 5 6 3-3-1.5 10H5.5L4 8Z"/>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} style={{ display: 'block', flexShrink: 0, ...style }}>
      {paths[name] || null}
    </svg>
  );
}

// ── Food image placeholder ────────────────────────────────────
// Premium warm gradient + faint texture + discreet mono caption.
export const FOOD_PRESETS = {
  buffet:  ['#E9B872', '#C9772F', '#7A3B16'],
  buffet2: ['#E7C98A', '#B9802E', '#5E3A12'],
  pastry:  ['#F2D0C0', '#D98E84', '#8A4A53'],
  pastry2: ['#F4E0C2', '#D9A65E', '#8A5A2A'],
  green:   ['#A9C39A', '#5E8A5E', '#2E5238'],
  mystery: ['#26483A', '#0E3B2C', '#06231A'],
};
export function FoodImg({ preset = 'buffet', img, label, blur = 0, round = 0, height = '100%', children, style = {} }) {
  const [a, b, c] = FOOD_PRESETS[preset] || FOOD_PRESETS.buffet;
  // Real photo (served from /public). The gradient stays behind it as a graceful
  // fallback while it loads or if it ever fails.
  const src = img ? import.meta.env.BASE_URL + img : null;
  return (
    <div style={{
      position: 'relative', width: '100%', height, borderRadius: round, overflow: 'hidden',
      background: `radial-gradient(120% 90% at 25% 18%, ${a} 0%, ${b} 48%, ${c} 100%)`,
      ...style,
    }}>
      {src && (
        <img src={src} alt={label || ''} loading="lazy" decoding="async"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', filter: blur ? `blur(${blur}px)` : 'none' }} />
      )}
      {/* faint placeholder texture */}
      <div style={{ position: 'absolute', inset: 0, filter: blur ? `blur(${blur}px)` : 'none',
        background: 'repeating-linear-gradient(125deg, rgba(255,255,255,0.06) 0 2px, transparent 2px 16px)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 60% at 70% 80%, rgba(0,0,0,0.22), transparent 60%)' }} />
      {label && (
        <div style={{ position: 'absolute', left: 10, bottom: 9, fontFamily: FONT_MONO, fontSize: 9.5,
          letterSpacing: 0.4, color: 'rgba(255,255,255,0.82)', textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: 5 }}>
          <span style={{ width: 5, height: 5, borderRadius: 9, background: 'rgba(255,255,255,0.7)' }} />{label}
        </div>
      )}
      {children}
    </div>
  );
}

// ── Atoms ─────────────────────────────────────────────────────
export function Chip({ icon, children, tone = 'cream', style = {} }) {
  const tones = {
    cream:   { bg: 'rgba(255,255,255,0.9)', fg: K.ink2, bd: K.hair },
    eco:     { bg: K.freshWash, fg: K.fresh, bd: 'transparent' },
    gold:    { bg: K.goldWash, fg: K.goldDeep, bd: 'transparent' },
    glass:   { bg: 'rgba(255,255,255,0.18)', fg: '#fff', bd: 'rgba(255,255,255,0.34)' },
    dark:    { bg: 'rgba(12,52,38,0.9)', fg: '#fff', bd: 'transparent' },
  };
  const t = tones[tone] || tones.cream;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 24, padding: '0 9px',
      borderRadius: 99, background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      fontFamily: FONT_BODY, fontWeight: 600, fontSize: 11.5, letterSpacing: 0.1, ...style }}>
      {icon && <Icon name={icon} size={13} stroke={2.2} />}{children}
    </span>
  );
}

export function Btn({ children, kind = 'primary', icon, iconR, full, size = 'md', onClick, style = {} }) {
  const sizes = { sm: { h: 38, fs: 13.5, px: 16 }, md: { h: 52, fs: 16, px: 22 }, lg: { h: 58, fs: 17, px: 24 } };
  const s = sizes[size];
  const kinds = {
    primary: { background: K.forest, color: '#fff', border: 'none', boxShadow: '0 8px 20px rgba(12,52,38,0.26)' },
    gold:    { background: `linear-gradient(120deg, ${K.goldSoft}, ${K.gold} 60%, ${K.goldDeep})`, color: '#3A2A06', border: 'none', boxShadow: '0 8px 20px rgba(154,115,32,0.3)' },
    amber:   { background: K.amber, color: '#fff', border: 'none', boxShadow: '0 8px 20px rgba(216,116,46,0.28)' },
    ghost:   { background: 'transparent', color: K.forest, border: `1.5px solid ${K.forest}`, boxShadow: 'none' },
    soft:    { background: K.paper, color: K.ink, border: `1px solid ${K.hair}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
    glass:   { background: 'rgba(255,255,255,0.16)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' },
  };
  return (
    <button onClick={onClick} style={{
      height: s.h, width: full ? '100%' : 'auto', padding: `0 ${s.px}px`, borderRadius: 99,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
      fontFamily: FONT_DISPLAY, fontWeight: 600, fontSize: s.fs, letterSpacing: 0.1, cursor: 'pointer',
      transition: 'transform .12s ease, filter .12s ease', ...kinds[kind], ...style }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
      onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
      {icon && <Icon name={icon} size={s.fs + 3} stroke={2.1} />}
      {children}
      {iconR && <Icon name={iconR} size={s.fs + 3} stroke={2.1} />}
    </button>
  );
}

// portions-left meter
export function Portions({ left, total = 12, dark = false }) {
  const pct = Math.max(0.08, left / total);
  const low = left <= 3;
  const track = dark ? 'rgba(255,255,255,0.2)' : K.hair;
  const fill = low ? K.amber : K.fresh;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
      <div style={{ flex: 1, height: 5, borderRadius: 9, background: track, overflow: 'hidden' }}>
        <div style={{ width: `${pct * 100}%`, height: '100%', borderRadius: 9, background: fill }} />
      </div>
      <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11, color: low ? K.amber : (dark ? 'rgba(255,255,255,0.85)' : K.ink2), whiteSpace: 'nowrap' }}>
        {left} {left > 1 ? 'restants' : 'restant'}
      </span>
    </div>
  );
}

// price block "À partir de 1 000 FCFA" + struck original
export function Price({ from, original, size = 'md', light = false }) {
  const big = size === 'lg' ? 26 : size === 'sm' ? 17 : 21;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      <span style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 9.5, letterSpacing: 0.3,
        color: light ? 'rgba(255,255,255,0.7)' : K.muted, textTransform: 'uppercase' }}>À partir de</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
        <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: big, lineHeight: 1, color: light ? '#fff' : K.ink, letterSpacing: -0.4 }}>
          {from.toLocaleString('fr-FR')}<span style={{ fontSize: big * 0.5, fontWeight: 600, marginLeft: 2 }}>FCFA</span>
        </span>
        {original && <span style={{ fontFamily: FONT_BODY, fontSize: 12.5, color: light ? 'rgba(255,255,255,0.55)' : K.muted, textDecoration: 'line-through' }}>{original.toLocaleString('fr-FR')}</span>}
      </div>
    </div>
  );
}

// section header with optional action
export function SectionHead({ kicker, title, action, onAction, icon, accent = K.gold }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 2px', marginBottom: 13 }}>
      <div>
        {kicker && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            {icon && <Icon name={icon} size={14} stroke={2.2} style={{ color: accent }} />}
            <span style={{ fontFamily: FONT_MONO, fontSize: 10, letterSpacing: 1.4, textTransform: 'uppercase', color: accent, fontWeight: 500 }}>{kicker}</span>
          </div>
        )}
        <h2 style={{ margin: 0, fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 22, letterSpacing: -0.5, color: K.ink, lineHeight: 1.05 }}>{title}</h2>
      </div>
      {action && (
        <button onClick={onAction} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
          display: 'flex', alignItems: 'center', gap: 3, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13, color: K.forest }}>
          {action}<Icon name="chevR" size={14} stroke={2.4} />
        </button>
      )}
    </div>
  );
}

// little wordmark
export function Wordmark({ size = 26, light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
      <div style={{ width: size + 6, height: size + 6, borderRadius: '50% 50% 50% 4px', background: light ? 'rgba(255,255,255,0.16)' : K.forest,
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: light ? '#fff' : K.goldSoft, border: light ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
        <Icon name="leaf" size={size * 0.62} stroke={2} />
      </div>
      <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: size, letterSpacing: -0.6, color: light ? '#fff' : K.ink }}>
        Kaani
      </span>
    </div>
  );
}
