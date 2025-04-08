"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactI18next = require("react-i18next");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Goals() {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
    t = _useTranslation.t; // Inizializza useTranslation

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center text-left justify-center"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-2xl font-bold m-3"
  }, t("goals_page.title")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap justify-center grid-flow-row-dense grid-cols-2 grid-rows-2 m-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-08.jpg",
    alt: "",
    width: "200",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-3"
  }, t("goals_page.goal_1"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://e4k4c4x9.delivery.rocketcdn.me/it/wp-content/uploads/sites/3/2019/03/SDG-icon-IT-RGB-09.jpg",
    alt: "",
    width: "200",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "m-3"
  }, t("goals_page.goal_2"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-80 rounded-lg overflow-hidden shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c0TqKGHnyrptqP_NRiPY6_eESR-gFP_3Hg&s",
    alt: "Obiettivo 10 - Ridurre le disuguaglianze",
    width: "200",
    className: "flex flex-col items-center text-center m-auto"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "m-3"
  }, /*#__PURE__*/_react["default"].createElement("p", null, t("goals_page.goal_3"))))));
}
var _default = exports["default"] = Goals;