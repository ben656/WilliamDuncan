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
  const [showOval, setShowOval] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [showBullets, setShowBullets] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t1 = setTimeout(() => setShowOval(true), 500)
    const t2 = setTimeout(() => setShowHeading(true), 1000)
    const t3 = setTimeout(() => setShowBullets(true), 5000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
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
          showOval ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
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

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center px-0">
          <div
            className={`w-full transition-all duration-1000 ease-out transform ${
              showHeading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div
              className="w-full text-center relative py-10 md:py-14"
              style={{
                background: 'linear-gradient(160deg, rgba(5,13,26,0.0) 0%, rgba(198,167,94,0.06) 50%, rgba(5,13,26,0.0) 100%)',
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.25) 15%, rgba(198,167,94,0.55) 50%, rgba(198,167,94,0.25) 85%, transparent 100%)' }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(198,167,94,0.25) 15%, rgba(198,167,94,0.55) 50%, rgba(198,167,94,0.25) 85%, transparent 100%)' }}
              />

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
                    filter: 'drop-shadow(0 1px 4px rgba(255,255,255,0.08))',
                  }}
                >
                  Trusted Expertise
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="pb-10 px-8">
          <div
            className={`transition-all duration-1000 transform ${
              showBullets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="grid grid-cols-2 gap-x-10 max-w-3xl mx-auto">
              <div className="flex flex-col gap-2.5 items-center text-center">
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

              <div className="flex flex-col gap-2.5 items-center text-center">
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
      </div>
    </section>
  )
}
