import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-nav.js';

describe('auro-nav', () => {
  it('auro-nav is accessible', async () => {
    const el = await fixture(html`
      <auro-nav cssclass="testClass"></auro-nav>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-nav custom element is defined', async () => {
    const el = await !!customElements.get("auro-nav");

    await expect(el).to.be.true;
  });
});
