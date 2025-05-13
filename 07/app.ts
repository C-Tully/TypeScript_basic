// class Department {
//   //readonly Values: adding the readonly value to the constructor ensures
//   //a value can't change

//   // private name: string; // name: string; is public

//   //Problem: this is public, and thus
//   //is exposed.
//   // employees: string[] = [];
//   //now its a private value thus preventing
//   //direct access to it
//   private employees: string[] = [];

//   //Instead of declaring each value E.G name at a time, if you declare the
//   //value and its expoure (access modifier) in the constructor, you can geget the same effect.

//   // constructor(n: string) {
//   //   this.name = n;
//   // }
//   //This nice change saves us some code as well.
//   constructor(private readonly id: string, public name: string) {
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}) : ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const accounting = new Department("001", "Accounting");
// accounting.addEmployee("Chris");
// accounting.addEmployee("Joseph");
// // accounting.employees[2] = 'Anna'; <-- this is bad it's a public property
// //accounting.name = 'JOHN' <-- accessing public property value
// accounting.printEmployeeInformation();
// accounting.describe();

// // const accountingCopy = { name: "Chris", describe: accounting.describe };
// // accountingCopy.describe();
