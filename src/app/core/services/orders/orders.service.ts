import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://pnitfunctions.azurewebsites.net/api/GetOrders'
    ).pipe(
      map((response: any) =>
        response.map((order: Order) => new Order(order.name, order.category, order.price)))
    );
  }
}
