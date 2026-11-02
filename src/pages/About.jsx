import React, { useState } from "react";

export default function About() {
  const [language, setLanguage] = useState("FR");

  const content = {
    FR: {
      home: "Accueil",
      about: "À propos",
      products: "Nos produits",
      services: "Nos services",
      contact: "Contact",
      quote: "Demander un devis",

      eyebrow: "À PROPOS DE NOUS",
      title: "Créer des connexions commerciales entre Madagascar et le monde.",
      description:
        "Premium World Services se consacre à la commercialisation et à l'exportation de vanille et de produits agricoles de Madagascar vers les marchés internationaux.",

      discover: "Découvrir nos produits",

      storyLabel: "NOTRE ENTREPRISE",
      storyTitle: "Un partenaire pour vos échanges internationaux",
      storyText1:
        "Madagascar possède une richesse agricole reconnue à travers le monde. La vanille et les autres produits agricoles représentent des opportunités importantes pour les échanges commerciaux internationaux.",
      storyText2:
        "Premium World Services souhaite contribuer à ces échanges en mettant en relation les fournisseurs et les acheteurs professionnels, avec une approche fondée sur la communication, la transparence et le professionnalisme.",

      missionLabel: "NOTRE MISSION",
      missionTitle: "Valoriser les produits agricoles de Madagascar",
      missionText:
        "Notre mission est de faciliter les échanges commerciaux autour des produits agricoles malgaches et de développer des relations durables avec nos partenaires.",

      visionLabel: "NOTRE VISION",
      visionTitle: "Développer des partenariats durables",
      visionText:
        "Nous souhaitons développer notre présence sur les marchés internationaux en privilégiant des relations commerciales responsables et une collaboration à long terme.",

      valuesLabel: "NOS VALEURS",
      valuesTitle: "Les principes qui nous guident",

      value1: "Confiance",
      value1Text:
        "Construire des relations commerciales transparentes et durables.",

      value2: "Professionnalisme",
      value2Text:
        "Traiter chaque demande avec sérieux, rigueur et attention.",

      value3: "Qualité",
      value3Text:
        "Porter une attention particulière aux caractéristiques des produits et aux exigences des clients.",

      value4: "Partenariat",
      value4Text:
        "Favoriser la coopération entre fournisseurs et acheteurs internationaux.",

      ctaTitle: "Construisons ensemble votre prochain partenariat.",
      ctaText:
        "Vous recherchez un partenaire pour vos approvisionnements en vanille ou en produits agricoles de Madagascar ? Échangeons sur vos besoins.",
      ctaButton: "Contactez-nous",

      footer:
        "Votre partenaire pour la commercialisation et l'exportation de produits agricoles de Madagascar.",
      navigation: "Navigation",
      copyright: "Tous droits réservés.",
    },

    EN: {
      home: "Home",
      about: "About us",
      products: "Our products",
      services: "Our services",
      contact: "Contact",
      quote: "Request a quote",

      eyebrow: "ABOUT US",
      title: "Connecting Madagascar with global markets.",
      description:
        "Premium World Services focuses on the marketing and export of vanilla and agricultural products from Madagascar to international markets.",

      discover: "Explore our products",

      storyLabel: "OUR COMPANY",
      storyTitle: "A partner for international trade",
      storyText1:
        "Madagascar is known worldwide for its agricultural richness. Vanilla and other agricultural products offer valuable opportunities for international trade.",
      storyText2:
        "Premium World Services aims to contribute to these exchanges by connecting suppliers with professional buyers through an approach based on communication, transparency and professionalism.",

      missionLabel: "OUR MISSION",
      missionTitle: "Promoting Madagascar's agricultural products",
      missionText:
        "Our mission is to facilitate trade in Malagasy agricultural products and develop lasting relationships with our partners.",

      visionLabel: "OUR VISION",
      visionTitle: "Building lasting partnerships",
      visionText:
        "We aim to develop our presence in international markets by prioritizing responsible business relationships and long-term cooperation.",

      valuesLabel: "OUR VALUES",
      valuesTitle: "The principles that guide us",

      value1: "Trust",
      value1Text:
        "Building transparent and lasting business relationships.",

      value2: "Professionalism",
      value2Text:
        "Handling every inquiry with care, precision and professionalism.",

      value3: "Quality",
      value3Text:
        "Paying close attention to product specifications and customer requirements.",

      value4: "Partnership",
      value4Text:
        "Encouraging cooperation between suppliers and international buyers.",

      ctaTitle: "Let's build your next business partnership.",
      ctaText:
        "Looking for a partner for your vanilla or agricultural product sourcing needs in Madagascar? Let's discuss your requirements.",
      ctaButton: "Contact us",

      footer:
        "Your partner for the marketing and export of agricultural products from Madagascar.",
      navigation: "Navigation",
      copyright: "All rights reserved.",
    },
  };

  const t = content[language];

  const values = [
    {
      number: "01",
      title: t.value1,
      description: t.value1Text,
      icon: "◇",
    },
    {
      number: "02",
      title: t.value2,
      description: t.value2Text,
      icon: "✓",
    },
    {
      number: "03",
      title: t.value3,
      description: t.value3Text,
      icon: "◎",
    },
    {
      number: "04",
      title: t.value4,
      description: t.value4Text,
      icon: "↗",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <a href="/" aria-label="Premium World Services">
            <img
              src="/images/vrai-logo.png"
              alt="Premium World Services"
              className="h-16 w-auto max-w-[240px] object-contain sm:h-20 sm:max-w-[300px]"
            />
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            <a href="/" className="text-sm text-slate-600 hover:text-blue-950">
              {t.home}
            </a>

            <a
              href="/about"
              className="text-sm font-bold text-blue-950"
            >
              {t.about}
            </a>

            <a
              href="/products"
              className="text-sm text-slate-600 hover:text-blue-950"
            >
              {t.products}
            </a>

            <a
              href="/services"
              className="text-sm text-slate-600 hover:text-blue-950"
            >
              {t.services}
            </a>

            <a
              href="/contact"
              className="text-sm text-slate-600 hover:text-blue-950"
            >
              {t.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex border border-slate-200 p-1">
              {["FR", "EN"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-2 text-xs font-bold ${
                    language === lang
                      ? "bg-blue-950 text-white"
                      : "text-slate-600"
                  }`}
                  aria-pressed={language === lang}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href="/contact"
              className="hidden bg-blue-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:block"
            >
              {t.quote}
            </a>
          </div>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative overflow-hidden bg-blue-950">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1800&q=85')",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8">

            <p className="text-xs font-bold tracking-[0.3em] text-amber-400">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {t.description}
            </p>

            <a
              href="/products"
              className="mt-9 inline-flex items-center gap-3 bg-amber-400 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
            >
              {t.discover}
              <span>→</span>
            </a>
          </div>
        </section>

        {/* COMPANY */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.storyLabel}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 sm:text-4xl">
                {t.storyTitle}
              </h2>

              <div className="mt-6 h-1 w-16 bg-amber-400" />

              <p className="mt-7 leading-8 text-slate-600">
                {t.storyText1}
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                {t.storyText2}
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1100&q=85"
                alt={
                  language === "FR"
                    ? "Paysage naturel de Madagascar"
                    : "Natural landscape of Madagascar"
                }
                className="h-[350px] w-full object-cover sm:h-[450px]"
                loading="lazy"
              />

              <div className="absolute -bottom-5 left-5 bg-blue-950 px-6 py-5 text-white sm:left-8">
                <p className="text-sm font-semibold tracking-wider">
                  PREMIUM WORLD SERVICES
                </p>

                <p className="mt-2 text-xs text-amber-400">
                  MADAGASCAR
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:px-8">

            <article className="border-t-4 border-blue-950 bg-white p-8 sm:p-10">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.missionLabel}
              </p>

              <h2 className="mt-5 text-2xl font-bold text-blue-950">
                {t.missionTitle}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {t.missionText}
              </p>
            </article>

            <article className="border-t-4 border-amber-400 bg-white p-8 sm:p-10">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.visionLabel}
              </p>

              <h2 className="mt-5 text-2xl font-bold text-blue-950">
                {t.visionTitle}
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                {t.visionText}
              </p>
            </article>

          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">

            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.25em] text-amber-600">
                {t.valuesLabel}
              </p>

              <h2 className="mt-5 text-3xl font-bold text-blue-950 sm:text-4xl">
                {t.valuesTitle}
              </h2>

              <div className="mt-6 h-1 w-16 bg-amber-400" />
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <article
                  key={value.number}
                  className="border-t-2 border-slate-200 pt-7 transition hover:border-amber-400"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl text-amber-500">
                      {value.icon}
                    </span>

                    <span className="text-xs font-bold tracking-widest text-slate-400">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-blue-950">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-blue-950 py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-center lg:px-8">

            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.ctaTitle}
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                {t.ctaText}
              </p>
            </div>

            <a
              href="/contact"
              className="shrink-0 bg-amber-400 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-amber-300"
            >
              {t.ctaButton} →
            </a>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">

          <div>
            <img
              src="/images/vrai-logo.png"
              alt="Premium World Services"
              className="h-20 w-auto max-w-[280px] object-contain"
              loading="lazy"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              {t.footer}
            </p>
          </div>

          <div>
            <h3 className="font-bold">{t.navigation}</h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-slate-400">
              <a href="/" className="hover:text-amber-400">
                {t.home}
              </a>

              <a href="/about" className="hover:text-amber-400">
                {t.about}
              </a>

              <a href="/products" className="hover:text-amber-400">
                {t.products}
              </a>

              <a href="/contact" className="hover:text-amber-400">
                {t.contact}
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold">{t.contact}</h3>

            <p className="mt-5 text-sm text-slate-400">
              Madagascar
            </p>

            <a
              href="mailto:contact@premium-world-services.com"
              className="mt-3 inline-block break-all text-sm text-slate-400 hover:text-amber-400"
            >
              contact@premium-world-services.com
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Premium World Services.{" "}
          {t.copyright}
        </div>
      </footer>

    </div>
  );
}