import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
 public personName:string = "";
 public searchItem:string = "";
 public ppl:any[]=["Meena","Eena","Deeka"];
  constructor() { }

  ngOnInit(): void {
  }

}
