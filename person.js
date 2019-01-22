function Person(vorname, nachname) {
    this.vorname = vorname;
    this.nachname= nachname;
}

Person.prototype.getFullName = function () {
  return this.vorname + " " + this.nachname;
};

module.exports = Person;