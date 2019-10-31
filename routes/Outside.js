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
    app.get('/',
        mainRedirectMW(objectRepository)
    );

    /** Login page */
    app.get('/login',
        inverseAuthMW(objectRepository),
        CheckUserMW(objectRepository),
        renderMW(objectRepository, 'login')
    );

    app.post('/login',
        inverseAuthMW(objectRepository),
        CheckUserMW(objectRepository),
        mainRedirectMW()
    );

    /** Logout */
    app.use('/logout',
        logoutMW(objectRepository),
        function (req, res, next) {
            res.redirect('/');
        }
    );

};
