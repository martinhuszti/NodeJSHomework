/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Archive/UnArchive the shopping item
 */
module.exports = function (objectrepository, archiveBool) {
    return function (req, res, next) {
        var item = res.data.item;
        item.isArchived = archiveBool;

        item.save(function (err, result) {
            if (err) {
                return next(err);
            }
            return res.redirect('/dashboard');
        });
    };
};
