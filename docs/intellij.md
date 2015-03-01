# IntelliJ

Below are the settings I used to configure IntelliJ. These same steps should
work for WebStorm and other possible variations of IntelliJ.

## JSHint

Navigate to "IntelliJ -> Preferences Languages & Frameworks ->
JavaScript -> Code Quality Tools -> JSHint". Check "Enable", "Use config files",
and under "Location" check "Default". Click "Apply", "Ok".

## ESLint

Navigate to "IntelliJ -> Preferences Languages & Frameworks ->
JavaScript -> Code Quality Tools -> ESLint". Check "Enable", and apply the
following settings:

  - Node interpreter: /usr/local/bin/node

  - ESLint Package: Click the drop down error and select

      <project-path>/node_modules/eslint

  - Configuration file: Search for .eslintrc

Click "Apply", "Ok."

## JSCS

Back in settings, click on "Plugins" then "Browse Repositories". Search
for "JSCS" and install. Restart IDE.

  - Install NodeJS on your machine (if you haven't already).

    http://nodejs.org/download/

  - Run the following command in your application directory.

    `npm install jscs --save-dev`

Navigate to "IntelliJ -> Preferences Languages & Frameworks ->
JavaScript -> Code Quality Tools -> JSCS". Check "Enable" and apply the
following settings:

  - Node interpreter: /usr/local/bin/node

  - JSCS Package: Click the drop down error and select

    <project-path>/node_modules/jscs

  - Configuration file: Search for config(s)

Click "Apply", "Ok."