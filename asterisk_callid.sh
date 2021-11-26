#!/bin/bash
# openHAB (as user "openhab" which meaans you have to generate SSH keys for this user and copy them to your remote asterisk server) runs the lookup command
ssh root@your.server /path/to/your/script/cid_lookup.sh $1

# openHAB runs the lookup command when asterisk (or better said the lookup script is on the same host like openHAB)
# /path/to/your/script/cid_lookup.sh $1
