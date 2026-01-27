```js
// Import the class only
import { AuroNav, AuroBreadcrumb } from '@aurodesignsystem/auro-nav/class';

// Register with a custom name if desired
AuroNav.register('custom-nav');
AuroBreadcrumb.register('custom-breadcrumb');
```

This will create a new custom element `<custom-nav>` and `<custom-breadcrumb>` that behaves exactly like `<auro-nav>` and `<auro-breadcrumb>`, allowing both to coexist on the same page without interfering with each other.
