/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Login a User if it's exist and email+password correct
 */
module.exports = function (objectrepository) {


    return function (req, res, next) {
        if (typeof res.data.user === 'undefined') return next();
        var user = res.data.user;
        if (user === undefined) {
            return next();
        }

        //check password
        if (req.body.password !== user.password) {
            res.data.error.push("Rossz jelszó");
            return next();
        }


        //everything ok, save session
        req.session.userid = user._id;
        return res.redirect('/dashboard')
    };
};
