"use strict";
var express = require('express');
var PubNub = require('pubnub');
var router = express.Router();
var utility = require('./utility');

global.pubnub = new PubNub({
    publishKey: 'pub-c-9c9ae7fc-36b4-4991-a377-641db3978ce5',
    subscribeKey: 'sub-c-ade885f6-95d8-11e6-b36e-0619f8945a4f'
});


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
                } else if (str.match("outlook")) {
                    finalString = "outlook"
                } else if (str.match("lan")) {
                    finalString = "lan"
                } else if (str.match("pc")) {
                    finalString = "pc"
                } else if (str.match("wifi")) {
                    finalString = "wifi"
                } else if (str.match("gmail")) {
                    finalString = "gmail"
                /*} else if (str.match("ssr")) {
                    finalString = "ssr";
                } else if (str.match("shipment")) {
                    finalString = "shipment";
                } else if (str.match("password")) {
                    finalString = "password"*/
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
                                    "chatMsg": "Sorry I am having trouble understanding your question.\nPlease try some different question.",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        }, function(status, response) {
                            console.log(status);
                        })
                        break;

                    case 'outlook':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": 'Step 1: Close outlook \nStep 2:Launch Outlook in safe mode by choosing one of the following options.\nStep 3:In Windows 10, choose Start, type Outlook.exe /safe, and press Enter.\nStep 4:Close Outlook, and then open it normally.',
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'lan':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Step 1:Check Your TCP/IP Settings\nStep 2:Reset Your TCP/IP Manually\nStep 3:Reset Your Winsock Manually",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'pc':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Step 1:Check the power supply\nStep 2:Check the screen\nStep 3:Boot into safe mode",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'wifi':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Step 1:Restart Wireless Router\nStep 2:Disable Security on Wireless Router\nStep 3:Use Network Troubleshooter",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'monitor':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Step 1:Verify that your PC has fully power cycled\nStep 2:Troubleshoot the cause of the beep code\n Step 3:Clear the CMOS",
                                    "chatTime": _unixTimeStamp,
                                    "image": 'http://seeklogo.com/images/G/google-2015-icon-logo-B4217923DD-seeklogo.com.png',
                                    "botMsg": false
                                }
                            }
                        });
                        break;

                    case 'gmail':
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Step 1:Open www.gmail.com\nStep 2:Go to forget password\nStep 3:Enter new password",
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

                    /*case 'shipment':
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
                        break;*/

                    default:
                        pubnub.publish({
                            channel: "GAChatBot",
                            message: {
                                "type": "groupMessage",
                                "data": {
                                    "chatUser": "GA ChatBot",
                                    "chatMsg": "Sorry I am having trouble understanding your question.\nPlease try some different question.",
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

/*
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
                                    "chatMsg": "Sorry I am having trouble understanding your question.\nPlease try some different question.",
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
                                    "chatMsg": "Sorry I am having trouble understanding your question.\nPlease try some different question.",
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
});*/

module.exports = router;