import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate( // Since i don't use Back-end API, the only way i've found to check for token expiration is to use guards
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.getToken()) {
      this.router.navigate(['/lr3/login']);
      return false;
    } else {
      if (this.authService.isTokenExpired()) {
        this.router.navigate(['/lr3/login']);
        alert('Ваша сессия была завершена, повторите вход.');
        this.authService.logout(); // Очищаем local storage чтобы alert не появлялся вновь
        return false;
      }
      return true;
    }
  }
  
}