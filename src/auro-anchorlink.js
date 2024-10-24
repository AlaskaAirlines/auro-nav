// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import styleAnchorlinkCss from "./style-anchorlink-css.js";
import colorAnchorlinkCss from "./color-anchorlink-css.js";
import tokensCss from "./tokens-css.js";

import styleCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/style-css.js";
import colorCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/color-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-nav element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} active - If set, dethe link is currently the active link in the parent auro-nav.
 */

// build the component class
export class AuroAnchorlink extends AuroHyperlink {
  static get properties() {
    return {
      // ...super.properties,
      active: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCssAuroHyperlink,
      colorCssAuroHyperlink,
      styleAnchorlinkCss,
      colorAnchorlinkCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-anchorlink"] - The name of element that you want to register to.
   *
   * @example
   * AuroAnchorlink.register("custom-anchorlink") // this will register this element to <custom-anchorlink/>
   *
   */
  static register(name = "auro-anchorlink") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroAnchorlink);
  }

  updated(changedProperties) {
    if (changedProperties.has('active')) {
      if (this.active) {
        this.dispatchEvent(new CustomEvent('auroAnchorLink-activated', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-anchorlink');

    this.addEventListener('click', (evt) => {
      // Prevents from href from being followed (this is used for testing)
      evt.preventDefault();
      this.active = true;
    });
  }
}
