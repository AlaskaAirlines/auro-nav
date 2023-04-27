// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleAnchorlinkCss from "./style-anchorlink-css.js";
import styleCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/style-css";

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";

// build the component class
export class AuroAnchorlink extends AuroHyperlink {
  static get styles() {
    return [
      styleCssAuroHyperlink,
      styleAnchorlinkCss
    ];
  }
}
