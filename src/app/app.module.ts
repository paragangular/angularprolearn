import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Test1Component } from './component/test1/test1.component';
import { Test2Component } from './component/test2/test2.component';
import { Test4Component } from './component/interpolation/test4/test4.component';
import { Test5Component } from './component/property_binding/test5/test5.component';
import { Test7Component } from './component/class-binding/test7/test7.component';
import { Test9Component } from './component/event-binding/test9/test9.component';
import { Test10Component } from './component/template-reference-variable/test10/test10.component';
import { Test11Component } from './component/two-way-binding/test11/test11.component';
import { Test12Component } from './component/ng-directive/test12/test12.component';
import { Test13Component } from './component/ng-switch/test13/test13.component';
import { Test14Component } from './component/ng-for/test14/test14.component';
import { Test15Component } from './component/component-interaction/test15/test15.component';
import { RouterCompanyComponent } from './component/router/router-company/router-company.component';
import { RouterUserComponent } from './component/router/router-user/router-user.component';
import { RouterDepartmentComponent } from './component/router/router-department/router-department.component';
import { RouterHomeComponent } from './component/router/router-home/router-home.component';
import { TelevisionComponent } from './testing/dynamicallyaddcomponent/test1/television/television.component';
import { ChennelaComponent } from './testing/dynamicallyaddcomponent/test1/chennela/chennela.component';
import { ChennelbComponent } from './testing/dynamicallyaddcomponent/test1/chennelb/chennelb.component';
import { ChennelcComponent } from './testing/dynamicallyaddcomponent/test1/chennelc/chennelc.component';
import { ParentNovOneFiveComponent } from './testing/component/component-interaction-normal/parent-nov-one-five/parent-nov-one-five.component';
import { ChildNovOneFiveComponent } from './testing/component/component-interaction-normal/child-nov-one-five/child-nov-one-five.component';
import { ChildNovOneEightComponent } from './testing/component/component-interaction-normal-b/child-nov-one-eight/child-nov-one-eight.component';
import { ParentNovOneEightComponent } from './testing/component/component-interaction-normal-b/parent-nov-one-eight/parent-nov-one-eight.component';
import { TelevisionNovOneEightAComponent} from './testing/dynamicallyaddcomponent/component-interaction-dynamic/test2/television-nov-one-eight-a/television-nov-one-eight-a.component';
import { ChennelANovOneEightAComponent } from './testing/dynamicallyaddcomponent/component-interaction-dynamic/test2/chennel-a-nov-one-eight-a/chennel-a-nov-one-eight-a.component';
import { ChennelBNovOneEightAComponent } from './testing/dynamicallyaddcomponent/component-interaction-dynamic/test2/chennel-b-nov-one-eight-a/chennel-b-nov-one-eight-a.component';
import { ChennelCNovOneEightAComponent } from './testing/dynamicallyaddcomponent/component-interaction-dynamic/test2/chennel-c-nov-one-eight-a/chennel-c-nov-one-eight-a.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test4Component,
    Test5Component,
    Test7Component,
    Test9Component,
    Test10Component,
    Test11Component,
    Test12Component,
    Test13Component,
    Test14Component,
    Test15Component,
    RouterCompanyComponent,
    RouterUserComponent,
    RouterDepartmentComponent,
    RouterHomeComponent,
    TelevisionComponent,
    ChennelaComponent,
    ChennelbComponent,
    ChennelcComponent,
    ParentNovOneFiveComponent,
    ChildNovOneFiveComponent,
    ChildNovOneEightComponent,
    ParentNovOneEightComponent,
    TelevisionNovOneEightAComponent,
    ChennelANovOneEightAComponent,
    ChennelBNovOneEightAComponent,
    ChennelCNovOneEightAComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component:  RouterHomeComponent},
      { path: 'departments', component:  RouterDepartmentComponent},
      { path: 'users', component:  RouterUserComponent},
      { path: '**', component:  RouterCompanyComponent}
    ])
  ],
  providers: [],
  entryComponents: [
    ChennelaComponent,
    ChennelbComponent,
    ChennelcComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
