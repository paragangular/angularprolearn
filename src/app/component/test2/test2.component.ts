import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  public test2Message1: string;
  public test2Message2: string;
  public test2Message3: string;
  public redt = 'redtext';
  public bluet = 'bluetext';
  public isDisabled = false;

  constructor() {
    this.test2Message1 = 'Test-2-Message-1-ABC';
    this.test2Message2 = 'Test-2-Message-2-ABC';
    this.test2Message3 = 'Test-2-Message-3-ABC';
  }

  ngOnInit() {
    this.test2Message1 = 'Test-2-Message-1-EFG';
    this.test2Message2 = 'Test-2-Message-2-EFG';
    this.test2Message3 = 'Test-2-Message-3-EFG';
  }

}
