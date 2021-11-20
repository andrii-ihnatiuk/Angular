import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

interface Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  population: number;
}
const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

const COUNTRIES: Array<Country> = [
  {
    id: 1,
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    id: 2,
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  countries: any;
  rows: Order[] | null;

  constructor(private ordersService: OrdersService) {
    this.countries = COUNTRIES;
    this.rows = null;
  }

  ngOnInit(): void {
    this.getOrders();
  }

  sort(e: any): void {
    const id: string = e.target.id;
    console.log('sorting by' + id);
  }

  getOrders(): void {
    this.ordersService.getAll().subscribe((orders: Order[]) => {
      this.rows = orders;
    });
  }

}



