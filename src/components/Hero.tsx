import { useEffect, useState } from 'react'

const tickerItems = [
  { text: 'MTD for Income Tax — mandatory from April 2026. Non-compliance carries automatic penalties with no grace period. Are you ready?', cta: true },
  { text: 'Quarterly digital submissions replace your annual Self Assessment return. Miss a single deadline and penalty points accumulate rapidly.', cta: true },
  { text: 'MTD for ITSA applies to sole traders and landlords earning over £50,000 from April 2026 — and drops to £30,000 twelve months later.' },
  { text: 'Compatible software is now a legal requirement under MTD. Spreadsheets alone will no longer satisfy HMRC\'s digital records mandate.', cta: true },
  { text: 'Penalty points under the new MTD regime do not reset automatically — accumulated points lead to fixed financial penalties and potential investigation.' },
  { text: 'HMRC have confirmed there will be no further MTD deferrals. The clock is running. Unprepared businesses face compounding compliance risk.', cta: true },
  { text: 'MTD affects your bookkeeping, your software, your accountant relationship, and your cash flow cycle — all simultaneously. Act now.' },
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
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(198,167,94,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 diamond-pattern" style={{ opacity: 0.4 }} />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(17,16,9,0.2) 0%, transparent 40%, rgba(17,16,9,0.85) 100%)',
        }}
      />

      {/* Header bar */}
      <div
        className="absolute left-0 right-0 top-0 z-20"
        style={{
          height: '80px',
          background: 'rgba(14,12,8,0.55)',
          borderBottom: '1px solid rgba(198,167,94,0.14)',
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Client Guidance download — top left */}
      <div
        className="absolute top-0 left-0 z-30 flex items-center"
        style={{
          height: '80px',
          paddingLeft: 'clamp(12px, 3vw, 40px)',
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
            style={{ color: 'rgba(229,228,226,0.75)', flexShrink: 0, transition: 'color 0.2s ease' }}
            className="group-hover:stroke-gold"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span
            className="font-sans font-semibold whitespace-nowrap hidden sm:inline"
            style={{
              fontSize: '9px',
              letterSpacing: '0.28em',
              color: 'rgba(229,228,226,0.75)',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}
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
          paddingRight: 'clamp(12px, 3vw, 40px)',
          gap: '14px',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
      >
        <a
          href="mailto:wmdadmin@williamduncan-ca.co.uk"
          title="Email us"
          style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}
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
          style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}
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
          style={{ color: 'rgba(229,228,226,0.75)', transition: 'color 0.2s ease', display: 'flex' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,228,226,0.75)')}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </a>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >

        {/* Plaque wrapper */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
            transition: 'opacity 1s ease, transform 1s ease',
            marginBottom: '28px',
            position: 'relative',
            width: '100%',
            maxWidth: 'clamp(280px, 90vw, 590px)',
          }}
        >

          {/* Plaque — Layer 2: mid panel, navy */}
          <div className="plaque-mid-panel" style={{
            position: 'relative',
            borderRadius: '2px',
            padding: 'clamp(16px, 3vw, 36px) clamp(14px, 4vw, 48px)',
          }}>

            {/* Mid-panel corner diamonds */}
            {[
              { top: '8px', left: '8px' },
              { top: '8px', right: '8px' },
              { bottom: '8px', left: '8px' },
              { bottom: '8px', right: '8px' },
            ].map((pos, i) => (
              <span key={i} style={{ position: 'absolute', ...pos, color: 'rgba(198,167,94,0.40)', fontSize: '6px', lineHeight: 1 }}>◆</span>
            ))}

            {/* Mid-panel inner hairline */}
            <div style={{
              position: 'absolute', inset: '5px',
              border: '1px solid rgba(198,167,94,0.07)',
              borderRadius: '1px', pointerEvents: 'none',
            }} />

            {/* Eyebrow */}
            <div className="flex items-center gap-3 justify-center" style={{ marginBottom: '18px' }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.35))' }} />
              <span
                className="font-sans font-light"
                style={{ fontSize: 'clamp(7px, 1.7vw, 9px)', letterSpacing: '0.42em', color: 'rgba(229,228,226,0.55)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}
              >
                Est. 1924
              </span>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.35))' }} />
            </div>

            {/* Plaque — Layer 3: logo frame, deep navy jewel box */}
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Ambient bloom */}
              <div style={{
                position: 'absolute', inset: '-16px -24px',
                background: 'radial-gradient(ellipse 75% 65% at 50% 50%, rgba(198,167,94,0.12) 0%, rgba(198,167,94,0.03) 60%, transparent 100%)',
                pointerEvents: 'none', filter: 'blur(6px)',
              }} />

              {/* Logo */}
              <img
                src="/Adobe_Express_-_file.png"
                alt="William Duncan"
                style={{
                  display: 'block', width: '100%', maxWidth: '100%', height: 'auto',
                  position: 'relative', zIndex: 1,
                  filter: [
                    'brightness(0) invert(1) sepia(0.08)',
                    'drop-shadow(0 1px 0 rgba(198,167,94,0.25))',
                    'drop-shadow(0 3px 14px rgba(0,0,0,0.75))',
                    'drop-shadow(0 0 22px rgba(198,167,94,0.10))',
                  ].join(' '),
                }}
              />
            </div>

            {/* Rule below logo frame */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.3), transparent)', margin: '16px 0 14px' }} />

            {/* Subtitle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.18))' }} />
              <p
                className="font-sans font-light"
                style={{
                  fontSize: 'clamp(0.48rem, 1.6vw, 0.6rem)',
                  letterSpacing: '0.22em',
                  color: 'rgba(198,167,94,0.75)',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  margin: 0,
                  whiteSpace: 'nowrap',
                  textShadow: '0 1px 2px rgba(0,0,0,0.9)',
                }}
              >
                Chartered Accountants&nbsp;&nbsp;·&nbsp;&nbsp;Business &amp; Tax Advisers
              </p>
              <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.18))' }} />
            </div>
          </div>
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: phase >= 3 ? 'clamp(60px, 10vw, 120px)' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.5), transparent)',
            transition: 'width 0.8s ease 0.1s',
            marginBottom: '24px',
          }}
        />

        {/* Three pillars */}
        <div
          className="hidden sm:flex"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '480px',
          }}
        >
          {pillars.map((label, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="font-sans font-light"
                style={{
                  fontSize: 'clamp(0.48rem, 1.1vw, 0.62rem)',
                  letterSpacing: '0.22em',
                  color: 'rgba(229,228,226,0.75)',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  whiteSpace: 'nowrap',
                  textShadow: '0 1px 0 rgba(0,0,0,0.6)',
                }}
              >
                {label}
              </span>
              {i < pillars.length - 1 && (
                <span
                  style={{
                    margin: '0 12px',
                    color: 'rgba(198,167,94,0.3)',
                    fontSize: '4px',
                  }}
                >
                  ◆
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Three pillars — mobile: stacked */}
        <div
          className="flex sm:hidden flex-col items-center"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            gap: '8px',
          }}
        >
          {pillars.map((label, i) => (
            <span
              key={i}
              className="font-sans font-light"
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                color: 'rgba(229,228,226,0.75)',
                textTransform: 'uppercase',
                fontWeight: 300,
                textShadow: '0 1px 0 rgba(0,0,0,0.6)',
              }}
            >
              {label}
            </span>
          ))}
        </div>

      </div>

      {/* Bottom ticker bar */}
      <div
        className="relative z-20 w-full overflow-hidden"
        style={{
          borderTop: '1px solid rgba(198,167,94,0.12)',
          background: 'rgba(14,12,8,0.6)',
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
                  className="font-sans"
                  style={{
                    fontSize: '10px',
                    letterSpacing: '0.13em',
                    color: 'rgba(198,167,94,0.82)',
                    fontWeight: 300,
                  }}
                >
                  {item.text}
                </span>
                {item.cta && (
                  <a
                    href="/client-guidance.pdf"
                    download
                    style={{
                      marginLeft: '14px',
                      fontSize: '8.5px',
                      letterSpacing: '0.2em',
                      fontWeight: 600,
                      color: 'rgba(229,228,226,0.85)',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      border: '1px solid rgba(229,228,226,0.25)',
                      borderRadius: '2px',
                      padding: '2px 8px',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s, border-color 0.2s',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#C6A75E'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(198,167,94,0.5)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(229,228,226,0.85)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(229,228,226,0.25)'
                    }}
                  >
                    Client Guidance
                  </a>
                )}
                <span style={{ margin: '0 36px', color: 'rgba(198,167,94,0.25)', fontSize: '5px' }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
