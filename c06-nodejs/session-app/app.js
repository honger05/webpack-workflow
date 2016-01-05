
var express = require('express');
var user = require('./user');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');

var app = express();

app.use(session({
  secret: 'hkApp',
  cookie: {maxAge: 60 * 1000 * 30},
  resave: true,
  saveUninitialized: false
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', function(req, res) {
  if (req.session.sign) {
    console.log(req.session);
    res.render('sign', {session: req.session});
  } else {
    res.render('index', {title: 'index'})
  }
})

app.post('/sign', function(req, res) {
  if (!user[req.body.user] || req.body.password != user[req.body.user].password) {
    console.log(req.body);
    res.end('sign failure');
  } else {
    req.session.sign = true;
    req.session.name = user[req.body.user].name;
    res.send('welcome <strong>'+ req.session.name +'</strong>, <a href="/out">logout</a>')
  }
})

app.get('/out', function(req, res) {
  req.session.destroy();
  res.redirect('/');
})

app.listen(8080, function() {
  console.log('app is listening on 8080');
})
