import { useEffect, useRef, useState } from 'react'

interface Service {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Strategic Advisory',
    description:
      'Expert guidance on business strategy, performance optimization and long-term planning.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    title: 'Mergers & Acquisitions',
    description:
      'Full transaction support from valuation and due diligence through to successful completion.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Family Tax Planning',
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
      className={`group bg-navy-dark border border-gold/20 rounded-lg p-8 transition-all duration-500 hover:border-gold hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="mb-6">
        <svg
          className="w-12 h-12 text-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d={service.icon}></path>
        </svg>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-gray-100 mb-4 group-hover:text-gold transition-colors flex items-center gap-3">
        <svg
          className="w-4 h-4 text-gold flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        {service.title}
      </h3>
      <p className="font-sans text-gray-400 leading-relaxed">
        {service.description}
      </p>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Our <span className="text-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
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
