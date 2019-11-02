/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

const {requireOption} = require("../requireOptions");
/**
 * Get user from DB
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        userModel.findOne({
            username: req.body.username
        }).exec(function (err, result) {
            if ((err) || (!result)) {
                res.data.error = "Wrong email or password";
                return res.redirect('/login');
            }
            res.data.user = result;
            return next();
        });
    };
};
