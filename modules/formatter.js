"use strict";

let moment = require("moment"),
    numeral = require("numeral");

exports.crash1 = response => {
    console.log('crash1');
    return {
        "text":"Bonjour "+ response.first_name +" il semble que votre vaisseau connecté ait subi un accident mineur. Votre aile gauche semble endommagée. Comment puis-je vous assister?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Constat digital",
            "payload":"q1,a1"
          },
          {
            "content_type":"text",
            "title":"Obtenir de l'aide",
            "payload":"q1,a2"
          }
        ]
    }
};

exports.answer1 = response => {
    console.log('answer1');


    let elements = [];
        elements.push(  
            {
                title: 'Claim',
                "image_url": 'https://salesforce-world-tour-lego.herokuapp.com/images?unnamed.png',
                "buttons": [
                    {
                        "type":"web_url",
                        "url":"https://fscmaster-community-1566ca07-15bfccedd65.force.com/client/s/case/Case/00B6A0000027ufsUAA",
                        "title":"Mon constat"
                    },
                    {
                        "type": "postback",
                        "title": "Obtenir de l'aide",
                        "payload": "obtenir"
                    }
                ]
            }
        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };




};

exports.answer2 = response => {
    console.log('answer2');
    return {
        "text":"Envoyez-nous vos coordonnées et un technicien Cumulus vienrdra a votre secours",
        "quick_replies":[
          {
            "content_type":"location"
          }
        ]
    }
};

exports.answer3 = response => {
    console.log('answer3');
    return {
        "text":"Très bien. Vous pouvez accéder à votre constat à tout moment dans votre portail client Cumulus ",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Community",
            "payload":"test"
          },
          {
            "content_type":"location"
          }
        ]
    }
};

exports.answer35 = response => {
    console.log('answer35');
    return {
        "attachment":{
          "type":"template",
          "payload":{
            "template_type":"button",
            "text":"Vous pouvez modifier ces informations à tout moment dans votre protail en ligne",
            "buttons":[
              {
                "type":"web_url",
                "url":"https://www.google.com",
                "title":"Community"
              }
            ]
          }
        }
    }
};

exports.answer4 = response => {
    console.log('answer4');
    return {
        "text":"Envoyez-nous vos coordonnées et un technicien Cumulus vienrdra a votre secours",
        "quick_replies":[
          {
            "content_type":"location"
          }
        ]
    }
};

exports.question3 = response => {
    //moment.lang('de');
    
    var options = [
        moment().add(1, 'days').format('ddd Do MMM') + ' at 10am',
        moment().add(2, 'days').format('ddd Do MMM') + ' at 9am',
        moment().add(2, 'days').format('ddd Do MMM') + ' at 5pm',
        moment().add(3, 'days').format('ddd Do MMM') + ' at 1pm',
        moment().add(3, 'days').format('ddd Do MMM') + ' at 6pm',
    ];

    console.log('options: ', options);
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": `When will you run?`,
                "buttons": [
                    {
                        "type": "postback",
                        "title": options[0],
                        "payload": "confirm_visit," + options[0]
                    },
                    {
                        "type": "postback",
                        "title": options[1],
                        "payload": "confirm_visit," + options[1]
                    },
                    {
                        "type": "postback",
                        "title": options[2],
                        "payload": "confirm_visit," + options[2]
                    }]
            }
        }
    };
};

exports.question4 = response => {
    return {
        "text":"Are you going to run yourself?",
        "quick_replies":[
          {
            "content_type":"text",
            "title":"Yes",
            "payload":"q4,Yes"
          },
          {
            "content_type":"text",
            "title":"No",
            "payload":"q4,No"
          }
        ]
    }
};

exports.julieImage = response => {
    let elements = [];
        elements.push(  
            {
                title: 'Julie',
                "image_url": 'https://salesforce-world-tour-lego.herokuapp.com/images?unnamed2.png',
            }
        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};

exports.question5 = response => {
    let elements = [];
        elements.push(  
            {
                title: 'SUV 2008',
                subtitle: `A partir de 16 050€ TTC. Ou 189 €/mois après un premier loyer de 4.031 €`,
                "image_url": 'https://www.dropbox.com/s/s5vk994jyufnwhy/2008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 3008',
                subtitle: `A partir de 25 900€ TTC. Ou 313 €/mois après un premier loyer de 6.494 €`,
                "image_url": 'https://www.dropbox.com/s/eaki20wfacq678w/3008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            },
            {
                title: 'SUV 5008',
                subtitle: `A partir de 26 400€ TTC. Ou 313 €/mois après un premier loyer de 6.618 €`,
                "image_url": 'https://www.dropbox.com/s/vtznsub4xf6bq2i/5008.png?raw=1',
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Add to Cart",
                        "payload": "addToCart"
                    }
                ]
            }
        );

    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": elements
            }
        }
    };
};
