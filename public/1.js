webpackJsonp([1],{

/***/ 103:
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

/***/ 104:
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

/***/ 105:
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

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0dea9ec8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0caee53c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Authorization.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0caee53c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Authorization.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.authorization-page {\n  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n}\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.3s;\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Auth_LoginCard__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Auth_LoginCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Auth_LoginCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Auth_RegisterCard__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Auth_RegisterCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Auth_RegisterCard__);




/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    RegisterTab: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LoginCard: __WEBPACK_IMPORTED_MODULE_0__components_Auth_LoginCard___default.a,
    RegisterCard: __WEBPACK_IMPORTED_MODULE_1__components_Auth_RegisterCard___default.a
  },
  watch: {
    RegisterTab: function RegisterTab(tabNow, tabThen) {
      this.newUser = tabNow;
    }
  }
});

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(121)
/* template */
var __vue_template__ = __webpack_require__(122)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ac14d7c"
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
Component.options.__file = "resources\\assets\\js\\components\\Auth\\LoginCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ac14d7c", Component.options)
  } else {
    hotAPI.reload("data-v-7ac14d7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b7790fa0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ac14d7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/stylus-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ac14d7c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/stylus-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoginCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputBox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__InputBox__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InputBox: __WEBPACK_IMPORTED_MODULE_1__InputBox___default.a
  },
  data: function data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: '',
      submitting: false
    };
  },

  methods: {
    AttemptLogin: function AttemptLogin() {
      var _this = this;

      this.submitting = true;
      axios.post('/api/auth/login', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.form)).then(function (response) {
        var jwt = void 0;
        if (jwt = response.data.access_token) {
          _this.$store.commit('setJWT', jwt);
          _this.getUserInfo();
        }
      }).catch(function (errors) {
        _this.errors = ' ';
        _this.submitting = false;
      });
    },
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      axios.post('/api/auth/me').then(function (data) {
        _this2.$store.commit('setUser', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, data.data));
        _this2.$router.push({ name: 'dashboard' });
      });
    },
    resetErrors: function resetErrors() {
      this.errors = '';
    }
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.AttemptLogin($event)
        }
      }
    },
    [
      _c("ul", { staticClass: "list-reset flex justify-between border-b" }, [
        _vm._m(0),
        _c("li", { staticClass: "ml-1" }, [
          _c(
            "a",
            {
              staticClass:
                "bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer",
              on: {
                click: function($event) {
                  _vm.$emit("registerTab")
                }
              }
            },
            [_vm._v("Register")]
          )
        ])
      ]),
      _c(
        "input-box",
        {
          attrs: {
            placeholder: "Jane Doe",
            type: "text",
            id: "email",
            errors: _vm.errors
          },
          on: { input: _vm.resetErrors },
          model: {
            value: _vm.form.email,
            callback: function($$v) {
              _vm.$set(
                _vm.form,
                "email",
                typeof $$v === "string" ? $$v.trim() : $$v
              )
            },
            expression: "form.email"
          }
        },
        [_vm._v("Email")]
      ),
      _c(
        "input-box",
        {
          attrs: {
            placeholder: "hunter2",
            type: "password",
            id: "password",
            errors: _vm.errors
          },
          on: { input: _vm.resetErrors },
          model: {
            value: _vm.form.password,
            callback: function($$v) {
              _vm.$set(_vm.form, "password", $$v)
            },
            expression: "form.password"
          }
        },
        [_vm._v("Password")]
      ),
      _c(
        "button",
        {
          staticClass:
            "bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right",
          attrs: { type: "submit", disabled: _vm.submitting }
        },
        [_vm._v("Login")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "-mb-px mr-1" }, [
      _c(
        "a",
        {
          staticClass:
            "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer"
        },
        [_vm._v("Login")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ac14d7c", module.exports)
  }
}

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(126)
/* template */
var __vue_template__ = __webpack_require__(127)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fddbdf80"
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
Component.options.__file = "resources\\assets\\js\\components\\Auth\\RegisterCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fddbdf80", Component.options)
  } else {
    hotAPI.reload("data-v-fddbdf80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("e70a734c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fddbdf80\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/stylus-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RegisterCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fddbdf80\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/stylus-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RegisterCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputBox__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InputBox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__InputBox__);




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    InputBox: __WEBPACK_IMPORTED_MODULE_1__InputBox___default.a
  },
  data: function data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },

  computed: {
    emailError: function emailError() {
      return this.errors.email ? this.errors.email[0] : '';
    },
    passwordError: function passwordError() {
      return this.errors.password ? this.errors.password[0] : '';
    },
    passwordConfirmError: function passwordConfirmError() {
      return this.passwordError.length ? ' ' : '';
    }
  },
  methods: {
    AttemptRegister: function AttemptRegister() {
      var _this = this;

      axios.post('/api/auth/register', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.form)).then(function (data) {
        _this.$router.push({ name: 'login' });
      }).catch(function (error) {
        console.log(error.response.data.errors);
        _this.errors = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, error.response.data.errors);
      });
    }
  }
});

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          _vm.AttemptRegister($event)
        }
      }
    },
    [
      _c("ul", { staticClass: "list-reset flex justify-between border-b" }, [
        _c("li", { staticClass: "mr-1" }, [
          _c(
            "a",
            {
              staticClass:
                "bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer",
              on: {
                click: function($event) {
                  _vm.$emit("loginTab")
                }
              }
            },
            [_vm._v("Login")]
          )
        ]),
        _vm._m(0)
      ]),
      _c(
        "input-box",
        {
          attrs: { placeholder: "Jane Doe", type: "text", id: "name" },
          model: {
            value: _vm.form.name,
            callback: function($$v) {
              _vm.$set(
                _vm.form,
                "name",
                typeof $$v === "string" ? $$v.trim() : $$v
              )
            },
            expression: "form.name"
          }
        },
        [_vm._v("Name")]
      ),
      _c(
        "input-box",
        {
          attrs: {
            placeholder: "name@example.com",
            type: "text",
            id: "email",
            errors: _vm.emailError
          },
          model: {
            value: _vm.form.email,
            callback: function($$v) {
              _vm.$set(
                _vm.form,
                "email",
                typeof $$v === "string" ? $$v.trim() : $$v
              )
            },
            expression: "form.email"
          }
        },
        [_vm._v("Email")]
      ),
      _c(
        "input-box",
        {
          attrs: {
            placeholder: "hunter2",
            type: "password",
            id: "password",
            errors: _vm.passwordError
          },
          model: {
            value: _vm.form.password,
            callback: function($$v) {
              _vm.$set(_vm.form, "password", $$v)
            },
            expression: "form.password"
          }
        },
        [_vm._v("Password")]
      ),
      _c(
        "input-box",
        {
          attrs: {
            placeholder: "hunter2",
            type: "password",
            id: "passconf",
            errors: _vm.passwordConfirmError
          },
          model: {
            value: _vm.form.password_confirmation,
            callback: function($$v) {
              _vm.$set(_vm.form, "password_confirmation", $$v)
            },
            expression: "form.password_confirmation"
          }
        },
        [_vm._v("Password Confirmation")]
      ),
      _c(
        "button",
        {
          staticClass:
            "bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right",
          attrs: { type: "submit" }
        },
        [_vm._v("Register")]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "-mb-px ml-1" }, [
      _c(
        "a",
        {
          staticClass:
            "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer"
        },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fddbdf80", module.exports)
  }
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "flex flex-row items-center justify-center authorization-page"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "max-w-sm rounded overflow-hidden shadow-lg bg-white relative"
        },
        [
          _c(
            "transition",
            { attrs: { name: "fade", mode: "out-in" } },
            [
              _vm.RegisterTab
                ? _c("register-card", {
                    on: {
                      loginTab: function($event) {
                        _vm.$router.push({ name: "login" })
                      }
                    }
                  })
                : _c("login-card", {
                    on: {
                      registerTab: function($event) {
                        _vm.$router.push({ name: "register" })
                      }
                    }
                  })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0caee53c", module.exports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(117)
/* template */
var __vue_template__ = __webpack_require__(128)
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
Component.options.__file = "resources\\assets\\js\\views\\Authorization.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0caee53c", Component.options)
  } else {
    hotAPI.reload("data-v-0caee53c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});