const test = require("tape");
const supertest = require("supertest");
const router = require("./router");

test("Test /getposts returns status 200.", t=> {
    supertest(router)
    .get("/getposts")
    .expect(200)
    .expect("content-type", "application/json")
    .end( (error, response) => {
        t.error(error);
        t.equal(response.text, JSON.stringify({}));
        t.end();
    });
});
