webpackJsonp([0],Array(100).concat([
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(132)
/* template */
var __vue_template__ = __webpack_require__(169)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\DashBoard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-420d9737", Component.options)
  } else {
    hotAPI.reload("data-v-420d9737", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(34);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(104)
/* template */
var __vue_template__ = __webpack_require__(105)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\InputBox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33c28f98", Component.options)
  } else {
    hotAPI.reload("data-v-33c28f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    id: {
      type: String,
      default: ''
    },
    errors: {
      type: String,
      default: ''
    },
    value: ''
  },
  data: function data() {
    return {
      labelCSS: 'block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4'
    };
  },

  computed: {
    inputCSS: function inputCSS() {
      var base = 'bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker';
      if (this.errors) base += ' border-red';
      return base;
    }
  },
  methods: {
    updateValue: function updateValue() {
      this.$emit('input', this.$refs.inputValue.value);
    }
  }
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "md:flex md:items-center px-6 py-4" }, [
    _c("div", { staticClass: "md:w-1/3" }, [
      _c(
        "label",
        { class: _vm.labelCSS, attrs: { for: _vm.id } },
        [_vm._t("default")],
        2
      )
    ]),
    _c("div", { staticClass: "md:w-2/3" }, [
      _c("input", {
        ref: "inputValue",
        class: _vm.inputCSS,
        attrs: { id: _vm.id, type: _vm.type, placeholder: _vm.placeholder },
        domProps: { value: _vm.value },
        on: { input: _vm.updateValue }
      }),
      _c("p", { staticClass: "text-red text-xs italic pt-2" }, [
        _vm._v(_vm._s(_vm.errors))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-33c28f98", module.exports)
  }
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(140);
var global = __webpack_require__(4);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(102);
var TO_STRING_TAG = __webpack_require__(101)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(143);
var $export = __webpack_require__(28);
var redefine = __webpack_require__(144);
var hide = __webpack_require__(22);
var has = __webpack_require__(25);
var Iterators = __webpack_require__(102);
var $iterCreate = __webpack_require__(145);
var setToStringTag = __webpack_require__(108);
var getPrototypeOf = __webpack_require__(149);
var ITERATOR = __webpack_require__(101)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(26).f;
var has = __webpack_require__(25);
var TAG = __webpack_require__(101)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(150)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(107)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32);
var TAG = __webpack_require__(101)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getWebsites; });
var getWebsites = {
  methods: {
    getWebsites: function getWebsites() {
      var _this = this;

      axios.get('/api/website').then(function (data) {
        _this.$store.commit('setWebsites', data.data);
      });
    }
  }
};



/***/ }),
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1bf09a8a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-420d9737\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashBoard.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-420d9737\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashBoard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.dashboard-page {\n  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);\n}\n", ""]);

// exports


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AddWebsiteWidget__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AddWebsiteWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_AddWebsiteWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StatsWidget__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_StatsWidget___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_StatsWidget__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WebsiteList__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_WebsiteList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_WebsiteList__);





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddWebsiteWidget: __WEBPACK_IMPORTED_MODULE_0__components_AddWebsiteWidget___default.a,
    StatsWidget: __WEBPACK_IMPORTED_MODULE_1__components_StatsWidget___default.a,
    WebsiteList: __WEBPACK_IMPORTED_MODULE_2__components_WebsiteList___default.a
  },
  data: function data() {
    return {
      details: false
    };
  },

  methods: {
    showDetails: function showDetails(site) {
      this.details = site;
    }
  }
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(134)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(136)
/* template */
var __vue_template__ = __webpack_require__(158)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a64137d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\AddWebsiteWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a64137d6", Component.options)
  } else {
    hotAPI.reload("data-v-a64137d6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1ac22b96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a64137d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddWebsiteWidget.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a64137d6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddWebsiteWidget.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputBox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__InputBox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_mixins__ = __webpack_require__(111);






/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_mixins__["a" /* getWebsites */]],
  name: 'AddWebsiteWidget',
  components: {
    InputBox: __WEBPACK_IMPORTED_MODULE_2__InputBox___default.a
  },
  data: function data() {
    return {
      preValidation: {
        url: '',
        name: ''
      },
      errors: '',

      urlRegex: /^(https?:\/\/)?(.+\..{2,})$/
    };
  },

  computed: {
    sitesForm: function sitesForm() {
      var localurl = this.preValidation.url;
      var m = localurl.match(this.urlRegex) || [];

      var _m = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(m, 3),
          protocol = _m[1],
          site = _m[2];

      protocol = protocol || 'http://';
      return {
        url: protocol + site,
        name: this.preValidation.name
      };
    }
  },
  methods: {
    resetErrors: function resetErrors() {
      this.errors = '';
    },
    AddWebsite: function AddWebsite() {
      var _this = this;

      axios.post('/api/website', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.sitesForm)).then(function (data) {
        _this.getWebsites();
        preValidation = {
          url: '',
          name: ''
        };
      }).catch(function (error) {
        console.log(error);
        _this.errors = 'Uh Oh! This doesnt seem valid';
      });
    }
  }
});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(138);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(152);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(139), __esModule: true };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(109);
module.exports = __webpack_require__(151);


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(141);
var step = __webpack_require__(142);
var Iterators = __webpack_require__(102);
var toIObject = __webpack_require__(12);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(107)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(146);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(108);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(101)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(24);
var dPs = __webpack_require__(147);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(29)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(148).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(26);
var anObject = __webpack_require__(24);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(25);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(27)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(13);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(110);
var ITERATOR = __webpack_require__(101)('iterator');
var Iterators = __webpack_require__(102);
module.exports = __webpack_require__(11).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(109);
module.exports = __webpack_require__(154);


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var get = __webpack_require__(155);
module.exports = __webpack_require__(11).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(110);
var ITERATOR = __webpack_require__(101)('iterator');
var Iterators = __webpack_require__(102);
module.exports = __webpack_require__(11).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 156 */,
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-white flex-col md:max-w-xs rounded overflow-hidden shadow-lg"
    },
    [
      _vm._m(0),
      _c(
        "form",
        {
          staticClass: "flex flex-col",
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.AddWebsite($event)
            }
          }
        },
        [
          _c(
            "input-box",
            {
              attrs: {
                placeholder: "example.com",
                type: "text",
                id: "website",
                errors: _vm.errors
              },
              on: { input: _vm.resetErrors },
              model: {
                value: _vm.preValidation.url,
                callback: function($$v) {
                  _vm.$set(_vm.preValidation, "url", $$v)
                },
                expression: "preValidation.url"
              }
            },
            [_vm._v("URL")]
          ),
          _c(
            "input-box",
            {
              attrs: {
                placeholder: "My Awesome Site",
                type: "text",
                id: "website"
              },
              model: {
                value: _vm.preValidation.name,
                callback: function($$v) {
                  _vm.$set(_vm.preValidation, "name", $$v)
                },
                expression: "preValidation.name"
              }
            },
            [_vm._v("Name (optional)")]
          ),
          _c(
            "button",
            {
              staticClass:
                "bg-blue hover:bg-blue-dark text-white font-bold mb-6 mx-6 my-4 py-2  px-4 rounded-full float-right",
              attrs: { type: "submit" }
            },
            [_vm._v("Add Website")]
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "px-6 py-4 text-center border-b bg-grey" },
      [_c("h2", [_vm._v("Quick Add Site")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a64137d6", module.exports)
  }
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(160)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(162)
/* template */
var __vue_template__ = __webpack_require__(163)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9a9606c8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\StatsWidget.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9a9606c8", Component.options)
  } else {
    hotAPI.reload("data-v-9a9606c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5da686c6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a9606c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StatsWidget.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9a9606c8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StatsWidget.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    details: {
      type: Object,
      default: {}
    }
  },
  computed: {
    latency: function latency() {
      var latency = {
        fastest: this.details.uptime_all[0].latency,
        slowest: this.details.uptime_all[0].latency,
        average: 0
      };

      for (var i = 0; i < this.details.uptime_all.length; ++i) {
        var cur = this.details.uptime_all[i];
        latency.average += cur.latency;
        latency.fastest = latency.fastest < cur.latency ? latency.fastest : cur.latency;
        latency.slowest = latency.slowest > cur.latency ? latency.slowest : cur.latency;
      }

      latency.average /= this.details.uptime_all.length;

      return latency;
    },
    loadSpeed: function loadSpeed() {
      var loadSpeed = {
        fastest: this.details.uptime_all[0].loadSpeed,
        slowest: this.details.uptime_all[0].loadSpeed,
        average: 0
      };

      for (var i = 0; i < this.details.uptime_all.length; ++i) {
        var cur = this.details.uptime_all[i];

        loadSpeed.average += +cur.loadSpeed;
        loadSpeed.fastest = loadSpeed.fastest < cur.loadSpeed ? loadSpeed.fastest : cur.loadSpeed;
        loadSpeed.slowest = loadSpeed.slowest > cur.loadSpeed ? loadSpeed.slowest : cur.loadSpeed;
      }
      loadSpeed.average /= this.details.uptime_all.length;

      return loadSpeed;
    }
  },
  filters: {
    round: function round(val) {
      return Math.round(val);
    },
    fourDecimal: function fourDecimal(val) {
      return parseFloat(val).toFixed(4);
    }
  }
});

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "bg-white flex-col rounded overflow-hidden shadow-lg" },
    [
      _vm._m(0),
      _c("div", { staticClass: "flex flex-col px-6 py-4" }, [
        _c("h1", [_vm._v(_vm._s(_vm.details.name || _vm.details.url))]),
        _c("h2", [_vm._v(_vm._s(_vm.details.url))]),
        _c("h3", [_vm._v(_vm._s(_vm.details.ipv4))]),
        _c("hr"),
        _vm.details.ssl
          ? _c("div", [
              _c("p", [
                _vm._v(_vm._s(_vm.details.ssl_latest.days_left) + " Days Left")
              ]),
              _c("p", [_vm._v(_vm._s(_vm.details.ssl_latest.issuer))]),
              _c("p", [
                _vm._v(
                  "Last Updated: " + _vm._s(_vm.details.ssl_latest.updated_at)
                )
              ])
            ])
          : _vm._e(),
        _c("hr"),
        _c("div", [
          _c("p", [
            _vm._v(
              "Fastest Latency: " +
                _vm._s(_vm._f("round")(_vm.latency.fastest)) +
                " ms"
            )
          ]),
          _c("p", [
            _vm._v(
              "Slowest Latency: " +
                _vm._s(_vm._f("round")(_vm.latency.slowest)) +
                " ms"
            )
          ]),
          _c("p", [
            _vm._v(
              "Average Latency: " +
                _vm._s(_vm._f("round")(_vm.latency.average)) +
                " ms"
            )
          ])
        ]),
        _c("hr"),
        _c("div", [
          _c("p", [
            _vm._v(
              "Fastest Pageload speed: " +
                _vm._s(_vm._f("fourDecimal")(_vm.loadSpeed.fastest)) +
                " s"
            )
          ]),
          _c("p", [
            _vm._v(
              "Slowest Pageload speed: " +
                _vm._s(_vm._f("fourDecimal")(_vm.loadSpeed.slowest)) +
                " s"
            )
          ]),
          _c("p", [
            _vm._v(
              "Average Pageload speed: " +
                _vm._s(_vm._f("fourDecimal")(_vm.loadSpeed.average)) +
                " s"
            )
          ])
        ]),
        _c("hr"),
        _vm._m(1),
        _c(
          "button",
          {
            staticClass:
              "bg-blue hover:bg-blue-dark text-white font-bold mb-6 mx-6 my-4 py-2  px-4 rounded-full float-right opacity-50 cursor-not-allowed",
            attrs: { type: "submit" }
          },
          [_vm._v("More Stats...")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "px-6 py-4 text-center border-b bg-grey" },
      [_c("h2", [_vm._v("Stats")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("p", [_vm._v("Uptime: (Coming Soon!)")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9a9606c8", module.exports)
  }
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(167)
/* template */
var __vue_template__ = __webpack_require__(168)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13da69b2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\WebsiteList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13da69b2", Component.options)
  } else {
    hotAPI.reload("data-v-13da69b2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(166);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("eaf23bc4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-13da69b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WebsiteList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-13da69b2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./WebsiteList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_mixins__ = __webpack_require__(111);



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_mixins__["a" /* getWebsites */]],
  data: function data() {
    return {
      sortBy: {
        column: '',
        order: 0
      },
      classes: {
        name: 'w-2/3 md:w-1/4 flex items-center px-2',
        url: 'md:w-2/5 hidden md:flex items-center px-2',
        uptime: 'w-1/3 md:w-1/5 hidden sm:flex items-center px-2',
        btn: 'w-1/3 md:w-1/4 flex items-center px-2'
      }
    };
  },
  mounted: function mounted() {
    this.getWebsites();
  },

  methods: {
    deleteSite: function deleteSite(id) {
      var _this = this;

      axios.delete('/api/website/' + id).then(function (data) {
        console.log('Website Deleted');
        _this.getWebsites();
      });
    },
    sortBySSL: function sortBySSL() {
      var _this2 = this;

      if (this.sortBy.column === 'SSL') {
        this.sortBy.order = ++this.sortBy.order % 2;
      } else {
        this.sortBy = {
          column: 'SSL',
          order: 0
        };
      }
      this.websites = this.websites.sort(function (a, b) {
        return _this2.sortBy.order === 0 ? a.ssl_latest.days_left - b.ssl_latest.days_left : b.ssl_latest.days_left - a.ssl_latest.days_left;
      });
    },
    sortByURL: function sortByURL() {
      var _this3 = this;

      if (this.sortBy.column === 'URL') {
        this.sortBy.order = ++this.sortBy.order % 2;
      } else {
        this.sortBy = {
          column: 'URL',
          order: 0
        };
      }
      this.websites = this.websites.sort(function (a, b) {
        var nameA = a.url.toLowerCase();
        var nameB = b.url.toLowerCase();
        return _this3.sortBy.order === 0 ? nameA > nameB ? 1 : nameA < nameB ? -1 : 0 : nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      });
    },
    sortByName: function sortByName() {
      var _this4 = this;

      if (this.sortBy.column === 'Name') {
        this.sortBy.order = ++this.sortBy.order % 2;
      } else {
        this.sortBy = {
          column: 'Name',
          order: 0
        };
      }
      this.websites = this.websites.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return _this4.sortBy.order === 0 ? nameA > nameB ? 1 : nameA < nameB ? -1 : 0 : nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
      });
    },
    selectSite: function selectSite(site) {
      this.$emit('showDetails', site);
    }
  }
});

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-white container mx-auto rounded overflow-hidden shadow-lg"
    },
    [
      _vm._m(0),
      _c(
        "div",
        { staticClass: "flex flex-col px-1 md:px-6 py-4" },
        [
          _c(
            "div",
            { staticClass: "flex flex-row border-b border-t md:px-2 py-2" },
            [
              _c("div", { class: _vm.classes.btn }, [
                _c("strong", [_vm._v("Select")])
              ]),
              _c(
                "div",
                {
                  staticClass: "cursor-pointer",
                  class: _vm.classes.name,
                  on: { click: _vm.sortByName }
                },
                [_c("strong", [_vm._v("Name")])]
              ),
              _c(
                "div",
                {
                  staticClass: "cursor-pointer",
                  class: _vm.classes.url,
                  on: { click: _vm.sortByURL }
                },
                [_c("strong", [_vm._v("URL")])]
              ),
              _c(
                "div",
                {
                  staticClass: "cursor-pointer",
                  class: _vm.classes.uptime,
                  on: { click: _vm.sortBySSL }
                },
                [_c("strong", [_vm._v("SSL Days Left")])]
              ),
              _c("div", { class: _vm.classes.btn }, [
                _c("strong", [_vm._v("Details")])
              ])
            ]
          ),
          _vm._l(_vm.$store.state.websites, function(site) {
            return _c(
              "div",
              { staticClass: "flex flex-row border-b border-t md:px-2 py-2" },
              [
                _c("div", { class: _vm.classes.btn }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full",
                      on: {
                        click: function($event) {
                          _vm.selectSite(site)
                        }
                      }
                    },
                    [_vm._v("Select")]
                  )
                ]),
                _c("div", { class: _vm.classes.name }, [
                  _c("p", [_vm._v(_vm._s(site.name || site.url))])
                ]),
                _c("div", { class: _vm.classes.url }, [
                  _c("p", [_vm._v(_vm._s(site.url))])
                ]),
                _c("div", { class: _vm.classes.uptime }, [
                  site.ssl_latest
                    ? _c("p", [
                        _vm._v(_vm._s(site.ssl_latest.days_left) + " Days Left")
                      ])
                    : _c("p", [_vm._v("No SSL")])
                ]),
                _c("div", { class: _vm.classes.btn }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded-full",
                      on: {
                        click: function($event) {
                          _vm.deleteSite(site.id)
                        }
                      }
                    },
                    [_vm._v("Remove")]
                  )
                ])
              ]
            )
          })
        ],
        2
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "px-6 py-4 text-center border-b bg-grey" },
      [_c("h2", [_vm._v("Website List")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13da69b2", module.exports)
  }
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dashboard-page flex flex-col" }, [
    _c(
      "div",
      { staticClass: "flex flex-col md:flex-row container mx-auto" },
      [
        _c("add-website-widget", { staticClass: "my-3 md:m-6" }),
        _vm.details
          ? _c("stats-widget", {
              staticClass: "my-3 md:m-6",
              attrs: { details: _vm.details }
            })
          : _vm._e()
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "flex flex-col md:flex-row container" },
      [
        _c("website-list", {
          staticClass: "my-3 md:m-6",
          on: { showDetails: _vm.showDetails }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-420d9737", module.exports)
  }
}

/***/ })
]));