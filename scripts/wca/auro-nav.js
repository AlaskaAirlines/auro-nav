import { AuroNav } from '../../src/auro-nav.js';

/**
 * @private
 */
class AuroNavWCA extends AuroNav {}

if (!customElements.get("auro-nav")) {
  customElements.define("auro-nav", AuroNavWCA);
}
