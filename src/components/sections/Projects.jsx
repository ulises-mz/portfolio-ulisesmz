const Projects = () => {
  const featuredProject = {
    title: 'Cash of Grapplers',
    subtitle: 'Sistema de ticketera digital con QR',
    description:
      'Plataforma completa de gestión de eventos con generación de códigos QR únicos, app móvil de validación en tiempo real y dashboard administrativo con métricas detalladas para optimizar la experiencia del usuario.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'QR Code'],
    features: [
      'Generación automática de tickets con códigos QR únicos',
      'App móvil de escaneo y validación en tiempo real',
      'Dashboard con estadísticas y métricas de eventos',
      'Sistema de autenticación seguro con JWT',
      'Reducción del 50% en tiempo de check-in',
      '2K+ entradas procesadas exitosamente',
    ],
    metrics: [
      { label: 'Entradas procesadas', value: '2K+' },
      { label: 'Reducción tiempo check-in', value: '50%' },
      { label: 'Usuarios activos', value: '500+' },
    ],
    demoLink: 'https://cashofgrapplers.com',
    githubLink: 'https://github.com/UlisesMZ03',
    image: '/projects/grapplers.png',
  };

  const mainProjects = [
    {
      title: 'Laser Zone Arena',
      description:
        'Sistema integral de gestión para arena de láser tag con reservaciones en línea, control de equipos, timer de partidas y estadísticas completas de jugadores en tiempo real.',
      tech: ['React', 'PHP', 'MySQL', 'phpMyAdmin', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Sistema de reservas online con calendario interactivo',
        'Timer digital para control de partidas',
        'Gestión completa de equipamiento y chalecos',
        'Estadísticas detalladas de jugadores y equipos',
        'Panel administrativo con reportes en tiempo real',
        'Integración con sistema de pagos',
      ],
      metrics: [
        { label: 'Partidas gestionadas', value: '1.5K+' },
        { label: 'Uptime', value: '99.5%' },
      ],
      demoLink: 'https://laserzonearena.com',
      githubLink: 'https://github.com/UlisesMZ03',
    },
    {
      title: 'Simacr PWA',
      description:
        'Progressive Web App desarrollada para Simacr, conectada a Shopify API para gestión de inventario, pedidos y sincronización en tiempo real con la plataforma de e-commerce.',
      tech: ['React', 'Shopify API', 'PWA', 'Service Workers', 'Node.js', 'REST API'],
      features: [
        'Sincronización en tiempo real con Shopify',
        'Gestión offline con Service Workers',
        'Control de inventario y productos',
        'Sistema de pedidos optimizado',
        'Notificaciones push para actualizaciones',
        'Interfaz responsiva y rápida',
      ],
      metrics: [
        { label: 'Productos gestionados', value: '500+' },
        { label: 'Velocidad de carga', value: '<2s' },
      ],
      demoLink: 'https://simacr.com',
      githubLink: '#',
    },
    {
      title: 'CodeINVEST Website',
      description:
        'Sitio web corporativo moderno para CodeINVEST, agencia de desarrollo de software. Incluye portfolio interactivo, sistema de contacto y secciones optimizadas para SEO.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO'],
      features: [
        'Portfolio interactivo con animaciones avanzadas',
        'Diseño responsivo y moderno',
        'Optimización SEO completa',
        'Sistema de contacto integrado',
        'Rendimiento optimizado con Next.js',
        'Animaciones fluidas con Framer Motion',
      ],
      metrics: [
        { label: 'Score Lighthouse', value: '95+' },
        { label: 'Tiempo de carga', value: '<1.5s' },
      ],
      demoLink: 'https://codeinvest.cr',
      githubLink: 'https://github.com/UlisesMZ03',
    },
  ];

  const otherProjects = [
    { title: 'Expedición CR', tech: ['WordPress', 'PHP', 'MySQL'], icon: '🌴', description: 'Sitio web para agencia de turismo' },
    { title: 'Compilador MiniC', tech: ['C++', 'Compiladores'], icon: '⚙️', description: 'Compilador académico' },
    { title: 'Simulador MIPS', tech: ['Assembly', 'C'], icon: '🖥️', description: 'Simulador de arquitectura' },
    { title: 'Sistema Prolog', tech: ['Prolog', 'Lógica'], icon: '🧠', description: 'Sistema experto' },
    { title: 'Shell Scripts', tech: ['Bash', 'Linux'], icon: '💻', description: 'Automatización de tareas' },
    { title: 'Proyecto Racket', tech: ['Racket', 'Funcional'], icon: '🔧', description: 'Programación funcional' },
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
                <ul className="space-y-3 mb-6">
                  {featuredProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-neon-green text-xl">✓</span>
                      <span className="text-text-secondary font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredProject.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-light rounded-lg p-4 border border-neon-violet border-opacity-30">
                      <p className="text-2xl font-grotesk font-bold gradient-text mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs text-text-tertiary font-inter">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={featuredProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg gradient-bg font-inter font-medium hover:scale-105 transition-transform duration-300 glow-violet"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg glass border border-neon-violet font-inter font-medium hover:scale-105 transition-all duration-300"
                  >
                    GitHub →
                  </a>
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
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-text-secondary">
                    <span className="text-neon-cyan">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-light rounded-lg p-3 border border-neon-cyan border-opacity-20">
                      <p className="text-xl font-grotesk font-bold gradient-text mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs text-text-tertiary font-inter">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg glass border border-neon-cyan hover:bg-neon-cyan hover:bg-opacity-10 font-inter text-sm font-medium transition-all duration-300 text-center"
                >
                  Ver Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-lg glass border border-text-tertiary hover:border-neon-violet font-inter text-sm font-medium transition-all duration-300 text-center"
                >
                  GitHub
                </a>
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <div
                key={project.title}
                className="group relative glass-light rounded-xl p-6 border border-text-tertiary hover:border-neon-magenta transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-scaleIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-base font-inter font-semibold text-text-primary">
                      {project.title}
                    </p>
                    <p className="text-xs text-text-secondary font-inter">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-text-tertiary font-mono glass rounded"
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
