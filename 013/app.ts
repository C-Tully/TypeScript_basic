// // Singletons and Private constructors

// // Look up to Singleton pattern. It's goal is to insure you only have one instance of a given class
// // at a time.

// abstract class Department {
//   static fiscalYear = 2025;
//   protected employees: string[] = [];

//   constructor(protected readonly id: string, public name: string) {}

//   static createEmployee(name: string) {
//     return {
//       name: name,
//     };
//   }

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
//   //NoteL The purpose of this line is to help enforce the singleton pattern.
//   // the "instance" keyword here when declaring property here ensurs that
//   // when the "getInstance" checks
//   private static instance: AccountingDepartment;

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

//   // By adding the private to the constructor of a given class we are enforcing
//   // the enforcing that we use a static method to instanticate the class only once.
//   private constructor(id: string, private reports: string[]) {
//     super(id, "IT");
//     this.lastReport = reports[0];
//   }

//   // Note: Look at the code below, it is forcing a singleton pattern leveraging the
//   // instance property. If the proprty exists, the instance is already set, so return it
//   // else create a new class object (and because it's private it can only be done internally)
//   // and set it to the instance value, and then return the value.
//   static getInstance() {
//     if (AccountingDepartment.instance) {
//       return this.instance;
//     }
//     this.instance = new AccountingDepartment("d2", []);
//     return this.instance;
//   }

//   describe() {
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

// const employee1 = Department.createEmployee("Aries");
// console.log(employee1, Department.fiscalYear);

// const it = new ITDepartment("d1", ["Christopher"]);

// it.addEmployee("Chris");
// it.addEmployee("Joseph");

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it);

// // const accounting = new AccountingDepartment("d2", []);
// //By doing the instantiation in this manner, we are there by creating a
// // singleton object, that can be called X time(s) and will only ever receive
// // the same object.
// const accounting = AccountingDepartment.getInstance();

// accounting.mostRecentReport = "Year end Report";
// accounting.addReport("Somethingwent wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Christopher");
// accounting.addEmployee("Willa");
// accounting.describe();
