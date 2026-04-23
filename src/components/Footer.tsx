import { useEffect, useState } from 'react'

const statements = [
  'Authentic relations, entrenched client support',
  'Dynamic solutions to every challenge faced',
  'Intrinsic and evolving advice tailored to our valued clients',
  'Over a century of trusted expertise',
  'Partner-led. Discreet. Results-driven.',
]

export default function Footer() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent(c => (c + 1) % statements.length)
        setVisible(true)
      }, 600)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer style={{ background: '#080e1a', borderTop: '1px solid rgba(198,167,94,0.08)' }}>

      {/* Rotating statement — centre aligned */}
      <div
        style={{
          padding: 'clamp(20px, 3vh, 36px) 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '1px solid rgba(198,167,94,0.06)',
          minHeight: '80px',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', maxWidth: '600px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(198,167,94,0.2))' }} />
          <span style={{ color: 'rgba(198,167,94,0.3)', fontSize: '6px' }}>◆</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(198,167,94,0.2))' }} />
        </div>
        <p
          className="font-serif text-center"
          style={{
            fontSize: 'clamp(0.62rem, 1.5vw, 0.82rem)',
            letterSpacing: '0.18em',
            color: 'rgba(198,167,94,0.75)',
            fontStyle: 'italic',
            margin: 0,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          {statements[current]}
        </p>
      </div>

      {/* Bottom row — client alert left only */}
      <div style={{ padding: '0 24px', height: '52px', display: 'flex', alignItems: 'center' }}>
        <a
          href="/wd-hub-client-alert.html"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans flex items-center gap-3"
          style={{
            textDecoration: 'none',
            border: '1px solid rgba(140,31,46,0.40)',
            borderRadius: '2px',
            padding: '5px 14px',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(140,31,46,0.75)'
            el.style.background = 'rgba(140,31,46,0.05)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(140,31,46,0.40)'
            el.style.background = 'transparent'
          }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '0.28em', fontWeight: 700, color: '#8c1f2e', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            Client Alert
          </span>
          <span style={{ color: 'rgba(140,31,46,0.3)', fontSize: '7px' }}>◆</span>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', color: 'rgba(229,228,226,0.6)', fontWeight: 500, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            HMRC Digital Enforcement
          </span>
        </a>
      </div>

    </footer>
  )
}
