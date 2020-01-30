import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test15Component } from './test15.component';

describe('Test15Component', () => {
  let component: Test15Component;
  let fixture: ComponentFixture<Test15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
