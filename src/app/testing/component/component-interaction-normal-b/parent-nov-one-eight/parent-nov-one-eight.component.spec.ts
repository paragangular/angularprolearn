import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNovOneEightComponent } from './parent-nov-one-eight.component';

describe('ParentNovOneEightComponent', () => {
  let component: ParentNovOneEightComponent;
  let fixture: ComponentFixture<ParentNovOneEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentNovOneEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNovOneEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
