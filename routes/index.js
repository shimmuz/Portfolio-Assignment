let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});



module.exports = router;
