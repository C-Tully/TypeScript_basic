// //Static methods and properities

// //:: Static properities and methods allow you to add properities
// // to class which are not accessed on an instance of the class
// // Often used for utility functions that you want to group or map to a class
// //logically, or global sonstants which you also wanna store in a class.

// //**Keep in mind: When you add a static method or property to a class
// // You can't access them from inside your non static parts
// // So if you feel like accessing the "fiscalYear" value in the constructor, and try to console.log(this.fiscalYear)
// // in the constructor, you can't! This includes functions as well,
// // Because all the value is a static member and the "this" refers to the
// // instance of the based on the class, and the value of "fiscalYear" is not accessible
// // due to the "static" nature of it in order to use it, you would need to directly
// //access the parent class's value ala console.log(Department.fiscalYear)

// //an example of a built in JavaScript is the MAth constructor class
// // Math.PI //A constant value
// // Math.pow()
// //Note that you don't have to call new Math.Pi, its a static value in JS

// class Department {
//   static fiscalYear = 2025;
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

//   static createEmployee(name: string) {
//     return {
//       name: name,
//     };
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

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
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
// accounting.printReports();
// accounting.printEmployeeInformation();
