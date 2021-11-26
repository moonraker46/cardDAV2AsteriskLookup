#!/bin/bash
# Store input argument into variable
SEARCH_STRING=$1
# Set location of input XML file
XML_PATH='/opt/asterisk_cid/phonebook.xml'

# Run xmllint command with --xpath parameter including the phone number which was handled over as input
# If not hit was found the corresponding xpath error message will not be visible
SEARCH_OUTPUT=`xmllint --xpath '//contact/person/realName[text() and ../../telephony/number[contains(text(),'$SEARCH_STRING' )]]/text()' $XML_PATH 2>/dev/null`

# Output full name of caller and delete "," and trailing whitespaces (usage if name in phonebook is "FIRSTNAME, LASTNAME")
#echo $SEARCH_OUTPUT | sed 's/,//' | awk '{$1=$1;print}' | head -c -1

# Output full name of caller and delete "," and trailing whitespaces (usage if name in phonebook is "LASTNAME, FIRSTNAME")
ar=($SEARCH_OUTPUT)
echo ${ar[1]} ${ar[0]} | sed 's/,//' | awk '{$1=$1;print}' | head -c -1
