import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo Vicus */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/favicon-96x96.png" // Sostiture con il path corretto del tuo logo
            alt="Vicus Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-gray-800">Vicus</span>
        </a>

        {/* Social */}
        <div className="text-center">
          <p className="font-semibold text-lg mb-4">{t("followUs")}</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/vicus.sud/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                alt="Instagram"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>

            <a
              href="https://t.me/+itBwf1Ed0DNjMjdk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:opacity-70"
            >
              <img
                src="https://frankmerenda.com/wp-content/uploads/2019/11/telegram-icon-512.png"
                alt="Telegram"
                className="w-10 h-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>

        {/* Link */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600">
          <a
            href="/goals"
            className="hover:text-red-600 transition-colors duration-200"
          >
            {t("goals")}
          </a>
          <a
            href="/workinprogress"
            className="hover:text-red-600 transition-colors duration-200"
          >
            {t("blog")}
          </a>
          <a
            href="/contacts"
            className="hover:text-red-600 transition-colors duration-200"
          >
            {t("needHelp")}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p>
            © 2025{" "}
            <a
              href="https://gioarca.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-medium hover:underline"
            >
              Borghi
            </a>{" "}
            | {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
