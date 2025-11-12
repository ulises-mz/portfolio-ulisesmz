import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'TypeScript', level: 88, color: '#3178C6' },
      { name: 'JavaScript', level: 92, color: '#F7DF1E' },
      { name: 'HTML5', level: 95, color: '#E34F26' },
      { name: 'CSS3', level: 90, color: '#1572B6' },
      { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
      { name: 'Bootstrap', level: 82, color: '#7952B3' },
    ],
    backend: [
      { name: 'Node.js', level: 85, color: '#339933' },
      { name: 'Express', level: 82, color: '#000000' },
      { name: 'Python', level: 80, color: '#3776AB' },
      { name: 'PHP', level: 78, color: '#777BB4' },
      { name: 'Java', level: 75, color: '#007396' },
      { name: 'C++', level: 70, color: '#00599C' },
      { name: 'C', level: 72, color: '#A8B9CC' },
      { name: 'WordPress', level: 80, color: '#21759B' },
      { name: 'GraphQL', level: 75, color: '#E10098' },
    ],
    database: [
      { name: 'MySQL', level: 88, color: '#4479A1' },
      { name: 'MongoDB', level: 85, color: '#47A248' },
      { name: 'PostgreSQL', level: 82, color: '#336791' },
      { name: 'Firebase', level: 80, color: '#FFCA28' },
      { name: 'Oracle', level: 70, color: '#F80000' },
      { name: 'SQLite', level: 75, color: '#003B57' },
    ],
    tools: [
      { name: 'Git', level: 92, color: '#F05032' },
      { name: 'GitHub', level: 90, color: '#181717' },
      { name: 'REST API', level: 88, color: '#00D4FF' },
      { name: 'JWT', level: 85, color: '#000000' },
      { name: 'Figma', level: 80, color: '#F24E1E' },
      { name: 'AWS', level: 75, color: '#FF9900' },
      { name: 'Vercel', level: 85, color: '#000000' },
      { name: 'Shopify API', level: 78, color: '#96BF48' },
    ],
    others: [
      { name: 'Assembly', level: 65, color: '#007AAC' },
      { name: 'Prolog', level: 60, color: '#74283C' },
      { name: 'Racket', level: 62, color: '#9F1D20' },
      { name: 'PWA', level: 82, color: '#5A0FC8' },
      { name: 'SEO', level: 80, color: '#47A248' },
      { name: 'Shell Scripts', level: 75, color: '#4EAA25' },
    ],
  };

  const tabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Bases de Datos' },
    { id: 'tools', label: 'Herramientas' },
    { id: 'others', label: 'Otros' },
  ];

  return (
    <section
      id="habilidades"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, transparent 70%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-inter font-medium tracking-widest text-neon-violet uppercase opacity-80">
            Mis Habilidades
          </p>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold gradient-text">
            Tecnologías y herramientas que domino
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-text-primary scale-105'
                  : 'text-text-secondary hover:text-text-primary hover:scale-105'
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  activeTab === tab.id ? 'glass' : 'glass-light'
                }`}
                style={{
                  border: activeTab === tab.id ? '1px solid rgba(108,99,255,0.5)' : '1px solid rgba(139,139,158,0.2)',
                }}
              ></div>

              {/* Glow effect */}
              {activeTab === tab.id && (
                <div className="absolute inset-0 rounded-full glow-violet opacity-50"></div>
              )}

              {/* Text */}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={skill.name}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card */}
              <div className="relative h-40 glass-light rounded-xl border border-text-tertiary hover:border-neon-violet transition-all duration-300 overflow-hidden">
                {/* Front face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-all duration-500 group-hover:rotateY-180">
                  {/* Icon placeholder */}
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center mb-3 font-mono font-bold text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}33, ${skill.color}11)`,
                      color: skill.color,
                    }}
                  >
                    {skill.name.slice(0, 2)}
                  </div>

                  {/* Name */}
                  <p className="font-inter font-semibold text-center text-text-primary">
                    {skill.name}
                  </p>
                </div>

                {/* Back face - Level indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-dark-secondary to-dark-tertiary">
                  <div className="text-3xl font-grotesk font-bold gradient-text mb-2">
                    {skill.level}%
                  </div>
                  <p className="text-xs text-text-secondary mb-4">Nivel de dominio</p>

                  {/* Progress bar */}
                  <div className="w-full h-2 bg-dark-primary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, #6C63FF, ${skill.color})`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl pointer-events-none"
                  style={{ background: skill.color }}
                ></div>
              </div>

              {/* Floating animation on hover */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-neon-violet to-neon-cyan opacity-0 group-hover:opacity-10 blur-xl group-hover:scale-110 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-violet rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-cyan rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Binary matrix background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="text-xs font-mono text-neon-violet whitespace-pre leading-relaxed">
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                {Array(100)
                  .fill(null)
                  .map(() => (Math.random() > 0.5 ? '1' : '0'))
                  .join(' ')}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
