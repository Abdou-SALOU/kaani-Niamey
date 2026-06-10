// ── Kaani · Screens 4 — B2B "Devenir Partenaire" ──────────────

function PartnerScreen({ onBack, embedded = false }) {
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
      <div style={{ position: 'relative', padding: (embedded ? '76px' : '104px') + ' 22px 26px', overflow: 'hidden',
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

Object.assign(window, { PartnerScreen, Field });
