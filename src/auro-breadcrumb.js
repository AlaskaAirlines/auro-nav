// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// Import touch detection lib
import styleBreadcrumbCss from "./style-breadcrumb-css.js";
import styleCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/style-css.js";

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.mjs";

// build the component class
export class AuroBreadcrumb extends AuroHyperlink {
  static get styles() {
    return [
      styleCssAuroHyperlink,
      styleBreadcrumbCss
    ];
  }
}
