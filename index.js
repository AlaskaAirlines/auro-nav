import { AuroNav } from './src/auro-nav.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
export function registerComponent(name = 'custom-nav') {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroNav {});
  }
}

registerComponent('auro-nav');
