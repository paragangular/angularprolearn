import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test9',
  templateUrl: './test9.component.html',
  styleUrls: ['./test9.component.css']
})
export class Test9Component implements OnInit {

  public greet2Message: string;
  public greet3Message: string;
  constructor() { }

  ngOnInit() {
  }

  greet1(){
    console.log('Gretting ..... !!');
  }
  greet2(){
    this.greet2Message = 'Gretting Message 2';
  }
  eventLog1(e){
    console.log(e);
  }
}
