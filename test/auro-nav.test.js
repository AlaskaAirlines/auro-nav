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

    await elementUpdated(el);

    const firstLink = [...el.querySelectorAll('auro-anchorlink')][0];

    firstLink.click();

    await elementUpdated(el);

    await expect(firstLink.hasAttribute('active')).to.be.true;
  });

  it('clicking button expands and hides nav in mobile version', async () => {
    const el = await defaultAnchornavFixture();
    const nav = el.querySelector('auro-nav');

    window.innerWidth = 600;

    await elementUpdated(el);

    await expect(nav.hasAttribute('aria-expanded')).to.be.false;

    const button = nav.shadowRoot.querySelector('.showHideBtn');

    button.click();

    await elementUpdated(el);

    await expect(nav.hasAttribute('aria-expanded')).to.be.true;

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
    <div>
      <div class="anchorNavContentContainer">
        <h2 id="sectionOne">Section 1</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Consequat interdum varius sit amet mattis vulputate. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eget nunc lobortis mattis aliquam faucibus purus in. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Pellentesque sit amet porttitor eget dolor morbi non arcu. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sagittis nisl rhoncus mattis rhoncus urna. Ut tellus elementum sagittis vitae. Viverra adipiscing at in tellus integer feugiat scelerisque.
        <h2 id="sectionTwo">Section 2</h2>
        Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Sed euismod nisi porta lorem mollis aliquam ut. Ac turpis egestas sed tempus urna et. Lectus urna duis convallis convallis tellus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Dictum sit amet justo donec enim diam. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sociis natoque penatibus et magnis dis. Aliquam purus sit amet luctus venenatis. Sed elementum tempus egestas sed sed risus pretium quam.
        <h3 id="sectionTwoOne">Section 2.1</h3>
        Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
        <h2 id="sectionThree">Section 3</h2>
        Scelerisque viverra mauris in aliquam sem. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Augue interdum velit euismod in pellentesque massa. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Adipiscing elit ut aliquam purus. Non sodales neque sodales ut etiam. Amet commodo nulla facilisi nullam vehicula ipsum a. Nunc sed blandit libero volutpat sed cras. Vestibulum sed arcu non odio euismod lacinia at quis. Sagittis eu volutpat odio facilisis. Ipsum suspendisse ultrices gravida dictum fusce ut. Ut sem nulla pharetra diam sit amet nisl. Nec tincidunt praesent semper feugiat nibh. Urna neque viverra justo nec ultrices dui.
        <h2 id="sectionFour">Section 4</h2>
        Massa sapien faucibus et molestie ac feugiat. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ultrices mi tempus imperdiet nulla malesuada pellentesque. A diam sollicitudin tempor id eu nisl nunc. Morbi non arcu risus quis varius. Aliquam eleifend mi in nulla. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet facilisis magna etiam tempor orci eu lobortis. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus. Posuere lorem ipsum dolor sit amet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. At volutpat diam ut venenatis tellus in metus vulputate. Vivamus at augue eget arcu dictum varius duis at. Dictum sit amet justo donec enim diam vulputate ut. Euismod in pellentesque massa placerat duis ultricies lacus sed. Vitae nunc sed velit dignissim sodales ut eu sem integer.
        <h2 id="sectionFive">Section 5</h2>
        Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
      </div>
      <auro-nav anchorNavContent=".anchorNavContentContainer">
        <span slot="label">Anchor Navigation</span>
        <span slot="mobileToggleCollapsed">View More</span>
        <span slot="mobileToggleExpanded">View Less</span>
        <auro-anchorlink href="#sectionOne">Section 1</auro-anchorlink>
        <auro-anchorlink href="#sectionTwo">Section 2</auro-anchorlink>
        <auro-anchorlink href="#sectionTwoOne">Section 2.1</auro-anchorlink>
        <auro-anchorlink href="#sectionThree">Section 3</auro-anchorlink>
        <auro-anchorlink href="#sectionFour">Section 4<i> - with really long text - Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor.</i></auro-anchorlink>
        <auro-anchorlink href="#sectionFive">Section 5</auro-anchorlink>
      </auro-nav>
    </div>
  `);
}
