interface IEmpContract{
    WorkHoursClause();
    CheckInTimeClause();

}

class KpmgEmp implements IEmpContract{
    public EmpId:number;
    public EmpName:string;
    public Designation:string;
    public ShiftStartTime:string;

    WorkHoursClause(){
        console.log(`${this.EmpName} should work for 8hrs a day for 5 days a week`);
    }
    CheckInTimeClause(){
        console.log(`${this.EmpName} should check in to the office by ${this.ShiftStartTime}`);
    }
}

var shivangi = new KpmgEmp();
shivangi.EmpId = 125199;
shivangi.Designation = "analyst";
shivangi.EmpName = "shivangi";
shivangi.ShiftStartTime = "9 am";
shivangi.WorkHoursClause();
shivangi.CheckInTimeClause();