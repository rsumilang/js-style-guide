# Default Value

Use best practices to set a default value.

[JavaScript](../js/default-value.js)

*Right:*

```js
foo = foo || 'bar';
```

*Wrong:*

```js
foo = foo ? foo : 'bar';
```