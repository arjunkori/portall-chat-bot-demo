"use strict";
var express = require('express');
var PubNub = require('pubnub');
var router = express.Router();
var utility = require('./utility');

global.pubnub = new PubNub({
    publishKey: 'pub-c-9c9ae7fc-36b4-4991-a377-641db3978ce5',
    subscribeKey: 'sub-c-ade885f6-95d8-11e6-b36e-0619f8945a4f'
});

//NEW PUBNUB KEYS
/*global.pubnub = new PubNub({
    publishKey: 'pub-c-b92a7433-a5f0-4847-bfc5-6906ae4a2213',
    subscribeKey: 'sub-c-b6c31904-4698-11e7-ac6c-0619f8945a4f'
});*/

router.get('/', function(req, res, next) {
    console.log("################## INSIDE FIRST PAGE ##################");

    pubnub.addListener({
        message: function(obj) {

            console.log("######### MESSAGE ####### " + JSON.stringify(obj));
            console.log("######### Msg     ####### " + obj.message['data'].chatMsg);

            if (obj.message['data'].botMsg != true) {
                console.log("Message Send From Bot")
            } else {
                console.log("######### INSIDE ELSE #########")
                var str2 = obj.message['data'].chatMsg //obj.message;
                let finalString;
                var str = str2.toLowerCase();

                if (str.match("help")) {
                    finalString = "help";
                } else if (str.match("register")) {
                    finalString = "register"
                } else if (str.match("bl")) {
                    finalString = "bl"
                } else if (str.match("invoice")) {
                    finalString = "invoice"
                } else if (str.match("edo")) {
                    finalString = "edo"
                } else if (str.match("shipping")) {
                    finalString = "shipping"
                } else if (str.match("ssr")) {
                    finalString = "ssr";
                } else if (str.match("shipment")) {
                    finalString = "shipment";
                } else if (str.match("password")) {
                    finalString = "password"
                } else {
                    finalString = "help"
                }

                var _unixTimeStamp = Date.now();

                console.log("########## finalString Value is : ########### " + finalString)

                switch (finalString) {
                    case 'help':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Opps ! Please try diffrent keyword", //'Try following commands \n\t get summary \n\t get paltform \n\t get geo \n\t get browser \n\t get speed.',
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        }, function(status, response) {
                            console.log(status);
                        })
                        break;

                    case 'register':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": 'Go to PORTALL login page, Click on register as company, Fill form',
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'bl':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Import Menu, Search BL Number",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'invoice':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Import Menu, Click on Activities, Click on CFS menu, Click on Final Invoice",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'edo':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Import Menu, Click on Activities, Click on Line menu, Click on EDO",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'shipping':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Export Menu,  select shipping bill number",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'ssr':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Export menu, Click on CFS icon, click on Special service request",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'shipment':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL , Go to Declare shipment",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'password':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Login PORTALL, hover on setting, click on change password",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;
                    default:
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Opps! entered search not found",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                }
            }
        }
    });

    console.log("Subscribing..");
    pubnub.subscribe({
        channels: ['GAChatBot']
    });
});

module.exports = router;