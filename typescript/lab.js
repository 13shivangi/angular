var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.works = function () {
        var tasks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tasks[_i] = arguments[_i];
        }
        console.log(this.name + " with emplyee Id : " + this.EmpId + " and email as : " + this.Email + " works on the following tasks ");
        for (var i = 0; i < tasks.length; i++) {
            console.log(tasks[i]);
        }
    };
    employee.prototype.LeaveOff = function (days) {
        console.log(this.name + " designated as : " + this.designation + " , takes " + days + " days of leave ");
    };
    employee.prototype.AssignIncrement = function (salary) {
        this.Salary = salary;
    };
    employee.prototype.ShowSalary = function (Income) {
        this.Salary = Income;
        console.log(Income);
    };
    return employee;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.PrintIncrement = function () {
        console.log(this.name + " has a salary of :" + this.Salary + " has received a total increment of :");
        if (this.Salary > 100000) {
            console.log("INR 10000");
        }
        else {
            console.log("INR 3000");
        }
    };
    Admin.prototype.AssignWork = function () {
        var project = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            project[_i] = arguments[_i];
        }
        console.log(this.name + " has assigned the following project :");
        for (var j = 0; j < project.length; j++) {
            console.log(project[j]);
        }
    };
    return Admin;
}(employee));
var manager = new Admin();
manager.name = "Swati";
manager.EmpId = 45324;
manager.designation = "associate consultant";
manager.Email = "cfdcrs@kpmg.com";
manager.works("testing", "audit");
manager.LeaveOff(3);
manager.AssignIncrement(25000);
manager.PrintIncrement();
manager.AssignWork("deployment");
var auditer = new Admin();
auditer.name = "Shamitha";
auditer.EmpId = 45876;
auditer.designation = "consultant";
auditer.Email = "abcd@kpmg.com";
auditer.works("development", "tax", "training");
auditer.LeaveOff(8);
auditer.AssignIncrement(250000);
auditer.PrintIncrement();
auditer.AssignWork("advisory", "testing", "marketing");
var shivangi = new employee();
shivangi.name = "shivangi verma";
shivangi.EmpId = 11111;
shivangi.designation = "analyst";
shivangi.Email = "shivi.2000@gmail.com";
shivangi.works("project 1", "project 2");
shivangi.LeaveOff(5);
shivangi.ShowSalary(26000);
// shivangi.AssignIncrement(300000);
var padmaja = new employee();
padmaja.name = "padmaja manikandan";
padmaja.EmpId = 115681;
padmaja.designation = "analyst";
padmaja.Email = "paddy@gmail.com";
padmaja.works("QA", "tax-tech");
padmaja.LeaveOff(10);
padmaja.ShowSalary(400000);
// padmaja.AssignIncrement(400000);
