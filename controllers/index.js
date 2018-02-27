let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page', logo:'RAJ YOGI', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer/Designer and this is my portfolio website.',button1: 'Learn More', button2: 'Contact Me', copyrightText:'Copyright ©  Rajvinder Yogi - 200353207' });
});
router.get('/about-me', function(req, res, next) {
    res.render('about-me', { title: 'About Me', logo:'RAJ YOGI', about :'I Design and Develop responsive web application, I am pursuing my Post Graduate diploma in Interactive Design Media - Web from Georgian College of applied Arts - Barrie. I love what I do.', button:'See My Work', copyrightText:'Copyright © Rajvinder Yogi - 200353207',  });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services', logo:'RAJ YOGI', service1: 'Web Designing', service1Body: 'I am specialized in web, device responsive, logo designing and design the layout of the content on a web medium.', service2: 'Web Development', service2Body: 'I am experienced in providing E-commerce Solutions & Shopping Carts, CMS, Social Media Integrations & Web Application Development.', service3: 'Analytics', service3Body: 'I am able to provide analysis and reporting of web data for purposes of understanding and optimizing web using conversion rate and traffic.', service4: 'Content Planning', service4Body: 'I have provided the audience target driven content in past with useful keywords according to need of the client while keeping the mission in mind. ',service5: 'SEO/SEM', service5Body: 'I am highly skilled in assisting to market the brand online and providing SEO, SEM, Google Adwords Campaign, Keyword Research & analysis, Pay-Per-Click.',service6: 'Photography', service6Body: 'I have helped clients in past to make their website look pretty using the real high quality pictures using my photography skills rather than some stock photos', section2:'Work Process', work1:'IDEA', work2:'DESIGN', work3:'DEVELOPMENT', work4:'TEST', work5:'LAUNCH', copyrightText:'Copyright © Rajvinder Yogi - 200353207'});
});
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Portfolio',logo:'RAJ YOGI', classicCar:'https://rajvinderyogi-assignment2-comp2084.azurewebsites.net/', classicarPicture:'/images/portfolio/ClassicCars.jpg', Project1Title:'Classic Cars' ,languageUsed:'ASP .Net', launch:'Click to Launch',cms:"http://rajyogi.azurewebsites.net/comp1006-assignment2/index.php", cmsPicture:'/images/portfolio/CMS.jpg', Project2Title:'CMS', languageUsed2:'Core PHP', languageUsed3:'HTML5/CSS3', languageUsed4:'Java Script', musicStore:'https://comp2084-raj-mvcmusicstore.azurewebsites.net/', musicStorePicture:'images/portfolio/MusicStore.jpg', Project3Title:'Music Store' , automoblox:'http://rajyogi.azurewebsites.net/projectAutomoblox/index.html', automobloxPicture:'images/portfolio/automoblox.jpg', Project4Title:'Automoblox' , rayban:'http://rajyogi.azurewebsites.net/comp1054-project2/index.html', raybanPicture:'images/portfolio/rayban.jpg', Project5Title:'Mike Assistant' ,talkingApp:'http://rajyogi.azurewebsites.net/comp2112-assignment2', TalkingAppPicture:'images/portfolio/Mike.jpg', Project6Title:'Shopping' , copyrightText:'Copyright © Rajvinder Yogi - 200353207' });
});
router.get('/contact-me', function(req, res, next) {
    res.render('contact-me', { title: 'Contact Me',  logo:'RAJ YOGI', tagline:'The best way to contact me is to  fill out this simple form',subtitle1:'Contact info', subtitle2:"Let's Socialize", subtitle3:'Leave me a message',address:'1 Georgian Dr, Barrie, ON L4M 3X9', addressLink:'https://www.google.ca/maps/place/Georgian+College/@44.4120866,-79.6713208,17z/data=!3m1!4b1!4m5!3m4!1s0x882aa3724576ca87:0x81218608e743d1c0!8m2!3d44.4120866!4d-79.6691321?dcr=0', email:'rajvinder.yogi@yahoo.com', emailLink:'mailto:rajvinder.yogi@yahoo.com',tel:'+1 (780) 781 3197', telLink:'tel:+1 780 781 3197', infomsg:'Field with asterisk (*) are must filled.', button:'Send Message', copyrightText:'Copyright © Rajvinder Yogi - 200353207'});
});



//Tried to make contact page working with node js but no success

// router.post('/contact-me', function (req, res) {
//     let mailOpts, smtpTrans;
//     smtpTrans = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 3000,
//         secure: true,
//         auth: {
//             user: 'rajvinderyogi@gmail.com',
//             pass: '27591mani'
//         }
//     });
//     mailOpts = {
//         from: req.body.name + ' &lt;' + req.body.email + '&gt;',
//         to: 'rajvinderyogi@gmail.com',
//         subject: 'New message from contact form Portfolio',
//         text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
//     };
//     smtpTrans.sendMail(mailOpts, function (error, response) {
//         if (error) {
//             res.render('contact-failure');
//         }
//         else {
//             res.render('contact-success');
//         }
//     });
// });
module.exports = router;
