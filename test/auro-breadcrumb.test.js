import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-breadcrumb.js';

describe('auro-breadcrumb', () => {
  it('sets the CSS class on auro-breadcrumb > div element', async () => {
    const el = await fixture(html`
      <auro-breadcrumb cssclass="testClass"></auro-breadcrumb>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-breadcrumb is accessible', async () => {
    const el = await fixture(html`
      <auro-breadcrumb cssclass="testClass"></auro-breadcrumb>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-breadcrumb custom element is defined', async () => {
    const el = await !!customElements.get("auro-breadcrumb");

    await expect(el).to.be.true;
  });
});
