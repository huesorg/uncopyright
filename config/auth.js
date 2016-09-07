passport  = require('passport');
LocalStrategy = require('passport-local').Strategy;

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
