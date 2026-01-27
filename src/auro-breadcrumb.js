// Copyright (c) 2026 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroHyperlink } from "@aurodesignsystem/auro-hyperlink/class";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import colorBreadcrumbCss from "./styles/color-breadcrumb.scss";
import styleBreadcrumbCss from "./styles/style-breadcrumb.scss";
import tokensCss from "./styles/tokens.scss";

/**
 * The `auro-breadcrumb` element is a horizontal navigation component that indicates the current page's location within a navigational hierarchy, typically used within an `auro-nav` component.
 * @customElement auro-breadcrumb
 * 
 * Force a list of inherited auro-hyperlink properties to be hidden from the generated documentation.
 * @forcePrivate {'active', 'appearance', 'download', 'fluid', 'layout', 'ondark', 'onDark', 'referrerpolicy', 'rel', 'role', 'safeUri', 'size', 'shape', 'target', 'type', 'variant'}
 */
export class AuroBreadcrumb extends AuroHyperlink {
  static get styles() {
    const styles = AuroHyperlink.styles;
    return [...styles, styleBreadcrumbCss, colorBreadcrumbCss, tokensCss];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-breadcrumb"] - The name of the element that you want to register.
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
