// //getters and setters

// class Department {
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {}

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

// const it = new ITDepartment("d1", ["Christopher"]);

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   //Getter: A property where you execute a function or method,
//   //when you retrieve a value that allows you to add more complex logic

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

// it.addEmployee("Chris");
// it.addEmployee("Joseph");

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

// // console.log(accounting.mostRecentReport); //this will access the getter :: throws error
// //this is the setter, and must be treated as a property
// // accounting.mostRecentReport = ''; this throws the error.
// accounting.mostRecentReport = "Year end Report";
// accounting.addReport("Somethingwent wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Christopher");
// accounting.addEmployee("Willa");
// accounting.printReports();
