import { Component } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  response: any;

  constructor(private customSvc: CustomServiceService) {
    console.log("in home calling get data");
    this.customSvc.getData().subscribe(result => {
      console.log("success: " + result);
      this.response = result;
    }, error => {
      console.log("error: " + error);
      this.response = error;
    });
    console.log("in home get data called...");
    console.log("response: " + this.response);
  }

}
