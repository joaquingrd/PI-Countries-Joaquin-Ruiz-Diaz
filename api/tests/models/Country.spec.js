const { Country } = require("../../src/db");
const { expect } = require("chai");

describe("Model Country", () => {
  it("Should have correct model name", () => {
    expect(Country.getTableName()).to.equal("Countries");
  });

  it("Should have correct columns", () => {
    expect(Country.rawAttributes).to.have.property("id");
    expect(Country.rawAttributes).to.have.property("name");
  });

  it("Should have not-null constraints on required fields", () => {
    expect(Country.rawAttributes.id.allowNull).to.equal(false);
    expect(Country.rawAttributes.name.allowNull).to.equal(false);
  });
});
