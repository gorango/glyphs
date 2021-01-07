---
title: Standard Component
category: Web Components
position: 23
---

## Introduction

[Stencil]: https://stenciljs.com/
[wc]: https://www.webcomponents.org/
[rd]: https://figma.com/rounded
[bd]: https://figma.com/brand
[fd]: https://figma.com/flag
[rf]: https://figma.com/rounded
[bf]: https://figma.com/brand
[ff]: https://figma.com/flag

This project uses [Stencil] to generate [standard web components][wc] for universal use on the web. This makes it simple to use in any modern browser environment and in any web framework or CMS platform.

Currently this project supplies three different icon sets along with three dedicated web components:

### `<rounded-icon />`
[@glyphs/rounded-icon][rf]
### `<brand-icon />`
[@glyphs/brand-icon][bf]
### `<flag-icon />`
[@glyphs/flag-icon][ff]

## Install

Install via CDN, NPM, or build from source.

### CDN

Add the following `script` tag to your page to use the web component anywhere in your website.

```html
<script type="module" src="https://unpkg.com/@glyphs/rounded/dist/rounded-icon/rounded-icon.esm.js"></script>
```

### NPM

If you are using a build system for your project or if you just want to access the SVGs, you can install the package from NPM.

```bash
npm install @glyphs/rounded
# or
npm install @glyphs/brands
# or
npm install @glyphs/flags
```

## Usage

The following guide uses the `<rounded-icon />` icon set in examples but the same principles apply for all other components.

The web component is an easy and performant way to use icons in your app. The component will dynamically load an SVG for each icon and apply any transformations that are passed in with parameters.

The following are some common use cases.

### Basic

To get started, you only need to provide the `name` attribute on the `rounded-icon` component.


```html
<rounded-icon name="heart"></rounded-icon>
```

### Variant

Available variants are `path`, `outline`, `solid`, `mono`, and `poly`.

```html
<rounded-icon name="arrow" variant="mono"></rounded-icon>
```

### Rotate

Rotation can be expressed in degrees: `45`, `90`, `135`, `180`, `-135`, `-90`, `-45`, `0` <br>
Or using navigational headings: `ne`, `e`, `se`, `s`, `sw`, `w`, `nw`, `n`

```html
<rounded-icon name="arrow-solid-curve" rotate="90"></rounded-icon>
```

### Flip

Flips can be achieved across the `"v"`ertical or `"y"` axis and the `"h"`orizontal or `"x"` axis. The two can also be combined (like `"xy"`, `"hv"`).

```html
<rounded-icon name="hand" flip="x"></rounded-icon>
```

### Stroke-Width

This property only works when the `variant` is set to `path`, or when the `variant` property is excluded.

```html
<rounded-icon name="arrow" stroke-width="1.2"></rounded-icon>
```

<!-- ## Development

Clone the project from GitHub.

```bash
cd web-component
npm run dev
```

Navigate to http://localhost:9000 -->
