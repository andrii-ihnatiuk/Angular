import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  condition: boolean;
  array: Array<String>;

  redColor: boolean;
  cursive: boolean;

  constructor() {
    this.condition = false;
    this.redColor = false;
    this.cursive = false;
    this.array = ['Ukraine', 'England', 'USA', 'France', 'Norway', 'Canada', 'Germany'];
   }

  ngOnInit(): void {
  }

  switchCondition(): void {
    this.condition=!this.condition;
  }

  checkHandler(change: string) {
    if (change === 'color') 
      this.redColor=!this.redColor;  
    else
      this.cursive=!this.cursive;
  }
  
}
