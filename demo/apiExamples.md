

# auro-nav-breadcrumb

## Properties

| Property         | Attribute        | Type      | Default | Description                                      |
|------------------|------------------|-----------|---------|--------------------------------------------------|
| [download](#download)       | `download`       | `Boolean` | false   | Specifies that the target will be downloaded when a user clicks on the hyperlink. |
| [fluid](#fluid)          | `fluid`          | `Boolean` |         | Modifier for `type="cta"` fluid-width UI option. |
| [href](#href)           | `href`           | `String`  |         | Specifies the URL of the page link.              |
| [ondark](#ondark)         | `ondark`         | `Boolean` | false   | Specifies dark theme use of hyperlink.           |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` | `Boolean` |         | Sets `strict-origin-when-cross-origin` to send a full URL when performing a same-origin request, only sends the origin when the protocol security level stays the same (HTTPS→HTTPS), and sends no header to a less secure destination (HTTPS→HTTP). |
| [rel](#rel)            | `rel`            | `String`  |         | Specifies the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       | `Boolean` | false   | Add flag to disable auto URL re-write feature.   |
| [role](#role)           | `role`           | `String`  |         | Use for aria roles; currently supports `button` for extended experiences. |
| [secondary](#secondary)      | `secondary`      | `Boolean` | false   | Modifier for `type="cta"` secondary UI option.   |
| [target](#target)         | `target`         | `String`  |         | Specifies where to open the linked document.     |
| [type](#type)           | `type`           | `String`  |         | Enumerable attribute; [`nav`, `cta`]             |

## Methods

| Method  | Type       | Description         |
|---------|------------|---------------------|
| [focus](#focus) | `(): void` | Focus this element. |

## CSS Shadow Parts

| Part   | Description                  |
|--------|------------------------------|
| [link](#link) | Apply CSS to the `a` element |

## API Examples

### Breadcrumb

Example when the `auro-nav` slot is populated with `auro-nav-breadcrumb` elements. The last `auro-nav-breadcrumb` in an `auro-nav` component should represent
the current page the user is on. It should reflect a disabled hyperlink and the `href` attribute should **NOT** be populated.

<div class="exampleWrapper">
  <auro-nav>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
    <auro-breadcrumb>Current</auro-breadcrumb>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
  <auro-breadcrumb>Current</auro-breadcrumb>
</auro-nav>
```

</auro-accordion>
