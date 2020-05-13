import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }


}
