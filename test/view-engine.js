'use strict';

var request = require('supertest');
var test = require('tape');
var path = require('path');
var fs = require('fs');

var fixture = fs.readFileSync(path.resolve(__dirname, '../views/nested/view.dust'), {encoding: 'utf8'});
var app = require('../');

var server = app.listen(0);

app.on('start', function () {
  test('adaro example', function (t) {
    var req = request(app);

    t.test('renders correctly', function (st) {
      req.get('/').expect(200, fixture, function (err, res) {
        st.error(err);
        st.end();
      });
    });
  }).on('end', server.close.bind(server));
});
