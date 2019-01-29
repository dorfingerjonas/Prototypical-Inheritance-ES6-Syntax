const Person = require('./person');

function Teacher(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies, subject);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.sayHello = function () {
    if (this.gender == 'male') {
        console.log('Hello. My name is Mr. ' + this.name.last + ' and I teach ' + this.subject);
    } else {
        console.log('Hello. My name is Mrs. ' + this.name.last + ' and I teach ' + this.subject + ' .');
    }
};

module.exports = Teacher;