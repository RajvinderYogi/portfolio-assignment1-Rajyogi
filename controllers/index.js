let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer and this is my portfolio in Node JS' });
});
router.get('/about-me', function(req, res, next) {
    res.render('about-me', { title: 'About Me', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer and this is my portfolio in Node JS' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services', profession:'I provide the services in Web Development and and Web Designing' });
});
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Portfolio', profession:'Here is the list of projects I have done in Past' });
});
router.get('/contact-me', function(req, res, next) {
    res.render('contact-me', { title: 'Contact',  profession:'The best way to contact me is to  fill out this form' });
});

module.exports = router;
