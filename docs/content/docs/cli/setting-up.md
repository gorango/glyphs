---
title: Setting Up
category: CLI
position: 32
---

## Credentials

You will be prompted for credentials when configuring your first file using the `glyphs add` command. The file key as well as the personal access token are supplied by Figma.

#### File Key

This is the ID for the Figma file and can be extracted from the file URL:

```html
https://www.figma.com/file/<FILE-KEY>/.../...
```

#### Personal Access Token

You can create a new personal access token from the Settings page in Figma. You can also [learn more](https://www.figma.com/developers/api#access-tokens) about how it is used.

## Connecting Figma files

The CLI provides a basic interface to manage connections to one or more Figma files.

Running `glyphs add`, `get`, `list`, or `remove` will help you manage your configuration.

### Add a new Figma file

To add a new file, you'll need to provide the [file key](#file-key) and your [personal access token](#personal-access-token) (follow the links for instructions). The CLI will prompt for the required details. Alternatively the arguments can be supplied using options `--key` and `--token`.

```
$ glyphs add

  Add a new icon set config by providing a file key and access token from Figma
  Instructions can be found at https://glyphs.fyi/docs/cli

? Figma File Key: 2TsY9yqFso1zrvF8LNcVE7
? Figma Personal Access Token: 52427-195c4571-8176-5d38-9334-04e3561a7f3a

  Successfully configured "Glyphs"
```

### Configuration details

Be careful if screensharing or streaming this info as it contains your Figma access token, which allows complete access to your Figma account using the REST API.

```
$ glyphs get <name>

  File Name:     Glyphs Icons
  File Key:      2TsY9yqFso1zrvF8LNcVE7
  Access Token:  52427-195c4571-8176-5d38-9334-04e3561a7f3a
  Direct Link:   https://figma.com/file/2TsY9yqFso1zrvF8LNcVE7
```
