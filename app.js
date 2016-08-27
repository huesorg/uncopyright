require('dotenv').config();

var express = require('express');
    path = require('path');
    favicon = require('serve-favicon');
    logger = require('morgan');
    cookieParser = require('cookie-parser');
    bodyParser = require('body-parser');
    sassMiddleware = require('node-sass-middleware');
    db = require('./models/db'),
    project = require('./models/projects');
    user = require('./models/users');
    user = require('./models/users');
    routes = require('./routes/index');
    users = require('./routes/users');
    projects = require('./routes/projects');
    app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// styles
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: false,
  debug: true
}));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);
app.use('/projects', projects);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
