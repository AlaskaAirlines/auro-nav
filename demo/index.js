
import { AuroBreadcrumb } from '../src/auro-breadcrumb.js';
import { AuroAnchorlink } from '../src/auro-anchorlink.js';
import { AuroNav } from '../src/auro-nav.js';

AuroBreadcrumb.register();
AuroBreadcrumb.register('custom-breadcrumb');

AuroAnchorlink.register();
AuroAnchorlink.register('custom-anchorlink');

AuroNav.register();
AuroNav.register('custom-nav');
