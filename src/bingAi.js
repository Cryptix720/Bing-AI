'use strict';

let https = require ('https');


// Replace the apiKey string value with your {API KEY}.
let apiKey = '{ENTER  YOUR API KEY HERE}';

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/entities';

let mkt = 'sv-SE';
let q = 'Swedish restaurants near me';

let params = '?mkt=' + mkt + '&q=' + encodeURI(q);

let response_handler = function (response) {
    let body = '';
    response.on ('data', function (d) {
        body += d;
    });
    response.on ('end', function () {
        let body_ = JSON.parse (body);
        let body__ = JSON.stringify (body_, null, '  ');
        console.log (body__);
    });
    response.on ('error', function (e) {
        console.log ('Error: ' + e.message);
    });
};

let Search = function () {
    let request_params = {
        method : 'GET',
        hostname : host,
        path : path + params,
        headers : {
            'Api-Key' : apiKey,
        }
    };

    let req = https.request (request_params, response_handler);
    req.end ();
}

Search ();