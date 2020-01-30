import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.css']
})
export class Test7Component implements OnInit {

  public textSuccessClass: string;
  public isTextDangerClass: boolean;

  public textClass = {
    'text-danger': !this.isTextDangerClass,
    'text-success': !this.isTextDangerClass,
    'text-warning': true,
    'text-special': true
  };

  constructor() { 
    this.textSuccessClass = 'text-success';
    this.isTextDangerClass = true;
  }

  ngOnInit() {
  }

}
