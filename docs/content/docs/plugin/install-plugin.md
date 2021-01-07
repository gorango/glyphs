---
title: Install
category: Figma Plugin
position: 21
---

<alert type="warning">

The plugin is currently in BETA! The core features are still expected to change prior to release.

</alert>

## Download

The Glyphs Utils plugin can be downloaded from the GitHub repository or as a [zip file](https://github.com/gorango/glyphs/archive/main.zip).

Alternatively using Git:

```bash
git clone https://github.com/gorango/glyphs.git
```

## Build

<alert>

NodeJS version 10 or higher is required to install dependencies and build the plugin.

</alert>

Using the command terminal, navigate to the plugin directory and run the following commands to install dependencies and to generate the build folder.

```bash
cd glyphs/figma-plugin
npm install
npm run build
```

## Install

To install the plugin on the desktop version of Figma, follow these steps:

- Navigate to "Manage Plugins" in you account in Figma.
- Create new plugin in the "In development" section of the page.
- Navigate to the plugin folder and select the `manifest.json` file.

## Developing

To run the plugin with hot-reloading, use the following command:

```bash
npm run dev
```

If you already loaded the plugin manifest in Figma, you can close and reopen the plugin after saving your code (PROTIP: use Ctrl+Alt+T to reopen the last used plugin).
