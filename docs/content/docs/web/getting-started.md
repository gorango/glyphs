---
title: Getting Started
description: Get started using the web component
category: Web Components
position: 12
---

There are several ways to integrate icons from Figma into a web development project. The assets from Figma are exported and packaged into several distributions:

- [Raw SVG files](#raw-files)
- [Webpack build system](#webpack)
- [Web component](/docs/web/component)
- [VueJS component](/docs/web/frameworks#vuejs-component)
- [ReactJS component](/docs/web/frameworks#reactjs-component)

## Raw Files

The raw SVG files can be downloaded from the GitHub repo or from NPM:

```bash
npm i @glyphs/core
npm i @glyphs/brands
npm i @glyphs/flags
```

These packages all contain the exported icons nested in their variants' folders. Additional files provide meta data on each package.

#### Folder structure

```bash
.
├── <variant>                 # Folder containing all SVGs for that variant
│   ├── <icon-name>.svg       # Icon file
│   └── # ...
├── <variant>
│   └── # ...
├── preview.html              # HTML preview of the complete icon set
├── components.json           # Meta data for each of the icons
├── meta.json                 # Meta data for the complete icon set
├── map.json                  # id:svg map file for all icon variants
└── # ...                     # Other files, including package.json, readme.md, changelog.md, glyphs.config.js
```

- All SVG files are organized into folders based on their variants.
- The `components.json` file contains additional details on each icon, including its categories, search terms, and source ids for each variant.
- The `meta.json` file contains information about the whole icon set, including its name, icon counts, variants, and categories.
- The `map.json` a dictionary of all the variants SVGs indexed according to ID.


## Webpack

Developers can use the raw SVG assets by downloading the icon sets from NPM or GitHub and importing them into their projects.

If you are using Webpack as a build system, you can add specific loaders to allow you to import SVGs from `node_modules` or other locations.
