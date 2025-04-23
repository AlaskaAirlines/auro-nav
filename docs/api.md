# auro-anchorlink

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| `active`         | `active`         |           | `Boolean` |         | If set, the link is currently the active link in the parent auro-nav. |
| `download`       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| `referrerpolicy` | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| `safeUri`        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `secondary`      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| `small`          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| `target`         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| `tertiary`       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| `type`           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## Events

| Event                      | Type               |
|----------------------------|--------------------|
| `auroAnchorLink-activated` | `CustomEvent<any>` |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| `link`       | Allows styling to be applied to the `a` element. |
| `targetIcon` | Allows styling to be applied to the icon that appears next to the hyperlink. |


# auro-breadcrumb

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| `download`       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| `fluid`          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| `href`           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| `ondark`         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| `referrerpolicy` | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| `rel`            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| `relative`       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| `role`           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| `safeUri`        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| `secondary`      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| `small`          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| `target`         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| `tertiary`       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| `type`           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| `link`       | Allows styling to be applied to the `a` element. |
| `targetIcon` | Allows styling to be applied to the icon that appears next to the hyperlink. |


# auro-nav

## Properties

| Property           | Attribute          | Type      | Default     | Description                                      |
|--------------------|--------------------|-----------|-------------|--------------------------------------------------|
| `anchorNavContent` | `anchorNavContent` | `string`  | "undefined" | Defines the container that anchor links navigate within. |
| `noHomeIcon`       | `noHomeIcon`       | `boolean` |             | If true, the home icon will not be displayed before first auro-breadcrumb. |

## Slots

| Name                    | Description                                      |
|-------------------------|--------------------------------------------------|
|                         | Slot for insertion of navigation links.          |
| `mobileToggleCollapsed` | Slot for button text in mobile when content is collapsed. |
| `mobileToggleExpanded`  | Slot for button text in mobile when content is expanded. |
