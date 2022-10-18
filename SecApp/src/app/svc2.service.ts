import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc2Service {

  public showTwitterNotification():string[]{
    return["New follower has requested",
    "Your tweet has been retweeted 50 times",
    "Your follower has tweeted for the first time"]

  }

  constructor() { }
}
