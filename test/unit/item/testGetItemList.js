var expect = require('chai').expect;
var getItemListMW = require('../../../middleware/item/GetItemList');

describe('getUserList middleware ', function () {

    it('should return items', function (done) {
        var req = {};
        var res = {
            data: {}
        };
        var fakeItemModel = {
            find: function (some, cb) {
                return {
                    populate: function (some) {
                        return {
                            exec: function (some) {
                                some(undefined, ['this', 'correct'])
                            }
                        }
                    }
                }
            }
        };

        getItemListMW({
            itemModel: fakeItemModel
        })(req, res, function (err) {
            expect(res.data.items).to.eql(['this', 'correct']);
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        var fakeItemModel = {
            find: function (some, cb) {
                return {
                    populate: function (some) {
                        return {
                            exec: function (some) {
                                some("error", undefined)
                            }
                        }
                    }
                }
            }
        };

        getItemListMW({
            itemModel: fakeItemModel
        })({}, {}, function (err) {
            expect(err).to.not.eql(undefined);
            done();
        });
    });
});
