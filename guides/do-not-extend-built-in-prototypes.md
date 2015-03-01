# Do not extend built-in prototypes

Do not extend the prototype of native JavaScript objects.

[JavaScript][../js/do-not-extend-built-in-prototypes.js]

*Right:*

```js
var a = [];
if (!a.length) {
  console.log('winning');
}
```

*Wrong:*

```js
Array.prototype.empty = function() {
  return !this.length;
}

var a = [];
if (a.empty()) {
  console.log('losing');
}
```