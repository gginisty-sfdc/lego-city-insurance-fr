"use strict";

let salesforce = require('./salesforce'),
    messenger = require('./messenger'),
    formatter = require('./formatter');

exports.q1 = (sender, values) => {
    console.log('q1');
    console.log('values: ', values);
    if(values.indexOf('a1') >= 0){
        messenger.getUserInfo(sender).then(response => {
            messenger.send({text: `C'est noté. Votre constat digital est crée avec les informations suivantes:`}, sender);
            setTimeout(function(){
                messenger.send(formatter.answer1(response), sender);
            }, 500);
        });
    } else if(values.indexOf('a2') >= 0){
        messenger.getUserInfo(sender).then(response => {
            messenger.send(formatter.answer2(response), sender);
        });
    }
};

exports.q2 = (sender, values) => {
    console.log('q2');
    console.log('values: ', values);
    if(values.indexOf('a1') >= 0){
        messenger.getUserInfo(sender).then(response => {
            messenger.send(formatter.answer3(response), sender);
        });
    } else if(values.indexOf('a2') >= 0){
        messenger.getUserInfo(sender).then(response => {
            messenger.send(formatter.answer35(response), sender);
            setTimeout(function(){
                messenger.send(formatter.answer4(response), sender);
            },1000);
        });
    }
};


exports.q4 = (sender, values) => {
	console.log('q4');
	console.log('values: ', values);
    messenger.getUserInfo(sender).then(response => {
        messenger.send({text: `Hang on for a sec, be right back with you...`}, sender);
        setTimeout(function(){
            messenger.send({text: `OK ${response.first_name}, here is some nice gear for your run. I checked your profile and they are all available in your size`}, sender);
        },500);
        setTimeout(function(){
            messenger.send(formatter.question5(response), sender);
        },1000);
        setTimeout(function(){
            messenger.send({text: `Are you interested in any of those items? If yes, just click on the item to put it into the shopping cart`}, sender);
        },1500);
    });
};
