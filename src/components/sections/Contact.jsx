import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }

    // Real-time email validation
    if (name === 'email' && value) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? '' : 'Email inválido',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) newErrors.email = 'El email es requerido';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.subject) newErrors.subject = 'Selecciona un asunto';
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ulisesmz.dev@gmail.com',
      action: 'mailto:ulisesmz.dev@gmail.com',
      copyable: true,
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+506 6127-4805',
      action: 'https://wa.me/50661274805',
      copyable: false,
    },
    {
      icon: '📍',
      label: 'Ubicación',
      value: 'San José, Costa Rica 🇨🇷',
      action: null,
      copyable: false,
    },
  ];

  const socialLinks = [
    { name: 'GitHub', handle: '@UlisesMZ03', url: 'https://github.com/UlisesMZ03', color: '#6C63FF' },
    { name: 'LinkedIn', handle: '@ulisesmz', url: 'https://linkedin.com/in/ulisesmz', color: '#00F0FF' },
    { name: 'Instagram', handle: '@_ulisesmz_', url: 'https://instagram.com/_ulisesmz_', color: '#FF00AA' },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Could add toast notification here
  };

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-32 px-6 md:px-12"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(108,99,255,0.05) 0%, transparent 50%), url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300F0FF' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-sm font-inter font-medium tracking-widest text-neon-violet uppercase opacity-80">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold gradient-text">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades y colaboraciones emocionantes
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left side - Contact Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Contact blocks */}
            {contactInfo.map((info, idx) => (
              <div
                key={info.label}
                className="group glass-light rounded-xl p-6 border border-text-tertiary hover:border-neon-violet transition-all duration-300 animate-fadeInLeft"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <p className="text-sm text-text-tertiary font-inter mb-1">{info.label}</p>
                    {info.action ? (
                      <a
                        href={info.action}
                        target={info.copyable ? undefined : '_blank'}
                        rel={info.copyable ? undefined : 'noopener noreferrer'}
                        className="text-text-primary font-inter font-medium hover:text-neon-cyan transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-text-primary font-inter font-medium">{info.value}</p>
                    )}
                  </div>
                  {info.copyable && (
                    <button
                      onClick={() => copyToClipboard(info.value)}
                      className="px-3 py-1 rounded-md text-xs font-inter font-medium glass border border-text-tertiary hover:border-neon-cyan transition-all duration-300 hover:scale-105"
                    >
                      Copiar
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="space-y-4 pt-4">
              <p className="text-sm font-inter font-semibold text-text-secondary uppercase tracking-wider">
                Redes Sociales
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 px-4 py-3 rounded-lg glass-light border border-text-tertiary hover:border-neon-violet transition-all duration-300 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                  >
                    <span className="font-inter font-medium text-text-primary group-hover:text-neon-cyan transition-colors">
                      {social.name}
                    </span>
                    <span className="text-sm text-text-tertiary">{social.handle}</span>
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"
                      style={{ background: social.color }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 border border-text-tertiary space-y-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-inter font-medium text-text-secondary mb-2">
                  <span className="flex items-center space-x-2">
                    <span>👤</span>
                    <span>Nombre completo</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className={`w-full px-4 py-3 rounded-lg glass-light border ${
                    errors.name ? 'border-red-500' : 'border-text-tertiary'
                  } bg-transparent text-text-primary font-inter focus:border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-20 transition-all duration-300`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1 animate-shake">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-inter font-medium text-text-secondary mb-2">
                  <span className="flex items-center space-x-2">
                    <span>✉️</span>
                    <span>Email</span>
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`w-full px-4 py-3 rounded-lg glass-light border ${
                      errors.email ? 'border-red-500' : formData.email && !errors.email ? 'border-neon-green' : 'border-text-tertiary'
                    } bg-transparent text-text-primary font-inter focus:border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-20 transition-all duration-300`}
                  />
                  {formData.email && !errors.email && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neon-green">
                      ✓
                    </span>
                  )}
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1 animate-shake">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div className="relative">
                <label className="block text-sm font-inter font-medium text-text-secondary mb-2">
                  <span className="flex items-center space-x-2">
                    <span>🏷️</span>
                    <span>Asunto</span>
                  </span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg glass-light border ${
                    errors.subject ? 'border-red-500' : 'border-text-tertiary'
                  } bg-dark-secondary text-text-primary font-inter focus:border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-20 transition-all duration-300 cursor-pointer`}
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="web">Desarrollo Web</option>
                  <option value="mobile">Desarrollo Móvil</option>
                  <option value="consulting">Consultoría</option>
                  <option value="ai">Automatización IA</option>
                  <option value="other">Otro</option>
                </select>
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1 animate-shake">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-inter font-medium text-text-secondary mb-2">
                  <span className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>Mensaje</span>
                  </span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows="5"
                  maxLength="500"
                  className={`w-full px-4 py-3 rounded-lg glass-light border ${
                    errors.message ? 'border-red-500' : 'border-text-tertiary'
                  } bg-transparent text-text-primary font-inter focus:border-neon-violet focus:outline-none focus:ring-2 focus:ring-neon-violet focus:ring-opacity-20 transition-all duration-300 resize-none`}
                ></textarea>
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <p className="text-red-400 text-xs animate-shake">{errors.message}</p>
                  ) : (
                    <span></span>
                  )}
                  <span className="text-xs text-text-tertiary">
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="group relative w-full py-4 rounded-lg font-inter font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 gradient-bg"></div>
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : submitSuccess ? (
                    <>
                      <span>✓</span>
                      <span>¡Mensaje enviado! Te responderé pronto</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        🚀
                      </span>
                    </>
                  )}
                </span>
                {!isSubmitting && !submitSuccess && (
                  <div className="absolute inset-0 glow-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-neon-cyan rounded-full blur-3xl opacity-5 animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-64 h-64 bg-neon-magenta rounded-full blur-3xl opacity-5 animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Connection map lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <linearGradient id="mapGradient">
            <stop offset="0%" stopColor="#6C63FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF00AA" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#mapGradient)" strokeWidth="1">
          <animate attributeName="x1" values="10%;90%;10%" dur="15s" repeatCount="indefinite" />
          <animate attributeName="x2" values="90%;10%;90%" dur="15s" repeatCount="indefinite" />
        </line>
      </svg>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
