(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~lokiPlugin~prometheusPlugin"],{

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // A linked list to keep track of recently-used-ness

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js");

var MAX = Symbol('max');
var LENGTH = Symbol('length');
var LENGTH_CALCULATOR = Symbol('lengthCalculator');
var ALLOW_STALE = Symbol('allowStale');
var MAX_AGE = Symbol('maxAge');
var DISPOSE = Symbol('dispose');
var NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
var LRU_LIST = Symbol('lruList');
var CACHE = Symbol('cache');
var UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');

var naiveLength = function naiveLength() {
  return 1;
}; // lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.


var LRUCache =
/*#__PURE__*/
function () {
  function LRUCache(options) {
    _classCallCheck(this, LRUCache);

    if (typeof options === 'number') options = {
      max: options
    };
    if (!options) options = {};
    if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number'); // Kind of weird to have a default max of Infinity, but oh well.

    var max = this[MAX] = options.max || Infinity;
    var lc = options.length || naiveLength;
    this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
    this[ALLOW_STALE] = options.stale || false;
    if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
    this[MAX_AGE] = options.maxAge || 0;
    this[DISPOSE] = options.dispose;
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
    this.reset();
  } // resize the cache when the max changes.


  _createClass(LRUCache, [{
    key: "rforEach",
    value: function rforEach(fn, thisp) {
      thisp = thisp || this;

      for (var walker = this[LRU_LIST].tail; walker !== null;) {
        var prev = walker.prev;
        forEachStep(this, fn, walker, thisp);
        walker = prev;
      }
    }
  }, {
    key: "forEach",
    value: function forEach(fn, thisp) {
      thisp = thisp || this;

      for (var walker = this[LRU_LIST].head; walker !== null;) {
        var next = walker.next;
        forEachStep(this, fn, walker, thisp);
        walker = next;
      }
    }
  }, {
    key: "keys",
    value: function keys() {
      return this[LRU_LIST].toArray().map(function (k) {
        return k.key;
      });
    }
  }, {
    key: "values",
    value: function values() {
      return this[LRU_LIST].toArray().map(function (k) {
        return k.value;
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this = this;

      if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
        this[LRU_LIST].forEach(function (hit) {
          return _this[DISPOSE](hit.key, hit.value);
        });
      }

      this[CACHE] = new Map(); // hash of items by key

      this[LRU_LIST] = new Yallist(); // list of items in order of use recency

      this[LENGTH] = 0; // length of items in the list
    }
  }, {
    key: "dump",
    value: function dump() {
      var _this2 = this;

      return this[LRU_LIST].map(function (hit) {
        return isStale(_this2, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        };
      }).toArray().filter(function (h) {
        return h;
      });
    }
  }, {
    key: "dumpLru",
    value: function dumpLru() {
      return this[LRU_LIST];
    }
  }, {
    key: "set",
    value: function set(key, value, maxAge) {
      maxAge = maxAge || this[MAX_AGE];
      if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
      var now = maxAge ? Date.now() : 0;
      var len = this[LENGTH_CALCULATOR](value, key);

      if (this[CACHE].has(key)) {
        if (len > this[MAX]) {
          _del(this, this[CACHE].get(key));

          return false;
        }

        var node = this[CACHE].get(key);
        var item = node.value; // dispose of the old one before overwriting
        // split out into 2 ifs for better coverage tracking

        if (this[DISPOSE]) {
          if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
        }

        item.now = now;
        item.maxAge = maxAge;
        item.value = value;
        this[LENGTH] += len - item.length;
        item.length = len;
        this.get(key);
        trim(this);
        return true;
      }

      var hit = new Entry(key, value, len, now, maxAge); // oversized objects fall out of cache automatically.

      if (hit.length > this[MAX]) {
        if (this[DISPOSE]) this[DISPOSE](key, value);
        return false;
      }

      this[LENGTH] += hit.length;
      this[LRU_LIST].unshift(hit);
      this[CACHE].set(key, this[LRU_LIST].head);
      trim(this);
      return true;
    }
  }, {
    key: "has",
    value: function has(key) {
      if (!this[CACHE].has(key)) return false;
      var hit = this[CACHE].get(key).value;
      return !isStale(this, hit);
    }
  }, {
    key: "get",
    value: function get(key) {
      return _get(this, key, true);
    }
  }, {
    key: "peek",
    value: function peek(key) {
      return _get(this, key, false);
    }
  }, {
    key: "pop",
    value: function pop() {
      var node = this[LRU_LIST].tail;
      if (!node) return null;

      _del(this, node);

      return node.value;
    }
  }, {
    key: "del",
    value: function del(key) {
      _del(this, this[CACHE].get(key));
    }
  }, {
    key: "load",
    value: function load(arr) {
      // reset the cache
      this.reset();
      var now = Date.now(); // A previous serialized cache has the most recent items first

      for (var l = arr.length - 1; l >= 0; l--) {
        var hit = arr[l];
        var expiresAt = hit.e || 0;
        if (expiresAt === 0) // the item was created without expiration in a non aged cache
          this.set(hit.k, hit.v);else {
          var maxAge = expiresAt - now; // dont add already expired items

          if (maxAge > 0) {
            this.set(hit.k, hit.v, maxAge);
          }
        }
      }
    }
  }, {
    key: "prune",
    value: function prune() {
      var _this3 = this;

      this[CACHE].forEach(function (value, key) {
        return _get(_this3, key, false);
      });
    }
  }, {
    key: "max",
    set: function set(mL) {
      if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
      this[MAX] = mL || Infinity;
      trim(this);
    },
    get: function get() {
      return this[MAX];
    }
  }, {
    key: "allowStale",
    set: function set(allowStale) {
      this[ALLOW_STALE] = !!allowStale;
    },
    get: function get() {
      return this[ALLOW_STALE];
    }
  }, {
    key: "maxAge",
    set: function set(mA) {
      if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
      this[MAX_AGE] = mA;
      trim(this);
    },
    get: function get() {
      return this[MAX_AGE];
    } // resize the cache when the lengthCalculator changes.

  }, {
    key: "lengthCalculator",
    set: function set(lC) {
      var _this4 = this;

      if (typeof lC !== 'function') lC = naiveLength;

      if (lC !== this[LENGTH_CALCULATOR]) {
        this[LENGTH_CALCULATOR] = lC;
        this[LENGTH] = 0;
        this[LRU_LIST].forEach(function (hit) {
          hit.length = _this4[LENGTH_CALCULATOR](hit.value, hit.key);
          _this4[LENGTH] += hit.length;
        });
      }

      trim(this);
    },
    get: function get() {
      return this[LENGTH_CALCULATOR];
    }
  }, {
    key: "length",
    get: function get() {
      return this[LENGTH];
    }
  }, {
    key: "itemCount",
    get: function get() {
      return this[LRU_LIST].length;
    }
  }]);

  return LRUCache;
}();

var _get = function _get(self, key, doUse) {
  var node = self[CACHE].get(key);

  if (node) {
    var hit = node.value;

    if (isStale(self, hit)) {
      _del(self, node);

      if (!self[ALLOW_STALE]) return undefined;
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
        self[LRU_LIST].unshiftNode(node);
      }
    }

    return hit.value;
  }
};

var isStale = function isStale(self, hit) {
  if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
  var diff = Date.now() - hit.now;
  return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};

var trim = function trim(self) {
  if (self[LENGTH] > self[MAX]) {
    for (var walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      var prev = walker.prev;

      _del(self, walker);

      walker = prev;
    }
  }
};

var _del = function _del(self, node) {
  if (node) {
    var hit = node.value;
    if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
    self[LENGTH] -= hit.length;
    self[CACHE]["delete"](hit.key);
    self[LRU_LIST].removeNode(node);
  }
};

var Entry = function Entry(key, value, length, now, maxAge) {
  _classCallCheck(this, Entry);

  this.key = key;
  this.value = value;
  this.length = length;
  this.now = now;
  this.maxAge = maxAge || 0;
};

var forEachStep = function forEachStep(self, fn, node, thisp) {
  var hit = node.value;

  if (isStale(self, hit)) {
    _del(self, node);

    if (!self[ALLOW_STALE]) hit = undefined;
  }

  if (hit) fn.call(thisp, hit.value, hit.key, self);
};

module.exports = LRUCache;

/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] =
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var walker;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            walker = this.head;

          case 1:
            if (!walker) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return walker.value;

          case 4:
            walker = walker.next;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  });
};

/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;

function Yallist(list) {
  var self = this;

  if (!(self instanceof Yallist)) {
    self = new Yallist();
  }

  self.tail = null;
  self.head = null;
  self.length = 0;

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item);
    });
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i]);
    }
  }

  return self;
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list');
  }

  var next = node.next;
  var prev = node.prev;

  if (next) {
    next.prev = prev;
  }

  if (prev) {
    prev.next = next;
  }

  if (node === this.head) {
    this.head = next;
  }

  if (node === this.tail) {
    this.tail = prev;
  }

  node.list.length--;
  node.next = null;
  node.prev = null;
  node.list = null;
  return next;
};

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var head = this.head;
  node.list = this;
  node.next = head;

  if (head) {
    head.prev = node;
  }

  this.head = node;

  if (!this.tail) {
    this.tail = node;
  }

  this.length++;
};

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return;
  }

  if (node.list) {
    node.list.removeNode(node);
  }

  var tail = this.tail;
  node.list = this;
  node.prev = tail;

  if (tail) {
    tail.next = node;
  }

  this.tail = node;

  if (!this.head) {
    this.head = node;
  }

  this.length++;
};

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i]);
  }

  return this.length;
};

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined;
  }

  var res = this.tail.value;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined;
  }

  var res = this.head.value;
  this.head = this.head.next;

  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }

  this.length--;
  return res;
};

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.next;
  }
};

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this;

  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this);
    walker = walker.prev;
  }
};

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev;
  }

  if (i === n && walker !== null) {
    return walker.value;
  }
};

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.next;
  }

  return res;
};

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this;
  var res = new Yallist();

  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this));
    walker = walker.prev;
  }

  return res;
};

Yallist.prototype.reduce = function (fn, initial) {
  var acc;
  var walker = this.head;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.head) {
    walker = this.head.next;
    acc = this.head.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i);
    walker = walker.next;
  }

  return acc;
};

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc;
  var walker = this.tail;

  if (arguments.length > 1) {
    acc = initial;
  } else if (this.tail) {
    walker = this.tail.prev;
    acc = this.tail.value;
  } else {
    throw new TypeError('Reduce of empty list with no initial value');
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i);
    walker = walker.prev;
  }

  return acc;
};

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.next;
  }

  return arr;
};

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length);

  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value;
    walker = walker.prev;
  }

  return arr;
};

Yallist.prototype.slice = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next;
  }

  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length;

  if (to < 0) {
    to += this.length;
  }

  from = from || 0;

  if (from < 0) {
    from += this.length;
  }

  var ret = new Yallist();

  if (to < from || to < 0) {
    return ret;
  }

  if (from < 0) {
    from = 0;
  }

  if (to > this.length) {
    to = this.length;
  }

  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev;
  }

  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value);
  }

  return ret;
};

Yallist.prototype.splice = function (start, deleteCount
/*, ...nodes */
) {
  if (start > this.length) {
    start = this.length - 1;
  }

  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next;
  }

  var ret = [];

  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value);
    walker = this.removeNode(walker);
  }

  if (walker === null) {
    walker = this.tail;
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev;
  }

  for (var i = 2; i < arguments.length; i++) {
    walker = insert(this, walker, arguments[i]);
  }

  return ret;
};

Yallist.prototype.reverse = function () {
  var head = this.head;
  var tail = this.tail;

  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev;
    walker.prev = walker.next;
    walker.next = p;
  }

  this.head = tail;
  this.tail = head;
  return this;
};

function insert(self, node, value) {
  var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);

  if (inserted.next === null) {
    self.tail = inserted;
  }

  if (inserted.prev === null) {
    self.head = inserted;
  }

  self.length++;
  return inserted;
}

function push(self, item) {
  self.tail = new Node(item, self.tail, null, self);

  if (!self.head) {
    self.head = self.tail;
  }

  self.length++;
}

function unshift(self, item) {
  self.head = new Node(item, null, self.head, self);

  if (!self.tail) {
    self.tail = self.head;
  }

  self.length++;
}

function Node(value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list);
  }

  this.list = list;
  this.value = value;

  if (prev) {
    prev.next = this;
    this.prev = prev;
  } else {
    this.prev = null;
  }

  if (next) {
    next.prev = this;
    this.next = next;
  } else {
    this.next = null;
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist);
} catch (er) {}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/add_label_to_query.ts":
/*!************************************************************************!*\
  !*** ./public/app/plugins/datasource/prometheus/add_label_to_query.ts ***!
  \************************************************************************/
/*! exports provided: addLabelToQuery, addLabelToSelector, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabelToQuery", function() { return addLabelToQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLabelToSelector", function() { return addLabelToSelector; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var keywords = 'by|without|on|ignoring|group_left|group_right|bool|or|and|unless'; // Duplicate from mode-prometheus.js, which can't be used in tests due to global ace not being loaded.

var builtInWords = [keywords, 'count|count_values|min|max|avg|sum|stddev|stdvar|bottomk|topk|quantile', 'true|false|null|__name__|job', 'abs|absent|ceil|changes|clamp_max|clamp_min|count_scalar|day_of_month|day_of_week|days_in_month|delta|deriv', 'drop_common_labels|exp|floor|histogram_quantile|holt_winters|hour|idelta|increase|irate|label_replace|ln|log2', 'log10|minute|month|predict_linear|rate|resets|round|scalar|sort|sort_desc|sqrt|time|vector|year|avg_over_time', 'min_over_time|max_over_time|sum_over_time|count_over_time|quantile_over_time|stddev_over_time|stdvar_over_time'].join('|').split('|');
var metricNameRegexp = /([A-Za-z:][\w:]*)\b(?![\(\]{=!",])/g;
var selectorRegexp = /{([^{]*)}/g;
function addLabelToQuery(query, key, value, operator, hasNoMetrics) {
  if (!key || !value) {
    throw new Error('Need label to add to query.');
  } // Add empty selectors to bare metric names


  var previousWord;
  query = query.replace(metricNameRegexp, function (match, word, offset) {
    var insideSelector = isPositionInsideChars(query, offset, '{', '}'); // Handle "sum by (key) (metric)"

    var previousWordIsKeyWord = previousWord && keywords.split('|').indexOf(previousWord) > -1; // check for colon as as "word boundary" symbol

    var isColonBounded = word.endsWith(':');
    previousWord = word; // with Prometheus datasource, adds an empty selector to a bare metric name
    // but doesn't add it with Loki datasource so there are no unnecessary labels
    // e.g. when the filter contains a dash (-) character inside

    if (!hasNoMetrics && !insideSelector && !isColonBounded && !previousWordIsKeyWord && builtInWords.indexOf(word) === -1) {
      return "".concat(word, "{}");
    }

    return word;
  }); // Adding label to existing selectors

  var match = selectorRegexp.exec(query);
  var parts = [];
  var lastIndex = 0;
  var suffix = '';

  while (match) {
    var prefix = query.slice(lastIndex, match.index);
    var selector = match[1];
    var selectorWithLabel = addLabelToSelector(selector, key, value, operator);
    lastIndex = match.index + match[1].length + 2;
    suffix = query.slice(match.index + match[0].length);
    parts.push(prefix, selectorWithLabel);
    match = selectorRegexp.exec(query);
  }

  parts.push(suffix);
  return parts.join('');
}
var labelRegexp = /(\w+)\s*(=|!=|=~|!~)\s*("[^"]*")/g;
function addLabelToSelector(selector, labelKey, labelValue, labelOperator) {
  var parsedLabels = []; // Split selector into labels

  if (selector) {
    var match = labelRegexp.exec(selector);

    while (match) {
      parsedLabels.push({
        key: match[1],
        operator: match[2],
        value: match[3]
      });
      match = labelRegexp.exec(selector);
    }
  } // Add new label


  var operatorForLabelKey = labelOperator || '=';
  parsedLabels.push({
    key: labelKey,
    operator: operatorForLabelKey,
    value: "\"".concat(labelValue, "\"")
  }); // Sort labels by key and put them together

  var formatted = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chain(parsedLabels).uniqWith(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual).compact().sortBy('key').map(function (_ref) {
    var key = _ref.key,
        operator = _ref.operator,
        value = _ref.value;
    return "".concat(key).concat(operator).concat(value);
  }).value().join(',');

  return "{".concat(formatted, "}");
}

function isPositionInsideChars(text, position, openChar, closeChar) {
  var nextSelectorStart = text.slice(position).indexOf(openChar);
  var nextSelectorEnd = text.slice(position).indexOf(closeChar);
  return nextSelectorEnd > -1 && (nextSelectorStart === -1 || nextSelectorStart > nextSelectorEnd);
}

/* harmony default export */ __webpack_exports__["default"] = (addLabelToQuery);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/language_utils.ts":
/*!********************************************************************!*\
  !*** ./public/app/plugins/datasource/prometheus/language_utils.ts ***!
  \********************************************************************/
/*! exports provided: RATE_RANGES, processHistogramLabels, processLabels, selectorRegexp, labelRegexp, parseSelector, expandRecordingRules, fixSummariesMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATE_RANGES", function() { return RATE_RANGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processHistogramLabels", function() { return processHistogramLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLabels", function() { return processLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorRegexp", function() { return selectorRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelRegexp", function() { return labelRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSelector", function() { return parseSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandRecordingRules", function() { return expandRecordingRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixSummariesMetadata", function() { return fixSummariesMetadata; });
/* harmony import */ var _add_label_to_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_label_to_query */ "./public/app/plugins/datasource/prometheus/add_label_to_query.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var RATE_RANGES = ['1m', '5m', '10m', '30m', '1h'];
var processHistogramLabels = function processHistogramLabels(labels) {
  var resultSet = new Set();
  var regexp = new RegExp('_bucket($|:)');

  for (var index = 0; index < labels.length; index++) {
    var label = labels[index];
    var isHistogramValue = regexp.test(label);

    if (isHistogramValue) {
      resultSet.add(label);
    }
  }

  var result = _toConsumableArray(resultSet);

  return {
    values: {
      __name__: result
    }
  };
};
function processLabels(labels) {
  var withName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var values = {};
  labels.forEach(function (l) {
    var __name__ = l.__name__,
        rest = _objectWithoutProperties(l, ["__name__"]);

    if (withName) {
      values['__name__'] = values['__name__'] || [];

      if (!values['__name__'].includes(__name__)) {
        values['__name__'].push(__name__);
      }
    }

    Object.keys(rest).forEach(function (key) {
      if (!values[key]) {
        values[key] = [];
      }

      if (!values[key].includes(rest[key])) {
        values[key].push(rest[key]);
      }
    });
  });
  return {
    values: values,
    keys: Object.keys(values)
  };
} // const cleanSelectorRegexp = /\{(\w+="[^"\n]*?")(,\w+="[^"\n]*?")*\}/;

var selectorRegexp = /\{[^}]*?\}/;
var labelRegexp = /\b(\w+)(!?=~?)("[^"\n]*?")/g;
function parseSelector(query) {
  var cursorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!query.match(selectorRegexp)) {
    // Special matcher for metrics
    if (query.match(/^[A-Za-z:][\w:]*$/)) {
      return {
        selector: "{__name__=\"".concat(query, "\"}"),
        labelKeys: ['__name__']
      };
    }

    throw new Error('Query must contain a selector: ' + query);
  } // Check if inside a selector


  var prefix = query.slice(0, cursorOffset);
  var prefixOpen = prefix.lastIndexOf('{');
  var prefixClose = prefix.lastIndexOf('}');

  if (prefixOpen === -1) {
    throw new Error('Not inside selector, missing open brace: ' + prefix);
  }

  if (prefixClose > -1 && prefixClose > prefixOpen) {
    throw new Error('Not inside selector, previous selector already closed: ' + prefix);
  }

  var suffix = query.slice(cursorOffset);
  var suffixCloseIndex = suffix.indexOf('}');
  var suffixClose = suffixCloseIndex + cursorOffset;
  var suffixOpenIndex = suffix.indexOf('{');
  var suffixOpen = suffixOpenIndex + cursorOffset;

  if (suffixClose === -1) {
    throw new Error('Not inside selector, missing closing brace in suffix: ' + suffix);
  }

  if (suffixOpenIndex > -1 && suffixOpen < suffixClose) {
    throw new Error('Not inside selector, next selector opens before this one closed: ' + suffix);
  } // Extract clean labels to form clean selector, incomplete labels are dropped


  var selector = query.slice(prefixOpen, suffixClose);
  var labels = {};
  selector.replace(labelRegexp, function (label, key, operator, value) {
    var labelOffset = query.indexOf(label);
    var valueStart = labelOffset + key.length + operator.length + 1;
    var valueEnd = labelOffset + key.length + operator.length + value.length - 1; // Skip label if cursor is in value

    if (cursorOffset < valueStart || cursorOffset > valueEnd) {
      labels[key] = {
        value: value,
        operator: operator
      };
    }

    return '';
  }); // Add metric if there is one before the selector

  var metricPrefix = query.slice(0, prefixOpen);
  var metricMatch = metricPrefix.match(/[A-Za-z:][\w:]*$/);

  if (metricMatch) {
    labels['__name__'] = {
      value: "\"".concat(metricMatch[0], "\""),
      operator: '='
    };
  } // Build sorted selector


  var labelKeys = Object.keys(labels).sort();
  var cleanSelector = labelKeys.map(function (key) {
    return "".concat(key).concat(labels[key].operator).concat(labels[key].value);
  }).join(',');
  var selectorString = ['{', cleanSelector, '}'].join('');
  return {
    labelKeys: labelKeys,
    selector: selectorString
  };
}
function expandRecordingRules(query, mapping) {
  var ruleNames = Object.keys(mapping);
  var rulesRegex = new RegExp("(\\s|^)(".concat(ruleNames.join('|'), ")(\\s|$|\\(|\\[|\\{)"), 'ig');
  var expandedQuery = query.replace(rulesRegex, function (match, pre, name, post) {
    return "".concat(pre).concat(mapping[name]).concat(post);
  }); // Split query into array, so if query uses operators, we can correctly add labels to each individual part.

  var queryArray = expandedQuery.split(/(\+|\-|\*|\/|\%|\^)/); // Regex that matches occurences of ){ or }{ or ]{ which is a sign of incorrecly added labels.

  var invalidLabelsRegex = /(\)\{|\}\{|\]\{)/;
  var correctlyExpandedQueryArray = queryArray.map(function (query) {
    var expression = query;

    if (expression.match(invalidLabelsRegex)) {
      expression = addLabelsToExpression(expression, invalidLabelsRegex);
    }

    return expression;
  });
  return correctlyExpandedQueryArray.join('');
}

function addLabelsToExpression(expr, invalidLabelsRegexp) {
  // Split query into 2 parts - before the invalidLabelsRegex match and after.
  var indexOfRegexMatch = expr.match(invalidLabelsRegexp).index;
  var exprBeforeRegexMatch = expr.substr(0, indexOfRegexMatch + 1);
  var exprAfterRegexMatch = expr.substr(indexOfRegexMatch + 1); // Create arrayOfLabelObjects with label objects that have key, operator and value.

  var arrayOfLabelObjects = [];
  exprAfterRegexMatch.replace(labelRegexp, function (label, key, operator, value) {
    arrayOfLabelObjects.push({
      key: key,
      operator: operator,
      value: value
    });
    return '';
  }); // Loop trough all of the label objects and add them to query.
  // As a starting point we have valid query without the labels.

  var result = exprBeforeRegexMatch;
  arrayOfLabelObjects.filter(Boolean).forEach(function (obj) {
    // Remove extra set of quotes from obj.value
    var value = obj.value.substr(1, obj.value.length - 2);
    result = Object(_add_label_to_query__WEBPACK_IMPORTED_MODULE_0__["addLabelToQuery"])(result, obj.key, value, obj.operator);
  });
  return result;
}
/**
 * Adds metadata for synthetic metrics for which the API does not provide metadata.
 * See https://github.com/grafana/grafana/issues/22337 for details.
 *
 * @param metadata HELP and TYPE metadata from /api/v1/metadata
 */


function fixSummariesMetadata(metadata) {
  if (!metadata) {
    return metadata;
  }

  var summaryMetadata = {};

  for (var metric in metadata) {
    var item = metadata[metric][0];

    if (item.type === 'summary') {
      summaryMetadata["".concat(metric, "_count")] = [{
        type: 'counter',
        help: "Count of events that have been observed for the base metric (".concat(item.help, ")")
      }];
      summaryMetadata["".concat(metric, "_sum")] = [{
        type: 'counter',
        help: "Total sum of all observed values for the base metric (".concat(item.help, ")")
      }];
    }
  }

  return _objectSpread({}, metadata, {}, summaryMetadata);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/*!************************************************************!*\
  !*** ./public/app/plugins/datasource/prometheus/promql.ts ***!
  \************************************************************/
/*! exports provided: RATE_RANGES, OPERATORS, FUNCTIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATE_RANGES", function() { return RATE_RANGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS", function() { return OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FUNCTIONS", function() { return FUNCTIONS; });
var RATE_RANGES = [{
  label: '$__interval',
  sortText: '$__interval'
}, {
  label: '1m',
  sortText: '00:01:00'
}, {
  label: '5m',
  sortText: '00:05:00'
}, {
  label: '10m',
  sortText: '00:10:00'
}, {
  label: '30m',
  sortText: '00:30:00'
}, {
  label: '1h',
  sortText: '01:00:00'
}, {
  label: '1d',
  sortText: '24:00:00'
}];
var OPERATORS = ['by', 'group_left', 'group_right', 'ignoring', 'on', 'offset', 'without'];
var AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'count_values',
  insertText: 'count_values',
  documentation: 'Count number of elements with the same value'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}, {
  label: 'quantile',
  insertText: 'quantile',
  documentation: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions'
}];
var FUNCTIONS = [].concat(AGGREGATION_OPERATORS, [{
  insertText: 'abs',
  label: 'abs',
  detail: 'abs(v instant-vector)',
  documentation: 'Returns the input vector with all sample values converted to their absolute value.'
}, {
  insertText: 'absent',
  label: 'absent',
  detail: 'absent(v instant-vector)',
  documentation: 'Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination.'
}, {
  insertText: 'ceil',
  label: 'ceil',
  detail: 'ceil(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` up to the nearest integer.'
}, {
  insertText: 'changes',
  label: 'changes',
  detail: 'changes(v range-vector)',
  documentation: 'For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector.'
}, {
  insertText: 'clamp_max',
  label: 'clamp_max',
  detail: 'clamp_max(v instant-vector, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have an upper limit of `max`.'
}, {
  insertText: 'clamp_min',
  label: 'clamp_min',
  detail: 'clamp_min(v instant-vector, min scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min`.'
}, {
  insertText: 'count_scalar',
  label: 'count_scalar',
  detail: 'count_scalar(v instant-vector)',
  documentation: 'Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause.'
}, {
  insertText: 'day_of_month',
  label: 'day_of_month',
  detail: 'day_of_month(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31.'
}, {
  insertText: 'day_of_week',
  label: 'day_of_week',
  detail: 'day_of_week(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc.'
}, {
  insertText: 'days_in_month',
  label: 'days_in_month',
  detail: 'days_in_month(v=vector(time()) instant-vector)',
  documentation: 'Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31.'
}, {
  insertText: 'delta',
  label: 'delta',
  detail: 'delta(v range-vector)',
  documentation: 'Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers.'
}, {
  insertText: 'deriv',
  label: 'deriv',
  detail: 'deriv(v range-vector)',
  documentation: 'Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression.'
}, {
  insertText: 'drop_common_labels',
  label: 'drop_common_labels',
  detail: 'drop_common_labels(instant-vector)',
  documentation: 'Drops all labels that have the same name and value across all series in the input vector.'
}, {
  insertText: 'exp',
  label: 'exp',
  detail: 'exp(v instant-vector)',
  documentation: 'Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`'
}, {
  insertText: 'floor',
  label: 'floor',
  detail: 'floor(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` down to the nearest integer.'
}, {
  insertText: 'histogram_quantile',
  label: 'histogram_quantile',
  detail: 'histogram_quantile(φ float, b instant-vector)',
  documentation: 'Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels.'
}, {
  insertText: 'holt_winters',
  label: 'holt_winters',
  detail: 'holt_winters(v range-vector, sf scalar, tf scalar)',
  documentation: 'Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1.'
}, {
  insertText: 'hour',
  label: 'hour',
  detail: 'hour(v=vector(time()) instant-vector)',
  documentation: 'Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23.'
}, {
  insertText: 'idelta',
  label: 'idelta',
  detail: 'idelta(v range-vector)',
  documentation: 'Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels.'
}, {
  insertText: 'increase',
  label: 'increase',
  detail: 'increase(v range-vector)',
  documentation: 'Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments.'
}, {
  insertText: 'irate',
  label: 'irate',
  detail: 'irate(v range-vector)',
  documentation: 'Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for.'
}, {
  insertText: 'label_replace',
  label: 'label_replace',
  detail: 'label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)',
  documentation: "For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."
}, {
  insertText: 'ln',
  label: 'ln',
  detail: 'ln(v instant-vector)',
  documentation: 'calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`'
}, {
  insertText: 'log2',
  label: 'log2',
  detail: 'log2(v instant-vector)',
  documentation: 'Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'log10',
  label: 'log10',
  detail: 'log10(v instant-vector)',
  documentation: 'Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'minute',
  label: 'minute',
  detail: 'minute(v=vector(time()) instant-vector)',
  documentation: 'Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59.'
}, {
  insertText: 'month',
  label: 'month',
  detail: 'month(v=vector(time()) instant-vector)',
  documentation: 'Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc.'
}, {
  insertText: 'predict_linear',
  label: 'predict_linear',
  detail: 'predict_linear(v range-vector, t scalar)',
  documentation: 'Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression.'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: "Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."
}, {
  insertText: 'resets',
  label: 'resets',
  detail: 'resets(v range-vector)',
  documentation: 'For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset.'
}, {
  insertText: 'round',
  label: 'round',
  detail: 'round(v instant-vector, to_nearest=1 scalar)',
  documentation: 'Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction.'
}, {
  insertText: 'scalar',
  label: 'scalar',
  detail: 'scalar(v instant-vector)',
  documentation: 'Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`.'
}, {
  insertText: 'sort',
  label: 'sort',
  detail: 'sort(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in ascending order.'
}, {
  insertText: 'sort_desc',
  label: 'sort_desc',
  detail: 'sort_desc(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in descending order.'
}, {
  insertText: 'sqrt',
  label: 'sqrt',
  detail: 'sqrt(v instant-vector)',
  documentation: 'Calculates the square root of all elements in `v`.'
}, {
  insertText: 'time',
  label: 'time',
  detail: 'time()',
  documentation: 'Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated.'
}, {
  insertText: 'vector',
  label: 'vector',
  detail: 'vector(s scalar)',
  documentation: 'Returns the scalar `s` as a vector with no labels.'
}, {
  insertText: 'year',
  label: 'year',
  detail: 'year(v=vector(time()) instant-vector)',
  documentation: 'Returns the year for each of the given times in UTC.'
}, {
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average value of all points in the specified interval.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum value of all points in the specified interval.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum value of all points in the specified interval.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval.'
}]);
var tokenizer = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((by|without)\s*)\([^)]*\)/,
    // by ()
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=})/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  function: new RegExp("\\b(?:".concat(FUNCTIONS.map(function (f) {
    return f.label;
  }).join('|'), ")(?=\\s*\\()"), 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: new RegExp("/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:".concat(OPERATORS.join('|'), ")\\b"), 'i'),
  punctuation: /[{};()`,.]/
};
/* harmony default export */ __webpack_exports__["default"] = (tokenizer);

/***/ })

}]);
//# sourceMappingURL=default~lokiPlugin~prometheusPlugin.aae40212254ed8359ce4.js.map