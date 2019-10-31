/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let mainRedirectMW = require('../middleware/generic/MainRedirect');
let inverseAuthMW = require('../middleware/generic/InverseAuth');
let CheckUserMW = require('../middleware/user/CheckUser');
let renderMW = require('../middleware/generic/Render');
let logoutMW = require('../middleware/generic/Logout');


module.exports = function (app) {

    let objectRepository = {
        userModel: "userModel"
    };

    /** Main page */
    app.use('/',
        mainRedirectMW(objectRepository)
    );

    /** Login page */
    app.use('/login',
        inverseAuthMW(objectRepository),
        CheckUserMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    /** Main page */
    app.use('/logout',
        logoutMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );

};
