---
title: Install CLI
category: CLI
position: 30
---

The Glyphs command line utility enables exporting icon sets from a Figma file to any environment. This allows for easy integration with other design or development projects. To quickly get started, install from NPM.

### Install from NPM

```bash
npm install -g @glyphs/cli
```

### Build locally

```bash
git clone https://github.com/gorango/glyphs.git
cd glyphs/cli
npm i
npm i -g .
```

## Usage

Simply run `glyphs` in your terminal for instructions on how to use the interface.

```bash
glyphs  # or glyphs -h, --help
```

This will return a set of options and instructions.

```
   _____ _         _
  |   __| |_ _ ___| |_ ___
  |  |  | | | | . |   |_ -|
  |_____|_|_  |  _|_|_|___|
          |___|_|


  Example usage
    $ glyphs <command> <options>

  Help for a command
    $ glyphs <command> --help
    $ glyphs <command> -h

  Options
    --version, -v Print Glyphs CLI version

  Commands
    add, a        Configure a new icon set
    remove, r     Remove an existing icon set config
    get, g        Get details on the icon set config
    list, l       List configured icon sets
    sync, s       Sync an icon set to the current directory
    preview, p    Preview a local icon set in the browser
    generate      Generate a JS component set
    help, h       Display this message
```

To get more information on each command, append `--help` or `-h` to the end:
