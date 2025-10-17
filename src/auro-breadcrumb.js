// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import colorBreadcrumbCss from "./styles/color-breadcrumb.scss";
import styleBreadcrumbCss from "./styles/style-breadcrumb.scss";
import tokensCss from "./styles/tokens.scss";

// build the component class
export class AuroBreadcrumb extends AuroHyperlink {
  static get styles() {
    const styles = AuroHyperlink.styles;
    return [...styles, styleBreadcrumbCss, colorBreadcrumbCss, tokensCss];
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
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-breadcrumb",
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
