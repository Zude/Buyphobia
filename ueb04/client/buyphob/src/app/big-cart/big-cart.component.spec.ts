import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCartComponent } from './big-cart.component';

describe('BigCartComponent', () => {
  let component: BigCartComponent;
  let fixture: ComponentFixture<BigCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
