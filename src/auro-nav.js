// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-classes-per-file, array-bracket-newline, max-params */

// If using litElement base class
import { LitElement, html } from "lit";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-nav element provides users a way to ... (it would be great if you fill this out).
 *
 * @attr {Boolean} anchornav - If set, auro-hyperlinks will stack vertically.
 * @slot Slot for insertion of auro-hyperlinks.
 */

// build the component class
export class AuroNav extends LitElement {
  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  /**
   * @private
   * @returns {void} Inserts home and chevron-left icons for every breadcrumb.
   */
  handleSlotItems() {
    this.manageBreadcrumbs();
    this.manageAnchorlinks();
  }

  /**
   * @private
   * @returns {void} Inserts home and chevron-left icons for every breadcrumb.
   */
  manageBreadcrumbs() {
    const breadcrumbs = [...this.querySelectorAll('auro-breadcrumb')];

    if (breadcrumbs.length > 0) {
      breadcrumbs.forEach((breadcrumb) => {
        this.insertIcon(breadcrumb, 'interface', 'home-stroke', 'var(--auro-size-200)');
        this.insertIcon(breadcrumb, 'interface', 'chevron-left', 'var(--auro-size-300)');
      });
    }
  }

  /**
   * @private
   * @returns {void}
   */
  manageAnchorlinks() {
    this.anchorlinks = [...this.querySelectorAll('auro-anchorlink')];

    if (this.anchorlinks.length > 0) {
      this.setAttribute('anchornav', true);
      this.requestUpdate();

      this.anchorlinks.forEach((link) => {

        link.addEventListener('click', (evt) => {
          // Prevents from href from being followed (this is used for testing)
          evt.preventDefault();

          // Removes class from all other anchorlinks before reapplying to the one that was clicked
          this.anchorlinks.forEach((anchorlink) => anchorlink.classList.remove('optionSelected'));
          link.classList.add('optionSelected');
        });
      });

      this.handleMobileAnchornav();
    }
  }

  /**
   * @private
   * @returns {void}
   */
  handleMobileAnchornav() {
    const button = this.shadowRoot.querySelector('auro-button');

    if (this.anchorlinks.length > 3) { // eslint-disable-line
      button.addEventListener('click', () => {
        if (!this.hasAttribute('aria-expanded')) {
          this.setAttribute('aria-expanded', true);
          button.innerHTML = 'View Less';

          this.anchorlinks.forEach((link) => link.setAttribute('aria-expanded', true));
        } else {
          this.removeAttribute('aria-expanded');
          button.innerHTML = 'View More';

          this.anchorlinks.forEach((link) => link.removeAttribute('aria-expanded'));
        }
      });
    } else {
      button.style.display = 'none';
      this.style.background = 'unset';
    }
  }

  /**
   * @private
   * @param {Object} link - Hyperlink in which the auro-icon is inserted.
   * @param {String} category - Category that the auro-icon is classified under.
   * @param {String} name - Name of the auro-icon.
   * @param {String} size - Height and width of the auro-icon.
   * @returns {void} Configures icon to be placed within each hyperlink.
   */
  insertIcon(link, category, name, size) {
    const icon = document.createElement('auro-icon');

    icon.setAttribute('customSize', true);
    icon.setAttribute('customColor', true);

    icon.category = category;
    icon.name = name;

    icon.style.width = size;
    icon.style.height = size;
    icon.style.lineHeight = 'var(--auro-size-300)';
    icon.style.position = 'relative';
    icon.style.top = '-2px';
    icon.style.marginRight = 'var(--auro-size-50)';

    link.insertAdjacentElement('afterbegin', icon);
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div aria-label="navigation" role="navigation">
        <div class="label-container">
          <slot name="label"></slot>
        </div>
        <slot @slotchange="${this.handleSlotItems}"></slot>
      </div>
      <auro-button slim tertiary id="showHideBtn">View More</auro-button>
    `;
  }
}
