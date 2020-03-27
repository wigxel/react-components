'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');
var React__default = _interopDefault(React);
var _ = require('lodash');
var ___default = _interopDefault(_);
var fp = require('lodash/fp');
var reactIs = _interopDefault(require('react-is'));
var reactRouterDom = require('react-router-dom');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _isPlaceholder(a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;

      case 1:
        return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
          return fn(a, _b);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };

    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };

    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };

    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };

    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };

    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };

    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };

    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };

    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };

    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };

    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };

    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}

/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curryN(length, received, fn) {
  return function () {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;

    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;

      if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }

      combined[combinedIdx] = result;

      if (!_isPlaceholder(result)) {
        left -= 1;
      }

      combinedIdx += 1;
    }

    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
  };
}

/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curryN =
/*#__PURE__*/
_curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }

  return _arity(length, _curryN(length, [], fn));
});

/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */

function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;

      case 1:
        return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        });

      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _curry1(function (_c) {
          return fn(a, b, _c);
        });

      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
          return fn(_a, _b, c);
        }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
          return fn(_a, b, _c);
        }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
          return fn(a, _b, _c);
        }) : _isPlaceholder(a) ? _curry1(function (_a) {
          return fn(_a, b, c);
        }) : _isPlaceholder(b) ? _curry1(function (_b) {
          return fn(a, _b, c);
        }) : _isPlaceholder(c) ? _curry1(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};

function _isTransformer(obj) {
  return obj != null && typeof obj['@@transducer/step'] === 'function';
}

/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */

function _dispatchable(methodNames, xf, fn) {
  return function () {
    if (arguments.length === 0) {
      return fn();
    }

    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();

    if (!_isArray(obj)) {
      var idx = 0;

      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }

        idx += 1;
      }

      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }

    return fn.apply(this, arguments);
  };
}

var _xfBase = {
  init: function () {
    return this.xf['@@transducer/init']();
  },
  result: function (result) {
    return this.xf['@@transducer/result'](result);
  }
};

function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);

  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }

  return result;
}

function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}

/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */

var _isArrayLike =
/*#__PURE__*/
_curry1(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }

  if (!x) {
    return false;
  }

  if (typeof x !== 'object') {
    return false;
  }

  if (_isString(x)) {
    return false;
  }

  if (x.nodeType === 1) {
    return !!x.length;
  }

  if (x.length === 0) {
    return true;
  }

  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }

  return false;
});

var XWrap =
/*#__PURE__*/
function () {
  function XWrap(fn) {
    this.f = fn;
  }

  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };

  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };

  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}

/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */

var bind =
/*#__PURE__*/
_curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});

function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    idx += 1;
  }

  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();

  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);

    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }

    step = iter.next();
  }

  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }

  if (_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }

  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }

  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }

  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }

  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}

var XMap =
/*#__PURE__*/
function () {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;

  XMap.prototype['@@transducer/step'] = function (result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return XMap;
}();

var _xmap =
/*#__PURE__*/
_curry2(function _xmap(f, xf) {
  return new XMap(f, xf);
});

function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var toString = Object.prototype.toString;

var _isArguments =
/*#__PURE__*/
function () {
  return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return _has('callee', x);
  };
}();

var hasEnumBug = !
/*#__PURE__*/
{
  toString: null
}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString']; // Safari bug

var hasArgsEnumBug =
/*#__PURE__*/
function () {

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;

  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }

    idx += 1;
  }

  return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */


var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ?
/*#__PURE__*/
_curry1(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) :
/*#__PURE__*/
_curry1(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }

  var prop, nIdx;
  var ks = [];

  var checkArgsLength = hasArgsEnumBug && _isArguments(obj);

  for (prop in obj) {
    if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }

  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;

    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];

      if (_has(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }

      nIdx -= 1;
    }
  }

  return ks;
});

/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */

var map =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function () {
        return fn.call(this, functor.apply(this, arguments));
      });

    case '[object Object]':
      return _reduce(function (acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));

    default:
      return _map(fn, functor);
  }
}));

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
var _isInteger = Number.isInteger || function _isInteger(n) {
  return n << 0 === n;
};

/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      const list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */

var nth =
/*#__PURE__*/
_curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

/**
 * Retrieves the values at given paths of an object.
 *
 * @func
 * @memberOf R
 * @since v0.27.0
 * @category Object
 * @typedefn Idx = [String | Int]
 * @sig [Idx] -> {a} -> [a | Undefined]
 * @param {Array} pathsArray The array of paths to be fetched.
 * @param {Object} obj The object to retrieve the nested properties from.
 * @return {Array} A list consisting of values at paths specified by "pathsArray".
 * @see R.path
 * @example
 *
 *      R.paths([['a', 'b'], ['p', 0, 'q']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, 3]
 *      R.paths([['a', 'b'], ['p', 'r']], {a: {b: 2}, p: [{q: 3}]}); //=> [2, undefined]
 */

var paths =
/*#__PURE__*/
_curry2(function paths(pathsArray, obj) {
  return pathsArray.map(function (paths) {
    var val = obj;
    var idx = 0;
    var p;

    while (idx < paths.length) {
      if (val == null) {
        return;
      }

      p = paths[idx];
      val = _isInteger(p) ? nth(p, val) : val[p];
      idx += 1;
    }

    return val;
  });
});

/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop, R.nth
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 *      R.path(['a', 'b', 0], {a: {b: [1, 2, 3]}}); //=> 1
 *      R.path(['a', 'b', -2], {a: {b: [1, 2, 3]}}); //=> 2
 */

var path =
/*#__PURE__*/
_curry2(function path(pathAr, obj) {
  return paths([pathAr], obj)[0];
});

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc, R.pick
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */

var assoc =
/*#__PURE__*/
_curry3(function assoc(prop, val, obj) {
  var result = {};

  for (var p in obj) {
    result[p] = obj[p];
  }

  result[prop] = val;
  return result;
});

/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */

var isNil =
/*#__PURE__*/
_curry1(function isNil(x) {
  return x == null;
});

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */

var assocPath =
/*#__PURE__*/
_curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }

  var idx = path[0];

  if (path.length > 1) {
    var nextObj = !isNil(obj) && _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }

  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});

function _isFunction(x) {
  var type = Object.prototype.toString.call(x);
  return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object AsyncGeneratorFunction]';
}

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN, R.partial
 * @example
 *
 *      const addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      const curriedAddFourNumbers = R.curry(addFourNumbers);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */

var curry =
/*#__PURE__*/
_curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */

var type =
/*#__PURE__*/
_curry1(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});

function _arrayFromIterator(iter) {
  var list = [];
  var next;

  while (!(next = iter.next()).done) {
    list.push(next.value);
  }

  return list;
}

function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }

    idx += 1;
  }

  return false;
}

function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}

// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;

/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);

  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  } // if *a* array contains any element that is not included in *b*


  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (_objectIs$1(a, b)) {
    return true;
  }

  var typeA = type(a);

  if (typeA !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }

      break;

    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
        return false;
      }

      break;

    case 'Date':
      if (!_objectIs$1(a.valueOf(), b.valueOf())) {
        return false;
      }

      break;

    case 'Error':
      return a.name === b.name && a.message === b.message;

    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }

      break;
  }

  var idx = stackA.length - 1;

  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }

    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));

    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));

    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;

    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);

  if (keysA.length !== keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);
  idx = keysA.length - 1;

  while (idx >= 0) {
    var key = keysA[idx];

    if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }

    idx -= 1;
  }

  return true;
}

/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */

var equals =
/*#__PURE__*/
_curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

function _indexOf(list, a, idx) {
  var inf, item; // Array.prototype.indexOf doesn't exist below IE9

  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;

          while (idx < list.length) {
            item = list[idx];

            if (item === 0 && 1 / item === inf) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];

            if (typeof item === 'number' && item !== item) {
              return idx;
            }

            idx += 1;
          }

          return -1;
        } // non-zero numbers can utilise Set


        return list.indexOf(a, idx);
      // all these types can utilise Set

      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }

    }
  } // anything else not covered above, defer to R.equals


  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }

    idx += 1;
  }

  return -1;
}

function _includes(a, list) {
  return _indexOf(list, a, 0) >= 0;
}

function _quote(s) {
  var escaped = s.replace(/\\/g, '\\\\').replace(/[\b]/g, '\\b') // \b matches word boundary; [\b] matches backspace
  .replace(/\f/g, '\\f').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t').replace(/\v/g, '\\v').replace(/\0/g, '\\0');
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
var pad = function pad(n) {
  return (n < 10 ? '0' : '') + n;
};

var _toISOString = typeof Date.prototype.toISOString === 'function' ? function _toISOString(d) {
  return d.toISOString();
} : function _toISOString(d) {
  return d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate()) + 'T' + pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes()) + ':' + pad(d.getUTCSeconds()) + '.' + (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z';
};

function _complement(f) {
  return function () {
    return !f.apply(this, arguments);
  };
}

function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }

    idx += 1;
  }

  return result;
}

function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}

var XFilter =
/*#__PURE__*/
function () {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }

  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;

  XFilter.prototype['@@transducer/step'] = function (result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return XFilter;
}();

var _xfilter =
/*#__PURE__*/
_curry2(function _xfilter(f, xf) {
  return new XFilter(f, xf);
});

/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var filter =
/*#__PURE__*/
_curry2(
/*#__PURE__*/
_dispatchable(['filter'], _xfilter, function (pred, filterable) {
  return _isObject(filterable) ? _reduce(function (acc, key) {
    if (pred(filterable[key])) {
      acc[key] = filterable[key];
    }

    return acc;
  }, {}, keys(filterable)) : // else
  _filter(pred, filterable);
}));

/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */

var reject =
/*#__PURE__*/
_curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _includes(y, xs) ? '<Circular>' : _toString(y, xs);
  }; //  mapPairs :: (Object, [String]) -> [String]


  var mapPairs = function (obj, keys) {
    return _map(function (k) {
      return _quote(k) + ': ' + recur(obj[k]);
    }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';

    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function (k) {
        return /^\d+$/.test(k);
      }, keys(x)))).join(', ') + ']';

    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();

    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';

    case '[object Null]':
      return 'null';

    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);

    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);

    case '[object Undefined]':
      return 'undefined';

    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();

        if (repr !== '[object Object]') {
          return repr;
        }
      }

      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
}

/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */

var toString$1 =
/*#__PURE__*/
_curry1(function toString(val) {
  return _toString(val, []);
});

/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */

var fromPairs =
/*#__PURE__*/
_curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;

  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }

  return result;
});

/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of any of the target object's methods to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      const sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      const sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 *
 *      const dog = {
 *        speak: async () => 'Woof!'
 *      };
 *      const speak = R.invoker(0, 'speak');
 *      speak(dog).then(console.log) //~> 'Woof!'
 *
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */

var invoker =
/*#__PURE__*/
_curry2(function invoker(arity, method) {
  return curryN(arity + 1, function () {
    var target = arguments[arity];

    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }

    throw new TypeError(toString$1(target) + ' does not have a method named "' + method + '"');
  });
});

/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */

var lens =
/*#__PURE__*/
_curry2(function lens(getter, setter) {
  return function (toFunctorFn) {
    return function (target) {
      return map(function (focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});

/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      const xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */

var lensPath =
/*#__PURE__*/
_curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});

/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig ((v, k) -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      const isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */

var pickBy =
/*#__PURE__*/
_curry2(function pickBy(test, obj) {
  var result = {};

  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }

  return result;
});

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `sep`.
 * @see R.join
 * @example
 *
 *      const pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */

var split =
/*#__PURE__*/
invoker(1, 'split');

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */

var toPairs =
/*#__PURE__*/
_curry1(function toPairs(obj) {
  var pairs = [];

  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }

  return pairs;
});

var Const = function (x) {
  return {
    value: x,
    'fantasy-land/map': function () {
      return this;
    }
  };
};
/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      const xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */


var view =
/*#__PURE__*/
_curry2(function view(lens, x) {
  // Using `Const` effectively ignores the setter function of the `lens`,
  // leaving the value returned by the getter function unmodified.
  return lens(Const)(x).value;
});

var isDevelopment = function isDevelopment() {
  return process.env.NODE_ENV === 'development';
};
var cStyle = "\n  background-color: dodgerblue; \n  color: white;\n  padding: 0 .5rem;\n  border-radius: 3px;\n";
var trace = curry(function () {
  var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var x = arguments.length > 1 ? arguments[1] : undefined;
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : cStyle;

  if (isDevelopment()) {
    // eslint-disable-next-line
    console.info("%c".concat(info, "%c"), style);
    console.info("--->", x);
  }

  return x;
});

var filterKeys = curryN(2, function () {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var onlyKeys = function onlyKeys(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];

    return keys.includes(key);
  };

  var newPairs = filter(onlyKeys, toPairs(object));
  return fromPairs(newPairs);
});
/**
 * triggers callback function when the Enter key is pressed
 * @param {Function} fn the callback function
 * @returns Function
 */

var onEnter = function onEnter(fn) {
  return function (evt) {
    if (evt.keyCode === 13) fn(evt);
  };
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var Naira = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.298\" height=\"31\" viewBox=\"0 0 21.298 31\"><g transform=\"translate(0.001)\"><text transform=\"translate(1.5 25)\" fill=\"#705df5\" font-size=\"25\" font-family=\"Quicksand-Regular, Quicksand\"><tspan x=\"0\" y=\"0\">N</tspan></text><path d=\"M1949.232,3320.29c1.954-.057,21.3,0,21.3,0\" transform=\"translate(-1949.232 -3307.025)\" fill=\"none\" stroke=\"#705df5\" stroke-width=\"1\"/><path d=\"M1949.232,3320.265c1.954.011,21.3,0,21.3,0\" transform=\"translate(-1949.232 -3302)\" fill=\"none\" stroke=\"#705df5\" stroke-width=\"1\"/></g></svg>";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t@media (max-width: ", "em) {\n\t\t\t", "\n\t\t}\n\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\twidth: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\tborder: solid 1px ", ";\n\t\tbox-shadow: none !important;\n\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\t\tbox-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);\n\t\t&:hover {\n\t\t\tbox-shadow: 0 3px 12px -5px rgba(0, 0, 0, 0.3);\n\t\t}\n\t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t\tbox-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 18px 20px;\n\tborder-radius: 12px;\n\tbox-sizing: border-box;\n\tbackground-color: ", ";\n\ttransition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n\n\t", "\n\n\t", "\n\n\t", "\n\n\t", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var theme = curry(function (key, props) {
  var path = _.isArray(key) ? key : split(".", key);
  var getPath = view(lensPath(path));
  return getPath(props.theme);
});
var themeOr = curry(function (fallback, key, props) {
  var keyFrom = theme(key);
  return keyFrom(props) || keyFrom({
    theme: fallback
  });
});
var withProp = curry(function (key, style, props) {
  return props[key] && style;
});
var propIs = curry(function (prop, functor, style, props) {
  return functor(props[prop]) && style;
});
var CardStyle = function CardStyle() {
  var con = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return styled__default.article(_templateObject(), color("bgcolor"), withProp("static", styled.css(_templateObject2()), con), withProp("clickable", styled.css(_templateObject3()), con), withProp("shadow", styled.css(_templateObject4()), con), withProp("outlineDanger", styled.css(_templateObject5(), color("danger"))));
};
var fullWidth = withProp("fullwidth", styled.css(_templateObject6()));
var color = theme;
var sizes = {
  bigDestktop: 1800,
  // 1800 above
  tabletLand: 1200,
  tabletPort: 900,
  phone: 600
}; // Iterate through the sizes and create a media template

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return styled.css(_templateObject7(), sizes[label] / 16, styled.css.apply(void 0, arguments));
  };

  return acc;
}, {});

var defaultConfig = {
  style: 'currency',
  currencyDisplay: 'symbol',
  maximumFractionDigits: 2
};
var currency = function currency() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
  return function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Intl.NumberFormat(lang, _objectSpread2({}, defaultConfig, {}, config)).format;
  };
};
var numberFormat = currency('en-US')({
  style: 'decimal'
});
var usd = currency('en-US')({
  currency: 'USD'
});
var euro = currency('en-US')({
  currency: 'EUR'
});
var naira = currency('en-US')({
  currency: 'NGN'
});

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n      height: 50px;\n      img {\n        height: 40px;\n      }\n      input {\n        font-size: 1.7rem;\n      }\n    "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n      border: solid 1px ", ";\n    "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  height: 40px;\n  min-width: 250px;\n  box-sizing: border-box;\n  padding: 0 1rem;\n  align-items: center;\n  border-radius: 12px;\n  display: inline-flex;\n  background-color: white;\n  border: solid 1px transparent;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);\n\n  img {\n    width: 30px;\n    height: 30px;\n  }\n\n  > input {\n    margin: 0;\n    flex: 1 0;\n    max-width: calc(100% - 30px);\n    font-size: 1.2rem;\n    text-align: right;\n    line-height: 30px;\n    outline: none;\n    appearance: none;\n    border: none;\n    font-family: var(--input-font);\n  }\n\n  ", "\n  ", "\n\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var InputStyle = styled__default.div(_templateObject$1(), function (props) {
  return props.focus && styled.css(_templateObject2$1(), color("primary"));
}, fullWidth(), function (props) {
  return props.large && styled.css(_templateObject3$1());
});
var INVALID_MESSAGE = "Invalid Number provided";

var number = function number(_char) {
  return ___default.isNumber(_char) && !___default.isNaN(_char);
};

var validateInput = function validateInput(evt) {
  var _char2 = parseInt(evt.key);

  var allowedCodes = [8, 9, 190, 37, 38, 39, 40]; // log(evt.keyCode);

  if (allowedCodes.includes(evt.keyCode) || number(_char2)) return; // log('I prevented');

  evt.preventDefault();
};

var handleNaN = function handleNaN(fn) {
  return function (value) {
    if (value !== "NaN") return value;
    fn();
    return 0;
  };
};

var clean = function clean(value) {
  return ___default.replace(String(value), /,/gm, "");
};
var NumberInput = React__default.forwardRef(function (props, ref) {
  var _useState = React.useState({
    value: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      prop = _useState2[0],
      setProp = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var allProps = _objectSpread2({}, props, {
    focus: focus
  });

  var formatValue = fp.compose( // trace('returning to zero(0)'),
  handleNaN(function () {
    return props.isInvalid(INVALID_MESSAGE);
  }), // trace('naira'),
  numberFormat, // trace('cleaned')
  clean);
  return /*#__PURE__*/React__default.createElement(InputStyle, allProps, /*#__PURE__*/React__default.createElement("img", {
    src: Naira,
    alt: "cur",
    title: "currency"
  }), /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    name: props.name,
    placeholder: "0.0",
    ref: ref,
    value: prop.value,
    onKeyDown: function onKeyDown(evt) {
      evt.keyCode === 13 ? evt.target.blur() : validateInput(evt);
    },
    onChange: function onChange(_ref) {
      var target = _ref.target;
      return setProp({
        value: clean(target.value)
      });
    },
    onFocus: function onFocus(_ref2) {
      var target = _ref2.target;
      setFocus(true);
      setProp({
        value: clean(target.value)
      });
    },
    onBlur: function onBlur(_ref3) {
      var target = _ref3.target;
      setFocus(false);
      setProp({
        value: formatValue(target.value)
      });
    }
  }));
});
NumberInput.defaultProps = {
  isInvalid: function isInvalid(message) {
    throw Error(message);
  },
  large: false,
  name: "wg-input",
  fullWidth: false
};
NumberInput.propTypes = {
  isInvalid: propTypes.func
};

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n\tmargin-right: 5px;\n\tcursor: pointer;\n\n\t> input + span {\n\t\tborder-radius: 2px;\n\t}\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\tpadding-right: 5px;\n\n\t", "\n\n\t> span {\n\t\tmargin-left: 1rem;\n\t\tline-height: 20px;\n\t\tdisplay: inline-block;\n\t\t", "\n\t}\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n\twidth: 20px;\n\theight: 20px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\n\tinput {\n\t\tvisibility: hidden;\n\t\twidth: 0.1px;\n\t\theight: 0.1px;\n\t\tposition: absolute;\n\t\tleft: -5px;\n\t\tborder: solid 1px black;\n\t}\n\n\tinput + span {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tdisplay: inline-block;\n\t\tborder-radius: 50%;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tpadding: 1px;\n\t\tbackground-clip: content-box;\n\t\ttext-align: center;\n\t\tbox-sizing: border-box;\n\t\tborder: solid 1px ", ";\n\t}\n\n\tinput:checked + span {\n\t\tbackground-color: ", ";\n\t}\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n\t\t\theight: 50px;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: 12px;\n\t\t\tborder: solid 2px transparent;\n\t\t"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\tborder: solid 2px ", ";\n\t\t"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: ", ";\n\tborder: none;\n\theight: 38px;\n\tmin-width: 243px;\n\tborder-radius: 6px;\n\ttext-indent: 15px;\n\tfont-size: 13px;\n\tfont-family: var(--heading-font, 'Quicksand');\n\ttransition: all 0.3s ease-out;\n\tborder-color: ", ";\n\tcaret-color: ", ";\n\toutline: none;\n\n\t&::placeholder {\n\t\tcolor: #a0a0a0;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #fff;\n\t\tbox-shadow: 0 3px 6px rgba(112, 93, 245, 0.16);\n\t}\n\n\t&:focus {\n\t\tborder: solid 1px ", ";\n\t\t", "\n\t}\n\n\t", "\n\t", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var InputStyle$1 = styled__default.input(_templateObject$2(), theme("whitesmoke"), theme("primary"), theme("primary"), theme("primary"), withProp("large")(styled.css(_templateObject2$2(), theme("primary"))), fullWidth(), withProp("large")(styled.css(_templateObject3$2())));
var Input = React__default.forwardRef(function SimpleInput(props, ref) {
  return /*#__PURE__*/React__default.createElement(InputStyle$1, _extends({}, props, {
    ref: ref
  }));
}); // const IconInputStyle = styled.div`
// 	--input-mb: 0;
// 	display: flex;
// 	position: relative;
// 	margin-bottom: 1rem;
// 	${fullWidth()}
// 	span {
// 		position: absolute;
// 		display: inline-flex;
// 		justify-content: center;
// 		align-items: center;
// 		background-color: white;
// 		border-radius: 6px;
// 		margin: 6px;
// 		width: 28px;
// 		height: 28px;
// 		color: ${theme("primary")};
// 		${props =>
// 		props.large &&
// 			css`
// 				height: 38px;
// 				width: 38px;
// 			`}
// 	}
// 	span + input {
// 		text-indent: 44px;
// 		${props =>
// 		props.large &&
// 			css`
// 				text-indent: 54px;
// 			`}
// 	}
// `
// export const IconInput = props => <div>Change This</div>

var RadioStyle = styled__default.label(_templateObject4$1(), theme("primary"), theme("primary"));
var RadioInput = React__default.forwardRef(function RadioInput(props, ref) {
  return /*#__PURE__*/React__default.createElement(RadioStyle, null, /*#__PURE__*/React__default.createElement("input", _extends({
    ref: ref,
    type: "radio"
  }, props)), /*#__PURE__*/React__default.createElement("span", null));
});
var RadioLabelStyle = styled__default.div(_templateObject5$1(), fullWidth(), ""
/* border: solid 1px black; */
);
var RadioLabel = function RadioLabel(props) {
  return /*#__PURE__*/React__default.createElement(RadioLabelStyle, props, /*#__PURE__*/React__default.createElement(RadioInput, props), /*#__PURE__*/React__default.createElement("span", null, props.label));
};
RadioLabel.defaultProps = {
  label: "Something"
};
var CheckboxStyle = styled__default(RadioStyle)(_templateObject6$1());
var Checkbox = function Checkbox(props) {
  return /*#__PURE__*/React__default.createElement(CheckboxStyle, null, /*#__PURE__*/React__default.createElement("input", _extends({
    type: "checkbox"
  }, props)), /*#__PURE__*/React__default.createElement("span", null));
};

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    padding-right: 0;\n    padding-left: 0;\n\n    .material-icons {\n      margin-right: 0;\n      text-align: center;\n      flex: 1;\n    }\n  "]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n    padding: 1rem 2rem;\n  "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n    border: solid 2px var(--theme-color, #888);\n    color: var(--theme-color, #888);\n  "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    --theme-color: ", ";\n    background-color: ", ";\n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    --theme-color: ", ";\n    background-color: ", ";\n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  --theme-color: ", ";\n  background-color: ", ";\n  padding: .7rem 1.8rem;\n  white-space: nowrap;\n  font-size: 13px;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  cursor: pointer;\n  border-radius: 12px;\n  border: solid 2px transparent;\n  box-sizing: border-box;\n  color: white;\n  display: inline-flex;\n  transform: scale(1);\n  transition: all .3s cubic-bezier(.08,.82,.17,1);\n  font-family: var(--heading-font, 'Quicksand');\n\n  .material-icons {\n    margin-right: .5rem;\n  }\n\n  &:disabled {\n    opacity: .50;  \n  }\n\n  &:focus, &:hover:focus {\n    transform: scale(.95);\n    outline: none;\n  }\n  \n  &:hover {\n    box-shadow: 0 3px 8px -4px rgba(0, 0, 0, 0.3);\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonStyle = styled__default.button(_templateObject$3(), color("accent"), color("accent"), withProp("primary")(styled.css(_templateObject2$3(), color("primary"), color("primary"))), withProp("danger")(styled.css(_templateObject3$3(), color("danger"), color("danger"))), withProp("outline")(styled.css(_templateObject4$2())), withProp("large")(styled.css(_templateObject5$2())), withProp("circle")(styled.css(_templateObject6$2())), fullWidth());
var Button = ButtonStyle;

var IconButton = function IconButton(props) {
  return /*#__PURE__*/React__default.createElement(Button, props, /*#__PURE__*/React__default.createElement("span", null, props.children));
};
IconButton.propTypes = {
  children: propTypes.node.isRequired
};
var CircleButton = function CircleButton(props) {
  return /*#__PURE__*/React__default.createElement(Button, _extends({
    circle: true
  }, props));
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var NOTHING = typeof Symbol !== "undefined" ? Symbol("immer-nothing") : defineProperty({}, "immer-nothing", true);

var DRAFT_STATE = typeof Symbol !== "undefined" ? Symbol("immer-state") : "__$immer_state";

function isDraft(value) {
    return !!value && !!value[DRAFT_STATE];
}

function isDraftable(value) {
    if (!value) return false;
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    if (Array.isArray(value)) return true;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}

var assign = Object.assign || function assign(target, value) {
    for (var key in value) {
        if (has$2(value, key)) {
            target[key] = value[key];
        }
    }
    return target;
};

function shallowCopy(value) {
    if (Array.isArray(value)) return value.slice();
    var target = value.__proto__ === undefined ? Object.create(null) : {};
    return assign(target, value);
}

function each(value, cb) {
    if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            cb(i, value[i], value);
        }
    } else {
        for (var key in value) {
            cb(key, value[key], value);
        }
    }
}

function has$2(thing, prop) {
    return Object.prototype.hasOwnProperty.call(thing, prop);
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

function generatePatches(state, basePath, patches, inversePatches) {
    Array.isArray(state.base) ? generateArrayPatches(state, basePath, patches, inversePatches) : generateObjectPatches(state, basePath, patches, inversePatches);
}

function generateArrayPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy,
        assigned = state.assigned;

    var minLength = Math.min(base.length, copy.length);

    // Look for replaced indices.
    for (var i = 0; i < minLength; i++) {
        if (assigned[i] && base[i] !== copy[i]) {
            var path = basePath.concat(i);
            patches.push({ op: "replace", path: path, value: copy[i] });
            inversePatches.push({ op: "replace", path: path, value: base[i] });
        }
    }

    // Did the array expand?
    if (minLength < copy.length) {
        for (var _i = minLength; _i < copy.length; _i++) {
            patches.push({
                op: "add",
                path: basePath.concat(_i),
                value: copy[_i]
            });
        }
        inversePatches.push({
            op: "replace",
            path: basePath.concat("length"),
            value: base.length
        });
    }

    // ...or did it shrink?
    else if (minLength < base.length) {
            patches.push({
                op: "replace",
                path: basePath.concat("length"),
                value: copy.length
            });
            for (var _i2 = minLength; _i2 < base.length; _i2++) {
                inversePatches.push({
                    op: "add",
                    path: basePath.concat(_i2),
                    value: base[_i2]
                });
            }
        }
}

function generateObjectPatches(state, basePath, patches, inversePatches) {
    var base = state.base,
        copy = state.copy;

    each(state.assigned, function (key, assignedValue) {
        var origValue = base[key];
        var value = copy[key];
        var op = !assignedValue ? "remove" : key in base ? "replace" : "add";
        if (origValue === base && op === "replace") return;
        var path = basePath.concat(key);
        patches.push(op === "remove" ? { op: op, path: path } : { op: op, path: path, value: value });
        inversePatches.push(op === "add" ? { op: "remove", path: path } : op === "remove" ? { op: "add", path: path, value: origValue } : { op: "replace", path: path, value: origValue });
    });
}

function applyPatches(draft, patches) {
    for (var i = 0; i < patches.length; i++) {
        var patch = patches[i];
        var path = patch.path;

        if (path.length === 0 && patch.op === "replace") {
            draft = patch.value;
        } else {
            var base = draft;
            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {
                base = base[path[_i3]];
                if (!base || (typeof base === "undefined" ? "undefined" : _typeof(base)) !== "object") throw new Error("Cannot apply patch, path doesn't resolve: " + path.join("/")); // prettier-ignore
            }
            var key = path[path.length - 1];
            switch (patch.op) {
                case "replace":
                case "add":
                    // TODO: add support is not extensive, it does not support insertion or `-` atm!
                    base[key] = patch.value;
                    break;
                case "remove":
                    if (Array.isArray(base)) {
                        if (key !== base.length - 1) throw new Error("Only the last index of an array can be removed, index: " + key + ", length: " + base.length); // prettier-ignore
                        base.length -= 1;
                    } else {
                        delete base[key];
                    }
                    break;
                default:
                    throw new Error("Unsupported patch operation: " + patch.op);
            }
        }
    }
    return draft;
}

// @ts-check

var descriptors = {};

// For nested produce calls:
var scopes = [];
var currentScope = function currentScope() {
    return scopes[scopes.length - 1];
};

function willFinalize(result, baseDraft, needPatches) {
    var scope = currentScope();
    scope.forEach(function (state) {
        return state.finalizing = true;
    });
    if (result === undefined || result === baseDraft) {
        if (needPatches) markChangesRecursively(baseDraft);
        // This is faster when we don't care about which attributes changed.
        markChangesSweep(scope);
    }
}

function createDraft(base, parent) {
    var draft = void 0;
    if (isDraft(base)) {
        var _state = base[DRAFT_STATE];
        // Avoid creating new drafts when copying.
        _state.finalizing = true;
        draft = shallowCopy(_state.draft);
        _state.finalizing = false;
    } else {
        draft = shallowCopy(base);
    }
    each(base, function (prop) {
        Object.defineProperty(draft, "" + prop, createPropertyProxy("" + prop));
    });

    // See "proxy.js" for property documentation.
    var state = {
        scope: parent ? parent.scope : currentScope(),
        modified: false,
        finalizing: false, // es5 only
        finalized: false,
        assigned: {},
        parent: parent,
        base: base,
        draft: draft,
        copy: null,
        revoke: revoke,
        revoked: false // es5 only
    };

    createHiddenProperty(draft, DRAFT_STATE, state);
    state.scope.push(state);
    return draft;
}

function revoke() {
    this.revoked = true;
}

function source(state) {
    return state.copy || state.base;
}

function _get(state, prop) {
    assertUnrevoked(state);
    var value = source(state)[prop];
    // Drafts are only created for proxyable values that exist in the base state.
    if (!state.finalizing && value === state.base[prop] && isDraftable(value)) {
        prepareCopy(state);
        return state.copy[prop] = createDraft(value, state);
    }
    return value;
}

function _set(state, prop, value) {
    assertUnrevoked(state);
    state.assigned[prop] = true;
    if (!state.modified) {
        if (is(source(state)[prop], value)) return;
        markChanged(state);
        prepareCopy(state);
    }
    state.copy[prop] = value;
}

function markChanged(state) {
    if (!state.modified) {
        state.modified = true;
        if (state.parent) markChanged(state.parent);
    }
}

function prepareCopy(state) {
    if (!state.copy) state.copy = shallowCopy(state.base);
}

function createPropertyProxy(prop) {
    return descriptors[prop] || (descriptors[prop] = {
        configurable: true,
        enumerable: true,
        get: function get$$1() {
            return _get(this[DRAFT_STATE], prop);
        },
        set: function set$$1(value) {
            _set(this[DRAFT_STATE], prop, value);
        }
    });
}

function assertUnrevoked(state) {
    if (state.revoked === true) throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + JSON.stringify(state.copy || state.base));
}

// This looks expensive, but only proxies are visited, and only objects without known changes are scanned.
function markChangesSweep(scope) {
    // The natural order of drafts in the `scope` array is based on when they
    // were accessed. By processing drafts in reverse natural order, we have a
    // better chance of processing leaf nodes first. When a leaf node is known to
    // have changed, we can avoid any traversal of its ancestor nodes.
    for (var i = scope.length - 1; i >= 0; i--) {
        var state = scope[i];
        if (state.modified === false) {
            if (Array.isArray(state.base)) {
                if (hasArrayChanges(state)) markChanged(state);
            } else if (hasObjectChanges(state)) markChanged(state);
        }
    }
}

function markChangesRecursively(object) {
    if (!object || (typeof object === "undefined" ? "undefined" : _typeof(object)) !== "object") return;
    var state = object[DRAFT_STATE];
    if (!state) return;
    var base = state.base,
        draft = state.draft,
        assigned = state.assigned;

    if (!Array.isArray(object)) {
        // Look for added keys.
        Object.keys(draft).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (base[key] === undefined && !has$2(base, key)) {
                assigned[key] = true;
                markChanged(state);
            } else if (!assigned[key]) {
                // Only untouched properties trigger recursion.
                markChangesRecursively(draft[key]);
            }
        });
        // Look for removed keys.
        Object.keys(base).forEach(function (key) {
            // The `undefined` check is a fast path for pre-existing keys.
            if (draft[key] === undefined && !has$2(draft, key)) {
                assigned[key] = false;
                markChanged(state);
            }
        });
    } else if (hasArrayChanges(state)) {
        markChanged(state);
        assigned.length = true;
        if (draft.length < base.length) {
            for (var i = draft.length; i < base.length; i++) {
                assigned[i] = false;
            }
        } else {
            for (var _i = base.length; _i < draft.length; _i++) {
                assigned[_i] = true;
            }
        }
        for (var _i2 = 0; _i2 < draft.length; _i2++) {
            // Only untouched indices trigger recursion.
            if (assigned[_i2] === undefined) markChangesRecursively(draft[_i2]);
        }
    }
}

function hasObjectChanges(state) {
    var base = state.base,
        draft = state.draft;

    // Search for added keys. Start at the back, because non-numeric keys
    // are ordered by time of definition on the object.

    var keys = Object.keys(draft);
    for (var i = keys.length - 1; i >= 0; i--) {
        // The `undefined` check is a fast path for pre-existing keys.
        if (base[keys[i]] === undefined && !has$2(base, keys[i])) {
            return true;
        }
    }

    // Since no keys have been added, we can compare lengths to know if an
    // object has been deleted.
    return keys.length !== Object.keys(base).length;
}

function hasArrayChanges(state) {
    var draft = state.draft;

    if (draft.length !== state.base.length) return true;
    // See #116
    // If we first shorten the length, our array interceptors will be removed.
    // If after that new items are added, result in the same original length,
    // those last items will have no intercepting property.
    // So if there is no own descriptor on the last position, we know that items were removed and added
    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check
    // the last one
    var descriptor = Object.getOwnPropertyDescriptor(draft, draft.length - 1);
    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)
    if (descriptor && !descriptor.get) return true;
    // For all other cases, we don't have to compare, as they would have been picked up by the index setters
    return false;
}

function createHiddenProperty(target, prop, value) {
    Object.defineProperty(target, prop, {
        value: value,
        enumerable: false,
        writable: true
    });
}



var legacyProxy = Object.freeze({
	scopes: scopes,
	currentScope: currentScope,
	willFinalize: willFinalize,
	createDraft: createDraft
});

// @ts-check

// For nested produce calls:
var scopes$1 = [];
var currentScope$1 = function currentScope() {
    return scopes$1[scopes$1.length - 1];
};

// Do nothing before being finalized.
function willFinalize$1() {}

function createDraft$1(base, parent) {
    var state = {
        // Track which produce call this is associated with.
        scope: parent ? parent.scope : currentScope$1(),
        // True for both shallow and deep changes.
        modified: false,
        // Used during finalization.
        finalized: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned: {},
        // The parent draft state.
        parent: parent,
        // The base state.
        base: base,
        // The base proxy.
        draft: null,
        // Any property proxies.
        drafts: {},
        // The base copy with any updated values.
        copy: null,
        // Called by the `produce` function.
        revoke: null
    };

    var _ref = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps),
        revoke = _ref.revoke,
        proxy = _ref.proxy;

    state.draft = proxy;
    state.revoke = revoke;

    state.scope.push(state);
    return proxy;
}

var objectTraps = {
    get: get$1,
    has: function has$$1(target, prop) {
        return prop in source$1(target);
    },
    ownKeys: function ownKeys(target) {
        return Reflect.ownKeys(source$1(target));
    },

    set: set$1,
    deleteProperty: deleteProperty,
    getOwnPropertyDescriptor: getOwnPropertyDescriptor,
    defineProperty: defineProperty$1,
    setPrototypeOf: function setPrototypeOf() {
        throw new Error("Immer does not support `setPrototypeOf()`.");
    }
};

var arrayTraps = {};
each(objectTraps, function (key, fn) {
    arrayTraps[key] = function () {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
    };
});
arrayTraps.deleteProperty = function (state, prop) {
    if (isNaN(parseInt(prop))) throw new Error("Immer does not support deleting properties from arrays: " + prop);
    return objectTraps.deleteProperty.call(this, state[0], prop);
};
arrayTraps.set = function (state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) throw new Error("Immer does not support setting non-numeric properties on arrays: " + prop);
    return objectTraps.set.call(this, state[0], prop, value);
};

function source$1(state) {
    return state.copy || state.base;
}

function get$1(state, prop) {
    if (prop === DRAFT_STATE) return state;
    var drafts = state.drafts;

    // Check for existing draft in unmodified state.

    if (!state.modified && has$2(drafts, prop)) {
        return drafts[prop];
    }

    var value = source$1(state)[prop];
    if (state.finalized || !isDraftable(value)) return value;

    // Check for existing draft in modified state.
    if (state.modified) {
        // Assigned values are never drafted. This catches any drafts we created, too.
        if (value !== state.base[prop]) return value;
        // Store drafts on the copy (when one exists).
        drafts = state.copy;
    }

    return drafts[prop] = createDraft$1(value, state);
}

function set$1(state, prop, value) {
    if (!state.modified) {
        // Optimize based on value's truthiness. Truthy values are guaranteed to
        // never be undefined, so we can avoid the `in` operator. Lastly, truthy
        // values may be drafts, but falsy values are never drafts.
        var isUnchanged = value ? is(state.base[prop], value) || value === state.drafts[prop] : is(state.base[prop], value) && prop in state.base;
        if (isUnchanged) return true;
        markChanged$1(state);
    }
    state.assigned[prop] = true;
    state.copy[prop] = value;
    return true;
}

function deleteProperty(state, prop) {
    // The `undefined` check is a fast path for pre-existing keys.
    if (state.base[prop] !== undefined || prop in state.base) {
        state.assigned[prop] = false;
        markChanged$1(state);
    }
    if (state.copy) delete state.copy[prop];
    return true;
}

function getOwnPropertyDescriptor(state, prop) {
    var owner = state.modified ? state.copy : has$2(state.drafts, prop) ? state.drafts : state.base;
    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (descriptor && !(Array.isArray(owner) && prop === "length")) descriptor.configurable = true;
    return descriptor;
}

function defineProperty$1() {
    throw new Error("Immer does not support defining properties on draft objects.");
}

function markChanged$1(state) {
    if (!state.modified) {
        state.modified = true;
        state.copy = assign(shallowCopy(state.base), state.drafts);
        state.drafts = null;
        if (state.parent) markChanged$1(state.parent);
    }
}

var modernProxy = Object.freeze({
	scopes: scopes$1,
	currentScope: currentScope$1,
	willFinalize: willFinalize$1,
	createDraft: createDraft$1
});

function verifyMinified() {}

var configDefaults = {
    useProxies: typeof Proxy !== "undefined" && typeof Reflect !== "undefined",
    autoFreeze: typeof process !== "undefined" ? process.env.NODE_ENV !== "production" : verifyMinified.name === "verifyMinified",
    onAssign: null,
    onDelete: null,
    onCopy: null
};

var Immer = function () {
    function Immer(config) {
        classCallCheck(this, Immer);

        assign(this, configDefaults, config);
        this.setUseProxies(this.useProxies);
        this.produce = this.produce.bind(this);
    }

    createClass(Immer, [{
        key: "produce",
        value: function produce(base, recipe, patchListener) {
            var _this = this;

            // curried invocation
            if (typeof base === "function" && typeof recipe !== "function") {
                var defaultBase = recipe;
                recipe = base;

                // prettier-ignore
                return function () {
                    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBase;
                    return _this.produce(base, function (draft) {
                        var _recipe;

                        return (_recipe = recipe).call.apply(_recipe, [draft, draft].concat(args));
                    });
                };
            }

            // prettier-ignore
            {
                if (typeof recipe !== "function") throw new Error("if first argument is not a function, the second argument to produce should be a function");
                if (patchListener !== undefined && typeof patchListener !== "function") throw new Error("the third argument of a producer should not be set or a function");
            }

            var result = void 0;
            // Only create proxies for plain objects/arrays.
            if (!isDraftable(base)) {
                result = recipe(base);
                if (result === undefined) return base;
            }
            // See #100, don't nest producers
            else if (isDraft(base)) {
                    result = recipe.call(base, base);
                    if (result === undefined) return base;
                }
                // The given value must be proxied.
                else {
                        this.scopes.push([]);
                        var baseDraft = this.createDraft(base);
                        try {
                            result = recipe.call(baseDraft, baseDraft);
                            this.willFinalize(result, baseDraft, !!patchListener);

                            // Never generate patches when no listener exists.
                            var patches = patchListener && [],
                                inversePatches = patchListener && [];

                            // Finalize the modified draft...
                            if (result === undefined || result === baseDraft) {
                                result = this.finalize(baseDraft, [], patches, inversePatches);
                            }
                            // ...or use a replacement value.
                            else {
                                    // Users must never modify the draft _and_ return something else.
                                    if (baseDraft[DRAFT_STATE].modified) throw new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft."); // prettier-ignore

                                    // Finalize the replacement in case it contains (or is) a subset of the draft.
                                    if (isDraftable(result)) result = this.finalize(result);

                                    if (patchListener) {
                                        patches.push({
                                            op: "replace",
                                            path: [],
                                            value: result
                                        });
                                        inversePatches.push({
                                            op: "replace",
                                            path: [],
                                            value: base
                                        });
                                    }
                                }
                        } finally {
                            this.currentScope().forEach(function (state) {
                                return state.revoke();
                            });
                            this.scopes.pop();
                        }
                        patchListener && patchListener(patches, inversePatches);
                    }
            // Normalize the result.
            return result === NOTHING ? undefined : result;
        }
    }, {
        key: "setAutoFreeze",
        value: function setAutoFreeze(value) {
            this.autoFreeze = value;
        }
    }, {
        key: "setUseProxies",
        value: function setUseProxies(value) {
            this.useProxies = value;
            assign(this, value ? modernProxy : legacyProxy);
        }
        /**
         * @internal
         * Finalize a draft, returning either the unmodified base state or a modified
         * copy of the base state.
         */

    }, {
        key: "finalize",
        value: function finalize(draft, path, patches, inversePatches) {
            var state = draft[DRAFT_STATE];
            if (!state) {
                if (Object.isFrozen(draft)) return draft;
                return this.finalizeTree(draft);
            }
            // Never finalize drafts owned by an outer scope.
            if (state.scope !== this.currentScope()) {
                return draft;
            }
            if (!state.modified) return state.base;
            if (!state.finalized) {
                state.finalized = true;
                this.finalizeTree(state.draft, path, patches, inversePatches);
                if (this.onDelete) {
                    var assigned = state.assigned;

                    for (var prop in assigned) {
                        assigned[prop] || this.onDelete(state, prop);
                    }
                }
                if (this.onCopy) this.onCopy(state);

                // Nested producers must never auto-freeze their result,
                // because it may contain drafts from parent producers.
                if (this.autoFreeze && this.scopes.length === 1) {
                    Object.freeze(state.copy);
                }

                if (patches) generatePatches(state, path, patches, inversePatches);
            }
            return state.copy;
        }
        /**
         * @internal
         * Finalize all drafts in the given state tree.
         */

    }, {
        key: "finalizeTree",
        value: function finalizeTree(root, path, patches, inversePatches) {
            var _this2 = this;

            var state = root[DRAFT_STATE];
            if (state) {
                root = this.useProxies ? state.copy : state.copy = shallowCopy(state.draft);
            }

            var onAssign = this.onAssign;

            var finalizeProperty = function finalizeProperty(prop, value, parent) {
                // Only `root` can be a draft in here.
                var inDraft = !!state && parent === root;

                if (isDraft(value)) {
                    // prettier-ignore
                    parent[prop] = value =
                    // Patches are never generated for assigned properties.
                    patches && inDraft && !state.assigned[prop] ? _this2.finalize(value, path.concat(prop), patches, inversePatches) : _this2.finalize(value);

                    // Unchanged drafts are ignored.
                    if (inDraft && value === state.base[prop]) return;
                }
                // Unchanged draft properties are ignored.
                else if (inDraft && is(value, state.base[prop])) {
                        return;
                    }
                    // Search new objects for unfinalized drafts. Frozen objects should never contain drafts.
                    else if (isDraftable(value) && !Object.isFrozen(value)) {
                            each(value, finalizeProperty);
                        }

                if (inDraft && onAssign) {
                    onAssign(state, prop, value);
                }
            };

            each(root, finalizeProperty);
            return root;
        }
    }]);
    return Immer;
}();

var immer = new Immer();

/**
 * The `produce` function takes a value and a "recipe function" (whose
 * return value often depends on the base state). The recipe function is
 * free to mutate its first argument however it wants. All mutations are
 * only ever applied to a __copy__ of the base state.
 *
 * Pass only a function to create a "curried producer" which relieves you
 * from passing the recipe function every time.
 *
 * Only plain objects and arrays are made mutable. All other objects are
 * considered uncopyable.
 *
 * Note: This function is __bound__ to its `Immer` instance.
 *
 * @param {any} base - the initial state
 * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified
 * @param {Function} patchListener - optional function that will be called with all the patches produced here
 * @returns {any} a new state, or the initial state if nothing was modified
 */
var produce = immer.produce;

/**
 * Apply an array of Immer patches to the first argument.
 *
 * This function is a producer, which means copy-on-write is in effect.
 */
var applyPatches$1 = produce(applyPatches);

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 0.8rem;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\t\t.wg-label {\n\t\t\tfont-size: 0.9rem;\n\t\t}\n\t"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\twidth: auto;\n\n\t", "\n\t", "\n\n  textarea {\n\t\tmax-width: 100%;\n\t\tresize: vertical;\n\t\tborder: none;\n\t\twidth: 100%;\n\t\toutline: none;\n\t\tbox-sizing: border-box;\n\t\tmin-width: 240px;\n\t\tpadding: 1rem 1.5rem;\n\t\tbackground: transparent;\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n\t\t&::after {\n\t\t\tcontent: \"\";\n\t\t\twidth: 12px;\n\t\t\theight: 12px;\n\t\t\tflex: 0 0 12px;\n\t\t\tright: 15px;\n\t\t\tpointer-events: none;\n\t\t\tposition: absolute;\n\t\t\tborder: solid 1px ", ";\n\t\t\ttransform: rotate(45deg) translate(-25%);\n\t\t\tborder-color: transparent #308ddb #308ddb transparent;\n\t\t}\n\t"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tmargin-top: 10px;\n\talign-items: center;\n\tpadding: 0.5rem 1rem;\n\tbox-sizing: border-box;\n\n\t", ";\n\n\t&, & > * {\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t", "\n\n\tinput, select {\n\t\toutline: none !important;\n\t\tborder: none;\n\t\t-webkit-appearance: none;\n\t\tappearance: none;\n\t\twidth: 100%;\n\t\tmin-height: 30px;\n\t\tbackground: transparent;\n\t}\n\n\tinput[type=\"number\"] {\n\t\ttext-align: right;\n\t}\n"]);

  _templateObject6$3 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tmin-width: 250px;\n\t", "\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n\t\tborder: none;\n\t\tbackground-color: whitesmoke;\n\n\t\t> .wg-label {\n\t\t\topacity: 0.5;\n\t\t\tbackground-color: transparent;\n\t\t}\n\t"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n\t\tborder-color: ", ";\n\n\t\t.wg-label {\n\t\t\tfont-size: 0.9rem;\n\t\t\tpadding: 0 0.5rem;\n\t\t\tcolor: ", ";\n\t\t\ttransform: translate(0, -120%);\n\t\t}\n\t"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n\t\t\tinput,\n\t\t\ttextarea {\n\t\t\t\ttext-indent: 15px;\n\t\t\t}\n\t\t\tselect {\n\t\t\t\ttext-indent: 5px;\n\t\t\t}\n\t\t\t.wg-label {\n\t\t\t\tcolor: black;\n\t\t\t\ttransform: translateX(1.8rem);\n\t\t\t}\n\t\t"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\tborder: solid ", " ", ";\n\tbackground: #ffffff;\n\tbox-sizing: border-box;\n\tborder-radius: 16px;\n\tposition: relative;\n\tcursor: text;\n\ttransition: all 0.3s ease-out;\n\n\t&,\n\tinput,\n\ttextarea,\n\tselect,\n\tbutton {\n\t\tfont-family: var(--input-font);\n\t\tfont-size: 1rem;\n\t}\n\n\t.wg-label {\n\t\ttop: calc((52px / 2) / 2);\n\t\tleft: 10px;\n\t\tline-height: 20px;\n\t\tpadding: 0 0.5rem;\n\t\tposition: absolute;\n\t\tborder-radius: 20px;\n\t\tdisplay: inline-block;\n\t\tbackground-color: white;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t", "\n\n\t", "\n\n\t", "\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var theme$1 = themeOr({
  border: {
    gray: "#e1e1e1",
    width: "1px"
  }
});
var ValidInputProps = ["placeholder", "name", "type", "min", "max", "maxLength", "minLength", "value", "id", "className", "style", "disabled", "autoComplete"];

var attributesAndListeners = function attributesAndListeners(val, key) {
  return ValidInputProps.includes(key) || /^on[A-Z]/.test(key);
};

var filterProps = pickBy(attributesAndListeners);
var disabled = propIs("disabled", function (x) {
  return x == true;
});
var sharedFocusStyle = styled.css(_templateObject$4(), theme$1("border.width"), theme$1("border.gray"), withProp("hasIcon", styled.css(_templateObject2$4())), withProp("focused")(styled.css(_templateObject3$4(), theme$1("primary"), theme$1("primary"))), disabled(styled.css(_templateObject4$3())));
var MainWrapper = styled__default.div(_templateObject5$3(), fullWidth);
var InputStyle$2 = styled__default.div(_templateObject6$3(), withProp("options")(styled.css(_templateObject7$1(), theme$1("primary"))), sharedFocusStyle);
var TextWrapper = styled__default.div(_templateObject8(), sharedFocusStyle, withProp("focused")(styled.css(_templateObject9())));
var Labelled = {};
var createInput = curry(function (fn, initialState) {
  var InputWrapper = function InputWrapper(props, ref) {
    var _useState = React.useState(_objectSpread2({
      focus: props.placeholder ? true : false
    }, initialState)),
        _useState2 = _slicedToArray(_useState, 2),
        state = _useState2[0],
        _setState = _useState2[1]; // please don't take out the event it's important
    // eslint-disable-next-line


    var setState = curry(function (fn, event) {
      _setState(produce(state, fn));
    });
    var inputRef = React.useRef(null);
    React.useImperativeHandle(ref, function () {
      return inputRef.current;
    });

    var focus = function focus(state) {
      state.focus = true;
    };

    var blur = function blur(state) {
      if (!inputRef.current.value) {
        state.focus = false;
      }
    };

    var _props = _objectSpread2({
      onFocus: setState(focus),
      onBlur: setState(blur)
    }, props);

    return fn({
      props: _props,
      inputRef: inputRef,
      state: state,
      setState: setState,
      focus: focus,
      blur: blur
    });
  };

  return React__default.forwardRef(InputWrapper);
});
var styleWrapper = curry(function (initialState, fn) {
  return createInput(function (args) {
    var props = args.props,
        state = args.state,
        inputRef = args.inputRef;
    return /*#__PURE__*/React__default.createElement(MainWrapper, {
      fullwidth: props.fullwidth
    }, /*#__PURE__*/React__default.createElement(InputStyle$2, {
      hasIcon: !!props.icon,
      focused: state.focus,
      disabled: props.disabled,
      options: props.children,
      onClick: function onClick() {
        return inputRef.current.focus();
      }
    }, props.icon, /*#__PURE__*/React__default.createElement("span", {
      className: "wg-label"
    }, props.label), fn(args)), props.message);
  }, initialState);
});
var closedInput = styleWrapper({});
var makeAlwaysFocused = styleWrapper({
  focus: true
});
Labelled.Input = closedInput(function (_ref) {
  var props = _ref.props,
      inputRef = _ref.inputRef,
      state = _ref.state;
  return /*#__PURE__*/React__default.createElement("input", _extends({}, filterProps(props), {
    ref: inputRef,
    placeholder: state.focus ? props.placeholder : "",
    onChange: props.onChange
  }));
});
Labelled.Number = closedInput(function (_ref2) {
  var state = _ref2.state,
      props = _ref2.props,
      inputRef = _ref2.inputRef;

  var sanitize = function sanitize(evt) {
    var isAlpha = /^[A-Za-z]$/gi.test(evt.key);
    var isKeyComb = evt.metaKey || evt.ctrlKey;

    if (isAlpha && !isKeyComb) {
      evt.preventDefault();
    }
  };

  var handleChange = function handleChange(evt) {
    if (props.onChange) props.onChange(evt);
  };

  return /*#__PURE__*/React__default.createElement("input", _extends({}, filterProps(props), {
    ref: inputRef,
    type: "text",
    placeholder: state.focus ? props.placeholder : "",
    className: "w-4/5 c-black",
    onKeyDown: sanitize,
    onChange: handleChange
  }));
});
Labelled.Message = styled__default.div(_templateObject10());
Labelled.Message.propTypes = {
  children: propTypes.node.isRequired
};
Labelled.Select = makeAlwaysFocused(function (_ref3) {
  var props = _ref3.props,
      inputRef = _ref3.inputRef;
  return /*#__PURE__*/React__default.createElement("select", _extends({}, filterProps(props), {
    ref: inputRef,
    className: "w-4/5 c-black appearance-none",
    onChange: props.onChange
  }), props.children);
});

Labelled.Select.Option = function Select_Option(_ref4) {
  var value = _ref4.value,
      text = _ref4.text,
      selected = _ref4.selected;
  return /*#__PURE__*/React__default.createElement("option", {
    selected: selected,
    value: value || text
  }, text);
};

Labelled.Select.Option.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.string,
  selected: propTypes.bool
};
Labelled.Select.propTypes = {
  children: propTypes.array.isRequired
};
Labelled.Textarea = createInput(function (_ref5) {
  var props = _ref5.props,
      inputRef = _ref5.inputRef,
      state = _ref5.state;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(TextWrapper, {
    focused: state.focus,
    disabled: props.disabled,
    className: "flex-1"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "wg-label rounded-full"
  }, props.label), /*#__PURE__*/React__default.createElement("textarea", _extends({}, filterProps(props), {
    ref: inputRef,
    onChange: props.onChange
  }))), props.message);
}, {});

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\toverflow: hidden;\n\twidth: 100%;\n\tmax-width: 800px;\n\tflex-flow: column;\n\tborder-radius: 0 0 12px 12px;\n\tbox-shadow: 0 17px 9px 0px rgba(0, 0, 0, 0.1);\n\n\t> input {\n\t\theight: 50px;\n\t\tcolor: white;\n\t\ttext-indent: 20px;\n\t\tfont-size: 16px;\n\t\tbackground: transparent;\n\t\tborder: solid 1px white;\n\n\t\t&::placeholder {\n\t\t\tcolor: white;\n\t\t}\n\n\t\t&:focus {\n\t\t\tborder-width: 2px;\n\t\t}\n\t}\n\n\t> .search-base {\n\t\theight: 50px;\n\t\tdisplay: flex;\n\t\tpadding-left: 1rem;\n\t\tpadding-right: 1rem;\n\t\talign-items: center;\n\t\tfont-family: 'Quicksand', sans-serif;\n\t\tbackground-color: white;\n\t\tcolor: ", ";\n\n\t\t.tags {\n\t\t\tflex: 1;\n\t\t\tdisplay: flex;\n\t\t\tmargin-left: 1rem;\n\t\t\tjustify-content: flex-start;\n\t\t}\n\n\t\ta {\n\t\t\tpadding: 0.5em 0.5em;\n\t\t\tborder-radius: 12px;\n\t\t\ttransition: all 0.3s ease-out;\n\t\t\tcursor: pointer;\n\n\t\t\t&:hover {\n\t\t\t\tbackground-color: ", ";\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CurrencyInput = NumberInput;
var SearchStyle = styled__default.div(_templateObject$5(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.whitesmoke;
});
var SearchComponent = function SearchComponent(props) {
  var handleSubmit = function handleSubmit(evt) {
    return props.onSubmit(evt.target.value);
  };

  return /*#__PURE__*/React__default.createElement(SearchStyle, props, /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    placeholder: "Find Vendor...",
    onKeyUp: onEnter(handleSubmit)
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "search-base"
  }, /*#__PURE__*/React__default.createElement("b", null, "Search Tags:"), /*#__PURE__*/React__default.createElement("div", {
    className: "tags"
  }, ["africandishes", "bouquet", "glamour"].map(function (e, idx) {
    return /*#__PURE__*/React__default.createElement("a", {
      key: idx,
      href: "#".concat(e)
    }, "#", e);
  }))));
};
SearchComponent.defaultProps = {
  onSubmit: function onSubmit() {}
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n\theader {\n\t\tpadding: 0 0.5rem 0.5rem;\n\t\tmargin: -0.5rem -0.5rem .5rem;\n\t\tborder-bottom: solid 1px ", "\n\t}\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default(CardStyle({
  shadow: true
}))(_templateObject$6(), color("whitesmoke"));
var Card = function Card(props) {
  return /*#__PURE__*/React__default.createElement(StyledCard, props);
};

var CardHeader = function CardHeader(props) {
  return /*#__PURE__*/React__default.createElement("header", props);
};

Card.Header = CardHeader;

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n        visibility: visible;\n\n        .wg-dialog {\n            opacity: 1;\n\n            .wg-modal-content {\n                transform: translate(0, 0);\n            }\n        }\n        .wg-backdrop {\n            opacity: 1;\n        }\n    "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n            max-width: 1000px;\n        "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n            max-width: 400px;        \n        "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 0 !important; \n    bottom: 0;\n    z-index: 999;\n    display: flex;\n    visibility: hidden;\n    position: fixed;\n    justify-content: center;\n    \n    &, .wg-dialog, .wg-modal-content, .wg-backdrop {\n        transition: all .3s cubic-bezier(.17, .84, .44, 1);\n    }\n\n    .wg-dialog {\n        opacity: 0;\n        width: 100%;\n        display: flex;\n        padding-top: 10vh;\n        overflow-y: scroll;\n        justify-content: center;\n        align-items: flex-start;\n    }\n\n    .wg-backdrop {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        position: absolute;\n        background: rgba(0, 0, 0, 0.47); \n    }\n\n    .wg-modal-content {\n        width: 100%;\n        max-width: 800px;\n        transform: translate(0, -50%);\n\n        ", "\n\n        ", "\n    }\n\n    ", "\n\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var ModalSize = {
  small: function small(e) {
    return e === "sm";
  },
  large: function large(e) {
    return e === "lg";
  }
};
var DialogStyle = styled__default.section(_templateObject$7(), propIs("size")(ModalSize.small)(styled.css(_templateObject2$5())), propIs("size")(ModalSize.large)(styled.css(_templateObject3$5())), propIs("show")(function (show) {
  return show === true;
})(styled.css(_templateObject4$4())));
var Modal = function Modal(props) {
  if (props.show) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  } else {
    document.body.style.overflow = "";
    document.body.style.height = "";
  }

  return /*#__PURE__*/React__default.createElement(DialogStyle, props, /*#__PURE__*/React__default.createElement("div", {
    className: "wg-backdrop",
    onClick: props.onClose
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "wg-dialog"
  }, /*#__PURE__*/React__default.createElement(Card, {
    className: "wg-modal-content"
  }, props.children)));
};
Modal.defaultProps = {
  show: false,
  size: "",
  onClose: function onClose(a) {
    return a;
  }
};
Modal.propTypes = {
  onClose: propTypes.func,
  show: propTypes.bool.isRequired,
  size: propTypes.string.isRequired
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0;\n  box-sizing: border-box;\n\n  .list-item {\n    padding: 0.5rem 1rem;\n    & + .list-item {\n      border-top: solid 1px ", ";\n    }\n  }\n\n  li {\n    display: block;\n\n    a {\n      display: block;\n      text-decoration: none;\n      border: 0 solid 5px;\n      padding: 1rem 1.5rem;\n      color: ", ";\n      transition: border 0.3s cubic-bezier(0.74, 1.26, 0.99, 0.97);\n\n      &.active {\n        color: ", ";\n        background-color: ", ";\n        border-left: solid 5px ", ";\n      }\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var FlatListStyle = styled__default.ul(_templateObject$8(), color("whitesmoke"), color("grey"), color("primary"), color("whitesmoke"), color("primary"));
var FlatList = function FlatList(props) {
  return /*#__PURE__*/React__default.createElement(FlatListStyle, null, props.children);
};

var FlatListItem = function FlatListItem(props) {
  return /*#__PURE__*/React__default.createElement("li", _extends({
    className: "list-item"
  }, props));
};

FlatList.Item = FlatListItem;

var FlatListLink = function FlatListLink(props) {
  return /*#__PURE__*/React__default.createElement(FlatList.Item, {
    className: "nav-item"
  }, /*#__PURE__*/React__default.createElement(reactRouterDom.NavLink, props, props.children));
};

FlatList.Link = FlatListLink;

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  height: 0;\n  padding: 0 0;\n  overflow: hidden;\n  grid-column: 1 / 3;\n  transition: all 0.3s ease-out;\n\n  ul {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    display: block;\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
//add an morph property

var CollapseStyle = styled__default.div(_templateObject$9());
var Collapsible = function Collapsible(props) {
  var container = React.useRef();

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var getHeight = function getHeight(el) {
    return el.getBoundingClientRect().height;
  };

  React.useEffect(function () {
    setHeight(props.open ? getHeight(container.current) : 0);
  }, [props.open]);
  return /*#__PURE__*/React__default.createElement(CollapseStyle, _extends({}, props, {
    style: {
      height: height
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    ref: container
  }, props.children));
};
Collapsible.defaultProps = {
  morph: false
};

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n        &:hover {\n            &:before {\n                background-color: ", ";\n            }\n        }\n    "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  display: flex;\n  flex: 1;\n  flex-flow: column ;\n  box-sizing: border-box;\n  margin-left: ", "px;\n  border-left: solid 1px ", ";\n\n\n  .a-item {\n    display: block;\n    position: relative;\n    padding: .5rem 0 .5rem 1.5rem;\n\n    .msg {\n\n    }\n\n    .timestamp {\n        opacity: 0.7;\n        font-size: smaller;\n        font-style: italic;\n    }\n\n\n    ", "\n\n    &::before {\n        content: \"\";\n        width: 23px;\n        height: 23px;\n        top: 50%; left: 0;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        transform: translate3d(-50%, -50%, 0);\n        box-shadow: 0 0 0 3px ", ";\n        border: solid 1px ", ";\n    }\n  }\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var ActivityStyle = styled__default.ul(_templateObject$a(), 23 / 2, color("greylight"), withProp("hoverable")(styled.css(_templateObject2$6(), color("whitesmoke"))), color("bgcolor"), color("greylight"));
var Activity = function Activity(props) {
  return /*#__PURE__*/React__default.createElement(ActivityStyle, props, props.entries.map(function (e, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: index,
      className: "a-item"
    }, props.render ? props.render(e) : /*#__PURE__*/React__default.createElement("article", null, /*#__PURE__*/React__default.createElement("div", {
      className: "msg"
    }, e), /*#__PURE__*/React__default.createElement("span", {
      className: "timestamp"
    }, "2 days ago")));
  }));
};
Activity.propTypes = {
  children: propTypes.array,
  entries: propTypes.array,
  render: propTypes.func,
  hoverable: propTypes.bool
};

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n    > * + * {\n      margin-left: ", ";\n    }\n  "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n  > * + * {\n    margin-left:  0.5rem;\n  }\n\n  ", "\n"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var propSizes = [["small", ".25rem"], ["medium", "1.2rem"], ["large", "1.5rem"]];
var TabStyle = styled__default.div(_templateObject$b(), propSizes.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      size = _ref2[1];

  return withProp(prop)(styled.css(_templateObject2$7(), size));
}));
var Tab = function Tab(props) {
  return /*#__PURE__*/React__default.createElement(TabStyle, props);
};

function _templateObject6$4() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-grow: 1;\n\twidth: 100%;\n\tflex-direction: column;\n\talign-items: flex-start;\n"]);

  _templateObject6$4 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = _taggedTemplateLiteral(["\n\t\t\t\t> * + * { margin-top: unset }\n\t\t\t\t> * + *:not(:empty) {\n\t\t\t\t\tmargin-top: ", ";\n\t\t\t\t}\n\t\t\t"]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n\t\t\t> * + * {\n\t\t\t\tmargin-top: ", ";\n\t\t\t}\n\n\t\t\t", "\n\t\t"]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n\t\t> * {\n\t\t\tmargin-top: 0;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t"]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n\t\t> * + * { margin-top: unset }\n\t\t> * + *:not(:empty) {\n\t\t\tmargin-top: 1rem;\n\t\t}\n\t"]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 0.1px 0;\n\t\n\t> * + * {\n\t\tmargin-top: 1rem;\n\t}\n\t\n\t", "\n\n\t", "\n\n\t", "\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var propSizes$1 = [["small", ".5rem"], ["medium", "1.5rem"], ["large", "2rem"]];
var StackStyle = styled__default.div(_templateObject$c(), withProp("noEmpty", styled.css(_templateObject2$8())), withProp("noExtraSpace", styled.css(_templateObject3$6())), propSizes$1.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      size = _ref2[1];

  return withProp(prop, styled.css(_templateObject4$5(), size, withProp("noEmpty", styled.css(_templateObject5$4(), size))));
}));
var Stack = function Stack(props) {
  return /*#__PURE__*/React__default.createElement(StackStyle, props);
};
Stack.Flex = styled__default(Stack)(_templateObject6$4());

function _templateObject2$9() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-start;\n  grid-template-columns: repeat(auto-fill, ", ");\n"]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$d() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 1.5rem;\n  position: relative;\n  justify-content: space-between;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));\n"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}
var TwoColumns = function TwoColumns(props) {
  var _props$children = _slicedToArray(props.children, 2),
      aside = _props$children[0],
      section = _props$children[1];

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "w-1/5"
  }, aside), /*#__PURE__*/React__default.createElement("div", {
    className: "flex-1"
  }, section)));
};
var ThreeColumns = function ThreeColumns(props) {
  var _props$children2 = _slicedToArray(props.children, 3),
      aside = _props$children2[0],
      section = _props$children2[1],
      third = _props$children2[2];

  return /*#__PURE__*/React__default.createElement("section", {
    className: "flex"
  }, /*#__PURE__*/React__default.createElement("aside", {
    className: "w-1/5"
  }, aside), /*#__PURE__*/React__default.createElement("section", {
    className: "flex-1 p-5"
  }, section), /*#__PURE__*/React__default.createElement("aside", {
    className: "w-1/5"
  }, third));
};
var FourColumnGrid = function FourColumnGrid(props) {
  return /*#__PURE__*/React__default.createElement(FourColumnGridStyle, props, props.children);
};
var FourColumnGridStyle = styled__default.section(_templateObject$d());

var addPixel = function addPixel(number) {
  var isWithoutUnit = RegExp("\\d$").test(number);
  return isWithoutUnit ? number + "px" : number;
};

var Grid = styled__default(FourColumnGridStyle)(_templateObject2$9(), function (a) {
  return addPixel(a.width);
});
var GridView = function GridView(props) {
  return /*#__PURE__*/React__default.createElement(Grid, props);
};
GridView.defaultProps = {
  width: 200
};
GridView.propTypes = {
  width: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
};

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  max-width: 100%;\n\n  .wg--hr_bounce {\n    transition-timing-function: cubic-bezier(0.78, 0.05, 0.41, 0.92);\n  }\n\n  #page-holder {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    box-sizing: border-box;\n    display: flex;\n    flex-wrap: nowrap;\n    boxsizing: border-box;\n    scroll-snap-type: x mandatory;\n    transition: height 0.3s ease-out;\n    transition-property: all;\n    transition-duration: 0.3s;\n\n    &.is-absolute {\n      width: 100%;\n      position: absolute;\n    }\n\n    .page {\n      height: 100%;\n      flex-shrink: 0;\n      margin-left: 0px;\n      scroll-snap-align: start;\n      display: inline-block;\n      box-sizing: border-box;\n\n      &:first-child {\n        margin-left: 0;\n      }\n    }\n  }\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var Wrap = styled__default.div(_templateObject$e());
var Pager = function Pager(props) {
  var cp = props.current;

  var _useState = React.useState("auto"),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var slideLeft = React.useCallback(function (cp, slider) {
    return slider.current.clientWidth * cp;
  }, []);
  var rootElem = React.useRef(null);
  var slider = React.useRef(null);
  var slides = [];
  var addSlideRef = React.useCallback(function (ref, index) {
    slides[index] = ref;
  }, [slides]);
  React.useEffect(function () {
    if (slider.current) {
      var leftOffset = slideLeft(cp, slider);
      slider.current.scroll({
        top: 0,
        left: leftOffset,
        behavior: "smooth"
      });
    }

    if (props.morph) {
      var resizeHeight = function resizeHeight() {
        if (slides[cp]) {
          var newHeight = slides[cp].clientHeight + "px";
          if (height !== newHeight) setHeight(newHeight);
        }
      };

      _.debounce(resizeHeight, 500)();
    } else {
      setHeight("auto");
    }
  }, [cp, slides, height, props, slideLeft]);
  return /*#__PURE__*/React__default.createElement(Wrap, {
    ref: rootElem
  }, /*#__PURE__*/React__default.createElement("section", {
    id: "page-holder",
    ref: slider,
    style: {
      height: height
    }
  }, React__default.Children.map(props.children, function (child, index) {
    return /*#__PURE__*/React__default.createElement(Slide, {
      key: index,
      ref: function ref(_ref) {
        return addSlideRef(_ref, index);
      },
      width: slider.current ? slider.width + "px" : "100%",
      isActive: cp == index
    }, child);
  })));
};
Pager.propTypes = {
  morph: propTypes.bool,
  current: propTypes.number.isRequired,
  children: propTypes.array.isRequired
};
Pager.defaultProps = {
  current: 0,
  morph: false
};
var Slide = React__default.forwardRef(function Slide(_ref2, ref) {
  var width = _ref2.width,
      isActive = _ref2.isActive,
      children = _ref2.children;
  return /*#__PURE__*/React__default.createElement("section", {
    className: "page ".concat(isActive ? "pager--active" : ""),
    style: {
      width: width
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: "wg-slider-page px-15"
  }, children));
});
Slide.propTypes = {
  children: propTypes.node,
  isActive: propTypes.bool.isRequired,
  width: propTypes.string.isRequired
};

function _templateObject5$5() {
  var data = _taggedTemplateLiteral(["\n  padding: 2.5rem;\n"]);

  _templateObject5$5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = _taggedTemplateLiteral(["\n  padding: 1rem;\n"]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$7() {
  var data = _taggedTemplateLiteral(["\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  "]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  "]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5rem;\n\n  ", "\n\n  ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}

var addProps = function addProps(fn) {
  fn.propTypes = {
    horizontal: propTypes.bool,
    vertical: propTypes.bool,
    x: propTypes.bool,
    y: propTypes.bool,
    children: propTypes.node.isRequired
  };
  return fn;
};

var withProps = function withProps(props) {
  return function (style) {
    return function ($props) {
      return props.map(function (prop) {
        return withProp(prop)(style)($props);
      });
    };
  };
};

var LargeS = styled__default.span(_templateObject$f(), withProps(["vertical", "y"])(styled.css(_templateObject2$a())), withProps(["horizontal", "x"])(styled.css(_templateObject3$7())));
var SmallS = styled__default(LargeS)(_templateObject4$6());
var MediumS = styled__default(LargeS)(_templateObject5$5());
var Cluster = addProps(MediumS);
var Small = addProps(SmallS);
var Large = addProps(LargeS);
Cluster.Large = Large;
Cluster.Small = Small;

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n        * {\n            outline: solid 1px ", ";\n        }\n    "]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n    & > * {\n        outline: solid 1px ", ";\n    }\n\n    ", "\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var outlineColor = function outlineColor(props) {
  return props.color || "orange";
};

var Outliner = styled__default.div(_templateObject$g(), outlineColor, withProp("all")(styled.css(_templateObject2$b(), outlineColor)));
var Outline = Outliner;

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 25vh;\n\tmin-height: 250px;\n\tobject-fit: cover;\n\tborder-radius: 12px;\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var StyleCoverImage = styled__default.img(_templateObject$h());
var CoverImage = function CoverImage() {
  return /*#__PURE__*/React__default.createElement(StyleCoverImage, {
    className: "w-4/5",
    src: "/images/vendor_banner.png"
  });
};

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  font-family: var(--heading-font, 'Avenir', 'Helvetica Neue', 'Segoe UI', sans-serif);\n  font-weight: ", ";\n  font-size: ", ";\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var Heading = styled__default.span(_templateObject$i(), function (props) {
  return props.bold ? "bold" : props.light ? "300" : "400";
}, function (props) {
  return props.$fontSize;
});
var H1 = function H1(props) {
  return /*#__PURE__*/React__default.createElement(Heading, _extends({}, props, {
    as: "h1",
    $fontSize: "43px"
  }));
};
var H2 = function H2(props) {
  return /*#__PURE__*/React__default.createElement(Heading, _extends({}, props, {
    as: "h2",
    $fontSize: "35px"
  }));
};
var H3 = function H3(props) {
  return /*#__PURE__*/React__default.createElement(Heading, _extends({}, props, {
    as: "h3",
    $fontSize: "25px"
  }));
};
var H4 = function H4(props) {
  return /*#__PURE__*/React__default.createElement(Heading, _extends({}, props, {
    as: "h4",
    $fontSize: "18px"
  }));
};

function _templateObject2$c() {
  var data = _taggedTemplateLiteral(["\n      font-size: 13px;\n    "]);

  _templateObject2$c = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$j() {
  var data = _taggedTemplateLiteral(["\n  font-family: var(--text-font), 'Lato', sans-serif;\n  font-size: 16px;\n\n  ", "\n"]);

  _templateObject$j = function _templateObject() {
    return data;
  };

  return data;
}
var ParagraphStyle = styled__default.p(_templateObject$j(), function (props) {
  return props.small && styled.css(_templateObject2$c());
});
var P = ParagraphStyle;

var delay = function delay(number) {
  return new Promise(function (res) {
    return setTimeout(res, number);
  });
};

var next = function next(index, entries) {
  if (index < entries.length - 1) {
    return index + 1;
  }

  return 0;
};

var Type = function Type(_ref) {
  var values = _ref.values,
      props = _objectWithoutProperties(_ref, ["values"]);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = React.useState(values[index]),
      _useState6 = _slicedToArray(_useState5, 2),
      current = _useState6[0],
      setCurrent = _useState6[1];

  React.useEffect(function () {
    var moveFirstChar = function moveFirstChar(word, value) {
      var wordArr = word.substr(1);
      return [wordArr, value + word[0]];
    };

    var intId = setInterval(function () {
      if (current === "" && value === "") {
        var idx = next(index, values);
        setIndex(idx);
        return setCurrent(values[idx]);
      }

      if (current == "") {
        if (value === values[index]) {
          delay(500).then(function () {
            setValue(value.substr(0, value.length - 1));
          });
        } else {
          setValue(value.substr(0, value.length - 1));
        }

        return clearInterval(intId);
      }

      var _moveFirstChar = moveFirstChar(current, value),
          _moveFirstChar2 = _slicedToArray(_moveFirstChar, 2),
          _current = _moveFirstChar2[0],
          _value = _moveFirstChar2[1];

      setCurrent(_current);
      setValue(_value);
    }, props.speed || 200);
    return function () {
      return clearInterval(intId);
    };
  });
  return /*#__PURE__*/React__default.createElement("span", props, " ", value, "| ");
};
Type.propTypes = {
  values: propTypes.array.isRequired,
  speed: propTypes.number
};

Object.keys(styled).forEach(function (k) {
  if (k !== 'default') Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () {
      return styled[k];
    }
  });
});
exports.Activity = Activity;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.CircleButton = CircleButton;
exports.Cluster = Cluster;
exports.Collapsible = Collapsible;
exports.CoverImage = CoverImage;
exports.CurrencyInput = CurrencyInput;
exports.FlatList = FlatList;
exports.FourColumnGrid = FourColumnGrid;
exports.GridView = GridView;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.Heading = Heading;
exports.IconButton = IconButton;
exports.Input = Input;
exports.Labelled = Labelled;
exports.Modal = Modal;
exports.Outline = Outline;
exports.P = P;
exports.Pager = Pager;
exports.RadioInput = RadioInput;
exports.RadioLabel = RadioLabel;
exports.SearchComponent = SearchComponent;
exports.Stack = Stack;
exports.Tab = Tab;
exports.TextWrapper = TextWrapper;
exports.ThreeColumns = ThreeColumns;
exports.TwoColumns = TwoColumns;
exports.Type = Type;
exports.default = styled__default;
