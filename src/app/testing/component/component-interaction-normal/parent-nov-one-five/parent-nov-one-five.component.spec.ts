import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNovOneFiveComponent } from './parent-nov-one-five.component';

describe('ParentNovOneFiveComponent', () => {
  let component: ParentNovOneFiveComponent;
  let fixture: ComponentFixture<ParentNovOneFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentNovOneFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNovOneFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
