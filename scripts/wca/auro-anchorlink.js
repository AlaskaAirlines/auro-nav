import { AuroAnchorlink } from "../../src/auro-anchorlink.js";

/**
 * @private
 */
class AuroAnchorlinkWCA extends AuroAnchorlink {}

if (!customElements.get("auro-anchorlink")) {
  customElements.define("auro-anchorlink", AuroAnchorlinkWCA);
}
