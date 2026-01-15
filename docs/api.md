# auro-anchorlink

The `auro-anchorlink` element is used to create anchor navigation links within a page, typically used inside an `auro-nav` component.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                             |
| ---------- | ---------- | --------- | ------- | ------- | ----------------------------------------------------------------------- |
| active     | active     |           | boolean |         | If set, the link is currently the active link in the parent `auro-nav`. |
| fluid      | fluid      |           | boolean | `true`  | If true, the anchorlink will have a fluid-width UI.                     |
| href       | href       |           | string  |         | Defines the URL of the linked page.                                     |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-breadcrumb

The `auro-breadcrumb` element is a horizontal navigation component that indicates the current page's location within a navigational hierarchy, typically used within an `auro-nav` component.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type   | Default | Description                         |
| ---------- | ---------- | --------- | ------ | ------- | ----------------------------------- |
| href       | href       |           | string |         | Defines the URL of the linked page. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-nav

The `auro-nav` element provides a way to show users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.

### Properties & Attributes

| Properties       | Attributes       | Modifiers | Type    | Default | Description                                                                  |
| ---------------- | ---------------- | --------- | ------- | ------- | ---------------------------------------------------------------------------- |
| activeLink       | activeLink       |           | object  |         | If set, defines the currently active link.                                   |
| anchorNavContent | anchorNavContent |           | string  |         | Defines the container that anchor links navigate within.                     |
| noHomeIcon       | noHomeIcon       |           | boolean |         | If true, the home icon will not be displayed before first `auro-breadcrumb`. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
| mobileToggleCollapsed | Slot for button text in mobile when content is collapsed. |
| mobileToggleExpanded  | Slot for button text in mobile when content is expanded.  |
| Slot                  | for insertion of navigation links.                        |