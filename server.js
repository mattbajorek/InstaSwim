// Dependencies
// ============
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');


// Our model controllers (rather than routes)
// var application_controller = require('./controllers/application_controller');
// var cats_controller = require('./controllers/cats_controller');
// var users_controller = require('./controllers/users_controller');
var index_controller = require('./controllers/index_controller');


// Express settings
// ================

// instantiate our app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', index_controller);
// app.use('/cats', cats_controller);
// app.use('/users', users_controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

module.exports = app;