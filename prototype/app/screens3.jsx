// ── Kaani · Screens 3 — Confirmation / Profile / B2B ──────────

function ConfirmScreen({ cart, pay, total, onTrack, onHome }) {
  const { offer } = cart;
  const isMystery = offer.kind === 'mystery';
  const [revealed, setRevealed] = React.useState(!isMystery);
  const payLabel = (PAYMENTS.find((p) => p.id === pay) || {}).label || 'Espèces';
  const [orderNo] = React.useState(() => 'KN-' + Math.floor(2000 + Math.random() * 7999));
  return (
    <div style={{ minHeight: '100%', background: `linear-gradient(180deg, ${K.forest} 0%, ${K.forestDeep} 46%, ${K.cream} 46%, ${K.cream} 100%)`,
      paddingTop: 76, paddingBottom: 120, position: 'relative' }}>
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
                  <FoodImg preset="buffet" height={188} label="photo · buffet du partenaire" />
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
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px 14px',
        background: 'rgba(245,239,227,0.92)', backdropFilter: 'blur(12px)', borderTop: `1px solid ${K.hair}`, display: 'flex', gap: 10 }}>
        <Btn kind="soft" size="lg" onClick={onHome} style={{ flexShrink: 0 }} icon="home"> </Btn>
        <Btn kind="primary" size="lg" full iconR="arrowR" onClick={onTrack}>Suivre la commande</Btn>
      </div>
    </div>
  );
}
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

// ── Profile ───────────────────────────────────────────────────
function ProfileScreen({ onOpenOrder, onPartner }) {
  const menu = [
    { icon: 'pin', label: 'Mes adresses', sub: 'Plateau · Bureau' },
    { icon: 'wallet', label: 'Moyens de paiement', sub: 'Wave, Airtel, Espèces' },
    { icon: 'diamond', label: 'Badge Diamant', sub: 'Accès premium activé', accent: K.gold },
    { icon: 'bell', label: 'Notifications', sub: 'Offres près de vous' },
    { icon: 'info', label: 'Aide & contact', sub: 'WhatsApp · 24/7' },
  ];
  return (
    <div style={{ paddingTop: 56, paddingBottom: 24 }}>
      {/* header */}
      <div style={{ padding: '0 18px 18px' }}>
        <h1 style={{ margin: '0 0 16px', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 30, letterSpacing: -0.8, color: K.ink }}>Profil</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <div style={{ width: 58, height: 58, borderRadius: 18, background: `linear-gradient(140deg, ${K.forest}, ${K.forest2})`, color: K.goldSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 24 }}>AD</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: 19, color: K.ink }}>Aïssa Diallo</div>
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
              <div style={{ width: 52, height: 52, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}><FoodImg preset={o.preset} height={52} /></div>
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

Object.assign(window, { ConfirmScreen, MiniStat, ProfileScreen });
