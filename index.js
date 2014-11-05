'use strict';

var kraken = require('kraken-js');
var express = require('express');

var app = module.exports = express();

app.use(kraken());

if (!module.parent) {
  app.on('start', start);
  app.listen(8000);
}

function start() {
  console.log('app started ...');
}
