# flextabs

Use flexbox to transition between accordion and tab views responsively.

## Features

- CSS media queries control each view
- Accordion view allows multiple items to expand
- Tab view only allows one item to be active
- Minimal styles and scripting keep things easy to customize
- Dependency free (no jQuery)
- Works in modern browsers that support flexbox (IE 10+)
- Keyboard accessible
- Logical structuring for when CSS and JavaScript are disabled

## Install

Include flextabs CSS

```html
<link href="index.css" rel="stylesheet">
```

Include flextabs JavaScript

```html
<script src="index.js"></script>
```

Call flextabs on your container element

```js
var targets = document.querySelectorAll('.flextabs');
for (var i = 0; i < targets.length; i += 1) {
  var tabs = flextabs(targets[i]);
  tabs.init();
}
```

## Classes

### Primary

`flextabs__tab`

The element that serves as the individual tab container.  Can be combined with `flextabs__toggle` on the same element.

`flextabs__toggle`

The element that is clicked to activate a tab.  Can be combined with `flextabs__tab` on the same element.

`flextabs__content`

Container for the tab content that will be shown and hidden.

### State

`flextabs__toggle--active`, `flextabs__content--active`

Determines the active items for accordion view.  Individual item state will be toggled with each trigger, so multiple instances of this class can occur.  Can be added directly to HTML to set active state for initial page load.

`flextabs__toggle--active--last`, `flextabs__content--active--last`

Class that will be active on the last triggered item and removed from all others.  This is used for the tab view as only one item is active at a time.  Can be added directly to HTML to set active state for initial page load.

## Example Markup

In this example `flextabs` is used as the container class, but it can be set to whatever selector is called through your JavaScript.  The only restriction in element ordering is that pairs of `flextabs__toggle` and `flextabs__content` should always both appear before another pair.

```html
<div class="flextabs">
  <h3 class="flextabs__tab"><button class="flextabs__toggle">Toggle</button></h3>
  <div class="flextabs__content">
    <p>Tab 1 content</a></p>
  </div>
  <h3 class="flextabs__tab"><button class="flextabs__toggle">Toggle</button></h3>
  <div class="flextabs__content">
    <p>Tab 2 content</p>
  </div>
  <h3 class="flextabs__tab"><button class="flextabs__toggle">Toggle</button></h3>
  <div class="flextabs__content">
    <p>Tab 3 content</p>
  </div>
</div>
```
## Example CSS

This example shows how you can switch from an accordion to tabs by using media queries.

```css
@media (min-width: 64em) {
  /* order: -1 shifts the tabs to appear before the content areas */
  .flextabs__tab {
    order: -1;
    width: auto;
  }
  /* ignore states toggled for accordion view */
  .flextabs__content--active {
    display: none;
  }
  /* show the last activated item */
  .flextabs__content--active--last {
    display: block;
  }
}
```
