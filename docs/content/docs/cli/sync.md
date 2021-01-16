---
title: Sync
category: CLI
position: 34
---

## `sync`

Sync a configured icon set to the current directory. Options that are not supplied as arguments will be prompted.

```bash
glyphs sync [<key|name> --set <set> --data <data-folder> --svg <svg-folder>]
```

Arguments:

- `key` or `name` &nbsp; Optional. If multiple files are configured the first match will be used.

Options:

- `--set`, `-S`     &nbsp; Name of icon set to sync
- `--data`, `-d`    &nbsp; Output folder for icon-set data
- `--svg`, `-s`     &nbsp; Output folder for SVGs
- `--preview`, `-p` &nbsp; Generate a preview file
- `--diff`          &nbsp; Fetch only new and updated assets
- `--categories`    &nbsp; Specify categories to include

## `preview`

Preview a local icon set in the browser. Options that are not supplied as arguments will be prompted.

```bash
glyphs preview [<data-dir>]
```

This command will use the `components.json` in the `data-dir` to scaffold out a single-page HTML file to preview the exported icons. The [template](https://github.com/gorango/glyphs/blob/main/cli/lib/preview/template.pug) is very simple and can easily be modified.
