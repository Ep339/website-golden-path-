/**
* Template Name: Consulting
* Template URL: https://bootstrapmade.com/bootstrap-consulting-website-template/
* Updated: May 01 2025 with Bootstrap v5.3.5
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
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
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

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
   * Initiate Pure Counter
   */
  new PureCounter();

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

  /*
   * Pricing Toggle
   */

  const pricingContainers = document.querySelectorAll('.pricing-toggle-container');

  pricingContainers.forEach(function(container) {
    const pricingSwitch = container.querySelector('.pricing-toggle input[type="checkbox"]');
    const monthlyText = container.querySelector('.monthly');
    const yearlyText = container.querySelector('.yearly');

    pricingSwitch.addEventListener('change', function() {
      const pricingItems = container.querySelectorAll('.pricing-item');

      if (this.checked) {
        monthlyText.classList.remove('active');
        yearlyText.classList.add('active');
        pricingItems.forEach(item => {
          item.classList.add('yearly-active');
        });
      } else {
        monthlyText.classList.add('active');
        yearlyText.classList.remove('active');
        pricingItems.forEach(item => {
          item.classList.remove('yearly-active');
        });
      }
    });
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

  // تعريف كائن الترجمات
  const translations = {
    'EN': {
      'language-text': 'العربية',
      'about-link': 'About',
      // إضافة الترجمات الإنجليزية (النصوص الأصلية)
      'experience-text': 'Years of Experience',
      'about-title': 'Leaders in Mechanical, Electrical & Plumbing Solutions',
      'about-lead': 'At Golden Path, we provide integrated MEP solutions covering the entire project lifecycle from design and engineering to installation, implementation and maintenance.',
      'about-description': 'We ensure effective, reliable and sustainable systems that meet our clients\' needs and support their project continuity, while adhering to the highest standards of quality and safety.',
      'feature1-title': 'Design & Engineering',
      'feature1-desc': 'Integrated design of mechanical, electrical and plumbing systems with latest modeling technologies.',
      'feature2-title': 'Installation & Implementation',
      'feature2-desc': 'Professional execution of all MEP systems with technical supervision and field support.',
      'feature3-title': 'CAD & BIM Services',
      'feature3-desc': 'Detailed drawings, 3D modeling, technical documentation and clash detection.',
      'feature4-title': 'Analysis & Simulation',
      'feature4-desc': 'Performance analysis, energy efficiency, hydraulic flow simulation, and electrical load calculations.',
      'feature5-title': 'Maintenance Services',
      'feature5-desc': 'Preventive and corrective maintenance with optimal performance assurance and emergency repairs.',
      'feature6-title': 'Testing & Commissioning',
      'feature6-desc': 'Initial system operation, performance testing, efficiency verification and complete documentation.',
      'request-services': 'Request Our Services',
      
      // الترجمات الإنجليزية لقسم Work Process
      'work-process-title': 'Our MEP Project Process',
      'work-process-subtitle1': 'Our Structured',
      'work-process-subtitle2': 'MEP Workflow',
      'work-process-approach-title': 'Our Systematic MEP Approach',
      'work-process-approach-lead': 'We follow a structured methodology to ensure precision and quality in every MEP project.',
      'work-process-approach-desc': 'Our proven process ensures seamless integration of mechanical, electrical, and plumbing systems while maintaining the highest standards of efficiency and safety.',
      'start-project-btn': 'Start Your MEP Project',
      'our-services-btn': 'Our Services',
      'step1-title': 'Consultation & Requirements Analysis',
      'step1-desc': 'Initial client meetings to understand project requirements, scope, and technical specifications.',
      'step2-title': 'Design & Engineering',
      'step2-desc': 'Developing detailed MEP designs, CAD drawings, and BIM models with clash detection.',
      'step3-title': 'Approval & Planning',
      'step3-desc': 'Securing necessary approvals and creating detailed implementation plans and schedules.',
      'step4-title': 'Installation & Implementation',
      'step4-desc': 'Professional installation of all MEP systems with quality control and technical supervision.',
      'step5-title': 'Testing & Commissioning',
      'step5-desc': 'Comprehensive system testing, performance verification, and final commissioning.',
      'step6-title': 'Maintenance & Support',
      'step6-desc': 'Ongoing maintenance services, performance monitoring, and technical support.',

      // الترجمات الإنجليزية لقسم Features
'features-advantages': 'Our Advantages',
'features-specializations': 'MEP Specializations',
'features-description': 'Comprehensive mechanical, electrical, and plumbing solutions for all project types',
'tab1-title': 'Mechanical Systems',
'tab1-subtitle': 'HVAC & Ventilation',
'tab2-title': 'Electrical Systems',
'tab2-subtitle': 'Power & Distribution',
'tab3-title': 'Plumbing Systems',
'tab3-subtitle': 'Water & Drainage',
'tab4-title': 'BIM Modeling',
'tab4-subtitle': '3D Coordination',
'mechanical-title': 'Mechanical Systems Excellence',
'mechanical-description': 'Complete HVAC design, installation, and maintenance services for optimal climate control and air quality in all environments.',
'mechanical-feature1': 'HVAC system design and calculation',
'mechanical-feature2': 'Ventilation and air conditioning',
'mechanical-feature3': 'Heating systems and boilers',
'mechanical-feature4': 'Energy efficiency optimization',
'mechanical-stat1': 'Systems Installed',
'mechanical-stat2': 'Energy Saving',
'mechanical-stat3': 'Support',
'mechanical-card-label': 'Efficiency',
'mechanical-card-value': '+30% Improvement',
'electrical-title': 'Electrical Systems Solutions',
'electrical-description': 'Comprehensive electrical design, power distribution, and lighting solutions for residential, commercial, and industrial projects.',
'electrical-feature1': 'Power distribution design',
'electrical-feature2': 'Lighting systems and controls',
'electrical-feature3': 'Emergency power systems',
'electrical-feature4': 'Low current systems',
'electrical-stat1': 'Projects Completed',
'electrical-stat2': 'Uptime',
'electrical-stat3': 'Certified',
'electrical-card-label': 'Reliability',
'electrical-card-value': '99.9% Uptime',
'plumbing-title': 'Plumbing & Drainage Systems',
'plumbing-description': 'Complete plumbing solutions including water supply, drainage, fire fighting, and sanitary systems for all building types.',
'plumbing-feature1': 'Water supply and distribution',
'plumbing-feature2': 'Drainage and sewage systems',
'plumbing-feature3': 'Fire fighting systems',
'plumbing-feature4': 'Water conservation solutions',
'plumbing-stat1': 'Systems Installed',
'plumbing-stat2': 'Water Saving',
'plumbing-stat3': 'Standards',
'plumbing-card-label': 'Efficiency',
'plumbing-card-value': '40% Water Saving',
'bim-title': 'BIM Modeling & Coordination',
'bim-description': 'Advanced Building Information Modeling services for clash detection, coordination, and optimized MEP system integration.',
'bim-feature1': '3D MEP coordination',
'bim-feature2': 'Clash detection and resolution',
'bim-feature3': 'Shop drawing production',
'bim-feature4': 'Construction documentation',
'bim-stat1': 'Clash Reduction',
'bim-stat2': 'Projects Modeled',
'bim-stat3': 'Cost Saving',
'bim-card-label': 'Coordination',
'bim-card-value': '95% Clash Reduction',
'request-consultation': 'Request Consultation',

// الترجمات الإنجليزية لقسم Details
'details-title': 'Our MEP Expertise',
'details-subtitle1': 'Professional',
'details-subtitle2': 'MEP Services',
'details1-title': 'Comprehensive MEP Design & Engineering',
'details1-subtitle': 'Professional engineering solutions for integrated mechanical, electrical, and plumbing systems.',
'details1-item1': 'HVAC system design and load calculations',
'details1-item2': 'Electrical power distribution and lighting design',
'details1-item3': 'Plumbing and drainage system engineering',
'details1-item4': 'Fire protection system design',
'details1-item5': 'Energy efficiency and sustainability integration',
'details2-title': 'Professional Installation & Implementation',
'details2-subtitle': 'Quality installation services with precision and adherence to international standards.',
'details2-description': 'Our skilled technicians ensure proper installation of all MEP systems with strict quality control measures. We follow detailed implementation plans and coordinate seamlessly with other construction trades to ensure project timelines are met without compromising on quality or safety standards.',
'details2-item1': 'Mechanical system installation (HVAC, ventilation)',
'details2-item2': 'Electrical system implementation',
'details2-item3': 'Plumbing and sanitary works',
'details3-title': 'BIM Modeling & CAD Services',
'details3-description': 'Advanced modeling and documentation services for optimal MEP coordination and clash detection.',
'details3-item1': '3D BIM modeling for MEP coordination',
'details3-item2': 'Clash detection and resolution services',
'details3-item3': 'Detailed CAD drawings and documentation',
'details3-item4': 'Shop drawing production',
'details3-item5': 'As-built documentation',
'details4-title': 'Maintenance & Technical Support',
'details4-subtitle': 'Comprehensive maintenance programs to ensure optimal system performance and longevity.',
'details4-description': 'We provide ongoing maintenance services including preventive maintenance schedules, emergency repairs, and performance optimization. Our technical support team is available to address any issues and ensure your MEP systems operate at peak efficiency throughout their lifecycle.',
'details4-item1': 'Preventive maintenance programs',
'details4-item2': '24/7 emergency repair services',
'details4-item3': 'System performance optimization',

// الترجمات الإنجليزية لقسم FAQ
'faq-title': 'MEP Services FAQs',
'faq-subtitle1': 'Frequently Asked',
'faq-subtitle2': 'Questions',
'faq1-question': 'What MEP services does Golden Path provide?',
'faq1-answer': 'We offer comprehensive Mechanical, Electrical, and Plumbing services including design, installation, maintenance, BIM modeling, energy efficiency solutions, and project management for all types of construction projects.',
'faq2-question': 'Do you provide both design and installation services?',
'faq2-answer': 'Yes, we offer complete turnkey solutions including MEP design, engineering, installation, testing, commissioning, and ongoing maintenance services.',
'faq3-question': 'What types of projects do you handle?',
'faq3-answer': 'We serve residential, commercial, industrial, and institutional projects including offices, hospitals, hotels, shopping malls, factories, and residential complexes.',
'faq4-question': 'Do you provide BIM modeling services?',
'faq4-answer': 'Yes, we offer advanced BIM modeling for MEP coordination, clash detection, 3D visualization, and construction documentation to ensure seamless integration of all systems.',
'faq5-question': 'What are your response times for emergency repairs?',
'faq5-answer': 'We provide 24/7 emergency support with response times within 2-4 hours for critical issues, depending on your location and service agreement.',
'faq6-question': 'Do you offer energy efficiency solutions?',
'faq6-answer': 'Yes, we provide energy audits, efficiency upgrades, sustainable design solutions, and can help you achieve LEED and other green building certifications.',
'faq7-question': 'What certifications do your technicians hold?',
'faq7-answer': 'Our team includes certified engineers, licensed electricians, HVAC technicians, and plumbers with certifications from recognized international and local authorities.',
'faq-contact-title': 'Need more information?',
'faq-contact-description': 'Contact our MEP experts for personalized consultation and detailed answers to your specific project requirements and technical questions.',
'contact-team-btn': 'Contact Our Team',


    },
    'AR': {
      'language-text': 'English',
      'about-link': 'عن الشركة',
      // إضافة الترجمات العربية
      'experience-text': 'سنوات من الخبرة',
      'about-title': 'رواد في حلول الميكانيك والكهرباء والسباكة',
      'about-lead': 'في جولدن باث، نقدم حلولاً متكاملة للميكانيك والكهرباء والسباكة تغطي دورة حياة المشروع بالكامل من التصميم والهندسة إلى التثبيت والتنفيذ والصيانة.',
      'about-description': 'نضمن أنظمة فعالة وموثوقة ومستدامة تلبي احتياجات عملائنا وتدعم استمرارية مشاريعهم، مع الالتزام بأعلى معايير الجودة والسلامة.',
      'feature1-title': 'التصميم والهندسة',
      'feature1-desc': 'تصميم متكامل لأنظمة الميكانيك والكهرباء والسباكة بأحدث تقنيات النمذجة.',
      'feature2-title': 'التثبيت والتنفيذ',
      'feature2-desc': 'تنفيذ احترافي لجميع أنظمة الميكانيك والكهرباء والسباكة مع الإشراف الفني والدعم الميداني.',
      'feature3-title': 'خدمات CAD و BIM',
      'feature3-desc': 'رسومات مفصلة، نمذجة ثلاثية الأبعاد، وثائق فنية وكشف التعارضات.',
      'feature4-title': 'التحليل والمحاكاة',
      'feature4-desc': 'تحليل الأداء، كفاءة الطاقة، محاكاة التدفق الهيدروليكي، وحسابات الأحمال الكهربائية.',
      'feature5-title': 'خدمات الصيانة',
      'feature5-desc': 'صيانة وقائية وتصحيحية مع ضمان الأداء الأمثل والإصلاحات الطارئة.',
      'feature6-title': 'الاختبار والتشغيل',
      'feature6-desc': 'تشغيل النظام الأولي، اختبار الأداء، التحقق من الكفاءة والوثائق الكاملة.',
      'request-services': 'اطلب خدماتنا',
      
      // الترجمات العربية لقسم Work Process
      'work-process-title': 'عملية مشروع الميكانيك والكهرباء والسباكة',
      'work-process-subtitle1': 'الهيكلية',
      'work-process-subtitle2': 'سير العمل',
      'work-process-approach-title': 'نهجنا المنهجي في الميكانيك والكهرباء والسباكة',
      'work-process-approach-lead': 'نتبع منهجية منظمة لضمان الدقة والجودة في كل مشروع للميكانيك والكهرباء والسباكة.',
      'work-process-approach-desc': 'تضمن عمليةنا المثبتة التكامل السلس لأنظمة الميكانيك والكهرباء والسباكة مع الحفاظ على أعلى معايير الكفاءة والسلامة.',
      'start-project-btn': 'ابدأ مشروعك',
      'our-services-btn': 'خدماتنا',
      'step1-title': 'الاستشارة وتحليل المتطلبات',
      'step1-desc': 'اجتماعات أولية مع العميل لفهم متطلبات المشروع ونطاقه والمواصفات الفنية.',
      'step2-title': 'التصميم والهندسة',
      'step2-desc': 'تطوير تصاميم مفصلة للميكانيك والكهرباء والسباكة، ورسومات CAD، ونماذج BIM مع كشف التعارضات.',
      'step3-title': 'الموافقة والتخطيط',
      'step3-desc': 'الحصول على الموافقات اللازمة وإنشاء خطط وجداول تنفيذ مفصلة.',
      'step4-title': 'التثبيت والتنفيذ',
      'step4-desc': 'تثبيت احترافي لجميع أنظمة الميكانيك والكهرباء والسباكة مع مراقبة الجودة والإشراف الفني.',
      'step5-title': 'الاختبار والتشغيل',
      'step5-desc': 'اختبار شامل للنظام، التحقق من الأداء، والتشغيل النهائي.',
      'step6-title': 'الصيانة والدعم',
      'step6-desc': 'خدمات صيانة مستمرة، مراقبة الأداء، ودعم فني.',

      // الترجمات العربية لقسم Features
'features-advantages': 'مزايانا',
'features-specializations': 'تخصصات الميكانيك والكهرباء والسباكة',
'features-description': 'حلول شاملة للميكانيك والكهرباء والسباكة لجميع أنواع المشاريع',
'tab1-title': 'أنظمة الميكانيك',
'tab1-subtitle': 'التكييف والتهوية',
'tab2-title': 'أنظمة الكهرباء',
'tab2-subtitle': 'الطاقة والتوزيع',
'tab3-title': 'أنظمة السباكة',
'tab3-subtitle': 'المياه والصرف',
'tab4-title': 'نمذجة BIM',
'tab4-subtitle': 'التنسيق ثلاثي الأبعاد',
'mechanical-title': 'تميز أنظمة الميكانيك',
'mechanical-description': 'خدمات كاملة لتصميم وتركيب وصيانة أنظمة التكييف للتحكم المناخي الأمثل وجودة الهواء في جميع البيئات.',
'mechanical-feature1': 'تصميم وحساب نظام التكييف',
'mechanical-feature2': 'التهوية وتكييف الهواء',
'mechanical-feature3': 'أنظمة التدفئة والمراجل',
'mechanical-feature4': 'تحسين كفاءة الطاقة',
'mechanical-stat1': 'نظام تم تركيبها',
'mechanical-stat2': 'توفير الطاقة',
'mechanical-stat3': 'دعم',
'mechanical-card-label': 'الكفاءة',
'mechanical-card-value': '+30% تحسن',
'electrical-title': 'حلول الأنظمة الكهربائية',
'electrical-description': 'تصميم كهربائي شامل، توزيع الطاقة، وحلول الإضاءة للمشاريع السكنية والتجارية والصناعية.',
'electrical-feature1': 'تصميم توزيع الطاقة',
'electrical-feature2': 'أنظمة وإضاءة وتحكم',
'electrical-feature3': 'أنظمة طاقة الطوارئ',
'electrical-feature4': 'أنظمة التيار المنخفض',
'electrical-stat1': 'مشروع مكتمل',
'electrical-stat2': 'وقت التشغيل',
'electrical-stat3': 'معتمد',
'electrical-card-label': 'الموثوقية',
'electrical-card-value': '99.9% وقت التشغيل',
'plumbing-title': 'أنظمة السباكة والصرف',
'plumbing-description': 'حلول سباكة كاملة تشمل إمدادات المياه، الصرف، مكافحة الحرائق، والأنظمة الصحية لجميع أنواع المباني.',
'plumbing-feature1': 'إمداد وتوزيع المياه',
'plumbing-feature2': 'أنظمة الصرف الصحي',
'plumbing-feature3': 'أنظمة مكافحة الحرائق',
'plumbing-feature4': 'حلول ترشيد المياه',
'plumbing-stat1': 'نظام تم تركيبها',
'plumbing-stat2': 'توفير المياه',
'plumbing-stat3': 'المعايير',
'plumbing-card-label': 'الكفاءة',
'plumbing-card-value': '40% توفير مياه',
'bim-title': 'نمذجة وتنسيق BIM',
'bim-description': 'خدمات نمذجة معلومات البناء المتقدمة للكشف عن التعارضات، التنسيق، والدمج الأمثل لأنظمة الميكانيك والكهرباء والسباكة.',
'bim-feature1': 'تنسيق الميكانيك والكهرباء والسباكة ثلاثي الأبعاد',
'bim-feature2': 'الكشف عن التعارضات وحلها',
'bim-feature3': 'إنتاج رسومات المحل',
'bim-feature4': 'توثيق البناء',
'bim-stat1': 'تقليل التعارضات',
'bim-stat2': 'مشروع تمت نمذجته',
'bim-stat3': 'توفير التكلفة',
'bim-card-label': 'التنسيق',
'bim-card-value': '95% تقليل التعارضات',
'request-consultation': 'اطلب استشارة',
// الترجمات العربية لقسم Details
'details-title': 'خبرتنا في الميكانيك والكهرباء والسباكة',
'details-subtitle1': 'خدمات',
'details-subtitle2': 'المهنية',
'details1-title': 'تصميم وهندسة شاملة للميكانيك والكهرباء والسباكة',
'details1-subtitle': 'حلول هندسية احترافية لأنظمة الميكانيك والكهرباء والسباكة المتكاملة.',
'details1-item1': 'تصميم نظام التكييف وحسابات الأحمال',
'details1-item2': 'توزيع الطاقة الكهربائية وتصميم الإضاءة',
'details1-item3': 'هندسة أنظمة السباكة والصرف',
'details1-item4': 'تصميم أنظمة الحماية من الحرائق',
'details1-item5': 'دمج كفاءة الطاقة والاستدامة',
'details2-title': 'التثبيت والتنفيذ الاحترافي',
'details2-subtitle': 'خدمات تركيب عالية الجودة مع الدقة والالتزام بالمعايير الدولية.',
'details2-description': 'يضمن فنيونا المهرة التثبيت السليم لجميع أنظمة الميكانيك والكهرباء والسباكة مع إجراءات صارمة لمراقبة الجودة. نتبع خطط تنفيذ مفصلة وننسق بسلاسة مع الحرف الأخرى في البناء لضمان الوفاء بجدول المشروع دون المساس بمعايير الجودة أو السلامة.',
'details2-item1': 'تركيب النظام الميكانيكي (التكييف، التهوية)',
'details2-item2': 'تنفيذ النظام الكهربائي',
'details2-item3': 'أعمال السباكة والصرف الصحي',
'details3-title': 'نمذجة BIM وخدمات CAD',
'details3-description': 'خدمات النمذجة والتوثيق المتقدمة للتنسيق الأمثل للميكانيك والكهرباء والسباكة والكشف عن التعارضات.',
'details3-item1': 'نمذجة BIM ثلاثية الأبعاد لتنسيق الميكانيك والكهرباء والسباكة',
'details3-item2': 'خدمات الكشف عن التعارضات وحلها',
'details3-item3': 'رسومات CAD مفصلة والتوثيق',
'details3-item4': 'إنتاج رسومات المحل',
'details3-item5': 'توثيق كما بُنيت',
'details4-title': 'الصيانة والدعم الفني',
'details4-subtitle': 'برامج صيانة شاملة لضمان الأداء الأمثل للنظام وطول العمر الافتراضي.',
'details4-description': 'نقدم خدمات صيانة مستمرة تشمل جداول الصيانة الوقائية والإصلاحات الطارئة وتحسين الأداء. فريق الدعم الفني لدينا متاح لمعالجة أي مشكلات وضمان عمل أنظمة الميكانيك والكهرباء والسباكة بكفاءة قصوى طوال دورة حياتها.',
'details4-item1': 'برامج الصيانة الوقائية',
'details4-item2': 'خدمات الإصلاح الطارئة على مدار 24/7',
'details4-item3': 'تحسين أداء النظام',      
// الترجمات العربية لقسم FAQ
'faq-title': 'الأسئلة الشائعة لخدمات الميكانيك والكهرباء والسباكة',
'faq-subtitle1': 'أسئلة',
'faq-subtitle2': 'شائعة',
'faq1-question': 'ما هي خدمات الميكانيك والكهرباء والسباكة التي تقدمها جولدن باث؟',
'faq1-answer': 'نقدم خدمات شاملة للميكانيك والكهرباء والسباكة تشمل التصميم، التثبيت، الصيانة، نمذجة BIM، حلول كفاءة الطاقة، وإدارة المشاريع لجميع أنواع مشاريع البناء.',
'faq2-question': 'هل تقدمون خدمات التصميم والتركيب معاً؟',
'faq2-answer': 'نعم، نقدم حلولاً متكاملة تشمل تصميم وهندسة الميكانيك والكهرباء والسباكة، التثبيت، الاختبار، التشغيل، وخدمات الصيانة المستمرة.',
'faq3-question': 'ما هي أنواع المشاريع التي تتعاملون معها؟',
'faq3-answer': 'نخدم المشاريع السكنية والتجارية والصناعية والمؤسسية بما في ذلك المكاتب، المستشفيات، الفنادق، المراكز التجارية، المصانع، والمجمعات السكنية.',
'faq4-question': 'هل تقدمون خدمات نمذجة BIM؟',
'faq4-answer': 'نعم، نقدم نمذجة BIM متقدمة لتنسيق الميكانيك والكهرباء والسباكة، الكشف عن التعارضات، التصور ثلاثي الأبعاد، وتوثيق البناء لضمان التكامل السلس لجميع الأنظمة.',
'faq5-question': 'ما هي أوقات استجابتكم للإصلاحات الطارئة؟',
'faq5-answer': 'نقدم دعمًا طارئًا على مدار 24/7 بأوقات استجابة تتراوح بين 2-4 ساعات للقضايا الحرجة، حسب موقعك واتفاقية الخدمة.',
'faq6-question': 'هل تقدمون حلول كفاءة الطاقة؟',
'faq6-answer': 'نعم، نقدم تدقيقات الطاقة، ترقيات الكفاءة، حلول التصميم المستدام، ويمكننا مساعدتك في تحقيق شهادات LEED وغيرها من شهادات المباني الخضراء.',
'faq7-question': 'ما هي الشهادات التي يحملها فنيوكم؟',
'faq7-answer': 'يشمل فريقنا مهندسين معتمدين، كهربائيين مرخصين، فنيي تكييف، وسباكين يحملون شهادات من جهات دولية ومحلية معترف بها.',
'faq-contact-title': 'هل تحتاج إلى مزيد من المعلومات؟',
'faq-contact-description': 'اتصل بخبراء الميكانيك والكهرباء والسباكة لدينا للحصول على استشارة مخصصة وإجابات مفصلة لمتطلبات مشروعك وأسئلتك الفنية.',
'contact-team-btn': 'اتصل بفريقنا',
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