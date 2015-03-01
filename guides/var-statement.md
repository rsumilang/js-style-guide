# Var Statement

Declare one variable per var statement, it makes it easier to re-order the
lines. Use your best judgement to place the variables where they make sense.

[JavaScript](../js/var-statement.js)

*Right:*

```js
var keys   = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}
```

*Wrong:*

```js
var keys = ['foo', 'bar'],
  values = [23, 42],
  object = {},
  key;

while (keys.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```