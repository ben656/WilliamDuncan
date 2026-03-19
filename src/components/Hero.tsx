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
  | 'shrinking'
  | 'bullets'

export default function Hero() {
  const [showLogo, setShowLogo] = useState(false)
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed1, setTyped1] = useState('')
  const [typed2, setTyped2] = useState('')
  const [showOval, setShowOval] = useState(false)
  const [shrinkOval, setShrinkOval] = useState(false)
  const [showMiniLogo, setShowMiniLogo] = useState(false)
  const [visibleBullets, setVisibleBullets] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t0 = setTimeout(() => setShowLogo(true), 400)
    const t1 = setTimeout(() => setPhase('typing1'), 900)
    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
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
        const t = setTimeout(() => {
          setShowOval(true)
          setPhase('pause')
        }, 300)
        return () => clearTimeout(t)
      }
    }
  }, [phase, typed2])

  useEffect(() => {
    if (phase === 'pause') {
      const t = setTimeout(() => {
        setPhase('shrinking')
        setShrinkOval(true)
      }, 2200)
      return () => clearTimeout(t)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'shrinking') {
      const t1 = setTimeout(() => {
        setShowMiniLogo(true)
        setPhase('bullets')
      }, 900)
      return () => clearTimeout(t1)
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'bullets') {
      const timers = bullets.map((_, i) =>
        setTimeout(() => setVisibleBullets(prev => [...prev, i]), i * 350)
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
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-90" />
      </div>
      <div className="absolute inset-0 diamond-pattern animate-pulse-subtle" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-navy-dark opacity-50" />

      <div
        className="absolute left-0 right-0 top-0 z-20"
        style={{
          height: '172px',
          background: 'rgba(6,10,22,0.55)',
          borderBottom: '1px solid rgba(198,167,94,0.18)',
          boxShadow: '0 4px 40px rgba(198,167,94,0.07), inset 0 -1px 0 rgba(198,167,94,0.1)',
          backdropFilter: 'blur(4px)',
        }}
      />

      <div
        className={`absolute top-6 left-6 z-30 transition-all duration-1000 transform ${
          showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-16 md:h-20 lg:h-24 filter drop-shadow-2xl" />
            <div className="flex flex-col justify-end -ml-3 mb-2">
              <p className="font-sans text-[7px] md:text-[8px] lg:text-[9px] font-light tracking-[0.25em] uppercase" style={{ color: '#a8a8b0' }}>est 1924</p>
            </div>
          </div>
          <p className="font-sans text-xs md:text-sm lg:text-base font-light tracking-wide mt-2 ml-[2.8rem] md:ml-[3.2rem] lg:ml-[3.8rem]" style={{ color: '#a8a8b0' }}>
            Chartered Accountants, Business &amp; Tax Advisers
          </p>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8">

        {phase !== 'bullets' && (
          <div className="flex flex-col items-center text-center">
            <div
              className="inline-flex items-center justify-center px-16 py-8 md:px-24 md:py-10 text-center transition-all duration-700 ease-in-out"
              style={{
                border: showOval ? '1px solid rgba(198,167,94,0.35)' : '1px solid transparent',
                borderRadius: '50%',
                boxShadow: showOval ? '0 0 40px rgba(198,167,94,0.08), inset 0 0 40px rgba(198,167,94,0.04)' : 'none',
                opacity: shrinkOval ? 0 : 1,
                transform: shrinkOval ? 'scale(0.18) translateY(60vh) translateX(35vw)' : 'scale(1)',
                transition: shrinkOval
                  ? 'transform 0.85s cubic-bezier(0.4,0,0.2,1), opacity 0.85s ease'
                  : 'border 0.5s ease, box-shadow 0.5s ease',
              }}
            >
              <h1 className="font-serif leading-tight text-center">
                <span
                  className="block gradient-text font-semibold mb-2 md:mb-3 tracking-wide text-6xl md:text-8xl lg:text-9xl"
                  style={{
                    textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(198,167,94,0.25), 0 2px 4px rgba(0,0,0,0.9)',
                    filter: 'drop-shadow(0 2px 6px rgba(198,167,94,0.2))',
                    minHeight: '1.2em',
                  }}
                >
                  {typed1}
                  {phase === 'typing1' && (
                    <span className="inline-block w-[3px] h-[0.85em] bg-gold ml-1 align-middle animate-pulse" />
                  )}
                </span>
                <span
                  className="block font-light tracking-widest text-6xl md:text-8xl lg:text-9xl"
                  style={{
                    color: '#e8e4dc',
                    textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 60px rgba(198,167,94,0.15), 0 2px 4px rgba(0,0,0,0.9)',
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
          </div>
        )}

        {phase === 'bullets' && (
          <div className="flex flex-col items-center gap-4 text-center w-full max-w-2xl">
            {bullets.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 justify-center transition-all duration-500 ease-out"
                style={{
                  opacity: visibleBullets.includes(i) ? 1 : 0,
                  transform: visibleBullets.includes(i) ? 'translateY(0)' : 'translateY(14px)',
                }}
              >
                <span
                  className="flex-shrink-0"
                  style={{ width: '20px', height: '1px', background: 'rgba(198,167,94,0.55)' }}
                />
                <span
                  className="font-serif tracking-[0.22em] uppercase"
                  style={{
                    color: 'rgba(198,167,94,0.8)',
                    fontSize: '0.7rem',
                    lineHeight: '1.8',
                  }}
                >
                  {text}
                </span>
                <span
                  className="flex-shrink-0"
                  style={{ width: '20px', height: '1px', background: 'rgba(198,167,94,0.55)' }}
                />
              </div>
            ))}
          </div>
        )}

      </div>

      <div
        className="fixed z-40 transition-all duration-700"
        style={{
          opacity: showMiniLogo ? 1 : 0,
          transform: showMiniLogo ? 'scale(1)' : 'scale(0.5)',
          bottom: '-120px',
          right: '-120px',
          width: '420px',
          height: '420px',
        }}
      >
        <div
          className="flex flex-col items-center justify-center w-full h-full"
          style={{
            border: '1px solid rgba(198,167,94,0.12)',
            borderRadius: '50%',
            boxShadow: '0 0 80px rgba(198,167,94,0.06), inset 0 0 60px rgba(198,167,94,0.03)',
            background: 'radial-gradient(circle, rgba(10,15,30,0.55) 0%, rgba(10,15,30,0.2) 70%, transparent 100%)',
            backdropFilter: 'blur(6px)',
            gap: '10px',
            paddingBottom: '100px',
            paddingRight: '80px',
          }}
        >
          <p
            className="gradient-text font-serif font-semibold text-center"
            style={{ fontSize: '13px', letterSpacing: '0.08em', lineHeight: 1.5 }}
          >
            A Century of
          </p>
          <p
            className="font-serif font-light text-center"
            style={{ fontSize: '11px', letterSpacing: '0.06em', color: '#e8e4dc', lineHeight: 1.5 }}
          >
            Trusted Expertise
          </p>

          <div style={{ width: '60px', height: '1px', background: 'rgba(198,167,94,0.25)', margin: '4px 0' }} />

          <div className="flex items-center gap-5">
            <a
              href="mailto:wmdadmin@williamduncan-ca.co.uk"
              title="Email us"
              style={{ color: '#a8a8b0', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a8a8b0')}
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
              style={{ color: '#a8a8b0', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a8a8b0')}
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
              style={{ color: '#a8a8b0', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C6A75E')}
              onMouseLeave={e => (e.currentTarget.style.color = '#a8a8b0')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </a>
          </div>

          <p
            className="font-sans text-center"
            style={{ fontSize: '8px', letterSpacing: '0.2em', color: '#a8a8b0', marginTop: '4px' }}
          >
            EST 1924
          </p>
        </div>
      </div>

    </section>
  )
}
