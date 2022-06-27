const fileName = () => {
  const theError = new Error("here I am");
  return /\\(\w+\.js):/.exec(theError.stack)[1];
};

/* eslint-env mocha */

const wish = require("wish");
const { Person, AnonymousPerson } = require("./person.js");

describe("tests run on the 'person.js' file:", () => {
  // setup test
  it("verifies the test file name", () => {
    wish(fileName() === "person_test.js");
  });
  // functional tests
  const personOne = new Person("tony");
  it("verifies that the displayed tigerified capitalized personOne's name is \"Tony, the tiger\"", () => {
    wish(personOne.name.capitalize().tigerify().display() === "Tony, the tiger");
  });
  const personTwo = new AnonymousPerson("tony");
  it("verifies that the displayed tigerified capitalized personTwo's name is \"\"", () => {
    wish(personTwo.name.capitalize().tigerify().display() === "");
  });
});
