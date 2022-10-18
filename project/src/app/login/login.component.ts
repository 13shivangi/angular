import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public name:string = "Admin";
    public password:string = "Nimda";
    public pplArray:any = [];
    public status:string="";

    public login(ct:any){
      this.pplArray.push({name:this.name, password:this.password});
      this.status = `user ${this.name} logged in!!`;
      ct.style="color:green; font-style:bold;background-color:yellow;margin-top: 20px; margin-right: 156px; font-style: italic; text-align: center;"
    }  
    
   
  constructor() { }

  ngOnInit(): void {
  }

}
