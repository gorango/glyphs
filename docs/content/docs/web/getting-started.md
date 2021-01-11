---
title: Getting Started
description: Get started using the web component
category: Web Components
position: 71
---

There are several ways to integrate icons from into a web development project. The assets from Figma are exported and packaged into several distributions:

- [Raw SVG files](#raw-files)
- [Webpack build system](#webpack)
- [Coming Soon]: Web component
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

```bash
.
├── meta.json                 # Meta data for the complete set
├── components.json           # Meta data for each of the icons
├── preview.html              # HTML preview of the complete icon set
├── <variant-1>               # Folder containing all SVGs for that variant
│   ├── <icon-name>.svg       # Icon name
│   └── # ...
├── <variant-2>
│   └── # ...
└── # ...                     # Other files, including package.json, readme.md, changelog.md, glyphs.config.js
```

- All SVG files are organized into folders based on their variants.
- The `components.json` file contains additional details on each icon, including its categories, search terms, source ids as well as the SVG strings of each variant.
- The `meta.json` file contains information about the whole icon set, including its name, icon counts, variants, and categories.


## Webpack

Official packages for major Javascript frameworks are coming soon. However, developers can still use the assets by downloading the icon sets from NPM or GitHub and importing them into their projects.

If you are using Webpack as a build system, you can add specific loaders to allow you to import SVGs from `node_modules` or other locations.

## Components

<alert>

Coming soon... Under active development.

</alert>
