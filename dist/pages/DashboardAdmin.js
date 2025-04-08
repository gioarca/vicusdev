"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _reactI18next = require("react-i18next");
var _useAuthContext2 = require("../hooks/auth/useAuthContext");
var _useManageAuth2 = require("../hooks/auth/useManageAuth");
var _useManageAdmins = require("../hooks/admins/useManageAdmins");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // ------------- PRIMO ROUND ------------------
// import React from "react";
// import { auth } from "../utils/firebase";
// // import { useAuthState } from "react-firebase-hooks/auth";
// import Loader from "../components/Loader";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// function DashboardAdmin() {
//   // const [user, isLoading] = useAuthState(auth);
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const handleSignOut = () => {
//     setTimeout(async () => {
//       auth.signOut().then(() => {
//         navigate("/signout"); // Reindirizza dopo il logout
//       });
//     }, 2000);
//   };
//   // if (isLoading)
//   //   return (
//   //     <div>
//   //       <Loader />
//   //     </div>
//   //   );
//   // if (!user) return <Link to={"/registration"}></Link>;
//   // if (user)
//   return (
//     <div
//       style={{
//         backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
//       }}
//       className="min-h-screen z-0 flex justify-center bg-gradient-to-t"
//     >
//       <div className="flex justify-center flex-1 max-w-screen-xl m-0 z-10 bg-white shadow sm:rounded-lg sm:my-20 sm:mx-96">
//         <div className="lg:w-1/2 sm:mx-10">
//           <div className="mt-40 flex flex-col items-center">
//             <h1 className="text-2xl xl:text-3xl font-extrabold text-center">
//               {t("hello")}{" "}
//               <span role="img" aria-label="hi" className="h-5">
//                 👋
//               </span>
//             </h1>
//             {/* <p className="text-xl">{user.displayName}</p> */}
//           </div>
//           <div className="text-center m-5">
//             <p>{t("what_you_can_do")}</p>
//           </div>
//           <div className="text-center items-center justify-center">
//             <a href={"/borghi"}>
//               <button className="m-5 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 {t("access_borghi")}
//               </button>
//             </a>
//           </div>
//           <div className="text-center items-center justify-center">
//             <a href={"/addborgo"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Aggiungere un borgo
//               </button>
//             </a>
//           </div>
//           <div className="text-center items-center justify-center">
//             <a href={"/borghitoupdate"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Modifica un borgo
//               </button>
//             </a>
//           </div>
//           <div className="text-center items-center justify-center">
//             <a href={"/deleteborgo"}>
//               <button className="m-5 px-8 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                 Cancellare un borgo dalla lista
//               </button>
//             </a>
//           </div>
//           {/* <div className="text-center items-center justify-center">
//               <a href={"/news"}>
//                 <button className="m-5 w-72 py-2 font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none sm:px-10 md:px-32 md:w-auto">
//                   {t("read_news")}
//                 </button>
//               </a>
//             </div> */}
//           <div className="text-center items-center justify-center">
//             <button
//               onClick={handleSignOut}
//               className="m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//             >
//               {t("logout")}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default DashboardAdmin;
// ------------- SECONDO ROUND ------------------
// import React from "react";
// import { auth } from "../utils/firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Loader from "../components/Loader";
// function DashboardAdmin() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const handleSignOut = () => {
//     setTimeout(async () => {
//       auth.signOut().then(() => {
//         navigate("/signout");
//       });
//     }, 2000);
//   };
//   return (
//     <div className="min-h-screen flex justify-center bg-gradient-to-t relative">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-30"
//         style={{
//           backgroundImage: `url(https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=2010&auto=format&fit=crop)`,
//         }}
//       ></div>
//       <div className="flex flex-1 max-w-4xl mx-auto z-10 bg-white shadow-lg rounded-lg p-10 my-20 text-center">
//         <div className="w-full">
//           <h1 className="text-3xl font-extrabold mb-5">
//             {t("hello")}{" "}
//             <span role="img" aria-label="hi">
//               👋
//             </span>
//           </h1>
//           <p className="text-lg mb-8">{t("what_you_can_do")}</p>
//           <div className="grid gap-4 md:grid-cols-2">
//             <Link to="/borghi" className="btn-primary">
//               {t("access_borghi")}
//             </Link>
//             <Link to="/addborgo" className="btn-primary">
//               Aggiungere un borgo
//             </Link>
//             <Link to="/borghitoupdate" className="btn-primary">
//               Modifica un borgo
//             </Link>
//             <Link to="/deleteborgo" className="btn-primary">
//               Cancellare un borgo
//             </Link>
//           </div>
//           <button onClick={handleSignOut} className="btn-danger mt-8">
//             {t("logout")}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default DashboardAdmin;
// import React, { useState, useEffect } from "react";
// import { auth } from "../utils/firebase";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Loader from "../components/Loader";
// function DashboardAdmin() {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const [loading, useState] = useState(false);
//   const handleSignOut = () => {
//     setLoading(true);
//     setTimeout(async () => {
//       auth.signOut().then(() => {
//         navigate("/signout");
//       });
//     }, 2000);
//   };
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {loading && <Loader />}
//       <div className="container mx-auto py-8 px-4">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             {t("hello")}{" "}
//             <span role="img" aria-label="wave">
//               👋
//             </span>
//           </h1>
//           <p className="text-gray-600 mb-4">{t("what_you_can_do")}</p>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             {t("access_borghi")}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <Link
//               to="/admin/add-borgo"
//               className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition duration-200"
//             >
//               <div className="flex items-center">
//                 <div className="mr-4 bg-blue-500 text-white p-3 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-blue-800">
//                     Aggiungere un borgo
//                   </h3>
//                   <p className="text-sm text-blue-600">
//                     Inserisci nuovi borghi nel database
//                   </p>
//                 </div>
//               </div>
//             </Link>
//             <Link
//               to="/admin/edit-borgo"
//               className="block p-4 bg-amber-50 hover:bg-amber-100 rounded-lg transition duration-200"
//             >
//               <div className="flex items-center">
//                 <div className="mr-4 bg-amber-500 text-white p-3 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-amber-800">
//                     Modifica un borgo
//                   </h3>
//                   <p className="text-sm text-amber-600">
//                     Aggiorna i dati dei borghi esistenti
//                   </p>
//                 </div>
//               </div>
//             </Link>
//             <Link
//               to="/admin/delete-borgo"
//               className="block p-4 bg-rose-50 hover:bg-rose-100 rounded-lg transition duration-200"
//             >
//               <div className="flex items-center">
//                 <div className="mr-4 bg-rose-500 text-white p-3 rounded-full">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="font-medium text-rose-800">
//                     Cancellare un borgo
//                   </h3>
//                   <p className="text-sm text-rose-600">
//                     Rimuovi borghi dal database
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//         <button
//           onClick={handleSignOut}
//           className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//             />
//           </svg>
//           {t("logout")}
//         </button>
//       </div>
//     </div>
//   );
// }
// export default DashboardAdmin;
// import { useManageUsers } from "../hooks/users/useManageUsers";
function DashboardAdmin() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useAuthContext = (0, _useAuthContext2.useAuthContext)(),
    user = _useAuthContext.user;
  var _useManageAuth = (0, _useManageAuth2.useManageAuth)(),
    logout = _useManageAuth.logout;
  var _useManageAdmin = (0, _useManageAdmins.useManageAdmin)(),
    deleteAdmin = _useManageAdmin.deleteAdmin;
  // const { deleteAdmin } = useManageAdmin();
  var _useManageAdmin2 = (0, _useManageAdmins.useManageAdmin)(),
    updateAdmin = _useManageAdmin2.updateAdmin;
  var name = (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.displayName) || "Admin";
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1)), url(https://images.unsplash.com/photo-1517792844039-e52afb564132?q=80&w=3082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, loading && /*#__PURE__*/_react["default"].createElement(_Loader["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-lg w-full backdrop-blur-sm bg-white/70 shadow-2xl rounded-3xl overflow-hidden border border-white/50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-8 py-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-4xl font-Bold text-gray-800 mb-3"
  }, t("hello"), ", ", /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-medium"
  }, name), /*#__PURE__*/_react["default"].createElement("span", {
    role: "img",
    "aria-label": "hi",
    className: "ml-2 animate-pulse"
  }, "\uD83D\uDC4B")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 mb-10 italic font-normal"
  }, t("what_you_can_do"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-5"
  }, adminMenuItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(ActionButton, {
      key: index,
      href: item.href,
      onClick: item.onClick === "logout" ? logout : item.onClick === "deleteAdmin" ? deleteAdmin : undefined,
      label: t(item.label),
      icon: item.icon,
      variant: item.variant || "default"
    });
  })))));
}

// Array di configurazione per i pulsanti del menu admin
var adminMenuItems = [{
  label: "access_borghi",
  href: "/borghi",
  icon: "🏛️"
}, {
  label: "add_borgo",
  href: "/addborgo",
  icon: "➕"
}, {
  label: "update_borgo",
  href: "/updateborgo",
  icon: "✏️"
}, {
  label: "delete_borgo",
  href: "/deleteborgo",
  icon: "🗑️"
}, {
  label: "update_profile",
  href: "/admin/update",
  icon: "✏️"
}, {
  label: "delete_profile",
  onClick: "deleteAdmin",
  icon: "🗑️"
}, {
  label: "logout",
  onClick: "logout",
  variant: "outline",
  icon: "🚪"
}];

// Componente riutilizzabile per i pulsanti
function ActionButton(_ref) {
  var href = _ref.href,
    onClick = _ref.onClick,
    label = _ref.label,
    icon = _ref.icon,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "default" : _ref$variant;
  var baseClasses = "group w-full py-4 px-6 rounded-full flex items-center justify-between text-base font-light transition-all duration-500 ease-in-out focus:outline-none transform hover:scale-102 focus:scale-102";
  var variantClasses = variant === "outline" ? "bg-white/70 text-red-800 border border-red-800/30 hover:bg-red-800/10 hover:border-red-800/70" : "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-md hover:shadow-lg hover:from-red-800 hover:to-red-950";
  var classes = "".concat(baseClasses, " ").concat(variantClasses);
  var content = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex-grow text-left pl-2"
  }, label), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
  }, icon));
  if (href) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: href,
      className: "block"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: classes
    }, content));
  }
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: classes
  }, content);
}
var _default = exports["default"] = DashboardAdmin;