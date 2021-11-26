'use strict';
var OPENHAB_CONF = Java.type("java.lang.System").getProperty("openhab.conf");
var JS_PATH = OPENHAB_CONF + "/automation/lib/javascript";

load(JS_PATH + "/core/rules.js");
load(JS_PATH + "/core/triggers.js");
load(JS_PATH + "/core/metadata.js");
load(JS_PATH + "/core/log.js");
load(JS_PATH + "/personal/my_actions.js");

var LOG = getLogger(LOG_PREFIX + ".asterisk_incoming_call");

var Exec = Java.type("org.openhab.core.model.script.actions.Exec");
var Duration = Java.type("java.time.Duration");

var IncomingCall = ir.getItem("MQ_Asterisk_Callstatus");
var Message;



function asterisk_incoming_call(event) {
    if (event.itemState.toString() !== "idle") {
        if (event.itemState.toString().indexOf("Ring") !== -1 && event.itemState.toString().indexOf("Ringing") !== -1) {
            var number = event.itemState.toString()
            number = number.substring(0, number.indexOf("-"));
            if (number) {
                var dur = Duration.ofSeconds(5);
                var name = Exec.executeCommandLine(dur, "/etc/openhab/custom_scripts/asterisk_callid.sh", number).replace("\n", "");
                if (name !== "") {
                    Message = "Anruf von " + name + " um " + new Date().toLocaleTimeString();
                }
                else {
                    Message = "Anruf von " + number + " um " + new Date().toLocaleTimeString();
                }
                LOG.debug(Message);
                telegram("iPhone", Message);
            }
        }
    }
}
when("Item MQ_Asterisk_Callstatus changed")(asterisk_incoming_call);
rule(
    "Asterisk Incoming Call",
    "Rule um Asterisk eingehenden Anruf zu signalisieren"
)(asterisk_incoming_call);
