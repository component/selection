
# selection

  DOM selection manipulation. Barely functional, probably not
  useful to you :D

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/selection

## Example

```js
var selection = require('selection');

var sel = selection(document.querySelector('p'));

// empty?
sel.empty(); // => true

// range
sel.select(4, 7);

// move caret
sel.select(10);

// empty?
sel.empty(); // => true

// "stringify"
sel.toString();
```

## License

  MIT
