/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

/**
 * Get all the items
 */
module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.data.items = [
            {
                id: 1,
                name: "Popcorn",
                quantity: "1",
                measure: "db",
                comment: "blablabla",
                isArchived: false
            },
            {
                id: 2,
                name: "Másik popcorn",
                quantity: "2",
                measure: "kg",
                comment: "comment 2",
                isArchived: false
            },
            {
                id: 3,
                name: "Hal",
                quantity: "4.5",
                measure: "kg",
                comment: "Szeretem a halat",
                isArchived: true
            },
        ];
        return next()
    };
};
