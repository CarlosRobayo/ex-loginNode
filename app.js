var express = require('express');
var bodyParser = require('body-parser');
var User = require('./public/models/db').User;

var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/login', function (req, res) {
    User.find(function(err, doc){
        console.log(doc);
        res.render('login');
    });
});

app.post('/users', function (req, res) {
    var user = new User({email: req.body.email, password: req.body.password});
    user.save(function(){
        res.send('Datos Almacenados');
    });
});

app.listen(8080, function () {
    console.log('Esperando peticiones en el puerto 8080');
});