import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNovOneFiveComponent } from './child-nov-one-five.component';

describe('ChildNovOneFiveComponent', () => {
  let component: ChildNovOneFiveComponent;
  let fixture: ComponentFixture<ChildNovOneFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNovOneFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNovOneFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
