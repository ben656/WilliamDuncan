interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end">
        <a
          href="#"
          className="font-sans text-xs font-semibold tracking-widest uppercase text-gold border border-gold/50 px-4 py-2 hover:bg-gold/10 hover:border-gold transition-all duration-300"
        >
          Client Guides
        </a>
      </div>
    </nav>
  )
}
