# auro-anchorlink

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default       | Description                                                                                                                                                              |
| -------------- | -------------- | --------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| active         | active         |           | boolean |               | If set, the link is currently the active link in the parent auro-nav.                                                                                                    |
| appearance     | appearance     |           | string  | `default`     | Defines whether the component will be on lighter or darker backgrounds.                                                                                                  |
| download       | download       |           | boolean | `false`       | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                           |
| fluid          | fluid          |           | boolean |               | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                      |
| href           | href           |           | string  |               | Defines the URL of the linked page.                                                                                                                                      |
| layout         | layout         |           | string  | `{'default'}` | Defines the language of an element.                                                                                                                                      |
| ondark         | ondark         |           | boolean | `false`       | DEPRECATED - use `appearance` instead.                                                                                                                                   |
| referrerpolicy | referrerpolicy |           | boolean |               | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                  |
| rel            | rel            |           | string  |               | Defines the relationship between the current document and the linked document.                                                                                           |
| role           |                |           | String  |               | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                |
| safeUri        |                | readonly  | string  |               | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string. |
| target         | target         |           | string  |               | Defines where to open the linked document.                                                                                                                               |
| type           | type           |           | string  |               | Defines the type of hyperlink; accepts `nav` or `cta`.                                                                                                                   |
| variant        | variant        |           | string  | `primary`     | Sets button variant option.                                                                                                                                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-breadcrumb

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default       | Description                                                                                                                                                              |
| -------------- | -------------- | --------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance     | appearance     |           | string  | `default`     | Defines whether the component will be on lighter or darker backgrounds.                                                                                                  |
| download       | download       |           | boolean | `false`       | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                           |
| fluid          | fluid          |           | boolean |               | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                      |
| href           | href           |           | string  |               | Defines the URL of the linked page.                                                                                                                                      |
| layout         | layout         |           | string  | `{'default'}` | Defines the language of an element.                                                                                                                                      |
| ondark         | ondark         |           | boolean | `false`       | DEPRECATED - use `appearance` instead.                                                                                                                                   |
| referrerpolicy | referrerpolicy |           | boolean |               | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                  |
| rel            | rel            |           | string  |               | Defines the relationship between the current document and the linked document.                                                                                           |
| role           |                |           | String  |               | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                |
| safeUri        |                | readonly  | string  |               | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string. |
| target         | target         |           | string  |               | Defines where to open the linked document.                                                                                                                               |
| type           | type           |           | string  |               | Defines the type of hyperlink; accepts `nav` or `cta`.                                                                                                                   |
| variant        | variant        |           | string  | `primary`     | Sets button variant option.                                                                                                                                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-nav

### Properties & Attributes

| Properties       | Attributes       | Modifiers | Type    | Default     | Description                                                                |
| ---------------- | ---------------- | --------- | ------- | ----------- | -------------------------------------------------------------------------- |
| anchorNavContent | anchorNavContent |           | string  | `undefined` | Defines the container that anchor links navigate within.                   |
| noHomeIcon       | noHomeIcon       |           | boolean |             | If true, the home icon will not be displayed before first auro-breadcrumb. |
|                  | activeLink       |           | object  | `undefined` | If set, defines the currently active link.                                 |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
| mobileToggleCollapsed | Slot for button text in mobile when content is collapsed. |
| mobileToggleExpanded  | Slot for button text in mobile when content is expanded.  |
| Slot                  | for insertion of navigation links.                        |