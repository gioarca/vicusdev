"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useAuthContext2 = require("../hooks/auth/useAuthContext");
var _Loader = _interopRequireDefault(require("../components/Loader"));
var _useManageAdmins = require("../hooks/admins/useManageAdmins");
var _reactI18next = require("react-i18next");
var _reactToastify = require("react-toastify");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../hooks/auth/useAuthContext";
// import Loader from "../components/Loader";
// // import { useManageUsers } from "../hooks/users/useManageUsers";
// import { useManageAdmin } from "../hooks/admins/useManageAdmins";
// import { useTranslation } from "react-i18next";
// import { toast } from "react-toastify";
// const UpdateAdmin = ({ model }) => {
//   const { updateAdmin, getAdminById, isLoading } = useManageAdmin();
//   const { user } = useAuthContext();
//   const { t } = useTranslation();
//   const [imageError, setImageError] = useState("");
//   const [isFormModified, setIsFormModified] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     specialization: "",
//     password: "",
//     confirmPassword: "",
//     profilePicture: "",
//     phoneNumber: "",
//   });
//   // Carica i dati dell'utente quando il componente viene montato
//   useEffect(() => {
//     const loadUserData = async () => {
//       if (user) {
//         // Se abbiamo già dati utente, li usiamo per inizializzare il form
//         setFormData({
//           firstName: user.firstName || "",
//           lastName: user.lastName || "",
//           email: user.email || "",
//           password: "",
//           confirmPassword: "",
//           profilePicture: user.profilePicture || "",
//           phoneNumber: user.phoneNumber || "",
//         });
//         // Opzionale: Recupera dati freschi dal database
//         try {
//           const freshUserData = await getAdminById();
//           if (freshUserData) {
//             setFormData((prev) => ({
//               ...prev,
//               firstName: freshUserData.firstName || "",
//               lastName: freshUserData.lastName || "",
//               email: freshUserData.email || "",
//               specialization: freshUserData.specialization || "",
//               profilePicture: freshUserData.profilePicture || "",
//               phoneNumber: freshUserData.phoneNumber || "",
//               password: "",
//               confirmPassword: "",
//             }));
//           }
//         } catch (error) {
//           console.error("Errore nel caricamento dei dati utente:", error);
//         }
//       }
//     };
//     loadUserData();
//   }, [user, getAdmins]);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     setIsFormModified(true);
//   };
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > 10 * 1024 * 1024) {
//         setImageError("La dimensione del file deve essere inferiore a 10MB.");
//         return;
//       }
//       setIsFormModified(true);
//       const reader = new FileReader();
//       reader.onload = () => {
//         setFormData({
//           ...formData,
//           profilePicture: reader.result,
//         });
//         setImageError("");
//       };
//       reader.onerror = (err) => {
//         console.log("Errore: ", err);
//         setImageError("Errore nella lettura del file.");
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Validazione
//     if (formData.password && formData.password !== formData.confirmPassword) {
//       toast.error("Le password non corrispondono.");
//       return;
//     }
//     // Crea una copia dei dati da inviare
//     const dataToSubmit = { ...formData };
//     try {
//       // Invia la richiesta di aggiornamento
//       const result = await updateAdmin({ formData: dataToSubmit });
//       if (result) {
//         // Reset solo i campi password dopo un aggiornamento riuscito
//         setFormData((prev) => ({
//           ...prev,
//           password: "",
//           confirmPassword: "",
//         }));
//         setIsFormModified(false);
//       }
//     } catch (error) {
//       console.error("Errore nell'aggiornamento del profilo:", error);
//     }
//   };
//   if (!user) {
//     return (
//       <div className="flex items-center justify-center py-20">
//         <div className="text-center">
//           <h3 className="text-2xl mb-4">Sessione non valida</h3>
//           <p>Effettua il login per accedere a questa pagina.</p>
//           {/* Pulsante per tornare al login */}
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div className="px-2 md:px-10 2xl:px-20">
//       {isLoading && (
//         <div className="flex items-center justify-center mx-auto py-10">
//           <Loader />
//         </div>
//       )}
//       {!isLoading && (
//         <>
//           <div className="font-semibold flex items-center mx-auto justify-center mt-3">
//             <h3 className="text-4xl leading-[30px] text-black text-center px-3 mb-3">
//               {t("update_profile")}
//             </h3>
//           </div>
//           <form onSubmit={handleSubmit} className="">
//             <div className="flex justify-center items-center gap-4 mx-auto pt-4">
//               <div className="flex items-center justify-center">
//                 <figure className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full border-2 border-solid border-secondary flex items-center justify-center">
//                   <img
//                     src={formData.profilePicture || "/default-avatar.png"}
//                     alt=""
//                     className="w-full h-full rounded-full object-cover"
//                     onError={(e) => {
//                       e.target.src = "/default-avatar.png";
//                     }}
//                   />
//                 </figure>
//               </div>
//               <div className="flex items-center justify-center">
//                 <label
//                   htmlFor="dropzone-file"
//                   className="flex flex-col items-center justify-center border-2 border-secondary border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100"
//                 >
//                   <div className="flex flex-col items-center justify-center py-5 px-2">
//                     <p className="mb-2 text-sm text-gray-600 text-center">
//                       <span className="font-semibold">Clicca per caricare</span>{" "}
//                       o trascina e rilascia
//                     </p>
//                     <p className="text-xs text-gray-600">
//                       PNG, JPEG o JPG (max. 10MB)
//                     </p>
//                   </div>
//                   <input
//                     id="dropzone-file"
//                     type="file"
//                     className="hidden"
//                     onChange={handleFileChange}
//                     accept=".jpeg, .png, .jpg"
//                   />
//                 </label>
//                 {imageError && (
//                   <p className="text-red-500 text-sm ml-2">{imageError}</p>
//                 )}
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 my-8 gap-8 items-center justify-center mx-auto px-10">
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("name")}
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("surname")}
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   Email
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("phone")}
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("specialization")}
//                   <input
//                     type="text"
//                     name="Specialization"
//                     value={formData.specialization}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("password")}
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//               <div>
//                 <label className="text-xl leading-[20px] font-bold">
//                   {t("confirm_password")}
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     className="text-lg w-full px-4 py-2 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
//                   />
//                 </label>
//               </div>
//             </div>
//             <div className="flex justify-center py-5">
//               <button
//                 type="submit"
//                 disabled={isLoading || !isFormModified}
//                 className={`px-8 py-4 leading-5 transition-colors duration-200 transform rounded-full text-xl font-semibold ${
//                   !isFormModified
//                     ? "bg-[#b6a7a7] cursor-not-allowed"
//                     : "bg-red-800 hover:bg-[#12657f] text-white"
//                 }`}
//               >
//                 {isLoading ? "AGGIORNAMENTO..." : "AGGIORNA"}
//               </button>
//             </div>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };
// export default UpdateAdmin;
// const UpdateAdmin = ({adminId}) => {
//   const { updateAdmin, getAdminById, isLoading } = useManageAdmin();
//   const { user } = useAuthContext();
//   const { t } = useTranslation();

//   const [imageError, setImageError] = useState("");
//   const [isFormModified, setIsFormModified] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     specialization: "",
//     password: "",
//     confirmPassword: "",
//     profilePicture: "",
//     phoneNumber: "",
//   });

//   useEffect(() => {
//     const loadUserData = async () => {
//       if (!user) return;

//       // Inizializzazione form con dati utente già disponibili
//       setFormData({
//         firstName: user.firstName || "",
//         lastName: user.lastName || "",
//         email: user.email || "",
//         password: "",
//         confirmPassword: "",
//         profilePicture: user.profilePicture || "",
//         phoneNumber: user.phoneNumber || "",
//         specialization: user.specialization || "",
//       });

//       // Recupero dati aggiornati dal database
//       try {
//         const freshUserData = await getAdminById();
//         if (freshUserData) {
//           setFormData((prev) => ({
//             ...prev,
//             firstName: freshUserData.firstName || "",
//             lastName: freshUserData.lastName || "",
//             email: freshUserData.email || "",
//             specialization: freshUserData.specialization || "",
//             profilePicture: freshUserData.profilePicture || "",
//             phoneNumber: freshUserData.phoneNumber || "",
//             // Non aggiornare password e confirmPassword
//           }));
//         }
//       } catch (error) {
//         console.error("Errore nel caricamento dei dati utente:", error);
//         toast.error("Impossibile caricare i dati del profilo");
//       }
//     };

//     loadUserData();
//   }, [user, getAdminById]);

var UpdateAdmin = function UpdateAdmin(_ref) {
  var adminId = _ref.adminId;
  // Accetta l'ID come prop
  var _useManageAdmin = (0, _useManageAdmins.useManageAdmin)(),
    updateAdmin = _useManageAdmin.updateAdmin,
    getAdminById = _useManageAdmin.getAdminById,
    isLoading = _useManageAdmin.isLoading;
  var _useAuthContext = (0, _useAuthContext2.useAuthContext)(),
    user = _useAuthContext.user;
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    imageError = _useState2[0],
    setImageError = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFormModified = _useState4[0],
    setIsFormModified = _useState4[1];
  var _useState5 = (0, _react.useState)({
      firstName: "",
      lastName: "",
      email: "",
      specialization: "",
      password: "",
      confirmPassword: "",
      profilePicture: "",
      phoneNumber: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    formData = _useState6[0],
    setFormData = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    dataLoaded = _useState8[0],
    setDataLoaded = _useState8[1]; // Flag per tracciare se i dati sono già stati caricati

  (0, _react.useEffect)(function () {
    // Evita di ricaricare i dati se sono già stati caricati
    if (dataLoaded) return;
    var loadUserData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var id, freshUserData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (user) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              // Inizializzazione form con dati utente già disponibili
              setFormData({
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
                password: "",
                confirmPassword: "",
                profilePicture: user.profilePicture || "",
                phoneNumber: user.phoneNumber || "",
                specialization: user.specialization || ""
              });

              // Recupero dati aggiornati dal database
              _context.prev = 3;
              // Usa l'ID passato come prop oppure l'ID dell'utente corrente
              id = adminId || user.id;
              _context.next = 7;
              return getAdminById(id);
            case 7:
              freshUserData = _context.sent;
              if (freshUserData) {
                setFormData(function (prev) {
                  return _objectSpread(_objectSpread({}, prev), {}, {
                    firstName: freshUserData.firstName || "",
                    lastName: freshUserData.lastName || "",
                    email: freshUserData.email || "",
                    specialization: freshUserData.specialization || "",
                    profilePicture: freshUserData.profilePicture || "",
                    phoneNumber: freshUserData.phoneNumber || ""
                    // Non aggiornare password e confirmPassword
                  });
                });

                // Segnala che i dati sono stati caricati
                setDataLoaded(true);
              }
              _context.next = 15;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              console.error("Errore nel caricamento dei dati utente:", _context.t0);
              _reactToastify.toast.error("Impossibile caricare i dati del profilo");
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[3, 11]]);
      }));
      return function loadUserData() {
        return _ref2.apply(this, arguments);
      };
    }();
    loadUserData();
  }, [user, adminId]); // Rimuovi getAdminById dalle dipendenze e aggiungi adminId

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
    setIsFormModified(true);
  };
  var handleFileChange = function handleFileChange(e) {
    var file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      setImageError("La dimensione del file deve essere inferiore a 10MB.");
      return;
    }
    var reader = new FileReader();
    reader.onload = function () {
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          profilePicture: reader.result
        });
      });
      setImageError("");
      setIsFormModified(true);
    };
    reader.onerror = function (err) {
      console.error("Errore nella lettura del file:", err);
      setImageError("Errore nella lettura del file.");
    };
    reader.readAsDataURL(file);
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();

            // Validazione password
            if (!(formData.password && formData.password !== formData.confirmPassword)) {
              _context2.next = 4;
              break;
            }
            _reactToastify.toast.error("Le password non corrispondono.");
            return _context2.abrupt("return");
          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return updateAdmin({
              formData: formData
            });
          case 7:
            result = _context2.sent;
            if (result) {
              _reactToastify.toast.success("Profilo aggiornato con successo");
              // Reset solo campi password dopo un aggiornamento riuscito
              setFormData(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  password: "",
                  confirmPassword: ""
                });
              });
              setIsFormModified(false);
            }
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](4);
            console.error("Errore nell'aggiornamento del profilo:", _context2.t0);
            _reactToastify.toast.error("Errore durante l'aggiornamento del profilo");
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[4, 11]]);
    }));
    return function handleSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  if (!user) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center justify-center min-h-[60vh]"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-center bg-white p-8 rounded-lg shadow-md"
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "text-2xl font-bold mb-4 text-gray-800"
    }, "Sessione non valida"), /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-600 mb-4"
    }, "Effettua il login per accedere a questa pagina."), /*#__PURE__*/_react["default"].createElement("a", {
      href: "/login",
      className: "px-6 py-2 bg-red-800 text-white rounded-full hover:bg-red-700 transition-colors"
    }, "Vai al Login")));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-4xl mx-auto px-4 py-8"
  }, isLoading ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center py-20"
  }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl md:text-4xl font-bold text-gray-800"
  }, t("update_profile"))), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "bg-white rounded-lg shadow-md p-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-[120px] h-[120px] rounded-full border-2 border-red-800 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: formData.profilePicture || "/default-avatar.png",
    alt: "Immagine profilo",
    className: "w-full h-full object-cover",
    onError: function onError(e) {
      e.target.src = "/default-avatar.png";
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "dropzone-file",
    className: "flex flex-col items-center justify-center w-full max-w-xs border-2 border-red-800 border-dashed rounded-lg bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center justify-center p-4"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-8 h-8 mb-2 text-gray-500",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 16"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
  })), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mb-1 text-sm font-medium text-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold"
  }, "Clicca per caricare"), " ", "o trascina e rilascia"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-gray-500"
  }, "PNG, JPEG o JPG (max. 10MB)")), /*#__PURE__*/_react["default"].createElement("input", {
    id: "dropzone-file",
    type: "file",
    className: "hidden",
    onChange: handleFileChange,
    accept: ".jpeg, .png, .jpg"
  })), imageError && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-red-500 text-sm mt-2"
  }, imageError))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("name"),
    name: "firstName",
    type: "text",
    value: formData.firstName,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("surname"),
    name: "lastName",
    type: "text",
    value: formData.lastName,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(FormField, {
    label: "Email",
    name: "email",
    type: "email",
    value: formData.email,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("phone"),
    name: "phoneNumber",
    type: "text",
    value: formData.phoneNumber,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("specialization"),
    name: "specialization",
    type: "text",
    value: formData.specialization,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("password"),
    name: "password",
    type: "password",
    value: formData.password,
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(FormField, {
    label: t("confirm_password"),
    name: "confirmPassword",
    type: "password",
    value: formData.confirmPassword,
    onChange: handleChange
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center mt-8"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    disabled: isLoading || !isFormModified,
    className: "px-8 py-3 rounded-full text-white font-semibold text-lg transition-all ".concat(!isFormModified ? "bg-gray-400 cursor-not-allowed" : "bg-red-800 hover:bg-red-700 shadow-md hover:shadow-lg")
  }, isLoading ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })), "AGGIORNAMENTO...") : "AGGIORNA")))));
};

// Componente riutilizzabile per i campi del form
var FormField = function FormField(_ref4) {
  var label = _ref4.label,
    name = _ref4.name,
    type = _ref4.type,
    value = _ref4.value,
    onChange = _ref4.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-gray-800 font-semibold mb-2",
    htmlFor: name
  }, label), /*#__PURE__*/_react["default"].createElement("input", {
    type: type,
    id: name,
    name: name,
    value: value,
    onChange: onChange,
    className: "w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 focus:border-red-800 focus:ring-1 focus:ring-red-800 focus:outline-none transition-colors"
  }));
};
var _default = exports["default"] = UpdateAdmin;