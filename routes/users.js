var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    User = mongoose.model('User');
    passport  = require('passport');
    LocalStrategy = require('passport-local').Strategy;

router.route('/')

  // Redirect to login or user show if logged in
  .get(function(req, res) {
    res.send('users index');
  })

router.route('/:id')
  // User Show

router.route('/register')

  .get(function(req, res) {
    res.send('user register');
  })

router.route('/login')

  .get(function(req, res) {
    res.render('users/login');
  })

  .post(function(req, res) {

  })

router.route('/logout')

module.exports = router;
