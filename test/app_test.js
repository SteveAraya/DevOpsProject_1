const assert  = require("assert");
const request = require("supertest");
const app     = require("../app");

describe("DevOpsProject", () => {

    it("Get /", done => {
        request(app)
            .get('/')
            .end((err, response) => {
                assert(response.body.mensaje === "El servicio es estable.");
                done();
            });
    });

    it("Get /User", done => {
        request(app)
            .get('/user')
            .end((err, response) => {
                assert(response.body.user['user'] === "saraya");
                done();
            });
    });

})