//Class inheritance example

// class Department {
//   private employees: string[] = [];

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

// //This class is meant to demo inhertiance for class
// // this is done with the "extends" key word.
// // *You can only inherit from one class, not multiple

// class ITDepartment extends Department {
//   // admins: string[];

//   //this will override the default constructor
//   // constructor(id: string, public admins: string[]) { correct way, as it uses the public variable
//   //in the constructor, which makes it a property of the class object.
//   //longer route
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     //The override is done with the "super();" call
//     // this passes the expected values up the chain to the inherited class
//     super(id, "IT"); //must be first?
//     this.admins = admins; //this point of this line is to illustrate that the super call MUST come first
//   }
// }

// const it = new ITDepartment("d1", ["Christopher"]);

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, "IT");
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }
// // const it = new Department("001", "it");
// it.addEmployee("Chris");
// it.addEmployee("Joseph");

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it); //this will show the same structure as the deparment object.

// const account = new AccountingDepartment("d2", []);
// account.addReport("Somethingwent wrong...");
// account.printReports();
