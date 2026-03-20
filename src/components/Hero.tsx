import { useEffect, useRef, useState } from 'react'

const fullText1 = 'A Century of'
const fullText2 = 'Trusted Expertise'

const bullets = [
  'OVER 100 YEARS OF PROFESSIONAL EXPERTISE',
  'PARTNER-LED, RELATIONSHIP-DRIVEN SERVICE',
  'STRATEGIC THINKING WITH PRACTICAL DELIVERY',
  'DISCREET ADVISERS TO BUSINESSES AND FAMILIES',
  'UK-WIDE EXPERTISE WITH INTERNATIONAL PERSPECTIVE',
  'TRUSTED ACROSS GENERATIONS',
]

type Phase =
  | 'idle'
  | 'typing1'
  | 'typing2'
  | 'pause'
  | 'fading'
  | 'bullets'

export default function Hero() {
  const [showLogo, setShowLogo] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed1, setTyped1] = useState('')
  const [typed2, setTyped2] = useState('')
  const [fadeText, setFadeText] = useState(false)
  const [showCornerElements, setShowCornerElements] = useState(false)
  const [visibleBullets, setVisibleBullets] = useState<number[]>([])
  const [clientHovered, setClientHovered] = useState(false)
  const [enquiriesHovered, setEnquiriesHovered] = useState(false)
  const [badgePulse, setBadgePulse] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t0 = setTimeout(() => setShowLogo(true), 400)
    const t1 = setTimeout(() => setPhase('typing1'), 900)
    const t2 = setTimeout(() => setBadgePulse(true), 1200)
    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  useEffect(() => {
    if (phase === 'typing1') {
      if (typed1.length < fullText1.length) {
        const t = setTimeout(() => setTyped1(fullText1.slice(0, typed1.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('typing2'), 300)
        return () => clearTimeout(t)
      }
    }
  }, [phase, typed1])

  useEffect(() => {
    if (phase === 'typing2') {
      if (typed2.length < fullText2.length) {
        const t = setTimeout(() => setTyped2(fullText2.slice(0, typed2.length + 1)), 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pause'), 300)
        return () => clearTimeout(t)
      }
    }
  }, [phase, typed2])

  useEffect(() => {
    if (phase === 'pause') {
      const t = setTimeout(() => {
        setPhase('fading')
        setFadeText(true)
      }, 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'fading') {
      const t = setTimeout(() => {
        setShowCornerElements(true)
        setPhase('bullets')
      }, 700)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'bullets') {
      const timers = bullets.map((_, i) =>
        setTimeout(() => setVisibleBullets(prev => [...prev, i]), i * 250)
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [phase])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen flex flex-col overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional workspace"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      </div>
      <div className="absolute inset-0 diamond-pattern animate-pulse-subtle" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(6,10,22,0.8) 0%, transparent 70%)' }} />

      {/* Top header bar */}
      <div
        className="absolute left-0 right-0 top-0 z-20"
        style={{
          height: '120px',
          background: 'rgba(6,10,22,0.6)',
          borderBottom: '1px solid rgba(198,167,94,0.18)',
          boxShadow: '0 4px 40px rgba(198,167,94,0.07), inset 0 -1px 0 rgba(198,167,94,0.1)',
          backdropFilter: 'blur(6px)',
        }}
      />

      {/* Logo — top left */}
      <div
        className={`absolute top-3 left-3 sm:top-5 sm:left-5 z-30 transition-all duration-1000 transform ${
          showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
            <img
              src="/Adobe_Express_-_file.png"
              alt="William Duncan"
              className="h-12 sm:h-16 md:h-20 lg:h-24 filter drop-shadow-2xl"
            />
          </div>
          <p
            className="font-sans font-light tracking-wide mt-1"
            style={{
              color: '#a8a8b0',
              fontSize: 'clamp(8px, 2vw, 14px)',
              marginLeft: 'clamp(1.8rem, 5vw, 3.8rem)',
            }}
          >
            Chartered Accountants, Business &amp; Tax Advisers
          </p>
        </div>
      </div>

      {/* Top right — EST badge circle */}
      <div
        className="absolute top-3 right-3 sm:top-5 sm:right-5 z-30"
        style={{
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? 'scale(1) translateY(0)' : 'scale(0.3) translateY(-20px)',
          transition: 'opacity 0.8s cubic-bezier(0.34,1.56,0.64,1), transform 0.8s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{
            border: `1px solid rgba(198,167,94,${badgePulse ? 0.35 : 0.22})`,
            borderRadius: '50%',
            width: 'clamp(80px, 14vw, 148px)',
            height: 'clamp(80px, 14vw, 148px)',
            background: 'radial-gradient(circle, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.1) 100%)',
            backdropFilter: 'blur(6px)',
            boxShadow: badgePulse
              ? '0 0 50px rgba(198,167,94,0.12), 0 0 20px rgba(198,167,94,0.08), inset 0 0 30px rgba(198,167,94,0.05)'
              : '0 0 30px rgba(198,167,94,0.06), inset 0 0 20px rgba(198,167,94,0.03)',
            transition: 'box-shadow 1.5s ease, border-color 1.5s ease',
            gap: '2px',
          }}
        >
          <p
            className="gradient-text font-serif font-semibold text-center"
            style={{ fontSize: 'clamp(7px, 1.6vw, 12px)', letterSpacing: '0.07em', lineHeight: 1.4 }}
          >
            A Century of
          </p>
          <p
            className="font-serif font-light text-center"
            style={{ fontSize: 'clamp(6px, 1.4vw, 11px)', letterSpacing: '0.05em', color: '#e8e4dc', lineHeight: 1.4 }}
          >
            Trusted Expertise
          </p>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.5), transparent)', margin: '4px 0' }} />
          <p
            className="font-sans text-center"
            style={{ fontSize: 'clamp(5px, 1.2vw, 8px)', letterSpacing: '0.25em', color: '#a8a8b0' }}
          >
            EST 1924
          </p>
        </div>
      </div>

      {/* Main centre content */}
      <div
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8"
        style={{ paddingTop: '120px' }}
      >

        {/* Heading — fades out */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            paddingTop: '120px',
            opacity: fadeText ? 0 : (phase === 'idle' ? 0 : 1),
            transform: fadeText ? 'translateY(-20px) scale(0.97)' : 'translateY(0) scale(1)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
            pointerEvents: fadeText ? 'none' : 'auto',
          }}
        >
          <h1 className="font-serif leading-tight text-center px-4">
            <span
              className="block gradient-text font-semibold mb-2 tracking-wide"
              style={{
                fontSize: 'clamp(2.4rem, 10vw, 8.5rem)',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(198,167,94,0.25)',
                minHeight: '1.2em',
              }}
            >
              {typed1}
              {phase === 'typing1' && (
                <span className="inline-block w-[3px] h-[0.85em] bg-gold ml-1 align-middle animate-pulse" />
              )}
            </span>
            <span
              className="block font-light tracking-widest"
              style={{
                fontSize: 'clamp(2.4rem, 10vw, 8.5rem)',
                color: '#e8e4dc',
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 60px rgba(198,167,94,0.15)',
                minHeight: '1.2em',
              }}
            >
              {typed2}
              {phase === 'typing2' && (
                <span className="inline-block w-[3px] h-[0.85em] bg-gold ml-1 align-middle animate-pulse" />
              )}
            </span>
          </h1>
        </div>

        {/* Bullets — fades in */}
        <div
          style={{
            opacity: phase === 'bullets' ? 1 : 0,
            transform: phase === 'bullets' ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            pointerEvents: phase === 'bullets' ? 'auto' : 'none',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: phase === 'bullets' ? '120px' : '0px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.5), transparent)',
              marginBottom: '20px',
              transition: 'width 0.8s ease 0.2s',
            }}
          />
          <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-center w-full max-w-xl px-4">
            {bullets.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center"
                style={{
                  opacity: visibleBullets.includes(i) ? 1 : 0,
                  transform: visibleBullets.includes(i) ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
              >
                <span style={{ color: 'rgba(198,167,94,0.6)', fontSize: '8px', flexShrink: 0 }}>◆</span>
                <span
                  className="font-serif uppercase"
                  style={{
                    color: 'rgba(232,228,220,0.82)',
                    fontSize: 'clamp(0.58rem, 2.2vw, 0.78rem)',
                    lineHeight: '1.7',
                    letterSpacing: 'clamp(0.08em, 1vw, 0.2em)',
                  }}
                >
                  {text}
                </span>
                <span style={{ color: 'rgba(198,167,94,0.6)', fontSize: '8px', flexShrink: 0 }}>◆</span>
              </div>
            ))}
          </div>
          <div
            style={{
              width: phase === 'bullets' ? '120px' : '0px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.5), transparent)',
              marginTop: '20px',
              transition: 'width 0.8s ease 0.4s',
            }}
          />
        </div>

      </div>

      {/* Bottom left — Client Access */}
      <div
        className="fixed z-40"
        style={{
          opacity: showCornerElements ? 1 : 0,
          transform: showCornerElements ? 'scale(1) translateY(0)' : 'scale(0.2) translateY(20px)',
          transition: 'opacity 0.6s cubic-bezier(0.34,1.56,0.64,1), transform 0.6s cubic-bezier(0.34,1.56,0.64,1)',
          bottom: '20px',
          left: '20px',
        }}
      >
        <a
          href="#"
          title="Client Access"
          onMouseEnter={() => setClientHovered(true)}
          onMouseLeave={() => setClientHovered(false)}
          style={{
            border: clientHovered ? '1px solid rgba(126,184,212,0.55)' : '1px solid rgba(126,184,212,0.3)',
            borderRadius: '50%',
            width: clientHovered ? '90px' : '36px',
            height: clientHovered ? '90px' : '36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: clientHovered ? '4px' : '0',
            background: clientHovered
              ? 'radial-gradient(circle, rgba(10,20,38,0.85) 0%, rgba(10,15,30,0.5) 100%)'
              : 'radial-gradient(circle, rgba(10,15,30,0.75) 0%, rgba(10,15,30,0.35) 100%)',
            backdropFilter: 'blur(10px)',
            boxShadow: clientHovered
              ? '0 0 50px rgba(126,184,212,0.22), 0 0 20px rgba(126,184,212,0.1)'
              : '0 0 18px rgba(126,184,212,0.08)',
            textDecoration: 'none',
            transition: 'width 0.45s cubic-bezier(0.34,1.56,0.64,1), height 0.45s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.35s ease',
            overflow: 'hidden',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            style={{
              width: clientHovered ? '20px' : '14px',
              height: clientHovered ? '20px' : '14px',
              color: clientHovered ? '#b8dff0' : '#7eb8d4',
              transition: 'width 0.3s ease, height 0.3s ease, color 0.3s ease',
              flexShrink: 0,
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <span
            style={{
              fontFamily: 'sans-serif',
              fontSize: '7px',
              fontWeight: 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#b8dff0',
              whiteSpace: 'nowrap',
              opacity: clientHovered ? 1 : 0,
              maxHeight: clientHovered ? '20px' : '0px',
              overflow: 'hidden',
              transition: 'opacity 0.2s ease 0.15s, max-height 0.3s ease',
            }}
          >
            Client Access
          </span>
        </a>
      </div>

      {/* Bottom right — Enquiries (hidden on small screens, replaced by inline contact strip) */}
      <div
        className="fixed z-40 hidden sm:block"
        style={{
          opacity: showCornerElements ? 1 : 0,
          transform: showCornerElements
            ? `translate(${enquiriesHovered ? '0px' : '90px'}, ${enquiriesHovered ? '0px' : '90px'}) scale(1)`
            : 'translate(60px, 60px) scale(0.3)',
          transition: showCornerElements
            ? 'opacity 0.7s ease, transform 0.45s cubic-bezier(0.34,1.56,0.64,1)'
            : 'opacity 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
          bottom: '-80px',
          right: '-80px',
          width: '340px',
          height: '340px',
        }}
        onMouseEnter={() => setEnquiriesHovered(true)}
        onMouseLeave={() => setEnquiriesHovered(false)}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-full"
          style={{
            border: enquiriesHovered ? '1px solid rgba(198,167,94,0.3)' : '1px solid rgba(198,167,94,0.14)',
            borderRadius: '50%',
            boxShadow: enquiriesHovered
              ? '0 0 100px rgba(198,167,94,0.12), 0 0 40px rgba(198,167,94,0.08)'
              : '0 0 60px rgba(198,167,94,0.05)',
            background: enquiriesHovered
              ? 'radial-gradient(circle, rgba(12,18,36,0.75) 0%, rgba(10,15,30,0.4) 70%, transparent 100%)'
              : 'radial-gradient(circle, rgba(10,15,30,0.5) 0%, rgba(10,15,30,0.15) 70%, transparent 100%)',
            backdropFilter: 'blur(8px)',
            gap: '10px',
            paddingBottom: '90px',
            paddingRight: '80px',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
          }}
        >
          <p
            className="gradient-text font-serif font-semibold text-center"
            style={{
              fontSize: '12px',
              letterSpacing: '0.12em',
              lineHeight: 1.5,
              opacity: enquiriesHovered ? 1 : 0.5,
              transition: 'opacity 0.35s ease',
            }}
          >
            Enquiries
          </p>
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(198,167,94,0.4), transparent)', margin: '2px 0' }} />
          <div
            className="flex items-center gap-4"
            style={{
              opacity: enquiriesHovered ? 1 : 0.3,
              transform: enquiriesHovered ? 'translateY(0)' : 'translateY(4px)',
              transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
            }}
          >
            <a
              href="mailto:wmdadmin@williamduncan-ca.co.uk"
              title="Email us"
              style={{ color: '#a8a8b0', transition: 'color 0.2s, transform 0.2s', display: 'block' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C6A75E'; e.currentTarget.style.transform = 'scale(1.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#a8a8b0'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
            </a>
            <a
              href="https://wa.me/441698283103"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              style={{ color: '#a8a8b0', transition: 'color 0.2s, transform 0.2s', display: 'block' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C6A75E'; e.currentTarget.style.transform = 'scale(1.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#a8a8b0'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT"
              target="_blank"
              rel="noopener noreferrer"
              title="Find us"
              style={{ color: '#a8a8b0', transition: 'color 0.2s, transform 0.2s', display: 'block' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#C6A75E'; e.currentTarget.style.transform = 'scale(1.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#a8a8b0'; e.currentTarget.style.transform = 'scale(1)' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile bottom contact strip — replaces the corner Enquiries circle on small screens */}
      <div
        className="sm:hidden fixed z-40 bottom-0 left-0 right-0"
        style={{
          opacity: showCornerElements ? 1 : 0,
          transform: showCornerElements ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          background: 'rgba(6,10,22,0.75)',
          borderTop: '1px solid rgba(198,167,94,0.15)',
          backdropFilter: 'blur(10px)',
          padding: '10px 80px 10px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}
      >
        <span
          className="gradient-text font-serif"
          style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          Enquiries
        </span>
        <a
          href="mailto:wmdadmin@williamduncan-ca.co.uk"
          title="Email us"
          style={{ color: '#a8a8b0' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
          </svg>
        </a>
        <a
          href="https://wa.me/441698283103"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          style={{ color: '#a8a8b0' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=4d+Auchingramont+Rd+Hamilton+ML3+6JT"
          target="_blank"
          rel="noopener noreferrer"
          title="Find us"
          style={{ color: '#a8a8b0' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </a>
      </div>

    </section>
  )
}
