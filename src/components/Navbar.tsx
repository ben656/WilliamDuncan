interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
        <div className="hidden md:flex gap-8 items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm font-sans text-gray-300 hover:text-gold transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm font-sans bg-gold hover:bg-gold-dark text-navy px-6 py-2 rounded transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
