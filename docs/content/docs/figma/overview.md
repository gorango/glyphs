---
title: Overview
category: Figma File
position: 4
---

### Source File

<alert>

[cf]: https://www.figma.com/community/file/899031264835768805/Glyphs-Icons
[of]: https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7/Glyphs-Icons

Duplicate the [community file][cf] to make changes to the icons or to build your own sets.

Check the [original file][of] for the latest updates and to provide any feedback.

</alert>

<!-- <a class="block rounded-2xl overflow-hidden" href="https://www.figma.com/community/file/899031264835768805/Glyphs-Icons">
  <img class="show-dark" src="/content/community-dark.jpg" style="margin: 0" alt="Community File Preview" />
  <img class="show-light" src="/content/community-light.jpg" style="margin: 0" alt="Community File Preview" />
</a> -->

The entire Glyphs design system is built around the Figma file. The files are laid out with specific rules in order to facilitate integration with other tools in this project. Internally, the files are designed with Figma’s components and variants. Modifying the core component or any of its internal components will be reflected in all variants, and in any other places where the icon is being used.

### Editing

[cli]: /docs/cli/install-cli
[plugin]: /docs/plugin/install-plugin
[bo]: https://help.figma.com/hc/en-us/articles/360039957534-Boolean-Operations
[st]: https://help.figma.com/hc/en-us/articles/360040450133-Using-Shape-Tools


All icons are made using only [basic shapes][st], joined with [boolean operations][bo], and styled with corner roundings and stroke effects. Modifying the core component or any of its internal components will be reflected in all variants, and in any other places where the icon is being used.

Icons can include any number of variants -  depending on a particular icon set. The variants are made by modfying the properties on the main component, including fills, strokes, colors and corner roundings. Boolean operations are also used to create different appearances.

For large changes, it is recommended to use the [Glyphs Figma plugin][plugin], which adds functionality to the Figma UI and improves the workflow when working on large sets with many icons.

### Exporting

<alert type="warning">

Figma has some unexpected behavior with its SVG conversions using the REST API.

Certain icon variants need to be "flattened" before export to ensure accurate renders. There are workarounds to all of these behaviors and they require additional implementation.

</alert>

Read more about [preparing files for export](/docs/figma/exporting) and some [common issues](/docs/figma/exporting#common-issues).

Use the [Glyphs CLI][cli] to automate the process of exporting and packaging icons.
