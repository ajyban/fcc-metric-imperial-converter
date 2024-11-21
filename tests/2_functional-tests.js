const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {

    test('GET request to /api/convert', function (done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '1L' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'L');
                done();
            })
    });
    test('GET request to /api/convert', function (done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '1L' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'L');
                done();
            })
    });
    test('GET request to /api/convert', function (done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '1L' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'L');
                done();
            })
    });
    test('GET request to /api/convert', function (done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '1L' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'L');
                done();
            })
    });
    test('GET request to /api/convert', function (done) {
        chai.request(server)
            .get('/api/convert')
            .query({ input: '1L' })
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.initNum, 1);
                assert.equal(res.body.initUnit, 'L');
                done();
            })
    });

});
