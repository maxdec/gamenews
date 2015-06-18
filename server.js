'use strict';

var express = require('express');
var app = express();
var request = require('request');
// var favicon = require('serve-favicon');

app.use(express.static(__dirname + '/'));
// app.use(favicon(__dirname + '/../public/favicon.png'));

var allowedMethods = 'GET,PUT,POST,DELETE,OPTIONS';
var allowedHeaders = 'Content-Length,Content-Type';
var allowedHosts = ['http://maxdec.fr', 'http://localhost:1337/'];
function _allowCrossDomain(req, res, next) {
  if (allowedHosts.indexOf(req.headers.origin) !== -1) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', allowedMethods);
    res.header('Access-Control-Allow-Headers', allowedHeaders);
    if ('OPTIONS' === req.method) return res.sendStatus(200);
  }
  next();
}

app.route('/forward')
.options(_allowCrossDomain)
.get(function (req, res) {
  request(req.query.url).pipe(res);
});

var port = 1337;
app.listen(port, function () {
  console.log('✔ App listening on port', port);
});
