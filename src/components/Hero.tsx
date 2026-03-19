import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [showOval, setShowOval] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [showWhyClients, setShowWhyClients] = useState(false)
  const [isHoveringMain, setIsHoveringMain] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ovalTimer = setTimeout(() => setShowOval(true), 500)
    const headingTimer = setTimeout(() => setShowHeading(true), 1000)
    const whyClientsTimer = setTimeout(() => setShowWhyClients(true), 5000)
    const hideTimer = setTimeout(() => {
      if (!isHoveringMain) setShowWhyClients(false)
    }, 35000)
    return () => {
      clearTimeout(ovalTimer)
      clearTimeout(headingTimer)
      clearTimeout(whyClientsTimer)
      clearTimeout(hideTimer)
    }
  }, [isHoveringMain])

  useEffect(() => {
    if (isHoveringMain) setShowWhyClients(true)
  }, [isHoveringMain])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[calc(100vh-3rem)] flex flex-col justify-center items-center overflow-hidden"
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
            Chartered Accountants, Business & Tax Advisers
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            showHeading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onMouseEnter={() => setIsHoveringMain(true)}
          onMouseLeave={() => setIsHoveringMain(false)}
        >
          <div
            className="shimmer px-10 py-6 md:px-16 md:py-8 text-center relative overflow-hidden"
            style={{
              border: '1px solid rgba(198,167,94,0.5)',
              boxShadow:
                '0 0 40px rgba(198,167,94,0.1), inset 0 0 30px rgba(0,0,0,0.4), 0 0 1px rgba(198,167,94,0.3)',
              background:
                'linear-gradient(135deg, rgba(5,13,26,0.55) 0%, rgba(10,22,42,0.5) 50%, rgba(5,13,26,0.55) 100%)',
            }}
          >
            <h1 className="font-serif leading-tight whitespace-nowrap">
              <span
                className="block gradient-text font-semibold mb-2 md:mb-3 tracking-wide text-4xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 -1px 0 rgba(218,165,32,0.4), 2px 2px 8px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 1px 2px rgba(198,167,94,0.3))',
                }}
              >
                A Century of
              </span>
              <span
                className="block text-platinum font-light tracking-widest text-4xl md:text-6xl lg:text-7xl"
                style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 -1px 0 rgba(255,255,255,0.15), 2px 2px 8px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 1px 3px rgba(255,255,255,0.1))',
                }}
              >
                Trusted Expertise
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 z-20">
        <div
          className={`transition-all duration-1000 transform ${
            showWhyClients || isHoveringMain ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">Over 100 years of professional expertise</span>
            </div>
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">Partner-led, relationship-driven service</span>
            </div>
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-platinum/90 leading-relaxed">Strategic thinking with practical delivery</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-8 z-20">
        <div
          className={`transition-all duration-1000 transform ${
            showWhyClients || isHoveringMain ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-platinum/90 leading-relaxed">Discreet advisers to businesses and families</span>
            </div>
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">UK-wide expertise with international perspective</span>
            </div>
            <div className="flex items-start">
              <span className="text-gold mr-3 mt-0.5">•</span>
              <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">[Content to follow]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
