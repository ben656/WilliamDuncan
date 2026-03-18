import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Accounts and Tax Planning',
    summary: 'Comprehensive accounting services paired with strategic tax optimization to minimize liabilities and ensure full regulatory compliance.'
  },
  {
    title: 'Business and Tax Advisory',
    summary: 'Expert guidance for business growth and operational excellence, combined with proactive tax strategies tailored to your specific needs.'
  },
  {
    title: 'Strategy Planning',
    summary: 'Long-term business planning and development services to help you navigate challenges and capitalize on opportunities for sustainable growth.'
  }
]

export default function Hero() {
  const [showOval, setShowOval] = useState(false)
  const [showHeading, setShowHeading] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ovalTimer = setTimeout(() => {
      setShowOval(true)
    }, 500)

    const headingTimer = setTimeout(() => {
      setShowHeading(true)
    }, 1000)

    const servicesTimer = setTimeout(() => {
      setShowServices(true)
    }, 1800)

    return () => {
      clearTimeout(ovalTimer)
      clearTimeout(headingTimer)
      clearTimeout(servicesTimer)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
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

      <div className="absolute top-8 left-6 z-20">
        <div
          className={`transition-all duration-1000 transform ${
            showOval ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col relative">
            <div className="flex items-center gap-1 mb-1">
              <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-12 md:h-14 filter drop-shadow-lg" />
              <div className="flex flex-col justify-end -ml-2 mb-1">
                <p className="text-gold font-sans text-[6px] md:text-[7px] font-light tracking-[0.25em] uppercase opacity-80">est 1924</p>
              </div>
            </div>
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold text-platinum tracking-wide ml-8 gradient-text text-shadow-luxury">
              Chartered Accountants, Business & Tax Advisers
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 py-24 flex flex-col items-center justify-center min-h-screen">
        <div
          className={`transition-all duration-1200 ease-out transform ${
            showHeading ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 blur-2xl opacity-30">
              <div className="w-full h-full bg-gold/20 rounded-full"></div>
            </div>

            <div className="relative shimmer bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 backdrop-blur-sm px-12 py-10 md:px-20 md:py-14 lg:px-28 lg:py-16 shadow-2xl border border-gold/30">
              <div className="absolute inset-0 border border-gold/10 m-3"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/50"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/50"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/50"></div>

              <h1 className="relative z-10 font-serif text-4xl md:text-6xl lg:text-7xl font-light text-center leading-tight">
                <span className="block gradient-text text-shadow-luxury font-medium mb-2 md:mb-3 tracking-wide">A Century of</span>
                <span className="block text-platinum text-shadow-luxury font-light tracking-wider">Trusted Expertise</span>
              </h1>

              <div className="mt-6 md:mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-0 right-0 z-10 px-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative cursor-pointer group text-center transition-all duration-700 transform ${
                  showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/90 backdrop-blur-sm border border-gold/40 px-8 py-10 transition-all duration-500 shadow-2xl hover-lift overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-gold/60"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-gold/60"></div>

                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-platinum to-transparent mx-auto mb-4 opacity-60"></div>
                    <h3 className="font-sans text-sm md:text-base font-semibold text-platinum leading-tight tracking-wide group-hover:text-platinum transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-platinum to-transparent mx-auto mt-4 opacity-60"></div>
                  </div>
                </div>

                {hoveredService === index && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-6 w-80 bg-gradient-to-br from-navy-dark via-navy to-navy-dark backdrop-blur-md border border-gold/50 px-6 py-5 shadow-2xl animate-slide-in z-50">
                    <div className="absolute inset-0 border border-gold/20 m-2"></div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-gold/50"></div>
                    <p className="relative font-sans text-sm text-platinum/90 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                )}
              </div>
            ))}
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
