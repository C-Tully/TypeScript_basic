//  The goal of this is to demonstrate the impact of readonly and how the TSC alters error handling with it in mind.
// interface Greetable {
//   // type Greetable {
//   // name: string;
//   readonly name: string;
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
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
