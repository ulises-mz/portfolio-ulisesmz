const Projects = () => {
  const featuredProject = {
    title: 'Cash of Grapplers',
    subtitle: 'Sistema de ticketera digital con QR',
    description:
      'Plataforma completa de gestión de eventos con generación de códigos QR únicos, app móvil de validación y dashboard administrativo con métricas en tiempo real.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'QR'],
    features: [
      'Generación de códigos QR únicos',
      'App móvil de validación',
      'Dashboard administrativo con métricas',
      'Autenticación segura JWT',
    ],
    demoLink: '#',
    githubLink: '#',
    image: '/projects/grapplers.png',
  };

  const mainProjects = [
    {
      title: 'Laser Zone Arena',
      description:
        'Sistema completo de gestión para arena de láser tag con reservaciones en línea, control de equipos y estadísticas de juego.',
      tech: ['React', 'phpMyAdmin', 'MySQL', 'Tailwind'],
      features: [
        'Sistema de reservas online',
        'Gestión de equipamiento',
        'Estadísticas de jugadores',
        'Panel administrativo',
      ],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'CodeINVEST Platform',
      description:
        'Sitio web corporativo para agencia de desarrollo con portfolio interactivo, blog técnico y sistema de cotizaciones automatizado.',
      tech: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
      features: [
        'Portfolio interactivo',
        'Blog con MDX',
        'Sistema de cotizaciones',
        'Animaciones avanzadas',
      ],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  const otherProjects = [
    { title: 'E-commerce Dashboard', tech: ['React', 'Node', 'MongoDB'], icon: '🛒' },
    { title: 'Weather App', tech: ['React', 'API', 'CSS'], icon: '🌤️' },
    { title: 'Task Manager', tech: ['Vue', 'Firebase'], icon: '✅' },
    { title: 'Portfolio Generator', tech: ['Next.js', 'Tailwind'], icon: '🎨' },
    { title: 'Chat Application', tech: ['Socket.io', 'React'], icon: '💬' },
    { title: 'Blog Platform', tech: ['Gatsby', 'GraphQL'], icon: '📝' },
  ];

  return (
    <section
      id="proyectos"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.95), rgba(10, 10, 15, 0.95)), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%236C63FF' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-inter font-medium tracking-widest text-neon-violet uppercase opacity-80">
            Proyectos Destacados
          </p>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold gradient-text">
            Soluciones digitales que generan impacto
          </h2>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <div className="group relative glass rounded-2xl p-8 md:p-12 border border-text-tertiary hover:border-neon-violet transition-all duration-500 overflow-hidden">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-neon-violet to-neon-magenta mb-6">
              <span className="text-lg">🏆</span>
              <span className="text-sm font-inter font-semibold">Proyecto Destacado</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left - Project Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-grotesk font-bold text-text-primary mb-2">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-neon-cyan font-inter font-medium">
                    {featuredProject.subtitle}
                  </p>
                </div>

                <p className="text-lg text-text-secondary leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg glass-light border border-text-tertiary text-sm font-inter font-medium text-text-primary hover:border-neon-violet hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {featuredProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-neon-green text-xl">✓</span>
                      <span className="text-text-secondary font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 rounded-lg gradient-bg font-inter font-medium hover:scale-105 transition-transform duration-300 glow-violet">
                    Ver Demo
                  </button>
                  <button className="px-6 py-3 rounded-lg glass border border-neon-violet font-inter font-medium hover:scale-105 transition-all duration-300">
                    GitHub →
                  </button>
                </div>
              </div>

              {/* Right - Mockup */}
              <div className="relative">
                <div className="aspect-video rounded-xl glass-light border border-neon-violet overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  {/* Mockup placeholder with gradient */}
                  <div className="w-full h-full bg-gradient-to-br from-neon-violet via-neon-cyan to-neon-magenta opacity-20 flex items-center justify-center">
                    <div className="text-6xl font-grotesk font-bold gradient-text">QR</div>
                  </div>

                  {/* Scanning effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan to-transparent opacity-30 h-1/3"
                    style={{ animation: 'scan 3s linear infinite' }}
                  ></div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10"></div>
              </div>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    'linear-gradient(90deg, #6C63FF, #00F0FF, #FF00AA, #6C63FF)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-border 3s linear infinite',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainProjects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative glass rounded-xl p-8 border border-text-tertiary hover:border-neon-cyan transition-all duration-500 hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Mockup */}
              <div className="aspect-video rounded-lg glass-light border border-neon-cyan mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-purple opacity-15 flex items-center justify-center">
                  <div className="text-4xl font-mono font-bold gradient-text">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-grotesk font-bold text-text-primary mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary mb-4">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-inter font-medium glass-light border border-text-tertiary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <span className="text-neon-cyan">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 py-2 rounded-lg glass border border-neon-cyan hover:bg-neon-cyan hover:bg-opacity-10 font-inter text-sm font-medium transition-all duration-300">
                  Ver Demo
                </button>
                <button className="flex-1 py-2 rounded-lg glass border border-text-tertiary hover:border-neon-violet font-inter text-sm font-medium transition-all duration-300">
                  GitHub
                </button>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-neon-cyan opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-grotesk font-bold text-center mb-8 gradient-text">
            Otros Proyectos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherProjects.map((project, idx) => (
              <div
                key={project.title}
                className="group relative aspect-square glass-light rounded-xl p-4 border border-text-tertiary hover:border-neon-magenta transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <p className="text-sm font-inter font-semibold text-center text-text-primary">
                    {project.title}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-text-tertiary font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-violet to-neon-magenta opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scanner line decoration */}
      <div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-20"
        style={{
          top: '50%',
          animation: 'scan-horizontal 12s linear infinite',
        }}
      ></div>

      <style jsx>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
