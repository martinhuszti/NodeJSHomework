var Schema = require('mongoose').Schema;
var db = require('../middleware/config/db');

var User = db.model('User', {
    username: String,
    password: String
});

module.exports = User;