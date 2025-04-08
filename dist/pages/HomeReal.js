"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _reactI18next = require("react-i18next");
var _BorgoForm = _interopRequireDefault(require("../components/BorgoForm"));
var _scrollToSection = _interopRequireDefault(require("../hooks/utils/scrollToSection"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import BorgoForm from "../components/BorgoForm";
// import scrollToSection from "../hooks/utils/scrollToSection";
// import { useLocation } from "react-router-dom";

// function Home() {
//   const { t } = useTranslation();
//   const location = useLocation();
//   const contactRef = useRef(null);

//   // Effetto per controllare se c'è un hash nell'URL (ad es. /#contact)
//   useEffect(() => {
//     if (location.hash === "#contact" && contactRef.current) {
//       // Usiamo la funzione scrollToSection importata
//       scrollToSection(contactRef);
//     }
//   }, [location]);

//   // Funzione per scorrere manualmente alla sezione contatti
//   const handleScrollToContact = () => {
//     scrollToSection(contactRef);
//   };

//   return (
//     <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01],
//       }}
//     >
//       <div className="m-7 text-center sm:mx-28">
//         <h1 className="font-bold text-2xl m-5">{t("title")}</h1>
//         <p className="text-lg font-medium text-gray-700">{t("tagline")}</p>
//         <p className="mt-3">{t("intro")}</p>

//         {/* Aggiungiamo un pulsante che scorre alla sezione contatti */}
//         <button
//           onClick={handleScrollToContact}
//           className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//         >
//           {t("contactUs")}
//         </button>

//         <a href={"/borghi"}>
//           <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//             {t("callToActionButtonText")}
//           </button>
//         </a>
//       </div>
//       <div className="flex flex-col text-center items-center justify-center">
//         <img
//           src="https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="flex text-center items-center justify-center"
//           alt="Village Image"
//         />
//         <div className="m-5 text-center sm:m-28">
//           <h2 className="text-xl font-semibold mb-3">{t("whatIsVicus")}</h2>
//           <p>{t("description1")}</p>
//           <p>{t("description2")}</p>
//           <p className="mt-2">{t("whyChooseUs")}</p>

//           <ul className="text-left mt-5 space-y-3 list-disc list-inside">
//             <li>{t("points_1")}</li>
//             <li>{t("points_2")}</li>
//             <li>{t("points_3")}</li>
//           </ul>

//           <a href={"/about"}>
//             <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//               {t("footerButtonText")}
//             </button>
//           </a>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1593814416331-7c0cde46482d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
//           alt="Community Images of Villages"
//         />
//         <div className="m-5 sm:m-28">
//           <h2 className="text-lg font-bold mb-3">
//             {t("uniqueSellingPointsTitle")}
//           </h2>
//           <p>{t("uniqueSellingPointsDescription")}</p>
//           <h2 className="text-lg font-bold mt-5 mb-3">
//             {t("uniqueSellingPointsTitle2")}
//           </h2>
//           <p>{t("uniqueSellingPointsDescription2")}</p>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
//           alt="Pietrapertosa"
//         />
//         <div className="m-5 sm:m-28">
//           <h2 className="text-lg font-bold mb-3">
//             {t("callToActionHeadline")}
//           </h2>
//           <p>{t("uniqueSellingPointsDescription")}</p>
//           <h2 className="text-lg font-bold mt-5 mx-12 mb-3">
//             {t("callToActionBody")}
//           </h2>
//           <a href={"/borghi"}>
//             <button className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none">
//               {t("callToActionButtonText")}
//             </button>
//           </a>
//         </div>
//         <img
//           src="https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           className="w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto"
//           alt="Melfi"
//         />
//       </div>
//       <section id="contacts" ref={contactRef} className="mt-10">
//         <BorgoForm />
//       </section>
//     </motion.div>
//   );
// }

// export default Home;

function Home() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var contactRef = (0, _react.useRef)(null);
  var location = (0, _reactRouterDom.useLocation)();

  // Controlla se c'è un hash nell'URL
  (0, _react.useEffect)(function () {
    // Se c'è il hash #contact nell'URL, scorriamo fino a quella sezione
    if (location.hash === "#contact" && contactRef.current) {
      // Aggiungiamo un piccolo timeout per assicurarci che il DOM sia completamente caricato
      setTimeout(function () {
        (0, _scrollToSection["default"])(contactRef);
      }, 100);
    }
  }, [location]);
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "box",
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01]
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-7 text-center sm:mx-28"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "font-bold text-2xl m-5"
  }, t("title")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg font-medium text-gray-700"
  }, t("tagline")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-3"
  }, t("intro")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/borghi"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("callToActionButtonText")))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col text-center items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1694768096854-fe97551cd445?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "flex text-center items-center justify-center",
    alt: "Village Image"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 text-center sm:m-28"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold mb-3"
  }, t("whatIsVicus")), /*#__PURE__*/_react["default"].createElement("p", null, t("description1")), /*#__PURE__*/_react["default"].createElement("p", null, t("description2")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-2"
  }, t("whyChooseUs")), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "text-left mt-5 space-y-3 list-disc list-inside"
  }, /*#__PURE__*/_react["default"].createElement("li", null, t("points_1")), /*#__PURE__*/_react["default"].createElement("li", null, t("points_2")), /*#__PURE__*/_react["default"].createElement("li", null, t("points_3"))), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/about"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("footerButtonText")))), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1593814416331-7c0cde46482d?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto",
    alt: "Community Images of Villages"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 sm:m-28"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-bold mb-3"
  }, t("uniqueSellingPointsTitle")), /*#__PURE__*/_react["default"].createElement("p", null, t("uniqueSellingPointsDescription")), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-bold mt-5 mb-3"
  }, t("uniqueSellingPointsTitle2")), /*#__PURE__*/_react["default"].createElement("p", null, t("uniqueSellingPointsDescription2"))), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1707232400083-7c2fe027fc02?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto",
    alt: "Pietrapertosa"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-5 sm:m-28"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-bold mb-3"
  }, t("callToActionHeadline")), /*#__PURE__*/_react["default"].createElement("p", null, t("uniqueSellingPointsDescription")), /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg font-bold mt-5 mx-12 mb-3"
  }, t("callToActionBody")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/borghi"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
  }, t("callToActionButtonText")))), /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1650521986932-86bbeded3fc2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "w-auto h-auto bg-cover justify-center items-center text-center md:justify-center md:items-center md:w-auto",
    alt: "Melfi"
  })), /*#__PURE__*/_react["default"].createElement("section", {
    id: "contact",
    ref: contactRef,
    className: "mt-10 scroll-mt-20"
  }, /*#__PURE__*/_react["default"].createElement(_BorgoForm["default"], null)));
}
var _default = exports["default"] = Home;