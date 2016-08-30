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
    res.render('users/register');
  })

  .post(function(req, res) {
    console.log(req.body);

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is Required').notEmpty();
    req.checkBody('password2', 'Passwords must match').equals(req.body.password);

    var errors = req.validationErrors();

    if (errors) {
      console.log(errors);
      res.render('users/register', {
        errors: errors
      });
    } else {
      console.log('NO');
    }
  })

router.route('/login')

  .get(function(req, res) {
    res.render('users/login');
  })

  .post(function(req, res) {

  })

router.route('/logout')

module.exports = router;
