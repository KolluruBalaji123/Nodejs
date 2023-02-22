var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('articles/index');

});
router.get('/list', function(req, res, next) {
  res.render('articles/list')
});

module.exports = router;