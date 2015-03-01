# Lower Camel Case

Use lowerCamelCase for variables, properties and function names.

Variables, properties and function names should use `lowerCamelCase`. They
should also be descriptive. Single character variables and uncommon
abbreviations should generally be avoided.

[JavaScript](../js/lower-camel-case.js)

*Right:*

```js
var adminUser = db.query('SELECT * FROM users ...');
```

*Wrong:*

```js
var admin_user = db.query('SELECT * FROM users ...');
```