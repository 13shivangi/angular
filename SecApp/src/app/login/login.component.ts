import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public name:string = "Shivi";
    public password:string = "Admin";
    public pplArray:any = [];
    public status:string="";

    public login(ct:any){
      this.pplArray.push({name:this.name, password:this.password});
      this.status = `user ${this.name} logged in!!`;
      ct.style="color:green; font-style:bold;background-color:yellow;"
    }  
    
    public Add(ctrl:any){
      this.pplArray.push({name:this.name, password:this.password});
      var lastIndex = this.pplArray.length-1;
      var lastItem = this.pplArray[lastIndex];
      this.status = `user ${lastItem.name} added!!`;
      ctrl.style="color:green;font-style:italic;"
    }
  constructor() {}

  ngOnInit(): void {
  }

}
