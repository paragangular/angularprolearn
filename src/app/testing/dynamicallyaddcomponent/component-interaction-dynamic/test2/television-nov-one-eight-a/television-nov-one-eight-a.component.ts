import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-television-nov-one-eight-a',
  template: `
    <div>
      Watching TV<br/>
      <ng-container #currentchennel></ng-container><br/>
      <div *ngFor='let cnl of localChennels'>
      <button (click)='changechennel($event)'  attr.chennel='{{cnl}}'>chennel-a</button>
      </div>

      

    </div>
  `,
  styles: []
})
export class TelevisionNovOneEightAComponent implements OnInit {

  private localChennels = new Array();

  constructor() { }

  ngOnInit() {
    this.localChennels.push('a');
    this.localChennels.push('b');
    this.localChennels.push('c');
    console.log(' this.localChennels ',this.localChennels)
  }

  changechennel($event){
    var target = $event.target;
    //var target = $event.srcElement;
    //var target = $event.currentTarget;
    console.log(target.attributes.chennel.nodeValue);
  }

}
