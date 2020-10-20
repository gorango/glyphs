'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a6a4cb27.js');

/*
 Stencil Client Patch Esm v2.1.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["glyph-icon.cjs",[[1,"glyph-icon",{"ariaLabel":[1537,"aria-label"],"flip":[1],"name":[1],"src":[1],"icon":[8],"size":[8],"rotate":[1],"variant":[1],"strokeWidth":[8,"stroke-width"],"svgContent":[32],"components":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
