import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'rounded-icon',
  srcDir: 'src',
  preamble: 'Just Icons - Built with Stencil',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
