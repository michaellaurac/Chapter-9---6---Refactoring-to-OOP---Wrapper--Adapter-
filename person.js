class Person {
  constructor (name) {
    this.name = new NameString(name);
  }
};

class AnonymousPerson extends Person {
  constructor () {
    super();
    this.name = null;
  }
}

class NameString extends String {
  capitalize () {
    return new NameString(this[0].toUpperCase() + this.substring(1));
  };

  tigerify () {
    return new NameString(`${this}, the tiger`);
  };

  display () {
    return this.toString();
  };
}

module.exports = { Person, AnonymousPerson };
