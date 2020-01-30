import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelANovOneEightAComponent } from './chennel-a-nov-one-eight-a.component';

describe('ChennelANovOneEightAComponent', () => {
  let component: ChennelANovOneEightAComponent;
  let fixture: ComponentFixture<ChennelANovOneEightAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelANovOneEightAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelANovOneEightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
