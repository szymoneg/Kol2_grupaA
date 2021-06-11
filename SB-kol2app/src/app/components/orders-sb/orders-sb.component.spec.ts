import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSBComponent } from './orders-sb.component';

describe('OrdersSBComponent', () => {
  let component: OrdersSBComponent;
  let fixture: ComponentFixture<OrdersSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
