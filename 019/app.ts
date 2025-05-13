// Optional Properities
//  This is accomplished via the ? on a given properity
//  By using this, a properity is deemed and optional
//  thus giving you more flexibility.

// When a "interface" is compiled to es5, you'll
// note there is no translation for interfaces, it is a
// pure TS feature. Mainly intended for a Dev perk

// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };
// //

// interface Named {
//   readonly name?: string;

//   //optional properities get the ? to it
//   outputName?: string;
// }

// interface Greetable extends Named {
//   greet(phrase: string): void;
// }

// class Person implements Greetable {
//   name?: string;
//   age = 30;

//   //Optional value in the constructor is allowed
//   // you must either give it a default value
//   //or the ? syntax.
//   constructor(n?: string) {
//     if (n) this.name = n;
//   }

//   greet(phrase: string) {
//     if (phrase) {
//       console.log(`${phrase} ${this.name}`);
//     } else {
//       console.log("Hi!");
//     }
//   }
// }

// let user1: Greetable;

// user1 = new Person();
// user1.greet("Hi there I am");
