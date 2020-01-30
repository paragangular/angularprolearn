import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test15',
  templateUrl: './test15.component.html',
  styleUrls: ['./test15.component.css']
})
export class Test15Component implements OnInit {

  @Input('inputa')  public  a: number;
  @Input('inputb')  public  b: number;
  @Output() public sumEvent = new EventEmitter();
  public sum: number;

  constructor() {
    this.sum = 0;
   }

  ngOnInit() {
  }

  calculatesum(){
    var sum = 0;
    this.sum  = this.a + this.b;
    this.sumEvent.emit(this.sum);
    console.log(this.a, this.b, this.sum);
  }

}
