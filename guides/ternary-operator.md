# Ternary Operator

Use the ternary operator to do simple if / else logic. You may also use
multiple lines to indent the ternary result and break the 2 space
indentation rule and use 4.

[JavaScript](../js/ternary-operator.js)

*Right:*

```js
var good = test ? foo() : bar();
```

*Right:*

```js
var good = test ?
    foo() :
    bar();
```

*Wrong:*

```js
if (test) {
  var good = foo();
} else {
  var good = bar();
}
```