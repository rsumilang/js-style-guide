# Named Closures

Naming your closures will produce better stack traces, heap and cpu
profiles.

[JavaScript](../js/named-closures.js)

*Right:*

```js
req.on('end', function onEnd() {
  console.log('winning');
});
```

*Wrong:*

```js
req.on('end', function() {
  console.log('losing');
});
```