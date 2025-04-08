"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Loader = _interopRequireDefault(require("../../components/Loader"));
var _auth = require("react-firebase-hooks/auth");
var _firebase = require("../../utils/firebase");
var _reactI18next = require("react-i18next");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useState, useEffect, useContext } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Loader from "../../components/Loader";
// // import { PencilIcon } from "@heroicons/react/outline";
// // import { useAuth } from "../context/AuthContext";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../../utils/firebase";
// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// // import {
// //   PaperAirplaneIcon,
// //   AcademicCapIcon,
// //   DeviceTabletIcon,
// //   BuildingOffice2Icon,
// //   DevicePhoneMobileIcon,
// //   HeartIcon,
// //   WifiIcon,
// //   CurrencyDollarIcon,
// //   HomeIcon,
// //   GlobeAmericasIcon,
// // } from "@heroicons/react/20/solid";
// // import { useAuthContext } from "../hooks/auth/useAuthContext";
// function UpdateBorgo() {
//   // const [user] = useAuthState(auth);
//   // const { user } = useContext(AuthContext); // Uso il contesto di autenticazione
//   const navigate = useNavigate();
//   let params = useParams();
//   const [borghi, setBorghi] = useState(
//     JSON.parse(localStorage.getItem(`borghi_${params._id}`)) || []
//   );
//   const [isLoading, setIsLoading] = useState(!borghi.length);
//   const { t } = useTranslation();
//   const baseURL =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://borghi-backend.onrender.com";
//   const borgoFunction = async () => {
//     try {
//       const response = await fetch(`${baseURL}/borghi/${params._id}`);
//       const borgo = await response.json();
//       console.log(borgo);
//     } catch (error) {
//       console.error("Errore durante il fetching del borgo:", error);
//     }
//   };
//   borgoFunction();
//   const [borgoData, setBorgoData] = useState({
//     name: "",
//     place: "",
//     place_description: "",
//     description: "",
//     imgURL: "",
//     internet: "",
//     priceHouses: "",
//     airbnbFilter: "",
//     hospital: "",
//     app: "",
//     school: "",
//     district: "",
//     airport: "",
//     coworking: "",
//     // name: borgo.name,
//     // place: borgo.place,
//     // place_description: borgo.place_description,
//     // description: borgo.description,
//     // imgURL: borgo.imgURL,
//     // internet: borgo.internet,
//     // priceHouses: borgo.priceHouses,
//     // airbnbFilter: borgo.airbnbFilter,
//     // hospital: borgo.hospital,
//     // app: borgo.app,
//     // school: borgo.school,
//     // district: borgo.district,
//     // airport: borgo.airport,
//     // coworking: borgo.coworking,
//   });
//   const handleChange = (e) => {
//     setBorgoData({
//       ...borgoData,
//       [e.target.name]: e.target.value,
//     });
//     setIsFormModified(true);
//   };
//   useEffect(() => {
//     const fetchDetails = async () => {
//       if (!borghi.length) {
//         setIsLoading(true);
//         try {
//           const response = await fetch(`${baseURL}/borghi/${params._id}`);
//           const detailBorgo = await response.json();
//           setBorghi(detailBorgo);
//           localStorage.setItem(
//             `borghi_${params._id}`,
//             JSON.stringify(detailBorgo)
//           ); // Caching dei dati
//         } catch (error) {
//           console.error("Errore durante il fetching dei borghi:", error);
//         } finally {
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchDetails();
//   }, [params._id, borghi.length]);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${baseURL}/borghi/${params._id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(borgoData),
//       });
//       if (response.ok) {
//         alert("Borgo modificato con successo!");
//         setBorgoData({
//           name: "",
//           place: "",
//           imgURL: "",
//           // reset campi...
//         });
//         navigate("/thanks");
//       } else {
//         alert("Errore nella modifica del borgo.");
//       }
//     } catch (error) {
//       console.error("Errore:", error);
//       alert("Errore di connessione al server.");
//     }
//   };
//   if (isLoading) {
//     return (
//       <div>
//         <Loader />
//       </div>
//     );
//   }
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
//       <div className="flex flex-wrap justify-center text-left transition-opacity ease-in delay-150">
//         <div className="overflow-hidden md:shadow-2xl md:m-16 md:mx-24 md:rounded-lg">
//           <img className="w-full" src={borghi.imgURL} alt={borghi.name} />
//           <div key={borghi._id} className="p-4">
//             <div className="flex flex-col m-5 text-center">
//               <p>{t("add_borgo")}</p>
//               <div>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="flex flex-col items-center justify-center"
//                 >
//                   <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Nome del borgo
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="name"
//                       placeholder="Inserisci il nome intero"
//                       value={borgoData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Posizione su Google Maps
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="place"
//                       placeholder="Link di maps"
//                       value={borgoData.location}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <label className="m-2 md:w-96 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
//                     Foto
//                     <input
//                       className="px-12 m-2"
//                       type="text"
//                       name="imgURL"
//                       placeholder="Linka una foto stupenda del borgo"
//                       value={borgoData.photo}
//                       onChange={handleChange}
//                       required
//                     />
//                   </label>
//                   <button
//                     type="submit"
//                     className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//                   >
//                     Modifica Borgo
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// // }
// export default UpdateBorgo;
function UpdateBorgo() {
  var navigate = (0, _reactRouterDom.useNavigate)();
  var params = (0, _reactRouterDom.useParams)();
  var _useState = (0, _react.useState)(JSON.parse(localStorage.getItem("borghi_".concat(params._id))) || []),
    _useState2 = _slicedToArray(_useState, 2),
    borghi = _useState2[0],
    setBorghi = _useState2[1];
  var _useState3 = (0, _react.useState)(!borghi.length),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFormModified = _useState6[0],
    setIsFormModified = _useState6[1];
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://borghi-backend.onrender.com";
  var _useState7 = (0, _react.useState)({
      name: "",
      place: "",
      place_description: "",
      description: "",
      imgURL: "",
      internet: "",
      priceHouses: "",
      airbnbFilter: "",
      hospital: "",
      app: "",
      school: "",
      district: "",
      airport: "",
      coworking: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    borgoData = _useState8[0],
    setBorgoData = _useState8[1];
  var handleChange = function handleChange(e) {
    setBorgoData(_objectSpread(_objectSpread({}, borgoData), {}, _defineProperty({}, e.target.name, e.target.value)));
    setIsFormModified(true);
  };
  (0, _react.useEffect)(function () {
    var fetchDetails = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, detailBorgo;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (borghi.length) {
                _context.next = 20;
                break;
              }
              setIsLoading(true);
              _context.prev = 2;
              _context.next = 5;
              return fetch("".concat(baseURL, "/borghi/").concat(params._id));
            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();
            case 8:
              detailBorgo = _context.sent;
              setBorghi(detailBorgo);

              // Popola i campi del form con i dati ricevuti
              setBorgoData({
                name: detailBorgo.name || "",
                place: detailBorgo.place || "",
                place_description: detailBorgo.place_description || "",
                description: detailBorgo.description || "",
                imgURL: detailBorgo.imgURL || "",
                internet: detailBorgo.internet || "",
                priceHouses: detailBorgo.priceHouses || "",
                airbnbFilter: detailBorgo.airbnbFilter || "",
                hospital: detailBorgo.hospital || "",
                app: detailBorgo.app || "",
                school: detailBorgo.school || "",
                district: detailBorgo.district || "",
                airport: detailBorgo.airport || "",
                coworking: detailBorgo.coworking || ""
              });
              localStorage.setItem("borghi_".concat(params._id), JSON.stringify(detailBorgo));
              _context.next = 17;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](2);
              console.error("Errore durante il fetching dei borghi:", _context.t0);
            case 17:
              _context.prev = 17;
              setIsLoading(false);
              return _context.finish(17);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 14, 17, 20]]);
      }));
      return function fetchDetails() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchDetails();
  }, [params._id, borghi.length, baseURL]);
  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.prev = 1;
            _context2.next = 4;
            return fetch("".concat(baseURL, "/borghi/").concat(params._id), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(borgoData)
            });
          case 4:
            response = _context2.sent;
            if (response.ok) {
              alert("Borgo modificato con successo!");
              navigate("/thanks");
            } else {
              alert("Errore nella modifica del borgo.");
            }
            _context2.next = 12;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.error("Errore:", _context2.t0);
            alert("Errore di connessione al server.");
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 8]]);
    }));
    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex justify-center items-center min-h-screen"
    }, /*#__PURE__*/_react["default"].createElement(_Loader["default"], null));
  }
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "min-h-screen bg-gray-50 py-8",
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded-xl shadow-xl overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative h-64 w-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "w-full h-full object-cover",
    src: borghi.imgURL,
    alt: borghi.name
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute bottom-4 left-6"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl font-bold text-white"
  }, borghi.name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-white/80 mt-1"
  }, t("modificaBorgo"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-6"
  }, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nome del borgo"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    type: "text",
    name: "name",
    placeholder: "Inserisci il nome intero",
    value: borgoData.name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Posizione su Google Maps"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    type: "text",
    name: "place",
    placeholder: "Link di maps",
    value: borgoData.place,
    onChange: handleChange,
    required: true
  }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "URL Immagine"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    type: "text",
    name: "imgURL",
    placeholder: "Linka una foto stupenda del borgo",
    value: borgoData.imgURL,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Descrizione"), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    name: "description",
    rows: "3",
    placeholder: "Descrivi il borgo",
    value: borgoData.description,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid md:grid-cols-2 gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Internet"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    type: "text",
    name: "internet",
    placeholder: "Qualit\xE0 connessione",
    value: borgoData.internet,
    onChange: handleChange
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Prezzo Case"), /*#__PURE__*/_react["default"].createElement("input", {
    className: "w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-700 focus:border-transparent transition duration-200",
    type: "text",
    name: "priceHouses",
    placeholder: "Costo medio abitazioni",
    value: borgoData.priceHouses,
    onChange: handleChange
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-5 border-t border-gray-200"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    disabled: !isFormModified,
    className: "w-full md:w-auto px-6 py-3 bg-red-800 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
  }, isFormModified ? "Salva Modifiche" : "Nessuna Modifica")))))));
}
var _default = exports["default"] = UpdateBorgo;