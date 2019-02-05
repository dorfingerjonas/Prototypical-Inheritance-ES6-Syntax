const Person = require('./person');

class Teacher extends Person {
    constructor(firstname, lastname, gender, hobbies, subject) {
        super(firstname, lastname, gender, hobbies);
        this.subject = subject;
    }
    sayHello() {
        if (this.gender == 'male') {
            console.log('Hello. My name is Mr. ' + this.name.last + ' and I teach ' + this.subject);
        } else {
            console.log('Hello. My name is Mrs. ' + this.name.last + ' and I teach ' + this.subject + ' .');
        }
    }
}

module.exports = Teacher;