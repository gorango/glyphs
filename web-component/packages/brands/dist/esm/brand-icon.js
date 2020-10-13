import { p as promiseResolve, b as bootstrapLazy } from './index-54e0e8a5.js';

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["brand-icon",[[1,"brand-icon",{"ariaLabel":[1537,"aria-label"],"flip":[1],"name":[1],"src":[1],"icon":[8],"size":[1],"rotate":[1],"variant":[1],"strokeWidth":[8,"stroke-width"],"svgContent":[32],"components":[32]}]]]], options);
});
