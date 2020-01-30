import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennelaComponent } from './chennela.component';

describe('ChennelaComponent', () => {
  let component: ChennelaComponent;
  let fixture: ComponentFixture<ChennelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
