import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Define all translations in one place
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About Us",
      products: "Products",
      contact: "Contact Us",
      getQuote: "Get Quote",

      // Hero Section - Using \n for line breaks
      trustedBy: "Trusted by Customers Worldwide",
      heroTitle: "Your Trusted",
      heroTitleHighlight: "Export Partner from India",
      heroDescription: "One Source. Endless Possibilities.\nSupplying Quality. Delivering Trust.",
      downloadProfile: "Download Company Profile",
      dailyDeliveries: "Daily Deliveries",
      countries: "Countries",
      successRate: "Success Rate",
      support: "Support",

      // About Founder
      founderName: "Ms. Achal Patil",
      founderTitle: "Founder & CEO",
      founderQuote:
        "We started this company with one mission: to make global sourcing simple, honest, and reliable. For us, it's not just about exports — it's about helping Indian suppliers grow and giving buyers worldwide a partner they can count on.\n\nOur journey is built on trust, innovation, and unwavering commitment to excellence.",
      yearsExp: "Years Exp.",
      clients: "Clients",
      learnMore: "Learn More About Us",

      // Why Choose Us
      whyChooseUs: "Why Choose Us",
      whyChooseTitle: "Why Graha Impex is Your",
      whyChooseTitleHighlight: "Best Choice",
      whyChooseDescription:
        "We deliver more than just packages - we deliver trust, reliability, and peace of mind through our comprehensive logistics solutions",

      // Features
      support24: "24/7 Support",
      supportDesc: "Round-the-clock customer service and support for all your logistics needs",
      secureHandling: "Secure Handling",
      secureDesc: "Advanced security measures and insurance coverage for complete peace of mind",
      expertTeam: "Expert Team",
      expertDesc: "Experienced professionals dedicated to providing exceptional service quality",
      industryLeader: "Industry Leader",
      industryDesc: "Award-winning logistics company with proven track record of excellence",
      globalNetwork: "Global Network",
      globalDesc: "Worldwide coverage with local expertise in over 50 countries",
      fastDelivery: "Fast Delivery",
      fastDesc: "Express delivery options with same-day and next-day service availability",
      customerFirst: "Customer First",
      customerDesc: "Customer-centric approach with personalized solutions for every need",
      technologyDriven: "Technology Driven",
      technologyDesc: "Cutting-edge technology for real-time tracking and seamless operations",

      // Products
      productPortfolio: "Our Product Portfolio",
      productGallery: "Our",
      productGalleryHighlight: "Product Gallery",
      productDescription: "Discover our range of premium logistics products designed for excellence",

      // Testimonials
      clientTestimonials: "Client Testimonials",
      testimonialsTitle: "What Our",
      testimonialsTitleHighlight: "Clients Say",
      testimonialsDescription:
        "Don't just take our word for it. Here's what our satisfied customers have to say about our services",
      verifiedClient: "✓ Verified Client",
      certifiedBy: "Certified & Registered With",
      happyCustomers: "Happy Customers",
      satisfactionRate: "Satisfaction Rate",
      averageRating: "Average Rating",
      yearsExperience: "Years Experience",

      // Contact Page
      contactUs: "Contact Us",
      contactTitle: "Get in touch with our team for all your logistics needs",
      sendMessage: "Send us a Message",
      contactFormDesc: "Fill out the form below and we'll get back to you as soon as possible.",
      getInTouch: "Get in Touch",
      contactDesc: "Reach out to us through any of the following channels. We're here to help!",

      // Form Fields
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      serviceInterest: "Service Interest",
      message: "Message",
      sending: "Sending...",
      sendMessage: "Send Message",

      // Services for form dropdown
      expressDelivery: "Express Delivery",
      internationalShipping: "International Shipping",
      freightServices: "Freight Services",
      ecommerceServices: "E-commerce Solutions",

      // Footer
      footerDescription:
        "Leading courier and logistics company providing reliable shipping solutions worldwide with premium products and excellence.",
      quickLinks: "Quick Links",
      ourProducts: "Our Products",
      contactInfo: "Contact Info",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      allRightsReserved: "All rights reserved.",

      // Multi-line content examples
      companyVision: `Our Vision:
To be the world's most trusted logistics partner

Our Mission:
To provide exceptional service that exceeds expectations

Our Values:
• Customer First
• Innovation
• Excellence
• Integrity`,

      serviceDescription: `Express Delivery Services:
✓ Same-day delivery available
✓ Real-time tracking included  
✓ Insurance coverage provided
✓ 24/7 customer support

International Shipping:
✓ Global network coverage
✓ Customs clearance handled
✓ Door-to-door delivery
✓ Competitive pricing`,
    },
  },
  hi: {
    translation: {
      // Navigation
      home: "होम",
      about: "हमारे बारे में",
      products: "उत्पाद",
      contact: "संपर्क करें",
      getQuote: "कोटेशन प्राप्त करें",

      // Hero Section with line breaks
      trustedBy: "दुनिया भर में ग्राहकों द्वारा भरोसेमंद",
      heroTitle: "आपका विश्वसनीय",
      heroTitleHighlight: "भारत से निर्यात पार्टनर",
      heroDescription: "एक स्रोत। अनंत संभावनाएं।\nगुणवत्ता की आपूर्ति। विश्वास की डिलीवरी।",

      // Contact
      contactUs: "संपर्क करें",
      sendMessage: "हमें संदेश भेजें",
      getInTouch: "संपर्क में रहें",
      firstName: "पहला नाम",
      lastName: "अंतिम नाम",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      message: "संदेश",
      sendMessage: "संदेश भेजें",
      sending: "भेजा जा रहा है...",
    },
  },
  es: {
    translation: {
      // Navigation
      home: "Inicio",
      about: "Acerca de",
      products: "Productos",
      contact: "Contacto",
      getQuote: "Obtener Cotización",

      // Hero with line breaks
      heroDescription: "Una Fuente. Posibilidades Infinitas.\nSuministrando Calidad. Entregando Confianza.",

      // Contact
      contactUs: "Contáctanos",
      sendMessage: "Envíanos un Mensaje",
      getInTouch: "Ponerse en Contacto",
    },
  },
  fr: { translation: {} },
  de: { translation: {} },
  zh: { translation: {} },
  ar: { translation: {} },
  pt: { translation: {} },
  ru: { translation: {} },
  ja: { translation: {} },
  ko: { translation: {} },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    returnEmptyString: false,
    returnNull: false,

    parseMissingKeyHandler: (key) => {
      return key
    },

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })

export default i18n
