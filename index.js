import { AuroBreadcrumb } from './src/auro-breadcrumb.js';
import { AuroNav } from './src/auro-nav.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name, className) {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends className {});
  }
}

registerComponent('auro-breadcrumb', AuroBreadcrumb);
registerComponent('auro-nav', AuroNav);
