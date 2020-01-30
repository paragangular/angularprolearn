import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  public  test1Message1: string;
  private test1Message2: string;

  constructor() { 
    this.test1Message1 = 'Test-1-Message-1-ABC';
    this.test1Message2 = 'Test-1-Message-2-ABC';
  }

  ngOnInit() {
    //this.test1Message1 = 'Test-1-Message-1-EFG';
    //this.test1Message2 = 'Test-1-Message-2-EFG';
  }

  getTest1Message2(){
    return this.test1Message2;
  }


}
