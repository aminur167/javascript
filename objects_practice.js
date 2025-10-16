// object methods and 'this' keyword examples

const person = {
    firstName: "Aminur",
    lastName: "Islam",
    age: 22,
    hobbies: ["coding", "gaming", "reading"],

    fullName: function() {
        return this.firstName + " " + this.lastName;
    },

    greet: function() {
        console.log("Hi, I'm " + this.fullName() + " and I'm " + this.age);
    },

    addHobby: function(hobby) {
        this.hobbies.push(hobby);
    }
};

person.greet();
person.addHobby("traveling");
console.log("Hobbies:", person.hobbies);

// object destructuring
const { firstName, age, hobbies } = person;
console.log(firstName, age);

// spread operator with objects
const updatedPerson = { ...person, age: 23, city: "Dinajpur" };
console.log("Updated:", updatedPerson.city, updatedPerson.age);
