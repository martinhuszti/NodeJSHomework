/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Login a User if it's exist and email+password correct
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {

        let result = {
            id: 123,
            email: "alma",
            password: "alma"
        };

        //not enough parameter
        if ((typeof req.body === 'undefined') || (typeof req.body.email === 'undefined') ||
            (typeof req.body.password === 'undefined')) {
            return next();
        }

        //check password
        if (result.password !== req.body.password) {
            return next();
        }

        //check email
        if (result.email !== req.body.email) {
            return next();
        }
        //everything ok, save session
        req.session.userid = result.id;
        return res.redirect('/')
    };
};
