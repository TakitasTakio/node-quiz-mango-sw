var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test-1');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.get('/', function(req, res) {
    res.send('Hello World!')
});

app.get('/message/:theMessage', function(req, res) {
    var theMessage = req.params['theMessage'];
    res.send(theMessage);
});

app.get('/api/session/set/:name/:value',
    setSession);
app.get('/api/session/get/:name',
    getSession);
app.get('/api/session/get',
    getSessionAll);
app.get('/api/session/reset',
    resetSession);

function setSession(req, res) {
    var name = req.params['name'];
    var value = req.params['value'];
    req.session[name] = value;
    res.send(req.session);
}

function getSession(req, res) {
    var name = req.params['name'];
    var value = req.session[name];
    res.send(value);
}
function getSessionAll(req, res) {
    res.send(req.session);
}
function resetSession(req, res) {
    res.session.destroy();
    res.send(200);
}


var userService = require('./services/user.service.server');
userService(app);





app.listen(7000);
