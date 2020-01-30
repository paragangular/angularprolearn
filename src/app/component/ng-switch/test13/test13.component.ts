import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test13',
  templateUrl: './test13.component.html',
  styleUrls: ['./test13.component.css']
})
export class Test13Component implements OnInit {

  public myColor: string;

  constructor() {
  }

  ngOnInit() {
  }

  getmyColor(){
    return this.myColor;
  }

  selectRed(){
    this.myColor = 'red';
  }
  selectGreen(){
    this.myColor = 'green';
  }
  selectBlue(){
    this.myColor = 'rblue';
  }

}
