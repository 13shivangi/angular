import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  public pageName:string = "welcome page";
  public GreetMsg:string = "welcome to our exotic destination of angular apps";
 
  constructor() { }

  ngOnInit(): void {
  }

}
