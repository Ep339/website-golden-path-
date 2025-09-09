

(function() {
  "use strict";

  
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

/**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  // Wait for page to fully load
window.addEventListener('load', function() {
  // Add a small delay for better UX
  setTimeout(function() {
    document.body.classList.add('loaded');
    
    // Remove loader from DOM after animation completes
    setTimeout(function() {
      const loader = document.getElementById('page-loader');
      if (loader) {
        loader.remove();
      }
    }, 500);
  }, 1000); // Adjust this delay as needed
});

// كود الية الترجمة 

document.addEventListener('DOMContentLoaded', function() {
  const languageToggle = document.getElementById('languageToggle');
  const mobileLanguageToggle = document.getElementById('mobileLanguageToggle');
  const languageTextElements = document.querySelectorAll('.language-text');
  const langSections = document.querySelectorAll('.lang-section'); // الأقسام التي تتغير

  // في ملف main.js - إضافة الترجمة الكاملة لجميع أقسام الموقع
const translations = {
  'EN': {
    // Header & Navigation
    'about-link': 'About',
    'services-link': 'Services',
    'portfolio-link': 'Portfolio',
    'contact-link': 'Contact',
    'language-text': 'AR',

    // Hero Section
    'hero-title-1': 'Welcome to <span>Our Golden Path</span>',
    'hero-text-1': 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
    'hero-title-2': 'Lorem Ipsum Dolor',
    'hero-text-2': 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
    'hero-title-3': 'Sequi ea ut et est quaerat',
    'hero-text-3': 'Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',

    // About Section
    'our-story': 'Our Story',
    'building-value': 'Building Value',
    'enriching-lives': 'Enriching Lives',
    'about-description-1': 'Golden Path is a comprehensive and diversified solutions provider operating across multiple sectors, including air conditioning, refrigeration, heating systems, contracting, water and wastewater treatment, and fire protection systems',
    'about-description-2': 'In addition to our engineering activities, we specialize in the operation and management of hospitals, specialized centers, and medical complexes, offering end-to-end services that seamlessly integrate design, implementation, and long-term support',
    'about-description-3': 'Guided by our vision of building sustainable communities and our mission to deliver innovative, human-centered solutions, we are committed to fostering strategic partnerships, strengthening trust, and creating long-lasting value across the industrial, commercial, and healthcare sectors',
    'timeline-2010': '2010',
    'timeline-2010-text': 'Etiam at tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    'timeline-2015': '2015',
    'timeline-2015-text': 'Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, nec tempus augue mi in nulla.',
    'timeline-2020': '2020',
    'timeline-2020-text': 'Suspendisse potenti. Nullam lacinia dictum auctor. Phasellus euismod sem at dui imperdiet, ac tincidunt mi placerat.',
    'timeline-2025': '2025',
    'timeline-2025-text': 'Vestibulum ultrices magna ut faucibus sollicitudin. Sed eget venenatis enim, nec imperdiet ex.',
    'mission-title': 'Our Mission',
    'mission-text': 'Our mission is to deliver integrated, innovative, and sustainable solutions across industries — from engineering and construction to healthcare operations. We are committed to excellence, reliability, and people-centered services that create lasting value, improve quality of life, and build trusted partnerships with our clients and communities.',
    'vision-title': 'Our Vision',
    'vision-text': 'To emerge as a premier multi-sector enterprise recognized for excellence in sustainable engineering and world-class healthcare operations driving industrial growth, advancing community well-being, and creating a lasting legacy of innovation, trust, and impact.',
    'core-values': 'Core Values',
    'excellence': 'Excellence',
    'excellence-desc': 'We strive to exceed expectations through quality, innovation, and continuous improvement',
    'integrity': 'Integrity',
    'integrity-desc': 'We uphold the highest standards of honesty, ethics, and transparency in all that we do',
    'people-first': 'People-First',
    'people-first-desc': 'We place people at the heart of our services, empowering communities and fostering well-being',
    'collaboration': 'Collaboration',
    'collaboration-desc': 'We believe in the power of partnership, working closely with clients, teams, and stakeholders to achieve shared success',
    'sustainability': 'Sustainability',
    'sustainability-desc': 'We are dedicated to solutions that preserve resources, protect the environment, and support long-term growth',

    // Featured Services
    'featured-services-title': 'Featured Services',
    'featured-services-subtitle': 'Featured Services',
    'services-subtitle': 'Professional Services',
    'services-title': 'Elevating Business Performance Through Strategic Solutions',
    'services-description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius risus sed pellentesque auctor. Phasellus gravida magna at tortor cursus, sit amet suscipit tortor malesuada.',
    'consultation-btn': 'Request a Consultation',
    'service-1': 'Financial Strategy Development',
    'service-1-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.',
    'service-2': 'Market Expansion Advisory',
    'service-2-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.',
    'service-3': 'Risk Management Solutions',
    'service-3-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.',
    'service-4': 'Innovation & Digital Transformation',
    'service-4-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.',
    'service-5': 'Talent Management Strategy',
    'service-5-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras vehicula magna eget lectus varius, at finibus massa condimentum.',

    // How We Work
    'how-we-work-title': 'How We Work',
    'how-we-work-subtitle': 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
    'step-1': 'Project Planning',
    'step-1-desc': 'Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
    'step-2': 'Development Phase',
    'step-2-desc': 'Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.',
    'step-3': 'Testing & QA',
    'step-3-desc': 'Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.',
    'step-4': 'Launch & Support',
    'step-4-desc': 'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt.',

    // Features Section
    'feature-1': 'Design & Engineering',
    'feature-1-sub': 'Integrated MEP system design',
    'feature-2': 'Installation & Execution',
    'feature-2-sub': 'Professional integrated implementation',
    'feature-3': 'CAD & BIM Modeling',
    'feature-3-sub': 'Comprehensive technical documentation',
    'feature-4': 'Analysis & Simulation',
    'feature-4-sub': 'Performance and efficiency analysis',
    'feature-5': 'Maintenance & Services',
    'feature-5-sub': 'Preventive and corrective maintenance',
    'feature-6': 'Project Management',
    'feature-6-sub': 'Planning and quality control',

    // Why Us Section
    'why-us-title': 'Why Us',
    'why-us-subtitle': 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
    'why-us-main-title': 'Why Choose Premier Real Estate Partners?',
    'why-us-description': 'With over two decades of experience in the real estate market, we\'ve built our reputation on trust, expertise, and exceptional results. Our dedicated team of local experts understands the nuances of every neighborhood and market trend.',
    'feature-1-title': 'Local Market Expertise',
    'feature-1-desc': 'Deep knowledge of neighborhoods, pricing trends, and market conditions in your area.',
    'feature-2-title': 'Verified Listings Only',
    'feature-2-desc': 'Every property is thoroughly vetted and verified before listing to ensure accuracy and quality.',
    'feature-3-title': '24/7 Client Support',
    'feature-3-desc': 'Our dedicated support team is available around the clock to assist with your real estate needs.',
    'feature-4-title': 'Proven Track Record',
    'feature-4-desc': 'Consistently delivering results with over 2,500 successful transactions and 98% client satisfaction.',
    'learn-more-btn': 'Learn More About Us',
    'contact-team-btn': 'Contact Our Team',
    'stat-1': 'Projects Completed',
    'stat-2': 'Client Satisfaction',
    'stat-3': 'Years Experience',
    'stat-4': 'Awards Achieved',

    // Services Section
    'services-main-title': 'Our MEP Services',
    'services-main-subtitle': 'COMPREHENSIVE MECHANICAL, ELECTRICAL & PLUMBING SOLUTIONS',
    'service-hvac': 'HVAC Systems',
    'service-hvac-desc': 'Complete heating, ventilation and air conditioning solutions designed for efficiency, comfort and sustainability in any environment.',
    'service-electrical': 'Electrical Systems',
    'service-electrical-desc': 'Comprehensive electrical design, installation and maintenance services for commercial, industrial and residential applications.',
    'service-plumbing': 'Plumbing Systems',
    'service-plumbing-desc': 'Advanced plumbing solutions including water supply, drainage, and sanitary systems designed for efficiency and reliability.',
    'service-fire': 'Fire Protection',
    'service-fire-desc': 'Complete fire alarm and suppression systems designed to meet strict safety codes and protect people and property.',
    'service-automation': 'Building Automation',
    'service-automation-desc': 'Smart building solutions that integrate MEP systems for optimal energy efficiency, comfort, and operational performance.',
    'popular-badge': 'Most Popular',
    'custom-solutions': 'Custom Solutions',
    'integrated-solutions': 'Integrated Solutions',
    'explore-services': 'Explore Services',
    'learn-more': 'Learn More',
    'discover': 'Discover',
    'explore': 'Explore',
    'get-quote': 'Get Quote',

    // Call to Action 2
    'cta2-title': 'Transform Your Vision into Engineering Reality',
    'cta2-description': 'At Golden Path, we turn your architectural concepts into fully functional MEP systems that ensure comfort, efficiency, and reliability in every building we serve.',
    'cta2-feature-1': 'Comprehensive MEP design and engineering expertise',
    'cta2-feature-2': 'Seamless integration of mechanical, electrical, and plumbing systems',
    'cta2-feature-3': 'Energy-efficient solutions that reduce operational costs',
    'cta2-feature-4': 'Full compliance with international standards and regulations',
    'start-project': 'Start Your Project',
    'view-portfolio': 'View Our Portfolio',

    // Pricing Section
    'pricing-title': 'Our Service Packages',
    'pricing-subtitle': 'Flexible MEP solutions tailored to your project requirements and budget',
    'basic-plan': 'Basic MEP Package',
    'basic-price': '/square meter',
    'basic-desc': 'Essential MEP services for standard projects with basic requirements.',
    'professional-plan': 'Professional MEP Package',
    'professional-price': '/square meter',
    'professional-desc': 'Comprehensive MEP solutions for commercial and industrial projects.',
    'enterprise-plan': 'Enterprise MEP Package',
    'enterprise-price': '/square meter',
    'enterprise-desc': 'End-to-end MEP solutions for large-scale and complex projects.',
    'get-started': 'Get Started',
    'get-quote-btn': 'Get Quote',
    'contact-sales': 'Contact Sales',
    'custom-solution-title': 'Need a Custom Solution?',
    'custom-solution-desc': 'We offer tailored MEP packages for specialized projects including hospitals, data centers, and industrial facilities.',
    'request-custom-quote': 'Request Custom Quote',

    // FAQ Section
    'faq-title': 'Frequently Asked Questions',
    'faq-subtitle': 'Find answers to common questions about our MEP services and solutions',
    'faq-1': 'What does MEP stand for and what services do you provide?',
    'faq-2': 'How do you ensure quality control in MEP projects?',
    'faq-3': 'What is the typical timeline for an MEP project?',
    'faq-4': 'Do you provide energy efficiency and sustainable design solutions?',
    'faq-5': 'What sets your MEP services apart from competitors?',
    'faq-6': 'How do you handle project coordination with other contractors?',
    'faq-7': 'What maintenance services do you offer after project completion?',
    'faq-8': 'Can you work on retrofit projects in existing buildings?',

    // Call to Action
    'cta-badge': 'Expert MEP Solutions',
    'cta-title': 'Ready to Transform Your Project With Professional MEP Systems?',
    'cta-description': 'Our team of certified engineers and technicians is ready to deliver comprehensive mechanical, electrical, and plumbing solutions tailored to your specific project requirements. From design to installation and maintenance, we ensure optimal performance and efficiency.',
    'cta-feature-1': 'Fast Response Time',
    'cta-feature-1-desc': 'Get expert consultation within 24 hours of your inquiry',
    'cta-feature-2': 'Quality Guaranteed',
    'cta-feature-2-desc': 'All our work meets international standards and codes',
    'request-consultation': 'Request Free Consultation',
    'call-experts': 'Call Our Experts',

    // Testimonials
    'testimonial-1': 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
    'testimonial-2': 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
    'testimonial-3': 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
    'testimonial-4': 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
    'testimonial-5': 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',

    // Portfolio
    'portfolio-title': 'Our MEP Projects',
    'portfolio-subtitle': 'Showcasing our expertise in Mechanical, Electrical, and Plumbing solutions across various sectors',
    'filter-all': 'All Projects',
    'filter-commercial': 'Commercial',
    'filter-healthcare': 'Healthcare',
    'filter-industrial': 'Industrial',
    'filter-residential': 'Residential',

    // Team
    'team-title': 'Our Team',
    'team-subtitle': 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',

    // Contact
    'contact-title': 'Contact',
    'contact-subtitle': 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit',
    'location': 'Location',
    'email': 'Email',
    'call': 'Call',
    'open-hours': 'Open Hours',
    'get-in-touch': 'Get in Touch',
    'contact-description': 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.',
    'your-name': 'Your Name',
    'your-email': 'Your Email',
    'subject': 'Subject',
    'message': 'Message',
    'send-message': 'Send Message',

    // Footer
    'useful-links': 'Useful Links',
    'our-services': 'Our Services',
    'contact-us': 'Contact Us',
    'home': 'Home',
    'about-us': 'About us',
    'terms': 'Terms of service',
    'privacy': 'Privacy policy',
    'web-design': 'Web Design',
    'web-development': 'Web Development',
    'product-management': 'Product Management',
    'marketing': 'Marketing',
    'graphic-design': 'Graphic Design'
  },
  'AR': {
    // Header & Navigation
    'about-link': 'عن الشركة',
    'services-link': 'الخدمات',
    'portfolio-link': 'أعمالنا',
    'contact-link': 'اتصل بنا',
    'language-text': 'EN',

    // Hero Section
    'hero-title-1': 'مرحباً بكم في <span>مسارنا الذهبي</span>',
    'hero-text-1': 'نحن نقدم حلولاً متكاملة ومبتكرة في مجالات متعددة تشمل أنظمة التكييف والتبريد والتدفئة والمقاولات ومعالجة المياه وأنظمة الحماية من الحرائق.',
    'hero-title-2': 'لوريم إيبسوم دولور',
    'hero-text-2': 'نحن متخصصون في تشغيل وإدارة المستشفيات والمراكز المتخصصة والمجمعات الطبية، نقدم خدمات شاملة تشمل التصميم والتنفيذ والدعم طويل الأمد.',
    'hero-title-3': 'سيكوي إي يوت إيست كوارت',
    'hero-text-3': 'بتوجيه من رؤيتنا لبناء مجتمعات مستدامة، نحن ملتزمون بتعزيز الشراكات الاستراتيجية وتعزيز الثقة وخلق قيمة دائمة.',

    // About Section
    'our-story': 'قصتنا',
    'building-value': 'بناء القيمة',
    'enriching-lives': 'إثراء الحياة',
    'about-description-1': 'جولدن باث هي مزود حلول شاملة ومتنوعة تعمل عبر قطاعات متعددة، بما في ذلك تكييف الهواء، التبريد، أنظمة التدفئة، المقاولات، معالجة المياه ومياه الصرف الصحي، وأنظمة الحماية من الحرائق',
    'about-description-2': 'بالإضافة إلى أنشطتنا الهندسية، نحن متخصصون في تشغيل وإدارة المستشفيات والمراكز المتخصصة والمجمعات الطبية، حيث نقدم خدمات متكاملة تشمل التصميم والتنفيذ والدعم طويل الأمد',
    'about-description-3': 'بتوجيه من رؤيتنا لبناء مجتمعات مستدامة ومهمتنا لتقديم حلول مبتكرة تركز على الإنسان، نحن ملتزمون بتعزيز الشراكات الاستراتيجية، وتعزيز الثقة، وخلق قيمة دائمة عبر القطاعات الصناعية والتجارية والرعاية الصحية',
    'timeline-2010': '2010',
    'timeline-2010-text': 'بداية رحلتنا بتأسيس الشركة وبدء تقديم خدمات أنظمة التكييف والتبريد.',
    'timeline-2015': '2015',
    'timeline-2015-text': 'توسعنا في خدمات المقاولات وأنظمة معالجة المياه والحماية من الحرائق.',
    'timeline-2020': '2020',
    'timeline-2020-text': 'بدء التخصص في إدارة وتشغيل المنشآت الطبية والمستشفيات.',
    'timeline-2025': '2025',
    'timeline-2025-text': 'الاستمرار في الابتكار والتوسع في تقديم حلول متكاملة ومستدامة.',
    'mission-title': 'مهمتنا',
    'mission-text': 'مهمتنا هي تقديم حلول متكاملة ومبتكرة ومستدامة عبر الصناعات - من الهندسة والبناء إلى عمليات الرعاية الصحية. نحن ملتزمون بالتميز والموثوقية والخدمات المتمحورة حول الناس التي تخلق قيمة دائمة، وتحسن جودة الحياة، وتبني شراكات موثوقة مع عملائنا ومجتمعاتنا.',
    'vision-title': 'رؤيتنا',
    'vision-text': 'أن نبرز كمؤسسة رائدة متعددة القطاعات معترف بها لتميزها في الهندسة المستدامة وعمليات الرعاية الصحية العالمية التي تقود النمو الصناعي، وتعزز رفاهية المجتمع، وتخلق إرثًا دائمًا من الابتكار والثقة والتأثير.',
    'core-values': 'القيم الأساسية',
    'excellence': 'التميز',
    'excellence-desc': 'نسعى لتجاوز التوقعات من خلال الجودة والابتكار والتحسين المستمر',
    'integrity': 'النزاهة',
    'integrity-desc': 'نحن نلتزم بأعلى معايير الصدق والأخلاق والشفافية في كل ما نقوم به',
    'people-first': 'الأولوية للناس',
    'people-first-desc': 'نضع الناس في قلب خدماتنا، وتمكين المجتمعات وتعزيز الرفاهية',
    'collaboration': 'التعاون',
    'collaboration-desc': 'نؤمن بقوة الشراكة، والعمل عن كثب مع العملاء والفرق وأصحاب المصلحة لتحقيق النجاح المشترك',
    'sustainability': 'الاستدامة',
    'sustainability-desc': 'نحن مخصصون للحلول التي تحافظ على الموارد، وتحافظ على البيئة، وتدعم النمو طويل الأمد',

    // Featured Services
    'featured-services-title': 'الخدمات المميزة',
    'featured-services-subtitle': 'الخدمات المميزة',
    'services-subtitle': 'خدمات احترافية',
    'services-title': 'رفع أداء الأعمال من خلال الحلول الاستراتيجية',
    'services-description': 'نقدم حلولاً استراتيجية متكاملة تساعد الشركات على النمو والتطور في السوق التنافسي من خلال التخطيط المالي والتوسع الاستراتيجي وإدارة المخاطر.',
    'consultation-btn': 'طلب استشارة',
    'service-1': 'تطوير الاستراتيجية المالية',
    'service-1-desc': 'نقدم استشارات مالية متخصصة تساعد الشركات على تحقيق النمو المستدام والربحية من خلال التخطيط المالي الاستراتيجي.',
    'service-2': 'استشارات التوسع في السوق',
    'service-2-desc': 'نساعد الشركات على التوسع في أسواق جديدة من خلال دراسات الجدوى وتحليل السوق واستراتيجيات الدخول المناسبة.',
    'service-3': 'حلول إدارة المخاطر',
    'service-3-desc': 'نقدم حلولاً متكاملة لإدارة المخاطر تحمي الشركات من التحديات غير المتوقعة وتضمن استمرارية الأعمال.',
    'service-4': 'الابتكار والتحول الرقمي',
    'service-4-desc': 'نساعد الشركات على تبني التقنيات الحديثة والتحول الرقمي لتحسين الكفاءة وزيادة القدرة التنافسية.',
    'service-5': 'استراتيجية إدارة المواهب',
    'service-5-desc': 'نطور استراتيجيات متكاملة لإدارة المواهب والموارد البشرية لضمان جذب واستبقاء أفضل الكفاءات.',

    // How We Work
    'how-we-work-title': 'كيف نعمل',
    'how-we-work-subtitle': 'نتبع منهجية عمل واضحة تضمن تقديم خدمات عالية الجودة في الوقت المحدد',
    'step-1': 'تخطيط المشروع',
    'step-1-desc': 'نبدأ بدراسة متعمقة للمتطلبات وتطوير خطة عمل شاملة تحدد الأهداف والجدول الزمني والميزانية.',
    'step-2': 'مرحلة التطوير',
    'step-2-desc': 'ننفذ المشروع باحترافية عالية باستخدام أحدث التقنيات وأفضل الممارسات في المجال.',
    'step-3': 'الاختبار وضمان الجودة',
    'step-3-desc': 'نجري اختبارات شاملة للتأكد من جودة العمل وملاءمته للمعايير والمواصفات المطلوبة.',
    'step-4': 'التشغيل والدعم',
    'step-4-desc': 'نقدم الدعم المستمر والخدمات اللاحقة لضمان استمرارية العمل وتحقيق النتائج المرجوة.',

    // Features Section
    'feature-1': 'التصميم والهندسة',
    'feature-1-sub': 'تصميم متكامل لأنظمة MEP',
    'feature-2': 'التنفيذ والتركيب',
    'feature-2-sub': 'تنفيذ متكامل واحترافي',
    'feature-3': 'نمذجة CAD و BIM',
    'feature-3-sub': 'توثيق فني شامل',
    'feature-4': 'التحليل والمحاكاة',
    'feature-4-sub': 'تحليل الأداء والكفاءة',
    'feature-5': 'الصيانة والخدمات',
    'feature-5-sub': 'صيانة وقائية وتصحيحية',
    'feature-6': 'إدارة المشاريع',
    'feature-6-sub': 'التخطيط وضبط الجودة',

    // Why Us Section
    'why-us-title': 'لماذا نحن',
    'why-us-subtitle': 'نتميز بخبرة واسعة ونهج عملي يضمن تحقيق أفضل النتائج لعملائنا',
    'why-us-main-title': 'لماذا تختار شركاء Golden Path؟',
    'why-us-description': 'بخبرة تزيد عن عقدين من الزمن، بنينا سمعة قائمة على الثقة والخبرة والنتائج الاستثنائية. فريقنا المختص يفهم دقائق كل حي واتجاهات السوق.',
    'feature-1-title': 'خبرة محلية في السوق',
    'feature-1-desc': 'معرفة عميقة بالأحياء واتجاهات الأسعار وظروف السوق في منطقتك.',
    'feature-2-title': 'قوائم موثقة فقط',
    'feature-2-desc': 'كل عقار يتم فحصه ومراجعته بدقة قبل إدراجه لضمان الدقة والجودة.',
    'feature-3-title': 'دعم عملاء على مدار الساعة',
    'feature-3-desc': 'فريق الدعم المخصص لدينا متاح على مدار الساعة لمساعدتك في احتياجاتك العقارية.',
    'feature-4-title': 'سجل حافل بالإنجازات',
    'feature-4-desc': 'تقديم نتائج متسقة مع أكثر من 2500 صفقة ناجحة و98% رضا العملاء.',
    'learn-more-btn': 'اعرف المزيد عنا',
    'contact-team-btn': 'اتصل بفريقنا',
    'stat-1': 'مشاريع مكتملة',
    'stat-2': 'رضا العملاء',
    'stat-3': 'سنوات الخبرة',
    'stat-4': 'جوائز محققة',

    // Services Section
    'services-main-title': 'خدماتنا في أنظمة MEP',
    'services-main-subtitle': 'حلول شاملة في الميكانيك والكهرباء والسباكة',
    'service-hvac': 'أنظمة التكييف',
    'service-hvac-desc': 'حلول متكاملة للتدفئة والتهوية وتكييف الهواء مصممة للكفاءة والراحة والاستدامة في أي بيئة.',
    'service-electrical': 'أنظمة الكهرباء',
    'service-electrical-desc': 'خدمات متكاملة لتصميم وتركيب وصيانة الأنظمة الكهربائية للتطبيقات التجارية والصناعية والسكنية.',
    'service-plumbing': 'أنظمة السباكة',
    'service-plumbing-desc': 'حلول متقدمة للسباكة تشمل إمدادات المياه والصرف الصحي وأنظمة الصرف الصحي المصممة للكفاءة والموثوقية.',
    'service-fire': 'الحماية من الحرائق',
    'service-fire-desc': 'أنظمة كاملة للإنذار من الحرائق والإطفاء مصممة لتلبية معايير السلامة الصارمة وحماية الأشخاص والممتلكات.',
    'service-automation': 'أتمتة المباني',
    'service-automation-desc': 'حلول المباني الذكية التي تدمج أنظمة MEP لتحقيق أقصى كفاءة في الطاقة والراحة والأداء التشغيلي.',
    'popular-badge': 'الأكثر شيوعاً',
    'custom-solutions': 'حلول مخصصة',
    'integrated-solutions': 'حلول متكاملة',
    'explore-services': 'استكشاف الخدمات',
    'learn-more': 'معرفة المزيد',
    'discover': 'اكتشف',
    'explore': 'استكشف',
    'get-quote': 'احصل على عرض سعر',

    // Call to Action 2
    'cta2-title': 'حول رؤيتك إلى واقع هندسي',
    'cta2-description': 'في Golden Path، نحول مفاهيمك المعمارية إلى أنظمة MEP كاملة الوظائف تضمن الراحة والكفاءة والموثوقية في كل مبنى نخدمه.',
    'cta2-feature-1': 'خبرة شاملة في تصميم وهندسة أنظمة MEP',
    'cta2-feature-2': 'دمج سلس للأنظمة الميكانيكية والكهربائية والسباكة',
    'cta2-feature-3': 'حلول موفرة للطاقة تقلل التكاليف التشغيلية',
    'cta2-feature-4': 'الامتثال الكامل للمعايير واللوائح الدولية',
    'start-project': 'ابدأ مشروعك',
    'view-portfolio': 'شاهد أعمالنا',

    // Pricing Section
    'pricing-title': 'باقات خدماتنا',
    'pricing-subtitle': 'حلول MEP مرنة مصممة وفقاً لمتطلبات مشروعك وميزانيتك',
    'basic-plan': 'الباقة الأساسية MEP',
    'basic-price': '/المتر المربع',
    'basic-desc': 'خدمات MEP أساسية للمشاريع القياسية ذات المتطلبات الأساسية.',
    'professional-plan': 'الباقة الاحترافية MEP',
    'professional-price': '/المتر المربع',
    'professional-desc': 'حلول MEP شاملة للمشاريع التجارية والصناعية.',
    'enterprise-plan': 'باقة Enterprise MEP',
    'enterprise-price': '/المتر المربع',
    'enterprise-desc': 'حلول MEP متكاملة للمشاريع واسعة النطاق والمعقدة.',
    'get-started': 'ابدأ الآن',
    'get-quote-btn': 'احصل على عرض سعر',
    'contact-sales': 'اتصل بالمبيعات',
    'custom-solution-title': 'هل تحتاج حل مخصص؟',
    'custom-solution-desc': 'نقدم باقات MEP مخصصة للمشاريع المتخصصة بما في ذلك المستشفيات ومراكز البيانات والمنشآت الصناعية.',
    'request-custom-quote': 'طلب عرض سعر مخصص',

    // FAQ Section
    'faq-title': 'الأسئلة الشائعة',
    'faq-subtitle': 'إجابات على الأسئلة الشائعة حول خدماتنا وحلول MEP',
    'faq-1': 'ماذا يعني MEP وما هي الخدمات التي تقدمونها؟',
    'faq-2': 'كيف تضمنون جودة التحكم في مشاريع MEP؟',
    'faq-3': 'ما هو الجدول الزمني النموذجي لمشروع MEP؟',
    'faq-4': 'هل تقدمون حلول كفاءة الطاقة والتصميم المستدام؟',
    'faq-5': 'ما الذي يميز خدمات MEP الخاصة بكم عن المنافسين؟',
    'faq-6': 'كيف تتعاملون مع تنسيق المشروع مع المقاولين الآخرين؟',
    'faq-7': 'ما هي خدمات الصيانة التي تقدمونها بعد اكتمال المشروع؟',
    'faq-8': 'هل يمكنكم العمل على مشاريع التحديث في المباني القائمة؟',

    // Call to Action
    'cta-badge': 'حلول MEP احترافية',
    'cta-title': 'مستعد لتحويل مشروعك بأنظمة MEP احترافية؟',
    'cta-description': 'فريقنا من المهندسين والفنيين المعتمدين جاهز لتقديم حلول شاملة في الميكانيك والكهرباء والسباكة مصممة خصيصاً لمتطلبات مشروعك. من التصميم إلى التركيب والصيانة، نحن نضمن الأداء الأمثل والكفاءة.',
    'cta-feature-1': 'وقت استجابة سريع',
    'cta-feature-1-desc': 'احصل على استشارة خبير خلال 24 ساعة من استفسارك',
    'cta-feature-2': 'جودة مضمونة',
    'cta-feature-2-desc': 'جميع أعمالنا تلتزم بالمعايير واللوائح الدولية',
    'request-consultation': 'طلب استشارة مجانية',
    'call-experts': 'اتصل بالخبراء',

    // Testimonials
    'testimonial-1': 'شركة محترفة تقدم خدمات ممتازة، فريق العمل متعاون ومختص، أنصح بالتعامل معهم لأي مشروع يتعلق بأنظمة MEP.',
    'testimonial-2': 'تجربة رائعة من البداية إلى النهاية، التزم الفريق بالمواعيد والميزانية، والنتائج كانت تتجاوز التوقعات.',
    'testimonial-3': 'المهندسون لديهم خبرة واسعة وحلول مبتكرة، ساعدونا في توفير الطاقة وتحسين كفاءة الأنظمة.',
    'testimonial-4': 'الدعم الفني ممتاز على مدار الساعة، ولا توجد أي مشاكل في الصيانة بعد التسليم.',
    'testimonial-5': 'شركة موثوقة تقدم خدمات شاملة، أنظمة MEP تعمل بكفاءة عالية دون أي أعطال.',

    // Portfolio
    'portfolio-title': 'مشاريعنا في أنظمة MEP',
    'portfolio-subtitle': 'عرض خبرتنا في حلول الميكانيك والكهرباء والسباكة عبر قطاعات مختلفة',
    'filter-all': 'جميع المشاريع',
    'filter-commercial': 'تجاري',
    'filter-healthcare': 'صحي',
    'filter-industrial': 'صناعي',
    'filter-residential': 'سكني',

    // Team
    'team-title': 'فريقنا',
    'team-subtitle': 'فريق من المهندسين والخبراء المختصين في مجالات MEP المختلفة',

    // Contact
    'contact-title': 'اتصل بنا',
    'contact-subtitle': 'نحن هنا للإجابة على استفساراتك وتقديم الدعم الفني اللازم',
    'location': 'الموقع',
    'email': 'البريد الإلكتروني',
    'call': 'هاتف',
    'open-hours': 'ساعات العمل',
    'get-in-touch': 'ابق على تواصل',
    'contact-description': 'يسعدنا تواصلك معنا، فريق الدعم جاهز للإجابة على استفساراتك وتقديم الحلول المناسبة لمشروعك.',
    'your-name': 'اسمك',
    'your-email': 'بريدك الإلكتروني',
    'subject': 'الموضوع',
    'message': 'الرسالة',
    'send-message': 'إرسال الرسالة',

    // Footer
    'useful-links': 'روابط مفيدة',
    'our-services': 'خدماتنا',
    'contact-us': 'اتصل بنا',
    'home': 'الرئيسية',
    'about-us': 'عن الشركة',
    'terms': 'شروط الخدمة',
    'privacy': 'سياسة الخصوصية',
    'web-design': 'تصميم مواقع',
    'web-development': 'تطوير مواقع',
    'product-management': 'إدارة المنتجات',
    'marketing': 'تسويق',
    'graphic-design': 'تصميم جرافيك'
  }
};

  // التحقق من اللغة المحفوظة أو جعل "EN" الافتراضية
  const currentLang = localStorage.getItem('language') || 'EN';

  // دالة الترجمة الرئيسية
  function applyTranslations(lang) {
    // 1. تحديث نص أزرار اللغة
    languageTextElements.forEach(el => {
      el.textContent = translations[lang]['language-text'];
    });

    // 2. تحديث اتجاه أقسام lang-section
    langSections.forEach(section => {
      section.setAttribute('dir', lang === 'AR' ? 'rtl' : 'ltr');
    });

    // 3. ترجمة جميع العناصر التي تحتوي على data-translate
    Object.keys(translations[lang]).forEach(key => {
      if (key !== 'language-text') { // نتجنب language-text لأنه معالج مسبقاً
        const elements = document.querySelectorAll(`[data-translate="${key}"]`);
        elements.forEach(element => {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[lang][key];
          } else {
            if (translations[lang][key].includes('<')) {
              element.innerHTML = translations[lang][key];
            } else {
              element.textContent = translations[lang][key];
            }
          }
        });
      }
    });

     
  }

  // تطبيق اللغة عند التحميل
  applyTranslations(currentLang);

  // وظيفة تبديل اللغة
  function toggleLanguage() {
    const currentStoredLang = localStorage.getItem('language') || 'EN';
    const newLang = currentStoredLang === 'AR' ? 'EN' : 'AR';
    
    // تطبيق الترجمات الجديدة
    applyTranslations(newLang);
    
    // حفظ اللغة الجديدة
    localStorage.setItem('language', newLang);
  }

  // إضافة مستمعي الأحداث للأزرار
  if (languageToggle) {
    languageToggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleLanguage();
    });
  }

  if (mobileLanguageToggle) {
    mobileLanguageToggle.addEventListener('click', function(e) {
      e.preventDefault();
      toggleLanguage();
    });
  }
});