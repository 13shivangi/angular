import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightening',
  templateUrl: './lightening.component.html',
  styleUrls: ['./lightening.component.css']
})
export class LighteningComponent implements OnInit {
  public func1(mainDiv:any){
    mainDiv.style="background-color: black; color:white";
    mainDiv.innerText = "Do not disturb me !!";
  }
  public func2(mainDiv:any){
    mainDiv.style="background-color:yellow";
  }
  public func3(mainDiv:any){
    mainDiv.style="background-color:grey";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
