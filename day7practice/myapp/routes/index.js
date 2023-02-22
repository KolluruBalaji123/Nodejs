var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  description: 'this is index page description'
 });
});

//about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About us',
  description: 'thi is about page'
 });
});
router.get('/terms', function(req, res, next) {
  res.render('terms', { title: 'terms and conditions',
  description: 'thi is terms and conditions page'
 });
});


module.exports = router;
