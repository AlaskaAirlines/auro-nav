# Nav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/description.md) -->
<!-- The below content is automatically added from ../docs/partials/description.md -->
`<auro-nav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of showing users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.
<!-- AURO-GENERATED-CONTENT:END -->

## About auro-nav

<!-- AURO-GENERATED-CONTENT:START (FILE:src=../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ../docs/partials/useCases.md -->
The `<auro-nav>` element acts as a container for a series of links representing a level of depth in the site content. 
The `<auro-nav>` element should only be used for multi-page projects that have 3 to 5 levels of page depth.
<!-- AURO-GENERATED-CONTENT:END -->

## Example(s)

### Breadcrumb

Example using `auro-breadcrumb` for each link. This example renders as a horizontal list of links. The first icon in the list
will display a home icon, all links will have a right chevron as a divider, and the last link will be disabled.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/breadcrumbRelativePaths.html) -->
  <!-- The below content is automatically added from ./../apiExamples/breadcrumbRelativePaths.html -->
  <auro-nav>
    <auro-breadcrumb href="/components/auro/nav">Home</auro-breadcrumb>
    <auro-breadcrumb href="/components/auro/nav">Level 2</auro-breadcrumb>
    <auro-breadcrumb href="/components/auro/nav">Level 3</auro-breadcrumb>
    <auro-breadcrumb href="/components/auro/nav">Level 4</auro-breadcrumb>
    <auro-breadcrumb>Current</auro-breadcrumb>
  </auro-nav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/breadcrumbRelativePaths.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/breadcrumbRelativePaths.html -->

```html
<auro-nav>
  <auro-breadcrumb href="/components/auro/nav">Home</auro-breadcrumb>
  <auro-breadcrumb href="/components/auro/nav">Level 2</auro-breadcrumb>
  <auro-breadcrumb href="/components/auro/nav">Level 3</auro-breadcrumb>
  <auro-breadcrumb href="/components/auro/nav">Level 4</auro-breadcrumb>
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

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom element. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-nav` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `AuroNav.register(name)` method and pass in a unique name.

```js
import { AuroNav, AuroBreadcrumb } from '@aurodesignsystem/auro-nav/class';

AuroNav.register('custom-nav');
AuroBreadcrumb.register('custom-breadcrumb');
```

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../apiExamples/custom.html -->
  <custom-nav>
    <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</custom-breadcrumb>
    <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</custom-breadcrumb>
    <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</custom-breadcrumb>
    <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</custom-breadcrumb>
    <custom-breadcrumb>Current</custom-breadcrumb>
  </custom-nav>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/custom.html -->

```html
<custom-nav>
  <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Home</custom-breadcrumb>
  <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 2</custom-breadcrumb>
  <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 3</custom-breadcrumb>
  <custom-breadcrumb href="http://auro.alaskaair.com/components/auro/nav">Level 4</custom-breadcrumb>
  <custom-breadcrumb>Current</custom-breadcrumb>
</custom-nav>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
