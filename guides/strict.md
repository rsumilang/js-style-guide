# Strict

In an effort to write "secure" JavaScript code, apply the "use strict"
directive and break bad programming habits.

 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

[JavaScript](../js/strict.js)

*Right:*

```js
function foo () {
  'use strict';
  var x = 'test';
}
```

*Wrong:*

```js
function foo () {
  x = 'test';
}
```