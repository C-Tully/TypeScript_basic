// //refresher for types
// // type AddFn = (a: number, b: number) => number;
// //Instead of creating a type we instead use a interface,
// //which is a blueplate for a object, and in JS functions kinda
// //are just objects so.. this is a annonmous function and TS
// // uses this correctly and notes its a custom type alternative
// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// //

// interface Named {
//   readonly name: string;
// }

// interface Greetable extends Named {
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
// user1.greet("Hi there I am");
