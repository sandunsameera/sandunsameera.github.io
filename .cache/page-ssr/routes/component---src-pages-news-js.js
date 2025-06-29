exports.id = "component---src-pages-news-js";
exports.ids = ["component---src-pages-news-js"];
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

/***/ "./src/data/news.js":
/*!**************************!*\
  !*** ./src/data/news.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _news_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news_data */ "./src/data/news_data.js");
/* harmony import */ var _orgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orgs */ "./src/data/orgs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-google-gtag */ "./node_modules/gatsby-plugin-google-gtag/index.js");




const news = [{
  date: "APR 11, 2024",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " I got my first certification on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__.OutboundLink, {
    className: "link",
    href: _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].certifications.aws.certificateurl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].certifications.aws.name), ".")
}, {
  date: "Feb 01, 2024",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " I got promoted to Senior Software Engineer ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_3__.OutboundLink, {
    className: "link",
    href: _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].yaala.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, " @", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].yaala.shortname), ".")
}, {
  date: "Jan 01, 2024",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " I switched from Software Engineering Team to Devops Team to explore more about devops world @", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].yaala.anchor, ".")
}, {
  date: "Dec 20, 2023",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " I switched from Software Engineering Team to Devops Team to explore more about devops world @", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].yaala.anchor, ".")
}, {
  date: "Jul 15, 2020",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Completed my Bachelors degree in Information Systems at ", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].ucsc.anchor, " with Second Upper Class.")
}, {
  date: "Feb 03, 2022",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " I Joined with @", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].yaala.anchor, " as a Software Engineer.")
}, {
  date: "APR 12, 2021",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Joined ", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].Scicom.anchor, " as full-time Software Engineer.")
}, {
  date: "APR 12, 2021",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Completed my internship at ", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].Scicom.anchor, " and got opportunity to join them as a full-time Software Engineer.")
}, {
  date: "OCT 15, 2020",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Started my internship at ", _orgs__WEBPACK_IMPORTED_MODULE_1__["default"].Scicom.anchor, " mostly as a Backend-End developers.")
}, {
  date: "OCT 23, 2019",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Became runners up in ideation ", _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].achievements.hacktoberfest.name, " organized by ", _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].achievements.hacktoberfest.organizedBy, ". ")
}, {
  date: "OCT 03, 2019",
  content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, " Winners of ", _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].achievements.eduhack.name, " which is  organized by ", _news_data__WEBPACK_IMPORTED_MODULE_0__["default"].achievements.eduhack.anchorfullname, ". ")
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (news);

/***/ }),

/***/ "./src/data/news_data.js":
/*!*******************************!*\
  !*** ./src/data/news_data.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby-plugin-google-gtag */ "./node_modules/gatsby-plugin-google-gtag/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const news_data = {
  certifications: {
    aws: {
      name: "AWS Certified Solution Architect - Associate",
      institution: "AWS",
      year: "2024",
      certificateurl: "https://credly.com/badges/32f40085-0541-4489-b91c-3d7542607308/linked_in_profile"
    }
  },
  achievements: {
    hacktoberfest: {
      name: "Pre-Hacktoberfest",
      year: "2019",
      organizedBy: "IEEE Student Branch of University of Colombo School of Computing"
    },
    eduhack: {
      name: "Digi-Edu-Hack19",
      year: "2019",
      organizedBy: "OUSL",
      anchorfullname: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_0__.OutboundLink, {
        className: "link",
        href: "https://uplist.lk/event/digi-edu-hack19/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Open University Srilanka"),
      team: "Team Conio"
    }
  },
  teams: {
    conio: {
      name: "Team Conio",
      anchorfullname: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_0__.OutboundLink, {
        className: "link",
        href: "https://github.com/team-conio",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Team Conio")
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (news_data);

/***/ }),

/***/ "./src/data/orgs.js":
/*!**************************!*\
  !*** ./src/data/orgs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-google-gtag */ "./node_modules/gatsby-plugin-google-gtag/index.js");


const orgs = {
  Scicom: {
    fullname: "Scicom Lanka Private Limited",
    shortname: "Scicom Lanka Private Limited",
    url: "#",
    anchor: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__.OutboundLink, {
      className: "link",
      href: "#",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Scicom Lanka PVT")
  },
  ucsc: {
    fullname: "Univesity of Colombo School of Computing",
    shortname: "UCSC",
    url: "https://ucsc.cmb.ac.lk/",
    anchor: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__.OutboundLink, {
      className: "link",
      href: "https://ucsc.cmb.ac.lk/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "UCSC"),
    anchorfullname: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__.OutboundLink, {
      className: "link",
      href: "https://ucsc.cmb.ac.lk/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Univesity of Colombo School of Computing")
  },
  yaala: {
    fullname: "Yaala Labs Private Limited",
    shortname: "Yaala Labs",
    url: "https://yaalalabs.com/",
    anchor: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_google_gtag__WEBPACK_IMPORTED_MODULE_1__.OutboundLink, {
      className: "link",
      href: "https://yaalalabs.com/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Yaala Labs")
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orgs);

/***/ }),

/***/ "./src/pages/news.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/news.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_pages_news_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages/news.scss */ "./src/styles/pages/news.scss");
/* harmony import */ var _styles_pages_news_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_news_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _data_news__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/news */ "./src/data/news.js");




const NewsPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "newsLayout section-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Carrier Timeline")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, _data_news__WEBPACK_IMPORTED_MODULE_3__["default"].map(newsItem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: newsItem.date,
    className: "news-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "date-text"
  }, newsItem.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "content-text"
  }, newsItem.content)))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsPage);

/***/ }),

/***/ "./src/styles/components/layout.scss":
/*!*******************************************!*\
  !*** ./src/styles/components/layout.scss ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/pages/news.scss":
/*!************************************!*\
  !*** ./src/styles/pages/news.scss ***!
  \************************************/
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
//# sourceMappingURL=component---src-pages-news-js.js.map