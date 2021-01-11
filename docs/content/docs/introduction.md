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

- [Figma source file](/docs/figma/overview) for the icon sets
- [Figma library plugin](/docs/plugin/install-plugin) to easily search & use the icons in other Figma projects
- [Figma command plugin](/docs/plugin/install-plugin) to speed up common design tasks with large icon sets
- [Command line interface](/docs/cli/install-cli) to download the assets from Figma
- [Packaged assets](/docs/web/getting-started) to use in development projects and elsewhere
- [Web components](/docs/web/component) to integrate the icons with additional features
