const expect = require('chai').expect;
const request = require('request');


describe("profile GET route", function () {

  const url = "http://localhost:3001/profiles/profiles"

  it("returns status 200", function () {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

});

describe("ping for logout post request", function () {

  const url = "http://localhost:3001/auth/logout/"

  it("returns status 200", function () {
    request.post(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
});