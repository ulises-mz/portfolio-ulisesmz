import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  const quickLinks = [
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/UlisesMZ03', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ulisesmz', icon: 'IN' },
    { name: 'Instagram', url: 'https://instagram.com/ulisesmz', icon: 'IG' },
    { name: 'WhatsApp', url: 'https://wa.me/50661274805', icon: 'WA' },
    { name: 'Email', url: 'mailto:ulisesmendez@codeinvest.com', icon: '@' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 px-6 md:px-12 bg-gradient-to-b from-dark-primary to-black">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%236C63FF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top border with glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet to-transparent"></div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Branding */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-lg glass border-2 border-neon-violet flex items-center justify-center font-grotesk font-bold text-2xl gradient-text animate-pulse-slow">
                UM
              </div>
              <div>
                <h3 className="text-xl font-grotesk font-bold text-text-primary">
                  Ulises Méndez
                </h3>
                <p className="text-sm text-text-tertiary font-inter">
                  Desarrollando el futuro digital
                </p>
              </div>
            </div>

            <p className="text-text-secondary font-inter leading-relaxed">
              Ingeniero en computadores especializado en crear soluciones digitales innovadoras
              desde Costa Rica 🇨🇷
            </p>

            {/* Stats */}
            <div className="flex space-x-6">
              <div>
                <p className="text-2xl font-grotesk font-bold gradient-text">15+</p>
                <p className="text-xs text-text-tertiary">Proyectos</p>
              </div>
              <div>
                <p className="text-2xl font-grotesk font-bold gradient-text">10+</p>
                <p className="text-xs text-text-tertiary">Tecnologías</p>
              </div>
              <div>
                <p className="text-2xl font-grotesk font-bold gradient-text">22</p>
                <p className="text-xs text-text-tertiary">Años</p>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-grotesk font-bold text-text-primary mb-6 uppercase tracking-wider">
              Explorar
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center space-x-2 text-text-secondary hover:text-neon-cyan transition-all duration-300 font-inter"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-neon-cyan transition-all duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h4 className="text-lg font-grotesk font-bold text-text-primary mb-6 uppercase tracking-wider">
              Mantente Actualizado
            </h4>
            <p className="text-sm text-text-secondary mb-4 font-inter">
              Suscríbete para recibir noticias sobre nuevos proyectos y artículos
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-lg glass-light border border-neon-violet bg-transparent text-text-primary font-inter focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-20 transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg gradient-bg font-inter font-medium hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
              >
                <span>Suscribirse</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Bar */}
        <div className="py-8 border-t border-text-tertiary border-opacity-20">
          <div className="flex flex-wrap justify-center items-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center rounded-lg glass-light border border-text-tertiary hover:border-neon-violet transition-all duration-300 hover:scale-110 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
                title={social.name}
              >
                <span className="text-xs font-mono text-text-secondary group-hover:text-neon-cyan transition-colors">
                  {social.icon}
                </span>
                <div className="absolute inset-0 rounded-lg bg-neon-violet opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-text-tertiary border-opacity-20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-text-tertiary font-inter text-center md:text-left">
              © 2025 Ulises Méndez —{' '}
              <span className="text-neon-cyan">CodeINVEST</span> | Desarrollando el futuro desde
              Costa Rica 🇨🇷
            </p>

            {/* Tech stack */}
            <div className="flex items-center space-x-4 text-xs text-text-tertiary font-inter">
              <span className="flex items-center space-x-1">
                <span>Hecho con</span>
                <span className="text-neon-violet">React ⚛️</span>
              </span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary"></span>
              <span>Tailwind CSS</span>
              <span className="w-1 h-1 rounded-full bg-text-tertiary"></span>
              <span>Vite ⚡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <div
          className="h-full w-full bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta"
          style={{
            animation: 'shimmer 20s linear infinite',
            backgroundSize: '200% 100%',
          }}
        ></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-neon-violet rounded-full blur-3xl opacity-5 animate-pulse-slow"></div>
      <div
        className="absolute top-20 right-1/4 w-48 h-48 bg-neon-cyan rounded-full blur-3xl opacity-5 animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      ></div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
