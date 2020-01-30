import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterUserComponent } from './router-user.component';

describe('RouterUserComponent', () => {
  let component: RouterUserComponent;
  let fixture: ComponentFixture<RouterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
