import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [counts, setCounts] = useState({ age: 0, tech: 0, projects: 0 });
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { age: 22, tech: 10, projects: 15 };
    const increment = {
      age: targets.age / steps,
      tech: targets.tech / steps,
      projects: targets.projects / steps,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        age: Math.min(Math.floor(increment.age * currentStep), targets.age),
        tech: Math.min(Math.floor(increment.tech * currentStep), targets.tech),
        projects: Math.min(Math.floor(increment.projects * currentStep), targets.projects),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, duration / steps);
  };

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236C63FF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="md:col-span-2 flex justify-center md:justify-start">
            <div className="relative">
              {/* Hexagon container */}
              <div className="relative w-80 h-80 md:sticky md:top-32">
                {/* Rotating border */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                  style={{ animation: 'spin 20s linear infinite' }}
                >
                  <defs>
                    <linearGradient id="hexBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" />
                      <stop offset="50%" stopColor="#00F0FF" />
                      <stop offset="100%" stopColor="#FF00AA" />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                    fill="none"
                    stroke="url(#hexBorder)"
                    strokeWidth="2"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(108, 99, 255, 0.5))' }}
                  />
                </svg>

                {/* Image placeholder */}
                <div className="absolute inset-4 flex items-center justify-center">
                  <div
                    className="w-full h-full rounded-2xl overflow-hidden relative group"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    {/* Profile Image */}
                    <img
                      src="/images/profile.png"
                      alt="Ulises Méndez"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback si la imagen no se encuentra
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'block';
                      }}
                    />

                    {/* Fallback placeholder (hidden por defecto) */}
                    <div className="w-full h-full bg-gradient-to-br from-neon-violet via-neon-cyan to-neon-magenta opacity-20 group-hover:opacity-30 transition-opacity duration-500 hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-grotesk font-bold gradient-text group-hover:scale-110 transition-transform duration-500">
                          UM
                        </div>
                      </div>
                    </div>

                    {/* Scan line effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-20 pointer-events-none"
                      style={{
                        animation: 'scan 8s linear infinite',
                        height: '20%',
                      }}
                    ></div>
                  </div>
                </div>

                {/* Floating particles around image */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-neon-violet to-neon-cyan animate-float"
                    style={{
                      top: `${10 + Math.random() * 80}%`,
                      left: `${10 + Math.random() * 80}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}

                {/* Orbital ring */}
                <div
                  className="absolute inset-0 border-2 border-neon-cyan rounded-full opacity-20"
                  style={{
                    animation: 'spin 15s linear infinite reverse',
                    transform: 'scale(1.2)',
                  }}
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-neon-cyan rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="md:col-span-3 space-y-8">
            {/* Section label */}
            <div className="space-y-4">
              <p
                className="text-sm font-inter font-medium tracking-widest text-neon-violet uppercase"
                style={{ opacity: 0.8 }}
              >
                Sobre Mí
              </p>
              <h2 className="text-4xl md:text-5xl font-grotesk font-bold gradient-text leading-tight">
                Construyendo el futuro digital desde Costa Rica 🇨🇷
              </h2>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p className="animate-fadeInUp">
                Soy un{' '}
                <span className="text-neon-cyan font-semibold">
                  ingeniero en computadores apasionado
                </span>{' '}
                por crear experiencias digitales que impactan. Con 22 años, he dedicado mi carrera
                a dominar el arte del desarrollo de software y la innovación tecnológica.
              </p>

              <p className="animate-fadeInUp stagger-1">
                Graduado del{' '}
                <span className="text-neon-violet font-semibold">
                  Instituto Tecnológico de Costa Rica
                </span>
                , donde me especialicé en algoritmos, arquitectura de sistemas y desarrollo de
                software con conocimientos avanzados en IA, bases de datos y desarrollo web/móvil.
              </p>

              <p className="animate-fadeInUp stagger-2">
                Fundador de{' '}
                <span className="text-neon-magenta font-semibold">CodeINVEST</span>, una agencia
                dedicada a transformar ideas en soluciones digitales inteligentes. También formé
                parte de <span className="text-neon-green font-semibold">Sirius Dev</span>, donde
                desarrollé proyectos innovadores para diversos clientes.
              </p>

              <p className="animate-fadeInUp stagger-3">
                Mi filosofía es simple:{' '}
                <span className="gradient-text font-semibold">
                  código limpio, diseño impactante y resultados excepcionales
                </span>
                . Cada línea de código que escribo está pensada para crear valor y generar impacto
                real.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                {
                  number: counts.age,
                  label: 'Años',
                  subtitle: 'Joven innovador',
                  color: 'neon-violet',
                },
                {
                  number: `${counts.tech}+`,
                  label: 'Tecnologías',
                  subtitle: 'Stack versátil',
                  color: 'neon-cyan',
                },
                {
                  number: `${counts.projects}+`,
                  label: 'Proyectos',
                  subtitle: 'Experiencia real',
                  color: 'neon-magenta',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative glass-light rounded-xl p-6 border border-text-tertiary hover:border-neon-violet transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(108,99,255,0.05), rgba(0,240,255,0.05))',
                  }}
                >
                  <div className="space-y-2">
                    <div
                      className={`text-4xl font-grotesk font-bold gradient-text-${stat.color}`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm font-inter font-semibold text-text-primary">
                      {stat.label}
                    </div>
                    <div className="text-xs font-inter text-text-tertiary">{stat.subtitle}</div>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-xl bg-${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Connection lines between stats (decorative) */}
            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none">
              <line
                x1="15%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#lineGradient1)"
                strokeWidth="2"
              />
              <line
                x1="50%"
                y1="50%"
                x2="85%"
                y2="50%"
                stroke="url(#lineGradient2)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="lineGradient1">
                  <stop offset="0%" stopColor="#6C63FF" />
                  <stop offset="100%" stopColor="#00F0FF" />
                </linearGradient>
                <linearGradient id="lineGradient2">
                  <stop offset="0%" stopColor="#00F0FF" />
                  <stop offset="100%" stopColor="#FF00AA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Binary code background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="text-xs font-mono text-neon-violet leading-loose">
          01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010
          01101100 01100100
        </div>
      </div>
    </section>
  );
};

export default About;
