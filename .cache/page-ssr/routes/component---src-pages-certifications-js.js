exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 757:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(4836);__webpack_unused_export__=true;exports.M=void 0;var _extends2=_interopRequireDefault(__webpack_require__(434));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7071));var _react=_interopRequireDefault(__webpack_require__(8788));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _excluded=["children"];var OutboundLink=/*#__PURE__*/_react.default.forwardRef(function(_ref,ref){var children=_ref.children,props=(0,_objectWithoutPropertiesLoose2.default)(_ref,_excluded);return/*#__PURE__*/_react.default.createElement("a",(0,_extends2.default)({ref:ref},props,{onClick:function onClick(e){if(typeof props.onClick==="function"){props.onClick(e);}var redirect=true;if(e.button!==0||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented){redirect=false;}if(props.target&&props.target.toLowerCase()!=="_self"){redirect=false;}if(window.gtag){window.gtag("event","click",{event_category:"outbound",event_label:props.href,transport_type:redirect?"beacon":"",event_callback:function event_callback(){if(redirect){document.location=props.href;}}});}else{if(redirect){document.location=props.href;}}return false;}}),children);});exports.M=OutboundLink;OutboundLink.propTypes={href:_propTypes.default.string,target:_propTypes.default.string,onClick:_propTypes.default.func};

/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4718);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(757);
const Layout=({children})=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet,{htmlAttributes:{lang:"en"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{charSet:"utf-8",name:"Sandun Sameera"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,"Sandun"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link",{rel:"canonical",href:"https://sandun.xyz/"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",null,"Sandun Sameera")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"navbar"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/"},"Home"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/experience"},"Experience"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/projects"},"Projects"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/certifications"},"Certifications"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/achievements"},"Achievements"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/cv.pdf",target:"_blank",rel:"noopener noreferrer"},"CV"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__/* .OutboundLink */ .M,{href:"/about"},"About")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main",null,children))));};Layout.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 9934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_certifications)
});

// EXTERNAL MODULE: external "/workspaces/sandunsameera.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(8788);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-google-gtag/index.js
var gatsby_plugin_google_gtag = __webpack_require__(757);
;// CONCATENATED MODULE: ./src/data/certifications.js
const certifications=[{name:"AWS Certified Solution Architect - Associate",institution:"AWS",year:"2024",certificateurl:"https://credly.com/badges/32f40085-0541-4489-b91c-3d7542607308/linked_in_profile"},{name:"Google Cloud Platform Fundamentals: Core Infrastructure",institution:"Coursera",year:"2021",certificateurl:"https://www.coursera.org/account/accomplishments/verify/PLPZYXPBE792?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=link"},{name:"Mobile Application Development With Flutter & Dart",institution:"Flutter Community",year:"2019",certificateurl:"https://drive.google.com/file/d/1tR4RSSqvCSXGb6dEY1nCoLN2bQN1Jx6k/view"}];/* harmony default export */ const data_certifications = (certifications);
;// CONCATENATED MODULE: ./src/pages/certifications.js
const CertificationsPage=()=>{return/*#__PURE__*/index_js_default().createElement(layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement("div",{className:"certificationsLayout section-wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"section-title"},/*#__PURE__*/index_js_default().createElement("h1",null,"Certifications")),/*#__PURE__*/index_js_default().createElement("div",{className:"section-items"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("ul",null,data_certifications.map(certificationItem=>/*#__PURE__*/index_js_default().createElement("li",{key:certificationItem.name,className:"certification-wrapper"},/*#__PURE__*/index_js_default().createElement("h3",null,certificationItem.year," | ",certificationItem.name),/*#__PURE__*/index_js_default().createElement("span",{className:"institute-text"},certificationItem.institution," | ",/*#__PURE__*/index_js_default().createElement(gatsby_plugin_google_gtag/* OutboundLink */.M,{className:"link",href:certificationItem.certificateurl,target:"_blank",rel:"noopener noreferrer"},"[Certificate]")))))))));};/* harmony default export */ const pages_certifications = (CertificationsPage);

/***/ }),

/***/ 434:
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

/***/ 7071:
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
//# sourceMappingURL=component---src-pages-certifications-js.js.map