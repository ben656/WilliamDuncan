import { useEffect, useState } from 'react'

const leftCredentials = [
  { label: 'Est.', value: '1924' },
  { label: 'Years', value: '100+' },
  { label: 'Clients', value: '500+' },
  { label: 'Generations', value: '3' },
]

const rightPillars = [
  'Partner-led service',
  'Chartered Accountants',
  'Tax & Wealth Planning',
  'Discreet Advisory',
  'UK-wide expertise',
]

const statements = [
  'Authentic relations, entrenched client support',
  'Dynamic solutions to every challenge faced',
  'Intrinsic and evolving advice tailored to our valued clients',
  'Over a century of trusted expertise',
  'Partner-led. Discreet. Results-driven.',
]

export default function Hero() {
  const [phase, setPhase] = useState(0)
  const [statIdx, setStatIdx] = useState(0)
  const [statVisible, setStatVisible] = useState(true)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setStatVisible(false)
      setTimeout(() => {
        setStatIdx(i => (i + 1) % statements.length)
        setStatVisible(true)
      }, 550)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#080e1a',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Shared background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 85% 75% at 50% 48%, rgba(198,167,94,0.07) 0%, transparent 70%)' }} />
      <div className="diamond-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.28, pointerEvents: 'none' }} />

      {/* ── Header bar ── */}
      <div
        style={{
          position: 'relative', zIndex: 20, flexShrink: 0,
          height: 'clamp(54px, 7vh, 80px)',
          background: 'rgba(8,14,26,0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center',
          padding: '0 clamp(14px, 3vw, 44px)', justifyContent: 'space-between',
        }}
      >
        <span
          className="font-serif"
          style={{ fontSize: 'clamp(9px, 1.3vw, 13px)', letterSpacing: '0.22em', color: phase >= 1 ? 'rgba(198,167,94,0.85)' : 'transparent', fontStyle: 'italic', whiteSpace: 'nowrap', transition: 'color 0.8s ease' }}
        >
          Trusted for over a century
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.7s ease 0.1s' }}>
          <a href="mailto:wmdadmin@williamduncan-ca.co.uk" title="Email" style={iconStyle} onMouseEnter={e => (e.currentTarget.style.color='#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color='rgba(229,228,226,0.7)')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" /></svg>
          </a>
          <div style={divider} />
          <a href="https://wa.me/441698283103" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={iconStyle} onMouseEnter={e => (e.currentTarget.style.color='#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color='rgba(229,228,226,0.7)')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          </a>
          <div style={divider} />
          <a href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT" target="_blank" rel="noopener noreferrer" title="Find us" style={iconStyle} onMouseEnter={e => (e.currentTarget.style.color='#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color='rgba(229,228,226,0.7)')}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
          </a>
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          flex: 1, position: 'relative', zIndex: 10, minHeight: 0,
          display: 'flex', alignItems: 'stretch',
          padding: 'clamp(6px, 1.2vh, 16px) clamp(8px, 2vw, 24px)',
          gap: 'clamp(6px, 1.5vw, 20px)',
        }}
      >
        {/* Left column — stats only */}
        <div
          className="hidden lg:flex flex-col items-center"
          style={{
            width: 'clamp(110px, 12vw, 170px)', flexShrink: 0,
            gap: 'clamp(6px, 1vh, 16px)', justifyContent: 'center',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          <img src="/Logo.jpg" alt="William Duncan" style={{ width: '100%', maxWidth: '130px', height: 'auto', borderRadius: '2px', opacity: 0.9, filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.7))' }} />
          <div style={hRule('right')} />
          {leftCredentials.map(({ label, value }) => (
            <div key={label} style={{ width: '100%' }}>
              <div className="font-sans font-light" style={{ fontSize: 'clamp(16px, 2vw, 28px)', color: 'rgba(198,167,94,0.82)', letterSpacing: '0.04em', lineHeight: 1 }}>{value}</div>
              <div className="font-sans" style={{ fontSize: 'clamp(5px, 0.6vw, 7px)', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(229,228,226,0.3)', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Centre — plaque */}
        <div
          style={{
            flex: 1, minWidth: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'scale(1)' : 'scale(0.97)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div
            className="plaque-mid-panel"
            style={{
              position: 'relative', width: '100%', height: '100%', borderRadius: '2px',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              padding: 'clamp(10px, 2vh, 40px) clamp(14px, 4vw, 56px)',
            }}
          >
            {/* Corner diamonds */}
            {corners.map((pos, i) => (
              <span key={i} style={{ position: 'absolute', ...pos, color: 'rgba(198,167,94,0.35)', fontSize: '7px', lineHeight: 1 }}>◆</span>
            ))}
            <div style={{ position: 'absolute', inset: '6px', border: '1px solid rgba(198,167,94,0.06)', borderRadius: '1px', pointerEvents: 'none' }} />

            {/* ── Gold italic labels inside plaque corners ── */}
            {/* Top-right */}
            <span
              className="font-serif"
              style={{
                position: 'absolute', top: 'clamp(14px, 2.5vh, 28px)', right: 'clamp(14px, 3vw, 32px)',
                fontSize: 'clamp(7px, 0.8vw, 10px)', letterSpacing: '0.18em',
                color: 'rgba(198,167,94,0.65)', fontStyle: 'italic',
                opacity: phase >= 3 ? 1 : 0, transition: 'opacity 1s ease 0.4s',
                zIndex: 2,
              }}
            >
              Authentic Relations
            </span>
            {/* Bottom-left */}
            <span
              className="font-serif"
              style={{
                position: 'absolute', bottom: 'clamp(14px, 2.5vh, 28px)', left: 'clamp(14px, 3vw, 32px)',
                fontSize: 'clamp(7px, 0.8vw, 10px)', letterSpacing: '0.18em',
                color: 'rgba(198,167,94,0.65)', fontStyle: 'italic',
                opacity: phase >= 3 ? 1 : 0, transition: 'opacity 1s ease 0.5s',
                zIndex: 2,
              }}
            >
              Trusted by clients for a century
            </span>

            {/* Plaque image area — Est. and subtitle hug it tightly */}
            <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

              {/* Est. 1924 — 2px above image */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', marginBottom: '2px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.32))' }} />
                <span className="font-sans font-light" style={{ fontSize: 'clamp(6px, 0.85vw, 10px)', letterSpacing: '0.42em', color: 'rgba(229,228,226,0.85)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Est. 1924</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.32))' }} />
              </div>

              {/* Plaque image */}
              <div style={{ position: 'relative', flex: 1, minHeight: 0, width: '100%', display: 'flex', alignItems: 'center' }}>
                <div style={{ position: 'absolute', inset: '-20px -30px', background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(198,167,94,0.11) 0%, rgba(198,167,94,0.03) 60%, transparent 100%)', pointerEvents: 'none', filter: 'blur(6px)' }} />
                <img
                  src="/Adobe_Express_-_file.png"
                  alt="William Duncan"
                  style={{
                    display: 'block', width: '100%', height: '100%', objectFit: 'contain',
                    position: 'relative', zIndex: 1,
                    filter: 'drop-shadow(0 1px 0 rgba(198,167,94,0.3)) drop-shadow(0 -1px 0 rgba(0,0,0,0.8)) drop-shadow(0 3px 14px rgba(0,0,0,0.75)) drop-shadow(0 0 22px rgba(198,167,94,0.10))',
                  }}
                />
              </div>

              {/* Subtitle — 2px below image */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', marginTop: '2px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.16))' }} />
                <p className="font-sans font-light" style={{ fontSize: 'clamp(0.38rem, 1vw, 0.62rem)', letterSpacing: '0.22em', color: 'rgba(229,228,226,0.85)', textTransform: 'uppercase', textAlign: 'center', margin: 0, whiteSpace: 'nowrap', textShadow: '0 1px 0 rgba(255,255,255,0.06), 0 -1px 0 rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)' }}>
                  Chartered Accountants · Business &amp; Tax Advisers
                </p>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.16))' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right column — pillars only */}
        <div
          className="hidden lg:flex flex-col"
          style={{
            width: 'clamp(110px, 12vw, 170px)', flexShrink: 0,
            gap: 'clamp(6px, 1vh, 14px)', justifyContent: 'center',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateX(0)' : 'translateX(16px)',
            transition: 'opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s',
          }}
        >
          <div style={hRule('left')} />
          {rightPillars.map((p) => (
            <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
              <span style={{ color: 'rgba(198,167,94,0.4)', fontSize: '5px', marginTop: '4px', flexShrink: 0 }}>◆</span>
              <span className="font-sans" style={{ fontSize: 'clamp(6px, 0.75vw, 9px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(229,228,226,0.5)', lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
          <div style={hRule('left')} />
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          position: 'relative', zIndex: 20, flexShrink: 0,
          height: 'clamp(48px, 6.5vh, 70px)',
          background: 'rgba(8,14,26,0.82)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center',
          padding: '0 clamp(14px, 3vw, 44px)', gap: '24px',
        }}
      >
        {/* Client guidance */}
        <a
          href="/wd-hub-client-alert.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans flex items-center gap-3 flex-shrink-0"
          style={{
            textDecoration: 'none',
            border: '1px solid rgba(140,31,46,0.38)', borderRadius: '2px',
            padding: '4px 12px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(140,31,46,0.72)'; el.style.background='rgba(140,31,46,0.05)' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor='rgba(140,31,46,0.38)'; el.style.background='transparent' }}
        >
          <span style={{ fontSize: '8px', letterSpacing: '0.28em', fontWeight: 500, color: 'rgba(229,228,226,0.55)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Client Guidance</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(229,228,226,0.45)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" />
          </svg>
          <span style={{ color: 'rgba(140,31,46,0.35)', fontSize: '6px' }}>◆</span>
          <span className="beacon-pulse" style={{ fontSize: '8px', letterSpacing: '0.22em', color: '#8c1f2e', fontWeight: 700, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>HMRC Enforcement Alert</span>
        </a>

        <div style={{ width: '1px', height: '18px', background: 'rgba(198,167,94,0.12)', flexShrink: 0 }} />

        {/* Rotating statement — right */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', overflow: 'hidden' }}>
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(0.55rem, 1.2vw, 0.75rem)', letterSpacing: '0.16em',
              color: 'rgba(198,167,94,0.72)', fontStyle: 'italic', margin: 0, whiteSpace: 'nowrap',
              opacity: statVisible ? 1 : 0, transition: 'opacity 0.55s ease',
            }}
          >
            {statements[statIdx]}
          </p>
        </div>
      </div>
    </div>
  )
}

const iconStyle: React.CSSProperties = {
  color: 'rgba(229,228,226,0.7)',
  transition: 'color 0.2s ease',
  display: 'flex',
}

const divider: React.CSSProperties = {
  width: '1px',
  height: '13px',
  background: 'rgba(229,228,226,0.13)',
}

function hRule(fade: 'left' | 'right'): React.CSSProperties {
  return {
    height: '1px',
    width: '100%',
    background: fade === 'right'
      ? 'linear-gradient(to right, rgba(198,167,94,0.28), transparent)'
      : 'linear-gradient(to left, rgba(198,167,94,0.28), transparent)',
  }
}

const corners = [
  { top: '9px', left: '9px' },
  { top: '9px', right: '9px' },
  { bottom: '9px', left: '9px' },
  { bottom: '9px', right: '9px' },
]
