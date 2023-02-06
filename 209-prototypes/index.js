"use strict";
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
const jonas = new Person("Jonas", 1991);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
