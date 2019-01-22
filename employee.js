const Person = require("./person");

function Employee(vorname, nachname, department, salary) {
    this.department = department;
    this.salary= salary;
    this.vorname = vorname;
    this.nachname = nachname;
}

Employee.prototype = Person.prototype;

Person.prototype.getFullInfo = function () {
    return this.vorname + " " + this.nachname + ", " + this.department + ", " + this.salary;
};

module.exports = Employee;