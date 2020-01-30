import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelbComponent } from './chennelb.component';

describe('ChennelbComponent', () => {
  let component: ChennelbComponent;
  let fixture: ComponentFixture<ChennelbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
