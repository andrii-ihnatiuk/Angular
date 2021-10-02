import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-lr2-child1',
  templateUrl: './lr2-child1.component.html',
  styleUrls: ['./lr2-child1.component.css']
})
export class Lr2Child1Component implements OnInit {

  @Input() titleTmpl: TemplateRef<any> | null;


  products: any[] = [];
  isArrayEmpty: boolean;

  pipeTest: string;

  constructor() {
    this.titleTmpl = null;
    this.isArrayEmpty = true;
    this.pipeTest = 'Hello dear frind! We are so excited to see you on this page.';
   }

  ngOnInit(): void {
  }

  addProduct(text: string, value: number | null): void {
    if (!value) {
      value = 0;
    }
    this.isArrayEmpty = false;

    const result = this.countPercents(value);
    this.products.push({ name: text, price: value, date: Date.now(), percent: result});
  }

  countPercents(newVal: number): number {
    if (this.products.length > 0) {
      let total = newVal;
      this.products.forEach(e => {
          total += e.price;
      });
      this.products.forEach(e => {
        e.percent = e.price / total;
      });
      return (newVal / total);
    }
    else {
      return 1;
    }
  }

}
