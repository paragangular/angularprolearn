import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDepartmentComponent } from './router-department.component';

describe('RouterDepartmentComponent', () => {
  let component: RouterDepartmentComponent;
  let fixture: ComponentFixture<RouterDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
