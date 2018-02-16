let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home page', name: 'Rajvinder Singh Yogi', profession:'I am Web Developer and this is my portfolio in Node JS' });
});

module.exports = router;
