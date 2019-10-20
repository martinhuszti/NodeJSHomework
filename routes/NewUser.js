/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let registerUserMW = require('../middleware/user/RegisterUser');
let renderMW = require('../middleware/generic/Render');


module.exports = function (app) {

    var objectRepository = {};

    /** Render new user form */
    app.get('/newuser',
        renderMW(objectRepository, 'newuser')
    );

    /** Register new user */
    app.post('/newuser',
        registerUserMW(objectRepository),
        function (req, res, next) {
            res.redirect('/login');
        });
};
