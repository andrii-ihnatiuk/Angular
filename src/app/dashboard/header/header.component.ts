import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  go(path: string): void {
    if (path === 'log') {
      this.router.navigate(['/lr3/login']);
    }
    else {
      this.router.navigate(['/lr3/register']);
    }
  }

}
