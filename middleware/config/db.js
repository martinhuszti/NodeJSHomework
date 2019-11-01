const mongoose = require('mongoose');
const connection_string = require('./urlstring');

mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;