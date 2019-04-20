import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummaaryComponent } from './ordersummaary.component';

describe('OrdersummaaryComponent', () => {
  let component: OrdersummaaryComponent;
  let fixture: ComponentFixture<OrdersummaaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersummaaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersummaaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
