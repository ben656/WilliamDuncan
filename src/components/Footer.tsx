import { useEffect, useState } from 'react'

const phrases = [
  'Authentic relations, entrenched client support',
  'Dynamic solutions to every challenge faced',
  'Intrinsic and evolving advice tailored to our valued clients',
]

export default function Footer() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % phrases.length)
        setVisible(true)
      }, 250)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="border-t border-gold/10" style={{ background: 'linear-gradient(to bottom, #1a1814, #111009)' }}>

      <div className="border-b border-gold/10 flex items-center justify-center" style={{ height: '42px' }}>
        <p
          className="font-serif text-center"
          style={{
            fontSize: 'clamp(0.5rem, 1.4vw, 0.68rem)',
            letterSpacing: '0.18em',
            color: 'rgba(198,167,94,0.68)',
            fontStyle: 'italic',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.25s ease',
            margin: 0,
            padding: '0 16px',
          }}
        >
          {phrases[index]}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-2 h-9 flex items-center">
        <div className="flex justify-center items-center gap-4 text-[9px] text-gray-400 w-full">
          <span className="font-semibold text-white tracking-wide">William Duncan CA</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
