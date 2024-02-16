// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import styleAnchorlinkCss from "./style-anchorlink-css.js";
import styleCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/style-css.js";

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
      styleAnchorlinkCss
    ];
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
    this.addEventListener('click', (evt) => {
      // Prevents from href from being followed (this is used for testing)
      evt.preventDefault();
      this.active = true;
    });
  }
}
