import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {

  public name1: string;
  public name2: string;
  public name3: string;
  public name4: string;
  public isDisabled: boolean;

  constructor() {
    this.name1 = "FIRST NAME";
    this.name2 = 'SECONED NAME';
    this.name3 = 'THIRD NAME';
    this.name4 = 'FOURTH NAME';
    this.isDisabled = false;
   }

  ngOnInit() {
  }

}
