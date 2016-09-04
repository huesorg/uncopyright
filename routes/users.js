var express = require('express');
    router = express.Router();
    auth = require('../config/auth');
    mongoose = require('mongoose');
    User = require('../models/users');
    passport  = require('passport');

router.route('/')

  // Redirect to login or user show if logged in
  .get(function(req, res) {
    if (req.user) {
      res.redirect('/users/' + req.user.id)
    } else {
      res.redirect('users/login')
    }
  })


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

      var newUser = new User({
        username: username,
        email: email,
        password: password,
        createdAt: Date.now()
      });

      User.createUser(newUser, function(err, user){
        if (err) throw err;
        console.log(user);
      });

      // TODO: implement as flash message
      req.flash('User successfully created');

      res.redirect('login');
    }
  })


router.route('/login')

  .get(function(req, res) {
    res.render('users/login');
  })


  .post(function(req, res, next) {

    passport.authenticate('local', function(err, user, info) {
      if (err) {
        console.log(err);
        return next(err);
      }

      if (!user) {
        return res.redirect('/users/login');
      }

      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + user._id);
      });
    })(req, res, next);
  })


router.route('/logout')


router.route('/:id')

  .get(function(req, res) {
    if (req.user) {

      // TODO: fetch projects belonging to user
      res.render('users/show', {
        user: req.user
      });

    } else {
      res.redirect('users/login');
    }
  })
  

module.exports = router;
