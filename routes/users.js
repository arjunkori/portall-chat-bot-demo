"use strict";
var express = require('express');
var router = express.Router();
var utility = require('./utility');

router.get('/pub', function(req, res, next) {

    var publishConfig = {
        channel: "GAChatBot",
        message: {
            data: {
                "chatUser": "GA ChatBot",
                "chatMsg": "Opps! entered search not found",
                "chatTime": Date.now(),
                "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                "botMsg": true
            }
        }
    }
    pubnub.publish(publishConfig, function(status, response) {
        console.log(status, response);
    });

    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {}
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
        channels: ['GAChatBot']
    });
})
module.exports = router;