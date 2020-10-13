import { r as registerInstance, h, H as Host, g as getElement } from './index-e51f70ad.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsAstral = '[' + rsAstralRange + ']',
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

var lodash_camelcase = camelCase;

const getName = (iconName) => {
  if (isStr(iconName)) {
    iconName = toLower(iconName);
  }
  if (!isStr(iconName) || iconName.trim() === '') {
    return null;
  }
  // only allow alpha characters and dash
  const invalidChars = iconName.replace(/[a-z]|-|\d/gi, '');
  if (invalidChars !== '') {
    return null;
  }
  return iconName;
};
const isStr = (val) => typeof val === 'string';
const toLower = (val) => val.toLowerCase();

const canada = {
	id: "49:72",
	categories: [
		"north america"
	],
	terms: [
		"Canada"
	],
	variants: {
		rectangle: {
			id: "49:506",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:506",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6603/61dd/0cce9a391a81117511ee8fbabc9e4a3b",
			svg: "<svg viewBox=\"0 0 120 80\" fill=\"none\">\n  <rect width=\"120\" height=\"80\" fill=\"white\" class=\"fill-white\" />\n  <rect width=\"30\" height=\"80\" fill=\"#FF0000\" class=\"fill-red\" />\n  <rect x=\"90\" width=\"30\" height=\"80\" fill=\"#FF0000\" class=\"fill-red\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M59.7685 15L65.9093 23.1824L70.4586 21.7919L66.5809 38.8791L66.6232 39.0182L71.509 31.1767L73.2233 34.455L80.5798 33.3595L80.5799 33.3596L79.4954 40.7904L82.7402 42.5217L70.1315 50.5352L71.7685 55.9091L59.7685 52.6564L47.7685 55.9091L49.3935 50.5745L36.7269 42.5522L40.0289 40.7904L38.9443 33.3595L46.3009 34.455L48.0456 31.1187L52.552 38.3766L48.769 21.6973L53.6278 23.1824L59.7685 15Z\" fill=\"#FF0000\" class=\"fill-red\" />\n  <path d=\"M59.7686 40.7578L59.7687 65.0002\" stroke=\"#FF0000\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"round\" class=\"stroke-red\" />\n</svg>"
		},
		square: {
			id: "49:584",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:584",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e7f/7bf2/643f180809d1444900082672cd3da426",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <rect width=\"80\" height=\"80\" fill=\"white\" class=\"fill-white\" />\n  <rect width=\"20\" height=\"80\" fill=\"#FF0000\" class=\"fill-red\" />\n  <rect width=\"20\" height=\"80\" transform=\"matrix(-1 0 0 1 80 0)\" fill=\"#FF0000\" class=\"fill-red\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.8456 23L43.9395 28.5641L46.9723 27.6185L44.3872 39.2378L44.4154 39.3324L47.6726 34.0002L48.8155 36.2295L53.7198 35.4845L53.7199 35.4846L52.9968 40.5375L55.16 41.7148L46.7543 47.1639L47.8456 50.8182L39.8456 48.6063L31.8456 50.8182L32.9289 47.1906L24.4846 41.7355L26.6859 40.5375L25.9628 35.4845L30.8672 36.2295L32.0304 33.9607L35.0346 38.896L32.5126 27.5542L35.7518 28.5641L39.8456 23Z\" fill=\"#FF0000\" class=\"fill-red\" />\n  <path d=\"M39.8457 40.5151L39.8458 57\" stroke=\"#FF0000\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"round\" class=\"stroke-red\" />\n</svg>"
		},
		circle: {
			id: "49:604",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:604",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df9/bb26/202095307b02003e2e550380a65d655b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"80\" height=\"80\">\n    <rect width=\"80\" height=\"80\" rx=\"40\" fill=\"white\" class=\"fill-white\" />\n  </mask>\n  <g mask=\"url(#mask0)\">\n    <rect width=\"80\" height=\"80\" fill=\"white\" class=\"fill-white\" />\n    <rect width=\"16\" height=\"80\" fill=\"#FF0000\" class=\"fill-red\" />\n    <rect x=\"64\" width=\"16\" height=\"80\" fill=\"#FF0000\" class=\"fill-red\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.8072 19L44.9245 25.8732L48.7156 24.7052L45.4841 39.0584L45.5195 39.1753L49.5909 32.5885L51.0195 35.3422L57.1499 34.422L57.15 34.4221L56.2462 40.664L58.9502 42.1182L48.443 48.8496L49.8072 53.3636L39.8072 50.6314L29.8072 53.3636L31.1613 48.8825L20.6059 42.1438L23.3575 40.664L22.4536 34.422L28.5842 35.3422L30.0381 32.5397L33.7934 38.6363L30.6409 24.6258L34.6899 25.8732L39.8072 19Z\" fill=\"#FF0000\" class=\"fill-red\" />\n    <path d=\"M39.8071 40.6362L39.8073 60.9999\" stroke=\"#FF0000\" stroke-width=\"3\" stroke-linecap=\"square\" stroke-linejoin=\"round\" class=\"stroke-red\" />\n  </g>\n</svg>"
		}
	}
};
const mexico = {
	id: "49:277",
	categories: [
		"north america"
	],
	terms: [
		"Mexico"
	],
	variants: {
		rectangle: {
			id: "49:651",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:651",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0484/978a/edd89b09f62279f40a9598e871355786",
			svg: "<svg viewBox=\"0 0 120 80\" fill=\"none\">\n  <path d=\"M120 0H0V80H120V0Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M40.2857 0H0V80H40.2857V0Z\" fill=\"#006847\" class=\"fill-grey\" />\n  <path d=\"M120 0H79.7143V80H120V0Z\" fill=\"#CE1126\" class=\"fill-red\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M45.7358 40.9217C45.1085 40.7346 44.698 39.885 44.7995 38.9179C44.9098 37.8673 45.5827 37.0759 46.3025 37.1504C47.0223 37.2248 47.5164 38.1368 47.4061 39.1875C47.3047 40.153 46.7282 40.8996 46.0768 40.9564C46.1039 41.4695 46.1728 41.974 46.2807 42.468C46.9859 42.2934 47.8105 42.8658 48.1701 43.8062C48.501 44.6716 48.329 45.5631 47.7974 45.9598C48.1033 46.4122 48.4458 46.8461 48.8218 47.2588C49.3523 46.7648 50.4202 46.9067 51.2846 47.609C52.1223 48.2896 52.4779 49.2602 52.1502 49.8781C52.4862 50.0669 52.833 50.2441 53.1895 50.409C53.652 49.9412 54.7093 49.7917 55.8323 50.0882C57.0118 50.3996 57.882 51.1021 57.9853 51.7652C58.6875 51.8528 59.4072 51.8982 60.1405 51.8982C60.9236 51.8982 61.6913 51.8464 62.4388 51.7468C62.5551 51.0891 63.4201 50.3967 64.5887 50.0882C65.6758 49.8012 66.7014 49.9321 67.1853 50.3652C67.5477 50.1945 67.8997 50.0112 68.2405 49.8158C67.967 49.1965 68.3263 48.2672 69.1363 47.609C69.9593 46.9403 70.9669 46.7796 71.5194 47.1922C71.8922 46.7766 72.2314 46.34 72.5337 45.885C72.0735 45.4585 71.9394 44.6208 72.2509 43.8062C72.5878 42.9251 73.3328 42.3671 74.0054 42.4437C74.1119 41.9503 74.1794 41.4462 74.2053 40.9337C73.6125 40.7914 73.1089 40.0838 73.0148 39.1875C72.9046 38.1368 73.3986 37.2248 74.1184 37.1504C74.8382 37.0759 75.5111 37.8673 75.6214 38.9179C75.7304 39.956 75.2494 40.8587 74.5437 40.952C74.5166 41.4905 74.4455 42.0194 74.3332 42.5363C75.0057 42.8513 75.2561 43.8417 74.8896 44.8001C74.5098 45.7934 73.6112 46.3762 72.8825 46.1017C72.8604 46.0934 72.8386 46.0843 72.8173 46.0746C72.5001 46.5516 72.1438 47.0085 71.752 47.4424C72.1423 48.0554 71.7918 49.0715 70.9242 49.7764C70.0424 50.4928 68.9489 50.6261 68.43 50.096C68.0956 50.2883 67.7508 50.4691 67.3964 50.638C67.4185 50.683 67.4361 50.7299 67.4492 50.7786C67.649 51.5242 66.6923 52.424 65.3123 52.7883C63.9323 53.1526 62.6516 52.8435 62.4518 52.0979L62.4488 52.0865C61.6968 52.1856 60.9257 52.237 60.1405 52.237C59.4023 52.237 58.6766 52.1916 57.9675 52.1038C57.7625 52.8451 56.4849 53.1516 55.1086 52.7883C53.7286 52.424 52.7719 51.5242 52.9717 50.7786C52.9796 50.7493 52.9891 50.7206 53.0003 50.6926C52.6361 50.5227 52.2818 50.3403 51.9383 50.1459C51.4009 50.6168 50.3497 50.4694 49.4968 49.7764C48.6726 49.1068 48.3151 48.1566 48.6158 47.5376C48.2016 47.0885 47.8258 46.6141 47.4925 46.1178C46.7724 46.3516 45.9032 45.7726 45.5313 44.8001C45.1885 43.9035 45.3855 42.9788 45.963 42.6054C45.8397 42.0569 45.7628 41.4948 45.7358 40.9217Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M45.1375 41.1065C45.0708 41.3441 44.8227 41.4829 44.5834 41.4167C44.344 41.3505 44.2041 41.1043 44.2708 40.8668C44.3375 40.6292 44.5856 40.4903 44.8249 40.5565C45.0643 40.6228 45.2042 40.869 45.1375 41.1065Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M47.6868 41.2554C47.6201 41.4929 47.372 41.6318 47.1327 41.5656C46.8933 41.4994 46.7534 41.2531 46.8201 41.0156C46.8868 40.7781 47.1349 40.6392 47.3742 40.7054C47.6136 40.7716 47.7535 41.0178 47.6868 41.2554Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M49.3364 45.5714C49.2697 45.809 49.0216 45.9479 48.7822 45.8817C48.5429 45.8154 48.4029 45.5692 48.4697 45.3317C48.5364 45.0941 48.7845 44.9553 49.0238 45.0215C49.2631 45.0877 49.4031 45.3339 49.3364 45.5714Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M47.3869 46.9109C47.3202 47.1484 47.0721 47.2873 46.8328 47.2211C46.5934 47.1549 46.4535 46.9087 46.5202 46.6712C46.5869 46.4336 46.835 46.2947 47.0743 46.3609C47.3137 46.4271 47.4536 46.6734 47.3869 46.9109Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M52.1856 51.0782C52.1189 51.3157 51.8708 51.4546 51.6315 51.3884C51.3921 51.3222 51.2522 51.0759 51.3189 50.8384C51.3856 50.6009 51.6337 50.462 51.873 50.5282C52.1124 50.5944 52.2523 50.8406 52.1856 51.0782Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M53.2353 48.9945C53.1686 49.2321 52.9205 49.371 52.6812 49.3048C52.4418 49.2386 52.3019 48.9923 52.3686 48.7548C52.4353 48.5172 52.6834 48.3784 52.9228 48.4446C53.1621 48.5108 53.302 48.757 53.2353 48.9945Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M67.9314 49.1434C67.8647 49.3809 67.6166 49.5198 67.3772 49.4536C67.1379 49.3874 66.998 49.1411 67.0647 48.9036C67.1314 48.6661 67.3795 48.5272 67.6188 48.5934C67.8581 48.6596 67.9981 48.9058 67.9314 49.1434Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M69.281 51.0782C69.2143 51.3157 68.9662 51.4546 68.7269 51.3884C68.4875 51.3222 68.3476 51.0759 68.4143 50.8384C68.481 50.6009 68.7291 50.462 68.9684 50.5282C69.2078 50.5944 69.3477 50.8406 69.281 51.0782Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M73.6299 47.3574C73.5631 47.5949 73.315 47.7338 73.0757 47.6676C72.8364 47.6014 72.6964 47.3552 72.7631 47.1176C72.8298 46.8801 73.0779 46.7412 73.3173 46.8074C73.5566 46.8736 73.6966 47.1199 73.6299 47.3574Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M71.6804 45.7203C71.6137 45.9578 71.3656 46.0967 71.1262 46.0305C70.8869 45.9643 70.747 45.718 70.8137 45.4805C70.8804 45.243 71.1285 45.1041 71.3678 45.1703C71.6071 45.2365 71.7471 45.4827 71.6804 45.7203Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M76.0292 41.7018C75.9625 41.9394 75.7144 42.0783 75.4751 42.0121C75.2357 41.9459 75.0958 41.6996 75.1625 41.4621C75.2292 41.2246 75.4773 41.0857 75.7166 41.1519C75.956 41.2181 76.0959 41.4643 76.0292 41.7018Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M73.7798 41.2554C73.7131 41.4929 73.465 41.6318 73.2257 41.5656C72.9863 41.4994 72.8464 41.2531 72.9131 41.0156C72.9798 40.7781 73.2279 40.6392 73.4672 40.7054C73.7066 40.7716 73.8465 41.0178 73.7798 41.2554Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M59.1998 53.6872C59.1998 53.6872 59.0724 53.5514 58.9029 53.4627C58.7333 53.3743 58.6763 53.4006 58.6763 53.4006L58.5978 53.3728L58.7464 52.9885L59.8637 51.9298L60.0367 50.8657L60.0779 50.8647L60.7252 50.8579L60.7182 52.3103L60.9236 52.4025L62.1706 53.1442L62.1666 53.4672C62.1666 53.4672 62.1049 53.489 61.9845 53.5361C61.8635 53.584 61.8346 53.619 61.8346 53.619L61.364 53.6628L60.542 53.0717L60.2025 52.7177L59.583 53.505L59.1997 53.6871L59.1998 53.6872Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M60.0779 50.8645C60.0779 50.8645 60.0595 50.9207 60.0515 51.0843C60.043 51.2478 60.0624 52.1058 60.0201 52.2231C59.978 52.3404 59.3766 52.5866 59.0329 52.8837C58.6893 53.1818 58.6763 53.4004 58.6763 53.4004C58.6763 53.4004 58.563 53.409 58.3498 53.4878C58.1368 53.5662 58.0411 53.6846 58.0411 53.6846C58.0411 53.6846 58.1673 53.1554 58.7238 52.6654C59.2812 52.1744 59.5503 52.133 59.6123 52.0506C59.6746 51.969 59.6123 51.0301 59.6257 50.9542C59.6383 50.879 59.7052 50.8722 59.7512 50.8655C59.797 50.8589 60.0778 50.8645 60.0778 50.8645L60.0779 50.8645Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M61.4987 53.9998C61.4987 53.9998 61.5863 53.8295 61.6426 53.7722C61.6987 53.7154 61.8343 53.6189 61.8343 53.6189C61.8343 53.6189 61.8555 53.5974 61.551 53.4659C61.2465 53.3347 61.0899 53.3783 60.8726 53.2254C60.6553 53.0724 60.4375 52.8096 60.4375 52.8096L60.1461 53.0676C60.1461 53.0676 60.3205 53.3129 60.4855 53.4704C60.6504 53.6277 61.0245 53.6804 61.19 53.7722C61.3553 53.8644 61.4987 53.9998 61.4987 53.9998Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M60.6238 50.8582C60.6238 50.8582 60.9534 50.8387 60.9992 50.8893C61.0447 50.9398 61.038 50.9959 61.04 51.0127C61.0413 51.0285 61.0572 51.8059 60.9992 52.0614C60.9379 52.3284 60.7988 52.5949 60.7204 52.674C60.6419 52.7527 60.1464 53.1821 59.9113 53.4093C59.6765 53.6368 59.4375 53.9611 59.4375 53.9611C59.4375 53.9611 59.3505 53.8647 59.2765 53.7725C59.2028 53.6806 59.1282 53.65 59.1458 53.5889C59.1631 53.5278 59.4114 53.1598 59.8073 52.9016C60.2027 52.6433 60.5337 52.3502 60.6074 51.9301C60.682 51.5097 60.6238 50.8582 60.6238 50.8582L60.6238 50.8582Z\" fill=\"#D33131\" class=\"fill-red\" />\n  <path d=\"M68.5383 45.1249C65.0057 47.4396 62.4213 45.074 56.3916 45.1249C52.9933 45.1536 50.7872 43.0103 49.5775 41.1064\" stroke=\"#1CB0F6\" stroke-width=\"0.677588\" stroke-linecap=\"round\" class=\"stroke-blue\" />\n  <ellipse rx=\"2.18866\" ry=\"1.39769\" transform=\"matrix(0.966876 0.255247 -0.258877 0.96591 54.0709 44.4292)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"2.18939\" ry=\"1.67052\" transform=\"matrix(0.989317 0.145782 -0.147954 0.988994 58.1198 45.3219)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"2.43679\" ry=\"1.85929\" transform=\"matrix(0.989317 0.145782 -0.147954 0.988994 62.3766 45.3098)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.96674\" ry=\"1.40483\" transform=\"matrix(0.776122 0.630583 -0.636317 0.771428 50.8641 42.612)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.969\" ry=\"1.4032\" transform=\"matrix(-0.868312 0.496018 -0.501683 -0.865051 66.9098 45.8864)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"0.902561\" ry=\"0.644315\" transform=\"matrix(-0.800525 0.599299 -0.605101 -0.796149 68.9008 44.9142)\" fill=\"#D33131\" class=\"fill-red\" />\n  <ellipse rx=\"0.373129\" ry=\"0.400771\" transform=\"matrix(-0.800525 0.599299 -0.605101 -0.796149 69.8292 44.2537)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"0.899586\" ry=\"0.646439\" transform=\"matrix(0.451284 0.89238 -0.895099 0.445866 49.4583 40.9313)\" fill=\"#D33131\" class=\"fill-red\" />\n  <ellipse rx=\"0.371899\" ry=\"0.402093\" transform=\"matrix(0.451284 0.89238 -0.895099 0.445866 48.9714 39.9062)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M57.4919 41.1175C57.1556 41.6364 56.2157 41.6311 55.3925 41.1056C54.5693 40.5802 54.1745 39.7335 54.5108 39.2146C54.8471 38.6957 55.787 38.701 56.6102 39.2265C57.4334 39.752 57.8282 40.5986 57.4919 41.1175Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M53.9515 39.2265C54.165 39.0843 54.4102 39.0335 54.6471 39.0586C54.8592 38.8755 55.1806 38.802 55.5423 38.8377C55.0419 38.7883 54.5571 38.8232 53.9515 39.2265Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M53.1332 29.1077C53.5022 29.4966 53.4048 30.1826 52.9155 30.6399C52.7359 30.8077 52.5285 30.9214 52.3197 30.9789C52.2351 31.0022 52.1503 31.0162 52.0669 31.0209C51.9699 31.0264 51.8748 31.0191 51.7846 30.9989C51.6226 30.9626 51.4762 30.8846 51.3613 30.7636C50.9923 30.3746 51.0897 29.6886 51.579 29.2314C52.0683 28.7741 52.7641 28.7187 53.1332 29.1077Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M51.3522 31.2651C51.3552 31.2608 51.3583 31.2566 51.3613 31.2524C51.4646 31.1117 51.6207 31.0237 51.7846 30.9989C51.879 30.9846 51.976 30.9913 52.0669 31.0209C52.1482 31.0474 52.2247 31.0922 52.2902 31.1568C52.4962 31.3596 52.5275 31.6941 52.35 31.9491C52.1516 32.2342 51.7674 32.3122 51.4919 32.1233C51.2163 31.9344 51.1538 31.5502 51.3522 31.2651Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.4923 37.6312C52.6578 37.3022 53.0863 37.1814 53.4494 37.3613C53.8125 37.5412 53.9727 37.9537 53.8072 38.2827C53.6417 38.6117 53.2132 38.7325 52.8501 38.5526C52.487 38.3727 52.3268 37.9602 52.4923 37.6312Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.2924 36.3188C51.9588 36.1589 51.8421 35.7133 52.0317 35.3236C52.0653 35.2544 52.1064 35.1916 52.1531 35.136C52.3691 34.8786 52.7047 34.7759 52.9791 34.9074C53.3127 35.0673 53.4294 35.5129 53.2398 35.9026C53.2352 35.9121 53.2304 35.9215 53.2255 35.9307C53.0296 36.3012 52.6179 36.4747 52.2924 36.3188Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M51.663 38.7032C51.9309 38.5916 52.2554 38.7549 52.3877 39.0679C52.52 39.3809 52.41 39.7251 52.1421 39.8366C51.8741 39.9481 51.5497 39.7848 51.4174 39.4719C51.2851 39.1589 51.3951 38.8147 51.663 38.7032Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M50.4641 37.1092C50.7517 37.0685 51.024 37.308 51.0722 37.644C51.1205 37.98 50.9264 38.2854 50.6387 38.326C50.3511 38.3667 50.0788 38.1273 50.0306 37.7912C50.0234 37.7412 50.0216 37.6919 50.0247 37.644C50.0422 37.3702 50.2193 37.1438 50.4641 37.1092Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M50.86 35.3156C51.0813 35.2843 51.2924 35.438 51.3751 35.6726C51.3888 35.7113 51.3989 35.7523 51.405 35.7949C51.4175 35.8815 51.4119 35.9658 51.3916 36.0429C51.3413 36.2338 51.2002 36.3802 51.0165 36.4062C50.7587 36.4427 50.5147 36.2281 50.4714 35.9269C50.4282 35.6257 50.6022 35.352 50.86 35.3156Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M48.8649 34.8472C48.9181 34.5942 49.2045 34.4395 49.5045 34.5017C49.8046 34.5638 50.0047 34.8193 49.9515 35.0723C49.914 35.2506 49.7607 35.3801 49.5684 35.4192C49.4878 35.4356 49.4004 35.4362 49.3118 35.4178C49.0118 35.3557 48.8117 35.1002 48.8649 34.8472Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.3197 30.9789C52.2351 31.0022 52.1503 31.0162 52.0669 31.0209C52.1482 31.0474 52.2247 31.0922 52.2902 31.1568C52.2147 31.0823 52.2141 31.0079 52.3197 30.9789Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M51.7846 30.9989C51.6226 30.9626 51.4762 30.8846 51.3613 30.7636C51.3512 30.8874 51.3472 31.1542 51.3613 31.2524C51.4646 31.1117 51.6207 31.0237 51.7846 30.9989Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M54.006 32.1836C53.9313 31.8212 54.1667 31.4676 54.5317 31.3937C54.7634 31.3467 54.9916 31.4238 55.1466 31.5789C55.2358 31.6683 55.3007 31.7835 55.328 31.9159C55.4027 32.2782 55.1673 32.6319 54.8023 32.7058C54.5468 32.7576 54.2956 32.6586 54.1421 32.4704C54.0763 32.3896 54.0285 32.2924 54.006 32.1836Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M54.4544 33.4338C54.4332 33.3311 54.44 33.2292 54.4697 33.1359C54.4749 33.1197 54.4807 33.1037 54.4872 33.0881C54.5607 32.9112 54.7186 32.7727 54.9217 32.7316C55.2462 32.6659 55.563 32.8737 55.6294 33.1958C55.6637 33.3621 55.6246 33.5263 55.534 33.6553C55.4491 33.7762 55.3191 33.8662 55.1621 33.898C54.8377 33.9637 54.5208 33.7559 54.4544 33.4338Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.35 31.9491C52.1516 32.2342 51.7674 32.3122 51.4919 32.1233C52.1177 32.5524 53.839 32.0986 54.1421 32.4704C54.0763 32.3896 54.0285 32.2924 54.006 32.1836C53.9313 31.8212 54.1667 31.4676 54.5317 31.3937C54.7634 31.3467 54.9916 31.4238 55.1466 31.5789C54.725 31.1568 54.1421 31.0209 53.6923 31.1568C53.2332 31.2954 52.508 31.3713 52.2902 31.1568C52.4962 31.3596 52.5275 31.6941 52.35 31.9491Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M55.328 31.9159C55.4027 32.2782 55.1673 32.6319 54.8023 32.7058C54.5468 32.7576 54.2956 32.6586 54.1421 32.4704C54.3512 32.7268 54.5144 32.9429 54.4872 33.0881C54.5607 32.9112 54.7186 32.7727 54.9217 32.7316C55.2462 32.6659 55.563 32.8737 55.6294 33.1958C55.6637 33.3621 55.6246 33.5263 55.534 33.6553C55.9819 33.0171 55.7846 32.2178 55.1466 31.5789C55.2358 31.6683 55.3007 31.7835 55.328 31.9159Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.1531 35.136C52.3691 34.8786 52.7047 34.7759 52.9791 34.9074C53.3127 35.0673 53.4294 35.5129 53.2398 35.9026C53.4294 35.5129 54.9217 34.5277 55.534 33.6553C55.4491 33.7762 55.3191 33.8662 55.1621 33.898C54.8377 33.9637 54.5208 33.7559 54.4544 33.4338C54.4332 33.3311 54.44 33.2292 54.4697 33.1359C54.3274 33.5836 52.695 34.4494 52.1531 35.136Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.4923 37.6312C52.6578 37.3022 53.0863 37.1814 53.4494 37.3613C52.9134 37.0957 52.9765 36.4314 53.2255 35.9307C53.0296 36.3012 52.6179 36.4747 52.2924 36.3188C51.9588 36.1589 51.8421 35.7133 52.0317 35.3236C51.6121 36.1861 51.8178 38.0411 52.8501 38.5526C52.487 38.3727 52.3268 37.9602 52.4923 37.6312Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M54.7442 38.1735C54.7144 37.8038 54.9915 37.4944 55.363 37.4824C55.4651 37.4791 55.5637 37.4987 55.6537 37.5364C55.891 37.6359 56.0679 37.8621 56.0894 38.1301C56.1192 38.4998 55.8421 38.8092 55.4707 38.8212C55.3517 38.825 55.2375 38.7979 55.1363 38.7471C54.9212 38.6393 54.7644 38.4248 54.7442 38.1735Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M54.8944 39.7386C54.8802 39.5625 54.9287 39.3987 55.0212 39.268C55.0315 39.2536 55.0422 39.2395 55.0535 39.2259C55.1782 39.0754 55.3657 38.9777 55.5819 38.9708C55.6954 38.9671 55.805 38.9888 55.905 39.0307C56.1686 39.1413 56.3652 39.3926 56.3891 39.6904C56.4094 39.9424 56.3014 40.1691 56.1197 40.3098C56.0051 40.3986 55.8612 40.4531 55.7016 40.4583C55.2888 40.4716 54.9274 40.1494 54.8944 39.7386Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.2635 40.0845C52.4774 40.0497 52.6994 40.1025 52.8841 40.2156C53.0625 40.3248 53.2059 40.4904 53.2734 40.6878C53.4107 41.0894 53.1811 41.4704 52.7606 41.5389C52.6378 41.5589 52.5123 41.55 52.3927 41.5174C52.3048 41.4934 52.2201 41.4566 52.1421 41.409C51.9628 41.2998 51.8184 41.1337 51.7507 40.9356C51.6135 40.534 51.843 40.153 52.2635 40.0845Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M55.7016 40.4583C55.2888 40.4716 54.9274 40.1494 54.8944 39.7386C54.8802 39.5625 54.9287 39.3987 55.0212 39.268C54.6187 39.8366 53.2914 40.4651 52.8841 40.2156C53.0625 40.3248 53.2059 40.4904 53.2734 40.6878C53.4107 41.0894 53.1811 41.4704 52.7606 41.5389C52.6378 41.5589 52.5123 41.55 52.3927 41.5174C53.543 41.8498 55.7158 40.6226 56.1197 40.3098C56.0051 40.3986 55.8612 40.4531 55.7016 40.4583Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M56.0894 38.1301C56.1192 38.4998 55.8421 38.8092 55.4707 38.8212C55.3517 38.825 55.2375 38.7979 55.1363 38.7471C55.269 38.8137 55.1522 39.0851 55.0535 39.2259C55.1782 39.0754 55.3657 38.9777 55.5819 38.9708C55.6954 38.9671 55.805 38.9888 55.905 39.0307C56.1686 39.1413 56.3652 39.3926 56.3891 39.6904C56.336 39.0307 56.4896 37.8871 55.6537 37.5364C55.891 37.6359 56.0679 37.8621 56.0894 38.1301Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M53.4494 37.3613C53.8125 37.5412 53.9727 37.9537 53.8072 38.2827C53.6417 38.6117 53.2132 38.7325 52.8501 38.5526C53.6538 38.9508 54.8944 38.6259 55.1363 38.7471C54.9212 38.6393 54.7644 38.4248 54.7442 38.1735C54.7144 37.8038 54.9915 37.4944 55.363 37.4824C54.7442 37.5024 54.2921 37.7789 53.4494 37.3613Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M50.4714 35.9269C50.4282 35.6257 50.6022 35.352 50.86 35.3156C51.0813 35.2843 51.2924 35.438 51.3751 35.6726C51.1211 34.9519 49.8236 34.5678 49.5045 34.5017C49.8046 34.5638 50.0047 34.8193 49.9515 35.0723C49.914 35.2506 49.7607 35.3801 49.5684 35.4192C49.8363 35.3647 50.4089 35.4911 50.4714 35.9269Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M50.4641 37.1092C50.7517 37.0685 51.024 37.308 51.0722 37.644C51.0069 37.189 51.3131 36.491 51.3916 36.0429C51.3413 36.2338 51.2002 36.3802 51.0165 36.4062C50.7587 36.4427 50.5147 36.2281 50.4714 35.9269C50.5344 36.3658 50.0828 36.7379 50.0247 37.644C50.0422 37.3702 50.2193 37.1438 50.4641 37.1092Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M51.663 38.7032C51.9309 38.5916 52.2554 38.7549 52.3877 39.0679C52.1421 38.4869 51.1238 38.003 51.0722 37.644C51.1205 37.98 50.9264 38.2854 50.6387 38.326C50.3511 38.3667 50.0788 38.1273 50.0306 37.7912C50.1358 38.5239 51.2055 38.9704 51.4174 39.4719C51.2851 39.1589 51.3951 38.8147 51.663 38.7032Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M52.3877 39.0679C52.52 39.3809 52.41 39.7251 52.1421 39.8366C51.8741 39.9481 51.5497 39.7848 51.4174 39.4719C51.5497 39.7848 51.6205 40.5547 51.7507 40.9356C51.6135 40.534 51.843 40.153 52.2635 40.0845C52.4774 40.0497 52.6994 40.1025 52.8841 40.2156C52.5189 39.9919 52.52 39.3809 52.3877 39.0679Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <ellipse rx=\"0.869418\" ry=\"0.65245\" transform=\"matrix(0.963805 0.266608 -0.270374 0.962755 49.4646 34.9439)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"1.08639\" ry=\"1.11885\" transform=\"matrix(0.893003 -0.450051 0.455493 0.890239 54.5722 40.158)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"1.68677\" ry=\"1.07904\" transform=\"matrix(0.999972 0.00752512 -0.00763973 0.999971 62.8176 44.37)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M68.4206 29.5012C69.5693 30.689 70.4145 31.9788 70.8918 33.1663C71.0798 33.6338 71.2107 34.0854 71.2806 34.5086C71.4434 35.4934 71.2762 36.3247 70.7297 36.8453C68.286 39.1733 63.9888 35.1507 62.3157 32.9457C62.2364 32.8412 62.163 32.7408 62.096 32.6454C62.0163 32.5318 61.9393 32.4181 61.8652 32.3044C61.218 31.3121 60.7877 30.3241 60.6073 29.4455C60.3873 28.3745 60.5387 27.4661 61.1214 26.911C61.8701 26.1978 63.1767 26.2144 64.6395 26.8183C65.869 27.3259 67.2089 28.2484 68.4206 29.5012Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M59.1986 26.3845C59.8133 26.3092 60.3608 26.6436 60.4215 27.1314C60.512 27.859 59.6334 28.2488 59.016 28.1423C58.5807 28.0672 58.2424 27.7816 58.1954 27.4042C58.1528 27.0613 58.3621 26.7337 58.7038 26.5433C58.8481 26.4629 59.016 26.4069 59.1986 26.3845Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M59.1986 26.3845C59.8133 26.3092 60.3608 26.6436 60.4215 27.1314C60.512 27.859 59.6334 28.2488 59.016 28.1423C59.6346 28.249 60.3865 28.3704 60.6073 29.4455C60.3873 28.3745 60.5387 27.4661 61.1214 26.911C61.8701 26.1978 63.1767 26.2144 64.6395 26.8183C63.1764 26.2143 60.5535 25.4717 58.7038 26.5433C58.8481 26.4629 59.016 26.4069 59.1986 26.3845Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M71.2806 34.5086C71.4434 35.4934 71.2762 36.3247 70.7297 36.8453C68.286 39.1733 63.9888 35.1507 62.3157 32.9457C62.7508 33.5222 63.4445 34.3585 64.2535 35.3032C64.2572 35.3075 64.2609 35.3118 64.2646 35.3161C66.9484 38.4493 70.8918 42.7658 70.8918 42.7658C71.8472 39.5567 71.6932 36.4566 71.2806 34.5086Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M62.8552 34.4522C63.1642 35.1339 63.2946 35.8439 63.2658 36.5177C63.2075 37.8774 62.5007 39.0896 61.3045 39.6238C60.5261 39.9714 59.6687 39.9746 58.8716 39.698C58.1481 39.4468 57.4743 38.9651 56.9542 38.3009C56.7303 38.0149 56.5349 37.6951 56.3763 37.3453C55.8715 36.2318 55.8433 35.0426 56.2075 34.0592C56.2193 34.0273 56.2315 33.9956 56.2442 33.9641C56.5616 33.1738 57.1378 32.5262 57.927 32.1738C59.0962 31.6517 60.4435 31.9065 61.4972 32.7198C61.52 32.7374 61.5427 32.7553 61.5653 32.7734C62.0946 33.1993 62.5452 33.7685 62.8552 34.4522Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M55.9247 28.5699C56.3973 28.3856 56.8707 28.3034 57.2914 28.314C57.8475 28.2941 58.509 28.5885 58.6908 29.0477C58.9857 29.7924 57.8495 30.7507 56.6166 31.2315C55.3838 31.7123 54.5211 31.5335 54.2263 30.7888C53.9314 30.0441 54.6918 29.0507 55.9247 28.5699Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M58.6908 29.0477C58.9857 29.7924 57.8495 30.7507 56.6166 31.2315C57.8058 30.7677 56.6096 33.0478 56.2442 33.9641C56.5616 33.1738 57.1378 32.5262 57.927 32.1738C59.0962 31.6517 60.4435 31.9065 61.4972 32.7198C60.4406 31.9012 61.0404 30.1897 59.9907 29.2223C59.1509 28.4483 57.8413 28.2943 57.2914 28.314C57.8475 28.2941 58.509 28.5885 58.6908 29.0477Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M64.0706 38.183C64.1016 38.3476 64.1208 38.5113 64.1291 38.673C64.2841 41.7226 60.5021 42.9926 59.0661 40.1613C59.0355 40.1009 59.0064 40.0393 58.9791 39.9764C58.9397 39.886 58.9038 39.7931 58.8716 39.698C58.8179 39.5395 58.7745 39.3746 58.7424 39.2043C58.5689 38.2826 58.7625 37.3883 59.2101 36.7171C59.2246 36.6953 59.2394 36.6738 59.2545 36.6525C59.6326 36.1174 60.1768 35.7348 60.8259 35.6104C61.7333 35.4364 62.6337 35.8079 63.2658 36.5177C63.3034 36.56 63.3401 36.6034 63.3758 36.6481C63.4814 36.7801 63.5782 36.9223 63.6647 37.0735C63.854 37.4043 63.9943 37.7781 64.0706 38.183Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M69.5881 42.7658L64.1291 38.673C64.2841 41.7226 60.5021 42.9926 59.0661 40.1613C60.5003 42.9891 62.75 43.8969 63.2898 43.6588C63.8297 43.4207 63.8147 42.617 63.7397 42.2449L64.8644 43.5844C67.7436 44.1797 69.2132 43.2867 69.5881 42.7658Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M59.8407 41.0543C59.8407 41.7119 59.1694 42.2449 58.3412 42.2449C57.5129 42.2449 56.8416 41.7119 56.8416 41.0543C56.8416 40.6386 57.1098 40.2727 57.5164 40.0597C57.753 39.9358 58.0365 39.8636 58.3412 39.8636C58.5693 39.8636 58.7855 39.9041 58.9791 39.9764C59.4883 40.1667 59.8407 40.5778 59.8407 41.0543Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M58.9791 39.9764C58.9397 39.886 58.9038 39.7931 58.8716 39.698C58.1481 39.4468 57.4743 38.9651 56.9542 38.3009C57.8864 39.4916 57.9663 39.8241 57.5164 40.0597C57.753 39.9358 58.0365 39.8636 58.3412 39.8636C58.5693 39.8636 58.7855 39.9041 58.9791 39.9764Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M62.3157 32.9457C62.2364 32.8412 62.163 32.7408 62.096 32.6454C62.0163 32.5318 61.9393 32.4181 61.8652 32.3044C62.2331 32.8686 62.2384 33.3151 61.5653 32.7734C62.0946 33.1993 62.5452 33.7685 62.8552 34.4522C63.1642 35.1339 63.2946 35.8439 63.2658 36.5177C63.3034 36.56 63.3401 36.6034 63.3758 36.6481C63.4814 36.7801 63.5782 36.9223 63.6647 37.0735C63.1423 36.1608 63.4644 34.3919 64.2535 35.3032C63.4445 34.3585 62.7508 33.5222 62.3157 32.9457Z\" fill=\"#F2994A\" class=\"fill-brown\" />\n  <path d=\"M55.1799 29.5942C55.4079 29.749 55.4679 30.0705 55.2999 30.2967C55.144 30.5229 54.82 30.5825 54.5921 30.4158\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M53.3784 31.2274C52.9992 31.5716 52.9849 32.1687 53.3465 32.5611C53.6371 32.8764 54.0819 32.9636 54.4422 32.8071C54.2172 32.7251 53.7974 32.4514 53.9173 32.0128C54.0373 31.5741 54.6318 31.4858 54.8926 31.4946C54.8566 31.4327 54.7704 31.3698 54.7197 31.3147C54.3581 30.9224 53.7576 30.8833 53.3784 31.2274Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M54.9018 31.5816C54.8304 31.283 55.1778 30.9454 55.6777 30.8276C56.1777 30.7098 56.6409 30.8565 56.7123 31.1551C56.7487 31.3072 56.6765 31.4693 56.5309 31.6074C56.3905 31.7406 56.1818 31.8514 55.9364 31.9092C55.8718 31.9244 55.8078 31.9352 55.7452 31.9419C55.3233 31.9865 54.964 31.8417 54.9018 31.5816Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M53.3784 31.2274C53.7576 30.8833 54.3581 30.9224 54.7197 31.3147C54.7704 31.3698 54.8566 31.4327 54.8926 31.4946C54.8986 31.22 55.2259 30.934 55.6777 30.8276C55.1778 30.9454 54.8249 30.7553 54.5172 30.6362C54.2095 30.5172 53.7576 30.8833 53.3784 31.2274Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n</svg>"
		},
		square: {
			id: "49:577",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:577",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cafe/7fa4/bae9637cf287671a1fbf2fcb7baf7cb6",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M80 0H0V80H80V0Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M26 0H0V80H26V0Z\" fill=\"#006847\" class=\"fill-grey\" />\n  <path d=\"M80 0H54V80H80V0Z\" fill=\"#CE1126\" class=\"fill-red\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.378 42.2466C27.8867 42.0737 27.5689 41.3887 27.6496 40.6112C27.7392 39.7482 28.286 39.0981 28.8708 39.1593C29.4556 39.2204 29.8571 39.9696 29.7674 40.8326C29.6867 41.6099 29.2352 42.2144 28.719 42.2822C28.7409 42.7023 28.7966 43.1156 28.884 43.5201C29.45 43.4008 30.1013 43.8679 30.3882 44.6266C30.6518 45.3236 30.5226 46.0412 30.1102 46.3761C30.3582 46.7472 30.6359 47.1031 30.9408 47.4417C31.3792 47.0611 32.2288 47.1836 32.9187 47.7503C33.5873 48.2994 33.8779 49.0784 33.6357 49.5869C33.9117 49.7437 34.1965 49.8908 34.4896 50.0275C34.8766 49.6613 35.7195 49.5481 36.6137 49.7868C37.5538 50.0377 38.2521 50.5977 38.3575 51.1331C38.9297 51.2057 39.5163 51.2433 40.1141 51.2433C40.7527 51.2433 41.3785 51.2003 41.9876 51.1178C42.1032 50.5871 42.7972 50.0353 43.7283 49.7868C44.5933 49.5559 45.4103 49.6543 45.8131 49.9925C46.1122 49.8504 46.4026 49.6976 46.6836 49.5346C46.4841 49.0261 46.7773 48.2809 47.4233 47.7503C48.0795 47.2112 48.8802 47.0741 49.3341 47.3896C49.6381 47.047 49.9145 46.687 50.1606 46.3118C49.8053 45.9552 49.706 45.2818 49.9538 44.6266C50.2222 43.9168 50.8096 43.4623 51.3476 43.5043C51.4347 43.0973 51.4897 42.6814 51.5104 42.2587C51.0425 42.1247 50.6493 41.5528 50.5746 40.8326C50.4849 39.9696 50.8864 39.2204 51.4712 39.1593C52.0561 39.0981 52.6028 39.7482 52.6924 40.6112C52.7793 41.4479 52.4046 42.1776 51.8488 42.277C51.8268 42.7262 51.7681 43.1672 51.675 43.598C52.1993 43.8716 52.3901 44.6699 52.0978 45.4429C51.7892 46.2589 51.0591 46.7376 50.467 46.5121C50.4629 46.5106 50.4588 46.509 50.4547 46.5074C50.4509 46.5058 50.4471 46.5043 50.4433 46.5027C50.1822 46.9 49.8885 47.2804 49.5653 47.6414C49.8551 48.1475 49.568 48.9622 48.8759 49.5307C48.1719 50.1089 47.3018 50.2247 46.8718 49.8155C46.597 49.9754 46.3135 50.1258 46.0222 50.2661C46.0344 50.2945 46.0445 50.3237 46.0525 50.3539C46.2148 50.9663 45.4375 51.7054 44.3163 52.0047C43.2074 52.3006 42.1774 52.0556 41.9978 51.4577C41.384 51.5396 40.7548 51.5821 40.1141 51.5821C39.5114 51.5821 38.9189 51.5445 38.3398 51.4718C38.1483 52.0594 37.1259 52.2983 36.0257 52.0047C34.9045 51.7054 34.1272 50.9663 34.2895 50.3539C34.2933 50.3397 34.2975 50.3257 34.3022 50.3119C34.0014 50.1701 33.7087 50.0177 33.4251 49.8551C32.9816 50.2164 32.1463 50.0894 31.4661 49.5307C30.8099 48.9917 30.5178 48.2312 30.7363 47.7225C30.3929 47.3472 30.0818 46.9504 29.8063 46.535C29.2275 46.7004 28.541 46.2276 28.2442 45.4429C27.9713 44.7214 28.1194 43.9778 28.5667 43.6595C28.4636 43.1994 28.3997 42.7277 28.378 42.2466Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M27.9242 42.4087C27.87 42.6038 27.6684 42.7179 27.474 42.6635C27.2795 42.6091 27.1658 42.4069 27.22 42.2117C27.2742 42.0166 27.4758 41.9025 27.6702 41.9569C27.8647 42.0113 27.9784 42.2136 27.9242 42.4087Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M29.9955 42.5309C29.9413 42.7261 29.7397 42.8401 29.5453 42.7858C29.3508 42.7314 29.2371 42.5291 29.2913 42.334C29.3455 42.1389 29.5471 42.0248 29.7416 42.0792C29.936 42.1336 30.0497 42.3358 29.9955 42.5309Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M31.3358 46.0763C31.2816 46.2714 31.08 46.3855 30.8855 46.3311C30.6911 46.2767 30.5774 46.0745 30.6316 45.8794C30.6858 45.6842 30.8874 45.5701 31.0818 45.6245C31.2763 45.6789 31.39 45.8812 31.3358 46.0763Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M29.7518 47.1766C29.6976 47.3717 29.4961 47.4858 29.3016 47.4314C29.1071 47.377 28.9934 47.1748 29.0476 46.9796C29.1018 46.7845 29.3034 46.6704 29.4979 46.7248C29.6923 46.7792 29.806 46.9815 29.7518 47.1766Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M33.6508 50.5997C33.5966 50.7948 33.395 50.9089 33.2006 50.8545C33.0061 50.8001 32.8924 50.5979 32.9466 50.4027C33.0008 50.2076 33.2024 50.0935 33.3968 50.1479C33.5913 50.2023 33.705 50.4046 33.6508 50.5997Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M34.5037 48.8881C34.4495 49.0832 34.2479 49.1973 34.0534 49.1429C33.859 49.0886 33.7453 48.8863 33.7995 48.6912C33.8537 48.4961 34.0553 48.382 34.2497 48.4364C34.4442 48.4907 34.5579 48.693 34.5037 48.8881Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M46.4442 49.0104C46.39 49.2055 46.1885 49.3196 45.994 49.2652C45.7995 49.2108 45.6858 49.0086 45.74 48.8134C45.7942 48.6183 45.9958 48.5042 46.1903 48.5586C46.3847 48.613 46.4984 48.8153 46.4442 49.0104Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M47.5408 50.5997C47.4866 50.7948 47.285 50.9089 47.0906 50.8545C46.8961 50.8001 46.7824 50.5979 46.8366 50.4027C46.8908 50.2076 47.0924 50.0935 47.2868 50.1479C47.4813 50.2023 47.595 50.4046 47.5408 50.5997Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M51.0742 47.5433C51.02 47.7385 50.8185 47.8525 50.624 47.7982C50.4295 47.7438 50.3158 47.5415 50.37 47.3464C50.4242 47.1513 50.6258 47.0372 50.8203 47.0916C51.0147 47.146 51.1284 47.3482 51.0742 47.5433Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M49.4903 46.1985C49.4361 46.3937 49.2345 46.5078 49.04 46.4534C48.8456 46.399 48.7319 46.1967 48.7861 46.0016C48.8403 45.8065 49.0419 45.6924 49.2363 45.7468C49.4308 45.8012 49.5445 46.0034 49.4903 46.1985Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M53.0237 42.8977C52.9695 43.0928 52.7679 43.2069 52.5735 43.1525C52.379 43.0981 52.2653 42.8959 52.3195 42.7008C52.3737 42.5056 52.5753 42.3915 52.7697 42.4459C52.9642 42.5003 53.0779 42.7026 53.0237 42.8977Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M51.1961 42.5309C51.1419 42.7261 50.9403 42.8401 50.7458 42.7858C50.5514 42.7314 50.4377 42.5291 50.4919 42.334C50.5461 42.1389 50.7477 42.0248 50.9421 42.0792C51.1366 42.1336 51.2503 42.3358 51.1961 42.5309Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M39.3498 52.7435C39.3498 52.7435 39.2464 52.6319 39.1087 52.5591C38.9708 52.4865 38.9245 52.508 38.9245 52.508L38.8607 52.4852L38.9815 52.1695L39.8893 51.2999L40.0298 50.4259L40.0633 50.425L40.5892 50.4194L40.5836 51.6125L40.7505 51.6882L41.7637 52.2975L41.7604 52.5628C41.7604 52.5628 41.7102 52.5807 41.6124 52.6194C41.5141 52.6587 41.4906 52.6875 41.4906 52.6875L41.1083 52.7235L40.4404 52.2379L40.1646 51.9471L39.6612 52.5938L39.3498 52.7434L39.3498 52.7435Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M40.0633 50.4247C40.0633 50.4247 40.0484 50.4708 40.0419 50.6052C40.035 50.7395 40.0507 51.4443 40.0164 51.5407C39.9822 51.637 39.4935 51.8392 39.2142 52.0832C38.9351 52.3281 38.9245 52.5077 38.9245 52.5077C38.9245 52.5077 38.8325 52.5148 38.6592 52.5795C38.4862 52.6439 38.4084 52.7411 38.4084 52.7411C38.4084 52.7411 38.511 52.3065 38.9631 51.9039C39.416 51.5006 39.6346 51.4667 39.685 51.399C39.7356 51.3319 39.685 50.5606 39.6959 50.4983C39.7062 50.4366 39.7605 50.431 39.7979 50.4255C39.8351 50.4201 40.0633 50.4247 40.0633 50.4247L40.0633 50.4247Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M41.2177 53.0001C41.2177 53.0001 41.2889 52.8602 41.3347 52.8132C41.3802 52.7665 41.4904 52.6873 41.4904 52.6873C41.4904 52.6873 41.5076 52.6696 41.2602 52.5616C41.0128 52.4538 40.8856 52.4897 40.709 52.3641C40.5325 52.2384 40.3555 52.0225 40.3555 52.0225L40.1187 52.2344C40.1187 52.2344 40.2605 52.4359 40.3945 52.5653C40.5285 52.6945 40.8325 52.7378 40.9669 52.8132C41.1012 52.8889 41.2177 53.0001 41.2177 53.0001Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M40.5069 50.4195C40.5069 50.4195 40.7747 50.4035 40.8119 50.4451C40.8489 50.4866 40.8435 50.5327 40.8451 50.5465C40.8461 50.5594 40.859 51.198 40.8119 51.4079C40.7621 51.6272 40.6491 51.8461 40.5854 51.9111C40.5216 51.9758 40.119 52.3285 39.928 52.5151C39.7372 52.702 39.5431 52.9684 39.5431 52.9684C39.5431 52.9684 39.4723 52.8892 39.4122 52.8134C39.3524 52.738 39.2917 52.7129 39.306 52.6627C39.3201 52.6125 39.5218 52.3102 39.8435 52.0981C40.1648 51.8859 40.4337 51.6451 40.4936 51.3001C40.5542 50.9547 40.5069 50.4195 40.5069 50.4195L40.5069 50.4195Z\" fill=\"#D33131\" class=\"fill-red\" />\n  <path d=\"M46.9374 45.71C44.0672 47.6114 41.9673 45.6682 37.0682 45.71C34.3071 45.7336 32.5146 43.9731 31.5317 42.4092\" stroke=\"#1CB0F6\" stroke-width=\"0.677588\" stroke-linecap=\"round\" class=\"stroke-blue\" />\n  <ellipse rx=\"1.77956\" ry=\"1.14727\" transform=\"matrix(0.966181 0.257866 -0.256248 0.966611 35.1826 45.1382)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.77929\" ry=\"1.37189\" transform=\"matrix(0.989085 0.147349 -0.14638 0.989228 38.4723 45.8712)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.98036\" ry=\"1.52691\" transform=\"matrix(0.989085 0.147349 -0.14638 0.989228 41.931 45.8618)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.60498\" ry=\"1.1489\" transform=\"matrix(0.772734 0.63473 -0.632173 0.774827 32.5771 43.6453)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"1.60416\" ry=\"1.14949\" transform=\"matrix(-0.865961 0.500111 -0.497586 -0.867415 45.6142 46.335)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n  <ellipse rx=\"0.736236\" ry=\"0.52716\" transform=\"matrix(-0.797368 0.603494 -0.600908 -0.799318 47.2319 45.5361)\" fill=\"#D33131\" class=\"fill-red\" />\n  <ellipse rx=\"0.304368\" ry=\"0.327899\" transform=\"matrix(-0.797367 0.603495 -0.600907 -0.799319 47.9862 44.9939)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"0.737317\" ry=\"0.526384\" transform=\"matrix(0.447364 0.894352 -0.89314 0.449779 31.4348 42.2648)\" fill=\"#D33131\" class=\"fill-red\" />\n  <ellipse rx=\"0.304816\" ry=\"0.327417\" transform=\"matrix(0.447364 0.894352 -0.89314 0.449779 31.0392 41.4228)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M37.9622 42.4178C37.689 42.844 36.9253 42.8396 36.2564 42.408C35.5875 41.9764 35.2668 41.2809 35.54 40.8547C35.8132 40.4284 36.5769 40.4328 37.2458 40.8644C37.9147 41.2961 38.2354 41.9915 37.9622 42.4178Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M35.0856 40.8644C35.2591 40.7476 35.4583 40.7059 35.6508 40.7265C35.8231 40.5761 36.0843 40.5157 36.3782 40.545C35.9715 40.5044 35.5777 40.5331 35.0856 40.8644Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M34.4207 32.5526C34.7206 32.8721 34.6414 33.4356 34.2439 33.8113C34.098 33.9491 33.9295 34.0425 33.7598 34.0897C33.691 34.1088 33.6221 34.1204 33.5544 34.1242C33.4755 34.1287 33.3983 34.1227 33.325 34.1061C33.1934 34.0763 33.0744 34.0123 32.9811 33.9129C32.6813 33.5934 32.7604 33.0298 33.158 32.6542C33.5555 32.2786 34.1209 32.2331 34.4207 32.5526Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M32.9737 34.3248C32.9762 34.3213 32.9786 34.3178 32.9811 34.3144C33.065 34.1988 33.1919 34.1265 33.325 34.1061C33.4017 34.0944 33.4805 34.0999 33.5544 34.1242C33.6205 34.1459 33.6826 34.1828 33.7359 34.2358C33.9032 34.4025 33.9287 34.6772 33.7844 34.8867C33.6232 35.1209 33.311 35.1849 33.0872 35.0297C32.8633 34.8746 32.8125 34.559 32.9737 34.3248Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.9001 39.5541C34.0345 39.2839 34.3827 39.1846 34.6777 39.3324C34.9727 39.4802 35.1028 39.819 34.9684 40.0893C34.8339 40.3595 34.4858 40.4587 34.1908 40.311C33.8958 40.1632 33.7656 39.8243 33.9001 39.5541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.7376 38.476C33.4666 38.3447 33.3717 37.9787 33.5258 37.6586C33.5531 37.6017 33.5865 37.5501 33.6244 37.5045C33.7999 37.293 34.0726 37.2087 34.2955 37.3167C34.5666 37.448 34.6614 37.814 34.5074 38.1342C34.5036 38.142 34.4998 38.1497 34.4958 38.1573C34.3366 38.4616 34.0021 38.6042 33.7376 38.476Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.2262 40.4346C33.4439 40.343 33.7075 40.4772 33.815 40.7343C33.9225 40.9914 33.8332 41.274 33.6155 41.3657C33.3978 41.4573 33.1342 41.3232 33.0267 41.0661C32.9192 40.809 33.0085 40.5263 33.2262 40.4346Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M32.2521 39.1253C32.4858 39.0919 32.707 39.2886 32.7462 39.5646C32.7854 39.8406 32.6277 40.0914 32.394 40.1248C32.1603 40.1582 31.9391 39.9616 31.8999 39.6856C31.8941 39.6445 31.8926 39.6039 31.8951 39.5646C31.9093 39.3397 32.0532 39.1537 32.2521 39.1253Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M32.5738 37.652C32.7536 37.6263 32.9251 37.7525 32.9923 37.9453C33.0034 37.9771 33.0117 38.0107 33.0166 38.0457C33.0267 38.1168 33.0222 38.1861 33.0057 38.2494C32.9649 38.4063 32.8502 38.5265 32.701 38.5478C32.4915 38.5778 32.2932 38.4015 32.2581 38.1541C32.223 37.9067 32.3643 37.6819 32.5738 37.652Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M30.9528 37.2673C30.996 37.0594 31.2287 36.9324 31.4725 36.9834C31.7162 37.0345 31.8788 37.2443 31.8356 37.4521C31.8051 37.5986 31.6806 37.705 31.5243 37.7371C31.4589 37.7506 31.3879 37.7511 31.3159 37.736C31.0721 37.6849 30.9095 37.4751 30.9528 37.2673Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.7598 34.0897C33.691 34.1088 33.6221 34.1204 33.5544 34.1242C33.6205 34.1459 33.6826 34.1828 33.7359 34.2358C33.6745 34.1747 33.674 34.1136 33.7598 34.0897Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.325 34.1061C33.1934 34.0763 33.0744 34.0123 32.9811 33.9129C32.9729 34.0146 32.9696 34.2337 32.9811 34.3144C33.065 34.1988 33.1919 34.1265 33.325 34.1061Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M35.1299 35.0793C35.0692 34.7816 35.2605 34.4911 35.5571 34.4304C35.7453 34.3919 35.9307 34.4551 36.0566 34.5826C36.1291 34.656 36.1819 34.7506 36.204 34.8594C36.2647 35.157 36.0735 35.4475 35.7769 35.5083C35.5693 35.5507 35.3652 35.4695 35.2405 35.3149C35.187 35.2485 35.1482 35.1687 35.1299 35.0793Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M35.4942 36.1062C35.477 36.0219 35.4826 35.9381 35.5067 35.8615C35.5109 35.8482 35.5156 35.8351 35.5209 35.8223C35.5806 35.677 35.7089 35.5632 35.8739 35.5294C36.1375 35.4755 36.395 35.6462 36.449 35.9107C36.4768 36.0473 36.445 36.1822 36.3714 36.2882C36.3025 36.3875 36.1968 36.4614 36.0693 36.4875C35.8056 36.5415 35.5482 36.3708 35.4942 36.1062Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.7844 34.8867C33.6232 35.1209 33.311 35.1849 33.0872 35.0297C33.5957 35.3822 34.9942 35.0094 35.2405 35.3149C35.187 35.2485 35.1482 35.1687 35.1299 35.0793C35.0692 34.7816 35.2605 34.4911 35.5571 34.4304C35.7453 34.3919 35.9307 34.4551 36.0566 34.5826C35.7141 34.2358 35.2405 34.1242 34.875 34.2358C34.502 34.3497 33.9128 34.412 33.7359 34.2358C33.9032 34.4025 33.9287 34.6772 33.7844 34.8867Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M36.204 34.8594C36.2647 35.157 36.0735 35.4475 35.7769 35.5083C35.5693 35.5507 35.3652 35.4695 35.2405 35.3149C35.4104 35.5255 35.543 35.703 35.5209 35.8223C35.5806 35.677 35.7089 35.5632 35.8739 35.5294C36.1375 35.4755 36.395 35.6462 36.449 35.9107C36.4768 36.0473 36.445 36.1822 36.3714 36.2882C36.7354 35.764 36.575 35.1074 36.0566 34.5826C36.1291 34.656 36.1819 34.7506 36.204 34.8594Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.6244 37.5045C33.7999 37.293 34.0726 37.2087 34.2955 37.3167C34.5666 37.448 34.6614 37.814 34.5074 38.1342C34.6614 37.814 35.8739 37.0048 36.3714 36.2882C36.3025 36.3875 36.1968 36.4614 36.0693 36.4875C35.8056 36.5415 35.5482 36.3708 35.4942 36.1062C35.477 36.0219 35.4826 35.9381 35.5067 35.8615C35.391 36.2292 34.0647 36.9405 33.6244 37.5045Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.9001 39.5541C34.0345 39.2839 34.3827 39.1846 34.6777 39.3324C34.2422 39.1143 34.2934 38.5685 34.4958 38.1573C34.3366 38.4616 34.0021 38.6042 33.7376 38.476C33.4666 38.3447 33.3717 37.9787 33.5258 37.6586C33.1848 38.367 33.352 39.8908 34.1908 40.311C33.8958 40.1632 33.7656 39.8243 33.9001 39.5541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M35.7297 39.9995C35.7055 39.6959 35.9306 39.4417 36.2324 39.4319C36.3154 39.4292 36.3956 39.4452 36.4687 39.4762C36.6614 39.558 36.8052 39.7437 36.8227 39.9639C36.8469 40.2676 36.6218 40.5217 36.3199 40.5316C36.2233 40.5347 36.1305 40.5124 36.0482 40.4707C35.8735 40.3822 35.7461 40.206 35.7297 39.9995Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M35.8517 41.2852C35.8402 41.1405 35.8796 41.006 35.9548 40.8986C35.9631 40.8867 35.9719 40.8752 35.981 40.864C36.0824 40.7404 36.2347 40.6602 36.4103 40.6544C36.5026 40.6514 36.5916 40.6693 36.6728 40.7037C36.887 40.7946 37.0467 41.001 37.0662 41.2456C37.0827 41.4525 36.9949 41.6388 36.8473 41.7544C36.7542 41.8273 36.6372 41.8721 36.5076 41.8763C36.1722 41.8873 35.8786 41.6226 35.8517 41.2852Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.7141 41.5693C33.8879 41.5407 34.0683 41.5841 34.2183 41.677C34.3633 41.7667 34.4799 41.9028 34.5347 42.0649C34.6462 42.3948 34.4597 42.7078 34.1181 42.764C34.0183 42.7804 33.9163 42.7731 33.8191 42.7463C33.7477 42.7266 33.6789 42.6964 33.6155 42.6573C33.4698 42.5676 33.3525 42.4312 33.2975 42.2684C33.186 41.9386 33.3725 41.6256 33.7141 41.5693Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M36.5076 41.8763C36.1722 41.8873 35.8786 41.6226 35.8517 41.2852C35.8402 41.1405 35.8796 41.006 35.9548 40.8986C35.6277 41.3657 34.5493 41.8819 34.2183 41.677C34.3633 41.7667 34.4799 41.9028 34.5347 42.0649C34.6462 42.3948 34.4597 42.7078 34.1181 42.764C34.0183 42.7804 33.9163 42.7731 33.8191 42.7463C34.7537 43.0193 36.5191 42.0113 36.8473 41.7544C36.7542 41.8273 36.6372 41.8721 36.5076 41.8763Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M36.8227 39.9639C36.8469 40.2676 36.6218 40.5217 36.3199 40.5316C36.2233 40.5347 36.1305 40.5124 36.0482 40.4707C36.1561 40.5254 36.0612 40.7484 35.981 40.864C36.0824 40.7404 36.2347 40.6602 36.4103 40.6544C36.5026 40.6514 36.5916 40.6693 36.6728 40.7037C36.887 40.7946 37.0467 41.001 37.0662 41.2456C37.0231 40.7037 37.1479 39.7643 36.4687 39.4762C36.6614 39.558 36.8052 39.7437 36.8227 39.9639Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M34.6777 39.3324C34.9727 39.4802 35.1028 39.819 34.9684 40.0893C34.8339 40.3595 34.4858 40.4587 34.1908 40.311C34.8437 40.6381 35.8517 40.3711 36.0482 40.4707C35.8735 40.3822 35.7461 40.206 35.7297 39.9995C35.7055 39.6959 35.9306 39.4417 36.2324 39.4319C35.7297 39.4483 35.3624 39.6754 34.6777 39.3324Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M32.2581 38.1541C32.223 37.9067 32.3643 37.6819 32.5738 37.652C32.7536 37.6263 32.9251 37.7525 32.9923 37.9453C32.7859 37.3533 31.7317 37.0377 31.4725 36.9834C31.7162 37.0345 31.8788 37.2443 31.8356 37.4521C31.8051 37.5986 31.6806 37.705 31.5243 37.7371C31.7421 37.6923 32.2073 37.7962 32.2581 38.1541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M32.2521 39.1253C32.4858 39.0919 32.707 39.2886 32.7462 39.5646C32.6932 39.1909 32.9419 38.6175 33.0057 38.2494C32.9649 38.4063 32.8502 38.5265 32.701 38.5478C32.4915 38.5778 32.2932 38.4015 32.2581 38.1541C32.3093 38.5147 31.9423 38.8203 31.8951 39.5646C31.9093 39.3397 32.0532 39.1537 32.2521 39.1253Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.2262 40.4346C33.4439 40.343 33.7075 40.4772 33.815 40.7343C33.6155 40.257 32.7881 39.8595 32.7462 39.5646C32.7854 39.8406 32.6277 40.0914 32.394 40.1248C32.1603 40.1582 31.9391 39.9616 31.8999 39.6856C31.9853 40.2874 32.8545 40.6541 33.0267 41.0661C32.9192 40.809 33.0085 40.5263 33.2262 40.4346Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <path d=\"M33.815 40.7343C33.9225 40.9914 33.8332 41.274 33.6155 41.3657C33.3978 41.4573 33.1342 41.3232 33.0267 41.0661C33.1342 41.3232 33.1917 41.9555 33.2975 42.2684C33.186 41.9386 33.3725 41.6256 33.7141 41.5693C33.8879 41.5407 34.0683 41.5841 34.2183 41.677C33.9216 41.4933 33.9225 40.9914 33.815 40.7343Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n  <ellipse rx=\"0.706957\" ry=\"0.535517\" transform=\"matrix(0.963049 0.269326 -0.267647 0.963517 31.44 37.347)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"0.884664\" ry=\"0.916995\" transform=\"matrix(0.891011 -0.453982 0.451556 0.892243 35.59 41.6295)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <ellipse rx=\"1.3705\" ry=\"0.886354\" transform=\"matrix(0.999971 0.00760781 -0.00755669 0.999972 42.2893 45.0896)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M46.8417 32.876C47.7751 33.8516 48.4618 34.9112 48.8496 35.8866C49.0023 36.2706 49.1087 36.6416 49.1655 36.9892C49.2977 37.7981 49.1619 38.481 48.7179 38.9086C46.7324 40.821 43.2409 37.5167 41.8815 35.7054C41.8171 35.6196 41.7575 35.5371 41.703 35.4587C41.6382 35.3654 41.5757 35.272 41.5155 35.1787C40.9897 34.3635 40.64 33.5519 40.4934 32.8302C40.3147 31.9505 40.4377 31.2043 40.9111 30.7483C41.5194 30.1625 42.581 30.1761 43.7696 30.6722C44.7686 31.0891 45.8572 31.8469 46.8417 32.876Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M39.3488 30.3159C39.8483 30.254 40.2931 30.5287 40.3424 30.9294C40.416 31.527 39.7021 31.8472 39.2005 31.7597C38.8468 31.698 38.5719 31.4635 38.5338 31.1535C38.4991 30.8717 38.6692 30.6027 38.9469 30.4463C39.0641 30.3802 39.2005 30.3342 39.3488 30.3159Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M39.3488 30.3159C39.8483 30.254 40.2931 30.5287 40.3424 30.9294C40.416 31.527 39.7021 31.8472 39.2005 31.7597C39.7031 31.8474 40.314 31.9471 40.4934 32.8302C40.3147 31.9505 40.4377 31.2043 40.9111 30.7483C41.5194 30.1625 42.581 30.1761 43.7696 30.6722C42.5809 30.176 40.4497 29.5661 38.9469 30.4463C39.0641 30.3802 39.2005 30.3342 39.3488 30.3159Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M49.1655 36.9892C49.2977 37.7981 49.1619 38.481 48.7179 38.9086C46.7324 40.821 43.2409 37.5167 41.8815 35.7054C42.2351 36.179 42.7986 36.8659 43.456 37.6419C43.459 37.6454 43.462 37.6489 43.465 37.6525C45.6456 40.2262 48.8496 43.7719 48.8496 43.7719C49.6259 41.1359 49.5008 38.5893 49.1655 36.9892Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M42.3198 36.9429C42.5709 37.5029 42.6769 38.0861 42.6534 38.6395C42.6061 39.7564 42.0319 40.7522 41.0599 41.191C40.4274 41.4765 39.7308 41.4792 39.0832 41.2519C38.4953 41.0456 37.9478 40.6499 37.5253 40.1043C37.3434 39.8694 37.1846 39.6067 37.0558 39.3194C36.6456 38.4047 36.6227 37.4279 36.9186 36.6201C36.9282 36.5939 36.9381 36.5678 36.9484 36.5419C37.2063 35.8928 37.6745 35.3608 38.3157 35.0713C39.2657 34.6425 40.3604 34.8517 41.2165 35.5198C41.235 35.5343 41.2535 35.549 41.2718 35.5639C41.7018 35.9138 42.068 36.3813 42.3198 36.9429Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M36.6888 32.111C37.0728 31.9596 37.4574 31.8921 37.7993 31.9008C38.2511 31.8844 38.7886 32.1262 38.9363 32.5035C39.1759 33.1152 38.2527 33.9023 37.251 34.2973C36.2493 34.6922 35.5484 34.5454 35.3088 33.9337C35.0693 33.322 35.6871 32.5059 36.6888 32.111Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M38.9363 32.5035C39.1759 33.1152 38.2527 33.9023 37.251 34.2973C38.2173 33.9163 37.2453 35.7893 36.9484 36.5419C37.2063 35.8928 37.6745 35.3608 38.3157 35.0713C39.2657 34.6425 40.3604 34.8517 41.2165 35.5198C40.358 34.8474 40.8454 33.4415 39.9925 32.6469C39.3101 32.0111 38.246 31.8846 37.7993 31.9008C38.2511 31.8844 38.7886 32.1262 38.9363 32.5035Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M43.3073 40.0075C43.3325 40.1427 43.3482 40.2771 43.3549 40.41C43.4808 42.915 40.4079 43.9582 39.2412 41.6325C39.2163 41.5829 39.1927 41.5323 39.1705 41.4806C39.1385 41.4064 39.1093 41.3301 39.0832 41.2519C39.0396 41.1217 39.0043 40.9863 38.9782 40.8464C38.8372 40.0892 38.9946 39.3547 39.3582 38.8034C39.37 38.7855 39.382 38.7678 39.3943 38.7502C39.7015 38.3108 40.1437 37.9964 40.671 37.8942C41.4083 37.7514 42.1399 38.0565 42.6534 38.6395C42.684 38.6743 42.7138 38.71 42.7428 38.7466C42.8286 38.8551 42.9073 38.9719 42.9776 39.0961C43.1314 39.3678 43.2454 39.6748 43.3073 40.0075Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M47.7904 43.7719L43.3549 40.41C43.4808 42.915 40.4079 43.9582 39.2412 41.6325C40.4065 43.9553 42.2344 44.7011 42.673 44.5055C43.1116 44.3098 43.0994 43.6497 43.0385 43.344L43.9523 44.4443C46.2917 44.9333 47.4858 44.1998 47.7904 43.7719Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M39.8706 42.366C39.8706 42.9062 39.3251 43.344 38.6522 43.344C37.9793 43.344 37.4338 42.9062 37.4338 42.366C37.4338 42.0246 37.6517 41.724 37.9821 41.5491C38.1743 41.4473 38.4046 41.388 38.6522 41.388C38.8375 41.388 39.0132 41.4212 39.1705 41.4806C39.5842 41.637 39.8706 41.9746 39.8706 42.366Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M39.1705 41.4806C39.1385 41.4064 39.1093 41.3301 39.0832 41.2519C38.4953 41.0456 37.9478 40.6499 37.5253 40.1043C38.2827 41.0824 38.3476 41.3555 37.9821 41.5491C38.1743 41.4473 38.4046 41.388 38.6522 41.388C38.8375 41.388 39.0132 41.4212 39.1705 41.4806Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M41.8815 35.7054C41.8171 35.6196 41.7575 35.5371 41.703 35.4587C41.6382 35.3654 41.5757 35.272 41.5155 35.1787C41.8144 35.6421 41.8187 36.0088 41.2718 35.5639C41.7018 35.9138 42.068 36.3813 42.3198 36.9429C42.5709 37.5029 42.6769 38.0861 42.6534 38.6395C42.684 38.6743 42.7138 38.71 42.7428 38.7466C42.8286 38.8551 42.9073 38.9719 42.9776 39.0961C42.5531 38.3464 42.8149 36.8933 43.456 37.6419C42.7986 36.8659 42.2351 36.179 41.8815 35.7054Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n  <path d=\"M36.0838 32.9526C36.269 33.0798 36.3177 33.3438 36.1812 33.5297C36.0545 33.7155 35.7913 33.7644 35.6061 33.6275\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.62 34.294C34.3119 34.5768 34.3003 35.0672 34.5941 35.3895C34.8301 35.6485 35.1915 35.7201 35.4843 35.5916C35.3015 35.5242 34.9604 35.2995 35.0578 34.9391C35.1553 34.5788 35.6383 34.5063 35.8502 34.5135C35.821 34.4627 35.751 34.411 35.7098 34.3657C35.416 34.0434 34.9281 34.0113 34.62 34.294Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M35.8577 34.585C35.7997 34.3397 36.0819 34.0623 36.4882 33.9656C36.8944 33.8688 37.2707 33.9893 37.3288 34.2347C37.3583 34.3595 37.2997 34.4927 37.1814 34.6062C37.0673 34.7155 36.8978 34.8066 36.6983 34.8541C36.6458 34.8666 36.5939 34.8754 36.543 34.8809C36.2002 34.9176 35.9083 34.7986 35.8577 34.585Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  <path d=\"M34.62 34.294C34.9281 34.0113 35.416 34.0434 35.7098 34.3657C35.751 34.411 35.821 34.4627 35.8502 34.5135C35.8551 34.288 36.121 34.053 36.4882 33.9656C36.0819 34.0623 35.7952 33.9062 35.5452 33.8084C35.2952 33.7106 34.9281 34.0113 34.62 34.294Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n</svg>"
		},
		circle: {
			id: "49:624",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:624",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f45a/1704/5f703aeb4a04f37d126755842deb5cc0",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"80\" height=\"80\">\n    <rect width=\"80\" height=\"80\" rx=\"40\" fill=\"white\" class=\"fill-white\" />\n  </mask>\n  <g mask=\"url(#mask0)\">\n    <path d=\"M80 0H0V80H80V0Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M26 0H0V80H26V0Z\" fill=\"#006847\" class=\"fill-grey\" />\n    <path d=\"M80 0H54V80H80V0Z\" fill=\"#CE1126\" class=\"fill-red\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M28.378 42.2466C27.8867 42.0737 27.5689 41.3887 27.6496 40.6112C27.7392 39.7482 28.286 39.0981 28.8708 39.1593C29.4556 39.2204 29.8571 39.9696 29.7674 40.8326C29.6867 41.6099 29.2352 42.2144 28.719 42.2822C28.7409 42.7023 28.7966 43.1156 28.884 43.5201C29.45 43.4008 30.1013 43.8679 30.3882 44.6266C30.6518 45.3236 30.5226 46.0412 30.1102 46.3761C30.3582 46.7472 30.6359 47.1031 30.9408 47.4417C31.3792 47.0611 32.2288 47.1836 32.9187 47.7503C33.5873 48.2994 33.8779 49.0784 33.6357 49.5869C33.9117 49.7437 34.1965 49.8908 34.4896 50.0275C34.8766 49.6613 35.7195 49.5481 36.6137 49.7868C37.5538 50.0377 38.2521 50.5977 38.3575 51.1331C38.9297 51.2057 39.5163 51.2433 40.1141 51.2433C40.7527 51.2433 41.3785 51.2003 41.9876 51.1178C42.1032 50.5871 42.7972 50.0353 43.7283 49.7868C44.5933 49.5559 45.4103 49.6543 45.8131 49.9925C46.1122 49.8504 46.4026 49.6976 46.6836 49.5346C46.4841 49.0261 46.7773 48.2809 47.4233 47.7503C48.0795 47.2112 48.8802 47.0741 49.3341 47.3896C49.6381 47.047 49.9145 46.687 50.1606 46.3118C49.8053 45.9552 49.706 45.2818 49.9538 44.6266C50.2222 43.9168 50.8096 43.4623 51.3476 43.5043C51.4347 43.0973 51.4897 42.6814 51.5104 42.2587C51.0425 42.1247 50.6493 41.5528 50.5746 40.8326C50.4849 39.9696 50.8864 39.2204 51.4712 39.1593C52.0561 39.0981 52.6028 39.7482 52.6924 40.6112C52.7793 41.4479 52.4046 42.1776 51.8488 42.277C51.8268 42.7262 51.7681 43.1672 51.675 43.598C52.1993 43.8716 52.3901 44.6699 52.0978 45.4429C51.7892 46.2589 51.0591 46.7376 50.467 46.5121C50.4629 46.5106 50.4588 46.509 50.4547 46.5074C50.4509 46.5058 50.4471 46.5043 50.4433 46.5027C50.1822 46.9 49.8885 47.2804 49.5653 47.6414C49.8551 48.1475 49.568 48.9622 48.8759 49.5307C48.1719 50.1089 47.3018 50.2247 46.8718 49.8155C46.597 49.9754 46.3135 50.1258 46.0222 50.2661C46.0344 50.2945 46.0445 50.3237 46.0525 50.3539C46.2148 50.9663 45.4375 51.7054 44.3163 52.0047C43.2074 52.3006 42.1774 52.0556 41.9978 51.4577C41.384 51.5396 40.7548 51.5821 40.1141 51.5821C39.5114 51.5821 38.9189 51.5445 38.3398 51.4718C38.1483 52.0594 37.1259 52.2983 36.0257 52.0047C34.9045 51.7054 34.1272 50.9663 34.2895 50.3539C34.2933 50.3397 34.2975 50.3257 34.3022 50.3119C34.0014 50.1701 33.7087 50.0177 33.4251 49.8551C32.9816 50.2164 32.1463 50.0894 31.4661 49.5307C30.8099 48.9917 30.5178 48.2312 30.7363 47.7225C30.3929 47.3472 30.0818 46.9504 29.8063 46.535C29.2275 46.7004 28.541 46.2276 28.2442 45.4429C27.9713 44.7214 28.1194 43.9778 28.5667 43.6595C28.4636 43.1994 28.3997 42.7277 28.378 42.2466Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M27.9242 42.4087C27.87 42.6038 27.6684 42.7179 27.474 42.6635C27.2795 42.6091 27.1658 42.4069 27.22 42.2117C27.2742 42.0166 27.4758 41.9025 27.6702 41.9569C27.8647 42.0113 27.9784 42.2136 27.9242 42.4087Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M29.9955 42.5309C29.9413 42.7261 29.7397 42.8401 29.5453 42.7858C29.3508 42.7314 29.2371 42.5291 29.2913 42.334C29.3455 42.1389 29.5471 42.0248 29.7416 42.0792C29.936 42.1336 30.0497 42.3358 29.9955 42.5309Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M31.3358 46.0763C31.2816 46.2714 31.08 46.3855 30.8855 46.3311C30.6911 46.2767 30.5774 46.0745 30.6316 45.8794C30.6858 45.6842 30.8874 45.5701 31.0818 45.6245C31.2763 45.6789 31.39 45.8812 31.3358 46.0763Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M29.7518 47.1766C29.6976 47.3717 29.4961 47.4858 29.3016 47.4314C29.1071 47.377 28.9934 47.1748 29.0476 46.9796C29.1018 46.7845 29.3034 46.6704 29.4979 46.7248C29.6923 46.7792 29.806 46.9815 29.7518 47.1766Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M33.6508 50.5997C33.5966 50.7948 33.395 50.9089 33.2006 50.8545C33.0061 50.8001 32.8924 50.5979 32.9466 50.4027C33.0008 50.2076 33.2024 50.0935 33.3968 50.1479C33.5913 50.2023 33.705 50.4046 33.6508 50.5997Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M34.5037 48.8881C34.4495 49.0832 34.2479 49.1973 34.0534 49.1429C33.859 49.0886 33.7453 48.8863 33.7995 48.6912C33.8537 48.4961 34.0553 48.382 34.2497 48.4364C34.4442 48.4907 34.5579 48.693 34.5037 48.8881Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M46.4442 49.0104C46.39 49.2055 46.1885 49.3196 45.994 49.2652C45.7995 49.2108 45.6858 49.0086 45.74 48.8134C45.7942 48.6183 45.9958 48.5042 46.1903 48.5586C46.3847 48.613 46.4984 48.8153 46.4442 49.0104Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M47.5408 50.5997C47.4866 50.7948 47.285 50.9089 47.0906 50.8545C46.8961 50.8001 46.7824 50.5979 46.8366 50.4027C46.8908 50.2076 47.0924 50.0935 47.2868 50.1479C47.4813 50.2023 47.595 50.4046 47.5408 50.5997Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M51.0742 47.5433C51.02 47.7385 50.8185 47.8525 50.624 47.7982C50.4295 47.7438 50.3158 47.5415 50.37 47.3464C50.4242 47.1513 50.6258 47.0372 50.8203 47.0916C51.0147 47.146 51.1284 47.3482 51.0742 47.5433Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M49.4903 46.1985C49.4361 46.3937 49.2345 46.5078 49.04 46.4534C48.8456 46.399 48.7319 46.1967 48.7861 46.0016C48.8403 45.8065 49.0419 45.6924 49.2363 45.7468C49.4308 45.8012 49.5445 46.0034 49.4903 46.1985Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M53.0237 42.8977C52.9695 43.0928 52.7679 43.2069 52.5735 43.1525C52.379 43.0981 52.2653 42.8959 52.3195 42.7008C52.3737 42.5056 52.5753 42.3915 52.7697 42.4459C52.9642 42.5003 53.0779 42.7026 53.0237 42.8977Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M51.1961 42.5309C51.1419 42.7261 50.9403 42.8401 50.7458 42.7858C50.5514 42.7314 50.4377 42.5291 50.4919 42.334C50.5461 42.1389 50.7477 42.0248 50.9421 42.0792C51.1366 42.1336 51.2503 42.3358 51.1961 42.5309Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M39.3498 52.7435C39.3498 52.7435 39.2464 52.6319 39.1087 52.5591C38.9708 52.4865 38.9245 52.508 38.9245 52.508L38.8607 52.4852L38.9815 52.1695L39.8893 51.2999L40.0298 50.4259L40.0633 50.425L40.5892 50.4194L40.5836 51.6125L40.7505 51.6882L41.7637 52.2975L41.7604 52.5628C41.7604 52.5628 41.7102 52.5807 41.6124 52.6194C41.5141 52.6587 41.4906 52.6875 41.4906 52.6875L41.1083 52.7235L40.4404 52.2379L40.1646 51.9471L39.6612 52.5938L39.3498 52.7434L39.3498 52.7435Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M40.0633 50.4247C40.0633 50.4247 40.0484 50.4708 40.0419 50.6052C40.035 50.7395 40.0507 51.4443 40.0164 51.5407C39.9822 51.637 39.4935 51.8392 39.2142 52.0832C38.9351 52.3281 38.9245 52.5077 38.9245 52.5077C38.9245 52.5077 38.8325 52.5148 38.6592 52.5795C38.4862 52.6439 38.4084 52.7411 38.4084 52.7411C38.4084 52.7411 38.511 52.3065 38.9631 51.9039C39.416 51.5006 39.6346 51.4667 39.685 51.399C39.7356 51.3319 39.685 50.5606 39.6959 50.4983C39.7062 50.4366 39.7605 50.431 39.7979 50.4255C39.8351 50.4201 40.0633 50.4247 40.0633 50.4247L40.0633 50.4247Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M41.2177 53.0001C41.2177 53.0001 41.2889 52.8602 41.3347 52.8132C41.3802 52.7665 41.4904 52.6873 41.4904 52.6873C41.4904 52.6873 41.5076 52.6696 41.2602 52.5616C41.0128 52.4538 40.8856 52.4897 40.709 52.3641C40.5325 52.2384 40.3555 52.0225 40.3555 52.0225L40.1187 52.2344C40.1187 52.2344 40.2605 52.4359 40.3945 52.5653C40.5285 52.6945 40.8325 52.7378 40.9669 52.8132C41.1012 52.8889 41.2177 53.0001 41.2177 53.0001Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M40.5069 50.4195C40.5069 50.4195 40.7747 50.4035 40.8119 50.4451C40.8489 50.4866 40.8435 50.5327 40.8451 50.5465C40.8461 50.5594 40.859 51.198 40.8119 51.4079C40.7621 51.6272 40.6491 51.8461 40.5854 51.9111C40.5216 51.9758 40.119 52.3285 39.928 52.5151C39.7372 52.702 39.5431 52.9684 39.5431 52.9684C39.5431 52.9684 39.4723 52.8892 39.4122 52.8134C39.3524 52.738 39.2917 52.7129 39.306 52.6627C39.3201 52.6125 39.5218 52.3102 39.8435 52.0981C40.1648 51.8859 40.4337 51.6451 40.4936 51.3001C40.5542 50.9547 40.5069 50.4195 40.5069 50.4195L40.5069 50.4195Z\" fill=\"#D33131\" class=\"fill-red\" />\n    <path d=\"M46.9374 45.71C44.0672 47.6114 41.9673 45.6682 37.0682 45.71C34.3071 45.7336 32.5146 43.9731 31.5317 42.4092\" stroke=\"#1CB0F6\" stroke-width=\"0.677588\" stroke-linecap=\"round\" class=\"stroke-blue\" />\n    <ellipse rx=\"1.77956\" ry=\"1.14727\" transform=\"matrix(0.966181 0.257866 -0.256248 0.966611 35.1826 45.1382)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n    <ellipse rx=\"1.77929\" ry=\"1.37189\" transform=\"matrix(0.989085 0.147349 -0.14638 0.989228 38.4723 45.8712)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n    <ellipse rx=\"1.98036\" ry=\"1.52691\" transform=\"matrix(0.989085 0.147349 -0.14638 0.989228 41.931 45.8618)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n    <ellipse rx=\"1.60498\" ry=\"1.1489\" transform=\"matrix(0.772734 0.63473 -0.632173 0.774827 32.5771 43.6453)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n    <ellipse rx=\"1.60416\" ry=\"1.14949\" transform=\"matrix(-0.865961 0.500111 -0.497586 -0.867415 45.6142 46.335)\" fill=\"#1CB0F6\" class=\"fill-blue\" />\n    <ellipse rx=\"0.736236\" ry=\"0.52716\" transform=\"matrix(-0.797368 0.603494 -0.600908 -0.799318 47.2319 45.5361)\" fill=\"#D33131\" class=\"fill-red\" />\n    <ellipse rx=\"0.304368\" ry=\"0.327899\" transform=\"matrix(-0.797367 0.603495 -0.600907 -0.799319 47.9862 44.9939)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <ellipse rx=\"0.737317\" ry=\"0.526384\" transform=\"matrix(0.447364 0.894352 -0.89314 0.449779 31.4348 42.2648)\" fill=\"#D33131\" class=\"fill-red\" />\n    <ellipse rx=\"0.304816\" ry=\"0.327417\" transform=\"matrix(0.447364 0.894352 -0.89314 0.449779 31.0392 41.4228)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M37.9622 42.4178C37.689 42.844 36.9253 42.8396 36.2564 42.408C35.5875 41.9764 35.2668 41.2809 35.54 40.8547C35.8132 40.4284 36.5769 40.4328 37.2458 40.8644C37.9147 41.2961 38.2354 41.9915 37.9622 42.4178Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M35.0856 40.8644C35.2591 40.7476 35.4583 40.7059 35.6508 40.7265C35.8231 40.5761 36.0843 40.5157 36.3782 40.545C35.9715 40.5044 35.5777 40.5331 35.0856 40.8644Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M34.4207 32.5526C34.7206 32.8721 34.6414 33.4356 34.2439 33.8113C34.098 33.9491 33.9295 34.0425 33.7598 34.0897C33.691 34.1088 33.6221 34.1204 33.5544 34.1242C33.4755 34.1287 33.3983 34.1227 33.325 34.1061C33.1934 34.0763 33.0744 34.0123 32.9811 33.9129C32.6813 33.5934 32.7604 33.0298 33.158 32.6542C33.5555 32.2786 34.1209 32.2331 34.4207 32.5526Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M32.9737 34.3248C32.9762 34.3213 32.9786 34.3178 32.9811 34.3144C33.065 34.1988 33.1919 34.1265 33.325 34.1061C33.4017 34.0944 33.4805 34.0999 33.5544 34.1242C33.6205 34.1459 33.6826 34.1828 33.7359 34.2358C33.9032 34.4025 33.9287 34.6772 33.7844 34.8867C33.6232 35.1209 33.311 35.1849 33.0872 35.0297C32.8633 34.8746 32.8125 34.559 32.9737 34.3248Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.9001 39.5541C34.0345 39.2839 34.3827 39.1846 34.6777 39.3324C34.9727 39.4802 35.1028 39.819 34.9684 40.0893C34.8339 40.3595 34.4858 40.4587 34.1908 40.311C33.8958 40.1632 33.7656 39.8243 33.9001 39.5541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.7376 38.476C33.4666 38.3447 33.3717 37.9787 33.5258 37.6586C33.5531 37.6017 33.5865 37.5501 33.6244 37.5045C33.7999 37.293 34.0726 37.2087 34.2955 37.3167C34.5666 37.448 34.6614 37.814 34.5074 38.1342C34.5036 38.142 34.4998 38.1497 34.4958 38.1573C34.3366 38.4616 34.0021 38.6042 33.7376 38.476Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.2262 40.4346C33.4439 40.343 33.7075 40.4772 33.815 40.7343C33.9225 40.9914 33.8332 41.274 33.6155 41.3657C33.3978 41.4573 33.1342 41.3232 33.0267 41.0661C32.9192 40.809 33.0085 40.5263 33.2262 40.4346Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M32.2521 39.1253C32.4858 39.0919 32.707 39.2886 32.7462 39.5646C32.7854 39.8406 32.6277 40.0914 32.394 40.1248C32.1603 40.1582 31.9391 39.9616 31.8999 39.6856C31.8941 39.6445 31.8926 39.6039 31.8951 39.5646C31.9093 39.3397 32.0532 39.1537 32.2521 39.1253Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M32.5738 37.652C32.7536 37.6263 32.9251 37.7525 32.9923 37.9453C33.0034 37.9771 33.0117 38.0107 33.0166 38.0457C33.0267 38.1168 33.0222 38.1861 33.0057 38.2494C32.9649 38.4063 32.8502 38.5265 32.701 38.5478C32.4915 38.5778 32.2932 38.4015 32.2581 38.1541C32.223 37.9067 32.3643 37.6819 32.5738 37.652Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M30.9528 37.2673C30.996 37.0594 31.2287 36.9324 31.4725 36.9834C31.7162 37.0345 31.8788 37.2443 31.8356 37.4521C31.8051 37.5986 31.6806 37.705 31.5243 37.7371C31.4589 37.7506 31.3879 37.7511 31.3159 37.736C31.0721 37.6849 30.9095 37.4751 30.9528 37.2673Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.7598 34.0897C33.691 34.1088 33.6221 34.1204 33.5544 34.1242C33.6205 34.1459 33.6826 34.1828 33.7359 34.2358C33.6745 34.1747 33.674 34.1136 33.7598 34.0897Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.325 34.1061C33.1934 34.0763 33.0744 34.0123 32.9811 33.9129C32.9729 34.0146 32.9696 34.2337 32.9811 34.3144C33.065 34.1988 33.1919 34.1265 33.325 34.1061Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M35.1299 35.0793C35.0692 34.7816 35.2605 34.4911 35.5571 34.4304C35.7453 34.3919 35.9307 34.4551 36.0566 34.5826C36.1291 34.656 36.1819 34.7506 36.204 34.8594C36.2647 35.157 36.0735 35.4475 35.7769 35.5083C35.5693 35.5507 35.3652 35.4695 35.2405 35.3149C35.187 35.2485 35.1482 35.1687 35.1299 35.0793Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M35.4942 36.1062C35.477 36.0219 35.4826 35.9381 35.5067 35.8615C35.5109 35.8482 35.5156 35.8351 35.5209 35.8223C35.5806 35.677 35.7089 35.5632 35.8739 35.5294C36.1375 35.4755 36.395 35.6462 36.449 35.9107C36.4768 36.0473 36.445 36.1822 36.3714 36.2882C36.3025 36.3875 36.1968 36.4614 36.0693 36.4875C35.8056 36.5415 35.5482 36.3708 35.4942 36.1062Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.7844 34.8867C33.6232 35.1209 33.311 35.1849 33.0872 35.0297C33.5957 35.3822 34.9942 35.0094 35.2405 35.3149C35.187 35.2485 35.1482 35.1687 35.1299 35.0793C35.0692 34.7816 35.2605 34.4911 35.5571 34.4304C35.7453 34.3919 35.9307 34.4551 36.0566 34.5826C35.7141 34.2358 35.2405 34.1242 34.875 34.2358C34.502 34.3497 33.9128 34.412 33.7359 34.2358C33.9032 34.4025 33.9287 34.6772 33.7844 34.8867Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M36.204 34.8594C36.2647 35.157 36.0735 35.4475 35.7769 35.5083C35.5693 35.5507 35.3652 35.4695 35.2405 35.3149C35.4104 35.5255 35.543 35.703 35.5209 35.8223C35.5806 35.677 35.7089 35.5632 35.8739 35.5294C36.1375 35.4755 36.395 35.6462 36.449 35.9107C36.4768 36.0473 36.445 36.1822 36.3714 36.2882C36.7354 35.764 36.575 35.1074 36.0566 34.5826C36.1291 34.656 36.1819 34.7506 36.204 34.8594Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.6244 37.5045C33.7999 37.293 34.0726 37.2087 34.2955 37.3167C34.5666 37.448 34.6614 37.814 34.5074 38.1342C34.6614 37.814 35.8739 37.0048 36.3714 36.2882C36.3025 36.3875 36.1968 36.4614 36.0693 36.4875C35.8056 36.5415 35.5482 36.3708 35.4942 36.1062C35.477 36.0219 35.4826 35.9381 35.5067 35.8615C35.391 36.2292 34.0647 36.9405 33.6244 37.5045Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.9001 39.5541C34.0345 39.2839 34.3827 39.1846 34.6777 39.3324C34.2422 39.1143 34.2934 38.5685 34.4958 38.1573C34.3366 38.4616 34.0021 38.6042 33.7376 38.476C33.4666 38.3447 33.3717 37.9787 33.5258 37.6586C33.1848 38.367 33.352 39.8908 34.1908 40.311C33.8958 40.1632 33.7656 39.8243 33.9001 39.5541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M35.7297 39.9995C35.7055 39.6959 35.9306 39.4417 36.2324 39.4319C36.3154 39.4292 36.3956 39.4452 36.4687 39.4762C36.6614 39.558 36.8052 39.7437 36.8227 39.9639C36.8469 40.2676 36.6218 40.5217 36.3199 40.5316C36.2233 40.5347 36.1305 40.5124 36.0482 40.4707C35.8735 40.3822 35.7461 40.206 35.7297 39.9995Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M35.8517 41.2852C35.8402 41.1405 35.8796 41.006 35.9548 40.8986C35.9631 40.8867 35.9719 40.8752 35.981 40.864C36.0824 40.7404 36.2347 40.6602 36.4103 40.6544C36.5026 40.6514 36.5916 40.6693 36.6728 40.7037C36.887 40.7946 37.0467 41.001 37.0662 41.2456C37.0827 41.4525 36.9949 41.6388 36.8473 41.7544C36.7542 41.8273 36.6372 41.8721 36.5076 41.8763C36.1722 41.8873 35.8786 41.6226 35.8517 41.2852Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.7141 41.5693C33.8879 41.5407 34.0683 41.5841 34.2183 41.677C34.3633 41.7667 34.4799 41.9028 34.5347 42.0649C34.6462 42.3948 34.4597 42.7078 34.1181 42.764C34.0183 42.7804 33.9163 42.7731 33.8191 42.7463C33.7477 42.7266 33.6789 42.6964 33.6155 42.6573C33.4698 42.5676 33.3525 42.4312 33.2975 42.2684C33.186 41.9386 33.3725 41.6256 33.7141 41.5693Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M36.5076 41.8763C36.1722 41.8873 35.8786 41.6226 35.8517 41.2852C35.8402 41.1405 35.8796 41.006 35.9548 40.8986C35.6277 41.3657 34.5493 41.8819 34.2183 41.677C34.3633 41.7667 34.4799 41.9028 34.5347 42.0649C34.6462 42.3948 34.4597 42.7078 34.1181 42.764C34.0183 42.7804 33.9163 42.7731 33.8191 42.7463C34.7537 43.0193 36.5191 42.0113 36.8473 41.7544C36.7542 41.8273 36.6372 41.8721 36.5076 41.8763Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M36.8227 39.9639C36.8469 40.2676 36.6218 40.5217 36.3199 40.5316C36.2233 40.5347 36.1305 40.5124 36.0482 40.4707C36.1561 40.5254 36.0612 40.7484 35.981 40.864C36.0824 40.7404 36.2347 40.6602 36.4103 40.6544C36.5026 40.6514 36.5916 40.6693 36.6728 40.7037C36.887 40.7946 37.0467 41.001 37.0662 41.2456C37.0231 40.7037 37.1479 39.7643 36.4687 39.4762C36.6614 39.558 36.8052 39.7437 36.8227 39.9639Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M34.6777 39.3324C34.9727 39.4802 35.1028 39.819 34.9684 40.0893C34.8339 40.3595 34.4858 40.4587 34.1908 40.311C34.8437 40.6381 35.8517 40.3711 36.0482 40.4707C35.8735 40.3822 35.7461 40.206 35.7297 39.9995C35.7055 39.6959 35.9306 39.4417 36.2324 39.4319C35.7297 39.4483 35.3624 39.6754 34.6777 39.3324Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M32.2581 38.1541C32.223 37.9067 32.3643 37.6819 32.5738 37.652C32.7536 37.6263 32.9251 37.7525 32.9923 37.9453C32.7859 37.3533 31.7317 37.0377 31.4725 36.9834C31.7162 37.0345 31.8788 37.2443 31.8356 37.4521C31.8051 37.5986 31.6806 37.705 31.5243 37.7371C31.7421 37.6923 32.2073 37.7962 32.2581 38.1541Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M32.2521 39.1253C32.4858 39.0919 32.707 39.2886 32.7462 39.5646C32.6932 39.1909 32.9419 38.6175 33.0057 38.2494C32.9649 38.4063 32.8502 38.5265 32.701 38.5478C32.4915 38.5778 32.2932 38.4015 32.2581 38.1541C32.3093 38.5147 31.9423 38.8203 31.8951 39.5646C31.9093 39.3397 32.0532 39.1537 32.2521 39.1253Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.2262 40.4346C33.4439 40.343 33.7075 40.4772 33.815 40.7343C33.6155 40.257 32.7881 39.8595 32.7462 39.5646C32.7854 39.8406 32.6277 40.0914 32.394 40.1248C32.1603 40.1582 31.9391 39.9616 31.8999 39.6856C31.9853 40.2874 32.8545 40.6541 33.0267 41.0661C32.9192 40.809 33.0085 40.5263 33.2262 40.4346Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <path d=\"M33.815 40.7343C33.9225 40.9914 33.8332 41.274 33.6155 41.3657C33.3978 41.4573 33.1342 41.3232 33.0267 41.0661C33.1342 41.3232 33.1917 41.9555 33.2975 42.2684C33.186 41.9386 33.3725 41.6256 33.7141 41.5693C33.8879 41.5407 34.0683 41.5841 34.2183 41.677C33.9216 41.4933 33.9225 40.9914 33.815 40.7343Z\" fill=\"#7AC70C\" class=\"fill-green\" />\n    <ellipse rx=\"0.706957\" ry=\"0.535517\" transform=\"matrix(0.963049 0.269326 -0.267647 0.963517 31.44 37.347)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <ellipse rx=\"0.884664\" ry=\"0.916995\" transform=\"matrix(0.891011 -0.453982 0.451556 0.892243 35.59 41.6295)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <ellipse rx=\"1.3705\" ry=\"0.886354\" transform=\"matrix(0.999971 0.00760781 -0.00755669 0.999972 42.2893 45.0896)\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M46.8417 32.876C47.7751 33.8516 48.4618 34.9112 48.8496 35.8866C49.0023 36.2706 49.1087 36.6416 49.1655 36.9892C49.2977 37.7981 49.1619 38.481 48.7179 38.9086C46.7324 40.821 43.2409 37.5167 41.8815 35.7054C41.8171 35.6196 41.7575 35.5371 41.703 35.4587C41.6382 35.3654 41.5757 35.272 41.5155 35.1787C40.9897 34.3635 40.64 33.5519 40.4934 32.8302C40.3147 31.9505 40.4377 31.2043 40.9111 30.7483C41.5194 30.1625 42.581 30.1761 43.7696 30.6722C44.7686 31.0891 45.8572 31.8469 46.8417 32.876Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M39.3488 30.3159C39.8483 30.254 40.2931 30.5287 40.3424 30.9294C40.416 31.527 39.7021 31.8472 39.2005 31.7597C38.8468 31.698 38.5719 31.4635 38.5338 31.1535C38.4991 30.8717 38.6692 30.6027 38.9469 30.4463C39.0641 30.3802 39.2005 30.3342 39.3488 30.3159Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M39.3488 30.3159C39.8483 30.254 40.2931 30.5287 40.3424 30.9294C40.416 31.527 39.7021 31.8472 39.2005 31.7597C39.7031 31.8474 40.314 31.9471 40.4934 32.8302C40.3147 31.9505 40.4377 31.2043 40.9111 30.7483C41.5194 30.1625 42.581 30.1761 43.7696 30.6722C42.5809 30.176 40.4497 29.5661 38.9469 30.4463C39.0641 30.3802 39.2005 30.3342 39.3488 30.3159Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M49.1655 36.9892C49.2977 37.7981 49.1619 38.481 48.7179 38.9086C46.7324 40.821 43.2409 37.5167 41.8815 35.7054C42.2351 36.179 42.7986 36.8659 43.456 37.6419C43.459 37.6454 43.462 37.6489 43.465 37.6525C45.6456 40.2262 48.8496 43.7719 48.8496 43.7719C49.6259 41.1359 49.5008 38.5893 49.1655 36.9892Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M42.3198 36.9429C42.5709 37.5029 42.6769 38.0861 42.6534 38.6395C42.6061 39.7564 42.0319 40.7522 41.0599 41.191C40.4274 41.4765 39.7308 41.4792 39.0832 41.2519C38.4953 41.0456 37.9478 40.6499 37.5253 40.1043C37.3434 39.8694 37.1846 39.6067 37.0558 39.3194C36.6456 38.4047 36.6227 37.4279 36.9186 36.6201C36.9282 36.5939 36.9381 36.5678 36.9484 36.5419C37.2063 35.8928 37.6745 35.3608 38.3157 35.0713C39.2657 34.6425 40.3604 34.8517 41.2165 35.5198C41.235 35.5343 41.2535 35.549 41.2718 35.5639C41.7018 35.9138 42.068 36.3813 42.3198 36.9429Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M36.6888 32.111C37.0728 31.9596 37.4574 31.8921 37.7993 31.9008C38.2511 31.8844 38.7886 32.1262 38.9363 32.5035C39.1759 33.1152 38.2527 33.9023 37.251 34.2973C36.2493 34.6922 35.5484 34.5454 35.3088 33.9337C35.0693 33.322 35.6871 32.5059 36.6888 32.111Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M38.9363 32.5035C39.1759 33.1152 38.2527 33.9023 37.251 34.2973C38.2173 33.9163 37.2453 35.7893 36.9484 36.5419C37.2063 35.8928 37.6745 35.3608 38.3157 35.0713C39.2657 34.6425 40.3604 34.8517 41.2165 35.5198C40.358 34.8474 40.8454 33.4415 39.9925 32.6469C39.3101 32.0111 38.246 31.8846 37.7993 31.9008C38.2511 31.8844 38.7886 32.1262 38.9363 32.5035Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M43.3073 40.0075C43.3325 40.1427 43.3482 40.2771 43.3549 40.41C43.4808 42.915 40.4079 43.9582 39.2412 41.6325C39.2163 41.5829 39.1927 41.5323 39.1705 41.4806C39.1385 41.4064 39.1093 41.3301 39.0832 41.2519C39.0396 41.1217 39.0043 40.9863 38.9782 40.8464C38.8372 40.0892 38.9946 39.3547 39.3582 38.8034C39.37 38.7855 39.382 38.7678 39.3943 38.7502C39.7015 38.3108 40.1437 37.9964 40.671 37.8942C41.4083 37.7514 42.1399 38.0565 42.6534 38.6395C42.684 38.6743 42.7138 38.71 42.7428 38.7466C42.8286 38.8551 42.9073 38.9719 42.9776 39.0961C43.1314 39.3678 43.2454 39.6748 43.3073 40.0075Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M47.7904 43.7719L43.3549 40.41C43.4808 42.915 40.4079 43.9582 39.2412 41.6325C40.4065 43.9553 42.2344 44.7011 42.673 44.5055C43.1116 44.3098 43.0994 43.6497 43.0385 43.344L43.9523 44.4443C46.2917 44.9333 47.4858 44.1998 47.7904 43.7719Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M39.8706 42.366C39.8706 42.9062 39.3251 43.344 38.6522 43.344C37.9793 43.344 37.4338 42.9062 37.4338 42.366C37.4338 42.0246 37.6517 41.724 37.9821 41.5491C38.1743 41.4473 38.4046 41.388 38.6522 41.388C38.8375 41.388 39.0132 41.4212 39.1705 41.4806C39.5842 41.637 39.8706 41.9746 39.8706 42.366Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M39.1705 41.4806C39.1385 41.4064 39.1093 41.3301 39.0832 41.2519C38.4953 41.0456 37.9478 40.6499 37.5253 40.1043C38.2827 41.0824 38.3476 41.3555 37.9821 41.5491C38.1743 41.4473 38.4046 41.388 38.6522 41.388C38.8375 41.388 39.0132 41.4212 39.1705 41.4806Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M41.8815 35.7054C41.8171 35.6196 41.7575 35.5371 41.703 35.4587C41.6382 35.3654 41.5757 35.272 41.5155 35.1787C41.8144 35.6421 41.8187 36.0088 41.2718 35.5639C41.7018 35.9138 42.068 36.3813 42.3198 36.9429C42.5709 37.5029 42.6769 38.0861 42.6534 38.6395C42.684 38.6743 42.7138 38.71 42.7428 38.7466C42.8286 38.8551 42.9073 38.9719 42.9776 39.0961C42.5531 38.3464 42.8149 36.8933 43.456 37.6419C42.7986 36.8659 42.2351 36.179 41.8815 35.7054Z\" fill=\"#8F4620\" class=\"fill-brown\" />\n    <path d=\"M36.0838 32.9526C36.269 33.0798 36.3177 33.3438 36.1812 33.5297C36.0545 33.7155 35.7913 33.7644 35.6061 33.6275\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M34.62 34.294C34.3119 34.5768 34.3003 35.0672 34.5941 35.3895C34.8301 35.6485 35.1915 35.7201 35.4843 35.5916C35.3015 35.5242 34.9604 35.2995 35.0578 34.9391C35.1553 34.5788 35.6383 34.5063 35.8502 34.5135C35.821 34.4627 35.751 34.411 35.7098 34.3657C35.416 34.0434 34.9281 34.0113 34.62 34.294Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M35.8577 34.585C35.7997 34.3397 36.0819 34.0623 36.4882 33.9656C36.8944 33.8688 37.2707 33.9893 37.3288 34.2347C37.3583 34.3595 37.2997 34.4927 37.1814 34.6062C37.0673 34.7155 36.8978 34.8066 36.6983 34.8541C36.6458 34.8666 36.5939 34.8754 36.543 34.8809C36.2002 34.9176 35.9083 34.7986 35.8577 34.585Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n    <path d=\"M34.62 34.294C34.9281 34.0113 35.416 34.0434 35.7098 34.3657C35.751 34.411 35.821 34.4627 35.8502 34.5135C35.8551 34.288 36.121 34.053 36.4882 33.9656C36.0819 34.0623 35.7952 33.9062 35.5452 33.8084C35.2952 33.7106 34.9281 34.0113 34.62 34.294Z\" fill=\"#FFCE00\" class=\"fill-yellow\" />\n  </g>\n</svg>"
		}
	}
};
const unitedStatesOfAmerica = {
	id: "49:309",
	categories: [
		"north america"
	],
	terms: [
		"United States of America"
	],
	variants: {
		rectangle: {
			id: "49:652",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:652",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11b7/5fa6/540259241883d9fea7349b381e9bfe09",
			svg: "<svg viewBox=\"0 0 120 80\" fill=\"none\">\n  <path d=\"M120 0H0V80H120V0Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M120 0H0V8H120V0Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M120 36H0V44H120V36Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M120 18H0V26H120V18Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M120 54H0V62H120V54Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M120 72H0V80H120V72Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M62 0H0V44H62V0Z\" fill=\"#002664\" class=\"fill-blue\" />\n  <path d=\"M10 3L11.1226 6.45492H14.7553L11.8164 8.59017L12.9389 12.0451L10 9.90983L7.06107 12.0451L8.18364 8.59017L5.24472 6.45492H8.87743L10 3Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M10 17L11.1226 20.4549H14.7553L11.8164 22.5902L12.9389 26.0451L10 23.9098L7.06107 26.0451L8.18364 22.5902L5.24472 20.4549H8.87743L10 17Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M10 31L11.1226 34.4549H14.7553L11.8164 36.5902L12.9389 40.0451L10 37.9098L7.06107 40.0451L8.18364 36.5902L5.24472 34.4549H8.87743L10 31Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M24 3L25.1226 6.45492H28.7553L25.8164 8.59017L26.9389 12.0451L24 9.90983L21.0611 12.0451L22.1836 8.59017L19.2447 6.45492H22.8774L24 3Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M24 17L25.1226 20.4549H28.7553L25.8164 22.5902L26.9389 26.0451L24 23.9098L21.0611 26.0451L22.1836 22.5902L19.2447 20.4549H22.8774L24 17Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M24 31L25.1226 34.4549H28.7553L25.8164 36.5902L26.9389 40.0451L24 37.9098L21.0611 40.0451L22.1836 36.5902L19.2447 34.4549H22.8774L24 31Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M38 3L39.1226 6.45492H42.7553L39.8164 8.59017L40.9389 12.0451L38 9.90983L35.0611 12.0451L36.1836 8.59017L33.2447 6.45492H36.8774L38 3Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M38 17L39.1226 20.4549H42.7553L39.8164 22.5902L40.9389 26.0451L38 23.9098L35.0611 26.0451L36.1836 22.5902L33.2447 20.4549H36.8774L38 17Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M38 31L39.1226 34.4549H42.7553L39.8164 36.5902L40.9389 40.0451L38 37.9098L35.0611 40.0451L36.1836 36.5902L33.2447 34.4549H36.8774L38 31Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M52 3L53.1226 6.45492H56.7553L53.8164 8.59017L54.9389 12.0451L52 9.90983L49.0611 12.0451L50.1836 8.59017L47.2447 6.45492H50.8774L52 3Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M52 17L53.1226 20.4549H56.7553L53.8164 22.5902L54.9389 26.0451L52 23.9098L49.0611 26.0451L50.1836 22.5902L47.2447 20.4549H50.8774L52 17Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M52 31L53.1226 34.4549H56.7553L53.8164 36.5902L54.9389 40.0451L52 37.9098L49.0611 40.0451L50.1836 36.5902L47.2447 34.4549H50.8774L52 31Z\" fill=\"white\" class=\"fill-white\" />\n</svg>"
		},
		square: {
			id: "49:548",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:548",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7e4/9e74/2d083aea76ec6a68aaecbeb89f4658c2",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M80 0H0V80H80V0Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M80 0H0V8H80V0Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M80 36H0V44H80V36Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M80 18H0V26H80V18Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M80 54H0V62H80V54Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M80 72H0V80H80V72Z\" fill=\"#BB133E\" class=\"fill-red\" />\n  <path d=\"M40 0H0V44H40V0Z\" fill=\"#002664\" class=\"fill-blue\" />\n  <path d=\"M8 5L8.89806 7.76393H11.8042L9.45308 9.47214L10.3511 12.2361L8 10.5279L5.64886 12.2361L6.54692 9.47214L4.19577 7.76393H7.10194L8 5Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M8 18L8.89806 20.7639H11.8042L9.45308 22.4721L10.3511 25.2361L8 23.5279L5.64886 25.2361L6.54692 22.4721L4.19577 20.7639H7.10194L8 18Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M8 31L8.89806 33.7639H11.8042L9.45308 35.4721L10.3511 38.2361L8 36.5279L5.64886 38.2361L6.54692 35.4721L4.19577 33.7639H7.10194L8 31Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M20 5L20.8981 7.76393H23.8042L21.4531 9.47214L22.3511 12.2361L20 10.5279L17.6489 12.2361L18.5469 9.47214L16.1958 7.76393H19.1019L20 5Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M20 18L20.8981 20.7639H23.8042L21.4531 22.4721L22.3511 25.2361L20 23.5279L17.6489 25.2361L18.5469 22.4721L16.1958 20.7639H19.1019L20 18Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M20 31L20.8981 33.7639H23.8042L21.4531 35.4721L22.3511 38.2361L20 36.5279L17.6489 38.2361L18.5469 35.4721L16.1958 33.7639H19.1019L20 31Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M32 5L32.8981 7.76393H35.8042L33.4531 9.47214L34.3511 12.2361L32 10.5279L29.6489 12.2361L30.5469 9.47214L28.1958 7.76393H31.1019L32 5Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M32 18L32.8981 20.7639H35.8042L33.4531 22.4721L34.3511 25.2361L32 23.5279L29.6489 25.2361L30.5469 22.4721L28.1958 20.7639H31.1019L32 18Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M32 31L32.8981 33.7639H35.8042L33.4531 35.4721L34.3511 38.2361L32 36.5279L29.6489 38.2361L30.5469 35.4721L28.1958 33.7639H31.1019L32 31Z\" fill=\"white\" class=\"fill-white\" />\n</svg>"
		},
		circle: {
			id: "49:631",
			source: "https://www.figma.com/file/VyB7exNgbMB7EmOwAFF9jZ/icons.fyi?node-id=49:631",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb44/1b23/ef1ade0b644a552dee2aa199366b46a9",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"80\" height=\"80\">\n    <rect width=\"80\" height=\"80\" rx=\"40\" fill=\"white\" class=\"fill-white\" />\n  </mask>\n  <g mask=\"url(#mask0)\">\n    <path d=\"M80 0H0V80H80V0Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M80 0H0V8H80V0Z\" fill=\"#BB133E\" class=\"fill-red\" />\n    <path d=\"M80 36H0V44H80V36Z\" fill=\"#BB133E\" class=\"fill-red\" />\n    <path d=\"M80 18H0V26H80V18Z\" fill=\"#BB133E\" class=\"fill-red\" />\n    <path d=\"M80 54H0V62H80V54Z\" fill=\"#BB133E\" class=\"fill-red\" />\n    <path d=\"M80 72H0V80H80V72Z\" fill=\"#BB133E\" class=\"fill-red\" />\n    <path d=\"M40 0H0V44H40V0Z\" fill=\"#002664\" class=\"fill-blue\" />\n    <path d=\"M8 5L8.89806 7.76393H11.8042L9.45308 9.47214L10.3511 12.2361L8 10.5279L5.64886 12.2361L6.54692 9.47214L4.19577 7.76393H7.10194L8 5Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M8 18L8.89806 20.7639H11.8042L9.45308 22.4721L10.3511 25.2361L8 23.5279L5.64886 25.2361L6.54692 22.4721L4.19577 20.7639H7.10194L8 18Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M8 31L8.89806 33.7639H11.8042L9.45308 35.4721L10.3511 38.2361L8 36.5279L5.64886 38.2361L6.54692 35.4721L4.19577 33.7639H7.10194L8 31Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M20 5L20.8981 7.76393H23.8042L21.4531 9.47214L22.3511 12.2361L20 10.5279L17.6489 12.2361L18.5469 9.47214L16.1958 7.76393H19.1019L20 5Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M20 18L20.8981 20.7639H23.8042L21.4531 22.4721L22.3511 25.2361L20 23.5279L17.6489 25.2361L18.5469 22.4721L16.1958 20.7639H19.1019L20 18Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M20 31L20.8981 33.7639H23.8042L21.4531 35.4721L22.3511 38.2361L20 36.5279L17.6489 38.2361L18.5469 35.4721L16.1958 33.7639H19.1019L20 31Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M32 5L32.8981 7.76393H35.8042L33.4531 9.47214L34.3511 12.2361L32 10.5279L29.6489 12.2361L30.5469 9.47214L28.1958 7.76393H31.1019L32 5Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M32 18L32.8981 20.7639H35.8042L33.4531 22.4721L34.3511 25.2361L32 23.5279L29.6489 25.2361L30.5469 22.4721L28.1958 20.7639H31.1019L32 18Z\" fill=\"white\" class=\"fill-white\" />\n    <path d=\"M32 31L32.8981 33.7639H35.8042L33.4531 35.4721L34.3511 38.2361L32 36.5279L29.6489 38.2361L30.5469 35.4721L28.1958 33.7639H31.1019L32 31Z\" fill=\"white\" class=\"fill-white\" />\n  </g>\n</svg>"
		}
	}
};
const components = {
	canada: canada,
	mexico: mexico,
	unitedStatesOfAmerica: unitedStatesOfAmerica
};

const components$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	canada: canada,
	mexico: mexico,
	unitedStatesOfAmerica: unitedStatesOfAmerica,
	'default': components
});

const variants = [
	"rectangle",
	"square",
	"circle"
];

const iconCss = ":host{display:inline-block;width:1em;height:1em;contain:strict;box-sizing:content-box !important}.icon-inner,svg{display:block;overflow:visible;height:100%;width:100%}:host(.flip-h),:host(.flip-x){transform:scaleX(-1)}:host(.flip-v),:host(.flip-y){transform:scaleY(-1)}:host(.flip-a),:host(.flip-xy),:host(.flip-yx),:host(.flip-hv),:host(.flip-vh){transform:scale(-1)}:host(.n) .icon-inner,:host(.r0) .icon-inner{transform:rotate(0)}:host(.ne) .icon-inner,:host(.r45) .icon-inner{transform:rotate(45deg)}:host(.e) .icon-inner,:host(.r90) .icon-inner{transform:rotate(90deg)}:host(.se) .icon-inner,:host(.r135) .icon-inner{transform:rotate(135deg)}:host(.s) .icon-inner,:host(.r180) .icon-inner{transform:rotate(180deg)}:host(.sw) .icon-inner,:host(.r-135) .icon-inner{transform:rotate(-135deg)}:host(.w) .icon-inner,:host(.r-90) .icon-inner{transform:rotate(-90deg)}:host(.nw) .icon-inner,:host(.r-45) .icon-inner{transform:rotate(-45deg)}:host(.lcr) svg path{stroke-linecap:round}:host(.lcs) svg path{stroke-linecap:square}";

const Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.components = components$1;
    /**
     * The size of the icon in CSS units
     */
    this.size = '2rem';
    /**
     * The variant name of the icon set to apply
     */
    this.variant = variants[0];
    /**
     * Apply a stroke width to the line of the icon
     * Available options are 1-6
     * Applicable for variant `path` icons only
     */
    this.strokeWidth = null;
  }
  async connectedCallback() {
    this.loadIcon();
  }
  async loadIcon() {
    {
      if (!this.name) {
        throw new Error('name: required');
      }
      if (this.variant === 'path' && !this.strokeWidth) {
        this.strokeWidth = 3;
      }
      if (this.variant === 'outline' && !this.strokeWidth) {
        this.strokeWidth = 1;
      }
      const component = this.components[lodash_camelcase(this.name)];
      const icon = component.variants && component.variants[this.variant];
      const svg = icon && icon.svg;
      this.svgContent = svg;
    }
    if (!this.ariaLabel) {
      const label = getName(this.name);
      if (label) {
        this.ariaLabel = label.replace(/\-/g, ' ');
      }
    }
  }
  render() {
    return (h(Host, { role: "img", class: Object.assign(Object.assign({}, (this.flip && {
        [`flip-${this.flip}`]: true
      })), (this.rotate && {
        [this.rotate]: true,
      })), style: Object.assign({ fontSize: this.size }, (['path', 'stroke', 'outline'].includes(this.variant) && {
        strokeWidth: `${this.strokeWidth}`
      })) }, (( this.svgContent)
      ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
      : h("div", { class: "icon-inner" }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "variant": ["loadIcon"],
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "size": ["loadIcon"],
    "flip": ["loadIcon"],
    "rotate": ["loadIcon"],
    "strokeWidth": ["loadIcon"]
  }; }
};
Icon.style = iconCss;

export { Icon as flag_icon };
