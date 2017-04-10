var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/users');

var user_schema = new Schema({
    email : {type: String, required : 'Campo obligatorio'},
    password : {type: String, minlength : [8, 'password small']}
});

var User = mongoose.model('User', user_schema);

module.exports.User = User;