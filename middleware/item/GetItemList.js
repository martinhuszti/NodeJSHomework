/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

const {requireOption} = require("../requireOptions");
/**
 * Get all the items
 */
module.exports = function (objectrepository) {
    const itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        itemModel.find({}).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting tasks'));
            }

            res.data.items = results;
            return next();
        });
    };
};
