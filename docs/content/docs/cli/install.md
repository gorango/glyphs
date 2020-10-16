---
title: Install
category: CLI
position: 31
---

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
icons
```

This will return a robust set of options and instructions.

```
   _____ _         _
  |   __| |_ _ ___| |_ ___
  |  |  | | | | . |   |_ -|
  |_____|_|_  |  _|_|_|___|
          |___|_|

  Running @glyphs/cli v0.0.1

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
    help, h       Display this message

```
