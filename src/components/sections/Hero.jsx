import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Ingeniero en Computadores 💻',
    'Desarrollador Full Stack 🚀',
    'Fundador de CodeINVEST 🏢',
    'Creador de soluciones IA 🤖',
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 80
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div className="space-y-8">
          {/* Availability badge */}
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neon-green"
            style={{ background: 'rgba(0, 255, 163, 0.1)' }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
            </span>
            <span className="text-sm font-inter text-neon-green">Disponible para proyectos</span>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-inter text-text-secondary animate-fadeInUp">
              Hola, soy
            </p>
            <h1 className="text-5xl md:text-7xl font-grotesk font-bold gradient-text animate-fadeInUp stagger-1">
              ULISES MÉNDEZ
            </h1>
            <div className="h-16 md:h-20 flex items-center">
              <h2 className="text-2xl md:text-3xl font-poppins font-semibold text-text-primary">
                {displayText}
                <span className="inline-block w-0.5 h-8 bg-neon-cyan ml-1 animate-pulse"></span>
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-inter text-text-secondary max-w-2xl leading-relaxed animate-fadeInUp stagger-2" style={{ opacity: 0.9 }}>
            Transformo ideas en experiencias digitales innovadoras con código limpio y diseño
            impactante
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp stagger-3">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="group relative px-8 py-4 rounded-xl font-inter font-medium text-lg overflow-hidden transition-all duration-400 hover:scale-105"
            >
              <div className="absolute inset-0 gradient-bg"></div>
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Ver Portafolio</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 glow-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="group relative px-8 py-4 rounded-xl font-inter font-medium text-lg overflow-hidden transition-all duration-400 hover:scale-105"
            >
              <div className="absolute inset-0 border-2 border-neon-cyan rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></div>
              <span className="relative z-10">Contactar</span>
            </button>
          </div>
        </div>

        {/* Right side - 3D Illustration / SVG Animation */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Animated circuit/tech illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer ring */}
              <div className="absolute w-80 h-80 rounded-full border border-neon-violet opacity-20 animate-spin-slow"></div>
              <div
                className="absolute w-64 h-64 rounded-full border border-neon-cyan opacity-30"
                style={{ animation: 'spin 20s linear infinite reverse' }}
              ></div>

              {/* Center hexagon */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full animate-float"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(108, 99, 255, 0.5))' }}
                >
                  <polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill="url(#hexGradient)"
                    stroke="url(#hexStroke)"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF00AA" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="hexStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" />
                      <stop offset="50%" stopColor="#00F0FF" />
                      <stop offset="100%" stopColor="#FF00AA" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating code symbols */}
                <div className="absolute inset-0 flex items-center justify-center font-mono text-neon-violet text-4xl font-bold">
                  &lt;/&gt;
                </div>
              </div>

              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan"
                  style={{
                    top: '50%',
                    left: '50%',
                    animation: `orbit ${5 + i}s linear infinite`,
                    animationDelay: `${i * 0.5}s`,
                    transformOrigin: `${100 + i * 20}px`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social links sidebar */}
      <div className="fixed left-8 bottom-32 hidden lg:flex flex-col space-y-6 z-20">
        {[
          { icon: 'GitHub', href: 'https://github.com/UlisesMZ03', color: '#6C63FF' },
          { icon: 'LinkedIn', href: 'https://linkedin.com/in/ulisesmz', color: '#00F0FF' },
          { icon: 'Instagram', href: 'https://instagram.com/ulisesmz', color: '#FF00AA' },
          { icon: 'WhatsApp', href: 'https://wa.me/50661274805', color: '#00FFA3' },
        ].map((social, i) => (
          <a
            key={social.icon}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 flex items-center justify-center rounded-lg glass border border-text-tertiary hover:border-neon-violet transition-all duration-300 hover:scale-110 hover:rotate-6"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="text-xs font-mono text-text-secondary group-hover:text-neon-cyan transition-colors">
              {social.icon.slice(0, 2).toUpperCase()}
            </span>
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              style={{ background: social.color }}
            ></div>
          </a>
        ))}
        {/* Connecting line */}
        <div className="w-0.5 h-20 bg-gradient-to-b from-neon-violet to-transparent mx-auto"></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-sm font-inter text-text-tertiary">Scroll para explorar</span>
        <div className="w-6 h-10 border-2 border-neon-violet rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-neon-violet rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
