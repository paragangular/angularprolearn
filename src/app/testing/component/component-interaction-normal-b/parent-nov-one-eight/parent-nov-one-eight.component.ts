import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-nov-one-eight',
  template: `
    <p>
    Parent Panel<br/>
    Data : <input type='number' [value]='localPdata'/>
    <button (click)='increment()'>increment</button>
    <button (click)='decrement()'>decrement</button><br/>
    Child Data : {{childData}}

    <br/><br/><br/><br/>
    <app-child-nov-one-eight  (cDataEvent)='updateChildData($event)'    [pdata]='localPdata'></app-child-nov-one-eight>

    </p>
  `,
  styles: []
})
export class ParentNovOneEightComponent implements OnInit {

  private localPdata: number = 7777;
  public childData : number;

  constructor() { }

  ngOnInit() {
    
  }

  increment(){
    this.localPdata++;
  }
  decrement(){
    this.localPdata--;
  }

  updateChildData($event){
    this.childData=$event;
  }


}
