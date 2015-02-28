# IntelliJ

1) JSHint: Navigate to "IntelliJ -> Preferences Languages & Frameworks ->
JavaScript -> Code Quality Tools -> JSHint". Check "Enable", "Use config files",
and under "Location" check "Default". Click "Apply", "Ok".


2) JSCS: Back in settings, click on "Plugins" then "Browse Repositories". Search
for "JSCS" and install. Restart IDE.

  - Install NodeJS on your machine (if you haven't already).

    http://nodejs.org/download/

  - Run the following command in your application directory.

    `npm install jscs --save-dev`

Navigate to "IntelliJ -> Preferences Languages & Frameworks ->
JavaScript -> Code Quality Tools -> JSCS". Check "Enable" and apply the
following settings.

  - Node interpreter: /usr/local/bin/node

  - JSCS Package: Click the drop down error and select

    <project-path>/node_modules/jscs

  - Configuration file: Search for config(s)

Click "Apply", "Ok."