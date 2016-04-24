var Xray = require('x-ray');  
var x = Xray();

var data = 'LFB2642'

x('https://www.wcpfc.int/record-fishing-vessel-database?flag=All&field_vessel_submitted_by_ccm_value=All&type=All&name=&ircs=&win='+data+'&vid=&imo=&auth_tranship_hs=All&fishing_methods=All', 'td')(function(err, result){
    console.log(result.split('            ')[1].split('      ')[0])
});

// // <td class="views-field views-field-field-vessel-win">
// //             XZY          </td>

// var request = require('request')

// request.post('https://api.projectoxford.ai/vision/v1.0/ocr?language=unk&detectOrientation=false', {"url":"http://example.com/images/test.jpg"}, headers: {
//     'User-Agent': 'request'} function(err,httpResponse,body){
// 	console.log(body)
// })

var request = require('request');

request.post(
    'https://api.projectoxford.ai/vision/v1.0/ocr?language=unk&detectOrientation=false',
    {  json: c{url: 'https://scontent-lax3-1.xx.fbcdn.net/hphotos-xla1/v/t34.0-12/13090234_10206519283722659_381207804_n.png?oh=1bb670cf7e1e08c89250d5462796b97f&oe=571ED3D4' },  headers: {'Ocp-Apim-Subscription-Key': '6b2fac6a0bf542efbeae9269982dff56', "content-type": "application/json"} },
    function (error, response, body) {
        // if (!error && response.statusCode == 200) {
        //     console.log(body)
        // }
        console.log(body)
    }
);