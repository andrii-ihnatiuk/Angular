import { Component, OnInit } from '@angular/core';

@Component({ // Decorator for component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName: string;
  title: string;
  clicks: number;

  constructor() { 
    this.firstName = '';
    this.title = '';
    this.clicks = 0;
  }

  ngOnInit(): void {
    this.firstName = 'stranger';
    this.title = 'Greeting';
  }

  andrew(): void {
    this.firstName = 'Andrew';
  }

  roman(): void {
    this.firstName = 'Roman';
  }

  setClicks(details: boolean):void {
    details==true? this.clicks++ : this.clicks--;
  }

}
