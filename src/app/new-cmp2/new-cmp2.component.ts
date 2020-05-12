import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-new-cmp2',
  templateUrl: './new-cmp2.component.html',
  styleUrls: ['./new-cmp2.component.css']
})
export class NewCmp2Component implements OnInit {

  userName: string;

  constructor(private customSvc: CustomServiceService) { }

  ngOnInit() {
    this.userName = this.customSvc.getUserName();
  }

}
