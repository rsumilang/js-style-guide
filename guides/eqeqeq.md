# ===

Use the triple equality operator as it will work just as expected.

[JavaScript](../js/eqeqeq.js)

*Right:*

```js
var a = 0;
if (a !== '') {
  console.log('winning');
}
```

*Wrong:*

```js
var a = 0;
if (a == '') {
  console.log('losing');
}
```