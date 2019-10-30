'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var _ = _interopDefault(require('lodash'));
var fp = require('lodash/fp');
var reactIs = _interopDefault(require('react-is'));
var reactRouterDom = require('react-router-dom');

var ThemeProvider = function ThemeProvider(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return React__default.createElement(styled.ThemeProvider, {
    theme: theme
  }, React__default.Children.only(children));
};

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
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var isDevelopment = function isDevelopment() {
  return process.env.NODE_ENV === 'development';
};
var cStyle = "\n  background-color: dodgerblue; \n  color: white;\n  padding: 0 .5rem;\n  border-radius: 3px;\n";
var trace = function trace() {
  var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cStyle;
  return function (x) {
    if (isDevelopment()) {
      // eslint-disable-next-line
      console.info("%c".concat(info, "%c").concat(x), style);
    }

    return x;
  };
};
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
  var data = _taggedTemplateLiteral(["\n    @media (max-width: ", "em) {\n      ", "\n    }\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    border: solid 1px ", ";\n    box-shadow: none !important;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);\n    &:hover {\n      box-shadow: 0 3px 12px -5px rgba(0, 0, 0, 0.3);\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.3);\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 18px 20px;\n  border-radius: 12px;\n  box-sizing: border-box;\n  background-color: ", ";\n  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var withProp = function withProp(key) {
  return function (style) {
    return function (props) {
      return props[key] && style;
    };
  };
};
var propIs = function propIs(prop) {
  return function (functor) {
    return function (style) {
      return function (props) {
        return functor(props[prop]) && style;
      };
    };
  };
};
var CardStyle = function CardStyle() {
  var con = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return styled__default.article(_templateObject(), color('bgcolor'), withProp('static')(styled.css(_templateObject2()))(con), withProp('clickable')(styled.css(_templateObject3()))(con), withProp('shadow')(styled.css(_templateObject4()))(con), withProp('outlineDanger')(styled.css(_templateObject5(), color('danger'))));
};
var fullWidth = function fullWidth() {
  return withProp('fullwidth')(styled.css(_templateObject6()));
};
var color = function color(name) {
  return function (props) {
    return props.theme[name];
  };
};
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
  return props.focus && styled.css(_templateObject2$1(), color('primary'));
}, fullWidth(), function (props) {
  return props.large && styled.css(_templateObject3$1());
});
var INVALID_MESSAGE = 'Invalid Number provided';

var number = function number(_char) {
  return _.isNumber(_char) && !_.isNaN(_char);
};

var validateInput = function validateInput(evt) {
  var _char2 = parseInt(evt.key);

  var allowedCodes = [8, 9, 190, 37, 38, 39, 40]; // log(evt.keyCode);

  if (allowedCodes.includes(evt.keyCode) || number(_char2)) return; // log('I prevented');

  evt.preventDefault();
};

var handleNaN = function handleNaN(fn) {
  return function (value) {
    if (value !== 'NaN') return value;
    fn();
    return 0;
  };
};

var clean = function clean(value) {
  return _.replace(String(value), /,/gm, '');
};
var NumberInput = React__default.forwardRef(function (props, ref) {
  var _useState = React.useState({
    value: ''
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
  return React__default.createElement(InputStyle, allProps, React__default.createElement("img", {
    src: Naira,
    alt: "cur",
    title: "currency"
  }), React__default.createElement("input", {
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
  name: 'wg-input',
  fullWidth: false
};
NumberInput.propTypes = {
  isInvalid: propTypes.func
};

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 5px;\n  cursor: pointer;\n\n  > input + span {\n    border-radius: 2px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  ", "\n  align-items: center;\n  padding-right: 5px;\n\n  ", "\n\n  > span {\n    margin-left: 1rem;\n    line-height: 20px;\n    display: inline-block;\n    ", "\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n\n  input {\n    visibility: hidden;\n    width: 0.1px;\n    height: 0.1px;\n    position: absolute;\n    left: -5px;\n    border: solid 1px black;\n  }\n\n  input + span {\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    border-radius: 50%;\n    justify-content: center;\n    align-items: center;\n    padding: 1px;\n    background-clip: content-box;\n    text-align: center;\n    box-sizing: border-box;\n    border: solid 1px ", ";\n  }\n\n  input:checked + span {\n    background-color: ", ";\n  }\n"]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n        text-indent: 54px;\n      "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n        height: 38px;\n        width: 38px;\n      "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n  --input-mb: 0;\n  display: flex;\n  position: relative;\n  margin-bottom: 1rem;\n  ", "\n\n  span {\n    position: absolute;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    border-radius: 6px;\n    margin: 6px;\n    width: 28px;\n    height: 28px;\n    color: ", ";\n\n    ", "\n  }\n  span + input {\n    text-indent: 44px;\n    ", "\n  }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n      height: 50px;\n      font-size: 16px;\n      border-radius: 12px;\n      border: solid 2px transparent;\n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n        border: solid 2px ", ";\n    "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: none;\n  height: 38px;\n  min-width: 243px;\n  border-radius: 6px;\n  text-indent: 15px;\n  font-size: 13px;\n  font-family: var(--heading-font, 'Quicksand');\n  transition: all 0.3s ease-out;\n  border-color: ", ";\n  caret-color: ", ";\n  outline: none;\n\n  &::placeholder {\n    color: #a0a0a0;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #fff;\n    box-shadow: 0 3px 6px rgba(112, 93, 245, 0.16);\n  }\n\n  &:focus {\n    border: solid 1px ", ";\n    ", "\n  }\n\n  ", "\n  ", "\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var InputStyle$1 = styled__default.input(_templateObject$2(), color('whitesmoke'), color('primary'), color('primary'), color('primary'), withProp('large')(styled.css(_templateObject2$2(), color('primary'))), fullWidth(), withProp('large')(styled.css(_templateObject3$2())));
var Input = React__default.forwardRef(function (props, ref) {
  return React__default.createElement(InputStyle$1, _extends({}, props, {
    ref: ref
  }));
});
var IconInputStyle = styled__default.div(_templateObject4$1(), fullWidth(), function (a) {
  return a.theme.primary;
}, function (props) {
  return props.large && styled.css(_templateObject5$1());
}, function (props) {
  return props.large && styled.css(_templateObject6$1());
});
var IconInput = function IconInput(props) {
  return React__default.createElement("div", null, "Change This");
};
var RadioStyle = styled__default.label(_templateObject7$1(), function (a) {
  return a.theme.grey;
}, function (a) {
  return a.theme.primary;
});
var radioKey = 0;
var RadioInput = function RadioInput(props) {
  var inputKey = "uid--".concat(radioKey++);
  return React__default.createElement(RadioStyle, {
    htmlFor: inputKey
  }, React__default.createElement("input", _extends({
    id: inputKey,
    onClick: trace('The Radio clicked.'),
    type: "radio"
  }, props)), React__default.createElement("span", null));
};
var RadioLabelStyle = styled__default.div(_templateObject8(), ''
/* vertical-align: center; */
, fullWidth(), ''
/* border: solid 1px black; */
);
var RadioLabel = function RadioLabel(props) {
  return React__default.createElement(RadioLabelStyle, props, React__default.createElement(RadioInput, props), React__default.createElement("span", null, props.label));
};
RadioLabel.defaultProps = {
  label: 'Something'
};
var CheckboxStyle = styled__default(RadioStyle)(_templateObject9());
var Checkbox = function Checkbox(props) {
  return React__default.createElement(CheckboxStyle, null, React__default.createElement("input", _extends({
    onClick: trace('The Radio clicked.'),
    type: "checkbox"
  }, props)), React__default.createElement("span", null));
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
var ButtonStyle = styled__default.button(_templateObject$3(), color('accent'), color('accent'), withProp('primary')(styled.css(_templateObject2$3(), color('primary'), color('primary'))), withProp('danger')(styled.css(_templateObject3$3(), color('danger'), color('danger'))), withProp('outline')(styled.css(_templateObject4$2())), withProp('large')(styled.css(_templateObject5$2())), withProp('circle')(styled.css(_templateObject6$2())), fullWidth());
var Button = ButtonStyle;

var IconButton = function IconButton(props) {
  return React__default.createElement(Button, props, React__default.createElement("span", null, props.children));
};
IconButton.propTypes = {
  children: propTypes.node.isRequired
};
var CircleButton = function CircleButton(props) {
  return React__default.createElement(Button, _extends({
    circle: true
  }, props));
};

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  max-width: 800px;\n  flex-flow: column;\n  border-radius: 0 0 12px 12px;\n  box-shadow: 0 17px 9px 0px rgba(0, 0, 0, 0.1);\n\n  > input {\n    height: 50px;\n    color: white;\n    text-indent: 20px;\n    font-size: 16px;\n    background: transparent;\n    border: solid 1px white;\n\n    &::placeholder {\n      color: white;\n    }\n\n    &:focus {\n      border-width: 2px;\n    }\n  }\n\n  > .search-base {\n    height: 50px;\n    display: flex;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    align-items: center;\n    font-family: 'Quicksand', sans-serif;\n    background-color: white;\n    color: ", ";\n\n    .tags {\n      flex: 1;\n      display: flex;\n      margin-left: 1rem;\n      justify-content: flex-start;\n    }\n\n    a {\n      padding: 0.5em 0.5em;\n      border-radius: 12px;\n      transition: all 0.3s ease-out;\n      cursor: pointer;\n\n      &:hover {\n        background-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var CurrencyInput = NumberInput;
var SearchStyle = styled__default.div(_templateObject$4(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.whitesmoke;
});
var SearchComponent = function SearchComponent(props) {
  var handleSubmit = function handleSubmit(evt) {
    return props.onSubmit(evt.target.value);
  };

  return React__default.createElement(SearchStyle, props, React__default.createElement("input", {
    type: "text",
    placeholder: "Find Vendor...",
    onKeyUp: onEnter(handleSubmit)
  }), React__default.createElement("div", {
    className: "search-base"
  }, React__default.createElement("b", null, "Search Tags:"), React__default.createElement("div", {
    className: "tags"
  }, ['africandishes', 'bouquet', 'glamour'].map(function (e) {
    return React__default.createElement("a", {
      href: "#".concat(e)
    }, "#", e);
  }))));
};
SearchComponent.defaultProps = {
  onSubmit: function onSubmit() {}
};

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n\theader {\n\t\tpadding: 0 0.5rem 0.5rem;\n\t\tmargin: -0.5rem -0.5rem .5rem;\n\t\tborder-bottom: solid 1px ", "\n\t}\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCard = styled__default(CardStyle({
  shadow: true
}))(_templateObject$5(), color('whitesmoke'));
var Card = function Card(props) {
  return React__default.createElement(StyledCard, props);
};

var CardHeader = function CardHeader(props) {
  return React__default.createElement("header", props);
};

Card.Header = CardHeader;

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n        visibility: visible;\n\n        .wg-dialog {\n            opacity: 1;\n\n            .wg-modal-content {\n                transform: translate(0, 0);\n            }\n        }\n        .wg-backdrop {\n            opacity: 1;\n        }\n    "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n            max-width: 1000px;\n        "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n            max-width: 400px;        \n        "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n    top: 0;\n    left: 0;\n    right: 0;\n    margin: 0 !important; \n    bottom: 0;\n    z-index: 999;\n    display: flex;\n    visibility: hidden;\n    position: fixed;\n    justify-content: center;\n    \n    &, .wg-dialog, .wg-modal-content, .wg-backdrop {\n        transition: all .3s cubic-bezier(.17, .84, .44, 1);\n    }\n\n    .wg-dialog {\n        opacity: 0;\n        width: 100%;\n        display: flex;\n        padding-top: 10vh;\n        overflow-y: scroll;\n        justify-content: center;\n        align-items: flex-start;\n    }\n\n    .wg-backdrop {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        opacity: 0;\n        position: absolute;\n        background: rgba(0, 0, 0, 0.47); \n    }\n\n    .wg-modal-content {\n        width: 100%;\n        max-width: 800px;\n        transform: translate(0, -50%);\n\n        ", "\n\n        ", "\n    }\n\n    ", "\n\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ModalSize = {
  small: function small(e) {
    return e === 'sm';
  },
  large: function large(e) {
    return e === 'lg';
  }
};
var DialogStyle = styled__default.section(_templateObject$6(), propIs('size')(ModalSize.small)(styled.css(_templateObject2$4())), propIs('size')(ModalSize.large)(styled.css(_templateObject3$4())), propIs('show')(function (show) {
  return show === true;
})(styled.css(_templateObject4$3())));
var Modal = function Modal(props) {
  if (props.show) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  } else {
    document.body.style.overflow = '';
    document.body.style.height = '';
  }

  return React__default.createElement(DialogStyle, props, React__default.createElement("div", {
    className: "wg-backdrop",
    onClick: props.onClose
  }), React__default.createElement("div", {
    className: "wg-dialog"
  }, React__default.createElement(Card, {
    className: "wg-modal-content"
  }, props.children)));
};
Modal.defaultProps = {
  show: false,
  size: '',
  onClose: function onClose(a) {
    return a;
  }
};
Modal.propTypes = {
  onClose: propTypes.func,
  show: propTypes.bool.isRequired,
  size: propTypes.string.isRequired
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0;\n  box-sizing: border-box;\n\n  .list-item {\n    padding: 0.5rem 1rem;\n    & + .list-item {\n      border-top: solid 1px ", ";\n    }\n  }\n\n  li {\n    display: block;\n\n    a {\n      display: block;\n      text-decoration: none;\n      border: 0 solid 5px;\n      padding: 1rem 1.5rem;\n      color: ", ";\n      transition: border 0.3s cubic-bezier(0.74, 1.26, 0.99, 0.97);\n\n      &.active {\n        color: ", ";\n        background-color: ", ";\n        border-left: solid 5px ", ";\n      }\n    }\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var FlatListStyle = styled__default.ul(_templateObject$7(), color('whitesmoke'), color('grey'), color('primary'), color('whitesmoke'), color('primary'));
var FlatList = function FlatList(props) {
  return React__default.createElement(FlatListStyle, null, props.children);
};

var FlatListItem = function FlatListItem(props) {
  return React__default.createElement("li", _extends({
    className: "list-item"
  }, props));
};

FlatList.Item = FlatListItem;

var FlatListLink = function FlatListLink(props) {
  return React__default.createElement(FlatList.Item, {
    className: "nav-item"
  }, React__default.createElement(reactRouterDom.NavLink, props, props.children));
};

FlatList.Link = FlatListLink;

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  height: 0;\n  padding: 0 0;\n  overflow: hidden;\n  grid-column: 1 / 3;\n  transition: all 0.3s ease-out;\n\n  ul {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    display: block;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
//add an morph property

var CollapseStyle = styled__default.div(_templateObject$8());
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
  return React__default.createElement(CollapseStyle, _extends({}, props, {
    style: {
      height: height
    }
  }), React__default.createElement("div", {
    ref: container
  }, props.children));
};
Collapsible.defaultProps = {
  morph: false
};

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n        &:hover {\n            &:before {\n                background-color: ", ";\n            }\n        }\n    "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  display: flex;\n  flex: 1;\n  flex-flow: column ;\n  box-sizing: border-box;\n  margin-left: ", "px;\n  border-left: solid 1px ", ";\n\n\n  .a-item {\n    display: block;\n    position: relative;\n    padding: .5rem 0 .5rem 1.5rem;\n\n    .msg {\n\n    }\n\n    .timestamp {\n        opacity: 0.7;\n        font-size: smaller;\n        font-style: italic;\n    }\n\n\n    ", "\n\n    &::before {\n        content: \"\";\n        width: 23px;\n        height: 23px;\n        top: 50%; left: 0;\n        position: absolute;\n        border-radius: 50%;\n        background-color: white;\n        transform: translate3d(-50%, -50%, 0);\n        box-shadow: 0 0 0 3px ", ";\n        border: solid 1px ", ";\n    }\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var ActivityStyle = styled__default.ul(_templateObject$9(), 23 / 2, color('greylight'), withProp('hoverable')(styled.css(_templateObject2$5(), color('whitesmoke'))), color('bgcolor'), color('greylight'));
var Activity = function Activity(props) {
  return React__default.createElement(ActivityStyle, props, props.entries.map(function (e, index) {
    return React__default.createElement("li", {
      key: index,
      className: "a-item"
    }, props.render ? props.render(e) : React__default.createElement("article", null, React__default.createElement("div", {
      className: "msg"
    }, e), React__default.createElement("span", {
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

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n\n    > * + * {\n      margin-top:  ", ";\n    }\n  "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    > * {\n      margin-top: 0;\n      margin-bottom: 0;\n    }\n  "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  padding: 0.1px 0;\n  \n  ", "\n\n  > * + * {\n    margin-top: 1rem;\n  }\n\n  ", "\n\n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var propSizes = [['small', '.5rem'], ['medium', '1.5rem'], ['large', '2rem']];
var StackStyle = styled__default.div(_templateObject$a(), withProp('noExtraSpace')(styled.css(_templateObject2$6())), propSizes.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      size = _ref2[1];

  return withProp(prop)(styled.css(_templateObject3$5(), size));
}));
var Stack = function Stack(props) {
  return React__default.createElement(StackStyle, props);
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
var propSizes$1 = [['small', '.25rem'], ['medium', '1.2rem'], ['large', '1.5rem']];
var TabStyle = styled__default.div(_templateObject$b(), propSizes$1.map(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      prop = _ref2[0],
      size = _ref2[1];

  return withProp(prop)(styled.css(_templateObject2$7(), size));
}));
var Tab = function Tab(props) {
  return React__default.createElement(TabStyle, props);
};

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    padding: 2.5rem;\n"]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n    padding: 1rem;\n"]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = _taggedTemplateLiteral(["\n        padding-top: 0 !important;\n        padding-bottom: 0 !important;\n    "]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = _taggedTemplateLiteral(["\n        padding-left: 0 !important;\n        padding-right: 0 !important;\n    "]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 100%;\n    padding: 5rem;\n\n    ", "\n\n    ", "\n"]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var addChildren = function addChildren(Cluster) {
  var C = function C(_ref) {
    var horizontal = _ref.horizontal,
        vertical = _ref.vertical,
        children = _ref.children;
    return React__default.createElement(Cluster, {
      horizontal: horizontal,
      vertical: vertical
    }, children);
  };

  C.propTypes = {
    horizontal: propTypes.bool,
    vertical: propTypes.bool,
    children: propTypes.node.isRequired
  };
  return C;
};

var LargeS = styled__default.span(_templateObject$c(), withProp('vertical')(styled.css(_templateObject2$8())), withProp('horizontal')(styled.css(_templateObject3$6())));
var SmallS = styled__default(LargeS)(_templateObject4$4());
var MediumS = styled__default(LargeS)(_templateObject5$3());
var Cluster = addChildren(MediumS);
var Small = addChildren(SmallS);
var Large = addChildren(LargeS);
Cluster.Large = Large;
Cluster.Small = Small;

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

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    className: "flex"
  }, React__default.createElement("div", {
    className: "w-1/5"
  }, aside), React__default.createElement("div", {
    className: "flex-1"
  }, section)));
};
var ThreeColumns = function ThreeColumns(props) {
  var _props$children2 = _slicedToArray(props.children, 3),
      aside = _props$children2[0],
      section = _props$children2[1],
      third = _props$children2[2];

  return React__default.createElement("section", {
    className: "flex"
  }, React__default.createElement("aside", {
    className: "w-1/5"
  }, aside), React__default.createElement("section", {
    className: "flex-1 p-5"
  }, section), React__default.createElement("aside", {
    className: "w-1/5"
  }, third));
};
var FourColumnGrid = function FourColumnGrid(props) {
  return React__default.createElement(FourColumnGridStyle, props, props.children);
};
var FourColumnGridStyle = styled__default.section(_templateObject$d());

var addPixel = function addPixel(number) {
  var isWithoutUnit = RegExp('\\d$').test(number);
  return isWithoutUnit ? number + 'px' : number;
};

var Grid = styled__default(FourColumnGridStyle)(_templateObject2$9(), function (a) {
  return addPixel(a.width);
});
var GridView = function GridView(props) {
  return React__default.createElement(Grid, props);
};
GridView.defaultProps = {
  width: 200
};
GridView.propTypes = {
  width: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
};

function _templateObject$e() {
  var data = _taggedTemplateLiteral(["\n\twidth: 100%;\n\theight: 25vh;\n\tmin-height: 250px;\n\tobject-fit: cover;\n\tborder-radius: 12px;\n"]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var StyleCoverImage = styled__default.img(_templateObject$e());
var CoverImage = function CoverImage() {
  return React__default.createElement(StyleCoverImage, {
    className: "w-4/5",
    src: "/images/vendor_banner.png"
  });
};

function _templateObject2$a() {
  var data = _taggedTemplateLiteral(["\n        * {\n            outline: solid 1px red;\n        }\n    "]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$f() {
  var data = _taggedTemplateLiteral(["\n    & > * {\n        outline: solid 1px red;\n    }\n    \n    ", "\n"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}
var Outliner = styled__default.div(_templateObject$f(), withProp('all')(styled.css(_templateObject2$a())));
var Outline = Outliner;

function _templateObject2$b() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  min-height: calc(100vh - 60px);\n  position: sticky;\n  top: 60px;\n"]);

  _templateObject2$b = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = _taggedTemplateLiteral(["\n  min-height: calc(100vh - 80px);\n  background-color: ", ";\n"]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}
var JumbotronStyle = styled__default.div(_templateObject$g(), function (props) {
  return props.theme.primary;
});
var Jumbotron = function Jumbotron(props) {
  return React__default.createElement(JumbotronStyle, props, props.children);
};
var Container = function Container(props) {
  return React__default.createElement("div", {
    className: "container mx-auto"
  }, props.children);
};
var SidebarStyle = styled__default.div(_templateObject2$b(), color('navbar'));
var Sidebar = function Sidebar(props) {
  return React__default.createElement(SidebarStyle, null, props.children);
};

function _templateObject$h() {
  var data = _taggedTemplateLiteral(["\n  font-family: var(--heading-font, 'Avenir', 'Helvetica Neue', 'Segoe UI', sans-serif);\n  font-weight: ", ";\n  font-size: ", ";\n"]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}
var Heading = styled__default.span(_templateObject$h(), function (props) {
  return props.bold ? 'bold' : props.light ? '300' : '400';
}, function (props) {
  return props.$fontSize;
});
var H1 = function H1(props) {
  return React__default.createElement(Heading, _extends({}, props, {
    as: "h1",
    $fontSize: '43px'
  }));
};
var H2 = function H2(props) {
  return React__default.createElement(Heading, _extends({}, props, {
    as: "h2",
    $fontSize: "35px"
  }));
};
var H3 = function H3(props) {
  return React__default.createElement(Heading, _extends({}, props, {
    as: "h3",
    $fontSize: "25px"
  }));
};
var H4 = function H4(props) {
  return React__default.createElement(Heading, _extends({}, props, {
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

function _templateObject$i() {
  var data = _taggedTemplateLiteral(["\n  font-family: var(--text-font), 'Lato', sans-serif;\n  font-size: 16px;\n\n  ", "\n"]);

  _templateObject$i = function _templateObject() {
    return data;
  };

  return data;
}
var ParagraphStyle = styled__default.p(_templateObject$i(), function (props) {
  return props.small && styled.css(_templateObject2$c());
});
var P = ParagraphStyle;

exports.Activity = Activity;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.CircleButton = CircleButton;
exports.Cluster = Cluster;
exports.Collapsible = Collapsible;
exports.Container = Container;
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
exports.IconInput = IconInput;
exports.Input = Input;
exports.Jumbotron = Jumbotron;
exports.Modal = Modal;
exports.Outline = Outline;
exports.P = P;
exports.RadioInput = RadioInput;
exports.RadioLabel = RadioLabel;
exports.SearchComponent = SearchComponent;
exports.Sidebar = Sidebar;
exports.Stack = Stack;
exports.Tab = Tab;
exports.ThemeProvider = ThemeProvider;
exports.ThreeColumns = ThreeColumns;
exports.TwoColumns = TwoColumns;
