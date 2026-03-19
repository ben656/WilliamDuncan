import { useEffect, useRef, useState } from 'react'

const leftBullets = [
  'OVER 100 YEARS OF PROFESSIONAL EXPERTISE',
  'PARTNER-LED, RELATIONSHIP-DRIVEN SERVICE',
  'STRATEGIC THINKING WITH PRACTICAL DELIVERY',
]

const rightBullets = [
  'DISCREET ADVISERS TO BUSINESSES AND FAMILIES',
  'UK-WIDE EXPERTISE WITH INTERNATIONAL PERSPECTIVE',
  'TRUSTED ACROSS GENERATIONS',
]

export default function Hero() {
  const [showLogo, setShowLogo] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [transition, setTransition] = useState(false)
  const [showBullets, setShowBullets] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 400)
    const t2 = setTimeout(() => setShowHeading(true), 900)
    const t3 = setTimeout(() => setTransition(true), 4500)
    const t4 = setTimeout(() => setShowBullets(true), 4800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [])

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

      <div className="relative z-10 flex-1 flex flex-col">

        <div className="flex-1 flex items-center justify-center px-8">
          <div
            className={`w-full text-center transition-all duration-700 ease-in-out transform ${
              showHeading && !transition ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-95 pointer-events-none'
            }`}
          >
            <h1 className="font-serif leading-tight">
              <span
                className="block gradient-text font-semibold mb-2 md:mb-3 tracking-wide text-6xl md:text-8xl lg:text-9xl"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(198,167,94,0.25), 0 2px 4px rgba(0,0,0,0.9)',
                  filter: 'drop-shadow(0 2px 6px rgba(198,167,94,0.2))',
                }}
              >
                A Century of
              </span>
              <span
                className="block font-light tracking-widest text-6xl md:text-8xl lg:text-9xl"
                style={{
                  color: '#e8e4dc',
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 60px rgba(198,167,94,0.15), 0 2px 4px rgba(0,0,0,0.9)',
                }}
              >
                Trusted Expertise
              </span>
            </h1>
          </div>

          <div
            className={`absolute w-full px-8 text-center transition-all duration-700 ease-in-out transform ${
              showBullets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
            }`}
          >
            <div className="grid grid-cols-2 gap-x-10 max-w-3xl mx-auto">
              <div className="flex flex-col gap-3 items-center text-center">
                {leftBullets.map((text, i) => (
                  <div key={i} className="flex items-center gap-2 justify-center">
                    <span
                      className="w-3.5 h-px flex-shrink-0"
                      style={{ background: 'rgba(198,167,94,0.55)', marginTop: '0.1em' }}
                    />
                    <span
                      className="font-serif text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-relaxed"
                      style={{ color: 'rgba(198,167,94,0.65)' }}
                    >
                      {text}
                    </span>
                    <span
                      className="w-3.5 h-px flex-shrink-0"
                      style={{ background: 'rgba(198,167,94,0.55)', marginTop: '0.1em' }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 items-center text-center">
                {rightBullets.map((text, i) => (
                  <div key={i} className="flex items-center gap-2 justify-center">
                    <span
                      className="w-3.5 h-px flex-shrink-0"
                      style={{ background: 'rgba(198,167,94,0.55)', marginTop: '0.1em' }}
                    />
                    <span
                      className="font-serif text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-relaxed"
                      style={{ color: 'rgba(198,167,94,0.65)' }}
                    >
                      {text}
                    </span>
                    <span
                      className="w-3.5 h-px flex-shrink-0"
                      style={{ background: 'rgba(198,167,94,0.55)', marginTop: '0.1em' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full transition-all duration-700 ease-in-out ${
            showBullets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div
            className="w-full py-5 text-center"
            style={{
              borderTop: '1px solid rgba(198,167,94,0.45)',
              borderBottom: '1px solid rgba(198,167,94,0.45)',
              background: 'linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.04) 50%, transparent 100%)',
            }}
          >
            <p
              className="font-serif tracking-[0.25em] uppercase"
              style={{
                color: 'rgba(198,167,94,0.55)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
              }}
            >
              A Century of Trusted Expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
