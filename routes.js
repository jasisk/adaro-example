'use strict';

module.exports = function (router) {
  router.use(function (req, res) {
    res.render('nested/view');
  });
}
