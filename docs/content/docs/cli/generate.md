---
title: Generate
category: CLI
position: 36
---

<alert>

This command is still in active development and will likely undergo significant changes.

</alert>

## `generate`

Generate a component set from an exported Glyphs icon set. Options must be supplied in a 'glyphs.config.json' file.

```bash
glyphs generate
```

### `glyphs.config.js`

The following config shows the current options for generating a Vue package using the Core set.

```js
module.exports = {
  generate: {
    target: 'vue',
    set: 'node_modules/@glyphs/core',
    output: 'src',
    defaultVariant: 'path',
    transform: {
      color: ['path', 'bold', 'duo', 'outline'],
      stroke: {
        path: 3,
        duo: 4,
        outline: 1
      }
    }
  }
}
```
