import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;
  let http: HttpClient;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);

    service = new OrdersService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
