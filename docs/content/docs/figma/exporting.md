---
title: Exporting
category: Figma File
position: 19
---

<alert>

Figma has known issues when exporting nodes with nested groups (this applies only to the REST API). Read the [common issues](#common-issues) and report any [issues on GitHub](https://github.com/gorango/glyphs/issues) or leave a comment in the [source file](https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7).

</alert>

## Configuration

<div class="hidden sm_block relative rounded-xl overflow-hidden w-full" style="padding-top: 56.25%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs-Icons%3Fnode-id%3D3844%253A75606"
    allowfullscreen
  ></iframe>
</div>

<div class="sm_hidden relative rounded-xl overflow-hidden w-full" style="padding-top: 100%">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F2TsY9yqFso1zrvF8LNcVE7%2FGlyphs-Icons%3Fnode-id%3D3844%253A75606"
    allowfullscreen
  ></iframe>
</div>

Icon sets can be exported with the [Glyphs CLI](/docs/cli/install-cli) without any specified file configuration. However, you can leverage several helpful transformations that are available during export.

The following is a sample configuration for the [rounded icon set](https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7/?node-id=0%3A1):

### Variants

These values are used by the [plugin](/docs/plugin/install-plugin) when scaffolding new variants and by the [CLI](/docs/cli/install-cli) when generating meta data from the set.

### Replace Color

If a variant is added to this configuration, the CLI will replace all colors in all matching SVGs with `currentColor`. This enables color inheritance in HTML.

### Remove Stroke

If a variant is added to this configuration, the CLI will remove the `stroke-width` on all matching elements. This enable easier control in CSS.



## Common Issues

The [Figma plugin](/docs/plugin/install-plugin) can help perform most of the optimizations required for successful exports.

### Line-only SVGs

All of the icons in the core set are designed in such a way that flattening them (Ctrl/Cmd + E) will create a line-only representation of the component.

If the icons are not flattened, Figma's export will convert certain layers to lines and certain other layers to outlined vectors. This disables control over the stroke-widths of those layers.

**The Solution**

- Use the plugin's [Multi Select](/docs/plugin/features#multi-select) feature to select all the variants you want to change.
- In the [Selection Actions](/docs/plugin/features#selection-actians), run `Flatten child layers & preserve original`. This will clone & hide the original component, flattening the clone to a line-only path.
- If the core component changes, re-run [Multi Select](/docs/plugin/features#multi-select) on the target variants.
- In the [Target Layers](/docs/plugin/features#target-layers) section, click on `Select Visible` to select the flattened layer.
- In [Selection Actions](/docs/plugin/features#selection-actions), click on `Remove Layers`. This will return your selection back to your variants.
- Re-run `Flatten child layers & preserve original` from [Selection Actions](/docs/plugin/features#selection-actions).

### Exporting boolean groups

If there are any nodes created with boolean operators at the root level of a component, the following workaround is recommended.

1. (Optional) Duplicate the source component and hide the layer to retain the source
2. (Optional) Detatch instance from the copy and ungroup the layers
3. Flatten the visible objects at the root of the variant frame


