import { fixture, html, expect } from '@open-wc/testing';
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

    el.manageIcons();

    const firstChild = el.querySelector(':first-child');

    const chevronLeftIcon = firstChild.querySelector(':first-child');
    const homeIcon = firstChild.querySelector(':nth-child(2)');

    await expect(chevronLeftIcon.name).to.equal('chevron-left');
    await expect(homeIcon.name).to.equal('home-stroke');
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
