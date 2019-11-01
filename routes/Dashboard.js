/**
 * Created by Martin Huszti on 2019. 10. 20.
 */

let authMW = require('../middleware/generic/Auth');
let getItemListMW = require('../middleware/item/GetItemList');
let renderMW = require('../middleware/generic/Render');
let archiveItemMW = require('../middleware/item/ArchiveItem');
let deleteItemMW = require('../middleware/item/DeleteItem');
let getItemMW = require('../middleware/item/GetItem');
let mainRedirectMW = require('../middleware/generic/MainRedirect');


module.exports = function (app) {

    var objectRepository = {};

    /** List all items */
    app.get('/dashboard',
        authMW(objectRepository),
        getItemListMW(objectRepository),
        renderMW(objectRepository, 'dashboard')
    );

    /** Archive shopping item */
    app.post('/dashboard/:itemid/archive',
        authMW(objectRepository),
        getItemMW(objectRepository),
        archiveItemMW(objectRepository, true),
        mainRedirectMW()
    );

    /** UnArchive shopping item */
    app.post('/dashboard/:itemid/unarchive',
        authMW(objectRepository),
        getItemMW(objectRepository),
        archiveItemMW(objectRepository, false),
        mainRedirectMW()
    );

    /** Delete shopping item */
    app.delete('/inventory/:itemid/delete',
        authMW(objectRepository),
        getItemMW(objectRepository),
        deleteItemMW(objectRepository),
        renderMW(objectRepository, 'dashboard')
    );
};
