import { Component, OnInit } from '@angular/core';
import { Svc2Service } from '../svc2.service';

@Component({
  selector: 'app-twitter-service',
  templateUrl: './twitter-service.component.html',
  styleUrls: ['./twitter-service.component.css']
})
export class TwitterServiceComponent implements OnInit {

  constructor(public myObj:Svc2Service) {}
  public PlugTwitter(){
    return this.myObj.showTwitterNotification();
  }


  ngOnInit(): void {
  }

}
