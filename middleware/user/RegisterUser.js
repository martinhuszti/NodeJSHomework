/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

const {requireOption} = require("../requireOptions");
/**
 * Register a new User
 */
module.exports = function (objectrepository) {

    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if (
            (typeof req.body === 'undefined') ||
            (typeof req.body.username === 'undefined') ||
            (typeof req.body.password === 'undefined')
        ) {
            return next();
        }

        if (req.body.username.length < 3) {
            res.data.error.push('The username should be at least 3 characters!');
            return next();
        }

        userModel.findOne({
                username: req.body.username
            }, function (err, result) {
                if ((err) || (result !== null)) {
                    res.data.error.push('Your email address is already registered!');
                    return next();
                }


                let user = new userModel();

                user.username = req.body.username;
                user.password = req.body.password;

                user.save(function (err, result) {
                    if (err) {
                        return next(err);
                    }
                    return res.redirect('/login');
                });
            }
        );

    };
};
