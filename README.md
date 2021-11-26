# cardDAV2AsteriskLookup

This script has the purpose to lookup the name from an incoming call within asterisk.

## Requirements
* Valid XML phonebook (I do use the scripts from https://github.com/blacksenator/carddav2fb for generate a XML phonebook from my Baikal cardDAV server)
* xmllint command is available (http://xmlsoft.org/xmllint.html). Can be installe from various sources for almost every Linux distro

##
Usage: run the cid_lookup.sh script with a phone number as argument (e.g. "./cid_lookup 01761231231"). If there is an match within the XML phonebook the scripts will give back the corresponding name as value
