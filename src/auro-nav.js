// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-params, max-lines, no-underscore-dangle, lit/binding-positions, lit/no-invalid-html */

// If using litElement base class
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

import styleCss from "./style-css.js";
import colorCss from "./color-css.js";
import tokensCss from "./tokens-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-nav element provides a way to show users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.
 *
 * @attr {Boolean} activeLink - If set, defines the currently active link.
 * @attr {String} anchorNavContent - Defines the container that anchor links navigate within.
 * @slot Slot for insertion of navigation links.
 * @slot mobileToggleExpanded - Slot for button text in mobile when content is expanded.
 * @slot mobileToggleCollapsed - Slot for button text in mobile when content is collapsed.
 */

// build the component class
export class AuroNav extends LitElement {
  constructor() {
    super();

    this.anchorNavContent = undefined;

    const versioning = new AuroDependencyVersioning();

    /**
     * @private
     */
    this.buttonTag = versioning.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = versioning.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /**
     * @private
     */
    this.activeLink = undefined;

    /**
     * @private
     */
    this.labelHidden = true;

    /**
     * @private
     */
    this.mobileViewCollapsedNumLinks = 3;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      activeLink: { type: Object },
      anchorNavContent: { type: String },

      /**
       * If true, the home icon will not be displayed before first auro-breadcrumb.
       */
      noHomeIcon: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      colorCss,
      tokensCss
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-nav"] - The name of element that you want to register to.
   *
   * @example
   * AuroNav.register("custom-nav") // this will register this element to <custom-nav/>
   *
   */
  static register(name = "auro-nav") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroNav);
  }

  /**
   * @private
   * @returns {void} Sets the labelHidden attribute to true if there is no label slot content.
   */
  handleLabelSlot() {
    const slot = this.shadowRoot.querySelector('#label');

    this.labelHidden = true;

    if (slot.assignedNodes().length > 0) {
      this.labelHidden = false;
    }
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
    const breadcrumbs = [...this.querySelectorAll('auro-breadcrumb, [auro-breadcrumb]')];

    if (breadcrumbs.length > 0) {
      breadcrumbs.forEach((breadcrumb) => {
        // Only insert home icon if noHomeIcon is NOT present
        if (!this.hasAttribute('noHomeIcon')) {
          this.insertIcon(breadcrumb, 'interface', 'home-stroke', '--ds-auro-icon-size: var(--ds-size-200)');
        }

        this.insertIcon(breadcrumb, 'interface', 'chevron-left', '--ds-auro-icon-size: var(--ds-size-300)');
      });
    }
  }

  /**
   * Used for the anchorLink version to bind events to all link elements in the slotted content.
   * @private
   * @returns {void}
   */
  manageAnchorlinks() {
    this.anchorlinks = [...this.querySelectorAll('auro-anchorlink, [auro-anchorlink]')];

    if (this.anchorlinks.length > 0) {
      this.setAttribute('anchornav', true);
      this.requestUpdate();

      this.anchorlinks.forEach((link) => {
        if (link.active) {
          this.activeLink = link;
        }

        link.addEventListener('auroAnchorLink-activated', (evt) => {
          if (this.activeLink !== evt.target) {
            this.activeLink = evt.target;
          }
        });

        link.addEventListener('click', (evt) => {
          if (this.scrollContainer && this.activeLink) {
            const targetContent = document.querySelector(evt.target.href);

            if (targetContent) {
              targetContent.scrollIntoView(targetContent);
            }
          }
        });
      });

      this.assessActiveAnchorLink();
    }
  }

  /**
   * Used to toggle visibility of all links after the first 3 when viewed in the mobile layout.
   * @private
   * @returns {void}
   */
  toggleAnchorLinks() {
    if (!this.hasAttribute('aria-expanded')) {
      this.setAttribute('aria-expanded', true);
    } else {
      this.removeAttribute('aria-expanded');
    }

    this.handleAnchorNavAnimation();
  }

  /**
   * Used for the anchorLink version to animate the position and size of the marker used to identify the active link.
   * @private
   * @returns {void}
   */
  handleAnchorNavAnimation() {
    const marker = this.shadowRoot.querySelector('#anchorMarker');

    if (marker) {
      if (this.activeLink) {
        marker.style.display = 'block';
        marker.style.height = `${this.activeLink.offsetHeight}px`;
        marker.style.top = `${this.activeLink.offsetTop}px`;
      } else {
        marker.style.display = 'none';
        marker.style.height = 'unset';
        marker.style.top = 'unset';
      }
    }
  }

  /**
   * @private
   * @param {Object} link - Hyperlink in which the auro-icon is inserted.
   * @param {String} category - Category that the auro-icon is classified under.
   * @param {String} name - Name of the auro-icon.
   * @param {String} props - Custom CSS properties for auro-icon.
   * @returns {void} Configures icon to be placed within each hyperlink.
   */
  insertIcon(link, category, name, props) {
    const icon = document.createElement(this.iconTag._$litStatic$);

    icon.setAttribute('customColor', true);

    icon.category = category;
    icon.name = name;

    icon.style = props;
    icon.style.position = 'relative';
    icon.style.marginRight = `0.25rem`;

    link.insertAdjacentElement('afterbegin', icon);
  }

  /**
   * Sets the activeLink attribute based on which linked content section is in view.
   * @private
   * @returns {void}
   */
  assessActiveAnchorLink() {
    let lastInView; /* eslint-disable-line init-declarations */

    this.anchorlinks.forEach((anchorLink) => {
      const target = this.scrollContainer.querySelector(anchorLink.getAttribute('href'));

      if (target) {
        if (this.isScrolledIntoView(target)) {
          lastInView = anchorLink;
        }
      }
    });

    if (this.activeLink !== lastInView) {
      this.activeLink = lastInView;
    }
  }

  /**
   * Used with the anchorLink version to determine if the designated content is currently viewable in the scrollbox.
   * @private
   * @param {Object} elem - The element to check if it is currently visible in the scrollContainer.
   * @returns {Boolean} If true, the element passed in is visible.
   */
  isScrolledIntoView(elem) {
    const containerViewBottom = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const elementInViewPos = elem.offsetTop + elem.offsetHeight;
    const inView = containerViewBottom >= elementInViewPos;

    return inView;
  }

  updated(changedProperties) {
    if (changedProperties.has('activeLink')) {
      if (this.hasAttribute('anchornav')) {
        this.anchorlinks.forEach((anchorlink) => {
          if (this.activeLink !== anchorlink) {
            anchorlink.removeAttribute('active');
          }
        });

        this.handleAnchorNavAnimation();
      }
    }
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, 'auro-nav');

    this.scrollContainer = document.querySelector(this.anchorNavContent);

    if (this.scrollContainer) {
      this.scrollContainer.addEventListener('scroll', () => {
        this.assessActiveAnchorLink();
      });
    }

    window.addEventListener('resize', () => {
      const marker = this.shadowRoot.querySelector('#anchorMarker');
      if (marker) {
        marker.setAttribute('resizing', true);
        this.handleAnchorNavAnimation();
        marker.removeAttribute('resizing');
      }
    });
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const labelClasses = {
      'hidden': this.labelHidden,
      'label-container': true
    };

    return html`
      <div aria-label="navigation" role="navigation">
        <div class=${classMap(labelClasses)}>
          <slot id="label" name="label" @slotchange="${this.handleLabelSlot}"></slot>
        </div>
        <slot @slotchange="${this.handleSlotItems}"></slot>
      </div>
      ${this.anchorlinks && this.anchorlinks.length > this.mobileViewCollapsedNumLinks ? html`
        <${this.buttonTag} slim tertiary class="showHideBtn" @click=${this.toggleAnchorLinks}>
          <span more>
            <slot name="mobileToggleExpanded"></slot>
          </span>
          <span less>
            <slot name="mobileToggleCollapsed"></slot>
          </span>
        </${this.buttonTag}>
      ` : undefined}
      ${this.anchorlinks ? html`
        <div id="anchorMarker" class="anchorMarker"></div>
      ` : undefined}
    `;
  }
}
