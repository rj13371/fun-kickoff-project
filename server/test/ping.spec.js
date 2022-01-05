var expect = require('chai').expect;
var request = require('request');


describe("profile GET route", function () {

  var url = "http://localhost:3001/profiles/profiles"

  it("returns status 200", function () {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

});

describe("ping for logout post request", function () {

  var url = "http://localhost:3001/auth/logout/"

  it("returns status 200", function () {
    request.post(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
});