# flextabs

Responsive tab system built with flexbox

Examples available at https://mdmoreau.github.io/flextabs/

## Features

- CSS media queries control multi (accordion) and single (tabs) toggle views
- Minimal styling makes it easy to integrate into any design
- Dependency free (no jQuery)
- Works in modern browsers that support flexbox (IE 10+)
- Keyboard accessible
- Logical structuring when CSS and JavaScript are disabled

## Install

Include flextabs CSS:

```html
<link href="flextabs.css" rel="stylesheet">
```

Include flextabs JavaScript:

```html
<script src="flextabs.js"></script>
```

Call flextabs on your container elements:

```js
var targets = document.querySelectorAll('.flextabs');
for (var i = 0; i < targets.length; i += 1) {
  var tabs = flextabs(targets[i]);
  tabs.init();
}
```

## Example Markup

In this example `flextabs` is used as the container class, but it can be set to whatever selector is called through your JavaScript.  The only restriction in element ordering is that pairs of `flextabs__toggle` and `flextabs__content` should always both appear before another pair.

```html
<div class="flextabs">
  <h3 class="flextabs__tab">
    <button class="flextabs__toggle">Toggle</button>
  </h3>
  <div class="flextabs__content">
    <p>Tab 1 content</a></p>
  </div>
  <h3 class="flextabs__tab">
    <button class="flextabs__toggle">Toggle</button>
  </h3>
  <div class="flextabs__content">
    <p>Tab 2 content</p>
  </div>
  <h3 class="flextabs__tab">
    <button class="flextabs__toggle">Toggle</button>
  </h3>
  <div class="flextabs__content">
    <p>Tab 3 content</p>
  </div>
</div>
```
## Example CSS

The following shows how you can switch from multi (accordion) to single (tabs) toggle view using media queries.

```css
@media (min-width: 64em) {
  .flextabs__tab {
    /* shift all tabs to appear before content */
    order: -1;
    /* let tabs scale to fit multiple on each row */
    width: auto;
  }
  .flextabs__content--active {
    /* ignore states activated for multi (accordion) toggle view */
    display: none;
  }
  .flextabs__content--active--last {
    /* show the last activated item */
    display: block;
  }
}
```

## Classes

### Primary

`flextabs__tab`

The element that serves as the individual tab container.  Can be combined with `flextabs__toggle`.

`flextabs__toggle`

The element that is clicked to activate a tab.  Can be combined with `flextabs__tab`.

`flextabs__content`

Container for the tab content that will be shown and hidden.

### State

`flextabs__toggle--active`, `flextabs__content--active`

Determines the active items for multi (accordion) toggle view.  Individual item state will be toggled with each trigger, so more than one instance of this class can occur at a time.  Multiple can be added directly to the HTML to set active items for initial page load.

`flextabs__toggle--active--last`, `flextabs__content--active--last`

Classes that will be active on the last activated item and removed from all others.  This is used for the single (tabs) toggle view as only one item is active at a time.  One pair can be added directly to the HTML to set the active item for initial page load.

## npm

You can also install flextabs using npm.  UMD is used to support both AMD and CommonJS-like environments.

```
npm install flextabs --save
```
