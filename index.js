
/**
 * Expose `Selection`.
 */

module.exports = Selection;

/**
 * Create a new selection within `el`.
 *
 * @param {Element} el
 * @api public
 */

function Selection(el) {
  if (!(this instanceof Selection)) return new Selection(el);
  this.el = el;
}

/**
 * Select from offset `a` to `b`.
 *
 * @param {Number} a
 * @param {Number} b
 * @api public
 */

Selection.prototype.select = function(a, b){
  b = b || a;

  // swap
  if (a > b) {
    var t = a;
    a = b;
    b = t;
  }

  // range
  var range = document.createRange();
  range.setStart(this.el.firstChild, a);
  range.setEnd(this.el.firstChild, b);

  // selection
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
};