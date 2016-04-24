var express = require('express');
var request = require('request')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var packageInfo = require('./package.json');

var app = express();

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

// app.get('/webhook/', function (req, res) {
//   if (req.query['hub.verify_token'] === 'token_prueba') {
//     res.send(req.query['hub.challenge']);
//   }
//   res.send('Error, wrong validation token');
// })

var token = "CAALotjk1ok4BAIGmtpOyAbU7dI7HyR2EiWva3FGKMts26ZAAFezupvqBIOJ1srOIsWad2ZCi0LUlPTpFuKFhFxWPq9fAUgeprDd9mdvPOag9qAxyFvZBiJtmyfSWL16u7QL5rdWv1i6ZClXtWVmwPZBEK6S2IdzNc3okzdK7Sr8jG86fjGtlG2QX3zzZAGF3vNbwkpEsumgwZDZD";

function sendTextMessage(sender, text) {
  messageData = {
    text:text
  }
  request({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {access_token:token},
    method: 'POST',
    json: {
      recipient: {id:sender},
      message: messageData,
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    }
  });
}

app.post('/webhook/', jsonParser,  function (req, res) {
  messaging_events = req.body.entry[0].messaging;
  for (i = 0; i < messaging_events.length; i++) {
    event = req.body.entry[0].messaging[i];
    console.log(event)
    sender = event.sender.id;
    if (event.message && event.message.text) {
      text = event.message.text;
      console.log()
        sendTextMessage(sender, "Bienvenido a fish Bot");
      // Handle a text message from this sender
    }
  }
  res.sendStatus(200);
});







var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Web server started at http://%s:%s', host, port);
});