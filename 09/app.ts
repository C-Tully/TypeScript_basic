//Overridding class functions and the protected property

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
//   constructor(id: string, private reports: string[]) {
//     super(id, "IT");
//   }

//   //This function is overridding the parent classes implementation
//   addEmploye(name: string) {
//     if (name === "Christopher") {
//       return;
//     }
//     //Here's the error, employees is a private value of it's original
//     //parent class (Department): therefore it is not accessibile in this way.
//     //to grant this access, and ensure it's not a proprty it can be accessed from the outside,
//     //we change the Department variable from private to protected, there by allowing
//     // access to the to extended classes from the base class, and not exposing it such as a public value.

//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
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

// const account = new AccountingDepartment("d2", []);
// account.addReport("Somethingwent wrong...");
// account.addEmployee("Christopher");
// account.addEmployee("Willa");
// account.printReports();
