import { useEffect, useState } from 'react'

const bullets = [
  'PARTNER LED SERVICE',
  'INTRINSIC AND AUTHENTIC RELATIONS',
]

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

      {/* Logo — top left */}
      <div
        className="absolute top-0 left-0 z-30 flex flex-col justify-center"
        style={{
          height: '80px',
          paddingLeft: 'clamp(16px, 3vw, 40px)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <img
          src="/Adobe_Express_-_file.png"
          alt="William Duncan"
          style={{ height: 'clamp(40px, 6vw, 58px)', filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.5))' }}
        />
      </div>

      {/* EST badge — top right */}
      <div
        className="absolute top-0 right-0 z-30 flex items-center justify-center"
        style={{
          height: '80px',
          paddingRight: 'clamp(16px, 3vw, 40px)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
      >
        <div className="flex items-center gap-2">
          <div style={{ width: '28px', height: '1px', background: 'rgba(229,228,226,0.3)' }} />
          <span
            className="font-sans font-light text-center"
            style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'rgba(229,228,226,0.7)', textTransform: 'uppercase' }}
          >
            Est&nbsp;1924
          </span>
          <div style={{ width: '28px', height: '1px', background: 'rgba(229,228,226,0.3)' }} />
        </div>
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
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.2), transparent)', marginBottom: '18px' }} />

          {/* Primary heading */}
          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(3.2rem, 9vw, 9.5rem)',
              lineHeight: 0.92,
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '14px',
              color: 'rgba(229,228,226,0.88)',
              textShadow: [
                '0 1px 0 rgba(255,255,255,0.12)',
                '0 -1px 0 rgba(0,0,0,0.8)',
                '0 2px 4px rgba(0,0,0,0.7)',
                '0 4px 12px rgba(0,0,0,0.5)',
                'inset 0 1px 0 rgba(255,255,255,0.15)',
              ].join(', '),
            }}
          >
            William Duncan
          </h1>

          {/* Divider */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.2), transparent)', marginBottom: '18px' }} />

          {/* Subtitle */}
          <p
            className="font-sans font-light"
            style={{
              fontSize: 'clamp(0.65rem, 1.6vw, 0.95rem)',
              letterSpacing: '0.22em',
              color: '#C6A75E',
              textTransform: 'uppercase',
            }}
          >
            Chartered Accountants, Business &amp; Tax Advisers
          </p>
        </div>

        {/* Gold rule */}
        <div
          style={{
            width: phase >= 3 ? 'clamp(60px, 10vw, 120px)' : '0px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.65), transparent)',
            transition: 'width 0.8s ease 0.1s',
            marginBottom: '44px',
          }}
        />

        {/* Bullet points */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'clamp(6px, 1.2vh, 14px)',
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {bullets.map((text, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-3"
              style={{
                opacity: phase >= 5 ? 1 : 0,
                transform: phase >= 5 ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
              }}
            >
              <span style={{ color: 'rgba(198,167,94,0.45)', fontSize: '6px', flexShrink: 0 }}>◆</span>
              <span
                className="font-sans"
                style={{
                  fontSize: 'clamp(0.54rem, 1.4vw, 0.72rem)',
                  letterSpacing: 'clamp(0.1em, 0.8vw, 0.2em)',
                  color: 'rgba(229,228,226,0.6)',
                  fontWeight: 300,
                  textTransform: 'uppercase',
                }}
              >
                {text}
              </span>
              <span style={{ color: 'rgba(198,167,94,0.45)', fontSize: '6px', flexShrink: 0 }}>◆</span>
            </div>
          ))}
        </div>


      </div>

      {/* Bottom contact bar */}
      <div
        className="relative z-20 w-full"
        style={{
          borderTop: '1px solid rgba(198,167,94,0.12)',
          background: 'rgba(6,10,22,0.6)',
          backdropFilter: 'blur(8px)',
          padding: '18px clamp(16px, 4vw, 60px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(24px, 4vw, 56px)',
          opacity: phase >= 5 ? 1 : 0,
          transition: 'opacity 0.7s ease 0.8s',
        }}
      >
        <a
          href="mailto:wmdadmin@williamduncan-ca.co.uk"
          className="flex items-center gap-2 font-sans font-light"
          style={{ color: 'rgba(168,168,176,0.7)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,168,176,0.7)')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
          </svg>
          <span className="hidden sm:inline">wmdadmin@williamduncan-ca.co.uk</span>
          <span className="sm:hidden">Email</span>
        </a>

        <div style={{ width: '1px', height: '16px', background: 'rgba(198,167,94,0.2)' }} />

        <a
          href="https://wa.me/441698283103"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans font-light"
          style={{ color: 'rgba(168,168,176,0.7)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,168,176,0.7)')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden sm:inline">01698 283103</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>

        <div style={{ width: '1px', height: '16px', background: 'rgba(198,167,94,0.2)' }} />

        <a
          href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-sans font-light"
          style={{ color: 'rgba(168,168,176,0.7)', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s ease' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(168,168,176,0.7)')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="hidden sm:inline">4d Auchingramont Rd, Hamilton ML3 6JT</span>
          <span className="sm:hidden">Find Us</span>
        </a>
      </div>

    </section>
  )
}
