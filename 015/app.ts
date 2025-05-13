// //Interface: Describes the structure of a object

// // interface Person {
// //   //Define what the "person" objet looks like
// //   //field definitions of the values (properities)
// //   //We don't have "concrete" values e.g name = 'name'
// //   name: string;
// //   age: number;

// //   //with functions we don't define the values, just the structure
// //   //fn name :: params :: return type;
// //   greet(phrase: string): void;
// // }

// //
// interface Greetable {
//   name: string;
//   greet(phrase: string): void;
// }
// //implementing a interface requires the
// //implements keyword
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

// //Using the interface as a type
// let user1: Greetable;

// // user1 = {
// //   name: "Chris",
// //   age: 50,
// //   greet(phrase: string) {
// //     //note that "this" points to this object therefore the this.name works
// //     console.log(`${phrase} ${this.name}`);
// //   },
// // };
// user1 = new Person("Chris");

// user1.greet("Hi there I am");

// //The interface allows us to define a structure of a object.
// // So why do we need interfaces vers casses?
// // inerfaces and custom types are not the same
// // Differences: Interfaes can only be used to define the structure of an object.
// // Inside of a custom type you can other special things as well, E.g Union Types
// // There by making types more flexible. Interfaces are "clearer"
// // When something is defined with a interface, it is very clear what the structure is
// // Interfaces can also be implemented in a class.
// // The reason that you work with a interface is that it can be used in a class, and thereby
// // the class must adhear to the structure of the interface
// // there fore interfaces are used to share functionality amongst different classes
// // and not be concrete with their implementations.

// // A interface has no implementation details, where as abstract classes requires
// // a mixture of you have to overwrite given parts, and then there are concrete parts.

// //Why interfaces? Why is it helpful?
// // The interface is handy because in a situition where a system grows, and we
// // see children classes being created, we ensure that the parent of those children,
// // which comes from the interface, continues to have the base requirements from the
// // interface, there by ensuring compliance E.G a proprty feeds into a function to set a config
// // value, but it requires the property be set on init. With out the prop, it breaks.
