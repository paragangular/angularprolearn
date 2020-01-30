import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterCompanyComponent } from './router-company.component';

describe('RouterCompanyComponent', () => {
  let component: RouterCompanyComponent;
  let fixture: ComponentFixture<RouterCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
