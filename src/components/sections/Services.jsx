const Services = () => {
  const services = [
    {
      icon: '</>',
      title: 'Desarrollo Web',
      description: 'Sitios y aplicaciones web modernas, responsivas y optimizadas',
      features: ['Landing pages', 'E-commerce', 'Aplicaciones SaaS', 'Progressive Web Apps'],
      color: '#00F0FF',
      delay: 0,
    },
    {
      icon: '📱',
      title: 'Desarrollo Móvil',
      description: 'Apps nativas y multiplataforma para iOS y Android',
      features: ['Apps nativas', 'React Native', 'Flutter', 'Diseño UX/UI'],
      color: '#6C63FF',
      delay: 0.1,
    },
    {
      icon: '🤖',
      title: 'Automatizaciones IA',
      description: 'Integración de inteligencia artificial para optimizar procesos',
      features: ['Chatbots', 'ML Models', 'Data Analysis', 'Process Automation'],
      color: '#FF00AA',
      delay: 0.2,
    },
    {
      icon: '🎨',
      title: 'Diseño UI/UX',
      description: 'Interfaces intuitivas, atractivas y centradas en el usuario',
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems'],
      color: '#00FFA3',
      delay: 0.3,
    },
    {
      icon: '💡',
      title: 'Consultoría Tech',
      description: 'Asesoría estratégica para tu transformación digital',
      features: ['Tech Strategy', 'Code Review', 'Architecture', 'Best Practices'],
      color: '#FFD700',
      delay: 0.4,
    },
    {
      icon: '☁️',
      title: 'Hosting & Dominio',
      description: 'Infraestructura segura y mantenimiento continuo',
      features: ['Cloud Hosting', 'SSL Certificates', 'Backup', 'Monitoring'],
      color: '#4A90FF',
      delay: 0.5,
    },
  ];

  return (
    <section
      id="servicios"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12"
      style={{
        background: 'linear-gradient(135deg, rgba(10,10,15,1) 0%, rgba(19,19,26,1) 50%, rgba(10,10,15,1) 100%)',
        backgroundImage: `linear-gradient(135deg, rgba(10,10,15,0.95) 0%, rgba(19,19,26,0.95) 50%, rgba(10,10,15,0.95) 100%), url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236C63FF' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with CodeINVEST logo */}
        <div className="text-center space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16">
          {/* Logo animation */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              {['C', 'O', 'D', 'E'].map((letter, i) => (
                <span
                  key={i}
                  className="text-2xl sm:text-3xl font-grotesk font-bold gradient-text animate-fadeInUp inline-block"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <span className="text-2xl sm:text-3xl font-grotesk font-bold text-neon-cyan">INVEST</span>
          </div>

          <p className="text-xs sm:text-sm font-inter font-medium tracking-widest text-neon-violet uppercase opacity-80">
            Nuestros Servicios
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-grotesk font-bold gradient-text max-w-3xl mx-auto px-4">
            Transformamos ideas en soluciones digitales inteligentes
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group relative glass-light rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border border-text-tertiary hover:border-neon-violet transition-all duration-500 hover:-translate-y-2 animate-fadeInUp overflow-hidden"
              style={{ animationDelay: `${service.delay}s` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                style={{
                  background: `linear-gradient(135deg, ${service.color}33, ${service.color}11)`,
                  boxShadow: `0 0 20px ${service.color}22`,
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-grotesk font-bold text-text-primary mb-2 sm:mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 sm:space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-text-secondary">
                    <span className="text-neon-cyan flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover gradient overlay */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${service.color}, transparent)`,
                }}
              ></div>

              {/* Animated particles */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full animate-float"
                    style={{
                      background: service.color,
                      top: `${20 + i * 30}%`,
                      right: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  ></div>
                ))}
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10"
                style={{ background: service.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="relative group">
          <div className="glass rounded-2xl p-12 text-center border border-text-tertiary hover:border-neon-magenta transition-all duration-500 overflow-hidden">
            {/* Background particles */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-magenta rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-grotesk font-bold gradient-text mb-4">
                ¿Listo para llevar tu proyecto al siguiente nivel?
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar tus
                objetivos digitales
              </p>

              <button
                onClick={() => {
                  const element = document.getElementById('contacto');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group/btn relative px-8 py-4 rounded-xl font-inter font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 gradient-bg animate-pulse"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Iniciar Proyecto</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    🚀
                  </span>
                </span>
                <div className="absolute inset-0 glow-magenta opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, #6C63FF, #FF00AA, #00F0FF, #6C63FF)',
                  backgroundSize: '300% 100%',
                  animation: 'gradient-border 4s linear infinite',
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
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-violet rounded-full blur-3xl opacity-5 animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-72 h-72 bg-neon-magenta rounded-full blur-3xl opacity-5 animate-pulse-slow"
        style={{ animationDelay: '1.5s' }}
      ></div>

      {/* Neural network background */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none">
        <defs>
          <linearGradient id="networkGradient">
            <stop offset="0%" stopColor="#6C63FF" />
            <stop offset="100%" stopColor="#00F0FF" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <circle
              cx={`${20 + i * 15}%`}
              cy={`${30 + (i % 2) * 40}%`}
              r="3"
              fill="url(#networkGradient)"
            />
            {i < 4 && (
              <line
                x1={`${20 + i * 15}%`}
                y1={`${30 + (i % 2) * 40}%`}
                x2={`${20 + (i + 1) * 15}%`}
                y2={`${30 + ((i + 1) % 2) * 40}%`}
                stroke="url(#networkGradient)"
                strokeWidth="0.5"
              />
            )}
          </g>
        ))}
      </svg>

      <style jsx>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Services;
