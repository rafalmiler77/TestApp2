var express = require('express');
const morgan = require('morgan');
require('dotenv').config();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var wpdata = require('./routes/wpdata');

var app = express();
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// app.use('/routes', index)
// app.get('/try', function (req, res) {
//   console.log('ping in try');
//   res.send('I am at try')
// });
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
app.use('/wpdata', wpdata);
// app.use('/', express.static('../client/build'));
// app.use(express.static(path.resolve(__dirname, '../client', 'build')));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
// });

// Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
app.disable('view cache');

// app.get('/', function (req, res) {
//   console.log('./')
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the ./!"}');
// });


module.exports = app;

console.log('PORT', process.env.PORT)

app.get('/proba', function (req, res) {
  console.log('proba')
  res.send('<h1>proba</h1>')
})
// Answer API requests.
app.get('/api', function (req, res) {
  console.log('*api')
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/try', function (request, response) {
  console.log('try')
  response.sendFile(path.resolve(__dirname, 'try', 'try.html'));
});
// Priority serve any static files.
// app.use(express.static(path.resolve(__dirname, '../client', 'build')));

app.get('*', function (request, response) {
  console.log('*')
  response.sendFile(path.resolve(__dirname, '../client/build', 'try.html'));
});

app.set('port', process.env.PORT || 53764);
var server = app.listen(app.get('port'), function () {
  console.log('--- Listening on port ' + app.get('port'));
});