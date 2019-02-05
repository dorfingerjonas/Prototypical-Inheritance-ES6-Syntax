class Person {

    constructor(firstName, lastName, gender, hobbies) {
        this.name = {
            first: firstName,
            last: lastName
        };
        this.gender = gender;
        this.hobbies = hobbies;
    }

    sayHello() {
        console.log("Hello. My name is " + this.name.first + " " + this.name.last);
    }

    tellHobbies() {
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
    }
}
module.exports = Person;