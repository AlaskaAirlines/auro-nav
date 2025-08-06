# Semantic Release Automated Changelog

## [3.2.2](https://github.com/AlaskaAirlines/auro-nav/compare/v3.2.1...v3.2.2) (2025-08-06)


### Bug Fixes

* add conditional to prevent default in breadcrumb and anchorlink ([42b4e64](https://github.com/AlaskaAirlines/auro-nav/commit/42b4e64cee221ecdf40b2c04cf37cf84f59b8d44))

## [3.2.1](https://github.com/AlaskaAirlines/auro-nav/compare/v3.2.0...v3.2.1) (2025-07-21)


### Bug Fixes

* add new small prop to example ([517f074](https://github.com/AlaskaAirlines/auro-nav/commit/517f074993687b129aaaa643af4aa26241438ebf))
* add themeable type classes ([4941125](https://github.com/AlaskaAirlines/auro-nav/commit/4941125c99cb4798a80770ca0cb1bf40cd44f72b))
* update docs head content ([cbb4734](https://github.com/AlaskaAirlines/auro-nav/commit/cbb47348805761eb44c397385d7d59435e589663))

# [3.2.0](https://github.com/AlaskaAirlines/auro-nav/compare/v3.1.0...v3.2.0) (2025-04-29)


### Features

* update to use new color theme tokens [#74](https://github.com/AlaskaAirlines/auro-nav/issues/74) ([9f0bb44](https://github.com/AlaskaAirlines/auro-nav/commit/9f0bb44b0eee2a33edb40b0423c32f55daafbb95))

# [3.1.0](https://github.com/AlaskaAirlines/auro-nav/compare/v3.0.0...v3.1.0) (2025-03-27)


### Features

* add ability to remove home icon from first breadcrumb [#68](https://github.com/AlaskaAirlines/auro-nav/issues/68) ([bfbd799](https://github.com/AlaskaAirlines/auro-nav/commit/bfbd799e88fd76537b38c1e022b7abae8f714612))


### Performance Improvements

* update dependencies and tsconfig ([9435018](https://github.com/AlaskaAirlines/auro-nav/commit/943501853545243efe36e06d941582de21a0e8e4))

# [3.0.0](https://github.com/AlaskaAirlines/auro-nav/compare/v2.3.3...v3.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([2bc6954](https://github.com/AlaskaAirlines/auro-nav/commit/2bc6954d01a818725c3d3e6680f35edd0df527c5))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [2.3.3](https://github.com/AlaskaAirlines/auro-nav/compare/v2.3.2...v2.3.3) (2025-02-08)


### Performance Improvements

* update dependencies ([64a81a0](https://github.com/AlaskaAirlines/auro-nav/commit/64a81a089ad02a0ed609bdd0c4ce84f662417dbe))
* update esm bundle config to address warning ([fecd308](https://github.com/AlaskaAirlines/auro-nav/commit/fecd3081f81552f7ca1f227517eebda94ffd902e))

## [2.3.2](https://github.com/AlaskaAirlines/auro-nav/compare/v2.3.1...v2.3.2) (2024-12-23)


### Bug Fixes

* update auro-library ([4634dd9](https://github.com/AlaskaAirlines/auro-nav/commit/4634dd97a335f3899dc469f50cef8c9952d90db7))

## [2.3.1](https://github.com/AlaskaAirlines/auro-nav/compare/v2.3.0...v2.3.1) (2024-12-09)


### Performance Improvements

* add md files to package [#61](https://github.com/AlaskaAirlines/auro-nav/issues/61) ([fe7f325](https://github.com/AlaskaAirlines/auro-nav/commit/fe7f3258ffe0cbbbc793737bca17a1d15ab7b9d8))

# [2.3.0](https://github.com/AlaskaAirlines/auro-nav/compare/v2.2.0...v2.3.0) (2024-11-14)


### Features

* upgrade auro-library to 3.0.1 ([d0121ca](https://github.com/AlaskaAirlines/auro-nav/commit/d0121ca1f4a30d544f3a9790243a92414c43ae27))


### Performance Improvements

* update library to 3.0.2 ([d4cdaae](https://github.com/AlaskaAirlines/auro-nav/commit/d4cdaae69f13dcdc9ec2501b4ecff5ac04591485))

# [2.2.0](https://github.com/AlaskaAirlines/auro-nav/compare/v2.1.1...v2.2.0) (2024-11-01)


### Bug Fixes

* remove refrence to customsize attribute [#55](https://github.com/AlaskaAirlines/auro-nav/issues/55) ([9b3241d](https://github.com/AlaskaAirlines/auro-nav/commit/9b3241d6dc91979c67bd84690b1e861aff73bdc3))
* rename function parameter size to props [#55](https://github.com/AlaskaAirlines/auro-nav/issues/55) ([ed4bbbf](https://github.com/AlaskaAirlines/auro-nav/commit/ed4bbbf885be822d89130f94a613ab8004dd7c8d))


### Features

* apply latest token ds-auro-icon-size and adjust styles applied to icon [#55](https://github.com/AlaskaAirlines/auro-nav/issues/55) ([bd566fc](https://github.com/AlaskaAirlines/auro-nav/commit/bd566fcb4a8272363896cf7c37a8146a4f446543))


### Performance Improvements

* update dependencies ([2ad7652](https://github.com/AlaskaAirlines/auro-nav/commit/2ad76528901e40c203f31614888f5d5c87518ecd))

## [2.1.1](https://github.com/AlaskaAirlines/auro-nav/compare/v2.1.0...v2.1.1) (2024-10-31)


### Performance Improvements

* update dependencies ([b00fc09](https://github.com/AlaskaAirlines/auro-nav/commit/b00fc094b55d6545265920af86b079a93263255e))

# [2.1.0](https://github.com/AlaskaAirlines/auro-nav/compare/v2.0.1...v2.1.0) (2024-10-28)


### Features

* **api:** add register static method [#51](https://github.com/AlaskaAirlines/auro-nav/issues/51), update not to omit the file extension on import line [#52](https://github.com/AlaskaAirlines/auro-nav/issues/52) ([e474bf6](https://github.com/AlaskaAirlines/auro-nav/commit/e474bf6679a372812034cdf4b6b40dd292041343))


### Performance Improvements

* update dependencies ([92de286](https://github.com/AlaskaAirlines/auro-nav/commit/92de286e4e58e3763639e8ada09a8c5a30ee7c4d))

## [2.0.1](https://github.com/AlaskaAirlines/auro-nav/compare/v2.0.0...v2.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#49](https://github.com/AlaskaAirlines/auro-nav/issues/49) ([640f197](https://github.com/AlaskaAirlines/auro-nav/commit/640f19792f00ea925c565fd40c0f6f4fa9e79485))

# [2.0.0](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.10...v2.0.0) (2024-10-01)


### Bug Fixes

* **textwrap:** update styles to fix text wrap UI error ([fb26de3](https://github.com/AlaskaAirlines/auro-nav/commit/fb26de3fbc2b406e595138dddb7d37a74e8d9394))


### Features

* add custom versioned auro components ([e9f40c1](https://github.com/AlaskaAirlines/auro-nav/commit/e9f40c1c4f64c1413534e4e881320d2c8942a96f))
* add tag name as attribute when custom registered ([3e3c510](https://github.com/AlaskaAirlines/auro-nav/commit/3e3c5103caf41ecfd88a1e2ac597c67d199f3cb9))
* implement color theming support [#39](https://github.com/AlaskaAirlines/auro-nav/issues/39) ([49a2c30](https://github.com/AlaskaAirlines/auro-nav/commit/49a2c30f71b4b7643bfa327037f8a5b209fc7fca))


### Performance Improvements

* refactor custom component registration config ([fe48fd4](https://github.com/AlaskaAirlines/auro-nav/commit/fe48fd418aabab070c2708230814372a43535d1b))
* remove github label colors ([708c594](https://github.com/AlaskaAirlines/auro-nav/commit/708c594f9692e6c3a3ba5d0cff32ca90a17ef0d7))
* update dependencies ([da472a5](https://github.com/AlaskaAirlines/auro-nav/commit/da472a5d2c55a6404396d6373ff4460ca2772bbd))


### BREAKING CHANGES

* trigger major release for color theme support #39

## [1.2.10](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.9...v1.2.10) (2024-02-26)


### Performance Improvements

* **deps:** update to latest dependencies ([86751da](https://github.com/AlaskaAirlines/auro-nav/commit/86751da15c4a530bdf2ee5076690b94cbd93abbd))

## [1.2.9](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.8...v1.2.9) (2024-02-24)


### Performance Improvements

* **custom:** implement custom registration example ([026acef](https://github.com/AlaskaAirlines/auro-nav/commit/026acef30f3d3bacc71ac67e1ab9c8bcbf7a89d4))

## [1.2.8](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.7...v1.2.8) (2024-02-23)


### Performance Improvements

* **examples:** refactor examples ([0bac259](https://github.com/AlaskaAirlines/auro-nav/commit/0bac2594e836392a6a263505081e93c0817d6769))

## [1.2.7](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.6...v1.2.7) (2024-02-18)


### Performance Improvements

* **docs:** update doc file names to standard ([70032ad](https://github.com/AlaskaAirlines/auro-nav/commit/70032ad676bc4c2717f83a7fe9294afbc9d42ce2))

## [1.2.6](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.5...v1.2.6) (2024-02-16)


### Performance Improvements

* update deps and refs to hyperlink ([a0a8ff2](https://github.com/AlaskaAirlines/auro-nav/commit/a0a8ff2f992c8e2aea7dc2726747d7b2c81a12bc))

## [1.2.5](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.4...v1.2.5) (2024-02-14)


### Performance Improvements

* **deps:** update dependencies ([48817ab](https://github.com/AlaskaAirlines/auro-nav/commit/48817ab88d383086469888aa8fbf7a898aed7cc8))

## [1.2.4](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.3...v1.2.4) (2024-02-12)


### Bug Fixes

* update icon config ([4f752bd](https://github.com/AlaskaAirlines/auro-nav/commit/4f752bdab0ec8d7d2d7d1b6489920423752ffd17))

## [1.2.3](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.2...v1.2.3) (2024-02-12)


### Bug Fixes

* address missed .js ESM requirement ([e50458d](https://github.com/AlaskaAirlines/auro-nav/commit/e50458da3e1bf4f35b4bbc48a21d3134c61edaa4))

## [1.2.2](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.1...v1.2.2) (2024-02-12)


### Performance Improvements

* update for ESM support ([b712222](https://github.com/AlaskaAirlines/auro-nav/commit/b7122227f240d3e50ecf12acfe5b71c14c3f7104))

## [1.2.1](https://github.com/AlaskaAirlines/auro-nav/compare/v1.2.0...v1.2.1) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([42b4497](https://github.com/AlaskaAirlines/auro-nav/commit/42b4497e6de7ac111517a0ed081e9875e95718c0))
* **cdn:** update links from unpkg to jsdelivr ([976cabb](https://github.com/AlaskaAirlines/auro-nav/commit/976cabbf0b17ee9d640b516b38fa22bfcfc0c169))

# [1.2.0](https://github.com/AlaskaAirlines/auro-nav/compare/v1.1.1...v1.2.0) (2024-01-23)


### Features

* **ssr:** add support for SSR projects [#30](https://github.com/AlaskaAirlines/auro-nav/issues/30) ([88f1fda](https://github.com/AlaskaAirlines/auro-nav/commit/88f1fda9661bff45028980633e151d5ede51e066))


### Performance Improvements

* **node:** update repo to support node 20 ([20d4e6c](https://github.com/AlaskaAirlines/auro-nav/commit/20d4e6cd113f8cad8c433644374bd5a8fc419a5e))
* **tokens:** update tokens to use new --ds prefix [#27](https://github.com/AlaskaAirlines/auro-nav/issues/27) ([700791a](https://github.com/AlaskaAirlines/auro-nav/commit/700791ae9ba15f5cc62f3c8282b184a679825353))

## [1.1.1](https://github.com/AlaskaAirlines/auro-nav/compare/v1.1.0...v1.1.1) (2023-05-16)


### Performance Improvements

* **ts:** add support for typescript users [#19](https://github.com/AlaskaAirlines/auro-nav/issues/19) ([08e487c](https://github.com/AlaskaAirlines/auro-nav/commit/08e487c26d41259293774fecf837b863b19ae8ea))

# [1.1.0](https://github.com/AlaskaAirlines/auro-nav/compare/v1.0.1...v1.1.0) (2023-05-12)


### Features

* **anchornav:** implement anchornav variation [#10](https://github.com/AlaskaAirlines/auro-nav/issues/10) ([0c192bd](https://github.com/AlaskaAirlines/auro-nav/commit/0c192bd39a98766b0405e47ba99d5902e5cc1202))
* **animation:** add animation effect and code cleanup ([0d2075c](https://github.com/AlaskaAirlines/auro-nav/commit/0d2075c230badef3e5a1fe9dcbcc4dd2a07e8cda))

## [1.0.1](https://github.com/AlaskaAirlines/auro-nav/compare/v1.0.0...v1.0.1) (2023-02-28)


### Performance Improvements

* **deps:** update hyperlink dependency [#13](https://github.com/AlaskaAirlines/auro-nav/issues/13) ([28ee825](https://github.com/AlaskaAirlines/auro-nav/commit/28ee82587ae7679dbe35c98424466df892e75f70))
* **rollup:** update rollup config to support CE work [#15](https://github.com/AlaskaAirlines/auro-nav/issues/15) ([d738912](https://github.com/AlaskaAirlines/auro-nav/commit/d73891250d281c5888e12dc7d2c866384f85fcca))

# 1.0.0 (2023-02-24)


### Features

* initialize component and code [#1](https://github.com/AlaskaAirlines/auro-nav/issues/1) ([09da853](https://github.com/AlaskaAirlines/auro-nav/commit/09da853166c57f6e73e6bc534f5f2f94d52016b6))


### Performance Improvements

* **publish:** update semantic release versioning [#7](https://github.com/AlaskaAirlines/auro-nav/issues/7) ([ca53c50](https://github.com/AlaskaAirlines/auro-nav/commit/ca53c50301475a5418369308e5a820f3aa2605f0))
* **workflow:** update build dependencies ([56154e8](https://github.com/AlaskaAirlines/auro-nav/commit/56154e88f4b42a51f65246048f24acc42038f943))
