import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BorgoForm from "../components/BorgoForm";
import scrollToSection from "../hooks/utils/scrollToSection";
import { useLocation } from "react-router-dom";

function Home() {
  const { t } = useTranslation();
  const contactRef = useRef(null);
  const location = useLocation();

  // Controlla se c'è un hash nell'URL
  useEffect(() => {
    // Se c'è il hash #contact nell'URL, scorriamo fino a quella sezione
    if (location.hash === "#contact" && contactRef.current) {
      // Aggiungiamo un piccolo timeout per assicurarci che il DOM sia completamente caricato
      setTimeout(() => {
        scrollToSection(contactRef);
      }, 100);
    }
  }, [location]);

  // Definizione delle sezioni con immagini e alt
  const sections = [
    {
      id: "hero",
      image:
        "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Village Image",
    },
    {
      id: "about",
      image:
        "https://images.unsplash.com/photo-1593814416331-7c0cde46482d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Community Images of Villages",
    },
    {
      id: "features",
      image:
        "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Pietrapertosa",
    },
    {
      id: "cta",
      image:
        "https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Melfi",
    },
  ];

  // Animazione di entrata
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {/* Hero Section - Modernizzato */}
      <div className="px-4 py-12 md:py-20 max-w-6xl mx-auto text-center">
        <motion.h1
          className="font-bold text-3xl md:text-4xl mb-6 text-gray-900"
          {...fadeInUp}
        >
          {t("title")}
        </motion.h1>
        <motion.p
          className="text-xl font-medium text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t("tagline")}
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t("intro")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <a href="/borghi">
            <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
              {t("callToActionButtonText")}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col">
        {/* About Section */}
        <section className="relative">
          <div className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={sections[0].image}
              className="w-full h-full object-cover object-center"
              alt={sections[0].alt}
            />
          </div>
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
            <motion.div
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 -mt-20 md:-mt-32 relative z-10"
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                {t("whatIsVicus")}
              </h2>
              <p className="text-gray-700 mb-4">{t("description1")}</p>
              <p className="text-gray-700 mb-6">{t("description2")}</p>
              <p className="text-gray-800 font-medium mb-6">
                {t("whyChooseUs")}
              </p>

              <ul className="text-left space-y-3 list-disc list-inside text-gray-700 mb-8">
                <li>{t("points_1")}</li>
                <li>{t("points_2")}</li>
                <li>{t("points_3")}</li>
              </ul>

              <div className="text-center">
                <a href="/about">
                  <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
                    {t("footerButtonText")}
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Unique Selling Points */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileInView={{ opacity: [0, 1], x: [-50, 0] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  {t("uniqueSellingPointsTitle")}
                </h2>
                <p className="text-gray-700 mb-8">
                  {t("uniqueSellingPointsDescription")}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  {t("uniqueSellingPointsTitle2")}
                </h2>
                <p className="text-gray-700">
                  {t("uniqueSellingPointsDescription2")}
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <img
                  src={sections[1].image}
                  className="w-full h-auto rounded-lg shadow-xl"
                  alt={sections[1].alt}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={sections[2].image}
                  className="w-full h-auto rounded-lg shadow-xl"
                  alt={sections[2].alt}
                />
              </motion.div>
              <motion.div
                whileInView={{ opacity: [0, 1], x: [50, 0] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  {t("callToActionHeadline")}
                </h2>
                <p className="text-gray-700 mb-8">
                  {t("uniqueSellingPointsDescription")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        {/* <section className="py-12 md:py-20 bg-red-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.h2
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-bold mb-8"
            >
              {t("callToActionBody")}
            </motion.h2>
            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="/borghi">
                <button className="px-8 py-3 text-center font-semibold bg-white text-red-800 rounded-full hover:bg-blue-300 hover:text-white transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
                  {t("callToActionButtonText")}
                </button>
              </a>
            </motion.div>
          </div>
        </section> */}

        <section className="py-16 md:py-24 bg-red-800 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
            <motion.h2
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight leading-tight"
            >
              {t("callToActionBody")}
            </motion.h2>

            <motion.div
              whileInView={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="/borghi">
                <button
                  className="px-8 py-3 font-semibold bg-white text-red-800 rounded-full 
                     hover:bg-yellow-400 hover:text-red-900 
                     transition-all duration-300 ease-in-out 
                     shadow-lg hover:shadow-xl 
                     focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-opacity-70"
                >
                  {t("callToActionButtonText")}
                </button>
              </a>
            </motion.div>
          </div>

          {/* Vibe background element (opzionale) */}
          <div className="absolute -top-16 -left-16 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 z-0 animate-pulse" />
        </section>

        {/* Final Image */}
        <div className="w-full h-80 md:h-96 lg:h-[32rem] overflow-hidden">
          <img
            src={sections[3].image}
            className="w-full h-full object-cover object-center"
            alt={sections[3].alt}
          />
        </div>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="py-12 md:py-20 bg-gray-50 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <BorgoForm />
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
