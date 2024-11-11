# Nav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partial/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## About auro-nav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partial/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Breadcrumb

Example using `auro-breadcrumb` for each link. This example renders as a horizontal list of links. The first icon in the list
will display a home icon, all links will have a right chevron as a divider, and the last link will be disabled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/breadcrumb.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/breadcrumb.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Anchornav

This example shows a user how set up an `auro-nav` component using `auro-anchorlinks` to efficiently jump to different points in the content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/anchornav.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/anchornav.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-nav` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroNav.register(name)` method and pass in a unique name.

```js
import { AuroNav } from '@aurodesignsystem/auro-nav/src/auro-nav.js';
import { AuroBreadcrumb } from '@aurodesignsystem/auro-nav/src/auro-breadcrumb.js';

AuroNav.register('custom-nav');
AuroBreadcrumb.register('custom-breadcrumb');
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
