# Constants

Constants should be declared as regular variables or static class
properties, using all uppercase letters.

Node.js / V8 supports mozilla's const extension, but unfortunately that
cannot be applied to class members, nor is it part of any ECMA standard.

 - https://developer.mozilla.org/en/JavaScript/Reference/Statements/const

[JavaScript](../js/constants.js)

*Right:*

```js
var SECOND = 1 * 1000;

function File() {
}
File.FULL_PERMISSIONS = 0777;
```

*Wrong:*

```js
const SECOND = 1 * 1000;

function File() {
}
File.fullPermissions = 0777;
```