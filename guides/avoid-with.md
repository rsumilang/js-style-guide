# Avoid the `with` keyword

Avoid the `with` keyword for the sake of sanity while debugging. While it is
tempting to use from time to time, use `var` instead.

 - http://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/
 - http://stackoverflow.com/questions/5024524/is-the-with-keyword-that-bad-in-javascript

[JavaScript](../js/avoid-with.js)

*Right:*

```js
var foo = watch.this;
foo.trick = false;
```

*Wrong:*

```js
watch.this.trick = true;
with (watch) {
  this.trick = false;
}
```