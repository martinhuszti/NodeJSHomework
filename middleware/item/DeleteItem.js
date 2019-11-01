/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Delete the shopping item
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        var item = res.data.item;

        if (typeof item === 'undefined') {
            return next();
        }

        item.remove(function (err) {
            if (err) {
                return next(err);
            }

            //redirect to all tasks
            res.redirect('/dashboard');
        });

    };
};
