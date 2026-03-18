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
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOval(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-95" />
      <div className="absolute inset-0 diamond-pattern" />

      <div className="absolute top-8 left-6 z-20">
        <div
          className={`transition-all duration-1000 transform ${
            showOval ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex flex-col relative">
            <div className="flex items-center gap-6 mb-0">
              <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-10 md:h-12" />
              <p className="text-gold font-sans text-[10px] font-semibold tracking-widest uppercase">est 1924</p>
            </div>
            <p className="font-sans text-lg md:text-xl lg:text-2xl font-bold metallic-chrome -mt-2">
              Chartered Accountants, Business & Tax Advisers
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 py-24 flex flex-col items-center">
        <div
          className={`transition-all duration-1000 transform ${
            showOval ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative flex items-center justify-center mb-16">
            <div className="relative border-4 border-gold bg-navy rounded-md px-16 py-12 md:px-24 md:py-16 shadow-2xl">
              <div className="absolute inset-0 border-2 border-gold/30 rounded-sm m-2"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5"></div>
              <h1 className="relative z-10 font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-center metallic-chrome leading-tight">
                A Century of
                <br />
                Trusted Expertise
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 transform w-full max-w-4xl ${
            showOval ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative cursor-pointer group text-center"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative border-3 border-gold bg-navy rounded px-6 py-6 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="absolute inset-0 border border-gold/30 rounded-sm m-1.5"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5"></div>
                  <h3 className="relative z-10 font-sans text-sm md:text-base font-semibold metallic-chrome group-hover:text-gold transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>

                {hoveredService === index && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 bg-navy-dark border-2 border-gold px-6 py-4 rounded-lg shadow-2xl animate-slide-in z-50">
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gold"></div>
                    <p className="font-sans text-sm metallic-chrome leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
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
    </section>
  )
}
