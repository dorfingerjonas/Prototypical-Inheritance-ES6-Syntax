function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;
}

Person.prototype.sayHello = function () {
  console.log("Hello. My name is " + this.name.first + " " + this.name.last);
};

Person.prototype.tellHobbies = function () {
    if (this.hobbies.length === 1) {
        console.log("My only hobby is " + this.hobbies + ".");

    } else if (this.hobbies.length === 0) {
        console.log("I have no hobbies.");

    } else if (this.hobbies.length > 1) {

        let output = "My hobbies are: \n";
        for (let i = 0; i < this.hobbies.length; i++) {
            output += "- " + this.hobbies[i] + "\n";
        }
        return console.log(output);
    }
};

module.exports = Person;