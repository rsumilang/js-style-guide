/**
 * Avoid the `with` keyword for the sake of sanity while debugging. While it is
 * tempting to use from time to time, use `var` instead.
 *
 * @link https://github.com/rsumilang/js-style-guide/guides/avoid-with.md
 * @see http://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/
 * @see http://stackoverflow.com/questions/5024524/is-the-with-keyword-that-bad-in-javascript
 */

// Right
var foo = watch.this;
foo.trick = false;

// Wrong
watch.this.trick = true;
with (watch) {
  this.trick = false;
}
