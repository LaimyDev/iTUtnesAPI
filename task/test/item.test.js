//test created using mocha \and chia

const expect = require('chai').expect;
const request = require('request');

describe('Status and Content', function() {
  describe('checking status of fetch request', function() {
    it('status', function(done) {
      request('http://localhost:5000/api/coldplay', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      })
    })

    it('content', function(done) {
      request('http://localhost:5000/api/coldplay', function(error, response, body) {
        expect(body).to.equal(response.body);
        done();
      })
    })
  })
})