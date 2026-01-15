// Copyright (c) 2026 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import colorAnchorlinkCss from "./styles/color-anchorlink.scss";
import styleAnchorlinkCss from "./styles/style-anchorlink.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The `auro-anchorlink` element is used to create anchor navigation links within a page, typically used inside an `auro-nav` component.
 * @customElement auro-anchorlink
 * 
 * Force a list of inherited auro-hyperlink properties to be hidden from the generated documentation.
 * @forcePrivate {'appearance', 'download', 'layout', 'ondark', 'onDark', 'referrerpolicy', 'rel', 'role', 'safeUri', 'size', 'shape', 'target', 'type', 'variant'}
 */
export class AuroAnchorlink extends AuroHyperlink {
  static get properties() {
    return {
      ...super.properties,

      /**
       * If set, the link is currently the active link in the parent `auro-nav`.
       */
      active: {
        type: Boolean,
        reflect: true,
      },

      /**
       * If true, the anchorlink will have a fluid-width UI.
       * @default true
       */
      fluid: {
        type: Boolean
      }
    };
  }

  static get styles() {
    const styles = AuroHyperlink.styles;
    return [...styles, styleAnchorlinkCss, colorAnchorlinkCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-anchorlink"] - The name of the element that you want to register.
   *
   * @example
   * AuroAnchorlink.register("custom-anchorlink") // this will register this element to <custom-anchorlink/>
   *
   */
  static register(name = "auro-anchorlink") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAnchorlink);
  }

  updated(changedProperties) {
    if (changedProperties.has("active")) {
      if (this.active) {
        this.dispatchEvent(
          new CustomEvent("auroAnchorLink-activated", {
            bubbles: true,
            composed: true,
          }),
        );
      }
    }
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-anchorlink",
    );

    this.addEventListener("click", (evt) => {
      // Prevents from href from being followed (this is used for testing)
      if (evt.currentTarget.href?.startsWith("#")) {
        evt.preventDefault();
      }
      this.active = true;
    });
  }
}
