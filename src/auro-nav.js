// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable max-classes-per-file, array-bracket-newline, max-params, max-lines */

// If using litElement base class
import { LitElement, html } from "lit";
import {classMap} from 'lit/directives/class-map.js';

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@aurodesignsystem/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-nav element provides users a way to ... (it would be great if you fill this out).
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
      anchorNavContent: { type: String }
    };
  }

  static get styles() {
    return [
      styleCss
    ];
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
    const breadcrumbs = [...this.querySelectorAll('auro-breadcrumb')];

    if (breadcrumbs.length > 0) {
      breadcrumbs.forEach((breadcrumb) => {
        this.insertIcon(breadcrumb, 'interface', 'home-stroke', 'var(--ds-size-200)');
        this.insertIcon(breadcrumb, 'interface', 'chevron-left', 'var(--ds-size-300)');
      });
    }
  }

  /**
   * Used for the anchorLink version to bind events to all link elements in the slotted content.
   * @private
   * @returns {void}
   */
  manageAnchorlinks() {
    this.anchorlinks = [...this.querySelectorAll('auro-anchorlink')];

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
    icon.style.lineHeight = `1.5rem`;
    icon.style.position = 'relative';
    icon.style.top = '-2px';
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
        <auro-button slim tertiary class="showHideBtn" @click=${this.toggleAnchorLinks}>
          <span more>
            <slot name="mobileToggleExpanded"></slot>
          </span>
          <span less>
            <slot name="mobileToggleCollapsed"></slot>
          </span>
        </auro-button>
      ` : undefined}
      ${this.anchorlinks ? html`
        <div id="anchorMarker" class="anchorMarker"></div>
      ` : undefined}
    `;
  }
}
