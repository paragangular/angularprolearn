import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test12',
  templateUrl: './test12.component.html',
  styleUrls: ['./test12.component.css']
})
export class Test12Component implements OnInit {

  public displayName1: boolean;
  public displayName2: boolean;
  public displayName3: boolean;
  public displayName4: boolean;

  constructor() {
    this.displayName1 = false;
    this.displayName2 = true;
    this.displayName3 = false;
    this.displayName4 = false;
   }

  ngOnInit() {
  }

  toogleDisplay3(){
    if(this.displayName3){
      this.displayName3 = false;
    }else{
      this.displayName3 = true;
    }
  }

  toogleDisplay4(){
    if(this.displayName4){
      this.displayName4 = false;
    }else{
      this.displayName4 = true;
    }
  }

}
