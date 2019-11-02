var Schema = require('mongoose').Schema;
var db = require('../middleware/config/db');

var Item = db.model('Item', {
    name: String,
    quantity: Number,
    measure: String,
    comment: String,
    isArchived: Boolean,
    _createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Item;