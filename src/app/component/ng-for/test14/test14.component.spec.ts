import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test14Component } from './test14.component';

describe('Test14Component', () => {
  let component: Test14Component;
  let fixture: ComponentFixture<Test14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
