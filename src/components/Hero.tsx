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
        className={`absolute top-6 left-6 z-30 transition-all duration-1000 transform ${
          showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-16 md:h-20 lg:h-24 filter drop-shadow-2xl" />
            <div className="flex flex-col justify-end -ml-3 mb-2">
              <p className="text-gold font-sans text-[7px] md:text-[8px] lg:text-[9px] font-light tracking-[0.25em] uppercase opacity-80">est 1924</p>
            </div>
          </div>
          <p className="font-sans text-xs md:text-sm lg:text-base font-semibold text-platinum tracking-wide gradient-text text-shadow-luxury mt-2 ml-[2.8rem] md:ml-[3.2rem] lg:ml-[3.8rem]">
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
        className="fixed bottom-6 right-6 z-40 transition-all duration-700"
        style={{
          opacity: showMiniLogo ? 1 : 0,
          transform: showMiniLogo ? 'scale(1)' : 'scale(0.5)',
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            border: '1px solid rgba(198,167,94,0.35)',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            boxShadow: '0 0 20px rgba(198,167,94,0.1), inset 0 0 20px rgba(198,167,94,0.04)',
            background: 'rgba(10,15,30,0.85)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="text-center leading-none px-1">
            <p
              className="gradient-text font-serif font-semibold"
              style={{ fontSize: '6px', letterSpacing: '0.05em', lineHeight: 1.3 }}
            >
              A Century of
            </p>
            <p
              className="font-serif font-light"
              style={{ fontSize: '5px', letterSpacing: '0.04em', color: '#e8e4dc', lineHeight: 1.3 }}
            >
              Trusted Expertise
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}
