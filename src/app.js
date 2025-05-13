"use strict";
var Department = /** @class */ (function () {
  // function tied to class that is executed
  // on objection initilization
  function Department(n) {
    this.name = n;
  }
  return Department;
})();
var accounting = new Department("Accounting");
console.log(accounting);
// output:: Department {name: "Accounting"}
