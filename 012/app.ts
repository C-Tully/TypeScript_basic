// //Abstract classes

// //Inheritance
// // In the context of inheritance, we want to initially take note that the class "Department"
// // is the parent class to the other classes, via the "extends" keyword  because of this we can
// // now use the "describe" functionas well the properities from the parent with the children
// // We can also override those functions
// // To force a inherited classes function to be rewritten but the child we will need to set a empty
// // method in that parent ("base") class by adding the "abstract" keyword.
// //
// // Use case for this is when you want to enforce that all classes based on some other class,
// // share some common method or property, but allow the implementation of the child class to decide how to
// // implement that.
// //
// // Note: A class that has the abstract class can not be instantiated on it's own,
// // basically you're setting up a template class to be used by others.

// abstract class Department {
//   static fiscalYear = 2025;
//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {}

//   static createEmployee(name: string) {
//     return {
//       name: name,
//     };
//   }

//   //When declaring a function as abstract (see above) you must change the format of the
//   //functions declaration to the below
//   abstract describe(this: Department): void;

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
//   describe() {
//     console.log("IT Department - ID: " + this.id);
//   }
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found.");
//   }

//   set mostRecentReport(newReport: string) {
//     if (!newReport) {
//       throw new Error("Please pass in a valid value");
//     }
//     this.addReport(newReport);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, "IT");
//     this.lastReport = reports[0];
//   }

//   describe() {
//     //Note: This won't work when the parents property is private. therefore we adjust it to protected
//     console.log("Aocunting department - ID:  " + this.id);
//   }

//   addEmploye(name: string) {
//     if (name === "Christopher") {
//       return;
//     }

//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// //example of a static method
// const employee1 = Department.createEmployee("Aries");
// console.log(employee1, Department.fiscalYear); //should show {name:'Aries'} 2025

// //static property

// const it = new ITDepartment("d1", ["Christopher"]);

// it.addEmployee("Chris");
// it.addEmployee("Joseph");

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

// accounting.mostRecentReport = "Year end Report";
// accounting.addReport("Somethingwent wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Christopher");
// accounting.addEmployee("Willa");
// // accounting.printReports();
// // accounting.printEmployeeInformation();
// accounting.describe();
