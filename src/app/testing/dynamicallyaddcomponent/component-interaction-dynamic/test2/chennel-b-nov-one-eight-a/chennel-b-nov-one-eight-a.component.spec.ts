import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelBNovOneEightAComponent } from './chennel-b-nov-one-eight-a.component';

describe('ChennelBNovOneEightAComponent', () => {
  let component: ChennelBNovOneEightAComponent;
  let fixture: ComponentFixture<ChennelBNovOneEightAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelBNovOneEightAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelBNovOneEightAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
