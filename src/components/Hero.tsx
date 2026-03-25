import { useEffect, useState } from 'react'

const tickerItems = [
  'Making Tax Digital — ensure your VAT records are fully compliant before the next filing deadline',
  'Self Assessment 2024/25 — early preparation avoids January penalties and maximises relief claims',
  'R&D Tax Credits — many SMEs are still unaware they qualify; speak to us about your eligibility',
  'Corporation Tax Rate — confirm your marginal rate applies correctly if profits span the £50k–£250k band',
  'Capital Gains Planning — use your annual exemption before 5 April to reduce liability',
  'Dividend Strategy — review your salary/dividend mix ahead of the new tax year',
  'Business Succession — early planning protects value and reduces inheritance tax exposure',
  'Pension Contributions — utilise carry-forward allowances before the annual allowance resets',
]

const pillars = ['Authentic Support', 'Dynamic Solutions', 'Evolutionary Advice']

export default function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1300),
      setTimeout(() => setPhase(5), 1600),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(198,167,94,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 diamond-pattern" style={{ opacity: 0.4 }} />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(7,15,26,0.2) 0%, transparent 40%, rgba(7,15,26,0.85) 100%)',
        }}
      />

      {/* Header bar */}
      <div
        className="absolute left-0 right-0 top-0 z-20"
        style={{
          height: '80px',
          background: 'rgba(6,10,22,0.55)',
          borderBottom: '1px solid rgba(198,167,94,0.14)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Client Guidance download — top left */}
      <div
        className="absolute top-0 left-0 z-30 flex items-center"
        style={{
          height: '80px',
          paddingLeft: 'clamp(16px, 3vw, 40px)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <a
          href="/client-guidance.pdf"
          download
          title="Download Client Guidance"
          className="flex items-center gap-2 group"
          style={{ textDecoration: 'none' }}
        >
          <svg
            width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
            style={{ color: 'rgba(198,167,94,0.7)', flexShrink: 0, transition: 'color 0.2s ease' }}
            className="group-hover:stroke-gold"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span
            className="font-sans font-light whitespace-nowrap"
            style={{
              fontSize: '9px',
              letterSpacing: '0.28em',
              color: 'rgba(198,167,94,0.75)',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(198,167,94,0.75)')}
          >
            Client Guidance
          </span>
        </a>
      </div>

      {/* Contact icons — top right */}
      <div
        className="absolute top-0 right-0 z-30 flex items-center"
        style={{
          height: '80px',
          paddingRight: 'clamp(16px, 3vw, 40px)',
          gap: '20px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
      >
        <a
          href="mailto:wmdadmin@williamduncan-ca.co.uk"
          title="Email us"
          style={{ color: 'rgba(229,228,226,0.55)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.55)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
          </svg>
        </a>

        <div style={{ width: '1px', height: '14px', background: 'rgba(229,228,226,0.15)' }} />

        <a
          href="https://wa.me/441698283103"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          style={{ color: 'rgba(229,228,226,0.55)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.55)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <div style={{ width: '1px', height: '14px', background: 'rgba(229,228,226,0.15)' }} />

        <a
          href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT"
          target="_blank"
          rel="noopener noreferrer"
          title="Find us"
          style={{ color: 'rgba(229,228,226,0.55)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.55)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </a>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6"
        style={{ paddingTop: '80px' }}
      >

        {/* Plaque */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
            marginBottom: '44px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '3px',
            padding: 'clamp(28px, 4vw, 48px) clamp(32px, 6vw, 72px)',
            background: 'linear-gradient(160deg, rgba(14,20,36,0.97) 0%, rgba(10,15,28,0.99) 50%, rgba(16,22,38,0.97) 100%)',
            boxShadow: '0 8px 48px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(198,167,94,0.18), inset 0 -1px 0 rgba(198,167,94,0.08)',
            border: '1px solid rgba(198,167,94,0.22)',
          }}
        >
          {/* Inner inset border */}
          <div style={{
            position: 'absolute',
            inset: '5px',
            border: '1px solid rgba(198,167,94,0.10)',
            borderRadius: '2px',
            pointerEvents: 'none',
          }} />

          {/* Corner ornaments */}
          {[
            { top: '10px', left: '10px' },
            { top: '10px', right: '10px' },
            { bottom: '10px', left: '10px' },
            { bottom: '10px', right: '10px' },
          ].map((pos, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                ...pos,
                color: 'rgba(198,167,94,0.35)',
                fontSize: '7px',
                lineHeight: 1,
              }}
            >◆</span>
          ))}

          {/* Shine sweep — once on load */}
          <div
            className="plaque-shine-sweep"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '40%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 40%, rgba(198,167,94,0.12) 50%, rgba(255,255,255,0.06) 60%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Shine loop */}
          <div
            className="plaque-shine-loop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '40%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 40%, rgba(198,167,94,0.10) 50%, rgba(255,255,255,0.05) 60%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />

          {/* Eyebrow */}
          <div className="flex items-center gap-3 justify-center" style={{ marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.5))' }} />
            <span
              className="font-sans font-light"
              style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(198,167,94,0.7)', textTransform: 'uppercase' }}
            >
              A Century of Trusted Expertise
            </span>
            <div style={{ width: '36px', height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.5))' }} />
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.2), transparent)', marginBottom: '24px' }} />

          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <img
              src="/Adobe_Express_-_file.png"
              alt="William Duncan"
              style={{
                height: 'clamp(80px, 14vw, 180px)',
                filter: 'drop-shadow(0 2px 16px rgba(0,0,0,0.6)) drop-shadow(0 4px 24px rgba(0,0,0,0.4))',
              }}
            />
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.2), transparent)', marginBottom: '18px' }} />

          {/* Subtitle row — with Est 1924 bottom-right */}
          <div style={{ position: 'relative' }}>
            <p
              className="font-sans font-light"
              style={{
                fontSize: 'clamp(0.65rem, 1.6vw, 0.95rem)',
                letterSpacing: '0.22em',
                color: '#C6A75E',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Chartered Accountants, Business &amp; Tax Advisers
            </p>

            {/* Est 1924 — bottom-right, under 'Advisers' */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '100%',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <div style={{ width: '16px', height: '1px', background: 'rgba(229,228,226,0.22)' }} />
              <span
                className="font-sans font-light"
                style={{
                  fontSize: '8px',
                  letterSpacing: '0.32em',
                  color: 'rgba(229,228,226,0.55)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Est&nbsp;1924
              </span>
            </div>
          </div>

          {/* Spacer for the Est 1924 that sits below the subtitle line */}
          <div style={{ height: '28px' }} />
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: phase >= 3 ? 'clamp(60px, 10vw, 120px)' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.65), transparent)',
            transition: 'width 0.8s ease 0.1s',
            marginBottom: '36px',
          }}
        />

        {/* Hero headline */}
        <div
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            marginBottom: '22px',
          }}
        >
          <p
            className="font-sans font-light"
            style={{
              fontSize: 'clamp(0.7rem, 2vw, 1.05rem)',
              letterSpacing: 'clamp(0.14em, 1vw, 0.28em)',
              color: 'rgba(160,192,220,0.82)',
              textTransform: 'uppercase',
              fontWeight: 300,
            }}
          >
            Partner Led Professional Services
          </p>
        </div>

        {/* Three pillars */}
        <div
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transform: phase >= 5 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {pillars.map((label, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="font-sans font-light"
                style={{
                  fontSize: 'clamp(0.5rem, 1.2vw, 0.66rem)',
                  letterSpacing: 'clamp(0.1em, 0.7vw, 0.2em)',
                  color: 'rgba(160,192,220,0.55)',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                }}
              >
                {label}
              </span>
              {i < pillars.length - 1 && (
                <span
                  style={{
                    margin: '0 clamp(10px, 2vw, 20px)',
                    color: 'rgba(198,167,94,0.4)',
                    fontSize: '5px',
                  }}
                >
                  ◆
                </span>
              )}
            </span>
          ))}
        </div>

      </div>

      {/* Bottom ticker bar */}
      <div
        className="relative z-20 w-full overflow-hidden"
        style={{
          borderTop: '1px solid rgba(198,167,94,0.12)',
          background: 'rgba(6,10,22,0.6)',
          backdropFilter: 'blur(8px)',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          opacity: phase >= 5 ? 1 : 0,
          transition: 'opacity 0.7s ease 0.8s',
        }}
      >
        {/* Scrolling track — full width */}
        <div className="flex-1 overflow-hidden relative">
          {/* Fade edges */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '48px',
            background: 'linear-gradient(to right, rgba(6,10,22,0.9), transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '48px',
            background: 'linear-gradient(to left, rgba(6,10,22,0.9), transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />

          <div className="animate-marquee flex items-center whitespace-nowrap" style={{ height: '48px' }}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span
                  className="font-sans font-light"
                  style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(229,228,226,0.62)' }}
                >
                  {item}
                </span>
                <span style={{ margin: '0 32px', color: 'rgba(198,167,94,0.4)', fontSize: '6px' }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
