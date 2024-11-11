<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-anchorlink

The auro-nav element provides users a way to ... (it would be great if you fill this out).

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| [active](#active)         | `active`         |           | `Boolean` |         | If set, dethe link is currently the active link in the parent auro-nav. |
| [download](#download)       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| [fluid](#fluid)          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| [href](#href)           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| [ondark](#ondark)         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| [rel](#rel)            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| [role](#role)           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| [safeUri](#safeUri)        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| [secondary](#secondary)      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| [small](#small)          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| [target](#target)         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| [tertiary](#tertiary)       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| [type](#type)           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## Events

| Event                      | Type               |
|----------------------------|--------------------|
| `auroAnchorLink-activated` | `CustomEvent<any>` |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| [link](#link)       | Allows styling to be applied to the `a` element. |
| [targetIcon](#targetIcon) | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-breadcrumb

## Properties

| Property         | Attribute        | Modifiers | Type      | Default | Description                                      |
|------------------|------------------|-----------|-----------|---------|--------------------------------------------------|
| [download](#download)       | `download`       |           | `Boolean` | false   | If true, the linked resource will be downloaded when the hyperlink is clicked. |
| [fluid](#fluid)          | `fluid`          |           | `Boolean` |         | If true and `type="cta"`, the hyperlink will have a fluid-width UI. |
| [href](#href)           | `href`           |           | `String`  |         | Defines the URL of the linked page.              |
| [ondark](#ondark)         | `ondark`         |           | `Boolean` | false   | If true, the hyperlink will be styled for use on a dark background. |
| [referrerpolicy](#referrerpolicy) | `referrerpolicy` |           | `Boolean` |         | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests. |
| [rel](#rel)            | `rel`            |           | `String`  |         | Defines the relationship between the current document and the linked document. |
| [relative](#relative)       | `relative`       |           | `Boolean` | false   | If true, the auto URL re-write feature will be disabled. |
| [role](#role)           | `role`           |           | `String`  |         | Defines ARIA roles; currently supports `button` for extended experiences. |
| [safeUri](#safeUri)        |                  | readonly  | `string`  |         | Returns a safe URI based on the provided `href` and `relative` parameters.<br />If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br />Otherwise, it returns an empty string. |
| [secondary](#secondary)      | `secondary`      |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a secondary UI. |
| [small](#small)          | `small`          |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a small UI. |
| [target](#target)         | `target`         |           | `String`  |         | Defines where to open the linked document.       |
| [tertiary](#tertiary)       | `tertiary`       |           | `Boolean` | false   | If true and `type="cta"`, the hyperlink will have a tertiary UI. |
| [type](#type)           | `type`           |           | `String`  |         | Defines the type of hyperlink; accepts `nav` or `cta`. |

## CSS Shadow Parts

| Part         | Description                                      |
|--------------|--------------------------------------------------|
| [link](#link)       | Allows styling to be applied to the `a` element. |
| [targetIcon](#targetIcon) | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-nav

The auro-nav element provides a way to show users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.

## Properties

| Property           | Attribute          | Type     | Default     | Description                                      |
|--------------------|--------------------|----------|-------------|--------------------------------------------------|
| [anchorNavContent](#anchorNavContent) | `anchorNavContent` | `String` | "undefined" | Defines the container that anchor links navigate within. |

## Slots

| Name                    | Description                                      |
|-------------------------|--------------------------------------------------|
|                         | Slot for insertion of navigation links.          |
| [mobileToggleCollapsed](#mobileToggleCollapsed) | Slot for button text in mobile when content is collapsed. |
| [mobileToggleExpanded](#mobileToggleExpanded)  | Slot for button text in mobile when content is expanded. |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Breadcrumb

Example when the `auro-nav` slot is populated with `auro-nav-breadcrumb` elements. The last `auro-nav-breadcrumb` in an `auro-nav` component should represent
the current page the user is on. It should reflect a disabled hyperlink and the `href` attribute should **NOT** be populated.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/breadcrumb.html) -->
  <!-- The below content is automatically added from ./../apiExamples/breadcrumb.html -->
  <auro-nav>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
    <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
    <auro-breadcrumb>Current</auro-breadcrumb>
  </auro-nav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/breadcrumb.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/breadcrumb.html -->

```html
<auro-nav>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
  <auro-breadcrumb>Current</auro-breadcrumb>
</auro-nav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Anchornav

This example shows a user how set up an `auro-nav` component using `auro-anchorlinks` to efficiently jump to different points in the content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/anchornav.html) -->
  <!-- The below content is automatically added from ./../apiExamples/anchornav.html -->
  <style>
    .anchorNavWithContentContainer {
      display: flex;
      flex-direction: row;

    }

    .contentWrapper,
    auro-nav {
      flex: 1;
    }

    .anchorNavContentContainer {
      max-height: 200px;
      overflow-y: auto;
      background: white;
      border: solid 1px;
      position: relative;
      padding: 10px;
    }

    .contentWrapper {
      margin-right: 100px;
    }
  </style>
  <div class="anchorNavWithContentContainer">
    <div class="contentWrapper">
      This is example content. Scrolling the content inside this box will automatically make selections in the menu on the right.
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/anchornav.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/anchornav.html -->

```html
<style>
  .anchorNavWithContentContainer {
    display: flex;
    flex-direction: row;

  }

  .contentWrapper,
  auro-nav {
    flex: 1;
  }

  .anchorNavContentContainer {
    max-height: 200px;
    overflow-y: auto;
    background: white;
    border: solid 1px;
    position: relative;
    padding: 10px;
  }

  .contentWrapper {
    margin-right: 100px;
  }
</style>
<div class="anchorNavWithContentContainer">
  <div class="contentWrapper">
    This is example content. Scrolling the content inside this box will automatically make selections in the menu on the right.
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
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/tokens.scss -->

```scss
/* stylelint-disable color-function-notation, number-max-precision, color-hex-length */

@import './../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables';

:host {
  --ds-auro-anchornav-label-color: var(--ds-color-text-secondary-default, #{$ds-color-text-secondary-default});
  --ds-auro-anchornav-mobile-background-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, rgba(255, 255, 255, 0.00874633) 6.67%, rgba(255, 255, 255, 0.0356065) 13.33%, rgba(255, 255, 255, 0.0817517) 20%, rgba(255, 255, 255, 0.147497) 26.67%, rgba(255, 255, 255, 0.231852) 33.33%, rgba(255, 255, 255, 0.331951) 40%, rgba(255, 255, 255, 0.442747) 46.67%, rgba(255, 255, 255, 0.557353) 53.33%, rgba(255, 255, 255, 0.668149) 60%, rgba(255, 255, 255, 0.768248) 66.67%, rgba(255, 255, 255, 0.852603) 73.33%, rgba(255, 255, 255, 0.918348) 80%, rgba(255, 255, 255, 0.964494) 86.67%, rgba(255, 255, 255, 0.991354) 93.33%, #FFFFFF 100%);
  --ds-auro-anchornav-selected-marker-color: var(--ds-color-border-primary-default, #{$ds-color-border-primary-default});
  --ds-auro-anchorlink-border-color: transparent;
  --ds-auro-anchorlink-default-marker-color: var(--ds-color-border-divider-default, #{$ds-color-border-divider-default});
  --ds-auro-anchorlink-text-color: var(--ds-color-text-tertiary-default, #{$ds-color-text-tertiary-default});
  --ds-auro-breadcrumb-chevron-color: var(--ds-color-icon-secondary-default, #{$ds-color-icon-secondary-default});
  --ds-auro-breadcrumb-icon-color: var(--ds-color-icon-ui-primary-default-default, #{$ds-color-icon-ui-primary-default-default});
  --ds-auro-breadcrumb-last-link-text-color: var(--ds-color-text-tertiary-default, #{$ds-color-text-tertiary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
