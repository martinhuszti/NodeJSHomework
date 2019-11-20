var expect = require('chai').expect;
var registerUser = require('../../../middleware/user/RegisterUser');

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

            registerUser({
                userModel: fakeUserModel
            })({}, {}, function (err) {
                expect(nehivd).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

        it('no password parameter is given', function (done) {
            var req = {
                body: {
                    username: 'lorem@ipsum.com'
                }
            };
            var nehivd = false;

            var fakeUserModel = {
                findOne: function (some, cb) {
                    nehivd = true;
                    cb();
                }
            };

            registerUser({
                userModel: fakeUserModel
            })(req, {}, function (err) {
                expect(nehivd).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

        it('no username  parameter is given', function (done) {
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

            registerUser({
                userModel: fakeUserModel
            })(req, {}, function (err) {
                expect(nehivd).to.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
        });

    });

    it('should register new user if everything is ok', function (done) {
        var req = {
            body: {
                password: 'boo',
                username: 'valami@at.hu'
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

        registerUser({
            userModel: fakeUserModel
        })(req, res, function (err) {
            expect(true).to.eql(false);
            done();
        });
    });

    it('should return error when username is less then 2 characters', function (done) {
        var req = {
            body: {
                password: 'boo',
                username: 'bo'
            }
        };

        var res = {
            data: {
                error: []
            }
        };

        var fakeUserModel = function () {
        };

        fakeUserModel.findOne = function (some, cb) {
            return cb(undefined, null);
        };

        registerUser({
            userModel: fakeUserModel
        })(req, res, function (err) {
            expect(res.data.error.length).to.be.above(0);
            expect(err).to.eql(undefined);
            done();
        });
    });

    it('should return error when db returns error', function (done) {
        var req = {
            body: {
                password: 'boo',
                username: 'bo'
            }
        };

        var res = {
            data: {
                error: []
            }
        };

        var fakeUserModel = function () {
        };

        fakeUserModel.findOne = function (some, cb) {
            return cb(undefined, true);
        };

        registerUser({
            userModel: fakeUserModel
        })(req, res, function (err) {
            expect(res.data.error.length).to.be.above(0);
            expect(err).to.eql(undefined);
            done();
        });
    });
});
