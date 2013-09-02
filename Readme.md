
# selection

  DOM selection manipulation. Barely functional, probably not
  useful to you :D

## Installation

  Install with [component(1)](http://component.io):

    $ component install ccomponent/selection

## Example

```js
var selection = require('selection');

var sel = selection(document.querySelector('p'));

// range
sel.select(4, 7);

// move caret
sel.select(10)
```

## License

  MIT
