import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test10',
  templateUrl: './test10.component.html',
  styleUrls: ['./test10.component.css']
})
export class Test10Component implements OnInit {

  public displayName: string;

  constructor() { }

  ngOnInit() {
  }

  showName(userName){
    console.log(userName);
    this.displayName = userName.value;
  }

}
