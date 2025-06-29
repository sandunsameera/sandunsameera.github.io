exports.id = "component---src-pages-certifications-jshead";
exports.ids = ["component---src-pages-certifications-jshead"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-google-gtag/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-gtag/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.OutboundLink = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _excluded = ["children"];
var OutboundLink = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    ref: ref
  }, props, {
    onClick: function onClick(e) {
      if (typeof props.onClick === "function") {
        props.onClick(e);
      }
      var redirect = true;
      if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) {
        redirect = false;
      }
      if (props.target && props.target.toLowerCase() !== "_self") {
        redirect = false;
      }
      if (window.gtag) {
        window.gtag("event", "click", {
          event_category: "outbound",
          event_label: props.href,
          transport_type: redirect ? "beacon" : "",
          event_callback: function event_callback() {
            if (redirect) {
              document.location = props.href;
            }
          }
        });
      } else {
        if (redirect) {
          document.location = props.href;
        }
      }
      return false;
    }
  }), children);
});
exports.OutboundLink = OutboundLink;
OutboundLink.propTypes = {
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  onClick: _propTypes.default.func
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/layout.scss */ "./src/styles/components/layout.scss");
/* harmony import */ var _styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_layout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-google-gtag */ "./node_modules/gatsby-plugin-google-gtag/index.js");






const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, {
    htmlAttributes: {
      lang: "en"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8",
    name: "Sandun Sameera"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Sandun"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: "https://sandun.xyz/"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Sandun Sameera")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/experience"
  }, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/projects"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/certifications"
  }, "Certifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/achievements"
  }, "Achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/sandun_sameera_cv.pdf",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "CV"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_4__.OutboundLink, {
    href: "/about"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children))));
};
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/data/certifications.js":
/*!************************************!*\
  !*** ./src/data/certifications.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const certifications = [{
  name: "AWS Certified Solution Architect - Associate",
  institution: "AWS",
  year: "2024",
  certificateurl: "https://credly.com/badges/32f40085-0541-4489-b91c-3d7542607308/linked_in_profile"
}, {
  name: "Google Cloud Platform Fundamentals: Core Infrastructure",
  institution: "Coursera",
  year: "2021",
  certificateurl: "https://www.coursera.org/account/accomplishments/verify/PLPZYXPBE792?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link"
}, {
  name: "Mobile Application Development With Flutter & Dart",
  institution: "Flutter Community",
  year: "2019",
  certificateurl: "https://drive.google.com/file/d/1tR4RSSqvCSXGb6dEY1nCoLN2bQN1Jx6k/view"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (certifications);

/***/ }),

/***/ "./src/pages/certifications.js?export=head":
/*!*************************************************!*\
  !*** ./src/pages/certifications.js?export=head ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_certifications_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/certifications.scss */ "./src/styles/pages/certifications.scss");
/* harmony import */ var _styles_pages_certifications_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_certifications_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-google-gtag */ "./node_modules/gatsby-plugin-google-gtag/index.js");
/* harmony import */ var _data_certifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/certifications */ "./src/data/certifications.js");





const CertificationsPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "certificationsLayout section-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Certifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, _data_certifications__WEBPACK_IMPORTED_MODULE_4__["default"].map(certificationItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: certificationItem.name,
    className: "certification-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, certificationItem.year, " | ", certificationItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "institute-text"
  }, certificationItem.institution, " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__.OutboundLink, {
    className: "link",
    href: certificationItem.certificateurl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "[Certificate]")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CertificationsPage);

/***/ }),

/***/ "./src/styles/components/layout.scss":
/*!*******************************************!*\
  !*** ./src/styles/components/layout.scss ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/pages/certifications.scss":
/*!**********************************************!*\
  !*** ./src/styles/pages/certifications.scss ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-certifications-jshead.js.map