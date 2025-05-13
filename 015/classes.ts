// //A First Interfaces

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

//   private constructor(id: string, private reports: string[]) {
//     super(id, "IT");
//     this.lastReport = reports[0];
//   }

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

// const accounting = AccountingDepartment.getInstance();

// accounting.mostRecentReport = "Year end Report";
// accounting.addReport("Somethingwent wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Christopher");
// accounting.addEmployee("Willa");
// accounting.describe();
