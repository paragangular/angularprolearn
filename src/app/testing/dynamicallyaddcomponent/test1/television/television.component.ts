import { Component, OnInit, ViewContainerRef, TemplateRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ChennelaComponent } from '../chennela/chennela.component';
import { ChennelbComponent } from '../chennelb/chennelb.component';
import { ChennelcComponent } from '../chennelc/chennelc.component';

@Component({
  selector: 'app-television',
  template: `
    <div>
      television works!  <br/>
      Chennel:  <br/>
      <div #televisionchennel  ></div>  <br/>
      <button (click)='changeChennel("a")'>chennel-a</button>  <br/>
      <button (click)='changeChennel("b")'>chennel-b</button>  <br/>
      <button (click)='changeChennel("c")'>chennel-c</button>  <br/>
    </div>
  `,
  styles: []
})
export class TelevisionComponent implements OnInit {

  @ViewChild('televisionchennel',{read:ViewContainerRef, static:false}) viewContainer: ViewContainerRef;

  constructor(
    private viewResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    
  }

  changeChennel(chennelNo){
    console.log(' chennel : '+'chennel'+chennelNo);

    if(chennelNo=='a'){
      const chennela = this.viewResolver.resolveComponentFactory(ChennelaComponent);
      this.viewContainer.clear();
      this.viewContainer.createComponent(chennela);
    }else if(chennelNo=='b'){
      const chennelb = this.viewResolver.resolveComponentFactory(ChennelbComponent);
      this.viewContainer.clear();
      this.viewContainer.createComponent(chennelb);
    }else if(chennelNo=='c'){
      const chennelc = this.viewResolver.resolveComponentFactory(ChennelcComponent);
      this.viewContainer.clear();
      this.viewContainer.createComponent(chennelc);
    }else{
      const chennela = this.viewResolver.resolveComponentFactory(ChennelaComponent);
      this.viewContainer.clear();
      this.viewContainer.createComponent(chennela);
    }
  }

}
