# Glyphs Utils

> A Figma plugin to provide utility functions for working with the Glyphs icon design system.

The main plugin code is in `src/code.ts` and in `src/utils. The embedded JavaScript is in `src/ui.js` and the Vue script is in `src/App.vue`.

These are compiled to files in `build/`, which are what Figma will use to run the plugin as set in the `manifest.json`.

To build:

    $ npm install
    $ npm run build
