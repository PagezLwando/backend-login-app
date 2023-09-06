var express = require('express');
var router = express.Router();
var routerRegister = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HyperionDev Assessment' });
});


/* GET register page. */
routerRegister.get('/', function(req, res, next) {
  console.log('Register is working');
  res.render('register', { title: 'HyperionDev Assessment' });
});
module.exports = router;
