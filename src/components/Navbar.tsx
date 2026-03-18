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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        <a
          href="#contact"
          className="text-gold px-6 py-2 font-sans text-sm font-semibold hover:text-gold/80 transition-all duration-300"
        >
          Enquiries
        </a>
      </div>
    </nav>
  )
}
