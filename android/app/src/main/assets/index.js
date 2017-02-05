// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _App = __webpack_require__(1);

	var _App2 = _interopRequireDefault(_App);

	var _router = __webpack_require__(4);

	var _router2 = _interopRequireDefault(_router);

	var _store = __webpack_require__(31);

	var _store2 = _interopRequireDefault(_store);

	var _vuexRouterSync = __webpack_require__(33);

	var _filters = __webpack_require__(34);

	var filters = _interopRequireWildcard(_filters);

	var _mixins = __webpack_require__(35);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// sync the router with the vuex store.
	// this registers `store.state.route`
	// import Vue from 'vue'
	(0, _vuexRouterSync.sync)(_store2.default, _router2.default);

	// register global utility filters.
	Object.keys(filters).forEach(function (key) {
	  Vue.filter(key, filters[key]);
	});

	// register global mixins.
	Vue.mixin(_mixins2.default);

	// create the app instance.
	// here we inject the router and store to all child components,
	// making them available everywhere as `this.$router` and `this.$store`.
	new Vue(Vue.util.extend({ el: '#root', router: _router2.default, store: _store2.default }, _App2.default));

	_router2.default.push('/');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\App.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	  methods: {
	    back: function back() {
	      this.$router.back();
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    on: {
	      "androidback": _vm.back
	    }
	  }, [_h('router-view', {
	    staticStyle: {
	      flex: "1"
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vueRouter = __webpack_require__(5);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _home = __webpack_require__(7);

	var _home2 = _interopRequireDefault(_home);

	var _rule = __webpack_require__(36);

	var _rule2 = _interopRequireDefault(_rule);

	var _write = __webpack_require__(40);

	var _write2 = _interopRequireDefault(_write);

	var _search = __webpack_require__(23);

	var _search2 = _interopRequireDefault(_search);

	var _consult = __webpack_require__(27);

	var _consult2 = _interopRequireDefault(_consult);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Vue.use(_vueRouter2.default); // import Vue from 'vue'
	exports.default = new _vueRouter2.default({
	  // mode: 'abstract',
	  routes: [{ path: '/', redirect: '/home' }, { path: '/home', name: 'home', component: _home2.default }, { path: '/rule', name: 'rule', component: _rule2.default }, { path: '/write', name: 'write', component: _write2.default }, { path: '/search', name: 'search', component: _search2.default }, { path: '/consult', name: 'consult', component: _consult2.default }]
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	  * vue-router v2.2.0
	  * (c) 2017 Evan You
	  * @license MIT
	  */
	'use strict';

	/*  */

	function assert (condition, message) {
	  if (!condition) {
	    throw new Error(("[vue-router] " + message))
	  }
	}

	function warn (condition, message) {
	  if (!condition) {
	    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
	  }
	}

	var View = {
	  name: 'router-view',
	  functional: true,
	  props: {
	    name: {
	      type: String,
	      default: 'default'
	    }
	  },
	  render: function render (h, ref) {
	    var props = ref.props;
	    var children = ref.children;
	    var parent = ref.parent;
	    var data = ref.data;

	    data.routerView = true;

	    var name = props.name;
	    var route = parent.$route;
	    var cache = parent._routerViewCache || (parent._routerViewCache = {});

	    // determine current view depth, also check to see if the tree
	    // has been toggled inactive but kept-alive.
	    var depth = 0;
	    var inactive = false;
	    while (parent) {
	      if (parent.$vnode && parent.$vnode.data.routerView) {
	        depth++;
	      }
	      if (parent._inactive) {
	        inactive = true;
	      }
	      parent = parent.$parent;
	    }
	    data.routerViewDepth = depth;

	    // render previous view if the tree is inactive and kept-alive
	    if (inactive) {
	      return h(cache[name], data, children)
	    }

	    var matched = route.matched[depth];
	    // render empty node if no matched route
	    if (!matched) {
	      cache[name] = null;
	      return h()
	    }

	    var component = cache[name] = matched.components[name];

	    // inject instance registration hooks
	    var hooks = data.hook || (data.hook = {});
	    hooks.init = function (vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.prepatch = function (oldVnode, vnode) {
	      matched.instances[name] = vnode.child;
	    };
	    hooks.destroy = function (vnode) {
	      if (matched.instances[name] === vnode.child) {
	        matched.instances[name] = undefined;
	      }
	    };

	    // resolve props
	    data.props = resolveProps(route, matched.props && matched.props[name]);

	    return h(component, data, children)
	  }
	};

	function resolveProps (route, config) {
	  switch (typeof config) {
	    case 'undefined':
	      return
	    case 'object':
	      return config
	    case 'function':
	      return config(route)
	    case 'boolean':
	      return config ? route.params : undefined
	    default:
	      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
	  }
	}

	/*  */

	var encodeReserveRE = /[!'()*]/g;
	var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
	var commaRE = /%2C/g;

	// fixed encodeURIComponent which is more comformant to RFC3986:
	// - escapes [!'()*]
	// - preserve commas
	var encode = function (str) { return encodeURIComponent(str)
	  .replace(encodeReserveRE, encodeReserveReplacer)
	  .replace(commaRE, ','); };

	var decode = decodeURIComponent;

	function resolveQuery (
	  query,
	  extraQuery
	) {
	  if ( extraQuery === void 0 ) extraQuery = {};

	  if (query) {
	    var parsedQuery;
	    try {
	      parsedQuery = parseQuery(query);
	    } catch (e) {
	      process.env.NODE_ENV !== 'production' && warn(false, e.message);
	      parsedQuery = {};
	    }
	    for (var key in extraQuery) {
	      parsedQuery[key] = extraQuery[key];
	    }
	    return parsedQuery
	  } else {
	    return extraQuery
	  }
	}

	function parseQuery (query) {
	  var res = {};

	  query = query.trim().replace(/^(\?|#|&)/, '');

	  if (!query) {
	    return res
	  }

	  query.split('&').forEach(function (param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = decode(parts.shift());
	    var val = parts.length > 0
	      ? decode(parts.join('='))
	      : null;

	    if (res[key] === undefined) {
	      res[key] = val;
	    } else if (Array.isArray(res[key])) {
	      res[key].push(val);
	    } else {
	      res[key] = [res[key], val];
	    }
	  });

	  return res
	}

	function stringifyQuery (obj) {
	  var res = obj ? Object.keys(obj).map(function (key) {
	    var val = obj[key];

	    if (val === undefined) {
	      return ''
	    }

	    if (val === null) {
	      return encode(key)
	    }

	    if (Array.isArray(val)) {
	      var result = [];
	      val.slice().forEach(function (val2) {
	        if (val2 === undefined) {
	          return
	        }
	        if (val2 === null) {
	          result.push(encode(key));
	        } else {
	          result.push(encode(key) + '=' + encode(val2));
	        }
	      });
	      return result.join('&')
	    }

	    return encode(key) + '=' + encode(val)
	  }).filter(function (x) { return x.length > 0; }).join('&') : null;
	  return res ? ("?" + res) : ''
	}

	/*  */

	var trailingSlashRE = /\/?$/;

	function createRoute (
	  record,
	  location,
	  redirectedFrom
	) {
	  var route = {
	    name: location.name || (record && record.name),
	    meta: (record && record.meta) || {},
	    path: location.path || '/',
	    hash: location.hash || '',
	    query: location.query || {},
	    params: location.params || {},
	    fullPath: getFullPath(location),
	    matched: record ? formatMatch(record) : []
	  };
	  if (redirectedFrom) {
	    route.redirectedFrom = getFullPath(redirectedFrom);
	  }
	  return Object.freeze(route)
	}

	// the starting route that represents the initial state
	var START = createRoute(null, {
	  path: '/'
	});

	function formatMatch (record) {
	  var res = [];
	  while (record) {
	    res.unshift(record);
	    record = record.parent;
	  }
	  return res
	}

	function getFullPath (ref) {
	  var path = ref.path;
	  var query = ref.query; if ( query === void 0 ) query = {};
	  var hash = ref.hash; if ( hash === void 0 ) hash = '';

	  return (path || '/') + stringifyQuery(query) + hash
	}

	function isSameRoute (a, b) {
	  if (b === START) {
	    return a === b
	  } else if (!b) {
	    return false
	  } else if (a.path && b.path) {
	    return (
	      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query)
	    )
	  } else if (a.name && b.name) {
	    return (
	      a.name === b.name &&
	      a.hash === b.hash &&
	      isObjectEqual(a.query, b.query) &&
	      isObjectEqual(a.params, b.params)
	    )
	  } else {
	    return false
	  }
	}

	function isObjectEqual (a, b) {
	  if ( a === void 0 ) a = {};
	  if ( b === void 0 ) b = {};

	  var aKeys = Object.keys(a);
	  var bKeys = Object.keys(b);
	  if (aKeys.length !== bKeys.length) {
	    return false
	  }
	  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
	}

	function isIncludedRoute (current, target) {
	  return (
	    current.path.replace(trailingSlashRE, '/').indexOf(
	      target.path.replace(trailingSlashRE, '/')
	    ) === 0 &&
	    (!target.hash || current.hash === target.hash) &&
	    queryIncludes(current.query, target.query)
	  )
	}

	function queryIncludes (current, target) {
	  for (var key in target) {
	    if (!(key in current)) {
	      return false
	    }
	  }
	  return true
	}

	/*  */

	// work around weird flow bug
	var toTypes = [String, Object];
	var eventTypes = [String, Array];

	var Link = {
	  name: 'router-link',
	  props: {
	    to: {
	      type: toTypes,
	      required: true
	    },
	    tag: {
	      type: String,
	      default: 'a'
	    },
	    exact: Boolean,
	    append: Boolean,
	    replace: Boolean,
	    activeClass: String,
	    event: {
	      type: eventTypes,
	      default: 'click'
	    }
	  },
	  render: function render (h) {
	    var this$1 = this;

	    var router = this.$router;
	    var current = this.$route;
	    var ref = router.resolve(this.to, current, this.append);
	    var location = ref.location;
	    var route = ref.route;
	    var href = ref.href;
	    var classes = {};
	    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
	    var compareTarget = location.path ? createRoute(null, location) : route;
	    classes[activeClass] = this.exact
	      ? isSameRoute(current, compareTarget)
	      : isIncludedRoute(current, compareTarget);

	    var handler = function (e) {
	      if (guardEvent(e)) {
	        if (this$1.replace) {
	          router.replace(location);
	        } else {
	          router.push(location);
	        }
	      }
	    };

	    var on = { click: guardEvent };
	    if (Array.isArray(this.event)) {
	      this.event.forEach(function (e) { on[e] = handler; });
	    } else {
	      on[this.event] = handler;
	    }

	    var data = {
	      class: classes
	    };

	    if (this.tag === 'a') {
	      data.on = on;
	      data.attrs = { href: href };
	    } else {
	      // find the first <a> child and apply listener and href
	      var a = findAnchor(this.$slots.default);
	      if (a) {
	        // in case the <a> is a static node
	        a.isStatic = false;
	        var extend = _Vue.util.extend;
	        var aData = a.data = extend({}, a.data);
	        aData.on = on;
	        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
	        aAttrs.href = href;
	      } else {
	        // doesn't have <a> child, apply listener to self
	        data.on = on;
	      }
	    }

	    return h(this.tag, data, this.$slots.default)
	  }
	};

	function guardEvent (e) {
	  // don't redirect with control keys
	  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
	  // don't redirect when preventDefault called
	  if (e.defaultPrevented) { return }
	  // don't redirect on right click
	  if (e.button !== undefined && e.button !== 0) { return }
	  // don't redirect if `target="_blank"`
	  if (e.target && e.target.getAttribute) {
	    var target = e.target.getAttribute('target');
	    if (/\b_blank\b/i.test(target)) { return }
	  }
	  // this may be a Weex event which doesn't have this method
	  if (e.preventDefault) {
	    e.preventDefault();
	  }
	  return true
	}

	function findAnchor (children) {
	  if (children) {
	    var child;
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      if (child.tag === 'a') {
	        return child
	      }
	      if (child.children && (child = findAnchor(child.children))) {
	        return child
	      }
	    }
	  }
	}

	var _Vue;

	function install (Vue) {
	  if (install.installed) { return }
	  install.installed = true;

	  _Vue = Vue;

	  Object.defineProperty(Vue.prototype, '$router', {
	    get: function get () { return this.$root._router }
	  });

	  Object.defineProperty(Vue.prototype, '$route', {
	    get: function get () { return this.$root._route }
	  });

	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      if (this.$options.router) {
	        this._router = this.$options.router;
	        this._router.init(this);
	        Vue.util.defineReactive(this, '_route', this._router.history.current);
	      }
	    }
	  });

	  Vue.component('router-view', View);
	  Vue.component('router-link', Link);

	  var strats = Vue.config.optionMergeStrategies;
	  // use the same hook merging strategy for route hooks
	  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
	}

	/*  */

	var inBrowser = typeof window !== 'undefined';

	/*  */

	function resolvePath (
	  relative,
	  base,
	  append
	) {
	  if (relative.charAt(0) === '/') {
	    return relative
	  }

	  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
	    return base + relative
	  }

	  var stack = base.split('/');

	  // remove trailing segment if:
	  // - not appending
	  // - appending to trailing slash (last segment is empty)
	  if (!append || !stack[stack.length - 1]) {
	    stack.pop();
	  }

	  // resolve relative path
	  var segments = relative.replace(/^\//, '').split('/');
	  for (var i = 0; i < segments.length; i++) {
	    var segment = segments[i];
	    if (segment === '.') {
	      continue
	    } else if (segment === '..') {
	      stack.pop();
	    } else {
	      stack.push(segment);
	    }
	  }

	  // ensure leading slash
	  if (stack[0] !== '') {
	    stack.unshift('');
	  }

	  return stack.join('/')
	}

	function parsePath (path) {
	  var hash = '';
	  var query = '';

	  var hashIndex = path.indexOf('#');
	  if (hashIndex >= 0) {
	    hash = path.slice(hashIndex);
	    path = path.slice(0, hashIndex);
	  }

	  var queryIndex = path.indexOf('?');
	  if (queryIndex >= 0) {
	    query = path.slice(queryIndex + 1);
	    path = path.slice(0, queryIndex);
	  }

	  return {
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function cleanPath (path) {
	  return path.replace(/\/\//g, '/')
	}

	/*  */

	function createRouteMap (
	  routes,
	  oldPathMap,
	  oldNameMap
	) {
	  var pathMap = oldPathMap || Object.create(null);
	  var nameMap = oldNameMap || Object.create(null);

	  routes.forEach(function (route) {
	    addRouteRecord(pathMap, nameMap, route);
	  });

	  return {
	    pathMap: pathMap,
	    nameMap: nameMap
	  }
	}

	function addRouteRecord (
	  pathMap,
	  nameMap,
	  route,
	  parent,
	  matchAs
	) {
	  var path = route.path;
	  var name = route.name;
	  if (process.env.NODE_ENV !== 'production') {
	    assert(path != null, "\"path\" is required in a route configuration.");
	    assert(
	      typeof route.component !== 'string',
	      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
	      "string id. Use an actual component instead."
	    );
	  }

	  var record = {
	    path: normalizePath(path, parent),
	    components: route.components || { default: route.component },
	    instances: {},
	    name: name,
	    parent: parent,
	    matchAs: matchAs,
	    redirect: route.redirect,
	    beforeEnter: route.beforeEnter,
	    meta: route.meta || {},
	    props: route.props == null
	      ? {}
	      : route.components
	        ? route.props
	        : { default: route.props }
	  };

	  if (route.children) {
	    // Warn if route is named and has a default child route.
	    // If users navigate to this route by name, the default child will
	    // not be rendered (GH Issue #629)
	    if (process.env.NODE_ENV !== 'production') {
	      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
	        warn(
	          false,
	          "Named Route '" + (route.name) + "' has a default child route. " +
	          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
	          "the default child route will not be rendered. Remove the name from " +
	          "this route and use the name of the default child route for named " +
	          "links instead."
	        );
	      }
	    }
	    route.children.forEach(function (child) {
	      var childMatchAs = matchAs
	        ? cleanPath((matchAs + "/" + (child.path)))
	        : undefined;
	      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
	    });
	  }

	  if (route.alias !== undefined) {
	    if (Array.isArray(route.alias)) {
	      route.alias.forEach(function (alias) {
	        var aliasRoute = {
	          path: alias,
	          children: route.children
	        };
	        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	      });
	    } else {
	      var aliasRoute = {
	        path: route.alias,
	        children: route.children
	      };
	      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
	    }
	  }

	  if (!pathMap[record.path]) {
	    pathMap[record.path] = record;
	  }

	  if (name) {
	    if (!nameMap[name]) {
	      nameMap[name] = record;
	    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
	      warn(
	        false,
	        "Duplicate named routes definition: " +
	        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
	      );
	    }
	  }
	}

	function normalizePath (path, parent) {
	  path = path.replace(/\/$/, '');
	  if (path[0] === '/') { return path }
	  if (parent == null) { return path }
	  return cleanPath(((parent.path) + "/" + path))
	}

	var index$1 = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};

	var isarray = index$1;

	/**
	 * Expose `pathToRegexp`.
	 */
	var index = pathToRegexp;
	var parse_1 = parse;
	var compile_1 = compile;
	var tokensToFunction_1 = tokensToFunction;
	var tokensToRegExp_1 = tokensToRegExp;

	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
	  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
	  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
	  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
	].join('|'), 'g');

	/**
	 * Parse a string for the raw tokens.
	 *
	 * @param  {string}  str
	 * @param  {Object=} options
	 * @return {!Array}
	 */
	function parse (str, options) {
	  var tokens = [];
	  var key = 0;
	  var index = 0;
	  var path = '';
	  var defaultDelimiter = options && options.delimiter || '/';
	  var res;

	  while ((res = PATH_REGEXP.exec(str)) != null) {
	    var m = res[0];
	    var escaped = res[1];
	    var offset = res.index;
	    path += str.slice(index, offset);
	    index = offset + m.length;

	    // Ignore already escaped sequences.
	    if (escaped) {
	      path += escaped[1];
	      continue
	    }

	    var next = str[index];
	    var prefix = res[2];
	    var name = res[3];
	    var capture = res[4];
	    var group = res[5];
	    var modifier = res[6];
	    var asterisk = res[7];

	    // Push the current path onto the tokens.
	    if (path) {
	      tokens.push(path);
	      path = '';
	    }

	    var partial = prefix != null && next != null && next !== prefix;
	    var repeat = modifier === '+' || modifier === '*';
	    var optional = modifier === '?' || modifier === '*';
	    var delimiter = res[2] || defaultDelimiter;
	    var pattern = capture || group;

	    tokens.push({
	      name: name || key++,
	      prefix: prefix || '',
	      delimiter: delimiter,
	      optional: optional,
	      repeat: repeat,
	      partial: partial,
	      asterisk: !!asterisk,
	      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
	    });
	  }

	  // Match any characters still remaining.
	  if (index < str.length) {
	    path += str.substr(index);
	  }

	  // If the path exists, push it onto the end.
	  if (path) {
	    tokens.push(path);
	  }

	  return tokens
	}

	/**
	 * Compile a string to a template function for the path.
	 *
	 * @param  {string}             str
	 * @param  {Object=}            options
	 * @return {!function(Object=, Object=)}
	 */
	function compile (str, options) {
	  return tokensToFunction(parse(str, options))
	}

	/**
	 * Prettier encoding of URI path segments.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeURIComponentPretty (str) {
	  return encodeURI(str).replace(/[\/?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
	 *
	 * @param  {string}
	 * @return {string}
	 */
	function encodeAsterisk (str) {
	  return encodeURI(str).replace(/[?#]/g, function (c) {
	    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
	  })
	}

	/**
	 * Expose a method for transforming tokens into the path function.
	 */
	function tokensToFunction (tokens) {
	  // Compile all the tokens into regexps.
	  var matches = new Array(tokens.length);

	  // Compile all the patterns before compilation.
	  for (var i = 0; i < tokens.length; i++) {
	    if (typeof tokens[i] === 'object') {
	      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
	    }
	  }

	  return function (obj, opts) {
	    var path = '';
	    var data = obj || {};
	    var options = opts || {};
	    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

	    for (var i = 0; i < tokens.length; i++) {
	      var token = tokens[i];

	      if (typeof token === 'string') {
	        path += token;

	        continue
	      }

	      var value = data[token.name];
	      var segment;

	      if (value == null) {
	        if (token.optional) {
	          // Prepend partial segment prefixes.
	          if (token.partial) {
	            path += token.prefix;
	          }

	          continue
	        } else {
	          throw new TypeError('Expected "' + token.name + '" to be defined')
	        }
	      }

	      if (isarray(value)) {
	        if (!token.repeat) {
	          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
	        }

	        if (value.length === 0) {
	          if (token.optional) {
	            continue
	          } else {
	            throw new TypeError('Expected "' + token.name + '" to not be empty')
	          }
	        }

	        for (var j = 0; j < value.length; j++) {
	          segment = encode(value[j]);

	          if (!matches[i].test(segment)) {
	            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
	          }

	          path += (j === 0 ? token.prefix : token.delimiter) + segment;
	        }

	        continue
	      }

	      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

	      if (!matches[i].test(segment)) {
	        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
	      }

	      path += token.prefix + segment;
	    }

	    return path
	  }
	}

	/**
	 * Escape a regular expression string.
	 *
	 * @param  {string} str
	 * @return {string}
	 */
	function escapeString (str) {
	  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
	}

	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {string} group
	 * @return {string}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1')
	}

	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {!RegExp} re
	 * @param  {Array}   keys
	 * @return {!RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re
	}

	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {string}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i'
	}

	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {!RegExp} path
	 * @param  {!Array}  keys
	 * @return {!RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);

	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name: i,
	        prefix: null,
	        delimiter: null,
	        optional: false,
	        repeat: false,
	        partial: false,
	        asterisk: false,
	        pattern: null
	      });
	    }
	  }

	  return attachKeys(path, keys)
	}

	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {!Array}  path
	 * @param  {Array}   keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];

	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }

	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

	  return attachKeys(regexp, keys)
	}

	/**
	 * Create a path regexp from string input.
	 *
	 * @param  {string}  path
	 * @param  {!Array}  keys
	 * @param  {!Object} options
	 * @return {!RegExp}
	 */
	function stringToRegexp (path, keys, options) {
	  return tokensToRegExp(parse(path, options), keys, options)
	}

	/**
	 * Expose a function for taking tokens and returning a RegExp.
	 *
	 * @param  {!Array}          tokens
	 * @param  {(Array|Object)=} keys
	 * @param  {Object=}         options
	 * @return {!RegExp}
	 */
	function tokensToRegExp (tokens, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = '';

	  // Iterate over the tokens and create our regexp string.
	  for (var i = 0; i < tokens.length; i++) {
	    var token = tokens[i];

	    if (typeof token === 'string') {
	      route += escapeString(token);
	    } else {
	      var prefix = escapeString(token.prefix);
	      var capture = '(?:' + token.pattern + ')';

	      keys.push(token);

	      if (token.repeat) {
	        capture += '(?:' + prefix + capture + ')*';
	      }

	      if (token.optional) {
	        if (!token.partial) {
	          capture = '(?:' + prefix + '(' + capture + '))?';
	        } else {
	          capture = prefix + '(' + capture + ')?';
	        }
	      } else {
	        capture = prefix + '(' + capture + ')';
	      }

	      route += capture;
	    }
	  }

	  var delimiter = escapeString(options.delimiter || '/');
	  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
	  }

	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
	  }

	  return attachKeys(new RegExp('^' + route, flags(options)), keys)
	}

	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(string|RegExp|Array)} path
	 * @param  {(Array|Object)=}       keys
	 * @param  {Object=}               options
	 * @return {!RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  if (!isarray(keys)) {
	    options = /** @type {!Object} */ (keys || options);
	    keys = [];
	  }

	  options = options || {};

	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, /** @type {!Array} */ (keys))
	  }

	  if (isarray(path)) {
	    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
	  }

	  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
	}

	index.parse = parse_1;
	index.compile = compile_1;
	index.tokensToFunction = tokensToFunction_1;
	index.tokensToRegExp = tokensToRegExp_1;

	/*  */

	var regexpCache = Object.create(null);

	function getRouteRegex (path) {
	  var hit = regexpCache[path];
	  var keys, regexp;

	  if (hit) {
	    keys = hit.keys;
	    regexp = hit.regexp;
	  } else {
	    keys = [];
	    regexp = index(path, keys);
	    regexpCache[path] = { keys: keys, regexp: regexp };
	  }

	  return { keys: keys, regexp: regexp }
	}

	var regexpCompileCache = Object.create(null);

	function fillParams (
	  path,
	  params,
	  routeMsg
	) {
	  try {
	    var filler =
	      regexpCompileCache[path] ||
	      (regexpCompileCache[path] = index.compile(path));
	    return filler(params || {}, { pretty: true })
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
	    }
	    return ''
	  }
	}

	/*  */

	function normalizeLocation (
	  raw,
	  current,
	  append
	) {
	  var next = typeof raw === 'string' ? { path: raw } : raw;
	  // named target
	  if (next.name || next._normalized) {
	    return next
	  }

	  // relative params
	  if (!next.path && next.params && current) {
	    next = assign({}, next);
	    next._normalized = true;
	    var params = assign(assign({}, current.params), next.params);
	    if (current.name) {
	      next.name = current.name;
	      next.params = params;
	    } else if (current.matched) {
	      var rawPath = current.matched[current.matched.length - 1].path;
	      next.path = fillParams(rawPath, params, ("path " + (current.path)));
	    } else if (process.env.NODE_ENV !== 'production') {
	      warn(false, "relative params navigation requires a current route.");
	    }
	    return next
	  }

	  var parsedPath = parsePath(next.path || '');
	  var basePath = (current && current.path) || '/';
	  var path = parsedPath.path
	    ? resolvePath(parsedPath.path, basePath, append || next.append)
	    : (current && current.path) || '/';
	  var query = resolveQuery(parsedPath.query, next.query);
	  var hash = next.hash || parsedPath.hash;
	  if (hash && hash.charAt(0) !== '#') {
	    hash = "#" + hash;
	  }

	  return {
	    _normalized: true,
	    path: path,
	    query: query,
	    hash: hash
	  }
	}

	function assign (a, b) {
	  for (var key in b) {
	    a[key] = b[key];
	  }
	  return a
	}

	/*  */

	function createMatcher (routes) {
	  var ref = createRouteMap(routes);
	  var pathMap = ref.pathMap;
	  var nameMap = ref.nameMap;

	  function addRoutes (routes) {
	    createRouteMap(routes, pathMap, nameMap);
	  }

	  function match (
	    raw,
	    currentRoute,
	    redirectedFrom
	  ) {
	    var location = normalizeLocation(raw, currentRoute);
	    var name = location.name;

	    if (name) {
	      var record = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        warn(record, ("Route with name '" + name + "' does not exist"));
	      }
	      var paramNames = getRouteRegex(record.path).keys
	        .filter(function (key) { return !key.optional; })
	        .map(function (key) { return key.name; });

	      if (typeof location.params !== 'object') {
	        location.params = {};
	      }

	      if (currentRoute && typeof currentRoute.params === 'object') {
	        for (var key in currentRoute.params) {
	          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
	            location.params[key] = currentRoute.params[key];
	          }
	        }
	      }

	      if (record) {
	        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
	        return _createRoute(record, location, redirectedFrom)
	      }
	    } else if (location.path) {
	      location.params = {};
	      for (var path in pathMap) {
	        if (matchRoute(path, location.params, location.path)) {
	          return _createRoute(pathMap[path], location, redirectedFrom)
	        }
	      }
	    }
	    // no match
	    return _createRoute(null, location)
	  }

	  function redirect (
	    record,
	    location
	  ) {
	    var originalRedirect = record.redirect;
	    var redirect = typeof originalRedirect === 'function'
	        ? originalRedirect(createRoute(record, location))
	        : originalRedirect;

	    if (typeof redirect === 'string') {
	      redirect = { path: redirect };
	    }

	    if (!redirect || typeof redirect !== 'object') {
	      process.env.NODE_ENV !== 'production' && warn(
	        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
	      );
	      return _createRoute(null, location)
	    }

	    var re = redirect;
	    var name = re.name;
	    var path = re.path;
	    var query = location.query;
	    var hash = location.hash;
	    var params = location.params;
	    query = re.hasOwnProperty('query') ? re.query : query;
	    hash = re.hasOwnProperty('hash') ? re.hash : hash;
	    params = re.hasOwnProperty('params') ? re.params : params;

	    if (name) {
	      // resolved named direct
	      var targetRecord = nameMap[name];
	      if (process.env.NODE_ENV !== 'production') {
	        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
	      }
	      return match({
	        _normalized: true,
	        name: name,
	        query: query,
	        hash: hash,
	        params: params
	      }, undefined, location)
	    } else if (path) {
	      // 1. resolve relative redirect
	      var rawPath = resolveRecordPath(path, record);
	      // 2. resolve params
	      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
	      // 3. rematch with existing query and hash
	      return match({
	        _normalized: true,
	        path: resolvedPath,
	        query: query,
	        hash: hash
	      }, undefined, location)
	    } else {
	      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
	      return _createRoute(null, location)
	    }
	  }

	  function alias (
	    record,
	    location,
	    matchAs
	  ) {
	    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
	    var aliasedMatch = match({
	      _normalized: true,
	      path: aliasedPath
	    });
	    if (aliasedMatch) {
	      var matched = aliasedMatch.matched;
	      var aliasedRecord = matched[matched.length - 1];
	      location.params = aliasedMatch.params;
	      return _createRoute(aliasedRecord, location)
	    }
	    return _createRoute(null, location)
	  }

	  function _createRoute (
	    record,
	    location,
	    redirectedFrom
	  ) {
	    if (record && record.redirect) {
	      return redirect(record, redirectedFrom || location)
	    }
	    if (record && record.matchAs) {
	      return alias(record, location, record.matchAs)
	    }
	    return createRoute(record, location, redirectedFrom)
	  }

	  return {
	    match: match,
	    addRoutes: addRoutes
	  }
	}

	function matchRoute (
	  path,
	  params,
	  pathname
	) {
	  var ref = getRouteRegex(path);
	  var regexp = ref.regexp;
	  var keys = ref.keys;
	  var m = pathname.match(regexp);

	  if (!m) {
	    return false
	  } else if (!params) {
	    return true
	  }

	  for (var i = 1, len = m.length; i < len; ++i) {
	    var key = keys[i - 1];
	    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
	    if (key) { params[key.name] = val; }
	  }

	  return true
	}

	function resolveRecordPath (path, record) {
	  return resolvePath(path, record.parent ? record.parent.path : '/', true)
	}

	/*  */


	var positionStore = Object.create(null);

	function setupScroll () {
	  window.addEventListener('popstate', function (e) {
	    if (e.state && e.state.key) {
	      setStateKey(e.state.key);
	    }
	  });

	  window.addEventListener('scroll', saveScrollPosition);
	}

	function handleScroll (
	  router,
	  to,
	  from,
	  isPop
	) {
	  if (!router.app) {
	    return
	  }

	  var behavior = router.options.scrollBehavior;
	  if (!behavior) {
	    return
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(typeof behavior === 'function', "scrollBehavior must be a function");
	  }

	  // wait until re-render finishes before scrolling
	  router.app.$nextTick(function () {
	    var position = getScrollPosition();
	    var shouldScroll = behavior(to, from, isPop ? position : null);
	    if (!shouldScroll) {
	      return
	    }
	    var isObject = typeof shouldScroll === 'object';
	    if (isObject && typeof shouldScroll.selector === 'string') {
	      var el = document.querySelector(shouldScroll.selector);
	      if (el) {
	        position = getElementPosition(el);
	      } else if (isValidPosition(shouldScroll)) {
	        position = normalizePosition(shouldScroll);
	      }
	    } else if (isObject && isValidPosition(shouldScroll)) {
	      position = normalizePosition(shouldScroll);
	    }

	    if (position) {
	      window.scrollTo(position.x, position.y);
	    }
	  });
	}

	function saveScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    positionStore[key] = {
	      x: window.pageXOffset,
	      y: window.pageYOffset
	    };
	  }
	}

	function getScrollPosition () {
	  var key = getStateKey();
	  if (key) {
	    return positionStore[key]
	  }
	}

	function getElementPosition (el) {
	  var docRect = document.documentElement.getBoundingClientRect();
	  var elRect = el.getBoundingClientRect();
	  return {
	    x: elRect.left - docRect.left,
	    y: elRect.top - docRect.top
	  }
	}

	function isValidPosition (obj) {
	  return isNumber(obj.x) || isNumber(obj.y)
	}

	function normalizePosition (obj) {
	  return {
	    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
	    y: isNumber(obj.y) ? obj.y : window.pageYOffset
	  }
	}

	function isNumber (v) {
	  return typeof v === 'number'
	}

	/*  */

	var supportsPushState = inBrowser && (function () {
	  var ua = window.navigator.userAgent;

	  if (
	    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
	    ua.indexOf('Mobile Safari') !== -1 &&
	    ua.indexOf('Chrome') === -1 &&
	    ua.indexOf('Windows Phone') === -1
	  ) {
	    return false
	  }

	  return window.history && 'pushState' in window.history
	})();

	// use User Timing api (if present) for more accurate key precision
	var Time = inBrowser && window.performance && window.performance.now
	  ? window.performance
	  : Date;

	var _key = genKey();

	function genKey () {
	  return Time.now().toFixed(3)
	}

	function getStateKey () {
	  return _key
	}

	function setStateKey (key) {
	  _key = key;
	}

	function pushState (url, replace) {
	  // try...catch the pushState call to get around Safari
	  // DOM Exception 18 where it limits to 100 pushState calls
	  var history = window.history;
	  try {
	    if (replace) {
	      history.replaceState({ key: _key }, '', url);
	    } else {
	      _key = genKey();
	      history.pushState({ key: _key }, '', url);
	    }
	    saveScrollPosition();
	  } catch (e) {
	    window.location[replace ? 'replace' : 'assign'](url);
	  }
	}

	function replaceState (url) {
	  pushState(url, true);
	}

	/*  */

	function runQueue (queue, fn, cb) {
	  var step = function (index) {
	    if (index >= queue.length) {
	      cb();
	    } else {
	      if (queue[index]) {
	        fn(queue[index], function () {
	          step(index + 1);
	        });
	      } else {
	        step(index + 1);
	      }
	    }
	  };
	  step(0);
	}

	/*  */


	var History = function History (router, base) {
	  this.router = router;
	  this.base = normalizeBase(base);
	  // start with a route object that stands for "nowhere"
	  this.current = START;
	  this.pending = null;
	  this.ready = false;
	  this.readyCbs = [];
	};

	History.prototype.listen = function listen (cb) {
	  this.cb = cb;
	};

	History.prototype.onReady = function onReady (cb) {
	  if (this.ready) {
	    cb();
	  } else {
	    this.readyCbs.push(cb);
	  }
	};

	History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
	    var this$1 = this;

	  var route = this.router.match(location, this.current);
	  this.confirmTransition(route, function () {
	    this$1.updateRoute(route);
	    onComplete && onComplete(route);
	    this$1.ensureURL();

	    // fire ready cbs once
	    if (!this$1.ready) {
	      this$1.ready = true;
	      this$1.readyCbs.forEach(function (cb) {
	        cb(route);
	      });
	    }
	  }, onAbort);
	};

	History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
	    var this$1 = this;

	  var current = this.current;
	  var abort = function () { onAbort && onAbort(); };
	  if (
	    isSameRoute(route, current) &&
	    // in the case the route map has been dynamically appended to
	    route.matched.length === current.matched.length
	  ) {
	    this.ensureURL();
	    return abort()
	  }

	  var ref = resolveQueue(this.current.matched, route.matched);
	    var updated = ref.updated;
	    var deactivated = ref.deactivated;
	    var activated = ref.activated;

	  var queue = [].concat(
	    // in-component leave guards
	    extractLeaveGuards(deactivated),
	    // global before hooks
	    this.router.beforeHooks,
	    // in-component update hooks
	    extractUpdateHooks(updated),
	    // in-config enter guards
	    activated.map(function (m) { return m.beforeEnter; }),
	    // async components
	    resolveAsyncComponents(activated)
	  );

	  this.pending = route;
	  var iterator = function (hook, next) {
	    if (this$1.pending !== route) {
	      return abort()
	    }
	    hook(route, current, function (to) {
	      if (to === false) {
	        // next(false) -> abort navigation, ensure current URL
	        this$1.ensureURL(true);
	        abort();
	      } else if (typeof to === 'string' || typeof to === 'object') {
	        // next('/') or next({ path: '/' }) -> redirect
	        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
	        abort();
	      } else {
	        // confirm transition and pass on the value
	        next(to);
	      }
	    });
	  };

	  runQueue(queue, iterator, function () {
	    var postEnterCbs = [];
	    var isValid = function () { return this$1.current === route; };
	    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
	    // wait until async components are resolved before
	    // extracting in-component enter guards
	    runQueue(enterGuards, iterator, function () {
	      if (this$1.pending !== route) {
	        return abort()
	      }
	      this$1.pending = null;
	      onComplete(route);
	      if (this$1.router.app) {
	        this$1.router.app.$nextTick(function () {
	          postEnterCbs.forEach(function (cb) { return cb(); });
	        });
	      }
	    });
	  });
	};

	History.prototype.updateRoute = function updateRoute (route) {
	  var prev = this.current;
	  this.current = route;
	  this.cb && this.cb(route);
	  this.router.afterHooks.forEach(function (hook) {
	    hook && hook(route, prev);
	  });
	};

	function normalizeBase (base) {
	  if (!base) {
	    if (inBrowser) {
	      // respect <base> tag
	      var baseEl = document.querySelector('base');
	      base = baseEl ? baseEl.getAttribute('href') : '/';
	    } else {
	      base = '/';
	    }
	  }
	  // make sure there's the starting slash
	  if (base.charAt(0) !== '/') {
	    base = '/' + base;
	  }
	  // remove trailing slash
	  return base.replace(/\/$/, '')
	}

	function resolveQueue (
	  current,
	  next
	) {
	  var i;
	  var max = Math.max(current.length, next.length);
	  for (i = 0; i < max; i++) {
	    if (current[i] !== next[i]) {
	      break
	    }
	  }
	  return {
	    updated: next.slice(0, i),
	    activated: next.slice(i),
	    deactivated: current.slice(i)
	  }
	}

	function extractGuards (
	  records,
	  name,
	  bind,
	  reverse
	) {
	  var guards = flatMapComponents(records, function (def, instance, match, key) {
	    var guard = extractGuard(def, name);
	    if (guard) {
	      return Array.isArray(guard)
	        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
	        : bind(guard, instance, match, key)
	    }
	  });
	  return flatten(reverse ? guards.reverse() : guards)
	}

	function extractGuard (
	  def,
	  key
	) {
	  if (typeof def !== 'function') {
	    // extend now so that global mixins are applied.
	    def = _Vue.extend(def);
	  }
	  return def.options[key]
	}

	function extractLeaveGuards (deactivated) {
	  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
	}

	function extractUpdateHooks (updated) {
	  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
	}

	function bindGuard (guard, instance) {
	  return function boundRouteGuard () {
	    return guard.apply(instance, arguments)
	  }
	}

	function extractEnterGuards (
	  activated,
	  cbs,
	  isValid
	) {
	  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
	    return bindEnterGuard(guard, match, key, cbs, isValid)
	  })
	}

	function bindEnterGuard (
	  guard,
	  match,
	  key,
	  cbs,
	  isValid
	) {
	  return function routeEnterGuard (to, from, next) {
	    return guard(to, from, function (cb) {
	      next(cb);
	      if (typeof cb === 'function') {
	        cbs.push(function () {
	          // #750
	          // if a router-view is wrapped with an out-in transition,
	          // the instance may not have been registered at this time.
	          // we will need to poll for registration until current route
	          // is no longer valid.
	          poll(cb, match.instances, key, isValid);
	        });
	      }
	    })
	  }
	}

	function poll (
	  cb, // somehow flow cannot infer this is a function
	  instances,
	  key,
	  isValid
	) {
	  if (instances[key]) {
	    cb(instances[key]);
	  } else if (isValid()) {
	    setTimeout(function () {
	      poll(cb, instances, key, isValid);
	    }, 16);
	  }
	}

	function resolveAsyncComponents (matched) {
	  return flatMapComponents(matched, function (def, _, match, key) {
	    // if it's a function and doesn't have Vue options attached,
	    // assume it's an async component resolve function.
	    // we are not using Vue's default async resolving mechanism because
	    // we want to halt the navigation until the incoming component has been
	    // resolved.
	    if (typeof def === 'function' && !def.options) {
	      return function (to, from, next) {
	        var resolve = once(function (resolvedDef) {
	          match.components[key] = resolvedDef;
	          next();
	        });

	        var reject = once(function (reason) {
	          warn(false, ("Failed to resolve async component " + key + ": " + reason));
	          next(false);
	        });

	        var res = def(resolve, reject);
	        if (res && typeof res.then === 'function') {
	          res.then(resolve, reject);
	        }
	      }
	    }
	  })
	}

	function flatMapComponents (
	  matched,
	  fn
	) {
	  return flatten(matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) { return fn(
	      m.components[key],
	      m.instances[key],
	      m, key
	    ); })
	  }))
	}

	function flatten (arr) {
	  return Array.prototype.concat.apply([], arr)
	}

	// in Webpack 2, require.ensure now also returns a Promise
	// so the resolve/reject functions may get called an extra time
	// if the user uses an arrow function shorthand that happens to
	// return that Promise.
	function once (fn) {
	  var called = false;
	  return function () {
	    if (called) { return }
	    called = true;
	    return fn.apply(this, arguments)
	  }
	}

	/*  */


	var HTML5History = (function (History$$1) {
	  function HTML5History (router, base) {
	    var this$1 = this;

	    History$$1.call(this, router, base);

	    var expectScroll = router.options.scrollBehavior;

	    if (expectScroll) {
	      setupScroll();
	    }

	    window.addEventListener('popstate', function (e) {
	      this$1.transitionTo(getLocation(this$1.base), function (route) {
	        if (expectScroll) {
	          handleScroll(router, route, this$1.current, true);
	        }
	      });
	    });
	  }

	  if ( History$$1 ) HTML5History.__proto__ = History$$1;
	  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
	  HTML5History.prototype.constructor = HTML5History;

	  HTML5History.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      pushState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      replaceState(cleanPath(this$1.base + route.fullPath));
	      handleScroll(this$1.router, route, this$1.current, false);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HTML5History.prototype.ensureURL = function ensureURL (push) {
	    if (getLocation(this.base) !== this.current.fullPath) {
	      var current = cleanPath(this.base + this.current.fullPath);
	      push ? pushState(current) : replaceState(current);
	    }
	  };

	  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getLocation(this.base)
	  };

	  return HTML5History;
	}(History));

	function getLocation (base) {
	  var path = window.location.pathname;
	  if (base && path.indexOf(base) === 0) {
	    path = path.slice(base.length);
	  }
	  return (path || '/') + window.location.search + window.location.hash
	}

	/*  */


	var HashHistory = (function (History$$1) {
	  function HashHistory (router, base, fallback) {
	    History$$1.call(this, router, base);
	    // check history fallback deeplinking
	    if (fallback && checkFallback(this.base)) {
	      return
	    }
	    ensureSlash();
	  }

	  if ( History$$1 ) HashHistory.__proto__ = History$$1;
	  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  HashHistory.prototype.constructor = HashHistory;

	  // this is delayed until the app mounts
	  // to avoid the hashchange listener being fired too early
	  HashHistory.prototype.setupListeners = function setupListeners () {
	    var this$1 = this;

	    window.addEventListener('hashchange', function () {
	      if (!ensureSlash()) {
	        return
	      }
	      this$1.transitionTo(getHash(), function (route) {
	        replaceHash(route.fullPath);
	      });
	    });
	  };

	  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      pushHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    this.transitionTo(location, function (route) {
	      replaceHash(route.fullPath);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  HashHistory.prototype.go = function go (n) {
	    window.history.go(n);
	  };

	  HashHistory.prototype.ensureURL = function ensureURL (push) {
	    var current = this.current.fullPath;
	    if (getHash() !== current) {
	      push ? pushHash(current) : replaceHash(current);
	    }
	  };

	  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    return getHash()
	  };

	  return HashHistory;
	}(History));

	function checkFallback (base) {
	  var location = getLocation(base);
	  if (!/^\/#/.test(location)) {
	    window.location.replace(
	      cleanPath(base + '/#' + location)
	    );
	    return true
	  }
	}

	function ensureSlash () {
	  var path = getHash();
	  if (path.charAt(0) === '/') {
	    return true
	  }
	  replaceHash('/' + path);
	  return false
	}

	function getHash () {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var index = href.indexOf('#');
	  return index === -1 ? '' : href.slice(index + 1)
	}

	function pushHash (path) {
	  window.location.hash = path;
	}

	function replaceHash (path) {
	  var i = window.location.href.indexOf('#');
	  window.location.replace(
	    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
	  );
	}

	/*  */


	var AbstractHistory = (function (History$$1) {
	  function AbstractHistory (router, base) {
	    History$$1.call(this, router, base);
	    this.stack = [];
	    this.index = -1;
	  }

	  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
	  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
	  AbstractHistory.prototype.constructor = AbstractHistory;

	  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
	      this$1.index++;
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
	    var this$1 = this;

	    this.transitionTo(location, function (route) {
	      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
	      onComplete && onComplete(route);
	    }, onAbort);
	  };

	  AbstractHistory.prototype.go = function go (n) {
	    var this$1 = this;

	    var targetIndex = this.index + n;
	    if (targetIndex < 0 || targetIndex >= this.stack.length) {
	      return
	    }
	    var route = this.stack[targetIndex];
	    this.confirmTransition(route, function () {
	      this$1.index = targetIndex;
	      this$1.updateRoute(route);
	    });
	  };

	  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
	    var current = this.stack[this.stack.length - 1];
	    return current ? current.fullPath : '/'
	  };

	  AbstractHistory.prototype.ensureURL = function ensureURL () {
	    // noop
	  };

	  return AbstractHistory;
	}(History));

	/*  */

	var VueRouter = function VueRouter (options) {
	  if ( options === void 0 ) options = {};

	  this.app = null;
	  this.apps = [];
	  this.options = options;
	  this.beforeHooks = [];
	  this.afterHooks = [];
	  this.matcher = createMatcher(options.routes || []);

	  var mode = options.mode || 'hash';
	  this.fallback = mode === 'history' && !supportsPushState;
	  if (this.fallback) {
	    mode = 'hash';
	  }
	  if (!inBrowser) {
	    mode = 'abstract';
	  }
	  this.mode = mode;

	  switch (mode) {
	    case 'history':
	      this.history = new HTML5History(this, options.base);
	      break
	    case 'hash':
	      this.history = new HashHistory(this, options.base, this.fallback);
	      break
	    case 'abstract':
	      this.history = new AbstractHistory(this, options.base);
	      break
	    default:
	      if (process.env.NODE_ENV !== 'production') {
	        assert(false, ("invalid mode: " + mode));
	      }
	  }
	};

	var prototypeAccessors = { currentRoute: {} };

	VueRouter.prototype.match = function match (
	  raw,
	  current,
	  redirectedFrom
	) {
	  return this.matcher.match(raw, current, redirectedFrom)
	};

	prototypeAccessors.currentRoute.get = function () {
	  return this.history && this.history.current
	};

	VueRouter.prototype.init = function init (app /* Vue component instance */) {
	    var this$1 = this;

	  process.env.NODE_ENV !== 'production' && assert(
	    install.installed,
	    "not installed. Make sure to call `Vue.use(VueRouter)` " +
	    "before creating root instance."
	  );

	  this.apps.push(app);

	  // main app already initialized.
	  if (this.app) {
	    return
	  }

	  this.app = app;

	  var history = this.history;

	  if (history instanceof HTML5History) {
	    history.transitionTo(history.getCurrentLocation());
	  } else if (history instanceof HashHistory) {
	    var setupHashListener = function () {
	      history.setupListeners();
	    };
	    history.transitionTo(
	      history.getCurrentLocation(),
	      setupHashListener,
	      setupHashListener
	    );
	  }

	  history.listen(function (route) {
	    this$1.apps.forEach(function (app) {
	      app._route = route;
	    });
	  });
	};

	VueRouter.prototype.beforeEach = function beforeEach (fn) {
	  this.beforeHooks.push(fn);
	};

	VueRouter.prototype.afterEach = function afterEach (fn) {
	  this.afterHooks.push(fn);
	};

	VueRouter.prototype.onReady = function onReady (cb) {
	  this.history.onReady(cb);
	};

	VueRouter.prototype.push = function push (location, onComplete, onAbort) {
	  this.history.push(location, onComplete, onAbort);
	};

	VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
	  this.history.replace(location, onComplete, onAbort);
	};

	VueRouter.prototype.go = function go (n) {
	  this.history.go(n);
	};

	VueRouter.prototype.back = function back () {
	  this.go(-1);
	};

	VueRouter.prototype.forward = function forward () {
	  this.go(1);
	};

	VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
	  var route = to
	    ? this.resolve(to).route
	    : this.currentRoute;
	  if (!route) {
	    return []
	  }
	  return [].concat.apply([], route.matched.map(function (m) {
	    return Object.keys(m.components).map(function (key) {
	      return m.components[key]
	    })
	  }))
	};

	VueRouter.prototype.resolve = function resolve (
	  to,
	  current,
	  append
	) {
	  var location = normalizeLocation(to, current || this.history.current, append);
	  var route = this.match(location, current);
	  var fullPath = route.redirectedFrom || route.fullPath;
	  var base = this.history.base;
	  var href = createHref(base, fullPath, this.mode);
	  return {
	    location: location,
	    route: route,
	    href: href,
	    // for backwards compat
	    normalizedTo: location,
	    resolved: route
	  }
	};

	VueRouter.prototype.addRoutes = function addRoutes (routes) {
	  this.matcher.addRoutes(routes);
	  if (this.history.current !== START) {
	    this.history.transitionTo(this.history.getCurrentLocation());
	  }
	};

	Object.defineProperties( VueRouter.prototype, prototypeAccessors );

	function createHref (base, fullPath, mode) {
	  var path = mode === 'hash' ? '#' + fullPath : fullPath;
	  return base ? cleanPath(base + '/' + path) : path
	}

	VueRouter.install = install;
	VueRouter.version = '2.2.0';

	if (inBrowser && window.Vue) {
	  window.Vue.use(VueRouter);
	}

	module.exports = VueRouter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(8)
	)

	/* script */
	__vue_exports__ = __webpack_require__(9)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\pages\\home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "banner": {
	    "width": 100,
	    "height": 200
	  },
	  "bar": {
	    "height": 30,
	    "backgroundColor": "#EEEEEE"
	  },
	  "menu": {
	    "padding": 10,
	    "width": 100,
	    "flexDirection": "row"
	  },
	  "menu-cell": {
	    "width": 25
	  },
	  "menu-content": {
	    "alignItems": "center",
	    "alignContent": "center"
	  },
	  "menu-content-text": {
	    "fontSize": 30,
	    "lineHeight": 40
	  },
	  "article-header": {
	    "height": 80,
	    "paddingLeft": 24
	  },
	  "article-header-text": {
	    "lineHeight": 80,
	    "fontSize": 40
	  },
	  "article-card": {
	    "padding": 20,
	    "fontSize": 36,
	    "borderBottom": 1
	  },
	  "article-content": {
	    "fontSize": 36,
	    "WebkitLineClamp": 2,
	    "overflow": "hidden",
	    "textOverflow": "ellipsis"
	  },
	  "article-info": {
	    "marginTop": 10,
	    "flexDirection": "row"
	  },
	  "article-date": {
	    "marginLeft": 40
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navigator = __webpack_require__(10);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _tabbar = __webpack_require__(14);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { Navigator: _navigator2.default, Tabbar: _tabbar2.default },
	    data: function data() {
	        return {
	            menuList: [{
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: '娱乐八卦'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: '体育要闻'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: '政治时事'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: '你懂的'
	            }],
	            cardList: [{
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis hic ipsa, tenetur quae. Fugiat repellat ipsam non iure magnam ratione! Architecto aperiam blanditiis a aliquid fugit enim commodi, eos hic?',
	                type: '娱乐八卦',
	                date: '2017-01-11'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis hic ipsa, tenetur quae. Fugiat repellat ipsam non iure magnam ratione! Architecto aperiam blanditiis a aliquid fugit enim commodi, eos hic?',
	                type: '政治时事',
	                date: '2017-01-11'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis hic ipsa, tenetur quae. Fugiat repellat ipsam non iure magnam ratione! Architecto aperiam blanditiis a aliquid fugit enim commodi, eos hic?',
	                type: '政治时事',
	                date: '2017-01-11'
	            }, {
	                src: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
	                content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis hic ipsa, tenetur quae. Fugiat repellat ipsam non iure magnam ratione! Architecto aperiam blanditiis a aliquid fugit enim commodi, eos hic?',
	                type: '政策法规',
	                date: '2017-01-11'
	            }]
	        };
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(11)
	)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\components\\navigator.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "header": {
	    "position": "sticky",
	    "width": 750,
	    "height": 80,
	    "backgroundColor": "#FF0000",
	    "flexDirection": "row",
	    "justifyContent": "center"
	  },
	  "left-text": {
	    "position": "absolute",
	    "top": 17,
	    "left": 32,
	    "fontSize": 40,
	    "textAlign": "left",
	    "color": "#FFFFFF",
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "top": 17,
	    "left": 172,
	    "right": 172,
	    "fontSize": 40,
	    "textAlign": "center",
	    "color": "#FFFFFF"
	  },
	  "right-text": {
	    "position": "absolute",
	    "top": 17,
	    "right": 32,
	    "fontSize": 40,
	    "textAlign": "right",
	    "color": "#FFFFFF",
	    "fontFamily": "'Open Sans', sans-serif"
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  props: {
	    title: {
	      default: 'Weex-Demo'
	    },
	    leftItem: {
	      default: false
	    },
	    rightItem: {
	      default: false
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["header"]
	  }, [(_vm.leftItem) ? _h('text', {
	    staticClass: ["left-text"],
	    on: {
	      "click": function($event) {
	        _vm.go(-1)
	      }
	    }
	  }, ["<"]) : _vm._e(), _h('text', {
	    staticClass: ["center-text"]
	  }, [_vm._s(_vm.title)]), (_vm.rightItem) ? _h('text', {
	    staticClass: ["right-text"],
	    on: {
	      "click": function($event) {
	        _vm.go(1)
	      }
	    }
	  }, [">"]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(15)
	)

	/* script */
	__vue_exports__ = __webpack_require__(16)

	/* template */
	var __vue_template__ = __webpack_require__(17)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\components\\tabbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	  "tabbar-wrapper": {
	    "height": 100
	  },
	  "tabbar": {
	    "position": "fixed",
	    "bottom": 0,
	    "width": 100,
	    "height": 100,
	    "flexDirection": "row",
	    "background": "#fff",
	    "borderTop": 1
	  },
	  "tab-item": {
	    "width": 25,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "display": "flex"
	  },
	  "tab-icon": {
	    "width": 48,
	    "height": 48
	  }
	}

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return {
	      index: 0,
	      tabItems: [{
	        index: 0,
	        title: '首页',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
	        url: 'home',
	        visibility: 'visible'
	      }, {
	        index: 1,
	        title: '我要写信',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
	        url: 'rule',
	        visibility: 'hidden'
	      }, {
	        index: 2,
	        title: '我要登陆',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
	        url: 'search',
	        visibility: 'hidden'
	      }, {
	        index: 3,
	        title: '在线查询',
	        titleColor: '#000000',
	        icon: '',
	        image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
	        selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
	        url: 'consult',
	        visibility: 'hidden'
	      }]
	    };
	  },
	  ready: function ready(e) {},
	  methods: {}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["tabbar-wrapper"]
	  }, [_h('div', {
	    staticClass: ["tabbar"]
	  }, [_vm._l((_vm.tabItems), function(item) {
	    return _h('div', {
	      staticClass: ["tab-item"],
	      on: {
	        "click": function($event) {
	          _vm.replace(item.url)
	        }
	      }
	    }, [_h('div', [_h('image', {
	      staticClass: ["tab-icon"],
	      attrs: {
	        "src": item.image
	      }
	    })]), _h('div', {
	      staticClass: ["tab-title"]
	    }, [_h('text', [_vm._s(item.title)])])])
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_h('navigator'), _h('image', {
	    staticClass: ["banner"],
	    attrs: {
	      "width": "100%",
	      "src": "https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg",
	      "alt": "图一张"
	    }
	  }), _h('div', {
	    staticClass: ["bar"]
	  }), _h('div', {
	    staticClass: ["menu"]
	  }, [_vm._l((_vm.menuList), function(item) {
	    return _h('div', {
	      staticClass: ["menu-cell"]
	    }, [_h('div', {
	      staticClass: ["menu-content"]
	    }, [_h('image', {
	      staticStyle: {
	        width: "150px",
	        height: "150px"
	      },
	      attrs: {
	        "src": item.src
	      }
	    }), _h('text', {
	      staticClass: ["menu-content-text"]
	    }, [_vm._s(item.content)])])])
	  })]), _h('div', {
	    staticClass: ["bar"]
	  }), _h('div', {
	    staticClass: ["article"]
	  }, [_vm._m(0), _vm._l((_vm.cardList), function(item) {
	    return _h('div', {
	      staticClass: ["article-card"]
	    }, [_h('text', {
	      staticClass: ["article-content"]
	    }, [_vm._s(item.content)]), _h('div', {
	      staticClass: ["article-info"]
	    }, [_h('text', [_vm._s(item.type)]), _h('text', {
	      staticClass: ["article-date"]
	    }, [_vm._s(item.date)])])])
	  })]), _h('tabbar')])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["article-header"]
	  }, [_h('text', {
	    staticClass: ["article-header-text"]
	  }, ["最新资讯"])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(24)
	)

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(26)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\pages\\search.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "input": {
	    "width": 600,
	    "height": 80,
	    "marginTop": 50,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "fontSize": 36,
	    "color": "#666666",
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#CCCCCC"
	  },
	  "button": {
	    "width": 600,
	    "height": 80,
	    "marginTop": 50,
	    "borderRadius": 15,
	    "backgroundColor": "#FF3E33",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "button-text": {
	    "fontSize": 36,
	    "color": "#ffffff"
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navigator = __webpack_require__(10);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _tabbar = __webpack_require__(14);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	exports.default = {
	    components: { Navigator: _navigator2.default, Tabbar: _tabbar2.default },
	    data: function data() {
	        return {
	            username: '',
	            password: ''
	        };
	    },
	    methods: {
	        login: function login() {
	            modal.toast({
	                message: '登陆成功',
	                duration: 1
	            });
	        }
	    }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_h('navigator', {
	    attrs: {
	      "title": "Search"
	    }
	  }), _h('div', {
	    staticClass: ["wrapper"]
	  }, [_h('input', {
	    ref: "username",
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入用户名",
	      "value": (_vm.username)
	    },
	    on: {
	      "input": function($event) {
	        _vm.username = $event.target.attr.value
	      }
	    }
	  }, [_h('input', {
	    ref: "password",
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入密码",
	      "value": (_vm.password)
	    },
	    on: {
	      "input": function($event) {
	        _vm.password = $event.target.attr.value
	      }
	    }
	  }, [_h('div', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.login
	    }
	  }, [_h('text', {
	    staticClass: ["button-text"]
	  }, ["登陆"])])])])]), _h('tabbar')])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(28)
	)

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\pages\\consult.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "flexDirection": "column",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "item": {
	    "width": 750,
	    "height": 120,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#DDDDDD",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "itemtext": {
	    "width": 600,
	    "fontSize": 32
	  },
	  "righticon": {
	    "marginRight": 20,
	    "fontSize": 32,
	    "color": "#AAAAAA"
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navigator = __webpack_require__(10);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _tabbar = __webpack_require__(14);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { Navigator: _navigator2.default, Tabbar: _tabbar2.default }
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_h('navigator', {
	    attrs: {
	      "title": "Consult"
	    }
	  }), _vm._m(0), _h('tabbar')])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["wrapper"]
	  }, [_h('div', {
	    staticClass: ["item"]
	  }, [_h('img', {
	    staticStyle: {
	      width: "46px",
	      height: "46px",
	      marginLeft: "20px"
	    },
	    attrs: {
	      "src": "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png"
	    }
	  }, [_h('text', {
	    staticClass: ["itemtext"]
	  }, ["客服 1"]), _h('text', {
	    staticClass: ["righticon"]
	  }, [">"])])]), _h('div', {
	    staticClass: ["item"]
	  }, [_h('img', {
	    staticStyle: {
	      width: "46px",
	      height: "46px",
	      marginLeft: "20px"
	    },
	    attrs: {
	      "src": "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png"
	    }
	  }, [_h('text', {
	    staticClass: ["itemtext"]
	  }, ["客服 2"]), _h('text', {
	    staticClass: ["righticon"]
	  }, [">"])])]), _h('div', {
	    staticClass: ["item"]
	  }, [_h('img', {
	    staticStyle: {
	      width: "46px",
	      height: "46px",
	      marginLeft: "20px"
	    },
	    attrs: {
	      "src": "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png"
	    }
	  }, [_h('text', {
	    staticClass: ["itemtext"]
	  }, ["客服 3"]), _h('text', {
	    staticClass: ["righticon"]
	  }, [">"])])])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vuex = __webpack_require__(32);

	var _vuex2 = _interopRequireDefault(_vuex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (WXEnvironment.platform !== 'Web') {
	  Vue.use(_vuex2.default);
	} // import Vue from 'vue'


	var store = new _vuex2.default.Store({
	  state: {},

	  getters: {
	    // ids of the items that should be currently displayed based on
	    // current list type and current pagination
	    activeIds: function activeIds(state) {
	      var activeType = state.activeType,
	          lists = state.lists,
	          counts = state.counts;

	      return activeType ? lists[activeType].slice(0, counts[activeType]) : [];
	    },


	    // items that should be currently displayed.
	    // this Array may not be fully fetched.
	    activeItems: function activeItems(state, getters) {
	      return getters.activeIds.map(function (id) {
	        return state.items[id];
	      }).filter(function (_) {
	        return _;
	      });
	    }
	  }
	});

	exports.default = store;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.1.1
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, (function () { 'use strict';

	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__

	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }

	  store._devtoolHook = devtoolHook

	  devtoolHook.emit('vuex:init', store)

	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState)
	  })

	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state)
	  })
	}

	function applyMixin (Vue) {
	  var version = Number(Vue.version.split('.')[0])

	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};

	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit
	      _init.call(this, options)
	    }
	  }

	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */

	  function vuexInit () {
	    var options = this.$options
	    // store injection
	    if (options.store) {
	      this.$store = options.store
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store
	    }
	  }
	}

	var mapState = normalizeNamespace(function (namespace, states) {
	  var res = {}
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    res[key] = function mappedState () {
	      var state = this.$store.state
	      var getters = this.$store.getters
	      if (namespace) {
	        var module = this.$store._modulesNamespaceMap[namespace]
	        if (!module) {
	          warnNamespace('mapState', namespace)
	          return
	        }
	        state = module.state
	        getters = module.context.getters
	      }
	      return typeof val === 'function'
	        ? val.call(this, state, getters)
	        : state[val]
	    }
	  })
	  return res
	})

	var mapMutations = normalizeNamespace(function (namespace, mutations) {
	  var res = {}
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})

	var mapGetters = normalizeNamespace(function (namespace, getters) {
	  var res = {}
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val
	    res[key] = function mappedGetter () {
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val))
	      }
	      return this.$store.getters[val]
	    }
	  })
	  return res
	})

	var mapActions = normalizeNamespace(function (namespace, actions) {
	  var res = {}
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;

	    val = namespace + val
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];

	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	})

	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}

	function normalizeNamespace (fn) {
	  return function (namespace, map) {
	    if (typeof namespace !== 'string') {
	      map = namespace
	      namespace = ''
	    } else if (namespace.charAt(namespace.length - 1) !== '/') {
	      namespace += '/'
	    }
	    return fn(namespace, map)
	  }
	}

	function warnNamespace (helper, namespace) {
	  console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace))
	}

	/**
	 * forEach for object
	 */
	function forEachValue (obj, fn) {
	  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); })
	}

	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}

	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}

	var Module = function Module (rawModule, runtime) {
	  this.runtime = runtime
	  this._children = Object.create(null)
	  this._rawModule = rawModule
	};

	var prototypeAccessors$1 = { state: {},namespaced: {} };

	prototypeAccessors$1.state.get = function () {
	  return this._rawModule.state || {}
	};

	prototypeAccessors$1.namespaced.get = function () {
	  return !!this._rawModule.namespaced
	};

	Module.prototype.addChild = function addChild (key, module) {
	  this._children[key] = module
	};

	Module.prototype.removeChild = function removeChild (key) {
	  delete this._children[key]
	};

	Module.prototype.getChild = function getChild (key) {
	  return this._children[key]
	};

	Module.prototype.update = function update (rawModule) {
	  this._rawModule.namespaced = rawModule.namespaced
	  if (rawModule.actions) {
	    this._rawModule.actions = rawModule.actions
	  }
	  if (rawModule.mutations) {
	    this._rawModule.mutations = rawModule.mutations
	  }
	  if (rawModule.getters) {
	    this._rawModule.getters = rawModule.getters
	  }
	};

	Module.prototype.forEachChild = function forEachChild (fn) {
	  forEachValue(this._children, fn)
	};

	Module.prototype.forEachGetter = function forEachGetter (fn) {
	  if (this._rawModule.getters) {
	    forEachValue(this._rawModule.getters, fn)
	  }
	};

	Module.prototype.forEachAction = function forEachAction (fn) {
	  if (this._rawModule.actions) {
	    forEachValue(this._rawModule.actions, fn)
	  }
	};

	Module.prototype.forEachMutation = function forEachMutation (fn) {
	  if (this._rawModule.mutations) {
	    forEachValue(this._rawModule.mutations, fn)
	  }
	};

	Object.defineProperties( Module.prototype, prototypeAccessors$1 );

	var ModuleCollection = function ModuleCollection (rawRootModule) {
	  var this$1 = this;

	  // register root module (Vuex.Store options)
	  this.root = new Module(rawRootModule, false)

	  // register all nested modules
	  if (rawRootModule.modules) {
	    forEachValue(rawRootModule.modules, function (rawModule, key) {
	      this$1.register([key], rawModule, false)
	    })
	  }
	};

	ModuleCollection.prototype.get = function get (path) {
	  return path.reduce(function (module, key) {
	    return module.getChild(key)
	  }, this.root)
	};

	ModuleCollection.prototype.getNamespace = function getNamespace (path) {
	  var module = this.root
	  return path.reduce(function (namespace, key) {
	    module = module.getChild(key)
	    return namespace + (module.namespaced ? key + '/' : '')
	  }, '')
	};

	ModuleCollection.prototype.update = function update$1 (rawRootModule) {
	  update(this.root, rawRootModule)
	};

	ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
	    var this$1 = this;
	    if ( runtime === void 0 ) runtime = true;

	  var parent = this.get(path.slice(0, -1))
	  var newModule = new Module(rawModule, runtime)
	  parent.addChild(path[path.length - 1], newModule)

	  // register nested modules
	  if (rawModule.modules) {
	    forEachValue(rawModule.modules, function (rawChildModule, key) {
	      this$1.register(path.concat(key), rawChildModule, runtime)
	    })
	  }
	};

	ModuleCollection.prototype.unregister = function unregister (path) {
	  var parent = this.get(path.slice(0, -1))
	  var key = path[path.length - 1]
	  if (!parent.getChild(key).runtime) { return }

	  parent.removeChild(key)
	};

	function update (targetModule, newModule) {
	  // update target module
	  targetModule.update(newModule)

	  // update nested modules
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!targetModule.getChild(key)) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        )
	        return
	      }
	      update(targetModule.getChild(key), newModule.modules[key])
	    }
	  }
	}

	var Vue // bind on install

	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};

	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")

	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;

	  // store internal state
	  this._committing = false
	  this._actions = Object.create(null)
	  this._mutations = Object.create(null)
	  this._wrappedGetters = Object.create(null)
	  this._modules = new ModuleCollection(options)
	  this._modulesNamespaceMap = Object.create(null)
	  this._subscribers = []
	  this._watcherVM = new Vue()

	  // bind commit and dispatch to self
	  var store = this
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	    this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	  }
	  this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	    }

	    // strict mode
	  this.strict = strict

	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], this._modules.root)

	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state)

	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
	};

	var prototypeAccessors = { state: {} };

	prototypeAccessors.state.get = function () {
	  return this._vm.$data.state
	};

	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.")
	};

	Store.prototype.commit = function commit (_type, _payload, _options) {
	    var this$1 = this;

	  // check object-style commit
	  var ref = unifyObjectStyle(_type, _payload, _options);
	    var type = ref.type;
	    var payload = ref.payload;
	    var options = ref.options;

	  var mutation = { type: type, payload: payload }
	  var entry = this._mutations[type]
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type))
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload)
	    })
	  })
	  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })

	  if (options && options.silent) {
	    console.warn(
	      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
	      'Use the filter functionality in the vue-devtools'
	    )
	  }
	};

	Store.prototype.dispatch = function dispatch (_type, _payload) {
	  // check object-style dispatch
	  var ref = unifyObjectStyle(_type, _payload);
	    var type = ref.type;
	    var payload = ref.payload;

	  var entry = this._actions[type]
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type))
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};

	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn)
	  }
	  return function () {
	    var i = subs.indexOf(fn)
	    if (i > -1) {
	      subs.splice(i, 1)
	    }
	  }
	};

	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;

	  assert(typeof getter === 'function', "store.watch only accepts a function.")
	  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
	};

	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;

	  this._withCommit(function () {
	    this$1._vm.state = state
	  })
	};

	Store.prototype.registerModule = function registerModule (path, rawModule) {
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	  this._modules.register(path, rawModule)
	  installModule(this, this.state, path, this._modules.get(path))
	  // reset store to update getters...
	  resetStoreVM(this, this.state)
	};

	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;

	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	    this._modules.unregister(path)
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1))
	    Vue.delete(parentState, path[path.length - 1])
	  })
	  resetStore(this)
	};

	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  this._modules.update(newOptions)
	  resetStore(this)
	};

	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing
	  this._committing = true
	  fn()
	  this._committing = committing
	};

	Object.defineProperties( Store.prototype, prototypeAccessors );

	function resetStore (store) {
	  store._actions = Object.create(null)
	  store._mutations = Object.create(null)
	  store._wrappedGetters = Object.create(null)
	  store._modulesNamespaceMap = Object.create(null)
	  var state = store.state
	  // init all modules
	  installModule(store, state, [], store._modules.root, true)
	  // reset vm
	  resetStoreVM(store, state)
	}

	function resetStoreVM (store, state) {
	  var oldVm = store._vm

	  // bind store public getters
	  store.getters = {}
	  var wrappedGetters = store._wrappedGetters
	  var computed = {}
	  forEachValue(wrappedGetters, function (fn, key) {
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); }
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; },
	      enumerable: true // for local getters
	    })
	  })

	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent
	  Vue.config.silent = true
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  })
	  Vue.config.silent = silent

	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store)
	  }

	  if (oldVm) {
	    // dispatch changes in all subscribed watchers
	    // to force getter re-evaluation.
	    store._withCommit(function () {
	      oldVm.state = null
	    })
	    Vue.nextTick(function () { return oldVm.$destroy(); })
	  }
	}

	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length
	  var namespace = store._modules.getNamespace(path)

	  // register in namespace map
	  if (namespace) {
	    store._modulesNamespaceMap[namespace] = module
	  }

	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1))
	    var moduleName = path[path.length - 1]
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, module.state)
	    })
	  }

	  var local = module.context = makeLocalContext(store, namespace)

	  module.forEachMutation(function (mutation, key) {
	    var namespacedType = namespace + key
	    registerMutation(store, namespacedType, mutation, path)
	  })

	  module.forEachAction(function (action, key) {
	    var namespacedType = namespace + key
	    registerAction(store, namespacedType, action, local, path)
	  })

	  module.forEachGetter(function (getter, key) {
	    var namespacedType = namespace + key
	    registerGetter(store, namespacedType, getter, local, path)
	  })

	  module.forEachChild(function (child, key) {
	    installModule(store, rootState, path.concat(key), child, hot)
	  })
	}

	/**
	 * make localized dispatch, commit and getters
	 * if there is no namespace, just use root ones
	 */
	function makeLocalContext (store, namespace) {
	  var noNamespace = namespace === ''

	  var local = {
	    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._actions[type]) {
	          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }

	      return store.dispatch(type, payload)
	    },

	    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
	      var args = unifyObjectStyle(_type, _payload, _options)
	      var payload = args.payload;
	      var options = args.options;
	      var type = args.type;

	      if (!options || !options.root) {
	        type = namespace + type
	        if (!store._mutations[type]) {
	          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type))
	          return
	        }
	      }

	      store.commit(type, payload, options)
	    }
	  }

	  // getters object must be gotten lazily
	  // because store.getters will be changed by vm update
	  Object.defineProperty(local, 'getters', {
	    get: noNamespace ? function () { return store.getters; } : function () { return makeLocalGetters(store, namespace); }
	  })

	  return local
	}

	function makeLocalGetters (store, namespace) {
	  var gettersProxy = {}

	  var splitPos = namespace.length
	  Object.keys(store.getters).forEach(function (type) {
	    // skip if the target getter is not match this namespace
	    if (type.slice(0, splitPos) !== namespace) { return }

	    // extract local getter type
	    var localType = type.slice(splitPos)

	    // Add a port to the getters proxy.
	    // Define as getter property because
	    // we do not want to evaluate the getters in this time.
	    Object.defineProperty(gettersProxy, localType, {
	      get: function () { return store.getters[type]; },
	      enumerable: true
	    })
	  })

	  return gettersProxy
	}

	function registerMutation (store, type, handler, path) {
	  var entry = store._mutations[type] || (store._mutations[type] = [])
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(getNestedState(store.state, path), payload)
	  })
	}

	function registerAction (store, type, handler, local, path) {
	  var entry = store._actions[type] || (store._actions[type] = [])
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: local.dispatch,
	      commit: local.commit,
	      getters: local.getters,
	      state: getNestedState(store.state, path),
	      rootGetters: store.getters,
	      rootState: store.state
	    }, payload, cb)
	    if (!isPromise(res)) {
	      res = Promise.resolve(res)
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err)
	        throw err
	      })
	    } else {
	      return res
	    }
	  })
	}

	function registerGetter (store, type, rawGetter, local, path) {
	  if (store._wrappedGetters[type]) {
	    console.error(("[vuex] duplicate getter key: " + type))
	    return
	  }
	  store._wrappedGetters[type] = function wrappedGetter (store) {
	    return rawGetter(
	      getNestedState(store.state, path), // local state
	      local.getters, // local getters
	      store.state, // root state
	      store.getters // root getters
	    )
	  }
	}

	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
	  }, { deep: true, sync: true })
	}

	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}

	function unifyObjectStyle (type, payload, options) {
	  if (isObject(type) && type.type) {
	    options = payload
	    payload = type
	    type = type.type
	  }
	  return { type: type, payload: payload, options: options }
	}

	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    )
	    return
	  }
	  Vue = _Vue
	  applyMixin(Vue)
	}

	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue)
	}

	var index = {
	  Store: Store,
	  install: install,
	  version: '2.1.1',
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	}

	return index;

	})));

/***/ },
/* 33 */
/***/ function(module, exports) {

	exports.sync = function (store, router, options) {
	  var moduleName = (options || {}).moduleName || 'route'

	  store.registerModule(moduleName, {
	    state: cloneRoute(router.currentRoute),
	    mutations: {
	      'router/ROUTE_CHANGED': function (state, transition) {
	        store.state[moduleName] = cloneRoute(transition.to, transition.from)
	      }
	    }
	  })

	  var isTimeTraveling = false
	  var currentPath

	  // sync router on store change
	  store.watch(
	    function (state) { return state[moduleName] },
	    function (route) {
	      if (route.fullPath === currentPath) {
	        return
	      }
	      isTimeTraveling = true
	      currentPath = route.fullPath
	      router.push(route)
	    },
	    { sync: true }
	  )

	  // sync store on router navigation
	  router.afterEach(function (to, from) {
	    if (isTimeTraveling) {
	      isTimeTraveling = false
	      return
	    }
	    currentPath = to.fullPath
	    store.commit('router/ROUTE_CHANGED', { to: to, from: from })
	  })
	}

	function cloneRoute (to, from) {
	  var clone = {
	    name: to.name,
	    path: to.path,
	    hash: to.hash,
	    query: to.query,
	    params: to.params,
	    fullPath: to.fullPath,
	    meta: to.meta
	  }
	  if (from) {
	    clone.from = cloneRoute(from)
	  }
	  return Object.freeze(clone)
	}


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.host = host;
	exports.https = https;
	exports.timeAgo = timeAgo;
	exports.unescape = unescape;
	function host(url) {
	  if (!url) return '';
	  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
	  var parts = host.split('.').slice(-3);
	  if (parts[0] === 'www') parts.shift();
	  return parts.join('.');
	}

	function https(url) {
	  if (WXEnvironment.platform === 'iOS' && typeof url === 'string') {
	    return url.replace(/^http\:/, 'https:');
	  }
	  return '';
	}

	function timeAgo(time) {
	  var between = Date.now() / 1000 - Number(time);
	  if (between < 3600) {
	    return pluralize(~~(between / 60), ' minute');
	  } else if (between < 86400) {
	    return pluralize(~~(between / 3600), ' hour');
	  } else {
	    return pluralize(~~(between / 86400), ' day');
	  }
	}

	function pluralize(time, label) {
	  if (time === 1) {
	    return time + label;
	  }
	  return time + label + 's';
	}

	function unescape(text) {
	  var res = text || '';
	  [['<p>', '\n'], ['&amp;', '&'], ['&amp;', '&'], ['&apos;', '\''], ['&#x27;', '\''], ['&#x2F;', '/'], ['&#39;', '\''], ['&#47;', '/'], ['&lt;', '<'], ['&gt;', '>'], ['&nbsp;', ' '], ['&quot;', '"']].forEach(function (pair) {
	    res = res.replace(new RegExp(pair[0], 'ig'), pair[1]);
	  });

	  return res;
	}

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      certType: [{
	        id: 1,
	        name: '居民身份证'
	      }, {
	        id: 2,
	        name: '军官证'
	      }, {
	        id: 3,
	        name: '士兵证'
	      }, {
	        id: 4,
	        name: '警官证'
	      }, {
	        id: 5,
	        name: '港澳台居民身份证'
	      }, {
	        id: 6,
	        name: '护照'
	      }, {
	        id: 7,
	        name: '户口簿'
	      }, {
	        id: 99,
	        name: '其他'
	      }],
	      djjg: [{ name: '县级', tips: true }, { id: '111', name: '县长', tips: false }, { name: '镇级', tips: true }, { id: '111', name: '镇长', tips: false }],
	      xfcy: [{ id: '112', name: '投诉', tips: false }, { id: '111', name: '建议', tips: false }],
	      xfmd: [{ id: '115', name: '玩', tips: false }, { id: '116', name: '吃', tips: false }]
	    };
	  },

	  methods: {
	    replace: function replace(to) {
	      if (this.$router) {
	        this.$router.replace(to);
	      }
	    },
	    push: function push(to) {
	      if (this.$router) {
	        this.$router.push(to);
	      }
	    },
	    go: function go(n) {
	      if (this.$router) {
	        this.$router.go(n);
	      }
	    }
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(37)
	)

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(39)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\pages\\rule.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  "main": {
	    "flex": 1,
	    "justifyContent": "space-between"
	  },
	  "text": {
	    "lineHeight": 56,
	    "fontSize": 36,
	    "fontFamily": "'Mircosoft YaHei'"
	  },
	  "h2": {
	    "marginBottom": 20
	  },
	  "bottom-bar": {
	    "position": "absolute",
	    "bottom": 0,
	    "height": 140,
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "button": {
	    "borderColor": "#F2473D",
	    "borderRadius": 15,
	    "width": 500,
	    "height": 90,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "accept-btn": {
	    "borderColor": "#FF0000"
	  },
	  "content": {
	    "paddingTop": 20,
	    "paddingLeft": 20,
	    "paddingRight": 20
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _navigator = __webpack_require__(10);

	var _navigator2 = _interopRequireDefault(_navigator);

	var _tabbar = __webpack_require__(14);

	var _tabbar2 = _interopRequireDefault(_tabbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: { Navigator: _navigator2.default, Tabbar: _tabbar2.default },
	    data: function data() {
	        return {
	            space: '    ',
	            initTime: 5,
	            acceptBtnColor: '#DDD',
	            textColor: '#000',
	            accepted: false
	        };
	    },
	    methods: {
	        divHide: function divHide() {
	            if (this.initTime == 0) {
	                this.$router.push('write');
	            }
	        },
	        countdown: function countdown() {
	            var that = this;
	            if (this.initTime > 0) {
	                var timer = setInterval(function () {
	                    if (that.initTime > 0) {
	                        that.initTime--;
	                        if (that.initTime == 0) {
	                            clearInterval(timer);
	                            that.acceptBtnColor = "#F00";
	                            that.textColor = '#FFF';
	                            return;
	                        }
	                    }
	                }, 1000);
	            } else {
	                this.initTime = 0;
	                this.acceptBtnColor = "#F00";
	                this.textColor = '#FFF';
	                return;
	            }
	        }
	    },
	    mounted: function mounted() {
	        this.countdown();
	    }
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["page-wrapper"]
	  }, [_h('navigator', {
	    attrs: {
	      "title": "我要写信",
	      "leftItem": true
	    }
	  }), _h('scroller', {
	    staticClass: ["main"]
	  }, [(!_vm.accepted) ? _h('div', {
	    staticClass: ["content"]
	  }, [_h('text', {
	    staticClass: ["text"],
	    staticStyle: {
	      fontSize: "44px",
	      marginBottom: "40px",
	      fontWeight: "bold"
	    }
	  }, ["上 网 须 知"]), _h('text', {
	    staticClass: ["text"],
	    staticStyle: {
	      marginBottom: "40px"
	    }
	  }, [_vm._s(_vm.space) + "在1950年代，通信研究者认识到需要允许在不同计算机用户和通信网络之间进行常规的通信。这促使了分散网络、排队论和封包交换的研究。1960年美国国防部国防前沿研究项目署（ARPA）出于冷战考虑建立的ARPA网引发了技术进步并使其成为互联网发展的中心。1973年ARPA网扩展成互联网，第一批接入的有英国和挪威计算机。 "])]) : _vm._e()]), (!_vm.accepted) ? _h('div', {
	    staticClass: ["bottom-bar"],
	    on: {
	      "click": _vm.divHide
	    }
	  }, [_h('div', {
	    staticClass: ["button", "accept-btn"],
	    style: {
	      backgroundColor: _vm.acceptBtnColor
	    }
	  }, [_h('text', {
	    style: {
	      color: _vm.textColor
	    }
	  }, [_vm._s(_vm.initTime ? _vm.initTime + '秒' : '同意')])])]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(41)
	)

	/* script */
	__vue_exports__ = __webpack_require__(42)

	/* template */
	var __vue_template__ = __webpack_require__(43)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\weex\\weex-demo\\src\\pages\\write.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	for (var name in module) {
	__vue_options__.style[name] = module[name]
	}
	})

	module.exports = __vue_exports__


/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = {
	  "main": {
	    "flex": 1,
	    "justifyContent": "space-between"
	  },
	  "topmenu": {
	    "position": "sticky",
	    "width": 750,
	    "height": 70,
	    "backgroundColor": "#FFFFFF",
	    "flexDirection": "row"
	  },
	  "topmenu-btn": {
	    "width": 375,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "topmenu-selected": {
	    "borderBottomColor": "#50891e",
	    "borderBottomWidth": 3
	  },
	  "topmenu-text": {
	    "color": "#333333",
	    "fontSize": 32,
	    "fontFamily": "'Mircosoft YaHei'"
	  },
	  "infoitem": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "paddingTop": 40,
	    "paddingBottom": 40,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#EEEEEE"
	  },
	  "selectitem": {
	    "width": 750,
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "paddingTop": 40,
	    "paddingBottom": 40,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#EEEEEE"
	  },
	  "addressitem": {
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#EEEEEE"
	  },
	  "label": {
	    "width": 200,
	    "justifyContent": "center"
	  },
	  "itemname": {
	    "fontSize": 32,
	    "fontFamily": "'Mircosoft YaHei'"
	  },
	  "input": {
	    "width": 500,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "backgroundColor": "#FFFFFF"
	  },
	  "validate-input": {
	    "width": 250,
	    "paddingLeft": 20,
	    "paddingRight": 20,
	    "backgroundColor": "#FFFFFF"
	  },
	  "validate-div": {
	    "borderWidth": 1,
	    "borderColor": "#CCCCCC",
	    "padding": 20,
	    "backgroundColor": "#FFFFFF"
	  },
	  "textarea": {
	    "width": 700,
	    "padding": 20
	  },
	  "button-wrapper": {
	    "width": 750,
	    "height": 150,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "button": {
	    "width": 660,
	    "paddingTop": 30,
	    "paddingBottom": 30,
	    "fontSize": 32,
	    "backgroundColor": "#50891e",
	    "borderRadius": 3,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "side-page": {
	    "position": "absolute",
	    "top": 80,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "flexDirection": "row"
	  },
	  "mask": {
	    "width": 250
	  },
	  "mask-content": {
	    "flex": 1,
	    "backgroundColor": "rgba(0,0,0,0.2)"
	  },
	  "sidebar": {
	    "width": 500,
	    "borderWidth": 2,
	    "borderColor": "#CCCCCC"
	  },
	  "sidebar-list": {
	    "flex": 1,
	    "backgroundColor": "#FFFFFF"
	  },
	  "sidebar-header": {
	    "padding": 40,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "sidebar-header-text": {
	    "fontSize": 40
	  },
	  "sidebar-tips": {
	    "padding": 10,
	    "justifyContent": "center",
	    "backgroundColor": "#F8F8F8"
	  },
	  "sidebar-tips-text": {
	    "color": "#BBBBBB",
	    "fontSize": 36
	  },
	  "sidebar-cell": {
	    "padding": 20,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#EEEEEE"
	  },
	  "sidebar-cell-text": {
	    "fontSize": 36
	  },
	  "switch-wrapper": {
	    "width": 100,
	    "alignItems": "center",
	    "justifyContent": "center"
	  }
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _navigator = __webpack_require__(10);

	var _navigator2 = _interopRequireDefault(_navigator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var modal = weex.requireModule('modal'); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var picker = weex.requireModule('picker');
	var stream = weex.requireModule('stream');
	exports.default = {
	  components: { Navigator: _navigator2.default },
	  data: function data() {
	    return {
	      space: '  ',
	      page: 1,
	      time: 0,
	      certName: '请选择',
	      xfcyName: '请选择',
	      xfmdName: '请选择',
	      djjgName: '请选择',
	      showSidebar: false,
	      sidebarHeader: '请选择',
	      sidebarList: [],
	      verificationCode: '',
	      forChecking: '', //二维码容器，用于验证
	      inputData: {
	        name: '',
	        phone: '',
	        verifyCode: '',
	        num: '',
	        sjrs: '',
	        certType: 1,
	        certNum: '',
	        contactAddress: '',
	        topic: '',
	        djjgdm: '',
	        xfcy: '',
	        xfmd: '',
	        content: '',
	        isOpen: '0',
	        subtype: 'android',
	        attacImgs: ''
	      },
	      inputStyle: {
	        name: false,
	        phone: false,
	        verifyCode: false,
	        num: false,
	        sjrs: false,
	        certType: false,
	        certNum: false,
	        contactAddress: false,
	        topic: false,
	        content: false,
	        djjgdm: false,
	        xfcy: false,
	        xfmd: false
	      },
	      result: {
	        name: '',
	        topic: '',
	        code: '',
	        phone: ''
	      }
	    };
	  },
	  methods: {
	    nameBlur: function nameBlur(e) {
	      var r = /^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/;
	      this.inputStyle.name = r.test(this.inputData.name);
	      if (!this.inputStyle.name && this.inputData.name.length) {
	        modal.toast({ message: '请输入中文姓名', duration: 0.5 });
	      }
	    },
	    getValidate: function getValidate() {
	      var r = new RegExp(/^1[0-9]{10}$/);
	      if (r.test(this.inputData.phone)) {
	        modal.toast({ message: '验证码为1234', duration: 1 });
	        this.time = 3;
	        this.countdown();
	      } else {
	        modal.toast({ message: '请输入正确的手机号码', duration: 0.5 });
	      }
	    },
	    phoneBlur: function phoneBlur(e) {
	      var r = new RegExp(/^1[0-9]{10}$/);
	      this.inputStyle.phone = r.test(this.inputData.phone);
	    },
	    verifyCodeBlur: function verifyCodeBlur(e) {
	      var r = new RegExp(/^[0-9]{4}$/);
	      this.inputStyle.verifyCode = r.test(this.inputData.verifyCode);
	    },
	    numBlur: function numBlur(e) {
	      var r = new RegExp(/^\d{1,8}$/);
	      this.inputStyle.num = r.test(this.inputData.num);
	      if (!this.inputStyle.num && this.inputData.num.length) {
	        modal.toast({ message: '请输入正确的信访人数', duration: 0.5 });
	      }
	    },
	    sjrsBlur: function sjrsBlur(e) {
	      var r = new RegExp(/^\d{1,8}$/);
	      this.inputStyle.sjrs = r.test(this.inputData.sjrs);
	      if (!this.inputStyle.sjrs && this.inputData.sjrs.length) {
	        modal.toast({ message: '请输入正确的涉及人数', duration: 0.5 });
	      }
	    },
	    certNumBlur: function certNumBlur(e) {
	      var that = this;
	      var validate = true;
	      var r = new RegExp(/^\d{1,20}$/);
	      var isIDCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	      if (this.inputData.certType == 1) {
	        //身份证
	        if (!isIDCard.test(this.inputData.certNum) && this.inputData.certNum.length) {
	          validate = false;
	          modal.toast({ message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684' + that.certName + '\u53F7\u7801', duration: 0.5 });
	        }
	      } else {
	        //非身份证
	        if (!r.test(this.inputData.certNum) && this.inputData.certNum.length) {
	          validate = false;
	          modal.toast({ message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684' + that.certName + '\u53F7\u7801', duration: 0.5 });
	        }
	      }
	      this.inputStyle.certNum = validate;
	    },
	    addressBlur: function addressBlur(e) {
	      var r = new RegExp(/^\w{5,}$/);
	      this.inputStyle.contactAddress = r.test(this.inputData.contactAddress);
	      if (!r.test(this.inputData.contactAddress) && this.inputData.contactAddress.length) {
	        modal.toast({ message: '请输入不少于5个字', duration: 0.5 });
	      }
	    },
	    countdown: function countdown() {
	      var _this = this;

	      if (this.time > 0) {
	        var timer = setInterval(function () {
	          if (_this.time > 0) {
	            _this.time--;
	            if (_this.time == 0) {
	              clearInterval(timer);
	              return;
	            }
	          }
	        }, 1000);
	      } else {
	        this.time = 0;
	        return;
	      }
	    },
	    nextPage: function nextPage() {
	      var that = this;
	      if (!this.inputStyle.name) {
	        modal.toast({ message: '请输入中文姓名', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.phone) {
	        modal.toast({ message: '请输入正确的手机号码', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.verifyCode) {
	        modal.toast({ message: '请输入正确的4位验证码', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.num) {
	        modal.toast({ message: '请输入正确的信访人数', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.sjrs) {
	        modal.toast({ message: '请输入正确的涉及人数', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.certType) {
	        modal.toast({ message: '请选择证件类型', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.certNum) {
	        modal.toast({ message: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684' + that.certName + '\u53F7\u7801', duration: 0.5 });
	        return;
	      }
	      this.turnPage(2);
	    },
	    turnPage: function turnPage(index) {
	      this.page = index;
	    },
	    topicBlur: function topicBlur(e) {
	      var r = new RegExp(/^\w+$/);
	      this.inputStyle.topic = r.test(this.inputData.topic);
	    },
	    contentBlur: function contentBlur(e) {
	      var r = new RegExp(/^\w+$/);
	      this.inputStyle.content = r.test(this.inputData.content);
	    },
	    pickCert: function pickCert() {
	      var obj = {};
	      this.sidebarHeader = this.certName;
	      this.sidebarList = [];
	      for (var i = 0; i < this.certType.length; i++) {
	        obj = {};
	        obj.id = this.certType[i].id;
	        obj.content = this.certType[i].name;
	        obj.tips = false;
	        obj.idType = 'certType';
	        obj.nameType = 'certName';
	        this.sidebarList.push(obj);
	      }
	      this.showSidebar = true;
	    },
	    pickDjjg: function pickDjjg() {
	      var _this2 = this;

	      var obj = {};
	      this.sidebarHeader = this.djjgName;
	      this.sidebarList = [];
	      if (this.djjg.length) {
	        for (var i = 0; i < this.djjg.length; i++) {
	          //tips部分
	          obj = {};
	          obj.content = this.djjg[i].typeName;
	          obj.tips = true;
	          this.sidebarList.push(obj);
	          for (var j = 0; j < this.djjg[i].list.length; j++) {
	            obj = {};
	            obj.id = this.djjg[i].list[j].depId;
	            obj.content = this.djjg[i].list[j].depName;
	            obj.tips = false;
	            obj.idType = 'djjgdm';
	            obj.nameType = 'djjgName';
	            this.sidebarList.push(obj);
	          }
	        }
	        this.showSidebar = true;
	      } else {
	        var pid = 123;
	        var dt = "";
	        this.sendJson(pid, dt, function (data) {
	          _this2.djjg = data;
	          for (var i = 0; i < _this2.djjg.length; i++) {
	            //tips部分
	            obj = {};
	            obj.content = _this2.djjg[i].typeName;
	            obj.tips = true;
	            _this2.sidebarList.push(obj);
	            for (var j = 0; j < _this2.djjg[i].list.length; j++) {
	              obj = {};
	              obj.id = _this2.djjg[i].list[j].depId;
	              obj.content = _this2.djjg[i].list[j].depName;
	              obj.tips = false;
	              obj.idType = 'djjgdm';
	              obj.nameType = 'djjgName';
	              _this2.sidebarList.push(obj);
	            }
	          }
	          _this2.showSidebar = true;
	        });
	      }
	    },
	    pickXfcy: function pickXfcy() {
	      var _this3 = this;

	      var obj = {};
	      this.sidebarHeader = this.xfcyName;
	      this.sidebarList = [];
	      if (this.xfcy.length) {
	        for (var i = 0; i < this.xfcy.length; i++) {
	          obj = {};
	          obj.id = this.xfcy[i].id;
	          obj.content = this.xfcy[i].name;
	          obj.tips = false;
	          obj.idType = 'xfcy';
	          obj.nameType = 'xfcyName';
	          this.sidebarList.push(obj);
	        }
	        this.showSidebar = true;
	      } else {
	        var pid = 124;
	        var dt = "";
	        this.sendJson(pid, dt, function (data) {
	          _this3.xfcy = data;
	          for (var i = 0; i < _this3.xfcy.length; i++) {
	            obj = {};
	            obj.id = _this3.xfcy[i].id;
	            obj.content = _this3.xfcy[i].name;
	            obj.tips = false;
	            obj.idType = 'xfcy';
	            obj.nameType = 'xfcyName';
	            _this3.sidebarList.push(obj);
	          }
	          _this3.showSidebar = true;
	        });
	      }
	    },
	    pickXfmd: function pickXfmd() {
	      var _this4 = this;

	      var obj = {};
	      this.sidebarHeader = this.xfcyName;
	      this.sidebarList = [];
	      if (this.xfmd.length) {
	        for (var i = 0; i < this.xfmd.length; i++) {
	          obj = {};
	          obj.id = this.xfmd[i].id;
	          obj.content = this.xfmd[i].name;
	          obj.tips = false;
	          obj.idType = 'xfmd';
	          obj.nameType = 'xfmdName';
	          this.sidebarList.push(obj);
	        }
	        this.showSidebar = true;
	      } else {
	        var pid = 125;
	        var dt = "";
	        this.sendJson(pid, dt, function (data) {
	          _this4.xfmd = data;
	          for (var i = 0; i < _this4.xfmd.length; i++) {
	            obj = {};
	            obj.id = _this4.xfmd[i].id;
	            obj.content = _this4.xfmd[i].name;
	            obj.tips = false;
	            obj.idType = 'xfmd';
	            obj.nameType = 'xfmdName';
	            _this4.sidebarList.push(obj);
	          }
	          _this4.showSidebar = true;
	        });
	      }
	    },
	    openChange: function openChange(event) {
	      console.log('onchage, value: ' + event.value);
	      this.inputData.isOpen = event.value ? '1' : '0';
	    },
	    generateVerificationCode: function generateVerificationCode() {
	      var result = Math.floor(1000 + Math.random() * 9000);
	      this.forChecking = result + '';
	    },
	    maskClick: function maskClick() {
	      this.showSidebar = false;
	    },
	    cellClick: function cellClick(item) {
	      console.log(item);
	      if (item.tips) return;
	      this.inputStyle[item.idType] = true;
	      this.inputData[item.idType] = item.id;
	      this[item.nameType] = item.content;
	      this.showSidebar = false;
	    },
	    submit: function submit() {
	      //判断验证码
	      console.log('提交了-----------', this.inputData);
	      var that = this;

	      if (!this.inputStyle.topic) {
	        modal.toast({ message: '请输入主题', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.djjgdm) {
	        modal.toast({ message: '请选择收信信箱', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.xfcy) {
	        modal.toast({ message: '请选择信访原因', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.xfmd) {
	        modal.toast({ message: '请选择信访目的', duration: 0.5 });
	        return;
	      }
	      if (!this.inputStyle.content) {
	        modal.toast({ message: '请填写信件内容', duration: 0.5 });
	        return;
	      }

	      if (this.verificationCode != this.forChecking) {
	        modal.toast({ message: '\u9A8C\u8BC1\u7801\u9519\u8BEF', duration: 0.5 });
	        this.generateVerificationCode();
	        return;
	      }
	      var pid = 132;
	      modal.toast({ message: '\u53D1\u9001\u6210\u529F', duration: 0.5 });
	    }
	  },
	  mounted: function mounted() {
	    this.generateVerificationCode();
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["page-wrapper"]
	  }, [_h('navigator', {
	    attrs: {
	      "title": "我要写信",
	      "leftItem": true
	    }
	  }), _h('scroller', {
	    staticClass: ["main"]
	  }, [(_vm.page == 1) ? _h('div', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_vm._m(0), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(1), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "value": (_vm.inputData.name)
	    },
	    on: {
	      "blur": _vm.nameBlur,
	      "input": function($event) {
	        _vm.inputData.name = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(2), _h('div', {
	    staticStyle: {
	      width: "300px"
	    }
	  }, [_h('input', {
	    staticClass: ["validate-input"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputData.phone)
	    },
	    on: {
	      "blur": _vm.phoneBlur,
	      "input": function($event) {
	        _vm.inputData.phone = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["validate-div"],
	    on: {
	      "click": _vm.getValidate
	    }
	  }, [_h('text', {
	    staticStyle: {
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.time > 0 ? ("请等待" + _vm.time + "秒") : '发送验证码')])])]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(3), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputData.verifyCode)
	    },
	    on: {
	      "blur": _vm.verifyCodeBlur,
	      "input": function($event) {
	        _vm.inputData.verifyCode = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(4), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputData.num)
	    },
	    on: {
	      "blur": _vm.numBlur,
	      "input": function($event) {
	        _vm.inputData.num = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(5), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputData.sjrs)
	    },
	    on: {
	      "blur": _vm.sjrsBlur,
	      "input": function($event) {
	        _vm.inputData.sjrs = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["selectitem"],
	    on: {
	      "click": _vm.pickCert
	    }
	  }, [_vm._m(6), _h('text', {
	    staticStyle: {
	      color: "#CCC",
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.certName)])]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_vm._m(7), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "tel",
	      "value": (_vm.inputData.certNum)
	    },
	    on: {
	      "blur": _vm.certNumBlur,
	      "input": function($event) {
	        _vm.inputData.certNum = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["addressitem"]
	  }, [_h('textarea', {
	    staticClass: ["textarea"],
	    attrs: {
	      "type": "text",
	      "placeholder": "请填写详细地址，不少于5字",
	      "rows": "3",
	      "value": (_vm.inputData.contactAddress)
	    },
	    on: {
	      "blur": _vm.addressBlur,
	      "input": function($event) {
	        _vm.inputData.contactAddress = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["button-wrapper"]
	  }, [_h('div', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.nextPage
	    }
	  }, [_h('text', {
	    staticStyle: {
	      color: "#fff"
	    }
	  }, ["下一步"])])])]) : (_vm.page == 2) ? _h('div', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_h('div', {
	    staticClass: ["topmenu"]
	  }, [_h('div', {
	    staticClass: ["topmenu-btn"],
	    on: {
	      "click": function($event) {
	        _vm.turnPage(1)
	      }
	    }
	  }, [_h('text', {
	    staticClass: ["topmenu-text"]
	  }, ["基本信息"])]), _h('div', {
	    staticClass: ["topmenu-btn", "topmenu-selected"]
	  }, [_h('text', {
	    staticClass: ["topmenu-text"]
	  }, ["事项信息"])])]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["主 题"])]), _h('input', {
	    staticClass: ["input"],
	    attrs: {
	      "type": "text",
	      "value": (_vm.inputData.topic)
	    },
	    on: {
	      "blur": _vm.topicBlur,
	      "input": function($event) {
	        _vm.inputData.topic = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["selectitem"],
	    on: {
	      "click": _vm.pickDjjg
	    }
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["收信信箱"])]), _h('text', {
	    staticStyle: {
	      color: "#CCC",
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.djjgName)])]), _h('div', {
	    staticClass: ["selectitem"],
	    on: {
	      "click": _vm.pickXfcy
	    }
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["原因"])]), _h('text', {
	    staticStyle: {
	      color: "#CCC",
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.xfcyName)])]), _h('div', {
	    staticClass: ["selectitem"],
	    on: {
	      "click": _vm.pickXfmd
	    }
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["目的"])]), _h('text', {
	    staticStyle: {
	      color: "#CCC",
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.xfmdName)])]), _h('div', {
	    staticClass: ["addressitem"]
	  }, [_h('textarea', {
	    staticClass: ["textarea"],
	    attrs: {
	      "type": "text",
	      "placeholder": "请填写信件内容",
	      "rows": "3",
	      "value": (_vm.inputData.content)
	    },
	    on: {
	      "blur": _vm.contentBlur,
	      "input": function($event) {
	        _vm.inputData.content = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["selectitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["附件"])]), _h('text', {
	    staticStyle: {
	      color: "#CCC",
	      fontSize: "32px"
	    }
	  }, ["未完成功能"])]), _h('div', {
	    staticClass: ["selectitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["是否公开"])]), _h('div', {
	    staticClass: ["switch-wrapper"]
	  }, [_h('switch', {
	    on: {
	      "change": _vm.openChange
	    }
	  })])]), _h('div', {
	    staticClass: ["infoitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["验证码"])]), _h('div', {
	    staticStyle: {
	      width: "400px"
	    }
	  }, [_h('input', {
	    staticClass: ["validate-input"],
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入验证码",
	      "value": (_vm.verificationCode)
	    },
	    on: {
	      "input": function($event) {
	        _vm.verificationCode = $event.target.attr.value
	      }
	    }
	  })]), _h('div', {
	    staticClass: ["validate-div"],
	    on: {
	      "click": _vm.generateVerificationCode
	    }
	  }, [_h('text', {
	    staticStyle: {
	      fontSize: "32px"
	    }
	  }, [_vm._s(_vm.forChecking)])])]), _h('div', {
	    staticClass: ["button-wrapper"]
	  }, [_h('div', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.submit
	    }
	  }, [_h('text', {
	    staticStyle: {
	      color: "#fff"
	    }
	  }, ["提交"])])])]) : (_vm.page == 3) ? _h('div', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_h('div', {
	    staticClass: ["addressitem"]
	  }, [_h('text', {
	    staticStyle: {
	      fontSize: "36px"
	    }
	  }, [_vm._s(_vm.result.name + '你好，你的信件投信成功，相关信息如下：')])]), _h('div', {
	    staticClass: ["selectitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["主题"])]), _h('div', {
	    staticStyle: {
	      width: "500px"
	    }
	  }, [_h('text', {
	    staticStyle: {
	      textAlign: "right",
	      color: "#CCC",
	      fontSize: "32px",
	      lines: "0"
	    }
	  }, [_vm._s(_vm.result.topic)])])]), _h('div', {
	    staticClass: ["selectitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["信件编号"])]), _h('div', {
	    staticStyle: {
	      width: "500px"
	    }
	  }, [_h('text', {
	    staticStyle: {
	      textAlign: "right",
	      color: "#CCC",
	      fontSize: "32px",
	      lines: "0"
	    }
	  }, [_vm._s(_vm.result.code)])])]), _h('div', {
	    staticClass: ["selectitem"]
	  }, [_h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["手机号码"])]), _h('div', {
	    staticStyle: {
	      width: "500px"
	    }
	  }, [_h('text', {
	    staticStyle: {
	      textAlign: "right",
	      color: "#CCC",
	      fontSize: "32px",
	      lines: "0"
	    }
	  }, [_vm._s(_vm.result.phone)])])])]) : _vm._e()]), (_vm.showSidebar) ? _h('div', {
	    staticClass: ["side-page"]
	  }, [_h('div', {
	    staticClass: ["mask"],
	    on: {
	      "click": _vm.maskClick
	    }
	  }, [_h('div', {
	    staticClass: ["mask-content"]
	  })]), _h('div', {
	    staticClass: ["sidebar"]
	  }, [_h('list', {
	    staticClass: ["sidebar-list"]
	  }, [_h('cell', {
	    staticClass: ["sidebar-header"]
	  }, [_h('text', {
	    staticClass: ["sidebar-header-text"]
	  }, [_vm._s(_vm.sidebarHeader)])]), _vm._l((_vm.sidebarList), function(item) {
	    return _h('cell', {
	      class: [item.tips ? 'sidebar-tips' : 'sidebar-cell'],
	      on: {
	        "click": function($event) {
	          _vm.cellClick(item)
	        }
	      }
	    }, [_h('text', {
	      class: [item.tips ? 'sidebar-tips-text' : 'sidebar-cell-text']
	    }, [_vm._s(item.content)])])
	  })])])]) : _vm._e()])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["topmenu"]
	  }, [_h('div', {
	    staticClass: ["topmenu-btn", "topmenu-selected"]
	  }, [_h('text', {
	    staticClass: ["topmenu-text"]
	  }, ["基本信息"])]), _h('div', {
	    staticClass: ["topmenu-btn"]
	  }, [_h('text', {
	    staticClass: ["topmenu-text"]
	  }, ["事项信息"])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["姓 名"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["手机号码"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["手机验证码"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["信访人数"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["涉及人数"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["证件类型"])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    staticClass: ["label"]
	  }, [_h('text', {
	    staticClass: ["itemname"]
	  }, ["证件号码"])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);