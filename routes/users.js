var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    User = require('../models/users');
    passport  = require('passport');
    LocalStrategy = require('passport-local').Strategy;

router.route('/')

  // Redirect to login or user show if logged in
  .get(function(req, res) {
    if (req.user) {
      res.redirect('/users/' + req.user.id)
    } else {
      res.redirect('users/login')
    }
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

passport.use(new LocalStrategy({
    usernameField: 'email'
  },

  function(email, password, done) {
    console.log('email: ' + email);
    console.log('password: ' + password);

    User.getUserByEmail(email, function(err, user){
      if (err) {
        console.log(err);
        throw err;
      }

      if(!user){
        console.log('unknown user');
        return done(null, false, {message: 'Unknown User'});
      }

      User.comparePassword(password, user.password, function(err, isMatch){
        if (err) throw err;
        if (isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Invalid Password'});
        }
      });
    });
  }
));

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.getUserById(id, function(err, user){
    done(err, user);
  });
});

router.get('/login', function(req, res) {
  res.render('users/login');
});


router.post('/login', function(req, res, next) {

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
});

// router.route('/logout')

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
