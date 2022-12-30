# Nav

`<auro-nav>` is a [HTML custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) for the purpose of ...

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis in tellus nec pellentesque. Integer bibendum ligula sit amet vehicula gravida. Maecenas accumsan, ligula vitae molestie iaculis, tellus mi laoreet ex [install instructions](https://auro.alaskaair.com/components/auro/button/install), ac malesuada velit dolor vel mi. Cras et rutrum urna. Sed mattis mi eu tortor ullamcorper, egestas bibendum mauris cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra eros eget neque commodo vulputate. In tempus eu velit at dictum.

Nulla at augue facilisis `odio lobortis` molestie vitae a nulla.

## auro-nav use cases

The `<auro-nav>` element should be used in situations where users may:

* ...
* ...
* ...

## Example(s)

### Default

<div class="exampleWrapper">
  <auro-nav type="pipe">
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Home</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 2</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 3</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 4</auro-hyperlink>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav type="pipe">
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Home</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 2</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 3</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 4</auro-hyperlink>
</auro-nav>
```

</auro-accordion>

### With Icon

<div class="exampleWrapper">
  <auro-nav type="pipe">
    <auro-hyperlink href="alaskaair.com" type="nav">
      <auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="heart-filled" customColor></auro-icon>Home
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="chat" customColor></auro-icon>Level 2
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="contract-fare" customColor></auro-icon>Level 3
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="home-stroke" customColor></auro-icon>Level 4
    </auro-hyperlink>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav type="pipe">
    <auro-hyperlink href="alaskaair.com" type="nav">
      <auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="home-stroke" customColor></auro-icon>Home
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="home-stroke" customColor></auro-icon>Level 2
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="home-stroke" customColor></auro-icon>Level 3
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav"><auro-icon style="width: 24px; height: 24px; display: inline-block; margin: 0 4px 2px 0;" customSize category="interface" name="home-stroke" customColor></auro-icon>Level 4
    </auro-hyperlink>
  </auro-nav>
```

</auro-accordion>

### Default

<div class="exampleWrapper">
  <auro-nav type="breadcrumb">
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Home</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 2</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 3</auro-hyperlink>
    <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 4</auro-hyperlink>
    <auro-hyperlink id="five">Current</auro-hyperlink>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav type="breadcrumb">
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Home</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 2</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 3</auro-hyperlink>
  <auro-hyperlink href="http://localhost:8001/demo/" type="nav">Level 4</auro-hyperlink>
  <auro-hyperlink id="five">Current</auro-hyperlink>
</auro-nav>
```

</auro-accordion>

### With Icon

<div class="exampleWrapper">
  <auro-nav type="breadcrumb">
    <auro-hyperlink href="alaskaair.com" type="nav">
      <auro-icon class="breadcrumb-home" style="width: 24px; height: 24px;" customSize category="interface" name="home-stroke" customColor></auro-icon>Home
    </auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav">Level 2</auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav">Level 3</auro-hyperlink>
    <auro-hyperlink href="alaskaair.com" type="nav">Level 4</auro-hyperlink>
    <auro-hyperlink id="five">Current</auro-hyperlink>
  </auro-nav>
</div>
<auro-accordion lowProfile justifyRight>
  <span slot="trigger">See code</span>

```html
<auro-nav type="breadcrumb">
  <auro-hyperlink href="alaskaair.com" type="nav">
    <auro-icon class="breadcrumb-home" style="width: 24px; height: 24px;" customSize category="interface" name="home-stroke" customColor></auro-icon>Home
  </auro-hyperlink>
  <auro-hyperlink href="alaskaair.com" type="nav">Level 2</auro-hyperlink>
  <auro-hyperlink href="alaskaair.com" type="nav">Level 3</auro-hyperlink>
  <auro-hyperlink href="alaskaair.com" type="nav">Level 4</auro-hyperlink>
  <auro-hyperlink id="five">Current</auro-hyperlink>
</auro-nav>
```

</auro-accordion>
