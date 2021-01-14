# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.3.0-alpha.3](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.3.0-alpha.2...@glyphs/cli-v0.3.0-alpha.3) (2021-01-14)


### Bug Fixes

* **cli:** clean up svg strings in components ([4e5593e](https://github.com/gorango/glyphs/commit/4e5593e339502f18dff18878b1fbf116f1f1c7f3))
* **cli:gen:** cleanup, update templates ([d3d1d26](https://github.com/gorango/glyphs/commit/d3d1d26f05681ac92f1d6cffdaf692d9bf6782f7))
* **cli:gen:** correct paths ([8f7733a](https://github.com/gorango/glyphs/commit/8f7733a763b53878f9dd769f6cb3929f7b0d654d))

## [0.3.0-alpha.2](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.3.0-alpha.1...@glyphs/cli-v0.3.0-alpha.2) (2021-01-13)


### Bug Fixes

* **cli:sync:** replace current color in export ([ca2a374](https://github.com/gorango/glyphs/commit/ca2a3740ee3d813204e4db1f5757c3d85c2e51a0))

## [0.3.0](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.2.1...@glyphs/cli-v0.3.0-alpha.1) (2021-01-13)


### ⚠ BREAKING CHANGES

* export & save raw SVGs from Figma
* SVG strings no longer exist on variants in components.json. Replaced with node id referenced in new map.json

### Features

* **cli:** add generate option for web components ([6c9f449](https://github.com/gorango/glyphs/commit/6c9f4494e8e0a920f969f7ce1ecd5487c61bcdd5))
* **cli:** update wc, vue, & react scoffolds ([9e12be8](https://github.com/gorango/glyphs/commit/9e12be87e1f1c0dd18e675a48400b16df37ec14e))
* **wc:** init web components packages ([7a60662](https://github.com/gorango/glyphs/commit/7a60662bcdb189d1dbca9dedd00fa2a3e1b43aa6))


### Bug Fixes

* **cli:** ensure unique id in defs to avoid conflics ([661ba8a](https://github.com/gorango/glyphs/commit/661ba8ae9856158102b341f1f437dbc9530d313b))
* **cli:** fix --diff option ([5259f25](https://github.com/gorango/glyphs/commit/5259f25a8a6bc5054671a489f036031e0282e6ff))
* **cli:** fix react template imports ([da7a856](https://github.com/gorango/glyphs/commit/da7a8567b53876af73143efacd8d9914a362cf4c))
* **cli:** handle naming error in export ([988853a](https://github.com/gorango/glyphs/commit/988853af4f557720e79f572feb802977f91960c1)), closes [#15](https://github.com/gorango/glyphs/issues/15)
* **cli:** update docs ([142796f](https://github.com/gorango/glyphs/commit/142796f1a3543ddfefee1b76205644533e56c802))
* **cli:** update templates; use file paths for SVGs ([fcc259b](https://github.com/gorango/glyphs/commit/fcc259bc468d9a216271a1cdaf9287d54274964f))


* feat!(cli): remove svg post processing ([bb84fe8](https://github.com/gorango/glyphs/commit/bb84fe846b2491519fe71232387064840cb98071))
* feat!(cli): move SVG strings from components to map ([e12915f](https://github.com/gorango/glyphs/commit/e12915f974ff3c31096cc3ad975a6e28358cd9f9))

### [0.2.1](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.2.0...@glyphs/cli-v0.2.1) (2021-01-07)


### Bug Fixes

* **cli:** clean up docs ([7aa8a0d](https://github.com/gorango/glyphs/commit/7aa8a0d2553876f9faf960666e10337d8300c17d))

## [0.2.0](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.1.0...@glyphs/cli-v0.2.0) (2021-01-06)


### ⚠ BREAKING CHANGES

* `sets` key in config is converted from array to object to store last run times. The keys are now lowercased.

### Features

* **cli:** add preview flag in sync cmd ([bf97a72](https://github.com/gorango/glyphs/commit/bf97a725bc4fe3911d9f40074f657a68493f7dac))
* **cli:** add retry to figma api; replace request with axios ([#16](https://github.com/gorango/glyphs/issues/16)) ([6be9042](https://github.com/gorango/glyphs/commit/6be904291240d6d0df270dfad70ccd9da6ea8661)), closes [#14](https://github.com/gorango/glyphs/issues/14)
* **cli:** enable syncing specific categories ([200e3ee](https://github.com/gorango/glyphs/commit/200e3eed0857a7d3a8de150e53015f1a17540cd8))


### Bug Fixes

* **cli:** avoid errors when missing terms ([695ab7b](https://github.com/gorango/glyphs/commit/695ab7bd302ffcbc62e903fe638a4ce867dd17b9))
* **cli:** fix validate categories ([263e64b](https://github.com/gorango/glyphs/commit/263e64b798a0feb4d2402c672c6e07665394ed2a))
* **cli:** merge components on diff ([813d809](https://github.com/gorango/glyphs/commit/813d8091434bd5f21c9f7206a40a347c541aa9f0))
* **cli:** replace components svgs after diffs & includes ([2a2d22d](https://github.com/gorango/glyphs/commit/2a2d22ddc62f5cb7a31d232c7017140002498d23))
* **cli:** replace Figma REST lib ([b6b6ca4](https://github.com/gorango/glyphs/commit/b6b6ca4b8aeb2ef93b5588bcf96cf63ee3389dc4))
* **cli:** update download count with segments ([f582eef](https://github.com/gorango/glyphs/commit/f582eeff90e399e3df609586996f93978946c5a2))
* **cli:** update validations ([a675098](https://github.com/gorango/glyphs/commit/a675098f03d51d88271a7b6749b752f6d423cc83))
* **cli:** use set config for meta variants with fallback ([59d621c](https://github.com/gorango/glyphs/commit/59d621c200d825c1bed2a0e017f5852cb9b46cf3))


* feat!(cli): add diff option to sync cmd ([e596204](https://github.com/gorango/glyphs/commit/e596204a7222388b82ccc4ce2415af9b37898b0d)), closes [#13](https://github.com/gorango/glyphs/issues/13)

## [0.1.0](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.0.5...@glyphs/cli-v0.1.0) (2020-12-22)


### Features

* **cli:** add preview command ([7088c1f](https://github.com/gorango/glyphs/commit/7088c1f43de6d70d851f67136cf6cbc4aa992e6d))
* **cli!:** update config; parse multiple sets in file ([fa6668d](https://github.com/gorango/glyphs/commit/fa6668dabc29732ed7eb8e6170ff8fbe898b7a91))


### Bug Fixes

* **cli:** minor refactor; ensure correct relative dir ([bb7435c](https://github.com/gorango/glyphs/commit/bb7435c59216809dd0f996199dc42ca3dfb2ad9e))
* **cli:** remove unused ([e35747b](https://github.com/gorango/glyphs/commit/e35747b2f4cdcdd179c654fe73d5e19eeac065f8))

### [0.0.5](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.0.4...@glyphs/cli-v0.0.5) (2020-12-09)


### Features

* **cli:** enable get & sync with query ([95b0d07](https://github.com/gorango/glyphs/commit/95b0d0740ac6c69cc9f1d7cebe51616e0bcfbfb9))
* **cli:** parse svg config from figma file ([94529e8](https://github.com/gorango/glyphs/commit/94529e8200aa25726ec7012a3271ff9fffedd201))


### Bug Fixes

* **cli:** fix sync config ([d727ad5](https://github.com/gorango/glyphs/commit/d727ad519b2c3c1c0e25beede300c920e4ca2ebf))

### [0.0.4](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.0.3...@glyphs/cli-v0.0.4) (2020-12-08)


### Features

* **cli:** refactor config; upgrade to variants ([0620711](https://github.com/gorango/glyphs/commit/062071158b955898cd89df5a7edaa12844018700))


### Bug Fixes

* **cli:** add key to sets meta.json ([5cb15a6](https://github.com/gorango/glyphs/commit/5cb15a6e7984e8d688397c09a9bb0f6177e94daa))
* **cli:** correct unique count ([136ae92](https://github.com/gorango/glyphs/commit/136ae92f3586569fb70722f7ca9879c9d5fafce8))
* **cli:** handle dropped connections with promise-request-retry ([a3e33c9](https://github.com/gorango/glyphs/commit/a3e33c9e3e85af7ac50fd0db98bd0e6353512cd7))

### [0.0.3](https://github.com/gorango/glyphs/compare/@glyphs/cli-v0.0.2...@glyphs/cli-v0.0.3) (2020-10-27)


### Features

* **cli:** add unique count to meta output ([1f64535](https://github.com/gorango/glyphs/commit/1f6453503c342211b7c0abd915da7bb64f5cd787))


### Bug Fixes

* **cli:** remove stroke-width from path variants ([5327481](https://github.com/gorango/glyphs/commit/53274811bf114bae3abf2b83260a22c3f6e507c6))

### 0.0.2 (2020-10-20)


### Features

* **cli:** rename to glyphs ([4e95806](https://github.com/gorango/glyphs/commit/4e958060bd02eb2281dee2f2b748cdefd4252e3e))
* **cli:** update naming convention ([0abc94f](https://github.com/gorango/glyphs/commit/0abc94fbdc26fe5e2173cae72db55507d9e2d806))
* **rounded:** add 11 new icons; replace bold ([afae649](https://github.com/gorango/glyphs/commit/afae649eb737335d1318601cec23e288b7afc104))


### Bug Fixes

* **cli:** use simplify strokes ([97b8cb4](https://github.com/gorango/glyphs/commit/97b8cb4df88830e93abdd35e5b8fe4cf3f7318a5))
