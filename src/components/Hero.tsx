import { useEffect, useRef, useState } from 'react'

const headlines = [
  { line1: 'A Century of', line2: 'Trusted Expertise' },
  { line1: 'Dynamic Solutions for', line2: 'Valued Clients' },
  { line1: 'Intrinsic Relationships for', line2: 'Evolving Strategy' },
]

export default function Hero() {
  const [showOval, setShowOval] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [showWhyClients, setShowWhyClients] = useState(false)
  const [isHoveringMain, setIsHoveringMain] = useState(false)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [headlineFade, setHeadlineFade] = useState(true)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineFade(false)
      setTimeout(() => {
        setHeadlineIndex(i => (i + 1) % headlines.length)
        setHeadlineFade(true)
      }, 600)
    }, 3600)
    return () => clearInterval(interval)
  }, [])

  const current = headlines[headlineIndex]

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
          className={`transition-all duration-1200 ease-out transform ${
            showHeading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onMouseEnter={() => setIsHoveringMain(true)}
          onMouseLeave={() => setIsHoveringMain(false)}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />

            <div
              className="text-center transition-opacity duration-500"
              style={{ opacity: headlineFade ? 1 : 0 }}
            >
              <h1
                className="font-serif font-light leading-tight whitespace-nowrap"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
              >
                <span
                  className="block gradient-text font-medium mb-2 md:mb-3 tracking-wide text-3xl md:text-5xl lg:text-6xl"
                  style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), -2px -2px 3px rgba(218,165,32,0.3)' }}
                >
                  {current.line1}
                </span>
                <span
                  className="block text-platinum font-light tracking-wider text-3xl md:text-5xl lg:text-6xl"
                  style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), -2px -2px 3px rgba(255,255,255,0.2)' }}
                >
                  {current.line2}
                </span>
              </h1>
            </div>

            <div className="w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
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
