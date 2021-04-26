import { Component, OnInit, ViewChild } from '@angular/core';
import { Lr2Child1Component } from '../lr2-child1/lr2-child1.component';

@Component({
  selector: 'app-lr2',
  templateUrl: './lr2.component.html',
  styleUrls: ['./lr2.component.css']
})
export class Lr2Component implements OnInit {

  @ViewChild('child1', {static: false}) child1: Lr2Child1Component | null;

  countries = [
    {id: 1, name: 'Ukraine'},
    {id: 2, name: 'Poland'}
  ];

  ukCities = [
    {id: 1, name: 'Odessa'},
    {id: 2, name: 'Kiev'}
  ];

  polCities = [
    {id: 3, name: 'Krakow'},
    {id: 4, name: 'Warsaw'}
  ];

  selCountry: string;


  constructor() {
    this.selCountry = '';
    this.child1 = null;
  }

  ngOnInit(): void {
  }

  setCountry(country: string): void {
    this.selCountry = country;
   }

  addProduct(name: string | null, price: string): void {
    if (name && name.trim().length > 0) {
      const textMod = name.concat(' product');
      this.child1?.addProduct(textMod, Number(price));
    }
    else { alert('No value typed!'); }
  }

}
