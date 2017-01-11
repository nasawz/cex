/* eslint-disable */
(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-timer-mixin"));
	else if (typeof define === 'function' && define.amd)
		define(["react", "react-timer-mixin"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-timer-mixin")) : factory(root["react"], root["react-timer-mixin"]);
		for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function (__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
				/******/
};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
			/******/
}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
		/******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);


				/***/
},
/* 1 */
/***/ function (module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-api/0.4.7/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try {
					(function () {

						'use strict';

						__webpack_require__(2);

						var Marquee = __webpack_require__(6);

						// style


						module.exports = Marquee;

						/* REACT HOT LOADER */
}).call(this);
				} finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

				/***/
},
/* 2 */
/***/ function (module, exports, __webpack_require__) {

				// style-loader: Adds some css to the DOM by adding a <style> tag

				// load the styles
				var content = __webpack_require__(3);
				if (typeof content === 'string') content = [[module.id, content, '']];
				// add the styles to the DOM
				var update = __webpack_require__(5)(content, {});
				if (content.locals) module.exports = content.locals;
				// Hot Module Replacement
				if (false) {
					// When the styles change, update the <style> tags
					if (!content.locals) {
						module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!./marquee.scss", function () {
							var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/sass-loader/3.2.3/sass-loader/index.js!./marquee.scss");
							if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
							update(newContent);
						});
					}
					// When the module is disposed, remove the <style> tags
					module.hot.dispose(function () { update(); });
				}

				/***/
},
/* 3 */
/***/ function (module, exports, __webpack_require__) {

				exports = module.exports = __webpack_require__(4)();
				// imports


				// module
				exports.push([module.id, ".marquee {\n  border-radius: 20px;\n  height: 100%;\n  margin: 0px auto;\n  overflow-y: hidden;\n  text-align: center;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-property: color, background-color;\n  transition-property: color, background-color; }\n  .marquee div {\n    background: #f58f4e;\n    color: #424140;\n    font-size: 20px;\n    position: relative;\n    height: 100%;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n\n@-webkit-keyframes upMove {\n  0% {\n    top: 0; }\n  100% {\n    top: -100%; } }\n\n@keyframes upMove {\n  0% {\n    top: 0; }\n  100% {\n    top: -100%; } }\n", ""]);

				// exports


				/***/
},
/* 4 */
/***/ function (module, exports) {

				/*
					MIT License http://www.opensource.org/licenses/mit-license.php
					Author Tobias Koppers @sokra
				*/
				// css base code, injected by the css-loader
				module.exports = function () {
					var list = [];

					// return the list of modules as css string
					list.toString = function toString() {
						var result = [];
						for (var i = 0; i < this.length; i++) {
							var item = this[i];
							if (item[2]) {
								result.push("@media " + item[2] + "{" + item[1] + "}");
							} else {
								result.push(item[1]);
							}
						}
						return result.join("");
					};

					// import a list of modules into the list
					list.i = function (modules, mediaQuery) {
						if (typeof modules === "string")
							modules = [[null, modules, ""]];
						var alreadyImportedModules = {};
						for (var i = 0; i < this.length; i++) {
							var id = this[i][0];
							if (typeof id === "number")
								alreadyImportedModules[id] = true;
						}
						for (i = 0; i < modules.length; i++) {
							var item = modules[i];
							// skip already imported module
							// this implementation is not 100% perfect for weird media query combinations
							//  when a module is imported multiple times with different media queries.
							//  I hope this will never occur (Hey this way we have smaller bundles)
							if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
								if (mediaQuery && !item[2]) {
									item[2] = mediaQuery;
								} else if (mediaQuery) {
									item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
								}
								list.push(item);
							}
						}
					};
					return list;
				};


				/***/
},
/* 5 */
/***/ function (module, exports, __webpack_require__) {

				/*
					MIT License http://www.opensource.org/licenses/mit-license.php
					Author Tobias Koppers @sokra
				*/
				var stylesInDom = {},
					memoize = function (fn) {
						var memo;
						return function () {
							if (typeof memo === "undefined") memo = fn.apply(this, arguments);
							return memo;
						};
					},
					isOldIE = memoize(function () {
						return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
					}),
					getHeadElement = memoize(function () {
						return document.head || document.getElementsByTagName("head")[0];
					}),
					singletonElement = null,
					singletonCounter = 0,
					styleElementsInsertedAtTop = [];

				module.exports = function (list, options) {
					if (false) {
						if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
					}

					options = options || {};
					// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
					// tags it will allow on a page
					if (typeof options.singleton === "undefined") options.singleton = isOldIE();

					// By default, add <style> tags to the bottom of <head>.
					if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

					var styles = listToStyles(list);
					addStylesToDom(styles, options);

					return function update(newList) {
						var mayRemove = [];
						for (var i = 0; i < styles.length; i++) {
							var item = styles[i];
							var domStyle = stylesInDom[item.id];
							domStyle.refs--;
							mayRemove.push(domStyle);
						}
						if (newList) {
							var newStyles = listToStyles(newList);
							addStylesToDom(newStyles, options);
						}
						for (var i = 0; i < mayRemove.length; i++) {
							var domStyle = mayRemove[i];
							if (domStyle.refs === 0) {
								for (var j = 0; j < domStyle.parts.length; j++)
									domStyle.parts[j]();
								delete stylesInDom[domStyle.id];
							}
						}
					};
				}

				function addStylesToDom(styles, options) {
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						if (domStyle) {
							domStyle.refs++;
							for (var j = 0; j < domStyle.parts.length; j++) {
								domStyle.parts[j](item.parts[j]);
							}
							for (; j < item.parts.length; j++) {
								domStyle.parts.push(addStyle(item.parts[j], options));
							}
						} else {
							var parts = [];
							for (var j = 0; j < item.parts.length; j++) {
								parts.push(addStyle(item.parts[j], options));
							}
							stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
						}
					}
				}

				function listToStyles(list) {
					var styles = [];
					var newStyles = {};
					for (var i = 0; i < list.length; i++) {
						var item = list[i];
						var id = item[0];
						var css = item[1];
						var media = item[2];
						var sourceMap = item[3];
						var part = { css: css, media: media, sourceMap: sourceMap };
						if (!newStyles[id])
							styles.push(newStyles[id] = { id: id, parts: [part] });
						else
							newStyles[id].parts.push(part);
					}
					return styles;
				}

				function insertStyleElement(options, styleElement) {
					var head = getHeadElement();
					var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
					if (options.insertAt === "top") {
						if (!lastStyleElementInsertedAtTop) {
							head.insertBefore(styleElement, head.firstChild);
						} else if (lastStyleElementInsertedAtTop.nextSibling) {
							head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
						} else {
							head.appendChild(styleElement);
						}
						styleElementsInsertedAtTop.push(styleElement);
					} else if (options.insertAt === "bottom") {
						head.appendChild(styleElement);
					} else {
						throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
					}
				}

				function removeStyleElement(styleElement) {
					styleElement.parentNode.removeChild(styleElement);
					var idx = styleElementsInsertedAtTop.indexOf(styleElement);
					if (idx >= 0) {
						styleElementsInsertedAtTop.splice(idx, 1);
					}
				}

				function createStyleElement(options) {
					var styleElement = document.createElement("style");
					styleElement.type = "text/css";
					insertStyleElement(options, styleElement);
					return styleElement;
				}

				function createLinkElement(options) {
					var linkElement = document.createElement("link");
					linkElement.rel = "stylesheet";
					insertStyleElement(options, linkElement);
					return linkElement;
				}

				function addStyle(obj, options) {
					var styleElement, update, remove;

					if (options.singleton) {
						var styleIndex = singletonCounter++;
						styleElement = singletonElement || (singletonElement = createStyleElement(options));
						update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
						remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
					} else if (obj.sourceMap &&
						typeof URL === "function" &&
						typeof URL.createObjectURL === "function" &&
						typeof URL.revokeObjectURL === "function" &&
						typeof Blob === "function" &&
						typeof btoa === "function") {
						styleElement = createLinkElement(options);
						update = updateLink.bind(null, styleElement);
						remove = function () {
							removeStyleElement(styleElement);
							if (styleElement.href)
								URL.revokeObjectURL(styleElement.href);
						};
					} else {
						styleElement = createStyleElement(options);
						update = applyToTag.bind(null, styleElement);
						remove = function () {
							removeStyleElement(styleElement);
						};
					}

					update(obj);

					return function updateStyle(newObj) {
						if (newObj) {
							if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
								return;
							update(obj = newObj);
						} else {
							remove();
						}
					};
				}

				var replaceText = (function () {
					var textStore = [];

					return function (index, replacement) {
						textStore[index] = replacement;
						return textStore.filter(Boolean).join('\n');
					};
				})();

				function applyToSingletonTag(styleElement, index, remove, obj) {
					var css = remove ? "" : obj.css;

					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = replaceText(index, css);
					} else {
						var cssNode = document.createTextNode(css);
						var childNodes = styleElement.childNodes;
						if (childNodes[index]) styleElement.removeChild(childNodes[index]);
						if (childNodes.length) {
							styleElement.insertBefore(cssNode, childNodes[index]);
						} else {
							styleElement.appendChild(cssNode);
						}
					}
				}

				function applyToTag(styleElement, obj) {
					var css = obj.css;
					var media = obj.media;

					if (media) {
						styleElement.setAttribute("media", media)
					}

					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = css;
					} else {
						while (styleElement.firstChild) {
							styleElement.removeChild(styleElement.firstChild);
						}
						styleElement.appendChild(document.createTextNode(css));
					}
				}

				function updateLink(linkElement, obj) {
					var css = obj.css;
					var sourceMap = obj.sourceMap;

					if (sourceMap) {
						// http://stackoverflow.com/a/26603875
						css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
					}

					var blob = new Blob([css], { type: "text/css" });

					var oldSrc = linkElement.href;

					linkElement.href = URL.createObjectURL(blob);

					if (oldSrc)
						URL.revokeObjectURL(oldSrc);
				}


				/***/
},
/* 6 */
/***/ function (module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-api/0.4.7/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try {
					(function () {

						'use strict';

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _react = __webpack_require__(7);

						var _react2 = _interopRequireDefault(_react);

						var _reactTimerMixin = __webpack_require__(8);

						var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);

						var _ScrollUpable = __webpack_require__(9);

						var _ScrollUpable2 = _interopRequireDefault(_ScrollUpable);

						var _utils = __webpack_require__(10);

						function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

						var Marquee = _react2.default.createClass({
							displayName: 'Marquee',

							mixins: [_reactTimerMixin2.default],
							propTypes: {
								data: _react.PropTypes.array.isRequired,
								fontSize: _react.PropTypes.string,
								backgroundColor: _react.PropTypes.string,
								color: _react.PropTypes.string,
								borderRadius: _react.PropTypes.string,
								animationTime: _react.PropTypes.number,
								animationTimingFunction: _react.PropTypes.string
							},
							getInitialState: function getInitialState() {
								return {
									index: 0
								};
							},
							allData: function allData() {
								return this.props.data.map(function (ele, ind, array) {
									return {
										above: ele.content,
										below: array[(0, _utils.handle_index_next_content)(ind, array.length)].content,
										time: ele.time
									};
								});
							},
							child_style: function child_style() {
								var style = {
									color: this.props.color,
									fontSize: this.props.fontSize,
									backgroundColor: this.props.backgroundColor
								};

								return style;
							},
							parent_style: function parent_style() {
								var style = {
									borderRadius: this.props.borderRadius
								};

								return style;
							},
							scroll_style: function scroll_style() {
								var animationTimeRaw = this.props.animationTime;
								var animationTime = animationTimeRaw ? 'upMove ' + animationTimeRaw + 'ms' : 'upMove 1000ms';

								var style = {
									animation: animationTime,
									animationTimingFunction: this.props.animationTimingFunction || 'ease'
								};

								return style;
							},
							to_next_content: function to_next_content() {
								var animationTime = this.props.animationTime || 1000;

								var currentIndex = this.state.index;
								var index = currentIndex + 1 === this.props.data.length ? 0 : currentIndex + 1;
								this.setTimeout(function () {
									this.setState({
										index: index
									});
								}, animationTime);
							},
							render: function render() {
								var childStyle = this.child_style();
								var parentStyle = this.parent_style();
								var scrollStyle = this.scroll_style();

								return _react2.default.createElement(_ScrollUpable2.default, {
									current: this.allData()[this.state.index],
									to_next_content: this.to_next_content,
									parentStyle: parentStyle,
									childStyle: childStyle,
									scrollStyle: scrollStyle
								});
							}
						});

						exports.default = Marquee;

						/* REACT HOT LOADER */
}).call(this);
				} finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Marquee.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

				/***/
},
/* 7 */
/***/ function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

				/***/
},
/* 8 */
/***/ function (module, exports) {

				module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

				/***/
},
/* 9 */
/***/ function (module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-api/0.4.7/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try {
					(function () {

						'use strict';

						Object.defineProperty(exports, "__esModule", {
							value: true
						});

						var _react = __webpack_require__(7);

						var _react2 = _interopRequireDefault(_react);

						var _reactTimerMixin = __webpack_require__(8);

						var _reactTimerMixin2 = _interopRequireDefault(_reactTimerMixin);

						function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

						var ScrollUpable = _react2.default.createClass({
							displayName: 'ScrollUpable',

							mixins: [_reactTimerMixin2.default],
							propTypes: {
								current: _react.PropTypes.shape({
									//   above: _react.PropTypes.string,
									//   below: _react.PropTypes.string,
									time: _react.PropTypes.number
								}).isRequired,
								to_next_content: _react.PropTypes.func.isRequired,
								parentStyle: _react.PropTypes.object,
								childStyle: _react.PropTypes.object,
								scrollStyle: _react.PropTypes.object
							},
							getInitialState: function getInitialState() {
								return {
									scrollUp: false
								};
							},
							componentWillReceiveProps: function componentWillReceiveProps() {
								this.setState({
									scrollUp: false
								});
							},
							handle_change: function handle_change() {
								// set timeout ,scroll-up and change data

								var current = this.props.current;
								var setTimeout = this.setTimeout;
								var to_next_content = this.props.to_next_content;

								setTimeout(function () {
									this.setState({
										scrollUp: true
									});
									to_next_content();
								}, current.time * 1000);
							},
							render: function render() {
								var current = this.props.current;
								if (!this.state.scrollUp) {
									this.handle_change();
								}
								var childStyle = this.props.childStyle;
								var scrollUpChildStyle = Object.assign({}, childStyle, this.props.scrollStyle);

								if (this.state.scrollUp) {
									return _react2.default.createElement(
										'div',
										{ className: 'marquee', style: this.props.parentStyle },
										_react2.default.createElement(
											'div',
											{ style: scrollUpChildStyle },
											current.above
										),
										_react2.default.createElement(
											'div',
											{ style: scrollUpChildStyle },
											current.below
										)
									);
								}

								return _react2.default.createElement(
									'div',
									{ className: 'marquee', style: this.props.parentStyle },
									_react2.default.createElement(
										'div',
										{ style: childStyle },
										current.above
									),
									_react2.default.createElement(
										'div',
										{ style: childStyle },
										current.below
									)
								);
							}
						});

						exports.default = ScrollUpable;

						/* REACT HOT LOADER */
}).call(this);
				} finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ScrollUpable.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

				/***/
},
/* 10 */
/***/ function (module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-api/0.4.7/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try {
					(function () {

						"use strict";

						Object.defineProperty(exports, "__esModule", {
							value: true
						});
						var handle_index_next_content = exports.handle_index_next_content = function handle_index_next_content(index, len) {
							return index == len - 1 ? 0 : index + 1;
						};

						/* REACT HOT LOADER */
}).call(this);
				} finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/lijie/react-upward-marquee/node_modules/.npminstall/react-hot-loader/1.3.1/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

				/***/
}
/******/])
});
;
