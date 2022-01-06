const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");
const User = require ('../models/User')
const expect = chai.expect()
var app = 'localhost:3001';

chai.use(chaiHttp);



describe('Auth API', function() {
    //create random test email and user
    const testEmail = `tester${Math.random().toFixed(3)}@gmail.com`

    it('should Register user, login user, check token and return user info from the protected route', function(done) {
//chai agent can store our cookie accross requests
        var agent = chai.request.agent(app)
agent
  .post('/auth/register') //register new random user
  .send({
    'username': `testuser${Math.random().toFixed(3)}`,
    'email': `${testEmail}`,
    'password': 'tester'
})
  .then(function (res) {
    expect(res).to.have.cookie('token');
     agent.post('/auth/login') //login with token
    .send({
        'email': `${testEmail}`,
        'password': 'tester'
    })
      .then(function (res) {
         expect(res).to.have.status(200);
      })

  })
  .then(function (res) {
    expect(res).to.have.cookie('token');
     agent.post('/auth/user') //hit user route
      .then(function (res) {
         expect(res).to.have.status(200);
      })

  })
  .then(function (res) {
     agent.post('/auth/logout') //logout and erase cookie
      .then(function (res) {
         expect(res.body).to.have.status(200);
      })

  });
done();
    })
})

