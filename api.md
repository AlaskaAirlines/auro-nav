<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-anchorlink

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default       | Description                                                                                                                                                              |
| -------------- | -------------- | --------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| active         | active         |           | boolean |               | If set, the link is currently the active link in the parent auro-nav.                                                                                                    |
| appearance     | appearance     |           | string  | `default`     | Defines whether the component will be on lighter or darker backgrounds.                                                                                                  |
| download       | download       |           | boolean | `false`       | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                           |
| fluid          | fluid          |           | boolean |               | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                      |
| href           | href           |           | string  |               | Defines the URL of the linked page.                                                                                                                                      |
| layout         | layout         |           | string  | `{'default'}` | Defines the language of an element.                                                                                                                                      |
| ondark         | ondark         |           | boolean | `false`       | DEPRECATED - use `appearance` instead.                                                                                                                                   |
| referrerpolicy | referrerpolicy |           | boolean |               | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                  |
| rel            | rel            |           | string  |               | Defines the relationship between the current document and the linked document.                                                                                           |
| role           |                |           | String  |               | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                |
| safeUri        |                | readonly  | string  |               | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string. |
| target         | target         |           | string  |               | Defines where to open the linked document.                                                                                                                               |
| type           | type           |           | string  |               | Defines the type of hyperlink; accepts `nav` or `cta`.                                                                                                                   |
| variant        | variant        |           | string  | `primary`     | Sets button variant option.                                                                                                                                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-breadcrumb

### Properties & Attributes

| Properties     | Attributes     | Modifiers | Type    | Default       | Description                                                                                                                                                              |
| -------------- | -------------- | --------- | ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| appearance     | appearance     |           | string  | `default`     | Defines whether the component will be on lighter or darker backgrounds.                                                                                                  |
| download       | download       |           | boolean | `false`       | If true, the linked resource will be downloaded when the hyperlink is clicked.                                                                                           |
| fluid          | fluid          |           | boolean |               | If true and `type="cta"`, the hyperlink will have a fluid-width UI.                                                                                                      |
| href           | href           |           | string  |               | Defines the URL of the linked page.                                                                                                                                      |
| layout         | layout         |           | string  | `{'default'}` | Defines the language of an element.                                                                                                                                      |
| ondark         | ondark         |           | boolean | `false`       | DEPRECATED - use `appearance` instead.                                                                                                                                   |
| referrerpolicy | referrerpolicy |           | boolean |               | If true, sets `strict-origin-when-cross-origin` to control the referrer information sent with requests.                                                                  |
| rel            | rel            |           | string  |               | Defines the relationship between the current document and the linked document.                                                                                           |
| role           |                |           | String  |               | Defines ARIA roles; currently supports `button` for extended experiences.                                                                                                |
| safeUri        |                | readonly  | string  |               | Returns a safe URI based on the provided `href`.<br>If `href` is truthy, it generates a safe URL using the `safeUrl` function.<br>Otherwise, it returns an empty string. |
| target         | target         |           | string  |               | Defines where to open the linked document.                                                                                                                               |
| type           | type           |           | string  |               | Defines the type of hyperlink; accepts `nav` or `cta`.                                                                                                                   |
| variant        | variant        |           | string  | `primary`     | Sets button variant option.                                                                                                                                              |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-nav

### Properties & Attributes

| Properties       | Attributes       | Modifiers | Type    | Default     | Description                                                                |
| ---------------- | ---------------- | --------- | ------- | ----------- | -------------------------------------------------------------------------- |
| anchorNavContent | anchorNavContent |           | string  | `undefined` | Defines the container that anchor links navigate within.                   |
| noHomeIcon       | noHomeIcon       |           | boolean |             | If true, the home icon will not be displayed before first auro-breadcrumb. |
|                  | activeLink       |           | object  | `undefined` | If set, defines the currently active link.                                 |

### Methods

| Name     | Parameters                                                          | Return | Description                                       |
| -------- | ------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of element that you want to register to. |        | This will register this element with the browser. |

### Slots

| Name                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
| mobileToggleCollapsed | Slot for button text in mobile when content is collapsed. |
| mobileToggleExpanded  | Slot for button text in mobile when content is expanded.  |
| Slot                  | for insertion of navigation links.                        |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Breadcrumb

Example when the `auro-nav` slot is populated with `auro-breadcrumb` elements. The last `auro-breadcrumb` in an `auro-nav` component should represent
the current page the user is on. It should reflect a disabled hyperlink and the `href` attribute should **NOT** be populated.

#### Mobile Behavior

On mobile viewports (576px and under), `auro-nav` will collapse to show only the previous page `auro-breadcrumb` with a back arrow.

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
      <auro-anchorlink href="#sectionOne" fluid="false" small>Section 1</auro-anchorlink>
      <auro-anchorlink href="#sectionTwo" fluid="false" small>Section 2</auro-anchorlink>
      <auro-anchorlink href="#sectionTwoOne" fluid="false" small>Section 2.1</auro-anchorlink>
      <auro-anchorlink href="#sectionThree" fluid="false" small>Section 3</auro-anchorlink>
      <auro-anchorlink href="#sectionFour" fluid="false" small>Section 4 <em>- with really long text - Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor.</em></auro-anchorlink>
      <auro-anchorlink href="#sectionFive" fluid="false" small>Section 5</auro-anchorlink>
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
    <auro-anchorlink href="#sectionOne" fluid="false" small>Section 1</auro-anchorlink>
    <auro-anchorlink href="#sectionTwo" fluid="false" small>Section 2</auro-anchorlink>
    <auro-anchorlink href="#sectionTwoOne" fluid="false" small>Section 2.1</auro-anchorlink>
    <auro-anchorlink href="#sectionThree" fluid="false" small>Section 3</auro-anchorlink>
    <auro-anchorlink href="#sectionFour" fluid="false" small>Section 4 <em>- with really long text - Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor.</em></auro-anchorlink>
    <auro-anchorlink href="#sectionFive" fluid="false" small>Section 5</auro-anchorlink>
  </auro-nav>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Attribute Examples

#### noHomeIcon

Use the `noHomeIcon` attribute to remove the home icon from the `auro-nav` component with `auro-breadcrumbs`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/noHomeIcon.html) -->
  <!-- The below content is automatically added from ./../apiExamples/noHomeIcon.html -->
  <auro-nav noHomeIcon>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/noHomeIcon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/noHomeIcon.html -->

```html
<auro-nav noHomeIcon>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</auro-breadcrumb>
  <auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</auro-breadcrumb>
  <auro-breadcrumb>Current</auro-breadcrumb>
</auro-nav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

```scss
/* stylelint-disable */

@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;

:host {
  --ds-auro-anchornav-label-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-anchornav-mobile-background-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.0001) 0%, rgba(255, 255, 255, 0.00874633) 6.67%, rgba(255, 255, 255, 0.0356065) 13.33%, rgba(255, 255, 255, 0.0817517) 20%, rgba(255, 255, 255, 0.147497) 26.67%, rgba(255, 255, 255, 0.231852) 33.33%, rgba(255, 255, 255, 0.331951) 40%, rgba(255, 255, 255, 0.442747) 46.67%, rgba(255, 255, 255, 0.557353) 53.33%, rgba(255, 255, 255, 0.668149) 60%, rgba(255, 255, 255, 0.768248) 66.67%, rgba(255, 255, 255, 0.852603) 73.33%, rgba(255, 255, 255, 0.918348) 80%, rgba(255, 255, 255, 0.964494) 86.67%, rgba(255, 255, 255, 0.991354) 93.33%, #FFFFFF 100%);
  --ds-auro-anchornav-selected-marker-color: var(--ds-basic-color-border-bold, #{v.$ds-basic-color-border-bold});
  --ds-auro-anchorlink-border-color: transparent;
  --ds-auro-anchorlink-default-marker-color: var(--ds-basic-color-border-subtle, #{v.$ds-basic-color-border-subtle});
  --ds-auro-anchorlink-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-anchorlink-text-hover-color: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
  --ds-auro-breadcrumb-chevron-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
  --ds-auro-breadcrumb-icon-color: var(--ds-advanced-color-hyperlink-text, #{v.$ds-advanced-color-hyperlink-text});
  --ds-auro-breadcrumb-last-link-text-color: var(--ds-basic-color-texticon-muted, #{v.$ds-basic-color-texticon-muted});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
