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

Using Figma's component features in the app along with its REST API, we can achieve both goals and create truly open source assets and useful applications around this ecosystem.

## Features

<list :items="features"></list>

## Project Layout

In order to achieve the goals, this project consists of several tools:

- [Figma source file](#figma-file) for the target icon set
- [Command line interface](#command-line-interface) to download the assets
- [Web component](#web-component) to package the assets with additional features
- [Figma plugin](#figma-plugin) (coming soon) to speed up common design tasks with large icon sets

### Figma File

Read more in the [Figma File section](/docs/figma/overview)...

### Web Component

Read more in the [Web Components section](/docs/web/getting-started)...

### Command Line Interface

Read more in the [CLI section](/docs/cli/install)...

### Figma Plugin

Coming soon...

## Motivation

Until recently, design software from Adobe, Sketch, and others didn't provide a standard component system nor a programmatic way of interacting with your documents. Figma in large part addresses these issues.
