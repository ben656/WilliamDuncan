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

export default function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 1800),
      setTimeout(() => setPhase(4), 2600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        background: '#080e1a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 85% 70% at 50% 50%, rgba(198,167,94,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="absolute inset-0 diamond-pattern" style={{ opacity: 0.3, pointerEvents: 'none' }} />

      {/* Header bar */}
      <div
        style={{
          position: 'absolute', left: 0, right: 0, top: 0, zIndex: 20,
          height: '72px',
          background: 'rgba(8,14,26,0.97)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(198,167,94,0.08)',
        }}
      />

      {/* Top left — tagline */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, zIndex: 30,
          height: '72px',
          paddingLeft: 'clamp(12px, 3vw, 40px)',
          display: 'flex', alignItems: 'center',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <span
          className="font-serif"
          style={{ fontSize: 'clamp(10px, 1.6vw, 13px)', letterSpacing: '0.22em', color: 'rgba(198,167,94,0.85)', fontStyle: 'italic', whiteSpace: 'nowrap' }}
        >
          Trusted for over a century
        </span>
      </div>

      {/* Top right — contact icons */}
      <div
        style={{
          position: 'absolute', top: 0, right: 0, zIndex: 30,
          height: '72px',
          paddingRight: 'clamp(12px, 3vw, 40px)',
          display: 'flex', alignItems: 'center', gap: '14px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
      >
        <a href="mailto:wmdadmin@williamduncan-ca.co.uk" title="Email us" style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }} onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" /></svg>
        </a>
        <div style={{ width: '1px', height: '14px', background: 'rgba(229,228,226,0.15)' }} />
        <a href="https://wa.me/441698283103" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }} onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </a>
        <div style={{ width: '1px', height: '14px', background: 'rgba(229,228,226,0.15)' }} />
        <a href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT" target="_blank" rel="noopener noreferrer" title="Find us" style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }} onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
        </a>
      </div>

      {/* Main content area — fills remaining height */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          flex: 1,
          paddingTop: '72px',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '16px clamp(8px, 2vw, 24px)',
            gap: 'clamp(8px, 2vw, 24px)',
          }}
        >

          {/* Left column — logo + stats */}
          <div
            className="hidden lg:flex flex-col items-center"
            style={{
              width: 'clamp(120px, 13vw, 180px)',
              flexShrink: 0,
              gap: 'clamp(8px, 1.2vh, 20px)',
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
              alignSelf: 'center',
            }}
          >
            <img
              src="/Logo.jpg"
              alt="William Duncan"
              style={{ width: '100%', maxWidth: '140px', height: 'auto', borderRadius: '2px', opacity: 0.92, filter: 'drop-shadow(0 4px 18px rgba(0,0,0,0.7))' }}
            />
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, rgba(198,167,94,0.3), transparent)' }} />
            <span className="font-serif text-center" style={{ fontSize: 'clamp(8px, 0.9vw, 11px)', letterSpacing: '0.16em', color: 'rgba(198,167,94,0.72)', fontStyle: 'italic', lineHeight: 1.6 }}>
              Trusted by clients<br />for a century
            </span>
            <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, rgba(198,167,94,0.3), transparent)' }} />
            {leftCredentials.map(({ label, value }) => (
              <div key={label} style={{ width: '100%' }}>
                <div className="font-sans font-light" style={{ fontSize: 'clamp(18px, 2.2vw, 30px)', color: 'rgba(198,167,94,0.85)', letterSpacing: '0.04em', lineHeight: 1 }}>{value}</div>
                <div className="font-sans" style={{ fontSize: 'clamp(6px, 0.7vw, 8px)', letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(229,228,226,0.35)', marginTop: '3px' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Centre — plaque, fills all available height */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 0,
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
              transition: 'opacity 1s ease, transform 1s ease',
              height: '100%',
            }}
          >
            <div
              className="plaque-mid-panel"
              style={{
                position: 'relative',
                borderRadius: '2px',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(16px, 3vh, 48px) clamp(16px, 4vw, 60px)',
              }}
            >
              {[
                { top: '10px', left: '10px' },
                { top: '10px', right: '10px' },
                { bottom: '10px', left: '10px' },
                { bottom: '10px', right: '10px' },
              ].map((pos, i) => (
                <span key={i} style={{ position: 'absolute', ...pos, color: 'rgba(198,167,94,0.40)', fontSize: '7px', lineHeight: 1 }}>◆</span>
              ))}
              <div style={{ position: 'absolute', inset: '6px', border: '1px solid rgba(198,167,94,0.07)', borderRadius: '1px', pointerEvents: 'none' }} />

              {/* Est. row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 'clamp(12px, 2vh, 28px)' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.35))' }} />
                <span className="font-sans font-light" style={{ fontSize: 'clamp(7px, 1vw, 10px)', letterSpacing: '0.42em', color: 'rgba(229,228,226,0.88)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Est. 1924</span>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.35))' }} />
              </div>

              {/* Plaque image */}
              <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', minHeight: 0 }}>
                <div style={{
                  position: 'absolute', inset: '-20px -30px',
                  background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(198,167,94,0.12) 0%, rgba(198,167,94,0.03) 60%, transparent 100%)',
                  pointerEvents: 'none', filter: 'blur(6px)',
                }} />
                <img
                  src="/Adobe_Express_-_file.png"
                  alt="William Duncan"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'relative', zIndex: 1,
                    filter: [
                      'drop-shadow(0 1px 0 rgba(198,167,94,0.3))',
                      'drop-shadow(0 -1px 0 rgba(0,0,0,0.8))',
                      'drop-shadow(0 3px 14px rgba(0,0,0,0.75))',
                      'drop-shadow(0 0 22px rgba(198,167,94,0.10))',
                    ].join(' '),
                  }}
                />
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.3), transparent)', margin: 'clamp(10px, 1.5vh, 22px) 0' }} />

              {/* Subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.18))' }} />
                <p className="font-sans font-light" style={{ fontSize: 'clamp(0.42rem, 1.1vw, 0.65rem)', letterSpacing: '0.22em', color: 'rgba(229,228,226,0.88)', textTransform: 'uppercase', textAlign: 'center', margin: 0, whiteSpace: 'nowrap', textShadow: '0 1px 0 rgba(255,255,255,0.08), 0 -1px 0 rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)' }}>
                  Chartered Accountants · Business &amp; Tax Advisers
                </p>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.18))' }} />
              </div>
            </div>
          </div>

          {/* Right column — pillars */}
          <div
            className="hidden lg:flex flex-col"
            style={{
              width: 'clamp(120px, 13vw, 180px)',
              flexShrink: 0,
              gap: 'clamp(8px, 1.2vh, 18px)',
              opacity: phase >= 3 ? 1 : 0,
              transform: phase >= 3 ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.9s ease, transform 0.9s ease',
              alignSelf: 'center',
            }}
          >
            <span className="font-serif" style={{ fontSize: 'clamp(8px, 0.9vw, 11px)', letterSpacing: '0.18em', color: 'rgba(198,167,94,0.72)', fontStyle: 'italic' }}>Authentic Relations</span>
            <div style={{ height: '1px', background: 'linear-gradient(to left, rgba(198,167,94,0.3), transparent)' }} />
            {rightPillars.map((pillar) => (
              <div key={pillar} className="flex items-start gap-2">
                <span style={{ color: 'rgba(198,167,94,0.45)', fontSize: '6px', marginTop: '4px', flexShrink: 0 }}>◆</span>
                <span className="font-sans" style={{ fontSize: 'clamp(7px, 0.85vw, 10px)', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(229,228,226,0.55)', lineHeight: 1.5 }}>{pillar}</span>
              </div>
            ))}
            <div style={{ height: '1px', background: 'linear-gradient(to left, rgba(198,167,94,0.3), transparent)' }} />
            <span className="font-serif" style={{ fontSize: 'clamp(8px, 0.9vw, 11px)', letterSpacing: '0.18em', color: 'rgba(198,167,94,0.72)', fontStyle: 'italic' }}>Dynamic Solutions</span>
          </div>

        </div>
      </div>
    </section>
  )
}
