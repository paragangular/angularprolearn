import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionNovOneEightAComponent } from './television-nov-one-eight-a.component';

describe('TelevisionNovOneEightAComponent', () => {
  let component: TelevisionNovOneEightAComponent;
  let fixture: ComponentFixture<TelevisionNovOneEightAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelevisionNovOneEightAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionNovOneEightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
