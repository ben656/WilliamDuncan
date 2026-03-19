import { useEffect, useRef, useState } from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Accounts & Tax Compliance',
    description:
      'Expert guidance on business strategy, performance optimization and long-term planning.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Business Support & Advisory',
    description:
      'Full transaction support from valuation and due diligence through to successful completion.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Integrated Finance Planning',
    description:
      'Specialist strategies for wealth preservation, inheritance tax planning and succession.',
    icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  },
  {
    title: 'Accounts & Compliance',
    description:
      'Precise accounting, statutory reporting and corporate tax compliance.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/90 backdrop-blur-sm border border-sky-500/50 px-8 py-10 transition-all duration-500 shadow-2xl hover:border-sky-400/70 group">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-sky-400/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-sky-400/70"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-sky-400/70"></div>

        <div className="relative z-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mb-4 opacity-70"></div>
          <h3 className="font-serif text-2xl md:text-3xl font-light text-sky-400 mb-3 tracking-wide drop-shadow-lg">
            {service.title}
          </h3>
          <p className="font-sans text-slate-300 leading-relaxed">
            {service.description}
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent mt-4 opacity-70"></div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl opacity-30">
              <div className="w-full h-full bg-gold/20 rounded-full"></div>
            </div>
            <div className="relative bg-gradient-to-br from-navy-dark/95 via-navy/90 to-navy-dark/95 backdrop-blur-sm px-12 py-8 shadow-2xl border border-gold/30">
              <div className="absolute inset-0 border border-gold/10 m-3"></div>
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/50"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-gold/50"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-gold/50"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/50"></div>

              <h2 className="relative font-sans text-4xl md:text-5xl font-light gradient-text text-shadow-luxury tracking-wide">
                Our Services
              </h2>
              <div className="mt-4 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
