"use strict";
(self["webpackChunktodo_list_microverse_webpack"] = self["webpackChunktodo_list_microverse_webpack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: rgb(2, 0, 36);\r\n  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(47, 149, 131, 1) 14%, rgba(204, 204, 212, 1) 49%, rgba(56, 147, 89, 1) 80%, rgba(9, 121, 71, 1) 93%);\r\n}\r\n\r\n.main {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  height: auto;\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(113, 148, 16, 0.25) 0 13px 27px -5px, rgba(151, 211, 10, 0.3) 0 8px 16px -8px;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: gainsboro;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main-title {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-span {\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  color: rgb(226, 152, 14);\r\n  text-transform: capitalize;\r\n  font-size: 30px;\r\n}\r\n\r\n.refresh {\r\n  height: 40%;\r\n  cursor: pointer;\r\n}\r\n\r\n.formAdd {\r\n  width: 100%;\r\n}\r\n\r\n.formAdd input {\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 0 15px;\r\n}\r\n\r\n#todo-input:focus {\r\n  outline: 2px solid #d7d6a5;\r\n  border: 1px solid #d7d6a5;\r\n}\r\n\r\n.list-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-item {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 15px;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.main-edit {\r\n  height: 40px;\r\n  padding: 0 15px;\r\n  align-items: center;\r\n  width: 100%;\r\n  border: 1px solid gray;\r\n  justify-content: space-between;\r\n  background-color: #d7d6a5;\r\n  display: none;\r\n}\r\n\r\n.main-edit.active {\r\n  display: flex;\r\n}\r\n\r\n.main-item.no-active {\r\n  display: none;\r\n}\r\n\r\n.item-input-edit {\r\n  width: 80%;\r\n  height: 100%;\r\n  background-color: #d7d6a5;\r\n  border: none;\r\n}\r\n\r\n.item-input-edit:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.delete-item {\r\n  height: 15px;\r\n  width: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot {\r\n  height: 80%;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot.disabled {\r\n  pointer-events: none;\r\n\r\n  /* add other styles to indicate disabled state */\r\n}\r\n\r\n.item-check {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.item-detail {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  height: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 400;\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: #d7d6a5;\r\n}\r\n\r\n.text-gray {\r\n  background-color: rgb(223, 215, 215);\r\n}\r\n\r\n.descr {\r\n  color: black;\r\n}\r\n\r\n.descr.strike-through {\r\n  text-decoration: line-through;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,kKAAkK;AACpK;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,8FAA8F;AAChG;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,gBAAgB;EAChB,wBAAwB;EACxB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,sBAAsB;EACtB,8BAA8B;EAC9B,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,oBAAoB;;EAEpB,gDAAgD;AAClD;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,YAAY;EACZ,eAAe;EACf,kCAAkC;EAClC,gBAAgB;EAChB,yHAAyH;AAC3H;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;700&display=swap');\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: rgb(2, 0, 36);\r\n  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(47, 149, 131, 1) 14%, rgba(204, 204, 212, 1) 49%, rgba(56, 147, 89, 1) 80%, rgba(9, 121, 71, 1) 93%);\r\n}\r\n\r\n.main {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container {\r\n  height: auto;\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(113, 148, 16, 0.25) 0 13px 27px -5px, rgba(151, 211, 10, 0.3) 0 8px 16px -8px;\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: gainsboro;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main-title {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 700;\r\n  cursor: pointer;\r\n}\r\n\r\n.title-span {\r\n  font-family: 'Dancing Script', cursive;\r\n  font-weight: 700;\r\n  color: rgb(226, 152, 14);\r\n  text-transform: capitalize;\r\n  font-size: 30px;\r\n}\r\n\r\n.refresh {\r\n  height: 40%;\r\n  cursor: pointer;\r\n}\r\n\r\n.formAdd {\r\n  width: 100%;\r\n}\r\n\r\n.formAdd input {\r\n  width: 100%;\r\n  height: 35px;\r\n  padding: 0 15px;\r\n}\r\n\r\n#todo-input:focus {\r\n  outline: 2px solid #d7d6a5;\r\n  border: 1px solid #d7d6a5;\r\n}\r\n\r\n.list-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.main-item {\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 15px;\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\n.main-edit {\r\n  height: 40px;\r\n  padding: 0 15px;\r\n  align-items: center;\r\n  width: 100%;\r\n  border: 1px solid gray;\r\n  justify-content: space-between;\r\n  background-color: #d7d6a5;\r\n  display: none;\r\n}\r\n\r\n.main-edit.active {\r\n  display: flex;\r\n}\r\n\r\n.main-item.no-active {\r\n  display: none;\r\n}\r\n\r\n.item-input-edit {\r\n  width: 80%;\r\n  height: 100%;\r\n  background-color: #d7d6a5;\r\n  border: none;\r\n}\r\n\r\n.item-input-edit:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.delete-item {\r\n  height: 15px;\r\n  width: 15px;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot {\r\n  height: 80%;\r\n  cursor: pointer;\r\n}\r\n\r\n.dot.disabled {\r\n  pointer-events: none;\r\n\r\n  /* add other styles to indicate disabled state */\r\n}\r\n\r\n.item-check {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.item-detail {\r\n  display: flex;\r\n  gap: 5px;\r\n}\r\n\r\n.clear {\r\n  width: 100%;\r\n  height: 35px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 18px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 400;\r\n  box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px, rgba(6, 24, 44, 0.65) 0 4px 6px -1px, rgba(255, 255, 255, 0.08) 0 1px 0 inset;\r\n}\r\n\r\n.clear:hover {\r\n  background-color: #d7d6a5;\r\n}\r\n\r\n.text-gray {\r\n  background-color: rgb(223, 215, 215);\r\n}\r\n\r\n.descr {\r\n  color: black;\r\n}\r\n\r\n.descr.strike-through {\r\n  text-decoration: line-through;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.png */ "./src/delete.png");
/* harmony import */ var _action_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.png */ "./src/action.png");
/* harmony import */ var _refresh_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh.png */ "./src/refresh.png");






const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');
const refreshBtn = document.querySelector('.refresh');

// class

const task = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const updateData = () => {
  let html = '';
  for (let i = 0; i < task.tasks.length; i += 1) {
    if (task.tasks[i].completed === false) {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${task.tasks[i].index}">
              <h5 class="descr">${task.tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="">
          <input type="text" class="item-input-edit" value="${task.tasks[i].description}" id="${task.tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${task.tasks[i].index}">
      </div>
  </div>`;
    } else {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${task.tasks[i].index}" checked>
              <h5 class="descr strike-through">${task.tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="${task.tasks[i].index}" checked>
          <input type="text" class="item-input-edit" value="${task.tasks[i].description}" id="${task.tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${task.tasks[i].index}">
      </div>
  </div>`;
    }
  }
  listContainer.innerHTML = html;
  listContainer.classList.add('text-gray');
  const allData = document.querySelectorAll('.item-check');
  const descriptionAll = document.querySelectorAll('.descr');
  for (let j = 0; j < allData.length; j += 1) {
    // eslint-disable-next-line func-names
    allData[j].addEventListener('change', function () {
      if (allData[j].checked) {
        descriptionAll[j].classList.add('strike-through');
        const btnId = parseInt(this.id, 10);
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = true;
        const updateArray = JSON.stringify(myArray);
        task.updateComplete(updateArray);
      } else {
        descriptionAll[j].classList.remove('strike-through');
        const btnId = parseInt(this.id, 10);
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = false;
        const updateArray = JSON.stringify(myArray);
        task.updateComplete(updateArray);
      }
    });
  }
  const allAction = document.querySelectorAll('.dot');
  const mainEdit = document.querySelectorAll('.main-edit');
  const mainItem = document.querySelectorAll('.main-item');
  allAction.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      mainEdit[index].classList.add('active');
      mainItem[index].classList.add('no-active');
    });
  });
  const itemInputEdit = document.querySelectorAll('.item-input-edit');
  itemInputEdit.forEach((ele) => {
    ele.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        task.editLocal(parseInt(event.target.id, 10), event.target.value);
        updateData();
      }
    });
  });
  const deleteBtn = document.querySelectorAll('.delete-item');
  deleteBtn.forEach((ele) => {
    ele.addEventListener('click', (event) => {
      const singleElementDelete = [];
      singleElementDelete.push(parseInt(event.target.id, 10));
      task.removeData(singleElementDelete);
      updateData();
    });
  });
};
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const myNewArray = task.tasks;
  const newIndexToRemove = [];
  for (let k = 0; k < myNewArray.length; k += 1) {
    if (myNewArray[k].completed === true) {
      const indexRem = parseInt(myNewArray[k].index, 10);
      newIndexToRemove.push(indexRem);
    }
  }
  task.removeData(newIndexToRemove);
  updateData();
});
const addData = (data) => {
  task.addData(data);
  updateData();
};

inputDo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addData(event.target.value);
    event.target.value = '';
  }
});
refreshBtn.addEventListener('click', () => {
  updateData();
});

window.onload = () => updateData();

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class DoTask {
  constructor(description) {
    this.tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
    this.index = null;
    this.completed = false;
    this.description = description;
  }

  addData(description) {
    this.tasks.push({
      index: this.tasks.length,
      description,
      completed: false,
    });
    this.updateLocal();
  }

  updateComplete(updateArray) {
    localStorage.setItem('toDoList', updateArray);
    this.updateLocal();
  }

  removeData(indexRem) {
    for (let i = this.tasks.length - 1; i >= 0; i -= 1) {
      const currentObject = this.tasks[i];
      if (indexRem.includes(currentObject.index)) {
        this.tasks.splice(i, 1);
      }
    }
    for (let s = 0; s < this.tasks.length; s += 1) {
      this.tasks[s].index = s;
    }
    this.updateLocal();
  }

  updateLocal() {
    localStorage.setItem('toDoList', JSON.stringify(this.tasks));
  }

  editLocal(index, description) {
    const objects = this.tasks;
    const objectToUpdate = objects.find((obj) => obj.index === index);
    objectToUpdate.description = description;
    this.updateComplete(objects);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DoTask);

/***/ }),

/***/ "./src/action.png":
/*!************************!*\
  !*** ./src/action.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89c252e1656a028a617a.png";

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81b0204781a7b49f1005.png";

/***/ }),

/***/ "./src/refresh.png":
/*!*************************!*\
  !*** ./src/refresh.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "901cd785558e690cf760.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW1pY3JvdmVyc2Utd2VicGFjay8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1taWNyb3ZlcnNlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1taWNyb3ZlcnNlLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW1pY3JvdmVyc2Utd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW1pY3JvdmVyc2Utd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1taWNyb3ZlcnNlLXdlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LW1pY3JvdmVyc2Utd2VicGFjay8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGFuY2luZytTY3JpcHQ6d2dodEA3MDAmZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwgMCwgMzYsIDEpIDAlLCByZ2JhKDQ3LCAxNDksIDEzMSwgMSkgMTQlLCByZ2JhKDIwNCwgMjA0LCAyMTIsIDEpIDQ5JSwgcmdiYSg1NiwgMTQ3LCA4OSwgMSkgODAlLCByZ2JhKDksIDEyMSwgNzEsIDEpIDkzJSk7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAzNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgxMTMsIDE0OCwgMTYsIDAuMjUpIDAgMTNweCAyN3B4IC01cHgsIHJnYmEoMTUxLCAyMTEsIDEwLCAwLjMpIDAgOHB4IDE2cHggLThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXNwYW4ge1xcclxcbiAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY29sb3I6IHJnYigyMjYsIDE1MiwgMTQpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoIHtcXHJcXG4gIGhlaWdodDogNDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUFkZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1BZGQgaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN0b2RvLWlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjZDdkNmE1O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3ZDZhNTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tYWluLWl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1lZGl0IHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmE1O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZWRpdC5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taXRlbS5uby1hY3RpdmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taW5wdXQtZWRpdCB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDZhNTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taW5wdXQtZWRpdDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgd2lkdGg6IDE1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb3Qge1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kb3QuZGlzYWJsZWQge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICAvKiBhZGQgb3RoZXIgc3R5bGVzIHRvIGluZGljYXRlIGRpc2FibGVkIHN0YXRlICovXFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNoZWNrIHtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDM1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwIDAgMCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwIDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwIDFweCAwIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDZhNTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtZ3JheSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIzLCAyMTUsIDIxNSk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjciB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kZXNjci5zdHJpa2UtdGhyb3VnaCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtLQUFrSztBQUNwSzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7O0VBRXBCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLHlIQUF5SDtBQUMzSDs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDp3Z2h0QDcwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIsIDAsIDM2KTtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyLCAwLCAzNiwgMSkgMCUsIHJnYmEoNDcsIDE0OSwgMTMxLCAxKSAxNCUsIHJnYmEoMjA0LCAyMDQsIDIxMiwgMSkgNDklLCByZ2JhKDU2LCAxNDcsIDg5LCAxKSA4MCUsIHJnYmEoOSwgMTIxLCA3MSwgMSkgOTMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDM1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDExMywgMTQ4LCAxNiwgMC4yNSkgMCAxM3B4IDI3cHggLTVweCwgcmdiYSgxNTEsIDIxMSwgMTAsIDAuMykgMCA4cHggMTZweCAtOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5tYWluLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtc3BhbiB7XFxyXFxuICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBjb2xvcjogcmdiKDIyNiwgMTUyLCAxNCk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZnJlc2gge1xcclxcbiAgaGVpZ2h0OiA0MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtQWRkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybUFkZCBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG8taW5wdXQ6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkICNkN2Q2YTU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDdkNmE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWVkaXQge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2Q2YTU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1lZGl0LmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1pdGVtLm5vLWFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1pbnB1dC1lZGl0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmE1O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1pbnB1dC1lZGl0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDE1cHg7XFxyXFxuICB3aWR0aDogMTVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdCB7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRvdC5kaXNhYmxlZCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gIC8qIGFkZCBvdGhlciBzdHlsZXMgdG8gaW5kaWNhdGUgZGlzYWJsZWQgc3RhdGUgKi9cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY2hlY2sge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDAgMCAwIDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDAgNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDAgMXB4IDAgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5jbGVhcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkNmE1O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1ncmF5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjMsIDIxNSwgMjE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyLnN0cmlrZS10aHJvdWdoIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBEb1Rhc2sgZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCAnLi9kZWxldGUucG5nJztcbmltcG9ydCAnLi9hY3Rpb24ucG5nJztcbmltcG9ydCAnLi9yZWZyZXNoLnBuZyc7XG5cbmNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbmNvbnN0IGlucHV0RG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1pbnB1dCcpO1xuY29uc3QgcmVmcmVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoJyk7XG5cbi8vIGNsYXNzXG5cbmNvbnN0IHRhc2sgPSBuZXcgRG9UYXNrKCk7XG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICBsZXQgaHRtbCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2sudGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodGFzay50YXNrc1tpXS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4taXRlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRldGFpbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpdGVtLWNoZWNrXCIgaWQ9XCIke3Rhc2sudGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyXCI+JHt0YXNrLnRhc2tzW2ldLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2FjdGlvbi5wbmdcIiAgYWx0PVwiXCIgY2xhc3M9XCJkb3RcIiBkaXNhYmxlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZWRpdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94LWVkaXRcIiBpZD1cIlwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXRlbS1pbnB1dC1lZGl0XCIgdmFsdWU9XCIke3Rhc2sudGFza3NbaV0uZGVzY3JpcHRpb259XCIgaWQ9XCIke3Rhc2sudGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2RlbGV0ZS5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImRlbGV0ZS1pdGVtXCIgaWQ9XCIke3Rhc2sudGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWl0ZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVja1wiIGlkPVwiJHt0YXNrLnRhc2tzW2ldLmluZGV4fVwiIGNoZWNrZWQ+XG4gICAgICAgICAgICAgIDxoNSBjbGFzcz1cImRlc2NyIHN0cmlrZS10aHJvdWdoXCI+JHt0YXNrLnRhc2tzW2ldLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2FjdGlvbi5wbmdcIiAgYWx0PVwiXCIgY2xhc3M9XCJkb3RcIiBkaXNhYmxlZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1haW4tZWRpdFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrYm94LWVkaXRcIiBpZD1cIiR7dGFzay50YXNrc1tpXS5pbmRleH1cIiBjaGVja2VkPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXRlbS1pbnB1dC1lZGl0XCIgdmFsdWU9XCIke3Rhc2sudGFza3NbaV0uZGVzY3JpcHRpb259XCIgaWQ9XCIke3Rhc2sudGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIuL2RlbGV0ZS5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImRlbGV0ZS1pdGVtXCIgaWQ9XCIke3Rhc2sudGFza3NbaV0uaW5kZXh9XCI+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgICB9XG4gIH1cbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JheScpO1xuICBjb25zdCBhbGxEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tY2hlY2snKTtcbiAgY29uc3QgZGVzY3JpcHRpb25BbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVzY3InKTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxEYXRhLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbiAgICBhbGxEYXRhW2pdLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChhbGxEYXRhW2pdLmNoZWNrZWQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25BbGxbal0uY2xhc3NMaXN0LmFkZCgnc3RyaWtlLXRocm91Z2gnKTtcbiAgICAgICAgY29uc3QgYnRuSWQgPSBwYXJzZUludCh0aGlzLmlkLCAxMCk7XG4gICAgICAgIGNvbnN0IG15QXJyYXkgPSB0YXNrLnRhc2tzO1xuICAgICAgICBjb25zdCBteU9iamVjdCA9IG15QXJyYXkuZmluZCgob2JqKSA9PiBvYmouaW5kZXggPT09IGJ0bklkKTtcbiAgICAgICAgbXlPYmplY3QuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgdXBkYXRlQXJyYXkgPSBKU09OLnN0cmluZ2lmeShteUFycmF5KTtcbiAgICAgICAgdGFzay51cGRhdGVDb21wbGV0ZSh1cGRhdGVBcnJheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbkFsbFtqXS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2UtdGhyb3VnaCcpO1xuICAgICAgICBjb25zdCBidG5JZCA9IHBhcnNlSW50KHRoaXMuaWQsIDEwKTtcbiAgICAgICAgY29uc3QgbXlBcnJheSA9IHRhc2sudGFza3M7XG4gICAgICAgIGNvbnN0IG15T2JqZWN0ID0gbXlBcnJheS5maW5kKChvYmopID0+IG9iai5pbmRleCA9PT0gYnRuSWQpO1xuICAgICAgICBteU9iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdXBkYXRlQXJyYXkgPSBKU09OLnN0cmluZ2lmeShteUFycmF5KTtcbiAgICAgICAgdGFzay51cGRhdGVDb21wbGV0ZSh1cGRhdGVBcnJheSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgYWxsQWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdCcpO1xuICBjb25zdCBtYWluRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLWVkaXQnKTtcbiAgY29uc3QgbWFpbkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1pdGVtJyk7XG4gIGFsbEFjdGlvbi5mb3JFYWNoKChlbGUsIGluZGV4KSA9PiB7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFpbkVkaXRbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgbWFpbkl0ZW1baW5kZXhdLmNsYXNzTGlzdC5hZGQoJ25vLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgaXRlbUlucHV0RWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtLWlucHV0LWVkaXQnKTtcbiAgaXRlbUlucHV0RWRpdC5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFzay5lZGl0TG9jYWwocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAxMCksIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgIHVwZGF0ZURhdGEoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtaXRlbScpO1xuICBkZWxldGVCdG4uZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzaW5nbGVFbGVtZW50RGVsZXRlID0gW107XG4gICAgICBzaW5nbGVFbGVtZW50RGVsZXRlLnB1c2gocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLCAxMCkpO1xuICAgICAgdGFzay5yZW1vdmVEYXRhKHNpbmdsZUVsZW1lbnREZWxldGUpO1xuICAgICAgdXBkYXRlRGF0YSgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhcicpO1xuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG15TmV3QXJyYXkgPSB0YXNrLnRhc2tzO1xuICBjb25zdCBuZXdJbmRleFRvUmVtb3ZlID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbXlOZXdBcnJheS5sZW5ndGg7IGsgKz0gMSkge1xuICAgIGlmIChteU5ld0FycmF5W2tdLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgaW5kZXhSZW0gPSBwYXJzZUludChteU5ld0FycmF5W2tdLmluZGV4LCAxMCk7XG4gICAgICBuZXdJbmRleFRvUmVtb3ZlLnB1c2goaW5kZXhSZW0pO1xuICAgIH1cbiAgfVxuICB0YXNrLnJlbW92ZURhdGEobmV3SW5kZXhUb1JlbW92ZSk7XG4gIHVwZGF0ZURhdGEoKTtcbn0pO1xuY29uc3QgYWRkRGF0YSA9IChkYXRhKSA9PiB7XG4gIHRhc2suYWRkRGF0YShkYXRhKTtcbiAgdXBkYXRlRGF0YSgpO1xufTtcblxuaW5wdXREby5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGREYXRhKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gJyc7XG4gIH1cbn0pO1xucmVmcmVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdXBkYXRlRGF0YSgpO1xufSk7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB1cGRhdGVEYXRhKCk7IiwiY2xhc3MgRG9UYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSkgfHwgW107XG4gICAgdGhpcy5pbmRleCA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIH1cblxuICBhZGREYXRhKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHtcbiAgICAgIGluZGV4OiB0aGlzLnRhc2tzLmxlbmd0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsKCk7XG4gIH1cblxuICB1cGRhdGVDb21wbGV0ZSh1cGRhdGVBcnJheSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIHVwZGF0ZUFycmF5KTtcbiAgICB0aGlzLnVwZGF0ZUxvY2FsKCk7XG4gIH1cblxuICByZW1vdmVEYXRhKGluZGV4UmVtKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMudGFza3MubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRPYmplY3QgPSB0aGlzLnRhc2tzW2ldO1xuICAgICAgaWYgKGluZGV4UmVtLmluY2x1ZGVzKGN1cnJlbnRPYmplY3QuaW5kZXgpKSB7XG4gICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBzID0gMDsgcyA8IHRoaXMudGFza3MubGVuZ3RoOyBzICs9IDEpIHtcbiAgICAgIHRoaXMudGFza3Nbc10uaW5kZXggPSBzO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxvY2FsKCk7XG4gIH1cblxuICB1cGRhdGVMb2NhbCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9Eb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gIH1cblxuICBlZGl0TG9jYWwoaW5kZXgsIGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3Qgb2JqZWN0cyA9IHRoaXMudGFza3M7XG4gICAgY29uc3Qgb2JqZWN0VG9VcGRhdGUgPSBvYmplY3RzLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBpbmRleCk7XG4gICAgb2JqZWN0VG9VcGRhdGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlKG9iamVjdHMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERvVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=