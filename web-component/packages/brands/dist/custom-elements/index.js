import { attachShadow, Build, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

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

const icons = {
	id: "1:12",
	categories: [
		"design"
	],
	terms: [
		"icons",
		"icons.fyi",
		"fyicons"
	],
	variants: {
		color: {
			id: "88:65",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:65",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7456/00eb/7d1be3c7b03c3fffe2e1d106ac261eb2",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <circle cx=\"40\" cy=\"18\" r=\"10\" fill=\"#F24E1E\" class=\"fill-orange\" />\n  <rect x=\"30\" y=\"33\" width=\"20\" height=\"20\" fill=\"#A259FF\" class=\"fill-purple\" />\n  <path d=\"M40 72.0098L50 53.0098H30L40 72.0098Z\" fill=\"#0ACF83\" class=\"fill-green\" />\n</svg>"
		},
		bold: {
			id: "88:61",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:61",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf9/5a6b/214fa6563aaf1dfff92fd2fc5262d481",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <circle cx=\"40\" cy=\"18\" r=\"10\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <rect x=\"30\" y=\"33\" width=\"20\" height=\"20\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M40 72.0098L50 53.0098H30L40 72.0098Z\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		},
		path: {
			id: "88:52",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:52",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12f8/fbe8/6eaf57eb02aa82ba8caf19f7dd5f0810",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M50 18C50 23.5228 45.5228 28 40 28C34.4772 28 30 23.5228 30 18C30 12.4772 34.4772 8 40 8C45.5228 8 50 12.4772 50 18Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M30 33H50V53H30V33Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M40 72.0098L50 53.0098H30L40 72.0098Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const figma = {
	id: "1:31",
	categories: [
		"design"
	],
	terms: [
		"figma"
	],
	variants: {
		color: {
			id: "88:82",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:82",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8634/c705/0c97898ad86d6c2749f204e944f87d19",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.5 71.4995C35.296 71.4995 40 66.7955 40 60.9995V50.4995H29.5C23.704 50.4995 19 55.2035 19 60.9995C19 66.7955 23.704 71.4995 29.5 71.4995Z\" fill=\"#0ACF83\" class=\"fill-green\" />\n  <path d=\"M19 40.0005C19 34.2045 23.704 29.5005 29.5 29.5005H40V50.5005H29.5C23.704 50.5005 19 45.7965 19 40.0005Z\" fill=\"#A259FF\" class=\"fill-purple\" />\n  <path d=\"M19.0005 19.0005C19.0005 13.2045 23.7045 8.50049 29.5005 8.50049H40.0005V29.5005H29.5005C23.7045 29.5005 19.0005 24.7965 19.0005 19.0005Z\" fill=\"#F24E1E\" class=\"fill-orange\" />\n  <path d=\"M40.0005 8.50049H50.5005C56.2965 8.50049 61.0005 13.2045 61.0005 19.0005C61.0005 24.7965 56.2965 29.5005 50.5005 29.5005H40.0005V8.50049Z\" fill=\"#FF7262\" class=\"fill-red\" />\n  <path d=\"M61.0005 40.0005C61.0005 45.7965 56.2965 50.5005 50.5005 50.5005C44.7045 50.5005 40.0005 45.7965 40.0005 40.0005C40.0005 34.2045 44.7045 29.5005 50.5005 29.5005C56.2965 29.5005 61.0005 34.2045 61.0005 40.0005Z\" fill=\"#1ABCFE\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "88:78",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:78",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/233b/1c8c/cc4cf477a1f56183c69172f27b195e91",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.5 71.4995C35.296 71.4995 40 66.7955 40 60.9995V50.4995H29.5C23.704 50.4995 19 55.2035 19 60.9995C19 66.7955 23.704 71.4995 29.5 71.4995Z\" fill=\"currentColor\" />\n  <path d=\"M19 40.0005C19 34.2045 23.704 29.5005 29.5 29.5005H40V50.5005H29.5C23.704 50.5005 19 45.7965 19 40.0005Z\" fill=\"currentColor\" />\n  <path d=\"M19.0005 19.0005C19.0005 13.2045 23.7045 8.50049 29.5005 8.50049H40.0005V29.5005H29.5005C23.7045 29.5005 19.0005 24.7965 19.0005 19.0005Z\" fill=\"currentColor\" />\n  <path d=\"M40.0005 8.50049H50.5005C56.2965 8.50049 61.0005 13.2045 61.0005 19.0005C61.0005 24.7965 56.2965 29.5005 50.5005 29.5005H40.0005V8.50049Z\" fill=\"currentColor\" />\n  <path d=\"M61.0005 40.0005C61.0005 45.7965 56.2965 50.5005 50.5005 50.5005C44.7045 50.5005 40.0005 45.7965 40.0005 40.0005C40.0005 34.2045 44.7045 29.5005 50.5005 29.5005C56.2965 29.5005 61.0005 34.2045 61.0005 40.0005Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:67",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:67",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03b8/3e1e/f7bf09bc63af9c321e3298d3db03ca00",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.5 71.4995C35.296 71.4995 40 66.7955 40 60.9995V50.4995H29.5C23.704 50.4995 19 55.2035 19 60.9995C19 66.7955 23.704 71.4995 29.5 71.4995Z\" stroke=\"currentColor\" />\n  <path d=\"M19 40.0005C19 34.2045 23.704 29.5005 29.5 29.5005H40V50.5005H29.5C23.704 50.5005 19 45.7965 19 40.0005Z\" stroke=\"currentColor\" />\n  <path d=\"M19.0005 19.0005C19.0005 13.2045 23.7045 8.50049 29.5005 8.50049H40.0005V29.5005H29.5005C23.7045 29.5005 19.0005 24.7965 19.0005 19.0005Z\" stroke=\"currentColor\" />\n  <path d=\"M40.0005 8.50049H50.5005C56.2965 8.50049 61.0005 13.2045 61.0005 19.0005C61.0005 24.7965 56.2965 29.5005 50.5005 29.5005H40.0005V8.50049Z\" stroke=\"currentColor\" />\n  <path d=\"M61.0005 40.0005C61.0005 45.7965 56.2965 50.5005 50.5005 50.5005C44.7045 50.5005 40.0005 45.7965 40.0005 40.0005C40.0005 34.2045 44.7045 29.5005 50.5005 29.5005C56.2965 29.5005 61.0005 34.2045 61.0005 40.0005Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const sketch = {
	id: "88:1326",
	categories: [
		"design"
	],
	terms: [
		"sketch"
	],
	variants: {
		color: {
			id: "88:1344",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1344",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/019d/f250/7752b79675050bf1e44717addfce0299",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M21.9355 12.9894L39.9355 11.0864L57.9355 12.9894L71.871 31.6966L39.9355 68.8851L8 31.6966L21.9355 12.9894Z\" fill=\"#FDB300\" class=\"fill-orange\" />\n  <path d=\"M20.9355 31.6968L39.9355 68.8853L8 31.6968H20.9355Z\" fill=\"#EA6C00\" class=\"fill-orange\" />\n  <path d=\"M58.9354 31.6968L39.9353 68.8853L71.8708 31.6968H58.9354Z\" fill=\"#EA6C00\" class=\"fill-orange\" />\n  <path d=\"M20.9355 31.6968H58.9356L39.9356 68.8853L20.9355 31.6968Z\" fill=\"#FDAD00\" class=\"fill-orange\" />\n  <path d=\"M39.9356 11.0864L21.9355 12.9894L20.9355 31.6965L39.9356 11.0864Z\" fill=\"#FDD231\" class=\"fill-yellow\" />\n  <path d=\"M39.9355 11.0864L57.9356 12.9894L58.9355 31.6965L39.9355 11.0864Z\" fill=\"#FDD231\" class=\"fill-yellow\" />\n  <path d=\"M71.8708 31.6964L57.9353 12.9893L58.9354 31.6964H71.8708Z\" fill=\"#FDAD00\" class=\"fill-orange\" />\n  <path d=\"M8 31.6964L21.9354 12.9893L20.9355 31.6964H8Z\" fill=\"#FDAD00\" class=\"fill-orange\" />\n  <path d=\"M39.9356 11.0864L20.9355 31.6965H58.9356L39.9356 11.0864Z\" fill=\"#FEEEB7\" class=\"fill-yellow\" />\n</svg>"
		},
		bold: {
			id: "88:1340",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1340",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7c5/d24b/2b64748ee7248bb842e5093300fc7202",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M37.4012 12.3599L22.8883 13.8941L22.0821 28.9771L37.4012 12.3599Z\" fill=\"currentColor\" />\n  <path d=\"M57.7885 28.9771L56.9821 13.8941L42.4694 12.3599L57.7885 28.9771Z\" fill=\"currentColor\" />\n  <path d=\"M39.9353 12.5617L56.6534 30.6965H23.2172L39.9353 12.5617Z\" fill=\"currentColor\" />\n  <path d=\"M9.9917 30.6966H19.9873L20.76 16.2411L9.9917 30.6966Z\" fill=\"currentColor\" />\n  <path d=\"M59.8833 30.6966H69.8789L59.1106 16.2414L59.8833 30.6966Z\" fill=\"currentColor\" />\n  <path d=\"M59.5474 32.6967L44.644 61.8669L69.6938 32.6967H59.5474Z\" fill=\"currentColor\" />\n  <path d=\"M20.3232 32.6967L35.2268 61.8673L10.1767 32.6967H20.3232Z\" fill=\"currentColor\" />\n  <path d=\"M22.5691 32.6967H57.3013L39.9352 66.6871L22.5691 32.6967Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1338",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1338",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/feec/c495/3f13fec7c0a812f9f0f6d07cef89ed11",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M21.9355 12.9894L39.9355 11.0864L57.9355 12.9894L71.871 31.6966L39.9355 68.8851L8 31.6966L21.9355 12.9894Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M20.9355 31.6968L39.9355 68.8853L8 31.6968H20.9355Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M58.9354 31.6968L39.9353 68.8853L71.8708 31.6968H58.9354Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M20.9355 31.6968H58.9356L39.9356 68.8853L20.9355 31.6968Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M39.9356 11.0864L21.9355 12.9894L20.9355 31.6965L39.9356 11.0864Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M39.9355 11.0864L57.9356 12.9894L58.9355 31.6965L39.9355 11.0864Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M71.8708 31.6964L57.9353 12.9893L58.9354 31.6964H71.8708Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M8 31.6964L21.9354 12.9893L20.9355 31.6964H8Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M39.9356 11.0864L20.9355 31.6965H58.9356L39.9356 11.0864Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const zeplin = {
	id: "88:740",
	categories: [
		"design"
	],
	terms: [
		"zeplin"
	],
	variants: {
		color: {
			id: "88:767",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:767",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90dd/7965/cfa563d1072fa9763a8d0c28d52c0ec8",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.8654 49.271L14.5175 50.4942L14.3394 60.4526L25.9279 56.2193C21.9498 54.8871 19.0487 52.5391 17.8654 49.271Z\" fill=\"#FDBD39\" class=\"fill-brown\" />\n  <path d=\"M19.6177 38.7383L8 42.9822L14.5175 50.4969L17.8654 49.2737C16.6847 46.0163 17.4133 42.3387 19.6177 38.7383Z\" fill=\"#F69833\" class=\"fill-brown\" />\n  <path d=\"M39.165 24.3652C24.3722 29.7685 14.8339 40.9209 17.8653 49.2706L71.4337 29.702C68.4023 21.3524 53.9578 18.9618 39.165 24.3652Z\" fill=\"#FECF33\" class=\"fill-yellow\" />\n  <path d=\"M50.1314 54.61C64.9241 49.2067 74.4784 38.1048 71.431 29.7046L17.8628 49.2705C20.9102 57.6733 35.3386 60.0134 50.1314 54.61Z\" fill=\"#EE6723\" class=\"fill-brown\" />\n  <path d=\"M71.431 29.7021L17.8655 49.2707C18.9132 52.1638 22.9152 53.5891 28.5259 53.5891C33.9984 53.5891 41.0026 52.2356 48.3046 49.5685C63.0973 44.1652 73.5025 35.414 71.431 29.7021Z\" fill=\"#F69833\" class=\"fill-brown\" />\n  <path d=\"M60.7704 25.3862C55.3006 25.3862 48.2938 26.7397 40.9918 29.4068C26.199 34.8102 15.7938 43.5587 17.8653 49.2705L71.4335 29.702C70.3832 26.8089 66.3838 25.3862 60.7704 25.3862Z\" fill=\"#FDBD39\" class=\"fill-brown\" />\n  <path opacity=\"0.9\" d=\"M46.7316 22.2556C45.3289 17.2769 43.6701 14.22 42.1381 14.3554C39.2543 14.6103 37.9122 26.0811 39.1404 39.9762C40.3687 53.8712 43.7022 64.9287 46.586 64.6738C48.2504 64.5267 49.4012 60.6438 49.8408 54.7152C49.9376 54.6805 50.0345 54.6454 50.1314 54.61C52.7146 53.6665 55.1381 52.5491 57.3626 51.3027C59.4567 55.9461 60.1367 59.2986 58.8901 60.1752C56.5219 61.8405 48.0977 53.9402 40.0741 42.5295C32.0506 31.1189 27.466 20.5187 29.8343 18.8535C31.2133 17.8838 34.6456 20.1575 38.8566 24.479\" stroke=\"#EE6723\" stroke-width=\"1.2\" class=\"stroke-brown\" />\n</svg>"
		},
		bold: {
			id: "88:765",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:765",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d9/73e2/ab37815b56ae3622275a55c8ff0b57f6",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.8654 49.271L14.5175 50.4942L14.3394 60.4526L25.9279 56.2193C21.9498 54.8871 19.0487 52.5391 17.8654 49.271Z\" fill=\"currentColor\" />\n  <path d=\"M19.6177 38.7383L8 42.9822L14.5175 50.4969L17.8654 49.2737C16.6847 46.0163 17.4133 42.3387 19.6177 38.7383Z\" fill=\"currentColor\" />\n  <path d=\"M39.165 24.3652C24.3722 29.7685 14.8339 40.9209 17.8653 49.2706L71.4337 29.702C68.4023 21.3524 53.9578 18.9618 39.165 24.3652Z\" fill=\"currentColor\" />\n  <path d=\"M50.1314 54.61C64.9241 49.2067 74.4784 38.1048 71.431 29.7046L17.8628 49.2705C20.9102 57.6733 35.3386 60.0134 50.1314 54.61Z\" fill=\"currentColor\" />\n  <path d=\"M71.431 29.7021L17.8655 49.2707C18.9132 52.1638 22.9152 53.5891 28.5259 53.5891C33.9984 53.5891 41.0026 52.2356 48.3046 49.5685C63.0973 44.1652 73.5025 35.414 71.431 29.7021Z\" fill=\"currentColor\" />\n  <path d=\"M60.7704 25.3862C55.3006 25.3862 48.2938 26.7397 40.9918 29.4068C26.199 34.8102 15.7938 43.5587 17.8653 49.2705L71.4335 29.702C70.3832 26.8089 66.3838 25.3862 60.7704 25.3862Z\" fill=\"currentColor\" />\n  <path opacity=\"0.9\" d=\"M46.7316 22.2556C45.3289 17.2769 43.6701 14.22 42.1381 14.3554C39.2543 14.6103 37.9122 26.0811 39.1404 39.9762C40.3687 53.8712 43.7022 64.9287 46.586 64.6738C48.2504 64.5267 49.4012 60.6438 49.8408 54.7152C49.9376 54.6805 50.0345 54.6454 50.1314 54.61C52.7146 53.6665 55.1381 52.5491 57.3626 51.3027C59.4567 55.9461 60.1367 59.2986 58.8901 60.1752C56.5219 61.8405 48.0977 53.9402 40.0741 42.5295C32.0506 31.1189 27.466 20.5187 29.8343 18.8535C31.2133 17.8838 34.6456 20.1575 38.8566 24.479\" stroke=\"currentColor\" stroke-width=\"3\" />\n</svg>"
		},
		path: {
			id: "88:756",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:756",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9837/4ed2/49104857dff3ca443b2b08e263208307",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.8654 49.271L14.5175 50.4942L14.3394 60.4526L25.9279 56.2193C21.9498 54.8871 19.0487 52.5391 17.8654 49.271\" stroke=\"currentColor\" />\n  <path d=\"M19.6177 38.7383L8 42.9822L14.5175 50.4969L17.8654 49.2737C16.6847 46.0163 17.4133 42.3387 19.6177 38.7383Z\" stroke=\"currentColor\" />\n  <path d=\"M17.865 49.2699C14.8346 40.9203 24.3728 29.7685 39.165 24.3654C53.9578 18.962 68.3996 21.3549 71.431 29.7046C74.4784 38.1048 64.9241 49.2069 50.1314 54.6102C35.3386 60.0136 20.9102 57.6735 17.8628 49.2707L17.865 49.2699Z\" stroke=\"currentColor\" />\n  <path opacity=\"0.9\" d=\"M46.7316 22.2556C45.3289 17.2769 43.6701 14.22 42.1381 14.3554C39.2543 14.6103 37.9122 26.0811 39.1404 39.9762C40.3687 53.8712 43.7022 64.9287 46.586 64.6738C48.2504 64.5267 49.4012 60.6438 49.8408 54.7152C49.9376 54.6805 50.0345 54.6454 50.1314 54.61C52.7146 53.6665 55.1381 52.5491 57.3626 51.3027C59.4567 55.9461 60.1367 59.2986 58.8901 60.1752C56.5219 61.8405 48.0977 53.9402 40.0741 42.5295C32.0506 31.1189 27.466 20.5187 29.8343 18.8535C31.2133 17.8838 34.6456 20.1575 38.8566 24.479\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const invision = {
	id: "88:1419",
	categories: [
		"design"
	],
	terms: [
		"invision"
	],
	variants: {
		color: {
			id: "88:1409",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1409",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/589a/2532/bd839306362ba1a658e3c1bb98781bef",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M66.1982 7.87256H13.8018C10.5975 7.87256 8 10.4701 8 13.6743V66.0708C8 69.2751 10.5975 71.8726 13.8018 71.8726H66.1982C69.4025 71.8726 72 69.2751 72 66.0708V13.6743C72 10.4701 69.4025 7.87256 66.1982 7.87256Z\" fill=\"#DC395F\" class=\"fill-red\" />\n  <path d=\"M29.3887 28.009C31.5162 28.009 33.2985 26.3415 33.2985 24.156C33.2985 21.9719 31.5162 20.3047 29.3887 20.3047C27.2612 20.3047 25.4795 21.9719 25.4795 24.156C25.4795 26.3412 27.2612 28.009 29.3887 28.009ZM21.2822 48.639C21.0525 49.6165 20.9372 50.672 20.9372 51.533C20.9372 54.9258 22.777 57.1781 26.6867 57.1781C29.9292 57.1781 32.558 55.2526 34.4507 52.1433L33.295 56.7816H39.7337L43.4137 42.0218C44.3337 38.2847 46.116 36.345 48.8185 36.345C50.9457 36.345 52.268 37.668 52.268 39.852C52.268 40.4848 52.2105 41.174 51.9805 41.9218L50.083 48.706C49.7955 49.6835 49.681 50.6615 49.681 51.5808C49.681 54.8016 51.5777 57.1573 55.545 57.1573C58.9372 57.1573 61.6392 54.9736 63.1342 49.7413L60.6047 48.7648C59.3397 52.27 58.2472 52.9038 57.3847 52.9038C56.5222 52.9038 56.0622 52.3293 56.0622 51.18C56.0622 50.6625 56.1777 50.0883 56.3497 49.3968L58.19 42.7873C58.6497 41.2353 58.8225 39.859 58.8225 38.5945C58.8225 33.65 55.8325 31.0695 52.2105 31.0695C48.8185 31.0695 45.3685 34.1292 43.644 37.3495L44.9085 31.5695H35.0775L33.6975 36.6605H38.2972L35.4647 48.0005C33.2405 52.945 29.1547 53.0253 28.642 52.9105C27.8 52.7205 27.2615 52.4008 27.2615 51.3068C27.2615 50.6755 27.3765 49.7688 27.664 48.6755L31.9765 31.5695H21.0525L19.6725 36.6605H24.2142L21.2825 48.639\" fill=\"white\" class=\"fill-white\" />\n</svg>"
		},
		bold: {
			id: "88:1405",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1405",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c092/e638/22cfce7ee3f14816875412c0f428a1fd",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.8018 7.87256H66.1982C69.4025 7.87256 72 10.4701 72 13.6743V66.0708C72 69.2751 69.4025 71.8726 66.1982 71.8726H13.8018C10.5975 71.8726 8 69.2751 8 66.0708V13.6743C8 10.4701 10.5975 7.87256 13.8018 7.87256ZM33.2985 24.1558C33.2985 26.3413 31.5163 28.0088 29.3888 28.0088C27.2612 28.0088 25.4795 26.3411 25.4795 24.1558C25.4795 21.9718 27.2612 20.3046 29.3888 20.3046C31.5163 20.3046 33.2985 21.9718 33.2985 24.1558ZM20.9373 51.5329C20.9373 50.6719 21.0525 49.6164 21.2823 48.6389L24.2143 36.6604H19.6725L21.0525 31.5693H31.9765L27.664 48.6754C27.3765 49.7687 27.2615 50.6754 27.2615 51.3067C27.2615 52.4007 27.8 52.7204 28.642 52.9104C29.1548 53.0252 33.2405 52.9449 35.4648 48.0004L38.2973 36.6604H33.6975L35.0775 31.5693H44.9085L43.644 37.3494C45.3685 34.1291 48.8185 31.0693 52.2105 31.0693C55.8325 31.0693 58.8225 33.6499 58.8225 38.5944C58.8225 39.8589 58.6497 41.2351 58.19 42.7871L56.3498 49.3967C56.1777 50.0882 56.0622 50.6624 56.0622 51.1799C56.0622 52.3292 56.5223 52.9037 57.3848 52.9037C58.2472 52.9037 59.3398 52.2699 60.6048 48.7647L63.1343 49.7412C61.6392 54.9734 58.9372 57.1572 55.545 57.1572C51.5777 57.1572 49.681 54.8014 49.681 51.5807C49.681 50.6614 49.7955 49.6834 50.083 48.7059L51.9805 41.9216C52.2105 41.1739 52.268 40.4846 52.268 39.8519C52.268 37.6679 50.9458 36.3449 48.8185 36.3449C46.116 36.3449 44.3337 38.2846 43.4137 42.0216L39.7337 56.7814H33.295L34.4508 52.1432C32.558 55.2524 29.9293 57.1779 26.6868 57.1779C22.777 57.1779 20.9373 54.9257 20.9373 51.5329Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1403",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1403",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f54/2a90/b9a573852aa7bf7ee3db9e15b662df37",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M66.1982 7.87256H13.8018C10.5975 7.87256 8 10.4701 8 13.6743V66.0708C8 69.2751 10.5975 71.8726 13.8018 71.8726H66.1982C69.4025 71.8726 72 69.2751 72 66.0708V13.6743C72 10.4701 69.4025 7.87256 66.1982 7.87256Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M29.3889 28.009C31.5164 28.009 33.2986 26.3415 33.2986 24.156C33.2986 21.9719 31.5164 20.3047 29.3889 20.3047C27.2614 20.3047 25.4796 21.9719 25.4796 24.156C25.4796 26.3412 27.2614 28.009 29.3889 28.009ZM21.2824 48.639C21.0526 49.6165 20.9374 50.672 20.9374 51.533C20.9374 54.9258 22.7771 57.1781 26.6869 57.1781C29.9294 57.1781 32.5581 55.2526 34.4509 52.1433L33.2951 56.7816H39.7339L43.4139 42.0218C44.3339 38.2847 46.1161 36.345 48.8186 36.345C50.9459 36.345 52.2681 37.668 52.2681 39.852C52.2681 40.4848 52.2106 41.174 51.9806 41.9218L50.0831 48.706C49.7956 49.6835 49.6811 50.6615 49.6811 51.5808C49.6811 54.8016 51.5779 57.1573 55.5451 57.1573C58.9374 57.1573 61.6394 54.9736 63.1344 49.7413L60.6049 48.7648C59.3399 52.27 58.2474 52.9038 57.3849 52.9038C56.5224 52.9038 56.0624 52.3293 56.0624 51.18C56.0624 50.6625 56.1779 50.0883 56.3499 49.3968L58.1901 42.7873C58.6499 41.2353 58.8226 39.859 58.8226 38.5945C58.8226 33.65 55.8326 31.0695 52.2106 31.0695C48.8186 31.0695 45.3686 34.1292 43.6441 37.3495L44.9086 31.5695H35.0776L33.6976 36.6605H38.2974L35.4649 48.0005C33.2406 52.945 29.1549 53.0253 28.6421 52.9105C27.8001 52.7205 27.2616 52.4008 27.2616 51.3068C27.2616 50.6755 27.3766 49.7688 27.6641 48.6755L31.9766 31.5695H21.0526L19.6726 36.6605H24.2144L21.2824 48.639Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const dribbble = {
	id: "88:693",
	categories: [
		"design"
	],
	terms: [
		"dribbble"
	],
	variants: {
		color: {
			id: "88:685",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:685",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9150/4e33/d8da0add22715f2d07a21a95132db66b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 9C22.9065 9 9 22.9065 9 40C9 57.0935 22.9065 71 40 71C57.0935 71 71 57.0935 71 40C71 22.9065 57.0935 9 40 9Z\" fill=\"#E74D89\" class=\"fill-pink\" />\n  <path d=\"M40 9C22.9065 9 9 22.9065 9 40C9 57.0935 22.9065 71 40 71C57.0935 71 71 57.0935 71 40C71 22.9065 57.0935 9 40 9ZM60.4963 23.2957C64.1841 27.8015 66.4174 33.5404 66.4756 39.7901C65.6026 39.6055 56.8484 37.8299 48.0379 38.9379C47.3189 37.1828 46.6403 35.6388 45.7108 33.7361C55.5009 29.739 59.938 24.0509 60.4963 23.2957ZM57.5526 20.2338C57.0764 20.9121 53.0905 26.2695 43.675 29.7986C39.336 21.8266 34.5269 15.2776 33.795 14.2976C42.192 12.2735 51.0407 14.4564 57.5526 20.2338ZM28.7426 16.0775C29.4408 17.0349 34.1724 23.592 38.5597 31.3911C26.1739 34.6803 15.2648 34.6329 14.0805 34.6173C15.7975 26.4006 21.3347 19.5716 28.7426 16.0775ZM13.5212 40.0404C13.5212 39.7696 13.5266 39.5001 13.5347 39.2313C14.6932 39.255 27.5247 39.4204 40.748 35.463C41.506 36.9465 42.2301 38.4524 42.8947 39.9566C33.3199 42.6535 24.6205 50.3975 20.3284 57.7449C16.0992 53.0506 13.5212 46.8413 13.5212 40.0404ZM23.7471 60.9295C26.513 55.2754 34.0194 47.9767 44.6945 44.335C48.412 53.9954 49.9494 62.0916 50.3431 64.4147C41.8291 68.0414 31.5912 67.0464 23.7471 60.9295ZM54.7946 61.9906C54.5233 60.3799 53.1139 52.6285 49.6506 43.1115C57.9481 41.7832 65.2381 43.9575 66.144 44.2434C64.9638 51.611 60.7349 57.9739 54.7946 61.9906Z\" fill=\"#B2215A\" class=\"fill-pink\" />\n</svg>"
		},
		bold: {
			id: "88:683",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:683",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0078/9cdc/400c4ae90645f987b6813ab46a727327",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 9C22.9065 9 9 22.9065 9 40C9 57.0935 22.9065 71 40 71C57.0935 71 71 57.0935 71 40C71 22.9065 57.0935 9 40 9ZM60.4963 23.2957C64.1841 27.8015 66.4174 33.5404 66.4756 39.7901C65.6026 39.6055 56.8484 37.8299 48.0379 38.9379C47.3189 37.1828 46.6403 35.6388 45.7108 33.7361C55.5009 29.739 59.938 24.0509 60.4963 23.2957ZM57.5526 20.2338C57.0764 20.9121 53.0905 26.2695 43.675 29.7986C39.336 21.8266 34.5269 15.2776 33.795 14.2976C42.192 12.2735 51.0407 14.4564 57.5526 20.2338ZM28.7426 16.0775C29.4408 17.0349 34.1724 23.592 38.5597 31.3911C26.1739 34.6803 15.2648 34.6329 14.0805 34.6173C15.7975 26.4006 21.3347 19.5716 28.7426 16.0775ZM13.5212 40.0404C13.5212 39.7696 13.5266 39.5001 13.5347 39.2313C14.6932 39.255 27.5247 39.4204 40.748 35.463C41.506 36.9465 42.2301 38.4524 42.8947 39.9566C33.3199 42.6535 24.6205 50.3975 20.3284 57.7449C16.0992 53.0506 13.5212 46.8413 13.5212 40.0404ZM23.7471 60.9295C26.513 55.2754 34.0194 47.9767 44.6945 44.335C48.412 53.9954 49.9494 62.0916 50.3431 64.4147C41.8291 68.0414 31.5912 67.0464 23.7471 60.9295ZM54.7946 61.9906C54.5233 60.3799 53.1139 52.6285 49.6506 43.1115C57.9481 41.7832 65.2381 43.9575 66.144 44.2434C64.9638 51.611 60.7349 57.9739 54.7946 61.9906Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:681",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:681",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d71/d38c/332abc993b050242a0e7d3050b88830b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 9C22.9065 9 9 22.9065 9 40C9 57.0935 22.9065 71 40 71C57.0935 71 71 57.0935 71 40C71 22.9065 57.0935 9 40 9ZM60.4963 23.2957C64.1841 27.8015 66.4174 33.5404 66.4756 39.7901C65.6026 39.6055 56.8484 37.8299 48.0379 38.9379C47.3189 37.1828 46.6403 35.6388 45.7108 33.7361C55.5009 29.739 59.938 24.0509 60.4963 23.2957V23.2957ZM57.5526 20.2338C57.0764 20.9121 53.0905 26.2695 43.675 29.7986C39.336 21.8266 34.5269 15.2776 33.795 14.2976C42.192 12.2735 51.0407 14.4564 57.5526 20.2338V20.2338ZM28.7426 16.0775C29.4407 17.0349 34.1724 23.592 38.5597 31.3911C26.1739 34.6802 15.2648 34.6329 14.0805 34.6173C15.7975 26.4006 21.3347 19.5716 28.7426 16.0775ZM13.5212 40.0404C13.5212 39.7696 13.5266 39.5001 13.5347 39.2313C14.6932 39.255 27.5248 39.4204 40.748 35.463C41.506 36.9465 42.2301 38.4524 42.8947 39.9566C33.3199 42.6535 24.6205 50.3975 20.3284 57.7449C16.0992 53.0506 13.5212 46.8412 13.5212 40.0404ZM23.7471 60.9295C26.513 55.2754 34.0194 47.9767 44.6945 44.335C48.412 53.9954 49.9494 62.0916 50.3431 64.4147C41.8291 68.0414 31.5912 67.0464 23.7471 60.9295V60.9295ZM54.7946 61.9906C54.5232 60.3799 53.1139 52.6285 49.6506 43.1115C57.9481 41.7832 65.2381 43.9575 66.144 44.2434C64.9638 51.611 60.7349 57.9739 54.7946 61.9906Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const behance = {
	id: "88:674",
	categories: [
		"design"
	],
	terms: [
		"behance"
	],
	variants: {
		color: {
			id: "88:660",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:660",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8d7/1e64/5f4bf5e33fa21acc0da30e1827164cad",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M27.4494 20.2275C29.2932 20.2275 30.9762 20.3951 32.4984 20.7267C34.0206 21.0584 35.3204 21.603 36.4048 22.3605C37.4892 23.118 38.3306 24.1234 38.9293 25.3801C39.5279 26.6368 39.8255 28.1868 39.8255 30.0335C39.8255 32.0268 39.3808 33.6885 38.4948 35.0185C37.6089 36.3486 36.2953 37.4377 34.561 38.286C36.9487 38.9877 38.7309 40.2165 39.9076 41.9689C41.0843 43.7214 41.6727 45.8368 41.6727 48.3119C41.6727 50.3052 41.293 52.0332 40.5336 53.4924C39.7742 54.9516 38.7514 56.142 37.4652 57.0636C36.179 57.9887 34.715 58.6694 33.0696 59.1128C31.414 59.5561 29.7071 59.7795 27.9967 59.776H9.21375V20.2275H27.4494ZM26.3651 36.2334C27.8839 36.2334 29.1324 35.8633 30.1107 35.1267C31.089 34.3867 31.5782 33.1893 31.5748 31.5276C31.5748 30.606 31.4106 29.8485 31.0856 29.2585C30.7607 28.6686 30.3262 28.2043 29.7823 27.8726C29.2385 27.541 28.6159 27.3106 27.9112 27.1814C27.186 27.0523 26.4506 26.9859 25.7117 26.9894H17.7381V36.2403L26.3651 36.2334ZM26.8542 53.0142C27.6581 53.0176 28.4585 52.9339 29.2419 52.7663C30.0013 52.5987 30.6717 52.323 31.2498 51.9355C31.8279 51.548 32.2897 51.0208 32.6352 50.3576C32.9773 49.6943 33.1517 48.8425 33.1517 47.8092C33.1517 45.781 32.5907 44.3288 31.4687 43.463C30.3468 42.5938 28.8622 42.1609 27.0184 42.1609H17.7381V53.0176L26.8542 53.0142ZM52.3931 52.1833C53.5493 53.3283 55.2152 53.9008 57.3873 53.9008C58.9437 53.9008 60.2812 53.5029 61.4032 52.7104C62.5252 51.918 63.2127 51.0767 63.4659 50.19H70.2491C69.1647 53.6251 67.4988 56.0792 65.2549 57.5558C63.0109 59.0325 60.2983 59.7726 57.1136 59.7726C54.9073 59.7726 52.9165 59.413 51.1445 58.6939C49.3726 57.9747 47.8709 56.9484 46.6395 55.6184C45.408 54.2883 44.4571 52.7035 43.7901 50.8568C43.123 49.0101 42.7878 46.9784 42.7878 44.7651C42.7878 42.6252 43.1299 40.6319 43.8174 38.7852C44.505 36.9385 45.4833 35.3432 46.749 33.9957C48.0146 32.6482 49.5266 31.587 51.2814 30.812C53.0362 30.037 54.9825 29.6495 57.1171 29.6495C59.5047 29.6495 61.5845 30.1208 63.3598 31.0633C65.1317 32.0059 66.5889 33.2696 67.728 34.8579C68.8671 36.4463 69.6915 38.2546 70.1978 40.2863C70.704 42.318 70.8853 44.4405 70.7417 46.6572H50.498C50.6041 49.1951 51.2369 51.0418 52.3931 52.1833ZM61.1056 37.12C60.182 36.0867 58.7795 35.5701 56.8981 35.5701C55.6667 35.5701 54.6439 35.783 53.8332 36.2054C53.0191 36.6313 52.3691 37.155 51.88 37.7833C51.3908 38.4117 51.0488 39.075 50.8504 39.7766C50.652 40.4783 50.5322 41.1067 50.498 41.6582H63.0349C62.6688 39.6684 62.0257 38.1534 61.1056 37.12ZM49.1776 22.2348H64.841V26.6683H49.1776V22.2348Z\" fill=\"#1769FF\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "88:656",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:656",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a43b/43ea/be01296651d62051a30fe76a8baa3d79",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M27.4494 20.2275C29.2932 20.2275 30.9762 20.3951 32.4984 20.7267C34.0206 21.0584 35.3204 21.603 36.4048 22.3605C37.4892 23.118 38.3306 24.1234 38.9293 25.3801C39.5279 26.6368 39.8255 28.1868 39.8255 30.0335C39.8255 32.0268 39.3808 33.6885 38.4948 35.0185C37.6089 36.3486 36.2953 37.4377 34.561 38.286C36.9487 38.9877 38.7309 40.2165 39.9076 41.9689C41.0843 43.7214 41.6727 45.8368 41.6727 48.3119C41.6727 50.3052 41.293 52.0332 40.5336 53.4924C39.7742 54.9516 38.7514 56.142 37.4652 57.0636C36.179 57.9887 34.715 58.6694 33.0696 59.1128C31.414 59.5561 29.7071 59.7795 27.9967 59.776H9.21375V20.2275H27.4494ZM26.3651 36.2334C27.8839 36.2334 29.1324 35.8633 30.1107 35.1267C31.089 34.3867 31.5782 33.1893 31.5748 31.5276C31.5748 30.606 31.4106 29.8485 31.0856 29.2585C30.7607 28.6686 30.3262 28.2043 29.7823 27.8726C29.2385 27.541 28.6159 27.3106 27.9112 27.1814C27.186 27.0523 26.4506 26.9859 25.7117 26.9894H17.7381V36.2403L26.3651 36.2334ZM26.8542 53.0142C27.6581 53.0176 28.4585 52.9339 29.2419 52.7663C30.0013 52.5987 30.6717 52.323 31.2498 51.9355C31.8279 51.548 32.2897 51.0208 32.6352 50.3576C32.9773 49.6943 33.1517 48.8425 33.1517 47.8092C33.1517 45.781 32.5907 44.3288 31.4687 43.463C30.3468 42.5938 28.8622 42.1609 27.0184 42.1609H17.7381V53.0176L26.8542 53.0142ZM52.3931 52.1833C53.5493 53.3283 55.2152 53.9008 57.3873 53.9008C58.9437 53.9008 60.2812 53.5029 61.4032 52.7104C62.5252 51.918 63.2127 51.0767 63.4659 50.19H70.2491C69.1647 53.6251 67.4988 56.0792 65.2549 57.5558C63.0109 59.0325 60.2983 59.7726 57.1136 59.7726C54.9073 59.7726 52.9165 59.413 51.1445 58.6939C49.3726 57.9747 47.8709 56.9484 46.6395 55.6184C45.408 54.2883 44.4571 52.7035 43.7901 50.8568C43.123 49.0101 42.7878 46.9784 42.7878 44.7651C42.7878 42.6252 43.1299 40.6319 43.8174 38.7852C44.505 36.9385 45.4833 35.3432 46.749 33.9957C48.0146 32.6482 49.5266 31.587 51.2814 30.812C53.0362 30.037 54.9825 29.6495 57.1171 29.6495C59.5047 29.6495 61.5845 30.1208 63.3598 31.0633C65.1317 32.0059 66.5889 33.2696 67.728 34.8579C68.8671 36.4463 69.6915 38.2546 70.1978 40.2863C70.704 42.318 70.8853 44.4405 70.7417 46.6572H50.498C50.6041 49.1951 51.2369 51.0418 52.3931 52.1833ZM61.1056 37.12C60.182 36.0867 58.7795 35.5701 56.8981 35.5701C55.6667 35.5701 54.6439 35.783 53.8332 36.2054C53.0191 36.6313 52.3691 37.155 51.88 37.7833C51.3908 38.4117 51.0488 39.075 50.8504 39.7766C50.652 40.4783 50.5322 41.1067 50.498 41.6582H63.0349C62.6688 39.6684 62.0257 38.1534 61.1056 37.12ZM49.1776 22.2348H64.841V26.6683H49.1776V22.2348Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:652",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:652",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a6f4/d611/e7c97fe3575553eedc1b5a3cff66c0ff",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M27.4494 20.2275C29.2932 20.2275 30.9762 20.3951 32.4984 20.7267C34.0206 21.0584 35.3204 21.603 36.4048 22.3605C37.4892 23.118 38.3306 24.1234 38.9293 25.3801C39.5279 26.6368 39.8255 28.1868 39.8255 30.0335C39.8255 32.0268 39.3808 33.6885 38.4948 35.0185C37.6089 36.3486 36.2953 37.4377 34.561 38.286C36.9487 38.9877 38.7309 40.2165 39.9076 41.9689C41.0843 43.7214 41.6727 45.8368 41.6727 48.3119C41.6727 50.3052 41.293 52.0332 40.5336 53.4924C39.7742 54.9516 38.7514 56.142 37.4652 57.0636C36.179 57.9887 34.715 58.6694 33.0696 59.1128C31.414 59.5561 29.7071 59.7795 27.9967 59.776H9.21375V20.2275H27.4494ZM26.3651 36.2334C27.8839 36.2334 29.1324 35.8633 30.1107 35.1267C31.089 34.3867 31.5782 33.1893 31.5748 31.5276C31.5748 30.606 31.4106 29.8485 31.0856 29.2585C30.7607 28.6686 30.3262 28.2043 29.7823 27.8726C29.2385 27.541 28.6159 27.3106 27.9112 27.1814C27.186 27.0523 26.4506 26.9859 25.7117 26.9894H17.7381V36.2403L26.3651 36.2334V36.2334ZM26.8542 53.0142C27.6581 53.0176 28.4585 52.9339 29.2419 52.7663C30.0013 52.5987 30.6717 52.323 31.2498 51.9355C31.8279 51.548 32.2897 51.0208 32.6352 50.3576C32.9773 49.6943 33.1517 48.8425 33.1517 47.8092C33.1517 45.781 32.5907 44.3288 31.4687 43.463C30.3468 42.5938 28.8622 42.1609 27.0184 42.1609H17.7381V53.0176L26.8542 53.0142V53.0142ZM52.3931 52.1833C53.5493 53.3283 55.2152 53.9008 57.3873 53.9008C58.9437 53.9008 60.2812 53.5029 61.4032 52.7104C62.5252 51.918 63.2127 51.0767 63.4659 50.19H70.2491C69.1647 53.6251 67.4988 56.0792 65.2549 57.5558C63.0109 59.0325 60.2983 59.7726 57.1136 59.7726C54.9073 59.7726 52.9165 59.413 51.1445 58.6939C49.3726 57.9747 47.8709 56.9484 46.6395 55.6184C45.408 54.2883 44.4571 52.7035 43.7901 50.8568C43.123 49.0101 42.7878 46.9784 42.7878 44.7651C42.7878 42.6252 43.1299 40.6319 43.8174 38.7852C44.505 36.9385 45.4833 35.3432 46.749 33.9957C48.0146 32.6482 49.5266 31.587 51.2814 30.812C53.0362 30.037 54.9825 29.6495 57.1171 29.6495C59.5047 29.6495 61.5845 30.1208 63.3598 31.0633C65.1317 32.0059 66.5889 33.2696 67.728 34.8579C68.8671 36.4463 69.6915 38.2546 70.1978 40.2863C70.704 42.318 70.8853 44.4405 70.7417 46.6572H50.498C50.6041 49.1951 51.2369 51.0418 52.3931 52.1833ZM61.1056 37.12C60.182 36.0867 58.7795 35.5701 56.8981 35.5701C55.6667 35.5701 54.6439 35.783 53.8332 36.2054C53.0191 36.6313 52.3691 37.155 51.88 37.7833C51.3908 38.4117 51.0488 39.075 50.8504 39.7766C50.652 40.4783 50.5322 41.1067 50.498 41.6582H63.0349C62.6688 39.6684 62.0257 38.1534 61.1056 37.12V37.12ZM49.1776 22.2348H64.841V26.6683H49.1776V22.2348V22.2348Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const node = {
	id: "88:468",
	categories: [
		"code"
	],
	terms: [
		"node"
	],
	variants: {
		color: {
			id: "88:573",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:573",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e030/ef52/1bdff748b73e5abc7f7ccc68fa50244d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M39.6091 61.9998C39.3651 61.9998 39.1373 61.9349 38.9256 61.8212L36.7611 60.5381C36.4356 60.3593 36.5984 60.2944 36.6961 60.262C37.1354 60.1158 37.2168 60.0832 37.6725 59.8235C37.7214 59.7909 37.7866 59.8072 37.8353 59.8397L39.4954 60.8304C39.5604 60.8629 39.6418 60.8629 39.6905 60.8304L46.1842 57.0785C46.2493 57.046 46.282 56.9809 46.282 56.8999V49.4123C46.282 49.3309 46.2493 49.2661 46.1842 49.2335L39.6905 45.4979C39.6255 45.4653 39.5441 45.4653 39.4954 45.4979L33.0017 49.2335C32.9366 49.266 32.9039 49.3472 32.9039 49.4122V56.8997C32.9039 56.9648 32.9366 57.0459 33.0017 57.0785L34.7756 58.1017C35.7359 58.5889 36.338 58.0205 36.338 57.452V50.0618C36.338 49.9644 36.4194 49.8669 36.5333 49.8669H37.3633C37.461 49.8669 37.5586 49.9481 37.5586 50.0618V57.452C37.5586 58.7351 36.8587 59.4823 35.6381 59.4823C35.2639 59.4823 34.971 59.4823 34.1409 59.0761L32.4321 58.1017C32.0089 57.8581 31.7485 57.4032 31.7485 56.916V49.4285C31.7485 48.9412 32.0089 48.4863 32.4321 48.2428L38.9256 44.4908C39.3326 44.2635 39.886 44.2635 40.2928 44.4908L46.7864 48.2428C47.2095 48.4863 47.47 48.9412 47.47 49.4285V56.916C47.47 57.4032 47.2095 57.8581 46.7864 58.1017L40.2928 61.8536C40.0812 61.9512 39.8371 61.9998 39.6093 61.9998H39.6091ZM41.611 56.8511C38.763 56.8511 38.1771 55.5517 38.1771 54.4473C38.1771 54.3498 38.2584 54.2524 38.3724 54.2524H39.2187C39.3162 54.2524 39.3976 54.3173 39.3976 54.4148C39.5279 55.2756 39.9022 55.6979 41.6273 55.6979C42.9943 55.6979 43.5804 55.3893 43.5804 54.6584C43.5804 54.2361 43.4175 53.9276 41.2856 53.7164C39.5116 53.5376 38.4049 53.1479 38.4049 51.7349C38.4049 50.4192 39.5117 49.6395 41.3669 49.6395C43.45 49.6395 44.4754 50.3543 44.6057 51.9133C44.6057 51.9623 44.5894 52.0109 44.5568 52.0596C44.5242 52.0921 44.4755 52.1246 44.4266 52.1246H43.5803C43.4989 52.1246 43.4175 52.0596 43.4013 51.9784C43.206 51.0852 42.7015 50.7927 41.3669 50.7927C39.8697 50.7927 39.6905 51.3126 39.6905 51.7023C39.6905 52.1733 39.9022 52.3195 41.9202 52.5793C43.922 52.8393 44.8661 53.2128 44.8661 54.6096C44.8497 56.039 43.678 56.8511 41.611 56.8511Z\" fill=\"#539E43\" class=\"fill-green\" />\n  <path d=\"M19.4611 32.7155C19.4611 32.4232 19.2983 32.1469 19.038 32.0007L12.1375 28.0377C12.0234 27.9726 11.8933 27.9402 11.7632 27.9239H11.698C11.5679 27.9239 11.4376 27.9726 11.3237 28.0377L4.42315 32.0007C4.16264 32.1469 4 32.423 4 32.7155L4.01633 43.3702C4.01633 43.5164 4.09773 43.6625 4.22784 43.7276C4.35809 43.8088 4.52074 43.8088 4.6348 43.7276L8.73605 41.3887C8.99642 41.2425 9.1592 40.9664 9.1592 40.6741V35.6877C9.1592 35.3954 9.32184 35.1193 9.58235 34.9731L11.3237 33.9661C11.4539 33.8848 11.6004 33.8522 11.7468 33.8522C11.8933 33.8522 12.0397 33.8848 12.1538 33.9661L13.8951 34.9731C14.1556 35.1193 14.3183 35.3953 14.3183 35.6877V40.6741C14.3183 40.9664 14.481 41.2425 14.7414 41.3887L18.8427 43.7276C18.9729 43.8088 19.1356 43.8088 19.2658 43.7276C19.3961 43.6625 19.4775 43.5164 19.4775 43.3702L19.4611 32.7155ZM52.6293 18.0488C52.4991 17.9837 52.3364 17.9837 52.2223 18.0488C52.0922 18.13 52.0108 18.2599 52.0108 18.406V28.9635C52.0108 29.0609 51.9621 29.1583 51.8644 29.2234C51.7668 29.272 51.669 29.272 51.5715 29.2234L49.8463 28.2326C49.7198 28.1608 49.5768 28.123 49.4313 28.123C49.2857 28.123 49.1427 28.1608 49.0162 28.2326L42.1157 32.2119C41.8553 32.3581 41.6925 32.6342 41.6925 32.9265V40.8689C41.6925 41.1612 41.8553 41.4375 42.1157 41.5836L49.0162 45.5629C49.1427 45.6348 49.2857 45.6726 49.4313 45.6726C49.5768 45.6726 49.7198 45.6348 49.8463 45.5629L56.7469 41.5836C57.0072 41.4375 57.17 41.1613 57.17 40.8689V21.0698C57.17 20.7612 57.0072 20.4852 56.7469 20.3389L52.6294 18.0488H52.6293ZM51.9946 38.254C51.9946 38.3352 51.9621 38.4001 51.8969 38.4326L49.5371 39.7969C49.5041 39.8129 49.4679 39.8213 49.4313 39.8213C49.3946 39.8213 49.3584 39.8129 49.3254 39.7969L46.9657 38.4326C46.9005 38.4001 46.8679 38.3189 46.8679 38.254V35.5253C46.8679 35.444 46.9005 35.3791 46.9657 35.3467L49.3254 33.9822C49.3584 33.9662 49.3946 33.9578 49.4313 33.9578C49.4679 33.9578 49.5041 33.9662 49.5371 33.9822L51.8969 35.3467C51.9621 35.379 51.9946 35.4603 51.9946 35.5253V38.254ZM75.593 35.4603C75.8536 35.3142 76 35.038 76 34.7456V32.8129C76 32.5205 75.8372 32.2444 75.593 32.0982L68.7414 28.1352C68.6149 28.0634 68.4719 28.0256 68.3264 28.0256C68.1809 28.0256 68.0379 28.0634 67.9114 28.1352L61.0109 32.1144C60.7504 32.2606 60.5877 32.5367 60.5877 32.8292V40.7715C60.5877 41.0638 60.7504 41.3399 61.0109 41.4861L67.8626 45.3842C68.1231 45.5303 68.4322 45.5303 68.6763 45.3842L72.8263 43.078C72.9566 43.013 73.0379 42.8668 73.0379 42.7207C73.0379 42.5745 72.9566 42.4284 72.8263 42.3633L65.8932 38.384C65.7631 38.3029 65.6817 38.1729 65.6817 38.0267V35.5417C65.6817 35.3956 65.7631 35.2494 65.8932 35.1843L68.0579 33.9499C68.1212 33.9101 68.1946 33.889 68.2694 33.889C68.3443 33.889 68.4176 33.9101 68.481 33.9499L70.6455 35.1843C70.7757 35.2656 70.8571 35.3954 70.8571 35.5417V37.4908C70.8571 37.6369 70.9385 37.7831 71.0686 37.848C71.1989 37.9292 71.3615 37.9292 71.4918 37.848L75.593 35.4603Z\" fill=\"black\" class=\"fill-grey\" />\n  <path d=\"M68.2205 35.0868C68.2446 35.071 68.2729 35.0625 68.3018 35.0625C68.3307 35.0625 68.359 35.071 68.3831 35.0868L69.7015 35.8502C69.7503 35.8825 69.7829 35.9313 69.7829 35.9963V37.5231C69.7829 37.588 69.7503 37.6368 69.7015 37.6692L68.3831 38.4326C68.359 38.4485 68.3307 38.4569 68.3018 38.4569C68.2729 38.4569 68.2446 38.4485 68.2205 38.4326L66.9022 37.6692C66.8533 37.6368 66.8208 37.588 66.8208 37.5231V35.9963C66.8208 35.9313 66.8533 35.8825 66.9022 35.8502L68.2205 35.0868Z\" fill=\"#539E43\" class=\"fill-green\" />\n  <path d=\"M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z\" fill=\"black\" class=\"fill-grey\" />\n  <mask id=\"mask0\" mask-type=\"alpha\" maskUnits=\"userSpaceOnUse\" x=\"22\" y=\"28\" width=\"17\" height=\"18\">\n    <path d=\"M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z\" fill=\"black\" class=\"fill-grey\" />\n  </mask>\n  <g mask=\"url(#mask0)\">\n    <path d=\"M31 28.1677C30.8735 28.0959 30.7305 28.0581 30.585 28.0581C30.4395 28.0581 30.2965 28.0959 30.17 28.1677L23.3183 32.1143C23.0578 32.2604 22.9114 32.5366 22.9114 32.8289V40.7389C22.9114 41.0312 23.0742 41.3074 23.3183 41.4535L30.17 45.4004C30.2965 45.4722 30.4395 45.51 30.585 45.51C30.7305 45.51 30.8735 45.4722 31 45.4004L37.8518 41.4535C38.1121 41.3074 38.2587 41.0312 38.2587 40.7389V32.829C38.2587 32.5367 38.0958 32.2606 37.8518 32.1144L31 28.1677Z\" fill=\"url(#paint0_linear)\" />\n    <path d=\"M37.868 32.1149L30.9838 28.1681C30.9162 28.1341 30.8453 28.1068 30.7722 28.0869L23.0579 41.2756C23.1218 41.3535 23.1989 41.4194 23.2858 41.4705L30.17 45.4174C30.3653 45.5311 30.5932 45.5635 30.8047 45.4985L38.0471 32.2774C37.9983 32.2125 37.9331 32.1636 37.868 32.115V32.1149Z\" fill=\"url(#paint1_linear)\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.8842 41.4534C38.0795 41.3397 38.226 41.1448 38.2912 40.9337L30.7394 28.07C30.5441 28.0375 30.3324 28.0537 30.1536 28.1673L23.3181 32.098L30.6905 45.514C30.7977 45.4964 30.9019 45.4636 30.9997 45.4166L37.8841 41.4536L37.8842 41.4534Z\" fill=\"url(#paint2_linear)\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.8843 41.4535L31.0163 45.4003C30.9193 45.4497 30.8148 45.4826 30.707 45.4977L30.8373 45.7414L38.4539 41.3399V41.2424L38.2585 40.9175C38.226 41.1449 38.0796 41.3398 37.8843 41.4535Z\" fill=\"url(#paint3_linear)\" />\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M37.8843 41.4535L31.0163 45.4003C30.9193 45.4497 30.8148 45.4826 30.707 45.4977L30.8373 45.7414L38.4539 41.3399V41.2424L38.2585 40.9175C38.226 41.1449 38.0796 41.3398 37.8843 41.4535Z\" fill=\"url(#paint4_linear)\" />\n  </g>\n  <defs>\n    <linearGradient id=\"paint0_linear\" x1=\"33.3764\" y1=\"31.1099\" x2=\"25.8878\" y2=\"42.9004\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#41873F\" />\n      <stop offset=\"0.3288\" stop-color=\"#418B3D\" />\n      <stop offset=\"0.6352\" stop-color=\"#419637\" />\n      <stop offset=\"0.9319\" stop-color=\"#3FA92D\" />\n      <stop offset=\"1\" stop-color=\"#3FAE2A\" />\n    </linearGradient>\n    <linearGradient id=\"paint1_linear\" x1=\"29.5448\" y1=\"37.711\" x2=\"48.3361\" y2=\"27.481\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0.1376\" stop-color=\"#41873F\" />\n      <stop offset=\"0.4032\" stop-color=\"#54A044\" />\n      <stop offset=\"0.7136\" stop-color=\"#66B848\" />\n      <stop offset=\"0.9081\" stop-color=\"#6CC04A\" />\n    </linearGradient>\n    <linearGradient id=\"paint2_linear\" x1=\"22.6609\" y1=\"36.784\" x2=\"38.5156\" y2=\"36.784\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0.09192\" stop-color=\"#6CC04A\" />\n      <stop offset=\"0.2864\" stop-color=\"#66B848\" />\n      <stop offset=\"0.5968\" stop-color=\"#54A044\" />\n      <stop offset=\"0.8624\" stop-color=\"#41873F\" />\n    </linearGradient>\n    <linearGradient id=\"paint3_linear\" x1=\"22.6611\" y1=\"43.3427\" x2=\"38.5156\" y2=\"43.3427\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0.09192\" stop-color=\"#6CC04A\" />\n      <stop offset=\"0.2864\" stop-color=\"#66B848\" />\n      <stop offset=\"0.5968\" stop-color=\"#54A044\" />\n      <stop offset=\"0.8624\" stop-color=\"#41873F\" />\n    </linearGradient>\n    <linearGradient id=\"paint4_linear\" x1=\"40.8254\" y1=\"30.7357\" x2=\"36.8244\" y2=\"51.743\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#41873F\" />\n      <stop offset=\"0.3288\" stop-color=\"#418B3D\" />\n      <stop offset=\"0.6352\" stop-color=\"#419637\" />\n      <stop offset=\"0.9319\" stop-color=\"#3FA92D\" />\n      <stop offset=\"1\" stop-color=\"#3FAE2A\" />\n    </linearGradient>\n  </defs>\n</svg>"
		},
		bold: {
			id: "88:553",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:553",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e83/30c7/2c8a69b1fe604a1fcbfc2c04a45ad923",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M19.4611 36.7155C19.4611 36.4232 19.2983 36.1469 19.038 36.0007L12.1375 32.0377C12.0234 31.9726 11.8933 31.9402 11.7632 31.9239H11.698C11.5679 31.9239 11.4376 31.9726 11.3237 32.0377L4.42315 36.0007C4.16264 36.1469 4 36.423 4 36.7155L4.01633 47.3702C4.01633 47.5164 4.09773 47.6625 4.22784 47.7276C4.35809 47.8088 4.52074 47.8088 4.6348 47.7276L8.73605 45.3887C8.99642 45.2425 9.1592 44.9664 9.1592 44.6741V39.6877C9.1592 39.3954 9.32184 39.1193 9.58235 38.9731L11.3237 37.9661C11.4539 37.8848 11.6004 37.8522 11.7468 37.8522C11.8933 37.8522 12.0397 37.8848 12.1538 37.9661L13.8951 38.9731C14.1556 39.1193 14.3183 39.3953 14.3183 39.6877V44.6741C14.3183 44.9664 14.481 45.2425 14.7414 45.3887L18.8427 47.7276C18.9729 47.8088 19.1356 47.8088 19.2658 47.7276C19.3961 47.6625 19.4775 47.5164 19.4775 47.3702L19.4611 36.7155ZM52.6293 22.0488C52.4991 21.9837 52.3364 21.9837 52.2223 22.0488C52.0922 22.13 52.0108 22.2599 52.0108 22.406V32.9635C52.0108 33.0609 51.9621 33.1583 51.8644 33.2234C51.7668 33.272 51.669 33.272 51.5715 33.2234L49.8463 32.2326C49.7198 32.1608 49.5768 32.123 49.4313 32.123C49.2857 32.123 49.1427 32.1608 49.0162 32.2326L42.1157 36.2119C41.8553 36.3581 41.6925 36.6342 41.6925 36.9265V44.8689C41.6925 45.1612 41.8553 45.4375 42.1157 45.5836L49.0162 49.5629C49.1427 49.6348 49.2857 49.6726 49.4313 49.6726C49.5768 49.6726 49.7198 49.6348 49.8463 49.5629L56.7469 45.5836C57.0072 45.4375 57.17 45.1613 57.17 44.8689V25.0698C57.17 24.7612 57.0072 24.4852 56.7469 24.3389L52.6294 22.0488H52.6293ZM51.9946 42.254C51.9946 42.3352 51.9621 42.4001 51.8969 42.4326L49.5371 43.7969C49.5041 43.8129 49.4679 43.8213 49.4313 43.8213C49.3946 43.8213 49.3584 43.8129 49.3254 43.7969L46.9657 42.4326C46.9005 42.4001 46.8679 42.3189 46.8679 42.254V39.5253C46.8679 39.444 46.9005 39.3791 46.9657 39.3467L49.3254 37.9822C49.3584 37.9662 49.3946 37.9578 49.4313 37.9578C49.4679 37.9578 49.5041 37.9662 49.5371 37.9822L51.8969 39.3467C51.9621 39.379 51.9946 39.4603 51.9946 39.5253V42.254ZM75.593 39.4603C75.8536 39.3142 76 39.038 76 38.7456V36.8129C76 36.5205 75.8372 36.2444 75.593 36.0982L68.7414 32.1352C68.6149 32.0634 68.4719 32.0256 68.3264 32.0256C68.1809 32.0256 68.0379 32.0634 67.9114 32.1352L61.0109 36.1144C60.7504 36.2606 60.5877 36.5367 60.5877 36.8292V44.7715C60.5877 45.0638 60.7504 45.3399 61.0109 45.4861L67.8626 49.3842C68.1231 49.5303 68.4322 49.5303 68.6763 49.3842L72.8263 47.078C72.9566 47.013 73.0379 46.8668 73.0379 46.7207C73.0379 46.5745 72.9566 46.4284 72.8263 46.3633L65.8932 42.384C65.7631 42.3029 65.6817 42.1729 65.6817 42.0267V39.5417C65.6817 39.3956 65.7631 39.2494 65.8932 39.1843L68.0579 37.9499C68.1212 37.9101 68.1946 37.889 68.2694 37.889C68.3443 37.889 68.4176 37.9101 68.481 37.9499L70.6455 39.1843C70.7757 39.2656 70.8571 39.3954 70.8571 39.5417V41.4908C70.8571 41.6369 70.9385 41.7831 71.0686 41.848C71.1989 41.9292 71.3615 41.9292 71.4918 41.848L75.593 39.4603Z\" fill=\"currentColor\" />\n  <path d=\"M68.2205 39.0868C68.2446 39.071 68.2729 39.0625 68.3018 39.0625C68.3307 39.0625 68.359 39.071 68.3831 39.0868L69.7015 39.8502C69.7503 39.8825 69.7829 39.9313 69.7829 39.9963V41.5231C69.7829 41.588 69.7503 41.6368 69.7015 41.6692L68.3831 42.4326C68.359 42.4485 68.3307 42.4569 68.3018 42.4569C68.2729 42.4569 68.2446 42.4485 68.2205 42.4326L66.9022 41.6692C66.8533 41.6368 66.8208 41.588 66.8208 41.5231V39.9963C66.8208 39.9313 66.8533 39.8825 66.9022 39.8502L68.2205 39.0868Z\" fill=\"currentColor\" />\n  <path d=\"M31 32.1677C30.8735 32.0959 30.7305 32.0581 30.585 32.0581C30.4395 32.0581 30.2965 32.0959 30.17 32.1677L23.3183 36.1143C23.0578 36.2604 22.9114 36.5366 22.9114 36.8289V44.7389C22.9114 45.0312 23.0742 45.3074 23.3183 45.4535L30.17 49.4004C30.2965 49.4722 30.4395 49.51 30.585 49.51C30.7305 49.51 30.8735 49.4722 31 49.4004L37.8518 45.4535C38.1121 45.3074 38.2587 45.0312 38.2587 44.7389V36.829C38.2587 36.5367 38.0958 36.2606 37.8518 36.1144L31 32.1677Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:531",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:531",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/690e/bfc6/acf71c332cd5a2f49e64c1a3e79d55e5",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M19.4611 36.7154C19.4611 36.4231 19.2983 36.1468 19.038 36.0007L12.1375 32.0377C12.0234 31.9726 11.8933 31.9401 11.7632 31.9238H11.698C11.5679 31.9238 11.4376 31.9726 11.3237 32.0377L4.42315 36.0007C4.16264 36.1468 4 36.423 4 36.7154L4.01633 47.3702C4.01633 47.5163 4.09773 47.6625 4.22784 47.7275C4.35809 47.8088 4.52074 47.8088 4.6348 47.7275L8.73605 45.3887C8.99642 45.2425 9.1592 44.9664 9.1592 44.674V39.6877C9.1592 39.3954 9.32184 39.1192 9.58235 38.9731L11.3237 37.966C11.4539 37.8848 11.6004 37.8522 11.7468 37.8522C11.8933 37.8522 12.0397 37.8848 12.1538 37.966L13.8951 38.9731C14.1556 39.1192 14.3183 39.3952 14.3183 39.6877V44.674C14.3183 44.9664 14.481 45.2425 14.7414 45.3887L18.8427 47.7275C18.9729 47.8088 19.1356 47.8088 19.2658 47.7275C19.3961 47.6625 19.4775 47.5163 19.4775 47.3702L19.4611 36.7154Z\" stroke=\"currentColor\" />\n  <path d=\"M31 32.1677C30.8735 32.0959 30.7305 32.0581 30.585 32.0581C30.4395 32.0581 30.2965 32.0959 30.17 32.1677L23.3183 36.1143C23.0578 36.2604 22.9114 36.5366 22.9114 36.8289V44.7389C22.9114 45.0312 23.0742 45.3074 23.3183 45.4535L30.17 49.4004C30.2965 49.4722 30.4395 49.51 30.585 49.51C30.7305 49.51 30.8735 49.4722 31 49.4004L37.8518 45.4535C38.1121 45.3074 38.2587 45.0312 38.2587 44.7389V36.829C38.2587 36.5367 38.0958 36.2606 37.8518 36.1144L31 32.1677Z\" stroke=\"currentColor\" />\n  <path d=\"M52.2222 22.0488C52.3362 21.9837 52.499 21.9837 52.6291 22.0488L56.7467 24.3389C57.0071 24.4852 57.1698 24.7612 57.1698 25.0698V44.8689C57.1698 45.1613 57.0071 45.4375 56.7467 45.5836L49.8462 49.5629C49.7197 49.6348 49.5767 49.6726 49.4311 49.6726C49.2856 49.6726 49.1425 49.6348 49.0161 49.5629L42.1155 45.5836C41.8552 45.4375 41.6924 45.1612 41.6924 44.8689V36.9265C41.6924 36.6342 41.8552 36.3581 42.1155 36.2119L49.0161 32.2326C49.1425 32.1608 49.2856 32.123 49.4311 32.123C49.5767 32.123 49.7197 32.1608 49.8462 32.2326L51.5713 33.2234C51.6689 33.272 51.7666 33.272 51.8642 33.2234C51.9619 33.1583 52.0106 33.0609 52.0106 32.9635V22.406C52.0106 22.2599 52.092 22.13 52.2222 22.0488Z\" stroke=\"currentColor\" />\n  <path d=\"M75.9999 38.7454C75.9999 39.0378 75.8535 39.314 75.593 39.4601L71.4917 41.8478C71.3614 41.929 71.1988 41.929 71.0686 41.8478C70.9384 41.7828 70.857 41.6367 70.857 41.4905V39.5415C70.857 39.3952 70.7757 39.2653 70.6454 39.1841L68.4809 37.9497C68.4176 37.9099 68.3442 37.8888 68.2693 37.8888C68.1945 37.8888 68.1211 37.9099 68.0578 37.9497L65.8932 39.1841C65.763 39.2492 65.6816 39.3953 65.6816 39.5415V42.0265C65.6816 42.1727 65.763 42.3027 65.8932 42.3838L72.8262 46.3631C72.9565 46.4281 73.0379 46.5743 73.0379 46.7204C73.0379 46.8666 72.9565 47.0128 72.8262 47.0778L68.6762 49.384C68.4321 49.5301 68.123 49.5301 67.8625 49.384L61.0108 45.4859C60.7503 45.3397 60.5876 45.0636 60.5876 44.7713V36.8289C60.5876 36.5365 60.7503 36.2603 61.0108 36.1142L67.9113 32.135C68.0378 32.0632 68.1808 32.0254 68.3263 32.0254C68.4718 32.0254 68.6148 32.0632 68.7413 32.135L75.593 36.098C75.8371 36.2442 75.9999 36.5203 75.9999 36.8126V38.7454Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const nodeJs = {
	id: "88:593",
	categories: [
		"code"
	],
	terms: [
		"node",
		"js"
	],
	variants: {
		color: {
			id: "88:621",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:621",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edbd/a1cb/edb02272d84815db00d292f12b8ad35e",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M39.9999 71.5001C39.1624 71.5001 38.3124 71.2751 37.5749 70.8501L29.8624 66.2876C28.7124 65.6376 29.2749 65.4126 29.6499 65.2876C31.1874 64.7501 31.4999 64.6376 33.1374 63.7001C33.3124 63.6001 33.5374 63.6376 33.7124 63.7501L39.6374 67.2626C39.8499 67.3876 40.1499 67.3876 40.3499 67.2626L63.4374 53.9376C63.6499 53.8126 63.7874 53.5626 63.7874 53.3126V26.6626C63.7874 26.4001 63.6499 26.1626 63.4249 26.0251L40.3499 12.7126C40.1374 12.5876 39.8499 12.5876 39.6374 12.7126L16.5749 26.0376C16.3499 26.1626 16.2124 26.4126 16.2124 26.6751V53.3126C16.2124 53.5626 16.3499 53.8126 16.5749 53.9251L22.8999 57.5751C26.3374 59.2876 28.4374 57.2751 28.4374 55.2376V28.9376C28.4374 28.5626 28.7374 28.2751 29.1124 28.2751H32.0374C32.3999 28.2751 32.7124 28.5626 32.7124 28.9376V55.2501C32.7124 59.8251 30.2124 62.4501 25.8749 62.4501C24.5374 62.4501 23.4874 62.4501 20.5624 61.0001L14.5124 57.5126C13.0124 56.6501 12.0874 55.0376 12.0874 53.3001V26.6626C12.0874 24.9376 13.0124 23.3126 14.5124 22.4501L37.5749 9.1251C39.0374 8.3001 40.9749 8.3001 42.4249 9.1251L65.5124 22.4626C67.0124 23.3251 67.9374 24.9376 67.9374 26.6751V53.3126C67.9374 55.0376 67.0124 56.6501 65.5124 57.5251L42.4249 70.8501C41.6874 71.2751 40.8499 71.5001 39.9999 71.5001ZM58.6374 45.2376C58.6374 40.2501 55.2624 38.9251 48.1749 37.9876C40.9999 37.0376 40.2749 36.5501 40.2749 34.8751C40.2749 33.4876 40.8874 31.6376 46.1999 31.6376C50.9374 31.6376 52.6874 32.6626 53.4124 35.8626C53.4749 36.1626 53.7499 36.3876 54.0624 36.3876H57.0624C57.2499 36.3876 57.4249 36.3126 57.5499 36.1751C57.6749 36.0376 57.7374 35.8501 57.7249 35.6626C57.2624 30.1501 53.5999 27.5876 46.1999 27.5876C39.6124 27.5876 35.6874 30.3626 35.6874 35.0251C35.6874 40.0751 39.5999 41.4751 45.9124 42.1001C53.4749 42.8376 54.0624 43.9501 54.0624 45.4376C54.0624 48.0126 51.9874 49.1126 47.1249 49.1126C41.0124 49.1126 39.6749 47.5751 39.2249 44.5376C39.1749 44.2126 38.8999 43.9751 38.5624 43.9751H35.5749C35.1999 43.9751 34.9124 44.2751 34.9124 44.6376C34.9124 48.5251 37.0249 53.1626 47.1374 53.1626C54.4374 53.1501 58.6374 50.2626 58.6374 45.2376Z\" fill=\"#539E43\" class=\"fill-green\" />\n</svg>"
		},
		bold: {
			id: "88:618",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:618",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4918/fb75/9f4202f5352f00d15a1768c25b099813",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M39.9999 71.5001C39.1624 71.5001 38.3124 71.2751 37.5749 70.8501L29.8624 66.2876C28.7124 65.6376 29.2749 65.4126 29.6499 65.2876C31.1874 64.7501 31.4999 64.6376 33.1374 63.7001C33.3124 63.6001 33.5374 63.6376 33.7124 63.7501L39.6374 67.2626C39.8499 67.3876 40.1499 67.3876 40.3499 67.2626L63.4374 53.9376C63.6499 53.8126 63.7874 53.5626 63.7874 53.3126V26.6626C63.7874 26.4001 63.6499 26.1626 63.4249 26.0251L40.3499 12.7126C40.1374 12.5876 39.8499 12.5876 39.6374 12.7126L16.5749 26.0376C16.3499 26.1626 16.2124 26.4126 16.2124 26.6751V53.3126C16.2124 53.5626 16.3499 53.8126 16.5749 53.9251L22.8999 57.5751C26.3374 59.2876 28.4374 57.2751 28.4374 55.2376V28.9376C28.4374 28.5626 28.7374 28.2751 29.1124 28.2751H32.0374C32.3999 28.2751 32.7124 28.5626 32.7124 28.9376V55.2501C32.7124 59.8251 30.2124 62.4501 25.8749 62.4501C24.5374 62.4501 23.4874 62.4501 20.5624 61.0001L14.5124 57.5126C13.0124 56.6501 12.0874 55.0376 12.0874 53.3001V26.6626C12.0874 24.9376 13.0124 23.3126 14.5124 22.4501L37.5749 9.1251C39.0374 8.3001 40.9749 8.3001 42.4249 9.1251L65.5124 22.4626C67.0124 23.3251 67.9374 24.9376 67.9374 26.6751V53.3126C67.9374 55.0376 67.0124 56.6501 65.5124 57.5251L42.4249 70.8501C41.6874 71.2751 40.8499 71.5001 39.9999 71.5001ZM58.6374 45.2376C58.6374 40.2501 55.2624 38.9251 48.1749 37.9876C40.9999 37.0376 40.2749 36.5501 40.2749 34.8751C40.2749 33.4876 40.8874 31.6376 46.1999 31.6376C50.9374 31.6376 52.6874 32.6626 53.4124 35.8626C53.4749 36.1626 53.7499 36.3876 54.0624 36.3876H57.0624C57.2499 36.3876 57.4249 36.3126 57.5499 36.1751C57.6749 36.0376 57.7374 35.8501 57.7249 35.6626C57.2624 30.1501 53.5999 27.5876 46.1999 27.5876C39.6124 27.5876 35.6874 30.3626 35.6874 35.0251C35.6874 40.0751 39.5999 41.4751 45.9124 42.1001C53.4749 42.8376 54.0624 43.9501 54.0624 45.4376C54.0624 48.0126 51.9874 49.1126 47.1249 49.1126C41.0124 49.1126 39.6749 47.5751 39.2249 44.5376C39.1749 44.2126 38.8999 43.9751 38.5624 43.9751H35.5749C35.1999 43.9751 34.9124 44.2751 34.9124 44.6376C34.9124 48.5251 37.0249 53.1626 47.1374 53.1626C54.4374 53.1501 58.6374 50.2626 58.6374 45.2376Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:594",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:594",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e20/8c9d/7f22a3ce065e76bf5de42477dcdda499",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M39.9999 71.5001C39.1624 71.5001 38.3124 71.2751 37.5749 70.8501L29.8624 66.2876C28.7124 65.6376 29.2749 65.4126 29.6499 65.2876C31.1874 64.7501 31.4999 64.6376 33.1374 63.7001C33.3124 63.6001 33.5374 63.6376 33.7124 63.7501L39.6374 67.2626C39.8499 67.3876 40.1499 67.3876 40.3499 67.2626L63.4374 53.9376C63.6499 53.8126 63.7874 53.5626 63.7874 53.3126V26.6626C63.7874 26.4001 63.6499 26.1626 63.4249 26.0251L40.3499 12.7126C40.1374 12.5876 39.8499 12.5876 39.6374 12.7126L16.5749 26.0376C16.3499 26.1626 16.2124 26.4126 16.2124 26.6751V53.3126C16.2124 53.5626 16.3499 53.8126 16.5749 53.9251L22.8999 57.5751C26.3374 59.2876 28.4374 57.2751 28.4374 55.2376V28.9376C28.4374 28.5626 28.7374 28.2751 29.1124 28.2751H32.0374C32.3999 28.2751 32.7124 28.5626 32.7124 28.9376V55.2501C32.7124 59.8251 30.2124 62.4501 25.8749 62.4501C24.5374 62.4501 23.4874 62.4501 20.5624 61.0001L14.5124 57.5126C13.0124 56.6501 12.0874 55.0376 12.0874 53.3001V26.6626C12.0874 24.9376 13.0124 23.3126 14.5124 22.4501L37.5749 9.1251C39.0374 8.3001 40.9749 8.3001 42.4249 9.1251L65.5124 22.4626C67.0124 23.3251 67.9374 24.9376 67.9374 26.6751V53.3126C67.9374 55.0376 67.0124 56.6501 65.5124 57.5251L42.4249 70.8501C41.6874 71.2751 40.8499 71.5001 39.9999 71.5001ZM58.6374 45.2376C58.6374 40.2501 55.2624 38.9251 48.1749 37.9876C40.9999 37.0376 40.2749 36.5501 40.2749 34.8751C40.2749 33.4876 40.8874 31.6376 46.1999 31.6376C50.9374 31.6376 52.6874 32.6626 53.4124 35.8626C53.4749 36.1626 53.7499 36.3876 54.0624 36.3876H57.0624C57.2499 36.3876 57.4249 36.3126 57.5499 36.1751C57.6749 36.0376 57.7374 35.8501 57.7249 35.6626C57.2624 30.1501 53.5999 27.5876 46.1999 27.5876C39.6124 27.5876 35.6874 30.3626 35.6874 35.0251C35.6874 40.0751 39.5999 41.4751 45.9124 42.1001C53.4749 42.8376 54.0624 43.9501 54.0624 45.4376C54.0624 48.0126 51.9874 49.1126 47.1249 49.1126C41.0124 49.1126 39.6749 47.5751 39.2249 44.5376C39.1749 44.2126 38.8999 43.9751 38.5624 43.9751H35.5749C35.1999 43.9751 34.9124 44.2751 34.9124 44.6376C34.9124 48.5251 37.0249 53.1626 47.1374 53.1626C54.4374 53.1501 58.6374 50.2626 58.6374 45.2376V45.2376Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const pwa = {
	id: "12:22",
	categories: [
		"code"
	],
	terms: [
		"pwa"
	],
	variants: {
		color: {
			id: "94:422",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=94:422",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c8/e09d/96f9f269beebb46a79e1120de4c4015c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 12C24.536 12 12 24.536 12 40C12 55.464 24.536 68 40 68C55.464 68 68 55.464 68 40C68 24.536 55.464 12 40 12ZM52.3848 42.6131L51.0845 45.9011H57.1704L58.2611 48.9362H62.9677L56.5855 31.9905L54.357 37.6252L56.1391 42.6131H52.3848ZM47.0667 48.0095L53.899 31.0638L49.3695 31.0642L44.6958 42.0149L41.372 31.0642H37.8905L34.3221 42.0149L31.8053 37.0246L29.5278 44.0413L31.8403 48.0095H36.2979L39.5228 38.1892L42.5972 48.0095H47.0667ZM25.047 42.1921H22.257V48.0095H17.9574V31.0638H24.972C26.9662 31.0638 28.4812 31.6366 29.5166 32.7827C29.714 32.9996 29.8894 33.2302 30.0427 33.4735L28.0261 39.6864L27.3047 41.9091C26.6447 42.0979 25.8922 42.1921 25.047 42.1921ZM26.5567 36.5962C26.5567 35.9141 26.3545 35.3692 25.95 34.9621C25.5458 34.555 24.8562 34.3519 23.8814 34.3519H22.257V38.9044H23.8695C24.9153 38.9044 25.6331 38.6803 26.0232 38.2324C26.3787 37.8293 26.5567 37.284 26.5567 36.5962Z\" fill=\"black\" class=\"fill-grey\" />\n</svg>"
		},
		bold: {
			id: "88:410",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:410",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c8/e09d/96f9f269beebb46a79e1120de4c4015c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 12C24.536 12 12 24.536 12 40C12 55.464 24.536 68 40 68C55.464 68 68 55.464 68 40C68 24.536 55.464 12 40 12ZM52.3848 42.6131L51.0845 45.9011H57.1704L58.2611 48.9362H62.9677L56.5855 31.9905L54.357 37.6252L56.1391 42.6131H52.3848ZM47.0667 48.0095L53.899 31.0638L49.3695 31.0642L44.6958 42.0149L41.372 31.0642H37.8905L34.3221 42.0149L31.8053 37.0246L29.5278 44.0413L31.8403 48.0095H36.2979L39.5228 38.1892L42.5972 48.0095H47.0667ZM25.047 42.1921H22.257V48.0095H17.9574V31.0638H24.972C26.9662 31.0638 28.4812 31.6366 29.5166 32.7827C29.714 32.9996 29.8894 33.2302 30.0427 33.4735L28.0261 39.6864L27.3047 41.9091C26.6447 42.0979 25.8922 42.1921 25.047 42.1921ZM26.5567 36.5962C26.5567 35.9141 26.3545 35.3692 25.95 34.9621C25.5458 34.555 24.8562 34.3519 23.8814 34.3519H22.257V38.9044H23.8695C24.9153 38.9044 25.6331 38.6803 26.0232 38.2324C26.3787 37.8293 26.5567 37.284 26.5567 36.5962Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "12:47",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=12:47",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2520/ea08/ee347109a60f14865c2f31a754a58a8b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M12 40C12 24.536 24.536 12 40 12C55.464 12 68 24.536 68 40C68 55.464 55.464 68 40 68C24.536 68 12 55.464 12 40Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M22.2571 42.1922H25.0471C25.8922 42.1922 26.6448 42.098 27.3048 41.9093L28.0262 39.6865L30.0428 33.4736C29.8895 33.2303 29.7141 32.9998 29.5166 32.7828C28.4812 31.6367 26.9663 31.064 24.9721 31.064H17.9575V48.0097H22.2571V42.1922Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M53.899 31.064L47.0668 48.0097H42.5973L39.5229 38.1893L36.298 48.0097H31.8404L29.5278 44.0414L31.8054 37.0247L34.3221 42.0151L37.8905 31.0643H41.3721L44.6958 42.0151L49.3696 31.0643L53.899 31.064Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M51.0845 45.9009L52.3847 42.6128H56.139L54.3569 37.625L56.5855 31.9902L62.9677 48.936H58.2611L57.1704 45.9009H51.0845Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const webComponents = {
	id: "1:73",
	categories: [
		"code"
	],
	terms: [
		"web",
		"components"
	],
	variants: {
		color: {
			id: "1:104",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:104",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3197/1593/6ccd91c2745135bdbb2754f78adff8c2",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.9999 40.023L65.0486 51.7174L55.3008 39.8633L65.0486 28.3286L71.9999 40.023Z\" fill=\"#166DA5\" class=\"fill-green\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64.2897 53.7128L53.7029 41.0605L47.3508 51.6773L57.2185 66.0857L64.2897 53.7128Z\" fill=\"#8FDB69\" class=\"fill-green\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64.1698 26.2534L53.7029 38.9456L47.3508 28.3288L57.2185 14.0801L64.1698 26.2534Z\" fill=\"#166DA5\" class=\"fill-green\" />\n  <path opacity=\"0.95\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.2498 26.2531H64.1699L57.1386 14H39.281L32.2498 26.2531ZM53.7029 38.9852H71.3609L65.0088 28.2887H47.3109\" fill=\"url(#paint0_linear)\" />\n  <path opacity=\"0.95\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64.2896 53.7531H32.2097L39.2409 65.9264H57.2185L64.2896 53.7531ZM53.7029 41.021H71.3608L65.0087 51.7176H47.3108\" fill=\"url(#paint1_linear)\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.2409 65.9258L24.2197 39.9827L39.4407 14.0396H22.9813L8 39.9827L22.9813 65.9258H39.2409Z\" fill=\"#010101\" class=\"fill-grey\" />\n  <defs>\n    <linearGradient id=\"paint0_linear\" x1=\"32.2498\" y1=\"26.4926\" x2=\"71.3609\" y2=\"26.4926\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#2A3B8F\" />\n      <stop offset=\"1\" stop-color=\"#29ABE2\" />\n    </linearGradient>\n    <linearGradient id=\"paint1_linear\" x1=\"71.3608\" y1=\"53.4737\" x2=\"32.2097\" y2=\"53.4737\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#B4D44E\" />\n      <stop offset=\"1\" stop-color=\"#E7F716\" />\n    </linearGradient>\n  </defs>\n</svg>"
		},
		bold: {
			id: "1:94",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:94",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca32/075a/8e07e5c0d64e86e2ad57b07c0aa253b2",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.2497 26.2531H64.1698L57.1386 14H39.2809L32.2497 26.2531ZM53.7029 38.9852H71.3608L65.0088 28.2887H47.3109\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64.2897 53.7529H32.2098L39.241 65.9263H57.2185L64.2897 53.7529ZM53.7029 41.0208H71.3609L65.0088 51.7174H47.3109\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.241 65.9263L24.2197 39.9829L39.4407 14.0397H22.9813L8 39.9829L22.9813 65.926L39.241 65.9263Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "1:80",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:80",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b2d/71dc/9f717401b12695ff27f97fdb712b5d17",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M39.2409 65.9258L24.2197 39.9827L39.4407 14.0396H22.9813L8 39.9827L22.9813 65.9258H39.2409Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M32.2498 26.2531H64.1699L57.1386 14H39.281L32.2498 26.2531Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M71.361 38.9851H53.703L47.311 28.2886H65.0089L71.361 38.9851Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M64.1699 26.2529L48.7882 26.2529L47.311 28.2884H62.4912L64.1699 26.2529Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64.2896 53.7529H32.2097L39.2409 65.9263H57.2185L64.2896 53.7529Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M71.3607 41.021H53.7028L47.3108 51.7176H65.0087L71.3607 41.021Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M48.7722 53.7528L47.3108 51.7173H62.6198L64.2896 53.7128L48.7722 53.7528Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M71.3608 38.9854H56.0429L55.3008 39.8636L56.2525 41.0209H71.3608L71.9999 40.0232L71.3608 38.9854Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const stencil = {
	id: "1:54",
	categories: [
		"code"
	],
	terms: [
		"stencil"
	],
	variants: {
		color: {
			id: "1:71",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:71",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6311/c7fe/a5b55543433b89717997c84ecc6b2c97",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M31.6388 49.9614H56.1916L42.9194 64.5014H18.4988L31.6388 49.9614Z\" fill=\"black\" class=\"fill-grey\" />\n  <path d=\"M71.853 32.731H21.4121L8.14697 47.2707H58.588L71.853 32.731Z\" fill=\"black\" class=\"fill-grey\" />\n  <path d=\"M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z\" fill=\"black\" class=\"fill-grey\" />\n</svg>"
		},
		bold: {
			id: "1:67",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:67",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d05/5ed5/74ea9f1a9f2b77d929f9760228f0c8ca",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M31.6388 49.9614H56.1916L42.9194 64.5014H18.4988L31.6388 49.9614Z\" fill=\"currentColor\" />\n  <path d=\"M71.853 32.731H21.4121L8.14697 47.2707H58.588L71.853 32.731Z\" fill=\"currentColor\" />\n  <path d=\"M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "1:59",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=1:59",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f75/2c76/196154b0fd2ebc08cca3cab8f29bf2f5",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M31.6388 49.9619H56.1916L42.9194 64.5018H18.4988L31.6388 49.9619Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M71.853 32.7314H21.4121L8.14697 47.2712H58.588L71.853 32.7314Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M37.0384 15.498H61.5005L48.2896 30.0379H23.8079L37.0384 15.498Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const github = {
	id: "88:403",
	categories: [
		"code",
		"platform"
	],
	terms: [
		"github"
	],
	variants: {
		path: {
			id: "88:298",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:298",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d690/95dd/805472812f7897b3fd0706be889bf377",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.7375 57.675C29.7375 57.925 29.45 58.125 29.0875 58.125C28.675 58.1625 28.3875 57.9625 28.3875 57.675C28.3875 57.425 28.675 57.225 29.0375 57.225C29.4125 57.1875 29.7375 57.3875 29.7375 57.675ZM25.85 57.1125C25.7625 57.3625 26.0125 57.65 26.3875 57.725C26.7125 57.85 27.0875 57.725 27.1625 57.475C27.2375 57.225 27 56.9375 26.625 56.825C26.3 56.7375 25.9375 56.8625 25.85 57.1125ZM31.375 56.9C31.0125 56.9875 30.7625 57.225 30.8 57.5125C30.8375 57.7625 31.1625 57.925 31.5375 57.8375C31.9 57.75 32.15 57.5125 32.1125 57.2625C32.075 57.025 31.7375 56.8625 31.375 56.9ZM39.6 9C22.2625 9 9 22.1625 9 39.5C9 53.3625 17.725 65.225 30.1875 69.4C31.7875 69.6875 32.35 68.7 32.35 67.8875C32.35 67.1125 32.3125 62.8375 32.3125 60.2125C32.3125 60.2125 23.5625 62.0875 21.725 56.4875C21.725 56.4875 20.3 52.85 18.25 51.9125C18.25 51.9125 15.3875 49.95 18.45 49.9875C18.45 49.9875 21.5625 50.2375 23.275 53.2125C26.0125 58.0375 30.6 56.65 32.3875 55.825C32.675 53.825 33.4875 52.4375 34.3875 51.6125C27.4 50.8375 20.35 49.825 20.35 37.8C20.35 34.3625 21.3 32.6375 23.3 30.4375C22.975 29.625 21.9125 26.275 23.625 21.95C26.2375 21.1375 32.25 25.325 32.25 25.325C34.75 24.625 37.4375 24.2625 40.1 24.2625C42.7625 24.2625 45.45 24.625 47.95 25.325C47.95 25.325 53.9625 21.125 56.575 21.95C58.2875 26.2875 57.225 29.625 56.9 30.4375C58.9 32.65 60.125 34.375 60.125 37.8C60.125 49.8625 52.7625 50.825 45.775 51.6125C46.925 52.6 47.9 54.475 47.9 57.4125C47.9 61.625 47.8625 66.8375 47.8625 67.8625C47.8625 68.675 48.4375 69.6625 50.025 69.375C62.525 65.225 71 53.3625 71 39.5C71 22.1625 56.9375 9 39.6 9ZM21.15 52.1125C20.9875 52.2375 21.025 52.525 21.2375 52.7625C21.4375 52.9625 21.725 53.05 21.8875 52.8875C22.05 52.7625 22.0125 52.475 21.8 52.2375C21.6 52.0375 21.3125 51.95 21.15 52.1125ZM19.8 51.1C19.7125 51.2625 19.8375 51.4625 20.0875 51.5875C20.2875 51.7125 20.5375 51.675 20.625 51.5C20.7125 51.3375 20.5875 51.1375 20.3375 51.0125C20.0875 50.9375 19.8875 50.975 19.8 51.1ZM23.85 55.55C23.65 55.7125 23.725 56.0875 24.0125 56.325C24.3 56.6125 24.6625 56.65 24.825 56.45C24.9875 56.2875 24.9125 55.9125 24.6625 55.675C24.3875 55.3875 24.0125 55.35 23.85 55.55ZM22.425 53.7125C22.225 53.8375 22.225 54.1625 22.425 54.45C22.625 54.7375 22.9625 54.8625 23.125 54.7375C23.325 54.575 23.325 54.25 23.125 53.9625C22.95 53.675 22.625 53.55 22.425 53.7125Z\" stroke=\"currentColor\" />\n</svg>"
		},
		bold: {
			id: "88:307",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:307",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0d/be2a/7b39ca6ed94376820c3e6481e07b8d7d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.7375 57.675C29.7375 57.925 29.45 58.125 29.0875 58.125C28.675 58.1625 28.3875 57.9625 28.3875 57.675C28.3875 57.425 28.675 57.225 29.0375 57.225C29.4125 57.1875 29.7375 57.3875 29.7375 57.675ZM25.85 57.1125C25.7625 57.3625 26.0125 57.65 26.3875 57.725C26.7125 57.85 27.0875 57.725 27.1625 57.475C27.2375 57.225 27 56.9375 26.625 56.825C26.3 56.7375 25.9375 56.8625 25.85 57.1125ZM31.375 56.9C31.0125 56.9875 30.7625 57.225 30.8 57.5125C30.8375 57.7625 31.1625 57.925 31.5375 57.8375C31.9 57.75 32.15 57.5125 32.1125 57.2625C32.075 57.025 31.7375 56.8625 31.375 56.9ZM39.6 9C22.2625 9 9 22.1625 9 39.5C9 53.3625 17.725 65.225 30.1875 69.4C31.7875 69.6875 32.35 68.7 32.35 67.8875C32.35 67.1125 32.3125 62.8375 32.3125 60.2125C32.3125 60.2125 23.5625 62.0875 21.725 56.4875C21.725 56.4875 20.3 52.85 18.25 51.9125C18.25 51.9125 15.3875 49.95 18.45 49.9875C18.45 49.9875 21.5625 50.2375 23.275 53.2125C26.0125 58.0375 30.6 56.65 32.3875 55.825C32.675 53.825 33.4875 52.4375 34.3875 51.6125C27.4 50.8375 20.35 49.825 20.35 37.8C20.35 34.3625 21.3 32.6375 23.3 30.4375C22.975 29.625 21.9125 26.275 23.625 21.95C26.2375 21.1375 32.25 25.325 32.25 25.325C34.75 24.625 37.4375 24.2625 40.1 24.2625C42.7625 24.2625 45.45 24.625 47.95 25.325C47.95 25.325 53.9625 21.125 56.575 21.95C58.2875 26.2875 57.225 29.625 56.9 30.4375C58.9 32.65 60.125 34.375 60.125 37.8C60.125 49.8625 52.7625 50.825 45.775 51.6125C46.925 52.6 47.9 54.475 47.9 57.4125C47.9 61.625 47.8625 66.8375 47.8625 67.8625C47.8625 68.675 48.4375 69.6625 50.025 69.375C62.525 65.225 71 53.3625 71 39.5C71 22.1625 56.9375 9 39.6 9ZM21.15 52.1125C20.9875 52.2375 21.025 52.525 21.2375 52.7625C21.4375 52.9625 21.725 53.05 21.8875 52.8875C22.05 52.7625 22.0125 52.475 21.8 52.2375C21.6 52.0375 21.3125 51.95 21.15 52.1125ZM19.8 51.1C19.7125 51.2625 19.8375 51.4625 20.0875 51.5875C20.2875 51.7125 20.5375 51.675 20.625 51.5C20.7125 51.3375 20.5875 51.1375 20.3375 51.0125C20.0875 50.9375 19.8875 50.975 19.8 51.1ZM23.85 55.55C23.65 55.7125 23.725 56.0875 24.0125 56.325C24.3 56.6125 24.6625 56.65 24.825 56.45C24.9875 56.2875 24.9125 55.9125 24.6625 55.675C24.3875 55.3875 24.0125 55.35 23.85 55.55ZM22.425 53.7125C22.225 53.8375 22.225 54.1625 22.425 54.45C22.625 54.7375 22.9625 54.8625 23.125 54.7375C23.325 54.575 23.325 54.25 23.125 53.9625C22.95 53.675 22.625 53.55 22.425 53.7125Z\" fill=\"currentColor\" />\n</svg>"
		},
		color: {
			id: "88:321",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:321",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0d/be2a/7b39ca6ed94376820c3e6481e07b8d7d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M29.7375 57.675C29.7375 57.925 29.45 58.125 29.0875 58.125C28.675 58.1625 28.3875 57.9625 28.3875 57.675C28.3875 57.425 28.675 57.225 29.0375 57.225C29.4125 57.1875 29.7375 57.3875 29.7375 57.675ZM25.85 57.1125C25.7625 57.3625 26.0125 57.65 26.3875 57.725C26.7125 57.85 27.0875 57.725 27.1625 57.475C27.2375 57.225 27 56.9375 26.625 56.825C26.3 56.7375 25.9375 56.8625 25.85 57.1125ZM31.375 56.9C31.0125 56.9875 30.7625 57.225 30.8 57.5125C30.8375 57.7625 31.1625 57.925 31.5375 57.8375C31.9 57.75 32.15 57.5125 32.1125 57.2625C32.075 57.025 31.7375 56.8625 31.375 56.9ZM39.6 9C22.2625 9 9 22.1625 9 39.5C9 53.3625 17.725 65.225 30.1875 69.4C31.7875 69.6875 32.35 68.7 32.35 67.8875C32.35 67.1125 32.3125 62.8375 32.3125 60.2125C32.3125 60.2125 23.5625 62.0875 21.725 56.4875C21.725 56.4875 20.3 52.85 18.25 51.9125C18.25 51.9125 15.3875 49.95 18.45 49.9875C18.45 49.9875 21.5625 50.2375 23.275 53.2125C26.0125 58.0375 30.6 56.65 32.3875 55.825C32.675 53.825 33.4875 52.4375 34.3875 51.6125C27.4 50.8375 20.35 49.825 20.35 37.8C20.35 34.3625 21.3 32.6375 23.3 30.4375C22.975 29.625 21.9125 26.275 23.625 21.95C26.2375 21.1375 32.25 25.325 32.25 25.325C34.75 24.625 37.4375 24.2625 40.1 24.2625C42.7625 24.2625 45.45 24.625 47.95 25.325C47.95 25.325 53.9625 21.125 56.575 21.95C58.2875 26.2875 57.225 29.625 56.9 30.4375C58.9 32.65 60.125 34.375 60.125 37.8C60.125 49.8625 52.7625 50.825 45.775 51.6125C46.925 52.6 47.9 54.475 47.9 57.4125C47.9 61.625 47.8625 66.8375 47.8625 67.8625C47.8625 68.675 48.4375 69.6625 50.025 69.375C62.525 65.225 71 53.3625 71 39.5C71 22.1625 56.9375 9 39.6 9ZM21.15 52.1125C20.9875 52.2375 21.025 52.525 21.2375 52.7625C21.4375 52.9625 21.725 53.05 21.8875 52.8875C22.05 52.7625 22.0125 52.475 21.8 52.2375C21.6 52.0375 21.3125 51.95 21.15 52.1125ZM19.8 51.1C19.7125 51.2625 19.8375 51.4625 20.0875 51.5875C20.2875 51.7125 20.5375 51.675 20.625 51.5C20.7125 51.3375 20.5875 51.1375 20.3375 51.0125C20.0875 50.9375 19.8875 50.975 19.8 51.1ZM23.85 55.55C23.65 55.7125 23.725 56.0875 24.0125 56.325C24.3 56.6125 24.6625 56.65 24.825 56.45C24.9875 56.2875 24.9125 55.9125 24.6625 55.675C24.3875 55.3875 24.0125 55.35 23.85 55.55ZM22.425 53.7125C22.225 53.8375 22.225 54.1625 22.425 54.45C22.625 54.7375 22.9625 54.8625 23.125 54.7375C23.325 54.575 23.325 54.25 23.125 53.9625C22.95 53.675 22.625 53.55 22.425 53.7125Z\" fill=\"black\" class=\"fill-grey\" />\n</svg>"
		}
	}
};
const discord = {
	id: "70:10",
	categories: [
		"communication"
	],
	terms: [
		"discord"
	],
	variants: {
		color: {
			id: "70:60",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:60",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a993/d724/c465923063c92bf0e3020e748ac80aab",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2734 62.4191C55.2734 62.4191 53.2991 60.0717 51.6538 58.0519C58.838 56.0321 61.5801 51.6103 61.5801 51.6103C59.3316 53.0843 57.1928 54.1215 55.2734 54.8311C52.5313 55.9775 49.8989 56.6872 47.3213 57.1785C42.0566 58.1611 37.2305 57.8881 33.1174 57.1239C29.9914 56.5234 27.3042 55.7046 25.0557 54.7765C23.7943 54.2852 22.4233 53.6847 21.0523 52.9205C20.8877 52.8113 20.7232 52.7567 20.5587 52.6475C20.449 52.5929 20.3942 52.5384 20.3393 52.5384C19.3522 51.9925 18.8038 51.6103 18.8038 51.6103C18.8038 51.6103 21.4362 55.9229 28.401 57.9973C26.7558 60.0717 24.7266 62.4737 24.7266 62.4737C12.6067 62.0916 8 54.2306 8 54.2306C8 36.8165 15.8972 22.6778 15.8972 22.6778C23.7943 16.8367 31.2528 17.0005 31.2528 17.0005L31.8012 17.6555C21.9297 20.4396 17.4327 24.7522 17.4327 24.7522C17.4327 24.7522 18.6392 24.0971 20.6684 23.2237C26.5364 20.658 31.1979 20.0029 33.1174 19.7845C33.4464 19.7299 33.7207 19.6754 34.0497 19.6754C37.395 19.2386 41.1791 19.1295 45.1277 19.5662C50.3376 20.1667 55.9314 21.6952 61.635 24.7522C61.635 24.7522 57.3025 20.658 47.9794 17.8739L48.7472 17.0005C48.7472 17.0005 56.2605 16.8367 64.1028 22.6778C64.1028 22.6778 72 36.8165 72 54.2306C72 54.176 67.3933 62.037 55.2734 62.4191ZM44.1954 43.1486C44.1954 39.8187 46.6632 37.1438 49.7892 37.1438C52.8603 37.1438 55.383 39.8187 55.383 43.1486C55.383 46.4786 52.9152 49.1535 49.7892 49.1535C46.7181 49.1535 44.1954 46.4786 44.1954 43.1486ZM24.1782 43.1486C24.1782 39.8187 26.6461 37.1438 29.7721 37.1438C32.898 37.1438 35.4207 39.8187 35.3659 43.1486C35.3659 46.4786 32.898 49.1535 29.7721 49.1535C26.7009 49.1535 24.1782 46.4786 24.1782 43.1486Z\" fill=\"#7289DA\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "70:51",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:51",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a3a/66e0/8f0f3b89fb9c27c44a296231a0c67dc0",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M55.2734 62.4191C55.2734 62.4191 53.2991 60.0717 51.6538 58.0519C58.838 56.0321 61.5801 51.6103 61.5801 51.6103C59.3316 53.0843 57.1928 54.1215 55.2734 54.8311C52.5313 55.9775 49.8989 56.6872 47.3213 57.1785C42.0566 58.1611 37.2305 57.8881 33.1174 57.1239C29.9914 56.5234 27.3042 55.7046 25.0557 54.7765C23.7943 54.2852 22.4233 53.6847 21.0523 52.9205C20.8877 52.8113 20.7232 52.7567 20.5587 52.6475C20.449 52.5929 20.3942 52.5384 20.3393 52.5384C19.3522 51.9925 18.8038 51.6103 18.8038 51.6103C18.8038 51.6103 21.4362 55.9229 28.401 57.9973C26.7558 60.0717 24.7266 62.4737 24.7266 62.4737C12.6067 62.0916 8 54.2306 8 54.2306C8 36.8165 15.8972 22.6778 15.8972 22.6778C23.7943 16.8367 31.2528 17.0005 31.2528 17.0005L31.8012 17.6555C21.9297 20.4396 17.4327 24.7522 17.4327 24.7522C17.4327 24.7522 18.6392 24.0971 20.6684 23.2237C26.5364 20.658 31.1979 20.0029 33.1174 19.7845C33.4464 19.7299 33.7207 19.6754 34.0497 19.6754C37.395 19.2386 41.1791 19.1295 45.1277 19.5662C50.3376 20.1667 55.9314 21.6952 61.635 24.7522C61.635 24.7522 57.3025 20.658 47.9794 17.8739L48.7472 17.0005C48.7472 17.0005 56.2605 16.8367 64.1028 22.6778C64.1028 22.6778 72 36.8165 72 54.2306C72 54.176 67.3933 62.037 55.2734 62.4191ZM44.1954 43.1486C44.1954 39.8187 46.6632 37.1438 49.7892 37.1438C52.8603 37.1438 55.383 39.8187 55.383 43.1486C55.383 46.4786 52.9152 49.1535 49.7892 49.1535C46.7181 49.1535 44.1954 46.4786 44.1954 43.1486ZM24.1782 43.1486C24.1782 39.8187 26.6461 37.1438 29.7721 37.1438C32.898 37.1438 35.4207 39.8187 35.3659 43.1486C35.3659 46.4786 32.898 49.1535 29.7721 49.1535C26.7009 49.1535 24.1782 46.4786 24.1782 43.1486Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "70:19",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:19",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e097/a0bb/4c97ff0a64c0755367579b666642472f",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M51.6538 58.0519C53.2991 60.0717 55.2734 62.4191 55.2734 62.4191C67.3933 62.037 72 54.176 72 54.2306C72 36.8165 64.1028 22.6778 64.1028 22.6778C56.2605 16.8367 48.7472 17.0005 48.7472 17.0005L47.9794 17.8739C57.3025 20.658 61.635 24.7522 61.635 24.7522C55.9314 21.6952 50.3376 20.1667 45.1277 19.5662C41.1791 19.1295 37.395 19.2386 34.0497 19.6754C33.7207 19.6754 33.4464 19.7299 33.1174 19.7845C31.1979 20.0029 26.5364 20.658 20.6684 23.2237C18.6392 24.0971 17.4327 24.7522 17.4327 24.7522C17.4327 24.7522 21.9297 20.4396 31.8012 17.6555L31.2528 17.0005C31.2528 17.0005 23.7943 16.8367 15.8972 22.6778C15.8972 22.6778 8 36.8165 8 54.2306C8 54.2306 12.6067 62.0916 24.7266 62.4737C24.7266 62.4737 26.7558 60.0717 28.401 57.9973C21.4362 55.9229 18.8038 51.6103 18.8038 51.6103C18.8038 51.6103 19.3522 51.9925 20.3393 52.5384C20.3942 52.5384 20.449 52.5929 20.5587 52.6475C20.7232 52.7567 20.8877 52.8113 21.0523 52.9205C22.4233 53.6847 23.7943 54.2852 25.0557 54.7765C27.3042 55.7046 29.9914 56.5234 33.1174 57.1239C37.2305 57.8881 42.0566 58.1611 47.3213 57.1785C49.8989 56.6872 52.5313 55.9775 55.2734 54.8311C57.1928 54.1215 59.3316 53.0843 61.5801 51.6103C61.5801 51.6103 58.838 56.0321 51.6538 58.0519Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M24.1782 43.1484C24.1782 39.8184 26.6461 37.1436 29.7721 37.1436C32.898 37.1436 35.4207 39.8184 35.3659 43.1484C35.3659 46.4784 32.898 49.1533 29.7721 49.1533C26.7009 49.1533 24.1782 46.4784 24.1782 43.1484Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M44.1953 43.1484C44.1953 39.8184 46.6632 37.1436 49.7891 37.1436C52.8603 37.1436 55.383 39.8184 55.383 43.1484C55.383 46.4784 52.9151 49.1533 49.7891 49.1533C46.718 49.1533 44.1953 46.4784 44.1953 43.1484Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const discordFull = {
	id: "70:14",
	categories: [
		"communication"
	],
	terms: [
		"discord",
		"full"
	],
	variants: {
		color: {
			id: "70:62",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:62",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6b4/b75e/d61a1c1c4af6fc0f1810df712d50413d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.5563 8H61.4118C65.0257 8 67.968 10.9692 68 14.6162V72L61.0919 65.9647L57.2222 62.3823L53.1285 58.5739L54.8235 64.4801H18.5563C14.9423 64.4801 12 61.5108 12 57.8638V14.6162C12 10.9692 14.9423 8 18.5563 8ZM46.9195 48.3746C47.8963 49.5738 49.0686 50.9676 49.0686 50.9676C55.8863 50.7526 58.7 46.5519 58.9771 46.1382C58.9924 46.1153 59 46.104 59 46.1057C59 35.7661 54.3111 27.3712 54.3111 27.3712C49.6547 23.903 45.1937 24.0003 45.1937 24.0003L44.7378 24.5189C50.2734 26.1719 52.8458 28.6029 52.8458 28.6029C49.4593 26.7878 46.138 25.8802 43.0446 25.5237C40.7001 25.2644 38.4533 25.3292 36.467 25.5885C36.2965 25.5885 36.1507 25.6132 35.9865 25.641C35.9626 25.6451 35.9383 25.6492 35.9135 25.6533C34.7738 25.783 32.006 26.1719 28.5219 27.6953C27.3171 28.2139 26.6007 28.6029 26.6007 28.6029C26.6007 28.6029 29.2708 26.0423 35.132 24.3892L34.8063 24.0003C34.8063 24.0003 30.3779 23.903 25.6889 27.3712C25.6889 27.3712 21 35.7661 21 46.1057C21 46.1057 23.7352 50.7731 30.9314 51C30.9314 51 32.1362 49.5738 33.1131 48.3422C28.9777 47.1105 27.4147 44.5499 27.4147 44.5499C27.4147 44.5499 27.7404 44.7768 28.3265 45.1009C28.3466 45.1009 28.3667 45.1133 28.3945 45.1304C28.4117 45.141 28.4319 45.1533 28.4567 45.1657C28.5056 45.1981 28.5544 45.2224 28.6033 45.2468C28.6521 45.2711 28.7009 45.2954 28.7498 45.3278C29.5638 45.7816 30.3779 46.1381 31.1268 46.4298C32.4619 46.9808 34.0574 47.467 35.9135 47.8236C38.3556 48.2773 41.2211 48.4394 44.347 47.856C45.8775 47.5643 47.4404 47.1429 49.0686 46.4622C50.2082 46.0409 51.4782 45.425 52.8132 44.5499C52.8132 44.5499 51.1851 47.1753 46.9195 48.3746ZM45.8123 35.9604C43.9563 35.9604 42.491 37.5486 42.491 39.5258C42.491 41.5029 43.9889 43.0911 45.8123 43.0911C47.6684 43.0911 49.1337 41.5029 49.1337 39.5258C49.1337 37.5486 47.6358 35.9604 45.8123 35.9604ZM33.9272 35.9604C32.0711 35.9604 30.6058 37.5486 30.6058 39.5258C30.6058 41.5029 32.1037 43.0911 33.9272 43.0911C35.7832 43.0911 37.2485 41.5029 37.2485 39.5258C37.2811 37.5486 35.7832 35.9604 33.9272 35.9604Z\" fill=\"#7289DA\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "70:53",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:53",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed77/55d9/05ad1688e5b61c9e54ee5a2692380494",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M18.5563 8H61.4118C65.0257 8 67.968 10.9692 68 14.6162V72L61.0919 65.9647L57.2222 62.3823L53.1285 58.5739L54.8235 64.4801H18.5563C14.9423 64.4801 12 61.5108 12 57.8638V14.6162C12 10.9692 14.9423 8 18.5563 8ZM46.9195 48.3746C47.8963 49.5738 49.0686 50.9676 49.0686 50.9676C55.8863 50.7526 58.7 46.5519 58.9771 46.1382C58.9924 46.1153 59 46.104 59 46.1057C59 35.7661 54.3111 27.3712 54.3111 27.3712C49.6547 23.903 45.1937 24.0003 45.1937 24.0003L44.7378 24.5189C50.2734 26.1719 52.8458 28.6029 52.8458 28.6029C49.4593 26.7878 46.138 25.8802 43.0446 25.5237C40.7001 25.2644 38.4533 25.3292 36.467 25.5885C36.2965 25.5885 36.1507 25.6132 35.9865 25.641C35.9626 25.6451 35.9383 25.6492 35.9135 25.6533C34.7738 25.783 32.006 26.1719 28.5219 27.6953C27.3171 28.2139 26.6007 28.6029 26.6007 28.6029C26.6007 28.6029 29.2708 26.0423 35.132 24.3892L34.8063 24.0003C34.8063 24.0003 30.3779 23.903 25.6889 27.3712C25.6889 27.3712 21 35.7661 21 46.1057C21 46.1057 23.7352 50.7731 30.9314 51C30.9314 51 32.1362 49.5738 33.1131 48.3422C28.9777 47.1105 27.4147 44.5499 27.4147 44.5499C27.4147 44.5499 27.7404 44.7768 28.3265 45.1009C28.3466 45.1009 28.3667 45.1133 28.3945 45.1304C28.4117 45.141 28.4319 45.1533 28.4567 45.1657C28.5056 45.1981 28.5544 45.2224 28.6033 45.2468C28.6521 45.2711 28.7009 45.2954 28.7498 45.3278C29.5638 45.7816 30.3779 46.1381 31.1268 46.4298C32.4619 46.9808 34.0574 47.467 35.9135 47.8236C38.3556 48.2773 41.2211 48.4394 44.347 47.856C45.8775 47.5643 47.4404 47.1429 49.0686 46.4622C50.2082 46.0409 51.4782 45.425 52.8132 44.5499C52.8132 44.5499 51.1851 47.1753 46.9195 48.3746ZM45.8123 35.9604C43.9563 35.9604 42.491 37.5486 42.491 39.5258C42.491 41.5029 43.9889 43.0911 45.8123 43.0911C47.6684 43.0911 49.1337 41.5029 49.1337 39.5258C49.1337 37.5486 47.6358 35.9604 45.8123 35.9604ZM33.9272 35.9604C32.0711 35.9604 30.6058 37.5486 30.6058 39.5258C30.6058 41.5029 32.1037 43.0911 33.9272 43.0911C35.7832 43.0911 37.2485 41.5029 37.2485 39.5258C37.2811 37.5486 35.7832 35.9604 33.9272 35.9604Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "70:20",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=70:20",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/817e/4bad/db0e5200f5ab1da6c1052b61b1b02ef7",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M61.4118 8H18.5563C14.9423 8 12 10.9692 12 14.6162V57.8638C12 61.5108 14.9423 64.4801 18.5563 64.4801H54.8235L53.1285 58.5739L57.2222 62.3823L61.0919 65.9647L68 72V14.6162C67.968 10.9692 65.0257 8 61.4118 8Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M46.9195 48.3746C47.8963 49.5738 49.0686 50.9676 49.0686 50.9676C56.2648 50.7407 59 46.0733 59 46.1057C59 35.7661 54.3111 27.3712 54.3111 27.3712C49.6547 23.903 45.1937 24.0003 45.1937 24.0003L44.7378 24.5189C50.2734 26.1719 52.8458 28.6029 52.8458 28.6029C49.4593 26.7878 46.138 25.8802 43.0446 25.5237C40.7001 25.2644 38.4533 25.3292 36.467 25.5885C36.2716 25.5885 36.1088 25.6209 35.9135 25.6533C34.7738 25.783 32.006 26.1719 28.5219 27.6953C27.3171 28.2139 26.6007 28.6029 26.6007 28.6029C26.6007 28.6029 29.2708 26.0423 35.132 24.3892L34.8063 24.0003C34.8063 24.0003 30.3779 23.903 25.6889 27.3712C25.6889 27.3712 21 35.7661 21 46.1057C21 46.1057 23.7352 50.7731 30.9314 51C30.9314 51 32.1362 49.5738 33.1131 48.3422C28.9777 47.1105 27.4147 44.5499 27.4147 44.5499C27.4147 44.5499 27.7404 44.7768 28.3265 45.1009C28.359 45.1009 28.3916 45.1333 28.4567 45.1657C28.5544 45.2305 28.6521 45.263 28.7498 45.3278C29.5638 45.7816 30.3779 46.1381 31.1268 46.4298C32.4619 46.9808 34.0574 47.467 35.9135 47.8236C38.3556 48.2773 41.2211 48.4394 44.347 47.856C45.8775 47.5643 47.4404 47.1429 49.0686 46.4622C50.2082 46.0409 51.4782 45.425 52.8132 44.5499C52.8132 44.5499 51.1851 47.1753 46.9195 48.3746Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M30.6057 39.5253C30.6057 37.5482 32.071 35.96 33.9271 35.96C35.7831 35.96 37.2809 37.5482 37.2484 39.5253C37.2484 41.5025 35.7831 43.0907 33.9271 43.0907C32.1036 43.0907 30.6057 41.5025 30.6057 39.5253Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M42.491 39.5253C42.491 37.5482 43.9563 35.96 45.8123 35.96C47.6358 35.96 49.1336 37.5482 49.1336 39.5253C49.1336 41.5025 47.6683 43.0907 45.8123 43.0907C43.9888 43.0907 42.491 41.5025 42.491 39.5253Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const npm = {
	id: "102:11",
	categories: [
		"platform"
	],
	terms: [
		"npm"
	],
	variants: {
		path: {
			id: "102:6",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=102:6",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/970c/a76a/488b6ebf1838f37d1e544addf29f88dd",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 42H36V34H40V42ZM76 26V50H40V54H24V50H4V26H76ZM24 30H8V46H16V34H20V46H24V30ZM44 30H28V50H36V46H44V30ZM72 30H48V46H56V34H60V46H64V34H68V46H72V30Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		},
		bold: {
			id: "102:4",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=102:4",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdbd/2d76/1b0d585ebba50b80b87d422b38b06c6d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 42H36V34H40V42ZM76 26V50H40V54H24V50H4V26H76ZM24 30H8V46H16V34H20V46H24V30ZM44 30H28V50H36V46H44V30ZM72 30H48V46H56V34H60V46H64V34H68V46H72V30Z\" fill=\"currentColor\" />\n</svg>"
		},
		color: {
			id: "102:2",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=102:2",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9838/fddb/c7c72311d52aceac0521a5ab472da62d",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 42H36V34H40V42ZM76 26V50H40V54H24V50H4V26H76ZM24 30H8V46H16V34H20V46H24V30ZM44 30H28V50H36V46H44V30ZM72 30H48V46H56V34H60V46H64V34H68V46H72V30Z\" fill=\"#CB3837\" class=\"fill-red\" />\n</svg>"
		}
	}
};
const chrome = {
	id: "12:24",
	categories: [
		"tech"
	],
	terms: [
		"chrome"
	],
	variants: {
		color: {
			id: "88:117",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:117",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/578e/efa6/89ba9186203f17506bb4efea6741fa17",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 27.4894C33.0906 27.4894 27.4894 33.0906 27.4894 40C27.4894 42.1926 28.0534 44.2535 29.0443 46.0455L16.6389 24.5588L16.6389 24.5588C18.9417 21.0819 21.9998 18.149 25.5794 15.9941L26.4658 15.4824C30.475 13.2645 35.0861 12.0014 39.9919 12H40H40.008C50.9721 12.0031 60.4632 18.3079 65.0564 27.4894H40Z\" fill=\"#DE5347\" class=\"fill-red\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M50.7263 46.4429L38.3093 67.9497L38.2803 67.9999H40.0001C55.464 67.9999 68.0001 55.4639 68.0001 39.9999C68.0001 35.5033 66.9402 31.2545 65.0566 27.4893H40.0001C46.9095 27.4893 52.5107 33.0904 52.5107 39.9999C52.5107 42.1933 51.9462 44.2549 50.9546 46.0474L50.7263 46.4429Z\" fill=\"#FFCD42\" class=\"fill-brown\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 52.5105C44.5527 52.5105 48.5374 50.0786 50.726 46.4431L38.3093 67.9497C34.0319 67.6948 30.0132 66.4798 26.4655 64.5173C26.1668 64.3521 25.8716 64.1816 25.5796 64.0058C17.4428 59.1075 12 50.1893 12 39.9998C12 34.2931 13.7073 28.985 16.6389 24.5586L29.0453 46.0471L29.274 46.443C31.4626 50.0786 35.4473 52.5105 40 52.5105Z\" fill=\"#1CA261\" class=\"fill-green\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 50.1274C45.5933 50.1274 50.1276 45.5931 50.1276 39.9997C50.1276 34.4064 45.5933 29.8721 40 29.8721C34.4066 29.8721 29.8723 34.4064 29.8723 39.9997C29.8723 45.5931 34.4066 50.1274 40 50.1274Z\" fill=\"#4B8BF5\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "88:103",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:103",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e968/406a/70a434b5f446673fd279e993beacead7",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5777 38.5053C28.3164 32.3005 33.5964 27.4894 40 27.4894H65.0564C60.4632 18.3079 50.9721 12.0031 40.008 12H40H39.9919C35.0861 12.0014 30.475 13.2645 26.4658 15.4824L25.5794 15.9941C22.7825 17.6778 20.304 19.8365 18.2554 22.3585L18.804 23.3088L27.5777 38.5053Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M47.5048 29.9893C50.5445 32.2716 52.5107 35.9061 52.5107 39.9999C52.5107 42.1933 51.9462 44.255 50.9546 46.0474L50.7263 46.4429L38.3093 67.9498L38.2803 67.9999H40.0001C55.464 67.9999 68.0001 55.4639 68.0001 39.9999C68.0001 36.4726 67.3479 33.0978 66.1575 29.9893H65.0565H47.5048Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M44.9151 51.508C43.4062 52.1533 41.7448 52.5105 40 52.5105C35.4473 52.5105 31.4626 50.0786 29.274 46.443L29.0453 46.0471L16.6389 24.5586C13.7073 28.985 12 34.2931 12 39.9998C12 50.1893 17.4428 59.1075 25.5796 64.0058C25.8716 64.1816 26.1668 64.3521 26.4655 64.5173C29.2511 66.0583 32.3271 67.1383 35.5907 67.6546L36.1172 66.7463L36.1442 66.6997L36.1462 66.6961L44.9151 51.508Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40 50.1274C45.5933 50.1274 50.1276 45.5931 50.1276 39.9997C50.1276 34.4064 45.5933 29.8721 40 29.8721C34.4066 29.8721 29.8723 34.4064 29.8723 39.9997C29.8723 45.5931 34.4066 50.1274 40 50.1274Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:94",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:94",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9375/7efa/7c0ae6436a59881699b3ada024b3b151",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M40 27.4894C33.0905 27.4894 27.4893 33.0906 27.4893 40C27.4893 42.1926 28.0534 44.2535 29.0443 46.0455L16.6389 24.5588C18.9417 21.0819 21.9998 18.149 25.5794 15.9941L26.4657 15.4824C30.475 13.2645 35.086 12.0014 39.9919 12H40.008C50.972 12.0031 60.4632 18.3079 65.0564 27.4894H40Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M38.3093 67.9497L38.2803 67.9999H40.0001C55.464 67.9999 68.0001 55.4639 68.0001 39.9999C68.0001 35.5033 66.9402 31.2545 65.0566 27.4893H40.0001C46.9095 27.4893 52.5107 33.0904 52.5107 39.9999C52.5107 42.1933 51.9462 44.2549 50.9546 46.0474L38.3093 67.9497Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n  <path d=\"M40 52.5105C44.5527 52.5105 48.5374 50.0786 50.726 46.4431L38.3093 67.9497C34.0319 67.6948 30.0132 66.4798 26.4655 64.5173C26.1668 64.3521 25.8716 64.1816 25.5796 64.0058C17.4428 59.1075 12 50.1893 12 39.9998C12 34.2931 13.7073 28.985 16.6389 24.5586L29.274 46.443C31.4626 50.0786 35.4473 52.5105 40 52.5105Z\" stroke=\"currentColor\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const firefox = {
	id: "12:23",
	categories: [
		"tech"
	],
	terms: [
		"firefox"
	],
	variants: {
		color: {
			id: "88:92",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:92",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6258/a91a/796efe389d68f215c4ee2699bbcac436",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M62.3625 22.8811C59.8703 19.6081 56.6671 16.9316 52.9899 15.0495C49.3126 13.1673 45.2549 12.1275 41.1173 12.0071C34.6169 11.8782 30.1265 13.8124 27.586 15.3675C30.9852 13.4153 35.9046 12.3079 40.2116 12.3626C51.2906 12.5012 63.1896 19.9725 64.9568 33.4389C66.9864 48.8972 56.1126 61.7989 40.8163 61.8383C23.9879 61.8806 13.7524 47.1265 16.428 33.8742C16.4777 33.2244 16.5743 32.5789 16.717 31.9428C17.0472 28.5463 18.044 25.2464 19.6516 22.2282C17.7136 23.2213 15.2459 26.362 14.0281 29.2712C12.2554 33.71 11.6304 38.5168 12.2099 43.2554C12.2519 43.6144 12.2896 43.9727 12.3372 44.3289C13.0629 48.4666 14.7272 52.3873 17.2046 55.7959C19.682 59.2047 22.9082 62.0123 26.6401 64.0077C30.3719 66.0031 34.5124 67.1341 38.7497 67.3157C42.9868 67.4973 47.2105 66.7246 51.1025 65.056C54.9945 63.3873 58.4535 60.8661 61.2191 57.6821C63.9847 54.4982 65.9848 50.7344 67.0687 46.6743C68.1527 42.6141 68.2924 38.3634 67.4772 34.242C66.662 30.1208 64.9132 26.2363 62.3625 22.8811Z\" fill=\"url(#paint0_radial)\" />\n  <path opacity=\"0.67\" d=\"M62.3625 22.8811C59.8703 19.6081 56.6671 16.9316 52.9899 15.0495C49.3126 13.1673 45.2549 12.1275 41.1173 12.0071C34.6169 11.8782 30.1265 13.8124 27.586 15.3675C30.9852 13.4153 35.9046 12.3079 40.2116 12.3626C51.2906 12.5012 63.1896 19.9725 64.9568 33.4389C66.9864 48.8972 56.1126 61.7989 40.8163 61.8383C23.9879 61.8806 13.7524 47.1265 16.428 33.8742C16.4777 33.2244 16.5743 32.5789 16.717 31.9428C17.0472 28.5463 18.044 25.2464 19.6516 22.2282C17.7136 23.2213 15.2459 26.362 14.0281 29.2712C12.2554 33.71 11.6304 38.5168 12.2099 43.2554C12.2519 43.6144 12.2896 43.9727 12.3372 44.3289C13.0629 48.4666 14.7272 52.3873 17.2046 55.7959C19.682 59.2047 22.9082 62.0123 26.6401 64.0077C30.3719 66.0031 34.5124 67.1341 38.7497 67.3157C42.9868 67.4973 47.2105 66.7246 51.1025 65.056C54.9945 63.3873 58.4535 60.8661 61.2191 57.6821C63.9847 54.4982 65.9848 50.7344 67.0687 46.6743C68.1527 42.6141 68.2924 38.3634 67.4772 34.242C66.662 30.1208 64.9132 26.2363 62.3625 22.8811Z\" fill=\"url(#paint1_radial)\" />\n  <path d=\"M62.3625 22.8811C59.8703 19.6081 56.6671 16.9316 52.9899 15.0495C49.3126 13.1673 45.2549 12.1275 41.1173 12.0071C34.6169 11.8782 30.1265 13.8124 27.586 15.3675C30.9852 13.4153 35.9046 12.3079 40.2116 12.3626C51.2906 12.5012 63.1896 19.9725 64.9568 33.4389C66.9864 48.8972 56.1126 61.7989 40.8163 61.8383C23.9879 61.8806 13.7524 47.1265 16.428 33.8742C16.4777 33.2244 16.5743 32.5789 16.717 31.9428C17.0472 28.5463 18.044 25.2464 19.6516 22.2282C17.7136 23.2213 15.2459 26.362 14.0281 29.2712C12.2554 33.71 11.6304 38.5168 12.2099 43.2554C12.2519 43.6144 12.2896 43.9727 12.3372 44.3289C13.0629 48.4666 14.7272 52.3873 17.2046 55.7959C19.682 59.2047 22.9082 62.0123 26.6401 64.0077C30.3719 66.0031 34.5124 67.1341 38.7497 67.3157C42.9868 67.4973 47.2105 66.7246 51.1025 65.056C54.9945 63.3873 58.4535 60.8661 61.2191 57.6821C63.9847 54.4982 65.9848 50.7344 67.0687 46.6743C68.1527 42.6141 68.2924 38.3634 67.4772 34.242C66.662 30.1208 64.9132 26.2363 62.3625 22.8811Z\" fill=\"url(#paint2_radial)\" />\n  <path d=\"M62.3625 22.8811C59.8703 19.6081 56.6671 16.9316 52.9899 15.0495C49.3126 13.1673 45.2549 12.1275 41.1173 12.0071C34.6169 11.8782 30.1265 13.8124 27.586 15.3675C30.9852 13.4153 35.9046 12.3079 40.2116 12.3626C51.2906 12.5012 63.1896 19.9725 64.9568 33.4389C66.9864 48.8972 56.1126 61.7989 40.8163 61.8383C23.9879 61.8806 13.7524 47.1265 16.428 33.8742C16.4777 33.2244 16.5743 32.5789 16.717 31.9428C17.0472 28.5463 18.044 25.2464 19.6516 22.2282C17.7136 23.2213 15.2459 26.362 14.0281 29.2712C12.2554 33.71 11.6304 38.5168 12.2099 43.2554C12.2519 43.6144 12.2896 43.9727 12.3372 44.3289C13.0629 48.4666 14.7272 52.3873 17.2046 55.7959C19.682 59.2047 22.9082 62.0123 26.6401 64.0077C30.3719 66.0031 34.5124 67.1341 38.7497 67.3157C42.9868 67.4973 47.2105 66.7246 51.1025 65.056C54.9945 63.3873 58.4535 60.8661 61.2191 57.6821C63.9847 54.4982 65.9848 50.7344 67.0687 46.6743C68.1527 42.6141 68.2924 38.3634 67.4772 34.242C66.662 30.1208 64.9132 26.2363 62.3625 22.8811Z\" fill=\"url(#paint3_radial)\" />\n  <path d=\"M62.3625 22.8811C59.8703 19.6081 56.6671 16.9316 52.9899 15.0495C49.3126 13.1673 45.2549 12.1275 41.1173 12.0071C34.6169 11.8782 30.1265 13.8124 27.586 15.3675C30.9852 13.4153 35.9046 12.3079 40.2116 12.3626C51.2906 12.5012 63.1896 19.9725 64.9568 33.4389C66.9864 48.8972 56.1126 61.7989 40.8163 61.8383C23.9879 61.8806 13.7524 47.1265 16.428 33.8742C16.4777 33.2244 16.5743 32.5789 16.717 31.9428C17.0472 28.5463 18.044 25.2464 19.6516 22.2282C17.7136 23.2213 15.2459 26.362 14.0281 29.2712C12.2554 33.71 11.6304 38.5168 12.2099 43.2554C12.2519 43.6144 12.2896 43.9727 12.3372 44.3289C13.0629 48.4666 14.7272 52.3873 17.2046 55.7959C19.682 59.2047 22.9082 62.0123 26.6401 64.0077C30.3719 66.0031 34.5124 67.1341 38.7497 67.3157C42.9868 67.4973 47.2105 66.7246 51.1025 65.056C54.9945 63.3873 58.4535 60.8661 61.2191 57.6821C63.9847 54.4982 65.9848 50.7344 67.0687 46.6743C68.1527 42.6141 68.2924 38.3634 67.4772 34.242C66.662 30.1208 64.9132 26.2363 62.3625 22.8811Z\" fill=\"url(#paint4_radial)\" />\n  <path d=\"M64.9568 33.439C65.1764 35.1036 65.2467 36.7843 65.1667 38.4612C66.0952 38.3227 67.0253 38.2002 67.9571 38.0939C67.6622 32.5848 65.7142 27.2879 62.3623 22.8811C59.8702 19.6081 56.6671 16.9316 52.9898 15.0495C49.3124 13.1673 45.2549 12.1275 41.1172 12.0071C34.6168 11.8782 30.1264 13.8124 27.5859 15.3675C30.9851 13.4153 35.9046 12.3079 40.2116 12.3626C51.2904 12.5026 63.1895 19.9704 64.9568 33.439Z\" fill=\"url(#paint5_linear)\" />\n  <path d=\"M65.6387 32.6702C64.0633 18.5966 51.3879 12.2708 40.2117 12.3623C35.904 12.397 30.9854 13.415 27.5861 15.3672C26.6866 15.8953 25.8507 16.523 25.0946 17.2383C25.1849 17.1642 25.4543 16.9445 25.9008 16.6409L25.9449 16.6111L25.9841 16.5848C27.6336 15.4805 29.4511 14.6447 31.3675 14.1094C34.3696 13.2877 37.4813 12.9271 40.5938 13.0401C46.3706 13.3816 51.8118 15.8421 55.8555 19.9414C59.8993 24.0407 62.2556 29.4848 62.4648 35.2114C62.7216 44.3639 55.1567 51.6613 46.4364 52.0841C40.0941 52.3917 34.1187 49.3529 31.2002 43.2738C30.5175 41.8893 30.0539 40.4091 29.8256 38.885C28.4428 29.6334 34.717 21.7435 40.4706 19.7899C37.3668 17.1052 29.5891 17.2875 23.8005 21.5044C19.6321 24.5412 16.9278 29.1615 16.032 34.6715C15.3875 38.8994 15.9549 43.2215 17.6697 47.1457C19.4508 51.3071 22.3614 54.8986 26.0786 57.5217C29.7957 60.1448 34.1742 61.6969 38.7279 62.0058C39.4227 62.0585 40.1189 62.0846 40.8164 62.0841C59.3363 62.0841 67.3709 48.1637 65.6387 32.6702Z\" fill=\"url(#paint6_radial)\" />\n  <path d=\"M65.6387 32.6702C64.0633 18.5966 51.3879 12.2708 40.2117 12.3623C35.904 12.397 30.9854 13.415 27.5861 15.3672C26.6866 15.8953 25.8507 16.523 25.0946 17.2383C25.1849 17.1642 25.4543 16.9445 25.9008 16.6409L25.9449 16.6111L25.9841 16.5848C27.6336 15.4805 29.4511 14.6447 31.3675 14.1094C34.3696 13.2877 37.4813 12.9271 40.5938 13.0401C46.3706 13.3816 51.8118 15.8421 55.8555 19.9414C59.8993 24.0407 62.2556 29.4848 62.4648 35.2114C62.7216 44.3639 55.1567 51.6613 46.4364 52.0841C40.0941 52.3917 34.1187 49.3529 31.2002 43.2738C30.5175 41.8893 30.0539 40.4091 29.8256 38.885C28.4428 29.6334 34.717 21.7435 40.4706 19.7899C37.3668 17.1052 29.5891 17.2875 23.8005 21.5044C19.6321 24.5412 16.9278 29.1615 16.032 34.6715C15.3875 38.8994 15.9549 43.2215 17.6697 47.1457C19.4508 51.3071 22.3614 54.8986 26.0786 57.5217C29.7957 60.1448 34.1742 61.6969 38.7279 62.0058C39.4227 62.0585 40.1189 62.0846 40.8164 62.0841C59.3363 62.0841 67.3709 48.1637 65.6387 32.6702Z\" fill=\"url(#paint7_radial)\" />\n  <path opacity=\"0.53\" d=\"M65.6387 32.6702C64.0633 18.5966 51.3879 12.2708 40.2117 12.3623C35.904 12.397 30.9854 13.415 27.5861 15.3672C26.6866 15.8953 25.8507 16.523 25.0946 17.2383C25.1849 17.1642 25.4543 16.9445 25.9008 16.6409L25.9449 16.6111L25.9841 16.5848C27.6336 15.4805 29.4511 14.6447 31.3675 14.1094C34.3696 13.2877 37.4813 12.9271 40.5938 13.0401C46.3706 13.3816 51.8118 15.8421 55.8555 19.9414C59.8993 24.0407 62.2556 29.4848 62.4648 35.2114C62.7216 44.3639 55.1567 51.6613 46.4364 52.0841C40.0941 52.3917 34.1187 49.3529 31.2002 43.2738C30.5175 41.8893 30.0539 40.4091 29.8256 38.885C28.4428 29.6334 34.717 21.7435 40.4706 19.7899C37.3668 17.1052 29.5891 17.2875 23.8005 21.5044C19.6321 24.5412 16.9278 29.1615 16.032 34.6715C15.3875 38.8994 15.9549 43.2215 17.6697 47.1457C19.4508 51.3071 22.3614 54.8986 26.0786 57.5217C29.7957 60.1448 34.1742 61.6969 38.7279 62.0058C39.4227 62.0585 40.1189 62.0846 40.8164 62.0841C59.3363 62.0841 67.3709 48.1637 65.6387 32.6702Z\" fill=\"url(#paint8_radial)\" />\n  <path opacity=\"0.53\" d=\"M65.6387 32.6702C64.0633 18.5966 51.3879 12.2708 40.2117 12.3623C35.904 12.397 30.9854 13.415 27.5861 15.3672C26.6866 15.8953 25.8507 16.523 25.0946 17.2383C25.1849 17.1642 25.4543 16.9445 25.9008 16.6409L25.9449 16.6111L25.9841 16.5848C27.6336 15.4805 29.4511 14.6447 31.3675 14.1094C34.3696 13.2877 37.4813 12.9271 40.5938 13.0401C46.3706 13.3816 51.8118 15.8421 55.8555 19.9414C59.8993 24.0407 62.2556 29.4848 62.4648 35.2114C62.7216 44.3639 55.1567 51.6613 46.4364 52.0841C40.0941 52.3917 34.1187 49.3529 31.2002 43.2738C30.5175 41.8893 30.0539 40.4091 29.8256 38.885C28.4428 29.6334 34.717 21.7435 40.4706 19.7899C37.3668 17.1052 29.5891 17.2875 23.8005 21.5044C19.6321 24.5412 16.9278 29.1615 16.032 34.6715C15.3875 38.8994 15.9549 43.2215 17.6697 47.1457C19.4508 51.3071 22.3614 54.8986 26.0786 57.5217C29.7957 60.1448 34.1742 61.6969 38.7279 62.0058C39.4227 62.0585 40.1189 62.0846 40.8164 62.0841C59.3363 62.0841 67.3709 48.1637 65.6387 32.6702Z\" fill=\"url(#paint9_radial)\" />\n  <path d=\"M46.4362 52.0848C58.404 51.364 63.5271 41.5511 63.8483 34.5898C64.3494 23.713 57.8329 11.9873 40.5937 13.0407C37.4811 12.9284 34.3694 13.2897 31.3674 14.1121C29.4596 14.6702 27.6456 15.5043 25.9841 16.5875L25.9449 16.6139L25.9008 16.6437C25.6329 16.8285 25.3709 17.023 25.1147 17.2272C29.577 14.7565 34.7327 13.7986 39.7959 14.4995C49.6934 15.7857 58.7427 23.4095 58.7427 33.4692C58.7427 41.2093 52.7021 47.1214 45.6286 46.6966C35.12 46.0729 32.4711 35.4006 37.9378 30.7893C36.4638 30.4753 33.6937 31.0907 31.7649 33.946C30.0342 36.5101 30.1321 40.4672 31.2002 43.2746C32.5313 46.1048 34.7036 48.465 37.4264 50.0395C40.1493 51.6139 43.2927 52.3275 46.4362 52.0848Z\" fill=\"url(#paint10_radial)\" />\n  <path d=\"M62.3625 22.8807C61.6126 21.9086 60.7985 20.9867 59.9255 20.1212C59.2323 19.3954 58.4894 18.7179 57.7021 18.0934C58.1551 18.4841 58.5871 18.8981 58.9961 19.3339C60.5281 20.9526 61.693 22.8769 62.4129 24.9777C63.8748 29.3637 63.7797 34.853 60.9879 39.1643C59.4379 41.5801 57.273 43.5495 54.7111 44.8748C52.1492 46.2001 49.2802 46.8347 46.3921 46.7146C46.1395 46.7146 45.8848 46.7146 45.6286 46.6959C35.12 46.0722 32.4711 35.3998 37.9385 30.7886C36.4638 30.4747 33.6937 31.0901 31.7649 33.9453C30.0342 36.5093 30.1321 40.4664 31.2002 43.2738C30.5177 41.8893 30.0543 40.4091 29.8263 38.885C28.4427 29.6334 34.717 21.7435 40.4705 19.7899C37.3667 17.1052 29.589 17.2874 23.8004 21.5044C20.3958 24.0244 17.9167 27.5776 16.7409 31.6223C17.1156 28.3401 18.1026 25.1554 19.6516 22.23C17.7137 23.2231 15.2459 26.3638 14.0282 29.2729C12.2558 33.7111 11.6308 38.5172 12.2099 43.2551C12.2519 43.6141 12.2897 43.9724 12.3373 44.3286C13.063 48.4663 14.7272 52.387 17.2047 55.7956C19.6821 59.2043 22.9082 62.012 26.6401 64.0074C30.372 66.0027 34.5124 67.1338 38.7497 67.3154C42.9869 67.497 47.2106 66.7243 51.1026 65.0556C54.9946 63.387 58.4536 60.8658 61.2191 57.6817C63.9847 54.4978 65.9849 50.7341 67.0688 46.6739C68.1528 42.6138 68.2924 38.3631 67.4772 34.2417C66.662 30.1205 64.9132 26.236 62.3625 22.8807Z\" fill=\"url(#paint11_linear)\" />\n  <path d=\"M62.4129 24.9782C61.6931 22.8772 60.5282 20.953 58.996 19.3343C57.1754 17.4557 55.0169 15.9298 52.6315 14.8346C50.6399 13.8625 48.5399 13.1255 46.3746 12.6385C42.5578 11.8112 38.608 11.7876 34.7813 12.5692C30.804 13.4008 27.3067 15.1049 25.0945 17.2352C26.8585 16.2484 28.7491 15.5024 30.7151 15.0176C34.5352 14.067 38.5356 14.0829 42.348 15.0638C46.1604 16.0447 49.6624 17.9591 52.5321 20.6309C53.6952 21.7231 54.7132 22.9573 55.5618 24.3038C58.9877 29.8194 58.6636 36.7537 55.9922 40.8431C54.0081 43.8813 49.7585 46.7337 45.7937 46.7005C48.7777 46.9234 51.7669 46.3405 54.4428 45.0138C57.1186 43.6871 59.3807 41.6663 60.9879 39.1668C63.7796 34.8535 63.8748 29.3642 62.4129 24.9782Z\" fill=\"url(#paint12_linear)\" />\n  <path d=\"M62.4129 24.9782C61.6931 22.8772 60.5282 20.953 58.996 19.3343C57.1754 17.4557 55.0169 15.9298 52.6315 14.8346C50.6399 13.8625 48.5399 13.1255 46.3746 12.6385C42.5578 11.8112 38.608 11.7876 34.7813 12.5692C30.804 13.4008 27.3067 15.1049 25.0945 17.2352C26.8585 16.2484 28.7491 15.5024 30.7151 15.0176C34.5352 14.067 38.5356 14.0829 42.348 15.0638C46.1604 16.0447 49.6624 17.9591 52.5321 20.6309C53.6952 21.7231 54.7132 22.9573 55.5618 24.3038C58.9877 29.8194 58.6636 36.7537 55.9922 40.8431C54.0081 43.8813 49.7585 46.7337 45.7937 46.7005C48.7777 46.9234 51.7669 46.3405 54.4428 45.0138C57.1186 43.6871 59.3807 41.6663 60.9879 39.1668C63.7796 34.8535 63.8748 29.3642 62.4129 24.9782Z\" fill=\"url(#paint13_linear)\" />\n  <defs>\n    <radialGradient id=\"paint0_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(62.0734 23.3558) scale(63.534 62.9111)\">\n      <stop stop-color=\"#FFF36E\" />\n      <stop offset=\"0.5\" stop-color=\"#FC4055\" />\n      <stop offset=\"1\" stop-color=\"#E31587\" />\n    </radialGradient>\n    <radialGradient id=\"paint1_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(16.6505 25.9579) scale(37.6011 37.2325)\">\n      <stop offset=\"0.001\" stop-color=\"#C60084\" />\n      <stop offset=\"1\" stop-color=\"#FC4055\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint2_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(67.5043 19.7757) scale(74.6052 73.8738)\">\n      <stop stop-color=\"#FFDE67\" stop-opacity=\"0.6\" />\n      <stop offset=\"0.093\" stop-color=\"#FFD966\" stop-opacity=\"0.581\" />\n      <stop offset=\"0.203\" stop-color=\"#FFCA65\" stop-opacity=\"0.525\" />\n      <stop offset=\"0.321\" stop-color=\"#FEB262\" stop-opacity=\"0.432\" />\n      <stop offset=\"0.446\" stop-color=\"#FE8F5E\" stop-opacity=\"0.302\" />\n      <stop offset=\"0.573\" stop-color=\"#FD6459\" stop-opacity=\"0.137\" />\n      <stop offset=\"0.664\" stop-color=\"#FC4055\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint3_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(41.6051 42.7731) scale(96.2466 95.3029)\">\n      <stop offset=\"0.153\" stop-color=\"#810220\" />\n      <stop offset=\"0.167\" stop-color=\"#920B27\" stop-opacity=\"0.861\" />\n      <stop offset=\"0.216\" stop-color=\"#CB2740\" stop-opacity=\"0.398\" />\n      <stop offset=\"0.253\" stop-color=\"#EF394F\" stop-opacity=\"0.11\" />\n      <stop offset=\"0.272\" stop-color=\"#FC4055\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint4_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(34.3215 41.5749) scale(96.2466 95.3029)\">\n      <stop offset=\"0.113\" stop-color=\"#810220\" />\n      <stop offset=\"0.133\" stop-color=\"#920B27\" stop-opacity=\"0.861\" />\n      <stop offset=\"0.204\" stop-color=\"#CB2740\" stop-opacity=\"0.398\" />\n      <stop offset=\"0.257\" stop-color=\"#EF394F\" stop-opacity=\"0.11\" />\n      <stop offset=\"0.284\" stop-color=\"#FC4055\" stop-opacity=\"0\" />\n    </radialGradient>\n    <linearGradient id=\"paint5_linear\" x1=\"44.0866\" y1=\"17.3973\" x2=\"60.3318\" y2=\"45.8133\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#FFBD4F\" />\n      <stop offset=\"0.508\" stop-color=\"#FF9640\" stop-opacity=\"0\" />\n    </linearGradient>\n    <radialGradient id=\"paint6_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(60.6214 20.38) scale(59.6425 59.1809)\">\n      <stop stop-color=\"#FF9640\" />\n      <stop offset=\"0.8\" stop-color=\"#FC4055\" />\n    </radialGradient>\n    <radialGradient id=\"paint7_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(60.6214 20.38) scale(59.6425 59.1809)\">\n      <stop offset=\"0.084\" stop-color=\"#FFDE67\" />\n      <stop offset=\"0.147\" stop-color=\"#FFDC66\" stop-opacity=\"0.968\" />\n      <stop offset=\"0.246\" stop-color=\"#FFD562\" stop-opacity=\"0.879\" />\n      <stop offset=\"0.369\" stop-color=\"#FFCB5D\" stop-opacity=\"0.734\" />\n      <stop offset=\"0.511\" stop-color=\"#FFBC55\" stop-opacity=\"0.533\" />\n      <stop offset=\"0.667\" stop-color=\"#FFAA4B\" stop-opacity=\"0.28\" />\n      <stop offset=\"0.822\" stop-color=\"#FF9640\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint8_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(46.9607 38.7874) rotate(75.5925) scale(29.034 30.5056)\">\n      <stop offset=\"0.363\" stop-color=\"#FC4055\" />\n      <stop offset=\"0.443\" stop-color=\"#FD604D\" stop-opacity=\"0.633\" />\n      <stop offset=\"0.545\" stop-color=\"#FE8644\" stop-opacity=\"0.181\" />\n      <stop offset=\"0.59\" stop-color=\"#FF9640\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint9_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(41.9215 41.1747) scale(29.2475 28.9607)\">\n      <stop offset=\"0.216\" stop-color=\"#FC4055\" stop-opacity=\"0.8\" />\n      <stop offset=\"0.267\" stop-color=\"#FD5251\" stop-opacity=\"0.633\" />\n      <stop offset=\"0.41\" stop-color=\"#FE8345\" stop-opacity=\"0.181\" />\n      <stop offset=\"0.474\" stop-color=\"#FF9640\" stop-opacity=\"0\" />\n    </radialGradient>\n    <radialGradient id=\"paint10_radial\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(72.5246 13.6955) scale(100.807 100.027)\">\n      <stop offset=\"0.054\" stop-color=\"#FFF36E\" />\n      <stop offset=\"0.457\" stop-color=\"#FF9640\" />\n      <stop offset=\"0.639\" stop-color=\"#FF9640\" />\n    </radialGradient>\n    <linearGradient id=\"paint11_linear\" x1=\"53.3398\" y1=\"16.9091\" x2=\"25.1381\" y2=\"66.2402\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#FFF36E\" stop-opacity=\"0.8\" />\n      <stop offset=\"0.094\" stop-color=\"#FFF36E\" stop-opacity=\"0.699\" />\n      <stop offset=\"0.752\" stop-color=\"#FFF36E\" stop-opacity=\"0\" />\n    </linearGradient>\n    <linearGradient id=\"paint12_linear\" x1=\"40.4152\" y1=\"11.5366\" x2=\"55.3473\" y2=\"55.1988\" gradientUnits=\"userSpaceOnUse\">\n      <stop stop-color=\"#B833E1\" />\n      <stop offset=\"0.371\" stop-color=\"#9059FF\" />\n      <stop offset=\"0.614\" stop-color=\"#5B6DF8\" />\n      <stop offset=\"1\" stop-color=\"#0090ED\" />\n    </linearGradient>\n    <linearGradient id=\"paint13_linear\" x1=\"31.4045\" y1=\"12.2255\" x2=\"59.3735\" y2=\"40.4715\" gradientUnits=\"userSpaceOnUse\">\n      <stop offset=\"0.805\" stop-color=\"#722291\" stop-opacity=\"0\" />\n      <stop offset=\"1\" stop-color=\"#592ACB\" stop-opacity=\"0.5\" />\n    </linearGradient>\n  </defs>\n</svg>"
		},
		bold: {
			id: "88:88",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:88",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a3f/3983/143374f26d0997f11113a582fed7ab6b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M62.3625 22.8807C61.6126 21.9086 60.7985 20.9867 59.9255 20.1212C59.2323 19.3954 58.4894 18.7179 57.7021 18.0934C58.1551 18.4841 58.5871 18.8981 58.9961 19.3339C60.5281 20.9526 61.693 22.8769 62.4129 24.9777C63.8748 29.3637 63.7797 34.853 60.9879 39.1643C59.4379 41.5801 57.273 43.5495 54.7111 44.8748C52.1492 46.2001 49.2802 46.8347 46.3921 46.7146C46.1395 46.7146 45.8848 46.7146 45.6286 46.6959C35.12 46.0722 32.4711 35.3998 37.9385 30.7886C36.4638 30.4747 33.6937 31.0901 31.7649 33.9453C30.0342 36.5093 30.1321 40.4664 31.2002 43.2738C30.5177 41.8893 30.0543 40.4091 29.8263 38.885C28.4427 29.6334 34.717 21.7435 40.4705 19.7899C37.3667 17.1052 29.589 17.2874 23.8004 21.5044C20.3958 24.0244 17.9167 27.5776 16.7409 31.6223C17.1156 28.3401 18.1026 25.1554 19.6516 22.23C17.7137 23.2231 15.2459 26.3638 14.0282 29.2729C12.2558 33.7111 11.6308 38.5172 12.2099 43.2551C12.2519 43.6141 12.2897 43.9724 12.3373 44.3286C13.063 48.4663 14.7272 52.387 17.2047 55.7956C19.6821 59.2043 22.9082 62.012 26.6401 64.0074C30.372 66.0027 34.5124 67.1338 38.7497 67.3154C42.9869 67.497 47.2106 66.7243 51.1026 65.0556C54.9946 63.387 58.4536 60.8658 61.2191 57.6817C63.9847 54.4978 65.9849 50.7341 67.0688 46.6739C68.1528 42.6138 68.2924 38.3631 67.4772 34.2417C66.662 30.1205 64.9132 26.236 62.3625 22.8807Z\" fill=\"currentColor\" />\n  <path d=\"M62.4129 24.9782C61.6931 22.8772 60.5282 20.953 58.996 19.3343C57.1754 17.4557 55.0169 15.9298 52.6315 14.8346C50.6399 13.8625 48.5399 13.1255 46.3746 12.6385C42.5578 11.8112 38.608 11.7876 34.7813 12.5692C30.804 13.4008 27.3067 15.1049 25.0945 17.2352C26.8585 16.2484 28.7491 15.5024 30.7151 15.0176C34.5352 14.067 38.5356 14.0829 42.348 15.0638C46.1604 16.0447 49.6624 17.9591 52.5321 20.6309C53.6952 21.7231 54.7132 22.9573 55.5618 24.3038C58.9877 29.8194 58.6636 36.7537 55.9922 40.8431C54.0081 43.8813 49.7585 46.7337 45.7937 46.7005C48.7777 46.9234 51.7669 46.3405 54.4428 45.0138C57.1186 43.6871 59.3807 41.6663 60.9879 39.1668C63.7796 34.8535 63.8748 29.3642 62.4129 24.9782Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:84",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:84",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a34/c9c9/fa9bae0870370b30aa81044c08bca0a1",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M62.3625 22.8807C61.6126 21.9086 60.7985 20.9867 59.9255 20.1212C59.2323 19.3954 58.4894 18.7179 57.7021 18.0934C58.1551 18.4841 58.5871 18.8981 58.9961 19.3339C60.5281 20.9526 61.693 22.8769 62.4129 24.9777C63.8748 29.3637 63.7797 34.853 60.9879 39.1643C59.4379 41.5801 57.273 43.5495 54.7111 44.8748C52.1492 46.2001 49.2802 46.8347 46.3921 46.7146C46.1395 46.7146 45.8848 46.7146 45.6286 46.6959C35.12 46.0722 32.4711 35.3998 37.9385 30.7886C36.4638 30.4747 33.6937 31.0901 31.7649 33.9453C30.0342 36.5093 30.1321 40.4664 31.2002 43.2738C30.5177 41.8893 30.0543 40.4091 29.8263 38.885C28.4427 29.6334 34.717 21.7435 40.4705 19.7899C37.3667 17.1052 29.589 17.2874 23.8004 21.5044C20.3958 24.0244 17.9167 27.5776 16.7409 31.6223C17.1156 28.3401 18.1026 25.1554 19.6516 22.23C17.7137 23.2231 15.2459 26.3638 14.0282 29.2729C12.2558 33.7111 11.6308 38.5172 12.2099 43.2551C12.2519 43.6141 12.2897 43.9724 12.3373 44.3286C13.063 48.4663 14.7272 52.387 17.2047 55.7956C19.6821 59.2044 22.9082 62.012 26.6401 64.0074C30.372 66.0027 34.5124 67.1338 38.7497 67.3154C42.9869 67.497 47.2106 66.7243 51.1026 65.0556C54.9946 63.387 58.4536 60.8658 61.2191 57.6817C63.9847 54.4978 65.9849 50.7341 67.0688 46.6739C68.1528 42.6138 68.2924 38.3631 67.4772 34.2417C66.662 30.1205 64.9132 26.236 62.3625 22.8807Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M62.4129 24.9782C61.6931 22.8772 60.5282 20.953 58.996 19.3343C57.1754 17.4557 55.0169 15.9298 52.6315 14.8346C50.6399 13.8625 48.5399 13.1255 46.3746 12.6385C42.5578 11.8112 38.608 11.7876 34.7813 12.5692C30.804 13.4008 27.3067 15.1049 25.0945 17.2352C26.8585 16.2484 28.7491 15.5024 30.7151 15.0176C34.5352 14.067 38.5356 14.0829 42.348 15.0638C46.1604 16.0447 49.6624 17.9591 52.5321 20.6309C53.6952 21.7231 54.7132 22.9573 55.5618 24.3038C58.9877 29.8194 58.6636 36.7537 55.9922 40.8431C54.0081 43.8813 49.7585 46.7337 45.7937 46.7005C48.7777 46.9234 51.7669 46.3405 54.4428 45.0138C57.1186 43.6871 59.3807 41.6663 60.9879 39.1668C63.7796 34.8535 63.8748 29.3642 62.4129 24.9782Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const google = {
	id: "88:1511",
	categories: [
		"tech"
	],
	terms: [
		"google"
	],
	variants: {
		color: {
			id: "88:1467",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1467",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f26/3352/f8c47e2e4ffa587effeada802a6056c3",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.0001 40.7273C71.0001 38.4739 70.8112 36.3006 70.4554 34.2207H40.6277V46.5449H57.7117C56.9781 50.5623 54.7597 53.9804 51.3946 56.2694L61.5906 64.2737C67.5604 58.7005 71.0001 50.4649 71.0001 40.7273Z\" fill=\"#4285F4\" class=\"fill-blue\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.6299 72.0002C49.1654 72.0002 56.352 69.1647 61.5928 64.2758L51.3969 56.2715C48.559 58.2047 44.9041 59.3337 40.6299 59.3337C32.3802 59.3337 25.3779 53.7071 22.8739 46.125L12.3705 54.3693C17.576 64.8225 28.2727 72.0002 40.6299 72.0002Z\" fill=\"#34A853\" class=\"fill-green\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.8727 46.124C22.2314 44.1907 21.8798 42.1284 21.8798 39.9996C21.8798 37.8708 22.2314 35.8085 22.8727 33.8752L12.3693 25.6309C10.2168 29.9508 9 34.8308 9 39.9996C9 45.1684 10.2168 50.0488 12.3693 54.3683L22.8727 46.124Z\" fill=\"#FABB05\" class=\"fill-orange\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.6299 20.6666C45.2908 20.6666 49.4683 22.2886 52.763 25.4665V25.471L61.7904 16.3377C56.3082 11.1733 49.1608 8 40.6299 8C28.2727 8 17.576 15.1777 12.3705 25.6309L22.8739 33.8752C25.3779 26.2931 32.3802 20.6666 40.6299 20.6666Z\" fill=\"#E94235\" class=\"fill-orange\" />\n</svg>"
		},
		bold: {
			id: "88:1463",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1463",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45cf/c310/456de63d9b2d216dd59ee5825cdecb7c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M71.0001 40.7273C71.0001 38.4739 70.8112 36.3006 70.4554 34.2207H40.6277V46.5449H57.7117C56.9781 50.5623 54.7597 53.9804 51.3946 56.2694L61.5906 64.2737C67.5604 58.7005 71.0001 50.4649 71.0001 40.7273Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.6299 72.0002C49.1654 72.0002 56.352 69.1647 61.5928 64.2758L51.3969 56.2715C48.559 58.2047 44.9041 59.3337 40.6299 59.3337C32.3802 59.3337 25.3779 53.7071 22.8739 46.125L12.3705 54.3693C17.576 64.8225 28.2727 72.0002 40.6299 72.0002Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22.8727 46.124C22.2314 44.1907 21.8798 42.1284 21.8798 39.9996C21.8798 37.8708 22.2314 35.8085 22.8727 33.8752L12.3693 25.6309C10.2168 29.9508 9 34.8308 9 39.9996C9 45.1684 10.2168 50.0488 12.3693 54.3683L22.8727 46.124Z\" fill=\"currentColor\" />\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.6299 20.6666C45.2908 20.6666 49.4683 22.2886 52.763 25.4665V25.471L61.7904 16.3377C56.3082 11.1733 49.1608 8 40.6299 8C28.2727 8 17.576 15.1777 12.3705 25.6309L22.8739 33.8752C25.3779 26.2931 32.3802 20.6666 40.6299 20.6666Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1459",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1459",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe49/1bdd/fcd2529a98a59e294e11ed1894999375",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M70.5 40.725C70.5 58.4125 58.3875 71 40.5 71C23.35 71 9.5 57.15 9.5 40C9.5 22.85 23.35 9 40.5 9C48.85 9 55.875 12.0625 61.2875 17.1125L52.85 25.225C41.8125 14.575 21.2875 22.575 21.2875 40C21.2875 50.8125 29.925 59.575 40.5 59.575C52.775 59.575 57.375 50.775 58.1 46.2125H40.5V35.55H70.0125C70.3 37.1375 70.5 38.6625 70.5 40.725Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const applePay = {
	id: "105:289",
	categories: [
		"payment"
	],
	terms: [
		"ApplePay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
		color: {
			id: "88:1789",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1789",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00db/ff59/66e2b80292f08ee1fb17ee324451ca9f",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.1557 29.1871C16.312 30.1751 14.9618 30.9543 13.6115 30.843C13.4428 29.5071 14.1038 28.0878 14.8774 27.2111C15.7211 26.1953 17.198 25.4717 18.3935 25.416C18.5341 26.8076 17.9855 28.1713 17.1557 29.1871ZM18.3793 31.1074C16.4245 30.9961 14.7507 32.2067 13.8226 32.2067C12.8803 32.2067 11.4599 31.163 9.91277 31.1909C7.90156 31.2187 6.03105 32.3458 5.00437 34.1409C2.89475 37.7312 4.45587 43.0468 6.49515 45.9689C7.4937 47.4161 8.68922 49.0025 10.2644 48.9467C11.7551 48.8912 12.3459 47.9867 14.1461 47.9867C15.9603 47.9867 16.4807 48.9467 18.0557 48.9191C19.6872 48.8912 20.7139 47.4719 21.7124 46.0247C22.8516 44.3826 23.3158 42.7824 23.3439 42.6989C23.3158 42.671 20.1937 41.4882 20.1656 37.9258C20.1374 34.948 22.6266 33.5286 22.7391 33.4452C21.3329 31.3857 19.1389 31.163 18.3793 31.1074ZM29.6727 27.0719V48.7658H33.0763V41.3492H37.7878C42.0914 41.3492 45.1151 38.4269 45.1151 34.1966C45.1151 29.9663 42.1476 27.0719 37.9003 27.0719H29.6727ZM33.0763 29.9107H37.0003C39.9536 29.9107 41.6414 31.4692 41.6414 34.2105C41.6414 36.9518 39.9536 38.5243 36.9861 38.5243H33.0763V29.9107ZM51.3314 48.933C53.4694 48.933 55.4523 47.8613 56.3523 46.1637H56.4227V48.7658H59.5732V37.9676C59.5732 34.8367 57.0415 32.819 53.1458 32.819C49.5314 32.819 46.8591 34.8645 46.7608 37.6754H49.8266C50.0798 36.3395 51.3314 35.4629 53.0473 35.4629C55.1288 35.4629 56.2961 36.423 56.2961 38.1904V39.3869L52.0487 39.6374C48.0968 39.8741 45.9591 41.4743 45.9591 44.2573C45.9591 47.0682 48.167 48.933 51.3314 48.933ZM52.2456 46.3586C50.4314 46.3586 49.2781 45.4959 49.2781 44.1738C49.2781 42.8101 50.3891 42.017 52.5129 41.8919L56.2961 41.6552V42.8798C56.2961 44.9114 54.5523 46.3586 52.2456 46.3586ZM63.7782 54.666C67.0974 54.666 68.6585 53.4137 70.0226 49.6148L76 33.0277H72.5402L68.532 45.8438H68.4616L64.4534 33.0277H60.8951L66.6614 48.8216L66.352 49.7817C65.8316 51.4098 64.9878 52.036 63.483 52.036C63.2157 52.036 62.6953 52.0081 62.4845 51.9804V54.5825C62.6813 54.6381 63.5251 54.666 63.7782 54.666Z\" fill=\"black\" class=\"fill-grey\" />\n</svg>"
		},
		bold: {
			id: "88:1787",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1787",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00db/ff59/66e2b80292f08ee1fb17ee324451ca9f",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.1557 29.1871C16.312 30.1751 14.9618 30.9543 13.6115 30.843C13.4428 29.5071 14.1038 28.0878 14.8774 27.2111C15.7211 26.1953 17.198 25.4717 18.3935 25.416C18.5341 26.8076 17.9855 28.1713 17.1557 29.1871ZM18.3793 31.1074C16.4245 30.9961 14.7507 32.2067 13.8226 32.2067C12.8803 32.2067 11.4599 31.163 9.91277 31.1909C7.90156 31.2187 6.03105 32.3458 5.00437 34.1409C2.89475 37.7312 4.45587 43.0468 6.49515 45.9689C7.4937 47.4161 8.68922 49.0025 10.2644 48.9467C11.7551 48.8912 12.3459 47.9867 14.1461 47.9867C15.9603 47.9867 16.4807 48.9467 18.0557 48.9191C19.6872 48.8912 20.7139 47.4719 21.7124 46.0247C22.8516 44.3826 23.3158 42.7824 23.3439 42.6989C23.3158 42.671 20.1937 41.4882 20.1656 37.9258C20.1374 34.948 22.6266 33.5286 22.7391 33.4452C21.3329 31.3857 19.1389 31.163 18.3793 31.1074ZM29.6727 27.0719V48.7658H33.0763V41.3492H37.7878C42.0914 41.3492 45.1151 38.4269 45.1151 34.1966C45.1151 29.9663 42.1476 27.0719 37.9003 27.0719H29.6727ZM33.0763 29.9107H37.0003C39.9536 29.9107 41.6414 31.4692 41.6414 34.2105C41.6414 36.9518 39.9536 38.5243 36.9861 38.5243H33.0763V29.9107ZM51.3314 48.933C53.4694 48.933 55.4523 47.8613 56.3523 46.1637H56.4227V48.7658H59.5732V37.9676C59.5732 34.8367 57.0415 32.819 53.1458 32.819C49.5314 32.819 46.8591 34.8645 46.7608 37.6754H49.8266C50.0798 36.3395 51.3314 35.4629 53.0473 35.4629C55.1288 35.4629 56.2961 36.423 56.2961 38.1904V39.3869L52.0487 39.6374C48.0968 39.8741 45.9591 41.4743 45.9591 44.2573C45.9591 47.0682 48.167 48.933 51.3314 48.933ZM52.2456 46.3586C50.4314 46.3586 49.2781 45.4959 49.2781 44.1738C49.2781 42.8101 50.3891 42.017 52.5129 41.8919L56.2961 41.6552V42.8798C56.2961 44.9114 54.5523 46.3586 52.2456 46.3586ZM63.7782 54.666C67.0974 54.666 68.6585 53.4137 70.0226 49.6148L76 33.0277H72.5402L68.532 45.8438H68.4616L64.4534 33.0277H60.8951L66.6614 48.8216L66.352 49.7817C65.8316 51.4098 64.9878 52.036 63.483 52.036C63.2157 52.036 62.6953 52.0081 62.4845 51.9804V54.5825C62.6813 54.6381 63.5251 54.666 63.7782 54.666Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1785",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1785",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e5e/1a3b/883a94e0a823330ea299b57f1c6dec7a",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M17.1557 29.1871C16.312 30.1751 14.9618 30.9543 13.6115 30.843C13.4428 29.5071 14.1038 28.0878 14.8774 27.2111C15.7211 26.1953 17.198 25.4717 18.3935 25.416C18.5341 26.8076 17.9855 28.1713 17.1557 29.1871ZM18.3793 31.1074C16.4245 30.9961 14.7507 32.2067 13.8226 32.2067C12.8803 32.2067 11.4599 31.163 9.91277 31.1909C7.90156 31.2187 6.03105 32.3458 5.00437 34.1409C2.89475 37.7312 4.45587 43.0468 6.49515 45.9689C7.4937 47.4161 8.68922 49.0025 10.2644 48.9467C11.7551 48.8912 12.3459 47.9867 14.1461 47.9867C15.9603 47.9867 16.4807 48.9467 18.0557 48.9191C19.6872 48.8912 20.7139 47.4719 21.7124 46.0247C22.8516 44.3826 23.3158 42.7824 23.3439 42.6989C23.3158 42.671 20.1937 41.4882 20.1656 37.9258C20.1374 34.948 22.6266 33.5286 22.7391 33.4452C21.3329 31.3857 19.1389 31.163 18.3793 31.1074ZM29.6727 27.0719V48.7658H33.0763V41.3492H37.7878C42.0914 41.3492 45.1151 38.4269 45.1151 34.1966C45.1151 29.9663 42.1476 27.0719 37.9003 27.0719H29.6727ZM33.0763 29.9107H37.0003C39.9536 29.9107 41.6414 31.4692 41.6414 34.2105C41.6414 36.9518 39.9536 38.5243 36.9861 38.5243H33.0763V29.9107ZM51.3314 48.933C53.4694 48.933 55.4523 47.8613 56.3523 46.1637H56.4227V48.7658H59.5732V37.9676C59.5732 34.8367 57.0415 32.819 53.1458 32.819C49.5314 32.819 46.8591 34.8645 46.7608 37.6754H49.8266C50.0798 36.3395 51.3314 35.4629 53.0473 35.4629C55.1288 35.4629 56.2961 36.423 56.2961 38.1904V39.3869L52.0487 39.6374C48.0968 39.8741 45.9591 41.4743 45.9591 44.2573C45.9591 47.0682 48.167 48.933 51.3314 48.933ZM52.2456 46.3586C50.4314 46.3586 49.2781 45.4959 49.2781 44.1738C49.2781 42.8101 50.3891 42.017 52.5129 41.8919L56.2961 41.6552V42.8798C56.2961 44.9114 54.5523 46.3586 52.2456 46.3586ZM63.7782 54.666C67.0974 54.666 68.6585 53.4137 70.0226 49.6148L76 33.0277H72.5402L68.532 45.8438H68.4616L64.4534 33.0277H60.8951L66.6614 48.8216L66.352 49.7817C65.8316 51.4098 64.9878 52.036 63.483 52.036C63.2157 52.036 62.6953 52.0081 62.4845 51.9804V54.5825C62.6813 54.6381 63.5251 54.666 63.7782 54.666Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const amex = {
	id: "105:328",
	categories: [
		"payment"
	],
	terms: [
		"Amex",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
		color: {
			id: "88:1603",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1603",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84c6/1c28/faf2eb2becbb4654ac96125c5ea211a8",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M4.4375 33.8443L6.98256 27.9434H11.384L12.8284 31.2488V27.9434H18.2998L19.1596 30.3324L19.9931 27.9434H44.5539V29.1444C44.5539 29.1444 45.8451 27.9434 47.967 27.9434L55.9361 27.971L57.3555 31.2333V27.9434H61.9342L63.1944 29.8172V27.9434H67.8152V38.5441H63.1944L61.9868 36.6641V38.5441H55.2596L54.5831 36.8731H52.7745L52.1091 38.5441H47.5468C45.7211 38.5441 44.5539 37.3677 44.5539 37.3677V38.5441H37.6753L36.3101 36.8731V38.5441H10.732L10.0559 36.8731H8.25317L7.5819 38.5441H4.4375V33.8443Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M17.6182 52.4368V41.8359H28.9044L30.1153 43.4059L31.3662 41.8359H72.332V51.7057C72.332 51.7057 71.2607 52.4261 70.0215 52.4368H47.338L45.9728 50.7657V52.4368H41.499V49.5843C41.499 49.5843 40.8879 49.9824 39.5667 49.9824H38.0439V52.4368H31.2705L30.0612 50.8332L28.8336 52.4368H17.6182Z\" fill=\"white\" class=\"fill-white\" />\n  <path d=\"M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8687 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7793 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n  <path d=\"M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z\" fill=\"#016FD0\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "88:1589",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1589",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c75/7dbc/463eec6af4d882651488429c39bf2810",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z\" fill=\"currentColor\" />\n  <path d=\"M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z\" fill=\"currentColor\" />\n  <path d=\"M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z\" fill=\"currentColor\" />\n  <path d=\"M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z\" fill=\"currentColor\" />\n  <path d=\"M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z\" fill=\"currentColor\" />\n  <path d=\"M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z\" fill=\"currentColor\" />\n  <path d=\"M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z\" fill=\"currentColor\" />\n  <path d=\"M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z\" fill=\"currentColor\" />\n  <path d=\"M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z\" fill=\"currentColor\" />\n  <path d=\"M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z\" fill=\"currentColor\" />\n  <path d=\"M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z\" fill=\"currentColor\" />\n  <path d=\"M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z\" fill=\"currentColor\" />\n  <path d=\"M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z\" fill=\"currentColor\" />\n  <path d=\"M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8687 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7793 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z\" fill=\"currentColor\" />\n  <path d=\"M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1583",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1583",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cae/8d1b/c682273f34a12a5d9b63e7dd9a7ad68c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M7.88438 29.25L4.45166 37.1876H6.68654L7.31992 35.5981H11.0021L11.6322 37.1876H13.9164L10.4868 29.25H7.88438ZM9.15443 31.0973L10.2768 33.8748H8.02878L9.15443 31.0973Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M14.1519 37.1876V29.25L17.3277 29.2618L19.1749 34.3794L20.9779 29.25H24.1284V37.1876H22.1331V31.3388L20.018 37.1876H18.268L16.1471 31.3388V37.1876H14.1519Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M25.4937 37.1876V29.25H32.0048V31.0255H27.51V32.3832H31.8996V34.0543H27.51V35.4643H32.0048V37.1876H25.4937Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M33.1594 29.25V37.1876H35.1547V34.3676H35.9947L38.3872 37.1876H40.8255L38.2002 34.2632C39.2776 34.1728 40.3891 33.253 40.3891 31.8251C40.3891 30.1548 39.071 29.25 37.5996 29.25H33.1594ZM35.1547 31.0255H37.4356C37.9826 31.0255 38.3806 31.4511 38.3806 31.861C38.3806 32.3884 37.865 32.6966 37.4651 32.6966H35.1547V31.0255Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M43.2414 37.1876H41.2041V29.25H43.2414V37.1876Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M48.0725 37.1876H47.6326C45.5049 37.1876 44.2131 35.5204 44.2131 33.2514C44.2131 30.9264 45.4904 29.25 48.1775 29.25H50.3827V31.13H48.0968C47.006 31.13 46.2346 31.9765 46.2346 33.271C46.2346 34.8082 47.1167 35.4538 48.3874 35.4538H48.9125L48.0725 37.1876Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M52.4133 29.25L48.9807 37.1876H51.2156L51.849 35.5981H55.531L56.1611 37.1876H58.4453L55.0158 29.25H52.4133ZM53.6834 31.0973L54.8058 33.8748H52.5577L53.6834 31.0973Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M58.6787 37.1876V29.25H61.2156L64.4547 34.2371V29.25H66.45V37.1876H63.9952L60.6742 32.0699V37.1876H58.6787Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M18.9817 51.0781V43.1406H25.4926V44.9162H20.998V46.274H25.3876V47.945H20.998V49.355H25.4926V51.0781H18.9817Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M50.886 51.0781V43.1406H57.3971V44.9162H52.9023V46.274H57.2711V47.945H52.9023V49.355H57.3971V51.0781H50.886Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M25.7461 51.0781L28.9164 47.1583L25.6707 43.1406H28.1846L30.1174 45.6244L32.057 43.1406H34.4724L31.2693 47.1094L34.4453 51.0781H31.932L30.0551 48.6335L28.2238 51.0781H25.7461Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M34.6821 43.1406V51.0781H36.7298V48.5715H38.8302C40.6075 48.5715 41.9545 47.6338 41.9545 45.8104C41.9545 44.2998 40.8979 43.1406 39.0895 43.1406H34.6821ZM36.7298 44.9356H38.9418C39.516 44.9356 39.9262 45.2856 39.9262 45.8496C39.9262 46.3792 39.5181 46.7633 38.9352 46.7633H36.7298V44.9356Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M42.8213 43.1406V51.0781H44.8166V48.2583H45.6566L48.0491 51.0781H50.4874L47.862 48.154C48.9395 48.0633 50.051 47.1437 50.051 45.7158C50.051 44.0454 48.7326 43.1406 47.2614 43.1406H42.8213ZM44.8166 44.9162H47.0973C47.6444 44.9162 48.0425 45.3419 48.0425 45.7517C48.0425 46.279 47.5269 46.5873 47.127 46.5873H44.8166V44.9162Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M58.3221 51.0781V49.355H62.3153C62.9062 49.355 63.162 49.0373 63.162 48.6892C63.162 48.3554 62.907 48.0181 62.3153 48.0181H60.5108C58.9423 48.0181 58.0686 47.0677 58.0686 45.6408C58.0686 44.3681 58.8687 43.1406 61.1995 43.1406H65.085L64.245 44.9267H60.8843C60.2421 44.9267 60.0443 45.2619 60.0443 45.5821C60.0443 45.911 60.2887 46.274 60.7793 46.274H62.6696C64.4182 46.274 65.177 47.2604 65.177 48.5521C65.177 49.9408 64.3316 51.0781 62.5745 51.0781H58.3221Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M65.6454 51.0781V49.355H69.6388C70.2297 49.355 70.4854 49.0373 70.4854 48.6892C70.4854 48.3554 70.2303 48.0181 69.6388 48.0181H67.8343C66.2658 48.0181 65.3921 47.0677 65.3921 45.6408C65.3921 44.3681 66.1921 43.1406 68.523 43.1406H72.4085L71.5685 44.9267H68.2078C67.5656 44.9267 67.3678 45.2619 67.3678 45.5821C67.3678 45.911 67.6122 46.274 68.1028 46.274H69.9931C71.7417 46.274 72.5005 47.2604 72.5005 48.5521C72.5005 49.9408 71.6549 51.0781 69.898 51.0781H65.6454Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const mastercard = {
	id: "105:299",
	categories: [
		"payment"
	],
	terms: [
		"Mastercard",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
		color: {
			id: "88:1860",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1860",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f05/391d/48b1cad61dfa812e7828c81c9809c45c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M47.5737 53.3635H32.427V26.5645H47.5737V53.3635Z\" fill=\"#FF5F00\" class=\"fill-orange\" />\n  <path d=\"M33.3966 39.9597C33.3966 34.5233 35.9819 29.6808 40.008 26.5601C37.0639 24.2781 33.3481 22.916 29.3098 22.916C19.7497 22.916 12 30.5466 12 39.9597C12 49.3726 19.7497 57.0033 29.3098 57.0033C33.3481 57.0033 37.0639 55.6413 40.008 53.3591C35.9819 50.2384 33.3966 45.3961 33.3966 39.9597Z\" fill=\"#EB001B\" class=\"fill-red\" />\n  <path d=\"M68 39.9597C68 49.3726 60.2502 57.0033 50.69 57.0033C46.6519 57.0033 42.9361 55.6413 39.9907 53.3591C44.0179 50.2384 46.6034 45.3961 46.6034 39.9597C46.6034 34.5233 44.0179 29.6808 39.9907 26.5601C42.9361 24.2781 46.6519 22.916 50.69 22.916C60.2502 22.916 68 30.5466 68 39.9597Z\" fill=\"#F79E1B\" class=\"fill-orange\" />\n</svg>"
		},
		bold: {
			id: "88:1858",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1858",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98fb/eb4e/ce04ac22ed0afb2f205a9ae1c343c26c",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M33.3966 39.9597C33.3966 34.5233 35.9819 29.6808 40.008 26.5601C37.0639 24.2781 33.3481 22.916 29.3098 22.916C19.7497 22.916 12 30.5466 12 39.9597C12 49.3726 19.7497 57.0033 29.3098 57.0033C33.3481 57.0033 37.0639 55.6413 40.008 53.3591C35.9819 50.2384 33.3966 45.3961 33.3966 39.9597Z\" fill=\"currentColor\" />\n  <path d=\"M68 39.9597C68 49.3726 60.2502 57.0033 50.69 57.0033C46.6519 57.0033 42.9361 55.6413 39.9907 53.3591C44.0179 50.2384 46.6034 45.3961 46.6034 39.9597C46.6034 34.5233 44.0179 29.6808 39.9907 26.5601C42.9361 24.2781 46.6519 22.916 50.69 22.916C60.2502 22.916 68 30.5466 68 39.9597Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1856",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1856",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c951/b561/e707ec35394d4338a870439196bf6227",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M33.3966 39.9597C33.3966 34.5233 35.9819 29.6808 40.008 26.5601C37.0639 24.2781 33.3481 22.916 29.3098 22.916C19.7497 22.916 12 30.5466 12 39.9597C12 49.3726 19.7497 57.0033 29.3098 57.0033C33.3481 57.0033 37.0639 55.6413 40.008 53.3591C35.9819 50.2384 33.3966 45.3961 33.3966 39.9597Z\" stroke=\"currentColor\" />\n  <path d=\"M68 39.9597C68 49.3726 60.2502 57.0033 50.69 57.0033C46.6519 57.0033 42.9361 55.6413 39.9907 53.3591C44.0179 50.2384 46.6034 45.3961 46.6034 39.9597C46.6034 34.5233 44.0179 29.6808 39.9907 26.5601C42.9361 24.2781 46.6519 22.916 50.69 22.916C60.2502 22.916 68 30.5466 68 39.9597Z\" stroke=\"currentColor\" />\n</svg>"
		}
	}
};
const paypal = {
	id: "88:1570",
	categories: [
		"payment"
	],
	terms: [
		"paypal"
	],
	variants: {
		color: {
			id: "88:1938",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1938",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61de/54c7/9b9cc29976fdcd8b11dffed8ad1d16cf",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M12.6402 30.084H7.03984C6.6566 30.084 6.33069 30.3692 6.27091 30.7568L4.00588 45.4692C3.96085 45.7593 4.18029 46.0211 4.46773 46.0211H7.14138C7.52461 46.0211 7.85054 45.7359 7.91032 45.3475L8.5212 41.3793C8.58016 40.9909 8.9069 40.7057 9.28932 40.7057H11.0622C14.7512 40.7057 16.8803 38.8769 17.4364 35.2526C17.6869 33.6671 17.4469 32.4213 16.7223 31.5488C15.9264 30.5907 14.5146 30.084 12.6402 30.084ZM13.2863 35.4573C12.98 37.5161 11.4446 37.5161 9.95998 37.5161H9.11489L9.70776 33.6712C9.74298 33.4389 9.93951 33.2677 10.1688 33.2677H10.5561C11.5675 33.2677 12.5215 33.2677 13.0144 33.8583C13.3084 34.2107 13.3985 34.7342 13.2863 35.4573Z\" fill=\"#253B80\" class=\"fill-purple\" />\n  <path d=\"M29.3807 35.3912H26.6988C26.4703 35.3912 26.273 35.5623 26.2378 35.7947L26.1191 36.5632L25.9315 36.2847C25.351 35.4214 24.0564 35.1328 22.7641 35.1328C19.8006 35.1328 17.2695 37.4324 16.7764 40.658C16.5201 42.267 16.8846 43.8057 17.7754 44.8787C18.5927 45.8653 19.7621 46.2763 21.1534 46.2763C23.5413 46.2763 24.8653 44.7034 24.8653 44.7034L24.7458 45.4666C24.7009 45.7587 24.9202 46.0204 25.2061 46.0204H27.6218C28.0059 46.0204 28.3301 45.7351 28.3906 45.3467L29.8402 35.9432C29.8859 35.6538 29.6674 35.3912 29.3807 35.3912ZM25.6425 40.7386C25.3837 42.3081 24.1677 43.3619 22.6168 43.3619C21.838 43.3619 21.2157 43.1059 20.816 42.621C20.4196 42.1396 20.269 41.4542 20.3951 40.6908C20.6368 39.1344 21.8732 38.0465 23.4004 38.0465C24.1621 38.0465 24.7811 38.3057 25.1889 38.7948C25.5974 39.2889 25.7597 39.9785 25.6425 40.7386Z\" fill=\"#253B80\" class=\"fill-purple\" />\n  <path d=\"M43.6625 35.3926H40.9675C40.7103 35.3926 40.4688 35.5234 40.323 35.7424L36.6061 41.3514L35.0306 35.9614C34.9316 35.6241 34.6276 35.3926 34.2838 35.3926H31.6355C31.3137 35.3926 31.0901 35.7147 31.1924 36.025L34.161 44.9497L31.3701 48.9857C31.1508 49.3037 31.3718 49.7407 31.7509 49.7407H34.4426C34.6981 49.7407 34.9372 49.6133 35.0822 49.3985L44.0457 36.1434C44.2603 35.8263 44.04 35.3926 43.6625 35.3926Z\" fill=\"#253B80\" class=\"fill-purple\" />\n  <path d=\"M52.5854 30.084H46.9844C46.6018 30.084 46.2761 30.3692 46.2161 30.7568L43.9512 45.469C43.9061 45.7594 44.1256 46.0212 44.4114 46.0212H47.2856C47.5526 46.0212 47.7811 45.8215 47.8229 45.5496L48.4656 41.3794C48.5246 40.991 48.8513 40.7056 49.2337 40.7056H51.0059C54.6958 40.7056 56.8239 38.8768 57.3809 35.2526C57.6323 33.667 57.3908 32.4212 56.6659 31.5488C55.8708 30.5907 54.46 30.084 52.5854 30.084ZM53.2315 35.4573C52.9262 37.516 51.3908 37.516 49.9053 37.516H49.0609L49.6546 33.6712C49.6898 33.4389 49.8848 33.2677 50.1148 33.2677H50.5023C51.5128 33.2677 52.4675 33.2677 52.9606 33.8583C53.2544 34.2107 53.3438 34.7342 53.2315 35.4573Z\" fill=\"#179BD7\" class=\"fill-blue\" />\n  <path d=\"M69.3263 35.3912H66.6462C66.4159 35.3912 66.2202 35.5623 66.1859 35.7947L66.0672 36.5632L65.8789 36.2847C65.2982 35.4214 64.0043 35.1328 62.7122 35.1328C59.7487 35.1328 57.2182 37.4324 56.7253 40.658C56.4698 42.267 56.8325 43.8057 57.7235 44.8787C58.5424 45.8653 59.7102 46.2763 61.1013 46.2763C63.4892 46.2763 64.8135 44.7034 64.8135 44.7034L64.694 45.4666C64.6488 45.7587 64.8683 46.0204 65.1557 46.0204H67.5707C67.9531 46.0204 68.279 45.7351 68.3387 45.3467L69.7891 35.9432C69.8332 35.6538 69.6137 35.3912 69.3263 35.3912ZM65.5881 40.7386C65.3309 42.3081 64.1133 43.3619 62.5624 43.3619C61.7851 43.3619 61.1613 43.1059 60.7616 42.621C60.3652 42.1396 60.2161 41.4542 60.3407 40.6908C60.5839 39.1344 61.8188 38.0465 63.346 38.0465C64.1077 38.0465 64.7267 38.3057 65.1345 38.7948C65.5447 39.2889 65.7068 39.9785 65.5881 40.7386Z\" fill=\"#179BD7\" class=\"fill-blue\" />\n  <path d=\"M72.486 30.4884L70.1874 45.47C70.1423 45.7601 70.3618 46.022 70.6476 46.022H72.9585C73.3426 46.022 73.6685 45.7367 73.7275 45.3483L75.9942 30.6368C76.0391 30.3466 75.8196 30.084 75.5339 30.084H72.9462C72.7178 30.0848 72.5212 30.256 72.486 30.4884Z\" fill=\"#179BD7\" class=\"fill-blue\" />\n</svg>"
		},
		bold: {
			id: "88:1936",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1936",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26fa/ff4f/a2528d7d75a2bd33bc180d3b42d7b5a0",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M12.6402 30.084H7.03984C6.6566 30.084 6.33069 30.3692 6.27091 30.7568L4.00588 45.4692C3.96085 45.7593 4.18029 46.0211 4.46773 46.0211H7.14138C7.52461 46.0211 7.85054 45.7359 7.91032 45.3475L8.5212 41.3793C8.58016 40.9909 8.9069 40.7057 9.28932 40.7057H11.0622C14.7512 40.7057 16.8803 38.8769 17.4364 35.2526C17.6869 33.6671 17.4469 32.4213 16.7223 31.5488C15.9264 30.5907 14.5146 30.084 12.6402 30.084ZM13.2863 35.4573C12.98 37.5161 11.4446 37.5161 9.95998 37.5161H9.11489L9.70776 33.6712C9.74298 33.4389 9.93951 33.2677 10.1688 33.2677H10.5561C11.5675 33.2677 12.5215 33.2677 13.0144 33.8583C13.3084 34.2107 13.3985 34.7342 13.2863 35.4573Z\" fill=\"currentColor\" />\n  <path d=\"M29.3807 35.3912H26.6988C26.4703 35.3912 26.273 35.5623 26.2378 35.7947L26.1191 36.5632L25.9315 36.2847C25.351 35.4214 24.0564 35.1328 22.7641 35.1328C19.8006 35.1328 17.2695 37.4324 16.7764 40.658C16.5201 42.267 16.8846 43.8057 17.7754 44.8787C18.5927 45.8653 19.7621 46.2763 21.1534 46.2763C23.5413 46.2763 24.8653 44.7034 24.8653 44.7034L24.7458 45.4666C24.7009 45.7587 24.9202 46.0204 25.2061 46.0204H27.6218C28.0059 46.0204 28.3301 45.7351 28.3906 45.3467L29.8402 35.9432C29.8859 35.6538 29.6674 35.3912 29.3807 35.3912ZM25.6425 40.7386C25.3837 42.3081 24.1677 43.3619 22.6168 43.3619C21.838 43.3619 21.2157 43.1059 20.816 42.621C20.4196 42.1396 20.269 41.4542 20.3951 40.6908C20.6368 39.1344 21.8732 38.0465 23.4004 38.0465C24.1621 38.0465 24.7811 38.3057 25.1889 38.7948C25.5974 39.2889 25.7597 39.9785 25.6425 40.7386Z\" fill=\"currentColor\" />\n  <path d=\"M43.6625 35.3926H40.9675C40.7103 35.3926 40.4688 35.5234 40.323 35.7424L36.6061 41.3514L35.0306 35.9614C34.9316 35.6241 34.6276 35.3926 34.2838 35.3926H31.6355C31.3137 35.3926 31.0901 35.7147 31.1924 36.025L34.161 44.9497L31.3701 48.9857C31.1508 49.3037 31.3718 49.7407 31.7509 49.7407H34.4426C34.6981 49.7407 34.9372 49.6133 35.0822 49.3985L44.0457 36.1434C44.2603 35.8263 44.04 35.3926 43.6625 35.3926Z\" fill=\"currentColor\" />\n  <path d=\"M52.5854 30.084H46.9844C46.6018 30.084 46.2761 30.3692 46.2161 30.7568L43.9512 45.469C43.9061 45.7594 44.1256 46.0212 44.4114 46.0212H47.2856C47.5526 46.0212 47.7811 45.8215 47.8229 45.5496L48.4656 41.3794C48.5246 40.991 48.8513 40.7056 49.2337 40.7056H51.0059C54.6958 40.7056 56.8239 38.8768 57.3809 35.2526C57.6323 33.667 57.3908 32.4212 56.6659 31.5488C55.8708 30.5907 54.46 30.084 52.5854 30.084ZM53.2315 35.4573C52.9262 37.516 51.3908 37.516 49.9053 37.516H49.0609L49.6546 33.6712C49.6898 33.4389 49.8848 33.2677 50.1148 33.2677H50.5023C51.5128 33.2677 52.4675 33.2677 52.9606 33.8583C53.2544 34.2107 53.3438 34.7342 53.2315 35.4573Z\" fill=\"currentColor\" />\n  <path d=\"M69.3263 35.3912H66.6462C66.4159 35.3912 66.2202 35.5623 66.1859 35.7947L66.0672 36.5632L65.8789 36.2847C65.2982 35.4214 64.0043 35.1328 62.7122 35.1328C59.7487 35.1328 57.2182 37.4324 56.7253 40.658C56.4698 42.267 56.8325 43.8057 57.7235 44.8787C58.5424 45.8653 59.7102 46.2763 61.1013 46.2763C63.4892 46.2763 64.8135 44.7034 64.8135 44.7034L64.694 45.4666C64.6488 45.7587 64.8683 46.0204 65.1557 46.0204H67.5707C67.9531 46.0204 68.279 45.7351 68.3387 45.3467L69.7891 35.9432C69.8332 35.6538 69.6137 35.3912 69.3263 35.3912ZM65.5881 40.7386C65.3309 42.3081 64.1133 43.3619 62.5624 43.3619C61.7851 43.3619 61.1613 43.1059 60.7616 42.621C60.3652 42.1396 60.2161 41.4542 60.3407 40.6908C60.5839 39.1344 61.8188 38.0465 63.346 38.0465C64.1077 38.0465 64.7267 38.3057 65.1345 38.7948C65.5447 39.2889 65.7068 39.9785 65.5881 40.7386Z\" fill=\"currentColor\" />\n  <path d=\"M72.486 30.4884L70.1874 45.47C70.1423 45.7601 70.3618 46.022 70.6476 46.022H72.9585C73.3426 46.022 73.6685 45.7367 73.7275 45.3483L75.9942 30.6368C76.0391 30.3466 75.8196 30.084 75.5339 30.084H72.9462C72.7178 30.0848 72.5212 30.256 72.486 30.4884Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1934",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1934",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cc6/41a2/876f72f5e93cde8b317e67427fd32a6b",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M12.6402 30.084H7.03984C6.6566 30.084 6.33069 30.3692 6.27091 30.7568L4.00588 45.4692C3.96085 45.7593 4.18029 46.0211 4.46773 46.0211H7.14138C7.52461 46.0211 7.85054 45.7359 7.91032 45.3475L8.5212 41.3793C8.58016 40.9909 8.9069 40.7057 9.28932 40.7057H11.0622C14.7512 40.7057 16.8803 38.8769 17.4364 35.2526C17.6869 33.6671 17.4469 32.4213 16.7223 31.5488C15.9264 30.5907 14.5146 30.084 12.6402 30.084ZM13.2863 35.4573C12.98 37.5161 11.4446 37.5161 9.95998 37.5161H9.11489L9.70776 33.6712C9.74298 33.4389 9.93951 33.2677 10.1688 33.2677H10.5561C11.5675 33.2677 12.5215 33.2677 13.0144 33.8583C13.3084 34.2107 13.3985 34.7342 13.2863 35.4573Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M29.3807 35.3912H26.6988C26.4703 35.3912 26.273 35.5623 26.2378 35.7947L26.1191 36.5632L25.9315 36.2847C25.351 35.4214 24.0564 35.1328 22.7641 35.1328C19.8006 35.1328 17.2695 37.4324 16.7764 40.658C16.5201 42.267 16.8846 43.8057 17.7754 44.8787C18.5927 45.8653 19.7621 46.2763 21.1534 46.2763C23.5413 46.2763 24.8653 44.7034 24.8653 44.7034L24.7458 45.4666C24.7009 45.7587 24.9202 46.0204 25.2061 46.0204H27.6218C28.0059 46.0204 28.3301 45.7351 28.3906 45.3467L29.8402 35.9432C29.8859 35.6538 29.6674 35.3912 29.3807 35.3912ZM25.6425 40.7386C25.3837 42.3081 24.1677 43.3619 22.6168 43.3619C21.838 43.3619 21.2157 43.1059 20.816 42.621C20.4196 42.1396 20.269 41.4542 20.3951 40.6908C20.6368 39.1344 21.8732 38.0465 23.4004 38.0465C24.1621 38.0465 24.7811 38.3057 25.1889 38.7948C25.5974 39.2889 25.7597 39.9785 25.6425 40.7386Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M43.6625 35.3926H40.9675C40.7103 35.3926 40.4688 35.5234 40.323 35.7424L36.6061 41.3514L35.0306 35.9614C34.9316 35.6241 34.6276 35.3926 34.2838 35.3926H31.6355C31.3137 35.3926 31.0901 35.7147 31.1924 36.025L34.161 44.9497L31.3701 48.9857C31.1508 49.3037 31.3718 49.7407 31.7509 49.7407H34.4426C34.6981 49.7407 34.9372 49.6133 35.0822 49.3985L44.0457 36.1434C44.2603 35.8263 44.04 35.3926 43.6625 35.3926Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M52.5854 30.084H46.9844C46.6018 30.084 46.2761 30.3692 46.2161 30.7568L43.9512 45.469C43.9061 45.7594 44.1256 46.0212 44.4114 46.0212H47.2856C47.5526 46.0212 47.7811 45.8215 47.8229 45.5496L48.4656 41.3794C48.5246 40.991 48.8513 40.7056 49.2337 40.7056H51.0059C54.6958 40.7056 56.8239 38.8768 57.3809 35.2526C57.6323 33.667 57.3908 32.4212 56.6659 31.5488C55.8708 30.5907 54.46 30.084 52.5854 30.084ZM53.2315 35.4573C52.9262 37.516 51.3908 37.516 49.9053 37.516H49.0609L49.6546 33.6712C49.6898 33.4389 49.8848 33.2677 50.1148 33.2677H50.5023C51.5128 33.2677 52.4675 33.2677 52.9606 33.8583C53.2544 34.2107 53.3438 34.7342 53.2315 35.4573Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M69.3263 35.3912H66.6462C66.4159 35.3912 66.2202 35.5623 66.1859 35.7947L66.0672 36.5632L65.8789 36.2847C65.2982 35.4214 64.0043 35.1328 62.7122 35.1328C59.7487 35.1328 57.2182 37.4324 56.7253 40.658C56.4698 42.267 56.8325 43.8057 57.7235 44.8787C58.5424 45.8653 59.7102 46.2763 61.1013 46.2763C63.4892 46.2763 64.8135 44.7034 64.8135 44.7034L64.694 45.4666C64.6488 45.7587 64.8683 46.0204 65.1557 46.0204H67.5707C67.9531 46.0204 68.279 45.7351 68.3387 45.3467L69.7891 35.9432C69.8332 35.6538 69.6137 35.3912 69.3263 35.3912ZM65.5881 40.7386C65.3309 42.3081 64.1133 43.3619 62.5624 43.3619C61.7851 43.3619 61.1613 43.1059 60.7616 42.621C60.3652 42.1396 60.2161 41.4542 60.3407 40.6908C60.5839 39.1344 61.8188 38.0465 63.346 38.0465C64.1077 38.0465 64.7267 38.3057 65.1345 38.7948C65.5447 39.2889 65.7068 39.9785 65.5881 40.7386Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M72.486 30.4884L70.1874 45.47C70.1423 45.7601 70.3618 46.022 70.6476 46.022H72.9585C73.3426 46.022 73.6685 45.7367 73.7275 45.3483L75.9942 30.6368C76.0391 30.3466 75.8196 30.084 75.5339 30.084H72.9462C72.7178 30.0848 72.5212 30.256 72.486 30.4884Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const visa = {
	id: "105:344",
	categories: [
		"payment"
	],
	terms: [
		"Visa",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
		color: {
			id: "88:1956",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1956",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e8f/efdc/d12e46dcc9ea323a49c146624e4989cb",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M35.1999 50.9271H29.3674L33.0156 29.1465H38.8478L35.1999 50.9271Z\" fill=\"#00579F\" class=\"fill-green\" />\n  <path d=\"M56.3444 29.6773C55.194 29.2366 53.3695 28.75 51.1132 28.75C45.3534 28.75 41.2975 31.7157 41.2726 35.9558C41.2246 39.084 44.1766 40.8217 46.3843 41.8648C48.6409 42.9306 49.4079 43.6263 49.4079 44.5763C49.3849 46.0356 47.5845 46.7081 45.9051 46.7081C43.5766 46.7081 42.3289 46.3614 40.4329 45.5496L39.6647 45.2015L38.8486 50.0908C40.2166 50.6927 42.7369 51.2266 45.3534 51.25C51.4734 51.25 55.4575 48.3302 55.5047 43.8117C55.5281 41.3322 53.9693 39.4323 50.6089 37.88C48.5691 36.8833 47.3197 36.2115 47.3197 35.1917C47.3437 34.2648 48.3763 33.3153 50.6791 33.3153C52.5752 33.2688 53.9684 33.7089 55.0237 34.1493L55.5513 34.3805L56.3444 29.6773Z\" fill=\"#00579F\" class=\"fill-green\" />\n  <path d=\"M64.0949 43.2109C64.5753 41.9597 66.4237 37.117 66.4237 37.117C66.3994 37.1634 66.9029 35.8426 67.1909 35.0317L67.5986 36.9084C67.5986 36.9084 68.7031 42.1219 68.943 43.2109C68.0313 43.2109 65.2469 43.2109 64.0949 43.2109ZM71.2944 29.1465H66.783C65.3918 29.1465 64.3347 29.5401 63.7347 30.9536L55.071 50.9268H61.191C61.191 50.9268 62.1986 48.2385 62.415 47.6596C63.0864 47.6596 69.04 47.6596 69.9035 47.6596C70.0709 48.4242 70.5994 50.9268 70.5994 50.9268H75.9999L71.2944 29.1465Z\" fill=\"#00579F\" class=\"fill-green\" />\n  <path d=\"M24.4952 29.1465L18.7831 43.9986L18.159 40.9866C17.1031 37.5108 13.7911 33.7345 10.0952 31.8569L15.3271 50.9039H21.4948L30.6625 29.1465H24.4952Z\" fill=\"#00579F\" class=\"fill-green\" />\n  <path d=\"M13.4799 29.1465H4.09601L4 29.5866C11.3202 31.394 16.168 35.7508 18.1597 40.9875L16.1199 30.9773C15.7839 29.5862 14.7519 29.1924 13.4799 29.1465Z\" fill=\"#FAA61A\" class=\"fill-orange\" />\n</svg>"
		},
		bold: {
			id: "88:1954",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1954",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56c2/823e/ae625f06e7dc8ec87758abb8b4d2e217",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M35.1999 50.9271H29.3674L33.0156 29.1465H38.8478L35.1999 50.9271Z\" fill=\"currentColor\" />\n  <path d=\"M56.3444 29.6773C55.194 29.2366 53.3695 28.75 51.1132 28.75C45.3534 28.75 41.2975 31.7157 41.2726 35.9558C41.2246 39.084 44.1766 40.8217 46.3843 41.8648C48.6409 42.9306 49.4079 43.6263 49.4079 44.5763C49.3849 46.0356 47.5845 46.7081 45.9051 46.7081C43.5766 46.7081 42.3289 46.3614 40.4329 45.5496L39.6647 45.2015L38.8486 50.0908C40.2166 50.6927 42.7369 51.2266 45.3534 51.25C51.4734 51.25 55.4575 48.3302 55.5047 43.8117C55.5281 41.3322 53.9693 39.4323 50.6089 37.88C48.5691 36.8833 47.3197 36.2115 47.3197 35.1917C47.3437 34.2648 48.3763 33.3153 50.6791 33.3153C52.5752 33.2688 53.9684 33.7089 55.0237 34.1493L55.5513 34.3805L56.3444 29.6773Z\" fill=\"currentColor\" />\n  <path d=\"M64.0949 43.2109C64.5753 41.9597 66.4237 37.117 66.4237 37.117C66.3994 37.1634 66.9029 35.8426 67.1909 35.0317L67.5986 36.9084C67.5986 36.9084 68.7031 42.1219 68.943 43.2109C68.0313 43.2109 65.2469 43.2109 64.0949 43.2109ZM71.2944 29.1465H66.783C65.3918 29.1465 64.3347 29.5401 63.7347 30.9536L55.071 50.9268H61.191C61.191 50.9268 62.1986 48.2385 62.415 47.6596C63.0864 47.6596 69.04 47.6596 69.9035 47.6596C70.0709 48.4242 70.5994 50.9268 70.5994 50.9268H75.9999L71.2944 29.1465Z\" fill=\"currentColor\" />\n  <path d=\"M24.4952 29.1465L18.7831 43.9986L18.159 40.9866C17.1031 37.5108 13.7911 33.7345 10.0952 31.8569L15.3271 50.9039H21.4948L30.6625 29.1465H24.4952Z\" fill=\"currentColor\" />\n  <path d=\"M13.4799 29.1465H4.09601L4 29.5866C11.3202 31.394 16.168 35.7508 18.1597 40.9875L16.1199 30.9773C15.7839 29.5862 14.7519 29.1924 13.4799 29.1465Z\" fill=\"currentColor\" />\n</svg>"
		},
		path: {
			id: "88:1952",
			source: "https://www.figma.com/file/vuadSjKf4P4foe0E5rCURn?node-id=88:1952",
			url: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/600f/7258/f33a929ef37659f1b1c07b9c679d13ba",
			svg: "<svg viewBox=\"0 0 80 80\" fill=\"none\">\n  <path d=\"M35.1999 50.9271H29.3674L33.0156 29.1465H38.8478L35.1999 50.9271Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M56.3444 29.6773C55.194 29.2366 53.3695 28.75 51.1132 28.75C45.3534 28.75 41.2975 31.7157 41.2726 35.9558C41.2246 39.084 44.1766 40.8217 46.3843 41.8648C48.6409 42.9306 49.4079 43.6263 49.4079 44.5763C49.3849 46.0356 47.5845 46.7081 45.9051 46.7081C43.5766 46.7081 42.3289 46.3614 40.4329 45.5496L39.6647 45.2015L38.8486 50.0908C40.2166 50.6927 42.7369 51.2266 45.3534 51.25C51.4734 51.25 55.4575 48.3302 55.5047 43.8117C55.5281 41.3322 53.9693 39.4323 50.6089 37.88C48.5691 36.8833 47.3197 36.2115 47.3197 35.1917C47.3437 34.2648 48.3763 33.3153 50.6791 33.3153C52.5752 33.2688 53.9684 33.7089 55.0237 34.1493L55.5513 34.3805L56.3444 29.6773Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M64.0949 43.2109C64.5753 41.9597 66.4237 37.117 66.4237 37.117C66.3994 37.1634 66.9029 35.8426 67.1909 35.0317L67.5986 36.9084C67.5986 36.9084 68.7031 42.1219 68.943 43.2109C68.0313 43.2109 65.2469 43.2109 64.0949 43.2109ZM71.2944 29.1465H66.783C65.3918 29.1465 64.3347 29.5401 63.7347 30.9536L55.071 50.9268H61.191C61.191 50.9268 62.1986 48.2385 62.415 47.6596C63.0864 47.6596 69.04 47.6596 69.9035 47.6596C70.0709 48.4242 70.5994 50.9268 70.5994 50.9268H75.9999L71.2944 29.1465Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M24.4952 29.1465L18.7831 43.9986L18.159 40.9866C17.1031 37.5108 13.7911 33.7345 10.0952 31.8569L15.3271 50.9039H21.4948L30.6625 29.1465H24.4952Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M13.4799 29.1465H4.09601L4 29.5866C11.3202 31.394 16.168 35.7508 18.1597 40.9875L16.1199 30.9773C15.7839 29.5862 14.7519 29.1924 13.4799 29.1465Z\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>"
		}
	}
};
const base = {
	id: "105:352",
	categories: [
	],
	terms: [
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const jcb = {
	id: "105:0",
	categories: [
		"payment"
	],
	terms: [
		"JCB",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const giropay = {
	id: "105:6",
	categories: [
		"payment"
	],
	terms: [
		"Giropay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const ideal = {
	id: "105:33",
	categories: [
		"payment"
	],
	terms: [
		"Ideal",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const bancontact = {
	id: "105:49",
	categories: [
		"payment"
	],
	terms: [
		"Bancontact",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const unionPay = {
	id: "105:70",
	categories: [
		"payment"
	],
	terms: [
		"UnionPay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const sepa = {
	id: "105:77",
	categories: [
		"payment"
	],
	terms: [
		"SEPA",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const amazonPay = {
	id: "105:131",
	categories: [
		"payment"
	],
	terms: [
		"AmazonPay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const sofort = {
	id: "105:150",
	categories: [
		"payment"
	],
	terms: [
		"Sofort",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const klarna = {
	id: "105:171",
	categories: [
		"payment"
	],
	terms: [
		"Klarna",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const yandex = {
	id: "105:186",
	categories: [
		"payment"
	],
	terms: [
		"Yandex",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const qiwi = {
	id: "105:189",
	categories: [
		"payment"
	],
	terms: [
		"Qiwi",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const alipay = {
	id: "105:196",
	categories: [
		"payment"
	],
	terms: [
		"Alipay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const weChat = {
	id: "105:201",
	categories: [
		"payment"
	],
	terms: [
		"WeChat",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const etherium = {
	id: "105:204",
	categories: [
		"payment"
	],
	terms: [
		"Etherium",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const bitcoin = {
	id: "105:214",
	categories: [
		"payment"
	],
	terms: [
		"Bitcoin",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const bitpay = {
	id: "105:225",
	categories: [
		"payment"
	],
	terms: [
		"Bitpay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const payPal = {
	id: "105:241",
	categories: [
		"payment"
	],
	terms: [
		"PayPal",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const stripe = {
	id: "105:248",
	categories: [
		"payment"
	],
	terms: [
		"Stripe",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const skrill = {
	id: "105:262",
	categories: [
		"payment"
	],
	terms: [
		"Skrill",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const googlePay = {
	id: "105:272",
	categories: [
		"payment"
	],
	terms: [
		"GooglePay",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const discover = {
	id: "105:311",
	categories: [
		"payment"
	],
	terms: [
		"Discover",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const dinersClub = {
	id: "105:336",
	categories: [
		"payment"
	],
	terms: [
		"DinersClub",
		"BASE",
		"This is a base “building block” component. \nAny changes to this element will be reflected on all other icons on this page. A simple way to change border radius or size."
	],
	variants: {
	}
};
const components = {
	icons: icons,
	figma: figma,
	sketch: sketch,
	zeplin: zeplin,
	invision: invision,
	dribbble: dribbble,
	behance: behance,
	node: node,
	nodeJs: nodeJs,
	pwa: pwa,
	webComponents: webComponents,
	stencil: stencil,
	github: github,
	discord: discord,
	discordFull: discordFull,
	npm: npm,
	chrome: chrome,
	firefox: firefox,
	google: google,
	applePay: applePay,
	amex: amex,
	mastercard: mastercard,
	paypal: paypal,
	visa: visa,
	base: base,
	jcb: jcb,
	giropay: giropay,
	ideal: ideal,
	bancontact: bancontact,
	unionPay: unionPay,
	sepa: sepa,
	amazonPay: amazonPay,
	sofort: sofort,
	klarna: klarna,
	yandex: yandex,
	qiwi: qiwi,
	alipay: alipay,
	weChat: weChat,
	etherium: etherium,
	bitcoin: bitcoin,
	bitpay: bitpay,
	payPal: payPal,
	stripe: stripe,
	skrill: skrill,
	googlePay: googlePay,
	discover: discover,
	dinersClub: dinersClub
};

const components$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	icons: icons,
	figma: figma,
	sketch: sketch,
	zeplin: zeplin,
	invision: invision,
	dribbble: dribbble,
	behance: behance,
	node: node,
	nodeJs: nodeJs,
	pwa: pwa,
	webComponents: webComponents,
	stencil: stencil,
	github: github,
	discord: discord,
	discordFull: discordFull,
	npm: npm,
	chrome: chrome,
	firefox: firefox,
	google: google,
	applePay: applePay,
	amex: amex,
	mastercard: mastercard,
	paypal: paypal,
	visa: visa,
	base: base,
	jcb: jcb,
	giropay: giropay,
	ideal: ideal,
	bancontact: bancontact,
	unionPay: unionPay,
	sepa: sepa,
	amazonPay: amazonPay,
	sofort: sofort,
	klarna: klarna,
	yandex: yandex,
	qiwi: qiwi,
	alipay: alipay,
	weChat: weChat,
	etherium: etherium,
	bitcoin: bitcoin,
	bitpay: bitpay,
	payPal: payPal,
	stripe: stripe,
	skrill: skrill,
	googlePay: googlePay,
	discover: discover,
	dinersClub: dinersClub,
	'default': components
});

const variants = [
	"color",
	"bold",
	"path"
];

const iconCss = ":host {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n\n  contain: strict;\n  box-sizing: content-box !important;\n}\n\n.icon-inner,\nsvg {\n  display: block;\n  overflow: visible;\n\n  height: 100%;\n  width: 100%;\n}\n\n.path, .bold, .mono, .line {\n  & > svg *[stroke] {\n    stroke: currentColor;\n  }\n}\n\n.path, .bold, .mono, .line {\n  & > svg *[fill] {\n    fill: currentColor;\n  }\n}\n";

const Icon = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.components = components$1;
    /**
     * The size of the icon in CSS units
     */
    this.size = null;
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
    if (Build.isBrowser) {
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
    const rotation = (value) => {
      if (isNaN(value)) {
        return {
          n: 0,
          nne: 22.5,
          ne: 45,
          ene: 67.5,
          e: 90,
          ese: 112.5,
          se: 135,
          sse: 157.5,
          s: 180,
          ssw: 202.5,
          sw: 225,
          wsw: 247.5,
          w: 270,
          wnw: 292.5,
          nw: 315,
          nnw: 337.5
        }[value];
      }
      return value;
    };
    const fontSize = this.size || 'auto';
    const strokeWidth = this.strokeWidth;
    const stroke = 'inherit';
    const rotate = this.rotate && !['0', 'n'].includes(this.rotate) && `rotate(${rotation(this.rotate)}deg)`;
    const scale = this.flip && {
      v: 'scaleX',
      x: 'scaleX',
      h: 'scaleY',
      y: 'scaleY',
      a: 'scale',
      xy: 'scale',
      yx: 'scale',
      hv: 'scale',
      vh: 'scale'
    }[this.flip] + '(-1)';
    const transform = (rotate && scale) ? `${rotate} ${scale}` : ((rotate || scale) || '');
    return (h(Host, { role: "img", class: Object.assign(Object.assign({}, (this.flip && {
        [`flip-${this.flip}`]: true
      })), (this.rotate && {
        [this.rotate]: true,
      })), style: {
        fontSize,
        strokeWidth,
        stroke,
        transform
      } }, ((Build.isBrowser && this.svgContent)
      ? h("div", { class: "icon-inner", innerHTML: this.svgContent })
      : h("div", { class: "icon-inner" }))));
  }
  get el() { return this; }
  static get watchers() { return {
    "variant": ["loadIcon"],
    "name": ["loadIcon"],
    "src": ["loadIcon"],
    "size": ["loadIcon"],
    "flip": ["loadIcon"],
    "rotate": ["loadIcon"],
    "strokeWidth": ["loadIcon"]
  }; }
  static get style() { return iconCss; }
};

const BrandIcon = /*@__PURE__*/proxyCustomElement(Icon, [1,"brand-icon",{"ariaLabel":[1537,"aria-label"],"flip":[1],"name":[1],"src":[1],"icon":[8],"size":[8],"rotate":[1],"variant":[1],"strokeWidth":[8,"stroke-width"],"svgContent":[32],"components":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      BrandIcon
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { BrandIcon, defineCustomElements };
