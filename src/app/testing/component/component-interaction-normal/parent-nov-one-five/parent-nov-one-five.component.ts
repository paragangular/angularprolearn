import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-nov-one-five',
  template: `
    <p>
      Parent-Component<br/>

      Data from Child : {{cdata}}<br/>
      Parent Data : <input type='number' [value]='mypdata'  ><br/>
      <button (click)='incrementParentData()'>Incrmet Parent Data</button>
      <button (click)='decrementParentData()'>Decrement Parent Data</button>
      <br/><br/><br/><br/>


      <app-child-nov-one-five [pdata]='mypdata' (cdataevent)='updateCData($event)' >
      </app-child-nov-one-five>
    </p>
  `,
  styles: []
})
export class ParentNovOneFiveComponent implements OnInit {

  public mypdata: number = 1111;
  public cdata: number;

  constructor() {
  }

  ngOnInit() {
  }

  incrementParentData(){
    this.mypdata++;
  }

  decrementParentData(){
    this.mypdata--;
  }

  updateCData($event){
    console.log('called')
    this.cdata = $event;
  }

}
