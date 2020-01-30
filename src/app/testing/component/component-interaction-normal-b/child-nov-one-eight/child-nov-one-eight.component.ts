import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-nov-one-eight',
  template: `
    <p>
      Child Panel<br/>
      Data : <input type='number' [value]='localCdata'>
      <button (click)='increment()'>Increment</button>
      <button (click)='decrement()'>Decrement</button>
      <br/>
      Parenet Data : {{parentData}}
    </p>
  `,
  styles: []
})
export class ChildNovOneEightComponent implements  OnInit {

  @Input('pdata') public parentData: number;  
  @Output('cDataEvent') public cDataEvent : EventEmitter<number> = new EventEmitter<number>();
  private localCdata: number = 55;

  constructor() { }

  ngOnInit() {
    this.cDataEvent.emit(this.localCdata);
  }

  increment(){
    this.localCdata++;
    this.cDataEvent.emit(this.localCdata);
  }
  decrement(){
    this.localCdata--;
    this.cDataEvent.emit(this.localCdata);
  }
}
