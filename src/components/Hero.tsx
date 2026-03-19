import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const [showOval, setShowOval] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [showWhyClients, setShowWhyClients] = useState(false)
  const [isHoveringMain, setIsHoveringMain] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ovalTimer = setTimeout(() => {
      setShowOval(true)
    }, 500)

    const headingTimer = setTimeout(() => {
      setShowHeading(true)
    }, 1000)

    const whyClientsTimer = setTimeout(() => {
      setShowWhyClients(true)
    }, 3200)

    const popupInterval = setInterval(() => {
      if (!isHoveringMain) {
        setShowWhyClients(false)
        setTimeout(() => setShowWhyClients(true), 100)
      }
    }, 30000)

    return () => {
      clearTimeout(ovalTimer)
      clearTimeout(headingTimer)
      clearTimeout(whyClientsTimer)
      clearInterval(popupInterval)
    }
  }, [isHoveringMain])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-visible"
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
        className={`absolute top-8 left-8 z-30 transition-all duration-1000 transform ${
          showOval ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-8 scale-95'
        }`}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-20 md:h-24 lg:h-28 filter drop-shadow-2xl" />
            <div className="flex flex-col justify-end -ml-3 mb-2">
              <p className="text-gold font-sans text-[8px] md:text-[9px] lg:text-[10px] font-light tracking-[0.25em] uppercase opacity-80">est 1924</p>
            </div>
          </div>
          <p className="font-sans text-sm md:text-base lg:text-lg font-semibold text-platinum tracking-wide gradient-text text-shadow-luxury mt-2 ml-[3.2rem] md:ml-[3.8rem] lg:ml-[4.4rem]">
            Chartered Accountants, Business & Tax Advisers
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 py-24 flex flex-col items-center justify-center min-h-screen overflow-visible">
        <div
          className={`transition-all duration-1200 ease-out transform ${
            showHeading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onMouseEnter={() => setIsHoveringMain(true)}
          onMouseLeave={() => setIsHoveringMain(false)}
        >
          <div className="relative flex items-center justify-center flex-col overflow-visible">
            <div className="absolute inset-0 blur-2xl opacity-30">
              <div className="w-full h-full bg-gold/20 rounded-full"></div>
            </div>

            <div className="relative bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 backdrop-blur-sm px-12 py-10 md:px-20 md:py-14 lg:px-28 lg:py-16 shadow-2xl border border-gold/30 transition-all duration-500 hover:border-gold/50 hover:shadow-3xl rotate-45 overflow-hidden">
              <div className="absolute inset-0 border border-gold/10 m-3 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer-slide"></div>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50"></div>

              <h1 className="relative z-10 font-serif text-4xl md:text-6xl lg:text-7xl font-light text-center leading-tight -rotate-45">
                <span className="block gradient-text text-shadow-luxury font-medium mb-2 md:mb-3 tracking-wide">A Century of</span>
                <span className="block text-platinum text-shadow-luxury font-light tracking-wider">Trusted Expertise</span>
              </h1>

              <div className="mt-6 md:mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 px-6">
        <div className="w-full max-w-5xl mx-auto">
          <div
            className={`relative transition-all duration-1000 transform ${
              showWhyClients || isHoveringMain ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 backdrop-blur-md border border-gold/40 px-6 py-6 md:px-10 md:py-8 shadow-2xl">
              <div className="absolute inset-0 border border-gold/10 m-3 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent animate-shimmer-slide"></div>
              </div>

              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/60"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/60"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/60"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/60"></div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                  <div className="flex items-start">
                    <span className="text-gold mr-3 mt-0.5">•</span>
                    <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">Over 100 years of professional expertise</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold mr-3 mt-0.5">•</span>
                    <span className="font-sans text-xs md:text-sm text-platinum/90 leading-relaxed">Partner-led, relationship-driven service</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold mr-3 mt-0.5">•</span>
                    <span className="font-sans text-xs md:text-sm text-gold leading-relaxed">Strategic thinking with practical delivery</span>
                  </div>
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
                    <span className="font-sans text-xs md:text-sm text-platinum/90 leading-relaxed">[Content to follow]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="relative">
          <div className="absolute inset-0 blur-md bg-gold/30 rounded-full"></div>
          <svg
            className="relative w-7 h-7 text-gold drop-shadow-lg"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
