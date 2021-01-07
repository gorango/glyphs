---
title: Structure
category: Figma File
position: 18
---

This page documents the design of this icon set along with the architecture for exporting SVGs using the Figma REST API.

The guides on this page assume an understanding of Figma’s interface, its component system, as well as vector graphics more broadly.

## Icons

[bo]: https://help.figma.com/hc/en-us/articles/360039957534-Boolean-Operations
[st]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools
[rect]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools#h_c29a35fb-c415-4983-886a-8f3abfb5db64
[poly]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools#h_c27f00b6-be3e-4fe5-871b-95bb54a71395
[star]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools#h_f731d0d6-c5cb-4a72-a5a8-d35fb7cea5dd
[circ]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools#h_5edec1f1-055a-46d0-b1ed-1e67d76e5532
[bool]: https://help.figma.com/hc/en-us/articles/360039957534-Boolean-Operations#Types_of_Boolean_Operations

All icons are made using only [basic shapes][st], joined with [boolean operations][bo], and styled with corner roundings and stroke effects. Modifying the core component or any of its internal components will be reflected in all variants, and in any other places where the icon is being used.

Icons can include any number of variants -  depending on a particular icon set. The variants are made by modfying the properties on the main component, including fills, strokes, colors and corner roundings. Boolean operations are also used to create different appearances.

### Simple Shapes

The majority of the core set (nearly 1000 icons) is designed using only Rectangles, Polygons, Stars, and occasional Ellipses.

### Boolean Operations

The simple shapes are joined using logical operators, such as [Union][bool], [Subtract][bool], [Intersect][bool], and [Exclude][bool] - referred to as boolean Operations. The next example illustrates each of these in turn:

### Components

Complete icons and repeating segments of icons are turned into components which then get wrapped into variants.

<!-- It may be counter-intuitive to realize that creating icons with such a simple approach may occasionally become more complicated. -->



## Layout

<!-- <div class="relative overflow-hidden w-full" style="padding-top: 56.25%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs%3Fnode-id%3D0%253A1&"
    allowfullscreen
  ></iframe>
</div> -->

### Categories

Icons are grouped into categories. The categories are loosely grouped by priority and similarity to nearby categories. Sorting icons and categories alphabetically is generally avoided in favor of a more fluid approach. As such, navigating this project for the first time might take some getting used to.

Use the Search in the Assets tab (Alt+2) to find icons (If selecting one of the results doesn’t bring it into view, you can Zoom to Selection through the menu).

### Grid

All icons are distributed on a grid composed of several rows:

- <span class="px-1 bg-purple-200 dark_bg-purple-700"><b>Drafting Row</b></span>: The top row is reserved for drafting new icons and should only contain the components used to create the source icons. These must be named with a leading double undersccore (like `__sub-component`).
- <span class="px-1 bg-pink-200 dark_bg-pink-900"><b>Component Row</b></span>: This row contains the source components and copies to be included in the category. These components must be named with a single leading underscroe (like `_main-component`).
- <span class="px-1 bg-gray-300 dark_bg-gray-700"><b>Variants Row</b></span>: There can be any number of variants as long as they retain consistent naming conventions. The component set must be named the same as its source component but without leading underscores (like `main-component`).

Explore the embedded Figma file to learn more about the grid.

<div class="hidden sm_block relative rounded-xl overflow-hidden w-full" style="padding-top: 56.25%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs-Icons%3Fnode-id%3D4856%253A37"
    allowfullscreen
  ></iframe>
</div>

<div class="sm_hidden relative rounded-xl overflow-hidden w-full" style="padding-top: 120%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs-Icons%3Fnode-id%3D4856%253A37"
    allowfullscreen
  ></iframe>
</div>

### Naming Conventions

#### Categories

Categories are used to group similar icons and to help organize the thousands of components as the project continues to grow. Multi-word names are converted to camel-case when exporting data to JSON format.

#### Components

<alert>

Icons can use any name except for the ones specified in [this document](https://mathiasbynens.be/notes/reserved-keywords).

</alert>

Components must follow strict formatting as mentioned in the [grid section](#grid).
- **Sub-components** must be named with a leading double underscore.
- **Source components** must be named with a leading single underscore.
- **Component sets** must be named the same as source components without the leading underscore.
- **Variant** names must be consistent with other variants.
- Refer to the [source file](/docs/figma/overview#source-file) on Figma for examples.

Icons with alternative designs should receive a number suffix to the name, like `house-1`. This allows for countless design alternatives.

### Search Terms

Content inside component descriptions is used to tag the icon to improve search - both in Figma (when searching Assets), as well as in other applications.

<img class="show-dark" src="/content/description-dark.png" style="margin: 0" alt="Community File Preview" />
<img class="show-light" src="/content/description-light.png" style="margin: 0" alt="Community File Preview" />

If one or more components are used to create a new icon, the terms from all the contributing components will be included in the description of the new component. To avoid this behavior, simply rename the component instance used in the new component with two leading underscores.
