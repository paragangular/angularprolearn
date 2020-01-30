import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  public name: string;
  public window_location_href: string;

  constructor() {
    this.name = 'RED FLIX';
    this.window_location_href = window.location.href;
  }

  ngOnInit() {

  }

getGreetingMessage(){
  return 'Helo, '+this.name+', Welcome to Angular2+ Interpolation'
}


}
