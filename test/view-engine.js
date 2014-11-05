'use strict';

var request = require('supertest');
var test = require('tape');
var path = require('path');
var fs = require('fs');

var fixture = fs.readFileSync(path.resolve(__dirname, '../views/nested/view.dust'), {encoding: 'utf8'});
var app = require('../');

test('renders correctly', function (t) {
  var req = request(app);
  
  app.on('start', start);

  function start() {
    req.get('/').expect(200, fixture, function (err, res) {
      t.error(err);
      t.end();
    });
  }
});
