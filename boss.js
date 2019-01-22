const Person = require("./person");

function Boss(vorname, nachname, numberOfCompanies, fortune) {
    this.numberOfCompanies = numberOfCompanies;
    this.fortune= fortune;
    this.vorname = vorname;
    this.nachname = nachname;
}

Employee.prototype = Person.prototype;

Person.prototype.getFullInfo = function () {
    return this.vorname + " " + this.nachname + ", " + this.numberOfCompanies + ", " + this.fortune;
};

module.exports = Boss;