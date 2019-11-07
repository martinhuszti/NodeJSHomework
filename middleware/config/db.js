const mongoose = require('mongoose');

/**
 * Mongo Atlas URL in urlstring.js file
 * @type {string}
 */
//const connection_string = require('./urlstring');

const connection_string = "localhost:27017/OCUW5I";

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;
