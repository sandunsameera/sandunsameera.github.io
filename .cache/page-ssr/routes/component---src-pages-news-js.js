exports.id = 3;
exports.ids = [3];
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

/***/ 1410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ data_news)
});

// EXTERNAL MODULE: ./node_modules/gatsby-plugin-google-gtag/index.js
var gatsby_plugin_google_gtag = __webpack_require__(757);
// EXTERNAL MODULE: external "/workspaces/sandunsameera.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(8788);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/data/news_data.js
const news_data={certifications:{aws:{name:"AWS Certified Solution Architect - Associate",institution:"AWS",year:"2024",certificateurl:"https://credly.com/badges/32f40085-0541-4489-b91c-3d7542607308/linked_in_profile"}},achievements:{hacktoberfest:{name:"Pre-Hacktoberfest",year:"2019",organizedBy:"IEEE Student Branch of University of Colombo School of Computing"},eduhack:{name:"Digi-Edu-Hack19",year:"2019",organizedBy:"OUSL",anchorfullname:/*#__PURE__*/index_js_default().createElement(gatsby_plugin_google_gtag/* OutboundLink */.M,{className:"link",href:"https://uplist.lk/event/digi-edu-hack19/",target:"_blank",rel:"noopener noreferrer"},"Open University Srilanka"),team:"Team Conio"}},teams:{conio:{name:"Team Conio",anchorfullname:/*#__PURE__*/index_js_default().createElement(gatsby_plugin_google_gtag/* OutboundLink */.M,{className:"link",href:"https://github.com/team-conio",target:"_blank",rel:"noopener noreferrer"},"Team Conio")}}};/* harmony default export */ const data_news_data = (news_data);
// EXTERNAL MODULE: ./src/data/orgs.js
var orgs = __webpack_require__(2957);
;// CONCATENATED MODULE: ./src/data/news.js
const news=[{date:"APR 11, 2024",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," I got my first certification on ",/*#__PURE__*/index_js_default().createElement(gatsby_plugin_google_gtag/* OutboundLink */.M,{className:"link",href:data_news_data.certifications.aws.certificateurl,target:"_blank",rel:"noopener noreferrer"},data_news_data.certifications.aws.name),".")},{date:"Feb 01, 2024",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," I got promoted to Senior Software Engineer ",/*#__PURE__*/index_js_default().createElement(gatsby_plugin_google_gtag/* OutboundLink */.M,{className:"link",href:orgs/* default.yaala.url */.Z.yaala.url,target:"_blank",rel:"noopener noreferrer"}," @",orgs/* default.yaala.shortname */.Z.yaala.shortname),".")},{date:"Jan 01, 2024",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," I switched from Software Engineering Team to Devops Team to explore more about devops world @",orgs/* default.yaala.anchor */.Z.yaala.anchor,".")},{date:"Dec 20, 2023",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," I switched from Software Engineering Team to Devops Team to explore more about devops world @",orgs/* default.yaala.anchor */.Z.yaala.anchor,".")},{date:"Jul 15, 2020",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Completed my Bachelors degree in Information Systems at ",orgs/* default.ucsc.anchor */.Z.ucsc.anchor," with Second Upper Class.")},{date:"Feb 03, 2022",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," I Joined with @",orgs/* default.yaala.anchor */.Z.yaala.anchor," as a Software Engineer.")},{date:"APR 12, 2021",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Joined ",orgs/* default.Scicom.anchor */.Z.Scicom.anchor," as full-time Software Engineer.")},{date:"APR 12, 2021",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Completed my internship at ",orgs/* default.Scicom.anchor */.Z.Scicom.anchor," and got opportunity to join them as a full-time Software Engineer.")},{date:"OCT 15, 2020",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Started my internship at ",orgs/* default.Scicom.anchor */.Z.Scicom.anchor," mostly as a Backend-End developers.")},{date:"OCT 23, 2019",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Became runners up in ideation ",data_news_data.achievements.hacktoberfest.name," organized by ",data_news_data.achievements.hacktoberfest.organizedBy,". ")},{date:"OCT 03, 2019",content:/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null," Winners of ",data_news_data.achievements.eduhack.name," which is  organized by ",data_news_data.achievements.eduhack.anchorfullname,". ")}];/* harmony default export */ const data_news = (news);

/***/ }),

/***/ 2957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(757);
const orgs={Scicom:{fullname:"Scicom Lanka Private Limited",shortname:"Scicom Lanka Private Limited",url:"#",anchor:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__/* .OutboundLink */ .M,{className:"link",href:"#",target:"_blank",rel:"noopener noreferrer"},"Scicom Lanka PVT")},ucsc:{fullname:"Univesity of Colombo School of Computing",shortname:"UCSC",url:"https://ucsc.cmb.ac.lk/",anchor:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__/* .OutboundLink */ .M,{className:"link",href:"https://ucsc.cmb.ac.lk/",target:"_blank",rel:"noopener noreferrer"},"UCSC"),anchorfullname:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__/* .OutboundLink */ .M,{className:"link",href:"https://ucsc.cmb.ac.lk/",target:"_blank",rel:"noopener noreferrer"},"Univesity of Colombo School of Computing")},yaala:{fullname:"Yaala Labs Private Limited",shortname:"Yaala Labs",url:"https://yaalalabs.com/",anchor:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__/* .OutboundLink */ .M,{className:"link",href:"https://yaalalabs.com/",target:"_blank",rel:"noopener noreferrer"},"Yaala Labs")}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orgs);

/***/ }),

/***/ 9022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8678);
/* harmony import */ var _data_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1410);
const NewsPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"newsLayout section-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section-title"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"Carrier Timeline")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section-items"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",null,_data_news__WEBPACK_IMPORTED_MODULE_2__/* ["default"].map */ .Z.map(newsItem=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:newsItem.date,className:"news-wrapper"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"date-text"},newsItem.date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"content-text"},newsItem.content)))))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);

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
//# sourceMappingURL=component---src-pages-news-js.js.map