<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-anchorlink

The `auro-anchorlink` element is used to create anchor navigation links within a page, typically used inside an `auro-nav` component.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type    | Default | Description                                                             |
| ---------- | ---------- | --------- | ------- | ------- | ----------------------------------------------------------------------- |
| active     | active     |           | boolean |         | If set, the link is currently the active link in the parent `auro-nav`. |
| fluid      | fluid      |           | boolean | `true`  | If true, the anchorlink will have a fluid-width UI.                     |
| href       | href       |           | string  |         | Defines the URL of the linked page.                                     |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-breadcrumb

The `auro-breadcrumb` element is a horizontal navigation component that indicates the current page's location within a navigational hierarchy, typically used within an `auro-nav` component.

### Properties & Attributes

| Properties | Attributes | Modifiers | Type   | Default | Description                         |
| ---------- | ---------- | --------- | ------ | ------- | ----------------------------------- |
| href       | href       |           | string |         | Defines the URL of the linked page. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### CSS Shadow Parts

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| link       | Allows styling to be applied to the `a` element.                             |
| targetIcon | Allows styling to be applied to the icon that appears next to the hyperlink. |

# auro-nav

The `auro-nav` element provides a way to show users a secondary navigation aid that helps them understand the relation between the location of their current page and higher level pages.

### Properties & Attributes

| Properties       | Attributes       | Modifiers | Type    | Default | Description                                                                  |
| ---------------- | ---------------- | --------- | ------- | ------- | ---------------------------------------------------------------------------- |
| activeLink       | activeLink       |           | object  |         | If set, defines the currently active link.                                   |
| anchorNavContent | anchorNavContent |           | string  |         | Defines the container that anchor links navigate within.                     |
| noHomeIcon       | noHomeIcon       |           | boolean |         | If true, the home icon will not be displayed before first `auro-breadcrumb`. |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Slots

| Name                  | Description                                               |
| --------------------- | --------------------------------------------------------- |
| mobileToggleCollapsed | Slot for button text in mobile when content is collapsed. |
| mobileToggleExpanded  | Slot for button text in mobile when content is expanded.  |
| Slot                  | for insertion of navigation links.                        |
<!-- AURO-GENERATED-CONTENT:END -->

## Breadcrumb

Example when the `auro-nav` slot is populated with `auro-breadcrumb` elements. The last `auro-breadcrumb` in an `auro-nav` component should represent
the current page the user is on. It should reflect a disabled hyperlink and the `href` attribute should **NOT** be populated.

**Mobile Behavior**: On mobile viewports (576px and under), `auro-nav` will collapse to show only the previous page `auro-breadcrumb` with a back arrow.

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

<pre class="language-html"><code class="language-html">&lt;auro-nav&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Home&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 2&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 3&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 4&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb&gt;Current&lt;/auro-breadcrumb&gt;
&lt;/auro-nav&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Anchornav

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

<pre class="language-html"><code class="language-html">&lt;style&gt;
  .anchorNavWithContentContainer {
    display: flex;
    flex-direction: row;
​
  }
​
  .contentWrapper,
  auro-nav {
    flex: 1;
  }
​
  .anchorNavContentContainer {
    max-height: 200px;
    overflow-y: auto;
    background: white;
    border: solid 1px;
    position: relative;
    padding: 10px;
  }
​
  .contentWrapper {
    margin-right: 100px;
  }
&lt;/style&gt;
&lt;div class="anchorNavWithContentContainer"&gt;
  &lt;div class="contentWrapper"&gt;
    This is example content. Scrolling the content inside this box will automatically make selections in the menu on the right.
    &lt;div class="anchorNavContentContainer"&gt;
      &lt;h2 id="sectionOne"&gt;Section 1&lt;/h2&gt;
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus. Consequat interdum varius sit amet mattis vulputate. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Eget nunc lobortis mattis aliquam faucibus purus in. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. Pellentesque sit amet porttitor eget dolor morbi non arcu. Turpis egestas maecenas pharetra convallis posuere morbi leo. Sagittis nisl rhoncus mattis rhoncus urna. Ut tellus elementum sagittis vitae. Viverra adipiscing at in tellus integer feugiat scelerisque.
      &lt;h2 id="sectionTwo"&gt;Section 2&lt;/h2&gt;
      Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Sed euismod nisi porta lorem mollis aliquam ut. Ac turpis egestas sed tempus urna et. Lectus urna duis convallis convallis tellus. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Dictum sit amet justo donec enim diam. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Sociis natoque penatibus et magnis dis. Aliquam purus sit amet luctus venenatis. Sed elementum tempus egestas sed sed risus pretium quam.
      &lt;h3 id="sectionTwoOne"&gt;Section 2.1&lt;/h3&gt;
      Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
      &lt;h2 id="sectionThree"&gt;Section 3&lt;/h2&gt;
      Scelerisque viverra mauris in aliquam sem. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Augue interdum velit euismod in pellentesque massa. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Adipiscing elit ut aliquam purus. Non sodales neque sodales ut etiam. Amet commodo nulla facilisi nullam vehicula ipsum a. Nunc sed blandit libero volutpat sed cras. Vestibulum sed arcu non odio euismod lacinia at quis. Sagittis eu volutpat odio facilisis. Ipsum suspendisse ultrices gravida dictum fusce ut. Ut sem nulla pharetra diam sit amet nisl. Nec tincidunt praesent semper feugiat nibh. Urna neque viverra justo nec ultrices dui.
      &lt;h2 id="sectionFour"&gt;Section 4&lt;/h2&gt;
      Massa sapien faucibus et molestie ac feugiat. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Ultrices mi tempus imperdiet nulla malesuada pellentesque. A diam sollicitudin tempor id eu nisl nunc. Morbi non arcu risus quis varius. Aliquam eleifend mi in nulla. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Sit amet facilisis magna etiam tempor orci eu lobortis. Tellus cras adipiscing enim eu turpis egestas. Odio euismod lacinia at quis risus. Posuere lorem ipsum dolor sit amet. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. At volutpat diam ut venenatis tellus in metus vulputate. Vivamus at augue eget arcu dictum varius duis at. Dictum sit amet justo donec enim diam vulputate ut. Euismod in pellentesque massa placerat duis ultricies lacus sed. Vitae nunc sed velit dignissim sodales ut eu sem integer.
      &lt;h2 id="sectionFive"&gt;Section 5&lt;/h2&gt;
      Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor. Sollicitudin ac orci phasellus egestas tellus. Dictum sit amet justo donec enim. Quam quisque id diam vel quam elementum pulvinar. In mollis nunc sed id semper risus in. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Duis ut diam quam nulla porttitor massa id.
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;auro-nav anchorNavContent=".anchorNavContentContainer"&gt;
    &lt;span slot="label"&gt;Anchor Navigation&lt;/span&gt;
    &lt;span slot="mobileToggleCollapsed"&gt;View More&lt;/span&gt;
    &lt;span slot="mobileToggleExpanded"&gt;View Less&lt;/span&gt;
    &lt;auro-anchorlink href="#sectionOne" fluid="false" small&gt;Section 1&lt;/auro-anchorlink&gt;
    &lt;auro-anchorlink href="#sectionTwo" fluid="false" small&gt;Section 2&lt;/auro-anchorlink&gt;
    &lt;auro-anchorlink href="#sectionTwoOne" fluid="false" small&gt;Section 2.1&lt;/auro-anchorlink&gt;
    &lt;auro-anchorlink href="#sectionThree" fluid="false" small&gt;Section 3&lt;/auro-anchorlink&gt;
    &lt;auro-anchorlink href="#sectionFour" fluid="false" small&gt;Section 4 &lt;em&gt;- with really long text - Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Luctus accumsan tortor posuere ac ut consequat. Pretium viverra suspendisse potenti nullam ac tortor.&lt;/em&gt;&lt;/auro-anchorlink&gt;
    &lt;auro-anchorlink href="#sectionFive" fluid="false" small&gt;Section 5&lt;/auro-anchorlink&gt;
  &lt;/auro-nav&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property & Attribute Examples

### No Home Icon

Use the `noHomeIcon` attribute to remove the home icon from the `auro-nav` component with `auro-breadcrumbs`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/no-home-icon.html) -->
<!-- The below content is automatically added from ./../apiExamples/no-home-icon.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/no-home-icon.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/no-home-icon.html -->

<pre class="language-html"><code class="language-html">&lt;auro-nav noHomeIcon&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Home&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 2&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 3&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb href="http://auro.alaskaair.com/components/auro/nav"&gt;Level 4&lt;/auro-breadcrumb&gt;
  &lt;auro-breadcrumb&gt;Current&lt;/auro-breadcrumb&gt;
&lt;/auro-nav&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle Component with CSS Variables

The component may be restyled by changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/tokens.scss -->

<pre class="language-scss"><code class="language-scss">/* stylelint-disable */
​
@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
​
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
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
