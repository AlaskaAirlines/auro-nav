import { AuroBreadcrumb } from '../../src/auro-breadcrumb.js';

/**
 * @private
 */
class AuroBreadcrumbWCA extends AuroBreadcrumb {}

if (!customElements.get("auro-breadcrumb")) {
  customElements.define("auro-breadcrumb", AuroBreadcrumbWCA);
}
