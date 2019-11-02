/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Login a User if it's exist and email+password correct
 */
module.exports = function (objectrepository) {


    return function (req, res, next) {

        //not enough parameter
        if (req.body.password === 'undefined') return next();

        var user = res.data.user;
        if (user === 'undefined') {
            res.data.error = "Hiba";
            return next();
        }

        //check password
        if (req.body.password !== user.password) {
            return next();
        }


        //everything ok, save session
        req.session.userid = user._id;
        return res.redirect('/')
    };
};
