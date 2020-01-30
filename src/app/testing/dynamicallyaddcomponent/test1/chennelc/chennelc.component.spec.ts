import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelcComponent } from './chennelc.component';

describe('ChennelcComponent', () => {
  let component: ChennelcComponent;
  let fixture: ComponentFixture<ChennelcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
