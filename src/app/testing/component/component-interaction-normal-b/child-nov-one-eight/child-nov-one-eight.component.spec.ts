import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNovOneEightComponent } from './child-nov-one-eight.component';

describe('ChildNovOneEightComponent', () => {
  let component: ChildNovOneEightComponent;
  let fixture: ComponentFixture<ChildNovOneEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNovOneEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNovOneEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
