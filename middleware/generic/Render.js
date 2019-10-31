/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Using the template engine render the values into the template
 */
module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.render(viewName);
    };
};
