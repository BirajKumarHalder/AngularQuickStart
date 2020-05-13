import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('inputData') data: number;

  constructor() {
    //console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(`ngOnChanges - data is ${this.data}`);
    for (let key in changes) {
      //console.log(`${key} changed. Current: ${changes[key].currentValue}. Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    //console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    //console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    //console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    //console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    //console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy");
  }

}
