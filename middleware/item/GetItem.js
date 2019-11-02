/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Get one item and put it into res.data.task
 */
const {requireOption} = require("../requireOptions");
module.exports = function (objectrepository) {
    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        itemModel.findOne({
            _id: req.param('itemid')
        }).populate('_createdBy').exec(function (err, result) {
            if ((err) || (!result)) {
                return res.redirect('/dashboard');
            }

            res.data.item = result;
            return next();
        });
    };
};
