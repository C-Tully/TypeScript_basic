// class Department {
//   //optional default init
//   // name: string = 'DEFAULT';
//   name: string;

//   // function tied to class that is executed
//   // on objection initilization
//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     //method body is required.
//     //Note that when using this.name points to the class object, not "This" function
//     //This points to the "Concrete instance" of this object
//     console.log("Department: " + this.name);
//   }
//   //adding a function to this class object is done as
// }

// const accounting = new Department("Accounting");

// // console.log(accounting);
// // output:: Department {name: "Accounting"}

// //this line describes adding a function to a given class
// //object and then using it.
// accounting.describe();

// const accountingCopy = { name: "Chris", describe: accounting.describe };
// //At run time this comes out as undefined
// accountingCopy.describe();
// //the reason for this is that this function on the copy is a pointer
// //to the accounting object, and not pointing at the accounting object. The This
// //is there by pointing at the accountingCopy, which was not initilized with a name

// //By adding "this" to the describe function (within the object) and giving it a type of the
// // same class, you can then tell type script that "this" will refer to a instance that's
// //based on the objects class. So an object in the end that would of type department
// // This creates a bug on the accountingCopy.describe() as it is not a instance of the
// // Department obect.  By adding the type check for this, we are there for adding an
// // additional layer of security when developing. By adding a "name" property of the
// //copy, the describe will work
