# xml2AsteriskLookup

This script has the purpose to lookup the name from an XML phonebook for an incoming call within asterisk.

## Requirements
* Valid XML phonebook (I do use the scripts from https://github.com/blacksenator/carddav2fb for generate a XML phonebook from my Baikal cardDAV server)
* xmllint command is available (http://xmlsoft.org/xmllint.html). Can be installed from various sources for almost every Linux distro

## Usage
* Run the cid_lookup.sh script with a phone number as argument (e.g. "./cid_lookup 01761231231"). If there is an match within the XML phonebook the scripts will give back the corresponding name as value
* Run the script within your asterisk extension.conf like in the example file

## Integration into Home Automation
* When using MQTT to inform your Home Automation (Smart Home) platform (openHAB, Home Assistant, ioBroker etc.) about incoming calls from asterisk (I am using this solution to do so https://github.com/bkbilly/Asterisk-Call-Status) you also can use the script to lookup the caller's name
* In the JavaScript rule example there is a running solution for openHAB (using JSR223 Scripting)
