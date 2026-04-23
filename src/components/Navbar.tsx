interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '12px 28px',
      }}
    >
      <span
        className="font-serif"
        style={{
          fontSize: 'clamp(0.6rem, 1.5vw, 0.78rem)',
          letterSpacing: '0.13em',
          color: scrolled ? 'rgba(198,167,94,0.85)' : 'rgba(198,167,94,0.75)',
          fontStyle: 'italic',
          whiteSpace: 'nowrap',
          textShadow: '0 1px 6px rgba(0,0,0,0.8)',
          transition: 'color 0.3s ease',
        }}
      >
        Trusted by clients for a century
      </span>
    </nav>
  )
}
