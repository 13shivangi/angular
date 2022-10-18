import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {
  public users:any = [];
  public webApiData : any = {};
  public integrationApiData:any = {};
  public ShowDetails(){
     var request = this.http.get("http://jsonplaceholder.typicode.com/users").toPromise();
     request.then((data)=> this.users = data);
  }

  public AccessWebApi(){
    var request = this.http.get("https://localhost:7215/allnames").toPromise();
    request.then((data)=> this.webApiData = data);
 }

 public IntegrationApi(){
  var request = this.http.get("https://localhost:7201/all").toPromise();
  request.then((data)=> this.integrationApiData = data);
}


  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
