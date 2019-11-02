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
        if (typeof req.body.username === 'undefined' ||
            req.body.username === ''
        ) return next();

        userModel.findOne({
            username: req.body.username
        }).exec(function (err, result) {
            if ((err) || (!result)) {
                res.data.error.push("Rossz username: " + req.body.username);
                return next()
            }
            res.data.user = result;
            return next();
        });
    };
};
