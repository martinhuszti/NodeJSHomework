/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * If the user is logged in, redirects to /dashboard
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.session.userid !== 'undefined') {
            return res.redirect('/');
        }
        return next();
    };
};
