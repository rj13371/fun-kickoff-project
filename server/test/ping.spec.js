var expect  = require('chai').expect;
var request = require('request');


describe("profile GET route", function() {

  var url = "http://localhost:3001/profiles/profiles"

  it("returns status 200", function() {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });

});