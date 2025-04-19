import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function About() {
  const { t } = useTranslation();

  // Definizione delle animazioni
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true },
  };

  return (
    <motion.div
      className="min-h-screen bg-white pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero section */}
      <section className="relative">
        <div className="w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden">
          <motion.img
            src="https://images.unsplash.com/photo-1541855127-2e944b899d9a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-full object-cover object-center"
            alt="Matera"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </section>

      {/* Main content section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            {...fadeIn}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-30 px-8 py-4 rounded-lg shadow-lg">
              {t("welcome")}
            </h1>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            {...fadeIn}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white bg-black bg-opacity-30 px-8 py-4 rounded-lg shadow-lg">
              {t("welcome")}
            </h1>
          </motion.div>

          <motion.div className="space-y-6 text-center" {...fadeInUp}>
            <p className="text-lg font-medium text-gray-800">
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-md">
                {t("borghi_initiative")}
              </span>
            </p>

            <p className="text-gray-700">{t("promote_revitalization")}</p>
            <p className="text-gray-700">{t("dedicated_to_change")}</p>

            <motion.p
              className="text-2xl font-bold text-red-800 my-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("entrepreneurs_creators")}
            </motion.p>

            <p className="text-gray-700">{t("authentic_lifestyle")}</p>
            <p className="text-gray-700">{t("remember_roots")}</p>

            <motion.p
              className="text-xl font-bold text-red-800 my-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t("slow_and_authentic")}
            </motion.p>

            <p className="text-gray-700">{t("find_villages")}</p>
            <p className="text-gray-700">{t("shared_vision")}</p>
          </motion.div>

          <motion.hr
            className="my-8 border-gray-200"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg font-medium text-gray-800">
              {t("curious_about_project")}
            </p>
            <p className="text-gray-700 mb-6">{t("click_to_learn_more")}</p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <a href="/registration">
                <button className="px-8 py-3 text-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 focus:shadow-outline focus:outline-none shadow-md">
                  {t("signUp")}
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
