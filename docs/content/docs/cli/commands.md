---
title: Commands
category: CLI
position: 32
---

## `add`

Add a new icon set config. Options that are not supplied as arguments will be prompted.

```bash
glyphs add [--key <file-key> --token <access-token>]
```

Options:

- `--key`, `-k`     &nbsp; File key for the Figma file
- `--token`, `-t`   &nbsp; Personal access token from Figma
- `--replace`, `-r` &nbsp; Overwrite any existing configuration for `<name>` or `<key>`

## `remove`

Remove an existing icon set config by name

```bash
glyphs remove [<key>]
```

## `get`

Get details on the icon set config

```bash
glyphs get [<key|name>]
```

## `list`

List configured icon sets

```bash
glyphs list [--available]
```

## `sync`

Sync a configured icon set to the current directory.

```bash
glyphs sync [<key|name> --set <set> --data <data-folder> --svg <svg-folder>]
```

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
