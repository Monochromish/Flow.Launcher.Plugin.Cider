@echo off
SET plugin_dir=%~dp0%
SET icon=%plugin_dir%Assets\app.png
SET "icon=%icon:\=/%"
SET title="Error: Node.js is not installed"
SET subtitle="To install and use this plugin, you need to install node.js from https://nodejs.org"

where /q node
IF ERRORLEVEL 1 (
    echo {"result": [{"Title": %title%, "Subtitle": %subtitle%, "IcoPath": "%icon%"}]}
) ELSE (
    node "%plugin_dir%/main.js" %*
)
