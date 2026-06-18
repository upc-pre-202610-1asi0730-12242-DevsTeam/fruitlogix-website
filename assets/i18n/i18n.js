/**
 * i18n.js — FruitLogix translation module
 * Translations are bundled inline so the toggle works with file:// and HTTP alike.
 */

const I18n = (() => {
  const STORAGE_KEY = 'fruitlogix_lang';

  const TRANSLATIONS = {
    es: {
      "nav.inicio": "Inicio",
      "nav.beneficios": "Beneficios",
      "nav.plans": "Planes",
      "nav.clientes": "Clientes",
      "nav.testimonios": "Testimonios",
      "nav.login": "Iniciar Sesión",
      "nav.register": "Registrarse",

      "hero.title": "Optimiza tu cadena de suministro",
      "hero.title.accent": "desde el campo.",
      "hero.desc": "Monitoreo en tiempo real con sensores IoT de grado industrial. Mantén la frescura, reduce el desperdicio y maximiza la rentabilidad de cada cosecha.",
      "hero.cta.primary": "Comenzar Ahora",
      "hero.cta.demo": "Ver Demo",

      "chain.producer": "Productor",
      "chain.distributor": "Distribuidor",
      "chain.retailer": "Minorista",

      "benefits.title": "Beneficios",
      "benefits.subtitle": "Comprenden varios aspectos relacionados al desempeño de nuestra aplicación.",
      "benefits.card1.title": "Herramientas Digital",
      "benefits.card1.desc": "Implementación de herramientas digitales que favorecen la interacción del usuario.",
      "benefits.card2.title": "Seguimiento en tiempo real",
      "benefits.card2.desc": "Rastrea tus envíos por toda el mundo con geolocalización precisa.",
      "benefits.card3.title": "Análisis de Calidad",
      "benefits.card3.desc": "Garantice una frescura absoluta con el registro continuo de datos climáticos.",

      "plans.title": "Nuestros Planes",
      "plans.free.name": "Plan Gratuito",
      "plans.free.limit": "Max 15 pedidos por mes",
      "plans.free.price": "S/.0",
      "plans.free.f1": "Gestión de pedidos",
      "plans.free.f2": "Control de calidad",
      "plans.free.f3": "Reportes",
      "plans.free.f4": "Productores",
      "plans.free.f5": "Incidencias",
      "plans.free.f6": "Seguimiento",
      "plans.pro.name": "Plan Profesional",
      "plans.pro.price": "S/.150",
      "plans.pro.period": "por mes",
      "plans.pro.f1": "Pedidos ilimitados",
      "plans.pro.f2": "Acceso completo a todas las funcionalidades",

      "clients.title": "Una plataforma, tres perfiles",
      "clients.subtitle": "Nuestra plataforma conecta a todos las personas impulsada a mejorar su negocio, integrando sus necesidades en un ecosistema eficiente y colaborativo.",
      "clients.box1": "Clientes Comerciales",
      "clients.desc1": "Recibe fruta fresca con trazabilidad asegurada.",
      "clients.box2": "Productores agrícolas",
      "clients.desc2": "Gestiona cosechas, valida calidad y vende mejor.",
      "clients.box3": "Distribuidores",
      "clients.desc3": "Coordinación y envíos de productos primarios.",

      "team.title": "About The Team",
      "team.member1.desc": "Responsable, creativo y hábil resolviendo problemas de forma rápida.",
      "team.member2.desc": "Organizado y dedicado, enfocado en resultados eficientes y estructurados.",
      "team.member4.desc": "Curioso y apasionado por el aprendizaje continuo y nuevas experiencias.",
      "team.member5.desc": "Perseverante, empático y constante, enfocado en superar desafíos diarios.",
      "team.video.title": "Conoce al equipo",
      "team.video.desc": "Un vistazo a las personas que impulsan FruitLogix cada día",
      "team.video.label": "Video del Equipo",

      "product.tag": "Nuestro Producto",
      "product.title": "About The Product",
      "product.subtitle": "Descubre cómo FruitLogix transforma la cadena de suministro agrícola con tecnología de vanguardia.",
      "product.f1.title": "Monitoreo IoT en Tiempo Real",
      "product.f1.desc": "Sensores de grado industrial para temperatura, humedad y geolocalización en cada etapa de la cadena.",
      "product.f2.title": "Control de Calidad Automatizado",
      "product.f2.desc": "Validación continua de parámetros críticos para garantizar la frescura de cada cosecha.",
      "product.f3.title": "Reportes y Analítica Avanzada",
      "product.f3.desc": "Dashboards con métricas clave para tomar decisiones informadas y optimizar operaciones.",
      "product.video.label": "Video del Producto",

      "stats.title": "Números que importan",
      "stats.s1": "menos errores operativos",
      "stats.s2": "menos rechazos por calidad",
      "stats.s3": "más eficiencia logística",

      "testimonials.title": "Testimonios",
      "testimonials.t1.text": "\"La gestión de inventario solía ser nuestro mayor quebradero de cabeza...\"",
      "testimonials.t1.name": "Sarah Jenkins",
      "testimonials.t1.role": "Cliente Comercial",
      "testimonials.t2.text": "\"FruitLogix transformó por completo nuestras operaciones...\"",
      "testimonials.t2.name": "Marcus Thorne",
      "testimonials.t2.role": "Distribuidor",
      "testimonials.t3.text": "\"El seguimiento en tiempo real supone un cambio radical...\"",
      "testimonials.t3.name": "Elena Rostova",
      "testimonials.t3.role": "Productora de frutas",

      "cta.title": "Empieza a digitalizar tu logística hoy",
      "cta.desc": "Únete a productores y distribuidores que ya optimizan su cadena con FruitLogix.",
      "cta.btn": "Registrarse",

      "footer.brand.desc": "Optimizando tu cadena de suministro",
      "footer.register": "Registrarse  →",
      "footer.nav.title": "Navegación",
      "footer.nav.plans": "Planes",
      "footer.legal.title": "Legal",
      "footer.privacy": "Políticas de Privacidad",
      "footer.cookies": "Políticas de Cookies",
      "footer.quality": "Políticas de Calidad",
      "footer.copyright": "@ 2025 FruitLogix. Todos los derechos reservados."
    },

    en: {
      "nav.inicio": "Home",
      "nav.beneficios": "Benefits",
      "nav.plans": "Plans",
      "nav.clientes": "Clients",
      "nav.testimonios": "Testimonials",
      "nav.login": "Log In",
      "nav.register": "Sign Up",

      "hero.title": "Optimize your supply chain",
      "hero.title.accent": "from the field.",
      "hero.desc": "Real-time monitoring with industrial-grade IoT sensors. Maintain freshness, reduce waste and maximize the profitability of every harvest.",
      "hero.cta.primary": "Get Started",
      "hero.cta.demo": "Watch Demo",

      "chain.producer": "Producer",
      "chain.distributor": "Distributor",
      "chain.retailer": "Retailer",

      "benefits.title": "Benefits",
      "benefits.subtitle": "They cover various aspects related to the performance of our application.",
      "benefits.card1.title": "Digital Tools",
      "benefits.card1.desc": "Implementation of digital tools that enhance user interaction.",
      "benefits.card2.title": "Real-time Tracking",
      "benefits.card2.desc": "Track your shipments worldwide with precise geolocation.",
      "benefits.card3.title": "Quality Analysis",
      "benefits.card3.desc": "Guarantee absolute freshness with continuous climate data recording.",

      "plans.title": "Our Plans",
      "plans.free.name": "Free Plan",
      "plans.free.limit": "Max 15 orders per month",
      "plans.free.price": "$0",
      "plans.free.f1": "Order management",
      "plans.free.f2": "Quality control",
      "plans.free.f3": "Reports",
      "plans.free.f4": "Producers",
      "plans.free.f5": "Incidents",
      "plans.free.f6": "Tracking",
      "plans.pro.name": "Professional Plan",
      "plans.pro.price": "$150",
      "plans.pro.period": "per month",
      "plans.pro.f1": "Unlimited orders",
      "plans.pro.f2": "Full access to all features",

      "clients.title": "One platform, three profiles",
      "clients.subtitle": "Our platform connects everyone driven to improve their business, integrating their needs into an efficient and collaborative ecosystem.",
      "clients.box1": "Commercial Clients",
      "clients.desc1": "Receive fresh fruit with guaranteed traceability.",
      "clients.box2": "Agricultural Producers",
      "clients.desc2": "Manage harvests, validate quality and sell better.",
      "clients.box3": "Distributors",
      "clients.desc3": "Coordination and shipping of primary products.",

      "team.title": "About The Team",
      "team.member1.desc": "Responsible, creative, and skilled at solving problems quickly.",
      "team.member2.desc": "Organized and dedicated, focused on efficient and structured results.",
      "team.member4.desc": "Curious and passionate about continuous learning and new experiences.",
      "team.member5.desc": "Persevering, empathetic, and constant, focused on overcoming daily challenges.",
      "team.video.title": "Meet the team",
      "team.video.desc": "A glimpse at the people driving FruitLogix every day",
      "team.video.label": "Team Video",

      "product.tag": "Our Product",
      "product.title": "About The Product",
      "product.subtitle": "Discover how FruitLogix transforms the agricultural supply chain with cutting-edge technology.",
      "product.f1.title": "Real-Time IoT Monitoring",
      "product.f1.desc": "Industrial-grade sensors for temperature, humidity and geolocation at every stage of the chain.",
      "product.f2.title": "Automated Quality Control",
      "product.f2.desc": "Continuous validation of critical parameters to guarantee the freshness of every harvest.",
      "product.f3.title": "Reports & Advanced Analytics",
      "product.f3.desc": "Dashboards with key metrics to make informed decisions and optimize operations.",
      "product.video.label": "Product Video",

      "stats.title": "Numbers that matter",
      "stats.s1": "fewer operational errors",
      "stats.s2": "fewer quality rejections",
      "stats.s3": "more logistics efficiency",

      "testimonials.title": "Testimonials",
      "testimonials.t1.text": "\"Inventory management used to be our biggest headache...\"",
      "testimonials.t1.name": "Sarah Jenkins",
      "testimonials.t1.role": "Commercial Client",
      "testimonials.t2.text": "\"FruitLogix completely transformed our operations...\"",
      "testimonials.t2.name": "Marcus Thorne",
      "testimonials.t2.role": "Distributor",
      "testimonials.t3.text": "\"Real-time tracking is a game changer...\"",
      "testimonials.t3.name": "Elena Rostova",
      "testimonials.t3.role": "Fruit Producer",

      "cta.title": "Start digitizing your logistics today",
      "cta.desc": "Join producers and distributors already optimizing their chain with FruitLogix.",
      "cta.btn": "Sign Up",

      "footer.brand.desc": "Optimizing your supply chain",
      "footer.register": "Sign Up  →",
      "footer.nav.title": "Navigation",
      "footer.nav.plans": "Plans",
      "footer.legal.title": "Legal",
      "footer.privacy": "Privacy Policy",
      "footer.cookies": "Cookie Policy",
      "footer.quality": "Quality Policy",
      "footer.copyright": "@ 2025 FruitLogix. All rights reserved."
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function applyTranslations(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });
  }

  function updateToggle(lang) {
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }

  function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateToggle(lang);
  }

  function init() {
    setLanguage(currentLang);
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  return { init, setLanguage };
})();

document.addEventListener('DOMContentLoaded', () => I18n.init());
