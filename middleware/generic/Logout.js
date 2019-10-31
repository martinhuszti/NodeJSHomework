/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Log out the user
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        req.session.destroy(function (err) {
            return next();
        });
    };
};
