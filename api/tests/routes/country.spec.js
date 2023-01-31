const request = require("supertest");
const app = require("../../src/app");
const { expect } = require("chai");

describe("GET /dogs", () => {
  it("Should return all countries", async () => {
    const response = await request(app).get("/countries");
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.instanceof(Array);
  });

  it("Should return a specific country by name", async () => {
    const response = await request(app).get("/countries?name=argentina");
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.instanceof(Array);
    expect(response.body[0].name.toLowerCase()).to.contain("argentina");
  });

  it("Should return an error if the country is not found.", async () => {
    const response = await request(app).get("/dogs?name=sarasa");
    expect(response.statusCode).to.equal(404);
  });
});
