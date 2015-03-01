# Array / Map creation

Use trailing commas and put *short* declarations on a single line. Only quote
keys when your interpreter complains:

[JavaScript](../js/array-map-creation.js)

*Right:*

```js
var a = ['hello', 'world'];
var b = {
  good: 'code',
  'is generally': 'pretty'
};
```

*Wrong:*

```js
var a = [
  'hello', 'world'
];
var b = {"good": 'code'
        , is generally: 'pretty'
        };
```