---
title: Exporting
category: Figma File
position: 10
---

<alert>

Figma has known issues when exporting nodes with nested groups (this applies only to the REST API). Please report any [issues on GitHub](https://github.com/gorango/glyphs/issues) or leave a comment in the [source file](https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7).

The [Figma plugin](/docs/plugin/install-plugin) can help perform most of the optimizations required for successful exports.

</alert>


## Common Issues


### Line-only SVGs

All of the icons in the core set are designed in such a way that flattening them (Ctrl/Cmd + E) will create a line-only representation of the component.

If the icons are not flattened, Figma's export will convert certain layers to lines and certain other layers to outlined vectors. This disables control over the <span class="info-tag" title="width, linecap, dasharray">stroke properties</span> of those layers.

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


