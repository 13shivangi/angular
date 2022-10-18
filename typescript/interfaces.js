var KpmgEmp = /** @class */ (function () {
    function KpmgEmp() {
    }
    KpmgEmp.prototype.WorkHoursClause = function () {
        console.log("".concat(this.EmpName, " should work for 8hrs a day for 5 days a week"));
    };
    KpmgEmp.prototype.CheckInTimeClause = function () {
        console.log("".concat(this.EmpName, " should check in to the office by ").concat(this.ShiftStartTime));
    };
    return KpmgEmp;
}());
var shivangi = new KpmgEmp();
shivangi.EmpId = 125199;
shivangi.Designation = "analyst";
shivangi.EmpName = "shivangi";
shivangi.ShiftStartTime = "9 am";
shivangi.WorkHoursClause();
shivangi.CheckInTimeClause();
