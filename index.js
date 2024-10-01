import { AuroBreadcrumb } from './src/auro-breadcrumb.js';
import { AuroAnchorlink } from './src/auro-anchorlink.js';
import { AuroNav } from './src/auro-nav.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-breadcrumb', AuroBreadcrumb);
RuntimeUtils.default.prototype.registerComponent('custom-anchorlink', AuroAnchorlink);
RuntimeUtils.default.prototype.registerComponent('custom-nav', AuroNav);
