# Descriptive Conditions

Any non-trivial conditions should be assigned to a descriptively named
variable or function:

[JavaScript](../js/descriptive-conditions.js)

*Right:*

```js
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}
```

*Wrong:*

```js
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}
```