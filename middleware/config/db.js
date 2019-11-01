var mongoose = require('mongoose');
const connection_string = require('./urlstring');

mongoose.connect(connection_string);

module.exports = mongoose;