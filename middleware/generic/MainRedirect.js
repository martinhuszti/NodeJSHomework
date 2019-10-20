/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Redirect the user from / to /login or /dashboard based on his signed in status
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        return next();
    };
};
