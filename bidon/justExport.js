module.exports = class Handle extends Error {
  constructor(message) {
    super(message)
    this.name = 'Handle'
  }
  display() {
    console.log('Inside the handle class-------')
  }
}

// 'use strict';

// module.exports = class Person {
//    constructor(firstName, lastName) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//    }

//    display() {
//        console.log(this.firstName + " " + this.lastName);
//    }
// }