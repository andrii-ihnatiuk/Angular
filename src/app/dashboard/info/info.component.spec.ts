import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersService } from 'src/app/core/services/orders/orders.service';
import { Order } from 'src/app/shared/models/order.model';
import { Observable, of } from 'rxjs';

import { InfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ordersService = jasmine.createSpyObj(['ordersService']);
    // fixture = TestBed.createComponent(InfoComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component = new InfoComponent(ordersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set received data', () => {
    //* Given
    let orders = [
      { name: 'awfs', category: 'fgfd', price: 12 },
      { name: 'sdaf', category: 'gfds', price: 13 },
      { name: 'awfs', category: 'fgft', price: 10 }
    ];
    let observable: Observable<Order[]> = of(orders);
    ordersService.getAll = jasmine.createSpy().and.callFake(() => {
      return observable;
    });
    //* When
    component.getOrders();
    //* Then
    expect(component.rows).toEqual(orders);
  })
});
