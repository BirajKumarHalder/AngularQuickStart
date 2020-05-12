import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  private userName: string;

  getUserName(): string {
    console.log("returning username: " + this.userName);
    return this.userName;
  }

  setUserName(userName: string): void {
    console.log("setting username: " + userName)
    this.userName = userName;
  }

}
