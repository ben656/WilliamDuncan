import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Tax Planning',
    summary: 'Strategic tax optimization and planning to minimize your liabilities while maximizing wealth creation opportunities.'
  },
  {
    title: 'Business Advisory',
    summary: 'Expert guidance for business growth, strategy, and operational efficiency tailored to your specific needs.'
  },
  {
    title: 'Accounting Services',
    summary: 'Comprehensive accounting solutions including bookkeeping, financial statements, and regulatory compliance.'
  },
  {
    title: 'Mergers & Acquisitions',
    summary: 'Expert guidance on mergers, acquisitions, due diligence, and business valuations to ensure successful transactions.'
  },
  {
    title: 'Payroll & HR',
    summary: 'Complete payroll management, employee benefits administration, and human resources compliance support.'
  },
  {
    title: 'Wealth Management',
    summary: 'Personalized wealth planning and investment strategies designed for long-term financial security.'
  }
]

export default function Hero() {
  const [showOval, setShowOval] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOval(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-95" />

      <div className="absolute top-8 left-6 z-20">
        <div
          className={`transition-all duration-1000 transform ${
            showOval ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="flex items-center gap-4 mb-3">
            <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-14 md:h-16" />
            <div>
              <p className="text-gold font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">est 1924</p>
            </div>
          </div>
          <p className="font-sans text-sm md:text-base text-gold">
            Chartered Accountants, Business & Tax Advisers
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full px-6 py-24 flex flex-col items-center">
        <div
          className={`transition-all duration-1000 transform ${
            showOval ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative flex items-center justify-center mb-16">
            <div
              className="relative border-2 border-gold rounded-full px-16 py-12 md:px-24 md:py-16 shadow-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(/2022-12-22.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 backdrop-blur-sm"></div>
              <h1 className="relative z-10 font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-center">
                <span className="text-white">A Century of</span>
                <br />
                <span className="text-white">Trusted Expertise</span>
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 transform w-full max-w-6xl ${
            showOval ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative cursor-pointer group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center gap-2 transition-all duration-300">
                  <span className="text-gold text-xs md:text-sm">◆</span>
                  <h3 className="font-sans text-sm md:text-base font-semibold text-gray-300 group-hover:text-gold transition-colors leading-tight">
                    {service.title}
                  </h3>
                </div>

                {hoveredService === index && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-4 w-72 bg-navy-dark border-2 border-gold px-6 py-4 rounded-lg shadow-2xl animate-slide-in z-50">
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gold"></div>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed">
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
