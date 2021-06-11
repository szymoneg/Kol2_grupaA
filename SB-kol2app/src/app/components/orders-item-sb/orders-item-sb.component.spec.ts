import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemSBComponent } from './orders-item-sb.component';

describe('OrdersItemSBComponent', () => {
  let component: OrdersItemSBComponent;
  let fixture: ComponentFixture<OrdersItemSBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemSBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemSBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
