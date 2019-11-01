/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let authMW = require('../middleware/generic/Auth');
let updateItemtMW = require('../middleware/item/UpdateItem');
let renderMW = require('../middleware/generic/Render');

let items = require('../models/item');
let users = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        itemModel: items,
        userModel: users
    };
    /** Render new item form */
    app.get('/newitem',
        authMW(objectRepository),
        renderMW(objectRepository, 'newitem')
    );

    /** Creates/ update item */
    app.post('/newitem',
        authMW(objectRepository),
        updateItemtMW(objectRepository),
        function (req, res, next) {
            res.redirect('/dashboard');
        });
};
