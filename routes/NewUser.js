/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let registerUserMW = require('../middleware/user/RegisterUser');
let renderMW = require('../middleware/generic/Render');

var users = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        userModel: users
    };

    /** Render new user form */
    app.get('/newuser',
        renderMW(objectRepository, 'newuser')
    );

    /** Register new user */
    app.post('/newuser',
        registerUserMW(objectRepository)
    );
};
