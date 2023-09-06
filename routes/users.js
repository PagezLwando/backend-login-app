var express = require('express');
var router = express.Router();

const userRepository = require('../userRepository.js');

router.post('/register', async(req, res, next) => {
  console.log(req.body);
  const user = {username: req.body.username, password: req.body.password, email: req.body.email};
  if (req.body.username.length > 1 && req.body.username.length < 10) {
      await userRepository.saveUser(user);
      res.send('User registered successfully');
  } else {
    res.send('User not registered, Please try again...');
    if (req.body.username  > 1 && req.body.username.length < 10) {
      await userRepository.saveUser(user);
    }
  }
});

router.post('/login', async(req, res, next) => {
  console.log(req.body);
  const user = {username: req.body.username, password: req.body.password, email: req.body.email};
  await userRepository.saveUser(user);
  res.send('User logged in successfully');
});

module.exports = router;