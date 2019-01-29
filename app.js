const Person = require("./person");
const Teacher = require("./teacher");
const Student = require("./student");

const p = new Person("Richard", "Roe", "male", ["reading"]);
const t = new Teacher("Jane", "Doe", "female", [], "programming");
const s = new Student("John", "Smith", "male", ["cooking", "swimming", "travelling"], "history");

p.sayHello();
p.tellHobbies();

console.log("");

t.sayHello();
t.tellHobbies();

console.log("");

s.sayHello();
s.tellHobbies();

