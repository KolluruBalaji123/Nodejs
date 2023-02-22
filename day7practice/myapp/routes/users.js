var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index');

});
router.get('/list', function(req, res, next) {
  res.render('users/list')
});

module.exports = router;
