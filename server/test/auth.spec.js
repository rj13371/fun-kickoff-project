const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");
const User = require ('../models/User')
const should = chai.should();
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
    return agent.post('/auth/login')
    .send({
        'email': `${testEmail}`,
        'password': 'tester'
    })
      .then(function (res) {
          console.log(res)
         expect(res).to.have.status(404);
      })

  })
  .then(function (res) {
    expect(res).to.have.cookie('token');
    return agent.post('/auth/user')
      .then(function (res) {
         expect(res).to.have.status(200);
         agent.close()
      })

  });
done();
    })
})

