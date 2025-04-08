"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactI18next = require("react-i18next");
var _reactRouterDom = require("react-router-dom");
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { Link, useNavigate } from "react-router-dom";
// function AddBorgo() {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const [borgoData, setBorgoData] = useState({
//     name: "",
//     place: "",
//     imgURL: "",
//   });
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setBorgoData({
//       ...borgoData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "https://borghi-backend.onrender.com/api/v1/borghi",
//         {
//           // const response = await fetch("http://localhost:3000/api/v1/borghi/", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(borgoData),
//         }
//       );
//       if (response.ok) {
//         alert("Borgo aggiunto con successo!");
//         setBorgoData({
//           name: "",
//           place: "",
//           imgURL: "",
//           // reset campi...
//         });
//         navigate("/thanks");
//         // } else {
//         //   alert("Errore nell'aggiungere il borgo.");
//       }
//     } catch (error) {
//       console.error("Errore:", error);
//       alert("Errore di connessione al server.");
//     }
//   };
//   return (
//     <div className="flex flex-col text-center">
//       <h1 className="text-center font-bold text-2xl m-14">
//         {t("thank_you_for_support")}
//       </h1>
//       <div className="flex text-center items-center justify-center mt-5 mb-5 sm:mt-20">
//         <img
//           src="https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Borgo"
//         />
//       </div>
//       <div className="m-5">
//         <p className="font-bold">{t("improve_southern_italy")}</p>
//         <p className="text-l text-center m-10">
//           {t("borgo_criteria")}
//           <ul className="flex flex-col text-left justify-center list-disc sm:my-16 sm:mx-48">
//             <li>{t("public_services")}</li>
//             <li>{t("borgo_beauty")}</li>
//             <li>{t("accessibility")}</li>
//             <li>{t("internet_speed")}</li>
//             <li>{t("coworking_space")}</li>
//           </ul>
//         </p>
//         <div className="flex flex-col m-5 text-center">
//           <p>{t("add_borgo")}</p>
//           <div>
//             <form
//               onSubmit={handleSubmit}
//               className="flex flex-col justify-center items-center text-center gap-3 mb-10 bg-grey-200 p-5 rounded-lg m-auto"
//             >
//               <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
//                 Nome del borgo
//                 <input
//                   className="px-12 m-2"
//                   type="text"
//                   name="name"
//                   placeholder="Inserisci il nome intero"
//                   value={borgoData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
//                 Posizione su Google Maps
//                 <input
//                   className="px-12 m-2"
//                   type="text"
//                   name="place"
//                   placeholder="Link di maps"
//                   value={borgoData.location}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <label className="md:w-96 m-2 px-8 py-4 rounded-lg text-sm font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white">
//                 Foto
//                 <input
//                   className="px-12 m-2"
//                   type="text"
//                   name="imgURL"
//                   placeholder="Linka una foto stupenda del borgo"
//                   value={borgoData.photo}
//                   onChange={handleChange}
//                   required
//                 />
//               </label>
//               <button
//                 type="submit"
//                 className="disabled:opacity-75 m-5 px-8 py-2 text-center items-center justify-center font-semibold bg-red-800 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-red-800 transition-all duration-300 ease-in-out focus:shadow-outline focus:outline-none"
//               >
//                 Aggiungi Borgo
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default AddBorgo;
// ---------------------------------------------------------
function AddBorgo() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0, _react.useState)({
      name: "",
      place: "",
      imgURL: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    borgoData = _useState4[0],
    setBorgoData = _useState4[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value,
      type = _e$target.type,
      checked = _e$target.checked;
    setBorgoData(_objectSpread(_objectSpread({}, borgoData), {}, _defineProperty({}, name, type === "checkbox" ? checked : value)));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return fetch(
            // "https://borghi-backend.onrender.com/borghi",
            "http://localhost:3000/borghi", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(borgoData)
            });
          case 5:
            response = _context.sent;
            if (response.ok) {
              alert("Borgo aggiunto con successo!");
              setBorgoData({
                name: "",
                place: "",
                imgURL: ""
              });
              navigate("/thanks");
            }
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error("Errore:", _context.t0);
            alert("Errore di connessione al server.");
          case 13:
            _context.prev = 13;
            setLoading(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9, 13, 16]]);
    }));
    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-screen bg-cover bg-center py-10 px-4 sm:px-6 lg:px-8",
    style: {
      backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8)), url(https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-3xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "backdrop-blur-sm bg-white/80 shadow-2xl rounded-3xl overflow-hidden border border-white/50 px-6 py-8"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-3xl font-bold text-gray-800 mb-6 text-center"
  }, t("thank_you_for_support")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-8 overflow-hidden rounded-2xl shadow-lg"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://images.unsplash.com/photo-1518335935020-cfd6580c1ab4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Borgo",
    className: "w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold text-gray-800 mb-4"
  }, t("improve_southern_italy")), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600 mb-6"
  }, t("borgo_criteria")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-red-50 rounded-2xl p-6 mb-8 border border-red-100"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-2 text-left"
  }, ["public_services", "borgo_beauty", "accessibility", "internet_speed", "coworking_space"].map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "flex items-center text-gray-700"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "mr-2 text-red-800"
    }, "\u2713"), t(item));
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-semibold text-gray-800 mb-4"
  }, t("add_borgo")), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Nome del borgo"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Inserisci il nome intero",
    value: borgoData.name,
    onChange: handleChange,
    required: true,
    className: "w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300  focus:ring-2 focus:ring-red-800/30 focus:border-red-800  transition-all duration-300 bg-white/80 backdrop-blur-sm"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Posizione su Google Maps"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "place",
    placeholder: "Link di maps",
    value: borgoData.place,
    onChange: handleChange,
    required: true,
    className: "w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300  focus:ring-2 focus:ring-red-800/30 focus:border-red-800  transition-all duration-300 bg-white/80 backdrop-blur-sm"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium text-gray-700 mb-1"
  }, "Foto"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "imgURL",
    placeholder: "Linka una foto stupenda del borgo",
    value: borgoData.imgURL,
    onChange: handleChange,
    required: true,
    className: "w-full px-4 py-3 rounded-full text-gray-800 border border-gray-300  focus:ring-2 focus:ring-red-800/30 focus:border-red-800  transition-all duration-300 bg-white/80 backdrop-blur-sm"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    disabled: loading,
    className: "w-full md:w-auto px-8 py-3 font-semibold bg-gradient-to-r from-red-700 to-red-900  text-white rounded-full shadow-md hover:shadow-lg transform hover:scale-102  hover:from-red-800 hover:to-red-950 transition-all duration-300  focus:outline-none disabled:opacity-70 flex items-center justify-center"
  }, loading ? /*#__PURE__*/_react["default"].createElement("span", {
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
  })), "Elaborazione...") : /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "mr-1"
  }, "Aggiungi Borgo"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-1"
  }, "\u2795"))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return navigate(-1);
    },
    className: "text-red-800 hover:text-red-900 font-medium transition-colors duration-300"
  }, "\u2190 Torna indietro"))))));
}
var _default = exports["default"] = AddBorgo;