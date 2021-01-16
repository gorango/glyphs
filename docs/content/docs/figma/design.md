---
title: Design
category: Figma File
position: 6
---

> This page documents the design of icon sets and optimizations required for exporting SVGs using the Figma REST API. The guides on this page assume a basic understanding of Figma’s interface, its component system, and vector graphics more broadly.

### Icons

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
