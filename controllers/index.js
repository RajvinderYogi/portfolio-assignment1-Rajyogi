let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer/Designer and this is my portfolio website.',button1: 'Learn More', button2: 'Contact Me' });
});
router.get('/about-me', function(req, res, next) {
    res.render('about-me', { title: 'About Me', about :'I Design and Develop responsive web application, I am pursuing my Post Graduate diploma in Interactive Design Media - Web from Georgian College of applied Arts - Barrie. I love what I do.' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services', profession:'I provide the services in Web Development and and Web Designing', service1: 'Web Designing', service1Body: 'I am specialized in web, device responsive, logo designing and design the layout of the content on a web medium.', service2: 'Web Development', service2Body: 'I am experienced in providing E-commerce Solutions & Shopping Carts, CMS, Social Media Integrations & Web Application Development.', service3: 'Analytics', service3Body: 'I am able to provide analysis and reporting of web data for purposes of understanding and optimizing web using conversion rate and traffic.', service4: 'Content Planning', service4Body: 'I have provided the audience target driven content in past with useful keywords according to need of the client while keeping the mission in mind. ',service5: 'SEO/SEM', service5Body: 'I am highly skilled in assisting to market the brand online and providing SEO, SEM, Google Adwords Campaign, Keyword Research & analysis, Pay-Per-Click.',service6: 'Photography', service6Body: 'I have helped clients in past to make their website look pretty using the real high quality pictures using my photography skills rather than some stock photos', section2:'Work Process', work1:'IDEA', work2:'DESIGN', work3:'DEVELOPMENT', work4:'TEST', work5:'LAUNCH'});
});
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Portfolio', profession:'Here is the list of projects I have done in Past' });
});
router.get('/contact-me', function(req, res, next) {
    res.render('contact-me', { title: 'Contact Me',  tagline:'The best way to contact me is to  fill out this simple form',subtitle1:'Contact info', subtitle2:"Let's Get Socialize", subtitle3:'Leave me a message',address:'1 Georgian Dr, Barrie, ON L4M 3X9  ', email:'rajvinder.yogi@yahoo.com', tel:'+1 (780) 781 3197', infomsg:'Field with asterisk (*) are must filled.', button:'Send Message' });
});

module.exports = router;
