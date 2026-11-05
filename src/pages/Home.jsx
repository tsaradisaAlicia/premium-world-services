import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [language, setLanguage] = useState("FR");
  const [menuOpen, setMenuOpen] = useState(false);

  const content = {
    FR: {
      home: "Accueil",
      //about: "À propos",
      products: "Nos produits",
      services: "Nos services",
      contact: "Contact",
      quote: "Demander un devis",
      eyebrow: "PREMIUM WORLD SERVICES",
      title: "L'excellence agricole de Madagascar, ouverte sur le monde.",
      description:
        "Votre partenaire pour l'exportation de vanille et de produits agricoles. Nous créons des relations commerciales durables fondées sur la qualité, la confiance et le professionnalisme.",
      discover: "Découvrir nos produits",
      learnMore: "En savoir plus",
      introLabel: "QUI SOMMES-NOUS ?",
      introTitle: "Un partenaire tourné vers l'international",
      introText:
        "Premium World Services accompagne les échanges commerciaux autour des produits agricoles de Madagascar. Notre ambition est de mettre en relation les producteurs, les fournisseurs et les acheteurs internationaux dans une démarche professionnelle et durable.",
      productsLabel: "NOTRE SÉLECTION",
      productsTitle: "Nos produits",
      productsText:
        "Découvrez notre sélection de produits agricoles destinés aux marchés internationaux.",
      vanilla: "Vanille de Madagascar",
      vanillaText:
        "Un produit emblématique de Madagascar, apprécié pour son arôme et ses caractéristiques uniques.",
      grains: "Pois du cap",
      grainsText:
        "Des produits agricoles sélectionnés selon les disponibilités et les besoins de nos partenaires.",
      spices: "Grains agricoles",
      spicesText:
        "Une sélection de produits issus du secteur agricole, adaptée aux demandes de nos clients.",
      details: "En savoir plus",
      valuesLabel: "NOS ENGAGEMENTS",
      valuesTitle: "La confiance au cœur de nos échanges",
      quality: "Exigence de qualité",
      qualityText:
        "Une attention particulière aux caractéristiques et aux spécifications des produits.",
      trust: "Partenariat de confiance",
      trustText:
        "Une communication claire et une relation commerciale fondée sur la transparence.",
      international: "Ouverture internationale",
      internationalText:
        "Une approche tournée vers les besoins des acheteurs et des marchés internationaux.",
      export: "Accompagnement à l'export",
      exportText:
        "Un suivi des demandes commerciales et une coordination adaptée aux besoins convenus.",
      ctaTitle: "Vous recherchez un fournisseur à Madagascar ?",
      ctaText:
        "Parlons de vos besoins en vanille et en produits agricoles. Notre équipe est à votre disposition pour étudier votre demande.",
      ctaButton: "Contactez-nous",
      footerText:
        "Votre partenaire pour la commercialisation et l'exportation de produits agricoles de Madagascar.",
      quickLinks: "Navigation",
      ourProducts: "Produits",
      contactUs: "Nous contacter",
      copyright: "Tous droits réservés.",
      location: "Madagascar",
    },
    EN: {
      home: "Home",
      //about: "About us",
      products: "Our products",
      services: "Our services",
      contact: "Contact",
      quote: "Request a quote",
      eyebrow: "PREMIUM WORLD SERVICES",
      title: "Madagascar's agricultural excellence, connected to the world.",
      description:
        "Your partner for vanilla and agricultural product exports. We build lasting business relationships based on quality, trust and professionalism.",
      discover: "Explore our products",
      learnMore: "Learn more",
      introLabel: "WHO WE ARE",
      introTitle: "Your partner for international trade",
      introText:
        "Premium World Services supports commercial exchanges involving agricultural products from Madagascar. Our ambition is to connect producers, suppliers and international buyers through a professional and sustainable approach.",
      productsLabel: "OUR SELECTION",
      productsTitle: "Our products",
      productsText:
        "Discover our selection of agricultural products intended for international markets.",
      vanilla: "Madagascar Vanilla",
      vanillaText:
        "An iconic product from Madagascar, appreciated for its distinctive aroma and characteristics.",
      grains: "Agricultural Grains",
      grainsText:
        "Agricultural products selected according to availability and our partners' needs.",
      spices: "Agricultural Products",
      spicesText:
        "A selection of agricultural products tailored to our customers' requirements.",
      details: "Learn more",
      valuesLabel: "OUR COMMITMENTS",
      valuesTitle: "Trust at the heart of every partnership",
      quality: "Quality Standards",
      qualityText:
        "Careful attention to product characteristics and specifications.",
      trust: "Trusted Partnerships",
      trustText:
        "Clear communication and business relationships built on transparency.",
      international: "Global Outlook",
      internationalText:
        "An approach focused on the needs of international buyers and markets.",
      export: "Export Support",
      exportText:
        "Commercial request follow-up and coordination based on agreed requirements.",
      ctaTitle: "Looking for a supplier in Madagascar?",
      ctaText:
        "Tell us about your vanilla and agricultural product requirements. Our team is ready to discuss your needs.",
      ctaButton: "Contact us",
      footerText:
        "Your partner for the marketing and export of agricultural products from Madagascar.",
      quickLinks: "Quick links",
      ourProducts: "Products",
      contactUs: "Contact us",
      copyright: "All rights reserved.",
      location: "Madagascar",
    },
  };

  const t = content[language];

  const products = [
    {
      title: t.vanilla,
      description: t.vanillaText,
      image: "/images/vanille-home.jpg",
      number: "01",
    },
    {
      title: t.grains,
      description: t.grainsText,
      image: "/images/pois-home.jpg",
      number: "02",
    },
    {
      title: t.spices,
      description: t.spicesText,
      image: "/images/anis.jpg",
      number: "03",
    },
  ];

  const commitments = [
    {
      number: "01",
      title: t.quality,
      description: t.qualityText,
      icon: "✓",
    },
    {
      number: "02",
      title: t.trust,
      description: t.trustText,
      icon: "◇",
    },
    {
      number: "03",
      title: t.international,
      description: t.internationalText,
      icon: "◎",
    },
    {
      number: "04",
      title: t.export,
      description: t.exportText,
      icon: "↗",
    },
  ];

  const navLinks = [
    { label: t.home, href: "#accueil" },
    { label: t.about, href: "/about" },
    { label: t.products, href: "/products" },
    { label: t.services, href: "#engagements" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#accueil"
            className="flex shrink-0 items-center"
            aria-label="Premium World Services - Accueil"
            >
           <div className="flex h-20 max-w-[260px] items-center justify-center bg-blue-900 font-bold text-amber-400">
            <img
              src="/images/PWS.png"
              alt="Premium World Services"
              className="h-16 w-auto max-w-[240px] object-contain sm:h-20 sm:max-w-[300px] lg:h-24 lg:max-w-[340px]"
            />
          </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) =>
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-blue-900"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center rounded border border-slate-200 p-1">
              {["FR", "EN"].map((lang) => (
                <button
                  key={lang}
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
              href="#contact"
              className="bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              {t.quote}
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLanguage(language === "FR" ? "EN" : "FR")}
              className="border border-slate-200 px-3 py-2 text-sm font-bold text-blue-950"
              aria-label="Change language"
            >
              {language === "FR" ? "EN" : "FR"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-2xl text-blue-950"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700 hover:text-blue-950"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block bg-blue-950 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {t.quote}
            </a>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="accueil"
          className="relative flex min-h-[600px] items-center overflow-hidden bg-blue-950"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/export.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/30" />

          <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-amber-400" />
                <p className="text-xs font-bold tracking-[0.3em] text-amber-300 sm:text-sm">
                  {t.eyebrow}
                </p>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {t.title}
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {t.description}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#produits"
                  className="inline-flex items-center justify-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
                >
                  {t.discover}
                  <span aria-hidden="true">→</span>
                </a>
{/*
                <a
                  href="#apropos"
                  className="inline-flex items-center justify-center border border-white/60 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-blue-950"
                >
                  {t.learnMore}
                </a>
*/}
              </div>

              <div className="mt-14 flex items-center gap-4 border-t border-white/20 pt-6">
                <span className="text-2xl text-amber-400">✦</span>
                <p className="text-sm tracking-wide text-slate-200">
                  {t.location} <span className="mx-2">/</span>
                  {language === "FR"
                    ? "Commerce international"
                    : "International Trade"}
                </p>
              </div>
            </div>
          </div>
        </section>

     {/* INTRODUCTION */}
        <section id="apropos" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="relative">
              <img
                src="/images/exportation.jpg"
                alt={
                  language === "FR"
                    ? "Paysage naturel et agricole"
                    : "Natural and agricultural landscape"
                }
                className="h-[350px] w-full object-cover sm:h-[460px]"
                loading="lazy"
              />

              <div className="absolute -bottom-5 -right-3 hidden border-4 border-white bg-blue-950 px-7 py-6 text-white sm:block md:-right-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Premium World
                </p>
                <p className="mt-1 text-lg font-bold">Services</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.introLabel}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
                {t.introTitle}
              </h2>

              <div className="mt-6 h-1 w-16 bg-amber-400" />

              <p className="mt-7 text-base leading-8 text-slate-600">
                {t.introText}
              </p>

              <a
                href="#engagements"
                className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-blue-950 hover:text-amber-600"
              >
                {t.learnMore}
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </section>


        {/* PRODUCTS */}
        <section id="produits" className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.productsLabel}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
                {t.productsTitle}
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                {t.productsText}
              </p>

              <div className="mx-auto mt-6 h-1 w-16 bg-amber-400" />
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.number}
                  className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      onError={(event) => {
                        if (product.fallback) {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = product.fallback;
                        }
                      }}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    <span className="absolute left-5 top-5 bg-white px-3 py-2 text-xs font-bold text-blue-950">
                      {product.number}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-blue-950">
                      {product.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {product.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-blue-950 transition group-hover:text-amber-600"
                    >
                      {t.details}
                      <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* COMMITMENTS */}
        <section id="engagements" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.valuesLabel}
              </p>

              <h2 className="mt-4 text-3xl font-bold text-blue-950 sm:text-4xl">
                {t.valuesTitle}
              </h2>

              <div className="mt-6 h-1 w-16 bg-amber-400" />
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* CONTACT CTA */}
        <section id="contact" className="bg-blue-950 py-20 sm:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-400">
                PREMIUM WORLD SERVICES
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.ctaTitle}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                {t.ctaText}
              </p>
            </div>

            <a
              href="mailto:contact@premium-world-services.com"
              className="inline-flex shrink-0 items-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
            >
              {t.ctaButton}
              <span>→</span>
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
              {t.footerText}
            </p>
          </div>

          <div>
            <h3 className="font-bold">{t.quickLinks}</h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-amber-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">{t.contactUs}</h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {t.location}
            </p>

            <a
              href="mailto:contact@premium-world-services.com"
              className="mt-3 inline-block break-all text-sm text-slate-400 transition hover:text-amber-400"
            >
              contact@premium-world-services.com
            </a>

          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>
              © {new Date().getFullYear()} Premium World Services.{" "}
              {t.copyright}
            </p>

            <p>
              {language === "FR"
                ? "Vanille & produits agricoles"
                : "Vanilla & agricultural products"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}