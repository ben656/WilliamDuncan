import { useEffect, useRef, useState } from 'react'

const allBullets = [
  'OVER 100 YEARS OF PROFESSIONAL EXPERTISE',
  'PARTNER-LED, RELATIONSHIP-DRIVEN SERVICE',
  'STRATEGIC THINKING WITH PRACTICAL DELIVERY',
  'DISCREET ADVISERS TO BUSINESSES AND FAMILIES',
  'UK-WIDE EXPERTISE WITH INTERNATIONAL PERSPECTIVE',
  'TRUSTED ACROSS GENERATIONS',
]

export default function Hero() {
  const [showLogo, setShowLogo] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [visibleBullets, setVisibleBullets] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t1 = setTimeout(() => setShowLogo(true), 400)
    const t2 = setTimeout(() => setShowHeading(true), 900)

    const bulletTimers = allBullets.map((_, i) =>
      setTimeout(() => {
        setVisibleBullets(prev => [...prev, i])
      }, 4800 + i * 400)
    )

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      bulletTimers.forEach(clearTimeout)
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

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center">

        <div className="relative flex flex-col items-center">

          <div
            className={`inline-flex items-center justify-center px-16 py-8 md:px-24 md:py-10 text-center transition-all duration-700 ease-in-out transform ${
              showHeading ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{
              border: '1px solid rgba(198,167,94,0.35)',
              borderRadius: '50%',
              boxShadow: '0 0 40px rgba(198,167,94,0.08), inset 0 0 40px rgba(198,167,94,0.04)',
            }}
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

          <div className="flex flex-col items-center gap-2 -mt-4 z-10">
            {allBullets.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 justify-center transition-all duration-500 ease-out"
                style={{
                  opacity: visibleBullets.includes(i) ? 1 : 0,
                  transform: visibleBullets.includes(i) ? 'translateY(0)' : 'translateY(10px)',
                }}
              >
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

      <div
        className="w-full px-8 pb-10 text-center transition-all duration-700 ease-in-out"
        style={{ opacity: visibleBullets.length === allBullets.length ? 1 : 0 }}
      >
        <p
          className="font-serif font-light tracking-[0.3em] uppercase"
          style={{
            color: 'rgba(198,167,94,0.45)',
            fontSize: '0.6rem',
          }}
        >
          A Century of Trusted Expertise
        </p>
      </div>
    </section>
  )
}
