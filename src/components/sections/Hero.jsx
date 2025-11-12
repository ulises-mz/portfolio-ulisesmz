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
            <p className="text-base md:text-lg lg:text-xl font-inter text-text-secondary animate-fadeInUp">
              Hola, soy
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-grotesk font-bold gradient-text animate-fadeInUp stagger-1 leading-tight">
              ULISES MÉNDEZ
            </h1>
            <div className="h-14 sm:h-16 md:h-20 flex items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-text-primary">
                {displayText}
                <span className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-neon-cyan ml-1 animate-pulse"></span>
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl font-inter text-text-secondary max-w-2xl leading-relaxed animate-fadeInUp stagger-2" style={{ opacity: 0.9 }}>
            Transformo ideas en experiencias digitales innovadoras con código limpio y diseño
            impactante
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp stagger-3">
            <button
              onClick={() => scrollToSection('proyectos')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-inter font-medium text-base sm:text-lg overflow-hidden transition-all duration-400 hover:scale-105"
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
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-inter font-medium text-base sm:text-lg overflow-hidden transition-all duration-400 hover:scale-105"
            >
              <div className="absolute inset-0 border-2 border-neon-cyan rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-full group-hover:translate-x-0"></div>
              <span className="relative z-10">Contactar</span>
            </button>
          </div>

          {/* Mobile SVG - simplified version */}
          <div className="flex md:hidden items-center justify-center mt-8">
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Simplified SVG for mobile */}
              <div className="animate-float">
                <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'drop-shadow(0 0 20px rgba(108, 99, 255, 0.5))' }}>
                  <defs>
                    <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF">
                        <animate attributeName="stop-color" values="#6C63FF; #00F0FF; #FF00AA; #6C63FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#00F0FF">
                        <animate attributeName="stop-color" values="#00F0FF; #FF00AA; #6C63FF; #00F0FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>

                  {/* Hexagon */}
                  <polygon
                    points="100,30 160,65 160,125 100,160 40,125 40,65"
                    fill="rgba(108, 99, 255, 0.1)"
                    stroke="url(#mobileGradient)"
                    strokeWidth="3"
                  >
                    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
                  </polygon>

                  {/* Code symbol */}
                  <g transform="translate(100, 95)">
                    <path d="M -15,-15 L -25,0 L -15,15" fill="none" stroke="url(#mobileGradient)" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M 15,-15 L 25,0 L 15,15" fill="none" stroke="url(#mobileGradient)" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                    </path>
                    <line x1="-5" y1="18" x2="5" y2="-18" stroke="url(#mobileGradient)" strokeWidth="4" strokeLinecap="round">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
                    </line>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - 3D Illustration / SVG Animation */}
        <div className="relative hidden md:flex items-center justify-center">
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Animated atomic/tech illustration */}
            <div className="absolute inset-0 flex items-center justify-center">

              {/* Orbital rings - múltiples anillos en diferentes ángulos */}
              {/* Ring 1 - Horizontal */}
              <div
                className="absolute w-80 h-80 rounded-full border-2 border-neon-violet opacity-30"
                style={{
                  animation: 'spin 20s linear infinite',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Particles on ring 1 */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`ring1-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-neon-violet shadow-lg"
                    style={{
                      top: '50%',
                      left: '50%',
                      boxShadow: '0 0 15px rgba(108, 99, 255, 0.8)',
                      animation: `orbit-ring1 ${8 + i * 2}s linear infinite`,
                      animationDelay: `${i * 2.5}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Ring 2 - Inclinado 60° */}
              <div
                className="absolute w-72 h-72 rounded-full border-2 border-neon-cyan opacity-30"
                style={{
                  animation: 'spin 15s linear infinite reverse',
                  transform: 'rotateX(60deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Particles on ring 2 */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`ring2-${i}`}
                    className="absolute w-2.5 h-2.5 rounded-full bg-neon-cyan"
                    style={{
                      top: '50%',
                      left: '50%',
                      boxShadow: '0 0 15px rgba(0, 240, 255, 0.8)',
                      animation: `orbit-ring2 ${10 + i * 1.5}s linear infinite`,
                      animationDelay: `${i * 2}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Ring 3 - Vertical */}
              <div
                className="absolute w-64 h-64 rounded-full border-2 border-neon-magenta opacity-30"
                style={{
                  animation: 'spin 18s linear infinite',
                  transform: 'rotateY(90deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Particles on ring 3 */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`ring3-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-neon-magenta"
                    style={{
                      top: '50%',
                      left: '50%',
                      boxShadow: '0 0 15px rgba(255, 0, 170, 0.8)',
                      animation: `orbit-ring3 ${12 + i * 2}s linear infinite`,
                      animationDelay: `${i * 3}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Center Core - SVG Tech Symbol */}
              <div className="relative w-56 h-56 flex items-center justify-center animate-float">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(108, 99, 255, 0.6))',
                  }}
                >
                  <defs>
                    <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF">
                        <animate attributeName="stop-color" values="#6C63FF; #00F0FF; #FF00AA; #6C63FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#00F0FF">
                        <animate attributeName="stop-color" values="#00F0FF; #FF00AA; #6C63FF; #00F0FF" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#FF00AA">
                        <animate attributeName="stop-color" values="#FF00AA; #6C63FF; #00F0FF; #FF00AA" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>

                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Outer hexagon */}
                  <polygon
                    points="100,20 170,55 170,130 100,165 30,130 30,55"
                    fill="none"
                    stroke="url(#coreGradient)"
                    strokeWidth="3"
                    opacity="0.6"
                    filter="url(#glow)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 100 100"
                      to="360 100 100"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </polygon>

                  {/* Inner hexagon */}
                  <polygon
                    points="100,40 150,65 150,115 100,140 50,115 50,65"
                    fill="rgba(108, 99, 255, 0.1)"
                    stroke="url(#coreGradient)"
                    strokeWidth="2"
                    opacity="0.8"
                    filter="url(#glow)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 100 100"
                      to="0 100 100"
                      dur="20s"
                      repeatCount="indefinite"
                    />
                  </polygon>

                  {/* Code brackets - animated */}
                  <g transform="translate(100, 92)" filter="url(#glow)">
                    {/* Left bracket < */}
                    <path
                      d="M -15,-15 L -25,0 L -15,15"
                      fill="none"
                      stroke="url(#coreGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
                    </path>

                    {/* Right bracket > */}
                    <path
                      d="M 15,-15 L 25,0 L 15,15"
                      fill="none"
                      stroke="url(#coreGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="0.5s" />
                    </path>

                    {/* Forward slash / */}
                    <line
                      x1="-5"
                      y1="18"
                      x2="5"
                      y2="-18"
                      stroke="url(#coreGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    >
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" begin="1s" />
                    </line>
                  </g>

                  {/* Corner accents */}
                  {[[100,20], [170,55], [170,130], [100,165], [30,130], [30,55]].map(([x, y], i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="url(#coreGradient)"
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        values="3;5;3"
                        dur="2s"
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                      />
                    </circle>
                  ))}

                  {/* Circuit lines */}
                  <line x1="100" y1="20" x2="100" y2="0" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                  <line x1="170" y1="55" x2="190" y2="45" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                  <line x1="170" y1="130" x2="190" y2="140" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                  <line x1="100" y1="165" x2="100" y2="185" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                  <line x1="30" y1="130" x2="10" y2="140" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                  <line x1="30" y1="55" x2="10" y2="45" stroke="url(#coreGradient)" strokeWidth="2" opacity="0.4" />
                </svg>

                {/* Pulsing energy core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-magenta opacity-20 blur-xl animate-pulse"></div>
                </div>
              </div>

              {/* Small floating particles around */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`float-${i}`}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: ['#6C63FF', '#00F0FF', '#FF00AA', '#00FFA3'][i % 4],
                    boxShadow: `0 0 10px ${['#6C63FF', '#00F0FF', '#FF00AA', '#00FFA3'][i % 4]}`,
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animation: `float ${4 + i}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
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
          { icon: 'Instagram', href: 'https://instagram.com/_ulisesmz_', color: '#FF00AA' },
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
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-xs sm:text-sm font-inter text-text-tertiary hidden sm:block">Scroll para explorar</span>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-neon-violet rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:h-3 bg-neon-violet rounded-full animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit-ring1 {
          from {
            transform: rotate(0deg) translateX(160px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(160px) rotate(-360deg);
          }
        }

        @keyframes orbit-ring2 {
          from {
            transform: rotate(0deg) translateX(144px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(144px) rotate(-360deg);
          }
        }

        @keyframes orbit-ring3 {
          from {
            transform: rotate(0deg) translateX(128px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(128px) rotate(-360deg);
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
