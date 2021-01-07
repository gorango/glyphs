---
title: Exporting
category: Figma File
position: 19
---

<alert>

Figma has known issues when exporting nodes with nested groups (this applies only to the REST API). Read the [common issues](#common-issues) and report any [issues on GitHub]() or leave a comment in the [source file]().

</alert>

## Configuration

Icon sets can be exported with the [Glyphs CLI]() without any specified file configuration. However, you can leverage several helpful transformations that are available during export.

The following is a sample configuration for the [rounded icon set]():

<div class="relative overflow-hidden w-full" style="padding-top: 56.25%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs-Icons%3Fnode-id%3D3844%253A75606"
    allowfullscreen
  ></iframe>
</div>

### Variants

These values are used by the [plugin]() when scaffolding new variants and by the [CLI]() when generating meta data from the set.

### Replace Color

If a variant is added to this configuration, the CLI will replace all colors in all matching SVGs with `currentColor`. This enables color inheritance in HTML.

### Remove Stroke

If a variant is added to this configuration, the CLI will remove the `stroke-width` on all matching elements. This enable easier control in CSS.



## Common Issues

The [Figma plugin](/docs/plugin/install-plugin) can help perform most of the optimizations required for successful exports.

### Exporting boolean groups

If there are any nodes created with boolean operators at the root level of a component, the following workaround is recommended.

1. (Optional) Duplicate the source component and hide the layer to retain the source
2. (Optional) Detatch instance from the copy and ungroup the layers
3. Flatten the visible objects at the root of the variant frame


