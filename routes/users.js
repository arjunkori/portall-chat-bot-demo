"use strict";
var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get('/pub', function(req, res, next) {

    var publishConfig = {
        channel: "PortallChatBot_Channel",
        message: {
            data: {
                chatMsg: "how do I search BL Number ?",
                botMsg:true
            }
        }
    }
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    });

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
            }
        },
        message: function(message) {
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    });
    console.log("Subscribing. CLIENT.");
    pubnub.subscribe({
        channels: ['PortallChatBot_Channel']
    });
})
module.exports = router;

