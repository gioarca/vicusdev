// import React, { useState, createRef } from "react";
// import { Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
// import { useAuthContext } from "../hooks/auth/useAuthContext";
// import { useManageAuth } from "../hooks/auth/useManageAuth";
// import scrollToSection from "../hooks/utils/scrollToSection";

// function NavBar({ contactRef }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user } = useAuthContext();
//   const divRef = createRef();

//   // Determina la rotta della dashboard in base al ruolo dell'utente
//   const dashboardRoute =
//     user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

//   const { logout } = useManageAuth();

//   // Funzione per gestire il click sui link di contatto
//   const handleContactClick = (e) => {
//     // Se siamo già nella homepage, usa scrollToSection
//     if (location.pathname === "/") {
//       e.preventDefault();
//       if (contactRef && contactRef.current) {
//         scrollToSection(contactRef);
//         setIsOpen(false); // Chiude il menu mobile dopo il click
//       }
//     }
//     // Altrimenti lascia che il link funzioni normalmente (andrà a /#contact)
//   };

//   return (
//     <nav className="w-full">
//       {/* Navbar per utenti non autenticati */}
//       {!user && (
//         <div className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
//           <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//             {/* Logo e Brand */}
//             <div className="flex items-center">
//               <a href="/" className="flex items-center space-x-3 group">
//                 <img
//                   src="/favicon-96x96.png"
//                   alt="Logo"
//                   className="h-8 w-auto group-hover:scale-110 transition-transform duration-200"
//                 />
//                 <span className="text-xl font-bold tracking-tight text-gray-800 group-hover:text-red-600 transition-colors duration-200">
//                   Vicus
//                 </span>
//               </a>
//             </div>

//             {/* Menu hamburger solo mobile */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden rounded-full p-2 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
//               aria-label="Menu"
//             >
//               {isOpen ? (
//                 <XMarkIcon
//                   className="h-6 w-6 text-red-600"
//                   aria-hidden="true"
//                 />
//               ) : (
//                 <Bars3Icon
//                   className="h-6 w-6 text-gray-700"
//                   aria-hidden="true"
//                 />
//               )}
//             </button>

//             {/* Menu desktop sempre visibile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-8">
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/about"
//               >
//                 Chi Siamo
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/goals"
//               >
//                 Obiettivi
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/borghi"
//               >
//                 Borghi
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/#contact"
//                 onClick={handleContactClick}
//               >
//                 Contatti
//               </a>

//               {/* Separatore verticale */}
//               <span className="h-6 w-px bg-gray-300"></span>

//               {/* Auth buttons con stile distintivo */}
//               <a
//                 href="/login"
//                 className="px-4 py-1.5 text-sm hover:text-red-600 transition-colors font-medium"
//               >
//                 Accedi
//               </a>
//               <a
//                 href="/registration"
//                 className="px-4 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-medium shadow-sm hover:shadow"
//               >
//                 Registrati
//               </a>
//             </div>

//             {/* Menu mobile con transizione */}
//             <Transition
//               show={isOpen}
//               enter="transition duration-200 ease-out"
//               enterFrom="opacity-0 -translate-y-2"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition duration-150 ease-in"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 -translate-y-2"
//             >
//               <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
//                 <div className="flex flex-col space-y-3">
//                   <a
//                     href="/about"
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Chi Siamo
//                   </a>
//                   <a
//                     href="/goals"
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Obiettivi
//                   </a>
//                   <a
//                     href="/borghi"
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Borghi
//                   </a>
//                   <a
//                     href="/#contact"
//                     onClick={handleContactClick}
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Contatti
//                   </a>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <div className="flex flex-col space-y-2">
//                     <a
//                       href="/login"
//                       className="py-2 text-center hover:bg-gray-50 text-gray-700 hover:text-red-600 rounded-md transition-colors"
//                     >
//                       Accedi
//                     </a>
//                     <a
//                       href="/registration"
//                       className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
//                     >
//                       Registrati
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Transition>
//           </div>
//         </div>
//       )}

//       {/* Navbar per utenti autenticati */}
//       {user && user.token && (
//         <div className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
//           <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//             {/* Logo e Brand */}
//             <div className="flex items-center">
//               <a href="/" className="flex items-center space-x-3 group">
//                 <img
//                   src="/favicon-96x96.png"
//                   alt="VICUS Logo"
//                   className="h-8 w-auto group-hover:scale-110 transition-transform duration-200"
//                 />
//                 <span className="text-xl font-bold tracking-tight text-gray-800 group-hover:text-red-600 transition-colors duration-200">
//                   Vicus
//                 </span>
//               </a>
//             </div>

//             {/* Menu desktop - sempre visibile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-8">
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/about"
//               >
//                 Chi Siamo
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/borghi"
//               >
//                 Borghi
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
//                 href="/#contact"
//                 onClick={handleContactClick}
//               >
//                 Contatti
//               </a>

//               {/* User profile and logout */}
//               <div className="flex items-center space-x-4 ml-4">
//                 {/* Dashboard link with user avatar */}
//                 <a
//                   href={dashboardRoute}
//                   className="relative flex items-center group"
//                 >
//                   <div className="relative">
//                     <img
//                       src={user.profilePicture}
//                       alt={user.name}
//                       referrerPolicy="no-referrer"
//                       className="h-9 w-9 rounded-full object-cover border-2 border-transparent group-hover:border-red-600 transition-all shadow-sm"
//                     />
//                     <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//                   </div>
//                   <span className="ml-2 font-medium text-sm text-gray-700 group-hover:text-red-600 transition-colors">
//                     {user.name?.split(" ")[0]}
//                     {user.role === "admin" && (
//                       <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
//                         Admin
//                       </span>
//                     )}
//                   </span>
//                 </a>

//                 <button
//                   onClick={logout}
//                   className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm hover:shadow"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>

//             {/* Mobile controls */}
//             <div className="flex items-center space-x-3 lg:hidden">
//               {/* User avatar for mobile */}
//               <a
//                 href={dashboardRoute}
//                 className="relative p-1 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <div className="relative">
//                   <img
//                     src={user.profilePicture}
//                     alt={user.name}
//                     referrerPolicy="no-referrer"
//                     className="h-8 w-8 rounded-full object-cover border border-gray-200"
//                   />
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//                 </div>
//               </a>

//               {/* Menu hamburger per mobile */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
//                 aria-label="Menu"
//               >
//                 {isOpen ? (
//                   <XMarkIcon
//                     className="h-6 w-6 text-red-600"
//                     aria-hidden="true"
//                   />
//                 ) : (
//                   <Bars3Icon
//                     className="h-6 w-6 text-gray-700"
//                     aria-hidden="true"
//                   />
//                 )}
//               </button>
//             </div>

//             {/* Menu mobile con transizione */}
//             <Transition
//               show={isOpen}
//               enter="transition duration-200 ease-out"
//               enterFrom="opacity-0 -translate-y-2"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition duration-150 ease-in"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 -translate-y-2"
//             >
//               <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
//                 <div className="flex flex-col space-y-3">
//                   {/* User info in mobile menu */}
//                   <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-2">
//                     <img
//                       src={user.profilePicture}
//                       alt={user.name}
//                       referrerPolicy="no-referrer"
//                       className="h-12 w-12 rounded-full object-cover border border-gray-200"
//                     />
//                     <div className="flex flex-col">
//                       <span className="font-medium text-gray-800">
//                         {user.name}
//                         {user.role === "admin" && (
//                           <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
//                             Admin
//                           </span>
//                         )}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {user.email}
//                       </span>
//                     </div>
//                   </div>

//                   <a
//                     href={dashboardRoute}
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors flex items-center"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 mr-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                       />
//                     </svg>
//                     Dashboard
//                   </a>
//                   <a
//                     href="/about"
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Chi Siamo
//                   </a>
//                   <a
//                     href="/borghi"
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Borghi
//                   </a>
//                   <a
//                     href="/#contact"
//                     onClick={handleContactClick}
//                     className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
//                   >
//                     Contatti
//                   </a>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <button
//                     onClick={logout}
//                     className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                       ></path>
//                     </svg>
//                     <span>Logout</span>
//                   </button>
//                 </div>
//               </div>
//             </Transition>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;

// import React, { useState, createRef } from "react";
// import { Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
// // import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useAuthContext } from "../hooks/auth/useAuthContext";
// import { useManageAuth } from "../hooks/auth/useManageAuth";
// import scrollToSection from "../hooks/utils/scrollToSection";

// function NavBar({ contactRef }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const { user, admin } = useAuthContext();
//   const divRef = createRef();
//   const { t, i18n } = useTranslation();

//   // Determina la rotta della dashboard in base al ruolo dell'utente
//   const dashboardRoute =
//     user.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const { logout } = useManageAuth();

//   // Funzione per gestire il click sui link di contatto
//   const handleContactClick = (e) => {
//     // Se siamo già nella homepage, usa scrollToSection
//     if (location.pathname === "/") {
//       e.preventDefault();
//       if (contactRef && contactRef.current) {
//         scrollToSection(contactRef);
//         setIsOpen(false); // Chiude il menu mobile dopo il click
//       }
//     }
//     // Altrimenti lascia che il link funzioni normalmente (andrà a /#contact)
//   };

//   return (
//     <nav className="flex flex-wrap items-center justify-between bg-white mb-24">
//       {/* Navbar senza utente - versione migliorata */}
//       {!user && (
//         <div className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
//           <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//             {/* Logo e Brand */}
//             <div className="flex items-center">
//               <a href="/" className="flex items-center space-x-2">
//                 <img
//                   src="/favicon-96x96.png"
//                   alt="Logo"
//                   className="h-6 w-auto"
//                 />
//                 <span className="text-xl font-semibold">Vicus</span>
//               </a>
//             </div>

//             {/* Menu hamburger solo mobile */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden rounded-full p-2 hover:bg-gray-100 transition-all duration-200"
//               aria-label="Menu"
//             >
//               {isOpen ? (
//                 <XMarkIcon className="h-5 w-5" aria-hidden="true" />
//               ) : (
//                 <Bars3Icon className="h-5 w-5" aria-hidden="true" />
//               )}
//             </button>

//             {/* Menu desktop sempre visibile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-6">
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/about"
//               >
//                 {t("about")}
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/goals"
//               >
//                 {t("goals")}
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/borghi"
//               >
//                 {t("borghi")}
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/#contact"
//                 onClick={handleContactClick}
//               >
//                 {t("contacts")}
//               </a>

//               {/* Separatore verticale */}
//               <span className="h-5 w-px bg-gray-300"></span>

//               {/* Auth buttons con stile distintivo */}
//               <a
//                 href="/login"
//                 className="px-3 py-1 text-sm hover:text-red-600 transition-colors"
//               >
//                 {t("Entra")}
//               </a>
//               <a
//                 href="/registration"
//                 className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
//               >
//                 {t("signUp")}
//               </a>

//               {/* Separatore verticale */}
//               <span className="h-5 w-px bg-gray-300"></span>

//               {/* Language selector */}
//               <div className="relative group">
//                 <button className="flex items-center text-sm hover:text-red-600 transition-colors">
//                   {t("seleziona la lingua")}
//                   <svg
//                     className="w-4 h-4 ml-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                   <button
//                     onClick={() => changeLanguage("it")}
//                     className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                   >
//                     {t("italian")}
//                   </button>
//                   <button
//                     disabled
//                     onClick={() => changeLanguage("en")}
//                     className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                   >
//                     {t("english")}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Menu mobile con transizione */}
//             <Transition
//               show={isOpen}
//               enter="transition duration-200 ease-out"
//               enterFrom="opacity-0 -translate-y-2"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition duration-150 ease-in"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 -translate-y-2"
//             >
//               <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg p-4 lg:hidden">
//                 <div className="flex flex-col space-y-3">
//                   <a href="/about">{t("about")}</a>
//                   <a href="/goals">{t("goals")}</a>
//                   <a href="/borghi">{t("borghi")}</a>
//                   <a href="/#contact" onClick={handleContactClick}>
//                     {t("contacts")}
//                   </a>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <a
//                     href="/login"
//                     className="py-2 text-center hover:text-red-600 transition-colors"
//                   >
//                     {t("Entra")}
//                   </a>
//                   <a
//                     href="/registration"
//                     className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
//                   >
//                     {t("signUp")}
//                   </a>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <div className="flex justify-center space-x-4">
//                     <button
//                       onClick={() => changeLanguage("it")}
//                       className="px-3 py-1 text-sm hover:text-red-600 transition-colors"
//                     >
//                       {t("italian")}
//                     </button>
//                     <button
//                       disabled
//                       onClick={() => changeLanguage("en")}
//                       className="px-3 py-1 text-sm hover:text-red-600 transition-colors"
//                     >
//                       {t("english")}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Transition>
//           </div>
//         </div>
//       )}

//       {/* Navbar con admin autenticato - versione migliorata */}
//       {user && user.token && user.role === "admin" && (
//         <div className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
//           <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//             {/* Logo e Brand */}
//             <div className="flex items-center">
//               <a href="/" className="flex items-center space-x-2">
//                 <img
//                   src="/favicon-96x96.png"
//                   alt="VICUS Logo"
//                   className="h-8 w-auto"
//                 />
//                 <span className="text-xl font-semibold">Vicus</span>
//               </a>
//             </div>

//             {/* Menu desktop - sempre visibile */}
//             <div className="hidden lg:flex lg:items-center lg:space-x-6">
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/about"
//               >
//                 {t("about")}
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/borghi"
//               >
//                 {t("borghi")}
//               </a>
//               <a
//                 className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
//                 href="/#contact"
//                 onClick={handleContactClick}
//               >
//                 {t("contacts")}
//               </a>

//               {/* Separatore verticale */}
//               <span className="h-5 w-px bg-gray-300"></span>

//               {/* Language selector */}
//               <div className="relative group">
//                 <button className="flex items-center text-sm hover:text-red-600 transition-colors">
//                   {t("language")}
//                   <svg
//                     className="w-4 h-4 ml-1"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     ></path>
//                   </svg>
//                 </button>
//                 <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                   <button
//                     onClick={() => changeLanguage("it")}
//                     className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                   >
//                     {t("italian")}
//                   </button>
//                   <button
//                     onClick={() => changeLanguage("en")}
//                     className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
//                   >
//                     {t("english")}
//                   </button>
//                 </div>
//               </div>

//               {/* Separatore verticale */}
//               <span className="h-5 w-px bg-gray-300"></span>

//               {/* User profile and logout */}
//               <div className="flex items-center space-x-3">
//                 {/* Dashboard link with user avatar */}
//                 <a
//                   href={dashboardRoute}
//                   className="relative flex items-center group"
//                 >
//                   <div className="relative">
//                     <img
//                       src={admin.profilePicture}
//                       alt={admin.name}
//                       referrerPolicy="no-referrer"
//                       className="h-8 w-8 rounded-full object-cover border-2 border-transparent group-hover:border-red-600 transition-all"
//                     />
//                     <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//                   </div>
//                   <span className="ml-2 font-medium text-sm text-gray-700 group-hover:text-red-600 transition-colors">
//                     {admin.name?.split(" ")[0]}
//                     {admin?.isAdmin && (
//                       <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
//                         Admin
//                       </span>
//                     )}
//                   </span>
//                 </a>

//                 <button
//                   onClick={logout}
//                   className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                 >
//                   {t("logout")}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile controls */}
//             <div className="flex items-center space-x-2 lg:hidden">
//               {/* User avatar for mobile */}
//               <a
//                 href={"/admin/dashboard"}
//                 className="relative p-1 rounded-full hover:bg-gray-100 transition-colors"
//               >
//                 <div className="relative">
//                   <img
//                     src={user.profilePicture}
//                     alt={user.name}
//                     referrerPolicy="no-referrer"
//                     className="h-8 w-8 rounded-full object-cover"
//                   />
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
//                 </div>
//               </a>

//               {/* Menu hamburger per mobile */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="rounded-full p-2 hover:bg-gray-100 transition-colors"
//                 aria-label="Menu"
//               >
//                 {isOpen ? (
//                   <XMarkIcon className="h-5 w-5" aria-hidden="true" />
//                 ) : (
//                   <Bars3Icon className="h-5 w-5" aria-hidden="true" />
//                 )}
//               </button>
//             </div>

//             {/* Menu mobile con transizione */}
//             <Transition
//               show={isOpen}
//               enter="transition duration-200 ease-out"
//               enterFrom="opacity-0 -translate-y-2"
//               enterTo="opacity-100 translate-y-0"
//               leave="transition duration-150 ease-in"
//               leaveFrom="opacity-100 translate-y-0"
//               leaveTo="opacity-0 -translate-y-2"
//             >
//               <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-lg p-4 lg:hidden">
//                 <div className="flex flex-col space-y-3">
//                   {/* User info in mobile menu */}
//                   <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-2">
//                     <img
//                       src={user.profilePicture}
//                       alt={user.name}
//                       referrerPolicy="no-referrer"
//                       className="h-10 w-10 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col">
//                       <span className="font-medium text-gray-800">
//                         {user.name}
//                         {user?.isAdmin && (
//                           <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
//                             Admin
//                           </span>
//                         )}
//                       </span>
//                       <span className="text-sm text-gray-500">
//                         {user.email}
//                       </span>
//                     </div>
//                   </div>

//                   <a href={dashboardRoute}>
//                     {user && user.role === "admin"
//                       ? t("/admin/dashboard")
//                       : t("/user/dashboard")}
//                   </a>
//                   <a href="/about">{t("about")}</a>
//                   <a href="/borghi">{t("borghi")}</a>
//                   <a href="/#contact" onClick={handleContactClick}>
//                     {t("contacts")}
//                   </a>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <div className="flex justify-between items-center">
//                     <span className="text-sm text-gray-600">
//                       {t("language")}
//                     </span>
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => changeLanguage("it")}
//                         className="px-3 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
//                       >
//                         {t("italian")}
//                       </button>
//                       <button
//                         onClick={() => changeLanguage("en")}
//                         className="px-3 py-1 text-sm rounded hover:bg-gray-100 transition-colors"
//                       >
//                         {t("english")}
//                       </button>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-100 my-2 pt-2"></div>

//                   <button
//                     onClick={logout}
//                     className="py-2 mt-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
//                   >
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                       ></path>
//                     </svg>
//                     <span>{t("logout")}</span>
//                   </button>
//                 </div>
//               </div>
//             </Transition>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;

import React, { useState, createRef } from "react";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useAuthContext } from "../hooks/auth/useAuthContext";
import { useManageAuth } from "../hooks/auth/useManageAuth";
import scrollToSection from "../hooks/utils/scrollToSection";

function NavBar({ contactRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const divRef = createRef();

  // Determina la rotta della dashboard in base al ruolo dell'utente
  const dashboardRoute =
    user?.role === "admin" ? "/admin/dashboard" : "/user/dashboard";

  const { logout } = useManageAuth();

  // Funzione per gestire il click sui link di contatto
  const handleContactClick = (e) => {
    // Se siamo già nella homepage, usa scrollToSection
    if (window.location.pathname === "/") {
      e.preventDefault();
      if (contactRef && contactRef.current) {
        scrollToSection(contactRef);
        setIsOpen(false); // Chiude il menu mobile dopo il click
      }
    }
    // Altrimenti lascia che il link funzioni normalmente (andrà a /#contact)
  };

  return (
    <nav className="w-full mb-24">
      {/* Navbar per utenti non autenticati */}
      {!user && (
        <div className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo e Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3 group">
                <img
                  src="/favicon-96x96.png"
                  alt="Logo"
                  className="h-8 w-auto group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xl font-semibold tracking-tight text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                  Vicus
                </span>
              </a>
            </div>

            {/* Menu hamburger solo mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden rounded-full p-2 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Menu"
            >
              {isOpen ? (
                <XMarkIcon
                  className="h-6 w-6 text-red-600"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="h-6 w-6 text-gray-700"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Menu desktop sempre visibile */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/about"
              >
                Chi Siamo
              </a>
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/goals"
              >
                Obiettivi
              </a>
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/borghi"
              >
                Borghi
              </a>
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/#contact"
                onClick={handleContactClick}
              >
                Contatti
              </a>

              {/* Separatore verticale */}
              <span className="h-6 w-px bg-gray-300"></span>

              {/* Auth buttons con stile distintivo */}
              <a
                href="/login"
                className="px-4 py-1.5 text-sm hover:text-red-600 transition-colors font-medium"
              >
                Accedi
              </a>
              <a
                href="/registration"
                className="px-4 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors font-medium shadow-sm hover:shadow"
              >
                Registrati
              </a>
            </div>

            {/* Menu mobile con transizione */}
            <Transition
              show={isOpen}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
                <div className="flex flex-col space-y-3">
                  <a
                    href="/about"
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Chi Siamo
                  </a>
                  <a
                    href="/goals"
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Obiettivi
                  </a>
                  <a
                    href="/borghi"
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Borghi
                  </a>
                  <a
                    href="/#contact"
                    onClick={handleContactClick}
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Contatti
                  </a>

                  <div className="border-t border-gray-100 my-2 pt-2"></div>

                  <div className="flex flex-col space-y-2">
                    <a
                      href="/login"
                      className="py-2 text-center hover:bg-gray-50 text-gray-700 hover:text-red-600 rounded-md transition-colors"
                    >
                      Accedi
                    </a>
                    <a
                      href="/registration"
                      className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                    >
                      Registrati
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      )}

      {/* Navbar per utenti autenticati */}
      {user && (
        <div className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-md z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo e Brand */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-3 group">
                <img
                  src="/favicon-96x96.png"
                  alt="VICUS Logo"
                  className="h-8 w-auto group-hover:scale-110 transition-transform duration-200"
                />
                <span className="text-xl font-bold tracking-tight text-gray-800 group-hover:text-red-600 transition-colors duration-200">
                  Vicus
                </span>
              </a>
            </div>

            {/* Menu desktop - sempre visibile */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/about"
              >
                Chi Siamo
              </a>
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/borghi"
              >
                Borghi
              </a>
              <a
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200 px-1 py-1 border-b-2 border-transparent hover:border-red-600"
                href="/#contact"
                onClick={handleContactClick}
              >
                Contatti
              </a>

              {/* User profile and logout */}
              <div className="flex items-center space-x-4 ml-4">
                {/* Dashboard link with user avatar */}
                <a
                  href={dashboardRoute}
                  className="relative flex items-center group"
                >
                  <div className="relative">
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                      className="h-9 w-9 rounded-full object-cover border-2 border-transparent group-hover:border-red-600 transition-all shadow-sm"
                    />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <span className="ml-2 font-medium text-sm text-gray-700 group-hover:text-red-600 transition-colors">
                    {user.name?.split(" ")[0]}
                    {user.role === "admin" && (
                      <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                        Admin
                      </span>
                    )}
                  </span>
                </a>

                <button
                  onClick={logout}
                  className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm hover:shadow"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* User avatar for mobile */}
              <a
                href={dashboardRoute}
                className="relative p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="relative">
                  <img
                    src={user.profilePicture}
                    alt={user.name}
                    referrerPolicy="no-referrer"
                    className="h-8 w-8 rounded-full object-cover border border-gray-200"
                  />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>
              </a>

              {/* Menu hamburger per mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Menu"
              >
                {isOpen ? (
                  <XMarkIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="h-6 w-6 text-gray-700"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>

            {/* Menu mobile con transizione */}
            <Transition
              show={isOpen}
              enter="transition duration-200 ease-out"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition duration-150 ease-in"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-2"
            >
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 lg:hidden">
                <div className="flex flex-col space-y-3">
                  {/* User info in mobile menu */}
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-2">
                    <img
                      src={user.profilePicture}
                      alt={user.name}
                      referrerPolicy="no-referrer"
                      className="h-12 w-12 rounded-full object-cover border border-gray-200"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">
                        {user.name}
                        {user.role === "admin" && (
                          <span className="ml-1 text-xs font-bold bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                            Admin
                          </span>
                        )}
                      </span>
                      <span className="text-sm text-gray-500">
                        {user.email}
                      </span>
                    </div>
                  </div>

                  <a
                    href={dashboardRoute}
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </a>
                  <a
                    href="/about"
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Chi Siamo
                  </a>
                  <a
                    href="/borghi"
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Borghi
                  </a>
                  <a
                    href="/#contact"
                    onClick={handleContactClick}
                    className="px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-md hover:text-red-600 transition-colors"
                  >
                    Contatti
                  </a>

                  <div className="border-t border-gray-100 my-2 pt-2"></div>

                  <button
                    onClick={logout}
                    className="py-2 text-center bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
