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
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #C6A75E 1px, transparent 1px),
                            linear-gradient(to bottom, #C6A75E 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 w-full px-6 py-24">
        <div className="max-w-2xl space-y-8">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <img src="/Adobe_Express_-_file.png" alt="William Duncan" className="h-16 md:h-20" />
              <div>
                <p className="text-gold font-sans text-sm font-semibold tracking-widest uppercase">est 1924</p>
              </div>
            </div>

            <p className="font-sans text-xl text-gold mb-8">
              Chartered Accountants, Business & Tax Advisers
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6 border-l-4 border-gold pl-6">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                  A Century of<br />
                  <span className="text-gold">Trusted Expertise</span>
                </h2>
              </div>

              <div className="space-y-0">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-center gap-3 py-1.5 px-2 -mx-2 rounded hover:bg-navy-dark/30 transition-all duration-200">
                      <span className="text-gold text-xl font-bold">•</span>
                      <div className="flex-1 flex items-center justify-between">
                        <p className="font-sans text-lg text-gray-300 group-hover:text-gold transition-colors">
                          {service.title}
                        </p>
                        <svg
                          className="w-4 h-4 text-gold/50 group-hover:text-gold transition-all duration-200 group-hover:translate-x-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>

                    {hoveredService === index && (
                      <div className="absolute left-full top-0 ml-8 w-80 bg-navy-dark border-l-2 border-gold px-6 py-4 rounded shadow-2xl animate-slide-in z-50">
                        <p className="font-sans text-sm text-gray-300 leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gold hover:bg-gold-dark text-navy font-sans font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Speak to an Adviser
                </button>
              </div>
            </div>
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
