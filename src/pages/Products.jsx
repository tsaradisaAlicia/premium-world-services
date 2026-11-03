import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [language, setLanguage] = useState("FR");
  const [selectedCategory, setSelectedCategory] = useState("vanille");
  const [lightboxImage, setLightboxImage] = useState(null);

  const content = {
    FR: {
      home: "Accueil",
      //about: "À propos",
      products: "Nos produits",
      services: "Nos services",
      contact: "Contact",
      quote: "Demander un devis",
      eyebrow: "PREMIUM WORLD SERVICES",
      heroTitle: "Les richesses agricoles de Madagascar",
      heroDescription:
        "Découvrez une sélection de produits agricoles de Madagascar destinée aux partenaires commerciaux et aux acheteurs internationaux.",
      heroButton: "Découvrir nos produits",
      introLabel: "NOTRE OFFRE",
      introTitle: "Des produits agricoles au service du commerce international",
      introText:
        "Premium World Services accompagne les échanges commerciaux autour des produits agricoles de Madagascar. Nous souhaitons établir des relations durables avec nos partenaires en privilégiant une communication claire, des exigences définies et un suivi adapté à chaque demande.",
      catalogLabel: "NOTRE SÉLECTION",
      catalogTitle: "Nos produits agricoles",
      catalogDescription:
        "Explorez notre sélection et contactez notre équipe pour obtenir davantage d'informations sur les produits, les disponibilités et les conditions commerciales.",
      vanilla: "Vanille de Madagascar",
      vanillaDescription:
        "Un produit emblématique de Madagascar, recherché pour son arôme caractéristique. Contactez-nous pour discuter des caractéristiques et des disponibilités.",
      vanillaTag: "Épice",
      capPeas: "Pois du Cap",
      capPeasDescription:
        "Un produit agricole destiné aux échanges commerciaux. Les disponibilités et les spécifications peuvent être étudiées selon votre demande.",
      capPeasTag: "Légumineuse",
      grains: "Autres grains agricoles",
      grainsDescription:
        "Une sélection de produits agricoles à définir selon les besoins de nos partenaires et les disponibilités.",
      grainsTag: "Produits agricoles",
      vanillaMenu: "Vanille",
      peasMenu: "Pois du Cap",
      grainsMenu: "Autres grains agricoles",
      vanillaName14: "Vanille Grade A Gourmet",
      vanillaName16: "Vanille Grade B Gourmet",
      vanillaName18: "Vanille Grade C Gourmet",
      vanillaName20: "Vanille Rouge (Fendue et Non fendue)",
      vanillaName22: "Vanille Pompona de Madagascar",
      vanillaName24: "Vanille Cuts Extraction",
      vanillaName26: "Poudre de Vanille Premium",
      vanillaName28: "Poudre de Vanille Standard",
      vanillaName30: "Poudre de Vanille givrée",
      vanillaName32: "Caviar de Vanille",
      vanillaName34: "Pâte de Vanille pure",
      vanillaName36: "Graine de Vanille épuisée",

      vanillaQuality: "VANILLE NOIRE",
      vanillaQuality1: "VANILLE ROUGE",
      vanillaQuality2: "VANILLE NOIRE",
      vanillaQuality3: "VANILLE EXTRACTION",
      vanillaQuality4: "VANILLE POUDRE",
      vanillaQuality5: "VANILLE CAVIAR",
      vanillaQuality6: "VANILLE PÂTE",
      vanillaQuality7: "VANILLE GRAINE",
      vanillaLength14: "Longueur : +18 cm",
      vanillaLength16: "Longueur : +16 cm à 17 cm",
      vanillaLength18: "Longueur : +14 cm",
      vanillaLength20: "Longueur : +12 cm",
      vanillaLength22: "Longueur : +16 cm",

      vanillaVanillin14: "Taux de vanilline : >1.8%",
      vanillaVanillin16: "Taux de vanilline : >1.6%",
      vanillaVanillin18: "Taux de vanilline : >1.8%",
      vanillaVanillin20: "Taux de vanilline : >1.6%",
      vanillaVanillin22: "Taux de vanilline : >1.6%",
      vanillaVanillin24: "Taux de vanilline : >1.2%",

      vanillaHumidity: "Taux d’humidité : 30%",
      vanillaHumidityCuts: "Taux d’humidité : 20%",

      vanillaAspect: "Aspect : Brillant et très souple",
      vanillaAspect26: "Aspect : Vanille Rouge Fendue finement broyée",
      vanillaAspect28: "Aspect : Vanille Cuts finement broyée",
      vanillaAspect30: "Aspect : Poudre fine mais légèrement grasse ou veloutée, car elle contient les huiles essentielles naturelles et le caviar de la gousse",
      
      details: "Demander des informations",
      commitmentsLabel: "NOTRE APPROCHE",
      commitmentsTitle: "Un partenaire attentif à vos besoins",
      quality: "Exigences définies",
      qualityDescription:
        "Nous accordons de l'importance aux caractéristiques et aux spécifications convenues pour chaque demande.",
      communication: "Communication claire",
      communicationDescription:
        "Nous privilégions des échanges professionnels et transparents avec nos partenaires commerciaux.",
      partnership: "Relations durables",
      partnershipDescription:
        "Nous souhaitons construire des relations commerciales fondées sur la confiance et une bonne coordination.",
      ctaTitle: "Vous recherchez des produits agricoles de Madagascar ?",
      ctaDescription:
        "Présentez-nous votre besoin. Notre équipe pourra étudier votre demande et échanger avec vous sur les possibilités commerciales.",
      ctaButton: "Contactez-nous",
      footerDescription:
        "Votre partenaire pour la commercialisation et l'exportation de produits agricoles de Madagascar.",
      navigation: "Navigation",
      contactUs: "Nous contacter",
      location: "Madagascar",
      copyright: "Tous droits réservés.",
      footerProducts: "Vanille et produits agricoles",
    },
    EN: {
      home: "Home",
      //about: "About us",
      products: "Our products",
      services: "Our services",
      contact: "Contact",
      quote: "Request a quote",
      eyebrow: "PREMIUM WORLD SERVICES",
      heroTitle: "Discover Madagascar's agricultural richness",
      heroDescription:
        "Explore a selection of agricultural products from Madagascar for business partners and international buyers.",
      heroButton: "Explore our products",
      introLabel: "OUR OFFERING",
      introTitle: "Agricultural products for international trade",
      introText:
        "Premium World Services supports commercial exchanges involving agricultural products from Madagascar. We aim to build lasting relationships with our partners through clear communication, defined requirements and appropriate follow-up for each enquiry.",
      catalogLabel: "OUR SELECTION",
      catalogTitle: "Our agricultural products",
      catalogDescription:
        "Explore our selection and contact our team for more information about products, availability and commercial terms.",
      vanilla: "Madagascar Vanilla",
      vanillaDescription:
        "An iconic product from Madagascar, valued for its distinctive aroma. Contact us to discuss product specifications and availability.",
      vanillaTag: "Spice",
      capPeas: "Cape Peas",
      capPeasDescription:
        "An agricultural product intended for commercial trade. Availability and specifications can be discussed according to your requirements.",
      capPeasTag: "Legume",
      grains: "Other Agricultural Grains",
      grainsDescription:
        "A selection of agricultural products to be defined according to our partners' needs and availability.",
      grainsTag: "Agricultural Products",
      vanillaMenu: "Vanilla",
      peasMenu: "Cape Peas",
      grainsMenu: "Other Agricultural Grains",
      vanillaName14: "Vanilla Grade A Gourmet",
      vanillaName16: "Vanilla Grade B Gourmet",
      vanillaName18: "Vanilla Grade C Gourmet",
      vanillaName20: "Red Vanilla (Split and Unsplit)",
      vanillaName22: "Madagascar Pompona Vanilla",
      vanillaName24: "Vanilla Cuts for Extraction",
      vanillaName26: "Premium Vanilla Powder",
      vanillaName28: "Standard Vanilla Powder",
      vanillaName30: "Frosted Vanilla Powder",
      vanillaName32: "Vanilla Caviar",
      vanillaName34: "Pure Vanilla Paste",
      vanillaName36: "Vanilla Seeds",

      vanillaQuality: "BLACK VANILLA",
      vanillaQuality1: "RED VANILLA",
      vanillaQuality2: "BLACK VANILLA",
      vanillaQuality3: "VANILLA FOR EXTRACTION",
      vanillaQuality4: "VANILLA POWDER",
      vanillaQuality5: "VANILLA CAVIAR",
      vanillaQuality6: "VANILLA PASTE",
      vanillaQuality7: "VANILLA SEEDS",

      vanillaLength14: "Length: +18 cm",
      vanillaLength16: "Length: +16 cm to 17 cm",
      vanillaLength18: "Length: +14 cm",
      vanillaLength20: "Length: +12 cm",
      vanillaLength22: "Length: +16 cm",
        

      vanillaVanillin14: "Vanillin content: >1.8%",
      vanillaVanillin16: "Vanillin content: >1.6%",
      vanillaVanillin18: "Vanillin content: >1.6%",
      vanillaVanillin20: "Vanillin content: >1.6%",
      vanillaVanillin22: "Vanillin content: >1.6%",
      vanillaVanillin24: "Vanillin content: >1.2%",

      vanillaHumidity: "Moisture content: 30%",
      vanillaHumidityCuts: "Moisture content: 20%",
      
      vanillaAspect: "Appearance: Shiny and very flexible",
      vanillaAspect26: "Appearance: Finely ground Split Red Vanilla",
      vanillaAspect28: "Appearance: Finely ground Vanilla Cuts",
      vanillaAspect30: "Appearance: Fine powder but slightly greasy or velvety, as it contains the natural essential oils and caviar of the pod",     
     
      details: "Request information",
      commitmentsLabel: "OUR APPROACH",
      commitmentsTitle: "A partner focused on your needs",
      quality: "Defined Requirements",
      qualityDescription:
        "We pay attention to the product characteristics and specifications agreed for each enquiry.",
      communication: "Clear Communication",
      communicationDescription:
        "We value professional and transparent exchanges with our business partners.",
      partnership: "Long-Term Relationships",
      partnershipDescription:
        "We aim to build business relationships based on trust and effective coordination.",
      ctaTitle: "Looking for agricultural products from Madagascar?",
      ctaDescription:
        "Tell us about your requirements. Our team can review your enquiry and discuss potential business opportunities with you.",
      ctaButton: "Contact us",
      footerDescription:
        "Your partner for the marketing and export of agricultural products from Madagascar.",
      navigation: "Navigation",
      contactUs: "Contact us",
      location: "Madagascar",
      copyright: "All rights reserved.",
      footerProducts: "Vanilla and agricultural products",
    },
  };

  const t = content[language];

  const products = [
    {
      id: "vanille-14",
      categoryId: "vanille",
      name: t.vanillaName14,
      category: t.vanillaQuality,
      description: [
        t.vanillaLength14,
        t.vanillaVanillin14,
        t.vanillaHumidity,
        t.vanillaAspect,
      ],
      image: "/images/vanille_noir.png",
    },
    {
      id: "vanille-16",
      categoryId: "vanille",
      name: t.vanillaName16,
      category: t.vanillaQuality,
      description: [
        t.vanillaLength16,
        t.vanillaVanillin16,
        t.vanillaHumidity,
        t.vanillaAspect,
      ],
      image: "/images/vanille_noir.png",
    },
    {
      id: "vanille-18",
      categoryId: "vanille",
      name: t.vanillaName18,
      category: t.vanillaQuality,
      description: [
        t.vanillaLength18,
        t.vanillaVanillin18,
        t.vanillaHumidity,
        t.vanillaAspect,
      ],
      image: "/images/vanille_noir.png",
    },
    {
        id: "vanille-20",
        categoryId: "vanille",
        name: t.vanillaName20,
        category: t.vanillaQuality1,
        description: [
            t.vanillaLength20,
            t.vanillaVanillin20,
            t.vanillaHumidity,
            t.vanillaAspect,
        ],
        image: "/images/vanille_rouge.png",
    },
    {
        id: "vanille-22",
        categoryId: "vanille",
        name: t.vanillaName22,
        category: t.vanillaQuality2,
        description: [
            t.vanillaLength22,
            t.vanillaVanillin22,
            t.vanillaHumidity,
            t.vanillaAspect,
        ],
        image: "/images/pompona.png",
    },
    {
        id: "vanille-24",
        categoryId: "vanille",
        name: t.vanillaName24,
        category: t.vanillaQuality3,
        description: [
            t.vanillaLength24,
            t.vanillaVanillin24,
            t.vanillaHumidityCuts,
            t.vanillaAspect,
        ],
        image: "/images/cuts-extraction.jpg",
    },
    {
        id: "vanille-26",
        categoryId: "vanille",
        name: t.vanillaName26,
        category: t.vanillaQuality4,
        description: [
            t.vanillaLength26,
            t.vanillaVanillin26,
            t.vanillaAspect26,
        ],
        image: "/images/poudre.png",
    },
    {
        id: "vanille-28",
        categoryId: "vanille",
        name: t.vanillaName28,
        category: t.vanillaQuality4,
        description: [
            t.vanillaLength28,
            t.vanillaVanillin28,
            t.vanillaAspect28,
        ],
        image: "/images/poudre.png",
    },
    {
        id: "vanille-30",
        categoryId: "vanille",
        name: t.vanillaName30,
        category: t.vanillaQuality4,
        description: [
            t.vanillaLength30,
            t.vanillaVanillin30,
            t.vanillaAspect30,
        ],
        image: "/images/poudre.png",
    },
    {
        id: "vanille-32",
        categoryId: "vanille",
        name: t.vanillaName32,
        category: t.vanillaQuality5,
        description: [
            t.vanillaLength32,
            t.vanillaVanillin32,
            t.vanillaAspect32,
        ],
        image: "/images/caviar.png",
    },
     {
        id: "vanille-34",
        categoryId: "vanille",
        name: t.vanillaName34,
        category: t.vanillaQuality6,
        description: [
            t.vanillaLength34,
            t.vanillaVanillin34,
            t.vanillaAspect34,
        ],
        image: "/images/pate.png",
    },
    {
        id: "vanille-36",
        categoryId: "vanille",
        name: t.vanillaName36,
        category: t.vanillaQuality7,
        description: [
            t.vanillaLength36,
            t.vanillaVanillin36,
            t.vanillaAspect36,
        ],
        image: "/images/graine.jpg",
    },
    
    {
      id: "02",
      categoryId: "pois-cap",
      name: t.capPeas,
      category: t.capPeasTag,
      description: [t.capPeasDescription],
      image:
        "/images/pois-cap.jpg",
    },
    {
      id: "03",
      categoryId: "autres-grains",
      name: t.grains,
      category: t.grainsTag,
      description: [t.grainsDescription],
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const commitments = [
    {
      number: "01",
      icon: "✦",
      title: t.quality,
      description: t.qualityDescription,
    },
    {
      number: "02",
      icon: "◇",
      title: t.communication,
      description: t.communicationDescription,
    },
    {
      number: "03",
      icon: "◎",
      title: t.partnership,
      description: t.partnershipDescription,
    },
  ];

  // Remplacez cette adresse par l'adresse e-mail officielle de l'entreprise.
  const email = "contact@premium-world-services.com";

  const menus = [
    { id: "vanille", label: t.vanillaMenu },
    { id: "pois-cap", label: t.peasMenu },
    { id: "autres-grains", label: t.grainsMenu },
  ];

  const selectedProducts = products.filter(
    (product) => product.categoryId === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            to="/"
            className="flex shrink-0 items-center"
            aria-label="Premium World Services - Accueil"
          >
            <img
              src="/images/PWS.png"
              alt="Premium World Services"
              className="h-16 w-auto max-w-[240px] object-contain sm:h-20 sm:max-w-[300px] lg:h-24 lg:max-w-[340px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
            >
              {t.home}
            </Link>
 {/* }           <Link
              to="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
            >
              {t.about}
            </Link>
*/}
            <Link
              to="/products"
              className="border-b-2 border-amber-400 py-2 text-sm font-bold text-blue-950"
            >
              {t.products}
            </Link>
            <a
              href="/#engagements"
              className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
            >
              {t.services}
            </a>
            <a
              href={`mailto:${email}`}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
            >
              {t.contact}
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center rounded border border-slate-200 p-1">
              {["FR", "EN"].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-xs font-bold transition ${
                    language === lang
                      ? "bg-blue-950 text-white"
                      : "text-slate-500 hover:text-blue-950"
                  }`}
                  aria-pressed={language === lang}
                >
                  {lang}
                </button>
              ))}
            </div>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                language === "FR"
                  ? "Demande de renseignements sur vos produits"
                  : "Product enquiry"
              )}`}
              className="bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {t.quote}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
              className="border border-slate-200 px-3 py-2 text-sm font-bold text-blue-950"
              aria-label="Change language"
            >
              {language === "FR" ? "EN" : "FR"}
            </button>
            <a
              href={`mailto:${email}`}
              className="bg-blue-950 px-3 py-2 text-xs font-bold text-white"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      <main>
       

        {/* CATALOGUE PRODUITS */}

          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            

            {/* MENUS DES PRODUITS — RESTENT VISIBLES AU DÉFILEMENT */}
              <div className="sticky top-[88px] z-40 -mx-5 mt-10 border-b border-slate-200 bg-white/95 px-5 py-4 shadow-sm backdrop-blur lg:-mx-8 lg:px-8">
                <div className="flex flex-wrap justify-center gap-3">
                  {menus.map((menu) => (
                    <button
                      key={menu.id}
                      type="button"
                      onClick={() => setSelectedCategory(menu.id)}
                      className={`border px-5 py-3 text-sm font-bold transition sm:px-7 ${
                        selectedCategory === menu.id
                          ? "border-blue-950 bg-blue-950 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-amber-400 hover:text-blue-950 "
                      }`}
                      aria-pressed={selectedCategory === menu.id}
                    >
                      {menu.label}
                    </button>
                  ))}
                </div>
              </div>

            {/* CONTENU SELON LE MENU SÉLECTIONNÉ */}
            {selectedCategory === "pois-cap" ? (
              <section className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Présentation principale */}
                <div className="grid lg:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setLightboxImage({
                      src: "/images/pois-cap.jpg",
                      alt: language === "FR" ? "Pois du Cap de Madagascar" : "Madagascar Cape Peas"
                    })}
                    className="group relative block min-h-[300px] cursor-zoom-in overflow-hidden bg-slate-100 text-left lg:min-h-[480px]"
                    aria-label={language === "FR" ? "Agrandir la photo des Pois du Cap" : "Enlarge Cape Peas photo"}
                  >
                    <img
                      src="/images/pois-cap.jpg"
                      alt={language === "FR" ? "Pois du Cap de Madagascar" : "Madagascar Cape Peas"}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-blue-950/85 px-4 py-2 text-xs font-bold text-white shadow">
                      {language === "FR" ? "Cliquer pour agrandir ⤢" : "Click to enlarge ⤢"}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-6 sm:p-8">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-950">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        {language === "FR" ? "Origine Madagascar" : "Origin Madagascar"}
                      </span>
                    </div>
                  </button>

                  <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12">
                    <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                      {language === "FR"
                        ? "GRAINES SÈCHES DE LÉGUMINEUSES (Phaseolus lunatus L.)"
                        : "DRIED LEGUME SEEDS (Phaseolus lunatus L.)"}
                    </p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
                      {language === "FR" ? "Pois du Cap de Madagascar (KABARO)" : "Madagascar Cape Peas (KABARO)"}
                    </h2>
                    <div className="mt-6 h-1 w-16 bg-amber-400" />
                    <p className="mt-6 text-base leading-8 text-slate-600">
                      {language === "FR"
                        ? "Le Pois du Cap, également appelé kabaro à Madagascar, est une légumineuse consommée dans l’alimentation humaine. Premium World Services présente ce produit agricole malgache aux partenaires commerciaux et acheteurs intéressés par son origine et ses caractéristiques."
                        : "Cape peas, known as kabaro in Madagascar, are legumes used for human consumption. Premium World Services presents this Malagasy agricultural product to business partners and buyers interested in its origin and characteristics."}
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {language === "FR"
                        ? "Selon la fiche technique fournie, le produit est constitué de graines sèches. Le séchage et le stockage doivent être réalisés dans un environnement propre et sec, à l’abri de l’humidité et des insectes, avec les sacs isolés du sol."
                        : "According to the supplied technical information, the product consists of dried seeds. Drying and storage should take place in a clean, dry environment, protected from moisture and insects, with bags kept off the floor."}
                    </p>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {language === "FR"
                        ? "Le conditionnement indiqué est un sac sous vide de 1 kg, avec 12 sacs par carton, soit 12 kg par carton. Les spécifications et les conditions commerciales peuvent être confirmées lors de la demande."
                        : "The indicated packaging is a 1 kg vacuum-sealed bag, with 12 bags per carton, or 12 kg per carton. Specifications and commercial terms can be confirmed during an enquiry."}
                    </p>
                  
                      <a
                        href="/documents/fiche-technique-pois-du-cap.pdf"
                        download
                        className="mt-8 inline-flex w-fit items-center justify-center gap-3 bg-amber-400 px-6 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
                      >
                        <span aria-hidden="true">↓</span>
                        {language === "FR"
                          ? "Télécharger la fiche technique PDF"
                          : "Download Technical Data Sheet"}
                      </a>

                  </div>
                </div>

                {/* Galerie photo */}
                <div className="border-t border-slate-200 px-6 py-8 sm:px-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      {
                        src: "/images/pois-du-cap.png",
                        alt: language === "FR" ? "Graines sèches de Pois du Cap" : "Dried Cape Peas"
                      },
                      {
                        src: "/images/pois-du-cap-kabaro.jpg",
                        alt: language === "FR" ? "Gros plan des graines de Pois du Cap" : "Close-up of Cape Pea seeds"
                      }
                    ].map((photo) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => setLightboxImage(photo)}
                        className="group relative overflow-hidden rounded-xl bg-slate-100 text-left focus:outline-none focus:ring-4 focus:ring-amber-300"
                        aria-label={language === "FR" ? `Agrandir : ${photo.alt}` : `Enlarge: ${photo.alt}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.style.display = "none";
                          }}
                        />
                        <span className="absolute bottom-3 right-3 rounded-full bg-blue-950/85 px-3 py-2 text-xs font-bold text-white">
                          ⤢ {language === "FR" ? "Agrandir" : "Enlarge"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Caractéristiques issues de la fiche fournie */}
                <div className="border-t border-slate-200 px-6 py-9 sm:px-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                    {language === "FR" ? "Fiche descriptive" : "Product details"}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-blue-950">
                    {language === "FR" ? "Caractéristiques du produit" : "Product specifications"}
                  </h3>
                  <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full border-collapse text-left text-sm">
                      <tbody>
                        {[
                          [language === "FR" ? "Nom commun" : "Common name", "Pois du Cap (Phaseolus lunatus L.)"],
                          [language === "FR" ? "Origine" : "Origin", "Madagascar"],
                          [language === "FR" ? "Nature du produit" : "Product type", language === "FR" ? "Graines sèches de légumineuse" : "Dried legume seeds"],
                          [language === "FR" ? "Utilisation" : "Use", language === "FR" ? "Alimentation humaine" : "Human consumption"],
                          [language === "FR" ? "Poids de 1 000 graines" : "Weight of 1,000 seeds", "990 à 1 000 g"],
                          [language === "FR" ? "Valeurs nutritionnelles moyennes pour 100 g" : "Average nutritional values per 100 g", "275 kcal, 1.4 g " + (language === "FR" ? "de lipides et 45 g de protéines" : "fat and 45 g protein")],
                          [language === "FR" ? "Taux d’humidité" : "Moisture content", language === "FR" ? "12 % pour les graines sèches destinées au stockage" : "12% for dried seeds intended for storage"],
                          [language === "FR" ? "Germination" : "Germination", language === "FR" ? "Environ 5 à 10 jours dans des conditions favorables" : "Approximately 5 to 10 days under favourable conditions"],
                          [language === "FR" ? "Conditionnement" : "Packaging", language === "FR" ? "Sacs sous vide de 1 kg" : "1 kg vacuum-sealed bags"],
                          [language === "FR" ? "Emballage collectif" : "Outer packaging", language === "FR" ? "12 sacs de 1 kg par carton (12 kg par carton)" : "12 bags of 1 kg per carton (12 kg per carton)"],
                          [language === "FR" ? "Conservation" : "Storage", language === "FR" ? "Récipients propres, secs et hermétiques ; ou congélation après cuisson" : "Clean, dry, airtight containers; or freeze after cooking"],
                          [language === "FR" ? "Conditions de stockage" : "Storage conditions", language === "FR" ? "À l’abri de l’humidité et des insectes" : "Protected from moisture and insects"],
                          [language === "FR" ? "Humidité de stockage" : "Storage moisture", "12%"]
                        ].map(([label, value], index) => (
                          <tr key={label} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                            <th scope="row" className="w-2/5 border-b border-slate-200 bg-blue-50 px-4 py-3 font-semibold text-blue-950 sm:px-5">
                              {label}
                            </th>
                            <td className="border-b border-slate-200 px-4 py-3 leading-6 text-slate-700 sm:px-5">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs italic leading-5 text-slate-500">
                    {language === "FR"
                      ? "Les valeurs indiquées sont données à titre indicatif pour une qualité supérieure de Pois du Cap (Phaseolus lunatus L.) et peuvent varier selon la variété et la grosseur des graines."
                      : "The values shown are indicative for a superior quality of Cape Peas (Phaseolus lunatus L.) and may vary according to variety and seed size."}
                  </p>
                </div>
              </section>
            ) : (
              <div className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {selectedProducts.map((product) => (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = "/images/vanille_noir.png";
                        }}
                      />
                    </div>
                    <div className="p-6 sm:p-7">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-700">
                        {product.category}
                      </p>
                      <h3 className="mt-2 text-lg font-bold leading-7 text-blue-950">
                        {product.name}
                      </h3>
                      <div className="mt-4 h-1 w-12 bg-amber-400" />
                      <div className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                        {product.description.map((detail, index) => (
                          <p key={`${product.id}-detail-${index}`}>{detail}</p>
                        ))}
                      </div>
                      <a
                        href={`mailto:${email}?subject=${encodeURIComponent(
                          `${
                            language === "FR"
                              ? "Demande d'informations"
                              : "Product enquiry"
                          } - ${product.name}`
                        )}`}
                        className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-blue-950 transition hover:text-amber-600"
                      >
                        {t.details}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>


        {lightboxImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={language === "FR" ? "Photo agrandie" : "Enlarged photo"}
            onClick={() => setLightboxImage(null)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setLightboxImage(null);
            }}
            tabIndex={-1}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-2xl font-bold text-blue-950 shadow transition hover:bg-amber-300"
              aria-label={language === "FR" ? "Fermer la photo agrandie" : "Close enlarged photo"}
            >
              ×
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}

        {/* ENGAGEMENTS */}
        <section id="engagements" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.commitmentsLabel}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
                {t.commitmentsTitle}
              </h2>
              <div className="mx-auto mt-6 h-1 w-16 bg-amber-400" />
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {commitments.map((item) => (
                <article
                  key={item.number}
                  className="border-t-2 border-slate-200 pt-7 transition hover:border-amber-400"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-light text-amber-500">
                      {item.icon}
                    </span>
                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-blue-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="bg-blue-950 py-20 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-400">
                PREMIUM WORLD SERVICES
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                {t.ctaDescription}
              </p>
            </div>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(
                language === "FR"
                  ? "Demande commerciale - Produits agricoles"
                  : "Business enquiry - Agricultural products"
              )}`}
              className="inline-flex shrink-0 items-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
            >
              {t.ctaButton}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          <div>
            <a href="#accueil" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center bg-blue-900 font-bold text-amber-400">
                <img
                  src="/images/PWS.png"
                  alt="Premium World Services"
                />
              </div>
               

              <div>
                <p className="text-sm font-bold tracking-wider">
                  PREMIUM WORLD
                </p>
                <p className="text-xs tracking-[0.2em] text-slate-400">
                  SERVICES
                </p>
              </div>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {t.footerDescription}
            </p>
          </div>

          <div>
            <h3 className="font-bold">{t.navigation}</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              <Link to="/" className="transition hover:text-amber-400">
                {t.home}
              </Link>
              <Link to="/about" className="transition hover:text-amber-400">
                {t.about}
              </Link>
              <Link to="/products" className="transition hover:text-amber-400">
                {t.products}
              </Link>
              <a
                href="/#engagements"
                className="transition hover:text-amber-400"
              >
                {t.services}
              </a>
              <a
                href={`mailto:${email}`}
                className="transition hover:text-amber-400"
              >
                {t.contact}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">{t.contactUs}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              {t.location}
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-3 inline-block break-all text-sm text-slate-400 transition hover:text-amber-400"
            >
              {email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} Premium World Services.{" "}
              {t.copyright}
            </p>
            <p>{t.footerProducts}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
