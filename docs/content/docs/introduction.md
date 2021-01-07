---
title: Introduction
category: Overview
position: 10
features:
 - Meticulously crafted icons in Figma
 - Full-featured web component with one-line install
#  - 5 icon sets with over 7,500 variants
 - Optimized SVGs with path-only variants
 - Infinitely extendable & customizable
 - Figma plugin to enhance workflow when designing icons
 - Search terms and categories synced with source file
 - Downloadable from Figma using a simple CLI
 - Simple integration with modern web frameworks

---

This project aims to solve two main problems with designing and using icons on the web:

1. **Enable creating, editing and combining different icons in a non-destructive way** <!-- (allowing easy future updates to all assets) -->
2. **Automate the process of syncing assets from the source file with other projects**

Using Figma's component features in the app along with its REST API, we can achieve both goals and create truly open source assets. In addition, we can create useful applications around this ecosystem.

Until recently, design software from Adobe, Sketch, and others didn't provide a standard component system nor a programmatic way of interacting with documents. Figma addresses these issues entirely - enabling designers and developers to easily collaborate and integrate design assets with development projects.

## Project Layout

In order to achieve the desired goals, this project consists of several tools:

- [Figma source file](#figma-file) for the target icon set
- [Command line interface](#command-line-interface) to download the assets
- [Packaged assets](#command-line-interface) to use in various environments
- [Web components](#web-components) to integrate the icons with additional features
- [Figma plugin](#figma-plugin) (coming soon) to speed up common design tasks with large icon sets

### Figma File

<alert>

[cf]: https://www.figma.com/community/file/899031264835768805/Glyphs-Icons
[of]: https://www.figma.com/file/2TsY9yqFso1zrvF8LNcVE7/Glyphs-Icons

Duplicate the [community file][cf] to make changes to the icons or to build your own icon sets. Check the [original file][of] for the latest updates and to provide any feedback.

</alert>

The entire Glyphs design system is built around the Figma file. The files are laid with specific rules in order to facilitate integration with other tools in this project. Internally, the files are designed with Figma’s components and variants. Modifying the core component or any of its internal components will be reflected in all variants, and in any other places where the icon is being used.

All icons are made using only simple shapes, joined with boolean operations, and styled with corner roundings and stroke effects.

Read more in the [Figma File section](/docs/figma/overview).

### Command Line Interface

The Glyphs command line utility enables exporting icon sets from a Figma file to any environment. This allows for easy integration with other design or development projects. To quickly get started, install using NPM.

```bash
npm install -g @glyphs/cli
```

Read more in the [CLI section](/docs/cli/install-cli).

### Web Components

The assets from Figma get exported and packaged into several distributions:

- Raw SVG files
- Universal web component
- JS Frameworks components

Read more in the [Web Components section](/docs/web/getting-started).

### Figma Plugin

The Glyphs Utils plugin improves the workflow when organizing and editing large icon sets.

Read more in the [Figma Plugin section](/docs/plugin/install-plugin).
