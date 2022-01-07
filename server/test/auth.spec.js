const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = 'localhost:3001';

chai.use(chaiHttp);

describe("Auth API testing Register, Login, get User info and logout routes", function () {

    const testEmail = `tester${Math.random().toFixed(3)}@gmail.com` // Generate random fake email to register new user
    const agent = chai.request.agent(app);

    it("creates a new user and returns a JWT token", async () => {
        const res = await agent.post('/auth/register').send({
            'username': `testuser${Math.random().toFixed(3)}`,
            'email': `${testEmail}`,
            'password': 'tester'
        });
        expect(agent).to.have.cookie('token');
    });

    it("logins successfully with token and email and pass", async () => {
        const res = await agent.post('/auth/login')
            .send({
                'email': `${testEmail}`,
                'password': 'tester'
            })
        expect(agent).to.have.cookie('token'); // keep checking to see if agent has token still between chaining requests
        expect(res).to.have.status(200)
    });

    it("loads user successfully", async () => {
        expect(agent).to.have.cookie('token');

        const res = await agent.get('/auth/user')
        expect(res).to.have.status(200)
    });

    it("logout removes the auth token", async () => {
        const res = await agent.post('/auth/logout')
        expect(agent).to.not.have.cookie('token'); // agent does NOT have the token anymore here
    });

    it("cannot register with already existing email", async () => {
        const res = await agent.post('/auth/register').send({
            'username': `testuser${Math.random().toFixed(3)}`,
            'email': `roland@gmail.com`,
            'password': 'tester'
        });
        expect(agent).to.not.have.cookie('token'); //agent should not have a token because the email already exists
    });

    it("fails login with incorrect password", async () => {
        const res = await agent.post('/auth/login')
            .send({
                'email': `${testEmail}`,
                'password': 'badpassword'
            })
        expect(res).to.have.status(401) //401 Bad password response here
    });

});

