const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require("mongoose");
const User = require ('../models/User')
let expect = chai.expect;
let app = 'localhost:3001';

chai.use(chaiHttp);

describe("Auth API", function () {

    const testEmail = `tester${Math.random().toFixed(3)}@gmail.com`

    it("Run request", async () => {
      const agent = chai.request.agent(app);
      const res = await agent.post('/auth/register').send({
        'username': `testuser${Math.random().toFixed(3)}`,
        'email': `${testEmail}`,
        'password': 'tester'
    });
      expect(agent).to.have.cookie('token');
    });
  });

