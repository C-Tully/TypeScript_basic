// //Inhertiance and combining interfaces via extends
// //this is not possible in classes, interfaces are able to inherit from multiple interfaces
// //as in the end their just being merged together and this is a TS feature and is not compiled to JS
// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   // class Person implements Greetable, Named {
//   name: string;
//   age = 30;

//   constructor(n: string) {
//     this.name = n;
//   }
//   greet(phrase: string) {
//     console.log(`${phrase} ${this.name}`);
//   }
// }

// let user1: Greetable;

// user1 = new Person("Chris");
// // user1.name = "john";
// user1.greet("Hi there I am");
