let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer/Designer and this is my portfolio website.' });
});
router.get('/about-me', function(req, res, next) {
    res.render('about-me', { title: 'About Me', about :'I Design and Develop responsive web application, I am pursuing my Post Graduate diploma in Interactive Design Media - Web from Georgian College of applied Arts - Barrie. I love what I do.' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services', profession:'I provide the services in Web Development and and Web Designing', service1: 'Web Designing', service1Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.', service2: 'Web Development', service2Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.', service3: 'Analytics', service3Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.', service4: 'Content Planning', service4Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.',service5: 'SEO/SEM', service5Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.',service6: 'Photography', service6Body: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.', section2:'Work Process'});
});
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Portfolio', profession:'Here is the list of projects I have done in Past' });
});
router.get('/contact-me', function(req, res, next) {
    res.render('contact-me', { title: 'Contact',  profession:'The best way to contact me is to  fill out this form' });
});

module.exports = router;
