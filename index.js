import { AuroBreadcrumb } from './src/auro-breadcrumb.js';
import { AuroAnchorlink } from './src/auro-anchorlink.js';
import { AuroNav } from './src/auro-nav.js';

/**
 * Register Custom Element.
 * @param {String} name - Name to use for custom element.
 * @param {Function} className - Class name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name, className) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends className {});
  }
}

registerComponent('auro-breadcrumb', AuroBreadcrumb);
registerComponent('auro-anchorlink', AuroAnchorlink);
registerComponent('auro-nav', AuroNav);
