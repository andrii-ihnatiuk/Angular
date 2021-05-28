import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  active: number;
  currentRate: number;

  constructor() {
    this.active = 1;
    this.currentRate = 0;
  }

  ngOnInit(): void {
  }

}
