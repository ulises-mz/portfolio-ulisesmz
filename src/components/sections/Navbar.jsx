import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'h-14 sm:h-16 glass' : 'h-16 sm:h-20 bg-transparent'
      }`}
      style={{
        borderBottom: scrolled ? '1px solid rgba(108, 99, 255, 0.2)' : 'none',
        boxShadow: scrolled ? '0 8px 32px rgba(108, 99, 255, 0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => scrollToSection('inicio')}
        >
          <div className="relative">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md sm:rounded-lg glass border-2 border-neon-violet flex items-center justify-center font-grotesk font-bold text-lg sm:text-xl gradient-text group-hover:scale-110 transition-transform duration-300">
              UM
            </div>
            <div className="absolute inset-0 rounded-md sm:rounded-lg bg-neon-violet opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative font-inter font-medium transition-colors duration-300 group ${
                activeSection === link.id ? 'text-neon-cyan' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
              {activeSection === link.id && (
                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-neon-violet rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Download CV Button */}
        <div className="hidden md:block">
          <a
            href="/CV-Ulises-Mendez.pdf"
            download="CV-Ulises-Mendez.pdf"
            className="relative px-6 py-2.5 rounded-lg font-inter font-medium overflow-hidden group inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0.5 bg-dark-primary rounded-lg"></div>
            <span className="relative z-10 gradient-text">Descargar CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-neon-violet transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-neon-cyan transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-neon-magenta transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 glass transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-2xl font-grotesk font-bold transition-all duration-300 ${
                activeSection === link.id
                  ? 'gradient-text scale-110'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/CV-Ulises-Mendez.pdf"
            download="CV-Ulises-Mendez.pdf"
            className="px-8 py-3 rounded-lg gradient-bg font-inter font-medium text-lg inline-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
