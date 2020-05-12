import { Component } from '@angular/core';
import { CustomServiceService } from './custom-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // declared variable
  title: string = 'Angular Application';
  // declared array
  months: string[] = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
  // declared booean
  isavailable: boolean = false;
  // declared generic type
  value: any = 10;
  //creating date
  todaydate = new Date();
  //creating json
  jsonval = { name: 'Biraj', skills: ["Java", "Spring", "Angular"] };

  clickFunction(event) {
    console.log("button clicked");
    this.value++;
  }
  changeFunction(event) {
    console.log(event.target.value);
  }

  //adding service
  constructor(private customSvc: CustomServiceService) { }
  ngOnInit() {
    this.customSvc.setUserName("Biraj");
  }

}
