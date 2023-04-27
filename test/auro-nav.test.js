import { fixture, html, expect, elementUpdated } from '@open-wc/testing';
import '../index.js';

describe('auro-nav', () => {
  it('auro-nav is accessible', async () => {
    const el = await fixture(html`
      <auro-nav cssclass="testClass"></auro-nav>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-nav custom element is defined using breadcrumb links', async () => {
    const el = await !!customElements.get("auro-nav");

    await expect(el).to.be.true;
  });

  it('breadcrumb icons are present on component', async () => {
    const el = await defaultBreadcrumbFixture();

    el.manageBreadcrumbs();

    const firstChild = el.querySelector(':first-child');

    const chevronLeftIcon = firstChild.querySelector(':first-child');
    const homeIcon = firstChild.querySelector(':nth-child(2)');

    await expect(chevronLeftIcon.name).to.equal('chevron-left');
    await expect(homeIcon.name).to.equal('home-stroke');
  });

  it('anchorlink represents the selected option when clicked', async () => {
    const el = await defaultAnchornavFixture();

    const firstLink = [...el.querySelectorAll('auro-anchorlink')][0];
    firstLink.click();
    
    await elementUpdated(el);

    await expect(firstLink.classList.contains('optionSelected')).to.be.true;
  });

  it('clicking button expands and hides nav in mobile version', async () => {
    const el = await defaultAnchornavFixture();

    window.innerWidth = 600;

    const button = el.shadowRoot.querySelector('auro-button');
    button.click();

    await elementUpdated(el);

    await expect(el.hasAttribute('aria-expanded')).to.be.true;

    button.click();

    await elementUpdated(el);

    await expect(el.hasAttribute('aria-expanded')).to.be.false;
  });
});

async function defaultBreadcrumbFixture() {
  return await fixture(html`
    <auro-nav>
      <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
      <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
      <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
      <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
      <auro-breadcrumb>Current</auro-nav-breadcrumb>
    </auro-nav>
  `);
}

async function defaultAnchornavFixture() {
  return await fixture(html`
    <auro-nav anchornav>
      <span slot="label">Anchor Navigation</span>
      <auro-anchorlink href="#" class="optionSelected">Home</auro-anchorlink>
      <auro-anchorlink href="#">Level 2</auro-anchorlink>
      <auro-anchorlink href="#">Level 3</auro-anchorlink>
      <auro-anchorlink href="#">Default state but with really long text like this to test if the text ellipses</auro-anchorlink>
      <auro-anchorlink href="#">Current</auro-anchorlink>
    </auro-nav>
  `);
}
