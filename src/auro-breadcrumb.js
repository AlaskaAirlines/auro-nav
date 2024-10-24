// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// Import touch detection lib
import styleBreadcrumbCss from "./style-breadcrumb-css.js";
import colorBreadcrumbCss from "./color-breadcrumb-css.js";
import tokensCss from "./tokens-css.js";

import styleCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/style-css.js";
import colorCssAuroHyperlink from "@aurodesignsystem/auro-hyperlink/src/color-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/src/auro-hyperlink.js";

// build the component class
export class AuroBreadcrumb extends AuroHyperlink {
  static get styles() {
    return [
      styleCssAuroHyperlink,
      colorCssAuroHyperlink,
      styleBreadcrumbCss,
      colorBreadcrumbCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-breadcrumb"] - The name of element that you want to register to.
   *
   * @example
   * AuroBreadcrumb.register("custom-breadcrumb") // this will register this element to <custom-breadcrumb/>
   *
   */
  static register(name = "auro-breadcrumb") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroBreadcrumb);
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-breadcrumb');

    this.addEventListener('click', (evt) => {
      // Prevents from href from being followed (this is used for testing)
      evt.preventDefault();
      this.active = true;
    });
  }
}
