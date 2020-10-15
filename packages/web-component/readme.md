# Icons Web Component

A growing set of SVG icons that can be used with a single universal [web component](https://www.webcomponents.org/). Lightweight, flexible, framework-agnostic, and MIT-licensed open source.

Search and explore [glyphs.fyi](https://glyphs.fyi).

![](svg/poly/hand.svg)
![](svg/poly/person.svg)
![](svg/poly/globe-earth.svg)
![](svg/poly/arrows-cross.svg)
![](svg/poly/pen-fountain.svg)
![](svg/poly/palette.svg)
![](svg/poly/aperture.svg)
![](svg/poly/image.svg)

___

## Contents

- [Installation](##Installation)
   - [CDN](###CDN)
   - [NPM](###NPM)
- [Usage](##Usage)
   - [Basic](###Basic)
   - [Variant](###Variant)
   - [Rotate](###Rotate)
   - [Flip](###Flip)
   - [Stroke](###Stroke)
- [Developing](##Developing)
- [Testing](##Testing)
- [License](##License)


## Installation

The `svg-icon` component is a [web component](https://www.webcomponents.org/) built with [Stencil](https://stenciljs.com/), so it is easy to use in any modern browser environment. And it only takes a few lines of additional code to integrate with Vue, React, Angular, or any other web framework.

### CDN

Add the following `script` tag to your page to enable the web component.

```html
<script src="https://unpkg.com/@glyphs/rounded-icon/dist/rounded-icon/rounded-icon.esm.js"></script>
```

### NPM

If you are using a build system for your project or if you just want to access the SVGs, you can install the package from NPM.

```
npm install @glyphs/core
```

#### Framework Integration

Follow [this short guide](https://stenciljs.com/docs/overview) to quickly integrate with Vue, React, Angular, or Ember.

## Usage

The `svg-icon` web component is an easy and performant way to use icons in your app. The component will dynamically load an SVG for each icon. Only visible icons are loaded and icons which are not in view do not take up any additional resources from the browser.

Read the [icon component properties](src/components/icon/readme.md) to understand all of the options available. The following are a few common use-cases.

### Basic

To get started, you only need to provide the `name` attribute on the `svg-icon` component.


```html
<svg-icon name="heart"></svg-icon>
```

### Variant

Available variants are `path`, `bold`, `mono`, `poly`, and `line`.

```html
<svg-icon name="arrow" variant="mono"></svg-icon>
```

### Rotate

Rotation can be expressed in degrees: `45`, `90`, `135`, `180`, `-135`, `-90`, `-45`, `0` <br>
Or using navigational headings: `ne`, `e`, `se`, `s`, `sw`, `w`, `nw`, `n`

_Coming Soon: 8 additional steps of 25 degrees_

```html
<svg-icon name="arrow-solid-curve" rotate="90"></svg-icon>
```

### Flip

Flips can be achieved across the `"v"`ertical or `"y"` axis and the `"h"`orizontal or `"x"` axis. The two can also be combined (like `"xy"`, `"hv"`).

```html
<svg-icon name="hand" flip="x"></svg-icon>
```

### Stroke-Width

This property only works when the `variant` is set to `path`, or when the `variant` property is excluded.

```html
<svg-icon name="arrow" stroke-width="1.2"></svg-icon>
```

## Developing

```
npm run dev
```

The source file is designed and managed in Figma.

The sync between Figma and this repository is currently being carried out with a local cli tool, which will soon be released.

## Testing

There are currently several unit tests for the component itself along with its utilities.

```
npm run test
```

## License

Glyphs is licensed under the [MIT license](https://opensource.org/licenses/MIT).
