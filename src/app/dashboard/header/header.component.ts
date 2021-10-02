import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
    this.authService.setInOut();
  }

  go(path: string): void {
    if (path === 'login') {
      this.router.navigate(['/lr3/login']);
    } else if (path === 'reg') {
      this.router.navigate(['/lr3/register']);
    } else if (path === 'logout') {
      this.authService.logout();
    } 
  }

}
