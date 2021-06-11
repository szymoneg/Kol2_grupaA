import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsSBComponent } from './orders-details-sb.component';

describe('OrdersDetailsSBComponent', () => {
  let component: OrdersDetailsSBComponent;
  let fixture: ComponentFixture<OrdersDetailsSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsSBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
