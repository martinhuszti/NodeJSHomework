/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let mainRedirectMW = require('../middleware/generic/MainRedirect');
let inverseAuthMW = require('../middleware/generic/InverseAuth');
let CheckUserMW = require('../middleware/user/CheckUser');
let renderMW = require('../middleware/generic/Render');
let logoutMW = require('../middleware/generic/Logout');
let getUserMW = require('../middleware/user/GetUser');

var users = require('../models/user');


module.exports = function (app) {

    let objectRepository = {
        userModel: users
    };

    /** Main page */
    app.get('/',
        mainRedirectMW()
    );

    /** Login page */
    app.use('/login',
        inverseAuthMW(objectRepository),
        getUserMW(objectRepository),
        CheckUserMW(objectRepository),
        renderMW(objectRepository, "login")
    );

    /** Logout */
    app.use('/logout',
        logoutMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/login');
        }
    );


};
