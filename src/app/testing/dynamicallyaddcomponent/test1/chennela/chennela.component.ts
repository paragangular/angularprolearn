import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chennela',
  template: `
    <p>
      chennel-a works!  <br/>
      Data From Parent : {{data}}
    </p>
  `,
  styles: []
})
export class ChennelaComponent implements OnInit {

  @Input('parama') parama: string;
  data: string;
  constructor() { }

  ngOnInit() {
    this.data = this.parama;
  }

}
