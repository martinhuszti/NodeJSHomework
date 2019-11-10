var expect = require('chai').expect;
var getUserRegistrationMW = require('../../../middleware/user/RegisterUser');

describe('getUserRegistration middleware ', function () {

    describe('should call next when', function () {
        it('no post parameter is given', function (done) {
            var nehivd = false;

            var fakeUserModel = {
                findOne: function (some, cb) {
                    nehivd = true;
                    cb();
                }
            };

            getUserRegistrationMW({
                userModel: fakeUserModel
            })({}, {}, function (err) {
                expect(nehivd).to.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

        it('no password parameter is given', function (done) {
            var req = {
                body: {
                    name: 'mynamedsa'
                }
            };
            var nehivd = false;

            var fakeUserModel = {
                findOne: function (some, cb) {
                    nehivd = true;
                    cb();
                }
            };

            getUserRegistrationMW({
                userModel: fakeUserModel
            })(req, {}, function (err) {
                expect(nehivd).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

        it('no email parameter is given', function (done) {
            var req = {
                body: {
                    password: 'boo'
                }
            };
            var nehivd = false;

            var fakeUserModel = {
                findOne: function (some, cb) {
                    nehivd = true;
                    cb();
                }
            };

            getUserRegistrationMW({
                userModel: fakeUserModel
            })(req, {}, function (err) {
                expect(nehivd).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

    });

    it('should register new user if everything is ok', function (done) {
        var req = {
            body: {
                password: 'ewewewweew',
                username: 'ewewewew'
            }
        };

        var res = {
            redirect: function (to) {
                expect(to).to.eql('/login');
                done();
            }
        };


        var fakeUserModel = function () {
        };

        fakeUserModel.findOne = function (some, cb) {
            return cb(undefined, null);
        };

        fakeUserModel.prototype.save = function (cb) {
            return cb(undefined);
        };

        getUserRegistrationMW({
            userModel: fakeUserModel
        })(req, res, function (err) {
            expect(true).to.eql(false);
            done();
        });
    });

});
