import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelCNovOneEightAComponent } from './chennel-c-nov-one-eight-a.component';

describe('ChennelCNovOneEightAComponent', () => {
  let component: ChennelCNovOneEightAComponent;
  let fixture: ComponentFixture<ChennelCNovOneEightAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelCNovOneEightAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelCNovOneEightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
