---
title: Getting Started
description: Get started using the web component
category: Web Components
position: 21
---

This project currently supports several ways of integrating icons from Figma:

- Using the [raw SVG](#raw-files) files
- Using the universal [web component](#web-component)
- Using a [webpack](@webpack) build system
- [Coming Soon]: VueJS component
- [Coming Soon]: ReactJS component
- [Coming Soon]: AngularJS component

## Raw Files

The raw SVG files can be downloaded from the GitHub repo or from NPM:

```bash
npm i @glyphs/rounded
npm i @glyphs/brands
npm i @glyphs/flags
```

These packages all contain the same internal structure:

- All SVG files are organized into folders based on their variants.
- The `components.json` file contains additional details on each icon, including its categories, search terms, source ids as well as the SVG strings of each variant.
- The `meta.json` file contains information about the whole icon set, including its name, icon counts, variants, and categories.


## Web Component

There are currently 3 sets supported as web components: `<rounded-icon>`, `<brand-icon>`, and `<flag-icon>`. The following examples can be adapted for any of those sets.

The web components can be installed directly from NPM:

```bash
npm i @glyphs/rounded-icon
```

They are also available with a CDN for rapid development and testing:

```html
<script src="https://unpkg.com/@glyphs/rounded/dist/rounded-icon/rounded-icon.esm.js" type="module" ></script>
```

See complete docs in the [Web Component section](/docs/web/component)

## Webpack

Official packages for major Javascript frameworks are coming soon. However, developers can still use the assets by downloading the icon sets from NPM or GitHub and importing them into their projects.