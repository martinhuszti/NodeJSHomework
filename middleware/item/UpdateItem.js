/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

const {requireOption} = require("../requireOptions");
/**
 * Update / Creates new shopping item
 */
module.exports = function (objectrepository) {

    var itemModel = requireOption(objectrepository, 'itemModel');

    return function (req, res, next) {

        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.quantity === 'undefined') ||
            (typeof req.body.measure === 'undefined')
        ) {
            return next();
        }

        var item = undefined;
        if (typeof res.data.item !== 'undefined') {
            item = res.data.item;
        } else {
            item = new itemModel();
        }

        item.name = req.body.name;
        item.quantity = req.body.quantity;
        item.measure = req.body.measure;
        item.comment = req.body.comment;
        item.isArchived = false;

        item.save(function (err, result) {
            if (err) {
                return next(err);
            }
            return res.redirect('/dashboard');
        });
    };
};
