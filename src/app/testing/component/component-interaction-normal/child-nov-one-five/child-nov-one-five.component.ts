import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-nov-one-five',
  template: `
    <div>
      Child-Component<br/>
      Data From Parent : {{pdata}} <br/>
      Child Data : <input type='number' [value]='ccount'> <br/>
      <button (click)='incrementChildData()'>Increment Child Data</button>
      <button (click)='decrementChildData()'>Decrement Child Data</button>
    </div>
  `,
  styles: []
})
export class ChildNovOneFiveComponent implements OnInit {

  @Input('pdata') pdata: number;
  @Output() cdataevent: EventEmitter<number> = new EventEmitter<number>();
  private ccount: number = 1;

  constructor() {
  }

  ngOnInit() {
    console.log(' pdata : '+this.pdata)
  }

  incrementChildData(){
    this.ccount++;
    this.cdataevent.emit(this.ccount);
  }

  decrementChildData(){
    this.ccount--;
    this.cdataevent.emit(this.ccount);
  }

}
