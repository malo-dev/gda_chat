const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../index')



chai.should()
chai.use(chaiHttp)
const expect = chai.expect

	describe(' POST /REGISTER', function () {
		
		it('you should do be signup', function (done) {
			chai.request(server).post("/api/auth/register")
				.send({
					username: "Leader",
					email: "leaeder@gmail.com",
					password: "12345678",
				})
				.end((err, res) => {
					expect(res).to.have.status(201);
					
					
				})
			done()
		});
		
	});
	