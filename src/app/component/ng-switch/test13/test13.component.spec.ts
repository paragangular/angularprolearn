import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test13Component } from './test13.component';

describe('Test13Component', () => {
  let component: Test13Component;
  let fixture: ComponentFixture<Test13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
