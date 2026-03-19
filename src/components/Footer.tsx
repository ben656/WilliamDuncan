import { useEffect, useState } from 'react'

const taglinePhrases = [
  'Dynamic Solutions for Valued Clients',
  'Intrinsic Relationships for Evolving Strategy',
]

export default function Footer() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setPhraseIndex(i => (i + 1) % taglinePhrases.length)
        setFading(false)
      }, 700)
    }, 5000)
    return () => clearInterval(interval)
  }, [visible])

  return (
    <footer className="bg-gradient-to-b from-[#0a1628] to-[#050d1a] border-t border-gold/10">
      <div className="border-b border-gold/10 py-3 flex items-center justify-center min-h-[2.5rem]">
        <p
          className="font-serif text-[11px] tracking-[0.22em] uppercase text-center transition-opacity duration-700"
          style={{
            opacity: visible && !fading ? 1 : 0,
            color: 'rgba(198,167,94,0.65)',
          }}
        >
          {taglinePhrases[phraseIndex]}
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
