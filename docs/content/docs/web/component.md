---
title: Web Components
category: Web Components
position: 14
---

There are currently three icon sets supported as web components: [Core](), [Brands](), and [Flags]().

The web components can be installed directly from [NPM](#npm) and are also available with a [CDN](#cdn) for rapid development and testing.


## Introduction

[Hybrids]: https://hybrids.js.org/
[wc]: https://www.webcomponents.org/

This project uses [Hybrids] to generate [standard web components][wc] for universal use on the web. This makes it simple to use in any modern browser environment and in any web framework or CMS platform.

## Install

Install via CDN, NPM, or build from source.

### NPM

If you are using a build system for your project or if you just want to access the SVGs, you can install the package from NPM.

```bash
npm i @glyphs/wc-core
npm i @glyphs/wc-brands
npm i @glyphs/wc-flags
```

### CDN

Add the following `script` tags to your page to use the web component anywhere in your website.

```html
<script src="https://unpkg.com/@glyphs/wc-core" type="module" ></script>
<script src="https://unpkg.com/@glyphs/wc-brands" type="module" ></script>
<script src="https://unpkg.com/@glyphs/wc-flags" type="module" ></script>
```

### Build from source

See the [Developing selction](#developing) below.

## Usage

<alert>

Examples use the `<core-icon />` set but the same principles apply for other sets.

</alert>

The component will dynamically load an SVG for each icon and apply any transformations that are passed in with parameters. The following are some common use cases.

### Basic

To get started, you only need to provide the tag for the that component you want to to include.


```html
<core-heart></rounded-icon-heart>
```

### Variant

Available variants are `path`, `bold`, `duo`, `poly`, and `outline`.

```html
<core-arrow variant="duo"></rounded-icon-arrow>
```

### Rotate

Rotation can be expressed in degrees: `45`, `90`, `135`, `180`, `-135`, `-90`, `-45`, `0` <br>
Or using navigational headings: `ne`, `e`, `se`, `s`, `sw`, `w`, `nw`, `n`

```html
<core-arrow-solid-curve" rotate="90"></rounded-icon-arrow-solid-curve>
```

### Flip

Flips can be achieved across the `"v"`ertical or `"y"` axis and the `"h"`orizontal or `"x"` axis. The two can also be combined (like `"xy"`, `"hv"`).

```html
<core-hand flip="x"></rounded-icon-hand>
```

### Stroke-Width

This property only works when the `variant` is set to `path`, or when the `variant` property is excluded.

```html
<core-arrow stroke-width="1.2"></rounded-icon-arrow>
```

## Developing

Clone the project from GitHub.

```bash
git clone https://github.com/gorango/glyphs.git
cd packages/wc/core  # /brands /flags /your-own
npm i
```

The web components package is [generated with the CLI](/docs/cli/generate) using the SVG assets exported from Figma. It reads the `glyphs.config.js` file in the root of the project for configuration options. To generate the set, run:

```bash
glyphs generate
```

To view the sandbox app with hot code reloading, run the next command and navigate to [localhost:1234](http://localhost:1234).

```bash
npm run dev
```
