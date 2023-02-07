# Nav

`<auro-nav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of showing users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.

## About auro-nav

The `<auro-nav>` element acts as a container for a series of links representing a level of depth in the site content. 
The `<auro-nav>` element should only be used for multi-page projects that have 3 to 5 levels of page depth.

## Example(s)

### Default Example

Example using `auro-nav-breadcrumb` for each link. This example renders as a horizontal list of links. The first icon in the list
will display a home icon, all links will have a right chevron as a divider, and the last link will be disabled.

<div class="exampleWrapper">
  <auro-nav>
    <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-nav-breadcrumb>
    <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-nav-breadcrumb>
    <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-nav-breadcrumb>
    <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-nav-breadcrumb>
    <auro-nav-breadcrumb>Current</auro-nav-breadcrumb>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav>
  <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-nav-breadcrumb>
  <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-nav-breadcrumb>
  <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-nav-breadcrumb>
  <auro-nav-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-nav-breadcrumb>
  <auro-nav-breadcrumb>Current</auro-nav-breadcrumb>
</auro-nav>
```

</auro-accordion>
