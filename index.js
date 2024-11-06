var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* About Me page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Contact Me page */
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'Contact Me' });
});

module.exports = router;