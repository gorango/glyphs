---
title: Credentials
category: CLI
position: 33
---

You will be prompted for credentials when configuring your first file using the `glyphs add` command. The file key as well as the personal access token are supplied by Figma.

## File Key

This is the ID for the Figma file.

Using the desktop app, there is no way to copy just the key. You need to copy the link to the file and extract the key from there. The relevant part of the URL is the string that follows `https://www.figma.com/file/`.

```
https://www.figma.com/file/<file-key>/...
```

## Personal Access Token

You can create a new personal access token from the Settings page in Figma.

You can also [learn more](https://www.figma.com/developers/api#access-tokens) about how it is used.